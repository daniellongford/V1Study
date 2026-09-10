import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PRACTICE, getPractice } from '../../../lib/practice-content'

const BASE = 'https://v1study.com.au'

export const dynamicParams = false

export function generateStaticParams() {
  return PRACTICE.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = getPractice(slug)
  if (!entry) return {}
  const url = `${BASE}/practice/${entry.slug}`
  return {
    title: `${entry.title} | V1 Study`,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${entry.title} | V1 Study`,
      description: entry.description,
      url,
      siteName: 'V1 Study',
      type: 'website',
    },
  }
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getPractice(slug)
  if (!entry) notFound()

  const { question } = entry
  const letters = ['A', 'B', 'C', 'D']
  const signupHref = `/signup?plan=${entry.plan}`

  const licenceNote: Record<string, string> = {
    PPL: 'Full PPL Theory bank, 500 questions.',
    CPL: `Full ${entry.exam} bank, plus all seven CPL subjects.`,
    ATPL: `Full ${entry.exam} bank, plus all seven ATPL subjects.`,
    IREX: 'Full IREX bank, 500 questions.',
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: entry.title,
    description: entry.description,
    url: `${BASE}/practice/${entry.slug}`,
    publisher: { '@type': 'Organization', name: 'V1 Study', url: BASE },
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif', display: 'flex', flexDirection: 'column' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.25rem, 4vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </a>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="/login" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Login</a>
          <a href="/signup" style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px 16px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Sign up free</a>
        </div>
      </nav>

      <article style={{ maxWidth: '640px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)', flex: 1, width: '100%' }}>
        <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#2563eb', fontFamily: 'monospace', letterSpacing: '0.06em', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', marginBottom: '12px' }}>
          {entry.code}
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 6vw, 34px)', fontWeight: '800', color: '#0a1628', marginBottom: '12px', lineHeight: 1.15 }}>
          {entry.title}
        </h1>

        <p style={{ fontSize: 'clamp(15px, 3.5vw, 16px)', color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
          {entry.intro}
        </p>

        <section style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: 'clamp(1.25rem, 4vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Example question
          </div>

          <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.5, marginBottom: '1rem' }}>
            {question.question}
          </p>

          {question.options.map((opt, i) => {
            const isCorrect = i === question.correct
            return (
              <div
                key={i}
                style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  border: `1px solid ${isCorrect ? '#16a34a' : '#e2e8f0'}`,
                  background: isCorrect ? '#f0fdf4' : 'white',
                  color: isCorrect ? '#14532d' : '#334155',
                  borderRadius: '8px', padding: '11px 14px', marginBottom: '8px',
                  fontSize: '14px', lineHeight: 1.45,
                }}
              >
                <span style={{ fontWeight: '700', color: isCorrect ? '#16a34a' : '#64748b', minWidth: '18px' }}>{letters[i]}</span>
                <span>{opt}</span>
              </div>
            )
          })}

          <div style={{ marginTop: '0.75rem', fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
            {question.explanation}
            {question.reference && (
              <div style={{ fontSize: '12px', color: '#2563eb', fontFamily: 'monospace', marginTop: '6px' }}>
                Reference: {question.reference}
              </div>
            )}
          </div>
        </section>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={signupHref} style={{ display: 'inline-block', background: '#2563eb', color: 'white', borderRadius: '8px', padding: '12px 24px', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>
            Start your 7 day free trial →
          </a>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>{licenceNote[entry.licence]}</span>
        </div>
      </article>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', background: 'white' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <p style={{ fontSize: '13px', color: '#94a3b8' }}>© V1 Study · Built for Australian pilots. · <a href="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms &amp; Conditions</a></p>
      </footer>
    </main>
  )
}
