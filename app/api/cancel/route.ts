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

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Get subscription from Supabase
    const { data: userData } = await supabase.auth.admin.listUsers()
    const users = userData?.users as any[]
    const user = users?.find((u: any) => u.email?.toLowerCase() === email.toLowerCase())

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .single()

    if (!subscription?.stripe_subscription_id) {
      return NextResponse.json({ error: 'No active subscription found' }, { status: 404 })
    }

    // Cancel at period end — student keeps access until billing period ends
    await stripe.subscriptions.update(subscription.stripe_subscription_id, {
      cancel_at_period_end: true,
    })

    // Update Supabase status
    await supabase
      .from('subscriptions')
      .update({ status: 'cancelling' })
      .eq('stripe_subscription_id', subscription.stripe_subscription_id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
