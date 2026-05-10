'use client'
import { useState, useEffect, useRef, use } from 'react'
import { supabase } from '../../../lib/supabase'
import { freeQuestions } from '../../../lib/questions'

// Full question banks — resolved at build time via try/require
// Falls back to [] if the file isn't in lib/ yet
let cplAirLaw: any[] = []
let cplHumanFactors: any[] = []
let cplMet: any[] = []
let cplNav: any[] = []
let cplAgk: any[] = []
let cplAero: any[] = []
let cplFpa: any[] = []
let pplBank: any[] = []
let irexBank: any[] = []

try { cplAirLaw     = require('../../../lib/questions-clwa').clwaQuestions } catch {}
try { cplHumanFactors = require('../../../lib/questions-chuf').chufQuestions } catch {}
try { cplMet        = require('../../../lib/questions-cmet').cmetQuestions } catch {}
try { cplNav        = require('../../../lib/questions-cnav').cnavQuestions } catch {}
try { cplAgk        = require('../../../lib/questions-cagk').cagkQuestions } catch {}
try { cplAero       = require('../../../lib/questions-cada').cadaQuestions } catch {}
try { cplFpa        = require('../../../lib/questions-cfpa').cfpaQuestions } catch {}
try { pplBank       = require('../../../lib/questions-ppla').pplaQuestions } catch {}
try { irexBank      = require('../../../lib/questions-irex').irexQuestions } catch {}
try { airLawAtpl = require('../../../lib/questions-aalw').aalwQuestions } catch {}

const FULL_BANKS: Record<string, any[]> = {
  'Flight Rules and Air Law':         cplAirLaw,
  'Human Factors':                    cplHumanFactors,
  'Meteorology':                      cplMet,
  'Navigation':                       cplNav,
  'Aircraft General Knowledge':       cplAgk,
  'Aerodynamics':                     cplAero,
  'Operations Performance Planning':  cplFpa,
  'PPL Theory':                       pplBank,
  'Instrument Rating':                irexBank,
  // ATPL subjects reuse CPL banks
  'Aerodynamics and Systems':         cplAero,
  'Meteorology Advanced':             cplMet,
  'Flight Planning':                  cplFpa,
  'Air Law':                          cplAirLaw,
  'Performance and Loading':          cplFpa,
}

const PLAN_ACCESS: Record<string, string[]> = {
  PPL:  ['PPL Theory'],
  CPL:  ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law'],
  ATPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Flight Planning', 'Air Law'],
  IREX: ['Instrument Rating'],
  FULL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Flight Planning', 'Air Law', 'Instrument Rating'],
}

const SESSION_SIZE = 10

function getLicence(subject: string) {
  if (subject === 'PPL Theory') return 'PPL'
  if (subject === 'Instrument Rating') return 'IREX'
  if (['Human Factors','Aerodynamics and Systems','Performance and Loading','Meteorology Advanced','Navigation','Flight Planning','Air Law'].includes(subject)) return 'ATPL'
  return 'CPL'
}

function seenKey(subject: string) {
  return 'v1_seen_' + subject.replace(/\s+/g, '_').toLowerCase()
}

function getSeenSet(subject: string): Set<number> {
  try {
    const raw = localStorage.getItem(seenKey(subject))
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

function markSeen(subject: string, indices: number[]) {
  try {
    const s = getSeenSet(subject)
    indices.forEach(i => s.add(i))
    localStorage.setItem(seenKey(subject), JSON.stringify([...s]))
  } catch {}
}

function pickFromBank(bank: any[], subject: string): any[] {
  if (!bank || bank.length === 0) return []
  const seen = getSeenSet(subject)
  let pool = bank.filter((_, i) => !seen.has(i))
  if (pool.length < SESSION_SIZE) {
    // Wrap: clear seen and use full bank
    try { localStorage.removeItem(seenKey(subject)) } catch {}
    pool = bank
  }
  return [...pool].sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE)
}

function findFree(subject: string): any[] {
  if (freeQuestions[subject]) return freeQuestions[subject]
  const lo = subject.toLowerCase()
  for (const k of Object.keys(freeQuestions)) {
    if (k.toLowerCase() === lo || lo.includes(k.toLowerCase()) || k.toLowerCase().includes(lo))
      return freeQuestions[k]
  }
  return []
}

export default function QuizPage({ params }: { params: Promise<{ subject: string }> }) {
  const resolvedParams = use(params)
  const subject = decodeURIComponent(resolvedParams.subject || '')

  const [plan, setPlan]           = useState<string | null>(null)
  const [planLoaded, setPlanLoaded] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])
  const [idx, setIdx]             = useState(0)
  const [answered, setAnswered]   = useState(false)
  const [selected, setSelected]   = useState<number | null>(null)
  const [finished, setFinished]   = useState(false)
  const [saved, setSaved]         = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const scoreRef   = useRef(0)
  const sessionIdx = useRef<number[]>([])

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { setPlanLoaded(true); return }
      supabase.from('subscriptions').select('plan, status')
        .eq('user_id', user.id).eq('status', 'active').maybeSingle()
        .then(({ data }) => { setPlan(data?.plan ?? null); setPlanLoaded(true) })
    })
  }, [])

  useEffect(() => {
    if (!subject || !planLoaded) return
    loadQuestions()
  }, [subject, planLoaded]) // eslint-disable-line

  function loadQuestions() {
    const hasAccess = !!(plan && PLAN_ACCESS[plan]?.includes(subject))
    const bank = FULL_BANKS[subject]
    let pool: any[]

    if (hasAccess && bank && bank.length > 0) {
      pool = pickFromBank(bank, subject)
      sessionIdx.current = pool.map(q => bank.indexOf(q))
    } else {
      pool = [...findFree(subject)].sort(() => Math.random() - 0.5).slice(0, SESSION_SIZE)
      sessionIdx.current = []
    }

    setQuestions(pool)
    scoreRef.current = 0
  }

  async function saveScore(s: number, total: number) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      await supabase.from('scores').insert({
        user_id: user.id, subject,
        licence: getLicence(subject),
        score: s, total, percentage: Math.round(s / total * 100),
      })
      setSaved(true)
    } catch {}
  }

  function selectAnswer(i: number) {
    if (answered) return
    setAnswered(true)
    setSelected(i)
    if (i === questions[idx].correct) scoreRef.current++
  }

  function next() {
    if (idx >= questions.length - 1) {
      const fs = scoreRef.current
      setFinalScore(fs)
      saveScore(fs, questions.length)
      if (sessionIdx.current.length) markSeen(subject, sessionIdx.current.filter(i => i >= 0))
      setFinished(true)
    } else {
      setIdx(i => i + 1)
      setAnswered(false)
      setSelected(null)
    }
  }

  function restart() {
    loadQuestions()
    setIdx(0); setFinalScore(0); setFinished(false)
    setAnswered(false); setSelected(null); setSaved(false)
    scoreRef.current = 0
  }

  if (!subject || !planLoaded || questions.length === 0) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: '#64748b', fontSize: '16px' }}>Loading questions...</p>
      <a href="/dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}>← Dashboard</a>
    </main>
  )

  if (finished) {
    const pct = Math.round(finalScore / questions.length * 100)
    const pass = pct >= 70
    return (
      <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', maxWidth: '500px', width: '100%', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '8px' }}>{subject}</div>
          <div style={{ fontSize: '56px', fontWeight: '800', color: '#1e3a6e', fontFamily: 'monospace' }}>{pct}</div>
          <div style={{ fontSize: '16px', color: '#64748b', marginBottom: '8px' }}>percent</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: pass ? '#16a34a' : '#dc2626', marginBottom: '0.5rem' }}>
            {pass ? 'Pass — well done!' : 'Below pass mark — keep studying'}
          </div>
          {saved && <div style={{ fontSize: '12px', color: '#10b981', marginBottom: '1.5rem' }}>Score saved to your progress</div>}
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
            <button onClick={restart} style={{ flex: 1, background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '11px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Next 10 →</button>
            <a href="/dashboard" style={{ flex: 1, background: '#f8fafc', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>Dashboard</a>
          </div>
          <a href="/progress" style={{ display: 'block', marginTop: '12px', fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>View all progress →</a>
        </div>
      </main>
    )
  }

  const q = questions[idx]
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
        <div style={{ marginBottom: '6px', fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Question {idx + 1} of {questions.length}</div>
        <div style={{ background: '#e2e8f0', borderRadius: '99px', height: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: `${(idx / questions.length) * 100}%`, transition: 'width 0.4s' }} />
        </div>
        <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#2563eb', marginBottom: '10px', fontFamily: 'monospace' }}>{subject}</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.55, marginBottom: '1.25rem' }}>{q.question}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {q.options.map((opt: string, i: number) => {
              let bg = 'white', border = '1px solid #e2e8f0', col = '#0a1628'
              if (answered) {
                if (i === q.correct)       { bg = '#f0fdf4'; border = '1px solid #16a34a'; col = '#15803d' }
                else if (i === selected)   { bg = '#fff1f2'; border = '1px solid #dc2626'; col = '#b91c1c' }
                else                       { col = '#94a3b8' }
              }
              return (
                <button key={i} onClick={() => selectAnswer(i)} disabled={answered}
                  style={{ background: bg, border, borderRadius: '8px', padding: '11px 14px', textAlign: 'left', cursor: answered ? 'default' : 'pointer', fontSize: '14px', color: col, display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', background: answered && i === q.correct ? '#dcfce7' : answered && i === selected ? '#ffe4e6' : '#f1f5f9', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {answered && i === q.correct ? '✓' : answered && i === selected ? '✗' : letters[i]}
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
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1e3a6e', marginBottom: q.reference ? '12px' : '0' }}>{q.explanation}</p>
            {q.reference && (
              <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '10px', marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#2563eb', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Reference — verify this yourself</div>
                <div style={{ fontSize: '12px', color: '#3b82f6', fontFamily: 'monospace' }}>{q.reference}</div>
              </div>
            )}
            <AiHelpPanel question={q} subject={subject} />
          </div>
        )}
        {answered && (
          <button onClick={next} style={{ width: '100%', background: '#1e3a6e', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            {idx < questions.length - 1 ? 'Next question →' : 'See results →'}
          </button>
        )}
      </div>
    </main>
  )
}

function AiHelpPanel({ question, subject }: { question: any; subject: string }) {
  const [open, setOpen]         = useState(false)
  const [msg, setMsg]           = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading]   = useState(false)

  async function ask() {
    if (!msg.trim()) return
    setLoading(true); setResponse('')
    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msg,
          context: {
            question: question.question, options: question.options,
            correctAnswer: question.options[question.correct],
            explanation: question.explanation, reference: question.reference, subject,
          }
        })
      })
      const data = await res.json()
      setResponse(data.response || 'Sorry, something went wrong.')
    } catch { setResponse('Sorry, something went wrong. Please try again.') }
    setLoading(false)
  }

  return (
    <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '12px' }}>
      {!open ? (
        <button onClick={() => setOpen(true)}
          style={{ background: 'none', border: '1px solid #2563eb', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#2563eb', cursor: 'pointer' }}>
          💬 Still confused? Ask for more help
        </button>
      ) : (
        <div>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#1d4ed8', marginBottom: '8px', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Ask a follow-up question</div>
          <textarea placeholder='e.g. "Why is option A wrong?" or "Give me a real-world example"'
            value={msg} onChange={e => setMsg(e.target.value)} rows={3}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #bfdbfe', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '8px', background: 'white' }} />
          <div style={{ display: 'flex', gap: '8px', marginBottom: response ? '12px' : '0' }}>
            <button onClick={ask} disabled={loading || !msg.trim()}
              style={{ background: loading || !msg.trim() ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '9px 18px', fontSize: '13px', fontWeight: '600', cursor: loading || !msg.trim() ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Thinking...' : 'Ask →'}
            </button>
            <button onClick={() => { setOpen(false); setResponse(''); setMsg('') }}
              style={{ background: 'none', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '9px 14px', fontSize: '13px', color: '#64748b', cursor: 'pointer' }}>
              Close
            </button>
          </div>
          {response && (
            <div style={{ background: 'white', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', fontSize: '13px', color: '#1e3a6e', lineHeight: 1.65 }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#2563eb', marginBottom: '6px', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>V1 Study Assistant</div>
              {response}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
