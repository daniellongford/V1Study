'use client'
import { useState } from 'react'
import type { PracticeQuestion as PracticeQuestionType } from '../../../lib/practice-content'

const LETTERS = ['A', 'B', 'C', 'D']

export default function PracticeQuestion({ question }: { question: PracticeQuestionType }) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const isRight = selected === question.correct

  return (
    <section style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: 'clamp(1.25rem, 4vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
        {answered ? 'Example question' : 'Example question · pick an answer'}
      </div>

      <p style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.5, marginBottom: '1rem' }}>
        {question.question}
      </p>

      {question.options.map((opt, i) => {
        const isCorrect = i === question.correct
        const isPicked = i === selected

        let border = '#e2e8f0'
        let background = 'white'
        let color = '#334155'
        let letterColor = '#64748b'

        if (answered && isCorrect) {
          border = '#16a34a'; background = '#f0fdf4'; color = '#14532d'; letterColor = '#16a34a'
        } else if (answered && isPicked) {
          border = '#dc2626'; background = '#fef2f2'; color = '#7f1d1d'; letterColor = '#dc2626'
        } else if (answered) {
          color = '#94a3b8'; letterColor = '#cbd5e1'
        }

        return (
          <button
            key={i}
            type="button"
            onClick={() => { if (!answered) setSelected(i) }}
            disabled={answered}
            style={{
              display: 'flex', gap: '12px', alignItems: 'flex-start', width: '100%', textAlign: 'left',
              border: `1px solid ${border}`, background, color,
              borderRadius: '8px', padding: '11px 14px', marginBottom: '8px',
              fontSize: '14px', lineHeight: 1.45, fontFamily: 'inherit',
              cursor: answered ? 'default' : 'pointer', minHeight: '44px',
            }}
          >
            <span style={{ fontWeight: '700', color: letterColor, minWidth: '18px' }}>{LETTERS[i]}</span>
            <span>{opt}</span>
          </button>
        )
      })}

      {answered && (
        <div style={{ marginTop: '0.75rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
          <div style={{ fontSize: '14px', fontWeight: '700', color: isRight ? '#16a34a' : '#dc2626', marginBottom: '6px' }}>
            {isRight ? 'Correct.' : `Not quite. The answer is ${LETTERS[question.correct]}.`}
          </div>
          <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
            {question.explanation}
          </div>
          {question.reference && (
            <div style={{ fontSize: '12px', color: '#2563eb', fontFamily: 'monospace', marginTop: '8px' }}>
              Reference: {question.reference}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
