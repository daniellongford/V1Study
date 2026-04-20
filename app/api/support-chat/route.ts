import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { message, context } = await request.json()

  const systemPrompt = context
    ? `You are a helpful aviation study assistant for V1 Study, an Australian pilot exam preparation platform. 
A student is studying for their CASA pilot exams and needs help understanding a specific question.

Here is the question context:
Subject: ${context.subject}
Question: ${context.question}
Options: ${context.options.join(' | ')}
Correct answer: ${context.correctAnswer}
Official explanation: ${context.explanation}
Reference: ${context.reference}

Your role is to help the student understand this topic more deeply. Be clear, concise and accurate. 
Reference Australian aviation regulations and CASA documents where relevant.
Keep responses under 200 words unless more detail is genuinely needed.
IMPORTANT: Respond in plain text only. Do not use markdown, asterisks, pound signs, bullet points, headers or any special formatting. Write in clear plain sentences and paragraphs only.`
    : `You are a helpful support assistant for V1 Study, an Australian pilot exam preparation platform.
Help students with questions about CASA exams, study tips, platform features, and aviation theory.
Be friendly, professional and concise. Reference Australian aviation regulations where relevant.
Keep responses under 200 words unless more detail is genuinely needed.
IMPORTANT: Respond in plain text only. Do not use markdown, asterisks, pound signs, bullet points, headers or any special formatting. Write in clear plain sentences and paragraphs only.`

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 512,
        system: systemPrompt,
        messages: [{ role: 'user', content: message }],
      }),
    })

    const data = await response.json()
    const text = data.content?.[0]?.text || 'Sorry, I could not generate a response.'
    return NextResponse.json({ response: text })
  } catch (err) {
    return NextResponse.json({ response: 'Sorry, something went wrong. Please try again.' }, { status: 500 })
  }
}
