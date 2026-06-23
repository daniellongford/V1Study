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

// Display names and monthly prices for the welcome email
const PLAN_DETAILS: Record<string, { name: string; price: string }> = {
  PPL: { name: 'PPL Pack', price: '$9.99' },
  CPL: { name: 'CPL Pack', price: '$19.99' },
  ATPL: { name: 'ATPL Pack', price: '$29.99' },
  IREX: { name: 'IREX Standalone', price: '$14.99' },
  FULL: { name: 'Full Access', price: '$34.99' },
}

async function sendWelcomeEmail(toEmail: string, plan: string, trialEndUnix: number | null) {
  const details = PLAN_DETAILS[plan]
  if (!details) return

  const trialEndStr = trialEndUnix
    ? new Date(trialEndUnix * 1000).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_QHnLhYjP_EwFsN39ofpXXgzZWjuNWTgKq`,
      },
      body: JSON.stringify({
        from: 'V1 Study <support@v1study.com.au>',
        to: toEmail,
        subject: 'Welcome to V1 Study',
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="padding: 2rem 2rem 1.5rem; border-bottom: 1px solid #e2e8f0;">
              <div style="margin-bottom: 4px;">
                <span style="font-size: 22px; font-weight: 800; color: #2563eb;">V1</span>
                <span style="font-size: 22px; font-weight: 800; color: #0a1628;"> Study</span>
              </div>
              <div style="font-size: 11px; color: #94a3b8; font-style: italic;">V1. Rotate. Pass.</div>
            </div>
            <div style="padding: 2rem;">
              <div style="font-size: 18px; font-weight: 700; color: #0a1628; margin-bottom: 12px;">Welcome aboard.</div>
              <div style="font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 1.25rem;">
                Your 7 day free trial has started and your account is ready to go. You've got full access to everything in your plan from right now — start practising whenever you're ready.
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1.25rem;">
                <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                  <tr>
                    <td style="color: #64748b; padding: 5px 0;">Plan</td>
                    <td style="text-align: right; padding: 5px 0; color: #0a1628; font-weight: 600;">${details.name}</td>
                  </tr>
                  ${trialEndStr ? `<tr>
                    <td style="color: #64748b; padding: 5px 0;">Trial ends</td>
                    <td style="text-align: right; padding: 5px 0; color: #0a1628; font-weight: 600;">${trialEndStr}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 5px 0;">Then</td>
                    <td style="text-align: right; padding: 5px 0; color: #0a1628; font-weight: 600;">${details.price}/month from ${trialEndStr}</td>
                  </tr>` : ''}
                </table>
              </div>
              <div style="text-align: center; margin-bottom: 1.5rem;">
                <a href="https://v1study.com.au/dashboard" style="background: #2563eb; color: white; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 7px; text-decoration: none; display: inline-block;">Go to your dashboard</a>
              </div>
              <div style="font-size: 13px; color: #64748b; line-height: 1.7;">
                Questions? Just reply to this email or reach us at support@v1study.com.au — we're always happy to help you get exam ready.
              </div>
            </div>
            <div style="padding: 1.5rem 2rem; border-top: 1px solid #e2e8f0; text-align: center;">
              <div style="font-size: 13px; color: #475569; margin-bottom: 4px;">V1 Study Team</div>
              <div style="font-size: 12px; color: #94a3b8;">support@v1study.com.au · v1study.com.au</div>
              <div style="font-size: 11px; color: #cbd5e1; margin-top: 8px;">V1. Rotate. Pass.</div>
            </div>
          </div>
        `,
      }),
    })
  } catch (e) {
    console.error('Welcome email error:', e)
  }
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
    const subscriptionId = session.subscription as string
    if (!subscriptionId) return NextResponse.json({ received: true })

    // Resolve email — Stripe may put it in customer_email, customer_details,
    // or only on the customer record. Check all of them.
    let email = session.customer_email || session.customer_details?.email || null

    // Get the subscription (also used to look up the customer email if needed)
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const priceId = subscription.items.data[0]?.price?.id
    const plan = PRICE_TO_PLAN[priceId]
    if (!plan) return NextResponse.json({ received: true })

    // Fallback: pull email from the Stripe customer record
    if (!email && session.customer) {
      try {
        const customer = await stripe.customers.retrieve(session.customer as string)
        if (customer && !('deleted' in customer)) {
          email = (customer as Stripe.Customer).email || null
        }
      } catch (e) {
        console.error('Customer lookup failed:', e)
      }
    }

    if (!email) {
      console.error('No email found on checkout session', session.id)
      return NextResponse.json({ received: true })
    }

    // Find user by email
    const { data: userData } = await supabase.auth.admin.listUsers()
    const users = userData?.users as any[]
    const user = users?.find((u: any) => u.email?.toLowerCase() === email!.toLowerCase())
    if (!user) {
      console.error('No matching user for email', email)
      return NextResponse.json({ received: true })
    }

    // Save subscription
    await supabase.from('subscriptions').upsert({
      user_id: user.id,
      stripe_customer_id: session.customer as string,
      stripe_subscription_id: subscriptionId,
      plan,
      status: subscription.status === 'trialing' || subscription.status === 'active' ? 'active' : 'inactive',
      trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
    }, { onConflict: 'user_id' })

    // Send welcome email
    await sendWelcomeEmail(email, plan, subscription.trial_end ?? null)
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
