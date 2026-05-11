'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

const plans = [
  {
    name: 'PPL Pack',
    price: '$9.99',
    period: 'per month',
    priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz',
    color: '#10b981',
    description: 'Perfect for student pilots taking their PPL theory exam',
    features: ['PPL Theory exam', 'Unlimited AI questions', 'Full explanations', 'CASA references', 'Progress tracking'],
  },
  {
    name: 'CPL Pack',
    price: '$19.99',
    period: 'per month',
    priceId: 'price_1TIP6XCbt27bkqBv9CypW42J',
    color: '#2563eb',
    popular: true,
    description: 'Everything you need for your Commercial Pilot Licence',
    features: ['All 7 CPL exams', 'Unlimited AI questions', 'Progress tracking', 'Weak area analysis', 'CASA syllabus aligned'],
  },
  {
    name: 'ATPL Pack',
    price: '$29.99',
    period: 'per month',
    priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn',
    color: '#7c3aed',
    description: 'For pilots heading to the flight deck',
    features: ['All 7 CPL + 7 ATPL exams', 'Unlimited AI questions', 'Progress tracking', 'Weak area analysis', 'CASA MOS aligned'],
  },
  {
    name: 'IREX Standalone',
    price: '$14.99',
    period: 'per month',
    priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb',
    color: '#f59e0b',
    description: 'Already have your CPL? Add the Instrument Rating',
    features: ['IREX exam only', 'Unlimited AI questions', 'Full explanations', 'CASA references', 'Progress tracking'],
  },
  {
    name: 'Full Access',
    price: '$34.99',
    period: 'per month',
    priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3',
    color: '#0a1628',
    description: 'Every exam covered — the complete V1 Study experience',
    features: ['All 16 exams included', 'PPL + CPL + ATPL + IREX', 'Unlimited AI questions', 'Priority support', 'CASA MOS aligned'],
  },
]

export default function PricingPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [userLoaded, setUserLoaded] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setUserLoaded(true)
    })
  }, [])

  async function handleCheckout(priceId: string) {
    if (!user) {
      window.location.href = '/signup'
      return
    }
    setLoading(priceId)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, email: user.email })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (e) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(null)
  }

  function buttonText(priceId: string) {
    if (loading === priceId) return 'Loading...'
    if (!userLoaded) return 'Get started'
    if (!user) return 'Sign up and subscribe'
    return 'Subscribe now'
  }

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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0a1628', marginBottom: '1rem' }}>Simple, transparent pricing</h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            {user
              ? 'Subscribe to unlock unlimited AI-generated questions based on the full CASA MOS syllabus.'
              : 'Start with a free trial. Cancel anytime. No lock-in contracts.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: plan.popular ? '2px solid #2563eb' : '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '99px', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
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
              <button
                onClick={() => handleCheckout(plan.priceId)}
                disabled={loading === plan.priceId}
                style={{ width: '100%', background: plan.popular ? '#2563eb' : loading === plan.priceId ? '#94a3b8' : 'transparent', color: plan.popular ? 'white' : loading === plan.priceId ? 'white' : plan.color, border: `2px solid ${plan.popular ? '#2563eb' : plan.color}`, borderRadius: '8px', padding: '10px', fontWeight: '600', cursor: loading === plan.priceId ? 'not-allowed' : 'pointer', fontSize: '14px' }}
              >
                {buttonText(plan.priceId)}
              </button>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          {user ? (
            <>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>Not sure which plan is right for you?</h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1rem' }}>Continue using the free trial to explore the platform, then subscribe when you are ready.</p>
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
        <p style={{ fontSize: '13px', color: '#94a3b8' }}>© V1 Study · Built for Australian pilots.</p>
      </footer>
    </main>
  )
}
