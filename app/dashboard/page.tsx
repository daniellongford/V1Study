'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { PLAN_ACCESS, COMING_SOON_LICENCES, isAdmin as checkAdmin, hasFreeAccess as checkFreeAccess } from '../../lib/access'

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
    { subject: 'Flight Planning', code: 'AAFP', passMark: 70 },
    { subject: 'Air Law', code: 'AALW', passMark: 80 },
  ],
  IREX: [
    { subject: 'Instrument Rating', code: 'IREX', passMark: 70 },
  ],
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

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [selectedLicence, setSelectedLicence] = useState('CPL')
  const [loading, setLoading] = useState(true)
  const [recentScores, setRecentScores] = useState<any[]>([])
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
    }
  }

  async function loadScores(userId: string) {
    const { data } = await supabase
      .from('scores')
      .select('subject, percentage, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    if (data) {
      setRecentScores(data.slice(0, 3))
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

  // Days remaining in the Stripe free trial (if any)
  const trialDaysLeft = trialEnd ? Math.max(0, Math.ceil((new Date(trialEnd).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : 0
  const inTrial = trialDaysLeft > 0

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif' }}>
      <p style={{ color: '#64748b' }}>Loading...</p>
    </main>
  )

  const currentSubjects = subjectsByLicence[selectedLicence] || []

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      {/* NAV */}
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: isMobile ? '0.875rem 1rem' : '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>

        </div>
        {isMobile ? (
          <>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer', fontSize: '18px', color: '#0a1628', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {menuOpen ? '✕' : '☰'}
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', borderBottom: '1px solid #e2e8f0', padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <a href="/dashboard" onClick={() => setMenuOpen(false)} style={{ color: '#2563eb', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', fontWeight: '600', borderBottom: '1px solid #f1f5f9' }}>Study</a>
                <a href="/progress" onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', borderBottom: '1px solid #f1f5f9' }}>Progress</a>
                <a href="/pricing" onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', borderBottom: '1px solid #f1f5f9' }}>Upgrade</a>
                <div style={{ padding: '8px 8px 4px', fontSize: '13px', color: '#94a3b8' }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontSize: '14px', cursor: 'pointer', color: '#64748b', textAlign: 'left' }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="/dashboard" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Study</a>
            <a href="/progress" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Progress</a>
            <a href="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Upgrade</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: '#64748b' }}>{user?.user_metadata?.full_name || user?.email}</span>
              <button onClick={handleSignOut} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '5px 12px', fontSize: '13px', cursor: 'pointer', color: '#64748b' }}>Sign out</button>
            </div>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: isMobile ? '1.25rem' : '2rem' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(' ')[0]}` : ''}.
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: recentScores.length > 0 ? '1rem' : '0' }}>Select a licence category and begin practising.</p>
          {recentScores.length > 0 && (
            <a href="/progress" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Recent Activity</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {recentScores.map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '13px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.subject}</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'monospace', color: '#0a1628', flexShrink: 0 }}>{Number(s.percentage)}%</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '11px', color: '#2563eb', marginTop: '8px' }}>View full progress →</div>
            </a>
          )}
        </div>

        {/* TRIAL BANNER */}
        {inTrial && (
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '14px 18px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e3a8a', marginBottom: '2px' }}>
                Free trial — {trialDaysLeft} day{trialDaysLeft !== 1 ? 's' : ''} left
              </div>
              <div style={{ fontSize: '12px', color: '#3b5fa4' }}>You&apos;ll be charged when your trial ends. Cancel anytime before then.</div>
            </div>
            <a href="/pricing" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px 16px', textDecoration: 'none', fontWeight: '600', fontSize: '13px', flexShrink: 0 }}>Manage plan</a>
          </div>
        )}

        {/* LICENCE TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {Object.keys(subjectsByLicence).map((licence) => (
            <button key={licence} onClick={() => setSelectedLicence(licence)} style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', background: selectedLicence === licence ? '#0a1628' : '#e2e8f0', color: selectedLicence === licence ? 'white' : '#475569', letterSpacing: '0.02em', minHeight: '44px' }}>
              {licence}
            </button>
          ))}
        </div>

        {/* SUBJECT CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill,minmax(260px,1fr))', gap: '12px', marginBottom: '1.5rem' }}>
          {currentSubjects.map(({ subject, code, passMark }) => {
            const best = bestScores[subject]
            const hasPassed = best !== undefined && best >= passMark
            const accessible = hasAccess(subject)
            const comingSoon = COMING_SOON_LICENCES.includes(selectedLicence) && !isAdmin

            if (comingSoon) {
              return (
                <div key={subject} style={{ background: 'white', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.85 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.06em', background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>{code}</div>
                    <div style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', background: '#f1f5f9', padding: '3px 10px', borderRadius: '99px' }}>Coming soon</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#0a1628', lineHeight: 1.3, marginBottom: '4px' }}>{subject}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Pass mark {passMark}%</div>
                  </div>
                  <button disabled style={{ background: '#f1f5f9', color: '#94a3b8', border: 'none', borderRadius: '6px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'not-allowed', letterSpacing: '0.02em', minHeight: '44px' }}>
                    Coming soon
                  </button>
                </div>
              )
            }

            return (
              <div key={subject} style={{ background: 'white', borderRadius: '10px', padding: '1.25rem', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: accessible ? '#2563eb' : '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.06em', background: accessible ? '#eff6ff' : '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>{code}</div>
                  {accessible && best !== undefined && (
                    <div style={{ fontSize: '11px', color: '#64748b' }}>
                      Best: {best}%{hasPassed ? ' ✓' : ''}
                    </div>
                  )}
                  {!accessible && <div style={{ fontSize: '11px', color: '#94a3b8' }}>Locked</div>}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0a1628', lineHeight: 1.3, marginBottom: '4px' }}>{subject}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>
                    {accessible ? '10 questions · Pass mark ' + passMark + '%' : 'Subscribe to unlock this exam'}
                  </div>
                </div>
                {accessible ? (
                  <button onClick={() => window.location.href = '/quiz/' + encodeURIComponent(subject)} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', letterSpacing: '0.02em', minHeight: '44px' }}>
                    Start Quiz →
                  </button>
                ) : (
                  <a href="/pricing" style={{ background: 'white', color: '#0a1628', border: '2px solid #2563eb', borderRadius: '6px', padding: '12px', fontSize: '14px', fontWeight: '600', textAlign: 'center', textDecoration: 'none', display: 'block', minHeight: '44px', lineHeight: '20px' }}>
                    Subscribe to unlock →
                  </a>
                )}
              </div>
            )
          })}
        </div>


        {/* CONTACT SECTION */}
        <ContactSection isMobile={isMobile} userEmail={user?.email} />

      </div>
    </main>
  )
}

function ContactSection({ isMobile, userEmail }: { isMobile: boolean; userEmail?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState(userEmail || '')
  const [message, setMessage] = useState('')
  const [aiMessage, setAiMessage] = useState('')
  const [aiResponse, setAiResponse] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [tab, setTab] = useState<'chat' | 'email'>('chat')
  const [emailSent, setEmailSent] = useState(false)

  async function handleAskClaude() {
    if (!aiMessage.trim()) return
    setAiLoading(true)
    setAiResponse('')
    try {
      const res = await fetch('/api/support-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: aiMessage })
      })
      const data = await res.json()
      setAiResponse(data.response || 'Sorry, something went wrong. Please try again.')
    } catch (e) {
      setAiResponse('Sorry, something went wrong. Please try again.')
    }
    setAiLoading(false)
  }

  async function handleEmailSend() {
    if (!name || !email || !message) return
    try {
      const res = await fetch('/api/support-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (data.success) {
        setEmailSent(true)
      } else {
        alert('Something went wrong. Please email us directly at support@v1study.com.au')
      }
    } catch (e) {
      alert('Something went wrong. Please email us directly at support@v1study.com.au')
    }
  }

  return (
    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '1.5rem', overflow: 'hidden' }}>
      <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '15px', fontWeight: '700', color: '#0a1628', marginBottom: '2px' }}>Support</div>
        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Ask a question or send us a message</div>
      </div>
      <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
        {(['chat', 'email'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: '600', border: 'none', background: tab === t ? '#f8fafc' : 'white', color: tab === t ? '#0a1628' : '#94a3b8', cursor: 'pointer', borderBottom: tab === t ? '2px solid #0a1628' : '2px solid transparent' }}>
            {t === 'chat' ? '💬 Ask a question' : '✉️ Email support'}
          </button>
        ))}
      </div>
      <div style={{ padding: '1.25rem 1.5rem' }}>
        {tab === 'chat' ? (
          <>
            <textarea placeholder="Ask anything about CASA exams, study tips, or how V1 Study works..." value={aiMessage} onChange={e => setAiMessage(e.target.value)} rows={3} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '10px' }} />
            <button onClick={handleAskClaude} disabled={aiLoading || !aiMessage.trim()} style={{ background: aiLoading || !aiMessage.trim() ? '#f1f5f9' : '#0a1628', color: aiLoading || !aiMessage.trim() ? '#94a3b8' : 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: aiLoading || !aiMessage.trim() ? 'not-allowed' : 'pointer', minHeight: '44px' }}>
              {aiLoading ? 'Thinking...' : 'Ask →'}
            </button>
            {aiResponse && (
              <div style={{ marginTop: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', fontSize: '14px', color: '#0a1628', lineHeight: 1.65 }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>V1 Study Assistant</div>
                {aiResponse}
              </div>
            )}
          </>
        ) : (
          <>
            {!emailSent ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={{ padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
                  <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
                </div>
                <textarea placeholder="How can we help?" value={message} onChange={e => setMessage(e.target.value)} rows={3} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '10px' }} />
                <button onClick={handleEmailSend} disabled={!name || !email || !message} style={{ background: !name || !email || !message ? '#f1f5f9' : '#0a1628', color: !name || !email || !message ? '#94a3b8' : 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: !name || !email || !message ? 'not-allowed' : 'pointer', minHeight: '44px' }}>
                  Send message
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem', color: '#0a1628', fontSize: '14px', fontWeight: '600' }}>
                ✓ Message sent — we'll get back to you within 24 hours
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
