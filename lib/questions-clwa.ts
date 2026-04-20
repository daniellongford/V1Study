export const clwaQuestions = [

{
  question: 'What is the final reserve fuel requirement for a piston-engine aeroplane with MTOW ≤ 5,700 kg on a VFR day flight?',
  options: [
    'A. 45 minutes at holding speed at 1,500 ft',
    'B. 20 minutes at holding speed at 1,500 ft',
    'C. 30 minutes at normal cruise power',
    'D. 45 minutes at normal cruise power'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 19.02(2) Item 1: for an aeroplane with MTOW ≤ 5,700 kg (piston or turboprop) operating VFR, the final reserve fuel flight time is 30 minutes. Night VFR (Item 2) and IFR (Item 3) require 45 minutes.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(2) Item 1'
},

{
  question: 'A piston-engine aeroplane with MTOW ≤ 5,700 kg is planning a night VFR flight. What is the minimum final reserve fuel required under Part 91 MOS?',
  options: [
    'A. 20 minutes',
    'B. 30 minutes',
    'C. 60 minutes',
    'D. 45 minutes'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 19.02(2) Item 2: for a piston or turboprop aeroplane with MTOW ≤ 5,700 kg on a night VFR flight, the final reserve fuel flight time is 45 minutes. This is more than the 30 minutes required for day VFR.',
  reference: 'Part 91 MOS 2020 s.19.02 Table 19.02(2) Item 2'
},

{
  question: 'At what point during a flight must a pilot in command declare a "minimum fuel" state to ATS under Part 91 MOS?',
  options: [
    'A. When fuel remaining equals the final reserve fuel',
    'B. As soon as the aircraft diverts from the planned route',
    'C. When committed to land at a specific aerodrome and any change to the existing ATC clearance would result in landing with less than final reserve fuel',
    'D. When fuel remaining falls below 30 minutes'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.19.06(3): the pilot must declare "minimum fuel" when committed to land at an aerodrome and determines that any change to the existing ATC clearance would result in landing with less than the final reserve fuel. This is not an emergency declaration — it informs ATS that further delays could lead to an emergency.',
  reference: 'Part 91 MOS 2020 s.19.06(3)'
},

{
  question: 'When must a pilot declare "MAYDAY MAYDAY MAYDAY FUEL" under Part 91 MOS?',
  options: [
    'A. When the fuel remaining on landing at the nearest aerodrome where a safe landing can be made will be, or is likely to be, less than the final reserve fuel',
    'B. When fuel remaining is less than 45 minutes',
    'C. Any time the aircraft diverts due to weather',
    'D. When fuel remaining equals the final reserve fuel'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.19.06(4): the pilot must declare "MAYDAY MAYDAY MAYDAY FUEL" when the usable fuel remaining on landing at the nearest aerodrome where a safe landing can be made will be, or is likely to be, less than the final reserve fuel. This is a distress message.',
  reference: 'Part 91 MOS 2020 s.19.06(4)'
},

{
  question: 'Which of the following items must be included in the fuel carried when a flight commences, under Part 91 MOS s.19.04(1)?',
  options: [
    'A. Trip fuel and 45 minutes reserve for all flights',
    'B. Trip fuel, final reserve and 10% contingency for all operations',
    'C. Taxi fuel, trip fuel, destination alternate fuel (if required), holding fuel (if required), contingency fuel (if applicable), final reserve fuel, and additional fuel (if applicable)',
    'D. Trip fuel, alternate fuel and final reserve only'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.19.04(1)(a)–(g) lists all required fuel components: taxi fuel, trip fuel, destination alternate fuel (if required), holding fuel (if required), contingency fuel (if applicable), final reserve fuel, and additional fuel (if applicable). All components must be present at the commencement of flight.',
  reference: 'Part 91 MOS 2020 s.19.04(1)(a)–(g)'
},

{
  question: 'How frequently must the pilot monitor fuel during a flight?',
  options: [
    'A. At regular intervals throughout the flight, comparing planned versus actual consumption and determining remaining fuel',
    'B. At the top of climb only',
    'C. Fuel monitoring is at the pilot\'s discretion for VFR flights',
    'D. Every 30 minutes'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.19.05(2): the pilot in command must check fuel at regular intervals throughout the flight, comparing planned with actual consumption, determining remaining fuel, and determining whether fuel remaining is sufficient to satisfy the requirements of s.19.04.',
  reference: 'Part 91 MOS 2020 s.19.05(2)'
},

{
  question: 'What are the VMC criteria for an aeroplane operating in Class G airspace at 5,500 ft AMSL (above 3,000 ft AMSL) by day?',
  options: [
    'A. 1,500 m visibility; clear of cloud',
    'B. 5,000 m visibility; 1,000 ft above and below cloud; 1,500 m horizontally',
    'C. 3,000 m visibility; 500 ft below cloud; 600 m horizontally',
    'D. 8,000 m visibility; 1,000 ft above and below cloud; 1 NM horizontally'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.07(3): for aeroplanes in Class G airspace above 3,000 ft AMSL (or above 1,000 ft AGL, whichever is higher), the VMC criteria are 5,000 m flight visibility, 1,000 ft above cloud, 1,000 ft below cloud, and 1,500 m (not 1 NM) horizontally. Note: 1,500 m horizontal is specified in the MOS table.',
  reference: 'Part 91 MOS 2020 s.2.07 Table 2.07(3)'
},

{
  question: 'An aeroplane is operating in Class G airspace below 3,000 ft AMSL and below 1,000 ft AGL. What is the minimum flight visibility under Part 91 MOS Table 2.07(3) for day VFR?',
  options: [
    'A. 5,000 m; 1,000 ft vertical cloud clearance',
    'B. 3,000 m; 500 ft below cloud',
    'C. 800 m; clear of cloud',
    'D. 1,500 m; clear of cloud'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 2.07(3): for aeroplanes in Class G airspace at or below 3,000 ft AMSL and at or below 1,000 ft AGL by day, the VMC criteria are 1,500 m flight visibility and clear of cloud.',
  reference: 'Part 91 MOS 2020 s.2.07 Table 2.07(3)'
},

{
  question: 'What is the maximum indicated airspeed for VFR flight in Class C airspace below 10,000 ft AMSL under Part 91 MOS?',
  options: [
    'A. No speed limit applies to VFR in Class C',
    'B. 300 kt',
    'C. 200 kt',
    'D. 250 kt'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 4.02(1) Item 1: for Class C airspace VFR, the maximum indicated airspeed below 10,000 ft AMSL is 250 kt.',
  reference: 'Part 91 MOS 2020 s.4.02 Table 4.02(1) Item 1'
},

{
  question: 'To operate under a special VFR clearance within a control zone, the pilot must maintain at least what flight visibility?',
  options: [
    'A. As specified in the ERSA entry for the aerodrome',
    'B. The applicable VMC criteria for the class of airspace',
    'C. 800 m',
    'D. 1,500 m'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.2.01(3)(d): to operate under special VFR, the pilot must maintain flight visibility of at least 1,500 m (or as further specified in the section), and must be clear of cloud, operating by day, and authorised by ATC.',
  reference: 'Part 91 MOS 2020 s.2.01(3)'
},

{
  question: 'A VFR flight is planned in Class D airspace. Is an ATC clearance required before entry?',
  options: [
    'A. Yes — all flights in Class D airspace require an ATC clearance before entry',
    'B. No — VFR aircraft need clearance only for Class A and C',
    'C. Only if the VFR flight is at night',
    'D. Only if the aircraft is above MTOW 5,700 kg'
  ],
  correct: 0,
  explanation: 'CASR Part 91 and AIP ENR 1.4: Class D airspace requires ATC clearance for all flights (VFR and IFR). Class D differs from Class G (uncontrolled) where no clearance is required, and from Class E where VFR aircraft require only a radio and may enter without clearance.',
  reference: 'CASR Part 91 / AIP ENR 1.4'
},

{
  question: 'Which frequencies require a radio qualification to use?',
  options: [
    'A. Any aeronautical frequency above 118 MHz',
    'B. The CTAF for a non-controlled aerodrome, and the frequency for a mandatory broadcast area (MBA)',
    'C. All aeronautical frequencies require qualification',
    'D. The aeronautical emergency frequency 121.5 MHz only'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.21.01: the kinds of radio frequencies that require a radio qualification (under CASR s.91.625(1)(a)(iv)) are the CTAF for a non-controlled aerodrome and the frequency for an MBA.',
  reference: 'Part 91 MOS 2020 s.21.01'
},

{
  question: 'Which mandatory broadcast area (MBA) has NIL additional requirements beyond the standard MBA procedures?',
  options: [
    'A. Ayers Rock MBA',
    'B. Ballina/Byron Gateway MBA',
    'C. Both Ayers Rock and Port Hedland MBAs',
    'D. Port Hedland MBA'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 11.10A(3): both Ayers Rock MBA (Item 1) and Port Hedland MBA (Item 3) have NIL additional requirements. Ballina/Byron Gateway MBA (Item 2) has specific requirements when SFIS is active.',
  reference: 'Part 91 MOS 2020 s.11.10A Table 11.10A(3)'
},

{
  question: 'An aircraft in Class G airspace has its radio fail during flight. Under Part 91 MOS s.11.10, what action is required?',
  options: [
    'A. Squawk 7600 and continue to the filed destination',
    'B. Land immediately at the nearest aerodrome',
    'C. Squawk 7700 and continue to destination',
    'D. Select code 7600; remain outside controlled airspace; assume broadcasting and broadcast position and intentions on the frequency appropriate to the area; as soon as practicable descend below 3,000 ft AGL over land'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.11.10(2)(a): if operating VFR in Class G or E airspace with radio failure — select 7600 on transponder; remain outside controlled airspace; assume broadcasting and broadcast on appropriate frequency; as soon as practicable, descend below 3,000 ft AGL over land (see s.11.10(2)(a)(iv)).',
  reference: 'Part 91 MOS 2020 s.11.10(2)(a)'
},

{
  question: 'What broadcast must be made before or immediately after entering an MBA?',
  options: [
    'A. The pilot\'s intended use of the MBA',
    'B. Aircraft registration and fuel state',
    'C. Estimated time for transit of the MBA',
    'D. Aircraft callsign, altitude and destination'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 21.09(1) Item 1: when entering an MBA, the broadcast must state the pilot\'s intended use of the MBA. This allows other traffic to build a picture of the intended operation.',
  reference: 'Part 91 MOS 2020 s.21.09 Table 21.09(1) Item 1'
},

{
  question: 'When is a VFR aircraft in Class E or G airspace required to make a report to ATS under Part 91 MOS s.21.07?',
  options: [
    'A. VFR aircraft in Class G have no mandatory ATS reporting obligations',
    'B. When requiring a clearance into controlled airspace, and before and on completion of an over-water stage (if SAR reporting schedules are arranged)',
    'C. At each waypoint regardless of airspace class',
    'D. Every 30 minutes on the en-route frequency'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.07(1): VFR aircraft in Classes E and G must report when requiring clearance into controlled airspace (Item 1), and before and on completion of an over-water stage if SAR reporting schedules have been arranged (Item 2).',
  reference: 'Part 91 MOS 2020 s.21.07 Table 21.07(1)'
},

{
  question: 'What Mode A code should a VFR aircraft squawk in Class E or Class G airspace when no specific code has been assigned?',
  options: [
    'A. 1200',
    'B. 3000',
    'C. 7000',
    'D. 2000'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 26.69(7) Item 3: VFR flights in Class E or Class G airspace squawk Mode A code 1200. Code 3000 is for Class A/B/C/D or IFR in Class E. Code 2000 is for IFR in Class G.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 3'
},

{
  question: 'A pilot declares an in-flight emergency. Unless otherwise instructed by ATC, which transponder code should be selected?',
  options: [
    'A. 7500',
    'B. 7700',
    'C. 7600',
    'D. 2000'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 26.69(7A) Item 3: for an in-flight emergency (unless otherwise instructed by ATC), the Mode A code is 7700. Code 7600 is for radio failure. Code 7500 is for unlawful interference.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7A) Item 3'
},

{
  question: 'A pilot has inadvertently penetrated controlled airspace without a clearance and is now re-established in Class G. The radio is still functioning. What transponder code should the pilot select?',
  options: [
    'A. 3000 — as the flight was recently in controlled airspace',
    'B. 1200 — the standard VFR code for Class G',
    'C. 7700 — to indicate an emergency',
    'D. 7600 — radio failure code'
  ],
  correct: 1,
  explanation: 'Now established in Class G VFR with a functioning radio, the correct code is 1200 per Part 91 MOS Table 26.69(7) Item 3. The pilot should immediately contact ATC to report the airspace infringement. 7700 would be inappropriate as this is not a safety emergency caused by the aircraft.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 3 / AIP ENR 1.6'
},

{
  question: 'Which instruments are required for an aeroplane conducting a VFR flight by day?',
  options: [
    'A. Airspeed indicator, altimeter, compass only',
    'B. Full six-pack regardless of flight rules or operation type',
    'C. Indicated airspeed, pressure altitude, magnetic heading, and time — plus Mach number if applicable, and turn/slip and OAT if aerial work',
    'D. Airspeed indicator, altimeter, compass, clock — plus attitude and vertical speed indicators'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.06(1): an aeroplane for VFR day flight must display indicated airspeed, pressure altitude, magnetic heading, and time. Mach number only if operating limits are Mach-expressed. Turn and slip only for aerial work. OAT only for aerial work from aerodromes where ambient temperature is not available from ground instruments.',
  reference: 'Part 91 MOS 2020 s.26.06(1)(a)–(g)'
},

{
  question: 'Which aeroplanes must be fitted with a Flight Data Recorder (FDR)?',
  options: [
    'A. All aeroplanes with MTOW above 5,700 kg',
    'B. All aeroplanes certificated after 1960',
    'C. Only scheduled RPT aeroplanes with more than 19 seats',
    'D. Aeroplanes with MTOW above 5,700 kg that are turbine powered, or first certificated on or after 1 July 1965'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.26.31: one FDR must be fitted to an aeroplane with MTOW more than 5,700 kg that is turbine powered, or is of a type first certificated in its country of manufacture on or after 1 July 1965.',
  reference: 'Part 91 MOS 2020 s.26.31'
},

{
  question: 'What ELT requirements apply to most domestic aeroplane flights?',
  options: [
    'A. Two survival ELTs must be carried on all flights',
    'B. An ELT is only required if the flight is over water',
    'C. An automatic ELT must be fitted, or at least one survival ELT must be carried',
    'D. No ELT is required for VFR flights under 5,700 kg'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.48(1)(a): for flights not involving more than one life raft, the aircraft must either be fitted with an automatic ELT, or carry at least one survival ELT.',
  reference: 'Part 91 MOS 2020 s.26.48(1)(a)'
},

{
  question: 'What radiocommunication capability must an aircraft have for flight in Australian airspace?',
  options: [
    'A. A Mode S transponder with ADSB capability',
    'B. Only a receive-only capability is required',
    'C. Equipment enabling 2-way voice communications and communication on the aeronautical emergency frequency 121.5 MHz',
    'D. HF radio for all flights beyond 100 NM from the departure aerodrome'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.18(1): an aircraft must have equipment capable of 2-way voice communications and of communicating on the aeronautical emergency frequency 121.5 MHz.',
  reference: 'Part 91 MOS 2020 s.26.18(1)'
},

{
  question: 'Is a VFR aircraft required to carry radio for day flight in Class G airspace at or below 5,000 ft AMSL?',
  options: [
    'A. Radio is only required for IFR flights',
    'B. No — a VFR aircraft in Class G at or below 5,000 ft AMSL by day is not required to comply with the radio fitment requirement, unless operating under certain VMC criteria or within/intending to enter an MBA',
    'C. Only if the flight exceeds 25 NM from the departure aerodrome',
    'D. Yes — radio is always required in Australian airspace'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.18(2): a VFR aircraft in Class G airspace at or below 5,000 ft AMSL is not required to comply with s.26.18(1) (radio requirement). Exceptions under s.26.18(3)–(4): if operating under VMC criteria at Table 2.07(3) items 4–6, or operating within or intending to enter an MBA.',
  reference: 'Part 91 MOS 2020 s.26.18(2)–(4)'
},

{
  question: 'What does a steady red light from the control tower mean to an aircraft in flight?',
  options: [
    'A. Return for landing',
    'B. Clear to land',
    'C. Give way to other aircraft and continue circling',
    'D. Aerodrome unsafe — do not land'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.04(1) Item 2: a steady red light directed at an aircraft in flight means "give way to other aircraft and continue circling." On the ground it means "stop."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 2'
},

{
  question: 'A series of green flashes is directed at an aircraft in flight. What does this signal mean?',
  options: [
    'A. Return for landing',
    'B. Cleared to land',
    'C. Aerodrome unsafe',
    'D. Exercise extreme caution'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 2.04(1) Item 3: green flashes to an aircraft in flight means "return for landing." On the ground it means "authorised to taxi (if pilot satisfied no collision risk exists)."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 3'
},

{
  question: 'A steady green light from the tower is directed at an aircraft in flight. What does this signal mean?',
  options: [
    'A. Return for landing immediately',
    'B. Authorised to land if pilot satisfied no collision risk exists',
    'C. Cleared to take-off',
    'D. Continue circling'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.04(1) Item 1: a steady green light to an aircraft in flight means "authorised to land if pilot satisfied no collision risk exists." On the ground it means "authorised to take-off if pilot satisfied no collision risk exists."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 1'
},

{
  question: 'Red flashes are directed at an aircraft in flight from the control tower. What does this signal mean under Part 91 MOS?',
  options: [
    'A. Cleared to land',
    'B. Give way and continue circling',
    'C. Aerodrome unsafe — do not land',
    'D. Return for landing immediately'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.04(1) Item 4: red flashes directed at an aircraft in flight means "aerodrome unsafe — do not land." On the ground it means "taxi clear of the landing area in use."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 4'
},

{
  question: 'What do white flashes from the control tower mean to an aircraft in flight under Part 91 MOS Table 2.04(1)?',
  options: [
    'A. Return to starting point on aerodrome',
    'B. No significance — meaning only applies to aircraft on the ground',
    'C. Land immediately — priority approach authorised',
    'D. Aircraft is cleared for immediate departure'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 2.04(1) Item 5: white flashes directed at an aircraft in flight have no significance. On the ground, white flashes mean "return to starting point on aerodrome."',
  reference: 'Part 91 MOS 2020 s.2.04 Table 2.04(1) Item 5'
},

{
  question: 'What is the correct IFR cruising level for a flight tracking 095° (M) (eastbound) between 9,000 ft and FL110?',
  options: [
    'A. 9,500 ft',
    'B. FL100',
    'C. 9,000 ft',
    'D. 10,000 ft'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.09(1): eastbound tracks (000° clockwise to 179°) IFR cruising levels include 9,000 ft (no IFR level between 9,000 ft and FL110 at the transition point). Track 095° is eastbound, so 9,000 ft is the correct IFR level in this band.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'An aircraft is conducting VFR flight on a track of 265°M at approximately 7,000 ft. Under Part 91 MOS Table 2.09(1), what VFR cruising level should be used?',
  options: [
    'A. 7,000 ft',
    'B. 8,500 ft',
    'C. 7,500 ft',
    'D. 6,500 ft'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 2.09(1): westbound tracks (180° clockwise to 359°) VFR cruising levels include 2,500 ft, 4,500 ft, 6,500 ft, 8,500 ft. Track 265°M is westbound, so at approximately 7,000 ft the correct VFR level is 6,500 ft.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'What VFR cruising level applies for an eastbound track at approximately 5,000 ft?',
  options: [
    'A. 4,500 ft',
    'B. 6,500 ft',
    'C. 5,500 ft',
    'D. 5,000 ft'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 2.09(1): eastbound VFR levels (tracks 000°–179°) at the 5,000 ft band = 5,500 ft. Eastbound VFR: 1,500; 3,500; 5,500; 7,500; 9,500 ft.',
  reference: 'Part 91 MOS 2020 s.2.09 Table 2.09(1)'
},

{
  question: 'Which flights must have a flight plan submitted?',
  options: [
    'A. All flights in Australian airspace regardless of rules',
    'B. Only RPT operations and charter flights',
    'C. Flights exceeding 250 NM only',
    'D. IFR flights and VFR flights in Class C or Class D airspace'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.9.02(1): a flight plan must be submitted for (a) an IFR flight; or (b) a VFR flight in Class C or Class D airspace.',
  reference: 'Part 91 MOS 2020 s.9.02(1)'
},

{
  question: 'Which VFR flights require either a flight plan or SARTIME to be lodged?',
  options: [
    'A. All VFR flights regardless of location or duration',
    'B. VFR flights exceeding 500 NM only',
    'C. Only VFR flights at night or over water',
    'D. VFR air transport operations; over-water flights beyond gliding range to land; flights in designated remote areas; and night flights beyond 120 NM from departure aerodrome'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.9.02(2): VFR flights requiring flight plan or SAR lodgement include: air transport operations; over-water flights beyond distance from land that allows engine-inoperative reach to land; flights in designated remote areas; and night flights beyond 120 NM from departure aerodrome.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(a)–(d)'
},

{
  question: 'What is the meaning of SARTIME as defined in Part 91 MOS?',
  options: [
    'A. The scheduled departure time for the purposes of air traffic services',
    'B. The time a flight plan becomes active',
    'C. The time a flight is expected to arrive at its destination',
    'D. The time nominated by a pilot for the initiation of SAR action if a report has not been received by the nominated unit'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.1.07 definition: SARTIME means the time nominated by a pilot for the initiation of SAR action if a report has not been received by the nominated unit.',
  reference: 'Part 91 MOS 2020 s.1.07 Definitions'
},

{
  question: 'What are the alternate minima for a day VFR aeroplane flight to an aerodrome in Class G airspace?',
  options: [
    'A. 500 ft cloud base; 3 km visibility',
    'B. LSALT plus 500 ft; 8 km visibility',
    'C. 1,000 ft cloud base; 3 km visibility',
    'D. 1,500 ft cloud base; 8 km visibility'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 8.08(1) Item 3: for a day VFR aeroplane to an aerodrome in Class G airspace, alternate minima are 1,000 ft and 3 km visibility. Note this differs from the 1,500 ft / 8 km that applies to Class G for night VFR and for airspace other than Class G.',
  reference: 'Part 91 MOS 2020 s.8.08 Table 8.08(1) Item 3'
},

{
  question: 'What different alternate requirement applies when flight planning is based on a TAF3 and ETA is within the first 3 hours of TAF3 validity?',
  options: [
    'A. The 30-minute buffer increases to 60 minutes when using TAF3',
    'B. The same criteria apply as for standard TAF',
    'C. The 30-minute buffer does not apply — the pilot must nominate an alternate only if ETA is during the actual forecast period of relevant weather conditions (not extended by 30 minutes)',
    'D. No alternate is required if TAF3 is used'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.8.04(2): when planning is based on TAF3 and ETA is within the first 3 hours of TAF3 validity, an alternate must be nominated only if ETA falls during the period from forecast commencement to forecast ending of relevant weather — the 30-minute buffers before and after do not apply.',
  reference: 'Part 91 MOS 2020 s.8.04(2)'
},

{
  question: 'What equipment check must the pilot complete before take-off?',
  options: [
    'A. Confirm that all equipment required by the civil aviation legislation is available and functioning properly, and that emergency/survival equipment is readily accessible',
    'B. Confirm aircraft gross weight does not exceed MTOW',
    'C. Verify that the flight plan has been received by ATC',
    'D. Check that the ADS-B is transmitting'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.10.02(d): before take-off, the pilot must confirm that all equipment required to be fitted or carried by civil aviation legislation is available and functioning properly, and that emergency and survival equipment carried on the aircraft is readily accessible.',
  reference: 'Part 91 MOS 2020 s.10.02(d)'
},

{
  question: 'Which of the following is a pilot maintenance task that a holder of a flight crew licence may lawfully perform?',
  options: [
    'A. Replacing a landing gear strut seal',
    'B. Replacing a radio transceiver',
    'C. Replacing a cracked windscreen',
    'D. Replacing spark plugs in an aircraft engine'
  ],
  correct: 3,
  explanation: 'CASR Part 43 Schedule 8 permits licensed pilots to replace spark plugs as a Schedule 8 pilot maintenance task. Windscreen replacement, avionics replacement, and landing gear seal replacement require a LAME or authorised person. Pilot maintenance tasks are limited to low-risk consumable and adjustment items listed in Schedule 8.',
  reference: 'CASR Part 43 Schedule 8'
},

{
  question: 'A pilot notices a defect during pre-flight that is not listed in the MEL. What is the correct action under CASR?',
  options: [
    'A. The pilot may defer the item for 72 hours under PUS',
    'B. The pilot may operate the aircraft if the defect is assessed as not immediately hazardous',
    'C. The aircraft may depart if the PIC believes the defect is minor',
    'D. The aircraft must not be operated until the defect is rectified by an authorised maintenance organisation, as it cannot be deferred under the MEL if not listed'
  ],
  correct: 3,
  explanation: 'Under CASR Part 42 and the MEL framework: a defect not listed in the MEL cannot be deferred. Only items expressly listed in the operator\'s approved MEL with all applicable conditions met can be deferred. An unlisted defect must be rectified before the aircraft is released for flight.',
  reference: 'CASR Part 42 / CASR Part 91 MOS s.10.02(d)'
},

{
  question: 'What aircraft performance category applies to an aircraft with a VAT (threshold speed) of 105 kt?',
  options: [
    'A. Category D',
    'B. Category A',
    'C. Category C',
    'D. Category B'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 2.02(2): Category A = VAT not more than 90 kt; Category B = 91–120 kt; Category C = 121–140 kt; Category D = 141–165 kt; Category E = 166–210 kt. A VAT of 105 kt falls in Category B.',
  reference: 'Part 91 MOS 2020 s.2.02 Table 2.02(2)'
},

{
  question: 'What is the VAT range for Category C aircraft?',
  options: [
    'A. 100–130 kt',
    'B. 141–165 kt',
    'C. 91–120 kt',
    'D. 121–140 kt'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 2.02(2) Item 3: Category C aircraft have a VAT (indicated airspeed at threshold speed) of 121–140 kt.',
  reference: 'Part 91 MOS 2020 s.2.02 Table 2.02(2) Item 3'
},

{
  question: 'When must flight crew use supplemental oxygen on a continuous basis?',
  options: [
    'A. Only when cabin altitude exceeds FL180',
    'B. Supplemental oxygen use is at crew discretion below FL250',
    'C. For any period exceeding 30 minutes when cabin pressure altitude is continuously at least FL125 but less than FL140; and for the entire period when cabin altitude is at least FL140',
    'D. When cabin altitude exceeds FL250'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Table 26.43(2) Item 1(a)–(b): flight crew must use supplemental oxygen for any period exceeding 30 minutes when cabin pressure altitude is continuously at least FL125 but less than FL140, and for the entire period when cabin altitude is at least FL140.',
  reference: 'Part 91 MOS 2020 s.26.43 Table 26.43(2) Item 1'
},

{
  question: 'When a pressurised aircraft operates above FL250, what additional oxygen requirement applies?',
  options: [
    'A. At least 10 minutes supply must be available even if the entire period above FL250 is less than 10 minutes',
    'B. A second oxygen system must be fitted',
    'C. All passengers must also be provided with supplemental oxygen',
    'D. No additional requirement above the FL140 rules'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 26.43(2) Item 1(c): when a pressurised aircraft is flown at FL250 or more (relevant flight), there must be at least 10 minutes supply even if the entire period of relevant flight is less than 10 minutes.',
  reference: 'Part 91 MOS 2020 s.26.43 Table 26.43(2) Item 1(c)'
},

{
  question: 'The pilot must advise ATS when RAIM or GNSS integrity is lost for how long during the en-route phase?',
  options: [
    'A. More than 1 minute',
    'B. More than 5 minutes',
    'C. Any loss must be immediately reported',
    'D. More than 10 minutes'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.11.03(2)(a): during the en-route phase, the pilot must advise ATS if there is RAIM loss or loss of GNSS integrity for more than 5 minutes. During the terminal phase, any RAIM or integrity loss must be reported.',
  reference: 'Part 91 MOS 2020 s.11.03(2)(a)'
},

{
  question: 'What subjects does CPL flight rules and air law (CFRC) cover that a pilot must be able to apply?',
  options: [
    'A. Documentation and publications, CPL licence privileges and limitations, flight rules and conditions of flight, air service operations, aerodromes, airspace, and equipment requirements',
    'B. Flight planning and fuel only',
    'C. Instrument approach procedures only',
    'D. ATPL performance subjects only'
  ],
  correct: 0,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 CFRC: the CPL air law syllabus covers documentation and publications, CPL licence privileges/limitations including recency, flight rules and conditions of flight, air service operations, aerodromes, airspace, and equipment requirements — all at the CPL level of application.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 (CFRC)'
},

{
  question: 'What does a CPL holder need to understand about flight and duty time limitations?',
  options: [
    'A. The pilot must be able to apply the rules pertaining to flight and duty time limitations for CPL licence holders — including CAO 48.1 FDP and cumulative limits',
    'B. Only the 8-hour daily flight limit applies',
    'C. Duty time rules only apply to Part 121 operators',
    'D. Recency only — there are no duty time limits for CPL holders'
  ],
  correct: 0,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.2: a CPL holder must be able to apply the rules pertaining to flight and duty time limitations for CPL licence holders. This includes CAO 48.1 FDP limits, cumulative limits, and rest requirements.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.2'
},

{
  question: 'What aeroplane-specific circuit procedure knowledge is required for the CFRA (CPL aeroplane) air law component?',
  options: [
    'A. Circuit procedures are not tested in CFRA — only airspace rules',
    'B. The pilot must describe circuit procedures for aeroplane operations, including standard circuit heights and patterns at controlled and non-controlled aerodromes',
    'C. Instrument approach circuit procedures only',
    'D. Only emergency circuit procedures are tested'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.2.1: the pilot must describe circuit procedures for aeroplane operations. This covers standard circuit heights, direction, joining procedures, and requirements at both controlled and non-controlled aerodromes.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.1'
},

{
  question: 'What is the key difference between a Prohibited Area and a Restricted Area?',
  options: [
    'A. Restricted Areas apply only during stated activation times — outside those times, any aircraft may enter',
    'B. There is no difference — both require CASA approval for entry',
    'C. Entry to a Prohibited Area is absolutely forbidden to all civil aircraft. Entry to a Restricted Area is forbidden unless permission is obtained from the controlling authority',
    'D. Prohibited Areas only apply to foreign-registered aircraft'
  ],
  correct: 2,
  explanation: 'Under CASR Part 91 and AIP ENR 2.1: a Prohibited Area (prefix P) is airspace within which flight is prohibited for all civil aircraft. A Restricted Area (prefix R) prohibits entry without permission from the controlling authority. Danger Areas (prefix D) do not prohibit entry but warn of potentially hazardous activities.',
  reference: 'CASR Part 91 / AIP ENR 2.1'
},

{
  question: 'What does a Danger Area indicate to a pilot?',
  options: [
    'A. Flight is absolutely prohibited',
    'B. The area is restricted to military aircraft only',
    'C. Entry requires a specific CASA approval',
    'D. The area may contain activities hazardous to flight but entry is not prohibited — pilots proceed at their own risk'
  ],
  correct: 3,
  explanation: 'CASR Part 91 and AIP ENR 2.2: Danger Areas (prefix D) indicate potentially hazardous activities (such as military exercises, weapons firing) but do not prohibit entry. Pilots enter at their own risk and should contact the controlling authority or check activation times via NAIPS NOTAMs.',
  reference: 'CASR Part 91 / AIP ENR 2.2'
},

{
  question: 'What does a horizontal white dumb-bell (H-shaped) ground signal adjacent to the wind direction indicator mean?',
  options: [
    'A. Use only hard surface movement areas (or sealed surfaces where both gravel and sealed areas exist)',
    'B. Glider operations are in progress',
    'C. The aerodrome is closed to all traffic',
    'D. Right-hand circuit is in operation'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 2.05(1) Item 1: a horizontal white dumb-bell displayed adjacent to the wind direction indicator means (1) use only hard surface movement areas; (2) where sealed and gravel areas exist, use only sealed; (3) where constructed gravel and natural surfaces exist, use only the gravel surfaces.',
  reference: 'Part 91 MOS 2020 s.2.05 Table 2.05(1) Item 1'
},

{
  question: 'What minimum height applies when flying over a populous area or public gathering?',
  options: [
    'A. 1,000 ft above the highest feature or obstacle within a horizontal radius of 600 m',
    'B. 1,500 ft AGL at all times over built-up areas',
    'C. 500 ft above the highest obstacle within 600 m',
    'D. 300 ft over open areas and 1,000 ft over cities'
  ],
  correct: 0,
  explanation: 'CASR s.91.265 and Part 91 MOS s.12.01: the minimum height over a populous area or public gathering is 1,000 ft above the highest feature or obstacle within a horizontal radius of 600 m from the aircraft. (Rotorcraft 300 m.)',
  reference: 'CASR Part 91 s.91.265 / Part 91 MOS 2020 s.12.01'
},

{
  question: 'When is a journey log required to be maintained?',
  options: [
    'A. Only for Part 121 RPT operations',
    'B. For all flights in Australian airspace',
    'C. For flights that begin or end at an aerodrome outside Australian territory (international flights)',
    'D. Only for IFR flights above FL245'
  ],
  correct: 2,
  explanation: 'Part 91 MOS Chapter 5 (s.5.01): the requirement to maintain a journey log under CASR s.91.120(2)(a) applies to flights that begin or end at an aerodrome outside Australian territory — international flights.',
  reference: 'Part 91 MOS 2020 s.5.01 / CASR s.91.120'
},

{
  question: 'What is the meaning of "in-company" aircraft as defined in the MOS?',
  options: [
    'A. Aircraft belonging to the same airline company',
    'B. Aircraft forming a group occupying a specific 3-dimensional volume of airspace whose pilots self-separate from other group aircraft',
    'C. Aircraft with the same callsign prefix',
    'D. Aircraft on the same ATC clearance to the same destination'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.1.07 definition: "in-company" aircraft means aircraft (a) that form a group and occupy a specific 3-dimensional volume of airspace; and (b) each of whose pilots in command self-separates from the other group aircraft in the volume of airspace.',
  reference: 'Part 91 MOS 2020 s.1.07 Definitions'
},

{
  question: 'What is the definition of "trip fuel"?',
  options: [
    'A. The fuel remaining in the tanks after the flight',
    'B. Trip fuel equals final reserve plus contingency only',
    'C. Fuel for take-off and climb to initial cruising level, cruise from top of climb to top of descent, descent and approach — the total fuel from departure to landing at the destination',
    'D. The total fuel on board at departure'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.1.07: trip fuel means fuel required to enable the aircraft to fly from any point to landing at the destination including: take-off and climb from departure elevation to initial cruising level; cruise from top of climb to top of descent; fuel from top of descent to landing.',
  reference: 'Part 91 MOS 2020 s.1.07 Definition of trip fuel'
},

{
  question: '"additional fuel" is defined as fuel required for what purpose?',
  options: [
    'A. Fuel required to fly to the alternate aerodrome in normal operations',
    'B. Fuel to compensate for unforeseen headwinds or ATC delays',
    'C. Extra fuel beyond the minimum required, carried at the PIC\'s discretion',
    'D. Fuel to allow an aircraft that suffers engine failure or pressurisation loss at the most critical point to proceed to an alternate, fly 15 minutes holding at 1,500 ft, and land'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.1.07: additional fuel enables an aircraft suffering engine failure or pressurisation loss at the most critical point to proceed to an alternate aerodrome, fly 15 minutes at holding speed at 1,500 ft above aerodrome elevation in ISA, and make an approach and landing.',
  reference: 'Part 91 MOS 2020 s.1.07 Definition of additional fuel'
},

{
  question: 'If an aircraft is intercepted by another aircraft, what must the pilot in command comply with?',
  options: [
    'A. Declare MAYDAY immediately on 121.5 MHz',
    'B. Land immediately at the nearest aerodrome',
    'C. Maintain current heading and altitude and await further ATC instructions',
    'D. The applicable procedures for intercepted aircraft as set out in ICAO Annex 2 Appendix 1 Section 2 and Appendix 2 Attachment A'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.23.02: the pilot of an intercepted aircraft must comply with the applicable procedures set out in ICAO Annex 2 Appendix 1 Section 2 (signals for interception) and Annex 2 Appendix 2 Attachment A (interception of civil aircraft procedures).',
  reference: 'Part 91 MOS 2020 s.23.02'
},

{
  question: 'When must a turbine-engine aircraft display anti-collision lights comprising red beacon lights only?',
  options: [
    'A. From wheels-up to wheels-down only',
    'B. Only during periods of reduced visibility',
    'C. From immediately before engines are started until engines are shut down at the end of the flight',
    'D. From engine start to engine shutdown at the end of the flight'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.23(3)(a): for anti-collision lights comprising red beacon lights only, a turbine-engine aircraft must display them from immediately before the engines are started until the time the engines are shut down at the end of the flight.',
  reference: 'Part 91 MOS 2020 s.26.23(3)(a)'
},

{
  question: 'What is the minimum recency required for a CPL holder to act as PIC of an aeroplane for a day VFR flight?',
  options: [
    'A. 3 take-offs and 3 landings in the preceding 90 days on the relevant aircraft category',
    'B. 10 hours flight time in the preceding 12 months',
    'C. 5 take-offs and landings in the preceding 180 days',
    'D. A valid medical certificate only'
  ],
  correct: 0,
  explanation: 'Under CASR Part 61: to exercise PIC privileges for day VFR, a pilot must have completed 3 take-offs and 3 landings on the relevant aircraft category within the preceding 90 days. This is a strict currency requirement independent of total hours.',
  reference: 'CASR Part 61 / CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.2.1'
},

{
  question: 'What is the maximum validity period of a Class 1 medical certificate for a pilot aged 38?',
  options: [
    'A. 3 months',
    'B. 12 months',
    'C. 6 months',
    'D. 24 months'
  ],
  correct: 1,
  explanation: 'CASR Part 67: Class 1 medical certificates are valid for 12 months for pilots under 40 years of age, and 6 months for pilots aged 40 and over. A pilot aged 38 receives the standard 12-month validity.',
  reference: 'CASR Part 67'
},

{
  question: 'What is the maximum BAC a pilot may have when exercising flight crew privileges?',
  options: [
    'A. 0.05% — the same as the Australian road driving limit',
    'B. 0.04% — half the road driving limit',
    'C. 0.00% — nil alcohol at all times',
    'D. 0.02% — and the pilot must not fly within 8 hours of consuming alcohol'
  ],
  correct: 3,
  explanation: 'CASR Part 91.195: a pilot must not exercise flight crew privileges with a BAC at or above 0.02%, within 8 hours of consuming alcohol, or while under the influence of alcohol or drugs. All three conditions apply simultaneously.',
  reference: 'CASR Part 91 s.91.195'
},

{
  question: 'An aerodrome displays a white cross (×) on the signal square. What does this mean?',
  options: [
    'A. Right-hand circuit is in use',
    'B. The aerodrome or manoeuvring area is unserviceable — do not land',
    'C. Glider operations are in progress',
    'D. Special operations are in progress — proceed with caution'
  ],
  correct: 1,
  explanation: 'AIP AD 1.1 and RPL/PPL/CPL Workbook: a white cross on the signal square indicates the aerodrome or manoeuvring area is unserviceable. Pilots must not land. The signal is displayed in the signal area (signal square) to warn arriving pilots.',
  reference: 'AIP AD 1.1 / RPL PPL CPL Aeroplane Workbook v3.0a'
},

{
  question: 'What document must an aircraft carry to demonstrate it is registered?',
  options: [
    'A. No document is required — CASA databases confirm registration electronically',
    'B. The maintenance release serves as evidence of registration',
    'C. The Certificate of Registration must be carried on board or its details must be accessible',
    'D. Registration is confirmed by the transponder squawk only'
  ],
  correct: 2,
  explanation: 'CASR Part 47 and CASR Part 91: a Certificate of Registration (or evidence of registration) must be carried on board the aircraft. This document confirms the aircraft is legally registered in Australia as required for legal operation in Australian airspace.',
  reference: 'CASR Part 47 / CASR Part 91'
},

{
  question: 'What is the purpose of a Certificate of Airworthiness (C of A)?',
  options: [
    'A. It authorises the aircraft to be used for commercial operations only',
    'B. It replaces the maintenance release for low-risk operations',
    'C. It authorises the pilot to operate the aircraft on specific routes',
    'D. It certifies that the aircraft design and construction meets the applicable airworthiness standards'
  ],
  correct: 3,
  explanation: 'Under CASR Part 21: a Certificate of Airworthiness certifies that the aircraft design and construction conforms to approved type design and is in a condition for safe operation. It is a design and construction certification, distinct from the maintenance release (which certifies the aircraft is maintained in an airworthy condition).',
  reference: 'CASR Part 21 / CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.3'
},

{
  question: 'In an emergency a pilot in command may deviate from the requirements of CASR. What must the pilot do after such a deviation?',
  options: [
    'A. Notify the ATSB only if structural damage occurred',
    'B. Submit a written report to CASA, stating the nature of the emergency and the extent of the deviation',
    'C. File an amended flight plan within 24 hours',
    'D. Nothing is required if the emergency was genuine'
  ],
  correct: 1,
  explanation: 'CASR Part 91 s.91.630: a pilot who deviates from CASR requirements during an emergency must submit a written report to CASA as soon as practicable, stating the nature of the emergency and the extent of deviation. This applies to any regulation deviated from, not just flight rules.',
  reference: 'CASR Part 91 s.91.630'
},

{
  question: 'When an aircraft is involved in a serious accident in Australia, who must be notified under the Transport Safety Investigation Act 2003?',
  options: [
    'A. Both ATSB and CASA — both must be notified simultaneously within 24 hours',
    'B. The Australian Transport Safety Bureau (ATSB)',
    'C. The aircraft manufacturer',
    'D. CASA only'
  ],
  correct: 1,
  explanation: 'Transport Safety Investigation Act 2003: serious accidents involving aircraft must be notified to the Australian Transport Safety Bureau (ATSB) immediately (or as soon as practicable). The ATSB is the independent safety investigator. CASA may also require separate notification for certain occurrence categories.',
  reference: 'Transport Safety Investigation Act 2003 / CASR Part 91'
},

{
  question: 'What must a CPL aeroplane pilot be able to describe regarding Class C and D airspace operations?',
  options: [
    'A. Requirements for operating in Class C and D airspace including special VFR clearance provisions',
    'B. IFR approach procedures only',
    'C. Separation standards between IFR aircraft only',
    'D. The microphone procedure for initial contact only'
  ],
  correct: 0,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.2.2: the pilot must describe requirements for operating in Class C and D airspace and special VFR clearance provisions. This includes clearance requirements, speed limits, and SVFR conditions.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.2'
},

{
  question: 'What are the minimum instruments required to operate an aeroplane under VFR?',
  options: [
    'A. Full six-pack regardless of conditions',
    'B. As specified in Part 91 MOS s.26.06(1): airspeed, pressure altitude, magnetic heading, and time — with additional instruments for specific operations',
    'C. Altimeter and compass only for day VFR',
    'D. Airspeed indicator only'
  ],
  correct: 1,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.3 requires the pilot to state minimum VFR instruments. Per Part 91 MOS s.26.06(1): indicated airspeed, pressure altitude, magnetic heading, and time are the baseline. Additional instruments are required for night, aerial work, and IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.2.3 / Part 91 MOS s.26.06(1)'
},

{
  question: 'What is the maximum flight time in any 28-day period for a CPL pilot conducting single-pilot commercial operations?',
  options: [
    'A. 100 hours',
    'B. 80 hours',
    'C. 120 hours',
    'D. 90 hours'
  ],
  correct: 0,
  explanation: 'CAO 48.1: the maximum flight time in any 28-day period for commercial pilot operations is 100 hours. The 12-month cumulative limit is 1,000 hours. These cumulative limits apply regardless of how many operators the pilot works for.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the minimum rest period required before a CPL pilot can commence a new flight duty period after completing a standard FDP of 10 hours?',
  options: [
    'A. 10 hours minimum rest',
    'B. 12 hours minimum rest',
    'C. 6 hours minimum rest',
    'D. 8 hours minimum rest'
  ],
  correct: 0,
  explanation: 'CAO 48.1: the minimum rest between flight duty periods for a standard FDP is 10 hours. This rest must be at a suitable facility. After particularly fatiguing operations (extended, augmented, or otherwise fatiguing FDPs), 12 hours minimum rest is required.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'If a TAF includes a BECMG element representing a deterioration in weather, when should the change be applied for alternate planning purposes?',
  options: [
    'A. From the start of the BECMG forecast period',
    'B. At the mid-point of the BECMG period',
    'C. From the end of the BECMG period',
    'D. Only after the BECMG change is confirmed by METAR'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.8.04(8)(a): where a BECMG element represents a deterioration in any weather element, the change indication is applied from the start of the forecast BECMG period. If the BECMG represents an improvement, it is applied from the end of the BECMG period.',
  reference: 'Part 91 MOS 2020 s.8.04(8)(a)'
},

{
  question: 'What ATC clearance readback is required?',
  options: [
    'A. Only altitude assignments need to be read back',
    'B. Only squawk codes and runway assignments require readback',
    'C. Readback is optional and at the pilot\'s discretion',
    'D. Full readback of all clearances and instructions in accordance with ATC procedures'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.11.12: the pilot in command must ensure that ATC clearances and instructions are read back in accordance with Table 21.05(1) and other applicable provisions. Specific items require mandatory readback including headings, altitudes/levels, speed instructions, and SSR codes.',
  reference: 'Part 91 MOS 2020 s.11.12'
},

{
  question: 'A VFR aircraft in Class D airspace must report to ATC in accordance with Table 21.05(1). Under that table, when must the pilot report a position estimate that is more than 2 minutes in error?',
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
  question: 'An aircraft is compelled to land due to an emergency. Which aircraft has the right-of-way?',
  options: [
    'A. The aircraft compelled to land — all other aircraft must give way to it',
    'B. Any IFR aircraft in controlled airspace',
    'C. The largest aircraft in the vicinity',
    'D. The aircraft that declared MAYDAY first'
  ],
  correct: 0,
  explanation: 'CASR 91.330 right-of-way table Item 1: an aircraft that is in an emergency and compelled to land has absolute right-of-way over all other aircraft. All aircraft must give way to it.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Two aircraft are converging at approximately the same altitude. Which aircraft gives way?',
  options: [
    'A. The aircraft at the lower altitude gives way',
    'B. The lighter aircraft gives way to the heavier',
    'C. The slower aircraft gives way to the faster',
    'D. The aircraft that has the other aircraft on its right must give way'
  ],
  correct: 3,
  explanation: 'CASR 91.330 right-of-way table Item 6: when two aircraft are on converging headings at approximately the same altitude, the aircraft that has the other aircraft on its right must give way.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'An aircraft is landing. Which other aircraft must give way to the landing aircraft?',
  options: [
    'A. Only other VFR aircraft',
    'B. Only aircraft on the ground',
    'C. Only IFR aircraft in controlled airspace',
    'D. Any other aircraft whether in flight or operating on the ground or water'
  ],
  correct: 3,
  explanation: 'CASR 91.330 right-of-way table Item 2: any other aircraft — whether in flight or operating on the ground or water — must give way to a landing aircraft.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'What is the correct order of right-of-way priority for aircraft in the vicinity (from highest to lowest priority)?',
  options: [
    'A. Balloon, parachute descent, unpowered glider, airship, aircraft towing something, power-driven aircraft',
    'B. IFR aircraft, VFR aircraft, glider, balloon',
    'C. Balloon, glider, airship, towing aircraft, powered aircraft',
    'D. Powered aircraft, airship, glider, balloon'
  ],
  correct: 0,
  explanation: 'CASR 91.330 right-of-way table Item 5: the order of right-of-way in descending priority is balloon, parachute descent, unpowered glider, airship, an aircraft that is towing something (including another aircraft), and power-driven aircraft.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'When overtaking another aircraft, how must the overtaking aircraft pass?',
  options: [
    'A. Either side at the pilot\'s discretion',
    'B. On the right, remaining to the right until well clear',
    'C. Below and to the left',
    'D. Above and to the left'
  ],
  correct: 1,
  explanation: 'CASR 91.335 additional right-of-way rules: when overtaking another aircraft (whether climbing, descending or level), the overtaking aircraft must keep out of the way, pass on the right, and remain on the right until well clear.',
  reference: 'CASR 91.335 / VFRG v8.3 Chapter 1'
},

{
  question: 'Two aircraft are approaching head-on. Under CASR 91.335, what must each aircraft do?',
  options: [
    'A. Each aircraft turns to the left',
    'B. The lower aircraft climbs to the other\'s altitude',
    'C. Each aircraft alters heading to the right',
    'D. The faster aircraft gives way and turns to the left'
  ],
  correct: 2,
  explanation: 'CASR 91.335: where two aircraft are approaching head-on or approximately head-on, each aircraft must alter heading to the right.',
  reference: 'CASR 91.335 / VFRG v8.3 Chapter 1'
},

{
  question: 'Two aircraft are on approach to land and one is higher than the other. Which gives way?',
  options: [
    'A. The higher aircraft gives way to the lower',
    'B. The lighter aircraft gives way',
    'C. The slower aircraft gives way',
    'D. The lower aircraft gives way to the higher'
  ],
  correct: 0,
  explanation: 'CASR 91.330 right-of-way table Item 3: when two heavier-than-air aircraft are on approach to land, the higher aircraft must give way to the lower. However, if the higher aircraft is in the final stages of approach, the lower aircraft must not take advantage of this rule.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'What is the standard circuit height for a medium performance aircraft (55–150 kt) at a non-controlled aerodrome?',
  options: [
    'A. 500 ft above aerodrome elevation',
    'B. 1,500 ft above aerodrome elevation',
    'C. 2,000 ft above aerodrome elevation',
    'D. 1,000 ft above aerodrome elevation'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 3 circuit heights table: medium performance aircraft (approximately 55–150 kt) fly the standard circuit at 1,000 ft above aerodrome elevation. High performance aircraft (above approximately 150 kt) use 1,500 ft; low performance (<55 kt) use 500 ft.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'What is the standard circuit height for high performance aircraft (above approximately 150 kt) including jets and many turboprops?',
  options: [
    'A. 2,500 ft above aerodrome elevation',
    'B. 1,500 ft above aerodrome elevation',
    'C. 1,000 ft above aerodrome elevation',
    'D. 500 ft above aerodrome elevation'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 3 circuit heights table: high performance aircraft (includes jets and many turboprops, above approximately 150 kt) fly the circuit at 1,500 ft above aerodrome elevation.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'After take-off from a non-controlled aerodrome, how long must an aircraft maintain the take-off track?',
  options: [
    'A. Until 1,000 ft AGL',
    'B. Until 500 ft AGL, unless a track change is necessary to avoid terrain',
    'C. Until clear of the aerodrome traffic zone',
    'D. Until reaching circuit height'
  ],
  correct: 1,
  explanation: 'CASR 91.390: for other than a helicopter, after take-off, the pilot must maintain the take-off track until the aircraft is above 500 ft AGL — unless a track change is necessary to avoid terrain.',
  reference: 'CASR 91.390 / VFRG v8.3 Chapter 3'
},

{
  question: 'What is the direction of turns in a standard aerodrome traffic circuit?',
  options: [
    'A. As published in the AIP or ERSA',
    'B. Normally all turns to the left, with right circuits published in ERSA',
    'C. Alternating left and right turns',
    'D. All turns to the right'
  ],
  correct: 1,
  explanation: 'CASR 91.385: the standard aerodrome traffic circuit facilitates orderly traffic flow and is normally made with all turns to the left. Right-hand circuits are published in ERSA for specific aerodromes where they are in use.',
  reference: 'CASR 91.385 / VFRG v8.3 Chapter 3'
},

{
  question: 'When making a straight-in approach at a non-controlled aerodrome, how far from the threshold must the aircraft be established on final approach?',
  options: [
    'A. 10 NM',
    'B. 1 NM',
    'C. 5 NM',
    'D. At least 3 NM from the threshold'
  ],
  correct: 3,
  explanation: 'CASR 91.395: unless conducting an instrument approach in IMC or a specific Part 103 aircraft, the pilot must be established on final approach by at least 3 NM from the threshold of the intended runway. The aircraft making a straight-in approach must give way to aircraft in the circuit.',
  reference: 'CASR 91.395 / VFRG v8.3 Chapter 3'
},

{
  question: 'In what direction should the final approach turn be completed at a non-controlled aerodrome?',
  options: [
    'A. Completed by not less than 500 ft above aerodrome elevation',
    'B. The turn may be completed at any height provided the runway is in sight',
    'C. Completed by not less than 1,000 ft AGL',
    'D. Completed at the pilot\'s discretion based on aircraft performance'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 Chapter 3: the turn onto final approach should be completed by not less than 500 ft above aerodrome elevation. This allows sufficient time to ensure the runway is clear and for aircraft to be stabilised.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.1'
},

{
  question: 'What is the meaning of "in the vicinity" of a non-controlled aerodrome under CASR 91.360?',
  options: [
    'A. In uncontrolled airspace, within 10 NM of the aerodrome, at a height that could result in conflict with aerodrome operations',
    'B. Within the aerodrome traffic zone as published in ERSA',
    'C. Within 5 NM at any altitude',
    'D. Within 50 NM at or above circuit height'
  ],
  correct: 0,
  explanation: 'CASR 91.360: an aircraft is in the vicinity of a non-controlled aerodrome if it is (a) in uncontrolled airspace; (b) within 10 NM of the aerodrome; and (c) at a height above the aerodrome that could result in conflict with operations at the aerodrome.',
  reference: 'CASR 91.360 / VFRG v8.3 Chapter 3'
},

{
  question: 'What are the three types of NOTAMs available to pilots in Australia?',
  options: [
    'A. Aerodrome NOTAMs, en-route NOTAMs and emergency NOTAMs',
    'B. Class A, Class B and Class C NOTAMs',
    'C. Temporary NOTAMs, permanent NOTAMs and trigger NOTAMs',
    'D. Location NOTAMs (accessed by individual location identifier), FIR NOTAMs (for Brisbane or Melbourne FIR), and Head Office NOTAMs (accessed by YSHO)'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 and AIP GEN 3.3: three types of NOTAMs are available — location NOTAMs (accessed by individual location identifier, e.g. YBWW for Brisbane West Wellcamp); FIR NOTAMs (applicable to Brisbane FIR (YBBB) or Melbourne FIR (YMMM)); and Head Office NOTAMs (accessed by identifier YSHO).',
  reference: 'AIP GEN 3.3 / VFRG v8.3 Chapter 2'
},

{
  question: 'Which NOTAMs must the pilot check before take-off?',
  options: [
    'A. NOTAMs are advisory only and do not require pre-flight checking',
    'B. Only NOTAMs for the departure aerodrome',
    'C. Location NOTAMs only',
    'D. All Head Office and FIR NOTAMs for the en-route phase, and all location-specific NOTAMs for relevant aerodromes'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.10.02(b): before take-off, the pilot must check all Head Office and FIR NOTAMs applicable to the en-route phase of the flight, and all location-specific NOTAMs for relevant aerodromes.',
  reference: 'Part 91 MOS 2020 s.10.02(b)'
},

{
  question: 'What does TEMPO indicate in a TAF?',
  options: [
    'A. Variations expected to last for 30 minutes or more but less than 60 minutes each instance, and not expected to cover more than half the given period',
    'B. Permanent weather change — applicable for the entire remaining validity period',
    'C. A 100% certain weather change',
    'D. Variations lasting less than 30 minutes each instance, not covering more than half the period'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 and AIP ENR 1.1: TEMPO is used when variations from forecast mean conditions are expected to last 30 minutes or more but less than 60 minutes in each instance, and are not expected to cover more than half the given period.',
  reference: 'AIP GEN 3.5 / VFRG v8.3 Chapter 2'
},

{
  question: 'What does INTER indicate in a TAF?',
  options: [
    'A. An international weather broadcast',
    'B. Variations lasting 30–60 minutes each instance',
    'C. Intermediate weather — applicable to the entire period',
    'D. Variations expected to last for periods less than 30 minutes each instance, not expected to cover more than half the given period'
  ],
  correct: 3,
  explanation: 'AIP GEN 3.5 / VFRG v8.3: INTER is used when variations from forecast mean conditions are expected to last for less than 30 minutes in each instance, and are not expected to cover more than half the given period. The mean conditions remain those of the preceding part of the forecast.',
  reference: 'AIP GEN 3.5 / VFRG v8.3 Chapter 2'
},

{
  question: 'What does CAVOK mean in a weather report or forecast?',
  options: [
    'A. Visual meteorological conditions confirmed by ATC',
    'B. Cloud and visibility OK — cloud base above 1,000 ft and visibility above 5 km',
    'C. No cloud detected — applicable to automated AWS only',
    'D. Visibility 10 km or more; no cloud below 5,000 ft or below the highest MSA (whichever is greater), no CB or TCU at any height; and nil significant weather'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 2: CAVOK is reported (from staffed stations) when: visibility is 10 km or more; there is nil significant cloud (no cloud below 5,000 ft or below the highest 25 NM MSA, whichever is greater, and no CB or TCU at any height); and nil significant weather simultaneously.',
  reference: 'VFRG v8.3 Chapter 2 / AIP GEN 3.5'
},

{
  question: 'What must a pilot do before first contact with ATC at an ATIS-equipped aerodrome?',
  options: [
    'A. File an arrival report with NAIPS',
    'B. Confirm fuel state with ATC before entering the CTR',
    'C. Obtain the ATIS and advise the ATIS code letter on first contact with ATC',
    'D. Obtain a transponder code from approach control'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.1 and VFRG v8.3: if landing or taking off at an aerodrome where ATIS is provided, the pilot should obtain the ATIS before first contact on the approach or tower frequency. On first contact, the pilot must advise receipt of the ATIS code letter, for example "Received information Echo."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'What is a separate pre-recorded ATIS used for outside normal tower hours?',
  options: [
    'A. It is replaced by AWIS during non-operational hours',
    'B. It may broadcast operational information of an unchanging nature, such as CTAF, PAL frequency, preferred runways, noise abatement, and expected reopening time',
    'C. ATIS is shut down outside tower hours',
    'D. ATIS continues to broadcast current weather only — operational information is removed'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 and AIP: when control zones are deactivated, the ATIS may be used to broadcast operational information of an unchanging nature including CTAF pilot activated lighting frequency, preferred runways, noise abatement procedures, and expected tower reopening time.',
  reference: 'VFRG v8.3 Chapter 5 / AIP ENR 1.1'
},

{
  question: 'What ATC service is provided in Class D airspace?',
  options: [
    'A. Full separation as in Class C airspace',
    'B. Separation between all aircraft',
    'C. Traffic information only — no separation is provided',
    'D. An air traffic control service where IFR flights are separated from other IFR and special VFR; IFR flights receive traffic information on VFR traffic; VFR flights receive traffic information on all other flights'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4 Class D separation: IFR flights are separated from other IFR and special VFR flights. IFR flights receive traffic information on VFR flights. VFR flights receive traffic information on all other flights. Special VFR flights are separated from other SVFR when visibility is less than VMC.',
  reference: 'AIP ENR 1.4 / VFRG v8.3 Chapter 3'
},

{
  question: 'What maximum speed applies to aircraft in Class D airspace at or below 2,500 ft AAL within 4 NM of the primary Class D aerodrome?',
  options: [
    'A. 250 kt',
    'B. 200 kt',
    'C. 180 kt',
    'D. 300 kt'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / Part 91 MOS Table 4.02(1): in Class D airspace at or below 2,500 ft AAL within 4 NM of the primary Class D aerodrome, the maximum IAS is 200 kt.',
  reference: 'VFRG v8.3 Chapter 3 / Part 91 MOS 2020 s.4.02 Table 4.02(1)'
},

{
  question: 'What constitutes a clearance to enter Class D airspace for an arriving aircraft?',
  options: [
    'A. Establishing two-way radio communications with the ATC tower',
    'B. Receiving the ATIS code constitutes clearance',
    'C. A specific ATC clearance using the phrase "Cleared to enter Class D"',
    'D. Squawking 3000 on the transponder'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 and VFRG v8.3: for entry into Class D airspace, establishing two-way communications between the aircraft and ATC constitutes a clearance for the aircraft to enter the Class D airspace.',
  reference: 'AIP ENR 1.4 / VFRG v8.3 Chapter 3'
},

{
  question: 'When taxiing on the movement area and not operating under an ATC clearance, a pilot must give way to which aircraft?',
  options: [
    'A. All aircraft regardless of their position',
    'B. Landing aircraft or those on final approach; aircraft taking off or preparing to take off; and the aircraft on the right on a converging course',
    'C. Only aircraft that are taking off',
    'D. Only aircraft larger than the taxiing aircraft'
  ],
  correct: 1,
  explanation: 'CASR 91.365 / VFRG v8.3: when taxiing without ATC clearance, the pilot must give way to landing aircraft or those on final approach; aircraft taking off or preparing to take off; keep well clear when overtaking; give way to the right when on a converging course; and stop or turn right to remain clear of head-on aircraft.',
  reference: 'CASR 91.365 / VFRG v8.3 Chapter 1'
},

{
  question: 'What must passenger safety briefings include before take-off?',
  options: [
    'A. Aircraft weight and balance only',
    'B. A briefing is only required if passengers have not flown before',
    'C. Only the location of emergency exits',
    'D. Instructions about controls, smoking rules, seat belts, brace position, emergency exits, oxygen (if fitted), baggage stowage, and life jackets (if carried)'
  ],
  correct: 3,
  explanation: 'CASR 91.565 / Part 91 MOS s.20.06: the pre-take-off passenger safety briefing must cover: not manipulating controls; smoking rules; seat belt use; brace position; emergency exits and evacuation; oxygen use (if carried); baggage stowage; and life jacket use and no inflation in aircraft (if life jackets are carried).',
  reference: 'CASR 91.565 / Part 91 MOS 2020 s.20.06 / VFRG v8.3 Chapter 3'
},

{
  question: 'How frequently must a VFR pilot fix the aircraft\'s position when navigating by visual reference?',
  options: [
    'A. Continuously',
    'B. Every 15 minutes',
    'C. At intervals not exceeding 30 minutes',
    'D. Every 10 NM'
  ],
  correct: 2,
  explanation: 'CASR 91.273 / Part 91 MOS s.13.02: when navigating by visual reference to the ground or water, a pilot must positively fix the aircraft\'s position by visual reference to features marked on topographical charts at intervals not exceeding 30 minutes.',
  reference: 'CASR 91.273 / Part 91 MOS 2020 s.13.02 / VFRG v8.3 Chapter 3'
},

{
  question: 'What accuracy is required of a VFR altimeter when checked against an accurate QNH at the aerodrome?',
  options: [
    'A. Within 200 ft',
    'B. Within 100 ft (or 110 ft at test sites above 3,300 ft)',
    'C. Within 500 ft',
    'D. Within 50 ft'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.10.05: an altimeter used for a VFR flight is only operative if, with an accurate QNH set, it reads site elevation to within 100 ft, or 110 ft at test sites above 3,300 ft.',
  reference: 'Part 91 MOS 2020 s.10.05 / VFRG v8.3 Chapter 3'
},

{
  question: 'When must a pilot change from QNH to 1,013.2 hPa on climb?',
  options: [
    'A. Exactly at the transition altitude',
    'B. After passing 10,000 ft and before levelling off at or above the transition altitude',
    'C. When receiving clearance to climb above the transition altitude',
    'D. At FL100 only'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.7: on climb, the pilot must change from QNH to 1,013.2 hPa after passing 10,000 ft and before levelling off. On descent, change from 1,013.2 hPa to QNH before entering the transition layer.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.7'
},

{
  question: 'May an aircraft take off with frost on the wings?',
  options: [
    'A. Yes — provided the pilot has assessed it will clear during the take-off run',
    'B. No — there must be no frost, ice or snow adhering to wings, flaps, control surfaces, propellers, rotors, or horizontal/vertical stabilisers before take-off (unless the AFM authorises operation in those conditions)',
    'C. Yes — provided the frost is less than 3 mm thick',
    'D. Yes — light frost is permitted for day VFR operations'
  ],
  correct: 1,
  explanation: 'CASR 91.705 / VFRG v8.3: before beginning a flight, there must be no frost, ice or snow adhering to the aircraft\'s wings, flaps, control surfaces, rotors, propellers, and horizontal or vertical stabilisers. Exception: if take-off is conducted in accordance with AFM procedures for those conditions.',
  reference: 'CASR 91.705 / VFRG v8.3 Chapter 2'
},

{
  question: 'What aerodrome ground signal indicates gliding operations are in progress?',
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
  question: 'What does a white cross (×) on the signal square at an aerodrome indicate?',
  options: [
    'A. The aerodrome or manoeuvring area is unserviceable — do not land',
    'B. Special VFR operations only',
    'C. Aerodrome is temporarily closed for maintenance — permission required for landing',
    'D. Runway designated for helicopter operations only'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.5 / VFRG v8.3: a white cross on the signal square indicates the aerodrome or manoeuvring area is unserviceable and landing is not permitted.',
  reference: 'AIP ENR 1.5 / VFRG v8.3 Chapter 1'
},

{
  question: 'What type of information can a CPL candidate be expected to decode from ERSA?',
  options: [
    'A. ERSA provides weather information only',
    'B. ERSA is only used for IFR pilots',
    'C. ERSA is now replaced by NAIPS and no longer required',
    'D. ERSA contains runway data, radio frequencies, CTAF, aerodrome elevation, procedures, restricted and danger area information, and must be used for pre-flight planning at non-controlled aerodromes'
  ],
  correct: 3,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.1.4 requires pilots to decode information in ERSA. ERSA (En Route Supplement Australia) contains runway data, radio frequencies, CTAF, elevation, NOTAMs, restricted and danger area details, and is mandatory for pre-flight planning at non-controlled aerodromes.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 s.2.1.4 / VFRG v8.3'
},

{
  question: 'What is the correct tier structure of Australian aviation legislation?',
  options: [
    'A. ICAO standards form Tier 1; CASR forms Tier 2; CAO forms Tier 3',
    'B. CASR → AIP → CAO → Advisory Circulars',
    'C. Tier 1: Civil Aviation Act and Airspace Act; Tier 2: CAR and CASR; Tier 3: MOS, CAO and other instruments',
    'D. ICAO Annexes → Civil Aviation Act → AIP → ERSA'
  ],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 1 aviation legislation structure: Tier 1 — Civil Aviation Act 1988 and Airspace Act 2007 (primary legislation); Tier 2 — Civil Aviation Regulations 1988 (CAR) and Civil Aviation Safety Regulations 1998 (CASR); Tier 3 — Manual of Standards (MOS), Civil Aviation Orders (CAO), and other instruments.',
  reference: 'VFRG v8.3 Chapter 1'
},

{
  question: 'What is an Advisory Circular (AC) in the context of Australian aviation legislation?',
  options: [
    'A. A legally binding regulation under the CASR',
    'B. An instruction issued by ATC only during emergencies',
    'C. A permanent instrument that supersedes CAOs',
    'D. Advisory material that provides advice and guidance illustrating a means (but not necessarily the only means) of complying with regulations, or explains regulatory requirements'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 1: an Advisory Circular (AC) provides advice and guidance to illustrate a means (but not necessarily the only means) of complying with the regulations, or to explain certain regulatory requirements. ACs are advisory, not mandatory.',
  reference: 'VFRG v8.3 Chapter 1'
},

{
  question: 'How must an Immediately Reportable Matter (IRM) be reported to the ATSB?',
  options: [
    'A. By radio on 121.5 MHz during the occurrence',
    'B. By NOTAM through Airservices Australia',
    'C. By telephone as soon as practicable (immediately), followed by a written report within 72 hours',
    'D. Written report only, within 72 hours'
  ],
  correct: 2,
  explanation: 'CASR 91.606 / VFRG v8.3: IRMs require immediate (as soon as practical) reporting by telephone to the ATSB, followed by a written report within 72 hours (preferably using the ASIR format). Routinely Reportable Matters (RRMs) only require a written report within 72 hours.',
  reference: 'CASR 91.606 / VFRG v8.3 Chapter 1'
},

{
  question: 'Which of the following is an example of an Immediately Reportable Matter (IRM) under the TSI Act?',
  options: [
    'A. A death or serious injury caused by contact with an aircraft or jet blast; an aircraft believed missing; aircraft damage; or breakdown of separation standards in a control area',
    'B. A navigation equipment malfunction that was reported to ATC',
    'C. A minor bird strike without damage',
    'D. A late landing after the nominated SARTIME'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 / AIP ENR 1.14: examples of IRMs include: a death or serious injury caused by contact with an aircraft, jet blast or component; an aircraft believed missing; an aircraft suffering damage; a breakdown of separation standards in a CTA.',
  reference: 'VFRG v8.3 Chapter 1 / AIP ENR 1.14'
},

{
  question: 'For how long before and after ETA must an authorised weather forecast be valid?',
  options: [
    'A. Valid for at least 30 minutes before and 60 minutes after the planned ETA',
    'B. Valid for the entire flight time',
    'C. Valid for at least 1 hour before and 2 hours after ETA',
    'D. Valid from departure time until 30 minutes after ETA'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 Chapter 2 / Part 91 MOS: an authorised weather forecast used to satisfy the requirements for the destination must be valid for at least 30 minutes before and 60 minutes after the planned ETA.',
  reference: 'VFRG v8.3 Chapter 2 / Part 91 MOS 2020 s.7.02'
},

{
  question: 'If a pre-flight briefing is obtained more than 1 hour before taxiing, what is required before departure?',
  options: [
    'A. The pilot must re-file the flight plan',
    'B. The original briefing remains valid for 3 hours',
    'C. A new full briefing must be obtained',
    'D. An update must be obtained before departure via NAIPS, telephone, or radio'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 2: if the pre-flight briefing is obtained more than one hour before taxiing for departure, the pilot must obtain an update before departure to ensure the latest information is available.',
  reference: 'VFRG v8.3 Chapter 2'
},

{
  question: 'What is the rule regarding smoking in an aircraft?',
  options: [
    'A. Smoking rules only apply to RPT operations',
    'B. No smoking during take-off and landing, or at any other time the pilot in command directs; passengers must be briefed on smoking rules before take-off',
    'C. Smoking is permitted in the rear of the aircraft during cruise',
    'D. Smoking is prohibited on all Australian-registered aircraft at all times'
  ],
  correct: 1,
  explanation: 'CASR 91.565 / VFRG v8.3: passengers must not smoke during take-off and landing, or at any other time the pilot in command so directs. The no-smoking instruction forms part of the mandatory pre-take-off passenger safety briefing.',
  reference: 'CASR 91.565 / VFRG v8.3 Chapter 3'
},

{
  question: 'What regime applies to pilot drug and alcohol testing in Australia?',
  options: [
    'A. Drug testing is voluntary and only conducted following incidents',
    'B. Drug testing applies only to pilots working for AOC holders',
    'C. Drug testing only applies to RPT operations',
    'D. Piloting is a safety-sensitive aviation activity and CASR Part 99 establishes a regime for random drug and alcohol testing conducted for or on behalf of CASA of all pilots in Australia'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 1 / CASR Part 99: piloting an aircraft is a safety-sensitive aviation activity and pilots must comply with CASR Part 99. CASR Part 99 establishes a regime for random drug and alcohol testing conducted for or on behalf of CASA of all pilots in Australia.',
  reference: 'CASR Part 99 / VFRG v8.3 Chapter 1'
},

{
  question: 'What defines a "non-controlled aerodrome"?',
  options: [
    'A. A private strip not listed in ERSA',
    'B. An aerodrome with no instrument approaches',
    'C. An aerodrome where air traffic control is not currently operating — this can be an aerodrome always in Class G, a tower aerodrome with ATC temporarily unavailable, or one where ATC service is temporarily inactive',
    'D. Any aerodrome below 1,000 ft AMSL'
  ],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 3: a non-controlled aerodrome is one where ATC is not currently operating. This can be an aerodrome always in Class G airspace, an aerodrome with a control tower where ATC is not currently operating, or an aerodrome where ATC service is temporarily unavailable.',
  reference: 'VFRG v8.3 Chapter 3 / AIP ENR 1.4'
},

{
  question: 'What is the minimum height for aerobatic manoeuvres unless an endorsement permits lower?',
  options: [
    'A. 500 ft AGL',
    'B. 3,000 ft AGL',
    'C. 1,500 ft AGL',
    'D. 1,000 ft AGL'
  ],
  correct: 1,
  explanation: 'CASR 91.185 / VFRG v8.3: pilots must not engage in aerobatic flight below 3,000 ft AGL unless their aerobatic activity endorsement permits lower heights. Aerobatic manoeuvres are defined as those with bank angles greater than 60°, pitch angles greater than 45°, or abrupt changes.',
  reference: 'CASR 91.185 / VFRG v8.3 Chapter 1'
},

{
  question: 'What is the primary source of wake turbulence hazard in the circuit at a non-controlled aerodrome?',
  options: [
    'A. Wake turbulence only exists above FL100',
    'B. Light aircraft in the circuit only',
    'C. Wake turbulence is only an issue in controlled airspace where separation standards apply',
    'D. Helicopters hovering or slow air-taxiing creating rotor downwash; in forward flight, helicopters produce vortices similar to fixed-wing aircraft'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 3: a hovering or slow air-taxiing helicopter creates rotor downwash that can be a hazard to nearby aircraft. In forward flight, helicopters produce vortices similar to those produced by fixed-wing aircraft. Pilots of small aircraft should avoid operating close to helicopters.',
  reference: 'VFRG v8.3 Chapter 3'
},

{
  question: 'For a VFR flight by night, a destination alternate must be within what distance of the destination?',
  options: [
    'A. 30 minutes flight time',
    'B. 1 hour\'s flight time of the planned destination aerodrome',
    'C. 50 NM',
    'D. 2 hours flight time'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.8.05(2) / VFRG v8.3: for a VFR flight by night, the pilot must nominate a destination alternate that is within 1 hour\'s flight time of the planned destination aerodrome, unless the destination is served by a ground-based radio navigation aid and the aircraft is appropriately equipped and the pilot is competent to use it.',
  reference: 'Part 91 MOS 2020 s.8.05(2) / VFRG v8.3 Chapter 2'
},

{
  question: 'What does the CPL aeroplane air law syllabus require pilots to understand about general competency and flight reviews?',
  options: [
    'A. Flight reviews are optional after obtaining a CPL',
    'B. Only ATPL holders require biennial flight reviews',
    'C. Flight reviews are only required after an incident or accident',
    'D. Pilots must describe the obligations they must comply with regarding general competency, flight reviews and proficiency checks under CASR Part 61'
  ],
  correct: 3,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 (CFRA) s.2.1.2: the CPL aeroplane air law syllabus requires pilots to describe the obligations they must comply with regarding general competency, flight reviews, and proficiency checks under CASR Part 61.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.9 s.2.1.2'
},

{
  question: 'When may a pilot fly an aircraft in formation?',
  options: [
    'A. At any time provided all pilots have CPL or higher',
    'B. Formation flying is permitted any time if all pilots have a formation endorsement',
    'C. Formation flying requires an AOC approval at all times',
    'D. Only if the formation has been prearranged with the other pilots making up the formation, and at night or in IMC only with a CASA approval'
  ],
  correct: 3,
  explanation: 'CASR 91.205 / VFRG v8.3: a pilot may only fly in formation if the flight has been prearranged with the other pilots in the formation. Formation flying at night or in IMC requires a CASA approval. A flight activity endorsement is also required under CASR 61.380.',
  reference: 'CASR 91.205 / VFRG v8.3 Chapter 1'
},

{
  question: 'After a radio failure in VFR Class G airspace, as soon as practicable, the pilot must descend below what height over land?',
  options: [
    'A. 1,000 ft AGL',
    'B. The transition altitude',
    'C. 5,000 ft AMSL',
    'D. 3,000 ft AGL'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.11.10(2)(a)(iv): after radio failure in VFR Class G or E airspace, the pilot must as soon as practicable descend below 3,000 ft AGL over land (or 3,000 ft AMSL over water within 10 NM of the coast). This is to avoid conflicting with IFR traffic.',
  reference: 'Part 91 MOS 2020 s.11.10(2)(a)(iv)'
},

{
  question: 'Which multi-engine turbine aeroplanes must be fitted with a CVR regardless of MTOW?',
  options: [
    'A. CVRs are only required if an FDR is also required',
    'B. Only aeroplanes with MTOW above 10,000 kg',
    'C. Multi-engine turbine aeroplanes with a MOPSC of more than 9 that are pressurised, type-certificated for more than 11 seats, and first issued a C of A after 1 January 1988',
    'D. All multi-engine turbine aeroplanes'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.32(b): a CVR must be fitted to a multi-engine turbine-powered aeroplane with a MOPSC greater than 9 that is pressurised and type-certificated for more than 11 seats and was first issued a C of A after 1 January 1988 — regardless of MTOW.',
  reference: 'Part 91 MOS 2020 s.26.32(b)'
},

{
  question: 'An aircraft making a straight-in approach at a non-controlled aerodrome must give way to which aircraft?',
  options: [
    'A. Aircraft on the downwind leg only',
    'B. All IFR aircraft only',
    'C. No other aircraft — straight-in approaches have priority',
    'D. Any other aircraft flying in the circuit pattern for the aerodrome'
  ],
  correct: 3,
  explanation: 'CASR 91.395 / VFRG v8.3: the aircraft making the straight-in approach must give way to any other aircraft flying in the circuit pattern for the aerodrome. An aircraft on base or final leg has right-of-way over a straight-in aircraft.',
  reference: 'CASR 91.395 / VFRG v8.3 Chapter 3'
},

{
  question: 'When must a controlled aircraft report "leaving controlled airspace on descent"?',
  options: [
    'A. After leaving controlled airspace',
    'B. Before leaving controlled airspace on descent — as specified in Table 21.05(1) Item 10',
    'C. Only when requested by ATC',
    'D. Only for IFR flights'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 21.05(1) Item 10: the pilot must report the situation before leaving controlled airspace on descent. Note in the table: to ensure separation with aircraft near the base of controlled airspace is not compromised, the report is made to the ATS for the Class G airspace the aircraft will descend into.',
  reference: 'Part 91 MOS 2020 s.21.05(1) Table 21.05(1) Item 10'
},

{
  question: 'What is the meaning of "area QNH"?',
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
  question: 'When may an aircraft begin a flight with inoperative radiocommunications?',
  options: [
    'A. When specific conditions are met as detailed in s.26.19 — including that the flight is wholly in Class G, the aerodrome requires no radio, and the pilot has alternative means of communication',
    'B. For training flights only when authorised by the flying school',
    'C. For VFR day flights under 5,000 ft anywhere in Australia',
    'D. Never — a serviceable radio is always required'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.26.19: an aircraft may begin a flight with inoperative radiocommunications in specified circumstances. The section specifies conditions including the class of airspace, aerodrome type, and availability of alternative communication means.',
  reference: 'Part 91 MOS 2020 s.26.19'
},

{
  question: 'What is the general rule regarding take-off and landing direction?',
  options: [
    'A. To the extent practicable, take off and land into wind — unless the AFM allows downwind/crosswind and traffic conditions permit',
    'B. Downwind operations are equally valid if the headwind component is less than 5 kt',
    'C. The pilot always uses the longest available runway regardless of wind',
    'D. ATC assigns the runway direction — the pilot has no discretion'
  ],
  correct: 0,
  explanation: 'CASR 91.380 / VFRG v8.3: to the extent practicable, pilots must land and take off into wind, unless the aircraft\'s AFM/POH allows a downwind or crosswind take-off/landing, and the pilot is satisfied that traffic conditions at the aerodrome allow it safely.',
  reference: 'CASR 91.380 / VFRG v8.3 Chapter 3'
},

{
  question: 'Which transponder code is used for flights in Class G over water at more than 15 NM from shore?',
  options: [
    'A. 2000',
    'B. 4000',
    'C. 7000',
    'D. 1200'
  ],
  correct: 1,
  explanation: 'Part 91 MOS Table 26.69(7) Item 4: for flights in Class G over water at a distance greater than 15 NM from shore, the Mode A code is 4000.',
  reference: 'Part 91 MOS 2020 s.26.69 Table 26.69(7) Item 4'
},

{
  question: 'A powered aircraft is approaching on a converging course with a glider at the same altitude. Which must give way?',
  options: [
    'A. The powered aircraft must give way to the unpowered glider',
    'B. The glider must give way to the more manoeuvrable powered aircraft',
    'C. The aircraft on the right gives way',
    'D. The smaller aircraft gives way to the larger'
  ],
  correct: 0,
  explanation: 'CASR 91.330 Item 5: unpowered gliders have priority over power-driven aircraft. In the right-of-way hierarchy, an unpowered glider ranks higher than any power-driven aircraft. The powered aircraft must give way to the glider.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'How frequently will hazard alerts typically be repeated on the ATS frequencies following the initial transmission?',
  options: [
    'A. Continuously until cancelled by the pilot',
    'B. Every 5 minutes for 1 hour',
    'C. Only once — the pilot is responsible for monitoring',
    'D. At H+15 and H+45 in the hour following initial transmission, ceasing after 1 hour or when an updated MET product or NOTAM is available'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 2 / AIP GEN 3.3: hazard alerts will be repeated at H+15 and H+45 in the hour following the initial transmission, normally ceasing after one hour or after an updated MET product or NOTAM is available for dissemination.',
  reference: 'AIP GEN 3.3 / VFRG v8.3 Chapter 2'
},

{
  question: 'What is the recommended procedure when arriving at an unfamiliar non-controlled aerodrome to determine circuit direction?',
  options: [
    'A. Contact the nearest ATC facility for circuit information',
    'B. Land on any runway and call the circuit direction on CTAF',
    'C. Join the downwind leg at circuit height and observe the windsock',
    'D. Overfly or circle the aerodrome at least 500 ft above circuit altitude (typically 2,000 ft or more above elevation), determine the circuit direction, then position to a clear point before descending to circuit height'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 Chapter 3: where the aerodrome layout or circuit direction cannot be ascertained prior to arrival, the pilot should overfly or circle the aerodrome at least 500 ft above circuit altitude (which may be 2,000 ft or more above elevation). Once the circuit direction is determined, position to the non-active side before descending.',
  reference: 'VFRG v8.3 Chapter 3 / AC 91-10'
},

{
  question: 'What is the correct sequence for a standard CTAF broadcast at a non-controlled aerodrome?',
  options: [
    'A. Position, callsign, fuel state, intentions',
    'B. Callsign, aircraft type, position/intentions, location',
    'C. Location traffic, aircraft type, callsign, flight rules (if IFR), position/intentions, location',
    'D. ATC unit, aircraft type, callsign, altitude, destination'
  ],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 5 / AC 91-10: the standard broadcast format is — "(Location) traffic, (aircraft type), (callsign), (flight rules — only if IFR), (position/intentions), (location)." For example: "Parkes traffic, Cessna 172, Zulu Tango Quebec, ten miles north descending inbound circuit three-six, Parkes."',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'When should a straight-in approach broadcast be made at a non-controlled aerodrome?',
  options: [
    'A. When joining the circuit downwind leg',
    'B. On final approach at any distance from the aerodrome',
    'C. On final approach at not less than 3 NM from the threshold',
    'D. 10 NM from the aerodrome reference point'
  ],
  correct: 2,
  explanation: 'VFRG v8.3 Chapter 5 / AC 91-10: a straight-in approach broadcast should be made on final approach at not less than 3 NM from the threshold.',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'When should a pilot broadcast when joining the circuit at a non-controlled aerodrome?',
  options: [
    'A. When 10 NM from the aerodrome',
    'B. Immediately before joining the circuit',
    'C. After turning final',
    'D. Only if other traffic is heard on CTAF'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 Chapter 5: recommended broadcasts include "immediately before joining the circuit" and "immediately before entering a runway."',
  reference: 'VFRG v8.3 Chapter 5 / AC 91-10'
},

{
  question: 'On which frequencies must an ELT transmit when activated?',
  options: [
    'A. 243 MHz and 406 MHz',
    'B. 406 MHz only',
    'C. Simultaneously on both 121.5 MHz and 406 MHz',
    'D. 121.5 MHz only'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.49 / VFRG v8.3: an ELT must simultaneously transmit on 121.5 MHz and 406 MHz when activated. The 406 MHz signal is processed by COSPAS-SARSAT for position determination.',
  reference: 'Part 91 MOS 2020 s.26.49 / VFRG v8.3 Chapter 7'
},

{
  question: 'For how long must an ELT operate continuously once activated?',
  options: [
    'A. At least 24 hours',
    'B. At least 72 hours',
    'C. 6 hours',
    'D. 48 hours'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 Chapter 7: ELTs must operate continuously for at least 24 hours once activated.',
  reference: 'VFRG v8.3 Chapter 7'
},

{
  question: 'Is a single-seat aircraft required to carry an ELT?',
  options: [
    'A. No — the ELT requirement does not apply to single-seat aircraft',
    'B. Only if the aircraft is used for commercial operations',
    'C. Only if the single-seat aircraft flies beyond 50 NM from departure',
    'D. Yes — all aircraft must carry an ELT regardless of seating'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 / Part 91 MOS: as a minimum, all aircraft other than single-seat aircraft must be fitted with an automatic ELT or carry a survival ELT.',
  reference: 'Part 91 MOS 2020 s.26.48 / VFRG v8.3 Chapter 7'
},

{
  question: 'Under what circumstances may an aircraft fly with an ELT temporarily removed?',
  options: [
    'A. If the ELT has been temporarily removed for maintenance, a log entry is made, a placard stating no ELT is fitted is placed in the aircraft, and no more than 90 days have passed',
    'B. If the pilot carries a personal PLB as a substitute',
    'C. The aircraft may fly for up to 30 days with no ELT under an MEL deferral',
    'D. Never — an inoperative ELT must be replaced before the next flight'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.26.52: an aircraft may fly with an ELT temporarily removed for maintenance if a log entry is made, a "no ELT" placard is placed in the aircraft, and no more than 90 days have passed since removal.',
  reference: 'Part 91 MOS 2020 s.26.52 / VFRG v8.3 Chapter 7'
},

{
  question: 'If dangerous goods are carried and an emergency occurs, what must the pilot advise ATS?',
  options: [
    'A. Dangerous goods information must be withheld for security reasons',
    'B. The nature and state of the dangerous goods, in addition to advising of the emergency',
    'C. Nothing specific — dangerous goods do not affect ATC procedures',
    'D. Only that dangerous goods are on board, without specifying type'
  ],
  correct: 1,
  explanation: 'CASR 91.680 / VFRG v8.3: if dangerous goods are carried and an emergency is relevant to those goods, the pilot must advise ATS of both the emergency and the nature and state of the dangerous goods.',
  reference: 'CASR 91.680 / VFRG v8.3 Chapter 7'
},

{
  question: 'When is flight notification required for a VFR over-water flight?',
  options: [
    'A. When the flight is conducted at a distance from land greater than that which would allow the aircraft to reach land with an engine inoperative',
    'B. All over-water flights regardless of distance',
    'C. Only for night over-water flights',
    'D. Only for flights more than 50 NM offshore'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.9.02(2)(b): flight notification is required for a VFR over-water flight conducted beyond a distance from land greater than that which would allow the aircraft to reach land with an engine inoperative.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(b) / VFRG v8.3 Chapter 2'
},

{
  question: 'What flight notification requirement applies to VFR flights in designated remote areas?',
  options: [
    'A. A flight plan must be filed with CASA headquarters',
    'B. The pilot must submit a flight plan or SARTIME before the flight',
    'C. No additional requirement beyond Class G airspace rules',
    'D. The pilot must carry an EPIRB in addition to an ELT'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.9.02(2)(c): a VFR flight in a designated remote area requires the pilot to ensure either a flight plan has been submitted or a SARTIME has been nominated.',
  reference: 'Part 91 MOS 2020 s.9.02(2)(c) / VFRG v8.3 Chapter 2'
},

{
  question: 'For a VFR flight tracking beyond 50 NM, what must be carried?',
  options: [
    'A. Weather forecasts only',
    'B. Only the flight plan',
    'C. A copy of CASR Part 91',
    'D. Applicable AIP information (charts and aeronautical information for the route and probable diversions) and either the aircraft technical log or maintenance release'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 / CASR 91.110: for VFR flights beyond 50 NM, the pilot must carry applicable AIP information and either the aircraft technical log or maintenance release.',
  reference: 'CASR 91.110 / VFRG v8.3 Chapter 2'
},

{
  question: 'Which documents must be carried on board during flight in Australian airspace?',
  options: [
    'A. Certificate of Airworthiness, Certificate of Registration, maintenance release, crew licences and medicals, radio station licence, journey log (if international), and applicable AIP information',
    'B. Crew licences only',
    'C. Flight plan and maintenance release only',
    'D. A copy of CASR and CAO 48.1'
  ],
  correct: 0,
  explanation: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 / CASR Part 91: required documents include Certificate of Airworthiness, Certificate of Registration, maintenance release, flight crew licences and medicals, radio station licence, journey log (international), and applicable AIP information.',
  reference: 'CASR Part 61 MOS Schedule 3 Unit 1.5.8 / CASR Part 91'
},

{
  question: 'What is required for a CPL holder to conduct single-engine aeroplane night VFR operations?',
  options: [
    'A. A night VFR flight review only — no formal endorsement required',
    'B. An IFR rating is required for all night operations',
    'C. A single-engine aeroplane night VFR endorsement under CASR Part 61',
    'D. No additional endorsement — CPL privileges include night operations'
  ],
  correct: 2,
  explanation: 'CASR Part 61 / VFRG v8.3: to conduct night VFR operations in a single-engine aeroplane, a pilot requires a single-engine aeroplane night VFR endorsement, which requires at least 5 hours night experience including 1 hour dual, 1 hour solo night circuits, and 3 hours dual instrument time.',
  reference: 'CASR Part 61 / VFRG v8.3 Chapter 3'
},

{
  question: 'What is the minimum recent experience for night VFR PIC currency?',
  options: [
    'A. 10 hours night flying in the preceding 12 months',
    'B. Same as day VFR — 3 take-offs and landings in 90 days',
    'C. 3 take-offs and landings at night in the preceding 90 days on the relevant aircraft category',
    'D. 5 take-offs and landings at night in the preceding 180 days'
  ],
  correct: 2,
  explanation: 'CASR Part 61: night VFR PIC currency requires 3 take-offs and 3 landings at night on the relevant aircraft category in the preceding 90 days, separately from day VFR recency.',
  reference: 'CASR Part 61 / VFRG v8.3 Chapter 3'
},

{
  question: 'What conditions must a pilot comply with to operate under Special VFR in a control zone?',
  options: [
    'A. Be authorised by ATC; operate at night only; maintain 5 km visibility',
    'B. Be authorised by ATC; operate by day; fly clear of cloud; maintain at least 1,500 m flight visibility',
    'C. Maintain VMC as specified in Table 2.07(3) for Class C airspace',
    'D. ATC clearance is not required for SVFR — it is self-authorised'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.2.01(3): Special VFR requires (a) ATC authorisation; (b) day operation only; (c) clear of cloud; and (d) flight visibility at least 1,500 m.',
  reference: 'Part 91 MOS 2020 s.2.01(3)'
},

{
  question: 'If communication failure occurs while holding in IFR, what action is required before proceeding?',
  options: [
    'A. Fly one more complete holding pattern, then proceed in accordance with the latest ATC clearance acknowledged',
    'B. Immediately proceed direct to destination',
    'C. Continue holding until fuel reaches minimum before diverting',
    'D. Hold for 10 minutes then commence approach'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: if communication failure occurs while holding, the pilot should fly one more complete holding pattern, then proceed in accordance with the latest ATC clearance acknowledged.',
  reference: 'VFRG v8.3 Appendix / AIP ENR 1.1'
},

{
  question: 'What specific clearance is required before landing at a controlled aerodrome?',
  options: [
    'A. The specific ATC clearance "Cleared to land" (or "Cleared touch and go" or "Cleared for the option") must be received',
    'B. Landing clearance is only required for IFR aircraft',
    'C. Two-way communication with the tower constitutes landing clearance',
    'D. Obtaining the ATIS code is sufficient authority to land'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: a pilot must not land unless the specific clearance "Cleared to land" (or "Cleared touch and go" or "Cleared for the option") has been received from ATC.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'When must a pilot report "downwind" in the traffic circuit at a controlled aerodrome?',
  options: [
    'A. When starting or entering the downwind leg — or "mid-downwind" or "late-downwind" if frequency congestion prevented the initial call',
    'B. When reaching circuit height',
    'C. At 2 NM from the runway threshold',
    'D. Only when directed by ATC'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: the pilot must report "downwind" when starting or entering the downwind leg. If frequency congestion prevents this, the pilot must report "mid-downwind" or "late-downwind."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'What information must a VFR aircraft without flight notification provide on first ATC contact at a Class D aerodrome?',
  options: [
    'A. Full flight plan details including fuel on board',
    'B. ATIS code only',
    'C. Aircraft callsign and "DETAILS" (wait for response), then destination and first tracking point, preferred level, and ATIS code received',
    'D. Callsign and type only'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.1 / VFRG v8.3: VFR aircraft without flight notification must provide: callsign and "DETAILS" (wait for ATC response), then destination and first tracking point, preferred level, and ATIS code received.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'What normally comprises an airways clearance?',
  options: [
    'A. Level allocation and transponder code only',
    'B. Aircraft identification, destination or clearance limit, route of flight, assigned level, SSR code, and frequency requirements',
    'C. Aircraft identification and squawk code only',
    'D. Runway assignment and departure heading'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: an airways clearance normally contains: aircraft identification; destination, area of operation, or clearance limit; route of flight; assigned level; SSR code; and frequency requirements.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 5'
},

{
  question: 'What specific gravity is used for AVGAS in all loading systems?',
  options: [
    'A. 0.71 kg/litre',
    'B. 0.72 kg/litre',
    'C. 0.78 kg/litre',
    'D. 0.80 kg/litre'
  ],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook v3.0a: the specific gravity for AVGAS used in all loading systems is 0.72 kg/litre.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a'
},

{
  question: 'What is the normal category maximum take-off weight?',
  options: [
    'A. 2,950 kg',
    'B. 1,000 kg',
    'C. 1,633 kg',
    'D. 1,115 kg'
  ],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook Loading System Bravo: the maximum take-off weight for the normal category is 1,000 kg (2,200 lbs). The utility category limit is 841 kg (1,850 lbs).',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Bravo'
},

{
  question: 'The index units at take-off weight are 33,033.7 and take-off weight is 1,114.8 kg. What is the CG in mm aft of datum?',
  options: [
    'A. 2,964 mm',
    'B. 2,963 mm',
    'C. 3,004 mm',
    'D. 2,896 mm'
  ],
  correct: 1,
  explanation: 'RPL/PPL/CPL Workbook Loading System Charlie: CG = Index Units x 100 / Weight = 33,033.7 x 100 / 1,114.8 = 2,963.20 mm aft of datum.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Charlie'
},

{
  question: 'What is the maximum zero fuel weight?',
  options: [
    'A. 2,630 kg',
    'B. 2,950 kg',
    'C. 2,490 kg',
    'D. 2,725 kg'
  ],
  correct: 0,
  explanation: 'RPL/PPL/CPL Workbook Loading System Echo: MTOW 2,950 kg; maximum landing weight 2,725 kg; maximum zero fuel weight 2,630 kg.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Echo'
},

{
  question: 'Which formula is used to calculate CG?',
  options: [
    'A. CG = Weight / Index Units',
    'B. CG = Total Moment / Total Weight x 1,000',
    'C. CG = Weight x Arm',
    'D. CG (mm aft of datum) = Index Units x 100 / Weight'
  ],
  correct: 3,
  explanation: 'RPL/PPL/CPL Workbook Loading System Charlie: the formula is CG (mm aft of datum) = Index Units x 100 / Weight. Must be checked at both Zero Fuel Weight and Take-Off Weight.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Charlie'
},

{
  question: 'When must the two intersection points on the CG envelope be within limits?',
  options: [
    'A. Only at take-off weight',
    'B. Only at zero fuel weight',
    'C. Both at Zero Fuel Weight and at Take-Off Weight',
    'D. Only at maximum take-off weight'
  ],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook Loading System Alpha instruction 8: both the Zero Fuel Weight intersection point and the Take-Off Weight intersection point must lie within the CG envelope.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Loading System Alpha'
},

{
  question: 'The fuel policy for RPLA and PPLA exams follows which standard?',
  options: [
    'A. CAO 48.1 fuel requirements only',
    'B. CASR Part 135 MOS Chapter 7 for all operations',
    'C. CASR Part 91 MOS Chapter 19 Table 19.02 for aeroplane MTOW less than 5,700 kg (piston or turboprop) VFR by day',
    'D. ICAO Annex 6 fuel standards'
  ],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook v3.0a significant changes: fuel policy for RPLA and PPLA exams is CASR Part 91 MOS Chapter 19 Table 19.02 for aeroplane MTOW less than 5,700 kg piston or turboprop VFR by day.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Significant Changes'
},

{
  question: 'The gross weight at take-off shall not exceed which of the following?',
  options: [
    'A. MTOW and MLW',
    'B. ZFW plus maximum fuel only',
    'C. The lesser of values (A) and (B) from the chart, with a maximum of 1,090 kg',
    'D. BEW plus maximum payload only'
  ],
  correct: 2,
  explanation: 'RPL/PPL/CPL Workbook Figure 3 Notes: the gross weight at take-off shall not exceed the lesser of chart values (A) and (B). The maximum take-off weight is 1,090 kg.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Figure 3'
},

{
  question: 'What take-off distance factor is applied?',
  options: [
    'A. 1.22',
    'B. 1.10',
    'C. 1.15',
    'D. 1.30'
  ],
  correct: 0,
  explanation: 'RPL/PPL/CPL Workbook Figure 12 (Take-off Weight Chart Aircraft Echo): the distance factor is 1.22.',
  reference: 'RPL/PPL/CPL Aeroplane Workbook v3.0a Figure 12'
},

{
  question: 'What communication monitoring requirement applies in controlled airspace?',
  options: [
    'A. The pilot or another pilot in a pilot seat must continuously monitor the primary communications medium used by ATC',
    'B. Monitoring is only required for IFR flights in Class A airspace',
    'C. Monitoring is required only on final approach at controlled aerodromes',
    'D. Pilots must monitor the CTAF for traffic information'
  ],
  correct: 0,
  explanation: 'CASR 91.635 / VFRG v8.3: when flying in controlled airspace, the pilot (or another pilot in a pilot seat) must continuously monitor the primary communications medium used by ATC.',
  reference: 'CASR 91.635 / VFRG v8.3 Chapter 5'
},

{
  question: 'What broadcast must be made when joining a circuit in an MBA?',
  options: [
    'A. A broadcast of the situation, indicating the circuit leg being joined and the runway',
    'B. A broadcast of aircraft callsign and fuel state only',
    'C. A broadcast identical to a controlled aerodrome downwind call',
    'D. No broadcast is required when joining circuit in an MBA'
  ],
  correct: 0,
  explanation: 'Part 91 MOS Table 21.09(1) Item 2: when joining a circuit in an MBA, the pilot must broadcast the situation and indicate the circuit leg being joined and the runway.',
  reference: 'Part 91 MOS 2020 s.21.09 Table 21.09(1) Item 2'
},

{
  question: 'What is the minimum height for an aeroplane over areas other than populous areas?',
  options: [
    'A. Not less than 500 ft above the highest obstacle within 150 m of the aircraft',
    'B. Not less than 300 ft AGL at all times',
    'C. Not less than 1,000 ft AGL at all times',
    'D. Not less than 500 ft AGL over open country'
  ],
  correct: 0,
  explanation: 'CASR 91.265: for areas other than populous areas or public gatherings, an aeroplane must not be flown at less than 500 ft above the highest obstacle within 150 m of the aircraft.',
  reference: 'CASR 91.265 / VFRG v8.3 Chapter 1'
},

{
  question: 'If an aircraft not certified for icing conditions inadvertently enters icing conditions, what must the pilot do?',
  options: [
    'A. Change the aircraft\'s flight path to avoid the icing conditions as soon as practicable',
    'B. Activate the pitot heat and continue',
    'C. Continue to the nearest aerodrome at best speed',
    'D. Descend immediately to warmer air below the icing layer'
  ],
  correct: 0,
  explanation: 'CASR 91.710 / VFRG v8.3: if an aircraft not certified for icing conditions inadvertently enters icing conditions, the pilot must change the flight path to avoid them as soon as practicable.',
  reference: 'CASR 91.710 / VFRG v8.3 Chapter 2'
},

{
  question: 'When must an airways clearance request be made?',
  options: [
    'A. When reaching the holding point of the runway',
    'B. At least 30 minutes before estimated departure time',
    'C. After engine start during taxi',
    'D. On clearance delivery frequency immediately before starting engines; where none, before entering the departure runway; before entering controlled airspace'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: airways clearance is requested on clearance delivery frequency immediately before starting engines (or as soon as possible thereafter); where no delivery frequency exists, before entering the departure runway; or before entering controlled airspace.',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 5'
},

{
  question: 'When a taxi instruction includes a holding point, what phrase must specifically be read back?',
  options: [
    'A. The runway designation only',
    'B. "Holding point (holding point designator)" must specifically be read back',
    'C. The entire taxi clearance word for word',
    'D. Readback is not required for taxi clearances'
  ],
  correct: 1,
  explanation: 'VFRG v8.3 / AIP ENR 1.1: when ATC issues a taxi instruction that includes a holding point, pilots must specifically read back "Holding point (holding point designator)."',
  reference: 'AIP ENR 1.1 / VFRG v8.3 Chapter 3'
},

{
  question: 'May a VFR aircraft fly in Class A airspace without specific approval?',
  options: [
    'A. VFR is never permitted in Class A airspace under any circumstances',
    'B. VFR is permitted in Class A at and above FL245 only',
    'C. No — VFR flight in Class A airspace must be specifically approved',
    'D. Yes — VFR is permitted in Class A provided the aircraft has Mode C'
  ],
  correct: 2,
  explanation: 'CASR 91.285 / VFRG v8.3: VFR flight in Class A airspace must be approved. VFR operations in Class A are exceptional.',
  reference: 'CASR 91.285 / VFRG v8.3 Chapter 3'
},

{
  question: 'What is the correct distress message format?',
  options: [
    'A. "PAN PAN" repeated three times followed by callsign',
    'B. "EMERGENCY EMERGENCY EMERGENCY — (callsign) — (nature of distress)"',
    'C. "MAYDAY" transmitted once on 121.5 MHz only',
    'D. "MAYDAY" repeated three times, followed by the callsign; and squawk 7700 on the transponder'
  ],
  correct: 3,
  explanation: 'VFRG v8.3 / ICAO Annex 2: the distress signal by radiotelephony is "MAYDAY" repeated three times, followed by the aircraft callsign. Code 7700 is selected on the transponder.',
  reference: 'VFRG v8.3 Chapter 7 / ICAO Annex 2'
},

{
  question: 'If a distress signal was transmitted but the reason no longer exists, what must the pilot do?',
  options: [
    'A. Land at the nearest aerodrome immediately',
    'B. Continue monitoring 121.5 MHz only',
    'C. File a mandatory incident report within 24 hours',
    'D. Cancel the distress signal as soon as circumstances permit'
  ],
  correct: 3,
  explanation: 'CASR 91.700 / VFRG v8.3: if after making a distress signal the reason no longer exists, as soon as circumstances permit, the pilot must cancel the signal.',
  reference: 'CASR 91.700 / VFRG v8.3 Chapter 7'
},

{
  question: 'A piston-engine aeroplane MTOW 1,200 kg is on a VFR day flight. Fuel check shows that on landing, fuel remaining will be less than the 30-minute final reserve. What are the pilot\'s obligations under Part 91 MOS?',
  options: [
    'A. Declare MAYDAY immediately',
    'B. Request ATS advise any likely delay; consider diverting to maintain compliance with s.19.04(3); declare "minimum fuel" if committed to an aerodrome and any ATC clearance change would result in landing below final reserve',
    'C. Continue to destination — final reserve may be used as emergency fuel',
    'D. Land at the nearest aerodrome within 5 minutes without notifying ATS'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.19.06(1)-(3): if fuel on landing will be below the amount required by s.19.04(3), the pilot must consider operational conditions, may need to divert, must request ATS advice on likely delay, and if committed to an aerodrome must declare "minimum fuel" if any clearance change would result in landing below final reserve.',
  reference: 'Part 91 MOS 2020 s.19.06(1)-(3)'
},

{
  question: 'An aircraft in Class G VFR is tracking towards an activated Restricted Area. The pilot has no radio and cannot contact the controlling authority. What is the correct action?',
  options: [
    'A. Enter the area — Restricted Areas are only advisory for VFR aircraft',
    'B. Enter the area at low level only',
    'C. Enter the area provided the flight is conducted clear of cloud',
    'D. Avoid the area — entry to an activated Restricted Area without permission from the controlling authority is prohibited regardless of radio availability'
  ],
  correct: 3,
  explanation: 'CASR Part 91 / AIP ENR 2.1: entry to an activated Restricted Area without permission from the controlling authority is prohibited. If the controlling authority cannot be contacted, the pilot must remain outside.',
  reference: 'CASR Part 91 / AIP ENR 2.1'
},

{
  question: 'A CPL holder\'s Class 1 medical was issued when aged 41. How long is it valid for?',
  options: [
    'A. 6 months',
    'B. 24 months',
    'C. 3 months',
    'D. 12 months'
  ],
  correct: 0,
  explanation: 'CASR Part 67: Class 1 medicals are valid for 12 months for pilots under 40, and 6 months for pilots aged 40 and over. Issued at age 41 means 6 months validity.',
  reference: 'CASR Part 67'
},

{
  question: 'An unpressurised turbine-engine aeroplane is flying IFR in controlled airspace above FL150. Is altitude alerting required?',
  options: [
    'A. Only if the aircraft MTOW is above 5,700 kg',
    'B. No — unpressurised aircraft are exempt regardless of altitude',
    'C. No — altitude alerting is only required for pressurised aircraft',
    'D. Yes — an unpressurised turbine-engine aircraft in controlled airspace above FL150 must be fitted with altitude alerting equipment'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.26.25(1)(b): an unpressurised turbine-engine aircraft operating in controlled airspace above FL150 must be fitted with altitude alerting equipment.',
  reference: 'Part 91 MOS 2020 s.26.25(1)(b)'
},

{
  question: 'Two aircraft are on approach to land. The higher aircraft is in the final stages of its approach. What right-of-way rule applies?',
  options: [
    'A. The lower aircraft must give way to the higher aircraft in its final stages',
    'B. The slower aircraft always gives way',
    'C. The heavier aircraft has priority regardless of height',
    'D. The higher aircraft gives way to the lower, but the lower aircraft must not take advantage of this rule to cut in ahead of the higher aircraft in its final stages'
  ],
  correct: 3,
  explanation: 'CASR 91.330 / VFRG v8.3: the higher aircraft gives way to the lower. However, if the higher aircraft is in the final stages of its approach, the lower aircraft must not take advantage of this rule.',
  reference: 'CASR 91.330 / VFRG v8.3 Chapter 1'
},

{
  question: 'Which instruments are additionally required for VFR night flight compared to VFR day flight?',
  options: [
    'A. No additional instruments — day and night VFR requirements are identical',
    'B. Turn and slip, attitude, vertical speed, stabilised heading, outside air temperature, gyroscope power supply indicator, and approved GNSS or ADF/VOR for navigation',
    'C. Only an attitude indicator is added',
    'D. ILS and DME receivers are required'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.06(3) and s.26.08: VFR night flight requires all day VFR instruments plus turn and slip, attitude (with alternate power), vertical speed, stabilised heading, OAT, gyroscope power adequacy indicator, and GNSS or ADF or VOR navigation.',
  reference: 'Part 91 MOS 2020 s.26.06(3) / s.26.08'
},

{
  question: 'What is the minimum height at which an aircraft may fly over a built-up area unless conducting a take-off or landing?',
  options: [
    'A. 1,500 ft AGL',
    'B. 1,000 ft above the highest obstacle within 600 m',
    'C. 500 ft AGL',
    'D. 300 m above the highest obstacle within 300 m'
  ],
  correct: 1,
  explanation: 'CASR 91.635: over a built-up area the aircraft must be at a height that would allow a safe forced landing if the engine fails, and not less than 1,000 ft above the highest obstacle within 600 m of the aircraft.',
  reference: 'CASR 91.635'
},

{
  question: 'A pilot holds a CPL and wishes to fly a passenger in a single-engine aircraft for hire and reward. Under CASR Part 61, which condition must be satisfied?',
  options: [
    'A. The pilot must have completed 500 hours total time',
    'B. The pilot must hold at least a CPL with the appropriate aircraft category and class rating',
    'C. A CPL is insufficient; an AOC is never needed for single-pilot operations',
    'D. The pilot must also hold an ATPL'
  ],
  correct: 1,
  explanation: 'CASR 61.390 and Part 135: to carry passengers for hire and reward the pilot must hold at least a CPL with the appropriate aircraft category and class rating. The operator also requires the relevant AOC, but the pilot licence requirement is a CPL.',
  reference: 'CASR 61.390 / CASR Part 135'
},

{
  question: 'A VFR flight operating at or below 2,000 ft AGL is approaching Class D airspace. What is required before entry?',
  options: [
    'A. Two-way radio communication must be established and an ATC clearance obtained',
    'B. No clearance is needed below 2,000 ft',
    'C. Pilot must obtain an IFR clearance',
    'D. Pilot need only broadcast intentions on CTAF'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 and CASR 91.410: Class D airspace requires an ATC clearance and establishment of two-way radio communication before entry, regardless of altitude.',
  reference: 'AIP ENR 1.1 / CASR 91.410'
},

{
  question: 'What documents must the pilot-in-command have access to during a flight?',
  options: [
    'A. Certificate of airworthiness, maintenance release, and crew licences',
    'B. Only the aircraft flight manual',
    'C. Certificate of registration, certificate of airworthiness or equivalent, and journey log or equivalent',
    'D. Certificates of registration and airworthiness, maintenance release, AFM, and any required permits'
  ],
  correct: 3,
  explanation: 'CASR 91.785: the PIC must have access to the certificate of registration, certificate of airworthiness (or special flight permit), maintenance release, AFM or equivalent, and any required exemption or permission.',
  reference: 'CASR 91.785'
},

{
  question: 'What is the lateral extent of a Control Zone (CTR) and its purpose?',
  options: [
    'A. A CTR has no defined lateral extent; it varies per aerodrome',
    'B. A CTR extends 5 NM from the ARP and protects IFR traffic during en-route cruise',
    'C. A CTR is Class C airspace only and extends to FL245',
    'D. A CTR is a specified volume of controlled airspace around one or more aerodromes to protect arriving and departing IFR traffic'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4: a CTR is a volume of controlled airspace (usually Class C or D) extending from the surface upward around one or more aerodromes, protecting IFR arrivals and departures. Its dimensions are published in ERSA.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'What is the minimum visibility for VFR flight in Class G airspace at or below 1,000 ft AMSL during the day?',
  options: [
    'A. 800 m',
    'B. 1,500 m',
    'C. 3,000 m',
    'D. 5,000 m'
  ],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or below 1,000 ft AMSL (day VFR), the minimum flight visibility is 1,500 m.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What is the definition of "night" for the purpose of pilot recency and logging under CASR Part 61?',
  options: [
    'A. The period between end of evening civil twilight and commencement of morning civil twilight',
    'B. From 30 minutes after sunset to 30 minutes before sunrise',
    'C. Any time when the horizon is not clearly visible',
    'D. The period between sunset and sunrise'
  ],
  correct: 0,
  explanation: 'CASR Part 61 Dictionary and AIP GEN 2.1: "night" for flight crew licensing purposes means the period between the end of evening civil twilight and the beginning of morning civil twilight.',
  reference: 'CASR Part 61 Dictionary / AIP GEN 2.1'
},

{
  question: 'What lighting must a VFR aircraft display when operating at night?',
  options: [
    'A. Anti-collision light only is sufficient',
    'B. Navigation lights and a flashing anti-collision light (strobe or rotating beacon)',
    'C. Navigation lights only',
    'D. Navigation lights, anti-collision light, and a landing light'
  ],
  correct: 1,
  explanation: 'Part 91 MOS s.26.09: an aircraft operating at night must display steady red and green navigation lights, a white rear-position light, and an anti-collision light (flashing strobe or rotating beacon).',
  reference: 'Part 91 MOS 2020 s.26.09'
},

{
  question: 'A SIGMET is issued for severe icing along your planned route. Under CASR 91.185, what obligation does this place on the PIC before departure?',
  options: [
    'A. The PIC must assess whether the hazard can be avoided and must not commence the flight if the aircraft is not certified for the conditions',
    'B. SIGMETs are advisory only and impose no legal obligation',
    'C. The flight must be delayed until the SIGMET is cancelled',
    'D. The PIC must obtain an alternate route clearance from ATC'
  ],
  correct: 0,
  explanation: 'CASR 91.185 and 91.465: the PIC must not commence or continue a flight into known icing conditions unless the aircraft is equipped and certificated for flight in those conditions. A SIGMET for severe icing requires assessment and may prohibit the flight.',
  reference: 'CASR 91.185 / 91.465'
},

{
  question: 'What are the VMC requirements for a VFR flight in Class C airspace above FL200?',
  options: [
    'A. 8 km visibility, 1,500 m horizontal/300 m vertical cloud clearance',
    'B. 5,000 m visibility, clear of cloud',
    'C. 3,000 m visibility, 1,000 ft vertical/1 NM horizontal cloud clearance',
    'D. 8,000 m visibility, 1,000 ft vertical/1 NM horizontal cloud clearance'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class C airspace above FL200, VMC requires 8,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM horizontally.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Who is responsible for ensuring the aircraft is loaded within its weight and balance limits before flight?',
  options: [
    'A. The pilot-in-command',
    'B. The ground handling agent',
    'C. The aircraft owner',
    'D. The maintenance organisation'
  ],
  correct: 0,
  explanation: 'CASR 91.290: the pilot-in-command is responsible for ensuring the aircraft is loaded within its certified weight and balance limits before every flight.',
  reference: 'CASR 91.290'
},

{
  question: 'What is the requirement regarding the use of an automatic altitude-reporting transponder in Class A airspace?',
  options: [
    'A. A transponder is only required above FL250',
    'B. An operative Mode C (altitude-reporting) transponder must be operated continuously',
    'C. A transponder is not required in Class A because all traffic is separated by ATC',
    'D. A Mode S transponder is required; Mode C is insufficient'
  ],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: in Class A airspace, all aircraft must carry and operate a serviceable Mode C altitude-reporting transponder continuously.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'What does a red square with a yellow diagonal displayed on the signals area indicate?',
  options: [
    'A. Landings are prohibited',
    'B. Only military operations are permitted',
    'C. Aircraft may take off and land but must exercise special caution due to poor surface or other hazard',
    'D. The aerodrome is closed to all traffic'
  ],
  correct: 2,
  explanation: 'AIP ERSA GEN: a red square with a yellow diagonal on the signals area indicates that the state of the manoeuvring area is poor and pilots should exercise special caution when landing.',
  reference: 'AIP ERSA GEN / AIP GEN 1.5'
},

{
  question: 'What is the maximum period a maintenance release may remain in force before a periodic review is required for an RPT operation?',
  options: [
    'A. 100 flight hours',
    'B. 24 months',
    'C. The period specified in the approved maintenance schedule for the aircraft',
    'D. 12 months or the hours limit specified, whichever comes first'
  ],
  correct: 2,
  explanation: 'CASR 91.750 and the Civil Aviation Safety Regulations: the maintenance release remains in force for the period specified in the relevant approved maintenance schedule. This varies by aircraft type and category.',
  reference: 'CASR 91.750'
},

{
  question: 'What is the correct phraseology for a pilot requesting clearance to cross an active runway at a controlled aerodrome?',
  options: ['"[Callsign], request crossing runway [number]"', '"[Callsign], request permission to use runway [number]"', '"[Callsign], ready to cross"', '"[Callsign] crossing runway [number]"'],
  correct: 0,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: the correct phraseology is "[Callsign], request crossing runway [number]." ATC will issue an explicit crossing clearance before the aircraft may enter the runway.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What class of airspace applies to the upper airspace (above FL245) in Australia?',
  options: [
    'A. Class B',
    'B. Class E',
    'C. Class C',
    'D. Class A'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.1: Australian upper airspace above FL245 is Class A airspace, in which only IFR flight is permitted and all aircraft are subject to ATC separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What is required if a pilot intends to fly within a Restricted Area while it is active?',
  options: [
    'A. Prior permission must be obtained from the controlling authority of that Restricted Area',
    'B. No special permission is needed if flying VFR',
    'C. ATC will automatically clear the pilot if on an IFR flight plan',
    'D. An NOTAM waiver is automatically granted for CPL holders'
  ],
  correct: 0,
  explanation: 'CASR 91.190: a pilot must obtain permission from the authority controlling the Restricted Area before entering it while active. Entry without permission is unlawful.',
  reference: 'CASR 91.190'
},

{
  question: 'A white dumb-bell displayed on the signals area means:',
  options: [
    'A. Aircraft are confined to hard-surfaced runways but may use grass areas for taxiing',
    'B. Aircraft movements are confined to hard-surfaced runways and taxiways only',
    'C. The aerodrome is available for light aircraft only',
    'D. Ground movement only; no take-offs permitted'
  ],
  correct: 1,
  explanation: 'AIP ERSA GEN / AIP GEN 1.5: a white dumb-bell on the signals area indicates that aircraft movements are confined to paved (hard-surfaced) runways and taxiways only.',
  reference: 'AIP ERSA GEN / AIP GEN 1.5'
},

{
  question: 'A pilot is cleared "SQUAWK 4521." When should the pilot select this code?',
  options: [
    'A. Immediately upon receiving the instruction, on the ground or in the air',
    'B. After leaving the circuit area',
    'C. Only after contacting en-route ATC',
    'D. After becoming airborne only'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.6: when instructed to squawk a code, the pilot must select it immediately, whether on the ground or airborne, unless otherwise instructed by ATC.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'What is the minimum age to act as pilot-in-command of a passenger-carrying aircraft under a CPL?',
  options: [
    'A. 17 years',
    'B. 19 years',
    'C. 18 years',
    'D. 21 years'
  ],
  correct: 2,
  explanation: 'CASR 61.390 and CASR 61.225: the minimum age to hold a CPL (which authorises passenger-carrying operations for hire and reward) is 18 years.',
  reference: 'CASR 61.225'
},

{
  question: 'What is the lower limit of Class E airspace in Australia?',
  options: [
    'A. Always 8,500 ft AMSL',
    'B. FL180',
    'C. Varies by location — specified in the En Route Supplement Australia (ERSA) or AIP charts',
    'D. 1,500 ft AMSL'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.4: the lower limit of Class E airspace in Australia varies depending on the location and is published on aeronautical charts and in ERSA. It is commonly 8,500 ft AMSL in remote areas.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Which of the following is correct regarding VFR flight above FL200?',
  options: [
    'A. VFR flight is permitted in Class G only above FL200',
    'B. VFR flight above FL200 is permitted in Class C and E airspace without restriction',
    'C. VFR flight is prohibited above FL200',
    'D. VFR flight above FL200 requires ATC clearance and an IFR-equipped aircraft'
  ],
  correct: 2,
  explanation: 'CASR 91.610 and AIP ENR 1.1: VFR flight is not permitted above FL200 in Australia, as that airspace is Class A and available to IFR operations only.',
  reference: 'CASR 91.610 / AIP ENR 1.1'
},

{
  question: 'What is the minimum total aeronautical experience required to be granted a CPL?',
  options: [
    'A. 500 hours',
    'B. 250 hours',
    'C. 200 hours',
    'D. 150 hours'
  ],
  correct: 2,
  explanation: 'CASR 61.390 Table 61.390: a CPL requires a minimum of 200 hours total aeronautical experience, including specific command, cross-country, and instrument time components.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'What does the term "pilot-in-command" mean in relation to shared responsibility for flight safety?',
  options: [
    'A. Both pilots share equal authority and neither can overrule the other',
    'B. Only the captain is responsible; co-pilot has no duty to intervene',
    'C. The PIC has final authority and responsibility for the safe operation of the aircraft',
    'D. The operator retains final authority; the PIC executes instructions'
  ],
  correct: 2,
  explanation: 'CASR 91.165: the pilot-in-command has final authority and is responsible for the safe conduct of the flight. This authority supersedes operator instructions where safety is concerned.',
  reference: 'CASR 91.165'
},

{
  question: 'Which instrument is required for all powered aircraft operating under IFR?',
  options: [
    'A. Attitude indicator, airspeed indicator, altimeter, vertical speed indicator, heading indicator, and turn coordinator',
    'B. GPS navigator only',
    'C. Only ASI, ALT, and compass are mandatory',
    'D. Only instruments required under VFR plus an ILS receiver'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.26.05: IFR-equipped aircraft must carry, as a minimum, ASI, altimeter, VSI, attitude indicator, DI/heading indicator, magnetic compass, and turn and slip indicator.',
  reference: 'Part 91 MOS 2020 s.26.05'
},

{
  question: 'A pilot operating under IFR declares an emergency. Which of the following best describes the PIC\'s authority?',
  options: [
    'A. The PIC may deviate from any rule to the extent necessary to meet the emergency',
    'B. Emergency authority is limited to squawking 7700',
    'C. ATC retains full authority; pilot must follow all instructions',
    'D. The PIC may only deviate from ATC clearances, not from written regulations'
  ],
  correct: 0,
  explanation: 'CASR 91.175: in an emergency requiring immediate action, the PIC may deviate from any provision of the CASRs to the extent necessary to meet the emergency, and must submit a report if required by CASA.',
  reference: 'CASR 91.175'
},

{
  question: 'Class G airspace below the Class E/C floor requires which separation standard?',
  options: [
    'A. IFR aircraft receive ATC separation; VFR aircraft do not',
    'B. ATC provides traffic information but not separation',
    'C. Full ATC separation applies as in Class C',
    'D. No ATC separation is provided — pilots are responsible for their own separation (see and avoid)'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.1: in Class G (uncontrolled) airspace, ATC does not provide separation. Pilots are responsible for collision avoidance using the see-and-avoid principle. ATC may provide traffic information on request.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A pilot is cleared for a visual approach. What minimum requirement must be met before the approach may be commenced?',
  options: [
    'A. The pilot must have the aerodrome or the preceding traffic in sight and be able to maintain visual contact to landing',
    'B. The aircraft must be on an ILS and break off at DH',
    'C. The ATIS must report clear skies',
    'D. Visibility must be above 10 km'
  ],
  correct: 0,
  explanation: 'CASR 91.450: a visual approach clearance requires the pilot to maintain visual contact with the aerodrome environment or the preceding traffic throughout the approach to landing.',
  reference: 'CASR 91.450'
},

{
  question: 'Within how many days must a pilot submit an Aviation Safety Incident Report (ASIR) after an occurrence?',
  options: [
    'A. 72 hours',
    'B. 24 hours',
    'C. 7 days',
    'D. 14 days'
  ],
  correct: 2,
  explanation: 'AIP GEN 3.3 and the Transport Safety Investigation Act 2003: mandatory reports to ATSB must be submitted as soon as practicable. CASA\'s ASIR system accepts reports within 7 days of an occurrence. Immediate notification is required for accidents.',
  reference: 'AIP GEN 3.3 / CASR 201.025'
},

{
  question: 'What is the minimum rest period required for a single-pilot charter operation before commencing an FDP?',
  options: [
    'A. 8 hours',
    'B. 6 hours',
    'C. 12 hours',
    'D. 10 hours'
  ],
  correct: 3,
  explanation: 'CAO 48.1: the minimum rest period before commencing a flight duty period in single-pilot charter is 10 hours, which must provide at least 8 hours sleep opportunity.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'Frost or ice on the wings of an aircraft at the time of take-off is:',
  options: [
    'A. Not permitted — the aircraft must be clear of frost, ice, and snow before take-off',
    'B. Acceptable for take-off if outside air temperature is above -5°C',
    'C. Acceptable if the aircraft has a wing inspection approval',
    'D. Acceptable if the layer is less than 3 mm thick'
  ],
  correct: 0,
  explanation: 'CASR 91.280: no person may operate an aircraft for take-off if frost, ice, or snow is adhering to propellers, windshields, wings, stabilising or control surfaces, or engine inlets.',
  reference: 'CASR 91.280'
},

{
  question: 'What is the correct read-back requirement for ATC clearances in Australia?',
  options: [
    'A. The full clearance must always be read back verbatim',
    'B. Route clearances, altitude instructions, heading instructions, speed instructions, SSR codes, and runway-in-use must be read back',
    'C. Only the SSR code requires a read-back',
    'D. Read-back is discretionary unless ATC requests it'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: mandatory read-back items include ATC route clearances, altitude instructions (including QNH), heading instructions, speed instructions, SSR codes, runway-in-use, and clearances to enter or cross a runway.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What medical certificate is required for the exercise of CPL privileges?',
  options: [
    'A. No medical certificate is required for CPL privileges below FL180',
    'B. Class 3 Medical Certificate',
    'C. Class 1 Medical Certificate',
    'D. Class 2 Medical Certificate'
  ],
  correct: 2,
  explanation: 'CASR 61.390 and CASR Part 67: a CPL holder must hold a valid Class 1 Medical Certificate issued under CASR Part 67 to exercise CPL privileges.',
  reference: 'CASR 61.390 / CASR Part 67'
},

{
  question: 'What are the primary differences between Class C and Class D airspace regarding VFR flight?',
  options: [
    'A. VFR flight is prohibited in Class C but permitted in Class D',
    'B. In Class C, ATC separates VFR from IFR; in Class D, ATC provides traffic information between IFR and VFR but does not separate them',
    'C. VFR aircraft in Class D must hold an instrument rating',
    'D. There is no difference; both classes are identical for VFR'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1: in Class C airspace, ATC separates all IFR from VFR traffic. In Class D, ATC issues traffic information between IFR and VFR aircraft but does not separate them; VFR pilots are responsible for their own separation from other VFR aircraft.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What is the obligation of a pilot who receives an ATC clearance they cannot comply with?',
  options: [
    'A. The pilot must request a supervisor and wait on the ground',
    'B. The pilot must accept the clearance and comply to the best of their ability',
    'C. The pilot may silently deviate without notifying ATC',
    'D. The pilot must inform ATC immediately that they cannot comply and state what they require instead'
  ],
  correct: 3,
  explanation: 'CASR 91.155 and AIP ENR 1.1: if a pilot cannot comply with an ATC clearance, they must advise ATC immediately using "UNABLE" and state their limitations or requirements so ATC can provide an alternative.',
  reference: 'CASR 91.155 / AIP ENR 6.1'
},

{
  question: 'What is the definition of "controlled airspace"?',
  options: [
    'A. Only Class A and B airspace',
    'B. Airspace above FL180 only',
    'C. Airspace of defined dimensions within which ATC service is provided to IFR and in some classes to VFR flights',
    'D. Any airspace where a radar service is provided'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.1 / ICAO Annex 2: controlled airspace is airspace of defined dimensions within which ATC service is provided to IFR flights and, depending on the airspace class, to VFR flights.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What transponder code should a pilot squawk in the absence of an ATC-assigned code while operating in Class G airspace?',
  options: [
    'A. 7700',
    'B. 1200',
    'C. 7000',
    'D. 2000'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.6: in Australia, pilots operating without an ATC-assigned code in Class G (uncontrolled) airspace should squawk 7000.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'What is the maximum number of hours a crew member may fly in any 28-day period under a standard charter operation?',
  options: [
    'A. 100 hours',
    'B. 150 hours',
    'C. 200 hours',
    'D. 120 hours'
  ],
  correct: 3,
  explanation: 'CAO 48.1: the maximum cumulative flight time in any 28 consecutive days is 120 hours for crew members in regular public transport and charter operations.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the purpose of a Special Flight Permit (SFP)?',
  options: [
    'A. It allows flight for revenue purposes without a CPL',
    'B. It is required for all flights above FL250',
    'C. It replaces the maintenance release',
    'D. It authorises a specific flight that would otherwise not comply with airworthiness requirements, such as a ferry flight to a maintenance base'
  ],
  correct: 3,
  explanation: 'CASR 91.075: a Special Flight Permit (authority to fly) is issued by CASA to authorise specific flights by aircraft that do not meet the standard airworthiness requirements, such as flying to a maintenance facility for repair.',
  reference: 'CASR 91.075'
},

{
  question: 'What minimum height must be maintained over a non-built-up area?',
  options: [
    'A. 250 ft AGL',
    'B. 500 ft AGL',
    'C. 300 ft AGL',
    'D. 1,000 ft AGL'
  ],
  correct: 1,
  explanation: 'CASR 91.645: over areas other than built-up areas or water, an aircraft must not fly lower than 500 ft AGL, except during take-off, landing, or as otherwise permitted.',
  reference: 'CASR 91.645'
},

{
  question: 'What must a pilot do before conducting a low-level flight that will be below 500 ft AGL over an area that is not a built-up area?',
  options: [
    'A. Obtain an air traffic control clearance even in Class G airspace',
    'B. Check the area is not a Restricted, Prohibited, or Danger area and comply with minimum height requirements unless an exemption applies',
    'C. File a NOTAM',
    'D. Notify CASA 48 hours in advance'
  ],
  correct: 1,
  explanation: 'CASR 91.305 and 91.645: the pilot must ensure the flight does not enter Restricted or Prohibited areas and that the minimum heights are met unless a specific exemption (e.g. mustering, agricultural, emergency) applies.',
  reference: 'CASR 91.645 / 91.305'
},

{
  question: 'What does "ADIZ" stand for and what obligation does it place on pilots entering it?',
  options: [
    'A. Air Defence Identification Zone — requires a specific flight plan and position report at the ADIZ boundary',
    'B. Approach Distance Inspection Zone — requires a visual approach clearance',
    'C. Air Distance Information Zone — requires DME equipment',
    'D. Australian Danger Identification Zone — entry prohibited without a clearance'
  ],
  correct: 0,
  explanation: 'AIP ENR 2.1: the Air Defence Identification Zone (ADIZ) surrounds Australian territory. Pilots entering the ADIZ must have a filed ICAO flight plan and report their position at the ADIZ boundary.',
  reference: 'AIP ENR 2.1'
},

{
  question: 'Which type of flight is authorised in Class A airspace?',
  options: [
    'A. Special VFR and IFR with pilot separation',
    'B. IFR only; VFR flight is not permitted',
    'C. VFR only, with radar separation',
    'D. VFR and IFR, with ATC separation provided to all'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1: Class A airspace is reserved for IFR operations only. VFR flight is not permitted. All IFR aircraft are provided with ATC separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What action is required after a pilot-in-command deviates from a regulation to meet an emergency?',
  options: [
    'A. A mandatory 72-hour stand-down applies before the next flight',
    'B. No further action is required',
    'C. The PIC must obtain re-certification of the aircraft before the next flight',
    'D. The PIC must submit a report to CASA if requested, detailing the emergency and the deviation'
  ],
  correct: 3,
  explanation: 'CASR 91.175(2): if a pilot deviates from a regulation to meet an in-flight emergency, CASA may require a written report. The PIC must submit the report within the period specified.',
  reference: 'CASR 91.175(2)'
},

{
  question: 'What does squawking 7600 indicate to ATC?',
  options: [
    'A. Military identification',
    'B. Unlawful interference (hijack)',
    'C. General emergency',
    'D. Communication failure'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.6: squawking 7600 indicates radio communication failure to ATC. The pilot should squawk 7600 and follow the lost communications procedures.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'What is the speed limit for aircraft operating within 4 NM of a Class D aerodrome at or below 2,500 ft AGL?',
  options: [
    'A. 180 KIAS',
    'B. 200 KIAS',
    'C. 160 KIAS',
    'D. 250 KIAS'
  ],
  correct: 1,
  explanation: 'CASR 91.665 and AIP ENR 1.1: within a 4 NM radius of a Class C or Class D aerodrome at or below 2,500 ft AGL, the speed limit is 200 KIAS unless a lower speed is required for the aircraft category.',
  reference: 'CASR 91.665'
},

{
  question: 'What is the general speed limit below 10,000 ft in Australian airspace?',
  options: [
    'A. 250 KIAS',
    'B. 350 KIAS',
    'C. 200 KIAS',
    'D. 300 KIAS'
  ],
  correct: 0,
  explanation: 'CASR 91.660: below 10,000 ft AMSL (or FL100), no aircraft may be operated at a speed in excess of 250 KIAS, unless operating in Class A airspace or in accordance with an exemption.',
  reference: 'CASR 91.660'
},

{
  question: 'What is the definition of an "accident" for the purposes of mandatory reporting to ATSB?',
  options: [
    'A. An occurrence associated with aircraft operation where a person is fatally or seriously injured, the aircraft sustains substantial damage, or the aircraft goes missing',
    'B. Any occurrence where the aircraft sustains more than $10,000 in damage',
    'C. Any hard landing requiring inspection',
    'D. Any flight outside approved limits'
  ],
  correct: 0,
  explanation: 'AIP GEN 3.3 and Transport Safety Investigation Act 2003: an accident is defined as an occurrence associated with the operation of an aircraft in which a person is fatally or seriously injured, the aircraft sustains substantial damage, or the aircraft goes missing.',
  reference: 'AIP GEN 3.3 / Transport Safety Investigation Act 2003 s.3'
},

{
  question: 'Can a pilot fly through a Danger Area without any special clearance?',
  options: [
    'A. Only IFR pilots may enter Danger Areas',
    'B. No — Danger Areas require a clearance from CASA',
    'C. Entry requires an SFP regardless of activation status',
    'D. Yes — Danger Areas are not prohibited; pilots should exercise caution and check NOTAM for activation'
  ],
  correct: 3,
  explanation: 'CASR 91.515 and AIP ENR 5.1: Danger Areas are not legally prohibited airspace. Pilots should check relevant NOTAMs for activation and exercise extreme caution when entering, but no specific legal clearance is required.',
  reference: 'CASR 91.515 / AIP ENR 5.1'
},

{
  question: 'What is an ATIS broadcast and what information must it contain?',
  options: [
    'A. A military weather broadcast only',
    'B. A pilot-to-pilot broadcast for airspace conflict avoidance',
    'C. An Automatic Terminal Information Service broadcast providing continuous non-control information including active runways, weather, QNH, and NOTAMs relevant to the terminal area',
    'D. An ATC instruction for IFR traffic only'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.7: ATIS (Automatic Terminal Information Service) is a continuous broadcast of current non-control aerodrome information, including weather, active runways, QNH, any relevant NOTAMs, and the information identifier.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'What is the required minimum in-flight visibility for a VFR flight below 3,000 ft AMSL in Class G airspace during the day?',
  options: [
    'A. 800 m',
    'B. 5,000 m',
    'C. 1,500 m',
    'D. 3,000 m'
  ],
  correct: 2,
  explanation: 'CASR 91.615 and Part 91 MOS: for VFR flight in Class G airspace below 3,000 ft AMSL (day), the minimum flight visibility is 1,500 m.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What additional endorsement is required for a CPL holder to act as PIC of a high-performance aircraft?',
  options: [
    'A. An instrument rating covering that aircraft class',
    'B. An ATPL is required for any high-performance aircraft',
    'C. No endorsement is required; CPL privileges cover all aircraft',
    'D. A high-performance aircraft endorsement on the pilot licence'
  ],
  correct: 3,
  explanation: 'CASR Part 61: certain aircraft requiring special skill, such as high-performance types, require an endorsement on the licence in addition to the aircraft type or class rating.',
  reference: 'CASR Part 61 Subpart 61.Q'
},

{
  question: 'What is the standard circuit direction at an aerodrome unless otherwise specified?',
  options: [
    'A. Determined solely by the wind direction',
    'B. Alternates based on runway designation (odd = left, even = right)',
    'C. Left-hand',
    'D. Right-hand'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.4 and VFRG: the standard traffic circuit direction in Australia is left-hand, unless an aerodrome has a published right-hand circuit procedure or ATC specifies otherwise.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What is required before a VFR pilot can fly in controlled airspace above 10,000 ft AMSL?',
  options: [
    'A. No special endorsement is required',
    'B. The pilot must hold a controlled airspace endorsement (Class A/E endorsement if applicable) and meet VMC requirements',
    'C. An IFR flight plan must be filed',
    'D. An oxygen endorsement and IFR rating are mandatory'
  ],
  correct: 1,
  explanation: 'CASR Part 61 and AIP ENR 1.5: a pilot conducting VFR flight in Class C or E airspace may require a specific airspace endorsement depending on the airspace class and their licence grade, in addition to meeting the VMC requirements.',
  reference: 'CASR Part 61 / AIP ENR 1.5'
},

{
  question: 'A pilot forgets to bring their licence on a charter flight. What is the legal consequence?',
  options: [
    'A. No consequence — the licence does not need to be physically carried',
    'B. A crew licence must be available to produce to an authorised officer during a flight — failure is an offence',
    'C. The flight must be aborted immediately',
    'D. The pilot commits an offence but can continue the flight if the licence is current and valid'
  ],
  correct: 1,
  explanation: 'CASR 91.795: the pilot-in-command must have their licence available during flight to produce if requested by an authorised officer. Failure to carry the licence is an offence, though it does not automatically invalidate the flight if the licence itself is current.',
  reference: 'CASR 91.795'
},

{
  question: 'What is the purpose of Class G uncontrolled airspace?',
  options: [
    'A. It provides radar separation for all VFR traffic',
    'B. It is airspace not designated as Class A–E; ATC services are not provided but may be available on request',
    'C. It is reserved for military low-level training only',
    'D. Only agricultural and emergency operations are permitted'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1: Class G is uncontrolled airspace where no ATC separation service is provided. However, pilots may request a flight information or traffic advisory service from ATC if available.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'When must a pilot submit a SARTIME?',
  options: [
    'A. Whenever requested by a responsible person as a Search and Rescue time, usually for remote area or overwater flights',
    'B. SARTIME is optional for all flights',
    'C. For all VFR and IFR flights over 30 minutes',
    'D. Only for IFR flights over water'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 and CASR 91.225: a SARTIME (Search and Rescue time) is a nominated time at which SAR action will be initiated if no contact is received. It is required for flights where the pilot may be uncontactable, such as remote area and overwater flights.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'What is the minimum cloud clearance for VFR flight in Class C airspace?',
  options: [
    'A. 1,000 ft above, 500 ft below, and 1 NM horizontally',
    'B. 1,000 ft vertically and 1,500 m horizontally',
    'C. Clear of cloud',
    'D. 500 ft vertical, 500 m horizontal'
  ],
  correct: 0,
  explanation: 'CASR 91.620 and AIP ENR 1.2: in Class C airspace, VFR flight requires 1,000 ft above, 500 ft below, and 1 NM (1,852 m) horizontal cloud clearance.',
  reference: 'CASR 91.620 / AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'What must a pilot do if they become aware of a defect that renders the aircraft unairworthy during a flight?',
  options: [
    'A. Only report the defect after landing at the destination',
    'B. Continue the flight provided passengers are briefed on the defect',
    'C. Continue to destination if the defect is minor',
    'D. Land as soon as practicable and record the defect in the maintenance release or technical log'
  ],
  correct: 3,
  explanation: 'CASR 91.320 and 91.755: if a pilot becomes aware of a defect affecting airworthiness, they must land as soon as practicable. The defect must be recorded in the maintenance release, and the aircraft must not be flown again until rectified.',
  reference: 'CASR 91.320 / 91.755'
},

{
  question: 'What is a "flight note"?',
  options: [
    'A. A passenger manifest',
    'B. A simplified notification lodged with ATS for VFR flights in remote areas where a full flight plan is not required',
    'C. A full ICAO flight plan',
    'D. A verbal position report to ATC'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.10: a flight note (also called a "flight notification") is a simplified ATS notification used for VFR flights operating in remote areas. It is less comprehensive than a full ICAO flight plan but enables SAR alerting.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'What does a white cross displayed on a runway indicate?',
  options: [
    'A. The runway or portion is unfit for use by aircraft',
    'B. Right-hand circuits apply',
    'C. The runway has a declared distance limitation',
    'D. The runway threshold is displaced'
  ],
  correct: 0,
  explanation: 'AIP GEN 1.5: a white cross on a runway or taxiway indicates that the surface is unfit for use by aircraft.',
  reference: 'AIP GEN 1.5'
},

{
  question: 'An aircraft making a forced landing may fly below the normal minimum heights. What obligations apply after such a landing?',
  options: [
    'A. No report is required for a precautionary landing',
    'B. The pilot must immediately file a report with ATSB',
    'C. The pilot must report the deviation to CASA if required and record details in the maintenance release',
    'D. The pilot must submit a mandatory incident report to ATSB and notify ATS'
  ],
  correct: 3,
  explanation: 'CASR 91.640 and AIP GEN 3.3: a forced landing is a reportable occurrence under the Transport Safety Investigation Act 2003. The pilot must notify ATSB and ATS as required. A CASA report may also be required.',
  reference: 'CASR 91.640 / AIP GEN 3.3'
},

{
  question: 'What is an "airways" route structure used for in Australia?',
  options: [
    'A. Visual landmarks designated for training aircraft',
    'B. Designated IFR en-route paths defined by navaids or RNAV waypoints within controlled airspace',
    'C. VFR traffic corridors below 3,000 ft',
    'D. High-speed military transit routes only'
  ],
  correct: 1,
  explanation: 'AIP ENR 3.1: airways are designated routes within controlled airspace defined by navaids (NDB, VOR) or RNAV waypoints. They form the structure of IFR en-route navigation in Australian controlled airspace.',
  reference: 'AIP ENR 3.1'
},

{
  question: 'What cloud clearance is required for VFR flight at or below 1,000 ft AMSL in Class G airspace during the day?',
  options: [
    'A. 500 ft vertical and 600 m horizontal',
    'B. Clear of cloud',
    'C. 1,500 ft vertical and 1 NM horizontal',
    'D. 1,000 ft vertical and 1,500 m horizontal'
  ],
  correct: 1,
  explanation: 'CASR 91.615 / 91.625 and AIP ENR 1.2: for VFR flight in Class G airspace at or below 1,000 ft AMSL (day), the requirement is clear of cloud and in sight of the surface.',
  reference: 'CASR 91.625 / AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'Who may make entries in an aircraft maintenance release?',
  options: [
    'A. Only a LAME regardless of circumstances',
    'B. Any crew member on the flight',
    'C. Only authorised personnel under Part 66, or the PIC recording a defect',
    'D. The aircraft owner at any time'
  ],
  correct: 2,
  explanation: 'CASR 91.755 and CASR Part 66: entries in the maintenance release are made by appropriately licensed maintenance engineers (LAME/AME) under Part 66. The PIC may record a defect or technical fault, but maintenance certification may only be made by the appropriate licensed person.',
  reference: 'CASR 91.755 / CASR Part 66'
},

{
  question: 'What is the purpose of an "inner horizontal surface" in the context of an obstacle limitation surface?',
  options: [
    'A. It defines the approach path slope for instrument operations',
    'B. It is a surface 45 m above the aerodrome elevation extending horizontally from the runway strip to protect aircraft in the circuit',
    'C. It applies only to takeoff obstacle clearance',
    'D. It is the surface defining minimum IFR holding altitude'
  ],
  correct: 1,
  explanation: 'AIP ENR 4.1 and ICAO Annex 14: the inner horizontal surface is 45 m above the aerodrome elevation, extending within a radius that protects aircraft conducting circuit operations from obstacles. It is part of the obstacle limitation surfaces defined in Annex 14.',
  reference: 'AIP ENR 4.1 / ICAO Annex 14'
},

{
  question: 'An ATC clearance reads "MAINTAIN FLIGHT PLANNED ROUTE." What does this authorise?',
  options: [
    'A. The clearance only applies above FL180',
    'B. The pilot is authorised to deviate for weather',
    'C. The pilot must follow the route filed in the current flight plan',
    'D. The pilot may fly any route at their discretion'
  ],
  correct: 2,
  explanation: 'CASR 91.555 and AIP ENR 6.1: "MAINTAIN FLIGHT PLANNED ROUTE" is an ATC clearance to proceed as per the route filed in the current flight plan. Any deviation requires an amended clearance.',
  reference: 'CASR 91.555 / AIP ENR 6.1'
},

{
  question: 'What separation is provided by ATC to VFR aircraft in Class C airspace?',
  options: [
    'A. VFR from IFR only; no separation between VFR aircraft',
    'B. VFR from VFR and VFR from IFR',
    'C. No separation; traffic information only',
    'D. Radar separation from all traffic including VFR'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1: in Class C airspace, ATC provides separation between IFR and VFR aircraft. VFR aircraft are not separated from other VFR aircraft, but receive traffic information.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What is the maximum flight time for a single-pilot operation in a 24-hour period?',
  options: [
    'A. 11 hours',
    'B. 8 hours',
    'C. 14 hours',
    'D. 10 hours'
  ],
  correct: 3,
  explanation: 'CAO 48.1: for a single-pilot operation, the maximum flight time in any 24-hour period is 8 hours within a maximum FDP of up to 11 hours depending on start time.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'At what point on the circuit should a pilot make a "final" radio call at a non-controlled aerodrome?',
  options: [
    'A. Only after landing gear is confirmed down',
    'B. At circuit height, before turning base',
    'C. When at a 3 NM final',
    'D. When turning final, reporting final and intentions'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.4 and VFRG: at a non-controlled aerodrome, a pilot should broadcast on CTAF when turning final, reporting aircraft type, callsign, runway in use, and intentions (landing, touch and go, etc.).',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What is a Prohibited Area and what does it mean for a civil pilot?',
  options: [
    'A. An area restricted during specific hours only',
    'B. An area in which the flight of any aircraft is prohibited (unless authorised), protecting sensitive locations such as royal residences or nuclear sites',
    'C. An area where VFR flight is prohibited; IFR is still permitted',
    'D. A military-only airspace managed by the RAAF'
  ],
  correct: 1,
  explanation: 'AIP ENR 2.1 / CASR 91.185: a Prohibited Area is designated airspace where civil flight is prohibited at all times without specific authorisation from CASA. Examples include areas around sensitive national security or safety installations.',
  reference: 'AIP ENR 2.1 / CASR 91.185'
},

{
  question: 'What is the minimum age for a person to act as an air crew member in Australian aviation?',
  options: [
    'A. 17 years',
    'B. 16 years',
    'C. 15 years',
    'D. 18 years'
  ],
  correct: 1,
  explanation: 'CASR Part 61 and the Civil Aviation Act 1988: the minimum age to act as pilot-in-command of a solo flight (student pilot) is 16 years. To hold a PPL or CPL, minimum ages are 17 and 18 years respectively.',
  reference: 'CASR 61.160 / CASR 61.225'
},

{
  question: 'What action must a pilot take after discovering a defect during a pre-flight inspection?',
  options: [
    'A. Record the defect in the maintenance release and defer it to the next maintenance check',
    'B. Notify ATC of the defect before departure',
    'C. Conduct the flight and report the defect on landing',
    'D. Assess whether the aircraft is airworthy — if not, it must not be operated and the defect must be reported per the maintenance programme'
  ],
  correct: 3,
  explanation: 'CASR 91.730: a pilot who identifies a defect must determine whether it affects airworthiness. If the aircraft is not airworthy, the flight must not proceed. The defect must be recorded in the maintenance release and addressed per the approved maintenance schedule.',
  reference: 'CASR 91.730 / CASR 91.755'
},

{
  question: 'What does an ATIS information identifier indicate to a pilot?',
  options: [
    'A. The sequential alphabetical letter identifying when the ATIS was last updated, allowing ATC to confirm the pilot has current information',
    'B. The runway length available for landing',
    'C. The QNH setting from the previous hour',
    'D. The identity of the controller on duty'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.7: each ATIS broadcast carries a sequential alphabetical identifier (Alpha, Bravo, Charlie, etc.). When contacting ATC, pilots report the ATIS identifier confirming they have the current terminal information.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Who is responsible for activating a SARTIME after a flight?',
  options: [
    'A. ATC activates the SARTIME automatically',
    'B. The pilot-in-command (or a responsible person nominated by the pilot) must cancel the SARTIME upon landing or initiate SAR action at the nominated time',
    'C. The aircraft operator is solely responsible',
    'D. AMSA automatically tracks all aircraft and no action is required'
  ],
  correct: 1,
  explanation: 'CASR 91.225 and AIP ENR 1.10: the PIC (or designated responsible person) must cancel the SARTIME with JRCC/ATS on completion of the flight. If the SARTIME expires without cancellation, SAR action is initiated.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'What is a "special VFR clearance" and when may it be issued?',
  options: [
    'A. A clearance issued to military aircraft only',
    'B. An ATC clearance allowing a VFR aircraft to operate within a CTR in weather below normal VMC minima, at the discretion of ATC and only in Class D or C airspace',
    'C. A clearance for crop dusting below 500 ft',
    'D. A clearance for IFR aircraft to conduct visual approaches in IMC'
  ],
  correct: 1,
  explanation: 'CASR 91.430: a special VFR clearance permits a VFR aircraft to operate within a control zone in meteorological conditions below standard VMC minima. It may only be issued by ATC in Class C or D airspace when traffic permits, and imposes specific visibility and cloud clearance requirements.',
  reference: 'CASR 91.430'
},

{
  question: 'What notification applies to Danger Area D201 (Woomera)?',
  options: [
    'A. It is a Restricted Area requiring CASA permission',
    'B. Transit is permitted without restriction below 3,000 ft AGL',
    'C. Activation times are published by NOTAM; pilots should check NAIPS for current status before flight',
    'D. It is permanently active and requires a military clearance'
  ],
  correct: 2,
  explanation: 'AIP ENR 5.1: Australian Danger Areas such as Woomera (D201) have activation times published by NOTAM through NAIPS. Pilots must check current NOTAMs before transiting.',
  reference: 'AIP ENR 5.1 / NAIPS'
},

{
  question: 'What counts towards "flight time" for the purposes of FDP limits?',
  options: [
    'A. Only airborne time is counted',
    'B. Time from first flight departure to final landing, including taxi and ground runs',
    'C. Simulator time is included in flight time',
    'D. Block-to-block time (chocks off to chocks on)'
  ],
  correct: 3,
  explanation: 'CAO 48.1: flight time for duty period purposes is measured block-to-block — from the moment the aircraft first moves for the purpose of take-off to the moment it comes to rest at the end of the flight (chocks on).',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the requirement for VFR aircraft transiting through Class C airspace?',
  options: [
    'A. VFR flight is not permitted in Class C',
    'B. Two-way radio communication and an ATC clearance must be obtained before entering Class C',
    'C. Only a radio call on approach frequency is needed',
    'D. Class C requires an IFR flight plan only for turbine aircraft'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1 and CASR 91.410: Class C airspace requires all aircraft to obtain a clearance and maintain two-way radio communication with ATC before entry, whether IFR or VFR.',
  reference: 'AIP ENR 1.1 / CASR 91.410'
},

{
  question: 'In what circumstances may a pilot operate an aircraft with an inoperative altimeter?',
  options: [
    'A. Never — the altimeter is a required instrument at all times',
    'B. The pilot may use GPS altitude as a substitute in all airspace',
    'C. If the aircraft is operated under VFR in Class G airspace at or below 1,500 ft AGL and the defect is recorded in the maintenance release',
    'D. An inoperative altimeter is acceptable with ATC approval'
  ],
  correct: 0,
  explanation: 'CASR 91.505 and Part 91 MOS: an altimeter is required for virtually all flight operations, including VFR. The minimum equipment lists (MEL) for specific aircraft types may allow deferral in very limited circumstances, but generally no flight may be conducted with an inoperative altimeter.',
  reference: 'Part 91 MOS 2020 s.26.04 / CASR 91.505'
},

{
  question: 'What does the phrase "ROGER" mean in ATC radiotelephony?',
  options: [
    'A. "I understand and will do as instructed"',
    'B. Instruction received and will comply',
    'C. Transmission received; does not indicate agreement or compliance',
    'D. Instruction received and understood'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "ROGER" means "I have received all of your last transmission." It does not imply agreement or intent to comply — it is an acknowledgement of receipt only.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the obligation of a pilot who notices an unlawful interference (e.g. hijack attempt) on a flight?',
  options: [
    'A. Land immediately at the nearest aerodrome',
    'B. Notify passengers and conduct a citizen\'s arrest',
    'C. Squawk 7700 and declare a MAYDAY',
    'D. Squawk 7500, notify ATC at the first opportunity using the phrase "UNLAWFUL INTERFERENCE," and follow the operator\'s security procedures'
  ],
  correct: 3,
  explanation: 'CASR 91.335 and AIP ENR 6.1: in the event of unlawful interference, the PIC should squawk 7500 and, at the first opportunity, notify ATC using the phraseology "UNLAWFUL INTERFERENCE." ATC will provide all practicable assistance.',
  reference: 'CASR 91.335 / AIP ENR 6.1'
},

{
  question: 'What pre-flight action is required regarding fuel quantity?',
  options: [
    'A. Fuel gauges alone are sufficient to verify fuel quantity',
    'B. The pilot must ensure the fuel is sufficient for the planned flight by checking fuel quantity by means other than fuel gauges alone if any doubt exists',
    'C. A refueller\'s receipt is legally sufficient proof of fuel quantity',
    'D. Fuel verification is the maintenance organisation\'s responsibility'
  ],
  correct: 1,
  explanation: 'CASR 91.285: the PIC must ensure that the aircraft carries sufficient fuel for the flight. When there is any doubt, the actual fuel quantity must be verified by dipping tanks or checking by means other than relying on fuel gauges alone.',
  reference: 'CASR 91.285'
},

{
  question: 'What is a Terminal Control Area (TCA) and how does it differ from a Control Zone (CTR)?',
  options: [
    'A. TCAs are for military aircraft only',
    'B. A TCA is Class G airspace above an aerodrome',
    'C. A TCA and CTR are different names for the same structure',
    'D. A CTR starts at the surface; a TCA (now called a Terminal Manoeuvring Area or TMA) begins at a specified altitude above the surface and provides controlled airspace for arriving and departing IFR aircraft'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4: a Terminal Manoeuvring Area (TMA/formerly TCA) is controlled airspace established above the surface to provide protection for IFR arrivals and departures. It differs from a CTR in that it does not extend to the surface.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'What are the consequences for a pilot who operates an aircraft while "under the influence" of a psychoactive substance?',
  options: [
    'A. Operating while under the influence of alcohol, drugs, or other psychoactive substances is a serious offence under the Civil Aviation Act and may result in licence suspension, cancellation, and criminal penalties',
    'B. The pilot will receive a warning only for a first offence',
    'C. A $500 penalty applies for a first offence',
    'D. Only blood alcohol above 0.10 constitutes an offence'
  ],
  correct: 0,
  explanation: 'Civil Aviation Act 1988 s.30DB and CASR 91.695: operating an aircraft while under the influence of any psychoactive substance (including alcohol and drugs) is a criminal offence. The blood alcohol limit for aviation is 0.02 g/210L breath (compared to 0.05 for road).',
  reference: 'Civil Aviation Act 1988 s.30DB'
},

{
  question: 'What is the purpose of a TMA (Terminal Manoeuvring Area) base altitude?',
  options: [
    'A. It defines the lower limit of controlled airspace above the surface to protect IFR arrivals and departures transitioning between the en-route structure and the CTR',
    'B. It replaces the CTR for non-turbine aircraft',
    'C. It defines the minimum safe altitude for jet aircraft only',
    'D. It sets the transponder mandatory zone boundary'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.4: the TMA base altitude establishes the floor of controlled airspace in the terminal area. It is designed to protect instrument procedures for arriving and departing IFR traffic during the transition between cruise altitude and the CTR.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'What is the minimum information required when lodging a SARTIME with ATS?',
  options: [
    'A. Full ICAO flight plan details',
    'B. Pilot name and mobile phone number only',
    'C. Aircraft registration or callsign, route, destination, estimated time of arrival, and the SARTIME (time after which SAR action is to be initiated)',
    'D. Aircraft registration, pilot name, fuel endurance, and nominated time of arrival'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.10: a SARTIME lodgement must include at minimum the aircraft identification, planned route or destination, ETA, and the nominated SARTIME. Additional information improves the efficiency of SAR operations.',
  reference: 'AIP ENR 1.10 / CASR 91.225'
},

{
  question: 'What documents must be kept on an aircraft for a charter flight?',
  options: [
    'A. Documents are kept at base; copies are not required on the aircraft',
    'B. Certificate of registration only',
    'C. Certificate of registration, certificate of airworthiness (or authority to fly), maintenance release, and journey log',
    'D. Pilot licence and medical certificate only'
  ],
  correct: 2,
  explanation: 'CASR 91.785 and 91.795: for a charter operation, the aircraft must carry the certificate of registration, certificate of airworthiness or authority to fly, current maintenance release, and a journey log (or equivalent).',
  reference: 'CASR 91.785 / CASR 91.795'
},

{
  question: 'What is the minimum visibility for VFR flight in Class C airspace?',
  options: [
    'A. 1,500 m',
    'B. 8,000 m above FL200; 5,000 m at or below FL200',
    'C. 5,000 m',
    'D. 3,000 m at all altitudes'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: VFR flight in Class C airspace requires 5,000 m visibility at or below FL200, and 8,000 m visibility above FL200.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'What is a "flight review" and when is it required?',
  options: [
    'A. A flight review is an annual medical inspection',
    'B. A biennial (every 2 years) review conducted with a flight instructor to assess the pilot\'s proficiency, required to maintain pilot-in-command privileges',
    'C. A review conducted only after an incident or accident',
    'D. A flight review is required every 6 months for CPL holders'
  ],
  correct: 1,
  explanation: 'CASR 61.900: a biennial flight review (BFR) must be completed within the previous 24 months to exercise PIC privileges (excluding IFR operations which have a separate instrument proficiency check requirement).',
  reference: 'CASR 61.900'
},

{
  question: 'When may a pilot use the phrase "MAYDAY MAYDAY MAYDAY"?',
  options: [
    'A. Whenever the weather is below minima',
    'B. Only when declaring a hijack',
    'C. At any time the pilot determines conditions are abnormal',
    'D. When the aircraft or its occupants are in grave and imminent danger requiring immediate assistance'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: the MAYDAY distress call is used only when an aircraft is in grave and imminent danger and requires immediate assistance. It takes priority over all other communications.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What action should a pilot take if they have NOT received an expected SARWATCH cancellation call from a flight in a remote area?',
  options: [
    'A. Contact the pilot\'s mobile phone first',
    'B. Wait 60 minutes past ETA before taking any action',
    'C. Initiate SAR action immediately at the nominated SARTIME by contacting JRCC Australia or ATS',
    'D. Notify CASA and wait for their instructions'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.10: if a SARTIME expires without a cancellation, the responsible person must immediately contact JRCC Australia (1800 815 257) to initiate SAR alerting. Any delay could be critical.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Which of the following is NOT required equipment for VFR flight during the day in a single-engine piston aircraft?',
  options: [
    'A. Altimeter',
    'B. Airspeed indicator',
    'C. Magnetic compass',
    'D. Radio altimeter'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.26.04: VFR day minimum equipment for a single-engine aircraft includes magnetic compass, altimeter, ASI, tachometer or manifold pressure gauge, and oil pressure/temperature gauges. A radio altimeter is not required for basic VFR day operations.',
  reference: 'Part 91 MOS 2020 s.26.04'
},

{
  question: 'What does "WILCO" mean in radiotelephony?',
  options: [
    'A. Transmission is incomplete — please repeat',
    'B. I have received and understood your message and will comply',
    'C. I understand but cannot comply',
    'D. I have received your message only'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "WILCO" (Will Comply) means "I have received your message, understand it, and will comply with it." It combines receipt and compliance, unlike "ROGER" which is receipt only.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the definition of "minimum fuel" and what action should a pilot take?',
  options: [
    'A. Minimum fuel is equivalent to a MAYDAY declaration',
    'B. Minimum fuel is declared when the fuel state is such that the pilot is committed to land at a specific aerodrome and can accept no additional delay. It is advisory, not an emergency, but ATC will provide priority handling.',
    'C. Minimum fuel means less than 30 minutes remaining; the pilot must land immediately',
    'D. Minimum fuel must be declared when fuel for 1 hour remains'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1: "MINIMUM FUEL" informs ATC that the fuel state has reached a point where the pilot can accept no further delay. It is an advisory, not an emergency, but ATC should give the aircraft priority handling to ensure expeditious routing.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What does the "recent experience" requirement for night flight mean for a PPL or CPL holder?',
  options: [
    'A. Completion of a night circuit check every 12 months',
    'B. 3 take-offs and landings in the preceding 90 days in the same category and class, conducted at night',
    'C. Instrument rating is required for all night flights',
    'D. 5 hours night flying in the last 12 months'
  ],
  correct: 1,
  explanation: 'CASR 61.395 and 61.870: to carry passengers at night, a pilot must have completed 3 take-offs and landings at night within the preceding 90 days in the same category and class of aircraft.',
  reference: 'CASR 61.395 / 61.870'
},

{
  question: 'What is the consequence of failing to cancel a SARTIME on arrival?',
  options: [
    'A. No consequence; it is the responsible person\'s responsibility only',
    'B. The pilot\'s licence is automatically suspended',
    'C. SAR resources are activated, which wastes significant emergency resources and may expose the pilot to costs or penalties',
    'D. A $200 fine is issued automatically'
  ],
  correct: 2,
  explanation: 'CASR 91.225 and Civil Aviation Act 1988: failure to cancel a SARTIME results in the activation of SAR resources (JRCC, aircraft, vessels). This wastes considerable resources and may result in civil or criminal liability for the costs incurred.',
  reference: 'CASR 91.225 / Civil Aviation Act 1988'
},

{
  question: 'What does "Class E airspace" in Australia primarily serve?',
  options: [
    'A. Exclusively VFR operations',
    'B. Military fast jet operations below FL245',
    'C. IFR operations in remote and oceanic areas, and some terminal areas, where radar coverage may be limited',
    'D. High-altitude supersonic flight'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.4: Class E airspace in Australia serves IFR operations in areas where radar coverage is limited, such as remote Australia and oceanic areas. VFR is permitted but receives no separation from IFR aircraft.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'What is the PIC\'s responsibility with respect to aircraft loading of cargo?',
  options: [
    'A. The load manifest automatically satisfies the PIC\'s obligation',
    'B. The PIC must ensure all cargo is correctly loaded, secured, and that the aircraft is within weight and balance limits before flight',
    'C. Cargo loading is solely the ground handler\'s responsibility',
    'D. Cargo loading requirements apply only to aircraft over 5,700 kg MTOW'
  ],
  correct: 1,
  explanation: 'CASR 91.295: the PIC must ensure that cargo is properly loaded, distributed, and secured so that the aircraft is within its certified weight and balance limits and that cargo cannot shift during flight.',
  reference: 'CASR 91.295'
},

{
  question: 'What must a pilot do before entering a cloud if flying VFR?',
  options: [
    'A. Reduce speed to turbulence penetration speed',
    'B. File an IFR flight plan',
    'C. Notify ATC of cloud entry',
    'D. Maintain VMC at all times — a VFR pilot must not enter cloud'
  ],
  correct: 3,
  explanation: 'CASR 91.265 and 91.615: a VFR pilot is not permitted to fly in IMC (instrument meteorological conditions). Entering cloud constitutes a breach of VFR and is a serious aviation offence that places the aircraft in danger.',
  reference: 'CASR 91.265 / 91.615'
},

{
  question: 'What is the key difference between a Restricted Area and a Danger Area?',
  options: [
    'A. There is no difference — both prohibit all flight',
    'B. Restricted Areas apply to military; Danger Areas apply to civil aircraft',
    'C. Danger Areas are permanent; Restricted Areas are temporary',
    'D. A Restricted Area imposes legal restrictions on flight (generally prohibited without permission); a Danger Area warns of hazardous activities but does not legally prohibit civil flight'
  ],
  correct: 3,
  explanation: 'AIP ENR 5.1 / CASR 91.185-91.195: a Restricted Area legally restricts or prohibits flight without authorisation. A Danger Area warns of potentially hazardous operations (e.g. military exercises) but does not legally prohibit civil flight, though extreme caution is advised.',
  reference: 'AIP ENR 5.1 / CASR 91.185-91.195'
},

{
  question: 'What is a "minimum equipment list" (MEL) used for?',
  options: [
    'A. Defining the minimum fuel load for each aircraft type',
    'B. Listing all equipment required for IFR flight',
    'C. Listing mandatory rescue equipment for overwater operations',
    'D. Providing a basis for flight dispatch with specified items inoperative, subject to conditions and limitations listed for each item'
  ],
  correct: 3,
  explanation: 'CASR 91.735: a Minimum Equipment List (MEL) is an approved document that lists equipment which may be inoperative for specific operations, with appropriate conditions and limitations. It allows dispatch of aircraft with minor unserviceabilities.',
  reference: 'CASR 91.735'
},

{
  question: 'What is the obligation of a pilot receiving a TCAS/ACAS resolution advisory (RA)?',
  options: [
    'A. Respond immediately to the RA; notify ATC as soon as practicable; resume cleared flight path only after passing the conflict',
    'B. Inform ATC and continue on the assigned ATC clearance',
    'C. TCAS advisories are for information only; ATC clearances always have priority',
    'D. Respond to the RA only if visual contact with the conflicting traffic is established'
  ],
  correct: 0,
  explanation: 'CASR 91.255 and AIP ENR 1.6: a pilot must respond immediately to a TCAS RA, deviating from the ATC clearance if necessary. ATC must be informed as soon as practicable, and normal flight may resume after the conflict is resolved.',
  reference: 'CASR 91.255 / AIP ENR 1.6'
},

{
  question: 'What oxygen requirements apply to unpressurised aircraft flying above FL250?',
  options: [
    'A. Oxygen is only required for passengers; crew may use it at discretion',
    'B. Oxygen is not required below FL350 for two-pilot operations',
    'C. At FL250 and above, all flight crew must use supplemental oxygen continuously; above FL350, at least one pilot must be on oxygen at all times',
    'D. Supplemental oxygen is required for crew above FL150 only'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.16 and CASR 91.545: at FL250 and above in an unpressurised aircraft, all flight crew must use supplemental oxygen. Above FL350, at least one pilot at the controls must use oxygen at all times. Passenger oxygen requirements apply at lower altitudes.',
  reference: 'Part 91 MOS 2020 s.26.16 / CASR 91.545'
},

{
  question: 'Can a student pilot (PPL in training) carry passengers?',
  options: [
    'A. Yes, if the instructor has signed the maintenance release',
    'B. No — a student pilot (person holding a student pilot certificate or conducting solo training) may not carry passengers',
    'C. Yes, with the endorsement of a flight instructor on the flight',
    'D. Yes, for training flights up to 25 NM from the aerodrome'
  ],
  correct: 1,
  explanation: 'CASR 61.160 and CASR 61.165: a student pilot conducting solo training is not authorised to carry passengers. Passenger carrying requires at least a private pilot licence.',
  reference: 'CASR 61.160 / 61.165'
},

{
  question: 'What is the correct CTAF frequency call at a non-controlled aerodrome when taxiing for departure?',
  options: ['A. A call is not required until entering the runway', 'B. "[Aerodrome name] Traffic, [Aircraft callsign], taxiing [runway direction], [aerodrome name]"', 'C. A call to Area Control before taxiing', 'D. "[Callsign] ready for departure runway [number]"'],
  correct: 1,
  explanation: 'AIP ENR 6.4: at a CTAF aerodrome, pilots must broadcast their intentions when taxiing for departure, following the standard format: aerodrome name, aircraft callsign, operation (taxiing), runway intention, and aerodrome name again.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What are the VMC minima for VFR flight in Class G at or above 3,000 ft AMSL during the day?',
  options: [
    'A. 8 km visibility, 1,500 m horizontal and 1,000 ft vertical cloud clearance',
    'B. 5,000 m visibility, 1,000 ft above/500 ft below/600 m horizontal cloud clearance',
    'C. 3,000 m visibility, 500 ft vertical and 600 m horizontal cloud clearance',
    'D. 1,500 m visibility, clear of cloud'
  ],
  correct: 1,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or above 3,000 ft AMSL during the day, the VMC minima are 5,000 m flight visibility and cloud clearance of 1,000 ft above, 500 ft below, and 600 m horizontally.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What is the general rule regarding aerobatic flight above populated areas?',
  options: [
    'A. Aerobatic flight is prohibited over populated areas, over an open-air assembly, or in controlled airspace without ATC permission',
    'B. Aerobatics are permitted if conducted above 3,000 ft AGL',
    'C. Only approved display aircraft may conduct aerobatics anywhere',
    'D. Aerobatics are permitted above populated areas with ATC clearance'
  ],
  correct: 0,
  explanation: 'CASR 91.640: aerobatic flight is prohibited over populated areas, over an open-air assembly of persons, within controlled airspace without ATC permission, or below the minimum height prescribed for the area.',
  reference: 'CASR 91.640'
},

{
  question: 'What is a "flight information region" (FIR) and who manages the Melbourne and Brisbane FIRs?',
  options: [
    'A. The Melbourne FIR is managed by CASA; Brisbane by Airservices',
    'B. An FIR is a restricted airspace — Airservices Australia manages Melbourne; RAAF manages Brisbane',
    'C. An FIR is a volume of airspace within which flight information and alerting services are provided; both the Melbourne and Brisbane FIRs are managed by Airservices Australia',
    'D. FIRs are ICAO-defined regions managed by individual airlines for their operations'
  ],
  correct: 2,
  explanation: 'AIP GEN 2.1 and ICAO: Australia is divided into the Melbourne and Brisbane FIRs. Both are managed by Airservices Australia, which provides flight information, alerting, and ATC services within them.',
  reference: 'AIP GEN 2.1'
},

{
  question: 'In a two-pilot charter operation starting at 0900, what is the maximum FDP?',
  options: [
    'A. 13 hours',
    'B. 14 hours',
    'C. 11 hours',
    'D. 12 hours'
  ],
  correct: 1,
  explanation: 'CAO 48.1: for a two-pilot crew in charter operations starting between 0800 and 1159 local, the maximum FDP is 14 hours. Single-pilot operations have reduced limits based on start time.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What visibility and cloud conditions are required to conduct Special VFR in a Class D CTR?',
  options: [
    'A. 1,500 m visibility and clear of cloud',
    'B. 3,000 m and 500 ft ceiling',
    'C. Any visibility as long as ATC approves',
    'D. 800 m visibility and clear of cloud for helicopters; 1,500 m and clear of cloud for aeroplanes'
  ],
  correct: 3,
  explanation: 'CASR 91.430: special VFR in a CTR requires a minimum flight visibility of 800 m for helicopters and 1,500 m for aeroplanes, and the pilot must remain clear of cloud and in sight of the surface.',
  reference: 'CASR 91.430'
},

{
  question: 'What does "track" mean as distinct from "heading" in navigation?',
  options: [
    'A. Track is the actual path of the aircraft over the ground; heading is the direction the nose of the aircraft is pointed',
    'B. Track applies only to IFR operations',
    'C. Track is the magnetic heading corrected for variation',
    'D. Track and heading are interchangeable terms'
  ],
  correct: 0,
  explanation: 'AIP ENR 3.1 and VFRG: "track" is the actual path made good over the ground, while "heading" is the direction in which the aircraft nose is pointing. They differ due to wind effect (drift).',
  reference: 'AIP ENR 3.1 / VFRG v8.3'
},

{
  question: 'What does "AFFIRM" mean in ICAO radiotelephony?',
  options: [
    'A. Proceed with the action',
    'B. Yes',
    'C. I understand your message',
    'D. Cleared as requested'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "AFFIRM" means "Yes." It is used in radiotelephony to give an affirmative response. "NEGATIVE" is used for no.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'When must a Mode S transponder with Extended Squitter (ADS-B Out) be operated in Australian airspace?',
  options: [
    'A. ADS-B is not yet mandatory in Australia',
    'B. Only for commercial aircraft above 5,700 kg',
    'C. Only above FL290 in RVSM airspace',
    'D. In designated ADS-B mandatory airspace as published in AIP ENR 1.6 — broadly Class A, C, and E above specified altitudes'
  ],
  correct: 3,
  explanation: 'CASR 91.510 and AIP ENR 1.6: ADS-B Out (1090 ES) is mandatory in airspace designated in AIP ENR 1.6, which includes Class A airspace and specified Class C and E airspace above certain altitudes. Requirements are progressively expanding.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'What are the VMC minima for VFR flight in Class D airspace?',
  options: [
    'A. 5,000 m visibility; 1,000 ft vertically and 1,500 m horizontally from cloud',
    'B. Same as Class C: 5,000 m / 1,000ft above / 500 ft below / 1 NM horizontal',
    'C. 8,000 m visibility and 1,000 ft cloud clearance',
    'D. 3,000 m visibility; clear of cloud'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class D airspace, VFR flight requires 5,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM (approximately 1,852 m) horizontally.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'What is an "ATC route clearance" and how is it different from a "level clearance"?',
  options: [
    'A. They are identical; a route clearance includes all level assignments',
    'B. Level clearances are issued only in Class A airspace',
    'C. Route clearances are verbal; level clearances must be in writing',
    'D. A route clearance authorises the lateral path of the flight; a level clearance authorises a specific altitude or flight level — both are required and both must be read back'
  ],
  correct: 3,
  explanation: 'CASR 91.555 and AIP ENR 6.1: ATC route clearances cover the lateral path; level clearances (altitude instructions) cover vertical profile. Both are mandatory read-back items and must be complied with separately.',
  reference: 'CASR 91.555 / AIP ENR 6.1'
},

{
  question: 'What is the purpose of the "GUARD" frequency 121.5 MHz?',
  options: [
    'A. The ADS-B datalink frequency',
    'B. A CTAF frequency used at uncontrolled aerodromes',
    'C. A military-only discrete frequency',
    'D. The international aeronautical emergency and distress frequency, monitored by all aircraft and ATC units'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 and ICAO Annex 10: 121.5 MHz is the international VHF emergency frequency. All aircraft are recommended to monitor 121.5 MHz when radio capacity allows, and all ATC units monitor it continuously.',
  reference: 'AIP ENR 6.1 / ICAO Annex 10'
},

{
  question: 'In Class G airspace below 3,000 ft AMSL at night, what are the VMC requirements?',
  options: [
    'A. 5,000 m visibility; clear of cloud',
    'B. Same as day: 1,500 m visibility, clear of cloud',
    'C. 3,000 m visibility; 1,000 ft above, 500 ft below, 600 m horizontal cloud clearance',
    'D. 1,500 m visibility; 500 ft vertical and 600 m horizontal cloud clearance'
  ],
  correct: 2,
  explanation: 'CASR 91.615 Table 91.615: night VFR in Class G below 3,000 ft AMSL requires 3,000 m visibility and cloud clearance of 1,000 ft above, 500 ft below, and 600 m horizontal.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What does "command time" mean and how much is required for a CPL?',
  options: [
    'A. Time as PIC — 70 hours total PIC time is required for a CPL',
    'B. Only time in aircraft with a type rating',
    'C. Any time in the pilot seat, including dual',
    'D. Time as PIC or student PIC (supervised solo) — a minimum of 70 hours PIC time is required for CPL'
  ],
  correct: 3,
  explanation: 'CASR 61.390: to qualify for a CPL, a pilot must have completed at least 70 hours as pilot-in-command (PIC), including both solo and supervised solo (student PIC) time.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'What transponder code indicates unlawful interference (hijack)?',
  options: [
    'A. 7600',
    'B. 7700',
    'C. 7500',
    'D. 7000'
  ],
  correct: 2,
  explanation: 'CASR 91.335 and AIP ENR 1.6: transponder code 7500 signals unlawful interference (hijack). 7700 = general emergency; 7600 = communication failure; 7000 = VFR conspicuity code.',
  reference: 'CASR 91.335 / AIP ENR 1.6'
},

{
  question: 'What minimum equipment must a VFR aircraft have to enter Class C airspace?',
  options: [
    'A. An RNAV system and GPS',
    'B. Two-way radio, serviceable Mode C transponder, and any required navigation equipment for the route',
    'C. Two-way radio and Mode C transponder only',
    'D. ILS receiver and DME'
  ],
  correct: 1,
  explanation: 'CASR 91.410 and AIP ENR 1.6: to operate in Class C airspace, an aircraft must have a serviceable two-way radio, a Mode C altitude-reporting transponder, and navigation equipment adequate for the route.',
  reference: 'CASR 91.410 / AIP ENR 1.6'
},

{
  question: 'What must a pilot do if their medical condition changes in a way that may affect their fitness to fly?',
  options: [
    'A. Report the change at the next annual examination only',
    'B. Continue flying until the next scheduled medical examination',
    'C. Notify CASA\'s Designated Aviation Medical Examiner (DAME) and not exercise licence privileges until assessed as fit',
    'D. Self-certify fitness if symptoms are mild'
  ],
  correct: 2,
  explanation: 'CASR Part 67: pilots must not exercise licence privileges if they know or reasonably believe their medical fitness is compromised. They must advise their DAME and not fly until assessed as meeting the class of medical certificate required.',
  reference: 'CASR Part 67'
},

{
  question: 'What is the correct action when ATC issues "TRAFFIC ALERT — TRAFFIC IS [bearing] [distance] MILES, [altitude]"?',
  options: [
    'A. Descend 1,000 ft to increase vertical separation',
    'B. Turn 90 degrees away from the traffic immediately',
    'C. Squawk 7700 immediately',
    'D. Acknowledge the call and look for the traffic visually; advise ATC when traffic is in sight or if unable to acquire'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.1 and CASR 91.230: when ATC issues a traffic advisory, the pilot should acknowledge, scan for the traffic visually, and report to ATC whether the traffic is in sight. The see-and-avoid principle applies.',
  reference: 'AIP ENR 1.1 / CASR 91.230'
},

{
  question: 'What speed restriction applies to aircraft on approach to land below 10,000 ft?',
  options: [
    'A. No speed limit applies on approach',
    'B. 250 KIAS',
    'C. 300 KIAS',
    'D. 200 KIAS'
  ],
  correct: 1,
  explanation: 'CASR 91.660 and 91.665: below 10,000 ft the 250 KIAS limit applies. Additionally, within 4 NM of a Class C or D aerodrome at or below 2,500 ft, the limit is 200 KIAS. ATC may also issue specific speed instructions.',
  reference: 'CASR 91.660 / 91.665'
},

{
  question: 'What is a "TRA" (Temporary Reserved Airspace) and how is activation notified?',
  options: [
    'A. A TRA is airspace temporarily reserved for a specific operation (e.g. military exercises); activation is via NOTAM published in NAIPS',
    'B. A TRA is a special VFR clearance area',
    'C. A TRA is permanent restricted airspace; activation is via ERSA',
    'D. A TRA requires a CASA exemption to enter'
  ],
  correct: 0,
  explanation: 'AIP ENR 5.1 and AIP RAC: Temporary Reserved Airspace is designated for specific operations (military, skydiving, airshows) and its activation is notified by NOTAM through NAIPS. Civil aircraft may enter when the TRA is not active.',
  reference: 'AIP ENR 5.1 / NAIPS'
},

{
  question: 'What action must a pilot take if they discover their transponder has become unserviceable in flight within controlled airspace?',
  options: [
    'A. Land immediately at the nearest aerodrome',
    'B. Notify ATC as soon as practicable; ATC will advise whether the flight may continue or will provide alternative instructions',
    'C. Squawk 7700 until landing',
    'D. File an ASIR immediately while airborne'
  ],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: if a transponder becomes unserviceable in flight in controlled airspace, the pilot must notify ATC as soon as practicable. ATC will determine whether the flight may continue and may issue revised instructions.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'What is a "special use airspace" designation?',
  options: [
    'A. Airspace with specific limitations, restrictions, or warnings applied, including Restricted Areas, Danger Areas, and Military Operating Areas',
    'B. Airspace below the transition layer only',
    'C. Class C airspace around major airports',
    'D. Airspace reserved for airline operations only'
  ],
  correct: 0,
  explanation: 'AIP ENR 5.1: special use airspace includes areas with defined dimensions where activities must be confined because of their nature, or where limitations are imposed on aircraft not participating in those activities, such as Restricted, Prohibited, and Danger Areas.',
  reference: 'AIP ENR 5.1'
},

{
  question: 'What is a "serious incident" under the Transport Safety Investigation Act?',
  options: [
    'A. Any flight requiring emergency services attendance',
    'B. Any aircraft damage exceeding $1,000',
    'C. Any engine failure during flight',
    'D. An occurrence involving circumstances indicating that an accident nearly occurred — not meeting the definition of accident but involving significant risk'
  ],
  correct: 3,
  explanation: 'Transport Safety Investigation Act 2003 s.3: a serious incident is an occurrence other than an accident that involves circumstances indicating there was a high probability of an accident and that is associated with the operation of an aircraft.',
  reference: 'Transport Safety Investigation Act 2003 s.3 / AIP GEN 3.3'
},

{
  question: 'An ATC speed instruction reads "MAINTAIN 250 KNOTS." What does this mean?',
  options: [
    'A. Fly 250 KIAS groundspeed',
    'B. Maintain 250 KIAS until the next instruction',
    'C. Reduce to 250 KIAS then reduce further for approach',
    'D. Maintain at least 250 KIAS'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "MAINTAIN [speed]" means maintain the specified airspeed until ATC issues a new instruction or the aircraft is on final approach. Speed instructions are always in terms of IAS unless otherwise stated.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Is the electronic (digital) form of a certificate of airworthiness acceptable during a ramp check by an authorised officer?',
  options: [
    'A. An approved electronic copy may be acceptable if CASA has approved the format; operators should check their operations manual',
    'B. Only a paper original is acceptable',
    'C. Electronic documents are never acceptable for ramp checks',
    'D. A photograph on a mobile phone always satisfies the requirement'
  ],
  correct: 0,
  explanation: 'CASR 91.785: documents may be carried in approved electronic form if CASA accepts the format. Operators under AOCs should check their manuals. The authorised officer must still be able to inspect the document.',
  reference: 'CASR 91.785'
},

{
  question: 'When does a pitot-static system test become mandatory?',
  options: [
    'A. Before an aircraft is used on IFR operations, after maintenance that could affect the system, or per the maintenance schedule',
    'B. Only after repairs to the airframe',
    'C. Every 6 months regardless of operations',
    'D. After every 100 hours of flight'
  ],
  correct: 0,
  explanation: 'Part 91 MOS s.26.12 and CASR 91.610: the pitot-static and altimeter system must be tested before IFR use and after maintenance that may affect the system. Test intervals are also specified in the aircraft maintenance schedule.',
  reference: 'Part 91 MOS 2020 s.26.12'
},

{
  question: 'What is "Class B airspace" and does it exist in Australia?',
  options: [
    'A. Class B is used around all Australian capital cities',
    'B. Class B airspace is an ICAO-defined class that is not currently used in Australia',
    'C. Class B is above FL600 in Australia',
    'D. Class B is used in military terminal areas only'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1: ICAO defines airspace Classes A through G. Australia does not currently designate any airspace as Class B. Australian airspace uses Classes A, C, D, E, and G.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What does an ATC clearance "CLEARED TO [fix] VIA [route]" authorise the pilot to do?',
  options: [
    'A. Fly to the fix via any route at the pilot\'s discretion',
    'B. Fly directly to the fix by the shortest route',
    'C. Fly the IFR departure procedure then proceed direct',
    'D. Fly to the specified fix via the specified route only; no deviation from the route is authorised without a new clearance'
  ],
  correct: 3,
  explanation: 'CASR 91.155 and AIP ENR 6.1: an ATC route clearance specifying a fix and route authorises the pilot to fly only the stated route to the fix. Deviations require an amended clearance from ATC.',
  reference: 'CASR 91.155 / AIP ENR 6.1'
},

{
  question: 'What is the significance of a NOTAM that activates a Restricted Area along your planned route?',
  options: [
    'A. NOTAMs are advisory only and the pilot may proceed',
    'B. ATC will automatically route you around any Restricted Area',
    'C. A Restricted Area may be transited at night without authorisation',
    'D. If the Restricted Area is active during your planned route transit, you must either avoid it or obtain permission from the controlling authority before entry'
  ],
  correct: 3,
  explanation: 'CASR 91.185 and AIP ENR 5.1: an active Restricted Area is legally restricted airspace. The pilot must either plan to avoid it or obtain permission from the designated authority before entry.',
  reference: 'CASR 91.185 / AIP ENR 5.1'
},

{
  question: 'How often is an ATIS broadcast updated?',
  options: [
    'A. Every hour, on the hour',
    'B. Only when the runway changes',
    'C. Whenever significant changes occur in the meteorological conditions, aerodrome state, or operational information, or at a minimum when a new hourly observation is available',
    'D. Every 30 minutes at major airports only'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.7: ATIS is updated whenever there is a significant change in the information (weather, runway, QNH, etc.) or when a new hourly weather observation becomes available. Each update receives a new sequential alphabetical identifier.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'What is the minimum cross-country experience required for a CPL?',
  options: [
    'A. 50 hours',
    'B. 30 hours',
    'C. 100 hours',
    'D. 20 hours'
  ],
  correct: 2,
  explanation: 'CASR 61.390 Table 61.390: a CPL applicant must have a minimum of 100 hours cross-country flight time, of which at least 20 hours are as PIC.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'A pilot is cleared to "DESCEND TO FLIGHT LEVEL 150." At what point should the pilot commence the descent?',
  options: [
    'A. Immediately upon receiving the instruction',
    'B. Only after reading back the clearance and receiving "READBACK CORRECT"',
    'C. At the pilot\'s discretion, within the next 10 minutes',
    'D. ATC will specify a "WHEN READY" qualifier if the pilot has discretion — otherwise commence immediately on clearance'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: unless qualified by "WHEN READY," "IMMEDIATELY," or a specific time/fix, a descent clearance should be commenced promptly after readback. ATC will add qualifiers if timing is important.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What VMC minimum applies to VFR flight in Class G at or above 10,000 ft AMSL?',
  options: [
    'A. 3,000 m and clear of cloud',
    'B. VFR is not permitted above FL100 in Class G',
    'C. 5,000 m visibility; 1,000 ft above, 500 ft below, 600 m horizontal',
    'D. 8,000 m visibility; 1,000 ft vertical and 1 NM horizontal cloud clearance'
  ],
  correct: 3,
  explanation: 'CASR 91.615 Table 91.615: in Class G airspace at or above 10,000 ft AMSL, the minimum is 8,000 m flight visibility and cloud clearance of 1,000 ft vertically and 1 NM horizontally.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'May Special VFR be conducted at night?',
  options: [
    'A. Yes, with ATC permission at any time',
    'B. SVFR at night is permitted only if visibility exceeds 3 km',
    'C. Special VFR is not permitted at night unless the operator holds an approved Special VFR at Night procedure or the aircraft is a helicopter',
    'D. SVFR is available at night only in Class D'
  ],
  correct: 2,
  explanation: 'CASR 91.430: Special VFR at night is generally not available to fixed-wing aircraft unless specific operational approval exists. Helicopters may be granted SVFR at night under certain conditions with ATC approval.',
  reference: 'CASR 91.430'
},

{
  question: 'What is the standard CTAF frequency at a non-controlled aerodrome and where is it published?',
  options: [
    'A. 121.5 MHz at all non-controlled aerodromes',
    'B. Individual to each aerodrome — published in the ERSA entry for that aerodrome',
    'C. 126.7 MHz for all Australian aerodromes',
    'D. 122.8 MHz nationally'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.4 and ERSA: each non-controlled aerodrome has its own CTAF (Common Traffic Advisory Frequency), published in its ERSA entry. Some remote aerodromes use 126.7 MHz but this is not universal.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'What is the "recency" requirement for solo circuit operations as a student pilot?',
  options: [
    'A. 1 flight in the preceding 14 days',
    'B. 3 take-offs and landings in the preceding 90 days',
    'C. Determined by the flight instructor; there is no CASR-defined fixed recency period for student pilots',
    'D. 5 flights in the preceding 30 days'
  ],
  correct: 2,
  explanation: 'CASR Part 61: student pilots operating under a solo endorsement are subject to the conditions set by their instructor. The instructor determines recency requirements and currency for solo flight; there is no fixed statutory period equivalent to the 90-day rule for PPL/CPL.',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'What does a "D" prefix on an airspace designation (e.g. D123A) indicate?',
  options: [
    'A. The airspace is a Defence area',
    'B. The airspace is a Danger Area',
    'C. The airspace is Class D controlled airspace',
    'D. The airspace is domestic use only'
  ],
  correct: 1,
  explanation: 'AIP ENR 5.1: the prefix "D" followed by a number indicates a Danger Area. "R" indicates a Restricted Area and "P" indicates a Prohibited Area.',
  reference: 'AIP ENR 5.1'
},

{
  question: 'What is the minimum age to hold a Private Pilot Licence in Australia?',
  options: [
    'A. 18 years',
    'B. 16 years',
    'C. 17 years',
    'D. 15 years'
  ],
  correct: 2,
  explanation: 'CASR 61.160: to be granted a Private Pilot Licence the applicant must be at least 17 years of age at the time of the licence grant.',
  reference: 'CASR 61.160'
},

{
  question: 'What does the phrase "cruise clearance" mean in an IFR context?',
  options: [
    'A. Permission to fly at any altitude from the base to the top of the assigned block',
    'B. A clearance issued only on oceanic tracks',
    'C. Clearance to cruise at a specific level on the cleared route',
    'D. Authority to fly VFR for the cruise portion of the flight'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: a "cruise clearance" authorises the pilot to climb to and operate at any level within a specified altitude block, conducting approaches and landing at en-route aerodromes en route without further clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'How is Class E airspace floor designated in Australia where it meets Class G?',
  options: [
    'A. Class E and G never coexist; one always terminates where the other begins',
    'B. Class E always starts at 8,500 ft AMSL',
    'C. The Class E floor is published on aeronautical charts and varies by location; it may be 8,500 ft AMSL or lower in some areas',
    'D. Class E begins at FL180 in all cases'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.4 and Australian aeronautical charts: the Class E floor varies by location and is depicted on ERC and VNC charts. Common values are 8,500 ft AMSL in remote Australia, but it may be lower in published terminal areas.',
  reference: 'AIP ENR 1.4 / ERC Charts'
},

{
  question: 'What is the difference between "PAN-PAN" and "MAYDAY"?',
  options: [
    'A. PAN-PAN is used for weather; MAYDAY for mechanical failure',
    'B. PAN-PAN is the radio call; MAYDAY is the transponder code',
    'C. MAYDAY is used IFR; PAN-PAN is used VFR',
    'D. MAYDAY indicates grave and imminent danger requiring immediate assistance; PAN-PAN indicates an urgent situation that requires priority but is not immediately life-threatening'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: MAYDAY is the distress call for grave and imminent danger. PAN-PAN is the urgency call for an urgent situation concerning the safety of an aircraft or occupant, but not requiring immediate assistance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is a "daily inspection" and who may perform it?',
  options: [
    'A. An avionics check performed by licensed personnel only',
    'B. A full maintenance check performed by a LAME once a day',
    'C. An inspection required only for turbine-engine aircraft',
    'D. A pilot-conducted pre-flight check using the aircraft\'s approved checklist to verify airworthiness before the first flight of the day'
  ],
  correct: 3,
  explanation: 'CASR 91.730 and aircraft flight manuals: the daily inspection (or pre-flight inspection) is conducted by the pilot-in-command before the first flight of the day using the approved checklist or AFM procedures.',
  reference: 'CASR 91.730 / Aircraft AFM'
},

{
  question: 'Can a pilot taxi across a runway without receiving a specific crossing clearance if the tower has issued a "taxi to" instruction that routes across that runway?',
  options: [
    'A. Yes if visibility is greater than 5 km',
    'B. Yes — the taxi instruction covers all crossings',
    'C. Yes if the runway is not active',
    'D. No — explicit runway crossing clearances must be obtained for every runway, regardless of the taxi instruction'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 and CASR 91.495: a taxi instruction NEVER implicitly authorises crossing a runway. Every runway crossing requires a specific, explicit clearance from ATC. This is a critical runway incursion prevention requirement.',
  reference: 'AIP ENR 6.1 / CASR 91.495'
},

{
  question: 'Under what circumstances may a pilot fly closer to a public assembly than the minimum prescribed distance?',
  options: [
    'A. With a CPL and instrument rating',
    'B. If flying above 3,000 ft AGL',
    'C. With the event organiser\'s verbal approval',
    'D. Only with written permission from CASA or under an exemption'
  ],
  correct: 3,
  explanation: 'CASR 91.235: flight over or in the vicinity of a public assembly closer than the prescribed minimum distance is only permitted with written authorisation from CASA or under an applicable CASA exemption.',
  reference: 'CASR 91.235'
},

{
  question: 'What does "split duty" mean and under what conditions is it permitted?',
  options: [
    'A. Part-time employment in aviation',
    'B. Two pilots sharing the controls during flight',
    'C. An arrangement where a duty period is split into two parts separated by a rest break of at least 3 hours, enabling a longer total FDP',
    'D. Operating two aircraft on alternate days'
  ],
  correct: 2,
  explanation: 'CAO 48.1: split duty allows the total FDP to be extended when a rest break of at least 3 hours (with sleep opportunity) is taken during the FDP. The total FDP must still not exceed the prescribed maximum.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What service does an FIS (Flight Information Service) officer provide to VFR pilots in Class G airspace?',
  options: [
    'A. Radar vectoring to destination',
    'B. Traffic information, SIGMET/AIRMET briefings, and other flight information on request — but not separation',
    'C. ATC separation from all traffic',
    'D. Mandatory route deconfliction'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1 and AIP GEN: in Class G airspace, an FIS officer can provide traffic information, weather updates, NOTAM information, and other flight safety information on pilot request. No ATC separation is provided.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What must a pilot do if they cannot produce their licence to an authorised officer during a ramp check?',
  options: [
    'A. The officer must ground the aircraft regardless of circumstances',
    'B. The flight must be cancelled immediately',
    'C. The officer may permit the flight to proceed if the pilot can verify identity and the licence is confirmed as current by other means, but the pilot may be issued an infringement notice',
    'D. Carry on — the licence does not need to be physically present'
  ],
  correct: 2,
  explanation: 'CASR 91.795 and Civil Aviation Act 1988: the pilot commits an offence by not having their licence available. The authorised officer may take further action. In practice, CASA may pursue an infringement or further investigation.',
  reference: 'CASR 91.795 / Civil Aviation Act 1988'
},

{
  question: 'What is the purpose of the "TRAFFIC" broadcast at an uncontrolled aerodrome?',
  options: [
    'A. To alert other traffic in the circuit or on the ground to the pilot\'s position and intentions, supporting the see-and-avoid principle',
    'B. To obtain departure clearance from ATC',
    'C. To request ATC radar separation',
    'D. To replace the requirement for a SARTIME'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.4: radio broadcasts on CTAF at uncontrolled aerodromes give other pilots positional awareness of your aircraft and intentions. This supports the see-and-avoid principle where no ATC separation exists.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'How many take-offs and landings must a PPL or CPL holder complete in the preceding 90 days to carry passengers in an aeroplane?',
  options: [
    'A. 1',
    'B. 6',
    'C. 5',
    'D. 3'
  ],
  correct: 3,
  explanation: 'CASR 61.395: to carry passengers in an aeroplane, the pilot must have completed at least 3 take-offs and landings as PIC in the same category and class within the preceding 90 days.',
  reference: 'CASR 61.395'
},

{
  question: 'What is an "MBZ" (Mandatory Broadcast Zone) in Australia?',
  options: [
    'A. A military exclusion zone',
    'B. A zone where ATC instructions are mandatory for all aircraft',
    'C. An area where Mode C transponder use is compulsory',
    'D. Airspace around certain non-controlled aerodromes where radio broadcasts by pilots are mandatory, providing awareness to other traffic'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4 and ERSA: a Mandatory Broadcast Zone (MBZ) is airspace around a non-controlled aerodrome where radio broadcasts on the specified frequency are mandatory for all aircraft. It replaces the need for the CTAF call at some lower-traffic aerodromes.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'When may a pilot fly below the minimum height prescribed by CASR 91.645?',
  options: [
    'A. Never — minimum heights are absolute',
    'B. In daylight hours only if visibility exceeds 5 km',
    'C. During take-off and landing, or when specifically authorised by CASA for operations such as agricultural, search and rescue, mustering, or firefighting',
    'D. Always in Class G airspace'
  ],
  correct: 2,
  explanation: 'CASR 91.305 and 91.645: minimum heights may be departed from during take-off and landing and in operations specifically permitted by CASA exemption, such as aerial application, aerial survey, mustering, firefighting, and SAR.',
  reference: 'CASR 91.305 / 91.645'
},

{
  question: 'What does "NEGATIVE CONTACT" mean in response to a traffic advisory?',
  options: [
    'A. The pilot has not established visual contact with the traffic described in the advisory',
    'B. The pilot cannot accept the clearance',
    'C. The pilot has visual contact with the traffic',
    'D. The pilot has established radar contact'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.1: "NEGATIVE CONTACT" in response to a traffic advisory means the pilot has been unable to visually identify the traffic described. ATC will continue to provide traffic information.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What record must a pilot keep to demonstrate currency for night passenger-carrying operations?',
  options: [
    'A. No records are required; currency is self-certified',
    'B. A pilot logbook containing entries for night take-offs and landings completed in the preceding 90 days',
    'C. A letter from the flight school confirming currency',
    'D. A statutory declaration signed by a DAME'
  ],
  correct: 1,
  explanation: 'CASR 61.015 and 61.395: pilot logbooks are the primary legal record of flight experience and currency. Night recency (3 take-offs and landings at night within 90 days) must be demonstrated through the pilot\'s logbook entries.',
  reference: 'CASR 61.015 / 61.395'
},

{
  question: 'What does a controller mean when they say "CONFIRM SQUAWK"?',
  options: [
    'A. Select a new transponder code',
    'B. Turn off the transponder',
    'C. The controller is asking the pilot to confirm what transponder code is currently selected',
    'D. Transmit ident'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "CONFIRM SQUAWK" is a request for the pilot to state the transponder code currently set. The correct response is to read back the code selected on the transponder.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'May an aircraft exceed 250 KIAS below 10,000 ft if ATC instructs it to?',
  options: [
    'A. No — 250 KIAS is an absolute limit below 10,000 ft and ATC may not waive it',
    'B. Yes — jet aircraft may exceed 250 KIAS at any time with ATC clearance',
    'C. Yes — but only if ATC issues the instruction for safety or sequence, and only in the specific ATC instruction context',
    'D. Yes — ATC instructions always override speed limits'
  ],
  correct: 2,
  explanation: 'CASR 91.660 and AIP ENR 6.1: ATC may issue speed instructions that result in speeds above 250 KIAS below 10,000 ft in specific circumstances (e.g. arrival sequencing in Class C). The speed limit may be waived by ATC where separation and safety require it.',
  reference: 'CASR 91.660 / AIP ENR 6.1'
},

{
  question: 'What is required before a pilot may act as PIC of a multi-engine aircraft?',
  options: [
    'A. A multi-engine class rating endorsed on the pilot\'s licence, plus appropriate recent experience',
    'B. An ATPL only',
    'C. A multi-engine instrument rating is always required',
    'D. A type rating for every specific twin-engine type'
  ],
  correct: 0,
  explanation: 'CASR Part 61: to act as PIC of a multi-engine aircraft, a pilot must hold a multi-engine class rating endorsed on their licence, in addition to any applicable type rating and the appropriate level licence (PPL, CPL, etc.).',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'Which class of airspace in Australia does NOT require a clearance for VFR entry?',
  options: [
    'A. Class G',
    'B. Class C',
    'C. Class D',
    'D. Class A'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1: Class G is uncontrolled airspace. No ATC clearance is required for entry. Classes A, C, and D require an ATC clearance (A = IFR only; C and D = clearance required for VFR).',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What is the primary purpose of ATC separation in controlled airspace?',
  options: [
    'A. To prevent bird strikes',
    'B. To prevent collisions between aircraft by maintaining prescribed minimum horizontal and vertical distances',
    'C. To ensure pilots stay on their filed routes only',
    'D. To manage fuel efficiency across the network'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1 / ICAO Annex 2: the purpose of ATC separation is to prevent collisions between aircraft by maintaining prescribed minimum separation standards (horizontal and/or vertical) between aircraft under ATC control.',
  reference: 'AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'What is the correct standard phraseology for an aircraft vacating a runway at a controlled aerodrome?',
  options: ['"[Callsign], clear of runway [number], taxiing to [destination]"', '"[Callsign], runway vacated"', '"[Callsign], off [runway number]"', '"Runway [number] clear, [callsign]"'],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: the standard phraseology upon vacating a runway is "[Callsign], runway vacated." ATC requires this to confirm the runway is clear before issuing clearances to other aircraft.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What does a "line up and wait" instruction authorise a pilot to do?',
  options: [
    'A. Enter the runway, align with the centreline, and hold position — no take-off is authorised until a separate take-off clearance is received',
    'B. Take off immediately',
    'C. Hold position at the runway holding point outside the runway',
    'D. Back-track on the runway to the holding point'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "LINE UP AND WAIT" (or "CLEARED FOR IMMEDIATE TAKE-OFF" if take-off is authorised) instructs the pilot to enter the runway and align on the centreline but does not authorise take-off. Take-off requires a separate explicit clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'When two aircraft are converging at the same level, which aircraft gives way?',
  options: [
    'A. The aircraft on the left gives way to the aircraft on the right',
    'B. The faster aircraft gives way to the slower',
    'C. The aircraft with the higher flight number gives way',
    'D. The heavier aircraft has right of way'
  ],
  correct: 0,
  explanation: 'CASR 91.330: when two aircraft are converging at approximately the same altitude, the aircraft that has the other on its right must give way. The aircraft on the right has right of way.',
  reference: 'CASR 91.330'
},

{
  question: 'What rule applies when two aircraft are approaching head-on?',
  options: [
    'A. Both aircraft alter course to the right',
    'B. Both aircraft turn left',
    'C. The aircraft with the most fuel gives way',
    'D. The larger aircraft maintains course; the smaller gives way'
  ],
  correct: 0,
  explanation: 'CASR 91.325: when two aircraft are approaching head-on or approximately so and there is risk of collision, both pilots must alter course to the right.',
  reference: 'CASR 91.325'
},

{
  question: 'What is the right-of-way rule for an aircraft in distress?',
  options: [
    'A. Only IFR aircraft in distress have right of way',
    'B. No special right of way exists; standard rules apply',
    'C. An aircraft in distress has right of way over all other aircraft',
    'D. An aircraft in distress has priority access but must still give way to aircraft on final'
  ],
  correct: 2,
  explanation: 'CASR 91.340 and ICAO Annex 2: an aircraft in distress has right of way over all other aircraft. All other pilots must give way and render assistance if required.',
  reference: 'CASR 91.340 / ICAO Annex 2'
},

{
  question: 'What does an "airways clearance" include as a minimum?',
  options: [
    'A. Departure time, level, and squawk code only',
    'B. Aircraft identification, clearance limit, route, level, and any other conditions',
    'C. Destination, route, and fuel load',
    'D. Route and take-off time'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: an ATC route clearance includes as a minimum: aircraft identification, clearance limit, departure procedure (SID if applicable), route to the clearance limit, level instructions, and any other conditions such as squawk code and speed.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is a "compulsory reporting point" (CRP) and how is it depicted on en-route charts?',
  options: [
    'A. A CRP is a holding fix; depicted as a racetrack symbol',
    'B. A CRP is a fix at which an ATC position report is mandatory for IFR flights; depicted as a solid triangle on charts',
    'C. A CRP is optional; depicted as an open triangle',
    'D. A CRP applies only to oceanic operations'
  ],
  correct: 1,
  explanation: 'AIP ENR 3.1: compulsory reporting points (CRPs) are fixes at which IFR position reports are mandatory. They are depicted as solid (filled) triangles on ERC charts. On-request reporting points (non-compulsory) are depicted as open triangles.',
  reference: 'AIP ENR 3.1 / ERC Charts'
},

{
  question: 'What is "traffic information" as provided by ATC or an FIS officer?',
  options: [
    'A. A clearance to maintain separation from the described traffic',
    'B. A binding instruction to take evasive action',
    'C. Information given to a pilot about known or observed traffic which may be in proximity to their position or intended route, for awareness only',
    'D. A TCAS-equivalent alert'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.1 / ICAO Doc 4444: traffic information is advisory information given to alert a pilot to other traffic. It does not constitute an instruction to manoeuvre and does not relieve the pilot of the see-and-avoid responsibility.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'What is the maximum period for which a journey log entry may be deferred after landing?',
  options: [
    'A. Entries must be completed before the next flight departure, or within 7 days for non-RPT operations',
    'B. Journey logs must be completed during flight',
    'C. 24 hours',
    'D. 72 hours'
  ],
  correct: 0,
  explanation: 'CASR 91.795: journey log (or technical log) entries must be completed within a period acceptable to CASA. For most operations, entries should be completed before the next flight, and in all cases within 7 days.',
  reference: 'CASR 91.795'
},

{
  question: 'May a CPL holder fly for private purposes (non-hire and reward) using only a CPL?',
  options: [
    'A. No — a CPL requires an AOC for all operations',
    'B. Only in aircraft under 1,000 kg MTOW',
    'C. Yes — a CPL holder may fly for private (non-commercial) purposes; the CPL includes all PPL privileges',
    'D. Only in Class G airspace'
  ],
  correct: 2,
  explanation: 'CASR 61.390: a CPL includes all privileges of a PPL. A CPL holder may exercise PPL privileges for private, non-commercial flying without being on hire and reward.',
  reference: 'CASR 61.390'
},

{
  question: 'What does "IDENT" mean when instructed by ATC?',
  options: [
    'A. Change your squawk code',
    'B. Press the transponder IDENT button, causing the aircraft\'s return to blossom on the controller\'s display for positive identification',
    'C. Identify yourself on radio',
    'D. Turn on ADS-B'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "IDENT" instructs the pilot to press the transponder IDENT button, which causes the radar return to highlight or blossom on the controller\'s display, enabling rapid positive identification of the aircraft.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'What are the VMC minima for VFR flight in Class E airspace at or below FL200?',
  options: [
    'A. 3,000 m and 500 ft vertical/600 m horizontal cloud clearance',
    'B. 8,000 m visibility; 1,000 ft vertical and 1 NM horizontal',
    'C. Clear of cloud and 1,500 m visibility',
    'D. 5,000 m visibility; 1,000 ft above, 500 ft below, 1 NM horizontal cloud clearance'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.2 Table ENR 1.2-1: in Class E airspace at or below FL200, VFR requires 5,000 m visibility and cloud clearance of 1,000 ft above, 500 ft below, and 1 NM horizontal.',
  reference: 'AIP ENR 1.2 Table ENR 1.2-1'
},

{
  question: 'What does an ATC instruction "REPORT FIELD IN SIGHT" require the pilot to do?',
  options: [
    'A. Reduce altitude to below cloud to confirm field sighting',
    'B. Advise ATC immediately when the destination aerodrome becomes visible',
    'C. Only report if IFR',
    'D. Commence a visual approach immediately upon sighting the field'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1: "REPORT FIELD IN SIGHT" instructs the pilot to notify ATC as soon as the aerodrome or its environment becomes visible. ATC typically uses this to transition the aircraft to a visual approach.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What is the prescribed blood alcohol limit for crew members in Australian aviation?',
  options: [
    'A. 0.10 g/210 L breath',
    'B. Zero tolerance — any alcohol is prohibited',
    'C. 0.05 g/210 L breath — the same as road transport',
    'D. 0.02 g/210 L breath (approximately 0.02 g/100 mL blood)'
  ],
  correct: 3,
  explanation: 'Civil Aviation Act 1988 s.30DB: the blood alcohol limit for aviation crew members is 0.02 g/210 L of breath (equivalent to approximately 0.02 g/100 mL blood). This is significantly lower than the 0.05 road transport limit.',
  reference: 'Civil Aviation Act 1988 s.30DB'
},

{
  question: 'What type of endorsement is required to fly formation?',
  options: [
    'A. Only an ATPL is required for formation flying',
    'B. A formation flight endorsement on the pilot\'s licence issued by a formation flying instructor',
    'C. A CASA exemption is required for every formation flight',
    'D. No endorsement is required for formation flight at any time'
  ],
  correct: 1,
  explanation: 'CASR Part 61 and CASR 91.635: to participate in formation flying, a pilot must hold a formation flying endorsement on their licence, having completed training with a qualified formation flying instructor.',
  reference: 'CASR Part 61 / CASR 91.635'
},

{
  question: 'What is the correct response when ATC says "RADAR CONTACT"?',
  options: [
    'A. Acknowledge and confirm position',
    'B. No response is required; continue as cleared',
    'C. "ROGER, RADAR CONTACT"',
    'D. Turn on the transponder IDENT'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: when ATC advises "RADAR CONTACT," the pilot should acknowledge with "ROGER" (or with their callsign). This confirms the controller has identified the aircraft on radar.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Is a pilot required to operate the altimeter on QNH or QFE when flying an approach at a controlled aerodrome in Australia?',
  options: [
    'A. ATC determines which setting is used on a per-flight basis',
    'B. QNH is the standard setting in Australia; QFE is not routinely used except as requested by some military operators',
    'C. Either QNH or QFE may be used at the pilot\'s discretion',
    'D. QFE (field elevation pressure setting) is standard at all controlled aerodromes'
  ],
  correct: 1,
  explanation: 'AIP ENR 4.1: in Australia, QNH (sea-level pressure) is the standard altimeter setting used below the transition altitude. QFE (aerodrome elevation datum) is not routinely promulgated by ATC in Australia, though pilots may request it.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'What is the definition of "controlled flight" in Australian aviation?',
  options: [
    'A. Any flight that is conducted within controlled airspace under an ATC clearance',
    'B. Only airline operations above FL180',
    'C. Any flight conducted under the provisions of the Instrument Flight Rules',
    'D. Any flight that has filed a flight plan'
  ],
  correct: 0,
  explanation: 'ICAO Annex 2 and AIP ENR 1.1: a "controlled flight" is any flight that is conducted within controlled airspace in compliance with an ATC clearance, whether the flight is IFR or VFR.',
  reference: 'AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'What is a pilot\'s obligation regarding fuel management during a flight?',
  options: [
    'A. Fuel checks are only required for IFR flights',
    'B. The PIC must monitor fuel consumption in flight to ensure adequate fuel remains to complete the flight safely, and must divert or reduce fuel burn as necessary',
    'C. Fuel is monitored by the operator only; the pilot handles aircraft control',
    'D. No in-flight fuel monitoring is required if departure fuel is correct'
  ],
  correct: 1,
  explanation: 'CASR 91.725: the PIC must monitor fuel consumption in flight and ensure sufficient fuel remains. If the fuel state deteriorates below planned levels, the PIC must take appropriate action such as diverting, declaring minimum fuel, or reducing power.',
  reference: 'CASR 91.725'
},

{
  question: 'What is the correct procedure when a pilot cannot raise ATC on the assigned frequency?',
  options: [
    'A. Try alternative frequencies, transmit blind on 121.5 MHz, squawk 7600 if communication failure is confirmed, and follow lost communications procedures',
    'B. Disable the transponder to attract radar attention',
    'C. Land immediately at the nearest aerodrome',
    'D. Squawk 7700 and continue as cleared'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.6 and Part 91 MOS s.11.06: when communication cannot be established, the pilot should try all available frequencies, broadcast blind on 121.5 MHz, squawk 7600 to indicate comms failure, and then follow the lost communications procedures.',
  reference: 'AIP ENR 1.6 / Part 91 MOS s.11.06'
},

{
  question: 'What is the pilot\'s obligation regarding the use of seat belts and shoulder harnesses during flight?',
  options: [
    'A. All occupants must wear seat belts whenever seated; the PIC must ensure compliance before and during flight — shoulder harnesses must be used during take-off and landing if installed',
    'B. Seat belts are advisory only for adult passengers',
    'C. Seat belts are only required during take-off and landing',
    'D. Only the PIC is required to wear a seat belt'
  ],
  correct: 0,
  explanation: 'CASR 91.310: the PIC must ensure all occupants are wearing seat belts during flight. Shoulder harnesses must be worn during take-off and landing where fitted. The PIC is legally responsible for ensuring compliance.',
  reference: 'CASR 91.310'
},

{
  question: 'What information would normally be included in an ATIS broadcast at a major controlled aerodrome?',
  options: [
    'A. Runway in use and wind only',
    'B. QNH only',
    'C. Information identifier, time of observation, wind, visibility, weather, cloud, temperature, dew point, QNH, active runways, NOTAMs relevant to the terminal area, and any other significant information',
    'D. Weather and departure clearances combined'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.7: an ATIS broadcast at a major aerodrome typically includes: information identifier (letter), observation time, wind direction and speed, visibility, significant weather, cloud layers, temperature, dew point, QNH, active runways, relevant NOTAMs, and any other pertinent operational information.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'An aircraft towing a glider is on approach. Which aircraft has right of way?',
  options: [
    'A. The aircraft with the most fuel remaining',
    'B. The faster aircraft has right of way',
    'C. The towing aircraft (and glider combination), which must be given way to by all other aircraft',
    'D. The glider has right of way in all circumstances'
  ],
  correct: 2,
  explanation: 'CASR 91.330 and ICAO Annex 2: an aircraft towing another aircraft or object has restricted manoeuvrability and must be given way to by other aircraft. In the approach context, the towing combination has priority.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'When should a pilot declare "FUEL EMERGENCY" (MAYDAY FUEL) rather than "MINIMUM FUEL"?',
  options: [
    'A. Fuel emergencies are not a recognised category; only MINIMUM FUEL exists',
    'B. When the calculated fuel remaining indicates the aircraft may not be able to land with the required reserve — a genuine emergency with immediate assistance required',
    'C. Whenever fuel is below the planned figure',
    'D. When fuel is below 30 minutes remaining'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1: a MAYDAY fuel emergency is declared when the fuel state has deteriorated to the point where the aircraft cannot land safely with the required reserve — requiring immediate ATC assistance. This is distinct from "MINIMUM FUEL" which is advisory.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Which aircraft is exempted from the 250 KIAS speed limit below 10,000 ft?',
  options: [
    'A. Aircraft that cannot comply with 250 KIAS in terms of performance (e.g. being unable to maintain controlled flight at 250 KIAS), and those operating in Class A airspace',
    'B. Heavy jet aircraft',
    'C. All turbine aircraft',
    'D. Any aircraft with an ATPL crew'
  ],
  correct: 0,
  explanation: 'CASR 91.660: aircraft that cannot comply with the 250 KIAS limit due to performance limitations are exempt. Aircraft operating in Class A airspace (IFR only) and those operating under specific ATC speed instructions may also exceed this limit in the circumstances specified.',
  reference: 'CASR 91.660'
},

{
  question: 'What is "QNH"?',
  options: [
    'A. The altimeter sub-scale setting (pressure in hPa) that would cause the altimeter to read altitude above mean sea level',
    'B. The pressure altitude corrected for temperature',
    'C. The altimeter setting that causes the altimeter to read aerodrome elevation when on the ground',
    'D. The standard pressure setting of 1013.25 hPa'
  ],
  correct: 0,
  explanation: 'AIP ENR 4.1: QNH is the altimeter sub-scale pressure setting that causes the altimeter to indicate height above mean sea level. At sea level, an aircraft set to QNH will read approximately 0 ft AMSL. Compare with QFE (reads 0 at the aerodrome elevation).',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Which licence grade gives the most restricted flying privileges in Australia?',
  options: [
    'A. Commercial Pilot Licence (CPL)',
    'B. Private Pilot Licence (PPL)',
    'C. Student Pilot Certificate (solo endorsement)',
    'D. Recreational Pilot Licence (RPL)'
  ],
  correct: 2,
  explanation: 'CASR Part 61: in ascending order of privilege, the licence/certificate grades are: Student (solo endorsement) → RPL → PPL → CPL → ATPL. A student pilot certificate has the most restricted privileges.',
  reference: 'CASR Part 61'
},

{
  question: 'What is a "sector safe altitude" (SSA) and how is it used?',
  options: [
    'A. The highest altitude in Class G airspace',
    'B. The minimum altitude for radar vectoring in a TMA',
    'C. An en-route minimum off-route altitude (MORA)',
    'D. The lowest altitude within a defined sector that provides at least 1,000 ft clearance above all obstacles, used for emergency obstacle avoidance'
  ],
  correct: 3,
  explanation: 'AIP ENR 4.5: the Sector Safe Altitude (SSA) for an instrument approach is the minimum altitude within a defined sector (usually a 25 NM radius from the aerodrome) that provides at least 1,000 ft clearance above all obstacles. It is used in emergencies and for situational awareness.',
  reference: 'AIP ENR 4.5'
},

{
  question: 'What is the purpose of the "ALT" (altitude reporting) function of a Mode C transponder?',
  options: [
    'A. It triggers an alert when the aircraft deviates from cleared altitude',
    'B. It reports the aircraft\'s QNH setting to ATC',
    'C. It transmits the aircraft\'s GPS coordinates to ATC',
    'D. It automatically transmits the aircraft\'s pressure altitude (derived from the encoding altimeter) to ATC radar displays, enabling altitude information to appear on the radar screen'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.6: Mode C altitude reporting transmits the aircraft\'s pressure altitude from the encoding altimeter to ATC. This appears on radar as a flight level or altitude alongside the aircraft\'s position, enabling ATC to provide vertical separation without voice reports.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'What type of service is provided by Airservices Australia\'s "Centre" (oceanic and remote area) controllers?',
  options: [
    'A. Procedural ATC separation (based on position reports) in areas without radar coverage, and radar separation in radar-covered areas',
    'B. Separation for IFR traffic in Class A above FL245 only',
    'C. Flight information service only; no separation in remote areas',
    'D. Radar separation only within 200 NM of the coast'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 and AIP GEN: in remote areas without radar coverage, Airservices Australia\'s En Route Centres provide procedural separation based on pilot position reports, time estimates, and flight plan data. Radar separation is provided in radar-covered areas.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'What does "VMC" stand for and what does it mean operationally?',
  options: [
    'A. Visual Meteorological Conditions — conditions equal to or better than the specified minima of visibility and cloud clearance for the airspace class',
    'B. Variable Meteorological Conditions — conditions that are changing',
    'C. Very Minimum Ceiling — the lowest cloud allowed for VFR',
    'D. Verified Meteorological Criteria — ATIS-confirmed weather'
  ],
  correct: 0,
  explanation: 'CASR 91.265: VMC means Visual Meteorological Conditions — weather conditions at or above the specified visibility and cloud clearance minima for the airspace in which the aircraft is operating, permitting flight under Visual Flight Rules.',
  reference: 'CASR 91.265'
},

{
  question: 'May the operator of an aircraft override a PIC\'s safety decision?',
  options: [
    'A. No — the PIC has final authority over the safety of the flight and may not be overridden by the operator on safety matters',
    'B. Yes — operators have full authority over all operational decisions',
    'C. Only for RPT operations where the operator holds an AOC',
    'D. Operators may override PICs on commercial matters; safety decisions are shared'
  ],
  correct: 0,
  explanation: 'CASR 91.165 and Civil Aviation Act 1988: the PIC has final authority over the safe operation of the aircraft. No operator, owner, or other person may override the PIC\'s decision in matters affecting flight safety.',
  reference: 'CASR 91.165 / Civil Aviation Act 1988'
},

{
  question: 'What does "STANDBY" mean when issued by ATC?',
  options: [
    'A. Hold current position until further clearance',
    'B. Maintain current altitude and heading',
    'C. Switch to the standby frequency',
    'D. Wait and I will call you — ATC cannot respond immediately but acknowledges the call'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "STANDBY" means "I must pause to deal with other matters and will return to you." It does not imply a clearance or an instruction — the pilot should wait for ATC to call back.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the minimum height for aerobatics over a non-populated area?',
  options: [
    'A. 3,000 ft AGL',
    'B. 1,000 ft AGL',
    'C. 1,500 ft AGL',
    'D. 500 ft AGL'
  ],
  correct: 1,
  explanation: 'CASR 91.640: aerobatic flight must not be conducted below 1,000 ft AGL over areas other than those specifically approved. Over populated areas it is prohibited regardless of height without specific authorisation.',
  reference: 'CASR 91.640'
},

{
  question: 'What does "IFR" stand for and where do Instrument Flight Rules generally apply?',
  options: [
    'A. Instrument Flight Requirements — apply above FL180 in Australia',
    'B. Instrument Flight Rules — the rules governing flight in IMC or flight conducted under an IFR clearance, applicable in all classes of airspace',
    'C. International Flight Regulations — apply only on international routes',
    'D. IFR stands for In-Flight Reporting — position report requirements only'
  ],
  correct: 1,
  explanation: 'CASR Part 91 and AIP ENR 1.1: IFR stands for Instrument Flight Rules. These rules govern flight when visual reference to the surface cannot be maintained and in all controlled airspace, requiring appropriate equipment, ratings, and ATC clearances.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'At what altitude must supplemental oxygen be available for passengers in an unpressurised aircraft?',
  options: [
    'A. Above 10,000 ft AMSL for all flights',
    'B. Above FL125 (approximately 12,500 ft) for flights exceeding 30 minutes; mandatory above FL140 for the duration',
    'C. Oxygen is only required for crew, not passengers',
    'D. Only above FL250 — passengers do not require oxygen below this'
  ],
  correct: 1,
  explanation: 'CASR 91.545 and Part 91 MOS s.26.16: for unpressurised aircraft, supplemental oxygen must be available for passengers when the aircraft operates above FL125 for more than 30 minutes. Above FL140, oxygen must be provided for passengers for the entire duration above that level.',
  reference: 'CASR 91.545 / Part 91 MOS 2020 s.26.16'
},

{
  question: 'What is the standard transition layer in Australia?',
  options: [
    'A. The layer of airspace between the transition altitude (10,000 ft AMSL in most of Australia) and the transition level (assigned by ATC based on QNH)',
    'B. FL180 to FL200 only',
    'C. A fixed 1,000 ft layer between 9,000 ft and FL100',
    'D. The transition layer is not formally defined in Australia'
  ],
  correct: 0,
  explanation: 'AIP ENR 4.1: the transition layer is the airspace between the transition altitude (10,000 ft AMSL standard in Australia) and the transition level (issued by ATC based on current QNH). Within this layer, climbing aircraft use QNH and descending aircraft use standard pressure.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'May a CPL holder conduct a passenger flight if the maintenance release has expired?',
  options: [
    'A. Only with written approval from the aircraft owner',
    'B. No — an aircraft with an expired maintenance release is not airworthy and must not be operated',
    'C. Yes for flights under 1 hour duration only',
    'D. Yes if the aircraft appears serviceable to the PIC'
  ],
  correct: 1,
  explanation: 'CASR 91.730: a valid maintenance release is a required element of airworthiness. An aircraft with an expired maintenance release is not considered airworthy and the PIC must not operate it.',
  reference: 'CASR 91.730'
},

{
  question: 'When should a pilot at a CTAF aerodrome make an "area" broadcast?',
  options: [
    'A. Only when entering the circuit',
    'B. Area broadcasts are not required at CTAF aerodromes',
    'C. Only when the weather is below VFR minima',
    'D. When approaching from the en-route phase, typically 10 NM or more out, to advise other traffic of the aircraft\'s position and intentions'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.4 and VFRG v8.3: an en-route area broadcast should be made approximately 10 NM from a CTAF aerodrome (or as prescribed). It includes aircraft type, callsign, position, altitude, and intention to land, alerting traffic in the area.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What does the pilot-in-command\'s "pre-flight action" obligation include?',
  options: [
    'A. Checking the aircraft logbook only',
    'B. Reviewing all available information relevant to the intended operation, including weather, NOTAMs, aircraft documents, fuel, performance, and planning',
    'C. Verifying the squawk code before departure',
    'D. Conducting only a walk-around check'
  ],
  correct: 1,
  explanation: 'CASR 91.275: the PIC must take all reasonable steps to obtain available information relevant to the flight, including weather reports and forecasts, NOTAMs, aerodrome information, fuel requirements, aircraft documents, and performance planning.',
  reference: 'CASR 91.275'
},

{
  question: 'What is a "clearance void time" in the context of an IFR departure from a non-controlled aerodrome?',
  options: [
    'A. The maximum time an aircraft may hold at the runway before landing',
    'B. The time by which the IFR clearance must be accepted and the departure commenced — if departure does not occur by this time, the clearance is void',
    'C. The time for filing an amended flight plan',
    'D. The time limit for cancelling a SARTIME'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 and CASR 91.155: a clearance void time is specified when an IFR departure clearance is issued for an aircraft at a non-controlled aerodrome. If the aircraft does not depart by the void time, the clearance expires and a new one must be obtained.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What action should a PIC take when the aircraft encounters severe turbulence?',
  options: [
    'A. Declare a MAYDAY immediately',
    'B. Increase speed to penetrate the turbulence faster',
    'C. Reduce speed to the turbulence penetration speed (or manoeuvring speed Va), if possible avoid the area, and advise ATC with a PIREP',
    'D. Descend below 3,000 ft to escape turbulence'
  ],
  correct: 2,
  explanation: 'CASR 91.465 and AFM: in severe turbulence, the PIC should reduce to the turbulence penetration speed (or Va) to prevent structural overload, attempt to exit the turbulence, and issue a pilot weather report (PIREP) to ATC for the benefit of other aircraft.',
  reference: 'CASR 91.465 / Aircraft AFM'
},

{
  question: 'What must a pilot do when instructed by ATC to "STOP SQUAWK CHARLIE"?',
  options: [
    'A. Turn off the entire transponder',
    'B. Select code 7600',
    'C. Press the IDENT button',
    'D. Disable the altitude reporting (Mode C) function while leaving the Mode A code transmitting'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.6 / ICAO Doc 4444: "STOP SQUAWK CHARLIE" instructs the pilot to turn off the altitude-reporting (Mode C) function of the transponder, while keeping Mode A (identity code) active.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'What is the correct phraseology and information required in a standard IFR position report?',
  options: [
    'A. Callsign and present altitude',
    'B. Position, heading, and airspeed',
    'C. Aircraft identification, position, time, altitude/FL, and next reporting point with ETA',
    'D. Callsign, fuel state, and weather'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: a standard IFR position report contains: aircraft identification, position, time over the position, altitude or FL, next reporting point (compulsory or on-request), and ETA at the next point.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What airspace class typically surrounds major capital city airports in Australia (e.g. Sydney, Melbourne, Brisbane)?',
  options: [
    'A. Class C, from the surface within the CTR, extending as Class C TMA airspace surrounding the terminal area',
    'B. Class E throughout the terminal area',
    'C. Class D at the surface extending to FL245',
    'D. Class A from the surface to FL180'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.4 and ERSA: major Australian capital city airports are surrounded by Class C controlled airspace — Class C CTR from the surface and Class C TMA above, providing separation to all arriving and departing IFR and VFR traffic.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'What is a "Rescue Coordination Centre" (RCC) in the Australian context and what is its role?',
  options: [
    'A. CASA\'s emergency response division',
    'B. Airservices Australia\'s accident investigation unit',
    'C. A State Police centre that handles air accident reports',
    'D. JRCC Australia (operated by Australian Maritime Safety Authority, AMSA), responsible for coordinating search and rescue for aviation and maritime incidents'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.10: the Joint Rescue Coordination Centre (JRCC) Australia is operated by AMSA. It coordinates SAR operations for aviation and maritime incidents around Australia and in the Australian Search and Rescue Region (AUSREP/AUSSAR).',
  reference: 'AIP ENR 1.10'
},

{
  question: 'What is the correct action if a pilot reads back an ATC clearance incorrectly and ATC does not respond?',
  options: [
    'A. Execute the clearance as issued verbally and ignore the read-back error',
    'B. Proceed with the incorrect read-back as ATC\'s silence implies acceptance',
    'C. Contact ATC again to request clarification — never assume silence equals confirmation of an incorrect read-back',
    'D. Proceed with the original filed plan'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.1 and ICAO Doc 4444: if a pilot is uncertain whether an incorrect read-back was accepted, they must contact ATC for clarification. An erroneous read-back that goes unchallenged does NOT constitute a clearance.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What oxygen equipment must be carried in an unpressurised aircraft operating above FL250 in Australia?',
  options: [
    'A. One emergency oxygen bottle for the entire aircraft',
    'B. Oxygen is optional above FL250 for flights under 15 minutes',
    'C. Sufficient supplemental oxygen for all crew and passengers for the time spent above FL250; crew must use it continuously above FL250',
    'D. Continuous-flow masks for each crew member'
  ],
  correct: 2,
  explanation: 'Part 91 MOS s.26.16 and CASR 91.545: above FL250 in an unpressurised aircraft, each crew member must use supplemental oxygen continuously. Above FL350, at least one pilot at the controls must use oxygen at all times. Passengers must be supplied above FL140.',
  reference: 'Part 91 MOS 2020 s.26.16 / CASR 91.545'
},

{
  question: 'Which of the following best describes the difference between a "Flight Information Service" and an "Air Traffic Control Service"?',
  options: [
    'A. They are identical services with different names',
    'B. FIS is for VFR; ATC is for IFR only',
    'C. A Flight Information Service provides information and advice for safe and efficient conduct of flights; ATC provides separation between aircraft',
    'D. FIS is provided above FL180; ATC below'
  ],
  correct: 2,
  explanation: 'ICAO Annex 11 and AIP ENR 1.1: a Flight Information Service provides information (weather, NOTAMs, traffic) useful for safe flight, but does NOT provide separation. ATC actively provides separation between aircraft under its control.',
  reference: 'AIP ENR 1.1 / ICAO Annex 11'
},

{
  question: 'Under what circumstances may a passenger be exempt from the seat belt requirement in an aeroplane?',
  options: [
    'A. Exemptions may exist for specific operations (e.g. parachuting, certain medical or cargo configurations) as approved by CASA; otherwise all occupants must be belted during take-off, landing, and when instructed',
    'B. Passengers over 18 may choose not to wear a seat belt',
    'C. The PIC may exempt passengers at any time',
    'D. There are no permitted exemptions to the seat belt rule'
  ],
  correct: 0,
  explanation: 'CASR 91.310: all occupants must wear seat belts during take-off, landing, and whenever the PIC directs. Specific exemptions may exist for specialised operations (e.g. aerial work, parachuting) where CASA has granted approval.',
  reference: 'CASR 91.310'
},

{
  question: 'Where can a pilot find the current airspace classification, dimensions, and controlling authority for a specific airspace in Australia?',
  options: [
    'A. ERC (En Route Chart), VNC (Visual Navigation Chart), ERSA, and the AIP',
    'B. NOTAM D series only',
    'C. Only the ATC unit for that area can confirm airspace details',
    'D. The aircraft\'s AFM'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.4 and ERSA: airspace classifications, dimensions, frequencies, and controlling authorities are published on aeronautical charts (ERC, VNC, TAC) and in ERSA. The AIP contains the regulatory descriptions.',
  reference: 'AIP ENR 1.4 / ERSA / ERC Charts'
},

{
  question: 'What is "cumulative fatigue" and how does it affect FDP limits?',
  options: [
    'A. Cumulative fatigue from recent FDPs and flight time must be assessed; CAO 48.1 specifies reduced FDP limits after multiple consecutive days and cumulative flight time limits per 7-day and 28-day periods',
    'B. Cumulative fatigue only applies after 3 consecutive days of flying',
    'C. Cumulative fatigue is not addressed in CAO 48.1',
    'D. Only total hours in 12 months is measured — daily fatigue is not regulated'
  ],
  correct: 0,
  explanation: 'CAO 48.1: the instrument addresses cumulative fatigue through provisions limiting total flight hours per 7-day and 28-day periods, consecutive day limits, and minimum rest periods between FDPs, reflecting the cumulative nature of aviation fatigue.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the recommended position for a base call at a non-controlled aerodrome?',
  options: [
    'A. When on downwind abeam the threshold',
    'B. On final approach at 500 ft AAL',
    'C. When turning base, reporting aircraft type, callsign, runway, and intentions (landing, touch and go)',
    'D. At 10 NM from the aerodrome'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.4 and VFRG v8.3: pilots should broadcast on CTAF when turning base, including aircraft type, callsign, runway in use, and landing intention. This is in addition to the upwind, crosswind, downwind, and final calls.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What category of aircraft performance standard requires the ability to continue take-off and clear all obstacles following an engine failure at V1?',
  options: [
    'A. All categories require obstacle clearance after engine failure at V1',
    'B. Category B performance',
    'C. Category D performance',
    'D. Category A performance'
  ],
  correct: 3,
  explanation: 'CASR 91.595 and CAAP 235-3: Category A performance standards require that, following an engine failure at the decision speed (V1), the aircraft can continue the take-off and clear all obstacles by the prescribed margins. This is the most demanding performance standard.',
  reference: 'CASR 91.595 / CAAP 235-3'
},

{
  question: 'What does the term "ATC clearance" legally mean for a pilot?',
  options: [
    'A. An ATC clearance is only valid in Class A airspace',
    'B. It is an authorisation from ATC for an aircraft to proceed under specified conditions; it is legally binding and must be complied with unless safety requires deviation',
    'C. It is a recommendation that may be disregarded at the pilot\'s discretion',
    'D. It is a planning document only'
  ],
  correct: 1,
  explanation: 'CASR 91.155 and AIP ENR 1.1: an ATC clearance is an authorisation issued to a specific aircraft to proceed under specified conditions within controlled airspace. Pilots must comply with clearances unless a safety emergency requires deviation.',
  reference: 'CASR 91.155 / AIP ENR 1.1'
},

{
  question: 'What type of training must a pilot undertake before their first solo navigation exercise in a new area?',
  options: [
    'A. No training is required if the pilot has 50 hours PIC',
    'B. A CPL is required for all cross-country solo',
    'C. Simulator training only is required before solo navigation',
    'D. The pilot must complete the relevant dual cross-country navigation training and receive an endorsement from their instructor before conducting the solo navigation exercise'
  ],
  correct: 3,
  explanation: 'CASR Part 61 Subpart 61.J: before conducting solo cross-country navigation, a student pilot must have completed the relevant dual cross-country training and been endorsed by a flying instructor as competent to conduct the planned solo exercise.',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'What is the VHF frequency for VOLMET broadcasts in Australia?',
  options: [
    'A. 126.7 MHz for all areas',
    'B. 121.5 MHz',
    'C. Varies by location — VOLMET broadcasts are published in the ERSA and AIP',
    'D. 118.1 MHz'
  ],
  correct: 2,
  explanation: 'AIP ENR 1.3 and ERSA: VOLMET (meteorological information for aircraft in flight) broadcasts are transmitted on discrete frequencies that vary by location in Australia. The specific frequencies are published in ERSA and AIP ENR 1.3.',
  reference: 'AIP ENR 1.3 / ERSA'
},

{
  question: 'What is the legal relationship between the operator\'s operations manual and the PIC\'s authority in an emergency?',
  options: [
    'A. Emergency procedures in the operations manual are mandatory and cannot be deviated from',
    'B. Only CASA can grant authority to deviate from an operations manual',
    'C. The operations manual always takes precedence; the PIC must follow it',
    'D. The operations manual sets the standard procedures; however, in an emergency the PIC may deviate from any procedure including operations manual requirements, to the extent necessary'
  ],
  correct: 3,
  explanation: 'CASR 91.165 and 91.175: in an emergency, the PIC may deviate from any rule or operator procedure to the extent necessary to meet the emergency. The PIC bears final authority and responsibility for safety.',
  reference: 'CASR 91.165 / 91.175'
},

{
  question: 'What is a "common traffic advisory frequency" (CTAF) zone and what are the radio requirements within it?',
  options: [
    'A. A zone around major controlled airports — ATC mandatory',
    'B. A zone where silence is required to protect approach communications',
    'C. A frequency available for pilot-to-pilot weather discussion',
    'D. A designated area around a non-controlled or part-time controlled aerodrome where radio broadcasts on the published CTAF frequency are mandatory for all aircraft'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4 and AIP ENR 6.4: a CTAF zone is airspace around an aerodrome (usually non-controlled or part-time) within which all aircraft must broadcast their intentions on the published CTAF frequency to maintain situational awareness.',
  reference: 'AIP ENR 1.4 / AIP ENR 6.4'
},

{
  question: 'What passenger safety briefing is required before every flight?',
  options: [
    'A. Briefings are mandatory only for passenger-carrying RPT operations',
    'B. The PIC must ensure all passengers are briefed on the use of seat belts, emergency exits, prohibited smoking, emergency procedures, and any other safety items relevant to the flight before departure',
    'C. Only CPL holders must conduct safety briefings',
    'D. An emergency briefing is only required for flights over water'
  ],
  correct: 1,
  explanation: 'CASR 91.310 and CASR Part 135: before every flight carrying passengers, the PIC must ensure passengers are briefed on safety equipment, seat belts, emergency exits, brace position, and any other relevant safety information.',
  reference: 'CASR 91.310 / CASR Part 135'
},

{
  question: 'When is a read-back of an ATC instruction NOT required?',
  options: [
    'A. At non-controlled aerodromes',
    'B. General information broadcasts (ATIS, SIGMET), weather reports, and certain information-only calls do not require read-back — but all ATC clearances, instructions, and identified mandatory items must be read back',
    'C. Read-back is always required for every transmission',
    'D. When the instruction is very short'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: mandatory read-back items include clearances and instructions affecting safety. General advisory information, ATIS acknowledgements, and non-instruction transmissions typically do not require full read-back, though pilots should acknowledge receipt.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the effect of "airspace delegation" at certain Australian aerodromes?',
  options: [
    'A. Delegated airspace is Class B',
    'B. Airspace is delegated to airlines for their own use',
    'C. CASA delegates airspace management to State Governments',
    'D. Certain aerodromes operate with AFIS (Aerodrome Flight Information Service) — they provide information but not separation, and the airspace remains uncontrolled unless a control service is operating'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4 and ERSA: some aerodromes have Aerodrome Flight Information Service (AFIS) rather than ATC. AFIS operators provide information and advice but do not separate aircraft. The surrounding airspace remains uncontrolled (Class G) unless a tower is operating.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'A pilot fails to cancel their SARTIME and SAR resources are deployed. What liability may the pilot face?',
  options: [
    'A. The pilot\'s licence is automatically suspended',
    'B. The pilot may be liable for the cost of SAR operations and may face infringement action under the Civil Aviation Act for failing to comply with the notification requirements',
    'C. No liability — SAR is a free public service',
    'D. A written warning is the maximum penalty'
  ],
  correct: 1,
  explanation: 'Civil Aviation Act 1988 and CASR 91.225: failure to cancel a SARTIME may result in CASA infringement action and the pilot may be liable for costs. More significantly, it wastes critical emergency resources.',
  reference: 'CASR 91.225 / Civil Aviation Act 1988'
},

{
  question: 'What does a pilot report when first contacting an ATIS-equipped tower on initial call?',
  options: [
    'A. Callsign, position, altitude, and the received ATIS information identifier (e.g. "Information Delta")',
    'B. Full flight plan details',
    'C. Just their callsign and altitude',
    'D. Callsign and fuel state only'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.1 and ENR 1.7: on initial contact with an ATIS-equipped tower, the pilot should include the received ATIS identifier (e.g. "Information Golf") in the call. This confirms to ATC that the pilot has the current terminal information.',
  reference: 'AIP ENR 6.1 / ENR 1.7'
},

{
  question: 'When may a PPL holder carry a passenger at night?',
  options: [
    'A. At any time — PPL privileges include night flight with passengers',
    'B. Only if the PPL holder has met the night recency requirement of 3 take-offs and landings at night within the preceding 90 days in the same aircraft category',
    'C. Only with a safety pilot in the right seat',
    'D. Never — night passenger carrying requires a CPL'
  ],
  correct: 1,
  explanation: 'CASR 61.870: to carry a passenger at night, a PPL holder must have completed 3 take-offs and 3 landings at night as PIC within the preceding 90 days in the same aircraft category.',
  reference: 'CASR 61.870'
},

{
  question: 'What is the phraseology a pilot should use when reporting a bird strike to ATC after landing?',
  options: ['A. "MAYDAY MAYDAY MAYDAY, bird strike"', 'B. "Bird strike report — [callsign], [aerodrome], [runway], [time], [number and species if known], [aircraft damage if any]"', 'C. Bird strike reports are made only to ATSB, not ATC', 'D. No specific phraseology is required; any verbal report is acceptable'],
  correct: 1,
  explanation: 'AIP ENR 1.6 and AIP GEN 3.3: bird strike reports should be made to ATC after landing using the standard bird strike report format. ATSB and CASA reporting may also be required under civil aviation regulations.',
  reference: 'AIP ENR 1.6 / AIP GEN 3.3'
},

{
  question: 'What is a "Pilot Activated Hazard System" (PAHS) and where is it relevant in Australia?',
  options: [
    'A. An ELT activation system',
    'B. A weather hazard broadcast system for remote areas',
    'C. A ground-based system at some aerodromes that pilots activate by radio to trigger hazard lighting (e.g. obstacle lights) or other safety systems',
    'D. A cockpit warning system for terrain'
  ],
  correct: 2,
  explanation: 'ERSA and AIP ENR 1.4: a Pilot Activated Hazard System (PAHS) is a system at certain aerodromes where pilots can activate obstacle lighting or aerodrome lighting by transmitting on a specified frequency. Details are published in ERSA.',
  reference: 'ERSA / AIP ENR 1.4'
},

{
  question: 'Which aircraft has right of way when a power-driven aircraft and a glider are converging?',
  options: [
    'A. Both must turn right as in head-on',
    'B. The aircraft at lower altitude has right of way',
    'C. The glider has right of way over the power-driven aircraft',
    'D. The power-driven aircraft has right of way'
  ],
  correct: 2,
  explanation: 'CASR 91.330 and ICAO Annex 2: in converging situations, the right-of-way priority in descending order is: aircraft in distress, balloon, glider, airship, towing aircraft, powered aircraft. A glider has right of way over a power-driven aircraft.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'What is the "area" frequency on which a pilot should broadcast when flying in remote Australian airspace without ATC coverage?',
  options: [
    'A. 121.5 MHz for all remote area flights',
    'B. The nearest CTAF frequency',
    'C. 127.8 MHz',
    'D. The appropriate area frequency published for the FIR sector in the AIP — typically 126.7 MHz is widely monitored and can be used in remote areas'
  ],
  correct: 3,
  explanation: 'AIP ENR 1.4 and AIP ENR 6.4: in remote Class G airspace, 126.7 MHz is widely monitored and used for traffic broadcasts. The specific area frequencies for ATC or FIS sectors are published in the AIP.',
  reference: 'AIP ENR 1.4 / AIP ENR 6.4'
},

{
  question: 'In which Australian airspace is ADS-B Out (1090 ES) currently mandatory above 10,000 ft?',
  options: [
    'A. Only in Class A airspace',
    'B. In Class A airspace and designated Class C and E airspace above 10,000 ft AMSL, as published in AIP ENR 1.6',
    'C. ADS-B is voluntary in all Australian airspace',
    'D. Mandatory only on international routes above FL350'
  ],
  correct: 1,
  explanation: 'CASR 91.510 and AIP ENR 1.6: ADS-B Out is mandatory in Australian airspace designated in AIP ENR 1.6, which includes Class A airspace and specified Class C and E airspace above 10,000 ft AMSL. The requirements continue to expand.',
  reference: 'CASR 91.510 / AIP ENR 1.6'
},

{
  question: 'What is the purpose of a "standard instrument departure" (SID)?',
  options: [
    'A. A SID is a published IFR route from an aerodrome to the en-route structure, providing obstacle clearance and airspace management for departing IFR traffic',
    'B. A SID is an emergency departure procedure',
    'C. A SID is a VFR departure route from a controlled aerodrome',
    'D. A SID is an arrival procedure for high-traffic aerodromes'
  ],
  correct: 0,
  explanation: 'CASR 91.365 and ICAO Doc 8168: a Standard Instrument Departure (SID) is a published IFR departure procedure that provides obstacle clearance, noise abatement, and airspace structure for aircraft departing IFR from an aerodrome to the en-route phase.',
  reference: 'CASR 91.365 / ICAO Doc 8168'
},

{
  question: 'What is a "STAR" (Standard Arrival Route) and what does it provide?',
  options: [
    'A. A STAR only applies to heavy aircraft above FL180',
    'B. A STAR is a VFR scenic route into major airports',
    'C. A STAR is a published IFR arrival procedure connecting the en-route structure to the initial approach fix, providing obstacle clearance, speed management, and airspace organisation for arrivals',
    'D. A STAR is a night-only procedure'
  ],
  correct: 2,
  explanation: 'ICAO Doc 8168 and AIP ENR 1.1: a Standard Arrival Route (STAR) is a published instrument procedure that routes IFR aircraft from the en-route structure to the initial approach fix. It provides obstacle clearance, facilitates traffic management, and reduces pilot/controller workload.',
  reference: 'AIP ENR 1.1 / ICAO Doc 8168'
},

{
  question: 'In what circumstances may a pilot fly an aircraft without a current certificate of airworthiness?',
  options: [
    'A. Only when an authority to fly (Special Flight Permit) has been issued by CASA for the specific flight',
    'B. Never — a certificate of airworthiness cannot be substituted',
    'C. For any flight under 30 minutes in Class G airspace',
    'D. In an emergency only, provided a maintenance release is valid'
  ],
  correct: 0,
  explanation: 'CASR 91.075 and 91.785: an aircraft without a current Certificate of Airworthiness may only be flown under an authority to fly (Special Flight Permit/SFP) issued by CASA, which specifies conditions for the flight.',
  reference: 'CASR 91.075 / 91.785'
},

{
  question: 'What is the minimum instrument requirement for a VFR flight at night in a powered aeroplane?',
  options: [
    'A. Attitude indicator, ASI, altimeter, and compass only',
    'B. Night VFR requires only a landing light in addition to day VFR instruments',
    'C. An ILS receiver is required for all night VFR flights',
    'D. All day VFR instruments plus attitude indicator with independent power, turn and slip indicator, vertical speed indicator, outside air temperature gauge, and a means of illuminating all required instruments'
  ],
  correct: 3,
  explanation: 'Part 91 MOS s.26.06(3) and s.26.08: VFR night operations require all day VFR instruments plus an attitude indicator (with independent power supply), turn and slip indicator, VSI, OAT indicator, and adequate instrument lighting.',
  reference: 'Part 91 MOS 2020 s.26.06(3) / s.26.08'
},

{
  question: 'May a pilot enter a Prohibited Area under any circumstances?',
  options: [
    'A. Prohibited Areas may be entered freely if activated for less than 2 hours',
    'B. Yes, if operating under IFR',
    'C. Only with specific written authorisation from CASA or as specified in the NOTAM activating the Prohibited Area',
    'D. Yes — if operating at night only'
  ],
  correct: 2,
  explanation: 'CASR 91.185: flight within a Prohibited Area is unlawful unless CASA has issued a specific authorisation. Prohibited Areas protect sites of highest national security or safety sensitivity.',
  reference: 'CASR 91.185'
},

{
  question: 'What is the correct phraseology for a pilot to report leaving an altitude?',
  options: ['"Descending from [altitude]"', '"[Callsign] LEAVING [altitude]"', '"[Callsign] LEAVING FLIGHT LEVEL [XX]" or "[Callsign] LEAVING [altitude]"', '"Through [altitude] descending"'],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: position departure from a level is reported as "[Callsign] LEAVING [Flight Level or altitude]." This phrasing is standard for altitude-crossing reports.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is required before an aircraft may conduct an IFR approach when the aerodrome weather is below published IFR minima?',
  options: [
    'A. A CAVOK clearance from ATC is required to proceed below minima',
    'B. The aircraft may begin the approach but must execute a missed approach at MDA/DA if visual reference is not acquired',
    'C. The aircraft must not commence the final approach if the aerodrome reported weather is below the applicable approach minima for the procedure being flown',
    'D. The captain may proceed if they consider it safe'
  ],
  correct: 2,
  explanation: 'CASR 91.380 and 91.395: if the reported aerodrome weather is below the applicable approach minima for the aircraft category and procedure, the PIC must not commence (or continue) the approach below the initial approach altitude.',
  reference: 'CASR 91.380 / 91.395'
},

{
  question: 'What does it mean when ATC says "RESUME OWN NAVIGATION"?',
  options: [
    'A. ATC is handing the flight to another sector only',
    'B. The pilot may change altitude without further clearance',
    'C. The pilot must file a new flight plan',
    'D. ATC is terminating the radar vectors or ATC navigation assistance; the pilot must navigate independently using their own navigation systems'
  ],
  correct: 3,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "RESUME OWN NAVIGATION" terminates radar vectoring. The pilot must assume responsibility for navigation, typically to the next cleared fix or the filed route.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the difference between a "class rating" and a "type rating"?',
  options: [
    'A. A class rating is only for VFR; a type rating is required for IFR',
    'B. They are identical — all licences use type ratings only',
    'C. A class rating covers a broad category of aircraft sharing similar operating characteristics (e.g. single-engine piston); a type rating is required for specific complex or large aircraft that require additional training due to their complexity',
    'D. Type ratings are only issued for helicopters'
  ],
  correct: 2,
  explanation: 'CASR Part 61: a class rating (e.g. single-engine piston, multi-engine piston) covers groups of similar aircraft. A type rating is required for specific aircraft types that are too complex or performance-capable to be covered by a class rating alone (e.g. high-performance turbine aircraft, some multi-engine types).',
  reference: 'CASR Part 61 Subpart 61.J'
},

{
  question: 'What is an "Upper Control Area" (UCA)?',
  options: [
    'A. Military airspace above FL250',
    'B. Class A controlled airspace above FL245 in Australia, providing en-route separation for all IFR traffic at higher flight levels',
    'C. Airspace above FL180 that is Class C',
    'D. Class G airspace above FL600'
  ],
  correct: 1,
  explanation: 'AIP ENR 1.1: the Upper Control Area (UCA) in Australia is Class A airspace at and above FL245, providing ATC separation for all IFR traffic in the upper airspace. VFR flight is not permitted.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'How long is a Class 1 Medical Certificate valid for a pilot under 40 years of age?',
  options: [
    'A. 36 months',
    'B. 12 months',
    'C. 24 months',
    'D. 6 months'
  ],
  correct: 1,
  explanation: 'CASR Part 67: a Class 1 Medical Certificate for a pilot under 40 years of age is valid for 12 months. For pilots 40 years and over, the validity period is 6 months for airline operations.',
  reference: 'CASR Part 67'
},

{
  question: 'When instructed by ATC to "EXPEDITE," what does this mean operationally?',
  options: [
    'A. Increase speed by 50 KIAS immediately',
    'B. Complete the requested action as quickly as safely possible — ATC requires minimum delay due to traffic or other requirements',
    'C. Declare an emergency and request priority',
    'D. It is an advisory only and may be disregarded'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "EXPEDITE" means the pilot should complete the specified action as quickly as possible while maintaining safety. It is used when ATC needs minimum delay — for example, "EXPEDITE CROSSING RUNWAY" or "EXPEDITE DESCENT."',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What record must be kept of an aircraft defect and its rectification?',
  options: [
    'A. The defect must be recorded in the maintenance release (or technical log) and the rectification signed off by an appropriately licensed maintenance engineer',
    'B. No record is required for defects classified as minor',
    'C. A photo of the defect satisfies the record requirement',
    'D. Verbal notification to the operator is sufficient'
  ],
  correct: 0,
  explanation: 'CASR 91.755 and CASR Part 66: defects identified during operations must be recorded in the maintenance release. Rectification must be certified by a licensed aircraft maintenance engineer (LAME) or appropriately authorised person.',
  reference: 'CASR 91.755 / CASR Part 66'
},

{
  question: 'What does "RADAR SERVICE TERMINATED" mean when issued by ATC?',
  options: [
    'A. The aircraft has left controlled airspace',
    'B. The flight plan has been closed',
    'C. ATC is no longer providing radar separation or identification service to the aircraft; the pilot should revert to position reporting and self-separation',
    'D. The pilot must squawk 7600'
  ],
  correct: 2,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "RADAR SERVICE TERMINATED" informs the pilot that ATC is discontinuing the radar service (identification and/or separation). The pilot reverts to procedural separation and position reporting as required.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'Which of the following best describes the Australian airspace classification system used at lower altitudes in remote areas?',
  options: [
    'A. Class G (uncontrolled) at the surface, transitioning to Class E at a published altitude, then Class A above FL245',
    'B. Class C everywhere below FL245',
    'C. Class D covers all remote areas below 10,000 ft',
    'D. Class A from the surface to FL245 in all areas'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.1 and ENR 1.4: in remote Australian airspace, the typical structure is Class G from the surface to a published altitude (often 8,500 ft AMSL), then Class E above that, transitioning to Class A at FL245. This varies by location as shown on aeronautical charts.',
  reference: 'AIP ENR 1.1 / 1.4 / ERC Charts'
},

{
  question: 'What is the specific obligation on a VFR pilot when the weather ahead deteriorates below VMC?',
  options: [
    'A. Continue at a reduced speed to assess the situation',
    'B. Contact ATC and request an IFR clearance',
    'C. Turn back, divert, or land as necessary to remain in VMC; under no circumstances is a VFR pilot permitted to continue into IMC',
    'D. Climb above the weather and request IFR clearance'
  ],
  correct: 2,
  explanation: 'CASR 91.265 and 91.615: a VFR pilot must not enter IMC under any circumstances. If VMC cannot be maintained, the pilot must turn back or divert to an alternative route/destination where VMC can be maintained.',
  reference: 'CASR 91.265 / 91.615'
},

{
  question: 'Which organisation in Australia is responsible for investigating aviation accidents and serious incidents?',
  options: [
    'A. Airservices Australia',
    'B. The Australian Federal Police',
    'C. CASA — the Civil Aviation Safety Authority',
    'D. ATSB — the Australian Transport Safety Bureau'
  ],
  correct: 3,
  explanation: 'AIP GEN 3.3 and Transport Safety Investigation Act 2003: the Australian Transport Safety Bureau (ATSB) is the independent statutory body responsible for investigating transport accidents and incidents, including aviation, in Australia.',
  reference: 'AIP GEN 3.3 / Transport Safety Investigation Act 2003'
},

{
  question: 'What specific permission is required to enter a Restricted Area designated as "R" in Australian airspace?',
  options: [
    'A. Permission must be obtained from the specific authority controlling that Restricted Area, as published in the ERSA or relevant AIP entry for the area',
    'B. A standard IFR clearance is sufficient',
    'C. No permission is needed outside gazetted hours',
    'D. CASA\'s blanket permission covers all Restricted Areas for CPL holders'
  ],
  correct: 0,
  explanation: 'CASR 91.185 and AIP ENR 5.1: entry to a Restricted Area requires permission from the designated controlling authority. The authority for each Restricted Area is published in AIP ENR 5.1 and ERSA. Outside of gazetted activation hours, the area may be freely entered.',
  reference: 'CASR 91.185 / AIP ENR 5.1'
},

{
  question: 'Which aircraft has right of way when both a powered aircraft and a balloon are converging?',
  options: [
    'A. The powered aircraft has right of way as it is faster',
    'B. The aircraft at the lower altitude has priority',
    'C. The balloon has right of way over the powered aircraft',
    'D. Both must turn right'
  ],
  correct: 2,
  explanation: 'CASR 91.330 and ICAO Annex 2: in the right-of-way hierarchy, balloons rank above all powered aircraft including gliders (except aircraft in distress). A balloon has right of way over all powered aircraft.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'What is the meaning of "CONTACT [unit] [frequency]" from ATC?',
  options: [
    'A. Monitor the frequency but do not transmit',
    'B. Establish two-way communication with the specified unit on the specified frequency',
    'C. Switch to the emergency frequency',
    'D. File a new flight plan with the specified unit'
  ],
  correct: 1,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "CONTACT [unit] [frequency]" instructs the pilot to switch to the specified frequency and establish two-way communication with the named ATC unit.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What is the correct response when ATC gives a frequency change with "MONITOR [frequency]"?',
  options: [
    'A. Tune to the frequency and listen but do not make an initial call unless required',
    'B. Continue on the current frequency and update the standby',
    'C. Establish two-way contact on the new frequency immediately',
    'D. "MONITOR" means squelch the frequency'
  ],
  correct: 0,
  explanation: 'AIP ENR 6.1 / ICAO Doc 4444: "MONITOR [frequency]" instructs the pilot to tune to the specified frequency and listen, but NOT to make an initial call. This is distinct from "CONTACT" which requires establishing two-way communication.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'A VFR pilot inadvertently enters cloud. What is the correct immediate action?',
  options: [
    'A. Execute a standard-rate 180-degree turn to exit the cloud as quickly as possible while maintaining control by reference to instruments',
    'B. Maintain heading and climb above the cloud',
    'C. Squawk 7700 and continue to destination',
    'D. Reduce power and descend below the cloud'
  ],
  correct: 0,
  explanation: 'VFRG v8.3 and CASR 91.265: if inadvertently entering cloud, the pilot should immediately execute a 180-degree turn at standard rate, using the basic instruments to maintain control, to exit the cloud the way they entered. Squawk 7600 (comms) or 7700 (emergency) if appropriate.',
  reference: 'CASR 91.265 / VFRG v8.3'
},

{
  question: 'How is final reserve fuel calculated for a piston-engine aeroplane on a VFR flight?',
  options: [
    'A. 20 minutes at best range power',
    'B. 30 minutes at normal cruise — the same as IFR',
    'C. 30 minutes at holding speed',
    'D. 45 minutes at cruise power at the nominated cruise altitude'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Table 19.02(2): for a piston-engine aeroplane on a VFR flight, the final reserve fuel is 45 minutes at cruise power at the planned cruising altitude.',
  reference: 'Part 91 MOS 2020 Table 19.02(2)'
},

{
  question: 'What is the primary purpose of a "Common Traffic Advisory Frequency" (CTAF) at an uncontrolled aerodrome?',
  options: [
    'A. To enable pilots to self-announce their position and intentions, supporting situational awareness and collision avoidance in the absence of ATC control',
    'B. To receive ATC traffic separation instructions',
    'C. To relay weather information from the nearest ATIS',
    'D. To request special VFR clearances from en-route ATC'
  ],
  correct: 0,
  explanation: 'AIP ENR 1.4 and VFRG v8.3: CTAF enables pilots at non-controlled aerodromes to broadcast their position and intentions so other pilots can maintain situational awareness and apply see-and-avoid. No ATC separation is provided.',
  reference: 'AIP ENR 1.4 / VFRG v8.3'
},

{
  question: 'What is the minimum flight visibility for day VFR flight in Class G airspace at 3,500 ft AMSL?',
  options: [
    'A. 3,000 m',
    'B. 8,000 m',
    'C. 1,500 m',
    'D. 5,000 m'
  ],
  correct: 3,
  explanation: 'In Class G airspace at or above 3,000 ft AMSL during the day, the minimum flight visibility is 5,000 m. Below 3,000 ft AMSL in Class G the minimum reduces to 1,500 m by day.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'A VFR pilot is flying at 4,500 ft AMSL in Class G airspace. What is the minimum vertical distance the aircraft must maintain from cloud?',
  options: [
    'A. 1,500 ft above and 1,000 ft below',
    'B. 500 ft above and 500 ft below',
    'C. 1,000 ft above and 500 ft below',
    'D. Clear of cloud'
  ],
  correct: 2,
  explanation: 'In Class G airspace at or above 3,000 ft AMSL, VFR aircraft must maintain 1,000 ft vertically above cloud and 500 ft below cloud, plus 600 m horizontally.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'What is the minimum cloud clearance for VFR flight in Class G airspace below 1,000 ft AGL?',
  options: [
    'A. 500 ft above and 500 ft below',
    'B. Clear of cloud and in sight of the surface',
    'C. 1,000 ft above and 500 ft below',
    'D. 300 m horizontal clearance only'
  ],
  correct: 1,
  explanation: 'In Class G airspace at or below 1,000 ft AGL during the day, the requirement is simply clear of cloud and in sight of the surface, with 1,500 m flight visibility.',
  reference: 'CASR 91.615 Table 91.615'
},

{
  question: 'A VFR pilot plans a cross-country in a piston aeroplane under 5,700 kg. What is the minimum final reserve fuel required?',
  options: [
    'A. 20 minutes at holding speed',
    'B. 30 minutes at holding speed',
    'C. 45 minutes at normal cruise power',
    'D. 30 minutes at normal cruise power'
  ],
  correct: 2,
  explanation: 'For a piston-engine aeroplane under 5,700 kg on a VFR day flight, the final reserve fuel is 45 minutes at normal cruise power at the planned cruise altitude.',
  reference: 'Part 91 MOS 2020 Table 19.02(2)'
},

{
  question: 'A piston aeroplane under 5,700 kg departs on a night VFR flight. What final reserve fuel is required?',
  options: [
    'A. 45 minutes at normal cruise power',
    'B. 30 minutes at normal cruise power',
    'C. 60 minutes at normal cruise power',
    'D. 45 minutes at holding speed'
  ],
  correct: 0,
  explanation: 'For a piston-engine aeroplane under 5,700 kg on a night VFR flight, the final reserve fuel is 45 minutes at normal cruise power — the same as day VFR.',
  reference: 'Part 91 MOS 2020 Table 19.02(2)'
},

{
  question: 'What minimum fuel must a VFR pilot carry to comply with regulations on a cross-country flight?',
  options: [
    'A. Trip fuel plus final reserve',
    'B. Trip fuel, contingency fuel, and final reserve',
    'C. Trip fuel only',
    'D. Trip fuel plus 10% buffer only'
  ],
  correct: 0,
  explanation: 'For VFR flights, the minimum fuel required is trip fuel (to reach the destination) plus final reserve fuel. Contingency and alternate fuel are additional requirements that may apply depending on the operation.',
  reference: 'Part 91 MOS 2020 Table 19.02(2)'
},

{
  question: 'While en route on a VFR flight, a pilot calculates fuel remaining will be less than the final reserve on arrival. What is the correct action?',
  options: [
    'A. Continue and advise ATC on arrival',
    'B. Declare minimum fuel and request priority',
    'C. Divert to the nearest suitable aerodrome with adequate fuel',
    'D. Increase power to reach destination faster'
  ],
  correct: 2,
  explanation: 'The PIC must monitor fuel in flight. If the fuel state deteriorates such that final reserve cannot be maintained on arrival, the pilot must divert to a suitable aerodrome before reaching the reserve threshold.',
  reference: 'CASR 91.725'
},

{
  question: 'A VFR pilot inadvertently enters cloud. What is the correct immediate action?',
  options: [
    'A. Execute a 180-degree turn at standard rate to exit the cloud',
    'B. Squawk 7700 and continue to destination',
    'C. Climb above the cloud layer',
    'D. Maintain heading and reduce speed'
  ],
  correct: 0,
  explanation: 'If a VFR pilot inadvertently enters cloud, the correct action is an immediate 180-degree turn at standard rate using basic instruments to exit the cloud the way entered. Entering IMC as a VFR pilot is a serious offence.',
  reference: 'CASR 91.265 / VFRG v8.3'
},

{
  question: 'What is the maximum speed for a VFR aircraft operating within 4 NM of a Class D aerodrome below 2,500 ft AGL?',
  options: [
    'A. 180 KIAS',
    'B. 250 KIAS',
    'C. 150 KIAS',
    'D. 200 KIAS'
  ],
  correct: 3,
  explanation: 'Within 4 NM of a Class C or D aerodrome at or below 2,500 ft AGL, the speed limit is 200 KIAS. The general below-10,000 ft limit is 250 KIAS.',
  reference: 'CASR 91.665'
},

{
  question: 'What is the general maximum airspeed for all aircraft below 10,000 ft in Australian airspace?',
  options: [
    'A. 300 KIAS',
    'B. 350 KIAS',
    'C. 200 KIAS',
    'D. 250 KIAS'
  ],
  correct: 3,
  explanation: 'In Australian airspace below 10,000 ft AMSL, no aircraft may be operated at more than 250 KIAS unless ATC has issued a specific speed instruction or the aircraft is in Class A airspace.',
  reference: 'CASR 91.660'
},

{
  question: 'A VFR pilot wants to fly through Class D airspace. What is required before entry?',
  options: [
    'A. No clearance needed, just monitor the frequency',
    'B. File a flight plan only',
    'C. Two-way radio communication and an ATC clearance must be obtained',
    'D. Obtain a Special VFR clearance'
  ],
  correct: 2,
  explanation: 'All aircraft entering Class D airspace must establish two-way radio communication and obtain an ATC clearance before entry, regardless of altitude.',
  reference: 'CASR 91.410 / AIP ENR 1.1'
},

{
  question: 'A VFR aircraft wants to enter Class C airspace. What does the pilot need?',
  options: [
    'A. Monitoring the area frequency is sufficient',
    'B. A two-way radio and Mode C transponder, plus an ATC clearance',
    'C. Only a squawk code from ATC',
    'D. An instrument rating'
  ],
  correct: 1,
  explanation: 'Class C airspace requires a serviceable two-way radio, a Mode C altitude-reporting transponder, and an ATC clearance before entry for both VFR and IFR aircraft.',
  reference: 'CASR 91.410 / AIP ENR 1.6'
},

{
  question: 'At a controlled aerodrome, a pilot receives the instruction "LINE UP AND WAIT." What does this authorise?',
  options: [
    'A. Hold at the runway holding point outside the runway',
    'B. Back-track on the runway',
    'C. Take off immediately',
    'D. Enter the runway and hold — take-off requires a separate clearance'
  ],
  correct: 3,
  explanation: '"LINE UP AND WAIT" authorises the pilot to enter the runway and align on the centreline but does NOT authorise take-off. An explicit take-off clearance must be received before departing.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'A taxi instruction says "TAXI TO HOLDING POINT RUNWAY 18 VIA TAXIWAY ALPHA." Can the pilot cross Runway 36 on Taxiway Alpha without further clearance?',
  options: [
    'A. Only if the tower confirms the runway is clear',
    'B. Yes, if no traffic is on Runway 36',
    'C. No — an explicit crossing clearance must be obtained for every runway',
    'D. Yes — the taxi instruction covers all crossings'
  ],
  correct: 2,
  explanation: 'A taxi instruction never authorises crossing a runway. Every runway crossing requires a specific, explicit clearance from ATC — this is a critical runway incursion prevention requirement.',
  reference: 'AIP ENR 6.1 / CASR 91.495'
},

{
  question: 'A pilot is cleared to "TAXI TO GATE VIA TAXIWAY BRAVO." The route crosses Runway 12. What must the pilot do?',
  options: [
    'A. Cross if no aircraft are on final approach',
    'B. Cross at taxi speed only',
    'C. Stop at the runway holding point and request a crossing clearance',
    'D. Announce the crossing on CTAF'
  ],
  correct: 2,
  explanation: 'Taxi instructions do not include runway crossing authority. The pilot must hold short at the holding point and obtain an explicit runway crossing clearance before entering any runway.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What does the radiotelephony phrase "WILCO" mean?',
  options: [
    'A. I cannot comply with your instruction',
    'B. Transmission was unclear, please repeat',
    'C. I have received, understood, and will comply with your message',
    'D. I have received your message'
  ],
  correct: 2,
  explanation: '"WILCO" (Will Comply) means the pilot has received, understood, and will comply with the instruction. It is stronger than "ROGER," which indicates receipt only.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What does "ROGER" mean in aviation radiotelephony?',
  options: [
    'A. I will comply with your instruction',
    'B. I have received all of your last transmission',
    'C. Cleared as requested',
    'D. I understand and agree'
  ],
  correct: 1,
  explanation: '"ROGER" means "I have received all of your last transmission." It does not indicate compliance or agreement — for that, "WILCO" is used.',
  reference: 'AIP ENR 6.1 / ICAO Doc 4444'
},

{
  question: 'What transponder code should a pilot squawk when operating in Class G airspace without an ATC-assigned code?',
  options: [
    'A. 2000',
    'B. 7000',
    'C. 7700',
    'D. 1200'
  ],
  correct: 1,
  explanation: 'In Australia, pilots operating without an ATC-assigned code in Class G (uncontrolled) airspace should squawk 7000 — the VFR conspicuity code.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'A pilot squawks 7600 on their transponder. What does this indicate to ATC?',
  options: [
    'A. General emergency',
    'B. Unlawful interference',
    'C. VFR conspicuity',
    'D. Radio communication failure'
  ],
  correct: 3,
  explanation: 'Transponder code 7600 indicates radio communication failure. The pilot should squawk 7600 and follow the lost communications procedures in AIP ENR 1.6.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'What does squawking 7500 indicate?',
  options: [
    'A. Radio failure',
    'B. Unlawful interference (hijack)',
    'C. General emergency',
    'D. VFR flight in Class G'
  ],
  correct: 1,
  explanation: 'Transponder code 7500 signals unlawful interference (hijack). ATC will take immediate action upon receiving this squawk.',
  reference: 'CASR 91.335 / AIP ENR 1.6'
},

{
  question: 'What does squawking 7700 indicate to ATC?',
  options: [
    'A. Unlawful interference',
    'B. Military identification',
    'C. General emergency',
    'D. Radio communication failure'
  ],
  correct: 2,
  explanation: 'Transponder code 7700 is the general emergency squawk. ATC will immediately prioritise the aircraft and provide all available assistance.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'When instructed by ATC to "IDENT," what must the pilot do?',
  options: [
    'A. Turn on ADS-B',
    'B. Transmit callsign on 121.5 MHz',
    'C. Change the squawk code',
    'D. Press the transponder IDENT button to highlight the return on the radar display'
  ],
  correct: 3,
  explanation: '"IDENT" instructs the pilot to press the transponder IDENT button, causing the radar return to blossom on the controller\'s display for positive identification.',
  reference: 'AIP ENR 1.6 / ICAO Doc 4444'
},

{
  question: 'What is the correct circuit direction at an Australian aerodrome unless otherwise published?',
  options: [
    'A. Always into wind',
    'B. Left-hand',
    'C. Right-hand',
    'D. Determined by runway designation'
  ],
  correct: 1,
  explanation: 'The standard traffic circuit direction in Australia is left-hand, unless a right-hand circuit is published in ERSA or directed by ATC.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'At a CTAF aerodrome, when should a pilot make a "final" radio call?',
  options: [
    'A. After landing gear is confirmed down',
    'B. Only when other traffic is in the circuit',
    'C. When turning final, reporting type, callsign, runway, and intention',
    'D. When at 3 NM final'
  ],
  correct: 2,
  explanation: 'At a CTAF aerodrome, a pilot should broadcast on the CTAF when turning final, including aircraft type, callsign, runway in use, and landing intention.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'What is the purpose of making radio broadcasts on CTAF at a non-controlled aerodrome?',
  options: [
    'A. To alert other traffic to your position and intentions, supporting see-and-avoid',
    'B. To request weather information',
    'C. To obtain a landing clearance',
    'D. To receive ATC separation'
  ],
  correct: 0,
  explanation: 'CTAF broadcasts give other pilots positional awareness of your aircraft and intentions. No ATC separation is provided at non-controlled aerodromes — see-and-avoid applies.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Where is the CTAF frequency for a non-controlled aerodrome published?',
  options: [
    'A. In the ERSA entry for that aerodrome',
    'B. It is always 126.7 MHz',
    'C. On the aircraft\'s avionics database only',
    'D. It is always 121.5 MHz'
  ],
  correct: 0,
  explanation: 'Each non-controlled aerodrome has its own CTAF published in its ERSA entry. Frequencies vary by aerodrome.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'A pilot is approaching a CTAF aerodrome from the en route phase. When should they make an area broadcast?',
  options: [
    'A. At approximately 10 NM from the aerodrome',
    'B. Only when entering the circuit',
    'C. Area broadcasts are not required',
    'D. Only when another aircraft is on frequency'
  ],
  correct: 0,
  explanation: 'An en-route area broadcast should be made at approximately 10 NM from a CTAF aerodrome, advising position, altitude, and intention to land, to alert circuit traffic.',
  reference: 'AIP ENR 6.4 / VFRG v8.3'
},

{
  question: 'Two VFR aircraft are converging at the same altitude. Which must give way?',
  options: [
    'A. The aircraft that has the other on its left',
    'B. The aircraft that has the other on its right',
    'C. The faster aircraft',
    'D. The heavier aircraft'
  ],
  correct: 0,
  explanation: 'When two aircraft are converging at approximately the same altitude, the aircraft that has the other on its left must give way. The aircraft on the right has right of way.',
  reference: 'CASR 91.330'
},

{
  question: 'Two aircraft are approaching each other head-on. What must both pilots do?',
  options: [
    'A. Both turn left',
    'B. The lower aircraft gives way',
    'C. Both turn right',
    'D. The smaller aircraft gives way'
  ],
  correct: 2,
  explanation: 'When two aircraft are approaching head-on or approximately so with risk of collision, both pilots must alter course to the right.',
  reference: 'CASR 91.325'
},

{
  question: 'A power-driven aircraft and a glider are converging. Which has right of way?',
  options: [
    'A. The power-driven aircraft',
    'B. The one at lower altitude',
    'C. The faster aircraft',
    'D. The glider'
  ],
  correct: 3,
  explanation: 'In the right-of-way hierarchy, gliders rank above power-driven aircraft. The glider has right of way over the powered aircraft.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'A balloon and a powered aircraft are converging. Which has right of way?',
  options: [
    'A. Both must turn right',
    'B. The balloon',
    'C. The powered aircraft',
    'D. The aircraft at the lower altitude'
  ],
  correct: 1,
  explanation: 'In the right-of-way hierarchy, balloons rank above all powered aircraft. A balloon has right of way over any powered aircraft, including gliders.',
  reference: 'CASR 91.330 / ICAO Annex 2'
},

{
  question: 'An aircraft in distress is in the vicinity. What right-of-way rule applies?',
  options: [
    'A. Only IFR aircraft in distress have special right of way',
    'B. The distress aircraft has right of way over all other aircraft',
    'C. The distress aircraft gives way to aircraft on final',
    'D. Standard converging rules still apply'
  ],
  correct: 1,
  explanation: 'An aircraft in distress has right of way over all other aircraft. All other pilots must give way and render assistance if required.',
  reference: 'CASR 91.340 / ICAO Annex 2'
},

{
  question: 'Two aircraft are on approach to land. The higher aircraft is in the final stages of its approach. What is the right-of-way rule?',
  options: [
    'A. The heavier aircraft has right of way',
    'B. The higher aircraft always gives way',
    'C. The faster aircraft has priority',
    'D. The lower gives way, and the lower must not exploit this to cut in front of the higher in its final stages'
  ],
  correct: 3,
  explanation: 'The higher aircraft gives way to the lower. However, if the higher aircraft is in the final stages of its approach, the lower aircraft must not take advantage of this rule to cut in.',
  reference: 'CASR 91.330 / VFRG v8.3'
},

{
  question: 'What does a white dumb-bell displayed on the signals area of an aerodrome indicate?',
  options: [
    'A. Aircraft movements are confined to hard-surfaced runways and taxiways only',
    'B. Glider operations are active',
    'C. The aerodrome is closed',
    'D. Right-hand circuits are in use'
  ],
  correct: 0,
  explanation: 'A white dumb-bell on the signals area indicates that aircraft movements are confined to paved (hard-surfaced) runways and taxiways. Grass areas must not be used.',
  reference: 'AIP GEN 1.5 / ERSA GEN'
},

{
  question: 'What does a red square with a yellow diagonal on the signals area indicate?',
  options: [
    'A. Special caution required — the manoeuvring area is poor',
    'B. The aerodrome is closed',
    'C. Military operations only',
    'D. Landings are prohibited'
  ],
  correct: 0,
  explanation: 'A red square with a yellow diagonal on the signals area indicates the state of the manoeuvring area is poor. Pilots must exercise special caution when landing.',
  reference: 'AIP GEN 1.5 / ERSA GEN'
},

{
  question: 'What does a white cross on a runway indicate?',
  options: [
    'A. The threshold is displaced',
    'B. The runway or that portion is unfit for use',
    'C. Right-hand circuits in use',
    'D. Declared distance limitations apply'
  ],
  correct: 1,
  explanation: 'A white cross on a runway or taxiway indicates the surface is unfit for use by aircraft.',
  reference: 'AIP GEN 1.5'
},

{
  question: 'What does an ATIS information identifier (e.g., "Information Golf") tell a pilot?',
  options: [
    'A. The QNH for that day',
    'B. The sequential letter identifying which ATIS update the pilot has received, confirming they have current terminal information',
    'C. The runway length available',
    'D. The identity of the controller on duty'
  ],
  correct: 1,
  explanation: 'Each ATIS broadcast carries a sequential alphabetical identifier. When contacting ATC, pilots report the identifier to confirm they have the current terminal information.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'What triggers an ATIS update at a controlled aerodrome?',
  options: [
    'A. Once per day at 0000 UTC',
    'B. Every 30 minutes regardless of conditions',
    'C. When significant changes occur in weather, aerodrome state, or at each new hourly observation',
    'D. Only when the runway changes'
  ],
  correct: 2,
  explanation: 'ATIS is updated whenever there is a significant change in the information (weather, QNH, runway, etc.) or when a new hourly weather observation becomes available. Each update gets a new alphabetical identifier.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'What is the minimum age to hold a Private Pilot Licence in Australia?',
  options: [
    'A. 16 years',
    'B. 15 years',
    'C. 18 years',
    'D. 17 years'
  ],
  correct: 3,
  explanation: 'To be granted a Private Pilot Licence in Australia, the applicant must be at least 17 years of age at the time of the licence grant.',
  reference: 'CASR 61.160'
},

{
  question: 'What is the minimum age to hold a Commercial Pilot Licence in Australia?',
  options: [
    'A. 21 years',
    'B. 19 years',
    'C. 17 years',
    'D. 18 years'
  ],
  correct: 3,
  explanation: 'To be granted a CPL in Australia, the applicant must be at least 18 years of age.',
  reference: 'CASR 61.225'
},

{
  question: 'How many take-offs and landings must a PPL or CPL holder complete to carry passengers by day in the same aircraft category?',
  options: [
    'A. 10 in the preceding 12 months',
    'B. 1 in the last 30 days',
    'C. 3 in the preceding 90 days',
    'D. 5 in the preceding 90 days'
  ],
  correct: 2,
  explanation: 'To carry passengers, a pilot must have completed at least 3 take-offs and 3 landings as PIC within the preceding 90 days in the same aircraft category and class.',
  reference: 'CASR 61.395'
},

{
  question: 'To carry passengers at night, how many recent night take-offs and landings are required?',
  options: [
    'A. 1 in the last 30 days',
    'B. 3 in the preceding 90 days at night',
    'C. No separate night recency is required',
    'D. 5 night landings in the preceding 12 months'
  ],
  correct: 1,
  explanation: 'To carry passengers at night, a pilot must have completed 3 take-offs and 3 landings at night as PIC in the preceding 90 days in the same aircraft category.',
  reference: 'CASR 61.870'
},

{
  question: 'A CPL holder wants to fly a passenger for private (non-commercial) purposes. Is this permitted?',
  options: [
    'A. Yes — a CPL includes all PPL privileges including private flying',
    'B. Only in Class G airspace',
    'C. No — a CPL requires an AOC for all operations',
    'D. Only in aircraft under 1,000 kg MTOW'
  ],
  correct: 0,
  explanation: 'A CPL includes all PPL privileges. A CPL holder may fly for private non-commercial purposes using PPL privileges without being on hire and reward.',
  reference: 'CASR 61.390'
},

{
  question: 'A student pilot on a solo endorsement wants to carry a friend as a passenger. Is this permitted?',
  options: [
    'A. Yes, for local area flights only',
    'B. Yes, with instructor endorsement on the flight',
    'C. No — a student pilot may not carry passengers',
    'D. Yes, if the instructor has approved the route'
  ],
  correct: 2,
  explanation: 'A student pilot conducting solo training is not authorised to carry any passengers. Passenger carrying requires at least a Private Pilot Licence.',
  reference: 'CASR 61.160 / 61.165'
},

{
  question: 'What medical certificate is required to exercise CPL privileges?',
  options: [
    'A. Class 3 Medical Certificate',
    'B. No medical is required below FL180',
    'C. Class 2 Medical Certificate',
    'D. Class 1 Medical Certificate'
  ],
  correct: 3,
  explanation: 'A CPL holder must hold a valid Class 1 Medical Certificate issued under CASR Part 67 to exercise CPL privileges.',
  reference: 'CASR 61.390 / CASR Part 67'
},

{
  question: 'How long is a Class 1 Medical Certificate valid for a pilot under 40 years of age?',
  options: [
    'A. 24 months',
    'B. 6 months',
    'C. 36 months',
    'D. 12 months'
  ],
  correct: 3,
  explanation: 'A Class 1 Medical Certificate for a pilot under 40 years of age is valid for 12 months. For pilots 40 and over in airline operations, validity reduces to 6 months.',
  reference: 'CASR Part 67'
},

{
  question: 'What must a pilot do if their medical condition changes in a way that may affect their fitness to fly?',
  options: [
    'A. Self-certify as fit if symptoms are mild',
    'B. Continue flying until the next scheduled examination',
    'C. Report the change at the next annual examination only',
    'D. Not exercise licence privileges and notify their DAME for assessment'
  ],
  correct: 3,
  explanation: 'A pilot must not exercise licence privileges if they know or believe their medical fitness is compromised. They must advise their DAME and not fly until assessed as fit.',
  reference: 'CASR Part 67'
},

{
  question: 'What is the blood alcohol limit for aviation crew members in Australia?',
  options: [
    'A. 0.00 — zero tolerance',
    'B. 0.02 g/210 L breath',
    'C. 0.05 g/210 L breath — same as road',
    'D. 0.10 g/210 L breath'
  ],
  correct: 1,
  explanation: 'The blood alcohol limit for aviation crew in Australia is 0.02 g/210 L of breath — significantly lower than the 0.05 road transport limit.',
  reference: 'Civil Aviation Act 1988 s.30DB'
},

{
  question: 'What is the minimum total flight experience required to be granted a CPL?',
  options: [
    'A. 250 hours',
    'B. 150 hours',
    'C. 500 hours',
    'D. 200 hours'
  ],
  correct: 3,
  explanation: 'A CPL requires a minimum of 200 hours total aeronautical experience, including specific command, cross-country, and instrument time requirements.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'What minimum pilot-in-command time is required to qualify for a CPL?',
  options: [
    'A. 30 hours',
    'B. 50 hours',
    'C. 70 hours',
    'D. 100 hours'
  ],
  correct: 2,
  explanation: 'A CPL applicant must have completed at least 70 hours as pilot-in-command, including both solo and supervised solo (student PIC) time.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'What cross-country time is required for a CPL?',
  options: [
    'A. 100 hours',
    'B. 50 hours',
    'C. 20 hours',
    'D. 30 hours'
  ],
  correct: 0,
  explanation: 'A CPL applicant must have a minimum of 100 hours cross-country flight time, of which at least 20 hours are as PIC.',
  reference: 'CASR 61.390 Table 61.390'
},

{
  question: 'What is the purpose of a biennial flight review (BFR)?',
  options: [
    'A. A flight conducted every 2 years with an instructor to assess PIC proficiency, required to maintain PIC privileges',
    'B. An annual medical inspection',
    'C. A review required only after an incident',
    'D. A check required every 6 months for CPL holders'
  ],
  correct: 0,
  explanation: 'A biennial flight review must be completed within the previous 24 months to exercise PIC privileges. It assesses the pilot\'s ongoing proficiency with an authorised instructor.',
  reference: 'CASR 61.900'
},

{
  question: 'What is the maximum flight duty period for a single-pilot charter operation starting at 0700 local?',
  options: [
    'A. 8 hours',
    'B. 12 hours',
    'C. 14 hours',
    'D. 11 hours'
  ],
  correct: 3,
  explanation: 'Under CAO 48.1, for a single-pilot charter operation with a standard start time (0600–0859 local), the maximum FDP is 11 hours.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the maximum flight time in any 28-day period for a charter crew member?',
  options: [
    'A. 150 hours',
    'B. 100 hours',
    'C. 200 hours',
    'D. 120 hours'
  ],
  correct: 3,
  explanation: 'Under CAO 48.1, the maximum cumulative flight time in any 28 consecutive days is 120 hours for crew members in regular public transport and charter operations.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is the minimum rest period before commencing a flight duty period in a single-pilot charter operation?',
  options: [
    'A. 8 hours',
    'B. 12 hours',
    'C. 10 hours',
    'D. 6 hours'
  ],
  correct: 2,
  explanation: 'CAO 48.1 requires a minimum rest period of 10 hours before commencing an FDP in a single-pilot charter, providing at least 8 hours sleep opportunity.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'How is "flight time" measured for FDP purposes under CAO 48.1?',
  options: [
    'A. From engine start to engine shutdown',
    'B. Block-to-block — from first movement for take-off to chocks on after the final landing',
    'C. From wheels up to wheels down',
    'D. Airborne time only'
  ],
  correct: 1,
  explanation: 'Under CAO 48.1, flight time is measured block-to-block — from the moment the aircraft first moves for the purpose of take-off to when it comes to rest at the end of the flight.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What does a pilot-in-command do before exercising the pre-flight action obligation?',
  options: [
    'A. Review all available information relevant to the flight — weather, NOTAMs, aircraft documents, fuel, and performance',
    'B. Only conduct a walk-around check',
    'C. Check the aircraft logbook only',
    'D. Verify the squawk code'
  ],
  correct: 0,
  explanation: 'The PIC must take all reasonable steps to obtain information relevant to the flight, including weather, NOTAMs, aerodrome information, fuel requirements, documents, and performance planning.',
  reference: 'CASR 91.275'
},

{
  question: 'When frost is found on the wings during pre-flight, what must the pilot do?',
  options: [
    'A. Proceed if the layer is less than 3 mm thick',
    'B. Proceed if the outside air temperature is above 0°C',
    'C. Ensure the aircraft is clear of all frost, ice, and snow before take-off',
    'D. Proceed if the aircraft has a wing inspection approval'
  ],
  correct: 2,
  explanation: 'No aircraft may be operated for take-off if frost, ice, or snow is adhering to the wings, propellers, stabilising or control surfaces, or engine inlets.',
  reference: 'CASR 91.280'
},

{
  question: 'How must a pilot verify fuel quantity before departure when the gauges show close to minimum?',
  options: [
    'A. Physically check fuel quantity by dipping tanks or other means independent of fuel gauges',
    'B. Fuel verification is the maintenance organisation\'s responsibility',
    'C. Fuel gauges alone are sufficient',
    'D. A refueller\'s receipt is legally sufficient'
  ],
  correct: 0,
  explanation: 'When there is any doubt, the PIC must verify actual fuel quantity by means other than fuel gauges alone, such as physically dipping the tanks.',
  reference: 'CASR 91.285'
},

{
  question: 'All occupants must wear seat belts during which phases of flight?',
  options: [
    'A. Take-off and landing only',
    'B. Adults may choose not to wear a seat belt',
    'C. Take-off, landing, and whenever directed by the PIC',
    'D. Only during turbulence'
  ],
  correct: 2,
  explanation: 'All occupants must wear seat belts during take-off, landing, and whenever the PIC directs. The PIC is legally responsible for ensuring compliance.',
  reference: 'CASR 91.310'
},

{
  question: 'What safety briefing must a pilot give passengers before every flight?',
  options: [
    'A. Seat belts, emergency exits, smoking prohibition, emergency procedures, and any other relevant safety information',
    'B. Required only for commercial operations',
    'C. A verbal briefing is optional if a safety card is provided',
    'D. Only required for overwater flights'
  ],
  correct: 0,
  explanation: 'Before every passenger flight, the PIC must ensure all passengers are briefed on seat belts, emergency exits, no smoking, emergency procedures, and other relevant safety items.',
  reference: 'CASR 91.310'
},

{
  question: 'What is the minimum height for flight over a non-built-up area in Australia?',
  options: [
    'A. 300 ft AGL',
    'B. 500 ft AGL',
    'C. 1,000 ft AGL',
    'D. 250 ft AGL'
  ],
  correct: 1,
  explanation: 'Over areas other than built-up areas or water, an aircraft must not fly lower than 500 ft AGL, except during take-off and landing.',
  reference: 'CASR 91.645'
},

{
  question: 'What is the minimum height for flight over a built-up area in Australia?',
  options: [
    'A. 500 ft AGL',
    'B. 1,000 ft above the highest obstacle within 600 m',
    'C. 300 m above the highest obstacle within 300 m',
    'D. 1,500 ft AGL'
  ],
  correct: 1,
  explanation: 'Over a built-up area, an aircraft must maintain at least 1,000 ft above the highest obstacle within 600 m of the aircraft, and be capable of a safe forced landing if the engine fails.',
  reference: 'CASR 91.635'
},

{
  question: 'What does an Air Defence Identification Zone (ADIZ) require of a pilot entering it?',
  options: [
    'A. A filed ICAO flight plan and a position report at the ADIZ boundary',
    'B. A military clearance only',
    'C. DME equipment must be serviceable',
    'D. No special requirements for VFR pilots'
  ],
  correct: 0,
  explanation: 'Pilots entering the Australian ADIZ must have a filed ICAO flight plan and report their position at the ADIZ boundary.',
  reference: 'AIP ENR 2.1'
},

{
  question: 'What is the difference between a Restricted Area and a Danger Area?',
  options: [
    'A. Restricted Areas only apply to military aircraft',
    'B. Danger Areas are permanent; Restricted Areas are always temporary',
    'C. A Restricted Area legally restricts entry; a Danger Area warns of hazardous activity but does not legally prohibit civil flight',
    'D. There is no difference — both prohibit all flight'
  ],
  correct: 2,
  explanation: 'A Restricted Area legally restricts or prohibits civil flight without authorisation. A Danger Area warns of potentially hazardous operations but does not legally prohibit civil flight — though extreme caution is advised.',
  reference: 'AIP ENR 5.1 / CASR 91.185'
},

{
  question: 'A Temporary Reserved Airspace (TRA) is shown on a NOTAM as active for your planned route. What must you do?',
  options: [
    'A. TRAs only apply to IFR aircraft',
    'B. ATC will route you around it automatically',
    'C. NOTAMs are advisory — you may transit if flying VFR',
    'D. Avoid the TRA while it is active, or obtain permission from the controlling authority'
  ],
  correct: 3,
  explanation: 'When a TRA is active, civil aircraft must avoid the area unless they have permission from the designated authority. Activation and hours are published by NOTAM through NAIPS.',
  reference: 'AIP ENR 5.1 / NAIPS'
},

{
  question: 'What is the purpose of a SARTIME?',
  options: [
    'A. A nominated time after which SAR action will be initiated if no arrival report is received',
    'B. An ATC slot time for busy aerodromes',
    'C. A scheduled maintenance check time',
    'D. A fuel endurance declaration'
  ],
  correct: 0,
  explanation: 'A SARTIME is a nominated time at which JRCC will initiate search and rescue action if the pilot or responsible person has not cancelled the SARTIME. It is used for remote area and overwater flights.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'Who must cancel a SARTIME after a flight is complete?',
  options: [
    'A. The PIC or a nominated responsible person must cancel with JRCC or ATS on completion of the flight',
    'B. The operator cancels it the following business day',
    'C. AMSA tracks all aircraft and no cancellation is needed',
    'D. ATC cancels it automatically on landing'
  ],
  correct: 0,
  explanation: 'The PIC or their nominated responsible person must cancel the SARTIME with JRCC/ATS on completion of the flight. Failure to cancel will trigger SAR resource activation.',
  reference: 'CASR 91.225 / AIP ENR 1.10'
},

{
  question: 'What is the consequence of failing to cancel a SARTIME after landing safely?',
  options: [
    'A. The pilot\'s licence is automatically suspended',
    'B. No consequence — it is the responsible person\'s problem only',
    'C. SAR resources are activated, wasting critical emergency assets, and the pilot may face costs or penalties',
    'D. A $200 fine is issued automatically'
  ],
  correct: 2,
  explanation: 'Failure to cancel a SARTIME triggers activation of JRCC SAR resources. This wastes considerable emergency resources and may result in civil or criminal liability.',
  reference: 'CASR 91.225 / Civil Aviation Act 1988'
}

]
