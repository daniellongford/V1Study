'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

interface Score {
  id: string
  subject: string
  licence: string
  score: number
  total: number
  percentage: number
  created_at: string
}

interface SubjectStats {
  subject: string
  licence: string
  attempts: number
  bestScore: number
  lastScore: number
  average: number
}

export default function ProgressPage() {
  const [user, setUser] = useState<any>(null)
  const [scores, setScores] = useState<Score[]>([])
  const [stats, setStats] = useState<SubjectStats[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLicence, setSelectedLicence] = useState('All')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = '/login'
        return
      }
      setUser(data.user)
      loadScores(data.user.id)
    })
  }, [])

  async function loadScores(userId: string) {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (data) {
      setScores(data)
      calculateStats(data)
    }
    setLoading(false)
  }

  function calculateStats(data: Score[]) {
    const subjectMap: Record<string, Score[]> = {}
    data.forEach(s => {
      if (!subjectMap[s.subject]) subjectMap[s.subject] = []
      subjectMap[s.subject].push(s)
    })

    const statsArr: SubjectStats[] = Object.entries(subjectMap).map(([subject, scores]) => ({
      subject,
      licence: scores[0].licence,
      attempts: scores.length,
      bestScore: Math.max(...scores.map(s => s.percentage)),
      lastScore: scores[0].percentage,
      average: Math.round(scores.reduce((a, s) => a + s.percentage, 0) / scores.length)
    }))

    statsArr.sort((a, b) => b.bestScore - a.bestScore)
    setStats(statsArr)
  }

  const licences = ['All', 'PPL', 'CPL', 'ATPL', 'IREX']
  const filteredStats = selectedLicence === 'All' ? stats : stats.filter(s => s.licence === selectedLicence)

  const totalAttempts = scores.length
  const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, s) => a + s.percentage, 0) / scores.length) : 0
  const passRate = scores.length > 0 ? Math.round(scores.filter(s => s.percentage >= 70).length / scores.length * 100) : 0
  const subjectsCovered = stats.length

  function getScoreColor(pct: number) {
    if (pct >= 80) return '#16a34a'
    if (pct >= 70) return '#2563eb'
    if (pct >= 50) return '#f59e0b'
    return '#dc2626'
  }

  function getScoreBg(pct: number) {
    if (pct >= 80) return '#f0fdf4'
    if (pct >= 70) return '#eff6ff'
    if (pct >= 50) return '#fffbeb'
    return '#fff1f2'
  }

  if (loading) return (
    <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'system-ui,sans-serif'}}>
      <p style={{color:'#64748b'}}>Loading your progress...</p>
    </main>
  )

  return (
    <main style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{background:'white',borderBottom:'1px solid #e2e8f0',padding:'1rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <span style={{fontSize:'20px',fontWeight:'800',color:'#2563eb'}}>V1</span>
          <span style={{fontSize:'20px',fontWeight:'800',color:'#0a1628'}}> Study</span>
          <div style={{fontSize:'11px',color:'#64748b',fontStyle:'italic'}}>V1. Rotate. Pass.</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <a href="/dashboard" style={{color:'#64748b',textDecoration:'none',fontSize:'14px'}}>Dashboard</a>
          <a href="/progress" style={{color:'#2563eb',textDecoration:'none',fontSize:'14px',fontWeight:'600'}}>Progress</a>
        </div>
      </nav>

      <div style={{maxWidth:'900px',margin:'0 auto',padding:'2rem'}}>
        <div style={{marginBottom:'2rem'}}>
          <h1 style={{fontSize:'26px',fontWeight:'700',color:'#0a1628',marginBottom:'4px'}}>Your Progress ✈️</h1>
          <p style={{fontSize:'15px',color:'#64748b'}}>Track your performance across all subjects.</p>
        </div>

        {scores.length === 0 ? (
          <div style={{background:'white',borderRadius:'12px',padding:'3rem',border:'1px solid #e2e8f0',textAlign:'center'}}>
            <div style={{fontSize:'48px',marginBottom:'1rem'}}>📊</div>
            <h2 style={{fontSize:'20px',fontWeight:'700',color:'#0a1628',marginBottom:'8px'}}>No quiz attempts yet</h2>
            <p style={{fontSize:'14px',color:'#64748b',marginBottom:'1.5rem'}}>Complete a quiz to start tracking your progress</p>
            <a href="/dashboard" style={{background:'#2563eb',color:'white',borderRadius:'8px',padding:'10px 24px',textDecoration:'none',fontWeight:'600',fontSize:'14px'}}>Start studying →</a>
          </div>
        ) : (
          <>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'2rem'}}>
              {[
                { label: 'Total attempts', value: totalAttempts, color: '#2563eb' },
                { label: 'Average score', value: averageScore + '%', color: getScoreColor(averageScore) },
                { label: 'Pass rate', value: passRate + '%', color: getScoreColor(passRate) },
                { label: 'Subjects covered', value: subjectsCovered, color: '#7c3aed' },
              ].map(stat => (
                <div key={stat.label} style={{background:'white',borderRadius:'12px',padding:'1.25rem',border:'1px solid #e2e8f0',textAlign:'center'}}>
                  <div style={{fontSize:'28px',fontWeight:'700',color:stat.color,fontFamily:'monospace'}}>{stat.value}</div>
                  <div style={{fontSize:'12px',color:'#94a3b8',marginTop:'4px'}}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{display:'flex',gap:'10px',marginBottom:'1.5rem',flexWrap:'wrap'}}>
              {licences.map(l => (
                <button key={l} onClick={() => setSelectedLicence(l)} style={{padding:'6px 16px',borderRadius:'99px',border:'none',fontWeight:'600',fontSize:'13px',cursor:'pointer',background:selectedLicence===l?'#2563eb':'#e2e8f0',color:selectedLicence===l?'white':'#475569'}}>
                  {l}
                </button>
              ))}
            </div>

            {filteredStats.length === 0 ? (
              <div style={{background:'white',borderRadius:'12px',padding:'2rem',border:'1px solid #e2e8f0',textAlign:'center'}}>
                <p style={{color:'#64748b'}}>No attempts for {selectedLicence} yet</p>
              </div>
            ) : (
              <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'2rem'}}>
                {filteredStats.map(stat => (
                  <div key={stat.subject} style={{background:'white',borderRadius:'12px',padding:'1.25rem',border:'1px solid #e2e8f0'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',flexWrap:'wrap',gap:'8px'}}>
                      <div>
                        <div style={{fontSize:'11px',fontWeight:'700',color:'#2563eb',marginBottom:'2px',fontFamily:'monospace'}}>{stat.licence}</div>
                        <div style={{fontSize:'15px',fontWeight:'600',color:'#0a1628'}}>{stat.subject}</div>
                      </div>
                      <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
                        <div style={{background:getScoreBg(stat.bestScore),borderRadius:'8px',padding:'4px 12px',textAlign:'center'}}>
                          <div style={{fontSize:'18px',fontWeight:'700',color:getScoreColor(stat.bestScore),fontFamily:'monospace'}}>{stat.bestScore}%</div>
                          <div style={{fontSize:'10px',color:'#94a3b8'}}>Best</div>
                        </div>
                        <div style={{background:'#f8fafc',borderRadius:'8px',padding:'4px 12px',textAlign:'center'}}>
                          <div style={{fontSize:'18px',fontWeight:'700',color:'#64748b',fontFamily:'monospace'}}>{stat.lastScore}%</div>
                          <div style={{fontSize:'10px',color:'#94a3b8'}}>Last</div>
                        </div>
                        <div style={{background:'#f8fafc',borderRadius:'8px',padding:'4px 12px',textAlign:'center'}}>
                          <div style={{fontSize:'18px',fontWeight:'700',color:'#64748b',fontFamily:'monospace'}}>{stat.attempts}</div>
                          <div style={{fontSize:'10px',color:'#94a3b8'}}>Attempts</div>
                        </div>
                      </div>
                    </div>
                    <div style={{background:'#f1f5f9',borderRadius:'99px',height:'6px',overflow:'hidden'}}>
                      <div style={{height:'100%',background:getScoreColor(stat.bestScore),borderRadius:'99px',width:stat.bestScore+'%',transition:'width 0.6s'}}></div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'4px'}}>
                      <span style={{fontSize:'10px',color:'#94a3b8'}}>0%</span>
                      <span style={{fontSize:'10px',color:'#94a3b8',fontWeight:'600',color:stat.bestScore>=70?'#16a34a':'#dc2626'}}>{stat.bestScore >= 70 ? '✓ Pass' : '✗ Not yet'}</span>
                      <span style={{fontSize:'10px',color:'#94a3b8'}}>100%</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                      <a href={'/quiz/' + encodeURIComponent(stat.subject)} style={{fontSize:'13px',color:'#2563eb',textDecoration:'none',fontWeight:'600'}}>Practice again →</a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{background:'white',borderRadius:'12px',padding:'1.25rem',border:'1px solid #e2e8f0'}}>
              <h3 style={{fontSize:'15px',fontWeight:'600',color:'#0a1628',marginBottom:'1rem'}}>Recent attempts</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {scores.slice(0, 10).map(s => (
                  <div key={s.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f1f5f9'}}>
                    <div>
                      <div style={{fontSize:'13px',fontWeight:'500',color:'#0a1628'}}>{s.subject}</div>
                      <div style={{fontSize:'11px',color:'#94a3b8',fontFamily:'monospace'}}>{new Date(s.created_at).toLocaleDateString('en-AU', {day:'numeric',month:'short',year:'numeric'})}</div>
                    </div>
                    <div style={{background:getScoreBg(s.percentage),borderRadius:'6px',padding:'3px 10px',fontSize:'13px',fontWeight:'700',color:getScoreColor(s.percentage),fontFamily:'monospace'}}>
                      {s.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
