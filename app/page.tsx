'use client'
import { useEffect, useState } from 'react'

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false)
  const [showText, setShowText] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Small delay so browser paints first
    const t0 = setTimeout(() => setStarted(true), 200)
    // Text starts appearing about halfway through the flight
    const t1 = setTimeout(() => setShowText(true), 1400)
    // Start fading out
    const t2 = setTimeout(() => setFadeOut(true), 3200)
    // Tell parent we are done
    const t3 = setTimeout(onComplete, 4000)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  // 747 SVG — accurate side silhouette
  const Boeing747 = () => (
    <svg
      viewBox="0 0 520 120"
      width="520"
      height="120"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      {/* Main fuselage */}
      <ellipse cx="260" cy="58" rx="200" ry="18" />
      {/* Nose — 747 distinctive hump */}
      <path d="M460 58 Q490 58 510 54 Q520 51 515 48 Q510 44 500 46 Q490 48 475 52 Q468 54 462 56 Z" />
      {/* Upper deck hump — 747 signature */}
      <path d="M340 40 Q360 28 400 26 Q430 25 450 30 Q460 34 458 40 Q440 36 410 36 Q375 36 355 42 Z" />
      {/* Tail */}
      <path d="M60 58 Q40 58 30 62 Q20 65 25 68 Q30 70 40 67 Q50 64 62 61 Z" />
      {/* Vertical tail fin */}
      <path d="M85 58 Q80 42 90 22 Q96 12 104 16 Q108 20 104 32 Q100 44 96 56 Z" />
      {/* Horizontal stabiliser left */}
      <path d="M75 62 Q55 68 40 72 Q32 74 34 78 Q36 80 46 78 Q62 74 80 68 Z" />
      {/* Horizontal stabiliser right — smaller on far side */}
      <path d="M75 54 Q60 48 48 46 Q40 44 41 40 Q43 38 52 40 Q66 44 80 50 Z" />
      {/* Main wing — upper surface */}
      <path d="M220 52 Q260 20 310 6 Q330 1 338 6 Q342 10 334 14 Q316 18 278 32 Q248 44 232 56 Z" />
      {/* Main wing — lower surface */}
      <path d="M220 64 Q260 96 310 110 Q328 116 336 110 Q340 106 333 102 Q315 96 280 84 Q250 72 234 62 Z" />
      {/* Engine 1 — outboard left (far side, smaller) */}
      <ellipse cx="295" cy="22" rx="22" ry="6" />
      <path d="M273 22 Q295 16 317 22 Q295 26 273 22 Z" opacity="0.6" />
      {/* Engine 2 — inboard left */}
      <ellipse cx="256" cy="36" rx="24" ry="7" />
      <path d="M232 36 Q256 30 280 36 Q256 40 232 36 Z" opacity="0.6" />
      {/* Engine 3 — inboard right */}
      <ellipse cx="256" cy="80" rx="24" ry="7" />
      <path d="M232 80 Q256 86 280 80 Q256 76 232 80 Z" opacity="0.6" />
      {/* Engine 4 — outboard right (far side, smaller) */}
      <ellipse cx="295" cy="94" rx="22" ry="6" />
      <path d="M273 94 Q295 100 317 94 Q295 90 273 94 Z" opacity="0.6" />
      {/* Windows row — dots */}
      <rect x="160" y="50" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="172" y="49" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="184" y="48" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="196" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="208" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="220" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="232" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="244" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="256" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="268" y="47" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="280" y="48" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="292" y="48" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="304" y="49" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="316" y="50" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="328" y="51" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="340" y="52" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="352" y="53" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="364" y="54" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="376" y="55" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="388" y="55" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      <rect x="400" y="55" width="4" height="4" rx="1" fill="#0a1628" opacity="0.6" />
      {/* Upper deck windows */}
      <rect x="360" y="34" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="372" y="33" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="384" y="32" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="396" y="31" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="408" y="31" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="420" y="32" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
      <rect x="432" y="33" width="4" height="3" rx="1" fill="#0a1628" opacity="0.5" />
    </svg>
  )

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#060e1c',
      opacity: fadeOut ? 0 : 1,
      transition: fadeOut ? 'opacity 0.8s ease' : 'none',
      overflow: 'hidden',
    }}>
      {/* Subtle runway glow at centre */}
      <div style={{
        position: 'absolute',
        bottom: 'calc(50% - 1px)',
        left: 0, right: 0,
        height: '1px',
        background: 'rgba(255,255,255,0.06)',
      }} />

      {/* Aircraft + text container — sits in vertical centre */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        transform: started
          ? 'translateX(110vw) translateY(calc(-50% - 60px)) rotate(-4deg)'
          : 'translateX(-580px) translateY(-50%) rotate(0deg)',
        transition: started
          ? 'transform 3.0s cubic-bezier(0.25, 0.1, 0.5, 1)'
          : 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0px',
        willChange: 'transform',
      }}>
        {/* V1 Study text — sits directly behind the aircraft, reveals as plane moves right */}
        <div style={{
          opacity: showText ? 1 : 0,
          transition: 'opacity 0.8s ease',
          marginRight: '-20px',
          zIndex: 1,
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{
              fontSize: '72px',
              fontWeight: '800',
              color: '#2563eb',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}>V1</span>
            <span style={{
              fontSize: '72px',
              fontWeight: '800',
              color: 'white',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}>Study</span>
          </div>
          <div style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
            fontStyle: 'italic',
            marginTop: '6px',
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            V1. Rotate. Pass.
          </div>
        </div>

        {/* 747 silhouette */}
        <div style={{ zIndex: 2, flexShrink: 0 }}>
          <Boeing747 />
        </div>
      </div>

      {/* Engine heat shimmer trails */}
      {started && (
        <div style={{
          position: 'absolute',
          top: 'calc(50% - 2px)',
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.15) 40%, rgba(37,99,235,0.05) 70%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      )}
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
            Australia&apos;s most advanced CPL, ATPL, PPL and IREX exam preparation platform. AI-powered questions with real CASA references. Unlimited practice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>Start Free Trial</a>
            <a href="#pricing" style={{ background: 'transparent', color: '#0a1628', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>See Pricing</a>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>7 day free trial · Card required · Cancel anytime before day 7</p>
        </section>

        <section id="features" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', color: '#0a1628', marginBottom: '0.5rem' }}>Every Australian Pilot Exam Covered</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '16px' }}>From your first PPL theory to your ATPL we have every exam covered</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {[
              { title: 'PPL', full: 'Private Pilot Licence', exams: '1 combined exam', color: '#10b981', desc: 'Perfect for student pilots taking their first theory exam' },
              { title: 'CPL', full: 'Commercial Pilot Licence', exams: '7 exams', color: '#2563eb', desc: 'All 7 subjects including Operations, Performance and Planning' },
              { title: 'ATPL', full: 'Airline Transport Pilot', exams: '7 exams', color: '#7c3aed', desc: 'Advanced theory for pilots heading to the flight deck' },
              { title: 'IREX', full: 'Instrument Rating Exam', exams: '1 exam', color: '#f59e0b', desc: 'IFR procedures and instrument flight rules' },
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
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '0.5rem' }}>Start with a 7 day free trial. Cancel anytime before day 7 and pay nothing.</p>
            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px', marginBottom: '3rem' }}>Card details required at signup — your card will be charged automatically after your trial ends.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
              {[
                { plan: 'PPL Pack', price: '$9.99', period: 'per month', priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz', features: ['PPL exam prep', 'Unlimited AI questions', 'Full explanations', 'CASA references'], color: '#10b981', popular: false },
                { plan: 'CPL Pack', price: '$19.99', period: 'per month', priceId: 'price_1TIP6XCbt27bkqBv9CypW42J', features: ['PPL + all 7 CPL exams', 'Unlimited AI questions', 'Progress tracking', 'Weak area analysis'], color: '#2563eb', popular: true },
                { plan: 'ATPL Pack', price: '$29.99', period: 'per month', priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn', features: ['CPL + all 7 ATPL exams', 'Unlimited AI questions', 'Progress tracking', 'Weak area analysis'], color: '#7c3aed', popular: false },
                { plan: 'IREX Standalone', price: '$14.99', period: 'per month', priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb', features: ['IREX exam only', 'Unlimited AI questions', 'Full explanations', 'CASA references'], color: '#f59e0b', popular: false },
                { plan: 'Full Access', price: '$34.99', period: 'per month', priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3', features: ['Every exam included', 'PPL CPL ATPL IREX', 'Unlimited AI questions', 'Priority support'], color: '#0a1628', popular: false },
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
