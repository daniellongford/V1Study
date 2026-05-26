// ── V1 Study — Question Bank Registry ───────────────────────────────────────
// This is the ONLY file to edit when adding a new question bank.
// The quiz page imports from here and never needs to change.
//
// To add a new bank:
//   1. Drop questions-xxxx.ts into lib/
//   2. Add one import below
//   3. Add one line to FULL_BANKS
//   4. Add the subject name to the relevant PLAN_ACCESS arrays
// ─────────────────────────────────────────────────────────────────────────────
let clwaQuestions: any[] = []
let chufQuestions: any[] = []
let cmetQuestions: any[] = []
let cnavQuestions: any[] = []
let cagkQuestions: any[] = []
let cadaQuestions: any[] = []
let cfpaQuestions: any[] = []
let pplaQuestions: any[] = []
let irexQuestions: any[] = []
let aalwQuestions: any[] = []
let ahufQuestions: any[] = []
let ametQuestions: any[] = []
let anavQuestions: any[] = []
let aasaQuestions: any[] = []
let aplaQuestions: any[] = []
// ── Add new bank variables here ──────────────────────────────────────────────
// let aadaQuestions: any[] = []
// let aasyQuestions: any[] = []
// let aafpQuestions: any[] = []
try { clwaQuestions = require('./questions-clwa').clwaQuestions } catch {}
try { chufQuestions = require('./questions-chuf').chufQuestions } catch {}
try { cmetQuestions = require('./questions-cmet').cmetQuestions } catch {}
try { cnavQuestions = require('./questions-cnav').cnavQuestions } catch {}
try { cagkQuestions = require('./questions-cagk').cagkQuestions } catch {}
try { cadaQuestions = require('./questions-cada').cadaQuestions } catch {}
try { cfpaQuestions = require('./questions-cfpa').cfpaQuestions } catch {}
try { pplaQuestions = require('./questions-ppla').pplaQuestions } catch {}
try { irexQuestions = require('./questions-irex').irexQuestions } catch {}
try { aalwQuestions = require('./questions-aalw').aalwQuestions } catch {}
try { ahufQuestions = require('./questions-ahuf').ahufQuestions } catch {}
try { ametQuestions = require('./questions-amet').ametQuestions } catch {}
try { anavQuestions = require('./questions-anav').anavQuestions } catch {}
try { aasaQuestions = require('./questions-aasa').aasaQuestions } catch {}
try { aplaQuestions = require('./questions-apla').aplaQuestions } catch {}
// ── Add new bank requires here ────────────────────────────────────────────────
// try { aadaQuestions = require('./questions-aada').aadaQuestions } catch {}
// try { aasyQuestions = require('./questions-aasy').aasyQuestions } catch {}
// try { aafpQuestions = require('./questions-aafp').aafpQuestions } catch {}
// ── Bank registry ─────────────────────────────────────────────────────────────
export const FULL_BANKS: Record<string, any[]> = {
  // CPL subjects
  'Flight Rules and Air Law':        clwaQuestions,
  'Human Factors':                   chufQuestions,
  'Meteorology':                     cmetQuestions,
  'Navigation':                      cnavQuestions,
  'Aircraft General Knowledge':      cagkQuestions,
  'Aerodynamics':                    cadaQuestions,
  'Operations Performance Planning': cfpaQuestions,
  // PPL
  'PPL Theory':                      pplaQuestions,
  // IREX
  'Instrument Rating':               irexQuestions,
  // ATPL subjects
  'Air Law':                         aalwQuestions,
  'Human Factors ATPL':              ahufQuestions,
  'Aerodynamics and Systems':        aasaQuestions,
  'Meteorology Advanced':            ametQuestions,
  'Navigation Advanced':             anavQuestions,
  'Flight Planning':                 cfpaQuestions,  // replace with aafpQuestions when ready
  'Performance and Loading':         aplaQuestions,
}
// ── Plan access control ───────────────────────────────────────────────────────
export const PLAN_ACCESS: Record<string, string[]> = {
  PPL: [
    'PPL Theory',
  ],
  CPL: [
    'PPL Theory',
    'Human Factors',
    'Aerodynamics',
    'Aircraft General Knowledge',
    'Meteorology',
    'Navigation',
    'Operations Performance Planning',
    'Flight Rules and Air Law',
  ],
  ATPL: [
    'PPL Theory',
    'Human Factors',
    'Aerodynamics',
    'Aircraft General Knowledge',
    'Meteorology',
    'Navigation',
    'Operations Performance Planning',
    'Flight Rules and Air Law',
    'Air Law',
    'Human Factors ATPL',
    'Aerodynamics and Systems',
    'Meteorology Advanced',
    'Navigation Advanced',
    'Flight Planning',
    'Performance and Loading',
  ],
  IREX: [
    'Instrument Rating',
  ],
  FULL: [
    'PPL Theory',
    'Human Factors',
    'Aerodynamics',
    'Aircraft General Knowledge',
    'Meteorology',
    'Navigation',
    'Operations Performance Planning',
    'Flight Rules and Air Law',
    'Air Law',
    'Human Factors ATPL',
    'Aerodynamics and Systems',
    'Meteorology Advanced',
    'Navigation Advanced',
    'Flight Planning',
    'Performance and Loading',
    'Instrument Rating',
  ],
}
// ── Licence mapping ───────────────────────────────────────────────────────────
export function getLicence(subject: string): string {
  if (PLAN_ACCESS.PPL.includes(subject) && !PLAN_ACCESS.CPL.includes(subject)) return 'PPL'
  if (subject === 'Instrument Rating') return 'IREX'
  if (PLAN_ACCESS.ATPL.includes(subject) && !PLAN_ACCESS.CPL.includes(subject)) return 'ATPL'
  return 'CPL'
}
