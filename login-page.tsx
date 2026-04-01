'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      window.location.href = '/dashboard'
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
          <h1 style={{fontSize:'22px',fontWeight:'700',color:'#0a1628',marginTop:'1rem'}}>Welcome back</h1>
          <p style={{fontSize:'14px',color:'#64748b',marginTop:'4px'}}>Log in to continue studying</p>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Email</label>
          <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
        </div>
        <div style={{marginBottom:'1.5rem'}}>
          <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Password</label>
          <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
        </div>
        {message && (
          <div style={{background:'#fff1f2',border:'1px solid #dc2626',borderRadius:'8px',padding:'10px 14px',fontSize:'13px',color:'#b91c1c',marginBottom:'1rem'}}>
            {message}
          </div>
        )}
        <button onClick={handleLogin} disabled={loading} style={{width:'100%',background:loading?'#94a3b8':'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'12px',fontSize:'15px',fontWeight:'600',cursor:loading?'not-allowed':'pointer',marginBottom:'1rem'}}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <p style={{textAlign:'center',fontSize:'13px',color:'#64748b'}}>
          Don&apos;t have an account?{' '}
          <a href="/signup" style={{color:'#2563eb',fontWeight:'600',textDecoration:'none'}}>Sign up free</a>
        </p>
      </div>
    </main>
  )
}
