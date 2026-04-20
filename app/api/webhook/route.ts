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
    const session = event.data.object as any
    const email = session.customer_details?.email || session.customer_email
    const subscriptionId = session.subscription as string

    if (!email || !subscriptionId) {
      return NextResponse.json({ received: true, debug: 'missing email or subscription' })
    }

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const priceId = subscription.items.data[0]?.price?.id
    const plan = PRICE_TO_PLAN[priceId]

    if (!plan) {
      return NextResponse.json({ received: true, debug: `unknown priceId: ${priceId}` })
    }

    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers({ perPage: 1000 })

    if (userError) {
      return NextResponse.json({ received: true, debug: `user lookup error: ${userError.message}` })
    }

    const user = users?.find((u: any) => u.email?.toLowerCase() === email.toLowerCase())

    if (!user) {
      await supabase.from('subscriptions').upsert({
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: subscriptionId,
        plan,
        status: 'active',
      }, { onConflict: 'stripe_customer_id' })
      return NextResponse.json({ received: true, debug: `user not found for email: ${email}` })
    }

    const { error: upsertError } = await supabase.from('subscriptions').upsert({
      user_id: user.id,
      stripe_customer_id: session.customer as string,
      stripe_subscription_id: subscriptionId,
      plan,
      status: 'active',
    }, { onConflict: 'user_id' })

    if (upsertError) {
      return NextResponse.json({ received: true, debug: `upsert error: ${upsertError.message}` })
    }
  }

  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as any
    const priceId = subscription.items.data[0]?.price?.id
    const plan = PRICE_TO_PLAN[priceId] || null

    let status = 'inactive'
    if (subscription.status === 'active' && !subscription.cancel_at_period_end) status = 'active'
    if (subscription.status === 'active' && subscription.cancel_at_period_end) status = 'cancelling'
    if (subscription.status === 'trialing') status = 'active'

    await supabase.from('subscriptions')
      .update({ status, plan })
      .eq('stripe_subscription_id', subscription.id)
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as any

    await supabase.from('subscriptions')
      .update({ status: 'inactive' })
      .eq('stripe_subscription_id', subscription.id)
  }

  return NextResponse.json({ received: true })
}
