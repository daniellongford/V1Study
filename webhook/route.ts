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
  'price_1TIP96Cbt27bkqBv9ULJdyTz': 'PPL',
  'price_1TIP6XCbt27bkqBv9CypW42J': 'CPL',
  'price_1TIPAiCbt27bkqBvEItgo0gn': 'ATPL',
  'price_1TIPDdCbt27bkqBvZzwkYthb': 'IREX',
  'price_1TIPBvCbt27bkqBvv4fUShu3': 'FULL',
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_email
    const subscriptionId = session.subscription as string

    if (!email || !subscriptionId) return NextResponse.json({ received: true })

    // Get price ID from subscription
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const priceId = subscription.items.data[0]?.price?.id
    const plan = PRICE_TO_PLAN[priceId]
    if (!plan) return NextResponse.json({ received: true })

    // Find user by email
    const { data: userData } = await supabase.auth.admin.listUsers()
    const users = userData?.users as any[]
    const user = users?.find((u: any) => u.email === email)
    if (!user) return NextResponse.json({ received: true })

    // Save subscription
    await supabase.from('subscriptions').upsert({
      user_id: user.id,
      stripe_customer_id: session.customer as string,
      stripe_subscription_id: subscriptionId,
      plan,
      status: subscription.status === 'trialing' || subscription.status === 'active' ? 'active' : 'inactive',
      trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
    }, { onConflict: 'user_id' })
  }

  if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as Stripe.Subscription
    // Both 'active' and 'trialing' grant full access. Anything else (past_due,
    // canceled, unpaid, incomplete) removes access.
    const grantsAccess = subscription.status === 'active' || subscription.status === 'trialing'
    const status = grantsAccess ? 'active' : 'inactive'
    const priceId = subscription.items.data[0]?.price?.id
    const plan = PRICE_TO_PLAN[priceId] || null

    await supabase.from('subscriptions')
      .update({
        status,
        plan,
        trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
      })
      .eq('stripe_subscription_id', subscription.id)
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription

    await supabase.from('subscriptions')
      .update({ status: 'inactive' })
      .eq('stripe_subscription_id', subscription.id)
  }

  return NextResponse.json({ received: true })
}
