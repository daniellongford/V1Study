'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

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

const subjectsByLicence: Record<string, { subject: string; code: string; passMark: number }[]> = {
  PPL: [
    { subject: 'PPL Theory', code: 'PPL', passMark: 70 },
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
    { subject: 'Human Factors Advanced', code: 'AHUF', passMark: 70 },
    { subject: 'Aerodynamics and Systems', code: 'AADA', passMark: 70 },
    { subject: 'Performance and Loading', code: 'AASY', passMark: 70 },
    { subject: 'Meteorology Advanced', code: 'AMET', passMark: 70 },
    { subject: 'Navigation Advanced', code: 'ANAV', passMark: 70 },
    { subject: 'Flight Planning Advanced', code: 'AAFP', passMark: 70 },
    { subject: 'Air Law Advanced', code: 'AALW', passMark: 80 },
  ],
  IREX: [
    { subject: 'Instrument Rating', code: 'IREX', passMark: 70 },
  ],
}

const PLAN_ACCESS: Record<string, string[]> = {
  PPL: ['PPL Theory'],
  CPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law'],
  ATPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Human Factors Advanced', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Navigation Advanced', 'Flight Planning Advanced', 'Air Law Advanced'],
  IREX: ['Instrument Rating'],
  FULL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Human Factors Advanced', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Navigation Advanced', 'Flight Planning Advanced', 'Air Law Advanced', 'Instrument Rating'],
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [selectedLicence, setSelectedLicence] = useState('CPL')
  const [loading, setLoading] = useState(true)
  const [recentScores, setRecentScores] = useState<any[]>([])
  const [bestScores, setBestScores] = useState<Record<string, number>>({})
  const [menuOpen, setMenuOpen] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
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
      .select('plan, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()
    if (data) setPlan(data.plan)
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

  function hasAccess(subject: string): boolean {
    if (!plan) return false
    return PLAN_ACCESS[plan]?.includes(subject) ?? false
  }

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif' }}>
      <p style={{ color: '#64748b' }}>Loading...</p>
    </main>
  )

  const currentSubjects = subjectsByLicence[selectedLicence] || []

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>

      {/* NAV */}
      <nav style={{
        background: 'white', borderBottom: '1px solid #e2e8f0',
        padding: isMobile ? '0.875rem 1rem' : '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative',
      }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
          <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>V1. Rotate. Pass.</div>
        </div>

        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer', fontSize: '18px', color: '#0a1628', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            {menuOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0,
                background: 'white', borderBottom: '1px solid #e2e8f0',
                padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '4px',
                zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}>
                <a href="/dashboard" onClick={() => setMenuOpen(false)} style={{ color: '#2563eb', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', fontWeight: '600', borderBottom: '1px solid #f1f5f9' }}>Study</a>
                <a href="/progress" onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', borderBottom: '1px solid #f1f5f9' }}>Progress</a>
                <a href="/pricing" onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', padding: '12px 8px', fontSize: '15px', borderBottom: '1px solid #f1f5f9' }}>Upgrade</a>
                <div style={{ padding: '8px 8px 4px', fontSize: '13px', color: '#94a3b8' }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', fontSize: '14px', cursor: 'pointer', color: '#64748b', textAlign: 'left' }}>
                  Sign out
                </button>
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
              <button onClick={handleSignOut} style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '5px 12px', fontSize: '13px', cursor: 'pointer', color: '#64748b' }}>
                Sign out
              </button>
            </div>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: isMobile ? '1.25rem' : '2rem' }}>

        {/* HEADER + RECENT ACTIVITY */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(' ')[0]}` : ''}.
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: recentScores.length > 0 ? '1rem' : '0' }}>Select a licence category and begin practising.</p>

          {recentScores.length > 0 && (
            <a href="/progress" style={{
              background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px',
              padding: '12px 16px', textDecoration: 'none', display: 'block',
            }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>Recent Activity</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {recentScores.map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '13px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.subject}</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'monospace', color: Number(s.percentage) >= 70 ? '#16a34a' : '#dc2626', flexShrink: 0 }}>{Number(s.percentage)}%</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '11px', color: '#2563eb', marginTop: '8px' }}>View full progress →</div>
            </a>
          )}
        </div>

        {/* LICENCE TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {Object.keys(subjectsByLicence).map((licence) => (
            <button
              key={licence}
              onClick={() => setSelectedLicence(licence)}
              style={{
                padding: '10px 20px', borderRadius: '6px', border: 'none',
                fontWeight: '600', fontSize: '13px', cursor: 'pointer',
                background: selectedLicence === licence ? '#0a1628' : '#e2e8f0',
                color: selectedLicence === licence ? 'white' : '#475569',
                letterSpacing: '0.02em', minHeight: '44px',
              }}
            >
              {licence}
            </button>
          ))}
        </div>

        {/* SUBJECT CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill,minmax(260px,1fr))',
          gap: '12px', marginBottom: '1.5rem',
        }}>
          {currentSubjects.map(({ subject, code, passMark }) => {
            const best = bestScores[subject]
            const hasPassed = best !== undefined && best >= passMark
            const accessible = hasAccess(subject)
            return (
              <div key={subject} style={{ background: accessible ? 'white' : '#f8fafc', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px', opacity: accessible ? 1 : 0.65 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: accessible ? '#2563eb' : '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.06em', background: accessible ? '#eff6ff' : '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>{code}</div>
                  {accessible && best !== undefined && (
                    <div style={{ fontSize: '11px', fontWeight: '600', color: hasPassed ? '#16a34a' : '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '10px' }}>{hasPassed ? '✓' : '○'}</span>
                      Best: {best}%
                    </div>
                  )}
                  {!accessible && (
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>🔒 Locked</div>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0a1628', lineHeight: 1.3, marginBottom: '4px' }}>{subject}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>10 questions · Pass mark {passMark}%</div>
                </div>
                {accessible && best !== undefined && (
                  <div style={{ background: '#f8fafc', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: hasPassed ? '#16a34a' : '#f59e0b', borderRadius: '4px', width: Math.min(best, 100) + '%', transition: 'width 0.4s' }}></div>
                  </div>
                )}
                {accessible ? (
                  <button
                    onClick={() => window.location.href = '/quiz/' + encodeURIComponent(subject)}
                    style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', letterSpacing: '0.02em', minHeight: '44px' }}
                  >
                    Start Quiz →
                  </button>
                ) : (
                  <a href="/pricing" style={{ background: 'transparent', color: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', padding: '12px', fontSize: '14px', fontWeight: '600', textAlign: 'center', textDecoration: 'none', display: 'block', minHeight: '44px', lineHeight: '20px' }}>
                    Upgrade to unlock
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* BANNER */}
        {!plan ? (
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1.25rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', marginBottom: '2px' }}>No active plan — subscribe to unlock your exams</div>
              <div style={{ fontSize: '12px', color: '#3b82f6' }}>Choose a plan to get full access to your practice questions</div>
            </div>
            <a href="/pricing" style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
              View Plans
            </a>
          </div>
        ) : (
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1.25rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', marginBottom: '2px' }}>Active plan — {plan} Pack</div>
              <div style={{ fontSize: '12px', color: '#3b82f6' }}>Unlimited practice questions written to the full CASA MOS syllabus</div>
            </div>
            <a href="/pricing" style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
              Manage Plan
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
