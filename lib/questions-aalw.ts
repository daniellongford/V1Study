export const aalwQuestions: {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  reference?: string;
}[] = [

{
  question: 'The minimum age requirement for the grant of an Air Transport Pilot Licence (Aeroplane) under CASR Part 61 is:',
  options: [
    'A. 18 years',
    'B. 21 years',
    'C. 19 years',
    'D. 20 years'
  ],
  correct: 1,
  explanation: 'Under CASR Part 61.645, an applicant for an ATPL (Aeroplane) must be at least 21 years of age. This is higher than the CPL requirement of 18 years, reflecting the increased responsibility and multi-crew operations associated with the ATPL.',
  reference: 'CASR Part 61.645'
},

{
  question: 'An ATPL holder acting as pilot in command of a multi-crew aircraft under the IFR is required to hold a current:',
  options: [
    'A. Instrument rating only — no additional ratings are required for multi-crew operations',
    'B. Command instrument rating (CIR) in the relevant aircraft category',
    'C. Private IFR rating endorsed on the ATPL',
    'D. Grade 1 instrument rating issued by CASA'
  ],
  correct: 1,
  explanation: 'Under CASR Part 61, an ATPL holder acting as PIC under IFR in multi-crew operations must hold a Command Instrument Rating (CIR) for the relevant aircraft category. The CIR authorises the holder to act as pilot in command under IFR, distinguishing it from a co-pilot instrument rating.',
  reference: 'CASR Part 61 / AIP ENR 1.1'
},

{
  question: 'The privileges of an ATPL (Aeroplane) include the authority to act as:',
  options: [
    'A. Pilot in command of any aircraft engaged in air transport operations only, except when the operation involves more than 9 passenger seats',
    'B. Pilot in command of any aeroplane engaged in any operation, and as co-pilot of any aeroplane required to be operated with a co-pilot',
    'C. Pilot in command of multi-engine aeroplanes above 5,700 kg MTOW only, provided a current instrument rating is held for the relevant aircraft category',
    'D. Pilot in command on scheduled RPT operations only — charter requires a separate endorsement'
  ],
  correct: 1,
  explanation: 'The ATPL (Aeroplane) authorises the holder to act as PIC of any aeroplane engaged in any operation, and as co-pilot of any aeroplane required to be operated with a co-pilot. It is the highest level of pilot licence and encompasses the privileges of the CPL and PPL.',
  reference: 'CASR Part 61.650'
},

{
  question: 'To maintain recency as PIC on a multi-crew type, an ATPL holder must have completed at least how many hours as PIC or co-pilot on the type in the previous 90 days?',
  options: [
    'A. 3 take-offs and 3 landings in the previous 90 days as PIC or with a qualified pilot acting as PIC',
    'B. 1 hour as PIC or 3 hours as co-pilot in the previous 90 days',
    'C. 5 hours of flight time on the type including at least 3 instrument approaches',
    'D. 10 hours total flight time in the previous 90 days on any type'
  ],
  correct: 0,
  explanation: 'Under CASR Part 61, to exercise pilot in command privileges on a type, the holder must have conducted at least 3 take-offs and 3 landings in the previous 90 days on the type or a simulator approved for recency. This is the standard recency requirement for maintaining PIC privileges.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'An ATPL holder whose licence has been suspended may:',
  options: [
    'A. Continue to act as co-pilot under supervision of another ATPL holder',
    'B. Not exercise any of the privileges of the licence during the period of suspension',
    'C. Continue to act as PIC on domestic operations not involving passengers',
    'D. Exercise CPL privileges if the CPL was the qualifying licence for the ATPL'
  ],
  correct: 1,
  explanation: 'A suspended licence cannot be exercised at all during the suspension period. The ATPL holder cannot exercise any privileges of the licence — including CPL or PPL privileges that are encompassed within the ATPL — while it is suspended. Suspension removes all associated operating authority.',
  reference: 'CASR Part 61 / Civil Aviation Act 1988'
},

{
  question: 'For multi-crew operations, the minimum flight crew composition required is determined by:',
  options: [
    'A. The operator\\\'s Operations Manual regardless of the aircraft flight manual',
    'B. The number of passengers carried — one crew member per 50 passengers',
    'C. CASA approval on a case by case basis for each operation, subject to written approval from the operator's chief pilot',
    'D. The aircraft\\\'s type certificate and flight manual — the minimum crew specified in the AFM must be carried'
  ],
  correct: 3,
  explanation: 'Minimum flight crew is determined by the aircraft\\\'s Type Certificate and Flight Manual (AFM). The minimum crew specified in the AFM is the legal minimum. An operator\\\'s Operations Manual may specify additional crew but cannot reduce below the AFM minimum. CASR Part 91 and Part 121 also specify requirements that may be more stringent.',
  reference: 'CASR Part 91 / CAO 82.0'
},

{
  question: 'An ATPL holder acting as co-pilot on a type for which they hold a type rating but have not flown for 6 months must:',
  options: [
    'A. Complete a full type rating renewal course before flying the type',
    'B. Complete a proficiency check in the aircraft type or an approved simulator before exercising co-pilot privileges',
    'C. Fly 3 hours dual with a Type Rating Examiner before resuming line operations',
    'D. There are no currency requirements for a co-pilot who holds a valid type rating'
  ],
  correct: 1,
  explanation: 'Under CASR Part 61, a pilot who has not exercised type rating privileges within the preceding 12 months must complete a proficiency check. If not flown for 6 months but within 12 months, recency requirements (3 take-offs and landings within 90 days) may apply. A proficiency check in the aircraft or approved simulator is required to restore currency after extended absence.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'An airline\\\'s Operations Manual requires 4 flight crew on an ultra-long range operation, but the aircraft AFM specifies a minimum crew of 2. The legal minimum crew for the operation is:',
  options: [
    'A. 2 — the AFM minimum is the legal requirement and the Operations Manual cannot increase it',
    'B. 3 — a compromise between the AFM minimum and the operator requirement',
    'C. 2 for domestic legs and 4 for international legs of the same operation',
    'D. 4 — the Operations Manual is binding on the operator and crew and establishes the legal requirement for that operation'
  ],
  correct: 3,
  explanation: 'The operator\\\'s Operations Manual is binding on the operator and crew. While the AFM establishes the absolute minimum (2), the operator can and must specify more crew where required for safety. On an ultra-long range operation the Operations Manual minimum of 4 becomes the legal minimum for that operator\\\'s operations. The crew cannot operate below the Operations Manual requirement.',
  reference: 'CASR Part 121 / CAO 82.0'
},

{
  question: 'The flight and duty time limitations for multi-crew airline operations are primarily contained in:',
  options: [
    'A. CASR Part 61 which specifies all duty limits for all licence holders',
    'B. The individual operator\\\'s Award agreement which takes precedence over CAO 48.1',
    'C. AIP GEN 2.1 which lists all flight time limitations for Australian operations',
    'D. CAO 48.1 which specifies flight and duty time limitations for multi-crew air transport operations'
  ],
  correct: 3,
  explanation: 'CAO 48.1 specifies the flight and duty time limitations for Australian air transport operations including multi-crew airline operations. It sets maximum flight time, minimum rest requirements, and cumulative limits. CAO 48.1 limits cannot be overridden by industrial agreements — it is a safety requirement, not a condition of employment.',
  reference: 'CAO 48.1'
},

{
  question: 'Under CAO 48.1, the maximum flight time for a single pilot in a 24-hour period is:',
  options: [
    'A. 8 hours',
    'B. 10 hours',
    'C. 12 hours',
    'D. 11 hours'
  ],
  correct: 1,
  explanation: 'Under CAO 48.1, the maximum flight time for a single pilot in any 24-hour period is 10 hours. For augmented crew operations (3 or more pilots), the limit may be extended. The 10-hour single pilot limit is a hard limit that cannot be exceeded regardless of circumstances except in a genuine in-flight emergency.',
  reference: 'CAO 48.1'
},

{
  question: 'A co-pilot on an RPT operation who does not hold an ATPL may:',
  options: [
    'A. Only act as co-pilot on aircraft not exceeding 5,700 kg MTOW, subject to the pilot completing the required recurrent training within 12 months',
    'B. Act as co-pilot on any aircraft provided they hold a CPL with an appropriate aircraft type rating and instrument rating',
    'C. Act as co-pilot only on domestic operations not involving international airspace',
    'D. Act as co-pilot on any operation but cannot be rostered as acting pilot in command under any circumstances'
  ],
  correct: 1,
  explanation: 'A CPL holder with appropriate type rating and instrument rating may act as co-pilot on multi-crew airline operations. The ATPL is only required to act as PIC. A CPL co-pilot on an RPT operation is legal provided all applicable rating requirements are met. The ATPL holder acts as PIC; the CPL holder fills the co-pilot role.',
  reference: 'CASR Part 61 / CASR Part 121'
},

{
  question: 'An ATPL holder is required to hold a valid Class 1 medical certificate when:',
  options: [
    'A. Exercising any of the privileges of the ATPL — a Class 1 medical is required at all times when acting under the ATPL',
    'B. Acting as PIC on any RPT operation carrying passengers, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Acting as PIC only — a Class 2 medical is sufficient for co-pilot operations',
    'D. Flying aircraft above 5,700 kg MTOW regardless of the role, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'An ATPL holder must hold a valid Class 1 Aviation Medical Certificate whenever exercising the privileges of the ATPL. This applies whether acting as PIC or co-pilot. A Class 1 medical certificate must be current at the time of exercising licence privileges — operating with an expired medical is a serious regulatory breach.',
  reference: 'CASR Part 67 / CASR Part 61'
},

{
  question: 'An ATPL holder\\\'s licence expires if not renewed. Under CASR Part 61, the ATPL must be renewed:',
  options: [
    'A. Every 2 years by passing a written examination, subject to the operator's approved exposition authorising such operations',
    'B. Every 5 years with a CASA-approved licence renewal course',
    'C. Every 3 years by demonstrating recency to a flight examiner',
    'D. A licence does not expire — however associated ratings and medical certificates must remain current'
  ],
  correct: 3,
  explanation: 'Under CASR Part 61, an ATPL (and other licences) does not expire. The licence itself is granted for life. However, the medical certificate, type ratings, instrument rating, and other associated ratings have expiry dates and must be kept current to exercise the privileges of the licence. An ATPL holder cannot legally exercise privileges without a current medical and current ratings.',
  reference: 'CASR Part 61'
},

{
  question: 'A pilot holds an ATPL(A) with a type rating for the B737. They are offered a position flying the A320. Before flying the A320 as co-pilot on an RPT operation they must:',
  options: [
    'A. Obtain an ATPL type rating for the A320 from CASA, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Complete 20 hours of line flying on the A320 under supervision of a check captain',
    'C. Complete an approved A320 type rating course and pass the required flight test to add the A320 rating to their licence',
    'D. No additional rating is required — the ATPL authorises flight on any multi-engine jet'
  ],
  correct: 2,
  explanation: 'A type rating is required for each specific aircraft type that requires one (typically turbine-powered aircraft above a certain performance threshold). The pilot must complete an approved A320 type rating course, pass the required skill test with an authorised examiner, and have the A320 type rating added to their licence before operating the aircraft.',
  reference: 'CASR Part 61'
},

{
  question: 'Which of the following would allow an ATPL(A) holder to fly as the sole pilot of an aircraft in VMC?',
  options: [
    'A. An ATPL automatically grants all lower privileges including single pilot operations, subject to the pilot completing the required recurrent training within 12 months',
    'B. A separate single-pilot endorsement must be added to the ATPL for solo operations, provided a current instrument rating is held for the relevant aircraft category',
    'C. The ATPL(A) encompasses CPL(A) and PPL(A) privileges, so the holder may fly as sole pilot in VMC on aircraft that do not require a co-pilot or type rating, subject to holding appropriate ratings',
    'D. An ATPL holder cannot legally fly as sole pilot — they must always have a co-pilot, except when the operation involves more than 9 passenger seats'
  ],
  correct: 2,
  explanation: 'The ATPL encompasses the privileges of the CPL and PPL. An ATPL(A) holder may fly as sole pilot of an aeroplane in VMC that does not require a co-pilot, provided they hold the appropriate class rating. The ATPL does not restrict the holder to multi-crew only operations — it grants all lower privileges as well.',
  reference: 'CASR Part 61.650'
},

{
  question: 'The minimum total aeronautical experience required to qualify for an ATPL (Aeroplane) includes:',
  options: [
    'A. 1,500 hours total time including 500 hours cross-country and 100 hours night, provided the pilot has logged at least 3 hours on type in the preceding 90 days',
    'B. 1,000 hours total including 250 hours on multi-engine types, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. 3,000 hours total time of which 1,500 hours must be on multi-crew operations, subject to completing a flight review within the preceding 12 months',
    'D. 1,500 hours total time of which at least 500 hours is cross-country time, 100 hours is night flying, and 75 hours is instrument time'
  ],
  correct: 3,
  explanation: 'CASR Part 61 specifies that an ATPL(A) applicant must have at least 1,500 hours total flight time including 500 hours cross-country, 100 hours night flying, and 75 hours instrument time (of which 50 hours may be in a simulator). These are the ICAO Annex 1 minimum requirements adopted in Australian regulations.',
  reference: 'CASR Part 61 / ICAO Annex 1'
},

{
  question: 'An ATPL(A) holder who has not flown for 12 months wishes to act as PIC of a B737 on an RPT operation. They must:',
  options: [
    'A. Complete 3 take-offs and landings in the previous 90 days to restore recency',
    'B. Complete a minimum of 5 hours route flying with a check captain before solo operations',
    'C. Pass a written examination on the B737 systems and limitations, subject to written approval from the operator's chief pilot',
    'D. Complete a proficiency check in the B737 or approved FFS with a type rating examiner before exercising PIC privileges'
  ],
  correct: 3,
  explanation: 'Under CASR Part 61, a pilot who has not exercised type rating privileges within the preceding 12 months must complete a proficiency check before exercising those privileges. The check is conducted in the aircraft type or an approved full-flight simulator (FFS) by an authorised Type Rating Examiner (TRE). This applies regardless of total experience.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'The "line check" required for RPT airline operations is:',
  options: [
    'A. An annual theoretical examination on the aircraft type and company procedures, provided a current instrument rating is held for the relevant aircraft category',
    'B. A periodic check conducted by an authorised check captain during a normal line operation to assess the pilot\\\'s performance to the required standard',
    'C. A simulator check focusing on emergency procedures and abnormal operations, subject to the operator's approved exposition authorising such operations',
    'D. A check conducted by CASA on a random basis to ensure operational standards, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 1,
  explanation: 'A line check is conducted during normal line operations (not a simulator) by an authorised check captain (line captain), typically annually. It assesses the pilot\\\'s overall performance in normal line operations — crew management, use of procedures, communication, and airmanship — rather than specifically targeting emergency procedures (which are the focus of simulator proficiency checks).',
  reference: 'CASR Part 121 / CAO 82.3'
},

{
  question: 'For RPT operations under CAO 82.3, the operator is required to ensure that flight crew complete an operator proficiency check (OPC) at intervals not exceeding:',
  options: [
    'A. 6 months, provided the currency requirement is met within the preceding 6 months',
    'B. 24 months for pilots with more than 5,000 hours on type',
    'C. 3 months for all first officers and 6 months for captains',
    'D. 12 months — with at least one check being conducted in a full flight simulator'
  ],
  correct: 3,
  explanation: 'Under CAO 82.3 and CASR Part 121, operators must conduct OPCs at intervals not exceeding 12 months. For aircraft requiring a type rating, at least one of the periodic checks must be conducted in a full flight simulator (FFS). The OPC tests emergency and abnormal procedures, instrument flying, and relevant technical knowledge.',
  reference: 'CAO 82.3 / CASR Part 121'
},

{
  question: 'An ATPL holder on leave without pay from an airline wishes to maintain their type rating currency by flying for another operator on the same aircraft type. This is:',
  options: [
    'A. Permitted provided the pilot holds a current type rating, medical certificate, and satisfies the recency requirements — type ratings attach to the individual licence not the operator',
    'B. Not permitted — type ratings are operator-specific under CASR Part 121, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Permitted only with written approval from CASA, subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'D. Permitted only if the leave period does not exceed 28 days, except when the operation involves more than 9 passenger seats, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'Type ratings in Australia attach to the individual pilot\\\'s licence, not to a specific operator. An ATPL holder with a current type rating may exercise those privileges with any operator. The pilot must hold a current medical, meet recency requirements, and comply with the new operator\\\'s Operations Manual requirements (such as company indoctrination).',
  reference: 'CASR Part 61'
},

{
  question: 'A pilot holding an ATPL(A) with a B737 type rating wishes to act as PIC on a charter flight in a single-engine turbine aeroplane (Pilatus PC-12). They require:',
  options: [
    'A. An endorsement or rating for the PC-12 if it requires a specific endorsement, plus currency and recency on the type',
    'B. No additional rating — the ATPL covers all aeroplanes, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. A separate CPL(A) with a single-engine rating — the ATPL only covers multi-engine types',
    'D. A Class 3 command check with a Grade 1 Flight Instructor, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 0,
  explanation: 'The ATPL(A) includes all aeroplane class privileges, but if the PC-12 (as a turbine-powered type) requires a specific type or design feature endorsement, the pilot must hold that endorsement. For turbine aeroplanes, an endorsement for turbine-powered aeroplanes and/or the specific type is typically required. Currency and recency on the specific type must also be maintained.',
  reference: 'CASR Part 61'
},

{
  question: 'Under CASR Part 61, the holder of an ATPL may carry passengers as PIC only when:',
  options: [
    'A. Conducting the flight under the IFR — ATPL privileges are IFR only, subject to the operator's approved exposition authorising such operations',
    'B. The aircraft is operated by an AOC holder — private ATPL operations with passengers are prohibited, subject to the requirements of the applicable Civil Aviation Order',
    'C. The pilot has logged at least 100 hours in the preceding 12 months, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. The medical certificate is current, all applicable ratings are current, recency requirements are met, and the flight is conducted in accordance with applicable regulations'
  ],
  correct: 3,
  explanation: 'An ATPL holder may carry passengers as PIC provided: current Class 1 medical; all ratings are current (type rating, instrument rating if IFR); recency requirements met (3 T/O and landings in 90 days); aircraft is airworthy; and the operation complies with applicable regulations. The ATPL itself does not restrict passenger carriage to AOC operations.',
  reference: 'CASR Part 61 / CASR Part 91'
},

{
  question: 'The instrument flight rules recency requirement for an ATPL holder to carry passengers IFR as PIC requires the pilot to have completed in the preceding 90 days:',
  options: [
    'A. 1 hour of actual instrument flight time',
    'B. 5 hours of instrument flight time of which 2 hours must be in actual IMC',
    'C. 3 instrument approaches and associated tracking and holding, in actual or simulated IMC',
    'D. 6 instrument approaches to instrument meteorological minima in the preceding 6 months'
  ],
  correct: 2,
  explanation: 'Under CASR Part 61, IFR recency requires 3 instrument approaches (and associated tracking and holding tasks) in the preceding 90 days, conducted in actual IMC, a simulator, or under a safety pilot. For ATPL holders in airline operations, the line operations and simulator checks typically satisfy this requirement. The 90-day window is the standard IFR recency period.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'An ATPL holder who has been assessed as having a temporary medical condition that precludes flying may:',
  options: [
    'A. Continue to act as co-pilot provided the other pilot holds an ATPL, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Continue to conduct simulator training only as this does not involve actual flight, subject to written approval from the operator's chief pilot',
    'C. Act as an observer on the flight deck but not as an active crew member, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Not exercise any privileges of the licence until cleared by CASA Aviation Medicine — the licence is effectively suspended for the duration of the incapacity'
  ],
  correct: 3,
  explanation: 'A pilot who no longer meets the medical requirements for their certificate must not exercise the privileges of their licence until CASA Aviation Medicine has assessed and cleared them. This applies to temporary conditions as well — the pilot should voluntarily ground themselves and seek medical clearance. Flying with a known incapacitating condition is a serious safety and legal breach.',
  reference: 'CASR Part 67 / Civil Aviation Act 1988'
},

{
  question: 'ATPL recency for a type rating requires 3 take-offs and 3 landings in the preceding 90 days. If a pilot is one day outside the 90-day window, they may restore currency by:',
  options: [
    'A. Conducting 3 take-offs and landings on the type, or in an approved FFS, with or without a second pilot — this is purely a recency exercise, not a check',
    'B. Conducting a single touch-and-go landing to demonstrate currency, subject to the pilot completing the required recurrent training within 12 months',
    'C. Completing a full proficiency check with a Type Rating Examiner, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Flying 3 hours on the type to restore all recency requirements, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: 'Recency (3 take-offs and landings in 90 days) is a currency requirement, not a competency check. A pilot whose recency has lapsed may restore it by conducting the required take-offs and landings on the type or in an approved simulator. This does not require an examiner — it can be done with or without another crew member. If currency has lapsed beyond 12 months, a proficiency check is required instead.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'An ATPL holder who is a check captain conducting simulator assessments must themselves hold:',
  options: [
    'A. Only a current ATPL — no additional ratings are needed to conduct simulator training, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. A Grade 1 Flight Instructor Rating and a type rating examiner authority, except during the period of any declared low visibility procedures at the aerodrome',
    'C. A Class 1 medical even when conducting simulator-only duties, subject to the operator's approved exposition authorising such operations',
    'D. An appropriate examining authority or flight examiner rating, or be authorised by the operator under CASA approval, to conduct formal checks and examinations'
  ],
  correct: 3,
  explanation: 'To conduct formal checks and examinations (proficiency checks, type rating tests), a pilot must hold an appropriate examining authority (flight examiner rating or be authorised under the operator\\\'s CASA-approved system). An ATPL alone does not authorise the holder to conduct formal assessments. Check captains must be authorised under the operator\\\'s exposition and applicable regulations.',
  reference: 'CASR Part 61 / CASR Part 121'
},

{
  question: 'The maximum accumulated flight time for an ATPL holder in any 12-month period under CAO 48.1 is:',
  options: [
    'A. 900 hours',
    'B. 1,200 hours',
    'C. 1,000 hours',
    'D. 800 hours'
  ],
  correct: 2,
  explanation: 'Under CAO 48.1, the maximum accumulated flight time in any 12-month period is 1,000 hours. This is a cumulative limit designed to prevent chronic fatigue from high annual flight hours. The 1,000-hour annual limit applies in addition to daily and monthly limits.',
  reference: 'CAO 48.1'
},

{
  question: 'An ATPL holder who is required to complete a biennial medical examination fails to attend the scheduled examination. Their Class 1 medical certificate:',
  options: [
    'A. Remains valid for an additional 30-day grace period after the due date, only when operating in Class C or Class D controlled airspace',
    'B. Expires on the due date — the pilot may not exercise licence privileges until a new Class 1 medical certificate is issued',
    'C. Reverts to Class 2 status automatically until the Class 1 examination is completed',
    'D. Remains valid provided the pilot is not aware of any new medical conditions'
  ],
  correct: 1,
  explanation: 'A Class 1 medical certificate expires on the date specified. There is no grace period — on expiry, the pilot may not exercise the privileges of any licence that requires a Class 1 medical. The pilot must not fly as PIC under the ATPL until a new Class 1 certificate is issued following an approved examination.',
  reference: 'CASR Part 67'
},

{
  question: 'During a multi-crew flight, if the PIC becomes incapacitated, the co-pilot must:',
  options: [
    'A. Declare an emergency and land at the nearest aerodrome regardless of fuel state, provided a current instrument rating is held for the relevant aircraft category',
    'B. Assume control of the aircraft, declare an emergency with ATC, and complete the flight safely in accordance with the operator\\\'s procedures for pilot incapacitation',
    'C. Contact company operations before taking any action to change the flight plan, provided a current instrument rating is held for the relevant aircraft category',
    'D. Transfer PIC responsibilities to the senior cabin crew member while contacting company, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'Pilot incapacitation is a drill practised by all multi-crew operators. The co-pilot takes control immediately, advises ATC (declaring emergency if appropriate), and follows the operator\\\'s incapacitation procedures. Immediate action is: take control, maintain aircraft safety. Then: communicate, seek medical assistance for the incapacitated pilot, plan for landing at a suitable airport.',
  reference: 'CASR Part 121 / Operator SOPs'
},

{
  question: 'A pilot is rostered as a relief pilot on an augmented crew flight. As a relief pilot they are authorised to:',
  options: [
    'A. Occupy a pilot seat and perform pilot duties in cruise only — they may not be the handling pilot during take-off or landing',
    'B. Act as pilot in command during any phase of flight when the captain is resting',
    'C. Perform any flight crew duty at any time at the captain\\\'s discretion, provided a current instrument rating is held for the relevant aircraft category',
    'D. Only monitor systems from the observer seat — they may not touch flight controls'
  ],
  correct: 0,
  explanation: 'Relief (augmenting) crew may perform pilot duties during cruise flight only. Under CASR Part 121 and CAO 82.0, relief crew may not be the handling pilot during take-off, approach, or landing. Their role is to relieve the operating crew during en-route cruise to manage fatigue on long-haul operations. The minimum crew at critical phases must still be met.',
  reference: 'CASR Part 121 / CAO 82.0'
},

{
  question: 'The holder of an ATPL(A) wishes to exercise the privileges of the licence for aerial work (banner towing). They require:',
  options: [
    'A. No additional requirements — the ATPL covers all commercial operations, only when operating in Class C or Class D controlled airspace',
    'B. A separate aerial application rating from CASA, only when operating in Class C or Class D controlled airspace',
    'C. An aerial work aircraft endorsement on their licence for operations involving banner towing or similar aerial work activities',
    'D. Written authorisation from the aircraft owner for each aerial work flight, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'Certain specialised operations such as aerial work (banner towing, mustering, agricultural operations) require specific endorsements in addition to the licence. An aerial work endorsement must be held by the pilot conducting such operations. The ATPL provides the foundation privileges but does not automatically authorise all specialist activities.',
  reference: 'CASR Part 61'
},

{
  question: 'An ATPL holder acting as PIC on an IFR charter flight is responsible for ensuring the aircraft documents carried on board include:',
  options: [
    'A. Current Certificate of Registration, Certificate of Airworthiness (or permit), current maintenance release, required manuals, journey log, and radio licence',
    'B. The aircraft registration certificate only — other documents are the responsibility of the operator, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Only the maintenance release and radio licence — other documents are kept at base, subject to written approval from the operator's chief pilot',
    'D. A copy of the relevant CASR Parts applicable to the operation, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 0,
  explanation: 'Under CASR Part 91 and CAR, the PIC must ensure that required documents are carried on board. These include the Certificate of Registration, Certificate of Airworthiness (or equivalent), current maintenance release (airworthiness document), crew licences, radio licence, and applicable manuals. The PIC is ultimately responsible for this check before flight.',
  reference: 'CASR Part 91 / CAR Part XI'
},

{
  question: 'The minimum rest period required under CAO 48.1 before commencing a flight duty period for an airline pilot operating under multi-crew rules is:',
  options: [
    'A. 8 hours free from all duty',
    'B. 12 hours from the end of the previous flight duty period',
    'C. 9 hours from the end of the previous duty period',
    'D. 10 hours free from duty including the opportunity for 8 hours sleep'
  ],
  correct: 3,
  explanation: 'Under CAO 48.1, the minimum rest period before a flight duty period is 10 hours, of which at least 8 hours must be available for sleep (free from all work responsibilities). The 10-hour rest period must be provided by the operator and cannot be reduced except under specific circumstances outlined in the Order.',
  reference: 'CAO 48.1'
},

{
  question: 'An ATPL holder conducting a ferry flight of a new aircraft from the manufacturer requires:',
  options: [
    'A. The standard documents plus a ferry permit if the CofA is not yet issued, subject to the requirements of the applicable Civil Aviation Order',
    'B. Only a manufacturer\\\'s authorisation letter — no CASA documentation is required for delivery flights',
    'C. An experimental aircraft certificate issued by CASA for each delivery flight, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. A ferry permit issued by CASA authorising the flight under specific conditions, in addition to normal crew licensing requirements'
  ],
  correct: 3,
  explanation: 'If an aircraft\\\'s Certificate of Airworthiness has not yet been issued (e.g. during delivery or after maintenance), CASA may issue a special flight permit (ferry permit) authorising the flight under specified conditions and route. The pilot must hold appropriate ratings and comply with the permit conditions. This is distinct from a standard CofA operation.',
  reference: 'CASR Part 21 / CAR'
},

{
  question: 'When acting as PIC, an ATPL holder is responsible for the safety of the aircraft and its occupants. Under CASR Part 91, the PIC may deviate from any rule to the extent necessary when:',
  options: [
    'A. The deviation is authorised in advance by CASA Operations, provided a current instrument rating is held for the relevant aircraft category',
    'B. Weather conditions make strict compliance impossible, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. An emergency requires immediate action — the PIC may deviate from any rule as necessary in an emergency and must report the deviation to CASA as soon as practicable',
    'D. The operator\\\'s Operations Manual authorises such deviation, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 2,
  explanation: 'Under CASR Part 91, in an emergency the PIC may deviate from any CASR rule to the extent necessary to meet the emergency. The deviation must be reported to CASA as soon as practicable. This emergency authority is absolute — no prior approval is needed. The PIC\\\'s primary obligation is safety of the aircraft and its occupants.',
  reference: 'CASR Part 91.025'
},

{
  question: 'An ATPL holder is offered a flight that would take their total flight time for the month to 105 hours. Under CAO 48.1, the maximum flight time in any calendar month is:',
  options: [
    'A. 100 hours — they may not accept the flight as it would exceed the monthly limit',
    'B. 110 hours — they may accept the flight',
    'C. 120 hours — the monthly limit does not apply in this situation',
    'D. 90 hours — the pilot has already exceeded the monthly limit'
  ],
  correct: 0,
  explanation: 'Under CAO 48.1, the maximum flight time in any calendar month is 100 hours. Accepting a flight that would take the total to 105 hours would breach this limit. The pilot must decline the flight or ensure the total for the calendar month does not exceed 100 hours. This is the pilot\\\'s personal responsibility as well as the operator\\\'s scheduling responsibility.',
  reference: 'CAO 48.1'
},

{
  question: 'An ATPL holder is appointed as "pilot in command under supervision" (PICUS) on a type rating upgrade. Time logged as PICUS counts toward:',
  options: [
    'A. Co-pilot time only — PICUS cannot be logged as PIC time, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. PIC time, provided the supervising pilot in command confirms the PICUS operated as PIC throughout and records it appropriately in the journey log',
    'C. Flight time but not toward specific PIC hour requirements for licence applications, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. Training time only — it cannot be logged as PIC or co-pilot, except when the operation involves more than 9 passenger seats'
  ],
  correct: 1,
  explanation: 'PICUS (Pilot in Command Under Supervision) time may be logged as PIC time provided the supervising pilot has confirmed that the PICUS was performing the role of pilot in command throughout. This time counts toward PIC hour requirements for licence applications and recency purposes. The supervising PIC retains ultimate responsibility but logs co-pilot time.',
  reference: 'CASR Part 61 / CAA AC 61-01'
},

{
  question: 'An ATPL holder operating under CAO 82.3 (RPT operations) must complete a route and aerodrome qualification before acting as PIC to a new destination. This qualification requires:',
  options: [
    'A. Familiarity with the route, terrain, weather patterns, and aerodrome including approach procedures, either by prior flight on the route with a qualified pilot or through approved self-study with an examination',
    'B. A theoretical examination on the aerodrome\\\'s procedures and NOTAMs only, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Only the operator to confirm familiarity through its documentation system — no physical visit or flight is required, only when operating in Class C or Class D controlled airspace',
    'D. A minimum of 3 flights on the route as co-pilot before assuming PIC duties, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 0,
  explanation: 'Route and aerodrome qualification (RAQ) under CAO 82.3 requires the PIC to be familiar with the route, terrain, significant meteorological hazards, instrument procedures, and aerodrome layout. This is typically achieved through a combination of study of the operator\\\'s route documentation, approach charts, and either a qualifying flight or an approved computer-based system. The specific requirements are specified in the operator\\\'s exposition.',
  reference: 'CAO 82.3 / CASR Part 121'
},

{
  question: 'Under CASR Part 61, the holder of an ATPL may exercise the privileges of a PPL and CPL. This means an ATPL holder:',
  options: [
    'A. Must carry both their CPL and ATPL on all flights, subject to the operator's approved exposition authorising such operations',
    'B. Must renew the CPL separately to maintain the commercial flying privileges, subject to the pilot completing the required recurrent training within 12 months',
    'C. Requires a separate endorsement to exercise PPL privileges while holding an ATPL, provided a current instrument rating is held for the relevant aircraft category',
    'D. Can exercise all privileges of the PPL(A) and CPL(A) without holding separate PPL or CPL licences — the ATPL encompasses these privileges'
  ],
  correct: 3,
  explanation: 'The ATPL(A) encompasses all the privileges of the CPL(A) and PPL(A). The holder does not need to hold or maintain separate CPL or PPL licences — the ATPL grants all these privileges by default. However, ratings (instrument rating, type ratings, class ratings, endorsements) must still be held and maintained separately.',
  reference: 'CASR Part 61.650'
},

{
  question: 'A pilot is rostered as captain on a B737 operation. Before push-back, they notice a minor cabin pressure indication anomaly. Their responsibility is to:',
  options: [
    'A. Continue the flight — minor anomalies do not need investigation before departure, subject to written approval from the operator's chief pilot',
    'B. Delegate the assessment to the first officer and ground engineer without reviewing it personally, except when the operation involves more than 9 passenger seats',
    'C. File a safety report after landing but proceed with the departure, subject to the operator's approved exposition authorising such operations',
    'D. Assess whether the defect affects the airworthiness of the aircraft, consult the MEL, and decide whether the aircraft is airworthy for the planned operation before accepting the aircraft'
  ],
  correct: 3,
  explanation: 'The PIC is responsible for the airworthiness of the aircraft before commencing a flight. They must assess whether any defect or anomaly affects airworthiness, cross-reference the Minimum Equipment List (MEL) if applicable, and only commence the flight if satisfied the aircraft is airworthy. Delegating this responsibility entirely to others without personal assessment is not acceptable.',
  reference: 'CASR Part 91 / CAO 82.3'
},

{
  question: 'When an ATPL holder acts as PIC on an RPT operation, they are considered the "responsible person" under the Civil Aviation Act. This means:',
  options: [
    'A. They are responsible only for events occurring after engine start, provided the aircraft holds a valid maintenance release and is within weight limits, provided a current instrumen',
    'B. They share equal responsibility with the operator for regulatory compliance, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'C. Their responsibility is limited to in-flight decisions — pre-flight planning is the operator\\\'s responsibility, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. They bear ultimate responsibility for the safe conduct of the flight from acceptance of the aircraft to termination of the flight, and may be held personally accountable for breaches of the regulations'
  ],
  correct: 3,
  explanation: 'The PIC is the "responsible person" under the Civil Aviation Act and is ultimately accountable for the safe conduct of the flight. This responsibility begins on acceptance of the aircraft and continues until the flight is complete. The PIC can be held personally accountable for regulatory breaches even if they were following operator instructions — there is no "defence of following orders" in aviation safety law.',
  reference: 'Civil Aviation Act 1988 / CASR Part 91'
},

{
  question: 'An ATPL holder discovers, after landing, that they operated with an expired instrument rating. The most appropriate immediate action is:',
  options: [
    'A. Complete the next proficiency check as soon as possible and consider the matter resolved',
    'B. Self-report the occurrence to CASA under the voluntary disclosure scheme and ground themselves pending renewal of the instrument rating',
    'C. Report the matter to the operator and allow the operator to manage the disclosure to CASA',
    'D. Only disclose if the matter is raised by a third party such as an ATC or maintenance report'
  ],
  correct: 1,
  explanation: 'Operating with an expired rating is a regulatory breach. The appropriate action is to ground oneself immediately and self-report to CASA under the voluntary disclosure scheme (Avsafety). The voluntary disclosure scheme provides some protection from enforcement action for those who self-report in good faith. The pilot must not fly again under those privileges until the rating is renewed.',
  reference: 'Civil Aviation Act 1988 / CASR / Avsafety Scheme'
},

{
  question: 'An ATPL holder who is the designated PIC on a flight refuses to continue the flight after observing that the first officer appears to be significantly fatigued. The PIC\\\'s authority in this situation is:',
  options: [
    'A. Limited — the company must be consulted before removing a crew member from duty, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the requirements ',
    'B. Only exercisable if the first officer is formally declared medically unfit, except when the operation involves more than 9 passenger seats, only when operating in Class',
    'C. Absolute — the PIC may refuse to operate or remove a crew member from flight duties if satisfied that the crew member is not fit to perform their duties, and the PIC\\\'s decision cannot be overridden by the company',
    'D. Not applicable — fatigue is a self-declaration matter for the first officer alone, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 2,
  explanation: 'The PIC has absolute authority over the operation and safety of the aircraft. Under CASR Part 91 and the Civil Aviation Act, the PIC may remove from duty any crew member they consider unfit. This authority cannot be overridden by company pressure. The decision to ground a crew member for fitness concerns is the PIC\\\'s sole responsibility and authority.',
  reference: 'CASR Part 91 / Civil Aviation Act 1988'
},

{
  question: 'Under CASR Part 61, who may conduct an ATPL skill test (the flight test for ATPL grant)?',
  options: [
    'A. Any ATPL holder with more than 5,000 hours total time, only when operating in Class C or Class D controlled airspace',
    'B. A Grade 1 Flight Instructor with a current type rating on the aircraft',
    'C. A CASA-authorised flight examiner holding an appropriate examiner rating for the aircraft category and type',
    'D. Any check captain approved by the airline operator\\\'s chief pilot'
  ],
  correct: 2,
  explanation: 'An ATPL skill test must be conducted by a CASA-authorised flight examiner (FE) holding an appropriate examiner rating for the aircraft category and type. Not all ATPL holders or instructors are authorised to conduct licence skill tests — it requires a specific examiner rating granted by CASA. This ensures standardisation and independence of assessment.',
  reference: 'CASR Part 61'
},

{
  question: 'An ATPL holder operating under AOC provisions is required to ensure they are familiar with the company\\\'s Operations Manual. If the Operations Manual specifies a requirement more restrictive than CASR, the pilot must:',
  options: [
    'A. Follow the more restrictive Operations Manual requirement — the manual is binding on the crew and typically imposes additional restrictions for safety',
    'B. Follow the CASR requirement — regulations always take precedence over company manuals, only when operating in Class C or Class D controlled airspace',
    'C. Request clarification from CASA before each flight where a conflict exists, subject to the operator's approved exposition authorising such operations',
    'D. Use their own judgment to determine the most appropriate requirement for each situation, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'The Operations Manual is approved by CASA and is binding on the operator and crew. When the Operations Manual is more restrictive than CASR (which is common — CASR sets minimum standards), the crew must follow the more restrictive Operations Manual requirement. The Operations Manual cannot be less restrictive than CASR, but operators routinely impose additional restrictions for safety or operational reasons.',
  reference: 'CASR Part 121 / CAO 82.3'
},

{
  question: 'For a turbine-powered aircraft being operated on an RPT operation above FL290, the aircraft must be equipped with:',
  options: [
    'A. TCAS I only — TCAS II is optional above FL290, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. A proximity warning system but not necessarily TCAS II',
    'C. An approved TCAS II (Traffic Alert and Collision Avoidance System) providing resolution advisories',
    'D. TCAS is only required on aircraft with more than 30 passenger seats'
  ],
  correct: 2,
  explanation: 'TCAS II (providing resolution advisories, RA) is required for turbine-powered aircraft operating in RVSM airspace (FL290–FL410) in Australian operations. TCAS II provides both Traffic Advisories (TA) and Resolution Advisories (RA) which instruct the pilot to climb or descend to avoid a collision. TCAS I provides TAs only and does not meet the requirement.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'An ATPL holder on an IFR flight receives an ATC clearance that they consider will take the aircraft into icing conditions for which it is not certified. They should:',
  options: [
    'A. Accept the clearance and proceed — ATC has separation responsibility',
    'B. Accept the clearance but slow down to reduce the rate of ice accumulation',
    'C. Declare an emergency before refusing any ATC clearance, subject to the pilot completing the required recurrent training within 12 months',
    'D. Advise ATC that the clearance is not acceptable and request an alternative routing or altitude that avoids the hazard'
  ],
  correct: 3,
  explanation: 'The PIC is responsible for the safety of the aircraft and may refuse any ATC clearance that would take the aircraft into conditions that compromise safety. ATC separation responsibility does not override the PIC\\\'s responsibility for aircraft safety. The correct response is to advise ATC that the clearance is not acceptable and request an alternative. There is no need to declare an emergency simply to exercise this right.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under CAO 48.1, "flight time" for the purpose of duty time limitations is defined as:',
  options: [
    'A. Wheels-off to wheels-on (airborne time only)',
    'B. Engine start to engine shutdown',
    'C. Block-to-block time (chocks off to chocks on)',
    'D. Time from first flight of the day to last landing of the day'
  ],
  correct: 2,
  explanation: 'Under CAO 48.1, flight time is measured as block time — from the time the aircraft first moves under its own power (chocks off) for the purpose of flight until the engines are shut down and the aircraft comes to rest at the conclusion of the flight (chocks on). This is distinct from "airborne time" which is wheels-up to wheels-down.',
  reference: 'CAO 48.1'
},

{
  question: 'An ATPL holder\\\'s Class 1 medical certificate can be issued with an operational multi-pilot limitation (OML). This means:',
  options: [
    'A. The pilot can only fly multi-engine aircraft, except when the operation involves more than 9 passenger seats',
    'B. The pilot is limited to operations within 100 nm of their home base, except when the operation involves more than 9 passenger seats',
    'C. The pilot requires co-pilot assistance for all instrument approaches, provided a current instrument rating is held for the relevant aircraft category',
    'D. The pilot may only exercise privileges as part of a multi-pilot crew — they cannot act as the sole pilot of the aircraft'
  ],
  correct: 3,
  explanation: 'An OML (Operational Multi-Pilot Limitation) is placed on a medical certificate when the pilot has a medical condition that could cause in-flight incapacitation but is acceptable in a multi-crew context where the other pilot can take over. The OML restricts the holder to operations where a qualified co-pilot is required — the pilot cannot exercise PIC privileges as the sole pilot.',
  reference: 'CASR Part 67 / ICAO Annex 1'
},

{
  question: 'A pilot is concerned that company scheduling pressure is forcing them to fly when fatigued. Their appropriate course of action is:',
  options: [
    'A. Comply with the schedule and file a report after the flight, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in',
    'B. Discuss the matter with the union and await a policy decision before taking any action, except during the period of any declared low visibility procedures at the aerodrome',
    'C. Ask the first officer to monitor more carefully to compensate for any fatigue effects, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Decline to fly if subjectively fatigued, report the concern to the operator\\\'s safety management system, and if necessary to CASA directly — a pilot cannot be compelled to operate in breach of safety requirements'
  ],
  correct: 3,
  explanation: 'Fatigue is a serious safety issue. A pilot who considers themselves unfit to fly due to fatigue must decline the flight. They cannot be compelled to operate in breach of safety. Reporting through the SMS and directly to CASA if the operator is non-responsive is the appropriate escalation. CASR and CAO 48.1 place a personal obligation on the pilot — not just the operator — for fatigue management.',
  reference: 'CAO 48.1 / CASR Part 91 / Civil Aviation Act 1988'
},

{
  question: 'An ATPL holder who also holds an Air Traffic Control licence may exercise both licences. When exercising ATC privileges on the same day as pilot privileges:',
  options: [
    'A. The combined flying and ATC service time must not exceed the applicable duty limits for each role — the two roles cannot be combined to extend beyond either limit',
    'B. Both roles may be exercised simultaneously on different frequencies, subject to the pilot completing the required recurrent training within 12 months',
    'C. ATPL privileges take precedence and ATC duties must cease once any flight is commenced, subject to the operator's approved exposition authorising such operations',
    'D. There is no restriction on holding and exercising both licences on the same day, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'A person holding both ATPL and ATC licences may exercise both, but the combined duty must comply with the applicable duty limits for both roles. Separate duty time rules apply to each licence, and the total combination must not exceed either limit. In practice, operating as both PIC and ATC controller concurrently is prohibited for obvious safety reasons.',
  reference: 'CAO 48.1 / CASR Part 65'
},

{
  question: 'The "two-crew concept" for incapacitation prevention in ATPL operations requires that:',
  options: [
    'A. One crew member is always monitoring the autopilot while the other monitors the cabin, subject to the requirements of the applicable Civil Aviation Order',
    'B. Both pilots must be at the controls simultaneously during all phases of flight, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. At least one pilot is at the controls at all times when below transition altitude, and procedures are in place to detect and respond to subtle incapacitation of either crew member',
    'D. The first officer must be monitoring the captain for signs of incapacitation at all times, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'The two-crew incapacitation concept requires that at least one competent pilot is always available to fly the aircraft. This includes: ensuring a pilot is at the controls at all times below certain altitudes (particularly during approach and landing); use of challenge-and-response procedures; and sterile cockpit rules. Standard operating procedures are designed to detect subtle incapacitation, such as a pilot becoming unresponsive during cruise.',
  reference: 'CASR Part 121 / Operator SOPs / ICAO Human Factors'
},

{
  question: 'A Certificate of Airworthiness (CofA) for an Australian-registered transport category aircraft is valid:',
  options: [
    'A. For 12 months from the date of issue, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'B. Indefinitely, provided the aircraft is maintained in accordance with approved maintenance requirements and the CofA has not been suspended or cancelled',
    'C. For 24 months from the last major inspection, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Until the next C-check maintenance event regardless of calendar time, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 1,
  explanation: 'Under CASR Part 21, a Certificate of Airworthiness does not expire after a fixed period — it remains in force indefinitely provided the aircraft is maintained in accordance with approved maintenance requirements, airworthiness directives are complied with, and the CofA has not been suspended or cancelled. The maintenance release (or equivalent continuing airworthiness document) is the time-limited document.',
  reference: 'CASR Part 21 / CASR Part 43'
},

{
  question: 'The PIC\\\'s responsibility with respect to the maintenance release before flight is to:',
  options: [
    'A. Ensure maintenance has been carried out — the actual review of the release is the operator\\\'s responsibility, except when the operation involves more than 9 passenger seats',
    'B. Sign the maintenance release to acknowledge they have accepted the aircraft, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'C. Only check the fuel and oil quantities listed in the maintenance release, subject to the operator's approved exposition authorising such operations, subject to written approval ',
    'D. Check that the maintenance release is current, determine its validity period has not expired, identify any outstanding defects or endorsements, and determine whether these affect the airworthiness for the planned flight'
  ],
  correct: 3,
  explanation: 'Under CASR Part 91, the PIC must check the maintenance release before each flight: verify it is current (within its validity period); identify any outstanding defects or endorsements; and assess whether any defects affect the airworthiness of the aircraft for the planned operation. The PIC cannot delegate this responsibility to others, though they may seek engineering advice for complex defect assessments.',
  reference: 'CASR Part 91 / CASR Part 43'
},

{
  question: 'A maintenance release for a turbine-powered transport category aircraft may be signed off by:',
  options: [
    'A. The PIC if the aircraft is operated under an AOC and a licensed engineer is unavailable, only when operating in Class C or Class D controlled airspace',
    'B. A CASA-licensed aircraft maintenance engineer (LAME) holding an appropriate endorsement, or an appropriately authorised person under the operator\\\'s maintenance organisation approval',
    'C. Any person holding a CASR Part 66 category B1 or B2 licence regardless of type rating, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. The airline\\\'s chief engineer by remote authorisation via maintenance data link, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'Under CASR Part 66 and Part 145, certifying maintenance and releasing an aircraft to service (signing the maintenance release) requires a Licensed Aircraft Maintenance Engineer (LAME) with appropriate endorsements, or an authorised person under an approved maintenance organisation. For transport category aircraft, the LAME must hold Part 66 Category B1 (airframe/engines) or B2 (avionics) with appropriate type training.',
  reference: 'CASR Part 43 / CASR Part 66 / CASR Part 145'
},

{
  question: 'An aircraft is found to have a defect entered in the maintenance release that is covered by the Minimum Equipment List (MEL). The aircraft may be dispatched if:',
  options: [
    'A. The captain approves the dispatch in writing before departure, provided a current instrument rating is held for the relevant aircraft category, subject to the operator's ap',
    'B. The defect is minor and will be rectified within 10 flight hours, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. The MEL item has been deferred by the operator\\\'s chief engineer, subject to the pilot completing the required recurrent training within 12 months, only when operating in Class',
    'D. The MEL entry confirms the defective item is on the MEL, the specified conditions and operational procedures for dispatch are met, and the required maintenance and placard actions have been completed'
  ],
  correct: 3,
  explanation: 'Dispatch under the MEL requires: (1) the defective item is listed in the MEL; (2) dispatch conditions in the MEL are met (including operational procedures and restrictions); (3) any required placards are fitted; and (4) any required maintenance procedures (O items and M items) have been completed. The MEL is a CASA-approved document and its conditions are mandatory, not advisory.',
  reference: 'CASR Part 91 / CASR MEL provisions'
},

{
  question: 'Under Australian regulations, the Minimum Equipment List (MEL) is:',
  options: [
    'A. A list of items that must be working for the aircraft to be dispatched on any flight, subject to the operator's approved exposition authorising such operations',
    'B. A list of items that may be deferred indefinitely provided no passenger complaints are received, except when the operation involves more than 9 passenger seats',
    'C. A maintenance planning document used by engineers — it has no operational significance for the pilot, subject to the requirements of the applicable Civil Aviation Order',
    'D. A CASA-approved document that permits operation of the aircraft with specific equipment inoperative, under specified conditions and limitations, for a defined period'
  ],
  correct: 3,
  explanation: 'The MEL is a CASA-approved document derived from the master MEL (MMEL) provided by the aircraft manufacturer. It specifies which items may be inoperative, under what conditions, and for how long (maintenance intervals A, B, C, D). Operating under the MEL is a privilege that requires CASA approval — it is not a default right. Each deferred item must be managed in accordance with the MEL procedures.',
  reference: 'CASR Part 91 / CASA AC 91-11'
},

{
  question: 'The MEL category "Category B" item has a maximum deferral period of:',
  options: [
    'A. 3 days (72 hours) from when the defect was first discovered',
    'B. 7 days from the date of the defect entry in the technical log',
    'C. 3 consecutive calendar days (72 hours) excluding the day the item was found defective',
    'D. 10 days from discovery — Category B is the most critical deferral category'
  ],
  correct: 2,
  explanation: 'MEL Category B items may be deferred for up to 3 consecutive calendar days, not counting the day of discovery. For example, if a Category B defect is found on Monday, the item must be repaired by end of day Thursday. This is more restrictive than Category C (10 days) and Category D (120 days). Category A items have specific intervals defined in the MEL entry itself.',
  reference: 'CASR Part 91 / CASA MEL / MMEL'
},

{
  question: 'An Airworthiness Directive (AD) issued by CASA:',
  options: [
    'A. Is a recommendation that operators should consider applying to their aircraft, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Applies only to aircraft operated under an AOC — privately operated aircraft are exempt, except when the operation involves more than 9 passenger seats',
    'C. May be deferred indefinitely provided the operator notifies CASA of the deferral, subject to the requirements of the applicable Civil Aviation Order',
    'D. Is a mandatory requirement that must be complied with by the specified compliance date — failure to comply renders the aircraft unairworthy'
  ],
  correct: 3,
  explanation: 'Airworthiness Directives are mandatory. They are issued by CASA (and must be adopted from the country of manufacture\\\'s airworthiness authority) to correct unsafe conditions in aircraft. Non-compliance by the due date renders the aircraft unairworthy, and operating an aircraft not in compliance with applicable ADs is an offence. There are no general exemptions for private or non-commercial operations.',
  reference: 'CASR Part 39 / Civil Aviation Act 1988'
},

{
  question: 'The PIC discovers during pre-flight inspection that an AD compliance date passed 2 days ago and the required modification has not been performed. The PIC must:',
  options: [
    'A. Contact the operator\\\'s maintenance control for guidance while proceeding with the flight',
    'B. Proceed if the AD is for a non-structural item and file a defect report after landing',
    'C. Not commence the flight — the aircraft is not airworthy. The AD must be complied with before the aircraft is returned to service',
    'D. Check if the AD has been superseded by a newer version before making a decision'
  ],
  correct: 2,
  explanation: 'An aircraft with overdue AD compliance is not airworthy. The PIC must not commence flight in an aircraft that is not airworthy. Operating with overdue ADs is an offence under CASR Part 91 and the Civil Aviation Act. The aircraft must be grounded until the AD is complied with and the aircraft released to service by a LAME. No management approval can override this requirement.',
  reference: 'CASR Part 39 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the responsibility for ensuring an aircraft is maintained in accordance with its approved maintenance programme lies with:',
  options: [
    'A. The registered operator and/or owner of the aircraft — the operating organisation approved under CASR Part 145 is responsible for continuing airworthiness management',
    'B. The PIC of each individual flight, except during the period of any declared low visibility procedures at the aerodrome',
    'C. The LAME who last signed the maintenance release, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. Jointly shared between CASA and the operator with neither having primary responsibility, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'Continuing airworthiness responsibility lies with the registered operator. Under CASR Part 42 and Part 145, the operator must manage the aircraft\\\'s maintenance programme, ensure ADs are complied with on time, and maintain accurate records. The PIC\\\'s pre-flight responsibility is to check that the maintenance release is current — the ongoing airworthiness management is the operator\\\'s obligation.',
  reference: 'CASR Part 42 / CASR Part 145'
},

{
  question: 'A Certificate of Airworthiness may be suspended by CASA when:',
  options: [
    'A. The aircraft exceeds the normal maintenance interval by more than 5%, subject to the operator's approved exposition authorising such operations',
    'B. The operator fails to pay the CASA registration fee within 30 days, subject to the pilot completing the required recurrent training within 12 months',
    'C. The PIC reports a defect that requires investigation, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. CASA has reason to believe that the aircraft is not airworthy, or any condition of the CofA has been breached, or the aircraft has been involved in an accident or serious incident'
  ],
  correct: 3,
  explanation: 'CASA may suspend a CofA when it has reason to believe the aircraft is no longer airworthy, a condition has been breached, or a safety concern warrants investigation. Suspension may be immediate (in serious cases) or with notice. A suspended CofA means the aircraft cannot be operated until the suspension is lifted. Accident involvement commonly triggers CofA suspension pending investigation.',
  reference: 'CASR Part 21 / Civil Aviation Act 1988'
},

{
  question: 'During a flight, the PIC observes that an aircraft system is malfunctioning but it is not listed in the QRH (Quick Reference Handbook). The PIC should:',
  options: [
    'A. Ignore the malfunction and report it after landing, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Apply general airmanship, use the best available information from the FCOM and checklists, declare emergency if warranted, and make an entry in the technical log after landing',
    'C. Shut down the affected system immediately regardless of the impact on the flight, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. Contact the manufacturer directly by radio for technical advice, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Not all malfunctions are covered by specific QRH procedures. The PIC applies general airmanship: assess the severity, use all available information (FCOM, AFM, crew knowledge), decide whether to continue or divert, declare emergency if safety is at risk, and ensure the defect is properly recorded in the technical log after landing. The technical log entry is mandatory for all defects.',
  reference: 'CASR Part 91 / CASR Part 43'
},

{
  question: 'After landing, the PIC notices damage to the aircraft that was not present at the start of the flight. The PIC must:',
  options: [
    'A. Report the damage only if it appears structurally significant, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr',
    'B. Make an entry in the aircraft\\\'s technical log describing the damage, ensure the aircraft is not operated until a LAME has assessed whether the aircraft is airworthy, and report the occurrence as required',
    'C. Leave a note for the maintenance crew and proceed to the next duty period, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Complete a CASA incident report but the aircraft may continue to operate if no structural damage is visible, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'Any damage to the aircraft must be entered in the technical log. The aircraft must not be operated further until a LAME has assessed the damage and certified the aircraft as airworthy. Even apparently minor damage may affect airworthiness in ways not visible to the flight crew. The PIC\\\'s obligation is to record the defect and ground the aircraft pending assessment.',
  reference: 'CASR Part 43 / CASR Part 91'
},

{
  question: 'The aircraft technical log must be retained for a minimum period of:',
  options: [
    'A. 12 months after the entry date',
    'B. 24 months after the entry date',
    'C. The life of the aircraft — all technical logs must be preserved indefinitely',
    'D. 7 years after the last entry in the document'
  ],
  correct: 3,
  explanation: 'Under CASR Part 43, technical logs and related maintenance records must be retained for a minimum of 7 years after the last entry. These records are essential for tracking maintenance history, AD compliance, and aircraft life data. An aircraft without proper maintenance records may have its airworthiness certificate suspended.',
  reference: 'CASR Part 43'
},

{
  question: 'An ATPL holder conducting a pre-flight inspection finds a bird strike on the leading edge of the wing that has left a dent. The correct action is:',
  options: [
    'A. The dent must be assessed by a LAME against the applicable structural repair manual or damage limits before the aircraft is dispatched — the PIC cannot make this airworthiness determination alone',
    'B. Assess the dent using the MEL dent criteria and dispatch if within limits, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'C. Depart only if the total dent area is less than 5 square centimetres, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Apply speed tape over the dent and enter it in the technical log for repair within 10 days, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 0,
  explanation: 'Structural damage (dents, dings, delamination, cracks) requires assessment by a LAME against applicable damage tolerances in the structural repair manual (SRM) or aircraft manufacturer\\\'s documents. The PIC cannot make this determination — only an appropriately endorsed LAME can assess whether structural damage is within allowable limits. The aircraft must not depart until a LAME has assessed and certified the damage.',
  reference: 'CASR Part 43 / Aircraft SRM'
},

{
  question: 'A "permissible unserviceability" (PUS) system allows:',
  options: [
    'A. The PIC to defer any inoperative item for up to 30 days on their own authority, subject to the requirements of the applicable Civil Aviation Order',
    'B. Operation with any inoperative item provided the PIC determines it does not affect safety, provided a current instrument rating is held for the relevant aircraft category',
    'C. Operators to bypass airworthiness requirements on older aircraft with high maintenance costs, subject to written approval from the operator's chief pilot',
    'D. Operation of an aircraft with specific inoperative items listed in the PUS document, under defined conditions, in lieu of an MEL — applicable to aircraft not operating under an MEL'
  ],
  correct: 3,
  explanation: 'The PUS (Permissible Unserviceability) system operates similarly to an MEL but is used for aircraft not operating under a formal MEL approval. PUS items are listed in a CASA-approved document that specifies which items may be inoperative and under what conditions. For aircraft operating under an MEL, the MEL takes precedence and the PUS system does not apply.',
  reference: 'CASR Part 91 / CASA AC 91-11'
},

{
  question: 'An ATPL holder is authorised under Australian regulations to carry out "owner/operator" maintenance on a type-certificated aircraft. This authorisation allows:',
  options: [
    'A. The holder to carry out specific limited maintenance tasks defined in the regulations (such as changing certain bulbs and filters), certify the work in the maintenance release, and release the aircraft to service for these specific tasks only',
    'B. Any pilot to carry out any maintenance provided it is entered in the maintenance release, provided a current instrument rating is held for the relevant aircraft category, except during the period of ',
    'C. The pilot to carry out all scheduled maintenance on aircraft under 5,700 kg, except when the operation involves more than 9 passenger seats, except during the period of ',
    'D. The pilot to defer AD compliance with CASA permission, except when the operation involves more than 9 passenger seats, provided the relevant aerodr'
  ],
  correct: 0,
  explanation: 'Under CASR Part 43 Schedule 8, the owner or operator of an aircraft (including a pilot-owner) is authorised to carry out a specific limited list of maintenance tasks (minor routine maintenance) and certify them in the maintenance release. This does not authorise general maintenance or the repair of defects — it covers tasks such as replacing bulbs, cleaning filters, and tyre pressure checks as specified in the regulations.',
  reference: 'CASR Part 43 Schedule 8'
},

{
  question: 'An aircraft on an RPT operation has a fuel quantity gauge that is unserviceable. The crew has determined the actual fuel on board by physical dipping of all tanks. Under the MEL, the flight may proceed if:',
  options: [
    'A. The flight is less than 2 hours duration and fuel checks are performed every 30 minutes',
    'B. The engineer signs a dispatch authority override in the technical log, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. The fuel can be measured by an alternative method and the MEL permits dispatch with the gauge inoperative under defined conditions',
    'D. The fuel is loaded to full tanks to eliminate the need for fuel quantity monitoring'
  ],
  correct: 2,
  explanation: 'Many MELs permit dispatch with a fuel quantity gauge unserviceable provided an alternative means of determining fuel quantity is used (drip sticks, tank dipping, calibrated fuel uplift calculations). The MEL entry specifies the required alternative procedures and any operational restrictions. The critical factor is that the crew can verify fuel quantity by an approved alternative method.',
  reference: 'CASR Part 91 / MEL provisions'
},

{
  question: 'The maintenance release for a multi-engine turbojet aircraft operating under an AOC must be:',
  options: [
    'A. Accessible to the operator and PIC — it may be carried on board or held at a nominated base accessible to the crew, depending on the operator\\\'s approved system',
    'B. Carried on board the aircraft during all flights, provided a current instrument rating is held for the relevant aircraft category',
    'C. Submitted to CASA before each flight departure, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Retained at the maintenance base and not required to be accessible to the flight crew, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 0,
  explanation: 'The maintenance release must be accessible to the PIC. Under approved operator systems, for some aircraft types the technical log/maintenance release may be held at a base rather than carried on board, provided the crew can access the current status. However, many operators carry the technical log/maintenance release on board as best practice. The PIC must be able to review it before flight.',
  reference: 'CASR Part 91 / CASR Part 43'
},

{
  question: 'When does a maintenance release cease to be valid (become "opened") once issued?',
  options: [
    'A. After each flight sector, requiring revalidation before the next sector, only if the operator holds a specific approval under their Air Operator Certificate, subject to the requirements ',
    'B. Every 7 days regardless of defects or incidents, provided CASA has been notified of the operation at least 24 hours in advance, provided the aircraft holds ',
    'C. When a defect is entered in the technical log, when the aircraft sustains damage, or when the aircraft is involved in an accident or incident — the maintenance release remains valid through multiple flights until one of these events occurs',
    'D. After each calendar day of operations — a new maintenance release is required for each new day, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval '
  ],
  correct: 2,
  explanation: 'A maintenance release remains valid for multiple flights until specific events occur that "open" it: a defect is entered, the aircraft sustains damage, an accident or incident occurs, or any other event specified in the maintenance release regulations. The release is not opened by completing a flight — it remains valid until one of these triggering events. The validity period (calendar time) on the maintenance release also applies.',
  reference: 'CASR Part 43'
},

{
  question: 'For an aircraft operated under an Air Operator\\\'s Certificate, who is responsible for the continuing airworthiness of the aircraft?',
  options: [
    'A. CASA, through its ongoing audit of the operator\\\'s maintenance activities, except when the operation involves more than 9 passenger seats',
    'B. The aircraft manufacturer, through mandatory service bulletins, subject to the pilot completing the required recurrent training within 12 months',
    'C. Jointly the AOC holder and the LAME who last released the aircraft to service, provided a current instrument rating is held for the relevant aircraft category',
    'D. The AOC holder, who must have a CASA-approved maintenance management system ensuring airworthiness is continuously maintained throughout the aircraft\\\'s operation'
  ],
  correct: 3,
  explanation: 'Under CASR Part 42, the registered operator (AOC holder) is responsible for the continuing airworthiness of the aircraft. This includes ensuring maintenance is carried out on schedule, ADs are complied with, modifications are approved, and airworthiness records are maintained. The operator must have an approved maintenance management system. While the LAME certifies individual maintenance tasks, the overall management responsibility rests with the operator.',
  reference: 'CASR Part 42 / CASR Part 119'
},

{
  question: 'An overseas AD (Airworthiness Directive) is issued by the FAA for a Boeing aircraft operated by an Australian airline. The Australian airline must:',
  options: [
    'A. Comply with the AD under the terms of the Australian AD system — CASA typically mandates compliance with the country-of-manufacture AD, often by referencing it directly in a CASA AD or requiring compliance under the bilateral airworthiness agreement',
    'B. Apply the AD only if CASA issues an equivalent Australian AD within 30 days, except when the operation involves more than 9 passenger seats, provided CASA has been notif',
    'C. Seek an exemption from CASA as Australian ADs take precedence over foreign ADs, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'D. Consult with Boeing directly to determine if the AD applies to their specific aircraft serial numbers, only when operating in Class C or Class D controlled airspace, provided a current instrumen'
  ],
  correct: 0,
  explanation: 'Under the bilateral airworthiness agreements and CASR Part 39, Australian operators of US-manufactured aircraft (such as Boeing) are required to comply with FAA ADs. CASA typically mandates compliance through its own AD system, referencing the FAA AD. The operator cannot simply ignore a foreign AD because CASA has not yet issued an equivalent — the bilateral agreement makes it mandatory.',
  reference: 'CASR Part 39 / ICAO Annex 8 / Australia-USA bilateral'
},

{
  question: 'An aircraft is found to have a crack in the fuselage skin during a routine inspection. The crack exceeds the acceptable limits in the structural repair manual. The aircraft must:',
  options: [
    'A. Be operated at a reduced maximum operating altitude until repaired, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Have the crack monitored for growth over the next 50 flight hours before repair is required, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. Be repaired by any person provided the repair is entered in the maintenance release, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Not be returned to service until the crack is repaired in accordance with the approved repair scheme and the aircraft re-certified airworthy by a LAME'
  ],
  correct: 3,
  explanation: 'A structural defect exceeding allowable limits renders the aircraft unairworthy — it must not operate further. The crack must be repaired in accordance with an approved repair scheme (SRM, manufacturer\\\'s instructions, or a CASA-approved repair design). Only after repair, inspection, and certification by an appropriately licensed engineer can the aircraft be returned to service.',
  reference: 'CASR Part 43 / Aircraft SRM / CASR Part 21'
},

{
  question: 'The "Category A" interval for a Minimum Equipment List item means:',
  options: [
    'A. The interval is specified in the individual MEL entry and may vary from one flight to a specified number of days — Category A items have no single standard interval unlike B, C, and D',
    'B. The item must be repaired before the next flight in all cases, except when the operation involves more than 9 passenger seats, subject to written approval ',
    'C. The item may be deferred for one day (24 hours) from the time of discovery, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. Category A is the most critical category — items must be repaired within 1 hour on the ground, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'MEL Category A items do not have a standard deferral period — the permissible deferral is specified in the individual MEL entry for that item. Some Category A items must be repaired before next flight; others may have a specified number of flights or hours. Category A is not a standardised time interval like B (3 days), C (10 days), or D (120 days).',
  reference: 'CASR Part 91 / MMEL/MEL'
},

{
  question: 'An aircraft operator who operates under an AOC must maintain which of the following airworthiness records for each aircraft?',
  options: [
    'A. Flight times and landings only — detailed records are the manufacturer\\\'s responsibility',
    'B. Records only for the current 12-month period — older records may be disposed of',
    'C. Records specified by the aircraft manufacturer only — CASR does not specify record keeping requirements',
    'D. Total airframe time, component times, AD status, modification history, maintenance release status, and all technical log entries'
  ],
  correct: 3,
  explanation: 'Under CASR Part 42 and 43, the operator must maintain comprehensive airworthiness records including: total airframe flight hours and cycles; life-limited component records; AD compliance status; approved modification history; maintenance release history; and all technical log entries. These records must be maintained for the life of the aircraft (for some records) or minimum prescribed periods.',
  reference: 'CASR Part 42 / CASR Part 43'
},

{
  question: 'A turbine-powered aircraft is required to be fitted with a functional GPWS (Ground Proximity Warning System) or TAWS under Australian regulations when:',
  options: [
    'A. Operating at night only, on multi-engine aircraft exceeding 5,700 kg MTOW only',
    'B. Only when operating in mountainous terrain areas designated by CASA, only when operating in Class C or Class D controlled airspace',
    'C. Operating in RPT operations above 5,700 kg MTOW or on multi-crew operations as prescribed in the applicable CAO or CASR',
    'D. GPWS/TAWS is optional equipment — it is not mandated by Australian regulations'
  ],
  correct: 2,
  explanation: 'GPWS/TAWS is required for Australian-registered turbine-powered multi-crew aeroplanes and those above specified MTOW thresholds under CASR Part 91 and CAO 20.18. The requirement applies to RPT and charter operations above the specified weight. TAWS (forward-looking terrain avoidance) provides enhanced terrain awareness compared to basic GPWS.',
  reference: 'CASR Part 91 / CAO 20.18'
},

{
  question: 'Under Australian regulations, which of the following aircraft are required to carry an ELT (Emergency Locator Transmitter)?',
  options: [
    'A. Aircraft operating in remote areas, over water beyond gliding distance from shore, and those in certain other categories as prescribed — the requirement is based on operation type and area',
    'B. Only aircraft operating over water more than 50 nm from land, except when the operation involves more than 9 passenger seats, provided CASA has been notif',
    'C. Only helicopters — fixed-wing aircraft are not required to carry an ELT, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. All Australian-registered aircraft regardless of the area or type of operation, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'ELT requirements under CAO 20.11 and CASR Part 91 are based on the operation type and area. Aircraft operating in remote areas and over water are required to carry a 406 MHz ELT. The specific requirements depend on the weight, category, and operation. Modern 406 MHz ELTs (as opposed to the older 121.5 MHz) are required as they provide GPS-linked position data to search and rescue services.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'The "controlled flight into terrain" (CFIT) risk is primarily mitigated by which mandatory equipment requirement?',
  options: [
    'A. Ground Proximity Warning System (GPWS) or Terrain Awareness and Warning System (TAWS), which provide aural and visual warnings before terrain impact',
    'B. Traffic Collision Avoidance System (TCAS), except during the period of any declared low visibility procedures at the aerodrome',
    'C. Enhanced Weather Radar with terrain mapping mode, only when operating in Class C or Class D controlled airspace',
    'D. Radio altimeter only — CFIT is not addressed by any specific mandatory equipment, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'GPWS/TAWS is specifically designed to mitigate CFIT risk. GPWS provides reactive warnings based on rate of descent, gear/flap configuration, and terrain proximity. TAWS provides forward-looking terrain avoidance using GPS and a terrain database, giving advance warning. TCAS addresses mid-air collision (not terrain), and weather radar (while useful) is not specifically designed or certified as a terrain warning system.',
  reference: 'ICAO Annex 6 / CASR Part 91 / CAO 20.18'
},

{
  question: 'Under the CASR, an aircraft is considered "airworthy" when:',
  options: [
    'A. It conforms to its type certificate, is in a condition for safe operation, and all required maintenance and inspections have been carried out within the prescribed periods',
    'B. The PIC is satisfied with its general condition after a pre-flight inspection, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. The maintenance release has been signed by a LAME within the previous 30 days, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. It has been operated successfully on the previous flight without any reported defects, subject to written approval from the operator's chief pilot'
  ],
  correct: 0,
  explanation: 'Airworthiness has a specific legal meaning: the aircraft must conform to its type certificate (approved design), be in a condition for safe operation, have all required maintenance performed within prescribed intervals, have all applicable ADs complied with, and have a current maintenance release. A previous uneventful flight does not establish current airworthiness.',
  reference: 'CASR Part 21 / Civil Aviation Act 1988'
},

{
  question: 'The recording of flight time in the aircraft\\\'s journey log is the responsibility of:',
  options: [
    'A. The pilot in command, who must ensure the journey log is completed accurately after each flight',
    'B. The co-pilot on multi-crew aircraft, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. The operator\\\'s operations department — the crew is not responsible for the journey log',
    'D. The ground engineer who releases the aircraft for the next flight'
  ],
  correct: 0,
  explanation: 'Under CASR Part 91 and CASR Part 43, the PIC is responsible for ensuring the journey log (or equivalent technical log) is completed accurately after each flight. Required entries include date, aircraft registration, crew names, departure and destination, and flight time. Accurate records are essential for airworthiness tracking, time-limited component management, and regulatory compliance.',
  reference: 'CASR Part 43 / CASR Part 91'
},

{
  question: 'When an aircraft sustains a serious damage incident on the ground (e.g. a ground vehicle collision), the maintenance release:',
  options: [
    'A. Remains valid provided the damage is less than the MEL minimum damage limits, only when operating in Class C or Class D controlled airspace',
    'B. Is rendered invalid only if both engines are damaged, subject to the requirements of the applicable Civil Aviation Order',
    'C. Remains valid for ferry flight purposes at the PIC\\\'s discretion, subject to written approval from the operator's chief pilot',
    'D. Is rendered invalid — the aircraft must not be operated until assessed and re-released by a LAME following repair and inspection'
  ],
  correct: 3,
  explanation: 'Any significant damage event (ground collision, bird strike exceeding certain limits, lightning strike etc.) automatically renders the maintenance release invalid. The aircraft must not fly until a LAME has assessed the damage against applicable limits, performed or approved required repairs, and re-issued (or endorsed) the maintenance release. There are no provisions for self-authorising a damaged aircraft for flight.',
  reference: 'CASR Part 43'
},

{
  question: 'For a turboprop commuter aircraft (5,700–15,000 kg MTOW) operating under an AOC, the maintenance must be carried out by:',
  options: [
    'A. Any person holding a private pilot licence or higher, provided a current instrument rating is held for the relevant aircraft category',
    'B. Only the manufacturer\\\'s authorised service centres, only when operating in Class C or Class D controlled airspace, provided the aircraft holds ',
    'C. A person approved under an organisation approved under CASR Part 145, or by a LAME holding appropriate endorsements, in accordance with the approved maintenance programme',
    'D. The operator\\\'s own staff regardless of their engineering qualifications, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 2,
  explanation: 'Maintenance on aircraft above 5,700 kg MTOW must be performed and certified by organisations approved under CASR Part 145 (Approved Maintenance Organisations) or by LAMEs with appropriate endorsements. The maintenance must be carried out in accordance with the approved maintenance programme. Operators may have their own in-house approved maintenance organisation or use contracted external AMOs.',
  reference: 'CASR Part 145 / CASR Part 43'
},

{
  question: 'The aircraft\\\'s Flight Manual (AFM) or Pilot Operating Handbook (POH) is considered part of the aircraft\\\'s:',
  options: [
    'A. Operator\\\'s Operations Manual and may be modified by the operator, subject to written approval from the operator's chief pilot',
    'B. Manufacturer\\\'s proprietary documents with no regulatory standing, subject to the operator's approved exposition authorising such operations',
    'C. Advisory material only — pilots may deviate from AFM procedures at their discretion, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Type certificate documentation — it is an approved document and the limitations section must be complied with; it may not be modified without CASA approval'
  ],
  correct: 3,
  explanation: 'The AFM/POH is approved documentation forming part of the aircraft\\\'s type certificate. The limitations section contains mandatory operating limits — they cannot be exceeded without exceeding the aircraft\\\'s type certificate, which renders the aircraft unairworthy. Normal and emergency procedures are the manufacturer\\\'s approved methods. The AFM may only be revised under CASA approval (via amended type certificate or supplemental type certificate).',
  reference: 'CASR Part 21 / CASR Part 91'
},

{
  question: 'The "class of operations" in a maintenance release for an Australian aircraft specifies:',
  options: [
    'A. The maximum altitude at which the aircraft may operate, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'B. The aircraft\\\'s registration category (experimental, certified, restricted), subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'C. The types of operations (such as regular public transport, charter, aerial work, private) for which the aircraft is authorised — the aircraft cannot be operated outside the endorsed class without appropriate approvals',
    'D. The maintenance schedule category applicable to the aircraft, provided CASA has been notified of the operation at least 24 hours in advance, except during the period of '
  ],
  correct: 2,
  explanation: 'The class of operations in the maintenance release (or associated documents) specifies which classes of operations the aircraft is certified for. An aircraft certified for "private" operations cannot be used commercially without appropriate approvals (AOC and relevant class endorsements). The class reflects the airworthiness standards to which the aircraft was built and maintained.',
  reference: 'CASR Part 43 / Civil Aviation Act 1988'
},

{
  question: 'If the PIC observes an unsatisfactory aircraft condition during pre-departure walk-around that is not covered by the MEL, they should:',
  options: [
    'A. Consult the co-pilot — if both agree the condition is acceptable, depart, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Not accept the aircraft for flight — contact maintenance for assessment. The aircraft must not depart with a known unsatisfactory condition that is not covered by an approved MEL or PUS entry',
    'C. Photograph the condition, enter it in the log, and accept the aircraft with a note that the defect is under review, except when the operation involves more than 9 passenger seats',
    'D. Apply the "captain\\\'s discretion" authority to accept the aircraft with verbal notification to the operator, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 1,
  explanation: 'If a defect or unsatisfactory condition is found that is not covered by an MEL or PUS entry, the aircraft must not depart. A LAME must assess the condition to determine whether it affects airworthiness and either certify the aircraft as airworthy, apply an MEL deferral if applicable, or ground the aircraft for repair. The PIC cannot self-authorise dispatch of an aircraft with an uncovered defect.',
  reference: 'CASR Part 91 / CASR Part 43'
},

{
  question: 'An aircraft operating on an AOC is involved in an accident that causes substantial damage to the aircraft. Before the accident aircraft is moved, the operator must:',
  options: [
    'A. Obtain CASA permission before moving the aircraft, provided CASA has been notified of the operation at least 24 hours in advance, except during the period of ',
    'B. Secure the aircraft and await instructions from the AOC holder\\\'s maintenance department, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Notify the ATSB and CASA as soon as practicable, and not move the aircraft unless required to ensure safety of persons or to prevent further damage — the accident site is an investigation site',
    'D. Remove the aircraft to a maintenance facility within 24 hours to facilitate repairs, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 2,
  explanation: 'The ATSB (Australian Transport Safety Bureau) has jurisdiction over aviation accidents. The aircraft must not be moved (except to ensure safety or prevent further damage) until the ATSB gives permission or it becomes apparent that investigation is not required. Tampering with an accident site is an offence. CASA and the ATSB must be notified promptly — the ATSB for the investigation, CASA for regulatory purposes.',
  reference: 'Transport Safety Investigation Act 2003 / Civil Aviation Act 1988'
},

{
  question: 'For a turbine engine, the power assurance check (PAC) or engine performance trend monitoring is conducted to:',
  options: [
    'A. Detect deterioration in engine performance over time that may indicate developing faults, allowing scheduled maintenance before an in-flight failure occurs',
    'B. Ensure the engine produces exactly the rated thrust on every flight, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Verify the engine fuel flow is within the flight planning assumptions, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Check compliance with noise abatement requirements at departure airports, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'Engine health monitoring (power assurance checks, ETMS/ACARS trend monitoring) is used to detect gradual deterioration in engine performance. By tracking parameters like EGT margin, fuel flow, N1/N2 speeds at standardised conditions, engineers can identify developing faults and schedule maintenance proactively, before the deterioration causes an in-service failure. This is fundamental to on-condition maintenance in commercial aviation.',
  reference: 'CAO 82.3 / Engine manufacturer\\\'s maintenance manuals'
},

{
  question: 'Under Australian regulations, an ATPL holder is permitted to carry out "pilot maintenance" on which of the following tasks without holding a LAME licence?',
  options: [
    'A. Replacing a malfunctioning fuel control unit on a turbine engine, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Tasks listed in Schedule 8 of CASR Part 43, such as replenishing engine oil, replacing windscreen wipers, and cleaning fuel strainers — within prescribed limitations',
    'C. Any maintenance task on aircraft under 1,500 kg MTOW, subject to the pilot completing the required recurrent training within 12 months',
    'D. Replacing avionics equipment provided the aircraft is not operated commercially, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Schedule 8 of CASR Part 43 defines the maintenance tasks that owner/operators (including ATPL holders who own or operate an aircraft) may carry out without a LAME licence. These are limited to minor routine tasks specifically listed, such as oil replenishment, filter cleaning, tyre pressure checks, and similar simple tasks. The ATPL holder performing these tasks must certify the work in the maintenance release.',
  reference: 'CASR Part 43 Schedule 8'
},

{
  question: 'The "ETOPS" approval for extended twin-engine operations requires additional airworthiness standards. For a 180-minute ETOPS approval, the aircraft must have:',
  options: [
    'A. A demonstrated in-service reliability record meeting CASA/ICAO ETOPS standards, plus specific additional systems requirements and maintenance programme items as prescribed by the applicable type approval',
    'B. Been in service for a minimum of 2 years with the operator, subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'C. Three independent hydraulic systems, provided the aircraft holds a valid maintenance release and is within weight limits, provided the relevant aerodr',
    'D. Only CASA authorisation on a per-flight basis — ongoing approval is not possible for ETOPS, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'ETOPS approval requires the operator, aircraft type, and maintenance system to meet enhanced standards. The aircraft type must have type design approval for ETOPS. The operator must demonstrate dispatch reliability and have an ETOPS maintenance programme including additional ground checks of ETOPS-significant systems. 180-minute ETOPS requires more stringent standards than 120-minute. CASA approves the operator for ETOPS under their AOC.',
  reference: 'CASR Part 121 / ICAO Doc 9760'
},

{
  question: 'An aircraft has a fire detector in the cargo bay that has a known intermittent fault producing false alerts. Under the MEL, the aircraft may be dispatched if:',
  options: [
    'A. The PIC accepts the false alert risk in writing before each flight, except when the operation involves more than 9 passenger seats, only when operating in Class',
    'B. The cargo bay is loaded with non-flammable cargo only, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif',
    'C. The MEL permits dispatch with the fire detector deactivated under specified conditions — however if no MEL provision exists for this item, the aircraft cannot be dispatched until repaired',
    'D. The engineer confirms in the technical log that the detector produces false alerts but is otherwise serviceable, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 2,
  explanation: 'Fire detection systems in cargo bays are critical safety items. Their MEL provisions (if any) are typically very restrictive. If the MEL provides for dispatch with the system deactivated, specific conditions must be met. If no MEL provision exists for the specific fault mode, the aircraft cannot be dispatched — fire detection is too safety-critical to allow informal deferred operation. The engineer\\\'s note about false alerts does not authorise dispatch.',
  reference: 'CASR Part 91 / MEL / MMEL'
},

{
  question: 'An ATPL holder flying a privately-owned aircraft discovers a defect during flight that requires entry in the technical log. If a maintenance release is not carried on board the flight, the PIC must:',
  options: [
    'A. Continue to the destination and report the defect verbally to the owner, provided a current instrument rating is held for the relevant aircraft category, subject to the operator's ap',
    'B. Record the defect on the flight by making a note, and ensure it is entered in the aircraft\\\'s technical log and assessed by a LAME before the next flight — the aircraft must not fly again until the defect is dealt with',
    'C. Declare an emergency and land at the nearest aerodrome, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'D. The defect only needs to be recorded if it affected safe operation of the flight, only when operating in Class C or Class D controlled airspace, subject to written approval '
  ],
  correct: 1,
  explanation: 'Any defect found during flight must be entered in the technical log. If the technical log is not on board, the PIC must ensure the defect is entered on return and assessed before the next flight. All defects must be recorded — not just those that affected the flight. The aircraft must not fly again until the defect has been assessed by a LAME and the aircraft either repaired or covered by an MEL/PUS deferral.',
  reference: 'CASR Part 43 / CASR Part 91'
},

{
  question: 'Under CASR, when is an aircraft required to carry emergency equipment including life jackets?',
  options: [
    'A. Only when operating in remote area operations as defined in the operator\\\'s AOC, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Only on international overwater flights, provided CASA has been notified of the operation at least 24 hours in advance, subject to the operator's ap',
    'C. On all flights regardless of route — life jackets must always be carried, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. When flying over water at a distance from land greater than the aircraft\\\'s gliding range or as prescribed by CASR Part 91 and applicable CAOs for the operation type and aircraft category'
  ],
  correct: 3,
  explanation: 'Life jacket requirements under CAO 20.11 and CASR Part 91 depend on the distance from land relative to the aircraft\\\'s gliding performance. Generally, life jackets are required when operating over water at distances that cannot be reached by gliding in event of engine failure. Specific requirements vary by aircraft category and operation type — always check the applicable CAO for the operation.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'The term "maintenance" as defined in CASR Part 43 includes:',
  options: [
    'A. Only scheduled inspections and overhauls — unscheduled repairs are excluded, subject to the operator's approved exposition authorising such operations',
    'B. Only repairs to the airframe — engine and avionics work is excluded from the definition, subject to written approval from the operator's chief pilot',
    'C. Any work done by the operator — external maintenance contracts are classified as "contracted services" not maintenance, provided a current instrument rating is held for the relevant aircraft category',
    'D. The performance of tasks required to ensure the aircraft remains in an airworthy condition, including inspection, overhaul, repair, modification, and replacement of components'
  ],
  correct: 3,
  explanation: 'Under CASR Part 43, "maintenance" has a broad definition encompassing all work required to ensure continued airworthiness: inspections, overhauls, repairs (structural and systems), modifications, and component replacement. It includes both scheduled and unscheduled work. All maintenance must be carried out by authorised persons and certified in the appropriate documentation.',
  reference: 'CASR Part 43'
},

{
  question: 'An aircraft is fitted with a head-up display (HUD) that has become unserviceable. The HUD is used for low visibility operations. Under the MEL the aircraft may:',
  options: [
    'A. Continue all operations including low visibility operations using the pilot monitoring role only, subject to the pilot completing the required recurrent training within 12 months',
    'B. Continue all operations with both pilots using ground-based guidance only, except when the operation involves more than 9 passenger seats, subject to written approval ',
    'C. Use the HUD in its last known serviceable mode until repair, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'D. Continue operations at weather minima for which the HUD is not required — if the HUD is required for the approved low visibility operation, that category of operation cannot be conducted until the HUD is repaired'
  ],
  correct: 3,
  explanation: 'If the HUD is required for a specific category of operation (e.g. CAT III approaches), those operations cannot be conducted with the HUD unserviceable. The aircraft may still operate at higher weather minima (where the HUD is not required). The MEL will specify which operations are affected. This is a common scenario requiring crews to check MEL limitations against the weather at destination.',
  reference: 'CASR Part 91 / MEL / CASR Part 121'
},

{
  question: 'When an aircraft is modified by the installation of new avionics under a Supplemental Type Certificate (STC), the aircraft\\\'s:',
  options: [
    'A. Certificate of Airworthiness is automatically cancelled and must be reissued, subject to written approval from the operator's chief pilot, only when operating in Class',
    'B. Maintenance programme remains unchanged — STCs do not affect airworthiness requirements, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'C. Type certificate is supplemented by the STC, and the aircraft\\\'s airworthiness is maintained provided the modification was carried out in accordance with the approved STC data and certified by an appropriately authorised person',
    'D. AFM does not need updating — the STC is self-contained documentation, subject to the operator's approved exposition authorising such operations, provided the aircraft holds '
  ],
  correct: 2,
  explanation: 'An STC supplements (not replaces) the original type certificate. After modification under an STC, the aircraft is airworthy provided the installation was performed per the approved STC data by an authorised person, and all STC requirements are complied with. The AFM typically receives a supplement documenting the changed or additional limitations and procedures for the new equipment.',
  reference: 'CASR Part 21'
},

{
  question: 'A company procedure requires the co-pilot to verbally confirm to the captain that all aircraft doors are closed and cross-checked before pushback. This procedure is primarily designed to:',
  options: [
    'A. Comply with the passenger safety briefing requirements, except when the operation involves more than 9 passenger seats, subject to the requirements ',
    'B. Provide a two-person verification of a critical safety item, reducing the risk of a door not being properly secured — a CRM measure that catches errors before they become consequential',
    'C. Satisfy the maintenance release door serviceability requirement, subject to the operator's approved exposition authorising such operations',
    'D. Ensure cabin crew have completed the pre-departure safety brief, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'Two-person verification of critical items (locked doors, landing gear status, fuel quantity) is a fundamental CRM and error management technique. Cross-checking between crew members reduces the probability that an error made by one person will go undetected. This is called a "defence barrier" in accident prevention — it is a procedural control against human error on safety-critical items.',
  reference: 'CASR Part 121 / ICAO Human Factors / CRM principles'
},

{
  question: 'The authority that issues an Australian Certificate of Airworthiness is:',
  options: [
    'A. CASA (Civil Aviation Safety Authority) — the authority having jurisdiction in Australia',
    'B. The aircraft manufacturer — CASA only endorses the manufacturer\\\'s certificate',
    'C. The operator under their approved maintenance organisation authority',
    'D. The Australian Transport Safety Bureau following accident investigation clearance'
  ],
  correct: 0,
  explanation: 'In Australia, the Certificate of Airworthiness is issued by CASA. It is issued when the aircraft conforms to its type certificate, is in a condition for safe operation, and meets all applicable airworthiness standards. CASA is the competent authority for airworthiness in Australia under the Civil Aviation Act 1988.',
  reference: 'CASR Part 21 / Civil Aviation Act 1988'
},

{
  question: 'When a PIC notes in the technical log that an aircraft system was observed to operate unusually but performed normally for the rest of the flight, the maintenance department must:',
  options: [
    'A. Accept the entry as informational only and clear it without action since normal performance was restored, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Investigate and rectify the cause of the unusual operation before the next flight — an "NIL defect found" closure is only acceptable after thorough investigation confirms no fault',
    'C. Close the defect if the same crew operates the next flight and monitors the system, subject to the pilot completing the required recurrent training within 12 months',
    'D. Seek the PIC\\\'s further approval before deciding whether investigation is required, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 1,
  explanation: 'Intermittent defects that self-clear are among the most dangerous — they may indicate an underlying fault that will manifest at a critical moment. Technical log entries of unusual system behaviour must be investigated thoroughly. A cursory "NIL defect found" closure without investigation is not acceptable practice. Maintenance must attempt to reproduce and identify the cause, which may require test flights or detailed systems checks.',
  reference: 'CASR Part 43 / CAO 82.3'
},

{
  question: 'The mandatory equipment required on an Australian-registered aircraft for flights in controlled airspace includes:',
  options: [
    'A. VHF radio, Mode C transponder, and ACAS, only if the operator holds a specific approval under their Air Operator Certificate, subject to the requirements ',
    'B. Only a serviceable transponder — VHF radio is discretionary in controlled airspace, subject to the operator's approved exposition authorising such operations',
    'C. HF radio, Mode S transponder with ADS-B, and TCAS II for all controlled airspace operations, subject to the requirements of the applicable Civil Aviation Order',
    'D. VHF communications equipment, and a serviceable transponder with Mode C altitude encoding as required for the applicable airspace class — specific requirements depend on airspace class and operation type'
  ],
  correct: 3,
  explanation: 'Equipment requirements for controlled airspace operations are specified in CASR Part 91, CAO 20.18, and the AIP. In general, controlled airspace requires: serviceable VHF communications; and a transponder with Mode C (altitude encoding). Mode S and ADS-B requirements apply in higher-level airspace and for certain operations. Exact requirements vary by airspace class and are specified in the AIP ENR.',
  reference: 'CASR Part 91 / CAO 20.18 / AIP ENR 1.4'
},

{
  question: 'A "Special Flight Permit" (ferry permit) authorises:',
  options: [
    'A. An aircraft with expired maintenance to continue regular operations while awaiting maintenance, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. An aircraft that does not meet current airworthiness requirements to fly under specific conditions to a maintenance facility or other approved destination for the purpose of repair, modification, or delivery',
    'C. Any pilot to operate an aircraft type for which they do not hold a type rating in an emergency, subject to the operator's approved exposition authorising such operations',
    'D. An aircraft to exceed its certified maximum speeds for test purposes, provided a current instrument rating is held for the relevant aircraft category, except when the operation in'
  ],
  correct: 1,
  explanation: 'A Special Flight Permit (ferry permit) under CASR Part 21 authorises a specific flight of an aircraft that does not fully meet airworthiness requirements. Common uses include: ferrying an aircraft for maintenance; moving an aircraft after major repair before final certification; or delivery flights of new aircraft. The permit specifies the route, altitude, crew requirements, and any other conditions. It does not authorise ongoing operations.',
  reference: 'CASR Part 21'
},

{
  question: 'The function of an "Acceptable Means of Compliance" (AMC) document issued by CASA is to:',
  options: [
    'A. Provide the only legally acceptable method of complying with a regulation, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Replace the requirement for LAME supervision of maintenance on older aircraft, only when operating in Class C or Class D controlled airspace, provided the relevant aerodr',
    'C. Describe one means (but not the only means) of demonstrating compliance with a requirement — the operator may use alternative means provided they can demonstrate compliance with the underlying requirement',
    'D. Automatically authorise deviations from the relevant CASR requirements, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements '
  ],
  correct: 2,
  explanation: 'AMC documents (advisory circulars, guidance material) describe acceptable means of demonstrating compliance but are not the only means. Operators may use alternative methods provided they can demonstrate to CASA that the alternative method also achieves compliance with the underlying safety objective. This is different from a Standard — alternatives to AMC are possible; alternatives to Standards require notification.',
  reference: 'CASR / CASA Advisory Material'
},

{
  question: 'Under the regulations, a daily inspection of an aircraft must be conducted before:',
  options: [
    'A. Every flight regardless of any previously completed inspection, subject to completing a flight review within the preceding 12 months',
    'B. Each flight that carries passengers under an AOC, except when the flight exceeds 4 hours and additional crew are required',
    'C. The first flight of each day for that aircraft — subsequent flights on the same day do not require a fresh daily inspection unless specified otherwise',
    'D. Only before the first flight of the operator\\\'s rostered duty period, subject to completing a flight review within the preceding 12 months'
  ],
  correct: 2,
  explanation: 'Under CASR Part 43 and the aircraft\\\'s maintenance programme, a daily inspection is required before the first flight of each calendar day. This typically involves a visual check of the aircraft and fluid levels. After the daily inspection, subsequent flights do not require a full repeat of the daily inspection, but a crew pre-flight check is performed before each flight to identify any damage or changes since the last landing.',
  reference: 'CASR Part 43 / Aircraft maintenance programme'
},

{
  question: 'For an aircraft required to operate with TCAS II, a Resolution Advisory (RA) issued by TCAS requires the crew to:',
  options: [
    'A. Advise ATC and await further instructions before responding, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Respond only if the conflicting traffic is confirmed on radar, subject to the pilot completing the required recurrent training within 12 months',
    'C. Cross-check with ATC\\\'s traffic advisories before manoeuvring, only when operating in Class C or Class D controlled airspace',
    'D. Respond immediately to the RA — fly the commanded manoeuvre without waiting for ATC instructions. Advise ATC after commencing the manoeuvre'
  ],
  correct: 3,
  explanation: 'TCAS II Resolution Advisories require immediate response — the crew must follow the RA (climb or descend as commanded) immediately, then advise ATC. ATC instructions must not delay the response to an RA. The TCAS system coordinates between conflicting aircraft transponders to ensure the commanded manoeuvres are complementary. Failure to respond promptly to an RA defeats its protective purpose.',
  reference: 'CASR Part 91 / AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'The pilot in command must not commence a flight if the aircraft\\\'s mass and balance is calculated to result in:',
  options: [
    'A. The aircraft exceeding its certified structural limits (maximum take-off weight) or the centre of gravity being outside the approved limits at any point during the flight',
    'B. A total weight within 5% above the maximum take-off weight, on multi-engine aircraft exceeding 5,700 kg MTOW only, subject to the operator's ap',
    'C. The aircraft exceeding maximum landing weight at the departure airport, except during the period of any declared low visibility procedures at the aerodrome',
    'D. The nose-up moment exceeding that specified in the last W&B document issued, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'The aircraft must be within its certified weight limits (not exceed MTOW) and have its CG within approved limits for all phases of flight. Exceeding weight limits compromises structural integrity; CG outside limits compromises control. Both conditions render the aircraft not in a condition for safe operation. The PIC must verify the loading before each flight.',
  reference: 'CASR Part 91 / CASR Part 121 / AFM'
},

{
  question: 'The objective of the Air Traffic Control service is primarily to:',
  options: [
    'A. Provide meteorological information to IFR pilots, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Manage noise abatement procedures at all Australian airports, subject to the requirements of the applicable Civil Aviation Order',
    'C. Prevent collisions between aircraft, prevent collisions between aircraft and obstructions on the manoeuvring area, and expedite and maintain an orderly flow of traffic',
    'D. Issue clearances for instrument approaches only — other phases of flight are the responsibility of the crew, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 2,
  explanation: 'The three primary objectives of ATC as specified in ICAO Annex 11 and adopted in Australian legislation are: (1) prevent collisions between aircraft; (2) prevent collisions between aircraft and obstructions on the manoeuvring area; and (3) expedite and maintain an orderly flow of air traffic. The provision of weather information is a secondary function under the Flight Information Service.',
  reference: 'AIP GEN 3.3 / ICAO Annex 11'
},

{
  question: 'In Australian Class C airspace, ATC provides separation between:',
  options: [
    'A. All IFR and all VFR flights, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. IFR from IFR, and IFR from VFR — VFR to VFR is not separated by ATC but VFR aircraft are given traffic information',
    'C. Only IFR from IFR — all VFR operations are self-separating, except during the period of any declared low visibility procedures at the aerodrome',
    'D. All flights including VFR to VFR separation at all altitudes, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'In Class C airspace: IFR/IFR — ATC provides separation; IFR/VFR — ATC provides separation; VFR/VFR — ATC does NOT provide separation (VFR pilots remain responsible for see-and-avoid separation). All aircraft (IFR and VFR) require an ATC clearance to operate in Class C. VFR aircraft receive traffic information from ATC to assist with their see-and-avoid responsibilities.',
  reference: 'AIP ENR 1.4 / ICAO Annex 11'
},

{
  question: 'Vertical separation in RVSM airspace (FL290–FL410) is:',
  options: [
    'A. 2,000 ft between all aircraft regardless of RVSM approval, subject to the requirements of the applicable Civil Aviation Order',
    'B. 1,000 ft between RVSM-approved aircraft, and 2,000 ft between any aircraft not approved for RVSM and all other aircraft',
    'C. 500 ft — RVSM was introduced to reduce separation to 500 ft, subject to the operator's approved exposition authorising such operations',
    'D. 1,000 ft for all aircraft above FL290 regardless of RVSM approval status'
  ],
  correct: 1,
  explanation: 'RVSM (Reduced Vertical Separation Minima) applies FL290–FL410. RVSM-approved aircraft receive 1,000 ft vertical separation between them. Non-RVSM aircraft receive 2,000 ft separation from all other aircraft in the RVSM band. RVSM approval requires aircraft to meet specific altimetry accuracy standards. Australia requires RVSM approval for operations in this airspace.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9574'
},

{
  question: 'An IFR flight plan must be filed:',
  options: [
    'A. No later than 30 minutes before the requested departure time, provided the pilot has logged at least 3 hours on type in the preceding 90 days, subject to the requirements ',
    'B. At least 2 hours before departure for all IFR flights, except when the flight exceeds 4 hours and additional crew are required, subject to written approval ',
    'C. Only when operating in Class A or Class C airspace, provided the currency requirement is met within the preceding 6 months, provided a current instrumen',
    'D. As specified in the AIP — for domestic IFR flights typically at least 30 minutes before departure, or as per the operator\\\'s approval. For international flights, 3 hours before departure or as specified'
  ],
  correct: 3,
  explanation: 'Flight plan filing requirements are specified in the AIP ENR 1.10. For domestic IFR, the flight plan should be filed at least 30 minutes before departure (earlier for complex operations). For international flights, the requirement is typically 3 hours prior or per bilateral agreements. The flight plan is required to activate ATC services, SAR coverage, and slot reservations.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under Australian ATC procedures, a "clearance" is:',
  options: [
    'A. An instruction that may be modified by the pilot if a better route is available, subject to the operator's approved exposition authorising such operations',
    'B. A recommendation from ATC that the pilot should follow when practical, except during the period of any declared low visibility procedures at the aerodrome',
    'C. An authorisation for an aircraft to proceed under specified conditions — it is mandatory and must be complied with unless safety is jeopardised',
    'D. Valid only until the aircraft enters the next ATC sector, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'An ATC clearance is a mandatory authorisation to proceed under specified conditions. Pilots must comply with clearances — they are not optional. The exception is a genuine safety emergency where the PIC may deviate as necessary. Clearances must be read back to confirm receipt and understanding. A clearance that would compromise safety must be refused and an alternative requested.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under CASR Part 91, priority of right of way between various types of aircraft in the air is:',
  options: [
    'A. Powered aircraft always have priority over unpowered aircraft, subject to the requirements of the applicable Civil Aviation Order, subject to the operator's ap',
    'B. VFR aircraft always have right of way over IFR aircraft, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to written approval ',
    'C. The largest aircraft by MTOW has right of way over all smaller aircraft, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Aircraft in distress have priority over all others — then balloons, gliders, airships, powered aircraft towing other aircraft, and then other powered aircraft, each giving way to types listed before them'
  ],
  correct: 3,
  explanation: 'The priority of right of way (AIP ENR 1.1): 1st priority — aircraft in distress; then (giving way to those above) balloons, gliders, airships, aircraft towing or towing gliders/banners, and finally powered aircraft. Each category gives way to those above it in the list. Additionally, specific rules apply for aircraft on converging courses, head-on approaches, and overtaking.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Two aircraft on converging courses at approximately the same altitude — which has the right of way?',
  options: [
    'A. The aircraft to the right — the other aircraft gives way by turning right',
    'B. The faster aircraft, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. The aircraft to the left — the other aircraft gives way by turning right',
    'D. The heavier aircraft — larger aircraft always have right of way'
  ],
  correct: 0,
  explanation: 'When two aircraft are on converging courses at the same altitude, the aircraft that has the other on its LEFT gives way. The aircraft to the RIGHT has priority. The give-way aircraft should turn right (to pass behind). This is the same principle as maritime collision avoidance rules and is consistent internationally under ICAO Annex 2.',
  reference: 'CASR Part 91 / AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'Under Australian rules of the air, the "see and avoid" principle places responsibility on:',
  options: [
    'A. Only VFR pilots — IFR pilots are provided full separation by ATC, subject to written approval from the operator's chief pilot',
    'B. Only the pilot in command — the co-pilot\\\'s sole duty is aircraft monitoring, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. All pilots to maintain a visual lookout for other aircraft and take avoiding action if necessary — even IFR pilots in VMC have a see-and-avoid responsibility',
    'D. ATC for aircraft it has identified on radar, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'See-and-avoid is a universal obligation for all pilots when VMC applies. Even IFR pilots flying in VMC conditions have a responsibility to maintain a visual lookout and avoid other aircraft. ATC radar separation does not relieve pilots of see-and-avoid responsibility in visual conditions. In Class G airspace and Class E airspace, see-and-avoid is the primary collision avoidance mechanism.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Australian controlled airspace is classified using the ICAO airspace classification system. Class A airspace:',
  options: [
    'A. Permits both IFR and VFR operations with ATC separation for all',
    'B. Requires ATC clearance for IFR only — VFR is exempt from clearance requirements',
    'C. Is IFR only — VFR flights are not permitted. ATC clearance is required and separation is provided to all flights',
    'D. Is only applicable above FL600 in Australian airspace, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 2,
  explanation: 'Class A airspace in Australia (above FL245): only IFR is permitted; ATC clearance mandatory for all; ATC provides separation to all flights; continuous two-way communication required. VFR is not permitted in Class A — a Special VFR clearance (which applies in Class C/D terminal areas) does not apply in Class A. Class A in Australia begins at FL245.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'In Class G airspace, which of the following statements is correct?',
  options: [
    'A. Class G is uncontrolled airspace — no ATC clearance is required, no ATC separation is provided. IFR flights in Class G are the pilot\\\'s own responsibility for separation and terrain clearance',
    'B. ATC provides separation to all IFR flights in Class G, provided the aircraft holds a valid maintenance release and is within weight limits, provided the relevant aerodr',
    'C. VFR operations are not permitted in Class G airspace, subject to the pilot completing the required recurrent training within 12 months, provided CASA has been notif',
    'D. All flights in Class G require a transponder with Mode C, except when the operation involves more than 9 passenger seats, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'Class G airspace is uncontrolled. No ATC clearance is required to enter, and ATC provides no separation service. IFR flights in Class G are legal but the pilot bears complete responsibility for terrain clearance (LSALT) and separation from other traffic. A flight notification or SAR plan is required for IFR in Class G, and pilots must self-announce on appropriate frequencies.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'The minimum visibility and cloud clearance for VFR flight in Class G airspace below 3,000 ft AMSL or 1,000 ft AGL (whichever is higher) during the day is:',
  options: [
    'A. 5,000 m flight visibility, 1,000 ft below, 1,000 ft above, and 1,500 m horizontal from cloud',
    'B. 800 m flight visibility, clear of cloud and in sight of ground',
    'C. 1,000 m flight visibility, clear of cloud',
    'D. 3,000 m flight visibility and 300 m horizontal from cloud'
  ],
  correct: 2,
  explanation: 'In Class G airspace at and below 3,000 ft AMSL or 1,000 ft AGL (whichever is higher) during the day, the VFR minimum is 1,000 m flight visibility and clear of cloud (but must remain in sight of ground or water). These are more relaxed than higher altitude requirements. Above these altitudes, 5,000 m visibility and specific cloud clearances apply.',
  reference: 'AIP ENR 1.2 / CASR Part 91'
},

{
  question: 'Under Australian ATC procedures, a position report in non-radar airspace should include:',
  options: [
    'A. Aircraft callsign, position, time, flight level or altitude, next reporting point with ETA, and the position after next',
    'B. Aircraft callsign and estimated time of arrival at destination only, subject to the requirements of the applicable Civil Aviation Order',
    'C. Aircraft callsign, altitude, and fuel remaining, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Only the aircraft callsign and current heading — other information is calculated by ATC'
  ],
  correct: 0,
  explanation: 'Standard position report format (AIP ENR 1.1): callsign; position (name of fix); time over fix; flight level or altitude; next reporting point and ETA; subsequent reporting point. This information allows ATC to maintain procedural separation in non-radar environments by calculating aircraft positions relative to each other.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An aircraft on an IFR flight plan experiences radio failure in Class E controlled airspace. The pilot should:',
  options: [
    'A. Continue to the destination using the last cleared route and altitude — ATC will adjust other traffic, subject to the operator's approved exposition authorising such operations',
    'B. Squawk 7600, maintain the last assigned or MEA altitude (whichever is higher), proceed on the cleared route to the destination, arrive at the expected approach time, and execute the published instrument approach',
    'C. Squawk 7700 and land at the nearest aerodrome immediately, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap',
    'D. Descend to VMC and continue VFR to the destination, subject to written approval from the operator's chief pilot, only if the operator holds a'
  ],
  correct: 1,
  explanation: 'Radio failure procedure (NORDO): squawk 7600; maintain last assigned altitude or MEA (whichever is higher); proceed on cleared route; continue to destination. At destination: hold until expected approach time (EAT), then execute the published instrument approach. ATC will clear the airspace based on the expected NORDO procedures. Squawk 7700 is for general emergency, not NORDO.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The "Transition Altitude" in Australian operations is:',
  options: [
    'A. Always 3,000 ft AMSL throughout Australia, subject to the pilot completing the required recurrent training within 12 months',
    'B. 10,000 ft AMSL in Australia — below this altitude QNH is used; above it flight levels (QNE/1013.25 hPa) are used',
    'C. The altitude at which the aircraft enters Class C airspace, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Variable and published on approach charts — it is not standardised across Australia'
  ],
  correct: 1,
  explanation: 'Australia has a standardised transition altitude of 10,000 ft AMSL. Below the transition altitude, altimeters are set to QNH (actual local pressure). At and above the transition altitude (expressed as flight levels), altimeters are set to standard pressure (1013.25 hPa / 29.92 inHg). The transition level is the lowest flight level above the transition altitude and varies with QNH.',
  reference: 'AIP ENR 1.7 / AIP GEN 2.1'
},

{
  question: 'An IFR aircraft is given an ATC clearance to "descend to reach 10,000 ft by PADME". The pilot must:',
  options: [
    'A. Descend at the pilot\\\'s chosen rate and ensure the aircraft is at or below 10,000 ft when crossing PADME — the "by" constraint requires the altitude at the fix',
    'B. Descend at the standard 3° descent rate immediately upon receiving the clearance',
    'C. Commence descent immediately and be at 10,000 ft when crossing PADME',
    'D. Request clarification — "by" constraints are not used in Australian ATC clearances'
  ],
  correct: 2,
  explanation: '"Descend to reach 10,000 ft by PADME" is an altitude constraint clearance — the aircraft must be at 10,000 ft (not below, not above unless STAR constraints are specified) when crossing PADME. These constraints are used on STARs and approach clearances to ensure traffic sequencing. The pilot manages the descent profile to meet the constraint exactly at the fix.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, an "AIREP" is required to be submitted:',
  options: [
    'A. Only during oceanic operations beyond VHF range, subject to written approval from the operator's chief pilot, subject to the pilot complet',
    'B. When specifically requested by ATC, or when encountering significant meteorological conditions not depicted in the forecast (such as moderate or severe turbulence, severe icing, or an unforecast CB)',
    'C. At every position report in non-radar airspace, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'D. Only on international flights where position reporting is required by the destination country, subject to written approval from the operator's chief pilot'
  ],
  correct: 1,
  explanation: 'An AIREP (Air Report) is a meteorological report from an aircraft in flight. It must be submitted when requested by ATC or MET services, and when encountering significant meteorological hazards not adequately covered by forecasts (severe turbulence, severe icing, volcanic ash, etc.). Routine AIREPs may be requested on certain routes. The AIREP assists meteorological services in updating forecasts and warning other aircraft.',
  reference: 'AIP ENR 1.1 / ICAO Annex 3'
},

{
  question: 'An aircraft operating under the IFR in Class C airspace must maintain:',
  options: [
    'A. VFR cloud clearances when in VMC, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. A separation of at least 5 nm from other IFR traffic by use of TCAS, subject to the requirements of the applicable Civil Aviation Order',
    'C. Visual reference to the ground at all times below 10,000 ft, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Continuous two-way radio communication with ATC and comply with ATC instructions — the specific weather minima are the IFR separation minima, not VFR cloud clearances'
  ],
  correct: 3,
  explanation: 'IFR in Class C: continuous two-way radio communication with ATC; comply with ATC instructions and clearances. ATC provides IFR-to-IFR and IFR-to-VFR separation. The aircraft operates under instrument flight rules regardless of actual weather conditions — IFR weather minima (separation provided by ATC) apply, not the VFR cloud clearance requirements.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'The altimeter setting used for operations at and above the transition altitude in Australia is:',
  options: [
    'A. QFE — the altimeter is set to aerodrome elevation, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. QNH — the altimeter is set to the current local pressure for the area',
    'C. QFF — the mean sea level pressure corrected to sea level temperature',
    'D. QNE — the standard pressure setting of 1013.25 hPa — altimeters read flight levels above the transition altitude'
  ],
  correct: 3,
  explanation: 'Above the transition altitude in Australia (10,000 ft), all aircraft use QNE — standard pressure (1013.25 hPa or 29.92 inHg) — and report altitude as flight levels. This standardises altimeter readings between aircraft and eliminates the need for ATC to know each aircraft\\\'s individual QNH setting when applying vertical separation. All aircraft on the same pressure reference simplifies separation.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'In Australian airspace, a "SIGMET" is issued for:',
  options: [
    'A. Routine weather deterioration at terminal aerodromes, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Significant meteorological conditions hazardous to all aircraft — including severe turbulence, severe icing, widespread dust/sand storms, volcanic ash, and tropical cyclones',
    'C. Fog and low cloud at aerodromes only, subject to written approval from the operator's chief pilot, provided CASA has been notif',
    'D. Wind shear alerts at specific runways, provided a current instrument rating is held for the relevant aircraft category, except during the period of '
  ],
  correct: 1,
  explanation: 'A SIGMET (Significant Meteorological Information) is issued by the Bureau of Meteorology for conditions hazardous to all aircraft in the en-route environment: severe turbulence, severe icing, widespread dust/sandstorm, volcanic ash cloud, and tropical cyclones. SIGMETs are mandatory reading for pre-flight planning and must be actioned in flight if encountered.',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'The three phases of emergency that ATC will declare for an aircraft are:',
  options: [
    'A. Urgency, Alert, Emergency, provided a current instrument rating is held for the relevant aircraft category',
    'B. INCERFA (Uncertainty Phase), ALERFA (Alert Phase), DISTRESFA (Distress Phase)',
    'C. Warning, Danger, Critical, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Monitor, Alert, Response, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: 'ICAO Annex 12 and AIP GEN 3.6 define three phases: INCERFA (uncertainty phase) — doubt about safety; ALERFA (alert phase) — apprehension about safety; DISTRESFA (distress phase) — grave and imminent danger. Each phase triggers increasing levels of response by the Rescue Coordination Centre (RCC). In Australia, the RCC is operated by the JRCC (Joint Rescue Coordination Centre).',
  reference: 'AIP GEN 3.6 / ICAO Annex 12'
},

{
  question: 'Under Australian ATC procedures, the correct transponder code for communication failure is:',
  options: [
    'A. 7500',
    'B. 7700',
    'C. 7600',
    'D. 7000'
  ],
  correct: 2,
  explanation: 'Transponder emergency codes: 7700 = general emergency (Mayday); 7600 = radio communication failure (NORDO); 7500 = unlawful interference (hijack). Code 7000 is the standard code for conspicuity in Australian airspace when no specific code is assigned. The 7600 code alerts ATC to NORDO procedures and triggers specific handling.',
  reference: 'AIP ENR 1.6'
},

{
  question: 'An ATC clearance specifying "MAINTAIN FL120" requires the pilot to:',
  options: [
    'A. Fly at FL120 immediately — any deviation from FL120 is a clearance violation unless authorised by ATC or required for safety',
    'B. Achieve FL120 at the pilot\\\'s discretion and then maintain it, except when the operation involves more than 9 passenger seats',
    'C. Maintain FL120 only while in the current ATC sector — change when contacting the next sector',
    'D. Not descend below FL120 but may climb above it without further clearance, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'A "MAINTAIN" altitude instruction is a command to fly at that specific level — neither above nor below. Any deviation is a clearance violation (altitude bust) and must be reported. The only exceptions are a safety emergency or an amended clearance from ATC. Altitude busts are taken very seriously as they compromise separation. The pilot must request an amended clearance if they cannot or do not wish to maintain the assigned level.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian procedural separation, longitudinal separation between two aircraft tracking in the same direction on the same route is:',
  options: [
    'A. 15 minutes using the same navaid, or other prescribed minima based on speed, navigation accuracy, and route type — the specific minima depend on the applicable procedural separation standard',
    'B. Achieved when there is at least 30 minutes between estimated times overhead the same point, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. 5 minutes for jet aircraft and 10 minutes for turboprops, except when the flight exceeds 4 hours and additional crew are required, only if the operator holds a',
    'D. 50 nm at all altitudes and for all aircraft categories, subject to the operator's approved exposition authorising such operations, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'Procedural longitudinal separation uses time-based minima at reporting points. For aircraft using the same navaid tracking in the same direction: minimum 15 minutes between consecutive aircraft. Specific minima vary based on navigation type (NDB, VOR, GPS), speed differential, and whether the following aircraft is faster or slower. The AIP ENR 1.1 and ICAO PANS-ATM document the applicable minima.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM Doc 4444'
},

{
  question: 'The IFR Lowest Safe Altitude (LSALT) for a route segment ensures:',
  options: [
    'A. The aircraft is above the highest cloud layer in the area, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. The aircraft remains in controlled airspace throughout the route segment, subject to written approval from the operator's chief pilot',
    'C. The aircraft has obstacle clearance of at least 1,000 ft over all terrain and obstacles within the corridor, extending 5 nm either side of the route',
    'D. The aircraft will receive adequate VOR/NDB signal coverage for navigation, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'LSALT is the altitude providing at least 1,000 ft (in non-mountainous) or 2,000 ft (in designated mountainous areas) clearance above all terrain and obstacles within 5 nm either side of the planned track. Published on IFR charts and En-Route Charts. IFR pilots must remain at or above LSALT except during an instrument approach procedure.',
  reference: 'AIP ENR 1.1 / En-Route Charts'
},

{
  question: 'When an IFR aircraft is vectored by ATC, who is responsible for terrain and obstacle clearance?',
  options: [
    'A. Always the PIC — ATC is never responsible for terrain clearance, provided a current instrument rating is held for the relevant aircraft category, provided the relevant aerodr',
    'B. The pilot must independently verify terrain clearance using charts even when being vectored, except when the operation involves more than 9 passenger seats',
    'C. ATC is responsible for terrain clearance when issuing vectors — except when the pilot has been advised to maintain their own terrain clearance, or when ATC has cancelled surveillance-based separation',
    'D. Neither party — GPWS provides the primary terrain clearance mechanism during vectoring, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'When ATC issues vectors in controlled airspace, ATC accepts responsibility for terrain clearance, provided radar surveillance is available and the aircraft is at or above the applicable minimum vectoring altitude (MVA). ATC must advise the pilot if they should maintain their own terrain clearance. If ATC advises "maintain own terrain clearance," the responsibility reverts to the pilot.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'An aircraft transmits a distress signal on 121.5 MHz. The correct initial response for an ATC unit receiving the transmission is to:',
  options: [
    'A. Acknowledge the distress call and immediately transfer the aircraft to the nearest aerodrome tower, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Acknowledge the distress, attempt to obtain the aircraft\\\'s callsign, position, and nature of distress, advise the Rescue Coordination Centre (JRCC), and provide all assistance possible',
    'C. Sound the crash alarm at the nearest aerodrome only if the aircraft has declared fuel emergency, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Monitor the frequency and wait for the aircraft to identify its position before taking action, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 1,
  explanation: 'On receiving a distress call: (1) immediately acknowledge; (2) obtain details (callsign, position, fuel, persons on board, nature of problem); (3) notify JRCC as soon as possible; (4) provide all available assistance. Guard 121.5 MHz as it is the international distress frequency. The JRCC (Joint Rescue Coordination Centre) coordinates the SAR response.',
  reference: 'AIP GEN 3.6 / ICAO Annex 12'
},

{
  question: 'Under Australian ATC procedures, an ATIS (Automatic Terminal Information Service) broadcast:',
  options: [
    'A. Is issued by ATC to an individual aircraft on initial contact, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Is a continuous broadcast of routine aerodrome information that pilots must obtain and acknowledge on first contact with ATC — this reduces ATC workload and improves efficiency',
    'C. Is broadcast on the emergency frequency 121.5 MHz, subject to the operator's approved exposition authorising such operations, except when the operation in',
    'D. Is only broadcast during instrument meteorological conditions, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'ATIS is a continuous recorded broadcast on a dedicated VHF frequency providing current aerodrome information (weather, QNH, active runway, approach in use, NOTAMs). Each new recording receives a sequential letter (Alpha, Bravo...). Pilots must obtain the current ATIS before calling ATC and report "information [letter] received" on first contact. This removes the need for ATC to read weather to each aircraft.',
  reference: 'AIP GEN 3.3 / AIP GEN 3.4'
},

{
  question: 'The SID (Standard Instrument Departure) serves what primary purpose?',
  options: [
    'A. To provide terrain clearance for VFR departures from busy aerodromes, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'B. To define noise-preferred routes that override obstacle clearance requirements, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. To provide a standardised IFR departure procedure that ensures obstacle clearance and simplifies ATC clearance delivery — it specifies the departure route, altitude constraints, and ATC service type',
    'D. To sequence arriving aircraft into the final approach sequence, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except during the period of '
  ],
  correct: 2,
  explanation: 'A SID provides: (1) obstacle clearance based on a specified minimum climb gradient (typically 3.3% / 200 ft/nm); (2) a standardised departure route reducing ATC clearance complexity; (3) altitude constraints for traffic sequencing. Pilots must comply with published SID altitude and speed constraints. If the aircraft cannot meet the published climb gradient (e.g. due to performance limitations), the SID cannot be used.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The STAR (Standard Arrival Route) provides what operational benefit?',
  options: [
    'A. A mandatory approach sequence that cannot be changed by ATC, except when the operation involves more than 9 passenger seats, provided the aircraft holds ',
    'B. An alternative approach route when the primary instrument approach is unavailable, subject to the requirements of the applicable Civil Aviation Order',
    'C. A standardised arrival procedure connecting the en-route phase to the initial approach fix, reducing pilot and ATC workload and providing known descent/speed profiles for sequencing',
    'D. Terrain clearance only — it has no traffic management function, only when operating in Class C or Class D controlled airspace, provided a current instrumen'
  ],
  correct: 2,
  explanation: 'STARs connect the en-route phase to the terminal area, providing standardised arrival routing. Benefits: reduced ATC workload (routing is pre-established); reduced crew workload (pre-loaded in FMS); predictable sequencing aids traffic management; published altitude and speed constraints provide a known descent profile. ATC may issue "descend via STAR" to require compliance with all published constraints.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When ATC instructs a pilot to "HOLD AT [FIX] AS PUBLISHED," the pilot should:',
  options: [
    'A. Proceed to the fix and enter the published holding pattern (as shown on the relevant chart) at the published speed limit and direction of turns',
    'B. Contact ATC to confirm the holding pattern details, subject to written approval from the operator's chief pilot',
    'C. Enter right-hand holding at the fix using standard entry procedures regardless of what is published',
    'D. Hold at the fix until further clearance, using any convenient holding pattern, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 0,
  explanation: '"Hold as published" instructs the pilot to fly the holding pattern shown on the relevant approach or en-route chart. This includes the published inbound course, direction of turns (left or right), and the published altitude and speed limits. If the pilot is unfamiliar with the published holding, they must advise ATC and request specific holding details. Holding at the wrong place or in the wrong pattern could compromise separation.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under ICAO and Australian rules, an aircraft overtaking another aircraft must:',
  options: [
    'A. Pass to the left of the aircraft being overtaken, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Pass above the aircraft being overtaken, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Pass to the right of the aircraft being overtaken, keeping the aircraft being overtaken on the pilot\\\'s left',
    'D. Slow down and maintain formation behind until traffic conflict clears'
  ],
  correct: 2,
  explanation: 'The overtaking rule: an aircraft overtaking shall pass to the right of the aircraft being overtaken, keeping the aircraft being overtaken on the overtaking aircraft\\\'s left side. This applies to all aircraft including aircraft on the water and, to the extent practical, aircraft on the ground.',
  reference: 'CASR Part 91 / AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'The minimum fuel required to be on board an aircraft before commencing an IFR flight (the "legal minimum") is defined in:',
  options: [
    'A. The aircraft AFM only — no separate regulatory fuel minimum exists, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'B. The operator\\\'s Operations Manual only — CASR does not specify fuel requirements, subject to the operator's approved exposition authorising such operations',
    'C. CASR Part 91 and applicable CAOs — for multi-engine turbine aircraft, sufficient fuel to reach destination, execute a missed approach, proceed to alternate, and land with specified final reserve fuel',
    'D. AIP ENR 1.1 which specifies minimum fuel as 30 minutes at cruise power for all aircraft, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 2,
  explanation: 'IFR fuel requirements under CASR Part 91 and CAO 82.0 for multi-engine turbine aircraft: fuel for the flight to destination, a missed approach, flight to the alternate (if required), approach at the alternate, and final reserve. Final reserve for turbine aircraft is typically 30 minutes at holding speed at 1,500 ft above destination. The specific requirements depend on the operation type and aircraft category.',
  reference: 'CASR Part 91 / CAO 82.0'
},

{
  question: 'An aircraft in Class D airspace (a controlled aerodrome) requires:',
  options: [
    'A. An ATC clearance for both IFR and VFR operations — all aircraft in Class D controlled airspace require clearance. ATC provides separation between IFR aircraft and issues traffic information to VFR aircraft',
    'B. ATC clearance only for IFR operations — VFR may enter without clearance, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. A transponder with Mode C only — no radio communication is required, except during the period of any declared low visibility procedures at the aerodrome, only when operating in Class',
    'D. Clearance only when arriving — departures may commence without clearance in Class D, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'Class D airspace (e.g. controlled aerodrome CTR): all aircraft (IFR and VFR) require ATC clearance. ATC provides IFR/IFR separation, gives VFR aircraft traffic information, and sequences arrivals and departures. Two-way radio communication is required before entering. VFR aircraft maintain see-and-avoid responsibility in Class D.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'The height above terrain that determines whether a hill or obstacle requires aviation lighting in Australia is:',
  options: [
    'A. 50 ft above surrounding terrain',
    'B. 150 m (approximately 492 ft) above the surrounding terrain for the area',
    'C. 300 ft above the highest terrain within 10 nm',
    'D. Any structure above mean sea level requires lighting regardless of terrain height'
  ],
  correct: 1,
  explanation: 'In Australia, structures extending 150 m (492 ft) or more above ground level in the surrounding area require aviation warning lighting. This is in accordance with ICAO Annex 14 recommendations adopted into Australian regulations. Lower structures in the vicinity of aerodromes may also require lighting. The 150 m threshold is the standard for en-route obstacles.',
  reference: 'CASR Part 139 / ICAO Annex 14'
},

{
  question: 'When would ATC suspend VFR operations at a controlled aerodrome?',
  options: [
    'A. Whenever IFR operations are being conducted, subject to the operator's approved exposition authorising such operations, only when operating in Class',
    'B. When the aerodrome is above sea level capacity for movements per hour, provided the aircraft holds a valid maintenance release and is within weight limits, except during the period of ',
    'C. When weather conditions fall below the published VMC minima for the terminal area — typically when ceiling falls below 1,000 ft or visibility below 5,000 m, depending on the published minima for the aerodrome',
    'D. VFR operations cannot be suspended — pilots always retain the right to fly VFR in VMC, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif'
  ],
  correct: 2,
  explanation: 'ATC may suspend VFR operations when conditions deteriorate below VMC minima at a controlled aerodrome. The decision is made by ATC based on prevailing weather against published VMC thresholds. When VFR operations are suspended, VFR aircraft may not depart or approach until conditions improve. IFR operations continue as ATC can provide instrument separation.',
  reference: 'AIP ENR 1.4 / AIP ENR 1.1'
},

{
  question: 'Under the AIP, a "Special VFR" clearance at a Class D or Class C terminal allows:',
  options: [
    'A. VFR flight at night regardless of weather conditions, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds ',
    'B. A VFR aircraft to operate within a control zone in IMC or below normal VMC minima, under specific conditions and ATC clearance, when the aircraft cannot comply with standard IFR requirements',
    'C. Any aircraft to fly VFR in Class A airspace with ATC permission, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. IFR aircraft to cancel IFR and proceed VFR in the terminal area, except when the operation involves more than 9 passenger seats, provided CASA has been notif'
  ],
  correct: 1,
  explanation: 'Special VFR (SVFR): allows VFR aircraft to operate within a control zone in weather conditions below standard VMC (but not necessarily IMC) under specific ATC clearance conditions. The aircraft must remain clear of cloud, in sight of ground or water, at the pilot\\\'s discretion. SVFR is not available in Class A airspace. It is used by helicopter operations in urban areas and for slow-moving aircraft.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'The phrase "MAINTAIN OWN SEPARATION AND VMC" issued by ATC to an IFR flight means:',
  options: [
    'A. ATC is unable to provide any services and the aircraft must operate independently, subject to written approval from the operator's chief pilot, except when the operation in',
    'B. The aircraft is cleared to conduct a visual approach to the destination, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. ATC is authorising the aircraft to deviate from the IFR clearance and navigate visually, maintaining separation from other traffic by see-and-avoid — the pilot must request and confirm this clearance',
    'D. Instrument separation is suspended pending radar contact establishment, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: '"Maintain own separation and VMC" is an ATC authorisation for the pilot to accept responsibility for own separation while in VMC. The pilot must have the other traffic in sight and be in VMC. It is commonly used when the aircraft needs to manoeuvre in a way that would be difficult to separate procedurally (e.g. visual contact with a preceding aircraft on approach). The pilot must not accept this clearance unless they are in VMC and have the other traffic in sight.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under ATC procedures, "essential traffic" information is provided to an IFR aircraft when:',
  options: [
    'A. Any aircraft is within 50 nm of the IFR aircraft, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'B. Only when the other aircraft is operating without ATC communication, except during the period of any declared low visibility procedures at the aerodrome',
    'C. Conflicting IFR traffic exists that would prevent ATC from applying standard separation — the pilot is given essential traffic information so they can maintain their own separation if in VMC',
    'D. Essential traffic information is never provided — ATC provides separation without informing the pilot, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'Essential traffic: when ATC cannot apply or maintain standard separation between aircraft, and the aircraft may come into conflict, ATC advises the PIC of the conflicting traffic. In VMC the pilot may accept responsibility to maintain their own separation. The information includes the other aircraft\\\'s position, level, and direction. This is standard in both radar and procedural environments.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The standard rate of climb for a SID with a published minimum climb gradient of 3.3% requires an aircraft at 150 kt groundspeed to climb at:',
  options: [
    'A. 330 ft/min',
    'B. 825 ft/min',
    'C. 250 ft/min',
    'D. 495 ft/min'
  ],
  correct: 3,
  explanation: 'Climb gradient conversion: rate of climb (ft/min) = groundspeed (kt) × climb gradient (%). At 150 kt groundspeed and 3.3% gradient: 150 × 3.3 = 495 ft/min. Note: 1 kt ≈ 1 nm/min, so 150 kt = 2.5 nm/min = 150 nm/hr. At 200 ft per nm: 150 × 200 ft/nm ÷ 60 = 500 ft/min (approximate). The 3.3% gradient equates to approximately 200 ft per nm, a standard SID gradient.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under Australian regulations, ATC must provide an IFR aircraft with an estimate for approach or a clearance to commence approach:',
  options: [
    'A. At least 5 minutes before the estimated approach time, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'B. Not later than when the aircraft reaches a point where it would need to commence holding at the holding fix to arrive overhead at the expect approach time — typically provided at the estimated approach time (EAT) if no earlier information is available',
    'C. Only when the aircraft is within 50 nm of the destination, provided CASA has been notified of the operation at least 24 hours in advance, except during the period of ',
    'D. The estimate for approach must be provided at departure, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a'
  ],
  correct: 1,
  explanation: 'ATC provides an expected approach time (EAT) when delay at the holding fix is expected. The EAT must be provided at least 10 minutes before the aircraft would need to commence holding. If no EAT is provided, the aircraft proceeds to the fix and commences approach. This allows the pilot to calculate fuel requirements and decide whether to hold or divert.',
  reference: 'AIP ENR 1.5 / ICAO PANS-ATM'
},

{
  question: 'The ATC area responsible for providing services in the terminal area around a controlled aerodrome is called:',
  options: [
    'A. Terminal Control Unit (TCU) or Approach Control — responsible for arriving and departing aircraft in the terminal area extending to the en-route phase hand-off',
    'B. Area Control Centre (ACC), subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'C. Aerodrome Control Tower — responsible for all aircraft within 25 nm of the aerodrome, only when operating in Class C or Class D controlled airspace',
    'D. Flight Service — responsible for all non-IFR traffic in the terminal area, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'The Terminal Control Unit (TCU) or Approach Control provides ATC services in the terminal area (typically from the handoff from Area Control down to the tower handoff on final approach). It handles arriving and departing IFR traffic, sequencing, radar vectoring, and the intermediate and initial approach phases. The Aerodrome Control Tower handles ground movement and aircraft in the circuit/landing sequence.',
  reference: 'AIP ENR 1.4 / AIP GEN 3.3'
},

{
  question: 'A pilot wishing to deviate from their IFR flight plan due to weather avoidance should:',
  options: [
    'A. Deviate without communicating with ATC — weather avoidance is at the PIC\\\'s absolute discretion, except when the operation involves more than 9 passenger seats',
    'B. Advise ATC as soon as practicable, state the nature of the deviation and estimated return to track, and obtain an amended clearance — maintain position reports throughout',
    'C. Squawk 7700 before deviating to alert ATC to the weather deviation, except when the operation involves more than 9 passenger seats',
    'D. Only advise ATC after the deviation is complete and the aircraft is back on track, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'Weather deviations require immediate ATC notification. Advise ATC of the deviation (direction, extent, estimated return), request an amended clearance, and maintain communication throughout. ATC will resequence traffic as needed and ensure separation is maintained. Deviating without advising ATC could result in collision with other ATC-separated traffic that has not been informed of the conflict.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'Under the Australian AIP, ATC radar identification can be established by:',
  options: [
    'A. Asking the pilot to confirm their altitude only, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Only through direct visual observation of the aircraft from the tower, subject to the requirements of the applicable Civil Aviation Order',
    'C. Correlating the aircraft\\\'s SSR transponder return with the flight plan, observing a squawk or ident, or positively correlating a primary radar return with a known position',
    'D. The aircraft simply being in the radar coverage area, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'Radar identification methods: (1) observing the SSR return when the pilot selects the assigned transponder code; (2) observing the IDENT response when the pilot activates ident; (3) correlating an observed change in position with the pilot\\\'s position report; (4) identifying a specific pattern of primary radar returns. Once identified, ATC advises "radar identified" and the full radar service begins.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'Speed control instructions from ATC must be:',
  options: [
    'A. Applied immediately at the time of receipt, subject to written approval from the operator's chief pilot, provided a current instrumen',
    'B. Implemented only after passing the next reporting point, except when the operation involves more than 9 passenger seats, provided the relevant aerodr',
    'C. Subject to the PIC\\\'s approval before implementation, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval ',
    'D. Acknowledged and applied as soon as practicable — the speed adjustment is typically achieved within the aircraft\\\'s performance capability and the instruction must be complied with unless the pilot advises ATC that compliance is not possible for safety reasons'
  ],
  correct: 3,
  explanation: 'ATC speed instructions must be complied with as soon as practicable. The pilot should acknowledge the instruction and advise ATC if the commanded speed cannot be achieved (e.g. due to icing or performance restrictions), or if compliance would compromise safety. Speed control is used for sequencing and separation purposes — non-compliance disrupts the traffic sequence.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'When an aircraft enters the final approach at a controlled aerodrome without a landing clearance, the correct action is:',
  options: [
    'A. Immediately contact the tower and request a landing clearance — do not land without a specific landing clearance. If no response, execute a missed approach',
    'B. Continue and land — the approach clearance implies landing authority, subject to written approval from the operator's chief pilot',
    'C. Conduct a low pass and request landing clearance on the next circuit, only when operating in Class C or Class D controlled airspace',
    'D. Only abort if other aircraft are visible on the runway, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'An approach clearance does not constitute a landing clearance. A specific landing clearance must be obtained from the tower before landing. If approaching without a landing clearance and unable to obtain one on the tower frequency, execute a missed approach. Landing without a clearance in a controlled aerodrome is a serious breach that risks runway incursion and collision.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under Australian SAR procedures, INCERFA (uncertainty phase) is declared when:',
  options: [
    'A. An aircraft has not arrived at its destination 30 minutes after ETA and all communications attempts have failed, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. An aircraft has transmitted a Mayday call on 121.5 MHz, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'C. There is uncertainty about the safety of an aircraft and its occupants — typically when an aircraft fails to make an expected position report or does not arrive within the period 30 minutes after its ETA',
    'D. A pilot reports that weather conditions are deteriorating rapidly, except when the operation involves more than 9 passenger seats, provided CASA has been notif'
  ],
  correct: 2,
  explanation: 'INCERFA (uncertainty phase) is declared when: (1) no communication from an aircraft within 30 minutes of its expected time; (2) an aircraft fails to arrive within 30 minutes of ETA without explanation. At this stage the RCC begins communication checks. ALERFA (alert) follows if no resolution; DISTRESFA (distress) when immediate danger is believed.',
  reference: 'AIP GEN 3.6 / ICAO Annex 12'
},

{
  question: 'In a search and rescue operation, the pilot of an aircraft that locates an accident site should:',
  options: [
    'A. Land immediately to provide medical assistance, subject to the pilot completing the required recurrent training within 12 months, provided the relevant aerodr',
    'B. Proceed to the nearest aerodrome and report the sighting, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval ',
    'C. Note the position accurately, establish and maintain communications with the RCC if possible, remain on scene to guide rescue aircraft if fuel permits, and drop supplies only if specifically requested',
    'D. Circle the site once to confirm, then continue to the original destination, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 2,
  explanation: 'When an aircraft locates a crash site: (1) note the exact position; (2) contact RCC or ATC immediately; (3) remain on scene if fuel and safety permit to guide rescue aircraft; (4) if no radio contact, proceed to the nearest aerodrome and report. Do not land unless specifically instructed or lives are in immediate danger. On-scene coordination is valuable for rescue aircraft.',
  reference: 'AIP ENR 1.10 / ICAO Annex 12'
},

{
  question: 'The transponder code to use during an unlawful interference (hijack) situation is:',
  options: [
    'A. 7500',
    'B. 7700',
    'C. 7600',
    'D. 2000'
  ],
  correct: 0,
  explanation: 'Transponder code 7500 = unlawful interference (hijack/threat). Code 7700 = general emergency. Code 7600 = radio failure. ATC recognising a 7500 squawk will handle the aircraft discretely, alerting relevant authorities without announcing the situation to other frequencies. The crew must not change the code unless instructed to do so by ATC.',
  reference: 'AIP ENR 1.6 / ICAO Annex 17'
},

{
  question: 'Under CAO 48.1, the maximum flight time limit for an airline pilot operating under multi-crew rules in any 7-day period is:',
  options: [
    'A. 50 hours',
    'B. 60 hours',
    'C. 40 hours',
    'D. 70 hours'
  ],
  correct: 1,
  explanation: 'Under CAO 48.1, the maximum flight time in any 7-day period for multi-crew operations is 60 hours. Combined with the daily limit (10 hours single crew), monthly limit (100 hours), and annual limit (1,000 hours), these cumulative limits protect against chronic fatigue. The 7-day limit cannot be exceeded regardless of individual flight duty periods.',
  reference: 'CAO 48.1'
},

{
  question: 'An aircraft has been intercepted by a military aircraft. The signal "rocking wings" by the intercepting aircraft means:',
  options: [
    'A. The intercepting aircraft is experiencing an emergency, provided a current instrument rating is held for the relevant aircraft category',
    'B. The intercepting aircraft is acknowledging the intercepted aircraft\\\'s distress signal',
    'C. The intercepted aircraft should follow the intercepting aircraft — typically to a specified landing location',
    'D. The intercepted aircraft may proceed on its original track'
  ],
  correct: 2,
  explanation: 'ICAO interception signals: intercepting aircraft rocks wings = "Follow me" — the intercepted aircraft must follow. Intercepted aircraft rocks wings = "Understood, will comply." The intercepting aircraft may also flash lights to communicate. All signals and responses are defined in ICAO Annex 2 and the AIP. Compliance with interception instructions is mandatory — non-compliance can be interpreted as hostile intent.',
  reference: 'AIP ENR 1.12 / ICAO Annex 2'
},

{
  question: 'Under Australian legislation, an aircraft accident must be notified to the ATSB:',
  options: [
    'A. Within 72 hours of the occurrence, subject to the pilot completing the required recurrent training within 12 months',
    'B. As soon as practicable after the accident — for serious accidents, by the quickest available means (typically telephone immediately, followed by written report)',
    'C. Within 7 days by written report only, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Notification is only required if the accident results in fatalities, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'Under the Transport Safety Investigation Act 2003, aircraft accidents and serious incidents must be notified to the ATSB as soon as practicable. Serious accidents require immediate notification by the quickest means (telephone). The written report must follow promptly. Failure to notify is an offence. The ATSB also accepts voluntary occurrence reports for less serious events.',
  reference: 'Transport Safety Investigation Act 2003'
},

{
  question: 'The "accident investigation" conducted by the ATSB is conducted:',
  options: [
    'A. To determine the cause of the accident and assign blame to responsible parties, subject to written approval from the operator's chief pilot, only when operating in Class',
    'B. Jointly with CASA which assigns regulatory sanctions based on the findings, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. For safety purposes only — to identify safety issues and prevent future accidents. Findings cannot be used in civil or criminal proceedings and the investigation is not about apportioning blame',
    'D. To determine insurance liability for the parties involved in the accident, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 2,
  explanation: 'The ATSB conducts safety investigations — not investigations to assign blame or determine liability. Under the TSI Act, ATSB findings cannot be used in civil or criminal proceedings and are not for the purpose of apportioning blame. This "no-blame" approach encourages open reporting and information sharing. CASA may conduct a separate regulatory investigation.',
  reference: 'Transport Safety Investigation Act 2003'
},

{
  question: 'A pilot observes another aircraft in distress on the ground after a forced landing in a remote area. The "on-scene" responsibilities of the observing pilot include:',
  options: [
    'A. Circling overhead to mark the position, establishing communication with ATC/RCC, providing information about the accident site (location, number of survivors visible, type of terrain), and remaining on scene as long as fuel permits',
    'B. No specific obligations — the pilot should continue to their destination and file a report, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr',
    'C. Immediately descending and landing nearby to render assistance, except during the period of any declared low visibility procedures at the aerodrome, subject to written approval ',
    'D. Transmitting the position once only on 121.5 MHz and then proceeding to destination, provided the aircraft holds a valid maintenance release and is within weight limits, only when operating in Class'
  ],
  correct: 0,
  explanation: 'Obligations when observing a crash site: (1) note the position (lat/long, landmarks); (2) establish communication with RCC/ATC immediately (121.5 MHz or assigned frequency); (3) report position, terrain description, number of survivors visible, and any other relevant information; (4) remain on scene as long as possible to guide rescue aircraft. Immediate landing is rarely safe and is generally not required.',
  reference: 'AIP ENR 1.10 / ICAO Annex 12'
},

{
  question: 'Under Australian legislation, carriage of dangerous goods on a passenger-carrying aircraft is governed primarily by:',
  options: [
    'A. CASR Part 92 and the Civil Aviation Order governing dangerous goods — these specify which goods may be carried, packing requirements, documentation, and quantity limits',
    'B. IATA Dangerous Goods Regulations (DGR) — which override Australian law for international flights, subject to written approval from the operator's chief pilot',
    'C. The operator\\\'s cargo manifest procedures only, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'D. The customs regulations for each country of destination, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'Dangerous goods carriage in Australian aviation is governed by CASR Part 92 (incorporating ICAO Technical Instructions for Safe Transport of Dangerous Goods by Air). IATA DGR is a practical industry guide but the legal basis is CASR Part 92. The ATPL Air Law syllabus requires knowledge of the categories of dangerous goods and the pilot\\\'s responsibilities.',
  reference: 'CASR Part 92 / ICAO Annex 18'
},

{
  question: 'The pilot in command is advised by a passenger that they are carrying undeclared dangerous goods (lithium batteries in carry-on luggage). The PIC\\\'s responsibility is to:',
  options: [
    'A. Allow them onboard if the quantity is small, subject to the operator's approved exposition authorising such operations, except when the operation in',
    'B. Assess whether the goods may be legally carried, require them to be stowed appropriately or removed from the aircraft, and report the occurrence as required by regulations',
    'C. Call ATC and declare an emergency, provided a current instrument rating is held for the relevant aircraft category, only when operating in Class',
    'D. Ignore the report if the batteries are consumer electronics, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'The PIC is the final authority on what is carried on the aircraft. Passengers must declare dangerous goods. The PIC must assess whether the item may be carried legally (CASR Part 92 provisions for consumer electronics and lithium batteries apply). If not legal, the item must be removed. The occurrence should be reported to the operator\\\'s safety management system. Note: most consumer lithium battery quantities are permitted but must comply with restrictions.',
  reference: 'CASR Part 92 / CAO 29.7'
},

{
  question: 'Under CAO 82.0, the admission of persons to the crew compartment of an air transport aircraft is:',
  options: [
    'A. Unlimited — the captain may invite anyone to the flight deck, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'B. Limited to the operating flight crew only — no additional persons are permitted, subject to the pilot completing the required recurrent training within 12 months, except during the period of ',
    'C. Restricted to persons authorised by the operator — typically flight crew, authorised maintenance, and certain others (CASA inspectors, jump seat riders with approval) who must be approved in the operator\\\'s exposition',
    'D. Subject to passenger vote for privately-chartered flights, subject to the operator's approved exposition authorising such operations, except during the period of '
  ],
  correct: 2,
  explanation: 'Under CAO 82.0, admission to the crew compartment is restricted. Authorised persons include: operating crew, jump seat riders approved by the operator, authorised maintenance and training personnel, CASA inspectors, and certain other CASA-approved categories. The operator\\\'s exposition lists the approved categories. Unauthorised persons must not be admitted to the flight deck at any time during flight.',
  reference: 'CAO 82.0 / CASR Part 121'
},

{
  question: 'A first officer on an RPT operation who disagrees with the captain\\\'s decision to continue a flight into deteriorating weather should:',
  options: [
    'A. Accept the captain\\\'s decision without comment — the captain is the final authority, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr',
    'B. Refuse to continue the flight if they believe safety is compromised — the first officer has an independent authority to cease operations, subject to written approval from the operator's chief pilot, except during the period of ',
    'C. Voice their concern clearly and professionally to the captain using assertive CRM techniques — if the captain overrides the concern, the first officer should continue to monitor and advocate if the situation warrants, and report the event through the safety system',
    'D. Contact company operations directly to override the captain\\\'s decision, subject to the pilot completing the required recurrent training within 12 months, only when operating in Class'
  ],
  correct: 2,
  explanation: 'CRM requires all crew members to speak up about safety concerns. The first officer should use assertive communication (advocacy) to raise concerns. The captain remains PIC and has final decision authority, but the first officer has an obligation to make safety concerns known clearly. If the safety concern is serious, the first officer may consider available reporting and escalation mechanisms. This is fundamental to CRM and accident prevention.',
  reference: 'CASR Part 121 / ICAO Human Factors / CRM'
},

{
  question: 'Under Australian law, the PIC of a turbine aircraft must ensure the oxygen and protective breathing equipment requirements are met. For an aircraft operated at altitudes above 10,000 ft with passengers, supplemental oxygen must be provided to:',
  options: [
    'A. Flight crew only — passengers are not entitled to supplemental oxygen under any circumstances, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Everyone on board whenever the aircraft is above 10,000 ft indicated altitude, except when the operation involves more than 9 passenger seats',
    'C. Flight crew when cabin altitude exceeds 10,000 ft, and to passengers at the applicable threshold as specified in CAO 20.7 based on time at altitude and cabin pressure',
    'D. Passengers only if specifically requested and only for aircraft above 5,700 kg MTOW, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 2,
  explanation: 'Under CAO 20.7, supplemental oxygen requirements for pressurised aircraft depend on cabin altitude (not aircraft altitude). Flight crew must have oxygen available when cabin altitude exceeds 10,000 ft. Passengers require oxygen when cabin altitude exceeds certain thresholds for specified durations. For pressurised aircraft, loss of pressurisation procedures require immediate descent and oxygen provision.',
  reference: 'CAO 20.7 / CASR Part 91'
},

{
  question: 'The "carriage of cargo" on a passenger-carrying air transport aircraft requires that:',
  options: [
    'A. Cargo may be placed anywhere in the cabin if the passenger manifest allows it, subject to the operator's approved exposition authorising such operations, provided the aircraft holds ',
    'B. Cargo is properly loaded, documented, and restrained. Cargo in the passenger cabin must be on approved seats or in approved containers, must not obstruct emergency exits, and must comply with floor loading limits',
    'C. Cargo is only permitted in dedicated cargo holds — no cargo is permitted in the passenger cabin under any circumstances, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Cargo must weigh less than 10 kg per item regardless of total weight, subject to the pilot completing the required recurrent training within 12 months, provided a current instrumen'
  ],
  correct: 1,
  explanation: 'Under CAO 82.0 and CASR Part 121, cargo in the passenger cabin of an air transport aircraft must: be properly restrained; not obstruct emergency exits or aisles; be on approved seats (with seatbelts secured) or in approved containers; comply with floor loading limits; and be documented. The PIC is responsible for ensuring proper loading and restraint.',
  reference: 'CAO 82.0 / CASR Part 121'
},

{
  question: 'Under CAO 82.3, an AOC holder conducting RPT operations must have a CASA-approved:',
  options: [
    'A. Operations Manual (also called Operations Exposition), maintenance management system, and safety management system, all of which must be CASA-approved and current',
    'B. Operations Manual only — no other documents are required, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. Operations Manual and insurance certificate — the safety management system is optional for operators with fewer than 5 aircraft',
    'D. Crew training manual only — all other documentation is at the operator\\\'s discretion, subject to written approval from the operator's chief pilot'
  ],
  correct: 0,
  explanation: 'AOC holders operating RPT under CASR Part 119 and Part 121 must maintain and operate under a CASA-approved Operations Manual (exposition), which encompasses operational procedures, maintenance management, safety management system (SMS), and training programmes. The SMS is mandatory for all AOC holders. These documents must be current and complied with at all times.',
  reference: 'CAO 82.3 / CASR Part 119 / CASR Part 121'
},

{
  question: 'What action must a pilot take if requested by a law enforcement officer to submit to a search of the aircraft for prohibited substances?',
  options: [
    'A. Refuse unless accompanied by a CASA inspector, subject to the requirements of the applicable Civil Aviation Order, subject to the operator's ap',
    'B. Comply with the lawful request — law enforcement officers with appropriate authority have the right to search aircraft for prohibited substances, and the PIC must not obstruct or hinder the search',
    'C. Contact their union representative before allowing any search, subject to the operator's approved exposition authorising such operations, subject to the requirements ',
    'D. Only allow a search if the aircraft is on the ground and engines are shut down, only when operating in Class C or Class D controlled airspace, provided the aircraft holds '
  ],
  correct: 1,
  explanation: 'Under Australian law, properly authorised law enforcement officers (Australian Border Force, Australian Federal Police with appropriate warrants or authority) have the right to search aircraft. The PIC must comply with a lawful request and must not obstruct the search. Obstruction is an offence. The pilot should ensure the search is conducted safely from an aircraft operations perspective.',
  reference: 'Civil Aviation Act 1988 / Australian Border Force Act'
},

{
  question: 'The Australian ADIZ (Air Defence Identification Zone) requires aircraft to:',
  options: [
    'A. File a flight plan with CASA — no other requirements apply, subject to the operator's approved exposition authorising such operations, subject to written approval ',
    'B. Obtain a special clearance from the Department of Defence before entering the zone, except when the operation involves more than 9 passenger seats, subject to the operator's ap',
    'C. Comply with ADIZ procedures including filing a flight plan, maintaining radio watch, complying with transponder requirements, and making position reports as required — failure to comply can result in interception',
    'D. ADIZ requirements only apply to international flights entering Australian airspace, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'The ADIZ (AIP ENR 1.12) requires: flight plan filed prior to entry; position reports at specified points; transponder operation (Mode C); radio watch maintained. The ADIZ is managed by Air Force with civil ATC cooperation. Non-compliance may result in interception. The ADIZ is designed to distinguish cooperative civil aircraft from potentially hostile incursions.',
  reference: 'AIP ENR 1.12'
},

{
  question: 'Under Australian law, the responsibilities of a "Part 119" Air Operator Certificate holder include:',
  options: [
    'A. Only the aircraft\\\'s direct operational activities — ground handling and catering are excluded, only when operating in Class C or Class D controlled airspace, provided the aircraft holds ',
    'B. Only the flight operations — maintenance is the aircraft owner\\\'s responsibility, provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds ',
    'C. Ensuring compliance only during scheduled operations — ad hoc charter flights are exempt, only when operating in Class C or Class D controlled airspace, except when the operation in',
    'D. Ensuring the operations comply with the Civil Aviation Act, CASR, relevant CAOs, and their approved Operations Manual at all times — the AOC holder bears corporate responsibility for all aspects of their aviation operation'
  ],
  correct: 3,
  explanation: 'The AOC holder under CASR Part 119 bears responsibility for all aspects of their certified operations including: flight operations, maintenance control, crew training and competency, safety management, and compliance with all applicable regulations. The AOC cannot be transferred — it is held by the legal entity and that entity is accountable.',
  reference: 'CASR Part 119 / Civil Aviation Act 1988'
},

{
  question: 'Under the Civil Aviation Act, powers of the CASA delegate (e.g. an Aviation Safety Inspector) include:',
  options: [
    'A. The ability to suspend a licence immediately if a serious breach of safety is observed, provided CASA has been notified of the operation at least 24 hours in advance, provided the relevant aerodr',
    'B. Only the ability to issue infringement notices — all enforcement action requires a court order, except when the operation involves more than 9 passenger seats, provided CASA has been notif',
    'C. Access to aircraft, aerodrome facilities, and documents for inspection and audit purposes. They may also require persons to provide information and may exercise certain powers delegated by the Director of Aviation Safety',
    'D. The right to fly the aircraft to demonstrate proper techniques to the licence holder, only when operating in Class C or Class D controlled airspace, subject to written approval '
  ],
  correct: 2,
  explanation: 'CASA inspectors (delegates) have broad powers under the Civil Aviation Act including: access to aircraft, aerodromes, and facilities; examination of documents, records, and equipment; requiring persons to answer questions; conducting practical examinations of licence holders; and exercising delegated enforcement powers. The Director of Aviation Safety can delegate the power to suspend licences for safety purposes.',
  reference: 'Civil Aviation Act 1988 / CASR'
},

{
  question: 'An aircraft is operated under a "wet lease" arrangement where the aircraft, crew, maintenance, and insurance are provided by a different operator. The responsibilities for regulatory compliance during the wet lease operation rest with:',
  options: [
    'A. The arrangement determines responsibility — typically the operator who holds the AOC for the operation and provides crew is responsible for operational compliance, which may be the lessor or lessee depending on the lease terms and CASA approval',
    'B. The leasing operator (who provides the aircraft and crew) — they retain full responsibility, provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds ',
    'C. The aircraft owner regardless of the lease arrangement, except during the period of any declared low visibility procedures at the aerodrome, only if the operator holds a',
    'D. The crew members personally — individual responsibility overrides corporate arrangements, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval '
  ],
  correct: 0,
  explanation: 'Wet lease arrangements can be complex. Generally, the operator whose AOC covers the operation is responsible for regulatory compliance. For wet leases, this may be the lessor (aircraft/crew provider) or the lessee depending on CASA-approved arrangements. CASR requires the AOC holder to maintain operational control. CASA approval of wet lease arrangements is required to ensure clear accountability.',
  reference: 'CASR Part 119 / CASR Part 121 / Civil Aviation Act'
},

{
  question: 'An AOC holder conducting RPT operations must report any "serious incident" to:',
  options: [
    'A. CASA only — the ATSB only investigates accidents, not incidents, provided a current instrument rating is held for the relevant aircraft category',
    'B. Only to their insurance company — regulatory notification is voluntary, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Only the operator\\\'s chief pilot — external notification is not required for incidents, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Both the ATSB (as soon as practicable) and CASA as required under their approved Safety Management System — the ATSB has jurisdiction over serious incidents as defined in the TSI Act'
  ],
  correct: 3,
  explanation: 'Serious incidents (as defined in the TSI Act) must be reported to the ATSB as soon as practicable. The operator\\\'s SMS will also specify internal reporting requirements and timeframes. CASA may also require notification under CASR. "Serious incident" has a specific definition including events such as near-collisions, terrain proximity warnings with response, fuel emergencies, and significant technical failures.',
  reference: 'Transport Safety Investigation Act 2003 / CASR Part 119'
},

{
  question: 'Under Australian regulations, passengers must be briefed on emergency procedures:',
  options: [
    'A. Only on initial boarding — repeat briefings are not required on subsequent sectors, only when operating in Class C or Class D controlled airspace',
    'B. Only when the aircraft will be operating over water, subject to the pilot completing the required recurrent training within 12 months',
    'C. Only if requested by passengers — the briefing is at the crew\\\'s discretion, only when operating in Class C or Class D controlled airspace',
    'D. Before each flight — the safety demonstration (or video) must be conducted before departure covering seatbelts, emergency exits, oxygen masks, and flotation devices as applicable'
  ],
  correct: 3,
  explanation: 'Under CAO 20.7 and CASR Part 121, passengers must receive a safety briefing before each flight covering: seatbelts; emergency exits; flotation devices (if over water); oxygen masks (if pressurised); and emergency equipment. The briefing is mandatory before departure on every sector. ATPL pilots must ensure cabin crew comply with this requirement.',
  reference: 'CAO 20.7 / CASR Part 121'
},

{
  question: 'The Australian mandatory reporting scheme for aviation occurrences (MOR) requires:',
  options: [
    'A. Reporting of accidents and certain prescribed serious incidents and technical defects to CASA and/or ATSB depending on the nature of the occurrence — the reporting obligation is on the operator, pilot, AME, and others',
    'B. Only fatal accidents to be reported, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'C. Voluntary reporting only — the MOR is not mandatory for certificated personnel, provided CASA has been notified of the operation at least 24 hours in advance, provided a current instrumen',
    'D. Reporting only by AOC holders — private pilots are exempt, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'The Mandatory Occurrence Reporting (MOR) system under CASR Part 11 requires reporting of accidents, serious incidents, and certain prescribed occurrences to ATSB/CASA. The reporting obligation extends to pilots, engineers, air traffic controllers, and operators. Mandatory reporting ensures that serious safety events are investigated and lessons are applied industry-wide.',
  reference: 'CASR Part 11 / Transport Safety Investigation Act'
},

{
  question: 'Under Australian regulations, the "aeronautical experience" requirements for the ATPL must be obtained:',
  options: [
    'A. On any aircraft type regardless of category, subject to the operator's approved exposition authorising such operations, provided the aircraft holds ',
    'B. Exclusively on aircraft above 5,700 kg MTOW to count toward the ATPL, subject to written approval from the operator's chief pilot, subject to the pilot complet',
    'C. On commercially operated aircraft only — private flying does not count, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. On aircraft in the appropriate category — aeroplane time must be on aeroplanes; helicopter time on helicopters. Cross-category time cannot be substituted except where specifically permitted'
  ],
  correct: 3,
  explanation: 'Aeronautical experience for the ATPL(A) must be accumulated on aeroplanes in the aeroplane category. Hours on helicopters, gyroplanes, or other aircraft categories do not count toward the ATPL(A) specific requirements (though total flight time may include all categories for some purposes). The CASR Part 61 requirements specify the category-specific minimums.',
  reference: 'CASR Part 61'
},

{
  question: 'Under the AIP, SARTIME (Search and Rescue Time) procedures require the PIC to:',
  options: [
    'A. Cancel the SARTIME on landing only if carrying passengers, subject to written approval from the operator's chief pilot, provided CASA has been notif',
    'B. File a new SARTIME if the flight is delayed by more than 30 minutes, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in',
    'C. Cancel the SARTIME by the nominated time — failure to cancel triggers SAR action commencement. The cancellation must be made to the nominated SARTIME service (typically JRCC or FIC via ATS) by the nominated time',
    'D. Only activate SARTIME for flights in remote areas — populated area flights are exempt, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 2,
  explanation: 'SARTIME procedures require the PIC to: file a SARTIME before departure specifying the time at which SAR action should commence if not cancelled; cancel the SARTIME on arrival by contacting the nominated service. Failure to cancel triggers SAR action which is costly and occupies resources. Early cancellation (before landing) if possible prevents unnecessary activation.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'Under CASR Part 91, the pilot in command must not begin a flight when:',
  options: [
    'A. The weather at destination is below VFR minima — IFR is always an option, subject to the pilot completing the required recurrent training within 12 months',
    'B. The PIC has less than 5 years flying experience — minimum experience is an absolute rule, subject to the pilot completing the required recurrent training within 12 months',
    'C. ATIS has not been obtained for all aerodromes on the route, except when the operation involves more than 9 passenger seats, subject to the operator's ap',
    'D. The airworthiness of the aircraft is in doubt, required documents are not on board or accessible, the crew is not properly qualified, fuel is insufficient, or any regulatory requirement is not met'
  ],
  correct: 3,
  explanation: 'Under CASR Part 91, a flight must not commence if: the aircraft is not airworthy; required documents are not available; crew licensing requirements are not met; fuel is insufficient for the proposed flight; or other regulatory requirements are not met. This is a basic pre-flight responsibility of the PIC. Meeting these requirements before departure is not optional.',
  reference: 'CASR Part 91'
},

{
  question: 'Under Australian regulations, the maximum passenger seating configuration that triggers "large aircraft" RPT requirements under CASR Part 121 is:',
  options: [
    'A. More than 9 passenger seats, subject to the requirements of the applicable Civil Aviation Order',
    'B. More than 19 passenger seats or MTOW exceeding 8,618 kg — aircraft above this threshold require compliance with Part 121 large aircraft rules',
    'C. More than 30 passenger seats, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. More than 50 seats or 15,000 kg MTOW, provided the aircraft does not exceed 5,700 kg maximum certificated weight'
  ],
  correct: 1,
  explanation: 'CASR Part 121 (large aircraft RPT) applies to aeroplanes with more than 19 passenger seats or MTOW exceeding 8,618 kg used for regular public transport. Aircraft at or below these thresholds may be operated under Part 135 (medium aircraft RPT) or Part 133 (small aircraft RPT) with different compliance requirements. Understanding the applicable regulatory framework is essential for ATPL operations.',
  reference: 'CASR Part 121 / CASR Part 135'
},

{
  question: 'The "door mode" callout procedure (e.g. "doors to automatic") before departure serves what purpose?',
  options: [
    'A. To ensure emergency slide deployment modes are correctly set — "automatic" mode means slides will deploy on door opening during evacuation. This critical safety item is verified verbally between cabin crew and confirmed to the flight deck',
    'B. To comply with the noise abatement procedure at the departure aerodrome, except when the operation involves more than 9 passenger seats, only when operating in Class',
    'C. It is a radio call to advise ground crew to remove the door safety pins, only if the operator holds a specific approval under their Air Operator Certificate, only when operating in Class',
    'D. It confirms to ATC that passenger boarding is complete and the aircraft is ready for pushback, except when the operation involves more than 9 passenger seats, provided a current instrumen'
  ],
  correct: 0,
  explanation: 'Evacuation slide arming (doors to automatic) is a critical safety action before departure. In armed mode, opening the door automatically deploys the slide. In manual/disarmed mode, the slide does not auto-deploy (required when ground crew are working near doors). The verbal confirmation between cabin crew and the flight deck is a standard multi-person verification of a critical safety item.',
  reference: 'CASR Part 121 / Operator SOPs'
},

{
  question: 'An aircraft operating in icing conditions is required to have anti-icing or de-icing equipment that is:',
  options: [
    'A. Functional at any time — the equipment can be switched on after ice begins to accumulate, subject to the pilot completing the required recurrent training within 12 months',
    'B. Activated BEFORE entering known or forecast icing conditions for anti-icing systems — waiting until ice has accumulated may impair system effectiveness and aircraft performance',
    'C. Only used when the RAT (Ram Air Turbine) is deployed, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. Operated continuously throughout all phases of flight regardless of temperature, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'Anti-icing systems (such as engine inlet anti-ice, airframe pneumatic boots, or thermal systems) should be activated before entering icing conditions — they prevent ice formation. Activating them after ice has already accumulated is less effective. De-icing systems (which remove accumulated ice) are less critical to activate before entering icing. Both engine and airframe anti-icing should be used per the aircraft AFM icing procedures.',
  reference: 'AFM icing procedures / CAO 82.0'
},

{
  question: 'Under Australian regulations, the carriage of survival equipment on remote area flights is governed by:',
  options: [
    'A. CAO 20.11 and CASR Part 91 which specify survival equipment requirements based on the nature of the terrain over which the flight is conducted and the distance from populated areas',
    'B. The PIC\\\'s discretion only, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'C. Only for international flights — domestic remote area flights have no mandatory survival equipment requirements, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Only AOC operators — private flights in remote areas have no regulatory requirement for survival equipment, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: 'Survival equipment requirements are specified in CAO 20.11 and CASR Part 91. For flights over hostile terrain (desert, uninhabited mountains, water) or remote areas, specific survival equipment may be mandated. Requirements vary by operation type, terrain, and distance from populated areas. ATPL holders conducting operations over remote areas must be familiar with applicable requirements.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'When taxiing on an aerodrome, the captain of an airliner is required to:',
  options: [
    'A. Only comply with the taxi clearance — responsibility for collision avoidance is ATC\\\'s on the ground, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Comply with the ATC taxi clearance, maintain vigilance against runway incursion, stop and query ATC if there is any doubt about the cleared taxi route, and follow all applicable aerodrome ground movement rules',
    'C. Follow the instructions of the marshaller at all times regardless of ATC clearance, subject to the pilot completing the required recurrent training within 12 months',
    'D. Use the aircraft\\\'s ground proximity system as the primary collision avoidance tool, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'During taxiing: comply with ATC taxi clearance; maintain vigilance for other traffic, vehicles, and obstacles; if in doubt STOP and query ATC. Runway incursion is the leading cause of ground collisions. The pilot must not enter any runway without an explicit crossing or takeoff clearance. "When in doubt, don\\\'t" — stopping and requesting clarification prevents runway incursions.',
  reference: 'AIP ENR 1.5 / ICAO Annex 2'
},

{
  question: 'The "Runway Incursion" is defined as:',
  options: [
    'A. Any occurrence where an aircraft deviates from the assigned runway heading during take-off, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Only an occurrence involving two aircraft on the same runway simultaneously, except during the period of any declared low visibility procedures at the aerodrome',
    'C. An occurrence where the landing aircraft uses more runway than planned, subject to the operator's approved exposition authorising such operations',
    'D. Any occurrence at an aerodrome involving the incorrect presence of an aircraft, vehicle, or person on the protected area of a surface designated for the landing and take-off of aircraft'
  ],
  correct: 3,
  explanation: 'ICAO definition of runway incursion: any occurrence at an aerodrome involving the incorrect presence of an aircraft, vehicle, or person on the protected area of a surface designated for the landing and take-off of aircraft. Runway incursions are categorised A–D by severity. Category A is the most serious (separation decreases and collision avoidance manoeuvres are necessary). Prevention requires strict adherence to clearances and vigilance.',
  reference: 'ICAO Annex 14 / AIP ENR 1.5'
},

{
  question: 'Under Australian regulations, the requirement to carry an ELT on board an aircraft is specified in:',
  options: [
    'A. The aircraft\\\'s AFM — ELT requirements vary by aircraft design, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. CAO 20.11 which specifies ELT type (406 MHz), fitment requirements, and operation — 406 MHz ELTs are required that transmit position to satellites',
    'C. Only the AIP — ELTs have no regulatory basis in Australian law, except when the operation involves more than 9 passenger seats',
    'D. CASR Part 65 (ATC) — the requirement is specified by ATC services, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'CAO 20.11 specifies ELT requirements for Australian aircraft including the requirement for 406 MHz ELTs (which replaced the older 121.5 MHz-only devices). The 406 MHz ELT transmits a unique coded signal to satellites allowing rapid and accurate position determination. The carriage, maintenance, and proper operation of ELTs is mandated for prescribed operations and aircraft categories.',
  reference: 'CAO 20.11'
},

{
  question: 'An ATPL holder planning a flight over water must be satisfied that the aircraft is equipped with:',
  options: [
    'A. Floatation devices for each person on board, and life rafts of sufficient capacity for all persons if the flight will be beyond gliding distance from land — specific requirements depend on the aircraft, operation type, and distance from land',
    'B. Only a life raft — no other additional equipment is required, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. Only a single life raft regardless of the number of persons on board, except during the period of any declared low visibility procedures at the aerodrome, only if the operator holds a',
    'D. Full survival equipment for all persons for all overwater operations regardless of distance, only if the operator holds a specific approval under their Air Operator Certificate, provided the aircraft holds '
  ],
  correct: 0,
  explanation: 'Overwater equipment requirements under CAO 20.11 and CASR Part 91: personal flotation devices (life jackets) for each person; life rafts of sufficient capacity when beyond the applicable distance from shore; ELT; emergency equipment as required by the operation. The specific thresholds depend on distance from land, aircraft gliding performance, and operation type.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the holder of an ATPL can exercise the privileges of the licence as PIC on a regular public transport flight carrying up to what maximum take-off weight if they hold only an aeroplane multi-engine piston rating?',
  options: [
    'A. Any aeroplane in the multi-engine piston class regardless of weight — weight limits apply to the operation type not the licence',
    'B. 5,700 kg MTOW, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Up to 8,618 kg MTOW on multi-engine piston aeroplanes, but only for aircraft not exceeding 15,000 kg MTOW',
    'D. The ATPL does not restrict by weight — it restricts by engine type and operation category'
  ],
  correct: 0,
  explanation: 'The ATPL(A) with a multi-engine piston class rating authorises the holder to act as PIC on any multi-engine piston aeroplane regardless of weight, provided they meet recency and any applicable type rating requirements. The licence category (piston) and class (multi-engine) determine the aircraft type, not weight. Higher weight aircraft requiring specific type ratings will need those ratings in addition to the class rating.',
  reference: 'CASR Part 61'
},

{
  question: 'The "duty of care" of an airline with respect to passenger safety under Australian law includes:',
  options: [
    'A. Obligations under both the Civil Aviation Act/CASR and the common law of negligence — the operator must take reasonable steps to prevent foreseeable harm to passengers throughout the entire journey',
    'B. Only duties specified in the CASR — no common law duty exists, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap',
    'C. Only duties related to in-flight safety — pre-boarding and post-flight are excluded, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Only contractual obligations under the passenger ticket terms and conditions, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 0,
  explanation: 'Airlines in Australia have dual obligations: statutory (Civil Aviation Act, CASR, Consumer Law) and common law (duty of care in negligence). The duty covers the entire journey from check-in to disembarkation. Operators must take reasonable precautions against foreseeable risks. Breaches can result in both regulatory enforcement and civil liability. ATPL holders as PIC share this duty of care for in-flight safety.',
  reference: 'Civil Aviation Act 1988 / Australian Consumer Law / Common law'
},

{
  question: 'The ERSA (En Route Supplement Australia) is published and maintained by:',
  options: [
    'A. CASA as part of the Civil Aviation Regulations, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. The Bureau of Meteorology as part of aeronautical meteorological information, except when the operation involves more than 9 passenger seats',
    'C. Airservices Australia and contains information on aerodromes, procedures, communication frequencies, and services — it is updated on the 28-day AIRAC cycle',
    'D. The Department of Infrastructure — it is a government gazetting document, except when the operation involves more than 9 passenger seats'
  ],
  correct: 2,
  explanation: 'The ERSA is published by Airservices Australia as part of the AIP suite. It contains: aerodrome information (hours, frequencies, facilities); PPR requirements; RFFS categories; lighting; fuel availability; instrument procedures; and operational details. It is updated on the 28-day AIRAC (Aeronautical Information Regulation and Control) cycle.',
  reference: 'AIP / ERSA / Airservices Australia'
},

{
  question: 'A NOTAM that affects an instrument approach procedure at your destination is issued. As the PIC you must:',
  options: [
    'A. Check the NOTAM only if conditions are below published minima, subject to the requirements of the applicable Civil Aviation Order, except when the operation in',
    'B. Check all relevant NOTAMs during pre-flight planning and action any that affect the planned flight — NOTAM information may raise minimums, restrict procedures, or advise of navaid outages affecting your approach options',
    'C. Only check NOTAMs for your departure aerodrome, subject to the operator's approved exposition authorising such operations, provided CASA has been notif',
    'D. Rely on ATIS to advise of relevant NOTAMs — a separate NOTAM check is not required, subject to the requirements of the applicable Civil Aviation Order, subject to the pilot complet'
  ],
  correct: 1,
  explanation: 'Pre-flight NOTAM checks are mandatory. NOTAMs may affect: navaid serviceability (ILS, NDB, VOR outages); approach lighting systems; instrument approach procedure changes; runway closures; aerodrome works (cranes, construction near approaches); and airspace restrictions. Any NOTAM affecting the instrument approach must be cross-checked against the planned approach minima.',
  reference: 'AIP GEN 3.1 / CASR Part 91'
},

{
  question: 'The AIP (Aeronautical Information Publication) is the primary source for:',
  options: [
    'A. Long-term, stable aeronautical information about Australian airspace, procedures, aerodromes, and services — it contains regulations, en-route charts, approach procedures, and permanent aerodrome information',
    'B. Daily weather briefings for IFR pilots, except during the period of any declared low visibility procedures at the aerodrome, except when the operation in',
    'C. Temporary flight restrictions and airspace changes, provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds ',
    'D. Aircraft type certificate information, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in'
  ],
  correct: 0,
  explanation: 'The AIP contains permanent aeronautical information: airspace structure, navigation procedures, instrument approach procedures, aerodrome details, regulations, and services. It is amended on the AIRAC cycle. Temporary changes are covered by NOTAMs. The AIP is the primary reference for Australian aeronautical operations and is produced by Airservices Australia.',
  reference: 'AIP GEN 0.1 / ICAO Annex 15'
},

{
  question: 'An Aeronautical Information Circular (AIC) is used to:',
  options: [
    'A. Provide temporary changes to the AIP with immediate effect, except when the operation involves more than 9 passenger seats',
    'B. Promulgate information of a non-urgent, non-operational nature relating to aviation safety, air navigation, and administrative matters — it does not amend the AIP',
    'C. Cancel superseded NOTAMs in a formal administrative process, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Provide charts for airways and approach procedures, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 1,
  explanation: 'AICs contain information of longer-term interest that does not meet the criteria for NOTAMs or AIP amendments. They cover: safety advice; changes to services; administrative information; and material of general interest to aviators. AICs do not have immediate operational effect and do not amend the AIP — they are informational documents.',
  reference: 'AIP GEN 3.1 / ICAO Annex 15'
},

{
  question: 'The AIRAC (Aeronautical Information Regulation and Control) cycle is:',
  options: [
    'A. A 7-day weekly publication cycle for aeronautical information, provided the pilot has logged at least 3 hours on type in the preceding 90 days, subject to the operator's ap',
    'B. A 6-month cycle for major AIP amendments only, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'C. A 28-day cycle of internationally standardised dates on which aeronautical information changes take effect — allowing pilots, operators, and navigation database providers to update on a known schedule',
    'D. A cycle used only for international operations — domestic Australian operations use a different schedule, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 2,
  explanation: 'The AIRAC cycle is a 28-day internationally standardised cycle for aeronautical information changes. All contracting ICAO states use the same 28-day cycle dates, ensuring coordinated updates globally. Navigation databases (for GNSS and FMS), approach charts, and AIP amendments are all timed to AIRAC dates. This prevents confusion from staggered changes.',
  reference: 'AIP GEN 3.1 / ICAO Annex 15'
},

{
  question: 'The instrument approach minimums published on an approach chart are based on:',
  options: [
    'A. What the airport operator considers achievable based on local knowledge, except during the period of any declared low visibility procedures at the aerodrome',
    'B. The lowest observed visibility conditions at the aerodrome in the last 12 months, subject to written approval from the operator's chief pilot, subject to the operator's ap',
    'C. CASA/ICAO criteria for obstacle clearance during the approach and missed approach, taking into account the precision of the navigation aid, the gradient of the final approach, and the circling area',
    'D. The landing performance of a typical commercial aircraft at the aerodrome, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'Instrument approach minimums (DH/DA for precision, MDH/MDA for non-precision) are derived from obstacle clearance calculations specified in ICAO Doc 8168 criteria. They account for: the precision of the navigation system; obstacle clearance in the final approach, missed approach, and circling areas; aircraft category speeds (for circling); and visibility/RVR limits. They represent the safe minimum for the procedure.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'Under Australian instrument approach procedures, the "Decision Altitude" (DA) on a precision approach is:',
  options: [
    'A. The altitude at which the pilot must decide to continue the approach or execute a missed approach — at DA the aircraft must have the required visual reference to continue; if not, a missed approach must be initiated immediately',
    'B. The altitude at which the aircraft must already be on the visual glide path, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements ',
    'C. The minimum altitude to which the approach must be flown before a landing is attempted, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in',
    'D. The altitude published for the outer marker crossing, only if the operator holds a specific approval under their Air Operator Certificate, subject to the operator's ap'
  ],
  correct: 0,
  explanation: 'Decision Altitude (DA) on a precision approach (ILS/PAR/GNSS LPV): the altitude at which a decision must be made to continue or go around. If the required visual references are established at DA, the approach may continue. If not, a missed approach must be executed immediately at DA — not 50 ft below. For non-precision approaches, the equivalent concept is Minimum Descent Altitude (MDA).',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "LNAV/VNAV" line on an RNAV approach chart provides:',
  options: [
    'A. Only lateral navigation (LNAV) guidance — VNAV indicates the chart type not vertical guidance, subject to the pilot completing the required recurrent training within 12 months',
    'B. GPS lateral guidance combined with ILS vertical guidance, subject to the pilot completing the required recurrent training within 12 months, provided the relevant aerodr',
    'C. Lateral navigation from GNSS and vertical navigation from barometric altitude (Baro-VNAV) — the approach is an APV (Approach with Vertical guidance) with a DA similar to a non-precision approach but with a glidepath',
    'D. The same guidance as a CAT II ILS but using satellite navigation, subject to the requirements of the applicable Civil Aviation Order, provided the relevant aerodr'
  ],
  correct: 2,
  explanation: 'LNAV/VNAV is an APV (Approach with Vertical Guidance) using GNSS lateral guidance and barometric vertical navigation (Baro-VNAV). It provides a glidepath to a DA rather than an MDA, giving more precise vertical guidance than LNAV-only. The minima are better than LNAV but generally higher than ILS or GNSS LPV. The aircraft must have an approved Baro-VNAV system and the procedure must be in the GNSS database.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9849'
},

{
  question: 'The circling area for a Category C aircraft (approach speed 121–140 kt) has a radius of:',
  options: [
    'A. 4.20 nm from each runway end — all obstacles within this radius must be cleared by the circling minimum altitude',
    'B. 1.68 nm from the runway threshold, subject to the operator's approved exposition authorising such operations',
    'C. 2.66 nm from the aerodrome reference point, except during the period of any declared low visibility procedures at the aerodrome',
    'D. 5.28 nm for all aircraft categories, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'ICAO circling protection areas: Cat A (<91 kt) 1.68 nm; Cat B (91–120 kt) 2.66 nm; Cat C (121–140 kt) 4.20 nm; Cat D (141–165 kt) 5.28 nm. The radius is measured from the runway ends (not the ARP). The circling MDA ensures at least 300 ft clearance over all obstacles within the circling area for the aircraft\\\'s category.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The published approach chart note "PROCEDURE NOT AUTHORISED AT NIGHT" means:',
  options: [
    'A. Instrument approaches are only authorised during the day, subject to the pilot completing the required recurrent training within 12 months, subject to written approval ',
    'B. The aerodrome is closed at night — no operations are permitted, provided a current instrument rating is held for the relevant aircraft category, provided the relevant aerodr',
    'C. Night operations require special CASA approval for each individual flight, subject to the operator's approved exposition authorising such operations, except during the period of ',
    'D. The specific procedure is not authorised for night operations due to inadequate lighting, visual aids, or terrain clearance requirements that cannot be assured at night — a different procedure must be used'
  ],
  correct: 3,
  explanation: '"Procedure not authorised at night" is a restriction on the specific approach procedure. It may be due to: circling areas that cannot be safely conducted at night; lack of required lighting for the visual segment; or terrain considerations. The restriction means that specific procedure cannot be used at night. Other procedures at the aerodrome (if available) may not carry this restriction.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Australian IFR alternate minima require that for a precision approach alternate aerodrome, forecast conditions must be at or above:',
  options: [
    'A. The published precision approach minimums plus a specified increment (typically ceiling 300 ft and visibility 1,200 m above the published minimums) depending on the approach category available at the alternate',
    'B. The published ILS CAT I minimums with no additional buffer, subject to the pilot completing the required recurrent training within 12 months, provided CASA has been notif',
    'C. VFR conditions (5,000 m visibility and 1,500 ft ceiling) regardless of approach available, subject to the requirements of the applicable Civil Aviation Order, subject to written approval ',
    'D. Alternate minimums are not published in Australian procedures — pilots use their judgment, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 0,
  explanation: 'IFR alternate minimums ensure the alternate is usable when needed. Australian AIP specifies alternate minima based on the approach available at the alternate. For precision approaches, alternate minima are higher than the approach minimums. For example, ILS alternate minimum is typically 200 ft ceiling and 800 m RVR above the published ILS minimum. The increment ensures the alternate is reliably accessible.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'When executing a missed approach from a non-precision approach (MDA), the missed approach point (MAP) is:',
  options: [
    'A. When the runway is not in sight at the MDA, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'B. When the aircraft descends below the MDA, subject to the requirements of the applicable Civil Aviation Order, except during the period of ',
    'C. Any point along the final approach where the pilot decides to go around, subject to the requirements of the applicable Civil Aviation Order, except when the operation in',
    'D. A geographically defined point (typically a navaid, DME fix, or time from FAF) where the missed approach must be initiated if the runway environment is not in sight — the MAP is not MDA-triggered but position-triggered'
  ],
  correct: 3,
  explanation: 'The Missed Approach Point (MAP) on a non-precision approach is a specific geographic position — the latest point at which a missed approach must be initiated. This is typically defined by a navaid overhead, DME distance, or time from the FAF. The pilot must initiate the missed approach at the MAP even if the aircraft is at the MDA — not when visual reference is lost. If visual reference is not established at the MAP, go around immediately.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under the AIP, the minimum visibility for an instrument approach to land (not including circling) must be:',
  options: [
    'A. Always at least 800 m regardless of the approach type, provided CASA has been notified of the operation at least 24 hours in advance, only if the operator holds a',
    'B. Greater than 1,500 m for all non-precision approaches, only when operating in Class C or Class D controlled airspace, subject to the requirements ',
    'C. The same as the reported RVR for the specific runway, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. At least the visibility specified in the published minimums for the specific approach procedure and aircraft category — this varies by approach type (ILS, RNAV, VOR, NDB) and category'
  ],
  correct: 3,
  explanation: 'Visibility minimums are specified in the published approach procedure for each approach type, category, and aerodrome. ILS CAT I typically requires 550 m RVR; many VOR/GNSS approaches require 1,600–3,200 m. The pilot must use the published minimum for the specific approach being flown, ensuring actual reported conditions meet or exceed the minimum before commencing or continuing the approach.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'An aerodrome classified as requiring "Rescue and Fire Fighting Services (RFFS) Category 6" means:',
  options: [
    'A. A small strip with basic equipment only, only if the operator holds a specific approval under their Air Operator Certificate, provided CASA has been notif',
    'B. The aerodrome provides 24-hour RFFS services regardless of aircraft operations, except when the operation involves more than 9 passenger seats, except during the period of ',
    'C. Category 6 is the minimum for IFR operations at any controlled aerodrome, subject to the pilot completing the required recurrent training within 12 months, subject to the requirements ',
    'D. The aerodrome has RFFS resources calibrated to handle the largest aircraft type normally using the aerodrome, in this case corresponding to the aircraft dimensions and MTOW specified for Category 6 — RFFS category is based on the largest aircraft using the aerodrome'
  ],
  correct: 3,
  explanation: 'RFFS categories (ICAO/CASA 1–10) are based on the longest and widest aircraft using the aerodrome. The RFFS category determines the quantity of extinguishing agents, response time, and staffing required. Higher categories (7–10) correspond to wide-body jets. The RFFS category is published in the ERSA for each aerodrome. Operations with aircraft requiring a higher RFFS category than available require risk management.',
  reference: 'CASR Part 139 / ERSA'
},

{
  question: 'The "precision approach category" for an aircraft with a Vref of 130 kt is:',
  options: [
    'A. Category A',
    'B. Category B',
    'C. Category D',
    'D. Category C'
  ],
  correct: 3,
  explanation: 'Aircraft approach categories are based on Vat (1.3 × Vso) or Vref: Cat A < 91 kt; Cat B 91–120 kt; Cat C 121–140 kt; Cat D 141–165 kt. Vref of 130 kt falls in Category C (121–140 kt). The category determines: circling radius; circling minima; approach speed limits; and which published minimums apply. The Fokker F27 with Vref ≈130 kt is Category C.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The horizontal extent of a Control Zone (CTR) around a controlled aerodrome is based on:',
  options: [
    'A. Always 5 nm radius from the aerodrome reference point, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. The airspace dimensions required to contain the instrument approach and departure procedures at the aerodrome — CTR dimensions are published in the AIP ENR and vary by aerodrome',
    'C. A fixed 10 nm radius from the aerodrome — this is standardised across Australia, subject to the operator's approved exposition authorising such operations',
    'D. The radar coverage range of the aerodrome\\\'s approach radar system, except when the operation involves more than 9 passenger seats'
  ],
  correct: 1,
  explanation: 'A CTR (Control Zone) extends from the surface upward and is dimensioned to contain the terminal instrument procedures at the aerodrome. Its lateral extent is tailored to the specific procedures — it is not a fixed radius. CTR dimensions (typically 5–15 nm) are published in the AIP ENR charts. All aircraft (IFR and VFR) require ATC clearance to enter a CTR.',
  reference: 'AIP ENR 1.4 / ICAO Annex 11'
},

{
  question: 'The minimum altitude for an aircraft operating in an airways "Control Area" (CTA) in Australia is:',
  options: [
    'A. 1,000 ft AMSL throughout Australia, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. The base of the applicable controlled airspace (CTA lower limit) as published on the En-Route Chart — this varies by sector and location',
    'C. FL100 for all aircraft in a CTA, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The LSALT for the route segment — no minimum CTA altitude is published, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 1,
  explanation: 'The lower limit of Control Areas is published on En-Route Charts and varies geographically. In remote areas the CTA lower limit may be high (e.g. 5,500 ft or higher) while near terminal areas it may be lower. IFR aircraft operating in a CTA must be within the charted airspace vertical limits and must have an ATC clearance. Operations below the CTA lower limit (in Class G) do not require an ATC clearance.',
  reference: 'AIP ENR 1.4 / En-Route Charts'
},

{
  question: 'A "Mandatory Broadcast Zone" (MBZ) at a non-controlled aerodrome requires pilots to:',
  options: [
    'A. Obtain an ATC clearance before entry at all times, except when the operation involves more than 9 passenger seats, subject to the operator's ap',
    'B. Make specified position broadcasts on the published MBZ frequency at defined reporting points — it is an uncontrolled procedure requiring self-announcement, not ATC clearance',
    'C. Only broadcast when the aerodrome lighting is on, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. File a flight plan before entry into the MBZ, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen'
  ],
  correct: 1,
  explanation: 'An MBZ is established at non-controlled aerodromes with significant traffic. Pilots must broadcast position reports at defined points (e.g. 10 nm out, joining, final, clear of runway). Broadcasts are self-announcements — there is no ATC to grant clearance. All users listen and build situational awareness. The MBZ provides a known communications environment without formal control.',
  reference: 'AIP ENR 1.4 / ERSA'
},

{
  question: 'Under Australian facilitation (AIP GEN 1) requirements, an aircraft on an international flight must carry:',
  options: [
    'A. Only the certificate of registration, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds ',
    'B. General Declaration, pilot licences, radio licence, certificate of airworthiness, and crew and passenger travel documents — the documents required for international operations are more extensive than domestic',
    'C. Only a valid passport for each crew member, subject to the operator's approved exposition authorising such operations, provided the aircraft holds ',
    'D. A customs approval letter from each destination country, only when operating in Class C or Class D controlled airspace, provided CASA has been notif'
  ],
  correct: 1,
  explanation: 'International flights require: General Declaration (crew and passenger list); aircraft documents (CofA, certificate of registration, radio licence); crew licences; crew and passenger travel documents (passports, visas); cargo/dangerous goods documentation if applicable; and any required permits. The General Declaration is submitted to customs/immigration at each international port.',
  reference: 'AIP GEN 1.2 / ICAO Annex 9'
},

{
  question: 'The "Aerodrome Reference Point" (ARP) is:',
  options: [
    'A. The point from which all instrument approach procedures are referenced, provided a current instrument rating is held for the relevant aircraft category',
    'B. The designated geographical centre of an aerodrome — it is the reference point from which aerodrome location data and CTR dimensions are measured',
    'C. The highest point on the aerodrome, except during the period of any declared low visibility procedures at the aerodrome',
    'D. The intersection of the two longest runways at an aerodrome, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'The Aerodrome Reference Point (ARP) is the designated geographical centre of an aerodrome. It is used as the datum for: aerodrome position coordinates; CTR dimensions; obstacle assessment surfaces; and approach procedures. The ARP is published in the ERSA and on aerodrome charts.',
  reference: 'ICAO Annex 14 / AIP ERSA'
},

{
  question: 'Runway lighting: a pilot notices the approach lighting system (ALS) is unserviceable at the destination. The effect on instrument approach minima is:',
  options: [
    'A. No effect — approach lighting is supplementary only, subject to the operator's approved exposition authorising such operations, provided the relevant aerodr',
    'B. The published minimums (RVR/visibility) for the approach that include ALS credit cannot be used — higher minimums (for ALS unserviceable) must be applied as published on the approach chart',
    'C. The approach is not permitted until ALS is restored, subject to the pilot completing the required recurrent training within 12 months, except during the period of ',
    'D. The pilot may use the minimums at their discretion regardless of ALS status, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Instrument approach minimums are often lower when ALS is serviceable (the ALS extends the visual segment and allows the pilot to determine aircraft position relative to the runway earlier). When ALS is unserviceable, higher minimums apply (published as "ALS inoperative" values on the chart). A NOTAM advising ALS unserviceable must trigger use of the alternative higher minimums.',
  reference: 'AIP ENR 1.5 / Approach charts'
},

{
  question: 'The ILS glide slope is normally set to an angle of:',
  options: [
    'A. 2.0° above horizontal, subject to the operator's approved exposition authorising such operations',
    'B. 3.0° (with variation typically from 2.5° to 3.5°) — the standard glide slope angle providing a safe descent path to the runway',
    'C. 4.0° for all ILS installations in Australia, provided a current instrument rating is held for the relevant aircraft category',
    'D. 6.0° for noise-abatement purposes at Australian airports, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'Standard ILS glide slope angle is 3.0° (range 2.5°–3.5°). The glide slope provides vertical guidance from the outer marker to the touchdown zone. Steeper angles (3.5°+) are used at some aerodromes with terrain or obstacle constraints (e.g. Sydney YSSY RWY 25 uses a slightly steeper approach due to offset terrain). The published chart specifies the actual glide slope angle for each ILS.',
  reference: 'ICAO Annex 10 / AIP ENR 1.5'
},

{
  question: 'Under Australian regulations, an aircraft is required to be registered with CASA. The purpose of aircraft registration is to:',
  options: [
    'A. Ensure the aircraft meets noise standards, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only when operating in Class',
    'B. Provide evidence of airworthiness only, provided CASA has been notified of the operation at least 24 hours in advance, subject to the requirements ',
    'C. Register the aircraft for insurance purposes under the Civil Aviation Act, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Establish the nationality of the aircraft for international law purposes, identify the responsible operator for regulatory accountability, and provide a database of aircraft for safety oversight'
  ],
  correct: 3,
  explanation: 'Aircraft registration establishes Australian nationality (enabling operation under Australian rules internationally), identifies the owner/operator for regulatory accountability, and provides CASA with a database for safety oversight. An aircraft must be registered before it can be operated — operating an unregistered aircraft is an offence. The marks (VH-XXX) identify the nationality (VH = Australia).',
  reference: 'CASR Part 47 / ICAO Annex 7'
},

{
  question: 'The Australian aircraft registration prefix is:',
  options: [
    'A. AU',
    'B. VH',
    'C. ZK',
    'D. AUS'
  ],
  correct: 1,
  explanation: 'Australian-registered aircraft carry the nationality mark VH followed by a three-letter individual registration (e.g. VH-ABC). The VH prefix is Australia\\\'s ICAO-assigned nationality mark. New Zealand uses ZK; Papua New Guinea uses P2; United Kingdom uses G. The nationality mark identifies the state of registry and determines which state\\\'s aviation authority has regulatory responsibility.',
  reference: 'ICAO Annex 7 / CASR Part 47'
},

{
  question: 'Under the AIP, the term "Instrument Meteorological Conditions" (IMC) refers to:',
  options: [
    'A. Any conditions requiring the use of instruments for navigation, subject to written approval from the operator's chief pilot',
    'B. Meteorological conditions below the prescribed minimums for Visual Meteorological Conditions (VMC) — flight in IMC requires an instrument rating and IFR flight rules',
    'C. Only conditions within cloud, subject to the operator's approved exposition authorising such operations, provided the relevant aerodr',
    'D. Conditions where ceiling is below 1,000 ft only, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'IMC is defined as meteorological conditions below the relevant VMC minimums for visibility and/or cloud. Flight in IMC requires an instrument rating and operation under IFR (or SVFR in limited circumstances). A pilot without an instrument rating must remain in VMC — entering IMC without an instrument rating is illegal and extremely dangerous.',
  reference: 'AIP ENR 1.2 / CASR Part 91'
},

{
  question: 'Under Australian regulations, instrument approach category "CAT II" ILS requires the aircraft to:',
  options: [
    'A. Only have an autopilot capable of maintaining ILS tracking, only if the operator holds a specific approval under their Air Operator Certificate, subject to the pilot complet',
    'B. Only have CAT II approach approved in the Operations Manual, subject to written approval from the operator's chief pilot, only if the operator holds a',
    'C. Meet specific airworthiness standards including dual ILS receivers, automatic approach capability, radio altimeter, and fail-operational or fail-passive autopilot, plus crew qualification and aerodrome requirements',
    'D. Have at least 200 hours experience on the type before CAT II operations, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements '
  ],
  correct: 2,
  explanation: 'CAT II ILS operations require: aircraft certified for CAT II (dual systems, radio altimeter, autopilot capability, CAT II HUD or equivalent); crew qualified for CAT II (special training, currency); aerodrome meeting CAT II standards (approach lighting, RVR assessment, ground equipment); and CASA approval of the operation. CAT II permits approaches to DH of 100 ft and RVR of 350 m.',
  reference: 'CASR Part 91 / CAO 82.3 / AIP ENR 1.5'
},

{
  question: 'The "Threshold Crossing Height" (TCH) published on an ILS approach chart represents:',
  options: [
    'A. The altitude at which the ILS localiser signal becomes reliable, subject to written approval from the operator's chief pilot, only when operating in Class',
    'B. The minimum height at which the missed approach must be initiated, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. The height above threshold at which ATC expects the aircraft to be established on the ILS, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. The height above the runway threshold at which the ILS glide slope passes — typically 50–60 ft, ensuring that an aircraft following the glide slope to the threshold has adequate wheel clearance'
  ],
  correct: 3,
  explanation: 'TCH is the height of the ILS glide path at the runway threshold. Typically 50–60 ft for most runways, TCH ensures that an aircraft tracking the glide slope will cross the threshold at a safe height for main gear clearance. Lower TCH values require more precise glide slope tracking — TCH is published on the approach chart and affects the visual picture at the threshold.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under Australian regulations, an aircraft conducting instrument approaches at a non-controlled aerodrome (no tower or approach control) must comply with:',
  options: [
    'A. Only the published instrument approach procedure — no additional requirements apply at non-controlled aerodromes, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. The published instrument approach procedure, CTAF/MBZ broadcast requirements, visual circuit integration procedures, and self-separation from other traffic by broadcasting intentions and maintaining awareness',
    'C. VFR separation rules — IFR procedures do not apply at non-controlled aerodromes, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The operator\\\'s approval letter from CASA for each non-controlled aerodrome, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'IFR at non-controlled aerodromes: follow the published instrument procedure; broadcast on CTAF/CTAF-R at specified points (10 nm out, joining, final, go-around, landing, vacated); integrate with any VFR traffic; self-separate. There is no ATC providing separation — the pilot is responsible for collision avoidance using radio broadcasts and visual lookout in VMC. This is a common scenario for charter and corporate ATPL operations.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.4'
},

{
  question: 'A GNSS/RNAV approach requires the aircraft\\\'s navigation database to be:',
  options: [
    'A. Updated within the last 6 months, subject to the pilot completing the required recurrent training within 12 months',
    'B. Current for the applicable AIRAC cycle — using an expired database on an instrument approach is not authorised as procedures may have changed',
    'C. Only current for the aircraft type certificate — approach procedure changes do not require database updates',
    'D. Updated annually — monthly updates are not required for Australian operations, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'GNSS approach databases must be current for the applicable AIRAC cycle (28 days). Using an expired navigation database on an instrument approach is not authorised — the approach procedure may have changed (modified minimums, waypoints, missed approach). The database expiry date must be checked during pre-flight. Most modern FMS/GNSS units display the database effective and expiry dates prominently.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'The phrase "CLEARED FOR THE APPROACH" from ATC means:',
  options: [
    'A. The aircraft is cleared to execute the published instrument approach procedure to the aerodrome — it does not authorise landing. A separate landing clearance from the aerodrome tower is required',
    'B. The aircraft is cleared to land, only if the operator holds a specific approval under their Air Operator Certificate, subject to the operator's ap',
    'C. The aircraft may conduct any approach it wishes to the aerodrome, subject to the requirements of the applicable Civil Aviation Order, subject to the operator's ap',
    'D. The aircraft is cleared to the decision altitude for a precision approach, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'An approach clearance authorises the aircraft to fly the published instrument approach procedure. It does NOT authorise landing — a separate landing clearance from the tower is required. At non-towered aerodromes, the approach clearance covers the instrument procedure and the pilot then exercises own judgment for landing. Understanding what a clearance authorises (and does not authorise) is fundamental to IFR operations.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'At a controlled aerodrome, the priority for landing is given to:',
  options: [
    'A. Commercial aircraft over private aircraft, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. VFR aircraft since they have minimum fuel reserves, subject to the requirements of the applicable Civil Aviation Order',
    'C. Aircraft in distress/emergency have absolute priority — then aircraft in the approach and landing sequence, with ATC sequencing further priorities based on traffic flow',
    'D. The aircraft established on final approach first regardless of emergency status, subject to written approval from the operator's chief pilot'
  ],
  correct: 2,
  explanation: 'Under AIP ENR 1.1, aircraft in an emergency have priority over all other traffic. For non-emergency traffic, ATC sequences based on approach sequence, aircraft type, fuel considerations, and traffic flow. An ATC instruction may give priority to a fuel-critical aircraft over a longer-established sequence. The PIC of any aircraft with safety concerns should declare their situation to obtain priority handling.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Holding speed limits below FL140 must not exceed:',
  options: [
    'A. 200 KIAS',
    'B. 250 KIAS',
    'C. 280 KIAS',
    'D. 230 KIAS'
  ],
  correct: 3,
  explanation: 'ICAO holding speed limits (AIP ENR 1.5): below FL140 = 230 KIAS maximum; FL140–200 = 240 KIAS; FL200–340 = 265 KIAS; above FL340 = M0.83. These limits ensure the holding pattern remains within the published protected area. Exceeding holding speed limits invalidates the obstacle clearance provided by the pattern and may breach separation with other traffic.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The "ILS sensitive area" at an aerodrome is:',
  options: [
    'A. The area where ILS signals are strongest, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only when operating in Class',
    'B. The runway touchdown zone, except when the operation involves more than 9 passenger seats, provided the relevant aerodr',
    'C. An area around the ILS localiser and glide slope antennas where the presence of aircraft, vehicles, or structures would cause unacceptable interference to the ILS signals — vehicles and aircraft must be clear of this area during ILS approaches in low visibility',
    'D. The area within which passengers may hear the ILS morse identifier, subject to the pilot completing the required recurrent training within 12 months, except during the period of '
  ],
  correct: 2,
  explanation: 'The ILS sensitive area must remain clear of aircraft and vehicles during ILS approaches in low visibility (typically when RVR < 600 m for CAT I, or at lower limits for CAT II/III). Large aircraft (particularly wide-bodies) cause significant ILS signal distortion when in the sensitive area. ATC manages sensitive area protection as part of low visibility procedures.',
  reference: 'AIP AD INTRO / ICAO Annex 10'
},

{
  question: 'Under Australian instrument approach procedures, the "Final Approach Fix" (FAF) is:',
  options: [
    'A. The point where the landing gear must be extended, subject to the requirements of the applicable Civil Aviation Order, except during the period of ',
    'B. The fix where the aircraft must be on the glide slope for a precision approach, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. The fix that defines the beginning of the final approach segment — the pilot is typically at the appropriate approach configuration and altitude before this point, and descent on the final approach course begins',
    'D. The outer marker on an ILS approach only, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval '
  ],
  correct: 2,
  explanation: 'The FAF marks the start of the final approach segment. For non-precision approaches, the FAF is where the final descent to MDA begins. For precision approaches (ILS), the equivalent point is where the glide slope is intercepted (the outer marker is often at or near the FAF). The aircraft must be stabilised on final approach heading, at approach speed, and configured by the FAF.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The purpose of the "DME Arc" technique on certain instrument approaches is to:',
  options: [
    'A. Allow the aircraft to fly a curved path at a constant DME distance from a VOR/DME or TACAN to position onto the final approach course — used when terrain or traffic considerations prevent a straight-in approach from the en-route structure',
    'B. Provide distance measuring for fuel planning during the approach, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'C. Provide obstacle clearance when approaching over water, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in',
    'D. Replace the localiser signal on ILS approaches where the localiser is unserviceable, subject to written approval from the operator's chief pilot, provided a current instrumen'
  ],
  correct: 0,
  explanation: 'A DME arc approach allows the aircraft to transition from the en-route structure to the final approach course by flying at a constant DME distance from the DME ground station. The technique is common at aerodromes surrounded by terrain where direct final approaches are not possible from all directions. The pilot maintains a constant DME reading while tracking around to intercept the final approach course.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under the AIP, "Instrument Approach Procedures" are designed to ensure that an aircraft will have:',
  options: [
    'A. A view of the runway at the decision height under all weather conditions, except when the operation involves more than 9 passenger seats, provided the relevant aerodr',
    'B. Obstacle clearance throughout the approach, including the missed approach segment, when the aircraft operates within the tolerances of the procedure and at the applicable aircraft category speeds',
    'C. A guaranteed landing regardless of pilot experience level, except during the period of any declared low visibility procedures at the aerodrome, subject to the requirements ',
    'D. Separation from other IFR aircraft at all times during the approach, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'Instrument procedures are designed to provide obstacle clearance (not guaranteed visibility) when flown within the defined tolerances of the procedure, at the correct speeds for the aircraft category, and with properly functioning navigation equipment. The crew must fly the procedure correctly — deviation from the published path may take the aircraft outside the obstacle-protected area.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The flight information region (FIR) is a defined airspace in which:',
  options: [
    'A. Only IFR flight is permitted, subject to written approval from the operator's chief pilot, provided the aircraft holds ',
    'B. Full ATC separation is provided to all aircraft, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. Flight information service and alerting service are provided — the FIR is the basic unit of airspace organisation under ICAO regardless of the level of service provided',
    'D. Air Defence identification procedures are mandatory, only when operating in Class C or Class D controlled airspace, subject to the operator's ap'
  ],
  correct: 2,
  explanation: 'A Flight Information Region (FIR) is an airspace of defined dimensions within which flight information service and alerting service are provided. In Australia, the Melbourne FIR covers the majority of Australian airspace. The FIR does not imply full ATC services — within the FIR, specific classes of airspace (A, C, D, E, G) define the level of service. Australia\\\'s FIRs are: Melbourne (Brisbane Oceanic, Melbourne Domestic).',
  reference: 'AIP ENR 1.4 / ICAO Annex 11'
},

{
  question: 'Under Australian regulations, a "GNSS approach" requires which of the following before commencement?',
  options: [
    'A. RAIM availability prediction for the approach window, current navigation database, correct approach procedure selected and verified against the chart, and approach mode activation at the IAF',
    'B. Confirmation that GPS signals are available — no other specific checks are required, subject to the requirements of the applicable Civil Aviation Order',
    'C. Only ATC clearance for the approach — GNSS checks are automatic, only when operating in Class C or Class D controlled airspace, provided the relevant aerodr',
    'D. Manual entry of all approach waypoints from the current approach chart, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'GNSS approach pre-checks: (1) RAIM prediction available for the approach window (RAIM failure during approach requires missed approach); (2) current navigation database in the FMS/GNSS; (3) correct approach procedure selected and cross-checked against the printed chart; (4) approach mode activated at IAF to achieve ±0.3 nm CDI sensitivity; (5) crosscheck that the waypoints match the chart.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'Runway Condition Codes (RWYCC) and SNOWTAM provide information about:',
  options: [
    'A. Runway length and width only, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided the aircraft holds ',
    'B. Runway surface conditions affecting take-off and landing performance — snow, ice, water, slush depths, and the corresponding braking action and aircraft performance corrections required',
    'C. Runway lighting serviceability status, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements ',
    'D. Obstacle clearances near the runway, subject to written approval from the operator's chief pilot, subject to the pilot complet'
  ],
  correct: 1,
  explanation: 'RWYCC (Runway Condition Code) and SNOWTAMs communicate runway surface condition information. RWYCC range from 0 (nil braking, surface completely icy/wet) to 6 (dry). Each code corresponds to performance data for landing distance corrections and take-off data. For contaminated runways, aircraft performance manuals provide corrections — landing distance may be significantly increased.',
  reference: 'AIP ENR 1.5 / AIP GEN 3.1'
},

{
  question: 'Under ATC procedures, a "control clearance" given to an IFR aircraft must include which of the following?',
  options: [
    'A. Clearance limit, route/track, altitude/flight level to be maintained, and any other instructions necessary — the clearance must be complete enough for the pilot to navigate and comply safely',
    'B. Only the altitude to be maintained, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval ',
    'C. Only the destination and squawk code, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'D. Altitude and transponder code only — route is assumed to be the filed flight plan, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'A complete IFR clearance includes: (1) clearance limit (destination or intermediate fix); (2) SID or route; (3) altitude/FL to maintain; (4) additional instructions (speed, heading, sequence). ATC may abbreviate to "cleared as filed" for the route component if the flight plan is on file. The pilot must read back all elements. Incomplete clearances must be clarified before departure.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The term "controlled airspace" in Australia refers to:',
  options: [
    'A. Any airspace above 10,000 ft AMSL, provided a current instrument rating is held for the relevant aircraft category, except when the operation in',
    'B. Only terminal areas around major aerodromes, subject to written approval from the operator's chief pilot, subject to the operator's ap',
    'C. Airspace of defined dimensions within which ATC service is provided in accordance with the airspace classification — including Classes A, C, D, and E (upper portions)',
    'D. Any airspace within 25 nm of a registered aerodrome, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 2,
  explanation: 'Controlled airspace in Australia consists of Classes A, C, D, and portions of Class E where ATC services are provided. The airspace classes have specific characteristics for operations, clearance requirements, and separation services. Class G is uncontrolled. Airspace classification and dimensions are published in the AIP ENR and depicted on En-Route Charts.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under Australian regulations, the holder of an ATPL must produce their licence and medical certificate for inspection when requested by:',
  options: [
    'A. Any member of the public who requests it, subject to written approval from the operator's chief pilot, only if the operator holds a',
    'B. Only a CASA Inspector — no other authority can demand production of aviation documents, except during the period of any declared low visibility procedures at the aerodrome',
    'C. A CASA delegate (Aviation Safety Inspector), a police officer with appropriate authority, or other authorised person under the Civil Aviation Act — within the timeframe specified in the request',
    'D. Production is required only during a formal hearing or investigation, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 2,
  explanation: 'Under the Civil Aviation Act, a pilot must produce their licence, medical certificate, and other required documents when requested by a CASA delegate or other authorised person. The request must be complied with within the specified time. Refusal to produce documents is an offence. Police officers with appropriate powers may also request aviation documents.',
  reference: 'Civil Aviation Act 1988 / CASR Part 61'
},

{
  question: 'The "visual approach" at a controlled aerodrome is authorised when:',
  options: [
    'A. ATC provides a visual approach clearance to an IFR aircraft that has the aerodrome or preceding traffic in sight and accepts responsibility for separation from other IFR traffic — the pilot must maintain visual contact and may be required to follow other traffic',
    'B. The aerodrome is in Class G airspace, except during the period of any declared low visibility procedures at the aerodrome, subject to the requirements ',
    'C. Only when weather conditions exceed VFR minima by 500 ft and 2,000 m, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'D. The IFR clearance has been cancelled by the crew, only if the operator holds a specific approval under their Air Operator Certificate, subject to the operator's ap'
  ],
  correct: 0,
  explanation: 'Visual approach: ATC may offer a visual approach to an IFR aircraft when the aerodrome is in sight (day) or preceding traffic is in sight (night). The pilot may accept or decline. On acceptance: ATC provides IFR separation from other IFR; the pilot is responsible for visual separation from the preceding aircraft they are following. The visual approach simplifies the sequence and reduces ATC workload.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under CASR Part 91, the minimum height for flight over a congested area of a city or town is:',
  options: [
    'A. 500 ft above the highest obstacle within 600 m of the aircraft',
    'B. 1,000 ft above the highest obstacle within 600 m of the aircraft',
    'C. 1,000 ft above mean sea level',
    'D. 500 ft above ground level at all times over built-up areas'
  ],
  correct: 1,
  explanation: 'Under CASR Part 91.275, an aircraft must not fly over a congested area of a city, town, or settlement at less than 1,000 ft above the highest obstacle within 600 m of the aircraft. This provides adequate clearance for emergency procedures (engine failure, forced landing), reduces noise impact, and minimises hazard to persons on the ground.',
  reference: 'CASR Part 91.275'
},

{
  question: 'The minimum altitude for flight over an open-air assembly of persons not associated with the aircraft is:',
  options: [
    'A. 300 ft AGL',
    'B. 500 ft AGL',
    'C. 1,000 ft above the assembly',
    'D. 3,000 ft AMSL'
  ],
  correct: 2,
  explanation: 'Under CASR Part 91.275, a pilot must not fly over an open-air assembly of persons at a height that would endanger persons at the assembly — the accepted minimum is 1,000 ft above the highest point of the assembly. This covers events such as outdoor concerts, sporting events, and public gatherings. Lower flight requires CASA approval.',
  reference: 'CASR Part 91.275'
},

{
  question: 'The "low flying rule" exemptions permit certain operations below normal minimum heights. Which of the following does NOT qualify for a low flying exemption?',
  options: [
    'A. An ATPL holder sightseeing over a city at 300 ft for passenger enjoyment',
    'B. Take-off and landing operations',
    'C. Aerial agricultural operations with CASA approval',
    'D. Search and rescue operations'
  ],
  correct: 0,
  explanation: 'Low flying exemptions exist for: take-off and landing; emergency forced landings; SAR operations; approved aerial agricultural/work operations; police and emergency services operations; and certain training with CASA approval. Sightseeing at 300 ft over a city for passenger enjoyment does not qualify — this would be a breach of the congested area low flying rule regardless of licence level.',
  reference: 'CASR Part 91.275 / CAR Part XI'
},

{
  question: 'Wake turbulence from a large aircraft is most hazardous to a following aircraft when:',
  options: [
    'A. The following aircraft is at a higher altitude than the generating aircraft, subject to the requirements of the applicable Civil Aviation Order, subject to the pilot complet',
    'B. The following aircraft is on the same approach path below and behind the generating aircraft — the vortices sink and drift downwind, posing the greatest risk to aircraft on the same track behind and below',
    'C. The following aircraft is on a parallel runway approach, provided the aircraft holds a valid maintenance release and is within weight limits, only when operating in Class',
    'D. Wake turbulence is only significant in calm wind conditions above FL200, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'Wake vortices trail behind the generating aircraft and sink at approximately 300–500 ft/min, levelling off approximately 800–900 ft below the flight path. They drift with the wind. The greatest hazard is to aircraft following on the same approach path below and behind — landing behind a heavy aircraft on the same runway without adequate separation is the highest risk scenario.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9426'
},

{
  question: 'The ATC wake turbulence separation category "Heavy" applies to aircraft with MTOW of:',
  options: [
    'A. Greater than 15,000 kg',
    'B. Greater than 7,000 kg',
    'C. Greater than 136,000 kg (136 tonnes)',
    'D. Greater than 50,000 kg'
  ],
  correct: 2,
  explanation: 'ICAO wake turbulence categories: SUPER (A380 and B748); HEAVY (MTOW ≥ 136,000 kg — B747, B777, A330 etc.); MEDIUM (7,000 kg to 136,000 kg); LIGHT (≤ 7,000 kg). "Heavy" aircraft must include "HEAVY" in initial ATC call (e.g. "Qantas 123 Heavy"). The SUPER category (A380) requires the most extensive separation.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Minimum wake turbulence radar separation for a Light aircraft following a Heavy aircraft on final approach is:',
  options: [
    'A. 3 nm',
    'B. 6 nm',
    'C. 5 nm',
    'D. 8 nm'
  ],
  correct: 1,
  explanation: 'Radar wake turbulence separation minimums (ICAO): Light behind Heavy = 6 nm; Light behind Medium = 5 nm; Medium behind Heavy = 5 nm; Light behind Super (A380) = 8 nm; others = 3 nm minimum. The AIP ENR 1.1 and local procedures may specify additional requirements. These minimums replace the standard 3 nm radar separation for same-direction approaches.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'To avoid wake turbulence when landing behind a heavy jet on the same runway, the correct technique is to:',
  options: [
    'A. Land as soon as possible to minimise exposure time, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Approach at or above the heavy jet\\\'s approach path, touch down before the heavy jet\\\'s touchdown point, and if necessary request increased separation from ATC',
    'C. Approach at a higher speed to penetrate through the vortex quickly, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Land on a runway intersection beyond the heavy jet\\\'s touchdown point, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Wake turbulence avoidance when landing behind a heavy: maintain at or above the preceding aircraft\\\'s approach path (vortices sink below the path); aim to touch down prior to the point where the heavy touched down (vortices are at or beyond the touchdown point, not before it); and request ATC apply wake turbulence separation. "At or above, before" is the rule.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9426'
},

{
  question: 'The regulation governing the carriage and use of firearms on aircraft in Australia states that:',
  options: [
    'A. Firearms may be carried in checked baggage only and must be declared, subject to the pilot completing the required recurrent training within 12 months, provided a current instrumen',
    'B. Firearms are always prohibited on all Australian commercial aircraft, except during the period of any declared low visibility procedures at the aerodrome, provided the aircraft holds ',
    'C. No person may carry a firearm on an aircraft without prior approval — loaded firearms are prohibited in the passenger cabin; unloaded declared firearms may be carried in the hold under specific conditions',
    'D. Passengers with gun licences may carry their weapon on board, provided a current instrument rating is held for the relevant aircraft category, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'Under Australian law and aviation security regulations, firearms on aircraft require prior approval. Loaded firearms are prohibited in passenger areas. Unloaded declared firearms with approval may be carried in locked, secured baggage in the cargo hold. CASA security provisions and the Aviation Transport Security Act apply. The PIC has authority to refuse carriage of persons or items that compromise safety.',
  reference: 'Aviation Transport Security Act 2004 / CASR Part 91'
},

{
  question: 'An aircraft is conducting a flight over water. Under Australian regulations, when must the life jackets provided be of an automatically inflating type?',
  options: [
    'A. When the flight is beyond the gliding distance from shore — automatically inflating life jackets are required for over-water operations beyond specified distances from land',
    'B. Only on international over-water flights, subject to written approval from the operator's chief pilot, provided the aircraft holds ',
    'C. Only when the aircraft is operating above 5,700 kg MTOW, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Only during night operations over water, except when the operation involves more than 9 passenger seats, provided the relevant aerodr'
  ],
  correct: 0,
  explanation: 'Under CAO 20.11, when operating over water beyond gliding distance from shore, automatically inflating life jackets are required. This ensures that in the event of a water ditching, even incapacitated occupants will be inflated. Manual inflation life jackets alone are not sufficient for extended over-water operations where unconscious ditching survivors may be in the water.',
  reference: 'CAO 20.11'
},

{
  question: 'An aircraft has a maximum certificated take-off weight (MTOW) of 5,800 kg. Under Australian regulations, this aircraft is classified as:',
  options: [
    'A. A light aircraft requiring only basic VFR equipment, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. A medium aircraft exempt from turbine engine requirements, except during the period of any declared low visibility procedures at the aerodrome',
    'C. Classification depends on the number of passenger seats, not MTOW, provided the aircraft does not exceed 5,700 kg maximum certificated weight',
    'D. Above 5,700 kg — it is subject to transport category airworthiness and operational requirements for aircraft above this threshold'
  ],
  correct: 3,
  explanation: 'The 5,700 kg (12,566 lb) MTOW threshold is significant in Australian regulations. Aircraft above 5,700 kg are subject to higher airworthiness standards (CASR Part 25), additional equipment requirements, CASR Part 121 or Part 135 operational requirements for commercial operations, and specific maintenance requirements. Many regulatory requirements are triggered by this threshold.',
  reference: 'CASR Part 25 / CASR Part 121'
},

{
  question: 'The maximum operating speed (Vmo) of a turbine-powered aircraft is:',
  options: [
    'A. The maximum speed at which the aircraft may be operated in any regime of flight, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. The maximum cruise speed for fuel efficiency purposes, subject to the pilot completing the required recurrent training within 12 months, except when the operation in',
    'C. The maximum speed during descent — climb and cruise speeds are limited by MMO only, subject to the operator's approved exposition authorising such operations',
    'D. The maximum Indicated Airspeed (IAS) limit that must not be exceeded in any phase of flight except as specifically authorised — it is structurally derived and exceedance triggers mandatory inspection'
  ],
  correct: 3,
  explanation: 'Vmo is the maximum operating IAS in the low altitude regime (where IAS, not Mach, is the limiting factor). At higher altitudes, Mmo (maximum operating Mach number) becomes limiting. Exceeding Vmo/Mmo requires mandatory maintenance inspection and reporting. The Never Exceed Speed (Vne) applies to piston aircraft; Vmo/Mmo to turbine aircraft.',
  reference: 'CASR Part 91 / AFM'
},

{
  question: 'Under CAR, the pilot must not begin the take-off roll unless:',
  options: [
    'A. ATC has issued a specific take-off clearance only, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'B. Full power checks have been completed to the manufacturer\\\'s specifications, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'C. The pilot is satisfied that: the runway to be used is clear of obstructions, the aircraft is correctly configured for take-off, appropriate performance calculations have been completed, and (if at a controlled aerodrome) a take-off clearance has been issued',
    'D. All passengers and crew are seated and seatbelts fastened, only if the operator holds a specific approval under their Air Operator Certificate, provided a current instrumen'
  ],
  correct: 2,
  explanation: 'Before commencing the take-off roll, the PIC must be satisfied that: the runway is clear; the aircraft is correctly configured and serviceable; take-off performance has been calculated (WAT limits, runway length, obstacle clearance); required clearances have been obtained. At a controlled aerodrome, a take-off clearance must be obtained. The PIC\\\'s failure to complete these checks is a serious safety breach.',
  reference: 'CASR Part 91 / CAR Part XI'
},

{
  question: 'The "clean aircraft concept" in winter operations requires that:',
  options: [
    'A. The aircraft be washed clean of all dirt before each flight, only if the operator holds a specific approval under their Air Operator Certificate, subject to written approval ',
    'B. Only ice must be removed — frost and snow are acceptable provided they are thin, only when operating in Class C or Class D controlled airspace, provided CASA has been notif',
    'C. The aircraft must be de-iced by an approved contractor only, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in',
    'D. All contamination (frost, ice, snow, slush) be removed from all critical surfaces (wings, stabilisers, control surfaces, intakes) before take-off — any contamination degrades aerodynamic performance to an unacceptable level'
  ],
  correct: 3,
  explanation: 'The clean aircraft concept requires ALL contamination to be removed before take-off. Frost, even a thin layer, can increase stall speed by 30–35%. Ice degrades performance further. Snow adds weight and alters aerodynamics. The concept applies to all critical surfaces including the tailplane — tailplane icing can cause fatal loss of pitch control. Compliance is mandatory regardless of the type or quantity of contamination.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'An ATPL holder departing a controlled aerodrome IFR must not commence the take-off roll until:',
  options: [
    'A. They have received departure clearance only, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'B. ATIS has been received and acknowledged, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in',
    'C. The departure procedure has been loaded into the FMS, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'D. They have received the ATC IFR clearance AND the specific take-off clearance — the IFR clearance authorises the route and altitude but does not authorise the use of the runway for take-off'
  ],
  correct: 3,
  explanation: 'Two separate clearances are required at a controlled aerodrome: (1) the IFR route clearance (from delivery/clearance) specifying the cleared route, altitude, squawk, departure procedure; and (2) the take-off clearance (from the tower) authorising use of the runway for take-off. The IFR clearance alone does not authorise entering the runway. Many runway incursions result from confusion between these two clearances.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, an aircraft must not fly in formation unless:',
  options: [
    'A. All aircraft are the same type, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements ',
    'B. The pilots of each aircraft have agreed, the flight is conducted in VMC, and formation flying rules are complied with — specific approval may also be required depending on the operation type',
    'C. A formation leader with more than 500 hours is designated, provided a current instrument rating is held for the relevant aircraft category, provided the relevant aerodr',
    'D. Formation flying is always prohibited for commercial operations, only when operating in Class C or Class D controlled airspace, except when the operation in'
  ],
  correct: 1,
  explanation: 'Formation flying under CASR Part 91: pre-arrangement between all pilots is required; VMC must be maintained; specific formation rules apply (lead aircraft has right of way; others give way; no formation in cloud). Commercial operations may require additional approval. Formation flying is relatively common in aerobatic displays, military exercises, and some ferry operations.',
  reference: 'CASR Part 91'
},

{
  question: 'Under Australian law, consuming alcohol within 8 hours before acting as flight crew is:',
  options: [
    'A. Prohibited — no flight crew member may consume alcohol within 8 hours before acting as a crew member. The BAC (Blood Alcohol Concentration) limit for flight crew is also lower than the road limit',
    'B. Permitted provided the pilot does not feel impaired, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. Permitted for domestic flights only, subject to written approval from the operator's chief pilot, provided the relevant aerodr',
    'D. The 8-hour rule applies only to the pilot in command, not other crew, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'Under CAR 256 (and CASR), a person must not perform duties as a crew member within 8 hours of consuming alcohol. Additionally, there is a BAC limit of 0.02 g/100 mL for aviation crew (compared to 0.05 for road driving). The combination of the 8-hour rule and the BAC limit provides strict protection. Penalties are severe and include licence suspension.',
  reference: 'CAR 256 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the pilot of an aircraft who has reason to believe they may have recently used prescription medication must:',
  options: [
    'A. Fly as normal — prescription medication is legal and therefore permitted, subject to the pilot completing the required recurrent training within 12 months',
    'B. Only avoid flying if the medication causes drowsiness, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in',
    'C. Seek advice from an aviation medical officer (AMO) before flying — many prescription medications are incompatible with flight duties, and the pilot has a personal responsibility to assess fitness to fly',
    'D. Notify CASA within 24 hours of taking the medication, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'The pilot is personally responsible for assessing fitness to fly. Many prescription medications (sedatives, antihistamines, pain medications, antibiotics) can impair cognitive or physical performance. The "I\\\'M SAFE" checklist includes medication assessment. If in doubt, consult an aviation medical officer. Self-certifying fitness while impaired by medication is a dangerous and illegal act.',
  reference: 'CASR Part 67 / CASR Part 91 / Civil Aviation Act'
},

{
  question: 'Under Australian noise abatement procedures, an aircraft must comply with published NAP (Noise Abatement Procedures) unless:',
  options: [
    'A. The PIC considers operational performance requires a different departure path, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Safety considerations require deviation — noise abatement procedures are secondary to safety. ATC may waive NAP requirements for operational or safety reasons',
    'C. The aircraft is on an IFR flight plan, subject to the requirements of the applicable Civil Aviation Order, provided the relevant aerodr',
    'D. The aerodrome is Class G — NAP only applies to controlled aerodromes, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Noise Abatement Procedures (NAP) are mandatory at aerodromes where published. However, safety is the absolute priority — if complying with the NAP would compromise safety, the PIC must deviate. ATC may issue instructions that differ from standard NAP routing when required for traffic management. The PIC must not sacrifice safety for noise compliance.',
  reference: 'AIP AD section / CASR Part 91'
},

{
  question: 'The "sterile cockpit" rule applies to flight crew during:',
  options: [
    'A. All phases of flight, only if the operator holds a specific approval under their Air Operator Certificate, provided the aircraft holds ',
    'B. Critical phases of flight — typically below 10,000 ft (or as specified in the operator\\\'s SOPs) — prohibiting non-essential conversation, activities, and crew communication not related to the safe operation of the aircraft',
    'C. Only during approach and landing phases, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'D. Only when the aircraft is within Class A airspace, provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds '
  ],
  correct: 1,
  explanation: 'The sterile cockpit (quiet cockpit) rule prohibits non-essential activities during critical flight phases (typically below 10,000 ft). This prevents distractions during take-off, approach, and landing when crew workload is high. Essential communications (ATC, aircraft system monitoring, non-normal procedures) continue normally. Non-essential conversation, cabin crew contact for non-safety issues, and paperwork are prohibited.',
  reference: 'CASR Part 121 / Operator SOPs'
},

{
  question: 'Controlled airspace in Australia that is not a CTR or CTA is designated as:',
  options: [
    'A. An Air Defence Identification Zone, subject to the requirements of the applicable Civil Aviation Order',
    'B. A Terminal Control Area (TMA), subject to the operator's approved exposition authorising such operations',
    'C. Upper Control Area (UCA) for all airspace above 10,000 ft',
    'D. An Airway (a control area extending along a defined route) or other Special Use Airspace'
  ],
  correct: 3,
  explanation: 'Australian controlled airspace includes: CTR (Control Zone — around controlled aerodromes, extends from surface); CTA (Control Area — en-route and terminal, has a base altitude above the surface); and Airways (specific route-based CTA). Special Use Airspace includes restricted areas, danger areas, and prohibited areas. Each has specific dimensional and access requirements.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under the AIP, a "Restricted Area" differs from a "Prohibited Area" in that:',
  options: [
    'A. Restricted areas are only enforced during daylight hours, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a',
    'B. Flight through a restricted area may be permitted with appropriate ATC clearance or approval from the area-controlling authority — prohibited areas are permanently closed to all civil flight',
    'C. Restricted areas apply only to IFR aircraft — VFR may transit freely, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. There is no practical difference — both terms are used interchangeably, except when the operation involves more than 9 passenger seats, provided the relevant aerodr'
  ],
  correct: 1,
  explanation: 'Restricted Area: entry requires clearance from the controlling authority (often military or another government agency) during activation hours. Some restricted areas permit transit with ATC approval. Prohibited Area: flight is permanently or conditionally prohibited — no clearance is available. Examples of prohibited areas include restricted air defence zones and areas around head of state residences.',
  reference: 'AIP ENR 5.1'
},

{
  question: 'Under Australian ATC procedures, when an aircraft declares "MAYDAY MAYDAY MAYDAY", ATC must:',
  options: [
    'A. Acknowledge the distress call, maintain communication, provide all possible assistance including priority handling, activate emergency services if required, inform relevant authorities, and coordinate a safe outcome',
    'B. Inform the operator before taking any action, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'C. Transfer the aircraft to the emergency frequency 121.5 MHz, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class',
    'D. Require the aircraft to squawk 7700 before providing emergency services, except during the period of any declared low visibility procedures at the aerodrome, subject to the requirements '
  ],
  correct: 0,
  explanation: 'ATC response to MAYDAY: (1) acknowledge and read back the MAYDAY; (2) establish the nature of the emergency; (3) provide immediate priority handling — clear the airspace, issue direct routing, authorise any necessary deviation; (4) alert emergency services (ARFF, ambulance) as required; (5) advise adjacent sectors; (6) notify JRCC if SAR needed. The objective is to facilitate a safe outcome.',
  reference: 'AIP GEN 3.6 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, the carriage of oxygen for supplemental use by passengers must comply with which of the following?',
  options: [
    'A. Oxygen may be carried freely by any passenger without restriction, subject to the operator's approved exposition authorising such operations, only when operating in Class',
    'B. Therapeutic oxygen carried by or for passengers must comply with CASR Part 92 dangerous goods provisions and the operator\\\'s approval — portably-carried medical oxygen cylinders on board aircraft require specific approval',
    'C. Passenger-use oxygen is only permitted on pressurised aircraft, provided the aircraft holds a valid maintenance release and is within weight limits, only when operating in Class',
    'D. No oxygen may be carried in the passenger cabin under any circumstances, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a'
  ],
  correct: 1,
  explanation: 'Compressed oxygen is a dangerous good (oxidiser, Division 2.2). Medical oxygen cylinders carried by passengers for therapeutic use require airline/operator approval and must comply with CASR Part 92. Quantity and pressure limits apply. Most airlines have specific approval processes for medical oxygen equipment. The PIC must be informed of oxygen on board.',
  reference: 'CASR Part 92 / CAO 29.7'
},

{
  question: 'The maximum certified structural weight at which an aircraft can take off is the MTOW. If an aircraft is dispatched at MTOW in a high altitude, high temperature environment, the take-off:',
  options: [
    'A. May be structurally legal but operationally unsafe — while the structural limits are not exceeded, the aircraft\\\'s performance (accelerate-stop distance, climb gradient, obstacle clearance) is degraded by the high density altitude and may be insufficient',
    'B. Is legal — structural limits are not affected by density altitude, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds ',
    'C. Is automatically restricted by the FMS, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval ',
    'D. Requires a CASA waiver for hot and high operations, provided CASA has been notified of the operation at least 24 hours in advance, subject to the operator's ap'
  ],
  correct: 0,
  explanation: 'MTOW is a structural limit — it defines the maximum weight at which the aircraft is certified for structural integrity. However, at high temperature and altitude (high density altitude), the aerodynamic and engine performance is reduced. The aircraft may be within structural limits but unable to meet the required runway length, climb gradient, or obstacle clearance requirements. Performance-limited weight may be less than MTOW at high/hot aerodromes.',
  reference: 'CASR Part 91 / AFM performance section'
},

{
  question: 'Under Australian regulations, the term "night" for aviation purposes is defined as:',
  options: [
    'A. The period between sunset and sunrise, provided a current instrument rating is held for the relevant aircraft category',
    'B. The period from 6 PM to 6 AM local time',
    'C. The period between end of evening civil twilight and beginning of morning civil twilight',
    'D. Any time the sun is below the horizon, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 2,
  explanation: 'Under Australian aviation regulations, "night" is the period from the end of evening civil twilight to the beginning of morning civil twilight. Civil twilight ends when the sun is 6° below the horizon in the evening, and begins when the sun is 6° below the horizon in the morning. This definition is used for night rating currency requirements and the requirement for navigation lights.',
  reference: 'CASR Part 61 / AIP ENR 1.1'
},

{
  question: 'An aircraft must display navigation lights during flight at night. The navigation light colours and positions are:',
  options: [
    'A. Red on the left (port), green on the right (starboard), and white at the tail (aft)',
    'B. Red on the right, green on the left, white at the front',
    'C. Green on both sides with a white strobe on top',
    'D. Red on the nose, green on the tail, white on each wingtip'
  ],
  correct: 0,
  explanation: 'Standard aircraft navigation lights: red = left (port) wing; green = right (starboard) wing; white = tail (aft-facing). This is consistent with maritime conventions. The green light facing right and red light facing left allows other pilots to determine traffic direction. An aircraft showing red on the right (heading toward you) and green on the left is crossing left-to-right — give way.',
  reference: 'CASR Part 91 / ICAO Annex 2'
},

{
  question: 'A right-of-way conflict between two aircraft approaching the same aerodrome — both on final approach — is resolved by:',
  options: [
    'A. The larger aircraft has right of way, subject to the pilot completing the required recurrent training within 12 months',
    'B. The faster aircraft has right of way, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. ATC always resolves final approach conflicts — there is no pilot rule, subject to the requirements of the applicable Civil Aviation Order',
    'D. The lower aircraft has the right of way — the higher aircraft must give way and not cut in front or below the aircraft already established on final'
  ],
  correct: 3,
  explanation: 'Under ICAO Annex 2 and CASR Part 91, when two aircraft are on final approach, the lower aircraft has priority — the higher aircraft must give way. An aircraft may not cut in front of or under another aircraft on final approach. Aircraft should not attempt to overtake a preceding aircraft on final. ATC separation removes the need for this rule in practice at controlled aerodromes.',
  reference: 'CASR Part 91 / ICAO Annex 2'
},

{
  question: 'Under Australian regulations, the minimum visibility for VFR flight in Class E controlled airspace above 3,000 ft AMSL is:',
  options: [
    'A. 1,000 m',
    'B. 5,000 m',
    'C. 3,000 m',
    'D. 8,000 m'
  ],
  correct: 1,
  explanation: 'In Class E airspace (and other controlled/uncontrolled airspace above 3,000 ft AMSL), the VFR minimum visibility is 5,000 m (5 km). Cloud clearances are 1,500 m horizontal and 1,000 ft vertical. This is the standard ICAO VMC minimum for cruising flight. Below 3,000 ft AMSL (or 1,000 ft AGL whichever is higher), relaxed minimums may apply in Class G.',
  reference: 'AIP ENR 1.2 / CASR Part 91'
},

{
  question: 'Under Australian regulations, when two aircraft are approaching each other head-on, both must:',
  options: [
    'A. The larger aircraft must give way, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Both aircraft must turn left, subject to the operator's approved exposition authorising such operations',
    'C. Both aircraft must turn right — each altering course to the right to pass left side to left side',
    'D. The slower aircraft must give way by turning right'
  ],
  correct: 2,
  explanation: 'Head-on rule: when two aircraft on approximately reciprocal headings are approaching at similar altitude, BOTH must turn right. This results in each aircraft passing on the left side of the other (left to left). The rule requires both aircraft to act — no aircraft has right of way in a head-on conflict. This is the same as the fundamental maritime rule of the road.',
  reference: 'CASR Part 91 / ICAO Annex 2'
},

{
  question: 'The pilot in command of an aircraft must carry which personal documents during flight?',
  options: [
    'A. Their pilot licence, valid medical certificate, and for radio operations, a flight radiotelephone operator licence — these must be available for inspection on request',
    'B. Only a government-issued photo ID, subject to the pilot completing the required recurrent training within 12 months, subject to the requirements ',
    'C. The aircraft logbook and pilot logbook, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'D. Pilot licence only — the medical certificate is held by CASA, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 0,
  explanation: 'The PIC must carry: valid pilot licence (or approved digital equivalent); current medical certificate; and flight radiotelephone operator certificate (for radio use). These must be produced on request by an authorised person. The aircraft documents (maintenance release, CofR, CofA, radio licence) must also be on board or accessible. Carrying an expired medical while flying is an offence.',
  reference: 'CASR Part 61 / CASR Part 91'
},

{
  question: 'Under Australian regulations, a pilot intending to fly in RVSM airspace must ensure that:',
  options: [
    'A. The aircraft carries TCAS II only — no other special requirement, subject to the requirements of the applicable Civil Aviation Order',
    'B. RVSM approval is not required for aircraft below 30,000 kg MTOW, subject to written approval from the operator's chief pilot',
    'C. The aircraft is RVSM-approved (altimetry meets RVSM standards), the operator is approved for RVSM, and the pilot is trained in RVSM operations and contingency procedures',
    'D. Only turbine-powered aircraft require RVSM approval — piston aircraft are exempt above FL290, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 2,
  explanation: 'RVSM requires: aircraft approval (altimetry accuracy to ±65 ft of assigned level, automatic altitude keeping); operator approval (training, monitoring, reporting programme); pilot training (RVSM procedures, contingencies). Non-RVSM aircraft entering RVSM airspace require specific coordination with ATC and receive 2,000 ft separation from all other traffic.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9574'
},

{
  question: 'The altimeter setting "QNH" provides:',
  options: [
    'A. The altimeter reading of zero at sea level for any pressure, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Altitude above mean sea level — the altimeter is set to local sea-level pressure and reads altitude AMSL when the aircraft is on the ground at the aerodrome (aerodrome elevation)',
    'C. Height above the aerodrome reference point, subject to the operator's approved exposition authorising such operations, provided the relevant aerodr',
    'D. Pressure altitude corrected for non-standard temperature, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'QNH is the altimeter setting that causes the altimeter to read the aerodrome\\\'s published elevation when the aircraft is on the ground. In flight, it gives altitude AMSL. QNH varies with the actual atmospheric pressure at the location. ATC issues QNH to arriving aircraft for use during approaches and departures below the transition altitude.',
  reference: 'AIP ENR 1.7 / ICAO Doc 8168'
},

{
  question: 'A "NOTAM W" series (warning NOTAM) typically advises of:',
  options: [
    'A. Airspace warnings including temporary restrictions, airspace activations (military exercises, parachute dropping, rocket launches, UAV operations), and special use airspace changes',
    'B. Weather warnings — these supersede TAFs when issued, subject to the operator's approved exposition authorising such operations, provided the aircraft holds ',
    'C. Aircraft warnings about specific aircraft technical issues, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'D. Wake turbulence warnings for specific aircraft types, only when operating in Class C or Class D controlled airspace, subject to the requirements '
  ],
  correct: 0,
  explanation: 'NOTAM series in Australia: "W" NOTAMs are airspace warnings — temporary restrictions, airspace activations, military exercises, parachute areas, aerial displays, etc. Other series include "A" for aerodrome NOTAMs, "N" for navigational aids, and "C" for communications. The "W" series is critical for route planning as it may affect airspace availability and require deviation.',
  reference: 'AIP GEN 3.1'
},

{
  question: 'Under ATC procedures, an aircraft assigned a heading by ATC for radar vectoring must:',
  options: [
    'A. Fly the heading but may deviate up to ±5° for turbulence avoidance, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Advise ATC if wind causes drift from the assigned heading, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Maintain the magnetic heading for ±15° of the assigned heading at the pilot\\\'s discretion, only when operating in Class C or Class D controlled airspace',
    'D. Maintain the assigned heading until instructed otherwise, except when safety requires immediate deviation, in which case ATC must be notified immediately'
  ],
  correct: 3,
  explanation: 'An assigned heading is a mandatory instruction. The aircraft must maintain the heading until ATC amends it. If safety requires immediate deviation (TCAS RA, weather avoidance, terrain), the pilot must deviate as needed and immediately advise ATC. Informing ATC of wind-induced drift is not required — ATC accounts for wind in their separation planning.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The "RVR" reported for runway 34L at Sydney is 300 m. The published ILS CAT I minimum for RWY 34L is 550 m RVR. The flight crew:',
  options: [
    'A. May commence the approach — conditions may improve by the time the aircraft reaches decision height',
    'B. May commence if they have alternate fuel and the approach is commenced within 5 minutes of the report',
    'C. May commence with captain\\\'s discretion as conditions may be better at lower altitude, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Must not commence the approach if the reported RVR is below the published minimum — the approach ban applies when reported RVR is below minimums'
  ],
  correct: 3,
  explanation: 'The approach ban: if the reported RVR/visibility is below the published minimums, the approach must not be commenced (CASR Part 91, AIP ENR 1.5). At 300 m RVR with a 550 m minimum, the approach is prohibited. The crew must hold if possible, divert if insufficient fuel or if conditions do not improve. "Commencing the approach hoping it improves" is prohibited and dangerous.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'For an ATPL holder acting as PIC on a single-pilot IFR charter flight, the minimum safe altitude (LSALT) for the route must be:',
  options: [
    'A. 1,000 ft above the highest terrain within 100 nm of the route, subject to the pilot completing the required recurrent training within 12 months',
    'B. Applied only when flying in IMC — VMC allows visual obstacle avoidance below LSALT, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Maintained at all times during the flight except during an instrument approach procedure — the LSALT provides obstacle clearance for the 5 nm corridor each side of the planned track',
    'D. Applied only on the IFR chart airways — off-airway flight may use any altitude, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 2,
  explanation: 'LSALT must be maintained at all times during IFR flight except when conducting a published instrument approach procedure. This applies in both IMC and VMC — even if visual conditions exist, IFR flight below LSALT is not permitted unless on an approach procedure. Off-airway flight requires grid LSALT from the En-Route Chart. The LSALT provides the legal obstacle clearance for IFR.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, a pilot must not manipulate the flight controls of an aircraft when the pilot has, within the preceding 8 hours:',
  options: [
    'A. Consumed more than one standard drink, subject to the requirements of the applicable Civil Aviation Order, subject to the pilot complet',
    'B. Consumed any alcohol — the 8-hour "bottle to throttle" rule prohibits ALL alcohol consumption within 8 hours of acting as crew, regardless of the quantity consumed',
    'C. Consumed alcohol to a blood alcohol level exceeding 0.05, except when the operation involves more than 9 passenger seats',
    'D. Consumed alcohol outside the airport precinct, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'CAR 256 (and CASR): a crew member must not have consumed any alcohol within the 8 hours preceding the exercise of flight crew duties. This is an absolute prohibition on any alcohol — there is no "one drink OK" provision. Additionally, the BAC must be below 0.02 g/100 mL at all times during duty. Breathalyser testing may be conducted by CASA or police.',
  reference: 'CAR 256 / CASR Part 91'
},

{
  question: 'The maximum published speed for operation below 10,000 ft in Australian controlled airspace under ICAO rules is:',
  options: [
    'A. 200 KIAS',
    'B. 280 KIAS',
    'C. 250 KIAS',
    'D. 300 KIAS'
  ],
  correct: 2,
  explanation: 'The ICAO standard speed limit below 10,000 ft is 250 KIAS. Australia has adopted this ICAO provision — aircraft must not exceed 250 KIAS below FL100 except with ATC authorisation for specific operations (e.g. military, test operations). The limit applies in controlled airspace. It reduces closure rates and improves traffic management in busy terminal areas.',
  reference: 'AIP ENR 1.1 / ICAO Annex 2'
},

{
  question: 'An aircraft is established on the ILS final approach course when the crew notices the autopilot has disconnected unexpectedly. The immediate action should be:',
  options: [
    'A. Take manual control immediately, maintain the approach path, verify aircraft configuration, advise ATC if the approach will be continued, and decide whether to continue or execute a missed approach',
    'B. Attempt to re-engage the autopilot before doing anything else, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap',
    'C. Declare an emergency and execute a missed approach, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'D. Allow the aircraft to continue under flight director guidance while diagnosing the autopilot fault, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'Autopilot unexpected disconnect: immediately take manual control (aviate first); assess aircraft attitude and path; check configuration; advise ATC; make continue/go-around decision. Attempting to re-engage before establishing manual control risks losing the approach path. A missed approach may be prudent if the disconnect occurred at a critical moment (e.g. near decision height in low visibility). CRM: PM calls out attitude and path while PF hand-flies.',
  reference: 'AFM abnormal procedures / CASR Part 121 / CRM'
},

{
  question: 'An IFR aircraft cruising at FL160 is cleared to "descend flight level one four zero." The pilot should:',
  options: [
    'A. Acknowledge the clearance, descend at an appropriate rate to FL140, and level at FL140 — do not descend below the cleared level',
    'B. Descend immediately at maximum rate to FL140, only when operating in Class C or Class D controlled airspace',
    'C. Descend passing through FL140 to FL100 if workload permits, provided a current instrument rating is held for the relevant aircraft category',
    'D. Advise ATC when passing FL150 to receive an amended clearance, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 0,
  explanation: 'Descend to FL140: acknowledge (readback the cleared level), begin descent at an appropriate rate (normal operational descent), level at FL140. Do not descend below the cleared level. Do not hurry excessively — normal operations. The cleared level is FL140, not a lower level. Deviating below the cleared level is an altitude bust.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The Australian airspace below approximately 245 FL (FL245) consists of various classes. In which airspace class is ALL flight permitted without ATC clearance?',
  options: [
    'A. Class G',
    'B. Class E',
    'C. Class D',
    'D. Class C'
  ],
  correct: 0,
  explanation: 'Class G is the only uncontrolled airspace — no ATC clearance is required to enter or operate within Class G, regardless of whether the flight is VFR or IFR. All other classes (A, C, D, E upper portions) require an ATC clearance for at least IFR operations (and VFR in A, C, D).',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under Australian regulations, a pilot must not act as PIC or co-pilot of an aircraft while suffering from any illness or condition that:',
  options: [
    'A. Requires any form of medication, provided CASA has been notified of the operation at least 24 hours in advance, subject to the pilot complet',
    'B. Impairs or is likely to impair the person\\\'s capacity to act as PIC or co-pilot — including physical illness, mental condition, fatigue, or any other state affecting performance',
    'C. Has caused them to visit a doctor in the preceding 30 days, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Would require them to have a medical certificate renewed early, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 1,
  explanation: 'Under the Civil Aviation Act and CASR Part 67, a pilot must not exercise flight crew duties when suffering from any condition that impairs or is likely to impair their capacity to fly safely. This is broader than just holding a medical certificate — even a licensed and medically current pilot must not fly if impaired by illness, fatigue, medication effects, or any other condition.',
  reference: 'Civil Aviation Act 1988 / CASR Part 67'
},

{
  question: 'Under the AIP, the transponder "squawk ident" function is used when:',
  options: [
    'A. ATC requests "SQUAWK IDENT" — the pilot then activates the IDENT function which causes the transponder return to bloom on the radar display, assisting ATC to identify the specific radar return from the aircraft',
    'B. Entering controlled airspace for the first time, subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'C. At every position report in non-radar airspace, subject to the requirements of the applicable Civil Aviation Order, provided the aircraft holds ',
    'D. When entering the ILS final approach course, subject to the pilot completing the required recurrent training within 12 months, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'IDENT causes the transponder to transmit an additional coded signal that makes the aircraft\\\'s radar return bloom (Special Position Identification — SPI) on the ATC radar display for approximately 15-20 seconds. It is only activated when ATC requests "SQUAWK IDENT." Pressing IDENT without instruction is poor practice and can confuse ATC.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'An aircraft equipped with ACAS (Airborne Collision Avoidance System) receives a Resolution Advisory (RA) while under ATC radar control. The pilot must:',
  options: [
    'A. Follow the RA immediately, then advise ATC of the deviation from the cleared altitude as soon as workload permits',
    'B. Advise ATC and await permission before manoeuvring, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Follow ATC instructions which take precedence over ACAS, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Manoeuvre only if the conflicting traffic is visible, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'ACAS/TCAS II RA: the pilot must respond immediately to the RA without waiting for ATC clearance. ATC instructions do NOT override an RA — the RA is based on direct aircraft-to-aircraft TCAS coordination and is more timely than ATC. After commencing the RA response, advise ATC immediately. When ATC issues conflicting instruction during an RA, the crew must follow the RA.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM / CASR Part 91'
},

{
  question: 'The required equipment for IFR flight in Australian controlled airspace includes:',
  options: [
    'A. DME only — all other navigation equipment is optional, provided a current instrument rating is held for the relevant aircraft category, subject to the operator's ap',
    'B. Only a GPS receiver — all other radio navigation aids are supplementary, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap',
    'C. Weather radar on all IFR flights, only when operating in Class C or Class D controlled airspace, except during the period of ',
    'D. Serviceable communications equipment on the applicable frequencies, a serviceable transponder with Mode C, and navigation equipment appropriate for the route — specific equipment requirements depend on the airspace class and route'
  ],
  correct: 3,
  explanation: 'IFR equipment requirements vary by route and airspace. Minimum for controlled airspace: serviceable VHF comms; serviceable transponder with Mode C (SIL/RTCA requirements for specific airspace). Navigation equipment: appropriate for the route (VOR, DME, ILS, GNSS as published on the chart and in the AIP). For high-level operations, ADS-B OUT is required. Check AIP ENR 1.1 and applicable charts.',
  reference: 'CASR Part 91 / CAO 20.18 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, an uncontrolled aerodrome in Class G airspace does not require a CTAF broadcast when:',
  options: [
    'A. The flight is IFR, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. The aerodrome has no current operations — but CTAF broadcasts are always required even at apparently empty aerodromes to warn any aircraft that may be joining',
    'C. There are never exemptions — CTAF broadcasts are mandatory at all times at any uncontrolled aerodrome',
    'D. The aerodrome is not a certified or registered aerodrome'
  ],
  correct: 2,
  explanation: 'CTAF broadcasts are required at all uncontrolled aerodromes whenever making radio calls there — approaching, joining, on final, backtracking, vacating. There is no exemption based on apparent lack of traffic. An aircraft in the blind may be on a non-radio approach. CTAF broadcasts provide safety information even to non-radio aircraft who may be listening.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under CAR, the dropping of articles from aircraft is:',
  options: [
    'A. Permitted at any time over unpopulated areas, subject to written approval from the operator's chief pilot, subject to the pilot complet',
    'B. Permitted over water at all times, provided CASA has been notified of the operation at least 24 hours in advance, except during the period of ',
    'C. Permitted from VFR aircraft below 1,500 ft AGL, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval ',
    'D. Prohibited unless authorised by CASA or in an emergency where jettisoning is necessary for safety — uncontrolled dropping of articles creates hazards to persons and property on the ground'
  ],
  correct: 3,
  explanation: 'Under CAR and CASR Part 91, dropping articles from an aircraft is prohibited except with CASA approval (for activities like parachuting, fire bombing, aerial advertising) or in a genuine emergency (fuel jettison, load shedding for safety). Dropping articles without authority that causes injury or damage is a serious offence with significant penalties.',
  reference: 'CAR Part XI / CASR Part 91'
},

{
  question: 'The purpose of reading back ATC instructions is to:',
  options: [
    'A. Provide ATC with confirmation that the message was received, subject to written approval from the operator's chief pilot, provided CASA has been notif',
    'B. Close the communication loop — confirm to ATC that the message was received AND correctly understood, giving ATC the opportunity to immediately correct any misheard or misunderstood instructions before they are acted upon',
    'C. Satisfy the requirement to use standard phraseology, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet',
    'D. Comply with the legal requirement that all ATC communications be recorded, except during the period of any declared low visibility procedures at the aerodrome, except when the operation in'
  ],
  correct: 1,
  explanation: 'Readbacks close the communication loop and are a critical safety layer. By reading back, the pilot confirms their understanding, and ATC can immediately correct errors. Studies show that readback errors (which ATC then correct) prevent accidents. The ICAO phraseology requirements specify what must be read back: cleared levels, headings, speeds, runway instructions, transponder codes, approach clearances.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'An ATPL holder who is not current on a type rating but holds a valid ATPL may:',
  options: [
    'A. Fly any aircraft on the licence — type ratings do not expire, subject to the pilot completing the required recurrent training within 12 months, provided a current instrumen',
    'B. Fly as co-pilot only with a current captain present regardless of their own currency, provided the currency requirement is met within the preceding 6 months',
    'C. Not exercise privileges on that aircraft type until recurrency is established — either through 3 take-offs and landings (within 12 months lapsed currency) or a proficiency check (more than 12 months lapsed)',
    'D. Fly for training purposes only with a qualified instructor on board, only when operating in Class C or Class D controlled airspace, subject to the requirements '
  ],
  correct: 2,
  explanation: 'Type rating currency requires 3 take-offs and landings in the preceding 90 days. If lapsed for less than 12 months, the pilot may conduct the flights (without an examiner) to restore currency. If lapsed more than 12 months, a proficiency check with an authorised examiner is required. An expired type rating currency prevents exercising PIC or co-pilot privileges on that type.',
  reference: 'CASR Part 61 MOS Schedule 3'
},

{
  question: 'For multi-engine turbine aircraft operating in CAT II ILS conditions, "fail-operational" (compared to "fail-passive") autopilot means:',
  options: [
    'A. The autopilot does not fail at any time, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class',
    'B. On a single failure, the approach can continue to autoland with the required accuracy — fail-passive means the autopilot disconnects on a single failure and the pilot takes over',
    'C. The autopilot is not required — "fail-operational" refers to the ILS equipment only, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Fail-operational is a higher RVR minimum than fail-passive, subject to written approval from the operator's chief pilot, provided the aircraft holds '
  ],
  correct: 1,
  explanation: 'Fail-operational autopilot: after a single failure, the aircraft can continue the approach and land automatically with the required precision. Fail-passive autopilot: a single failure causes the autopilot to disengage, requiring the pilot to take over (typically requiring CAT I minimums at that point). Fail-operational allows CAT III approaches with very low (or zero) decision heights. Most modern commercial aircraft have fail-operational systems for CAT III.',
  reference: 'ICAO Annex 6 / CASR Part 121 / CAO 82.3'
},

{
  question: 'An ATPL holder departs a non-controlled aerodrome on an IFR flight plan. Before the first radio call to ATC they must:',
  options: [
    'A. Have obtained an IFR airways clearance before entering controlled airspace — at a non-controlled aerodrome the pilot typically contacts ATC on the ground or by telephone for the IFR clearance before departure',
    'B. Be airborne and above circuit height, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'C. Only contact ATC when entering Class C airspace, provided a current instrument rating is held for the relevant aircraft category, provided the relevant aerodr',
    'D. File the flight plan in flight — telephone pre-filing is not required, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen'
  ],
  correct: 0,
  explanation: 'When departing IFR from a non-controlled aerodrome: obtain the IFR clearance before departing into controlled airspace (or before take-off if Class G below the CTA base). This is done by telephoning ATC (ACD/clearance delivery) or via radio before entering controlled airspace. Flying into Class C or A without a clearance is a serious airspace infringement.',
  reference: 'AIP ENR 1.1 / AIP ENR 1.5'
},

{
  question: 'The minimum equipment list (MEL) for an aircraft operating under an AOC cannot authorise dispatch with inoperative:',
  options: [
    'A. Any safety system — all safety systems must always be operational, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Any navigation equipment regardless of redundancy available, except when the operation involves more than 9 passenger seats',
    'C. Any equipment installed within the last 12 months, except when the operation involves more than 9 passenger seats',
    'D. Items that are required by ICAO Annex 6 or CASR to be operative at all times, or items for which the MMEL specifically states "may not be deferred"'
  ],
  correct: 3,
  explanation: 'The MEL is derived from the Master MEL (MMEL) issued by the regulator/manufacturer. Certain items cannot be included in the MEL and cannot be deferred — these are items required by regulation to be operative at all times or specifically excluded by the MMEL. Examples may include primary flight instruments for single-pilot operations, or emergency equipment with no alternative. The MEL cannot be more permissive than the MMEL.',
  reference: 'CASR Part 91 / MMEL provisions'
},

{
  question: 'Under Australian regulations, the "flight data recorder" (FDR) must be installed on:',
  options: [
    'A. All aircraft above 2,250 kg MTOW, subject to a weight restriction of 8,618 kg maximum take-off weight, except during the period of ',
    'B. Only aircraft with more than 19 passenger seats, subject to written approval from the operator's chief pilot, only if the operator holds a',
    'C. Turbine-powered aircraft above a specified MTOW threshold (generally above 5,700 kg in multi-crew operations) as prescribed by CASR and CAO 20.18 — specific requirements vary by aircraft category and operation type',
    'D. All commercial aircraft regardless of MTOW, only when operating in Class C or Class D controlled airspace, provided a current instrumen'
  ],
  correct: 2,
  explanation: 'FDR requirements depend on aircraft MTOW and operation type. Under CASR Part 91 and CAO 20.18, multi-crew turbine aircraft above specified MTOW thresholds must carry both an FDR and a CVR (Cockpit Voice Recorder). FDR and CVR data are critical for accident investigation. Requirements are complex — check the applicable CAO for the specific aircraft operation.',
  reference: 'CASR Part 91 / CAO 20.18 / ICAO Annex 6'
},

{
  question: 'Under Australian ATC procedures, when does ATC use the phrase "TRAFFIC INFORMATION"?',
  options: [
    'A. When advising a pilot of known conflicting traffic that ATC is not separating from — the pilot must maintain visual watch for the traffic and apply see-and-avoid',
    'B. Whenever any aircraft is within 100 nm, subject to the operator's approved exposition authorising such operations',
    'C. Only when the conflicting aircraft is on the same frequency, provided a current instrument rating is held for the relevant aircraft category',
    'D. When ATC is providing full separation from the traffic mentioned, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 0,
  explanation: '"Traffic information" (or "traffic advisory"): ATC is informing the pilot of known traffic that ATC is NOT providing separation from. The pilot must look for the traffic and exercise see-and-avoid. This contrasts with "essential traffic" where the pilots may be asked to accept own separation. The phrase "traffic information" alerts the crew to monitor but does not relieve ATC of its separation responsibilities for traffic it is separating.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'An ATPL holder who is acting as PIC on a single-pilot IFR charter receives an amended clearance that would take the aircraft into known severe icing. The correct response is:',
  options: [
    'A. Accept the clearance — ATC is responsible for route safety, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Accept the clearance but slow to turbulence penetration speed, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Declare an emergency before refusing any ATC clearance, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Decline the clearance, advise ATC that the clearance is not acceptable due to the icing hazard, and request an alternative clearance that avoids the icing area'
  ],
  correct: 3,
  explanation: 'The PIC may refuse any ATC clearance that would compromise safety. Severe icing exceeding the aircraft\\\'s certification is a valid safety reason to refuse a clearance. The pilot must advise ATC ("Unable due icing — request amended routing") and state what alternative is required. There is no requirement to declare an emergency simply to refuse a hazardous clearance.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under CASR, the term "pilot in command" means:',
  options: [
    'A. The most senior licenced person on board the aircraft, only if the operator holds a specific approval under their Air Operator Certificate, subject to the operator's ap',
    'B. Always the person with the highest licence grade on board, provided CASA has been notified of the operation at least 24 hours in advance, provided the relevant aerodr',
    'C. Any pilot at the controls of the aircraft, subject to the requirements of the applicable Civil Aviation Order, provided the aircraft holds ',
    'D. The pilot responsible for the operation and safety of the aircraft during flight time — designated by the operator or, where no specific designation is made, the pilot acting in that capacity'
  ],
  correct: 3,
  explanation: 'The PIC is the pilot designated by the operator as being responsible for the safe conduct of the flight. For commercial operations, the operator designates the PIC before each flight. The PIC has ultimate authority over the aircraft and is responsible for its safe operation from acceptance until the flight concludes. The PIC need not always be at the controls — a relief pilot may be handling the aircraft while the PIC manages.',
  reference: 'CASR Part 91 / Civil Aviation Act 1988'
},

{
  question: 'The AIP requires IFR flights to carry which minimum navigation capability for operations in RNAV-only airspace?',
  options: [
    'A. Approved RNAV system (typically GNSS-based or FMS with appropriate sensor inputs) meeting the navigation specification for the airspace — e.g. RNAV 5 for certain airways, RNP 1 for terminal areas',
    'B. Two independent ILS receivers, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr',
    'C. Only a VOR receiver — RNAV is always supplementary, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a',
    'D. A single GPS receiver without RAIM is sufficient for all RNAV operations, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 0,
  explanation: 'RNAV/RNP airspace requires aircraft to meet the relevant navigation specification — a defined level of accuracy, integrity, continuity and availability. Common Australian requirements: RNAV 5 (5 nm accuracy 95% of time) for certain airways; RNAV 1 for terminal areas; RNP APCH for GNSS approaches. The equipment must be approved for the relevant specification by CASA. Single GPS without RAIM generally does not meet integrity requirements.',
  reference: 'AIP ENR 1.5 / AIP ENR 4.1 / ICAO Doc 9613'
},

{
  question: 'Under CASR Part 119, an Air Operator Certificate (AOC) authorises the holder to:',
  options: [
    'A. Conduct the types of air transport operations specified in the AOC, with the aircraft types listed, under the conditions and limitations imposed by CASA',
    'B. Operate any aircraft registered in Australia without further approvals, subject to written approval from the operator's chief pilot',
    'C. Employ any licence holder as flight crew without further qualification requirements, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Modify the aircraft type in ways not covered by the type certificate, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 0,
  explanation: 'An AOC is a specific authorisation for specified types of air transport operations. It lists the approved aircraft types, the types of operations authorised (RPT, charter, aerial work), geographic limitations, and applicable conditions. The AOC holder must operate strictly within these limits. Adding a new aircraft type or operation type requires AOC amendment.',
  reference: 'CASR Part 119'
},

{
  question: 'Under CAO 82.3, the operator must ensure that a pilot does not act as PIC on a route unless the pilot holds:',
  options: [
    'A. A current ATPL only, provided a current instrument rating is held for the relevant aircraft category, subject to the operator's ap',
    'B. At least 100 hours on the aircraft type, except when the operation involves more than 9 passenger seats, subject to the operator's ap',
    'C. A route and aerodrome qualification (RAQ) for that specific route and aerodrome — demonstrating familiarity with the route terrain, weather, and instrument procedures',
    'D. The route qualification is only required for international operations, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'Route and Aerodrome Qualification (RAQ) under CAO 82.3 requires the PIC to be specifically qualified for each route and aerodrome. The qualification involves study of route documentation, terrain, special procedures, and approach charts. It may be achieved by prior flight on the route or by CASA-approved self-study methods. This is separate from the type rating — it covers operational knowledge of the specific route.',
  reference: 'CAO 82.3 / CASR Part 121'
},

{
  question: 'A turbine-powered aircraft operating under an RPT AOC must carry a minimum fuel load of:',
  options: [
    'A. Fuel for the flight plus 30 minutes reserve only, provided the pilot has logged at least 3 hours on type in the preceding 90 days, except during the period of ',
    'B. Fuel for the flight to destination plus 45 minutes at cruise power, subject to the operator's approved exposition authorising such operations, except during the period of ',
    'C. Fuel for twice the planned flight time as a safety factor, provided the pilot has logged at least 3 hours on type in the preceding 90 days, except during the period of ',
    'D. Fuel for the planned flight (including taxi), a missed approach, flight to the nominated alternate at the appropriate speed/altitude, an approach at the alternate, and the prescribed final reserve (typically 30 minutes at holding speed at 1,500 ft)'
  ],
  correct: 3,
  explanation: 'RPT fuel requirements (CASR Part 91 / CAO 82.0): taxi fuel + trip fuel + contingency fuel + alternate fuel (destination approach, missed approach, alternate flight, alternate approach) + final reserve (30 min holding at 1,500 ft for turbine). The alternate fuel is only required if an alternate is mandated. Final reserve is the last safety net — it must not be planned to be used.',
  reference: 'CASR Part 91 / CAO 82.0'
},

{
  question: 'The "80/80 rule" for IFR alternate planning (CASR Part 91) means:',
  options: [
    'A. An alternate is NOT required if the forecast visibility and ceiling at the destination is at or above 800 m and 800 ft respectively during the period ETA ±1 hour and a precision approach is available',
    'B. The alternate must be within 80 nm of the destination, provided the currency requirement is met within the preceding 6 months, provided the relevant aerodr',
    'C. The aircraft must carry 80% fuel capacity as a minimum, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'D. 80 minutes of reserve fuel for all turbine aircraft on IFR flights, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds '
  ],
  correct: 0,
  explanation: 'The AIP/CASR alternate planning rule (sometimes called "alternate required" criteria): if the TAF for the destination from 1 hour before to 1 hour after ETA forecasts ceiling below 800 ft (approximately 240 m) or visibility below 800 m, an alternate must be nominated. If forecast conditions are at or above 800 ft/800 m AND a precision approach is available, no alternate is required. Different thresholds apply when only a non-precision approach is available.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, an RPT operator conducting turnaround operations at a remote airport where no maintenance engineer is available must:',
  options: [
    'A. Have the flight crew trained in and authorised to conduct specified pre-departure checks and minor serviceability assessments as approved in the operator\\\'s maintenance programme, with clear authority limits',
    'B. Leave the aircraft and return for maintenance, subject to written approval from the operator's chief pilot, subject to the operator's ap',
    'C. Fly the aircraft back to base immediately regardless of defects found, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet',
    'D. The remote aerodrome operations are prohibited without on-site engineering support, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'Remote operations without engineering support require prior planning: operators must have approved procedures for turnaround inspections and minor serviceability checks by authorised flight crew. The authority limits must be clear — crew cannot perform maintenance beyond their authorisation. Major defects must be handled by qualified engineers even if this means extended ground time or repositioning.',
  reference: 'CAO 82.3 / CASR Part 43'
},

{
  question: 'Under CASR Part 121, an aircraft conducting scheduled RPT operations is required to carry a "cockpit voice recorder" (CVR). The CVR must:',
  options: [
    'A. Record at least 30 minutes of the most recent audio, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'B. Record only the ATC communications for regulatory purposes, subject to the operator's approved exposition authorising such operations, provided the aircraft holds ',
    'C. Record at least the last 2 hours of audio from each flight crew interphone channel, ATC communications, and the area microphone in the flight crew compartment — and be protected from fire and impact',
    'D. Be operator-controlled and may be erased between flights, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr'
  ],
  correct: 2,
  explanation: 'CVR requirements (ICAO Annex 6 / CAO 20.18): must record at least 2 hours; must capture flight crew interphone, ATC, and area (cockpit environment) audio; must be crash and fire protected; must not be erasable by the crew during normal operations. CVR data is essential for accident investigation. After an accident/incident, the CVR must be preserved and not overwritten.',
  reference: 'CAO 20.18 / ICAO Annex 6'
},

{
  question: 'An RPT operator uses a "Pilot Not Flying" (PNF/PM) concept. The primary responsibilities of the PNF during approach include:',
  options: [
    'A. Monitoring the passengers through the cabin camera, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'B. Only managing the radios — flight instruments are the PF\\\'s responsibility, subject to the operator's approved exposition authorising such operations',
    'C. Monitoring all aircraft systems, calling out deviations from standard profiles, managing communications, completing checklists, and being prepared to take control immediately if required',
    'D. The PNF has no defined responsibilities — they simply observe, except when the operation involves more than 9 passenger seats, except during the period of '
  ],
  correct: 2,
  explanation: 'Pilot Monitoring (PM/PNF) responsibilities during approach: monitor all flight instruments; call out deviations ("100 above," "10 knots fast," "localiser alive"); manage ATC communications; complete approach checklists; call approaching minimums; call "STABLE/UNSTABLE" at gates; and be prepared to take control if the PF is incapacitated. The PM\\\'s active monitoring is a critical defence against approach errors.',
  reference: 'CASR Part 121 / Operator SOPs / ICAO Human Factors'
},

{
  question: 'Under CASR Part 121, the flight crew complement for a B737 (which requires a minimum crew of 2) may be reduced to one pilot for:',
  options: [
    'A. Domestic flights of less than 2 hours duration, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Training flights where the instructor acts as pilot in command, except during the period of any declared low visibility procedures at the aerodrome',
    'C. Ferry flights without passengers, provided a current instrument rating is held for the relevant aircraft category',
    'D. Never — an aircraft with a minimum crew of 2 must always have 2 qualified pilots; the minimum cannot be reduced below the AFM requirement'
  ],
  correct: 3,
  explanation: 'An aircraft with a minimum crew of 2 (as specified in the type certificate and AFM) cannot be operated with only one pilot. This is an absolute requirement — even for ferry flights, training flights, or domestic short sectors, the minimum crew must be maintained. The AFM minimum is the legal minimum for any flight.',
  reference: 'CASR Part 121 / AFM'
},

{
  question: 'For an airline operating under CAO 82.3, the "head of air operations" must be:',
  options: [
    'A. A person who holds or has held an appropriate licence and has sufficient operational experience to effectively supervise and control flight operations — typically an ATPL holder with operational experience',
    'B. A person with airline management experience only — no pilot qualification is required, subject to written approval from the operator's chief pilot, except during the period of ',
    'C. Appointed by the airline\\\'s Board — CASA has no role in their appointment, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. A CASA-employed inspector seconded to the operator, only if the operator holds a specific approval under their Air Operator Certificate, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'Under CAO 82.3, the head of operations (Chief Pilot) must be acceptable to CASA and hold appropriate qualifications and experience. CASA must be satisfied that the Chief Pilot is competent to exercise supervision over the operator\\\'s flight operations. This position is a "key person" position under the AOC — changes require CASA notification and assessment.',
  reference: 'CAO 82.3 / CASR Part 119'
},

{
  question: 'Under Australian RPT regulations, the term "augmented crew" refers to:',
  options: [
    'A. Any additional staff on board the aircraft beyond the minimum crew, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Flight crew in excess of the minimum required for the operation, carried to allow in-flight rest on long-haul operations — enabling the total duty and flight time to be extended within CAO 48.1 limits',
    'C. Crew who have received special endorsement training only, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the requirements ',
    'D. Ground crew members riding in the cockpit jump seat, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements '
  ],
  correct: 1,
  explanation: 'Augmented crew: additional flight crew beyond the minimum to allow in-flight relief (rest) on ultra-long range operations. Under CAO 48.1, augmented crew operations allow extended flight time limits (e.g. up to 16+ hours with 2 crew resting). The augmenting crew may perform cruise duties but not take-off or landing (depending on the operation). The resting crew must have access to an approved rest facility.',
  reference: 'CAO 48.1 / CASR Part 121'
},

{
  question: 'Under Australian regulations, an aircraft must not take off if the take-off run available (TORA) is less than:',
  options: [
    'A. The take-off distance calculated for the actual conditions plus a fixed 10% margin, only when operating in Class C or Class D controlled airspace',
    'B. The calculated take-off distance required for the actual weight, density altitude, flap setting, wind, and runway condition, accounting for applicable wet/contaminated runway factors',
    'C. 1,000 m for any turbine aircraft regardless of weight, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The take-off run required at sea level ISA standard conditions, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'Take-off performance must be calculated for actual conditions: weight, density altitude (temperature + elevation), wind component (factored), runway condition (dry, wet, contaminated), gradient, obstacles. The actual TORA/TODA/ASDA must equal or exceed the calculated requirement. Most countries require a performance margin (e.g. 115% dry, higher for wet) above the gross performance. The AFM or performance manual provides the data.',
  reference: 'CASR Part 91 / CAO 82.0 / AFM'
},

{
  question: 'The take-off decision speed "V1" is defined as:',
  options: [
    'A. The speed at which the aircraft must be airborne to clear obstacles, provided CASA has been notified of the operation at least 24 hours in advance, subject to the requirements ',
    'B. The speed at which the nosewheel lifts from the runway, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'C. The speed at which the aircraft is rotated to take-off attitude, only if the operator holds a specific approval under their Air Operator Certificate, subject to written approval ',
    'D. The maximum speed at which the take-off can be rejected and the aircraft brought to a stop within the available runway — also the minimum speed from which, in case of engine failure, the take-off can be continued and the aircraft still achieve safe climb'
  ],
  correct: 3,
  explanation: 'V1 is the take-off decision speed. At or before V1, the PIC must decide to reject or continue the take-off. After V1, the take-off must continue even with an engine failure — the aircraft is certified to continue the take-off and achieve the required climb performance. V1 balances the accelerate-stop distance against the accelerate-go distance. V1 is never greater than VR.',
  reference: 'CASR Part 25 / AFM'
},

{
  question: 'The rotation speed "Vr" and lift-off speed "Vlof" — which occurs first?',
  options: [
    'A. Vr — the aircraft is rotated to the take-off attitude at Vr, then lifts off at Vlof which is slightly higher',
    'B. Vlof — the aircraft lifts off before the rotation command, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. They always occur at the same speed simultaneously, subject to the pilot completing the required recurrent training within 12 months',
    'D. On a wet runway, Vlof occurs before Vr, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: 'The sequence: V1 (decision) → Vr (rotate) → Vlof (lift-off) → V2 (screen height speed). At Vr, the pilot applies back pressure to rotate to the take-off attitude. The aircraft lifts off at Vlof (slightly higher than Vr as the pitch attitude increases and lift builds). V2 is the minimum screen height speed — the aircraft must achieve at least V2 when crossing the 35 ft obstacle clearance height.',
  reference: 'CASR Part 25 / AFM'
},

{
  question: 'The "accelerate-stop distance available" (ASDA) for take-off is the:',
  options: [
    'A. Total runway length only, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. TORA minus 300 m safety margin, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Runway length available for normal operations excluding the stopway, subject to written approval from the operator's chief pilot',
    'D. TORA plus any stopway — the total distance available to accelerate to V1 and then bring the aircraft to a stop in case of a rejected take-off'
  ],
  correct: 3,
  explanation: 'ASDA = TORA + stopway. A stopway is a prepared area beyond the runway end that can support the aircraft during a rejected take-off. The stopway may not be usable for the take-off run but extends the stopping distance available. ASDA is used to calculate the maximum weight for a rejected take-off. TODA = TORA + clearway (a clear area beyond runway for climb).',
  reference: 'ICAO Annex 14 / CASR Part 139'
},

{
  question: 'For a performance-A turboprop aircraft, the minimum net take-off flight path must clear all obstacles by:',
  options: [
    'A. 50 ft, provided a current instrument rating is held for the relevant aircraft category',
    'B. 35 ft in the initial climb phase and 1,000 ft when en-route obstacles are encountered',
    'C. 300 ft above the highest obstacle in the flight path up to 1,500 ft above the take-off surface',
    'D. 35 ft within the take-off path width, increasing to 50 ft at the boundary of the cleared area'
  ],
  correct: 3,
  explanation: 'For Performance Class A aircraft (large transport category), the net take-off flight path (gross minus a factor for conservatism) must clear all obstacles by at least 35 ft (and specific horizontal distances). This is calculated from the end of the take-off distance to 1,500 ft above the take-off surface. Obstacle charts and operator procedures specify the required clearance path.',
  reference: 'CASR Part 25 / CAO 82.0'
},

{
  question: 'Under Australian regulations, the "WAT limit" (Weight, Altitude, Temperature) determines:',
  options: [
    'A. The maximum take-off weight based solely on structural limits, subject to the operator's approved exposition authorising such operations, except when the operation in',
    'B. The weight at which the aircraft\\\'s landing performance becomes critical, but only for aircraft not exceeding 15,000 kg MTOW, except when the operation in',
    'C. Fuel required for the flight — WAT limits define minimum fuel not maximum weight, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a',
    'D. The maximum take-off weight for a given pressure altitude and OAT, ensuring the aircraft can meet minimum climb performance requirements with one engine inoperative — the maximum weight may be less than MTOW at high/hot conditions'
  ],
  correct: 3,
  explanation: 'WAT limits define the maximum take-off weight at a given altitude and temperature to ensure the aircraft can meet minimum climb gradient requirements with one engine inoperative (OEI). At high altitude and/or high temperature, engine performance decreases and the maximum allowable weight must be reduced to meet the required OEI climb gradient. WAT limits may be below MTOW at high/hot aerodromes.',
  reference: 'CASR Part 25 / CAO 82.0 / AFM'
},

{
  question: 'Under CASR Part 121, the minimum equipment required before flight includes a serviceable Enhanced Ground Proximity Warning System (EGPWS/TAWS) for:',
  options: [
    'A. All turbine-powered aircraft regardless of MTOW, subject to a weight restriction of 8,618 kg maximum take-off weight, except during the period of ',
    'B. Multi-engine turbine aeroplanes used for RPT operations above specified MTOW thresholds as prescribed in the applicable CAO — basic GPWS or TAWS depending on aircraft age and category',
    'C. Only helicopters operating over mountainous terrain, subject to the pilot completing the required recurrent training within 12 months',
    'D. Only aircraft conducting international operations, except when the operation involves more than 9 passenger seats, provided the aircraft holds '
  ],
  correct: 1,
  explanation: 'EGPWS/TAWS requirements depend on aircraft category and MTOW. Under CAO 20.18 and CASR Part 91, turbine multi-crew RPT aircraft above approximately 5,700 kg require at minimum basic GPWS, and newer/heavier aircraft require TAWS (forward-looking terrain awareness). These systems are critical CFIT prevention tools and must be serviceable — MEL provisions are restrictive.',
  reference: 'CAO 20.18 / CASR Part 91'
},

{
  question: 'A crew member who believes the captain is making a poor decision that may compromise safety should, according to CRM best practice:',
  options: [
    'A. Remain quiet — challenging the captain is insubordination, except during the period of any declared low visibility procedures at the aerodrome, only if the operator holds a',
    'B. Immediately contact the company operations centre on the second radio, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in',
    'C. Document the concern for the post-flight debrief only, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'D. Use assertive communication to clearly state the concern, using "I" statements and specific observable facts — if the concern is not acknowledged, escalate appropriately using a graduated advocacy approach'
  ],
  correct: 3,
  explanation: 'CRM advocacy: crew members must speak up about safety concerns. The recommended approach: (1) State the concern clearly ("I\\\'m concerned about..."); (2) Suggest an alternative ("What if we..."); (3) Escalate if not acknowledged ("Captain, I need you to reconsider this"). The final safety net if the captain is clearly making a dangerous decision is for the PM to be prepared to take control. A culture of non-advocacy is a contributing factor in numerous accidents.',
  reference: 'ICAO Human Factors / CASR Part 121 / CRM training'
},

{
  question: 'Under Australian regulations, "crew resource management" (CRM) training is required for:',
  options: [
    'A. Captains only — first officers learn CRM by observation, subject to the pilot completing the required recurrent training within 12 months',
    'B. Only new-entrant pilots during type rating training, subject to the requirements of the applicable Civil Aviation Order, provided the relevant aerodr',
    'C. CRM training is voluntary — no regulatory requirement exists, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. All flight crew involved in multi-crew operations, and must be integrated into recurrent training programmes — initial CRM and annual CRM refreshers are required under CASR Part 121'
  ],
  correct: 3,
  explanation: 'CRM training is mandatory under CASR Part 121 and CAO 82.3 for multi-crew operations. Requirements: initial CRM training (before line operations); annual refresher training integrated with simulator recurrent training; human factors education covering threat and error management, situational awareness, communication, and decision-making. The effectiveness of CRM training in reducing accident rates is well documented.',
  reference: 'CASR Part 121 / CAO 82.3'
},

{
  question: 'The concept of "Threat and Error Management" (TEM) in aviation means:',
  options: [
    'A. A post-accident investigation technique only, only when operating in Class C or Class D controlled airspace, except when the operation in',
    'B. An ATC procedure for managing radar conflicts, provided a current instrument rating is held for the relevant aircraft category, except during the period of ',
    'C. A proactive approach where crews identify threats before they become errors, manage errors when they occur, and implement counter-measures to prevent undesired aircraft states — it forms the framework for modern CRM',
    'D. A maintenance quality control process, only when operating in Class C or Class D controlled airspace, provided the relevant aerodr'
  ],
  correct: 2,
  explanation: 'Threat and Error Management (TEM): threats are conditions that increase the potential for error (weather, terrain, unusual routing, aircraft abnormalities, distractions); errors are deviations from intended actions; undesired aircraft states are the consequences of unmanaged errors (wrong altitude, off-course). CRM training teaches crews to identify threats early, manage errors when they occur, and recover from undesired states before they become accidents.',
  reference: 'ICAO Human Factors Doc 9683 / CASR Part 121'
},

{
  question: 'Under the AIP, a "Continuous Descent Final Approach" (CDFA) technique is recommended because:',
  options: [
    'A. It reduces the risk of Controlled Flight Into Terrain (CFIT) by eliminating the stabilised-level flight at MDA that characterises traditional dive-and-drive approaches, replacing it with a continuous descent to a calculated decision point',
    'B. It allows the aircraft to fly a shallower approach than published, subject to the pilot completing the required recurrent training within 12 months, subject to the requirements ',
    'C. It reduces fuel consumption on all approaches, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'D. CDFA is only applicable to precision approach procedures, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided CASA has been notif'
  ],
  correct: 0,
  explanation: 'CDFA involves a continuous descent from the FAF altitude to the threshold (or a DA equivalent to the MDA). Unlike "dive and drive" (descend to MDA, fly level until MAP), CDFA maintains energy management and reduces the risk of controlled flight into terrain. ICAO promotes CDFA for all non-precision approaches. The MDA becomes a calculated DA based on the approach geometry.',
  reference: 'AIP ENR 1.5 / ICAO Circular 303'
},

{
  question: 'Under CAO 48.1, the maximum continuous duty period (flight duty period, FDP) for a two-pilot crew on an RPT operation commencing at a local time between 06:00 and 07:59 is:',
  options: [
    'A. 10 hours',
    'B. 13 hours',
    'C. 12 hours',
    'D. 14 hours'
  ],
  correct: 1,
  explanation: 'Under CAO 48.1 Table A, the maximum FDP for a 2-crew operation depends on the report time. For a report time between 0600-0759 local time, the maximum FDP is 13 hours. FDPs starting at less favourable times (night) are shorter. Extensions may be available under specific conditions. These limits are absolute — the crew must not exceed them.',
  reference: 'CAO 48.1'
},

{
  question: 'The "crosswind component" limitation for an aircraft is:',
  options: [
    'A. The same for all runways regardless of surface condition, subject to written approval from the operator's chief pilot, subject to the requirements ',
    'B. The maximum wind speed at 90° to the runway allowed under ATC rules, provided a current instrument rating is held for the relevant aircraft category, only when operating in Class',
    'C. Specified in the NOTAM for each aerodrome, provided the aircraft holds a valid maintenance release and is within weight limits, only when operating in Class',
    'D. A limitation specified in the AFM (demonstrated crosswind component) — the demonstrated crosswind may not be a maximum limit but rather the maximum value demonstrated during certification. Operators may impose lower limits, and contaminated/wet runway crosswind limits may be lower'
  ],
  correct: 3,
  explanation: 'Crosswind limitations come from the AFM, which specifies the "demonstrated" crosswind component. "Demonstrated" means the maximum crosswind at which landings were conducted during certification — it is not necessarily an absolute limit. However, operators typically use it as an operational limit. Contaminated runway crosswind limits are generally lower. Company SOPs may impose more restrictive limits than the AFM demonstrates.',
  reference: 'AFM / CAO 82.0'
},

{
  question: 'During a line check, the check captain (check pilot) observes the crew member making a procedural error that does not affect safety. The check captain should:',
  options: [
    'A. Take over the aircraft immediately and correct the error, provided a current instrument rating is held for the relevant aircraft category',
    'B. Allow the crew member to continue (unless safety is at risk), note the error for the debrief, and provide constructive feedback at the appropriate time',
    'C. Fail the check immediately for any procedural error, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Intervene and document nothing, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 1,
  explanation: 'Check captains observe and document performance — they intervene only if safety is at risk. Minor procedural errors are noted for the debrief where they can be discussed constructively. Interrupting for every minor error prevents the check captain from observing the crew\\\'s ability to self-identify and correct errors, and it makes the assessment unrealistic. Post-flight debrief is where corrective action is addressed.',
  reference: 'CASR Part 121 / CAO 82.3 / Check captain training'
},

{
  question: 'The "decision point" in planning a diversion to an alternate is when:',
  options: [
    'A. The fuel state reaches the minimum required to divert to the alternate with prescribed reserves — the decision to divert must be made while sufficient fuel remains for the diversion; not after a missed approach with minimum fuel',
    'B. The aircraft is on final approach and the runway is not visible, subject to written approval from the operator's chief pilot, except when the operation in',
    'C. The first ATC instruction to hold is received, provided CASA has been notified of the operation at least 24 hours in advance, subject to the requirements ',
    'D. The flight is beyond the point of no return for the destination, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to written approval '
  ],
  correct: 0,
  explanation: 'The decision to divert must be made early enough that sufficient fuel remains for: the diversion flight to alternate; the alternate approach; and the prescribed final reserve. If the decision is made after a missed approach at minimum fuel, the crew may have insufficient fuel for the alternate approach. Pre-flight decision points should be established based on ETA fuel state.',
  reference: 'CASR Part 91 / Airline operational practices'
},

{
  question: 'Under CASR Part 121, the operator must ensure that no crew member commences a flight duty period when:',
  options: [
    'A. They have been on annual leave for more than 28 days, except during the period of any declared low visibility procedures at the aerodrome',
    'B. The weather forecast for the route is below VMC, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a',
    'C. They have not had the minimum required rest period immediately before the duty period — the minimum rest must include the prescribed hours free from all duty obligations',
    'D. The crew member has a cold — any illness requires 3 days off under the regulations, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 2,
  explanation: 'The operator has an obligation to ensure minimum rest is provided between duty periods. This is not just a scheduling requirement — the operator must actively manage crew rest, not just record it. If minimum rest has not been provided (due to extended previous duty, accommodation issues, etc.), the crew member must not commence the new FDP.',
  reference: 'CAO 48.1 / CASR Part 121'
},

{
  question: 'A co-pilot acts as PIC on a sector under a "cruise captain" arrangement. The company exposition defines this clearly. After the flight, who logs PIC time?',
  options: [
    'A. The rated captain who was monitoring the flight logs PIC time',
    'B. The co-pilot who was designated and acted as PIC for the sector logs PIC time for that sector',
    'C. Both pilots log PIC time — shared PIC credit is standard',
    'D. Neither pilot logs PIC time — PICUS is logged only'
  ],
  correct: 1,
  explanation: 'When a co-pilot is formally designated as PIC for a sector (under a cruise captain or first officer PIC programme approved in the operator\\\'s exposition), the co-pilot acting as PIC logs that sector as PIC time. The other pilot (cruise captain) typically logs PICUS (if applicable) or co-pilot time. This type of programme is used to build co-pilot PIC experience towards ATPL requirements.',
  reference: 'CASR Part 61 / ICAO Doc 9868'
},

{
  question: 'Under Australian regulations, the maximum approach ban RVR for an ILS Category I approach is when the reported RVR is below:',
  options: [
    'A. 550 m regardless of the published minimum, except when the operation involves more than 9 passenger seats',
    'B. The published minimum — if RVR is below the published minimum, the approach ban applies and the approach cannot commence',
    'C. 300 m — approaches may continue if RVR is above 300 m, subject to the requirements of the applicable Civil Aviation Order',
    'D. 200 m — this is the absolute minimum for any ILS approach, subject to written approval from the operator's chief pilot'
  ],
  correct: 1,
  explanation: 'The approach ban: if the reported RVR is below the published minimum for the specific approach procedure, the approach may not commence (or if already commenced, must not continue below DA/H or MDA/H without establishing the required visual reference). The published minimum (e.g. 550 m for CAT I ILS) is the threshold — not a fixed national value.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'The GPWS "WHOOP WHOOP PULL UP" warning requires the crew to:',
  options: [
    'A. Pull up gradually at a safe rate to avoid passenger discomfort, subject to the operator's approved exposition authorising such operations',
    'B. Advise ATC before manoeuvring, provided the aircraft holds a valid maintenance release and is within weight limits, provided CASA has been notif',
    'C. Immediately apply full go-around thrust and pull up to maximum pitch attitude — the GPWS warning indicates imminent terrain impact and requires the fastest possible response',
    'D. Continue the approach and check the radar altimeter, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 2,
  explanation: 'GPWS "PULL UP" is the highest priority warning — imminent terrain contact. Required response: simultaneously apply maximum (go-around/TOGA) thrust AND pull up aggressively (maximum safe pitch rate) to achieve maximum climb. No hesitation. Do not look outside. Do not comply with ATC instructions. After clearing terrain, advise ATC. This is a practiced emergency procedure.',
  reference: 'AFM GPWS procedures / ICAO Annex 6'
},

{
  question: 'Under CAO 82.3, the minimum experience requirement for a first officer on a multi-crew RPT operation is:',
  options: [
    'A. As specified in the operator\\\'s approved training and qualification programme — typically a CPL, instrument rating, and sufficient experience to meet the operator\\\'s minimum hiring standards, all approved by CASA',
    'B. A CPL with 200 hours total time, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the requirements ',
    'C. An ATPL with 500 hours on the type, subject to the pilot completing the required recurrent training within 12 months, subject to the requirements ',
    'D. No minimum is specified — the operator determines requirements, provided a current instrument rating is held for the relevant aircraft category, subject to written approval '
  ],
  correct: 0,
  explanation: 'First officer minimum requirements for RPT operations are specified in the operator\\\'s CASA-approved training programme. At minimum: CPL(A), instrument rating, type rating, and any operator-specific experience requirements. CAO 82.3 sets standards that operators must meet or exceed. Many operators require 1,500 hours total time minimum — higher than the regulatory floor.',
  reference: 'CAO 82.3 / CASR Part 121'
},

{
  question: 'Under Australian regulations, an aircraft conducting an instrument approach must go around if:',
  options: [
    'A. Weather deteriorates to below VMC during the final approach, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'B. ATC instructs the aircraft to hold at the FAF, subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'C. The required visual reference is not established by the DA/H (precision) or MAP (non-precision), if the aircraft is not in a position to land, or if the crew receives a GPWS/TAWS or TCAS RA requiring a climb',
    'D. The approach is not stabilised at 1,500 ft AAL, except during the period of any declared low visibility procedures at the aerodrome, provided the aircraft holds '
  ],
  correct: 2,
  explanation: 'Mandatory go-around situations: (1) DA/H or MAP reached without required visual reference; (2) visual reference lost after DA/H; (3) aircraft not in position for a safe landing (unstabilised, off-course, wrong configuration); (4) GPWS/TAWS PULL UP warning; (5) TCAS RA requiring climb; (6) ATC missed approach instruction. Unstabilised approaches below the defined gate altitude (500 ft IMC) should also result in a go-around per standard operating procedures.',
  reference: 'AIP ENR 1.5 / Operator SOPs / CASR Part 91'
},

{
  question: 'The "sterile cockpit" altitude gate in many airline SOPs is set at 10,000 ft. This means below 10,000 ft:',
  options: [
    'A. The autopilot must be disengaged, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval ',
    'B. Crew conversation must be limited to tasks directly related to the operation of the aircraft — checklists, abnormal procedures, aircraft control, and safety communications only',
    'C. The co-pilot cannot operate the radios, provided CASA has been notified of the operation at least 24 hours in advance, provided the relevant aerodr',
    'D. Passengers must be seated and seatbelts fastened only, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: 'Below 10,000 ft, the sterile cockpit SOP limits crew conversation strictly to: aircraft control; checklists (normal and abnormal); ATC communications; and safety-related topics. Non-essential conversation (company news, personal topics, crew discussions unrelated to the flight) is prohibited. This is a critical safety SOP developed after investigation of approach and departure accidents attributed to crew distraction.',
  reference: 'CASR Part 121 / Operator SOPs'
},

{
  question: 'Under Australian regulations, the aerodrome "rescue and fire fighting service" (RFFS) must respond to an accident site within:',
  options: [
    'A. 3 minutes at all aerodromes, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'B. As specified for the aerodrome RFFS category — typically 3 minutes (high-traffic aerodromes, Categories 7–10) to first foam application on the critical area, with different response criteria for lower-category aerodromes',
    'C. 10 minutes for Category 3 aerodromes, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'D. The required response time is 90 seconds for all certified aerodromes, subject to written approval from the operator's chief pilot, subject to the requirements '
  ],
  correct: 1,
  explanation: 'RFFS response times are specified by aerodrome category. For high-category aerodromes (Category 7–10, large commercial jets), the required response time is typically within 3 minutes to the critical area with foam attack capable. Lower-category aerodromes (Categories 1–6) have different criteria. Response time requirements ensure fire suppression can begin before fuselage penetration allows rescue.',
  reference: 'CASR Part 139 / ICAO Annex 14'
},

{
  question: 'For a wet runway, the take-off performance calculation must account for:',
  options: [
    'A. No modification — wet runway performance is always identical to dry, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds ',
    'B. Reduced braking effectiveness during RTO; possible aquaplaning at high speeds; reduced tyre-runway friction; and potentially lower maximum demonstrated crosswind — wet runway factors increase take-off distances',
    'C. Only increased fuel consumption on wet surfaces, provided CASA has been notified of the operation at least 24 hours in advance, subject to the pilot complet',
    'D. Additional drag from water spray only, provided the aircraft holds a valid maintenance release and is within weight limits, provided the relevant aerodr'
  ],
  correct: 1,
  explanation: 'Wet runway performance considerations: reduced braking coefficient (braking distances increase significantly); potential aquaplaning above the hydroplane speed (√9P where P = tyre pressure in psi); reduced friction affecting accelerate-stop distance; and wet runway crosswind limits. The AFM or performance manual provides wet runway take-off data — the maximum take-off weight on a wet runway is typically lower than on a dry runway.',
  reference: 'CASR Part 25 / AFM wet runway data'
},

{
  question: 'The landing distance required on a wet runway compared to a dry runway is typically:',
  options: [
    'A. The same — wet runway only affects take-off performance, subject to the requirements of the applicable Civil Aviation Order',
    'B. Shorter — water on the runway acts as a lubricant reducing rolling friction, subject to the requirements of the applicable Civil Aviation Order',
    'C. Landing distance is unaffected by surface conditions — only wind matters, subject to the operator's approved exposition authorising such operations',
    'D. Longer — braking coefficient on a wet runway is reduced compared to dry, increasing the distance to stop. A factor of 1.15 (15% increase) is commonly applied for wet runways'
  ],
  correct: 3,
  explanation: 'Landing on a wet runway: braking friction is reduced (typically requiring ~15% more landing distance than dry). Aquaplaning can occur at high speeds, further reducing braking. Performance charts provide wet runway landing data. The regulatory minimum landing weight may be reduced from dry capability. Always use the correct runway surface condition data from the performance charts.',
  reference: 'CASR Part 25 / AFM / AIP ENR 1.5'
},

{
  question: 'Under CASR Part 91, the pilot in command is required to ensure a passenger safety demonstration is completed before:',
  options: [
    'A. Every flight carrying passengers in an air transport operation — the demonstration must cover seatbelts, emergency exits, flotation devices (if applicable), and oxygen (if pressurised)',
    'B. Only international flights, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif',
    'C. Only the first flight of each day, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr',
    'D. Only when passengers request the briefing, subject to the operator's approved exposition authorising such operations, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'The passenger safety briefing/demonstration is required before every commercial flight carrying passengers. It is not a one-time event — it must be completed for every sector. Cabin crew conduct the demonstration or video, but the PIC is responsible for ensuring it occurs. ATPL holders must ensure compliance with this safety requirement as part of their PIC responsibility.',
  reference: 'CAO 20.7 / CASR Part 121'
},

{
  question: 'An RPT aircraft makes an unplanned landing at a non-scheduled aerodrome due to weather. The PIC\\\'s responsibilities include:',
  options: [
    'A. Fuel the aircraft and depart as soon as the weather clears without further action, provided CASA has been notified of the operation at least 24 hours in advance, subject to the pilot complet',
    'B. Calling CASA to notify the diversion, except during the period of any declared low visibility procedures at the aerodrome, provided a current instrumen',
    'C. Advising the company of the diversion, ensuring passengers are cared for, assessing the aerodrome for suitability for the aircraft type, checking fuel availability and serviceability, and determining whether the aircraft is fit to continue (fuel, maintenance release, weather at diversion aerodrome)',
    'D. Completing the original flight plan to the scheduled destination regardless of diversion, provided the aircraft holds a valid maintenance release and is within weight limits, provided the relevant aerodr'
  ],
  correct: 2,
  explanation: 'Unscheduled diversion responsibilities: advise company immediately; care for passengers (meals, accommodation if extended); assess the diversion aerodrome for the aircraft type (RFFS category, runway length, weight limit); check fuel availability and quality; assess maintenance release validity; determine weather at destination for continuation; brief crew. The PIC cannot simply depart without this assessment.',
  reference: 'CASR Part 91 / CAO 82.3'
},

{
  question: 'Under Australian RPT regulations, "positive transfer of control" between pilots means:',
  options: [
    'A. The autopilot engages when the PF lets go of the controls, only when operating in Class C or Class D controlled airspace, provided CASA has been notif',
    'B. The co-pilot becoming PIC when the captain leaves the flight deck, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Only a formal written transfer of responsibility is acceptable, subject to written approval from the operator's chief pilot, provided the aircraft holds ',
    'D. An explicit verbal exchange ("You have control" — "I have control") confirming which pilot is actively flying the aircraft — ambiguity about who is flying has been a contributing factor in accidents'
  ],
  correct: 3,
  explanation: 'Positive transfer of control: the transfer must be explicit and confirmed. Standard phrasing: PF says "You have control," PM responds "I have control," PF confirms "You have control." Only after confirmation is control transferred. This prevents the critical danger of both pilots believing the other is flying (dual incapacitation scenario). The concept is fundamental to multi-crew SOP.',
  reference: 'CASR Part 121 / Operator SOPs / ICAO Human Factors'
},

{
  question: 'An airline\\\'s "operations specifications" (Ops Specs) are:',
  options: [
    'A. The airline\\\'s marketing specifications for each route, subject to the pilot completing the required recurrent training within 12 months, provided the aircraft holds ',
    'B. The technical specifications for each aircraft in the fleet, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in',
    'C. CASA-issued authorisations specifying the specific operations and limitations applicable to an AOC holder — including approved aircraft types, routes, operation types, and special approvals (ETOPS, CAT II, RVSM, etc.)',
    'D. Internal company documents with no regulatory significance, subject to the requirements of the applicable Civil Aviation Order, except during the period of '
  ],
  correct: 2,
  explanation: 'Operations Specifications are CASA-issued documents forming part of the AOC holder\\\'s operational approval. They specify: approved aircraft types; types of operations; geographic areas; special operation approvals (ETOPS, CAT II/III, RVSM, low visibility operations); and conditions and limitations. The Ops Specs cannot exceed the operator\\\'s approved exposition. Any new capability (new aircraft type, ETOPS approval) requires Ops Spec amendment.',
  reference: 'CASR Part 119 / CASR Part 121'
},

{
  question: 'The "Safety Management System" (SMS) required of Australian AOC holders must include:',
  options: [
    'A. A description of the company aircraft only, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif',
    'B. Only incident reporting procedures, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class',
    'C. A safety officer position designation only, only when operating in Class C or Class D controlled airspace, provided CASA has been notif',
    'D. A safety policy, safety risk management processes, safety assurance (monitoring and measurement), and safety promotion (training and communication) — the four pillars of an ICAO-compliant SMS'
  ],
  correct: 3,
  explanation: 'ICAO Annex 19 and CASR Part 119 require AOC holders to implement a Safety Management System with four components: (1) Safety Policy and Objectives; (2) Safety Risk Management (hazard identification, risk assessment, mitigation); (3) Safety Assurance (monitoring, auditing, performance measurement); (4) Safety Promotion (training, communication, culture). The SMS must be CASA-approved and genuinely implemented.',
  reference: 'CASR Part 119 / ICAO Annex 19'
},

{
  question: 'A "flight crew standard operating procedure" (SOP) that conflicts with a published instrument approach chart procedure — which takes precedence?',
  options: [
    'A. The SOP always takes precedence — it has been approved by CASA, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. The published instrument approach chart procedure takes precedence for obstacle clearance purposes — SOPs cannot authorise deviations from published obstacle clearance altitudes',
    'C. The pilot uses their own judgment to determine the safest option, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. The conflict must be reported to CASA before the flight can proceed, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 1,
  explanation: 'Published instrument approach chart minimums and procedures are derived from obstacle clearance criteria — they cannot be overridden by SOPs. An SOP may specify how to fly the procedure (configuration, speed, callouts) but cannot authorise lower minimums than published. If a conflict exists between an SOP and a published procedure, the conflict should be reported through the SMS as a safety issue for resolution.',
  reference: 'AIP ENR 1.5 / CASR Part 91 / ICAO Doc 8168'
},

{
  question: 'Under Australian regulations, the aerodrome elevation published in the ERSA is the elevation of:',
  options: [
    'A. The average elevation of all runways at the aerodrome, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'B. The aerodrome reference point (ARP), subject to the pilot completing the required recurrent training within 12 months, subject to the operator's ap',
    'C. The highest point on the landing area (highest runway elevation at a complex aerodrome) — it is used to set QNH and as the reference for certain obstacle clearance calculations',
    'D. The lowest point of the aerodrome, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr'
  ],
  correct: 2,
  explanation: 'Aerodrome elevation is the highest point on the landing area — typically the highest touchdown zone elevation among all runways at the aerodrome. This is used as the reference for calculating the circuit altitude, transition altitude, and local QNH corrections. At aerodromes with a significant slope, the difference between the highest and lowest runway end elevations is published.',
  reference: 'ICAO Annex 14 / AIP ERSA'
},

{
  question: 'When making an approach at a controlled aerodrome with an ATIS reporting "RUNWAY 34R IN USE, APPROACH ILS," the flight crew should:',
  options: [
    'A. Expect to be vectored to any runway at ATC discretion, subject to the operator's approved exposition authorising such operations, provided the relevant aerodr',
    'B. Only commence approach briefing after receiving the actual approach clearance from ATC, subject to written approval from the operator's chief pilot, only when operating in Class',
    'C. Approach briefing is not required if the ATIS specifies the approach type, subject to the pilot completing the required recurrent training within 12 months',
    'D. Load and brief the ILS RWY 34R approach as the expected approach, report "Information [code] received" on first contact, and be prepared to confirm or amend when the actual approach clearance is issued'
  ],
  correct: 3,
  explanation: 'ATIS approach information allows early preparation: load the ILS 34R in the FMS, brief the approach (DA/H, missed approach, course), note the QNH. Report information received to ATC. The ATIS is the expected approach — ATC may change it, in which case the crew amends the briefing. Early preparation reduces workload during the most demanding phase of flight.',
  reference: 'AIP GEN 3.3 / Airline SOPs'
},

{
  question: 'Under CASR Part 121, a "company aircraft" used for positioning flight crew must:',
  options: [
    'A. Always carry passengers on positioning sectors, subject to the requirements of the applicable Civil Aviation Order, subject to the pilot complet',
    'B. Only carry positioning crew if the flight is to an AOC base, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in',
    'C. Be operated under CASR Part 91 only — Part 121 does not apply to crew positioning, except when the operation involves more than 9 passenger seats',
    'D. Comply with all applicable airworthiness and operational requirements — positioning crew are subject to all normal safety requirements and cannot travel on unserviceable or non-compliant aircraft'
  ],
  correct: 3,
  explanation: 'Positioning (deadhead) flights must comply with all normal airworthiness and operational requirements. Crew on positioning sectors are subject to the same safety requirements as any other occupant. The operator cannot use the "just crew" status to justify non-compliance with safety requirements. Positioning crew must be seated with seatbelts, obey crew instructions, and comply with safety requirements.',
  reference: 'CASR Part 121 / CAO 82.0'
},

{
  question: 'The minimum runway length required for an aircraft is determined by:',
  options: [
    'A. The critical performance requirement — typically the accelerate-stop distance for a rejected take-off at V1 (if longer than take-off distance) or the landing distance required with appropriate factoring',
    'B. Only the aircraft MTOW, except during the period of any declared low visibility procedures at the aerodrome, subject to the requirements ',
    'C. ATC\\\'s assessment of the runway length at the specific aerodrome, subject to written approval from the operator's chief pilot, except during the period of ',
    'D. Only the landing roll distance at MTOW, provided CASA has been notified of the operation at least 24 hours in advance, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'Minimum required runway length is the longest of: TODA (take-off distance required to 35 ft screen height); ASDA (accelerate-stop distance); or the landing distance required (with applicable factors — 1.67 × actual landing distance for turbine RPT). The limiting case determines the minimum required runway. At contaminated or slippery runways, the landing requirement may become the limiting factor.',
  reference: 'CASR Part 25 / CAO 82.0 / AFM'
},

{
  question: 'Under Australian regulations, an "off-route alternate" must be nominated for an IFR flight when:',
  options: [
    'A. The flight exceeds 500 nm, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided a current instrumen',
    'B. Forecast conditions at the destination are below alternate threshold criteria (ceiling/visibility thresholds from the TAF for ETA ±1 hour) or no TAF covers the destination for the arrival time window',
    'C. Night IFR operations are involved regardless of weather, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'D. An alternate is required for all IFR flights regardless of forecast conditions, except when the operation involves more than 9 passenger seats, subject to written approval '
  ],
  correct: 1,
  explanation: 'An IFR alternate must be nominated when: the destination TAF forecasts conditions below the alternate planning criteria for ETA ±1 hour (ceiling < 800 ft or vis < 800 m for precision approach, or higher thresholds for non-precision approach); or when no TAF is available covering ETA ±1 hour. The alternate must be within reach with the specified alternate fuel.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under the AIP, "ATIS code November" being reported to ATC on initial contact means:',
  options: [
    'A. The crew has received ATIS information November — this confirms to ATC that the crew has current aerodrome information, saving ATC time in reading out the weather and avoiding information gaps',
    'B. The 14th ATIS update of the day has been received by the crew, subject to the pilot completing the required recurrent training within 12 months',
    'C. The crew is requesting the ATIS to be read out on the frequency, except during the period of any declared low visibility procedures at the aerodrome',
    'D. NOTAM information is included in the ATIS, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in'
  ],
  correct: 0,
  explanation: '"Information November received" means the crew has listened to and understood the ATIS broadcast with code "November" (the 14th recording of the day — A through to as many updates as needed). ATC acknowledges this and does not re-read the ATIS unless there has been an update. If conditions have changed since the crew received their ATIS, ATC will advise "Information Oscar is current — check QNH [value]".',
  reference: 'AIP GEN 3.3 / AIP GEN 3.4'
},

{
  question: 'Under Australian regulations, an aircraft must be insured before operating commercially. The minimum insurance requirement covers:',
  options: [
    'A. Only the aircraft hull, except during the period of any declared low visibility procedures at the aerodrome, provided a current instrumen',
    'B. All aviation insurance is voluntary — no minimum is specified by law, subject to the requirements of the applicable Civil Aviation Order, provided the aircraft holds ',
    'C. Third party liability insurance as a minimum — passenger liability insurance is also required for operations carrying passengers for reward, as specified under CASR and the Civil Aviation (Carriers\\\' Liability) Act',
    'D. Only international flights require insurance — domestic operations are unregulated, only when operating in Class C or Class D controlled airspace, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'Under Australian law, third party liability insurance is required for operating aircraft. For passenger-carrying commercial operations, the Civil Aviation (Carriers\\\' Liability) Act 1959 imposes strict liability and minimum coverage requirements for passenger injury and death. The insurance requirements are separate from CASR — they are enforced through civil law and AOC conditions.',
  reference: 'Civil Aviation (Carriers\\\' Liability) Act 1959 / CASR'
},

{
  question: 'The approach category "CAT IIIB" ILS operation permits:',
  options: [
    'A. Landing with a DH of less than 50 ft (or no DH) and RVR of 75–200 m — requiring fail-operational aircraft and special aerodrome and operator approvals',
    'B. Landing with a DH of 200 ft and RVR of 550 m, subject to the pilot completing the required recurrent training within 12 months',
    'C. Landing in zero visibility without any DH or RVR requirement, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. The same as CAT I but at night only, except when the operation involves more than 9 passenger seats, provided a current instrumen'
  ],
  correct: 0,
  explanation: 'CAT IIIB: DH 0–50 ft, RVR 75–200 m. CAT IIIA: DH < 100 ft, RVR ≥ 200 m. CAT IIIC: no DH and no RVR (not yet certificated in practice). These low-visibility operations require: fail-operational aircraft; CAT III ILS/ground equipment; special pilot training; aerodrome low visibility procedures; and CASA approval. Only a small number of Australian aerodromes are equipped for CAT III operations.',
  reference: 'ICAO Annex 6 / CAO 82.3 / AIP ENR 1.5'
},

{
  question: 'Under Australian ATC procedures, the phrase "CONTACT MELBOURNE CONTROL 132.7" from ATC requires the pilot to:',
  options: [
    'A. Acknowledge the frequency and change only when the current controller has finished speaking',
    'B. Change frequency after a 2-minute delay to allow handoff to be completed, only when operating in Class C or Class D controlled airspace',
    'C. Acknowledge, then immediately change to 132.7 and call Melbourne Control with callsign, position, level, and any other relevant information',
    'D. Only change frequency after passing the current sector boundary, except when the operation involves more than 9 passenger seats'
  ],
  correct: 2,
  explanation: 'Frequency transfer: acknowledge ("132.7, [callsign]"), then immediately change to the new frequency and establish contact with the new controller. Report: callsign, level, and any other information the new controller needs (e.g. "Melbourne Control, VH-ABC, FL160, estimating PADME at time 35"). Do not delay — the new controller may be waiting for you as part of their traffic picture.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under the AIP, "CAVOK" on a METAR means:',
  options: [
    'A. Ceiling and Visibility OK — any cloud and visibility above minimums, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Visibility 10 km or more, no cloud below 5,000 ft or below the highest MSA (whichever is greater), no cumulonimbus, and no significant weather — all these criteria must be met simultaneously',
    'C. Clear skies with no cloud at all, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only when operating in Class',
    'D. Visibility exceeds 20 km with no precipitation, except when the operation involves more than 9 passenger seats, subject to the pilot complet'
  ],
  correct: 1,
  explanation: 'CAVOK (Ceiling And Visibility OK): (1) visibility ≥10 km; (2) no cloud below 5,000 ft or below the highest minimum sector altitude (whichever is greater); (3) no cumulonimbus; (4) no significant weather phenomena. ALL criteria must be met. If any criterion is not met, cloud and visibility are reported individually. CAVOK simplifies the METAR significantly when conditions are good.',
  reference: 'AIP GEN 2.1 / WMO 306'
},

{
  question: 'Under Australian ATC procedures, an aircraft issued with a "DESCENT MAINTAIN FLIGHT LEVEL ONE SEVEN ZERO" clearance should:',
  options: [
    'A. Descend to FL170 and continue further if no other clearance received, subject to the requirements of the applicable Civil Aviation Order',
    'B. Descend to FL170 but may continue below if in visual conditions, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Commence descent after the co-pilot has checked the altimeter setting, subject to written approval from the operator's chief pilot',
    'D. Read back the clearance, descend from the current level to FL170, and maintain FL170 until a further clearance is received'
  ],
  correct: 3,
  explanation: '"Descend maintain FL170": readback ("Descend maintain flight level one seven zero, [callsign]"); descend at a normal operational rate; level at FL170 and maintain until further clearance. Do not continue below FL170 without a further amended clearance. The word "maintain" means fly at that level — deviation requires an amended clearance.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian ATC procedures, if a pilot hears an ATC instruction addressed to their aircraft but only partially understands it, they should:',
  options: [
    'A. Comply with the part they understood and request clarification later, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. Immediately advise ATC they did not fully understand and request the instruction be repeated — never act on a partially understood ATC clearance',
    'C. Say nothing until ATC repeats the instruction, provided a current instrument rating is held for the relevant aircraft category',
    'D. Ask other crew members what they heard, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 1,
  explanation: 'Partially understood ATC instructions: immediately request a repeat. Standard phrase: "[Callsign] say again" or "[Callsign] did not copy." Acting on a partial understanding is dangerous — altitude, heading, or routing errors can result. If in any doubt about what was said, ask immediately. ATC would rather repeat an instruction than have an aircraft act on a misunderstanding.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The standard phraseology for declaring a distress condition is:',
  options: [
    'A. "EMERGENCY EMERGENCY EMERGENCY [callsign]", only when operating in Class C or Class D controlled airspace',
    'B. "PAN PAN PAN [callsign]", subject to the operator's approved exposition authorising such operations, subject to the pilot complet',
    'C. "MAYDAY MAYDAY MAYDAY [callsign]" — spoken three times, on 121.5 MHz or the assigned ATC frequency, followed by nature of distress, position, intentions',
    'D. "DISTRESS DISTRESS DISTRESS [callsign]", provided the pilot has logged at least 3 hours on type in the preceding 90 days'
  ],
  correct: 2,
  explanation: 'Distress (grave and imminent danger): "MAYDAY MAYDAY MAYDAY" — three times. Urgency (concerning the safety of an aircraft or person, but not immediate danger): "PAN PAN PAN PAN PAN PAN" — three times. MAYDAY must be spoken three times to distinguish it from "May Day" misheard on a noisy radio frequency. The MAYDAY call should be on the assigned frequency first; 121.5 MHz if no response.',
  reference: 'AIP ENR 1.1 / ICAO Annex 10'
},

{
  question: 'An aircraft on approach to a controlled aerodrome is advised by ATC "GO AROUND, TRAFFIC ON RUNWAY." The crew must:',
  options: [
    'A. Continue the approach if the runway appears clear, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Immediately execute the published missed approach procedure, advising ATC when the go-around is initiated',
    'C. Advise ATC that they have the runway in sight and continue',
    'D. Descend to DH to visually verify the runway before deciding'
  ],
  correct: 1,
  explanation: 'An ATC go-around instruction is mandatory — it is not a suggestion. Immediately apply go-around power, climb, and execute the published missed approach. Advise ATC "Going around" as soon as workload permits. Do not verify the runway visually before responding — the go-around instruction comes from ATC who has a definitive picture of the conflict. Act immediately.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under the AIP, the correct read-back for the transponder code "4275" is:',
  options: [
    'A. "Squawk four two seven five"',
    'B. "Squawk four-thousand two-hundred and seventy-five"',
    'C. "Transponder four two seven five"',
    'D. "Code four two seven five set"'
  ],
  correct: 0,
  explanation: 'Transponder codes are read digit by digit: "Squawk four two seven five." The standard phraseology uses "squawk" followed by the four-digit code spoken individually. The response "Four two seven five" (as a readback only) is also acceptable. Do not group the digits — each is spoken separately to avoid confusion.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, the requirement for a "second in command" (co-pilot) on a turbine-powered aircraft is based on:',
  options: [
    'A. The aircraft type certificate and AFM requirement, plus applicable CASR/CAO provisions — some aircraft require a minimum crew of 2 based on their type certification; operations above certain MTOW or carrying prescribed numbers of passengers may also require a co-pilot',
    'B. Only the number of passengers on board, on multi-engine aircraft exceeding 5,700 kg MTOW only, except when the operation in',
    'C. Only the duration of the flight, on multi-engine aircraft exceeding 5,700 kg MTOW only, subject to the requirements ',
    'D. Only the weather conditions — IFR operations always require a co-pilot, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'Co-pilot requirement: determined by (1) the aircraft type certificate/AFM (some aircraft require 2 pilots by design); (2) CASR/CAO provisions for certain operations (above specified MTOW thresholds, RPT above a certain number of seats, certain over-water operations). An aircraft certificated for single pilot that is used for RPT above the two-pilot threshold requires a co-pilot regardless of AFM minimum.',
  reference: 'CASR Part 121 / CAO 82.0 / AFM'
},

{
  question: 'In Australian airspace, the "flight level" system begins at:',
  options: [
    'A. The transition level, which is the lowest flight level at or above the transition altitude of 10,000 ft — the actual transition level varies with QNH',
    'B. 5,000 ft AMSL, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval ',
    'C. FL100 always — below FL100 altitudes are used, subject to written approval from the operator's chief pilot',
    'D. FL180 — Australian upper airspace begins at FL180, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: 'Flight levels start at the transition level, which is the lowest available flight level at or above the transition altitude of 10,000 ft. When QNH is 1013 hPa, FL100 = 10,000 ft and FL100 is the transition level. When QNH is high (>1013), the transition level may be FL105 or higher. When QNH is low, FL100 may be below 10,000 ft. The ATIS always broadcasts the current transition level.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'The "Area QNH" broadcast by ATC:',
  options: [
    'A. Is the QNH at the destination aerodrome only, subject to written approval from the operator's chief pilot, provided the aircraft holds ',
    'B. Is the mean QNH calculated from all aerodromes in the FIR, only when operating in Class C or Class D controlled airspace, provided the relevant aerodr',
    'C. Area QNH is only broadcast for VFR flights — IFR flights use aerodrome QNH, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Is the lowest QNH in the relevant FIR sector during the period — using area QNH ensures the aircraft has the most conservative altimeter setting when operating in the lower airspace of that sector'
  ],
  correct: 3,
  explanation: 'Area QNH is the lowest reported or forecast QNH for a specific area during the period of use. Using the lowest value is conservative — it ensures the aircraft\\\'s actual altitude is always at or above what the altimeter indicates. Area QNH is used in IFR en-route operations away from aerodromes. It is broadcast by the relevant ATC sector.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'When an IFR aircraft is informed by ATC "DESCEND TO 4,000 FT, QNH 1009," the altimeter should be set to:',
  options: [
    'A. 1013 hPa until passing FL100, then 1009 hPa, subject to the operator's approved exposition authorising such operations',
    'B. 1009 hPa — since the instruction specifies an altitude (not a flight level), the altimeter is set to QNH 1009 and the aircraft descends to read 4,000 ft',
    'C. 1009 hPa only after passing the transition level, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. 1013 hPa at all times — the clearance is issued in feet which means flight levels apply, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 1,
  explanation: 'A clearance expressed in feet (not "flight level") means an altitude using QNH. When cleared to "4,000 ft QNH 1009," set 1009 hPa immediately (if not already set) and descend to altimeter reading 4,000 ft. The altimeter should be set to QNH before passing the transition level during descent. An altitude instruction uses QNH; a flight level instruction uses standard pressure (1013.25).',
  reference: 'AIP ENR 1.7 / AIP ENR 1.1'
},

{
  question: 'A "Danger Area" in Australian airspace is:',
  options: [
    'A. Prohibited — all civil aircraft must avoid all danger areas at all times, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. An airspace of defined dimensions within which activities dangerous to the flight of aircraft may exist — civil aircraft may enter a danger area but must exercise extreme caution and be aware of the hazard',
    'C. The same as a restricted area — a clearance is required to enter, except when the operation involves more than 9 passenger seats, except during the period of ',
    'D. Only applicable to military aircraft operating in combat training areas, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'A Danger Area contains activities hazardous to aircraft (weapons ranges, naval exercises, rocket launches). Civil aircraft may enter a danger area (unlike restricted or prohibited areas) but must be aware of the hazard. Prior coordination with the controlling authority is strongly recommended. Danger areas are depicted on En-Route Charts with activation times in the ERSA and NOTAMs.',
  reference: 'AIP ENR 5.2'
},

{
  question: 'The "aeronautical information" cycle includes AIRAC effective dates. The standard AIRAC cycle length is:',
  options: [
    'A. 7 days',
    'B. 28 days',
    'C. 56 days',
    'D. 30 days'
  ],
  correct: 1,
  explanation: 'The AIRAC cycle is 28 days. ICAO established this international standard to ensure all aeronautical changes take effect on known dates, allowing systematic updates to navigation databases, charts, and publications. The 28-day cycle repeats throughout the year — approximately 13 AIRAC cycles per year. All countries use the same AIRAC dates, enabling coordinated global updates.',
  reference: 'AIP GEN 3.1 / ICAO Annex 15'
},

{
  question: 'The International Standard Atmosphere (ISA) defines standard conditions at sea level as:',
  options: [
    'A. Temperature +20°C, pressure 1013.25 hPa, density 1.225 kg/m³',
    'B. Temperature +15°C, pressure 1000 hPa, density 1.200 kg/m³',
    'C. Temperature +20°C, pressure 1000 hPa, density 1.200 kg/m³',
    'D. Temperature +15°C, pressure 1013.25 hPa, density 1.225 kg/m³'
  ],
  correct: 3,
  explanation: 'ISA sea level standard conditions: temperature +15°C (59°F); pressure 1013.25 hPa (29.92 inHg); density 1.225 kg/m³. The standard lapse rate is 1.98°C/1,000 ft (approximately 2°C/1,000 ft) in the troposphere. These values form the basis of all aircraft performance calculations — deviations from ISA affect engine performance and air density.',
  reference: 'ICAO Doc 7488 / AIP ENR 1.7'
},

{
  question: 'Under Australian law, a person who interferes with the operation of an aircraft ("sky-jacking") is subject to:',
  options: [
    'A. The standard criminal law of the state in which the aircraft is registered, except during the period of any declared low visibility procedures at the aerodrome, provided a current instrumen',
    'B. Only international law which applies outside Australian territory, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr',
    'C. The Crimes (Aviation) Act 1991 which creates specific offences for unlawful seizure of aircraft, endangering aircraft safety, and related acts — offences may be prosecuted regardless of where they occur if the aircraft is Australian-registered or the offender is in Australia',
    'D. The Aviation Transport Security Act 2004 which deals with civil liability only, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in'
  ],
  correct: 2,
  explanation: 'The Crimes (Aviation) Act 1991 creates specific criminal offences for acts against civil aviation including unlawful seizure (hijacking), endangering aircraft safety, and related matters. These are serious indictable offences with substantial penalties. The Act extends Australian jurisdiction extraterritorially for Australian-registered aircraft and offences against Australian nationals.',
  reference: 'Crimes (Aviation) Act 1991'
},

{
  question: 'Under Australian aviation law, the "responsible person" for a flight is:',
  options: [
    'A. The operator\\\'s accountable manager, subject to the operator's approved exposition authorising such operations',
    'B. The pilot in command of the aircraft — the PIC bears personal legal responsibility for the safe conduct of the flight and compliance with applicable regulations',
    'C. The airline\\\'s Director of Flight Operations, subject to the requirements of the applicable Civil Aviation Order',
    'D. CASA — as the regulatory authority, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 1,
  explanation: 'The PIC is the "responsible person" under the Civil Aviation Act 1988 for the purposes of the flight. This means the PIC bears direct personal legal responsibility for regulatory compliance during the flight. Even if the operator has given incorrect instructions, the PIC cannot use "following orders" as a complete defence for regulatory breaches.',
  reference: 'Civil Aviation Act 1988 / CASR Part 91'
},

{
  question: 'For an instrument approach with published minima expressed as "MDA 1,600 ft (HAA 620 ft)," what do these values mean?',
  options: [
    'A. MDA is the minimum density altitude for the approach; HAA is the highest approach altitude',
    'B. MDA is the minimum descent altitude of 1,600 ft AMSL; HAA is Height Above Aerodrome — 620 ft above the aerodrome elevation',
    'C. 1,600 ft is the initial approach altitude; 620 ft is the circuit height, except during the period of any declared low visibility procedures at the aerodrome',
    'D. MDA is MSL altitude; HAA is the height above the highest obstacle within 5 nm'
  ],
  correct: 1,
  explanation: 'MDA (Minimum Descent Altitude): 1,600 ft AMSL — the lowest altitude the aircraft may descend to on a non-precision approach without the required visual reference established. HAA (Height Above Aerodrome): 620 ft — the MDA expressed as height above the aerodrome elevation. The HAA gives the crew an intuitive feel for how high they are above the aerodrome at the MDA.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'An aircraft in receipt of a radar service approaches terrain unusually close. If the ATC controller uses MSAW (Minimum Safe Altitude Warning), they must:',
  options: [
    'A. Wait until the aircraft is actually below minimum altitude before advising',
    'B. Only advise if the weather is IMC, subject to the operator's approved exposition authorising such operations',
    'C. MSAW alerts are system-generated automatically and require no controller action',
    'D. Advise the pilot immediately of the low altitude alert and issue a climb instruction — the pilot must respond immediately'
  ],
  correct: 3,
  explanation: 'Minimum Safe Altitude Warning (MSAW): when the MSAW system alerts a controller that an aircraft is at risk of terrain or obstacle contact, the controller must immediately advise the pilot and issue a climb instruction. The pilot must respond immediately to a low altitude alert. MSAW is a safety net — it supplements but does not replace the pilot\\\'s terrain awareness responsibilities.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, what action must a pilot take when required to operate on a runway that has a displaced threshold?',
  options: [
    'A. Take off from the beginning of the runway and land at the displaced threshold, subject to the requirements of the applicable Civil Aviation Order',
    'B. Land at or beyond the displaced threshold markings; however, the full runway length ahead of the displaced threshold may be used for take-off roll and for roll-out after landing',
    'C. Both take-off and landing must commence at the displaced threshold, except when the operation involves more than 9 passenger seats',
    'D. The displaced threshold only applies to VFR aircraft — IFR may use the full runway, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'Displaced threshold: the area between the runway start and the displaced threshold may be used for take-off roll (acceleration) and for landing roll-out (decelerating after touchdown past the displaced threshold). However, the landing must touch down at or beyond the displaced threshold — the area before it is not used for touchdown. Typically displaced due to obstacles on the approach path.',
  reference: 'ICAO Annex 14 / AIP ENR 1.5'
},

{
  question: 'A PIREP (Pilot Report) of "MOD TURB FL140-FL160, NE BRISBANE" is received by ATC. ATC must:',
  options: [
    'A. Pass the PIREP information to aircraft likely to encounter the same area and conditions — as an urgent PIREP or traffic information depending on severity',
    'B. Issue a SIGMET immediately, subject to the requirements of the applicable Civil Aviation Order, provided the aircraft holds ',
    'C. Only record the PIREP for statistical purposes, except when the operation involves more than 9 passenger seats',
    'D. Require the reporting aircraft to divert, subject to written approval from the operator's chief pilot, subject to the requirements '
  ],
  correct: 0,
  explanation: 'PIREPs of significant weather are passed to other aircraft as traffic information (or urgent PIREP if severe). ATC uses the PIREP to improve situational awareness for other aircraft in the area. The meteorological service may use the PIREP to issue or amend a SIGMET. Moderate turbulence PIREPs are valuable operational information for crews planning or flying the same route.',
  reference: 'AIP GEN 3.5 / AIP ENR 1.1'
},

{
  question: 'For an IFR flight, the alternate aerodrome must have a published instrument approach procedure that will be available at the estimated time of arrival at the alternate. This means:',
  options: [
    'A. The alternate must be within radar coverage of the destination, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'B. The alternate must have an ILS approach only — VOR or NDB approaches are not acceptable, provided CASA has been notified of the operation at least 24 hours in advance, except during the period of ',
    'C. The NOTAM must be checked to ensure the required navaid and approach procedure at the alternate are serviceable — a NOTAM advising ILS unserviceable may invalidate the alternate if no other approach is available above weather limits',
    'D. The alternate aerodrome tower must be staffed at the estimated arrival time, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements '
  ],
  correct: 2,
  explanation: 'Alternate validity depends on: the approach procedure being available and serviceable (NOTAMs checked); forecast conditions meeting alternate minima; and the aerodrome being open at the ETA. If the ILS at the alternate is NOTAMed unserviceable, the alternate may still be valid if a VOR or NDB approach is available and conditions meet that approach\\\'s alternate minima — which are higher.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'An aircraft departs a non-controlled aerodrome on an IFR flight plan and enters Class C airspace without a clearance due to a radio failure. Under the NORDO procedures, the correct action is:',
  options: [
    'A. Squawk 7600 immediately; maintain the filed route and altitude; proceed at the flight planned speed, level, and route; ATC will clear the airspace; execute the expected approach at destination ETA',
    'B. Squawk 7600, continue to destination as normal, only when operating in Class C or Class D controlled airspace, only if the operator holds a',
    'C. Squawk 7700 and land immediately at the nearest aerodrome, provided the aircraft holds a valid maintenance release and is within weight limits, except when the operation in',
    'D. Descend below Class C airspace and continue VFR, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'NORDO in controlled airspace: (1) squawk 7600 immediately — alerting all ATC to NORDO; (2) maintain the filed route and cleared altitude/MEA (whichever is higher); (3) proceed at filed speed; (4) arrive at destination at ETA; (5) execute the published approach at the ETA. ATC will protect the airspace around the expected NORDO flight path.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The "VMC-on-top" cruise concept in IFR operations means:',
  options: [
    'A. The IFR flight has been cancelled and VFR applies, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the requirements ',
    'B. An IFR aircraft operating in visual meteorological conditions above cloud maintains IFR flight rules and ATC separation, while the pilot also maintains a visual lookout for other traffic — the IFR clearance remains in force',
    'C. The aircraft must maintain VFR cloud clearances at all times, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap',
    'D. VMC on top is only permitted in Class A airspace, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements '
  ],
  correct: 1,
  explanation: 'VMC-on-top: operating IFR above a cloud layer in visual conditions. ATC IFR separation from other IFR traffic applies. VFR aircraft may also be in the same VMC layer — the IFR pilot is responsible for see-and-avoid from VFR traffic (in Class E and below). The IFR clearance remains in force — cancelling IFR to fly VFR on top is possible but means ATC separation ceases.',
  reference: 'CASR Part 91 / AIP ENR 1.4'
},

{
  question: 'The purpose of the "approach ban" in instrument approach procedures is to:',
  options: [
    'A. Prevent aircraft from commencing approaches in all IMC conditions, provided a current instrument rating is held for the relevant aircraft category, subject to the operator's ap',
    'B. Prohibit approaches by aircraft not approved for low visibility operations, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'C. Ensure that when reported conditions are below published minimums, approaches are not commenced or continued below decision heights — protecting against CFIT in conditions below which a safe landing cannot be assured',
    'D. Prevent multiple simultaneous approaches at the same aerodrome, only when operating in Class C or Class D controlled airspace, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'The approach ban protects against CFIT (Controlled Flight Into Terrain) by prohibiting continuation of an approach when reported conditions are below the published minimums. At or after the Final Approach Fix (FAF), if the reported RVR/visibility is below minimums, the approach must not continue below DA/H or MDA/H. The approach ban applies regardless of the crew\\\'s subjective assessment of conditions.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'An ATPL holder operating as PIC on a charter flight is offered additional payload that would take the aircraft above MTOW. The pilot must:',
  options: [
    'A. Refuse — operating above MTOW is not permitted. The pilot must offload the excess to bring the aircraft within MTOW before departure',
    'B. Accept the payload if the company approves it in writing, only when operating in Class C or Class D controlled airspace',
    'C. Accept if the runway length allows the extra weight, only when operating in Class C or Class D controlled airspace',
    'D. Accept if the extra weight does not affect the CG limits, but only for aircraft not exceeding 15,000 kg MTOW'
  ],
  correct: 0,
  explanation: 'MTOW is a structural and performance limit that cannot be exceeded regardless of commercial pressure or passenger requests. An ATPL holder who operates above MTOW is in breach of CASR Part 91, the Civil Aviation Act, and the aircraft\\\'s type certificate. The excess payload must be offloaded. This is a non-negotiable regulatory and safety requirement.',
  reference: 'CASR Part 91 / CASR Part 21'
},

{
  question: 'Under Australian law, CASA may issue an "infringement notice" to a licence holder for a minor regulatory breach. This is:',
  options: [
    'A. The same as cancellation of the licence, except when the operation involves more than 9 passenger seats, provided the relevant aerodr',
    'B. A warning letter with no legal effect, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval ',
    'C. A formal notice requiring payment of a financial penalty for specified minor regulatory breaches — an alternative to prosecution that allows swift resolution of minor matters',
    'D. Issued only for breaches detected by radar, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'Infringement notices (civil penalty notices) under the Civil Aviation Act allow CASA to issue financial penalties for minor regulatory breaches without resorting to prosecution. They cover specific prescribed offences. The recipient may contest the notice or pay the penalty. Serious breaches still go to prosecution or licence action. Infringement notices provide an efficient regulatory tool for minor non-compliance.',
  reference: 'Civil Aviation Act 1988 / CASR Part 11'
},

{
  question: 'An ATPL holder on a long-haul flight where the relief pilot (third crew member) is qualified for cruise duties only — at what phase of flight is the relief pilot NOT authorised to be at the controls?',
  options: [
    'A. During take-off, approach, and landing — the relief crew is only authorised for cruise duties; the minimum required crew (captain and first officer) must be at the controls for critical flight phases',
    'B. During cruise above FL350, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. During oceanic flight beyond VHF range, subject to written approval from the operator's chief pilot, only if the operator holds a',
    'D. During any phase at night, subject to the pilot completing the required recurrent training within 12 months, subject to the requirements '
  ],
  correct: 0,
  explanation: 'Relief (augmenting) crew authorised for cruise duties only: may perform pilot duties only during cruise flight. Take-off, departure, descent below a specified altitude, approach, and landing must be conducted by the minimum required qualified crew. This restriction is published in the operator\\\'s Operations Manual and is based on the relief crew\\\'s qualification level.',
  reference: 'CAO 48.1 / CASR Part 121 / CAO 82.0'
},

{
  question: 'An aircraft returning from an international flight enters Australian airspace without filing the required general declaration. The PIC:',
  options: [
    'A. May land at any aerodrome — the declaration can be filed on the ground, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. May land at the nearest aerodrome and file the declaration within 2 hours, subject to the operator's approved exposition authorising such operations',
    'C. Must file the declaration while airborne before reaching the Australian coastline, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Has committed an offence and the aircraft must proceed to the designated international airport as specified in the clearance — uncleared international arrivals must use designated ports of entry'
  ],
  correct: 3,
  explanation: 'International aircraft must arrive at designated international airports (ports of entry) with prior clearance. Arriving at a non-designated aerodrome or without customs/immigration clearance is an offence under the Migration Act and Customs Act. The general declaration must be filed before arrival. Undeclared international arrivals trigger immigration, biosecurity, and law enforcement responses.',
  reference: 'AIP GEN 1.2 / Migration Act 1958 / Biosecurity Act 2015'
},

{
  question: 'Under the AIP, a "STAR" (Standard Arrival Route) becomes mandatory (not just expected) when:',
  options: [
    'A. The aerodrome has instrument approaches only, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'B. The STAR is charted — all published STARs are always mandatory, except when the operation involves more than 9 passenger seats',
    'C. ATIS specifies STAR operations are in use, subject to the operator's approved exposition authorising such operations',
    'D. ATC specifically instructs "PROCEED VIA STAR" — when ATC clears an aircraft via a STAR, compliance with the published routing and all constraints is mandatory'
  ],
  correct: 3,
  explanation: 'A STAR becomes mandatory when ATC clears the aircraft via the STAR ("proceed via STAR [name]"). The clearance requires compliance with the published routing and altitude/speed constraints. Without an explicit STAR clearance, pilots may fly their own navigation to the IAF. The "descend via STAR" clearance requires compliance with all vertical constraints as well.',
  reference: 'AIP ENR 1.5 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, the holder of an ATPL may log "instrument time" when:',
  options: [
    'A. Any time the autopilot is engaged on an IFR flight, only if the operator holds a specific approval under their Air Operator Certificate, provided the aircraft holds ',
    'B. Only when in actual IMC — simulated instrument time cannot be logged, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. All flight time in controlled airspace counts as instrument time, except when the operation involves more than 9 passenger seats, except during the period of ',
    'D. When the aircraft is operated under IFR or when flight by sole reference to instruments is required to maintain aircraft control — this includes actual IMC and simulated IMC under a safety pilot'
  ],
  correct: 3,
  explanation: 'Instrument time is logged when the pilot is flying under IFR or when flight by sole reference to instruments is required. This includes: actual IMC flight; simulated instrument flight under a safety pilot; IFR flight in VMC; and simulator time under approved conditions. The pilot must record instrument time accurately as it counts toward currency and certain licence requirements.',
  reference: 'CASR Part 61 / ICAO Annex 1'
},

{
  question: 'The "engine out" SID procedure published at an aerodrome provides:',
  options: [
    'A. An obstacle clearance procedure to be used in the event of an engine failure during or after take-off — it specifies a different (typically less obstacle-limited) routing than the standard SID to maximise obstacle clearance with degraded climb performance',
    'B. A noise-abatement departure with reduced thrust, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'C. A procedure for returning to land with a failed engine, except when the operation involves more than 9 passenger seats, subject to written approval ',
    'D. Engine out procedures are only published at high-altitude aerodromes, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the requirements '
  ],
  correct: 0,
  explanation: 'Engine Out Procedures (or Special Departure Procedures) are published at aerodromes where the standard SID obstacle clearance gradient cannot be met with one engine inoperative. The engine-out procedure typically specifies a heading or turn to avoid the most critical obstacle, a minimum altitude before turning, and specific guidance. Crews must brief the engine-out procedure before every departure.',
  reference: 'AIP ENR 1.5 / Aerodrome departure charts'
},

{
  question: 'Under the Civil Aviation Act 1988, it is an offence for a person to:',
  options: [
    'A. Operate an aircraft without current navigation charts on board, subject to written approval from the operator's chief pilot',
    'B. Fly an aircraft outside normal business hours without approval, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Operate an aircraft recklessly or in a manner that endangers the safety of any person or property — this is a criminal offence with significant penalties',
    'D. Use a personal communication device while at the controls of an aircraft, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 2,
  explanation: 'Section 20 of the Civil Aviation Act (and equivalent provisions): reckless operation of an aircraft that endangers others is a criminal offence. It is a higher threshold than ordinary regulatory breaches (which are civil matters) — reckless endangerment carries criminal penalties including imprisonment. Operating while impaired, grossly below minimum altitudes, or in a manner that clearly endangers persons are examples.',
  reference: 'Civil Aviation Act 1988 Section 20'
},

{
  question: 'Under Australian regulations, the minimum age for the issue of a Class 1 Aviation Medical Certificate is:',
  options: [
    'A. 17 years',
    'B. 16 years',
    'C. 18 years',
    'D. 21 years'
  ],
  correct: 1,
  explanation: 'Under CASR Part 67, the minimum age for the issue of a Class 1 Aviation Medical Certificate is 16 years. This enables student pilots to obtain a Class 1 medical early in their training. The Class 1 medical is required for CPL and ATPL privileges. Notably, the minimum age for the ATPL itself is 21 — the medical can be held from age 16 for CPL training purposes.',
  reference: 'CASR Part 67'
},

{
  question: 'An aircraft must carry survival equipment appropriate for the area of operations. For a flight over the central Australian desert, the survival equipment should include:',
  options: [
    'A. Only life jackets, subject to the pilot completing the required recurrent training within 12 months, except during the period of ',
    'B. Only a personal locator beacon (PLB), provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds ',
    'C. Water, shade shelter/reflective signalling devices, first aid kit, and enough food and water to sustain survivors until rescue — desert survival equipment is specified in CAO 20.11 based on remote area operations',
    'D. Standard over-water survival equipment, only when operating in Class C or Class D controlled airspace, subject to the pilot complet'
  ],
  correct: 2,
  explanation: 'For remote desert operations, CAO 20.11 specifies survival equipment appropriate to the hazards of the terrain: water (dehydration is the primary desert survival threat); shade; signalling devices (signal mirror, PLB); first aid kit; and sufficient water for the number of persons on board. The ELT addresses the location problem; survival equipment addresses survival until rescue.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'Under Australian regulations, ATC may instruct an aircraft to "MAINTAIN BLOCK ALTITUDES FL150 TO FL170." This means:',
  options: [
    'A. The aircraft may operate at any altitude within the range FL150 to FL170 inclusive — this flexibility is provided for turbulence avoidance and ride improvement without repeated ATC coordination for each altitude change',
    'B. The aircraft must stay at FL160 (the centre of the block), provided the relevant aerodrome has a certified RFFS capability for the aircraft, except during the period of ',
    'C. The aircraft must not enter FL150 or FL170 — only the altitudes between them, subject to the operator's approved exposition authorising such operations, except during the period of ',
    'D. Block altitudes are not used in Australian ATC — this is a US procedure, provided CASA has been notified of the operation at least 24 hours in advance, only when operating in Class'
  ],
  correct: 0,
  explanation: 'Block altitude clearance: the aircraft may operate at any level within the stated block (FL150 to FL170 inclusive). Used to allow the crew to seek a smoother ride without repeated ATC coordination. ATC maintains the entire block as separated airspace. The pilot notifies ATC if they find an acceptable level and wish to be assigned a single level.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under the AIP, an "expected approach time" (EAT) issued by ATC means:',
  options: [
    'A. The time at which ATC expects the aircraft to commence its approach from the holding fix — the crew uses this to manage fuel and decide whether to hold or divert',
    'B. The time by which the aircraft must have landed, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. ATC\\\'s best estimate of the arrival time at the gate, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The time the ILS will be switched on for the approach, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'Expected Approach Time (EAT): issued by ATC when aircraft are holding and sequencing is required. The EAT tells the crew when ATC expects them to commence the approach (leave the holding fix). The crew uses this to: assess fuel state against holding time; decide whether to commence holding or divert; plan the approach fuel requirement. If the EAT is beyond fuel limits, the crew must advise ATC.',
  reference: 'AIP ENR 1.5 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, the "minimum rest period" between duty periods under CAO 48.1 is measured:',
  options: [
    'A. From engine shutdown to engine start of the next sector, except during the period of any declared low visibility procedures at the aerodrome',
    'B. From landing to the next departure, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Only from the end of flying duties — ground duties during the "rest" period are permitted, subject to the requirements of the applicable Civil Aviation Order',
    'D. From the end of all duties (on-call, standby, administrative) to the start of the next flight duty period — the entire rest period must be free from all duty obligations'
  ],
  correct: 3,
  explanation: 'Rest period measurement under CAO 48.1: the rest period begins when ALL duties end (including standby, administrative, training). The rest period must be entirely free of duty — on-call or standby hours do not count as rest. The rest period ends when the next duty commences. Any duty during the "rest" period reduces the effective rest and may invalidate compliance with the minimum.',
  reference: 'CAO 48.1'
},

{
  question: 'The "Pilot Report" (PIREP) format used by Australian pilots should include:',
  options: [
    'A. Only the weather condition observed, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet',
    'B. Only the callsign and the aerodrome nearest to the observation, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'C. A PIREP should be as brief as possible — no specific format is required, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'D. Location, altitude/flight level, time (UTC), type of observation, aircraft type, and the meteorological element observed (turbulence intensity and altitude range, icing type and level, wind, etc.)'
  ],
  correct: 3,
  explanation: 'PIREPs should include: position (fix or lat/long); altitude/FL; time UTC; observation type; aircraft type (relevant for wake turbulence or equipment type context); and the meteorological element (turbulence type and intensity, icing type and accumulation rate, cloud tops/bases, wind). Standardised format ensures the PIREP is usable by ATC and meteorological services for safety warnings.',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'The minimum approach category for a "Category III B" ILS operation requires:',
  options: [
    'A. Fail-operational automatic landing system; enhanced ILS ground equipment to CAT III standards; special runway lighting; RVR assessment at three points; RFFS at appropriate category; crew trained and current for CAT IIIB; and CASA operations specification',
    'B. Only an ILS receiver capable of tracking to 100 ft DH, except during the period of any declared low visibility procedures at the aerodrome, subject to the operator's ap',
    'C. Automatic landing is optional — crews may hand-fly CAT IIIB approaches, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'D. CAT IIIB only applies to specific aircraft types — all aircraft with CAT I ILS can fly CAT IIIB, except when the operation involves more than 9 passenger seats, provided the relevant aerodr'
  ],
  correct: 0,
  explanation: 'CAT IIIB (DH <50 ft, RVR 75-200 m) requires a comprehensive combination of aircraft, crew, aerodrome, and regulatory approval. The aircraft requires fail-operational systems (continued safe operation after a single failure). The aerodrome requires CAT III ILS, enhanced lighting, and RVR at TD, mid-runway, and rollout. Crew require specific training and recent CAT III currency. This represents the highest level of commercial approach authorisation in regular use.',
  reference: 'ICAO Annex 6 / CAO 82.3 / AIP ENR 1.5'
},

{
  question: 'For a flight from Melbourne (YMML) to Sydney (YSSY) at FL280, the flight crew finds the Melbourne FIR altimeter setting (QNH) is 993 hPa. The standard pressure level FL280 is:',
  options: [
    'A. Higher than the actual altitude of 28,000 ft AMSL because QNH is below standard, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Lower than the actual altitude — when QNH is below 1013.25 hPa, the actual altitude at a given flight level is LOWER than the standard atmosphere would indicate',
    'C. Exactly 28,000 ft AMSL regardless of QNH above the transition altitude, only when operating in Class C or Class D controlled airspace',
    'D. Higher than actual because the aircraft is climbing in a lower pressure environment, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: 'When QNH is below 1013 hPa (low pressure system), the actual altitude at a given flight level is LOWER than the flight level number suggests. QNH 993 is 20 hPa below standard, equivalent to approximately 560 ft lower actual altitude. So FL280 ≈ 27,440 ft actual. This is important for obstacle clearance in mountainous areas — the published minimum flight levels account for this effect.',
  reference: 'AIP ENR 1.7 / ICAO Annex 2'
},

{
  question: 'Under Australian regulations, an aircraft is required to carry a Flight Manual when:',
  options: [
    'A. The aircraft is over 5,700 kg MTOW only, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to written approval ',
    'B. Only on international flights, provided the aircraft holds a valid maintenance release and is within weight limits, provided CASA has been notif',
    'C. The AFM is not required to be carried — it only needs to be available at the operator\\\'s base, provided a current instrument rating is held for the relevant aircraft category',
    'D. The aircraft type requires it (type-certificated aircraft generally require the AFM to be on board during flight) — the AFM contains performance data, limitations, and procedures that the crew must have access to'
  ],
  correct: 3,
  explanation: 'Under CASR Part 91, aircraft for which an approved Flight Manual is required by the type certificate must carry the AFM on board during flight. The AFM contains the approved limitations (speeds, weights, CG limits), performance data, and approved procedures. The pilot must have access to this information — it cannot be left at base. Electronic versions on approved EFBs are acceptable in some cases.',
  reference: 'CASR Part 91 / CASR Part 21'
},

{
  question: 'An aircraft is cleared to "DESCEND VIA STAR TAMMI1A, MAINTAIN FL100." The crew must comply with:',
  options: [
    'A. The published TAMMI1A routing AND all altitude and speed constraints on the STAR down to FL100, maintaining FL100 thereafter — "descend via" requires compliance with all published constraints',
    'B. Only the FL100 instruction — the STAR routing is advisory, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class',
    'C. FL100 only — there are no altitude constraints on a STAR, only the terminal assigned level, except when the operation involves more than 9 passenger seats',
    'D. The STAR routing only down to the first waypoint — then navigate direct to the IAF, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 0,
  explanation: '"Descend via STAR" clearance: comply with the published STAR lateral routing AND all published vertical constraints (AT, AT OR ABOVE, AT OR BELOW altitudes) as the aircraft descends to the cleared level (FL100). The FMS VNAV will compute the required path to meet all constraints. Failure to comply with AT constraints is an ATC instruction breach.',
  reference: 'AIP ENR 1.5 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, when operating under RVSM, if an aircraft experiences an altimetry system failure and can no longer maintain the required RVSM accuracy, the pilot must:',
  options: [
    'A. Immediately advise ATC of the RVSM contingency, use the words "RVSM FAILURE" in the call, and comply with ATC instructions — ATC will apply non-RVSM separation (2,000 ft) from all traffic',
    'B. Continue to the destination as the failure is not safety-critical, except when the operation involves more than 9 passenger seats, provided the aircraft holds ',
    'C. Request a lower flight level outside RVSM airspace without advising ATC, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Switch to the standby altimeter and continue normally, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in'
  ],
  correct: 0,
  explanation: 'RVSM contingency: if the aircraft can no longer maintain RVSM accuracy (altimeter failure, TCAS failure, pressurisation issues affecting altitude keeping), advise ATC immediately: "[Callsign] RVSM FAILURE." ATC will apply 2,000 ft separation from all other traffic. Continue to destination or divert as appropriate. All pilots in the RVSM band are notified by ATC to be alert for the non-compliant aircraft.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9574'
},

{
  question: 'For aircraft operating in Australian RVSM airspace, the maximum tolerable altimetry system error is:',
  options: [
    'A. ±65 ft (from assigned flight level, 95% of the time)',
    'B. ±200 ft',
    'C. ±500 ft',
    'D. ±300 ft'
  ],
  correct: 0,
  explanation: 'RVSM altimetry accuracy requirement: the aircraft must be capable of maintaining assigned altitude within ±65 ft, 95% of the time, in the absence of turbulence and pilot-induced changes. This requires a high-accuracy altimetry system with automatic altitude keeping (autopilot). Annual RVSM monitoring of operators\\\' fleet performance ensures continued compliance with this requirement.',
  reference: 'ICAO Doc 9574 / AIP ENR 1.1'
},

{
  question: 'An ATPL holder flying a turbine multi-engine aircraft is required to use what flight rules when operating in Class A airspace?',
  options: [
    'A. VFR rules may be used in VMC within Class A, only when operating in Class C or Class D controlled airspace',
    'B. Instrument Flight Rules (IFR) — Class A is IFR only; no VFR operations are permitted regardless of weather conditions',
    'C. Either IFR or VFR depending on weather conditions, provided a current instrument rating is held for the relevant aircraft category',
    'D. Special VFR rules apply when visibility exceeds 10 km, except when the operation involves more than 9 passenger seats'
  ],
  correct: 1,
  explanation: 'Class A airspace is IFR only — no exceptions. VFR (including Special VFR) is not permitted. All aircraft in Class A require an IFR clearance and operate under IFR. The rationale: Class A airspace is used by fast turbine aircraft in high-density environments where ATC must provide separation to ALL traffic. VFR see-and-avoid at these speeds and traffic densities is not adequate.',
  reference: 'AIP ENR 1.4 / ICAO Annex 11'
},

{
  question: 'The term "ETA" in Australian aviation refers to:',
  options: [
    'A. Engine Takeoff Altitude, subject to the operator's approved exposition authorising such operations',
    'B. Emergency Turnback Altitude, subject to the requirements of the applicable Civil Aviation Order',
    'C. Estimated Time of Arrival — the predicted time the aircraft will arrive at a specified location (aerodrome, waypoint, or reporting point)',
    'D. En-route Traffic Advisory, subject to written approval from the operator's chief pilot, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'ETA (Estimated Time of Arrival): the crew\\\'s best estimate of when the aircraft will arrive at a specified position. ETAs are included in position reports, flight plans, and communications with ATC. ETA accuracy is important for procedural separation in non-radar environments and for SAR coverage. ETA is expressed in UTC (Coordinated Universal Time) in Australian aviation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Under CASR Part 91, an aircraft flying at night must display:',
  options: [
    'A. Only a white strobe light on top of the fuselage, provided CASA has been notified of the operation at least 24 hours in advance, only when operating in Class',
    'B. Only the navigation lights — anti-collision lights are optional at night, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Landing lights at all times when flying at night, subject to the operator's approved exposition authorising such operations, except when the operation in',
    'D. Navigation lights (red left, green right, white tail) and an anti-collision light (red rotating beacon or white strobe) when in flight and when on the ground with engines running'
  ],
  correct: 3,
  explanation: 'Night lighting requirements: navigation lights (red port, green starboard, white aft) AND anti-collision light (rotating red beacon or white strobe) must be illuminated during flight at night and on the ground with engines running. Landing lights are required for night landings but are not mandated at all times during night flight.',
  reference: 'CASR Part 91 / ICAO Annex 2'
},

{
  question: 'An aircraft conducting a night VFR flight must maintain a minimum altitude of:',
  options: [
    'A. 500 ft above all obstacles, provided the pilot has logged at least 3 hours on type in the preceding 90 days, except when the operation in',
    'B. 5,000 ft AMSL at all times, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. 1,000 ft above all obstacles and terrain within a specified corridor — night VFR cloud clearances and altitude requirements are more stringent than day VFR due to reduced visibility of obstacles',
    'D. The same as day VFR — night has no additional altitude requirements, only when operating in Class C or Class D controlled airspace, except when the operation in'
  ],
  correct: 2,
  explanation: 'Night VFR requirements are more stringent than day VFR. The minimum altitude over congested areas at night is 1,000 ft above the highest obstacle within 600 m. Night VFR cloud clearances include specific distance requirements from cloud. The increased minimums reflect the reduced visibility of terrain and obstacles at night.',
  reference: 'CASR Part 91 / AIP ENR 1.2'
},

{
  question: 'The ATIS broadcast at a controlled aerodrome typically includes which of the following items?',
  options: [
    'A. Traffic volume and expected holding times, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Only QNH and active runway, provided a current instrument rating is held for the relevant aircraft category, except during the period of ',
    'C. Time of observation, aerodrome name, ATIS code, expected approach type, active runway, QNH, temperature, dew point, wind, visibility, cloud, weather, and relevant NOTAMs',
    'D. Pilot preferences for approach type, subject to written approval from the operator's chief pilot, provided the aircraft holds '
  ],
  correct: 2,
  explanation: 'ATIS content (AIP GEN 3.4): observation time; aerodrome identifier; sequential ATIS code letter; expected approach type; active runway(s); significant changes; QNH (and QFE if provided); transition level; temperature and dew point; wind direction and speed; visibility; cloud (type, base, amount); weather (rain, fog, etc.); and relevant NOTAM items. Comprehensive information allows the crew to prepare before initial ATC contact.',
  reference: 'AIP GEN 3.4'
},

{
  question: 'Under Australian regulations, an aircraft is required to carry a serviceable ELT. If the ELT battery has expired, the aircraft:',
  options: [
    'A. May continue operations for up to 30 days after expiry, subject to the requirements of the applicable Civil Aviation Order',
    'B. May continue if the aircraft carries a portable PLB as an alternative, provided a current instrument rating is held for the relevant aircraft category',
    'C. May fly if the PIC accepts responsibility in writing, provided a current instrument rating is held for the relevant aircraft category',
    'D. May not fly until the ELT battery is replaced and the unit is serviceable — an ELT with an expired battery is not serviceable'
  ],
  correct: 3,
  explanation: 'An ELT with an expired battery is unserviceable — it may not transmit effectively in an emergency. The aircraft cannot fly with an unserviceable ELT (if one is required for the operation) until the battery is replaced and the unit is certified as serviceable. A PLB may be an alternative in some circumstances depending on the applicable regulation, but it must be an approved alternative, not just a substitute.',
  reference: 'CAO 20.11 / CASR Part 91'
},

{
  question: 'Under Australian ATC, the phrase "TAXI TO HOLDING POINT RUNWAY 34" means:',
  options: [
    'A. The aircraft is cleared to taxi to the holding point adjacent to runway 34 — it is NOT cleared to enter, cross, or backtrack on runway 34 without a specific runway crossing or backtrack clearance',
    'B. The aircraft is cleared to cross and enter runway 34, subject to the operator's approved exposition authorising such operations, provided CASA has been notif',
    'C. The aircraft is cleared for take-off from runway 34, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr',
    'D. The holding point clearance is the same as a take-off clearance, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class'
  ],
  correct: 0,
  explanation: 'Taxi clearance stops at the holding point — the aircraft must not enter the runway without an explicit crossing, backtrack, or take-off clearance. This is a critical distinction. Runway incursions have occurred when pilots interpreted taxi clearances as including runway entry. Never enter a runway without explicit clearance — if in doubt, ask ATC.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'Under CASR Part 91, an aircraft must not be operated unless the pilot in command has access to current aeronautical charts covering:',
  options: [
    'A. Only the departure and destination aerodromes, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'B. Only the destination if the route is a standard airway, subject to the pilot completing the required recurrent training within 12 months',
    'C. Only instrument approach charts — en-route charts are optional, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The route to be flown, the destination and alternate aerodromes, and sufficient area to allow diversion if required — charts must be current for the date of the flight'
  ],
  correct: 3,
  explanation: 'Current aeronautical charts are a fundamental requirement for flight. The pilot must have charts covering the route, destination, alternate, and potential diversion areas — all current for the date of flight. Outdated charts may not reflect current procedures, approach minimums, or airspace. Electronic charts on approved EFBs satisfy this requirement if they are current.',
  reference: 'CASR Part 91'
},

{
  question: 'The "QFE" altimeter setting:',
  options: [
    'A. Is used as the standard Australian altimeter setting, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'B. When set on the altimeter, causes the altimeter to read zero when the aircraft is at the aerodrome reference point — it reads HEIGHT above the aerodrome, not altitude above sea level. Rarely used in Australia',
    'C. Is the same as QNH but measured in inHg, subject to the pilot completing the required recurrent training within 12 months, except during the period of ',
    'D. Is used only above 10,000 ft in Australia, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except when the operation in'
  ],
  correct: 1,
  explanation: 'QFE is the pressure at the aerodrome reference point. When QFE is set, the altimeter reads zero on the ground and height above the aerodrome in flight. QFE is rarely used in Australia — QNH (altitude AMSL) is standard. Some military and overseas aerodromes use QFE. IFR approach minima in Australia are published as altitude (AMSL using QNH), not as height (using QFE).',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under Australian law, the Civil Aviation Safety Authority (CASA) was established by the:',
  options: [
    'A. Aviation Transport Security Act 2004, provided a current instrument rating is held for the relevant aircraft category',
    'B. Air Navigation Act 1920, subject to the requirements of the applicable Civil Aviation Order',
    'C. Civil Aviation Act 1988, which created CASA as the independent regulatory authority responsible for Australian civil aviation safety',
    'D. Transport Safety Investigation Act 2003, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'CASA was established by the Civil Aviation Act 1988 (amended) as an independent statutory authority responsible for the safety regulation of civil aviation in Australia. CASA issues regulations (CASR), conducts safety oversight, grants and suspends licences and certificates, and promotes safety in civil aviation. It is separate from Airservices Australia (ATC/navigation services) and ATSB (accident investigation).',
  reference: 'Civil Aviation Act 1988'
},

{
  question: 'Under the AIP, a "Go Around" from a precision approach must be initiated no later than:',
  options: [
    'A. 100 ft above the published DH, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided the aircraft holds ',
    'B. At the Decision Height (DH) — if the required visual reference is not established at DH, the missed approach must be initiated immediately. Continuing below DH without the required visual reference is prohibited',
    'C. When the runway centreline is not visible, subject to written approval from the operator's chief pilot, subject to the pilot complet',
    'D. When the aircraft has reached a point from which a safe landing is not possible, only when operating in Class C or Class D controlled airspace, subject to the operator's ap'
  ],
  correct: 1,
  explanation: 'Decision Height (DH): the altitude at which a decision must be made — go around or continue. If the required visual reference is not established at DH, the missed approach must be initiated immediately. Some operators use a "decision" slightly above DH as an operational gate — but the regulatory requirement is that descent below DH without the required visual reference is prohibited.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'Under CASR, the phrase "in command under supervision" (ICUS) applies to:',
  options: [
    'A. A pilot who is performing the duties of pilot in command, with a supervising PIC also on board who can act as PIC if required — time logged may count as PIC time with appropriate endorsement by the supervising pilot',
    'B. A co-pilot assisting the captain with workload management, subject to the requirements of the applicable Civil Aviation Order, subject to the operator's ap',
    'C. Any training flight with an instructor present, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'D. The second-in-command on a multi-crew flight, except when the operation involves more than 9 passenger seats, only when operating in Class'
  ],
  correct: 0,
  explanation: 'ICUS (In Command Under Supervision): the designated pilot performs PIC functions under the oversight of a supervising (safety) pilot. The supervisory pilot ensures safety and can assume PIC duties if needed. ICUS time is logged as PIC by the ICUS pilot if the supervisor confirms this was the case. Used in upgrade training (CPL to ATPL, or endorsement training) to build PIC experience.',
  reference: 'CASR Part 61 / ICAO Annex 1'
},

{
  question: 'An aircraft at cruise altitude receives a TCAS traffic advisory (TA) — amber. The required response is:',
  options: [
    'A. Immediately follow any climb or descent instruction displayed, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in',
    'B. Advise ATC and request the traffic be cleared from the vicinity, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'C. Climb 1,000 ft immediately as a precautionary measure, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided the aircraft holds ',
    'D. Increase vigilance and visual scan for the traffic — a TA is advisory only; no manoeuvre is required until a Resolution Advisory (RA) is issued. However, be prepared to respond to an RA immediately'
  ],
  correct: 3,
  explanation: 'Traffic Advisory (TA — amber): advisory only — heighten visual scan, be prepared for RA. Do NOT manoeuvre based on a TA alone. Resolution Advisory (RA — red): manoeuvre immediately as commanded. Manoeuvring on a TA without RA can worsen the situation by creating a conflict with other traffic that ATC is managing. Advise ATC of the TA so they are aware of potential conflicts.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'The minimum visibility for commencing a take-off under IFR at a controlled aerodrome is:',
  options: [
    'A. Always 800 m RVR, subject to the operator's approved exposition authorising such operations, provided a current instrumen',
    'B. Zero — take-off minimums do not exist in Australian regulations, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'C. Always the same as the published approach minimums for the aerodrome, except when the operation involves more than 9 passenger seats, subject to the operator's ap',
    'D. As published for the specific aerodrome and aircraft — take-off minimums may be different from approach minimums and are specified in the operator\\\'s Operations Manual or the published aerodrome departure procedures'
  ],
  correct: 3,
  explanation: 'Take-off minimums are separate from approach minimums. Under CAO 82.0 and the operator\\\'s approved procedures, take-off minimum visibility/RVR is specified. The minimum may be 150 m RVR for Category III-capable aircraft, or higher for less-capable aircraft or aerodromes with obstacles. The AIP and operator\\\'s Operations Manual specify take-off minimums. Zero-zero take-offs are not generally authorised.',
  reference: 'CAO 82.0 / AIP ENR 1.5'
},

{
  question: 'The Australian National Airspace System (NAS) changes introduced "Class E" airspace in Australia. Class E airspace:',
  options: [
    'A. Requires ATC clearance for all aircraft (same as Class C), except when the operation involves more than 9 passenger seats',
    'B. Is only available above FL200, except when the operation involves more than 9 passenger seats',
    'C. Requires an ATC clearance for IFR only — VFR may enter without clearance. ATC provides IFR/IFR separation but does NOT separate IFR from VFR',
    'D. Is exactly the same as Class G — no services are provided, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'Class E airspace in Australia: IFR requires ATC clearance; VFR does not require ATC clearance. ATC provides IFR/IFR separation. ATC does NOT separate IFR from VFR in Class E — IFR pilots receive traffic information about known VFR, but the VFR pilot has no obligation to comply with ATC instructions in Class E. This is a key operational consideration for IFR pilots in Class E.',
  reference: 'AIP ENR 1.4'
},

{
  question: 'Under the AIP, VOLMET broadcasts provide:',
  options: [
    'A. ATC clearances for arriving aircraft, subject to written approval from the operator's chief pilot, only when operating in Class',
    'B. Continuous recorded meteorological information for specified aerodromes broadcast on VHF/HF frequencies — crews use VOLMET to update weather information in flight without requiring ATC intervention',
    'C. Traffic information and separation advisories, subject to the operator's approved exposition authorising such operations, except during the period of ',
    'D. Navigation aid status and NOTAM information, only if the operator holds a specific approval under their Air Operator Certificate, subject to the operator's ap'
  ],
  correct: 1,
  explanation: 'VOLMET: continuous broadcast of meteorological information (METARs, TAFs, SIGMETs) for designated aerodromes. Available on specific VHF and HF frequencies. Used by en-route IFR crews to monitor destination and alternate weather without requiring a direct call to ATC. The information updates regularly — crews should check VOLMET periodically on long sectors.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'For operations in the Southern Ocean beyond HF radio range, the communication method is:',
  options: [
    'A. VHF relay through other aircraft, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'B. Morse code on shortwave frequencies, subject to the operator's approved exposition authorising such operations, only if the operator holds a',
    'C. Operations beyond HF range are not permitted for Australian-registered aircraft, subject to the operator's approved exposition authorising such operations',
    'D. SATCOM (satellite communications) — for areas beyond HF radio range, SATCOM provides voice and data communications with ATC and company. SELCAL may also be used to alert crew to HF calls'
  ],
  correct: 3,
  explanation: 'Beyond HF radio range (and for more reliable communications): SATCOM (INMARSAT, Iridium) provides voice and data. SELCAL (SELective CALling) is used with HF to alert specific aircraft to an incoming call, allowing the radio to be monitored without speaker noise. ADS-C (Automatic Dependent Surveillance-Contract) provides position reports via datalink. These are essential for long-haul oceanic operations.',
  reference: 'AIP ENR 1.1 / ICAO Annex 10'
},

{
  question: 'Under CASR, an ATPL holder convicted of a drug-related offence:',
  options: [
    'A. Retains their licence provided they were not impaired during flight operations, subject to the operator's approved exposition authorising such operations',
    'B. Only loses their licence if the offence involved aviation activities, only when operating in Class C or Class D controlled airspace, except during the period of ',
    'C. Is automatically granted amnesty under the voluntary disclosure scheme, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Is required to notify CASA — CASA may cancel, suspend, or impose conditions on the licence depending on the nature of the offence and the pilot\\\'s suitability to hold aviation documents'
  ],
  correct: 3,
  explanation: 'Under the Civil Aviation Act, CASA may cancel or suspend aviation documents when the holder is convicted of certain offences, including drug-related offences, that affect their suitability. The holder must notify CASA of relevant convictions. The "fit and proper person" assessment applies to all aviation document holders — character and fitness are relevant to the right to hold aviation documents.',
  reference: 'Civil Aviation Act 1988 / CASR Part 11'
},

{
  question: 'The "Operational Control" of an air transport aircraft is the responsibility of:',
  options: [
    'A. Exclusively the captain in command during flight, subject to written approval from the operator's chief pilot, provided the aircraft holds ',
    'B. ATC for all aspects of the flight once airborne, except during the period of any declared low visibility procedures at the aerodrome, provided CASA has been notif',
    'C. Jointly shared between the AOC holder (operator) and the pilot in command — the operator provides the framework (aircraft, approvals, schedules) and the PIC makes the final safety decisions during the flight',
    'D. CASA through its continuous oversight of all commercial operations, provided the aircraft holds a valid maintenance release and is within weight limits, except during the period of '
  ],
  correct: 2,
  explanation: 'Operational control in civil aviation: the AOC holder exercises operational control (scheduling, routing, dispatch, crew assignment), and the PIC exercises in-flight command authority. The operator cannot override the PIC\\\'s safety decisions. The PIC cannot operate outside the operator\\\'s approved procedures without safety justification. ICAO defines operational control as "the exercise of authority over the initiation, continuation, diversion, or termination of a flight."',
  reference: 'CASR Part 119 / ICAO Annex 6'
},

{
  question: 'Under Australian aviation law, it is an offence for any person on board an aircraft to:',
  options: [
    'A. Assault or intimidate the crew, endanger the safety of the aircraft or persons on board, or disobey a lawful instruction of the pilot in command',
    'B. Use personal electronic devices during flight, provided a current instrument rating is held for the relevant aircraft category',
    'C. Carry food on board without the airline\\\'s permission, except when the operation involves more than 9 passenger seats',
    'D. Smoke in any area of the aircraft regardless of airline policy, subject to written approval from the operator's chief pilot'
  ],
  correct: 0,
  explanation: 'The Crimes (Aviation) Act 1991 and the Civil Aviation Act create offences for acts on board aircraft including: assaulting crew or passengers; interfering with the aircraft; not complying with crew instructions; and endangering the aircraft or its occupants. The PIC has authority to restrain persons who endanger the flight and to offload passengers who refuse to comply with lawful instructions.',
  reference: 'Crimes (Aviation) Act 1991 / Civil Aviation Act 1988'
},

{
  question: 'The minimum aerodrome RFFS category required to permit take-off and landing by a specific aircraft type is determined by:',
  options: [
    'A. The number of passengers on board, except during the period of any declared low visibility procedures at the aerodrome, subject to written approval ',
    'B. The aircraft MTOW only, only when operating in Class C or Class D controlled airspace, subject to the operator's ap',
    'C. The operator\\\'s risk assessment for each specific operation, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. The aircraft\\\'s overall length and maximum fuselage width — these two dimensions determine the minimum RFFS category as published in the ICAO and CASR Part 139 standards'
  ],
  correct: 3,
  explanation: 'RFFS category is determined by the aircraft\\\'s overall length AND maximum fuselage width. Both dimensions must be checked — the higher category of the two applies. ICAO Annex 14 Table 9-1 lists the RFFS categories based on these aircraft dimensions. An aerodrome with insufficient RFFS category may not permit operations by larger aircraft during normal hours.',
  reference: 'CASR Part 139 / ICAO Annex 14 Table 9-1'
},

{
  question: 'An ATPL holder approaches their destination aerodrome and finds it is below published minimums due to unforecast fog. They have insufficient fuel to reach the nominated alternate. The priority is to:',
  options: [
    'A. Declare MAYDAY FUEL and attempt the approach regardless of minimums, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Declare MAYDAY FUEL immediately, advise ATC, and identify the closest aerodrome with suitable weather and fuel — proceed there as an emergency diversion with maximum priority',
    'C. Continue circling the destination until fuel requires a landing regardless of conditions, provided the currency requirement is met within the preceding 6 months',
    'D. Attempt the approach below minimums as an emergency measure, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: 'This is a genuine emergency. MAYDAY FUEL: advise ATC immediately, identify the closest aerodrome with acceptable conditions (even a shorter runway is acceptable in an emergency), request priority routing. ATC will provide emergency priority handling and clear other traffic. The minimum visibility rule does not apply in a genuine emergency — the PIC may deviate from any rule as necessary when safety demands it. However, the MAYDAY declaration triggers maximum ATC assistance.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'A "wet lease" under which the lessor provides the aircraft, crew, maintenance, and insurance, and the lessee provides route licensing — under Australian law, the operating carrier is:',
  options: [
    'A. Always the lessor — they provide the aircraft and crew, provided the aircraft holds a valid maintenance release and is within weight limits, subject to written approval ',
    'B. Always the lessee — they sell the tickets, except during the period of any declared low visibility procedures at the aerodrome, subject to the pilot complet',
    'C. Determined by the CASA-approved arrangement — typically the AOC under which the flight operates determines regulatory responsibility; CASA must approve the wet lease arrangement to ensure clear accountability',
    'D. Irrelevant — both parties share equal responsibility, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided CASA has been notif'
  ],
  correct: 2,
  explanation: 'Wet lease regulatory accountability in Australia requires CASA approval. CASA determines which party holds the relevant AOC and therefore bears regulatory responsibility for the operation. Typically, the lessor (aircraft/crew provider) maintains operational control under their AOC, and the lessee uses the capacity under agreed commercial terms. Complex arrangements require CASA examination to ensure clear accountability.',
  reference: 'CASR Part 119 / CASR Part 121'
},

{
  question: 'The "Annex 6" to the Chicago Convention deals with:',
  options: [
    'A. Operation of aircraft — it specifies standards for the operation of international commercial air transport (Part I) and international general aviation (Part II)',
    'B. Airworthiness of aircraft, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet',
    'C. Personnel licensing, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements ',
    'D. Air traffic services, subject to the requirements of the applicable Civil Aviation Order, only when operating in Class'
  ],
  correct: 0,
  explanation: 'ICAO Annex 6 (Operation of Aircraft): Part I covers international commercial air transport (airline operations); Part II covers international general aviation — aeroplane; Part III covers international general aviation — helicopters. It specifies operational standards including performance, equipment, crew qualifications, and documentation. Australian CASR incorporates Annex 6 requirements.',
  reference: 'ICAO Annex 6'
},

{
  question: 'Under Australian regulations, the maximum time an IFR charter pilot may be on duty (total duty, not just flying) in any 24-hour period under single crew operations is:',
  options: [
    'A. 10 hours',
    'B. 14 hours',
    'C. 12 hours',
    'D. 8 hours'
  ],
  correct: 1,
  explanation: 'Under CAO 48.1, for single-pilot IFR charter operations, the maximum total duty time in any 24-hour period is typically 14 hours (flight duty period). The maximum flight time within that duty period is 10 hours. These limits include all duty time from the start of the first duty activity to the end of the last. Exceeding these limits is an offence.',
  reference: 'CAO 48.1'
},

{
  question: 'The "circuit area" at a non-controlled aerodrome is typically at a height of:',
  options: [
    'A. 500 ft AGL for all aircraft, provided CASA has been notified of the operation at least 24 hours in advance, only if the operator holds a',
    'B. 1,000 ft AGL for fixed-wing aircraft (unless otherwise published) — aircraft should join, position in the circuit, and fly at this height AGL, adjusting to published circuit heights where specified in the ERSA',
    'C. 2,000 ft AGL for turbine aircraft, provided a current instrument rating is held for the relevant aircraft category, subject to the requirements ',
    'D. 1,500 ft AGL for all aircraft regardless of type, provided CASA has been notified of the operation at least 24 hours in advance, subject to the operator's ap'
  ],
  correct: 1,
  explanation: 'Standard circuit height for fixed-wing aircraft at non-controlled aerodromes is 1,000 ft AGL. Some aerodromes publish different heights (500 ft for ultralights, 1,500 ft or 2,000 ft for turbine aircraft). The ERSA lists published circuit heights. A common circuit height standard improves situational awareness and reduces the risk of circuit conflicts between different aircraft types.',
  reference: 'AIP ENR 1.1 / ERSA'
},

{
  question: 'Under the AIP, "essential traffic" differs from "traffic information" in that:',
  options: [
    'A. Essential traffic refers to conflicting IFR traffic for which ATC cannot maintain separation and for which the crew must maintain own separation (in VMC) — traffic information is advisory for situational awareness only',
    'B. Essential traffic is VFR only; traffic information applies to IFR, only if the operator holds a specific approval under their Air Operator Certificate, subject to written approval ',
    'C. Essential traffic is closer than traffic information, subject to the pilot completing the required recurrent training within 12 months, except when the operation in',
    'D. There is no difference — both terms are used interchangeably, provided CASA has been notified of the operation at least 24 hours in advance, provided the aircraft holds '
  ],
  correct: 0,
  explanation: 'Essential traffic: ATC cannot maintain standard separation; advises the crew of the specific conflict; the crew must maintain their own separation (if in VMC) or take other action. Traffic information: advisory information about known traffic that ATC is either separating from (IFR) or simply informing about (VFR). Essential traffic imposes an active responsibility on the pilot; traffic information is informational.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'The minimum equipment on board an Australian-registered aircraft for flight in controlled airspace that includes transponder-required airspace is:',
  options: [
    'A. Mode A transponder only, subject to the requirements of the applicable Civil Aviation Order, except when the operation in',
    'B. Any transponder regardless of mode, subject to written approval from the operator's chief pilot, subject to the requirements ',
    'C. Mode C transponder (altitude encoding) — required in most Australian controlled airspace above the specified altitudes; Mode S may be required in specific airspace',
    'D. Transponder is optional in controlled airspace — it only improves ATC\\\'s picture, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'Mode C (altitude encoding) transponder is required in Australian controlled airspace at and above prescribed altitudes — currently above 10,000 ft AMSL and in designated transponder mandatory airspace. ADS-B (which integrates with transponders) is additionally required above FL290. Mode C gives ATC the aircraft\\\'s altitude on the radar display, essential for vertical separation.',
  reference: 'AIP ENR 1.6 / CASR Part 91 / CAO 20.18'
},

{
  question: 'Under Australian regulations, a pilot\\\'s flight logbook must be preserved for:',
  options: [
    'A. 5 years from the last entry, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. 7 years from the last entry in the logbook — logbook records are legal documents and are used to verify licence applications, recency, and experience claims',
    'C. Indefinitely — logbooks must never be destroyed, except when the flight exceeds 4 hours and additional crew are required',
    'D. 2 years from the expiry of the associated licence, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'Under CASR Part 61, pilot logbooks must be retained for 7 years after the last entry. Logbooks are primary evidence of flight experience and recency — they are required for licence applications, ATPL applications, and verification of currency. CASA may request the logbook during licence audits. Loss of a logbook can create significant difficulties in proving experience.',
  reference: 'CASR Part 61'
},

{
  question: 'Under the AIP, a conditional clearance such as "AFTER THE DEPARTING BOEING 737, LINE UP RUNWAY 34" requires the crew to:',
  options: [
    'A. Identify the Boeing 737 visually, wait until it has departed (wheels off and clear of the runway), then line up — acting before the condition is met can cause a runway incursion',
    'B. Proceed to line up as soon as the instruction is received, subject to the pilot completing the required recurrent training within 12 months',
    'C. Confirm with ATC that the 737 is airborne before entering the runway, subject to the requirements of the applicable Civil Aviation Order',
    'D. Line up as soon as the 737 commences its take-off roll, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'Conditional clearances: the crew MUST identify the referenced aircraft (or other condition) and wait until the condition is met before acting. "After the departing 737" means wait until the 737 is airborne and clear of the runway. Entering the runway before the condition is met is a potential runway incursion. If unable to identify the referenced aircraft, request clarification from ATC before proceeding.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, the pilot has a legal obligation to report to CASA when:',
  options: [
    'A. Any defect is found during pre-flight inspection, provided a current instrument rating is held for the relevant aircraft category, only when operating in Class',
    'B. Any time the aircraft receives maintenance outside Australia, only if the operator holds a specific approval under their Air Operator Certificate, except during the period of ',
    'C. Only when the pilot is summoned for a medical examination, provided a current instrument rating is held for the relevant aircraft category, except during the period of ',
    'D. The pilot becomes aware of a condition that would affect their eligibility to hold an aviation medical certificate — such as a new illness, injury, or medical treatment that may affect fitness to fly'
  ],
  correct: 3,
  explanation: 'Under CASR Part 67, the holder of an aviation medical certificate must notify CASA when they become aware of a condition, illness, or injury that may render them unable to meet the medical standards for their certificate. This is a proactive reporting obligation — waiting for the next scheduled medical is not sufficient if a significant change in health has occurred.',
  reference: 'CASR Part 67 / Civil Aviation Act 1988'
},

{
  question: 'Under the Civil Aviation Act, the position of CASA\\\'s "Director of Aviation Safety" has the power to:',
  options: [
    'A. Issue flight clearances for individual flights, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Investigate aircraft accidents — this is the ATSB\\\'s role, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Issue, vary, cancel, or suspend aviation documents (licences, certificates, approvals); make legislative instruments; and exercise regulatory powers delegated to CASA under the Act',
    'D. Set airport charges and landing fees, except when the operation involves more than 9 passenger seats, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'The Director of Aviation Safety heads CASA and has broad powers under the Civil Aviation Act including: issuing and revoking licences, certificates and approvals; making regulations and legislative instruments; directing safety oversight activities; and delegating powers to CASA officers. The Director has ultimate authority over Australian civil aviation safety regulation.',
  reference: 'Civil Aviation Act 1988'
},

{
  question: 'Under CASR Part 91, a passenger seated in an exit row must be:',
  options: [
    'A. Physically capable only — no other requirements, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only if the operator holds a',
    'B. A frequent flyer with an emergency briefing card, only when operating in Class C or Class D controlled airspace, subject to the requirements ',
    'C. Able-bodied and wearing appropriate footwear only, only if the operator holds a specific approval under their Air Operator Certificate, provided a current instrumen',
    'D. Willing and able to perform exit opening duties — they must be physically capable, at least 15 years old, not seated with a child, and willing to assist in an emergency. Cabin crew must brief exit row passengers before departure'
  ],
  correct: 3,
  explanation: 'Exit row passengers under CASR Part 121: must be willing and physically able to operate the emergency exit; aged at least 15 years; not seated with a child; not physically incapacitated; able to understand the crew\\\'s briefing. The crew must specifically brief exit row passengers on their responsibilities. Exit row assignment must be reconsidered if a passenger is unwilling or unable to assist.',
  reference: 'CAO 20.7 / CASR Part 121'
},

{
  question: 'ADS-B (Automatic Dependent Surveillance — Broadcast) OUT transmits:',
  options: [
    'A. Only transponder code and altitude, subject to the pilot completing the required recurrent training within 12 months, provided a current instrumen',
    'B. Only works in radar coverage areas, except when the operation involves more than 9 passenger seats, provided CASA has been notif',
    'C. Encrypted signals readable only by ATC ground equipment, subject to the pilot completing the required recurrent training within 12 months',
    'D. GPS-derived position, altitude, groundspeed, track, vertical rate, and aircraft identification — broadcast automatically to ATC and other ADS-B equipped aircraft without interrogation'
  ],
  correct: 3,
  explanation: 'ADS-B OUT: the aircraft broadcasts GPS-derived position, altitude, groundspeed, track, and identification automatically on 1090 MHz without ground interrogation. ATC and ADS-B IN equipped aircraft receive this information. Because no interrogation is needed, ADS-B provides surveillance in areas without conventional radar (e.g. remote Australia, oceanic). ADS-B requires a GPS source and a Mode S transponder with ADS-B capability.',
  reference: 'CASR Part 91 / AIP ENR 1.6 / ICAO Annex 10'
},

{
  question: 'Under Australian ATC procedures, when a crew receives a "CLEARED TO LAND RUNWAY 34L" from the tower, they may land:',
  options: [
    'A. On any runway they choose, subject to the operator's approved exposition authorising such operations',
    'B. On runway 34L only — the clearance specifies the specific runway; landing on 34R or any other runway requires a separate clearance',
    'C. On 34L or 34R as they are parallel runways, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. On 34L or any shorter runway on the same heading, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 1,
  explanation: 'A landing clearance specifies the designated runway — the crew must land on that specific runway. At an aerodrome with parallel runways (34L and 34R), clearance for 34L does not authorise landing on 34R. If the aircraft needs to land on a different runway, a new clearance must be requested and obtained. Proceeding to the wrong runway is a serious incursion risk.',
  reference: 'AIP ENR 1.5 / AIP ENR 1.1'
},

{
  question: 'An Oceanic Clearance for entry into oceanic airspace is obtained:',
  options: [
    'A. From the aerodrome tower at the departure aerodrome, subject to the operator's approved exposition authorising such operations',
    'B. Only through flight plan filing — no radio clearance is required for oceanic entry, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. From CASA before the flight departs, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements ',
    'D. From the relevant Oceanic Control Centre (e.g. Brisbane Oceanic for the Pacific) — typically by HF radio or datalink (ACARS/CPDLC) at least 30 minutes before oceanic entry'
  ],
  correct: 3,
  explanation: 'Oceanic clearance is obtained from the controlling oceanic FIR (Brisbane Oceanic, Melbourne Oceanic, or Indonesian etc.) via HF radio or ACARS/CPDLC datalink, typically at least 30 minutes before oceanic entry. The clearance specifies the oceanic track, flight levels, speed, and entry coordinates. Without an oceanic clearance, entry into oceanic airspace is not authorised.',
  reference: 'AIP ENR 1.1 / Pacific MNPS Documentation'
},

{
  question: 'When departing into a busy terminal area, the phrase "RADAR CONTROL" passed to the crew by ATC confirms:',
  options: [
    'A. The crew is required to operate the autopilot, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. The aircraft has been identified on radar and ATC is now providing a radar service — separation, vectors, and traffic information are based on radar tracking of the aircraft',
    'C. The aircraft\\\'s weather radar is being monitored by ATC, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. ATC will issue specific headings for the entire flight, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: '"Radar control" or "radar service": ATC has identified the aircraft on radar and is providing a radar-based service. This enables: radar separation (instead of procedural); vectors for traffic avoidance; and a more comprehensive ATC service. The pilot may be asked for position reports or these may be waived. ATC\\\'s separation decisions are based on the radar picture rather than reported positions.',
  reference: 'AIP ENR 1.6 / AIP ENR 1.1'
},

{
  question: 'Under Australian regulations, a minimum altitude restriction over a private property requires:',
  options: [
    'A. Compliance with the relevant CASR minimum altitude provisions — property owners do not have exclusive rights to the airspace above their land. CASA administers the airspace, not private landowners',
    'B. Permission from the property owner regardless of the height, provided a current instrument rating is held for the relevant aircraft category, only when operating in Class',
    'C. Permission only if the aircraft is conducting commercial photography, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. Noise complaints from the property owner to be filed with CASA before restrictions apply, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: 'Under Australian common law and the Civil Aviation Act, the Crown (Commonwealth) controls the airspace above private property. Property owners do not have exclusive airspace rights above a certain height. CASR minimum altitudes (not private landowner permissions) govern flight over private property. However, extremely low flight over private property that constitutes nuisance or trespass may have civil law implications.',
  reference: 'Civil Aviation Act 1988 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the "Pilot in Command" designation on a multi-crew aircraft is:',
  options: [
    'A. The pilot designated by the operator as PIC — not necessarily determined by seat position. The operator designates PIC before each flight based on qualifications, rostering, and operational requirements',
    'B. Always the person in the left seat, except when the operation involves more than 9 passenger seats, provided the aircraft holds ',
    'C. Always the pilot with the highest total hours, only when operating in Class C or Class D controlled airspace, except during the period of ',
    'D. Determined by ATC based on the primary pilot identification in the flight plan, except when the operation involves more than 9 passenger seats, subject to the requirements '
  ],
  correct: 0,
  explanation: 'PIC designation: the operator formally designates the PIC for each flight. The PIC may fly from either seat depending on operational requirements and the operator\\\'s procedures. On many modern aircraft, both pilots are qualified for either seat. The PIC designation is recorded in flight and operational documents. The designated PIC bears the legal responsibility for that flight.',
  reference: 'CASR Part 91 / Civil Aviation Act 1988'
},

{
  question: 'Under Australian regulations, the "visual meteorological conditions" (VMC) requirements for controlled airspace above 10,000 ft include:',
  options: [
    'A. 8,000 m (8 km) flight visibility, 1,000 ft above cloud, 1,000 ft below cloud, and 1,500 m horizontal from cloud',
    'B. 1,500 m visibility and clear of cloud, provided a current instrument rating is held for the relevant aircraft category',
    'C. 5,000 m visibility and 1,000 ft below cloud, provided a current instrument rating is held for the relevant aircraft category',
    'D. 10,000 m visibility and no cloud within 10 nm, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'VMC above 10,000 ft AMSL in controlled airspace: 8 km flight visibility; 1,000 ft above cloud; 1,000 ft below cloud; 1,500 m horizontal from cloud. Below 10,000 ft in controlled airspace: 5 km visibility, same cloud clearances. These are ICAO standard VMC minimums adopted in Australia. The tighter above-10,000 ft requirements reflect higher aircraft speeds.',
  reference: 'AIP ENR 1.2 / ICAO Annex 2'
},

{
  question: 'The minimum obstacle clearance provided by the IFR en-route "grid MOCA" published on En-Route Charts is:',
  options: [
    'A. 1,000 ft (non-mountainous) or 2,000 ft (mountainous) above the highest obstacle within the applicable grid square',
    'B. 1,000 ft in all areas regardless of terrain, provided a current instrument rating is held for the relevant aircraft category',
    'C. 500 ft above the highest terrain, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. 2,000 ft above MSL in all areas, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 0,
  explanation: 'Grid MOCA (Minimum Off-Route Altitude / LSALT): provides obstacle clearance of at least 1,000 ft in non-mountainous areas and 2,000 ft in designated mountainous areas, above the highest terrain or obstacle within the grid square. Used for off-airway IFR navigation. Published on ERC (En-Route Charts). Must be met at all times when IFR and not on an instrument approach procedure.',
  reference: 'AIP ENR 1.1 / En-Route Charts (ERC)'
},

{
  question: 'Under Australian ATC, "CONTACT INFORMATION" passed to an aircraft means:',
  options: [
    'A. The aircraft should contact ATIS, subject to the pilot completing the required recurrent training within 12 months, only when operating in Class',
    'B. The aircraft should contact the operator\\\'s dispatch, except during the period of any declared low visibility procedures at the aerodrome, provided CASA has been notif',
    'C. The aircraft should tune to the emergency frequency 121.5 MHz, subject to written approval from the operator's chief pilot, only if the operator holds a',
    'D. The aircraft should contact the flight information service (FIS) on the specified frequency — transitioning from ATC control to FIS advisory service (typically when leaving controlled airspace into Class G)'
  ],
  correct: 3,
  explanation: '"Contact Information [frequency]": the aircraft is leaving the controlled airspace sector and should contact the Flight Information Service (FIS). FIS provides advisory information in Class G airspace — weather, traffic information, and other services — but does NOT provide separation. The transition from ATC to FIS reflects the change from controlled to uncontrolled airspace.',
  reference: 'AIP ENR 1.1 / AIP GEN 3.3'
},

{
  question: 'An aircraft takes off from runway 16 (magnetic bearing 160°). The initial departure track to the north-east requires a right turn. Under standard departure procedures, the crew should:',
  options: [
    'A. Turn immediately after rotation to the north-east heading, provided CASA has been notified of the operation at least 24 hours in advance, only when operating in Class',
    'B. Turn at 50 ft AGL in any direction at the crew\\\'s discretion, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'C. Level at 500 ft before commencing any turn after take-off, provided the relevant aerodrome has a certified RFFS capability for the aircraft, only when operating in Class',
    'D. Follow the published SID or ATC instructions — if no SID applies, climb straight ahead on runway track until reaching the appropriate height/distance before commencing the turn, to ensure obstacle clearance'
  ],
  correct: 3,
  explanation: 'Standard departure procedure when no SID is published or no specific ATC instruction: climb straight ahead on the runway track until at a safe height before commencing manoeuvring. Many operators specify minimum altitudes for initial turns (e.g. 400 ft AAL) and specific heights for SID commencement. Obstacle clearance on departure is critical — early turns can compromise the departing aircraft\\\'s obstacle clearance.',
  reference: 'AIP ENR 1.5 / Operator SOPs'
},

{
  question: 'The "circuit direction" at a non-controlled aerodrome is:',
  options: [
    'A. Always right-hand turns — all non-controlled aerodromes use right-hand circuits, except when the operation involves more than 9 passenger seats',
    'B. Left-hand for all runways unless an obstacle requires right-hand, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. Published in the ERSA for each aerodrome — it may be left-hand or right-hand depending on terrain, obstacles, noise-sensitive areas, or other considerations at that specific aerodrome',
    'D. Determined by the pilot for each individual flight, subject to the pilot completing the required recurrent training within 12 months, subject to written approval '
  ],
  correct: 2,
  explanation: 'Circuit direction is published in the ERSA for each specific runway at each aerodrome. Left-hand circuits are most common internationally, but right-hand circuits are published where terrain, obstacles, noise constraints, or other factors dictate. Pilots must check the ERSA for the circuit direction at each non-controlled aerodrome. Using the wrong circuit direction creates a collision risk with compliant traffic.',
  reference: 'AIP ERSA / AIP ENR 1.1'
},

{
  question: 'A pilot who receives a TCAS RA "MONITOR VERTICAL SPEED — MAINTAIN" should:',
  options: [
    'A. Maintain the current vertical speed or adjust to the green arc on the VSI — "monitor" RAs do not require manoeuvring but direct the pilot to maintain current path which is safe relative to the threat',
    'B. Immediately commence a climb, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a',
    'C. Advise ATC of the alert and request amended clearance, provided the aircraft holds a valid maintenance release and is within weight limits, only when operating in Class',
    'D. Disconnect the autopilot and fly manually, provided a current instrument rating is held for the relevant aircraft category, only if the operator holds a'
  ],
  correct: 0,
  explanation: 'TCAS preventive RA "MONITOR VERTICAL SPEED — MAINTAIN": the system has determined that maintaining the current path is safe. The pilot must maintain the current vertical speed within the green arc — do NOT manoeuvre unless a corrective RA is issued. Preventive RAs are less common than corrective RAs. Manoeuvring unnecessarily in response to a preventive RA could create a new conflict.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'The final reserve fuel for a turbine-powered aircraft under Australian regulations is:',
  options: [
    'A. 45 minutes at normal cruise power, except during the period of any declared low visibility procedures at the aerodrome',
    'B. 1 hour at normal cruise speed, subject to written approval from the operator's chief pilot, except when the operation in',
    'C. 30 minutes at holding speed at 1,500 ft above the destination aerodrome — this fuel must not be planned to be used; it is the safety margin of last resort',
    'D. 20 minutes at approach speed at destination, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 2,
  explanation: 'Final reserve for turbine-powered aircraft (CAO 82.0 / CASR Part 91): 30 minutes of fuel at holding speed at 1,500 ft above the destination aerodrome under standard atmospheric conditions. This fuel represents the minimum landing fuel — it must not be planned to be used. If actual fuel on landing equals or approaches final reserve, "minimum fuel" must be declared to ATC.',
  reference: 'CAO 82.0 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the medical standards for an ATPL Class 1 holder become more stringent with age. Above the age of 40, medical certificates are issued:',
  options: [
    'A. For 2-year periods as usual with no additional requirements, subject to the operator's approved exposition authorising such operations',
    'B. For 12-month periods (instead of 24 months under 40) — medical examinations are required annually for ATPL holders over 40',
    'C. For 6-month periods above the age of 40, except when the flight exceeds 4 hours and additional crew are required',
    'D. There is no age-related change to medical certificate duration, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 1,
  explanation: 'Under CASR Part 67, Class 1 medical certificates for ATPL holders: under 40 years — issued for 12 months (reduced from 24 months standard due to the nature of commercial operations); over 40 years — issued for 12 months with typically enhanced cardiovascular assessment. Some single-pilot commercial operations may have 6-monthly requirements. Always check the current CASR Part 67 requirements as they are periodically updated.',
  reference: 'CASR Part 67 / ICAO Annex 1'
},

{
  question: 'The "traffic pattern altitude" (circuit height) at a towered aerodrome is:',
  options: [
    'A. 500 ft AGL for all aircraft at all controlled aerodromes, provided CASA has been notified of the operation at least 24 hours in advance, only when operating in Class',
    'B. Always 1,500 ft AGL at controlled aerodromes, provided a current instrument rating is held for the relevant aircraft category, provided the aircraft holds ',
    'C. Determined individually by the tower for each arriving aircraft, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. As published in the ERSA for the specific aerodrome, or as assigned by ATC — it varies by aerodrome and may differ for different aircraft categories (helicopters, light aircraft, turbine aircraft)'
  ],
  correct: 3,
  explanation: 'Circuit altitude at controlled aerodromes is published in the ERSA and aerodrome charts. Different heights may apply to different aircraft categories. ATC may assign different altitudes for sequencing. Compliance with the published circuit altitude ensures vertical separation between inbound/outbound traffic and circuit traffic.',
  reference: 'AIP ERSA / AIP AD'
},

{
  question: 'Under the AIP, an aircraft on the ILS final approach that observes the approach lights are visible but the runway threshold is not due to low cloud or fog should:',
  options: [
    'A. Continue below DH using the approach lights as visual reference, subject to the operator's approved exposition authorising such operations, provided the relevant aerodr',
    'B. Continue to landing using only approach lights as reference, provided CASA has been notified of the operation at least 24 hours in advance, only if the operator holds a',
    'C. Contact ATC for permission to use approach lights only as visual reference, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in',
    'D. Verify what visual reference has been acquired — approach lights alone may permit descent below DH only to 100 ft above touchdown elevation (under CAT I procedures). If the threshold markings are not then visible, a missed approach must be executed'
  ],
  correct: 3,
  explanation: 'Visual reference at DA/H (CAT I): approach lights allow initial descent below DA but only to 100 ft above touchdown elevation. If by that point the crew cannot see the threshold, threshold lights, or runway environment, a missed approach is mandatory. Continuing an approach below DA without adequate visual reference is extremely dangerous and is explicitly prohibited.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'For an ATPL holder to act as examiner and conduct a flight test for another pilot\\\'s licence, the ATPL holder must hold:',
  options: [
    'A. A flight examiner (FE) rating appropriate to the test being conducted, granted by CASA — ATPs alone do not authorise conducting formal flight tests',
    'B. Only a current ATPL with more than 5,000 total hours, except when the operation involves more than 9 passenger seats',
    'C. A Grade 1 Flight Instructor Rating at minimum, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Only the operator\\\'s check captain authority — no CASA authorisation is required, subject to written approval from the operator's chief pilot'
  ],
  correct: 0,
  explanation: 'Flight examiner ratings are separate from pilot licences. To conduct formal flight tests (licence skill tests, instrument rating tests, proficiency checks), a pilot must hold a CASA-issued flight examiner rating appropriate to the test category and aircraft type. The FE rating is granted after specific examiner training and assessment. Without an FE rating, an ATPL holder cannot legally conduct formal examinations.',
  reference: 'CASR Part 61'
},

{
  question: 'Under the AIP, the phrase "MAINTAIN PRESENT HEADING" from ATC requires:',
  options: [
    'A. The aircraft to fly straight and level at the current heading indefinitely, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. The aircraft to maintain the filed flight plan heading only, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'C. The aircraft to use the autopilot heading mode only, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. The aircraft to continue on the current magnetic heading until further instructions — this is typically issued to assist with radar identification or for short-term sequencing'
  ],
  correct: 3,
  explanation: '"Maintain present heading": fly the current magnetic heading until ATC issues an amended instruction. This is a short-term instruction used for identification, sequencing, or temporary conflict resolution. The pilot acknowledges and maintains the heading. A new heading will be issued shortly. This instruction does not amend the filed flight plan — when further instruction is received, the heading will be changed.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under CASR, when does an IFR aircraft\\\'s PIC need to notify CASA after deviating from an ATC clearance for safety reasons?',
  options: [
    'A. Before the next flight, subject to written approval from the operator's chief pilot, except during the period of ',
    'B. Within 48 hours by written report only, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet',
    'C. Only if the deviation resulted in an airspace infringement, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. As soon as practicable after the deviation — if the deviation was necessary for safety, report to ATC during the flight and complete any required occurrence reports after landing'
  ],
  correct: 3,
  explanation: 'Emergency deviation from ATC clearance: advise ATC during the flight ("Unable, safety requires..."). After landing, if the deviation involved a serious occurrence or regulatory breach (even safety-justified), report through the operator\\\'s SMS and to CASA/ATSB as required by the MOR scheme. The safety justification is a defence — but the deviation must still be reported.',
  reference: 'CASR Part 91 / Transport Safety Investigation Act'
},

{
  question: 'The "Melbourne FIR" encompasses:',
  options: [
    'A. The majority of Australian airspace and extends over the southern oceans to the edges of adjacent FIRs — it is one of the largest FIRs in the world',
    'B. Only Victoria and Tasmania, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'C. Only Australian mainland airspace within 200 nm of Melbourne, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Exclusively the airspace below FL245 in southeastern Australia, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'The Melbourne FIR covers the southern and central Australian airspace and extends far into the Southern Ocean, covering some of the most remote aviation in the world. The Brisbane FIR covers northern Australia and the Pacific. Together they cover Australian airspace plus enormous areas of oceanic responsibility. The Melbourne FIR extends to meet the Johannesburg, Johannesburg Oceanic, Auckland, and other adjacent FIRs.',
  reference: 'AIP ENR 2.1 / ICAO'
},

{
  question: 'Under Australian regulations, an aircraft\\\'s weight and balance must be calculated:',
  options: [
    'A. Only when carrying maximum payload, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Before every flight — the loading must be confirmed to be within the aircraft\\\'s certified weight and CG envelope for all phases of the intended flight',
    'C. Only for flights above 5,700 kg MTOW, provided the aircraft does not exceed 5,700 kg maximum certificated weight',
    'D. Monthly — a monthly weight and balance check is sufficient, subject to written approval from the operator's chief pilot'
  ],
  correct: 1,
  explanation: 'Weight and balance must be calculated for every flight. The loading changes between flights (passengers, cargo, fuel quantities) and must be verified to be within limits. The CG envelope must be checked at take-off and estimated at landing — some aircraft experience CG shift during flight as fuel burns from various tanks. The calculation is the PIC\\\'s responsibility or the operator\\\'s designee, but the PIC must accept the loading.',
  reference: 'CASR Part 91 / CAO 82.0'
},

{
  question: 'In Australian IFR operations, a "Q" route designator on an En-Route Chart indicates:',
  options: [
    'A. An RNAV route in the lower airspace (below FL200 approximately) — these routes are defined by waypoints rather than VOR/NDB stations and require RNAV navigation capability',
    'B. A route requiring special qualification, subject to the pilot completing the required recurrent training within 12 months',
    'C. A route for supersonic aircraft only, except when the operation involves more than 9 passenger seats, subject to written approval ',
    'D. A temporary route activated by NOTAM, provided a current instrument rating is held for the relevant aircraft category, subject to the pilot complet'
  ],
  correct: 0,
  explanation: 'Route designators in Australian airspace: Q routes are RNAV (area navigation) routes in lower airspace. Y routes are RNAV routes in upper airspace. A, B, G, R, L, H etc. are conventional (navaid-based) airways. RNAV routes allow more direct routing than conventional airways constrained by navaid positions. Aircraft must have approved RNAV equipment to fly Q/Y routes.',
  reference: 'AIP ENR 3.1 / AIP ENR 1.5'
},

{
  question: 'The AIP note "DEPARTURE ALTERNATE REQUIRED" at a specific aerodrome means:',
  options: [
    'A. An alternate is required for all flights regardless of weather, provided CASA has been notified of the operation at least 24 hours in advance, subject to the operator's ap',
    'B. Only applies to IFR operations — VFR flights are exempt, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the requirements ',
    'C. The departure alternate must be the same as the destination alternate, only when operating in Class C or Class D controlled airspace, except during the period of ',
    'D. The aerodrome has characteristics (single approach, no alternate approach, etc.) such that if the departure aircraft must return immediately after take-off, the aerodrome itself may not be usable — a departure alternate must be nominated within specified distance/time'
  ],
  correct: 3,
  explanation: 'A departure alternate is required when: the weather at the departure aerodrome is at or below approach minimums; or the aerodrome has only one instrument approach and that approach minimum is forecast to be at or near minimums. If the aircraft must return after departure, it must have somewhere to go. The departure alternate must be reachable with fuel remaining from a near-immediate return.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'Under CASR Part 91, an aircraft operated under IFR must not descend below the applicable LSALT unless:',
  options: [
    'A. The crew can see the ground and are in VMC, only when operating in Class C or Class D controlled airspace, provided the aircraft holds ',
    'B. The captain has more than 1,000 hours on the type, subject to the pilot completing the required recurrent training within 12 months',
    'C. The aircraft is established on a published instrument approach procedure, or has been vectored below LSALT by ATC who has accepted terrain clearance responsibility',
    'D. The aircraft is within 50 nm of the destination aerodrome, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 2,
  explanation: 'LSALT must be maintained during all IFR en-route flight. Descent below LSALT is only permissible when established on a published instrument approach procedure providing its own obstacle clearance, or when vectored below LSALT by ATC who has accepted terrain clearance responsibility. Visual conditions in VMC do not override the IFR LSALT requirement.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'When an IFR aircraft is established in a holding pattern at a published holding fix below FL140, the standard inbound leg timing should be:',
  options: [
    'A. 1 minute (60 seconds) from abeam the holding fix to commencement of the inbound turn',
    'B. 30 seconds, provided the pilot has logged at least 3 hours on type in the preceding 90 days',
    'C. 2 minutes, subject to completing a flight review within the preceding 12 months',
    'D. The outbound leg is timed by distance only, not time'
  ],
  correct: 0,
  explanation: 'Standard holding below FL140: outbound leg is timed to achieve a 1-minute inbound leg. The outbound timing is adjusted for winds — headwind on inbound requires longer outbound time. Above FL140, the standard inbound leg is 1.5 minutes. The inbound leg time is the standard; the outbound leg time varies to achieve it.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under Australian regulations, the minimum total aeronautical experience for a CPL (Aeroplane) is:',
  options: [
    'A. 150 hours total flight time, subject to written approval from the operator's chief pilot',
    'B. 500 hours total flight time, provided a current instrument rating is held for the relevant aircraft category',
    'C. 200 hours total flight time, including specified cross-country, night, and instrument time',
    'D. 100 hours total flight time, subject to completing a flight review within the preceding 12 months'
  ],
  correct: 2,
  explanation: 'Under CASR Part 61, the CPL(A) requires a minimum of 200 hours total flight time including: 100 hours PIC; 20 hours cross-country PIC; 5 hours night; 10 hours instrument time. These meet the ICAO Annex 1 minimum requirements. Many employers require significantly more than the regulatory minimums.',
  reference: 'CASR Part 61 / ICAO Annex 1'
},

{
  question: 'The Flight Level Allocation Scheme (FLAS) in Australian airspace allocates flight levels so that:',
  options: [
    'A. Jets get even flight levels and propeller aircraft get odd flight levels, except when the operation involves more than 9 passenger seats, provided a current instrumen',
    'B. Higher-performance aircraft always get higher flight levels, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. IFR traffic gets even levels and VFR traffic gets odd levels, subject to the requirements of the applicable Civil Aviation Order, except when the operation in',
    'D. Eastbound traffic (045-224 magnetic) uses odd thousands and westbound traffic (225-044 magnetic) uses even thousands — providing inherent vertical separation between opposite-direction traffic'
  ],
  correct: 3,
  explanation: 'FLAS: eastbound (045-224° magnetic) = odd thousands (FL110, FL130, FL150...); westbound (225-044° magnetic) = even thousands (FL120, FL140, FL160...). This provides baseline separation between opposite-direction cruising traffic. ATC assigns levels within FLAS and may deviate with coordination.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'An aircraft cruising at FL150 on a track of 300° magnetic is:',
  options: [
    'A. On an incorrect FLAS level — 300° is westbound (225-044°) requiring even flight levels; FL150 is odd and should be FL140 or FL160',
    'B. Correctly allocated — odd levels apply to all northwest tracks, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. Correctly allocated — FLAS only applies to direct east and west tracks, subject to the requirements of the applicable Civil Aviation Order',
    'D. Correctly allocated — FLAS only applies above FL200, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 0,
  explanation: 'FLAS: track 300° falls in the westbound semicircle (225-044° magnetic). Westbound requires even flight levels. FL150 is odd — it is a FLAS violation for a westbound track. The aircraft should be at FL140 or FL160. Incorrect FLAS allocation removes the built-in separation from oncoming traffic.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Under Australian regulations, the blood alcohol concentration (BAC) limit for a flight crew member on duty is:',
  options: [
    'A. 0.05 g/100 mL — the same as road driving, subject to the requirements of the applicable Civil Aviation Order',
    'B. 0.00 g/100 mL — zero tolerance applies absolutely, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'C. 0.02 g/100 mL — significantly lower than road driving to reflect the safety-critical nature of aviation',
    'D. 0.08 g/100 mL, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 2,
  explanation: 'Aviation BAC limit is 0.02 g/100 mL — substantially lower than the road driving limit of 0.05. Additionally, the 8-hour bottle-to-throttle rule means that in most cases BAC should be zero. The 0.02 limit provides a safety margin for residual alcohol. Breathalyser testing of crew by CASA and police is authorised under Australian law.',
  reference: 'CAR 256 / CASR Part 99'
},

{
  question: 'Under the AIP, a VFR flight operating within the vicinity of a non-towered aerodrome must:',
  options: [
    'A. File a flight plan before entering the aerodrome vicinity, subject to the operator's approved exposition authorising such operations',
    'B. Make CTAF broadcasts at specified positions, join the published circuit, comply with the published circuit direction, and integrate safely with other traffic',
    'C. Obtain ATC clearance before entering within 10 nm, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. Comply with instrument meteorological conditions rules, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: 'At non-towered aerodromes, VFR pilots must: make broadcasts on CTAF at specified positions (10 nm inbound, joining, final, backtracking, vacated); join the published circuit in the correct direction; integrate with other traffic by building situational awareness through listening and broadcasting. These procedures protect both IFR and VFR traffic around non-controlled aerodromes.',
  reference: 'AIP ENR 1.4 / AIP ENR 1.1'
},

{
  question: 'A turboprop aircraft is cleared for an ILS approach. The pre-approach checks that must be completed before the FAF include:',
  options: [
    'A. ILS frequency tuned and identified, correct approach loaded and verified, approach briefed, ATIS received, QNH set, and aircraft stabilised in approach configuration before the FAF',
    'B. Extending the landing gear only — all other checks occur at the FAF, only when operating in Class C or Class D controlled airspace',
    'C. Only confirming the weather is above minimums, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided a current instrumen',
    'D. Setting the altimeter to QFE at the destination aerodrome, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 0,
  explanation: 'Before FAF: ILS tuned, identified, and raw needles checked; correct approach loaded and cross-checked against chart; approach briefed (DA/H, missed approach, callout altitudes, go-around power); QNH set from ATIS; aircraft configured per SOPs (configuration complete at the FAF). Arriving at the FAF unready is a significant risk factor for unstabilised approaches.',
  reference: 'AIP ENR 1.5 / Operator SOPs'
},

{
  question: 'Under Australian regulations, a pilot who has just recovered from a significant illness or surgery must:',
  options: [
    'A. Wait 30 days before flying as a precautionary measure, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'B. Seek clearance from an approved aviation medical examiner before resuming flying — the examiner assesses recovery completeness, ongoing medication effects, and residual limitations',
    'C. Self-certify fitness after a personal assessment, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif',
    'D. Notify CASA by email before the next flight, except when the operation involves more than 9 passenger seats, provided the aircraft holds '
  ],
  correct: 1,
  explanation: 'After significant illness (hospitalisation, surgery, acute illness, any condition affecting ability to fly), the pilot must seek clearance from a Designated Aviation Medical Examiner (DAME) or Aviation Medical Officer (AMO) before resuming duties. Self-certification after serious illness is not appropriate and may be a regulatory breach.',
  reference: 'CASR Part 67'
},

{
  question: 'Under CASR, a "flight review" conducted by a flight instructor must be completed every:',
  options: [
    'A. 24 calendar months to maintain pilot-in-command privileges',
    'B. 5 years for ATPL holders',
    'C. Only when the pilot changes aircraft types',
    'D. Only for PPL holders — CPL and ATPL holders are exempt'
  ],
  correct: 0,
  explanation: 'A biennial flight review is required every 24 calendar months for all pilots to maintain PIC privileges. It covers at least 1 hour ground instruction and 1 hour flight. For multi-crew airline operations, line checks and operator proficiency checks satisfy this requirement. The instructor endorses the logbook on satisfactory completion.',
  reference: 'CASR Part 61'
},

{
  question: 'Under the ATSB\\\'s investigation framework, the purpose of safety investigations is to:',
  options: [
    'A. Determine blame and assign penalties for regulatory breaches, subject to written approval from the operator's chief pilot',
    'B. Support insurance claims and legal proceedings, subject to the operator's approved exposition authorising such operations',
    'C. Identify safety issues and prevent future accidents — ATSB investigations are not about apportioning blame or determining liability',
    'D. Certify pilots as competent after incidents, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'ATSB investigations are safety investigations — not prosecutions. Under the Transport Safety Investigation Act, ATSB findings cannot be used in civil or criminal proceedings and are not about blame. This "just culture" approach encourages open reporting. ATSB reports contain safety recommendations to prevent recurrence. CASA conducts separate regulatory investigations.',
  reference: 'Transport Safety Investigation Act 2003'
},

{
  question: 'The minimum approach speed for a circling approach in a Category C aircraft must not exceed:',
  options: [
    'A. 130 KIAS, only if the operator holds a specific approval under their Air Operator Certificate',
    'B. 160 KIAS — the maximum speed for Category C circling (121-140 kt Vat) aircraft in the circling manoeuvre',
    'C. 150 KIAS, subject to written approval from the operator's chief pilot',
    'D. 180 KIAS, subject to written approval from the operator's chief pilot'
  ],
  correct: 1,
  explanation: 'Maximum circling approach speeds: Cat A <91 kt → 100 KIAS max; Cat B 91-120 kt → 135 KIAS max; Cat C 121-140 kt → 180 KIAS max; Cat D 141-165 kt → 185 KIAS max. The circling speed must stay within the category\\\'s maximum to remain within the protected circling area. Exceeding the speed takes the aircraft outside the obstacle-cleared area.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'Under Australian regulations, the pilot in command of an air transport operation is the "responsible person" meaning:',
  options: [
    'A. The PIC bears ultimate personal legal responsibility for the safe conduct of the flight and cannot use "following orders" as a complete defence for regulatory breaches',
    'B. The PIC is responsible only for decisions made in the air, subject to the operator's approved exposition authorising such operations',
    'C. The PIC and operator share equal responsibility for all aspects of the flight, provided the aircraft holds a valid maintenance release and is within weight limits',
    'D. The PIC is responsible only for the aircraft, not the passengers, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 0,
  explanation: 'The PIC as "responsible person" under the Civil Aviation Act bears direct personal legal responsibility for the safe conduct of the flight. This responsibility cannot be fully transferred to the operator. If the operator provides incorrect instructions, the PIC has an overriding obligation to comply with safety requirements. The PIC\\\'s authority to deviate from any instruction for safety reasons is absolute.',
  reference: 'Civil Aviation Act 1988 / CASR Part 91'
},

{
  question: 'An aircraft has been given a departure clearance including "CLIMB VIA BRINDABELLA SID TO FL130." The SID has a constraint "AT OR ABOVE 5,000 FT AT BUNND." The crew must:',
  options: [
    'A. Reach 5,000 ft before BUNND at their discretion, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Cross BUNND at exactly 5,000 ft, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. Cross BUNND below 5,000 ft to ensure obstacle clearance',
    'D. Cross BUNND at or above 5,000 ft — the AT OR ABOVE constraint is mandatory when cleared via the SID'
  ],
  correct: 3,
  explanation: '"Climb via SID" makes all published constraints mandatory. "At or above 5,000 ft at BUNND" means the aircraft must be at or above 5,000 ft when crossing BUNND. The FMS will compute a path to meet the constraint. Crossing below the AT OR ABOVE constraint violates the SID obstacle clearance and the ATC clearance.',
  reference: 'AIP ENR 1.5 / ICAO PANS-ATM'
},

{
  question: 'Under the AIP, "SQUAWK STANDBY" issued by ATC requires the pilot to:',
  options: [
    'A. Turn the transponder off completely, provided the aircraft holds a valid maintenance release and is within weight limits',
    'B. Set the transponder to STANDBY mode — it is powered but not transmitting replies to interrogations',
    'C. Set the transponder to ALT mode, only when operating in Class C or Class D controlled airspace',
    'D. Select the emergency code 7700, provided a current instrument rating is held for the relevant aircraft category'
  ],
  correct: 1,
  explanation: '"Squawk standby": set the transponder to standby mode. The transponder is powered and warmed up but does not reply to ATC interrogations. Typically used when holding at a runway threshold to prevent transponder interference with the ILS or to manage radar returns in a busy terminal. "Squawk normal" returns it to active mode.',
  reference: 'AIP ENR 1.6 / ICAO PANS-ATM'
},

{
  question: 'For an IFR flight where an alternate is required, if the forecast for the alternate deteriorates below alternate minima after departure, the crew must:',
  options: [
    'A. Continue to the destination — the alternate decision was made at planning stage, subject to written approval from the operator's chief pilot, subject to the requirements ',
    'B. Reassess the situation — if the designated alternate is no longer viable and no other suitable alternate exists within fuel range, consider early diversion to a still-viable aerodrome while fuel permits',
    'C. Declare an emergency and land at the nearest aerodrome immediately, subject to the pilot completing the required recurrent training within 12 months, provided the relevant aerodr',
    'D. Contact the operator for instructions before taking any action, except during the period of any declared low visibility procedures at the aerodrome, provided the relevant aerodr'
  ],
  correct: 1,
  explanation: 'In-flight alternate reassessment: if the designated alternate deteriorates, the crew must reassess. Options: divert to an alternate alternate if within fuel range; continue if fuel allows reaching another suitable aerodrome; or divert to the destination if it has improved. The critical factor is making the decision while sufficient fuel remains. Waiting too long eliminates options.',
  reference: 'CASR Part 91 / Airline operational practices'
},

{
  question: 'Under Australian regulations, the minimum visibility for a pilot conducting a solo VFR cross-country training flight is:',
  options: [
    'A. 1,000 m, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. 800 m in all circumstances, subject to the pilot completing the required recurrent training within 12 months',
    'C. 3,000 m for training flights only, subject to the operator's approved exposition authorising such operations',
    'D. 5,000 m in controlled airspace, or as per the applicable VMC requirements for the airspace class and altitude'
  ],
  correct: 3,
  explanation: 'VFR minimum visibility depends on airspace class and altitude. In controlled airspace above 3,000 ft AMSL: 5,000 m. Below 3,000 ft in Class G during the day: 1,000 m (clear of cloud, in sight of ground). Training flights have no special exemptions from VMC requirements — students must comply with the same VMC minimums as fully qualified pilots.',
  reference: 'AIP ENR 1.2 / CASR Part 91'
},

{
  question: 'Under the AIP, the mandatory equipment for an aircraft operating in RVSM airspace includes:',
  options: [
    'A. Only a serviceable autopilot, provided CASA has been notified of the operation at least 24 hours in advance, except when the operation in',
    'B. TCAS II only, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'C. A GPS receiver and ADS-B transponder, provided the relevant aerodrome has a certified RFFS capability for the aircraft, subject to the pilot complet',
    'D. Two independent altitude measurement systems, an altitude alerting system, automatic altitude-keeping capability, and a Mode C transponder — meeting specified accuracy standards'
  ],
  correct: 3,
  explanation: 'RVSM equipment requirements: two independent primary altimeters (meeting ±65 ft accuracy standard); altitude alerting system; automatic altitude-keeping system (autopilot with altitude hold); and Mode C transponder. ADS-B is additionally required above FL290 in Australian airspace. The dual independent altimeters allow cross-checking for discrepancies.',
  reference: 'ICAO Doc 9574 / AIP ENR 1.1'
},

{
  question: 'A crew conducting an ILS approach in CAT I conditions (DH 200 ft, RVR 550 m) reaches DH and sees the approach lights only. They may:',
  options: [
    'A. Continue to land using approach lights as the sole reference, subject to written approval from the operator's chief pilot, provided the relevant aerodr',
    'B. Continue to land — approach lights constitute sufficient visual reference for CAT I, subject to written approval from the operator's chief pilot',
    'C. Continue below DH to a minimum of 100 ft above touchdown zone elevation — if by that point the threshold lights or runway environment are not visible, execute a missed approach',
    'D. Immediately execute a missed approach — approach lights alone are never sufficient, subject to the requirements of the applicable Civil Aviation Order'
  ],
  correct: 2,
  explanation: 'CAT I: approach lights (without other runway environment) permit continuation below DH to no lower than 100 ft above the touchdown zone elevation. If the threshold, threshold markings, or runway environment is not sighted by that point, a missed approach must be executed. Some operators specify that approach lights alone do not permit descent below DH — check company SOPs.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'Under Australian law, a person acting as pilot in command who wilfully endangers the safety of an aircraft commits:',
  options: [
    'A. A minor regulatory infringement under CASR, provided a current instrument rating is held for the relevant aircraft category',
    'B. A civil offence only — criminal law does not apply to aviation operations, only when operating in Class C or Class D controlled airspace',
    'C. A serious criminal offence under the Civil Aviation Act 1988 — reckless endangerment carries penalties including imprisonment',
    'D. An offence only if injury or death results, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'Section 20A of the Civil Aviation Act (reckless endangerment) creates a criminal offence for wilfully or recklessly endangering an aircraft or persons on board. Penalties include imprisonment. Aviation safety breaches range from civil (infringement notices, licence action) to criminal (prosecution for reckless endangerment). The most serious cases are prosecuted as criminal offences.',
  reference: 'Civil Aviation Act 1988 s.20A'
},

{
  question: 'Under Australian regulations, a pilot may exercise the privileges of their licence only if they:',
  options: [
    'A. Have flown in the past 3 months, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'B. Are employed by an airline or charter operator, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Hold a current licence, current medical certificate, current ratings for the aircraft type and operation, and meet all applicable recency requirements',
    'D. Hold CASA approval for each individual flight, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'To exercise licence privileges legally: the licence must be current; the medical certificate must be current and appropriate for the operation; all relevant ratings (type rating, instrument rating, class rating) must be current; recency requirements must be met (3 take-offs and landings in 90 days for PIC). Failure on any single element means the pilot cannot legally exercise those privileges.',
  reference: 'CASR Part 61 / CASR Part 67'
},

{
  question: 'The "Aeronautical Information Package" (AIP) published by Airservices Australia is updated:',
  options: [
    'A. On the 28-day AIRAC cycle — amendments take effect on scheduled AIRAC dates which are published years in advance',
    'B. Weekly, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Monthly on the first of each month, only when operating in Class C or Class D controlled airspace',
    'D. Only when significant changes occur — there is no regular schedule'
  ],
  correct: 0,
  explanation: 'The AIP is updated on the 28-day AIRAC cycle. Each amendment takes effect on a scheduled AIRAC date published in advance. This allows navigation database providers, chart publishers, and operators to coordinate updates globally. Between AIRAC cycles, urgent changes are promulgated by NOTAM.',
  reference: 'AIP GEN 3.1 / ICAO Annex 15'
},

{
  question: 'Under Australian regulations, the holder of a flight examiner rating who conducts a skill test must:',
  options: [
    'A. Hold an ATPL only, provided a current instrument rating is held for the relevant aircraft category, provided the relevant aerodr',
    'B. Hold a current flight examiner rating appropriate to the test type, current medical certificate, and meet any currency requirements for the role — and conduct the test in accordance with CASA-approved standards',
    'C. Be employed by CASA directly, subject to written approval from the operator's chief pilot, only when operating in Class',
    'D. Hold a Grade 1 Flight Instructor Rating as a minimum prerequisite, except during the period of any declared low visibility procedures at the aerodrome, only if the operator holds a'
  ],
  correct: 1,
  explanation: 'A flight examiner must hold a CASA-issued flight examiner rating appropriate to the test type and aircraft category. They must be current in the examiner role, hold an appropriate medical certificate, and conduct tests strictly in accordance with the applicable CASA standards. Examiners are periodically assessed by CASA to ensure standardisation.',
  reference: 'CASR Part 61'
},

{
  question: 'An aircraft is cleared to cross a runway for taxiing purposes. The crew reports "crossing runway 34L." The response from ATC "ROGER" means:',
  options: [
    'A. The crew is cleared to cross immediately, subject to the requirements of the applicable Civil Aviation Order, subject to the pilot complet',
    'B. ATC acknowledges and will issue a clearance shortly, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'C. ATC has received and understood the message — "ROGER" does not constitute a clearance. If the crew needs a crossing clearance, they must request it and receive "CLEARED TO CROSS RUNWAY 34L"',
    'D. The crew should hold at the runway and await further instruction, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: '"ROGER" means ATC has received and understood the transmission. It is NOT a clearance. Many runway incursions have resulted from pilots interpreting "Roger" as a clearance. A runway crossing requires an explicit clearance: "CLEARED TO CROSS RUNWAY 34L." If in doubt — hold short and ask.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian ATC, a "progressive taxi" clearance means:',
  options: [
    'A. The aircraft should taxi at a faster than normal speed, provided a current instrument rating is held for the relevant aircraft category',
    'B. The aircraft should taxi progressively toward the runway without stopping, subject to the operator's approved exposition authorising such operations',
    'C. A training manoeuvre where the instructor gives guidance only, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. ATC provides step-by-step routing instructions to guide the crew — typically used when the aerodrome layout is complex or when a crew is unfamiliar with the ground movement procedures'
  ],
  correct: 3,
  explanation: 'Progressive taxi: ATC guides the crew through the taxi route step by step. This is used at complex aerodromes, during low visibility ground operations, or when a crew is unfamiliar with the layout. Crews may also request progressive taxi if uncertain. The instructions guide the aircraft turn by turn rather than as a complete route.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, a pilot who voluntarily reports a safety concern or occurrence through the Avsafety voluntary disclosure scheme:',
  options: [
    'A. Receives full immunity from any prosecution, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr',
    'B. Must submit a written statutory declaration within 24 hours, provided CASA has been notified of the operation at least 24 hours in advance, provided a current instrumen',
    'C. Cannot be prosecuted for any aviation offence after disclosure, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided the aircraft holds ',
    'D. May receive reduced enforcement action — CASA takes voluntary disclosure into account. The scheme encourages proactive safety reporting in exchange for regulatory leniency for non-criminal, non-deliberate breaches'
  ],
  correct: 3,
  explanation: 'The Avsafety Voluntary Disclosure Programme: pilots who self-report inadvertent regulatory breaches in good faith may receive more lenient treatment from CASA. The scheme encourages safety reporting and learning from mistakes. It does not provide absolute immunity — deliberate breaches, criminal conduct, and alcohol-related offences are excluded. Disclosure must be made promptly.',
  reference: 'CASR Part 11 / CASA Avsafety scheme'
},

{
  question: 'Under Australian regulations, ADS-B OUT is mandatory above:',
  options: [
    'A. FL100, subject to the pilot completing the required recurrent training within 12 months',
    'B. 10,000 ft AMSL, only when operating in Class C or Class D controlled airspace',
    'C. FL290 in Australian airspace — aircraft operating at or above FL290 must have serviceable ADS-B OUT',
    'D. FL200, subject to the operator's approved exposition authorising such operations'
  ],
  correct: 2,
  explanation: 'ADS-B OUT is mandatory in Australian airspace at and above FL290. This aligns with RVSM requirements and ensures comprehensive surveillance coverage at high altitudes where radar may not provide adequate coverage over remote areas. Plans for lower-altitude ADS-B mandates have been progressed in Australia to extend surveillance into Class E and remote areas.',
  reference: 'CASR Part 91 / AIP ENR 1.6'
},

{
  question: 'An aircraft that has been authorised for ETOPS 180 minutes must be able to fly to an en-route alternate:',
  options: [
    'A. At any speed the crew chooses, provided the relevant aerodrome has a certified RFFS capability for the aircraft, except during the period of ',
    'B. At the single-engine driftdown speed following engine failure, reaching the alternate within 180 minutes with the required reserve fuel — the ETOPS time is calculated at the approved driftdown speed not cruise speed',
    'C. At maximum cruise speed only, provided the pilot has logged at least 3 hours on type in the preceding 90 days, provided CASA has been notif',
    'D. The 180 minutes applies to normal twin-engine cruise speed only, except when the flight exceeds 4 hours and additional crew are required, provided CASA has been notif'
  ],
  correct: 1,
  explanation: 'ETOPS 180 means the aircraft must be able to reach the en-route alternate within 180 minutes following engine failure, flying at the single-engine driftdown speed at the drift-down altitude. This is typically slower than normal cruise, so the 180-minute radius is smaller than might be expected. ETOPS planning accounts for this reduced speed.',
  reference: 'CASR Part 121 / ICAO Doc 9760'
},

{
  question: 'Under the AIP, a NOTAM that applies to an ILS approach at the destination indicating "GP U/S" means:',
  options: [
    'A. The Glide Path (glide slope) is unserviceable — the ILS is localiser only (LOC); the crew must use LOC approach minima which are higher than the full ILS minima',
    'B. Ground power is unserviceable at the aerodrome, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. GPS is unserviceable in the terminal area, subject to the operator's approved exposition authorising such operations',
    'D. Ground personnel are unavailable at the aerodrome, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 0,
  explanation: '"GP U/S" = Glide Path Unserviceable. The ILS glide slope is inoperative. The approach becomes a Localiser (LOC) non-precision approach. The crew must apply the published LOC approach minima (higher than ILS due to no vertical guidance) and fly the procedure as a non-precision approach. This is a critical pre-flight NOTAM check for the instrument approach alternate planning.',
  reference: 'AIP GEN 3.1 / Approach plate notation'
},

{
  question: 'For operations in Australian high-level airspace above FL290, the lateral separation standard applied by ATC between RNAV aircraft is:',
  options: [
    'A. Dependent on the navigation specification in use — typically 30 nm for oceanic MNPS, or 5 nm for RNAV/RNP operations in radar surveillance areas',
    'B. 5 nm — the same as in lower airspace, only when operating in Class C or Class D controlled airspace',
    'C. Always 100 nm in oceanic airspace, subject to the pilot completing the required recurrent training within 12 months',
    'D. No lateral separation is applied — only vertical separation is used above FL290, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'Lateral separation varies significantly with the navigation specification and surveillance availability. In radar-surveilled controlled airspace: 5 nm. In oceanic/remote areas without radar surveillance: 30 nm or 50 nm depending on RNAV accuracy and whether MNPS (Minimum Navigation Performance Specification) is required. The AIP ENR 1.1 and oceanic procedures specify applicable minima.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM / MNPS'
},

{
  question: 'Under CASR, when an aircraft experiences a complete radio failure (NORDO) and is in controlled airspace, ATC will:',
  options: [
    'A. Vector the aircraft to the nearest aerodrome by visual signals only, except during the period of any declared low visibility procedures at the aerodrome, subject to the operator's ap',
    'B. Scramble military aircraft to escort the NORDO aircraft, provided a current instrument rating is held for the relevant aircraft category, except during the period of ',
    'C. Clear the expected route of the NORDO aircraft of conflicting traffic, expect the aircraft at the destination at its filed ETA, and provide the aircraft with clearance by light gun signals at the aerodrome if needed',
    'D. Cancel all ATC services until the aircraft re-establishes contact, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the operator's ap'
  ],
  correct: 2,
  explanation: 'ATC NORDO procedures: ATC will try all frequencies and methods to contact the aircraft; protect the aircraft\\\'s expected route; expect the aircraft at the destination at filed ETA; coordinate clearance of conflicting traffic. At the aerodrome, light signals (red/green gun) guide the aircraft for landing. The NORDO aircraft squawks 7600 and follows published NORDO procedures.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, a Certificate of Registration (CofR) is issued for an aircraft and:',
  options: [
    'A. Expires annually and must be renewed, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Must be renewed every 2 years with CASA inspection, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Expires when the aircraft owner changes, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Remains valid indefinitely unless cancelled or suspended — it is not time-limited like the maintenance release or medical certificate'
  ],
  correct: 3,
  explanation: 'The Certificate of Registration does not expire — it remains valid unless the aircraft is deregistered, the registration is transferred (requiring a new CofR for the new owner), or the CofR is cancelled or suspended by CASA. The CofR identifies the aircraft\\\'s nationality and registration marks. When ownership changes, the new owner must apply to transfer the registration.',
  reference: 'CASR Part 47 / Civil Aviation Act 1988'
},

{
  question: 'An ATPL holder who disagrees with a CASA decision to suspend their licence has the right to:',
  options: [
    'A. Only appeal through CASA\\\'s internal review process, except when the operation involves more than 9 passenger seats',
    'B. Apply to the Administrative Appeals Tribunal (AAT) for a merits review of the decision, or seek judicial review in the Federal Court on questions of law',
    'C. No right of appeal exists once a suspension is imposed, provided a current instrument rating is held for the relevant aircraft category',
    'D. Appeal only after the suspension period has expired, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'Under the Civil Aviation Act and Administrative Appeals Tribunal Act, CASA decisions (licence suspensions, cancellations, refusals) may be reviewed by the AAT on the merits — the AAT can affirm, vary, or set aside CASA\\\'s decision. Further appeal to the Federal Court is available on questions of law. This provides judicial oversight of CASA\\\'s regulatory decisions.',
  reference: 'Civil Aviation Act 1988 / Administrative Appeals Tribunal Act 1975'
},

{
  question: 'Under Australian regulations, the holder of a Part 119 AOC is required to notify CASA when:',
  options: [
    'A. Only when changing aircraft types, except when the operation involves more than 9 passenger seats, subject to the requirements ',
    'B. Only when the AOC is due for renewal, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a',
    'C. At the annual safety audit only, only if the operator holds a specific approval under their Air Operator Certificate, subject to the requirements ',
    'D. Key personnel changes occur (chief pilot, head of operations, accountable manager), organisational changes occur, new aircraft types are added, or new operation types are proposed — these require CASA acceptance before implementation'
  ],
  correct: 3,
  explanation: 'AOC holders must notify CASA of significant changes including: key person changes (the individuals responsible for the operation must remain acceptable to CASA); organisational changes affecting safety management; new aircraft types or operation types (requiring exposition amendments and possibly new approvals). Implementing changes without CASA notification and acceptance may invalidate the AOC.',
  reference: 'CASR Part 119'
},

{
  question: 'For an RPT airline operation, the "Minimum Equipment List" (MEL) is approved by:',
  options: [
    'A. The operator\\\'s chief pilot, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'B. CASA — the MEL is a CASA-approved document derived from the manufacturer\\\'s Master MEL (MMEL). The operator may not make it more permissive than the MMEL',
    'C. The aircraft manufacturer only, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'D. IATA on behalf of all member airlines, only when operating in Class C or Class D controlled airspace, except when the operation in'
  ],
  correct: 1,
  explanation: 'The MEL is a CASA-approved document specific to each operator and aircraft type. It is derived from the MMEL (Master MEL) published by the aircraft type certificate holder (manufacturer) and approved by the state of design (e.g. FAA, EASA). The operator\\\'s MEL cannot be more permissive than the MMEL. CASA must approve the MEL before it may be used for dispatch.',
  reference: 'CASR Part 91 / CASR Part 119'
},

{
  question: 'Under Australian regulations, "cabin crew" members on an RPT operation are required to hold:',
  options: [
    'A. A pilot licence, only when operating in Class C or Class D controlled airspace',
    'B. Only a first aid certificate, except during the period of any declared low visibility procedures at the aerodrome',
    'C. No specific regulatory certification — training is entirely operator-managed',
    'D. A Cabin Crew Certificate issued under CASR Part 60 — certifying they have completed approved safety training for their role'
  ],
  correct: 3,
  explanation: 'Under CASR Part 60, cabin crew on Australian RPT operations must hold a Cabin Crew Certificate. This requires completion of an approved safety training programme covering emergency procedures, first aid, evacuation, ditching, and dangerous goods. The certificate demonstrates minimum safety competency. Operators may require additional training above the minimum standard.',
  reference: 'CASR Part 60'
},

{
  question: 'The "VFR cruising levels" for aircraft operating below 3,000 ft AGL do not follow the standard FLAS because:',
  options: [
    'A. The FLAS only applies to IFR aircraft, subject to the requirements of the applicable Civil Aviation Order, provided a current instrumen',
    'B. VFR aircraft below 3,000 ft AGL are exempt from all altitude rules, subject to the requirements of the applicable Civil Aviation Order, except when the operation in',
    'C. The FLAS applies at all altitudes for all aircraft, provided the aircraft holds a valid maintenance release and is within weight limits, only if the operator holds a',
    'D. The FLAS (Flight Level Allocation Scheme) applies only above the transition altitude (10,000 ft) — below the transition altitude, altitude-based cruising level rules apply, and below 5,000 ft AMSL in Class G airspace, cruising level requirements are further relaxed'
  ],
  correct: 3,
  explanation: 'FLAS applies to aircraft cruising at flight levels (above the transition altitude of 10,000 ft). Below the transition altitude, IFR and VFR cruising altitude rules under CASR Part 91 apply. Below 5,000 ft in Class G, specific cruising level requirements may be relaxed. The cardinal altitude system (odd + 500 eastbound; even + 500 westbound) applies in cruise below the transition altitude.',
  reference: 'AIP ENR 1.7 / CASR Part 91'
},

{
  question: 'Under Australian law, smoking on a commercial aircraft is:',
  options: [
    'A. Permitted in designated smoking areas, subject to written approval from the operator's chief pilot, only when operating in Class',
    'B. Only prohibited during take-off and landing, provided CASA has been notified of the operation at least 24 hours in advance',
    'C. Permitted if the aircraft was manufactured before the smoking ban, provided a current instrument rating is held for the relevant aircraft category',
    'D. Prohibited on all Australian commercial aircraft — this is enforced under the Civil Aviation Regulations and the operator\\\'s conditions of carriage'
  ],
  correct: 3,
  explanation: 'Smoking is prohibited on all Australian commercial aircraft under CAR Part XI and operator conditions of carriage. The PIC may take action against passengers who smoke on board. Tampering with smoke detectors is a criminal offence. This applies to all classes of service, all routes, and all aircraft types operating under Australian commercial aviation regulations.',
  reference: 'CAR Part XI / CASR Part 91'
},

{
  question: 'Under Australian IFR procedures, the published "Straight-In" approach criteria requires the final approach course to be within how many degrees of the runway heading?',
  options: [
    'A. 30 degrees — if the final approach course deviates by more than 30 degrees from the runway heading, a circling approach designation applies',
    'B. 15 degrees, provided the aircraft holds a valid maintenance release and is within weight limits',
    'C. 45 degrees, subject to the requirements of the applicable Civil Aviation Order, subject to written approval ',
    'D. 5 degrees, subject to written approval from the operator's chief pilot, only when operating in Class'
  ],
  correct: 0,
  explanation: 'Straight-in approach criteria: the final approach course must be within 30 degrees of the runway centreline (runway heading). If misaligned by more than 30 degrees, the approach is designated circling only — even if the aircraft tracks to align with the runway, the circling minima apply. The 30-degree criterion ensures the aircraft is approximately aligned for a normal visual transition at DA/MDA.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'Under CASR Part 91, the maximum take-off mass for a performance class "B" aeroplane is:',
  options: [
    'A. 5,700 kg, only when operating in Class C or Class D controlled airspace, provided a current instrumen',
    'B. 15,000 kg, provided the aircraft does not exceed 5,700 kg maximum certificated weight, only if the operator holds a',
    'C. Multi-engine performance class B aircraft have MTOW not exceeding 8,618 kg (19,000 lb) — above this weight triggers Class A performance requirements',
    'D. Performance classes do not use weight limits — only engine type matters, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 2,
  explanation: 'Performance Classes: Class A = large multi-engine turbine aircraft (typically MTOW >8,618 kg or MTOW >5,700 kg with more than 9 pax for RPT). Class B = multi-engine piston MTOW ≤8,618 kg or turbine ≤5,700 kg. Class C = single-engine. The performance class determines the applicable obstacle clearance and take-off/landing performance requirements.',
  reference: 'CASR Part 91 / ICAO Annex 6'
},

{
  question: 'Under the AIP, when ATC issues "REDUCE TO MINIMUM CLEAN SPEED," the pilot should:',
  options: [
    'A. Reduce to the stall speed, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a',
    'B. Reduce to 150 KIAS regardless of aircraft type, provided CASA has been notified of the operation at least 24 hours in advance, subject to the pilot complet',
    'C. Slow to the minimum speed in the "clean" (gear up, flaps up) configuration — this is typically used for sequencing in terminal areas where ATC needs the aircraft to slow down while maintaining the ability to configure for approach',
    'D. Reduce to minimum approach speed immediately, subject to written approval from the operator's chief pilot, subject to the requirements '
  ],
  correct: 2,
  explanation: '"Minimum clean speed" — the minimum speed at which the aircraft can be flown with gear up and flaps at the clean position, used for terminal area sequencing. It allows ATC to slow aircraft down without requiring premature gear and flap extension. The crew must know the type\\\'s minimum clean speed (typically related to Vfs or the minimum manoeuvring speed in clean configuration).',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, an aircraft\\\'s radio licence is issued by:',
  options: [
    'A. CASA under the CASR framework, only if the operator holds a specific approval under their Air Operator Certificate, except when the operation in',
    'B. Airservices Australia as part of the AIP subscription, subject to the operator's approved exposition authorising such operations, only when operating in Class',
    'C. The Australian Communications and Media Authority (ACMA) under the Radiocommunications Act — the aircraft radio licence is a separate requirement from CASA airworthiness certification',
    'D. The aircraft manufacturer includes the radio licence with the type certificate, only if the operator holds a specific approval under their Air Operator Certificate'
  ],
  correct: 2,
  explanation: 'Aircraft radio licences are issued by the Australian Communications and Media Authority (ACMA) under the Radiocommunications Act 1992. They are separate from CASA documentation. The radio licence must be carried on board the aircraft. Radio operators (pilots) must hold a Flight Radiotelephone Operator Certificate (FROC), also administered through the licensing framework.',
  reference: 'Radiocommunications Act 1992 / ACMA'
},

{
  question: 'Under CASR Part 91, a pilot must not operate an aircraft in IMC unless:',
  options: [
    'A. The weather is unlikely to deteriorate further, subject to the requirements of the applicable Civil Aviation Order',
    'B. The pilot holds a current instrument rating, the aircraft is equipped for IFR, and an IFR clearance has been obtained where required by the airspace class',
    'C. The pilot has at least 500 hours total time, provided CASA has been notified of the operation at least 24 hours in advance',
    'D. The aircraft is multi-engine only — single-engine IFR is prohibited, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 1,
  explanation: 'IFR in IMC requirements: current instrument rating; aircraft equipped and certified for IFR; IFR flight plan filed; ATC clearance obtained where required (Class A, C, D — IFR clearance mandatory). In Class G, an IFR flight plan and compliance with LSALT is required but no ATC clearance. Single-engine IFR is legal in Australia subject to these requirements.',
  reference: 'CASR Part 91 / CASR Part 61'
},

{
  question: 'Under the AIP, the phrase "EXPEDITE DESCENT" from ATC means:',
  options: [
    'A. The aircraft should immediately commence an emergency descent, subject to written approval from the operator's chief pilot, subject to the requirements ',
    'B. The aircraft should use speedbrakes regardless of aircraft limitations, provided a current instrument rating is held for the relevant aircraft category',
    'C. The aircraft should descend immediately to the LSALT, only when operating in Class C or Class D controlled airspace, subject to the pilot complet',
    'D. ATC requires the aircraft to descend at a rate greater than normal — typically 1,500 ft/min or more for the aircraft type — to achieve the cleared level as quickly as possible for separation purposes'
  ],
  correct: 3,
  explanation: '"Expedite descent": ATC needs the aircraft to descend more rapidly than normal. The pilot should use an appropriate increased descent rate (appropriate to aircraft type and limitations). If unable to expedite, advise ATC immediately. "Expedite" is used when traffic separation requires the aircraft to reach the cleared level quickly.',
  reference: 'AIP ENR 1.1 / ICAO PANS-ATM'
},

{
  question: 'Under Australian regulations, the "critical phase of flight" concept for which sterile cockpit rules apply typically covers:',
  options: [
    'A. Any time the autopilot is engaged, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'B. Only take-off and landing, except when the operation involves more than 9 passenger seats, except during the period of ',
    'C. Taxi, take-off, initial climb (below 10,000 ft), descent, approach, and landing — phases requiring maximum crew attention and where distraction has historically contributed to accidents',
    'D. Only IFR operations in IMC, subject to written approval from the operator's chief pilot, subject to the operator's ap'
  ],
  correct: 2,
  explanation: 'Critical phases of flight (sterile cockpit): taxi out, take-off roll, initial climb to 10,000 ft, descent below 10,000 ft, approach, and landing (until aircraft is clear of the runway). Some operators extend this to 3,000 ft AAL for additional caution. These phases involve the highest workload and the most time-critical decision-making — distractions during these phases have caused accidents.',
  reference: 'CASR Part 121 / Operator SOPs'
},

{
  question: 'A turbine aircraft is operating at FL350 in RVSM airspace. One of the two primary altimeters fails and a significant discrepancy exists between the remaining altimeter and the standby altimeter. The crew must:',
  options: [
    'A. Continue using the remaining primary altimeter, subject to the pilot completing the required recurrent training within 12 months',
    'B. Descend immediately below FL290 without ATC clearance, subject to the requirements of the applicable Civil Aviation Order, provided CASA has been notif',
    'C. Declare an RVSM contingency to ATC ("RVSM FAILURE"), use the best available altimeter cross-checked against the standby, and comply with ATC instructions for non-RVSM separation',
    'D. Switch to GPS altitude as the primary reference, provided CASA has been notified of the operation at least 24 hours in advance, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'Altimeter failure in RVSM: the aircraft can no longer meet RVSM accuracy requirements. Declare "RVSM FAILURE" to ATC. ATC will apply 2,000 ft separation (non-RVSM) from all other traffic. Use the serviceable altimeter cross-checked against the standby. GPS altitude is not certified as a primary altimeter reference. Continue to destination or divert as appropriate.',
  reference: 'AIP ENR 1.1 / ICAO Doc 9574'
},

{
  question: 'Under the Civil Aviation Act, CASA has the power to suspend an aviation licence without prior notice when:',
  options: [
    'A. An annual audit reveals minor documentation errors, except during the period of any declared low visibility procedures at the aerodrome',
    'B. The licence holder fails to pay CASA fees, only when operating in Class C or Class D controlled airspace, provided the aircraft holds ',
    'C. CASA can never suspend a licence without prior notice, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. An immediate safety risk exists and the urgency of the situation does not permit prior notification — the immediate suspension power is used to address imminent safety threats'
  ],
  correct: 3,
  explanation: 'Under the Civil Aviation Act, CASA may suspend an aviation document immediately (without prior notice) when there is an immediate safety risk. The holder has the right to seek AAT review, but the suspension takes effect immediately. This power is used sparingly — typically for pilots found operating while impaired, or where an imminent danger to public safety has been identified.',
  reference: 'Civil Aviation Act 1988'
},

{
  question: 'Under Australian regulations, the final reserve fuel for a piston-powered aircraft is:',
  options: [
    'A. 45 minutes at normal cruise power — piston aircraft have a higher final reserve than turbine aircraft due to greater fuel consumption variability',
    'B. 30 minutes at holding speed, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. 20 minutes at normal cruise power, provided the relevant aerodrome has a certified RFFS capability for the aircraft',
    'D. The same as turbine aircraft — 30 minutes at holding speed, subject to completing a flight review within the preceding 12 months'
  ],
  correct: 0,
  explanation: 'Final reserve fuel: piston-powered aircraft = 45 minutes at normal cruise power. Turbine-powered aircraft = 30 minutes at holding speed at 1,500 ft. The difference reflects the different fuel consumption characteristics and the greater variability in piston engine fuel consumption. Final reserve must not be planned to be used — it is the absolute safety margin.',
  reference: 'CAO 82.0 / CASR Part 91'
},

{
  question: 'The ATPL Air Law examination (AALW) is set to which pass standard under the CASR Part 61 MOS?',
  options: [
    'A. 70% — the same as all other ATPL subjects, except when the operation involves more than 9 passenger seats',
    'B. 75%, except when the operation involves more than 9 passenger seats, only when operating in Class',
    'C. 80% — Air Law has a higher pass mark than most ATPL subjects, reflecting the importance of regulatory knowledge to safe flight operations',
    'D. 90%, provided a current instrument rating is held for the relevant aircraft category, only when operating in Class'
  ],
  correct: 2,
  explanation: 'The AALW (ATPL Air Law) examination requires an 80% pass mark — higher than the 70% required for most other ATPL subjects. This higher threshold reflects the critical importance of air law knowledge to safe and legal operation of transport category aircraft. The 80% requirement is shared with the CPL Air Law examination (CFRA/CFRC) for the same reason.',
  reference: 'CASR Part 61 MOS Schedule 3 / AALW syllabus'
},

{
  question: 'Under Australian IFR procedures, a "non-precision approach" differs from a "precision approach" in that:',
  options: [
    'A. Non-precision approaches are conducted in worse weather than precision approaches, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'B. Non-precision approaches do not require an instrument rating, except when the operation involves more than 9 passenger seats, provided the relevant aerodr',
    'C. A precision approach provides both lateral AND vertical electronic guidance (ILS, GLS, LPV) to a Decision Height (DH); a non-precision approach provides lateral guidance only (VOR, NDB, LNAV) to a Minimum Descent Altitude (MDA)',
    'D. Precision approaches always have lower minima than non-precision, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet'
  ],
  correct: 2,
  explanation: 'Precision approach (ILS, PAR, GLS, SBAS LPV): provides lateral AND vertical guidance; aircraft flies to a DH (Decision Height). Non-precision approach (VOR, NDB, LNAV, LOC): lateral guidance only; aircraft descends to MDA (Minimum Descent Altitude) and then flies level to MAP. Precision approaches generally have lower minima, but advanced non-precision approaches (LNAV/VNAV, LPV) can approach precision approach minima.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'For an ATPL holder acting as PIC on a Part 121 RPT operation, which statement about their authority is correct?',
  options: [
    'A. The PIC\\\'s authority is subordinate to the operator\\\'s operations centre at all times, except when the operation involves more than 9 passenger seats, only if the operator holds a',
    'B. The PIC must consult the company before making any emergency decisions, except during the period of any declared low visibility procedures at the aerodrome, only when operating in Class',
    'C. The PIC has absolute in-flight authority — their decisions regarding the safety of the aircraft and its occupants cannot be overridden by the operator, ATC, or any other authority during flight, except by law enforcement with appropriate authority',
    'D. The PIC\\\'s authority applies only to the aircraft — cabin and ground operations are outside their authority, provided a current instrument rating is held for the relevant aircraft category, only if the operator holds a'
  ],
  correct: 2,
  explanation: 'Under the Civil Aviation Act and CASR Part 91, the PIC has absolute command authority during flight. No operator instruction can override a PIC safety decision. This authority is fundamental to the safety of aviation — the PIC, having full situational awareness, must have the authority to act without delay. The PIC may deviate from any rule as necessary in a genuine emergency.',
  reference: 'Civil Aviation Act 1988 / CASR Part 91'
},

{
  question: 'Under Australian regulations, an aircraft operating on an RPT charter flight must have its performance data calculated using:',
  options: [
    'A. Estimated figures based on typical operations — exact calculations are not required for charter flights, subject to written approval from the operator's chief pilot',
    'B. Standard sea level ISA conditions only, subject to the requirements of the applicable Civil Aviation Order, provided the aircraft holds ',
    'C. Actual conditions — actual runway length, actual weight, actual temperature and altitude, actual wind component, and applicable wet or contaminated runway factors',
    'D. Performance data from the previous flight on the same route, provided CASA has been notified of the operation at least 24 hours in advance'
  ],
  correct: 2,
  explanation: 'Performance calculations must use actual conditions: actual MTOW; actual pressure altitude and OAT; actual measured wind component; actual runway condition (dry, wet, contaminated with appropriate factors); actual runway length available. Using standard or estimated figures rather than actuals is a regulatory breach that may result in inadequate performance margins.',
  reference: 'CAO 82.0 / CASR Part 91 / AFM'
},

{
  question: 'Under CASR, a pilot operating in Class G airspace on an IFR flight plan must self-announce on which frequency?',
  options: [
    'A. 121.5 MHz at all times, except during the period of any declared low visibility procedures at the aerodrome, only if the operator holds a',
    'B. The appropriate CTAF or area frequency published for the relevant area or aerodrome — for en-route Class G, the ATC-assigned frequency or FLIGHWATCH frequency',
    'C. 122.8 MHz universally, subject to the pilot completing the required recurrent training within 12 months, provided a current instrumen',
    'D. Broadcasts are not required in Class G — see-and-avoid only, provided the aircraft holds a valid maintenance release and is within weight limits'
  ],
  correct: 1,
  explanation: 'In Class G, IFR flights must self-announce on the appropriate frequency — typically the CTAF at relevant aerodromes and the assigned area frequency for en-route. Near non-controlled aerodromes, CTAF broadcasts are required at the published reporting points. For en-route Class G flight, contact the relevant FIS (if available) or operate on the nominated frequency for the area.',
  reference: 'AIP ENR 1.4 / CASR Part 91'
},

{
  question: 'Under Australian law, the maximum penalty for recklessly operating an aircraft in a manner that endangers life under the Civil Aviation Act is:',
  options: [
    'A. A fine only — no imprisonment is possible, provided CASA has been notified of the operation at least 24 hours in advance',
    'B. Loss of licence only — criminal penalties do not apply to aviation',
    'C. Up to 5 years imprisonment — aviation reckless endangerment is a serious criminal offence with custodial penalties',
    'D. 12 months imprisonment maximum, provided the relevant aerodrome has a certified RFFS capability for the aircraft'
  ],
  correct: 2,
  explanation: 'Under the Civil Aviation Act, reckless operation of an aircraft endangering life (section 20A) carries a maximum penalty of up to 5 years imprisonment. This reflects the serious nature of endangering others through irresponsible aviation conduct. In practice, serious prosecutions have resulted in both imprisonment and substantial fines.',
  reference: 'Civil Aviation Act 1988 s.20A'
},

{
  question: 'An aircraft is conducting a charter flight in IMC at FL110. The PIC becomes incapacitated. The co-pilot, who holds a CPL and instrument rating but NOT an ATPL, must:',
  options: [
    'A. Declare an emergency and land at the nearest aerodrome regardless of conditions, except during the period of any declared low visibility procedures at the aerodrome',
    'B. Take command of the aircraft, declare the emergency to ATC, complete the flight safely — a CPL with instrument rating is authorised to take over a flight in an emergency even as PIC',
    'C. Wait for the PIC to recover before taking any action, except when the operation involves more than 9 passenger seats, subject to the pilot complet',
    'D. Contact the operator for instructions before assuming command, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 1,
  explanation: 'In a PIC incapacitation emergency, the co-pilot must immediately take control. The co-pilot\\\'s CPL and instrument rating authorise them to act as PIC in an emergency even if they are not rostered or rated for PIC on that type in normal operations. Declare emergency to ATC (MAYDAY), get medical assistance for the incapacitated PIC, and complete the flight safely. Inaction is never the correct response to incapacitation.',
  reference: 'CASR Part 91 / Civil Aviation Act / Operator SOPs'
},

{
  question: 'Under Australian regulations, a "journey log" entry must be made after each flight recording:',
  options: [
    'A. Date, aircraft registration, crew names, departure and destination aerodromes, departure and arrival times, and total flight time — and any defects or occurrences requiring recording',
    'B. Only the total flight time, except when the operation involves more than 9 passenger seats, provided CASA has been notif',
    'C. Only defects found during the flight, provided a current instrument rating is held for the relevant aircraft category, except when the operation in',
    'D. Journey logs are not required for charter operations under 5,700 kg MTOW, except when the operation involves more than 9 passenger seats'
  ],
  correct: 0,
  explanation: 'Under CASR Part 43, the journey log (or equivalent technical log) must record after each flight: date; aircraft registration; crew members; departure and destination; off and on times (block times); flight time; fuel uplift; and any technical defects. The journey log is an airworthiness document and must be completed accurately and retained for 7 years.',
  reference: 'CASR Part 43 / CASR Part 91'
},

{
  question: 'Under Australian regulations, the holder of a Part 119 AOC must maintain a current and CASA-approved Operations Manual that:',
  options: [
    'A. Only needs to be updated annually, provided the relevant aerodrome has a certified RFFS capability for the aircraft, provided CASA has been notif',
    'B. May be kept only at the operator\\\'s principal place of business, only when operating in Class C or Class D controlled airspace, subject to written approval ',
    'C. Is only required for international operations, only when operating in Class C or Class D controlled airspace, provided the aircraft holds ',
    'D. Is kept current, distributed to relevant personnel, and must be amended whenever procedures, equipment, or operations change in ways that affect the document — crews must have access to the current version'
  ],
  correct: 3,
  explanation: 'The Operations Manual (exposition) must be kept current, CASA-approved, and accessible to relevant personnel. Changes to procedures, aircraft types, or operations must be reflected in approved amendments. Crews must use the current version — operating on outdated procedures is non-compliant. Amendment control and distribution are key SMS functions.',
  reference: 'CASR Part 119 / CASR Part 121'
},

{
  question: 'Under CASR Part 91, an aircraft must not be operated within 3 nm of an aerodrome traffic area unless:',
  options: [
    'A. The pilot is in communication with the relevant ATC unit or has been given specific approval — operating in the aerodrome vicinity without communication creates a collision hazard with circuit and departing/arriving traffic',
    'B. The pilot has an ATPL, except during the period of any declared low visibility procedures at the aerodrome, subject to the operator's ap',
    'C. The aircraft is above 3,000 ft AGL, only when operating in Class C or Class D controlled airspace, subject to the requirements ',
    'D. The aerodrome is uncontrolled — 3 nm proximity rules only apply to controlled aerodromes, subject to the operator's approved exposition authorising such operations, except during the period of '
  ],
  correct: 0,
  explanation: 'Operating near an aerodrome (within the traffic area) requires communication with or approval from the relevant ATC or following CTAF/MBZ procedures. The 3 nm radius is a common reference distance for circuit operations. Without awareness of the local traffic pattern, a transiting aircraft creates a significant collision risk with circuit and approach traffic.',
  reference: 'CASR Part 91 / AIP ENR 1.4'
},

{
  question: 'Under the ICAO language proficiency framework, what does Level 4 (Operational) proficiency mean for an ATPL holder\\\'s licence endorsement?',
  options: [
    'A. The endorsement is permanent and never expires, subject to written approval from the operator's chief pilot',
    'B. The endorsement is valid for 3 years — Level 4 is the minimum for unrestricted international operations and must be re-demonstrated every 3 years',
    'C. The endorsement is valid for 6 years, provided the pilot has logged at least 3 hours on type in the preceding 90 days',
    'D. Level 4 is not accepted for ATPL — Level 5 minimum is required, only when operating in Class C or Class D controlled airspace'
  ],
  correct: 1,
  explanation: 'ICAO language proficiency: Level 4 (Operational) = endorsed on licence for 3 years; Level 5 (Extended) = 6 years; Level 6 (Expert) = permanent (no expiry). Level 4 is the minimum for international operations. After 3 years, re-assessment is required. Many Australian pilots are assessed at Level 6 (native English speakers) giving a permanent endorsement.',
  reference: 'ICAO Annex 1 / CASR Part 61'
},

{
  question: 'Under Australian regulations, an aircraft operator must ensure the pilot in command has been briefed on or has access to which of the following before a flight?',
  options: [
    'A. Current meteorological information, NOTAMs affecting the route and destination, fuel requirements, aircraft serviceability, any special procedures applicable to the route, and the operator\\\'s current operational instructions',
    'B. Only the aircraft performance data, provided a current instrument rating is held for the relevant aircraft category, provided CASA has been notif',
    'C. Only the ATIS for the destination, provided CASA has been notified of the operation at least 24 hours in advance, subject to the pilot complet',
    'D. A briefing from CASA for each flight, provided CASA has been notified of the operation at least 24 hours in advance, subject to written approval '
  ],
  correct: 0,
  explanation: 'Pre-flight information required (CASR Part 91 / CAO 82.0): meteorological information (TAF, METAR, SIGMET, area forecasts); NOTAMs for route and aerodromes; fuel requirements for the planned operation; aircraft serviceability; and operator\\\'s operational instructions. The PIC must have access to all relevant information before commencing flight.',
  reference: 'CASR Part 91 / CAO 82.0'
},

{
  question: 'Under CASR Part 91, an aircraft must not be taxied on an aerodrome unless the PIC or taxiing pilot:',
  options: [
    'A. Is familiar with the aerodrome layout, taxi procedures, and any relevant instructions from ATC or published in the ERSA — including holding point positions and runway crossing procedures',
    'B. Has at least 500 hours total time, except when the operation involves more than 9 passenger seats, only when operating in Class',
    'C. Holds a ground movement endorsement on their licence, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Is authorised by the aircraft\\\'s owner for ground operations, except during the period of any declared low visibility procedures at the aerodrome'
  ],
  correct: 0,
  explanation: 'Taxiing requirements: the pilot must be familiar with the aerodrome\\\'s ground movement procedures, layout, and any current special instructions. At complex international airports, this may require specific training (airport qualification). Unfamiliarity with taxiway layouts has been a significant factor in runway incursions. Study the aerodrome chart before taxiing at an unfamiliar aerodrome.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'Under Australian regulations, a transponder that is serviceable but the altitude encoding (Mode C) has failed:',
  options: [
    'A. The aircraft must land immediately, only if the operator holds a specific approval under their Air Operator Certificate, provided the relevant aerodr',
    'B. The transponder may be switched off as it provides no useful information without Mode C, except during the period of any declared low visibility procedures at the aerodrome',
    'C. The aircraft may continue but must advise ATC — ATC may not be able to provide altitude readout and certain airspace (Mode C required zones) may not be accessible. An MEL entry may cover this depending on the operation',
    'D. Operations may continue normally — Mode C is optional at all times, except during the period of any declared low visibility procedures at the aerodrome, subject to the pilot complet'
  ],
  correct: 2,
  explanation: 'Mode C failure (altitude encoding): advise ATC who will annotate the radar display. ATC cannot display the aircraft\\\'s altitude automatically — they must confirm by pilot report. For airspace requiring Mode C (above 10,000 ft and in some terminal areas), the aircraft may not be permitted to enter. An MEL provision may permit continued operation in some airspace; check the applicable requirements.',
  reference: 'CASR Part 91 / CAO 20.18'
},

{
  question: 'The "Continuous Descent Arrival" (CDA) or "Idle Descent" technique recommended at some Australian airports serves to:',
  options: [
    'A. Reduce fuel burn, emissions, and noise by maintaining a continuous descent from cruise altitude to the approach fix, avoiding level flight segments that require additional thrust',
    'B. Maximise aircraft speed to reduce congestion, only if the operator holds a specific approval under their Air Operator Certificate',
    'C. Increase the speed of descent to clear airspace quickly, except during the period of any declared low visibility procedures at the aerodrome',
    'D. Allow pilots to skip STAR altitude constraints, subject to the pilot completing the required recurrent training within 12 months'
  ],
  correct: 0,
  explanation: 'Continuous Descent Arrivals (CDAs) keep the aircraft in an idle or near-idle descent from cruise, eliminating level-flight segments that require thrust additions. Benefits: reduced fuel burn (15-30% savings vs step-down); lower CO2 and NOx emissions; reduced noise overflown communities. CDAs require coordination with ATC and sequencing — they are not always possible in busy terminal areas.',
  reference: 'Airservices Australia CDA programme / ICAO Doc 9931'
},

{
  question: 'Under Australian regulations, the holder of an ATPL who also holds a helicopter type rating may log helicopter time toward ATPL currency requirements only if:',
  options: [
    'A. The ATPL is a combined aeroplane/helicopter licence, except when the operation involves more than 9 passenger seats, subject to written approval ',
    'B. The ATPL(A) and helicopter time are separate — helicopter time does not count toward ATPL(A) recency or hour requirements, and vice versa. Each category has independent requirements',
    'C. Helicopter time always counts toward ATPL(A) requirements, only if the operator holds a specific approval under their Air Operator Certificate',
    'D. Helicopter time counts if the flights were conducted under IFR, subject to the requirements of the applicable Civil Aviation Order, except when the operation in'
  ],
  correct: 1,
  explanation: 'Aircraft categories (aeroplane, helicopter, powered-lift) are separate for licensing purposes. An ATPL(A) holder\\\'s helicopter flying does not count toward ATPL(A) recency or experience requirements. Conversely, if they hold an ATPL(H), helicopter time does not satisfy aeroplane recency. Each category\\\'s currency must be maintained independently.',
  reference: 'CASR Part 61'
},

{
  question: 'Under Australian law, which of the following correctly describes the relationship between CASA, ATSB, and Airservices Australia?',
  options: [
    'A. All three are the same organisation with different functions, subject to the pilot completing the required recurrent training within 12 months, subject to the operator's ap',
    'B. CASA (safety regulation), ATSB (accident investigation), and Airservices Australia (ATC and navigation services) are separate independent statutory bodies with distinct functions — none reports to the other',
    'C. CASA oversees both ATSB and Airservices Australia, subject to the requirements of the applicable Civil Aviation Order, only if the operator holds a',
    'D. Airservices Australia and CASA are combined; ATSB is separate, provided the aircraft holds a valid maintenance release and is within weight limits, subject to the pilot complet'
  ],
  correct: 1,
  explanation: 'Three separate statutory bodies: CASA = safety regulator (licence, certificates, regulation making, safety oversight); ATSB = independent accident investigator (no regulatory or service provision role); Airservices Australia = ATC service provider and navigation services. Each is a separate entity reporting to the Minister for Infrastructure. Their independence ensures no conflict of interest between regulation, investigation, and service provision.',
  reference: 'Civil Aviation Act 1988 / Transport Safety Investigation Act / Airservices Act 1995'
},

]
