export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#ffffff',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'1rem 2rem',borderBottom:'1px solid #e2e8f0',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#ffffff'}}>
        <div>
          <span style={{fontSize:'24px',fontWeight:'800',color:'#2563eb'}}>V1</span>
          <span style={{fontSize:'24px',fontWeight:'800',color:'#0a1628'}}> Study</span>
          <div style={{fontSize:'12px',color:'#64748b',fontStyle:'italic'}}>V1. Rotate. Pass.</div>
        </div>
        <div style={{display:'flex',gap:'2rem',alignItems:'center'}}>
          <a href="#features" style={{color:'#64748b',textDecoration:'none'}}>Features</a>
          <a href="#pricing" style={{color:'#64748b',textDecoration:'none'}}>Pricing</a>
          <a href="/login" style={{color:'#64748b',textDecoration:'none'}}>Login</a>
          <a href="/signup" style={{background:'#2563eb',color:'white',borderRadius:'8px',padding:'8px 20px',textDecoration:'none',fontWeight:'600',fontSize:'14px'}}>Start Free Trial</a>
        </div>
      </nav>
      <section style={{padding:'6rem 2rem',textAlign:'center',background:'linear-gradient(180deg,#eff6ff 0%,#ffffff 100%)'}}>
        <p style={{fontSize:'13px',letterSpacing:'0.2em',color:'#2563eb',marginBottom:'1rem',fontWeight:'600'}}>AUSTRALIA&apos;S PILOT EXAM PREP PLATFORM</p>
        <h1 style={{fontSize:'56px',fontWeight:'800',color:'#0a1628',marginBottom:'1rem',lineHeight:1.1}}>
          Your Journey to the<br/>
          <span style={{color:'#2563eb'}}>Flight Deck</span> Starts Here
        </h1>
        <p style={{fontSize:'18px',color:'#64748b',maxWidth:'600px',margin:'0 auto 2rem',lineHeight:1.7}}>
          Australia&apos;s most advanced CPL, ATPL, PPL and IREX exam preparation platform. AI-powered questions with real CASA references. Unlimited practice.
        </p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',marginBottom:'1rem'}}>
          <a href="/signup" style={{background:'#2563eb',color:'white',borderRadius:'8px',padding:'14px 32px',fontSize:'16px',fontWeight:'600',textDecoration:'none',display:'inline-block'}}>Start Free Trial →</a>
          <a href="#pricing" style={{background:'transparent',color:'#0a1628',border:'2px solid #e2e8f0',borderRadius:'8px',padding:'14px 32px',fontSize:'16px',fontWeight:'600',textDecoration:'none',display:'inline-block'}}>See Pricing</a>
        </div>
        <p style={{fontSize:'13px',color:'#94a3b8'}}>7 day free trial · No credit card required · Cancel anytime</p>
      </section>
      <section id="features" style={{padding:'4rem 2rem',maxWidth:'1000px',margin:'0 auto'}}>
        <h2 style={{textAlign:'center',fontSize:'36px',fontWeight:'700',color:'#0a1628',marginBottom:'0.5rem'}}>Every Australian Pilot Exam Covered</h2>
        <p style={{textAlign:'center',color:'#64748b',marginBottom:'3rem',fontSize:'16px'}}>From your first PPL theory to your ATPL — we have every exam covered</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem'}}>
          {[
            {title:'PPL',full:'Private Pilot Licence',exams:'1 combined exam',color:'#10b981',desc:'Perfect for student pilots taking their first theory exam'},
            {title:'CPL',full:'Commercial Pilot Licence',exams:'7 exams',color:'#2563eb',desc:'All 7 subjects including Operations, Performance and Planning'},
            {title:'ATPL',full:'Airline Transport Pilot',exams:'7 exams',color:'#7c3aed',desc:'Advanced theory for pilots heading to the flight deck'},
            {title:'IREX',full:'Instrument Rating Exam',exams:'1 exam',color:'#f59e0b',desc:'IFR procedures and instrument flight rules'},
          ].map(function(item){
            return (
              <div key={item.title} style={{background:'#f8fafc',borderRadius:'12px',padding:'1.5rem',border:'1px solid #e2e8f0'}}>
                <div style={{fontSize:'13px',fontWeight:'700',color:item.color,marginBottom:'4px',letterSpacing:'0.1em'}}>{item.title}</div>
                <div style={{fontSize:'16px',fontWeight:'700',color:'#0a1628',marginBottom:'4px'}}>{item.full}</div>
                <div style={{fontSize:'12px',color:item.color,fontWeight:'600',marginBottom:'8px'}}>{item.exams}</div>
                <div style={{fontSize:'13px',color:'#64748b',lineHeight:1.5}}>{item.desc}</div>
              </div>
            )
          })}
        </div>
      </section>
      <section id="pricing" style={{padding:'4rem 2rem',background:'#f8fafc'}}>
        <div style={{maxWidth:'900px',margin:'0 auto'}}>
          <h2 style={{textAlign:'center',fontSize:'36px',fontWeight:'700',color:'#0a1628',marginBottom:'0.5rem'}}>Simple Pricing</h2>
          <p style={{textAlign:'center',color:'#64748b',marginBottom:'3rem'}}>Start free. Upgrade when you are ready.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
            {[
              {plan:'Free Trial',price:'$0',period:'7 days',features:['All subjects','10 questions per subject','Basic progress tracking'],color:'#64748b',btn:'Start Free'},
              {plan:'PPL Pack',price:'$9.99',period:'per month',features:['PPL exam prep','Unlimited questions','Full explanations','CASA references'],color:'#10b981',btn:'Get Started'},
              {plan:'CPL Pack',price:'$19.99',period:'per month',features:['PPL + all 7 CPL exams','Unlimited questions','Progress tracking','Weak area analysis'],color:'#2563eb',btn:'Get Started',popular:true},
              {plan:'Full Access',price:'$34.99',period:'per month',features:['Every exam included','ATPL + IREX access','Priority support','Study streak tracking'],color:'#7c3aed',btn:'Get Started'},
            ].map(function(item){
              return (
                <div key={item.plan} style={{background:'white',borderRadius:'12px',padding:'1.5rem',border:item.popular?'2px solid #2563eb':'1px solid #e2e8f0',position:'relative'}}>
                  {item.popular && <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#2563eb',color:'white',fontSize:'11px',fontWeight:'700',padding:'3px 12px',borderRadius:'99px'}}>MOST POPULAR</div>}
                  <div style={{fontSize:'14px',fontWeight:'700',color:item.color,marginBottom:'4px'}}>{item.plan}</div>
                  <div style={{fontSize:'32px',fontWeight:'800',color:'#0a1628'}}>{item.price}</div>
                  <div style={{fontSize:'12px',color:'#94a3b8',marginBottom:'1rem'}}>{item.period}</div>
                  {item.features.map(function(f){return <div key={f} style={{fontSize:'13px',color:'#475569',marginBottom:'6px'}}>✓ {f}</div>})}
                  <a href="/signup" style={{display:'block',width:'100%',marginTop:'1rem',background:item.popular?'#2563eb':'transparent',color:item.popular?'white':item.color,border:`2px solid ${item.color}`,borderRadius:'8px',padding:'10px',fontWeight:'600',cursor:'pointer',textDecoration:'none',textAlign:'center',boxSizing:'border-box'}}>
                    {item.btn}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <footer style={{padding:'2rem',textAlign:'center',borderTop:'1px solid #e2e8f0'}}>
        <div style={{marginBottom:'0.5rem'}}>
          <span style={{fontWeight:'800',color:'#2563eb'}}>V1</span>
          <span style={{fontWeight:'800',color:'#0a1628'}}> Study</span>
        </div>
        <p style={{fontSize:'13px',color:'#94a3b8'}}>© 2025 V1 Study. All rights reserved. Built for Australian pilots.</p>
      </footer>
    </main>
  )
}
