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
          // Ensure all numeric fields are numbers not strings
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

  function color(pct: number) {
    if (pct >= 80) return '#16a34a'
    if (pct >= 70) return '#2563eb'
    if (pct >= 50) return '#f59e0b'
    return '#dc2626'
  }

  if (loading) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif' }}>
      <p style={{ color: '#64748b' }}>Loading your progress...</p>
    </main>
  )

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Study</a>
          <a href="/progress" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Progress</a>
          <a href="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Upgrade</a>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '2rem' }}>
              {[
                { label: 'Total attempts', value: String(totalAttempts), c: '#2563eb' },
                { label: 'Average score', value: avg + '%', c: color(avg) },
                { label: 'Pass rate', value: passRate + '%', c: color(passRate) },
              ].map((s) => (
                <div key={s.label} style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: s.c, fontFamily: 'monospace' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {licences.map((l) => (
                <button key={l} onClick={() => setFilter(l)} style={{ padding: '6px 16px', borderRadius: '99px', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', background: filter === l ? '#2563eb' : '#e2e8f0', color: filter === l ? 'white' : '#475569' }}>
                  {l}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              {subjectStats.map((s) => (
                <div key={s.subject} style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', marginBottom: '2px', fontFamily: 'monospace' }}>{s.licence}</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#0a1628' }}>{s.subject}</div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{s.attempts} attempt{s.attempts !== 1 ? 's' : ''} · avg {s.avg}%</div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ background: s.best >= 70 ? '#f0fdf4' : '#fff1f2', borderRadius: '8px', padding: '4px 12px', textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: color(s.best), fontFamily: 'monospace' }}>{s.best}%</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Best</div>
                      </div>
                      <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '4px 12px', textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#64748b', fontFamily: 'monospace' }}>{s.last}%</div>
                        <div style={{ fontSize: '10px', color: '#94a3b8' }}>Last</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ background: '#f1f5f9', borderRadius: '99px', height: '6px', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ height: '100%', background: color(s.best), borderRadius: '99px', width: Math.min(s.best, 100) + '%' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: s.best >= 70 ? '#16a34a' : '#dc2626', fontWeight: '600' }}>{s.best >= 70 ? '✓ Pass achieved' : '✗ Not yet passing'}</span>
                    <a href={'/quiz/' + encodeURIComponent(s.subject)} style={{ fontSize: '13px', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Practice again →</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#0a1628', marginBottom: '1rem' }}>Recent attempts</h3>
              {scores.slice(0, 10).map((s) => (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#0a1628' }}>{s.subject}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(s.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                  </div>
                  <div style={{ background: Number(s.percentage) >= 70 ? '#f0fdf4' : '#fff1f2', borderRadius: '6px', padding: '3px 10px', fontSize: '13px', fontWeight: '700', color: color(Number(s.percentage)), fontFamily: 'monospace' }}>
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
