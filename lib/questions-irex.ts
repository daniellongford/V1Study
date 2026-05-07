export const irexQuestions: {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  reference?: string;
}[] = [

{
  question: 'An instrument rating allows the holder to:',
  options: [
    'A. Fly as pilot in command of any aircraft type in any weather conditions and all required documents are carried',
    'B. Fly as pilot in command under the Instrument Flight Rules (IFR) in accordance with the privileges and endorsements on the licence',
    'C. Fly as pilot in command in IMC without any additional endorsements and all required documents are carried',
    'D. Carry passengers in IMC on a PPL without restriction and all required documents are carried'
  ],
  correct: 1,
  explanation: 'An instrument rating permits the holder to fly as PIC under IFR, subject to any aircraft type and operational endorsements on the licence. The rating does not permit flight in any aircraft type — the pilot must hold the appropriate type endorsement. Operations are subject to recency and proficiency check requirements.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.1'
},

{
  question: 'The instrument rating proficiency check must be completed:',
  options: [
    'A. Every 3 years',
    'B. Every 2 years',
    'C. Every 6 months',
    'D. Every 12 months'
  ],
  correct: 3,
  explanation: 'An instrument rating proficiency check (IRPC) must be completed at least every 12 months to maintain the privileges of the instrument rating. The check covers instrument flying, approaches, and emergency procedures in the aircraft category.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2'
},

{
  question: 'The recent experience requirements for exercising instrument rating privileges include:',
  options: [
    'A. 3 instrument approaches in the last 90 days in the relevant aircraft category',
    'B. 1 hour of actual or simulated instrument flight in the last 90 days',
    'C. 5 hours of instrument flight in the last 6 months',
    'D. 2 instrument approaches and 1 hour of instrument flight in the last 90 days'
  ],
  correct: 0,
  explanation: 'To exercise instrument rating privileges, a pilot must have completed at least 3 instrument approaches in the preceding 90 days in the relevant aircraft category (actual IMC or simulated with a safety pilot or in an approved flight simulator).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2'
},

{
  question: 'The documents that must be carried on an IFR flight include:',
  options: [
    'A. Pilot licence and aircraft logbook only only if the destination TAF covers the arrival window',
    'B. Certificate of registration, C of A, maintenance release, radio licence, IFR flight plan copy',
    'C. Certificate of registration and maintenance release only only if the destination TAF covers the arrival window',
    'D. IFR clearance printout and pilot licence only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'An IFR flight must carry: Certificate of Registration, Certificate of Airworthiness, current Maintenance Release, radio station licence, and current instrument approach charts for the destination and nominated alternate. The pilot must also carry their licence and medical certificate.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.2.1'
},

{
  question: 'When conducting an IFR flight, the pilot must obtain an airways clearance:',
  options: [
    'A. Before departure — a clearance must be obtained before commencing any IFR flight in controlled or uncontrolled airspace',
    'B. Only when entering Class C airspace and all required documents are carried',
    'C. Before entering controlled airspace and before commencing the IFR flight in Class G',
    'D. Only when flying above FL180 provided weather is above published minima'
  ],
  correct: 0,
  explanation: 'An IFR clearance must be obtained before commencing an IFR flight. In controlled airspace, ATC issues the clearance and provides separation. In Class G (uncontrolled) airspace, the pilot must obtain an airways clearance via radio before commencing IFR and must comply with IFR procedures throughout.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'The standard radio phraseology for requesting an IFR clearance before departure is:',
  options: [
    'A. "[Station], [callsign], [aircraft type], [departure aerodrome], [destination], [cruising level], request airways clearance"',
    'B. "[Station], [callsign], request IFR clearance to [destination]"',
    'C. "[Station], [callsign], [aircraft type], ready for departure"',
    'D. "[Station], [callsign], requesting clearance, standing by"'
  ],
  correct: 0,
  explanation: 'A standard clearance request includes: station name, callsign, aircraft type, departure aerodrome, destination, requested cruising level, and the words "request airways clearance." This gives ATC all the information needed to process the request efficiently.',
  reference: 'AIP ENR 1.1 — IFR Communications'
},

{
  question: 'In the event of radio communication failure in controlled airspace, the pilot should:',
  options: [
    'A. Land immediately at the nearest aerodrome only if the destination TAF covers the arrival window',
    'B. Squawk 7700 and return to departure aerodrome only if the destination TAF covers the arrival window',
    'C. Descend to VMC and continue visually only if the destination TAF covers the arrival window',
    'D. Squawk 7600, continue on the last ATC clearance or filed flight plan, attempt to re-establish communications'
  ],
  correct: 3,
  explanation: 'On radio failure: (1) Squawk 7600 to alert ATC; (2) Continue on the last clearance received or the filed flight plan if no clearance was received; (3) Attempt to re-establish contact on all available frequencies including 121.5 MHz; (4) Proceed to destination and conduct the approach in accordance with AIP lost communications procedures. ATC will clear the airspace.',
  reference: 'AIP ENR 1.1 — Lost Communications Procedures'
},

{
  question: 'The IFR lost communications procedure for descent and approach specifies:',
  options: [
    'A. Begin descent at the ETA filed in the flight plan and all required documents are carried',
    'B. Begin descent at the later of: the ETA at the destination as last notified to ATC, or the ETA derived from the current flight plan',
    'C. Begin descent immediately upon losing communications and all required documents are carried',
    'D. Hold at the destination navaid at LSALT until communications are restored and all required documents are carried'
  ],
  correct: 1,
  explanation: 'AIP lost communications: the pilot commences descent at the later of: (1) the ETA at the destination or holding fix as last notified to ATC; or (2) the ETA derived from the filed flight plan plus any delay since departure. This ensures ATC can predict when the aircraft will enter the approach sequence and clear the airspace accordingly.',
  reference: 'AIP ENR 1.1 — Lost Communications'
},

{
  question: 'On an instrument approach chart, the symbol "IAF" means:',
  options: [
    'A. Initial Approach Fix — the point at which the initial approach segment begins',
    'B. Instrument Approach Fix — the final approach waypoint',
    'C. Instrument Arrival Fix — the transition from en-route to approach',
    'D. IFR Approach Fix — any waypoint on an instrument approach'
  ],
  correct: 0,
  explanation: 'IAF (Initial Approach Fix) is the point that defines the beginning of the initial approach segment. The aircraft transitions from the en-route phase to the approach phase at the IAF. Multiple IAFs may be published to facilitate arrivals from different directions.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The "FAF" on an instrument approach chart is the:',
  options: [
    'A. First Arrival Fix — the holding pattern entry point',
    'B. Feeder Approach Fix — the transition from holding to approach',
    'C. Final Approach Fix — the point at which the final approach descent begins on a non-precision approach',
    'D. Final Altitude Fix — the point at which MDA is reached'
  ],
  correct: 2,
  explanation: 'FAF (Final Approach Fix) is the point at which the final approach segment begins for a non-precision approach (NDB, VOR, GNSS 2D). It defines where the final descent to MDA commences. On a precision approach (ILS), the glideslope intercept point serves a similar function but is not formally called the FAF.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The difference between a 2D and a 3D instrument approach operation is:',
  options: [
    'A. 2D approaches are flown with autopilot; 3D approaches require manual flying',
    'B. 2D approaches are for piston aircraft; 3D approaches are for turbine aircraft',
    'C. 2D approaches provide only lateral guidance; 3D approaches provide both lateral and vertical guidance to the runway',
    'D. 2D approaches require DME; 3D approaches use ILS only and all required documents are carried'
  ],
  correct: 2,
  explanation: '2D instrument approach operations provide lateral guidance only (NDB, VOR, GNSS/LNAV). The pilot must manage vertical profile manually to the MDA. 3D instrument approach operations provide both lateral AND vertical guidance (ILS, GLS, GNSS/LPV, RNP AR). A decision altitude (DA) is used rather than MDA. 3D approaches generally have lower minima.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.7'
},

{
  question: 'The "MDA" (Minimum Descent Altitude) on a non-precision approach is:',
  options: [
    'A. The altitude below which the aircraft must not descend unless the runway is in sight and all required documents are carried',
    'B. The altitude at which the pilot decides to land or go around — the same as DA and all required documents are carried',
    'C. The minimum safe altitude for the approach segment provided the pilot holds a current medical certificate',
    'D. The lowest altitude to which a pilot may descend on final approach and, if visual references are not established, the pilot must execute a missed approach'
  ],
  correct: 3,
  explanation: 'MDA is the minimum altitude on a 2D (non-precision) approach. The pilot descends to MDA and then flies level (the "step-down") while looking for visual reference. If the required visual reference is not established at or before the missed approach point (MAP), a missed approach must be executed. Unlike DA, the pilot flies to MDA first, THEN assesses visual reference.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.8'
},

{
  question: 'The "DA" (Decision Altitude) on a precision or APV approach is:',
  options: [
    'A. The altitude at which the pilot must decide to land or go around — if the required visual references are not established at DA, an immediate missed approach is initiated',
    'B. The same as MDA — the pilot levels off and looks for the runway as long as fuel reserves are above minimum requirements',
    'C. The altitude published on the chart as the lowest usable altitude for the approach and all required documents are carried',
    'D. The altitude derived by subtracting the decision height from the aerodrome elevation and all required documents are carried'
  ],
  correct: 0,
  explanation: 'DA (Decision Altitude) is used on 3D approaches (ILS, LPV, RNP AR). At DA, the pilot must have the required visual references established to continue below DA. If not, an immediate missed approach is initiated — the aircraft must not descend below DA while assessing visual reference. This differs from MDA where the pilot can fly level at MDA while looking.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.8'
},

{
  question: 'Regarding temperature correction to altimeter readings on instrument approaches:',
  options: [
    'A. Temperature has no effect on altimeter readings — the QNH corrects for all errors and all required documents are carried',
    'B. In temperatures below ISA, the true altitude is lower than the indicated altitude — altimeter corrections must be applied to maintain obstacle clearance on cold days',
    'C. In temperatures above ISA, the true altitude is lower than indicated when the aircraft has a valid maintenance release',
    'D. Temperature corrections only apply above FL100 only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'The altimeter is calibrated for ISA temperature. In temperatures BELOW ISA, air is denser and pressure levels are closer together — the true altitude is LOWER than indicated. This is critical on instrument approaches: "from high to low, look out below." CASA requires temperature corrections on approaches when temperature is significantly below ISA — particularly for approach minima, step-down fixes, and missed approach altitudes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'When conducting a 3D approach in temperatures significantly below ISA, the pilot must:',
  options: [
    'A. Subtract the temperature correction — cold temperatures mean you fly lower than published',
    'B. No corrections are required for 3D approaches — the glidepath guidance compensates automatically',
    'C. Contact ATC for a corrected approach clearance',
    'D. Add the temperature correction to the published DA to obtain the corrected DA to fly'
  ],
  correct: 3,
  explanation: 'For 3D approaches in cold temperatures: the published DA is based on ISA. In temperatures below ISA, the pilot must ADD the temperature correction to the published DA. This ensures the aircraft maintains the required obstacle clearance. The correction increases the altitude flown on the approach — the pilot initiates missed approach at the corrected (higher) DA.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.10 / AIP ENR 1.7'
},

{
  question: 'An IFR flight plan submitted to ATC is valid for:',
  options: [
    'A. 2 hours from the proposed departure time (EOBT) — if not departed, the plan must be re-filed or cancelled',
    'B. 24 hours from the proposed departure time and all required documents are carried',
    'C. Until the pilot cancels it and all required documents are carried',
    'D. 30 minutes after the proposed departure time and all required documents are carried'
  ],
  correct: 0,
  explanation: 'A filed IFR flight plan is valid for 2 hours after the estimated off-blocks time (EOBT). If the flight has not departed within 2 hours, the plan lapses and must be re-filed. This prevents ATC from holding airspace for aircraft that have not departed.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.11 / AIP ENR 1.10'
},

{
  question: 'The pilot\\\'s obligation for cancellation of SAR (search and rescue) on an IFR flight is:',
  options: [
    'A. SAR cancellation is ATC\'s responsibility — pilots have no obligation',
    'B. The pilot must cancel SAR within 1 hour of landing regardless of conditions',
    'C. SAR is automatically cancelled when the aircraft lands at the destination',
    'D. The pilot must close the IFR flight plan on arrival by advising ATC — failure to do so will result in SAR action commencing at the overdue time'
  ],
  correct: 3,
  explanation: 'On IFR flights, ATC acts as the SAR monitoring agency. The pilot must close the IFR flight plan on arrival (by advising ATC or closing the flight plan with JRCC/FSS). If the aircraft does not arrive and the plan is not closed, SAR action commences at the overdue time. This is a pilot legal obligation.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.12 / AIP ENR 1.10'
},

{
  question: 'A missed approach must be initiated when:',
  options: [
    'A. The aircraft descends below the published MDA only if the destination TAF covers the arrival window',
    'B. Any of the following: reaching DA without required visual reference; reaching MAP on a non-precision approach without required visual reference',
    'C. Visibility is below 600 m at any point on the approach only if the destination TAF covers the arrival window',
    'D. The ILS glideslope deviates more than half scale only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'A missed approach must be initiated when: (1) the DA is reached without establishing required visual reference on a 3D approach; (2) the MAP is reached without required visual reference on a 2D approach; (3) ATC instructs a go-around; (4) the aircraft is not in a position to make a safe landing; or (5) any other factor creates doubt about a safe landing. Initiating a missed approach is always the safe option when in doubt.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.13'
},

{
  question: 'The "alternate aerodrome weather minimum" for a destination alternate is:',
  options: [
    'A. The same as the published approach minima at the alternate when the aircraft has a valid maintenance release',
    'B. The published approach minima for the alternate plus 300 ft and 1,500 m visibility — ensuring a reasonable probability of completing the approach on arrival',
    'C. A ceiling of at least 1,500 ft and visibility of 5 km at the alternate and all required documents are carried',
    'D. There are no specific alternate weather minima — the pilot uses discretion and all required documents are carried'
  ],
  correct: 1,
  explanation: 'Alternate aerodrome weather minima = the published approach minima for the best available instrument approach at the alternate + 300 ft ceiling and 1,500 m visibility. This buffer accounts for weather uncertainty during the transit time from destination to alternate. The forecast weather at the alternate at ETA must meet or exceed these alternate minima.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.14 / AIP ENR 1.1'
},

{
  question: 'IFR separation standards from other IFR aircraft are provided by:',
  options: [
    'A. The pilot — IFR aircraft must maintain their own separation from all traffic',
    'B. ATC in controlled airspace — ATC is responsible for IFR-to-IFR separation',
    'C. Only above FL180 — below FL180 pilots maintain their own separation',
    'D. The TCAS system — pilots follow TCAS resolution advisories for all IFR separation'
  ],
  correct: 1,
  explanation: 'ATC provides separation between IFR aircraft in controlled airspace. In Class G (uncontrolled) airspace, IFR aircraft receive no separation service — the pilot is responsible for collision avoidance. In controlled airspace (Class A, C, D, E), ATC maintains IFR-to-IFR separation and in Class C also separates IFR from VFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.15'
},

{
  question: 'The "Pilot Activated Lighting" (PAL) system at non-controlled aerodromes is activated by:',
  options: [
    'A. Calling ATC to switch on the lights only if the destination TAF covers the arrival window',
    'B. The aerodrome operator when an IFR aircraft is inbound and all required documents are carried',
    'C. A dedicated PAL frequency published in ERSA when the aircraft has a valid maintenance release',
    'D. Transmitting a specified number of times on the CTAF frequency within a defined time — the number of transmissions selects the intensity level'
  ],
  correct: 3,
  explanation: 'PAL (Pilot Activated Lighting): the pilot transmits the specified number of times on the published CTAF frequency within 5 seconds. Typically: 5 transmissions = high intensity, 3 = medium, 1 = low. The lights activate for approximately 15 minutes. PAL details including frequency and activation sequence are published in ERSA for each aerodrome.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.16 / AIP ENR 1.14'
},

{
  question: 'Visual Approach Slope Indicator (VASI) provides:',
  options: [
    'A. Lateral guidance to the runway centreline and all required documents are carried',
    'B. Distance information to the runway threshold and all required documents are carried',
    'C. A visual glidepath reference — typically 2 bars providing on-slope (white/white=high, red/white=on slope, red/red=low indication)',
    'D. Touchdown zone marking information as approved by CASA under current regulations'
  ],
  correct: 2,
  explanation: 'VASI provides visual approach slope guidance. Standard 2-bar VASI: all white = too high; red over white = on slope (about 3°); all red = too low. PAPI (Precision Approach Path Indicator) works similarly: 4 whites = high; 3 white 1 red = slightly high; 2 white 2 red = on slope; 1 white 3 red = slightly low; 4 red = low. These supplement but do not replace instrument approaches.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.17'
},

{
  question: 'A SID (Standard Instrument Departure) procedure:',
  options: [
    'A. Is optional — pilots may choose to fly their own departure route only if the destination TAF covers the arrival window',
    'B. Must be flown as published unless ATC issues a different clearance — it provides obstacle clearance and standardised routing from the aerodrome into the en-route structure',
    'C. Only applies to jet aircraft above 5700 kg only if the destination TAF covers the arrival window',
    'D. Is a noise abatement procedure that may be declined if operationally inconvenient with appropriate ATC clearance obtained'
  ],
  correct: 1,
  explanation: 'A SID must be flown as published unless ATC specifically amends the clearance. SIDs provide: guaranteed obstacle clearance (typically 35 ft/nm gradient minimum), traffic flow management, and standardised routing. When cleared for a SID, the pilot must comply with all altitude constraints, speed limits, and routing unless amended by ATC.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / AIP ENR 1.1'
},

{
  question: 'A STAR (Standard Terminal Arrival Route):',
  options: [
    'A. Is an optional procedure used only when VMC exists only if the destination TAF covers the arrival window',
    'B. Must always be followed all the way to touchdown only if the destination TAF covers the arrival window',
    'C. Is only used at international aerodromes only if the destination TAF covers the arrival window',
    'D. Provides a standardised routing from the en-route structure to the initial approach fix'
  ],
  correct: 3,
  explanation: 'A STAR is a published ATC procedure linking the en-route structure to the IAF of an instrument approach. When cleared for a STAR, the pilot must comply with all published altitude constraints, speed limits, and routing. ATC may amend the STAR (radar vectors, "direct to" waypoints). STARs reduce RT workload and provide predictable traffic flow.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / AIP ENR 1.1'
},

{
  question: 'The holding pattern entry procedure depends on:',
  options: [
    'A. The aircraft\'s heading relative to the holding fix on arrival — determining whether to use direct, teardrop, or parallel entry to remain within the protected holding airspace',
    'B. Aircraft performance category only — entry type varies by aircraft size',
    'C. The pilot\'s preference for the most comfortable turn direction',
    'D. ATC instruction issued individually for each holding entry'
  ],
  correct: 0,
  explanation: 'ICAO standard holding entries depend on the aircraft heading on arrival at the holding fix relative to the holding pattern protected airspace: Direct entry (sector 1): fly straight to the fix and turn onto outbound; Parallel entry (sector 2): fly outbound parallel, then turn back to the fix; Offset/teardrop entry (sector 3): turn 30° towards the inbound track, fly for approximately 1 minute, then turn to intercept inbound. The sectors are defined relative to the inbound track.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / ICAO PANS-OPS'
},

{
  question: 'The transponder code for radio failure is:',
  options: [
    'A. 7700',
    'B. 7500',
    'C. 2000',
    'D. 7600'
  ],
  correct: 3,
  explanation: '7600 is the transponder code for radio failure (communications failure/NORDO). 7700 = emergency; 7500 = unlawful interference/hijack; 2000 = entering controlled airspace without a discrete squawk code. Squawking 7600 alerts ATC on radar that the aircraft has lost communications.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.19 / AIP ENR 1.6'
},

{
  question: 'On the ground at a controlled aerodrome, the use of transponder radar is:',
  options: [
    'A. Unrestricted — ground radar can always be used provided the pilot holds a current medical certificate',
    'B. Prohibited entirely at all aerodromes only if the destination TAF covers the arrival window',
    'C. Limited — radar may not be used for approach control purposes while on the ground at a controlled aerodrome, though surface movement radar is permitted',
    'D. At pilot discretion — radar use is an ATC decision only as approved by CASA under current regulations'
  ],
  correct: 2,
  explanation: 'CASR limits the use of radar while an aircraft is on the ground at a controlled aerodrome for approach control purposes. Surface movement radar (SMR) may be used for ground movement. Approach radar (ASR, PAR) is used for airborne aircraft. This prevents ground equipment interference with approach radar systems.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.20'
},

{
  question: 'The reporting requirement for an IFR aircraft at the boundary of controlled airspace or at a compulsory reporting point is:',
  options: [
    'A. Reporting is optional if radar identified only if the destination TAF covers the arrival window',
    'B. The pilot must report position, level, and estimated time to the next compulsory reporting point',
    'C. Only required when the pilot changes altitude only if the destination TAF covers the arrival window',
    'D. Required only when leaving controlled airspace only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Compulsory reporting points (solid triangle on charts) require position reports from all IFR aircraft: callsign, position, time, level, and next reporting point ETA. On-request points (open triangle) only need a report when ATC specifically requests one. In radar-identified environments, ATC may suspend compulsory reports.',
  reference: 'AIP ENR 1.6 — Position Reporting'
},

{
  question: 'When must an IFR aircraft report a significant change to its estimated arrival time?',
  options: [
    'A. Any change at all must be reported immediately and all required documents are carried',
    'B. When the estimated arrival at a reporting point differs from the filed plan by more than 3 minutes',
    'C. When the ETA differs by more than 5 minutes from the filed estimate',
    'D. ETA changes only need to be reported if the destination changes'
  ],
  correct: 1,
  explanation: 'AIP requires IFR aircraft to notify ATC of changes to ETAs at waypoints when the revised ETA differs by more than 3 minutes from the last notified ETA. This allows ATC to maintain accurate separation and sequencing. In high-density airspace, even smaller variations may require notification.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.4 / AIP ENR 1.6'
},

{
  question: 'At a non-controlled aerodrome, the IFR reporting requirements include:',
  options: [
    'A. No specific reporting requirements — Class G has no ATC and all required documents are carried',
    'B. The pilot must make position broadcasts on CTAF and report arrival to FSS or JRCC to close the flight plan',
    'C. Reporting to the nearest controlled aerodrome only and all required documents are carried',
    'D. Self-announce only when other traffic is heard on frequency'
  ],
  correct: 1,
  explanation: 'IFR operations at non-controlled aerodromes: the pilot makes CTAF broadcasts for traffic awareness, and must report arrival and close the IFR flight plan with FSS (Flight Service Station) or JRCC to prevent SAR action. All IFR procedures (approach minimums, missed approach) apply regardless of the lack of ATC.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.6 / AIP ENR 1.1'
},

{
  question: 'The minimum meteorological conditions for IFR take-off are:',
  options: [
    'A. Any conditions — there are no take-off minima under IFR and all required documents are carried',
    'B. Visibility must be at least the published take-off minima for the aerodrome, or 800 m RVR if no minima are published',
    'C. Ceiling above 200 ft and visibility above 400 m RVR and all required documents are carried',
    'D. The same as the landing minima at the departure aerodrome and all required documents are carried'
  ],
  correct: 1,
  explanation: 'IFR take-off minima: the visibility must meet the published take-off minima for the aerodrome. If no take-off minima are published, a default of 800 m RVR applies. Take-off below minima is not permitted as the pilot must have sufficient visibility to maintain directional control on the runway and clear obstacles in the event of a rejected take-off or engine failure after take-off.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.4.1 / AIP ENR 1.1'
},

{
  question: 'The "noise abatement procedure" at an aerodrome:',
  options: [
    'A. Is optional — pilot may use any departure track for safety reasons at any time',
    'B. Must be followed as published unless safety requires deviation — the pilot\'s primary obligation is always safety, but noise abatement procedures should otherwise be complied with',
    'C. Applies only to commercial aircraft — general aviation is exempt from noise abatement procedures',
    'D. Is an ATC instruction that overrides all other departure and safety requirements'
  ],
  correct: 1,
  explanation: 'Noise abatement procedures must be followed as published. However, safety always takes precedence — if following the noise procedure would compromise safety (e.g., engine failure, severe turbulence), the pilot may deviate. When deviating, the pilot assumes responsibility for obstacle clearance and must advise ATC. Published procedures are designed with appropriate safety margins.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / AIP ENR 1.1'
},

{
  question: 'A "circling approach" is required when:',
  options: [
    'A. The aircraft is too high on final approach only if the destination TAF covers the arrival window',
    'B. Visibility is below the straight-in minima only if the destination TAF covers the arrival window',
    'C. The final approach track of the instrument approach is not aligned within 30° of the runway in use, or when the pilot needs to land on a',
    'D. ATC requires a 360° orbit for sequencing only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Circling is required when the instrument approach does not align with the runway to be used — the approach final track differs by more than 30° from the runway heading, or the pilot needs to land on a different runway. The pilot descends to MCA (Minimum Circling Altitude), acquires visual reference, and manoeuvres visually to land. Higher minima apply for circling than straight-in approaches.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.4 / AIP ENR 1.5'
},

{
  question: 'The speed limit below 10,000 ft AMSL for IFR operations in Australian airspace is:',
  options: [
    'A. 250 kt IAS',
    'B. 200 kt IAS',
    'C. 300 kt IAS',
    'D. No speed restriction below 10,000 ft for IFR operations'
  ],
  correct: 0,
  explanation: 'All aircraft in Australian airspace below 10,000 ft AMSL must not exceed 250 kt IAS, unless specific authorisation is obtained from ATC. This applies to IFR operations as well as VFR. The restriction improves safety margins for traffic conflict avoidance and TCAS effectiveness at lower altitudes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.6'
},

{
  question: 'The maximum speed in a holding pattern below 14,000 ft in Australian airspace is:',
  options: [
    'A. 200 kt IAS',
    'B. 250 kt IAS',
    'C. 230 kt IAS',
    'D. No specific holding speed — pilots use best holding speed for aircraft type'
  ],
  correct: 2,
  explanation: 'Australian AIP holding speed limits: at or below 14,000 ft — maximum 230 kt IAS; above 14,000 ft to 20,000 ft — 240 kt IAS; above 20,000 ft — 265 kt IAS (or Mach 0.83). Pilots should aim to fly at the published holding speed for their aircraft category. Exceeding holding speeds expands the protected airspace and may compromise separation.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.5'
},

{
  question: 'The maximum speed during an instrument approach procedure (unless otherwise specified) is:',
  options: [
    'A. Aircraft category dependent — Category A: 100 kt, Category B: 135 kt, Category C: 180 kt on final',
    'B. 250 kt IAS at all stages and all required documents are carried',
    'C. Initial segment: no specific limit; intermediate/final: 185 kt IAS; missed approach: 185 kt IAS',
    'D. 140 kt IAS throughout the approach and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Instrument approach speed limits are aircraft category dependent. Maximum speeds on final approach: Category A (Vat <91 kt): 100 kt; Category B (91-120 kt): 135 kt; Category C (121-140 kt): 180 kt; Category D (141-165 kt): 185 kt. These limits ensure aircraft remain within the protected airspace of the approach procedure design. Slower speeds improve obstacle clearance margins.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.5'
},

{
  question: 'ATC speed restrictions during approach are cancelled when:',
  options: [
    'A. The aircraft reaches the FAF and all required documents are carried',
    'B. The pilot decides the restriction is no longer needed',
    'C. Speed restrictions are never cancelled — they apply until landing',
    'D. ATC specifically cancels the restriction, or the aircraft is transferred to tower frequency'
  ],
  correct: 3,
  explanation: 'ATC-issued speed restrictions remain in effect until ATC cancels them or the aircraft is transferred to a different frequency. When ATC says "cancel speed restrictions," the pilot reverts to normal approach speed. Speed restrictions for procedural separation must be strictly adhered to — unilateral pilot deviation from an ATC speed restriction without permission is not permitted.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.6'
},

{
  question: '"LSALT" (Lowest Safe Altitude) for an IFR route is defined as:',
  options: [
    'A. 1,000 ft above the highest obstacle within the relevant protected area (typically 5 nm each side of track in Australia)',
    'B. 1,000 ft above all terrain and obstacles within 25 nm of the planned track',
    'C. The altitude at which the aircraft is clear of cloud and all required documents are carried',
    'D. The minimum instrument approach altitude for the destination and all required documents are carried'
  ],
  correct: 0,
  explanation: 'LSALT provides 1,000 ft clearance above all terrain and obstacles within the relevant protected area of the route. For IFR en-route in Australia, the protected area is typically 5 nm each side of the track centreline. LSALT is the minimum altitude for en-route IFR flight to ensure safe terrain clearance. In high terrain areas, published LSALTs may be found on ERC charts.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.1 / AIP ENR 1.7'
},

{
  question: 'To calculate LSALT for a route not specified in AIP charts, the pilot must:',
  options: [
    'A. Use the QNH from the departure aerodrome plus 1,000 ft provided the pilot holds a current medical certificate',
    'B. Identify the highest obstacle within 5 nm each side of the planned track (or the relevant protected area) and add 1,000 ft — rounding up to the next 100 ft',
    'C. Contact ATC for an assigned IFR altitude only if the destination TAF covers the arrival window',
    'D. Use the ERSA highest grid LSALT for the quadrant only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Pilot-calculated LSALT: identify the highest obstacle (terrain or man-made) within 5 nm each side of the planned track, add 1,000 ft, and round up to the next 100 ft. In mountainous areas or areas with obstacles exceeding 5,000 ft AMSL, additional clearance may be required. The calculated LSALT must then be checked against any published LSALTs for the route.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.1 / AIP ENR 1.7'
},

{
  question: 'Descent below LSALT under IFR is only permitted when:',
  options: [
    'A. VMC exists below the LSALT only if the destination TAF covers the arrival window',
    'B. Established on an instrument approach procedure, has received an ATC clearance to descend, is in visual contact with the destination aerodrome, or other specific AIP conditions are met',
    'C. The aircraft is radar identified and ATC has issued a descent clearance below LSALT provided the pilot holds a current medical certificate',
    'D. The pilot determines it is safe based on available terrain clearance only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Descent below LSALT under IFR is only permitted when one of the following applies: (1) established on a published instrument approach procedure; (2) ATC has issued a specific descent clearance; (3) the aerodrome is in sight (day only, when permitted by AIP); (4) other specific conditions in AIP are met. Descent below LSALT without authorisation is a serious violation that removes terrain clearance protection.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.6 / AIP ENR 1.7'
},

{
  question: 'The "RNP" (Required Navigation Performance) value specifies:',
  options: [
    'A. The maximum acceptable cross-track error in nautical miles with a 95% probability provided weather is above published minima',
    'B. The minimum GPS accuracy required for IFR flight only if the destination TAF covers the arrival window',
    'C. The maximum deviation from the centreline on an instrument approach only if the destination TAF covers the arrival window',
    'D. The navigation accuracy required for a specific route or procedure, expressed as a distance in nautical miles within which the aircraft must remain for 95% of the flight time'
  ],
  correct: 3,
  explanation: 'RNP is a statement of navigation performance — it defines the accuracy AND integrity monitoring requirement for a procedure or route. RNP X means the aircraft must remain within X nautical miles of centreline for 95% of the time, AND the navigation system must alert the crew if this accuracy cannot be assured. RNP 10 (en-route oceanic), RNP 1 (terminal), RNP 0.3 or less (approaches). Unlike RNAV, RNP requires on-board performance monitoring.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.1.2 / AIP ENR 1.7'
},

{
  question: 'The "initial approach fix" (IAF) to "final approach fix" (FAF) segment is called:',
  options: [
    'A. The final approach segment',
    'B. The intermediate approach segment',
    'C. The initial approach segment',
    'D. The missed approach segment'
  ],
  correct: 1,
  explanation: 'Instrument approach segments: Initial approach (from IAF to IF or FAF); Intermediate approach (from IF to FAF — aligns aircraft with final course, slows and configures aircraft); Final approach (from FAF to MDA/DA or missed approach point); Missed approach (from MAP to holding or other clearance). The intermediate segment is the "funnel" that aligns the aircraft with the final approach course.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.3 / ICAO PANS-OPS'
},

{
  question: 'The "PEC" (Pilot Equipment Correction) when applied to a DA gives:',
  options: [
    'A. A higher DA to account for instrument error only',
    'B. The actual operational minimum — the DA adjusted for specific aircraft instrument errors, giving the altitude the crew uses rather than the published procedure DA',
    'C. A lower DA to account for more accurate avionics equipment on board',
    'D. An additional safety margin added by the operator above the published procedure DA'
  ],
  correct: 1,
  explanation: 'PEC (Pilot Equipment Correction) accounts for the difference between the pilot\\\'s altimeter reading and the approach chart datum. When applied to the published DA, it gives the AOM (Aircraft Operations Minimum) — what the pilot actually flies. PEC may be zero, positive, or negative depending on the altimeter calibration. AOM = DA + PEC. This ensures the correct obstacle clearance is maintained.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.5 / AIP ENR 1.5'
},

{
  question: 'The normal gradient for the final approach segment of an instrument approach is:',
  options: [
    'A. 2.5° (approximately 4.4% or 265 ft/nm)',
    'B. 3° (approximately 5.2% or 318 ft/nm)',
    'C. 3.5° (approximately 6.1% or 370 ft/nm)',
    'D. The gradient is not standardised — it varies by procedure design'
  ],
  correct: 1,
  explanation: 'The standard final approach gradient is 5.2% (approximately 3° or 318 ft/nm). ILS glideslopes are typically set at 3°. This gradient is designed to provide safe obstacle clearance while remaining within normal aircraft performance. Steeper gradients (up to 6.5%) may be published where terrain or obstacles require it. Non-precision approach descent angles are published on the approach chart.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.6 / ICAO PANS-OPS'
},

{
  question: 'Tracking tolerance requirements when utilising ground-based navigation aids under IFR are:',
  options: [
    'A. ±5 nm for en-route, ±2 nm for terminal as approved by CASA under current regulations',
    'B. ±1 nm at all times only if the destination TAF covers the arrival window',
    'C. There are no prescribed tracking tolerances — pilots use best judgment and all required documents are carried',
    'D. Defined in AIP for each navigation aid type — VOR: ±5° (approximately ±5 nm at 60 nm); NDB: ±5°; GPS: ±2 nm en-route, ±1 nm terminal'
  ],
  correct: 3,
  explanation: 'AIP tracking tolerances for IFR navigation: VOR ±5° (equates to approximately ±5 nm at 60 nm from station); NDB ±5°; GNSS en-route ±5 nm (RNP 10) or better; GNSS terminal ±1 nm (RNP 1). Pilots must maintain within these tolerances — exceeding them requires immediate corrective action and may compromise separation from obstacles or controlled airspace boundaries.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.7 / AIP ENR 1.7'
},

{
  question: 'The position fixing requirements under IFR in Australian airspace include:',
  options: [
    'A. Fix at least every 30 minutes using any available navigation aid and all required documents are carried',
    'B. Fixes at all compulsory reporting points, and at intervals not exceeding the AIP-specified interval for the navigation aid type being used',
    'C. Continuous GPS monitoring is the only acceptable position fixing method and all required documents are carried',
    'D. Position fixing is only required in controlled airspace and all required documents are carried'
  ],
  correct: 1,
  explanation: 'IFR position fixing: the pilot must take fixes at all compulsory reporting points and at the intervals specified in AIP for the navigation type being used (e.g., NDB: maximum 60 nm or 60 minutes; VOR: at each station passage; GNSS: continuous). Regular fixes allow the pilot to detect navigation errors and correct track before safety is compromised.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.1 / AIP ENR 1.7'
},

{
  question: 'Aircraft performance category for IFR operations is determined by:',
  options: [
    'A. Aircraft MTOW only and all required documents are carried',
    'B. 1.3 × Vso (Vat) — the approach threshold speed at maximum certificated landing weight',
    'C. Maximum cruise speed and all required documents are carried',
    'D. Aircraft type as listed in the operations manual'
  ],
  correct: 1,
  explanation: 'Aircraft performance category = Vat = 1.3 × Vso at maximum certificated landing weight. Categories: A (<91 kt), B (91-120 kt), C (121-140 kt), D (141-165 kt), E (>165 kt). Category determines: approach speed limits, minimum circling radii, protected airspace sizes for approaches, and applicable minima. Most light training aircraft are Category A.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.2 / AIP ENR 1.5'
},

{
  question: 'The visual references required to continue below DA or past the MAP are:',
  options: [
    'A. The runway lights only only if the destination TAF covers the arrival window',
    'B. Any lights visible ahead of the aircraft only if the destination TAF covers the arrival window',
    'C. At least one of the following must be clearly visible: approach lights, runway threshold, touchdown zone, runway or runway markings, VASI/PAPI, or the runway itself',
    'D. The runway threshold and touchdown zone must both be visible provided the pilot holds a current medical certificate'
  ],
  correct: 2,
  explanation: 'Required visual references to continue below DA/past MAP: the pilot must be able to clearly identify at least one of the following: approach lighting system; runway threshold/threshold markings; threshold lights; runway end identifier lights (REIL); visual approach slope indicator; touchdown zone/markings/lights; runway/runway markings; runway lights. A vague impression of the runway environment is not sufficient.',
  reference: 'AIP ENR 1.5 — Instrument Approach Procedures'
},

{
  question: 'The freezing level in clear air is calculated using a lapse rate of:',
  options: [
    'A. 2°C per 1,000 ft',
    'B. 3°C per 1,000 ft',
    'C. 1.5°C per 1,000 ft',
    'D. 1°C per 1,000 ft'
  ],
  correct: 1,
  explanation: 'In clear air (dry adiabatic), temperature decreases at approximately 3°C per 1,000 ft. To find the freezing level: if OAT at the surface is +15°C, the freezing level is at 15 ÷ 3 = 5,000 ft. In cloud (moist adiabatic), the lapse rate is 1.5°C per 1,000 ft — lower than in clear air because condensation releases latent heat.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'The freezing level in cloud is calculated using a lapse rate of:',
  options: [
    'A. 3°C per 1,000 ft',
    'B. 1.5°C per 1,000 ft',
    'C. 2°C per 1,000 ft',
    'D. 1°C per 1,000 ft'
  ],
  correct: 1,
  explanation: 'In cloud, condensation releases latent heat, slowing the cooling rate. The moist adiabatic lapse rate is approximately 1.5°C per 1,000 ft. If the temperature at cloud base is 0°C, you will not encounter the freezing level within the cloud — it is already at 0°C at cloud base. Understanding this difference is critical for icing prediction in IFR operations.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'Given OAT at 2,000 ft of +12°C in clear air, the approximate freezing level is:',
  options: [
    'A. 6,000 ft',
    'B. 4,000 ft',
    'C. 8,000 ft',
    'D. 10,000 ft'
  ],
  correct: 0,
  explanation: 'Freezing level from 2,000 ft at +12°C in clear air (3°C/1,000 ft lapse rate): distance to reach 0°C = 12 ÷ 3 = 4,000 ft above current position. Freezing level = 2,000 + 4,000 = 6,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'Given temperature at cloud base (5,000 ft) of +6°C, the approximate freezing level within cloud is:',
  options: [
    'A. 9,000 ft',
    'B. 7,000 ft',
    'C. 8,000 ft',
    'D. 11,000 ft'
  ],
  correct: 0,
  explanation: 'Within cloud, lapse rate is 1.5°C per 1,000 ft. Distance to reach 0°C from +6°C = 6 ÷ 1.5 = 4,000 ft above cloud base. Freezing level = 5,000 + 4,000 = 9,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'The conditions most likely to produce severe airframe icing are:',
  options: [
    'A. Light drizzle at temperatures below −20°C only if the destination TAF covers the arrival window',
    'B. Any cloud at temperatures below −30°C where ice crystals are present and all required documents are carried',
    'C. Temperatures between −30°C and −40°C in cumulonimbus cloud when the aircraft has a valid maintenance release',
    'D. Temperatures between 0°C and −10°C in stratiform cloud with high liquid water content, or in freezing rain and freezing drizzle (supercooled large droplets)'
  ],
  correct: 3,
  explanation: 'Severe icing most likely in: 0°C to −10°C range in stratiform cloud with high liquid water content; freezing rain or freezing drizzle (supercooled large droplets — SLD) at any sub-zero temperature; heavy snow. Below −20°C, droplets tend to freeze before contact. Above −10°C, temperatures are borderline for ice formation. SLD icing is the most hazardous — large drops spread across the aerofoil beyond ice protection coverage.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Observation of cumulus clouds embedded in stratus (embedded CB) during IFR flight is significant because:',
  options: [
    'A. Embedded CBs are less hazardous than visible CBs only if the destination TAF covers the arrival window',
    'B. Embedded CBs only produce light turbulence and moderate icing only if the destination TAF covers the arrival window',
    'C. Embedded CBs are detected by the GNSS system as weather obstacles only if the destination TAF covers the arrival window',
    'D. Embedded CBs cannot be detected visually in IMC — they create severe turbulence, icing, hail'
  ],
  correct: 3,
  explanation: 'Embedded CBs are cumulonimbus hidden within layered cloud — invisible in IMC. Without weather radar, the IFR pilot has no warning before penetrating the cell. All CB hazards apply: severe turbulence (structural damage risk), severe icing, hail, lightning, strong updrafts and downdrafts. Weather radar is essential for IFR operations in convective areas.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Clear Air Turbulence (CAT) is most commonly found:',
  options: [
    'A. Near the tropopause in the vicinity of the jet stream, characterised by strong wind shear — it occurs in clear air without visual warning',
    'B. In cumulus cloud at altitudes below 10,000 ft provided weather is above published minima',
    'C. Only over mountainous terrain at any altitude provided weather is above published minima',
    'D. In the lower levels of the atmosphere below 5,000 ft and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Clear Air Turbulence (CAT) occurs most frequently near the jet stream at upper levels (FL250–FL450), associated with strong horizontal and vertical wind shear. It occurs in clear air with no visual cues — no cloud, no precipitation. It can be severe or extreme, potentially causing structural damage. SIGMETs are issued for CAT. Avoidance based on PIREPs and forecasts is the primary defence.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'The probability of microburst activity is highest when:',
  options: [
    'A. Light rain is falling from stratus cloud only if the destination TAF covers the arrival window',
    'B. Heavy precipitation is falling from cumulonimbus or towering cumulus, virga is observed, or conditions show strong surface heating with moderate moisture',
    'C. The temperature dew point spread is greater than 10°C when the aircraft has a valid maintenance release',
    'D. Microbursts only occur in tropical regions only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Microburst probability is highest in: heavy precipitation from CB/TCU; virga (precipitation evaporating before reaching ground — evaporative cooling intensifies downdraft); strong surface heating (>30°C) with moderate moisture; high-based thunderstorms. SIGMETs and PIREPs are essential. Low-level windshear alerting systems at major aerodromes provide real-time warnings.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'The seasonal variation most relevant to IFR operations in southern Australia is:',
  options: [
    'A. Tropical cyclones — common in winter south of 30°S only if the destination TAF covers the arrival window',
    'B. Dust devils are the primary IFR hazard in southern Australia only if the destination TAF covers the arrival window',
    'C. Active frontal weather during winter and spring — cold fronts bring severe turbulence, icing, and embedded CB',
    'D. Southern Australia has no seasonal variation in weather patterns only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Southern Australia seasonal IFR hazards: Winter/spring — active cold fronts with associated CB, severe turbulence, icing, and reduced ceilings; mountain wave over the Alps; radiation fog in stable high-pressure systems. Summer — afternoon convection and thunderstorms, particularly over inland areas; dust storms reducing visibility. Jet stream is most active in winter at lower latitudes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'The jet stream is significant for IFR operations because:',
  options: [
    'A. It improves fuel efficiency only — no hazards are associated with it only if the destination TAF covers the arrival window',
    'B. It produces significant CAT on the cyclonic (cold) side and at the edges, strong headwinds/tailwinds affecting fuel planning',
    'C. The jet stream is only found above FL500 and does not affect normal IFR operations only if the destination TAF covers the arrival window',
    'D. The jet stream only affects supersonic aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Jet stream IFR implications: CAT (severe on cyclonic/cold side and at edges); wind speeds up to 300 kt requiring fuel planning revision; tropopause height changes (higher in subtropical jet, lower in polar front jet); embedded CB in associated frontal systems. Flying parallel to jet stream core in the warmer air (anticyclonic side) minimises CAT while utilising tailwind benefit.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'A tropical cyclone affecting an IFR route would typically cause:',
  options: [
    'A. Extremely severe turbulence, icing, microbursts, and lightning throughout a very large area — IFR operations should be avoided within the broad area of influence',
    'B. Clear skies and smooth conditions outside the eye wall only if the destination TAF covers the arrival window',
    'C. Turbulence only in the wall cloud — IFR is acceptable at distance as approved by CASA under current regulations',
    'D. Tropical cyclones only affect surface operations, not IFR flights as approved by CASA under current regulations'
  ],
  correct: 0,
  explanation: 'Tropical cyclones present extreme hazards across a very wide area: feeder bands contain embedded CB 1,000 km or more from the centre; extreme turbulence throughout; severe icing; microbursts; lightning. IFR operations in or near a tropical cyclone should not be attempted. Seasonal awareness (November to April in northern Australia) is essential for IFR flight planning.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'The meteorological requirements for conducting an IFR flight include obtaining:',
  options: [
    'A. A METAR from the destination only provided the pilot holds a current medical certificate',
    'B. Only the TAF for the destination aerodrome as approved by CASA under current regulations',
    'C. An ARFOR and/or SIGMET for the route; TAFs for departure, destination and alternates; SIGMETs and AIRMETs; NOTAMS; pilot reports (PIREPs)',
    'D. Any available internet weather forecast when the aircraft has a valid maintenance release'
  ],
  correct: 2,
  explanation: 'IFR meteorological requirements: ARFOR covering the route; TAFs for departure, destination, and all planned alternates; current METARs; SIGMETs and AIRMETs for the route; relevant NOTAMs; available PIREPs. This comprehensive picture allows assessment of departure weather, en-route conditions, destination weather at ETA, and alternate viability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.1'
},

{
  question: 'When interpreting a TAF for IFR planning, the significant concern is:',
  options: [
    'A. Whether VFR is possible at the destination provided the pilot holds a current medical certificate',
    'B. Whether the forecast weather at ETA meets or exceeds the approach minima — if below minima, an alternate with suitable weather must be nominated',
    'C. Cloud base only — visibility is not relevant for IFR provided weather is above published minima',
    'D. The temperature forecast for icing risk only when the aircraft has a valid maintenance release'
  ],
  correct: 1,
  explanation: 'IFR TAF interpretation: the critical question is whether the forecast weather at ETA meets the approach minima (ceiling above DA/MDA and visibility above the published minimum). If the TAF shows weather at or below approach minima at ETA, a suitable alternate must be nominated with sufficient fuel to divert. TEMPO and BECMG groups can indicate periods of reduced weather requiring analysis.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.2'
},

{
  question: 'The VOLMET service provides IFR pilots with:',
  options: [
    'A. Continuous HF and VHF broadcast of METARs and TAFs for specified aerodromes — used to update weather information in flight without contacting ATC',
    'B. Volcanic ash hazard warnings only only if the destination TAF covers the arrival window',
    'C. Upper wind and temperature forecasts for cruise altitude planning and all required documents are carried',
    'D. VOLMET is only available in European airspace when the aircraft has a valid maintenance release'
  ],
  correct: 0,
  explanation: 'VOLMET broadcasts current METARs and TAFs for nominated aerodromes on continuous HF/VHF radio. IFR pilots use VOLMET to check destination and alternate weather updates en-route. NAIPS online access before departure provides the primary weather picture; VOLMET provides updates during flight. VOLMET frequencies and covered aerodromes are listed in AIP.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.6 / AIP COM'
},

{
  question: 'The pilot obligation to report variations to forecast weather conditions means:',
  options: [
    'A. The pilot should report significant variations from forecast weather to ATC or FSS',
    'B. The pilot must report when conditions are better than forecast only if the destination TAF covers the arrival window',
    'C. Reports are only required when declaring an emergency only if the destination TAF covers the arrival window',
    'D. Weather reporting is exclusively ATC\ only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Pilots have an obligation to report significant weather variations from forecast: unexpected icing, moderate or severe turbulence, CB activity, windshear, microbursts, or unusually poor visibility. These PIREPs (Pilot Reports) are reported to ATC or FSS and relayed to other crews and weather forecasters. PIREPs are often the most timely and accurate weather data available in the en-route environment.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.7 / AIP MET'
},

{
  question: 'Sources for altimeter QNH during IFR operations include:',
  options: [
    'A. Area QNH broadcasts only only if the destination TAF covers the arrival window',
    'B. ATC, ATIS, AWIS, VOLMET, area QNH broadcasts on ATS frequencies — the pilot should update QNH as frequently as possible to maintain accurate terrain clearance',
    'C. QNH must be obtained from the departure aerodrome only and cannot be changed en-route and all required documents are carried',
    'D. GPS altitude can be used in lieu of QNH in remote areas provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'IFR QNH sources: ATC (primary in controlled airspace); ATIS (at controlled aerodromes); AWIS (at non-controlled aerodromes); area QNH broadcasts on FIS frequencies; VOLMET; and pre-flight NAIPS. QNH should be updated regularly — significant differences between departure QNH and current QNH create altitude errors. "From high to low, look out below."',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.3 / AIP ENR 1.7'
},

{
  question: 'How does temperature significantly below ISA affect altimeter accuracy?',
  options: [
    'A. The altimeter reads lower than actual altitude — the aircraft is lower than indicated in cold air, requiring altitude corrections on approaches to maintain obstacle clearance',
    'B. The altimeter reads higher than actual altitude — the aircraft is higher than indicated and all required documents are carried',
    'C. Temperature has no effect on a calibrated altimeter with QNH correctly set when the aircraft has a valid maintenance release',
    'D. Cold temperatures cause altimeters to over-read only above FL100 only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Cold temperature effect: the altimeter is calibrated for ISA. In air colder than ISA, pressure levels are compressed closer together — the altimeter over-reads. This means the aircraft is at a LOWER true altitude than indicated. "From high to low, look out below" — flying from high QNH to low QNH, or in cold temperatures, the actual obstacle clearance is less than the altimeter shows. Temperature corrections are required for approach procedures in cold weather.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'A SIGMET covering your planned route indicates severe icing. The appropriate action is:',
  options: [
    'A. Assess the aircraft\'s ice protection capability, reroute or select an alternate altitude to avoid the severe icing area, and if avoidance is not possible consider diverting to an alternate route',
    'B. Proceed — SIGMETs are advisory only and require no pilot action',
    'C. Continue and activate ice protection equipment only when ice accumulation is observed',
    'D. Descend below the freezing level immediately and continue on the planned track'
  ],
  correct: 0,
  explanation: 'A severe icing SIGMET requires a careful go/no-go assessment: review the aircraft\\\'s ice protection system (none, de-ice, anti-ice, FIKI certified); obtain PIREPs for pilot reports of actual conditions; consider altitude or route changes to avoid the area; if the aircraft is not equipped for the forecast icing intensity, do not depart or divert. Operating in conditions beyond the aircraft\\\'s certification is illegal and potentially fatal.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Frontal weather associated with an active cold front typically produces which IFR hazards?',
  options: [
    'A. Smooth stratiform cloud with light icing only as long as fuel reserves are above minimum requirements',
    'B. No hazards — cold fronts produce VFR conditions provided the pilot holds a current medical certificate',
    'C. A narrow band of severe turbulence, embedded CB with extreme turbulence and icing, heavy precipitation, windshear on approach, and rapid weather change',
    'D. Only light turbulence and moderate rain only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Active cold front IFR hazards: severe turbulence in and near CB; embedded CBs in the frontal cloud; severe icing between 0°C and −20°C levels; heavy precipitation reducing visibility; windshear at low levels on approach (especially within 1,000 ft of touchdown); rapid weather change after frontal passage; squall lines ahead of the front. Pre-frontal planning must account for these hazards along the route.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'The turbulence intensity report "SEV TURB" in a PIREP means:',
  options: [
    'A. Turbulence occasionally caused large changes in altitude or attitude and all required documents are carried',
    'B. Turbulence abrupt, large changes in altitude/attitude — momentary loss of aircraft control, with large airspeed variations, structural damage possible',
    'C. Turbulence that caused passengers and crew to be thrown around the cabin and all required documents are carried',
    'D. Any turbulence that required use of the autopilot provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Turbulence intensity: Light = slight erratic control changes; Moderate = similar to light but with greater intensity, changes in altitude/attitude; Severe = abrupt, large changes in altitude/attitude, momentary loss of control, large airspeed variations, structural damage possible; Extreme = aircraft impossible to control, structural damage imminent. Severe or extreme turbulence requires immediate altitude change and PIREP report.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4 / AIP MET'
},

{
  question: 'Rime ice forms when:',
  options: [
    'A. Large supercooled water droplets freeze on contact with the airframe provided weather is above published minima',
    'B. Small supercooled water droplets freeze quickly on contact, trapping air and forming a rough, opaque, white deposit — typically encountered in stratiform cloud',
    'C. Ice crystals at high altitude accumulate on the windscreen only as approved by CASA under current regulations',
    'D. Rain falls through a cold layer and freezes on the airframe when the aircraft has a valid maintenance release'
  ],
  correct: 1,
  explanation: 'Rime ice: forms from small supercooled droplets (fog, light cloud) that freeze quickly, trapping air. Result: rough, white, brittle, opaque ice. Encountered mainly in stratiform cloud. Less aerodynamically damaging than clear ice but can still significantly disrupt airflow. Typically less severe than clear ice for the same exposure time.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Clear (glaze) ice is more hazardous than rime ice because:',
  options: [
    'A. Clear ice is always heavier only if the destination TAF covers the arrival window',
    'B. Clear ice melts at lower temperatures only if the destination TAF covers the arrival window',
    'C. Clear ice affects only the windscreen — not the wings only if the destination TAF covers the arrival window',
    'D. Clear ice forms from large supercooled droplets that spread before freezing'
  ],
  correct: 3,
  explanation: 'Clear (glaze) ice: large supercooled droplets impact the aerofoil and spread before freezing, creating smooth, dense, transparent ice. It is extremely hard and difficult to remove. It spreads beyond the ice protection system coverage. It severely disrupts the aerofoil shape causing significant lift reduction and drag increase. Associated with freezing rain, freezing drizzle, and heavy cloud with large droplets. Most hazardous form of structural icing.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Mixed ice is a combination of:',
  options: [
    'A. Rime ice and clear ice — occurring when the aircraft is in areas with both large and small supercooled droplets, producing rough, hard ice with poor',
    'B. Snow and rain on the airframe only if the destination TAF covers the arrival window',
    'C. Ice formed at altitude mixed with water formed at lower altitude only if the destination TAF covers the arrival window',
    'D. Ground frost and airframe ice only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Mixed ice occurs when rime and clear ice conditions coexist — both large and small supercooled droplets are present. The result is a rough, hard ice deposit with characteristics of both types. Mixed ice is common in layer cloud at the freezing level boundary. It combines the poor aerodynamics of rime with the hardness and coverage area of clear ice.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Forecast turbulence probability is highest along routes that:',
  options: [
    'A. Track east-west across Australia at all altitudes and all required documents are carried',
    'B. Fly above FL250 in clear air as approved by CASA under current regulations',
    'C. Route over water at all times as approved by CASA under current regulations',
    'D. Cross the jet stream, traverse mountain ranges, pass through or near frontal systems, or enter areas of forecast CB activity'
  ],
  correct: 3,
  explanation: 'High turbulence probability route factors: crossing or flying near the jet stream (CAT); traversing mountain ranges (mountain wave, rotor turbulence); frontal zones (wind shear, embedded CB); areas of forecast CB (extreme turbulence); strong surface heating areas (afternoon convection). Route selection and altitude choice can significantly reduce turbulence exposure.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.5'
},

{
  question: 'When weather conditions at the planned destination deteriorate below approach minima after the flight commences:',
  options: [
    'A. The pilot must divert immediately to the alternate only if the destination TAF covers the arrival window',
    'B. The pilot must declare a fuel emergency and land at the nearest aerodrome only if the destination TAF covers the arrival window',
    'C. The pilot assesses whether the alternate is still suitable (weather above alternate minima), recalculates fuel (destination approach + missed approach + alternate + final reserve), and plans accordingly',
    'D. The flight may continue — IFR pilots must always attempt an approach at the destination first only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Deteriorating destination weather: (1) Check alternate is still above alternate minima; (2) Calculate fuel: remaining fuel must cover destination approach + missed approach + diversion to alternate + final reserve; (3) If fuel is adequate and alternate is suitable, continue; (4) If fuel margin is marginal, make diversion decision early while options exist. The "point of no return" — when minimum diversion fuel is reached — must be anticipated and acted upon proactively.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.4 / AIP ENR 1.1'
},

{
  question: 'The effect of turbulence on fuel burn during IFR operations is:',
  options: [
    'A. Turbulence reduces fuel burn by increasing drag only if the destination TAF covers the arrival window',
    'B. Turbulence has no effect on fuel burn if airspeed is maintained only if the destination TAF covers the arrival window',
    'C. Moderate to severe turbulence increases fuel burn due to higher power settings required, altitude deviations, and speed variations',
    'D. Turbulence only affects fuel burn for propeller aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Turbulence increases fuel burn: the pilot may need higher power to maintain speed in downdrafts; altitude deviations mean flying at non-optimum cruise altitudes; unplanned routing around weather increases distance; holding may be required. IFR fuel planning should include turbulence contingency fuel in convective weather. This is particularly important when destination alternates are distant.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Ground frost on the aircraft before departure under IFR:',
  options: [
    'A. Only affects aerodynamics if more than 1 cm thick only if the destination TAF covers the arrival window',
    'B. Frost on the fuselage is irrelevant — only leading edge frost matters provided the pilot holds a current medical certificate',
    'C. The aircraft anti-icing system will remove frost during the take-off roll when the aircraft has a valid maintenance release',
    'D. Any frost, snow, or ice on lifting surfaces must be completely removed before take-off — even a light coating of frost can significantly reduce lift and increase stall speed'
  ],
  correct: 3,
  explanation: 'Clean aircraft concept: any frost, ice, or snow on lifting surfaces must be removed before flight. Even a thin layer of frost (like coarse sandpaper) can reduce CLmax by 30%, increase stall speed significantly, and delay or prevent normal rotation. Anti-icing systems on many light aircraft are not designed to remove ground frost — ground de-icing fluid must be applied before departure in freezing conditions.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'A SIGMET issued for "SEV ICE (FZRA)" means:',
  options: [
    'A. Severe icing from frost and rain — ground icing conditions only',
    'B. Freezing rain associated with a severe weather system and all required documents are carried',
    'C. FZRA indicates freezing temperatures in rain shadow areas and all required documents are carried',
    'D. Severe icing from freezing rain in the area — the most hazardous icing type involving supercooled large droplets'
  ],
  correct: 3,
  explanation: 'SEV ICE (FZRA) = Severe Icing due to Freezing Rain. Freezing rain produces supercooled large droplets (SLD) — the most hazardous icing type. Ice accretion rates can be extremely rapid, exceeding the capacity of any ice protection system. Freezing rain typically occurs when warm rain falls through a sub-zero layer. Avoidance is the only safe strategy.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'When obtaining weather updates in flight for an IFR route, the pilot should use:',
  options: [
    'A. Only the pre-flight weather forecast — in-flight weather updates are not required and all required documents are carried',
    'B. VOLMET broadcasts; ATC or FSS for updated weather; onboard weather radar; PIREPs from other aircraft; ATIS when within range of the destination',
    'C. Only onboard weather radar only if the destination TAF covers the arrival window',
    'D. Weather updates are only required when an emergency occurs and all required documents are carried'
  ],
  correct: 1,
  explanation: 'In-flight weather update sources: VOLMET (continuous HF/VHF broadcast of METARs and TAFs); ATC or FSS (request updated weather information); onboard weather radar (identify precipitation areas and CB); PIREPs from other aircraft (most current real-world conditions); ATIS when within range of destination. Proactive weather updating allows timely diversion decisions.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.6'
},

{
  question: 'The turbulence penetration speed (VB) is used in severe turbulence because:',
  options: [
    'A. It maximises aircraft speed to transit the turbulent area quickly only if the destination TAF covers the arrival window',
    'B. VB is the same as Vno for all aircraft only if the destination TAF covers the arrival window',
    'C. VB increases control authority in turbulence only if the destination TAF covers the arrival window',
    'D. It minimises structural loads — fast enough to maintain positive control but below manoeuver speed where full control deflection could damage the airframe,'
  ],
  correct: 3,
  explanation: 'VB (turbulence penetration speed): recommended speed for flight in severe turbulence or extreme gusts. Too fast and gust loads may damage the structure; too slow and stall/control is lost. VB is the design gust speed — at or below VB, the aircraft structure can withstand the maximum design gust load. For most aircraft, VB is between Vno and Vne. Specific values are published in the AFM.',
  reference: 'AIP ENR 1.1 / Aircraft Flight Manual'
},

{
  question: 'Mountain wave turbulence is most severe in the:',
  options: [
    'A. Wave crest area — above the mountain tops as approved by CASA under current regulations',
    'B. Rotor zone — below the mountain crest level on the lee side, where violent, unpredictable turbulence occurs in a region of reverse flow',
    'C. Windward side of the range at all levels as approved by CASA under current regulations',
    'D. Above the tropopause only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Mountain wave rotor zone: the most hazardous area is the rotor — a rotating mass of air below the mountain crest on the lee side. The rotor contains the most violent turbulence in the wave system (extreme turbulence possible). Lenticular clouds mark wave crests and indicate wave activity. Rotors are often marked by fractus or roll clouds. IFR aircraft should maintain altitude above the rotor zone when crossing mountain ranges in wave conditions.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'The NDB (Non-Directional Beacon) transmits:',
  options: [
    'A. Directional signals on 360 radials from the station',
    'B. An omnidirectional signal in the LF/MF band — the aircraft's ADF receiver determines the bearing to the station by measuring the signal arrival direction',
    'C. A highly directional beam similar to a VOR but on lower frequencies',
    'D. Signals only on the published NDB frequency during daylight hours'
  ],
  correct: 1,
  explanation: 'NDB transmits a non-directional (omnidirectional) signal in the LF/MF band (190–1750 kHz). The aircraft\\\'s Automatic Direction Finder (ADF) receiver detects the direction from which the signal arrives and displays it on the ADF indicator as a relative bearing. Unlike VOR, the NDB does not transmit directional information — the aircraft receiver determines the bearing.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2 / AIP ENR'
},

{
  question: '"Coastal refraction" affecting NDB signals occurs because:',
  options: [
    'A. NDB signals travel faster over sea than land — when signals cross a coastline at an angle, they are refracted',
    'B. Sea water absorbs NDB signals reducing range only if the destination TAF covers the arrival window',
    'C. Coastal fog reflects NDB signals causing multiple indications only if the destination TAF covers the arrival window',
    'D. Coastal refraction only affects VHF signals, not LF/MF NDB signals only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Coastal refraction: LF/MF signals propagate at different velocities over sea versus land. When the signal path crosses a coast at an angle (not perpendicular), the wave front is refracted. The error is greatest when the signal crosses the coast at a shallow angle and when the station is over land or sea while the aircraft is on the opposite medium. Errors can be several degrees — significant for NDB approaches.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'The effect of thunderstorms on NDB navigation is:',
  options: [
    'A. Thunderstorms cause the ADF needle to deflect towards the lightning discharge — the static electrical disturbances are similar in frequency to NDB signals and',
    'B. Thunderstorms have no effect on NDB — it is a ground-based system only if the destination TAF covers the arrival window',
    'C. Thunderstorms only affect NDB at night only if the destination TAF covers the arrival window',
    'D. Thunderstorms reduce NDB range but not bearing accuracy only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Thunderstorms cause ADF bearing errors: lightning discharges produce electromagnetic signals in the LF/MF range — the same band as NDB. The ADF cannot distinguish between the NDB signal and lightning static, causing the needle to oscillate and point toward CB activity rather than the NDB. This is a significant safety consideration for NDB approaches in convective weather.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'Loss of NDB signal integrity is indicated by:',
  options: [
    'A. The ADF needle pointing to a fixed bearing as approved by CASA under current regulations',
    'B. The ADF frequency display going blank when the aircraft has a valid maintenance release',
    'C. The ADF needle rotating, oscillating wildly, or pointing erratically — indicating unreliable signal. An "Off" flag, if fitted, may appear',
    'D. The NDB ident tone stopping — no other indication and all required documents are carried'
  ],
  correct: 2,
  explanation: 'NDB signal integrity loss: primary indication is erratic, rotating, or oscillating ADF needle. The needle may point toward lightning or rotate freely with no reliable indication. Some ADF equipment has a warning flag (similar to VOR OFF flag). Identification: the NDB identification morse code should be continuously audible — loss of ident tone indicates signal loss or station off the air.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'Errors when turning with an ADF/NDB occur because:',
  options: [
    'A. The ADF antenna rotates with the aircraft causing bearing changes',
    'B. The ADF relative bearing is referenced to the aircraft\\',
    ',
    ',
    ',
    '
  ],
  correct: 1,
  explanation: 'ADF turning errors: relative bearing is measured from the aircraft\\\'s nose (magnetic heading). When the aircraft turns, the heading changes and therefore the relative bearing changes — even if the aircraft has not moved relative to the NDB. To convert relative bearing to magnetic bearing: MB to station = MH + RB. This calculation must be repeated after each heading change. Pilots must account for heading changes when using ADF for tracking.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'NDB station passage is indicated by:',
  options: [
    'A. The ADF needle pointing to 180° (tail of aircraft) as approved by CASA under current regulations',
    'B. A steady 000° indication for 30 seconds as long as fuel reserves are above minimum requirements',
    'C. Rapid rotation or oscillation of the ADF needle from the direct ahead position to various angles as the aircraft passes over or abeam the station',
    'D. The DME reading zero only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'NDB station passage: as the aircraft passes over the NDB, the signal angle changes very rapidly. The ADF needle swings erratically as the aircraft crosses overhead. After passing, the needle settles pointing to the tail position (180° if on a direct overhead track). The moment of maximum needle oscillation is the station passage indicator.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'To fly to an NDB with 20° right drift correction applied, the aircraft heading is 090° and the ADF needle reads 340°. The aircraft is:',
  options: [
    'A. Right of the desired track',
    'B. Left of the desired track',
    'C. The ADF reading confirms the correct track',
    'D. On the desired track to the NDB with 20° WCA applied'
  ],
  correct: 3,
  explanation: 'MB to station = MH + RB = 090 + 340 = 430 − 360 = 070°M. If the desired track to the NDB is 070° and the heading is 090° (20° right correction for wind from the right), this is correct. The relative bearing of 340° means the NDB is 20° to the left of the nose — consistent with flying a heading 20° to the right of track to correct for drift.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'Given heading 180°M and ADF relative bearing 270°, the magnetic bearing to the NDB is:',
  options: [
    'A. 090°M',
    'B. 270°M',
    'C. 450°M (090°M)',
    'D. 180°M'
  ],
  correct: 2,
  explanation: 'MB to station = MH + RB = 180 + 270 = 450 − 360 = 090°M. The NDB bears 090°M from the aircraft (due east). The aircraft is due west of the station. The ADF needle pointing 270° (left of nose) while heading south confirms the station is due east.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'The VOR (VHF Omnidirectional Range) operates in the frequency band:',
  options: [
    'A. VHF 108.0–117.95 MHz',
    'B. LF/MF 190–1750 kHz',
    'C. UHF 960–1215 MHz',
    'D. HF 3–30 MHz'
  ],
  correct: 0,
  explanation: 'VOR operates in the VHF band: 108.0–117.95 MHz. This band is shared with ILS (108.0–111.95 MHz). Frequencies ending in odd tenths (108.1, 108.3, etc.) are ILS; even tenths (108.2, 108.4, etc.) are VOR in the 108–112 MHz range. Above 112 MHz, all are VOR. VHF propagation is line-of-sight — range depends on aircraft altitude.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4 / AIP ENR'
},

{
  question: '"Scalloping" of the VOR CDI is:',
  options: [
    'A. Steady CDI deflection indicating off-course only if the destination TAF covers the arrival window',
    'B. The CDI centering sequence during VOR approach only if the destination TAF covers the arrival window',
    'C. A rapid side-to-side oscillation of the CDI needle caused by multipath signal interference',
    'D. Scalloping is a normal feature of VOR operation only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'VOR scalloping: rapid oscillation of the CDI caused by multipath interference (signals reflecting off terrain or structures), close proximity to the VOR (cone of confusion overhead), or signal propagation issues. Scalloping makes the VOR unreliable for navigation. It is most common in mountainous terrain and very close to the station. The aircraft should deviate or use an alternate navaid.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4'
},

{
  question: 'VOR signal integrity loss is indicated by:',
  options: [
    'A. A red "OFF" warning flag appearing on the VOR indicator — indicating the received signal is too weak or unreliable to provide a usable indication',
    'B. The CDI needle deflecting to full scale as long as fuel reserves are above minimum requirements',
    'C. The frequency display blanking only if the destination TAF covers the arrival window',
    'D. The DME disconnecting only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'VOR signal integrity: when the received signal falls below minimum usable strength or the 30 Hz reference is not received, a red "OFF" warning flag appears on the VOR CDI/RMI. Navigation from a VOR with an OFF flag is unreliable and must not be used for instrument approaches. The flag can also appear during VOR station passage (cone of confusion).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4'
},

{
  question: 'VOR station passage is indicated by:',
  options: [
    'A. Rapid CDI reversal and possible OFF flag — as the aircraft passes overhead, the TO/FROM indicator flips and the CDI deflects',
    'B. The DME reading zero only if the destination TAF covers the arrival window',
    'C. The CDI centering permanently only if the destination TAF covers the arrival window',
    'D. A verbal station identification tone only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'VOR station passage (cone of confusion): directly overhead the VOR, the reference signal becomes unreliable. The CDI may deflect rapidly and the TO/FROM indicator reverses. An OFF flag may briefly appear. This is the VOR station passage indication — after crossing, the TO indicator changes to FROM. The cone of confusion radius depends on aircraft altitude (approximately equal to altitude above the station).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4'
},

{
  question: 'When flying FROM a VOR on the 090° radial (heading approximately 090°), the OBS should be set to:',
  options: [
    'A. 270° with a FROM indication',
    'B. 090° with a FROM indication',
    'C. 090° with a TO indication',
    'D. 270° with a TO indication'
  ],
  correct: 1,
  explanation: 'Flying outbound on the 090° radial (FROM the station heading east): set OBS to 090°. The indicator shows FROM — confirming you are tracking on the 090° radial away from the station. If the aircraft drifts north of the radial, the CDI deflects left (fly left). If drifting south, CDI deflects right (fly right). This gives correct command sense for FROM tracking.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.6'
},

{
  question: 'When tracking TO a VOR on the 270° radial (heading approximately 090°), the OBS should be set to:',
  options: [
    'A. 090° with a FROM indication',
    'B. 090° with a TO indication',
    'C. 270° with a TO indication',
    'D. 270° with a FROM indication'
  ],
  correct: 2,
  explanation: 'Flying inbound to a VOR on the 270° radial (coming from the west, heading east 090°): set OBS to 270°. The indicator shows TO — you are tracking inbound on the 270° radial toward the station. CDI provides correct steering: needle right = fly right, needle left = fly left. Setting TO with a FROM selection (or vice versa) gives reverse sensing — a significant error.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.6'
},

{
  question: 'An aircraft is at heading 045° with the VOR OBS set to 180° and showing a TO indication with CDI deflected 2 dots right. The aircraft is:',
  options: [
    'A. Right of the 180° inbound track — fly left to intercept',
    'B. Left of the 180° inbound track — fly right to intercept',
    'C. On the 180° track — the deflection is within tolerance',
    'D. The CDI is in reverse sensing — the aircraft cannot determine position'
  ],
  correct: 1,
  explanation: 'OBS 180° with TO selected and heading 045°: this is an intercept situation, not tracking. The CDI is deflected right with a TO flag. With a TO selection, CDI right = fly right (toward the 180° inbound track). The aircraft is currently left of the 180° inbound course. The 045° heading is an intercept heading — turn right to intercept the 180° inbound track.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.5'
},

{
  question: 'DME "slant range" error is most significant when:',
  options: [
    'A. The aircraft is far from the station only if the destination TAF covers the arrival window',
    'B. The aircraft is directly overhead or close to the station at low altitude — slant range equals actual altitude and reads significantly more than zero',
    'C. The aircraft is flying at high altitude across the country only if the destination TAF covers the arrival window',
    'D. Slant range error is constant regardless of position only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'DME slant range: DME measures the straight-line distance (slant range) from aircraft to ground transponder — not ground distance. When flying directly overhead the station, DME reads altitude in nm (approximately), not zero. At 10,000 ft directly overhead, DME reads ~1.6 nm. At distance, slant range error becomes negligible — a 30 nm ground distance at 10,000 ft has slant range of ~30.04 nm (negligible error).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.9'
},

{
  question: 'When not tracking directly to or from the DME station, the DME reading:',
  options: [
    'A. Does not change at the rate corresponding to groundspeed along track — the rate of change of DME depends on the angle between the track and the bearing to the station',
    'B. Is always accurate — DME reads slant range regardless of track provided the pilot holds a current medical certificate',
    'C. Must be corrected for magnetic variation only if the destination TAF covers the arrival window',
    'D. Is unreliable and cannot be used for navigation only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'DME when not tracking directly to/from station: the distance changes slowly when tracking at 90° to the bearing, and normally when tracking directly to/from. For example, an aircraft tracking 90° to the station at 20 nm will show minimal DME change over a significant distance flown. This must be considered when using DME for position fixing — DME arcs are valid, but speed checks based on DME rate change only apply on direct tracks.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.9'
},

{
  question: 'The ILS (Instrument Landing System) components are:',
  options: [
    'A. Localiser (lateral guidance), glideslope (vertical guidance), and marker beacons (distance) — typically inner, middle, and outer markers',
    'B. Localiser, glideslope, and GNSS overlay when the aircraft has a valid maintenance release',
    'C. VOR, DME, and approach lighting provided the pilot holds a current medical certificate',
    'D. Localiser and glideslope only — marker beacons are optional and all required documents are carried'
  ],
  correct: 0,
  explanation: 'ILS components: (1) Localiser (LOC) — VHF 108–112 MHz, provides lateral guidance aligned with runway centreline, ±2.5° full-scale deflection; (2) Glideslope (GP) — UHF, provides vertical guidance typically at 3°, ±0.7° full-scale; (3) Marker beacons — OM (outer marker, 4–7 nm), MM (middle marker, ~0.5 nm), IM (inner marker, close to threshold) providing distance fixes. Some systems replace markers with DME.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'Glideslope fluctuations on an ILS approach may be caused by:',
  options: [
    'A. Aircraft flying too fast only if the destination TAF covers the arrival window',
    'B. Glideslope fluctuations are normal — they do not indicate a problem only if the destination TAF covers the arrival window',
    'C. Interference from reflecting objects near the glideslope antenna (vehicles, buildings, terrain), multiple path signals',
    'D. Fluctuations are caused by strong crosswinds only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ILS glideslope fluctuations: caused by multipath interference from terrain, buildings, or vehicles near the glideslope antenna. Large vehicles crossing the runway (hold short lines are critical for ILS protection) can deflect the signal. Heavy rain can also cause minor fluctuations. Significant or sudden glideslope fluctuations should prompt the pilot to revert to a non-precision approach or execute a missed approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'An ILS "course reversal" indication occurs when:',
  options: [
    'A. The aircraft is established on the localiser back beam only if the destination TAF covers the arrival window',
    'B. The aircraft overshoots the localiser and re-intercepts from the other side provided the pilot holds a current medical certificate',
    'C. Course reversal occurs when the VOR fails during ILS approach only if the destination TAF covers the arrival window',
    'D. Flying on the back course of the ILS (opposite direction to the runway heading) causes reversed CDI sensing — right deflection means fly left if following normal ILS navigation'
  ],
  correct: 3,
  explanation: 'ILS back course: the localiser transmits both forward and back course signals. When flying inbound on the back course (reciprocal runway direction), the CDI deflects in the opposite direction to what\\\'s needed — right deflection means the aircraft is to the right of centreline, but to correct you fly left (opposite to normal). Back course approaches are NOT standard ILS approaches and require awareness of reversed sensing.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The outer marker on an ILS approach provides:',
  options: [
    'A. The final approach fix for glideslope intercept only if the destination TAF covers the arrival window',
    'B. A position fix approximately 4–7 nm from the threshold, typically where the glideslope is intercepted',
    'C. The missed approach point only if the destination TAF covers the arrival window',
    'D. Confirmation that the aircraft is established on the localiser only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Outer Marker (OM): located approximately 4–7 nm from threshold, coinciding with the point where the glideslope is intercepted at the initial descent altitude. OM audio: continuous low-pitched dashes (-- --). Marker light: blue. Middle Marker (MM): ~0.5 nm from threshold at DA height, audio: alternating dot-dash (·-·-), light: amber. Inner Marker: close to threshold (Cat II/III), audio: rapid dots (····), light: white.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The ILS glideslope is typically set at:',
  options: [
    'A. 2.5°',
    'B. 3.5°',
    'C. 4.0°',
    'D. 3.0°'
  ],
  correct: 3,
  explanation: 'Standard ILS glideslope angle is 3.0° — equating to approximately 318 ft/nm descent rate. At typical approach speed of 130 kt, this is ~800 ft/min. Steeper glideslopes (3.5°–5.5°) are published where terrain or obstacles require. The 3° glideslope corresponds well to normal approach technique and VASl/PAPI indications.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10 / AIP ENR 1.5'
},

{
  question: 'The rated coverage of a VOR must be checked before use because:',
  options: [
    'A. VOR coverage is the same everywhere in Australia only if the destination TAF covers the arrival window',
    'B. VOR coverage only varies at night only if the destination TAF covers the arrival window',
    'C. VOR usability varies with aircraft altitude and distance — the rated coverage specifies the minimum altitude and maximum distance at which reliable guidance is provided',
    'D. Coverage ratings are only relevant for ILS, not VOR only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'VOR rated coverage: each VOR has a specified service volume — the altitude and range combinations within which the signal is reliable. Below the minimum altitude or beyond maximum range, the signal may be too weak or unreliable even though the receiver may not show an OFF flag. AIP lists rated coverage for each VOR. Always verify the VOR is within its rated coverage for the planned flight.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.1'
},

{
  question: 'A "DME arc" procedure requires the pilot to:',
  options: [
    'A. Fly a straight course maintaining constant DME distance only if the destination TAF covers the arrival window',
    'B. Increase DME distance during descent only if the destination TAF covers the arrival window',
    'C. A DME arc is only used in radar environments only if the destination TAF covers the arrival window',
    'D. Maintain a constant slant range from the DME station — the aircraft tracks a curved path'
  ],
  correct: 3,
  explanation: 'DME arc: the aircraft maintains a constant DME distance from the station while flying a curved path. Lead radials are published to help anticipate the turn to final. Technique: fly the heading that keeps DME constant — if DME is increasing, turn toward the station; if decreasing, turn away. DME arcs are used as approach transition routes, connecting the en-route structure to the final approach course.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.9 / AIP ENR 1.5'
},

{
  question: 'The NDB frequency band (LF/MF) is susceptible to which propagation errors that VHF navaids (VOR) are not?',
  options: [
    'A. Altitude errors — LF/MF signals behave differently at altitude and all required documents are carried',
    'B. Precipitation static only only if the destination TAF covers the arrival window',
    'C. VOR and NDB are equally susceptible to all propagation errors and all required documents are carried',
    'D. Night effect — at night, LF/MF signals travel further as sky waves, interfering with ground waves from distant stations and causing bearing errors'
  ],
  correct: 3,
  explanation: 'Night effect: at night, the ionosphere lowers and reflects LF/MF sky waves back to earth, potentially from very distant stations. These sky waves interfere with the ground wave from the NDB, causing ADF bearing oscillation and errors. Maximum effect at dawn/dusk. VHF signals (VOR) penetrate the ionosphere and are not affected by sky wave. NDB reliability decreases significantly at night, especially near dawn/dusk.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'Given an aircraft heading of 360°M and the VOR OBS set to 180°, if the CDI is showing 2 dots left deflection with a FROM indication, the aircraft is:',
  options: [
    'A. 2° east of the 180° radial from the station — with a FROM indication and 2 dots left, the aircraft is to the right of the 180° radial (east side)',
    'B. 2° west of the 180° radial from the station provided the pilot holds a current medical certificate',
    'C. On the 182° radial only if the destination TAF covers the arrival window',
    'D. The indication is in reverse sensing — OBS must be set to the aircraft heading and all required documents are carried'
  ],
  correct: 0,
  explanation: 'OBS 180° / FROM / CDI 2 dots left / heading 360°: with FROM selected, CDI left = aircraft is to the right of the 180° radial (toward 170° radial side — east side). The 180° radial runs due south from the station. Aircraft heading 360° (north) is tracking away from the station. The aircraft is east of the 180° south radial. To track the 180° radial, turn left.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.5'
},

{
  question: 'To determine if the aircraft is abeam a VOR station, the pilot should:',
  options: [
    'A. Look out the window for the VOR aerial when the aircraft has a valid maintenance release',
    'B. Wait until the DME reads the expected distance provided weather is above published minima',
    'C. The VOR cannot determine when the aircraft is abeam the station and all required documents are carried',
    'D. Set the OBS to 090° or 270° (depending on which side the VOR is) — when the CDI centers and shows FROM, the aircraft is abeam the station'
  ],
  correct: 3,
  explanation: 'Determining VOR abeam position: set the OBS to 090° (if VOR is to the right) or 270° (if to the left). When the CDI centres and shows FROM, the aircraft is directly abeam the VOR (the aircraft is on the 090° or 270° radial). This technique is used for timing checks, position fixes, and procedure turning points.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.8'
},

{
  question: 'NDB pilot navigation tolerance for IFR operations is:',
  options: [
    'A. ±2°',
    'B. ±5°',
    'C. ±10°',
    'D. ±1° per nm from the station'
  ],
  correct: 1,
  explanation: 'NDB pilot navigation tolerance: ±5° of the required bearing. This is the acceptable deviation before corrective action is required. At 60 nm from an NDB, 5° equals approximately 5 nm off course — consistent with the 1-in-60 rule. Instrument approach procedures using NDB are designed with tolerances accounting for this navigation accuracy.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.7 / AIP ENR'
},

{
  question: 'The ILS localiser full-scale CDI deflection represents:',
  options: [
    'A. 2° from centreline',
    'B. 5° from centreline',
    'C. 10° from centreline',
    'D. 2.5° from centreline'
  ],
  correct: 3,
  explanation: 'ILS localiser: full-scale CDI deflection = ±2.5° from centreline at the runway threshold (the course width is designed to equal 350 ft each side at threshold). Each dot on the CDI represents approximately 1.25°. Compare with VOR where full-scale = ±10°. The narrower localiser sensitivity provides more precise lateral guidance for the approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The ILS glideslope full-scale CDI deflection represents:',
  options: [
    'A. 0.5° from the glidepath',
    'B. 0.7° from the glidepath',
    'C. 1.5° from the glidepath',
    'D. 3° from the glidepath'
  ],
  correct: 1,
  explanation: 'ILS glideslope full-scale deflection = ±0.7° from the glidepath (above or below). Each dot represents approximately 0.35°. The tight glideslope sensitivity means even small angular deviations result in significant altitude errors at distance — at 10 nm from threshold, 0.7° error = approximately 700 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The GNSS space segment consists of:',
  options: [
    'A. Ground control stations monitoring satellite health and all required documents are carried',
    'B. The aircraft receiver and antenna and all required documents are carried',
    'C. A constellation of satellites orbiting the Earth — transmitting timing signals used by receivers to calculate position',
    'D. The augmentation systems (SBAS, GBAS) and all required documents are carried'
  ],
  correct: 2,
  explanation: 'GNSS space segment: the satellite constellation (GPS uses 24+ satellites in 6 orbital planes, 20,200 km altitude, 12-hour orbits). Each satellite transmits precise timing signals on two frequencies (L1 and L2). The receiver measures the time each signal takes to arrive and calculates its distance (pseudo-range) from each satellite. With 4+ satellites, a 3D position fix is obtained.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'The GNSS control segment is responsible for:',
  options: [
    'A. Monitoring satellite health and orbit accuracy, uploading corrections to satellites, and managing the satellite constellation',
    'B. Aircraft navigation calculations provided weather is above published minima',
    'C. Providing augmentation signals to improve accuracy and all required documents are carried',
    'D. Issuing RAIM predictions to pilots provided weather is above published minima'
  ],
  correct: 0,
  explanation: 'GNSS control segment: a network of ground monitoring stations tracks all satellites, measures signal quality, checks ephemeris (orbit) data, and uploads correction data (clock corrections, ephemeris updates) to each satellite. The master control station coordinates the entire system. Control segment integrity ensures the system provides accurate and reliable positioning.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'The "pseudo random code" (C/A code) transmitted by GPS satellites is used to:',
  options: [
    'A. Encrypt the GPS signal for military use only if the destination TAF covers the arrival window',
    'B. Identify the satellite transmitting the signal only if the destination TAF covers the arrival window',
    'C. Provide position data directly to the receiver only if the destination TAF covers the arrival window',
    'D. Allow the receiver to measure the time of arrival of the signal — by comparing the received code with an identical internally generated'
  ],
  correct: 3,
  explanation: 'C/A (Coarse/Acquisition) code: a pseudo-random noise (PRN) code unique to each GPS satellite. The receiver generates an identical code and compares it with the received signal — the delay between the two codes equals the signal travel time. Multiplied by the speed of light, this gives the pseudo-range. Four pseudo-ranges from four satellites allow a 3D position calculation.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'RAIM (Receiver Autonomous Integrity Monitoring) in a GNSS receiver:',
  options: [
    'A. Monitors the integrity of the GNSS position fix by using redundant satellites',
    'B. Increases the accuracy of GNSS by using additional satellites only if the destination TAF covers the arrival window',
    'C. Provides backup navigation if GNSS fails only if the destination TAF covers the arrival window',
    'D. RAIM is only available in military GPS receivers only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'RAIM: an algorithm within the GNSS receiver that uses redundant satellite measurements to detect when one satellite is providing erroneous data. Fault Detection (FD) requires 5 satellites; Fault Detection and Exclusion (FDE) requires 6 satellites. If RAIM cannot guarantee the required navigation accuracy, it alerts the pilot. No RAIM = navigation accuracy is unknown — do not use for IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1 / 5.2.4'
},

{
  question: 'The WGS-84 coordinate system is used by GNSS because:',
  options: [
    'A. It is a globally consistent Earth-centred coordinate system — all GNSS satellites and receivers use the same datum, ensuring position consistency worldwide',
    'B. It is the Australian national datum and all charts use WGS-84 only if the destination TAF covers the arrival window',
    'C. WGS-84 provides greater accuracy than other coordinate systems only if the destination TAF covers the arrival window',
    'D. WGS-84 is required by ICAO for all navigation charts only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'WGS-84 (World Geodetic System 1984) is the reference coordinate system for all GNSS. It defines the shape of the Earth (ellipsoid) and the reference frame for coordinates. GPS calculates positions in WGS-84. Aviation charts and procedures are published in WGS-84. This global consistency eliminates datum shift errors that would occur if different reference systems were used. Australia\\\'s aeronautical charts have been converted to WGS-84.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'PDOP (Position Dilution of Precision) affects GNSS navigation by:',
  options: [
    'A. Reducing the number of satellites available only if the destination TAF covers the arrival window',
    'B. PDOP affects speed and altitude but not horizontal position only if the destination TAF covers the arrival window',
    'C. Describing the geometric arrangement of visible satellites — poor satellite geometry',
    'D. PDOP is only relevant for military GPS applications only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'PDOP (Position Dilution of Precision): measures satellite geometry quality. Satellites bunched together give poor geometry (high PDOP, worse accuracy); satellites spread across the sky give good geometry (low PDOP, better accuracy). PDOP multiplies the ranging errors — HDOP × range error = horizontal accuracy. PDOP below 4 is required for most IFR operations. RAIM prediction tools check PDOP to predict approach availability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'The four navigation performance requirements for GNSS are:',
  options: [
    'A. Speed, accuracy, reliability, and range',
    'B. Accuracy, integrity, availability, and continuity of service',
    'C. Position, velocity, time, and attitude',
    'D. Horizontal, vertical, approach, and oceanic performance'
  ],
  correct: 1,
  explanation: 'GNSS navigation performance requirements: Accuracy (position error within stated limits); Integrity (ability to provide timely warnings of unacceptable accuracy); Availability (probability system is usable at required accuracy and integrity when needed); Continuity (probability operation will be uninterrupted during approach). All four must be met for IFR operations. RAIM primarily addresses integrity.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'GNSS integrity for IFR operations is provided by:',
  options: [
    'A. Periodic government checks of satellite accuracy only if the destination TAF covers the arrival window',
    'B. The ATC radar system cross-checking GNSS position only if the destination TAF covers the arrival window',
    'C. Integrity is inherent in the GPS signal — no additional monitoring is needed provided weather is above published minima',
    'D. RAIM (on-board monitoring); SBAS/ABAS (satellite-based augmentation providing external integrity monitoring); procedural compliance (cross-checking with other navaids)'
  ],
  correct: 3,
  explanation: 'GNSS integrity means: RAIM (Receiver Autonomous Integrity Monitoring) — on-board algorithm; SBAS (Satellite Based Augmentation System, e.g., WAAS, SBAS) — external reference stations monitor satellites and broadcast corrections and integrity data; ABAS (Aircraft-Based Augmentation) — uses aircraft sensors (baro-aiding) to supplement GNSS. For IFR approaches, RAIM with SBAS or FDE is required.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'GNSS errors that degrade accuracy include:',
  options: [
    'A. Magnetic variation and compass deviation only only if the destination TAF covers the arrival window',
    'B. Ephemeris errors (satellite orbit), clock errors (satellite clock drift), atmospheric/ionospheric delays, multipath, receiver noise, and selective availability',
    'C. Only ionospheric errors — all other GNSS errors are corrected by the control segment and all required documents are carried',
    'D. GNSS errors are negligible — the system is accurate to 1 metre at all times and all required documents are carried'
  ],
  correct: 1,
  explanation: 'GNSS error sources: Ephemeris (satellite position uncertainty); Clock (satellite/receiver timing); Atmospheric/ionospheric (signal slowing through ionosphere and troposphere); Multipath (signal reflecting off buildings/terrain before reaching antenna); Receiver noise (electronic noise); Selective Availability (SA — deliberate degradation, now off). Total error budget typically <10 m with WAAS/SBAS augmentation and <100 m standalone. SBAS corrections primarily address atmospheric and satellite errors.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.3'
},

{
  question: 'GNSS multipath errors are caused by:',
  options: [
    'A. The GNSS signal arriving at the antenna via reflections from terrain, buildings, or the aircraft structure',
    'B. Multiple satellites transmitting on the same frequency only if the destination TAF covers the arrival window',
    'C. Multiple aircraft using the same GNSS frequency only if the destination TAF covers the arrival window',
    'D. Signal interference from onboard electronics only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Multipath: GNSS signals reflect off hard surfaces (hangars, terrain, aircraft fuselage) before reaching the antenna. The reflected signal travels an additional path, arriving slightly later than the direct signal. The receiver cannot distinguish the two and incorporates the error into the pseudo-range calculation. Multipath is most significant near buildings, on the ground, and in mountainous terrain. Antenna placement minimises multipath.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.3'
},

{
  question: 'When GNSS displays a "RAIM not available" warning during approach, the pilot must:',
  options: [
    'A. Continue the approach — RAIM warnings are advisory only only if the destination TAF covers the arrival window',
    'B. Switch to backup GNSS receiver only if the destination TAF covers the arrival window',
    'C. Not use GNSS for the approach — execute a missed approach or use an alternate navaid if available',
    'D. Contact ATC for a GNSS integrity verification only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'RAIM not available: if RAIM is not available before the FAF, the approach must not be commenced using GNSS. If RAIM fails during the approach, execute a missed approach immediately. RAIM unavailability means the receiver cannot detect a satellite failure or signal degradation — the position may be significantly in error without any warning. Non-GNSS approaches or diversion are the alternatives.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'The GNSS receiver indication "2D navigation" means:',
  options: [
    'A. Only 3 satellites are being tracked — altitude cannot be independently determined',
    'B. The system is providing 2-dimensional position accuracy only if the destination TAF covers the arrival window',
    'C. The display is showing a 2D map view only if the destination TAF covers the arrival window',
    'D. 2D navigation is the normal mode for all GNSS receivers only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: '2D navigation mode: when fewer than 4 satellites are visible for independent 3D position fixing, the receiver may use barometric altitude input to maintain navigation — this is "baro-aiding." In 2D mode, the vertical position is derived from the altimeter rather than calculated from GNSS. RAIM function may be degraded. Many IFR approach certifications require 3D navigation mode.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'Dead reckoning (DR) mode in a GNSS receiver is activated when:',
  options: [
    'A. The pilot selects it for improved accuracy only if the destination TAF covers the arrival window',
    'B. The GNSS database is out of date only if the destination TAF covers the arrival window',
    'C. Insufficient satellites are available for a position fix — the receiver uses the last valid position combined with aircraft heading and',
    'D. DR mode is always active as a backup only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'DR (Dead Reckoning) mode: activated automatically when fewer satellites than required for RAIM are available. The receiver uses heading and speed sensors (or last calculated velocity) to estimate position from the last valid GPS fix. DR accuracy degrades rapidly (errors accumulate). Do not use for IFR once DR mode is active — position uncertainty is unknown. Time in DR mode and estimated error should be displayed.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'A GNSS receiver showing "database out of date" during flight means:',
  options: [
    'A. The receiver cannot navigate — all functions are suspended only if the destination TAF covers the arrival window',
    'B. The GNSS signal is degraded only if the destination TAF covers the arrival window',
    'C. An updated database must be loaded before any IFR flight only if the destination TAF covers the arrival window',
    'D. The navigation database (waypoints, procedures, airports) has expired — the aircraft can still navigate to manually entered coordinates, but published'
  ],
  correct: 3,
  explanation: 'Out-of-date database: the GNSS navigation database (procedures, waypoints, airspace) is updated every 28 days (AIRAC cycle). An expired database may contain outdated or incorrect procedure data. In flight with an expired database: use manual waypoint entry if possible; do not use stored approach procedures without cross-checking against current charts; preferably use an alternate navaid. For IFR operations, a current database is required.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'The baro-aiding function in a GNSS receiver:',
  options: [
    'A. Provides backup barometric altitude display if the altimeter fails only if the destination TAF covers the arrival window',
    'B. Corrects GPS altitude for temperature error only if the destination TAF covers the arrival window',
    'C. Uses the aircraft barometric altimeter input to supplement GNSS satellite geometry',
    'D. Baro-aiding is only used in helicopter GNSS systems only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Baro-aiding: connects the aircraft barometric altimeter to the GNSS receiver, providing altitude data equivalent to an additional "satellite." This improves RAIM availability (reduces minimum satellite requirement from 5 to 4 for FD) and allows approach operations with one fewer satellite. Failure of baro-aiding increases the minimum satellite requirement for RAIM and may reduce approach availability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.8'
},

{
  question: 'GNSS CDI sensitivity changes during an approach from en-route to approach mode because:',
  options: [
    'A. The GPS signal becomes stronger near the runway only if the destination TAF covers the arrival window',
    'B. CDI sensitivity is fixed by the aircraft manufacturer only if the destination TAF covers the arrival window',
    'C. Sensitivity changes only occur on GNSS approaches, not VOR or NDB only if the destination TAF covers the arrival window',
    'D. The CDI scaling changes from ±5 nm (en-route) to ±1 nm (terminal) to ±0.3 nm (approach) as the aircraft approaches the FAF'
  ],
  correct: 3,
  explanation: 'GNSS CDI scaling (sensitivity): En-route: ±5 nm (±2 nm for some); Terminal (within 30 nm): ±1 nm; Initial/Intermediate approach: ±1 nm; Final approach (FAF to MAP): ±0.3 nm (LNAV) or angular (LPV). The receiver automatically scales the CDI as the aircraft progresses through each segment. Automatic waypoint sequencing coincides with sensitivity changes. If CDI does not scale automatically, the approach must be abandoned.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.6'
},

{
  question: 'RAIM availability for a planned approach must be checked:',
  options: [
    'A. Only immediately before commencing the approach only if the destination TAF covers the arrival window',
    'B. RAIM is always available — no pre-flight check is needed only if the destination TAF covers the arrival window',
    'C. During pre-flight planning using a RAIM prediction service — checking availability for the planned ETA at the destination, accounting for predicted',
    'D. ATC checks RAIM availability and advises pilots only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'RAIM prediction: the pilot must check RAIM availability before flight using services such as NAIPS RAIM prediction or online tools (e.g., FAA SAPT). RAIM availability depends on satellite geometry at the specific time and location. Satellite outages (NOTAMs) must be included in the prediction. If RAIM is predicted unavailable, an alternate navaid or destination must be planned.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.4'
},

{
  question: 'GNSS requirements for RNP instrument approach operations include:',
  options: [
    'A. Basic GPS receiver with current database only if the destination TAF covers the arrival window',
    'B. GNSS with moving map display only only if the destination TAF covers the arrival window',
    'C. A certified GNSS receiver with RAIM (or SBAS), a current navigation database, the approach must be loaded from the database',
    'D. Any GPS receiver with approach capability mode only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'GNSS approach requirements: (1) GNSS receiver certified for IFR approaches (TSO-C129a or C196 for LNAV; TSO-C145/146 for SBAS LPV); (2) Current navigation database; (3) Approach loaded from database — not manually entered; (4) RAIM verified available (or SBAS providing integrity); (5) Receiver must automatically arm approach mode and scale CDI. Un-approved GPS cannot be used as primary means for IFR approaches.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.4'
},

{
  question: 'The indications that should prompt an immediate missed approach during a GNSS approach are:',
  options: [
    'A. Any CDI deflection greater than 1 dot only if the destination TAF covers the arrival window',
    'B. RAIM warning or RAIM not available; loss of approach mode; integrity alert; arrival at DA/MDA without required visual reference; any safety concern',
    'C. GPS receiver losing display brightness only if the destination TAF covers the arrival window',
    'D. GNSS approaches do not require missed approach criteria — continue to lowest point and all required documents are carried'
  ],
  correct: 1,
  explanation: 'Immediate missed approach on GNSS approach: (1) RAIM warning or alert during approach; (2) Loss of approach mode (CDI scaling does not change as expected); (3) Navigation integrity alert; (4) Arrival at DA (LPV) or MAP (LNAV) without required visual reference; (5) Doubt about position accuracy; (6) ATC missed approach instruction. Any loss of integrity indication on approach requires immediate go-around.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.7'
},

{
  question: 'Satellite unserviceability affects RAIM prediction because:',
  options: [
    'A. Fewer satellites reduces GPS signal strength only if the destination TAF covers the arrival window',
    'B. Removing a satellite from the constellation changes the geometry — potentially reducing RAIM availability at specific times and locations. NOTAMs for satellite outages must be incorporated into RAIM predictions',
    'C. Unserviceable satellites transmit incorrect data that the receiver ignores only if the destination TAF covers the arrival window',
    'D. RAIM predictions cannot account for satellite outages — pilots must carry alternate navaids at all times as long as fuel reserves are above minimum requirements'
  ],
  correct: 1,
  explanation: 'Satellite NOTAMs: when a satellite is unserviceable (for maintenance or anomaly), the RAIM prediction must include this information. The reduced constellation may create gaps in RAIM availability at certain times/locations — typically lasting 30–90 minutes. Pilots must obtain satellite NOTAMs before IFR GNSS flights and use them in RAIM prediction tools. This is particularly important for remote area operations with limited alternate navaid options.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.9'
},

{
  question: 'A 3D instrument approach operation utilising vertical guidance from the aircraft navigation system on a 2D procedure (e.g., LNAV/VNAV) means:',
  options: [
    'A. The pilot has converted a 2D approach into a full ILS equivalent only if the destination TAF covers the arrival window',
    'B. The aircraft uses GNSS-computed vertical guidance as advisory only — the approach is still procedurally a 2D approach with MDA, but the vertical deviation',
    'C. Lower minima apply because vertical guidance is provided only if the destination TAF covers the arrival window',
    'D. The approach uses ILS glideslope with GNSS for lateral guidance only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'LNAV/VNAV (advisory vertical): the GNSS provides computed vertical guidance (using barometric input or SBAS) as an advisory — helping fly a stabilised path. However, the approach remains procedurally a 2D operation: MDA applies (not DA), and the MAP is the procedural missed approach point. The advisory vertical guidance must NOT be used to descend below MDA. This is distinct from LPV approaches which use SBAS vertical guidance with a true DA.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.3.1'
},

{
  question: 'The parallel offset function on a GNSS receiver during IFR operations:',
  options: [
    'A. Is commonly used to offset from controlled airspace only if the destination TAF covers the arrival window',
    'B. May be used on any segment if cleared by ATC only if the destination TAF covers the arrival window',
    'C. Must not be used during approach operations — using a parallel offset shifts the CDI reference from the published approach course, compromising obstacle clearance',
    'D. Parallel offset is automatically disabled by certified IFR GPS receivers with appropriate ATC clearance obtained'
  ],
  correct: 2,
  explanation: 'Parallel offset on IFR approach: if parallel offset is active during an approach, the CDI is referenced to an offset track rather than the published approach course. The obstacle clearance is only guaranteed for the published course — a parallel offset moves the aircraft off the protected area. Pilots must ensure parallel offset is cancelled before commencing any instrument approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'The RAIM prediction parameters that must be considered for an IFR GNSS approach include:',
  options: [
    'A. Geographic position (latitude/longitude), date and time of planned approach, any satellite NOTAMs',
    'B. Aircraft weight and airspeed only if the destination TAF covers the arrival window',
    'C. Local terrain height and magnetic variation only if the destination TAF covers the arrival window',
    'D. Aircraft equipment type and manufacturer only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'RAIM prediction inputs: (1) Location (aerodrome lat/long for approach RAIM); (2) Date and time of planned approach (satellite geometry is time-dependent); (3) Any satellite NOTAMs (unserviceable or maneuvering satellites); (4) Required accuracy/protection level for approach type. Online tools (NAIPS, FAA SAPT) accept these inputs and predict RAIM availability for the specified window.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.4'
},

{
  question: 'Automatic waypoint sequencing in a GNSS approach means:',
  options: [
    'A. The receiver automatically advances from one waypoint to the next as the aircraft reaches each point',
    'B. The pilot manually selects each waypoint as it is reached only if the destination TAF covers the arrival window',
    'C. Waypoints are sequenced by ATC instruction only only if the destination TAF covers the arrival window',
    'D. Automatic sequencing is only available in glass cockpit aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Automatic waypoint sequencing: when a GNSS approach is loaded from the database and the receiver is in approach mode, it automatically sequences through each waypoint (IAF → IF → FAF → MAP) as the aircraft passes them. Manual intervention is only required if the pilot needs to fly a holding pattern, discontinue the approach, or if the receiver fails to sequence. Failure of auto-sequencing requires the pilot to manually select the next waypoint or execute a missed approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.6'
},

{
  question: 'The GNSS "masking" function refers to:',
  options: [
    'A. Blocking GNSS signals from being used for military targeting only if the destination TAF covers the arrival window',
    'B. Masking is the process of selecting the best 4 satellites for navigation only if the destination TAF covers the arrival window',
    'C. A function that prevents GNSS from operating in restricted airspace only if the destination TAF covers the arrival window',
    'D. The minimum elevation angle above the horizon at which satellites are used — satellites at very low elevation angles have longer atmospheric signal paths and higher error'
  ],
  correct: 3,
  explanation: 'Masking angle: the minimum elevation angle (above horizon) at which the GNSS receiver will use satellite signals. Low-elevation satellites have signals that travel a longer path through the atmosphere, experiencing more ionospheric and tropospheric delay, and are more susceptible to multipath from terrain. Typical mask angles: 5°–15°. Higher mask angles improve accuracy but reduce the number of usable satellites — potentially reducing RAIM availability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'When planning an IFR flight, route limitations to consider include:',
  options: [
    'A. Aircraft passenger capacity only only if the destination TAF covers the arrival window',
    'B. Only fuel requirements — routing is at pilot discretion only if the destination TAF covers the arrival window',
    'C. Minimum en-route altitudes (MEA/LSALT), aircraft performance at those altitudes, available navigation aids, controlled airspace structure',
    'D. Route limitations are only relevant for commercial operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR route planning limitations: (1) Minimum En-Route Altitude (MEA) or LSALT — terrain clearance; (2) Aircraft performance at planned altitudes (oxygen requirements above 10,000 ft, pressurisation); (3) Navigation aid availability and rated coverage along the route; (4) Airspace structure (prohibited, restricted areas); (5) Required navigation performance (RNP) capabilities for the route; (6) Alternate aerodrome requirements.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.1.1'
},

{
  question: 'The table of cruising altitudes/levels for IFR in Australian airspace follows which rule?',
  options: [
    'A. Below transition altitude: odd thousands of feet (1,000, 3,000 etc.) for tracks 000–179°M',
    'B. Odd hundreds of feet for all IFR tracks only if the destination TAF covers the arrival window',
    'C. Flight levels only — altitude is not used for IFR only if the destination TAF covers the arrival window',
    'D. ATC assigns all IFR cruising levels — pilots have no choice only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR cruising levels in Australia: below transition altitude (10,000 ft) in Class G: odd thousands (1,000, 3,000, 5,000 ft) for 000–179°M; even thousands (2,000, 4,000, 6,000 ft) for 180–359°M. In controlled airspace, ATC assigns levels. Above transition altitude: semi-circular rule applies — odd FLs (FL110, FL130) for 000–179°; even FLs (FL100, FL120) for 180–359°.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.1.1 / AIP ENR 1.7'
},

{
  question: 'An IFR alternate aerodrome is required when:',
  options: [
    'A. Always — every IFR flight must nominate an alternate only if the destination TAF covers the arrival window',
    'B. Only for night flights only if the destination TAF covers the arrival window',
    'C. The destination weather forecast for the period from 1 hour before to 1 hour after ETA shows conditions at or below alternate meteorological',
    'D. Only for flights over water only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Alternate requirement: an IFR alternate is required when: (1) Destination forecast for ETA ±1 hour is at or below alternate meteorological minima; (2) Destination has no instrument approach procedure; (3) Destination approach or airport lighting requires personnel in attendance and no assurance they will be available; (4) AIP or aircraft AFM requires one. If weather is clearly above minima, a formal alternate may not be required — but prudent planning always considers an alternate.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'Alternate aerodrome requirements in terms of navigation aids or approach procedures require:',
  options: [
    'A. The alternate must have an ILS approach procedure',
    'B. The alternate must have a published instrument approach and forecast weather above alternate minima for the planned arrival window',
    'C. The alternate must have an instrument approach compatible with the aircraft's avionics and weather above alternate minima',
    'D. Any aerodrome with a published approach is acceptable regardless of forecast weather'
  ],
  correct: 2,
  explanation: 'Alternate approach procedure requirements: the alternate must have an instrument approach procedure that the aircraft can fly using its installed navigation equipment. If the aircraft has only NDB equipment, the alternate must have an NDB approach. The forecast weather at the alternate at ETA must meet the alternate meteorological minima for that approach (published minima + 300 ft and 1,500 m).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'Alternate aerodrome lighting requirements under AIP include:',
  options: [
    'A. No lighting is required for day alternates only if the destination TAF covers the arrival window',
    'B. Only approach lighting is required — runway edge lights are optional only if the destination TAF covers the arrival window',
    'C. The alternate must have runway lighting available when it is expected to be used — for night operations, a certified aerodrome with runway lighting operable during',
    'D. PAL systems cannot be used to satisfy alternate lighting requirements only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Alternate lighting: for night alternate operations, the aerodrome must have suitable runway lighting available during the planned diversion window. PAL (Pilot Activated Lighting) is acceptable provided the published activation sequence works on arrival. The aerodrome entry in ERSA specifies lighting availability. Ensure personnel in attendance requirements are met if the approach procedure specifies this.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'Weather reports must be available for the alternate during the planned diversion period because:',
  options: [
    'A. ATC requires weather reports to issue clearances to the alternate only if the destination TAF covers the arrival window',
    'B. Weather reports are only required for the destination, not alternates only if the destination TAF covers the arrival window',
    'C. Weather reports for alternates are obtained from online weather services only only if the destination TAF covers the arrival window',
    'D. Current weather at the alternate must be assessable when approaching the destination — if the alternate weather is below minima when diversion is needed, the pilot must'
  ],
  correct: 3,
  explanation: 'Alternate weather reports: the pilot must be able to determine alternate weather during the planned diversion window. If the alternate has no weather reporting (no METAR, AWIS, or ATIS) during the planned period, the pilot cannot confirm the alternate is usable at diversion time. AIP specifies which aerodromes have weather reporting and at what hours — this must be checked in pre-flight planning.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'The "divert time" consideration for selecting an alternate means:',
  options: [
    'A. The alternate must be within 30 minutes flying time only if the destination TAF covers the arrival window',
    'B. The alternate must be reachable with the planned fuel — the flight time from destination to alternate must be covered by the contingency and diversion fuel carried',
    'C. Divert time is not a regulatory requirement — pilots use judgment when the aircraft has a valid maintenance release',
    'D. ATC determines the divert time based on traffic only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Divert time consideration: the alternate must be reachable from the destination. Fuel calculation must include: arrival fuel at destination + missed approach + climb to cruise + transit to alternate + alternate approach + final reserve. If the alternate is too far, the fuel requirement becomes impractical and a closer alternate should be selected. AIP also specifies maximum divert times for some operations.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'Holding fuel requirements for weather at the destination are determined by:',
  options: [
    'A. A fixed 30-minute holding allowance for all IFR flights only if the destination TAF covers the arrival window',
    'B. ATC determines holding fuel — pilots do not need to calculate it only if the destination TAF covers the arrival window',
    'C. Holding fuel is only required for night operations only if the destination TAF covers the arrival window',
    'D. The expected delay based on destination weather forecast — if weather is below minima at ETA, holding fuel must cover the expected delay until conditions'
  ],
  correct: 3,
  explanation: 'Weather holding fuel: based on the destination forecast. If the TAF shows conditions improving after ETA, calculate holding fuel to cover the improvement period. If forecast shows sustained below-minima conditions, plan to divert rather than hold. Holding fuel burn must be calculated at holding speed and altitude. When holding fuel is exhausted to diversion fuel level, divert immediately regardless of weather.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.2'
},

{
  question: 'Holding fuel for traffic is required when:',
  options: [
    'A. Expected delays due to traffic sequencing are anticipated — based on ATIS, NOTAMs, or ATC advisories about delays',
    'B. The destination is a busy international airport only if the destination TAF covers the arrival window',
    'C. Holding fuel for traffic is never separately calculated only if the destination TAF covers the arrival window',
    'D. Traffic holding only applies to commercial operations only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Traffic holding fuel: at busy aerodromes, holding delays are predictable (peak times, special events). Pilots should plan holding fuel based on expected delays — ATIS may advise delays, NOTAMs may indicate busy periods. A conservative approach is to plan 30–45 minutes of holding fuel when operating into major aerodromes during peak periods, or when ATC has indicated expected delays.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.2'
},

{
  question: 'When planning the last segment of an IFR route as "NGT VFR" (Night VFR), the pilot must consider:',
  options: [
    'A. Only the night rating requirement only if the destination TAF covers the arrival window',
    'B. Pilot night recency requirements (3 night takeoffs and landings in 90 days)',
    'C. Night VFR requires no additional planning beyond day VFR only if the destination TAF covers the arrival window',
    'D. NGT VFR planning is the same as IFR planning only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'NGT VFR planning requirements: (1) Pilot night recency — 3 takeoffs and landings in the preceding 90 days at night; (2) Alternate requirements — a night VFR alternate may be required; (3) Airways clearance — if the NGT VFR segment is in controlled airspace, an airways clearance is still required; (4) Night VMC must be maintained; (5) Lighting at destination must be confirmed available.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.3'
},

{
  question: 'RAIM prediction implications for operational requirements mean:',
  options: [
    'A. RAIM is advisory only — operational decisions are not affected only if the destination TAF covers the arrival window',
    'B. If RAIM is predicted unavailable for the planned approach, the pilot must plan an alternate navaid or alternate aerodrome with a suitable non-GNSS approach',
    'C. RAIM prediction only affects military operations only if the destination TAF covers the arrival window',
    'D. A backup GPS receiver automatically resolves RAIM unavailability only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'RAIM prediction operational impact: if RAIM prediction shows unavailability during the planned approach window, the pilot must: (1) Plan an alternate navaid (VOR, ILS, NDB) if available at the destination; (2) Delay departure to depart within the RAIM-available window; (3) Nominate an alternate with a non-GNSS approach. This is particularly significant for remote aerodromes with only GNSS approaches available.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.5'
},

{
  question: 'The minimum obstacle clearance on a missed approach procedure is:',
  options: [
    'A. 200 ft above all obstacles only if the destination TAF covers the arrival window',
    'B. 50 ft above the most critical obstacle in the missed approach area — based on the missed approach gradient (typically 2.5% or greater)',
    'C. 1,000 ft above the highest terrain within 5 nm and all required documents are carried',
    'D. Same as the final approach segment clearance with appropriate ATC clearance obtained'
  ],
  correct: 1,
  explanation: 'Missed approach obstacle clearance: the minimum gradient in the missed approach segment is approximately 2.5% (approximately 152 ft/nm), providing at least 50 ft clearance above obstacles in the protected area. The initial missed approach requires wings level climb on the missed approach track until reaching the specified altitude. Turns should only be initiated at the published altitude to remain within the protected area.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.2 / ICAO PANS-OPS'
},

{
  question: 'The minimum circling altitude (MCA) is higher than the straight-in MDA because:',
  options: [
    'A. Circling requires more fuel — a higher altitude allows time for fuel management only if the destination TAF covers the arrival window',
    'B. MCA is always 500 ft higher than MDA regardless of obstacles only if the destination TAF covers the arrival window',
    'C. Circling at higher altitude provides better visibility of the runway only if the destination TAF covers the arrival window',
    'D. Circling involves manoeuvring visually outside the final approach protected area — the MCA provides obstacle clearance for the larger circling area, which extends further'
  ],
  correct: 3,
  explanation: 'Circling MCA: the circling manoeuvre takes the aircraft around the aerodrome at low altitude. The circling area radius depends on aircraft category and the protected area is larger than the straight-in final approach area. MCA must provide 300 ft clearance above the highest obstacle in the circling area. MCA is always equal to or higher than straight-in MDA, reflecting the larger protected area and its terrain.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.3'
},

{
  question: 'Circling minimum altitudes differ by aircraft category because:',
  options: [
    'A. Faster aircraft have higher stall speeds requiring more altitude only if the destination TAF covers the arrival window',
    'B. Category differences reflect passenger capacity only if the destination TAF covers the arrival window',
    'C. All aircraft categories use the same circling MCA only if the destination TAF covers the arrival window',
    'D. Faster aircraft fly larger circling radii — the circling protected area increases with aircraft speed, potentially encountering higher obstacles further from the runway'
  ],
  correct: 3,
  explanation: 'Circling radii by category: Cat A: 1.68 nm; Cat B: 2.66 nm; Cat C: 4.20 nm; Cat D: 5.28 nm. Faster aircraft (higher categories) fly larger circles, potentially over terrain further from the runway. The published MCA is the highest required for any category — but the specific MCA for each category may differ at aerodromes with critical terrain on only one side.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.3 / AIP ENR 1.5'
},

{
  question: 'After take-off under IFR, establishing the aircraft on track requires:',
  options: [
    'A. The aircraft may fly any heading until reaching cruise altitude',
    'B. The aircraft must follow the published SID or departure instruction exactly — deviating from the cleared departure route without ATC clearance violates IFR separation',
    'C. Only the final cruise heading matters — departure track is at pilot discretion',
    'D. The aircraft follows the SID only if ATC specifically requests it'
  ],
  correct: 2,
  explanation: 'IFR track establishment after take-off: the pilot must follow the SID if published and cleared. If no SID applies, establish on the cleared route before the specified point. Obstacle clearance during the SID is based on following the published procedure — deviating from the SID without authorisation removes the obstacle protection. ATC may provide radar vectors to the first waypoint.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.4'
},

{
  question: 'The requirements to establish above LSALT after take-off include:',
  options: [
    'A. No specific requirements — the aircraft climbs to LSALT at normal rate only if the destination TAF covers the arrival window',
    'B. The aircraft must establish above LSALT before proceeding on the IFR route — the SID or ATC clearance specifies the required altitude and track',
    'C. LSALT must be reached within 10 minutes of take-off only if the destination TAF covers the arrival window',
    'D. LSALT only applies after leaving the aerodrome control zone only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Establishing above LSALT: the SID provides obstacle clearance from the aerodrome to the point where the aircraft reaches LSALT (or the procedure\\\'s initial level). If the aircraft cannot reach the SID minimum altitude by the required position (due to performance limitations), departure may not be possible. This is particularly relevant for performance-limited aircraft at high-altitude aerodromes or in high-density altitude conditions.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.5 / AIP ENR 1.7'
},

{
  question: 'The holding pattern inbound leg time below 14,000 ft is:',
  options: [
    'A. 2 minutes',
    'B. 1 minute',
    'C. 1.5 minutes',
    'D. As published on the chart'
  ],
  correct: 1,
  explanation: 'Standard holding pattern leg time: at or below 14,000 ft: 1 minute; above 14,000 ft: 1.5 minutes. The outbound leg is timed to achieve a 1-minute inbound leg (wind correction applied to outbound leg time). Longer or shorter legs may be published on holding charts for specific procedures. The 1-minute inbound ensures the holding pattern fits within the protected airspace.',
  reference: 'AIP ENR 1.5 — Holding Procedures'
},

{
  question: 'In a right-hand holding pattern, all turns are:',
  options: [
    'A. To the left',
    'B. To the right',
    'C. The first turn is right, the second is left',
    'D. In the direction providing shortest path to the protected side'
  ],
  correct: 1,
  explanation: 'Standard holding is left-hand (all turns left). Non-standard holding is right-hand (all turns right) — published on charts when terrain or traffic requires it. In right-hand holding: the aircraft turns right from inbound to outbound and right from outbound back to inbound. The mnemonic: "hold on the side the turns are toward."',
  reference: 'AIP ENR 1.5 — Holding Procedures'
},

{
  question: 'Holding pattern entry procedures — the teardrop (offset) entry is used when arriving from:',
  options: [
    'A. The inbound track plus/minus 70° only if the destination TAF covers the arrival window',
    'B. Any direction when wind is strong only if the destination TAF covers the arrival window',
    'C. Sector 3 — arriving from a heading that would take the aircraft into the non-protected side of the holding pattern if a direct entry were flown',
    'D. The teardrop entry is only used for right-hand holds only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Teardrop (offset) entry: used when arriving from sector 3 (the area on the non-holding side of the inbound track, beyond 110° from the inbound track). Procedure: at the fix, turn to a heading 30° off the inbound track toward the holding side; fly outbound for approximately 1 minute; turn to intercept the inbound track. This keeps the aircraft within the protected airspace during entry.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — Holding'
},

{
  question: 'The direct entry to a holding pattern is appropriate when arriving from:',
  options: [
    'A. Any direction only if the destination TAF covers the arrival window',
    'B. Sector 1 — within ±70° of the inbound track on the holding side. The aircraft flies over the fix, turns in the holding direction, and proceeds on the outbound leg',
    'C. Only when specifically cleared by ATC only if the destination TAF covers the arrival window',
    'D. Direct entry is only for aircraft with speed above 250 kt provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Direct entry (sector 1): the aircraft arrives at the fix on a heading within 70° of the inbound track on the holding side. Procedure: fly over the fix, turn in the holding direction (left for standard hold, right for non-standard), and proceed outbound. The most straightforward entry — the turn naturally keeps the aircraft within the protected area.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — Holding'
},

{
  question: 'The parallel entry to a holding pattern is appropriate when arriving from:',
  options: [
    'A. Any direction when the pilot prefers it only if the destination TAF covers the arrival window',
    'B. Directly opposite the inbound track (180° off) only if the destination TAF covers the arrival window',
    'C. Parallel entry is prohibited in Australian airspace only if the destination TAF covers the arrival window',
    'D. Sector 2 — arriving from the non-holding side, within approximately 110° of the inbound track'
  ],
  correct: 3,
  explanation: 'Parallel entry (sector 2): used when arriving from the non-holding side, within 110° of the inbound track. Procedure: at the fix, turn to fly outbound parallel to the inbound track (on the non-holding side) for approximately 1 minute; then turn in the holding direction to intercept the inbound track. The turn-in gets the aircraft established on the inbound leg from the correct side.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — Holding'
},

{
  question: 'When correcting for wind in a holding pattern, the pilot adjusts:',
  options: [
    'A. The inbound track only only if the destination TAF covers the arrival window',
    'B. Speed only — heading corrections are not used in holding only if the destination TAF covers the arrival window',
    'C. The outbound time and/or heading to achieve a 1-minute inbound leg — if the inbound was shorter than 1 minute, add time on outbound',
    'D. The aircraft stops correcting for wind when in holding only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Holding wind correction: (1) Time correction — if inbound leg is short (tailwind on inbound), add time on outbound; if inbound is long (headwind), reduce outbound time; (2) Track correction — apply triple the wind correction angle on the outbound leg, single WCA on inbound. The goal is a 1-minute inbound leg tracking the inbound course. This maximises fuel efficiency and maintains the aircraft within protected airspace.',
  reference: 'AIP ENR 1.5 — Holding Procedures'
},

{
  question: 'The IFR fuel planning calculation must include:',
  options: [
    'A. Flight fuel only only if the destination TAF covers the arrival window',
    'B. Flight fuel plus 10% contingency only only if the destination TAF covers the arrival window',
    'C. Taxi/start fuel + flight fuel (departure to destination) + contingency fuel + alternate fuel',
    'D. Fuel planning requirements are only for commercial operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR fuel calculation: (1) Taxi and start; (2) Flight fuel (planned route); (3) Contingency (typically 5% or specific requirement); (4) Alternate fuel if alternate required; (5) Additional holding fuel if destination delays expected; (6) Final reserve (30 min for turbine, 45 min for piston at normal cruise). Total = minimum departure fuel. Actual fuel should include a reasonable margin above minimum.',
  reference: 'CASR Part 91 MOS / AIP ENR 1.1'
},

{
  question: 'When the destination weather deteriorates after departure and the alternate is also below alternate minima, the pilot should:',
  options: [
    'A. Declare MAYDAY if fuel is critical; otherwise advise ATC immediately, request weather for alternative aerodromes',
    'B. Continue to destination and attempt an approach only if the destination TAF covers the arrival window',
    'C. Return to departure aerodrome only if the destination TAF covers the arrival window',
    'D. Declare MAYDAY and wait for weather to improve only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Both destination and alternate below minima: this is a serious situation requiring immediate action. Contact ATC: request weather for all available aerodromes in range; identify the best option (highest weather, most fuel to get there); if fuel critical, declare MAYDAY. The key is acting early — waiting until fuel forces a decision removes all options. A declared emergency means ATC will provide maximum assistance and expedite.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.4'
},

{
  question: 'An IFR flight planning requirement specific to flight into remote areas is:',
  options: [
    'A. No special requirements — remote areas are the same as any other airspace only if the destination TAF covers the arrival window',
    'B. Remote areas require a flight plan to be filed 24 hours in advance only if the destination TAF covers the arrival window',
    'C. Only commercial operators need additional planning for remote areas only if the destination TAF covers the arrival window',
    'D. Additional contingency fuel for unreliable weather forecasts; SARTIME filing; ELT serviceability confirmation'
  ],
  correct: 3,
  explanation: 'Remote area IFR planning: (1) Additional contingency fuel (weather forecasts less reliable); (2) File SARTIME with JRCC; (3) Confirm GNSS RAIM availability (limited alternate navaids); (4) ELT serviceable and registered; (5) Survival equipment (water, first aid, signalling) appropriate to terrain; (6) Communication plan — HF radio or satellite phone; (7) Consider an alternate closer than legal minimum if conditions require.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2 / AIP ENR 1.1'
},

{
  question: 'The significance of the "transition level" for IFR flight planning is:',
  options: [
    'A. It is the lowest flight level available for cruising — when climbing through the transition level, the altimeter is changed from QNH to 1013 hPa and',
    'B. It marks the boundary of controlled airspace only if the destination TAF covers the arrival window',
    'C. The transition level is the altitude where IFR must begin only if the destination TAF covers the arrival window',
    'D. It is only relevant for international flights only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Transition level: the lowest available flight level above the transition altitude. In Australia, it varies with QNH but is always above 10,000 ft. Climbing: change to 1013 hPa when passing through the transition layer. Descending: change from 1013 to QNH when passing through the transition level. This ensures IFR aircraft using the same pressure reference can be safely separated on cruising levels.',
  reference: 'AIP ENR 1.7 — Altimetry'
},

{
  question: 'NGT VFR alternate requirements differ from IFR alternate requirements because:',
  options: [
    'A. NGT VFR requires no alternate only if the destination TAF covers the arrival window',
    'B. NGT VFR alternates must be reachable in VMC — the alternate must have forecast night VMC during the planned arrival window, runway lighting',
    'C. NGT VFR alternates require an ILS only only if the destination TAF covers the arrival window',
    'D. NGT VFR and IFR alternates have identical requirements only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'NGT VFR alternate: the alternate must be reachable in night VMC conditions. Unlike IFR, the pilot must maintain visual contact with the ground — instrument approaches cannot be used (unless the pilot also holds an instrument rating). The alternate must have runway lighting, forecast night VMC, and be reachable with available fuel. This significantly restricts alternate selection for NGT VFR compared to IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.3 / CASR Part 91'
},

{
  question: 'When conducting an IFR approach to a non-controlled aerodrome, the pilot must:',
  options: [
    'A. Request ATC approach clearance on the CTAF frequency only if the destination TAF covers the arrival window',
    'B. Obtain and set the current QNH (from AWIS or last ATC contact); make CTAF position broadcasts throughout the approach; fly the published procedure; and close the IFR flight plan on arrival',
    'C. Non-controlled aerodromes cannot be IFR destinations only if the destination TAF covers the arrival window',
    'D. IFR approaches at non-controlled aerodromes require a dedicated approach controller provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'IFR at non-controlled aerodrome: (1) Obtain QNH from AWIS or calculation; (2) Make CTAF broadcasts announcing inbound, joining, final, runway clear; (3) Fly the published instrument approach procedure — no ATC clearance is given, the pilot is responsible for the approach; (4) Apply published minima; (5) Close the flight plan on arrival by contacting FSS or JRCC.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.6 / AIP ENR 1.1'
},

{
  question: 'When weather at the destination is below approach minima and holding fuel is insufficient to wait for improvement, the pilot should:',
  options: [
    'A. Attempt the approach anyway — minima are conservative only if the destination TAF covers the arrival window',
    'B. Execute the approach from a lower altitude to improve chances of breaking out only if the destination TAF covers the arrival window',
    'C. Circle at MCA until fuel is critical then declare emergency only if the destination TAF covers the arrival window',
    'D. Declare MINIMUM FUEL to ATC if not already done; request immediate clearance to the alternate; divert without delay'
  ],
  correct: 3,
  explanation: 'Diversion decision: when holding fuel is exhausted to the diversion fuel level, divert immediately. Do not attempt the approach hoping for improvement — the consequences of a missed approach below diversion fuel are severe. Declare MINIMUM FUEL if not already done. Diversion fuel = transit + alternate approach + final reserve minimum. Once diversion fuel is reached, there is no discretion — divert.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.4'
},

{
  question: 'The flight instruments required for IFR flight in a piston aeroplane include:',
  options: [
    'A. Attitude indicator, airspeed indicator, altimeter, and directional indicator only if the destination TAF covers the arrival window',
    'B. Any combination of instruments that allows the pilot to maintain altitude and heading only if the destination TAF covers the arrival window',
    'C. The same as VFR — IFR requires no additional instruments only if the destination TAF covers the arrival window',
    'D. A complete group including: magnetic compass, airspeed indicator, altimeter (with subscale), attitude indicator, directional indicator (or HSI), turn coordinator, vertical speed indicator'
  ],
  correct: 3,
  explanation: 'IFR instrument requirements: (1) Airspeed indicator; (2) Altimeter (with adjustable subscale); (3) Magnetic compass; (4) Attitude indicator; (5) Heading indicator/DI or HSI; (6) Turn and slip indicator or turn coordinator; (7) Vertical speed indicator; (8) Radio altimeter (some operations); plus radio navigation equipment for the planned route and approach. Failure of any primary flight instrument requires immediate consideration of return or diversion.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1 / CASR Part 91'
},

{
  question: 'The attitude indicator (AI) is particularly critical for IFR because:',
  options: [
    'A. It is the only instrument that shows airspeed only if the destination TAF covers the arrival window',
    'B. The AI is not critical — the altimeter and ASI can substitute only if the destination TAF covers the arrival window',
    'C. It provides an artificial horizon reference when the natural horizon is invisible',
    'D. The AI is required only for ILS approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'AI in IMC: without outside visual reference, the AI is the primary means of maintaining attitude. All other instruments are cross-checked against the AI. Failure in IMC requires partial panel technique: use the turn coordinator for bank, altimeter and VSI for pitch. Partial panel flying is significantly more workload-intensive and less precise — diversion or request for vectors to VMC is strongly advisable.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'The limitation of a vacuum-driven (suction) attitude indicator is:',
  options: [
    'A. It only works in level flight only if the destination TAF covers the arrival window',
    'B. Vacuum AIs are less accurate than electric AIs only if the destination TAF covers the arrival window',
    'C. It may tumble (topple) if the vacuum fails or during prolonged unusual attitudes, and the erection rate after tumbling is slow',
    'D. Vacuum AIs cannot show bank angles beyond 30° only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Vacuum AI limitations: (1) Vacuum failure — AI erects by suction; if vacuum pump fails, the gyro spins down gradually. The AI may appear normal for several minutes before becoming unreliable; (2) Toppling — prolonged unusual attitude or aerobatics can tumble the gyro. After toppling, the AI takes 2–5 minutes to re-erect and may show a false horizon; (3) No direct vacuum failure warning on some aircraft. Pilot must cross-check with electric turn coordinator.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'The directional indicator (DI) or heading indicator must be aligned with the magnetic compass:',
  options: [
    'A. Only before flight — DIs are accurate throughout the flight without adjustment',
    'B. Every 10-15 minutes during cruise — DIs precess due to bearing friction and Earth rotation, and must be realigned with the magnetic compass on a straight level unaccelerated heading',
    'C. Only when entering controlled airspace',
    'D. DI alignment is automatic — no pilot action required'
  ],
  correct: 1,
  explanation: 'DI precession: the directional gyro drifts from the set heading due to: (1) Bearing friction (mechanical precession); (2) Earth\\\'s rotation (apparent precession — more significant at high latitudes); (3) Aircraft manoeuvres. Rate: typically 2–3° per 10 minutes. Must be aligned with the magnetic compass in straight and level flight (not in a turn) every 10–15 minutes. Failure to align results in accumulating heading error.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'The turn coordinator provides which information that the attitude indicator cannot during partial-panel flying?',
  options: [
    'A. Airspeed information only if the destination TAF covers the arrival window',
    'B. Rate of turn and coordination (slip/skid) — it remains functional if the AI fails',
    'C. Altitude information only if the destination TAF covers the arrival window',
    'D. The turn coordinator provides no additional information beyond the AI only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Turn coordinator for partial panel: the turn coordinator is typically electrically powered (independent of vacuum AI). When the vacuum AI fails, the turn coordinator provides: (1) Rate of turn information — maintain standard rate (3°/sec) for timed turns; (2) Coordination — ball indicates slip/skid. Combined with altimeter (pitch reference), ASI (speed), and compass (direction), the turn coordinator enables partial panel IFR flight.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'A standard rate turn (Rate 1) in instrument flying is:',
  options: [
    'A. 1.5°/second',
    'B. 2°/second',
    'C. 3°/second — completing a 360° turn in 2 minutes',
    'D. 5°/second'
  ],
  correct: 2,
  explanation: 'Standard rate (Rate 1) = 3°/second = 180° in 60 seconds = 360° in 2 minutes. For timed turns: turn time (seconds) = heading change (degrees) ÷ 3. Standard rate bank angle ≈ (TAS in kt ÷ 10) + 7°. At 120 kt TAS: bank ≈ 12 + 7 = 19°. All timed turn calculations in IFR use standard rate. Half-standard rate (1.5°/sec) is used for small corrections.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'The "five Ts" instrument approach technique stands for:',
  options: [
    'A. Track, Timing, Temperature, Turbulence, Touchdown and all required documents are carried',
    'B. Target, Transition, Track, Threshold, Touchdown and all required documents are carried',
    'C. Time, Turn, Throttle, Talk, Track — a systematic checklist used at each fix on an instrument approach to ensure no action is missed',
    'D. The five Ts is a VFR technique only as approved by CASA under current regulations'
  ],
  correct: 2,
  explanation: 'Five Ts at each fix/waypoint: (1) Time — note time over fix; (2) Turn — initiate any required heading change; (3) Throttle — set power for the segment; (4) Talk — make required position report or ATC call; (5) Track — verify on correct track for next segment. Applied at: IAF, IF, FAF, MAP. This systematic approach prevents missed actions during the high-workload approach phase.',
  reference: 'IFR technique — instrument flying best practice'
},

{
  question: 'On a non-precision approach, the aircraft should reach the MDA:',
  options: [
    'A. At the MAP — not before only if the destination TAF covers the arrival window',
    'B. Before the MAP, with sufficient time to assess visual reference — then fly level at MDA until the MAP or visual contact is established',
    'C. The MDA can be reached at any point on the approach and all required documents are carried',
    'D. MDA should be reached at the FAF provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Non-precision MDA technique: the pilot should reach MDA (but not below) before the MAP, allowing time to level off and assess visual contact. Flying below MDA is not permitted. If the aircraft reaches the MAP still at MDA without visual reference, execute a missed approach. Some pilots use a "dive and drive" technique (descend steeply to MDA, then level) — a stabilised constant descent is preferred as it better represents the approach path to the runway.',
  reference: 'AIP ENR 1.5 — Instrument Approaches'
},

{
  question: 'The "missed approach point" (MAP) on a non-precision approach is:',
  options: [
    'A. The point at which DA is reached on a precision approach only if the destination TAF covers the arrival window',
    'B. The point beyond which visual reference must have been established — it may be defined by time from FAF, DME, or a waypoint',
    'C. The furthest point from the runway on the approach procedure only if the destination TAF covers the arrival window',
    'D. MAP is defined as 1 nm before the runway threshold on all approaches only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'MAP (Missed Approach Point): on a 2D (non-precision) approach, the point at which the missed approach must be initiated if the required visual reference has not been established. The MAP is defined on the approach chart as: a fix (NDB, VOR, DME fix), time from FAF, or waypoint (GNSS). The MAP is where the obstruction clearance surface ends for the approach procedure — beyond the MAP, obstruction clearance is not guaranteed at MDA.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS'
},

{
  question: 'The "visual segment" of an instrument approach begins:',
  options: [
    'A. At the IAF only if the destination TAF covers the arrival window',
    'B. When the runway lights become visible at 5 nm only if the destination TAF covers the arrival window',
    'C. Visual segment begins at the MAP only only if the destination TAF covers the arrival window',
    'D. At the point where the pilot sights the required visual references (DA/MDA) and transitions from instrument to visual flying to complete the landing'
  ],
  correct: 3,
  explanation: 'Visual segment: once the pilot sights the required visual references at or above DA/MDA, transition from instrument to visual flying commences. The pilot must maintain visual reference continuously — if visual reference is lost, immediately execute a missed approach. The visual segment is not the same as breaking out of cloud — the required specific visual references must be clearly identifiable.',
  reference: 'AIP ENR 1.5 — Instrument Approaches'
},

{
  question: 'A "stabilised approach" criterion for instrument approaches requires:',
  options: [
    'A. At 500 ft AGL: correct configuration, stable speed within defined band, correct descent rate, on glidepath/glideslope, aligned with runway',
    'B. Only that the aircraft is on the correct approach path at the FAF only if the destination TAF covers the arrival window',
    'C. The approach is only considered unstable if the glideslope is more than 2 dots off only if the destination TAF covers the arrival window',
    'D. Stabilisation criteria only apply to commercial operations only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Stabilised approach criteria (at 500 ft AGL in IMC, 300 ft in VMC): (1) Aircraft in landing configuration; (2) Speed within defined band (typically Vapp ±10 kt); (3) Descent rate 500–1000 fpm for 3° glideslope; (4) On approach path (glideslope within 1 dot, localiser within 1 dot); (5) Aligned with runway ±5°. Failure of ANY criterion by 500 ft = immediate go-around. Non-stabilised approaches are a major cause of controlled flight into terrain.',
  reference: 'AIP ENR 1.5 / ICAO CFIT prevention'
},

{
  question: 'An ILS Category I approach has published minima of:',
  options: [
    'A. Minima vary by aerodrome and aircraft equipment',
    'B. DA 200 ft and RVR 800 m',
    'C. DA 200 ft and RVR 550 m',
    'D. DA 100 ft and RVR 400 m'
  ],
  correct: 0,
  explanation: 'ILS Cat I minima: typically DA at 200 ft (60 m) above threshold, RVR 550 m minimum, but minima are aerodrome-specific and may be higher based on obstacles, approach lighting, runway markings. Cat II: DA 100 ft (30 m), RVR 300 m — requires certified equipment and flight deck crew. Cat III: lower DA or no DA, RVR 75–200 m — highly specialized equipment and certifications required. Always use published minima from current charts, not generalised values.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.8 / AIP ENR 1.5'
},

{
  question: 'During a circling approach, if visual reference is lost:',
  options: [
    'A. Immediately execute a climbing turn toward the runway (in the direction of the approach) and climb to the circling MCA — then recommence the approach or proceed as cleared',
    'B. Continue to the runway using estimated position only if the destination TAF covers the arrival window',
    'C. Descend to the runway level and attempt to locate the runway visually provided the pilot holds a current medical certificate',
    'D. Fly a standard rate turn in the direction of the hold only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Loss of visual reference during circling: (1) Immediately commence a climbing turn toward the runway used for the approach (maintaining aircraft on the safe side over the aerodrome); (2) Climb to the published circling MCA or missed approach altitude; (3) Proceed on the missed approach procedure or as cleared by ATC. The turn toward the runway (over the aerodrome) keeps the aircraft over the safest terrain. Do NOT continue visually — the approach must be discontinued.',
  reference: 'AIP ENR 1.5 — Circling Approach Procedures'
},

{
  question: 'The visual circling manoeuvre must remain within:',
  options: [
    'A. 5 nm of the aerodrome',
    'B. 3 nm of the runway threshold for all approach categories',
    'C. 10 nm of the aerodrome reference point at all times during circling',
    'D. The published circling radius for the aircraft\'s approach category — Cat A 1.68 nm, Cat B 2.66 nm, Cat C 4.20 nm, Cat D 5.28 nm'
  ],
  correct: 3,
  explanation: 'Circling radius limits by category: Cat A 1.68 nm, Cat B 2.66 nm, Cat C 4.20 nm, Cat D 5.28 nm. The published MCA provides obstacle clearance within these radii. Manoeuvring outside the published radius removes obstacle protection — even if the runway is in sight. The circling procedure must be flown at the minimum safe altitude and within the category radius.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — Circling'
},

{
  question: 'Conducting an ILS approach, the outer marker (OM) audio indication is:',
  options: [
    'A. Continuous low-pitched dashes (-- --)',
    'B. Continuous high-pitched tone (dot dot dot)',
    'C. Alternating dot-dash (·-·-)',
    'D. Rapid dots (·····)'
  ],
  correct: 0,
  explanation: 'Marker beacon audio: Outer Marker (OM) = continuous low-pitched dashes (-- --) at 400 Hz; blue light. Middle Marker (MM) = alternating dot-dash (·-·-) at 1,300 Hz; amber light. Inner Marker (IM) = rapid dots (·····) at 3,000 Hz; white light. The OM is the glideslope intercept fix; MM is approximately DA height; IM is close to the threshold.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'When cleared for an ILS approach and the glideslope flag appears after glideslope intercept:',
  options: [
    'A. Continue — glideslope flags are common and can be ignored on short final provided the pilot holds a current medical certificate',
    'B. Descend to the MDA published for the ILS and look for the runway only if the destination TAF covers the arrival window',
    'C. Request ATC to confirm glideslope serviceability before continuing only if the destination TAF covers the arrival window',
    'D. Immediately abandon the precision approach and execute a missed approach or convert to a non-precision approach using the localiser only (if localiser-only minima are published)'
  ],
  correct: 3,
  explanation: 'Glideslope failure during approach: if the glideslope flag appears after glideslope intercept, the glideslope is unreliable. Options: (1) Execute a missed approach; (2) Convert to a localiser-only (LOC) approach if published — fly to the higher LOC-only minima using step-down fixes. Do not continue descending on a failed glideslope — vertical guidance may be providing incorrect guidance. ATC should be informed.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The "ATIS" information must be obtained before conducting an IFR approach because:',
  options: [
    'A. ATIS information is required by ATC before issuing an approach clearance provided the pilot holds a current medical certificate',
    'B. ATIS is only required for commercial operations only if the destination TAF covers the arrival window',
    'C. ATIS provides current wind, QNH, active runway, approach in use, significant weather, and NOTAMs — essential for approach briefing, altimeter setting, and approach selection',
    'D. ATIS must be obtained but need not be reported to ATC only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ATIS for IFR approach: provides current QNH (critical for correct approach minima); active runway and approach in use; wind (crosswind check); significant weather (windshear, CB, low visibility); relevant NOTAMs (localiser/glideslope outages, runway condition). Pilot reports the ATIS code to ATC on first contact — ATC confirms the pilot has current information. If ATIS is not available, request QNH and active runway from ATC or FSS.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1 / AIP ENR 1.6'
},

{
  question: 'The purpose of the approach briefing before commencing an instrument approach is:',
  options: [
    'A. A regulatory requirement that serves no practical purpose only if the destination TAF covers the arrival window',
    'B. The approach briefing is only required when both pilots are flying only if the destination TAF covers the arrival window',
    'C. To review the approach procedure and mentally prepare: IAF position, approach track, altitude constraints, DA/MDA, missed approach procedure, minimum fuel at MAP, decision criteria',
    'D. Briefings are only required for the first approach to a new aerodrome only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach briefing purpose: reviewing the procedure before commencing reduces workload during the approach, prevents missed altitude constraints, ensures the missed approach procedure is known, confirms the aircraft is correctly configured, and establishes decision criteria (fuel, weather, equipment). A thorough briefing: I = Ident (navaid), A = Altitude (DA/MDA), T = Time (FAF to MAP), M = Missed approach procedure, A = Alternate plan.',
  reference: 'IFR best practice — approach briefing'
},

{
  question: 'The technique for transitioning from instrument to visual flying at DA on an ILS approach is:',
  options: [
    'A. Divert all attention to outside visual references and ignore instruments only if the destination TAF covers the arrival window',
    'B. Transition gradually — look outside for visual references while maintaining instrument crosscheck',
    'C. Stop instrument scanning as soon as one visual reference is sighted only if the destination TAF covers the arrival window',
    'D. Hand control to the autopilot when transitioning to visual only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'DA transition technique: at DA, look outside for required visual references while continuing instrument crosscheck. If references are sighted: transition to visual flying, continue stabilised approach. Do not abandon all instrument reference immediately — continue to cross-check instruments during the visual segment, particularly in marginal conditions where visual references may deteriorate. If visual reference is lost, execute missed approach immediately.',
  reference: 'AIP ENR 1.5 / IFR flying technique'
},

{
  question: 'The "constant descent final approach" (CDFA) technique on non-precision approaches:',
  options: [
    'A. Requires the aircraft to be at MDA when crossing the FAF only if the destination TAF covers the arrival window',
    'B. Involves flying a continuous 3° (or published angle) descent from the FAF to the runway threshold',
    'C. CDFA can only be used on GNSS approaches only if the destination TAF covers the arrival window',
    'D. CDFA results in higher minima than conventional step-down approaches only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'CDFA technique: fly a continuous descent from FAF to the runway, targeting the runway threshold as the aim point. The descent angle is calculated from the approach chart (typically 3°). When the aircraft reaches the altitude corresponding to MDA, if visual reference is not established — execute a missed approach (treat MDA as DA). Benefits: stabilised approach profile, no step-downs to manage, better visual acquisition geometry, reduced CFIT risk.',
  reference: 'AIP ENR 1.5 — Non-Precision Approach Techniques'
},

{
  question: 'The primary cause of Controlled Flight Into Terrain (CFIT) on instrument approaches is:',
  options: [
    'A. Weather below minima only if the destination TAF covers the arrival window',
    'B. Navigation system failure only if the destination TAF covers the arrival window',
    'C. Spatial disorientation causing the pilot to descend below the approach profile, compounded by confusion about position, failure to follow the published procedure',
    'D. CFIT only occurs on non-precision approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'CFIT causes: (1) Descending below DA/MDA without visual reference; (2) Spatial disorientation (believing the aircraft is higher than it is); (3) Not following the published procedure (improper descent profile, wrong altitudes); (4) Failure to execute a timely missed approach; (5) Inadequate approach briefing; (6) High workload leading to missed altitude calls. CFIT remains one of the leading causes of fatal accidents in IFR operations globally.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX best practice'
},

{
  question: 'The IFR "instrument crosscheck" involves:',
  options: [
    'A. Only monitoring the AI only if the destination TAF covers the arrival window',
    'B. Looking at each instrument once per minute only if the destination TAF covers the arrival window',
    'C. Monitoring only the AI and altimeter only if the destination TAF covers the arrival window',
    'D. A systematic scan of all primary flight instruments — AI (primary attitude), ASI (power/pitch), altimeter (pitch/altitude), DI (heading), VSI (pitch)'
  ],
  correct: 3,
  explanation: 'Instrument crosscheck (scan): primary scan includes AI, ASI, altimeter, DI, VSI. Navigation instruments (CDI, ADF) are added during approach. The "hub and spoke" scan: AI is the hub — it is the primary source of attitude information. After checking AI, scan to each supporting instrument and return to AI. No instrument should be fixated upon for more than 2–3 seconds. A proper scan detects deviations before they become significant.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1 / IFR technique'
},

{
  question: 'When conducting an NDB approach at night, particular caution is required because:',
  options: [
    'A. Night effect causes NDB bearing errors; lightning from any convective activity attracts the ADF needle',
    'B. NDB signals are weaker at night only if the destination TAF covers the arrival window',
    'C. NDB approaches are prohibited at night only if the destination TAF covers the arrival window',
    'D. Night has no additional effect on NDB approaches only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'NDB night approach challenges: (1) Night effect increases bearing errors from sky wave interference; (2) Lightning-prone areas deflect ADF needle toward electrical storms; (3) Night visual transition at MDA requires identifying the correct runway and approach lighting in the context of other ground lighting — visual illusions are more common at night; (4) Circling at night presents the greatest challenge — restricted visibility of obstacles.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2 / night approach considerations'
},

{
  question: 'On an instrument approach chart, a "D" with a circle around it means:',
  options: [
    'A. DME is required for the approach',
    'B. Distance (DME) information is available at that fix and may be used as an alternative or supplement',
    'C. A danger area exists at that position',
    'D. Descent is authorised at that point'
  ],
  correct: 0,
  explanation: 'On instrument approach charts, "D" in a circle (ⓓ) indicates DME distance is available at that fix. DME may be used to supplement or replace a timing fix, or as an alternative means of identifying the fix. Where DME is mandatory for the procedure (e.g., the only means of identifying a step-down fix), this is separately indicated.',
  reference: 'AIP GEN 3.4 — Chart Symbology'
},

{
  question: 'The minimum altitude at which a procedure turn may be initiated is:',
  options: [
    'A. MDA only if the destination TAF covers the arrival window',
    'B. 1,000 ft above the aerodrome as approved by CASA under current regulations',
    'C. The procedure turn altitude published on the approach chart — typically the altitude at the IAF or as specified on the chart',
    'D. LSALT for the area as long as fuel reserves are above minimum requirements'
  ],
  correct: 2,
  explanation: 'Procedure turn altitude: the chart specifies the altitude at which the procedure turn (outbound reversal) is flown. This is the protected obstacle clearance altitude for the reversal manoeuvre. Do not descend below the published procedure turn altitude until established inbound and past the FAF (or the next step-down fix). The procedure turn must be completed within the specified distance (typically 10 nm) from the fix.',
  reference: 'AIP ENR 1.5 — Instrument Approach Procedures'
},

{
  question: 'The minimum obstacle clearance provided during the initial approach segment is:',
  options: [
    'A. 300 m (approximately 1,000 ft) above obstacles in the initial approach protected area',
    'B. 100 ft above obstacles and all required documents are carried',
    'C. 500 ft above obstacles and all required documents are carried',
    'D. 35 ft per nautical mile gradient from the IAF'
  ],
  correct: 0,
  explanation: 'ICAO instrument approach obstacle clearance: Initial approach segment: 300 m (984 ft) above obstacles in the primary area, decreasing to 0 at the edge of the secondary area. Intermediate segment: 150 m (492 ft) in primary area. Final approach segment: non-precision 75 m (246 ft), precision 15-60 m depending on category. These clearances assume the published procedure is followed exactly.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5'
},

{
  question: 'A "VOR/DME" approach differs from a "VOR" approach in that:',
  options: [
    'A. VOR/DME approaches have lower minima only if the destination TAF covers the arrival window',
    'B. DME is required to identify step-down fixes or the missed approach point — without serviceable DME, the pilot must fly the VOR-only procedure if published, or',
    'C. VOR/DME approaches are more accurate than VOR-only only if the destination TAF covers the arrival window',
    'D. There is no practical difference between VOR and VOR/DME approaches only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'VOR/DME approach: DME distances are published as step-down fix identifiers and/or the MAP position. If DME is unserviceable: (1) Check if the approach has published time-based fixes as alternatives; (2) If no alternative identification method is published, the approach cannot be conducted without DME. The approach chart specifies which fixes require DME and which can be alternatively identified.',
  reference: 'AIP ENR 1.5 — Instrument Approach Procedures'
},

{
  question: 'The "segment" between the intermediate approach fix (IF) and the final approach fix (FAF) is called:',
  options: [
    'A. The initial approach segment as long as fuel reserves are above minimum requirements',
    'B. The final approach segment only if the destination TAF covers the arrival window',
    'C. The transition segment only if the destination TAF covers the arrival window',
    'D. The intermediate approach segment — used to align the aircraft with the final approach track, reduce speed, and configure for approach'
  ],
  correct: 3,
  explanation: 'Intermediate segment: from IF to FAF. Purpose: (1) Configure aircraft for approach (landing configuration or approach configuration); (2) Reduce speed to approach speed; (3) Align with final approach track (less than 30° change from intermediate to final); (4) Complete approach checklist. The intermediate segment ends at the FAF where final descent commences. Obstacle clearance is 150 m in the primary area.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5'
},

{
  question: 'A "feeder route" on an instrument approach chart is:',
  options: [
    'A. The published missed approach route only if the destination TAF covers the arrival window',
    'B. The glideslope intercept track only if the destination TAF covers the arrival window',
    'C. A route that connects the en-route structure to the IAF — specifying track, altitude',
    'D. A feeder route is the same as a STAR only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Feeder routes: published tracks from specific en-route fixes or airways to the IAF (or holding fix) of an instrument approach. They specify track (magnetic), minimum altitude, and distance. Feeder routes allow structured traffic flow from various directions to the approach sequence. They ensure obstacle clearance during the transition from en-route to approach phase.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The "decision altitude" (DA) on an ILS approach is measured from:',
  options: [
    'A. The aerodrome elevation (height above aerodrome) with appropriate ATC clearance obtained',
    'B. The ILS transmitter elevation only if the destination TAF covers the arrival window',
    'C. Mean sea level (AMSL) — the altimeter reading with QNH set. The equivalent "decision height" (DH) is measured from the threshold elevation',
    'D. Ground level directly below the aircraft when the aircraft has a valid maintenance release'
  ],
  correct: 2,
  explanation: 'DA vs DH: Decision Altitude (DA) is referenced to Mean Sea Level (AMSL) — the altimeter with QNH gives DA. Decision Height (DH) is referenced to the runway threshold elevation. DA = DH + threshold elevation. Approach charts may publish both. Pilots fly to the DA shown on their altimeter (QNH set). DH is the radio altimeter reading if a radio altimeter is installed.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.8 / AIP ENR 1.5'
},

{
  question: 'Temperature correction to approach altitudes is required when OAT is:',
  options: [
    'A. Any temperature below ISA only if the destination TAF covers the arrival window',
    'B. Only below −20°C at the destination only if the destination TAF covers the arrival window',
    'C. Significantly below ISA (typically more than −15°C below ISA) — the correction is significant in cold climates where altimeter errors can place the aircraft below the',
    'D. Temperature corrections are never required — QNH corrects all altitude errors only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Temperature correction threshold: significant corrections are required when temperatures are substantially below ISA. ICAO recommends corrections when temperature is 0°C or below. The error at −15°C is approximately 7%; at −30°C approximately 15%. For approach minima of 300 ft, a 15% error = 45 ft — significant for obstacle clearance. CASA requires temperature corrections for 3D approaches in cold conditions.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'The approximate freezing level can be calculated from the surface temperature using:',
  options: [
    'A. Surface temperature (°C) ÷ 3 × 1,000 ft (in clear air) or surface temperature ÷ 1.5 × 1,000 ft (in cloud)',
    'B. Surface temperature ÷ 2 in thousands of feet and all required documents are carried',
    'C. Surface temperature ÷ 2°C per 1,000 ft = freezing level in thousands of feet',
    'D. Freezing level cannot be calculated without upper air data'
  ],
  correct: 0,
  explanation: 'Freezing level calculation: In clear air (3°C/1,000 ft): surface temp ÷ 3 = freezing level in thousands of feet. Surface +21°C = 21÷3 = 7,000 ft. In cloud (1.5°C/1,000 ft): from cloud base temperature. Example: cloud base 4,000 ft at +3°C: freezing level = 4,000 + (3÷1.5 × 1,000) = 4,000 + 2,000 = 6,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'When temperature at 5,000 ft is +9°C (in clear air), the freezing level is approximately:',
  options: [
    'A. 5,000 ft',
    'B. 8,000 ft',
    'C. 11,000 ft',
    'D. 14,000 ft'
  ],
  correct: 1,
  explanation: 'From 5,000 ft at +9°C in clear air (3°C/1,000 ft lapse rate): distance to freezing = 9 ÷ 3 = 3,000 ft above 5,000 ft. Freezing level = 5,000 + 3,000 = 8,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'A PIREP reporting "SEV TURB FL350 NEAR JET" indicates:',
  options: [
    'A. Severe turbulence at FL350 in the vicinity of the jet stream — other aircraft should treat this as a SIGMET-level hazard and plan to deviate or use an',
    'B. Moderate turbulence close to FL350 only if the destination TAF covers the arrival window',
    'C. Only affects heavy aircraft at FL350 only if the destination TAF covers the arrival window',
    'D. The turbulence was brief and the conditions have improved only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'PIREP SEV TURB: severe turbulence causes abrupt, large changes in altitude and attitude with momentary loss of control. Structural damage is possible. Near the jet stream at FL350 is a classic CAT (Clear Air Turbulence) location — jet stream core with strong wind shear. This PIREP should be treated with urgency: request weather avoid routing or altitude change. Turbulence penetration speed (VB) if unavoidable.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'In which cloud type is the most severe aircraft icing most likely to be encountered?',
  options: [
    'A. Cumulonimbus (CB) at the freezing level — particularly in the updraft region where supercooled large water droplets are concentrated',
    'B. Cirrus (CI) at high altitude provided the pilot holds a current medical certificate',
    'C. Stratus (ST) below 2,000 ft provided the pilot holds a current medical certificate',
    'D. Altocumulus castellanus (ACC) at mid-levels and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Most severe icing in CB: the updraft in a CB carries large amounts of supercooled water to great heights. The freezing level area in the updraft has the highest liquid water content. Ice accretion rates can be extreme — overwhelming any ice protection system in seconds. Also severe: cumulonimbus anvil region (hail); embedded CB in stratus. Cirrus contains only ice crystals — icing is possible but generally less severe.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'A weather observation at the destination shows "TS" in the weather group. This indicates:',
  options: [
    'A. Tropospheric stratification — layered cloud only if the destination TAF covers the arrival window',
    'B. Thunderstorm — a cumulonimbus cloud is present at or near the aerodrome. IFR approach operations should be considered very carefully',
    'C. Temperature/Soaring conditions only if the destination TAF covers the arrival window',
    'D. TS indicates transitional showers only only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'METAR weather code TS = Thunderstorm. CB is overhead or in the aerodrome vicinity. This indicates: severe turbulence on approach (particularly in the low-level windshear zone); lightning hazard to ground operations; windshear on final; possible extreme downdrafts; hail risk. An IFR approach in TS conditions requires extreme caution — delaying the approach or diverting is often the safest option.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2 / AIP MET'
},

{
  question: 'When a VOR DME approach requires the aircraft to cross the VOR station, what indication should the pilot expect?',
  options: [
    'A. DME reads 0.0 and CDI centers only if the destination TAF covers the arrival window',
    'B. ATIS will announce VOR station passage only if the destination TAF covers the arrival window',
    'C. The glideslope activates at station passage as long as fuel reserves are above minimum requirements',
    'D. CDI oscillates and possibly OFF flag, then TO/FROM reverses — confirming VOR station passage. DME reads the altitude-dependent slant range (not zero)'
  ],
  correct: 3,
  explanation: 'VOR station passage: CDI oscillates as the aircraft passes through the cone of confusion, TO/FROM reverses. DME at station passage reads the slant range equal to the aircraft altitude (at 6,000 ft overhead, DME reads approximately 1 nm). This confirms overhead passage. The pilot should note the time and confirm the reversal occurred as expected before commencing final approach descent.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4 / 5.1.9'
},

{
  question: 'The ILS signal is protected by:',
  options: [
    'A. Airport security only only if the destination TAF covers the arrival window',
    'B. Only the glideslope requires protection — localiser is unaffected by ground traffic only if the destination TAF covers the arrival window',
    'C. Critical and sensitive areas — vehicles and aircraft must hold clear of these areas during ILS approaches to prevent signal multipath interference',
    'D. The ILS signal is self-correcting and does not require protection areas only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ILS protection areas: (1) Critical area — immediately adjacent to localiser and glideslope antennas. Vehicles and aircraft must hold clear to prevent interference. Marked with ILS holdlines on taxiways; (2) Sensitive area — larger area where metallic objects affect signal quality. ATC enforces holding requirements during Cat I/II/III operations. Aircraft waiting to depart must hold at ILS holdline, not at the runway holdline.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10 / AIP ENR 1.5'
},

{
  question: 'GNSS SBAS (Satellite-Based Augmentation System) improves GNSS performance by:',
  options: [
    'A. Adding more satellites to the GPS constellation only if the destination TAF covers the arrival window',
    'B. SBAS only improves GNSS accuracy in controlled airspace only if the destination TAF covers the arrival window',
    'C. Providing differential corrections and integrity data broadcast from geostationary satellites',
    'D. SBAS reduces satellite geometry errors by repositioning satellites only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'SBAS: a network of ground reference stations measure GPS errors and generate correction messages. These are uplinked to geostationary satellites and broadcast to all SBAS-equipped receivers. Benefits: (1) Improved accuracy (1–3 m); (2) Independent integrity monitoring; (3) Enables LPV (Localiser Performance with Vertical guidance) approaches with DA as low as 200 ft; (4) Reduces RAIM satellite requirements. Australia does not have SBAS coverage but work on it is ongoing (SBAS trial has been conducted).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'An NDB bearing of 090° relative with heading 270° places the NDB:',
  options: [
    'A. Ahead of the aircraft',
    'B. To the right of the aircraft',
    'C. Due east of the aircraft\\',
    ',
    '
  ],
  correct: 3,
  explanation: 'MB to station = MH + RB = 270 + 090 = 360° = 000°M. The NDB is due north (000°M) from the aircraft. The aircraft is heading west (270°M) with the NDB bearing at 90° relative (to the right of the nose = north, which is 90° right of a westerly heading). To fly to the station, turn right (north).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'Given heading 090°M and ADF reads 270° relative — the aircraft is tracking directly:',
  options: [
    'A. Toward the NDB',
    'B. Away from the NDB on the 090° radial',
    'C. Away from NDB on the 270° bearing from the station',
    'D. Parallel to the NDB — abeam to the left'
  ],
  correct: 3,
  explanation: 'Heading 090°M, RB 270°: MB to station = 090 + 270 = 360° = 000°M. The NDB is due north. The aircraft heading east (090°) with the NDB to the north is flying parallel to the station — the NDB is abeam to the left (north). RB 270° = the NDB is at the 9 o\\\'clock position (directly left of the aircraft heading east).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'Under IFR, if ATC instructs "descend to 5,000 ft" and LSALT for the route is 6,000 ft, the pilot should:',
  options: [
    'A. Comply immediately — ATC clearance overrides LSALT only if the destination TAF covers the arrival window',
    'B. Descend to 5,500 ft as a compromise only if the destination TAF covers the arrival window',
    'C. Query ATC: "Unable, LSALT 6,000 ft" — ATC clearance to descend below LSALT authorises the descent only if ATC has confirmed terrain clearance through radar or other means',
    'D. Request an IFR clearance cancellation and descend visually only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ATC clearance below LSALT: in controlled airspace, ATC only issues clearances below LSALT when they have confirmed obstacle clearance (radar identification, confirmed terrain data, or the aircraft is established on an instrument procedure). If ATC clears you below LSALT unexpectedly, query it — confirm they are aware of the terrain or that you are radar identified. Never blindly descend below LSALT without understanding why it is safe to do so.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.6 / AIP ENR 1.7'
},

{
  question: 'The IFR requirement to notify ATC of significant changes to ETA applies to changes of more than:',
  options: [
    'A. 1 minute',
    'B. 5 minutes',
    'C. 10 minutes',
    'D. 3 minutes'
  ],
  correct: 3,
  explanation: 'AIP position reporting: IFR aircraft must notify ATC when the estimated time over a reporting point (compulsory or on request) changes by more than 3 minutes from the last notified estimate. This allows ATC to maintain accurate separation and sequencing. In high-density airspace, even smaller changes may require notification if they affect separation.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.4 / AIP ENR 1.6'
},

{
  question: 'The published "alternate meteorological minima" for planning purposes requires the forecast weather at the alternate to be above:',
  options: [
    'A. Published approach minima plus 300 ft ceiling and 1,500 m visibility',
    'B. The published approach minima',
    'C. 1,500 ft ceiling and 8 km visibility regardless of approach type',
    'D. VFR conditions only'
  ],
  correct: 0,
  explanation: 'Alternate met minima: for planning purposes, the forecast at the alternate for the planned arrival time must be at or above: the published approach minima + 300 ft ceiling + 1,500 m visibility. This buffer ensures a reasonable probability of successfully completing the approach if diversion is required. If the forecast is below alternate minima, a different alternate must be selected.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.14 / AIP ENR 1.1'
},

{
  question: 'The maximum height at which ATC may provide approach control service in Australia is:',
  options: [
    'A. FL245',
    'B. FL180',
    'C. FL600',
    'D. FL100'
  ],
  correct: 0,
  explanation: 'Australian controlled airspace structure: Class A airspace above FL245 is for IFR only. Approach control typically provides service from the base of controlled airspace up to FL245 (upper limit of Class C/E in Australian TCAs). The upper limit of individual terminal areas varies — published in AIP ERSA and on ERC charts. Area control provides service in Class A above FL245.',
  reference: 'AIP ENR 1.4 — Airspace'
},

{
  question: 'A compulsory reporting point is indicated on a navigation chart by:',
  options: [
    'A. An open triangle',
    'B. A solid (filled) triangle',
    'C. A circle with a cross',
    'D. A flag symbol'
  ],
  correct: 1,
  explanation: 'Chart symbols: Compulsory reporting point (CRP) = solid/filled triangle — all IFR aircraft must report when passing. On-request reporting point (ORP) = open triangle — report only when requested by ATC. Compulsory reports must include: callsign, position, time, level, and next reporting point. In radar-identified environments, ATC may suspend compulsory position reports.',
  reference: 'AIP GEN 3.2 / AIP ENR 1.6'
},

{
  question: 'When receiving an airways clearance, the pilot must read back:',
  options: [
    'A. All clearance items including: callsign, cleared route/SID, level(s), departure frequency, transponder code',
    'B. The entire clearance word for word only if the destination TAF covers the arrival window',
    'C. Only the transponder code only if the destination TAF covers the arrival window',
    'D. Only the first and last items of the clearance only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Clearance readback requirements: all operationally significant items must be read back: cleared route or SID; cruising level; any level restrictions; departure frequency; transponder code; any other conditional or specific instructions. The readback allows ATC to identify errors before the aircraft is committed to the clearance. Incorrect readback without ATC correction is a hazardous communication failure.',
  reference: 'AIP ENR 1.1 — Radiotelephony'
},

{
  question: 'An airways clearance "cleared direct ALPHA, maintain FL160" when the filed route is via BRAVO, CHARLIE, ALPHA means:',
  options: [
    'A. The pilot should fly via BRAVO and CHARLIE to ALPHA only if the destination TAF covers the arrival window',
    'B. The pilot continues on the filed route but climbs direct to FL160 only if the destination TAF covers the arrival window',
    'C. The clearance authorises a direct track from the current position to ALPHA at FL160',
    'D. Direct clearances are only valid in Class A airspace only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: '"Cleared direct" clearance: the pilot flies a direct track to the nominated fix, regardless of the filed route. All intermediate fixes on the filed route between current position and the direct fix are cancelled. The pilot should: (1) Program the direct track in the FMS/GPS; (2) Note time saved and any fuel implications; (3) Update SARTIME if applicable; (4) Advise ATC of any "unable" constraints (airspace, terrain, equipment).',
  reference: 'AIP ENR 1.1 / IFR communications'
},

{
  question: 'The phrase "cleared ILS runway 34L approach" means:',
  options: [
    'A. The pilot is cleared to intercept the ILS and land on runway 34L only if the destination TAF covers the arrival window',
    'B. Cleared to land on 34L using any approach only if the destination TAF covers the arrival window',
    'C. The pilot is cleared to conduct the ILS approach procedure for runway 34L — the landing clearance is separate and is issued by the tower at an appropriate',
    'D. Cleared for ILS only if the glideslope is serviceable only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach clearance vs landing clearance: "Cleared ILS runway 34L approach" authorises flying the ILS procedure to the runway. The landing clearance ("Cleared to land runway 34L") is issued separately by tower, typically when the aircraft is on final inside approximately 5 nm. If landing clearance has not been received by a reasonable point on final, the pilot should query ATC.',
  reference: 'AIP ENR 1.1 — ATC Phraseology'
},

{
  question: 'When conducting an IFR flight in Class G airspace, the pilot must:',
  options: [
    'A. Maintain VFR conditions — IFR is not permitted in Class G when the aircraft has a valid maintenance release',
    'B. Contact ATC for radar separation at all times only if the destination TAF covers the arrival window',
    'C. Obtain and comply with an airways clearance; maintain IFR procedures; provide own terrain separation; operate at IFR cruising levels; file an IFR flight plan',
    'D. IFR in Class G requires CASA special permission only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR in Class G: IFR is permitted in uncontrolled airspace. Requirements: (1) Must obtain airways clearance before commencing IFR; (2) Comply with IFR procedures (reporting, altimetry, cruising levels); (3) ATC does NOT provide terrain separation in Class G — pilot is responsible for LSALT compliance; (4) ATC does NOT provide separation from other IFR aircraft in Class G — traffic awareness is the pilot\\\'s responsibility.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'The instrument rating proficiency check (IRPC) assesses:',
  options: [
    'A. Only instrument approaches only if the destination TAF covers the arrival window',
    'B. Ground knowledge only — no flight assessment is required only if the destination TAF covers the arrival window',
    'C. Instrument flying in the aircraft category including: normal IFR operations, instrument approaches',
    'D. IRPC only checks the most recent year\ only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IRPC content: the proficiency check covers the full scope of IFR operations including: instrument departure and en-route navigation; instrument approaches (typically at least one precision and one non-precision); missed approach; holding; unusual attitude recovery; partial panel flying (vacuum failure simulation); emergency equipment and procedures. The check must be conducted in the aircraft category.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2 / CASR Part 61'
},

{
  question: 'GNSS "integrity" differs from "accuracy" in that:',
  options: [
    'A. Accuracy is about speed; integrity is about position',
    'B. Integrity is the ability of the system to provide timely warnings when the navigation solution should not be trusted — accuracy measures how close the position is to truth; integrity monitors whether that accuracy is within required limits',
    'C. Integrity applies to ILS only; accuracy applies to GNSS',
    'D. They are synonymous terms used interchangeably in GNSS documentation'
  ],
  correct: 3,
  explanation: 'Accuracy vs integrity: Accuracy is the statistical measure of position error. Integrity is the system\\\'s ability to detect and warn the pilot when accuracy has degraded below required levels within a specified time (Time to Alert). For IFR approaches, high integrity is more critical than raw accuracy — the system must warn the pilot of degraded performance before they can fly into terrain. RAIM provides integrity monitoring.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'Holding pattern protected airspace is designed around:',
  options: [
    'A. A standard rate turn with no wind and 1-minute legs only if the destination TAF covers the arrival window',
    'B. The aircraft category wingspan only only if the destination TAF covers the arrival window',
    'C. A 2 nm radius from the holding fix only if the destination TAF covers the arrival window',
    'D. The holding pattern including maximum entry and holding speeds, wind envelope (up to approximately 130 kt), standard or non-standard turn direction, and leg times'
  ],
  correct: 3,
  explanation: 'Holding protected airspace: designed to contain aircraft within the defined airspace for all aircraft types and wind conditions within limits. The protected area extends beyond the theoretical holding pattern to accommodate wind effects. Pilots must stay within prescribed speeds and times to remain within the protected area. Exceeding holding speeds or times may take the aircraft outside the protected area.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5 — Holding'
},

{
  question: 'The "approach ban" rule in CASR means:',
  options: [
    'A. Approaches are banned in weather below published minima only if the destination TAF covers the arrival window',
    'B. If at 1,000 ft AAL (above aerodrome level) the RVR is below the approach ban visibility, the approach must not be continued below 1,000 ft',
    'C. The approach ban only applies to commercial operations only if the destination TAF covers the arrival window',
    'D. All instrument approaches require prior ATC approval only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Approach ban: CASR Part 91 states that if, at 1,000 ft above the aerodrome level, the reported RVR is below the approach ban distance (typically the landing minima visibility), the approach must not be continued below 1,000 ft. This prevents committing to a low approach when visibility is already reported below minimums. The approach ban is in addition to, not a replacement for, DA/MDA compliance.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'An aircraft conducts an ILS approach and reaches DA with only approach lights visible. The pilot may:',
  options: [
    'A. Continue below DA — approach lights are a required visual reference when the aircraft has a valid maintenance release',
    'B. Not continue — the full runway environment must be visible at DA provided the pilot holds a current medical certificate',
    'C. Continue to landing using only approach lights — no further visual reference is needed and all required documents are carried',
    'D. Continue below DA to 100 ft above TDZE (touchdown zone elevation) using approach lights as reference only, then must see the runway environment to continue to landing'
  ],
  correct: 3,
  explanation: 'Approach lights and DA: if only the approach light system (ALS) is visible at DA, the pilot MAY continue below DA but ONLY to 100 ft above the TDZE. Below 100 ft TDZE, the pilot must be able to see the runway environment (lights, markings, threshold) to continue to landing. This provision allows brief transition through low cloud/fog base at the runway threshold while maintaining safety margins.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'The "time limit" for an airways clearance that has not been used is:',
  options: [
    'A. 1 hour from issue',
    'B. 30 minutes from the expected departure time in the clearance',
    'C. Clearances do not expire — they remain valid until cancelled',
    'D. 2 hours from the filed EOBT'
  ],
  correct: 3,
  explanation: 'Airways clearance validity: a clearance (including an IFR flight plan that supports it) is valid for 2 hours from the EOBT (Estimated Off-Blocks Time). If the aircraft does not depart within 2 hours, the clearance and flight plan lapse. The pilot must re-file and re-obtain clearance. If departure is delayed significantly, advising ATC early allows them to re-sequence the flight and issue a revised clearance with updated EOBT.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.11 / AIP ENR 1.10'
},

{
  question: 'The primary hazard of structural icing for IFR aircraft is:',
  options: [
    'A. Increased weight, disrupted airflow over wings reducing lift, altered stall characteristics, blocked pitot-static ports causing instrument errors',
    'B. Increased fuel consumption only only if the destination TAF covers the arrival window',
    'C. Reduced visibility through the windscreen only only if the destination TAF covers the arrival window',
    'D. Ice only forms on the windscreen and has no aerodynamic effect only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Structural icing hazards: increased weight (30 kg of ice possible on light aircraft); disrupted laminar flow reducing lift and increasing stall speed; stall characteristics altered (unpredictable stall); blocked pitot (false airspeed/altitude indications); carburetor icing; propeller imbalance/vibration; antennas affected. Icing accidents are often fatal due to rapid accumulation in severe conditions.',
  reference: 'AIP ENR 1.5 / BOM meteorology guidance'
},

{
  question: 'Structural icing requires:',
  options: [
    'A. Temperatures below -40°C only if the destination TAF covers the arrival window',
    'B. Only freezing rain — cloud does not cause structural icing and all required documents are carried',
    'C. Visible moisture (cloud, freezing rain, freezing drizzle) and temperatures between 0°C and approximately -40°C — most severe between 0°C and -20°C',
    'D. Temperatures above 0°C and high humidity as long as fuel reserves are above minimum requirements'
  ],
  correct: 2,
  explanation: 'Structural icing requires two conditions simultaneously: (1) visible moisture — in cloud, freezing rain, freezing drizzle, or wet snow; (2) temperatures between 0°C and approximately -40°C (supercooled water droplets exist to about -40°C). Most severe icing between 0°C and -20°C. Clear ice from freezing rain can be severe at temperatures just below 0°C.',
  reference: 'AIP GEN 2.2 / BOM meteorology'
},

{
  question: '"Clear ice" (glaze ice) on aircraft is more hazardous than "rime ice" because:',
  options: [
    'A. Clear ice is dense, heavy, and conforms closely to the airfoil shape — it is difficult to detect, harder to remove',
    'B. Rime ice is heavier than clear ice only if the destination TAF covers the arrival window',
    'C. Clear ice forms only on the windscreen; rime ice forms on wings only if the destination TAF covers the arrival window',
    'D. There is no significant difference between clear and rime ice hazards only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Clear (glaze) ice: formed from large supercooled water droplets (freezing rain, drizzle) or temperatures just below 0°C. Dense, transparent, heavy, adheres strongly, difficult to detect. Rime ice: formed from small droplets in cloud at lower temperatures — opaque, granular, lighter, brittle. Clear ice is more hazardous: heavier load, harder to remove, more severe aerodynamic disruption.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: '"Freezing level" as reported in aviation weather means:',
  options: [
    'A. The altitude at which cloud tops are found only if the destination TAF covers the arrival window',
    'B. The altitude (or range of altitudes) at which the free air temperature is 0°C — above which temperatures are sub-zero and supercooled water and ice exist in clouds',
    'C. The altitude at which precipitation changes from rain to snow provided the pilot holds a current medical certificate',
    'D. The height of the tropopause only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Freezing level: altitude where free air temperature = 0°C. Above the freezing level, liquid water droplets in cloud become supercooled (still liquid but below 0°C) — contact with an aircraft surface causes immediate freezing. The freezing level is reported in forecasts (SIGMET, TAF, SIGWX charts) and varies with season and latitude. Icing risk exists from the freezing level down to where temperatures are warm enough to melt ice.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'A "SIGMET" for icing in the IREX context means:',
  options: [
    'A. A Significant Meteorological Information message — issued for severe or extreme icing',
    'B. A routine weather forecast only if the destination TAF covers the arrival window',
    'C. A terminal forecast for an individual aerodrome only if the destination TAF covers the arrival window',
    'D. A SIGMET is only issued for volcanic ash only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'SIGMET (Significant Meteorological Information): issued by meteorological watch offices for significant in-flight weather hazards including: severe icing, severe turbulence, severe mountain wave, sandstorm/duststorm, volcanic ash, tropical cyclone. For IFR, SIGMETs are mandatory reading during pre-flight planning and should be monitored in flight (VOLMET, ATIS, ATC).',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'Supercooled Large Droplets (SLD) in icing conditions are particularly hazardous because:',
  options: [
    'A. They only form above FL200 only if the destination TAF covers the arrival window',
    'B. SLD conditions always coincide with severe turbulence only if the destination TAF covers the arrival window',
    'C. SLD only affects propeller-driven aircraft only if the destination TAF covers the arrival window',
    'D. SLD (freezing rain, freezing drizzle) create rapid clear ice accretion that can extend beyond the protected areas of the wing'
  ],
  correct: 3,
  explanation: 'SLD icing (supercooled large droplets — freezing drizzle FZDZ, freezing rain FZRA): droplets are large enough to impact and spread aft of the leading edge protected area, accreting ice on unprotected surfaces. This creates a "runback" ice ridge behind the boot/heater that severely disrupts wing aerodynamics. SLD certification requirements were added to EASA/FAA regulations after several accidents.',
  reference: 'BOM meteorology / CASA SLD guidance'
},

{
  question: 'The most dangerous phase for icing encounters during an IFR flight is typically:',
  options: [
    'A. Descent and approach in moist conditions near the freezing level — the aircraft is slower (less kinetic de-icing), power is reduced',
    'B. Cruise at high altitude where temperatures are lowest only if the destination TAF covers the arrival window',
    'C. Climb through cloud is always the most dangerous phase only if the destination TAF covers the arrival window',
    'D. Takeoff in cold temperatures only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Icing during descent/approach: the aircraft decelerates (less aerodynamic heating), power reduces, configuration changes (flap, gear), and approach demands precision — all while potentially accumulating ice. Additionally, stall speed increases with ice and the stall may be sudden and unpredictable. Descending through the freezing level into a warmer layer melts wing ice but can temporarily worsen icing.',
  reference: 'CASA IFR guidance / BOM meteorology'
},

{
  question: 'Thunderstorm avoidance for IFR aircraft requires:',
  options: [
    'A. Flying through the clear area between two thunderstorm cells is always safe only if the destination TAF covers the arrival window',
    'B. Only avoid the dark-coloured cells — white cells are safe to penetrate only if the destination TAF covers the arrival window',
    'C. A minimum of 20 nm lateral separation from active thunderstorm cells — hail, severe turbulence',
    'D. Thunderstorms can be penetrated at FL200 and above only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Thunderstorm avoidance: 20 nm lateral minimum from individual cells; greater separation from squall lines. Hazards extend beyond visible cloud: severe to extreme turbulence (CAT in anvil outflow), large hail (can fall 20+ nm from storm), severe icing, windshear (microbursts). The area between two cells may have violent convergent winds. Never attempt to fly under the anvil of a mature CB.',
  reference: 'AIP ENR 1.5 / BOM CB guidance'
},

{
  question: 'The IFR significance of a "TAF" (Terminal Area Forecast) is:',
  options: [
    'A. TAFs are only for VFR planning only if the destination TAF covers the arrival window',
    'B. TAFs provide the forecast weather at a specific aerodrome used to determine if IFR approach is expected to be possible at ETA, whether an alternate is required',
    'C. TAFs are replaced by PIREPs for IFR planning only if the destination TAF covers the arrival window',
    'D. TAFs provide only wind information for IFR only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'TAF (Terminal Area Forecast): 24 or 30-hour aerodrome forecast used for IFR planning to: determine if conditions at destination will be above IFR minima; assess whether an alternate is required; check alternate minima compliance. Key elements: wind, visibility, weather, cloud. TAF is valid for the period shown — check validity covers ETA ±1 hour. AMD (amended) TAFs update when conditions differ significantly.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'An IFR TAF includes "TEMPO FM1400 3000 -RA BKN008" — the significance for an IFR approach at 1430 is:',
  options: [
    'A. No significance — TEMPO means it is only a temporary improvement only if the destination TAF covers the arrival window',
    'B. TEMPO conditions can be ignored for IFR planning only if the destination TAF covers the arrival window',
    'C. BKN008 means broken cloud at 8,000 ft only if the destination TAF covers the arrival window',
    'D. From 1400, temporarily expect 3 km visibility in light rain with broken cloud at 800 ft'
  ],
  correct: 3,
  explanation: 'TEMPO: temporary fluctuations lasting less than one hour each, total time less than half the forecast period. "TEMPO FM1400 3000 -RA BKN008": from 1400, temporary 3,000m visibility, light rain, broken cloud at 800 ft AGL. At 1430, these conditions may exist — 800 ft cloud base may be at or below many approach minima. Must consider alternate requirement and carry appropriate fuel.',
  reference: 'AIP GEN 3.5'
},

{
  question: '"Low-level wind shear" (LLWS) is most hazardous during:',
  options: [
    'A. High-altitude cruise only if the destination TAF covers the arrival window',
    'B. Climb through FL100 only if the destination TAF covers the arrival window',
    'C. LLWS only affects helicopters only if the destination TAF covers the arrival window',
    'D. Approach and landing — an abrupt change in wind speed and/or direction at low altitude causes rapid changes in airspeed and'
  ],
  correct: 3,
  explanation: 'LLWS on approach: aircraft configured for landing (slow, high drag) has limited energy to recover from sudden airspeed loss. A headwind-to-tailwind shear causes: initially high airspeed/altitude (risk of high approach), then sudden airspeed loss and altitude loss — potential undershoot. LLWS warnings (PIREP, wind shear alert systems at major airports) should trigger a go-around if encountered. Add wind shear safety margin to approach speed.',
  reference: 'AIP ENR 1.5 / ICAO Wind Shear guidance'
},

{
  question: 'A "microburst" is particularly dangerous for IFR aircraft because:',
  options: [
    'A. Microbursts only affect aircraft below 200 ft only if the destination TAF covers the arrival window',
    'B. Microbursts are easily detected on weather radar only if the destination TAF covers the arrival window',
    'C. Microbursts only occur over water only if the destination TAF covers the arrival window',
    'D. A microburst creates a brief but intense downburst and outflow — an aircraft penetrating it experiences a headwind increase then a rapid'
  ],
  correct: 3,
  explanation: 'Microburst: intense, small-scale downburst (0.5–3 nm diameter). Penetrating a microburst: (1) headwind increase — airspeed increases, aircraft rises above glidepath; pilot reduces power; (2) crossing the downburst center — strong downdraft; (3) tailwind — airspeed rapidly decreases, aircraft below path, low energy. Total airspeed change can exceed 50 kt over less than 1 nm. Recovery requires full power and may be impossible at low altitude.',
  reference: 'AIP ENR 1.5 / ICAO microburst guidance'
},

{
  question: 'Convective SIGMETs (or SIGMETs for CB/TS) should be obtained:',
  options: [
    'A. Only during summer months only if the destination TAF covers the arrival window',
    'B. During pre-flight planning and updated in-flight via VOLMET/ATIS/datalink — convective weather is dynamic and can develop rapidly, requiring constant monitoring',
    'C. Only for oceanic flights only if the destination TAF covers the arrival window',
    'D. Convective SIGMETs are only for jet aircraft above FL200 provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Convective SIGMETs: essential for any IFR flight in areas where thunderstorms are forecast or occurring. Convective weather is highly dynamic — a clear corridor may close in minutes. Monitor VOLMET broadcasts, request updates from ATC, use onboard weather radar if available. Never assume the forecast is still valid without checking updates.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'In-flight icing — the correct action when encountering unexpected icing is:',
  options: [
    'A. Maintain altitude and report to ATC only if the destination TAF covers the arrival window',
    'B. Increase airspeed to shed the ice through aerodynamic forces only if the destination TAF covers the arrival window',
    'C. Reduce power and descend slowly through the icing layer only if the destination TAF covers the arrival window',
    'D. Activate all available ice protection equipment immediately, request a different altitude'
  ],
  correct: 3,
  explanation: 'Icing encounter: (1) Activate ice protection immediately (pneumatic boots, anti-ice heat); (2) Note icing intensity (trace, light, moderate, severe); (3) Request altitude change — colder air above may have less moisture; warmer air below (above freezing) will melt ice; (4) Advise ATC; (5) File PIREP; (6) Consider diversion. Do not wait — ice accumulates rapidly. Severe icing: immediate escape required.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'Mountain wave turbulence (CAT associated with orographic lifting) can be encountered:',
  options: [
    'A. Downstream of mountains for hundreds of kilometres at altitude — the rotor zone below the wave crests is the most severe, but',
    'B. Only directly over the mountain only if the destination TAF covers the arrival window',
    'C. Only below the cloud tops only if the destination TAF covers the arrival window',
    'D. Mountain wave only occurs in winter only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Mountain wave: forms when stable air crosses a mountain range with sufficient wind speed and appropriate direction. Waves propagate downstream (100s of km at altitude). Rotor zone (below wave crest, often below the lenticular): most severe turbulence, disorganised, dangerous to light aircraft. Wave crests: smoother but very strong vertical currents (1,000s fpm). Clear air turbulence can extend to FL400.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'The tropopause significance for IFR high-altitude operations is:',
  options: [
    'A. The tropopause is irrelevant to IFR operations only if the destination TAF covers the arrival window',
    'B. The tropopause marks the maximum altitude for IFR flight only if the destination TAF covers the arrival window',
    'C. Above the tropopause, icing is more severe only if the destination TAF covers the arrival window',
    'D. The tropopause marks the top of the troposphere where temperature stops decreasing with altitude'
  ],
  correct: 3,
  explanation: 'Tropopause: temperature lapse ceases, marks top of weather (most). IFR significance: (1) CAT most common near the tropopause — temperature gradients and wind shear at jet stream level; (2) The jet stream is located at/near tropopause; (3) Above tropopause (stratosphere): temperature increases with altitude; severe turbulence less common but volcanic ash can reside there. High-altitude flight plans route around/below CAT areas.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'A "PIREP" (Pilot Report) for IFR operations is valuable because:',
  options: [
    'A. PIREPs provide real-time reports of actual conditions encountered at specific altitudes, locations, and times',
    'B. PIREPs replace official weather forecasts for IFR planning only if the destination TAF covers the arrival window',
    'C. PIREPs are only filed by commercial operators only if the destination TAF covers the arrival window',
    'D. PIREPs are only useful for VFR pilots only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'PIREPs (Pilot Weather Reports): IFR pilots should both use available PIREPs during planning/en-route and file PIREPs when encountering significant weather. PIREPs are often the most current weather data available between scheduled observations. Reporting icing, turbulence, cloud tops/bases, or unexpected conditions helps other pilots and improves forecasting. Filing PIREPs is a professional responsibility.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'The "SIGWX" (Significant Weather) chart used for IFR high-level planning shows:',
  options: [
    'A. Only wind information only if the destination TAF covers the arrival window',
    'B. Low-level weather below 10,000 ft only only if the destination TAF covers the arrival window',
    'C. SIGWX charts are only for oceanic operations only if the destination TAF covers the arrival window',
    'D. Significant weather features at high altitude including jet streams, areas of CAT, CB/TS areas, tropopause height, and icing areas'
  ],
  correct: 3,
  explanation: 'SIGWX charts (available for high level FL250–FL630 and low level): depict significant weather including CB/TS areas and tops, severe turbulence areas (CAT), severe icing, jet streams (position, altitude, max wind), tropopause heights, and volcanic ash. Used for high-level IFR flight planning to select routes avoiding major hazards. AIP GEN 3.4 and BOM provide chart access.',
  reference: 'AIP GEN 3.4 / BOM SIGWX'
},

{
  question: 'Radiation fog is most likely to affect IFR departures:',
  options: [
    'A. During summer afternoons only if the destination TAF covers the arrival window',
    'B. During early morning hours after a clear night with light winds — radiation fog forms when the ground cools by radiation, chilling the air layer above the dew point',
    'C. Only at coastal aerodromes only if the destination TAF covers the arrival window',
    'D. Radiation fog only forms in winter above 3,000 ft only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Radiation fog: forms overnight/early morning after clear skies (no insulation blanket), light winds (1–5 kt disperses without mixing, calm means fog thickens), moist air. Dense, shallow fog layer. IFR significance: can reduce visibility to near zero at aerodrome level. Burns off morning — sun heats surface. IFR departures in radiation fog require instrument departure and may be below minima until cleared.',
  reference: 'BOM meteorology / AIP GEN 2.2'
},

{
  question: 'Advection fog differs from radiation fog for IFR planning because:',
  options: [
    'A. Advection fog is less dense than radiation fog only if the destination TAF covers the arrival window',
    'B. Advection fog only forms at sea only if the destination TAF covers the arrival window',
    'C. Advection fog is caused by moist warm air moving over a cooler surface',
    'D. Advection fog always clears by 1000 local time only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Advection fog: warm moist air advects (moves) over a cool surface — common on coastal areas when onshore winds bring maritime air over a cool land surface or ocean current. Can cover hundreds of square kilometres, persist all day regardless of solar heating, and develop rapidly. Coastal aerodromes (e.g. Sydney, Melbourne) regularly experience advection fog. Unlike radiation fog it does not burn off predictably.',
  reference: 'BOM meteorology'
},

{
  question: 'The IFR weather minimum for a "Category A" aircraft on a straight-in ILS approach is typically:',
  options: [
    'A. Ceiling 500 ft, visibility 1 km only if the destination TAF covers the arrival window',
    'B. Ceiling 1,000 ft and visibility 3 km for all aircraft only if the destination TAF covers the arrival window',
    'C. ILS minima are fixed at DH 100 ft worldwide only if the destination TAF covers the arrival window',
    'D. Defined by the published approach plate — typically DH 200 ft and RVR 550 m for CAT I ILS'
  ],
  correct: 3,
  explanation: 'Approach minima are published for each specific approach procedure at each aerodrome. They are NOT generic. For ILS, CAT I minimum is DH ≥200 ft and RVR ≥550 m — but the published approach plate may have higher minima based on the obstacle environment, approach lighting, and navaid quality at that specific runway. Always use the published plate minima.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The altimeter error in cold temperatures affects IFR approaches by:',
  options: [
    'A. In cold temperatures the altimeter reads higher than actual altitude — the aircraft is lower than indicated, reducing obstacle clearance margins on approach',
    'B. Cold temperatures cause the altimeter to read lower than actual — the aircraft is higher than indicated so no correction is required',
    'C. Cold temperature errors only affect altimeters above FL200',
    'D. Modern altimeters automatically compensate for temperature'
  ],
  correct: 0,
  explanation: 'Cold temperature altimeter error: the altimeter is calibrated for ISA. When temperature is below ISA, air is denser — the pressure levels are lower than standard. Result: the altimeter OVER-reads — actual altitude is LESS than indicated. This means the aircraft is LOWER than the altimeter shows. In very cold conditions (-30°C or below), the error can be hundreds of feet. Cold temperature corrections must be applied to minimum altitudes.',
  reference: 'AIP ENR 1.5 / ICAO cold temperature correction tables'
},

{
  question: 'The cold temperature correction formula for IFR is applied when:',
  options: [
    'A. When the aerodrome temperature is below 0°C — corrections are published in AIP and increase with temperature deviation below ISA and',
    'B. Only when temperature is below -20°C only if the destination TAF covers the arrival window',
    'C. Cold temperature corrections are optional only if the destination TAF covers the arrival window',
    'D. Only for jet aircraft above FL100 only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Cold temperature corrections (AIP ENR 1.5 Table): when aerodrome temperature is below 0°C, apply corrections to: procedure altitudes, MDA/H, and DA/H. The correction increases with temperature depression below ISA and with height above the aerodrome (more air column affected). Always ADD the correction to published altitudes. e.g. if MDA is 500 ft AAL and correction for -15°C at 400 ft = +70 ft, fly MDA of 570 ft AAL.',
  reference: 'AIP ENR 1.5 / ICAO cold temperature tables'
},

{
  question: 'A "METAR" for IFR approach planning purposes must be:',
  options: [
    'A. Issued within the previous 6 hours only if the destination TAF covers the arrival window',
    'B. As current as possible — the observation time should be noted and the interval since observation considered',
    'C. Issued within 30 minutes to be valid for IFR approaches only if the destination TAF covers the arrival window',
    'D. METARs are not used for IFR — only TAFs are relevant only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'METARs (routine observations every 30 min at major airports, hourly at others) give the most recent observed conditions. For IFR approaches: use the most recent METAR/SPECI (special observation) to assess current conditions against minima. If the METAR is old, conditions may have changed — request an update from ATC or ATIS. A SPECI is issued when conditions cross significant thresholds.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'Freezing rain (FZRA) encountered on an IFR approach should result in:',
  options: [
    'A. Continuing the approach with anti-ice on only if the destination TAF covers the arrival window',
    'B. An immediate go-around and avoidance — freezing rain causes extremely rapid clear ice accumulation that can overwhelm all but the most advanced de-icing systems',
    'C. Slowing to minimum approach speed to reduce ice accretion only if the destination TAF covers the arrival window',
    'D. Freezing rain only affects unheated surfaces and is manageable with standard anti-ice only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Freezing rain (FZRA): supercooled large droplets of rain that freeze on contact. Causes extremely rapid clear ice accretion — can accumulate an inch or more per minute on unprotected surfaces. Most aircraft ice protection systems are NOT certified for FZRA conditions. Encountering FZRA: immediate escape required. Divert — do not continue approach. FZRA is a genuine emergency situation.',
  reference: 'BOM meteorology / CASA icing guidance'
},

{
  question: 'The wind component "crosswind" limitation for IFR approaches:',
  options: [
    'A. There are no crosswind limits for IFR approaches only if the destination TAF covers the arrival window',
    'B. Demonstrated crosswind limits are published in the AFM — exceeding the demonstrated limit is not approved',
    'C. The standard crosswind limit for all IFR aircraft is 20 kt only if the destination TAF covers the arrival window',
    'D. Crosswind only matters after the aircraft breaks out of cloud only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Crosswind limits: AFM/POH publishes demonstrated crosswind component. In IMC, crosswind is more hazardous as there is no visual horizon, the aircraft must maintain instrument scan while correcting for drift, and at DA/H the transition to visual may reveal unexpected drift. Strong gusty crosswind in IMC: consider going around and waiting for conditions to improve.',
  reference: 'CASR Part 91 / AFM limitations'
},

{
  question: 'Upper wind forecasts (winds aloft) are used in IFR flight planning to:',
  options: [
    'A. Calculate true airspeed, groundspeed, fuel burn, ETA, and determine optimum cruise altitude',
    'B. Determine ground-based wind speeds only only if the destination TAF covers the arrival window',
    'C. Winds aloft are only used for weather avoidance, not planning only if the destination TAF covers the arrival window',
    'D. Upper winds are not available in Australia for IFR planning only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Upper wind forecasts (available from BOM for flight levels): used for: groundspeed and ETA calculation; fuel planning; choosing optimum altitude (strong tailwind may justify a lower/higher than standard level); identifying jet stream position; and turbulence assessment (strong wind shear = CAT risk). Upper winds are typically reported as true direction and knots for each flight level.',
  reference: 'AIP GEN 3.4 / BOM upper wind forecasts'
},

{
  question: 'A TAF reading "BECMG 1416 VRB05KT 9999 BKN030" means:',
  options: [
    'A. A temporary improvement between 1400 and 1600 only if the destination TAF covers the arrival window',
    'B. Wind variable 5 kt, and cloud broken at 30,000 ft permanently when the aircraft has a valid maintenance release',
    'C. Between 1400 and 1600, variable wind 5 kt, visibility 9,999 m (or greater), broken cloud at 3,000 ft — conditions becoming (permanently changing to) this by 1600',
    'D. Conditions will deteriorate between 1400 and 1600 only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'BECMG (becoming): the weather will change to the described conditions permanently between the times shown (1400–1600 local). After 1600, conditions are expected to be: variable 5 kt, visibility 9,999 m (practical maximum), broken cloud 3,000 ft. BKN030 = broken cloud at 3,000 ft AGL. For IFR planning at ETA 1700: assume these post-BECMG conditions apply.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'Cloud base reported in a METAR as "OVC006" in relation to IFR operations means:',
  options: [
    'A. Overcast cloud at 60,000 ft only if the destination TAF covers the arrival window',
    'B. Overcast cloud at 600 ft AGL — likely below many IFR approach minima; the pilot should check published minima before committing to the approach',
    'C. Overcast cloud covering 6 oktas of sky provided the pilot holds a current medical certificate',
    'D. Overcast cloud at 6,000 ft only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'METAR cloud codes: OVC = overcast (8 oktas); 006 = 600 ft AGL (multiply by 100). OVC006 = overcast at 600 ft. For IFR: compare to published approach minima. If DH is 200 ft, a 600 ft ceiling should permit the approach. If MDA is 700 ft (NDB approach), a 600 ft ceiling means no approach possible. Cloud base must be ABOVE MDA/DH for a successful approach.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'Jet stream turbulence (CAT — Clear Air Turbulence) associated with the jet stream is most severe:',
  options: [
    'A. In the core of the jet stream where winds are strongest only if the destination TAF covers the arrival window',
    'B. On the polar (cold) side and below the jet core where the temperature gradient and wind shear are greatest',
    'C. CAT is equally distributed around the jet stream only if the destination TAF covers the arrival window',
    'D. CAT is only found above the jet stream only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'CAT associated with jet streams: most severe on the cold (polar/poleward) side and below the jet core. The cyclonic shear zone (cold side) has the greatest temperature and wind gradients. Avoiding the jet: route on the warm (equatorial) side when possible. Forecasts show CAT areas on SIGWX charts. Reporting CAT via PIREP helps others avoid it.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'The "dew point spread" (temperature minus dew point) indicates:',
  options: [
    'A. The likelihood of thunderstorm development only if the destination TAF covers the arrival window',
    'B. The relative humidity — a spread of 2°C or less indicates near-saturation (high fog/cloud risk)',
    'C. The wind chill factor only if the destination TAF covers the arrival window',
    'D. Dew point spread is used only for runway surface condition assessment only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Dew point spread: the difference between temperature and dew point. Spread of 2°C or less = high risk of fog, low cloud, mist. Spread = 0 = saturated air = fog or cloud. In IFR planning: if aerodrome temperature/dew point spread is forecast to narrow to 2°C or less during the intended arrival time, low visibility conditions are possible.',
  reference: 'BOM meteorology / AIP GEN 2.2'
},

{
  question: 'An "AIRMET" differs from a "SIGMET" in that:',
  options: [
    'A. AIRMETs are more severe than SIGMETs only if the destination TAF covers the arrival window',
    'B. AIRMETs are only issued for oceanic areas only if the destination TAF covers the arrival window',
    'C. AIRMETs cover lower-level weather (below FL100) of meteorological significance to light aircraft operations',
    'D. There is no difference — AIRMET and SIGMET are interchangeable terms only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'AIRMET (Airmen\\\'s Meteorological Information): lower-level, less severe than SIGMET, covering moderate (not severe) icing/turbulence, IFR conditions (visibility <3 km or ceiling <1,000 ft), mountain obscuration, etc. Applies mainly below FL100. In some countries AIRMETs are called "low-level SIGMETs." In Australia: SIGMETs are the primary hazard product — check AIP GEN for current Australian AIRMET/SIGMET terminology.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'A "SPECI" (Special Meteorological Observation) is issued when:',
  options: [
    'A. A SPECI replaces the normal METAR schedule only if the destination TAF covers the arrival window',
    'B. SPECIs are only issued at international airports only if the destination TAF covers the arrival window',
    'C. A SPECI is only issued when requested by ATC only if the destination TAF covers the arrival window',
    'D. Conditions change significantly between routine observations — such as visibility dropping below or rising above certain thresholds,'
  ],
  correct: 3,
  explanation: 'SPECI (Special observation): issued when conditions change significantly — e.g. visibility crosses 800 m, 1,500 m, 3,000 m, or 5,000 m thresholds; wind shear onset; thunderstorm occurrence; significant cloud change. For IFR: SPECIs provide warning that conditions may now be below minima (or have improved to above minima). Check time of observation when using SPECI for approach planning.',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'The effect of temperature on ILS glide slope intercept altitude means:',
  options: [
    'A. Warmer temperatures cause the glide slope to be higher than standard only if the destination TAF covers the arrival window',
    'B. Temperature has no effect on ILS glide slope only if the destination TAF covers the arrival window',
    'C. Hot temperatures cause the glide slope to descend below the runway only if the destination TAF covers the arrival window',
    'D. In cold temperatures, the glide slope intercept altitude (pressure altitude) is lower in geometric terms than indicated'
  ],
  correct: 3,
  explanation: 'Cold temperature effect on ILS: the glide slope is defined by the radio beam (geometric angle unchanged) but the crossing altitudes on the approach chart are QNH altitudes, which in cold conditions are geometrically lower than indicated. An aircraft on the glide slope is actually lower than the chart altitudes suggest. PAPI showing high (4 white) when on the ILS in cold temperatures is expected — use the ILS glide slope, not PAPI, as the primary vertical reference.',
  reference: 'AIP ENR 1.5 / ICAO cold temperature guidance'
},

{
  question: 'The concept of "conditional forecasts" (TEMPO, BECMG, PROB) in TAFs means:',
  options: [
    'A. These elements are the most reliable parts of the TAF only if the destination TAF covers the arrival window',
    'B. PROB30 conditions can be ignored for IFR planning only if the destination TAF covers the arrival window',
    'C. Only BECMG elements affect IFR planning only if the destination TAF covers the arrival window',
    'D. TEMPO (temporary), BECMG (becoming), and PROB (probability — 30% or 40%) modify the base forecast'
  ],
  correct: 3,
  explanation: 'For IFR alternate planning: if any TAF element (including TEMPO or PROB30/40) indicates conditions may fall below landing minima during the planned arrival window, consider carrying alternate fuel. PROB30 = 30% probability; PROB40 = 40%. Operators and regulations differ — some require alternates if TEMPO/BECMG shows below minima; others require it only for BECMG and TEMPO, not PROB30. Check applicable regulations.',
  reference: 'AIP GEN 3.5 / CASR Part 91'
},

{
  question: 'The standard atmosphere (ISA) sea level temperature and lapse rate used for IFR flight planning is:',
  options: [
    'A. 25°C at sea level, lapse rate 3°C per 1,000 ft and all required documents are carried',
    'B. 0°C at sea level, lapse rate 1°C per 1,000 ft and all required documents are carried',
    'C. 15°C at sea level with no standard lapse rate and all required documents are carried',
    'D. 15°C at sea level, lapse rate 1.98°C per 1,000 ft (approximately 2°C/1,000 ft) to the tropopause at approximately 36,000 ft'
  ],
  correct: 3,
  explanation: 'ISA: sea level temperature 15°C, pressure 1013.25 hPa, density 1.225 kg/m³. Lapse rate: 1.98°C per 1,000 ft (approximately 2°C/1,000 ft) to the tropopause at FL360 (-56.5°C). Used for: density altitude calculation, performance calculations, icing level estimates, and pressure altitude conversions. ISA deviation (ISA+/ISA-) describes actual temperature relative to standard.',
  reference: 'ICAO Standard Atmosphere / AIP GEN 2.1'
},

{
  question: 'The VOLMET broadcast provides IFR pilots with:',
  options: [
    'A. Only departure aerodrome weather only if the destination TAF covers the arrival window',
    'B. VOLMET is only available on HF for oceanic flights only if the destination TAF covers the arrival window',
    'C. Continuous HF/VHF meteorological broadcasts of METARs and/or TAFs for a specified group of aerodromes',
    'D. VOLMET provides weather for the next 24 hours only only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'VOLMET: continuous voice meteorological broadcasts on VHF (regional) and HF (international) for groups of aerodromes — typically current METARs and/or TAFs. Australian VOLMET: various frequencies covering major aerodromes. IFR pilots monitor VOLMET to update destination/alternate weather, particularly when nearing top of descent. Digital datalink (ACARS, ATIS D-ATIS) supplements VOLMET.',
  reference: 'AIP GEN 3.5 / AIP COM 1.1'
},

{
  question: 'Wind shear alert systems (LLWAS — Low Level Wind Shear Alert System) at major aerodromes provide:',
  options: [
    'A. Only departure wind information only if the destination TAF covers the arrival window',
    'B. LLWAS measures upper-level winds only only if the destination TAF covers the arrival window',
    'C. LLWAS systems are not used in Australia only if the destination TAF covers the arrival window',
    'D. Real-time detection of surface wind variations between sensors around the aerodrome perimeter'
  ],
  correct: 3,
  explanation: 'LLWAS: network of wind sensors around the aerodrome. When sensors detect significant variation (wind shear alert threshold exceeded), ATC broadcasts: "Wind shear alert, [sector] boundary wind [direction/speed]." IFR significance: add a safety margin to approach speed, be prepared to go around, brief crew. Doppler weather radar also detects microbursts at some major airports.',
  reference: 'AIP AD section / ICAO wind shear guidance'
},

{
  question: 'The "lifting condensation level" (LCL) in IFR meteorology represents:',
  options: [
    'A. The altitude at which rising air reaches its dew point and condensation begins',
    'B. The maximum altitude for IFR operations only if the destination TAF covers the arrival window',
    'C. The freezing level altitude only if the destination TAF covers the arrival window',
    'D. The altitude at which jet streams form only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'LCL: the altitude at which a rising parcel of air cools to its dew point, condensation begins, and cloud base forms. A low LCL (small temp/dew point spread) = low cloud bases = IFR conditions possible. A high LCL with deep instability = high-based CB with severe turbulence at altitude. LCL is used to estimate cumulus/CB base heights in forecasting.',
  reference: 'BOM meteorology'
},

{
  question: 'Instrument meteorological conditions (IMC) at a non-controlled aerodrome require:',
  options: [
    'A. No special procedures — pilots can land whenever they choose only if the destination TAF covers the arrival window',
    'B. Only a VFR licence is required for IMC operations at uncontrolled aerodromes only if the destination TAF covers the arrival window',
    'C. The pilot must hold an instrument rating with currency, the aircraft must be IFR equipped, a flight plan must be filed',
    'D. IMC operations are not permitted at non-controlled aerodromes only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IMC at non-controlled aerodrome: requires current instrument rating and currency, IFR-equipped aircraft, flight plan filed (activating SAR coverage and providing traffic information), available published instrument approach procedure, and self-announced positions on CTAF. Without a published approach, an IFR descent to aerodrome is not authorised unless visual descent from MSA is possible.',
  reference: 'CASR Part 61 / CASR Part 91 / AIP ERSA'
},

{
  question: 'The VOR (VHF Omnidirectional Range) provides:',
  options: [
    'A. Distance and bearing to the station when the aircraft has a valid maintenance release',
    'B. Magnetic bearing FROM the VOR station — the OBS is set to select the desired radial, and the CDI indicates deviation from that radial',
    'C. Vertical guidance for precision approaches provided weather is above published minima',
    'D. Aircraft position in latitude/longitude as approved by CASA under current regulations'
  ],
  correct: 1,
  explanation: 'VOR provides magnetic bearing from the station (radial). The OBS selects the desired radial. CDI shows left/right deviation. TO/FROM flag: TO = the selected course leads TO the station; FROM = flying away from station on selected radial. VOR operates 108–117.95 MHz. A single VOR gives one position line; two VORs give a fix.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'The VOR CDI "full scale deflection" represents:',
  options: [
    'A. 5 nm off course only if the destination TAF covers the arrival window',
    'B. ±2° from the selected course only if the destination TAF covers the arrival window',
    'C. Full scale varies with distance from the station as approved by CASA under current regulations',
    'D. ±10° from the selected course — each dot of deflection represents approximately 2°; full scale = 10° off course at any distance from the station'
  ],
  correct: 3,
  explanation: 'VOR CDI sensitivity: full scale (5 dots) = ±10° from selected course. Each dot ≈ 2°. Unlike an ILS localiser (which narrows physically), the VOR CDI angular sensitivity is constant regardless of distance — but the physical distance represented by 10° is much greater far from the station than close to it.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Flying "FROM" a VOR on a specific radial, the OBS should be set to:',
  options: [
    'A. The radial being flown (the bearing FROM the station) — the TO/FROM indicator will show FROM',
    'B. The reciprocal of the desired radial only if the destination TAF covers the arrival window',
    'C. Magnetic track to the next waypoint only if the destination TAF covers the arrival window',
    'D. True heading of the aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Flying FROM a VOR: set OBS to the outbound radial (bearing FROM the station). TO/FROM shows FROM. CDI needle: fly toward the needle to re-intercept the radial. Common error: setting the OBS to the reciprocal (inbound course) creates reverse sensing — the needle deflects away from the correct direction.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'VOR "scalloping" or "course roughness" is caused by:',
  options: [
    'A. Pilot errors in setting the OBS only if the destination TAF covers the arrival window',
    'B. Atmospheric refraction at high altitude only if the destination TAF covers the arrival window',
    'C. Multipath interference — the VOR signal reflects off terrain, buildings, or other objects causing erratic CDI fluctuations',
    'D. Interference from nearby NDB stations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'VOR scalloping: CDI makes rapid, irregular left-right movements rather than steady tracking. Caused by multipath — reflected signals arriving at the aircraft from different directions, creating phase interference. Reduce OBS-induced roughness by tracking the average deflection. Report significant scalloping — it may indicate a facility fault. Scalloping increases in mountainous terrain and at long range.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'The NDB (Non-Directional Beacon) provides:',
  options: [
    'A. A magnetic bearing TO the station, displayed as the ADF needle pointing toward the beacon',
    'B. A course line to fly outbound from the station only if the destination TAF covers the arrival window',
    'C. Distance to the station in nm only if the destination TAF covers the arrival window',
    'D. Both distance and bearing — the same as a VOR/DME only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'NDB/ADF: the ADF needle points toward the NDB. The magnetic bearing to the station = aircraft magnetic heading + relative bearing (ADF needle reading). NDB approaches track the needle TO the beacon on approach. The ADF does not provide a CDI like VOR — it provides a relative bearing display. Errors include: quadrantal error, coastal refraction, night effect, thunderstorm bearing errors.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'NDB "coastal refraction" affects ADF bearings when:',
  options: [
    'A. Flying over mountains only if the destination TAF covers the arrival window',
    'B. Flying at night reduces coastal refraction only if the destination TAF covers the arrival window',
    'C. Coastal refraction only affects VHF signals only if the destination TAF covers the arrival window',
    'D. The radio wave crosses a coastline at an oblique angle — the change in ground conductivity at the coast bends the radio wave, causing a'
  ],
  correct: 3,
  explanation: 'Coastal refraction (coastal effect): LF/MF radio waves bend when crossing a coast obliquely due to the difference in conductivity between land and water. The wave bends toward the coast, making the aircraft think the NDB is in a slightly different direction. Error is greatest at oblique angles (45°), minimum when crossing perpendicular. For NDB approaches near the coast: be aware of possible bearing error.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'NDB bearing errors during thunderstorms occur because:',
  options: [
    'A. Thunderstorms increase the power of the NDB signal and all required documents are carried',
    'B. The magnetic field from thunderstorms rotates the ADF compass card and all required documents are carried',
    'C. Thunderstorms have no effect on NDB/ADF systems and all required documents are carried',
    'D. Lightning discharges on the same frequency as the NDB confuse the ADF — the needle deflects toward lightning rather than the beacon'
  ],
  correct: 3,
  explanation: 'Thunderstorm effect on ADF: lightning produces strong LF/MF energy on the same frequencies as NDBs. The ADF receiver may home on lightning strikes rather than the beacon — the needle deflects toward the storm. This is a well-known hazard of NDB navigation in areas of thunderstorm activity. In CB-active areas, NDB bearings are unreliable. Cross-check with other navigation systems.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'The "night effect" on NDB bearings occurs because:',
  options: [
    'A. NDB transmitters reduce power at night only if the destination TAF covers the arrival window',
    'B. Night reduces the ground conductivity affecting the NDB signal only if the destination TAF covers the arrival window',
    'C. At night, the ionosphere descends and reflects LF/MF signals from distant transmitters back to earth',
    'D. Night effect is most severe at midday only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Night effect: at night, the D and E ionospheric layers combine, reflecting MF/LF signals that normally travel along the ground. Reflected signals from distant transmitters arrive at the same frequency as the local NDB, causing interference. ADF needle becomes unsteady or deflects away from the NDB. Night effect is worst at dawn and dusk. Use other navigation methods when NDB is unreliable at night.',
  reference: 'AIP ENR 4.1'
},

{
  question: '"Quadrantal error" in ADF/NDB systems is caused by:',
  options: [
    'A. The pilot setting the wrong frequency',
    'B. Night-time ionospheric refraction affecting the NDB ground wave signal accuracy',
    'C. Coastal refraction when the NDB signal crosses a coastline at an oblique angle',
    'D. The aircraft\'s metallic fuselage re-radiating the NDB signal and distorting the directional reading — error is maximum when the NDB is approximately 45° from the aircraft heading'
  ],
  correct: 3,
  explanation: 'Quadrantal error: the aircraft fuselage acts as a secondary antenna, distorting the directional properties of the loop antenna. Error is maximum (up to ±5°) when the NDB is approximately 45° from the aircraft heading, and minimum when beam-on (0°/180°) or directly ahead/behind (90°/270°). Corrected by ADF compensator coils. Some error typically remains — treat NDB bearings as approximate.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'DME "slant range" error is greatest when:',
  options: [
    'A. Directly overhead or very close to the DME station and at high altitude — slant range includes altitude above ground, so the indicated distance is',
    'B. At maximum range from the DME station only if the destination TAF covers the arrival window',
    'C. Flying at low altitude away from the station only if the destination TAF covers the arrival window',
    'D. Slant range error is constant regardless of position only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'DME slant range: DME measures the straight-line (slant) distance from aircraft to ground transponder, not the ground distance. Error = sqrt(D²ground + H²). At 10,000 ft altitude directly overhead the station: DME reads 10,000 ft = 1.6 nm, but ground distance = 0. At practical distances (>5 nm), slant range error is negligible (typically <0.1 nm for most approaches). Error matters most when directly overhead.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'A "DME arc" procedure requires the aircraft to:',
  options: [
    'A. Fly directly to the DME station only if the destination TAF covers the arrival window',
    'B. Maintain a constant DME distance from the station while tracking an arc to intercept the final approach course',
    'C. Fly at a constant altitude using DME distance only if the destination TAF covers the arrival window',
    'D. DME arcs are only used for departure procedures only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'DME arc: a curved path at constant DME distance from the station, used to transition from arrival to final approach course. Technique: use "lead radial" to begin turning to the final approach course; adjust heading by 10–20° increments to maintain the arc distance. As the arc is flown, the VOR radials should rotate steadily. Lead radial calculation: arc radius ÷ 10 = lead radial.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'GNSS (Global Navigation Satellite System) position accuracy for IFR approaches depends on:',
  options: [
    'A. Only the number of satellites in view only if the destination TAF covers the arrival window',
    'B. Aircraft altitude only only if the destination TAF covers the arrival window',
    'C. Satellite geometry (PDOP), number of satellites tracked, signal quality, RAIM availability, and for approaches the augmentation system (SBAS or GBAS)',
    'D. GNSS accuracy is fixed at ±10 m globally only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'GNSS IFR accuracy factors: satellite geometry (PDOP — Position Dilution of Precision); number of satellites tracked (minimum 4 for 3D); signal quality; RAIM (Receiver Autonomous Integrity Monitoring) for NPA; SBAS (WAAS/GRAS) for APV/LPV; GBAS for CAT I/II/III precision. All must meet required performance levels for the intended operation. Pre-flight RAIM prediction is mandatory for IFR.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9613'
},

{
  question: 'RAIM (Receiver Autonomous Integrity Monitoring) in GNSS provides:',
  options: [
    'A. An internal check of GNSS integrity — the receiver monitors satellite consistency and alerts the pilot if the position cannot be trusted to the required accuracy',
    'B. A backup VOR receiver only if the destination TAF covers the arrival window',
    'C. Enhanced signal strength from satellites only if the destination TAF covers the arrival window',
    'D. RAIM corrects for ionospheric delay automatically only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'RAIM: using redundant satellite signals (typically 5+ satellites), the GNSS receiver can detect if one satellite is providing erroneous data and either exclude it or generate an integrity alarm. For IFR NPA approaches: RAIM must be available at and after the FAF. RAIM prediction (pre-flight) forecasts availability. RAIM failure: cannot use GNSS for that phase of flight — must have alternative navigation.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9613'
},

{
  question: 'The GPS "WAAS" or Australian "GRAS" augmentation system provides:',
  options: [
    'A. A backup GPS constellation only if the destination TAF covers the arrival window',
    'B. An entirely separate navigation system independent of GPS only if the destination TAF covers the arrival window',
    'C. SBAS reduces GPS range to 100 nm only if the destination TAF covers the arrival window',
    'D. Satellite-Based Augmentation System (SBAS) — ground stations monitor GPS satellites and broadcast corrections and integrity data via a geostationary satellite'
  ],
  correct: 3,
  explanation: 'SBAS (WAAS in USA, GRAS in Australia, EGNOS in Europe): ground reference stations monitor GPS, detect errors and ionospheric effects, and uplink corrections to a geostationary satellite which broadcasts integrity and correction data on the GPS frequency. Enables APV (approach with vertical guidance) and LPV approaches with DH as low as 200 ft. Requires SBAS-capable FMS/GPS.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'For a GPS RNAV approach, "CDI sensitivity" changes to:',
  options: [
    'A. Changes in phases: en-route ±2 nm; terminal ±1 nm; approach ±0.3 nm at the FAF, narrowing to ±0.1 nm (or ±0.05 nm for RNP approaches) on the final segment',
    'B. Stays at ±5 nm throughout only if the destination TAF covers the arrival window',
    'C. CDI sensitivity is fixed at ±0.3 nm for all RNAV approaches only if the destination TAF covers the arrival window',
    'D. CDI sensitivity is pilot-selectable during the approach only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'RNAV CDI phases (GNSS receiver): en-route (±2 nm full scale), terminal (±1 nm from 30 nm to FAF), approach active (±0.3 nm when approach mode activates near FAF). For RNP APCH: ±0.1 nm on final approach segment (some to ±0.05 nm). The tightening sensitivity requires precise tracking as the approach progresses — deviations that are acceptable en-route are not acceptable on final.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9613'
},

{
  question: 'The "FMS" (Flight Management System) for IFR operations must have a current:',
  options: [
    'A. Annual calibration certificate only if the destination TAF covers the arrival window',
    'B. Navigation database with current AIRAC cycle — the database must be current for the period of flight',
    'C. ATC-issued database approval only if the destination TAF covers the arrival window',
    'D. Pilot-entered waypoints override the need for a current database only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'FMS/GNSS navigation database: AIRAC cycle = 28 days. For IFR approaches and procedures, the database must be current (valid AIRAC cycle). Using an expired database for IFR approaches is generally not permitted (some operators have procedures for using a non-current database with restrictions). Current database ensures procedures, navaids, and waypoints reflect the latest published data.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'The ILS marker beacon sequence on a standard ILS approach is:',
  options: [
    'A. Middle marker, then outer marker only if the destination TAF covers the arrival window',
    'B. Inner marker first, then middle marker, then outer marker only if the destination TAF covers the arrival window',
    'C. Outer marker (OM) at approximately 4–7 nm, middle marker (MM) at approximately 0.5–1 nm from threshold, inner marker (IM)',
    'D. Only one marker is used on modern ILS installations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ILS markers (approach to runway): (1) OM (outer marker) — 4–7 nm, 400 Hz dashes, BLUE light; (2) MM (middle marker) — approximately 0.5–1 nm from threshold near DH, 1,300 Hz dots and dashes, AMBER light; (3) IM (inner marker) — near runway, 3,000 Hz dots, WHITE light (CAT II/III only). Many modern installations replace markers with DME or GNSS fix identification.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'GNSS approaches requiring "baro-aiding" use:',
  options: [
    'A. A barometric altimeter to substitute for one GPS satellite only if the destination TAF covers the arrival window',
    'B. Barometric altitude input to the GPS receiver as a substitute for a geometric altitude satellite measurement',
    'C. Baro-aiding is only used for VOR approaches only if the destination TAF covers the arrival window',
    'D. Baro-aiding provides horizontal position accuracy only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Baro-aiding: the GPS receiver uses barometric altitude (from the air data computer or altimeter) as a pseudo-range input equivalent to one satellite. This improves the RAIM computation and reduces the minimum satellite requirement. For baro-aided GPS approaches, the altimeter setting must be correct — an incorrect QNH setting causes vertical errors. Critical in cold temperatures where altimetry errors are present.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9613'
},

{
  question: 'The localiser course width (total) for an ILS is approximately:',
  options: [
    'A. 10° total (±5°) provided the pilot holds a current medical certificate',
    'B. 20° total (±10°) provided the pilot holds a current medical certificate',
    'C. 5° total (±2.5°) — narrower course widths are achievable but the standard full-scale deflection is ±2.5° from centreline',
    'D. The course width is the same as a VOR radial and all required documents are carried'
  ],
  correct: 2,
  explanation: 'ILS localiser course width: adjusted at installation to be approximately ±2.5° from centreline at full-scale CDI deflection — approximately 700 ft wide at threshold. Some short runways may have narrower widths (as small as ±2°) to maintain the physical width of approximately 700 ft at threshold. Course width is published on approach charts.',
  reference: 'AIP ENR 4.1 / ICAO Annex 10'
},

{
  question: 'The ILS glide slope has a "false glide slope" at approximately:',
  options: [
    'A. 3° above the true glide slope only if the destination TAF covers the arrival window',
    'B. 1° below the true glide slope only if the destination TAF covers the arrival window',
    'C. Approximately 9° — three times the true glide slope angle; the false glide slope is at 9° (for a 3° ILS) and if followed would result in an excessively steep approach',
    'D. False glide slopes do not exist on modern ILS only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ILS glide slope false slopes: the glide slope signal has multiple lobes. The first false (upper) glide slope is at approximately 3× the true angle (9° for a standard 3° GS). If the aircraft attempts to intercept from above the glide slope, it may intercept the false glide slope instead. Always intercept the ILS glide slope from below — fly level or slightly below the glide path to ensure you intercept the correct lobe.',
  reference: 'AIP ENR 4.1 / ICAO Annex 10'
},

{
  question: 'The "Category II" ILS approach requires:',
  options: [
    'A. Only a single pilot with current instrument rating only if the destination TAF covers the arrival window',
    'B. DH 100–200 ft and RVR 300 m, plus specific aircraft certification, avionics qualification (flight director or autopilot), specific pilot training and currency',
    'C. CAT II is available to any aircraft with a working ILS receiver only if the destination TAF covers the arrival window',
    'D. CAT II has no specific training requirements beyond CAT I only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'CAT II ILS: DH 100–200 ft, RVR 300 m minimum. Requirements: (1) Aircraft: certified for CAT II, dual ILS receivers, CAT II autopilot/flight director; (2) Crew: specific CAT II training and currency; (3) Aerodrome: CAT II lighting (approach and runway), monitoring, obstacle clearance; (4) RVR reporting equipment. CAT II is not available at most Australian regional airports.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'A "course reversal" on an instrument approach procedure is used to:',
  options: [
    'A. Align the aircraft with the final approach course when arriving from a direction opposite to the approach',
    'B. Allow the aircraft to reverse course and return to the departure aerodrome only if the destination TAF covers the arrival window',
    'C. Course reversal is only used for NDB approaches only if the destination TAF covers the arrival window',
    'D. A course reversal is the same as a missed approach only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Course reversal: when arriving from the "wrong side" (opposite direction to the final approach), a course reversal reverses the aircraft\\\'s direction onto the final approach track. Types: (1) Procedure turn (PT) — 45° turn then 180° turn back; (2) Racetrack (holding-type) with outbound then inbound; (3) Base turn. No course reversal when "NoPT" published or when radar-vectored to final.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "NoPT" notation on an approach chart means:',
  options: [
    'A. No pilot training required for this approach only if the destination TAF covers the arrival window',
    'B. No precision available on this approach only if the destination TAF covers the arrival window',
    'C. Night operations permitted only if the destination TAF covers the arrival window',
    'D. No Procedure Turn — the procedure turn (course reversal) is not authorised when arriving via the specified routing'
  ],
  correct: 3,
  explanation: '"NoPT" (No Procedure Turn): when arriving from a specified direction (e.g. radar vectors, or via a specified STAR or routing), a procedure turn is not required and not authorised — the aircraft proceeds directly to the approach from the given routing. Flying a procedure turn when NoPT is specified would take the aircraft outside the protected airspace.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An RNP 0.3 designation on an RNAV approach means:',
  options: [
    'A. The approach requires a minimum aircraft speed of 0.3 Mach only if the destination TAF covers the arrival window',
    'B. The approach can only be used within 0.3 nm of the airport only if the destination TAF covers the arrival window',
    'C. The Required Navigation Performance value of 0.3 — the aircraft navigation system must maintain the aircraft within ±0.3 nm of the centreline 95% of the time',
    'D. RNP 0.3 means 3 satellites are required only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'RNP value: total system error must be within the RNP value (in nm) at least 95% of the time, with an alarm limit (typically 2× the RNP value) for the monitoring and alerting system. RNP 0.3: track keeping within 0.3 nm (95%), alert at 0.6 nm. RNP approaches require OPMA — the system alerts the crew if the RNP cannot be maintained. Higher RNP numbers = less precise (RNP 4 is en-route oceanic).',
  reference: 'ICAO Doc 9613 / AIP ENR 1.5'
},

{
  question: 'The "accuracy" of GNSS position for IFR approaches is typically:',
  options: [
    'A. ±10 nm only if the destination TAF covers the arrival window',
    'B. Exactly ±1 m at all times only if the destination TAF covers the arrival window',
    'C. Approximately ±10–30 m for standard GPS (95%); SBAS improves this to approximately ±3–7 m horizontal, ±3–5 m vertical (95%)',
    'D. GPS accuracy for IFR is the same as for VFR flight only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'GPS accuracy: standalone GPS (SPS) approximately ±10–30 m horizontal (95%). With SBAS: approximately ±3–7 m horizontal, ±3–5 m vertical (95%). GBAS (ground-based augmentation): precision approach accuracy (sub-metre). For IFR: the approach procedure design and the required navigation performance value account for the GPS accuracy plus all other system errors. RAIM or SBAS integrity monitoring is required for IFR use.',
  reference: 'ICAO Doc 9613 / AIP ENR 1.5'
},

{
  question: 'A "VOR/DME" approach uses:',
  options: [
    'A. VOR for both lateral and vertical guidance only if the destination TAF covers the arrival window',
    'B. DME for lateral guidance only only if the destination TAF covers the arrival window',
    'C. VOR for lateral (course) guidance and DME for distance determination of step-down fixes, FAF, and MAP position',
    'D. VOR/DME approaches are the same as ILS approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'VOR/DME approach: uses VOR for lateral guidance (track to/from station) and DME for distance. DME provides: crossing altitudes at specific distances, FAF identification, MAP identification (e.g. "MAP at 2.5 DME"), and step-down fix identification. More accurate than VOR alone for timing-based approaches. Requires both VOR and DME to be operative and identified.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "on-course" indication of a VOR when the CDI is centred means:',
  options: [
    'A. The aircraft is on the selected radial regardless of heading and all required documents are carried',
    'B. The aircraft is heading directly to the VOR station when the aircraft has a valid maintenance release',
    'C. The aircraft is on the selected course — but heading may differ due to wind; the CDI shows position deviation from the course line, not heading error',
    'D. On-course means heading equals the selected OBS value as approved by CASA under current regulations'
  ],
  correct: 2,
  explanation: 'VOR CDI centred: aircraft is ON the selected radial — regardless of heading. In a crosswind, the aircraft must fly a wind correction angle (WCA) to maintain the radial. The CDI shows positional deviation from the radial, not heading. Centred CDI with correct WCA applied = tracking the radial. Common error: chasing the needle (aggressive corrections overshoot the radial).',
  reference: 'AIP ENR 4.1'
},

{
  question: 'When transitioning from VOR en-route to an ILS approach, the pilot should:',
  options: [
    'A. Switch the navigation display from VOR to ILS (LOC) mode on the CDI/HSI before reaching the ILS intercept point',
    'B. Leave the OBS set to the VOR course throughout only if the destination TAF covers the arrival window',
    'C. The radio automatically switches from VOR to ILS only if the destination TAF covers the arrival window',
    'D. Set the OBS to 000 when transitioning to ILS only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'VOR-to-ILS transition: the pilot must select the ILS frequency on the NAV radio and ensure the CDI/HSI is in LOC (ILS) mode, not VOR mode. ILS localiser sensitivity (±2.5° full scale) is much more sensitive than VOR (±10° full scale). If the CDI remains in VOR mode during an ILS approach, deviations will appear small even when significantly off centreline — the ILS CDI will appear almost always centred.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Instrument approach procedures are designed with "obstacle clearance surfaces" that assume:',
  options: [
    'A. The aircraft is flown with autopilot only only if the destination TAF covers the arrival window',
    'B. A 500 ft buffer above all obstacles regardless of technique only if the destination TAF covers the arrival window',
    'C. The aircraft is flown within specific tolerances of the published procedure — lateral containment within XTT (cross-track tolerance), altitude within published crossing tolerances',
    'D. The pilot can deviate freely within the approach segment only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach obstacle clearance: procedures are designed with protected areas based on navigation accuracy and assumed flight technique. Flying outside the lateral or vertical tolerances places the aircraft in terrain that may not have been checked for obstacle clearance. A CDI deflection of more than one dot below MDA, or flying early at a step-down, could place the aircraft below the obstacle clearance surface.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The "ADF relative bearing" is:',
  options: [
    'A. The magnetic bearing to the NDB station',
    'B. The angle between the aircraft\\',
    ',
    ',
    ',
    '
  ],
  correct: 1,
  explanation: 'ADF relative bearing: angle from aircraft nose (0°) to the NDB, read clockwise. To find magnetic bearing to station: MH + RB (if sum >360°, subtract 360°). Example: heading 090°M, ADF reads 270° relative bearing → bearing to station = 090 + 270 = 360°M (due north). The ADF needle always points at the station — the pilot must add heading to convert to magnetic bearing.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'GPS "PDOP" (Position Dilution of Precision) affects navigation accuracy because:',
  options: [
    'A. PDOP measures satellite geometry — a low PDOP (1–2) means satellites are well spread across the sky providing good geometry and precise position fixing',
    'B. A high PDOP means more satellites are available only if the destination TAF covers the arrival window',
    'C. PDOP only affects vertical accuracy only if the destination TAF covers the arrival window',
    'D. PDOP is not relevant to IFR GPS approaches only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'PDOP (Position Dilution of Precision): quantifies the effect of satellite geometry on position accuracy. Low PDOP (1–2) = good geometry = accurate position. High PDOP (>6) = poor geometry = large position errors for the same satellite measurement errors. Satellites spread across the sky (including one overhead) give best geometry. PDOP is monitored by RAIM — a high PDOP contributes to RAIM alerting.',
  reference: 'ICAO Doc 9613'
},

{
  question: 'An IFR aircraft is radar vectored to the ILS final approach course. The controller says "turn right heading 280, intercept localiser, cleared ILS runway 25." The pilot should:',
  options: [
    'A. Turn to 280°, intercept and track the localiser centreline inbound, confirm glide slope establishment, complete the approach checks, and maintain the approach to DH',
    'B. Turn to 280° and then turn immediately to 250° runway heading provided the pilot holds a current medical certificate',
    'C. Request a holding pattern before intercepting the localiser provided the pilot holds a current medical certificate',
    'D. Set OBS to 250° and arm the approach mode on autopilot, but not descend until the outer marker and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Radar vector to ILS: turn to assigned heading (280°), tune/identify ILS, intercept the localiser (CDI begins to centre), then roll onto the approach course (250° runway heading with any WCA). As localiser establishes, check glide slope indicator — do not descend below the current assigned altitude until established on glide slope and cleared. Complete approach items. Fly ILS to DH.',
  reference: 'AIP ENR 1.1 / AIP ENR 1.5'
},

{
  question: 'The "approach plate" (instrument approach chart) legend for "CAT" refers to:',
  options: [
    'A. The aircraft\'s maximum certified landing weight category assigned by CASA',
    'B. The approach category for weather minimums — CAT I, II, or III for precision approaches',
    'C. The aircraft\'s approach category based on Vat (1.3 × Vso) — determining circling radii and applicable minima: Cat A <91 kt, Cat B 91–120 kt, Cat C 121–140 kt, Cat D 141–165 kt',
    'D. The category of IFR certification required — basic, intermediate, or advanced'
  ],
  correct: 2,
  explanation: 'Aircraft approach category (Cat A–E): based on Vat = 1.3 × Vso (stall speed in landing configuration). Cat A: Vat <91 kt; Cat B: 91–120 kt; Cat C: 121–140 kt; Cat D: 141–165 kt; Cat E: >165 kt. Different categories have different circling radii and may have different minima. Most light aircraft (PA-28, C172, DA40) are Cat A.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When an RNAV(GNSS) approach chart shows "LNAV/VNAV" minima, this means:',
  options: [
    'A. The approach requires both VOR and GNSS only if the destination TAF covers the arrival window',
    'B. LNAV only — vertical is not available on this approach only if the destination TAF covers the arrival window',
    'C. LNAV/VNAV is the same as an ILS Category II approach only if the destination TAF covers the arrival window',
    'D. LNAV/VNAV: lateral navigation (GNSS) combined with vertical navigation (barometric VNAV from the FMS)'
  ],
  correct: 3,
  explanation: 'LNAV/VNAV: Lateral Navigation (GNSS) + Vertical Navigation (baro-VNAV). The FMS computes a vertical path using barometric altitude. Classified as APV (APproach with Vertical guidance) — not precision, not non-precision. Uses DA/H (not MDA). Minima typically higher than LPV but lower than LNAV (MDA). Requires FMS with VNAV capability and compatible aircraft certification.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "LNAV" minima row on an RNAV(GNSS) approach chart is used when:',
  options: [
    'A. The aircraft has SBAS capability only if the destination TAF covers the arrival window',
    'B. The aircraft cannot achieve LNAV/VNAV or LPV — LNAV provides lateral guidance only',
    'C. LNAV provides the lowest available minima only if the destination TAF covers the arrival window',
    'D. LNAV is used for Category II approaches only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'LNAV (Lateral Navigation) only: the lowest level of RNAV(GNSS) approach. Provides lateral guidance only — no vertical guidance from the avionics. Flown to MDA. Used when SBAS (for LPV) and baro-VNAV (for LNAV/VNAV) are not available or not authorised. LNAV minima are the highest (worst) of the RNAV approach options.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "ILS sensitivity" principle means that at 10 nm from the threshold on localiser:',
  options: [
    'A. One dot of CDI deflection (2°) represents a physical displacement of approximately 350 ft',
    'B. The CDI is most sensitive at 10 nm only if the destination TAF covers the arrival window',
    'C. The ILS signal is not receivable beyond 10 nm only if the destination TAF covers the arrival window',
    'D. The CDI shows distance in miles at 10 nm only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ILS angular sensitivity: at 10 nm, 1° angular deviation = 10 nm × tan(1°) ≈ 1,000 ft. At 1 nm, 1° ≈ 100 ft. The ILS CDI always shows angular deviation — the same needle deflection represents increasing physical accuracy as the aircraft approaches the runway. This is why strict tracking at the outer marker translates to precise centreline at the inner marker.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'The VOR "cone of silence" (station passage) is indicated by:',
  options: [
    'A. The CDI swinging to full deflection before centring only if the destination TAF covers the arrival window',
    'B. The ADF needle pointing to 180° only if the destination TAF covers the arrival window',
    'C. A GPWS alert when directly over the VOR only if the destination TAF covers the arrival window',
    'D. TO/FROM flag flickering or flagging (signal unreliable), CDI becoming erratic as the aircraft is directly over the VOR'
  ],
  correct: 3,
  explanation: 'VOR cone of silence: directly above the VOR, the signal is weak and unreliable. As the aircraft approaches overhead: TO/FROM flag flickers then flags (off); CDI becomes erratic. After passing overhead: TO changes to FROM (if OBS set to current course). The CDI behaviour during station passage confirms the aircraft has crossed the VOR. Do not make navigation decisions during station passage.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'The correct instrument cross-check sequence during an ILS approach is:',
  options: [
    'A. Alternate between altimeter and airspeed only only if the destination TAF covers the arrival window',
    'B. Focus entirely on the localiser CDI and ignore the glide slope only if the destination TAF covers the arrival window',
    'C. A rapid scan covering: attitude indicator (primary pitch/bank), altimeter (altitude trend), ASI (speed), VSI (rate of descent), heading indicator, and both localiser and glide slope CDIs',
    'D. Watch the glide slope exclusively and use autopilot for localiser only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ILS approach instrument scan: attitude indicator (AI) is primary — pitch for rate of descent, bank for localiser tracking; cross-check ASI (approach speed), altimeter (height), VSI (rate). Simultaneously monitor both localiser (lateral) and glide slope (vertical) CDIs. Do not fixate on either CDI — excessive focus on localiser leads to glide slope deviation and vice versa. Continuous scan to DH.',
  reference: 'AIP ENR 1.5 / CASA IFR guidance'
},

{
  question: 'When an approach requires "DME required" and DME is unserviceable, the pilot must:',
  options: [
    'A. Not conduct the approach — if the chart specifies DME as required and the aircraft DME is unserviceable, the approach cannot be safely flown and an alternative procedure or diversion is required',
    'B. Continue the approach at a higher altitude as a precaution',
    'C. Use GPS distance to substitute for DME without specific approval',
    'D. Conduct the approach at pilot discretion if familiar with the aerodrome'
  ],
  correct: 0,
  explanation: '"DME required": the procedure cannot be safely conducted without DME (for fix identification, MAP location, or step-down fix crossing). If the aircraft DME is unserviceable, the pilot must select an approach that does not require DME (if available) or divert. ATC radar can provide position advisory information but this does not substitute for a required DME in the approach design.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "GNSS substitute" for traditional navaid identification is:',
  options: [
    'A. GNSS/FMS waypoints are identified by database name — the pilot verifies the correct approach is loaded by checking: approach name, aerodrome, runway',
    'B. The pilot must always identify navaids by Morse code regardless of GNSS only if the destination TAF covers the arrival window',
    'C. GNSS automatically identifies all navaids by cross-checking only if the destination TAF covers the arrival window',
    'D. GNSS approaches do not require any identification procedures only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'GNSS approach verification: instead of tuning and identifying a VOR/NDB by ident, for GNSS approaches: select the correct approach from the FMS database; verify the approach, aerodrome, runway, and date; check that the aircraft position agrees with expected position (chart comparison); verify RAIM/integrity. The FMS database entry effectively substitutes for Morse code identification.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR fuel requirement for a flight to a destination with an alternate includes:',
  options: [
    'A. Taxi fuel + trip fuel (destination) + alternate fuel (destination to alternate) + final reserve',
    'B. Taxi fuel only only if the destination TAF covers the arrival window',
    'C. Trip fuel plus 10% contingency only only if the destination TAF covers the arrival window',
    'D. Only enough fuel to reach the destination only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR fuel: taxi fuel + trip fuel to destination + fuel from destination to alternate + final reserve (fixed reserve — typically 45 min for piston, 30 min for turbine at holding speed at 1,500 ft) + contingency (5–10% or minimum amount for unforeseen routing) + any required holding fuel. The calculation must ensure the planned fuel is not less than the minimum required.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The "final reserve fuel" for a piston-engined IFR aircraft is:',
  options: [
    'A. 30 minutes at cruise power only if the destination TAF covers the arrival window',
    'B. 45 minutes at holding speed at 1,500 ft above destination — the minimum fuel that must remain on landing',
    'C. 1 hour at economy cruise only if the destination TAF covers the arrival window',
    'D. Final reserve is 10% of trip fuel only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Final reserve fuel (piston): 45 minutes at holding speed at 1,500 ft above destination aerodrome (or alternate, whichever has higher elevation). This is an absolute minimum — landing with less than final reserve is an emergency fuel situation. Turbine aircraft: 30 minutes. The final reserve exists to ensure fuel remains for an unexpected second approach or late routing change.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'When is an IFR alternate NOT required for a flight plan?',
  options: [
    'A. An alternate is always required for IFR only if the destination TAF covers the arrival window',
    'B. When the destination is within 50 nm only if the destination TAF covers the arrival window',
    'C. Alternates are not required for day IFR flights only if the destination TAF covers the arrival window',
    'D. When the destination TAF (or equivalent) for the period ETA-1 hour to ETA+1 hour forecasts cloud above 2,000 ft and visibility above 8 km'
  ],
  correct: 3,
  explanation: 'Alternate not required (1-2-3 rule): if from ETA -1hr to ETA +1hr the TAF forecasts: ceiling above 2,000 ft (or 1,000 ft above the lowest approach minimum, whichever is greater) AND visibility above specified minima AND the aerodrome has at least one instrument approach available. Check CASR Part 91 for exact thresholds — these are approximate values; actual requirements depend on approach types available.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The "alternate fuel" calculation assumes:',
  options: [
    'A. Fuel to return to departure aerodrome only if the destination TAF covers the arrival window',
    'B. A fixed 1-hour fuel addition only if the destination TAF covers the arrival window',
    'C. Fuel to fly from the destination missed approach point to the alternate aerodrome and conduct an approach and landing',
    'D. Alternate fuel = 50% of trip fuel only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Alternate fuel: from the destination (after a missed approach — at the missed approach point altitude) to the alternate, plus the approach at the alternate, plus fuel to land. Calculated using: expected altitude, forecast wind and temperature, aircraft fuel burn at that altitude/power setting. The route may not be direct — airways routing or SID/STAR requirements may affect the distance.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'An IFR flight plan\\\'s "fuel endurance" item should reflect:',
  options: [
    'A. Total usable fuel on board expressed as flying time — typically to the point at which final reserve fuel will be exhausted (i.e',
    'B. Trip fuel only only if the destination TAF covers the arrival window',
    'C. Only the fuel to reach the alternate only if the destination TAF covers the arrival window',
    'D. Fuel endurance need not be accurate on IFR flight plans only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Fuel endurance on flight plan: total usable fuel expressed as hours and minutes of flight. This activates the correct SAR timeline — if the aircraft is overdue, SAR will know approximately when the aircraft ran out of fuel. It is important that fuel endurance is realistic — not an overestimate (delays SAR) or underestimate (triggers premature SAR response).',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The "LSALT" (Lowest Safe Altitude) for IFR en-route flight is:',
  options: [
    'A. The minimum altitude anywhere in Australia for IFR flight only if the destination TAF covers the arrival window',
    'B. 5,000 ft AMSL in all cases only if the destination TAF covers the arrival window',
    'C. The lowest altitude that provides at least 1,000 ft (or 2,000 ft in mountainous areas) obstacle clearance within a specified distance of the route',
    'D. LSALT equals the MEA on all airways only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'LSALT: Lowest Safe Altitude — provides the specified vertical buffer (1,000 ft in flat terrain, 2,000 ft in mountainous) above the highest obstacle within the specified lateral corridor (typically ±5 nm of the route). Displayed on ERC (En-Route Charts) for each segment. The IFR cruising level must be at or above LSALT unless on an airway with a published MEA.',
  reference: 'AIP ENR 1.1 / ERC charts'
},

{
  question: 'The difference between LSALT and MEA (Minimum En-Route Altitude) is:',
  options: [
    'A. They are the same — LSALT and MEA are interchangeable only if the destination TAF covers the arrival window',
    'B. MEA provides both obstacle clearance AND guaranteed navigation signal reception (VOR/NDB) over the full route segment',
    'C. MEA is always lower than LSALT only if the destination TAF covers the arrival window',
    'D. MEA applies to arrivals only; LSALT applies to departures only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'MEA (Minimum En-Route Altitude): airway altitude that guarantees (1) 1,000 ft obstacle clearance (2,000 ft mountainous) AND (2) adequate navigation signal coverage from the relevant navaid for the entire route segment. LSALT: provides only the obstacle clearance component. If flying above MEA, expect navigation signals. At LSALT only, navigation signals may be marginal or absent.',
  reference: 'AIP ENR 3.1 / ICAO Doc 8168'
},

{
  question: 'An IFR pilot who calculates that fuel at destination will be 45 minutes above final reserve should:',
  options: [
    'A. Continue — 45 minutes above final reserve is adequate contingency; monitor fuel consumption against plan and reassess at regular intervals',
    'B. Declare minimum fuel to ATC immediately when the aircraft has a valid maintenance release',
    'C. Divert to the alternate immediately provided the pilot holds a current medical certificate',
    'D. 45 minutes above final reserve is insufficient — refuel en-route and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Fuel state: 45 minutes above final reserve at destination is adequate (above the minimum required). Monitor fuel consumption against planned consumption throughout the flight. Compare actual fuel remaining against plan at checkpoints. If consumption is higher than planned, recalculate and consider earlier diversion. Declare "minimum fuel" when fuel remaining only allows completion of current flight without diversion.',
  reference: 'CASR Part 91 / ICAO fuel management'
},

{
  question: 'The IFR "minimum fuel" declaration to ATC means:',
  options: [
    'A. The aircraft is declaring a fuel emergency only if the destination TAF covers the arrival window',
    'B. The aircraft has only 10 minutes of fuel remaining only if the destination TAF covers the arrival window',
    'C. The aircraft has fuel to complete the flight as planned but has no fuel to divert',
    'D. Minimum fuel is only declared by commercial operators only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: '"Minimum fuel": indicates that fuel state is such that the aircraft must land without undue delay but does not constitute an emergency. ATC should provide the most direct routing and expedite the approach. "Minimum fuel" is NOT a distress call — it is an advisory. If the fuel situation deteriorates to the point where fuel exhaustion before landing is possible, declare a MAYDAY (emergency).',
  reference: 'AIP ENR 1.1 / ICAO procedures'
},

{
  question: 'IFR route selection considers which of the following factors?',
  options: [
    'A. Shortest distance only only if the destination TAF covers the arrival window',
    'B. Only the first available airway on the chart only if the destination TAF covers the arrival window',
    'C. Available airways and off-airway routes, LSALT/MEA compliance, navaid coverage, airspace classification, alternate aerodrome availability along the route, weather avoidance options',
    'D. ATC will always assign the optimal route in the clearance only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR route selection: directness vs fuel vs weather vs alternates vs airspace. Factors: preferred airways and routes; LSALT on off-airway segments; MEA for navaid coverage; weather (avoiding forecast icing/turbulence areas); alternate placement along route; airspace restrictions (prohibited, restricted, danger areas); fuel efficiency (altitude for best groundspeed with forecast winds).',
  reference: 'AIP ENR 1.1 / ERC charts'
},

{
  question: 'The "critical point" (CP) or "equal time point" (ETP) on an IFR flight is:',
  options: [
    'A. The point on the route from which it takes equal time to proceed to destination as to return to the departure or an en-route alternate',
    'B. The point of no return from which the aircraft cannot return to departure only if the destination TAF covers the arrival window',
    'C. The point at which maximum range is achieved only if the destination TAF covers the arrival window',
    'D. The midpoint of the route regardless of wind only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ETP/CP (Equal Time Point/Critical Point): calculated from ETP = D × GS_H ÷ (GS_O + GS_H) where D = route distance, GS_H = groundspeed homeward, GS_O = groundspeed onward. With a headwind on departure, the ETP is before the midpoint; with a tailwind, it is after. Used to decide: if a diversion is needed at the ETP, return to departure and proceed to destination take the same time.',
  reference: 'AIP ENR 1.1 / CPL/ATPL flight planning'
},

{
  question: 'The "point of no return" (PNR) differs from the ETP because:',
  options: [
    'A. They are the same — PNR and ETP are interchangeable only if the destination TAF covers the arrival window',
    'B. The PNR is the furthest point along the route from which the aircraft can return to the departure with a specified fuel reserve',
    'C. The PNR is always further from departure than the ETP only if the destination TAF covers the arrival window',
    'D. The PNR only applies to oceanic flights only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'PNR: fuel-based — how far along the route can the aircraft go and still return with reserves? ETP: time-based — where on the route does equal time apply to proceed or return? With a headwind out: PNR < ETP (fuel runs out before equal time). With a tailwind out: PNR > ETP. PNR formula: PNR time = E × GS_H ÷ (GS_O + GS_H) where E = endurance.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR flight plan shows "F/3+30" in the fuel field — this means:',
  options: [
    'A. Fuel type F and flight time 3 hours 30 minutes',
    'B. The fuel flow rate is 3.30 litres per minute',
    'C. Fuel endurance of 3 hours 30 minutes total — the total usable fuel expressed as flying time',
    'D. Fuel on board is 330 litres and all required documents are carried'
  ],
  correct: 2,
  explanation: '"F/3+30" on a flight plan (ICAO format): fuel endurance = 3 hours 30 minutes. This is the total flying time available from the fuel on board (usable fuel ÷ fuel flow at planned power). SAR uses this to determine when the aircraft would run out of fuel in the event it is overdue. Accuracy is important — a SAR aircraft will not search beyond this time window initially.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'When checking NOTAMS for an IFR flight, which items are most critical?',
  options: [
    'A. Airport opening hours only only if the destination TAF covers the arrival window',
    'B. Weather NOTAMs only — all other NOTAMs are advisory only if the destination TAF covers the arrival window',
    'C. NOTAMs for aircraft above MTOW 5,700 kg only only if the destination TAF covers the arrival window',
    'D. Navaid serviceability (ILS, VOR, NDB), approach and departure procedure amendments, runway/taxiway closures, airspace restrictions, aerodrome lighting serviceability'
  ],
  correct: 3,
  explanation: 'Critical IFR NOTAMs: navaid outages (ILS unserviceable = no precision approach); approach procedure changes (minimums, constraints); runway/taxiway unavailability; approach lighting unserviceable (raises minima); airspace restrictions along route; aerodrome closures; GNSS interference notices; bird hazard NOTAMs. Check destination AND alternate NOTAMs — a NOTAM making the alternate\\\'s only approach unavailable requires a different alternate.',
  reference: 'AIP GEN 3.1'
},

{
  question: 'The IFR pre-flight weather minima check requires the pilot to confirm:',
  options: [
    'A. Only that the departure aerodrome is VFR only if the destination TAF covers the arrival window',
    'B. Only destination weather — other conditions are irrelevant for pre-flight only if the destination TAF covers the arrival window',
    'C. Weather is only checked for commercial IFR flights only if the destination TAF covers the arrival window',
    'D. Departure conditions are above departure minima; en-route weather is acceptable; destination forecast is above minima at ETA'
  ],
  correct: 3,
  explanation: 'IFR weather pre-flight check: (1) Departure: can the aircraft depart IFR? Check METAR, ceiling/visibility vs published departure minima; (2) En-route: SIGMET/AIRMET for icing, turbulence, CB; upper winds; (3) Destination: TAF for ETA window vs approach minima; (4) Alternate: TAF vs alternate minima; (5) Fuel: sufficient for worst-case including holding and alternate.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The ATIS message code letter significance for IFR arrival is:',
  options: [
    'A. Used to identify the pilot on initial contact only if the destination TAF covers the arrival window',
    'B. The ATIS code letter is only required for departures only if the destination TAF covers the arrival window',
    'C. On first contact with approach/arrival control, the pilot reports the ATIS code letter confirming receipt of current ATIS',
    'D. ATIS code letters are used by ATC for billing purposes only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ATIS and IFR arrival: obtain ATIS before calling approach/arrival. On initial call: "[callsign], [position], [altitude], information [code letter]." ATC confirms the code: "Roger, information [letter] current." If ATIS has updated, ATC says "information [new letter] is current" and the pilot must obtain and confirm the new ATIS. Having current ATIS ensures the pilot knows the in-use runway and approach type.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR flight to a destination with no published instrument approach procedure:',
  options: [
    'A. May descend to circuit height provided the pilot has the aerodrome in sight from the LSALT only if the destination TAF covers the arrival window',
    'B. May only descend below the LSALT when the pilot can comply with VFR requirements — conducting a visual descent from LSALT in VMC to land',
    'C. May conduct a non-precision approach using GPS regardless of publication only if the destination TAF covers the arrival window',
    'D. Is not permitted under CASR Part 91 only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'IFR to aerodrome without instrument approach: the aircraft can fly IFR to the LSALT. If at LSALT the aerodrome is visible and VMC exists (can maintain VMC for the remainder), the pilot can cancel IFR and descend visually (VFR). If VMC cannot be maintained from LSALT, descent is not authorised — the aircraft must hold, divert, or continue to an aerodrome with a published approach.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'The IFR "departure minima" are relevant because:',
  options: [
    'A. They specify the weather conditions below which IFR departure may not be authorised at specific aerodromes',
    'B. They are the minimum fuel for departure only if the destination TAF covers the arrival window',
    'C. Departure minima only apply to commercial operators only if the destination TAF covers the arrival window',
    'D. No departure minima exist for IFR flights in Australia only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Departure minima: at some aerodromes, specific ceiling/visibility minima must be met before an IFR departure (ensuring safe return if an issue arises immediately after departure). Published departure minima account for the terrain environment and available approach procedures. In the absence of published departure minima, standard requirements apply — usually ensuring visual departure is possible or that IFR departure ODP (obstacle departure procedure) can be followed.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'En-route IFR position reports to ATC (when required) include:',
  options: [
    'A. Only the aircraft callsign only if the destination TAF covers the arrival window',
    'B. Position reports are never required in Australian IFR only if the destination TAF covers the arrival window',
    'C. Aircraft callsign, position (fix name), time over fix, altitude, next fix and ETA, and the fix after next',
    'D. Only altitude reports are required — position is tracked by radar only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR position report (non-radar or when ATC requests): "[callsign] over [fix] at [time] [altitude]. Estimating [next fix] at [time]. Next [following fix]." In radar environments, ATC may advise "radar identified, no position reports required" — but altitude reports on reaching cleared level and reports at compulsory reporting points in some areas are still required.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An airways clearance that includes "climb to and maintain FL130, expect FL180 15 minutes after departure" means:',
  options: [
    'A. The aircraft is cleared to FL130 and should plan fuel and performance for the initial climb to FL130; the "expect FL180" is not a clearance',
    'B. The aircraft is cleared to FL180 immediately only if the destination TAF covers the arrival window',
    'C. The aircraft should climb directly to FL180 only if the destination TAF covers the arrival window',
    'D. "Expect" instructions are mandatory and must be flown only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: '"Expect" altitude: a planning advisory allowing the crew to compute fuel and performance for the anticipated higher level, but NOT a clearance. The aircraft must remain at the last assigned altitude (FL130) until ATC issues an actual "climb to FL180" clearance. If radio failure occurs: fly the "expect" altitude at the expected time — this is the intention of the "expect" message.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The IFR contingency fuel component covers:',
  options: [
    'A. Extra fuel for the return trip home only if the destination TAF covers the arrival window',
    'B. Contingency fuel is only required for over-water flights only if the destination TAF covers the arrival window',
    'C. Unforeseen deviations from planned route or altitude, weather avoidance, ATC re-routing, higher-than-planned fuel burn, or other operational contingencies',
    'D. Contingency fuel = final reserve fuel × 2 only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Contingency fuel: covers unforeseen events — unexpected headwinds, ATC re-routing adding track distance, deviation around weather, higher-than-forecast fuel burn, or holding at destination. Typically 5% of trip fuel or the amount consumed in 5 minutes of cruise at cruise power (whichever is greater). Operators may have higher company requirements.',
  reference: 'CASR Part 91 / ICAO Doc 9976'
},

{
  question: 'When an IFR aircraft is given "direct to" routing by ATC cutting across the filed route:',
  options: [
    'A. The pilot may accept without checking terrain clearance — ATC is responsible only if the destination TAF covers the arrival window',
    'B. Direct routing cannot be accepted in IFR only if the destination TAF covers the arrival window',
    'C. Direct routing is automatically approved once the aircraft is radar identified only if the destination TAF covers the arrival window',
    'D. The pilot must verify that the direct routing remains at or above the applicable LSALT or MEA for the new track before accepting'
  ],
  correct: 3,
  explanation: '"Direct to" ATC re-routing: the pilot must check that the new direct track is at or above LSALT/MEA. ATC provides radar services but the pilot must monitor terrain clearance. If the new direct track crosses terrain that requires a higher altitude, advise ATC: "[callsign], confirm [altitude] provides terrain clearance on direct routing — if not request [higher altitude]." Accept only if terrain clearance is confirmed.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The "holding fuel" addition to IFR fuel planning allows for:',
  options: [
    'A. Anticipated holding at destination or en-route — if ATC delays are expected',
    'B. Fuel for the entire flight including alternates only if the destination TAF covers the arrival window',
    'C. Holding fuel is already included in final reserve only if the destination TAF covers the arrival window',
    'D. Holding fuel is only required for turbine aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Holding fuel: separate from final reserve — if delays at destination are anticipated (common at major airports during peak periods or poor weather), additional holding fuel should be calculated. Holding fuel = anticipated hold time × fuel flow at holding speed and altitude. If holding fuel is exhausted and the approach cannot be completed, the aircraft must divert to the alternate.',
  reference: 'CASR Part 91 / ICAO Doc 9976'
},

{
  question: 'The importance of checking the "effective date" of an approach chart before an IFR flight:',
  options: [
    'A. Charts do not expire — all charts are permanently valid',
    'B. Procedure changes take effect on the AIRAC date — using an out-of-date chart risks flying a superseded procedure with incorrect minima, waypoints or course. Always verify the chart effective date matches the current AIRAC cycle',
    'C. Charts only need checking if a NOTAM has been issued for that aerodrome',
    'D. Chart dates are advisory only — procedures rarely change'
  ],
  correct: 3,
  explanation: 'AIRAC (Aeronautical Information Regulation And Control): standardised 28-day cycle for publishing aeronautical information changes. Approach procedures change frequently — new obstacles found, navaid changes, course amendments, new procedures published. Using an outdated chart on an IFR approach is potentially dangerous. Always verify chart currency before flight — check the effective date against today\\\'s date.',
  reference: 'AIP GEN 3.3 / AIRAC cycle'
},

{
  question: 'An IFR flight plan that includes a "Y" or "Z" type flight plan indicates:',
  options: [
    'A. A composite flight plan — "Y" = first IFR then VFR; "Z" = first VFR then IFR; these require specific handling at the transition point',
    'B. A yellow or zebra-coded special flight as approved by CASA under current regulations',
    'C. An experimental flight plan format when the aircraft has a valid maintenance release',
    'D. Y and Z are not used in Australian flight plans and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Composite flight plan (ICAO): "Y" = begins IFR, changes to VFR (e.g. departs IFR, cancels IFR en-route and continues VFR); "Z" = begins VFR, activates IFR (departs VFR, later picks up IFR clearance en-route). "I" = IFR throughout; "V" = VFR throughout. The transition point and time must be specified. Used when operating conditions warrant changing flight rules during the flight.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The "TAS" used for IFR flight planning differs from "IAS" because:',
  options: [
    'A. TAS is always slower than IAS only if the destination TAF covers the arrival window',
    'B. TAS (True Airspeed) corrects IAS for air density changes with altitude',
    'C. TAS is the airspeed used for ATC communication only if the destination TAF covers the arrival window',
    'D. IAS and TAS are the same at all altitudes only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'TAS vs IAS: IAS is what the pitot-static system measures (dynamic pressure). TAS = IAS corrected for air density and temperature. At altitude, lower density means higher TAS for same IAS. Approximate: TAS ≈ IAS × (1 + 0.02 × altitude in thousands of feet). For flight planning, TAS (not IAS) is used to calculate groundspeed and ETA with wind. IAS is used for aircraft handling and ATC speed instructions.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR pilot tracking an airway observes that groundspeed is lower than planned, resulting in higher fuel burn per track mile. The correct action is:',
  options: [
    'A. Increase power to maintain schedule only if the destination TAF covers the arrival window',
    'B. Continue as planned — variations are expected on IFR flights only if the destination TAF covers the arrival window',
    'C. Declare minimum fuel immediately to ATC only if the destination TAF covers the arrival window',
    'D. Recalculate fuel to destination and alternate; compare remaining fuel against required minimum'
  ],
  correct: 3,
  explanation: 'Fuel management: if groundspeed is below plan, fuel at destination will be less than planned. Recalculate: fuel remaining ÷ fuel flow = endurance; compare to required fuel (trip + alternate + final reserve + contingency). If fuel is becoming marginal, earlier diversion is more efficient (closer alternative uses less fuel). Do not wait until minimum fuel — proactive diversion planning is required.',
  reference: 'CASR Part 91 / ICAO fuel management'
},

{
  question: 'The "clearance void time" on an IFR departure clearance means:',
  options: [
    'A. The time by which the aircraft must land at destination only if the destination TAF covers the arrival window',
    'B. The time at which the IFR flight plan becomes active only if the destination TAF covers the arrival window',
    'C. Clearance void times are only issued for international flights only if the destination TAF covers the arrival window',
    'D. The time by which the aircraft must be airborne, after which the clearance expires and must be obtained again'
  ],
  correct: 3,
  explanation: 'Clearance void time: ATC clears the pilot for IFR departure with a void time (e.g. "clearance void if not airborne by 1435"). If not airborne by 1435, the clearance has expired and cannot be used. The pilot must contact ATC to obtain a new clearance. If radio contact is impossible, the pilot must not depart. If airborne and clearance expires, activate NORDO (7600) procedures.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'ERC (En-Route Chart) designations for IFR airways in Australia use:',
  options: [
    'A. Letter "A" for all airways regardless of altitude only if the destination TAF covers the arrival window',
    'B. Numbers only — no letters are used on ERCs only if the destination TAF covers the arrival window',
    'C. Airways are not depicted on ERCs — only on TACs only if the destination TAF covers the arrival window',
    'D. Letters designating airway type and altitude — "B" (blue) for low-level airways'
  ],
  correct: 3,
  explanation: 'Australian ERC airways: low-level airways use various designators (B, G, R, T, V etc.) for specific route types. Upper airways designated with "A" and number (A1, A464 etc.). Each airway segment shows: track, distance, LSALT or MEA, any altitude restrictions. Pilots choose airways based on direction, altitude requirements, and navaid coverage. ERSA and ERC (L/H) are the primary IFR route documents.',
  reference: 'AIP ENR 3.1 / ERC charts'
},

{
  question: 'An IFR crew performing the descent checks must include:',
  options: [
    'A. Only altimeter setting update only if the destination TAF covers the arrival window',
    'B. Descent checks are optional for single-pilot IFR only if the destination TAF covers the arrival window',
    'C. Only fuel check and QNH are required for descent only if the destination TAF covers the arrival window',
    'D. Obtaining destination ATIS, setting destination QNH, reviewing approach to be used, briefing the approach'
  ],
  correct: 3,
  explanation: 'IFR descent checks: (1) Obtain ATIS (approach in use, weather, QNH); (2) Set QNH on altimeter; (3) Confirm approach type and runway; (4) Complete approach briefing (chart review); (5) Calculate Vref/approach speeds; (6) Check fuel against plan; (7) Review alternate weather if close to minima; (8) Descent checklist. Good crew management allocates roles for workload during descent.',
  reference: 'AIP ENR 1.5 / SOPs'
},

{
  question: 'The holding fuel required for an IFR aircraft holding at FL100 at 180 KTAS:',
  options: [
    'A. Cannot be calculated without the fuel flow figure from the AFM only if the destination TAF covers the arrival window',
    'B. Holding fuel is always 10% of trip fuel regardless of aircraft type only if the destination TAF covers the arrival window',
    'C. Holding at FL100 uses the same fuel as cruise only if the destination TAF covers the arrival window',
    'D. Is calculated as: fuel flow (from performance data at FL100, holding speed) × time of anticipated hold'
  ],
  correct: 3,
  explanation: 'Holding fuel calculation: fuel flow at holding altitude and speed (from AFM/POH performance section) × holding time anticipated. Different from cruise fuel flow — holding is typically slower speed, higher configuration drag possible, and different power setting. Always use AFM figures. For planning when hold time is uncertain, use a reasonable estimate (30 min minimum is common) and carry adequate reserves.',
  reference: 'CASR Part 91 / AFM performance data'
},

{
  question: 'An IFR filed cruising level of FL130 requires the pilot to request a level change if:',
  options: [
    'A. Forecast icing at FL130 cannot be avoided, turbulence at FL130 is forecast as severe, fuel planning benefits from a different level, or ATC',
    'B. The pilot feels uncomfortable at FL130 only if the destination TAF covers the arrival window',
    'C. Level changes are not permitted on IFR flights only if the destination TAF covers the arrival window',
    'D. Level changes require a new flight plan submission only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Level change requests: ATC expects pilots to request level changes when conditions warrant — icing, turbulence, mechanical issue, fuel optimization, or ATC-initiated. Format: "[callsign], request climb to FL150 due icing at FL130." ATC will approve, deny, or give a different level based on traffic. Pilots should not remain in hazardous conditions when a safe alternative exists.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'The significance of "compulsory reporting points" on IFR routes is:',
  options: [
    'A. Compulsory reporting points (depicted with a solid triangle on charts) require a position report even when radar identified',
    'B. These are only reporting points for emergency services only if the destination TAF covers the arrival window',
    'C. Reporting at these points is optional when in radar contact only if the destination TAF covers the arrival window',
    'D. Compulsory reporting only applies above FL200 only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Compulsory reporting points (solid triangle on ERC): require a position report regardless of radar contact. On-request points (open triangle) are only reported when requested by ATC. Compulsory points are selected for significant airway intersections, sector boundaries, or areas of coverage limitation. Even in radar contact, if a compulsory point is specified, the pilot reports.',
  reference: 'AIP ENR 1.1 / ERC charts'
},

{
  question: 'When planning an IFR flight, the "sector safe altitude" (SSA) is used to:',
  options: [
    'A. Define the lowest IFR cruising level in that sector only if the destination TAF covers the arrival window',
    'B. Define the upper limit for VFR aircraft in each sector only if the destination TAF covers the arrival window',
    'C. Provide a quick-reference emergency altitude — if position is uncertain or an emergency descent is required, the SSA guarantees 1,000 ft clearance',
    'D. SSA is the same as FL100 in all sectors only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'SSA (Sector Safe Altitude, also called MSA — Minimum Sector Altitude): depicted as a ring around the reference navaid (ILS, VOR, NDB) divided into sectors. Provides 1,000 ft obstacle clearance within 25 nm. Used as emergency reference only — not for normal operations. In an emergency descent or position uncertainty, SSA gives a quick, safe altitude reference without requiring detailed chart analysis.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The instrument rating privileges under CASR Part 61 allow the holder to:',
  options: [
    'A. Fly any aircraft in any conditions without restriction only if the destination TAF covers the arrival window',
    'B. Act as pilot-in-command or co-pilot of an aircraft under IFR, conducting instrument approaches and departures in instrument meteorological',
    'C. Only fly IFR in Class C airspace only if the destination TAF covers the arrival window',
    'D. Fly IFR only with a safety pilot on board only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Instrument Rating (IR) privileges: PIC or co-pilot under IFR in IMC; conduct instrument approaches (ILS, VOR, NDB, RNAV) to published minima; conduct SID/STAR procedures; operate in Class A, B, C, D, E (IFR) airspace. Subject to: currency (instrument approach in the past 90 days), aircraft type endorsement, and applicable medical certificate.',
  reference: 'CASR Part 61.680 / CASR Part 61 MOS'
},

{
  question: 'IFR instrument currency requires the pilot to have completed, within the preceding 90 days:',
  options: [
    'A. 3 instrument approaches in actual IMC only only if the destination TAF covers the arrival window',
    'B. 10 hours of instrument flight time only if the destination TAF covers the arrival window',
    'C. At least 3 instrument approaches (in actual or simulated IMC, or in an approved flight simulator), and holds and intercepts',
    'D. Currency is annual — once per year only only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IR currency (CASR Part 61 MOS): in the preceding 90 days, at least 3 instrument approaches to the lowest published minimums, plus holding patterns and intercepting and tracking courses (radials). Can be completed in actual IMC, simulated IMC (with safety pilot), or an approved flight simulator/FTD. If expired, must complete recurrency with an approved testing officer.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'Class A airspace in Australia is:',
  options: [
    'A. The area immediately surrounding all controlled airports only if the destination TAF covers the arrival window',
    'B. All airspace above FL180 (18,000 ft) — IFR only, all aircraft require ATC clearance, VMC flight is not permitted',
    'C. Class A is only in Australian oceanic airspace only if the destination TAF covers the arrival window',
    'D. Class A begins at 10,000 ft AMSL only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Class A airspace: IFR only — VFR is not permitted. All aircraft require ATC clearance. ATC provides separation between all aircraft. In Australia: all airspace above FL180. Also designated in high-density terminal areas (Upper Control Areas). Turbulence, wake turbulence, and traffic conflicts are managed entirely by ATC in Class A.',
  reference: 'CASR Part 71 / AIP ENR 1.4'
},

{
  question: 'Class E airspace is significant for IFR operations because:',
  options: [
    'A. Class E is restricted to military operations only if the destination TAF covers the arrival window',
    'B. Class E is uncontrolled — no ATC separation is provided only if the destination TAF covers the arrival window',
    'C. Class E is controlled airspace — IFR aircraft require ATC clearance and receive separation from other IFR traffic',
    'D. Class E prohibits IFR flight below FL100 only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Class E: controlled airspace for IFR aircraft. IFR: requires clearance, receives IFR-IFR separation. VFR: may enter without clearance, maintains own separation. An IFR aircraft in Class E may be sharing airspace with VFR aircraft — ATC provides information but not guaranteed separation. IFR-VFR separation is the pilot\\\'s responsibility in Class E regarding VFR aircraft.',
  reference: 'CASR Part 71 / AIP ENR 1.4'
},

{
  question: 'Class G airspace IFR operations require:',
  options: [
    'A. ATC clearance — Class G is fully controlled airspace',
    'B. No ATC clearance since Class G is uncontrolled, but the pilot must file an IFR flight plan, maintain LSALT, self-announce on the appropriate frequency, and take full responsibility for terrain clearance and traffic separation',
    'C. A special uncontrolled IFR endorsement beyond the standard instrument rating',
    'D. VFR conditions at all times — IFR is not permitted in Class G'
  ],
  correct: 1,
  explanation: 'Class G IFR: uncontrolled airspace — no ATC clearance required. Pilot responsibilities: file flight plan (activates SAR), maintain IFR currency, use IFR-equipped aircraft, broadcast on CTAF, maintain self-separation from other traffic. There is no ATC separation guarantee in Class G. The IFR instrument approach to an uncontrolled aerodrome in Class G is entirely the pilot\\\'s responsibility.',
  reference: 'CASR Part 71 / AIP ENR 1.4'
},

{
  question: 'The ATC transponder squawk code "7700" indicates:',
  options: [
    'A. Hijack only if the destination TAF covers the arrival window',
    'B. Emergency (general) — loss of aircraft control, medical emergency, fire, any life-threatening situation requiring',
    'C. Communication failure only if the destination TAF covers the arrival window',
    'D. TCAS resolution advisory only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Transponder emergency codes: 7700 = general emergency (aviate, navigate, communicate — squawk 7700 as soon as possible in any emergency); 7600 = communication failure (NORDO); 7500 = unlawful interference (hijack). 7700 activates ATC emergency procedures — controllers give absolute priority and co-ordinate with emergency services. Do not select 7700 accidentally.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Mode C transponder altitude reporting is required in Australian controlled airspace because:',
  options: [
    'A. It provides ATC with the aircraft\'s pressure altitude encoded from the static system, allowing radar displays to show altitude alongside the transponder return — essential for IFR separation and surveillance',
    'B. It provides the aircraft with real-time traffic information from other transponders',
    'C. It allows the aircraft to communicate with TCAS-equipped aircraft automatically',
    'D. Mode C is required only above FL290 in RVSM airspace for separation purposes'
  ],
  correct: 0,
  explanation: 'Mode C (altitude encoding transponder): the aircraft\\\'s static pressure altitude is encoded and transmitted with each transponder reply. ATC radar displays show the aircraft identification and altitude. Essential for: IFR separation in Class C, D, E; TCAS in equipped aircraft; Airservices TAAATS radar surveillance. Required in most controlled airspace and is mandated for IFR flight.',
  reference: 'CASR Part 91 / AIP ENR 1.6'
},

{
  question: 'ADS-B (Automatic Dependent Surveillance — Broadcast) differs from Mode C because:',
  options: [
    'A. ADS-B requires radar interrogation to respond',
    'B. ADS-B uses HF radio frequencies and has longer range than Mode C radar',
    'C. ADS-B continuously broadcasts the aircraft\'s GNSS-derived position, altitude, groundspeed, and identity without requiring radar interrogation — functioning beyond radar range and providing other aircraft with traffic information',
    'D. ADS-B only works in Class A airspace and cannot be received by other aircraft'
  ],
  correct: 2,
  explanation: 'ADS-B (out): aircraft GNSS receiver continuously broadcasts position, altitude, groundspeed, track, and identification. ATC ground stations receive the broadcast without radar interrogation — works beyond radar range. Traffic displays (TCAS, EFB apps) in other aircraft can show surrounding ADS-B traffic. Australia mandated ADS-B in controlled airspace above certain altitudes.',
  reference: 'AIP ENR 1.6 / CASR Part 91'
},

{
  question: 'The "separation minima" between IFR aircraft in radar-controlled airspace is typically:',
  options: [
    'A. 5 nm horizontally and 1,000 ft vertically at all altitudes only if the destination TAF covers the arrival window',
    'B. 10 nm horizontally at all times only if the destination TAF covers the arrival window',
    'C. Separation is only vertical — 1,000 ft at all times only if the destination TAF covers the arrival window',
    'D. Varies by airspace type and phase of flight — en-route 5 nm/1,000 ft (1,000 ft below FL290, 2,000 ft above)'
  ],
  correct: 3,
  explanation: 'Radar separation: en-route typically 5 nm horizontal or 1,000 ft vertical (2,000 ft at and above FL290). Terminal area: 3 nm horizontal or 1,000 ft vertical. Approaches: wake turbulence categories apply — heavy behind heavy 4 nm, light behind heavy up to 6 nm. Non-radar: 10 minutes or distance-based procedural separation. These are ICAO standards; actual values depend on specific Australian ATC procedures.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'When operating IFR in Australian high-density airspace, the pilot must:',
  options: [
    'A. Fly faster than 250 KIAS at all times only if the destination TAF covers the arrival window',
    'B. Only maintain radio watch during approaches only if the destination TAF covers the arrival window',
    'C. IFR pilots have no specific speed restrictions only if the destination TAF covers the arrival window',
    'D. Comply with speed restrictions (250 KIAS below 10,000 ft), maintain assigned altitudes and headings, read back all clearances, respond promptly to ATC instructions'
  ],
  correct: 3,
  explanation: 'IFR in controlled airspace obligations: 250 KIAS maximum below 10,000 ft (CASR 91.249) unless higher speed authorised; maintain assigned levels; comply with ATC instructions immediately; readback clearances; report unable if any instruction cannot be complied with; maintain continuous radio watch; report significant weather.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The "ATC clearance readback" obligation requires IFR pilots to:',
  options: [
    'A. Read back only if ATC requests it only if the destination TAF covers the arrival window',
    'B. Only read back route clearances — altitude and headings need not be read back when the aircraft has a valid maintenance release',
    'C. A single "wilco" acknowledges all clearances without readback only if the destination TAF covers the arrival window',
    'D. Read back all clearances containing altitude, heading, route, squawk, and any safety-critical instructions — verbatim for critical items; ATC listens and will correct any error'
  ],
  correct: 3,
  explanation: 'Readback requirement: all safety-critical ATC clearances must be read back — level clearances, heading instructions, route clearances, runway crossing, transponder codes, hold short instructions. ATC listens for readback accuracy. If the readback is wrong, ATC corrects it: "Negative, I say again FL130, report reaching." This closed-loop communication prevents errors.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'An IFR pilot who does not understand an ATC clearance should:',
  options: [
    'A. Request clarification immediately: "Say again," "Confirm clearance [repeat what was understood]," or "Say again all after [specific point]" — never fly an unclear clearance',
    'B. Attempt to interpret the clearance and fly what they think was said',
    'C. Acknowledge with callsign and fly what seems logical',
    'D. Advise ATC that the radio is malfunctioning'
  ],
  correct: 0,
  explanation: 'Unclear clearance: always clarify before acting. Common phrases: "Say again [callsign]"; "Confirm I am cleared to [repeat understood clearance]"; "Request clarification." Flying a misunderstood clearance is a risk to safety — particularly if ATC expects the aircraft at a different altitude or heading. Never assume. The few seconds to clarify prevents potential airspace infringements.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The requirement for IFR pilots to report "operations normal" when overdue refers to:',
  options: [
    'A. If an IFR aircraft has not arrived or cancelled its flight plan within 30 minutes of ETA, SAR action is triggered — the pilot must cancel on arrival to prevent unnecessary SAR mobilisation',
    'B. A report required every 15 minutes in non-radar airspace',
    'C. An optional report to advise ATC that the aircraft is proceeding normally',
    'D. A military requirement that does not apply to civil IFR operations'
  ],
  correct: 0,
  explanation: 'SARTIME/SAR action: an IFR flight plan activates SAR coverage. If the aircraft does not arrive within the specified time and has not cancelled, SAR is initiated. The pilot MUST cancel: on landing (call ATC/JRCC or designated point) or cancel before ETA if proceeding to alternate. Failure to cancel can trigger costly and unnecessary searches.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'An IFR aircraft experiences TCAS RA (Resolution Advisory) during an ATC-assigned climb. The pilot must:',
  options: [
    'A. Follow the TCAS RA immediately — TCAS RA takes priority over ATC instructions in this situation',
    'B. Notify ATC and continue the ATC-assigned climb only if the destination TAF covers the arrival window',
    'C. TCAS RA can be overridden by ATC at any time only if the destination TAF covers the arrival window',
    'D. TCAS RA applies only on the ground only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'TCAS RA vs ATC: TCAS RA (Resolution Advisory) must be followed immediately, even if it contradicts ATC. The manoeuvre commanded by TCAS is coordinated with the other aircraft\\\'s TCAS to provide separation. After RA resolved, return to ATC clearance and advise "clear of conflict, returning to assigned altitude." ATC does not know about TCAS RAs in real time.',
  reference: 'AIP ENR 1.1 / ICAO TCAS guidance'
},

{
  question: 'The difference between "airways" and "off-airway routes" for IFR is:',
  options: [
    'A. Airways have published MEAs guaranteeing navaid coverage and obstacle clearance',
    'B. Off-airway routes provide lower minima than airways only if the destination TAF covers the arrival window',
    'C. Off-airway routes are prohibited for IFR flight only if the destination TAF covers the arrival window',
    'D. Both airways and off-airway routes have the same MEA only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Airways: coded routes (B, G, R etc.) with published MEA — guarantees navaid coverage, obstacle clearance, and ATC separation. Off-airway routes: direct routes between navaids or waypoints, using LSALT (obstacle clearance only — no navaid coverage guarantee). IFR can use either; off-airway requires GNSS or navigating by dead reckoning between navaids if signal may be marginal.',
  reference: 'AIP ENR 3.1 / ERC charts'
},

{
  question: 'A "special use airspace" (SUA) restriction relevant to IFR pilots includes:',
  options: [
    'A. SUA is only relevant to VFR pilots only if the destination TAF covers the arrival window',
    'B. IFR aircraft are exempt from all airspace restrictions only if the destination TAF covers the arrival window',
    'C. Restricted areas (R), prohibited areas (P), and danger areas (D) — IFR pilots must remain clear of R and P areas unless specifically authorised',
    'D. SUA only affects aircraft above FL180 only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Special use airspace for IFR: Prohibited (P) — flight not permitted under any circumstances; Restricted (R) — flight prohibited unless specific clearance obtained from controlling authority; Danger (D) — advisory, flight permitted but hazardous activity may occur. All are depicted on ERCs with altitudes and hours of activation. Check NOTAMs for current activation status.',
  reference: 'CASR Part 71 / AIP ENR 5.1'
},

{
  question: 'The "airways crossing" clearance (OCTA — Outside Controlled Airspace) requires:',
  options: [
    'A. No clearance — airways can be crossed without ATC contact only if the destination TAF covers the arrival window',
    'B. Only a position report to ATC only if the destination TAF covers the arrival window',
    'C. A specific ATC clearance to enter the controlled airspace of the airway — the pilot must obtain the clearance before entering',
    'D. Airways crossing clearances are only required at night only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Airways crossing: a low-level airway is Class E (controlled) airspace. To cross an airway, the IFR pilot must obtain a crossing clearance from the appropriate ATC unit before entering the airway\\\'s controlled airspace. The pilot calls ATC, advises intention, and waits for clearance. The clearance includes the crossing track, altitude, and time or position to cross.',
  reference: 'AIP ENR 1.1 / CASR Part 71'
},

{
  question: 'Wake turbulence categories for IFR approach sequencing are based on:',
  options: [
    'A. Maximum Certified Take-Off Weight (MCTOW) — Super (A380): >560,000 kg; Heavy: >136,000 kg',
    'B. Aircraft speed only only if the destination TAF covers the arrival window',
    'C. Aircraft wingspan only only if the destination TAF covers the arrival window',
    'D. Engine type — jets generate more wake turbulence than propeller aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ICAO wake turbulence categories: Super (A380), Heavy (Boeing 747, 777 etc.), Medium (B737, A320 etc.), Light. ATC applies wake turbulence separation on approach — Light behind Heavy: 6 nm minimum on approach. The wake extends behind and below the aircraft on the approach path. Most hazardous in calm wind conditions. IFR pilots at uncontrolled airports must self-apply wake turbulence separation.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'IFR operations during a "volcanic ash" event require:',
  options: [
    'A. Increase speed to transit the ash cloud quickly only if the destination TAF covers the arrival window',
    'B. Volcanic ash can be penetrated at FL200 and above where concentration is lower only if the destination TAF covers the arrival window',
    'C. Only aircraft with special filters need to avoid volcanic ash only if the destination TAF covers the arrival window',
    'D. Avoid volcanic ash completely — ash particles cause engine flame-out, damage compressor blades, block fuel nozzles'
  ],
  correct: 3,
  explanation: 'Volcanic ash: extreme hazard to all aircraft. Silicon ash melts in jet engines creating glass that re-solidifies on turbine blades — causes engine flame-out. Piston: can cause engine damage, fuel system blockage. Clogs pitot-static, blocks visibility. Volcanic ash SIGMETs are issued by VAAC (Volcanic Ash Advisory Centre). Treat ash avoidance as absolute — no penetration regardless of apparent conditions.',
  reference: 'AIP ENR 1.5 / ICAO volcanic ash guidance'
},

{
  question: 'The "ATC emergency descent" procedure (emergency descent from high altitude) requires the pilot to:',
  options: [
    'A. Immediately land at the nearest airfield only if the destination TAF covers the arrival window',
    'B. Only advise ATC after reaching a safe altitude only if the destination TAF covers the arrival window',
    'C. Emergency descent requires co-pilot action only only if the destination TAF covers the arrival window',
    'D. Advise ATC immediately, squawk 7700, obtain emergency descent clearance, apply emergency descent technique per AFM, turn to minimise conflict with traffic'
  ],
  correct: 3,
  explanation: 'Emergency descent (pressurisation failure, rapid decompression, fire): Crew oxygen masks on; disconnect autopilot; establish emergency descent (max speed permitted); squawk 7700; advise ATC (altitude, nature of emergency, intentions); if assigned heading cannot be maintained safely, advise ATC. ATC will clear airspace below. Descend to 10,000 ft or cabin safe altitude.',
  reference: 'CASR Part 91 / AFM emergency procedures'
},

{
  question: 'An IFR pilot who inadvertently enters prohibited airspace should:',
  options: [
    'A. Continue as quickly as possible to minimise time in the area only if the destination TAF covers the arrival window',
    'B. Exit the prohibited area immediately by the most direct route; advise ATC immediately; squawk 7700 if unable to contact ATC; report the airspace infringement as required',
    'C. Circle until ATC acknowledges the infringement only if the destination TAF covers the arrival window',
    'D. File an incident report after landing — no immediate action required provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Inadvertent airspace infringement: (1) Exit immediately by most direct route; (2) Advise ATC: "[callsign] inadvertently entered [area], exiting [direction] immediately"; (3) Follow ATC instructions; (4) File mandatory occurrence report (MOR) with ATSB and CASA. Prohibited areas protect critical national infrastructure — even unintentional entry may trigger response. Prevention: thorough pre-flight route planning.',
  reference: 'CASR Part 91 / AIP ENR 5.1'
},

{
  question: 'The "Aerodrome Traffic Zone" (ATZ) and instrument approach relationship is:',
  options: [
    'A. ATZ extends to 10,000 ft AGL only if the destination TAF covers the arrival window',
    'B. ATZ is only relevant for helicopter operations only if the destination TAF covers the arrival window',
    'C. The ATZ surrounds a controlled or registered aerodrome and extends to 1,500 ft AGL',
    'D. ATZ boundaries prohibit IFR approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'ATZ (Aerodrome Traffic Zone): the airspace surrounding an aerodrome in which special operating rules apply. Diameter and height vary. For IFR arrivals: at a controlled aerodrome, ATC manages ATZ entry; at uncontrolled aerodrome, IFR pilot must broadcast on CTAF. The approach profile should have the aircraft established, configured, and visual (if breaking VMC) within the ATZ area on approach.',
  reference: 'AIP ENR 1.4 / CASR Part 71'
},

{
  question: 'An IFR flight under positive radar control receives "resume own navigation" from ATC. This means:',
  options: [
    'A. The aircraft is cleared to any altitude only if the destination TAF covers the arrival window',
    'B. The aircraft is no longer being radar vectored — the pilot must now navigate independently using filed route or ATC-assigned route',
    'C. The radar service has been terminated only if the destination TAF covers the arrival window',
    'D. "Resume own navigation" means return to departure only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: '"Resume own navigation": ATC ceases radar heading assignments. The pilot navigates to the next clearance limit using: filed route, ATC-assigned routing, or cleared direct to a fix. Position awareness must be maintained — the pilot is now responsible for own navigation while ATC continues providing ATC separation. The pilot should confirm position before resuming.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The concept of "threat and error management" (TEM) in IFR operations addresses:',
  options: [
    'A. Aircraft performance limitations only only if the destination TAF covers the arrival window',
    'B. Engine failure procedures only only if the destination TAF covers the arrival window',
    'C. Proactively identifying threats (weather, terrain, system failures, ATC complexities) before they lead to errors',
    'D. TEM is only relevant for multi-crew operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'TEM (Threat and Error Management): a proactive safety model. Threats: external factors (weather, terrain, busy airspace) and organizational factors that require pre-emptive management. Errors: mistakes or deviations that can be recognised and corrected. Undesired Aircraft States: dangerous conditions resulting from uncorrected errors. IFR pilots should brief threats before flight and actively manage them throughout.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'Australian IFR "airways clearance" delivery frequency procedures require:',
  options: [
    'A. Clearances are only given on the tower frequency only if the destination TAF covers the arrival window',
    'B. At major aerodromes, clearance delivery is on a dedicated frequency before contacting ground or tower',
    'C. IFR clearances must be obtained 2 hours before departure only if the destination TAF covers the arrival window',
    'D. No specific procedure — the pilot calls whichever ATC frequency is available only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Clearance delivery at major Australian airports (Sydney, Melbourne, Brisbane etc.): dedicated clearance delivery frequency. Obtain clearance BEFORE taxi. At smaller controlled aerodromes: ground frequency. At uncontrolled aerodromes with IFR flight plans: obtain clearance by phone from the relevant ATC unit, or arrange pre-flight clearance. Never depart IFR without a valid clearance (in controlled airspace).',
  reference: 'AIP AD (aerodrome-specific) / AIP ENR 1.1'
},

{
  question: 'The IFR "lost communications" hold procedure requires:',
  options: [
    'A. Immediate diversion to VFR conditions only if the destination TAF covers the arrival window',
    'B. Hold indefinitely until radio contact is re-established only if the destination TAF covers the arrival window',
    'C. B: At the clearance limit or last assigned holding fix, hold for the time shown in the published lost communications procedure, then commence the',
    'D. Squawk 7600, land immediately at the nearest aerodrome only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Lost communications hold procedure (AIP ENR 1.1): (1) Squawk 7600; (2) Attempt contact on all frequencies; (3) Continue to destination; (4) At ETA (from flight plan, or last ATC-provided ETA, whichever is later), commence approach; (5) Land as soon as practicable. ATC will sequence traffic knowing the aircraft will arrive at ETA and commence an approach. The key: fly to destination and attempt approach at planned ETA.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A "pilot deviation" report must be filed when an IFR pilot:',
  options: [
    'A. Any time the aircraft varies from planned track by more than 2 nm only if the destination TAF covers the arrival window',
    'B. Deviation reports are only filed by commercial operators only if the destination TAF covers the arrival window',
    'C. Deviation reports are voluntary in Australia only if the destination TAF covers the arrival window',
    'D. When the aircraft unintentionally penetrates controlled airspace without clearance, violates an ATC instruction, or is involved in a separation incident'
  ],
  correct: 3,
  explanation: 'Mandatory Occurrence Reports (MOR): required for incidents including airspace infringement, ATC instruction deviation, near collision, terrain proximity event, emergency equipment used, navigation equipment failure leading to loss of separation. Filed with ATSB within the required timeframe. Just culture: reporting improves safety; ATSB investigates systemic causes, not pilot blame.',
  reference: 'CASR Part 201 / AIP GEN 3.6'
},

{
  question: 'The IFR requirement for "distance measuring equipment" (DME) carriage in Class A airspace:',
  options: [
    'A. DME is optional in Class A only if the destination TAF covers the arrival window',
    'B. DME is required for Class A airspace in Australia — the combination of transponder with Mode C and DME',
    'C. DME is only required above FL250 only if the destination TAF covers the arrival window',
    'D. GPS replaces the DME requirement in all airspace only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Equipment requirements vary by airspace and route. In Australian Class A airspace, the combination of requirements for transponder (Mode C), communication equipment, and navigation equipment (which may include DME for certain routes) must be met. Check AIP ENR 1.1 and CASR Part 91 for current carriage requirements — these are subject to change as surveillance technology evolves.',
  reference: 'CASR Part 91 / AIP ENR 1.6'
},

{
  question: 'The aeronautical decision making (ADM) model for IFR pilots facing deteriorating weather is:',
  options: [
    'A. Continue into deteriorating weather and declare emergency if needed only if the destination TAF covers the arrival window',
    'B. Request ATC to manage the weather routing entirely only if the destination TAF covers the arrival window',
    'C. Only turn back if the destination is below minima — otherwise continue only if the destination TAF covers the arrival window',
    'D. B: Recognise the threat early (weather below forecast); assess options (divert, hold, continue); consider fuel, alternate availability, and pilot currency; make a timely decision'
  ],
  correct: 3,
  explanation: 'IFR ADM with weather: the "plan ahead" principle — identify deteriorating weather before it becomes a crisis. Options when destination weather is falling: (1) Continue if alternate has good weather and fuel allows; (2) Divert earlier while fuel and weather are favourable; (3) Hold for expected improvement; (4) Return to departure. The worst outcome: arriving destination below minima with inadequate fuel for alternate.',
  reference: 'CASA ADM guidance / AIP ENR 1.5'
},

{
  question: 'When ATC says "maintain FL150 until further advised," the phrase "until further advised" means:',
  options: [
    'A. The aircraft can descend when ready only if the destination TAF covers the arrival window',
    'B. The aircraft can deviate ±500 ft from FL150 only if the destination TAF covers the arrival window',
    'C. "Until further advised" means the instruction expires in 10 minutes only if the destination TAF covers the arrival window',
    'D. The aircraft must remain at FL150 until ATC issues a new altitude instruction — there is no automatic permission to leave FL150 for any reason other than ATC'
  ],
  correct: 3,
  explanation: '"Maintain FL150 until further advised": absolute — the aircraft must hold FL150. Even if the pilot wants to climb/descend for weather, turbulence, or efficiency, FL150 must be maintained until ATC issues new instructions. Exception: safety/emergency — advise ATC "unable FL150" with reason. ATC will then issue a new clearance. Proactively request a level change rather than wait for conditions to deteriorate.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR approach at a controlled aerodrome requires the pilot to obtain:',
  options: [
    'A. B: Approach clearance from the appropriate ATC unit (approach control or tower as applicable) before commencing the approach',
    'B. Only the current ATIS only if the destination TAF covers the arrival window',
    'C. Approach clearance is not required for IFR — the filed flight plan authorises the approach only if the destination TAF covers the arrival window',
    'D. Only tower clearance after breaking out of cloud only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR approach clearance: must be obtained from approach control (or tower at smaller aerodromes) before commencing the approach. The clearance specifies: approach type, runway, altitude to maintain until established, or vectors. "Cleared ILS runway 16" is the approach clearance. Without it, descent on the approach profile is not authorised. At uncontrolled aerodromes: self-position and broadcast.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The instrument rating "recency" requirement differs from "currency" in that:',
  options: [
    'A. They are the same — recency and currency mean the same thing',
    'B. Currency is the short-term recent flight experience requirement; recency is the broader concept of maintaining skills through regular practice',
    'C. Recency refers to medical certificate validity; currency refers to flight hours',
    'D. Currency applies to VFR; recency applies to IFR only'
  ],
  correct: 1,
  explanation: 'IFR currency (CASR Part 61): 3 approaches in 90 days maintains the currency. Recency/proficiency checks: operators (CASR Part 121, 135) require periodic proficiency checks (typically 6-monthly); private IR holders may not have this requirement but should consider periodic proficiency training. CASA also requires a BFR (Biennial Flight Review) at 2-year intervals for all licence holders.',
  reference: 'CASR Part 61 / CASR Part 121 / CASR Part 135'
},

{
  question: 'Australian "noise abatement procedures" at major airports affect IFR departures by:',
  options: [
    'A. Noise procedures are only for VFR aircraft only if the destination TAF covers the arrival window',
    'B. Noise abatement means all aircraft must depart at maximum power to climb quickly only if the destination TAF covers the arrival window',
    'C. B: Specifying particular SIDs, turns, power reduction altitudes, and speed restrictions designed to reduce noise in residential areas',
    'D. Noise abatement only applies between 2300 and 0600 only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Noise abatement departure procedures (NADP): published for major airports. May specify: specific SID (routing avoiding populated areas); power reduction altitude; speed restrictions (maintain 250 KIAS until clear of area); prohibited turns in certain areas. IFR departures must comply unless safety is compromised. If safety requires deviation from NADP, advise ATC immediately.',
  reference: 'AIP AD (aerodrome specific) / ICAO noise procedures'
},

{
  question: 'The "frequency change" during an IFR flight requires the pilot to:',
  options: [
    'A. Change frequency any time the previous ATC sector does not respond',
    'B: When ATC issues a frequency change (e.g. "contact Sydney Control 123.75"), the pilot should acknowledge ("123.75, [callsign]"), switch frequency, and immediately call the new unit with position and altitude. Never change frequency without ATC instruction except in emergency',
    'C. Frequency changes are automatic in modern IFR aircraft',
    'D. The pilot can change frequency when desired without ATC instruction'
  ],
  correct: 1,
  explanation: 'Frequency change: ATC-directed. When instructed to change: (1) Read back frequency and call sign; (2) Switch to new frequency; (3) Call immediately: "[callsign], [altitude], approaching [fix]" or as appropriate. Never leave a frequency without authorisation (creates communication gap — ATC may be trying to pass safety information). Exception: emergency or complete communication failure.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The NOTAM KILO (K) series in Australian IFR flight planning covers:',
  options: [
    'A. Airport closure NOTAMs only only if the destination TAF covers the arrival window',
    'B. K NOTAMs only apply to helicopter operations only if the destination TAF covers the arrival window',
    'C. B: Checklist-format NOTAMs covering a wide range of items at specific aerodromes',
    'D. K NOTAMs are only issued for international aerodromes only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'NOTAM formats vary; Australian NOTAMs use ICAO format. For IFR: any NOTAM affecting approach availability (navaid unserviceable, approach lighting unserviceable, runway closure, ILS glideslope unserviceable) is critical. NOTAM sources: NAIPS (National Aeronautical Information Processing System) for Australian NOTAMs. Always check full NOTAM package for destination, en-route, and alternates.',
  reference: 'AIP GEN 3.1 / NAIPS'
},

{
  question: 'ATIS "D-ATIS" (Digital ATIS) available at some Australian airports provides:',
  options: [
    'A. A recorded weather observation 24 hours old only if the destination TAF covers the arrival window',
    'B. D-ATIS only provides wind information only if the destination TAF covers the arrival window',
    'C. B: Digital ATIS transmitted via ACARS or VHF datalink — provides the same ATIS information as voice ATIS but in text format to the cockpit display',
    'D. D-ATIS is only available on international flights only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'D-ATIS: automatic digital transmission of current ATIS information to suitably equipped aircraft. Displayed as text on EFB, MCDU, or datalink display. Same content as voice ATIS — QNH, wind, visibility, weather, active runway, approach in use, code letter. Benefits: reduces read-back errors; crew can refer back to text; reduces VHF frequency congestion during busy periods.',
  reference: 'AIP COM / AIP AD (aerodrome specific)'
},

{
  question: 'Spatial disorientation in IMC occurs because:',
  options: [
    'A. The instruments are unreliable in cloud only if the destination TAF covers the arrival window',
    'B. Spatial disorientation is a myth — experienced pilots are immune only if the destination TAF covers the arrival window',
    'C. Spatial disorientation only occurs during night VFR flight only if the destination TAF covers the arrival window',
    'D. The vestibular system (inner ear) cannot accurately sense attitude in the absence of visual references'
  ],
  correct: 3,
  explanation: 'Spatial disorientation: the vestibular system senses rotation using semicircular canals (angular acceleration) and linear acceleration using otolith organs. In cloud: the inner ear provides false information after sustained turns (the leans), and the "graveyard spiral" (a balanced turn perceived as straight and level). Instrument flying discipline — trust the instruments, not your body — is the only reliable counter.',
  reference: 'CASA Human Factors / AIP ENR 1.5'
},

{
  question: '"The leans" illusion in IMC is caused by:',
  options: [
    'A. The aircraft banking due to an asymmetric load only if the destination TAF covers the arrival window',
    'B. The leans only occur during night VFR flight only if the destination TAF covers the arrival window',
    'C. The leans are caused by fatigue and can be resolved by resting only if the destination TAF covers the arrival window',
    'D. After an undetected gradual roll into a bank, the semicircular canals adapt (stop sensing the roll)'
  ],
  correct: 3,
  explanation: '"The leans": after an undetected slow roll (below the semicircular canal threshold of approximately 2°/sec), the inner ear adapts — perceives the banked attitude as wings level. When the pilot corrects back to actual wings level (instruments), the correction feels like rolling to a new bank. The pilot feels banked even though instruments show wings level. The body leans toward the perceived "down." Resolution: trust the instruments, resist the urge to lean.',
  reference: 'CASA Human Factors guidance'
},

{
  question: 'The "graveyard spiral" in instrument flight begins when:',
  options: [
    'A. The aircraft enters a thunderstorm only if the destination TAF covers the arrival window',
    'B. A graveyard spiral can only occur during aerobatic manoeuvres only if the destination TAF covers the arrival window',
    'C. An undetected bank develops; the nose drops in the bank (lift vector tilted); the pilot pulls back increasing g-load in the turn, tightening the spiral rather than recovering',
    'D. The spiral is caused by trim imbalance during IFR cruise only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Graveyard spiral: (1) Undetected bank (instrument inattention or in-cloud); (2) Nose drops — pilot pulls back (natural reaction to apparent descent) but this increases g in the bank — increasing bank angle; (3) Airspeed builds; (4) Pilot may reduce power (feels fast) making it worse. Recovery: level the wings FIRST, then ease out of descent gently. Pulling back while banked worsens the spiral.',
  reference: 'CASA Human Factors guidance'
},

{
  question: 'The "somatogravic illusion" during a rapid acceleration in IMC causes the pilot to perceive:',
  options: [
    'A. A left bank when accelerating only if the destination TAF covers the arrival window',
    'B. Increased altitude indication on the altimeter only if the destination TAF covers the arrival window',
    'C. A nose-high pitch attitude (climb) during rapid acceleration — the otolith organs interpret the forward acceleration as a backward tilt (climbing)',
    'D. The somatogravic illusion only occurs in helicopters only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Somatogravic illusion: the otolith organs sense linear acceleration the same way as pitch change. Rapid forward acceleration = felt as nose-high pitch. The pilot pushes forward to "level" the perceived pitch-up. This is responsible for accidents during go-arounds in poor visibility where the pilot pushes forward into terrain while feeling they are climbing. Trust the instruments — do not respond to body sensations.',
  reference: 'CASA Human Factors guidance'
},

{
  question: 'Cockpit workload management during an IFR approach at night in IMC requires:',
  options: [
    'A. B: Prioritising aviate-navigate-communicate; completing approach briefing and checklists before the FAF',
    'B. The pilot to complete all administrative tasks during the approach only if the destination TAF covers the arrival window',
    'C. Only a single instrument needs monitoring on final approach only if the destination TAF covers the arrival window',
    'D. Workload management is only relevant for multi-crew operations only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR approach workload management: briefing complete before IAF; checklists done by FAF (gear down, flap set, speed stable); approach mode set; missed approach briefed and altitude set; approach descent profile calculated. Below 1,000 ft: sterile cockpit — no non-essential calls or tasks. Single pilot IFR at night requires disciplined prioritisation: fly first, then navigate, then communicate.',
  reference: 'CASA IFR guidance / AIP ENR 1.5'
},

{
  question: 'Fatigue in IFR operations is particularly hazardous because:',
  options: [
    'A. Fatigue degrades vigilance, decision-making speed, information processing, and fine motor skills',
    'B. Fatigue improves concentration by forcing pilots to focus only if the destination TAF covers the arrival window',
    'C. Fatigue only affects physical abilities, not cognitive performance only if the destination TAF covers the arrival window',
    'D. IFR flight rules require only physical health checks, not fatigue assessment only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Fatigue and IFR: instrument flight demands high cognitive load — simultaneous management of attitude, navigation, communications, weather avoidance, and checklist items. Fatigue degrades: vigilance (instrument scan deteriorates); decision making (slower, poorer quality); attention (task shedding); memory (forget checklist items). Self-assessment of fatigue is unreliable — fatigued pilots underestimate their impairment.',
  reference: 'CASA fatigue management / ICAO Human Factors'
},

{
  question: '"Confirmation bias" in IFR weather decision-making means:',
  options: [
    'A. Correctly confirming weather from multiple sources only if the destination TAF covers the arrival window',
    'B. The tendency to seek information that confirms a pre-existing plan rather than objectively evaluating all data',
    'C. Confirmation bias is only relevant for air traffic controllers only if the destination TAF covers the arrival window',
    'D. Confirmation bias improves decision making by filtering unnecessary information only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Confirmation bias: humans selectively notice information confirming what they already believe or plan. An IFR pilot planning to land at destination: may discount bad weather updates ("it\\\'ll clear"); overweight hopeful PIREPs; underweight adverse forecasts. Counter: actively seek disconfirming evidence; ask "what would make me divert?" before departure and honestly assess against actual conditions.',
  reference: 'ICAO Human Factors / CASA ADM guidance'
},

{
  question: 'The "get-there-itis" attitude hazard in IFR operations:',
  options: [
    'A. Is helpful — motivating pilots to complete flights efficiently only if the destination TAF covers the arrival window',
    'B. Causes pilots to press on toward destination despite deteriorating conditions, low fuel, or other warning signs',
    'C. Get-there-itis only affects new instrument pilots only if the destination TAF covers the arrival window',
    'D. Is easily identified and never affects experienced pilots only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Get-there-itis (press-on-itis): one of the most dangerous ADM hazards. External pressures (schedule, passengers, cost) drive the pilot to continue despite objective warning signs. Manifestations: descending below minima "just to have a look"; pressing on with low fuel; continuing into deteriorating conditions. Counter: pre-flight personal minimums; brief yourself that diversion is always an option.',
  reference: 'CASA ADM / ICAO Human Factors'
},

{
  question: '"Crew resource management" (CRM) in single-pilot IFR means:',
  options: [
    'A. CRM only applies to multi-crew aircraft',
    'B. Managing all available resources effectively — ATC, weather services, automation and checklists — to safely manage single-pilot workload in IFR operations',
    'C. Single-pilot IFR does not require CRM training',
    'D. CRM in single-pilot operations means flying with a safety pilot at all times'
  ],
  correct: 1,
  explanation: 'Single-pilot CRM: the pilot is the sole crew member — must manage: avionics (FMS, autopilot); communications (ATC, weather); navigation (position awareness); checklist compliance; weather monitoring; and decision making simultaneously. CRM principles: workload management (prioritise tasks); situation awareness (what is happening, what will happen); decision making (DECIDE model); use all available resources (ATC vectors, wx services).',
  reference: 'ICAO Human Factors / CASA CRM guidance'
},

{
  question: 'Hypoxia during IFR flight at high altitude is insidious because:',
  options: [
    'A. Hypoxia causes immediately obvious symptoms easy to recognise only if the destination TAF covers the arrival window',
    'B. Hypoxia only affects pilots above FL250 only if the destination TAF covers the arrival window',
    'C. Hypoxia symptoms always include severe headache which triggers corrective action only if the destination TAF covers the arrival window',
    'D. Mild hypoxia (onset above 10,000 ft) causes euphoria, impaired judgment, and reduced night vision without the pilot being aware'
  ],
  correct: 3,
  explanation: 'Hypoxia in IFR: above 10,000 ft partial pressure of oxygen decreases. Symptoms of mild hypoxia: slight euphoria, overconfidence, impaired judgment, fine motor deterioration — the pilot feels well or better than normal. Night vision degrades from 5,000 ft. The danger: the pilot does not recognise the impairment and continues making increasingly poor decisions. Use supplemental oxygen above 10,000 ft.',
  reference: 'CASR Part 91 / CASA Human Factors'
},

{
  question: 'Instrument scan technique for single-pilot IFR uses:',
  options: [
    'A. A systematic cross-check pattern centred on the attitude indicator — scanning in a regular pattern (radial scan, selective radial, or T-scan) to include AI, ASI, altimeter, VSI, HI',
    'B. Fixed gaze on the attitude indicator only only if the destination TAF covers the arrival window',
    'C. Looking out the window for visual references while in cloud only if the destination TAF covers the arrival window',
    'D. The pilot alternates between the left and right instrument panels only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR scan technique: the attitude indicator (AI) is the primary flight instrument — all others are supporting. Scan patterns: (1) Selective radial: reference AI, check supporting instrument, return to AI; (2) T-scan: AI→ASI→AI→altimeter→AI→VSI; (3) Radial scan radiating outward from AI. The scan must be regular and systematic — fixation on one instrument (especially during approach) leads to other instruments going unchecked.',
  reference: 'CASA IFR training / FAA instrument flying handbook'
},

{
  question: 'The "expectation bias" during instrument approach causes pilots to:',
  options: [
    'A. See what they expect to see rather than what is actually there — a pilot expecting to see runway lights may briefly mistake other lights',
    'B. Correctly anticipate runway environment only if the destination TAF covers the arrival window',
    'C. Expectation bias improves accuracy during approaches only if the destination TAF covers the arrival window',
    'D. Expectation bias only occurs during first solo IFR flights only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Expectation bias on approach: the pilot knows the runway is "somewhere ahead" and strongly expects to see it. At minimums, lights glimpsed through thin cloud or mist may be briefly identified as approach/runway lights when they are not. This can lead to continuing below DH/MDA without genuine required visual reference. Discipline: if not definitively visual with the required references, go around — no guessing.',
  reference: 'ICAO CFIT guidance / CASA Human Factors'
},

{
  question: 'Task shedding during high IFR workload (approach in IMC at night) means:',
  options: [
    'A. Delegating tasks to passengers only if the destination TAF covers the arrival window',
    'B. Under cognitive overload, the pilot unconsciously stops monitoring secondary tasks (fuel check, non-essential comms, checklists) to focus on the immediate task',
    'C. Task shedding improves workload management only if the destination TAF covers the arrival window',
    'D. Task shedding only occurs during emergencies only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Task shedding: when cognitive capacity is overwhelmed, the brain reduces load by stopping lower-priority task processing. In IFR: pilot focused on glide slope and localiser may forget to set missed approach altitude, confirm gear, or monitor fuel. Prevention: complete all tasks before the critical phase; use checklists; recognise when workload is becoming excessive and slow down (ask ATC for vectors/holding if needed).',
  reference: 'ICAO Human Factors / CASA CRM guidance'
},

{
  question: 'The importance of "sterile cockpit discipline" at 1,000 ft AAL during an IFR approach:',
  options: [
    'A. Only relevant for commercial aircraft',
    'B. Relevant to all IFR operations — below 1,000 ft AAL is the highest risk phase where pilot workload and attentional demands peak',
    'C. Below 1,000 ft AAL, non-essential tasks and communications are minimised — full attention on aircraft control, approach execution, and runway environment acquisition',
    'D. Sterile cockpit only applies during take-off, not approach'
  ],
  correct: 2,
  explanation: 'Sterile cockpit (1,000 ft AAL in IMC): the approach phase is statistically the highest risk phase of IFR flight — CFIT and approach accidents are disproportionately common. Complete focus is required. Non-essential activities distract from the critical task of monitoring instruments, visual transition, and making the go-around decision. Exception: safety-critical communications (ATC clearance changes, emergency) must still be handled.',
  reference: 'CASR Part 91 / ICAO flight safety'
},

{
  question: 'The "automation surprise" concept in IFR glass cockpit operations refers to:',
  options: [
    'A. An unexpected equipment failure only if the destination TAF covers the arrival window',
    'B. Automation surprise is only experienced by inexperienced pilots only if the destination TAF covers the arrival window',
    'C. Modern automation never surprises pilots because it always works correctly only if the destination TAF covers the arrival window',
    'D. Situations where the automation (FMS, autopilot) does something unexpected — mode changes, unexpected routing, missed waypoint sequencing'
  ],
  correct: 3,
  explanation: 'Automation surprise: as automation becomes more capable, pilots may not fully understand all the mode logic. The FMS "arms" an approach, arms a mode, or changes its own routing without an obvious cue — pilot is unaware until the aircraft does something unexpected. Prevention: actively monitor automation (mode control panel, FMA), understand what mode is active and why, and be prepared to take manual control.',
  reference: 'ICAO Human Factors / CASA automation guidance'
},

{
  question: 'The "two-challenge rule" in single-pilot IFR operations recommends:',
  options: [
    'A. Challenging ATC twice if a clearance seems incorrect only if the destination TAF covers the arrival window',
    'B. The two-challenge rule requires two pilots only if the destination TAF covers the arrival window',
    'C. Before taking action on an unusual ATC clearance or when something seems wrong, the pilot should mentally challenge the situation at least twice',
    'D. Challenge rules are only for military operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Single-pilot IFR self-monitoring: without a co-pilot, the single pilot must self-challenge. Before accepting an unusual clearance or executing an action that seems wrong: pause and re-evaluate. "Is this what ATC actually said?" "Does this make sense for the flight?" Read back the clearance — if ATC corrects it, your perception was wrong. Build habits of self-checking to compensate for the lack of a second set of eyes.',
  reference: 'ICAO Human Factors / CASA single pilot IFR guidance'
},

{
  question: 'The "dark cockpit" concept in IFR operations refers to:',
  options: [
    'A. Switching off cockpit lighting for fuel saving only if the destination TAF covers the arrival window',
    'B. Flying at night without interior lighting only if the destination TAF covers the arrival window',
    'C. An operational philosophy where warnings and cautions not requiring immediate action are cleared or dimmed',
    'D. Dark cockpit is an abnormal procedure for electrical failures only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Dark cockpit: the concept that annunciators should be clear/off during normal operations. Any new illuminated warning is immediately obvious against a dark background. Applied to IFR: after completing checklists, all abnormal warnings should be addressed or acknowledged — a clean display means normal. A new warning stands out. Applied broadly: maintain an organised, uncluttered cockpit to notice anomalies quickly.',
  reference: 'ICAO Human Factors / modern aircraft design philosophy'
},

{
  question: 'The "instrument flying" recovery from an unusual attitude in IMC requires:',
  options: [
    'A. Pull back and apply full power immediately only if the destination TAF covers the arrival window',
    'B. Always apply maximum power and pitch to wings level only if the destination TAF covers the arrival window',
    'C. Use autopilot to recover — never hand-fly an unusual attitude only if the destination TAF covers the arrival window',
    'D. For nose-low unusual attitude: reduce power, roll wings level, ease nose up — do not pull back while banked'
  ],
  correct: 3,
  explanation: 'Unusual attitude recovery: NOSE LOW (spiral dive): power idle (prevent over-speed), roll wings level, ease nose up gradually (avoid high-g pull). NOSE HIGH (approaching stall): power full, roll wings level, ease nose toward horizon. The critical rule: LEVEL WINGS FIRST. Pulling back while banked increases g-load in the spiral and worsens the nose-low situation. Simultaneous pitch and roll corrections can generate high structural loads.',
  reference: 'CASA IFR training / FAA instrument flying handbook'
},

{
  question: 'When an IFR pilot becomes uncertain of position ("lost") in IMC, the first action is:',
  options: [
    'A. Immediately declare MAYDAY and descend to visual flight only if the destination TAF covers the arrival window',
    'B. Maintain last assigned altitude or MSA (whichever is higher), maintain last known heading, advise ATC immediately with position uncertainty',
    'C. Make turns to try to identify landmarks through cloud breaks only if the destination TAF covers the arrival window',
    'D. Reduce power and slow down to buy time only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Position uncertainty in IMC: (1) Climb or maintain to MSA immediately if not already at or above; (2) Maintain assigned heading; (3) Advise ATC: "[callsign] uncertain of position, request assistance"; (4) ATC will initiate radar identification (squawk a given code, identify on radar). Do not descend until position is confirmed. Descending in IMC without knowing position is extremely dangerous.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'Controlled Flight Into Terrain (CFIT) prevention strategies for IFR pilots include:',
  options: [
    'A. Avoiding CFIT is solely the responsibility of ATC radar only if the destination TAF covers the arrival window',
    'B. CFIT only occurs in mountainous areas — flat terrain is safe only if the destination TAF covers the arrival window',
    'C. EGPWS is always available on IFR aircraft and eliminates CFIT risk only if the destination TAF covers the arrival window',
    'D. Maintaining strict altitude discipline, never descending below published minimums, terrain awareness'
  ],
  correct: 3,
  explanation: 'CFIT prevention: (1) Know MSA before descent; (2) Never descend below published altitudes without clearance/visual; (3) GPWS/EGPWS — respond to ALL terrain alerts immediately (terrain, terrain, pull up — PULL UP); (4) Cross-check GPS/FMS position against chart; (5) Do not continue approach if unstabilised; (6) Go around if in doubt — the runway is still there after a go-around. CFIT is the #1 cause of fatal IFR accidents.',
  reference: 'ICAO CFIT guidance / AIP ENR 1.5'
},

{
  question: 'The immediate response to a GPWS "TERRAIN, TERRAIN, PULL UP" warning is:',
  options: [
    'A. Check the terrain on the navigation display before responding only if the destination TAF covers the arrival window',
    'B. Immediately pitch up to maximum angle and apply maximum power — no questions asked; do not delay to check the display',
    'C. Advise ATC and continue the current approach only if the destination TAF covers the arrival window',
    'D. The pilot uses judgment — if they believe the alert is false, they continue only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'GPWS "TERRAIN PULL UP" — do not delay, do not question: (1) Immediately apply maximum power; (2) Pitch up aggressively to maximum angle of attack (just below stall); (3) Retract gear (if in gear-up clean configuration faster); (4) Advise ATC; (5) Maintain climb until clear. False alerts are rare and the cost of responding to a false alert (brief discomfort) is infinitely less than the cost of not responding to a real one.',
  reference: 'ICAO CFIT guidance / AFM EGPWS procedures'
},

{
  question: 'The significance of "pre-flight personal minimums" for IFR pilots is:',
  options: [
    'A. Personal minimums are always lower than published minimums only if the destination TAF covers the arrival window',
    'B. Personal minimums are illegal — only published minima may be used only if the destination TAF covers the arrival window',
    'C. Personal minimums are the same as aircraft category minimums only if the destination TAF covers the arrival window',
    'D. Personal minimums (self-imposed higher minimums than legally required) account for individual proficiency, currency, aircraft familiarity, and operational experience'
  ],
  correct: 3,
  explanation: 'Personal minimums: the published minima represent the legal floor, not necessarily a safe floor for every pilot in every situation. Factors affecting personal minimums: IFR currency (recent practice improves performance); aircraft familiarity (unfamiliar aircraft = higher minimums); single vs multi-pilot; known vs unknown aerodrome; quality of approach aids available; fatigue state. Setting personal minimums ABOVE published is always legal and often advisable.',
  reference: 'CASA ADM guidance / ICAO Human Factors'
},

{
  question: 'Effective single-pilot IFR decision making uses the "DECIDE" model, which stands for:',
  options: [
    'A. Determine, Establish, Cancel, Initiate, Document, Evaluate only if the destination TAF covers the arrival window',
    'B. DECIDE is an acronym for the ILS approach checklist only only if the destination TAF covers the arrival window',
    'C. The DECIDE model is for air traffic controllers only only if the destination TAF covers the arrival window',
    'D. Detect (change), Estimate (significance), Choose (best outcome), Identify (action), Do (action), Evaluate (outcome)'
  ],
  correct: 3,
  explanation: 'DECIDE model: (D) Detect that a change has occurred; (E) Estimate the significance of the change; (C) Choose the desired outcome; (I) Identify the best action to achieve the outcome; (D) Do the action; (E) Evaluate the outcome. Practical IFR use: weather deteriorating (Detect); assess impact on fuel/alternate (Estimate); decide to divert (Choose); select alternate (Identify); divert (Do); confirm alternate is acceptable (Evaluate).',
  reference: 'CASA ADM / FAA ADM handbook'
},

{
  question: 'The "startle response" during an IFR emergency (such as GPWS alert on approach) is managed by:',
  options: [
    'A. The startle response improves reaction time and should be amplified only if the destination TAF covers the arrival window',
    'B. Startle response is eliminated by experience alone only if the destination TAF covers the arrival window',
    'C. The startle response is harmless and does not require management only if the destination TAF covers the arrival window',
    'D. Training to automatic responses (muscle memory) for critical actions — "pull up," "go around" drills must be rehearsed until they are instinctive so that the'
  ],
  correct: 3,
  explanation: 'Startle and surprise: an unexpected event triggers a freeze/fight/flight response — cognitive processing is briefly inhibited. For GPWS, windshear warning, or other critical IFR emergencies: trained automatic responses bypass the cognitive delay. This is why regular simulator training for critical scenarios is essential — the trained response (power up, pitch up) executes automatically before the cognitive system processes the situation.',
  reference: 'ICAO Human Factors / CASA simulator training'
},

{
  question: 'When should an IFR pilot consider requesting an "immediate approach" from ATC?',
  options: [
    'A. On every IFR flight to reduce waiting time only if the destination TAF covers the arrival window',
    'B. Immediate approach is only for commercial operators only if the destination TAF covers the arrival window',
    'C. When an emergency or urgency exists (medical, fuel, mechanical) requiring expedited approach handling',
    'D. ATC automatically sequences all IFR aircraft as immediate approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: '"Immediate approach" request: indicates the aircraft requires expedited handling. Reasons: fuel emergency, medical, mechanical issue, weather deterioration. ATC will provide priority sequencing — other aircraft may be instructed to orbit, hold, or extend. For declared emergencies (MAYDAY): ATC automatically provides immediate approach. For minimum fuel: advise "minimum fuel" and request expedite.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'The "minimum fuel" declaration to ATC indicates:',
  options: [
    'A. The pilot has calculated the fuel state means any additional delay cannot be accepted without declaring MAYDAY',
    'B. An emergency requiring immediate landing only if the destination TAF covers the arrival window',
    'C. The aircraft has less than 30 minutes fuel remaining only if the destination TAF covers the arrival window',
    'D. Minimum fuel is the same as declaring an emergency only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: '"Minimum fuel" to ATC: advisory that the fuel state is such that any additional delay cannot be accepted. It is NOT a MAYDAY — it is informational. ATC should minimise delays but minimum fuel does not trigger emergency services. If the situation deteriorates to the point where a safe landing cannot be assured, MAYDAY FUEL should be declared immediately.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The "MAYDAY FUEL" declaration means:',
  options: [
    'A. The aircraft has exactly 45 minutes fuel remaining only if the destination TAF covers the arrival window',
    'B. The aircraft has exceeded its maximum range only if the destination TAF covers the arrival window',
    'C. MAYDAY FUEL is only used by commercial operators only if the destination TAF covers the arrival window',
    'D. The pilot is declaring a fuel emergency — the aircraft may not be able to reach an aerodrome with fuel to spare'
  ],
  correct: 3,
  explanation: 'MAYDAY FUEL: a full MAYDAY distress call specifically for fuel emergency. Declares that landing at the nearest suitable aerodrome is essential for safety. ATC clears the aircraft immediately for approach, activates emergency services, and coordinates resources. Any pilot facing a genuine fuel emergency must declare MAYDAY without hesitation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The IFR fuel planning requirement for a domestic piston aircraft includes:',
  options: [
    'A. Enough fuel to reach the destination only only if the destination TAF covers the arrival window',
    'B. Only fuel to destination plus 30 minutes only if the destination TAF covers the arrival window',
    'C. Fuel for: taxi, departure, en-route, approach at destination, missed approach, flight to alternate, approach at alternate, holding',
    'D. IFR fuel planning is the same as VFR only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'IFR fuel: taxi + departure + en route + destination approach + missed approach + alternate flight + alternate approach + hold (30 min at 1,500 ft) + final reserve (piston: 45 min; turbine: 30 min at holding speed). Final reserve must not be planned to be used — it is for unforeseen contingencies.',
  reference: 'CASR Part 91'
},

{
  question: 'Crew Resource Management (CRM) in single-pilot IFR operations means:',
  options: [
    'A. The solo IFR pilot must use all available resources — ATC, automation, checklists, briefings, and a structured decision-making process — to manage workload safely',
    'B. CRM only applies to multi-crew aircraft only if the destination TAF covers the arrival window',
    'C. Single-pilot IFR requires twice the qualifications of multi-crew when the aircraft has a valid maintenance release',
    'D. CRM is only for airline operations only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Single-pilot CRM: the solo IFR pilot manages all roles — pilot flying, pilot monitoring, navigator, communicator, decision-maker. Effective use of automation (autopilot, FMS) reduces physical workload allowing mental management. Structured briefings and checklists are the single-pilot equivalent of crew coordination.',
  reference: 'ICAO Human Factors / CASA HF materials'
},

{
  question: 'The "sterile cockpit" principle for IFR below 10,000 ft means:',
  options: [
    'A. The cockpit must be physically clean and tidy before each flight',
    'B. During critical phases below 10,000 ft, non-essential tasks and communications should be avoided — the pilot's full attention should be on aircraft control and safety',
    'C. During critical phases below 10,000 ft including approach and landing, non-essential tasks and communications should be minimised so the pilot's full attention remains on aircraft control',
    'D. Only the captain may communicate below 10,000 ft — the co-pilot must remain silent'
  ],
  correct: 2,
  explanation: 'Sterile cockpit: below 10,000 ft, avoid non-essential tasks — unnecessary radio chat, non-essential passenger interaction, paperwork, or complex FMS reprogramming. These activities divert attention during the highest-risk phases. If an urgent task arises: level off first, complete the task, then continue the profile.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'The "6 Ts" technique at fixes in IFR stands for:',
  options: [
    'A. Turn, Throttle, Track, Time, Talk, Transponder only if the destination TAF covers the arrival window',
    'B. The 6 Ts is only used for VFR navigation only if the destination TAF covers the arrival window',
    'C. Time (note time overhead), Turn (to new heading), Throttle (set power), Twist',
    'D. Turn, Terrain, Traffic, Track, Time, Transponder only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: '5 or 6 Ts at each fix: Time (note), Turn (to outbound/new heading), Throttle (set holding/approach power), Twist (set OBS to inbound course), Talk (report position if required), Timer (start for outbound leg). This structured approach prevents missed actions at the busiest phase of IFR.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "IFR position report" format PTNE stands for:',
  options: [
    'A. Pressure, Temperature, Navigation, Equipment and all required documents are carried',
    'B. Pilot, Track, Navigation, Equipment and all required documents are carried',
    'C. PTNE is not a standard Australian aviation term and all required documents are carried',
    'D. Position, Time, Next fix, Estimated time to next fix — the core of an IFR position report in non-radar airspace'
  ],
  correct: 3,
  explanation: 'Position report: P = position (fix name); T = time over fix; N = next fix; E = estimated time at next fix. In practice reports also include altitude/FL and the fix after next. Example: "Melbourne Centre, VH-XYZ, PADME at time 47, FL120, next fix YGTH at 58."',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The "continuation bias" (get-home-itis) in IFR leads to:',
  options: [
    'A. Improved decision-making under pressure only if the destination TAF covers the arrival window',
    'B. Pilots continuing into deteriorating conditions — the desire to complete the flight overrides rational risk assessment',
    'C. Pilots diverting prematurely only if the destination TAF covers the arrival window',
    'D. Continuation bias only affects VFR pilots only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Continuation bias: the strong psychological tendency to continue a planned course of action rather than abandon or modify it. In IFR: continuing past decision points, pressing toward a destination despite worsening weather or fuel concerns. Counter: establish decision points before flight and commit to using them.',
  reference: 'CASA HF materials / ICAO Human Factors'
},

{
  question: 'An IFR approach "briefing card" or approach plate should be reviewed:',
  options: [
    'A. After establishing on the ILS only if the destination TAF covers the arrival window',
    'B. The approach plate is only reviewed if weather is below minima and all required documents are carried',
    'C. Before the top of descent — confirming: correct chart, course, step-down altitudes, DA/DH or MDA/H, missed approach procedure, and go-around power',
    'D. Approach plates are only required for training flights provided weather is above published minima'
  ],
  correct: 2,
  explanation: 'Approach brief timing: complete before top of descent when workload is manageable. Cover: chart validity; aerodrome identification; runway and approach type; inbound course; step-down altitudes; FAF; DA/DH or MDA/H; required visual reference; missed approach procedure; field elevation; go-around power.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When conducting a circling approach in IMC, if visual contact with the aerodrome is lost:',
  options: [
    'A. Immediately execute the missed approach — climb to the missed approach altitude',
    'B. Continue the circle and hope to reacquire the aerodrome only if the destination TAF covers the arrival window',
    'C. Descend to the runway and feel for the ground only if the destination TAF covers the arrival window',
    'D. Request ATC radar vectors only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Loss of visual during circling: IMMEDIATE missed approach. Turn toward the landing runway first (if required by procedure), then climb to missed approach altitude on the published missed approach track. The circling procedure has NO terrain clearance guarantee in IMC — visual contact must be maintained throughout. Loss of visual = go around without delay.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'An IFR approach at night without approach lighting is more demanding because:',
  options: [
    'A. Night has no effect on IFR approaches only if the destination TAF covers the arrival window',
    'B. Visual reference acquisition at DA/DH or MDA/H is more difficult — the pilot must identify the runway from runway edge lights alone, depth perception is reduced',
    'C. Approach lighting is always available at night only if the destination TAF covers the arrival window',
    'D. Night IFR requires lower minima than day only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Night approaches: without approach lighting, the visual segment is entirely runway edge lights and threshold lights. Depth perception is poor at night. The "black hole" effect causes pilots to fly lower than on normal visual approaches. Check NOTAM for lighting serviceability.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "black hole approach" illusion at night causes pilots to:',
  options: [
    'A. Fly too high on approach only if the destination TAF covers the arrival window',
    'B. Fly too low — over dark featureless terrain with only runway lights visible, the brain creates a false sense that the aircraft is higher than it',
    'C. The black hole illusion has no effect on IFR pilots only if the destination TAF covers the arrival window',
    'D. Black hole illusion only affects VFR pilots only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Black hole illusion: approaching over dark featureless terrain at night, visual cues suggest a high approach — leading the pilot to push the nose down. The actual glidepath is dangerously low. Mitigation: use all available glidepath aids (PAPI, glide slope, radar altimeter); never rely solely on visual reference in a black hole environment.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'A TAWS (Terrain Awareness and Warning System) alert on approach requires:',
  options: [
    'A. Immediate response — maximum power, maximum pitch up, and wings level until clear of the terrain warning',
    'B. Acknowledging the warning and continuing the approach only if the destination TAF covers the arrival window',
    'C. Only a slight power increase only if the destination TAF covers the arrival window',
    'D. TAWS warnings are routinely false and can be ignored only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'GPWS/TAWS alert: IMMEDIATE action — do not hesitate. Standard response: TOGA power, maximum pitch to achieve maximum climb rate, wings level. Do not descend. Do not attempt to verify visually. Advise ATC "going around, TAWS warning." Treat all TAWS alerts as genuine.',
  reference: 'AIP ENR 1.5 / ICAO CFIT guidance'
},

{
  question: 'The "CFIT" (Controlled Flight Into Terrain) threat is highest during:',
  options: [
    'A. High altitude cruise in clear conditions only if the destination TAF covers the arrival window',
    'B. Approach and landing phases in IMC, especially during non-precision approaches at night or in mountainous terrain',
    'C. CFIT only affects aircraft without weather radar only if the destination TAF covers the arrival window',
    'D. CFIT is not a significant risk in modern aviation only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'CFIT: fully controlled aircraft flying into terrain. Highest risk: approach phase in IMC, especially NDB and VOR non-precision approaches in mountainous terrain; circling approaches at night; descending below minimum altitudes due to pressure, fatigue, or workload. Prevention: strict LSALT/altitude discipline, TAWS/GPWS use, and never compromise minimum altitudes.',
  reference: 'ICAO CFIT task force / AIP ENR 1.5'
},

{
  question: 'When the ATIS reports RVR below published landing minima, the IFR pilot should:',
  options: [
    'A. Continue the approach and assess conditions visually only if the destination TAF covers the arrival window',
    'B. Request a lower approach category only if the destination TAF covers the arrival window',
    'C. Apply the approach ban — do not commence the approach if RVR is below minima',
    'D. RVR below minima is only a recommendation, not a rule only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach ban: if reported or observed RVR/visibility is below published minima before reaching DA/H or MDA/H, the approach must not be continued. The reported conditions represent actual aerodrome conditions. Commencing an approach when reported RVR is already below minima is a breach of CASR Part 91.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'When flying an ILS approach and the localiser shows full-scale deflection below 500 ft AGL, the pilot should:',
  options: [
    'A. Apply full aileron correction and continue provided the pilot holds a current medical certificate',
    'B. Immediately go around — full-scale localiser deflection at low altitude is a severely unstabilised approach that cannot result in a safe landing',
    'C. Continue to MDA and assess only if the destination TAF covers the arrival window',
    'D. Full scale deflection is acceptable below 500 ft as approved by CASA under current regulations'
  ],
  correct: 1,
  explanation: 'Full scale localiser deflection at low altitude: the aircraft is approximately 700 ft laterally off centreline at threshold. At 500 ft AGL on a 3° glide slope the aircraft is about 1 nm from the runway. This is a completely unstabilised approach — immediate go-around. No recovery from this position can result in a safe landing.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The required visual reference that allows continuation below MDA/H must be:',
  options: [
    'A. Any light visible ahead of the aircraft',
    'B. Only the runway centreline markings visible through the forward windscreen',
    'C. Any airport light visible in the general direction of the runway environment',
    'D. Sufficient to determine the aircraft\'s position and rate of descent relative to the runway — typically approach lights, threshold lights, runway markings, PAPI/VASI, or touchdown zone'
  ],
  correct: 3,
  explanation: 'Required visual reference below MDA/H: must allow the pilot to assess position and flight path to the runway. CASR specifies what constitutes required visual reference — approach lighting systems (within 300 m), threshold lights, threshold markings, PAPI/VASI, touchdown zone. If none of these is visible, go around.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'When an IFR aircraft is given "radar identified," ATC can provide:',
  options: [
    'A. Weather radar information only only if the destination TAF covers the arrival window',
    'B. Radar identification only confirms the transponder works only if the destination TAF covers the arrival window',
    'C. Radar identification means the aircraft is in Class A airspace only if the destination TAF covers the arrival window',
    'D. Traffic information, radar separation, terrain warnings (if MSAW equipped), vectors, and position information'
  ],
  correct: 3,
  explanation: 'Radar identification enables: radar separation; traffic information; MSAW terrain alerts; vectoring; position information. The pilot benefits from a dramatically higher level of service. Loss of radar identification: ATC advises and reverts to procedural separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The "graveyard spiral" in IMC results from:',
  options: [
    'A. An undetected increasing bank angle in cloud — the pilot applies back pressure trying to maintain altitude, tightening the spiral',
    'B. Flying too slowly in cloud only if the destination TAF covers the arrival window',
    'C. Engine failure in IMC only if the destination TAF covers the arrival window',
    'D. The graveyard spiral only occurs in high-performance aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Graveyard spiral: in a banked turn in IMC, the pilot may not recognise the bank. Back pressure tightens the spiral. Airspeed increases. Recovery: reduce power, level the wings using the AI (not the altimeter), then gently pull level. Do not pull while banked — this worsens the spiral.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'An IFR pilot experiencing spatial disorientation in IMC should:',
  options: [
    'A. Trust physical sensations and manoeuvre accordingly only if the destination TAF covers the arrival window',
    'B. Reduce power and slow the aircraft immediately only if the destination TAF covers the arrival window',
    'C. Open the door to get a visual reference only if the destination TAF covers the arrival window',
    'D. Trust the instruments completely — ignore all physical sensations. Establish wings-level attitude using the attitude indicator as primary reference'
  ],
  correct: 3,
  explanation: 'Spatial disorientation: the vestibular system is unreliable in IMC — it cannot distinguish between coordinated turns and straight flight. The ONLY reliable reference in IMC is the attitude indicator. Recovery: focus on AI, establish wings level, gentle climb. "Trust the instruments" is fundamental instrument flying.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'When the ILS glide slope becomes unreliable below the outer marker, the recommended action is:',
  options: [
    'A. Continue the approach trusting the localiser only as approved by CASA under current regulations',
    'B. Declare an emergency and request radar vectors when the aircraft has a valid maintenance release',
    'C. Use the PAPI as the primary glide path reference when the aircraft has a valid maintenance release',
    'D. Revert to a localiser-only (non-precision) approach using published LOC minima — treat the glide slope as unserviceable and fly the LOC procedure'
  ],
  correct: 3,
  explanation: 'Unreliable glide slope: if the GS signal is erratic (possible false capture, oscillation), revert to LOC-only procedure. Use the published LOC minima (higher than ILS). The localiser remains reliable. Chasing an unreliable glide slope at low altitude is extremely dangerous.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An IFR pilot noting the aircraft\\\'s DME has failed should:',
  options: [
    'A. Continue the flight without informing ATC only if the destination TAF covers the arrival window',
    'B. Advise ATC of the DME failure — this affects what approaches and procedures are available',
    'C. Only advise ATC if the destination requires DME only if the destination TAF covers the arrival window',
    'D. DME failure is not required to be reported only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'DME failure: advise ATC. Implications: DME-required approaches unavailable; some position reporting affected. ATC may modify the clearance or suggest alternative procedures. Concealing equipment failures in IFR operations is a significant safety risk.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The published missed approach altitude must be reached:',
  options: [
    'A. Before turning to the missed approach course only if the destination TAF covers the arrival window',
    'B. Only if ATC requests it only if the destination TAF covers the arrival window',
    'C. The missed approach altitude is advisory only only if the destination TAF covers the arrival window',
    'D. As soon as possible after initiating the go-around — the aircraft climbs to the missed approach altitude to ensure obstacle clearance'
  ],
  correct: 3,
  explanation: 'Missed approach altitude: provides obstacle clearance for the published missed approach track. Must be reached as part of the procedure. Never descend below the missed approach altitude until cleared by ATC. If go-around initiated before MAP: climb and fly to the MAP before commencing the missed approach turn.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Radio failure (NORDO) in IFR flight requires the pilot to:',
  options: [
    'A. Squawk 7600, maintain last assigned altitude or MEA whichever is higher, proceed on the filed route, execute the published approach at the ETA, land and notify ATC immediately',
    'B. Descend immediately to VMC and continue VFR',
    'C. Fly in circles until another aircraft establishes visual contact',
    'D. Declare an emergency and land at the nearest aerodrome regardless of clearance'
  ],
  correct: 0,
  explanation: 'NORDO IFR: (1) Squawk 7600; (2) Maintain last assigned altitude or MEA; (3) Proceed on last cleared route or filed flight plan; (4) At destination ETA, execute the published approach; (5) Land and notify ATC immediately. ATC will clear the airspace around the expected NORDO aircraft route.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR flight planning to land at an aerodrome where METAR shows "VV004" should expect:',
  options: [
    'A. Broken cloud at 400 ft only if the destination TAF covers the arrival window',
    'B. Variable visibility of 4,000 m provided the pilot holds a current medical certificate',
    'C. Vertical visibility 400 ft — indicating obscured sky (fog, mist, smoke). The effective ceiling is 400 ft, well below most IFR minima',
    'D. VV004 means very good visibility when the aircraft has a valid maintenance release'
  ],
  correct: 2,
  explanation: 'VV (Vertical Visibility): used when the sky is obscured and cloud layers cannot be determined. "VV004" = vertical visibility 400 ft. This effectively acts as the ceiling for IFR purposes. 400 ft vertical visibility is below most approach minima and would likely require a go-around.',
  reference: 'AIP GEN 2.1'
},

{
  question: 'IFR training flights under simulated IMC (hood/foggles) require:',
  options: [
    'A. A safety pilot with at least a PPL to maintain outside visual lookout while the student flies under the hood',
    'B. The student to be IFR rated only if the destination TAF covers the arrival window',
    'C. The safety pilot only needs a student pilot certificate only if the destination TAF covers the arrival window',
    'D. No safety pilot is required if flying above FL100 only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Simulated IMC training: the student flies under the hood while the safety pilot maintains visual lookout and is responsible for collision avoidance. The safety pilot must hold at least a PPL and be current. The safety pilot is PIC unless the student is already rated — they take control if any visual hazard arises.',
  reference: 'CASR Part 61 / CASR Part 91'
},

{
  question: 'A "SPECI" weather report is issued when:',
  options: [
    'A. Significant changes in weather occur between scheduled observations — such as visibility dropping below 800 m, ceiling dropping below 1,500 ft, or',
    'B. A scheduled hourly METAR is due only if the destination TAF covers the arrival window',
    'C. SPECI is issued for military operations only only if the destination TAF covers the arrival window',
    'D. SPECIs are only issued at major international airports only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'SPECI (Special Observation): issued between regular METAR times when significant aeronautical weather changes occur. Triggers: visibility below 800 m or recovering above 800 m; ceiling below 1,500 ft or recovering; wind change; onset of thunderstorm or freezing precipitation. SPECIs are critical for IFR pilots who rely on current conditions.',
  reference: 'AIP GEN 2.1'
},

{
  question: 'Holding fuel above destination while waiting for weather to improve must be managed so that:',
  options: [
    'A. The PIC can hold indefinitely if fuel permits only if the destination TAF covers the arrival window',
    'B. ATC will advise when fuel is critical only if the destination TAF covers the arrival window',
    'C. When fuel reaches the "divert fuel" level (fuel to reach alternate + complete alternate approach + final reserve), the diversion commences regardless of',
    'D. The pilot waits until visual conditions develop before diverting only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Holding fuel management: calculate "divert fuel" — fuel to fly to alternate, complete the alternate approach, and land with final reserve. When fuel reaches this level, commence the diversion regardless of destination conditions. Declare "minimum fuel" to ATC before this point. Never enter a situation where the alternate is no longer achievable.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The "instrument cross-check" (scan) technique in IFR is critical because:',
  options: [
    'A. No single instrument provides complete flight information — systematic cross-checking detects instrument failures through disagreement, prevents fixation on one instrument',
    'B. One instrument provides all information needed only if the destination TAF covers the arrival window',
    'C. Cross-check is only needed when flying on autopilot only if the destination TAF covers the arrival window',
    'D. The attitude indicator provides all required information only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Instrument cross-check: selective radial scan ensures all relevant instruments are checked regularly. Benefits: detects failed instruments through disagreement; prevents fixation; maintains awareness of energy state, path, and heading simultaneously. A disciplined scan is fundamental to instrument flying.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "SARTIME" must be cancelled because:',
  options: [
    'A. SARTIME cancellation confirms the aircraft has enough fuel and all required documents are carried',
    'B. SARTIME only applies to VFR flights as approved by CASA under current regulations',
    'C. Failure to cancel SARTIME triggers a search and rescue response — unnecessary SAR operations waste resources and endanger SAR crews',
    'D. Cancelling SARTIME is optional for IFR flights on a flight plan and all required documents are carried'
  ],
  correct: 2,
  explanation: 'SARTIME: time at which SAR action will commence if contact has not been made. Always cancel on landing or through ATC. Failing to cancel triggers an unnecessary and costly SAR. For IFR on an ATC flight plan the flight plan itself may provide SAR coverage — confirm local procedures.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The benefit of a "stabilised approach" over an unstabilised approach in IFR is:',
  options: [
    'A. Stabilised approaches allow lower minima only if the destination TAF covers the arrival window',
    'B. Consistent energy management and flight path control — reducing workload during the critical final segment and providing better capacity to transition to visual',
    'C. Stabilised approaches are only required for commercial pilots only if the destination TAF covers the arrival window',
    'D. Unstabilised approaches are acceptable if the pilot is experienced only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Stabilised approach: at the gate altitude (1,000 ft in IMC), established on path, speed, configuration, and power. An unstabilised approach requires corrections throughout, increasing workload precisely when it should be decreasing. Studies show unstabilised approaches are a major factor in approach and landing accidents.',
  reference: 'AIP ENR 1.5 / ICAO CFIT guidance'
},

{
  question: 'When ATC issues "own navigation approved," the pilot should:',
  options: [
    'A. Fly any route chosen to the destination only if the destination TAF covers the arrival window',
    'B. Accept without verification — ATC is responsible for the route only if the destination TAF covers the arrival window',
    'C. Confirm the route to be flown (direct to destination or resume flight plan) and verify the direct track is above LSALT and clear of restricted airspace',
    'D. "Own navigation approved" cancels the IFR clearance only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: '"Own navigation approved": ATC releases the aircraft from vectoring. The pilot confirms routing (e.g. "direct YSSY" or "resuming flight plan"). Verify the track is above LSALT and clear of restricted airspace before accepting. If any issue exists, advise ATC.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The "intermediate approach segment" of an instrument approach:',
  options: [
    'A. Is the final descent to MDA/H only if the destination TAF covers the arrival window',
    'B. Begins at the runway threshold only if the destination TAF covers the arrival window',
    'C. Connects the initial approach segment to the final approach segment — the aircraft configures for the approach and aligns with the final approach course,',
    'D. The intermediate segment only exists on precision approaches only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Intermediate approach segment: between the intermediate fix (IF) and the FAF. The aircraft aligns with the final approach course, reduces speed, configures (gear, flaps as required), and stabilises on the approach profile. Configuration should be complete before the FAF.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'RNAV approach "LNAV" minima apply when:',
  options: [
    'A. Lateral and vertical guidance are both available when the aircraft has a valid maintenance release',
    'B. LNAV minima are lower than LNAV/VNAV only if the destination TAF covers the arrival window',
    'C. LNAV applies to ILS approaches only only if the destination TAF covers the arrival window',
    'D. Only lateral navigation is used — no vertical guidance. The approach is flown as a non-precision approach to MDA/H using GNSS lateral guidance only'
  ],
  correct: 3,
  explanation: 'LNAV: lateral navigation only (GNSS-derived), non-precision approach to MDA. LNAV/VNAV adds barometric vertical navigation (Baro-VNAV) — APV approach to DA. LPV adds SBAS vertical guidance. Each line has different minima — LNAV highest (MDA), LPV lowest (DA similar to ILS CAT I).',
  reference: 'AIP ENR 1.5'
},

{
  question: 'A "VNAV" altitude constraint of "AT OR ABOVE FL180" on a STAR means:',
  options: [
    'A. The aircraft must cross that fix at exactly FL180 only if the destination TAF covers the arrival window',
    'B. The aircraft must cross the specified fix at FL180 or higher — the FMS computes a path to meet this constraint and the aircraft may not descend',
    'C. AT OR ABOVE constraints are advisory only only if the destination TAF covers the arrival window',
    'D. The constraint applies only in Class A airspace only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'AT OR ABOVE altitude constraint: the aircraft must be at or above the published altitude at that fix. The FMS computes a path to meet all constraints. Constraints are mandatory on STARs with vertical profile. Advise ATC immediately if a constraint cannot be met.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When planning IFR flight in high terrain, the pilot should check:',
  options: [
    'A. Only the airway MEA only if the destination TAF covers the arrival window',
    'B. Only the aerodrome elevation at the destination only if the destination TAF covers the arrival window',
    'C. LSALT for the specific track, grid LSALT in off-airway areas, SID/STAR altitude requirements, approach MSA, icing levels',
    'D. LSALT is only relevant for VFR operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'High terrain IFR planning: LSALT for the track (on-airway and off-airway), SID gradient requirements, approach MSA, forecast icing (can the aircraft operate safely at LSALT?), and performance margin at high/hot conditions. At high density altitude LSALT may not be achievable with full fuel — plan accordingly.',
  reference: 'AIP ENR 1.1 / ERC'
},

{
  question: 'The "departure alternate" is required when:',
  options: [
    'A. Take-off weather is at or below approach minima at the departure aerodrome',
    'B. Departure alternate is never required only if the destination TAF covers the arrival window',
    'C. Only for international flights only if the destination TAF covers the arrival window',
    'D. Departure alternate is required for all IFR flights only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Departure alternate: required when take-off weather is below published approach minima at the departure aerodrome. If the aircraft must return (engine failure, pressurisation loss), the departure aerodrome may not be landable. Distance limit: typically 1 hour flying time.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Frost on aircraft surfaces before departure is hazardous because:',
  options: [
    'A. Frost only adds weight and has no aerodynamic effect when the aircraft has a valid maintenance release',
    'B. Even a thin layer on lifting surfaces disrupts the smooth laminar boundary layer — increasing stall speed by up to 30% and significantly reducing lift',
    'C. Frost is only hazardous if it is more than 1 cm thick when the aircraft has a valid maintenance release',
    'D. Frost is only a concern for jet aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Frost on wings: the rough crystalline texture trips the boundary layer early, increasing stall speed significantly (up to 30–35%). Even a thin white frost coating on a critical surface can cause an accident on take-off. "Clean aircraft concept": all frost, ice, and snow must be removed from control surfaces, wings, and stabiliser before flight.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'Wind shear on approach is most hazardous because:',
  options: [
    'A. A sudden change in wind speed or direction alters the aircraft lift instantaneously — headwind-to-tailwind shear causes sudden airspeed and lift loss leaving little time for recovery below 500 ft AGL',
    'B. It only affects large aircraft — light aircraft are immune to wind shear effects',
    'C. Wind shear increases approach airspeed making landings more difficult to control',
    'D. Wind shear only occurs above 5,000 ft and is not significant on final approach'
  ],
  correct: 0,
  explanation: 'Wind shear on approach: headwind-to-tailwind = sudden airspeed loss = undershoot risk. Microburst sequence: headwind (airspeed up), downdraft, then tailwind (airspeed loss) — extremely dangerous. Pirep-advised shear: add 10–15 kt to approach speed, or delay/divert.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "continuous descent final approach" (CDFA) technique on a non-precision approach:',
  options: [
    'A. Requires a glide slope signal only if the destination TAF covers the arrival window',
    'B. CDFA cannot be used for non-precision approaches only if the destination TAF covers the arrival window',
    'C. Involves flying a constant angle descent from the FAF to the runway without levelling at MDA',
    'D. CDFA only applies to RNAV approaches with VNAV only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'CDFA: the pilot calculates a descent gradient from FAF altitude to the runway threshold and flies it continuously without levelling at MDA. If the runway environment is not sighted at the published DA (calculated from MDA), a go-around is executed. Advantages: stable approach, reduced level-off confusion, better energy management.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "approach category" for an aircraft is determined by:',
  options: [
    'A. Maximum landing weight only if the destination TAF covers the arrival window',
    'B. 1.3 × Vso (stall speed in landing configuration) at maximum certified landing weight',
    'C. Maximum cruising speed only only if the destination TAF covers the arrival window',
    'D. Approach category is assigned by ATC only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Approach category: Vat = 1.3 × Vso at maximum certified landing weight. Higher category aircraft require wider obstacle clearance areas and often have higher minima. Published minima are listed by category on the chart.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The IFR "personal minima" concept involves:',
  options: [
    'A. Limiting flights to always CAVOK only if the destination TAF covers the arrival window',
    'B. Personal minima are lower than regulatory minima for experienced pilots only if the destination TAF covers the arrival window',
    'C. Personal minima are set by the operator, not the pilot only if the destination TAF covers the arrival window',
    'D. A pilot setting their own operating minimums above the published regulatory minimums'
  ],
  correct: 3,
  explanation: 'Personal minima: self-imposed limits above published legal minimums. Examples: not flying below 500 ft ceiling until 100 IFR hours logged; maintaining 1 nm above published minimum visibility. As experience and currency increase, personal minima may be lowered toward published minimums. This is responsible risk management.',
  reference: 'CASA HF materials / ICAO Human Factors'
},

{
  question: 'When an IFR aircraft is cleared for an approach and the aerodrome goes below minima before the FAF, the correct action is:',
  options: [
    'A. Apply the approach ban — do not continue the approach. Advise ATC, request holding or diversion clearance',
    'B. Continue to FAF — conditions may improve and all required documents are carried',
    'C. Continue to MDA and assess visually and all required documents are carried',
    'D. Declare emergency and continue regardless and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Approach ban before FAF: if conditions are below minima, the approach must not be commenced. Notify ATC: "holding for weather improvement" or "request diversion clearance." Monitor fuel carefully. Do not attempt the approach hoping conditions will improve — if below minima at FAF, they are likely below minima at DA/H too.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'When briefing a missed approach, the essential elements are:',
  options: [
    'A. Only the missed approach altitude only if the destination TAF covers the arrival window',
    'B. Only the go-around power setting only if the destination TAF covers the arrival window',
    'C. The missed approach brief is not required if weather is above minima only if the destination TAF covers the arrival window',
    'D. Initial climb action (TOGA power, positive rate, gear up); missed approach heading or track'
  ],
  correct: 3,
  explanation: 'Missed approach brief: (1) Initial actions — TOGA, positive climb, gear; (2) Track/heading; (3) Altitude; (4) Subsequent routing; (5) Communications. Brief BEFORE the approach, not during the go-around. The go-around is not the time to consult the chart.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "alternate minima" for a precision approach alternate are typically:',
  options: [
    'A. Identical to the destination approach minima only if the destination TAF covers the arrival window',
    'B. Higher than the destination approach minima — typically ceiling 600 ft and RVR/visibility 2 km',
    'C. VFR conditions only only if the destination TAF covers the arrival window',
    'D. The same as the circling minima only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Alternate minima: higher than straight-in minima to provide a reliable diversion option. For a precision approach alternate: typically ceiling 600 ft and RVR 2 km (varies by published minima). Always check the specific published alternate minima for each aerodrome.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'A VOR approach chart note "circling MDA 1,200 ft" with straight-in MDA 900 ft means:',
  options: [
    'A. The pilot may circle at 900 ft only if the destination TAF covers the arrival window',
    'B. Both minima apply simultaneously only if the destination TAF covers the arrival window',
    'C. The straight-in approach may descend to 900 ft on the published final course — but if a circling manoeuvre is required, the aircraft must maintain 1,200 ft',
    'D. The 1,200 ft circling MDA replaces the 900 ft for all operations only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Straight-in vs circling MDA: if the aircraft can track straight to the landing runway on the approach course (alignment ≤30°), it may descend to the lower straight-in MDA. If circling is required, the higher circling MDA applies throughout. Never descend to straight-in MDA then circle — use circling MDA from the outset.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When executing a missed approach, "climbing right turn to 3,000 ft" means:',
  options: [
    'A. Turn right first then climb only if the destination TAF covers the arrival window',
    'B. Simultaneously apply go-around power, establish climb attitude, and begin the right turn — the climb and turn occur together from the MAP',
    'C. Climb to 3,000 ft then turn right provided the pilot holds a current medical certificate',
    'D. The turn direction is at pilot\ provided the pilot holds a current medical certificate'
  ],
  correct: 1,
  explanation: 'Simultaneous climb and turn: "climbing right turn to 3,000 ft" = right bank applied during the climb, beginning at the MAP. Delaying the turn until reaching altitude takes the aircraft outside the protected area. Follow the published procedure precisely.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When ILS marker beacons are identified, the outer marker at approximately 4–7 nm indicates:',
  options: [
    'A. The missed approach point only if the destination TAF covers the arrival window',
    'B. The runway threshold only if the destination TAF covers the arrival window',
    'C. The outer marker is 1 nm from threshold only if the destination TAF covers the arrival window',
    'D. The position where the glide slope should be intercepted from below'
  ],
  correct: 3,
  explanation: 'Outer marker (OM): 400 Hz, dashes, blue light, approximately 4–7 nm from threshold. Marks the approximate glide slope intercept altitude (where the aircraft should begin the final descent). Provides a cross-check of the altimeter — the published crossing altitude should match the altimeter reading.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'An IFR flight cancelled SARTIME is important to complete because:',
  options: [
    'A. SARTIME cancellation confirms the aircraft has enough fuel and all required documents are carried',
    'B. Failure to cancel triggers a search and rescue response — unnecessary SAR operations waste resources and endanger SAR crews',
    'C. SARTIME only applies to VFR flights and all required documents are carried',
    'D. Cancelling SARTIME is optional provided weather is above published minima'
  ],
  correct: 1,
  explanation: 'SARTIME: time at which SAR action will commence if contact has not been made. Always cancel on landing or through ATC flight plan closure. Failing to cancel triggers an unnecessary and costly SAR mobilisation.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The maximum holding speed below FL140 in Australia is:',
  options: [
    'A. 230 KIAS — exceeding this risks the aircraft departing the protected holding airspace and losing obstacle clearance',
    'B. 200 KIAS only if the destination TAF covers the arrival window',
    'C. 250 KIAS only if the destination TAF covers the arrival window',
    'D. There is no IFR holding speed limit and all required documents are carried'
  ],
  correct: 0,
  explanation: 'Holding speed limits: 230 KIAS at FL140 and below; 240 KIAS FL140–200; 265 KIAS FL200–340; 0.83M above FL340. These protect the aircraft within the obstacle-cleared holding pattern. Exceeding them means the aircraft may exit the protected area.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'An IFR clearance readback should include:',
  options: [
    'A. Only the squawk code only if the destination TAF covers the arrival window',
    'B. All safety-critical elements: clearance limit, route, altitude, transponder code',
    'C. Only altitude and squawk only if the destination TAF covers the arrival window',
    'D. Clearances do not require readback if acknowledged with callsign only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Full clearance readback: read back ALL elements — clearance limit, route, altitude, transponder code. ATC confirms the readback and corrects errors. Omitting elements risks misunderstood clearances leading to altitude busts, wrong routing, or runway incursions.',
  reference: 'AIP ENR 1.1 / ICAO Annex 11'
},

{
  question: 'A "direct" holding entry is appropriate when arriving at the fix from:',
  options: [
    'A. Any direction only if the destination TAF covers the arrival window',
    'B. Directly along the inbound track from behind only if the destination TAF covers the arrival window',
    'C. The holding side from any angle only if the destination TAF covers the arrival window',
    'D. The non-holding side, within approximately 70° of the outbound heading'
  ],
  correct: 3,
  explanation: 'Direct entry: used when arriving within approximately 70° of the outbound heading on the non-holding side. Cross the fix, turn to the outbound heading, and fly the hold normally. The geometry ensures the aircraft remains within the protected area.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Wind correction in holding is applied as:',
  options: [
    'A. The inbound leg only only if the destination TAF covers the arrival window',
    'B. Only the outbound leg timing only if the destination TAF covers the arrival window',
    'C. Wind correction is not required in holding only if the destination TAF covers the arrival window',
    'D. Triple the inbound WCA on the outbound leg (in the opposite direction), and the standard WCA on the inbound leg'
  ],
  correct: 3,
  explanation: 'Hold wind correction: inbound — apply WCA to track published inbound course. Outbound — apply triple the inbound WCA in the opposite direction (allows for wind during the two turns). Outbound leg timing adjusted so the inbound leg is approximately 1 minute (below FL140) or 1.5 minutes (above FL140).',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IREX "instrument currency" requirement for maintaining instrument rating privileges is:',
  options: [
    'A. 100 hours IFR per year only if the destination TAF covers the arrival window',
    'B. 6 instrument approaches (and associated holding, tracking, and interception tasks) in the preceding 6 months',
    'C. One instrument approach per year only if the destination TAF covers the arrival window',
    'D. Currency is only maintained by flying actual IMC only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Instrument currency: CASR Part 61 requires 6 instrument approaches in the preceding 6 months to exercise instrument rating privileges. If currency lapses, a proficiency check with an authorised examiner is required. Actual IMC approaches, simulated approaches with safety pilot, and simulator approaches all qualify.',
  reference: 'CASR Part 61'
},

{
  question: 'An IFR approach at a circling-only aerodrome (no straight-in minima) requires the pilot to:',
  options: [
    'A. Fly the instrument approach to MDA then land straight ahead only if the destination TAF covers the arrival window',
    'B. Request special approach minima from ATC only if the destination TAF covers the arrival window',
    'C. Circling-only approaches are not available in Australia only if the destination TAF covers the arrival window',
    'D. Fly the instrument approach to circling MDA maintaining visual contact with the aerodrome, manoeuvre visually to position for landing on the appropriate runway'
  ],
  correct: 3,
  explanation: 'Circling-only approach: the instrument procedure aligns with no runway. The pilot descends to circling MDA, acquires the aerodrome visually, manoeuvres within the circling area (radius depends on category), and lands. Visual contact must be maintained throughout. If contact is lost: immediate missed approach.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When ATC advises "expect the ILS approach, runway 34" during descent planning, the pilot should:',
  options: [
    'A. Brief the ILS RWY 34 approach during the descent while workload is manageable',
    'B. Delay briefing until the final clearance is issued only if the destination TAF covers the arrival window',
    'C. Only brief the approach at the outer marker only if the destination TAF covers the arrival window',
    'D. The approach brief is ATC\ only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: '"Expect ILS 34": brief the approach now during descent. Load the approach in avionics, review the chart (confirm correct, check altitudes, DA/H, missed approach). When ATC issues the final clearance, confirm it matches the briefed approach. Briefing late (at the IAF or outer marker) creates excessive workload at a critical phase.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR concept of "aviate, navigate, communicate" establishes priority because:',
  options: [
    'A. Aircraft control (aviate) is always the first priority — an uncontrolled aircraft cannot be navigated or communicated from. Navigation second ensures terrain clearance',
    'B. Communication is the most important task in IFR only if the destination TAF covers the arrival window',
    'C. Navigation is always the highest priority in IFR only if the destination TAF covers the arrival window',
    'D. All three priorities are equal in instrument flight only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Aviate-Navigate-Communicate: (1) Aviate — maintain control, correct attitude, safe altitude; (2) Navigate — know where you are, where you\\\'re going, terrain clearance; (3) Communicate — inform ATC, request help. In an emergency, do not let ATC communications distract from aircraft control. A controlled aircraft talking can always be helped; an uncontrolled one cannot.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'Temperature correction for cold weather on instrument approaches is applied because:',
  options: [
    'A. Cold air makes the altimeter read high only if the destination TAF covers the arrival window',
    'B. Temperature correction is only required above FL200 only if the destination TAF covers the arrival window',
    'C. Modern altimeters automatically correct for temperature only if the destination TAF covers the arrival window',
    'D. Cold temperatures make the altimeter read HIGHER than actual altitude — published approach altitudes correspond to lower actual altitudes in very'
  ],
  correct: 3,
  explanation: 'Cold temperature altimeter error: in air colder than ISA, the altimeter reads HIGHER than actual altitude. At very cold temperatures (-20°C, -30°C or below), this error becomes significant. Temperature corrections must be applied to minimum altitudes on approaches when temperature is significantly below ISA.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A "conditional clearance" such as "after the landing Airbus, line up and wait" requires:',
  options: [
    'A. Lining up immediately regardless of the Airbus position only if the destination TAF covers the arrival window',
    'B. Identifying the specified aircraft, ensuring it has touched down and cleared the runway (or the condition is met), then executing the clearance',
    'C. Requesting confirmation before any movement only if the destination TAF covers the arrival window',
    'D. Conditional clearances are not used in Australian operations only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Conditional clearance: do not act until the stated condition is met. Must: (1) identify the referenced aircraft visually; (2) confirm the condition is satisfied; (3) then execute. If the condition cannot be confirmed: query ATC before moving. Runway incursions have resulted from pilots misidentifying conditional clearance conditions.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR pilot receiving weather below minima while established on the approach should:',
  options: [
    'A. Continue to DA/H and assess on arrival only if the destination TAF covers the arrival window',
    'B. Descend below DA/H hoping for improvement only if the destination TAF covers the arrival window',
    'C. Continue the descent at a slower rate only if the destination TAF covers the arrival window',
    'D. Execute a missed approach at DA/H if required visual reference is not established'
  ],
  correct: 3,
  explanation: 'Below minima during approach: the approach ban applies at DA/H or MDA/H. If required visual reference is not established at DA/H: immediate go-around. Do not descend further. Reported weather below minima means the approach is unlikely to succeed and below-minima descent risks CFIT.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'The "HAT" (Height Above Touchdown) on an approach chart represents:',
  options: [
    'A. Height above the aerodrome reference point only if the destination TAF covers the arrival window',
    'B. Height above terrain only if the destination TAF covers the arrival window',
    'C. DA/DH or MDA/H expressed as a height above the touchdown zone elevation',
    'D. HAT is the same as field elevation only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'HAT: Height Above Touchdown zone elevation. Published alongside the MSL altitude for DA/DH and MDA. For example: "DA 750 ft (HAT 243 ft)" — the DA is 750 ft MSL which is 243 ft above the touchdown zone. HAT helps pilots understand how much runway they will see at the decision point.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "five Ts" at a fix on an IFR approach are:',
  options: [
    'A. Turn (to appropriate heading), Time (start timer), Twist (OBS to inbound course), Throttle (set approach power), Talk (report if required)',
    'B. Turn, Time, Target, Track, Transmit provided the pilot holds a current medical certificate',
    'C. Terrain, Traffic, Transponder, Track, Time as approved by CASA under current regulations',
    'D. The five Ts are only used in the USA provided the pilot holds a current medical certificate'
  ],
  correct: 0,
  explanation: '5 Ts at each fix: Turn (heading), Time (start timer for outbound leg), Twist (OBS to inbound course), Throttle (set approach power), Talk (report if required). Some add a sixth T: Track (confirm CDI). This structured checklist prevents missing items during the highest workload phase.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An IFR pilot whose autopilot disconnects unexpectedly at low altitude in IMC should:',
  options: [
    'A. Continue looking at the autopilot panel to diagnose the problem and all required documents are carried',
    'B. Disconnect all automation and return to the hold provided weather is above published minima',
    'C. Disengage the autothrottle as well and fly manually with appropriate ATC clearance obtained',
    'D. Immediately take manual control and maintain aircraft attitude and flight path — do not look for the reason until aircraft control is assured'
  ],
  correct: 3,
  explanation: 'Autopilot unexpected disconnect: immediate priority is aircraft control — grip controls, establish and maintain correct attitude, check instruments. Only after control is assured: assess why the autopilot disconnected, decide whether to re-engage or continue manually, advise ATC if required. Distraction during AP disconnect has caused accidents.',
  reference: 'AIP ENR 1.5 / ICAO Human Factors'
},

{
  question: 'The IFR "descent via STAR" instruction requires compliance with:',
  options: [
    'A. Only the final altitude in the clearance only if the destination TAF covers the arrival window',
    'B. Only the speed constraints — altitudes are advisory only if the destination TAF covers the arrival window',
    'C. Constraints only apply if the FMS is in VNAV mode only if the destination TAF covers the arrival window',
    'D. ALL published altitude and speed constraints on the STAR while descending to the cleared altitude'
  ],
  correct: 3,
  explanation: '"Descend via STAR": comply with ALL published altitude AND speed constraints on the STAR while descending to the cleared altitude. The FMS computes a path to meet all constraints. If a constraint cannot be met, advise ATC immediately.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When the ATIS broadcasts "ILS LOC only, glideslope unserviceable," the pilot should:',
  options: [
    'A. Convert to a localiser-only (LOC) non-precision approach using the published LOC minima',
    'B. Fly the ILS approach using normal precision approach minima only if the destination TAF covers the arrival window',
    'C. Cancel the IFR flight plan and land VFR only if the destination TAF covers the arrival window',
    'D. Request radar vectoring to a visual approach only only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ILS with inoperative glide slope (LOC approach): localiser provides lateral guidance only. Published LOC minima apply (typically 300–600 ft higher than ILS). The approach becomes non-precision: track the localiser inbound, descend per the published LOC procedure, level at MDA/H, and execute missed approach if runway environment not sighted at MAP.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "early diversion decision" principle means:',
  options: [
    'A. Always divert before reaching the destination only if the destination TAF covers the arrival window',
    'B. Only divert after the first missed approach only if the destination TAF covers the arrival window',
    'C. Diversion decisions are made by ATC, not the pilot only if the destination TAF covers the arrival window',
    'D. Making the divert decision before fuel becomes critically marginal — diverting from cruise altitude with ample fuel is far safer than a missed'
  ],
  correct: 3,
  explanation: 'Early diversion: plan decision points before departure ("if destination METAR at ETA-30 min shows X, divert"). The earlier the diversion decision, the more fuel available for the alternate approach and contingencies. Late decisions (after missed approach with minimum fuel) severely constrain options and create emergency conditions.',
  reference: 'CASR Part 91 / CASA HF materials'
},

{
  question: 'When an IFR aircraft is given "direct to destination" by ATC, the pilot should:',
  options: [
    'A. Always accept — direct routes save fuel only if the destination TAF covers the arrival window',
    'B. Accept without verification — ATC is responsible for the route only if the destination TAF covers the arrival window',
    'C. Direct routings are never appropriate in IFR operations only if the destination TAF covers the arrival window',
    'D. Verify the direct track is above LSALT, clear of restricted airspace, weather acceptable, and fuel sufficient before accepting'
  ],
  correct: 3,
  explanation: '"Direct to destination": the pilot verifies LSALT for the direct track, restricted airspace, weather, and fuel. ATC may not know the aircraft\\\'s performance, fuel state, or weather avoidance needs. If any issue exists, decline: "Unable direct, request [alternative]." Critical in mountainous terrain.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A VOR approach chart showing "circling MDA 1,200 ft" with a straight-in MDA of 900 ft means:',
  options: [
    'A. The pilot may circle at 900 ft only if the destination TAF covers the arrival window',
    'B. The straight-in approach may descend to 900 ft on the final course — but if a circling manoeuvre is required after the approach, the aircraft must maintain',
    'C. Both minima apply simultaneously only if the destination TAF covers the arrival window',
    'D. The 1,200 ft circling MDA replaces the 900 ft for all operations only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Straight-in vs circling MDA: if the aircraft can track straight to the landing runway on the published approach course (alignment ≤30°), it may descend to the lower straight-in MDA. If a circling manoeuvre is required (runway not aligned), the higher circling MDA applies throughout the manoeuvre. Never descend to straight-in MDA and then circle — use circling MDA from the outset if circling.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'An IFR holding entry "direct" is used when the aircraft arrives at the holding fix:',
  options: [
    'A. From any direction only if the destination TAF covers the arrival window',
    'B. Direct entry is always used regardless of arrival direction only if the destination TAF covers the arrival window',
    'C. From within the sector where flying directly into the hold (turning to the outbound heading) keeps the aircraft within the protected holding area',
    'D. Direct entry is only used in published holding procedures only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Holding entry sectors: at the fix, the pilot selects entry based on arrival direction. Direct entry: arrival within approximately 70° of the outbound heading on the non-holding side. Teardrop entry: arrival within approximately 110° on the non-holding side. Parallel entry: arrival from behind the inbound leg on the holding side. The correct entry keeps the aircraft within the protected area.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "teardrop" holding entry is used when the aircraft arrives at the holding fix:',
  options: [
    'A. From the holding side, roughly from ahead only if the destination TAF covers the arrival window',
    'B. From the non-holding side, at an angle that makes a direct entry unsuitable',
    'C. Teardrop entry is used from any direction if preferred only if the destination TAF covers the arrival window',
    'D. Teardrop only applies to NDB holds only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Teardrop entry: arrival at the fix from the non-holding side at approximately 110° arc. Procedure: cross the fix, fly outbound at heading 30° toward the holding side for 1 minute (approximately), then turn in the same direction as the hold back to intercept the inbound leg. This keeps the aircraft within the protected holding area when a direct entry would overshoot.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "parallel" holding entry is used when the aircraft arrives at the holding fix:',
  options: [
    'A. From the holding side — the aircraft flies outbound parallel to the inbound leg',
    'B. Directly along the inbound track, from behind only if the destination TAF covers the arrival window',
    'C. Parallel entry is used when inbound on the approach only if the destination TAF covers the arrival window',
    'D. Only jets use parallel holding entries only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Parallel entry: arrival from the holding side (roughly behind the outbound leg). Procedure: cross the fix, fly outbound parallel to the inbound leg (but in the opposite direction) for approximately 1 minute, then turn away from the holding side (more than 180°) to intercept the inbound leg. The aircraft stays within the protected area by flying well outside the hold then turning inbound.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Wind correction in a holding pattern is applied to:',
  options: [
    'A. The inbound leg only only if the destination TAF covers the arrival window',
    'B. Both the inbound and outbound legs — on the inbound leg, a WCA is applied to maintain the published inbound track',
    'C. Only the outbound leg timing only if the destination TAF covers the arrival window',
    'D. Wind correction is not required in holding as turns compensate only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Hold wind correction: inbound leg — apply WCA to track the published inbound course. Outbound leg — apply triple the inbound WCA in the opposite direction (to allow for wind during the two turns). Outbound leg timing: adjusted so the inbound leg is approximately 1 minute (below FL140) or 1.5 minutes (above FL140). Achieving the correct inbound leg length confirms the corrections are working.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "SARTIME" for a flight without ATC flight plan monitoring should be:',
  options: [
    'A. Set to departure time only if the destination TAF covers the arrival window',
    'B. SARTIME is optional for short IFR flights only if the destination TAF covers the arrival window',
    'C. SARTIME is always 6 hours regardless of flight duration only if the destination TAF covers the arrival window',
    'D. Set to the estimated arrival time plus a reasonable buffer (e.g. 30 minutes)'
  ],
  correct: 3,
  explanation: 'SARTIME: estimated time of arrival plus a buffer (typically 30–60 min). Too short and normal delays trigger unnecessary SAR; too long and a genuine emergency may not be detected quickly. For IFR on an ATC flight plan: the flight plan itself provides SAR coverage — SARTIME may be included in the flight plan or filed separately with the AFTN.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'On an IFR approach chart, the note "Procedure not authorised when XYZ NDB unserviceable" means:',
  options: [
    'A. The NDB is optional for the approach — it improves accuracy but is not required',
    'B. The approach minima are raised when the NDB is unserviceable but the procedure may still be conducted',
    'C. The XYZ NDB is essential for identifying a critical fix — without it the approach cannot be safely conducted and must not be commenced',
    'D. The restriction only applies to aircraft without GPS equipment on board'
  ],
  correct: 2,
  explanation: 'Navaid required: when an approach chart states the procedure requires a specific navaid, that navaid is critical for the procedure\\\'s obstacle clearance — typically defining a fix that has no other means of identification. Check NOTAM before flight. If the navaid becomes unserviceable during flight: divert to an aerodrome with a serviceable approach.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "minimum off-route altitude" (MORA) on a Jeppesen chart provides:',
  options: [
    'A. The minimum altitude for on-route IFR only if the destination TAF covers the arrival window',
    'B. MORA is not used in Australian operations only if the destination TAF covers the arrival window',
    'C. Obstacle clearance of 1,000 ft (2,000 ft in mountainous terrain) within a grid square when flying off published airways',
    'D. MORA provides the minimum altitude above cloud only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'MORA (Minimum Off-Route Altitude): published in grid squares on Jeppesen charts. Provides clearance above terrain and obstacles within the grid square (1,000 ft non-mountainous, 2,000 ft mountainous). Useful when deviating from airways (weather avoidance). Not identical to Australian LSALT but serves the same purpose. Always use the highest applicable value when off-airways.',
  reference: 'Jeppesen chart legend / AIP ENR 1.1'
},

{
  question: 'Instrument approach procedures are designed assuming the aircraft has:',
  options: [
    'A. All systems fully functional at all times only if the destination TAF covers the arrival window',
    'B. Maximum engine power available throughout only if the destination TAF covers the arrival window',
    'C. Engines operating at normal power, normal manoeuvring capability, and standard performance for the published approach category',
    'D. No performance assumptions are made in procedure design only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach procedure design assumptions: normal aircraft performance for the approach category. A single-engine missed approach changes the climb gradient capability significantly — published missed approach obstacle clearance may not be achievable. For engine-out or abnormal configuration approaches, the pilot should assess performance against published missed approach gradient requirements before commencing.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The VOR/DME "position fix" accuracy depends on:',
  options: [
    'A. The geometry of the radial and DME arc intersection — accuracy is best when the radial and arc cross at approximately 90°',
    'B. Only on VOR signal strength only if the destination TAF covers the arrival window',
    'C. Position fix accuracy is always 0.5 nm regardless of geometry only if the destination TAF covers the arrival window',
    'D. Accuracy depends only on DME distance only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'VOR/DME fix geometry: the intersection of a radial (angular measure from the station) and a DME circle provides a fix. Best accuracy: radial perpendicular to the DME arc (90° crossing). Poor geometry: nearly parallel tracks produce a long, thin error ellipse. For IFR, VOR/DME accuracy is generally adequate at normal ranges, but the geometry principle applies to all intersecting LOPs.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'An IFR flight operating in RVSM (Reduced Vertical Separation Minima) airspace requires:',
  options: [
    'A. Only Mode C transponder only if the destination TAF covers the arrival window',
    'B. Any aircraft may operate in RVSM without special approval only if the destination TAF covers the arrival window',
    'C. RVSM-approved aircraft (with accurate altimeters and autopilot capable of maintaining ±65 ft), RVSM-approved operator, and crew trained in RVSM procedures',
    'D. RVSM airspace does not exist in Australian FIR only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'RVSM (FL290–FL410): 1,000 ft vertical separation between approved aircraft. Requirements: aircraft with two independent altitude measurement systems, automatic altitude-keeping system (autopilot), altitude alerting, and ADS-B or Mode C. The operator and crew must be RVSM approved. Non-RVSM aircraft must be separated by 2,000 ft from all traffic in this band.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A "conditional clearance" from ATC such as "after the landing Airbus, line up and wait" requires the pilot to:',
  options: [
    'A. Identify the specified aircraft (the landing Airbus), ensure it has touched down and is clear of the runway or the condition is met, then line up as instructed',
    'B. Line up immediately regardless of Airbus position only if the destination TAF covers the arrival window',
    'C. Request confirmation before moving only if the destination TAF covers the arrival window',
    'D. Conditional clearances are not used in Australia only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Conditional clearance: do not act until the stated condition is met. Must: (1) identify the referenced aircraft visually; (2) confirm the condition is satisfied (aircraft has landed and cleared, or passed); (3) then execute the clearance. If the condition cannot be confirmed: query ATC before moving. Runway incursions have resulted from pilots misidentifying or ignoring conditional clearance requirements.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The published "departure procedure gradient" on a SID must be achieved by the aircraft because:',
  options: [
    'A. It is a recommendation only only if the destination TAF covers the arrival window',
    'B. Gradients only apply to jet aircraft only if the destination TAF covers the arrival window',
    'C. The gradient provides obstacle clearance on the SID — if the aircraft cannot achieve the published climb gradient',
    'D. The gradient is ATC\ only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'SID climb gradient: the minimum required to maintain obstacle clearance. Standard gradient: 200 ft/nm (3.3%). Higher gradients published where terrain requires. If the aircraft cannot achieve the gradient (weight, temperature, engine out), that SID is not available to the flight. The pilot must advise ATC and arrange an alternative — not attempt to use the SID and hope for the best.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When an IFR pilot is cleared for an approach and the aerodrome goes below minima before the FAF, the correct action is:',
  options: [
    'A. Continue to FAF — conditions may improve only if the destination TAF covers the arrival window',
    'B. Continue to MDA and assess visually only if the destination TAF covers the arrival window',
    'C. Apply the approach ban — do not continue the approach if current conditions are below published minima',
    'D. Declare emergency and continue regardless only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach ban before FAF: if ATC or ATIS advises conditions are below minima, the approach must not be commenced (or continued past the IAF). Notify ATC: "holding for weather improvement" or "request diversion clearance." Monitor fuel carefully. Do not attempt the approach hoping conditions will improve by the time you reach DA/H — if below minima at FAF, they are likely below minima at DA/H too.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'The instrument rating "proficiency check" (IPC) is required when:',
  options: [
    'A. Instrument currency has lapsed — the pilot has not completed 6 approaches (and associated tasks) in the preceding 6 months',
    'B. Every 6 months regardless of currency only if the destination TAF covers the arrival window',
    'C. Only before the annual flight review only if the destination TAF covers the arrival window',
    'D. IPCs are only required for commercial pilots only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IPC (Instrument Proficiency Check): required when instrument currency lapses (less than 6 approaches in 6 months). The check is conducted by an authorised flight examiner (AFE) or authorised testing officer (ATO) and covers the full range of instrument operations — holds, approaches (precision and non-precision), partial panel, emergencies. Passing restores IFR privileges.',
  reference: 'CASR Part 61'
},

{
  question: 'An aircraft "cleared to FL120 via flight planned route" must maintain:',
  options: [
    'A. The exact routing of the filed flight plan and cruise at FL120 — ATC expects the aircraft on that track at that altitude',
    'B. Any altitude up to FL120 only if the destination TAF covers the arrival window',
    'C. FL120 only after top of climb — any altitude during climb only if the destination TAF covers the arrival window',
    'D. The filed route advisory only — pilot selects track only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IFR clearance compliance: the clearance is an instruction, not advice. Maintain the cleared altitude and the filed route unless ATC issues an amended clearance. Deviating (e.g. weather avoidance) without advising ATC breaks the separation agreement. Advise ATC immediately: "request deviation [left/right] of track by [X] miles for weather, estimate rejoining in [X] minutes."',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'The "ATC surveillance" system in Australia includes:',
  options: [
    'A. Primary radar (PSR), secondary surveillance radar (SSR/Mode A/C/S), ADS-B (Automatic Dependent Surveillance-Broadcast), and multilateration',
    'B. Only primary radar only if the destination TAF covers the arrival window',
    'C. Only ADS-B at low altitudes only if the destination TAF covers the arrival window',
    'D. Radar is only available in capital city terminal areas only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Australian surveillance: PSR (primary radar, skin returns); SSR Mode A/C/S (transponder-based, provides identity and altitude); ADS-B (GPS-derived position broadcast by aircraft — Airservices Australia has extensive ground station coverage); multilateration (MLAT, uses transponder signals from multiple receivers). Together these provide surveillance to lower altitudes and more remote areas than radar alone.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An ADS-B equipped IFR aircraft in Australian airspace must:',
  options: [
    'A. Operate ADS-B continuously when operating in specified ADS-B airspace — transmitting GPS-derived position, altitude, track, groundspeed',
    'B. Only activate ADS-B in controlled airspace only if the destination TAF covers the arrival window',
    'C. ADS-B is voluntary for all GA aircraft only if the destination TAF covers the arrival window',
    'D. ADS-B replaces the Mode C transponder requirement only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ADS-B in Australia: mandatory above FL290 (since 2017) and progressively required in lower airspace. ADS-B OUT broadcasts position, altitude, velocity, and identity — no interrogation needed. Provides surveillance in areas without radar. ADS-B IN (receiving traffic) provides airborne situational awareness. The transponder (Mode C/S) still required for non-ADS-B equipped aircraft and as backup.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'A "speed restriction" on an approach chart of "210 kt maximum" before the FAF applies to:',
  options: [
    'A. The published maximum indicated airspeed the aircraft must not exceed in that approach segment — mandatory unless ATC explicitly advises otherwise, ensuring the aircraft remains within the obstacle clearance protected area',
    'B. The aircraft\'s maximum certified manoeuvring speed and applies only to turbulent conditions',
    'C. Only to jet aircraft — piston and turboprop aircraft are exempt from published speed restrictions',
    'D. An advisory target speed only — pilots may exceed it at their discretion'
  ],
  correct: 0,
  explanation: 'Approach speed restrictions: mandatory unless ATC advises otherwise. Published to ensure the aircraft remains within the designed obstacle clearance area for its category and to allow ATC sequencing. Exceeding published speeds may take the aircraft outside the protected area. At the FAF: reduce to final approach speed. If unable to comply: advise ATC.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When executing a missed approach in IMC with a "climbing right turn to 3,000 ft" instruction:',
  options: [
    'A. Turn right first then climb only if the destination TAF covers the arrival window',
    'B. Simultaneously apply go-around power, establish climb attitude, and begin the right turn',
    'C. Climb to 3,000 ft then turn right only if the destination TAF covers the arrival window',
    'D. The turn direction is at pilot\ only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Simultaneous climb and turn: the missed approach procedure is flown exactly as published. "Climbing right turn to 3,000 ft" = right bank applied during the climb. The turn begins immediately. Delaying the turn until reaching altitude may take the aircraft outside the protected area (which assumes the turn starts at the MAP). Follow the published procedure precisely.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The IFR "approach ban" at MDA/H for a non-precision approach means:',
  options: [
    'A. The pilot must not commence the approach only if the destination TAF covers the arrival window',
    'B. The approach ban only applies to CAT II and III approaches only if the destination TAF covers the arrival window',
    'C. Once the aircraft reaches MDA/H without the required visual reference, the missed approach must be executed',
    'D. The approach ban allows a 100 ft descent below MDA/H only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'MDA/H approach ban: at MDA/H on a non-precision approach, if the required visual reference is not established, execute the missed approach IMMEDIATELY. Do not hover at MDA hoping for better visibility. Do not descend further. The MDA exists because descending lower risks obstacle contact. The missed approach is the ONLY safe option.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'Which statement about IFR flight in Class G airspace is correct?',
  options: [
    'A. IFR flight in Class G is uncontrolled — no ATC service is provided, no separation exists',
    'B. IFR flight in Class G provides ATC separation from all traffic only if the destination TAF covers the arrival window',
    'C. Class G only exists below 1,000 ft AGL only if the destination TAF covers the arrival window',
    'D. VFR pilots must remain clear of IFR aircraft in Class G only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Class G IFR: legal but uncontrolled. Requirements: IREX/instrument rating, IFR equipped aircraft, filed flight plan (activates SAR coverage), operating at LSALT or above. ATC provides no service — no radar, no separation, no terrain warnings. Self-announce on appropriate frequency. This is one of the highest-risk operating environments for IFR pilots in Australia.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'A GNSS approach "LPV" (Localiser Performance with Vertical guidance) provides:',
  options: [
    'A. The same minima as a standard ILS only if the destination TAF covers the arrival window',
    'B. LPV is only available on military aircraft only if the destination TAF covers the arrival window',
    'C. SBAS-augmented GNSS lateral and vertical guidance with performance approaching CAT I ILS',
    'D. LPV approaches use ILS glide slope combined with GPS lateral only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'LPV (Localiser Performance with Vertical guidance): uses SBAS (Satellite Based Augmentation System — in Australia this is the SBAS trial system) to provide highly accurate lateral and vertical guidance. With sufficient SBAS coverage, LPV minima can be as low as CAT I ILS (200 ft DA, RVR 550 m). The aircraft must have SBAS-capable avionics and the approach must be listed as LPV in the database.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "parallel" holding entry is used when arriving at the fix from:',
  options: [
    'A. Directly along the inbound track, from behind when the aircraft has a valid maintenance release',
    'B. Parallel entry is used when inbound on the approach provided weather is above published minima',
    'C. Only jets use parallel holding entries provided the pilot holds a current medical certificate',
    'D. The holding side — the aircraft flies outbound parallel to the inbound leg then turns away from the holding side to intercept the inbound track'
  ],
  correct: 3,
  explanation: 'Parallel entry: arrival from the holding side (roughly behind the outbound leg). Procedure: cross the fix, fly outbound parallel to the inbound leg for approximately 1 minute, then turn away from the holding side to intercept the inbound leg. The aircraft stays within the protected area.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A "teardrop" holding entry is used when arriving at the fix from:',
  options: [
    'A. The holding side, roughly from ahead only if the destination TAF covers the arrival window',
    'B. Teardrop entry is used from any direction if preferred only if the destination TAF covers the arrival window',
    'C. Teardrop only applies to NDB holds only if the destination TAF covers the arrival window',
    'D. The non-holding side, at an angle that makes a direct entry unsuitable — the aircraft flies a brief outbound leg angled 30° toward the holding side,'
  ],
  correct: 3,
  explanation: 'Teardrop entry: arrival at the fix from the non-holding side at approximately 110° arc. Procedure: cross the fix, fly outbound at heading 30° toward the holding side for 1 minute, then turn in the same direction as the hold back to intercept the inbound leg.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A "no-gyro approach" is requested when:',
  options: [
    'A. The aircraft has no GPS only if the destination TAF covers the arrival window',
    'B. No-gyro approaches are only conducted in simulators only if the destination TAF covers the arrival window',
    'C. The directional gyro (heading indicator) has failed — ATC provides turn commands ("turn left/right") instead of specific headings',
    'D. A no-gyro approach uses NDB only only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'No-gyro approach: if the heading indicator fails in IMC, the pilot requests a no-gyro approach. ATC watches the radar return and issues "turn left/right" and "stop turn" commands. The pilot uses the turn coordinator to maintain standard rate turns. A workable emergency procedure.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The "fly-by" waypoint differs from a "fly-over" waypoint in that:',
  options: [
    'A. At a fly-by waypoint the aircraft begins the turn before reaching the waypoint to anticipate the track change',
    'B. Fly-by and fly-over waypoints are identical only if the destination TAF covers the arrival window',
    'C. Fly-by waypoints are only used on STARs only if the destination TAF covers the arrival window',
    'D. Fly-over waypoints require ATC permission only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Fly-by (open symbol): turn begins before the waypoint — the FMS calculates a lead turn to smoothly transition to the next leg. Fly-over (circled symbol): must cross the waypoint before turning — required where obstacle clearance mandates crossing the fix. An incorrect early turn at a fly-over waypoint violates obstacle clearance.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'An RVSM-approved aircraft operating at FL350 with 1,000 ft separation from adjacent traffic is:',
  options: [
    'A. Operating with insufficient separation only if the destination TAF covers the arrival window',
    'B. RVSM does not apply above FL310 only if the destination TAF covers the arrival window',
    'C. 1,000 ft at FL350 requires special ATC clearance each time only if the destination TAF covers the arrival window',
    'D. Operating correctly — RVSM (Reduced Vertical Separation Minima) permits 1,000 ft separation between FL290 and FL410 for approved aircraft and operators,'
  ],
  correct: 3,
  explanation: 'RVSM: 1,000 ft vertical separation between FL290 and FL410 for RVSM-approved aircraft. Before RVSM, 2,000 ft separation was required above FL290 — halving the available flight levels. RVSM approval requires: aircraft with precise altimetry, altitude-keeping autopilot, RVSM-approved operator, and trained crew.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'When ATC issues "speed 250 kt by 10 DME" on an approach, the pilot must:',
  options: [
    'A. Be established at 250 kt by the time the aircraft reaches 10 DME from the named station — complying with the speed constraint at the specified position',
    'B. Slow to 250 kt before reaching 10 DME from the station when the aircraft has a valid maintenance release',
    'C. Slow to 250 kt after passing 10 DME only if the destination TAF covers the arrival window',
    'D. 250 kt by 10 DME is advisory only only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'Speed constraint by position: "speed 250 kt by 10 DME" — the aircraft must be at 250 kt when passing 10 DME. Plan the deceleration to achieve the speed before the fix, not at it. ATC uses these constraints for sequencing. If unable to comply, advise ATC immediately.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The IFR "en-route alternate" (ERA) differs from the destination alternate because:',
  options: [
    'A. An ERA is nominated for en-route emergencies — a suitable aerodrome accessible from along the route if diversion is required before destination',
    'B. ERA is only required for oceanic flights only if the destination TAF covers the arrival window',
    'C. ERA and destination alternate are the same thing only if the destination TAF covers the arrival window',
    'D. ERA is only required for turbojet aircraft only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'ERA (En-Route Alternate): an aerodrome planned along or near the route where the aircraft could divert if an emergency requires immediate landing before destination. Used in ETOPS planning and remote area operations. Must be within a specified distance/time of the route and have suitable facilities and forecast conditions.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'When a SID contains "climb via SID to FL100," it means:',
  options: [
    'A. Climb to 1,000 ft and wait for further clearance only if the destination TAF covers the arrival window',
    'B. Follow the lateral route of the SID and ALL published altitude and speed constraints while climbing to FL100',
    'C. Climb directly to FL100 without following the SID route only if the destination TAF covers the arrival window',
    'D. Only the altitude constraint at the end of the SID applies only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: '"Climb via SID": comply with ALL published altitude constraints (AT, AT OR ABOVE, AT OR BELOW) and speed restrictions on the SID while climbing to the cleared altitude. This is different from "climb to FL100, proceed direct" — via SID means follow the procedure exactly.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An IFR flight plan "overdue aircraft" procedure is initiated when:',
  options: [
    'A. The aircraft is 5 minutes late to destination only if the destination TAF covers the arrival window',
    'B. The aircraft has not arrived or made contact within the specified time after ETA',
    'C. Only when the pilot has not filed a flight plan only if the destination TAF covers the arrival window',
    'D. Overdue procedures only apply to VFR flights only if the destination TAF covers the arrival window'
  ],
  correct: 1,
  explanation: 'Overdue aircraft: if the aircraft does not arrive or cancel by ETA + tolerance (typically 30 min), ATC/JRCC initiates: uncertainty phase, alert phase, distress phase (SAR mobilisation). Always cancel on arrival.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'A GNSS integrity failure alert during an approach requires:',
  options: [
    'A. Continue the approach monitoring the alert only if the destination TAF covers the arrival window',
    'B. Only discontinue if the alert persists for more than 30 seconds only if the destination TAF covers the arrival window',
    'C. Request ATC radar guidance and continue only if the destination TAF covers the arrival window',
    'D. Immediately execute the missed approach — a GNSS integrity alert means the navigation solution cannot be trusted'
  ],
  correct: 3,
  explanation: 'GNSS integrity alert: immediate missed approach. An integrity alert means GPS position may have an error exceeding approach tolerances. Published minima assume GPS is within RAIM limits. Continuing with a GNSS integrity warning risks flying into terrain. Advise ATC and use alternate approach/navaid.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The IFR "proficiency check" (IPC) is required when:',
  options: [
    'A. Instrument currency has lapsed — the pilot has not completed 6 approaches in the preceding 6 months',
    'B. Every 6 months regardless of currency only if the destination TAF covers the arrival window',
    'C. Only before the annual flight review only if the destination TAF covers the arrival window',
    'D. IPCs are only required for commercial pilots only if the destination TAF covers the arrival window'
  ],
  correct: 0,
  explanation: 'IPC required when instrument currency lapses (less than 6 approaches in 6 months). The check is conducted by an authorised flight examiner covering the full range of instrument operations — holds, approaches (precision and non-precision), partial panel, emergencies. Passing restores IFR privileges.',
  reference: 'CASR Part 61'
},

{
  question: 'A "contact approach" may be requested by the pilot when:',
  options: [
    'A. The pilot can remain clear of cloud with at least 1 SM flight visibility and reasonably expects to continue to the aerodrome — it is an alternative to the IFR procedure at pilot request with ATC approval',
    'B. Weather is below VFR minima and the pilot needs special authorisation to land',
    'C. Only when the published instrument approach is unserviceable or not available',
    'D. ATC assigns a contact approach when radar coverage is unavailable'
  ],
  correct: 0,
  explanation: 'Contact approach: pilot-initiated when clear of cloud with ≥1 SM visibility and expects to continue. ATC separates the aircraft from other IFR traffic. Pilot is responsible for terrain and obstacle clearance. Advantage: may allow lower and more direct approach than published procedure.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'Instrument approach procedures are designed assuming the aircraft:',
  options: [
    'A. Has all systems fully functional only if the destination TAF covers the arrival window',
    'B. Has maximum engine power throughout only if the destination TAF covers the arrival window',
    'C. Has engines operating at normal power and standard performance for the published approach category',
    'D. No performance assumptions are made in procedure design only if the destination TAF covers the arrival window'
  ],
  correct: 2,
  explanation: 'Approach procedure design assumptions: normal aircraft performance for the approach category. A single-engine missed approach changes climb gradient capability significantly — published missed approach obstacle clearance may not be achievable. Assess performance against published missed approach gradient requirements before commencing in abnormal configuration.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

]
