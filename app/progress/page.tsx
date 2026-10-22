'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

// ── Design tokens ─────────────────────────────────────────────────────────────
const F = "'Barlow', system-ui, -apple-system, sans-serif"
const FD = "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif"
const C = { ground: '#eef1f5', paper: '#ffffff', ink: '#0a1628', rule: '#dde3ea', muted: '#5f6c7b', faint: '#98a4b3', blue: '#22629b', pass: '#15803d' }

const AIR_LAW = ['Flight Rules and Air Law', 'Air Law', 'Air Law Advanced']
function passMarkFor(subject: string): number {
  return AIR_LAW.includes(subject) ? 80 : 70
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

export default function ProgressPage() {
  const [user, setUser] = useState<any>(null)
  const [scores, setScores] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { window.location.href = '/login'; return }
      setUser(data.user)
      supabase.from('scores').select('*').eq('user_id', data.user.id).order('created_at', { ascending: false }).then(({ data: rows }) => {
        if (rows) {
          setScores(rows.map((r: any) => ({
            ...r,
            score: Number(r.score),
            total: Number(r.total),
            percentage: Number(r.percentage),
          })))
        }
        setLoading(false)
      })
    })
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const licences = ['All', 'PPL', 'CPL', 'ATPL', 'IREX']
  const filtered = filter === 'All' ? scores : scores.filter((s) => s.licence === filter)

  const subjectMap: Record<string, any[]> = {}
  filtered.forEach((s) => {
    if (!subjectMap[s.subject]) subjectMap[s.subject] = []
    subjectMap[s.subject].push(s)
  })

  const subjectStats = Object.entries(subjectMap).map(([subject, rows]) => ({
    subject,
    licence: rows[0].licence,
    attempts: rows.length,
    best: Math.max(...rows.map((r) => Number(r.percentage))),
    last: Number(rows[0].percentage),
    avg: Math.round(rows.reduce((a, r) => a + Number(r.percentage), 0) / rows.length),
    passMark: passMarkFor(subject),
    examAttempts: rows.filter((r) => r.mode === 'exam').length,
  })).sort((a, b) => b.best - a.best)

  const totalAttempts = filtered.length
  const avg = filtered.length > 0 ? Math.round(filtered.reduce((a, s) => a + Number(s.percentage), 0) / filtered.length) : 0
  const passedSubjects = subjectStats.filter((s) => s.best >= s.passMark).length

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F, background: C.ground }}>
      <p style={{ color: C.muted }}>Loading</p>
    </main>
  )

  const navLink = (href: string, label: string, active = false) => (
    <a href={href} style={{ color: active ? C.ink : C.muted, fontWeight: active ? 600 : 400, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{label}</a>
  )

  const figure = (value: string, label: string) => (
    <div>
      <div style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '30px' : '36px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontSize: '14px', color: C.muted, marginTop: '4px' }}>{label}</div>
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', background: C.ground, fontFamily: F, color: C.ink, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .v1-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .v1-tab:hover { color: ${C.ink} !important; }
        :focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: C.paper, borderBottom: `1px solid ${C.rule}`, height: '64px', padding: isMobile ? '0 1rem' : '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <a href="/dashboard" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', color: C.ink }}>
          <img src="/v1-mark-navy.png" alt="V1" style={{ height: '30px', width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: FD, fontWeight: 600, fontSize: '24px', letterSpacing: '0.01em', lineHeight: 1 }}>Study</span>
        </a>
        {isMobile ? (
          <>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '0 12px', cursor: 'pointer', fontSize: '15px', fontWeight: 600, color: C.ink, minWidth: '44px', minHeight: '40px', fontFamily: F }}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: C.paper, borderBottom: `1px solid ${C.rule}`, padding: '0.5rem 1rem 1rem', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
                <a href="/dashboard" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Study</a>
                <a href="/progress" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Progress</a>
                <a href="/pricing" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Upgrade</a>
                <div style={{ padding: '12px 0 6px', fontSize: '14px', color: C.faint }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: 'none', padding: '8px 0', fontSize: '16px', cursor: 'pointer', color: C.muted, textAlign: 'left', fontFamily: F }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/dashboard', 'Study')}
            {navLink('/progress', 'Progress', true)}
            {navLink('/pricing', 'Upgrade')}
            <span style={{ fontSize: '14px', color: C.faint }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '7px 12px', fontSize: '14px', cursor: 'pointer', color: C.muted, fontFamily: F }}>Sign out</button>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: isMobile ? '1.75rem 1rem 3rem' : '3rem 2rem 4rem' }}>

        {/* HEAD */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem 2rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
          <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, letterSpacing: '-0.005em', margin: 0 }}>Progress</h1>
          <div role="group" aria-label="Licence" style={{ display: 'flex', gap: '1.5rem' }}>
            {licences.map((l) => {
              const on = filter === l
              return (
                <button key={l} className="v1-tab" onClick={() => setFilter(l)} aria-pressed={on} style={{ background: 'none', border: 0, padding: '10px 0 6px', fontSize: '16px', fontWeight: 600, color: on ? C.ink : C.faint, cursor: 'pointer', borderBottom: `2px solid ${on ? C.blue : 'transparent'}`, minHeight: '44px', fontFamily: F }}>
                  {l}
                </button>
              )
            })}
          </div>
        </div>

        {scores.length === 0 ? (
          <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', padding: '2.5rem 1.5rem' }}>
            <div style={{ fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Nothing here yet.</div>
            <div style={{ fontSize: '15px', color: C.muted }}>
              Every practice set and timed exam you finish shows up here. <a href="/dashboard" className="v1-link" style={{ color: C.blue, fontWeight: 600, textDecoration: 'none' }}>Start with a practice set</a>
            </div>
          </div>
        ) : (
          <>
            {/* FIGURES */}
            <div style={{ display: 'flex', gap: isMobile ? '2rem' : '3.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {figure(String(totalAttempts), totalAttempts === 1 ? 'attempt' : 'attempts')}
              {figure(avg + '%', 'average')}
              {figure(`${passedSubjects} of ${subjectStats.length}`, 'subjects passed')}
            </div>

            {/* SUBJECT LEDGER */}
            <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden' }}>
              {!isMobile && (
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 110px 110px 230px', gap: '1.5rem', padding: '0 1.5rem', minHeight: '44px', alignItems: 'center', fontSize: '13px', color: C.muted, background: '#f7f9fb', borderBottom: `1px solid ${C.rule}` }}>
                  <div>Subject</div>
                  <div style={{ textAlign: 'right' }}>Best</div>
                  <div style={{ textAlign: 'right' }}>Last</div>
                  <div />
                </div>
              )}
              {subjectStats.length === 0 && (
                <div style={{ padding: '1.5rem', fontSize: '15px', color: C.muted }}>No {filter} attempts yet.</div>
              )}
              {subjectStats.map((s, idx) => {
                const passed = s.best >= s.passMark
                const isLast = idx === subjectStats.length - 1
                const num = (v: number, strong: boolean) => (
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: FD, fontWeight: 600, fontSize: '28px', lineHeight: 1, color: strong ? C.ink : C.muted, fontVariantNumeric: 'tabular-nums' }}>
                      {v}<span style={{ fontSize: '15px', fontWeight: 500, color: C.muted, marginLeft: '1px' }}>%</span>
                    </div>
                  </div>
                )
                const subjectCell = (
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.2 }}>{s.subject}</div>
                    <div style={{ fontSize: '14px', color: C.muted, marginTop: '3px' }}>
                      {s.licence}, {s.attempts} {s.attempts === 1 ? 'attempt' : 'attempts'}{s.examAttempts > 0 ? ` including ${s.examAttempts} timed ${s.examAttempts === 1 ? 'exam' : 'exams'}` : ''}, average {s.avg}%
                    </div>
                    <div style={{ fontSize: '13px', marginTop: '4px', color: passed ? C.pass : C.muted, fontWeight: passed ? 600 : 400 }}>
                      {passed ? `Passed, pass mark ${s.passMark}%` : `Below pass mark of ${s.passMark}%`}
                    </div>
                  </div>
                )
                const actions = (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                    <a href={'/quiz/' + encodeURIComponent(s.subject)} className="v1-link" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontSize: '15px', fontWeight: 600, color: C.ink, textDecoration: 'none', paddingRight: '16px', borderRight: `1px solid ${C.rule}`, marginRight: '16px', whiteSpace: 'nowrap' }}>Practise</a>
                    <a href={'/exam/' + encodeURIComponent(s.subject)} className="v1-link" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontSize: '15px', fontWeight: 600, color: C.blue, textDecoration: 'none', whiteSpace: 'nowrap' }}>Sit timed exam</a>
                  </div>
                )

                if (isMobile) return (
                  <div key={s.subject} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px 16px', padding: '1rem', borderBottom: isLast ? 'none' : `1px solid ${C.rule}`, alignItems: 'center' }}>
                    {subjectCell}
                    <div style={{ textAlign: 'right' }}>
                      {num(s.best, true)}
                      <div style={{ fontSize: '13px', color: C.muted, marginTop: '4px' }}>last {s.last}%</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>{actions}</div>
                  </div>
                )

                return (
                  <div key={s.subject} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 110px 110px 230px', alignItems: 'center', gap: '1.5rem', padding: '0.9rem 1.5rem', borderBottom: isLast ? 'none' : `1px solid ${C.rule}` }}>
                    {subjectCell}
                    {num(s.best, true)}
                    {num(s.last, false)}
                    {actions}
                  </div>
                )
              })}
            </div>

            {/* RECENT ATTEMPTS */}
            <h2 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '26px' : '30px', lineHeight: 1.05, margin: '3rem 0 14px' }}>Recent attempts</h2>
            <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden' }}>
              {filtered.slice(0, 12).map((s, idx, arr) => {
                const passed = Number(s.percentage) >= passMarkFor(s.subject)
                return (
                  <div key={s.id} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr auto' : '150px minmax(0,1fr) 120px', gap: '0.5rem 1.5rem', alignItems: 'center', padding: isMobile ? '0.9rem 1rem' : '0.75rem 1.5rem', borderBottom: idx === arr.length - 1 ? 'none' : `1px solid ${C.rule}` }}>
                    {!isMobile && <div style={{ fontSize: '14px', color: C.muted }}>{new Date(s.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</div>}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '15px', fontWeight: 600 }}>{s.subject}</div>
                      <div style={{ fontSize: '13px', color: C.muted }}>
                        {isMobile ? new Date(s.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' : ''}
                        {s.mode === 'exam' ? 'timed exam' : 'practice'}, {s.score} of {s.total}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', fontFamily: FD, fontWeight: 600, fontSize: '22px', color: passed ? C.ink : C.muted, fontVariantNumeric: 'tabular-nums' }}>
                      {Number(s.percentage)}<span style={{ fontSize: '14px', fontWeight: 500, color: C.muted, marginLeft: '1px' }}>%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* FOOT */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.rule}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px', color: C.faint }}>
          <span>© V1 Study. Built for Australian pilots.</span>
          <a href="/terms" style={{ color: C.faint, textDecoration: 'none' }}>Terms and conditions</a>
        </div>
      </div>
    </main>
  )
}
