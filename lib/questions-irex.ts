export const irexQuestions: {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  reference?: string;
}[] = [

{
  question: 'An instrument rating authorises the holder to fly as pilot in command:',
  options: [
    'Under the IFR, subject to the aircraft type and operational endorsements held on the licence',
    'In any aircraft type and in any weather, with no further endorsement required',
    'In IMC without endorsement, provided the flight remains in controlled airspace',
    'Carrying passengers in IMC under a private licence with no proficiency check'
  ],
  correct: 0,
  explanation: 'An instrument rating permits flight as PIC under the IFR (and at night under the VFR), but only in aircraft for which the pilot holds the relevant type/class and operational endorsements, and only while recency and instrument proficiency check requirements are met. It does not authorise flight in any aircraft type, nor remove the need for endorsements or checks.',
  reference: 'CASR 61.855 / Part 61 MOS Sch 3 IREX 2.1.1'
},

{
  question: 'The instrument rating proficiency check must be completed:',
  options: [
    'Every 3 years',
    'Every 2 years',
    'Every 6 months',
    'Every 12 months'
  ],
  correct: 3,
  explanation: 'An instrument rating proficiency check (IRPC) must be completed at least every 12 months to maintain the privileges of the instrument rating. The check covers instrument flying, approaches, and emergency procedures in the aircraft category.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2'
},

{
  question: 'The recent experience requirements for exercising instrument rating privileges include:',
  options: [
    '3 instrument approaches in the last 90 days in the relevant aircraft category',
    '1 hour of actual or simulated instrument flight in the last 90 days',
    '5 hours of instrument flight in the last 6 months',
    '2 instrument approaches and 1 hour of instrument flight in the last 90 days'
  ],
  correct: 0,
  explanation: 'To exercise instrument rating privileges, a pilot must have completed at least 3 instrument approaches in the preceding 90 days in the relevant aircraft category (actual IMC or simulated with a safety pilot or in an approved flight simulator).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2'
},

{
  question: 'The documents that must be carried on an IFR flight include:',
  options: [
    'The pilot licence and the aircraft logbooks only, with no airworthiness or registration papers',
    'An IFR clearance printout and the pilot licence, the remaining documents held by the operator',
    'Certificate of registration and maintenance release only',
    'Certificate of registration, C of A, maintenance release, radio licence, IFR flight plan copy'
  ],
  correct: 3,
  explanation: 'An IFR flight must carry: Certificate of Registration, Certificate of Airworthiness, current Maintenance Release, radio station licence, and current instrument approach charts for the destination and nominated alternate. The pilot must also carry their licence and medical certificate.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.2.1'
},

{
  question: 'When conducting an IFR flight, the pilot must obtain an airways clearance:',
  options: [
    'Before entering controlled airspace, since none is issued in Class G where the pilot self-separates',
    'Only when entering Class C airspace, because a clearance is not needed for any other class and can be requested in the air',
    'Before commencing any IFR flight, including one conducted wholly within Class G uncontrolled airspace',
    'Only when the flight is planned to operate above FL180 in the upper information region'
  ],
  correct: 0,
  explanation: 'An airways clearance is required before entering controlled airspace (Class A, C, D or E as IFR), where ATC issues the clearance and provides separation. In Class G (uncontrolled) airspace no airways clearance is issued; the IFR pilot operates without an ATC clearance and provides own separation, while still complying with IFR procedures and flight notification.',
  reference: 'AIP ENR 1.1 / CASR Part 91'
},

{
  question: 'The standard radio phraseology for requesting an airways clearance before an IFR departure is:',
  options: [
    '[Station], [callsign], [type], [departure], to [destination], [requested level], request airways clearance',
    '[Station], [callsign], IFR to [destination], request clearance and the current terminal weather',
    '[Station], [callsign], [type], taxiing for [destination], ready to copy airways clearance',
    '[Station], [callsign], holding point [runway], requesting airways clearance'
  ],
  correct: 0,
  explanation: 'The clearance request gives ATC the callsign, type, departure point, destination, requested cruising level and the words \'request airways clearance\', so the clearance can be processed without further questions. The other forms omit information ATC needs (type, departure, level) and are non-standard.',
  reference: 'AIP GEN 3.4 / ENR 1.1 — IFR communications'
},

{
  question: 'Following a radio communications failure in controlled airspace, the pilot should:',
  options: [
    'Land at the nearest aerodrome at once regardless of its suitability, weather or available approach aids, then await contact',
    'Squawk 7700 and return to the departure aerodrome by the reverse of the cleared route',
    'Descend below LSALT to regain VMC and continue the flight visually to the destination',
    'Squawk 7600, comply with the last ATC clearance acknowledged or the flight plan, and attempt to re-establish communications'
  ],
  correct: 3,
  explanation: 'On a communications failure: squawk 7600, listen out on ATIS and voice-modulated navaids, and transmit intentions blind. If IMC or unable to remain VMC, proceed in accordance with the last ATC clearance acknowledged (or the flight plan if none) and climb to the planned level, then carry out the approach to minima at the destination. Squawk 7700 signifies an emergency, not a comms failure.',
  reference: 'AIP ENR 1.1 / ERSA EMERG — communications failure'
},

{
  question: 'Under the IFR lost-communications procedure, descent at the destination is commenced:',
  options: [
    'At the later of the ETA last notified to ATC or the ETA derived from the current flight plan',
    'At the ETA originally filed in the flight plan, disregarding any airborne delay',
    'Immediately on losing communications, to arrive ahead of other traffic in the sequence',
    'Only after holding at the destination aid at LSALT until communications are restored'
  ],
  correct: 0,
  explanation: 'Descent is commenced at the LATER of the ETA last passed to and acknowledged by ATC, or the ETA derived from the current flight plan (allowing for any delay since departure). Using the later time lets ATC predict the arrival and keep the airspace clear.',
  reference: 'AIP ENR 1.1 — lost communications'
},

{
  question: 'On an instrument approach chart, the symbol "IAF" means:',
  options: [
    'Initial Approach Fix, the point at which the initial approach segment begins',
    'Instrument Approach Fix, the final approach waypoint',
    'Instrument Arrival Fix, the transition from en-route to approach',
    'IFR Approach Fix, any waypoint on an instrument approach'
  ],
  correct: 0,
  explanation: 'IAF (Initial Approach Fix) is the point that defines the beginning of the initial approach segment. The aircraft transitions from the en-route phase to the approach phase at the IAF. Multiple IAFs may be published to facilitate arrivals from different directions.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The "FAF" on an instrument approach chart is the:',
  options: [
    'Final Approach Fix, the point at which the final approach descent begins on a non-precision approach',
    'The Feeder Approach Fix, marking the transition from the holding pattern onto the approach',
    'The First Arrival Fix, which is the designated holding pattern entry point for the procedure',
    'The Final Altitude Fix, the point at which the minimum descent altitude is first reached'
  ],
  correct: 0,
  explanation: 'FAF (Final Approach Fix) is the point at which the final approach segment begins for a non-precision approach (NDB, VOR, GNSS 2D). It defines where the final descent to MDA commences. On a precision approach (ILS), the glideslope intercept point serves a similar function but is not formally called the FAF.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The difference between a 2D and a 3D instrument approach operation is:',
  options: [
    '2D approaches are flown on autopilot, while 3D approaches must be hand-flown throughout',
    '2D approaches are for piston aircraft; 3D approaches are for turbine aircraft',
    '2D approaches require DME for distance information, whereas 3D approaches are always flown using the ILS only',
    '2D approaches give only lateral guidance, while 3D approaches give both lateral and vertical guidance'
  ],
  correct: 3,
  explanation: '2D instrument approach operations provide lateral guidance only (NDB, VOR, GNSS/LNAV). The pilot must manage vertical profile manually to the MDA. 3D instrument approach operations provide both lateral AND vertical guidance (ILS, GLS, GNSS/LPV, RNP AR). A decision altitude (DA) is used rather than MDA. 3D approaches generally have lower minima.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.7'
},

{
  question: 'On a 2D (non-precision) approach, the Minimum Descent Altitude (MDA) is:',
  options: [
    'The altitude below which descent is prohibited unless the runway environment is in sight',
    'The altitude at which the pilot decides to land or go around, identical to a decision altitude',
    'The minimum safe altitude giving terrain clearance for the whole approach segment',
    'The lowest altitude on final to which descent is permitted before a missed approach becomes mandatory'
  ],
  correct: 3,
  explanation: 'On a 2D approach the pilot descends to the MDA and may then fly level (the step-down) while seeking the required visual reference. If that reference is not established at or before the missed approach point, a missed approach must be flown. Unlike a DA, the aircraft may level off at the MDA — it is an altitude not to be descended below, rather than a decision point reached on a continuous descent.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.8'
},

{
  question: 'On a 3D (precision or APV) approach, the Decision Altitude (DA) is:',
  options: [
    'The altitude at which a missed approach must be initiated if the required visual reference is not established',
    'The altitude at which the pilot levels off and then tracks along while visually searching for the runway environment',
    'The lowest usable altitude published on the chart for the entire approach procedure',
    'The value obtained by subtracting the decision height from the aerodrome elevation'
  ],
  correct: 0,
  explanation: 'A DA is used on a continuous-descent 3D approach (ILS, LPV, Baro-VNAV). At the DA the pilot must have the required visual reference to continue; if not, an immediate missed approach is initiated and the aircraft is not flown level at the DA. This contrasts with an MDA, where level flight at the minimum is permitted while assessing visual reference.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.8'
},

{
  question: 'On a day well below ISA, an approach chart publishes an MDA of 1,200 ft. With no temperature correction applied, the aircraft\'s true altitude at the indicated MDA will be:',
  options: [
    'Lower than 1,200 ft, so a temperature correction must be added',
    'Exactly 1,200 ft, because the QNH setting already corrects for temperature error',
    'Higher than 1,200 ft, giving additional obstacle clearance with no correction needed',
    'Unaffected, because temperature corrections apply only above the transition altitude'
  ],
  correct: 0,
  explanation: 'The altimeter is calibrated to ISA. In air colder than ISA the pressure levels lie closer together, so true altitude is LOWER than indicated (\'from high to low, or hot to cold, look out below\'). On a cold day the aircraft is actually below the published MDA unless a temperature correction is added to the minima, step-down and missed-approach altitudes. The QNH corrects for pressure, not temperature.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'When conducting a 3D approach in temperatures significantly below ISA, the pilot must:',
  options: [
    'Subtract the temperature correction, cold temperatures mean you fly lower than published',
    'No corrections are required for 3D approaches, the glidepath guidance compensates automatically',
    'Contact ATC for a corrected approach clearance',
    'Add the temperature correction to the published DA to obtain the corrected DA to fly'
  ],
  correct: 3,
  explanation: 'For 3D approaches in cold temperatures: the published DA is based on ISA. In temperatures below ISA, the pilot must ADD the temperature correction to the published DA. This ensures the aircraft maintains the required obstacle clearance. The correction increases the altitude flown on the approach — the pilot initiates missed approach at the corrected (higher) DA.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.10 / AIP ENR 1.7'
},

{
  question: 'An IFR flight notification (flight plan) submitted to ATC remains valid for:',
  options: [
    '2 hours after the proposed departure time, after which it must be re-filed or amended',
    '24 hours from the proposed departure time, after which it is automatically renewed',
    'An indefinite period, lasting until the pilot actively cancels the flight plan with air traffic control by radio',
    '30 minutes after the proposed departure time, matching the SARTIME buffer'
  ],
  correct: 0,
  explanation: 'A filed IFR flight notification lapses 2 hours after the nominated departure time (EOBT). If the flight has not departed within that window the plan must be re-filed or amended, so ATC is not holding capacity for an aircraft that has not got airborne.',
  reference: 'AIP ENR 1.10 — flight notification'
},

{
  question: 'On an IFR flight, the pilot\'s obligation regarding cancellation of SAR (SARWATCH) is:',
  options: [
    'None, because terminating SAR is solely the responsibility of air traffic control',
    'To cancel SARWATCH within one hour of landing in all circumstances',
    'Nothing, as SARWATCH is cancelled automatically once the aircraft lands at the destination',
    'To close the flight plan on arrival, or SAR action begins at the overdue time'
  ],
  correct: 3,
  explanation: 'ATC is the SAR alerting agency for IFR flights. The pilot must close the flight plan / cancel SARWATCH on arrival (by advising ATC or the relevant agency). If the aircraft does not arrive and SARWATCH is not cancelled, SAR action commences at the overdue time. This is a legal obligation on the pilot.',
  reference: 'AIP ENR 1.10 / GEN 3.6 — SAR'
},

{
  question: 'A missed approach must be initiated when:',
  options: [
    'The DA or MAP is reached without the required visual reference, or ATC instructs a go-around',
    'The aircraft momentarily descends below the published MDA during the step-down',
    'The in-flight visibility falls below 600 m during the approach',
    'The ILS glideslope indication deviates by more than half-scale on final'
  ],
  correct: 0,
  explanation: 'A missed approach is mandatory when: the DA is reached on a 3D approach, or the MAP on a 2D approach, without the required visual reference; ATC instructs a go-around; the aircraft is not positioned for a safe landing; or any factor casts doubt on a safe landing. When in doubt, going around is the safe option.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.13'
},

{
  question: 'For a destination alternate served by an instrument approach the pilot can conduct, the alternate weather minima are:',
  options: [
    'The alternate minima published on the approach chart for that procedure',
    'The same as the published landing minima at the alternate, with no increment',
    'A fixed increment of 300 ft and 1,500 m added to the published approach minima',
    'A ceiling of at least 1,500 ft and a visibility of 5 km, regardless of the approach'
  ],
  correct: 0,
  explanation: 'Under the current AIP (ENR 1.1 10.7.2.10), for an aerodrome served by an IAP the pilot can conduct, the alternate minima are those published on the approach chart (ENR 1.5 Section 6). By day only, where there is no usable IAP, the alternate minima are the LSALT for the final route segment plus 500 ft and a visibility of 8 km. There is no universal \'+300 ft / +1,500 m\' addition.',
  reference: 'AIP ENR 1.1 10.7.2.10 / ENR 1.5 Sec 6'
},

{
  question: 'IFR separation standards from other IFR aircraft are provided by:',
  options: [
    'ATC in controlled airspace, ATC is responsible for IFR-to-IFR separation',
    'The pilot, IFR aircraft must maintain their own separation from all traffic',
    'Only above FL180, below FL180 pilots maintain their own separation',
    'The TCAS system, pilots follow TCAS resolution advisories for all IFR separation'
  ],
  correct: 0,
  explanation: 'ATC provides separation between IFR aircraft in controlled airspace. In Class G (uncontrolled) airspace, IFR aircraft receive no separation service — the pilot is responsible for collision avoidance. In controlled airspace (Class A, C, D, E), ATC maintains IFR-to-IFR separation and in Class C also separates IFR from VFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.15'
},

{
  question: 'Pilot Activated Lighting (PAL) at a non-controlled aerodrome is activated by:',
  options: [
    'Calling air traffic control on the area frequency to request that the runway lighting be switched on for arrival',
    'The aerodrome operator manually, once an IFR aircraft reports inbound to the field',
    'Selecting a dedicated PAL frequency that is published separately for each aerodrome',
    'Transmitting a set number of times on the published CTAF within a defined period, the count selecting intensity'
  ],
  correct: 3,
  explanation: 'PAL is activated by keying the transmitter the specified number of times on the published CTAF within about 5 seconds (commonly 5 = high, 3 = medium, 1 = low intensity). The lights remain on for roughly 15 minutes. Activation details are published in ERSA for each aerodrome.',
  reference: 'AIP ENR 1.14 / ERSA — PAL'
},

{
  question: 'Visual Approach Slope Indicator (VASI) provides:',
  options: [
    'A visual glidepath reference',
    'Distance information to the runway threshold',
    'Lateral guidance to the runway centreline',
    'Touchdown zone marking information'
  ],
  correct: 0,
  explanation: 'VASI provides visual approach slope guidance. Standard 2-bar VASI: all white = too high; red over white = on slope (about 3°); all red = too low. PAPI (Precision Approach Path Indicator) works similarly: 4 whites = high; 3 white 1 red = slightly high; 2 white 2 red = on slope; 1 white 3 red = slightly low; 4 red = low. These supplement but do not replace instrument approaches. Typically 2 bars providing on-slope (white/white=high, red/white=on slope, red/red=low indication).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.17'
},

{
  question: 'A SID (Standard Instrument Departure) procedure:',
  options: [
    'Is optional, pilots may choose to fly their own departure route',
    'Must be flown as published unless ATC issues a different clearance, providing obstacle clearance and standard routing',
    'Only applies to jet aircraft above 5700 kg',
    'Is a noise abatement procedure that may be declined if operationally inconvenient with appropriate ATC clearance obtained'
  ],
  correct: 1,
  explanation: 'A SID must be flown as published unless ATC specifically amends the clearance. SIDs provide: guaranteed obstacle clearance (typically 200 ft/nm (3.3%) gradient minimum), traffic flow management, and standardised routing. When cleared for a SID, the pilot must comply with all altitude constraints, speed limits, and routing unless amended by ATC.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / AIP ENR 1.1'
},

{
  question: 'A STAR (Standard Terminal Arrival Route):',
  options: [
    'Is an optional procedure used only when visual meteorological conditions exist at the field',
    'Must always be flown all the way to touchdown once the arrival has been commenced',
    'Is provided only at major international aerodromes and not at domestic ports',
    'Provides a standardised routing from the en-route structure to the initial approach fix'
  ],
  correct: 3,
  explanation: 'A STAR is a published ATC procedure linking the en-route structure to the IAF of an instrument approach. When cleared for a STAR, the pilot must comply with all published altitude constraints, speed limits, and routing. ATC may amend the STAR (radar vectors, "direct to" waypoints). STARs reduce RT workload and provide predictable traffic flow.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.18 / AIP ENR 1.1'
},

{
  question: 'The holding-pattern entry to be used is determined by:',
  options: [
    'The aircraft\'s heading relative to the inbound track as it arrives over the fix',
    'The aircraft performance category alone, with the entry type varying by aircraft size',
    'The pilot\'s preference for whichever turn direction is the more comfortable',
    'An individual ATC instruction issued for every holding entry in controlled airspace'
  ],
  correct: 0,
  explanation: 'ICAO holding entries are chosen from the aircraft\'s heading relative to the inbound track, divided by a line 70 degrees to that track: Sector 1 = parallel entry; Sector 2 = offset (teardrop) entry; Sector 3 = direct entry. Selecting the correct entry keeps the aircraft within the protected holding area.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — holding entries'
},

{
  question: 'The transponder code for radio failure is:',
  options: [
    '7700',
    '7500',
    '2000',
    '7600'
  ],
  correct: 3,
  explanation: '7600 is the transponder code for radio failure (communications failure/NORDO). 7700 = emergency; 7500 = unlawful interference/hijack; 2000 = entering controlled airspace without a discrete squawk code. Squawking 7600 alerts ATC on radar that the aircraft has lost communications.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.19 / AIP ENR 1.6'
},

{
  question: 'While an aircraft is on the ground at a controlled aerodrome, the use of radar is:',
  options: [
    'Unrestricted, because ground radar may be used for any purpose at any aerodrome',
    'Prohibited entirely, as radar may not be operated while an aircraft is on the ground',
    'Entirely at the pilot\'s discretion, since all use of radar on the ground is decided case by case by the flight crew',
    'Limited, as it may not be used for approach control on the ground, though surface movement radar is allowed'
  ],
  correct: 3,
  explanation: 'Radar used for approach control (e.g. ASR/PAR) applies to airborne aircraft, not aircraft on the ground at a controlled aerodrome. Surface movement radar may be used for ground manoeuvring. This separation of function avoids interference with the approach radar picture.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.20'
},

{
  question: 'The reporting requirement for an IFR aircraft at the boundary of controlled airspace or at a compulsory reporting point is:',
  options: [
    'Reporting is optional once the aircraft has been identified by ATC on radar',
    'The pilot must report position, level, and estimated time to the next compulsory reporting point',
    'A report is only required when the pilot initiates a change of altitude or level',
    'A report is required only at the point of leaving controlled airspace, not the boundary'
  ],
  correct: 1,
  explanation: 'Compulsory reporting points (solid triangle on charts) require position reports from all IFR aircraft: callsign, position, time, level, and next reporting point ETA. On-request points (open triangle) only need a report when ATC specifically requests one. In radar-identified environments, ATC may suspend compulsory reports.',
  reference: 'AIP ENR 1.6 — Position Reporting'
},

{
  question: 'When must an IFR aircraft report a significant change to its estimated arrival time?',
  options: [
    'Any change to the estimate must be reported to ATC immediately without a threshold',
    'When the estimated arrival at a reporting point differs from the filed plan by more than 2 minutes',
    'When the ETA differs by more than 5 minutes from the filed estimate',
    'ETA changes only need to be reported if the destination changes'
  ],
  correct: 1,
  explanation: 'AIP requires IFR aircraft to notify ATC of changes to ETAs at waypoints when the revised ETA differs by more than 2 minutes from the last notified ETA. This allows ATC to maintain accurate separation and sequencing. In high-density airspace, even smaller variations may require notification.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.4 / AIP ENR 1.6'
},

{
  question: 'At a non-controlled aerodrome, the IFR reporting requirements include:',
  options: [
    'There are no specific reporting requirements, since Class G airspace is not served by ATC',
    'The pilot must make position broadcasts on CTAF and report arrival to ATS or JRCC to close the flight plan',
    'Reports are made only to the nearest controlled aerodrome and not on the local CTAF',
    'Self-announce broadcasts are made only when other conflicting traffic is first heard on the local frequency'
  ],
  correct: 1,
  explanation: 'IFR operations at non-controlled aerodromes: the pilot makes CTAF broadcasts for traffic awareness, and must report arrival and close the IFR flight plan with ATS or the JRCC to prevent SAR action. All IFR procedures (approach minimums, missed approach) apply regardless of the lack of ATC.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.6 / AIP ENR 1.1'
},

{
  question: 'For an IFR take-off in an aeroplane that is not a qualifying multi-engine aeroplane, the take-off minima are:',
  options: [
    'Nil, because no take-off minima are prescribed for flight under the IFR',
    'A cloud ceiling above 200 ft together with a visibility of at least 400 m RVR',
    'A cloud ceiling of 300 ft and a visibility of 2,000 m',
    'The same minima that apply to landing at the departure aerodrome that day'
  ],
  correct: 2,
  explanation: 'Under Part 91 MOS the take-off minima for an aeroplane that is not a qualifying multi-engine aeroplane are a cloud ceiling of 300 ft and visibility of 2,000 m (s 15.06). A qualifying multi-engine aeroplane may use 800 m, reducible to 550 m with specified lighting and standby power (s 15.05) — so 800 m is the multi-engine figure, not a general default. A take-off must not commence below the applicable minima.',
  reference: 'Part 91 MOS 15.05 / 15.06'
},

{
  question: 'A published noise abatement procedure at an aerodrome:',
  options: [
    'Is optional at all times, since the pilot may use any departure track for any reason',
    'Must be followed as published, unless the pilot must deviate for safety',
    'Applies only to air transport aircraft, with general aviation aircraft exempt',
    'Is an ATC instruction that overrides the pilot\'s own obstacle-clearance and safety obligations'
  ],
  correct: 1,
  explanation: 'Noise abatement procedures are followed as published, but safety has priority: if compliance would compromise safety (e.g. engine failure, terrain, severe turbulence) the pilot may deviate and then assumes responsibility for obstacle clearance, advising ATC. The published procedures are designed with normal safety margins.',
  reference: 'AIP ENR 1.1 — noise abatement'
},

{
  question: 'A circling approach is required when:',
  options: [
    'The aircraft becomes too high to complete a normal descent profile on the final approach segment to the runway',
    'The reported visibility is below the published straight-in landing minima',
    'ATC requires the aircraft to fly a 360-degree orbit for traffic sequencing',
    'The final approach track is not within about 30 degrees of the runway, or a different runway must be used for landing'
  ],
  correct: 3,
  explanation: 'Circling is flown when the instrument approach is not aligned with the landing runway, the final approach track differs from the runway by more than about 30 degrees, or the pilot must land on a different runway. The pilot descends to the circling minima, becomes visual, and manoeuvres within the circling area to land. Circling minima are higher than straight-in minima.',
  reference: 'AIP ENR 1.5 — circling'
},

{
  question: 'The speed limit below 10,000 ft AMSL for IFR operations in Australian airspace is:',
  options: [
    '250 kt IAS',
    '200 kt IAS',
    '300 kt IAS',
    'No speed restriction below 10,000 ft for IFR operations'
  ],
  correct: 0,
  explanation: 'All aircraft in Australian airspace below 10,000 ft AMSL must not exceed 250 kt IAS, unless specific authorisation is obtained from ATC. This applies to IFR operations as well as VFR. The restriction improves safety margins for traffic conflict avoidance and TCAS effectiveness at lower altitudes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.6'
},

{
  question: 'The maximum speed in a holding pattern below 14,000 ft in Australian airspace is:',
  options: [
    '200 kt IAS',
    '250 kt IAS',
    'No specific holding speed, pilots use best holding speed for aircraft type',
    '230 kt IAS'
  ],
  correct: 3,
  explanation: 'Australian AIP holding speed limits: at or below 14,000 ft — maximum 230 kt IAS; above 14,000 ft to 20,000 ft — 240 kt IAS; above 20,000 ft — 265 kt IAS (or Mach 0.83). Pilots should aim to fly at the published holding speed for their aircraft category. Exceeding holding speeds expands the protected airspace and may compromise separation.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.5'
},

{
  question: 'The maximum speed during an instrument approach procedure (unless otherwise specified) is:',
  options: [
    'Aircraft category dependent, with maximum circling speeds of Category A 100 kt, B 135 kt and C 180 kt',
    '250 kt IAS at every stage',
    'Initial segment: no specific limit; intermediate/final: 185 kt IAS; missed approach: 185 kt IAS',
    '140 kt IAS throughout the approach'
  ],
  correct: 0,
  explanation: 'Approach speed limits are category-dependent. Maximum circling speeds are Cat A 100, B 135, C 180, D 205, E 240 kt; maximum final-approach speeds are Cat A 100, B 130, C 160, D 185, E 230 kt. The pilot stays within the band for the category to remain inside the protected area.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.5'
},

{
  question: 'ATC speed restrictions during approach are cancelled when:',
  options: [
    'The aircraft reaches the FAF',
    'The pilot decides the restriction is no longer needed',
    'Speed restrictions are never cancelled, since they continue to apply right up until the aircraft lands',
    'ATC specifically cancels the restriction, or the aircraft is transferred to tower frequency'
  ],
  correct: 3,
  explanation: 'ATC-issued speed restrictions remain in effect until ATC cancels them or the aircraft is transferred to a different frequency. When ATC says "cancel speed restrictions," the pilot reverts to normal approach speed. Speed restrictions for procedural separation must be strictly adhered to — unilateral pilot deviation from an ATC speed restriction without permission is not permitted.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.8 / AIP ENR 1.6'
},

{
  question: '"LSALT" (Lowest Safe Altitude) for an IFR route is defined as:',
  options: [
    '1,000 ft above the highest obstacle within the protected area, typically 5 nm each side of track',
    '1,000 ft above all terrain and obstacles lying within 25 nm either side of the planned track on the chart at all times',
    'The altitude at which the aircraft is first clear of cloud and able to proceed visually',
    'The minimum published instrument approach altitude for the destination aerodrome in use'
  ],
  correct: 0,
  explanation: 'LSALT provides 1,000 ft clearance above all terrain and obstacles within the relevant protected area of the route. For IFR en-route in Australia, the protected area is typically 5 nm each side of the track centreline. LSALT is the minimum altitude for en-route IFR flight to ensure safe terrain clearance. In high terrain areas, published LSALTs may be found on ERC charts.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.3.1 / AIP ENR 1.7'
},

{
  question: 'To calculate an LSALT for a route segment not published on charts, the pilot must:',
  options: [
    'Add 1,000 ft to the departure aerodrome QNH and use the result as the safe altitude',
    'Take the highest obstacle within the protected area either side of track, add 1,000 ft, and round up to the next 100 ft',
    'Request an assigned IFR level from ATC for the entire route, relying on that in place of calculating any LSALT',
    'Use the ERSA grid LSALT for the relevant quadrant without making any further check'
  ],
  correct: 1,
  explanation: 'A pilot-calculated LSALT takes the highest terrain or obstacle within the protected area each side of track, adds 1,000 ft for obstacle clearance, and rounds up to the next 100 ft. Greater clearance applies over high terrain. The result is checked against any published LSALT for the route.',
  reference: 'AIP GEN 3.3 / ENR 1.7 — LSALT'
},

{
  question: 'Under the IFR, descent below the LSALT/MSA is permitted only when the aircraft is:',
  options: [
    'Below the LSALT whenever the pilot can see the ground, by day or by night',
    'Established on an instrument or visual approach, assigned a level by ATC in controlled airspace, or in VMC by day',
    'Issued any descent clearance by ATC, regardless of the airspace class or terrain responsibility',
    'Assessed by the pilot personally to have adequate terrain clearance on whatever evidence happens to be available'
  ],
  correct: 1,
  explanation: 'Descent below LSALT/MSA under the IFR is only permitted when authorised, captured by the \'VIVAT\' conditions: Visual approach/departure, Instrument approach/departure, VMC by day, ATC-assigned level in controlled airspace, or Take-off/landing. Merely seeing the ground, a descent clearance that does not assure terrain clearance (as in Class G), or the pilot\'s own assessment do not authorise it.',
  reference: 'AIP GEN 3.3 — minimum heights (VIVAT)'
},

{
  question: 'The RNP (Required Navigation Performance) value for a route or procedure specifies:',
  options: [
    'The maximum acceptable cross-track error in nautical miles, at a 95% containment probability',
    'The minimum GPS receiver accuracy that must be installed before any IFR flight',
    'The maximum deviation from centreline permitted on an instrument approach segment',
    'The navigation accuracy, in nautical miles, the aircraft must hold for 95% of the flight time'
  ],
  correct: 3,
  explanation: 'RNP states both the required navigation accuracy and an on-board performance-monitoring/alerting requirement. RNP X means the aircraft stays within X nm of the centreline for 95% of the time and the system warns the crew if that cannot be assured (e.g. RNP 10 oceanic, RNP 1 terminal, RNP 0.3 approach). This monitoring requirement is what distinguishes RNP from plain RNAV.',
  reference: 'Part 61 MOS Sch 3 IREX 4.1.2 / AIP ENR 1.7'
},

{
  question: 'The segment from the initial approach fix (IAF) to the intermediate fix (IF) is called:',
  options: [
    'The final approach segment',
    'The initial approach segment',
    'The intermediate approach segment',
    'The missed approach segment'
  ],
  correct: 1,
  explanation: 'Approach segments run IAF to IF (initial), IF to FAF (intermediate), FAF to MAP/DA (final), then the missed approach. The initial segment manoeuvres the aircraft from the IAF toward the intermediate fix and the final approach course.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.3 / ICAO PANS-OPS'
},

{
  question: 'An aircraft operating minimum (AOM) derived from a published DA represents:',
  options: [
    'The operational minimum the crew flies, the published DA adjusted for the relevant corrections',
    'A higher decision altitude that corrects for altimeter instrument error alone',
    'A lower decision altitude that the crew justifies by the more accurate avionics that are fitted to the aircraft',
    'An extra margin the operator adds above the published procedure decision altitude'
  ],
  correct: 0,
  explanation: 'The operational minimum a crew flies is the published procedure minimum adjusted by any pressure-error and operator/aircraft corrections, established for each aerodrome; it is not a more accurate avionics allowance or an arbitrary extra margin.',
  reference: 'AIP ENR 1.5 / Part 91 MOS'
},

{
  question: 'The normal gradient for the final approach segment of an instrument approach is:',
  options: [
    '2.5° (approximately 4.4% or 265 ft/nm)',
    '3° (approximately 5.2% or 318 ft/nm)',
    '3.5° (approximately 6.1% or 370 ft/nm)',
    'The gradient is not standardised, it varies by procedure design'
  ],
  correct: 1,
  explanation: 'The standard final approach gradient is 5.2% (approximately 3° or 318 ft/nm). ILS glideslopes are typically set at 3°. This gradient is designed to provide safe obstacle clearance while remaining within normal aircraft performance. Steeper gradients (up to 6.5%) may be published where terrain or obstacles require it. Non-precision approach descent angles are published on the approach chart.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.6 / ICAO PANS-OPS'
},

{
  question: 'Tracking tolerances for IFR navigation are:',
  options: [
    'Plus or minus 5 nm en-route and plus or minus 2 nm in the terminal area',
    'Plus or minus 1 nm, applied uniformly across every single phase of flight conducted under the IFR at all times',
    'Not prescribed, with the pilot relying on best judgement throughout',
    'Defined per aid in the AIP, with NDB and VOR by angular deviation and RNP by the published RNP value'
  ],
  correct: 3,
  explanation: 'The AIP and Part 91 MOS prescribe deviation tolerances by aid: NDB plus or minus 5 degrees; VOR/LOC half-scale CDI deflection; RNP/RNAV the prescribed RNP value; DME plus or minus 2 nm; visual 1 nm. Exceeding a tolerance requires correction and, in controlled airspace, an immediate report to ATC.',
  reference: 'AIP ENR 1.1 / Part 91 MOS'
},

{
  question: 'IFR position-fixing in Australian airspace requires the pilot to:',
  options: [
    'Take a fix at least every 30 minutes using whatever navigation aid is available',
    'Fix compulsory reporting points and within the AIP-specified interval for the aid in use',
    'Rely on continuous GPS monitoring alone as the only acceptable method of fixing position along the route',
    'Take fixes only while operating inside controlled airspace, not in Class G'
  ],
  correct: 1,
  explanation: 'The pilot must obtain fixes at all compulsory reporting points and at intervals no greater than those specified in AIP for the navigation type in use (e.g. NDB by time/distance limit; VOR at station passage; GNSS continuous). Regular fixing lets navigation errors be detected and corrected before terrain or airspace clearance is compromised.',
  reference: 'AIP ENR 1.1 — IFR navigation'
},

{
  question: 'Aircraft performance category for IFR operations is determined by:',
  options: [
    'The aircraft maximum take-off weight only, taken from the type certificate data sheet',
    '1.3 × Vso (Vat), the threshold speed at maximum certificated landing weight',
    'The maximum cruise speed of the aircraft in its en-route cruise configuration',
    'The aircraft type as listed in the operator\'s operations manual fleet table'
  ],
  correct: 1,
  explanation: 'Aircraft performance category = Vat = 1.3 × Vso at maximum certificated landing weight. Categories: A (<91 kt), B (91-120 kt), C (121-140 kt), D (141-165 kt), E (>165 kt). Category determines: approach speed limits, minimum circling radii, protected airspace sizes for approaches, and applicable minima. Most light training aircraft are Category A.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.2 / AIP ENR 1.5'
},

{
  question: 'To continue below the DA or past the MAP, the required visual reference is:',
  options: [
    'The runway edge lights in sight, and no other approach or runway feature counts',
    'Any lights that happen to be visible somewhere ahead of the aircraft on approach',
    'At least one of the approach lights, threshold, touchdown zone, runway or its markings, or PAPI/VASIS',
    'Both the runway threshold and the touchdown zone visible together'
  ],
  correct: 2,
  explanation: 'To continue below DA / past the MAP the pilot must clearly identify at least one of: the approach lighting system; runway threshold, markings or lights; runway end identifier lights; PAPI/VASI; touchdown zone or its markings/lights; or the runway and its markings. A vague impression of the runway environment is not sufficient.',
  reference: 'AIP ENR 1.5 — instrument approaches'
},

{
  question: 'The freezing level in clear air is calculated using a lapse rate of:',
  options: [
    '2°C per 1,000 ft',
    '3°C per 1,000 ft',
    '1.5°C per 1,000 ft',
    '1°C per 1,000 ft'
  ],
  correct: 1,
  explanation: 'In clear air (dry adiabatic), temperature decreases at approximately 3°C per 1,000 ft. To find the freezing level: if OAT at the surface is +15°C, the freezing level is at 15 ÷ 3 = 5,000 ft. In cloud (moist adiabatic), the lapse rate is 1.5°C per 1,000 ft — lower than in clear air because condensation releases latent heat.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'The freezing level in cloud is calculated using a lapse rate of:',
  options: [
    '3°C per 1,000 ft',
    '1.5°C per 1,000 ft',
    '2°C per 1,000 ft',
    '1°C per 1,000 ft'
  ],
  correct: 1,
  explanation: 'In cloud, condensation releases latent heat, slowing the cooling rate. The moist adiabatic lapse rate is approximately 1.5°C per 1,000 ft. If the temperature at cloud base is 0°C, you will not encounter the freezing level within the cloud — it is already at 0°C at cloud base. Understanding this difference is critical for icing prediction in IFR operations.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'Given OAT at 2,000 ft of +12°C in clear air, the approximate freezing level is:',
  options: [
    '6,000 ft',
    '4,000 ft',
    '8,000 ft',
    '10,000 ft'
  ],
  correct: 0,
  explanation: 'Freezing level from 2,000 ft at +12°C in clear air (3°C/1,000 ft lapse rate): distance to reach 0°C = 12 ÷ 3 = 4,000 ft above current position. Freezing level = 2,000 + 4,000 = 6,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'Given temperature at cloud base (5,000 ft) of +6°C, the approximate freezing level within cloud is:',
  options: [
    '9,000 ft',
    '7,000 ft',
    '8,000 ft',
    '11,000 ft'
  ],
  correct: 0,
  explanation: 'Within cloud, lapse rate is 1.5°C per 1,000 ft. Distance to reach 0°C from +6°C = 6 ÷ 1.5 = 4,000 ft above cloud base. Freezing level = 5,000 + 4,000 = 9,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'Severe airframe icing is most likely in:',
  options: [
    'Light drizzle at temperatures below minus 20 degrees Celsius',
    'Any cloud below minus 30 degrees Celsius where ice crystals predominate',
    'Temperatures between minus 30 and minus 40 degrees Celsius within the body of a cumulonimbus cloud',
    '0 to minus 10 degrees in stratiform cloud with high liquid water content, or in freezing rain or drizzle'
  ],
  correct: 3,
  explanation: 'Severe icing is most likely between 0 and -10C in stratiform cloud with high liquid water content, and in freezing rain or freezing drizzle (supercooled large droplets). Below about -20C droplets tend to freeze before contact. SLD icing is the most hazardous because the large drops spread aft of the protected leading edges.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'Observation of cumulus clouds embedded in stratus (embedded CB) during IFR flight is significant because:',
  options: [
    'Embedded CBs are less hazardous than visible CBs',
    'Embedded CBs only produce light turbulence and moderate icing',
    'Embedded CBs are reliably detected by the aircraft GNSS system as weather obstacles lying ahead',
    'Embedded CBs cannot be detected visually in IMC, they create severe turbulence, icing, hail'
  ],
  correct: 3,
  explanation: 'Embedded CBs are cumulonimbus hidden within layered cloud — invisible in IMC. Without weather radar, the IFR pilot has no warning before penetrating the cell. All CB hazards apply: severe turbulence (structural damage risk), severe icing, hail, lightning, strong updrafts and downdrafts. Weather radar is essential for IFR operations in convective areas.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Clear air turbulence (CAT) is most commonly found:',
  options: [
    'Near the tropopause around the jet stream, in clear air with strong shear and no visual warning',
    'In cumulus cloud at altitudes well below 10,000 ft above mean sea level and near the terrain',
    'Only over mountainous terrain, and there at any altitude',
    'In the lower atmosphere below 5,000 ft, close to the surface'
  ],
  correct: 0,
  explanation: 'CAT occurs most often near the jet stream at upper levels (around FL250-FL450), associated with strong horizontal and vertical wind shear, in clear air with no cloud or precipitation cue. It can reach severe intensity. SIGMETs are issued for CAT, and forecasts and AIREPs are the main means of avoidance.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'The probability of microburst activity is highest when:',
  options: [
    'Light rain is falling steadily from layered stratus cloud',
    'Heavy precipitation or virga falls from CB/TCU, or strong surface heating meets moderate moisture',
    'The temperature and dew-point spread is consistently greater than 10 degrees Celsius all day',
    'Only in tropical regions, never in temperate Australian airspace'
  ],
  correct: 1,
  explanation: 'Microburst risk is highest with heavy precipitation from cumulonimbus or towering cumulus, virga (evaporative cooling intensifies the downdraft), and strong surface heating with moderate moisture. SIGMETs, AIREPs and low-level wind-shear alerting systems at major aerodromes provide warning.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'The seasonal variation most relevant to IFR operations in southern Australia is:',
  options: [
    'Tropical cyclones, which are most common over southern Australia during the winter months',
    'Dust devils, which are the primary instrument-flight hazard across southern Australia',
    'Active frontal weather during winter and spring, cold fronts bring severe turbulence, icing, and embedded CB',
    'Southern Australia experiences no seasonal variation in its weather patterns through the year'
  ],
  correct: 2,
  explanation: 'Southern Australia seasonal IFR hazards: Winter/spring — active cold fronts with associated CB, severe turbulence, icing, and reduced ceilings; mountain wave over the Alps; radiation fog in stable high-pressure systems. Summer — afternoon convection and thunderstorms, particularly over inland areas; dust storms reducing visibility. Jet stream is most active in winter at lower latitudes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'The jet stream is significant for IFR operations because:',
  options: [
    'It improves fuel efficiency only, with no associated clear-air turbulence or significant wind hazard',
    'It produces clear-air turbulence on the cold side and strong winds that affect fuel planning',
    'The jet stream is found only above FL500 and so has no effect on normal IFR operations',
    'The jet stream only affects supersonic aircraft cruising high in the lower stratosphere'
  ],
  correct: 1,
  explanation: 'Jet stream IFR implications: CAT (severe on cyclonic/cold side and at edges); wind speeds up to 300 kt requiring fuel planning revision; tropopause height changes (higher in subtropical jet, lower in polar front jet); embedded CB in associated frontal systems. Flying parallel to jet stream core in the warmer air (anticyclonic side) minimises CAT while utilising tailwind benefit.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.1.1'
},

{
  question: 'A tropical cyclone affecting an IFR route would typically cause:',
  options: [
    'Extreme turbulence, icing, microbursts and lightning over a very large area, to be avoided',
    'Clear skies and smooth conditions everywhere outside the eye wall',
    'Turbulence only within the wall cloud, so flying IFR is perfectly acceptable at a moderate distance',
    'Effects confined to surface operations, with no impact on IFR flights'
  ],
  correct: 0,
  explanation: 'A tropical cyclone produces hazards over a very wide area: feeder bands with embedded cumulonimbus extending hundreds of kilometres from the centre, extreme turbulence, severe icing, microbursts and lightning. IFR flight in or near a cyclone should not be attempted. The northern-Australian cyclone season (about November to April) is a planning consideration.',
  reference: 'Part 61 MOS Sch 3 IREX 3.1.1'
},

{
  question: 'The meteorological information required for an IFR flight includes:',
  options: [
    'A METAR for the destination aerodrome only',
    'Only the TAF for the destination aerodrome',
    'ARFOR/SIGMET for the route, TAFs for departure/destination/alternates, NOTAMs and AIREPs',
    'Any weather forecast that happens to be available from a public internet source on the day'
  ],
  correct: 2,
  explanation: 'IFR planning requires the area forecast (ARFOR) and any SIGMET for the route, TAFs for departure, destination and all planned alternates, current METARs, relevant NOTAMs and available AIREPs. Together these let the pilot assess departure, en-route, destination-at-ETA and alternate conditions.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.1'
},

{
  question: 'When interpreting a destination TAF for IFR planning, the key question is:',
  options: [
    'Whether visual flight rules conditions are possible at the destination',
    'Whether the forecast at ETA meets the approach minima, otherwise an alternate is required',
    'The forecast cloud base only, since visibility is irrelevant under the IFR',
    'Only the forecast temperature, taken as the single indicator of icing risk'
  ],
  correct: 1,
  explanation: 'The critical question is whether the forecast at ETA meets the approach minima (cloud base above the DA/MDA and visibility above the published minimum). If the TAF shows conditions at or below minima at ETA, an alternate with suitable weather and the fuel to divert must be provided. INTER/TEMPO and BECMG groups must be analysed for periods below minima.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.2'
},

{
  question: 'The VOLMET service provides IFR pilots with:',
  options: [
    'A continuous HF/VHF broadcast of METARs and TAFs for nominated aerodromes, to update weather in flight',
    'Volcanic ash hazard warnings issued for the relevant flight information region only',
    'Upper-wind and temperature forecasts intended only for cruise-level flight planning',
    'A broadcast service available only within European airspace, and not anywhere within Australia'
  ],
  correct: 0,
  explanation: 'VOLMET continuously broadcasts current METARs and TAFs for nominated aerodromes on HF/VHF, letting IFR pilots update destination and alternate weather en-route without calling ATC. NAIPS provides the pre-flight picture; VOLMET supplies in-flight updates. Frequencies and aerodromes covered are listed in AIP.',
  reference: 'AIP GEN/COM — VOLMET'
},

{
  question: 'The pilot\'s obligation to report variations from forecast weather is to:',
  options: [
    'Report significant variations from the forecast to ATC or Flightwatch',
    'Report only when conditions turn out better than forecast',
    'Report only when an emergency is being declared',
    'Make no report, since weather reporting is solely ATC\'s responsibility'
  ],
  correct: 0,
  explanation: 'Pilots should report significant departures from forecast, such as unexpected icing, moderate or severe turbulence, CB activity, windshear or markedly reduced visibility. These AIREPs are passed to ATC and relayed to other crews and forecasters, and are often the most timely en-route weather data available.',
  reference: 'AIP ENR/GEN — in-flight reporting'
},

{
  question: 'Acceptable in-flight sources of altimeter QNH under the IFR include:',
  options: [
    'Area QNH broadcasts on the flight information service frequencies, and no other source',
    'ATC, ATIS, AWIS, area QNH broadcasts and VOLMET, updated regularly to keep terrain clearance accurate',
    'The departure aerodrome QNH only, which is not permitted to be changed while en-route',
    'GPS-derived altitude, used in place of a QNH altimeter setting in remote areas'
  ],
  correct: 1,
  explanation: 'IFR QNH comes from ATC (controlled airspace), ATIS (controlled aerodromes), AWIS (non-controlled aerodromes), area QNH broadcasts on FIS frequencies, VOLMET and pre-flight NAIPS. QNH should be updated regularly: flying from high to low pressure without resetting it leaves the aircraft lower than indicated.',
  reference: 'AIP ENR 1.7 — altimeter setting'
},

{
  question: 'In air significantly colder than ISA, the pressure altimeter:',
  options: [
    'Over-reads, so the true altitude is lower than the altitude indicated',
    'Under-reads, so the aircraft is higher than the indicated altitude',
    'Is unaffected, once the correct QNH has been set',
    'Over-reads, but only at levels above FL100'
  ],
  correct: 0,
  explanation: 'The altimeter is calibrated to ISA. In colder-than-ISA air the pressure levels are compressed, so the altimeter over-reads (indicates higher than the true altitude) and the aircraft is actually LOWER than indicated, \'from high to low, or hot to cold, look out below.\' Temperature corrections are applied to approach minima, step-downs and missed-approach altitudes on cold days.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'A SIGMET on your planned route forecasts severe icing. The appropriate action is to:',
  options: [
    'Assess the aircraft\'s ice protection and reroute or change level to avoid the area, diverting if it cannot be avoided',
    'Proceed entirely unchanged, treating the SIGMET as advisory information that requires no operational response',
    'Continue as planned and switch on the ice protection only once ice is seen to accumulate',
    'Descend below the forecast freezing level immediately and continue along the planned track'
  ],
  correct: 0,
  explanation: 'A severe-icing SIGMET demands a go/no-go assessment: review the aircraft\'s ice protection (none, de-ice, anti-ice, FIKI), seek AIREPs of actual conditions, and change route or level to avoid the area. If the aircraft is not certified for the forecast intensity, do not depart, or divert. Operating beyond the certification is illegal and dangerous.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'An active cold front typically produces which IFR hazards?',
  options: [
    'Smooth stratiform cloud bringing no more than light rime icing and otherwise steady conditions',
    'No significant hazards, since cold fronts generally produce fine VFR conditions behind them',
    'A narrow band of severe turbulence with embedded CB, heavy precipitation, icing and low-level windshear',
    'Only light turbulence accompanied by moderate, steady rain along the frontal zone'
  ],
  correct: 2,
  explanation: 'An active cold front brings severe turbulence in and near CB, embedded cumulonimbus, severe icing in the 0 to -20C band, heavy precipitation reducing visibility, low-level windshear on approach, rapid post-frontal change and possible pre-frontal squall lines. These must be planned for along the route.',
  reference: 'Part 61 MOS Sch 3 IREX 3.1.1'
},

{
  question: 'A report of \'SEV TURB\' (severe turbulence) describes turbulence that:',
  options: [
    'Occasionally causes small, erratic changes in altitude or attitude that are easily corrected',
    'Causes abrupt, large changes in altitude or attitude, momentary loss of control and possible structural damage',
    'Merely presses the occupants intermittently against their seat belts without affecting aircraft control',
    'Simply makes use of the autopilot advisable for passenger comfort'
  ],
  correct: 1,
  explanation: 'Turbulence intensity: light = slight erratic changes; moderate = larger changes in altitude/attitude but control retained; severe = abrupt large changes, momentary loss of control, large airspeed variation, structural damage possible; extreme = aircraft impossible to control, damage likely. Severe or extreme turbulence warrants an immediate level change and an AIREP.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'Rime ice forms when:',
  options: [
    'Large supercooled water droplets freeze slowly on contact, spreading rearward to form clear glaze ice',
    'Small supercooled droplets freeze quickly on contact, trapping air to form rough, opaque, white ice',
    'Ice crystals at high altitude accumulate on the windscreen and the leading edges in cloud',
    'Rain falls through a sub-zero layer and freezes on the airframe as freezing rain'
  ],
  correct: 1,
  explanation: 'Rime ice: forms from small supercooled droplets (fog, light cloud) that freeze quickly, trapping air. Result: rough, white, brittle, opaque ice. Encountered mainly in stratiform cloud. Less aerodynamically damaging than clear ice but can still significantly disrupt airflow. Typically less severe than clear ice for the same exposure time. Typically encountered in stratiform cloud.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'Frost on the wing surfaces before an IFR departure:',
  options: [
    'Improves lift slightly by smoothing the upper wing surface for the take-off roll',
    'May be left in place if it is less than about 5 mm thick',
    'Affects the aircraft only once it is airborne and in cloud',
    'Must be removed before flight, as even a thin layer disrupts airflow over the wing'
  ],
  correct: 3,
  explanation: 'Even a thin layer of frost roughens the wing and disrupts the boundary layer, reducing lift and raising the stall speed, so it must be removed before flight. This is the clean-aircraft principle.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'Mixed ice forms when:',
  options: [
    'Rime and clear ice forming together where large and small supercooled droplets coexist',
    'Snow and rain freeze together on the airframe surfaces',
    'Ice formed high at altitude mixes with water that has formed at the lower levels below',
    'Ground frost combines with airframe ice accreted in flight'
  ],
  correct: 0,
  explanation: 'Mixed ice forms where rime and clear-ice conditions coexist, with both large and small supercooled droplets present. The deposit is rough and hard, combining the poor aerodynamics of rime with the hardness and spread of clear ice, and is common in layer cloud around the freezing level.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'Forecast turbulence probability is highest along routes that:',
  options: [
    'Track generally east-west across the Australian continent, regardless of the cruising altitude flown',
    'Cruise above FL250 in clear air, well away from any cloud or frontal activity',
    'Route entirely over water, avoiding any overflight of land for the whole journey',
    'Cross the jet stream, traverse mountain ranges, pass near frontal systems, or enter forecast CB activity'
  ],
  correct: 3,
  explanation: 'Turbulence is most likely where a route crosses or nears the jet stream (CAT), traverses mountains (mountain wave and rotor), passes through frontal zones (shear and embedded CB) or enters forecast CB areas. Route and level selection can materially reduce exposure.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.5'
},

{
  question: 'If destination weather deteriorates below approach minima after departure, the pilot should:',
  options: [
    'Divert immediately to the nominated alternate without making any further fuel, weather or terrain assessment first',
    'Declare a fuel emergency and land at the nearest aerodrome regardless',
    'Check the alternate is still above minima, then recompute fuel for the approach, missed approach, alternate and reserve',
    'Continue regardless, since an IFR pilot must always attempt the destination approach first'
  ],
  correct: 2,
  explanation: 'On deteriorating destination weather: confirm the alternate remains above its minima; recompute fuel so the remaining fuel covers a destination approach, a missed approach, diversion to the alternate and final reserve; and if the margin is marginal, make the diversion decision early. The point at which minimum diversion fuel is reached must be anticipated and acted on.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.4 / AIP ENR 1.1'
},

{
  question: 'The effect of moderate-to-severe turbulence on IFR fuel burn is that it:',
  options: [
    'Reduces fuel burn overall, because the added airframe drag slows the aircraft down',
    'Has no effect, provided the airspeed is held constant',
    'Increases fuel burn through higher power settings, altitude deviations and speed changes',
    'Affects fuel burn only in propeller-driven aircraft'
  ],
  correct: 2,
  explanation: 'Turbulence raises fuel burn: higher power may be needed to hold speed in downdraughts, altitude deviations force non-optimum cruise levels, and weather avoidance adds track miles and possible holding. Convective-weather planning should include turbulence contingency fuel, especially where alternates are distant.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'Ground frost on the aircraft before an IFR departure:',
  options: [
    'Only affects aerodynamics if it is more than 1 cm thick',
    'Is irrelevant on the fuselage; only leading-edge frost matters',
    'Will be cleared by the anti-icing system automatically during the take-off roll itself',
    'Must be fully removed from the lifting surfaces before take-off, as light frost still cuts lift'
  ],
  correct: 3,
  explanation: 'Under the clean-aircraft principle, all frost, snow or ice must be removed from lifting surfaces before flight. A thin layer of frost, rough like coarse sandpaper, can cut maximum lift coefficient by around 30%, raise the stall speed and impair rotation. Many light-aircraft anti-icing systems will not remove ground frost, so de-icing fluid must be applied in freezing conditions.',
  reference: 'Part 91 MOS / AIP ENR 1.1 — clean aircraft'
},

{
  question: 'A SIGMET issued for "SEV ICE (FZRA)" means:',
  options: [
    'Severe icing from frost and rain, indicating ground icing conditions present at the aerodrome only',
    'Freezing rain associated with a severe weather system somewhere within the forecast area',
    'FZRA indicates freezing temperatures occurring in rain-shadow areas to the lee of terrain',
    'Severe icing from freezing rain in the area, the most hazardous icing type involving supercooled large droplets'
  ],
  correct: 3,
  explanation: 'SEV ICE (FZRA) = Severe Icing due to Freezing Rain. Freezing rain produces supercooled large droplets (SLD) — the most hazardous icing type. Ice accretion rates can be extremely rapid, exceeding the capacity of any ice protection system. Freezing rain typically occurs when warm rain falls through a sub-zero layer. Avoidance is the only safe strategy.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.4'
},

{
  question: 'To obtain weather updates in flight on an IFR route, the pilot should use:',
  options: [
    'Only the pre-flight forecast, since in-flight weather updates are not required under the IFR',
    'VOLMET, ATC or Flightwatch, onboard weather radar, AIREPs from other aircraft, and ATIS near the destination',
    'Only the onboard weather radar, disregarding ATIS, VOLMET and every other source',
    'No updates, unless an emergency arises in flight'
  ],
  correct: 1,
  explanation: 'In-flight weather sources include VOLMET (continuous METAR/TAF broadcast), ATC or Flightwatch for updated information, onboard weather radar for precipitation and CB, AIREPs from other aircraft, and destination ATIS once in range. Updating proactively allows timely diversion decisions.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.6'
},

{
  question: 'The turbulence penetration speed (VB) is used in severe turbulence because it:',
  options: [
    'Maximises airspeed so the aircraft transits the turbulent area in the shortest possible time, minimising exposure',
    'Is identical to the normal operating limit speed Vno for every aircraft type',
    'Increases the available control authority for manoeuvring while flying in turbulence',
    'Minimises gust loads while keeping positive control, below the speed where full inputs could overstress the airframe'
  ],
  correct: 3,
  explanation: 'VB is the recommended speed for severe turbulence or extreme gusts. Too fast and gust loads may overstress the structure; too slow and stall or loss of control results. At or below VB the structure can absorb the maximum design gust load. VB usually lies between Vno and Vne and is published in the AFM.',
  reference: 'AIP ENR 1.1 / Aircraft Flight Manual'
},

{
  question: 'Mountain-wave turbulence is most severe in the:',
  options: [
    'The wave-crest region marked by lenticular cloud, lying well above the level of the mountain tops',
    'The rotor zone below crest level on the lee side of the range',
    'The windward side of the range, where the air is forced to rise, at every level',
    'In the stable air above the tropopause, well clear of the terrain below'
  ],
  correct: 1,
  explanation: 'The rotor, a rotating mass of air below crest level on the lee side, holds the most violent turbulence in a wave system and can reach extreme intensity. Lenticular cloud marks the wave crests and roll or fractus cloud marks the rotor. IFR aircraft should cross ranges well above the rotor zone in wave conditions.',
  reference: 'Part 61 MOS Sch 3 IREX 3.1.1'
},

{
  question: 'A Non-Directional Beacon (NDB) transmits:',
  options: [
    'Directional signals transmitted along 360 separate radials outward from the station',
    'An omnidirectional LF/MF signal, from which the aircraft\'s ADF derives the bearing',
    'A narrow directional beam similar to a VOR, but broadcast on the lower LF/MF frequencies instead',
    'Usable signals only on its published frequency during the hours of daylight'
  ],
  correct: 1,
  explanation: 'An NDB radiates a non-directional LF/MF signal (about 190-1750 kHz). The aircraft\'s ADF detects the direction the signal arrives from and shows it as a relative bearing. Unlike a VOR, the NDB carries no directional information; the receiver determines the bearing.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: '"Coastal refraction" affecting NDB signals occurs because:',
  options: [
    'NDB signals travel faster over sea than land, when signals cross a coastline at an angle, they are refracted',
    'Sea water absorbs NDB signals strongly, reducing the usable range out over the ocean',
    'Coastal fog reflects the NDB signal back, causing several conflicting bearing indications at once',
    'Coastal refraction affects only VHF signals such as VOR, and not LF/MF NDB signals'
  ],
  correct: 0,
  explanation: 'Coastal refraction: LF/MF signals propagate at different velocities over sea versus land. When the signal path crosses a coast at an angle (not perpendicular), the wave front is refracted. The error is greatest when the signal crosses the coast at a shallow angle and when the station is over land or sea while the aircraft is on the opposite medium. Errors can be several degrees — significant for NDB approaches.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.2'
},

{
  question: 'The effect of thunderstorms on NDB navigation is that:',
  options: [
    'The ADF needle is deflected toward the lightning discharge, whose static lies in the same band as the NDB',
    'There is no effect, since the NDB is a robust ground-based navigation system',
    'NDB bearing indications are affected only during the hours of darkness, and not by any daytime storms',
    'NDB range is reduced by storms, but the bearing accuracy itself is never affected'
  ],
  correct: 0,
  explanation: 'Lightning radiates electromagnetic energy in the LF/MF band, the same band as the NDB, so the ADF cannot distinguish the two and the needle oscillates or points toward the storm rather than the beacon. This is a serious consideration for NDB approaches in convective weather.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'Loss of NDB signal integrity is indicated by:',
  options: [
    'The ADF needle settling steadily and firmly onto a single fixed bearing',
    'The ADF frequency display going completely blank, with no bearing or ident shown',
    'The ADF needle rotating, oscillating or pointing erratically, with an OFF flag if fitted',
    'The NDB ident tone stopping, with no other indication available'
  ],
  correct: 2,
  explanation: 'The primary sign is an erratic, rotating or oscillating ADF needle giving no reliable indication; some equipment also has a warning flag. The NDB ident (Morse) should be continuously audible, so loss of the ident also signals loss of signal or a station off the air.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'ADF/NDB turning errors occur because:',
  options: [
    'The ADF antenna itself physically rotates with the aircraft, altering the indicated bearing',
    'Relative bearing is measured from the nose, so a turn changes it without the aircraft moving',
    'The NDB signal strength varies with the aircraft\'s bank angle',
    'Turning errors arise only with NDB stations transmitting below 200 kHz'
  ],
  correct: 1,
  explanation: 'Relative bearing is measured from the aircraft\'s nose (heading). When the heading changes in a turn, the relative bearing changes even though the aircraft has not moved relative to the beacon. Convert with magnetic bearing to station = magnetic heading + relative bearing, recomputing after each heading change.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'NDB station passage is indicated by:',
  options: [
    'The ADF needle pointing steadily to 180 degrees, directly off the tail of the aircraft',
    'A steady 000-degree indication held for about 30 seconds',
    'Rapid swinging or oscillation of the ADF needle as the aircraft passes over or abeam the station',
    'The DME distance reading falling to exactly zero'
  ],
  correct: 2,
  explanation: 'As the aircraft crosses the NDB the bearing changes very rapidly and the ADF needle swings erratically; the moment of maximum oscillation marks station passage. After passing, the needle settles toward the tail position (180 degrees relative if directly overhead).',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'To fly to an NDB with 20° right drift correction applied, the aircraft heading is 090° and the ADF needle reads 340°. The aircraft is:',
  options: [
    'Right of the desired track',
    'Left of the desired track',
    'The ADF reading confirms the correct track',
    'On the desired track to the NDB with 20° WCA applied'
  ],
  correct: 3,
  explanation: 'MB to station = MH + RB = 090 + 340 = 430 − 360 = 070°M. If the desired track to the NDB is 070° and the heading is 090° (20° right correction for wind from the right), this is correct. The relative bearing of 340° means the NDB is 20° to the left of the nose — consistent with flying a heading 20° to the right of track to correct for drift.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'Given heading 180°M and ADF relative bearing 270°, the magnetic bearing to the NDB is:',
  options: [
    '090°M',
    '270°M',
    '450°M (090°M)',
    '180°M'
  ],
  correct: 2,
  explanation: 'MB to station = MH + RB = 180 + 270 = 450 − 360 = 090°M. The NDB bears 090°M from the aircraft (due east). The aircraft is due west of the station. The ADF needle pointing 270° (left of nose) while heading south confirms the station is due east.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'The VOR (VHF Omnidirectional Range) operates in the frequency band:',
  options: [
    'VHF 108.0–117.95 MHz',
    'LF/MF 190–1750 kHz',
    'UHF 960–1215 MHz',
    'HF 3–30 MHz'
  ],
  correct: 0,
  explanation: 'VOR operates in the VHF band: 108.0–117.95 MHz. This band is shared with ILS (108.0–111.95 MHz). Frequencies ending in odd tenths (108.1, 108.3, etc.) are ILS; even tenths (108.2, 108.4, etc.) are VOR in the 108–112 MHz range. Above 112 MHz, all are VOR. VHF propagation is line-of-sight — range depends on aircraft altitude.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4 / AIP ENR'
},

{
  question: '"Scalloping" of the VOR CDI is:',
  options: [
    'A steady CDI deflection to one side that indicates the aircraft is off course',
    'The automatic CDI centring sequence that occurs during a VOR instrument approach',
    'A rapid side-to-side oscillation of the CDI needle caused by multipath signal interference',
    'A normal feature of VOR operation that requires no correction by the pilot'
  ],
  correct: 2,
  explanation: 'VOR scalloping: rapid oscillation of the CDI caused by multipath interference (signals reflecting off terrain or structures), close proximity to the VOR (cone of confusion overhead), or signal propagation issues. Scalloping makes the VOR unreliable for navigation. It is most common in mountainous terrain and very close to the station. The aircraft should deviate or use an alternate navaid.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4'
},

{
  question: 'Loss of VOR signal integrity is indicated by:',
  options: [
    'A red OFF warning flag on the VOR indicator',
    'The CDI needle deflecting smoothly across to full scale and then staying there',
    'The receiver\'s frequency display going blank',
    'The associated DME disconnecting from the receiver'
  ],
  correct: 0,
  explanation: 'When the received VOR signal falls below usable strength, or the 30 Hz reference is lost, a red OFF flag appears on the CDI/RMI and the indication must not be used, including for an approach. The flag can also appear momentarily overhead in the cone of confusion.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.4'
},

{
  question: 'VOR station passage is indicated by:',
  options: [
    'Rapid CDI reversal and possible OFF flag',
    'The DME reading zero',
    'The CDI centering permanently',
    'A verbal station identification tone'
  ],
  correct: 0,
  explanation: 'VOR station passage (cone of confusion): directly overhead the VOR, the reference signal becomes unreliable. The CDI may deflect rapidly and the TO/FROM indicator reverses. An OFF flag may briefly appear. This is the VOR station passage indication — after crossing, the TO indicator changes to FROM. The cone of confusion radius depends on aircraft altitude (approximately equal to altitude above the station). As the aircraft passes overhead, the TO/FROM indicator flips and the CDI deflects.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.4'
},

{
  question: 'When flying FROM a VOR on the 090° radial (heading approximately 090°), the OBS should be set to:',
  options: [
    '270° with a FROM indication',
    '090° with a FROM indication',
    '090° with a TO indication',
    '270° with a TO indication'
  ],
  correct: 1,
  explanation: 'Flying outbound on the 090° radial (FROM the station heading east): set OBS to 090°. The indicator shows FROM — confirming you are tracking on the 090° radial away from the station. If the aircraft drifts north of the radial, the CDI deflects left (fly left). If drifting south, CDI deflects right (fly right). This gives correct command sense for FROM tracking.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.6'
},

{
  question: 'When tracking TO a VOR on the 270° radial (heading approximately 090°), the OBS should be set to:',
  options: [
    '090 degrees with a FROM indication',
    '270 degrees with a TO indication',
    '090 degrees with a TO indication',
    '270 degrees with a FROM indication'
  ],
  correct: 2,
  explanation: 'To track inbound to the station along the 270 radial, the inbound course is 090 (the reciprocal of the radial). Setting OBS 090 gives a TO indication with normal CDI sensing, so the pilot flies toward the needle. Setting OBS 270 would show FROM with reversed sensing.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.6'
},

{
  question: 'An aircraft is at heading 045° with the VOR OBS set to 180° and showing a TO indication with CDI deflected 2 dots right. The aircraft is:',
  options: [
    'Right of the 180° inbound track, fly left to intercept',
    'Left of the 180° inbound track, fly right to intercept',
    'On the 180° track, the deflection is within tolerance',
    'The CDI is in reverse sensing, the aircraft cannot determine position'
  ],
  correct: 1,
  explanation: 'OBS 180° with TO selected and heading 045°: this is an intercept situation, not tracking. The CDI is deflected right with a TO flag. With a TO selection, CDI right = fly right (toward the 180° inbound track). The aircraft is currently left of the 180° inbound course. The 045° heading is an intercept heading — turn right to intercept the 180° inbound track.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.5'
},

{
  question: 'DME slant-range error is most significant when:',
  options: [
    'The aircraft is at long slant range from the station, flying low down near the horizon',
    'The aircraft is close to the station and at altitude',
    'The aircraft is at high altitude tracking across the country',
    'Never, since slant-range error is constant regardless of position'
  ],
  correct: 1,
  explanation: 'DME measures the straight-line (slant) distance to the ground station, not ground distance. Directly overhead it reads approximately the aircraft\'s height in nm rather than zero (about 1.6 nm at 10,000 ft). At range the error is negligible (30 nm ground at 10,000 ft is about 30.04 nm slant).',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.9'
},

{
  question: 'When not tracking directly to or from a DME station, the DME reading:',
  options: [
    'Does not change at groundspeed, since the rate depends on the angle between track and the bearing',
    'Is always accurate to groundspeed, since DME reads slant range regardless of the track flown',
    'Must be corrected for magnetic variation before use',
    'Becomes unusable and cannot support navigation'
  ],
  correct: 0,
  explanation: 'DME distance changes most slowly when tracking at 90 degrees to the bearing and at the full rate only when tracking directly to or from the station. This matters for position fixing: DME arcs remain valid, but groundspeed checks from DME rate are only meaningful on direct tracks.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.9'
},

{
  question: 'The ILS (Instrument Landing System) components are:',
  options: [
    'Localiser for lateral guidance, glideslope for vertical guidance, and marker beacons for distance',
    'Localiser, glideslope, and a GNSS overlay that provides the distance information',
    'A VOR, a co-located DME, and the runway approach lighting system',
    'Localiser and glideslope only, with the marker beacons being optional extras'
  ],
  correct: 0,
  explanation: 'ILS components: (1) Localiser (LOC) — VHF 108–112 MHz, provides lateral guidance aligned with runway centreline, ±2.5° full-scale deflection; (2) Glideslope (GP) — UHF, provides vertical guidance typically at 3°, ±0.7° full-scale; (3) Marker beacons — OM (outer marker, 4–7 nm), MM (middle marker, ~0.5 nm), IM (inner marker, close to threshold) providing distance fixes. Some systems replace markers with DME. Typically inner, middle, and outer markers.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'Glideslope fluctuations on an ILS approach may be caused by:',
  options: [
    'The aircraft flying faster than the recommended final approach speed on the procedure',
    'Nothing, since glideslope fluctuations are entirely normal',
    'Multipath interference from vehicles, buildings or terrain reflecting the signal near the antenna',
    'Strong crosswinds acting on the airframe during the approach'
  ],
  correct: 2,
  explanation: 'Glideslope fluctuations are typically multipath effects from terrain, buildings or large vehicles near the antenna (why ILS-sensitive holding points exist), and heavy rain can cause minor effects. Significant or sudden fluctuations should prompt reversion to a non-precision approach or a missed approach.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.10'
},

{
  question: 'On the back course of a localiser, the CDI:',
  options: [
    'Indicates the aircraft is correctly established on the localiser back beam',
    'Shows the aircraft has overshot the localiser and is re-intercepting from the other side',
    'Fails because the VOR receiver has dropped out during the ILS approach',
    'Reversed, so a right needle deflection requires a correction to the left'
  ],
  correct: 3,
  explanation: 'A localiser radiates a usable signal on its back course (the reciprocal direction). Flown inbound on the back course with normal navigation, the CDI sensing is reversed: a right deflection means correct to the left. Back-course tracking therefore requires deliberate awareness of the reversed sense.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.10'
},

{
  question: 'The outer marker on an ILS approach provides:',
  options: [
    'The final approach fix, at which the glideslope intercept normally occurs',
    'A position fix approximately 4–7 nm from the threshold, typically where the glideslope is intercepted',
    'The missed approach point for the instrument approach procedure',
    'Confirmation that the aircraft is correctly established on the localiser centreline inbound'
  ],
  correct: 1,
  explanation: 'Outer Marker (OM): located approximately 4–7 nm from threshold, coinciding with the point where the glideslope is intercepted at the initial descent altitude. OM audio: continuous low-pitched dashes (-- --). Marker light: blue. Middle Marker (MM): ~0.5 nm from threshold at DA height, audio: alternating dot-dash (·-·-), light: amber. Inner Marker: close to threshold (Cat II/III), audio: rapid dots (····), light: white.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The ILS glideslope is typically set at:',
  options: [
    '2.5°',
    '3.5°',
    '4.0°',
    '3.0°'
  ],
  correct: 3,
  explanation: 'Standard ILS glideslope angle is 3.0° — equating to approximately 318 ft/nm descent rate. At typical approach speed of 130 kt, this is ~800 ft/min. Steeper glideslopes (3.5°–5.5°) are published where terrain or obstacles require. The 3° glideslope corresponds well to normal approach technique and VASl/PAPI indications.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10 / AIP ENR 1.5'
},

{
  question: 'The rated coverage of a VOR must be checked before use because:',
  options: [
    'VOR coverage is effectively identical at every location throughout Australian airspace',
    'VOR coverage is fully reliable by day, but it changes and noticeably degrades only during the hours of darkness',
    'Usability varies with altitude and distance, so the rated coverage sets the minimum altitude and maximum range',
    'Coverage ratings are published for the ILS only and have no application to the VOR'
  ],
  correct: 2,
  explanation: 'Each VOR has a published service volume, the altitude/range combinations within which the signal is reliable. Below the minimum altitude or beyond the maximum range the signal may be unreliable even without an OFF flag. AIP lists the rated coverage; confirm the VOR is within it for the intended use.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.1'
},

{
  question: 'A "DME arc" procedure requires the pilot to:',
  options: [
    'Fly a straight course while maintaining a constant DME distance from the station',
    'Increase the DME distance steadily during the descent on final',
    'A DME arc procedure is only used within a radar surveillance environment',
    'Maintain a constant slant range from the DME station, the aircraft tracks a curved path'
  ],
  correct: 3,
  explanation: 'DME arc: the aircraft maintains a constant DME distance from the station while flying a curved path. Lead radials are published to help anticipate the turn to final. Technique: fly the heading that keeps DME constant — if DME is increasing, turn toward the station; if decreasing, turn away. DME arcs are used as approach transition routes, connecting the en-route structure to the final approach course.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.9 / AIP ENR 1.5'
},

{
  question: 'Compared with VHF aids such as the VOR, the LF/MF NDB is additionally susceptible to:',
  options: [
    'Altitude errors, because LF/MF signals behave differently with increasing height',
    'Precipitation static interference, and no other additional propagation error',
    'Nothing extra, since the VOR and the NDB are affected equally by every propagation error',
    'The night effect, where after dark sky waves from distant stations interfere with the ground wave'
  ],
  correct: 3,
  explanation: 'At night the ionosphere reflects LF/MF sky waves back to earth from distant stations; these interfere with the local ground wave and make the ADF needle oscillate and read in error, worst around dawn and dusk. VHF VOR signals pass through the ionosphere and are unaffected, so NDB reliability falls at night.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'Heading 360 M, VOR OBS 180, CDI 2 dots left with a FROM indication. The aircraft is:',
  options: [
    'West of the 180-degree radial from the station',
    'East of the 180-degree radial from the station',
    'Established on the 182-degree radial from the station',
    'In reverse sensing, so the OBS must be reset to the aircraft heading'
  ],
  correct: 0,
  explanation: 'Orient to the OBS setting of 180 (facing south). With FROM, the CDI needle points toward the selected radial: a left needle puts the 180 radial to the east, so the aircraft lies to the west of it. Heading 360 with OBS 180 gives reversed steering sensing, but position is found geometrically: the aircraft is west of the 180 radial.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.5'
},

{
  question: 'To determine when the aircraft is abeam a VOR, the pilot should:',
  options: [
    'Look out of the cockpit window to sight the VOR ground aerial below',
    'Wait until the DME happens to read the expected abeam distance',
    'Accept that the VOR cannot indicate when the aircraft is abeam the station',
    'Set the OBS to 090 or 270, then the CDI centres with FROM when the aircraft is abeam the station'
  ],
  correct: 3,
  explanation: 'Setting the OBS to 090 (VOR to the right) or 270 (VOR to the left) and waiting for the CDI to centre with a FROM indication shows the aircraft is on that radial, i.e. directly abeam the station. The technique is used for timing checks, fixes and procedure-turn points.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.8'
},

{
  question: 'NDB pilot navigation tolerance for IFR operations is:',
  options: [
    '±2°',
    '±5°',
    '±10°',
    '±1° per nm from the station'
  ],
  correct: 1,
  explanation: 'NDB pilot navigation tolerance: ±5° of the required bearing. This is the acceptable deviation before corrective action is required. At 60 nm from an NDB, 5° equals approximately 5 nm off course — consistent with the 1-in-60 rule. Instrument approach procedures using NDB are designed with tolerances accounting for this navigation accuracy.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.4.7 / AIP ENR'
},

{
  question: 'The ILS localiser full-scale CDI deflection represents:',
  options: [
    '2° from centreline',
    '5° from centreline',
    '10° from centreline',
    '2.5° from centreline'
  ],
  correct: 3,
  explanation: 'ILS localiser: full-scale CDI deflection = ±2.5° from centreline at the runway threshold (the course width is designed to equal 350 ft each side at threshold). Each dot on the CDI represents approximately 1.25°. Compare with VOR where full-scale = ±10°. The narrower localiser sensitivity provides more precise lateral guidance for the approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The ILS glideslope full-scale CDI deflection represents:',
  options: [
    '0.5° from the glidepath',
    '0.7° from the glidepath',
    '1.5° from the glidepath',
    '3° from the glidepath'
  ],
  correct: 1,
  explanation: 'ILS glideslope full-scale deflection = ±0.7° from the glidepath (above or below). Each dot represents approximately 0.35°. The tight glideslope sensitivity means even small angular deviations result in significant altitude errors at distance — at 10 nm from threshold, 0.7° error = approximately 700 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'The GNSS space segment consists of:',
  options: [
    'The network of ground control stations that continuously monitor and update satellite health',
    'The aircraft\'s own GNSS receiver together with its mounted antenna',
    'A constellation of satellites transmitting timing signals that receivers use to compute position',
    'The augmentation systems such as SBAS and GBAS that improve accuracy'
  ],
  correct: 2,
  explanation: 'The space segment is the satellite constellation (GPS: 24+ satellites, six planes, about 20,200 km, 12-hour orbits) broadcasting precise timing signals. The receiver measures each signal\'s travel time to derive a pseudo-range, and four or more pseudo-ranges yield a 3D fix.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.1'
},

{
  question: 'The GNSS control segment is responsible for:',
  options: [
    'Monitoring satellite health and orbits, uploading corrections, and managing the constellation',
    'Performing the aircraft\'s navigation calculations in flight',
    'Providing the augmentation signals that improve the positioning accuracy for the user',
    'Issuing RAIM availability predictions to pilots before flight'
  ],
  correct: 0,
  explanation: 'Ground monitoring stations track every satellite, check the orbit (ephemeris) and clock data, and upload corrections via the master control station. A healthy control segment is what keeps the broadcast positions accurate and reliable.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.1'
},

{
  question: 'The pseudo-random (C/A) code transmitted by GPS satellites allows the receiver to:',
  options: [
    'Encrypt the GPS signal so that only authorised military receivers are ever able to read it',
    'Identify which particular satellite in the constellation is transmitting',
    'Receive a fully computed position fix directly from the satellite itself',
    'Measure signal travel time by matching the received code against an identical internally generated one'
  ],
  correct: 3,
  explanation: 'The C/A code is a pseudo-random sequence unique to each satellite. The receiver generates the same code and slides it to match the received one; the time offset is the signal travel time, which multiplied by the speed of light gives the pseudo-range. Four pseudo-ranges give a 3D position.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.1'
},

{
  question: 'RAIM (Receiver Autonomous Integrity Monitoring) in a GNSS receiver:',
  options: [
    'Monitors the integrity of the GNSS position fix by using redundant satellites',
    'Increases the accuracy of the GNSS fix by making use of additional satellites',
    'Provides backup navigation if GNSS fails',
    'RAIM is only available in military GPS receivers'
  ],
  correct: 0,
  explanation: 'RAIM: an algorithm within the GNSS receiver that uses redundant satellite measurements to detect when one satellite is providing erroneous data. Fault Detection (FD) requires 5 satellites; Fault Detection and Exclusion (FDE) requires 6 satellites. If RAIM cannot guarantee the required navigation accuracy, it alerts the pilot. No RAIM = navigation accuracy is unknown — do not use for IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1 / 5.2.4'
},

{
  question: 'GNSS uses the WGS-84 coordinate system because it:',
  options: [
    'It is a single Earth-centred datum used by all GNSS satellites and receivers',
    'Is the Australian national survey datum on which all local aeronautical charts and procedures are based',
    'Is a more accurate coordinate system than any of the alternatives available',
    'Is mandated by ICAO specifically and only for the production of navigation charts'
  ],
  correct: 0,
  explanation: 'WGS-84 is the global reference frame for GNSS: it defines the Earth ellipsoid and the coordinate datum in which positions are computed and charted. Using one common datum removes the datum-shift errors that would arise from mixing reference systems; Australian charts are published in WGS-84.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.1'
},

{
  question: 'PDOP (Position Dilution of Precision) affects GNSS navigation by:',
  options: [
    'Reducing the number of satellites available',
    'PDOP affects the speed and altitude readout, but not the horizontal position',
    'Describing the geometric arrangement of visible satellites, poor satellite geometry',
    'PDOP is only relevant for military GPS applications'
  ],
  correct: 2,
  explanation: 'PDOP (Position Dilution of Precision): measures satellite geometry quality. Satellites bunched together give poor geometry (high PDOP, worse accuracy); satellites spread across the sky give good geometry (low PDOP, better accuracy). PDOP multiplies the ranging errors — HDOP × range error = horizontal accuracy. PDOP below 4 is required for most IFR operations. RAIM prediction tools check PDOP to predict approach availability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.1'
},

{
  question: 'The four navigation performance requirements for GNSS are:',
  options: [
    'Speed, accuracy, reliability, and range',
    'Accuracy, integrity, availability, and continuity of service',
    'Position, velocity, time, and attitude',
    'Horizontal, vertical, approach, and oceanic performance'
  ],
  correct: 1,
  explanation: 'GNSS navigation performance requirements: Accuracy (position error within stated limits); Integrity (ability to provide timely warnings of unacceptable accuracy); Availability (probability system is usable at required accuracy and integrity when needed); Continuity (probability operation will be uninterrupted during approach). All four must be met for IFR operations. RAIM primarily addresses integrity.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'GNSS integrity for IFR operations is provided by:',
  options: [
    'Periodic government checks of overall satellite accuracy',
    'The ATC radar system cross-checking the GNSS position',
    'Nothing extra is needed, since the integrity is inherent in the GPS signal itself',
    'RAIM on board, SBAS/ABAS augmentation, and procedural cross-checking with other navaids'
  ],
  correct: 3,
  explanation: 'Integrity is the timely warning of unusable accuracy. It is delivered by RAIM (a receiver algorithm using redundant satellites, with FDE to exclude a faulty one), by augmentation such as SBAS/ABAS, and by procedural cross-checks against other aids. An approach requires RAIM (with FDE or SBAS) to be available.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.2'
},

{
  question: 'Errors that degrade GNSS accuracy include:',
  options: [
    'Magnetic variation and compass deviation only, with no satellite-based errors involved',
    'Ephemeris and satellite-clock errors, ionospheric and tropospheric delay, multipath, and receiver noise',
    'Only ionospheric error, with all others removed by the control segment',
    'None of significance, since GNSS is accurate to one metre at all times'
  ],
  correct: 1,
  explanation: 'GNSS error sources include satellite orbit (ephemeris) and clock errors, signal delay through the ionosphere and troposphere, multipath from reflective surfaces, and receiver noise. Augmentation such as SBAS corrects mainly the satellite and atmospheric components, bringing total error to a few metres. (Selective Availability, a former deliberate degradation, is no longer applied.)',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.3'
},

{
  question: 'GNSS multipath error is caused by:',
  options: [
    'The signal reaching the antenna via reflections off terrain, buildings or the aircraft structure',
    'Several satellites transmitting on exactly the same frequency',
    'Several aircraft inadvertently sharing the same GNSS frequency at exactly the same time',
    'Interference radiated by the aircraft\'s own onboard electronics'
  ],
  correct: 0,
  explanation: 'A reflected signal travels a longer path and arrives slightly after the direct one; the receiver cannot separate them and the extra delay corrupts the pseudo-range. Multipath is worst near buildings, on the ground and in mountainous terrain, and is reduced by good antenna placement.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.3'
},

{
  question: 'When GNSS displays a "RAIM not available" warning during approach, the pilot must:',
  options: [
    'Continue the approach as planned, since RAIM warnings are advisory information only',
    'Switch to the backup GNSS receiver and continue the approach normally',
    'Not use GNSS for the approach, execute a missed approach or use an alternate navaid if available',
    'Contact ATC and request a GNSS integrity verification before continuing'
  ],
  correct: 2,
  explanation: 'RAIM not available: if RAIM is not available before the FAF, the approach must not be commenced using GNSS. If RAIM fails during the approach, execute a missed approach immediately. RAIM unavailability means the receiver cannot detect a satellite failure or signal degradation — the position may be significantly in error without any warning. Non-GNSS approaches or diversion are the alternatives.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'The GNSS receiver indication "2D navigation" means:',
  options: [
    'Only 3 satellites are being tracked, altitude cannot be independently determined',
    'The system is providing 2-dimensional position accuracy',
    'The display is showing a 2D map view',
    '2D navigation is the normal operating mode for all GNSS receivers in use'
  ],
  correct: 0,
  explanation: '2D navigation mode: when fewer than 4 satellites are visible for independent 3D position fixing, the receiver may use barometric altitude input to maintain navigation — this is "baro-aiding." In 2D mode, the vertical position is derived from the altimeter rather than calculated from GNSS. RAIM function may be degraded. Many IFR approach certifications require 3D navigation mode.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'Dead-reckoning (DR) mode in a GNSS receiver is entered when:',
  options: [
    'The pilot deliberately selects this mode to obtain improved navigation accuracy along the planned route',
    'The loaded navigation database has passed its 28-day expiry date during the flight',
    'Too few satellites are available, so the receiver estimates position from the last fix, heading and speed',
    'It runs continuously in the background at all times as an automatic position backup'
  ],
  correct: 2,
  explanation: 'DR mode is entered automatically when too few satellites are available for a RAIM-supported fix. The receiver propagates the last valid position using heading and speed, and accuracy decays quickly, so DR must not be used for IFR. The unit should display DR status and elapsed time.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.5'
},

{
  question: 'A GNSS \'database out of date\' indication in flight means:',
  options: [
    'The receiver can no longer navigate and so automatically suspends every one of its navigation functions',
    'The live satellite signal being received has degraded below a usable strength',
    'Simply that a current database must be loaded before commencing any IFR flight',
    'The navigation database has expired, so stored procedures must not be used though manual coordinates remain available'
  ],
  correct: 3,
  explanation: 'The navigation database is updated each 28-day AIRAC cycle. An expired database may hold outdated procedure or waypoint data: navigate by manually entered coordinates if necessary, do not use stored approaches without cross-checking current charts, and prefer an alternate aid. A current database is required for IFR.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.5'
},

{
  question: 'The baro-aiding function in a GNSS receiver:',
  options: [
    'Provides a backup barometric altitude display in the event that the altimeter fails',
    'Corrects GPS altitude for temperature error',
    'Uses the aircraft barometric altimeter input to supplement GNSS satellite geometry',
    'Baro-aiding is only used in helicopter GNSS systems'
  ],
  correct: 2,
  explanation: 'Baro-aiding: connects the aircraft barometric altimeter to the GNSS receiver, providing altitude data equivalent to an additional "satellite." This improves RAIM availability (reduces minimum satellite requirement from 5 to 4 for FD) and allows approach operations with one fewer satellite. Failure of baro-aiding increases the minimum satellite requirement for RAIM and may reduce approach availability.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.8'
},

{
  question: 'GNSS CDI sensitivity changes through an approach because:',
  options: [
    'The GPS signal grows progressively stronger as the runway is approached on final',
    'Sensitivity is fixed permanently by the aircraft or avionics manufacturer',
    'Scaling changes happen only on GNSS approaches, and never on any VOR or NDB approach',
    'The scaling tightens from plus/minus 5 nm en-route to plus/minus 1 nm terminal to plus/minus 0.3 nm on final'
  ],
  correct: 3,
  explanation: 'The receiver automatically rescales the CDI by segment: about plus/minus 5 nm en-route, plus/minus 1 nm in the terminal/intermediate area, and plus/minus 0.3 nm (or angular for LPV) on final, with waypoint sequencing. If the CDI does not rescale as expected, the approach must be abandoned.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.6'
},

{
  question: 'RAIM availability for a planned GNSS approach must be checked:',
  options: [
    'Only in the very final moments immediately before the approach is commenced on final approach',
    'Never, because RAIM is continuously available and needs no advance checking',
    'In pre-flight planning, using a RAIM prediction service for the ETA at destination and including satellite NOTAMs',
    'By air traffic control, who check RAIM availability and pass it to the pilot'
  ],
  correct: 2,
  explanation: 'RAIM availability depends on satellite geometry at the time and place, so it is predicted pre-flight (e.g. NAIPS RAIM prediction) for the planned ETA, with current satellite outage NOTAMs included. If RAIM is predicted unavailable, an alternate aid or destination must be planned.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.4'
},

{
  question: 'GNSS requirements for an RNP instrument approach include:',
  options: [
    'A basic non-certified GPS receiver is quite sufficient, provided only that its database is kept current',
    'A GNSS unit fitted with a moving-map display but no further IFR capability',
    'A certified IFR GNSS receiver with RAIM or SBAS, a current database, and the approach loaded from that database',
    'Any GPS receiver, so long as it offers some form of approach-capability mode'
  ],
  correct: 2,
  explanation: 'An RNP approach requires an IFR-approach-certified receiver (e.g. TSO-C129a/C196 for LNAV, C145/C146 for SBAS LPV), a current navigation database, the approach selected from the database (not hand-entered), verified RAIM/SBAS integrity, and automatic approach-mode arming and CDI scaling. Non-approved GPS may not be used as the primary means.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.4'
},

{
  question: 'During a GNSS approach, an immediate missed approach is required on:',
  options: [
    'Any CDI deflection of more than one dot occurring at any single point on the approach',
    'A RAIM warning or unavailability, loss of approach mode, an integrity alert, or reaching minima without visual reference',
    'The GPS receiver display merely losing some of its screen brightness during the approach',
    'Nothing is required, because these GNSS approaches carry no defined missed-approach criteria'
  ],
  correct: 1,
  explanation: 'Go around immediately for: a RAIM warning or RAIM-not-available, failure of the CDI to enter/scale approach mode, any integrity alert, reaching the DA (LPV) or MAP (LNAV) without the required visual reference, doubt over position accuracy, or an ATC instruction.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.7'
},

{
  question: 'Satellite unserviceability affects RAIM prediction because:',
  options: [
    'Fewer operating satellites weakens the overall strength of the received GPS signal',
    'Changing the constellation can reduce RAIM availability at certain times',
    'An unserviceable satellite transmits faulty data that the receiver automatically ignores',
    'RAIM prediction cannot account for outages, so an alternate aid is required on every single flight'
  ],
  correct: 1,
  explanation: 'Taking a satellite out of the constellation changes the geometry and can open gaps in RAIM availability (often 30-90 minutes) at particular times and places. Satellite outage NOTAMs must therefore be fed into the RAIM prediction, especially for remote operations with few alternate aids.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.9'
},

{
  question: 'On an LNAV/VNAV approach flown with advisory vertical guidance, the operation:',
  options: [
    'The pilot has effectively converted the 2D approach into a full ILS-equivalent procedure',
    'Remains a 2D operation flown to an MDA, with the vertical guidance advisory only',
    'Lower minima now apply to the approach because vertical guidance is being provided',
    'The approach uses an actual ILS glideslope, with the GNSS supplying only the lateral course guidance instead'
  ],
  correct: 1,
  explanation: 'Advisory vertical guidance (from baro or SBAS) helps fly a stabilised path, but procedurally the approach is still 2D: an MDA applies (not a DA) and the procedural MAP is used. The advisory path must not be used to descend below the MDA. This differs from an LPV, which has true SBAS vertical guidance and a DA.',
  reference: 'Part 61 MOS Sch 3 IREX 5.3.1'
},

{
  question: 'The parallel offset function on a GNSS receiver during IFR operations:',
  options: [
    'Is commonly used to offset from controlled airspace',
    'May be used on any segment if cleared by ATC',
    'Must not be used during approach operations, since a parallel offset shifts the CDI off the published course',
    'Parallel offset is automatically disabled by certified IFR GPS receivers with appropriate ATC clearance obtained'
  ],
  correct: 2,
  explanation: 'Parallel offset on IFR approach: if parallel offset is active during an approach, the CDI is referenced to an offset track rather than the published approach course. The obstacle clearance is only guaranteed for the published course — a parallel offset moves the aircraft off the protected area. Pilots must ensure parallel offset is cancelled before commencing any instrument approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.5'
},

{
  question: 'The RAIM prediction inputs required for an IFR GNSS approach are:',
  options: [
    'Geographic position, the date and time of the planned approach, and any current satellite NOTAMs',
    'The aircraft\'s all-up weight and its planned approach airspeed on the day',
    'The local terrain height around the aerodrome and the magnetic variation that applies there',
    'The aircraft\'s avionics equipment type and the receiver manufacturer\'s name'
  ],
  correct: 0,
  explanation: 'RAIM availability depends on satellite geometry, so prediction needs the location (aerodrome lat/long), the date and time of the planned approach, and current satellite outage NOTAMs, together with the protection level for the approach type. Tools such as NAIPS accept these and return availability for the window.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.4'
},

{
  question: 'Automatic waypoint sequencing in a GNSS approach means:',
  options: [
    'The receiver automatically advances from one waypoint to the next as the aircraft reaches each point',
    'The pilot manually selects each successive waypoint in turn as it is reached on the approach',
    'Waypoints are sequenced only on an instruction passed by air traffic control',
    'Automatic sequencing is available only in glass-cockpit equipped aircraft'
  ],
  correct: 0,
  explanation: 'Automatic waypoint sequencing: when a GNSS approach is loaded from the database and the receiver is in approach mode, it automatically sequences through each waypoint (IAF → IF → FAF → MAP) as the aircraft passes them. Manual intervention is only required if the pilot needs to fly a holding pattern, discontinue the approach, or if the receiver fails to sequence. Failure of auto-sequencing requires the pilot to manually select the next waypoint or execute a missed approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.6'
},

{
  question: 'The GNSS receiver \'mask angle\' refers to:',
  options: [
    'Deliberately blocking GNSS signals to prevent their use for any military targeting purpose',
    'The receiver\'s process of selecting the best four satellites for the navigation solution',
    'A function that prevents the GNSS from operating inside restricted airspace areas',
    'The minimum elevation above the horizon at which satellites are used in the position solution'
  ],
  correct: 3,
  explanation: 'The mask angle is the lowest elevation above the horizon at which the receiver will use a satellite (typically 5-15 degrees). Low-elevation signals travel further through the atmosphere (more ionospheric/tropospheric delay) and pick up more terrain multipath. Raising the mask improves accuracy but reduces usable satellites, which can lower RAIM availability.',
  reference: 'Part 61 MOS Sch 3 IREX 5.2.1'
},

{
  question: 'Tracking 100 degrees M below the transition altitude in Class G airspace, a valid IFR cruising level is:',
  options: [
    '4,000 ft',
    '6,000 ft',
    '3,000 ft',
    '8,000 ft'
  ],
  correct: 2,
  explanation: 'Below the transition altitude in Class G, tracks 000-179 degrees M use odd thousands (3,000, 5,000, 7,000 ft) and tracks 180-359 degrees M use even thousands. Tracking 100 degrees M, 3,000 ft is valid; the even-thousand levels are not.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'The table of cruising altitudes/levels for IFR in Australian airspace follows which rule?',
  options: [
    'Below the transition altitude, odd thousands of feet (1,000, 3,000, 5,000) for tracks 000-179 degrees M',
    'Odd hundreds of feet are used for all IFR tracks, regardless of the direction of flight',
    'Flight levels only are used; altitude is never used for IFR cruising',
    'ATC assigns every IFR cruising level, so the pilot has no choice in it'
  ],
  correct: 0,
  explanation: 'IFR cruising levels in Australia: below transition altitude (10,000 ft) in Class G: odd thousands (1,000, 3,000, 5,000 ft) for 000–179°M; even thousands (2,000, 4,000, 6,000 ft) for 180–359°M. In controlled airspace, ATC assigns levels. Above transition altitude: semi-circular rule applies — odd FLs (FL110, FL130) for 000–179°; even FLs (FL100, FL120) for 180–359°.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.1.1 / AIP ENR 1.7'
},

{
  question: 'An IFR destination alternate is required when:',
  options: [
    'Always, since every IFR flight without exception must nominate a suitable destination alternate aerodrome',
    'Only when the flight is conducted at night, never during daylight hours',
    'Arrival is during, or within 30 minutes before the forecast start of, conditions at or below the alternate minima',
    'Only when the route involves an extended segment flown over water'
  ],
  correct: 2,
  explanation: 'Under AIP ENR 1.1 10.7.2 an alternate is required when arrival will be during the currency of, or up to 30 minutes before the forecast commencement of, below-alternate-minima conditions (cloud, visibility, a 30% PROB of restricting weather, out-of-limit wind, or thunderstorms); also when there is no usable IAP or lighting/attendance cannot be assured.',
  reference: 'AIP ENR 1.1 10.7 — alternate requirements'
},

{
  question: 'Alternate aerodrome requirements in terms of navigation aids or approach procedures require:',
  options: [
    'The alternate must have an ILS approach procedure',
    'The alternate must have a published instrument approach and forecast weather above alternate minima for the planned arrival window',
    'The alternate must have an instrument approach compatible with the aircraft\'s avionics and weather above alternate minima',
    'Any aerodrome with a published approach is acceptable regardless of forecast weather'
  ],
  correct: 2,
  explanation: 'The alternate must have an instrument approach the aircraft can fly with its installed equipment (e.g. an NDB-only aircraft needs an NDB approach), and the forecast at ETA must meet the alternate minima published on the chart for that approach.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.1 / AIP ENR 1.1'
},

{
  question: 'Alternate aerodrome lighting requirements for a night IFR diversion are that:',
  options: [
    'No lighting is required, even for a planned night diversion',
    'Only approach lighting is needed, with runway edge lighting being optional',
    'The alternate must have runway lighting available for the planned arrival, operable through the diversion window',
    'A pilot-activated lighting system can never be used to satisfy the alternate lighting requirement'
  ],
  correct: 2,
  explanation: 'For a night alternate the aerodrome must have suitable runway lighting available during the planned diversion window. PAL is acceptable provided its published activation works on arrival, and any \'personnel in attendance\' condition for the approach must be satisfied. ERSA states the lighting available at each aerodrome.',
  reference: 'AIP ENR 1.1 10.7 — alternate lighting'
},

{
  question: 'Weather reports must be available for the alternate during the diversion window because:',
  options: [
    'ATC requires the weather reports before it will issue any clearance to divert to the alternate',
    'Weather reports are needed only for the destination aerodrome itself, and never for a nominated alternate',
    'Alternate weather reports are pulled from public online weather services on the day',
    'Current alternate weather must be assessable near destination, or another aerodrome is needed if below minima'
  ],
  correct: 3,
  explanation: 'The pilot must be able to determine the alternate\'s actual weather during the planned diversion period. If the alternate has no reporting (METAR/AWIS/ATIS) over that window, its usability cannot be confirmed. AIP/ERSA show which aerodromes report weather and when, and this is checked in planning.',
  reference: 'AIP ENR 1.1 10.7 — alternate weather'
},

{
  question: 'The \'divert time\' consideration when selecting an alternate means that:',
  options: [
    'The alternate must lie within 30 minutes\' flying time of the destination',
    'The alternate must be reachable on the planned fuel, with diversion and contingency fuel covering the flight time',
    'Divert time is not a regulatory matter; the pilot relies entirely on their own personal judgement',
    'ATC sets the allowable divert time according to the prevailing traffic situation'
  ],
  correct: 1,
  explanation: 'The alternate must be reachable from the destination on the fuel carried: the plan must cover arrival at the destination, a missed approach, transit to the alternate, an approach there and final reserve. If the alternate is too distant the fuel becomes impractical and a closer one should be chosen.',
  reference: 'AIP ENR 1.1 10.7 / Part 91 MOS 19 — fuel'
},

{
  question: 'Holding fuel for weather at the destination is determined by:',
  options: [
    'A fixed 30-minute holding allowance applied to every IFR flight regardless of forecast',
    'ATC, which determines the required holding fuel so the pilot need not calculate it',
    'Whether the operation is being conducted at night, since holding fuel is purely a night-time-only requirement',
    'The expected delay from the destination forecast, with holding fuel covering it until conditions reach minima'
  ],
  correct: 3,
  explanation: 'Weather holding fuel is based on the destination forecast: if conditions are forecast to improve after ETA, carry fuel to cover that delay; if sustained below-minima conditions are forecast, plan to divert rather than hold. Burn is computed at holding speed and level, and on reaching minimum diversion fuel the aircraft diverts regardless of weather.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.2'
},

{
  question: 'Holding fuel for traffic is required when:',
  options: [
    'Anticipated traffic-sequencing delays are expected, based on ATIS, NOTAMs or ATC advice of delays',
    'The destination happens to be a busy international airport, regardless of any delay advice',
    'Never, since holding fuel for traffic is not separately considered in flight planning',
    'Only for commercial air-transport operations, never for private operations'
  ],
  correct: 0,
  explanation: 'Traffic-holding fuel is planned where delays are predictable: peak periods, special events, or when ATIS/NOTAMs/ATC indicate delays. A common conservative figure is 30-45 minutes when operating into major aerodromes at busy times or when ATC has advised expected delays.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.2'
},

{
  question: 'When planning the last segment of an IFR route as "NGT VFR" (Night VFR), the pilot must consider:',
  options: [
    'Only the night rating requirement',
    'Pilot night recency, requiring 3 night take-offs and landings in 90 days',
    'Night VFR requires no additional planning beyond ordinary day VFR',
    'NGT VFR planning is the same as IFR planning'
  ],
  correct: 1,
  explanation: 'NGT VFR planning requirements: (1) Pilot night recency — 3 takeoffs and landings in the preceding 90 days at night; (2) Alternate requirements — a night VFR alternate may be required; (3) Airways clearance — if the NGT VFR segment is in controlled airspace, an airways clearance is still required; (4) Night VMC must be maintained; (5) Lighting at destination must be confirmed available.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.3'
},

{
  question: 'The operational implication of a RAIM prediction is that:',
  options: [
    'RAIM is advisory only, so the operational planning decisions are not affected by its prediction',
    'If RAIM is predicted unavailable, the pilot must plan an alternate navaid or an aerodrome with a non-GNSS approach',
    'RAIM prediction is relevant only to military GNSS operations, not to civil IFR',
    'A backup GPS receiver on board automatically resolves any RAIM unavailability'
  ],
  correct: 1,
  explanation: 'If RAIM is predicted unavailable for the approach window, the pilot must plan a non-GNSS approach (VOR/ILS/NDB) at the destination, retime the departure into a RAIM-available window, or nominate an alternate with a non-GNSS approach. This matters most at remote aerodromes served only by GNSS approaches.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.5'
},

{
  question: 'Maintaining 160 kt IAS at 5,000 ft (using about 2% per 1,000 ft), the true airspeed is approximately:',
  options: [
    '160 kt',
    '176 kt',
    '200 kt',
    '150 kt'
  ],
  correct: 1,
  explanation: 'TAS rises above IAS with altitude by roughly 2% per 1,000 ft. At 5,000 ft: 160 times (1 + 0.02 times 5) = 160 times 1.1 = about 176 kt. TAS is used for groundspeed and ETA planning.',
  reference: 'AIP GEN 2.1 / navigation'
},

{
  question: 'The minimum circling altitude (MCA) is higher than the straight-in MDA because:',
  options: [
    'Circling burns more fuel, and the higher altitude allows time for fuel management',
    'The MCA is always exactly 500 ft above the MDA, regardless of the obstacles present',
    'Circling at a higher altitude gives the pilot a better view of the runway',
    'Circling is flown outside the final-approach protected area, so the MCA clears the larger circling area'
  ],
  correct: 3,
  explanation: 'Circling takes the aircraft around the aerodrome within a protected area larger than the straight-in final segment. The MCA gives the required obstacle clearance (300 ft for Cat A/B, more for higher categories) over that larger area, so it is always equal to or higher than the straight-in MDA.',
  reference: 'Part 61 MOS Sch 3 IREX 4.3.3'
},

{
  question: 'Circling minimum altitudes differ by aircraft category because:',
  options: [
    'Faster aircraft have higher stall speeds, which is what demands more altitude',
    'The category differences reflect the aircraft\'s passenger capacity',
    'There is no difference, since all aircraft categories use the same circling MCA',
    'Faster aircraft fly larger circling radii, so the protected area grows with approach category'
  ],
  correct: 3,
  explanation: 'Circling radii increase with category (Cat A 1.68, B 2.66, C 4.20, D 5.28, E 6.94 nm). Faster aircraft circle wider and may overfly terrain further from the runway, so higher-category minima can be higher. The chart publishes the MCA for each category.',
  reference: 'Part 61 MOS Sch 3 IREX 4.3.3 / AIP ENR 1.5'
},

{
  question: 'After take-off under the IFR, establishing the aircraft on track requires that:',
  options: [
    'The aircraft may fly any heading until it reaches its cruising altitude',
    'The aircraft follows the published SID or departure instruction unless ATC amends it',
    'Only the final cruise heading matters; the departure track is left to pilot discretion',
    'The aircraft follows the SID only if ATC specifically asks for it on the day'
  ],
  correct: 1,
  explanation: 'Where a SID is published and cleared it must be flown; otherwise the aircraft establishes on the cleared route by the specified point. SID obstacle clearance assumes the published procedure is followed, so deviating without authorisation removes that protection. ATC may instead vector to the first waypoint.',
  reference: 'Part 61 MOS Sch 3 IREX 4.3.4'
},

{
  question: 'The requirement to establish above LSALT after take-off is that:',
  options: [
    'There are no specific requirements; the aircraft climbs toward the LSALT at a normal rate',
    'The aircraft must reach the SID or clearance altitude on the specified track before proceeding on the IFR route',
    'LSALT must be reached within exactly 10 minutes of becoming airborne',
    'LSALT applies only after the aircraft has left the aerodrome control zone'
  ],
  correct: 1,
  explanation: 'The SID (or departure procedure/clearance) provides obstacle clearance from the aerodrome up to the point the aircraft reaches LSALT or the procedure\'s initial level. A performance-limited aircraft that cannot make the SID gradient/altitude by the required position may be unable to depart, which matters at high or hot/high aerodromes.',
  reference: 'Part 61 MOS Sch 3 IREX 4.3.5 / AIP ENR 1.7'
},

{
  question: 'The holding pattern inbound leg time below 14,000 ft is:',
  options: [
    '2 minutes',
    '1 minute',
    '1.5 minutes',
    'As published on the chart'
  ],
  correct: 1,
  explanation: 'Standard holding pattern leg time: at or below 14,000 ft: 1 minute; above 14,000 ft: 1.5 minutes. The outbound leg is timed to achieve a 1-minute inbound leg (wind correction applied to outbound leg time). Longer or shorter legs may be published on holding charts for specific procedures. The 1-minute inbound ensures the holding pattern fits within the protected airspace.',
  reference: 'AIP ENR 1.5 — Holding Procedures'
},

{
  question: 'In a right-hand holding pattern, all turns are:',
  options: [
    'To the right',
    'To the left',
    'The first turn is right, the second is left',
    'In the direction providing shortest path to the protected side'
  ],
  correct: 0,
  explanation: 'Standard holding is right-hand (all turns to the right). Non-standard holding is left-hand (all turns to the left) and is published on charts where terrain or traffic requires it. In a right-hand pattern the aircraft turns right from inbound to outbound and right again onto the inbound leg.',
  reference: 'AIP ENR 1.5 — Holding Procedures'
},

{
  question: 'The teardrop (offset) holding entry is used when arriving from:',
  options: [
    'The inbound track plus or minus 70 degrees on the holding side',
    'Any direction, whenever the wind happens to be strong',
    'Sector 2, where a direct entry would put the aircraft on the non-holding side',
    'Only right-hand (non-standard) holding patterns use it, and never the standard left-hand ones'
  ],
  correct: 2,
  explanation: 'The teardrop is the Sector 2 (offset) entry. At the fix, turn to a heading about 30 degrees off the inbound track toward the holding side, fly outbound (up to about 1.5 minutes), then turn to intercept the inbound track, keeping the aircraft within the protected area. (Sector 1 = parallel, Sector 3 = direct.)',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — holding entries'
},

{
  question: 'The direct entry to a holding pattern is appropriate when arriving from:',
  options: [
    'Any direction, since the direct entry is suitable for every possible arrival angle',
    'Sector 3, within about 70 degrees of the inbound track, flying over the fix and turning in the holding direction',
    'Only when ATC has specifically cleared a direct entry for the aircraft',
    'Only for aircraft with a true airspeed above 250 kt in the hold'
  ],
  correct: 1,
  explanation: 'Direct entry (Sector 3): arriving within about 70 degrees of the inbound track on the holding side, the aircraft flies over the fix, turns in the holding direction (right for standard, left for non-standard) and proceeds outbound. It is the simplest entry, the turn keeping the aircraft inside the protected area. (Sector 1 = parallel, Sector 2 = teardrop.)',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — holding entries'
},

{
  question: 'The parallel entry to a holding pattern is appropriate when arriving from:',
  options: [
    'Any direction, used whenever the pilot happens to prefer it',
    'Directly opposite the inbound track, arriving 180 degrees off the inbound',
    'A parallel entry is prohibited within Australian airspace and so is never used',
    'Sector 1, arriving from the non-holding side, within approximately 110° of the inbound track'
  ],
  correct: 3,
  explanation: 'Parallel entry (sector 1): used when arriving from the non-holding side, within 110° of the inbound track. Procedure: at the fix, turn to fly outbound parallel to the inbound track (on the non-holding side) for approximately 1 minute; then turn in the holding direction to intercept the inbound track. The turn-in gets the aircraft established on the inbound leg from the correct side.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — Holding'
},

{
  question: 'To correct for wind in a holding pattern, the pilot adjusts:',
  options: [
    'Only the inbound track is adjusted, leaving the outbound leg of the hold entirely uncorrected for wind',
    'Only the airspeed, since heading corrections are not used in a holding pattern',
    'The outbound time and heading, to achieve a 1-minute inbound leg',
    'Nothing, because the pilot stops correcting for wind once established in the hold'
  ],
  correct: 2,
  explanation: 'Wind is corrected by timing and heading: shorten or lengthen the outbound leg so the inbound leg is 1 minute (1.5 above 14,000 ft), and apply roughly triple the inbound wind-correction angle on the outbound leg. The aim is to track the inbound course and stay within protected airspace.',
  reference: 'AIP ENR 1.5 — holding'
},

{
  question: 'The IFR fuel planning calculation must include:',
  options: [
    'Flight fuel only, from departure to the destination aerodrome',
    'Flight fuel plus a flat ten percent contingency allowance only',
    'Taxi and start fuel, flight fuel, contingency fuel, and alternate fuel',
    'Detailed fuel planning is required only for commercial air-transport operations'
  ],
  correct: 2,
  explanation: 'IFR fuel calculation: (1) Taxi and start; (2) Flight fuel (planned route); (3) Contingency (typically 5% or specific requirement); (4) Alternate fuel if alternate required; (5) Additional holding fuel if destination delays expected; (6) Final reserve (30 min for turbine, 45 min for piston at normal cruise). Total = minimum departure fuel. Actual fuel should include a reasonable margin above minimum.',
  reference: 'CASR Part 91 MOS / AIP ENR 1.1'
},

{
  question: 'If the destination deteriorates below minima after departure and the alternate is also below alternate minima, the pilot should:',
  options: [
    'Advise ATC at once and request weather for other aerodromes in range, declaring MAYDAY if fuel becomes critical',
    'Continue on to the destination anyway and attempt the published approach there as was planned',
    'Turn back and return to the departure aerodrome regardless of distance',
    'Declare a MAYDAY immediately and hold while waiting for the weather to improve'
  ],
  correct: 0,
  explanation: 'With both destination and alternate below minima, act early: tell ATC, request weather for all aerodromes in range, and pick the best option on weather and reachable fuel; declare MAYDAY if fuel is critical. Waiting until fuel forces the decision removes the options; a declared emergency brings maximum ATC assistance.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.4'
},

{
  question: 'An IFR flight planning requirement specific to flight into remote areas is:',
  options: [
    'No special requirements, since the remote areas are treated just the same as any other airspace',
    'Remote areas require a flight plan to be filed 24 hours in advance',
    'Only commercial operators need additional planning for remote areas',
    'Additional contingency fuel for unreliable forecasts, SARTIME filing, and ELT serviceability confirmation'
  ],
  correct: 3,
  explanation: 'Remote area IFR planning: (1) Additional contingency fuel (weather forecasts less reliable); (2) File SARTIME with JRCC; (3) Confirm GNSS RAIM availability (limited alternate navaids); (4) ELT serviceable and registered; (5) Survival equipment (water, first aid, signalling) appropriate to terrain; (6) Communication plan — HF radio or satellite phone; (7) Consider an alternate closer than legal minimum if conditions require.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2 / AIP ENR 1.1'
},

{
  question: 'The significance of the transition level for IFR planning is that:',
  options: [
    'It is the lowest available cruising flight level, where the altimeter changes from QNH to 1013 hPa',
    'It marks the lateral boundary of the controlled airspace for IFR flights operating at that aerodrome',
    'It is the altitude at which flight under the IFR must begin after departure',
    'It is relevant only to international flights, not to domestic IFR operations'
  ],
  correct: 0,
  explanation: 'The transition level is the lowest flight level usable above the transition altitude (10,000 ft in Australia), varying with QNH. Climbing, set 1013 hPa passing through the transition layer; descending, set QNH passing the transition level. A common reference lets aircraft on cruising levels be separated reliably.',
  reference: 'AIP ENR 1.7 — altimetry'
},

{
  question: 'Night-VFR alternate requirements differ from IFR because:',
  options: [
    'Night VFR requires no destination alternate to be nominated under any circumstances',
    'The night-VFR alternate needs forecast night VMC and runway lighting, as no IAP may be used',
    'A night-VFR alternate must be served specifically by an ILS approach procedure',
    'Night-VFR and IFR alternate requirements are in every respect completely identical'
  ],
  correct: 1,
  explanation: 'A night-VFR alternate must be reachable in night VMC: the pilot must stay visual and cannot rely on an instrument approach (unless instrument-rated). So the alternate needs forecast night VMC and runway lighting through the arrival window and must be reachable on fuel, which restricts the choice compared with IFR.',
  reference: 'Part 61 MOS Sch 3 IREX 4.2.3 / Part 91'
},

{
  question: 'Conducting an IFR approach to a non-controlled aerodrome, the pilot must:',
  options: [
    'Request an ATC approach clearance on the CTAF frequency before commencing the published procedure there',
    'Set the current QNH, make CTAF broadcasts throughout, fly the published procedure, and close the plan on arrival',
    'Treat it as impossible, since non-controlled aerodromes cannot be IFR destinations',
    'Wait for a dedicated approach controller, who is required for any such approach'
  ],
  correct: 1,
  explanation: 'There is no approach clearance at a non-controlled aerodrome: obtain and set QNH (AWIS or calculation), broadcast position on the CTAF through the approach, fly the published procedure to its minima as pilot-in-command, and close the flight plan on arrival via ATS/Flightwatch.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.6 / AIP ENR 1.1'
},

{
  question: 'When weather at the destination is below approach minima and holding fuel is insufficient to wait for improvement, the pilot should:',
  options: [
    'Attempt the approach anyway, on the basis that the published minima are deliberately set conservatively',
    'Execute the approach from a lower altitude to improve chances of breaking out',
    'Circle at MCA until fuel is critical then declare emergency',
    'Declare MINIMUM FUEL to ATC, request immediate clearance to the alternate, and divert without delay'
  ],
  correct: 3,
  explanation: 'Diversion decision: when holding fuel is exhausted to the diversion fuel level, divert immediately. Do not attempt the approach hoping for improvement — the consequences of a missed approach below diversion fuel are severe. Declare MINIMUM FUEL if not already done. Diversion fuel = transit + alternate approach + final reserve minimum. Once diversion fuel is reached, there is no discretion — divert.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 4.2.4'
},

{
  question: 'The flight instruments required for IFR in a piston aeroplane are:',
  options: [
    'Only an attitude indicator, an ASI, an altimeter and a directional indicator are strictly required',
    'Any combination of instruments that lets the pilot hold altitude and heading',
    'Exactly the same as for VFR, since IFR requires no additional instruments',
    'A full panel of compass, ASI, altimeter with subscale, attitude indicator, DI or HSI, turn coordinator and VSI'
  ],
  correct: 3,
  explanation: 'Part 91 MOS Ch 26 requires for aeroplane IFR an approved GNSS, ASI, altimeter (subscale), VSI, attitude indicator, directional gyro, turn-and-slip/turn coordinator, magnetic compass, OAT and clock, plus the radio-navigation equipment for the route and approach. Loss of a primary instrument prompts a return or diversion decision.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1 / Part 91 MOS 26.08'
},

{
  question: 'The attitude indicator (AI) is particularly critical for IFR because:',
  options: [
    'It is the only instrument that shows airspeed',
    'The AI is not really that critical, as the altimeter and ASI can substitute',
    'It provides an artificial horizon reference when the natural horizon is invisible',
    'The AI is required only for ILS approaches'
  ],
  correct: 2,
  explanation: 'AI in IMC: without outside visual reference, the AI is the primary means of maintaining attitude. All other instruments are cross-checked against the AI. Failure in IMC requires partial panel technique: use the turn coordinator for bank, altimeter and VSI for pitch. Partial panel flying is significantly more workload-intensive and less precise — diversion or request for vectors to VMC is strongly advisable.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'A limitation of a vacuum-driven attitude indicator is that:',
  options: [
    'It functions only in straight-and-level flight and never in turns',
    'It is inherently rather less accurate than a modern electrically driven attitude indicator',
    'It can topple if the vacuum fails or in prolonged unusual attitudes, and re-erects only slowly afterwards',
    'It cannot display any bank angle beyond about 30 degrees'
  ],
  correct: 2,
  explanation: 'If the vacuum source fails the gyro spins down gradually and may read plausibly for some minutes before becoming unreliable; prolonged unusual attitudes can topple it, after which it re-erects over several minutes and may show a false horizon. Some installations give no vacuum-failure warning, so cross-check the electric turn coordinator.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'The directional indicator (DI) must be realigned with the magnetic compass:',
  options: [
    'Only before flight, since the DI then stays accurate throughout without any further adjustment',
    'Every 10 to 15 minutes in straight, level, unaccelerated flight',
    'Only when entering controlled airspace, and at no other time in the flight',
    'Never, because DI alignment is fully automatic and needs no pilot action'
  ],
  correct: 1,
  explanation: 'A directional gyro drifts from bearing friction (mechanical precession) and Earth\'s rotation (apparent precession, worse at high latitude), typically a few degrees per ten minutes. Realign it with the compass in straight, level, unaccelerated flight every 10-15 minutes, never in a turn, or heading error accumulates.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'The turn coordinator provides which information that the attitude indicator cannot during partial-panel flying?',
  options: [
    'Airspeed information',
    'Rate of turn and coordination, which stay available if the AI fails',
    'Altitude information',
    'The turn coordinator provides no additional information beyond the AI'
  ],
  correct: 1,
  explanation: 'Turn coordinator for partial panel: the turn coordinator is typically electrically powered (independent of vacuum AI). When the vacuum AI fails, the turn coordinator provides: (1) Rate of turn information — maintain standard rate (3°/sec) for timed turns; (2) Coordination — ball indicates slip/skid. Combined with altimeter (pitch reference), ASI (speed), and compass (direction), the turn coordinator enables partial panel IFR flight.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'A standard rate turn (Rate 1) in instrument flying is:',
  options: [
    '1.5 degrees per second, taking four minutes for a 360 degree turn',
    '2 degrees per second, completing a 360 degree turn in three minutes',
    '3 degrees per second, completing a full 360 degree turn in exactly two minutes',
    '5 degrees per second, completing a 360 degree turn in 72 seconds'
  ],
  correct: 2,
  explanation: 'Standard rate (Rate 1) = 3°/second = 180° in 60 seconds = 360° in 2 minutes. For timed turns: turn time (seconds) = heading change (degrees) ÷ 3. Standard rate bank angle ≈ (TAS in kt ÷ 10) + 7°. At 120 kt TAS: bank ≈ 12 + 7 = 19°. All timed turn calculations in IFR use standard rate. Half-standard rate (1.5°/sec) is used for small corrections.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.1'
},

{
  question: 'If the pitot tube becomes completely blocked (ram inlet and drain), the airspeed indicator will:',
  options: [
    'Immediately drop to and remain at zero airspeed',
    'Continue to read the correct indicated airspeed throughout the flight',
    'Behave like an altimeter, over-reading in a climb and under-reading in a descent',
    'Begin to read true airspeed in place of indicated airspeed'
  ],
  correct: 2,
  explanation: 'With the pitot fully blocked, the trapped ram pressure cannot change, so as static pressure falls in a climb the ASI shows an increasing false airspeed, and in a descent a decreasing one, behaving like an altimeter. A blocked ram inlet with an open drain instead drops the ASI to zero.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'On a non-precision approach the aircraft should reach the MDA:',
  options: [
    'Exactly at the MAP, with no earlier point anywhere on the approach being acceptable',
    'Before the MAP, leaving time to assess visual reference, then level at MDA',
    'At any point on the approach, since the position does not matter',
    'At the FAF, descending no further for the rest of the approach'
  ],
  correct: 1,
  explanation: 'Reaching MDA (but not below) before the MAP gives time to level off and look for visual reference. If the MAP is reached at MDA without that reference, a missed approach is flown. A stabilised constant-descent profile to the MDA is preferred over a \'dive and drive\'.',
  reference: 'AIP ENR 1.5 — instrument approaches'
},

{
  question: 'The missed approach point (MAP) on a non-precision approach is:',
  options: [
    'The point at which the DA is reached on a precision approach',
    'The point beyond which visual reference must already exist, set by time from the FAF, by DME or by a waypoint',
    'The furthest point from the runway on the whole approach procedure',
    'A fixed point that lies exactly 1 nm before the runway threshold on every single instrument approach'
  ],
  correct: 1,
  explanation: 'On a 2D approach the MAP is where a missed approach must begin if the required visual reference has not been established. It is charted as a fix, a time from the FAF, or a GNSS waypoint, and marks where the approach obstacle-clearance surface ends, so beyond it clearance at MDA is not assured.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS'
},

{
  question: 'The visual segment of an instrument approach begins:',
  options: [
    'At the initial approach fix, entirely regardless of the prevailing visual meteorological conditions',
    'When the runway lights first become visible at about 5 nm from touchdown',
    'Only at the missed approach point, and at no earlier stage of the approach',
    'Where the required visual references are sighted at or above DA/MDA and the pilot transitions to visual flight'
  ],
  correct: 3,
  explanation: 'The visual segment starts when the required visual references are clearly identified at or above the DA/MDA and the pilot transitions from instruments to visual flying. Visual reference must then be maintained continuously; if it is lost, an immediate missed approach is flown. Simply breaking out of cloud is not enough, the specified references must be seen.',
  reference: 'AIP ENR 1.5 — instrument approaches'
},

{
  question: 'A stabilised approach for an instrument approach requires that:',
  options: [
    'By 500 ft AGL, with correct configuration, stable speed, correct descent rate, on glidepath and aligned with the runway',
    'Only that the aircraft is on the correct approach path as it crosses the FAF',
    'The approach is treated as unstable only if the glideslope is more than 2 dots off',
    'Stabilisation criteria apply solely to commercial air-transport IFR operations, and never to private ones'
  ],
  correct: 0,
  explanation: 'By the stabilisation gate (about 500 ft AGL in IMC) the aircraft should be in landing configuration, at a stable speed (about Vapp +/-10 kt), at a normal descent rate, within about 1 dot of the glidepath/localiser and aligned with the runway. If any criterion is not met, go around. Unstable approaches are a leading CFIT factor.',
  reference: 'AIP ENR 1.5 / CFIT prevention'
},

{
  question: 'An ILS Category I approach has published minima of:',
  options: [
    'Minima vary by aerodrome and aircraft equipment',
    'DA 200 ft and RVR 800 m',
    'DA 200 ft and RVR 550 m',
    'A fixed DA of 100 ft and RVR of 400 m'
  ],
  correct: 0,
  explanation: 'ILS Cat I minima: typically DA at 200 ft (60 m) above threshold, RVR 550 m minimum, but minima are aerodrome-specific and may be higher based on obstacles, approach lighting, runway markings. Cat II: DA 100 ft (30 m), RVR 300 m — requires certified equipment and flight deck crew. Cat III: lower DA or no DA, RVR 75–200 m — highly specialized equipment and certifications required. Always use published minima from current charts, not generalised values.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.8 / AIP ENR 1.5'
},

{
  question: 'During a circling approach, if visual reference is lost the pilot should:',
  options: [
    'Make a climbing turn toward the runway, climb to the circling MCA, then fly the missed approach unless ATC directs otherwise',
    'Continue toward the runway using only the last estimated position from just before the visual reference was lost',
    'Descend to runway level and attempt to locate the runway visually from there',
    'Fly a standard-rate turn in the direction of the published holding pattern'
  ],
  correct: 0,
  explanation: 'On losing visual reference while circling, turn toward the runway (keeping the aircraft over the aerodrome and the safest terrain), climb to the circling MCA or missed-approach altitude, and fly the missed approach or follow ATC. The approach must be discontinued, not continued visually.',
  reference: 'AIP ENR 1.5 — circling'
},

{
  question: 'The visual circling manoeuvre must remain:',
  options: [
    'Within 5 nm of the aerodrome, regardless of the aircraft category',
    'Within 3 nm of the runway threshold for every approach category',
    'Within 10 nm of the aerodrome reference point throughout the circling',
    'Within the published circling radius for the aircraft\'s approach category'
  ],
  correct: 3,
  explanation: 'Obstacle protection during circling is only assured inside the category circling radius (Cat A 1.68, B 2.66, C 4.20, D 5.28, E 6.94 nm). Manoeuvring outside that radius removes the protection even with the runway in sight, so circling is flown at the MCA and within the category radius.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS — circling'
},

{
  question: 'Conducting an ILS approach, the outer marker (OM) audio indication is:',
  options: [
    'Continuous low-pitched dashes',
    'Continuous high-pitched tone',
    'Alternating dot-dash tone',
    'Rapid high-pitched dots'
  ],
  correct: 0,
  explanation: 'Marker beacon audio: Outer Marker (OM) = continuous low-pitched dashes (-- --) at 400 Hz; blue light. Middle Marker (MM) = alternating dot-dash (·-·-) at 1,300 Hz; amber light. Inner Marker (IM) = rapid dots (·····) at 3,000 Hz; white light. The OM is the glideslope intercept fix; MM is approximately DA height; IM is close to the threshold.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.10'
},

{
  question: 'If the glideslope flag appears after glideslope intercept on an ILS approach, the pilot should:',
  options: [
    'Continue anyway, since glideslope warning flags are common and can be ignored on short final',
    'Descend to the ILS-published MDA and look for the runway environment',
    'Ask ATC to confirm glideslope serviceability before deciding to continue',
    'Abandon the precision approach, going around or reverting to localiser-only minima if those are published'
  ],
  correct: 3,
  explanation: 'A glideslope flag means the vertical guidance is unreliable and must not be followed. Either go around, or continue as a localiser-only (LOC) non-precision approach to the higher LOC minima using the step-down fixes, if those minima are published. ATC should be advised.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.10'
},

{
  question: 'ATIS must be obtained before an IFR approach because it:',
  options: [
    'Is required by ATC before it will issue any approach clearance to the aircraft',
    'Is required only for commercial air-transport operations, never for private or aerial-work flights',
    'Gives current wind, QNH, runway and approach in use, weather and NOTAMs, all needed for the briefing and minima',
    'Must be obtained but never needs to be reported to ATC on first contact'
  ],
  correct: 2,
  explanation: 'ATIS supplies the current QNH (for correct minima), the runway and approach in use, wind for a crosswind check, significant weather such as wind-shear, and relevant NOTAMs (e.g. aid outages). The pilot passes the ATIS code to ATC on first contact; if ATIS is unavailable, request QNH and runway from ATC or Flightwatch.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1 / AIP ENR 1.6'
},

{
  question: 'The purpose of the approach briefing before an instrument approach is:',
  options: [
    'It is purely a box-ticking regulatory requirement that serves no real practical purpose in the cockpit',
    'The approach briefing is required only when two pilots are operating together',
    'To review the procedure, IAF, track, altitude limits, DA/MDA, missed approach and criteria before the workload rises',
    'Briefings are needed only for a first approach to an unfamiliar aerodrome'
  ],
  correct: 2,
  explanation: 'Briefing the approach beforehand lowers in-approach workload, fixes the altitude constraints and missed-approach procedure in mind, confirms configuration, and sets the decision criteria (fuel, weather, equipment). A common structure covers ident, altitudes/minima, timing, missed approach and the alternate plan.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The technique for transitioning from instrument to visual flying at DA on an ILS approach is:',
  options: [
    'Divert all of the pilot\'s attention to outside visual references and ignore the flight instruments',
    'Transition gradually, look outside for visual references while maintaining instrument crosscheck',
    'Stop instrument scanning as soon as one visual reference is sighted',
    'Hand control to the autopilot when transitioning to visual'
  ],
  correct: 1,
  explanation: 'DA transition technique: at DA, look outside for required visual references while continuing instrument crosscheck. If references are sighted: transition to visual flying, continue stabilised approach. Do not abandon all instrument reference immediately — continue to cross-check instruments during the visual segment, particularly in marginal conditions where visual references may deteriorate. If visual reference is lost, execute missed approach immediately.',
  reference: 'AIP ENR 1.5 / IFR flying technique'
},

{
  question: 'The "constant descent final approach" (CDFA) technique on non-precision approaches:',
  options: [
    'Requires the aircraft to be at MDA when crossing the FAF',
    'Involves flying a continuous 3° (or published angle) descent from the FAF to the runway threshold',
    'CDFA can only be used on GNSS approaches',
    'A CDFA results in noticeably higher minima than the conventional step-down approaches do'
  ],
  correct: 1,
  explanation: 'CDFA technique: fly a continuous descent from FAF to the runway, targeting the runway threshold as the aim point. The descent angle is calculated from the approach chart (typically 3°). When the aircraft reaches the altitude corresponding to MDA, if visual reference is not established — execute a missed approach (treat MDA as DA). Benefits: stabilised approach profile, no step-downs to manage, better visual acquisition geometry, reduced CFIT risk.',
  reference: 'AIP ENR 1.5 — Non-Precision Approach Techniques'
},

{
  question: 'The primary cause of Controlled Flight Into Terrain on instrument approaches is:',
  options: [
    'Weather conditions that happen to be below the published approach minima at the time on the day',
    'Sudden failure of the aircraft\'s primary navigation system during the approach',
    'Descending below the profile, often with disorientation or position confusion and not flying the published procedure',
    'It occurs only on non-precision approaches and never on precision approaches'
  ],
  correct: 2,
  explanation: 'CFIT typically follows descent below the DA/MDA or profile without visual reference, spatial disorientation (believing the aircraft is higher than it is), not flying the published altitudes, or a delayed missed approach, often with inadequate briefing and high workload. It remains a leading cause of fatal IFR accidents.',
  reference: 'Part 61 MOS Sch 3 IREX — CFIT'
},

{
  question: 'The IFR instrument crosscheck (scan) involves:',
  options: [
    'Monitoring only the attitude indicator, to the deliberate exclusion of all of the other instruments',
    'Glancing at each instrument just once every minute or so in turn',
    'Monitoring only the attitude indicator and the altimeter together',
    'A systematic scan of all primary instruments centred on the attitude indicator, never fixating on one'
  ],
  correct: 3,
  explanation: 'The scan radiates from the attitude indicator (the hub) out to the supporting instruments, ASI, altimeter, DI and VSI, and back, with no instrument fixated for more than a couple of seconds; navigation displays are added on approach. A good scan catches deviations before they grow.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'An NDB approach at night needs particular caution because:',
  options: [
    'Night effect causes NDB bearing errors, and lightning from any convective activity attracts the ADF needle',
    'NDB ground signals are weaker during the hours of darkness than by day',
    'NDB instrument approaches are prohibited entirely during the hours of darkness across Australia',
    'Night makes no additional difference to NDB navigation'
  ],
  correct: 0,
  explanation: 'At night, sky-wave interference (night effect) increases ADF bearing errors and any nearby electrical activity pulls the needle toward the storm. The visual transition at the MDA is also harder among other ground lighting, and night circling is especially demanding, so an NDB approach at night demands extra caution.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.2'
},

{
  question: 'In a holding pattern associated with an approach limited to Category A and B aircraft only, the maximum holding speed at or below 14,000 ft is:',
  options: [
    '170 kt IAS',
    '210 kt IAS',
    '230 kt IAS',
    '250 kt IAS'
  ],
  correct: 0,
  explanation: 'The general maximum holding speed at or below 14,000 ft is 230 kt IAS, but where the holding is associated with an approach limited to Category A and B aircraft only, the maximum reduces to 170 kt IAS, keeping the slower aircraft within a tighter protected area.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The minimum altitude at which a procedure turn may be initiated is:',
  options: [
    'The minimum descent altitude (MDA) published for the procedure',
    '1,000 ft above the aerodrome elevation in all cases',
    'The procedure turn altitude published on the approach chart',
    'The LSALT calculated for the surrounding area'
  ],
  correct: 2,
  explanation: 'Procedure turn altitude: the chart specifies the altitude at which the procedure turn (outbound reversal) is flown. This is the protected obstacle clearance altitude for the reversal manoeuvre. Do not descend below the published procedure turn altitude until established inbound and past the FAF (or the next step-down fix). The procedure turn must be completed within the specified distance (typically 10 nm) from the fix. Typically the altitude at the IAF or as specified on the chart.',
  reference: 'AIP ENR 1.5 — Instrument Approach Procedures'
},

{
  question: 'The minimum obstacle clearance provided during the initial approach segment is:',
  options: [
    '300 m (approximately 1,000 ft) above obstacles in the initial approach protected area',
    '100 ft above the obstacles in the protected area',
    '500 ft above the obstacles in the protected area',
    'A 35 ft per nautical mile climb gradient measured outward from the IAF onward'
  ],
  correct: 0,
  explanation: 'ICAO instrument approach obstacle clearance: Initial approach segment: 300 m (984 ft) above obstacles in the primary area, decreasing to 0 at the edge of the secondary area. Intermediate segment: 150 m (492 ft) in primary area. Final approach segment: non-precision 75 m (246 ft), precision 15-60 m depending on category. These clearances assume the published procedure is followed exactly.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5'
},

{
  question: 'A VOR/DME approach differs from a VOR approach in that:',
  options: [
    'These VOR/DME approaches carry lower published landing minima than the VOR-only approaches do',
    'DME is needed to identify step-down fixes or the MAP, without which the VOR-only procedure is flown if published',
    'VOR/DME approaches are inherently more accurate than VOR-only approaches',
    'There is no practical difference between a VOR and a VOR/DME approach'
  ],
  correct: 1,
  explanation: 'On a VOR/DME approach the DME defines step-down fixes and/or the MAP. If the DME is unserviceable, the approach can only continue if time-based or other fix identification is published; otherwise the VOR-only procedure (if charted) must be flown to its own minima. The chart states which fixes need DME.',
  reference: 'AIP ENR 1.5 — instrument approaches'
},

{
  question: 'The approach segment between the intermediate fix (IF) and the final approach fix (FAF) is:',
  options: [
    'The initial approach segment, flown from the IAF toward the intermediate fix on the procedure',
    'The final approach segment, flown from the FAF toward the runway',
    'A transition segment linking the en-route structure to the approach',
    'The intermediate segment, used to align with final, reduce speed and configure for the approach'
  ],
  correct: 3,
  explanation: 'The intermediate segment runs from the IF to the FAF. It is where the aircraft aligns with the final approach track (less than 30 degrees change), slows to approach speed, configures, and completes the checklist, before final descent begins at the FAF.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5'
},

{
  question: 'A "feeder route" on an instrument approach chart is:',
  options: [
    'The published missed approach route that is flown after a go-around from the MAP',
    'The glideslope intercept track on the final approach',
    'A route that connects the en-route structure to the IAF, specifying track, altitude',
    'A feeder route is another name for a STAR'
  ],
  correct: 2,
  explanation: 'Feeder routes: published tracks from specific en-route fixes or airways to the IAF (or holding fix) of an instrument approach. They specify track (magnetic), minimum altitude, and distance. Feeder routes allow structured traffic flow from various directions to the approach sequence. They ensure obstacle clearance during the transition from en-route to approach phase.',
  reference: 'AIP GEN 3.4 / ICAO PANS-OPS'
},

{
  question: 'The decision altitude (DA) on an ILS approach is referenced to:',
  options: [
    'The aerodrome elevation, expressed as a height measured above the aerodrome reference point itself',
    'The elevation of the ILS transmitter site itself',
    'Mean sea level, read on the altimeter with QNH set, with the decision height referenced to the threshold',
    'The ground level lying directly beneath the aircraft'
  ],
  correct: 2,
  explanation: 'A DA is referenced to mean sea level and read on the QNH altimeter; the related decision height (DH) is referenced to the threshold elevation, so DA = DH + threshold elevation. The pilot flies to the DA on the altimeter, while a radio altimeter (if fitted) shows height.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.8 / AIP ENR 1.5'
},

{
  question: 'When a cold-temperature correction is applied on an approach, it is added to:',
  options: [
    'The QNH setting only, leaving all of the published procedure altitudes themselves unchanged',
    'The aircraft indicated airspeed flown on the final approach segment',
    'The published procedure altitudes, including step-downs, the MDA or DA and the missed-approach altitudes',
    'Only the final approach fix crossing altitude, and no other altitude'
  ],
  correct: 2,
  explanation: 'When applied (aerodrome temperature below 0 degrees), the correction from the AIP/ICAO table is added to the published procedure altitudes, the step-down fixes, the MDA or DA and the missed-approach altitudes, restoring true obstacle clearance. En-route QNH-set altitudes are flown normally.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.9 / AIP ENR 1.7'
},

{
  question: 'The approximate freezing level can be calculated from the surface temperature using:',
  options: [
    'Surface temperature (°C) ÷ 3 × 1,000 ft (in clear air) or surface temperature ÷ 1.5 × 1,000 ft (in cloud)',
    'Surface temperature ÷ 2 in thousands of feet',
    'Surface temperature divided by 2°C per 1,000 ft gives the freezing level in thousands of feet',
    'Freezing level cannot be calculated without upper air data'
  ],
  correct: 0,
  explanation: 'Freezing level calculation: In clear air (3°C/1,000 ft): surface temp ÷ 3 = freezing level in thousands of feet. Surface +21°C = 21÷3 = 7,000 ft. In cloud (1.5°C/1,000 ft): from cloud base temperature. Example: cloud base 4,000 ft at +3°C: freezing level = 4,000 + (3÷1.5 × 1,000) = 4,000 + 2,000 = 6,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'When temperature at 5,000 ft is +9°C (in clear air), the freezing level is approximately:',
  options: [
    '5,000 ft',
    '8,000 ft',
    '11,000 ft',
    '14,000 ft'
  ],
  correct: 1,
  explanation: 'From 5,000 ft at +9°C in clear air (3°C/1,000 ft lapse rate): distance to freezing = 9 ÷ 3 = 3,000 ft above 5,000 ft. Freezing level = 5,000 + 3,000 = 8,000 ft.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'A report of \'SEV TURB FL350 NEAR JET\' indicates:',
  options: [
    'Severe turbulence at FL350 near the jet stream, a hazard to be avoided by deviation or level change',
    'Moderate turbulence somewhere close to FL350 along the planned route',
    'Turbulence that affects only heavy aircraft when operating at FL350',
    'Turbulence that was only brief and transient, with the conditions now reported as fully improved'
  ],
  correct: 0,
  explanation: 'Severe turbulence causes abrupt large changes in altitude and attitude with possible loss of control and structural damage. At FL350 near the jet stream it is classic clear-air turbulence from strong shear, so an AIREP of it should prompt a routeing or level change, using turbulence-penetration speed if it cannot be avoided.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'Within a thunderstorm cell, the most severe airframe icing typically occurs:',
  options: [
    'Near the freezing level, in the strongest updraughts',
    'Near the cloud top, which is composed almost entirely of relatively harmless ice crystals',
    'Below the cloud base, in the clear air beneath the storm',
    'Only in the dissipating anvil, well away from the active updraught core'
  ],
  correct: 0,
  explanation: 'A cumulonimbus updraught lifts large volumes of supercooled water, giving very high liquid water content around the freezing level and extreme accretion rates that overwhelm ice protection. The glaciated upper cloud is mostly ice crystals (less adhesion); below cloud base there is little cloud water.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2.4'
},

{
  question: 'A destination observation showing \'TS\' in the weather group indicates:',
  options: [
    'Tropospheric stratification, indicating layered cloud across the aerodrome',
    'A thunderstorm, with cumulonimbus at or near the aerodrome at the planned arrival time',
    'Temperature and soaring conditions that are favourable for gliding',
    'Transitional showers that are passing through the aerodrome area'
  ],
  correct: 1,
  explanation: 'TS denotes a thunderstorm, with cumulonimbus over or near the aerodrome: expect severe turbulence and windshear on final, possible extreme downdraughts and hail, and a lightning hazard to ground operations. Delaying the approach or diverting is often the safest course.',
  reference: 'Part 61 MOS Sch 3 IREX 3.2 / AIP MET'
},

{
  question: 'Crossing the VOR on a VOR/DME approach, the pilot should expect:',
  options: [
    'The DME to read exactly 0.0 nm and the CDI to centre itself precisely while overhead the VOR station',
    'The ATIS broadcast to announce the moment of VOR station passage',
    'The ILS glideslope to activate at the point of station passage',
    'The CDI to oscillate with a possible OFF flag and the TO/FROM to reverse, while DME reads slant range, not zero'
  ],
  correct: 3,
  explanation: 'Passing overhead, the aircraft enters the cone of confusion: the CDI oscillates (an OFF flag may flicker) and the TO/FROM reverses, confirming station passage. The DME shows the slant range, roughly the aircraft\'s height in nm overhead, not zero. Note the time and confirm the reversal before descending on final.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.4 / 5.1.9'
},

{
  question: 'The ILS signal is protected by:',
  options: [
    'Only the general airport security measures that are in place around the field perimeter itself',
    'Only the glideslope; the localiser is unaffected by passing ground traffic',
    'Critical and sensitive areas, which aircraft and vehicles hold clear of during ILS approaches to prevent multipath',
    'Nothing, since the ILS signal is self-correcting and needs no protection'
  ],
  correct: 2,
  explanation: 'ILS critical and sensitive areas surround the localiser and glideslope antennas; metallic objects there cause multipath. During ILS approaches, traffic holds at the ILS holding point (further back than the runway holding point), and ATC enforces this, especially for lower-category operations.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.10 / AIP ENR 1.5'
},

{
  question: 'GNSS SBAS (Satellite-Based Augmentation System) improves GNSS performance by:',
  options: [
    'Adding more satellites to the GPS constellation',
    'SBAS only improves GNSS accuracy in controlled airspace',
    'Providing differential corrections and integrity data broadcast from geostationary satellites',
    'SBAS reduces satellite geometry errors directly by physically repositioning the satellites'
  ],
  correct: 2,
  explanation: 'SBAS: a network of ground reference stations measure GPS errors and generate correction messages. These are uplinked to geostationary satellites and broadcast to all SBAS-equipped receivers. Benefits: (1) Improved accuracy (1–3 m); (2) Independent integrity monitoring; (3) Enables LPV (Localiser Performance with Vertical guidance) approaches with DA as low as 200 ft; (4) Reduces RAIM satellite requirements. Australia does not have SBAS coverage but work on it is ongoing (SBAS trial has been conducted).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'With a relative bearing of 090 and a magnetic heading of 270, the NDB lies:',
  options: [
    'Directly ahead of the aircraft, right on the nose',
    'To the right of the aircraft, lying somewhere near the 3 o\'clock relative position',
    'Due north of the aircraft, since heading 270 plus relative 090 gives 360',
    'Behind the aircraft, near the tail at the 6 o\'clock position'
  ],
  correct: 2,
  explanation: 'Magnetic bearing to the station = magnetic heading + relative bearing = 270 + 090 = 360, i.e. due north. Heading west with a relative bearing of 090 (90 degrees right of the nose) points to the north, so the aircraft turns right to track to the NDB.',
  reference: 'Part 61 MOS Sch 3 IREX 5.1.3'
},

{
  question: 'Given heading 090°M and ADF reads 270° relative — the aircraft is tracking directly:',
  options: [
    'Toward the NDB',
    'Away from the NDB on the 090° radial',
    'Away from NDB on the 270° bearing from the station',
    'Parallel to the NDB, abeam to the left'
  ],
  correct: 3,
  explanation: 'Heading 090°M, RB 270°: MB to station = 090 + 270 = 360° = 000°M. The NDB is due north. The aircraft heading east (090°) with the NDB to the north is flying parallel to the station — the NDB is abeam to the left (north). RB 270° = the NDB is at the 9 o\\\'clock position (directly left of the aircraft heading east).',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.1.3'
},

{
  question: 'If ATC instructs \'descend to 5,000 ft\' but the route LSALT is 6,000 ft, the pilot should:',
  options: [
    'Comply with it at once, since an ATC clearance will always take priority over any published route LSALT',
    'Split the difference and descend only to 5,500 ft as a sensible compromise level',
    'Query it unless ATC has confirmed terrain clearance by radar or the aircraft is on a procedure',
    'Cancel the IFR clearance entirely and descend visually below the LSALT to 5,000 ft'
  ],
  correct: 2,
  explanation: 'ATC issues clearances below LSALT only when terrain clearance is assured (radar identification, an instrument procedure, or confirmed terrain data). An unexpected clearance below LSALT should be queried to confirm why it is safe; the pilot does not descend below LSALT without understanding the basis.',
  reference: 'Part 61 MOS Sch 3 IREX 4.3.6 / AIP ENR 1.7'
},

{
  question: 'Unless ATC assigns a discrete code, the SSR transponder code for an IFR flight in controlled airspace is:',
  options: [
    'Code 1200, the standard VFR conspicuity code',
    'Code 2000, used by IFR flights outside controlled airspace',
    'Code 7600, reserved for radio communication failure',
    'Code 3000, the IFR code when no discrete code is assigned'
  ],
  correct: 3,
  explanation: 'Standard SSR codes: 3000 for IFR in controlled airspace (and Class E) when no discrete code is assigned; 2000 for IFR outside controlled airspace; 1200 for VFR. ATC assigns discrete codes for identification, and 7500/7600/7700 are the emergency codes.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.4 / AIP ENR 1.6'
},

{
  question: 'By day, for a destination alternate with no instrument approach the pilot can conduct, the alternate minima are:',
  options: [
    'The published approach minima increased by 300 ft and 1,500 m visibility',
    'The alternate minima published on the approach chart for that aerodrome',
    'The LSALT for the final route segment plus 500 ft, with a visibility of 8 km',
    'Standard VFR conditions only, with no instrument minima applicable'
  ],
  correct: 2,
  explanation: 'Under AIP ENR 1.1 10.7.2.10, by day where the alternate has no usable IAP, the alternate minima are the LSALT for the final route segment plus 500 ft and a visibility of 8 km. Where the alternate has an IAP the pilot can conduct, the chart-published alternate minima apply instead. There is no universal +300 ft / 1,500 m rule.',
  reference: 'AIP ENR 1.1 10.7.2.10'
},

{
  question: 'The maximum height at which ATC may provide approach control service in Australia is:',
  options: [
    'FL245',
    'FL180',
    'FL600',
    'FL100'
  ],
  correct: 0,
  explanation: 'Australian controlled airspace structure: Class A airspace above FL245 is for IFR only. Approach control typically provides service from the base of controlled airspace up to FL245 (upper limit of Class C/E in Australian TCAs). The upper limit of individual terminal areas varies — published in AIP ERSA and on ERC charts. Area control provides service in Class A above FL245.',
  reference: 'AIP ENR 1.4 — Airspace'
},

{
  question: 'A compulsory reporting point is indicated on a navigation chart by:',
  options: [
    'An open triangle',
    'A solid triangle',
    'A circle with a cross',
    'A flag symbol'
  ],
  correct: 1,
  explanation: 'Chart symbols: Compulsory reporting point (CRP) = solid/filled triangle — all IFR aircraft must report when passing. On-request reporting point (ORP) = open triangle — report only when requested by ATC. Compulsory reports must include: callsign, position, time, level, and next reporting point. In radar-identified environments, ATC may suspend compulsory position reports.',
  reference: 'AIP GEN 3.2 / AIP ENR 1.6'
},

{
  question: 'When reading back an airways clearance, the pilot must read back:',
  options: [
    'The callsign, route or SID, levels, departure frequency and transponder code',
    'The entire clearance, word for word, exactly as it was originally transmitted by the controller',
    'Only the assigned transponder code, with no other items',
    'Only the first and the last items of the clearance as received'
  ],
  correct: 0,
  explanation: 'All operationally significant items are read back, the route or SID, levels and any restrictions, departure frequency and transponder code, so ATC can catch an error before the aircraft acts on it. An uncorrected incorrect readback is a serious communication hazard.',
  reference: 'AIP ENR 1.1 — radiotelephony'
},

{
  question: 'An airways clearance "cleared direct ALPHA, maintain FL160" when the filed route is via BRAVO, CHARLIE, ALPHA means:',
  options: [
    'The pilot should fly via BRAVO and CHARLIE to ALPHA',
    'The pilot continues on the originally filed route but climbs direct to FL160',
    'The clearance authorises a direct track from the current position to ALPHA at FL160',
    'Direct clearances are only valid in Class A airspace'
  ],
  correct: 2,
  explanation: '"Cleared direct" clearance: the pilot flies a direct track to the nominated fix, regardless of the filed route. All intermediate fixes on the filed route between current position and the direct fix are cancelled. The pilot should: (1) Program the direct track in the FMS/GPS; (2) Note time saved and any fuel implications; (3) Update SARTIME if applicable; (4) Advise ATC of any "unable" constraints (airspace, terrain, equipment).',
  reference: 'AIP ENR 1.1 / IFR communications'
},

{
  question: 'The instruction \'cleared ILS runway 34L approach\' means:',
  options: [
    'The pilot is cleared both to intercept the ILS and to land on runway 34L',
    'The pilot is cleared to land on 34L using any approach of their choosing',
    'Cleared to fly the ILS procedure to runway 34L, with the landing clearance issued separately by the tower',
    'The pilot is cleared for the ILS only if the glideslope is found to be fully serviceable on intercept'
  ],
  correct: 2,
  explanation: 'An approach clearance authorises flying the published procedure to the runway; it is not a landing clearance. The tower issues \'cleared to land\' separately, usually on final inside about 5 nm. If no landing clearance has been received by a reasonable point on final, the pilot queries ATC.',
  reference: 'AIP ENR 1.1 — ATC phraseology'
},

{
  question: 'Conducting an IFR flight in Class G airspace, the pilot must:',
  options: [
    'Maintain VFR conditions throughout, on the basis that IFR is not permitted in Class G airspace',
    'Contact ATC for radar separation from all other traffic at all times within the area',
    'File an IFR flight plan and fly IFR levels and procedures, providing own separation from terrain and traffic',
    'Obtain special permission from CASA before conducting any IFR flight in Class G airspace'
  ],
  correct: 2,
  explanation: 'IFR is permitted in Class G, but it is non-controlled: there is no airways clearance and ATC does not separate aircraft, providing only a traffic information service. The pilot files a flight plan, complies with IFR procedures, levels and reporting, and remains responsible for terrain (LSALT) and traffic separation.',
  reference: 'AIP ENR 1.4 / Part 91 — Class G'
},

{
  question: 'The instrument rating proficiency check (IRPC) assesses:',
  options: [
    'Only instrument approaches',
    'Instrument flying in the aircraft category, including normal IFR operations and instrument approaches',
    'Ground knowledge only, no flight assessment is required',
    'The IRPC only checks the most recent year\'s approaches, and older proficiency is not assessed'
  ],
  correct: 1,
  explanation: 'IRPC content: the proficiency check covers the full scope of IFR operations including: instrument departure and en-route navigation; instrument approaches (typically at least one precision and one non-precision); missed approach; holding; unusual attitude recovery; partial panel flying (vacuum failure simulation); emergency equipment and procedures. The check must be conducted in the aircraft category.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.1.2 / CASR Part 61'
},

{
  question: 'GNSS integrity differs from accuracy in that integrity:',
  options: [
    'Measures how close the computed position is to the true position at any moment',
    'Applies only to ILS approaches, whereas accuracy applies only to GNSS receivers',
    'Means the same thing as accuracy, the two being fully interchangeable terms',
    'Is the system ability to warn the pilot promptly when the position should not be trusted'
  ],
  correct: 3,
  explanation: 'Accuracy is how close the computed position is to truth. Integrity is the ability to detect a fault and warn the pilot within the time-to-alert when accuracy has degraded below requirements. A position can be accurate yet lack integrity monitoring; RAIM and SBAS provide GNSS integrity for IFR.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 5.2.2'
},

{
  question: 'Holding-pattern protected airspace is designed around:',
  options: [
    'A standard-rate turn flown in nil wind, using one-minute legs only throughout',
    'The wingspan of the relevant aircraft category, and nothing more',
    'A simple fixed radius of 2 nm drawn around the holding fix',
    'Maximum holding speed, turn direction, leg times and a wind allowance for the pattern'
  ],
  correct: 3,
  explanation: 'The protected area is built to contain any aircraft flown within the published maximum holding speed and leg times, in the correct turn direction, with an allowance for wind, so it extends beyond the nominal pattern. Exceeding the holding speeds or times can take the aircraft outside the protected airspace.',
  reference: 'ICAO PANS-OPS / AIP ENR 1.5 — holding'
},

{
  question: 'The \'approach ban\' for IFR flights means:',
  options: [
    'All approaches are banned outright whenever the prevailing weather is below the published minima',
    'The approach ban applies only to commercial air-transport operations and no others',
    'Every instrument approach requires prior ATC approval before it may begin',
    'Below 1,000 ft above aerodrome elevation must not be flown if the TDZ RVR is continually below the landing minima'
  ],
  correct: 3,
  explanation: 'Under Part 91 the approach ban applies at aerodromes with ATC where RVR is reported: the aircraft must not descend below 1,000 ft above aerodrome elevation if the TDZ RVR is continually below the landing minima. If the RVR falls below minima only after passing 1,000 ft, the approach may be continued.',
  reference: 'CASR Part 91 Ch 16 / AIP ENR 1.5'
},

{
  question: 'On an instrument approach in Australia, reaching DA/MDA with only the approach lights visible, the pilot may continue to land only if:',
  options: [
    'The approach lights are clearly identifiable with the landing runway and the flight visibility is at least that specified',
    'The approach lights alone are always a sufficient visual reference to continue all the way down to a landing',
    'Descent may continue to 100 ft above the touchdown zone on the lights alone',
    'The approach must always be discontinued unless the full runway is in sight'
  ],
  correct: 0,
  explanation: 'In Australia, continuation below DA/MDA requires the required visual reference (the runway threshold, approach lights, or markings identifiable with the landing runway) clearly visible and the flight visibility not less than that specified for the procedure; otherwise a missed approach is flown.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "time limit" for an airways clearance that has not been used is:',
  options: [
    '1 hour from issue',
    '30 minutes from the expected departure time in the clearance',
    'Clearances do not expire, they remain valid until cancelled',
    '2 hours from the filed EOBT'
  ],
  correct: 3,
  explanation: 'Airways clearance validity: a clearance (including an IFR flight plan that supports it) is valid for 2 hours from the EOBT (Estimated Off-Blocks Time). If the aircraft does not depart within 2 hours, the clearance and flight plan lapse. The pilot must re-file and re-obtain clearance. If departure is delayed significantly, advising ATC early allows them to re-sequence the flight and issue a revised clearance with updated EOBT.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 2.3.11 / AIP ENR 1.10'
},

{
  question: 'The primary hazard of structural icing for an IFR aircraft is:',
  options: [
    'Added weight and disrupted airflow cut lift and raise stall speed, plus blocked pitot-static causing instrument errors',
    'An increase in fuel consumption only, with no other significant aerodynamic effect on the airframe in flight',
    'A reduction in visibility through the windscreen only, with no other effect',
    'Ice forming only on the windscreen, with no aerodynamic effect on the aircraft'
  ],
  correct: 0,
  explanation: 'Ice adds weight and, more importantly, disrupts the airflow, reducing lift, raising the stall speed and altering stall behaviour, which may become sudden; blocked pitot or static ports give false airspeed and altitude. In severe conditions accretion can be rapid and accidents are often fatal.',
  reference: 'AIP ENR 1.5 / BOM meteorology'
},

{
  question: 'Structural icing requires:',
  options: [
    'Air temperatures below minus 40 degrees Celsius before it can occur',
    'Only freezing rain, since cloud alone does not cause structural icing',
    'Visible moisture and temperatures between about 0 and minus 40 degrees, most severe from 0 to minus 20',
    'Temperatures above 0 degrees Celsius combined with consistently high humidity in the surrounding air'
  ],
  correct: 2,
  explanation: 'Two conditions must coincide: visible moisture (cloud, freezing rain or drizzle, wet snow) and a temperature between about 0 and -40C, where supercooled water can exist. The most severe icing is between 0 and -20C, and clear ice from freezing rain can be severe just below 0C.',
  reference: 'AIP GEN 2.2 / BOM meteorology'
},

{
  question: '"Clear ice" (glaze ice) on aircraft is more hazardous than "rime ice" because:',
  options: [
    'Clear ice is dense and heavy and conforms closely to the airfoil, it is hard to detect and to remove',
    'Rime ice is significantly heavier than clear ice of the same thickness',
    'Clear ice forms only on the windscreen; rime ice forms on wings',
    'There is no significant difference between the clear and rime ice hazards'
  ],
  correct: 0,
  explanation: 'Clear (glaze) ice: formed from large supercooled water droplets (freezing rain, drizzle) or temperatures just below 0°C. Dense, transparent, heavy, adheres strongly, difficult to detect. Rime ice: formed from small droplets in cloud at lower temperatures — opaque, granular, lighter, brittle. Clear ice is more hazardous: heavier load, harder to remove, more severe aerodynamic disruption.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'The \'freezing level\' in aviation weather is:',
  options: [
    'The altitude at which the tops of the cloud layers are generally found',
    'The altitude or band where the free-air temperature is 0°C',
    'The altitude at which falling precipitation changes from rain into snow as it continues to descend',
    'The height of the tropopause above the location in question'
  ],
  correct: 1,
  explanation: 'The freezing level is where the free-air temperature is 0C. Above it, cloud water droplets are supercooled (liquid below 0C) and freeze on contact with the airframe. It is given in forecasts and SIGWX charts and varies with season and latitude.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'A "SIGMET" for icing in the IREX context means:',
  options: [
    'A Significant Meteorological Information message, issued for severe or extreme icing',
    'A routine periodic weather forecast for the area',
    'A terminal aerodrome forecast issued for a single individual aerodrome',
    'A SIGMET is issued only for volcanic ash, not for icing'
  ],
  correct: 0,
  explanation: 'SIGMET (Significant Meteorological Information): issued by meteorological watch offices for significant in-flight weather hazards including: severe icing, severe turbulence, severe mountain wave, sandstorm/duststorm, volcanic ash, tropical cyclone. For IFR, SIGMETs are mandatory reading during pre-flight planning and should be monitored in flight (VOLMET, ATIS, ATC).',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'Supercooled large droplets (SLD) are particularly hazardous because:',
  options: [
    'They form only above FL200, well up into the normal cruising levels',
    'They always occur together with severe airframe turbulence within the very same cloud mass',
    'They affect only propeller-driven aircraft and never jet aircraft',
    'Freezing rain and drizzle that build clear ice rapidly and can extend aft of the wing\'s protected areas'
  ],
  correct: 3,
  explanation: 'SLD (freezing drizzle, freezing rain) are large enough to strike and run back behind the protected leading edges, building a clear-ice ridge on unprotected surfaces that badly disrupts the aerofoil. Specific SLD certification requirements followed several accidents.',
  reference: 'BOM meteorology / CASA SLD guidance'
},

{
  question: 'The most dangerous phase for an icing encounter on an IFR flight is typically:',
  options: [
    'Cruise at high altitude, where the outside air temperatures are at their very lowest',
    'The climb through cloud, which is always the most dangerous phase',
    'The take-off run in cold ambient temperatures at the aerodrome',
    'Descent and approach near the freezing level'
  ],
  correct: 3,
  explanation: 'On descent and approach the aircraft slows (less aerodynamic heating), power is reduced and configuration changes, all while ice may be accreting and the stall speed rising, during a phase demanding precision. Descending into warmer air eventually melts ice but can briefly worsen the encounter.',
  reference: 'CASA IFR guidance / BOM meteorology'
},

{
  question: 'Thunderstorm avoidance for IFR aircraft requires:',
  options: [
    'Flying through the clear area between two thunderstorm cells is always perfectly safe',
    'Only avoid the dark-coloured cells, white cells are safe to penetrate',
    'A minimum of 20 nm lateral separation from active thunderstorm cells, hail, severe turbulence',
    'Thunderstorms can be penetrated at FL200 and above'
  ],
  correct: 2,
  explanation: 'Thunderstorm avoidance: 20 nm lateral minimum from individual cells; greater separation from squall lines. Hazards extend beyond visible cloud: severe to extreme turbulence (CAT in anvil outflow), large hail (can fall 20+ nm from storm), severe icing, windshear (microbursts). The area between two cells may have violent convergent winds. Never attempt to fly under the anvil of a mature CB.',
  reference: 'AIP ENR 1.5 / BOM CB guidance'
},

{
  question: 'The IFR significance of a TAF (aerodrome forecast) is that it:',
  options: [
    'It is a product intended only for VFR flight-planning purposes, and not used for IFR planning',
    'A forecast for a specific aerodrome, used to judge approach feasibility at ETA and the need for an alternate',
    'Is a product that is entirely replaced by pilot reports for IFR planning purposes',
    'Is a product that supplies only the forecast wind information for an IFR flight'
  ],
  correct: 1,
  explanation: 'A TAF is the aerodrome forecast used in IFR planning to judge whether conditions at the destination will be above minima at ETA, whether an alternate is required, and whether alternate minima are met. Check that its validity covers the arrival window; amended TAFs are issued when conditions change significantly.',
  reference: 'AIP GEN 3.5 — TAF'
},

{
  question: 'An IFR TAF includes "TEMPO FM1400 3000 -RA BKN008" — the significance for an IFR approach at 1430 is:',
  options: [
    'No real significance, since TEMPO means it is only a temporary improvement',
    'TEMPO conditions can be ignored for IFR planning',
    'BKN008 means broken cloud at 8,000 ft',
    'From 1400, temporarily expect 3 km visibility in light rain with broken cloud at 800 ft'
  ],
  correct: 3,
  explanation: 'TEMPO: temporary fluctuations lasting less than one hour each, total time less than half the forecast period. "TEMPO FM1400 3000 -RA BKN008": from 1400, temporary 3,000m visibility, light rain, broken cloud at 800 ft AGL. At 1430, these conditions may exist — 800 ft cloud base may be at or below many approach minima. Must consider alternate requirement and carry appropriate fuel.',
  reference: 'AIP GEN 3.5'
},

{
  question: 'Low-level wind shear is most hazardous during:',
  options: [
    'High-altitude cruise flight, well above the terminal area and clear of all of the terrain',
    'The climb through about FL100 shortly after departure',
    'Only helicopter operations, with no effect on aeroplanes',
    'Approach and landing, near the ground'
  ],
  correct: 3,
  explanation: 'On approach the aircraft is slow and high-drag with little excess energy. A headwind-to-tailwind shear first lifts the aircraft above path (airspeed rises), then causes a sudden airspeed and altitude loss and an undershoot risk. A wind-shear alert or AIREP should prompt a go-around, and a shear margin is added to approach speed.',
  reference: 'AIP ENR 1.5 — wind shear'
},

{
  question: 'A microburst is particularly dangerous for an IFR aircraft because:',
  options: [
    'Microbursts affect only aircraft operating below about 200 ft AGL',
    'Microbursts are easily and reliably detected on standard airborne weather radar',
    'Microbursts occur only over water and never form over land areas',
    'A brief, intense downburst giving a headwind gain then a rapid tailwind loss of airspeed'
  ],
  correct: 3,
  explanation: 'A microburst is a small (about 0.5-3 nm), intense downburst. Crossing it, the aircraft meets an increasing headwind (airspeed up, may climb), then the core downdraught, then a tailwind with rapid airspeed and altitude loss; the total change can exceed 50 kt over under a mile, and recovery may be impossible low down. Full power and go-around are essential.',
  reference: 'AIP ENR 1.5 — microburst'
},

{
  question: 'Convective SIGMETs (for CB/TS) should be obtained:',
  options: [
    'Only during the summer months of the year, and not at any other time of year',
    'Obtained in planning and updated in flight via VOLMET, ATIS or datalink, as it changes fast',
    'Only for flights that are conducted over oceanic areas',
    'Only for jet aircraft when operating above FL200 en-route'
  ],
  correct: 1,
  explanation: 'Convective weather is highly dynamic, a clear corridor can close in minutes, so SIGMETs for CB/TS are obtained in planning and updated in flight (VOLMET, ATIS, ATC, onboard radar). The forecast should never be assumed still valid without checking for updates.',
  reference: 'AIP GEN 3.5 — SIGMET'
},

{
  question: 'In-flight icing — the correct action when encountering unexpected icing is:',
  options: [
    'Maintain altitude and report to ATC',
    'Increase airspeed to try to shed the accreted ice through aerodynamic forces',
    'Reduce power and descend slowly through the icing layer',
    'Activate all available ice protection equipment immediately, request a different altitude'
  ],
  correct: 3,
  explanation: 'Icing encounter: (1) Activate ice protection immediately (pneumatic boots, anti-ice heat); (2) Note icing intensity (trace, light, moderate, severe); (3) Request altitude change — colder air above may have less moisture; warmer air below (above freezing) will melt ice; (4) Advise ATC; (5) File an AIREP; (6) Consider diversion. Do not wait — ice accumulates rapidly. Severe icing: immediate escape required.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'Mountain-wave turbulence can be encountered:',
  options: [
    'Downstream of mountains for hundreds of kilometres at altitude, the rotor zone below the crests being most severe',
    'Only in the air lying directly over the mountain ridge crest, not anywhere downstream along the lee',
    'Only at levels below the tops of the associated orographic cloud',
    'Only during the winter months of the year, never in the warmer seasons'
  ],
  correct: 0,
  explanation: 'When stable air crosses a range with sufficient wind, waves propagate downstream for hundreds of kilometres and can reach high levels. The rotor below the wave crests holds the most severe, disorganised turbulence, while the crests are smoother but contain very strong vertical currents; associated CAT can extend to high flight levels.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'The tropopause significance for IFR high-altitude operations is:',
  options: [
    'The tropopause is essentially irrelevant to IFR operations',
    'The tropopause marks the absolute maximum altitude at which IFR flight is permitted',
    'Above the tropopause, airframe icing becomes more severe',
    'The tropopause marks the top of the troposphere where temperature stops decreasing with altitude'
  ],
  correct: 3,
  explanation: 'Tropopause: temperature lapse ceases, marks top of weather (most). IFR significance: (1) CAT most common near the tropopause — temperature gradients and wind shear at jet stream level; (2) The jet stream is located at/near tropopause; (3) Above tropopause (stratosphere): temperature increases with altitude; severe turbulence less common but volcanic ash can reside there. High-altitude flight plans route around/below CAT areas.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'An AIREP (in-flight weather report) is valuable for IFR because it:',
  options: [
    'Gives real-time reports of the conditions encountered at a place, level and time',
    'Replaces the official weather forecasts for IFR planning',
    'It is filed only by commercial operators on the day, and never by any private pilots',
    'Is useful only for flight conducted under the VFR'
  ],
  correct: 0,
  explanation: 'AIREPs report the conditions a crew actually meets (icing, turbulence, cloud, wind) at a given place, level and time, often the most current data between scheduled observations. Pilots should use available AIREPs and file their own when significant conditions are met.',
  reference: 'AIP GEN 3.5 — in-flight reports'
},

{
  question: 'The SIGWX (significant weather) chart for high-level IFR planning shows:',
  options: [
    'Only the forecast upper wind information across the area at high level',
    'Only low-level weather features lying below 10,000 ft',
    'Only the weather lying over the oceanic flight sectors and the remote routes at altitude',
    'Significant high-level weather such as jet streams, areas of CAT, CB/TS, tropopause height and icing'
  ],
  correct: 3,
  explanation: 'A high-level SIGWX chart depicts CB/TS areas and tops, severe-turbulence (CAT) areas, severe icing, jet streams (position, level and maximum wind), tropopause heights and volcanic ash, so high-level IFR routes can be chosen to avoid the major hazards.',
  reference: 'AIP GEN 3.4 / BOM SIGWX'
},

{
  question: 'Radiation fog is most likely to affect IFR departures:',
  options: [
    'During summer afternoons, in the warmest and most convective part of the whole day',
    'Early morning after a clear, calm night',
    'Only at coastal aerodromes that lie immediately close to the open sea',
    'Only during the winter season, and then only above about 3,000 ft AMSL'
  ],
  correct: 1,
  explanation: 'Radiation fog forms overnight and early morning after a clear night with light wind and moist air, as the ground radiates heat and cools the air to its dew point. It is dense and shallow and can drop visibility to near zero at aerodrome level, usually burning off as the sun heats the surface.',
  reference: 'BOM meteorology / AIP GEN 2.2'
},

{
  question: 'Advection fog differs from radiation fog for IFR planning because:',
  options: [
    'Advection fog is less dense than radiation fog',
    'Advection fog only forms at sea',
    'Advection fog is caused by moist warm air moving over a cooler surface',
    'Advection fog reliably clears by about 1000 hours local time'
  ],
  correct: 2,
  explanation: 'Advection fog: warm moist air advects (moves) over a cool surface — common on coastal areas when onshore winds bring maritime air over a cool land surface or ocean current. Can cover hundreds of square kilometres, persist all day regardless of solar heating, and develop rapidly. Coastal aerodromes (e.g. Sydney, Melbourne) regularly experience advection fog. Unlike radiation fog it does not burn off predictably.',
  reference: 'BOM meteorology'
},

{
  question: 'On a given ILS approach, the published straight-in DA is:',
  options: [
    'Lower for higher-category (faster) aircraft, to give them more room',
    'Set individually by each pilot according to the aircraft weight on the day',
    'Always exactly 200 ft above the threshold at every aerodrome worldwide',
    'The same regardless of aircraft category, while circling minima increase with category'
  ],
  correct: 3,
  explanation: 'The straight-in DA/MDA for a procedure does not change with aircraft category. What varies by category (A to E) is the circling minima and the speed-related visibility values, so a Cat A and a Cat C aircraft fly the same straight-in DA but different circling minima.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The theoretical maximum range of a VHF aid such as a VOR depends mainly on:',
  options: [
    'The line-of-sight distance, increasing with the height of both the aircraft and the transmitter',
    'The transmitter power alone, independent of the aircraft altitude flown',
    'The frequency that is selected, with lower frequencies always giving the greater range',
    'The magnetic variation between the aircraft and the ground station'
  ],
  correct: 0,
  explanation: 'VHF is line-of-sight, so usable range grows with the height of the aircraft and of the transmitter; a common approximation is 1.23 times the sum of the square roots of the two heights in feet, giving range in nm. Within the rated coverage the signal is reliable.',
  reference: 'AIP GEN 1.5 / ENR 4.1'
},

{
  question: 'Cold-temperature correction to approach altitudes is applied:',
  options: [
    'When the aerodrome temperature is below 0 degrees, the correction growing with the depression below ISA',
    'Only when the aerodrome temperature falls below minus 20 degrees Celsius',
    'Never, since the cold-temperature corrections are considered entirely optional for the pilot to apply',
    'Only for jet aircraft when operating above FL100 on the approach'
  ],
  correct: 0,
  explanation: 'When the aerodrome temperature is below 0C, corrections from the AIP/ICAO table are ADDED to procedure altitudes, the MDA/DA and missed-approach altitudes. The correction increases with the temperature depression below ISA and with height above the aerodrome.',
  reference: 'AIP ENR 1.5 / ICAO cold-temperature tables'
},

{
  question: 'A METAR used for IFR approach planning should be:',
  options: [
    'Issued within the previous 6 hours for it to be considered acceptable for IFR planning use',
    'As current as possible, with the observation time noted',
    'Issued within the last 30 minutes in order to be valid for any IFR approach',
    'Not used for IFR planning, since only TAFs are relevant'
  ],
  correct: 1,
  explanation: 'A METAR (or SPECI) gives the most recent observed conditions to compare against minima. Note the observation time; if it is old, request an update from ATC or ATIS, since conditions may have changed. A SPECI is issued when conditions cross significant thresholds.',
  reference: 'AIP GEN 3.5 — METAR'
},

{
  question: 'Freezing rain (FZRA) encountered on an IFR approach should prompt:',
  options: [
    'Continuing the approach with the anti-ice system merely selected',
    'An immediate go-around and avoidance, as freezing rain builds clear ice very fast',
    'Slowing to the minimum approach speed to reduce the ice accretion rate',
    'Treating it as manageable, since it affects only unheated surfaces'
  ],
  correct: 1,
  explanation: 'Freezing rain is supercooled large droplets that freeze on contact, building clear ice extremely rapidly on unprotected surfaces, beyond the capacity of most ice-protection systems (few are certified for it). The correct response is to escape immediately and divert, not continue the approach.',
  reference: 'BOM meteorology / CASA icing guidance'
},

{
  question: 'The wind component "crosswind" limitation for IFR approaches:',
  options: [
    'There are no crosswind limits for IFR instrument approaches',
    'Demonstrated crosswind limits are published in the AFM, exceeding the demonstrated limit is not approved',
    'The standard crosswind limit for all IFR aircraft is a fixed 20 kt',
    'Crosswind only matters once the aircraft has broken out of cloud and become visual'
  ],
  correct: 1,
  explanation: 'Crosswind limits: AFM/POH publishes demonstrated crosswind component. In IMC, crosswind is more hazardous as there is no visual horizon, the aircraft must maintain instrument scan while correcting for drift, and at DA/H the transition to visual may reveal unexpected drift. Strong gusty crosswind in IMC: consider going around and waiting for conditions to improve.',
  reference: 'CASR Part 91 / AFM limitations'
},

{
  question: 'Upper wind forecasts (winds aloft) are used in IFR flight planning to:',
  options: [
    'Calculate true airspeed, groundspeed, fuel burn, ETA, and determine optimum cruise altitude',
    'Determine ground-based wind speeds only',
    'Winds aloft are only ever used for weather avoidance, and not for the flight planning',
    'Upper winds are not available in Australia for IFR planning'
  ],
  correct: 0,
  explanation: 'Upper wind forecasts (available from BOM for flight levels): used for: groundspeed and ETA calculation; fuel planning; choosing optimum altitude (strong tailwind may justify a lower/higher than standard level); identifying jet stream position; and turbulence assessment (strong wind shear = CAT risk). Upper winds are typically reported as true direction and knots for each flight level.',
  reference: 'AIP GEN 3.4 / BOM upper wind forecasts'
},

{
  question: 'A TAF group \'BECMG 1416 VRB05KT 9999 BKN030\' means:',
  options: [
    'A temporary improvement occurring only between 1400 and 1600 hours, then reverting',
    'Variable wind at 5 kt with broken cloud at 30,000 ft, forecast to last permanently',
    'Between 1400 and 1600 weather becomes variable wind 5 kt, 10 km plus visibility, broken cloud at 3,000 ft',
    'Conditions that are forecast to deteriorate steadily right through the 1400 to 1600 period'
  ],
  correct: 2,
  explanation: 'BECMG denotes a permanent change to the stated conditions occurring between the times given (1400-1600). After that the conditions are variable wind 5 kt, visibility 10 km or more (9999), broken cloud at 3,000 ft AGL. For an ETA after 1600, plan on these conditions.',
  reference: 'AIP GEN 3.5 — TAF'
},

{
  question: 'A METAR reporting \'OVC006\' means, for IFR operations:',
  options: [
    'Overcast cloud at 60,000 ft above the aerodrome elevation',
    'Overcast at 600 ft AGL',
    'Overcast cloud that is covering 6 oktas of the sky',
    'Overcast cloud at 6,000 ft above the ground level'
  ],
  correct: 1,
  explanation: 'OVC = overcast (8 oktas) and 006 = 600 ft AGL (the figure times 100). At 600 ft the ceiling may be above an ILS DA (about 200 ft) but below a non-precision MDA (e.g. 700 ft). The cloud base must be above the relevant minimum for the approach to succeed.',
  reference: 'AIP GEN 3.5 — METAR'
},

{
  question: 'Clear-air turbulence around a jet stream is most severe:',
  options: [
    'In the very core of the jet stream itself, where the prevailing winds are at their strongest',
    'On the cold side and below the jet core',
    'Spread evenly all around the jet stream in every direction',
    'Only above the jet stream, and never below the jet core'
  ],
  correct: 1,
  explanation: 'CAT is worst on the cold (poleward) side and below the jet core, where the temperature and wind-shear gradients are greatest. Routing on the warm side reduces exposure; SIGWX charts show CAT areas and AIREPs help others avoid it.',
  reference: 'BOM meteorology / AIP ENR 1.5'
},

{
  question: 'The "dew point spread" (temperature minus dew point) indicates:',
  options: [
    'The likelihood of thunderstorm development',
    'The relative humidity, with a spread of 2°C or less indicating near-saturation',
    'The wind chill factor',
    'Dew point spread is used only for the runway surface condition assessment on the day'
  ],
  correct: 1,
  explanation: 'Dew point spread: the difference between temperature and dew point. Spread of 2°C or less = high risk of fog, low cloud, mist. Spread = 0 = saturated air = fog or cloud. In IFR planning: if aerodrome temperature/dew point spread is forecast to narrow to 2°C or less during the intended arrival time, low visibility conditions are possible.',
  reference: 'BOM meteorology / AIP GEN 2.2'
},

{
  question: 'On a TAF, the difference between INTER and TEMPO variations is:',
  options: [
    'INTER and TEMPO mean the same thing and may be used interchangeably',
    'TEMPO variations each last less than 30 minutes, while INTER variations last longer',
    'INTER applies to wind only, while TEMPO applies to visibility only',
    'INTER variations last under 30 minutes each, while TEMPO variations last 30 minutes up to an hour'
  ],
  correct: 3,
  explanation: 'INTER (intermittent) denotes fluctuations expected to last less than 30 minutes each; TEMPO (temporary) denotes fluctuations of 30 minutes up to an hour each. They drive holding and alternate decisions: thunderstorms forecast INTER require 30 minutes holding fuel, TEMPO 60 minutes.',
  reference: 'AIP GEN 3.5 / BOM'
},

{
  question: 'A SPECI (special observation) is issued when:',
  options: [
    'A SPECI permanently replaces the normal routine METAR observation schedule at the aerodrome involved',
    'SPECIs are issued only at the major international airports',
    'A SPECI is issued only when it is specifically requested by ATC',
    'Conditions change significantly between routine observations, such as visibility crossing a defined threshold'
  ],
  correct: 3,
  explanation: 'A SPECI is issued when conditions change significantly between routine observations, for example visibility crossing 800/1500/3000/5000 m thresholds, the onset of wind shear or a thunderstorm, or a major cloud change, warning that conditions may now be below (or back above) minima. Note its observation time.',
  reference: 'AIP GEN 3.5 / ICAO Annex 3'
},

{
  question: 'The effect of cold temperature on the ILS glideslope intercept altitude is that:',
  options: [
    'Warmer temperatures make the glideslope intercept higher than the published standard angle',
    'Temperature has no effect on the ILS glideslope',
    'Hot temperatures make the glideslope descend below the runway level',
    'In cold air the glideslope intercept altitudes are geometrically lower than the chart figures indicate'
  ],
  correct: 3,
  explanation: 'The glideslope beam angle is fixed, but the chart crossing altitudes are QNH altitudes that, in cold air, are geometrically lower than indicated, so an aircraft on the glideslope is lower than the chart figures suggest. PAPI may read high when on the ILS in cold conditions; use the glideslope as the primary vertical reference.',
  reference: 'AIP ENR 1.5 / ICAO cold-temperature guidance'
},

{
  question: 'The concept of "conditional forecasts" (TEMPO, BECMG, PROB) in TAFs means:',
  options: [
    'These conditional elements are in fact the most reliable parts of the whole aerodrome TAF',
    'TEMPO, BECMG and PROB groups modify the base forecast',
    'Only the BECMG elements have any effect on IFR flight planning',
    'PROB30 conditions may be ignored entirely for IFR planning purposes'
  ],
  correct: 1,
  explanation: 'For IFR alternate planning: if any TAF element (including TEMPO or PROB30/40) indicates conditions may fall below landing minima during the planned arrival window, consider carrying alternate fuel. PROB30 = 30% probability; PROB40 = 40%. Operators and regulations differ — some require alternates if TEMPO/BECMG shows below minima; others require it only for BECMG and TEMPO, not PROB30. Check applicable regulations.',
  reference: 'AIP GEN 3.5 / CASR Part 91'
},

{
  question: 'The ISA sea-level temperature and lapse rate used in IFR planning are:',
  options: [
    '25 degrees at sea level, with a lapse rate of about 3 degrees per 1,000 ft up to the tropopause',
    '0 degrees at sea level, with a lapse rate of 1 degree per 1,000 ft',
    '15 degrees at sea level, with no standard lapse rate defined',
    '15 degrees at sea level with a lapse rate of about 2 degrees per 1,000 ft to the tropopause near 36,000 ft'
  ],
  correct: 3,
  explanation: 'ISA is 15C and 1013.25 hPa at sea level, with a lapse rate of 1.98C (about 2C) per 1,000 ft to the tropopause near FL360 (-56.5C). It underpins density-altitude, performance, freezing-level and pressure-altitude calculations, with ISA deviation describing the actual temperature relative to standard.',
  reference: 'ICAO Standard Atmosphere / AIP GEN 2.1'
},

{
  question: 'RVSM requirements in Australian airspace apply within the band:',
  options: [
    'From FL180 up to FL290, where most jet traffic operates en-route',
    'From FL290 to FL410 inclusive',
    'From FL245 up to FL600, covering the whole of the upper airspace',
    'Above FL410 only, where the traffic density is at its greatest'
  ],
  correct: 1,
  explanation: 'RVSM applies from FL290 to FL410 inclusive, where approved aircraft are separated vertically by 1,000 ft instead of 2,000 ft, increasing the usable levels.',
  reference: 'MOS 7.1.1 / AIP GEN 1.5'
},

{
  question: 'Low-level wind-shear alert systems (LLWAS) at major aerodromes provide:',
  options: [
    'Only the departure wind information for the currently active runway',
    'Measurements of the upper-level winds only, and not the surface winds',
    'Nothing useful in Australia, since the LLWAS systems are not installed anywhere here',
    'Real-time detection of surface wind variations between sensors placed around the aerodrome perimeter'
  ],
  correct: 3,
  explanation: 'An LLWAS is a network of perimeter wind sensors; when the variation between them exceeds a threshold, ATC issues a wind-shear alert with the boundary wind. The pilot adds a margin to approach speed, briefs a go-around and stays ready to execute it; Doppler radar also detects microbursts at some aerodromes.',
  reference: 'AIP AD / ICAO wind-shear guidance'
},

{
  question: 'The "lifting condensation level" (LCL) in IFR meteorology represents:',
  options: [
    'The altitude at which rising air reaches its dew point and condensation begins',
    'The maximum altitude at which any IFR operations may be conducted',
    'The altitude of the freezing level in the atmosphere',
    'The altitude at which jet streams typically form'
  ],
  correct: 0,
  explanation: 'LCL: the altitude at which a rising parcel of air cools to its dew point, condensation begins, and cloud base forms. A low LCL (small temp/dew point spread) = low cloud bases = IFR conditions possible. A high LCL with deep instability = high-based CB with severe turbulence at altitude. LCL is used to estimate cumulus/CB base heights in forecasting.',
  reference: 'BOM meteorology'
},

{
  question: 'Instrument meteorological conditions (IMC) at a non-controlled aerodrome require:',
  options: [
    'No special procedures apply, since pilots may land there at any time whenever they choose',
    'Only a VFR licence is required for IMC operations at uncontrolled aerodromes',
    'The pilot must hold an instrument rating with currency, the aircraft must be IFR equipped, a flight plan must be filed',
    'IMC operations are not permitted at non-controlled aerodromes'
  ],
  correct: 2,
  explanation: 'IMC at non-controlled aerodrome: requires current instrument rating and currency, IFR-equipped aircraft, flight plan filed (activating SAR coverage and providing traffic information), available published instrument approach procedure, and self-announced positions on CTAF. Without a published approach, an IFR descent to aerodrome is not authorised unless visual descent from MSA is possible.',
  reference: 'CASR Part 61 / CASR Part 91 / AIP ERSA'
},

{
  question: 'The VOR (VHF Omnidirectional Range) provides:',
  options: [
    'Distance and bearing to the station together, presented as a single combined readout',
    'Magnetic bearing from the station, with the OBS selecting the radial and the CDI showing deviation',
    'Vertical guidance for a precision approach to the runway',
    'Aircraft position directly in latitude and longitude'
  ],
  correct: 1,
  explanation: 'A VOR gives magnetic bearing information as radials from the station. The OBS selects the desired radial, the CDI shows left/right deviation, and the TO/FROM flag shows whether the selected course leads to or from the station. One VOR gives a position line; two give a fix.',
  reference: 'AIP ENR 4.1 — VOR'
},

{
  question: 'Full-scale deflection of a VOR CDI represents:',
  options: [
    'A fixed distance of 5 nm off the course, regardless of the slant range to the station',
    'Plus or minus 2 degrees from the selected course at the CDI extremes',
    'A value that varies with the aircraft\'s distance from the station',
    'Plus or minus 10 degrees from the selected course, about 2 degrees per dot, constant at any distance'
  ],
  correct: 3,
  explanation: 'VOR CDI sensitivity is angular and constant: full scale is about plus or minus 10 degrees from the selected course, roughly 2 degrees per dot. Unlike a localiser it does not narrow with range, so 10 degrees represents a far greater physical distance far from the station than close in.',
  reference: 'AIP ENR 4.1 — VOR'
},

{
  question: 'Where the forecast area QNH is used for an instrument approach (no closer QNH available), the published minima must be:',
  options: [
    'Used unchanged, since the area QNH is treated as an accurate aerodrome QNH',
    'Decreased by 100 ft, to allow for the area QNH tolerance on the approach',
    'Increased by 50 ft, because the area QNH is less precise than a local QNH',
    'Replaced entirely by the standard 1013 hPa setting for the whole approach'
  ],
  correct: 2,
  explanation: 'Before the IAF the pilot sets the actual aerodrome QNH, the forecast aerodrome (TAF) QNH, or the forecast area QNH. When the forecast area QNH is used the minima are increased by 50 ft; setting an actual aerodrome QNH where charts assume forecast QNH allows a 100 ft reduction.',
  reference: 'AIP ENR 1.5 5.3 / Part 91 MOS 14.03'
},

{
  question: 'To operate in RVSM airspace, approval is required for:',
  options: [
    'Both the aircraft and the operator, with appropriately trained crew',
    'The aircraft only, since its equipment provides the accuracy',
    'The operator only, as a company-level authorisation to enter',
    'Neither, provided the aircraft carries a serviceable transponder'
  ],
  correct: 0,
  explanation: 'RVSM approval covers the aircraft\'s height-keeping capability, the operator, and crew training and procedures (CASR 91.655); a serviceable transponder alone is not enough.',
  reference: 'MOS 7.1.2 / AIP GEN 1.5 / CASR 91.655'
},

{
  question: 'An RVSM-approved aircraft must carry, for height-keeping accuracy:',
  options: [
    'Just a single altimeter together with one serviceable transponder for the flight',
    'A radio altimeter and a weather radar for use in the cruise',
    'An approved GNSS receiver acting as the sole height reference',
    'Two independent altimetry systems, an automatic altitude-keeping system and altitude alerting'
  ],
  correct: 3,
  explanation: 'RVSM aircraft carry two independent altitude-measuring systems, an automatic altitude-keeping system able to hold the level, and altitude alerting, so the assigned level is held within the tight RVSM tolerance.',
  reference: 'MOS 7.1.3 / AIP GEN 1.5'
},

{
  question: 'A non-RVSM-approved aircraft that must transit the FL290-FL410 band will be:',
  options: [
    'Permitted to use 1,000 ft separation just like approved aircraft',
    'Separated from all other traffic by 2,000 ft vertically',
    'Refused any clearance into that band under all circumstances',
    'Required only to squawk a discrete code and then self-separate'
  ],
  correct: 1,
  explanation: 'A non-approved aircraft is separated by 2,000 ft from other traffic in the band, since it cannot be assured of holding the level to RVSM accuracy; ATC accommodates it with the larger separation where traffic permits.',
  reference: 'MOS 7.1.2 / AIP GEN 1.5'
},

{
  question: 'If an RVSM-approved aircraft loses the redundancy needed for RVSM while in the band, the pilot should:',
  options: [
    'Continue at the assigned level, since one system is sufficient',
    'Descend immediately below FL290 without advising ATC',
    'Advise ATC and request a level outside the RVSM band or increased separation',
    'Switch off the transponder to prevent a conflicting altitude readout'
  ],
  correct: 2,
  explanation: 'Losing RVSM capability means the level can no longer be assured to RVSM accuracy, so the pilot tells ATC and requests a level outside the band or greater separation; continuing silently or descending without a clearance is unsafe.',
  reference: 'MOS 7.1.5 / AIP GEN 1.5'
},

{
  question: 'Tracking from an area of high QNH into an area of significantly lower QNH without updating the altimeter setting, the aircraft will be:',
  options: [
    'Lower than the altitude indicated, because the altimeter over-reads',
    'Higher than the altitude indicated, because the altimeter under-reads when in the lower pressure air',
    'At exactly the altitude indicated, since changes in QNH do not affect the reading',
    'Unable to indicate any altitude until a current QNH has been set'
  ],
  correct: 0,
  explanation: 'An altimeter left on an old, higher QNH over-reads as the aircraft moves into lower-pressure air, so the true altitude is lower than indicated, the basis of from high to low, look out below. Below the transition altitude the IFR pilot resets to the local QNH within 100 nm or the area QNH.',
  reference: 'AIP ENR 1.7'
},

{
  question: 'Quadrantal error in an ADF/NDB system is caused by:',
  options: [
    'The pilot selecting the wrong frequency on the ADF receiver before the bearing is used',
    'Night-time ionospheric refraction affecting the LF/MF ground-wave signal',
    'Coastal refraction as the signal crosses a coastline obliquely',
    'The metal fuselage re-radiating the signal and distorting the bearing, greatest near 45 degrees off the nose'
  ],
  correct: 3,
  explanation: 'The fuselage acts as a secondary radiator that distorts the loop antenna\'s directional sense. The error is greatest when the beacon is about 45 degrees off the nose and least beam-on or dead ahead/astern; compensator coils reduce it but some residual error means NDB bearings are treated as approximate.',
  reference: 'AIP ENR 4.1 — ADF'
},

{
  question: 'The key difference between an RNAV system and an RNP system is that an RNP system:',
  options: [
    'Uses only ground-based navigation aids to compute its position',
    'Provides on-board performance monitoring and alerting of navigation accuracy',
    'Does not require any satellite positioning to operate',
    'Can be used only in oceanic airspace and never on an approach'
  ],
  correct: 1,
  explanation: 'RNP is RNAV with on-board performance monitoring and alerting: the system continuously checks its own navigation performance and warns the crew if it can no longer meet the required accuracy. Plain RNAV has no such self-monitoring.',
  reference: 'MOS 6.1.1'
},

{
  question: 'On a 3-degree approach slope at a groundspeed of 140 kt, the approximate rate of descent required is:',
  options: [
    'About 350 ft per minute',
    'About 700 ft per minute',
    'About 1,050 ft per minute',
    'About 1,400 ft per minute'
  ],
  correct: 1,
  explanation: 'A useful rule for a 3-degree slope is rate of descent equals groundspeed times five. At 140 kt: 140 x 5 = 700 ft/min. The required rate of descent therefore changes directly with groundspeed.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'GNSS position accuracy for IFR approaches depends on:',
  options: [
    'Only the number of satellites that are currently in view',
    'Only the aircraft\'s altitude at the particular time',
    'Satellite geometry, satellite count, signal quality, RAIM and the augmentation system',
    'Nothing, since the GNSS accuracy is fixed at plus or minus 10 m everywhere worldwide'
  ],
  correct: 2,
  explanation: 'Accuracy depends on satellite geometry (PDOP), the number of satellites tracked (at least four for 3D), signal quality, RAIM availability for non-precision approaches, and SBAS/GBAS augmentation for approaches with vertical guidance. Pre-flight RAIM prediction is required for IFR.',
  reference: 'AIP ENR 1.5 / ICAO Doc 9613'
},

{
  question: 'At FL100 the outside air temperature is 0 degrees C. Using an ISA lapse of 2 degrees per 1,000 ft, the ISA deviation is:',
  options: [
    'ISA +5',
    'ISA -5',
    'ISA +10',
    'ISA 0'
  ],
  correct: 0,
  explanation: 'ISA temperature at FL100 is 15 minus 2 times 10 = -5 degrees C. The actual OAT of 0 degrees C is 5 degrees warmer than ISA, so the deviation is ISA +5. ISA deviation is used in true-airspeed and performance calculations.',
  reference: 'ICAO Standard Atmosphere / AIP GEN 2.1'
},

{
  question: 'By the one-in-sixty rule, an aircraft 2 nm off the desired track after travelling 60 nm has a tracking error of about:',
  options: [
    'About 1 degree off the desired track',
    'About 5 degrees off the desired track',
    'About 6 degrees off the desired track',
    'About 2 degrees off the desired track'
  ],
  correct: 3,
  explanation: 'The one-in-sixty rule states that 1 nm off track over 60 nm is about 1 degree, so 2 nm off over 60 nm is about 2 degrees. To regain track the pilot doubles the closing angle, or uses angle off equals 60 times distance off divided by distance gone.',
  reference: 'Navigation - one-in-sixty rule'
},

{
  question: 'An RNP AR (authorisation required) approach differs from a standard RNP APCH in that it:',
  options: [
    'Requires no navigation database, being flown purely on the raw GNSS data alone',
    'May be flown by any IFR aircraft without any special approval',
    'Needs specific operator and aircraft authorisation and supports tighter RNP values and curved paths',
    'Is available only to VFR aircraft operating into controlled airspace'
  ],
  correct: 2,
  explanation: 'RNP AR procedures need specific authorisation of the operator and aircraft because they use tighter containment (RNP values below the standard 0.3) and may include curved RF legs close to terrain; they are not available to an aircraft that lacks that authorisation.',
  reference: 'MOS 6.2'
},

{
  question: 'The "FMS" (Flight Management System) for IFR operations must have a current:',
  options: [
    'An annual avionics calibration certificate held on file',
    'Navigation database with current AIRAC cycle, the database must be current for the period of flight',
    'An ATC-issued database approval for the flight',
    'Pilot-entered waypoints that override any need to hold a current navigation database'
  ],
  correct: 1,
  explanation: 'FMS/GNSS navigation database: AIRAC cycle = 28 days. For IFR approaches and procedures, the database must be current (valid AIRAC cycle). Using an expired database for IFR approaches is generally not permitted (some operators have procedures for using a non-current database with restrictions). Current database ensures procedures, navaids, and waypoints reflect the latest published data.',
  reference: 'AIP ENR 1.5 / CASR Part 91'
},

{
  question: 'The ILS marker beacon sequence inbound on a standard ILS is:',
  options: [
    'The middle marker is the first to be reached, and only then is the outer marker reached',
    'Inner marker first, then the middle, then the outer marker',
    'Outer marker about 4-7 nm out, then middle marker about 0.5-1 nm from threshold, then inner marker',
    'Only a single marker is used on modern ILS installations'
  ],
  correct: 2,
  explanation: 'Inbound the order is outer marker (about 4-7 nm, 400 Hz dashes, blue), middle marker (about 0.5-1 nm near DH, 1300 Hz dot-dash, amber), then inner marker (near the threshold, 3000 Hz dots, white, Cat II/III). Many modern installations replace markers with DME or GNSS fixes.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'On an RNP APCH (RNAV GNSS) chart, the LNAV, LNAV/VNAV and LPV minima differ in that:',
  options: [
    'They are three different names for the very same minima',
    'LNAV always gives the lowest minima and LPV always the highest',
    'LNAV is lateral-only to an MDA, while LNAV/VNAV and LPV add vertical guidance to a DA',
    'Only the LNAV line may ever be flown by an aircraft that has no autopilot'
  ],
  correct: 2,
  explanation: 'LNAV is a 2D (lateral-only) approach to an MDA; LNAV/VNAV adds barometric vertical guidance and LPV adds SBAS vertical guidance, both 3D approaches flown to a DA with progressively lower minima.',
  reference: 'MOS 6.2.14 / 6.2.17'
},

{
  question: 'Special alternate weather minima (lower than standard) are available at certain aerodromes only for aircraft that have:',
  options: [
    'A single VHF radio together with a current GNSS database',
    'An autopilot coupled to the approach and a radio altimeter both fitted',
    'Dual ILS/VOR approach capability, with duplicated LOC, GP and VOR plus DME or GNSS',
    'Any GNSS receiver certified for RNP approaches to LNAV minima'
  ],
  correct: 2,
  explanation: 'Special alternate minima, lower than the standard alternate minima, are published for specified approaches at some airports and may be used only by aircraft with dual ILS/VOR capability: duplicated localiser, glidepath and VOR, plus duplicated DME or GNSS (or single DME and single GNSS). They revert to standard minima when local met or the tower service is unavailable.',
  reference: 'AIP ENR 1.5 6.2 / Part 91 MOS 8.08'
},

{
  question: 'The ILS glideslope has a false glideslope at approximately:',
  options: [
    'About 3 degrees above the true glide slope path',
    'About 9 degrees, three times the true angle, giving an excessively steep approach if followed',
    'About 1 degree below the true glide slope path',
    'Nowhere, since false glide slopes do not exist on any modern ILS installation'
  ],
  correct: 1,
  explanation: 'The glideslope signal has lobes; the first false (upper) slope is about three times the true angle (about 9 degrees for a 3-degree ILS). Intercepting from above risks capturing it, so the glideslope is always intercepted from below, level or slightly low.',
  reference: 'AIP ENR 4.1 / ICAO Annex 10'
},

{
  question: 'A Category II ILS approach requires:',
  options: [
    'Only a single pilot who holds a current instrument rating, with no further training or condition required',
    'DH 100-200 ft and RVR 300 m, plus aircraft certification, qualified avionics, and specific crew training and currency',
    'Availability to any aircraft that is fitted with a working ILS receiver',
    'No specific training or currency requirements beyond those needed for CAT I'
  ],
  correct: 1,
  explanation: 'Cat II (DH 100-200 ft, RVR about 300 m) needs an aircraft certified for Cat II with the required avionics (autopilot/flight director, dual receivers), specifically trained and current crew, suitable aerodrome lighting and monitoring, and RVR reporting. It is unavailable at most Australian regional aerodromes.',
  reference: 'AIP ENR 1.5 / Part 91'
},

{
  question: 'A "course reversal" on an instrument approach procedure is used to:',
  options: [
    'Align the aircraft with the final approach course when arriving from a direction opposite to the approach',
    'Allow the aircraft to reverse its course completely and then return to the departure aerodrome',
    'Course reversal is only used for NDB approaches',
    'A course reversal is the same as a missed approach'
  ],
  correct: 0,
  explanation: 'Course reversal: when arriving from the "wrong side" (opposite direction to the final approach), a course reversal reverses the aircraft\\\'s direction onto the final approach track. Types: (1) Procedure turn (PT) — 45° turn then 180° turn back; (2) Racetrack (holding-type) with outbound then inbound; (3) Base turn. No course reversal when "NoPT" published or when radar-vectored to final.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The \'NoPT\' notation on an approach chart means:',
  options: [
    'No additional pilot training is required in order to fly this particular approach',
    'No precision vertical guidance is available on this approach',
    'Night operations are specifically permitted at this aerodrome',
    'No Procedure Turn, so the course reversal is not authorised when arriving via the specified routing'
  ],
  correct: 3,
  explanation: 'NoPT means the procedure turn (course reversal) is neither required nor authorised when arriving via the specified routing (e.g. radar vectors or a nominated STAR); the aircraft proceeds straight in. Flying a procedure turn anyway would take it outside the protected airspace.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An RNP 0.3 designation on an RNAV approach means:',
  options: [
    'The approach requires a minimum aircraft speed of Mach 0.3 throughout the procedure',
    'The approach may only be used within 0.3 nm of the airport itself',
    'An RNP value of 0.3, so the system must keep the aircraft within 0.3 nm of centreline 95% of the time',
    'That exactly three satellites are required to fly the approach'
  ],
  correct: 2,
  explanation: 'RNP 0.3 requires the total system error to stay within 0.3 nm at least 95% of the time, with on-board performance monitoring and alerting (alarm typically at twice the RNP value, here 0.6 nm). Larger RNP numbers are less precise (RNP 4 is oceanic en-route).',
  reference: 'ICAO Doc 9613 / AIP ENR 1.5'
},

{
  question: 'The accuracy of GNSS position for IFR approaches is typically:',
  options: [
    'About plus or minus 10 nm, regardless of the conditions',
    'Exactly plus or minus 1 m at all times, with absolutely no variation',
    'About 10-30 m for standard GPS (95%), improving to about 3-7 m horizontal with SBAS',
    'Exactly the same accuracy as is used for VFR flight'
  ],
  correct: 2,
  explanation: 'Standalone GPS is about 10-30 m horizontal (95%); SBAS improves this to roughly 3-7 m horizontal and 3-5 m vertical, and GBAS gives near precision-approach accuracy. Procedure design and the RNP value account for these errors, and RAIM or SBAS integrity is required for IFR use.',
  reference: 'ICAO Doc 9613 / AIP ENR 1.5'
},

{
  question: 'On an LNAV/VNAV (Baro-VNAV) approach, the vertical path is sensitive to:',
  options: [
    'The aircraft\'s groundspeed as it passes the final approach fix',
    'The local QNH and the outside air temperature, both of which must be valid',
    'The number of GNSS satellites that happen to be in view at the time',
    'The position of the heading bug that is set on the autopilot'
  ],
  correct: 1,
  explanation: 'Baro-VNAV computes the path from barometric altitude, so it needs an accurate local QNH and is affected by temperature; in very cold air the real path is lower, and a published low-temperature limit applies below which Baro-VNAV guidance is not used.',
  reference: 'MOS 6.2.13 / 6.2.17'
},

{
  question: 'A centred VOR CDI (\'on course\') means the aircraft is:',
  options: [
    'On the selected radial, regardless of the actual aircraft heading being flown at the time',
    'Heading directly toward the VOR station at that moment',
    'On the selected course, with the heading possibly differing for drift',
    'Heading exactly equal to the selected OBS value at the time'
  ],
  correct: 2,
  explanation: 'A centred CDI means the aircraft is on the selected radial; in a crosswind it must hold a wind-correction angle, so its heading differs from the course. The CDI shows positional deviation from the radial, not heading error; chasing the needle tends to overshoot.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Transitioning from VOR en-route to an ILS approach, the pilot should:',
  options: [
    'Select the ILS frequency and switch the CDI/HSI to LOC mode before the intercept point',
    'Leave the OBS set to the VOR course throughout the ILS approach',
    'Do nothing, since the radio switches itself from VOR to ILS automatically',
    'Set the OBS to 000 degrees when transitioning to the ILS'
  ],
  correct: 0,
  explanation: 'The pilot tunes and identifies the ILS and ensures the display is in localiser mode, not VOR. The localiser (about plus/minus 2.5 degrees full scale) is far more sensitive than a VOR (plus/minus 10 degrees), so leaving it in VOR mode would make large deviations look small.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Instrument approach obstacle-clearance surfaces assume that:',
  options: [
    'The aircraft is flown using the autopilot only, never by hand',
    'A 500 ft buffer always exists above every obstacle, regardless of the technique flown',
    'The aircraft is flown within the published lateral and vertical tolerances of the procedure',
    'The pilot may deviate freely within the approach segment'
  ],
  correct: 2,
  explanation: 'Protected areas are built around the navigation accuracy and assumed flight technique. Flying outside the lateral or vertical tolerances, e.g. more than a dot off below MDA or descending early at a step-down, can place the aircraft in terrain not assessed for clearance.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The ADF relative bearing is:',
  options: [
    'The magnetic bearing measured directly from the aircraft straight across to the NDB ground station',
    'The clockwise angle from the nose to the NDB, added to the heading to give the magnetic bearing',
    'The bearing measured from the NDB station back toward the aircraft',
    'The track the aircraft must fly to reach the NDB station'
  ],
  correct: 1,
  explanation: 'Relative bearing is the angle measured clockwise from the aircraft\'s nose to the NDB. Magnetic bearing to the station = magnetic heading + relative bearing (subtract 360 if over). For example, heading 090 with RB 270 gives 360, due north.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'Flying an RNP APCH to LNAV minima with a receiver that is not SBAS-augmented requires:',
  options: [
    'RAIM, or an equivalent fault-detection function, to be available',
    'A continuous datalink connection maintained to the ATC unit',
    'Two independent VOR receivers operating as a cross-check',
    'No integrity checking, since GNSS is always fully reliable'
  ],
  correct: 0,
  explanation: 'Without SBAS, the receiver relies on RAIM to detect a faulty satellite signal; RAIM must be available, confirmed by pre-flight prediction, for the approach to be flown. SBAS provides the integrity where it is available.',
  reference: 'MOS 6.2.7 / 6.2.11 / 4.2.5'
},

{
  question: 'Radar-vectored to the ILS with \'turn right heading 280, intercept localiser, cleared ILS runway 25\', the pilot should:',
  options: [
    'Turn to 280, intercept and track the localiser inbound, check glideslope capture, and fly the approach to DH',
    'Turn to heading 280 and then immediately turn again to 250 to take up the assigned runway heading',
    'Request a holding pattern before intercepting the localiser',
    'Set OBS 250, arm the approach, but not descend until the outer marker'
  ],
  correct: 0,
  explanation: 'Turn to the assigned 280 heading, tune and identify the ILS, intercept the localiser as the CDI centres and track inbound (about 250 with any wind correction), confirm glideslope capture (not descending below the assigned altitude until established and cleared), complete the checks and fly to DH.',
  reference: 'AIP ENR 1.1 / ENR 1.5'
},

{
  question: 'On an approach chart, the aircraft \'CAT\' (category) refers to:',
  options: [
    'The maximum certified landing weight category as it is assigned by CASA to the type',
    'The weather-minima category for precision approaches, CAT I, II or III',
    'The approach category from Vat (1.3 Vso), Cat A under 91 kt, B 91-120, C 121-140, D 141-165 kt',
    'The level of IFR certification required, basic, intermediate or advanced'
  ],
  correct: 2,
  explanation: 'Aircraft approach category is based on Vat (1.3 times the stall speed in the landing configuration): Cat A under 91 kt, B 91-120, C 121-140, D 141-165, E above 165 kt. The category sets the circling radius and may set different minima. Most light aircraft are Cat A.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'When an RNAV(GNSS) approach chart shows "LNAV/VNAV" minima, this means:',
  options: [
    'The approach requires both a VOR receiver and a GNSS receiver to be used',
    'LNAV guidance only, since the vertical guidance is not available on this particular approach',
    'LNAV/VNAV is exactly the same thing as an ILS Category II precision approach',
    'Lateral navigation by GNSS combined with vertical navigation from barometric VNAV'
  ],
  correct: 3,
  explanation: 'LNAV/VNAV: Lateral Navigation (GNSS) + Vertical Navigation (baro-VNAV). The FMS computes a vertical path using barometric altitude. Classified as APV (APproach with Vertical guidance) — not precision, not non-precision. Uses DA/H (not MDA). Minima typically higher than LPV but lower than LNAV (MDA). Requires FMS with VNAV capability and compatible aircraft certification.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The "LNAV" minima row on an RNAV(GNSS) approach chart is used when:',
  options: [
    'The aircraft has full SBAS (space-based augmentation) capability available',
    'The aircraft cannot achieve LNAV/VNAV or LPV, LNAV provides lateral guidance only',
    'LNAV provides the lowest available minima on the chart',
    'LNAV minima are used only for Category II approaches'
  ],
  correct: 1,
  explanation: 'LNAV (Lateral Navigation) only: the lowest level of RNAV(GNSS) approach. Provides lateral guidance only — no vertical guidance from the avionics. Flown to MDA. Used when SBAS (for LPV) and baro-VNAV (for LNAV/VNAV) are not available or not authorised. LNAV minima are the highest (worst) of the RNAV approach options.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'ILS localiser sensitivity means that, as the aircraft nears the runway:',
  options: [
    'A given needle deflection represents a smaller physical distance from the centreline',
    'The localiser becomes progressively less sensitive near the threshold',
    'The localiser needle begins to display distance to run in nautical miles',
    'A given deflection represents the same physical distance at every range'
  ],
  correct: 0,
  explanation: 'Localiser guidance is angular and the beam narrows toward the runway, so the same needle deflection corresponds to a smaller lateral distance as range decreases; finer corrections are needed on short final, and the localiser is more sensitive than a VOR.',
  reference: 'AIP ENR 4.1 / ICAO Annex 10'
},

{
  question: 'Tracking directly toward a DME station, the distance reduces from 30 nm to 20 nm in 4 minutes. The groundspeed is approximately:',
  options: [
    '100 kt',
    '120 kt',
    '200 kt',
    '150 kt'
  ],
  correct: 3,
  explanation: 'Closing 10 nm (30 to 20) in 4 minutes is 2.5 nm per minute, which is 2.5 times 60 = 150 kt groundspeed. A DME groundspeed check is valid only when tracking directly to or from the station.',
  reference: 'Navigation - DME groundspeed'
},

{
  question: 'The correct instrument cross-check during an ILS approach is:',
  options: [
    'Alternating only between the altimeter and the airspeed indicator throughout the whole approach',
    'Focusing entirely on the localiser CDI and ignoring the glideslope',
    'A rapid scan of the attitude indicator, altimeter, ASI, VSI, heading and both the localiser and glideslope',
    'Watching the glideslope alone and leaving the localiser to the autopilot'
  ],
  correct: 2,
  explanation: 'The attitude indicator is primary (pitch for descent rate, bank for tracking), cross-checked against ASI, altimeter and VSI, while both the localiser and glideslope are monitored. Fixating on one CDI lets the other drift, so a continuous scan is maintained to DH.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'If an approach is annotated \'DME required\' and the DME is unserviceable, the pilot must:',
  options: [
    'Do not conduct it, but divert or fly another procedure that does not need DME',
    'Continue the approach but fly it at a deliberately higher altitude as a precaution',
    'Use GPS distance in place of the required DME without any specific approval',
    'Conduct it at the pilot own discretion if familiar with the aerodrome layout'
  ],
  correct: 0,
  explanation: 'If DME is required for fix identification, the MAP or step-down crossings, the procedure cannot be flown safely without it. The pilot selects an approach not requiring DME, if available, or diverts. Radar advisory information does not substitute for a required DME built into the procedure.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'For a GNSS approach, identification of the procedure is achieved by:',
  options: [
    'Verifying the loaded approach by name, aerodrome and runway',
    'Always identifying the navaids by Morse code regardless of the GNSS',
    'Relying on the GNSS receiver to identify all of the navaids by an automatic cross-check',
    'Skipping identification entirely, since GNSS approaches need none'
  ],
  correct: 0,
  explanation: 'Instead of tuning and identifying a ground aid, the pilot selects the approach from the database and verifies the approach name, aerodrome, runway and currency, and that the displayed position agrees with the chart. The verified database entry substitutes for Morse identification.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'For an IFR flight requiring an alternate: trip fuel 70 min, fuel to the alternate 25 min, fixed reserve 45 min and taxi 5 min. The minimum fuel required, in time, is:',
  options: [
    '145 minutes',
    '120 minutes',
    '115 minutes',
    '95 minutes'
  ],
  correct: 0,
  explanation: 'Minimum fuel = taxi + trip + alternate + fixed reserve = 5 + 70 + 25 + 45 = 145 minutes. IFR company fuel policy expresses fuel in minutes, and the aircraft must not depart with less than this minimum.',
  reference: 'Part 91 MOS 19 / AIP ENR 1.1'
},

{
  question: 'The final reserve fuel for a piston-engined IFR aircraft is:',
  options: [
    '30 minutes of fuel calculated at normal cruise power setting',
    '45 minutes at holding speed at 1,500 ft above destination, the minimum that must remain on landing',
    'One hour of fuel, calculated at the economy cruise power setting for the conditions',
    'A figure equal to 10 per cent of the total trip fuel burn'
  ],
  correct: 1,
  explanation: 'For a piston aircraft the final reserve is 45 minutes at holding speed at 1,500 ft above the destination (or alternate, whichever is higher). It is an absolute minimum, landing with less is an emergency-fuel situation; the turbine figure is 30 minutes.',
  reference: 'Part 91 MOS 19 / AIP ENR 1.1'
},

{
  question: 'A Trend Type Forecast (TTF) appended to a METAR or SPECI is:',
  options: [
    'A 24-hour aerodrome forecast that replaces the TAF entirely',
    'A forecast of the upper winds along the planned route',
    'A long-range outlook that is valid for the next 12 hours',
    'A short-term trend forecast, valid about 3 hours, used for arrival planning'
  ],
  correct: 3,
  explanation: 'A TTF is a trend forecast attached to a routine or special observation at certain aerodromes, valid for about 3 hours and describing expected changes. Where a current TTF is held it may be used in place of the TAF for arrival and alternate planning.',
  reference: 'AIP GEN 3.5 / BOM'
},

{
  question: 'The alternate fuel calculation assumes fuel to:',
  options: [
    'Fly all the way back to the departure aerodrome from the destination missed approach',
    'Add a fixed one-hour fuel quantity to the flight plan total',
    'Fly from the destination missed approach to the alternate and complete an approach and landing',
    'An amount equal to 50 per cent of the planned trip fuel burn'
  ],
  correct: 2,
  explanation: 'Alternate fuel covers flight from the destination (after a missed approach) to the alternate, the approach there and the landing, computed at the expected level with forecast wind and temperature. The routing may not be direct, so airways or SID/STAR distances are allowed for.',
  reference: 'Part 91 MOS 19 / AIP ENR 1.1'
},

{
  question: 'An IFR flight plan\\\'s "fuel endurance" item should reflect:',
  options: [
    'Total usable fuel on board expressed as flying time',
    'Trip fuel only',
    'Only the fuel to reach the alternate',
    'Fuel endurance need not be accurate on IFR flight plans'
  ],
  correct: 0,
  explanation: 'Fuel endurance on flight plan: total usable fuel expressed as hours and minutes of flight. This activates the correct SAR timeline — if the aircraft is overdue, SAR will know approximately when the aircraft ran out of fuel. It is important that fuel endurance is realistic — not an overestimate (delays SAR) or underestimate (triggers premature SAR response). To the point at which final reserve fuel would be exhausted.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The highest obstacle within the protected area of a route segment is 4,250 ft. In non-mountainous terrain, the LSALT for that segment is:',
  options: [
    '4,250 ft',
    '5,000 ft',
    '5,300 ft',
    '6,250 ft'
  ],
  correct: 2,
  explanation: 'Add 1,000 ft obstacle clearance to the highest obstacle (4,250 + 1,000 = 5,250 ft) and round up to the next 100 ft, giving 5,300 ft. In mountainous terrain the buffer is 2,000 ft.',
  reference: 'AIP ENR 1.7 / GEN 3.3'
},

{
  question: 'The difference between LSALT and MEA is that:',
  options: [
    'Nothing, since the LSALT and the MEA are fully interchangeable terms',
    'MEA gives both obstacle clearance and assured navigation-signal reception over the segment',
    'MEA is always lower than the LSALT on a segment',
    'MEA applies to arrivals and LSALT to departures only'
  ],
  correct: 1,
  explanation: 'MEA guarantees both the obstacle clearance (1,000 ft, or 2,000 ft mountainous) and adequate navigation-signal coverage for the whole segment. LSALT provides only the obstacle-clearance component, so at LSALT the navigation signal may be marginal or absent.',
  reference: 'AIP ENR 3.1'
},

{
  question: 'A pilot who calculates fuel at the destination will be 45 minutes above final reserve should:',
  options: [
    'Continue, since 45 minutes above final reserve is adequate, monitoring consumption and reassessing',
    'Declare minimum fuel to ATC straight away as a precaution',
    'Divert to the nominated alternate immediately on reaching it',
    'Treat it as insufficient and land to take on more fuel at an en-route aerodrome along the way'
  ],
  correct: 0,
  explanation: 'Forty-five minutes above final reserve is above the minimum, so the flight continues while consumption is monitored against the plan at checkpoints. If burn is higher than planned, recompute and consider an earlier diversion; \'minimum fuel\' is declared only when no diversion fuel remains.',
  reference: 'Part 91 MOS 19 / fuel management'
},

{
  question: 'The IFR "minimum fuel" declaration to ATC means:',
  options: [
    'The aircraft is declaring a fuel emergency',
    'The aircraft has only 10 minutes of fuel remaining',
    'The aircraft has fuel to complete the flight as planned but has no fuel to divert',
    'Minimum fuel is only ever declared by the commercial air-transport operators'
  ],
  correct: 2,
  explanation: '"Minimum fuel": indicates that fuel state is such that the aircraft must land without undue delay but does not constitute an emergency. ATC should provide the most direct routing and expedite the approach. "Minimum fuel" is NOT a distress call — it is an advisory. If the fuel situation deteriorates to the point where fuel exhaustion before landing is possible, declare a MAYDAY (emergency).',
  reference: 'AIP ENR 1.1 / ICAO procedures'
},

{
  question: 'IFR route selection considers:',
  options: [
    'The shortest distance between the points, and nothing else',
    'Only the first available airway shown on the chart',
    'Airways and off-airway routes, LSALT/MEA, navaid coverage, airspace, alternates and weather avoidance',
    'Nothing, since ATC always assigns the single most optimal route in the clearance anyway'
  ],
  correct: 2,
  explanation: 'Route selection balances directness, fuel, weather and airspace: preferred airways and off-airway segments, LSALT/MEA, navaid coverage, airspace restrictions, alternate placement along the route, and the level that gives the best wind and avoids forecast icing or turbulence.',
  reference: 'AIP ENR 1.1 / ERC'
},

{
  question: 'The critical point (equal time point) on an IFR flight is:',
  options: [
    'The point from which it takes equal time to continue to destination or return to departure or an alternate',
    'The point of no return, beyond which the aircraft cannot get back to its departure point',
    'The point at which the aircraft achieves its maximum range',
    'The geometric midpoint of the route, regardless of the wind'
  ],
  correct: 0,
  explanation: 'The ETP/critical point is where it takes equal time to proceed to the destination or return to departure (or an en-route alternate). With a headwind outbound it lies before the midpoint; with a tailwind, after it. It is a time-based decision point, computed from the home and onward groundspeeds.',
  reference: 'AIP ENR 1.1 / flight planning'
},

{
  question: 'The point of no return (PNR) differs from the ETP in that:',
  options: [
    'Nothing, since the PNR and the ETP are in fact fully interchangeable terms',
    'The PNR is the furthest point from which the aircraft can still return to departure with its reserves',
    'The PNR is always further from departure than the ETP',
    'The PNR applies only to oceanic operations, not domestic ones'
  ],
  correct: 1,
  explanation: 'The PNR is fuel-based: the furthest point from which the aircraft can return to departure and still keep its reserves. The ETP is time-based. With a headwind outbound the PNR is before the ETP; with a tailwind, after it.',
  reference: 'AIP ENR 1.1 / flight planning'
},

{
  question: 'An IFR flight plan shows "F/3+30" in the fuel field — this means:',
  options: [
    'Fuel type F is carried, with a flight time of 3 hours 30 minutes',
    'The planned fuel flow rate is exactly 3.30 litres for every minute that is flown',
    'Fuel endurance of 3 hours 30 minutes total, the total usable fuel expressed as flying time',
    'The fuel on board is 330 litres of usable fuel'
  ],
  correct: 2,
  explanation: '"F/3+30" on a flight plan (ICAO format): fuel endurance = 3 hours 30 minutes. This is the total flying time available from the fuel on board (usable fuel ÷ fuel flow at planned power). SAR uses this to determine when the aircraft would run out of fuel in the event it is overdue. Accuracy is important — a SAR aircraft will not search beyond this time window initially.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The most critical NOTAMs to check for an IFR flight are:',
  options: [
    'Only the published opening and closing hours of the destination aerodrome',
    'Only the weather-related NOTAMs, since all other NOTAMs are merely advisory',
    'Only those NOTAMs affecting aircraft above 5,700 kg maximum take-off weight',
    'Navaid serviceability, procedure amendments, runway or taxiway closures, and airspace restrictions'
  ],
  correct: 3,
  explanation: 'Critical IFR NOTAMs include navaid outages (e.g. ILS unserviceable removes the precision approach), approach/departure procedure amendments, runway or taxiway closures, approach-lighting unserviceability (which raises minima), airspace restrictions and GNSS interference. Check destination and alternate, an outage at the alternate may force a different one.',
  reference: 'AIP GEN 3.1'
},

{
  question: 'The IFR pre-flight weather check requires the pilot to confirm:',
  options: [
    'Only that the departure aerodrome is in VFR conditions',
    'Only the destination weather, since the other conditions along the route do not really matter',
    'Nothing, since weather is only checked for commercial IFR flights',
    'Departure above departure minima, en-route weather acceptable, and destination forecast above minima at ETA'
  ],
  correct: 3,
  explanation: 'The check covers departure (against departure minima), en-route hazards (SIGMET icing, turbulence, CB, winds), the destination forecast at ETA against approach minima, the alternate against alternate minima, and that fuel covers the worst case including holding and the alternate.',
  reference: 'Part 91 MOS / AIP ENR 1.1'
},

{
  question: 'The significance of the ATIS code letter for an IFR arrival is that:',
  options: [
    'It is used by ATC to identify the individual pilot on first radio contact on frequency',
    'The ATIS code letter is required only for departing aircraft',
    'On first contact, the pilot reports the ATIS code letter to confirm receipt of the current ATIS',
    'ATIS code letters are used by ATC for billing purposes'
  ],
  correct: 2,
  explanation: 'The pilot obtains ATIS before calling approach and reports the code letter on first contact; ATC confirms it is current or advises a newer one to obtain. This ensures the pilot has the in-use runway, approach and conditions before being sequenced.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR flight to a destination with no published instrument approach procedure:',
  options: [
    'May descend to circuit height provided the pilot has the aerodrome in sight from the LSALT',
    'May descend below the LSALT only when able to comply with VFR, conducting a visual descent in VMC to land',
    'May conduct a non-precision approach using GPS regardless of publication',
    'Is not permitted under CASR Part 91'
  ],
  correct: 1,
  explanation: 'IFR to aerodrome without instrument approach: the aircraft can fly IFR to the LSALT. If at LSALT the aerodrome is visible and VMC exists (can maintain VMC for the remainder), the pilot can cancel IFR and descend visually (VFR). If VMC cannot be maintained from LSALT, descent is not authorised — the aircraft must hold, divert, or continue to an aerodrome with a published approach.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'IFR departure minima are relevant because they:',
  options: [
    'Set the weather below which an IFR departure may not be authorised at a particular aerodrome',
    'Specify the minimum fuel that is required before an IFR departure',
    'Apply only to commercial air-transport operators, and not to private operations',
    'Do not exist, since no departure minima apply to IFR flights in Australia'
  ],
  correct: 0,
  explanation: 'At some aerodromes a ceiling/visibility must be met before an IFR departure, reflecting the terrain and available return options. Where none is published, standard requirements apply, typically ensuring a visual departure or that the obstacle departure procedure can be flown.',
  reference: 'AIP ENR 1.5 / Part 91'
},

{
  question: 'En-route IFR position reports to ATC (when required) include:',
  options: [
    'Only the aircraft callsign is reported, with no other items required',
    'Position reports are never required in Australian IFR operations',
    'Callsign, position, time over the fix, altitude, the next fix and ETA, then the following fix',
    'Only altitude reports are required, since the aircraft position is continuously tracked by radar'
  ],
  correct: 2,
  explanation: 'IFR position report (non-radar or when ATC requests): "[callsign] over [fix] at [time] [altitude]. Estimating [next fix] at [time]. Next [following fix]." In radar environments, ATC may advise "radar identified, no position reports required" — but altitude reports on reaching cleared level and reports at compulsory reporting points in some areas are still required.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A clearance \'climb to and maintain FL130, expect FL180 15 minutes after departure\' means the aircraft is:',
  options: [
    'Cleared to FL130 and planning for FL180, where the \'expect FL180\' is advisory, not a clearance to climb',
    'Cleared to climb to FL180 immediately after becoming airborne',
    'Required to climb directly to FL180 once it is airborne',
    'Bound by the \'expect FL180\' instruction exactly as if it were already a firm clearance'
  ],
  correct: 0,
  explanation: 'An \'expect\' level lets the crew plan fuel and performance for the anticipated level but is not a clearance; the aircraft stays at FL130 until ATC issues the climb. In the event of radio failure, the expected level is flown at the expected time.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'IFR contingency fuel covers:',
  options: [
    'Extra fuel carried solely for an eventual return trip back to the departure point',
    'Only over-water flights, where it is a special requirement',
    'Unforeseen deviations, weather avoidance, ATC re-routing, or higher-than-planned fuel burn',
    'An amount equal to twice the final reserve fuel'
  ],
  correct: 2,
  explanation: 'Contingency fuel covers unforeseen events: unexpected headwinds, ATC re-routing, weather deviation, higher-than-forecast burn or short holding. It is commonly 5% of trip fuel or the fuel for a few minutes of cruise, whichever is greater, with operators sometimes carrying more.',
  reference: 'Part 91 MOS 19 / ICAO Doc 9976'
},

{
  question: 'When an IFR aircraft is given "direct to" routing by ATC cutting across the filed route:',
  options: [
    'The pilot may accept without checking terrain clearance, ATC is responsible',
    'Direct routing cannot be accepted in IFR',
    'Direct routing is automatically approved as soon as the aircraft has been radar identified by ATC',
    'The pilot must verify the direct routing stays at or above the applicable LSALT or MEA before accepting it'
  ],
  correct: 3,
  explanation: '"Direct to" ATC re-routing: the pilot must check that the new direct track is at or above LSALT/MEA. ATC provides radar services but the pilot must monitor terrain clearance. If the new direct track crosses terrain that requires a higher altitude, advise ATC: "[callsign], confirm [altitude] provides terrain clearance on direct routing — if not request [higher altitude]." Accept only if terrain clearance is confirmed.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'To descend 6,000 ft over a track distance of 15 nm at a groundspeed of 150 kt, the rate of descent required is approximately:',
  options: [
    '1,000 ft/min',
    '600 ft/min',
    '1,500 ft/min',
    '750 ft/min'
  ],
  correct: 0,
  explanation: 'At 150 kt, 15 nm takes 15/150 hour = 6 minutes. Descending 6,000 ft in 6 minutes needs 6,000/6 = 1,000 ft per minute. Rate of descent equals the height to lose divided by the time available.',
  reference: 'Navigation - descent planning'
},

{
  question: 'Why must the effective date of an approach chart be checked before an IFR flight?',
  options: [
    'Charts never expire, so the printed effective date is purely informational',
    'The effective date matters only if a NOTAM has been issued for that aerodrome',
    'Chart dates are advisory only, since published instrument procedures rarely change',
    'Procedures change on the AIRAC date, so an outdated chart may show superseded minima or tracks'
  ],
  correct: 3,
  explanation: 'Instrument procedures change on the 28-day AIRAC cycle (new obstacles, navaid or course changes). An out-of-date chart may show superseded minima, waypoints or tracks, so the chart effective date must match the current AIRAC cycle.',
  reference: 'AIP GEN 3.3 / AIRAC cycle'
},

{
  question: 'A \'Y\' or \'Z\' type IFR flight plan indicates:',
  options: [
    'A composite plan, where Y is IFR then VFR and Z is VFR then IFR',
    'A flight that is coded yellow or zebra, indicating special ATC handling',
    'An experimental or trial flight-plan format used only on very rare occasions',
    'Codes that are not used in Australian flight plans'
  ],
  correct: 0,
  explanation: 'A composite flight plan changes flight rules en-route: Y begins IFR and changes to VFR; Z begins VFR and activates IFR; I is IFR throughout and V is VFR throughout. The transition point and time are specified.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'The "TAS" used for IFR flight planning differs from "IAS" because:',
  options: [
    'TAS is always slower than IAS',
    'TAS corrects IAS for air density changes with altitude',
    'TAS is the airspeed that is used for ATC radio communication',
    'IAS and TAS are the same at every altitude'
  ],
  correct: 1,
  explanation: 'TAS vs IAS: IAS is what the pitot-static system measures (dynamic pressure). TAS = IAS corrected for air density and temperature. At altitude, lower density means higher TAS for same IAS. Approximate: TAS ≈ IAS × (1 + 0.02 × altitude in thousands of feet). For flight planning, TAS (not IAS) is used to calculate groundspeed and ETA with wind. IAS is used for aircraft handling and ATC speed instructions.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR pilot tracking an airway observes that groundspeed is lower than planned, resulting in higher fuel burn per track mile. The correct action is:',
  options: [
    'Increase the power setting to maintain the originally planned schedule to the destination',
    'Continue as planned, variations are expected on IFR flights',
    'Declare minimum fuel immediately to ATC',
    'Recalculate fuel to destination and alternate, then compare the remaining fuel against the required minimum'
  ],
  correct: 3,
  explanation: 'Fuel management: if groundspeed is below plan, fuel at destination will be less than planned. Recalculate: fuel remaining ÷ fuel flow = endurance; compare to required fuel (trip + alternate + final reserve + contingency). If fuel is becoming marginal, earlier diversion is more efficient (closer alternative uses less fuel). Do not wait until minimum fuel — proactive diversion planning is required.',
  reference: 'CASR Part 91 / ICAO fuel management'
},

{
  question: 'The "clearance void time" on an IFR departure clearance means:',
  options: [
    'The time by which the aircraft must land at its destination aerodrome',
    'The time at which the IFR flight plan first becomes active within the ATC computer system',
    'Clearance void times are only issued for international flights',
    'The time by which the aircraft must be airborne, after which the clearance lapses and must be reissued'
  ],
  correct: 3,
  explanation: 'Clearance void time: ATC clears the pilot for IFR departure with a void time (e.g. "clearance void if not airborne by 1435"). If not airborne by 1435, the clearance has expired and cannot be used. The pilot must contact ATC to obtain a new clearance. If radio contact is impossible, the pilot must not depart. If airborne and clearance expires, activate NORDO (7600) procedures.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'ERC (En-Route Chart) designations for IFR airways in Australia use:',
  options: [
    'The letter A is used for all airways regardless of their altitude',
    'Numbers only, no letters are used on ERCs',
    'Airways are not depicted on ERCs, only on TACs',
    'Letters designating airway type and altitude, with B for low-level airways'
  ],
  correct: 3,
  explanation: 'Australian ERC airways: low-level airways use various designators (B, G, R, T, V etc.) for specific route types. Upper airways designated with "A" and number (A1, A464 etc.). Each airway segment shows: track, distance, LSALT or MEA, any altitude restrictions. Pilots choose airways based on direction, altitude requirements, and navaid coverage. ERSA and ERC (L/H) are the primary IFR route documents.',
  reference: 'AIP ENR 3.1 / ERC charts'
},

{
  question: 'The IFR descent checks must include:',
  options: [
    'Only an update of the altimeter pressure setting',
    'Nothing, since the descent checks are entirely optional for single-pilot IFR',
    'Obtain destination ATIS, set the QNH, confirm the approach and runway, and brief the approach',
    'Only a fuel check and the QNH setting for the descent'
  ],
  correct: 2,
  explanation: 'Descent preparation obtains ATIS, sets QNH, confirms the approach and runway, completes the approach briefing, computes approach speeds, checks fuel against plan and reviews the alternate if conditions are near minima, all before the workload rises on approach.',
  reference: 'AIP ENR 1.5 / SOPs'
},

{
  question: 'The holding fuel required for an IFR aircraft holding at FL100 at 180 KTAS:',
  options: [
    'It cannot be calculated without the fuel flow figure from the AFM',
    'Holding fuel is always 10% of the trip fuel regardless of the aircraft type',
    'Holding at FL100 uses the same fuel as cruise',
    'It is calculated from the holding fuel flow times the anticipated hold time'
  ],
  correct: 3,
  explanation: 'Holding fuel calculation: fuel flow at holding altitude and speed (from AFM/POH performance section) × holding time anticipated. Different from cruise fuel flow — holding is typically slower speed, higher configuration drag possible, and different power setting. Always use AFM figures. For planning when hold time is uncertain, use a reasonable estimate (30 min minimum is common) and carry adequate reserves.',
  reference: 'CASR Part 91 / AFM performance data'
},

{
  question: 'A pilot at FL130 should request a level change when:',
  options: [
    'Forecast icing or severe turbulence at FL130 cannot be avoided, fuel favours another level, or ATC requires it',
    'The pilot feels a little uncomfortable at FL130, for no particular operational reason',
    'Never, since level changes are not permitted on IFR flights',
    'Only after the submission of an entirely new flight plan'
  ],
  correct: 0,
  explanation: 'ATC expects a level-change request when conditions warrant, icing, turbulence, a defect, fuel optimisation, or an ATC need, with a stated reason. ATC approves, denies or offers an alternative on traffic. The pilot should not stay in hazardous conditions when a safe level is available.',
  reference: 'AIP ENR 1.1 / Part 91'
},

{
  question: 'The significance of compulsory reporting points on IFR routes is that they:',
  options: [
    'They require a position report even when the aircraft is radar identified',
    'Are reporting points that are used only by the emergency and rescue services en-route',
    'Need a position report only when the aircraft is in radar contact',
    'Apply as compulsory reports only above FL200'
  ],
  correct: 0,
  explanation: 'A compulsory reporting point requires a position report regardless of radar contact, whereas an on-request point is reported only when ATC asks. They sit at significant intersections, boundaries or coverage limits to maintain the traffic picture.',
  reference: 'AIP ENR 1.1 / ERC'
},

{
  question: 'The sector safe altitude (SSA/MSA) on an approach chart is used to:',
  options: [
    'Define the lowest IFR cruising level that happens to be available within that one sector',
    'Define the upper limit for VFR aircraft within each charted sector',
    'An emergency reference altitude giving 1,000 ft clearance when position is uncertain or a descent is needed',
    'It is FL100 in every sector drawn around the navaid'
  ],
  correct: 2,
  explanation: 'The SSA/MSA is a ring (usually 25 nm) around the reference navaid, divided into sectors, each giving 1,000 ft obstacle clearance. It is an emergency reference for position uncertainty or an emergency descent, not a normal operating altitude.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'The instrument rating under CASR Part 61 allows the holder to:',
  options: [
    'Fly any aircraft in any weather conditions, entirely without any restriction',
    'Act as pilot-in-command or co-pilot under the IFR and conduct instrument approaches and departures in IMC',
    'Fly IFR only within Class C airspace and nowhere else',
    'Fly IFR only when a safety pilot is also carried on board'
  ],
  correct: 1,
  explanation: 'The instrument rating allows acting as PIC or co-pilot under the IFR in IMC, flying published instrument approaches and SID/STAR procedures, subject to currency, the relevant aircraft endorsement and a valid medical. It is not an unrestricted privilege.',
  reference: 'CASR Part 61.680 / Part 61 MOS'
},

{
  question: 'The radio communications equipment required for an IFR flight must:',
  options: [
    'Be a single handheld transceiver carried as a backup only',
    'Provide two-way communication on the frequencies required for the route, all serviceable',
    'Include HF radio on every flight regardless of the area flown',
    'Be optional wherever the flight happens to remain under radar coverage throughout'
  ],
  correct: 1,
  explanation: 'An IFR flight must carry serviceable radio able to maintain two-way communication on the frequencies needed for the route and airspace; in remote areas where VHF coverage is inadequate, HF (or an approved alternative) is also required.',
  reference: 'CASR Part 91 / MOS 3.1.3'
},

{
  question: 'Class A airspace in Australia is:',
  options: [
    'The control area lying immediately around every single controlled airport across the country',
    'All airspace at and above FL245, IFR only, with ATC clearance required and VMC operations not permitted',
    'Found only within Australian oceanic airspace, and nowhere else',
    'Airspace beginning at 10,000 ft AMSL across the country'
  ],
  correct: 1,
  explanation: 'In Australia, Class A is at and above FL245 (with some designated upper terminal areas). It is IFR only, VFR is not permitted, every aircraft requires an ATC clearance, and ATC separates all traffic.',
  reference: 'AIP ENR 1.4 / CASR Part 71'
},

{
  question: 'Class E airspace is significant for IFR because it is:',
  options: [
    'Airspace that is restricted to military operations only',
    'Uncontrolled airspace, with no ATC separation service provided to any of the aircraft',
    'Controlled for IFR, where IFR aircraft need a clearance and are separated from other IFR traffic',
    'A class of airspace that prohibits IFR flight below FL100'
  ],
  correct: 2,
  explanation: 'Class E is controlled for IFR: IFR aircraft need a clearance and receive IFR-to-IFR separation. VFR may enter without a clearance and self-separate, so an IFR aircraft may share Class E with VFR traffic that ATC is not separating it from.',
  reference: 'CASR Part 71 / AIP ENR 1.4'
},

{
  question: 'On an RNP procedure, a \'radius to fix\' (RF) leg requires the aircraft to fly:',
  options: [
    'A straight track running directly between two named waypoints',
    'A heading held until intercepting the next radial from a VOR',
    'A curved path of constant radius to the next fix, holding the arc precisely',
    'Any path the crew chooses, provided the next fix is overflown'
  ],
  correct: 2,
  explanation: 'An RF leg is a constant-radius curved path joining two fixes, flown by the RNP system to a defined turn radius, letting procedures follow precise curved tracks around terrain or airspace. A straight geodesic between fixes is a track-to-fix (TF) leg.',
  reference: 'MOS 6.2.4'
},

{
  question: 'The transponder code 7700 indicates:',
  options: [
    'Unlawful interference or a hijack of the aircraft in progress',
    'A general emergency such as loss of control, an engine fire, or a serious medical emergency',
    'A radio communication failure, with the aircraft now operating completely without radios',
    'A TCAS resolution advisory currently in progress'
  ],
  correct: 1,
  explanation: '7700 is the general emergency code, selected as soon as practicable in any emergency; 7600 is radio failure and 7500 is unlawful interference. Squawking 7700 triggers ATC emergency handling and priority. It must not be selected inadvertently.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Mode C transponder altitude reporting is required in controlled airspace because:',
  options: [
    'It encodes the aircraft\'s pressure altitude with the transponder reply',
    'It gives the aircraft real-time traffic information from the other transponders that are nearby',
    'It lets the aircraft communicate automatically with TCAS-equipped aircraft',
    'It is required only above FL290 within RVSM airspace for separation'
  ],
  correct: 0,
  explanation: 'Mode C encodes the aircraft\'s static pressure altitude and transmits it with each reply, so the radar display shows identity and altitude together, essential for IFR separation and surveillance and for TCAS in equipped aircraft. It is mandated for IFR in most controlled airspace.',
  reference: 'Part 91 / AIP ENR 1.6'
},

{
  question: 'ADS-B differs from Mode C in that:',
  options: [
    'It requires an active radar interrogation before it will respond',
    'It uses HF radio frequencies and has a greater range than Mode C radar',
    'It continuously broadcasts GNSS position, altitude and identity without interrogation, beyond radar range',
    'It works only within Class A airspace, and so cannot be received by any other nearby aircraft'
  ],
  correct: 2,
  explanation: 'ADS-B Out continuously broadcasts the aircraft\'s GNSS position, altitude, speed, track and identity. Ground stations receive it without interrogation, so it works beyond radar range, and other aircraft can display the traffic. Australia mandates ADS-B in controlled airspace above set levels.',
  reference: 'AIP ENR 1.6 / Part 91'
},

{
  question: 'The "separation minima" between IFR aircraft in radar-controlled airspace is typically:',
  options: [
    '5 nm horizontally and 1,000 ft vertically at every single altitude without any exception applied',
    '10 nm horizontally between IFR aircraft at all times',
    'Separation is provided only vertically, 1,000 ft at every altitude',
    'Varies by airspace and phase of flight, en-route 5 nm or 1,000 ft, and 2,000 ft at and above FL290'
  ],
  correct: 3,
  explanation: 'Radar separation: en-route typically 5 nm horizontal or 1,000 ft vertical (2,000 ft at and above FL290). Terminal area: 3 nm horizontal or 1,000 ft vertical. Approaches: wake turbulence categories apply — heavy behind heavy 4 nm, light behind heavy up to 6 nm. Non-radar: 10 minutes or distance-based procedural separation. These are ICAO standards; actual values depend on specific Australian ATC procedures.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'Operating IFR in Australian high-density controlled airspace, the pilot must:',
  options: [
    'Fly faster than 250 KIAS at all times while in the area',
    'Maintain a radio watch only during the approach phase of flight',
    'Nothing, since IFR pilots have no specific speed restrictions whatever below 10,000 ft AGL',
    'Comply with the 250 KIAS limit below 10,000 ft, hold assigned levels and headings, and read back clearances'
  ],
  correct: 3,
  explanation: 'Obligations include the 250 KIAS limit below 10,000 ft (unless authorised otherwise), maintaining assigned levels and headings, immediate compliance with ATC, reading back clearances, reporting \'unable\' when an instruction cannot be met, and a continuous radio watch.',
  reference: 'Part 91 / AIP ENR 1.1'
},

{
  question: 'A \'navigation specification\' in the PBN concept (e.g. RNP 1, RNAV 5) defines:',
  options: [
    'The performance and functional requirements for aircraft and crew on a route or procedure',
    'The radio frequency that must be used while on that particular route',
    'The minimum cloud base that is required to fly the procedure',
    'The maximum number of aircraft permitted on the route at once'
  ],
  correct: 0,
  explanation: 'A navigation specification sets the required accuracy and the aircraft and crew functional requirements for a route or procedure; an RNP specification additionally requires on-board performance monitoring and alerting, whereas an RNAV specification does not.',
  reference: 'MOS 6.1.2 / 6.2.1'
},

{
  question: 'An IFR pilot who does not understand an ATC clearance should:',
  options: [
    'Request clarification at once, and never fly a clearance that is not understood',
    'Interpret the clearance as best they can and fly what they think was said',
    'Acknowledge with the callsign, then fly whatever course seems the most logical for the route',
    'Advise ATC that the aircraft radio appears to be malfunctioning'
  ],
  correct: 0,
  explanation: 'Clarify before acting, using phrases like \'say again\' or \'confirm cleared to...\'. Flying a misunderstood clearance risks an airspace or separation problem, since ATC may expect a different level or heading; the few seconds to confirm are always worth it.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'For an RNP X specification, the system keeps the aircraft within X nm for 95% of the time and also provides containment to:',
  options: [
    'Exactly the same X nm at the other times as well',
    'Half of the RNP value (0.5X nm) for the remaining time',
    'An unlimited distance, since only the 95% figure matters',
    'Twice the RNP value (2X nm) as the total containment limit'
  ],
  correct: 3,
  explanation: 'The RNP value is the 95% lateral accuracy; the system also provides containment to twice that value (2X nm), and the on-board monitoring alerts the crew if that performance can no longer be assured.',
  reference: 'MOS 6.2.2 / 6.2.3'
},

{
  question: 'An IFR aircraft experiences TCAS RA (Resolution Advisory) during an ATC-assigned climb. The pilot must:',
  options: [
    'Follow the TCAS RA immediately, TCAS RA takes priority over ATC instructions in this situation',
    'Notify ATC of the RA and then continue the ATC-assigned climb just as instructed',
    'A TCAS RA can be overridden by an ATC instruction at any time',
    'A TCAS RA applies only while the aircraft is on the ground'
  ],
  correct: 0,
  explanation: 'TCAS RA vs ATC: TCAS RA (Resolution Advisory) must be followed immediately, even if it contradicts ATC. The manoeuvre commanded by TCAS is coordinated with the other aircraft\\\'s TCAS to provide separation. After RA resolved, return to ATC clearance and advise "clear of conflict, returning to assigned altitude." ATC does not know about TCAS RAs in real time.',
  reference: 'AIP ENR 1.1 / ICAO TCAS guidance'
},

{
  question: 'Maintaining 150 kt IAS at FL100, the approximate true airspeed (using about 2% per 1,000 ft) is:',
  options: [
    '180 kt',
    '150 kt',
    '165 kt',
    '195 kt'
  ],
  correct: 0,
  explanation: 'TAS rises above IAS with altitude as air density falls, by roughly 2% per 1,000 ft. At FL100: 150 times (1 + 0.02 times 10) = 150 times 1.2 = about 180 kt. TAS is used for groundspeed and ETA planning.',
  reference: 'AIP GEN 2.1 / navigation'
},

{
  question: 'Special-use airspace relevant to IFR pilots includes:',
  options: [
    'Special-use airspace is relevant only to VFR pilots and is never relevant to any of the IFR pilots',
    'IFR aircraft are exempt from all special-use airspace restrictions',
    'Restricted (R), prohibited (P) and danger (D) areas, with R and P avoided unless specifically authorised',
    'SUA affects only aircraft that are operating above FL180'
  ],
  correct: 2,
  explanation: 'Prohibited (P) areas may not be entered; restricted (R) areas need a clearance from the controlling authority; danger (D) areas are advisory but contain hazardous activity. All are charted with levels and hours, and NOTAMs give current activation.',
  reference: 'CASR Part 71 / AIP ENR 5.1'
},

{
  question: 'Crossing a low-level airway under the IFR requires:',
  options: [
    'No clearance is needed, since the airways may be crossed without any ATC contact',
    'Only a position report passed to ATC before crossing',
    'A specific ATC clearance to enter the controlled airspace of the airway, obtained before entering',
    'A crossing clearance only during the hours of darkness'
  ],
  correct: 2,
  explanation: 'A low-level airway is controlled (Class E) airspace, so the pilot obtains a crossing clearance from ATC before entering it, giving the crossing track, level and the time or position to cross.',
  reference: 'AIP ENR 1.1 / CASR Part 71'
},

{
  question: 'Wake turbulence categories for IFR approach sequencing are based on:',
  options: [
    'Maximum certified take-off weight, with Super above 560,000 kg and Heavy above 136,000 kg',
    'Aircraft speed only',
    'Aircraft wingspan only',
    'Engine type, since jet aircraft generate more wake turbulence than propeller-driven aircraft'
  ],
  correct: 0,
  explanation: 'ICAO wake turbulence categories: Super (A380), Heavy (Boeing 747, 777 etc.), Medium (B737, A320 etc.), Light. ATC applies wake turbulence separation on approach — Light behind Heavy: 6 nm minimum on approach. The wake extends behind and below the aircraft on the approach path. Most hazardous in calm wind conditions. IFR pilots at uncontrolled airports must self-apply wake turbulence separation.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'IFR operations during a "volcanic ash" event require:',
  options: [
    'Increase speed to transit the ash cloud quickly',
    'Volcanic ash can safely be penetrated at FL200 and above, where the ash concentration is much lower',
    'Only aircraft with special filters need to avoid volcanic ash',
    'Avoid volcanic ash completely, as it causes engine flame-out, compressor damage and blocked fuel nozzles'
  ],
  correct: 3,
  explanation: 'Volcanic ash: extreme hazard to all aircraft. Silicon ash melts in jet engines creating glass that re-solidifies on turbine blades — causes engine flame-out. Piston: can cause engine damage, fuel system blockage. Clogs pitot-static, blocks visibility. Volcanic ash SIGMETs are issued by VAAC (Volcanic Ash Advisory Centre). Treat ash avoidance as absolute — no penetration regardless of apparent conditions.',
  reference: 'AIP ENR 1.5 / ICAO volcanic ash guidance'
},

{
  question: 'An emergency descent from high altitude requires the pilot to:',
  options: [
    'Immediately divert and land at the nearest available airfield without any further delay',
    'Advise ATC only after the aircraft has reached a safe altitude',
    'Leave the emergency descent entirely to the co-pilot to handle',
    'Advise ATC, squawk 7700, get an emergency-descent clearance, use the AFM technique and avoid traffic'
  ],
  correct: 3,
  explanation: 'On decompression or fire: oxygen on, establish the AFM emergency descent, squawk 7700 and advise ATC of the level, the nature of the emergency and intentions, and turn if needed to avoid conflicting traffic while ATC clears the airspace below; level off at a safe altitude.',
  reference: 'Part 91 / AFM emergency procedures'
},

{
  question: 'An IFR pilot who inadvertently enters prohibited airspace should:',
  options: [
    'Continue straight on through the area as quickly as possible to minimise the time spent inside',
    'Exit by the most direct route at once, advise ATC, squawk 7700 if no contact, and report the infringement',
    'Circle in the area until ATC acknowledges the infringement',
    'Take no immediate action and file a report after landing'
  ],
  correct: 1,
  explanation: 'Leave the area immediately by the most direct route, tell ATC what happened and follow instructions, squawk 7700 if ATC cannot be raised, and file the required occurrence report. Prohibited areas protect critical infrastructure, so prevention through careful route planning is essential.',
  reference: 'Part 91 / AIP ENR 5.1'
},

{
  question: 'The "Aerodrome Traffic Zone" (ATZ) and instrument approach relationship is:',
  options: [
    'The ATZ extends right up to 10,000 ft AGL all the way around the aerodrome',
    'ATZ is only relevant for helicopter operations',
    'The ATZ surrounds a controlled or registered aerodrome and extends to 1,500 ft AGL',
    'ATZ boundaries prohibit IFR approaches'
  ],
  correct: 2,
  explanation: 'ATZ (Aerodrome Traffic Zone): the airspace surrounding an aerodrome in which special operating rules apply. Diameter and height vary. For IFR arrivals: at a controlled aerodrome, ATC manages ATZ entry; at uncontrolled aerodrome, IFR pilot must broadcast on CTAF. The approach profile should have the aircraft established, configured, and visual (if breaking VMC) within the ATZ area on approach.',
  reference: 'AIP ENR 1.4 / CASR Part 71'
},

{
  question: 'When ATC instructs \'resume own navigation\', it means the aircraft is:',
  options: [
    'Cleared to climb or descend freely to any altitude that the pilot now chooses',
    'No longer being radar vectored, so the pilot navigates using the filed or ATC-assigned route',
    'Having its radar service terminated by ATC',
    'Required to return to its departure aerodrome'
  ],
  correct: 1,
  explanation: 'ATC has stopped assigning headings; the pilot now navigates to the next clearance limit by the filed route, an assigned route, or cleared-direct to a fix, while ATC continues to provide separation. The pilot confirms position before resuming.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Using the VH-OZY aircraft, the lowest RNP approach minima the aircraft is approved to use are:',
  options: [
    'LNAV/VNAV (Baro-VNAV) minima, using the barometric vertical guidance of the GNSS units',
    'LPV minima, on the basis that the TSO-C146a units are SBAS-capable approach receivers',
    'LNAV minima only, since the GNSS units support RNP APCH to LNAV only',
    'Any RNP APCH minima, since two IFR-approved GNSS units are fitted to the aircraft'
  ],
  correct: 2,
  explanation: 'The VH-OZY data sheet states the GNSS units are capable of RNAV 5/2/1, RNP 2/1 and RNP APCH (LNAV only). The aircraft may therefore fly an RNP APCH only to the LNAV (2D) minima; it is not approved for LNAV/VNAV (Baro-VNAV) or LPV minima even though the receivers carry a TSO-C146a marking.',
  reference: 'IREX Aircraft Data Sheet VH-OZY / AIP ENR 1.5'
},

{
  question: 'Australian IFR "airways clearance" delivery frequency procedures require:',
  options: [
    'Clearances are only given on the tower frequency',
    'At major aerodromes, clearance delivery is on a dedicated frequency before contacting ground or tower',
    'IFR clearances must be obtained 2 hours before departure',
    'No specific procedure, the pilot calls whichever ATC frequency happens to be available'
  ],
  correct: 1,
  explanation: 'Clearance delivery at major Australian airports (Sydney, Melbourne, Brisbane etc.): dedicated clearance delivery frequency. Obtain clearance BEFORE taxi. At smaller controlled aerodromes: ground frequency. At uncontrolled aerodromes with IFR flight plans: obtain clearance by phone from the relevant ATC unit, or arrange pre-flight clearance. Never depart IFR without a valid clearance (in controlled airspace).',
  reference: 'AIP AD (aerodrome-specific) / AIP ENR 1.1'
},

{
  question: 'The IFR lost-communications procedure requires the pilot to:',
  options: [
    'Make an immediate diversion away toward VFR conditions wherever that is possible',
    'Hold indefinitely at the fix until radio contact is restored',
    'Hold at the clearance limit for the published time, then commence the approach to arrive by ETA',
    'Squawk 7600 and land immediately at the nearest aerodrome'
  ],
  correct: 2,
  explanation: 'On losing communications, squawk 7600, try all frequencies, continue to the destination, and at the planned ETA (or the last ATC-advised time, whichever is later) commence an approach and land as soon as practicable; ATC sequences other traffic on this expectation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A mandatory occurrence (pilot deviation) report is required when an IFR aircraft:',
  options: [
    'Any time that the aircraft varies from track by more than 2 nm',
    'Such deviation reports are filed only by commercial operators',
    'Such deviation reports are considered entirely voluntary for all of the pilots across Australia',
    'Penetrates controlled airspace without clearance, breaches an ATC instruction, or in a separation incident'
  ],
  correct: 3,
  explanation: 'Mandatory occurrence reports cover airspace infringements, breaches of an ATC instruction, near collisions, terrain-proximity events, use of emergency equipment and navigation failures causing loss of separation, filed with the ATSB. A just-culture approach focuses on systemic causes, not blame.',
  reference: 'CASR Part 201 / AIP GEN 3.6'
},

{
  question: 'On an RNP/LNAV approach, the lateral course deviation is displayed as:',
  options: [
    'Angular deviation that narrows in toward the runway, as on an ILS',
    'A simple left or right flag, with no scale',
    'Linear deviation in nautical miles that does not narrow toward the runway',
    'Distance to run only, with no track-keeping information shown'
  ],
  correct: 2,
  explanation: 'RNP/LNAV lateral guidance is linear (a fixed full-scale deflection in nm) and does not become more sensitive nearer the runway, unlike an ILS localiser or an LPV whose angular guidance narrows on final, so the pilot allows for this when tracking.',
  reference: 'MOS 6.2.18'
},

{
  question: 'The aeronautical decision-making approach to deteriorating weather is to:',
  options: [
    'Continue into the deteriorating weather and declare an emergency only if needed',
    'Ask ATC to manage the weather routing entirely on the pilot\'s behalf',
    'Turn back only if the destination is below minima, otherwise continue the approach there regardless',
    'Recognise the threat early, weigh diverting, holding or continuing against fuel and alternate, and decide in time'
  ],
  correct: 3,
  explanation: 'Good ADM identifies deteriorating weather before it becomes a crisis and weighs the options, continue if the alternate is good and fuel allows, divert early while conditions and fuel are favourable, hold for forecast improvement, or return, the worst case being arrival below minima with too little fuel to divert.',
  reference: 'CASA ADM guidance / AIP ENR 1.5'
},

{
  question: 'When ATC says \'maintain FL150 until further advised\', it means the aircraft:',
  options: [
    'May descend from FL150 whenever the pilot is ready to do so',
    'May deviate up to 500 ft either side of FL150 freely',
    'May treat the instruction as expiring after about 10 minutes have passed',
    'Must hold FL150 until ATC issues a new level, except for a safety need'
  ],
  correct: 3,
  explanation: 'The instruction is absolute: FL150 is held until ATC issues a new level, even if the pilot would prefer another level for weather or efficiency. The only exception is a safety or emergency need, when the pilot advises \'unable FL150\' with a reason and ATC issues a new clearance.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An IFR approach at a controlled aerodrome requires the pilot to obtain:',
  options: [
    'Approach clearance from the appropriate ATC unit before commencing the approach',
    'Only the current ATIS',
    'Approach clearance is not required for IFR, since the filed flight plan itself authorises the approach',
    'Only tower clearance after breaking out of cloud'
  ],
  correct: 0,
  explanation: 'IFR approach clearance: must be obtained from approach control (or tower at smaller aerodromes) before commencing the approach. The clearance specifies: approach type, runway, altitude to maintain until established, or vectors. "Cleared ILS runway 16" is the approach clearance. Without it, descent on the approach profile is not authorised. At uncontrolled aerodromes: self-position and broadcast.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Instrument-rating recency differs from currency in that:',
  options: [
    'Nothing, since the recency and the currency in fact mean exactly the very same thing',
    'Currency is the short-term recent-experience requirement, while recency keeps skills sharp via regular checks',
    'Recency refers to medical certificate validity and currency to flight hours',
    'Currency applies only to VFR flight, while recency applies only to IFR'
  ],
  correct: 1,
  explanation: 'Currency is the short-term recent-experience requirement, while recency/proficiency is the broader maintenance of skill through regular practice and proficiency checks. Licence holders also complete a flight review every two years.',
  reference: 'CASR Part 61 — recency'
},

{
  question: 'Noise abatement procedures at major airports affect IFR departures by:',
  options: [
    'Noise procedures apply only to lighter VFR aircraft and never to any of the actual IFR departures',
    'Requiring all aircraft to depart at maximum power so as to climb quickly',
    'Specifying SIDs, turns, power-reduction altitudes and speed restrictions to cut noise over residential areas',
    'Applying only between 2300 and 0600 local time, and at no other time'
  ],
  correct: 2,
  explanation: 'Noise-abatement departure procedures may specify a particular SID, a power-reduction altitude, speed restrictions and avoidance of certain turns to reduce noise over populated areas. IFR departures comply unless safety requires otherwise, in which case ATC is advised.',
  reference: 'AIP AD / ICAO noise procedures'
},

{
  question: 'When ATC issues a frequency change, the pilot should:',
  options: [
    'Change frequency whenever the previous ATC sector does not promptly respond to a first radio call',
    'Acknowledge frequency and callsign, then switch and call the new unit, never changing without ATC except in emergency',
    'Nothing, since frequency changes happen automatically in modern aircraft',
    'Change frequency whenever the pilot wishes, without any ATC instruction'
  ],
  correct: 1,
  explanation: 'On an ATC frequency change, read back the frequency and callsign, switch, and call the new unit promptly with position and level. A frequency is not left without authorisation (it opens a communication gap where ATC may be passing safety information), except in an emergency or total communication failure.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Having tracked 120 nm and finding the aircraft 6 nm left of the intended track, the track error is approximately:',
  options: [
    '1 degree',
    '3 degrees',
    '6 degrees',
    '10 degrees'
  ],
  correct: 1,
  explanation: 'By the one-in-sixty rule, track error in degrees equals (distance off track x 60) divided by distance flown: (6 x 60) / 120 = 3 degrees. Doubling the correction would regain track by the same distance ahead.',
  reference: 'Navigation - one-in-sixty rule'
},

{
  question: 'D-ATIS (digital ATIS) at some Australian airports provides:',
  options: [
    'A recorded weather observation that is already 24 hours old',
    'Only the wind information for the aerodrome, and nothing more',
    'Digital ATIS sent by ACARS or VHF datalink in text form',
    'A datalink service that happens to be available only on international flight sectors'
  ],
  correct: 2,
  explanation: 'D-ATIS sends the current ATIS to equipped aircraft as text on a datalink display, the same content as voice ATIS (QNH, wind, weather, runway, approach and code letter). It reduces read-back errors and frequency congestion and lets the crew refer back to the text.',
  reference: 'AIP COM / AIP AD'
},

{
  question: 'Spatial disorientation in IMC occurs because:',
  options: [
    'The flight instruments become unreliable when flying in cloud',
    'Spatial disorientation is a myth, and experienced instrument pilots are immune to its effects',
    'Spatial disorientation only occurs during night VFR flight',
    'The vestibular system of the inner ear cannot sense attitude without visual references'
  ],
  correct: 3,
  explanation: 'Spatial disorientation: the vestibular system senses rotation using semicircular canals (angular acceleration) and linear acceleration using otolith organs. In cloud: the inner ear provides false information after sustained turns (the leans), and the "graveyard spiral" (a balanced turn perceived as straight and level). Instrument flying discipline — trust the instruments, not your body — is the only reliable counter.',
  reference: 'CASA Human Factors / AIP ENR 1.5'
},

{
  question: '"The leans" illusion in IMC is caused by:',
  options: [
    'The aircraft entering a bank as the result of an asymmetric fuel or cargo load distribution',
    'The leans only occur during night VFR flight',
    'The leans are caused by fatigue and can be resolved by resting',
    'After an undetected gradual roll into a bank, the semicircular canals stop sensing it'
  ],
  correct: 3,
  explanation: '"The leans": after an undetected slow roll (below the semicircular canal threshold of approximately 2°/sec), the inner ear adapts — perceives the banked attitude as wings level. When the pilot corrects back to actual wings level (instruments), the correction feels like rolling to a new bank. The pilot feels banked even though instruments show wings level. The body leans toward the perceived "down." Resolution: trust the instruments, resist the urge to lean.',
  reference: 'Part 61 MOS Sch 3 IREX 8.1'
},

{
  question: 'The graveyard spiral in instrument flight begins when:',
  options: [
    'The aircraft inadvertently flying straight into an active embedded thunderstorm cell in cloud',
    'It can only ever occur during aerobatic manoeuvres in flight',
    'An undetected bank develops, the nose drops, and pulling back tightens the spiral instead of recovering',
    'It is caused by a trim imbalance developing during the cruise'
  ],
  correct: 2,
  explanation: 'An undetected bank lets the nose drop; the natural pull-back increases g in the turn, steepening the bank and building speed, and reducing power makes it worse. Recovery is to level the wings first, then ease gently out of the descent; pulling back while banked deepens the spiral.',
  reference: 'Part 61 MOS Sch 3 IREX 8.1'
},

{
  question: 'The somatogravic illusion during rapid acceleration in IMC causes the pilot to perceive:',
  options: [
    'A left bank developing whenever the aircraft accelerates forward',
    'An increased altitude reading shown on the aircraft altimeter',
    'A false nose-high climbing attitude',
    'An illusion that occurs only in helicopter operations, and never in aeroplanes'
  ],
  correct: 2,
  explanation: 'The otolith organs sense linear acceleration like a pitch change, so a rapid forward acceleration feels nose-high. The pilot may push forward to \'level\' it, which has caused accidents on go-arounds in poor visibility. The defence is to trust the instruments, not the sensation.',
  reference: 'Part 61 MOS Sch 3 IREX 8.1'
},

{
  question: 'To guard against a GNSS mode error during an RNP approach, the pilot should:',
  options: [
    'Confirm the receiver sequences to approach mode with the correct CDI sensitivity armed before the FAF',
    'Switch the receiver to manual leg mode so the approach is flown without automatic sequencing',
    'Accept whatever mode is displayed, since an IFR-approved receiver always selects the correct mode',
    'Disable the RAIM alerting on final so a marginal prediction cannot interrupt the approach'
  ],
  correct: 0,
  explanation: 'A mode error is a classic GNSS human-factors trap. The pilot must confirm the receiver auto-sequences from terminal into approach mode, with the tighter CDI sensitivity (scaling) armed, before the final approach fix. Flying an approach with the receiver still in en-route or terminal mode gives the wrong containment and deviation scaling.',
  reference: 'Part 61 MOS Sch 3 IREX 8.1.4 / AIP ENR 1.5'
},

{
  question: 'The transponder fitted to VH-OZY is:',
  options: [
    'A Mode S transponder with ADS-B OUT, broadcasting an extended squitter position message',
    'A Mode A transponder only, providing an identity code but no pressure-altitude information',
    'A Mode C transponder, encoding pressure altitude but without any ADS-B OUT capability',
    'A Mode S transponder without ADS-B, needing a separate ADS-B OUT unit to be installed'
  ],
  correct: 0,
  explanation: 'The data sheet lists a Mode S transponder (ADS-B OUT). Mode S provides selective addressing and altitude reporting, and the ADS-B OUT function broadcasts the aircraft\'s GNSS-derived position and other data via the 1090 MHz extended squitter for ATC surveillance.',
  reference: 'IREX Aircraft Data Sheet VH-OZY / AIP GEN 1.5'
},

{
  question: 'The take-off and landing wind limits given on the VH-OZY data sheet are:',
  options: [
    'A crosswind of 10 kt maximum and a tailwind of 20 kt maximum for take-off or landing',
    'A crosswind of 20 kt maximum and a tailwind of 10 kt maximum for take-off or landing',
    'A crosswind of 25 kt maximum for take-off or landing, with no tailwind limit published',
    'A crosswind of 15 kt maximum and a tailwind of 5 kt maximum for take-off or landing'
  ],
  correct: 1,
  explanation: 'VH-OZY is limited to a maximum crosswind component of 20 kt and a maximum tailwind component of 10 kt for take-off or landing. The pilot must resolve the reported wind into head/tail and crosswind components against the runway in use and confirm both limits are satisfied before selecting that runway.',
  reference: 'IREX Aircraft Data Sheet VH-OZY'
},

{
  question: 'VH-OZY has no oxygen and is not pressurised. The main consequence for IFR flight planning is that:',
  options: [
    'It may still be planned to any altitude, since oxygen is only required in pressurised aircraft',
    'Sustained cruise must be planned at altitudes where supplemental oxygen is not required',
    'It is restricted to flight below 5,000 ft at all times so that no oxygen requirement can arise',
    'Oxygen only becomes relevant above FL250, so the limitation has no practical planning effect'
  ],
  correct: 1,
  explanation: 'Without oxygen equipment the aircraft cannot be planned for sustained operations at cabin altitudes where supplemental oxygen would be required. For an unpressurised aeroplane this effectively caps practical cruising altitude in the low levels (broadly at or only briefly above 10,000 ft), which in turn constrains cruise-level selection against terrain LSALT and the forecast freezing level.',
  reference: 'CASR Part 91 MOS / IREX Aircraft Data Sheet VH-OZY'
},

{
  question: 'Because VH-OZY has no de-icing or anti-icing equipment, the IFR flight must be planned so that:',
  options: [
    'Flight through forecast icing is acceptable provided the weather radar is used to skirt the worst cells',
    'The route and levels avoid forecast or known airframe icing, with a climb or descent kept available to escape it',
    'Icing in cloud may be entered briefly as long as pitot heat and the autopilot both remain serviceable',
    'Climbing to the highest available cruising level is always the correct escape from any icing encountered'
  ],
  correct: 1,
  explanation: 'An aircraft with no ice protection must not be planned into known or forecast airframe icing. The pilot uses the forecast freezing level and cloud to keep the route and cruising level clear of icing, and retains an altitude change (commonly a descent into above-zero air, or a climb clear of cloud) as an escape if icing is met.',
  reference: 'CASR Part 91 / IREX Aircraft Data Sheet VH-OZY'
},

{
  question: 'VH-OZY has one VOR/ILS and one fixed-card ADF. For planning special alternate weather minima (lower than standard) at a destination, this means the aircraft:',
  options: [
    'Qualifies, because a single serviceable ILS receiver is all that special alternate minima require',
    'Qualifies, because the two fitted GNSS units satisfy the dual-navigation-aid requirement',
    'Qualifies for ILS special minima but is excluded from VOR or GNSS special alternate minima',
    'Does not qualify, as special alternate minima require duplicated ILS/VOR approach capability'
  ],
  correct: 3,
  explanation: 'Special alternate minima lower than the standard alternate minima are available only to aircraft with duplicated ILS/VOR approach capability (independent receivers for the relevant aid). VH-OZY has a single VOR/ILS and a single ADF, so it must plan on the standard alternate minima.',
  reference: 'AIP ENR 1.5 / IREX Aircraft Data Sheet VH-OZY'
},

{
  question: 'The Coriolis illusion in IMC is produced when the pilot:',
  options: [
    'Moves the head during a sustained turn, producing a strong false sensation of tumbling or rotating',
    'Stares at a single stationary light until it gradually appears to move about in the dark sky',
    'Accelerates rapidly and feels a false nose-up pitching sensation',
    'Mistakes a sloping cloud bank for the true natural horizon'
  ],
  correct: 0,
  explanation: 'Moving the head during a prolonged constant turn stimulates the semicircular canals in another plane, producing a powerful, disorienting sensation of tumbling or rotating. The defence is to avoid sudden head movements in IMC and to trust the attitude indicator.',
  reference: 'Part 61 MOS Sch 3 IREX 8.1'
},

{
  question: 'Expectation bias during an instrument approach causes pilots to:',
  options: [
    'See what they expect rather than what is there, e.g. mistaking other lights for runway lights',
    'Correctly anticipate the runway environment on every approach',
    'Improve the overall accuracy of their instrument approaches',
    'Experience an effect that can occur only on a pilot\'s very first solo IFR flight'
  ],
  correct: 0,
  explanation: 'Strongly expecting the runway ahead, a pilot may briefly take other lights seen through mist as approach or runway lights and continue below minima without genuine visual reference. The discipline is simple: if not definitely visual with the required references, go around.',
  reference: 'ICAO CFIT guidance / CASA Human Factors'
},

{
  question: 'On an IFR navigation chart, a compulsory reporting point is identified by:',
  options: [
    'An open (unfilled) triangle, the same symbol that also marks an on-request reporting point',
    'A solid triangle, whereas an on-request reporting point is shown by an open triangle',
    'A circled cross, which is also the symbol used for the position of en-route radio navigation aids',
    'A five-letter name printed in italics, with no symbol drawn at the waypoint position itself'
  ],
  correct: 1,
  explanation: 'On Australian and ICAO charts a compulsory reporting point is shown as a solid (filled) triangle and an on-request (non-compulsory) reporting point as an open (unfilled) triangle. A position report is made passing a compulsory point unless ATC has advised that reports are not required (for example under radar).',
  reference: 'AIP GEN 3.3 / chart legend'
},

{
  question: 'Under the IFR by day, a pilot may commence a visual approach only when:',
  options: [
    'Cleared by ATC, regardless of cloud or visibility, since the clearance removes the IFR minima',
    'Within 5 nm of the aerodrome with the runway lighting in sight, at any reported visibility',
    'Clear of cloud, in sight of ground or water, with flight visibility at least 5,000 m by day',
    'Below the lowest cloud base shown on the TAF, even when the aerodrome is not yet in sight'
  ],
  correct: 2,
  explanation: 'For a day visual approach under the IFR the aircraft must be clear of cloud, in sight of ground or water, with flight visibility not less than 5,000 m, and either the aerodrome or a preceding aircraft in sight as required. The pilot then provides own separation from terrain. Night visual approach criteria are more restrictive.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'Automation surprise in glass-cockpit IFR operations refers to:',
  options: [
    'An unexpected mechanical failure of a single piece of cockpit equipment in flight',
    'An effect experienced only by relatively inexperienced pilots',
    'Nothing, since modern automation never surprises the pilot',
    'Automation doing something unexpected, such as a mode change, odd routing or a missed waypoint'
  ],
  correct: 3,
  explanation: 'As automation grows more capable, pilots may not grasp all the mode logic, so the system can change mode or routing without an obvious cue and the pilot only notices when the aircraft does something unexpected. Monitoring the mode annunciations and knowing the active mode prevents it.',
  reference: 'ICAO Human Factors / CASA automation guidance'
},

{
  question: 'The fuel policy on the VH-OZY data sheet specifies that fuel reserves are carried in accordance with:',
  options: [
    'A fixed-litres reserve under the older fuel rules, with quantities planned and recorded in litres of usable fuel',
    'A fixed 30-minute holding allowance added to every IFR flight regardless of the operation type',
    'CASR Part 91 MOS Chapter 19 Table 19.02(2), or CASR Part 135 MOS Chapter 7, with all fuel in minutes',
    'The operator\'s own discretion, since the data sheet leaves the fuel reserve policy entirely unspecified'
  ],
  correct: 2,
  explanation: 'The data sheet sets the company fuel policy as CASR Part 91 MOS Chapter 19 Table 19.02(2) for aeroplanes below 5,700 kg under the IFR, or CASR Part 135 MOS Chapter 7. Each question states whether the flight is a Part 91 or Part 135 operation. All fuel is in minutes, holding consumption equals cruise consumption, and no allowance is added for taxi, approaches or overshoots.',
  reference: 'CASR Part 91 MOS Ch 19 / CASR Part 135 MOS Ch 7 / IREX Aircraft Data Sheet VH-OZY'
},

{
  question: 'In RNP navigation, the total system error (TSE) is made up of:',
  options: [
    'Flight technical error alone, since pilot or autopilot tracking is the only real error source',
    'Navigation system error alone, being the difference between the true and the computed position',
    'Path definition error, navigation system error and flight technical error',
    'Path definition error alone, set by how accurately the procedure is coded into the database'
  ],
  correct: 2,
  explanation: 'Total system error is the combination of path definition error (PDE, how accurately the desired path is defined), navigation system error (NSE or PEE, the difference between estimated and true position) and flight technical error (FTE, how accurately the crew or autopilot flies the computed path). For an RNP X specification the TSE must stay within X nm for 95% of the flight time.',
  reference: 'AIP ENR / Part 61 MOS Sch 3 IREX 6.2.3'
},

{
  question: 'The "instrument flying" recovery from an unusual attitude in IMC requires:',
  options: [
    'Pull back firmly on the controls and apply full power without any delay',
    'Always apply maximum power and pitch up firmly to bring the wings level',
    'Use the autopilot to recover from it, and never once attempt to hand-fly out of any unusual attitude',
    'For a nose-low unusual attitude, reduce power, roll wings level, ease the nose up, not pulling back while banked'
  ],
  correct: 3,
  explanation: 'Unusual attitude recovery: NOSE LOW (spiral dive): power idle (prevent over-speed), roll wings level, ease nose up gradually (avoid high-g pull). NOSE HIGH (approaching stall): power full, roll wings level, ease nose toward horizon. The critical rule: LEVEL WINGS FIRST. Pulling back while banked increases g-load in the spiral and worsens the nose-low situation. Simultaneous pitch and roll corrections can generate high structural loads.',
  reference: 'AIP ENR 1.5 / MOS 2.3.1'
},

{
  question: 'On becoming uncertain of position in IMC, the IFR pilot\'s first action is to:',
  options: [
    'Immediately declare a MAYDAY and begin descending at once to try to regain visual flight',
    'Maintain the MSA or assigned altitude, whichever is higher, keep the last heading, and advise ATC at once',
    'Make turns to try to spot landmarks through any cloud breaks',
    'Reduce power and slow down in order to buy more time'
  ],
  correct: 1,
  explanation: 'Climb to or hold the MSA (or assigned altitude, whichever is higher), keep the last heading, and tell ATC at once so radar identification can begin. Descending in IMC without a confirmed position is extremely dangerous.',
  reference: 'AIP ENR 1.1 / Part 91'
},

{
  question: 'Controlled Flight Into Terrain (CFIT) prevention strategies for IFR pilots include:',
  options: [
    'Avoiding CFIT is solely the responsibility of ATC and of its ground-based radar service alone',
    'CFIT only occurs in mountainous areas, flat terrain is safe',
    'EGPWS is always available on IFR aircraft and eliminates CFIT risk',
    'Maintaining strict altitude discipline, never descending below published minimums, terrain awareness'
  ],
  correct: 3,
  explanation: 'CFIT prevention: (1) Know MSA before descent; (2) Never descend below published altitudes without clearance/visual; (3) GPWS/EGPWS — respond to ALL terrain alerts immediately (terrain, terrain, pull up — PULL UP); (4) Cross-check GPS/FMS position against chart; (5) Do not continue approach if unstabilised; (6) Go around if in doubt — the runway is still there after a go-around. CFIT is the #1 cause of fatal IFR accidents.',
  reference: 'ICAO CFIT guidance / AIP ENR 1.5'
},

{
  question: 'The immediate response to a GPWS "TERRAIN, TERRAIN, PULL UP" warning is:',
  options: [
    'Check the terrain on the navigation display before responding',
    'Immediately pitch up to the maximum angle and apply maximum power, without delaying to check the display',
    'Advise ATC and continue the current approach',
    'The pilot uses their own judgment, and if they believe the alert is false they continue'
  ],
  correct: 1,
  explanation: 'GPWS "TERRAIN PULL UP" — do not delay, do not question: (1) Immediately apply maximum power; (2) Pitch up aggressively to maximum angle of attack (just below stall); (3) Retract gear (if in gear-up clean configuration faster); (4) Advise ATC; (5) Maintain climb until clear. False alerts are rare and the cost of responding to a false alert (brief discomfort) is infinitely less than the cost of not responding to a real one.',
  reference: 'ICAO CFIT guidance / AFM EGPWS procedures'
},

{
  question: 'Pressure error correction (PEC) applied to a decision altitude (DA) is used to determine the:',
  options: [
    'True altitude of the aircraft at the missed approach point, corrected for non-standard temperature',
    'Height of the obstacle clearance surface beneath the final approach segment of the procedure',
    'Difference between the local QNH and the forecast area QNH in use at the destination aerodrome',
    'The aerodrome operating minima, the altimeter reading at which the missed approach is begun'
  ],
  correct: 3,
  explanation: 'At approach speed and configuration the static system has a position (pressure) error, so the altimeter does not read exactly the DA. The pressure error correction is applied to the DA to give the aerodrome operating minima (AOM), the indicated altitude at which the pilot must begin the missed approach if the required visual reference is not available.',
  reference: 'AIP ENR 1.5 / Part 61 MOS Sch 3 IREX 4.4.5'
},

{
  question: 'From a human performance perspective, the benefit of a continuous descent final approach (CDFA) on a 2D approach is that it:',
  options: [
    'Removes the need to set a missed approach altitude, reducing the number of actions for the pilot',
    'Allows the aircraft to descend below the MDA a little earlier, giving more time to sight the runway',
    'Eliminates the need to monitor altitude on final, because the rate of descent is fixed throughout',
    'Gives a stabilised, constant descent that lowers workload and the CFIT risk of dive-and-drive'
  ],
  correct: 3,
  explanation: 'A CDFA flies the final segment as a single continuous, stabilised descent toward the MDA/DA rather than the \'dive and drive\' step-down method. From a human-performance view this reduces workload and distraction close to the ground, keeps the aircraft stabilised, and cuts the controlled-flight-into-terrain risk associated with repeated low-level level-offs in the dive-and-drive technique.',
  reference: 'AIP ENR 1.5 / Part 61 MOS Sch 3 IREX 8.1.5'
},

{
  question: 'A destination TAF shows a TEMPO with visibility and cloud below the landing minima at the ETA. The IFR requirement is to:',
  options: [
    'Disregard the TEMPO, as a temporary deterioration below minima does not affect IFR planning',
    'Carry 30 minutes of holding fuel, the allowance that applies to any TEMPO below the minima',
    'Plan a departure alternate only, since the TEMPO affects the arrival and not the departure',
    'Provide an alternate, or carry holding fuel for the 60 minutes that a TEMPO below minima requires'
  ],
  correct: 3,
  explanation: 'A TEMPO forecasting conditions below the alternate or landing minima at the ETA requires the flight to either nominate a suitable alternate or carry additional holding fuel. The allowance is 60 minutes for a TEMPO; an INTER requires 30 minutes. The pilot reads the change groups against the planned arrival time to decide which applies.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When should an IFR pilot consider requesting an "immediate approach" from ATC?',
  options: [
    'On every IFR flight, in order to reduce the time spent waiting around for handling',
    'Immediate approach is only for commercial operators',
    'When an emergency or urgency requires expedited approach handling',
    'ATC automatically sequences all IFR aircraft as immediate approaches'
  ],
  correct: 2,
  explanation: '"Immediate approach" request: indicates the aircraft requires expedited handling. Reasons: fuel emergency, medical, mechanical issue, weather deterioration. ATC will provide priority sequencing — other aircraft may be instructed to orbit, hold, or extend. For declared emergencies (MAYDAY): ATC automatically provides immediate approach. For minimum fuel: advise "minimum fuel" and request expedite.',
  reference: 'AIP ENR 1.1 / ICAO Doc 4444'
},

{
  question: 'A GNSS operating procedure that safeguards against navigation error is to:',
  options: [
    'Disable RAIM so the receiver does not generate alerts on approach',
    'Verify the loaded approach against the chart and confirm the active leg sequences correctly',
    'Enter all the waypoints manually by latitude and longitude for each separate approach',
    'Ignore any database currency warning if the route looks correct'
  ],
  correct: 1,
  explanation: 'Before and during a GNSS approach the pilot confirms the loaded procedure matches the published chart, checks the active waypoint and that legs sequence correctly, and monitors integrity (RAIM/SBAS); these checks guard against loading the wrong procedure or a database error.',
  reference: 'MOS 8.1.4'
},

{
  question: 'A \'MAYDAY FUEL\' declaration means:',
  options: [
    'The aircraft has exactly 45 minutes of usable fuel still remaining on board at the present time',
    'The aircraft has now exceeded its maximum operating range',
    'A distress call used only by commercial operators, not private pilots',
    'A fuel emergency declaration, meaning the aircraft may not reach a suitable aerodrome with safe fuel remaining'
  ],
  correct: 3,
  explanation: 'MAYDAY FUEL is a full distress call for a fuel emergency: landing at the nearest suitable aerodrome is essential. ATC clears the aircraft immediately, alerts emergency services and coordinates priority. A genuine fuel emergency must be declared without hesitation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Maintaining 700 ft per minute on climb-out at a groundspeed of 120 kt gives a climb gradient of about:',
  options: [
    '200 ft per nm',
    '250 ft per nm',
    '350 ft per nm',
    '420 ft per nm'
  ],
  correct: 2,
  explanation: 'Gradient in ft per nm equals (rate of climb x 60) divided by groundspeed: (700 x 60) / 120 = 350 ft per nm. This must meet or exceed any published SID gradient (standard 200 ft per nm) for obstacle clearance.',
  reference: 'AIP ENR 1.5 - climb gradient'
},

{
  question: 'A GNSS landing system (GLS) approach obtains its precision guidance from:',
  options: [
    'A ground-based augmentation system broadcasting corrections locally',
    'The barometric altimeter once it is corrected for temperature',
    'A conventional ILS glideslope transmitter sited at the threshold',
    'The aircraft\'s own inertial reference system operating alone'
  ],
  correct: 0,
  explanation: 'A GLS uses a local ground-based augmentation system (GBAS): a ground station measures GNSS errors and broadcasts corrections to nearby aircraft, giving ILS-like precision guidance, valid only within the GBAS service volume.',
  reference: 'MOS 5.3.3 / 5.3.4'
},

{
  question: 'If the static source becomes blocked during a climb, the altimeter, VSI and ASI will:',
  options: [
    'All three continue to read entirely normally, since they rely on the pitot source',
    'All three read progressively higher than normal as the aircraft climbs',
    'Altimeter freezes at the blockage level, VSI reads zero, and the ASI under-reads in the climb',
    'All three fail completely and display warning flags to the pilot'
  ],
  correct: 2,
  explanation: 'With the static source blocked, the altimeter freezes at the level where the blockage occurred, the VSI reads zero (no change in static pressure is sensed), and the ASI is in error, under-reading in a climb and over-reading in a descent. Selecting the alternate static source restores normal indications.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'The "6 Ts" technique at fixes in IFR stands for:',
  options: [
    'Turn, Throttle, Track, Time, Talk, Transponder',
    'The 6 Ts is only used for VFR navigation',
    'Time, Turn, Throttle and Twist',
    'Turn, then Terrain, Traffic, Track, Time and finally the Transponder'
  ],
  correct: 2,
  explanation: '5 or 6 Ts at each fix: Time (note), Turn (to outbound/new heading), Throttle (set holding/approach power), Twist (set OBS to inbound course), Talk (report position if required), Timer (start for outbound leg). This structured approach prevents missed actions at the busiest phase of IFR.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'In the southern hemisphere, accelerating on an easterly or westerly heading causes the magnetic compass to indicate:',
  options: [
    'A turn toward the north, exactly as in the northern hemisphere',
    'No error, since acceleration does not affect the magnetic compass',
    'A decrease in the indicated heading of about 30 degrees',
    'A turn toward the south, the dip being toward the south magnetic pole'
  ],
  correct: 3,
  explanation: 'Acceleration error appears on easterly and westerly headings as the compass card swings toward the nearer dip pole. In the southern hemisphere that is the south magnetic pole, so accelerating indicates a turn toward south and decelerating toward north, the reverse of the northern-hemisphere ANDS rule. The error is nil on north and south headings.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'GLS guidance from a GBAS ground station is valid:',
  options: [
    'Anywhere within the same flight information region as the station',
    'Across the whole of Australian airspace simultaneously',
    'Only above FL100, regardless of the distance from the station',
    'Only within the published service volume of that GBAS station'
  ],
  correct: 3,
  explanation: 'GBAS corrections are accurate only near the station that measured them, so GLS guidance is valid solely within the published service volume; beyond that distance the corrections no longer apply.',
  reference: 'MOS 5.3.5'
},

{
  question: 'An IFR approach briefing should be completed:',
  options: [
    'Only after the aircraft is already fully established on the ILS approach inbound to land',
    'Only when the weather at the destination is forecast below minima',
    'Before top of descent, confirming chart, course, altitudes, minima, missed approach and go-around power',
    'Only for training flights, and never for normal line operations'
  ],
  correct: 2,
  explanation: 'The briefing is done before top of descent, while workload is low: confirm the correct and current chart, the inbound course, step-down altitudes and the FAF, the DA/MDA and required visual reference, the missed approach and field elevation, and the go-around power.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'A ground-based augmentation system (GBAS) consists of:',
  options: [
    'A single satellite that rebroadcasts corrections to all aircraft',
    'An airborne receiver only, with no ground equipment required',
    'Ground reference receivers, a processing facility and a VHF data broadcast to aircraft',
    'A network of NDBs linked together to provide vertical guidance on the approach'
  ],
  correct: 2,
  explanation: 'A GBAS uses several precisely surveyed ground reference receivers, a central processing and monitoring facility, and a VHF data broadcast that sends differential corrections and integrity data to GBAS-equipped aircraft within the service volume for GLS approaches.',
  reference: 'MOS 5.3.3 / 5.3.4'
},

{
  question: 'An IFR approach at night without approach lighting is more demanding because:',
  options: [
    'Night has no real practical effect on the conduct of an IFR approach to a lit runway',
    'Visual acquisition at minima is harder, the runway found from edge lights alone with poor depth perception',
    'Approach lighting is always available at every aerodrome during the night',
    'Night IFR is permitted to use lower minima than are used by day'
  ],
  correct: 1,
  explanation: 'Without approach lighting the visual segment relies on runway edge and threshold lights, and depth perception is poor at night, so the runway is harder to identify at the minima and a black-hole tendency to go low exists. Lighting serviceability should be checked by NOTAM.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The black-hole illusion at night causes pilots to:',
  options: [
    'The pilot to fly far too high all the way down throughout the whole of the approach',
    'Fly too low over dark featureless terrain, the few visible lights giving a false sense of height',
    'It has no real effect on instrument-rated pilots',
    'It affects only VFR pilots and never IFR pilots'
  ],
  correct: 1,
  explanation: 'Approaching over dark featureless terrain with only runway lights visible, the cues suggest the aircraft is high, so the pilot lowers the nose onto a dangerously low path. The defence is to use every glidepath aid available (PAPI, glideslope, radio altimeter) rather than visual cues alone.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'The two fundamental properties of a gyroscope used in flight instruments are:',
  options: [
    'Rigidity in space and precession',
    'Magnetism and magnetic dip',
    'Pressure differential and lag',
    'Resonance and aerodynamic damping'
  ],
  correct: 0,
  explanation: 'A spinning gyro shows rigidity in space (it holds its spin-axis orientation, used by the attitude indicator and DI) and precession (a force on the rim acts 90 degrees later in the direction of spin, used by the turn indicator). Friction and Earth rotation cause unwanted precession, so the DI is realigned with the compass.',
  reference: 'Part 61 MOS Sch 3 IREX 2.3.1'
},

{
  question: 'The risk of controlled flight into terrain (CFIT) is highest during:',
  options: [
    'High-altitude cruise flight in clear, stable and smooth weather conditions well en-route',
    'Approach and landing in IMC, especially non-precision approaches at night or in mountainous terrain',
    'Only aircraft that are not fitted with any weather radar',
    'It is no longer a significant risk in modern aviation'
  ],
  correct: 1,
  explanation: 'CFIT, a controlled aircraft flown into terrain, is most likely on approach in IMC, particularly non-precision approaches in mountainous terrain, circling at night, or descending below minimum altitudes under pressure or workload. Altitude discipline and TAWS/GPWS use are the defences.',
  reference: 'ICAO CFIT guidance / AIP ENR 1.5'
},

{
  question: 'On a DME arc procedure, a published lead radial is used to:',
  options: [
    'Mark the point at which the aircraft must begin its descent on the arc',
    'Identify the missed approach point at the end of the arc',
    'Warn the pilot to begin the turn off the arc onto the final approach course',
    'Define the minimum safe altitude while established on the arc'
  ],
  correct: 2,
  explanation: 'A lead radial is published shortly before the final approach course so the pilot anticipates and begins the turn off the arc in time to roll out established on final, rather than overshooting the inbound course.',
  reference: 'AIP ENR 1.5 / ICAO PANS-OPS'
},

{
  question: 'If the ILS localiser shows full-scale deflection below 500 ft AGL, the pilot should:',
  options: [
    'Apply full aileron correction and continue the approach to land',
    'Go around immediately, since full-scale deflection at low altitude is a severely unstabilised approach',
    'Continue down to the MDA and assess the situation from there',
    'Accept it, since full-scale deflection is perfectly acceptable below 500 ft on final'
  ],
  correct: 1,
  explanation: 'Full-scale localiser deflection means roughly 700 ft off centreline at the threshold; at 500 ft on a 3-degree path the aircraft is about a mile out and grossly unstabilised. No recovery from there gives a safe landing, so an immediate go-around is the only correct action.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The required visual reference that allows continuation below MDA/H must be:',
  options: [
    'Any light visible ahead of the aircraft',
    'Only the runway centreline markings visible through the forward windscreen',
    'Any airport light visible in the general direction of the runway environment',
    'Sufficient to determine the aircraft\'s position and rate of descent relative to the runway'
  ],
  correct: 3,
  explanation: 'Required visual reference below MDA/H: must allow the pilot to assess position and flight path to the runway. CASR specifies what constitutes required visual reference — approach lighting systems (within 300 m), threshold lights, threshold markings, PAPI/VASI, touchdown zone. If none of these is visible, go around. Typically approach lights, threshold lights, runway markings, PAPI/VASI, or touchdown zone.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'When an IFR aircraft is given "radar identified," ATC can provide:',
  options: [
    'Only weather radar information, and nothing else that is of any real use to the pilot',
    'Radar identification only confirms the transponder works',
    'Radar identification means the aircraft is in Class A airspace',
    'Traffic information, radar separation, terrain warnings if MSAW equipped, vectors and position'
  ],
  correct: 3,
  explanation: 'Radar identification enables: radar separation; traffic information; MSAW terrain alerts; vectoring; position information. The pilot benefits from a dramatically higher level of service. Loss of radar identification: ATC advises and reverts to procedural separation.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'Usable fuel on board is 180 litres and the cruise burn is 45 litres per hour. The fuel endurance is:',
  options: [
    '3 hours',
    '4 hours',
    '4 hours 30 minutes',
    '3 hours 30 minutes'
  ],
  correct: 1,
  explanation: 'Fuel endurance = usable fuel divided by burn rate = 180 / 45 = 4 hours. Endurance is the total flying time available and is entered on the flight plan for SAR purposes.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'An IFR pilot suffering spatial disorientation in IMC should:',
  options: [
    'Trust the physical sensations that are felt and then manoeuvre the aircraft accordingly',
    'Reduce power and slow the aircraft right down immediately',
    'Open a door or window to try to get an outside visual reference',
    'Trust the instruments completely, ignore the sensations, and set wings level on the attitude indicator'
  ],
  correct: 3,
  explanation: 'The vestibular system is unreliable in IMC and cannot tell a coordinated turn from straight flight, so the attitude indicator is the only trustworthy reference. The recovery is to focus on the AI, set wings level, and climb gently, trusting the instruments over the body.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'To descend from 5,000 ft to 2,000 ft over a track distance of 12 nm, the descent gradient is:',
  options: [
    '250 ft/nm',
    '300 ft/nm',
    '200 ft/nm',
    '150 ft/nm'
  ],
  correct: 0,
  explanation: 'Descent gradient = height to lose divided by track distance = 3,000 ft over 12 nm = 250 ft per nm. Comparing this with aircraft performance confirms the descent point and rate are achievable.',
  reference: 'ICAO Doc 8168 / navigation'
},

{
  question: 'An IFR pilot noting the aircraft\\\'s DME has failed should:',
  options: [
    'Continue the flight without informing ATC about the DME unit failure',
    'Advise ATC of the DME failure, this affects what approaches and procedures are available',
    'Only advise ATC if the destination requires DME',
    'DME failure is not required to be reported'
  ],
  correct: 1,
  explanation: 'DME failure: advise ATC. Implications: DME-required approaches unavailable; some position reporting affected. ATC may modify the clearance or suggest alternative procedures. Concealing equipment failures in IFR operations is a significant safety risk.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'The published missed-approach altitude must be reached:',
  options: [
    'Only before the aircraft turns onto the published missed approach course, and at no other time',
    'Only when ATC specifically requests that the aircraft climb',
    'It is merely advisory, so it does not need to be reached',
    'As soon as possible after the go-around, climbing to the missed approach altitude for obstacle clearance'
  ],
  correct: 3,
  explanation: 'The missed-approach altitude gives obstacle clearance on the published missed-approach track and is climbed to as part of the procedure; the aircraft does not descend below it until ATC clears it. If the go-around is begun before the MAP, fly to the MAP before the missed-approach turn.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A PAPI on a normal approach slope shows the pilot:',
  options: [
    'Two white lights together with two red lights',
    'Four white lights arranged in a straight row',
    'Four red lights arranged in a straight row',
    'Three white lights together with one red light'
  ],
  correct: 0,
  explanation: 'A PAPI is a row of four lights: on slope shows two white (far side) and two red (near side). More white means too high (three or four white) and more red means too low, with four red well below the slope.',
  reference: 'AIP AD / MOS 2.3.17'
},

{
  question: 'A METAR showing \'VV004\' means the pilot should expect:',
  options: [
    'Broken cloud at 400 ft above the aerodrome elevation at the time of arrival',
    'A variable surface visibility of 4,000 m at the field',
    'Vertical visibility of 400 ft into a sky obscured by fog or mist',
    'Very good visibility, entirely suitable for a normal straight-in instrument approach to land'
  ],
  correct: 2,
  explanation: 'VV is used when the sky is obscured and cloud layers cannot be assessed; VV004 is a vertical visibility of 400 ft, which effectively acts as the ceiling. At 400 ft it is below most approach minima and would likely require a missed approach.',
  reference: 'AIP GEN 2.1'
},

{
  question: 'IFR training under simulated IMC (hood) requires:',
  options: [
    'A safety pilot holding at least a PPL to keep a visual lookout while the student flies under the hood',
    'The student flying under the hood must already hold a current instrument rating themselves',
    'The safety pilot to hold only a student pilot certificate',
    'No safety pilot, provided the flight is above FL100'
  ],
  correct: 0,
  explanation: 'The student flies under the hood while a safety pilot maintains the outside lookout and is responsible for collision avoidance. The safety pilot must hold at least a PPL and be current, and takes control if any visual hazard arises.',
  reference: 'CASR Part 61 / Part 91'
},

{
  question: 'On a PAPI, an indication changing to three red and one white, then four red, tells the pilot the aircraft is:',
  options: [
    'On the correct approach slope and should be maintained',
    'Above the slope and continuing to get higher still',
    'Below the slope and getting progressively lower',
    'Exactly at the elevation of the runway threshold'
  ],
  correct: 2,
  explanation: 'More red than white means below slope: three red and one white is slightly low and four red is well below; the pilot adjusts to regain two white and two red. Increasing white would indicate progressively high.',
  reference: 'AIP AD / MOS 2.3.17'
},

{
  question: 'The T-VASIS approach slope system indicates \'on slope\' when the pilot sees:',
  options: [
    'The horizontal bar of lights only, with no fly-up or fly-down lights',
    'All of the available lights illuminated brightly together',
    'A single red light positioned just to the left of the centreline',
    'Two white lights and two red lights set in a single row'
  ],
  correct: 0,
  explanation: 'T-VASIS shows the horizontal bar alone when on slope; \'fly-down\' lights appear above the bar when high and \'fly-up\' lights below it when low, with more lights as the deviation grows. (Two white/two red is the PAPI, a different system.)',
  reference: 'AIP AD / MOS 2.3.17'
},

{
  question: 'A limitation of visual approach slope guidance (PAPI/T-VASIS) is that it:',
  options: [
    'Provides reliable slope guidance from any direction around the field',
    'Guarantees full obstacle clearance throughout the entire descent',
    'Is valid only within a limited azimuth and range of the runway',
    'Removes the need for any instrument approach in poor weather'
  ],
  correct: 2,
  explanation: 'The lights give correct slope information only within a defined azimuth and out to a limited distance; outside that the indication is unreliable. The system is a visual slope aid and does not by itself assure obstacle clearance beyond the protected area.',
  reference: 'AIP AD / MOS 2.3.17'
},

{
  question: 'An aerodrome served by PAL may be nominated as an alternate provided the aircraft has:',
  options: [
    'Dual VHF, or single VHF with HF and 30 minutes holding fuel',
    'A serviceable autopilot that is capable of flying the approach',
    'At least two pilots both qualified for night flying operations',
    'Permission obtained from the aerodrome operator beforehand'
  ],
  correct: 0,
  explanation: 'A PAL aerodrome can be an alternate with no responsible person on the ground if the aircraft carries dual VHF, or single VHF plus HF with 30 minutes holding fuel to allow ground staff to be alerted should the VHF fail.',
  reference: 'AIP ENR 1.1 / MOS 2.3.16'
},

{
  question: 'The benefit of a stabilised approach over an unstabilised one is:',
  options: [
    'It allows the pilot to use approach minima that are noticeably lower than those published',
    'Consistent energy and flight-path control that lowers workload on final and eases the transition to visual',
    'It is required only of commercial pilots, not private ones',
    'An unstabilised approach is fine if the pilot is experienced'
  ],
  correct: 1,
  explanation: 'A stabilised approach is established on path, speed, configuration and power by the gate (about 1,000 ft in IMC), so the final segment needs few corrections and the workload falls when it matters most, with better capacity to go visual. Unstabilised approaches are a major factor in approach-and-landing accidents.',
  reference: 'AIP ENR 1.5 / ICAO CFIT guidance'
},

{
  question: 'An Aerodrome Frequency Response Unit (AFRU) responds to three microphone clicks within five seconds by:',
  options: [
    'Switching on the runway lighting for a period of thirty minutes',
    'Connecting the pilot directly through to the nearest ATC unit',
    'Transmitting a voice identification of that particular aerodrome',
    'Changing the CTAF over to the area frequency automatically'
  ],
  correct: 2,
  explanation: 'Three mic clicks within five seconds make the AFRU transmit the aerodrome\'s voice identification, confirming the pilot has selected the correct CTAF; it also answers a transmission over two seconds with a tone or voice ID, confirming the radio works on the right frequency.',
  reference: 'AIP GEN 3.4'
},

{
  question: 'The somatogyral illusion in IMC arises because the semicircular canals:',
  options: [
    'Stop sensing a prolonged steady turn, so stopping the turn feels like turning the other way',
    'Sense a forward acceleration as a nose-high pitching movement',
    'Detect a true horizon reliably even when none is visible outside the aircraft',
    'Become steadily more accurate the longer that a turn is maintained'
  ],
  correct: 0,
  explanation: 'After a prolonged constant-rate turn the semicircular canals stop signalling rotation, so the turn feels to have stopped; rolling out then gives a false sensation of turning the other way, the basis of the graveyard spin. Trusting the instruments is the defence.',
  reference: 'MOS 8.1.2'
},

{
  question: 'Autokinesis can mislead a pilot at night when:',
  options: [
    'Bright sunlight reflects upward from a layer of cloud below',
    'Two aircraft pass in opposite directions at the same level',
    'A single stationary light, stared at in the dark, appears to move',
    'The landing light illuminates falling rain ahead of the aircraft'
  ],
  correct: 2,
  explanation: 'Staring at an isolated stationary light against a dark background for several seconds makes it appear to move, which can prompt unnecessary control inputs. Scanning the whole field of view rather than fixating prevents it.',
  reference: 'MOS 8.1.3'
},

{
  question: 'A STAR altitude constraint of \'AT OR ABOVE FL180\' at a fix means the aircraft must:',
  options: [
    'Cross that fix at exactly FL180, with neither a higher nor a lower level being permitted',
    'Cross the fix at FL180 or higher, with the FMS computing a path to meet it and never going lower',
    'Treat the AT OR ABOVE constraint as advisory information only',
    'Apply the constraint only when operating within Class A airspace'
  ],
  correct: 1,
  explanation: 'An \'at or above\' constraint requires the aircraft to be at or above the published level at that fix; the FMS builds a descent path that satisfies all constraints. Such constraints on a STAR profile are mandatory, and ATC is advised at once if one cannot be met.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'Planning IFR flight over high terrain, the pilot should check:',
  options: [
    'Only the published airway MEA for each one of the planned route segments en-route',
    'Only the aerodrome elevation figure at the destination',
    'LSALT for the track, grid LSALT off-airway, SID/STAR altitudes, approach MSA and icing levels',
    'Nothing, since LSALT is relevant only to VFR flight'
  ],
  correct: 2,
  explanation: 'Over high terrain the pilot checks the track LSALT (and grid LSALT off-airway), SID gradient and altitude requirements, the approach MSA, and forecast icing levels, while confirming the aircraft can actually achieve LSALT, since at high or hot/high conditions a full-fuel climb to LSALT may be marginal.',
  reference: 'AIP ENR 1.1 / ERC'
},

{
  question: 'The "departure alternate" is required when:',
  options: [
    'Take-off weather is at or below approach minima at the departure aerodrome',
    'Departure alternate is never required',
    'Only for international flights',
    'A departure alternate is required for all IFR flights without exception'
  ],
  correct: 0,
  explanation: 'Departure alternate: required when take-off weather is below published approach minima at the departure aerodrome. If the aircraft must return (engine failure, pressurisation loss), the departure aerodrome may not be landable. Distance limit: typically 1 hour flying time.',
  reference: 'CASR Part 91 / AIP ENR 1.1'
},

{
  question: 'A \'false horizon\' illusion can occur when:',
  options: [
    'The attitude indicator is the only reference being used',
    'Sloping cloud tops or scattered ground lights are taken as the true horizon',
    'The aircraft is established straight and level in clear air',
    'The pilot scans the flight instruments in a regular, disciplined pattern'
  ],
  correct: 1,
  explanation: 'A sloping cloud bank, an overcast that is not level, or ground lights merging with stars can be mistaken for the horizon, leading the pilot to align the aircraft with the false reference. Believing the attitude indicator prevents it.',
  reference: 'MOS 8.1.3'
},

{
  question: 'The \'flicker effect\' that can cause disorientation is produced by:',
  options: [
    'A steady, unchanging light source that is viewed over a long period',
    'The complete absence of any external light at night',
    'Two navigation lights of very slightly different colours',
    'Sunlight or a strobe flickering at low frequency, such as through a propeller'
  ],
  correct: 3,
  explanation: 'Light flickering at a low frequency, such as sunlight through a propeller disc or a strobe reflecting in cloud, can cause distraction, discomfort or disorientation. Reducing the flicker, by changing power or heading or turning off a strobe in cloud, relieves it.',
  reference: 'MOS 8.1.3'
},

{
  question: 'A relative-motion illusion occurs when the pilot:',
  options: [
    'Correctly judges the closure rate of converging traffic ahead',
    'Perceives movement of another object as movement of their own aircraft',
    'Reads the groundspeed directly from the navigation display',
    'Feels no sensation of motion while flying straight and level'
  ],
  correct: 1,
  explanation: 'When an adjacent aircraft or drifting cloud moves, the pilot may perceive it as their own aircraft moving and make an unnecessary correction; cross-checking the flight instruments confirms the actual aircraft state.',
  reference: 'MOS 8.1.3'
},

{
  question: 'At a height of 3,000 ft on a day 10 deg C colder than ISA, the cold-temperature correction to add (about 4 ft per 1,000 ft per deg C below ISA) is approximately:',
  options: [
    'About 40 ft',
    'About 80 ft',
    'About 120 ft',
    'About 200 ft'
  ],
  correct: 2,
  explanation: 'Using about 4 ft per 1,000 ft per degree below ISA: 4 x 3 x 10 = 120 ft. The altimeter over-reads in cold air, so the correction is added to the published altitude to preserve obstacle clearance.',
  reference: 'AIP ENR 1.7 / ICAO cold-temperature correction'
},

{
  question: 'For a night VFR flight on the last route segment, an alternate aerodrome within one hour is required unless the destination:',
  options: [
    'Has an NDB, VOR or approved GNSS that the aircraft and pilot can use',
    'Has no published instrument approach procedure available',
    'Is always required regardless of the navigation aids that happen to be available',
    'Requires an alternate only when the flight is for hire or reward'
  ],
  correct: 0,
  explanation: 'Night VFR requires an alternate within one hour unless the destination is served by an NDB or VOR with a suitably equipped aircraft and competent pilot, or an approved GNSS is carried and the pilot is competent in its use.',
  reference: 'AIP ENR 1.1 / MOS 4.2.3'
},

{
  question: 'The mandatory electrical lighting that must be serviceable for an IFR flight by night includes:',
  options: [
    'Landing lights only, used during the approach and landing',
    'A single cockpit dome light, with no other lighting needed',
    'Position lights, an anti-collision light, instrument lighting and a serviceable torch',
    'Strobe lights only, switched on whenever the aircraft is in controlled airspace'
  ],
  correct: 2,
  explanation: 'Night IFR requires serviceable position (navigation) lights, an anti-collision light (beacon or strobes), illumination for the flight instruments, and an independent torch as a backup against an electrical failure.',
  reference: 'CASR Part 91 / MOS 3.1.2'
},

{
  question: 'When briefing a missed approach, the essential elements are:',
  options: [
    'Only the missed approach altitude',
    'Only the go-around power setting',
    'The missed approach brief is not required if the weather is above the minima',
    'Initial climb actions, then the missed approach heading or track'
  ],
  correct: 3,
  explanation: 'Missed approach brief: (1) Initial actions — TOGA, positive climb, gear; (2) Track/heading; (3) Altitude; (4) Subsequent routing; (5) Communications. Brief BEFORE the approach, not during the go-around. The go-around is not the time to consult the chart.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The key operational difference between a DA (decision altitude) and an MDA (minimum descent altitude) is:',
  options: [
    'An MDA may be flown below momentarily during the go-around, but a DA may not',
    'A momentary descent below DA is accepted as the go-around begins, but never below an MDA',
    'They are the same, the two terms being fully interchangeable on charts',
    'A DA applies only to GNSS approaches and an MDA only to ILS approaches'
  ],
  correct: 1,
  explanation: 'A DA is used on approaches with vertical guidance (ILS, LNAV/VNAV, LPV): the go-around starts at the DA and a momentary descent below it during the transition is accepted. An MDA is used on non-precision (2D) approaches: the aircraft must not descend below it at all, levelling there until the MAP or visual.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A VOR approach with straight-in MDA 900 ft and circling MDA 1,200 ft means the aircraft:',
  options: [
    'May circle at the 900 ft straight-in MDA freely',
    'Has both minima applying at the same time throughout the approach',
    'May descend to 900 ft on the final course, but must hold 1,200 ft if a circling manoeuvre is required',
    'Uses the 1,200 ft circling MDA in place of the 900 ft straight-in figure for everything'
  ],
  correct: 2,
  explanation: 'If the approach aligns with the landing runway (within about 30 degrees) the lower straight-in MDA may be used; if a circling manoeuvre is needed the higher circling MDA applies throughout. The aircraft does not descend to the straight-in MDA and then circle.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A missed-approach instruction \'climbing right turn to 3,000 ft\' means:',
  options: [
    'Turn to the right first, and only then begin to climb away from the MAP afterward',
    'Apply go-around power, set the climb attitude, and begin the right turn together from the MAP',
    'Climb all the way up to 3,000 ft and only then turn right',
    'Choose the turn direction at the pilot\'s own discretion'
  ],
  correct: 1,
  explanation: 'The climb and the turn are made together from the MAP: go-around power, climb attitude and the right bank applied at once. Delaying the turn until reaching altitude would take the aircraft outside the protected area, so the published procedure is flown precisely.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Overhead a fix at 1420 with the next fix 60 nm ahead at a groundspeed of 120 kt, the ETA for the next fix is:',
  options: [
    '1440',
    '1500',
    '1435',
    '1450'
  ],
  correct: 3,
  explanation: 'At 120 kt, 60 nm takes 60/120 hour = 30 minutes. Adding 30 minutes to 1420 gives an ETA of 1450. Revised estimates are passed to ATC when the estimate changes by more than 2 minutes.',
  reference: 'Navigation - time and distance'
},

{
  question: 'To lose 4,500 ft on a 3-degree descent path (about 300 ft per nm), descent should begin approximately:',
  options: [
    '5 nm before the point',
    '10 nm before the point',
    '15 nm before the point',
    '25 nm before the point'
  ],
  correct: 2,
  explanation: 'A 3-degree path descends about 300 ft per nm, so distance equals height to lose divided by 300: 4,500 / 300 = 15 nm. Planning top of descent this way keeps the aircraft on a constant, stabilised path.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'Landing on runway 18 (180 deg M) with the wind 210 deg M at 30 kt, the crosswind component is approximately:',
  options: [
    'About 10 kt',
    'About 15 kt',
    'About 20 kt',
    'About 26 kt'
  ],
  correct: 1,
  explanation: 'The wind is 30 degrees off the runway heading. Crosswind equals wind speed times the sine of the angle: 30 x sin 30 = 30 x 0.5 = 15 kt. The headwind component is 30 x cos 30, about 26 kt.',
  reference: 'Navigation - wind components'
},

{
  question: 'Departing with 4 hours endurance, after 2 hours 30 minutes airborne the fuel remaining is:',
  options: [
    '2 hours',
    '1 hour 30 minutes',
    '1 hour',
    '2 hours 30 minutes'
  ],
  correct: 1,
  explanation: 'Endurance remaining = total endurance minus time airborne = 4 h 00 minus 2 h 30 = 1 h 30. This is compared against the fuel required to destination plus alternate plus final reserve.',
  reference: 'Part 91 MOS 19 / AIP ENR 1.1'
},

{
  question: 'An aircraft covers 40 nm in 20 minutes. Its groundspeed is:',
  options: [
    '100 kt',
    '80 kt',
    '150 kt',
    '120 kt'
  ],
  correct: 3,
  explanation: 'Groundspeed = distance divided by time = 40 nm in 20 minutes = 40 times (60/20) = 120 kt. The time-speed-distance relationship underlies groundspeed checks and revised estimates.',
  reference: 'Navigation - time, speed and distance'
},

{
  question: 'At a groundspeed of 200 kt, the time to fly the 50 nm remaining to a fix is:',
  options: [
    '10 minutes',
    '15 minutes',
    '20 minutes',
    '25 minutes'
  ],
  correct: 1,
  explanation: 'Time equals distance divided by groundspeed. 50 nm at 200 kt is 50/200 hours = 0.25 hour = 15 minutes. The same time-speed-distance relationship underlies revised estimates passed to ATC.',
  reference: 'Navigation - time, speed and distance'
},

{
  question: 'On an instrument approach, reaching the tracking tolerance means the pilot must:',
  options: [
    'Discontinue the approach and go around',
    'Increase speed in order to regain the centreline more quickly',
    'Descend earlier than planned to make up for the tracking error that was encountered',
    'Ignore the deviation, provided the runway is in sight ahead'
  ],
  correct: 0,
  explanation: 'If course deviation reaches the tracking tolerance for the aid in use (for example full-scale on a non-precision approach), the aircraft may be at or beyond the edge of the protected area, so the approach is discontinued and the missed approach flown.',
  reference: 'AIP ENR 1.5 / MOS 4.4.7'
},

{
  question: 'An IFR approach at a circling-only aerodrome requires the pilot to:',
  options: [
    'Fly the approach to MDA and then land straight ahead on the procedure track',
    'Request special straight-in approach minima from ATC for a runway',
    'Treat it as entirely unavailable, since the circling-only approaches do not exist in Australia',
    'Fly the procedure to circling MDA, stay visual with the aerodrome, and manoeuvre to land on the chosen runway'
  ],
  correct: 3,
  explanation: 'The instrument procedure aligns with no runway, so the pilot descends to the circling MDA, acquires the aerodrome visually, manoeuvres within the category circling area and lands. Visual contact must be kept throughout; if it is lost, an immediate missed approach is flown.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When ATC advises "expect the ILS approach, runway 34" during descent planning, the pilot should:',
  options: [
    'Brief the ILS RWY 34 approach during the descent while workload is manageable',
    'Delay briefing until the final clearance is issued',
    'Only brief the approach at the outer marker',
    'The approach brief is ATC\'s responsibility, the pilot only needs to listen'
  ],
  correct: 0,
  explanation: '"Expect ILS 34": brief the approach now during descent. Load the approach in avionics, review the chart (confirm correct, check altitudes, DA/H, missed approach). When ATC issues the final clearance, confirm it matches the briefed approach. Briefing late (at the IAF or outer marker) creates excessive workload at a critical phase.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The \'aviate, navigate, communicate\' priority exists because:',
  options: [
    'Control of the aircraft comes first, ahead of navigation and then communication',
    'Communication is the single most important task throughout an IFR flight',
    'Navigation is always the very highest priority during IFR flight at all times',
    'All three priorities are treated as exactly equal during instrument flight'
  ],
  correct: 0,
  explanation: 'Aircraft control comes first, an uncontrolled aircraft cannot be navigated or talked about; navigation is second to keep terrain and airspace clearance; communication is third. In an emergency, ATC calls must not distract from flying the aircraft.',
  reference: 'ICAO Human Factors / AIP ENR 1.5'
},

{
  question: 'With a surface temperature of +21 degrees C in clear air, the approximate freezing level is:',
  options: [
    '5,000 ft',
    '6,000 ft',
    '7,000 ft',
    '9,000 ft'
  ],
  correct: 2,
  explanation: 'In clear air the lapse rate is about 3 degrees per 1,000 ft, so the freezing level is 21/3 = 7,000 ft. Freezing-level awareness is essential for icing avoidance on climb and descent.',
  reference: 'CASR Part 61 MOS Schedule 3 — IREX 3.2.3'
},

{
  question: 'With a true airspeed of 150 kt and a 30 kt headwind component, the groundspeed is:',
  options: [
    '180 kt',
    '120 kt',
    '150 kt',
    '100 kt'
  ],
  correct: 1,
  explanation: 'Groundspeed = TAS minus the headwind component = 150 minus 30 = 120 kt (a tailwind would be added). Groundspeed drives the ETA and fuel calculations.',
  reference: 'Navigation - groundspeed'
},

{
  question: 'An IFR pilot receiving weather below minima while established on the approach should:',
  options: [
    'Continue down to DA/H and then assess the prevailing conditions on arrival',
    'Descend below DA/H hoping for improvement',
    'Continue the descent at a slower rate',
    'Execute a missed approach at DA/H if required visual reference is not established'
  ],
  correct: 3,
  explanation: 'Below minima during approach: the approach ban applies at DA/H or MDA/H. If required visual reference is not established at DA/H: immediate go-around. Do not descend further. Reported weather below minima means the approach is unlikely to succeed and below-minima descent risks CFIT.',
  reference: 'CASR Part 91 / AIP ENR 1.5'
},

{
  question: 'The "HAT" (Height Above Touchdown) on an approach chart represents:',
  options: [
    'The height measured directly above the aerodrome reference point',
    'Height above terrain',
    'DA/DH or MDA/H expressed as a height above the touchdown zone elevation',
    'HAT is the same as field elevation'
  ],
  correct: 2,
  explanation: 'HAT: Height Above Touchdown zone elevation. Published alongside the MSL altitude for DA/DH and MDA. For example: "DA 750 ft (HAT 243 ft)" — the DA is 750 ft MSL which is 243 ft above the touchdown zone. HAT helps pilots understand how much runway they will see at the decision point.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'The benefit of flying an instrument approach coupled to the autopilot is that it:',
  options: [
    'Removes the pilot\'s responsibility to monitor the approach',
    'Reduces workload and improves tracking accuracy, freeing capacity to monitor',
    'Allows the published minima to be disregarded once coupled',
    'Guarantees the approach without any need to brief or configure'
  ],
  correct: 1,
  explanation: 'A coupled approach reduces pilot workload and holds the lateral and vertical path accurately, freeing the pilot to monitor instruments, raw data and the approach progress; the pilot remains responsible and ready to disconnect and fly manually if needed.',
  reference: 'MOS 8.1.5'
},

{
  question: 'An IFR pilot whose autopilot disconnects unexpectedly at low altitude in IMC should:',
  options: [
    'Continue looking at the autopilot panel to diagnose the problem',
    'Disconnect all automation and return to the hold',
    'Disengage the autothrottle as well and fly manually with appropriate ATC clearance obtained',
    'Immediately take manual control and maintain attitude and flight path, before looking for the reason'
  ],
  correct: 3,
  explanation: 'Autopilot unexpected disconnect: immediate priority is aircraft control — grip controls, establish and maintain correct attitude, check instruments. Only after control is assured: assess why the autopilot disconnected, decide whether to re-engage or continue manually, advise ATC if required. Distraction during AP disconnect has caused accidents.',
  reference: 'AIP ENR 1.5 / ICAO Human Factors'
},

{
  question: 'The IFR "descent via STAR" instruction requires compliance with:',
  options: [
    'Only the final altitude that is given in the clearance, not the others',
    'Only the speed constraints, since all of the altitude constraints are merely advisory',
    'Constraints only apply if the FMS is in VNAV mode',
    'ALL published altitude and speed constraints on the STAR while descending to the cleared altitude'
  ],
  correct: 3,
  explanation: '"Descend via STAR": comply with ALL published altitude AND speed constraints on the STAR while descending to the cleared altitude. The FMS computes a path to meet all constraints. If a constraint cannot be met, advise ATC immediately.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'When the ATIS broadcasts "ILS LOC only, glideslope unserviceable," the pilot should:',
  options: [
    'Convert to a localiser-only non-precision approach using the published LOC minima',
    'Fly the ILS approach using the normal full precision approach landing minima',
    'Cancel the IFR flight plan and land VFR',
    'Request radar vectoring to a visual approach only'
  ],
  correct: 0,
  explanation: 'ILS with inoperative glide slope (LOC approach): localiser provides lateral guidance only. Published LOC minima apply (typically 300–600 ft higher than ILS). The approach becomes non-precision: track the localiser inbound, descend per the published LOC procedure, level at MDA/H, and execute missed approach if runway environment not sighted at MAP.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The \'early diversion decision\' principle means:',
  options: [
    'Always diverting before ever reaching the planned destination aerodrome',
    'Diverting only after the first missed approach has been flown',
    'Leaving the diversion decision entirely up to ATC controllers to make',
    'Deciding to divert before fuel becomes marginal, while ample fuel still remains in the cruise'
  ],
  correct: 3,
  explanation: 'Decision points are set before flight (\'if the METAR at ETA minus 30 shows X, divert\'). The earlier the decision, the more fuel remains for the alternate and contingencies; a late decision after a missed approach on minimum fuel removes options and creates an emergency.',
  reference: 'Part 91 / CASA HF materials'
},

{
  question: 'The published missed-approach procedure provides obstacle clearance only if the aircraft:',
  options: [
    'Descends right down to the MDA before commencing the climb',
    'Turns in any convenient direction toward the chosen alternate',
    'Follows the published track and achieves the specified climb gradient',
    'Maintains the approach speed throughout the entire climb-out'
  ],
  correct: 2,
  explanation: 'Obstacle clearance on the missed approach is assured only along the published track at or above the design climb gradient (nominally 2.5%, higher where charted); deviating from the track or failing to achieve the gradient voids the protection.',
  reference: 'ICAO Doc 8168 / MOS 4.3.2'
},

{
  question: 'Approaching runway 27 (270 deg M) with the wind 240 deg M at 30 kt, the headwind component is approximately:',
  options: [
    'About 10 kt',
    'About 15 kt',
    'About 21 kt',
    'About 26 kt'
  ],
  correct: 3,
  explanation: 'The wind is 30 degrees off the runway heading. Headwind equals wind speed times the cosine of the angle: 30 x cos 30 = 30 x 0.87, about 26 kt. The crosswind component is 30 x sin 30, about 15 kt.',
  reference: 'Navigation - wind components'
},

{
  question: 'An aircraft burns 80 litres in 1 hour 20 minutes. The fuel burn rate is:',
  options: [
    '50 L/hr',
    '60 L/hr',
    '80 L/hr',
    '45 L/hr'
  ],
  correct: 1,
  explanation: 'Burn rate = fuel used divided by time = 80 litres in 80 minutes = 1 litre per minute = 60 litres per hour. The burn rate underlies endurance and fuel-required calculations.',
  reference: 'Flight planning - fuel'
},

{
  question: 'With QNH 1023 hPa at an aerodrome of elevation 500 ft, the pressure altitude is approximately (about 30 ft per hPa):',
  options: [
    '200 ft',
    '800 ft',
    '500 ft',
    '300 ft'
  ],
  correct: 0,
  explanation: 'Pressure altitude = elevation + (1013 minus QNH) times about 30 ft per hPa = 500 + (1013 minus 1023) times 30 = 500 minus 300 = 200 ft. With QNH above 1013 the pressure altitude is below the elevation.',
  reference: 'AIP ENR 1.7 / GEN 2.1'
},

{
  question: 'Having flown 90 nm and found the aircraft 3 nm off track, the track error by the one-in-sixty rule is about:',
  options: [
    '1 degree',
    '2 degrees',
    '3 degrees',
    '5 degrees'
  ],
  correct: 1,
  explanation: 'Track error in degrees = (distance off times 60) divided by distance flown = (3 times 60)/90 = 2 degrees. Doubling the correction angle would regain track over a similar distance ahead.',
  reference: 'Navigation - one-in-sixty rule'
},

{
  question: 'The IFR "SARTIME" for a flight without ATC flight plan monitoring should be:',
  options: [
    'Set to departure time',
    'SARTIME is optional for short IFR flights',
    'SARTIME is always a fixed 6 hours, regardless of the flight duration',
    'Set to the estimated arrival time plus a reasonable buffer'
  ],
  correct: 3,
  explanation: 'SARTIME: estimated time of arrival plus a buffer (typically 30–60 min). Too short and normal delays trigger unnecessary SAR; too long and a genuine emergency may not be detected quickly. For IFR on an ATC flight plan: the flight plan itself provides SAR coverage — SARTIME may be included in the flight plan or filed separately with the AFTN.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'On an IFR approach chart, the note "Procedure not authorised when XYZ NDB unserviceable" means:',
  options: [
    'The NDB is optional for the approach, it improves accuracy but is not required',
    'The approach minima are raised when the NDB is unserviceable but the procedure may still be conducted',
    'The NDB is essential for identifying a critical fix, so without it the approach must not be commenced',
    'The restriction only applies to aircraft without GPS equipment on board'
  ],
  correct: 2,
  explanation: 'Navaid required: when an approach chart states the procedure requires a specific navaid, that navaid is critical for the procedure\\\'s obstacle clearance — typically defining a fix that has no other means of identification. Check NOTAM before flight. If the navaid becomes unserviceable during flight: divert to an aerodrome with a serviceable approach.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'The minimum off-route altitude (MORA) on a chart provides:',
  options: [
    'The minimum altitude for flying along any single published airway route segment on the chart',
    'A value that is not used in Australian operations',
    'Obstacle clearance of 1,000 ft (2,000 ft in mountains) within a grid square when off published airways',
    'The minimum altitude required for any flight conducted above cloud'
  ],
  correct: 2,
  explanation: 'MORA is published in grid squares and gives obstacle clearance within the square (1,000 ft, or 2,000 ft in mountainous terrain), useful when deviating off airways for weather. It serves the same purpose as LSALT off-airway; use the highest applicable value.',
  reference: 'Chart legend / AIP ENR 1.1'
},

{
  question: 'Instrument approach procedures are designed assuming the aircraft has:',
  options: [
    'All of the aircraft systems remaining fully functional at every single moment of the flight',
    'Maximum engine power being available throughout the whole approach',
    'Engines at normal power, normal manoeuvring and standard performance for the published approach category',
    'No performance assumptions being made in the design'
  ],
  correct: 2,
  explanation: 'Procedures assume normal performance for the approach category. An engine-out missed approach changes the climb gradient markedly, so the published missed-approach clearance may not be achievable; the pilot assesses performance against the gradient before commencing an abnormal-configuration approach.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'VOR/DME position-fix accuracy depends on:',
  options: [
    'The geometry of the radial and DME-arc intersection, best when they cross near 90 degrees',
    'Only the strength of the received VOR signal at the time',
    'A fixed 0.5 nm in all cases, regardless of the crossing geometry of the fix',
    'Only the DME distance measured from the ground station'
  ],
  correct: 0,
  explanation: 'A fix is the intersection of a radial and a DME circle; accuracy is best when they cross near 90 degrees and worst when nearly parallel, which produces a long, thin error ellipse. The same geometry principle applies to any pair of intersecting position lines.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'With a crosswind component of 15 kt and a TAS of 150 kt, the approximate wind correction angle is:',
  options: [
    '3 degrees',
    '9 degrees',
    '6 degrees',
    '12 degrees'
  ],
  correct: 2,
  explanation: 'Wind correction angle is approximately 60 times the crosswind component divided by TAS = 60 times 15/150 = 6 degrees. The aircraft is headed into wind by this angle to track the desired course.',
  reference: 'Navigation - wind correction angle'
},

{
  question: 'A conditional clearance such as \'after the landing Airbus, line up and wait\' requires the pilot to:',
  options: [
    'Identify the landing Airbus, confirm it has landed and cleared, then line up on the runway',
    'Line up on the runway immediately, without regard for the position of the landing Airbus',
    'Request confirmation from ATC before moving',
    'Treat it as invalid, since conditional clearances are not used here'
  ],
  correct: 0,
  explanation: 'A conditional clearance is acted on only once the stated condition is met: visually identify the referenced aircraft, confirm it has landed and cleared (or passed), then execute. If the condition cannot be confirmed, query ATC before moving, runway incursions have followed misidentification.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The published climb gradient on a SID must be achieved because:',
  options: [
    'It is only a recommendation to pilots and not a firm requirement',
    'Such gradients apply only to jet-powered aircraft, not piston types',
    'The gradient gives obstacle clearance, so if the aircraft cannot achieve it that SID is unavailable',
    'It is merely an ATC minimum, so the pilots may freely choose to climb slower if they wish'
  ],
  correct: 2,
  explanation: 'The SID gradient (standard 200 ft/nm, higher where terrain demands) is the minimum for obstacle clearance. If the aircraft cannot achieve it (weight, temperature, engine out), that SID is not available; the pilot advises ATC and arranges an alternative rather than attempting it.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'Under the IFR, a single-engine aircraft:',
  options: [
    'May never be operated under the IFR in any circumstances',
    'May fly in private operations under the IFR, but carrying passengers for hire in IMC is restricted',
    'Has exactly the same operational IFR privileges as a twin-engine aircraft does in IMC',
    'Is limited to flight only above FL200 whenever it is operating under the IFR'
  ],
  correct: 1,
  explanation: 'Single-engine IFR is permitted for private operations, but because of the consequences of an engine failure in IMC, carrying passengers for hire or reward in IMC is restricted under the applicable rules; the pilot must weigh terrain, weather and height throughout.',
  reference: 'CASR Part 91 / MOS 4.1.1'
},

{
  question: 'An aircraft \'cleared to FL120 via flight-planned route\' must maintain:',
  options: [
    'The exact filed route and the cleared level',
    'Maintain any altitude up to FL120 as preferred by the pilot',
    'Reach FL120 only after top of climb, any altitude during the climb',
    'Treat the filed route as advisory, with the pilot selecting the track'
  ],
  correct: 0,
  explanation: 'A clearance is an instruction: maintain the cleared level and the filed route until ATC amends it. Deviating, e.g. for weather, without advising ATC breaks the separation agreement, so the pilot requests a deviation and states the offset and rejoin estimate.',
  reference: 'AIP ENR 1.1 / Part 91'
},

{
  question: 'Australian ATC surveillance includes:',
  options: [
    'Primary radar, secondary radar with Mode A/C/S, ADS-B and multilateration',
    'Only primary radar coverage, across the whole country',
    'Only ADS-B, and then only at the lower altitudes en-route',
    'Radar only, and only within the capital-city terminal areas'
  ],
  correct: 0,
  explanation: 'Surveillance combines primary radar (skin returns), secondary radar (transponder Mode A/C/S, giving identity and altitude), ADS-B (GPS position broadcast, with wide ground-station coverage) and multilateration. Together they extend surveillance to lower levels and more remote areas than radar alone.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'The radio navigation equipment that must be carried for an IFR flight is determined by:',
  options: [
    'The personal preference of the pilot in command on the day',
    'The navigation systems required for the planned route and approaches',
    'The colour of the airspace as it is shown on the chart',
    'Whether the flight is being conducted by day or by night'
  ],
  correct: 1,
  explanation: 'The aircraft must carry the navigation systems needed for the intended route and the approaches to be flown (for example VOR/DME, or an approved GNSS), all serviceable; the requirement follows the route and procedures, not pilot preference.',
  reference: 'CASR Part 91 / MOS 3.1.4'
},

{
  question: 'A "speed restriction" on an approach chart of "210 kt maximum" before the FAF applies to:',
  options: [
    'The published maximum indicated airspeed for that approach segment, mandatory unless ATC advises otherwise',
    'The aircraft\'s maximum certified manoeuvring speed and applies only to turbulent conditions',
    'Only to jet aircraft, piston and turboprop aircraft are exempt from published speed restrictions',
    'An advisory target speed only, pilots may exceed it at their discretion'
  ],
  correct: 0,
  explanation: 'Approach speed restrictions: mandatory unless ATC advises otherwise. Published to ensure the aircraft remains within the designed obstacle clearance area for its category and to allow ATC sequencing. Exceeding published speeds may take the aircraft outside the protected area. At the FAF: reduce to final approach speed. If unable to comply: advise ATC. Ensuring the aircraft remains within the obstacle clearance protected area.',
  reference: 'AIP ENR 1.5 / ICAO Doc 8168'
},

{
  question: 'A true track of 130 degrees in an area of 11 degrees East variation corresponds to a magnetic track of:',
  options: [
    '141 degrees',
    '119 degrees',
    '130 degrees',
    '111 degrees'
  ],
  correct: 1,
  explanation: 'Variation east, magnetic least: magnetic track = true track minus easterly variation = 130 minus 11 = 119 degrees. Westerly variation is added (variation west, magnetic best).',
  reference: 'Navigation - magnetic variation'
},

{
  question: 'The standard (ISA) temperature at FL100 is approximately:',
  options: [
    'Plus 5 degrees C',
    'Plus 15 degrees C',
    'Minus 15 degrees C',
    'Minus 5 degrees C'
  ],
  correct: 3,
  explanation: 'ISA is 15 degrees C at mean sea level, decreasing about 2 degrees C per 1,000 ft. At FL100 (10,000 ft): 15 minus (2 x 10) = minus 5 degrees C. Comparing actual OAT with ISA gives the ISA deviation used for performance and altimetry.',
  reference: 'ICAO Standard Atmosphere'
},

{
  question: 'To lose 1,500 ft in 3 minutes, the rate of descent required is:',
  options: [
    '500 ft/min',
    '300 ft/min',
    '750 ft/min',
    '1,000 ft/min'
  ],
  correct: 0,
  explanation: 'Rate of descent = height to lose divided by time = 1,500 ft in 3 minutes = 500 ft per minute. The descent is planned so this rate keeps the aircraft on the desired profile.',
  reference: 'Navigation - descent planning'
},

{
  question: 'A GNSS approach "LPV" (Localiser Performance with Vertical guidance) provides:',
  options: [
    'The same minima as a standard ILS',
    'LPV is only available on military aircraft',
    'SBAS-augmented GNSS lateral and vertical guidance with performance approaching CAT I ILS',
    'LPV approaches use the ILS glide slope combined with GPS lateral guidance'
  ],
  correct: 2,
  explanation: 'LPV (Localiser Performance with Vertical guidance): uses SBAS (Satellite Based Augmentation System — in Australia this is the SBAS trial system) to provide highly accurate lateral and vertical guidance. With sufficient SBAS coverage, LPV minima can be as low as CAT I ILS (200 ft DA, RVR 550 m). The aircraft must have SBAS-capable avionics and the approach must be listed as LPV in the database.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An altimeter set to 1013 hPa when the actual QNH is 1003 hPa (about 30 ft per hPa) will:',
  options: [
    'Read about 300 ft too low, so the aircraft is higher than indicated',
    'Read about 300 ft too high, so the aircraft is lower than indicated',
    'Read correctly, since QNH does not affect the altimeter',
    'Read about 30 ft too high, a negligible error'
  ],
  correct: 1,
  explanation: 'The set pressure (1013) is 10 hPa higher than the actual QNH (1003). At about 30 ft per hPa the altimeter over-reads by roughly 300 ft, so the aircraft is about 300 ft lower than indicated, a hazard near terrain.',
  reference: 'AIP ENR 1.7 - altimetry'
},

{
  question: 'Flying at a groundspeed of 120 kt for 18 minutes, the distance covered is:',
  options: [
    '24 nm',
    '30 nm',
    '36 nm',
    '42 nm'
  ],
  correct: 2,
  explanation: 'Distance equals groundspeed times time. 120 kt for 18 minutes (0.3 hour) gives 120 x 0.3 = 36 nm. Reliable groundspeed and timing keep position estimates accurate between fixes.',
  reference: 'Navigation - time, speed and distance'
},

{
  question: 'A no-gyro approach is requested when:',
  options: [
    'The aircraft is not fitted with any GPS receiver',
    'No-gyro approaches are only ever conducted within flight simulators on the ground',
    'The heading indicator has failed, so ATC gives turn commands instead of specific headings',
    'A no-gyro approach is another name for an NDB approach'
  ],
  correct: 2,
  explanation: 'If the directional gyro fails in IMC, the pilot requests a no-gyro approach: ATC watches the radar return and issues \'turn left/right\' and \'stop turn\', and the pilot flies standard-rate turns on the turn coordinator. It is a practical partial-panel emergency procedure.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'A fly-by waypoint differs from a fly-over waypoint in that:',
  options: [
    'At a fly-by waypoint the turn begins before the waypoint to anticipate the track change',
    'Fly-by and fly-over waypoints are entirely identical to each other in every way',
    'Fly-by waypoints are used only on STARs and nowhere else',
    'Fly-over waypoints require specific ATC permission each time'
  ],
  correct: 0,
  explanation: 'At a fly-by waypoint the FMS starts a lead turn before the fix to roll smoothly onto the next leg. At a fly-over waypoint the aircraft must cross the fix before turning, used where obstacle clearance requires it; turning early at a fly-over waypoint breaches that clearance.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'With 96 litres of usable fuel and a cruise burn of 32 litres per hour, the endurance is:',
  options: [
    '2 hours',
    '2 hours 30 minutes',
    '3 hours',
    '3 hours 30 minutes'
  ],
  correct: 2,
  explanation: 'Endurance equals usable fuel divided by fuel flow: 96 / 32 = 3 hours. Required reserves (including the fixed final reserve) must be subtracted before working out the time available for the planned flight.',
  reference: 'Flight planning - fuel'
},

{
  question: 'When ATC issues \'speed 250 kt by 10 DME\', the pilot must:',
  options: [
    'Be at 250 kt by the time the aircraft reaches 10 DME from the named station',
    'Slow to 250 kt well before reaching 10 DME from the station',
    'Slow to 250 kt only after passing 10 DME from the station',
    'Treat the 250 kt by 10 DME instruction as advisory information only'
  ],
  correct: 0,
  explanation: 'The aircraft must be established at 250 kt as it passes 10 DME, so the deceleration is planned to be complete by that point, not begun there. ATC uses such constraints for sequencing, and the pilot advises at once if unable to comply.',
  reference: 'AIP ENR 1.1'
},

{
  question: 'An en-route alternate (ERA) differs from a destination alternate in that:',
  options: [
    'An en-route alternate is for an emergency before destination, a suitable aerodrome reachable from the route',
    'An ERA is required only for those flights that are conducted out over the deep open ocean',
    'An ERA is exactly the same thing as the nominated destination alternate',
    'An ERA is required only for turbojet-powered aircraft, not piston types'
  ],
  correct: 0,
  explanation: 'An ERA is an aerodrome along or near the route where the aircraft could divert if an emergency forces a landing before the destination, used in extended-range and remote-area planning. It must be within the specified distance of the route with suitable facilities and forecast conditions.',
  reference: 'Part 91 / AIP ENR 1.1'
},

{
  question: 'When a SID contains "climb via SID to FL100," it means:',
  options: [
    'Climb to 1,000 ft and wait for further clearance',
    'Follow the lateral route of the SID and ALL published altitude and speed constraints up to FL100',
    'Climb directly to FL100 without following the lateral SID route',
    'Only the single altitude constraint at the very end of the SID is the one that applies'
  ],
  correct: 1,
  explanation: '"Climb via SID": comply with ALL published altitude constraints (AT, AT OR ABOVE, AT OR BELOW) and speed restrictions on the SID while climbing to the cleared altitude. This is different from "climb to FL100, proceed direct" — via SID means follow the procedure exactly.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'An IFR flight plan "overdue aircraft" procedure is initiated when:',
  options: [
    'The aircraft is reported just 5 minutes late arriving at the destination',
    'The aircraft has not arrived or made contact within the specified time after ETA',
    'Only when the pilot has not filed any flight plan',
    'Overdue procedures apply only to VFR flights, not IFR'
  ],
  correct: 1,
  explanation: 'Overdue aircraft: if the aircraft does not arrive or cancel by ETA + tolerance (typically 30 min), ATC/JRCC initiates: uncertainty phase, alert phase, distress phase (SAR mobilisation). Always cancel on arrival.',
  reference: 'AIP ENR 1.10'
},

{
  question: 'A GNSS integrity failure alert during an approach requires:',
  options: [
    'Continue the approach as planned, while monitoring the ongoing integrity alert',
    'Only discontinue if the alert persists for more than 30 seconds',
    'Request ATC radar guidance and continue',
    'Immediately execute the missed approach, as a GNSS integrity alert means the position cannot be trusted'
  ],
  correct: 3,
  explanation: 'GNSS integrity alert: immediate missed approach. An integrity alert means GPS position may have an error exceeding approach tolerances. Published minima assume GPS is within RAIM limits. Continuing with a GNSS integrity warning risks flying into terrain. Advise ATC and use alternate approach/navaid.',
  reference: 'AIP ENR 1.5'
},

{
  question: 'On a 3-degree approach path (about 300 ft per nm), the height above the threshold at 5 nm to run is approximately:',
  options: [
    'About 900 ft',
    'About 1,200 ft',
    'About 1,500 ft',
    'About 1,800 ft'
  ],
  correct: 2,
  explanation: 'On a 3-degree path the aircraft loses about 300 ft per nm, so at 5 nm the height above the threshold elevation is about 5 x 300 = 1,500 ft. Checking height against distance confirms the aircraft is on profile.',
  reference: 'ICAO Doc 8168 / AIP ENR 1.5'
},

{
  question: 'An IFR aircraft in Australia may be cleared for a visual approach when:',
  options: [
    'The visibility is below the published landing minima and the pilot requests special handling from ATC',
    'The published instrument approach is unserviceable, and the pilot may proceed only in that single case',
    'Within 30 nm by day, clear of cloud and in sight of ground or water with at least 5,000 m visibility',
    'Radar coverage happens to be unavailable at the destination aerodrome and the pilot needs guidance'
  ],
  correct: 2,
  explanation: 'An IFR pilot may discontinue the IAP for a visual approach when, by day, within 30 nm, clear of cloud and in sight of ground or water with visibility at least 5,000 m (or the aerodrome in sight); by night the aircraft stays at not below LSALT/MSA or step until established. These are the Australian visual-approach criteria.',
  reference: 'AIP ENR 1.5 / GEN 3.4'
},

]
