import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nbwgavnygpemeloznuqo.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { userId, userEmail, subject, question, correctAnswer, reason } = await request.json()

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
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_FLAGS_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'V1 Study <support@v1study.com.au>',
        to: 'support@v1study.com.au',
        reply_to: userEmail || undefined,
        subject: `Flagged Question — ${subject}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem;">
            <h2 style="color: #dc2626;">⚠️ Question Flagged for Review</h2>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Flagged by:</strong> ${userEmail || 'Unknown'}</p>
            <p><strong>Reason:</strong> ${reason || 'No reason provided'}</p>
            <p><strong>Correct answer:</strong> ${correctAnswer}</p>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
              <strong>Question:</strong><br/>${question}
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 1.5rem;">Reply directly to this email to respond to ${userEmail || 'the student'}.</p>
          </div>
        `,
      }),
    })

    const emailData = await emailRes.json()
    console.log('Resend response:', JSON.stringify(emailData))

    if (!emailRes.ok) {
      console.error('Resend error:', emailData)
      return NextResponse.json({ success: true, emailError: emailData })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Flag error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
