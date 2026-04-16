'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

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
    { subject: 'Human Factors', code: 'AHUF', passMark: 70 },
    { subject: 'Aerodynamics and Systems', code: 'AADA', passMark: 70 },
    { subject: 'Performance and Loading', code: 'AASY', passMark: 70 },
    { subject: 'Meteorology', code: 'AMET', passMark: 70 },
    { subject: 'Navigation', code: 'ANAV', passMark: 70 },
    { subject: 'Flight Planning', code: 'AAFP', passMark: 70 },
    { subject: 'Air Law', code: 'AALW', passMark: 80 },
  ],
  IREX: [
    { subject: 'Instrument Rating', code: 'IREX', passMark: 70 },
  ],
}

const PLAN_ACCESS: Record<string, string[]> = {
  PPL: ['PPL Theory'],
  CPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law'],
  ATPL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Human Factors', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Navigation', 'Flight Planning', 'Air Law'],
  IREX: ['Instrument Rating'],
  FULL: ['PPL Theory', 'Human Factors', 'Aerodynamics', 'Aircraft General Knowledge', 'Meteorology', 'Navigation', 'Operations Performance Planning', 'Flight Rules and Air Law', 'Human Factors', 'Aerodynamics and Systems', 'Performance and Loading', 'Meteorology Advanced', 'Navigation', 'Flight Planning', 'Air Law', 'Instrument Rating'],
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [selectedLicence, setSelectedLicence] = useState('CPL')
  const [loading, setLoading] = useState(true)
  const [recentScores, setRecentScores] = useState<any[]>([])
  const [bestScores, setBestScores] = useState<Record<string, number>>({})
  const [plan, setPlan] = useState<string | null>(null)

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
        if (!best[s.subject] || pct > best[s.subject]) {
          best[s.subject] = pct
        }
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
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
          <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>V1. Rotate. Pass.</div>
        </div>
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
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>
              Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(' ')[0]}` : ''}.
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b' }}>Select a licence category and begin practising.</p>
          </div>
          {recentScores.length > 0 && (
            <a href="/progress" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Recent Activity</div>
              {recentScores.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '130px' }}>{s.subject}</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', fontFamily: 'monospace', color: Number(s.percentage) >= 70 ? '#16a34a' : '#dc2626', flexShrink: 0 }}>{Number(s.percentage)}%</div>
                </div>
              ))}
              <div style={{ fontSize: '11px', color: '#2563eb', marginTop: '2px' }}>View full progress →</div>
            </a>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {Object.keys(subjectsByLicence).map((licence) => (
            <button
              key={licence}
              onClick={() => setSelectedLicence(licence)}
              style={{ padding: '8px 20px', borderRadius: '6px', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', background: selectedLicence === licence ? '#0a1628' : '#e2e8f0', color: selectedLicence === licence ? 'white' : '#475569', letterSpacing: '0.02em' }}
            >
              {licence}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '12px', marginBottom: '2rem' }}>
          {currentSubjects.map(({ subject, code, passMark }) => {
            const best = bestScores[subject]
            const hasPassed = best !== undefined && best >= passMark
            const accessible = hasAccess(subject)
            return (
              <div key={subject} style={{ background: accessible ? 'white' : '#f8fafc', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px', opacity: accessible ? 1 : 0.6 }}>
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
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>
                    10 questions · Pass mark {passMark}%
                  </div>
                </div>
                {accessible && best !== undefined && (
                  <div style={{ background: '#f8fafc', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: hasPassed ? '#16a34a' : '#f59e0b', borderRadius: '4px', width: Math.min(best, 100) + '%', transition: 'width 0.4s' }}></div>
                  </div>
                )}
                {accessible ? (
                  <button
                    onClick={() => window.location.href = '/quiz/' + encodeURIComponent(subject)}
                    style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '9px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', letterSpacing: '0.02em' }}
                  >
                    Start Quiz →
                  </button>
                ) : (
                  <a href="/pricing" style={{ background: 'transparent', color: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', padding: '9px', fontSize: '13px', fontWeight: '600', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
                    Upgrade to unlock
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {!plan && (
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', marginBottom: '2px' }}>No active plan — subscribe to unlock your exams</div>
              <div style={{ fontSize: '12px', color: '#3b82f6' }}>Choose a plan to get full access to your practice questions</div>
            </div>
            <a href="/pricing" style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', padding: '9px 20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
              View Plans
            </a>
          </div>
        )}

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

  function handleEmailSend() {
    if (!name || !email || !message) return
    window.location.href = `mailto:support@v1study.com.au?subject=Support request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setEmailSent(true)
  }

  return (
    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '1.5rem', overflow: 'hidden' }}>
      <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '15px', fontWeight: '700', color: '#0a1628', marginBottom: '2px' }}>Support</div>
        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Ask a question or send us a message</div>
      </div>

      {/* TABS */}
      <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
        {(['chat', 'email'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: '600', border: 'none', background: tab === t ? '#f8fafc' : 'white', color: tab === t ? '#2563eb' : '#64748b', cursor: 'pointer', borderBottom: tab === t ? '2px solid #2563eb' : '2px solid transparent' }}>
            {t === 'chat' ? '💬 Ask a question' : '✉️ Email support'}
          </button>
        ))}
      </div>

      <div style={{ padding: '1.25rem 1.5rem' }}>
        {tab === 'chat' ? (
          <>
            <textarea
              placeholder="Ask anything about CASA exams, study tips, or how V1 Study works..."
              value={aiMessage}
              onChange={e => setAiMessage(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '10px' }}
            />
            <button
              onClick={handleAskClaude}
              disabled={aiLoading || !aiMessage.trim()}
              style={{ background: aiLoading || !aiMessage.trim() ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: aiLoading || !aiMessage.trim() ? 'not-allowed' : 'pointer', minHeight: '44px' }}
            >
              {aiLoading ? 'Thinking...' : 'Ask →'}
            </button>
            {aiResponse && (
              <div style={{ marginTop: '1rem', background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', fontSize: '14px', color: '#1e3a6e', lineHeight: 1.65 }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>V1 Study Assistant</div>
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
                <textarea
                  placeholder="How can we help?"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={3}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'none', fontFamily: 'system-ui,sans-serif', boxSizing: 'border-box', marginBottom: '10px' }}
                />
                <button
                  onClick={handleEmailSend}
                  disabled={!name || !email || !message}
                  style={{ background: !name || !email || !message ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: !name || !email || !message ? 'not-allowed' : 'pointer', minHeight: '44px' }}
                >
                  Send message
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem', color: '#15803d', fontSize: '14px', fontWeight: '600' }}>
                ✓ Message sent — we'll get back to you within 24 hours
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
