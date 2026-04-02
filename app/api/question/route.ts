import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { subject, licence } = await request.json()

    const prompt = `You are an Australian aviation exam question generator for ${licence} candidates studying under CASA (Civil Aviation Safety Authority Australia). Generate ONE multiple-choice practice exam question for the subject: "${subject}".

Respond ONLY with raw JSON, no markdown, no backticks, no explanation:
{"question":"...","options":["A. ...","B. ...","C. ...","D. ..."],"correct":0,"explanation":"...","reference":"..."}

Rules:
- correct is the 0-based index of the correct option
- explanation is 2-3 sentences explaining why that answer is correct
- reference is the specific CASA document or section (e.g. CASR Part 61.395, AIP ENR 1.1, CAO 48.1)
- All 4 options must be plausible
- Raw JSON only, no markdown`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const data = await response.json()
    const text = data.content[0].text
    const clean = text.replace(/```json/g, '').replace(/```/g, '').trim()
    const start = clean.indexOf('{')
    const end = clean.lastIndexOf('}')
    const question = JSON.parse(clean.substring(start, end + 1))

    return NextResponse.json(question)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate question' }, { status: 500 })
  }
}
