'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!name || !email || !message) return
    setLoading(true)
    try {
      const res = await fetch('/api/support-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        alert('Something went wrong. Please email us directly at support@v1study.com.au')
      }
    } catch (e) {
      alert('Something went wrong. Please email us directly at support@v1study.com.au')
    }
    setLoading(false)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.25rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </a>
        <div style={{ display: 'flex', gap: 'clamp(1.25rem, 4vw, 2rem)', alignItems: 'center' }}>
          <a href="/login" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Login</a>
          <a href="/signup" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Sign up free</a>
        </div>
      </nav>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <h1 style={{ fontSize: 'clamp(28px, 7vw, 36px)', fontWeight: '800', color: '#0a1628', marginBottom: '1rem' }}>Get in touch</h1>
          <p style={{ fontSize: '16px', color: '#64748b' }}>Have a question about V1 Study? We&apos;re here to help.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>✉️</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>Email</div>
            <a href="mailto:support@v1study.com.au" style={{ fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>support@v1study.com.au</a>
          </div>
          <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⏱️</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>Response time</div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>Within 24 hours</div>
          </div>
        </div>

        {!sent ? (
          <div style={{ background: 'white', borderRadius: '16px', padding: 'clamp(1.5rem, 5vw, 2rem)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', marginBottom: '1.5rem' }}>Send a message</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>Your name</label>
              <input type="text" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>Email address</label>
              <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea placeholder="How can we help?" value={message} onChange={e => setMessage(e.target.value)} rows={5} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'system-ui,sans-serif' }} />
            </div>
            <button onClick={handleSubmit} disabled={!name || !email || !message || loading} style={{ width: '100%', background: !name || !email || !message ? '#94a3b8' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: !name || !email || !message ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </div>
        ) : (
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: 'clamp(1.5rem, 5vw, 2rem)', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✉️</div>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>Message sent!</h2>
            <p style={{ fontSize: '14px', color: '#64748b' }}>We&apos;ll get back to you within 24 hours.</p>
          </div>
        )}
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
