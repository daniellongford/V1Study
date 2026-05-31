import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer re_QHnLhYjP_EwFsN39ofpXXgzZWjuNWTgKq`,
      },
      body: JSON.stringify({
        from: 'V1 Study <support@v1study.com.au>',
        to: 'support@v1study.com.au',
        reply_to: email,
        subject: `Message from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem;">
            <div style="margin-bottom: 1.5rem;">
              <span style="font-size: 20px; font-weight: 800; color: #2563eb;">V1</span>
              <span style="font-size: 20px; font-weight: 800; color: #0a1628;"> Study</span>
            </div>
            <h2 style="color: #0a1628; font-size: 16px; margin-bottom: 1.5rem;">New message from ${name}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 13px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 13px;">${email}</td>
              </tr>
            </table>
            <div style="background: #f8fafc; border-radius: 8px; padding: 1rem; border: 1px solid #e2e8f0;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 8px; font-weight: 600;">Message</div>
              <div style="font-size: 14px; color: #0a1628; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 1.5rem;">Reply directly to this email to respond to ${name}.</p>
          </div>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend error:', data)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Support email error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
