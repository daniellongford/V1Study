import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  'https://nbwgavnygpemeloznuqo.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const PRICE_TO_PLAN: Record<string, string> = {
  'price_1UDInpCdMFoMcdWhqFI4pXIR': 'PPL',
  'price_1UDInpCdMFoMcdWhYQDoUP5y': 'CPL',
  'price_1UDInvCdMFoMcdWh7m6hD1NW': 'ATPL',
  'price_1UDInpCdMFoMcdWhwvavh1ks': 'IREX',
  'price_1UDInpCdMFoMcdWhHEFjZJuT': 'FULL',
}

// Called by the dashboard when a logged-in user has no subscription row.
// Looks the user up in Stripe by email and, if they have a live trial or
// active subscription, writes the row so access is granted immediately.
// This makes access independent of webhook delivery.
export async function POST(request: NextRequest) {
  try {
    const { userId, email } = await request.json()
    if (!userId || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    // Find Stripe customers with this email
    const customers = await stripe.customers.list({ email, limit: 10 })

    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({ customer: customer.id, status: 'all', limit: 10 })
      const live = subs.data.find(s => s.status === 'trialing' || s.status === 'active')
      if (!live) continue

      const priceId = live.items.data[0]?.price?.id
      const plan = PRICE_TO_PLAN[priceId]
      if (!plan) continue

      const { error } = await supabase.from('subscriptions').upsert({
        user_id: userId,
        stripe_customer_id: customer.id,
        stripe_subscription_id: live.id,
        plan,
        status: 'active',
        trial_end: live.trial_end ? new Date(live.trial_end * 1000).toISOString() : null,
      }, { onConflict: 'user_id' })

      if (error) {
        console.error('sync upsert failed', error)
        return NextResponse.json({ synced: false, error: error.message })
      }
      return NextResponse.json({ synced: true, plan })
    }

    return NextResponse.json({ synced: false, reason: 'no live subscription in Stripe' })
  } catch (err: any) {
    console.error('sync error', err?.message)
    return NextResponse.json({ synced: false, error: err?.message }, { status: 500 })
  }
}
