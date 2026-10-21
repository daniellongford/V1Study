// lib/exam-config.ts
// Timed exam settings per subject — question count, time allowed, pass mark.
//
// TIME and PASS MARK: CASA exam pages + Part 61 MOS Schedule 4 (verified Oct 2026).
// QUESTION COUNT: CASA does not publish counts. Figures are the most-reported
// counts from recent candidate debriefs / training providers — see the comment
// on each line. Real CASA exams score by marks (questions carry 1–5 marks);
// here every question is 1 mark, so the count is what matters.

export type ExamConfig = {
  questions: number     // number of questions in the timed exam
  minutes: number       // time allowed
  passMark: number      // percentage required to pass
}

const CONFIG: Record<string, ExamConfig> = {
  // ── PPL ───────────────────────────────────────────────────────────────────
  'PPL Theory': { questions: 60, minutes: 210, passMark: 70 },        // 55–60 Q reported (≈60 marks), 3.5 h

  // ── CPL ───────────────────────────────────────────────────────────────────
  'Flight Rules and Air Law': { questions: 40, minutes: 120, passMark: 80 },   // 40 × 1 mark, 2 h
  'Human Factors': { questions: 40, minutes: 75, passMark: 70 },               // 40 × 1 mark (one report of 41), 1 h 15
  'Aerodynamics': { questions: 40, minutes: 90, passMark: 70 },                // 40 × 1 mark, 1.5 h
  'Aircraft General Knowledge': { questions: 40, minutes: 90, passMark: 70 },  // 40 × 1 mark, 1.5 h
  'Meteorology': { questions: 30, minutes: 90, passMark: 70 },                 // 30 Q (≈40 marks, a few 2-markers), 1.5 h
  'Navigation': { questions: 32, minutes: 105, passMark: 70 },                 // 32 Q (≈40 marks, 5–8 two-markers), 1 h 45
  'Operations Performance Planning': { questions: 32, minutes: 150, passMark: 70 }, // 30–32 Q, 50 marks (1–4 per Q), 2.5 h

  // ── ATPL ──────────────────────────────────────────────────────────────────
  'Human Factors Advanced': { questions: 42, minutes: 75, passMark: 70 },      // ~42 Q, 1 h 15
  'Aerodynamics and Systems': { questions: 50, minutes: 90, passMark: 70 },    // 50 × 1 mark, 1.5 h
  'Performance and Loading': { questions: 32, minutes: 150, passMark: 70 },    // ~32 Q (≈45 marks, two 4-markers), 2.5 h
  'Meteorology Advanced': { questions: 40, minutes: 90, passMark: 70 },        // NOT REPORTED anywhere — 40 is an assumption, 1.5 h
  'Navigation Advanced': { questions: 27, minutes: 90, passMark: 70 },         // 26–27 Q (≈36 marks), 1.5 h
  'Flight Planning': { questions: 17, minutes: 180, passMark: 70 },            // 17 Q (17–18), 50 marks: 3×5, 2×4, ~5×3, ~4×2, ~3×1, 3 h
  'Flight Planning Advanced': { questions: 17, minutes: 180, passMark: 70 },   // same as above (alternate bank name)
  'Air Law': { questions: 30, minutes: 90, passMark: 80 },                     // 30 × 1 mark, 1.5 h
  'Air Law Advanced': { questions: 30, minutes: 90, passMark: 80 },            // same as above (alternate bank name)

  // ── IREX ──────────────────────────────────────────────────────────────────
  'Instrument Rating': { questions: 40, minutes: 210, passMark: 70 },          // 40 × 1 mark, 3.5 h
}

const DEFAULT: ExamConfig = { questions: 40, minutes: 90, passMark: 70 }

export function getExamConfig(subject: string): ExamConfig {
  if (CONFIG[subject]) return CONFIG[subject]
  const lower = subject.toLowerCase().trim()
  for (const key of Object.keys(CONFIG)) {
    if (key.toLowerCase().trim() === lower) return CONFIG[key]
  }
  return DEFAULT
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} min`
  if (m === 0) return `${h} h`
  return `${h} h ${m} min`
}
