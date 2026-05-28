import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nbwgavnygpemeloznuqo.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { userId, subject, question, correctAnswer, reason } = await request.json()

    // Save to Supabase
    await supabase.from('flagged_questions').insert({
      user_id: userId,
      subject,
      question,
      correct_answer: correctAnswer,
      reason: reason || 'No reason provided',
      status: 'pending',
    })

    // Send email via Resend
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'V1 Study <support@v1study.com.au>',
        to: ['support@v1study.com.au'],
        subject: `Flagged Question — ${subject}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem;">
            <div style="margin-bottom: 1.5rem;">
              <span style="font-size: 20px; font-weight: 800; color: #2563eb;">V1</span>
              <span style="font-size: 20px; font-weight: 800; color: #0a1628;"> Study</span>
            </div>
            <h2 style="color: #dc2626; font-size: 16px; margin-bottom: 1.5rem;">⚠️ Question Flagged for Review</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 13px; font-weight: 600;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Reason</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 13px; font-weight: 600;">${reason || 'No reason provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Correct answer</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 13px;">${correctAnswer}</td>
              </tr>
            </table>
            <div style="background: #f8fafc; border-radius: 8px; padding: 1rem; border: 1px solid #e2e8f0; margin-bottom: 1rem;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 8px; font-weight: 600;">Question</div>
              <div style="font-size: 14px; color: #0a1628; line-height: 1.6;">${question}</div>
            </div>
            <p style="font-size: 12px; color: #94a3b8;">Review this question in your Supabase dashboard under the flagged_questions table.</p>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
