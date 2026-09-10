// lib/practice-content.ts
// One public practice page per exam, at /practice/<slug>.
// Each entry holds one question taken from the matching bank in lib/.
// To change a page's question, replace the question object here. Nothing else needs touching.

export type PracticeQuestion = {
  question: string
  options: string[]
  correct: number
  explanation: string
  reference?: string
}

export type PracticeEntry = {
  slug: string
  code: string
  licence: 'PPL' | 'CPL' | 'ATPL' | 'IREX'
  exam: string
  plan: string
  passMark: number
  title: string
  description: string
  intro: string
  question: PracticeQuestion
}

export const PRACTICE: PracticeEntry[] = [
  {
    slug: "ppl-theory",
    code: "PPLA",
    licence: "PPL",
    exam: "PPL Theory",
    plan: "price_1UDInpCdMFoMcdWhqFI4pXIR",
    passMark: 70,
    title: "PPL theory practice questions",
    description: "Practice questions for the CASA PPL(A) theory exam, written to the Part 61 MOS syllabus with full explanations and references. Pass mark 70%.",
    intro: "Practice questions for the CASA PPL (Aeroplane) theory exam, written to the Part 61 MOS syllabus and Australian rules. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "Two aeroplanes are converging at a similar height and neither is overtaking. Which aircraft must give way?",
      options: [
        "The aircraft that has the other on its left",
        "The aircraft that has the other on its right",
        "The faster aircraft",
        "The heavier aircraft",
      ],
      correct: 1,
      explanation: "When two aircraft are converging at about the same height, the aircraft that has the other on its right must give way. The aircraft being given way to maintains its heading and speed.",
      reference: "CASR Part 91.330",
    },
  },
  {
    slug: "cpl-human-factors",
    code: "CHUF",
    licence: "CPL",
    exam: "Human Factors",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Human Factors practice questions",
    description: "Practice questions for the CASA CPL Human Factors exam (CHUF), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Human Factors exam (CHUF), written to the Part 61 MOS syllabus. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "A pilot feels a strong sensation of banking to the right but instruments show wings level. What should the pilot do?",
      options: [
        "Close eyes to eliminate visual confusion and rely purely on vestibular sensation",
        "Trust the body sensation and bank left to correct the perceived bank",
        "Trust the instruments and maintain the wings-level attitude shown, despite the physical sensation",
        "Declare an emergency and request radar vectors to an aerodrome",
      ],
      correct: 2,
      explanation: "When instruments contradict sensory inputs, the instruments must be trusted. The vestibular system is unreliable in the absence of external visual references. Acting on false sensations is a leading cause of fatal accidents.",
      reference: "Part 61 MOS Sch 3 Unit 1.6.2 CHFC 2.8 (spatial disorientation)",
    },
  },
  {
    slug: "cpl-aerodynamics",
    code: "CADA",
    licence: "CPL",
    exam: "Aerodynamics",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Aerodynamics practice questions",
    description: "Practice questions for the CASA CPL Aerodynamics exam (CADA), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Aerodynamics exam (CADA), written to the Part 61 MOS syllabus. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "The effect of extending flaps on the stall speed is:",
      options: [
        "Stall speed increases, more lift means faster stall",
        "Stall speed changes only if the flap setting exceeds 30°",
        "Stall speed decreases, higher CL is achieved at a lower speed",
        "Stall speed is unaffected, stall angle of attack does not change",
      ],
      correct: 2,
      explanation: "Flaps increase CLmax, the maximum lift coefficient available. Since stall speed Vs = √(2W / ρ S CLmax), increasing CLmax reduces the stall speed. A fully flapped wing can fly more slowly before stalling.",
      reference: "Part 61 MOS Sch 3, CADA 2.8",
    },
  },
  {
    slug: "cpl-aircraft-general-knowledge",
    code: "CSYA",
    licence: "CPL",
    exam: "Aircraft General Knowledge",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Aircraft General Knowledge practice questions",
    description: "Practice questions for the CASA CPL Aircraft General Knowledge exam (CSYA), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Aircraft General Knowledge exam (CSYA), covering engines, systems and instruments to the Part 61 MOS syllabus. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "A \"leak in the hydraulic brake system\" will be indicated by:",
      options: [
        "Increasing brake pedal pressure required for the same braking effect",
        "Progressive loss of braking effectiveness and fluid on the ground under the aircraft",
        "The brakes locking up instead of applying gradually",
        "A caution light only, no change in brake performance until total failure",
      ],
      correct: 1,
      explanation: "A hydraulic brake system leak: fluid is lost, reducing the hydraulic pressure available. Braking becomes progressively less effective as fluid is depleted. Fluid may be visible under the aircraft or on the wheels/tyres. Eventually, braking may be completely lost. Check brake fluid level as part of pre-flight.",
      reference: "Part 61 MOS Sch 3, CAKC 2.2 (systems - hydraulic)",
    },
  },
  {
    slug: "cpl-meteorology",
    code: "CMET",
    licence: "CPL",
    exam: "Meteorology",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Meteorology practice questions",
    description: "Practice questions for the CASA CPL Meteorology exam (CMET), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Meteorology exam (CMET), written to the Part 61 MOS syllabus and Australian forecasts and reports. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "Unstable air and sufficient moisture are two ingredients for thunderstorm development. What is the third essential ingredient?",
      options: [
        "A low-level temperature inversion to concentrate the available moisture near the surface",
        "A region of high surface pressure to mechanically force the air upward into cloud",
        "Strong winds in the upper atmosphere to drive the storm's overall circulation",
        "A lifting trigger such as surface heating, orographic ascent, frontal lift or low-level convergence",
      ],
      correct: 3,
      explanation: "Thunderstorms need three things together: conditional instability, sufficient low-level moisture, and a trigger that lifts air to its level of free convection — daytime heating, orographic ascent over terrain, frontal lifting, or low-level convergence. Remove any one and the storm will not form. An inversion or high pressure suppresses convection rather than triggering it.",
      reference: "Part 61 MOS Sch 3, CMTC 2.8",
    },
  },
  {
    slug: "cpl-navigation",
    code: "CNAV",
    licence: "CPL",
    exam: "Navigation",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Navigation practice questions",
    description: "Practice questions for the CASA CPL Navigation exam (CNAV), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Navigation exam (CNAV), written to the Part 61 MOS syllabus. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "Two points lie on the same meridian, 2° of latitude apart. What is the distance between them?",
      options: [
        "120 NM",
        "60 NM",
        "240 NM",
        "12 NM",
      ],
      correct: 0,
      explanation: "One minute of latitude equals one nautical mile, so one degree equals 60 NM. Two degrees of latitude is therefore 120 NM. This holds along any meridian regardless of latitude.",
      reference: "Part 61 MOS Sch 3, CNVC 2.1",
    },
  },
  {
    slug: "cpl-flight-planning",
    code: "CFPA",
    licence: "CPL",
    exam: "Operations Performance Planning",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 70,
    title: "CPL Flight Planning and Performance practice questions",
    description: "Practice questions for the CASA CPL Operations, Performance and Flight Planning exam (CFPA), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA CPL Operations, Performance and Flight Planning exam (CFPA), written to the Part 61 MOS syllabus with fuel doctrine per the Part 91 MOS. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "An aerodrome elevation is 1000 ft and the QNH is 983 hPa. With 1013 hPa set on the altimeter subscale:",
      options: [
        "Pressure height is 900 ft above the aerodrome elevation",
        "Pressure height is 1200 ft above the aerodrome elevation",
        "Pressure height equals the aerodrome elevation",
        "Pressure height is 900 ft below the aerodrome elevation",
      ],
      correct: 0,
      explanation: "QNH 983 hPa differs from the standard 1013 hPa by 30 hPa. At 30 ft per hPa that is 900 ft. A QNH below 1013 means the standard setting reads higher, so pressure height is above elevation.",
      reference: "Part 61 MOS Sch 3, COPC 2.1; ICAO Standard Atmosphere",
    },
  },
  {
    slug: "cpl-air-law",
    code: "CLWA",
    licence: "CPL",
    exam: "Flight Rules and Air Law",
    plan: "price_1UDInpCdMFoMcdWhYQDoUP5y",
    passMark: 80,
    title: "CPL Air Law practice questions",
    description: "Practice questions for the CASA CPL Flight Rules and Air Law exam (CLWA), written to the Part 61 MOS syllabus with full explanations and CASA references. Pass mark 80%.",
    intro: "Practice questions for the CASA CPL Flight Rules and Air Law exam (CLWA), written to the Part 61 MOS syllabus and current CASR, Part 91 MOS and AIP. Every question comes with a full explanation and a CASA reference. Pass mark 80%.",
    question: {
      question: "You are operating VFR in Class D airspace and the visibility drops to 3,500 m. Are you in VMC?",
      options: [
        "No, Class D requires 5,000 m flight visibility for VFR",
        "Yes, 3,500 m exceeds the 3,000 m minimum for Class D",
        "Class D only requires 1,500 m visibility",
        "Only if you are below 1,000 ft AGL",
      ],
      correct: 0,
      explanation: "VMC in Class D airspace requires 5,000 m flight visibility plus the standard cloud clearances. At 3,500 m visibility you are below VMC in Class D. You must either obtain a Special VFR clearance from ATC or exit the controlled airspace.",
      reference: "CASR 91.615 / AIP ENR 1.2",
    },
  },
  {
    slug: "atpl-human-factors",
    code: "AHUF",
    licence: "ATPL",
    exam: "Human Factors ATPL",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Human Factors practice questions",
    description: "Practice questions for the CASA ATPL Human Factors exam (AHUF), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Human Factors exam (AHUF), written to the Part 61 MOS syllabus at transport category depth. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "The time of useful consciousness (TUC) at 35,000 ft following rapid decompression is approximately:",
      options: [
        "30 to 60 minutes",
        "30 to 60 seconds",
        "5 to 10 minutes",
        "3 to 5 minutes",
      ],
      correct: 1,
      explanation: "At 35,000 ft, the TUC following sudden exposure to ambient pressure is approximately 30 to 60 seconds. TUC decreases dramatically with altitude — at 25,000 ft it is 3 to 5 minutes, at 30,000 ft it is 1 to 2 minutes. Physical activity further reduces TUC. Immediate donning of oxygen equipment is essential.",
      reference: "AHFC MOS 2.2.6",
    },
  },
  {
    slug: "atpl-aerodynamics-systems",
    code: "AASA",
    licence: "ATPL",
    exam: "Aerodynamics and Systems",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Aerodynamics and Systems practice questions",
    description: "Practice questions for the CASA ATPL Aerodynamics and Aircraft Systems exam (AASA), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Aerodynamics and Aircraft Systems exam (AASA), written to the Part 61 MOS syllabus for transport category aircraft. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "Flight envelope protection in fly-by-wire prevents:",
      options: [
        "The autopilot from engaging at speeds below VMO",
        "The engines from producing more than maximum rated thrust",
        "Crew inputs that would exceed certified structural and aerodynamic limits",
        "The aircraft from flying above the certified service ceiling",
      ],
      correct: 2,
      explanation: "FBW envelope protection (e.g., Airbus normal law): bank limited to 67°; pitch limited to +30°/-15°; load factor limited to +2.5g/-1.0g; AoA limited at alpha max; speed limited at VMO/MMO. When the pilot input would exceed a limit, the computer modifies the command to stay at the limit. Allows confident aggressive manoeuvres without structural risk.",
      reference: "AASA MOS 6.5 / Flight envelope protection",
    },
  },
  {
    slug: "atpl-performance-loading",
    code: "APLA",
    licence: "ATPL",
    exam: "Performance and Loading",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Performance and Loading practice questions",
    description: "Practice questions for the CASA ATPL Performance and Loading exam (APLA) based on the B727-200, with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Performance and Loading exam (APLA), based on the B727-200 data used in the CASA exam. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "The minimum gross 2nd segment climb gradient for a twin-engine transport aircraft is:",
      options: [
        "2.1%",
        "3.0%",
        "2.7%",
        "2.4%",
      ],
      correct: 3,
      explanation: "CASR Part 121 MOS: 2nd segment gross gradient — twin: 2.4%; three-engine: 2.7%; four-engine: 3.0%.",
      reference: "APLA MOS 2.2.2(d) / CASR Part 121 MOS",
    },
  },
  {
    slug: "atpl-meteorology",
    code: "AMET",
    licence: "ATPL",
    exam: "Meteorology Advanced",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Meteorology practice questions",
    description: "Practice questions for the CASA ATPL Meteorology exam (AMET), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Meteorology exam (AMET), written to the Part 61 MOS syllabus at transport category depth. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "The dry adiabatic lapse rate (DALR) of approximately 3°C per 1,000 ft applies when:",
      options: [
        "Air is descending in a high pressure system regardless of its moisture content",
        "The ELR exceeds 3°C per 1,000 ft anywhere in the troposphere",
        "Unsaturated air is lifted, it cools at this rate without condensation occurring",
        "Air temperature is above 0°C, below freezing the SALR applies instead",
      ],
      correct: 2,
      explanation: "The DALR (approximately 3°C per 1,000 ft or 9.8°C per km) applies to unsaturated (below the dew point) air lifted adiabatically. No condensation occurs, so no latent heat is released. As an air parcel is lifted, it expands and cools at this rate. When the air parcel reaches its dew point (the lifting condensation level, or LCL), saturation occurs and the SALR applies from that point upward.",
      reference: "AMTA MOS 2.1.3",
    },
  },
  {
    slug: "atpl-navigation",
    code: "ANAV",
    licence: "ATPL",
    exam: "Navigation Advanced",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Navigation practice questions",
    description: "Practice questions for the CASA ATPL Navigation exam (ANAV), written to the Part 61 MOS syllabus with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Navigation exam (ANAV), written to the Part 61 MOS syllabus. Every question comes with a full explanation and a reference. Pass mark 70%.",
    question: {
      question: "An aircraft holds for 35 minutes burning 3,600 kg/hr. The hold extends the flight by 35 minutes compared to a direct routing. Additional fuel burned in holding vs direct is:",
      options: [
        "2,100 kg",
        "2,520 kg",
        "1,680 kg",
        "3,600 kg",
      ],
      correct: 0,
      explanation: "Additional fuel from holding = fuel flow × extra time = 3,600 × (35/60) = 3,600 × 0.5833 = 2,100 kg. This is the penalty for 35 minutes of holding — a significant amount that may require reassessing fuel reserves and potentially declaring minimum fuel.",
      reference: "ANVC MOS 2.7.4 / Navigation",
    },
  },
  {
    slug: "atpl-flight-planning",
    code: "AAFP",
    licence: "ATPL",
    exam: "Flight Planning",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 70,
    title: "ATPL Flight Planning practice questions",
    description: "Practice questions for the CASA ATPL Flight Planning exam (AAFP) based on the B727-200, with full explanations. Pass mark 70%.",
    intro: "Practice questions for the CASA ATPL Flight Planning exam (AAFP), based on the B727-200 data used in the CASA exam. Every question comes with a full explanation. Pass mark 70%.",
    question: {
      question: "Given: Basic Weight 47 000 kg, required fuel 24 000 kg, MBRW 89 350 kg. The maximum payload at planning is:",
      options: [
        "22 350 kg",
        "18 350 kg (MBRW limited)",
        "16 500 kg if MZFW governs; 18 350 kg if MBRW governs",
        "16 500 kg (MZFW limited)",
      ],
      correct: 3,
      explanation: "MBRW check: Max Payload from MBRW = MBRW − Basic Weight − fuel = 89 350 − 47 000 − 24 000 = 18 350 kg. MZFW check: Max Payload = MZFW − Basic Weight = 63 500 − 47 000 = 16 500 kg. MZFW is the more restrictive limit, so maximum payload = 16 500 kg.",
    },
  },
  {
    slug: "atpl-air-law",
    code: "AALW",
    licence: "ATPL",
    exam: "Air Law",
    plan: "price_1UDInvCdMFoMcdWh7m6hD1NW",
    passMark: 80,
    title: "ATPL Air Law practice questions",
    description: "Practice questions for the CASA ATPL Air Law exam (AALW), written to the Part 61 MOS syllabus with full explanations and CASA references. Pass mark 80%.",
    intro: "Practice questions for the CASA ATPL Air Law exam (AALW), written to the Part 61 MOS syllabus and current CASR, CAO and AIP. Every question comes with a full explanation and a CASA reference. Pass mark 80%.",
    question: {
      question: "The minimum age requirement for the grant of an Air Transport Pilot Licence (Aeroplane) under CASR Part 61 is:",
      options: [
        "18 years",
        "21 years",
        "19 years",
        "20 years",
      ],
      correct: 1,
      explanation: "Under CASR Part 61.645, an applicant for an ATPL (Aeroplane) must be at least 21 years of age. This is higher than the CPL requirement of 18 years, reflecting the increased responsibility and multi-crew operations associated with the ATPL.",
      reference: "CASR Part 61.645",
    },
  },
  {
    slug: "irex",
    code: "IREX",
    licence: "IREX",
    exam: "Instrument Rating",
    plan: "price_1UDInpCdMFoMcdWhwvavh1ks",
    passMark: 70,
    title: "IREX practice questions",
    description: "Practice questions for the CASA Instrument Rating Exam (IREX), written to the Part 61 MOS syllabus with full explanations and CASA references. Pass mark 70%.",
    intro: "Practice questions for the CASA Instrument Rating Exam (IREX), written to the Part 61 MOS syllabus and current AIP and CASR. Every question comes with a full explanation and a CASA reference. Pass mark 70%.",
    question: {
      question: "The instrument rating proficiency check must be completed:",
      options: [
        "Every 3 years",
        "Every 2 years",
        "Every 6 months",
        "Every 12 months",
      ],
      correct: 3,
      explanation: "An instrument rating proficiency check (IRPC) must be completed at least every 12 months to maintain the privileges of the instrument rating. The check covers instrument flying, approaches, and emergency procedures in the aircraft category.",
      reference: "CASR Part 61 MOS Schedule 3 — IREX 2.1.2",
    },
  },
]

export function getPractice(slug: string): PracticeEntry | undefined {
  return PRACTICE.find((p) => p.slug === slug)
}
