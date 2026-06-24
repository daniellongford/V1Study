'use client'
import { useEffect, useState } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1500)
    const t4 = setTimeout(() => setPhase(4), 2800)
    const t5 = setTimeout(onComplete, 3600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [onComplete])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#060e1c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: phase === 4 ? 0 : 1, transition: phase === 4 ? 'opacity 0.8s ease' : 'none', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', lineHeight: 1 }}>
        <span style={{ fontSize: 'clamp(80px, 18vw, 160px)', fontWeight: '800', color: '#2563eb', letterSpacing: '-4px', opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'translateY(0px)' : 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', lineHeight: 1 }}>V1</span>
        <span style={{ fontSize: 'clamp(80px, 18vw, 160px)', fontWeight: '800', color: 'white', letterSpacing: '-4px', opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? 'translateY(0px)' : 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', lineHeight: 1, marginLeft: '12px' }}>Study</span>
      </div>
      <div style={{ marginTop: '20px', fontSize: 'clamp(13px, 2vw, 18px)', fontWeight: '500', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0px)' : 'translateY(10px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
        V1. Rotate. Pass.
      </div>
    </div>
  )
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const isMobile = useIsMobile()

  function handleIntroComplete() {
    setShowIntro(false)
    setContentVisible(true)
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <main style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif', opacity: contentVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>

        {/* HERO */}
        <section style={{ position: 'relative', height: '100vh', minHeight: '650px', display: 'flex', flexDirection: 'column', overflow: 'hidden', margin: 0, padding: 0 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/IMG_4488.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,20,40,0.15) 0%, rgba(8,20,40,0.30) 55%, rgba(8,20,40,0.60) 100%)' }} />
          <nav style={{ position: 'relative', zIndex: 10, padding: isMobile ? '1rem 1.25rem' : '1.25rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: isMobile ? '20px' : '22px', fontWeight: '800', color: 'white' }}>V1</span>
              <span style={{ fontSize: isMobile ? '20px' : '22px', fontWeight: '800', color: 'rgba(255,255,255,0.85)' }}> Study</span>
              {!isMobile && <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: '1px' }}>V1. Rotate. Pass.</div>}
            </div>
            <div style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem', alignItems: 'center' }}>
              {!isMobile && <a href="#exams" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>Exams</a>}
              {!isMobile && <a href="#pricing" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>Pricing</a>}
              <a href="/login" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '14px' }}>Login</a>
              <a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: isMobile ? '600' : '400' }}>Sign up</a>
            </div>
          </nav>
          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: isMobile ? '0 1.5rem' : '0 2.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <p style={{ fontSize: '14px', letterSpacing: '0.32em', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', fontWeight: '500', textTransform: 'uppercase', lineHeight: 1.6 }}>Australia&apos;s Pilot Exam Prep Platform</p>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '7px', padding: '14px 36px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>Start Free Trial</a>
                <a href="#pricing" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '7px', padding: '14px 36px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>See Pricing</a>
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                <span style={{ display: 'inline-flex', width: '15px', height: '15px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.5)', alignItems: 'center', justifyContent: 'center', fontSize: '9px', lineHeight: 1, flexShrink: 0 }}>✓</span>
                Aligned to the current CASA Part 61 MOS
              </div>
            </div>
          </div>
        </section>

        {/* EXAMS */}
        <section id="exams" style={{ padding: isMobile ? '3rem 1.25rem' : '5rem 2.5rem', background: '#ffffff' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3.5rem' }}>
              <h2 style={{ fontSize: isMobile ? '26px' : '36px', fontWeight: '800', color: '#0a1628', letterSpacing: '-0.5px', textAlign: 'center' }}>Every Australian Pilot Exam, Covered.</h2>
              <p style={{ fontSize: '16px', color: '#64748b', marginTop: '0.75rem', textAlign: 'center' }}>From your first PPL theory exam to your ATPL.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: '1.25rem' }}>
              {[
                { title: 'PPL', full: 'Private Pilot', sub: 'Licence', exams: '1 combined exam', desc: 'Master the core theory required for your Private Pilot Licence — the essential first step for every aspiring pilot in Australia.' },
                { title: 'CPL', full: 'Commercial Pilot', sub: 'Licence', exams: '7 exams', desc: 'All 7 CASA subjects covered in full. Built for pilots who are serious about taking their flying career to a professional level.' },
                { title: 'ATPL', full: 'Airline Transport Pilots', sub: 'Licence', exams: '7 exams', desc: 'The highest standard in Australian pilot licensing. All 7 subjects for pilots on the path to the airline flight deck.' },
                { title: 'IREX', full: 'Instrument Rating', sub: 'Exam', exams: '1 exam', desc: 'Everything you need to pass the CASA Instrument Rating Exam and operate confidently in instrument meteorological conditions.' },
              ].map(function (item) {
                return (
                  <div key={item.title} style={{ background: '#f8fafc', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '10px', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.18em', fontFamily: 'monospace', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{item.title}</div>
                    <div style={{ marginBottom: '4px', lineHeight: 1.3, minHeight: '52px' }}>
                      <div style={{ fontSize: '17px', fontWeight: '700', color: '#0a1628' }}>{item.full}</div>
                      <div style={{ fontSize: '17px', fontWeight: '700', color: '#0a1628' }}>{(item as any).sub}</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: '600', marginBottom: '0.75rem' }}>{item.exams}</div>
                    <div style={{ width: '24px', height: '2px', background: '#2563eb', borderRadius: '99px', marginBottom: '0.75rem' }} />
                    <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={{ padding: isMobile ? '3rem 1.25rem' : '5rem 2.5rem', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3.5rem' }}>
              <h2 style={{ fontSize: isMobile ? '26px' : '36px', fontWeight: '800', color: '#0a1628', letterSpacing: '-0.5px' }}>Simple, Transparent Pricing.</h2>
              <p style={{ fontSize: '16px', color: '#64748b', marginTop: '0.75rem' }}>Every plan includes a 7 day free trial. Full access from day one.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {[
                { plan: 'PPL Pack', price: '$9.99', priceId: 'price_1TIP96Cbt27bkqBv9ULJdyTz', features: ['PPL Theory exam', 'Unlimited practice questions', 'Full explanations', 'CASA references'], popular: false },
                { plan: 'CPL Pack', price: '$19.99', priceId: 'price_1TIP6XCbt27bkqBv9CypW42J', features: ['PPL + all 7 CPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis'], popular: true },
                { plan: 'ATPL Pack', price: '$29.99', priceId: 'price_1TIPAiCbt27bkqBvEItgo0gn', features: ['CPL + all 7 ATPL exams', 'Unlimited practice questions', 'Progress tracking', 'Weak area analysis'], popular: false, comingSoon: true },
              ].map(function (item) {
                return (
                  <div key={item.plan} style={{ background: 'white', borderRadius: '12px', padding: '2rem', border: item.popular ? '2px solid #2563eb' : '1px solid #e2e8f0', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    {item.popular && (
                      <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'white', color: '#2563eb', border: '2px solid #2563eb', fontSize: '10px', fontWeight: '700', padding: '3px 14px', borderRadius: '99px', whiteSpace: 'nowrap', letterSpacing: '0.08em' }}>MOST POPULAR</div>
                    )}
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.plan}</div>
                    <div style={{ fontSize: '38px', fontWeight: '800', color: '#0a1628', lineHeight: 1, marginBottom: '0.25rem' }}>{item.price}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '1.5rem' }}>per month</div>
                    <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                      {item.features.map(function (f) {
                        return (
                          <div key={f} style={{ fontSize: '13px', color: '#475569', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                            <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '13px', flexShrink: 0 }}>✓</span>
                            {f}
                          </div>
                        )
                      })}
                    </div>
                    {(item as any).comingSoon ? (
                      <div style={{ display: 'block', background: '#f1f5f9', color: '#94a3b8', border: '2px solid #f1f5f9', borderRadius: '7px', padding: '12px', fontWeight: '700', textAlign: 'center', fontSize: '14px' }}>
                        Coming soon
                      </div>
                    ) : (
                      <a href={`/signup?plan=${item.priceId}`} style={{ display: 'block', background: item.popular ? '#2563eb' : 'transparent', color: item.popular ? 'white' : '#0a1628', border: item.popular ? '2px solid #2563eb' : '2px solid #e2e8f0', borderRadius: '7px', padding: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center', fontSize: '14px' }}>
                        Start free trial
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: '1.25rem', maxWidth: '706px', margin: '0 auto' }}>
              {[
                { plan: 'IREX Standalone', price: '$14.99', priceId: 'price_1TIPDdCbt27bkqBvZzwkYthb', features: ['IREX exam only', 'Unlimited practice questions', 'Full explanations', 'CASA references'] },
                { plan: 'Full Access', price: '$34.99', priceId: 'price_1TIPBvCbt27bkqBvv4fUShu3', features: ['Every exam included', 'PPL + CPL + ATPL + IREX', 'Unlimited practice questions', 'Priority support'] },
              ].map(function (item) {
                return (
                  <div key={item.plan} style={{ background: 'white', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.plan}</div>
                    <div style={{ fontSize: '38px', fontWeight: '800', color: '#0a1628', lineHeight: 1, marginBottom: '0.25rem' }}>{item.price}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '1.5rem' }}>per month</div>
                    <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                      {item.features.map(function (f) {
                        return (
                          <div key={f} style={{ fontSize: '13px', color: '#475569', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                            <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '13px', flexShrink: 0 }}>✓</span>
                            {f}
                          </div>
                        )
                      })}
                    </div>
                    <a href={`/signup?plan=${item.priceId}`} style={{ display: 'block', background: 'transparent', color: '#0a1628', border: '2px solid #e2e8f0', borderRadius: '7px', padding: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center', fontSize: '14px' }}>
                      Start free trial
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0', padding: '0', width: '100%' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/contact-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 45%', filter: 'brightness(0.45)' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '4rem 1.5rem' : '6rem 2.5rem', textAlign: 'center', width: '100%' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.65)', marginBottom: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Get in Touch</p>
            <h2 style={{ fontSize: isMobile ? '26px' : '36px', fontWeight: '800', color: 'white', letterSpacing: '-0.5px', marginBottom: '1rem' }}>Questions? We&apos;re here to help.</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Reach out any time at <a href="mailto:support@v1study.com.au" style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}>support@v1study.com.au</a></p>
            <a href="/contact" style={{ background: 'white', color: '#0a1628', borderRadius: '7px', padding: '13px 36px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-block' }}>Contact us</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: isMobile ? '1.5rem 1.25rem' : '1.75rem 2.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'white', textAlign: isMobile ? 'center' : 'left' }}>
          <div>
            <span style={{ fontWeight: '800', color: '#2563eb', fontSize: '16px' }}>V1</span>
            <span style={{ fontWeight: '800', color: '#0a1628', fontSize: '16px' }}> Study</span>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>© V1 Study · Built for Australian pilots. · <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms &amp; Conditions</a></p>
        </footer>

      </main>
    </>
  )
}
