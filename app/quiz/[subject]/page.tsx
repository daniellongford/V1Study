'use client'
import { useState, useEffect, useRef, use } from 'react'
import { supabase } from '../../../lib/supabase'
import { freeQuestions } from '../../../lib/questions'
import { FULL_BANKS, getLicence } from '../../../lib/question-banks'

// ── Helpers ──────────────────────────────────────────────────────────────────

function findBank(subject: string): any[] {
  // Try full bank first (subscribed users), fall back to free questions
  const full = FULL_BANKS[subject]
  if (full && full.length > 0) return full
  if (freeQuestions[subject]) return freeQuestions[subject]
  const lower = subject.toLowerCase().trim()
  for (const key of Object.keys(FULL_BANKS)) {
    if (key.toLowerCase().trim() === lower && FULL_BANKS[key].length > 0) return FULL_BANKS[key]
  }
  for (const key of Object.keys(freeQuestions)) {
    if (key.toLowerCase().trim() === lower) return freeQuestions[key]
  }
  return []
}

function pickQuestions(bank: any[], seen: number[], count = 10): { questions: any[], indices: number[], reset: boolean } {
  const unseenIndices = bank.map((_, i) => i).filter(i => !seen.includes(i))
  let reset = false
  let pool = unseenIndices

  if (pool.length < count) {
    // All questions seen — reset and start fresh
    pool = bank.map((_, i) => i)
    reset = true
  }

  // Shuffle pool and pick `count`
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count)
  return {
    questions: shuffled.map(i => ({ ...bank[i], _bankIndex: i })),
    indices: shuffled,
    reset,
  }
}

// ── Supabase helpers ──────────────────────────────────────────────────────────

async function loadSeen(userId: string, subject: string): Promise<number[]> {
  try {
    const { data, error } = await supabase
      .from('question_progress')
      .select('seen')
      .eq('user_id', userId)
      .eq('subject', subject)
      .single()
    if (error || !data) return []
    return data.seen ?? []
  } catch {
    return []
  }
}

async function saveSeen(userId: string, subject: string, newIndices: number[], reset: boolean, bankSize: number): Promise<void> {
  try {
    // If reset, start fresh with just the new indices
    // Otherwise append new indices to existing seen list
    if (reset) {
      await supabase
        .from('question_progress')
        .upsert({
          user_id: userId,
          subject,
          seen: newIndices,
          total: bankSize,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,subject' })
    } else {
      // Use Postgres array_cat to append without fetching first
      const { data: existing } = await supabase
        .from('question_progress')
        .select('seen')
        .eq('user_id', userId)
        .eq('subject', subject)
        .single()
      const current: number[] = existing?.seen ?? []
      const merged = Array.from(new Set([...current, ...newIndices]))
      await supabase
        .from('question_progress')
        .upsert({
          user_id: userId,
          subject,
          seen: merged,
          total: bankSize,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,subject' })
    }
  } catch (e) {
    console.error('saveSeen error:', e)
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function QuizPage({ params }: { params: Promise<{ subject: string }> }) {
  const resolvedParams = use(params)
  const subject = decodeURIComponent(resolvedParams.subject || '')

  const [questions, setQuestions] = useState<any[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)
  const [scoreSaved, setScoreSaved] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [seenCount, setSeenCount] = useState(0)
  const [bankSize, setBankSize] = useState(0)
  const [wasReset, setWasReset] = useState(false)
  const [loading, setLoading] = useState(true)

  const scoreRef = useRef(0)
  const sessionIndicesRef = useRef<number[]>([])
  const resetRef = useRef(false)
  const userIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!subject) return
    const bank = findBank(subject)
    setBankSize(bank.length)

    async function init() {
      setLoading(true)
      try {
        const { data: { user } } = await supabase.auth.getUser()
        userIdRef.current = user?.id ?? null

        const seen = user ? await loadSeen(user.id, subject) : []
        setSeenCount(seen.length)

        const { questions: picked, indices, reset } = pickQuestions(bank, seen)
        sessionIndicesRef.current = indices
        resetRef.current = reset
        setWasReset(reset)
        setQuestions(picked)
        scoreRef.current = 0
      } catch (e) {
        // Fallback: just pick random questions
        const { questions: picked, indices } = pickQuestions(bank, [])
        sessionIndicesRef.current = indices
        setQuestions(picked)
        scoreRef.current = 0
      }
      setLoading(false)
    }

    init()
  }, [subject])

  async function saveScore(s: number, total: number) {
    try {
      const userId = userIdRef.current
      if (!userId) return
      const pct = Math.round(s / total * 100)

      // Save score and update seen indices in parallel
      await Promise.all([
        supabase.from('scores').insert({
          user_id: userId,
          subject,
          licence: getLicence(subject),
          score: s,
          total,
          percentage: pct,
        }),
        saveSeen(userId, subject, sessionIndicesRef.current, resetRef.current, bankSize),
      ])

      setScoreSaved(true)
    } catch (e) {
      console.error('saveScore error:', e)
    }
  }

  function selectAnswer(idx: number) {
    if (answered) return
    setAnswered(true)
    setSelectedAnswer(idx)
    if (idx === questions[currentIdx].correct) {
      scoreRef.current += 1
    }
  }

  function nextQuestion() {
    const isLast = currentIdx >= questions.length - 1
    if (isLast) {
      const fs = scoreRef.current
      setFinalScore(fs)
      saveScore(fs, questions.length)
      setFinished(true)
    } else {
      setCurrentIdx(i => i + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    }
  }

  async function restart() {
    const bank = findBank(subject)
    const userId = userIdRef.current
    const seen = userId ? await loadSeen(userId, subject) : []
    const { questions: picked, indices, reset } = pickQuestions(bank, seen)
    sessionIndicesRef.current = indices
    resetRef.current = reset
    setWasReset(reset)
    setQuestions(picked)
    setCurrentIdx(0)
    setFinalScore(0)
    setFinished(false)
    setAnswered(false)
    setSelectedAnswer(null)
    setScoreSaved(false)
    scoreRef.current = 0
  }

  // ── Progress pill ──────────────────────────────────────────────────────────

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading || !subject || questions.length === 0) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: '#64748b', fontSize: '16px' }}>Loading questions...</p>
      <a href="/dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}>Back to dashboard</a>
    </main>
  )

  // ── Results screen ─────────────────────────────────────────────────────────
  if (finished) {
    const pct = Math.round(finalScore / questions.length * 100)
    return (
      <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', maxWidth: '500px', width: '100%', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '8px' }}>{subject}</div>
          <div style={{ fontSize: '56px', fontWeight: '800', color: '#1e3a6e', fontFamily: 'monospace' }}>{pct}</div>
          <div style={{ fontSize: '16px', color: '#64748b', marginBottom: '8px' }}>percent</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: pct >= 70 ? '#16a34a' : '#dc2626', marginBottom: '0.5rem' }}>
            {pct >= 70 ? 'Pass — well done!' : 'Below pass mark — keep studying'}
          </div>
          {scoreSaved && <div style={{ fontSize: '12px', color: '#10b981', marginBottom: '0.5rem' }}>Score saved to your progress</div>}



          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#16a34a' }}>{finalScore}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Correct</div>
            </div>
            <div style={{ background: '#fff1f2', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#dc2626' }}>{questions.length - finalScore}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Incorrect</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={restart} style={{ flex: 1, background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '11px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>
              Next 10 →
            </button>
            <a href="/dashboard" style={{ flex: 1, background: '#f8fafc', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              Dashboard
            </a>
          </div>
          <a href="/progress" style={{ display: 'block', marginTop: '12px', fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>
            View all progress →
          </a>
        </div>
      </main>
    )
  }

  // ── Quiz screen ────────────────────────────────────────────────────────────
  const q = questions[currentIdx]
  const letters = ['A', 'B', 'C', 'D']

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

          <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Back to dashboard</a>
        </div>
      </nav>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ marginBottom: '6px', fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>
          Question {currentIdx + 1} of {questions.length}
        </div>
        <div style={{ background: '#e2e8f0', borderRadius: '99px', height: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: `${(currentIdx / questions.length) * 100}%`, transition: 'width 0.4s' }} />
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#2563eb', marginBottom: '10px', fontFamily: 'monospace' }}>{subject}</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.55, marginBottom: '1.25rem' }}>{q.question}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {q.options.map((opt: string, i: number) => {
              let bg = 'white'
              let border = '1px solid #e2e8f0'
              let col = '#0a1628'
              if (answered) {
                if (i === q.correct) { bg = '#f0fdf4'; border = '1px solid #16a34a'; col = '#15803d' }
                else if (i === selectedAnswer) { bg = '#fff1f2'; border = '1px solid #dc2626'; col = '#b91c1c' }
                else { col = '#94a3b8' }
              }
              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  disabled={answered}
                  style={{ background: bg, border, borderRadius: '8px', padding: '11px 14px', textAlign: 'left', cursor: answered ? 'default' : 'pointer', fontSize: '14px', color: col, display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', background: answered && i === q.correct ? '#dcfce7' : answered && i === selectedAnswer ? '#ffe4e6' : '#f1f5f9', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {answered && i === q.correct ? '✓' : answered && i === selectedAnswer ? '✗' : letters[i]}
                  </span>
                  <span style={{ flex: 1, minWidth: 0 }}>{opt.replace(/^[A-D]\.\s*/, '')}</span>
                </button>
              )
            })}
          </div>
        </div>

        {answered && (
          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1d4ed8', marginBottom: '8px' }}>Explanation</div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1e3a6e', marginBottom: '12px' }}>{q.explanation}</p>
            <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '10px', marginBottom: '12px' }}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#2563eb', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reference — verify this yourself</div>
              <div style={{ fontSize: '12px', color: '#3b82f6', fontFamily: 'monospace' }}>{q.reference}</div>
            </div>
            <AiHelpPanel question={q} subject={subject} />
          </div>
        )}

        {answered && (
          <button
            onClick={nextQuestion}
            style={{ width: '100%', background: '#1e3a6e', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
          >
            {currentIdx < questions.length - 1 ? 'Next question →' : 'See results →'}
          </button>
        )}
      </div>
    </main>
  )
}

// ── AI Help Panel (unchanged) ─────────────────────────────────────────────────

function AiHelpPanel({ question, subject }: { question: any; subject: string }) {
  const [open, setOpen] = useState(false)
  const [userMessage, setUserMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAsk() {
    if (!userMessage.trim()) return
    setLoading(true)
    setResponse('')
    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          context: {
            question: question.question,
            options: question.options,
            correctAnswer: question.options[question.correct],
            explanation: question.explanation,
            reference: question.reference,
            subject,
          },
        }),
      })
      const data = await res.json()
      setResponse(data.response || 'Sorry, something went wrong.')
    } catch {
      setResponse('Sorry, something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '12px' }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          style={{ background: 'none', border: '1px solid #2563eb', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          💬 Still confused? Ask for more help
        </button>
      ) : (
        <div>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#1d4ed8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ask a follow-up question</div>
          <textarea
            placeholder={`Ask anything about this question — e.g. "Can you explain why option A is wrong?" or "Give me a real world example"`}
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
            rows={3}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '8px', background: 'white' }}
          />
          <div style={{ display: 'flex', gap: '8px', marginBottom: response ? '12px' : '0' }}>
            <button
              onClick={handleAsk}
              disabled={loading || !userMessage.trim()}
              style={{ background: loading || !userMessage.trim() ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '9px 18px', fontSize: '13px', fontWeight: '600', cursor: loading || !userMessage.trim() ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Thinking...' : 'Ask →'}
            </button>
            <button
              onClick={() => { setOpen(false); setResponse(''); setUserMessage('') }}
              style={{ background: 'none', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '9px 14px', fontSize: '13px', color: '#64748b', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
          {response && (
            <div style={{ background: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', fontSize: '13px', color: '#1e3a6e', lineHeight: 1.65 }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#2563eb', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>V1 Study Assistant</div>
              {response}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
