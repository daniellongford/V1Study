'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { PLAN_ACCESS, COMING_SOON_LICENCES, isAdmin as checkAdmin, hasFreeAccess as checkFreeAccess } from '../../lib/access'
import { getExamConfig } from '../../lib/exam-config'

const subjectsByLicence: Record<string, { subject: string; code: string; passMark: number }[]> = {
  PPL: [
    { subject: 'PPL Theory', code: 'PPLA', passMark: 70 },
  ],
  CPL: [
    { subject: 'Human Factors', code: 'CHUF', passMark: 70 },
    { subject: 'Aerodynamics', code: 'CADA', passMark: 70 },
    { subject: 'Aircraft General Knowledge', code: 'CSYA', passMark: 70 },
    { subject: 'Meteorology', code: 'CMET', passMark: 70 },
    { subject: 'Navigation', code: 'CNAV', passMark: 70 },
    { subject: 'Operations Performance Planning', code: 'CFPA', passMark: 70 },
    { subject: 'Flight Rules and Air Law', code: 'CLWA', passMark: 80 },
  ],
  ATPL: [
    { subject: 'Human Factors', code: 'AHUF', passMark: 70 },
    { subject: 'Aerodynamics and Systems', code: 'AASA', passMark: 70 },
    { subject: 'Performance and Loading', code: 'APLA', passMark: 70 },
    { subject: 'Meteorology', code: 'AMET', passMark: 70 },
    { subject: 'Navigation', code: 'ANAV', passMark: 70 },
    { subject: 'Flight Planning', code: 'AFPA', passMark: 70 },
    { subject: 'Air Law', code: 'AALW', passMark: 80 },
  ],
  IREX: [
    { subject: 'Instrument Rating', code: 'IREX', passMark: 70 },
  ],
}

const LICENCE_NAMES: Record<string, string> = {
  PPL: 'Private Pilot Licence',
  CPL: 'Commercial Pilot Licence',
  ATPL: 'Airline Transport Pilot Licence',
  IREX: 'Instrument Rating Exam',
}

// ── Design tokens ─────────────────────────────────────────────────────────────
const F = "'Barlow', system-ui, -apple-system, sans-serif"
const FD = "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif"
const C = { ground: '#eef1f5', paper: '#ffffff', ink: '#0a1628', rule: '#dde3ea', muted: '#5f6c7b', faint: '#98a4b3', blue: '#2563eb', pass: '#15803d' }

function durationWords(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const hs = h === 0 ? '' : h === 1 ? '1 hour' : `${h} hours`
  const ms = m === 0 ? '' : `${m} minutes`
  return [hs, ms].filter(Boolean).join(' ')
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [selectedLicence, setSelectedLicence] = useState('CPL')
  const [loading, setLoading] = useState(true)
  const [lastScore, setLastScore] = useState<any>(null)
  const [bestScores, setBestScores] = useState<Record<string, number>>({})
  const [plan, setPlan] = useState<string | null>(null)
  const [planStatus, setPlanStatus] = useState<string | null>(null)
  const [trialEnd, setTrialEnd] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = '/login'
      } else {
        setUser(data.user)
        loadScores(data.user.id)
        loadPlan(data.user.id)
        setLoading(false)
        // Fire the welcome email if it hasn't been sent yet (route checks + dedupes)
        fetch('/api/welcome-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: data.user.id, email: data.user.email }),
        }).catch(() => {})
      }
    })
  }, [])

  async function loadPlan(userId: string) {
    const { data } = await supabase
      .from('subscriptions')
      .select('plan, status, trial_end')
      .eq('user_id', userId)
      .in('status', ['active', 'cancelling'])
      .single()
    if (data) {
      setPlan(data.plan)
      setPlanStatus(data.status)
      setTrialEnd(data.trial_end ?? null)
      return
    }
    // No row yet — check Stripe directly and create it if they've subscribed
    try {
      const { data: { user: u } } = await supabase.auth.getUser()
      if (!u?.email) return
      const res = await fetch('/api/sync-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, email: u.email }),
      })
      const sync = await res.json()
      if (sync?.synced && sync.plan) {
        setPlan(sync.plan)
        setPlanStatus('active')
      }
    } catch {}
  }

  async function loadScores(userId: string) {
    const { data } = await supabase
      .from('scores')
      .select('subject, percentage, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    if (data) {
      setLastScore(data[0] ?? null)
      const best: Record<string, number> = {}
      data.forEach((s: any) => {
        const pct = Number(s.percentage)
        if (!best[s.subject] || pct > best[s.subject]) best[s.subject] = pct
      })
      setBestScores(best)
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const isAdmin = checkAdmin(user?.email)
  const hasFreeAccess = checkFreeAccess(user?.email)

  function hasAccess(subject: string): boolean {
    if (isAdmin) return true
    if (hasFreeAccess) return true
    if (!plan) return false
    return PLAN_ACCESS[plan]?.includes(subject) ?? false
  }

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F, background: C.ground }}>
      <p style={{ color: C.muted }}>Loading</p>
    </main>
  )

  const currentSubjects = subjectsByLicence[selectedLicence] || []
  const comingSoon = COMING_SOON_LICENCES.includes(selectedLicence) && !isAdmin
  const passedCount = currentSubjects.filter(({ subject, passMark }) => (bestScores[subject] ?? -1) >= passMark).length
  const firstName = user?.user_metadata?.full_name ? user.user_metadata.full_name.split(' ')[0] : null

  const navLink = (href: string, label: string, active = false) => (
    <a href={href} style={{ color: active ? C.ink : C.muted, fontWeight: active ? 600 : 400, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{label}</a>
  )

  return (
    <main style={{ minHeight: '100vh', background: C.ground, fontFamily: F, color: C.ink, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .v1-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .v1-tab:hover { color: ${C.ink} !important; }
        .v1-ask:focus-within { border-color: ${C.ink} !important; }
        .v1-ask textarea::placeholder { color: ${C.faint}; }
        :focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: C.paper, borderBottom: `1px solid ${C.rule}`, height: '64px', padding: isMobile ? '0 1rem' : '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <a href="/dashboard" style={{ textDecoration: 'none', fontFamily: FD, fontWeight: 600, fontSize: '24px', letterSpacing: '0.01em', color: C.ink }}>
          <span style={{ color: C.blue }}>V1</span> Study
        </a>
        {isMobile ? (
          <>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '0 12px', cursor: 'pointer', fontSize: '15px', fontWeight: 600, color: C.ink, minWidth: '44px', minHeight: '40px', fontFamily: F }}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: C.paper, borderBottom: `1px solid ${C.rule}`, padding: '0.5rem 1rem 1rem', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
                <a href="/dashboard" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Study</a>
                <a href="/progress" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Progress</a>
                <a href="/pricing" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Upgrade</a>
                <div style={{ padding: '12px 0 6px', fontSize: '14px', color: C.faint }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: 'none', padding: '8px 0', fontSize: '16px', cursor: 'pointer', color: C.muted, textAlign: 'left', fontFamily: F }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/dashboard', 'Study', true)}
            {navLink('/progress', 'Progress')}
            {navLink('/pricing', 'Upgrade')}
            <span style={{ fontSize: '14px', color: C.faint }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '7px 12px', fontSize: '14px', cursor: 'pointer', color: C.muted, fontFamily: F }}>Sign out</button>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: isMobile ? '1.75rem 1rem 3rem' : '3rem 2rem 4rem' }}>

        {/* HEAD: licence title + tally, switcher right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem 2rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
          <div>
            <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, letterSpacing: '-0.005em', margin: '0 0 14px' }}>
              {LICENCE_NAMES[selectedLicence] || selectedLicence}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px', color: C.muted, flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', gap: '5px' }} aria-hidden="true">
                {currentSubjects.map(({ subject, passMark }) => {
                  const passed = (bestScores[subject] ?? -1) >= passMark
                  return <i key={subject} style={{ display: 'block', width: '14px', height: '14px', border: `1.5px solid ${C.ink}`, borderRadius: '2px', background: passed ? C.ink : 'transparent' }} />
                })}
              </span>
              <span>
                {currentSubjects.length === 1
                  ? (passedCount === 1 ? 'Passed on V1 Study' : 'Not yet passed on V1 Study')
                  : `${passedCount} of ${currentSubjects.length} exams passed on V1 Study`}
              </span>
            </div>
          </div>
          <div role="group" aria-label="Licence" style={{ display: 'flex', gap: '1.5rem' }}>
            {Object.keys(subjectsByLicence).map((licence) => {
              const on = selectedLicence === licence
              return (
                <button key={licence} className="v1-tab" onClick={() => setSelectedLicence(licence)} aria-pressed={on} style={{ background: 'none', border: 0, padding: '10px 0 6px', fontSize: '16px', fontWeight: 600, color: on ? C.ink : C.faint, cursor: 'pointer', borderBottom: `2px solid ${on ? C.blue : 'transparent'}`, minHeight: '44px', fontFamily: F }}>
                  {licence}
                </button>
              )
            })}
          </div>
        </div>

        {/* LEDGER */}
        <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden' }}>
          {!isMobile && (
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 150px 230px', gap: '1.5rem', padding: '0 1.5rem', minHeight: '44px', alignItems: 'center', fontSize: '13px', color: C.muted, background: '#f7f9fb', borderBottom: `1px solid ${C.rule}` }}>
              <div>Subject</div>
              <div style={{ textAlign: 'right' }}>Best result</div>
              <div />
            </div>
          )}

          {currentSubjects.map(({ subject, code, passMark }, idx) => {
            const best = bestScores[subject]
            const attempted = best !== undefined
            const passed = attempted && best >= passMark
            const accessible = hasAccess(subject)
            const cfg = getExamConfig(subject)
            const dim = comingSoon || !accessible
            const isLast = idx === currentSubjects.length - 1

            const bestCell = (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FD, fontWeight: 600, fontSize: attempted ? '28px' : '22px', lineHeight: 1, color: dim || !attempted ? C.faint : C.ink, fontVariantNumeric: 'tabular-nums' }}>
                  {attempted ? <>{best}<span style={{ fontSize: '15px', fontWeight: 500, color: C.muted, marginLeft: '1px' }}>%</span></> : '–'}
                </div>
                <div style={{ fontSize: '13px', marginTop: '2px', color: passed ? C.pass : C.muted, fontWeight: passed ? 600 : 400 }}>
                  {!attempted ? 'Not yet attempted' : passed ? 'Passed' : 'Below pass mark'}
                </div>
              </div>
            )

            const actions = comingSoon ? (
              <div style={{ fontSize: '14px', color: C.faint, justifySelf: isMobile ? 'start' : 'end' }}>Coming soon</div>
            ) : !accessible ? (
              <div style={{ fontSize: '14px', color: C.muted, justifySelf: isMobile ? 'start' : 'end' }}>
                Not in your plan. <a href="/pricing" className="v1-link" style={{ color: C.blue, fontWeight: 600, textDecoration: 'none' }}>Upgrade</a>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                <a href={'/quiz/' + encodeURIComponent(subject)} className="v1-link" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontSize: '15px', fontWeight: 600, color: C.ink, textDecoration: 'none', paddingRight: '16px', borderRight: `1px solid ${C.rule}`, marginRight: '16px', whiteSpace: 'nowrap' }}>Practise</a>
                <a href={'/exam/' + encodeURIComponent(subject)} className="v1-link" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontSize: '15px', fontWeight: 600, color: C.blue, textDecoration: 'none', whiteSpace: 'nowrap' }}>Sit timed exam</a>
              </div>
            )

            const subjectCell = (
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.2, color: dim ? C.faint : C.ink }}>{subject}</div>
                <div style={{ fontSize: '14px', color: dim ? C.faint : C.muted, marginTop: '3px' }}>
                  {code}, {Math.min(cfg.questions, 999)} questions in {durationWords(cfg.minutes)}, pass mark {passMark}%
                </div>
              </div>
            )

            if (isMobile) return (
              <div key={code} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px 16px', padding: '1rem', borderBottom: isLast ? 'none' : `1px solid ${C.rule}`, alignItems: 'center' }}>
                {subjectCell}
                {bestCell}
                <div style={{ gridColumn: '1 / -1' }}>{actions}</div>
              </div>
            )

            return (
              <div key={code} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 150px 230px', alignItems: 'center', gap: '1.5rem', padding: '0 1.5rem', minHeight: '76px', borderBottom: isLast ? 'none' : `1px solid ${C.rule}` }}>
                {subjectCell}
                {bestCell}
                {actions}
              </div>
            )
          })}
        </div>

        {/* ASK */}
        <AskSection isMobile={isMobile} />

        {/* FOOT */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.rule}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px', color: C.faint }}>
          <span>© V1 Study. Built for Australian pilots.</span>
          <a href="/terms" style={{ color: C.faint, textDecoration: 'none' }}>Terms and conditions</a>
        </div>
      </div>
    </main>
  )
}

// ── Ask section ───────────────────────────────────────────────────────────────

function AskSection({ isMobile }: { isMobile: boolean }) {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAsk() {
    if (!message.trim() || loading) return
    setLoading(true)
    setResponse('')
    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      setResponse(data.response || 'Something went wrong. Try again in a moment.')
    } catch {
      setResponse('Something went wrong. Try again in a moment.')
    }
    setLoading(false)
  }

  return (
    <section style={{ marginTop: '3rem', maxWidth: '720px' }}>
      <h2 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '26px' : '30px', lineHeight: 1.05, margin: '0 0 14px' }}>Stuck on something? Ask.</h2>
      <div className="v1-ask" style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', padding: '14px 16px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleAsk() }}
          placeholder="e.g. Why is the fixed reserve 45 minutes for a piston VFR flight but 30 minutes for a turbine?"
          rows={3}
          aria-label="Your question"
          style={{ border: 0, outline: 0, resize: 'none', fontFamily: F, fontSize: '16px', lineHeight: 1.5, color: C.ink, background: 'transparent', width: '100%', minHeight: '72px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={handleAsk} disabled={loading || !message.trim()} style={{ background: 'none', border: 0, padding: '8px 0', fontSize: '16px', fontWeight: 600, color: loading || !message.trim() ? C.faint : C.blue, cursor: loading || !message.trim() ? 'default' : 'pointer', minHeight: '44px', fontFamily: F }}>
            {loading ? 'Thinking' : 'Ask'}
          </button>
        </div>
      </div>
      {response && (
        <div style={{ marginTop: '18px', padding: '18px 20px', background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', fontSize: '16px', lineHeight: 1.6 }}>
          <div style={{ fontSize: '13px', color: C.muted, marginBottom: '8px' }}>V1 Study</div>
          {response.split(/\n\s*\n|\n/).filter((p: string) => p.trim()).map((para: string, i: number) => (
            <p key={i} style={{ margin: i === 0 ? 0 : '10px 0 0' }}>{para.trim()}</p>
          ))}
        </div>
      )}
      <div style={{ marginTop: '14px', fontSize: '14px', color: C.muted }}>
        Prefer to talk to a person? <a href="/contact" className="v1-link" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', borderBottom: `1.5px solid ${C.ink}`, paddingBottom: '1px' }}>Email support</a>
      </div>
    </section>
  )
}
