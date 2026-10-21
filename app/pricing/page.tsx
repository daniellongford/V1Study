'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

const plans = [
  { name: 'PPL Pack', price: '$9.99', priceId: 'price_1UDInpCdMFoMcdWhqFI4pXIR', planKey: 'PPL', includes: 'PPL Theory. Every question, explanation and CASA reference.' },
  { name: 'CPL Pack', price: '$19.99', priceId: 'price_1UDInpCdMFoMcdWhYQDoUP5y', planKey: 'CPL', includes: 'PPL Theory and all seven CPL exams.' },
  { name: 'ATPL Pack', price: '$29.99', priceId: 'price_1UDInvCdMFoMcdWh7m6hD1NW', planKey: 'ATPL', comingSoon: true, includes: 'CPL Pack and all seven ATPL exams.' },
  { name: 'IREX', price: '$14.99', priceId: 'price_1UDInpCdMFoMcdWhwvavh1ks', planKey: 'IREX', includes: 'The Instrument Rating Exam on its own.' },
  { name: 'Full Access', price: '$34.99', priceId: 'price_1UDInpCdMFoMcdWhHEFjZJuT', planKey: 'FULL', includes: 'Every exam on the platform: PPL, CPL, ATPL and IREX. Priority support.' },
]

const PLAN_RANK: Record<string, number> = { PPL: 1, IREX: 2, CPL: 3, ATPL: 4, FULL: 5 }

// ── Design tokens ─────────────────────────────────────────────────────────────
const F = "'Barlow', system-ui, -apple-system, sans-serif"
const FD = "'Barlow Semi Condensed', 'Barlow', system-ui, sans-serif"
const C = { ground: '#eef1f5', paper: '#ffffff', ink: '#0a1628', rule: '#dde3ea', muted: '#5f6c7b', faint: '#98a4b3', blue: '#2563eb', pass: '#15803d' }

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

export default function PricingPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [userLoaded, setUserLoaded] = useState(false)
  const [currentPlan, setCurrentPlan] = useState<string | null>(null)
  const [cancelLoading, setCancelLoading] = useState(false)
  const [cancelDone, setCancelDone] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setUserLoaded(true)
      if (data.user) {
        supabase.from('subscriptions').select('plan, status').eq('user_id', data.user.id).eq('status', 'active').single().then(({ data: sub }) => { if (sub) setCurrentPlan(sub.plan) })
      }
    })
  }, [])

  async function handleCheckout(priceId: string) {
    if (!user) { window.location.href = '/signup?plan=' + priceId; return }
    setLoading(priceId)
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId, email: user.email }) })
      const data = await res.json()
      if (data.url) { window.location.href = data.url } else { alert('Something went wrong. Please try again.') }
    } catch (e) { alert('Something went wrong. Please try again.') }
    setLoading(null)
  }

  async function handleCancel() {
    if (!confirm('Cancel your subscription? You keep access until the end of your current billing period.')) return
    setCancelLoading(true)
    try {
      const res = await fetch('/api/cancel', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: user.email }) })
      const data = await res.json()
      if (data.success) { setCancelDone(true); setCurrentPlan(null) } else { alert('Something went wrong. Please contact support@v1study.com.au') }
    } catch (e) { alert('Something went wrong. Please contact support@v1study.com.au') }
    setCancelLoading(false)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  function isPlanVisible(planKey: string): boolean {
    if (!currentPlan) return true
    if (currentPlan === planKey) return true
    return (PLAN_RANK[planKey] || 0) > (PLAN_RANK[currentPlan] || 0)
  }

  function actionText(plan: any) {
    if (loading === plan.priceId) return 'One moment'
    if (!userLoaded) return 'Start free trial'
    if (!user) return 'Start free trial'
    if (currentPlan === plan.planKey) return 'Your current plan'
    if (currentPlan) return 'Upgrade'
    return 'Start free trial'
  }

  const visiblePlans = plans.filter(p => isPlanVisible(p.planKey))
  const current = plans.find(p => p.planKey === currentPlan)

  const navLink = (href: string, label: string, active = false) => (
    <a href={href} style={{ color: active ? C.ink : C.muted, fontWeight: active ? 600 : 400, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{label}</a>
  )

  return (
    <main style={{ minHeight: '100vh', background: C.ground, fontFamily: F, color: C.ink, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .v1-link:hover { text-decoration: underline; text-underline-offset: 3px; }
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
                <a href="/pricing" style={{ color: C.ink, fontWeight: 600, textDecoration: 'none', padding: '12px 0', fontSize: '16px', borderBottom: `1px solid ${C.rule}` }}>Upgrade</a>
                <div style={{ padding: '12px 0 6px', fontSize: '14px', color: C.faint }}>{user?.email}</div>
                <button onClick={handleSignOut} style={{ background: 'none', border: 'none', padding: '8px 0', fontSize: '16px', cursor: 'pointer', color: C.muted, textAlign: 'left', fontFamily: F }}>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLink('/dashboard', 'Study')}
            {navLink('/progress', 'Progress')}
            {navLink('/pricing', 'Upgrade', true)}
            <span style={{ fontSize: '14px', color: C.faint }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'none', border: `1px solid ${C.rule}`, borderRadius: '4px', padding: '7px 12px', fontSize: '14px', cursor: 'pointer', color: C.muted, fontFamily: F }}>Sign out</button>
          </div>
        )}
      </nav>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: isMobile ? '1.75rem 1rem 3rem' : '3rem 2rem 4rem' }}>

        {/* HEAD */}
        <h1 style={{ fontFamily: FD, fontWeight: 600, fontSize: isMobile ? '34px' : '44px', lineHeight: 1, letterSpacing: '-0.005em', margin: '0 0 12px' }}>
          {currentPlan ? 'Upgrade your plan' : 'Pricing'}
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.55, color: C.muted, margin: '0 0 1.75rem', maxWidth: '620px' }}>
          {current
            ? <>You&rsquo;re on the {current.name}, {current.price} a month. Every plan includes every question, explanation and CASA reference for the exams it covers.</>
            : <>Seven days free on every plan, then billed monthly in Australian dollars. Cancel from your dashboard at any time.</>}
        </p>

        {/* PLAN LEDGER */}
        <div style={{ background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', overflow: 'hidden' }}>
          {visiblePlans.map((plan, idx) => {
            const isCurrent = plan.planKey === currentPlan
            const soon = (plan as any).comingSoon
            const isLast = idx === visiblePlans.length - 1
            const busy = loading === plan.priceId

            const nameCell = (
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.2, color: soon ? C.faint : C.ink }}>{plan.name}</div>
                <div style={{ fontSize: '14px', color: soon ? C.faint : C.muted, marginTop: '3px' }}>{plan.includes}</div>
              </div>
            )
            const priceCell = (
              <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: FD, fontWeight: 600, fontSize: '28px', lineHeight: 1, color: soon ? C.faint : C.ink, fontVariantNumeric: 'tabular-nums' }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: C.muted, marginLeft: '4px' }}>a month</span>
              </div>
            )
            const action = soon ? (
              <div style={{ fontSize: '14px', color: C.faint, textAlign: isMobile ? 'left' : 'right' }}>Coming soon</div>
            ) : isCurrent ? (
              <div style={{ fontSize: '14px', color: C.pass, fontWeight: 600, textAlign: isMobile ? 'left' : 'right' }}>Your current plan</div>
            ) : (
              <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                <button onClick={() => handleCheckout(plan.priceId)} disabled={busy} className="v1-link" style={{ background: 'none', border: 0, padding: 0, fontFamily: F, fontSize: '15px', fontWeight: 600, color: busy ? C.faint : C.blue, cursor: busy ? 'default' : 'pointer', minHeight: '44px' }}>
                  {actionText(plan)}
                </button>
              </div>
            )

            if (isMobile) return (
              <div key={plan.planKey} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px 16px', padding: '1rem', borderBottom: isLast ? 'none' : `1px solid ${C.rule}`, alignItems: 'center' }}>
                {nameCell}
                {priceCell}
                <div style={{ gridColumn: '1 / -1' }}>{action}</div>
              </div>
            )

            return (
              <div key={plan.planKey} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 170px 170px', alignItems: 'center', gap: '1.5rem', padding: '0 1.5rem', minHeight: '76px', borderBottom: isLast ? 'none' : `1px solid ${C.rule}` }}>
                {nameCell}
                {priceCell}
                {action}
              </div>
            )
          })}
        </div>

        {/* CANCEL / HELP */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: C.muted, lineHeight: 1.6 }}>
          {currentPlan && !cancelDone && (
            <div>
              Need to stop? You keep access until the end of the billing period.{' '}
              <button onClick={handleCancel} disabled={cancelLoading} className="v1-link" style={{ background: 'none', border: 0, padding: 0, fontFamily: F, fontSize: '14px', fontWeight: 600, color: C.ink, cursor: cancelLoading ? 'default' : 'pointer' }}>
                {cancelLoading ? 'Cancelling' : 'Cancel subscription'}
              </button>
            </div>
          )}
          {cancelDone && (
            <div>Subscription cancelled. You keep access until the end of your billing period.</div>
          )}
          <div>
            Not sure which pack?{' '}
            <button onClick={() => setSupportOpen(o => !o)} className="v1-link" style={{ background: 'none', border: 0, padding: 0, fontFamily: F, fontSize: '14px', fontWeight: 600, color: C.ink, cursor: 'pointer' }}>
              {supportOpen ? 'Close' : 'Email support'}
            </button>
            {!supportOpen && <> and we&rsquo;ll point you at the right one.</>}
          </div>
        </div>

        {supportOpen && (
          <SupportForm isMobile={isMobile} userEmail={user?.email || ''} />
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

// ── Support form (same route as the contact page) ─────────────────────────────

function SupportForm({ isMobile, userEmail }: { isMobile: boolean; userEmail: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState(userEmail)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => { if (userEmail && !email) setEmail(userEmail) }, [userEmail]) // eslint-disable-line react-hooks/exhaustive-deps

  const ready = name.trim() && email.trim() && message.trim() && !sending

  async function send() {
    if (!ready) return
    setSending(true)
    try {
      const res = await fetch('/api/support-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (data.success) setSent(true)
      else alert('Something went wrong. Please email us directly at support@v1study.com.au')
    } catch {
      alert('Something went wrong. Please email us directly at support@v1study.com.au')
    }
    setSending(false)
  }

  const field = { padding: '10px 12px', border: `1px solid ${C.rule}`, borderRadius: '6px', fontSize: '16px', fontFamily: F, color: C.ink, outline: 'none', background: C.paper }

  return (
    <div style={{ marginTop: '14px', maxWidth: '720px', background: C.paper, border: `1px solid ${C.rule}`, borderRadius: '8px', padding: '16px' }}>
      {sent ? (
        <div style={{ fontSize: '15px' }}>Sent. We reply within a day, to {email}.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px' }}>
            <input type="text" placeholder="Your name" aria-label="Your name" value={name} onChange={e => setName(e.target.value)} style={field} />
            <input type="email" placeholder="Your email" aria-label="Your email" value={email} onChange={e => setEmail(e.target.value)} style={field} />
          </div>
          <textarea placeholder="Which exams are you sitting, and when?" aria-label="Message" value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ ...field, resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={send} disabled={!ready} style={{ background: 'none', border: 0, padding: '8px 0', fontSize: '16px', fontWeight: 600, color: ready ? C.blue : C.faint, cursor: ready ? 'pointer' : 'default', minHeight: '44px', fontFamily: F }}>
              {sending ? 'Sending' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
