'use client'
import { useState, useEffect, useRef, use } from 'react'
import { supabase } from '../../../lib/supabase'
import { freeQuestions } from '../../../lib/questions'

function findQuestions(subject: string) {
  if (freeQuestions[subject]) return freeQuestions[subject]
  const lower = subject.toLowerCase().trim()
  for (const key of Object.keys(freeQuestions)) {
    if (key.toLowerCase().trim() === lower) return freeQuestions[key]
  }
  for (const key of Object.keys(freeQuestions)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) return freeQuestions[key]
  }
  return []
}

function getLicence(subject: string): string {
  if (subject === 'PPL Theory') return 'PPL'
  if (subject === 'Instrument Rating') return 'IREX'
  if (['Human Factors', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology', 'Navigation', 'Flight Planning', 'Air Law'].includes(subject)) return 'ATPL'
  return 'CPL'
}

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
  const scoreRef = useRef(0)

  useEffect(() => {
    if (!subject) return
    const bank = findQuestions(subject)
    const shuffled = [...bank].sort(() => Math.random() - 0.5).slice(0, 10)
    setQuestions(shuffled)
    scoreRef.current = 0
  }, [subject])

  async function saveScore(s: number, total: number) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const pct = Math.round(s / total * 100)
      const { error } = await supabase.from('scores').insert({
        user_id: user.id,
        subject,
        licence: getLicence(subject),
        score: s,
        total,
        percentage: pct
      })
      if (!error) setScoreSaved(true)
    } catch (e) {
      console.error('Score save error:', e)
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

  function restart() {
    const bank = findQuestions(subject)
    setQuestions([...bank].sort(() => Math.random() - 0.5).slice(0, 10))
    setCurrentIdx(0)
    setFinalScore(0)
    setFinished(false)
    setAnswered(false)
    setSelectedAnswer(null)
    setScoreSaved(false)
    scoreRef.current = 0
  }

  if (!subject || questions.length === 0) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: '#64748b', fontSize: '16px' }}>Loading questions...</p>
      <a href="/dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}>Back to dashboard</a>
    </main>
  )

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
          {scoreSaved && <div style={{ fontSize: '12px', color: '#10b981', marginBottom: '1.5rem' }}>Score saved to your progress</div>}
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
            <button onClick={restart} style={{ flex: 1, background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '11px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Try Again</button>
            <a href="/dashboard" style={{ flex: 1, background: '#f8fafc', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>Dashboard</a>
          </div>
          <a href="/progress" style={{ display: 'block', marginTop: '12px', fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>View all progress →</a>
        </div>
      </main>
    )
  }

  const q = questions[currentIdx]
  const letters = ['A', 'B', 'C', 'D']

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Back to dashboard</a>
      </nav>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ marginBottom: '6px', fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Question {currentIdx + 1} of {questions.length}</div>
        <div style={{ background: '#e2e8f0', borderRadius: '99px', height: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: `${(currentIdx / questions.length) * 100}%`, transition: 'width 0.4s' }}></div>
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
                <button key={i} onClick={() => selectAnswer(i)} disabled={answered} style={{ background: bg, border, borderRadius: '8px', padding: '11px 14px', textAlign: 'left', cursor: answered ? 'default' : 'pointer', fontSize: '14px', color: col, display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', background: answered && i === q.correct ? '#dcfce7' : answered && i === selectedAnswer ? '#ffe4e6' : '#f1f5f9', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {answered && i === q.correct ? '✓' : answered && i === selectedAnswer ? '✗' : letters[i]}
                  </span>
                  <span>{opt.replace(/^[A-D]\.\s*/, '')}</span>
                </button>
              )
            })}
          </div>
        </div>
        {answered && (
          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1d4ed8', marginBottom: '8px' }}>Explanation</div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1e3a6e', marginBottom: '12px' }}>{q.explanation}</p>
            <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '10px' }}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#2563eb', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reference — verify this yourself</div>
              <div style={{ fontSize: '12px', color: '#3b82f6', fontFamily: 'monospace' }}>{q.reference}</div>
            </div>
          </div>
        )}
        {answered && (
          <button onClick={nextQuestion} style={{ width: '100%', background: '#1e3a6e', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            {currentIdx < questions.length - 1 ? 'Next question →' : 'See results →'}
          </button>
        )}
      </div>
    </main>
  )
}
