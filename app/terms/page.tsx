'use client'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using V1 Study (v1study.com.au), creating an account, or purchasing a subscription, you agree to be bound by these Terms and Conditions. If you do not agree, you must stop using the platform immediately.',
  },
  {
    title: '2. Nature of Service',
    content: 'V1 Study is an exam preparation and revision platform for pilots sitting CASA theory examinations. It does not provide flight training, operational flight instruction, or aviation safety advice. All content is for study purposes only.',
  },
  {
    title: '3. Not a Substitute for Official Sources',
    content: 'Content on this platform does not replace instruction from a qualified flight instructor, official CASA publications, aircraft flight manuals, or applicable Australian aviation regulations. Always verify content against official CASA sources before reliance.',
  },
  {
    title: '4. No Guarantee of Results',
    content: 'V1 Study is a study aid only and does not guarantee that you will pass any CASA examination. Examination outcomes depend on your own preparation, study, and effort. We make no representation or warranty that use of the platform will result in a pass or any particular result.',
  },
  {
    title: '5. Accuracy of Content',
    content: 'While all care is taken in preparing content, V1 Study makes no warranty regarding accuracy, completeness, or currency. Content may contain errors. Report any errors to support@v1study.com.au. Questions should be verified against official CASA publications.',
  },
  {
    title: '6. User Responsibility',
    content: 'Aviation involves inherent risk including serious injury or death. By using this platform you acknowledge that you are solely responsible for verifying all information, complying with CASA regulations, consulting qualified flight instructors where required, and all decisions made during training and operations.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'To the maximum extent permitted by Australian law, V1 Study and its directors exclude all liability for any loss, damage, or injury arising from use of this platform or reliance on its content. Nothing in these terms excludes rights that cannot be excluded under the Australian Consumer Law.',
  },
  {
    title: '8. Subscriptions and Billing',
    content: 'Subscriptions are billed monthly. All plans include a 7-day free trial — your card will not be charged during the trial. At the end of the 7-day free trial, your card will automatically be charged the monthly subscription fee for your selected plan unless you cancel before the trial ends. Subscriptions renew automatically each month until cancelled. You may cancel at any time through the pricing page. Upon cancellation, access continues until the end of the current billing period. Unused subscription time is non-refundable except where required by the Australian Consumer Law. All prices are in Australian dollars and, where applicable, inclusive of GST.',
  },
  {
    title: '9. Payments',
    content: 'Payments are processed securely by our third-party payment provider, Stripe. V1 Study does not collect or store your full card details. By subscribing you also agree to Stripe\u2019s terms and the processing of your payment information by Stripe.',
  },
  {
    title: '10. Pricing Changes',
    content: 'V1 Study may change subscription pricing at any time. For existing subscribers, any price increase will not take effect until after reasonable notice has been provided, and will apply from your next billing period. Continued use after a price change takes effect constitutes acceptance of the new price.',
  },
  {
    title: '11. Account Usage',
    content: 'Accounts are for individual personal use only. You must not share, transfer, sell, or allow others to access your account. V1 Study reserves the right to suspend or terminate accounts where misuse or account sharing is detected without refund.',
  },
  {
    title: '12. Privacy and Data',
    content: 'To provide the service we collect and store limited personal information, including your email address and quiz activity, and process your payment through Stripe. Your data is stored securely with our infrastructure providers. We use your information only to operate and improve the platform and to communicate with you about your account. We do not sell your personal information. You may request access to or deletion of your account data by contacting support@v1study.com.au. By using the platform you consent to this handling of your information in accordance with the Australian Privacy Principles.',
  },
  {
    title: '13. Intellectual Property',
    content: 'All content including questions, explanations, and references is the intellectual property of V1 Study. You must not copy, reproduce, distribute, or commercialise any content without prior written permission.',
  },
  {
    title: '14. Conduct',
    content: 'You agree to use the platform lawfully and appropriately. You must not engage in conduct that breaches CASA exam integrity rules or any applicable Australian law. V1 Study reserves the right to terminate accounts for misconduct.',
  },
  {
    title: '15. Third-Party Services',
    content: 'The platform relies on third-party services including payment processing, hosting, and infrastructure providers. V1 Study is not liable for any loss or interruption caused by the failure, outage, or act of any third-party provider.',
  },
  {
    title: '16. Changes to or Discontinuation of Service',
    content: 'V1 Study may modify content, features, pricing, or these terms at any time. We may also discontinue the platform in whole or in part. Where the platform is discontinued, we will provide reasonable notice to active subscribers. Continued use of the platform after changes constitutes acceptance.',
  },
  {
    title: '17. Severability',
    content: 'If any provision of these terms is found to be invalid or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.',
  },
  {
    title: '18. Entire Agreement',
    content: 'These terms constitute the entire agreement between you and V1 Study regarding the platform and supersede any prior agreements or understandings.',
  },
  {
    title: '19. Governing Law',
    content: 'These terms are governed by the laws of Queensland, Australia. Any disputes will be handled in Queensland courts.',
  },
  {
    title: '20. Contact',
    content: 'For questions about these terms contact support@v1study.com.au',
  },
]

export default function TermsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.25rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </a>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 1rem)', alignItems: 'center' }}>
          <a href="/login" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Login</a>
          <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px 16px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Sign up free</a>
        </div>
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)' }}>
        <h1 style={{ fontSize: 'clamp(28px, 7vw, 36px)', fontWeight: '800', color: '#0a1628', marginBottom: '0.5rem' }}>Terms and Conditions</h1>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '3rem' }}>V1 Study</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1.25rem, 4vw, 1.5rem)', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#0a1628', marginBottom: '8px' }}>{s.title}</h2>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, margin: 0 }}>{s.content}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Questions about these terms? Contact us at <a href="mailto:support@v1study.com.au" style={{ color: '#2563eb' }}>support@v1study.com.au</a></p>
        </div>
      </div>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', background: 'white' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <p style={{ fontSize: '13px', color: '#94a3b8' }}>&copy; V1 Study &middot; Built for Australian pilots. &middot; <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms &amp; Conditions</a></p>
      </footer>
    </main>
  )
}
