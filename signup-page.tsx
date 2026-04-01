'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSignUp() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email to confirm your account!')
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
          <h1 style={{fontSize:'22px',fontWeight:'700',color:'#0a1628',marginTop:'1rem'}}>Create your account</h1>
          <p style={{fontSize:'14px',color:'#64748b',marginTop:'4px'}}>Start your 7 day free trial today</p>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Full Name</label>
          <input type="text" placeholder="John Smith" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
        </div>
        <div style={{marginBottom:'1rem'}}>
          <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Email</label>
          <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
        </div>
        <div style={{marginBottom:'1.5rem'}}>
          <label style={{fontSize:'13px',fontWeight:'600',color:'#374151',display:'block',marginBottom:'6px'}}>Password</label>
          <input type="password" placeholder="Min 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'100%',padding:'10px 14px',border:'1px solid #e2e8f0',borderRadius:'8px',fontSize:'14px',outline:'none'}}/>
        </div>
        {message && (
          <div style={{background:message.includes('Check')?'#f0fdf4':'#fff1f2',border:`1px solid ${message.includes('Check')?'#16a34a':'#dc2626'}`,borderRadius:'8px',padding:'10px 14px',fontSize:'13px',color:message.includes('Check')?'#15803d':'#b91c1c',marginBottom:'1rem'}}>
            {message}
          </div>
        )}
        <button onClick={handleSignUp} disabled={loading} style={{width:'100%',background:loading?'#94a3b8':'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'12px',fontSize:'15px',fontWeight:'600',cursor:loading?'not-allowed':'pointer',marginBottom:'1rem'}}>
          {loading ? 'Creating account...' : 'Create Free Account'}
        </button>
        <p style={{textAlign:'center',fontSize:'13px',color:'#64748b'}}>
          Already have an account?{' '}
          <a href="/login" style={{color:'#2563eb',fontWeight:'600',textDecoration:'none'}}>Log in</a>
        </p>
        <p style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginTop:'1rem'}}>7 day free trial · No credit card required</p>
      </div>
    </main>
  )
}
