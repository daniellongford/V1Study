'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  async function handleSignUp() {
    if (!email || !password) { setMessage('Please enter your email and password'); return }
    if (!agreed) { setMessage('Please agree to the Terms and Conditions to continue'); return }
    if (password.length < 6) { setMessage('Password must be at least 6 characters'); return }
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email to confirm your account.')
    }
    setLoading(false)
  }

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', padding: '2rem' }}>
      <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '420px', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#2563eb' }}>V1</span>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#0a1628' }}> Study</span>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>V1. Rotate. Pass.</p>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#0a1628', marginTop: '1rem' }}>Create your account</h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Every plan includes a 7 day free trial. Full access from day one.</p>
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
          <div style={{ background: message.includes('Check your email') ? '#f0fdf4' : '#fff1f2', border: `1px solid ${message.includes('Check your email') ? '#bbf7d0' : '#fca5a5'}`, borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: message.includes('Check your email') ? '#15803d' : '#b91c1c', marginBottom: '1rem' }}>
            {message}
          </div>
        )}

        <button
          onClick={handleSignUp}
          disabled={loading || !agreed}
          style={{ width: '100%', background: loading || !agreed ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: loading || !agreed ? 'not-allowed' : 'pointer', marginBottom: '1rem' }}
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>Log in</a>
        </p>
      </div>
    </main>
  )
}
