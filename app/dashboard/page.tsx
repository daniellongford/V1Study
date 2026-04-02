'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const subjectsByLicence: Record<string, string[]> = {
  PPL: ['PPL Theory'],
  CPL: ['Human Factors','Aerodynamics','Aircraft General Knowledge','Meteorology','Navigation','Operations, Performance and Planning','Flight Rules & Air Law'],
  ATPL: ['Human Factors','Aerodynamics','Aircraft General Knowledge','Meteorology','Navigation','Flight Planning','Flight Rules & Air Law'],
  IREX: ['Instrument Rating']
}

const subjectIcons: Record<string, string> = {
  'Human Factors': '🧠',
  'Aerodynamics': '✈️',
  'Aircraft General Knowledge': '⚙️',
  'Meteorology': '🌦️',
  'Navigation': '🧭',
  'Operations, Performance and Planning': '📋',
  'Flight Planning': '📋',
  'Flight Rules & Air Law': '⚖️',
  'PPL Theory': '📚',
  'Instrument Rating': '🎯',
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [selectedLicence, setSelectedLicence] = useState('CPL')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = '/login'
      } else {
        setUser(data.user)
        setLoading(false)
      }
    })
  }, [])

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  function goToQuiz(subject: string) {
    window.location.href = '/quiz/' + encodeURIComponent(subject)
  }

  if (loading) return (
    <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'system-ui,sans-serif'}}>
      <p style={{color:'#64748b'}}>Loading...</p>
    </main>
  )

  const currentSubjects = subjectsByLicence[selectedLicence] || []

  return (
    <main style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{background:'white',borderBottom:'1px solid #e2e8f0',padding:'1rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <span style={{fontSize:'20px',fontWeight:'800',color:'#2563eb'}}>V1</span>
          <span style={{fontSize:'20px',fontWeight:'800',color:'#0a1628'}}> Study</span>
          <div style={{fontSize:'11px',color:'#64748b',fontStyle:'italic'}}>V1. Rotate. Pass.</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <span style={{fontSize:'14px',color:'#64748b'}}>{user?.user_metadata?.full_name || user?.email}</span>
          <button onClick={handleSignOut} style={{background:'none',border:'1px solid #e2e8f0',borderRadius:'8px',padding:'6px 14px',fontSize:'13px',cursor:'pointer',color:'#64748b'}}>
            Sign out
          </button>
        </div>
      </nav>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'2rem'}}>
        <div style={{marginBottom:'2rem'}}>
          <h1 style={{fontSize:'26px',fontWeight:'700',color:'#0a1628',marginBottom:'4px'}}>
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(' ')[0]}` : ''}! ✈️
          </h1>
          <p style={{fontSize:'15px',color:'#64748b'}}>Choose a subject and start practising.</p>
        </div>
        <div style={{display:'flex',gap:'10px',marginBottom:'2rem',flexWrap:'wrap'}}>
          {Object.keys(subjectsByLicence).map((licence) => (
            <button
              key={licence}
              onClick={() => setSelectedLicence(licence)}
              style={{padding:'8px 20px',borderRadius:'99px',border:'none',fontWeight:'600',fontSize:'14px',cursor:'pointer',background:selectedLicence===licence?'#2563eb':'#e2e8f0',color:selectedLicence===licence?'white':'#475569'}}
            >
              {licence}
            </button>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:'1rem',marginBottom:'2rem'}}>
          {currentSubjects.map((subject) => (
            <div key={subject} style={{background:'white',borderRadius:'12px',padding:'1.5rem',border:'1px solid #e2e8f0'}}>
              <div style={{fontSize:'24px',marginBottom:'8px'}}>{subjectIcons[subject] || '📖'}</div>
              <div style={{fontSize:'13px',fontWeight:'700',color:'#2563eb',marginBottom:'4px'}}>{selectedLicence}</div>
              <div style={{fontSize:'15px',fontWeight:'600',color:'#0a1628',marginBottom:'12px',lineHeight:1.3}}>{subject}</div>
              <div style={{fontSize:'12px',color:'#94a3b8',marginBottom:'12px',fontFamily:'monospace'}}>10 questions · Free trial</div>
              <button
                onClick={() => goToQuiz(subject)}
                style={{display:'block',width:'100%',background:'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'9px',fontSize:'13px',fontWeight:'600',cursor:'pointer',textAlign:'center'}}
              >
                Start Quiz →
              </button>
            </div>
          ))}
        </div>
        <div style={{background:'#eff6ff',border:'1px solid #bfdbfe',borderRadius:'12px',padding:'1.25rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
          <div>
            <div style={{fontSize:'14px',fontWeight:'700',color:'#1d4ed8',marginBottom:'2px'}}>Free Trial — 7 days remaining</div>
            <div style={{fontSize:'13px',color:'#3b82f6'}}>Upgrade to unlock unlimited AI-generated questions and full progress tracking</div>
          </div>
          <button style={{background:'#2563eb',color:'white',border:'none',borderRadius:'8px',padding:'10px 20px',fontSize:'14px',fontWeight:'600',cursor:'pointer',whiteSpace:'nowrap'}}>
            Upgrade Now →
          </button>
        </div>
      </div>
    </main>
  )
}
