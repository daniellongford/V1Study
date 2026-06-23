'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function ProgressPage() {
  const [scores, setScores] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { window.location.href = '/login'; return }
      supabase.from('scores').select('*').eq('user_id', data.user.id).order('created_at', { ascending: false }).then(({ data: rows }) => {
        if (rows) {
          const cleaned = rows.map(r => ({
            ...r,
            score: Number(r.score),
            total: Number(r.total),
            percentage: Number(r.percentage),
          }))
          setScores(cleaned)
        }
        setLoading(false)
      })
    })
  }, [])

  const licences = ['All', 'PPL', 'CPL', 'ATPL', 'IREX']
  const filtered = filter === 'All' ? scores : scores.filter((s) => s.licence === filter)

  const subjectMap: Record<string, any[]> = {}
  filtered.forEach((s) => {
    if (!subjectMap[s.subject]) subjectMap[s.subject] = []
    subjectMap[s.subject].push(s)
  })

  const subjectStats = Object.entries(subjectMap).map(([subject, rows]) => ({
    subject,
    licence: rows[0].licence,
    attempts: rows.length,
    best: Math.max(...rows.map((r) => Number(r.percentage))),
    last: Number(rows[0].percentage),
    avg: Math.round(rows.reduce((a, r) => a + Number(r.percentage), 0) / rows.length),
  })).sort((a, b) => b.best - a.best)

  const totalAttempts = scores.length
  const avg = scores.length > 0 ? Math.round(scores.reduce((a, s) => a + Number(s.percentage), 0) / scores.length) : 0
  const passRate = scores.length > 0 ? Math.round(scores.filter((s) => Number(s.percentage) >= 70).length / scores.length * 100) : 0
  const filteredAvg = filtered.length > 0 ? Math.round(filtered.reduce((a, s) => a + Number(s.percentage), 0) / filtered.length) : 0

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif' }}>
      <p style={{ color: '#64748b' }}>Loading your progress...</p>
    </main>
  )

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.25rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 1.5rem)', alignItems: 'center' }}>
          <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Study</a>
          <a href="/progress" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Progress</a>
          <a href="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Upgrade</a>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>Your Progress</h1>
        <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '2rem' }}>Track your performance across all subjects.</p>

        {scores.length === 0 ? (
          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>No attempts yet</h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.5rem' }}>Complete a quiz to start tracking your progress</p>
            <a href="/dashboard" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '10px 24px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Start studying</a>
          </div>
        ) : (
          <>
            {/* STAT CARDS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '2rem' }}>
              {[
                { label: 'Total attempts', value: String(totalAttempts) },
                { label: 'Average score', value: avg + '%' },
                { label: 'Pass rate', value: passRate + '%' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'white', borderRadius: '12px', padding: 'clamp(0.75rem, 3vw, 1.25rem) 0.5rem', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 'clamp(22px, 6vw, 28px)', fontWeight: '700', color: '#0a1628', fontFamily: 'monospace' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* FILTER TABS */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {licences.map((l) => (
                <button key={l} onClick={() => setFilter(l)} style={{ padding: '6px 16px', borderRadius: '99px', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', background: filter === l ? '#0a1628' : '#e2e8f0', color: filter === l ? 'white' : '#475569' }}>
                  {l}
                </button>
              ))}
            </div>

            {/* SUBJECT CARDS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              {subjectStats.map((s) => (
                <div key={s.subject} style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', marginBottom: '2px', fontFamily: 'monospace', letterSpacing: '0.08em' }}>{s.licence}</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#0a1628' }}>
                        {s.best >= 70 ? '✓ ' : '○ '}{s.subject}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{s.attempts} attempt{s.attempts !== 1 ? 's' : ''} · avg {s.avg}%</div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '4px 12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#0a1628', fontFamily: 'monospace' }}>{s.best}%</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Best</div>
                      </div>
                      <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '4px 12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#64748b', fontFamily: 'monospace' }}>{s.last}%</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Last</div>
                      </div>
                    </div>
                  </div>
                  {/* Progress bar — always blue, pass mark line at 70% */}
                  <div style={{ position: 'relative', background: '#f1f5f9', borderRadius: '99px', height: '6px', overflow: 'visible', marginBottom: '8px' }}>
                    <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: Math.min(s.avg, 100) + '%', transition: 'width 0.4s' }} />
                    {/* Pass mark line at 70% */}
                    <div style={{ position: 'absolute', top: '-3px', left: '70%', width: '2px', height: '12px', background: '#cbd5e1', borderRadius: '1px' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{s.best >= 70 ? 'Pass mark achieved' : 'Pass mark not yet reached'}</span>
                    <a href={'/quiz/' + encodeURIComponent(s.subject)} style={{ fontSize: '13px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Practice again →</a>
                  </div>
                </div>
              ))}
            </div>

            {/* OVERALL AVERAGE BAR */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem 1.5rem', border: '1px solid #e2e8f0', marginBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#0a1628' }}>
                    {filter === 'All' ? 'Overall average' : `${filter} average`}
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Across all {filtered.length} attempt{filtered.length !== 1 ? 's' : ''}</div>
                </div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#0a1628', fontFamily: 'monospace' }}>{filteredAvg}%</div>
              </div>
              <div style={{ position: 'relative', background: '#f1f5f9', borderRadius: '99px', height: '8px', overflow: 'visible' }}>
                <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: Math.min(filteredAvg, 100) + '%', transition: 'width 0.6s ease' }} />
                <div style={{ position: 'absolute', top: '-4px', left: '70%', width: '2px', height: '16px', background: '#94a3b8', borderRadius: '1px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>0%</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Pass mark 70%</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>100%</span>
              </div>
            </div>

            {/* RECENT ATTEMPTS */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#0a1628', marginBottom: '1rem' }}>Recent attempts</h3>
              {scores.slice(0, 10).map((s) => (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#0a1628' }}>{s.subject}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(s.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                  </div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '3px 10px', fontSize: '13px', fontWeight: '700', color: '#0a1628', fontFamily: 'monospace' }}>
                    {Number(s.percentage)}%
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
