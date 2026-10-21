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
      <div style={{ display: 'flex', alignItems: 'flex-end', lineHeight: 1, gap: '18px' }}>
        <img src="/v1-mark-white.png" alt="V1" style={{ height: 'clamp(70px, 16vw, 140px)', width: 'auto', opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'translateY(0px)' : 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }} />
        <span style={{ fontSize: 'clamp(56px, 12vw, 110px)', fontWeight: '800', color: 'white', letterSpacing: '-3px', opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? 'translateY(0px)' : 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease', lineHeight: 1, paddingBottom: '8px' }}>Study</span>
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
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,20,40,0.42)' }} />
          <nav style={{ position: 'relative', zIndex: 10, padding: isMobile ? '1rem 1.25rem' : '1.25rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <img src="/v1-mark-white.png" alt="V1" style={{ height: isMobile ? '26px' : '30px', width: 'auto', display: 'block', filter: 'drop-shadow(0 1px 6px rgba(0,0,0,0.35))' }} />
              <div>
                <div style={{ fontSize: isMobile ? '20px' : '22px', fontWeight: '800', color: 'white', textShadow: '0 1px 8px rgba(0,0,0,0.4)', lineHeight: 1 }}>Study</div>
                {!isMobile && <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginTop: '3px' }}>V1. Rotate. Pass.</div>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem', alignItems: 'center' }}>
              {!isMobile && <a href="#exams" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>Exams</a>}
              {!isMobile && <a href="#pricing" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>Pricing</a>}
              <a href="/login" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '14px', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>Login</a>
              <a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: isMobile ? '600' : '400', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>Sign up</a>
            </div>
          </nav>
          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: isMobile ? '0 1.5rem' : '0 2.5rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <h1 style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '0.2em', color: 'white', margin: '0 0 2rem', fontWeight: '600', textTransform: 'uppercase', lineHeight: 1.3, textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)' }}>Australia&apos;s Pilot Exam Prep Platform</h1>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <a href="/signup" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '7px', padding: '14px 36px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Start Free Trial</a>
                <a href="#pricing" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '7px', padding: '14px 36px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>See Pricing</a>
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                <span style={{ display: 'inline-flex', width: '15px', height: '15px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.6)', alignItems: 'center', justifyContent: 'center', fontSize: '9px', lineHeight: 1, flexShrink: 0 }}>✓</span>
                Aligned to the current CASA Part 61 MOS
              </div>
            </div>
          </div>
        </section>

        {/* EXAMS */}
        <section id="exams" style={{ padding: isMobile ? '3.5rem 1.25rem' : '6rem 2.5rem', background: '#ffffff' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
              <h2 style={{ fontSize: isMobile ? '26px' : '32px', fontWeight: '700', color: '#0a1628', letterSpacing: '-0.3px', margin: 0, lineHeight: 1.15 }}>Every Australian Pilot Exam, Covered.</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '0.75rem 0 0', lineHeight: 1.5 }}>From your first PPL theory exam to your ATPL.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: '1.25rem' }}>
              {[
                { title: 'PPL', full: 'Private Pilot', sub: 'Licence', exams: '1 combined exam', desc: 'Master the core theory required for your Private Pilot Licence. The essential first step for every aspiring pilot in Australia.' },
                { title: 'CPL', full: 'Commercial Pilot', sub: 'Licence', exams: '7 exams', desc: 'All 7 CASA subjects covered in full. Built for pilots who are serious about taking their flying career to a professional level.' },
                { title: 'ATPL', full: 'Airline Transport Pilots', sub: 'Licence', exams: '7 exams', desc: 'The highest standard in Australian pilot licensing. All 7 subjects for pilots on the path to the airline flight deck.' },
                { title: 'IREX', full: 'Instrument Rating', sub: 'Exam', exams: '1 exam', desc: 'Everything you need to pass the CASA Instrument Rating Exam and operate confidently in instrument meteorological conditions.' },
              ].map(function (item) {
                return (
                  <div key={item.title} style={{ background: '#f8fafc', borderRadius: '12px', padding: '1.75rem 1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', margin: '0 0 6px', lineHeight: 1.3, minHeight: isMobile ? 'auto' : '47px' }}>{item.full}<br />{(item as any).sub}</h3>
                    <div style={{ fontSize: '13px', color: '#2563eb', fontWeight: '600', marginBottom: '0.75rem' }}>{item.exams}</div>
                    <div style={{ width: '24px', height: '2px', background: '#2563eb', borderRadius: '99px', marginBottom: '0.75rem' }} />
                    <div style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={{ padding: isMobile ? '3.5rem 1.25rem' : '6rem 2.5rem', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
              <h2 style={{ fontSize: isMobile ? '26px' : '32px', fontWeight: '700', color: '#0a1628', letterSpacing: '-0.3px', margin: 0, lineHeight: 1.15 }}>Pricing</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '0.75rem 0 0', lineHeight: 1.5 }}>Seven days free on every plan. Cancel anytime.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: '1.25rem' }}>
              {[
                { plan: 'PPL Pack', price: '$9.99', priceId: 'price_1UDInpCdMFoMcdWhqFI4pXIR', includes: 'PPL Theory exam', popular: false },
                { plan: 'CPL Pack', price: '$19.99', priceId: 'price_1UDInpCdMFoMcdWhYQDoUP5y', includes: 'PPL Theory and all 7 CPL exams', popular: true },
                { plan: 'IREX', price: '$14.99', priceId: 'price_1UDInpCdMFoMcdWhwvavh1ks', includes: 'Instrument Rating Exam only', popular: false },
                { plan: 'Full Access', price: '$34.99', priceId: 'price_1UDInpCdMFoMcdWhHEFjZJuT', includes: 'PPL, CPL, ATPL and IREX. Priority support.', popular: false },
              ].map(function (item) {
                return (
                  <div key={item.plan} style={{ background: 'white', borderRadius: '12px', padding: '1.75rem 1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', marginBottom: '14px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a1628', margin: 0, lineHeight: 1.3 }}>{item.plan}</h3>
                      {item.popular && <span style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb', whiteSpace: 'nowrap' }}>Most popular</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '36px', fontWeight: '800', color: '#0a1628', lineHeight: 1 }}>{item.price}</span>
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>per month</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.55 }}>{item.includes}</div>
                  </div>
                )
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href="/signup" style={{ display: 'inline-block', background: 'white', color: '#0a1628', border: '1px solid #0a1628', borderRadius: '4px', padding: '15px 40px', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>
                Start your 7-day free trial
              </a>
            </div>

            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginTop: '1.5rem', textAlign: 'center' }}>
              Every plan includes unlimited practice questions, full explanations with CASA references, timed exams and progress tracking.
              <br />ATPL Pack, $29.99 per month, coming soon.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0', padding: '0', width: '100%' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/contact-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 45%', filter: 'brightness(0.45)' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '3.5rem 1.5rem' : '6rem 2.5rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: isMobile ? '26px' : '32px', fontWeight: '700', color: 'white', letterSpacing: '-0.3px', margin: '0 0 0.75rem', lineHeight: 1.15 }}>Questions? We&apos;re here to help.</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', margin: '0 0 2rem', lineHeight: 1.5 }}>Reach out any time at <a href="mailto:support@v1study.com.au" style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}>support@v1study.com.au</a></p>
            <a href="/contact" style={{ background: 'white', color: '#0a1628', borderRadius: '7px', padding: '13px 36px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-block' }}>Contact us</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: isMobile ? '1.5rem 1.25rem' : '2rem 2.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'white', textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
            <img src="/v1-mark-navy.png" alt="V1" style={{ height: '22px', width: 'auto', display: 'block' }} />
            <span style={{ fontWeight: '800', color: '#0a1628', fontSize: '16px', lineHeight: 1 }}>Study</span>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>© V1 Study · Built for Australian pilots. · <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms &amp; Conditions</a></p>
        </footer>

      </main>
    </>
  )
}
