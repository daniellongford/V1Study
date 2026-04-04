'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [done, setDone] = useState(false)

  async function handleUpdate() {
    if (!password || password.length < 6) { setMessage('Password must be at least 6 characters'); return }
    if (password !== confirm) { setMessage('Passwords do not match'); return }
    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setMessage(error.message)
    } else {
      setDone(true)
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
          <h1 style={{fontSize:'22px',fontWeight:'700',color:'#0a1628',marginTop:'1rem'}}>
            {done ? 'Password updated!' : 'Set new password'}
          </h1>
        </div>
        {!done ? (
          <>
            <div style={{marginBottom:'1rem'}}>
              <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>New password</label>
              <input type="password" placeholder="Min 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
            </div>
            <div style={{marginBottom:'1.5rem'}}>
              <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Confirm password</label>
              <input type="password" placeholder="Repeat your password" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
            </div>
            {message && (
              <div style={{background:'#fff1f2',border:'1px solid #fca5a5',borderRadius:'8px',padding:'10px 14px',fontSize:'13px',color:'#b91c1c',marginBottom:'1rem'}}>
                {message}
              </div>
            )}
            <button onClick={handleUpdate} disabled={loading} style={{width:'100%',background:loading?'#94a3b8':'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'12px',fontSize:'15px',fontWeight:'600',cursor:loading?'not-allowed':'pointer'}}>
              {loading ? 'Updating...' : 'Update password'}
            </button>
          </>
        ) : (
          <>
            <p style={{textAlign:'center',fontSize:'14px',color:'#64748b',marginBottom:'1.5rem'}}>Your password has been updated. You can now log in with your new password.</p>
            <a href="/login" style={{display:'block',width:'100%',background:'#2563eb',color:'white',borderRadius:'8px',padding:'12px',fontSize:'15px',fontWeight:'600',textDecoration:'none',textAlign:'center',boxSizing:'border-box'}}>
              Go to login
            </a>
          </>
        )}
      </div>
    </main>
  )
}
