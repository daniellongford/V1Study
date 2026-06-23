import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nbwgavnygpemeloznuqo.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const PLAN_DETAILS: Record<string, { name: string; price: string }> = {
  PPL: { name: 'PPL Pack', price: '$9.99' },
  CPL: { name: 'CPL Pack', price: '$19.99' },
  ATPL: { name: 'ATPL Pack', price: '$29.99' },
  IREX: { name: 'IREX Standalone', price: '$14.99' },
  FULL: { name: 'Full Access', price: '$34.99' },
}

export async function POST(request: NextRequest) {
  try {
    const { userId, email } = await request.json()
    if (!userId || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    // Look up the subscription — only send if active and not already welcomed
    const { data: sub } = await supabase
      .from('subscriptions')
      .select('plan, status, welcomed, trial_end')
      .eq('user_id', userId)
      .single()

    if (!sub) return NextResponse.json({ sent: false, reason: 'no subscription' })
    if (sub.welcomed) return NextResponse.json({ sent: false, reason: 'already welcomed' })
    if (sub.status !== 'active') return NextResponse.json({ sent: false, reason: 'not active' })

    const details = PLAN_DETAILS[sub.plan]
    if (!details) return NextResponse.json({ sent: false, reason: 'unknown plan' })

    const trialEndStr = sub.trial_end
      ? new Date(sub.trial_end).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
      : null

    // Send the welcome email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_QHnLhYjP_EwFsN39ofpXXgzZWjuNWTgKq`,
      },
      body: JSON.stringify({
        from: 'V1 Study <support@v1study.com.au>',
        to: email,
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

    if (!res.ok) {
      const err = await res.json()
      console.error('Welcome email failed:', err)
      return NextResponse.json({ sent: false, reason: 'resend error', detail: err })
    }

    // Mark as welcomed so it never sends twice
    await supabase.from('subscriptions').update({ welcomed: true }).eq('user_id', userId)

    return NextResponse.json({ sent: true })
  } catch (error: any) {
    console.error('Welcome route error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
