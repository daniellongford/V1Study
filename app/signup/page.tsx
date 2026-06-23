'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { FREE_ACCESS_EMAILS } from '../../lib/access'

const PLANS = [
  { name: 'PPL Pack', price: '$9.99', priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz', blurb: 'PPL Theory exam' },
  { name: 'CPL Pack', price: '$19.99', priceId: 'price_1TIP6XCbt27bkqBv9CypW42J', blurb: 'PPL + all 7 CPL exams' },
  { name: 'ATPL Pack', price: '$29.99', priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn', blurb: 'CPL + all 7 ATPL exams', comingSoon: true },
  { name: 'IREX Standalone', price: '$14.99', priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb', blurb: 'IREX exam only' },
  { name: 'Full Access', price: '$34.99', priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3', blurb: 'Every exam included' },
]

function SignUpInner() {
  const searchParams = useSearchParams()
  const planFromUrl = searchParams.get('plan')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string>('price_1TIP6XCbt27bkqBv9CypW42J')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    if (planFromUrl && PLANS.some(p => p.priceId === planFromUrl && !p.comingSoon)) {
      setSelectedPlan(planFromUrl)
    }
  }, [planFromUrl])

  async function handleSignUp() {
    if (!email || !password) { setMessage('Please enter your email and password'); return }
    if (!agreed) { setMessage('Please agree to the Terms and Conditions to continue'); return }
    if (password.length < 6) { setMessage('Password must be at least 6 characters'); return }
    if (!selectedPlan) { setMessage('Please select a plan'); return }

    setLoading(true)
    setMessage('')

    // 1. Create the account
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    // 1a. Complimentary accounts skip checkout entirely
    if (FREE_ACCESS_EMAILS.includes(email)) {
      setMessage('Account created. Please check your email to confirm, then log in.')
      setLoading(false)
      return
    }

    // 2. Redirect to Stripe checkout for the chosen plan
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: selectedPlan, email }),
      })
      const checkout = await res.json()
      if (checkout.url) {
        window.location.href = checkout.url
      } else {
        setMessage('Account created, but checkout could not start. Please log in and choose a plan from the pricing page.')
        setLoading(false)
      }
    } catch (e) {
      setMessage('Account created, but checkout could not start. Please log in and choose a plan from the pricing page.')
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', padding: '2rem' }}>
      <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '460px', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#2563eb' }}>V1</span>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#0a1628' }}> Study</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#0a1628', marginTop: '1rem' }}>Start your 7 day free trial</h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Choose a plan, then enter your card. You won&apos;t be charged until day 7 — cancel anytime.</p>
        </div>

        {/* PLAN SELECTION */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px' }}>Choose your plan</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.priceId
              const disabled = plan.comingSoon
              return (
                <button
                  key={plan.priceId}
                  onClick={() => !disabled && setSelectedPlan(plan.priceId)}
                  disabled={disabled}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 14px', borderRadius: '10px', cursor: disabled ? 'not-allowed' : 'pointer',
                    border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                    background: isSelected ? '#eff6ff' : disabled ? '#f8fafc' : 'white',
                    textAlign: 'left', opacity: disabled ? 0.6 : 1,
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#0a1628', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {plan.name}
                      {disabled && <span style={{ fontSize: '10px', fontWeight: '600', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '99px' }}>Coming soon</span>}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{plan.blurb}</div>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: isSelected ? '#2563eb' : '#0a1628', flexShrink: 0 }}>{plan.price}<span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '400' }}>/mo</span></div>
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>Email address</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSignUp()}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: '2px', width: '16px', height: '16px', cursor: 'pointer', flexShrink: 0 }}
          />
          <label htmlFor="terms" style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, cursor: 'pointer' }}>
            I agree to the{' '}
            <a href="/terms" target="_blank" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>Terms and Conditions</a>
          </label>
        </div>

        {message && (
          <div style={{ background: message.startsWith('Account created') ? '#f0fdf4' : '#fff1f2', border: message.startsWith('Account created') ? '1px solid #bbf7d0' : '1px solid #fca5a5', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: message.startsWith('Account created') ? '#15803d' : '#b91c1c', marginBottom: '1rem' }}>
            {message}
          </div>
        )}

        <button
          onClick={handleSignUp}
          disabled={loading || !agreed}
          style={{ width: '100%', background: loading || !agreed ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '13px', fontSize: '15px', fontWeight: '600', cursor: loading || !agreed ? 'not-allowed' : 'pointer', marginBottom: '1rem' }}
        >
          {loading ? 'Starting your trial...' : 'Start free trial'}
        </button>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginBottom: '1rem' }}>
          You&apos;ll enter your card on the next step. No charge for 7 days.
        </p>

        <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>Log in</a>
        </p>
      </div>
    </main>
  )
}

export default function SignUp() {
  return (
    <Suspense fallback={<main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif' }}><p style={{ color: '#64748b' }}>Loading...</p></main>}>
      <SignUpInner />
    </Suspense>
  )
}
