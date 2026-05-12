'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

const plans = [
  { name: 'PPL Pack', price: '$9.99', period: 'per month', priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz', planKey: 'PPL', color: '#10b981', description: 'The foundation of flight. Master the core theory required to earn your Private Pilot Licence.', features: ['PPL Theory exam', 'Unlimited practice questions', 'Full explanations', 'CASA references', 'Progress tracking'] },
  { name: 'CPL Pack', price: '$19.99', period: 'per month', priceId: 'price_1TIP6XCbt27bkqBv9CypW42J', planKey: 'CPL', color: '#2563eb', popular: true, description: 'All 7 CASA subjects. Built for pilots serious about going professional.', features: ['PPL + all 7 CPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis', 'CASA syllabus aligned'] },
  { name: 'ATPL Pack', price: '$29.99', period: 'per month', priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn', planKey: 'ATPL', color: '#7c3aed', description: 'The highest standard in Australian pilot licensing. All 7 subjects for pilots bound for the airlines.', features: ['PPL + CPL + all 7 ATPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis', 'CASA MOS aligned'] },
  { name: 'IREX Standalone', price: '$14.99', period: 'per month', priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb', planKey: 'IREX', color: '#f59e0b', description: 'Cleared for the clouds. Everything you need to pass the CASA Instrument Rating Exam.', features: ['IREX exam only', 'Unlimited practice questions', 'Full explanations', 'CASA references', 'Progress tracking'] },
  { name: 'Full Access', price: '$34.99', period: 'per month', priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3', planKey: 'FULL', color: '#0a1628', description: 'Every exam covered — the complete V1 Study experience.', features: ['All 16 exams included', 'PPL + CPL + ATPL + IREX', 'Unlimited practice questions', 'Priority support', 'CASA MOS aligned'] },
]

const PLAN_RANK: Record<string, number> = { PPL: 1, IREX: 2, CPL: 3, ATPL: 4, FULL: 5 }

export default function PricingPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [userLoaded, setUserLoaded] = useState(false)
  const [currentPlan, setCurrentPlan] = useState<string | null>(null)
  const [cancelLoading, setCancelLoading] = useState(false)
  const [cancelDone, setCancelDone] = useState(false)

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
    if (!user) { window.location.href = '/signup'; return }
    setLoading(priceId)
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId, email: user.email }) })
      const data = await res.json()
      if (data.url) { window.location.href = data.url } else { alert('Something went wrong. Please try again.') }
    } catch (e) { alert('Something went wrong. Please try again.') }
    setLoading(null)
  }

  async function handleCancel() {
    if (!confirm('Are you sure you want to cancel your subscription? You will lose access at the end of your billing period.')) return
    setCancelLoading(true)
    try {
      const res = await fetch('/api/cancel', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: user.email }) })
      const data = await res.json()
      if (data.success) { setCancelDone(true); setCurrentPlan(null) } else { alert('Something went wrong. Please contact support@v1study.com.au') }
    } catch (e) { alert('Something went wrong. Please contact support@v1study.com.au') }
    setCancelLoading(false)
  }

  function isPlanVisible(planKey: string): boolean {
    if (!currentPlan) return true
    if (currentPlan === planKey) return true
    return (PLAN_RANK[planKey] || 0) > (PLAN_RANK[currentPlan] || 0)
  }

  function buttonText(plan: any) {
    if (loading === plan.priceId) return 'Loading...'
    if (!userLoaded) return 'Get started'
    if (!user) return 'Sign up and subscribe'
    if (currentPlan === plan.planKey) return '✓ Current plan'
    return 'Upgrade now'
  }

  const visiblePlans = plans.filter(p => isPlanVisible(p.planKey))

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </a>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Dashboard</a>
          ) : (
            <>
              <a href="/login" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Login</a>
              <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px 16px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Sign up free</a>
            </>
          )}
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>
        {currentPlan && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#15803d', marginBottom: '2px' }}>✓ Active Plan — {plans.find(p => p.planKey === currentPlan)?.name}</div>
              <div style={{ fontSize: '12px', color: '#16a34a' }}>{plans.find(p => p.planKey === currentPlan)?.price}/month · Renews automatically</div>
            </div>
            <a href="/dashboard" style={{ background: '#16a34a', color: 'white', borderRadius: '8px', padding: '8px 16px', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>Back to dashboard →</a>
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0a1628', marginBottom: '1rem' }}>{currentPlan ? 'Upgrade your plan' : 'Simple, transparent pricing'}</h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>{currentPlan ? 'Unlock more exams by upgrading to a higher plan.' : 'Every plan includes a 7 day free trial. Full access from day one.'}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {visiblePlans.map((plan) => (
            <div key={plan.name} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: plan.planKey === currentPlan ? '2px solid #16a34a' : (plan as any).popular && !currentPlan ? '2px solid #2563eb' : '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {plan.planKey === currentPlan && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#16a34a', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '99px', whiteSpace: 'nowrap' }}>CURRENT PLAN</div>}
              {(plan as any).popular && !currentPlan && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '99px', whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
              <div style={{ fontSize: '13px', fontWeight: '700', color: plan.color, marginBottom: '4px' }}>{plan.name}</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#0a1628', lineHeight: 1 }}>{plan.price}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px' }}>{plan.period}</div>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px', lineHeight: 1.5, flex: 1 }}>{plan.description}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#16a34a', fontWeight: '700' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => plan.planKey !== currentPlan && handleCheckout(plan.priceId)} disabled={loading === plan.priceId || plan.planKey === currentPlan} style={{ width: '100%', background: plan.planKey === currentPlan ? '#f0fdf4' : (plan as any).popular && !currentPlan ? '#2563eb' : loading === plan.priceId ? '#94a3b8' : 'transparent', color: plan.planKey === currentPlan ? '#16a34a' : (plan as any).popular && !currentPlan ? 'white' : plan.color, border: `2px solid ${plan.planKey === currentPlan ? '#16a34a' : (plan as any).popular && !currentPlan ? '#2563eb' : plan.color}`, borderRadius: '8px', padding: '10px', fontWeight: '600', cursor: plan.planKey === currentPlan ? 'default' : loading === plan.priceId ? 'not-allowed' : 'pointer', fontSize: '14px' }}>
                {buttonText(plan)}
              </button>
            </div>
          ))}
        </div>

        {currentPlan && !cancelDone && (
          <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem 2rem', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>Cancel subscription</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1rem' }}>You can cancel at any time. You will retain access until the end of your current billing period. For assistance contact <a href="mailto:support@v1study.com.au" style={{ color: '#2563eb' }}>support@v1study.com.au</a></p>
            <button onClick={handleCancel} disabled={cancelLoading} style={{ background: 'none', border: '1px solid #fca5a5', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#dc2626', cursor: cancelLoading ? 'not-allowed' : 'pointer' }}>
              {cancelLoading ? 'Cancelling...' : 'Cancel subscription'}
            </button>
          </div>
        )}

        {cancelDone && (
          <div style={{ background: '#fff1f2', border: '1px solid #fca5a5', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#b91c1c', marginBottom: '4px' }}>Subscription cancelled</div>
            <p style={{ fontSize: '13px', color: '#64748b' }}>You will retain access until the end of your billing period. We hope to see you back soon.</p>
          </div>
        )}

        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          {user ? (
            <>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>Need help choosing?</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1rem' }}>Contact our team at <a href="mailto:support@v1study.com.au" style={{ color: '#2563eb', fontWeight: '600' }}>support@v1study.com.au</a></p>
              <a href="/dashboard" style={{ background: '#0a1628', color: 'white', borderRadius: '8px', padding: '12px 32px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block' }}>Back to dashboard →</a>
            </>
          ) : (
            <>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>Not sure which plan is right for you?</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1rem' }}>Create a free account and explore the platform before subscribing.</p>
              <a href="/signup" style={{ background: '#0a1628', color: 'white', borderRadius: '8px', padding: '12px 32px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'inline-block' }}>Create free account →</a>
            </>
          )}
        </div>
      </div>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', background: 'white' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <p style={{ fontSize: '13px', color: '#94a3b8' }}>© V1 Study · Built for Australian pilots. · <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms &amp; Conditions</a></p>
      </footer>
    </main>
  )
}
