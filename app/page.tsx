'use client'
import { useEffect, useState } from 'react'

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  // phase 0 = blank
  // phase 1 = V1 fades in
  // phase 2 = Study fades in
  // phase 3 = tagline fades in
  // phase 4 = whole thing fades out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1500)
    const t4 = setTimeout(() => setPhase(4), 2800)
    const t5 = setTimeout(onComplete, 3600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#060e1c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: phase === 4 ? 0 : 1,
      transition: phase === 4 ? 'opacity 0.8s ease' : 'none',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0px',
        lineHeight: 1,
      }}>
        {/* V1 */}
        <span style={{
          fontSize: 'clamp(80px, 18vw, 160px)',
          fontWeight: '800',
          color: '#2563eb',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-4px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0px)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          lineHeight: 1,
        }}>
          V1
        </span>

        {/* Study */}
        <span style={{
          fontSize: 'clamp(80px, 18vw, 160px)',
          fontWeight: '800',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-4px',
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0px)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          lineHeight: 1,
          marginLeft: '12px',
        }}>
          Study
        </span>
      </div>

      {/* Tagline */}
      <div style={{
        marginTop: '20px',
        fontSize: 'clamp(13px, 2vw, 18px)',
        fontWeight: '400',
        color: 'rgba(255,255,255,0.35)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        opacity: phase >= 3 ? 1 : 0,
        transform: phase >= 3 ? 'translateY(0px)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}>
        V1. Rotate. Pass.
      </div>
    </div>
  )
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  function handleIntroComplete() {
    setShowIntro(false)
    setContentVisible(true)
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <main style={{
        minHeight: '100vh', background: '#ffffff', fontFamily: 'system-ui,sans-serif',
        opacity: contentVisible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}>
        <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff' }}>
          <div>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#2563eb' }}>V1</span>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#0a1628' }}> Study</span>
            <div style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>V1. Rotate. Pass.</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ color: '#64748b', textDecoration: 'none' }}>Features</a>
            <a href="#pricing" style={{ color: '#64748b', textDecoration: 'none' }}>Pricing</a>
            <a href="/login" style={{ color: '#64748b', textDecoration: 'none' }}>Login</a>
            <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px 20px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Start Free Trial</a>
          </div>
        </nav>

        <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)' }}>
          <p style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#2563eb', marginBottom: '1rem', fontWeight: '600' }}>AUSTRALIA&apos;S PILOT EXAM PREP PLATFORM</p>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#0a1628', marginBottom: '1rem', lineHeight: 1.1 }}>
            Your Journey to the<br />
            <span style={{ color: '#2563eb' }}>Flight Deck</span> Starts Here
          </h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Australia&apos;s most advanced CPL, ATPL, PPL and IREX exam preparation platform. Expert-reviewed questions aligned to real CASA references. Unlimited practice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>Start Free Trial</a>
            <a href="#pricing" style={{ background: 'transparent', color: '#0a1628', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>See Pricing</a>
          </div>

        </section>

        <section id="features" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', color: '#0a1628', marginBottom: '0.5rem' }}>Every Australian Pilot Exam Covered</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '16px' }}>From your first PPL theory to your ATPL we have every exam covered</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {[
              { title: 'PPL', full: 'Private Pilot Licence', exams: '1 combined exam', color: '#10b981', desc: 'The foundation of flight. Master the core theory required to earn your Private Pilot Licence.' },
              { title: 'CPL', full: 'Commercial Pilot Licence', exams: '7 exams', color: '#2563eb', desc: 'All 7 CASA subjects. Built for pilots serious about going professional.' },
              { title: 'ATPL', full: 'Airline Transport Pilot', exams: '7 exams', color: '#7c3aed', desc: 'The highest standard in Australian pilot licensing. All 7 subjects for pilots bound for the airlines.' },
              { title: 'IREX', full: 'Instrument Rating Exam', exams: '1 exam', color: '#f59e0b', desc: 'Cleared for the clouds. Everything you need to pass the CASA Instrument Rating Exam.' },
            ].map(function (item) {
              return (
                <div key={item.title} style={{ background: '#f8fafc', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: item.color, marginBottom: '4px', letterSpacing: '0.1em' }}>{item.title}</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#0a1628', marginBottom: '4px' }}>{item.full}</div>
                  <div style={{ fontSize: '12px', color: item.color, fontWeight: '600', marginBottom: '8px' }}>{item.exams}</div>
                  <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="pricing" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', color: '#0a1628', marginBottom: '0.5rem' }}>Simple Pricing</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '0.5rem' }}>Every plan includes a 7 day free trial. Full access from day one.</p>

            {/* Top row - 3 boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {[
                { plan: 'PPL Pack', price: '$9.99', period: 'per month', priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz', features: ['PPL exam prep', 'Unlimited practice questions', 'Full explanations', 'CASA references'], color: '#10b981', popular: false },
                { plan: 'CPL Pack', price: '$19.99', period: 'per month', priceId: 'price_1TIP6XCbt27bkqBv9CypW42J', features: ['PPL + all 7 CPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis'], color: '#2563eb', popular: true },
                { plan: 'ATPL Pack', price: '$29.99', period: 'per month', priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn', features: ['CPL + all 7 ATPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis'], color: '#7c3aed', popular: false },
              ].map(function (item) {
                return (
                  <div key={item.plan} style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: item.popular ? '2px solid #2563eb' : '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    {item.popular && (
                      <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '99px', whiteSpace: 'nowrap' }}>
                        MOST POPULAR
                      </div>
                    )}
                    <div style={{ fontSize: '13px', fontWeight: '700', color: item.color, marginBottom: '4px' }}>{item.plan}</div>
                    <div style={{ fontSize: '30px', fontWeight: '800', color: '#0a1628', lineHeight: 1 }}>{item.price}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '1rem' }}>{item.period}</div>
                    <div style={{ flex: 1 }}>
                      {item.features.map(function (f) {
                        return (
                          <div key={f} style={{ fontSize: '12px', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: '#16a34a', fontWeight: '700', flexShrink: 0 }}>✓</span>
                            <span>{f}</span>
                          </div>
                        )
                      })}
                    </div>
                    <a href={`/signup?plan=${item.priceId}`} style={{ display: 'block', width: '100%', marginTop: '1.25rem', background: item.popular ? '#2563eb' : 'transparent', color: item.popular ? 'white' : item.color, border: `2px solid ${item.popular ? '#2563eb' : item.color}`, borderRadius: '8px', padding: '10px', fontWeight: '600', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box', fontSize: '13px' }}>
                      Start free trial
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Bottom row - 2 boxes centred */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              {[
                { plan: 'IREX Standalone', price: '$14.99', period: 'per month', priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb', features: ['IREX exam only', 'Unlimited practice questions', 'Full explanations', 'CASA references'], color: '#f59e0b', popular: false },
                { plan: 'Full Access', price: '$34.99', period: 'per month', priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3', features: ['Every exam included', 'PPL CPL ATPL IREX', 'Unlimited practice questions', 'Priority support'], color: '#0a1628', popular: false },
              ].map(function (item) {
                return (
                  <div key={item.plan} style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: item.color, marginBottom: '4px' }}>{item.plan}</div>
                    <div style={{ fontSize: '30px', fontWeight: '800', color: '#0a1628', lineHeight: 1 }}>{item.price}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '1rem' }}>{item.period}</div>
                    <div style={{ flex: 1 }}>
                      {item.features.map(function (f) {
                        return (
                          <div key={f} style={{ fontSize: '12px', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: '#16a34a', fontWeight: '700', flexShrink: 0 }}>✓</span>
                            <span>{f}</span>
                          </div>
                        )
                      })}
                    </div>
                    <a href={`/signup?plan=${item.priceId}`} style={{ display: 'block', width: '100%', marginTop: '1.25rem', background: 'transparent', color: item.color, border: `2px solid ${item.color}`, borderRadius: '8px', padding: '10px', fontWeight: '600', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box', fontSize: '13px' }}>
                      Start free trial
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', background: 'white', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0a1628', marginBottom: '1rem' }}>Get in touch</h2>
            <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '2rem' }}>Questions about V1 Study or need help choosing a plan? We're here to help.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '12px 32px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>Get in touch</a>
            </div>
          </div>
        </section>

        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '800', color: '#2563eb' }}>V1</span>
            <span style={{ fontWeight: '800', color: '#0a1628' }}> Study</span>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>© 2026 V1 Study. ABN 67 533 972 478. Built for Australian pilots.</p>
        </footer>
      </main>
    </>
  )
}
