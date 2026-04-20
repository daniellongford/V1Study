export const clwaQuestions = [

{
  question: 'Under Part 91 MOS Table 19.02(2), what is the final reserve fuel requirement for a piston-engine aeroplane with MTOW ≤ 5,700 kg on a VFR day flight?',
  options: [
    'A. 45 minutes at normal cruise power',
    'B. 30 minutes at normal cruise power',
    'C. 20 minutes at holding speed at 1,500 ft',
    'D. 45 minutes at holding speed at 1,500 ft'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 19.02(2) Item 1: for an aeroplane with MTOW ≤ 5,700 kg (piston or turboprop) operating VFR, the final reserve fuel flight time is 30 minutes. Night VFR (Item 2) and IFR (Item 3) require 45 minutes.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(2) Item 1'
},

{
  question: 'A piston-engine aeroplane with MTOW ≤ 5,700 kg is planning a night VFR flight. What is the minimum final reserve fuel required under Part 91 MOS?',
  options: [
    'A. 30 minutes',
    'B. 20 minutes',
    'C. 45 minutes',
    'D. 60 minutes'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 19.02(2) Item 2: for a piston or turboprop aeroplane with MTOW ≤ 5,700 kg on a night VFR flight, the final reserve fuel flight time is 45 minutes. This is more than the 30 minutes required for day VFR.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(2) Item 2'
},

{
  question: 'A turbojet aeroplane is conducting an IFR flight. Under Part 91 MOS Table 19.02(2), what final reserve fuel is required and is contingency fuel applicable?',
  options: [
    'A. 45 minutes final reserve; no contingency fuel',
    'B. 30 minutes final reserve; 5% of trip fuel contingency',
    'C. 30 minutes final reserve; no contingency fuel',
    'D. 45 minutes final reserve; 5% of trip fuel contingency'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 19.02(2) Item 4: for a turbojet aeroplane IFR or VFR, the final reserve is 30 minutes and contingency fuel is 5% of trip fuel. Piston aircraft ≤ 5,700 kg have no contingency fuel requirement.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(2) Item 4'
},

{
  question: 'At what point during a flight must a pilot in command declare a "minimum fuel" state to ATS under Part 91 MOS?',
  options: [
    'A. When fuel remaining equals the final reserve fuel',
    'B. When committed to land at a specific aerodrome and any change to the existing ATC clearance would result in landing with less than final reserve fuel',
    'C. When fuel remaining falls below 30 minutes',
    'D. As soon as the aircraft diverts from the planned route'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.19.06(3): the pilot must declare "minimum fuel" when committed to land at an aerodrome and determines that any change to the existing ATC clearance would result in landing with less than the final reserve fuel. This is not an emergency declaration — it informs ATS that further delays could lead to an emergency.',
  reference: 'Part 91 MOS 2020 s.19.06(3)'
},

{
  question: 'When must a pilot declare "MAYDAY MAYDAY MAYDAY FUEL" under Part 91 MOS?',
  options: [
    'A. When fuel remaining equals the final reserve fuel',
    'B. When fuel remaining is less than 45 minutes',
    'C. When the fuel remaining on landing at the nearest aerodrome where a safe landing can be made will be, or is likely to be, less than the final reserve fuel',
    'D. Any time the aircraft diverts due to weather'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.19.06(4): the pilot must declare "MAYDAY MAYDAY MAYDAY FUEL" when the usable fuel remaining on landing at the nearest aerodrome where a safe landing can be made will be, or is likely to be, less than the final reserve fuel. This is a distress message.',
  reference: 'Part 91 MOS 2020 s.19.06(4)'
},

{
  question: 'Which of the following items must be included in the fuel carried when a flight commences, under Part 91 MOS s.19.04(1)?',
  options: [
    'A. Trip fuel, alternate fuel and final reserve only',
    'B. Taxi fuel, trip fuel, destination alternate fuel (if required), holding fuel (if required), contingency fuel (if applicable), final reserve fuel, and additional fuel (if applicable)',
    'C. Trip fuel and 45 minutes reserve for all flights',
    'D. Trip fuel, final reserve and 10% contingency for all operations'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.19.04(1)(a)–(g) lists all required fuel components: taxi fuel, trip fuel, destination alternate fuel (if required), holding fuel (if required), contingency fuel (if applicable), final reserve fuel, and additional fuel (if applicable). All components must be present at the commencement of flight.',
  reference: 'Part 91 MOS 2020 s.19.04(1)(a)–(g)'
},

{
  question: 'Under Part 91 MOS, how frequently must the pilot monitor fuel during a flight?',
  options: [
    'A. At the top of climb only',
    'B. Every 30 minutes',
    'C. At regular intervals throughout the flight, comparing planned versus actual consumption and determining remaining fuel',
    'D. Fuel monitoring is at the pilot\'s discretion for VFR flights'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.19.05(2): the pilot in command must check fuel at regular intervals throughout the flight, comparing planned with actual consumption, determining remaining fuel, and determining whether fuel remaining is sufficient to satisfy the requirements of s.19.04.',
  reference: 'Part 91 MOS 2020 s.19.05(2)'
},

{
  question: 'Under Part 91 MOS Table 2.07(3), what are the VMC criteria for an aeroplane operating in Class G airspace at 5,500 ft AMSL (above 3,000 ft AMSL) by day?',
  options: [
    'A. 1,500 m visibility; clear of cloud',
    'B. 3,000 m visibility; 500 ft below cloud; 600 m horizontally',
    'C. 5,000 m visibility; 1,000 ft above and below cloud; 1,500 m horizontally',
    'D. 8,000 m visibility; 1,000 ft above and below cloud; 1 NM horizontally'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.07(3): for aeroplanes in Class G airspace above 3,000 ft AMSL (or above 1,000 ft AGL, whichever is higher), the VMC criteria are 5,000 m flight visibility, 1,000 ft above cloud, 1,000 ft below cloud, and 1,500 m (not 1 NM) horizontally. Note: 1,500 m horizontal is specified in the MOS table.',
  reference: 'Part 91 MOS 2020 s.2.07 Table 2.07(3)'
},

{
  question: 'An aeroplane is operating in Class G airspace below 3,000 ft AMSL and below 1,000 ft AGL. What is the minimum flight visibility under Part 91 MOS Table 2.07(3) for day VFR?',
  options: [
    'A. 5,000 m; 1,000 ft vertical cloud clearance',
    'B. 800 m; clear of cloud',
    'C. 1,500 m; clear of cloud',
    'D. 3,000 m; 500 ft below cloud'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.07(3): for aeroplanes in Class G airspace at or below 3,000 ft AMSL and at or below 1,000 ft AGL by day, the VMC criteria are 1,500 m flight visibility and clear of cloud.',
  reference: 'Part 91 MOS 2020 s.2.07 Table 2.07(3)'
},

{
  question: 'What is the maximum indicated airspeed for VFR flight in Class C airspace below 10,000 ft AMSL under Part 91 MOS?',
  options: [
    'A. 200 kt',
    'B. 300 kt',
    'C. 250 kt',
    'D. No speed limit applies to VFR in Class C'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 4.02(1) Item 1: for Class C airspace VFR, the maximum indicated airspeed below 10,000 ft AMSL is 250 kt.',
  reference: 'Part 91 MOS 2020 s.4.02 Table 4.02(1) Item 1'
},

{
  question: 'Under Part 91 MOS s.2.01, to operate under a special VFR clearance within a control zone, the pilot must maintain at least what flight visibility?',
  options: [
    'A. 1,500 m',
    'B. 800 m',
    'C. As specified in the ERSA entry for the aerodrome',
    'D. The applicable VMC criteria for the class of airspace'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.2.01(3)(d): to operate under special VFR, the pilot must maintain flight visibility of at least 1,500 m (or as further specified in the section), and must be clear of cloud, operating by day, and authorised by ATC.',
  reference: 'Part 91 MOS 2020 s.2.01(3)'
},

{
  question: 'A VFR flight is planned in Class D airspace. Is an ATC clearance required before entry?',
  options: [
    'A. No — VFR aircraft need clearance only for Class A and C',
    'B. Yes — all flights in Class D airspace require an ATC clearance before entry',
    'C. Only if the VFR flight is at night',
    'D. Only if the aircraft is above MTOW 5,700 kg'
  ],
  correct: 1,
  explanation: 'CASR Part 91 and AIP ENR 1.4: Class D airspace requires ATC clearance for all flights (VFR and IFR). Class D differs from Class G (uncontrolled) where no clearance is required, and from Class E where VFR aircraft require only a radio and may enter without clearance.',
  reference: 'CASR Part 91 / AIP ENR 1.4'
},

{
  question: 'Under Part 91 MOS s.21.01, which frequencies require a radio qualification to use?',
  options: [
    'A. Any aeronautical frequency above 118 MHz',
    'B. The CTAF for a non-controlled aerodrome, and the frequency for a mandatory broadcast area (MBA)',
    'C. The aeronautical emergency frequency 121.5 MHz only',
    'D. All aeronautical frequencies require qualification'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.21.01: the kinds of radio frequencies that require a radio qualification (under CASR s.91.625(1)(a)(iv)) are the CTAF for a non-controlled aerodrome and the frequency for an MBA.',
  reference: 'Part 91 MOS 2020 s.21.01'
},

{
  question: 'Under Part 91 MOS s.11.10A, which mandatory broadcast area (MBA) has NIL additional requirements beyond the standard MBA procedures?',
  options: [
    'A. Ballina/Byron Gateway MBA',
    'B. Ayers Rock MBA',
    'C. Port Hedland MBA',
    'D. Both Ayers Rock and Port Hedland MBAs'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 11.10A(3): both Ayers Rock MBA (Item 1) and Port Hedland MBA (Item 3) have NIL additional requirements. Ballina/Byron Gateway MBA (Item 2) has specific requirements when SFIS is active.',
  reference: 'Part 91 MOS 2020 s.11.10A Table 11.10A(3)'
},

{
  question: 'An aircraft in Class G airspace has its radio fail during flight. Under Part 91 MOS s.11.10, what action is required?',
  options: [
    'A. Squawk 7700 and continue to destination',
    'B. Land immediately at the nearest aerodrome',
    'C. Select code 7600; remain outside controlled airspace; assume broadcasting and broadcast position and intentions on the frequency appropriate to the area; as soon as practicable descend below 3,000 ft AGL over land',
    'D. Squawk 7600 and continue to the filed destination'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.11.10(2)(a): if operating VFR in Class G or E airspace with radio failure — select 7600 on transponder; remain outside controlled airspace; assume broadcasting and broadcast on appropriate frequency; as soon as practicable, descend below 3,000 ft AGL over land (see s.11.10(2)(a)(iv)).',
  reference: 'Part 91 MOS 2020 s.11.10(2)(a)'
},

{
  question: 'Under Part 91 MOS s.21.09 Table 21.09(1), what broadcast must be made before or immediately after entering an MBA?',
  options: [
    'A. Aircraft callsign, altitude and destination',
    'B. The pilot\'s intended use of the MBA',
    'C. Aircraft registration and fuel state',
    'D. Estimated time for transit of the MBA'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.09(1) Item 1: when entering an MBA, the broadcast must state the pilot\'s intended use of the MBA. This allows other traffic to build a picture of the intended operation.',
  reference: 'Part 91 MOS 2020 s.21.09 Table 21.09(1) Item 1'
},

{
  question: 'When is a VFR aircraft in Class E or G airspace required to make a report to ATS under Part 91 MOS s.21.07?',
  options: [
    'A. Every 30 minutes on the en-route frequency',
    'B. When requiring a clearance into controlled airspace, and before and on completion of an over-water stage (if SAR reporting schedules are arranged)',
    'C. At each waypoint regardless of airspace class',
    'D. VFR aircraft in Class G have no mandatory ATS reporting obligations'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.07(1): VFR aircraft in Classes E and G must report when requiring clearance into controlled airspace (Item 1), and before and on completion of an over-water stage if SAR reporting schedules have been arranged (Item 2).',
  reference: 'Part 91 MOS 2020 s.21.07 Table 21.07(1)'
},

{
  question: 'Under Part 91 MOS Table 26.69(7), what Mode A code should a VFR aircraft squawk in Class E or Class G airspace when no specific code has been assigned?',
  options: [
    'A. 3000',
    'B. 7000',
    'C. 1200',
    'D. 2000'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 26.69(7) Item 3: VFR flights in Class E or Class G airspace squawk Mode A code 1200. Code 3000 is for Class A/B/C/D or IFR in Class E. Code 2000 is for IFR in Class G.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 3'
},

{
  question: 'A pilot declares an in-flight emergency. Unless otherwise instructed by ATC, which transponder code should be selected?',
  options: [
    'A. 7600',
    'B. 7500',
    'C. 7700',
    'D. 2000'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 26.69(7A) Item 3: for an in-flight emergency (unless otherwise instructed by ATC), the Mode A code is 7700. Code 7600 is for radio failure. Code 7500 is for unlawful interference.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7A) Item 3'
},

{
  question: 'Under Part 91 MOS Table 26.69(7), what transponder code applies to IFR flights in Class G airspace?',
  options: [
    'A. 7000',
    'B. 1200',
    'C. 3000',
    'D. 2000'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 26.69(7) Item 2: IFR flights in Class G airspace squawk 2000. Flights in Class A/B/C/D or IFR in Class E squawk 3000 (Item 1). VFR in Class E or G squawk 1200 (Item 3).',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 2'
},

{
  question: 'A pilot has inadvertently penetrated controlled airspace without a clearance and is now re-established in Class G. The radio is still functioning. What transponder code should the pilot select?',
  options: [
    'A. 7700 — to indicate an emergency',
    'B. 7600 — radio failure code',
    'C. 1200 — the standard VFR code for Class G',
    'D. 3000 — as the flight was recently in controlled airspace'
  ],
  correct: 2,
  explanation: 'Now established in Class G VFR with a functioning radio, the correct code is 1200 per Part 91 MOS Table 26.69(7) Item 3. The pilot should immediately contact ATC to report the airspace infringement. 7700 would be inappropriate as this is not a safety emergency caused by the aircraft.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 3 / AIP ENR 1.6'
},

{
  question: 'Under Part 91 MOS s.26.06(1), which instruments are required for an aeroplane conducting a VFR flight by day?',
  options: [
    'A. Airspeed indicator, altimeter, compass, clock — plus attitude and vertical speed indicators',
    'B. Indicated airspeed, pressure altitude, magnetic heading, and time — plus Mach number if applicable, and turn/slip and OAT if aerial work',
    'C. Airspeed indicator, altimeter, compass only',
    'D. Full six-pack regardless of flight rules or operation type'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.06(1): an aeroplane for VFR day flight must display indicated airspeed, pressure altitude, magnetic heading, and time. Mach number only if operating limits are Mach-expressed. Turn and slip only for aerial work. OAT only for aerial work from aerodromes where ambient temperature is not available from ground instruments.',
  reference: 'Part 91 MOS 2020 s.26.06(1)(a)–(g)'
},

{
  question: 'Under Part 91 MOS s.26.25(1), which aircraft must be fitted with altitude alerting equipment for an IFR flight?',
  options: [
    'A. All aircraft regardless of engine type or pressure altitude',
    'B. Only turbine aircraft above FL290',
    'C. Piston aircraft in controlled airspace above FL150; unpressurised turbine aircraft in controlled airspace above FL150; and pressurised turbine aircraft in any controlled airspace',
    'D. Only aircraft with MTOW above 5,700 kg'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.25(1): altitude alerting equipment is required for: (a) piston aircraft in controlled airspace above FL150; (b) unpressurised turbine aircraft in controlled airspace above FL150; (c) pressurised turbine aircraft in any controlled airspace.',
  reference: 'Part 91 MOS 2020 s.26.25(1)(a)–(c)'
},

{
  question: 'Under Part 91 MOS s.26.31, which aeroplanes must be fitted with a Flight Data Recorder (FDR)?',
  options: [
    'A. All aeroplanes certificated after 1960',
    'B. All aeroplanes with MTOW above 5,700 kg',
    'C. Aeroplanes with MTOW above 5,700 kg that are turbine powered, or first certificated on or after 1 July 1965',
    'D. Only scheduled RPT aeroplanes with more than 19 seats'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.31: one FDR must be fitted to an aeroplane with MTOW more than 5,700 kg that is turbine powered, or is of a type first certificated in its country of manufacture on or after 1 July 1965.',
  reference: 'Part 91 MOS 2020 s.26.31'
},

{
  question: 'Under Part 91 MOS s.26.48, what ELT requirements apply to most domestic aeroplane flights?',
  options: [
    'A. No ELT is required for VFR flights under 5,700 kg',
    'B. An automatic ELT must be fitted, or at least one survival ELT must be carried',
    'C. Two survival ELTs must be carried on all flights',
    'D. An ELT is only required if the flight is over water'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.48(1)(a): for flights not involving more than one life raft, the aircraft must either be fitted with an automatic ELT, or carry at least one survival ELT.',
  reference: 'Part 91 MOS 2020 s.26.48(1)(a)'
},

{
  question: 'Under Part 91 MOS s.26.18(1), what radiocommunication capability must an aircraft have for flight in Australian airspace?',
  options: [
    'A. Only a receive-only capability is required',
    'B. Equipment enabling 2-way voice communications and communication on the aeronautical emergency frequency 121.5 MHz',
    'C. A Mode S transponder with ADSB capability',
    'D. HF radio for all flights beyond 100 NM from the departure aerodrome'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.18(1): an aircraft must have equipment capable of 2-way voice communications and of communicating on the aeronautical emergency frequency 121.5 MHz.',
  reference: 'Part 91 MOS 2020 s.26.18(1)'
},

{
  question: 'Under Part 91 MOS s.26.18(2), is a VFR aircraft required to carry radio for day flight in Class G airspace at or below 5,000 ft AMSL?',
  options: [
    'A. Yes — radio is always required in Australian airspace',
    'B. No — a VFR aircraft in Class G at or below 5,000 ft AMSL by day is not required to comply with the radio fitment requirement, unless operating under certain VMC criteria or within/intending to enter an MBA',
    'C. Only if the flight exceeds 25 NM from the departure aerodrome',
    'D. Radio is only required for IFR flights'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.18(2): a VFR aircraft in Class G airspace at or below 5,000 ft AMSL is not required to comply with s.26.18(1) (radio requirement). Exceptions under s.26.18(3)–(4): if operating under VMC criteria at Table 2.07(3) items 4–6, or operating within or intending to enter an MBA.',
  reference: 'Part 91 MOS 2020 s.26.18(2)–(4)'
},

{
  question: 'Under Part 91 MOS Table 2.04(1), what does a steady red light from the control tower mean to an aircraft in flight?',
  options: [
    'A. Clear to land',
    'B. Return for landing',
    'C. Give way to other aircraft and continue circling',
    'D. Aerodrome unsafe — do not land'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.04(1) Item 2: a steady red light directed at an aircraft in flight means "give way to other aircraft and continue circling." On the ground it means "stop."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 2'
},

{
  question: 'Under Part 91 MOS Table 2.04(1), a series of green flashes is directed at an aircraft in flight. What does this signal mean?',
  options: [
    'A. Cleared to land',
    'B. Return for landing',
    'C. Aerodrome unsafe',
    'D. Exercise extreme caution'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.04(1) Item 3: green flashes to an aircraft in flight means "return for landing." On the ground it means "authorised to taxi (if pilot satisfied no collision risk exists)."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 3'
},

{
  question: 'Under Part 91 MOS Table 2.04(1), a steady green light from the tower is directed at an aircraft in flight. What does this signal mean?',
  options: [
    'A. Cleared to take-off',
    'B. Return for landing immediately',
    'C. Authorised to land if pilot satisfied no collision risk exists',
    'D. Continue circling'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.04(1) Item 1: a steady green light to an aircraft in flight means "authorised to land if pilot satisfied no collision risk exists." On the ground it means "authorised to take-off if pilot satisfied no collision risk exists."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 1'
},

{
  question: 'Red flashes are directed at an aircraft in flight from the control tower. What does this signal mean under Part 91 MOS?',
  options: [
    'A. Give way and continue circling',
    'B. Aerodrome unsafe — do not land',
    'C. Return for landing immediately',
    'D. Cleared to land'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.04(1) Item 4: red flashes directed at an aircraft in flight means "aerodrome unsafe — do not land." On the ground it means "taxi clear of the landing area in use."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 4'
},

{
  question: 'What do white flashes from the control tower mean to an aircraft in flight under Part 91 MOS Table 2.04(1)?',
  options: [
    'A. Land immediately — priority approach authorised',
    'B. No significance — meaning only applies to aircraft on the ground',
    'C. Return to starting point on aerodrome',
    'D. Aircraft is cleared for immediate departure'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.04(1) Item 5: white flashes directed at an aircraft in flight have no significance. On the ground, white flashes mean "return to starting point on aerodrome."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 5'
},

{
  question: 'Under Part 91 MOS Table 2.09(1), what is the correct IFR cruising level for a flight tracking 095° (M) (eastbound) between 9,000 ft and FL110?',
  options: [
    'A. 9,000 ft',
    'B. 10,000 ft',
    'C. 9,500 ft',
    'D. FL100'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 2.09(1): eastbound tracks (000° clockwise to 179°) IFR cruising levels include 9,000 ft (no IFR level between 9,000 ft and FL110 at the transition point). Track 095° is eastbound, so 9,000 ft is the correct IFR level in this band.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'An aircraft is conducting VFR flight on a track of 265°M at approximately 7,000 ft. Under Part 91 MOS Table 2.09(1), what VFR cruising level should be used?',
  options: [
    'A. 7,000 ft',
    'B. 7,500 ft',
    'C. 6,500 ft',
    'D. 8,500 ft'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.09(1): westbound tracks (180° clockwise to 359°) VFR cruising levels include 2,500 ft, 4,500 ft, 6,500 ft, 8,500 ft. Track 265°M is westbound, so at approximately 7,000 ft the correct VFR level is 6,500 ft.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'Under Part 91 MOS Table 2.09(1), what VFR cruising level applies for an eastbound track at approximately 5,000 ft?',
  options: [
    'A. 4,500 ft',
    'B. 5,000 ft',
    'C. 5,500 ft',
    'D. 6,500 ft'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.09(1): eastbound VFR levels (tracks 000°–179°) at the 5,000 ft band = 5,500 ft. Eastbound VFR: 1,500; 3,500; 5,500; 7,500; 9,500 ft.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'Under Part 91 MOS s.9.02(1), which flights must have a flight plan submitted?',
  options: [
    'A. All flights in Australian airspace regardless of rules',
    'B. IFR flights and VFR flights in Class C or Class D airspace',
    'C. Only RPT operations and charter flights',
    'D. Flights exceeding 250 NM only'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.9.02(1): a flight plan must be submitted for (a) an IFR flight; or (b) a VFR flight in Class C or Class D airspace.',
  reference: 'Part 91 MOS 2020 s.9.02(1)'
},

{
  question: 'Under Part 91 MOS s.9.02(2), which VFR flights require either a flight plan or SARTIME to be lodged?',
  options: [
    'A. All VFR flights regardless of location or duration',
    'B. VFR air transport operations; over-water flights beyond gliding range to land; flights in designated remote areas; and night flights beyond 120 NM from departure aerodrome',
    'C. Only VFR flights at night or over water',
    'D. VFR flights exceeding 500 NM only'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.9.02(2): VFR flights requiring flight plan or SAR lodgement include: air transport operations; over-water flights beyond distance from land that allows engine-inoperative reach to land; flights in designated remote areas; and night flights beyond 120 NM from departure aerodrome.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(a)–(d)'
},

{
  question: 'What is the meaning of SARTIME as defined in Part 91 MOS?',
  options: [
    'A. The time a flight is expected to arrive at its destination',
    'B. The time nominated by a pilot for the initiation of SAR action if a report has not been received by the nominated unit',
    'C. The time a flight plan becomes active',
    'D. The scheduled departure time for the purposes of air traffic services'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07 definition: SARTIME means the time nominated by a pilot for the initiation of SAR action if a report has not been received by the nominated unit.',
  reference: 'Part 91 MOS 2020 s.1.07 Definitions'
},

{
  question: 'Under Part 91 MOS s.8.04(1), when must the pilot in command nominate a destination alternate aerodrome for an IFR or VFR flight?',
  options: [
    'A. For all IFR flights regardless of weather',
    'B. When the ETA at the planned destination is during the period 30 minutes before forecast commencement of relevant weather conditions to 30 minutes after the forecast ending of those conditions',
    'C. Only for flights exceeding 3 hours',
    'D. When the destination aerodrome is served by only one IAP'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.04(1): the pilot must nominate a destination alternate when ETA falls within the period beginning 30 minutes before forecast commencement of relevant weather conditions and ending 30 minutes after the forecast ending of those conditions.',
  reference: 'Part 91 MOS 2020 s.8.04(1)'
},

{
  question: 'Under Part 91 MOS Table 8.08(1) Item 3, what are the alternate minima for a day VFR aeroplane flight to an aerodrome in Class G airspace?',
  options: [
    'A. 1,500 ft cloud base; 8 km visibility',
    'B. 1,000 ft cloud base; 3 km visibility',
    'C. LSALT plus 500 ft; 8 km visibility',
    'D. 500 ft cloud base; 3 km visibility'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 8.08(1) Item 3: for a day VFR aeroplane to an aerodrome in Class G airspace, alternate minima are 1,000 ft and 3 km visibility. Note this differs from the 1,500 ft / 8 km that applies to Class G for night VFR and for airspace other than Class G.',
  reference: 'Part 91 MOS 2020 s.8.08 Table 8.08(1) Item 3'
},

{
  question: 'Under Part 91 MOS s.8.04(2), what different alternate requirement applies when flight planning is based on a TAF3 and ETA is within the first 3 hours of TAF3 validity?',
  options: [
    'A. The same criteria apply as for standard TAF',
    'B. The 30-minute buffer does not apply — the pilot must nominate an alternate only if ETA is during the actual forecast period of relevant weather conditions (not extended by 30 minutes)',
    'C. No alternate is required if TAF3 is used',
    'D. The 30-minute buffer increases to 60 minutes when using TAF3'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.04(2): when planning is based on TAF3 and ETA is within the first 3 hours of TAF3 validity, an alternate must be nominated only if ETA falls during the period from forecast commencement to forecast ending of relevant weather — the 30-minute buffers before and after do not apply.',
  reference: 'Part 91 MOS 2020 s.8.04(2)'
},

{
  question: 'Under Part 91 MOS s.10.02(d), what equipment check must the pilot complete before take-off?',
  options: [
    'A. Confirm aircraft gross weight does not exceed MTOW',
    'B. Confirm that all equipment required by the civil aviation legislation is available and functioning properly, and that emergency/survival equipment is readily accessible',
    'C. Check that the ADS-B is transmitting',
    'D. Verify that the flight plan has been received by ATC'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.10.02(d): before take-off, the pilot must confirm that all equipment required to be fitted or carried by civil aviation legislation is available and functioning properly, and that emergency and survival equipment carried on the aircraft is readily accessible.',
  reference: 'Part 91 MOS 2020 s.10.02(d)'
},

{
  question: 'Under CASR Part 43 Schedule 8, which of the following is a pilot maintenance task that a holder of a flight crew licence may lawfully perform?',
  options: [
    'A. Replacing a cracked windscreen',
    'B. Replacing a radio transceiver',
    'C. Replacing spark plugs in an aircraft engine',
    'D. Replacing a landing gear strut seal'
  ],
  correct: 2,
  explanation: 'CASR Part 43 Schedule 8 permits licensed pilots to replace spark plugs as a Schedule 8 pilot maintenance task. Windscreen replacement, avionics replacement, and landing gear seal replacement require a LAME or authorised person. Pilot maintenance tasks are limited to low-risk consumable and adjustment items listed in Schedule 8.',
  reference: 'CASR Part 43 Schedule 8'
},

{
  question: 'A pilot notices a defect during pre-flight that is not listed in the MEL. What is the correct action under CASR?',
  options: [
    'A. The pilot may operate the aircraft if the defect is assessed as not immediately hazardous',
    'B. The aircraft must not be operated until the defect is rectified by an authorised maintenance organisation, as it cannot be deferred under the MEL if not listed',
    'C. The pilot may defer the item for 72 hours under PUS',
    'D. The aircraft may depart if the PIC believes the defect is minor'
  ],
  correct: 1,
  explanation: 'Under CASR Part 42 and the MEL framework: a defect not listed in the MEL cannot be deferred. Only items expressly listed in the operator\'s approved MEL with all applicable conditions met can be deferred. An unlisted defect must be rectified before the aircraft is released for flight.',
  reference: 'CASR Part 42 / CASR Part 91 MOS s.10.02(d)'
},

{
  question: 'Under Part 91 MOS s.11.07(3), what altitude tolerance must a pilot maintain when changing levels in RVSM airspace in an Australian FIR?',
  options: [
    'A. The aircraft must not overshoot or undershoot by more than 300 ft',
    'B. The aircraft must not overshoot or undershoot by more than 150 ft',
    'C. The aircraft must not deviate by more than 200 ft from cleared level',
    'D. The aircraft must not deviate by more than 100 ft from cleared level'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.11.07(3): when changing levels in RVSM airspace in an Australian FIR, the pilot must ensure the aircraft does not overshoot or undershoot its cleared FL by more than 150 ft.',
  reference: 'Part 91 MOS 2020 s.11.07(3)'
},

{
  question: 'Under Part 91 MOS s.11.07(4), if a pilot cannot maintain the cleared FL in RVSM airspace, what must the pilot do?',
  options: [
    'A. Immediately begin a lateral offset procedure',
    'B. Inform ATC as soon as possible and obtain a revised clearance before initiating deviation, or if not possible, obtain it as soon as practicable after',
    'C. Descend 1,000 ft to clear RVSM airspace immediately',
    'D. Squawk 7700 and declare an emergency'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.11.07(4): if the cleared FL cannot be maintained, the pilot must inform ATC as soon as possible and either obtain a revised clearance before deviation, or if a revised clearance cannot be obtained before the deviation, obtain it as soon as possible after.',
  reference: 'Part 91 MOS 2020 s.11.07(4)'
},

{
  question: 'Under Part 91 MOS Table 2.02(2), what aircraft performance category applies to an aircraft with a VAT (threshold speed) of 105 kt?',
  options: [
    'A. Category A',
    'B. Category B',
    'C. Category C',
    'D. Category D'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.02(2): Category A = VAT not more than 90 kt; Category B = 91–120 kt; Category C = 121–140 kt; Category D = 141–165 kt; Category E = 166–210 kt. A VAT of 105 kt falls in Category B.',
  reference: 'Part 91 MOS 2020 s.2.02 Table 2.02(2)'
},

{
  question: 'Under Part 91 MOS Table 2.02(2), what is the VAT range for Category C aircraft?',
  options: [
    'A. 91–120 kt',
    'B. 121–140 kt',
    'C. 141–165 kt',
    'D. 100–130 kt'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.02(2) Item 3: Category C aircraft have a VAT (indicated airspeed at threshold speed) of 121–140 kt.',
  reference: 'Part 91 MOS 2020 s.2.02 Table 2.02(2) Item 3'
},

{
  question: 'Under Part 91 MOS Table 26.43(2) Item 1, when must flight crew use supplemental oxygen on a continuous basis?',
  options: [
    'A. When cabin altitude exceeds FL250',
    'B. For any period exceeding 30 minutes when cabin pressure altitude is continuously at least FL125 but less than FL140; and for the entire period when cabin altitude is at least FL140',
    'C. Only when cabin altitude exceeds FL180',
    'D. Supplemental oxygen use is at crew discretion below FL250'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 26.43(2) Item 1(a)–(b): flight crew must use supplemental oxygen for any period exceeding 30 minutes when cabin pressure altitude is continuously at least FL125 but less than FL140, and for the entire period when cabin altitude is at least FL140.',
  reference: 'Part 91 MOS 2020 s.26.43 Table 26.43(2) Item 1'
},

{
  question: 'Under Part 91 MOS s.26.43 Table 26.43(2), when a pressurised aircraft operates above FL250, what additional oxygen requirement applies?',
  options: [
    'A. No additional requirement above the FL140 rules',
    'B. At least 10 minutes supply must be available even if the entire period above FL250 is less than 10 minutes',
    'C. All passengers must also be provided with supplemental oxygen',
    'D. A second oxygen system must be fitted'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 26.43(2) Item 1(c): when a pressurised aircraft is flown at FL250 or more (relevant flight), there must be at least 10 minutes supply even if the entire period of relevant flight is less than 10 minutes.',
  reference: 'Part 91 MOS 2020 s.26.43 Table 26.43(2) Item 1(c)'
},

{
  question: 'Under Part 91 MOS s.14.02(1), how must the pilot navigate an aircraft during an IFR flight?',
  options: [
    'A. By reference to ground features only',
    'B. By use of an area navigation system meeting the airspace performance requirements, or by a ground-based NavAid providing coverage within ±9° of track',
    'C. By GNSS only — other NavAids are no longer accepted for IFR',
    'D. Visual reference above the transition altitude'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.14.02(1): IFR navigation must use an area navigation system meeting performance requirements of the intended airspace or route, or a ground-based NavAid where the route allows the aircraft to come within rated coverage of a NavAid within ±9° of track from the last positive fix.',
  reference: 'Part 91 MOS 2020 s.14.02(1)'
},

{
  question: 'Under Part 91 MOS s.11.03(2)(a), the pilot must advise ATS when RAIM or GNSS integrity is lost for how long during the en-route phase?',
  options: [
    'A. More than 1 minute',
    'B. More than 10 minutes',
    'C. More than 5 minutes',
    'D. Any loss must be immediately reported'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.11.03(2)(a): during the en-route phase, the pilot must advise ATS if there is RAIM loss or loss of GNSS integrity for more than 5 minutes. During the terminal phase, any RAIM or integrity loss must be reported.',
  reference: 'Part 91 MOS 2020 s.11.03(2)(a)'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.8, what subjects does CPL flight rules and air law (CFRC) cover that a pilot must be able to apply?',
  options: [
    'A. Instrument approach procedures only',
    'B. Documentation and publications, CPL licence privileges and limitations, flight rules and conditions of flight, air service operations, aerodromes, airspace, and equipment requirements',
    'C. ATPL performance subjects only',
    'D. Flight planning and fuel only'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 CFRC: the CPL air law syllabus covers documentation and publications, CPL licence privileges/limitations including recency, flight rules and conditions of flight, air service operations, aerodromes, airspace, and equipment requirements — all at the CPL level of application.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 (CFRC)'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.2, what does a CPL holder need to understand about flight and duty time limitations?',
  options: [
    'A. Only the 8-hour daily flight limit applies',
    'B. The pilot must be able to apply the rules pertaining to flight and duty time limitations for CPL licence holders — including CAO 48.1 FDP and cumulative limits',
    'C. Duty time rules only apply to Part 121 operators',
    'D. Recency only — there are no duty time limits for CPL holders'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.2: a CPL holder must be able to apply the rules pertaining to flight and duty time limitations for CPL licence holders. This includes CAO 48.1 FDP limits, cumulative limits, and rest requirements.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.2'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.1, what aeroplane-specific circuit procedure knowledge is required for the CFRA (CPL aeroplane) air law component?',
  options: [
    'A. Instrument approach circuit procedures only',
    'B. The pilot must describe circuit procedures for aeroplane operations, including standard circuit heights and patterns at controlled and non-controlled aerodromes',
    'C. Only emergency circuit procedures are tested',
    'D. Circuit procedures are not tested in CFRA — only airspace rules'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.2.1: the pilot must describe circuit procedures for aeroplane operations. This covers standard circuit heights, direction, joining procedures, and requirements at both controlled and non-controlled aerodromes.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.1'
},

{
  question: 'Under CASR and AIP ENR 2, what is the key difference between a Prohibited Area and a Restricted Area?',
  options: [
    'A. There is no difference — both require CASA approval for entry',
    'B. Entry to a Prohibited Area is absolutely forbidden to all civil aircraft. Entry to a Restricted Area is forbidden unless permission is obtained from the controlling authority',
    'C. Prohibited Areas only apply to foreign-registered aircraft',
    'D. Restricted Areas apply only during stated activation times — outside those times, any aircraft may enter'
  ],
  correct: 1,
  explanation: 'Under CASR Part 91 and AIP ENR 2.1: a Prohibited Area (prefix P) is airspace within which flight is prohibited for all civil aircraft. A Restricted Area (prefix R) prohibits entry without permission from the controlling authority. Danger Areas (prefix D) do not prohibit entry but warn of potentially hazardous activities.',
  reference: 'CASR Part 91 / AIP ENR 2.1'
},

{
  question: 'Under CASR Part 91, what does a Danger Area indicate to a pilot?',
  options: [
    'A. Flight is absolutely prohibited',
    'B. Entry requires a specific CASA approval',
    'C. The area may contain activities hazardous to flight but entry is not prohibited — pilots proceed at their own risk',
    'D. The area is restricted to military aircraft only'
  ],
  correct: 2,
  explanation: 'CASR Part 91 and AIP ENR 2.2: Danger Areas (prefix D) indicate potentially hazardous activities (such as military exercises, weapons firing) but do not prohibit entry. Pilots enter at their own risk and should contact the controlling authority or check activation times via NAIPS NOTAMs.',
  reference: 'CASR Part 91 / AIP ENR 2.2'
},

{
  question: 'Under Part 91 MOS Table 2.05(1), what does a horizontal white dumb-bell (H-shaped) ground signal adjacent to the wind direction indicator mean?',
  options: [
    'A. The aerodrome is closed to all traffic',
    'B. Use only hard surface movement areas (or sealed surfaces where both gravel and sealed areas exist)',
    'C. Right-hand circuit is in operation',
    'D. Glider operations are in progress'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.05(1) Item 1: a horizontal white dumb-bell displayed adjacent to the wind direction indicator means (1) use only hard surface movement areas; (2) where sealed and gravel areas exist, use only sealed; (3) where constructed gravel and natural surfaces exist, use only the gravel surfaces.',
  reference: 'Part 91 MOS 2020 s.2.05 Table 2.05(1) Item 1'
},

{
  question: 'Under Part 91 MOS s.12.01 and CASR s.91.265, what minimum height applies when flying over a populous area or public gathering?',
  options: [
    'A. 500 ft above the highest obstacle within 600 m',
    'B. 1,000 ft above the highest feature or obstacle within a horizontal radius of 600 m',
    'C. 1,500 ft AGL at all times over built-up areas',
    'D. 300 ft over open areas and 1,000 ft over cities'
  ],
  correct: 1,
  explanation: 'CASR s.91.265 and Part 91 MOS s.12.01: the minimum height over a populous area or public gathering is 1,000 ft above the highest feature or obstacle within a horizontal radius of 600 m from the aircraft. (Rotorcraft 300 m.)',
  reference: 'CASR Part 91 s.91.265 / Part 91 MOS 2020 s.12.01'
},

{
  question: 'Under Part 91 MOS Chapter 5, when is a journey log required to be maintained?',
  options: [
    'A. For all flights in Australian airspace',
    'B. For flights that begin or end at an aerodrome outside Australian territory (international flights)',
    'C. Only for IFR flights above FL245',
    'D. Only for Part 121 RPT operations'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Chapter 5 (s.5.01): the requirement to maintain a journey log under CASR s.91.120(2)(a) applies to flights that begin or end at an aerodrome outside Australian territory — international flights.',
  reference: 'Part 91 MOS 2020 s.5.01 / CASR s.91.120'
},

{
  question: 'Under Part 91 MOS Chapter 6 and CASR s.91.150, what is the meaning of "in-company" aircraft as defined in the MOS?',
  options: [
    'A. Aircraft belonging to the same airline company',
    'B. Aircraft forming a group occupying a specific 3-dimensional volume of airspace whose pilots self-separate from other group aircraft',
    'C. Aircraft on the same ATC clearance to the same destination',
    'D. Aircraft with the same callsign prefix'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07 definition: "in-company" aircraft means aircraft (a) that form a group and occupy a specific 3-dimensional volume of airspace; and (b) each of whose pilots in command self-separates from the other group aircraft in the volume of airspace.',
  reference: 'Part 91 MOS 2020 s.1.07 Definitions'
},

{
  question: 'Under Part 91 MOS, what is the definition of "trip fuel"?',
  options: [
    'A. The total fuel on board at departure',
    'B. Fuel for take-off and climb to initial cruising level, cruise from top of climb to top of descent, descent and approach — the total fuel from departure to landing at the destination',
    'C. Trip fuel equals final reserve plus contingency only',
    'D. The fuel remaining in the tanks after the flight'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07: trip fuel means fuel required to enable the aircraft to fly from any point to landing at the destination including: take-off and climb from departure elevation to initial cruising level; cruise from top of climb to top of descent; fuel from top of descent to landing.',
  reference: 'Part 91 MOS 2020 s.1.07 Definition of trip fuel'
},

{
  question: 'Under Part 91 MOS, what does "contingency fuel" compensate for?',
  options: [
    'A. Fuel required for taxi and engine warm-up',
    'B. Unforeseen factors that may affect fuel consumption during the planned flight',
    'C. Fuel required to divert to an alternate aerodrome',
    'D. Fuel to fly a holding pattern at the destination'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07: contingency fuel means the amount of fuel required to compensate for unforeseen factors, which must not be less than the percentage of planned trip fuel specified in Table 19.02(2) column 4 for the applicable aircraft and flight type.',
  reference: 'Part 91 MOS 2020 s.1.07 Definition of contingency fuel'
},

{
  question: 'Under Part 91 MOS, "additional fuel" is defined as fuel required for what purpose?',
  options: [
    'A. Fuel required to fly to the alternate aerodrome in normal operations',
    'B. Fuel to allow an aircraft that suffers engine failure or pressurisation loss at the most critical point to proceed to an alternate, fly 15 minutes holding at 1,500 ft, and land',
    'C. Extra fuel beyond the minimum required, carried at the PIC\'s discretion',
    'D. Fuel to compensate for unforeseen headwinds or ATC delays'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07: additional fuel enables an aircraft suffering engine failure or pressurisation loss at the most critical point to proceed to an alternate aerodrome, fly 15 minutes at holding speed at 1,500 ft above aerodrome elevation in ISA, and make an approach and landing.',
  reference: 'Part 91 MOS 2020 s.1.07 Definition of additional fuel'
},

{
  question: 'Under Part 91 MOS s.23.02, if an aircraft is intercepted by another aircraft, what must the pilot in command comply with?',
  options: [
    'A. Declare MAYDAY immediately on 121.5 MHz',
    'B. The applicable procedures for intercepted aircraft as set out in ICAO Annex 2 Appendix 1 Section 2 and Appendix 2 Attachment A',
    'C. Land immediately at the nearest aerodrome',
    'D. Maintain current heading and altitude and await further ATC instructions'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.23.02: the pilot of an intercepted aircraft must comply with the applicable procedures set out in ICAO Annex 2 Appendix 1 Section 2 (signals for interception) and Annex 2 Appendix 2 Attachment A (interception of civil aircraft procedures).',
  reference: 'Part 91 MOS 2020 s.23.02'
},

{
  question: 'Under Part 91 MOS s.26.23(3), when must a turbine-engine aircraft display anti-collision lights comprising red beacon lights only?',
  options: [
    'A. From wheels-up to wheels-down only',
    'B. From engine start to engine shutdown at the end of the flight',
    'C. From immediately before engines are started until engines are shut down at the end of the flight',
    'D. Only during periods of reduced visibility'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.23(3)(a): for anti-collision lights comprising red beacon lights only, a turbine-engine aircraft must display them from immediately before the engines are started until the time the engines are shut down at the end of the flight.',
  reference: 'Part 91 MOS 2020 s.26.23(3)(a)'
},

{
  question: 'Under CASR Part 61, what is the minimum recency required for a CPL holder to act as PIC of an aeroplane for a day VFR flight?',
  options: [
    'A. 5 take-offs and landings in the preceding 180 days',
    'B. 3 take-offs and 3 landings in the preceding 90 days on the relevant aircraft category',
    'C. A valid medical certificate only',
    'D. 10 hours flight time in the preceding 12 months'
  ],
  correct: 1,
  explanation: 'Under CASR Part 61: to exercise PIC privileges for day VFR, a pilot must have completed 3 take-offs and 3 landings on the relevant aircraft category within the preceding 90 days. This is a strict currency requirement independent of total hours.',
  reference: 'CASR Part 61 / CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.1'
},

{
  question: 'Under CASR Part 67, what is the maximum validity period of a Class 1 medical certificate for a pilot aged 38?',
  options: [
    'A. 6 months',
    'B. 24 months',
    'C. 12 months',
    'D. 3 months'
  ],
  correct: 2,
  explanation: 'CASR Part 67: Class 1 medical certificates are valid for 12 months for pilots under 40 years of age, and 6 months for pilots aged 40 and over. A pilot aged 38 receives the standard 12-month validity.',
  reference: 'CASR Part 67'
},

{
  question: 'Under CASR Part 91, what is the maximum BAC a pilot may have when exercising flight crew privileges?',
  options: [
    'A. 0.05% — the same as the Australian road driving limit',
    'B. 0.00% — nil alcohol at all times',
    'C. 0.02% — and the pilot must not fly within 8 hours of consuming alcohol',
    'D. 0.04% — half the road driving limit'
  ],
  correct: 2,
  explanation: 'CASR Part 91.195: a pilot must not exercise flight crew privileges with a BAC at or above 0.02%, within 8 hours of consuming alcohol, or while under the influence of alcohol or drugs. All three conditions apply simultaneously.',
  reference: 'CASR Part 91 s.91.195'
},

{
  question: 'An aerodrome displays a white cross (×) on the signal square. What does this mean?',
  options: [
    'A. Special operations are in progress — proceed with caution',
    'B. The aerodrome or manoeuvring area is unserviceable — do not land',
    'C. Glider operations are in progress',
    'D. Right-hand circuit is in use'
  ],
  correct: 1,
  explanation: 'AIP AD 1.1 and RPL/PPL/CPL Workbook: a white cross on the signal square indicates the aerodrome or manoeuvring area is unserviceable. Pilots must not land. The signal is displayed in the signal area (signal square) to warn arriving pilots.',
  reference: 'AIP AD 1.1 / RPL PPL CPL Aeroplane Workbook v3.0a'
},

{
  question: 'Under CASR Part 47, what document must an aircraft carry to demonstrate it is registered?',
  options: [
    'A. The maintenance release serves as evidence of registration',
    'B. The Certificate of Registration must be carried on board or its details must be accessible',
    'C. Registration is confirmed by the transponder squawk only',
    'D. No document is required — CASA databases confirm registration electronically'
  ],
  correct: 1,
  explanation: 'CASR Part 47 and CASR Part 91: a Certificate of Registration (or evidence of registration) must be carried on board the aircraft. This document confirms the aircraft is legally registered in Australia as required for legal operation in Australian airspace.',
  reference: 'CASR Part 47 / CASR Part 91'
},

{
  question: 'Under CASR, what is the purpose of a Certificate of Airworthiness (C of A)?',
  options: [
    'A. It authorises the aircraft to be used for commercial operations only',
    'B. It certifies that the aircraft design and construction meets the applicable airworthiness standards',
    'C. It authorises the pilot to operate the aircraft on specific routes',
    'D. It replaces the maintenance release for low-risk operations'
  ],
  correct: 1,
  explanation: 'Under CASR Part 21: a Certificate of Airworthiness certifies that the aircraft design and construction conforms to approved type design and is in a condition for safe operation. It is a design and construction certification, distinct from the maintenance release (which certifies the aircraft is maintained in an airworthy condition).',
  reference: 'CASR Part 21 / CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.3'
},

{
  question: 'Under CASR Part 91, in an emergency a pilot in command may deviate from the requirements of CASR. What must the pilot do after such a deviation?',
  options: [
    'A. Nothing is required if the emergency was genuine',
    'B. Submit a written report to CASA, stating the nature of the emergency and the extent of the deviation',
    'C. Notify the ATSB only if structural damage occurred',
    'D. File an amended flight plan within 24 hours'
  ],
  correct: 1,
  explanation: 'CASR Part 91 s.91.630: a pilot who deviates from CASR requirements during an emergency must submit a written report to CASA as soon as practicable, stating the nature of the emergency and the extent of deviation. This applies to any regulation deviated from, not just flight rules.',
  reference: 'CASR Part 91 s.91.630'
},

{
  question: 'When an aircraft is involved in a serious accident in Australia, who must be notified under the Transport Safety Investigation Act 2003?',
  options: [
    'A. CASA only',
    'B. The Australian Transport Safety Bureau (ATSB)',
    'C. The aircraft manufacturer',
    'D. Both ATSB and CASA — both must be notified simultaneously within 24 hours'
  ],
  correct: 1,
  explanation: 'Transport Safety Investigation Act 2003: serious accidents involving aircraft must be notified to the Australian Transport Safety Bureau (ATSB) immediately (or as soon as practicable). The ATSB is the independent safety investigator. CASA may also require separate notification for certain occurrence categories.',
  reference: 'Transport Safety Investigation Act 2003 / CASR Part 91'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.9 CFRA, what must a CPL aeroplane pilot be able to describe regarding Class C and D airspace operations?',
  options: [
    'A. IFR approach procedures only',
    'B. Requirements for operating in Class C and D airspace including special VFR clearance provisions',
    'C. The microphone procedure for initial contact only',
    'D. Separation standards between IFR aircraft only'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.2.2: the pilot must describe requirements for operating in Class C and D airspace and special VFR clearance provisions. This includes clearance requirements, speed limits, and SVFR conditions.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.2'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.9 CFRA s.2.2.3, what are the minimum instruments required to operate an aeroplane under VFR?',
  options: [
    'A. Airspeed indicator only',
    'B. Full six-pack regardless of conditions',
    'C. As specified in Part 91 MOS s.26.06(1): airspeed, pressure altitude, magnetic heading, and time — with additional instruments for specific operations',
    'D. Altimeter and compass only for day VFR'
  ],
  correct: 2,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.3 requires the pilot to state minimum VFR instruments. Per Part 91 MOS s.26.06(1): indicated airspeed, pressure altitude, magnetic heading, and time are the baseline. Additional instruments are required for night, aerial work, and IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.3 / Part 91 MOS s.26.06(1)'
},

{
  question: 'Under CAO 48.1, what is the maximum flight time in any 28-day period for a CPL pilot conducting single-pilot commercial operations?',
  options: [
    'A. 120 hours',
    'B. 100 hours',
    'C. 80 hours',
    'D. 90 hours'
  ],
  correct: 1,
  explanation: 'CAO 48.1: the maximum flight time in any 28-day period for commercial pilot operations is 100 hours. The 12-month cumulative limit is 1,000 hours. These cumulative limits apply regardless of how many operators the pilot works for.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under CAO 48.1, what is the minimum rest period required before a CPL pilot can commence a new flight duty period after completing a standard FDP of 10 hours?',
  options: [
    'A. 8 hours minimum rest',
    'B. 12 hours minimum rest',
    'C. 10 hours minimum rest',
    'D. 6 hours minimum rest'
  ],
  correct: 2,
  explanation: 'CAO 48.1: the minimum rest between flight duty periods for a standard FDP is 10 hours. This rest must be at a suitable facility. After particularly fatiguing operations (extended, augmented, or otherwise fatiguing FDPs), 12 hours minimum rest is required.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under CAO 48.1, what is the maximum FDP for a two-pilot aeroplane crew with a standard start time between 0600 and 0859 local?',
  options: [
    'A. 11 hours',
    'B. 14 hours',
    'C. 12 hours',
    'D. 13 hours'
  ],
  correct: 3,
  explanation: 'CAO 48.1: for a standard start time (0600–0859 local), the maximum FDP for a two-pilot crew is 13 hours. Early starts (0500–0559) = 11 hours; Window starts (0900–1159) = 12 hours; Late starts (1200–2259) = 11.5 hours; Night starts (2300–0459) = 10 hours.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under Part 91 MOS s.8.04(8), if a TAF includes a BECMG element representing a deterioration in weather, when should the change be applied for alternate planning purposes?',
  options: [
    'A. From the end of the BECMG period',
    'B. From the start of the BECMG forecast period',
    'C. At the mid-point of the BECMG period',
    'D. Only after the BECMG change is confirmed by METAR'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.04(8)(a): where a BECMG element represents a deterioration in any weather element, the change indication is applied from the start of the forecast BECMG period. If the BECMG represents an improvement, it is applied from the end of the BECMG period.',
  reference: 'Part 91 MOS 2020 s.8.04(8)(a)'
},

{
  question: 'Under Part 91 MOS s.8.05(1), when must the pilot nominate a destination alternate aerodrome for an IFR night flight?',
  options: [
    'A. Always for night IFR regardless of destination equipment',
    'B. When the planned destination is not served by an IAP, or is served by IAPs none of which the pilot is able to conduct',
    'C. Only when the destination has no instrument lighting',
    'D. Only for flights beyond 250 NM'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.05(1): the pilot must nominate an alternate for an IFR flight by night to a planned destination that is (a) not served by an IAP; or (b) served by IAPs none of which the pilot is able to conduct.',
  reference: 'Part 91 MOS 2020 s.8.05(1)'
},

{
  question: 'Under Part 91 MOS s.11.12, what ATC clearance readback is required?',
  options: [
    'A. Only altitude assignments need to be read back',
    'B. Full readback of all clearances and instructions in accordance with ATC procedures',
    'C. Readback is optional and at the pilot\'s discretion',
    'D. Only squawk codes and runway assignments require readback'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.11.12: the pilot in command must ensure that ATC clearances and instructions are read back in accordance with Table 21.05(1) and other applicable provisions. Specific items require mandatory readback including headings, altitudes/levels, speed instructions, and SSR codes.',
  reference: 'Part 91 MOS 2020 s.11.12'
},

{
  question: 'Under Part 91 MOS s.21.05(1), a VFR aircraft in Class D airspace must report to ATC in accordance with Table 21.05(1). Under that table, when must the pilot report a position estimate that is more than 2 minutes in error?',
  options: [
    'A. At the next scheduled reporting point only',
    'B. A corrected position estimate must be reported immediately — as specified in Table 21.05(1) Item 5',
    'C. Only if requested by ATC',
    'D. Only for IFR aircraft — VFR aircraft in Class D have no estimate reporting obligation'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.05(1) Item 5: when a previously reported position estimate is more than 2 minutes in error, the pilot must immediately provide a corrected position estimate. This applies to VFR aircraft in Class D as they are within the scope of s.21.05(1).',
  reference: 'Part 91 MOS 2020 s.21.05(1) Table 21.05(1) Item 5'
},

{
  question: 'Under CASR 91.330, an aircraft is compelled to land due to an emergency. Which aircraft has the right-of-way?',
  options: [
    'A. Any IFR aircraft in controlled airspace',
    'B. The aircraft compelled to land — all other aircraft must give way to it',
    'C. The largest aircraft in the vicinity',
    'D. The aircraft that declared MAYDAY first'
  ],
  correct: 1,
  explanation: 'CASR 91.330 right-of-way table Item 1: an aircraft that is in an emergency and compelled to land has absolute right-of-way over all other aircraft. All aircraft must give way to it.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.330, two aircraft are converging at approximately the same altitude. Which aircraft gives way?',
  options: [
    'A. The slower aircraft gives way to the faster',
    'B. The aircraft that has the other aircraft on its right must give way',
    'C. The aircraft at the lower altitude gives way',
    'D. The lighter aircraft gives way to the heavier'
  ],
  correct: 1,
  explanation: 'CASR 91.330 right-of-way table Item 6: when two aircraft are on converging headings at approximately the same altitude, the aircraft that has the other aircraft on its right must give way.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.330, an aircraft is landing. Which other aircraft must give way to the landing aircraft?',
  options: [
    'A. Only aircraft on the ground',
    'B. Any other aircraft whether in flight or operating on the ground or water',
    'C. Only other VFR aircraft',
    'D. Only IFR aircraft in controlled airspace'
  ],
  correct: 1,
  explanation: 'CASR 91.330 right-of-way table Item 2: any other aircraft — whether in flight or operating on the ground or water — must give way to a landing aircraft.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.330, what is the correct order of right-of-way priority for aircraft in the vicinity (from highest to lowest priority)?',
  options: [
    'A. Balloon, glider, airship, towing aircraft, powered aircraft',
    'B. Powered aircraft, airship, glider, balloon',
    'C. Balloon, parachute descent, unpowered glider, airship, aircraft towing something, power-driven aircraft',
    'D. IFR aircraft, VFR aircraft, glider, balloon'
  ],
  correct: 2,
  explanation: 'CASR 91.330 right-of-way table Item 5: the order of right-of-way in descending priority is balloon, parachute descent, unpowered glider, airship, an aircraft that is towing something (including another aircraft), and power-driven aircraft.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.335, when overtaking another aircraft, how must the overtaking aircraft pass?',
  options: [
    'A. Below and to the left',
    'B. On the right, remaining to the right until well clear',
    'C. Above and to the left',
    'D. Either side at the pilot\'s discretion'
  ],
  correct: 1,
  explanation: 'CASR 91.335 additional right-of-way rules: when overtaking another aircraft (whether climbing, descending or level), the overtaking aircraft must keep out of the way, pass on the right, and remain on the right until well clear.',
  reference: 'CASR 91.335 / VFRG v8.3 Chapter 1'
},

{
  question: 'Two aircraft are approaching head-on. Under CASR 91.335, what must each aircraft do?',
  options: [
    'A. The faster aircraft gives way and turns to the left',
    'B. The lower aircraft climbs to the other\'s altitude',
    'C. Each aircraft alters heading to the right',
    'D. Each aircraft turns to the left'
  ],
  correct: 2,
  explanation: 'CASR 91.335: where two aircraft are approaching head-on or approximately head-on, each aircraft must alter heading to the right.',
  reference: 'CASR 91.335 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.330, two aircraft are on approach to land and one is higher than the other. Which gives way?',
  options: [
    'A. The lower aircraft gives way to the higher',
    'B. The higher aircraft gives way to the lower',
    'C. The slower aircraft gives way',
    'D. The lighter aircraft gives way'
  ],
  correct: 1,
  explanation: 'CASR 91.330 right-of-way table Item 3: when two heavier-than-air aircraft are on approach to land, the higher aircraft must give way to the lower. However, if the higher aircraft is in the final stages of approach, the lower aircraft must not take advantage of this rule.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under the VFRG v8.3, what is the standard circuit height for a medium performance aircraft (55–150 kt) at a non-controlled aerodrome?',
  options: [
    'A. 500 ft above aerodrome elevation',
    'B. 1,000 ft above aerodrome elevation',
    'C. 1,500 ft above aerodrome elevation',
    'D. 2,000 ft above aerodrome elevation'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3 circuit heights table: medium performance aircraft (approximately 55–150 kt) fly the standard circuit at 1,000 ft above aerodrome elevation. High performance aircraft (above approximately 150 kt) use 1,500 ft; low performance (<55 kt) use 500 ft.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'Under the VFRG v8.3, what is the standard circuit height for high performance aircraft (above approximately 150 kt) including jets and many turboprops?',
  options: [
    'A. 1,000 ft above aerodrome elevation',
    'B. 500 ft above aerodrome elevation',
    'C. 2,500 ft above aerodrome elevation',
    'D. 1,500 ft above aerodrome elevation'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 3 circuit heights table: high performance aircraft (includes jets and many turboprops, above approximately 150 kt) fly the circuit at 1,500 ft above aerodrome elevation.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'Under CASR 91.390, after take-off from a non-controlled aerodrome, how long must an aircraft maintain the take-off track?',
  options: [
    'A. Until reaching circuit height',
    'B. Until 500 ft AGL, unless a track change is necessary to avoid terrain',
    'C. Until 1,000 ft AGL',
    'D. Until clear of the aerodrome traffic zone'
  ],
  correct: 1,
  explanation: 'CASR 91.390: for other than a helicopter, after take-off, the pilot must maintain the take-off track until the aircraft is above 500 ft AGL — unless a track change is necessary to avoid terrain.',
  reference: 'CASR 91.390 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR 91.385, what is the direction of turns in a standard aerodrome traffic circuit?',
  options: [
    'A. All turns to the right',
    'B. As published in the AIP or ERSA',
    'C. Normally all turns to the left, with right circuits published in ERSA',
    'D. Alternating left and right turns'
  ],
  correct: 2,
  explanation: 'CASR 91.385: the standard aerodrome traffic circuit facilitates orderly traffic flow and is normally made with all turns to the left. Right-hand circuits are published in ERSA for specific aerodromes where they are in use.',
  reference: 'CASR 91.385 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR 91.395, when making a straight-in approach at a non-controlled aerodrome, how far from the threshold must the aircraft be established on final approach?',
  options: [
    'A. 5 NM',
    'B. 10 NM',
    'C. 1 NM',
    'D. At least 3 NM from the threshold'
  ],
  correct: 3,
  explanation: 'CASR 91.395: unless conducting an instrument approach in IMC or a specific Part 103 aircraft, the pilot must be established on final approach by at least 3 NM from the threshold of the intended runway. The aircraft making a straight-in approach must give way to aircraft in the circuit.',
  reference: 'CASR 91.395 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under the VFRG v8.3, in what direction should the final approach turn be completed at a non-controlled aerodrome?',
  options: [
    'A. The turn may be completed at any height provided the runway is in sight',
    'B. Completed by not less than 500 ft above aerodrome elevation',
    'C. Completed by not less than 1,000 ft AGL',
    'D. Completed at the pilot\'s discretion based on aircraft performance'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3: the turn onto final approach should be completed by not less than 500 ft above aerodrome elevation. This allows sufficient time to ensure the runway is clear and for aircraft to be stabilised.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'Under the VFRG, what is the meaning of "in the vicinity" of a non-controlled aerodrome under CASR 91.360?',
  options: [
    'A. Within 5 NM at any altitude',
    'B. Within 50 NM at or above circuit height',
    'C. In uncontrolled airspace, within 10 NM of the aerodrome, at a height that could result in conflict with aerodrome operations',
    'D. Within the aerodrome traffic zone as published in ERSA'
  ],
  correct: 2,
  explanation: 'CASR 91.360: an aircraft is in the vicinity of a non-controlled aerodrome if it is (a) in uncontrolled airspace; (b) within 10 NM of the aerodrome; and (c) at a height above the aerodrome that could result in conflict with operations at the aerodrome.',
  reference: 'CASR 91.360 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under AIP GEN 2.2, what are the three types of NOTAMs available to pilots in Australia?',
  options: [
    'A. Class A, Class B and Class C NOTAMs',
    'B. Location NOTAMs (accessed by individual location identifier), FIR NOTAMs (for Brisbane or Melbourne FIR), and Head Office NOTAMs (accessed by YSHO)',
    'C. Temporary NOTAMs, permanent NOTAMs and trigger NOTAMs',
    'D. Aerodrome NOTAMs, en-route NOTAMs and emergency NOTAMs'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 and AIP GEN 3.3: three types of NOTAMs are available — location NOTAMs (accessed by individual location identifier, e.g. YBWW for Brisbane West Wellcamp); FIR NOTAMs (applicable to Brisbane FIR (YBBB) or Melbourne FIR (YMMM)); and Head Office NOTAMs (accessed by identifier YSHO).',
  reference: 'AIP GEN 3.3 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under Part 91 MOS s.10.02(b), which NOTAMs must the pilot check before take-off?',
  options: [
    'A. Location NOTAMs only',
    'B. All Head Office and FIR NOTAMs for the en-route phase, and all location-specific NOTAMs for relevant aerodromes',
    'C. Only NOTAMs for the departure aerodrome',
    'D. NOTAMs are advisory only and do not require pre-flight checking'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.10.02(b): before take-off, the pilot must check all Head Office and FIR NOTAMs applicable to the en-route phase of the flight, and all location-specific NOTAMs for relevant aerodromes.',
  reference: 'Part 91 MOS 2020 s.10.02(b)'
},

{
  question: 'Under AIP GEN 3.5 and VFRG, what does TEMPO indicate in a TAF?',
  options: [
    'A. Permanent weather change — applicable for the entire remaining validity period',
    'B. Variations expected to last for 30 minutes or more but less than 60 minutes each instance, and not expected to cover more than half the given period',
    'C. Variations lasting less than 30 minutes each instance, not covering more than half the period',
    'D. A 100% certain weather change'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 and AIP ENR 1.1: TEMPO is used when variations from forecast mean conditions are expected to last 30 minutes or more but less than 60 minutes in each instance, and are not expected to cover more than half the given period.',
  reference: 'AIP GEN 3.5 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under AIP GEN 3.5, what does INTER indicate in a TAF?',
  options: [
    'A. Variations lasting 30–60 minutes each instance',
    'B. Variations expected to last for periods less than 30 minutes each instance, not expected to cover more than half the given period',
    'C. An international weather broadcast',
    'D. Intermediate weather — applicable to the entire period'
  ],
  correct: 1,
  explanation: 'AIP GEN 3.5 / VFRG v8.3: INTER is used when variations from forecast mean conditions are expected to last for less than 30 minutes in each instance, and are not expected to cover more than half the given period. The mean conditions remain those of the preceding part of the forecast.',
  reference: 'AIP GEN 3.5 / VFRG v8.3 Chapter 2'
},

{
  question: 'When planning alternate fuel and a TAF for the destination includes a BECMG element showing deteriorating conditions, from when should those conditions be applied under Part 91 MOS s.8.04(8)?',
  options: [
    'A. From the end of the BECMG period',
    'B. From the middle of the BECMG period',
    'C. From the start of the BECMG period',
    'D. Only once confirmed by METAR'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.8.04(8)(a) and VFRG: where a BECMG element represents a deterioration in weather, the conditions are applied from the start of the BECMG forecast period. Improving conditions within a BECMG are applied from the end of the period.',
  reference: 'Part 91 MOS 2020 s.8.04(8) / VFRG v8.3 Chapter 2'
},

{
  question: 'Under VFRG v8.3 and AIP, what does CAVOK mean in a weather report or forecast?',
  options: [
    'A. Cloud and visibility OK — cloud base above 1,000 ft and visibility above 5 km',
    'B. Visibility 10 km or more; no cloud below 5,000 ft or below the highest MSA (whichever is greater), no CB or TCU at any height; and nil significant weather',
    'C. No cloud detected — applicable to automated AWS only',
    'D. Visual meteorological conditions confirmed by ATC'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 2: CAVOK is reported (from staffed stations) when: visibility is 10 km or more; there is nil significant cloud (no cloud below 5,000 ft or below the highest 25 NM MSA, whichever is greater, and no CB or TCU at any height); and nil significant weather simultaneously.',
  reference: 'VFRG v8.3 Chapter 2 / AIP GEN 3.5'
},

{
  question: 'Under AIP ENR 1.1, what must a pilot do before first contact with ATC at an ATIS-equipped aerodrome?',
  options: [
    'A. Obtain a transponder code from approach control',
    'B. Obtain the ATIS and advise the ATIS code letter on first contact with ATC',
    'C. Confirm fuel state with ATC before entering the CTR',
    'D. File an arrival report with NAIPS'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1 and VFRG v8.3: if landing or taking off at an aerodrome where ATIS is provided, the pilot should obtain the ATIS before first contact on the approach or tower frequency. On first contact, the pilot must advise receipt of the ATIS code letter, for example "Received information Echo."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under AIP ENR 1.1, what is a separate pre-recorded ATIS used for outside normal tower hours?',
  options: [
    'A. ATIS is shut down outside tower hours',
    'B. It may broadcast operational information of an unchanging nature, such as CTAF, PAL frequency, preferred runways, noise abatement, and expected reopening time',
    'C. It is replaced by AWIS during non-operational hours',
    'D. ATIS continues to broadcast current weather only — operational information is removed'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 and AIP: when control zones are deactivated, the ATIS may be used to broadcast operational information of an unchanging nature including CTAF pilot activated lighting frequency, preferred runways, noise abatement procedures, and expected tower reopening time.',
  reference: 'VFRG v8.3 Chapter 5 / AIP ENR 1.1'
},

{
  question: 'Under AIP ENR 1.4, what ATC service is provided in Class D airspace?',
  options: [
    'A. Separation between all aircraft',
    'B. An air traffic control service where IFR flights are separated from other IFR and special VFR; IFR flights receive traffic information on VFR traffic; VFR flights receive traffic information on all other flights',
    'C. Traffic information only — no separation is provided',
    'D. Full separation as in Class C airspace'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.4 Class D separation: IFR flights are separated from other IFR and special VFR flights. IFR flights receive traffic information on VFR flights. VFR flights receive traffic information on all other flights. Special VFR flights are separated from other SVFR when visibility is less than VMC.',
  reference: 'AIP ENR 1.4 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under the VFRG v8.3, what maximum speed applies to aircraft in Class D airspace at or below 2,500 ft AAL within 4 NM of the primary Class D aerodrome?',
  options: [
    'A. 250 kt',
    'B. 300 kt',
    'C. 180 kt',
    'D. 200 kt'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 / Part 91 MOS Table 4.02(1): in Class D airspace at or below 2,500 ft AAL within 4 NM of the primary Class D aerodrome, the maximum IAS is 200 kt.',
  reference: 'VFRG v8.3 Chapter 3 / Part 91 MOS 2020 s.4.02 Table 4.02(1)'
},

{
  question: 'Under AIP ENR 1.4, what constitutes a clearance to enter Class D airspace for an arriving aircraft?',
  options: [
    'A. Receiving the ATIS code constitutes clearance',
    'B. Establishing two-way radio communications with the ATC tower',
    'C. Squawking 3000 on the transponder',
    'D. A specific ATC clearance using the phrase "Cleared to enter Class D"'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1 and VFRG v8.3: for entry into Class D airspace, establishing two-way communications between the aircraft and ATC constitutes a clearance for the aircraft to enter the Class D airspace.',
  reference: 'AIP ENR 1.4 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR 91.365, when taxiing on the movement area and not operating under an ATC clearance, a pilot must give way to which aircraft?',
  options: [
    'A. Only aircraft that are taking off',
    'B. Landing aircraft or those on final approach; aircraft taking off or preparing to take off; and the aircraft on the right on a converging course',
    'C. All aircraft regardless of their position',
    'D. Only aircraft larger than the taxiing aircraft'
  ],
  correct: 1,
  explanation: 'CASR 91.365 / VFRG v8.3: when taxiing without ATC clearance, the pilot must give way to landing aircraft or those on final approach; aircraft taking off or preparing to take off; keep well clear when overtaking; give way to the right when on a converging course; and stop or turn right to remain clear of head-on aircraft.',
  reference: 'CASR 91.365 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.565 and Part 91 MOS s.20.06, what must passenger safety briefings include before take-off?',
  options: [
    'A. Aircraft weight and balance only',
    'B. Instructions about controls, smoking rules, seat belts, brace position, emergency exits, oxygen (if fitted), baggage stowage, and life jackets (if carried)',
    'C. Only the location of emergency exits',
    'D. A briefing is only required if passengers have not flown before'
  ],
  correct: 1,
  explanation: 'CASR 91.565 / Part 91 MOS s.20.06: the pre-take-off passenger safety briefing must cover: not manipulating controls; smoking rules; seat belt use; brace position; emergency exits and evacuation; oxygen use (if carried); baggage stowage; and life jacket use and no inflation in aircraft (if life jackets are carried).',
  reference: 'CASR 91.565 / Part 91 MOS 2020 s.20.06 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR 91.273 and Part 91 MOS s.13.02, how frequently must a VFR pilot fix the aircraft\'s position when navigating by visual reference?',
  options: [
    'A. Every 15 minutes',
    'B. Continuously',
    'C. At intervals not exceeding 30 minutes',
    'D. Every 10 NM'
  ],
  correct: 2,
  explanation: 'CASR 91.273 / Part 91 MOS s.13.02: when navigating by visual reference to the ground or water, a pilot must positively fix the aircraft\'s position by visual reference to features marked on topographical charts at intervals not exceeding 30 minutes.',
  reference: 'CASR 91.273 / Part 91 MOS 2020 s.13.02 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under Part 91 MOS s.10.05, what accuracy is required of a VFR altimeter when checked against an accurate QNH at the aerodrome?',
  options: [
    'A. Within 200 ft',
    'B. Within 50 ft',
    'C. Within 100 ft (or 110 ft at test sites above 3,300 ft)',
    'D. Within 500 ft'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.10.05: an altimeter used for a VFR flight is only operative if, with an accurate QNH set, it reads site elevation to within 100 ft, or 110 ft at test sites above 3,300 ft.',
  reference: 'Part 91 MOS 2020 s.10.05 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under the VFRG v8.3, when must a pilot change from QNH to 1,013.2 hPa on climb?',
  options: [
    'A. Exactly at the transition altitude',
    'B. After passing 10,000 ft and before levelling off at or above the transition altitude',
    'C. At FL100 only',
    'D. When receiving clearance to climb above the transition altitude'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.7: on climb, the pilot must change from QNH to 1,013.2 hPa after passing 10,000 ft and before levelling off. On descent, change from 1,013.2 hPa to QNH before entering the transition layer.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.7'
},

{
  question: 'Under CASR 91.705, may an aircraft take off with frost on the wings?',
  options: [
    'A. Yes — light frost is permitted for day VFR operations',
    'B. Yes — provided the frost is less than 3 mm thick',
    'C. No — there must be no frost, ice or snow adhering to wings, flaps, control surfaces, propellers, rotors, or horizontal/vertical stabilisers before take-off (unless the AFM authorises operation in those conditions)',
    'D. Yes — provided the pilot has assessed it will clear during the take-off run'
  ],
  correct: 2,
  explanation: 'CASR 91.705 / VFRG v8.3: before beginning a flight, there must be no frost, ice or snow adhering to the aircraft\'s wings, flaps, control surfaces, rotors, propellers, and horizontal or vertical stabilisers. Exception: if take-off is conducted in accordance with AFM procedures for those conditions.',
  reference: 'CASR 91.705 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under AIP ENR 1.5 (VFRG v8.3), what aerodrome ground signal indicates gliding operations are in progress?',
  options: [
    'A. A white cross (×) on the signal square',
    'B. A horizontal white dumb-bell',
    'C. A white double cross (××)',
    'D. A white disc symbol depicting a glider wing shape on the signal square'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 1 / AIP ENR 1.5: a disc-shaped symbol (depicting a glider — specifically a white disc with a glider wing) displayed near the wind direction indicator indicates that gliding operations are in progress.',
  reference: 'AIP ENR 1.5 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under AIP ENR 1.5, what does a white cross (×) on the signal square at an aerodrome indicate?',
  options: [
    'A. Runway designated for helicopter operations only',
    'B. The aerodrome or manoeuvring area is unserviceable — do not land',
    'C. Special VFR operations only',
    'D. Aerodrome is temporarily closed for maintenance — permission required for landing'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.5 / VFRG v8.3: a white cross on the signal square indicates the aerodrome or manoeuvring area is unserviceable and landing is not permitted.',
  reference: 'AIP ENR 1.5 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.1.4, what type of information can a CPL candidate be expected to decode from ERSA?',
  options: [
    'A. ERSA is only used for IFR pilots',
    'B. ERSA contains runway data, radio frequencies, CTAF, aerodrome elevation, procedures, restricted and danger area information, and must be used for pre-flight planning at non-controlled aerodromes',
    'C. ERSA provides weather information only',
    'D. ERSA is now replaced by NAIPS and no longer required'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.1.4 requires pilots to decode information in ERSA. ERSA (En Route Supplement Australia) contains runway data, radio frequencies, CTAF, elevation, NOTAMs, restricted and danger area details, and is mandatory for pre-flight planning at non-controlled aerodromes.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.1.4 / VFRG v8.3'
},

{
  question: 'Under the VFRG v8.3, what is the correct tier structure of Australian aviation legislation?',
  options: [
    'A. CASR → AIP → CAO → Advisory Circulars',
    'B. Tier 1: Civil Aviation Act and Airspace Act; Tier 2: CAR and CASR; Tier 3: MOS, CAO and other instruments',
    'C. ICAO Annexes → Civil Aviation Act → AIP → ERSA',
    'D. ICAO standards form Tier 1; CASR forms Tier 2; CAO forms Tier 3'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 1 aviation legislation structure: Tier 1 — Civil Aviation Act 1988 and Airspace Act 2007 (primary legislation); Tier 2 — Civil Aviation Regulations 1988 (CAR) and Civil Aviation Safety Regulations 1998 (CASR); Tier 3 — Manual of Standards (MOS), Civil Aviation Orders (CAO), and other instruments.',
  reference: 'VFRG v8.3 Chapter 1'
},

{
  question: 'Under the VFRG v8.3, what is an Advisory Circular (AC) in the context of Australian aviation legislation?',
  options: [
    'A. A legally binding regulation under the CASR',
    'B. Advisory material that provides advice and guidance illustrating a means (but not necessarily the only means) of complying with regulations, or explains regulatory requirements',
    'C. An instruction issued by ATC only during emergencies',
    'D. A permanent instrument that supersedes CAOs'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 1: an Advisory Circular (AC) provides advice and guidance to illustrate a means (but not necessarily the only means) of complying with the regulations, or to explain certain regulatory requirements. ACs are advisory, not mandatory.',
  reference: 'VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.606 and AIP ENR 1.14, how must an Immediately Reportable Matter (IRM) be reported to the ATSB?',
  options: [
    'A. Written report only, within 72 hours',
    'B. By telephone as soon as practicable (immediately), followed by a written report within 72 hours',
    'C. By NOTAM through Airservices Australia',
    'D. By radio on 121.5 MHz during the occurrence'
  ],
  correct: 1,
  explanation: 'CASR 91.606 / VFRG v8.3: IRMs require immediate (as soon as practical) reporting by telephone to the ATSB, followed by a written report within 72 hours (preferably using the ASIR format). Routinely Reportable Matters (RRMs) only require a written report within 72 hours.',
  reference: 'CASR 91.606 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under the VFRG v8.3, which of the following is an example of an Immediately Reportable Matter (IRM) under the TSI Act?',
  options: [
    'A. A minor bird strike without damage',
    'B. A death or serious injury caused by contact with an aircraft or jet blast; an aircraft believed missing; aircraft damage; or breakdown of separation standards in a control area',
    'C. A late landing after the nominated SARTIME',
    'D. A navigation equipment malfunction that was reported to ATC'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.14: examples of IRMs include: a death or serious injury caused by contact with an aircraft, jet blast or component; an aircraft believed missing; an aircraft suffering damage; a breakdown of separation standards in a CTA.',
  reference: 'VFRG v8.3 Chapter 1 / AIP ENR 1.14'
},

{
  question: 'Under Part 91 MOS s.7.02 and VFRG, for how long before and after ETA must an authorised weather forecast be valid?',
  options: [
    'A. Valid for the entire flight time',
    'B. Valid for at least 30 minutes before and 60 minutes after the planned ETA',
    'C. Valid for at least 1 hour before and 2 hours after ETA',
    'D. Valid from departure time until 30 minutes after ETA'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 2 / Part 91 MOS: an authorised weather forecast used to satisfy the requirements for the destination must be valid for at least 30 minutes before and 60 minutes after the planned ETA.',
  reference: 'VFRG v8.3 Chapter 2 / Part 91 MOS 2020 s.7.02'
},

{
  question: 'Under VFRG v8.3, if a pre-flight briefing is obtained more than 1 hour before taxiing, what is required before departure?',
  options: [
    'A. A new full briefing must be obtained',
    'B. An update must be obtained before departure via NAIPS, telephone, or radio',
    'C. The original briefing remains valid for 3 hours',
    'D. The pilot must re-file the flight plan'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 2: if the pre-flight briefing is obtained more than one hour before taxiing for departure, the pilot must obtain an update before departure to ensure the latest information is available.',
  reference: 'VFRG v8.3 Chapter 2'
},

{
  question: 'Under CASR 91.565, what is the rule regarding smoking in an aircraft?',
  options: [
    'A. Smoking is permitted in the rear of the aircraft during cruise',
    'B. No smoking during take-off and landing, or at any other time the pilot in command directs; passengers must be briefed on smoking rules before take-off',
    'C. Smoking is prohibited on all Australian-registered aircraft at all times',
    'D. Smoking rules only apply to RPT operations'
  ],
  correct: 1,
  explanation: 'CASR 91.565 / VFRG v8.3: passengers must not smoke during take-off and landing, or at any other time the pilot in command so directs. The no-smoking instruction forms part of the mandatory pre-take-off passenger safety briefing.',
  reference: 'CASR 91.565 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR Part 99 and VFRG, what regime applies to pilot drug and alcohol testing in Australia?',
  options: [
    'A. Drug testing only applies to RPT operations',
    'B. Piloting is a safety-sensitive aviation activity and CASR Part 99 establishes a regime for random drug and alcohol testing conducted for or on behalf of CASA of all pilots in Australia',
    'C. Drug testing is voluntary and only conducted following incidents',
    'D. Drug testing applies only to pilots working for AOC holders'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 1 / CASR Part 99: piloting an aircraft is a safety-sensitive aviation activity and pilots must comply with CASR Part 99. CASR Part 99 establishes a regime for random drug and alcohol testing conducted for or on behalf of CASA of all pilots in Australia.',
  reference: 'CASR Part 99 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under AIP, what defines a "non-controlled aerodrome"?',
  options: [
    'A. An aerodrome with no instrument approaches',
    'B. An aerodrome where air traffic control is not currently operating — this can be an aerodrome always in Class G, a tower aerodrome with ATC temporarily unavailable, or one where ATC service is temporarily inactive',
    'C. Any aerodrome below 1,000 ft AMSL',
    'D. A private strip not listed in ERSA'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3: a non-controlled aerodrome is one where ATC is not currently operating. This can be an aerodrome always in Class G airspace, an aerodrome with a control tower where ATC is not currently operating, or an aerodrome where ATC service is temporarily unavailable.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.4'
},

{
  question: 'Under CASR 91.185 and VFRG, what is the minimum height for aerobatic manoeuvres unless an endorsement permits lower?',
  options: [
    'A. 500 ft AGL',
    'B. 1,000 ft AGL',
    'C. 3,000 ft AGL',
    'D. 1,500 ft AGL'
  ],
  correct: 2,
  explanation: 'CASR 91.185 / VFRG v8.3: pilots must not engage in aerobatic flight below 3,000 ft AGL unless their aerobatic activity endorsement permits lower heights. Aerobatic manoeuvres are defined as those with bank angles greater than 60°, pitch angles greater than 45°, or abrupt changes.',
  reference: 'CASR 91.185 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under VFRG v8.3 and AIP, what is the primary source of wake turbulence hazard in the circuit at a non-controlled aerodrome?',
  options: [
    'A. Light aircraft in the circuit only',
    'B. Helicopters hovering or slow air-taxiing creating rotor downwash; in forward flight, helicopters produce vortices similar to fixed-wing aircraft',
    'C. Wake turbulence only exists above FL100',
    'D. Wake turbulence is only an issue in controlled airspace where separation standards apply'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3: a hovering or slow air-taxiing helicopter creates rotor downwash that can be a hazard to nearby aircraft. In forward flight, helicopters produce vortices similar to those produced by fixed-wing aircraft. Pilots of small aircraft should avoid operating close to helicopters.',
  reference: 'VFRG v8.3 Chapter 3'
},

{
  question: 'Under Part 91 MOS s.8.05(2) and VFRG, for a VFR flight by night, a destination alternate must be within what distance of the destination?',
  options: [
    'A. 50 NM',
    'B. 1 hour\'s flight time of the planned destination aerodrome',
    'C. 2 hours flight time',
    'D. 30 minutes flight time'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.05(2) / VFRG v8.3: for a VFR flight by night, the pilot must nominate a destination alternate that is within 1 hour\'s flight time of the planned destination aerodrome, unless the destination is served by a ground-based radio navigation aid and the aircraft is appropriately equipped and the pilot is competent to use it.',
  reference: 'Part 91 MOS 2020 s.8.05(2) / VFRG v8.3 Chapter 2'
},

{
  question: 'Under CASR Part 61 and Part 61 MOS Schedule 3 Unit 1.5.9, what does the CPL aeroplane air law syllabus require pilots to understand about general competency and flight reviews?',
  options: [
    'A. Flight reviews are optional after obtaining a CPL',
    'B. Pilots must describe the obligations they must comply with regarding general competency, flight reviews and proficiency checks under CASR Part 61',
    'C. Only ATPL holders require biennial flight reviews',
    'D. Flight reviews are only required after an incident or accident'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.1.2: the CPL aeroplane air law syllabus requires pilots to describe the obligations they must comply with regarding general competency, flight reviews, and proficiency checks under CASR Part 61.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.1.2'
},

{
  question: 'Under CASR 91.205, when may a pilot fly an aircraft in formation?',
  options: [
    'A. At any time provided all pilots have CPL or higher',
    'B. Only if the formation has been prearranged with the other pilots making up the formation, and at night or in IMC only with a CASA approval',
    'C. Formation flying requires an AOC approval at all times',
    'D. Formation flying is permitted any time if all pilots have a formation endorsement'
  ],
  correct: 1,
  explanation: 'CASR 91.205 / VFRG v8.3: a pilot may only fly in formation if the flight has been prearranged with the other pilots in the formation. Formation flying at night or in IMC requires a CASA approval. A flight activity endorsement is also required under CASR 61.380.',
  reference: 'CASR 91.205 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under Part 91 MOS s.11.10(2)(a), after a radio failure in VFR Class G airspace, as soon as practicable, the pilot must descend below what height over land?',
  options: [
    'A. 1,000 ft AGL',
    'B. 3,000 ft AGL',
    'C. 5,000 ft AMSL',
    'D. The transition altitude'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.11.10(2)(a)(iv): after radio failure in VFR Class G or E airspace, the pilot must as soon as practicable descend below 3,000 ft AGL over land (or 3,000 ft AMSL over water within 10 NM of the coast). This is to avoid conflicting with IFR traffic.',
  reference: 'Part 91 MOS 2020 s.11.10(2)(a)(iv)'
},

{
  question: 'Under Part 91 MOS s.11.17(1A), in which class of airspace may an IFR pilot request a clearance for VFR climb or descent?',
  options: [
    'A. Class A airspace only',
    'B. Class C or Class E airspace',
    'C. Class D or Class E airspace',
    'D. Any controlled airspace'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.11.17(1A): an IFR pilot may only request a clearance for a VFR climb or VFR descent in a control area that is Class D or Class E airspace.',
  reference: 'Part 91 MOS 2020 s.11.17(1A)'
},

{
  question: 'Under Part 91 MOS s.26.32(b), which multi-engine turbine aeroplanes must be fitted with a CVR regardless of MTOW?',
  options: [
    'A. All multi-engine turbine aeroplanes',
    'B. Multi-engine turbine aeroplanes with a MOPSC of more than 9 that are pressurised, type-certificated for more than 11 seats, and first issued a C of A after 1 January 1988',
    'C. Only aeroplanes with MTOW above 10,000 kg',
    'D. CVRs are only required if an FDR is also required'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.32(b): a CVR must be fitted to a multi-engine turbine-powered aeroplane with a MOPSC greater than 9 that is pressurised and type-certificated for more than 11 seats and was first issued a C of A after 1 January 1988 — regardless of MTOW.',
  reference: 'Part 91 MOS 2020 s.26.32(b)'
},

{
  question: 'Under CASR 91.395 (VFRG v8.3), an aircraft making a straight-in approach at a non-controlled aerodrome must give way to which aircraft?',
  options: [
    'A. All IFR aircraft only',
    'B. Any other aircraft flying in the circuit pattern for the aerodrome',
    'C. Aircraft on the downwind leg only',
    'D. No other aircraft — straight-in approaches have priority'
  ],
  correct: 1,
  explanation: 'CASR 91.395 / VFRG v8.3: the aircraft making the straight-in approach must give way to any other aircraft flying in the circuit pattern for the aerodrome. An aircraft on base or final leg has right-of-way over a straight-in aircraft.',
  reference: 'CASR 91.395 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under Part 91 MOS s.21.05(1) and Table 21.05(1), when must a controlled aircraft report "leaving controlled airspace on descent"?',
  options: [
    'A. Only when requested by ATC',
    'B. Before leaving controlled airspace on descent — as specified in Table 21.05(1) Item 10',
    'C. Only for IFR flights',
    'D. After leaving controlled airspace'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.05(1) Item 10: the pilot must report the situation before leaving controlled airspace on descent. Note in the table: to ensure separation with aircraft near the base of controlled airspace is not compromised, the report is made to the ATS for the Class G airspace the aircraft will descend into.',
  reference: 'Part 91 MOS 2020 s.21.05(1) Table 21.05(1) Item 10'
},

{
  question: 'Under CASR Part 91 and VFRG, what is the meaning of "area QNH"?',
  options: [
    'A. The QNH set in the altimeter for the destination aerodrome',
    'B. An atmospheric pressure adjusted to sea level and forecast by the BOM that is representative, within ±5 hPa, of the actual QNH at any location within a QNH area',
    'C. The QNH measured at the departure aerodrome only',
    'D. A military QNH used for classified operations only'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / Part 91 MOS: area QNH is an altimeter setting forecast by the Bureau of Meteorology and representative, within ±5 hPa, of any actual QNH at any location within the QNH geographical area published in the AIP.',
  reference: 'VFRG v8.3 Chapter 3 / Part 91 MOS 2020 s.1.07'
},

{
  question: 'Under Part 91 MOS s.26.19, when may an aircraft begin a flight with inoperative radiocommunications?',
  options: [
    'A. Never — a serviceable radio is always required',
    'B. When specific conditions are met as detailed in s.26.19 — including that the flight is wholly in Class G, the aerodrome requires no radio, and the pilot has alternative means of communication',
    'C. For VFR day flights under 5,000 ft anywhere in Australia',
    'D. For training flights only when authorised by the flying school'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.19: an aircraft may begin a flight with inoperative radiocommunications in specified circumstances. The section specifies conditions including the class of airspace, aerodrome type, and availability of alternative communication means.',
  reference: 'Part 91 MOS 2020 s.26.19'
},

{
  question: 'Under CASR 91.380 and VFRG, what is the general rule regarding take-off and landing direction?',
  options: [
    'A. Downwind operations are equally valid if the headwind component is less than 5 kt',
    'B. To the extent practicable, take off and land into wind — unless the AFM allows downwind/crosswind and traffic conditions permit',
    'C. The pilot always uses the longest available runway regardless of wind',
    'D. ATC assigns the runway direction — the pilot has no discretion'
  ],
  correct: 1,
  explanation: 'CASR 91.380 / VFRG v8.3: to the extent practicable, pilots must land and take off into wind, unless the aircraft\'s AFM/POH allows a downwind or crosswind take-off/landing, and the pilot is satisfied that traffic conditions at the aerodrome allow it safely.',
  reference: 'CASR 91.380 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under Part 91 MOS Table 26.69(7) Item 4, which transponder code is used for flights in Class G over water at more than 15 NM from shore?',
  options: [
    'A. 1200',
    'B. 7000',
    'C. 2000',
    'D. 4000'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 26.69(7) Item 4: for flights in Class G over water at a distance greater than 15 NM from shore, the Mode A code is 4000.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 4'
},

{
  question: 'Under CASR 91.330 right-of-way rules, a powered aircraft is approaching on a converging course with a glider at the same altitude. Which must give way?',
  options: [
    'A. The glider must give way to the more manoeuvrable powered aircraft',
    'B. The powered aircraft must give way to the unpowered glider',
    'C. The smaller aircraft gives way to the larger',
    'D. The aircraft on the right gives way'
  ],
  correct: 1,
  explanation: 'CASR 91.330 Item 5: unpowered gliders have priority over power-driven aircraft. In the right-of-way hierarchy, an unpowered glider ranks higher than any power-driven aircraft. The powered aircraft must give way to the glider.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under the VFRG v8.3, how frequently will hazard alerts typically be repeated on the ATS frequencies following the initial transmission?',
  options: [
    'A. Every 5 minutes for 1 hour',
    'B. At H+15 and H+45 in the hour following initial transmission, ceasing after 1 hour or when an updated MET product or NOTAM is available',
    'C. Continuously until cancelled by the pilot',
    'D. Only once — the pilot is responsible for monitoring'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 2 / AIP GEN 3.3: hazard alerts will be repeated at H+15 and H+45 in the hour following the initial transmission, normally ceasing after one hour or after an updated MET product or NOTAM is available for dissemination.',
  reference: 'AIP GEN 3.3 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under VFRG v8.3, what is the recommended procedure when arriving at an unfamiliar non-controlled aerodrome to determine circuit direction?',
  options: [
    'A. Join the downwind leg at circuit height and observe the windsock',
    'B. Overfly or circle the aerodrome at least 500 ft above circuit altitude (typically 2,000 ft or more above elevation), determine the circuit direction, then position to a clear point before descending to circuit height',
    'C. Land on any runway and call the circuit direction on CTAF',
    'D. Contact the nearest ATC facility for circuit information'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3: where the aerodrome layout or circuit direction cannot be ascertained prior to arrival, the pilot should overfly or circle the aerodrome at least 500 ft above circuit altitude (which may be 2,000 ft or more above elevation). Once the circuit direction is determined, position to the non-active side before descending.',
  reference: 'VFRG v8.3 Chapter 3 / AC 91-10'
},

{
  question: 'Under AC 91-10 and VFRG v8.3, what is the correct sequence for a standard CTAF broadcast at a non-controlled aerodrome?',
  options: ['A. Callsign, aircraft type, position/intentions, location', 'B. Location traffic, aircraft type, callsign, flight rules (if IFR), position/intentions, location', 'C. Position, callsign, fuel state, intentions', 'D. ATC unit, aircraft type, callsign, altitude, destination'],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 5 / AC 91-10: the standard broadcast format is — "(Location) traffic, (aircraft type), (callsign), (flight rules — only if IFR), (position/intentions), (location)." For example: "Parkes traffic, Cessna 172, Zulu Tango Quebec, ten miles north descending inbound circuit three-six, Parkes."',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'Under VFRG v8.3 and AC 91-10, when should a straight-in approach broadcast be made at a non-controlled aerodrome?',
  options: ['A. On final approach at any distance from the aerodrome', 'B. When joining the circuit downwind leg', 'C. On final approach at not less than 3 NM from the threshold', 'D. 10 NM from the aerodrome reference point'],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 5 / AC 91-10: a straight-in approach broadcast should be made on final approach at not less than 3 NM from the threshold.',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'Under VFRG v8.3, when should a pilot broadcast when joining the circuit at a non-controlled aerodrome?',
  options: ['A. After turning final', 'B. Immediately before joining the circuit', 'C. When 10 NM from the aerodrome', 'D. Only if other traffic is heard on CTAF'],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 5: recommended broadcasts include "immediately before joining the circuit" and "immediately before entering a runway."',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'Under Part 91 MOS s.26.49 and VFRG v8.3, on which frequencies must an ELT transmit when activated?',
  options: ['A. 121.5 MHz only', 'B. 406 MHz only', 'C. Simultaneously on both 121.5 MHz and 406 MHz', 'D. 243 MHz and 406 MHz'],
  correct: 2,
  explanation: 'Part 91 MOS s.26.49 / VFRG v8.3: an ELT must simultaneously transmit on 121.5 MHz and 406 MHz when activated. The 406 MHz signal is processed by COSPAS-SARSAT for position determination.',
  reference: 'Part 91 MOS 2020 s.26.49 / VFRG v8.3 Chapter 7'
},

{
  question: 'Under VFRG v8.3, for how long must an ELT operate continuously once activated?',
  options: ['A. 6 hours', 'B. 48 hours', 'C. At least 24 hours', 'D. At least 72 hours'],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 7: ELTs must operate continuously for at least 24 hours once activated.',
  reference: 'VFRG v8.3 Chapter 7'
},

{
  question: 'Under Part 91 MOS s.26.48 and VFRG v8.3, is a single-seat aircraft required to carry an ELT?',
  options: ['A. Yes — all aircraft must carry an ELT regardless of seating', 'B. No — the ELT requirement does not apply to single-seat aircraft', 'C. Only if the single-seat aircraft flies beyond 50 NM from departure', 'D. Only if the aircraft is used for commercial operations'],
  correct: 1,
  explanation: 'VFRG v8.3 / Part 91 MOS: as a minimum, all aircraft other than single-seat aircraft must be fitted with an automatic ELT or carry a survival ELT.',
  reference: 'Part 91 MOS 2020 s.26.48 / VFRG v8.3 Chapter 7'
},

{
  question: 'Under Part 91 MOS s.26.52 and VFRG v8.3, under what circumstances may an aircraft fly with an ELT temporarily removed?',
  options: ['A. Never — an inoperative ELT must be replaced before the next flight', 'B. If the ELT has been temporarily removed for maintenance, a log entry is made, a placard stating no ELT is fitted is placed in the aircraft, and no more than 90 days have passed', 'C. The aircraft may fly for up to 30 days with no ELT under an MEL deferral', 'D. If the pilot carries a personal PLB as a substitute'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.52: an aircraft may fly with an ELT temporarily removed for maintenance if a log entry is made, a "no ELT" placard is placed in the aircraft, and no more than 90 days have passed since removal.',
  reference: 'Part 91 MOS 2020 s.26.52 / VFRG v8.3 Chapter 7'
},

{
  question: 'Under CASR 91.680 and VFRG, if dangerous goods are carried and an emergency occurs, what must the pilot advise ATS?',
  options: ['A. Nothing specific — dangerous goods do not affect ATC procedures', 'B. The nature and state of the dangerous goods, in addition to advising of the emergency', 'C. Only that dangerous goods are on board, without specifying type', 'D. Dangerous goods information must be withheld for security reasons'],
  correct: 1,
  explanation: 'CASR 91.680 / VFRG v8.3: if dangerous goods are carried and an emergency is relevant to those goods, the pilot must advise ATS of both the emergency and the nature and state of the dangerous goods.',
  reference: 'CASR 91.680 / VFRG v8.3 Chapter 7'
},

{
  question: 'Under Part 91 MOS s.9.02(2)(b) and VFRG, when is flight notification required for a VFR over-water flight?',
  options: ['A. All over-water flights regardless of distance', 'B. When the flight is conducted at a distance from land greater than that which would allow the aircraft to reach land with an engine inoperative', 'C. Only for flights more than 50 NM offshore', 'D. Only for night over-water flights'],
  correct: 1,
  explanation: 'Part 91 MOS s.9.02(2)(b): flight notification is required for a VFR over-water flight conducted beyond a distance from land greater than that which would allow the aircraft to reach land with an engine inoperative.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(b) / VFRG v8.3 Chapter 2'
},

{
  question: 'Under Part 91 MOS s.9.02(2)(c), what flight notification requirement applies to VFR flights in designated remote areas?',
  options: ['A. No additional requirement beyond Class G airspace rules', 'B. The pilot must submit a flight plan or SARTIME before the flight', 'C. A flight plan must be filed with CASA headquarters', 'D. The pilot must carry an EPIRB in addition to an ELT'],
  correct: 1,
  explanation: 'Part 91 MOS s.9.02(2)(c): a VFR flight in a designated remote area requires the pilot to ensure either a flight plan has been submitted or a SARTIME has been nominated.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(c) / VFRG v8.3 Chapter 2'
},

{
  question: 'Under CASR 91.110 and VFRG, for a VFR flight tracking beyond 50 NM, what must be carried?',
  options: ['A. Only the flight plan', 'B. Applicable AIP information (charts and aeronautical information for the route and probable diversions) and either the aircraft technical log or maintenance release', 'C. Weather forecasts only', 'D. A copy of CASR Part 91'],
  correct: 1,
  explanation: 'VFRG v8.3 / CASR 91.110: for VFR flights beyond 50 NM, the pilot must carry applicable AIP information and either the aircraft technical log or maintenance release.',
  reference: 'CASR 91.110 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under CASR Part 61 MOS Schedule 3 Unit 1.5.8, which documents must be carried on board during flight in Australian airspace?',
  options: ['A. Certificate of Airworthiness, Certificate of Registration, maintenance release, crew licences and medicals, radio station licence, journey log (if international), and applicable AIP information', 'B. Flight plan and maintenance release only', 'C. Crew licences only', 'D. A copy of CASR and CAO 48.1'],
  correct: 0,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 / CASR Part 91: required documents include Certificate of Airworthiness, Certificate of Registration, maintenance release, flight crew licences and medicals, radio station licence, journey log (international), and applicable AIP information.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 / CASR Part 91'
},

{
  question: 'Under CASR Part 61, what is required for a CPL holder to conduct single-engine aeroplane night VFR operations?',
  options: ['A. No additional endorsement — CPL privileges include night operations', 'B. A single-engine aeroplane night VFR endorsement under CASR Part 61', 'C. An IFR rating is required for all night operations', 'D. A night VFR flight review only — no formal endorsement required'],
  correct: 1,
  explanation: 'CASR Part 61 / VFRG v8.3: to conduct night VFR operations in a single-engine aeroplane, a pilot requires a single-engine aeroplane night VFR endorsement, which requires at least 5 hours night experience including 1 hour dual, 1 hour solo night circuits, and 3 hours dual instrument time.',
  reference: 'CASR Part 61 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR Part 61, what is the minimum recent experience for night VFR PIC currency?',
  options: ['A. Same as day VFR — 3 take-offs and landings in 90 days', 'B. 3 take-offs and landings at night in the preceding 90 days on the relevant aircraft category', 'C. 5 take-offs and landings at night in the preceding 180 days', 'D. 10 hours night flying in the preceding 12 months'],
  correct: 1,
  explanation: 'CASR Part 61: night VFR PIC currency requires 3 take-offs and 3 landings at night on the relevant aircraft category in the preceding 90 days, separately from day VFR recency.',
  reference: 'CASR Part 61 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under Part 91 MOS s.2.01(3), what conditions must a pilot comply with to operate under Special VFR in a control zone?',
  options: ['A. Be authorised by ATC; operate by day; fly clear of cloud; maintain at least 1,500 m flight visibility', 'B. Be authorised by ATC; operate at night only; maintain 5 km visibility', 'C. ATC clearance is not required for SVFR — it is self-authorised', 'D. Maintain VMC as specified in Table 2.07(3) for Class C airspace'],
  correct: 0,
  explanation: 'Part 91 MOS s.2.01(3): Special VFR requires (a) ATC authorisation; (b) day operation only; (c) clear of cloud; and (d) flight visibility at least 1,500 m.',
  reference: 'Part 91 MOS 2020 s.2.01(3)'
},

{
  question: 'Under AIP ENR 1.1 and VFRG, if an IFR aircraft suffers communication failure and no clearance limit has been received, what initial action is taken?',
  options: ['A. Hold at the last cleared waypoint for 30 minutes', 'B. Proceed in accordance with the latest ATC route clearance acknowledged and climb to planned level', 'C. Land immediately at the nearest aerodrome', 'D. Squawk 7700 and descend to MSA'],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: if no clearance limit has been received and acknowledged, the IFR pilot should proceed in accordance with the latest ATC route clearance acknowledged and climb to planned level.',
  reference: 'VFRG v8.3 Appendix / AIP ENR 1.1'
},

{
  question: 'Under AIP ENR 1.1, if communication failure occurs while holding in IFR, what action is required before proceeding?',
  options: ['A. Immediately proceed direct to destination', 'B. Fly one more complete holding pattern, then proceed in accordance with the latest ATC clearance acknowledged', 'C. Hold for 10 minutes then commence approach', 'D. Continue holding until fuel reaches minimum before diverting'],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: if communication failure occurs while holding, the pilot should fly one more complete holding pattern, then proceed in accordance with the latest ATC clearance acknowledged.',
  reference: 'VFRG v8.3 Appendix / AIP ENR 1.1'
},

{
  question: 'Under AIP ENR 1.1 and VFRG v8.3, what specific clearance is required before landing at a controlled aerodrome?',
  options: ['A. Obtaining the ATIS code is sufficient authority to land', 'B. The specific ATC clearance "Cleared to land" (or "Cleared touch and go" or "Cleared for the option") must be received', 'C. Two-way communication with the tower constitutes landing clearance', 'D. Landing clearance is only required for IFR aircraft'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: a pilot must not land unless the specific clearance "Cleared to land" (or "Cleared touch and go" or "Cleared for the option") has been received from ATC.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under AIP ENR 1.1 and VFRG v8.3, when must a pilot report "downwind" in the traffic circuit at a controlled aerodrome?',
  options: ['A. When reaching circuit height', 'B. When starting or entering the downwind leg — or "mid-downwind" or "late-downwind" if frequency congestion prevented the initial call', 'C. Only when directed by ATC', 'D. At 2 NM from the runway threshold'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: the pilot must report "downwind" when starting or entering the downwind leg. If frequency congestion prevents this, the pilot must report "mid-downwind" or "late-downwind."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under AIP ENR 1.1 and VFRG, what information must a VFR aircraft without flight notification provide on first ATC contact at a Class D aerodrome?',
  options: ['A. Full flight plan details including fuel on board', 'B. Aircraft callsign and "DETAILS" (wait for response), then destination and first tracking point, preferred level, and ATIS code received', 'C. ATIS code only', 'D. Callsign and type only'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: VFR aircraft without flight notification must provide: callsign and "DETAILS" (wait for ATC response), then destination and first tracking point, preferred level, and ATIS code received.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under AIP ENR 1.1 and VFRG, what normally comprises an airways clearance?',
  options: ['A. Aircraft identification and squawk code only', 'B. Aircraft identification, destination or clearance limit, route of flight, assigned level, SSR code, and frequency requirements', 'C. Runway assignment and departure heading', 'D. Level allocation and transponder code only'],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: an airways clearance normally contains: aircraft identification; destination, area of operation, or clearance limit; route of flight; assigned level; SSR code; and frequency requirements.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 5'
},

{
  question: 'Under the RPL/PPL/CPL Aeroplane Workbook v3.0a, what specific gravity is used for AVGAS in all loading systems?',
  options: ['A. 0.71 kg/litre', 'B. 0.80 kg/litre', 'C. 0.72 kg/litre', 'D. 0.78 kg/litre'],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook v3.0a: the specific gravity for AVGAS used in all loading systems is 0.72 kg/litre.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Loading System Bravo, what is the normal category maximum take-off weight?',
  options: ['A. 1,115 kg', 'B. 2,950 kg', 'C. 1,633 kg', 'D. 1,000 kg'],
  correct: 3,
  explanation: 'RPL/PPL/CPL Workbook Loading System Bravo: the maximum take-off weight for the normal category is 1,000 kg (2,200 lbs). The utility category limit is 841 kg (1,850 lbs).',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Bravo'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Loading System Charlie, the index units at take-off weight are 33,033.7 and take-off weight is 1,114.8 kg. What is the CG in mm aft of datum?',
  options: ['A. 2,964 mm', 'B. 2,963 mm', 'C. 3,004 mm', 'D. 2,896 mm'],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook Loading System Charlie: CG = Index Units x 100 / Weight = 33,033.7 x 100 / 1,114.8 = 2,963.20 mm aft of datum.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Charlie'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Loading System Echo, what is the maximum zero fuel weight?',
  options: ['A. 2,950 kg', 'B. 2,490 kg', 'C. 2,725 kg', 'D. 2,630 kg'],
  correct: 3,
  explanation: 'RPL/PPL/CPL Workbook Loading System Echo: MTOW 2,950 kg; maximum landing weight 2,725 kg; maximum zero fuel weight 2,630 kg.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Echo'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Loading System Charlie, which formula is used to calculate CG?',
  options: ['A. CG = Weight / Index Units', 'B. CG = Weight x Arm', 'C. CG (mm aft of datum) = Index Units x 100 / Weight', 'D. CG = Total Moment / Total Weight x 1,000'],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook Loading System Charlie: the formula is CG (mm aft of datum) = Index Units x 100 / Weight. Must be checked at both Zero Fuel Weight and Take-Off Weight.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Charlie'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Loading System Alpha, when must the two intersection points on the CG envelope be within limits?',
  options: ['A. Only at take-off weight', 'B. Only at zero fuel weight', 'C. Both at Zero Fuel Weight and at Take-Off Weight', 'D. Only at maximum take-off weight'],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook Loading System Alpha instruction 8: both the Zero Fuel Weight intersection point and the Take-Off Weight intersection point must lie within the CG envelope.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Alpha'
},

{
  question: 'Under the RPL/PPL/CPL Workbook v3.0a, the fuel policy for RPLA and PPLA exams follows which standard?',
  options: ['A. CASR Part 135 MOS Chapter 7 for all operations', 'B. CASR Part 91 MOS Chapter 19 Table 19.02 for aeroplane MTOW less than 5,700 kg (piston or turboprop) VFR by day', 'C. CAO 48.1 fuel requirements only', 'D. ICAO Annex 6 fuel standards'],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook v3.0a significant changes: fuel policy for RPLA and PPLA exams is CASR Part 91 MOS Chapter 19 Table 19.02 for aeroplane MTOW less than 5,700 kg piston or turboprop VFR by day.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Significant Changes'
},

{
  question: 'Under RPL/PPL/CPL Workbook Figure 3, the gross weight at take-off shall not exceed which of the following?',
  options: ['A. BEW plus maximum payload only', 'B. The lesser of values (A) and (B) from the chart, with a maximum of 1,090 kg', 'C. MTOW and MLW', 'D. ZFW plus maximum fuel only'],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook Figure 3 Notes: the gross weight at take-off shall not exceed the lesser of chart values (A) and (B). The maximum take-off weight is 1,090 kg.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Figure 3'
},

{
  question: 'Under the RPL/PPL/CPL Workbook Figure 12 (Aircraft Echo), what take-off distance factor is applied?',
  options: ['A. 1.15', 'B. 1.10', 'C. 1.22', 'D. 1.30'],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook Figure 12 (Take-off Weight Chart Aircraft Echo): the distance factor is 1.22.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Figure 12'
},

{
  question: 'Under CASR 91.635 and VFRG v8.3, what communication monitoring requirement applies in controlled airspace?',
  options: ['A. Pilots must monitor the CTAF for traffic information', 'B. The pilot or another pilot in a pilot seat must continuously monitor the primary communications medium used by ATC', 'C. Monitoring is required only on final approach at controlled aerodromes', 'D. Monitoring is only required for IFR flights in Class A airspace'],
  correct: 1,
  explanation: 'CASR 91.635 / VFRG v8.3: when flying in controlled airspace, the pilot (or another pilot in a pilot seat) must continuously monitor the primary communications medium used by ATC.',
  reference: 'CASR 91.635 / VFRG v8.3 Chapter 5'
},

{
  question: 'Under Part 91 MOS s.21.09 Table 21.09(1) Item 2, what broadcast must be made when joining a circuit in an MBA?',
  options: ['A. No broadcast is required when joining circuit in an MBA', 'B. A broadcast of the situation, indicating the circuit leg being joined and the runway', 'C. A broadcast of aircraft callsign and fuel state only', 'D. A broadcast identical to a controlled aerodrome downwind call'],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.09(1) Item 2: when joining a circuit in an MBA, the pilot must broadcast the situation and indicate the circuit leg being joined and the runway.',
  reference: 'Part 91 MOS 2020 s.21.09 Table 21.09(1) Item 2'
},

{
  question: 'Under CASR 91.265, what is the minimum height for an aeroplane over areas other than populous areas?',
  options: ['A. Not less than 1,000 ft AGL at all times', 'B. Not less than 500 ft above the highest obstacle within 150 m of the aircraft', 'C. Not less than 500 ft AGL over open country', 'D. Not less than 300 ft AGL at all times'],
  correct: 1,
  explanation: 'CASR 91.265: for areas other than populous areas or public gatherings, an aeroplane must not be flown at less than 500 ft above the highest obstacle within 150 m of the aircraft.',
  reference: 'CASR 91.265 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under CASR 91.710, if an aircraft not certified for icing conditions inadvertently enters icing conditions, what must the pilot do?',
  options: ['A. Descend immediately to warmer air below the icing layer', 'B. Change the aircraft\'s flight path to avoid the icing conditions as soon as practicable', 'C. Continue to the nearest aerodrome at best speed', 'D. Activate the pitot heat and continue'],
  correct: 1,
  explanation: 'CASR 91.710 / VFRG v8.3: if an aircraft not certified for icing conditions inadvertently enters icing conditions, the pilot must change the flight path to avoid them as soon as practicable.',
  reference: 'CASR 91.710 / VFRG v8.3 Chapter 2'
},

{
  question: 'Under AIP ENR 1.1 and VFRG, when must an airways clearance request be made?',
  options: ['A. At least 30 minutes before estimated departure time', 'B. On clearance delivery frequency immediately before starting engines; where none, before entering the departure runway; before entering controlled airspace', 'C. After engine start during taxi', 'D. When reaching the holding point of the runway'],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: airways clearance is requested on clearance delivery frequency immediately before starting engines (or as soon as possible thereafter); where no delivery frequency exists, before entering the departure runway; or before entering controlled airspace.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 5'
},

{
  question: 'Under Part 91 MOS s.11.12 and AIP ENR 1.1, when a taxi instruction includes a holding point, what phrase must specifically be read back?',
  options: ['A. The entire taxi clearance word for word', 'B. "Holding point (holding point designator)" must specifically be read back', 'C. The runway designation only', 'D. Readback is not required for taxi clearances'],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: when ATC issues a taxi instruction that includes a holding point, pilots must specifically read back "Holding point (holding point designator)."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under CASR 91.285, may a VFR aircraft fly in Class A airspace without specific approval?',
  options: ['A. Yes — VFR is permitted in Class A provided the aircraft has Mode C', 'B. No — VFR flight in Class A airspace must be specifically approved', 'C. VFR is permitted in Class A at and above FL245 only', 'D. VFR is never permitted in Class A airspace under any circumstances'],
  correct: 1,
  explanation: 'CASR 91.285 / VFRG v8.3: VFR flight in Class A airspace must be approved. VFR operations in Class A are exceptional.',
  reference: 'CASR 91.285 / VFRG v8.3 Chapter 3'
},

{
  question: 'Under ICAO Annex 2 and AIP, what is the correct distress message format?',
  options: ['A. "EMERGENCY EMERGENCY EMERGENCY — (callsign) — (nature of distress)"', 'B. "MAYDAY" repeated three times, followed by the callsign; and squawk 7700 on the transponder', 'C. "PAN PAN" repeated three times followed by callsign', 'D. "MAYDAY" transmitted once on 121.5 MHz only'],
  correct: 1,
  explanation: 'VFRG v8.3 / ICAO Annex 2: the distress signal by radiotelephony is "MAYDAY" repeated three times, followed by the aircraft callsign. Code 7700 is selected on the transponder.',
  reference: 'VFRG v8.3 Chapter 7 / ICAO Annex 2'
},

{
  question: 'Under CASR 91.700, if a distress signal was transmitted but the reason no longer exists, what must the pilot do?',
  options: ['A. Continue monitoring 121.5 MHz only', 'B. Cancel the distress signal as soon as circumstances permit', 'C. File a mandatory incident report within 24 hours', 'D. Land at the nearest aerodrome immediately'],
  correct: 1,
  explanation: 'CASR 91.700 / VFRG v8.3: if after making a distress signal the reason no longer exists, as soon as circumstances permit, the pilot must cancel the signal.',
  reference: 'CASR 91.700 / VFRG v8.3 Chapter 7'
},

{
  question: 'A piston-engine aeroplane MTOW 1,200 kg is on a VFR day flight. Fuel check shows that on landing, fuel remaining will be less than the 30-minute final reserve. What are the pilot\'s obligations under Part 91 MOS?',
  options: ['A. Continue to destination — final reserve may be used as emergency fuel', 'B. Request ATS advise any likely delay; consider diverting to maintain compliance with s.19.04(3); declare "minimum fuel" if committed to an aerodrome and any ATC clearance change would result in landing below final reserve', 'C. Declare MAYDAY immediately', 'D. Land at the nearest aerodrome within 5 minutes without notifying ATS'],
  correct: 1,
  explanation: 'Part 91 MOS s.19.06(1)-(3): if fuel on landing will be below the amount required by s.19.04(3), the pilot must consider operational conditions, may need to divert, must request ATS advice on likely delay, and if committed to an aerodrome must declare "minimum fuel" if any clearance change would result in landing below final reserve.',
  reference: 'Part 91 MOS 2020 s.19.06(1)-(3)'
},

{
  question: 'An aircraft in Class G VFR is tracking towards an activated Restricted Area. The pilot has no radio and cannot contact the controlling authority. What is the correct action?',
  options: ['A. Enter the area — Restricted Areas are only advisory for VFR aircraft', 'B. Avoid the area — entry to an activated Restricted Area without permission from the controlling authority is prohibited regardless of radio availability', 'C. Enter the area at low level only', 'D. Enter the area provided the flight is conducted clear of cloud'],
  correct: 1,
  explanation: 'CASR Part 91 / AIP ENR 2.1: entry to an activated Restricted Area without permission from the controlling authority is prohibited. If the controlling authority cannot be contacted, the pilot must remain outside.',
  reference: 'CASR Part 91 / AIP ENR 2.1'
},

{
  question: 'A CPL holder\'s Class 1 medical was issued when aged 41. How long is it valid for?',
  options: ['A. 12 months', 'B. 24 months', 'C. 6 months', 'D. 3 months'],
  correct: 2,
  explanation: 'CASR Part 67: Class 1 medicals are valid for 12 months for pilots under 40, and 6 months for pilots aged 40 and over. Issued at age 41 means 6 months validity.',
  reference: 'CASR Part 67'
},

{
  question: 'Under Part 91 MOS, an aircraft in RVSM airspace at FL350 drifts to FL352 due to autopilot failure. What is the required sequence of actions?',
  options: ['A. Squawk 7700 and request immediate descent', 'B. Inform ATC as soon as possible; obtain revised clearance before further deviation if possible; or if not possible, obtain it as soon as practicable after', 'C. Immediately offset laterally to avoid conflicting traffic', 'D. Descend to FL290 to exit RVSM airspace'],
  correct: 1,
  explanation: 'Part 91 MOS s.11.07(4): if the cleared FL cannot be maintained, the pilot must inform ATC as soon as possible and either obtain a revised clearance before deviation (preferred) or as soon as possible after.',
  reference: 'Part 91 MOS 2020 s.11.07(3)-(4)'
},

{
  question: 'A pilot starts an FDP at 0645 local with a two-pilot crew. Under CAO 48.1, what is the maximum FDP?',
  options: ['A. 11 hours', 'B. 14 hours', 'C. 13 hours', 'D. 12 hours'],
  correct: 2,
  explanation: 'CAO 48.1: for a standard start time (0600-0859 local), the maximum FDP for a two-pilot crew is 13 hours. Start time 0645 is a standard start.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under Part 91 MOS s.26.25(1), an unpressurised turbine-engine aeroplane is flying IFR in controlled airspace above FL150. Is altitude alerting required?',
  options: ['A. No — altitude alerting is only required for pressurised aircraft', 'B. Yes — an unpressurised turbine-engine aircraft in controlled airspace above FL150 must be fitted with altitude alerting equipment', 'C. Only if the aircraft MTOW is above 5,700 kg', 'D. No — unpressurised aircraft are exempt regardless of altitude'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.25(1)(b): an unpressurised turbine-engine aircraft operating in controlled airspace above FL150 must be fitted with altitude alerting equipment.',
  reference: 'Part 91 MOS 2020 s.26.25(1)(b)'
},

{
  question: 'Under CASR 91.330, two aircraft are on approach to land. The higher aircraft is in the final stages of its approach. What right-of-way rule applies?',
  options: ['A. The lower aircraft must give way to the higher aircraft in its final stages', 'B. The higher aircraft gives way to the lower, but the lower aircraft must not take advantage of this rule to cut in ahead of the higher aircraft in its final stages', 'C. The slower aircraft always gives way', 'D. The heavier aircraft has priority regardless of height'],
  correct: 1,
  explanation: 'CASR 91.330 / VFRG v8.3: the higher aircraft gives way to the lower. However, if the higher aircraft is in the final stages of its approach, the lower aircraft must not take advantage of this rule.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Under Part 91 MOS Table 19.02(2), a rotorcraft is conducting an IFR flight. What is the required final reserve fuel?',
  options: ['A. 30 minutes', 'B. 45 minutes', 'C. 20 minutes', 'D. 30 minutes with 5% contingency'],
  correct: 0,
  explanation: 'Part 91 MOS Table 19.02(2) Item 7: for a rotorcraft on an IFR flight, the final reserve fuel is 30 minutes. VFR rotorcraft (Item 6) require 20 minutes. No contingency fuel applies to rotorcraft.',
  reference: 'Part 91 MOS 2020 Table 19.02(2) Item 7'
},

{
  question: 'Under Part 91 MOS s.26.06(3) and s.26.08, which instruments are additionally required for VFR night flight compared to VFR day flight?',
  options: ['A. No additional instruments — day and night VFR requirements are identical', 'B. Turn and slip, attitude, vertical speed, stabilised heading, outside air temperature, gyroscope power supply indicator, and approved GNSS or ADF/VOR for navigation', 'C. Only an attitude indicator is added', 'D. ILS and DME receivers are required'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.06(3) and s.26.08: VFR night flight requires all day VFR instruments plus turn and slip, attitude (with alternate power), vertical speed, stabilised heading, OAT, gyroscope power adequacy indicator, and GNSS or ADF or VOR navigation.',
  reference: 'Part 91 MOS 2020 s.26.06(3) / s.26.08'
},

{
  question: 'Under CASR 91.635, what is the minimum height at which an aircraft may fly over a built-up area unless conducting a take-off or landing?',
  options: ['A. 500 ft AGL', 'B. 1,000 ft above the highest obstacle within 600 m', 'C. 1,500 ft AGL', 'D. 300 m above the highest obstacle within 300 m'],
  correct: 1,
  explanation: 'CASR 91.635: over a built-up area the aircraft must be at a height that would allow a safe forced landing if the engine fails, and not less than 1,000 ft above the highest obstacle within 600 m of the aircraft.',
  reference: 'CASR 91.635'
},

{
  question: 'A pilot holds a CPL and wishes to fly a passenger in a single-engine aircraft for hire and reward. Under CASR Part 61, which condition must be satisfied?',
  options: ['A. The pilot must also hold an ATPL', 'B. The pilot must hold at least a CPL with the appropriate aircraft category and class rating', 'C. The pilot must have completed 500 hours total time', 'D. A CPL is insufficient; an AOC is never needed for single-pilot operations'],
  correct: 1,
  explanation: 'CASR 61.390 and Part 135: to carry passengers for hire and reward the pilot must hold at least a CPL with the appropriate aircraft category and class rating. The operator also requires the relevant AOC, but the pilot licence requirement is a CPL.',
  reference: 'CASR 61.390 / CASR Part 135'
},

{
  question: 'Under AIP ENR 1.1, a VFR flight operating at or below 2,000 ft AGL is approaching Class D airspace. What is required before entry?',
  options: ['A. No clearance is needed below 2,000 ft', 'B. Two-way radio communication must be established and an ATC clearance obtained', 'C. Pilot must obtain an IFR clearance', 'D. Pilot need only broadcast intentions on CTAF'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and CASR 91.410: Class D airspace requires an ATC clearance and establishment of two-way radio communication before entry, regardless of altitude.',
  reference: 'AIP ENR 1.1 / CASR 91.410'
},

{
  question: 'Under Part 91 MOS s.19.02, what is the trip fuel requirement for an IFR flight in a turbine-engine aeroplane?',
  options: ['A. Fuel to reach destination at holding speed for 30 minutes', 'B. Fuel to fly from departure to destination at normal cruise, accounting for forecast winds and ATC routing', 'C. Fuel calculated at maximum range cruise only', 'D. Fuel to reach the first alternate aerodrome'],
  correct: 1,
  explanation: 'Part 91 MOS s.19.02 Table 19.02(1): trip fuel is the fuel required to fly from the point of departure to the destination, accounting for forecast meteorological conditions, anticipated ATC routing, and normal cruise fuel flow.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(1)'
},

{
  question: 'Under CASR 91.785, what documents must the pilot-in-command have access to during a flight?',
  options: ['A. Only the aircraft flight manual', 'B. Certificate of airworthiness, maintenance release, and crew licences', 'C. Certificate of registration, certificate of airworthiness or equivalent, and journey log or equivalent', 'D. Certificates of registration and airworthiness, maintenance release, AFM, and any required permits'],
  correct: 3,
  explanation: 'CASR 91.785: the PIC must have access to the certificate of registration, certificate of airworthiness (or special flight permit), maintenance release, AFM or equivalent, and any required exemption or permission.',
  reference: 'CASR 91.785'
},

{
  question: 'Under AIP ENR 1.4, what is the lateral extent of a Control Zone (CTR) and its purpose?',
  options: ['A. A CTR extends 5 NM from the ARP and protects IFR traffic during en-route cruise', 'B. A CTR is a specified volume of controlled airspace around one or more aerodromes to protect arriving and departing IFR traffic', 'C. A CTR is Class C airspace only and extends to FL245', 'D. A CTR has no defined lateral extent; it varies per aerodrome'],
  correct: 1,
  explanation: 'AIP ENR 1.4: a CTR is a volume of controlled airspace (usually Class C or D) extending from the surface upward around one or more aerodromes, protecting IFR arrivals and departures. Its dimensions are published in ERSA.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under CASR 91.615, what is the minimum visibility for VFR flight in Class G airspace at or below 1,000 ft AMSL during the day?',
  options: ['A. 5,000 m', 'B. 1,500 m', 'C. 800 m', 'D. 3,000 m'],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or below 1,000 ft AMSL (day VFR), the minimum flight visibility is 1,500 m.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What is the definition of "night" for the purpose of pilot recency and logging under CASR Part 61?',
  options: ['A. From 30 minutes after sunset to 30 minutes before sunrise', 'B. The period between end of evening civil twilight and commencement of morning civil twilight', 'C. The period between sunset and sunrise', 'D. Any time when the horizon is not clearly visible'],
  correct: 1,
  explanation: 'CASR Part 61 Dictionary and AIP GEN 2.1: "night" for flight crew licensing purposes means the period between the end of evening civil twilight and the beginning of morning civil twilight.',
  reference: 'CASR Part 61 Dictionary / AIP GEN 2.1'
},

{
  question: 'Under Part 91 MOS s.26.09, what lighting must a VFR aircraft display when operating at night?',
  options: ['A. Navigation lights only', 'B. Navigation lights and a flashing anti-collision light (strobe or rotating beacon)', 'C. Navigation lights, anti-collision light, and a landing light', 'D. Anti-collision light only is sufficient'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.09: an aircraft operating at night must display steady red and green navigation lights, a white rear-position light, and an anti-collision light (flashing strobe or rotating beacon).',
  reference: 'Part 91 MOS 2020 s.26.09'
},

{
  question: 'A SIGMET is issued for severe icing along your planned route. Under CASR 91.185, what obligation does this place on the PIC before departure?',
  options: ['A. SIGMETs are advisory only and impose no legal obligation', 'B. The PIC must assess whether the hazard can be avoided and must not commence the flight if the aircraft is not certified for the conditions', 'C. The PIC must obtain an alternate route clearance from ATC', 'D. The flight must be delayed until the SIGMET is cancelled'],
  correct: 1,
  explanation: 'CASR 91.185 and 91.465: the PIC must not commence or continue a flight into known icing conditions unless the aircraft is equipped and certificated for flight in those conditions. A SIGMET for severe icing requires assessment and may prohibit the flight.',
  reference: 'CASR 91.185 / 91.465'
},

{
  question: 'Under AIP ENR 1.1, what are the VMC requirements for a VFR flight in Class C airspace above FL200?',
  options: ['A. 3,000 m visibility, 1,000 ft vertical/1 NM horizontal cloud clearance', 'B. 8,000 m visibility, 1,000 ft vertical/1 NM horizontal cloud clearance', 'C. 5,000 m visibility, clear of cloud', 'D. 8 km visibility, 1,500 m horizontal/300 m vertical cloud clearance'],
  correct: 1,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class C airspace above FL200, VMC requires 8,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM horizontally.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 91.290, who is responsible for ensuring the aircraft is loaded within its weight and balance limits before flight?',
  options: ['A. The aircraft owner', 'B. The ground handling agent', 'C. The pilot-in-command', 'D. The maintenance organisation'],
  correct: 2,
  explanation: 'CASR 91.290: the pilot-in-command is responsible for ensuring the aircraft is loaded within its certified weight and balance limits before every flight.',
  reference: 'CASR 91.290'
},

{
  question: 'Under CASR 91.510, what is the requirement regarding the use of an automatic altitude-reporting transponder in Class A airspace?',
  options: ['A. A transponder is not required in Class A because all traffic is separated by ATC', 'B. An operative Mode C (altitude-reporting) transponder must be operated continuously', 'C. A Mode S transponder is required; Mode C is insufficient', 'D. A transponder is only required above FL250'],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: in Class A airspace, all aircraft must carry and operate a serviceable Mode C altitude-reporting transponder continuously.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'Under AIP ERSA, what does a red square with a yellow diagonal displayed on the signals area indicate?',
  options: ['A. The aerodrome is closed to all traffic', 'B. Landings are prohibited', 'C. Aircraft may take off and land but must exercise special caution due to poor surface or other hazard', 'D. Only military operations are permitted'],
  correct: 2,
  explanation: 'AIP ERSA GEN: a red square with a yellow diagonal on the signals area indicates that the state of the manoeuvring area is poor and pilots should exercise special caution when landing.',
  reference: 'AIP ERSA GEN / AIP GEN 1.5'
},

{
  question: 'Under CASR 91.750, what is the maximum period a maintenance release may remain in force before a periodic review is required for an RPT operation?',
  options: ['A. 12 months or the hours limit specified, whichever comes first', 'B. 100 flight hours', 'C. 24 months', 'D. The period specified in the approved maintenance schedule for the aircraft'],
  correct: 3,
  explanation: 'CASR 91.750 and the Civil Aviation Safety Regulations: the maintenance release remains in force for the period specified in the relevant approved maintenance schedule. This varies by aircraft type and category.',
  reference: 'CASR 91.750'
},

{
  question: 'Under AIP ENR 6.1, what is the correct phraseology for a pilot requesting clearance to cross an active runway at a controlled aerodrome?',
  options: ['"[Callsign], request crossing runway [number]"', '"[Callsign], request permission to use runway [number]"', '"[Callsign], ready to cross"', '"[Callsign] crossing runway [number]"'],
  correct: 0,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: the correct phraseology is "[Callsign], request crossing runway [number]." ATC will issue an explicit crossing clearance before the aircraft may enter the runway.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under Part 91 MOS Table 19.02(1), what contingency fuel must be carried for a turbine-engine aeroplane on an IFR flight within Australia?',
  options: ['A. 5% of trip fuel or 5 minutes holding fuel at destination, whichever is greater', 'B. 10% of trip fuel', 'C. 5 minutes at holding speed', 'D. No contingency fuel is required if alternate fuel is carried'],
  correct: 0,
  explanation: 'Part 91 MOS Table 19.02(1) Item 2: contingency fuel for a turbine-engine aeroplane on an IFR flight is the greater of 5% of trip fuel or 5 minutes holding fuel at the destination aerodrome.',
  reference: 'Part 91 MOS 2020 Table 19.02(1) Item 2'
},

{
  question: 'Under CASR 91.395, a pilot conducting an instrument approach reaches the MDA/DH without acquiring the required visual references. What must the pilot do?',
  options: ['A. Continue the approach at a reduced rate of descent', 'B. Execute a missed approach immediately', 'C. Descend 50 ft below MDA to search for the runway environment', 'D. Circle at MDA for up to 3 minutes'],
  correct: 1,
  explanation: 'CASR 91.395: if the required visual references are not acquired upon reaching MDA/DH, the pilot must immediately execute a missed approach and follow the published or ATC-assigned missed approach procedure.',
  reference: 'CASR 91.395'
},

{
  question: 'Under AIP ENR 1.1, what class of airspace applies to the upper airspace (above FL245) in Australia?',
  options: ['A. Class B', 'B. Class A', 'C. Class C', 'D. Class E'],
  correct: 1,
  explanation: 'AIP ENR 1.1: Australian upper airspace above FL245 is Class A airspace, in which only IFR flight is permitted and all aircraft are subject to ATC separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 61.385, what does a Category B instrument rating authorise a pilot to fly?',
  options: ['A. Multi-engine aircraft only on IFR flight plans', 'B. Any aircraft type under IFR in all classes of controlled airspace', 'C. Single-engine aircraft under IFR in Class G and Class E airspace only', 'D. Multi-engine aircraft under IFR as pilot-in-command'],
  correct: 3,
  explanation: 'CASR 61.385: a Category B instrument rating authorises the holder to conduct IFR flight as pilot-in-command of multi-engine aircraft. Category A covers single-engine aircraft under IFR.',
  reference: 'CASR 61.385'
},

{
  question: 'Under CASR 91.190, what is required if a pilot intends to fly within a Restricted Area while it is active?',
  options: ['A. No special permission is needed if flying VFR', 'B. Prior permission must be obtained from the controlling authority of that Restricted Area', 'C. An NOTAM waiver is automatically granted for CPL holders', 'D. ATC will automatically clear the pilot if on an IFR flight plan'],
  correct: 1,
  explanation: 'CASR 91.190: a pilot must obtain permission from the authority controlling the Restricted Area before entering it while active. Entry without permission is unlawful.',
  reference: 'CASR 91.190'
},

{
  question: 'Under Part 91 MOS s.19.04, when is alternate fuel required for an IFR flight?',
  options: ['A. Always required regardless of destination forecast', 'B. When the destination aerodrome does not meet the alternate meteorological minima from ETA minus 30 minutes to ETA plus 30 minutes', 'C. Only when flying over water', 'D. Only for multi-engine aircraft above FL180'],
  correct: 1,
  explanation: 'Part 91 MOS s.19.04: alternate fuel is required when the destination aerodrome forecast does not meet the applicable alternate minima during the period from 30 minutes before to 30 minutes after the estimated time of arrival.',
  reference: 'Part 91 MOS 2020 s.19.04'
},

{
  question: 'Under AIP ERSA GEN, a white dumb-bell displayed on the signals area means:',
  options: ['A. Ground movement only; no take-offs permitted', 'B. Aircraft movements are confined to hard-surfaced runways and taxiways only', 'C. The aerodrome is available for light aircraft only', 'D. Aircraft are confined to hard-surfaced runways but may use grass areas for taxiing'],
  correct: 1,
  explanation: 'AIP ERSA GEN / AIP GEN 1.5: a white dumb-bell on the signals area indicates that aircraft movements are confined to paved (hard-surfaced) runways and taxiways only.',
  reference: 'AIP ERSA GEN / AIP GEN 1.5'
},

{
  question: 'Under CASR 91.535, a pilot is cleared "SQUAWK 4521." When should the pilot select this code?',
  options: ['A. After becoming airborne only', 'B. Immediately upon receiving the instruction, on the ground or in the air', 'C. After leaving the circuit area', 'D. Only after contacting en-route ATC'],
  correct: 1,
  explanation: 'AIP ENR 1.6: when instructed to squawk a code, the pilot must select it immediately, whether on the ground or airborne, unless otherwise instructed by ATC.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'Under CASR 91.245, what is the minimum age to act as pilot-in-command of a passenger-carrying aircraft under a CPL?',
  options: ['A. 17 years', 'B. 18 years', 'C. 21 years', 'D. 19 years'],
  correct: 1,
  explanation: 'CASR 61.390 and CASR 61.225: the minimum age to hold a CPL (which authorises passenger-carrying operations for hire and reward) is 18 years.',
  reference: 'CASR 61.225'
},

{
  question: 'Under AIP ENR 1.4, what is the lower limit of Class E airspace in Australia?',
  options: ['A. 1,500 ft AMSL', 'B. Varies by location — specified in the En Route Supplement Australia (ERSA) or AIP charts', 'C. Always 8,500 ft AMSL', 'D. FL180'],
  correct: 1,
  explanation: 'AIP ENR 1.4: the lower limit of Class E airspace in Australia varies depending on the location and is published on aeronautical charts and in ERSA. It is commonly 8,500 ft AMSL in remote areas.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under CASR 91.610, which of the following is correct regarding VFR flight above FL200?',
  options: ['A. VFR flight is prohibited above FL200', 'B. VFR flight above FL200 requires ATC clearance and an IFR-equipped aircraft', 'C. VFR flight above FL200 is permitted in Class C and E airspace without restriction', 'D. VFR flight is permitted in Class G only above FL200'],
  correct: 0,
  explanation: 'CASR 91.610 and AIP ENR 1.1: VFR flight is not permitted above FL200 in Australia, as that airspace is Class A and available to IFR operations only.',
  reference: 'CASR 91.610 / AIP ENR 1.1'
},

{
  question: 'Under CASR Part 61, what is the minimum total aeronautical experience required to be granted a CPL?',
  options: ['A. 150 hours', 'B. 200 hours', 'C. 250 hours', 'D. 500 hours'],
  correct: 1,
  explanation: 'CASR 61.390 Table 61.390: a CPL requires a minimum of 200 hours total aeronautical experience, including specific command, cross-country, and instrument time components.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'Under CASR 91.165, what does the term "pilot-in-command" mean in relation to shared responsibility for flight safety?',
  options: ['A. Only the captain is responsible; co-pilot has no duty to intervene', 'B. The PIC has final authority and responsibility for the safe operation of the aircraft', 'C. Both pilots share equal authority and neither can overrule the other', 'D. The operator retains final authority; the PIC executes instructions'],
  correct: 1,
  explanation: 'CASR 91.165: the pilot-in-command has final authority and is responsible for the safe conduct of the flight. This authority supersedes operator instructions where safety is concerned.',
  reference: 'CASR 91.165'
},

{
  question: 'Under Part 91 MOS s.26.05, which instrument is required for all powered aircraft operating under IFR?',
  options: ['A. GPS navigator only', 'B. Attitude indicator, airspeed indicator, altimeter, vertical speed indicator, heading indicator, and turn coordinator', 'C. Only ASI, ALT, and compass are mandatory', 'D. Only instruments required under VFR plus an ILS receiver'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.05: IFR-equipped aircraft must carry, as a minimum, ASI, altimeter, VSI, attitude indicator, DI/heading indicator, magnetic compass, and turn and slip indicator.',
  reference: 'Part 91 MOS 2020 s.26.05'
},

{
  question: 'Under CASR 91.175, a pilot operating under IFR declares an emergency. Which of the following best describes the PIC\'s authority?',
  options: ['A. ATC retains full authority; pilot must follow all instructions', 'B. The PIC may deviate from any rule to the extent necessary to meet the emergency', 'C. The PIC may only deviate from ATC clearances, not from written regulations', 'D. Emergency authority is limited to squawking 7700'],
  correct: 1,
  explanation: 'CASR 91.175: in an emergency requiring immediate action, the PIC may deviate from any provision of the CASRs to the extent necessary to meet the emergency, and must submit a report if required by CASA.',
  reference: 'CASR 91.175'
},

{
  question: 'Under AIP ENR 1.1, Class G airspace below the Class E/C floor requires which separation standard?',
  options: ['A. Full ATC separation applies as in Class C', 'B. No ATC separation is provided — pilots are responsible for their own separation (see and avoid)', 'C. ATC provides traffic information but not separation', 'D. IFR aircraft receive ATC separation; VFR aircraft do not'],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class G (uncontrolled) airspace, ATC does not provide separation. Pilots are responsible for collision avoidance using the see-and-avoid principle. ATC may provide traffic information on request.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.450, a pilot is cleared for a visual approach. What minimum requirement must be met before the approach may be commenced?',
  options: ['A. The aircraft must be on an ILS and break off at DH', 'B. The pilot must have the aerodrome or the preceding traffic in sight and be able to maintain visual contact to landing', 'C. The ATIS must report clear skies', 'D. Visibility must be above 10 km'],
  correct: 1,
  explanation: 'CASR 91.450: a visual approach clearance requires the pilot to maintain visual contact with the aerodrome environment or the preceding traffic throughout the approach to landing.',
  reference: 'CASR 91.450'
},

{
  question: 'Under AIP GEN 3.3, within how many days must a pilot submit an Aviation Safety Incident Report (ASIR) after an occurrence?',
  options: ['A. 24 hours', 'B. 72 hours', 'C. 7 days', 'D. 14 days'],
  correct: 2,
  explanation: 'AIP GEN 3.3 and the Transport Safety Investigation Act 2003: mandatory reports to ATSB must be submitted as soon as practicable. CASA\'s ASIR system accepts reports within 7 days of an occurrence. Immediate notification is required for accidents.',
  reference: 'AIP GEN 3.3 / CASR 201.025'
},

{
  question: 'Under CAO 48.1, what is the minimum rest period required for a single-pilot charter operation before commencing an FDP?',
  options: ['A. 8 hours', 'B. 10 hours', 'C. 12 hours', 'D. 6 hours'],
  correct: 1,
  explanation: 'CAO 48.1: the minimum rest period before commencing a flight duty period in single-pilot charter is 10 hours, which must provide at least 8 hours sleep opportunity.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under CASR 91.455, what is the visibility requirement for a pilot to commence a circling approach?',
  options: ['A. The published circling minima for the aircraft category apply', 'B. Always 2,400 m regardless of aircraft type', 'C. The same as the straight-in approach minima', 'D. 1,600 m for Category A aircraft only'],
  correct: 0,
  explanation: 'CASR 91.455 and instrument approach procedures: circling approach minima (MDA and visibility) are published for each aircraft category (A, B, C, D) and must be used based on the aircraft\'s speed.',
  reference: 'CASR 91.455 / CAAP 91-04'
},

{
  question: 'Under AIP ENR 1.1, what service is provided by ATC to IFR aircraft in Class E airspace?',
  options: ['A. Full separation from all traffic (IFR and VFR)', 'B. Separation from other IFR aircraft; traffic information on VFR aircraft as practicable', 'C. No ATC service is available in Class E', 'D. Traffic information only — no separation is provided'],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class E airspace, ATC provides separation between IFR aircraft. VFR aircraft are not separated from IFR traffic, but ATC provides traffic information when practicable.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.280, frost or ice on the wings of an aircraft at the time of take-off is:',
  options: ['A. Acceptable if the layer is less than 3 mm thick', 'B. Not permitted — the aircraft must be clear of frost, ice, and snow before take-off', 'C. Acceptable for take-off if outside air temperature is above -5°C', 'D. Acceptable if the aircraft has a wing inspection approval'],
  correct: 1,
  explanation: 'CASR 91.280: no person may operate an aircraft for take-off if frost, ice, or snow is adhering to propellers, windshields, wings, stabilising or control surfaces, or engine inlets.',
  reference: 'CASR 91.280'
},

{
  question: 'Under AIP ENR 6.1, what is the correct read-back requirement for ATC clearances in Australia?',
  options: ['A. The full clearance must always be read back verbatim', 'B. Route clearances, altitude instructions, heading instructions, speed instructions, SSR codes, and runway-in-use must be read back', 'C. Only the SSR code requires a read-back', 'D. Read-back is discretionary unless ATC requests it'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: mandatory read-back items include ATC route clearances, altitude instructions (including QNH), heading instructions, speed instructions, SSR codes, runway-in-use, and clearances to enter or cross a runway.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'Under CASR Part 61, what medical certificate is required for the exercise of CPL privileges?',
  options: ['A. Class 2 Medical Certificate', 'B. Class 1 Medical Certificate', 'C. Class 3 Medical Certificate', 'D. No medical certificate is required for CPL privileges below FL180'],
  correct: 1,
  explanation: 'CASR 61.390 and CASR Part 67: a CPL holder must hold a valid Class 1 Medical Certificate issued under CASR Part 67 to exercise CPL privileges.',
  reference: 'CASR 61.390 / CASR Part 67'
},

{
  question: 'Under AIP ENR 1.1, what are the primary differences between Class C and Class D airspace regarding VFR flight?',
  options: ['A. VFR flight is prohibited in Class C but permitted in Class D', 'B. In Class C, ATC separates VFR from IFR; in Class D, ATC provides traffic information between IFR and VFR but does not separate them', 'C. VFR aircraft in Class D must hold an instrument rating', 'D. There is no difference; both classes are identical for VFR'],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class C airspace, ATC separates all IFR from VFR traffic. In Class D, ATC issues traffic information between IFR and VFR aircraft but does not separate them; VFR pilots are responsible for their own separation from other VFR aircraft.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.155, what is the obligation of a pilot who receives an ATC clearance they cannot comply with?',
  options: ['A. The pilot must accept the clearance and comply to the best of their ability', 'B. The pilot must inform ATC immediately that they cannot comply and state what they require instead', 'C. The pilot may silently deviate without notifying ATC', 'D. The pilot must request a supervisor and wait on the ground'],
  correct: 1,
  explanation: 'CASR 91.155 and AIP ENR 1.1: if a pilot cannot comply with an ATC clearance, they must advise ATC immediately using "UNABLE" and state their limitations or requirements so ATC can provide an alternative.',
  reference: 'CASR 91.155 / AIP ENR 6.1'
},

{
  question: 'Under AIP ENR 1.1, what is the definition of "controlled airspace"?',
  options: ['A. Any airspace where a radar service is provided', 'B. Airspace of defined dimensions within which ATC service is provided to IFR and in some classes to VFR flights', 'C. Only Class A and B airspace', 'D. Airspace above FL180 only'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / ICAO Annex 2: controlled airspace is airspace of defined dimensions within which ATC service is provided to IFR flights and, depending on the airspace class, to VFR flights.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.475, what is the minimum obstacle clearance required for a non-precision approach when flying the final approach segment?',
  options: ['A. 300 ft above all obstacles within 5 NM', 'B. The aircraft must remain on or above the published approach profile to the MDA', 'C. 500 ft above the highest terrain within 10 NM', 'D. 200 ft above obstacles on the extended centreline'],
  correct: 1,
  explanation: 'CASR 91.475 and CAAP 178: during a non-precision approach, the pilot must descend to but not below the published MDA while remaining on or above the published approach path, which provides the required obstacle clearance.',
  reference: 'CASR 91.475 / CAAP 178'
},

{
  question: 'Under AIP ENR 1.4, what transponder code should a pilot squawk in the absence of an ATC-assigned code while operating in Class G airspace?',
  options: ['A. 7700', 'B. 7000', 'C. 1200', 'D. 2000'],
  correct: 1,
  explanation: 'AIP ENR 1.6: in Australia, pilots operating without an ATC-assigned code in Class G (uncontrolled) airspace should squawk 7000.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'Under CAO 48.1, what is the maximum number of hours a crew member may fly in any 28-day period under a standard charter operation?',
  options: ['A. 100 hours', 'B. 120 hours', 'C. 200 hours', 'D. 150 hours'],
  correct: 1,
  explanation: 'CAO 48.1: the maximum cumulative flight time in any 28 consecutive days is 120 hours for crew members in regular public transport and charter operations.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under CASR 91.075, what is the purpose of a Special Flight Permit (SFP)?',
  options: ['A. It allows flight for revenue purposes without a CPL', 'B. It authorises a specific flight that would otherwise not comply with airworthiness requirements, such as a ferry flight to a maintenance base', 'C. It is required for all flights above FL250', 'D. It replaces the maintenance release'],
  correct: 1,
  explanation: 'CASR 91.075: a Special Flight Permit (authority to fly) is issued by CASA to authorise specific flights by aircraft that do not meet the standard airworthiness requirements, such as flying to a maintenance facility for repair.',
  reference: 'CASR 91.075'
},

{
  question: 'Under CASR 91.645, what minimum height must be maintained over a non-built-up area?',
  options: ['A. 300 ft AGL', 'B. 500 ft AGL', 'C. 1,000 ft AGL', 'D. 250 ft AGL'],
  correct: 1,
  explanation: 'CASR 91.645: over areas other than built-up areas or water, an aircraft must not fly lower than 500 ft AGL, except during take-off, landing, or as otherwise permitted.',
  reference: 'CASR 91.645'
},

{
  question: 'Under CASR 91.305, what must a pilot do before conducting a low-level flight that will be below 500 ft AGL over an area that is not a built-up area?',
  options: ['A. Notify CASA 48 hours in advance', 'B. Check the area is not a Restricted, Prohibited, or Danger area and comply with minimum height requirements unless an exemption applies', 'C. File a NOTAM', 'D. Obtain an air traffic control clearance even in Class G airspace'],
  correct: 1,
  explanation: 'CASR 91.305 and 91.645: the pilot must ensure the flight does not enter Restricted or Prohibited areas and that the minimum heights are met unless a specific exemption (e.g. mustering, agricultural, emergency) applies.',
  reference: 'CASR 91.645 / 91.305'
},

{
  question: 'Under AIP ENR 2.1, what does "ADIZ" stand for and what obligation does it place on pilots entering it?',
  options: ['A. Air Defence Identification Zone — requires a specific flight plan and position report at the ADIZ boundary', 'B. Australian Danger Identification Zone — entry prohibited without a clearance', 'C. Air Distance Information Zone — requires DME equipment', 'D. Approach Distance Inspection Zone — requires a visual approach clearance'],
  correct: 0,
  explanation: 'AIP ENR 2.1: the Air Defence Identification Zone (ADIZ) surrounds Australian territory. Pilots entering the ADIZ must have a filed ICAO flight plan and report their position at the ADIZ boundary.',
  reference: 'AIP ENR 2.1'
},

{
  question: 'Under CASR 91.580, an aircraft operating in RVSM airspace must have its altimeter system checked as part of its maintenance. What is the maximum allowable altimeter system error in RVSM airspace?',
  options: ['A. ±100 ft', 'B. ±75 ft', 'C. ±200 ft', 'D. ±50 ft'],
  correct: 1,
  explanation: 'Part 91 MOS s.11.01 and RVSM requirements: an aircraft operating in RVSM airspace must have an altimeter system error not exceeding ±75 ft. This ensures the 1,000 ft vertical separation standard is maintained.',
  reference: 'Part 91 MOS 2020 s.11.01 / ICAO Doc 9574'
},

{
  question: 'Under CASR 61.495, what ongoing requirement must a CPL holder meet to maintain instrument rating currency?',
  options: ['A. Complete a full instrument proficiency check every 12 months', 'B. Conduct 3 hours of instrument flight time and pass an instrument proficiency check within the past 12 months', 'C. Complete an IFR flight every 6 months to maintain currency', 'D. No specific currency requirement exists once an IR is granted'],
  correct: 1,
  explanation: 'CASR 61.495: to maintain instrument rating currency, the holder must complete 3 hours of instrument flight time and pass an instrument proficiency check conducted by an approved examiner within the preceding 12 months.',
  reference: 'CASR 61.495'
},

{
  question: 'Under AIP ENR 1.1, which type of flight is authorised in Class A airspace?',
  options: ['A. VFR and IFR, with ATC separation provided to all', 'B. IFR only; VFR flight is not permitted', 'C. VFR only, with radar separation', 'D. Special VFR and IFR with pilot separation'],
  correct: 1,
  explanation: 'AIP ENR 1.1: Class A airspace is reserved for IFR operations only. VFR flight is not permitted. All IFR aircraft are provided with ATC separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.175, what action is required after a pilot-in-command deviates from a regulation to meet an emergency?',
  options: ['A. No further action is required', 'B. The PIC must submit a report to CASA if requested, detailing the emergency and the deviation', 'C. The PIC must obtain re-certification of the aircraft before the next flight', 'D. A mandatory 72-hour stand-down applies before the next flight'],
  correct: 1,
  explanation: 'CASR 91.175(2): if a pilot deviates from a regulation to meet an in-flight emergency, CASA may require a written report. The PIC must submit the report within the period specified.',
  reference: 'CASR 91.175(2)'
},

{
  question: 'Under AIP ENR 1.6, what does squawking 7600 indicate to ATC?',
  options: ['A. Unlawful interference (hijack)', 'B. Communication failure', 'C. General emergency', 'D. Military identification'],
  correct: 1,
  explanation: 'AIP ENR 1.6: squawking 7600 indicates radio communication failure to ATC. The pilot should squawk 7600 and follow the lost communications procedures.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'Under CASR 91.665, what is the speed limit for aircraft operating within 4 NM of a Class D aerodrome at or below 2,500 ft AGL?',
  options: ['A. 250 KIAS', 'B. 200 KIAS', 'C. 180 KIAS', 'D. 160 KIAS'],
  correct: 1,
  explanation: 'CASR 91.665 and AIP ENR 1.1: within a 4 NM radius of a Class C or Class D aerodrome at or below 2,500 ft AGL, the speed limit is 200 KIAS unless a lower speed is required for the aircraft category.',
  reference: 'CASR 91.665'
},

{
  question: 'Under CASR 91.660, what is the general speed limit below 10,000 ft in Australian airspace?',
  options: ['A. 200 KIAS', 'B. 250 KIAS', 'C. 300 KIAS', 'D. 350 KIAS'],
  correct: 1,
  explanation: 'CASR 91.660: below 10,000 ft AMSL (or FL100), no aircraft may be operated at a speed in excess of 250 KIAS, unless operating in Class A airspace or in accordance with an exemption.',
  reference: 'CASR 91.660'
},

{
  question: 'Under AIP GEN 3.3, what is the definition of an "accident" for the purposes of mandatory reporting to ATSB?',
  options: ['A. Any occurrence where the aircraft sustains more than $10,000 in damage', 'B. An occurrence associated with aircraft operation where a person is fatally or seriously injured, the aircraft sustains substantial damage, or the aircraft goes missing', 'C. Any hard landing requiring inspection', 'D. Any flight outside approved limits'],
  correct: 1,
  explanation: 'AIP GEN 3.3 and Transport Safety Investigation Act 2003: an accident is defined as an occurrence associated with the operation of an aircraft in which a person is fatally or seriously injured, the aircraft sustains substantial damage, or the aircraft goes missing.',
  reference: 'AIP GEN 3.3 / Transport Safety Investigation Act 2003 s.3'
},

{
  question: 'Under CASR 91.515, can a pilot fly through a Danger Area without any special clearance?',
  options: ['A. No — Danger Areas require a clearance from CASA', 'B. Yes — Danger Areas are not prohibited; pilots should exercise caution and check NOTAM for activation', 'C. Only IFR pilots may enter Danger Areas', 'D. Entry requires an SFP regardless of activation status'],
  correct: 1,
  explanation: 'CASR 91.515 and AIP ENR 5.1: Danger Areas are not legally prohibited airspace. Pilots should check relevant NOTAMs for activation and exercise extreme caution when entering, but no specific legal clearance is required.',
  reference: 'CASR 91.515 / AIP ENR 5.1'
},

{
  question: 'Under AIP ENR 1.7, what is an ATIS broadcast and what information must it contain?',
  options: ['A. A pilot-to-pilot broadcast for airspace conflict avoidance', 'B. An Automatic Terminal Information Service broadcast providing continuous non-control information including active runways, weather, QNH, and NOTAMs relevant to the terminal area', 'C. A military weather broadcast only', 'D. An ATC instruction for IFR traffic only'],
  correct: 1,
  explanation: 'AIP ENR 1.7: ATIS (Automatic Terminal Information Service) is a continuous broadcast of current non-control aerodrome information, including weather, active runways, QNH, any relevant NOTAMs, and the information identifier.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under Part 91 MOS s.10.03, what is the required minimum in-flight visibility for a VFR flight below 3,000 ft AMSL in Class G airspace during the day?',
  options: ['A. 800 m', 'B. 1,500 m', 'C. 3,000 m', 'D. 5,000 m'],
  correct: 1,
  explanation: 'CASR 91.615 and Part 91 MOS: for VFR flight in Class G airspace below 3,000 ft AMSL (day), the minimum flight visibility is 1,500 m.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'Under CASR Part 61, what additional endorsement is required for a CPL holder to act as PIC of a high-performance aircraft?',
  options: ['A. An ATPL is required for any high-performance aircraft', 'B. A high-performance aircraft endorsement on the pilot licence', 'C. An instrument rating covering that aircraft class', 'D. No endorsement is required; CPL privileges cover all aircraft'],
  correct: 1,
  explanation: 'CASR Part 61: certain aircraft requiring special skill, such as high-performance types, require an endorsement on the licence in addition to the aircraft type or class rating.',
  reference: 'CASR Part 61 Subpart 61.Q'
},

{
  question: 'Under AIP ENR 6.4, what is the standard circuit direction at an aerodrome unless otherwise specified?',
  options: ['A. Right-hand', 'B. Left-hand', 'C. Determined solely by the wind direction', 'D. Alternates based on runway designation (odd = left, even = right)'],
  correct: 1,
  explanation: 'AIP ENR 6.4 and VFRG: the standard traffic circuit direction in Australia is left-hand, unless an aerodrome has a published right-hand circuit procedure or ATC specifies otherwise.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under AIP ENR 1.5, what is required before a VFR pilot can fly in controlled airspace above 10,000 ft AMSL?',
  options: ['A. No special endorsement is required', 'B. The pilot must hold a controlled airspace endorsement (Class A/E endorsement if applicable) and meet VMC requirements', 'C. An IFR flight plan must be filed', 'D. An oxygen endorsement and IFR rating are mandatory'],
  correct: 1,
  explanation: 'CASR Part 61 and AIP ENR 1.5: a pilot conducting VFR flight in Class C or E airspace may require a specific airspace endorsement depending on the airspace class and their licence grade, in addition to meeting the VMC requirements.',
  reference: 'CASR Part 61 / AIP ENR 1.5'
},

{
  question: 'Under CASR 91.795, a pilot forgets to bring their licence on a charter flight. What is the legal consequence?',
  options: ['A. No consequence — the licence does not need to be physically carried', 'B. The pilot commits an offence but can continue the flight if the licence is current and valid', 'C. A crew licence must be available to produce to an authorised officer during a flight — failure is an offence', 'D. The flight must be aborted immediately'],
  correct: 2,
  explanation: 'CASR 91.795: the pilot-in-command must have their licence available during flight to produce if requested by an authorised officer. Failure to carry the licence is an offence, though it does not automatically invalidate the flight if the licence itself is current.',
  reference: 'CASR 91.795'
},

{
  question: 'Under AIP ENR 1.1, what is the purpose of Class G uncontrolled airspace?',
  options: ['A. It is reserved for military low-level training only', 'B. It is airspace not designated as Class A–E; ATC services are not provided but may be available on request', 'C. It provides radar separation for all VFR traffic', 'D. Only agricultural and emergency operations are permitted'],
  correct: 1,
  explanation: 'AIP ENR 1.1: Class G is uncontrolled airspace where no ATC separation service is provided. However, pilots may request a flight information or traffic advisory service from ATC if available.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.225, when must a pilot submit a SARTIME?',
  options: ['A. For all VFR and IFR flights over 30 minutes', 'B. Whenever requested by a responsible person as a Search and Rescue time, usually for remote area or overwater flights', 'C. Only for IFR flights over water', 'D. SARTIME is optional for all flights'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and CASR 91.225: a SARTIME (Search and Rescue time) is a nominated time at which SAR action will be initiated if no contact is received. It is required for flights where the pilot may be uncontactable, such as remote area and overwater flights.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'Under CASR 91.620, what is the minimum cloud clearance for VFR flight in Class C airspace?',
  options: ['A. Clear of cloud', 'B. 1,000 ft vertically and 1,500 m horizontally', 'C. 1,000 ft above, 500 ft below, and 1 NM horizontally', 'D. 500 ft vertical, 500 m horizontal'],
  correct: 2,
  explanation: 'CASR 91.620 and AIP ENR 1.2: in Class C airspace, VFR flight requires 1,000 ft above, 500 ft below, and 1 NM (1,852 m) horizontal cloud clearance.',
  reference: 'CASR 91.620 / AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 91.320, what must a pilot do if they become aware of a defect that renders the aircraft unairworthy during a flight?',
  options: ['A. Continue to destination if the defect is minor', 'B. Land as soon as practicable and record the defect in the maintenance release or technical log', 'C. Only report the defect after landing at the destination', 'D. Continue the flight provided passengers are briefed on the defect'],
  correct: 1,
  explanation: 'CASR 91.320 and 91.755: if a pilot becomes aware of a defect affecting airworthiness, they must land as soon as practicable. The defect must be recorded in the maintenance release, and the aircraft must not be flown again until rectified.',
  reference: 'CASR 91.320 / 91.755'
},

{
  question: 'Under AIP ENR 1.10, what is a "flight note"?',
  options: ['A. A full ICAO flight plan', 'B. A simplified notification lodged with ATS for VFR flights in remote areas where a full flight plan is not required', 'C. A verbal position report to ATC', 'D. A passenger manifest'],
  correct: 1,
  explanation: 'AIP ENR 1.10: a flight note (also called a "flight notification") is a simplified ATS notification used for VFR flights operating in remote areas. It is less comprehensive than a full ICAO flight plan but enables SAR alerting.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under Part 91 MOS s.11.06, what procedure applies when an IFR aircraft operating in VMC loses ATC communication in controlled airspace?',
  options: ['A. Continue to destination and attempt radio contact on guard', 'B. Squawk 7600, continue in VMC if possible, try alternative frequencies, and if no contact follow the published lost comms procedure', 'C. Immediately land at the nearest aerodrome', 'D. Squawk 7700 and initiate emergency descent'],
  correct: 1,
  explanation: 'Part 91 MOS s.11.06: in the event of communication failure, the pilot should squawk 7600, attempt contact on alternative frequencies, continue VMC where possible to avoid controlled airspace, and follow the lost communications procedures outlined in AIP ENR 1.6.',
  reference: 'Part 91 MOS 2020 s.11.06 / AIP ENR 1.6'
},

{
  question: 'Under AIP GEN 1.5, what does a white cross displayed on a runway indicate?',
  options: ['A. The runway threshold is displaced', 'B. The runway or portion is unfit for use by aircraft', 'C. The runway has a declared distance limitation', 'D. Right-hand circuits apply'],
  correct: 1,
  explanation: 'AIP GEN 1.5: a white cross on a runway or taxiway indicates that the surface is unfit for use by aircraft.',
  reference: 'AIP GEN 1.5'
},

{
  question: 'Under CASR 91.640, an aircraft making a forced landing may fly below the normal minimum heights. What obligations apply after such a landing?',
  options: ['A. The pilot must immediately file a report with ATSB', 'B. The pilot must report the deviation to CASA if required and record details in the maintenance release', 'C. The pilot must submit a mandatory incident report to ATSB and notify ATS', 'D. No report is required for a precautionary landing'],
  correct: 2,
  explanation: 'CASR 91.640 and AIP GEN 3.3: a forced landing is a reportable occurrence under the Transport Safety Investigation Act 2003. The pilot must notify ATSB and ATS as required. A CASA report may also be required.',
  reference: 'CASR 91.640 / AIP GEN 3.3'
},

{
  question: 'Under CASR Part 61, what is the minimum dual instrument time required to qualify for a CPL instrument rating?',
  options: ['A. 5 hours', 'B. 10 hours', 'C. 20 hours', 'D. 15 hours'],
  correct: 1,
  explanation: 'CASR 61.390 Table 61.390: a CPL applicant must have completed a minimum of 10 hours of instrument time, of which at least 5 hours must be dual instrument time with a CFII.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'Under AIP ENR 1.4, what is an "airways" route structure used for in Australia?',
  options: ['A. VFR traffic corridors below 3,000 ft', 'B. Designated IFR en-route paths defined by navaids or RNAV waypoints within controlled airspace', 'C. High-speed military transit routes only', 'D. Visual landmarks designated for training aircraft'],
  correct: 1,
  explanation: 'AIP ENR 3.1: airways are designated routes within controlled airspace defined by navaids (NDB, VOR) or RNAV waypoints. They form the structure of IFR en-route navigation in Australian controlled airspace.',
  reference: 'AIP ENR 3.1'
},

{
  question: 'Under CASR 91.625, what cloud clearance is required for VFR flight at or below 1,000 ft AMSL in Class G airspace during the day?',
  options: ['A. 1,000 ft vertical and 1,500 m horizontal', 'B. Clear of cloud', 'C. 500 ft vertical and 600 m horizontal', 'D. 1,500 ft vertical and 1 NM horizontal'],
  correct: 1,
  explanation: 'CASR 91.615 / 91.625 and AIP ENR 1.2: for VFR flight in Class G airspace at or below 1,000 ft AMSL (day), the requirement is clear of cloud and in sight of the surface.',
  reference: 'CASR 91.625 / AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 91.320, who may make entries in an aircraft maintenance release?',
  options: ['A. Any crew member on the flight', 'B. Only authorised personnel under Part 66, or the PIC recording a defect', 'C. The aircraft owner at any time', 'D. Only a LAME regardless of circumstances'],
  correct: 1,
  explanation: 'CASR 91.755 and CASR Part 66: entries in the maintenance release are made by appropriately licensed maintenance engineers (LAME/AME) under Part 66. The PIC may record a defect or technical fault, but maintenance certification may only be made by the appropriate licensed person.',
  reference: 'CASR 91.755 / CASR Part 66'
},

{
  question: 'Under AIP ENR 1.1, what is the purpose of an "inner horizontal surface" in the context of an obstacle limitation surface?',
  options: ['A. It defines the approach path slope for instrument operations', 'B. It is a surface 45 m above the aerodrome elevation extending horizontally from the runway strip to protect aircraft in the circuit', 'C. It is the surface defining minimum IFR holding altitude', 'D. It applies only to takeoff obstacle clearance'],
  correct: 1,
  explanation: 'AIP ENR 4.1 and ICAO Annex 14: the inner horizontal surface is 45 m above the aerodrome elevation, extending within a radius that protects aircraft conducting circuit operations from obstacles. It is part of the obstacle limitation surfaces defined in Annex 14.',
  reference: 'AIP ENR 4.1 / ICAO Annex 14'
},

{
  question: 'Under CASR 91.555, an ATC clearance reads "MAINTAIN FLIGHT PLANNED ROUTE." What does this authorise?',
  options: ['A. The pilot may fly any route at their discretion', 'B. The pilot must follow the route filed in the current flight plan', 'C. The pilot is authorised to deviate for weather', 'D. The clearance only applies above FL180'],
  correct: 1,
  explanation: 'CASR 91.555 and AIP ENR 6.1: "MAINTAIN FLIGHT PLANNED ROUTE" is an ATC clearance to proceed as per the route filed in the current flight plan. Any deviation requires an amended clearance.',
  reference: 'CASR 91.555 / AIP ENR 6.1'
},

{
  question: 'Under AIP ENR 1.1, what separation is provided by ATC to VFR aircraft in Class C airspace?',
  options: ['A. VFR from VFR and VFR from IFR', 'B. VFR from IFR only; no separation between VFR aircraft', 'C. No separation; traffic information only', 'D. Radar separation from all traffic including VFR'],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class C airspace, ATC provides separation between IFR and VFR aircraft. VFR aircraft are not separated from other VFR aircraft, but receive traffic information.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CAO 48.1, what is the maximum flight time for a single-pilot operation in a 24-hour period?',
  options: ['A. 8 hours', 'B. 10 hours', 'C. 11 hours', 'D. 14 hours'],
  correct: 1,
  explanation: 'CAO 48.1: for a single-pilot operation, the maximum flight time in any 24-hour period is 8 hours within a maximum FDP of up to 11 hours depending on start time.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under AIP ENR 6.4, at what point on the circuit should a pilot make a "final" radio call at a non-controlled aerodrome?',
  options: ['A. When turning final, reporting final and intentions', 'B. When at a 3 NM final', 'C. Only after landing gear is confirmed down', 'D. At circuit height, before turning base'],
  correct: 0,
  explanation: 'AIP ENR 6.4 and VFRG: at a non-controlled aerodrome, a pilot should broadcast on CTAF when turning final, reporting aircraft type, callsign, runway in use, and intentions (landing, touch and go, etc.).',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under CASR 91.580, what is the purpose of an RVSM approval?',
  options: ['A. It allows VFR flight above FL180', 'B. It certifies that the aircraft\'s altimetry and autopilot meet the accuracy and performance standards required to maintain 1,000 ft vertical separation in RVSM airspace', 'C. It authorises single-engine flight over water', 'D. It replaces the need for an IFR rating above FL290'],
  correct: 1,
  explanation: 'CASR 91.580 and ICAO Doc 9574: RVSM (Reduced Vertical Separation Minimum) approval certifies that the aircraft systems achieve the performance standards necessary to maintain the reduced 1,000 ft vertical separation between FL290 and FL410.',
  reference: 'CASR 91.580 / ICAO Doc 9574'
},

{
  question: 'Under CASR 91.395, what visual references must be in sight before a pilot may descend below MDA on a non-precision approach?',
  options: ['A. Any single light associated with the aerodrome', 'B. At least one of: approach lights, threshold, threshold markings, threshold lights, VASI, touchdown zone, runway lights, or runway markings', 'C. The full length of the runway must be clearly visible', 'D. The PAPI only is sufficient'],
  correct: 1,
  explanation: 'CASR 91.395: to descend below MDA the pilot must clearly identify at least one of the specified visual references — approach light system, runway threshold, threshold markings/lights, VASI/PAPI, touchdown zone, or runway/runway markings.',
  reference: 'CASR 91.395'
},

{
  question: 'Under AIP ENR 2.1, what is a Prohibited Area and what does it mean for a civil pilot?',
  options: ['A. An area where VFR flight is prohibited; IFR is still permitted', 'B. An area in which the flight of any aircraft is prohibited (unless authorised), protecting sensitive locations such as royal residences or nuclear sites', 'C. A military-only airspace managed by the RAAF', 'D. An area restricted during specific hours only'],
  correct: 1,
  explanation: 'AIP ENR 2.1 / CASR 91.185: a Prohibited Area is designated airspace where civil flight is prohibited at all times without specific authorisation from CASA. Examples include areas around sensitive national security or safety installations.',
  reference: 'AIP ENR 2.1 / CASR 91.185'
},

{
  question: 'Under CASR 91.695, what is the minimum age for a person to act as an air crew member in Australian aviation?',
  options: ['A. 16 years', 'B. 17 years', 'C. 18 years', 'D. 15 years'],
  correct: 0,
  explanation: 'CASR Part 61 and the Civil Aviation Act 1988: the minimum age to act as pilot-in-command of a solo flight (student pilot) is 16 years. To hold a PPL or CPL, minimum ages are 17 and 18 years respectively.',
  reference: 'CASR 61.160 / CASR 61.225'
},

{
  question: 'Under Part 91 MOS s.19.05, when is a destination alternate NOT required for an IFR flight?',
  options: ['A. When the aircraft has GPS and autopilot', 'B. When the destination forecast for the period ETA ±30 minutes shows conditions at or above the alternate planning minima, and a suitable alternate exists within fuel range', 'C. Never — an alternate is always legally required', 'D. When the aircraft carries extra contingency fuel only'],
  correct: 1,
  explanation: 'Part 91 MOS s.19.04 and s.19.05: a destination alternate is not required if the destination forecast for the ETA ±30 min period shows conditions equal to or better than the alternate planning minima (ceiling ≥1,500 ft and visibility ≥8 km or as published). If these minima are not met, an alternate must be nominated.',
  reference: 'Part 91 MOS 2020 s.19.04-19.05'
},

{
  question: 'Under CASR 91.730, what action must a pilot take after discovering a defect during a pre-flight inspection?',
  options: ['A. Record the defect in the maintenance release and defer it to the next maintenance check', 'B. Assess whether the aircraft is airworthy — if not, it must not be operated and the defect must be reported per the maintenance programme', 'C. Conduct the flight and report the defect on landing', 'D. Notify ATC of the defect before departure'],
  correct: 1,
  explanation: 'CASR 91.730: a pilot who identifies a defect must determine whether it affects airworthiness. If the aircraft is not airworthy, the flight must not proceed. The defect must be recorded in the maintenance release and addressed per the approved maintenance schedule.',
  reference: 'CASR 91.730 / CASR 91.755'
},

{
  question: 'Under AIP ENR 1.7, what does an ATIS information identifier indicate to a pilot?',
  options: ['A. The QNH setting from the previous hour', 'B. The sequential alphabetical letter identifying when the ATIS was last updated, allowing ATC to confirm the pilot has current information', 'C. The runway length available for landing', 'D. The identity of the controller on duty'],
  correct: 1,
  explanation: 'AIP ENR 1.7: each ATIS broadcast carries a sequential alphabetical identifier (Alpha, Bravo, Charlie, etc.). When contacting ATC, pilots report the ATIS identifier confirming they have the current terminal information.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under CASR 91.225, who is responsible for activating a SARTIME after a flight?',
  options: ['A. ATC activates the SARTIME automatically', 'B. The pilot-in-command (or a responsible person nominated by the pilot) must cancel the SARTIME upon landing or initiate SAR action at the nominated time', 'C. The aircraft operator is solely responsible', 'D. AMSA automatically tracks all aircraft and no action is required'],
  correct: 1,
  explanation: 'CASR 91.225 and AIP ENR 1.10: the PIC (or designated responsible person) must cancel the SARTIME with JRCC/ATS on completion of the flight. If the SARTIME expires without cancellation, SAR action is initiated.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'Under CASR 91.430, what is a "special VFR clearance" and when may it be issued?',
  options: ['A. A clearance for IFR aircraft to conduct visual approaches in IMC', 'B. An ATC clearance allowing a VFR aircraft to operate within a CTR in weather below normal VMC minima, at the discretion of ATC and only in Class D or C airspace', 'C. A clearance for crop dusting below 500 ft', 'D. A clearance issued to military aircraft only'],
  correct: 1,
  explanation: 'CASR 91.430: a special VFR clearance permits a VFR aircraft to operate within a control zone in meteorological conditions below standard VMC minima. It may only be issued by ATC in Class C or D airspace when traffic permits, and imposes specific visibility and cloud clearance requirements.',
  reference: 'CASR 91.430'
},

{
  question: 'Under AIP ENR 5.1, what notification applies to Danger Area D201 (Woomera)?',
  options: ['A. It is permanently active and requires a military clearance', 'B. Activation times are published by NOTAM; pilots should check NAIPS for current status before flight', 'C. It is a Restricted Area requiring CASA permission', 'D. Transit is permitted without restriction below 3,000 ft AGL'],
  correct: 1,
  explanation: 'AIP ENR 5.1: Australian Danger Areas such as Woomera (D201) have activation times published by NOTAM through NAIPS. Pilots must check current NOTAMs before transiting.',
  reference: 'AIP ENR 5.1 / NAIPS'
},

{
  question: 'Under CAO 48.1, what counts towards "flight time" for the purposes of FDP limits?',
  options: ['A. Block-to-block time (chocks off to chocks on)', 'B. Time from first flight departure to final landing, including taxi and ground runs', 'C. Only airborne time is counted', 'D. Simulator time is included in flight time'],
  correct: 0,
  explanation: 'CAO 48.1: flight time for duty period purposes is measured block-to-block — from the moment the aircraft first moves for the purpose of take-off to the moment it comes to rest at the end of the flight (chocks on).',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under AIP ENR 1.1, what is the requirement for VFR aircraft transiting through Class C airspace?',
  options: ['A. VFR flight is not permitted in Class C', 'B. Two-way radio communication and an ATC clearance must be obtained before entering Class C', 'C. Only a radio call on approach frequency is needed', 'D. Class C requires an IFR flight plan only for turbine aircraft'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and CASR 91.410: Class C airspace requires all aircraft to obtain a clearance and maintain two-way radio communication with ATC before entry, whether IFR or VFR.',
  reference: 'AIP ENR 1.1 / CASR 91.410'
},

{
  question: 'Under CASR 91.505, in what circumstances may a pilot operate an aircraft with an inoperative altimeter?',
  options: ['A. Never — the altimeter is a required instrument at all times', 'B. If the aircraft is operated under VFR in Class G airspace at or below 1,500 ft AGL and the defect is recorded in the maintenance release', 'C. The pilot may use GPS altitude as a substitute in all airspace', 'D. An inoperative altimeter is acceptable with ATC approval'],
  correct: 0,
  explanation: 'CASR 91.505 and Part 91 MOS: an altimeter is required for virtually all flight operations, including VFR. The minimum equipment lists (MEL) for specific aircraft types may allow deferral in very limited circumstances, but generally no flight may be conducted with an inoperative altimeter.',
  reference: 'Part 91 MOS 2020 s.26.04 / CASR 91.505'
},

{
  question: 'Under AIP ENR 6.1, what does the phrase "ROGER" mean in ATC radiotelephony?',
  options: ['A. Instruction received and will comply', 'B. Instruction received and understood', 'C. "I understand and will do as instructed"', 'D. Transmission received; does not indicate agreement or compliance'],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "ROGER" means "I have received all of your last transmission." It does not imply agreement or intent to comply — it is an acknowledgement of receipt only.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under AIP ENR 1.1, for an IFR aircraft in Class G airspace, does ATC provide separation from VFR traffic?',
  options: ['A. Yes — ATC provides full separation in all airspace', 'B. No — in Class G airspace, no ATC separation is provided. IFR aircraft are responsible for separation from all traffic using see-and-avoid', 'C. Yes — but only above 5,000 ft AGL', 'D. Yes — IFR always has priority and ATC advises VFR to give way'],
  correct: 1,
  explanation: 'AIP ENR 1.1: Class G is uncontrolled airspace. No ATC separation service is provided. IFR aircraft flying in Class G airspace must apply see-and-avoid procedures and may request a traffic advisory service if available.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.335, what is the obligation of a pilot who notices an unlawful interference (e.g. hijack attempt) on a flight?',
  options: ['A. Land immediately at the nearest aerodrome', 'B. Squawk 7500, notify ATC at the first opportunity using the phrase "UNLAWFUL INTERFERENCE," and follow the operator\'s security procedures', 'C. Squawk 7700 and declare a MAYDAY', 'D. Notify passengers and conduct a citizen\'s arrest'],
  correct: 1,
  explanation: 'CASR 91.335 and AIP ENR 6.1: in the event of unlawful interference, the PIC should squawk 7500 and, at the first opportunity, notify ATC using the phraseology "UNLAWFUL INTERFERENCE." ATC will provide all practicable assistance.',
  reference: 'CASR 91.335 / AIP ENR 6.1'
},

{
  question: 'Under CASR 91.285, what pre-flight action is required regarding fuel quantity?',
  options: ['A. Fuel gauges alone are sufficient to verify fuel quantity', 'B. The pilot must ensure the fuel is sufficient for the planned flight by checking fuel quantity by means other than fuel gauges alone if any doubt exists', 'C. A refueller\'s receipt is legally sufficient proof of fuel quantity', 'D. Fuel verification is the maintenance organisation\'s responsibility'],
  correct: 1,
  explanation: 'CASR 91.285: the PIC must ensure that the aircraft carries sufficient fuel for the flight. When there is any doubt, the actual fuel quantity must be verified by dipping tanks or checking by means other than relying on fuel gauges alone.',
  reference: 'CASR 91.285'
},

{
  question: 'Under AIP ENR 1.4, what is a Terminal Control Area (TCA) and how does it differ from a Control Zone (CTR)?',
  options: ['A. A TCA and CTR are different names for the same structure', 'B. A CTR starts at the surface; a TCA (now called a Terminal Manoeuvring Area or TMA) begins at a specified altitude above the surface and provides controlled airspace for arriving and departing IFR aircraft', 'C. A TCA is Class G airspace above an aerodrome', 'D. TCAs are for military aircraft only'],
  correct: 1,
  explanation: 'AIP ENR 1.4: a Terminal Manoeuvring Area (TMA/formerly TCA) is controlled airspace established above the surface to provide protection for IFR arrivals and departures. It differs from a CTR in that it does not extend to the surface.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under CASR 91.695, what are the consequences for a pilot who operates an aircraft while "under the influence" of a psychoactive substance?',
  options: ['A. A $500 penalty applies for a first offence', 'B. Operating while under the influence of alcohol, drugs, or other psychoactive substances is a serious offence under the Civil Aviation Act and may result in licence suspension, cancellation, and criminal penalties', 'C. The pilot will receive a warning only for a first offence', 'D. Only blood alcohol above 0.10 constitutes an offence'],
  correct: 1,
  explanation: 'Civil Aviation Act 1988 s.30DB and CASR 91.695: operating an aircraft while under the influence of any psychoactive substance (including alcohol and drugs) is a criminal offence. The blood alcohol limit for aviation is 0.02 g/210L breath (compared to 0.05 for road).',
  reference: 'Civil Aviation Act 1988 s.30DB'
},

{
  question: 'Under AIP ENR 1.1, what is the purpose of a TMA (Terminal Manoeuvring Area) base altitude?',
  options: ['A. It defines the minimum safe altitude for jet aircraft only', 'B. It defines the lower limit of controlled airspace above the surface to protect IFR arrivals and departures transitioning between the en-route structure and the CTR', 'C. It sets the transponder mandatory zone boundary', 'D. It replaces the CTR for non-turbine aircraft'],
  correct: 1,
  explanation: 'AIP ENR 1.4: the TMA base altitude establishes the floor of controlled airspace in the terminal area. It is designed to protect instrument procedures for arriving and departing IFR traffic during the transition between cruise altitude and the CTR.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under CASR 91.225, what is the minimum information required when lodging a SARTIME with ATS?',
  options: ['A. Aircraft registration, pilot name, fuel endurance, and nominated time of arrival', 'B. Aircraft registration or callsign, route, destination, estimated time of arrival, and the SARTIME (time after which SAR action is to be initiated)', 'C. Pilot name and mobile phone number only', 'D. Full ICAO flight plan details'],
  correct: 1,
  explanation: 'AIP ENR 1.10: a SARTIME lodgement must include at minimum the aircraft identification, planned route or destination, ETA, and the nominated SARTIME. Additional information improves the efficiency of SAR operations.',
  reference: 'AIP ENR 1.10 / CASR 91.225'
},

{
  question: 'Under CASR 91.795, what documents must be kept on an aircraft for a charter flight?',
  options: ['A. Certificate of registration only', 'B. Certificate of registration, certificate of airworthiness (or authority to fly), maintenance release, and journey log', 'C. Pilot licence and medical certificate only', 'D. Documents are kept at base; copies are not required on the aircraft'],
  correct: 1,
  explanation: 'CASR 91.785 and 91.795: for a charter operation, the aircraft must carry the certificate of registration, certificate of airworthiness or authority to fly, current maintenance release, and a journey log (or equivalent).',
  reference: 'CASR 91.785 / CASR 91.795'
},

{
  question: 'Under AIP ENR 1.2, what is the minimum visibility for VFR flight in Class C airspace?',
  options: ['A. 1,500 m', 'B. 5,000 m', 'C. 8,000 m above FL200; 5,000 m at or below FL200', 'D. 3,000 m at all altitudes'],
  correct: 2,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: VFR flight in Class C airspace requires 5,000 m visibility at or below FL200, and 8,000 m visibility above FL200.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 61.900, what is a "flight review" and when is it required?',
  options: ['A. A flight review is an annual medical inspection', 'B. A biennial (every 2 years) review conducted with a flight instructor to assess the pilot\'s proficiency, required to maintain pilot-in-command privileges', 'C. A review conducted only after an incident or accident', 'D. A flight review is required every 6 months for CPL holders'],
  correct: 1,
  explanation: 'CASR 61.900: a biennial flight review (BFR) must be completed within the previous 24 months to exercise PIC privileges (excluding IFR operations which have a separate instrument proficiency check requirement).',
  reference: 'CASR 61.900'
},

{
  question: 'Under AIP ENR 1.6, when may a pilot use the phrase "MAYDAY MAYDAY MAYDAY"?',
  options: ['A. Whenever the weather is below minima', 'B. Only when declaring a hijack', 'C. When the aircraft or its occupants are in grave and imminent danger requiring immediate assistance', 'D. At any time the pilot determines conditions are abnormal'],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: the MAYDAY distress call is used only when an aircraft is in grave and imminent danger and requires immediate assistance. It takes priority over all other communications.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under Part 91 MOS, what is the required minimum pilot-in-command instrument time for a CPL holder to qualify for an instrument rating?',
  options: ['A. 10 hours', 'B. 50 hours', 'C. 25 hours', 'D. 5 hours'],
  correct: 0,
  explanation: 'CASR 61.390 Table 61.390: a CPL applicant for an instrument rating must have a minimum of 10 hours of instrument time, of which at least 5 hours are dual instrument instruction under a CFII.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'Under CASR 91.460, what is the requirement for a pilot to fly an ILS approach to minimums?',
  options: ['A. The pilot must hold an instrument rating with the appropriate aircraft type/class rating', 'B. Any pilot may fly an ILS approach if instructed by ATC', 'C. An ILS approach requires an ATPL', 'D. The pilot must hold a Category II approval regardless of minimums'],
  correct: 0,
  explanation: 'CASR 91.460 and CASR Part 61: to conduct an IFR approach procedure, including ILS, the pilot must hold a current instrument rating endorsed with the appropriate aircraft category and class.',
  reference: 'CASR 91.460 / CASR Part 61'
},

{
  question: 'Under AIP ENR 1.10, what action should a pilot take if they have NOT received an expected SARWATCH cancellation call from a flight in a remote area?',
  options: ['A. Wait 60 minutes past ETA before taking any action', 'B. Initiate SAR action immediately at the nominated SARTIME by contacting JRCC Australia or ATS', 'C. Contact the pilot\'s mobile phone first', 'D. Notify CASA and wait for their instructions'],
  correct: 1,
  explanation: 'AIP ENR 1.10: if a SARTIME expires without a cancellation, the responsible person must immediately contact JRCC Australia (1800 815 257) to initiate SAR alerting. Any delay could be critical.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under CASR 91.505, which of the following is NOT required equipment for VFR flight during the day in a single-engine piston aircraft?',
  options: ['A. Magnetic compass', 'B. Airspeed indicator', 'C. Radio altimeter', 'D. Altimeter'],
  correct: 2,
  explanation: 'Part 91 MOS s.26.04: VFR day minimum equipment for a single-engine aircraft includes magnetic compass, altimeter, ASI, tachometer or manifold pressure gauge, and oil pressure/temperature gauges. A radio altimeter is not required for basic VFR day operations.',
  reference: 'Part 91 MOS 2020 s.26.04'
},

{
  question: 'Under AIP ENR 6.1, what does "WILCO" mean in radiotelephony?',
  options: ['A. I have received your message only', 'B. I have received and understood your message and will comply', 'C. I understand but cannot comply', 'D. Transmission is incomplete — please repeat'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "WILCO" (Will Comply) means "I have received your message, understand it, and will comply with it." It combines receipt and compliance, unlike "ROGER" which is receipt only.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.350, what is the definition of "minimum fuel" and what action should a pilot take?',
  options: ['A. Minimum fuel means less than 30 minutes remaining; the pilot must land immediately', 'B. Minimum fuel is declared when the fuel state is such that the pilot is committed to land at a specific aerodrome and can accept no additional delay. It is advisory, not an emergency, but ATC will provide priority handling.', 'C. Minimum fuel is equivalent to a MAYDAY declaration', 'D. Minimum fuel must be declared when fuel for 1 hour remains'],
  correct: 1,
  explanation: 'AIP ENR 6.1: "MINIMUM FUEL" informs ATC that the fuel state has reached a point where the pilot can accept no further delay. It is an advisory, not an emergency, but ATC should give the aircraft priority handling to ensure expeditious routing.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR Part 61, what does the "recent experience" requirement for night flight mean for a PPL or CPL holder?',
  options: ['A. 3 take-offs and landings in the preceding 90 days in the same category and class, conducted at night', 'B. Completion of a night circuit check every 12 months', 'C. 5 hours night flying in the last 12 months', 'D. Instrument rating is required for all night flights'],
  correct: 0,
  explanation: 'CASR 61.395 and 61.870: to carry passengers at night, a pilot must have completed 3 take-offs and landings at night within the preceding 90 days in the same category and class of aircraft.',
  reference: 'CASR 61.395 / 61.870'
},

{
  question: 'Under CASR 91.225, what is the consequence of failing to cancel a SARTIME on arrival?',
  options: ['A. A $200 fine is issued automatically', 'B. SAR resources are activated, which wastes significant emergency resources and may expose the pilot to costs or penalties', 'C. The pilot\'s licence is automatically suspended', 'D. No consequence; it is the responsible person\'s responsibility only'],
  correct: 1,
  explanation: 'CASR 91.225 and Civil Aviation Act 1988: failure to cancel a SARTIME results in the activation of SAR resources (JRCC, aircraft, vessels). This wastes considerable resources and may result in civil or criminal liability for the costs incurred.',
  reference: 'CASR 91.225 / Civil Aviation Act 1988'
},

{
  question: 'Under AIP ENR 1.4, what does "Class E airspace" in Australia primarily serve?',
  options: ['A. High-altitude supersonic flight', 'B. IFR operations in remote and oceanic areas, and some terminal areas, where radar coverage may be limited', 'C. Exclusively VFR operations', 'D. Military fast jet operations below FL245'],
  correct: 1,
  explanation: 'AIP ENR 1.4: Class E airspace in Australia serves IFR operations in areas where radar coverage is limited, such as remote Australia and oceanic areas. VFR is permitted but receives no separation from IFR aircraft.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under CASR 91.295, what is the PIC\'s responsibility with respect to aircraft loading of cargo?',
  options: ['A. Cargo loading is solely the ground handler\'s responsibility', 'B. The PIC must ensure all cargo is correctly loaded, secured, and that the aircraft is within weight and balance limits before flight', 'C. Cargo loading requirements apply only to aircraft over 5,700 kg MTOW', 'D. The load manifest automatically satisfies the PIC\'s obligation'],
  correct: 1,
  explanation: 'CASR 91.295: the PIC must ensure that cargo is properly loaded, distributed, and secured so that the aircraft is within its certified weight and balance limits and that cargo cannot shift during flight.',
  reference: 'CASR 91.295'
},

{
  question: 'Under CASR 91.265, what must a pilot do before entering a cloud if flying VFR?',
  options: ['A. File an IFR flight plan', 'B. Maintain VMC at all times — a VFR pilot must not enter cloud', 'C. Notify ATC of cloud entry', 'D. Reduce speed to turbulence penetration speed'],
  correct: 1,
  explanation: 'CASR 91.265 and 91.615: a VFR pilot is not permitted to fly in IMC (instrument meteorological conditions). Entering cloud constitutes a breach of VFR and is a serious aviation offence that places the aircraft in danger.',
  reference: 'CASR 91.265 / 91.615'
},

{
  question: 'Under AIP ENR 1.1, what is the key difference between a Restricted Area and a Danger Area?',
  options: ['A. There is no difference — both prohibit all flight', 'B. A Restricted Area imposes legal restrictions on flight (generally prohibited without permission); a Danger Area warns of hazardous activities but does not legally prohibit civil flight', 'C. Danger Areas are permanent; Restricted Areas are temporary', 'D. Restricted Areas apply to military; Danger Areas apply to civil aircraft'],
  correct: 1,
  explanation: 'AIP ENR 5.1 / CASR 91.185-91.195: a Restricted Area legally restricts or prohibits flight without authorisation. A Danger Area warns of potentially hazardous operations (e.g. military exercises) but does not legally prohibit civil flight, though extreme caution is advised.',
  reference: 'AIP ENR 5.1 / CASR 91.185-91.195'
},

{
  question: 'Under CASR 91.735, what is a "minimum equipment list" (MEL) used for?',
  options: ['A. Listing all equipment required for IFR flight', 'B. Providing a basis for flight dispatch with specified items inoperative, subject to conditions and limitations listed for each item', 'C. Defining the minimum fuel load for each aircraft type', 'D. Listing mandatory rescue equipment for overwater operations'],
  correct: 1,
  explanation: 'CASR 91.735: a Minimum Equipment List (MEL) is an approved document that lists equipment which may be inoperative for specific operations, with appropriate conditions and limitations. It allows dispatch of aircraft with minor unserviceabilities.',
  reference: 'CASR 91.735'
},

{
  question: 'Under CASR 91.255, what is the obligation of a pilot receiving a TCAS/ACAS resolution advisory (RA)?',
  options: ['A. Inform ATC and continue on the assigned ATC clearance', 'B. Respond immediately to the RA; notify ATC as soon as practicable; resume cleared flight path only after passing the conflict', 'C. Respond to the RA only if visual contact with the conflicting traffic is established', 'D. TCAS advisories are for information only; ATC clearances always have priority'],
  correct: 1,
  explanation: 'CASR 91.255 and AIP ENR 1.6: a pilot must respond immediately to a TCAS RA, deviating from the ATC clearance if necessary. ATC must be informed as soon as practicable, and normal flight may resume after the conflict is resolved.',
  reference: 'CASR 91.255 / AIP ENR 1.6'
},

{
  question: 'Under CASR 91.485, what is a "stabilised approach" criterion and at what height should it normally be achieved?',
  options: ['A. The aircraft must be on centreline with flaps up before 1,000 ft AAL', 'B. By 1,000 ft AAL (IMC) or 500 ft AAL (VMC), the aircraft should be on the correct profile, at the correct speed, in the correct configuration, with stable thrust', 'C. A stabilised approach requires a 3-degree ILS glidepath only', 'D. Stabilised approach criteria are operator-defined and have no regulatory basis'],
  correct: 1,
  explanation: 'CASR 91.485 and CAAP 5.23-1: Australian aviation safety standards require aircraft to be stabilised by 1,000 ft AAL in IMC or 500 ft AAL in VMC, with correct speed, configuration, profile, and stable power. A go-around must be initiated if not stabilised.',
  reference: 'CASR 91.485 / CAAP 5.23-1'
},

{
  question: 'Under AIP ENR 1.4, what is an "OCA" (Obstacle Clearance Altitude) used for?',
  options: ['A. The minimum safe altitude for all en-route cruise', 'B. The lowest altitude on an instrument approach procedure that provides required obstacle clearance within the approach area', 'C. The minimum altitude for radar vectoring in a TMA', 'D. The altitude above which RVSM applies'],
  correct: 1,
  explanation: 'AIP ENR 4.5 and ICAO Doc 8168: Obstacle Clearance Altitude (OCA) or Obstacle Clearance Height (OCH) is the minimum altitude/height on an instrument approach procedure that provides the required obstacle clearance within the defined approach area.',
  reference: 'AIP ENR 4.5 / ICAO Doc 8168'
},

{
  question: 'Under Part 91 MOS s.26.16, what oxygen requirements apply to unpressurised aircraft flying above FL250?',
  options: ['A. Oxygen is not required below FL350 for two-pilot operations', 'B. At FL250 and above, all flight crew must use supplemental oxygen continuously; above FL350, at least one pilot must be on oxygen at all times', 'C. Oxygen is only required for passengers; crew may use it at discretion', 'D. Supplemental oxygen is required for crew above FL150 only'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.16 and CASR 91.545: at FL250 and above in an unpressurised aircraft, all flight crew must use supplemental oxygen. Above FL350, at least one pilot at the controls must use oxygen at all times. Passenger oxygen requirements apply at lower altitudes.',
  reference: 'Part 91 MOS 2020 s.26.16 / CASR 91.545'
},

{
  question: 'Under CASR 91.245, can a student pilot (PPL in training) carry passengers?',
  options: ['A. Yes, with the endorsement of a flight instructor on the flight', 'B. No — a student pilot (person holding a student pilot certificate or conducting solo training) may not carry passengers', 'C. Yes, if the instructor has signed the maintenance release', 'D. Yes, for training flights up to 25 NM from the aerodrome'],
  correct: 1,
  explanation: 'CASR 61.160 and CASR 61.165: a student pilot conducting solo training is not authorised to carry passengers. Passenger carrying requires at least a private pilot licence.',
  reference: 'CASR 61.160 / 61.165'
},

{
  question: 'Under AIP ENR 6.4, what is the correct CTAF frequency call at a non-controlled aerodrome when taxiing for departure?',
  options: ['A. A call is not required until entering the runway', 'B. "[Aerodrome name] Traffic, [Aircraft callsign], taxiing [runway direction], [aerodrome name]"', 'C. A call to Area Control before taxiing', 'D. "[Callsign] ready for departure runway [number]"'],
  correct: 1,
  explanation: 'AIP ENR 6.4: at a CTAF aerodrome, pilots must broadcast their intentions when taxiing for departure, following the standard format: aerodrome name, aircraft callsign, operation (taxiing), runway intention, and aerodrome name again.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under CASR 91.615, what are the VMC minima for VFR flight in Class G at or above 3,000 ft AMSL during the day?',
  options: ['A. 1,500 m visibility, clear of cloud', 'B. 5,000 m visibility, 1,000 ft above/500 ft below/600 m horizontal cloud clearance', 'C. 3,000 m visibility, 500 ft vertical and 600 m horizontal cloud clearance', 'D. 8 km visibility, 1,500 m horizontal and 1,000 ft vertical cloud clearance'],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or above 3,000 ft AMSL during the day, the VMC minima are 5,000 m flight visibility and cloud clearance of 1,000 ft above, 500 ft below, and 600 m horizontally.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'Under CASR 91.640, what is the general rule regarding aerobatic flight above populated areas?',
  options: ['A. Aerobatics are permitted above populated areas with ATC clearance', 'B. Aerobatic flight is prohibited over populated areas, over an open-air assembly, or in controlled airspace without ATC permission', 'C. Aerobatics are permitted if conducted above 3,000 ft AGL', 'D. Only approved display aircraft may conduct aerobatics anywhere'],
  correct: 1,
  explanation: 'CASR 91.640: aerobatic flight is prohibited over populated areas, over an open-air assembly of persons, within controlled airspace without ATC permission, or below the minimum height prescribed for the area.',
  reference: 'CASR 91.640'
},

{
  question: 'Under AIP ENR 1.1, what is a "flight information region" (FIR) and who manages the Melbourne and Brisbane FIRs?',
  options: ['A. An FIR is a restricted airspace — Airservices Australia manages Melbourne; RAAF manages Brisbane', 'B. An FIR is a volume of airspace within which flight information and alerting services are provided; both the Melbourne and Brisbane FIRs are managed by Airservices Australia', 'C. FIRs are ICAO-defined regions managed by individual airlines for their operations', 'D. The Melbourne FIR is managed by CASA; Brisbane by Airservices'],
  correct: 1,
  explanation: 'AIP GEN 2.1 and ICAO: Australia is divided into the Melbourne and Brisbane FIRs. Both are managed by Airservices Australia, which provides flight information, alerting, and ATC services within them.',
  reference: 'AIP GEN 2.1'
},

{
  question: 'Under CAO 48.1, in a two-pilot charter operation starting at 0900, what is the maximum FDP?',
  options: ['A. 14 hours', 'B. 13 hours', 'C. 11 hours', 'D. 12 hours'],
  correct: 0,
  explanation: 'CAO 48.1: for a two-pilot crew in charter operations starting between 0800 and 1159 local, the maximum FDP is 14 hours. Single-pilot operations have reduced limits based on start time.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under CASR 91.430, what visibility and cloud conditions are required to conduct Special VFR in a Class D CTR?',
  options: ['A. 1,500 m visibility and clear of cloud', 'B. 800 m visibility and clear of cloud for helicopters; 1,500 m and clear of cloud for aeroplanes', 'C. 3,000 m and 500 ft ceiling', 'D. Any visibility as long as ATC approves'],
  correct: 1,
  explanation: 'CASR 91.430: special VFR in a CTR requires a minimum flight visibility of 800 m for helicopters and 1,500 m for aeroplanes, and the pilot must remain clear of cloud and in sight of the surface.',
  reference: 'CASR 91.430'
},

{
  question: 'Under AIP ENR 3.1, what does "track" mean as distinct from "heading" in navigation?',
  options: ['A. Track and heading are interchangeable terms', 'B. Track is the actual path of the aircraft over the ground; heading is the direction the nose of the aircraft is pointed', 'C. Track is the magnetic heading corrected for variation', 'D. Track applies only to IFR operations'],
  correct: 1,
  explanation: 'AIP ENR 3.1 and VFRG: "track" is the actual path made good over the ground, while "heading" is the direction in which the aircraft nose is pointing. They differ due to wind effect (drift).',
  reference: 'AIP ENR 3.1 / VFRG v8.3'
},

{
  question: 'Under CASR 91.470, when flying a circling approach, what is the maximum speed for a Category B aircraft during circling?',
  options: ['A. 135 KIAS', 'B. 150 KIAS', 'C. 180 KIAS', 'D. 120 KIAS'],
  correct: 0,
  explanation: 'CASR 91.470 and ICAO Doc 8168: Category B aircraft (approach speed 91–120 kt) have a maximum circling speed of 135 KIAS.',
  reference: 'CASR 91.470 / ICAO Doc 8168'
},

{
  question: 'Under AIP ENR 6.1, what does "AFFIRM" mean in ICAO radiotelephony?',
  options: ['A. I understand your message', 'B. Yes', 'C. Proceed with the action', 'D. Cleared as requested'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "AFFIRM" means "Yes." It is used in radiotelephony to give an affirmative response. "NEGATIVE" is used for no.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.510, when must a Mode S transponder with Extended Squitter (ADS-B Out) be operated in Australian airspace?',
  options: ['A. Only above FL290 in RVSM airspace', 'B. In designated ADS-B mandatory airspace as published in AIP ENR 1.6 — broadly Class A, C, and E above specified altitudes', 'C. ADS-B is not yet mandatory in Australia', 'D. Only for commercial aircraft above 5,700 kg'],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: ADS-B Out (1090 ES) is mandatory in airspace designated in AIP ENR 1.6, which includes Class A airspace and specified Class C and E airspace above certain altitudes. Requirements are progressively expanding.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'Under Part 91 MOS Table 19.02(1), what is the holding fuel requirement for a turbine-engine IFR aeroplane?',
  options: ['A. 15 minutes at holding speed at the destination', 'B. 30 minutes at holding speed at the destination at 1,500 ft AMSL (or MSA if higher)', 'C. 45 minutes at cruise altitude', 'D. 10 minutes at holding speed'],
  correct: 1,
  explanation: 'Part 91 MOS Table 19.02(1) Item 4: final reserve fuel for a turbine-engine IFR aeroplane is 30 minutes at holding speed at 1,500 ft AMSL (or the minimum safe altitude if higher) at the destination.',
  reference: 'Part 91 MOS 2020 Table 19.02(1) Item 4'
},

{
  question: 'Under AIP ENR 1.2, what are the VMC minima for VFR flight in Class D airspace?',
  options: ['A. Same as Class C: 5,000 m / 1,000ft above / 500 ft below / 1 NM horizontal', 'B. 5,000 m visibility; 1,000 ft vertically and 1,500 m horizontally from cloud', 'C. 3,000 m visibility; clear of cloud', 'D. 8,000 m visibility and 1,000 ft cloud clearance'],
  correct: 0,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class D airspace, VFR flight requires 5,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM (approximately 1,852 m) horizontally.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 91.555, what is an "ATC route clearance" and how is it different from a "level clearance"?',
  options: ['A. They are identical; a route clearance includes all level assignments', 'B. A route clearance authorises the lateral path of the flight; a level clearance authorises a specific altitude or flight level — both are required and both must be read back', 'C. Route clearances are verbal; level clearances must be in writing', 'D. Level clearances are issued only in Class A airspace'],
  correct: 1,
  explanation: 'CASR 91.555 and AIP ENR 6.1: ATC route clearances cover the lateral path; level clearances (altitude instructions) cover vertical profile. Both are mandatory read-back items and must be complied with separately.',
  reference: 'CASR 91.555 / AIP ENR 6.1'
},

{
  question: 'Under AIP ENR 1.6, what is the purpose of the "GUARD" frequency 121.5 MHz?',
  options: ['A. A military-only discrete frequency', 'B. The international aeronautical emergency and distress frequency, monitored by all aircraft and ATC units', 'C. A CTAF frequency used at uncontrolled aerodromes', 'D. The ADS-B datalink frequency'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and ICAO Annex 10: 121.5 MHz is the international VHF emergency frequency. All aircraft are recommended to monitor 121.5 MHz when radio capacity allows, and all ATC units monitor it continuously.',
  reference: 'AIP ENR 6.1 / ICAO Annex 10'
},

{
  question: 'Under CASR 91.625, in Class G airspace below 3,000 ft AMSL at night, what are the VMC requirements?',
  options: ['A. Same as day: 1,500 m visibility, clear of cloud', 'B. 3,000 m visibility; 1,000 ft above, 500 ft below, 600 m horizontal cloud clearance', 'C. 5,000 m visibility; clear of cloud', 'D. 1,500 m visibility; 500 ft vertical and 600 m horizontal cloud clearance'],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: night VFR in Class G below 3,000 ft AMSL requires 3,000 m visibility and cloud clearance of 1,000 ft above, 500 ft below, and 600 m horizontal.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'Under CASR Part 61, what does "command time" mean and how much is required for a CPL?',
  options: ['A. Time as PIC — 70 hours total PIC time is required for a CPL', 'B. Time as PIC or student PIC (supervised solo) — a minimum of 70 hours PIC time is required for CPL', 'C. Any time in the pilot seat, including dual', 'D. Only time in aircraft with a type rating'],
  correct: 1,
  explanation: 'CASR 61.390: to qualify for a CPL, a pilot must have completed at least 70 hours as pilot-in-command (PIC), including both solo and supervised solo (student PIC) time.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'Under CASR 91.335, what transponder code indicates unlawful interference (hijack)?',
  options: ['A. 7700', 'B. 7600', 'C. 7500', 'D. 7000'],
  correct: 2,
  explanation: 'CASR 91.335 and AIP ENR 1.6: transponder code 7500 signals unlawful interference (hijack). 7700 = general emergency; 7600 = communication failure; 7000 = VFR conspicuity code.',
  reference: 'CASR 91.335 / AIP ENR 1.6'
},

{
  question: 'Under AIP ENR 1.1, what minimum equipment must a VFR aircraft have to enter Class C airspace?',
  options: ['A. Two-way radio and Mode C transponder only', 'B. Two-way radio, serviceable Mode C transponder, and any required navigation equipment for the route', 'C. An RNAV system and GPS', 'D. ILS receiver and DME'],
  correct: 1,
  explanation: 'CASR 91.410 and AIP ENR 1.6: to operate in Class C airspace, an aircraft must have a serviceable two-way radio, a Mode C altitude-reporting transponder, and navigation equipment adequate for the route.',
  reference: 'CASR 91.410 / AIP ENR 1.6'
},

{
  question: 'Under AIP ENR 1.4, what is the difference between an RNAV route and a conventional airways route?',
  options: ['A. RNAV routes are for helicopters only', 'B. RNAV routes are defined by coordinates or waypoints not necessarily tied to ground-based navaids; conventional routes are defined by VOR/NDB radials', 'C. Conventional airways allow VFR flight; RNAV airways do not', 'D. There is no difference'],
  correct: 1,
  explanation: 'AIP ENR 3.1 and AIP ENR 3.3: conventional airways follow radials from VOR/NDB ground stations. RNAV (area navigation) routes use GPS or GNSS-defined waypoints, providing more direct routing independent of ground-based navaids.',
  reference: 'AIP ENR 3.1 / 3.3'
},

{
  question: 'Under CASR Part 67, what must a pilot do if their medical condition changes in a way that may affect their fitness to fly?',
  options: ['A. Continue flying until the next scheduled medical examination', 'B. Notify CASA\'s Designated Aviation Medical Examiner (DAME) and not exercise licence privileges until assessed as fit', 'C. Report the change at the next annual examination only', 'D. Self-certify fitness if symptoms are mild'],
  correct: 1,
  explanation: 'CASR Part 67: pilots must not exercise licence privileges if they know or reasonably believe their medical fitness is compromised. They must advise their DAME and not fly until assessed as meeting the class of medical certificate required.',
  reference: 'CASR Part 67'
},

{
  question: 'Under CASR 91.230, what is the correct action when ATC issues "TRAFFIC ALERT — TRAFFIC IS [bearing] [distance] MILES, [altitude]"?',
  options: ['A. Squawk 7700 immediately', 'B. Acknowledge the call and look for the traffic visually; advise ATC when traffic is in sight or if unable to acquire', 'C. Turn 90 degrees away from the traffic immediately', 'D. Descend 1,000 ft to increase vertical separation'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and CASR 91.230: when ATC issues a traffic advisory, the pilot should acknowledge, scan for the traffic visually, and report to ATC whether the traffic is in sight. The see-and-avoid principle applies.',
  reference: 'AIP ENR 1.1 / CASR 91.230'
},

{
  question: 'Under CASR 91.670, what speed restriction applies to aircraft on approach to land below 10,000 ft?',
  options: ['A. 200 KIAS', 'B. 250 KIAS', 'C. 300 KIAS', 'D. No speed limit applies on approach'],
  correct: 1,
  explanation: 'CASR 91.660 and 91.665: below 10,000 ft the 250 KIAS limit applies. Additionally, within 4 NM of a Class C or D aerodrome at or below 2,500 ft, the limit is 200 KIAS. ATC may also issue specific speed instructions.',
  reference: 'CASR 91.660 / 91.665'
},

{
  question: 'Under AIP ENR 1.4, what is a "TRA" (Temporary Reserved Airspace) and how is activation notified?',
  options: ['A. A TRA is permanent restricted airspace; activation is via ERSA', 'B. A TRA is airspace temporarily reserved for a specific operation (e.g. military exercises); activation is via NOTAM published in NAIPS', 'C. A TRA requires a CASA exemption to enter', 'D. A TRA is a special VFR clearance area'],
  correct: 1,
  explanation: 'AIP ENR 5.1 and AIP RAC: Temporary Reserved Airspace is designated for specific operations (military, skydiving, airshows) and its activation is notified by NOTAM through NAIPS. Civil aircraft may enter when the TRA is not active.',
  reference: 'AIP ENR 5.1 / NAIPS'
},

{
  question: 'Under CASR 91.510, what action must a pilot take if they discover their transponder has become unserviceable in flight within controlled airspace?',
  options: ['A. Land immediately at the nearest aerodrome', 'B. Notify ATC as soon as practicable; ATC will advise whether the flight may continue or will provide alternative instructions', 'C. Squawk 7700 until landing', 'D. File an ASIR immediately while airborne'],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: if a transponder becomes unserviceable in flight in controlled airspace, the pilot must notify ATC as soon as practicable. ATC will determine whether the flight may continue and may issue revised instructions.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'Under AIP ENR 1.1, what is a "special use airspace" designation?',
  options: ['A. Airspace reserved for airline operations only', 'B. Airspace with specific limitations, restrictions, or warnings applied, including Restricted Areas, Danger Areas, and Military Operating Areas', 'C. Class C airspace around major airports', 'D. Airspace below the transition layer only'],
  correct: 1,
  explanation: 'AIP ENR 5.1: special use airspace includes areas with defined dimensions where activities must be confined because of their nature, or where limitations are imposed on aircraft not participating in those activities, such as Restricted, Prohibited, and Danger Areas.',
  reference: 'AIP ENR 5.1'
},

{
  question: 'Under CASR 91.395, what is the difference between a Decision Altitude (DA) and a Minimum Descent Altitude (MDA)?',
  options: ['A. DA is for ILS approaches; MDA is for VOR approaches — both function identically', 'B. DA is used on precision approaches; the missed approach is initiated at or before reaching DA. MDA is used on non-precision approaches; descent below MDA is not permitted without required visual references', 'C. There is no operational difference; the terms are interchangeable', 'D. DA is set 200 ft above MDA on all approaches'],
  correct: 1,
  explanation: 'CASR 91.395 and ICAO Doc 8168: DA (Decision Altitude) is used on precision approaches (e.g. ILS). At DA the pilot must immediately initiate a missed approach unless visual references are established. MDA is used on non-precision approaches; the aircraft levels at MDA and must not descend below until the required visual references are acquired.',
  reference: 'CASR 91.395 / ICAO Doc 8168'
},

{
  question: 'Under AIP GEN 3.3, what is a "serious incident" under the Transport Safety Investigation Act?',
  options: ['A. Any aircraft damage exceeding $1,000', 'B. An occurrence involving circumstances indicating that an accident nearly occurred — not meeting the definition of accident but involving significant risk', 'C. Any engine failure during flight', 'D. Any flight requiring emergency services attendance'],
  correct: 1,
  explanation: 'Transport Safety Investigation Act 2003 s.3: a serious incident is an occurrence other than an accident that involves circumstances indicating there was a high probability of an accident and that is associated with the operation of an aircraft.',
  reference: 'Transport Safety Investigation Act 2003 s.3 / AIP GEN 3.3'
},

{
  question: 'Under CASR 91.670, an ATC speed instruction reads "MAINTAIN 250 KNOTS." What does this mean?',
  options: ['A. Maintain at least 250 KIAS', 'B. Maintain 250 KIAS until the next instruction', 'C. Reduce to 250 KIAS then reduce further for approach', 'D. Fly 250 KIAS groundspeed'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "MAINTAIN [speed]" means maintain the specified airspeed until ATC issues a new instruction or the aircraft is on final approach. Speed instructions are always in terms of IAS unless otherwise stated.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.785, is the electronic (digital) form of a certificate of airworthiness acceptable during a ramp check by an authorised officer?',
  options: ['A. Only a paper original is acceptable', 'B. An approved electronic copy may be acceptable if CASA has approved the format; operators should check their operations manual', 'C. Electronic documents are never acceptable for ramp checks', 'D. A photograph on a mobile phone always satisfies the requirement'],
  correct: 1,
  explanation: 'CASR 91.785: documents may be carried in approved electronic form if CASA accepts the format. Operators under AOCs should check their manuals. The authorised officer must still be able to inspect the document.',
  reference: 'CASR 91.785'
},

{
  question: 'Under Part 91 MOS s.26.12, when does a pitot-static system test become mandatory?',
  options: ['A. Every 6 months regardless of operations', 'B. Before an aircraft is used on IFR operations, after maintenance that could affect the system, or per the maintenance schedule', 'C. After every 100 hours of flight', 'D. Only after repairs to the airframe'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.12 and CASR 91.610: the pitot-static and altimeter system must be tested before IFR use and after maintenance that may affect the system. Test intervals are also specified in the aircraft maintenance schedule.',
  reference: 'Part 91 MOS 2020 s.26.12'
},

{
  question: 'Under AIP ENR 1.1, what is "Class B airspace" and does it exist in Australia?',
  options: ['A. Class B is used around all Australian capital cities', 'B. Class B airspace is an ICAO-defined class that is not currently used in Australia', 'C. Class B is used in military terminal areas only', 'D. Class B is above FL600 in Australia'],
  correct: 1,
  explanation: 'AIP ENR 1.1: ICAO defines airspace Classes A through G. Australia does not currently designate any airspace as Class B. Australian airspace uses Classes A, C, D, E, and G.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.155, what does an ATC clearance "CLEARED TO [fix] VIA [route]" authorise the pilot to do?',
  options: ['A. Fly directly to the fix by the shortest route', 'B. Fly to the specified fix via the specified route only; no deviation from the route is authorised without a new clearance', 'C. Fly to the fix via any route at the pilot\'s discretion', 'D. Fly the IFR departure procedure then proceed direct'],
  correct: 1,
  explanation: 'CASR 91.155 and AIP ENR 6.1: an ATC route clearance specifying a fix and route authorises the pilot to fly only the stated route to the fix. Deviations require an amended clearance from ATC.',
  reference: 'CASR 91.155 / AIP ENR 6.1'
},

{
  question: 'Under CASR 91.185, what is the significance of a NOTAM that activates a Restricted Area along your planned route?',
  options: ['A. NOTAMs are advisory only and the pilot may proceed', 'B. If the Restricted Area is active during your planned route transit, you must either avoid it or obtain permission from the controlling authority before entry', 'C. A Restricted Area may be transited at night without authorisation', 'D. ATC will automatically route you around any Restricted Area'],
  correct: 1,
  explanation: 'CASR 91.185 and AIP ENR 5.1: an active Restricted Area is legally restricted airspace. The pilot must either plan to avoid it or obtain permission from the designated authority before entry.',
  reference: 'CASR 91.185 / AIP ENR 5.1'
},

{
  question: 'Under AIP ENR 4.1, what is the "Transition Altitude" in Australia and what is the standard setting below it?',
  options: ['A. FL180; QNH is used below the transition altitude', 'B. 10,000 ft AMSL in most of Australia; below the transition altitude, altimeters are set to the local QNH', 'C. 3,000 ft AMSL; below this altitude use QFE', 'D. The transition altitude varies by aerodrome and is not published'],
  correct: 1,
  explanation: 'AIP ENR 4.1: the standard transition altitude in Australia is 10,000 ft AMSL (with some exceptions near high terrain). Below the transition altitude, altimeters are set to the local QNH. Above the transition level, standard pressure (1013.25 hPa) is used and flight levels are used.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under CASR 91.495, an IFR pilot vacates a runway after landing. ATC instructs "TAXI TO GATE VIA TAXIWAY ALPHA." What must the pilot do before crossing any other runway?',
  options: ['A. Proceed directly without further clearance as the taxi instruction covers all taxiways', 'B. Hold short of any runway intersection until receiving an explicit crossing clearance from ATC for each runway', 'C. Cross runways at taxi speed only', 'D. Announce crossing intentions on CTAF'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.495: a taxi instruction does not automatically authorise crossing any runway. The pilot must hold short of all runway holding points and obtain a specific runway crossing clearance from ATC before crossing each runway.',
  reference: 'AIP ENR 6.1 / CASR 91.495'
},

{
  question: 'Under AIP ENR 1.7, how often is an ATIS broadcast updated?',
  options: ['A. Every hour, on the hour', 'B. Whenever significant changes occur in the meteorological conditions, aerodrome state, or operational information, or at a minimum when a new hourly observation is available', 'C. Only when the runway changes', 'D. Every 30 minutes at major airports only'],
  correct: 1,
  explanation: 'AIP ENR 1.7: ATIS is updated whenever there is a significant change in the information (weather, runway, QNH, etc.) or when a new hourly weather observation becomes available. Each update receives a new sequential alphabetical identifier.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under CASR Part 61, what is the minimum cross-country experience required for a CPL?',
  options: ['A. 20 hours', 'B. 100 hours', 'C. 50 hours', 'D. 30 hours'],
  correct: 1,
  explanation: 'CASR 61.390 Table 61.390: a CPL applicant must have a minimum of 100 hours cross-country flight time, of which at least 20 hours are as PIC.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'Under AIP ENR 6.1, a pilot is cleared to "DESCEND TO FLIGHT LEVEL 150." At what point should the pilot commence the descent?',
  options: ['A. Immediately upon receiving the instruction', 'B. Only after reading back the clearance and receiving "READBACK CORRECT"', 'C. At the pilot\'s discretion, within the next 10 minutes', 'D. ATC will specify a "WHEN READY" qualifier if the pilot has discretion — otherwise commence immediately on clearance'],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: unless qualified by "WHEN READY," "IMMEDIATELY," or a specific time/fix, a descent clearance should be commenced promptly after readback. ATC will add qualifiers if timing is important.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under Part 91 MOS s.19.02, what is "alternate fuel" and how is it calculated?',
  options: ['A. Extra fuel loaded as a buffer above trip fuel', 'B. Fuel required to fly from the destination aerodrome to the nominated alternate aerodrome, including a missed approach at the destination, calculated at normal cruise consumption', 'C. 30 minutes of fuel at holding speed', 'D. 10% of total fuel carried'],
  correct: 1,
  explanation: 'Part 91 MOS Table 19.02(1) Item 3: alternate fuel is the fuel required to fly from the destination, including a missed approach, to the nominated alternate aerodrome at normal cruise, accounting for forecast meteorological conditions.',
  reference: 'Part 91 MOS 2020 Table 19.02(1) Item 3'
},

{
  question: 'Under CASR 91.615, what VMC minimum applies to VFR flight in Class G at or above 10,000 ft AMSL?',
  options: ['A. 5,000 m visibility; 1,000 ft above, 500 ft below, 600 m horizontal', 'B. 8,000 m visibility; 1,000 ft vertical and 1 NM horizontal cloud clearance', 'C. 3,000 m and clear of cloud', 'D. VFR is not permitted above FL100 in Class G'],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or above 10,000 ft AMSL, the minimum is 8,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM horizontally.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'Under CASR 91.430, may Special VFR be conducted at night?',
  options: ['A. Yes, with ATC permission at any time', 'B. Special VFR is not permitted at night unless the operator holds an approved Special VFR at Night procedure or the aircraft is a helicopter', 'C. SVFR at night is permitted only if visibility exceeds 3 km', 'D. SVFR is available at night only in Class D'],
  correct: 1,
  explanation: 'CASR 91.430: Special VFR at night is generally not available to fixed-wing aircraft unless specific operational approval exists. Helicopters may be granted SVFR at night under certain conditions with ATC approval.',
  reference: 'CASR 91.430'
},

{
  question: 'Under AIP ENR 1.6, what is the standard CTAF frequency at a non-controlled aerodrome and where is it published?',
  options: ['A. 126.7 MHz for all Australian aerodromes', 'B. 122.8 MHz nationally', 'C. Individual to each aerodrome — published in the ERSA entry for that aerodrome', 'D. 121.5 MHz at all non-controlled aerodromes'],
  correct: 2,
  explanation: 'AIP ENR 1.4 and ERSA: each non-controlled aerodrome has its own CTAF (Common Traffic Advisory Frequency), published in its ERSA entry. Some remote aerodromes use 126.7 MHz but this is not universal.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under CASR 91.475, during a non-precision approach, is a pilot permitted to descend below the MDA to manoeuvre to the runway?',
  options: ['A. Yes, provided the pilot has the runway environment in sight', 'B. No — the pilot may not descend below MDA. To descend below MDA, the required visual references must be in sight and a normal landing must be achievable', 'C. Yes, if within 1 NM of the runway threshold', 'D. Yes, if the visibility exceeds 2,000 m'],
  correct: 1,
  explanation: 'CASR 91.475 and 91.395: descent below MDA is only permitted when the required visual references are established AND a normal landing is achievable from the current position. If not, a missed approach must be executed.',
  reference: 'CASR 91.475 / 91.395'
},

{
  question: 'Under AIP ENR 1.1, what is the key operational requirement for IFR flight in Class G airspace compared to Class E?',
  options: ['A. IFR in Class G requires no additional clearance', 'B. In Class G, IFR aircraft do not receive ATC separation from other IFR aircraft; in Class E, ATC separates IFR from IFR. Both require IFR equipment and an instrument rating', 'C. IFR flight in Class G is prohibited', 'D. Class G requires a Special IFR clearance'],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class G airspace, IFR aircraft receive no separation from any other aircraft (IFR or VFR). In Class E, IFR aircraft receive separation from other IFR aircraft but not from VFR. Both classes require IFR flight to be conducted with appropriate equipment and ratings.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR Part 61, what is the "recency" requirement for solo circuit operations as a student pilot?',
  options: ['A. 3 take-offs and landings in the preceding 90 days', 'B. Determined by the flight instructor; there is no CASR-defined fixed recency period for student pilots', 'C. 5 flights in the preceding 30 days', 'D. 1 flight in the preceding 14 days'],
  correct: 1,
  explanation: 'CASR Part 61: student pilots operating under a solo endorsement are subject to the conditions set by their instructor. The instructor determines recency requirements and currency for solo flight; there is no fixed statutory period equivalent to the 90-day rule for PPL/CPL.',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'Under AIP ENR 5.1, what does a "D" prefix on an airspace designation (e.g. D123A) indicate?',
  options: ['A. The airspace is Class D controlled airspace', 'B. The airspace is a Danger Area', 'C. The airspace is a Defence area', 'D. The airspace is domestic use only'],
  correct: 1,
  explanation: 'AIP ENR 5.1: the prefix "D" followed by a number indicates a Danger Area. "R" indicates a Restricted Area and "P" indicates a Prohibited Area.',
  reference: 'AIP ENR 5.1'
},

{
  question: 'Under CASR 91.245, what is the minimum age to hold a Private Pilot Licence in Australia?',
  options: ['A. 16 years', 'B. 17 years', 'C. 18 years', 'D. 15 years'],
  correct: 1,
  explanation: 'CASR 61.160: to be granted a Private Pilot Licence the applicant must be at least 17 years of age at the time of the licence grant.',
  reference: 'CASR 61.160'
},

{
  question: 'Under CASR 91.650, what does the phrase "cruise clearance" mean in an IFR context?',
  options: ['A. Permission to fly at any altitude from the base to the top of the assigned block', 'B. Clearance to cruise at a specific level on the cleared route', 'C. Authority to fly VFR for the cruise portion of the flight', 'D. A clearance issued only on oceanic tracks'],
  correct: 0,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: a "cruise clearance" authorises the pilot to climb to and operate at any level within a specified altitude block, conducting approaches and landing at en-route aerodromes en route without further clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.610, what transition level is typically used when the QNH is between 1,013 and 997 hPa in Australia?',
  options: ['A. FL100', 'B. FL110', 'C. FL120', 'D. Transition level is published by ATC based on the current QNH'],
  correct: 3,
  explanation: 'AIP ENR 4.1: the transition level is assigned by ATC and varies according to the current QNH. In Australia, ATC publishes the transition level in the ATIS and issues it as part of IFR clearances to ensure at least 1,000 ft separation between the highest aircraft using QNH and the lowest aircraft using standard pressure.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under AIP ENR 1.4, how is Class E airspace floor designated in Australia where it meets Class G?',
  options: ['A. Class E always starts at 8,500 ft AMSL', 'B. The Class E floor is published on aeronautical charts and varies by location; it may be 8,500 ft AMSL or lower in some areas', 'C. Class E and G never coexist; one always terminates where the other begins', 'D. Class E begins at FL180 in all cases'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and Australian aeronautical charts: the Class E floor varies by location and is depicted on ERC and VNC charts. Common values are 8,500 ft AMSL in remote Australia, but it may be lower in published terminal areas.',
  reference: 'AIP ENR 1.4 / ERC Charts'
},

{
  question: 'Under CASR 91.395, what constitutes the "runway environment" for the purposes of visual contact required to continue below MDA/DA?',
  options: ['A. Any single light associated with the aerodrome', 'B. The approach light system, threshold, threshold markings, threshold lights, runway end identifier lights, VASI/PAPI, touchdown zone, touchdown zone markings, or runway lights/markings', 'C. The aerodrome beacon only', 'D. Any terrain feature near the runway'],
  correct: 1,
  explanation: 'CASR 91.395 lists the specific visual references that constitute the runway environment for the purpose of continuing below MDA/DA. The pilot must clearly identify at least one of these elements.',
  reference: 'CASR 91.395'
},

{
  question: 'Under AIP ENR 6.1, what is the difference between "PAN-PAN" and "MAYDAY"?',
  options: ['A. PAN-PAN is used for weather; MAYDAY for mechanical failure', 'B. MAYDAY indicates grave and imminent danger requiring immediate assistance; PAN-PAN indicates an urgent situation that requires priority but is not immediately life-threatening', 'C. PAN-PAN is the radio call; MAYDAY is the transponder code', 'D. MAYDAY is used IFR; PAN-PAN is used VFR'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: MAYDAY is the distress call for grave and imminent danger. PAN-PAN is the urgency call for an urgent situation concerning the safety of an aircraft or occupant, but not requiring immediate assistance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.730, what is a "daily inspection" and who may perform it?',
  options: ['A. A full maintenance check performed by a LAME once a day', 'B. A pilot-conducted pre-flight check using the aircraft\'s approved checklist to verify airworthiness before the first flight of the day', 'C. An avionics check performed by licensed personnel only', 'D. An inspection required only for turbine-engine aircraft'],
  correct: 1,
  explanation: 'CASR 91.730 and aircraft flight manuals: the daily inspection (or pre-flight inspection) is conducted by the pilot-in-command before the first flight of the day using the approved checklist or AFM procedures.',
  reference: 'CASR 91.730 / Aircraft AFM'
},

{
  question: 'Under CASR 91.495, can a pilot taxi across a runway without receiving a specific crossing clearance if the tower has issued a "taxi to" instruction that routes across that runway?',
  options: ['A. Yes — the taxi instruction covers all crossings', 'B. No — explicit runway crossing clearances must be obtained for every runway, regardless of the taxi instruction', 'C. Yes if the runway is not active', 'D. Yes if visibility is greater than 5 km'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.495: a taxi instruction NEVER implicitly authorises crossing a runway. Every runway crossing requires a specific, explicit clearance from ATC. This is a critical runway incursion prevention requirement.',
  reference: 'AIP ENR 6.1 / CASR 91.495'
},

{
  question: 'Under AIP ENR 1.6, what action must an IFR pilot take if cleared by ATC to a fix but the aircraft\'s navigation system is unable to identify that fix?',
  options: ['A. Fly to the approximate position and report', 'B. Advise ATC immediately using "UNABLE [fix]" and request an alternative routing', 'C. Continue to the last known waypoint and wait', 'D. Declare an emergency'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.155: if a pilot cannot comply with a clearance (including identifying a required navigation fix), ATC must be informed immediately using "UNABLE" followed by the instruction, and an alternative must be requested.',
  reference: 'AIP ENR 6.1 / CASR 91.155'
},

{
  question: 'Under CASR 91.235, under what circumstances may a pilot fly closer to a public assembly than the minimum prescribed distance?',
  options: ['A. With a CPL and instrument rating', 'B. Only with written permission from CASA or under an exemption', 'C. If flying above 3,000 ft AGL', 'D. With the event organiser\'s verbal approval'],
  correct: 1,
  explanation: 'CASR 91.235: flight over or in the vicinity of a public assembly closer than the prescribed minimum distance is only permitted with written authorisation from CASA or under an applicable CASA exemption.',
  reference: 'CASR 91.235'
},

{
  question: 'Under AIP ENR 4.1, what QNH setting should a pilot use when above the transition altitude in Australia?',
  options: ['A. The last QNH received from ATC', 'B. Standard pressure 1013.25 hPa (or 29.92 inHg); the altimeter reads Flight Levels above the transition altitude', 'C. QFE from the departure aerodrome', 'D. The destination aerodrome QNH'],
  correct: 1,
  explanation: 'AIP ENR 4.1: above the transition altitude, pilots set 1013.25 hPa (STD) on the altimeter sub-scale and read altitude as Flight Levels. QNH is used at and below the transition altitude.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under CAO 48.1, what does "split duty" mean and under what conditions is it permitted?',
  options: ['A. Two pilots sharing the controls during flight', 'B. An arrangement where a duty period is split into two parts separated by a rest break of at least 3 hours, enabling a longer total FDP', 'C. Part-time employment in aviation', 'D. Operating two aircraft on alternate days'],
  correct: 1,
  explanation: 'CAO 48.1: split duty allows the total FDP to be extended when a rest break of at least 3 hours (with sleep opportunity) is taken during the FDP. The total FDP must still not exceed the prescribed maximum.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under AIP ENR 1.1, what service does an FIS (Flight Information Service) officer provide to VFR pilots in Class G airspace?',
  options: ['A. ATC separation from all traffic', 'B. Traffic information, SIGMET/AIRMET briefings, and other flight information on request — but not separation', 'C. Radar vectoring to destination', 'D. Mandatory route deconfliction'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and AIP GEN: in Class G airspace, an FIS officer can provide traffic information, weather updates, NOTAM information, and other flight safety information on pilot request. No ATC separation is provided.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.785, what must a pilot do if they cannot produce their licence to an authorised officer during a ramp check?',
  options: ['A. The flight must be cancelled immediately', 'B. The officer may permit the flight to proceed if the pilot can verify identity and the licence is confirmed as current by other means, but the pilot may be issued an infringement notice', 'C. Carry on — the licence does not need to be physically present', 'D. The officer must ground the aircraft regardless of circumstances'],
  correct: 1,
  explanation: 'CASR 91.795 and Civil Aviation Act 1988: the pilot commits an offence by not having their licence available. The authorised officer may take further action. In practice, CASA may pursue an infringement or further investigation.',
  reference: 'CASR 91.795 / Civil Aviation Act 1988'
},

{
  question: 'Under AIP ENR 6.4, what is the purpose of the "TRAFFIC" broadcast at an uncontrolled aerodrome?',
  options: ['A. To request ATC radar separation', 'B. To alert other traffic in the circuit or on the ground to the pilot\'s position and intentions, supporting the see-and-avoid principle', 'C. To replace the requirement for a SARTIME', 'D. To obtain departure clearance from ATC'],
  correct: 1,
  explanation: 'AIP ENR 6.4: radio broadcasts on CTAF at uncontrolled aerodromes give other pilots positional awareness of your aircraft and intentions. This supports the see-and-avoid principle where no ATC separation exists.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under CASR Part 61, how many take-offs and landings must a PPL or CPL holder complete in the preceding 90 days to carry passengers in an aeroplane?',
  options: ['A. 1', 'B. 3', 'C. 5', 'D. 6'],
  correct: 1,
  explanation: 'CASR 61.395: to carry passengers in an aeroplane, the pilot must have completed at least 3 take-offs and landings as PIC in the same category and class within the preceding 90 days.',
  reference: 'CASR 61.395'
},

{
  question: 'Under AIP ENR 1.4, what is an "MBZ" (Mandatory Broadcast Zone) in Australia?',
  options: ['A. A zone where ATC instructions are mandatory for all aircraft', 'B. Airspace around certain non-controlled aerodromes where radio broadcasts by pilots are mandatory, providing awareness to other traffic', 'C. A military exclusion zone', 'D. An area where Mode C transponder use is compulsory'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and ERSA: a Mandatory Broadcast Zone (MBZ) is airspace around a non-controlled aerodrome where radio broadcasts on the specified frequency are mandatory for all aircraft. It replaces the need for the CTAF call at some lower-traffic aerodromes.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under CASR 91.305, when may a pilot fly below the minimum height prescribed by CASR 91.645?',
  options: ['A. Never — minimum heights are absolute', 'B. During take-off and landing, or when specifically authorised by CASA for operations such as agricultural, search and rescue, mustering, or firefighting', 'C. In daylight hours only if visibility exceeds 5 km', 'D. Always in Class G airspace'],
  correct: 1,
  explanation: 'CASR 91.305 and 91.645: minimum heights may be departed from during take-off and landing and in operations specifically permitted by CASA exemption, such as aerial application, aerial survey, mustering, firefighting, and SAR.',
  reference: 'CASR 91.305 / 91.645'
},

{
  question: 'Under AIP ENR 6.1, what does "NEGATIVE CONTACT" mean in response to a traffic advisory?',
  options: ['A. The pilot has visual contact with the traffic', 'B. The pilot has not established visual contact with the traffic described in the advisory', 'C. The pilot has established radar contact', 'D. The pilot cannot accept the clearance'],
  correct: 1,
  explanation: 'AIP ENR 6.1: "NEGATIVE CONTACT" in response to a traffic advisory means the pilot has been unable to visually identify the traffic described. ATC will continue to provide traffic information.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.745, what record must a pilot keep to demonstrate currency for night passenger-carrying operations?',
  options: ['A. A statutory declaration signed by a DAME', 'B. A pilot logbook containing entries for night take-offs and landings completed in the preceding 90 days', 'C. A letter from the flight school confirming currency', 'D. No records are required; currency is self-certified'],
  correct: 1,
  explanation: 'CASR 61.015 and 61.395: pilot logbooks are the primary legal record of flight experience and currency. Night recency (3 take-offs and landings at night within 90 days) must be demonstrated through the pilot\'s logbook entries.',
  reference: 'CASR 61.015 / 61.395'
},

{
  question: 'Under AIP ENR 1.6, what does a controller mean when they say "CONFIRM SQUAWK"?',
  options: ['A. Select a new transponder code', 'B. The controller is asking the pilot to confirm what transponder code is currently selected', 'C. Turn off the transponder', 'D. Transmit ident'],
  correct: 1,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "CONFIRM SQUAWK" is a request for the pilot to state the transponder code currently set. The correct response is to read back the code selected on the transponder.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.670, may an aircraft exceed 250 KIAS below 10,000 ft if ATC instructs it to?',
  options: ['A. Yes — ATC instructions always override speed limits', 'B. Yes — but only if ATC issues the instruction for safety or sequence, and only in the specific ATC instruction context', 'C. No — 250 KIAS is an absolute limit below 10,000 ft and ATC may not waive it', 'D. Yes — jet aircraft may exceed 250 KIAS at any time with ATC clearance'],
  correct: 1,
  explanation: 'CASR 91.660 and AIP ENR 6.1: ATC may issue speed instructions that result in speeds above 250 KIAS below 10,000 ft in specific circumstances (e.g. arrival sequencing in Class C). The speed limit may be waived by ATC where separation and safety require it.',
  reference: 'CASR 91.660 / AIP ENR 6.1'
},

{
  question: 'Under CASR Part 61, what is required before a pilot may act as PIC of a multi-engine aircraft?',
  options: ['A. An ATPL only', 'B. A multi-engine class rating endorsed on the pilot\'s licence, plus appropriate recent experience', 'C. A type rating for every specific twin-engine type', 'D. A multi-engine instrument rating is always required'],
  correct: 1,
  explanation: 'CASR Part 61: to act as PIC of a multi-engine aircraft, a pilot must hold a multi-engine class rating endorsed on their licence, in addition to any applicable type rating and the appropriate level licence (PPL, CPL, etc.).',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'Under AIP ENR 1.4, which class of airspace in Australia does NOT require a clearance for VFR entry?',
  options: ['A. Class C', 'B. Class D', 'C. Class G', 'D. Class A'],
  correct: 2,
  explanation: 'AIP ENR 1.1: Class G is uncontrolled airspace. No ATC clearance is required for entry. Classes A, C, and D require an ATC clearance (A = IFR only; C and D = clearance required for VFR).',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.580, what is the primary purpose of requiring RVSM approval for the aircraft AND the operator?',
  options: ['A. RVSM approval is only for pilots — not aircraft', 'B. Aircraft RVSM approval ensures the altimetry meets accuracy standards; operator RVSM approval ensures monitoring, maintenance, and crew training procedures are in place', 'C. Only the aircraft requires RVSM approval; the operator has no separate obligation', 'D. RVSM approval is issued by ATC on a per-flight basis'],
  correct: 1,
  explanation: 'CASR 91.580 and ICAO Doc 9574: both the aircraft (meeting altimetry performance standards) and the operator (having approved procedures for RVSM monitoring, maintenance, and pilot training) must hold RVSM approval before operating in RVSM airspace.',
  reference: 'CASR 91.580 / ICAO Doc 9574'
},

{
  question: 'Under AIP ENR 1.1, what is the primary purpose of ATC separation in controlled airspace?',
  options: ['A. To prevent bird strikes', 'B. To prevent collisions between aircraft by maintaining prescribed minimum horizontal and vertical distances', 'C. To ensure pilots stay on their filed routes only', 'D. To manage fuel efficiency across the network'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / ICAO Annex 2: the purpose of ATC separation is to prevent collisions between aircraft by maintaining prescribed minimum separation standards (horizontal and/or vertical) between aircraft under ATC control.',
  reference: 'AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'Under CASR 91.680, at what altitude must Australian IFR aircraft operating in RVSM airspace operate?',
  options: ['A. Any altitude between FL290 and FL410', 'B. Odd or even thousands of feet as prescribed by the semi-circular rule, at 1,000 ft intervals within FL290–FL410', 'C. Only at even Flight Levels above FL290', 'D. RVSM has no specific altitude assignment rules'],
  correct: 1,
  explanation: 'CASR 91.680 and AIP ENR 1.1: within RVSM airspace (FL290–FL410), aircraft operate at Flight Levels assigned by ATC at 1,000 ft intervals following the prescribed semi-circular rule (eastbound/westbound) in Australian domestic airspace.',
  reference: 'CASR 91.680 / AIP ENR 1.1'
},

{
  question: 'Under AIP ENR 6.4, what is the correct standard phraseology for an aircraft vacating a runway at a controlled aerodrome?',
  options: ['"[Callsign], clear of runway [number], taxiing to [destination]"', '"[Callsign], runway vacated"', '"[Callsign], off [runway number]"', '"Runway [number] clear, [callsign]"'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: the standard phraseology upon vacating a runway is "[Callsign], runway vacated." ATC requires this to confirm the runway is clear before issuing clearances to other aircraft.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.495, what does a "line up and wait" instruction authorise a pilot to do?',
  options: ['A. Take off immediately', 'B. Enter the runway, align with the centreline, and hold position — no take-off is authorised until a separate take-off clearance is received', 'C. Back-track on the runway to the holding point', 'D. Hold position at the runway holding point outside the runway'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "LINE UP AND WAIT" (or "CLEARED FOR IMMEDIATE TAKE-OFF" if take-off is authorised) instructs the pilot to enter the runway and align on the centreline but does not authorise take-off. Take-off requires a separate explicit clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.330, when two aircraft are converging at the same level, which aircraft gives way?',
  options: ['A. The faster aircraft gives way to the slower', 'B. The aircraft on the left gives way to the aircraft on the right', 'C. The heavier aircraft has right of way', 'D. The aircraft with the higher flight number gives way'],
  correct: 1,
  explanation: 'CASR 91.330: when two aircraft are converging at approximately the same altitude, the aircraft that has the other on its right must give way. The aircraft on the right has right of way.',
  reference: 'CASR 91.330'
},

{
  question: 'Under CASR 91.325, what rule applies when two aircraft are approaching head-on?',
  options: ['A. Both aircraft turn left', 'B. Both aircraft alter course to the right', 'C. The larger aircraft maintains course; the smaller gives way', 'D. The aircraft with the most fuel gives way'],
  correct: 1,
  explanation: 'CASR 91.325: when two aircraft are approaching head-on or approximately so and there is risk of collision, both pilots must alter course to the right.',
  reference: 'CASR 91.325'
},

{
  question: 'Under CASR 91.340, what is the right-of-way rule for an aircraft in distress?',
  options: ['A. An aircraft in distress has right of way over all other aircraft', 'B. An aircraft in distress has priority access but must still give way to aircraft on final', 'C. Only IFR aircraft in distress have right of way', 'D. No special right of way exists; standard rules apply'],
  correct: 0,
  explanation: 'CASR 91.340 and ICAO Annex 2: an aircraft in distress has right of way over all other aircraft. All other pilots must give way and render assistance if required.',
  reference: 'CASR 91.340 / ICAO Annex 2'
},

{
  question: 'Under AIP ENR 1.1, what does an "airways clearance" include as a minimum?',
  options: ['A. Destination, route, and fuel load', 'B. Aircraft identification, clearance limit, route, level, and any other conditions', 'C. Departure time, level, and squawk code only', 'D. Route and take-off time'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: an ATC route clearance includes as a minimum: aircraft identification, clearance limit, departure procedure (SID if applicable), route to the clearance limit, level instructions, and any other conditions such as squawk code and speed.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.145, when is a pilot required to give position reports on an IFR flight in uncontrolled airspace?',
  options: ['A. Position reports are never required in Class G', 'B. Position reports must be made at compulsory reporting points, or every 30 minutes if there are no compulsory reporting points in Class G IFR airspace', 'C. Only when ATC requests them', 'D. Position reports are required every 10 minutes in Class G'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.145: IFR pilots in Class G airspace are required to make position reports at compulsory reporting points. If no compulsory points exist on the route, a position report should be made every 30 minutes.',
  reference: 'CASR 91.145 / AIP ENR 6.1'
},

{
  question: 'Under AIP ENR 1.4, what is a "compulsory reporting point" (CRP) and how is it depicted on en-route charts?',
  options: ['A. A CRP is optional; depicted as an open triangle', 'B. A CRP is a fix at which an ATC position report is mandatory for IFR flights; depicted as a solid triangle on charts', 'C. A CRP applies only to oceanic operations', 'D. A CRP is a holding fix; depicted as a racetrack symbol'],
  correct: 1,
  explanation: 'AIP ENR 3.1: compulsory reporting points (CRPs) are fixes at which IFR position reports are mandatory. They are depicted as solid (filled) triangles on ERC charts. On-request reporting points (non-compulsory) are depicted as open triangles.',
  reference: 'AIP ENR 3.1 / ERC Charts'
},

{
  question: 'Under CASR 91.225, when filing a flight plan for an IFR flight, how far in advance should it be submitted?',
  options: ['A. At least 24 hours before departure', 'B. A minimum of 60 minutes before the proposed departure time, or as required by ATC — earlier filing improves slot availability', 'C. Any time before take-off', 'D. 30 minutes before engine start'],
  correct: 1,
  explanation: 'AIP ENR 1.10: ICAO and Airservices Australia recommend submitting flight plans at least 60 minutes before the proposed departure time for IFR flights. Plans may be submitted up to 120 hours in advance.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under AIP ENR 1.1, what is "traffic information" as provided by ATC or an FIS officer?',
  options: ['A. A binding instruction to take evasive action', 'B. Information given to a pilot about known or observed traffic which may be in proximity to their position or intended route, for awareness only', 'C. A clearance to maintain separation from the described traffic', 'D. A TCAS-equivalent alert'],
  correct: 1,
  explanation: 'AIP ENR 1.1 / ICAO Doc 4444: traffic information is advisory information given to alert a pilot to other traffic. It does not constitute an instruction to manoeuvre and does not relieve the pilot of the see-and-avoid responsibility.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.795, what is the maximum period for which a journey log entry may be deferred after landing?',
  options: ['A. 72 hours', 'B. Entries must be completed before the next flight departure, or within 7 days for non-RPT operations', 'C. 24 hours', 'D. Journey logs must be completed during flight'],
  correct: 1,
  explanation: 'CASR 91.795: journey log (or technical log) entries must be completed within a period acceptable to CASA. For most operations, entries should be completed before the next flight, and in all cases within 7 days.',
  reference: 'CASR 91.795'
},

{
  question: 'Under CASR 91.245, may a CPL holder fly for private purposes (non-hire and reward) using only a CPL?',
  options: ['A. No — a CPL requires an AOC for all operations', 'B. Yes — a CPL holder may fly for private (non-commercial) purposes; the CPL includes all PPL privileges', 'C. Only in aircraft under 1,000 kg MTOW', 'D. Only in Class G airspace'],
  correct: 1,
  explanation: 'CASR 61.390: a CPL includes all privileges of a PPL. A CPL holder may exercise PPL privileges for private, non-commercial flying without being on hire and reward.',
  reference: 'CASR 61.390'
},

{
  question: 'Under AIP ENR 1.6, what does "IDENT" mean when instructed by ATC?',
  options: ['A. Identify yourself on radio', 'B. Press the transponder IDENT button, causing the aircraft\'s return to blossom on the controller\'s display for positive identification', 'C. Change your squawk code', 'D. Turn on ADS-B'],
  correct: 1,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "IDENT" instructs the pilot to press the transponder IDENT button, which causes the radar return to highlight or blossom on the controller\'s display, enabling rapid positive identification of the aircraft.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.620, what are the VMC minima for VFR flight in Class E airspace at or below FL200?',
  options: ['A. Clear of cloud and 1,500 m visibility', 'B. 5,000 m visibility; 1,000 ft above, 500 ft below, 1 NM horizontal cloud clearance', 'C. 3,000 m and 500 ft vertical/600 m horizontal cloud clearance', 'D. 8,000 m visibility; 1,000 ft vertical and 1 NM horizontal'],
  correct: 1,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class E airspace at or below FL200, VFR requires 5,000 m visibility and cloud clearance of 1,000 ft above, 500 ft below, and 1 NM horizontal.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Under CASR 91.385, what does an ATC instruction "REPORT FIELD IN SIGHT" require the pilot to do?',
  options: ['A. Advise ATC immediately when the destination aerodrome becomes visible', 'B. Only report if IFR', 'C. Commence a visual approach immediately upon sighting the field', 'D. Reduce altitude to below cloud to confirm field sighting'],
  correct: 0,
  explanation: 'AIP ENR 6.1: "REPORT FIELD IN SIGHT" instructs the pilot to notify ATC as soon as the aerodrome or its environment becomes visible. ATC typically uses this to transition the aircraft to a visual approach.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'Under AIP ENR 1.4, in which class of airspace does ATC provide traffic information to IFR aircraft about VFR flights, but NOT separate them?',
  options: ['A. Class C', 'B. Class D', 'C. Class E', 'D. Class G'],
  correct: 2,
  explanation: 'AIP ENR 1.1: in Class E airspace, ATC separates IFR from IFR but provides only traffic information (not separation) between IFR and VFR aircraft. VFR pilots in Class E are responsible for their own separation from all traffic.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.695, what is the prescribed blood alcohol limit for crew members in Australian aviation?',
  options: ['A. 0.05 g/210 L breath — the same as road transport', 'B. 0.02 g/210 L breath (approximately 0.02 g/100 mL blood)', 'C. Zero tolerance — any alcohol is prohibited', 'D. 0.10 g/210 L breath'],
  correct: 1,
  explanation: 'Civil Aviation Act 1988 s.30DB: the blood alcohol limit for aviation crew members is 0.02 g/210 L of breath (equivalent to approximately 0.02 g/100 mL blood). This is significantly lower than the 0.05 road transport limit.',
  reference: 'Civil Aviation Act 1988 s.30DB'
},

{
  question: 'Under CASR 91.420, what does the term "IFR flight" mean operationally?',
  options: ['A. Any flight above FL100', 'B. A flight conducted in accordance with the Instrument Flight Rules, regardless of meteorological conditions', 'C. A flight in IMC only', 'D. A flight filed under an instrument flight plan above FL180 only'],
  correct: 1,
  explanation: 'CASR 91.420: an IFR flight is a flight conducted in accordance with the Instrument Flight Rules. This includes both flights in IMC and flights conducted on an IFR clearance even when VMC prevails.',
  reference: 'CASR 91.420'
},

{
  question: 'Under AIP ENR 1.1, what separation standard applies to IFR aircraft in Class C airspace?',
  options: ['A. 500 ft vertical or 3 NM horizontal radar separation', 'B. Standard ICAO separation is applied: 1,000 ft vertical (or 2,000 ft above FL290) and applicable horizontal radar separation (3–5 NM), or procedural separation standards', 'C. 300 ft vertical and 1 NM horizontal', 'D. 2,000 ft vertical at all altitudes'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and ICAO Doc 4444: in Class C controlled airspace, ATC applies standard ICAO separation: 1,000 ft vertical (2,000 ft in RVSM airspace), and radar horizontal separation of 3 or 5 NM, or procedural standards.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR Part 61, what type of endorsement is required to fly formation?',
  options: ['A. No endorsement is required for formation flight at any time', 'B. A formation flight endorsement on the pilot\'s licence issued by a formation flying instructor', 'C. Only an ATPL is required for formation flying', 'D. A CASA exemption is required for every formation flight'],
  correct: 1,
  explanation: 'CASR Part 61 and CASR 91.635: to participate in formation flying, a pilot must hold a formation flying endorsement on their licence, having completed training with a qualified formation flying instructor.',
  reference: 'CASR Part 61 / CASR 91.635'
},

{
  question: 'Under AIP ENR 6.1, what is the correct response when ATC says "RADAR CONTACT"?',
  options: ['A. "ROGER, RADAR CONTACT"', 'B. No response is required; continue as cleared', 'C. Acknowledge and confirm position', 'D. Turn on the transponder IDENT'],
  correct: 0,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: when ATC advises "RADAR CONTACT," the pilot should acknowledge with "ROGER" (or with their callsign). This confirms the controller has identified the aircraft on radar.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.505, is a pilot required to operate the altimeter on QNH or QFE when flying an approach at a controlled aerodrome in Australia?',
  options: ['A. QFE (field elevation pressure setting) is standard at all controlled aerodromes', 'B. QNH is the standard setting in Australia; QFE is not routinely used except as requested by some military operators', 'C. Either QNH or QFE may be used at the pilot\'s discretion', 'D. ATC determines which setting is used on a per-flight basis'],
  correct: 1,
  explanation: 'AIP ENR 4.1: in Australia, QNH (sea-level pressure) is the standard altimeter setting used below the transition altitude. QFE (aerodrome elevation datum) is not routinely promulgated by ATC in Australia, though pilots may request it.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under AIP ENR 1.4, what is the definition of "controlled flight" in Australian aviation?',
  options: ['A. Any flight that has filed a flight plan', 'B. Any flight conducted under the provisions of the Instrument Flight Rules', 'C. Any flight that is conducted within controlled airspace under an ATC clearance', 'D. Only airline operations above FL180'],
  correct: 2,
  explanation: 'ICAO Annex 2 and AIP ENR 1.1: a "controlled flight" is any flight that is conducted within controlled airspace in compliance with an ATC clearance, whether the flight is IFR or VFR.',
  reference: 'AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'Under CASR 91.725, what is a pilot\'s obligation regarding fuel management during a flight?',
  options: ['A. No in-flight fuel monitoring is required if departure fuel is correct', 'B. The PIC must monitor fuel consumption in flight to ensure adequate fuel remains to complete the flight safely, and must divert or reduce fuel burn as necessary', 'C. Fuel is monitored by the operator only; the pilot handles aircraft control', 'D. Fuel checks are only required for IFR flights'],
  correct: 1,
  explanation: 'CASR 91.725: the PIC must monitor fuel consumption in flight and ensure sufficient fuel remains. If the fuel state deteriorates below planned levels, the PIC must take appropriate action such as diverting, declaring minimum fuel, or reducing power.',
  reference: 'CASR 91.725'
},

{
  question: 'Under AIP ENR 1.6, what is the correct procedure when a pilot cannot raise ATC on the assigned frequency?',
  options: ['A. Squawk 7700 and continue as cleared', 'B. Try alternative frequencies, transmit blind on 121.5 MHz, squawk 7600 if communication failure is confirmed, and follow lost communications procedures', 'C. Land immediately at the nearest aerodrome', 'D. Disable the transponder to attract radar attention'],
  correct: 1,
  explanation: 'AIP ENR 1.6 and Part 91 MOS s.11.06: when communication cannot be established, the pilot should try all available frequencies, broadcast blind on 121.5 MHz, squawk 7600 to indicate comms failure, and then follow the lost communications procedures.',
  reference: 'AIP ENR 1.6 / Part 91 MOS s.11.06'
},

{
  question: 'Under CASR 91.310, what is the pilot\'s obligation regarding the use of seat belts and shoulder harnesses during flight?',
  options: ['A. Seat belts are only required during take-off and landing', 'B. All occupants must wear seat belts whenever seated; the PIC must ensure compliance before and during flight — shoulder harnesses must be used during take-off and landing if installed', 'C. Seat belts are advisory only for adult passengers', 'D. Only the PIC is required to wear a seat belt'],
  correct: 1,
  explanation: 'CASR 91.310: the PIC must ensure all occupants are wearing seat belts during flight. Shoulder harnesses must be worn during take-off and landing where fitted. The PIC is legally responsible for ensuring compliance.',
  reference: 'CASR 91.310'
},

{
  question: 'Under AIP ENR 1.7, what information would normally be included in an ATIS broadcast at a major controlled aerodrome?',
  options: ['A. QNH only', 'B. Information identifier, time of observation, wind, visibility, weather, cloud, temperature, dew point, QNH, active runways, NOTAMs relevant to the terminal area, and any other significant information', 'C. Runway in use and wind only', 'D. Weather and departure clearances combined'],
  correct: 1,
  explanation: 'AIP ENR 1.7: an ATIS broadcast at a major aerodrome typically includes: information identifier (letter), observation time, wind direction and speed, visibility, significant weather, cloud layers, temperature, dew point, QNH, active runways, relevant NOTAMs, and any other pertinent operational information.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under CASR 91.330, an aircraft towing a glider is on approach. Which aircraft has right of way?',
  options: ['A. The aircraft with the most fuel remaining', 'B. The towing aircraft (and glider combination), which must be given way to by all other aircraft', 'C. The glider has right of way in all circumstances', 'D. The faster aircraft has right of way'],
  correct: 1,
  explanation: 'CASR 91.330 and ICAO Annex 2: an aircraft towing another aircraft or object has restricted manoeuvrability and must be given way to by other aircraft. In the approach context, the towing combination has priority.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'Under AIP ENR 1.1, what happens to flight plan information once an IFR aircraft departs and the flight is airborne?',
  options: ['A. The flight plan data is deleted after take-off', 'B. The flight plan data is retained in the ATS system and used to generate expected clearances, airspace reservations, and SAR alerting throughout the flight', 'C. The pilot must re-submit the plan every 2 hours', 'D. The flight plan is handed to the destination ATC only on landing'],
  correct: 1,
  explanation: 'AIP ENR 1.10: once airborne, the IFR flight plan is retained and managed by ATS to provide separation, transfer of control between ATC sectors, and SAR alerting if the aircraft does not arrive at the destination.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under CASR 91.350, when should a pilot declare "FUEL EMERGENCY" (MAYDAY FUEL) rather than "MINIMUM FUEL"?',
  options: ['A. When fuel is below 30 minutes remaining', 'B. When the calculated fuel remaining indicates the aircraft may not be able to land with the required reserve — a genuine emergency with immediate assistance required', 'C. Whenever fuel is below the planned figure', 'D. Fuel emergencies are not a recognised category; only MINIMUM FUEL exists'],
  correct: 1,
  explanation: 'AIP ENR 6.1: a MAYDAY fuel emergency is declared when the fuel state has deteriorated to the point where the aircraft cannot land safely with the required reserve — requiring immediate ATC assistance. This is distinct from "MINIMUM FUEL" which is advisory.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.610, which aircraft is exempted from the 250 KIAS speed limit below 10,000 ft?',
  options: ['A. Heavy jet aircraft', 'B. Aircraft that cannot comply with 250 KIAS in terms of performance (e.g. being unable to maintain controlled flight at 250 KIAS), and those operating in Class A airspace', 'C. All turbine aircraft', 'D. Any aircraft with an ATPL crew'],
  correct: 1,
  explanation: 'CASR 91.660: aircraft that cannot comply with the 250 KIAS limit due to performance limitations are exempt. Aircraft operating in Class A airspace (IFR only) and those operating under specific ATC speed instructions may also exceed this limit in the circumstances specified.',
  reference: 'CASR 91.660'
},

{
  question: 'Under AIP ENR 4.1, what is "QNH"?',
  options: ['A. The altimeter setting that causes the altimeter to read aerodrome elevation when on the ground', 'B. The altimeter sub-scale setting (pressure in hPa) that would cause the altimeter to read altitude above mean sea level', 'C. The standard pressure setting of 1013.25 hPa', 'D. The pressure altitude corrected for temperature'],
  correct: 1,
  explanation: 'AIP ENR 4.1: QNH is the altimeter sub-scale pressure setting that causes the altimeter to indicate height above mean sea level. At sea level, an aircraft set to QNH will read approximately 0 ft AMSL. Compare with QFE (reads 0 at the aerodrome elevation).',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under CASR Part 61, which licence grade gives the most restricted flying privileges in Australia?',
  options: ['A. Student Pilot Certificate (solo endorsement)', 'B. Recreational Pilot Licence (RPL)', 'C. Private Pilot Licence (PPL)', 'D. Commercial Pilot Licence (CPL)'],
  correct: 0,
  explanation: 'CASR Part 61: in ascending order of privilege, the licence/certificate grades are: Student (solo endorsement) → RPL → PPL → CPL → ATPL. A student pilot certificate has the most restricted privileges.',
  reference: 'CASR Part 61'
},

{
  question: 'Under CASR 91.480, what is a "missed approach point" (MAPt) on a non-precision approach?',
  options: ['A. The point where the aircraft reaches MDA', 'B. The latest point during an approach by which a missed approach must be initiated to achieve the required obstacle clearance', 'C. The point where the runway threshold becomes visible', 'D. The initial approach fix'],
  correct: 1,
  explanation: 'CASR 91.480 and ICAO Doc 8168: the Missed Approach Point is the point on a non-precision approach at which, if the required visual reference has not been acquired, a missed approach must be commenced to ensure the published obstacle clearance is maintained.',
  reference: 'CASR 91.480 / ICAO Doc 8168'
},

{
  question: 'Under AIP ENR 1.1, what is a "sector safe altitude" (SSA) and how is it used?',
  options: ['A. The minimum altitude for radar vectoring in a TMA', 'B. The lowest altitude within a defined sector that provides at least 1,000 ft clearance above all obstacles, used for emergency obstacle avoidance', 'C. The highest altitude in Class G airspace', 'D. An en-route minimum off-route altitude (MORA)'],
  correct: 1,
  explanation: 'AIP ENR 4.5: the Sector Safe Altitude (SSA) for an instrument approach is the minimum altitude within a defined sector (usually a 25 NM radius from the aerodrome) that provides at least 1,000 ft clearance above all obstacles. It is used in emergencies and for situational awareness.',
  reference: 'AIP ENR 4.5'
},

{
  question: 'Under CASR 91.510, what is the purpose of the "ALT" (altitude reporting) function of a Mode C transponder?',
  options: ['A. It transmits the aircraft\'s GPS coordinates to ATC', 'B. It automatically transmits the aircraft\'s pressure altitude (derived from the encoding altimeter) to ATC radar displays, enabling altitude information to appear on the radar screen', 'C. It triggers an alert when the aircraft deviates from cleared altitude', 'D. It reports the aircraft\'s QNH setting to ATC'],
  correct: 1,
  explanation: 'AIP ENR 1.6: Mode C altitude reporting transmits the aircraft\'s pressure altitude from the encoding altimeter to ATC. This appears on radar as a flight level or altitude alongside the aircraft\'s position, enabling ATC to provide vertical separation without voice reports.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'Under AIP ENR 1.4, what type of service is provided by Airservices Australia\'s "Centre" (oceanic and remote area) controllers?',
  options: ['A. Radar separation only within 200 NM of the coast', 'B. Procedural ATC separation (based on position reports) in areas without radar coverage, and radar separation in radar-covered areas', 'C. Flight information service only; no separation in remote areas', 'D. Separation for IFR traffic in Class A above FL245 only'],
  correct: 1,
  explanation: 'AIP ENR 1.1 and AIP GEN: in remote areas without radar coverage, Airservices Australia\'s En Route Centres provide procedural separation based on pilot position reports, time estimates, and flight plan data. Radar separation is provided in radar-covered areas.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR 91.265, what does "VMC" stand for and what does it mean operationally?',
  options: ['A. Variable Meteorological Conditions — conditions that are changing', 'B. Visual Meteorological Conditions — conditions equal to or better than the specified minima of visibility and cloud clearance for the airspace class', 'C. Very Minimum Ceiling — the lowest cloud allowed for VFR', 'D. Verified Meteorological Criteria — ATIS-confirmed weather'],
  correct: 1,
  explanation: 'CASR 91.265: VMC means Visual Meteorological Conditions — weather conditions at or above the specified visibility and cloud clearance minima for the airspace in which the aircraft is operating, permitting flight under Visual Flight Rules.',
  reference: 'CASR 91.265'
},

{
  question: 'Under CASR 91.165, may the operator of an aircraft override a PIC\'s safety decision?',
  options: ['A. Yes — operators have full authority over all operational decisions', 'B. No — the PIC has final authority over the safety of the flight and may not be overridden by the operator on safety matters', 'C. Operators may override PICs on commercial matters; safety decisions are shared', 'D. Only for RPT operations where the operator holds an AOC'],
  correct: 1,
  explanation: 'CASR 91.165 and Civil Aviation Act 1988: the PIC has final authority over the safe operation of the aircraft. No operator, owner, or other person may override the PIC\'s decision in matters affecting flight safety.',
  reference: 'CASR 91.165 / Civil Aviation Act 1988'
},

{
  question: 'Under AIP ENR 1.6, what does "STANDBY" mean when issued by ATC?',
  options: ['A. Hold current position until further clearance', 'B. Wait and I will call you — ATC cannot respond immediately but acknowledges the call', 'C. Switch to the standby frequency', 'D. Maintain current altitude and heading'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "STANDBY" means "I must pause to deal with other matters and will return to you." It does not imply a clearance or an instruction — the pilot should wait for ATC to call back.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.305, what is the minimum height for aerobatics over a non-populated area?',
  options: ['A. 500 ft AGL', 'B. 1,000 ft AGL', 'C. 3,000 ft AGL', 'D. 1,500 ft AGL'],
  correct: 1,
  explanation: 'CASR 91.640: aerobatic flight must not be conducted below 1,000 ft AGL over areas other than those specifically approved. Over populated areas it is prohibited regardless of height without specific authorisation.',
  reference: 'CASR 91.640'
},

{
  question: 'Under AIP ENR 1.1, what does "IFR" stand for and where do Instrument Flight Rules generally apply?',
  options: ['A. International Flight Regulations — apply only on international routes', 'B. Instrument Flight Rules — the rules governing flight in IMC or flight conducted under an IFR clearance, applicable in all classes of airspace', 'C. Instrument Flight Requirements — apply above FL180 in Australia', 'D. IFR stands for In-Flight Reporting — position report requirements only'],
  correct: 1,
  explanation: 'CASR Part 91 and AIP ENR 1.1: IFR stands for Instrument Flight Rules. These rules govern flight when visual reference to the surface cannot be maintained and in all controlled airspace, requiring appropriate equipment, ratings, and ATC clearances.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under CASR 91.545, at what altitude must supplemental oxygen be available for passengers in an unpressurised aircraft?',
  options: ['A. Above 10,000 ft AMSL for all flights', 'B. Above FL125 (approximately 12,500 ft) for flights exceeding 30 minutes; mandatory above FL140 for the duration', 'C. Only above FL250 — passengers do not require oxygen below this', 'D. Oxygen is only required for crew, not passengers'],
  correct: 1,
  explanation: 'CASR 91.545 and Part 91 MOS s.26.16: for unpressurised aircraft, supplemental oxygen must be available for passengers when the aircraft operates above FL125 for more than 30 minutes. Above FL140, oxygen must be provided for passengers for the entire duration above that level.',
  reference: 'CASR 91.545 / Part 91 MOS 2020 s.26.16'
},

{
  question: 'Under AIP ENR 4.1, what is the standard transition layer in Australia?',
  options: ['A. A fixed 1,000 ft layer between 9,000 ft and FL100', 'B. The layer of airspace between the transition altitude (10,000 ft AMSL in most of Australia) and the transition level (assigned by ATC based on QNH)', 'C. FL180 to FL200 only', 'D. The transition layer is not formally defined in Australia'],
  correct: 1,
  explanation: 'AIP ENR 4.1: the transition layer is the airspace between the transition altitude (10,000 ft AMSL standard in Australia) and the transition level (issued by ATC based on current QNH). Within this layer, climbing aircraft use QNH and descending aircraft use standard pressure.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under CASR 91.730, may a CPL holder conduct a passenger flight if the maintenance release has expired?',
  options: ['A. Yes if the aircraft appears serviceable to the PIC', 'B. No — an aircraft with an expired maintenance release is not airworthy and must not be operated', 'C. Yes for flights under 1 hour duration only', 'D. Only with written approval from the aircraft owner'],
  correct: 1,
  explanation: 'CASR 91.730: a valid maintenance release is a required element of airworthiness. An aircraft with an expired maintenance release is not considered airworthy and the PIC must not operate it.',
  reference: 'CASR 91.730'
},

{
  question: 'Under AIP ENR 6.4, when should a pilot at a CTAF aerodrome make an "area" broadcast?',
  options: ['A. Only when entering the circuit', 'B. When approaching from the en-route phase, typically 10 NM or more out, to advise other traffic of the aircraft\'s position and intentions', 'C. Only when the weather is below VFR minima', 'D. Area broadcasts are not required at CTAF aerodromes'],
  correct: 1,
  explanation: 'AIP ENR 6.4 and VFRG v8.3: an en-route area broadcast should be made approximately 10 NM from a CTAF aerodrome (or as prescribed). It includes aircraft type, callsign, position, altitude, and intention to land, alerting traffic in the area.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under CASR 91.275, what does the pilot-in-command\'s "pre-flight action" obligation include?',
  options: ['A. Conducting only a walk-around check', 'B. Reviewing all available information relevant to the intended operation, including weather, NOTAMs, aircraft documents, fuel, performance, and planning', 'C. Checking the aircraft logbook only', 'D. Verifying the squawk code before departure'],
  correct: 1,
  explanation: 'CASR 91.275: the PIC must take all reasonable steps to obtain available information relevant to the flight, including weather reports and forecasts, NOTAMs, aerodrome information, fuel requirements, aircraft documents, and performance planning.',
  reference: 'CASR 91.275'
},

{
  question: 'Under AIP ENR 1.1, what is a "clearance void time" in the context of an IFR departure from a non-controlled aerodrome?',
  options: ['A. The maximum time an aircraft may hold at the runway before landing', 'B. The time by which the IFR clearance must be accepted and the departure commenced — if departure does not occur by this time, the clearance is void', 'C. The time limit for cancelling a SARTIME', 'D. The time for filing an amended flight plan'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.155: a clearance void time is specified when an IFR departure clearance is issued for an aircraft at a non-controlled aerodrome. If the aircraft does not depart by the void time, the clearance expires and a new one must be obtained.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'Under CASR 91.465, what action should a PIC take when the aircraft encounters severe turbulence?',
  options: ['A. Increase speed to penetrate the turbulence faster', 'B. Reduce speed to the turbulence penetration speed (or manoeuvring speed Va), if possible avoid the area, and advise ATC with a PIREP', 'C. Descend below 3,000 ft to escape turbulence', 'D. Declare a MAYDAY immediately'],
  correct: 1,
  explanation: 'CASR 91.465 and AFM: in severe turbulence, the PIC should reduce to the turbulence penetration speed (or Va) to prevent structural overload, attempt to exit the turbulence, and issue a pilot weather report (PIREP) to ATC for the benefit of other aircraft.',
  reference: 'CASR 91.465 / Aircraft AFM'
},

{
  question: 'Under AIP ENR 1.6, what must a pilot do when instructed by ATC to "STOP SQUAWK CHARLIE"?',
  options: ['A. Turn off the entire transponder', 'B. Disable the altitude reporting (Mode C) function while leaving the Mode A code transmitting', 'C. Select code 7600', 'D. Press the IDENT button'],
  correct: 1,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "STOP SQUAWK CHARLIE" instructs the pilot to turn off the altitude-reporting (Mode C) function of the transponder, while keeping Mode A (identity code) active.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.145, what is the correct phraseology and information required in a standard IFR position report?',
  options: ['A. Callsign and present altitude', 'B. Aircraft identification, position, time, altitude/FL, and next reporting point with ETA', 'C. Callsign, fuel state, and weather', 'D. Position, heading, and airspeed'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: a standard IFR position report contains: aircraft identification, position, time over the position, altitude or FL, next reporting point (compulsory or on-request), and ETA at the next point.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.610, what is the correct procedure when descending through the transition level to below the transition altitude?',
  options: ['A. Set QNH when leaving the transition level, descending into altimeter range', 'B. Set QNH when cleared to an altitude below the transition altitude, or as instructed by ATC — typically on descent clearance', 'C. Set 1013.25 for the descent', 'D. QNH should be set only after landing'],
  correct: 1,
  explanation: 'AIP ENR 4.1: when descending below the transition level, the pilot sets QNH on the altimeter — typically as directed by ATC in the descent clearance or when cleared to an altitude. The aircraft then reads altitude (not FL) using the local QNH.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Under AIP ENR 1.4, what airspace class typically surrounds major capital city airports in Australia (e.g. Sydney, Melbourne, Brisbane)?',
  options: ['A. Class D at the surface extending to FL245', 'B. Class C, from the surface within the CTR, extending as Class C TMA airspace surrounding the terminal area', 'C. Class A from the surface to FL180', 'D. Class E throughout the terminal area'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and ERSA: major Australian capital city airports are surrounded by Class C controlled airspace — Class C CTR from the surface and Class C TMA above, providing separation to all arriving and departing IFR and VFR traffic.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under CASR 91.580, if an RVSM-approved aircraft experiences a significant altimetry error in RVSM airspace, what must the PIC do?',
  options: ['A. Continue the flight; minor errors are acceptable', 'B. Notify ATC immediately, request exit from RVSM airspace, and not resume RVSM operations until the system is verified serviceable', 'C. Log the error and report it at the destination', 'D. Switch to the standby altimeter and continue'],
  correct: 1,
  explanation: 'Part 91 MOS s.11.07 and RVSM procedures: if a significant altimetry discrepancy is identified, the PIC must immediately advise ATC and request exit from RVSM airspace. RVSM operations must not be resumed until the system fault is rectified.',
  reference: 'Part 91 MOS 2020 s.11.07'
},

{
  question: 'Under CASR 91.225, what is a "Rescue Coordination Centre" (RCC) in the Australian context and what is its role?',
  options: ['A. A State Police centre that handles air accident reports', 'B. JRCC Australia (operated by Australian Maritime Safety Authority, AMSA), responsible for coordinating search and rescue for aviation and maritime incidents', 'C. CASA\'s emergency response division', 'D. Airservices Australia\'s accident investigation unit'],
  correct: 1,
  explanation: 'AIP ENR 1.10: the Joint Rescue Coordination Centre (JRCC) Australia is operated by AMSA. It coordinates SAR operations for aviation and maritime incidents around Australia and in the Australian Search and Rescue Region (AUSREP/AUSSAR).',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under AIP ENR 6.1, what is the correct action if a pilot reads back an ATC clearance incorrectly and ATC does not respond?',
  options: ['A. Proceed with the incorrect read-back as ATC\'s silence implies acceptance', 'B. Contact ATC again to request clarification — never assume silence equals confirmation of an incorrect read-back', 'C. Proceed with the original filed plan', 'D. Execute the clearance as issued verbally and ignore the read-back error'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: if a pilot is uncertain whether an incorrect read-back was accepted, they must contact ATC for clarification. An erroneous read-back that goes unchallenged does NOT constitute a clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.545, what oxygen equipment must be carried in an unpressurised aircraft operating above FL250 in Australia?',
  options: ['A. Continuous-flow masks for each crew member', 'B. Sufficient supplemental oxygen for all crew and passengers for the time spent above FL250; crew must use it continuously above FL250', 'C. One emergency oxygen bottle for the entire aircraft', 'D. Oxygen is optional above FL250 for flights under 15 minutes'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.16 and CASR 91.545: above FL250 in an unpressurised aircraft, each crew member must use supplemental oxygen continuously. Above FL350, at least one pilot at the controls must use oxygen at all times. Passengers must be supplied above FL140.',
  reference: 'Part 91 MOS 2020 s.26.16 / CASR 91.545'
},

{
  question: 'Under AIP ENR 1.1, which of the following best describes the difference between a "Flight Information Service" and an "Air Traffic Control Service"?',
  options: ['A. They are identical services with different names', 'B. A Flight Information Service provides information and advice for safe and efficient conduct of flights; ATC provides separation between aircraft', 'C. FIS is for VFR; ATC is for IFR only', 'D. FIS is provided above FL180; ATC below'],
  correct: 1,
  explanation: 'ICAO Annex 11 and AIP ENR 1.1: a Flight Information Service provides information (weather, NOTAMs, traffic) useful for safe flight, but does NOT provide separation. ATC actively provides separation between aircraft under its control.',
  reference: 'AIP ENR 1.1 / ICAO Annex 11'
},

{
  question: 'Under CASR 91.310, under what circumstances may a passenger be exempt from the seat belt requirement in an aeroplane?',
  options: ['A. Passengers over 18 may choose not to wear a seat belt', 'B. Exemptions may exist for specific operations (e.g. parachuting, certain medical or cargo configurations) as approved by CASA; otherwise all occupants must be belted during take-off, landing, and when instructed', 'C. The PIC may exempt passengers at any time', 'D. There are no permitted exemptions to the seat belt rule'],
  correct: 1,
  explanation: 'CASR 91.310: all occupants must wear seat belts during take-off, landing, and whenever the PIC directs. Specific exemptions may exist for specialised operations (e.g. aerial work, parachuting) where CASA has granted approval.',
  reference: 'CASR 91.310'
},

{
  question: 'Under AIP ENR 1.4, where can a pilot find the current airspace classification, dimensions, and controlling authority for a specific airspace in Australia?',
  options: ['A. The aircraft\'s AFM', 'B. ERC (En Route Chart), VNC (Visual Navigation Chart), ERSA, and the AIP', 'C. Only the ATC unit for that area can confirm airspace details', 'D. NOTAM D series only'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and ERSA: airspace classifications, dimensions, frequencies, and controlling authorities are published on aeronautical charts (ERC, VNC, TAC) and in ERSA. The AIP contains the regulatory descriptions.',
  reference: 'AIP ENR 1.4 / ERSA / ERC Charts'
},

{
  question: 'Under CASR 91.395, if a pilot on a CAT I ILS approach reaches the DH and has only the approach lights in sight but not the runway, may they continue below DH?',
  options: ['A. Yes — approach lights alone are sufficient visual reference to continue below DH on a CAT I approach', 'B. No — on a CAT I approach, approach lights alone are insufficient; the pilot must identify runway threshold, touchdown zone markings, or equivalent to continue below DH', 'C. The pilot may continue for 100 ft below DH to search for additional references', 'D. Yes if ATC confirms the runway is clear'],
  correct: 1,
  explanation: 'CASR 91.395: on a Category I ILS approach, approach lights alone do not satisfy the required visual reference to continue below DH. The pilot must identify runway threshold markings, touchdown zone, VASI/PAPI, or similar runway environment features.',
  reference: 'CASR 91.395'
},

{
  question: 'Under CAO 48.1, what is "cumulative fatigue" and how does it affect FDP limits?',
  options: ['A. Cumulative fatigue only applies after 3 consecutive days of flying', 'B. Cumulative fatigue from recent FDPs and flight time must be assessed; CAO 48.1 specifies reduced FDP limits after multiple consecutive days and cumulative flight time limits per 7-day and 28-day periods', 'C. Cumulative fatigue is not addressed in CAO 48.1', 'D. Only total hours in 12 months is measured — daily fatigue is not regulated'],
  correct: 1,
  explanation: 'CAO 48.1: the instrument addresses cumulative fatigue through provisions limiting total flight hours per 7-day and 28-day periods, consecutive day limits, and minimum rest periods between FDPs, reflecting the cumulative nature of aviation fatigue.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Under AIP ENR 6.4, what is the recommended position for a base call at a non-controlled aerodrome?',
  options: ['A. On final approach at 500 ft AAL', 'B. When turning base, reporting aircraft type, callsign, runway, and intentions (landing, touch and go)', 'C. At 10 NM from the aerodrome', 'D. When on downwind abeam the threshold'],
  correct: 1,
  explanation: 'AIP ENR 6.4 and VFRG v8.3: pilots should broadcast on CTAF when turning base, including aircraft type, callsign, runway in use, and landing intention. This is in addition to the upwind, crosswind, downwind, and final calls.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Under CASR 91.595, what category of aircraft performance standard requires the ability to continue take-off and clear all obstacles following an engine failure at V1?',
  options: ['A. Category A performance', 'B. Category B performance', 'C. Category D performance', 'D. All categories require obstacle clearance after engine failure at V1'],
  correct: 0,
  explanation: 'CASR 91.595 and CAAP 235-3: Category A performance standards require that, following an engine failure at the decision speed (V1), the aircraft can continue the take-off and clear all obstacles by the prescribed margins. This is the most demanding performance standard.',
  reference: 'CASR 91.595 / CAAP 235-3'
},

{
  question: 'Under AIP ENR 1.1, what does the term "ATC clearance" legally mean for a pilot?',
  options: ['A. It is a recommendation that may be disregarded at the pilot\'s discretion', 'B. It is an authorisation from ATC for an aircraft to proceed under specified conditions; it is legally binding and must be complied with unless safety requires deviation', 'C. It is a planning document only', 'D. An ATC clearance is only valid in Class A airspace'],
  correct: 1,
  explanation: 'CASR 91.155 and AIP ENR 1.1: an ATC clearance is an authorisation issued to a specific aircraft to proceed under specified conditions within controlled airspace. Pilots must comply with clearances unless a safety emergency requires deviation.',
  reference: 'CASR 91.155 / AIP ENR 1.1'
},

{
  question: 'Under CASR Part 61, what type of training must a pilot undertake before their first solo navigation exercise in a new area?',
  options: ['A. No training is required if the pilot has 50 hours PIC', 'B. The pilot must complete the relevant dual cross-country navigation training and receive an endorsement from their instructor before conducting the solo navigation exercise', 'C. Simulator training only is required before solo navigation', 'D. A CPL is required for all cross-country solo'],
  correct: 1,
  explanation: 'CASR Part 61 Subpart 61.J: before conducting solo cross-country navigation, a student pilot must have completed the relevant dual cross-country training and been endorsed by a flying instructor as competent to conduct the planned solo exercise.',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'Under AIP ENR 1.6, what is the VHF frequency for VOLMET broadcasts in Australia?',
  options: ['A. 118.1 MHz', 'B. 121.5 MHz', 'C. Varies by location — VOLMET broadcasts are published in the ERSA and AIP', 'D. 126.7 MHz for all areas'],
  correct: 2,
  explanation: 'AIP ENR 1.3 and ERSA: VOLMET (meteorological information for aircraft in flight) broadcasts are transmitted on discrete frequencies that vary by location in Australia. The specific frequencies are published in ERSA and AIP ENR 1.3.',
  reference: 'AIP ENR 1.3 / ERSA'
},

{
  question: 'Under CASR 91.165, what is the legal relationship between the operator\'s operations manual and the PIC\'s authority in an emergency?',
  options: ['A. The operations manual always takes precedence; the PIC must follow it', 'B. The operations manual sets the standard procedures; however, in an emergency the PIC may deviate from any procedure including operations manual requirements, to the extent necessary', 'C. Emergency procedures in the operations manual are mandatory and cannot be deviated from', 'D. Only CASA can grant authority to deviate from an operations manual'],
  correct: 1,
  explanation: 'CASR 91.165 and 91.175: in an emergency, the PIC may deviate from any rule or operator procedure to the extent necessary to meet the emergency. The PIC bears final authority and responsibility for safety.',
  reference: 'CASR 91.165 / 91.175'
},

{
  question: 'Under AIP ENR 1.4, what is a "common traffic advisory frequency" (CTAF) zone and what are the radio requirements within it?',
  options: ['A. A zone around major controlled airports — ATC mandatory', 'B. A designated area around a non-controlled or part-time controlled aerodrome where radio broadcasts on the published CTAF frequency are mandatory for all aircraft', 'C. A frequency available for pilot-to-pilot weather discussion', 'D. A zone where silence is required to protect approach communications'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and AIP ENR 6.4: a CTAF zone is airspace around an aerodrome (usually non-controlled or part-time) within which all aircraft must broadcast their intentions on the published CTAF frequency to maintain situational awareness.',
  reference: 'AIP ENR 1.4 / AIP ENR 6.4'
},

{
  question: 'Under CASR 91.310, what passenger safety briefing is required before every flight?',
  options: ['A. An emergency briefing is only required for flights over water', 'B. The PIC must ensure all passengers are briefed on the use of seat belts, emergency exits, prohibited smoking, emergency procedures, and any other safety items relevant to the flight before departure', 'C. Briefings are mandatory only for passenger-carrying RPT operations', 'D. Only CPL holders must conduct safety briefings'],
  correct: 1,
  explanation: 'CASR 91.310 and CASR Part 135: before every flight carrying passengers, the PIC must ensure passengers are briefed on safety equipment, seat belts, emergency exits, brace position, and any other relevant safety information.',
  reference: 'CASR 91.310 / CASR Part 135'
},

{
  question: 'Under AIP ENR 1.6, when is a read-back of an ATC instruction NOT required?',
  options: ['A. When the instruction is very short', 'B. General information broadcasts (ATIS, SIGMET), weather reports, and certain information-only calls do not require read-back — but all ATC clearances, instructions, and identified mandatory items must be read back', 'C. At non-controlled aerodromes', 'D. Read-back is always required for every transmission'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: mandatory read-back items include clearances and instructions affecting safety. General advisory information, ATIS acknowledgements, and non-instruction transmissions typically do not require full read-back, though pilots should acknowledge receipt.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.560, when is an IFR flight required to carry a working VHF radio?',
  options: ['A. Only above FL180', 'B. At all times — two-way radio communication capability is required for all IFR flight', 'C. Only in controlled airspace', 'D. A radio is not required for IFR flight in Class G'],
  correct: 1,
  explanation: 'CASR 91.560: an aircraft conducting IFR flight must be equipped with functioning two-way radio communication equipment. This is a fundamental requirement of IFR operations in all airspace.',
  reference: 'CASR 91.560'
},

{
  question: 'Under CASR 91.540, what navigation equipment is required for IFR flight within Australian controlled airspace that is designed for RNAV operations?',
  options: ['A. A VOR receiver is sufficient for all routes', 'B. Navigation equipment meeting the published navigation specification for the route (e.g. RNAV 1, RNAV 2, RNP APCH) as charted', 'C. GPS alone is always sufficient for IFR navigation', 'D. Only NDB equipment is required in Australia'],
  correct: 1,
  explanation: 'CASR 91.540 and AIP ENR 1.5: IFR aircraft must carry navigation equipment meeting the required navigation performance specification for the route being flown. Routes may require RNAV 1, RNAV 2, RNP AR, or other specifications as published.',
  reference: 'CASR 91.540 / AIP ENR 1.5'
},

{
  question: 'Under AIP ENR 1.1, what is the effect of "airspace delegation" at certain Australian aerodromes?',
  options: ['A. Airspace is delegated to airlines for their own use', 'B. Certain aerodromes operate with AFIS (Aerodrome Flight Information Service) — they provide information but not separation, and the airspace remains uncontrolled unless a control service is operating', 'C. Delegated airspace is Class B', 'D. CASA delegates airspace management to State Governments'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and ERSA: some aerodromes have Aerodrome Flight Information Service (AFIS) rather than ATC. AFIS operators provide information and advice but do not separate aircraft. The surrounding airspace remains uncontrolled (Class G) unless a tower is operating.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under CASR 91.225, a pilot fails to cancel their SARTIME and SAR resources are deployed. What liability may the pilot face?',
  options: ['A. No liability — SAR is a free public service', 'B. The pilot may be liable for the cost of SAR operations and may face infringement action under the Civil Aviation Act for failing to comply with the notification requirements', 'C. The pilot\'s licence is automatically suspended', 'D. A written warning is the maximum penalty'],
  correct: 1,
  explanation: 'Civil Aviation Act 1988 and CASR 91.225: failure to cancel a SARTIME may result in CASA infringement action and the pilot may be liable for costs. More significantly, it wastes critical emergency resources.',
  reference: 'CASR 91.225 / Civil Aviation Act 1988'
},

{
  question: 'Under AIP ENR 1.7, what does a pilot report when first contacting an ATIS-equipped tower on initial call?',
  options: ['A. Just their callsign and altitude', 'B. Callsign, position, altitude, and the received ATIS information identifier (e.g. "Information Delta")', 'C. Full flight plan details', 'D. Callsign and fuel state only'],
  correct: 1,
  explanation: 'AIP ENR 6.1 and ENR 1.7: on initial contact with an ATIS-equipped tower, the pilot should include the received ATIS identifier (e.g. "Information Golf") in the call. This confirms to ATC that the pilot has the current terminal information.',
  reference: 'AIP ENR 6.1 / ENR 1.7'
},

{
  question: 'Under CASR Part 61, when may a PPL holder carry a passenger at night?',
  options: ['A. At any time — PPL privileges include night flight with passengers', 'B. Only if the PPL holder has met the night recency requirement of 3 take-offs and landings at night within the preceding 90 days in the same aircraft category', 'C. Never — night passenger carrying requires a CPL', 'D. Only with a safety pilot in the right seat'],
  correct: 1,
  explanation: 'CASR 61.870: to carry a passenger at night, a PPL holder must have completed 3 take-offs and 3 landings at night as PIC within the preceding 90 days in the same aircraft category.',
  reference: 'CASR 61.870'
},

{
  question: 'Under AIP ENR 1.6, what is the phraseology a pilot should use when reporting a bird strike to ATC after landing?',
  options: ['A. "MAYDAY MAYDAY MAYDAY, bird strike"', 'B. "Bird strike report — [callsign], [aerodrome], [runway], [time], [number and species if known], [aircraft damage if any]"', 'C. Bird strike reports are made only to ATSB, not ATC', 'D. No specific phraseology is required; any verbal report is acceptable'],
  correct: 1,
  explanation: 'AIP ENR 1.6 and AIP GEN 3.3: bird strike reports should be made to ATC after landing using the standard bird strike report format. ATSB and CASA reporting may also be required under civil aviation regulations.',
  reference: 'AIP ENR 1.6 / AIP GEN 3.3'
},

{
  question: 'Under CASR 91.225, what is a "Pilot Activated Hazard System" (PAHS) and where is it relevant in Australia?',
  options: ['A. A cockpit warning system for terrain', 'B. A ground-based system at some aerodromes that pilots activate by radio to trigger hazard lighting (e.g. obstacle lights) or other safety systems', 'C. An ELT activation system', 'D. A weather hazard broadcast system for remote areas'],
  correct: 1,
  explanation: 'ERSA and AIP ENR 1.4: a Pilot Activated Hazard System (PAHS) is a system at certain aerodromes where pilots can activate obstacle lighting or aerodrome lighting by transmitting on a specified frequency. Details are published in ERSA.',
  reference: 'ERSA / AIP ENR 1.4'
},

{
  question: 'Under CASR 91.330, which aircraft has right of way when a power-driven aircraft and a glider are converging?',
  options: ['A. The power-driven aircraft has right of way', 'B. The glider has right of way over the power-driven aircraft', 'C. Both must turn right as in head-on', 'D. The aircraft at lower altitude has right of way'],
  correct: 1,
  explanation: 'CASR 91.330 and ICAO Annex 2: in converging situations, the right-of-way priority in descending order is: aircraft in distress, balloon, glider, airship, towing aircraft, powered aircraft. A glider has right of way over a power-driven aircraft.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'Under AIP ENR 6.4, what is the "area" frequency on which a pilot should broadcast when flying in remote Australian airspace without ATC coverage?',
  options: ['A. 121.5 MHz for all remote area flights', 'B. The appropriate area frequency published for the FIR sector in the AIP — typically 126.7 MHz is widely monitored and can be used in remote areas', 'C. 127.8 MHz', 'D. The nearest CTAF frequency'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and AIP ENR 6.4: in remote Class G airspace, 126.7 MHz is widely monitored and used for traffic broadcasts. The specific area frequencies for ATC or FIS sectors are published in the AIP.',
  reference: 'AIP ENR 1.4 / AIP ENR 6.4'
},

{
  question: 'Under CASR 91.510, in which Australian airspace is ADS-B Out (1090 ES) currently mandatory above 10,000 ft?',
  options: ['A. Only in Class A airspace', 'B. In Class A airspace and designated Class C and E airspace above 10,000 ft AMSL, as published in AIP ENR 1.6', 'C. ADS-B is voluntary in all Australian airspace', 'D. Mandatory only on international routes above FL350'],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: ADS-B Out is mandatory in Australian airspace designated in AIP ENR 1.6, which includes Class A airspace and specified Class C and E airspace above 10,000 ft AMSL. The requirements continue to expand.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'Under AIP ENR 6.1, what is the correct phraseology to request a higher cruise altitude from ATC while en route on an IFR flight?',
  options: ['"Request climb"', '"Request higher altitude [FL or altitude]"', '"Climb to [FL]"', '"Can we go higher?"'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: the correct phraseology for requesting a higher cruise level is "[Callsign] REQUEST FLIGHT LEVEL [XXX]" or "REQUEST CLIMB TO [altitude]." ATC will issue a climb clearance if the airspace is available.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.365, what is the purpose of a "standard instrument departure" (SID)?',
  options: ['A. A SID is a published IFR route from an aerodrome to the en-route structure, providing obstacle clearance and airspace management for departing IFR traffic', 'B. A SID is a VFR departure route from a controlled aerodrome', 'C. A SID is an emergency departure procedure', 'D. A SID is an arrival procedure for high-traffic aerodromes'],
  correct: 0,
  explanation: 'CASR 91.365 and ICAO Doc 8168: a Standard Instrument Departure (SID) is a published IFR departure procedure that provides obstacle clearance, noise abatement, and airspace structure for aircraft departing IFR from an aerodrome to the en-route phase.',
  reference: 'CASR 91.365 / ICAO Doc 8168'
},

{
  question: 'Under AIP ENR 1.1, what is a "STAR" (Standard Arrival Route) and what does it provide?',
  options: ['A. A STAR is a VFR scenic route into major airports', 'B. A STAR is a published IFR arrival procedure connecting the en-route structure to the initial approach fix, providing obstacle clearance, speed management, and airspace organisation for arrivals', 'C. A STAR is a night-only procedure', 'D. A STAR only applies to heavy aircraft above FL180'],
  correct: 1,
  explanation: 'ICAO Doc 8168 and AIP ENR 1.1: a Standard Arrival Route (STAR) is a published instrument procedure that routes IFR aircraft from the en-route structure to the initial approach fix. It provides obstacle clearance, facilitates traffic management, and reduces pilot/controller workload.',
  reference: 'AIP ENR 1.1 / ICAO Doc 8168'
},

{
  question: 'Under CASR 91.785, in what circumstances may a pilot fly an aircraft without a current certificate of airworthiness?',
  options: ['A. For any flight under 30 minutes in Class G airspace', 'B. Only when an authority to fly (Special Flight Permit) has been issued by CASA for the specific flight', 'C. In an emergency only, provided a maintenance release is valid', 'D. Never — a certificate of airworthiness cannot be substituted'],
  correct: 1,
  explanation: 'CASR 91.075 and 91.785: an aircraft without a current Certificate of Airworthiness may only be flown under an authority to fly (Special Flight Permit/SFP) issued by CASA, which specifies conditions for the flight.',
  reference: 'CASR 91.075 / 91.785'
},

{
  question: 'Under Part 91 MOS s.26.04, what is the minimum instrument requirement for a VFR flight at night in a powered aeroplane?',
  options: ['A. Attitude indicator, ASI, altimeter, and compass only', 'B. All day VFR instruments plus attitude indicator with independent power, turn and slip indicator, vertical speed indicator, outside air temperature gauge, and a means of illuminating all required instruments', 'C. Night VFR requires only a landing light in addition to day VFR instruments', 'D. An ILS receiver is required for all night VFR flights'],
  correct: 1,
  explanation: 'Part 91 MOS s.26.06(3) and s.26.08: VFR night operations require all day VFR instruments plus an attitude indicator (with independent power supply), turn and slip indicator, VSI, OAT indicator, and adequate instrument lighting.',
  reference: 'Part 91 MOS 2020 s.26.06(3) / s.26.08'
},

{
  question: 'Under CASR 91.185, may a pilot enter a Prohibited Area under any circumstances?',
  options: ['A. Yes — if operating at night only', 'B. Only with specific written authorisation from CASA or as specified in the NOTAM activating the Prohibited Area', 'C. Yes, if operating under IFR', 'D. Prohibited Areas may be entered freely if activated for less than 2 hours'],
  correct: 1,
  explanation: 'CASR 91.185: flight within a Prohibited Area is unlawful unless CASA has issued a specific authorisation. Prohibited Areas protect sites of highest national security or safety sensitivity.',
  reference: 'CASR 91.185'
},

{
  question: 'Under AIP ENR 6.1, what is the correct phraseology for a pilot to report leaving an altitude?',
  options: ['"Descending from [altitude]"', '"[Callsign] LEAVING [altitude]"', '"[Callsign] LEAVING FLIGHT LEVEL [XX]" or "[Callsign] LEAVING [altitude]"', '"Through [altitude] descending"'],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: position departure from a level is reported as "[Callsign] LEAVING [Flight Level or altitude]." This phrasing is standard for altitude-crossing reports.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.380, what is required before an aircraft may conduct an IFR approach when the aerodrome weather is below published IFR minima?',
  options: ['A. The captain may proceed if they consider it safe', 'B. The aircraft must not commence the final approach if the aerodrome reported weather is below the applicable approach minima for the procedure being flown', 'C. The aircraft may begin the approach but must execute a missed approach at MDA/DA if visual reference is not acquired', 'D. A CAVOK clearance from ATC is required to proceed below minima'],
  correct: 1,
  explanation: 'CASR 91.380 and 91.395: if the reported aerodrome weather is below the applicable approach minima for the aircraft category and procedure, the PIC must not commence (or continue) the approach below the initial approach altitude.',
  reference: 'CASR 91.380 / 91.395'
},

{
  question: 'Under AIP ENR 1.6, what does it mean when ATC says "RESUME OWN NAVIGATION"?',
  options: ['A. The pilot must file a new flight plan', 'B. ATC is terminating the radar vectors or ATC navigation assistance; the pilot must navigate independently using their own navigation systems', 'C. The pilot may change altitude without further clearance', 'D. ATC is handing the flight to another sector only'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "RESUME OWN NAVIGATION" terminates radar vectoring. The pilot must assume responsibility for navigation, typically to the next cleared fix or the filed route.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR Part 61, what is the difference between a "class rating" and a "type rating"?',
  options: ['A. They are identical — all licences use type ratings only', 'B. A class rating covers a broad category of aircraft sharing similar operating characteristics (e.g. single-engine piston); a type rating is required for specific complex or large aircraft that require additional training due to their complexity', 'C. A class rating is only for VFR; a type rating is required for IFR', 'D. Type ratings are only issued for helicopters'],
  correct: 1,
  explanation: 'CASR Part 61: a class rating (e.g. single-engine piston, multi-engine piston) covers groups of similar aircraft. A type rating is required for specific aircraft types that are too complex or performance-capable to be covered by a class rating alone (e.g. high-performance turbine aircraft, some multi-engine types).',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'Under AIP ENR 1.4, what is an "Upper Control Area" (UCA)?',
  options: ['A. Class G airspace above FL600', 'B. Class A controlled airspace above FL245 in Australia, providing en-route separation for all IFR traffic at higher flight levels', 'C. Military airspace above FL250', 'D. Airspace above FL180 that is Class C'],
  correct: 1,
  explanation: 'AIP ENR 1.1: the Upper Control Area (UCA) in Australia is Class A airspace at and above FL245, providing ATC separation for all IFR traffic in the upper airspace. VFR flight is not permitted.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR Part 67, how long is a Class 1 Medical Certificate valid for a pilot under 40 years of age?',
  options: ['A. 24 months', 'B. 12 months', 'C. 6 months', 'D. 36 months'],
  correct: 1,
  explanation: 'CASR Part 67: a Class 1 Medical Certificate for a pilot under 40 years of age is valid for 12 months. For pilots 40 years and over, the validity period is 6 months for airline operations.',
  reference: 'CASR Part 67'
},

{
  question: 'Under AIP ENR 6.1, when instructed by ATC to "EXPEDITE," what does this mean operationally?',
  options: ['A. Declare an emergency and request priority', 'B. Complete the requested action as quickly as safely possible — ATC requires minimum delay due to traffic or other requirements', 'C. Increase speed by 50 KIAS immediately', 'D. It is an advisory only and may be disregarded'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "EXPEDITE" means the pilot should complete the specified action as quickly as possible while maintaining safety. It is used when ATC needs minimum delay — for example, "EXPEDITE CROSSING RUNWAY" or "EXPEDITE DESCENT."',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.755, what record must be kept of an aircraft defect and its rectification?',
  options: ['A. Verbal notification to the operator is sufficient', 'B. The defect must be recorded in the maintenance release (or technical log) and the rectification signed off by an appropriately licensed maintenance engineer', 'C. A photo of the defect satisfies the record requirement', 'D. No record is required for defects classified as minor'],
  correct: 1,
  explanation: 'CASR 91.755 and CASR Part 66: defects identified during operations must be recorded in the maintenance release. Rectification must be certified by a licensed aircraft maintenance engineer (LAME) or appropriately authorised person.',
  reference: 'CASR 91.755 / CASR Part 66'
},

{
  question: 'Under AIP ENR 1.6, what does "RADAR SERVICE TERMINATED" mean when issued by ATC?',
  options: ['A. The aircraft has left controlled airspace', 'B. ATC is no longer providing radar separation or identification service to the aircraft; the pilot should revert to position reporting and self-separation', 'C. The pilot must squawk 7600', 'D. The flight plan has been closed'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "RADAR SERVICE TERMINATED" informs the pilot that ATC is discontinuing the radar service (identification and/or separation). The pilot reverts to procedural separation and position reporting as required.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.540, what does "RNP" stand for and why is it important for instrument approaches?',
  options: ['A. Required Navigation Performance — it specifies the accuracy and integrity that a navigation system must achieve for a specific procedure, enabling precise curved or steep approaches not possible with conventional navaids', 'B. Radio Navigation Procedure — the published ILS procedure', 'C. Radar Navigation Protocol — used only for oceanic operations', 'D. Runway Navigation Programme — approach lighting standard'],
  correct: 0,
  explanation: 'CASR 91.540 and ICAO Doc 9613: Required Navigation Performance (RNP) specifies the navigation accuracy (e.g. RNP APCH, RNP AR) required for a procedure. RNP AR (Authorisation Required) enables curved, precision-like approaches in challenging terrain that conventional procedures cannot achieve.',
  reference: 'CASR 91.540 / ICAO Doc 9613'
},

{
  question: 'Under AIP ENR 1.1, which of the following best describes the Australian airspace classification system used at lower altitudes in remote areas?',
  options: ['A. Class G (uncontrolled) at the surface, transitioning to Class E at a published altitude, then Class A above FL245', 'B. Class A from the surface to FL245 in all areas', 'C. Class C everywhere below FL245', 'D. Class D covers all remote areas below 10,000 ft'],
  correct: 0,
  explanation: 'AIP ENR 1.1 and ENR 1.4: in remote Australian airspace, the typical structure is Class G from the surface to a published altitude (often 8,500 ft AMSL), then Class E above that, transitioning to Class A at FL245. This varies by location as shown on aeronautical charts.',
  reference: 'AIP ENR 1.1 / 1.4 / ERC Charts'
},

{
  question: 'Under CASR 91.265, what is the specific obligation on a VFR pilot when the weather ahead deteriorates below VMC?',
  options: ['A. Continue at a reduced speed to assess the situation', 'B. Turn back, divert, or land as necessary to remain in VMC; under no circumstances is a VFR pilot permitted to continue into IMC', 'C. Contact ATC and request an IFR clearance', 'D. Climb above the weather and request IFR clearance'],
  correct: 1,
  explanation: 'CASR 91.265 and 91.615: a VFR pilot must not enter IMC under any circumstances. If VMC cannot be maintained, the pilot must turn back or divert to an alternative route/destination where VMC can be maintained.',
  reference: 'CASR 91.265 / 91.615'
},

{
  question: 'Under AIP GEN 3.3, which organisation in Australia is responsible for investigating aviation accidents and serious incidents?',
  options: ['A. CASA — the Civil Aviation Safety Authority', 'B. ATSB — the Australian Transport Safety Bureau', 'C. Airservices Australia', 'D. The Australian Federal Police'],
  correct: 1,
  explanation: 'AIP GEN 3.3 and Transport Safety Investigation Act 2003: the Australian Transport Safety Bureau (ATSB) is the independent statutory body responsible for investigating transport accidents and incidents, including aviation, in Australia.',
  reference: 'AIP GEN 3.3 / Transport Safety Investigation Act 2003'
},

{
  question: 'Under CASR 91.185, what specific permission is required to enter a Restricted Area designated as "R" in Australian airspace?',
  options: ['A. A standard IFR clearance is sufficient', 'B. Permission must be obtained from the specific authority controlling that Restricted Area, as published in the ERSA or relevant AIP entry for the area', 'C. CASA\'s blanket permission covers all Restricted Areas for CPL holders', 'D. No permission is needed outside gazetted hours'],
  correct: 1,
  explanation: 'CASR 91.185 and AIP ENR 5.1: entry to a Restricted Area requires permission from the designated controlling authority. The authority for each Restricted Area is published in AIP ENR 5.1 and ERSA. Outside of gazetted activation hours, the area may be freely entered.',
  reference: 'CASR 91.185 / AIP ENR 5.1'
},

{
  question: 'Under CASR 91.330, which aircraft has right of way when both a powered aircraft and a balloon are converging?',
  options: ['A. The powered aircraft has right of way as it is faster', 'B. The balloon has right of way over the powered aircraft', 'C. Both must turn right', 'D. The aircraft at the lower altitude has priority'],
  correct: 1,
  explanation: 'CASR 91.330 and ICAO Annex 2: in the right-of-way hierarchy, balloons rank above all powered aircraft including gliders (except aircraft in distress). A balloon has right of way over all powered aircraft.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'Under AIP ENR 1.6, what is the meaning of "CONTACT [unit] [frequency]" from ATC?',
  options: ['A. Monitor the frequency but do not transmit', 'B. Establish two-way communication with the specified unit on the specified frequency', 'C. File a new flight plan with the specified unit', 'D. Switch to the emergency frequency'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "CONTACT [unit] [frequency]" instructs the pilot to switch to the specified frequency and establish two-way communication with the named ATC unit.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.580, what is the prescribed altimetry accuracy requirement for an aircraft to be certified for RVSM operations?',
  options: ['A. ±200 ft at all altitudes', 'B. The altimetry system must be accurate to within ±60 ft under static conditions and the total system error must not exceed ±75 ft', 'C. ±100 ft for FL290–FL350 and ±150 ft above', 'D. No specific accuracy standard — RVSM depends on ATC radar only'],
  correct: 1,
  explanation: 'ICAO Doc 9574 and Part 91 MOS s.11.01: for RVSM certification, the aircraft altimetry system must maintain a total system error of no more than ±75 ft. This is essential to maintain the 1,000 ft separation standard.',
  reference: 'ICAO Doc 9574 / Part 91 MOS 2020 s.11.01'
},

{
  question: 'Under AIP ENR 6.1, what is the correct response when ATC gives a frequency change with "MONITOR [frequency]"?',
  options: ['A. Establish two-way contact on the new frequency immediately', 'B. Tune to the frequency and listen but do not make an initial call unless required', 'C. Continue on the current frequency and update the standby', 'D. "MONITOR" means squelch the frequency'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "MONITOR [frequency]" instructs the pilot to tune to the specified frequency and listen, but NOT to make an initial call. This is distinct from "CONTACT" which requires establishing two-way communication.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Under CASR 91.265, a VFR pilot inadvertently enters cloud. What is the correct immediate action?',
  options: ['A. Maintain heading and climb above the cloud', 'B. Execute a standard-rate 180-degree turn to exit the cloud as quickly as possible while maintaining control by reference to instruments', 'C. Reduce power and descend below the cloud', 'D. Squawk 7700 and continue to destination'],
  correct: 1,
  explanation: 'VFRG v8.3 and CASR 91.265: if inadvertently entering cloud, the pilot should immediately execute a 180-degree turn at standard rate, using the basic instruments to maintain control, to exit the cloud the way they entered. Squawk 7600 (comms) or 7700 (emergency) if appropriate.',
  reference: 'CASR 91.265 / VFRG v8.3'
},

{
  question: 'Under Part 91 MOS s.19.02, how is final reserve fuel calculated for a piston-engine aeroplane on a VFR flight?',
  options: ['A. 30 minutes at holding speed', 'B. 45 minutes at cruise power at the nominated cruise altitude', 'C. 20 minutes at best range power', 'D. 30 minutes at normal cruise — the same as IFR'],
  correct: 1,
  explanation: 'Part 91 MOS Table 19.02(2): for a piston-engine aeroplane on a VFR flight, the final reserve fuel is 45 minutes at cruise power at the planned cruising altitude.',
  reference: 'Part 91 MOS 2020 Table 19.02(2)'
},

{
  question: 'Under AIP ENR 1.4, what is the primary purpose of a "Common Traffic Advisory Frequency" (CTAF) at an uncontrolled aerodrome?',
  options: ['A. To receive ATC traffic separation instructions', 'B. To enable pilots to self-announce their position and intentions, supporting situational awareness and collision avoidance in the absence of ATC control', 'C. To relay weather information from the nearest ATIS', 'D. To request special VFR clearances from en-route ATC'],
  correct: 1,
  explanation: 'AIP ENR 1.4 and VFRG v8.3: CTAF enables pilots at non-controlled aerodromes to broadcast their position and intentions so other pilots can maintain situational awareness and apply see-and-avoid. No ATC separation is provided.',
  reference: 'AIP ENR 1.4 / VFRG v8.3'
}

]
