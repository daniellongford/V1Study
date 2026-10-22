'use client'
import { useState, useEffect, useRef, use } from 'react'
import { supabase } from '../../../lib/supabase'
import { FULL_BANKS, getLicence } from '../../../lib/question-banks'
import { PLAN_ACCESS, COMING_SOON_LICENCES, isAdmin as checkAdmin, hasFreeAccess as checkFreeAccess } from '../../../lib/access'
import { getExamConfig, formatDuration } from '../../../lib/exam-config'

// ── Helpers ──────────────────────────────────────────────────────────────────

function findBank(subject: string): any[] {
  const full = FULL_BANKS[subject]
  if (full && full.length > 0) return full
  const lower = subject.toLowerCase().trim()
  for (const key of Object.keys(FULL_BANKS)) {
    if (key.toLowerCase().trim() === lower && FULL_BANKS[key].length > 0) return FULL_BANKS[key]
  }
  return []
}

function pickExamQuestions(bank: any[], count: number): any[] {
  const indices = bank.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices.slice(0, Math.min(count, bank.length)).map(i => ({ ...bank[i], _bankIndex: i }))
}

function formatClock(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(sec).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

type Phase = 'intro' | 'exam' | 'confirm' | 'results'

// ── Component ─────────────────────────────────────────────────────────────────

export default function ExamPage({ params }: { params: Promise<{ subject: string }> }) {
  const resolvedParams = use(params)
  const subject = decodeURIComponent(resolvedParams.subject || '')
  const config = getExamConfig(subject)
  const isMobile = useIsMobile()

  const licenceComingSoon = COMING_SOON_LICENCES.includes(getLicence(subject))

  const [isAdmin, setIsAdmin] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [accessChecked, setAccessChecked] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)

  const [phase, setPhase] = useState<Phase>('intro')
  const [questions, setQuestions] = useState<any[]>([])
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [flags, setFlags] = useState<boolean[]>([])
  const [current, setCurrent] = useState(0)
  const [timeLeft, setTimeLeft] = useState(config.minutes * 60)
  const [navOpen, setNavOpen] = useState(false)
  const [scoreSaved, setScoreSaved] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [timeUsed, setTimeUsed] = useState(0)
  const [timedOut, setTimedOut] = useState(false)

  const endTimeRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const submittedRef = useRef(false)
  const userIdRef = useRef<string | null>(null)
  const answersRef = useRef<(number | null)[]>([])
  const questionsRef = useRef<any[]>([])

  // keep refs in sync for the timer's auto-submit
  useEffect(() => { answersRef.current = answers }, [answers])
  useEffect(() => { questionsRef.current = questions }, [questions])

  // ── Access check (same rules as practice quiz) ────────────────────────────
  useEffect(() => {
    async function checkAccess() {
      const { data } = await supabase.auth.getUser()
      const user = data.user
      userIdRef.current = user?.id ?? null
      const admin = checkAdmin(user?.email)
      setIsAdmin(admin)
      setAuthChecked(true)

      if (admin || checkFreeAccess(user?.email)) {
        setHasAccess(true)
        setAccessChecked(true)
        return
      }
      if (!user) {
        setHasAccess(false)
        setAccessChecked(true)
        return
      }
      const { data: sub } = await supabase
        .from('subscriptions')
        .select('plan, status')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .single()
      setHasAccess(!!(sub && PLAN_ACCESS[sub.plan]?.includes(subject)))
      setAccessChecked(true)
    }
    checkAccess()
  }, [subject])

  // ── Timer ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'exam' && phase !== 'confirm') return
    const tick = () => {
      const left = Math.round((endTimeRef.current - Date.now()) / 1000)
      setTimeLeft(left)
      if (left <= 0 && !submittedRef.current) {
        submitExam(true)
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  // ── Warn before leaving mid-exam ──────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'exam' && phase !== 'confirm') return
    const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = '' }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [phase])

  // ── Actions ───────────────────────────────────────────────────────────────
  function beginExam() {
    const bank = findBank(subject)
    const picked = pickExamQuestions(bank, config.questions)
    setQuestions(picked)
    setAnswers(new Array(picked.length).fill(null))
    setFlags(new Array(picked.length).fill(false))
    setCurrent(0)
    submittedRef.current = false
    startTimeRef.current = Date.now()
    endTimeRef.current = Date.now() + config.minutes * 60 * 1000
    setTimeLeft(config.minutes * 60)
    setTimedOut(false)
    setScoreSaved(false)
    setPhase('exam')
  }

  function chooseAnswer(idx: number) {
    setAnswers(prev => {
      const next = [...prev]
      next[current] = next[current] === idx ? null : idx
      return next
    })
  }

  function toggleFlag() {
    setFlags(prev => {
      const next = [...prev]
      next[current] = !next[current]
      return next
    })
  }

  function goTo(i: number) {
    setCurrent(i)
    setNavOpen(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  async function saveScore(s: number, total: number) {
    try {
      const userId = userIdRef.current
      if (!userId) return
      const pct = Math.round(s / total * 100)
      const row: any = {
        user_id: userId,
        subject,
        licence: getLicence(subject),
        score: s,
        total,
        percentage: pct,
        mode: 'exam',
      }
      let { error } = await supabase.from('scores').insert(row)
      if (error) {
        // `mode` column not added yet — save without it so the result is never lost
        delete row.mode
        const retry = await supabase.from('scores').insert(row)
        error = retry.error
      }
      if (!error) setScoreSaved(true)
    } catch (e) {
      console.error('saveScore error:', e)
    }
  }

  function submitExam(auto = false) {
    if (submittedRef.current) return
    submittedRef.current = true
    const qs = questionsRef.current
    const ans = answersRef.current
    let s = 0
    qs.forEach((q, i) => { if (ans[i] !== null && ans[i] === q.correct) s += 1 })
    setFinalScore(s)
    setTimeUsed(Math.round((Date.now() - startTimeRef.current) / 1000))
    setTimedOut(auto)
    setCurrent(0)
    setPhase('results')
    saveScore(s, qs.length)
  }

  // ── Gates ─────────────────────────────────────────────────────────────────
  if (licenceComingSoon && authChecked && !isAdmin) return (
    <Gate subject={subject} title="Coming soon" body="This exam is being finalised and will be available shortly." />
  )
  if (accessChecked && !hasAccess && !licenceComingSoon) return (
    <Gate subject={subject} title="Subscribe to access this exam" body="Start your 7 day free trial to unlock this subject." cta="/pricing" ctaLabel="View plans" />
  )
  if (!subject || !accessChecked) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: '#64748b', fontSize: '16px' }}>Loading...</p>
      <a href="/dashboard" style={{ color: '#22629b', textDecoration: 'none' }}>Back to dashboard</a>
    </main>
  )

  const bankSize = findBank(subject).length
  const examCount = Math.min(config.questions, bankSize)
  const answeredCount = answers.filter(a => a !== null).length
  const flaggedCount = flags.filter(Boolean).length

  // ── Intro screen ──────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <TopBar />
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: 'clamp(1.5rem, 5vw, 2.25rem)' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#22629b', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '8px' }}>TIMED EXAM</div>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0a1628', margin: '0 0 1.25rem' }}>{subject}</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '1.5rem' }}>
            <Stat label="Questions" value={String(examCount)} />
            <Stat label="Time allowed" value={formatDuration(config.minutes)} />
            <Stat label="Pass mark" value={config.passMark + '%'} />
          </div>

          <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: '600', color: '#0a1628', marginBottom: '6px' }}>Exam conditions</div>
            <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
              <li>The timer starts when you press Begin and does not pause.</li>
              <li>No answers or explanations are shown until you finish.</li>
              <li>Move between questions freely and flag any you want to come back to.</li>
              <li>When time runs out the exam is submitted automatically.</li>
              <li>Your result and a full review of every question are shown at the end.</li>
            </ul>
          </div>

          {bankSize < config.questions && (
            <div style={{ fontSize: '12px', color: '#92400e', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '8px 12px', marginBottom: '1rem' }}>
              This bank currently has {bankSize} questions, so the exam will use all of them.
            </div>
          )}

          <button onClick={beginExam} disabled={bankSize === 0} style={{ width: '100%', background: bankSize === 0 ? '#94a3b8' : '#0a1628', color: 'white', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: bankSize === 0 ? 'not-allowed' : 'pointer', minHeight: '48px' }}>
            Begin exam
          </button>
          <a href="/dashboard" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#64748b', textDecoration: 'none' }}>Back to dashboard</a>
        </div>
      </div>
    </main>
  )

  // ── Results + review ──────────────────────────────────────────────────────
  if (phase === 'results') {
    const total = questions.length
    const pct = Math.round(finalScore / total * 100)
    const passed = pct >= config.passMark
    const q = questions[current]
    const picked = answers[current]
    const letters = ['A', 'B', 'C', 'D']

    const navStatus = (i: number) => {
      const a = answers[i]
      if (a === null) return 'skipped'
      return a === questions[i].correct ? 'right' : 'wrong'
    }

    const nav = (
      <NavGrid
        count={total}
        current={current}
        onPick={goTo}
        colorFor={(i) => {
          const s = navStatus(i)
          if (s === 'right') return { bg: '#dcfce7', border: '#16a34a', color: '#15803d' }
          if (s === 'wrong') return { bg: '#fee2e2', border: '#dc2626', color: '#b91c1c' }
          return { bg: '#f1f5f9', border: '#cbd5e1', color: '#64748b' }
        }}
        legend={[
          { label: 'Correct', bg: '#dcfce7', border: '#16a34a' },
          { label: 'Incorrect', bg: '#fee2e2', border: '#dc2626' },
          { label: 'Unanswered', bg: '#f1f5f9', border: '#cbd5e1' },
        ]}
      />
    )

    return (
      <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
        <TopBar />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(1.25rem, 4vw, 2rem)' }}>

          {/* Score summary */}
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem 2.5rem' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '4px' }}>{subject} · Timed exam</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#0a1628', lineHeight: 1 }}>{pct}%</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: passed ? '#16a34a' : '#dc2626' }}>{passed ? 'Pass' : 'Below pass mark'}</div>
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>
                {finalScore} of {total} correct · pass mark {config.passMark}% · time used {formatClock(timeUsed)}{timedOut ? ' · submitted when time ran out' : ''}
              </div>
              {scoreSaved && <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>Result saved to your progress</div>}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto', flexWrap: 'wrap' }}>
              <button onClick={() => { setPhase('intro'); setCurrent(0) }} style={{ background: '#22629b', color: 'white', border: 'none', borderRadius: '8px', padding: '11px 18px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', minHeight: '44px' }}>Sit again</button>
              <a href="/progress" style={{ background: 'white', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px 18px', fontWeight: '600', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', minHeight: '44px', boxSizing: 'border-box' }}>Progress</a>
              <a href="/dashboard" style={{ background: 'white', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px 18px', fontWeight: '600', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', minHeight: '44px', boxSizing: 'border-box' }}>Dashboard</a>
            </div>
          </div>

          {/* Review */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
            {!isMobile && <aside style={{ width: '230px', flexShrink: 0, position: 'sticky', top: '1rem' }}>{nav}</aside>}
            {isMobile && (
              <div style={{ width: '100%' }}>
                <button onClick={() => setNavOpen(o => !o)} style={{ width: '100%', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: '600', color: '#0a1628', cursor: 'pointer', minHeight: '44px' }}>
                  {navOpen ? 'Hide questions' : 'Show all questions'}
                </button>
                {navOpen && <div style={{ marginTop: '10px' }}>{nav}</div>}
              </div>
            )}

            <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
              <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Question {current + 1} of {total}</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: picked === null ? '#64748b' : picked === q.correct ? '#16a34a' : '#dc2626' }}>
                    {picked === null ? 'Not answered' : picked === q.correct ? 'Correct' : 'Incorrect'}
                  </div>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.55, marginBottom: '1.25rem' }}>{q.question}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt: string, i: number) => {
                    let bg = 'white', border = '1px solid #e2e8f0', col = '#94a3b8', badge = '#f1f5f9', mark = letters[i]
                    if (i === q.correct) { bg = '#f0fdf4'; border = '1px solid #16a34a'; col = '#15803d'; badge = '#dcfce7'; mark = '✓' }
                    else if (i === picked) { bg = '#fff1f2'; border = '1px solid #dc2626'; col = '#b91c1c'; badge = '#ffe4e6'; mark = '✗' }
                    return (
                      <div key={i} style={{ background: bg, border, borderRadius: '8px', padding: '11px 14px', fontSize: '14px', color: col, display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '12px', background: badge, borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>{mark}</span>
                        <span style={{ flex: 1, minWidth: 0 }}>{opt.replace(/^[A-D]\.\s*/, '')}</span>
                        {i === picked && i !== q.correct && <span style={{ fontSize: '11px', fontWeight: '600', flexShrink: 0 }}>Your answer</span>}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div style={{ background: '#eef4f9', border: '1px solid #c5dbec', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a4f80', marginBottom: '8px' }}>Explanation</div>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1e3a6e', margin: '0 0 12px' }}>{q.explanation}</p>
                <div style={{ borderTop: '1px solid #c5dbec', paddingTop: '10px' }}>
                  <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#22629b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reference — verify this yourself</div>
                  <div style={{ fontSize: '12px', color: '#3a7fb8', fontFamily: 'monospace' }}>{q.reference}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => goTo(Math.max(0, current - 1))} disabled={current === 0} style={{ flex: 1, background: 'white', color: current === 0 ? '#94a3b8' : '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: current === 0 ? 'not-allowed' : 'pointer', fontSize: '14px', minHeight: '44px' }}>← Previous</button>
                <button onClick={() => goTo(Math.min(total - 1, current + 1))} disabled={current === total - 1} style={{ flex: 1, background: current === total - 1 ? '#94a3b8' : '#0a1628', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: current === total - 1 ? 'not-allowed' : 'pointer', fontSize: '14px', minHeight: '44px' }}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ── Exam screen (phase === 'exam' or 'confirm') ──────────────────────────
  const q = questions[current]
  const letters = ['A', 'B', 'C', 'D']
  const low = timeLeft <= 5 * 60

  const nav = (
    <NavGrid
      count={questions.length}
      current={current}
      onPick={goTo}
      colorFor={(i) => {
        if (flags[i]) return { bg: '#fffbeb', border: '#f59e0b', color: '#92400e' }
        if (answers[i] !== null) return { bg: '#0a1628', border: '#0a1628', color: 'white' }
        return { bg: 'white', border: '#cbd5e1', color: '#0a1628' }
      }}
      legend={[
        { label: 'Answered', bg: '#0a1628', border: '#0a1628' },
        { label: 'Flagged', bg: '#fffbeb', border: '#f59e0b' },
        { label: 'Not answered', bg: 'white', border: '#cbd5e1' },
      ]}
      footer={`${answeredCount} of ${questions.length} answered${flaggedCount ? ` · ${flaggedCount} flagged` : ''}`}
    />
  )

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      {/* Exam top bar: subject · timer · finish */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'white', borderBottom: '1px solid #e2e8f0', padding: '0.75rem clamp(1rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#22629b', fontFamily: 'monospace', letterSpacing: '0.08em' }}>TIMED EXAM</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#0a1628', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{subject}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div aria-live="polite" style={{ fontFamily: 'monospace', fontSize: isMobile ? '18px' : '22px', fontWeight: '700', color: low ? '#dc2626' : '#0a1628', background: low ? '#fef2f2' : '#f1f5f9', border: `1px solid ${low ? '#fecaca' : '#e2e8f0'}`, borderRadius: '8px', padding: '6px 12px', minWidth: '96px', textAlign: 'center' }}>
            {formatClock(timeLeft)}
          </div>
          <button onClick={() => setPhase('confirm')} style={{ background: '#0a1628', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', minHeight: '44px', whiteSpace: 'nowrap' }}>
            Finish exam
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>

          {/* Left: question navigator */}
          {!isMobile && <aside style={{ width: '230px', flexShrink: 0, position: 'sticky', top: '82px' }}>{nav}</aside>}
          {isMobile && (
            <div style={{ width: '100%' }}>
              <button onClick={() => setNavOpen(o => !o)} style={{ width: '100%', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: '600', color: '#0a1628', cursor: 'pointer', minHeight: '44px' }}>
                {navOpen ? 'Hide questions' : `Questions · ${answeredCount}/${questions.length} answered`}
              </button>
              {navOpen && <div style={{ marginTop: '10px' }}>{nav}</div>}
            </div>
          )}

          {/* Right: the question */}
          <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Question {current + 1} of {questions.length}</div>
                <button onClick={toggleFlag} aria-pressed={flags[current]} style={{ background: flags[current] ? '#fffbeb' : 'white', border: `1px solid ${flags[current] ? '#f59e0b' : '#e2e8f0'}`, color: flags[current] ? '#92400e' : '#64748b', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', minHeight: '36px' }}>
                  {flags[current] ? '⚑ Flagged for review' : '⚐ Flag for review'}
                </button>
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.55, marginBottom: '1.25rem' }}>{q.question}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options.map((opt: string, i: number) => {
                  const sel = answers[current] === i
                  return (
                    <button
                      key={i}
                      onClick={() => chooseAnswer(i)}
                      aria-pressed={sel}
                      style={{ background: sel ? '#eaf1f7' : 'white', border: sel ? '2px solid #22629b' : '1px solid #e2e8f0', borderRadius: '8px', padding: sel ? '10px 13px' : '11px 14px', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#0a1628', display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%', minHeight: '44px' }}
                    >
                      <span style={{ fontFamily: 'monospace', fontSize: '12px', background: sel ? '#22629b' : '#f1f5f9', color: sel ? 'white' : '#0a1628', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>{letters[i]}</span>
                      <span style={{ flex: 1, minWidth: 0 }}>{opt.replace(/^[A-D]\.\s*/, '')}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => goTo(Math.max(0, current - 1))} disabled={current === 0} style={{ flex: 1, background: 'white', color: current === 0 ? '#94a3b8' : '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: current === 0 ? 'not-allowed' : 'pointer', fontSize: '14px', minHeight: '44px' }}>← Previous</button>
              {current < questions.length - 1 ? (
                <button onClick={() => goTo(current + 1)} style={{ flex: 1, background: '#0a1628', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', minHeight: '44px' }}>Next →</button>
              ) : (
                <button onClick={() => setPhase('confirm')} style={{ flex: 1, background: '#22629b', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', minHeight: '44px' }}>Finish exam</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit confirmation */}
      {phase === 'confirm' && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(10,22,40,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1.5rem, 5vw, 2rem)', maxWidth: '440px', width: '100%' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0a1628', margin: '0 0 8px' }}>Finish exam?</h2>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
              You&apos;ve answered <strong>{answeredCount} of {questions.length}</strong> questions.
              {questions.length - answeredCount > 0 && <> <strong>{questions.length - answeredCount} unanswered</strong> — these will be marked incorrect.</>}
              {flaggedCount > 0 && <> You have <strong>{flaggedCount} flagged</strong> for review.</>}
              {' '}Time remaining: <strong>{formatClock(timeLeft)}</strong>.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setPhase('exam')} style={{ flex: 1, background: 'white', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', minHeight: '44px' }}>Keep going</button>
              <button onClick={() => submitExam(false)} style={{ flex: 1, background: '#0a1628', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', minHeight: '44px' }}>Submit exam</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

// ── Small components ──────────────────────────────────────────────────────────

function TopBar() {
  return (
    <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.25rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '20px', fontWeight: '800', color: '#22629b' }}>V1</span>
        <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
      </div>
      <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Back to dashboard</a>
    </nav>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 12px' }}>
      <div style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628' }}>{value}</div>
      <div style={{ fontSize: '11px', color: '#64748b' }}>{label}</div>
    </div>
  )
}

function Gate({ subject, title, body, cta, ctaLabel }: { subject: string; title: string; body: string; cta?: string; ctaLabel?: string }) {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
      <div style={{ background: 'white', borderRadius: '16px', padding: 'clamp(1.5rem, 5vw, 2.5rem)', maxWidth: '440px', width: '100%', border: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '12px', letterSpacing: '0.08em' }}>{subject}</div>
        <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>{title}</h1>
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.6 }}>{body}</p>
        {cta && <a href={cta} style={{ background: '#22629b', color: 'white', borderRadius: '8px', padding: '12px 28px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', display: 'inline-block', marginBottom: '12px' }}>{ctaLabel}</a>}
        <div><a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Back to dashboard</a></div>
      </div>
    </main>
  )
}

function NavGrid({ count, current, onPick, colorFor, legend, footer }: {
  count: number
  current: number
  onPick: (i: number) => void
  colorFor: (i: number) => { bg: string; border: string; color: string }
  legend: { label: string; bg: string; border: string }[]
  footer?: string
}) {
  return (
    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1rem' }}>
      <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>Questions</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '6px' }}>
        {Array.from({ length: count }, (_, i) => {
          const c = colorFor(i)
          const isCurrent = i === current
          return (
            <button
              key={i}
              onClick={() => onPick(i)}
              aria-label={`Go to question ${i + 1}`}
              aria-current={isCurrent ? 'true' : undefined}
              style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}`, outline: isCurrent ? '2px solid #22629b' : 'none', outlineOffset: '1px', borderRadius: '6px', height: '36px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', fontFamily: 'monospace', padding: 0 }}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
      <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {legend.map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#64748b' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: l.bg, border: `1px solid ${l.border}`, flexShrink: 0 }} />
            {l.label}
          </div>
        ))}
      </div>
      {footer && <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0', fontSize: '12px', color: '#0a1628', fontWeight: '600' }}>{footer}</div>}
    </div>
  )
}
