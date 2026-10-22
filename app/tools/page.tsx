'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { TOOLS } from '../../lib/tools'

// ── Design tokens ─────────────────────────────────────────────────────────────
const F = "'Barlow', system-ui, -apple-system, sans-serif"
const FD = "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif"
const C = { ground: '#eef1f5', paper: '#ffffff', ink: '#0a1628', rule: '#dde3ea', muted: '#5f6c7b', faint: '#98a4b3', blue: '#22629b' }

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

export default function ToolsPage() {
  const [user, setUser] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null))
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const navLink = (href: string, label: string, active = false) => (
    <a href={href} style={{ color: active ? C.ink : C.muted, fontWeight: active ? 600 : 400, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{label}</a>
  )

  const free = TOOLS.filter(t => t.free)
  const members = TOOLS.filter(t => !t.free)

  const row = (t: { slug: string; name: string; short: string; free: boolean }, isLast: boolean) => (
    <a key={t.slug} href={'/tools/' + t.slug} className="v1-row" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) 120px', gap: isMobile ? '4px' : '1.5rem', alignItems: 'center', padding: isMobile ? '1rem' : '1.1rem 1.5rem', borderBottom: isLast ? 'none' : `1px solid ${C.rule}`, textDecoration: 'none', color: C.ink }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.2 }}>{t.name}</div>
        <div style={{ fontSize: '14px', color: C.muted, marginTop: '3px' }}>{t.short}</div>
      </div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: t.free || user ? C.blue : C.muted, textAlign: isMobile ? 'left' : 'right' }}>
        {t.free ? 'Open' : user ? 'Open' : 'Members'}
      </div>
    </a>
  )

  return (
    <main style={{ minHeight: '100vh', background: C.ground, fontFamily: F, color: C.ink, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .v1-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .v1-row:hover { background: #f7f9fb; }
        :focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: C.paper, borderBottom: `1px solid ${C.rule}`, height: '64px', padding: isMobile ? '0 1rem' : '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <a href={user ? '/dashboard' : '/'} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', color: C.ink }}>
          <img src="/v1-mark-navy.png" alt="V1" style={{ height: '30px', width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: FD, fontWeight: 600, fontSize: '24px', letterSpacing: '0.01em', lineHeight: 1 }}>Study</span>
        </a>
        {!user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/login', 'Log in')}
            <a href="/signup" className="v1-link" style={{ color: C.blue, fontWeight: 600, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>Start free trial</a>
          </div>
        ) : isMobile ? (
          <>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '0 12px', cursor: 'pointer', fontSize: '15px', fontWeight: 600, color: C.ink, minWidth: '44px', minHeight: '40px', fontFamily: F }}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: C.paper, borderBottom: `1px solid ${C.rule}`, padding: '0.5rem 1rem 1rem', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
                <a href="/dashboard" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Study</a>
                <a href="/progress" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Progress</a>
                <a href="/tools" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Tools</a>
                <a href="/pricing" style={{ color: C.ink, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Upgrade</a>
                <div style={{ padding: '12px 0 6px', fontSize: '14px', color: C.faint }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: 'none', padding: '8px 0', fontSize: '16px', cursor: 'pointer', color: C.muted, textAlign: 'left', fontFamily: F }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/dashboard', 'Study')}
            {navLink('/progress', 'Progress')}
            {navLink('/tools', 'Tools', true)}
            {navLink('/pricing', 'Upgrade')}
            <span style={{ fontSize: '14px', color: C.faint }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '7px 12px', fontSize: '14px', cursor: 'pointer', color: C.muted, fontFamily: F }}>Sign out</button>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: isMobile ? '1.75rem 1rem 3rem' : '3rem 2rem 4rem' }}>
        <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, letterSpacing: '-0.005em', margin: '0 0 12px' }}>Pilot tools</h1>
        <p style={{ fontSize: '16px', lineHeight: 1.55, color: C.muted, margin: '0 0 2rem', maxWidth: '620px' }}>
          The calculations you do in the planning room and the exam room, worked the way CASA expects. Free tools are open to everyone; the rest come with a V1 Study subscription.
        </p>

        <h2 style={{ fontFamily: FD, fontWeight: 600, fontSize: '24px', lineHeight: 1.1, margin: '0 0 12px' }}>Free</h2>
        <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden', marginBottom: '2.5rem' }}>
          {free.map((t, i) => row(t, i === free.length - 1))}
        </div>

        <h2 style={{ fontFamily: FD, fontWeight: 600, fontSize: '24px', lineHeight: 1.1, margin: '0 0 12px' }}>Members</h2>
        <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden' }}>
          {members.map((t, i) => row(t, i === members.length - 1))}
        </div>
        {!user && (
          <p style={{ fontSize: '14px', color: C.muted, margin: '14px 0 0' }}>
            Member tools are included with every V1 Study plan. <a href="/signup" className="v1-link" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none' }}>Start your 7-day free trial</a>
          </p>
        )}

        <div style={{ marginTop: '3.5rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.rule}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px', color: C.faint }}>
          <span>© V1 Study. Built for Australian pilots.</span>
          <a href="/terms" style={{ color: C.faint, textDecoration: 'none' }}>Terms and conditions</a>
        </div>
      </div>
    </main>
  )
}
