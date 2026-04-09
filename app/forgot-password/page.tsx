'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  async function handleReset() {
    if (!email) { setMessage('Please enter your email address'); return }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://v1study.com.au/reset-password',
    })
    if (error) {
      setMessage(error.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'system-ui,sans-serif',padding:'2rem'}}>
      <div style={{background:'white',borderRadius:'16px',padding:'2.5rem',width:'100%',maxWidth:'420px',border:'1px solid #e2e8f0'}}>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
          <div style={{marginBottom:'8px'}}>
            <span style={{fontSize:'24px',fontWeight:'800',color:'#2563eb'}}>V1</span>
            <span style={{fontSize:'24px',fontWeight:'800',color:'#0a1628'}}> Study</span>
          </div>
          <p style={{fontSize:'12px',color:'#64748b',fontStyle:'italic'}}>V1. Rotate. Pass.</p>
          {!sent ? (
            <>
              <h1 style={{fontSize:'22px',fontWeight:'700',color:'#0a1628',marginTop:'1rem'}}>Reset your password</h1>
              <p style={{fontSize:'14px',color:'#64748b',marginTop:'4px'}}>Enter your email and we will send you a reset link</p>
            </>
          ) : (
            <>
              <div style={{fontSize:'48px',marginTop:'1rem'}}>✉️</div>
              <h1 style={{fontSize:'22px',fontWeight:'700',color:'#0a1628',marginTop:'1rem'}}>Check your email</h1>
              <p style={{fontSize:'14px',color:'#64748b',marginTop:'4px'}}>We sent a password reset link to <strong>{email}</strong></p>
            </>
          )}
        </div>
        {!sent && (
          <>
            <div style={{marginBottom:'1.5rem'}}>
              <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Email address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleReset()}
                style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}
              />
            </div>
            {message && (
              <div style={{background:'#fff1f2',border:'1px solid #fca5a5',borderRadius:'8px',padding:'10px 14px',fontSize:'13px',color:'#b91c1c',marginBottom:'1rem'}}>
                {message}
              </div>
            )}
            <button
              onClick={handleReset}
              disabled={loading}
              style={{width:'100%',background:loading?'#94a3b8':'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'12px',fontSize:'15px',fontWeight:'600',cursor:loading?'not-allowed':'pointer',marginBottom:'1rem'}}
            >
              {loading ? 'Sending...' : 'Send reset link'}
            </button>
          </>
        )}
        {sent && (
          <div style={{marginBottom:'1rem'}}>
            <button
              onClick={() => { setSent(false); setEmail(''); setMessage('') }}
              style={{width:'100%',background:'#f8fafc',color:'#0a1628',border:'1px solid #e2e8f0',borderRadius:'8px',padding:'12px',fontSize:'14px',fontWeight:'600',cursor:'pointer',marginBottom:'8px'}}
            >
              Try a different email
            </button>
          </div>
        )}
        <p style={{textAlign:'center',fontSize:'13px',color:'#64748b'}}>
          Remember your password?{' '}
          <a href="/login" style={{color:'#2563eb',fontWeight:'600',textDecoration:'none'}}>Log in</a>
        </p>
      </div>
    </main>
  )
}
