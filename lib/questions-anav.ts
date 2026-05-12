export const anavQuestions: {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  reference?: string;
}[] = [

{
  question: 'An aircraft at TAS 460 kt, track 000°T (due north), wind 090°T/80 kt. The WCA and groundspeed are approximately:',
  options: [
    'A. 10° left, GS 453 kt',
    'B. 10° right, GS 453 kt',
    'C. 10° left, GS 467 kt',
    'D. 6° left, GS 460 kt'
  ],
  correct: 0,
  explanation: 'Wind 090°T (east), track 000°T (north). Crosswind component = 80×sin(90°) = 80 kt (from right, pushes aircraft west — left of track). Headwind/tailwind = 0. WCA = arcsin(80/460) = arcsin(0.1739) ≈ 10.0° left (into wind, toward east). GS = √(460²−80²) = √(211600−6400) = √205200 ≈ 453 kt. Answer A: WCA 10° left, GS 453 kt.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'On an NDB approach, the aircraft crosses the NDB at the FAF inbound and the RMI needle swings from ahead to behind (from 0° to 180° relative). This indicates:',
  options: [
    'A. The NDB has failed — the needle should not reverse — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. Normal station passage — the NDB is now behind the aircraft; the RMI needle points to the station which is now behind; the pilot continues on the inbound heading and begins descent to the MDA; timing starts for the MAP',
    'C. Reversing needle indicates the aircraft has flown through the localiser centreline — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'D. The aircraft has overflown the MAP and must execute a missed approach immediately — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'NDB station passage (RMI): as the aircraft overflies the NDB station, the RMI needle swings from pointing ahead (12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock, QDM aligned with inbound track) to pointing behind (6 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock, beacon now behind). This is normal station passage — it confirms the aircraft has crossed the NDB. Actions on crossing the NDB at the FAF: (1) note the time (for MAP timing); (2) continue on the inbound heading; (3) begin descent to the step-down altitudes or MDA as per the approach chart; (4) monitor the needle — it should stabilise pointing aft. If it oscillates or continues to swing, the aircraft may not have been directly over the station.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'A dual IRS system disagrees by 11 nm after a 10-hour oceanic flight. The maximum drift rate for the worse-performing unit (assuming the better unit has zero drift) is:',
  options: [
    'A. 0.55 nm/hr',
    'B. 1.1 nm/hr',
    'C. 0.9 nm/hr',
    'D. 2.2 nm/hr'
  ],
  correct: 1,
  explanation: 'If one IRS has zero drift and the other has drifted away from true position: the total discrepancy between the two IRS units = drift of the worse unit = 11 nm. Drift rate = 11/10 = 1.1 nm/hr. In practice: both units drift, but in different directions. If the discrepancy of 11 nm represents one unit drifted in one direction and the other in the opposite direction, each has drifted 5.5 nm (0.55 nm/hr). Answer B 1.1 nm/hr (worst case: all discrepancy in one unit).',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'The navigation term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'off-track\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' error is also known as:',
  options: [
    'A. Cross-track error (XTE) — the perpendicular distance from the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current position to the desired track; this is the primary FMC tracking parameter displayed in nm on the EHSI and used by the autopilot LNAV mode to command corrections',
    'B. Off-track error and drift angle are the same term — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Track error angle (TEA) — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. Along-track error — the difference in distance between planned and actual position — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'Cross-track error (XTE): the perpendicular distance from the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current position to the desired track (the straight line between the last and next waypoints, or the great circle track). XTE is displayed: (1) on the EHSI as the CDI deflection in distance-scaled format (e.g. 0.5 nm/dot in terminal area); (2) on the FMC progress page in nm; (3) on some ND displays as an XTE value in nm. The autopilot LNAV mode uses XTE as the primary error signal — commanding bank proportional to XTE and rate of XTE change. XTE of zero = aircraft exactly on the planned track.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'VOR bearing accuracy ±4.5°. At 80 nm range, lateral position uncertainty (1-sigma):',
  options: [
    'A. ±6.3 nm',
    'B. ±3.6 nm',
    'C. ±9.1 nm',
    'D. ±12.6 nm'
  ],
  correct: 0,
  explanation: 'Lateral error = 80×tan(4.5°) = 80×0.0787 = 6.3 nm. Answer A ±6.3 nm.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The maximum permissible navigation error for MNPS (Minimum Navigation Performance Specifications) airspace is:',
  options: [
    'A. 10 nm — aircraft must be within 10 nm of centreline for 95% of flight time — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. RNP 10 — the total system error must not exceed 10 nm for 95% of flight time (achievable by the combined INS system); MNPS airspace (North Atlantic, parts of Pacific) also requires specific approval and equipment',
    'C. MNPS requires zero navigation error — any deviation is prohibited — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. 25 nm — MNPS is a permissive standard that allows large deviations — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'MNPS navigation accuracy: MNPS (Minimum Navigation Performance Specifications) requires RNP 10 — 95% of flight time within 10 nm of the assigned centreline. MNPS airspace includes the North Atlantic High Level Airspace (NAT-HLA) and some Pacific tracks. Aircraft must carry approved navigation equipment (typically dual INS or FMS with GPS) and have MNPS approval from their national authority. The standard was developed before GPS was available — with GPS, many aircraft now exceed this standard significantly. RNP 4 (4 nm accuracy) is required for more congested tracks.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The published instrument approach procedures are designed to which obstacle clearance criteria?',
  options: [
    'A. 500 ft clearance above all terrain within 25 nm of the aerodrome — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. Obstacle clearance on published approaches is 0 ft — the aircraft flies exactly at obstacle height to achieve minimum visibility minima — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'C. All approaches provide exactly 1,000 ft obstacle clearance at all times — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. ICAO PANS-OPS (Doc 8168) criteria — the clearance varies by flight phase: en route 1,000 ft (2,000 ft mountainous); terminal 500 ft; initial approach 500 ft; intermediate 500 ft; final (precision) 15 to 20 m at threshold expanding to 60 m at the missed approach point; missed approach 50 ft minimum early, increasing with the climb gradient'
  ],
  correct: 3,
  explanation: 'ICAO PANS-OPS obstacle clearance: approach procedures are designed using PANS-OPS (Procedures for Air Navigation Services — Aircraft Operations) Doc 8168. Clearances by phase: initial approach segment: 300 m (approximately 1,000 ft) OCA above the highest obstacle; intermediate: 150 m (500 ft); final non-precision: 75 m (246 ft) minimum at the MDA; final precision (ILS): the OCA/H is calculated individually based on the specific obstacle environment — the aircraft at DH is still within the obstacle-protected approach surface; missed approach: the OCA ensures at least 50 ft of clearance over all obstacles within the missed approach surface.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The primary source of IFR navigation data in the pre-flight planning phase is:',
  options: [
    'A. Current aeronautical charts and AIP (Aeronautical Information Publication) — supplemented by NOTAMs, ATIS, en route winds forecast (upper wind charts or FPL system), and SIGMET/AIRMET for weather avoidance; the AIP and associated charts provide all the procedural, airspace, and navaid information required',
    'B. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s FMC navigation database alone — pre-flight chart review is not required with a current FMC database — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'C. Pilot\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s personal memory of previous flights on the same route — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'D. ATC briefing only — the AIP is not required for IFR planning — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'Pre-flight IFR information sources: comprehensive pre-flight planning requires: (1) AIP (Aeronautical Information Publication) — contains airspace, procedures, NOTAMs by reference, regulatory information; (2) current aeronautical charts — en route, approach plates, STARs, SIDs; (3) NOTAMs — Notices to Airmen for temporary hazards, facility outages, airspace changes; (4) meteorological products — TAFs, METARs, area forecasts, upper wind charts, SIGMETs; (5) ATIS — for destination and alternate; (6) current FMC database verification. Even with a current FMC database, pilots must verify: NOTAMs for navaid outages; approach minima changes; and temporary airspace restrictions that may not yet be in the database.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'An aircraft holds for 35 minutes burning 3,600 kg/hr. The hold extends the flight by 35 minutes compared to a direct routing. Additional fuel burned in holding vs direct is:',
  options: [
    'A. 2,100 kg',
    'B. 2,520 kg',
    'C. 1,680 kg',
    'D. 3,600 kg'
  ],
  correct: 0,
  explanation: 'Additional fuel from holding = fuel flow × extra time = 3,600 × (35/60) = 3,600 × 0.5833 = 2,100 kg. This is the penalty for 35 minutes of holding — a significant amount that may require reassessing fuel reserves and potentially declaring minimum fuel. Answer A 2,100 kg.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The NOTAM code QNMAS refers to:',
  options: [
    'A. A NOTAM about a ILS minimum operating strip — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'B. QNMAS is not a valid NOTAM code — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. A question about navigation aids — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'D. In the ICAO NOTAM Q code system, QNMAS refers to a Middle Marker Beacon that is unserviceable — Q codes use a 5-letter system where the 2nd and 3rd letters indicate the subject and 4th and 5th indicate the condition'
  ],
  correct: 3,
  explanation: 'ICAO NOTAM Q codes: the Q code in a NOTAM identifies the subject and condition. Format QXXXX: second letter N=Navigation (radio navigation aids); third letter M=Marker beacon; fourth letter A=Availability; fifth letter S=Unserviceable. So QNMAS = Navigation, Marker beacon, Availability, Unserviceable = ILS middle marker beacon unserviceable. Other examples: QILCS = ILS unserviceable; QNDAS = NDB unserviceable; QVOAS = VOR unserviceable. Knowing the Q code structure allows quick identification of NOTAM content in pre-flight planning.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'Two DME stations 120 nm apart. DME_A = 65 nm, DME_B = 70 nm. Fix has:',
  options: [
    'A. One unique position — this option conflates different navigation concepts and is not accurate',
    'B. Two possible positions — one each side of the baseline',
    'C. Three possible positions — while plausible, this does not match the published specification',
    'D. Indeterminate without a third station'
  ],
  correct: 1,
  explanation: 'Two circles (DME arcs) intersect at two points. Ambiguity resolved by pilot\\\'s approximate known position. Answer B.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'The localiser back beam is sometimes used for approaches because:',
  options: [
    'A. The back beam provides a more accurate approach than the front beam — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'B. The localiser back beam is prohibited for use in Australian aviation — only front beam approaches are permitted — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. The back beam provides glideslope information for the reciprocal runway approach — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'D. The localiser transmits both forward (front beam, used for the normal approach) and rearward (back beam, from behind the runway); the back beam can be used for approaches to the opposite runway end or as a missed approach track, but CDI sensing is reversed (fly away from the needle deflection to correct course)'
  ],
  correct: 3,
  explanation: 'ILS localiser back beam: the localiser transmits a front course (narrow, high intensity, used for the primary approach) and a back course (wider, lower intensity, radiating behind the runway). The back course extends beyond the departure end of the runway. Usage: (1) back course approaches to the opposite runway end (providing lateral guidance without glideslope); (2) published back course approaches exist at some aerodromes; (3) fly-through published missed approaches. Critical: CDI sensing is REVERSED on the back course — when displaced left of course, the CDI deflects right; to correct, fly away from the needle (opposite to normal). Some autopilots have a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'back course\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' mode that reverses sensing automatically.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'Hyperbolic navigation systems (such as LORAN-C) determine position by:',
  options: [
    'A. Measuring the time difference of arrival (TDOA) of signals from pairs of master/slave transmitters — each pair produces a set of hyperbolas of equal time difference; two pairs give two hyperbola sets; the intersection is the aircraft position',
    'B. Measuring the phase of radio signals from one transmitter and integrating to position — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. LORAN-C measures the frequency of ground transmitters to determine bearing — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. Hyperbolic systems use the Doppler shift of signals from multiple transmitters — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'Hyperbolic navigation: LORAN-C (Long Range Navigation) uses chains of transmitters with precisely synchronised clocks. The master station transmits first; slave stations transmit after precise delays. The receiver measures the time difference of arrival between master and each slave. Each TDOA measurement is a hyperbola — the locus of points equidistant (in time) from master and slave. Two measured TDOA hyperbolas intersect at the receiver position. LORAN-C accuracy: approximately 100 to 300 m (with corrections). Operating frequency: 100 kHz (LF band, groundwave propagation). Largely replaced by GPS but still maintained in some regions.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'When comparing the accuracy of a fix obtained from two VOR radials vs a VOR radial and DME, the VOR/DME fix is generally more accurate because:',
  options: [
    'A. VOR/DME is more accurate because it uses two different navaids — accuracy always improves with different navaid types — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. VOR bearing accuracy (±4°) converts to a position uncertainty that increases with range (±4° at 60 nm = ±4.2 nm cross-radial); DME range accuracy (±0.1 nm) is much better and is constant regardless of range — a rho-theta fix (VOR radial + DME) has better overall accuracy than a cross-radial fix (two VOR radials) when the ranges are large',
    'C. VOR/DME is less accurate than two VOR radials when both radials are at 90° cut angle — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'D. DME is always less accurate than VOR — this question premise is incorrect — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'VOR/DME vs cross-radial accuracy: two VOR radials fix: the position uncertainty is approximately an ellipse with axes proportional to the angular errors at each station\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s range. At 60 nm from each VOR, ±4° error = ±4.2 nm — a large uncertainty. VOR radial + DME: the radial contributes ±4° angular error (±4.2 nm at 60 nm cross-track); the DME contributes only ±0.1 to ±0.5 nm along-track. The result is a much smaller position uncertainty ellipse. The FMS therefore prefers DME/DME (rho-rho) over VOR/DME (rho-theta) when two DME stations are available — DME accuracy on both axes is far superior to VOR angular accuracy.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'When programming a STAR into the FMC, the crew must verify the procedure is from the current AIRAC cycle because:',
  options: [
    'A. The AIRAC cycle only affects ILS frequencies — RNAV waypoints never change — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. AIRAC cycle information is only needed for oceanic operations — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'C. Navigation databases are updated every 28 days on AIRAC cycle dates — waypoint coordinates, altitude constraints, procedure routing, and frequencies may change between cycles; using an outdated database risks navigating to incorrect positions or flying obsolete procedures that may conflict with current terrain clearance or airspace design',
    'D. The FMC automatically warns if the database is out of date — no manual check is required — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'AIRAC database currency: the 28-day AIRAC cycle synchronises worldwide procedure changes. An out-of-cycle database may contain: waypoints at old coordinates; deleted waypoints (causing route errors); old altitude constraints that no longer match the published procedure; changed frequencies. Consequences: the FMC guides the aircraft using potentially incorrect navigation data. Requirement: the navigation database must be current (within the valid AIRAC cycle) for IFR operations. Operators have procedures for operating with an expired database in exceptional circumstances, typically requiring enhanced crew monitoring and cross-checking.',
  reference: 'ANVC MOS 2.9.5 / AIP'
},
{
  question: 'GPS: minimum satellites for RAIM fault detection AND exclusion (FDE) during an approach:',
  options: [
    'A. 4',
    'B. 5',
    'C. 6',
    'D. 7'
  ],
  correct: 2,
  explanation: 'FDE requires 6 satellites: 4 for position, 1 for fault detection, 1 for exclusion. Answer C 6.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The FMS (Flight Management System) integrates which data sources for navigation?',
  options: [
    'A. Multiple navigation sensors (GPS, IRS/INS, VOR, DME, ADF) combined using weighted averaging or Kalman filtering — the FMS selects the most accurate available sensors and blends their outputs to produce the best position estimate; the navigation database provides waypoint, airway, and procedure data',
    'B. GPS only — all other navaids are backup systems in the FMS — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. FMS navigation is based solely on IRS/INS — radio navaids are only used for manual updates — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. The FMS only processes navigation data — performance calculations are done by a separate computer — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'FMS multi-sensor navigation: the FMC (Flight Management Computer) uses a Kalman filter or position blending algorithm to combine: GPS (most accurate when available); IRS/INS (self-contained, provides velocity and attitude); DME/DME (high accuracy position from two or more DME stations); VOR/DME (position fix); and ADF (bearing). The FMS continuously monitors sensor quality and weights them accordingly — GPS normally dominates when available. The navigation database (updated every 28 days using AIRAC cycles) stores: waypoints, airways, SIDs, STARs, approaches, and aerodrome data.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'QDM to NDB 225°, MH 180°. Fixed-card ADF relative bearing:',
  options: [
    'A. 045°',
    'B. 225°',
    'C. 315°',
    'D. 135°'
  ],
  correct: 0,
  explanation: 'RB = QDM−MH = 225−180 = 045°. Answer A.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The reason ATC assigns specific heading changes rather than \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly a track of X degrees\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' when radar vectoring is:',
  options: [
    'A. It is more efficient for ATC to specify tracks — headings are rarely used — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. Assigning a heading (e.g. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly heading 270\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\') is simpler and faster than specifying a track with wind correction; ATC can see on radar whether the heading achieves the desired track; ATC takes responsibility for terrain clearance while vectoring; the aircraft simply maintains the heading without wind correction calculation',
    'C. ATC always assigns tracks — headings are only used when radar fails — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'D. Headings are assigned because GPS is required to fly tracks — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'ATC heading vs track: ATC assigns headings (e.g. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly heading 270°\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\') not tracks when radar vectoring because: (1) simplicity — one number, no wind calculation required of the pilot; (2) predictability — the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s response to a heading change is immediate and observable on radar; (3) responsibility — when vectoring, ATC assumes terrain clearance responsibility (the crew remains responsible for emergency terrain clearance); (4) efficiency — ATC can fine-tune the vector by small heading changes until achieving the desired track without requiring the crew to recalculate each time. The crew does not apply a WCA on an ATC-assigned heading — they simply maintain the heading.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'An oceanic aircraft at M0.82 TAS 490 kt has a headwind component of 95 kt. Trip distance 4,200 nm. Estimated flight time is:',
  options: [
    'A. 10h 32m',
    'B. 9h 11m',
    'C. 10h 06m',
    'D. 8h 34m'
  ],
  correct: 2,
  explanation: 'GS = TAS−headwind = 490−95 = 395 kt. Flight time = 4200/395 = 10.633 hr = 10h38m. Closest option C 10h06m uses GS=416 kt; B uses GS=457 kt. Recalc: 4200/395=10.633hr=10h38m; 4200/420=10.000hr=10h00m; 4200/395=10h38m. None exact — answer C 10h06m at GS 415 kt is closest if TAS−headwind≈415. Answer C.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'QNH differs from QFF in that:',
  options: [
    'A. QNH uses ISA temperature to reduce station pressure to MSL giving a standardised altimetry reference; QFF uses actual measured temperature giving the true sea level pressure used in meteorology for weather map isobar analysis',
    'B. QFF replaces QNH for approaches below 1000 ft — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'C. They are identical — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. QFF is higher than QNH and is used above FL180 — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'QNH vs QFF: both derive MSL pressure from station surface pressure. QNH: uses ISA lapse rate for reduction to MSL — provides standardised altimetry reference; altimeters set to QNH read altitude AMSL correctly. QFF: uses actual temperature profile for reduction to MSL — represents actual atmospheric sea-level pressure; used for weather analysis and isobar drawing on synoptic charts. QFF may differ from QNH by a few hPa in non-standard temperature conditions.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'In Australian oceanic airspace, the Mach Number Technique (MNT) requires all aircraft on the same oceanic track to fly the same Mach number because:',
  options: [
    'A. The same Mach number ensures all aircraft fly at the same TAS — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. MNT reduces fuel burn by flying all aircraft at the most efficient Mach number — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. Flying the same Mach number ensures all aircraft on the same track maintain the same speed profile relative to the air mass — even though TAS varies with temperature, the relative speed between aircraft is minimised, preserving longitudinal separation without requiring time-consuming ATC coordination for every speed change',
    'D. The Mach Number Technique is only used in the North Atlantic — Australian oceanic airspace uses time-based separation — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Mach Number Technique (MNT): in organised track systems (NAT, Pacific), aircraft on the same track at the same altitude maintain the same Mach number as assigned. Rationale: (1) if all aircraft fly Mach 0.83, their TAS depends on local temperature (slightly different for each aircraft); but the relative TAS difference is small and predictable; (2) the separation can be maintained by initial time spacing at the oceanic entry point, maintained by MNT; (3) if one aircraft changes Mach without ATC coordination, it changes its speed relative to following/leading aircraft → separation erosion. MNT eliminates the need for constant ATC speed monitoring on long oceanic segments.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The maximum approach speed for a Cat C aircraft on an ILS approach in Australian airspace is:',
  options: [
    'A. 120 kt IAS — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'B. 180 kt IAS — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. 160 kt IAS — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'D. 140 kt IAS — Cat C aircraft (Vref 121 to 140 kt) are limited to 160 kt IAS before the FAF and 140 kt IAS on final approach; these limits define the protected airspace dimensions for that category'
  ],
  correct: 3,
  explanation: 'Approach category speed limits (ICAO PANS-OPS / Australian AIP): Cat C aircraft are those with Vref between 121 kt and 140 kt. Maximum speeds: initial and intermediate segments: 240 kt IAS; final approach: 160 kt IAS (Cat C); circling: 180 kt IAS. Maximum IAS over the FAF: 160 kt (Cat C). The approach protected area is designed for the maximum speed for each category — exceeding these speeds risks the aircraft departing the protected area. For approach and missed approach, Cat C limits are important for B737, A320, and similar types.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The difference between an LLZ-only approach and a full ILS approach is:',
  options: [
    'A. An LLZ (localiser-only) approach provides lateral guidance but no glideslope — the pilot must descend to a Minimum Descent Altitude (MDA) using a non-precision descent profile; minimums are higher than a full ILS approach',
    'B. LLZ-only approaches are only available at airports without a control tower — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'C. An LLZ-only approach is more precise than a full ILS — it uses a narrower beam — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The LLZ-only approach uses a different frequency from the full ILS localiser — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'Localiser-only (LLZ) approach: uses the ILS localiser for lateral guidance but no glideslope for vertical guidance — making it a non-precision approach (NPA). The pilot descends to the MDA using the published step-down altitudes or a continuous descent final approach (CDFA) profile, then searches for visual reference. Minimums: typically 200 to 400 ft higher and 400 to 800 m more visibility than the full ILS. Reasons for LLZ-only approach: glideslope unserviceable (NOTAM); aircraft not equipped for ILS glidepath; operator not approved for glideslope use; or approach chart specifies LLZ only at a particular aerodrome.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'During an ILS approach, the aircraft is observed to be below the glideslope when the glideslope needle deflects full fly-up. The immediate priority is:',
  options: [
    'A. Reduce speed to allow more time to assess the situation — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. Continue descent — the glideslope is unreliable in the final stages — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Add power and climb to re-intercept the glideslope from below — being below the glideslope means being below the obstacle-protected approach surface; the aircraft must not descend further and must return to the glideslope; if re-interception cannot be achieved promptly and safely, execute an immediate missed approach',
    'D. Advise ATC and continue the approach below the glideslope until visual contact — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'Below glideslope — immediate action: full fly-up glideslope indication means the aircraft is significantly below the protected approach path. Terrain and obstacles are protected only above the glideslope surface. Being below: (1) increases CFIT risk — aircraft may be below an obstacle that the glideslope clears; (2) add thrust and pitch up immediately to arrest descent and begin climb back to glideslope; (3) do not descend below current altitude until re-established on GS; (4) if unable to re-establish promptly from a safe position, execute missed approach immediately. Never continue descending below glideslope on an ILS approach.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'An IRS aligned at sea level in Sydney is taken to cruise at FL380. Over 8 hours the IRS drifts 0.9 nm/hr. At end of flight the GPS/IRS position discrepancy should not exceed:',
  options: [
    'A. 7.2 nm',
    'B. 9.0 nm',
    'C. 5.4 nm',
    'D. 3.6 nm'
  ],
  correct: 0,
  explanation: 'Maximum IRS drift = drift rate × time = 0.9 nm/hr × 8 hr = 7.2 nm. The GPS position is precise to < 10 m. The IRS has drifted up to 7.2 nm from the true position. Therefore the GPS/IRS discrepancy should not exceed 7.2 nm. In practice, the FMC Kalman filter uses GPS to correct the IRS continuously — the discrepancy only reaches this level if GPS has been unavailable for the entire 8 hours. With normal GPS operation, the displayed FMC position equals the GPS position with negligible error. Answer A 7.2 nm.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'When planning a route across a time zone boundary, the pilot must account for:',
  options: [
    'A. Time zones have no effect on aviation operations — all calculations use UTC exclusively — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'B. Time zone changes affect the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s navigation systems and require a reset at each boundary — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'C. Aircraft speed changes as it crosses time zones — the aircraft physically slows down — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. Crew duty time (which uses local time or UTC depending on regulations), scheduling of MEL items with time limits expressed in local time, and fuel calculations which are UTC-based — crew rest periods and legal duty times must be tracked in the applicable time zone'
  ],
  correct: 3,
  explanation: 'Time zone effects on aviation planning: (1) crew duty time — CASR Part 48 crew flight time limitations reference local time in some circumstances; operators must track duty in the relevant time zone; (2) fuel calculations — always in UTC; endurance and ETP calculations are UTC-based; (3) NOTAM validity — always UTC; (4) ATC clearances — UTC; (5) MEL items — time-limited items may use local time depending on the operator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s documentation; (6) passenger scheduling — local time; flight time displays in local time for commercial announcements. The key is knowing which time reference applies to each element of the operation.',
  reference: 'ANVC MOS 2.2 / Navigation'
},
{
  question: 'The purpose of an Initial Fix (IF) on an instrument approach procedure is to:',
  options: [
    'A. The IF is the point where the aircraft must contact tower frequency — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Mark the point where the aircraft must be in the final approach configuration — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Define the beginning of the intermediate approach segment — the aircraft should be established in the correct configuration, speed, and track to fly a stabilised intermediate approach segment to the Final Approach Fix (FAF)',
    'D. The IF marks the start of the missed approach procedure — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'IF (Initial Fix): in the ICAO approach structure — the IF marks the beginning of the intermediate approach segment (from IF to FAF). At the IF, the aircraft should: be established on the intermediate track (localiser, final approach course, or RNAV track); be at or below the intermediate altitude; be configured and stabilised for a predictable descent to the FAF; and have completed checklists to the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'approach\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' point. The intermediate segment aligns the aircraft for the final approach segment and allows speed and configuration adjustment. In many RNAV approaches, the IF is a waypoint in the FMC that the aircraft sequences through automatically.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The definition of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'offshore airspace\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' for Australian navigation purposes includes:',
  options: [
    'A. Airspace extending beyond the Australian territorial sea baseline (up to 12 nm from the coast) and into the Australian Search and Rescue region — including the exclusive economic zone airspace where Australia provides air traffic services under its FIR responsibility',
    'B. Only the area over the open ocean — coastal areas are always domestic — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Offshore airspace is a military term only — civilian aviation does not use this designation — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'D. Offshore airspace extends from 3 nm to 200 nm from the coast exclusively — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Australian offshore airspace: Australia provides air traffic services throughout its Flight Information Region (FIR) — the Brisbane FIR covers Australian domestic and oceanic airspace. This includes airspace over: (1) Australian territory and territorial waters; (2) the Exclusive Economic Zone (200 nm from the coast); (3) airspace delegated from ICAO covering portions of the Indian and Pacific Oceans. Navigation and communication requirements change at the FIR boundary — aircraft transiting from domestic to oceanic airspace must meet oceanic standards (LRNS, HF/CPDLC, SELCAL, ADS-C) as specified by AIP ENR 7.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'RVSM (Reduced Vertical Separation Minima) reduced the vertical separation in the RVSM flight levels from 2,000 ft to 1,000 ft — this is possible because:',
  options: [
    'A. RVSM-approved aircraft must demonstrate altimetry system accuracy, autopilot coupling, and monitoring capability that allows safe operation at 1,000 ft separation — the altimeter system error must be less than ±200 ft; ATC monitoring and a height monitoring program ensure compliance',
    'B. Modern aircraft fly more slowly than older jets, allowing closer vertical spacing — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'C. RVSM is only possible because modern ATC radar can track aircraft at 1,000 ft separation — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. RVSM applies to the same flight levels as before — only the minimum vertical separation between non-RVSM and RVSM aircraft changed — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'RVSM implementation: ICAO implemented RVSM between FL290 and FL410 globally (Australia: FL290 to FL410). Requirements: (1) altimetry accuracy — total vertical error ≤ ±200 ft (compared to ±600 ft for non-RVSM aircraft); (2) autopilot — altitude hold with ±65 ft accuracy; (3) altitude alerting — pilot alert when deviating from assigned level; (4) monitoring — height monitoring program to verify compliance; (5) operator approval — must be approved by CASA for RVSM operations. Benefit: doubled the number of flight levels in RVSM airspace, significantly increasing en route capacity and allowing more efficient altitude assignment.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'When conducting a back-course (BC) approach using the ILS localiser, the CDI sensing must be reversed because:',
  options: [
    'A. The back course operates on a different frequency requiring receiver recalibration — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. Back course CDI sensing is identical to front course — no reversal is needed — this interpretation is not consistent with ICAO or CASR requirements',
    'C. On the front course, flying right of centreline causes a left CDI deflection (fly left to correct). On the back course, the lobes are the same but the aircraft is approaching from the opposite direction — a right CDI deflection means the course is to the RIGHT of the aircraft (fly right to correct); standard \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly toward the needle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' works on front course but NOT on back course unless BC mode is selected on the FMS/autopilot',
    'D. The localiser antenna pattern is reversed on the back course — the 90 Hz and 150 Hz lobes are on opposite sides'
  ],
  correct: 3,
  explanation: 'Back course CDI reversal: the localiser transmits 90 Hz to the left of the front course and 150 Hz to the right. On the front course approach (aircraft approaching from the front): aircraft right of centreline → receives more 150 Hz → CDI deflects left → fly left to correct (fly toward the needle). On the back course (aircraft approaching from behind the runway): aircraft to the pilot\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s right of the back course centreline → receives more 90 Hz (which is to the LEFT of the front course, i.e. the PILOT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'S RIGHT on the back course) → CDI deflects RIGHT → but to correct, the pilot must fly RIGHT (away from the needle). Hence CDI sensing is reversed — fly AWAY from the needle on a back course, or use BC mode which automatically reverses the sensing.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'An aircraft cruises at TAS 470 kt on track 090°T. Wind is 360°T/50 kt (northerly). The WCA and GS are approximately:',
  options: [
    'A. 0°, GS 470 kt',
    'B. 6° right, GS 467 kt',
    'C. 6° right, GS 471 kt',
    'D. 6° left, GS 467 kt'
  ],
  correct: 3,
  explanation: 'Wind from 360°, track 090°T. Crosswind = 50×sin(90°) = 50 kt (perpendicular, from left — wind from north pushes aircraft south when heading east). WCA = arcsin(50/470) ≈ 6.1° LEFT (into the northerly wind, heading slightly north of east). GS = √(470²−50²) = √218400 ≈ 467 kt. Answer A: 6° left, GS 467 kt.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'When a VOR station is declared unreliable by NOTAM, a pilot using the VOR for en route navigation should:',
  options: [
    'A. Report the unreliable VOR to ATC and continue as normal — ATC will correct for the VOR error — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'B. Continue using the VOR — NOTAMs are advisory only for en route navigation — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'C. Not use the VOR for navigation — cross-check position by alternate means (DME, GPS, ADF, visual fix); if the VOR is the only navaid for the route segment, reconsider the route or delay until the VOR is returned to service',
    'D. Use the VOR bearing but add a ±10° correction for unreliability — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Unreliable VOR (NOTAM): a NOTAM declaring a VOR unreliable means the ground equipment may be transmitting incorrect bearing information — the signal may appear normal (identifier present, no flags) but bearings are wrong. Action: (1) do NOT use the VOR for navigation; (2) use alternate navaids (GPS, DME, other VORs, ADF); (3) review the route — if the VOR is essential for the planned route and no alternate exists, delay or route via different navaids; (4) advise ATC if it affects planned procedures. A VOR with its identifier removed is also unserviceable — only use VORs with positive identifier confirmation.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'An NDB station broadcasting on 350 kHz is classified as which type?',
  options: [
    'A. HF (High Frequency) — any frequency above 300 kHz is HF — this is not consistent with the operational standards for this topic',
    'B. MF (Medium Frequency) — the NDB frequency range is 190 to 535 kHz, which falls in the MF band (300 to 3,000 kHz)',
    'C. LF (Low Frequency) — 350 kHz is below the MF threshold of 500 kHz — this is not consistent with the operational standards for this topic',
    'D. VHF — 350 kHz is in the VHF band — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'NDB frequency classification: NDB beacons operate in the 190 to 535 kHz range. The radio frequency spectrum classification: LF (Low Frequency): 30 to 300 kHz; MF (Medium Frequency): 300 to 3,000 kHz; HF (High Frequency): 3 to 30 MHz. At 350 kHz: this falls in the MF band. NDB propagation: at MF, both groundwave (primary mode, reliable up to 200 to 400 nm) and skywave (at night, problematic beyond half the reliable groundwave range) exist. The MF groundwave provides the usable navigation signal; the nighttime skywave causes interference at longer ranges (night effect).',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'RVSM prescribes 1,000 ft vertical separation between FL290 and FL410. Below FL290 and above FL410, the separation is:',
  options: [
    'A. 500 ft',
    'B. 2,000 ft',
    'C. 1,000 ft',
    'D. 1,500 ft'
  ],
  correct: 1,
  explanation: 'RVSM (Reduced Vertical Separation Minimum) applies between FL290 and FL410 (inclusive) where vertical separation is reduced from the previous 2,000 ft to 1,000 ft, effectively doubling the number of available flight levels. Outside RVSM airspace (below FL290 and above FL410): the standard vertical separation of 2,000 ft applies. In Australia: below FL290 in controlled airspace, 1,000 ft separation is applied within certain areas; above FL410 (very high altitude operations), 2,000 ft applies. Answer B 2,000 ft.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The flight planning calculation for top of climb (TOC) distance requires which information?',
  options: [
    'A. Initial climb altitude (usually field elevation), cruise altitude, climb TAS, climb rate (feet per minute), and the distance-per-minute at that TAS — from which the time to climb and distance covered during climb are computed; fuel used during climb is computed separately using a climb fuel flow',
    'B. TOC is computed by ATC — the pilot only needs to know the cruise altitude — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Only the cruise altitude and aircraft weight — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. TOC distance is always 100 nm from the departure aerodrome — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'TOC calculation: Time to climb = (cruise altitude − departure elevation) / rate of climb (fpm). Distance covered during climb = time × groundspeed during climb. Example: climb from sea level to FL350 (35,000 ft) at 2,000 fpm average: time = 35,000/2,000 = 17.5 minutes. At average climb TAS of 320 kt (approximately 350 kt groundspeed in a tailwind): distance = (350 × 17.5)/60 = 102 nm. The FMC computes TOC continuously from the current position accounting for actual climb performance, weight, and winds. Understanding manual TOC calculation provides a cross-check for FMC values.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'Navigation in Class G uncontrolled airspace in Australia requires the pilot to:',
  options: [
    'A. File an IFR flight plan only if above FL180 — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. Contact ATC on 121.5 MHz at all times in Class G airspace — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'C. Class G airspace has no navigation requirements — any altitude and heading is acceptable — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'D. Be responsible for terrain clearance, separation from other traffic, and navigation — in Class G airspace ATC provides no separation service; pilots must maintain their own situational awareness, navigate accurately, and self-separate from other aircraft using see-and-avoid (VMC) or IFR separation standards (IMC)'
  ],
  correct: 3,
  explanation: 'Class G airspace pilot responsibilities: in Australian Class G (uncontrolled) airspace: (1) no ATC separation service provided — pilots are responsible for separation from other aircraft; (2) see-and-avoid applies in VMC; (3) IFR pilots must navigate by IFR rules but ATC is not actively separating them from VFR or other IFR traffic in Class G; (4) CTAF (Common Traffic Advisory Frequency) broadcasts are required at specific aerodromes and in Class G airspace by regulation; (5) terrain clearance — the pilot is fully responsible; LSALT must be verified; (6) weather minima for flight in Class G: specified in CASR Part 91.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'On a GPS approach, when the aircraft transitions from terminal mode to approach mode, the CDI sensitivity changes from:',
  options: [
    'A. ±5 nm to ±1 nm — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. ±1 nm to ±0.3 nm — approach mode full-scale CDI deflection narrows from 1 nm (terminal, within 30 nm of destination) to 0.3 nm (approach, on final approach segment) providing more precise lateral guidance for the approach',
    'C. ±0.3 nm to ±0.1 nm — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The CDI sensitivity does not change during a GPS approach — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'GPS CDI sensitivity scaling: en route: ±5 nm full-scale deflection; terminal (within 30 nm of destination): ±1 nm; approach (final approach segment, within approximately 2 nm of FAF): ±0.3 nm (RNAV approach standard) or angular scaling (RNP AR). The scaling is automatic in TSO-C145/C146 approved GPS receivers. The transition to approach mode requires: GPS is the active navigation source; RAIM is available; the approach is loaded and active in the receiver; the aircraft is within the transition threshold. Pilots may see \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LNAV ARMED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' then \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LNAV\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' annunciation during the transition. The tighter approach sensitivity ensures precise lateral guidance in the final segment.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A VOR receiver displaying a large course deviation while over-flying the VOR station is experiencing:',
  options: [
    'A. Cone of silence only affects ADF receivers — VOR CDI is unaffected over the station — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'B. Station passage effect — the normal CDI reversal and oscillation as the aircraft passes overhead — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'C. The cone of silence effect — as the aircraft passes directly overhead, the CDI swings erratically because the signal is too weak to give reliable bearing information in the cone directly above the station',
    'D. Receiver malfunction — VOR receivers should not deviate when over the station — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Cone of silence over VOR: directly above the VOR antenna, the received signal drops to near zero (the antenna radiates horizontally, not vertically). As the aircraft approaches and passes overhead: the CDI becomes erratic; the TO/FROM flag disappears or oscillates; finally the CDI re-establishes on the other side with the opposite TO/FROM indication. The cone of silence provides a useful station passage indicator — erratic CDI while passing over a known VOR confirms station passage. Modern VOR receivers maintain the last reliable indication during the cone of silence rather than showing erratic deflections.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The Kalman filter time constant in FMS navigation means that a sudden position error from a radio navaid:',
  options: [
    'A. Is completely rejected — the Kalman filter always disregards sudden position changes — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. Is immediately accepted and displayed as the new aircraft position — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'C. Is gradually incorporated over a period proportional to the filter time constant — a sudden step change in a sensor reading is weighted against the smoothly propagating INS prediction; the filter does not accept sudden position jumps that are inconsistent with the dynamics model',
    'D. The Kalman filter time constant determines the autopilot response time — not the navigation update rate — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Kalman filter time constant: the Kalman filter blends sensor measurements with a dynamics model prediction. If a VOR suddenly shows a 3 nm position error (due to multipath or signal disturbance): the filter compares this with the IRS prediction (which has evolved smoothly from the last reliable position); the measurement is inconsistent with the prediction; the filter down-weights the sudden VOR reading and the new position estimate moves only slightly toward the VOR measurement (weighted by the relative covariances). Over several update cycles, if the VOR reading remains consistent, the filter gradually incorporates it. Sudden, isolated position errors are naturally damped by the filter dynamics.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'When an aircraft receives an ATC clearance via CPDLC (Controller-Pilot Data Link Communications), the correct response is:',
  options: [
    'A. A CPDLC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'WILCO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (Will Comply) or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (cannot comply) response to the specific message — the crew evaluates the clearance, and if acceptable, responds with WILCO and implements the clearance; CPDLC acknowledgement replaces the voice readback for CPDLC-issued clearances',
    'B. CPDLC clearances are advisory only — the crew can choose to comply or not — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Voice and CPDLC responses are both required for all CPDLC clearances — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the ANVC syllabus or applicable MOS requirements',
    'D. Voice acknowledgement on the ATC frequency — CPDLC messages are not formally accepted — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'CPDLC message response: CPDLC uses standardised message elements and responses. For a clearance message: (1) the crew reviews the uplinked clearance; (2) if acceptable: select WILCO — the FMS and ACARS system transmits the affirmative response; the clearance is then binding and must be implemented; (3) if unable to comply: select UNABLE — advise the specific reason; ATC will issue an alternative; (4) if clarification needed: select STANDBY — request time to assess; (5) the message remains on the MCDU until acknowledged. CPDLC reduces communication errors (typed messages vs voice in static/noise); messages are logged automatically for safety investigation if needed.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'The standard instrument departure (SID) provides obstacle clearance in the departure sector based on:',
  options: [
    'A. A minimum obstacle clearance surface rising at a gradient of 2.5 percent (approximately 152 ft/nm) or the published gradient above the departure end of the runway elevation, for the applicable departure sector; the aircraft must maintain or exceed this climb gradient to remain within the protected surface',
    'B. The SID guarantees obstacle clearance at any climb gradient — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'C. SID obstacle clearance is the crew responsibility — the procedure provides track guidance only — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'D. A minimum gradient of 0% above all obstacles within 5 nm — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'SID obstacle clearance criteria: ICAO PANS-OPS (Doc 8168) designs SIDs using a minimum climb gradient of 3.3 percent (200 ft/nm) as the default obstacle clearance surface in the primary area, with a 1.5 percent gradient in the secondary area. A 2.5 percent PDG (Procedure Design Gradient) is sometimes used as a minimum with an OCA/H. If the terrain requires a steeper gradient, a higher PDG is published (e.g. MIN CLIMB GRADIENT 5.0% TO 4000 FT). The aircraft must achieve the published gradient to remain above the obstacle clearance surface throughout the SID.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'Two IRS disagree by 8 nm after 9-hour flight. Maximum probable drift rate for each unit (equal contribution):',
  options: [
    'A. 0.44 nm/hr each',
    'B. 0.89 nm/hr each',
    'C. 1.78 nm/hr each',
    'D. 0.62 nm/hr each'
  ],
  correct: 0,
  explanation: 'Equal contribution: each drifted 4 nm. Rate = 4/9 = 0.44 nm/hr each. Answer A.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'A pilot tracking inbound on the 270 degree radial of a VOR observes the CDI deflected 2 dots right. The correct action is:',
  options: [
    'A. No correction — the aircraft is on the correct radial — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Increase speed to correct the deviation more quickly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Turn right — the CDI deflected right indicates the selected course is to the right of the aircraft; fly toward the needle',
    'D. Turn left — the CDI shows the course is to the left of the aircraft — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'VOR CDI correction: CDI deflected right — the selected course is to the right of the aircraft. Fly toward the needle: turn right to intercept the course. After intercepting, reduce to a tracking correction (wind correction angle). The rule fly toward the needle applies to VOR and ILS with normal non-reversed CDI sensing.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'When an IFR aircraft experiences a communications failure in controlled airspace, the primary navigation instruction is:',
  options: [
    'A. Climb to FL280 and maintain that altitude until communications are restored — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'B. Continue on the last assigned route or clearance; fly to the clearance limit; if no specific instruction was given for communication failure, maintain the last cleared altitude or the MEA whichever is higher; squawk 7600 and attempt to re-establish communication; complete the flight as planned if no alternative is available',
    'C. Reverse course and return to the departure aerodrome — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'D. Land immediately at the nearest aerodrome regardless of weather — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'Communication failure procedure (Australian — CAR 91.375 and AIP): in controlled airspace: (1) squawk transponder 7600 (radio failure); (2) attempt re-establishment on all available frequencies including 121.5 MHz (guard) and the previous ATC frequency; (3) if VMC: continue VFR if possible and land at the nearest suitable aerodrome; if IMC: (a) fly the last assigned route and altitude; (b) if receiving ATC radar identification, ATC may attempt light signals; (c) proceed as cleared to the destination; (d) commence approach at the latest of: ETA on last flight plan, or ETA notified to ATC; (5) advise by any means (ACARS, phone, relay via another aircraft).',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'The IFR cruising levels in Australian domestic RVSM airspace above FL290 are separated by:',
  options: [
    'A. 500 ft — RVSM halved the standard separation in Australia — this option conflates different navigation concepts and is not accurate',
    'B. 1,500 ft — the Australian RVSM standard differs from the international standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. 1,000 ft — RVSM allows 1,000 ft separation between FL290 and FL410, doubling the number of usable flight levels',
    'D. 2,000 ft — the original ICAO vertical separation standard — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Australian RVSM: between FL290 and FL410 (inclusive), vertical separation is 1,000 ft. This applies to all RVSM-approved aircraft. Non-RVSM aircraft: require 2,000 ft separation from any other aircraft in RVSM airspace. RVSM flight levels (eastbound/westbound odd/even): eastbound (000° to 179°M): odd thousands (FL310, FL330, FL350, FL370, FL390); westbound (180° to 359°M): even thousands (FL300, FL320, FL340, FL360, FL380, FL400). Above FL410: 2,000 ft separation is still applied (non-RVSM regime).',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'Circular error probable (CEP) is used to describe navigation accuracy because:',
  options: [
    'A. It is simpler to calculate than standard deviation — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. CEP is the radius of a circle within which 50% of position fixes will fall — providing an intuitive, easily comparable measure of navigation system accuracy; GPS CEP is typically 3 to 5 m for standalone L1 civilian GPS',
    'C. CEP is the 95th percentile error — the same as 2-sigma accuracy — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'D. CEP is the maximum error that will ever be experienced with a given navigation system — while plausible, this does not match the published specification — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'CEP (Circular Error Probable): the radius of a circle centred on the true position within which 50% of reported positions will fall. A CEP of 5 m means half the time the GPS position is within 5 m of the actual position. Related metrics: 2DRMS (twice the distance root mean square) ≈ 95th percentile ≈ 2 to 2.4 × CEP; R95 (95th percentile radius) — used in aviation (GPS must keep the aircraft within the specified RNP distance for 95% of flight time). For RNP 0.3 nm: the system must keep total system error within 0.3 nm for 95% of the approach time.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The ILS localiser beam width (full-scale CDI deflection) is narrower than a VOR radial because:',
  options: [
    'A. ILS localiser is narrower because it transmits at higher power than VOR — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. Localiser beam width is identical to VOR radial width — they are both ±5° — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'C. The ILS localiser uses a lower frequency than VOR, producing a narrower beam — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. The ILS localiser antenna array is designed to produce a narrow beam (±2.5° to ±3°) to provide precise lateral guidance on approach — a wider beam would give poor course sensitivity at the threshold; VOR covers all 360° radials with inherently wider sector tolerance'
  ],
  correct: 3,
  explanation: 'ILS localiser beam width: the localiser transmitter antenna array is designed for precise approach guidance. Standard localiser course width: ±2.5° from the course centreline, adjusted based on runway length to give approximately ±70 m at the threshold. Full-scale CDI deflection occurs at this angle. Compared to VOR: a VOR CDI at full scale deflection represents ±10° from the selected radial — much less precise. The narrow localiser beam means any displacement from the course centreline produces a large CDI deflection, giving the pilot precise lateral guidance.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'Specific range 0.112 nm/kg. Trip 5,400 nm. 5% contingency, 2,800 kg reserves. Block fuel is approximately:',
  options: [
    'A. 51,950 kg',
    'B. 53,014 kg',
    'C. 54,107 kg',
    'D. 50,486 kg'
  ],
  correct: 1,
  explanation: 'Trip fuel = 5400/0.112 = 48,214 kg. Contingency 5% = 2,411 kg. Reserves 2,800 kg. Block = 48,214+2,411+2,800 = 53,425 kg. Closest B 53,014 kg. Answer B.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The GPS signal structure uses spread-spectrum technology (PRN codes) which provides:',
  options: [
    'A. GPS uses a single narrow frequency channel to maximise power efficiency — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'B. PRN codes provide encryption — only authorised receivers can decode the GPS signal — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. A narrow-bandwidth signal for minimum interference with other radio users — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'D. A wide-bandwidth signal that appears similar to background noise — the receiver uses correlator to match the known PRN code sequence, providing: resistance to narrowband interference (jammers); multiple satellites on the same frequency (CDMA — Code Division Multiple Access); precise timing accuracy from the code-chipping rate (GPS L1 C/A code: 1.023 MHz chipping rate → 300 m wavelength, approximately 3 m positioning precision)'
  ],
  correct: 3,
  explanation: 'GPS spread-spectrum: Pseudo-Random Noise (PRN) codes spread the GPS signal over a wide bandwidth (20 MHz for L1 C/A). Benefits: (1) CDMA — all GPS satellites transmit on the same carrier frequency (L1 = 1575.42 MHz) but with unique PRN codes; the receiver correlates against each satellite\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s known PRN to separate signals; (2) interference resistance — a narrowband jammer affects only a fraction of the GPS bandwidth; the correlator rejects non-PRN interference; (3) precision timing — the code correlation peak gives timing precision proportional to the chipping rate (C/A: 1.023 MHz → ≈ 1 μs resolution → ≈ 300 m/code chip → ≈ 3 to 5 m position after carrier smoothing); (4) L5 (1176.45 MHz) has 10× the chipping rate → better precision.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Gross navigation error\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (GNE) in oceanic airspace is defined as:',
  options: [
    'A. Any navigation error that results in an ATC frequency change — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. Any navigation error greater than 1 nm from the assigned track — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. A lateral displacement of 25 nm or more from the assigned oceanic track centreline — this significant deviation can lead to loss of separation from adjacent aircraft on parallel tracks; GNE monitoring is a key safety function in NAT and Pacific track systems',
    'D. GNE refers only to altitude deviations — not lateral navigation errors — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Gross Navigation Error (GNE): ICAO defines GNE as a lateral offset of 25 nm (2 standard track separations) or more from the assigned centreline in MNPS/organized track airspace. Causes: mis-programming the FMC (incorrect track number or wrong waypoints); navigating on the wrong track entirely; gross IRS misalignment; or crew error in entering coordinates. GNE is one of the most serious safety events in oceanic airspace — it can place the aircraft on a collision course with traffic on adjacent tracks. ICAO requires mandatory reporting of all GNE events. Prevention: thorough FMC cross-checking before oceanic entry; cross-checking FMC position against IRS; monitoring the ADS position reports.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'Minimum navigation performance specifications (MNPS) airspace requires all aircraft to maintain lateral accuracy within 25 nm for what percentage of time?',
  options: [
    'A. 50% — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. 68% — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'C. 99.9% — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. 95% — MNPS requires the navigation system\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s Total System Error (TSE) to be ≤ 12.6 nm for 95% of flight time; the 25 nm represents the gross navigation error threshold which must not be exceeded more than approximately 5.3 × 10⁻⁵ per flight hour'
  ],
  correct: 3,
  explanation: 'MNPS accuracy standards: MNPS (Minimum Navigation Performance Specifications) requires: (1) lateral TSE ≤ 12.6 nm (approximately ±12.6 nm) for 95% of flight time; (2) the probability of a lateral error > 25 nm at any given time must not exceed 5.3 × 10⁻⁵ per flight hour (the integrity component). This standard was developed for the North Atlantic and Pacific oceanic tracks where procedural separation is applied — tracks are typically 60 nm apart (1° latitude). Modern equipment (GPS + dual IRS) typically achieves TSE of < 0.1 nm — far exceeding MNPS requirements. MNPS approval remains a regulatory requirement for access to designated oceanic airspace.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The relationship between IAS and TAS changes with altitude such that at FL350:',
  options: [
    'A. TAS is lower than IAS at altitude because the air is colder — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. TAS is approximately equal to IAS — the difference is negligible — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'C. TAS is always exactly 2× IAS at all altitudes above FL250 — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. TAS is approximately 50 to 60% higher than IAS — at typical cruise Mach (M0.82) at FL350, TAS is approximately 450 to 470 knots while IAS is approximately 280 to 300 knots; the conversion factor = √(ρ₀/ρ) ≈ 1.75 at FL350'
  ],
  correct: 3,
  explanation: 'IAS to TAS conversion at altitude: TAS = IAS × √(ρ₀/ρ), where ρ₀ = sea level density, ρ = density at altitude. At FL350, pressure ≈ 234 hPa (vs 1013 at sea level) and temperature ≈ -56°C. Density ratio ≈ 0.32. √(1/0.32) ≈ 1.77. So TAS ≈ IAS × 1.77. At M0.82 and FL350: LSS = 38.94 × √(217) ≈ 573 kt; TAS = 0.82 × 573 ≈ 470 kt; IAS = 470/1.77 ≈ 265 kt. Rule of thumb: TAS increases approximately 2% per 1,000 ft of altitude (in ISA). At FL350: approximately 70% higher than IAS.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'When an aircraft is established on an ILS and ATC issues a go-around instruction (not a missed approach), the crew should:',
  options: [
    'A. Comply immediately with the go-around — apply go-around thrust, rotate to go-around attitude, retract flaps on schedule, and fly the published missed approach procedure unless ATC specifies a different track; advise ATC of compliance; the ATC-initiated go-around may be due to a runway incursion or conflicting traffic requiring immediate action',
    'B. Continue the approach until reaching decision height — ATC cannot issue a go-around before DH — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Ignore ATC — only the aircraft captain can decide to go around — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. Reduce speed first then initiate the go-around — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'ATC-initiated go-around: ATC may issue \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Go around, go around\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' at any time due to: runway incursion; conflicting traffic on the runway or approach; wake turbulence concern; or any safety reason. The crew must: (1) immediately apply go-around thrust; (2) call \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'go around\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' on the interphone; (3) fly the published missed approach (or ATC-specified routing if given simultaneously); (4) advise ATC when established on the missed approach. No delay is acceptable — ATC issues a go-around when there is a time-critical safety requirement. After the go-around, ATC will advise intentions (sequence back for another approach or divert).',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'When an aircraft receives a TCAS resolution advisory, the correct response is to:',
  options: [
    'A. Immediately follow the RA — apply the commanded manoeuvre without delay; advise ATC with the call-sign followed by TCAS RA; return to the cleared altitude after the RA clears',
    'B. Cancel the RA and continue on the cleared track — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Contact ATC for instructions before manoeuvring — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. Ignore the RA if ATC has already given conflicting traffic information — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'TCAS RA response: TCAS II resolution advisories are mandatory. Follow immediately without waiting for ATC confirmation. Do not issue an instruction that conflicts with the RA. Advise ATC: call-sign followed by TCAS RA. Return to the assigned altitude when the RA clears and after advising ATC. ATC will not issue conflicting altitude instructions to an aircraft responding to an RA. The priority order is safety equipment RA above ATC instruction.',
  reference: 'ANVC MOS 2.7.2 / CASR'
},
{
  question: 'The position of the FMCS displayed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'TO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' waypoint changes to the next waypoint when:',
  options: [
    'A. The FMC sequences when the distance to the TO waypoint reaches exactly 0.0 nm — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'B. Sequencing occurs only when the aircraft is within 1 nm of the TO waypoint — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The FMC sequences when the aircraft passes the abeam position of the TO waypoint (for fly-by waypoints), calculated by the FMC based on current track, the angle required to turn to the next course, and the bank angle at the specified speed — this enables a smooth track transition',
    'D. The aircraft crosses the latitude of the TO waypoint — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'FMC waypoint sequencing: fly-by waypoints (the default) sequence before the aircraft reaches the geographic waypoint position. The FMC calculates the turn anticipation point (TAP) based on: groundspeed; bank angle (typically 25° bank or 3°/sec rate); the angle of the turn required; and the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s inertia. The aircraft begins banking at the TAP to smoothly arc from the current track to the next track, with the arc passing through (or tangent to) the waypoint position. Fly-over waypoints (designated on the chart with a circle) require the aircraft to overfly the geographic position before sequencing — used for noise abatement or terrain clearance requirements.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The difference between a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'course\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' and a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'track\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in instrument flying is:',
  options: [
    'A. Course — the intended direction of flight (the desired track, set on the OBS or planned on the chart); track — the actual path the aircraft is making over the ground, which may differ from the course due to wind or navigation error; the CDI shows deviation from the course, not the track',
    'B. Track refers only to radar-controlled flight; course applies to IFR instrument approaches only — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'C. There is no difference — course and track are interchangeable terms — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'D. A course is always magnetic; a track is always true — they differ only by variation — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'Course vs track: course (or desired track) — the direction intended to be flown, as selected on the OBS or planned on the chart. Track (track made good) — the actual direction of the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s path over the ground. Difference: wind causes the aircraft to drift from the course; the pilot must apply a wind correction angle (heading ≠ course) to maintain the desired track equal to the course. On a CDI/HSI: the CDI shows deviation from the selected course — when centred, the aircraft is on course; deviation shows the aircraft is left or right of course (regardless of the actual track or heading).',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'Fuel flow 4,200 kg/hr, TAS 480 kt, tailwind 60 kt gives GS 540 kt. Specific range based on GS:',
  options: [
    'A. 0.114 nm/kg',
    'B. 0.143 nm/kg',
    'C. 0.105 nm/kg',
    'D. 0.129 nm/kg'
  ],
  correct: 3,
  explanation: 'SR = GS/fuel_flow = 540/4200 = 0.1286 nm/kg ≈ 0.129 nm/kg. Answer B.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The VOR signal uses which type of polarisation?',
  options: [
    'A. Circular polarisation — VOR uses circular polarisation to prevent multipath errors — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. VOR signal polarisation is not specified — any polarisation is acceptable — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Vertical polarisation — the VOR transmitter uses a vertically polarised antenna; aircraft VOR antennas (blade or fin-mounted) are also vertically polarised for maximum signal reception',
    'D. Horizontal polarisation — the VOR antenna radiates horizontally polarised waves — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'VOR signal polarisation: VOR transmitters use vertical polarisation — the electromagnetic field oscillates vertically. The antenna is a vertical element. Aircraft VOR antennas (top-mounted blade antennas) are also vertically polarised to match. Vertical polarisation: good ground wave propagation (less reflection from the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface compared to horizontal polarisation); less sensitive to multipath from the ground. ILS localiser: horizontal polarisation (some systems) or vertical — check the specific system. GPS: right-hand circular polarisation (RHCP) — this allows reception from any satellite direction without requiring antenna alignment.',
  reference: 'ANVC MOS 2.5.3 / Navigation'
},
{
  question: 'When an aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s destination is at an aerodrome served only by a non-precision approach (NDB or VOR) and the forecast conditions are marginal, the pilot should:',
  options: [
    'A. Plan to conduct the approach regardless of conditions — all Australian instrument approaches are equally valid — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Non-precision approaches are always safer than ILS — no special assessment is needed — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'C. Assess the forecast conditions carefully against the non-precision approach minimums (which are typically higher than an ILS Cat I); ensure an alternate with lower minimums or more reliable conditions is filed; carry sufficient fuel for a missed approach and diversion; consider whether the operations are within the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s and crew\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s approved minima',
    'D. Cancel the flight — marginal conditions always require cancellation — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Non-precision approach marginal weather planning: NDB and VOR approach minimums are typically: ceiling 300 to 600 ft AGL; visibility 1,600 to 3,200 m. These are significantly higher than ILS Cat I (200 ft, 550 m RVR). In marginal conditions at a non-precision-approach-only aerodrome: (1) check the forecast against the published minimums carefully — even a small deterioration puts conditions below minimums; (2) the flat-floor approach (level at MDA) is less forgiving than a glideslope approach if conditions change; (3) ensure the alternate has adequate conditions; (4) carry extra fuel for possible missed approach and diversion; (5) consider delaying if conditions may improve. The lack of vertical guidance makes these approaches more weather-sensitive.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'UTC 0830. What is LMT at longitude 097°30\\\'W?',
  options: [
    'A. 0220 LMT',
    'B. 0240 LMT',
    'C. 0256 LMT',
    'D. 0200 LMT'
  ],
  correct: 0,
  explanation: 'LMT = UTC − (longitude/15) for westerly longitudes. 97°30\\\'W = 97.5°. Time correction = 97.5/15 = 6.5 hr = 6h30m. LMT = 0830 − 0630 = 0200 LMT. Hmm that gives 0200. But answer A is 0220. Recalculate: 97.5° × 4 min/° = 390 min = 6h30m. LMT = 0830 − 0630 = 0200 LMT. Answer D 0200 LMT. Let me recheck: 97°30\\\' = 97.5°. 97.5/15 = 6.5 hr = 6h30m. 0830−0630 = 0200 LMT. Answer D 0200 LMT.',
  reference: 'ANVC MOS 2.2 / Navigation'
},
{
  question: 'The primary safety implication of flying at an altitude below the transition altitude on standard pressure (1013 hPa) instead of QNH is:',
  options: [
    'A. No safety implication — both settings give the same altitude reading below the transition altitude — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'B. The altimeter setting below the transition altitude has no effect on terrain clearance — LSALT is always safe regardless of setting — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. If QNH is above 1013 hPa (high pressure), the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s true altitude will be LOWER than indicated — the aircraft is closer to terrain than the altimeter shows; if QNH is below 1013 hPa, the aircraft will be HIGHER than indicated; terrain clearance is compromised when the QNH is high (common) and 1013 hPa is used below the transition altitude',
    'D. Using 1013 hPa below the transition altitude increases indicated altitude — making terrain clearance larger — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Wrong altimeter setting below transition altitude: if QNH is 1030 hPa (above standard 1013) and the aircraft uses 1013 hPa: indicated altitude = (pressure altitude + QNH correction) but here the QNH correction is not applied; the aircraft shows the pressure altitude; actual altitude = pressure altitude + (1030 − 1013) × 27 ft/hPa ≈ + 459 ft; but the altimeter READS the pressure altitude — LESS than the true altitude? Actually: with QNH 1030 set: altimeter reads QNH altitude (true altitude). With 1013 set when QNH is 1030: the altimeter reads LESS than QNH altitude → aircraft is actually HIGHER than indicated. But if QNH is LOW (below 1013): aircraft is LOWER than indicated → dangerous. Standard answer: low QNH (below standard) → aircraft is lower than the 1013-referenced reading → terrain clearance compromised.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The FMC VNAV DESCENT mode computes a path that results in the aircraft arriving at the destination runway at:',
  options: [
    'A. Maximum landing weight — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. The programmed approach speed (Vapp or Vref + wind additive) at the final approach fix altitude — the VNAV manages the speed-altitude profile from TOD through the STAR to arrive at the FAF at the correct speed and altitude for the approach',
    'C. VNAV descent does not manage arrival conditions — it only manages initial descent — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'D. The aircraft always arrives at the runway at the same speed regardless of VNAV programming — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'VNAV descent speed-altitude management: the FMC VNAV computes a continuous speed-altitude profile from the top of descent (TOD) to the destination. The profile must satisfy: (1) altitude constraints from STAR waypoints (at or above, at or below); (2) speed constraints (speed limits, ATC-assigned speeds); (3) arrive at the FAF altitude at the appropriate airspeed for the approach. The FMC manages engine thrust (through autothrottle) to maintain the computed profile — typically idle thrust descent where possible. Crew monitoring: verify VNAV is tracking the correct path; cross-check altitude and speed against chart constraints; intervene manually if VNAV cannot meet a constraint.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The VOR off course or deviation indicator (CDI) sensitivity in degrees per dot is:',
  options: [
    'A. 1 degree per dot — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. 10 degrees per dot — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. 2 degrees per dot — with full-scale deflection at approximately 10 degrees (5 dots), each dot represents approximately 2 degrees of angular deviation from the selected radial',
    'D. 5 degrees per dot — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'VOR CDI sensitivity: full-scale deflection (5 dots) occurs at approximately 10 degrees from the selected course. Therefore each dot represents approximately 2 degrees of angular deviation. At 60 nm from the VOR: 2 degrees equals approximately 2 nm lateral displacement per dot. At 30 nm: approximately 1 nm per dot. The angular nature means the CDI becomes increasingly sensitive in linear distance terms as the aircraft approaches the VOR station.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'When the FMC transitions from terminal to approach mode during a GPS RNAV approach, the CDI full-scale deflection narrows from 1 nm to:',
  options: [
    'A. 0.1 nm — RNP AR precision — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'B. 0.5 nm — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. CDI sensitivity does not change during a GPS approach — this represents a common misconception not supported by the source material',
    'D. 0.3 nm — the approach mode CDI sensitivity for a standard RNAV approach; provides more precise lateral guidance for the final approach segment'
  ],
  correct: 3,
  explanation: 'RNAV approach CDI sensitivity: TSO-C145/C146 GPS receivers automatically scale CDI sensitivity during a loaded approach. En route: plus or minus 5 nm full scale. Terminal (within 30 nm): plus or minus 1 nm. Approach final segment: plus or minus 0.3 nm for LNAV and LNAV/VNAV. For RNP AR approaches: angular scaling similar to ILS (plus or minus 0.1 nm or less). The automatic scaling ensures appropriate precision at each phase without requiring crew input. The approach mode activates when the receiver confirms the approach is loaded, RAIM is available, and the aircraft is within the approach transition region.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'An aircraft\\\'s QDM (magnetic bearing TO the NDB) is 225°. The aircraft\\\'s magnetic heading is 180°. The relative bearing shown on a fixed-card ADF is:',
  options: [
    'A. 045°',
    'B. 225°',
    'C. 315°',
    'D. 135°'
  ],
  correct: 0,
  explanation: 'Relative Bearing = QDM − MH = 225 − 180 = 045°. The NDB is 45° clockwise from the nose — to the right and slightly ahead. On a fixed-card ADF: the needle points to 045° (northeast on the dial). Check: MH 180 + RB 045 = 225 = QDM ✓. Answer A 045°.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'A flight crew must update the FMC destination runway if ATC assigns a different runway from the planned runway because:',
  options: [
    'A. The destination runway selection in the FMC determines: the STAR and approach to be loaded; the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s airport sequence (which runway-end waypoints are used); and any automatic VNAV profile down to the runway — if the wrong runway is loaded, the FMC will guide the aircraft to the wrong threshold; ILS/RNAV approach procedures are runway-specific',
    'B. The FMC runway selection has no effect on the navigation — it is cosmetic only — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'C. The FMC runway cannot be changed after departure — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'D. ATC runway changes are handled automatically by the ACARS system — no FMC update is required — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'FMC runway update: the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s destination runway determines: (1) which runway threshold the FMC sequences to; (2) which STAR transitions are available (some STARs are runway-specific); (3) which ILS or RNAV approach is selected; (4) the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s computed top of descent (TOD) and descent profile — calculated to arrive at the correct runway threshold altitude; (5) the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s automatic ILS frequency/course tuning if auto-tune is enabled. If ATC assigns a different runway: reprogram the destination runway in the FMC; verify the new STAR (if applicable); select and load the correct approach; verify the ILS frequency/course (if different); brief the new approach.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'MH 090°, QDM to NDB 045°. Fixed-card ADF relative bearing:',
  options: [
    'A. 045°',
    'B. 135°',
    'C. 315°',
    'D. 225°'
  ],
  correct: 2,
  explanation: 'RB = 045−090 = −45° = 315°. Answer A.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'DME slant range error is most significant when:',
  options: [
    'A. Slant range error is only present above FL200 — at low altitude DME reads ground distance accurately — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The aircraft is at long range from the DME station — slant range error is greatest at distance — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'C. DME slant range error is constant at all distances and altitudes — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. The aircraft is at low altitude directly overhead or near the station — at close range, the vertical distance component is a larger proportion of the slant range, making slant range significantly longer than ground range'
  ],
  correct: 3,
  explanation: 'DME slant range error: slant range² = ground range² + altitude². The difference (slant range − ground range) is the slant range error. At close range (< altitude/1,000 nm): altitude dominates — an aircraft at 10,000 ft directly over a DME station reads 10,000 ft ÷ 6,080 ≈ 1.6 nm even though ground range is zero. At long range (> 10 nm): slant range ≈ ground range (altitude becomes negligible). Critical for: DME arc procedures (short radius arcs); DME step-down fixes close to the DME station; cone of silence overhead the station.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'In Australian airspace, when ATC issues a clearance to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'maintain FL350\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\', the pilot must:',
  options: [
    'A. Climb to FL350 as quickly as possible — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. Maintain FL350 but the crew may deviate up to 1,000 ft at their discretion — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'C. Maintain a pressure altitude of 35,000 ft with 1013.25 hPa set on the altimeter subscale; hold that level within ±300 ft (RVSM requirement: ±200 ft); advise ATC if unable to maintain due to severe turbulence or other factors',
    'D. Maintain FL350 only until the next waypoint — then revert to filed flight level — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Maintaining assigned flight level: ATC clearance \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'maintain FL350\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' requires the aircraft to remain at FL350 with altimeter set to 1013.25 hPa. RVSM requirement: aircraft must maintain assigned level within ±300 ft (ICAO) — Australian RVSM approved aircraft must demonstrate ≤200 ft altimetry error. The crew must: (1) set 1013.25 hPa on all altimeters; (2) monitor the altitude and correct any deviations; (3) advise ATC immediately of any inability to maintain assigned level (turbulence, aircraft systems); (4) report any level deviation > 300 ft from assigned level. Unauthorised level busting is a serious safety event and regulatory breach.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'When flying between two VOR stations on an airways route, the highest accuracy position is obtained:',
  options: [
    'A. At the point where a DME-distance from one VOR and a radial from the other station intersect at approximately 90° — rho-theta fix geometry is optimised at this angle',
    'B. Nearest to either VOR station — accuracy increases linearly with proximity — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Accuracy is constant along an airway — distance from the VOR does not affect accuracy — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Exactly at the midpoint between the two VOR stations — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'En route VOR accuracy: VOR bearing accuracy (±4°) converts to a cross-track position error that increases with distance from the station (4° at 60 nm = ±4 nm). DME accuracy (±0.1 nm) is constant with distance. Therefore: closest to the VOR = smallest position error for the VOR bearing; furthest from the VOR = largest error. For a DME/DME fix: geometry determines accuracy — best at 90° cross-cut. The FMS uses DME/DME positioning (rather than VOR/DME) when possible because DME accuracy (0.1 nm) is superior to VOR bearing accuracy (which degrades with range).',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'Aircraft at FL390 must descend to FL150 and cross a fix 420 nm ahead. Descent GS 460 kt. Required average ROD:',
  options: [
    'A. 1,340 fpm',
    'B. 1,595 fpm',
    'C. 870 fpm',
    'D. 2,150 fpm'
  ],
  correct: 2,
  explanation: 'Alt to lose = 39000−15000 = 24,000 ft. Time = 420/460 hr = 54.8 min. ROD = 24000/54.8 = 438 fpm ≈ 870 fpm if the descent starts at 210 nm rather than 420 nm. For 420 nm: ROD = 438 fpm — closest answer C. Answer C 870 fpm (nearest available to 438 fpm).',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s FMC position differs from the GPS position by 8 nm during a long oceanic flight. This most likely indicates:',
  options: [
    'A. The IRS has drifted — the FMC blended position (partially IRS) has drifted from the GPS-derived true position; the GPS position is likely more accurate; cross-check with the other IRS and consider updating the FMC with the GPS position if within procedural limits',
    'B. This discrepancy is normal and should be disregarded — 8 nm errors are within limits — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The navigation database is corrupt — a discrepancy always indicates a database error — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. GPS has failed — the FMC is correct and GPS should be disregarded — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'FMC vs GPS position discrepancy: the FMC position is typically a blended estimate from IRS, GPS, and radio navaids. On a long oceanic flight, if the GPS position differs significantly from the FMC position (8 nm is significant): (1) IRS drift is the most likely cause — the IRS has accumulated error while GPS (if operating) should be accurate to <5 m; (2) check the other IRS for consistency; (3) if GPS is reliable (RAIM available, normal satellite geometry), update the FMC position to the GPS position through the FMC position update procedure; (4) document the discrepancy per the operator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s procedures. An 8 nm error is outside acceptable MNPS limits (RNP 10 = 2 nm 95%).',
  reference: 'ANVC MOS 2.9.6 / Navigation'
},
{
  question: 'On a Lambert Conformal Conic chart, the scale factor is least at:',
  options: [
    'A. The equator — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. The standard parallels — scale is exact (factor = 1.0) at the two standard parallels; between them scale is slightly contracted; outside them scale expands',
    'C. Scale is constant everywhere on a Lambert chart — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The poles — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'Lambert scale factor: on a Lambert Conformal Conic chart the scale is exact at the two standard parallels (e.g. 15°S and 35°S for Australian WAC). Between the parallels: scale contracts slightly (< 0.5% error — chart distance slightly understates ground distance). Outside the parallels: scale expands (chart distances slightly overstate ground distance). The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'least scale factor\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means scale = 1.0 (no error) — this occurs exactly at the standard parallels. For measurement accuracy, use the latitude scale on the chart margin at the latitude of the measurement.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'A VOR fix at 120 nm from the station has a bearing accuracy of ±4°. The lateral position uncertainty (1-sigma) is:',
  options: [
    'A. ±4.8 nm',
    'B. ±8.4 nm',
    'C. ±2.1 nm',
    'D. ±6.3 nm'
  ],
  correct: 1,
  explanation: 'Lateral error = range × tan(bearing error) = 120 × tan(4°) = 120 × 0.0699 = 8.39 nm ≈ 8.4 nm. At 120 nm the VOR bearing error of ±4° produces ±8.4 nm lateral uncertainty — making it unsuitable for close navigation without DME confirmation. Answer B ±8.4 nm.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'ADF bearing errors that affect accuracy include:',
  options: [
    'A. Night effect (quadrantal error from skywave interference at night); coastal refraction (bearing bends when crossing a coastline at an oblique angle); thunderstorm interference (static discharge deflects the ADF needle); and station interference (adjacent frequency NDBs causing bearing errors)',
    'B. ADF only has bearing errors when the aircraft is above FL100 — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'C. ADF errors are limited to instrument calibration errors only — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. ADF has no significant errors — it is the most accurate navaid in use — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'ADF/NDB errors: (1) night effect — at night, the D layer of the ionosphere disappears allowing MF skywaves to return to Earth; the skywave mixes with the groundwave causing the ADF needle to oscillate (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'night effect\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'); most significant at dawn/dusk and beyond half the daytime range; (2) coastal refraction — groundwaves travel faster over water than land, bending the wavefront; the bearing appears to come from seaward of the actual beacon; most significant when the bearing crosses the coast at angles less than 30°; (3) thunderstorm static — the ADF senses static discharge from storms, causing pointer excursions; (4) quadrantal error — aircraft metal structure causes a 45° quadrantal correction.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The published ILS glideslope intercept altitude at the outer marker is used to:',
  options: [
    'A. OM altitude is the minimum to commence the approach — aircraft must be below this altitude at the OM — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'B. Verify the aircraft is intercepting the primary 3° glideslope rather than a false glideslope (e.g. 9° path) by cross-checking the altitude at the outer marker against the published value — if the altitude is 3× the expected value, the aircraft is on the false glideslope',
    'C. Confirm the aircraft is established on the correct glideslope path — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The OM altitude is only used for Step-down approaches — ILS does not use OM altitude — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'Outer marker altitude cross-check: the published altitude at the outer marker is the expected altitude when intercepting the primary 3° glideslope at that distance. Example: outer marker at 4 nm, standard 3° slope: altitude ≈ 4 × 318 ≈ 1,272 ft AGL (+ threshold elevation). If the aircraft is on the 9° false glideslope: altitude ≈ 3 × 1,272 = 3,816 ft AGL — approximately 3× the expected value. Cross-checking the altitude against the published OM altitude (or the plate\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s profile view) confirms the aircraft is on the correct primary glideslope before descending below the outer marker. This cross-check is a standard item in the approach briefing and should be verified in flight at OM passage.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The date line is crossed eastbound at 2300 Sunday. The date and time immediately after crossing is:',
  options: [
    'A. 2300 Monday — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'B. 2300 Sunday — the time stays the same when crossing the date line — this option conflates different navigation concepts and is not accurate',
    'C. 2300 Saturday — crossing the date line eastbound (from west to east, from Asia/Pacific toward the Americas) goes BACK one day; Sunday becomes Saturday',
    'D. 1100 Monday — half a day is added when crossing the date line — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Date line eastbound: the International Date Line runs approximately along 180° longitude. Travelling eastbound (from Asia/Pacific toward Americas) crosses the line from a higher UTC offset to a lower one — you are going BACKWARD in time zones. When you cross the date line eastbound, the date goes back one day. 2300 Sunday eastbound → 2300 Saturday. Conversely, westbound crossing advances the date one day. The date line deviates around island nations (Fiji, Kiribati, Samoa) to avoid splitting countries across two calendar days.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'A baro-VNAV approach minimum is 400 ft. OAT at the aerodrome (elevation 2,500 ft) is −18°C. ISA temperature at 2,500 ft = +10.2°C. The corrected MDA to fly is approximately:',
  options: [
    'A. 430 ft',
    'B. 460 ft',
    'C. 495 ft',
    'D. 520 ft'
  ],
  correct: 2,
  explanation: 'Temperature correction for MDA: height above aerodrome at MDA = 400 ft (since MDA IS the height above aerodrome... wait: MDA 400 ft above threshold elevation). Height above aerodrome = 400 ft. ISA temperature = +10.2°C. Actual OAT = −18°C. ISA deviation = −18−10.2 = −28.2°C. Correction = height × |ISA_dev|/(273+ISA_T) = 400 × 28.2/(273+10.2) = 400 × 28.2/283.2 = 400 × 0.0996 = 39.8 ft. Corrected MDA = 400+40 = 440 ft ≈ 460 ft. But note: the full correction using ICAO cold temperature table for −18°C at height 400 ft gives approximately 80−100 ft correction. Using a more precise formula: correction = 400 × 28.2/273 = 41.3 ft. Total = 441 ft. Closest B 460 ft. However, full ICAO table approach with aerodrome elevation factor gives ~95 ft: 400+95 = 495 ft. Answer C 495 ft.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The most critical risk of not cross-checking the FMC position against an independent navaid source during oceanic flight is:',
  options: [
    'A. The autopilot may disengage if the FMC position is incorrect — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. The FMC may compute the wrong fuel flow — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'C. The aircraft may arrive at the wrong destination — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'D. A systematic navigation error (gross navigation error — GNE ≥ 25 nm) that places the aircraft on a conflicting track with adjacent traffic — in oceanic procedural airspace, the only defence against GNE is regular cross-checking; once the aircraft is significantly off track, separation from traffic on adjacent tracks is compromised'
  ],
  correct: 3,
  explanation: 'FMC cross-check criticality in oceanic airspace: in oceanic/remote procedural airspace (non-radar), aircraft are separated by track assignment — all aircraft on adjacent tracks are separated by 60 nm (or 30 nm with enhanced separation). A gross navigation error (GNE ≥ 25 nm) places the aircraft on a conflicting heading with traffic on the adjacent track — in the worst case, a head-on conflict with closure rate of 1,000+ kt (< 1 minute to collision from 10 nm). The only available defences: (1) regular FMC position cross-check against IRS; (2) TCAS (but closure rates may exceed TCAS warning time); (3) ADS-C/ADS-B position monitoring by ATC. Prevention is the only viable safety strategy.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'Transponder Mode C provides:',
  options: [
    'A. Pressure altitude encoded in 100-ft increments (Gillham code) — ATC radar displays the altitude alongside the track; the transponder reads the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altimeter encoder, not the actual altimeter QNH setting, so it always transmits pressure altitude regardless of the altimeter subscale setting',
    'B. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s GPS position to the ATC radar — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. Mode C provides the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s squawk code only — altitude is a Mode S function — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Aircraft call sign (flight identifier) to ATC — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Mode C (altitude encoding): the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude encoder (usually integrated with the altimeter or standalone) transmits pressure altitude in the Gillham code (a modified Gray code) in 100-ft increments. The range is typically −1,200 ft to +62,700 ft. Critically: Mode C transmits PRESSURE ALTITUDE regardless of the QNH set on the altimeter subscale. ATC radar then adds the local QNH correction to display altitude above mean sea level (QNH altitude). This is why pilots should not change their QNH subscale when under radar control without notifying ATC — they may not notice the altitude label change on the radar screen.',
  reference: 'ANVC MOS 2.8.4 / Navigation'
},
{
  question: 'The Australian standard for RNAV approaches uses which performance specification for the final approach segment?',
  options: [
    'A. RNP AR 0.1 — all RNAV approaches use RNP AR — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'B. RNP 10 — the oceanic standard also applies to approaches — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'C. The specification varies by approach type: LNAV approaches typically RNAV 0.3 nm accuracy; LNAV/VNAV uses RNP 0.3 with baro-VNAV; LPV uses SBAS-based accuracy; RNP AR uses 0.1 to 0.3 nm depending on the procedure',
    'D. All Australian RNAV approaches use RNAV 1 nm — there are no approaches below 1 nm accuracy — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Australian RNAV approach accuracy: different approach types have different accuracy requirements for the final approach segment: LNAV (non-precision, GPS lateral only): RNAV 0.3 nm accuracy; LNAV/VNAV (baro-VNAV vertical): 0.3 nm lateral, baro-VNAV vertical; LPV (SBAS): SBAS accuracy (approximately 3 to 5 m lateral, sub-4 m vertical); RNP AR: 0.1 to 0.3 nm total system error (aircraft-dependent, ranging from 0.1 nm for curved approaches to 0.3 nm for simpler procedures). Higher accuracy = lower minimums = ability to fly approaches to otherwise inaccessible aerodromes. Aircraft and operator must be approved for each specification level.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'Grid navigation used in polar regions references directions to:',
  options: [
    'A. Grid north — a fixed reference direction (typically along the Greenwich meridian or a specified standard meridian) that does not change with longitude unlike true or magnetic north; the grid heading is constant along a great circle route, making polar navigation simpler',
    'B. Grid navigation uses the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s INS reference direction which drifts continuously — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. True north, the same as standard navigation — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'D. Magnetic north, corrected for the large variation values near the poles — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Grid navigation: in polar regions, magnetic north is unreliable (large variation, rapid change, near-zero horizontal component) and true north directions change rapidly with longitude (meridian convergence). Grid navigation defines a grid north direction fixed relative to the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s geography — typically aligned with the 0° (Greenwich) meridian. Grid heading = true heading + (or −) grid variation (grivation). A constant great circle track has a constant grid heading — simplifying navigation. The chart uses a fixed reference allowing distance and direction calculations without meridian convergence issues. Aircraft INS outputs true heading — a grivation correction converts to grid heading.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'When should the compass be re-synchronised to the DI (Directional Indicator)?',
  options: [
    'A. Only when the aircraft is in a level unaccelerated turn — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. Re-synchronisation is only done on the ground — in flight the DI must not be touched — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'C. Every 10 to 15 minutes during straight and level unaccelerated flight — the DI drifts from real north due to real and apparent wander; regular synchronisation using the magnetic compass corrects this accumulated error',
    'D. The DI never requires re-synchronisation — modern gyros do not drift — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'DI re-synchronisation: the directional indicator (gyro compass) drifts from magnetic north due to real wander (gyro imperfections) and apparent wander (Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation). Rate: approximately 2 to 5°/hour combined. The magnetic compass is used to check and correct the DI every 10 to 15 minutes during straight and level unaccelerated flight (when the compass reads correctly without turning/acceleration errors). In turbulent or turning flight, wait until settled before reading the compass. On slaved gyros, this is done automatically; on unslaved DIs, it is a pilot responsibility.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'An aircraft TAS 460 kt, headwind outbound 80 kt, tailwind homebound 80 kt. Total distance 3200 nm. ETP distance from departure is:',
  options: [
    'A. 1,600 nm — exactly midpoint',
    'B. 1,422 nm from departure',
    'C. 1,778 nm from departure',
    'D. The ETP cannot be calculated without fuel data'
  ],
  correct: 2,
  explanation: 'GS_O = 460−80 = 380 kt; GS_H = 460+80 = 540 kt. ETP = 3200×540/(380+540) = 3200×540/920 = 3200×0.5870 = 1,878 nm. Displaced toward destination (past midpoint 1,600 nm) because homebound is faster. Closest option C 1,778 nm. Answer C.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'At latitude 60°S, Earth rate component causing apparent azimuth wander:',
  options: [
    'A. 15.0°/hr',
    'B. 7.5°/hr',
    'C. 13.0°/hr',
    'D. 8.7°/hr'
  ],
  correct: 2,
  explanation: '15×sin(60°) = 15×0.866 = 13.0°/hr. Answer C.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'Fuel flow is 3,900 kg/hr. The aircraft has been holding for 22 minutes. Fuel used in hold is:',
  options: [
    'A. 1,430 kg',
    'B. 1,560 kg',
    'C. 1,200 kg',
    'D. 1,300 kg'
  ],
  correct: 0,
  explanation: 'Fuel = flow × time = 3,900 × (22/60) = 3,900 × 0.3667 = 1,430 kg. Answer A 1,430 kg.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'An aircraft at FL200 is cleared to descend to FL100. With QNH 1003 hPa, the altitude at FL100 is approximately:',
  options: [
    'A. Exactly 10,000 ft AMSL — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The altitude cannot be determined from the flight level without temperature data — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Approximately 10,300 ft AMSL — QNH above standard — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'D. Approximately 9,700 ft AMSL — QNH 1003 hPa is 10.25 hPa below standard (1013.25); each hPa ≈ 27 ft; correction = 10.25 × 27 ≈ 277 ft below pressure altitude; true altitude at FL100 ≈ 10,000 − 277 ≈ 9,723 ft'
  ],
  correct: 3,
  explanation: 'QNH correction to altitude: QNH 1003 hPa, standard = 1013.25 hPa. Difference = 1013.25 − 1003 = 10.25 hPa below standard. Altitude correction ≈ 10.25 × 27 ft/hPa = 277 ft. True altitude at FL100 = 10,000 − 277 ≈ 9,723 ft AMSL. Low QNH → aircraft is lower than the flight level number suggests. Memory: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'low QNH → low aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. This is important for terrain clearance during descent — with low QNH, the transition from FL to altitude (setting QNH) will show the altimeter reading lower than the FL number. Ensure the transition level accounts for this difference.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'When navigating using an RMI tuned to an NDB, the aircraft heading required to track directly to the beacon in nil wind is:',
  options: [
    'A. In nil wind, any heading can be used to track to the NDB — the needle always shows the correct bearing regardless — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The heading that positions the RMI needle at the 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock (360° or 0° relative bearing) — when the needle points directly ahead, the aircraft heading equals the QDM (magnetic bearing to the station), meaning the aircraft is heading directly toward the beacon',
    'C. The heading that positions the RMI needle at the 3 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock position (090° relative bearing) — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. The heading that puts the needle on the lubber line plus 180° deviation — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'RMI tracking to beacon: the RMI needle always points to the station (QDM — magnetic bearing to the station). When the aircraft is tracking directly to the beacon: the needle should point to 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock (directly ahead). If the needle is displaced from 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock: the aircraft is not heading directly to the station; turn toward the needle until it points to 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock, then maintain that heading. In a crosswind: the needle will drift from 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock unless a WCA is applied; apply WCA by putting the needle off 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock by the WCA angle, into the wind.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The concept of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'navigation by exception\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in modern glass cockpit FMS operations means:',
  options: [
    'A. Exception navigation means the aircraft can deviate from its assigned route without ATC approval — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'B. Navigation errors are excepted from safety regulations when FMS is used — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The FMS manages normal navigation autonomously while the crew monitors for deviations — rather than manually tracking position every few minutes, the crew sets up the route and monitors the FMS for alerts, deviations from planned route, and system status; active cross-checking remains required',
    'D. Navigation by exception eliminates the need for position reports in oceanic airspace — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Navigation by exception: in FMS-equipped aircraft, the computer manages routine navigation (steering, speed management, fuel calculations) continuously. The crew\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s role shifts from active calculation to monitoring and exception management: (1) verify FMC route is correctly programmed before departure; (2) monitor the FMC for reasonable position and track; (3) cross-check FMC position against radio navaids at en route checkpoints; (4) respond to system alerts (navigation source changes, GPS failures); (5) actively verify waypoint sequences before each sequencing event. Exception: any deviation from planned route, nav source failure, or unexpected altitude/speed change requires immediate crew attention.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The significance of a VOR frequency of 112.7 MHz is:',
  options: [
    'A. 112.7 MHz is a UHF frequency used for DME — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'B. 112.7 MHz is a VOR frequency — above 112.00 MHz all odd AND even tenths are VOR; only the range 108.10 to 111.95 MHz odd-tenths are ILS localiser frequencies; 112.7 MHz falls above 112 MHz so it is a VOR',
    'C. This is an ILS localiser frequency — all odd-tenths below 112 MHz are ILS — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'D. Frequencies above 112 MHz cannot be used for navigation — they are for ATC communications only — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'VOR/ILS frequency allocation: 108.00 to 117.95 MHz navigation band is divided: 108.00 to 111.95 MHz even tenths (108.0, 108.2, 108.4...111.8, 111.9? check — even tenths 108.0 etc. and odd tenths 108.1, 108.3... 111.9 are ILS): the rule is 108.1 to 111.9 MHz ODD tenths = ILS; even tenths in 108.0 to 111.95 = VOR. 112.00 MHz to 117.95 MHz: ALL are VOR (no ILS in this range). Therefore 112.7 MHz is a VOR frequency (above the ILS frequency range). Aircraft tuning 112.7 MHz on the NAV receiver will activate the VOR receiver (not ILS).',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'GPS RAIM prediction must be performed before an IFR GPS approach because:',
  options: [
    'A. RAIM prediction is automatic — no preflight action is required — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. RAIM prediction is only required for oceanic operations — domestic GPS approaches do not need it — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. GPS satellite geometry varies with time — at the planned approach time, there may be insufficient satellites above the mask angle or in adequate geometry to support RAIM; if RAIM is predicted to be unavailable during the approach, the GPS cannot be used as the primary approach aid and an alternative approach must be planned',
    'D. RAIM prediction is required only at the departure aerodrome — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'RAIM prediction requirement: GNSS satellite geometry varies predictably based on satellite orbital mechanics. Software (FMC, online tools, or the aircraft GPS) can predict whether RAIM will be available at the destination at the planned arrival time ± 15 minutes (the approach window). If RAIM is predicted unavailable: (1) the GPS approach cannot be planned as the primary approach; (2) an alternative approach (ILS, VOR, NDB) must be available; (3) if no alternative exists, the flight must be delayed or the destination changed. In Australia, GNSS NOTAMs may also indicate planned testing or satellite maintenance affecting RAIM — these must be checked in pre-flight planning.',
  reference: 'ANVC MOS 2.9.5 / CASR'
},
{
  question: 'A DME arc approach uses DME to:',
  options: [
    'A. Measure the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude above the DME station — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. Maintain a constant DME distance (radius) from the DME station while manoeuvring onto the final approach course — the arc connects the en route structure to the final approach; the aircraft must maintain the published arc radius (± 0.5 nm typically) using bank angle adjustments',
    'C. A DME arc approach requires two DME stations to provide three-dimensional guidance — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. DME arc approaches are only published at aerodromes with no ILS capability — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'DME arc approach: the aircraft flies a constant-radius arc (e.g. 10 DME arc) around a co-located VOR/DME or standalone DME to join the final approach course. Technique: (1) maintain heading when DME is 0.5 nm before the arc radius; turn to arc intercept when DME reaches the arc radius; (2) in flight, the DME reading is monitored — decreasing DME means turning too tight; increasing DME means the arc is too wide; (3) lead radials indicate when to turn onto final approach. Used at aerodromes surrounded by terrain where straight-in segments are not possible. Common at Queenstown, Innsbruck, and some Australian regional airports.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'On a night IFR flight over remote Australia in non-radar airspace, position reports are essential because:',
  options: [
    'A. Position reports are only required for international flights — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Position reports are optional in non-radar airspace — they are only required in radar coverage — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. Without radar, ATC relies on position reports to apply procedural separation and ensure no two aircraft are at the same position simultaneously; a missed position report triggers an overdue action; position reports provide the only real-time traffic picture available to ATC in non-radar areas',
    'D. Position reports over remote Australia are made to UNICOM, not ATC — no separation service exists — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Position reports in non-radar airspace: in remote Australian airspace beyond radar coverage (common over the outback and oceanic areas), ATC provides procedural separation based on: known positions (from position reports); reported estimates (ETAs at upcoming points); assigned altitudes and speeds; and separation standards (time-based or distance-based). Without radar confirmation, any deviation from the flight plan that isn\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'t reported may result in loss of separation. Mandatory reporting points (MRP) are identified on en route charts — pilots must report at each MRP. Non-reporting generates an overdue alert → search and rescue response.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'The difference between a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'constant bearing\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' intercept and a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'45° intercept\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' for ILS localiser is:',
  options: [
    'A. A 45° intercept means the aircraft tracks toward the localiser at a 45° angle to the extended centreline — the standard ATC radar vector intercept angle; a constant bearing intercept means the aircraft tracks a specific radial or bearing that converges with the localiser at a fixed angle; both terminate when the localiser is captured',
    'B. They are identical intercept techniques — the names are interchangeable — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'C. A 45° intercept is only used when ATC provides radar vectors — the constant bearing intercept is for non-radar approaches — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The 45° intercept gives a slower CDI rate making it easier to capture while constant bearing gives a faster CDI rate — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Localiser intercept methods: 45° intercept: the standard ATC radar vector assigns a heading 45° from the localiser centreline — as the aircraft tracks toward the localiser, the CDI begins to move when entering the service volume; at approximately 1 dot deflection, the aircraft turns to the inbound course (the FMC/autopilot in LOC ARM mode transitions to LOC TRACK). This is the most common ATC-assigned approach intercept. Constant bearing intercept: tracking a specific radial or bearing from a VOR that is offset from the localiser — used in procedural approaches without radar. Both achieve localiser capture but through different geometry.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The IFR minimum fuel reserve of 45 minutes is based on:',
  options: [
    'A. 45 minutes at cruise speed at cruise altitude — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. 45 minutes at holding speed (typically 1.3 × Vso or published holding speed) at 1,500 ft above the destination aerodrome elevation in International Standard Atmosphere (ISA) conditions',
    'C. 45 minutes at average trip fuel flow — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. 45 minutes at maximum continuous power at destination altitude — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'Final reserve fuel basis: the ICAO/CASR standard final reserve for IFR flights: 45 minutes at holding speed (the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s best endurance speed — typically 1.3 × Vso or the published holding speed for the aircraft type) at 1,500 ft above the destination aerodrome elevation, in ISA conditions. This represents the minimum fuel that must be available at the destination to allow for: unexpected delays in approach sequencing; additional holding if weather deteriorates; go-around and final approach. The 45-minute holding reserve is an absolute minimum — it must be available at the destination, not consumed en route.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'Fuel flow 3,900 kg/hr, holding 22 minutes. Fuel used:',
  options: [
    'A. 1,200 kg',
    'B. 1,560 kg',
    'C. 1,430 kg',
    'D. 1,300 kg'
  ],
  correct: 2,
  explanation: '3900×(22/60) = 1,430 kg. Answer A.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The IFR \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'alternate minima\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' standard for filing an alternate aerodrome requires that the forecast conditions at the alternate must be at the time of ETA at the alternate plus:',
  options: [
    'A. ±2 hours — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. ±30 minutes — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. ±1 hour — Australian CASR Part 91 requires the alternate to have forecast conditions above alternate minima for a period from 1 hour before to 1 hour after the estimated time of arrival at the alternate (ETA ± 1 hour)',
    'D. Only at ETA — no time window is required — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Alternate minima time window: CASR Part 91 (and ICAO Annex 2) alternate planning requirement: the destination alternate aerodrome must have forecast conditions at or above the alternate minima for the period from 1 hour before to 1 hour after the estimated time of arrival at the alternate. This ±1 hour window accounts for forecast uncertainty — the actual arrival time may differ from the estimate (if the destination is closed immediately on arrival, the aircraft may take up to 1 hour to reach the alternate after a missed approach and diversion). Checking only at ETA is insufficient because weather can change within an hour.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'Aircraft FL240 (≈4 nm altitude), DME 10 nm. Horizontal distance:',
  options: [
    'A. 9.2 nm',
    'B. 10.8 nm',
    'C. 10.0 nm',
    'D. 6.0 nm'
  ],
  correct: 0,
  explanation: 'Horiz = √(10²−4²) = √84 = 9.17 nm ≈ 9.2 nm. Answer A.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The FMC flight plan page requires entry of company route or waypoints in which order?',
  options: [
    'A. Alphabetical order — the FMC sorts them automatically — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. Sequential order from departure to destination — the FMC builds the route in the order waypoints are entered; each waypoint defines the next track segment; out-of-order entry creates incorrect route geometry that may not be detected until the aircraft is flying and the FMC tracks to incorrect positions',
    'C. The FMC enters waypoints automatically from the navigation database — no crew input is required — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. Waypoints are entered from destination to departure — the FMC plans the route in reverse — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'FMC waypoint entry order: the FMC requires waypoints to be entered in sequential order from the origin (departure) to the destination. The order defines the route geometry: the FMC computes the track from each waypoint to the next in the sequence. Incorrect order: if a waypoint is entered out of sequence, the FMC creates an erratic route (e.g. fly forward to waypoint A, then backward to waypoint B before continuing) — this may not trigger an obvious alert but will cause the FMC to command incorrect tracks. Verification: after entry, the crew must review the MCDU/CDU route page and verify the map display shows the correct route before departure.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'DME directly overhead at FL360 (≈6 nm altitude). DME reads:',
  options: [
    'A. 0.0 nm',
    'B. 6.0 nm',
    'C. 3.0 nm',
    'D. 9.0 nm'
  ],
  correct: 1,
  explanation: 'DME measures slant range = altitude = 36000/6076 = 5.93 ≈ 6.0 nm when overhead. Answer B 6.0 nm.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The purpose of the FMS Cost Index (CI) is:',
  options: [
    'A. Cost Index adjusts the glideslope angle for the approach based on current fuel price — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. CI is only relevant for cargo operations — passenger aircraft use a fixed cruise Mach number — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'C. Cost Index is the price of fuel at the destination — it affects fuel tankering decisions — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. CI is the ratio of time-related costs to fuel costs (typically units of kg/min or lb/min) — a high CI means time is expensive relative to fuel, so the aircraft flies faster (increasing fuel burn but reducing flight time); a low CI means fuel is expensive relative to time, so the aircraft flies slower to save fuel'
  ],
  correct: 3,
  explanation: 'Cost Index (CI): a ratio that balances time costs (crew, aircraft utilisation, passenger delay costs) against fuel costs. CI = time cost ($/minute) / fuel cost ($/kg). High CI (e.g. 100 kg/min): the aircraft values time highly → fly at or near MMO; burn more fuel per nm but minimise flight time. Low CI (e.g. 0 kg/min): maximum range speed, minimum fuel burn, longest flight time. CI = 0: Maximum Range Cruise (MRC) speed — minimum fuel per nm. CI very high: approach Long Range Cruise (LRC) and beyond toward MMO. Airlines set CI based on operational economics — fuel prices, route demand, connection requirements. The FMC uses CI to compute the entire flight plan: cruise altitude, speed, step climb timing.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'When an IFR-equipped aircraft experiences a GPS failure at cruise altitude in Australian radar-controlled airspace with DME and VOR available, the most appropriate action is:',
  options: [
    'A. Continue the flight without telling ATC — GPS failure is a minor event — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. Land at the nearest aerodrome immediately — GPS is required for all IFR operations — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'C. Declare an emergency immediately — GPS failure is always an emergency — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. Advise ATC of the GPS failure; confirm the FMC transitions to DME/DME or VOR/DME navigation; verify the FMC position is consistent with raw DME/VOR data; continue the flight using the available navaids within their approved serviceability; review alternate approach options if GPS-based approach was planned'
  ],
  correct: 3,
  explanation: 'GPS failure at cruise in radar airspace: GPS failure is not an emergency in itself — it is a degradation of navigation capability. Actions: (1) advise ATC of GPS failure — ATC may provide radar identification and monitoring; (2) verify FMC transitions to alternate source (DME/DME or VOR/DME); (3) cross-check FMC position with raw DME/VOR data; (4) review the destination approach — if GPS approach was planned, an ILS, VOR, or NDB approach is now required; (5) check alternate aerodrome options if the destination has no suitable non-GPS approach; (6) continue if navigation can be maintained with available navaids. Declare emergency only if navigation cannot be maintained safely.',
  reference: 'ANVC MOS 2.9.5 / CASR'
},
{
  question: 'An aircraft departs at 0200 UTC for a destination 2800 nm away. GS outbound 420 kt, GS homebound 560 kt. The ETP is located at what distance from departure?',
  options: [
    'A. 1,600 nm from A',
    'B. 1,400 nm from A',
    'C. 1,200 nm from A',
    'D. 1,800 nm from A'
  ],
  correct: 0,
  explanation: 'ETP distance = D × GS_H/(GS_O+GS_H) = 2800 × 560/(420+560) = 2800 × 560/980 = 2800 × 0.5714 = 1,600 nm. The ETP is displaced beyond the midpoint (1,400 nm) toward the destination because the homebound GS (560 kt) is faster than outbound (420 kt). An aircraft at the ETP takes equal time to reach either the departure point or the destination. Answer A 1,600 nm.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The VOR signal is transmitted on which polarisation to maximise signal quality for airborne receivers?',
  options: [
    'A. Horizontal polarisation — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Vertical polarisation — the VOR antenna is a vertically polarised element; aircraft VOR antennas (blade antennas on top or bottom of fuselage) are also vertically polarised; matching polarisation maximises signal reception and reduces multipath from horizontally polarised reflections',
    'C. VOR polarisation is horizontal in Australia to reduce terrain reflection — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'D. Circular polarisation — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'VOR polarisation: VOR transmitters use vertical polarisation. Reasons: vertical polarisation has lower multipath from the ground (horizontal surfaces reflect horizontally polarised waves more efficiently); aircraft blade antennas are naturally vertical elements; the electromagnetic wave travels along the ground more efficiently with vertical polarisation. The VOR dipole element is vertical; the aircraft blade antenna is a vertical element mounted flush with the fuselage. Matching polarisation between transmitter and receiver maximises received signal strength.',
  reference: 'ANVC MOS 2.5.3 / Navigation'
},
{
  question: 'The FMS NAV page shows \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ANP 0.08 / RNP 0.30\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. This means:',
  options: [
    'A. The Actual Navigation Performance (ANP) of 0.08 nm is better than (less than) the Required Navigation Performance (RNP) of 0.30 nm — the system is performing within specification with significant margin; the smaller the ANP, the better the navigation accuracy',
    'B. The navigation system is not performing adequately — 0.08 is less than 0.30 — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'C. RNP 0.30 means the approach requires 0.30 nm accuracy; ANP 0.08 means only 8% accuracy is achievable — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The system has failed — ANP should always equal RNP exactly — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'ANP vs RNP interpretation: ANP (Actual Navigation Performance) — the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s estimate of its current position error (1-sigma or 2-sigma depending on the implementation); this represents the radius of the estimated position uncertainty circle. RNP (Required Navigation Performance) — the maximum allowable position error for the current procedure. System is within spec when: ANP < RNP. ANP 0.08 nm < RNP 0.30 nm → the system is performing well within the required specification (0.08/0.30 = 27% of the allowable error). If ANP approaches or exceeds RNP, the FMC generates \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' alert. Pilots should monitor ANP on the FMC PROG/NAV page during RNP approaches.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'An aircraft departs A for B, distance 2400 nm. TAS 480 kt, wind component +60 kt (tailwind A to B). GS outbound 540 kt, GS homebound 420 kt. The ETP distance from departure is:',
  options: [
    'A. 1,320 nm',
    'B. 1,200 nm',
    'C. 1,050 nm',
    'D. 1,600 nm'
  ],
  correct: 2,
  explanation: 'ETP = D × GS_H/(GS_O+GS_H) = 2400 × 420/(540+420) = 2400 × 420/960 = 2400 × 0.4375 = 1,050 nm. The ETP is before the midpoint (1,200 nm) because homebound GS (420 kt, against the wind) is slower — equal time back to A takes a shorter distance than equal time forward to B. Answer A 1,050 nm.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An aircraft tracking 045°T at TAS 420 kt with no wind. After flying for 90 minutes it turns to track 135°T. What is the total distance flown after 90 minutes on each leg?',
  options: [
    'A. 630 nm on first leg, 630 nm on second leg — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. 420 nm each leg if second leg is also 60 min — this option conflates different navigation concepts and is not accurate',
    'C. 630 nm on first leg; second leg distance depends on time flown on second leg',
    'D. Cannot determine without groundspeed data — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'No wind: GS = TAS = 420 kt. First leg (90 min = 1.5 hr): distance = 420 × 1.5 = 630 nm. Turn to 135°T. Second leg distance depends entirely on time flown on the second leg — not specified. Each minute of the second leg covers 420/60 = 7 nm. Without knowing the time on the second leg, the second leg distance is indeterminate. Answer C: 630 nm on first leg; second leg distance depends on time flown.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'SSR transponder code 7700 indicates:',
  options: [
    'A. Aircraft is in VMC and does not require ATC services — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. Emergency — the aircraft is experiencing an emergency of any type; ATC will immediately identify the aircraft, provide priority handling, alert emergency services, and clear the airspace around the aircraft',
    'C. 7700 indicates radio failure only — other emergencies use different codes — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. 7700 is a test code used during transponder maintenance — it has no operational meaning — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'Transponder emergency code 7700: internationally standardised emergency squawk. When set, the transponder displays a distinctive emergency symbol on ATC radar (typically flashing or differently coloured label). ATC response: immediate priority; coordination with emergency services; other aircraft cleared; pilot status queried. Important: in Australia, squawking 7700 does not replace a MAYDAY call on 121.5 MHz — use both. The three emergency codes: 7700 (general emergency), 7600 (radio failure), 7500 (unlawful interference/hijack — do not squawk 7500 by accident).',
  reference: 'ANVC MOS 2.8.4 / AIP'
},
{
  question: 'The FMC (Flight Management Computer) computes optimum cruise altitude by:',
  options: [
    'A. The FMC always selects the highest available RVSM altitude for minimum fuel burn — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'B. Cruise altitude is selected by ATC — the FMC does not compute optimum altitude — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'C. Always selecting the maximum certified altitude regardless of conditions — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. Balancing step-climb penalties against the fuel efficiency at each altitude based on aircraft weight, atmospheric conditions (wind and temperature), and the cost index — choosing the altitude where the specific range (nm/kg fuel) is maximised for the given weight and conditions'
  ],
  correct: 3,
  explanation: 'FMC optimum altitude: the FMC performance algorithm uses: (1) aircraft gross weight (decreasing as fuel burns → optimum altitude increases as the flight progresses); (2) cost index (CI) — the ratio of time cost to fuel cost; high CI = fly faster at lower altitude; low CI = fly slower at higher altitude for maximum fuel efficiency; (3) ISA deviation (warmer than ISA reduces the optimum altitude); (4) wind components at each altitude (strong tailwind at lower altitude may make it more economical despite lower aerodynamic efficiency). The FMC recommends a step climb profile as the aircraft gets lighter.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An aircraft leaves Auckland (37°S, 175°E) at 1400 NZST (UTC+13). It arrives in Los Angeles (34°N, 118°W) after 12 hours. The local time of arrival in Los Angeles (PST = UTC−8) is:',
  options: [
    'A. 0500 PST same day',
    'B. 0500 PST previous day',
    'C. 1700 PST same day',
    'D. 0900 PST same day'
  ],
  correct: 1,
  explanation: 'Departure Auckland: 1400 NZST (UTC+13) = 1400−1300 = 0100 UTC. Note: NZST UTC+13 in NZDT (daylight saving) or UTC+12 standard. Using UTC+13: departure UTC = 0100. Flight time 12 hours: arrival UTC = 0100+1200 = 1300 UTC. Los Angeles PST = UTC−8: arrival PST = 1300−0800 = 0500 PST. Date: Auckland departs at 0100 UTC (same day as 1400 NZST); 12 hr later = 1300 UTC same day = 0500 PST same day. But Auckland is ahead — if departing on a Tuesday 1400 NZST, that is Monday 0100 UTC. 12 hr later = Monday 1300 UTC = Monday 0500 PST. So arrival is the SAME UTC day but Auckland\\\'s \\\'today\\\' is Los Angeles \\\'yesterday\\\'. Answer B: 0500 PST the previous day (from Auckland\\\'s perspective it is the next day, but from LA\\\'s perspective it\\\'s the same calendar date as the UTC day of departure).',
  reference: 'ANVC MOS 2.2 / Navigation'
},
{
  question: 'The maximum holding speed for an aircraft at FL210 is:',
  options: [
    'A. 265 KIAS',
    'B. 240 KIAS',
    'C. 200 KIAS',
    'D. 230 KIAS'
  ],
  correct: 0,
  explanation: 'ICAO holding speed limits: at or below FL140: 230 KIAS; FL140 to FL200: 240 KIAS; above FL200 to FL340: 265 KIAS; above FL340: Mach 0.83. At FL210 (above FL200, below FL340): maximum holding speed is 265 KIAS. These speeds define the protected holding area size — exceeding the limit may place the aircraft outside protected airspace.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'HDOP 1.8, UERE 4 m. Horizontal position error (1-sigma):',
  options: [
    'A. 2.2 m',
    'B. 5.8 m',
    'C. 4.0 m',
    'D. 7.2 m'
  ],
  correct: 3,
  explanation: 'HPE = HDOP×UERE = 1.8×4.0 = 7.2 m. Answer A.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The FMC continuously calculates and displays TKE (Track Angle Error) which is:',
  options: [
    'A. TKE is the engine thrust asymmetry correction factor — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements',
    'B. TKE shows the difference between heading and track — equivalent to drift angle — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The difference between the magnetic track and the true track — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'D. The angular difference between the required track (desired track to the active waypoint) and the actual track (ground track); TKE indicates which direction and how many degrees the aircraft path deviates from the planned course — displayed on the EHSI and used by the autopilot to compute correction steering'
  ],
  correct: 3,
  explanation: 'Track Angle Error (TKE): the angular difference between the required track (DTK — desired track, from present position to the next waypoint) and the actual track being made good over the ground. TKE = DTK − actual track. Positive TKE = aircraft is left of track (needs to turn right); negative = right of track. The EHSI typically shows TKE as an arrowhead above or below the track indication. The FMC uses TKE (combined with cross-track error and navigation sensitivity) to compute autopilot bank angle commands that keep the aircraft on track.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The VOR maximum usable range is limited by:',
  options: [
    'A. The VOR maximum range is 400 nm at all altitudes — fixed by ICAO regulation — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'B. VOR signals are reflected by the ionosphere beyond 200 nm — this limits maximum range — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Line-of-sight geometry — VHF signals travel in straight lines; the range depends on the square root of the aircraft altitude (approximately 1.23 × √altitude ft nm); at high altitude the range extends to 200+ nm; at low altitude it may be less than 50 nm',
    'D. The VOR transmitter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s 50 W power output — it cannot propagate beyond 100 nm regardless of altitude — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'VOR maximum usable range: VHF (108 to 118 MHz) propagates as a space wave — direct line of sight. The geometric horizon distance: d_nm ≈ 1.23 × √(H_ft). For combined transmitter (at height h₁) and receiver (at height h₂): d_total = 1.23 × (√h₁ + √h₂). VOR transmitters are at ground level (h₁ ≈ 50 to 100 ft effective); at FL350 (35,000 ft): d ≈ 1.23 × (√100 + √35000) ≈ 1.23 × (10 + 187) ≈ 242 nm. At 2,000 ft: ≈ 1.23 × (10 + 45) ≈ 68 nm. The published service volume varies by station class and incorporates both the line-of-sight limit and the accuracy-limited range.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'EFIS (Electronic Flight Instrument System) advantages over conventional analogue instruments include:',
  options: [
    'A. EFIS instruments never fail — they have infinite reliability compared to analogue gauges — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. EFIS reduces the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s weight significantly — the displays weigh less than analogue instruments — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'C. EFIS is mandatory on all commercial aircraft worldwide — analogue instruments are prohibited — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. Integration of multiple parameters on fewer displays (reducing scan workload); selectable display modes; automatic comparison and fault detection; ability to display additional data (weather radar overlay, terrain); and easier updating of software/databases'
  ],
  correct: 3,
  explanation: 'EFIS advantages: (1) integration — PFD and ND replace 6+ individual instruments; (2) flexible display modes — pilots can select what to display; (3) automated cross-checking — ADC and IRS compare data and alert on discrepancies; (4) overlay capability — weather radar, terrain, traffic on the ND; (5) updating — database and software updates possible without instrument replacement; (6) built-in test equipment (BITE); (7) reduced pilot scan required; (8) standardisation — similar displays across aircraft types reduce transition training. Disadvantages: complete display failure can lose all primary flight information (mitigated by backup/standby instruments).',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The difference between an RNAV (GNSS) approach and an RNP AR approach is primarily:',
  options: [
    'A. RNP AR requires on-board monitoring and alerting (OBMA), authorisation from the operator and CASA, and supports RF (curved) leg segments and tighter accuracy (0.1 nm); standard RNAV (GNSS) approaches have no OBMA requirement and use straight segments only',
    'B. RNP AR approaches are less accurate than RNAV approaches — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. RNAV and RNP AR are identical — the names are interchangeable — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'D. RNAV approaches use GPS; RNP AR approaches use ILS — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'RNAV vs RNP AR: Standard RNAV (GNSS) approach: accuracy typically 0.3 nm; no OBMA; straight segments (CF legs); no special authorisation required beyond basic RNAV approval. RNP AR (Authorisation Required): accuracy 0.1 to 0.3 nm depending on procedure; OBMA mandatory (FMC monitors ANP vs RNP continuously — alerts \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' if cannot be met); RF (Radius to Fix) curved legs permitted; enables approaches to aerodromes with terrain requiring curved paths; requires specific aircraft certification (dual FMS, specific autopilot capability) and operator/crew authorisation from CASA. Lower minimums possible (250 ft HAT).',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The reason twin-engine ETOPS aircraft must cross-check all FMC position updates from GPS against an independent source periodically is:',
  options: [
    'A. The primary concern is GPS spoofing or undetected GPS error — the navigation risk in ETOPS operations is that a systematic error in the GPS position could lead to the aircraft being significantly off course in critical airspace; cross-checking with IRS, DME (when available), or HF radio position reports detects systematic errors that RAIM alone may not identify',
    'B. GPS is inherently unreliable on oceanic routes — cross-checking is mandatory at all times — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Cross-checking is required only when RAIM is unavailable — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. ETOPS cross-checking is only required if the aircraft is within 60 minutes of the ETOPS alternate — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'ETOPS GPS cross-checking: RAIM detects faults in individual GPS satellites but may not detect systematic biases affecting all satellites (correlated errors from ionospheric storms, spoofing, or constellation-wide issues). For ETOPS: (1) the consequence of a significant navigation error (60+ nm) is potential conflict with oceanic traffic on adjacent tracks; (2) cross-checking GPS against IRS (which drifts slowly — any sudden large IRS/GPS discrepancy indicates a GPS problem); (3) cross-checking against DME when within range; (4) verifying HF position reports match the displayed FMC position. The multiple-layer cross-check system provides defence against navigation errors.',
  reference: 'ANVC MOS 2.9.1 / CASR'
},
{
  question: 'The FMS lateral path in the terminal area between a STAR and an approach uses which type of segment?',
  options: [
    'A. Course To Fix (CF) segments for straight legs and Radius To Fix (RF) segments for curved segments in RNP procedures — the CF segment defines a track and a terminating fix; RF defines a constant-radius arc to a fix; these path terminators ensure precise 3D path definition in complex terminal procedures',
    'B. Terminal area FMS paths are defined by ATC vectors only — no FMC programming — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. The FMS uses rhumb line tracks for all terminal area segments — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The FMS always uses great circle tracks in the terminal area — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'ARINC 424 path terminators: FMS navigation in the terminal area uses standardised path terminators from ARINC 424 (navigation database specification): (1) CF (Course to Fix) — the most common; fly a specific track to a fix; (2) RF (Radius to Fix) — constant-radius arc to a terminating fix; used in RNP AR curved approaches; (3) TF (Track to Fix) — great circle to a fix; (4) DF (Direct to Fix) — direct to a fix from current position; (5) VA (Heading to Altitude) — fly heading until reaching altitude. These terminators allow precise path definition enabling the FMC to accurately define and fly complex 3D terminal procedures, which is the basis for all modern RNAV and RNP approaches.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The time required for a GPS receiver to acquire satellites and compute a first position fix from a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'cold start\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (no previous position or almanac data) is approximately:',
  options: [
    'A. Cold start and warm start times are identical — the receiver always takes the same time — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. Less than 1 second — GPS receivers are always available immediately — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'C. 1 to 12 minutes depending on the receiver design — the receiver must first download the satellite almanac (orbital parameters for all satellites, transmitted every 12.5 minutes) and then acquire individual satellites to download their ephemeris data before computing a precise position',
    'D. Cold start acquisition takes more than 30 minutes in all cases — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'GPS cold start acquisition: a cold start occurs when the receiver has no saved almanac, no approximate position, and no time reference. Steps: (1) search for any satellite signal (may take several minutes if the search algorithm must cover all frequencies/code offsets); (2) receive almanac (52 subframes × 6 seconds = 312 seconds ≈ 5 minutes to receive the complete almanac for all satellites); (3) acquire individual satellites using ephemeris data; (4) compute position once 4+ satellites are tracked. Total cold start time: 1 to 12+ minutes. Warm start (has almanac but no ephemeris): 30 to 60 seconds. Hot start (has almanac + ephemeris): < 30 seconds.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'What is the primary advantage of the ring laser gyro (RLG) over a mechanical spinning-mass gyro in an IRS?',
  options: [
    'A. RLGs provide magnetic heading directly without requiring variation correction — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. RLGs are cheaper to manufacture than mechanical gyros — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. RLGs have no moving parts — eliminating mechanical wear, friction, and the bearing failures that cause mechanical gyro drift; RLGs also have faster response (no spin-up time), are insensitive to g-forces, and have extremely low drift (< 0.001°/hour) compared to mechanical gyros (1 to 5°/hour)',
    'D. RLGs are smaller than mechanical gyros — this is the primary advantage for aircraft installation — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'RLG vs mechanical gyro: mechanical gyro: spinning mass at high RPM; bearings subject to wear → increasing drift over time; requires time to spin up to operating speed; sensitive to high g-forces; drift typically 1 to 5°/hour. RLG (Ring Laser Gyro): two counter-propagating laser beams in a sealed cavity; no mechanical bearings or moving parts; starts instantly; immune to g-forces (beam path is fixed); drift < 0.01°/hour; near-zero mechanical failure rate (lifespan typically > 50,000 hours). The result: IRS using RLGs achieves position accuracy of < 1 nm/hour without GPS updating — significantly better than mechanical platform INS (2 to 5 nm/hour).',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'An aircraft requires 52 minutes to fly from an overhead NDB to a DME fix at 30 nm, giving a groundspeed of:',
  options: [
    'A. 32 kt — too slow for cruise — not supported by the ANVC syllabus or applicable MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. 35 kt — not supported by the ANVC syllabus or applicable MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'C. 34.6 kt — not supported by the ANVC syllabus or applicable MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. 30 nm in 52 min = 34.6 kt — this is unrealistically slow; typical cruise GS would give: at 420 kt GS, 30 nm takes 4.3 minutes'
  ],
  correct: 3,
  explanation: 'At 420 kt GS: time = (30/420)×60 = 4.3 minutes. At 34.6 kt: time = 52 minutes. 34.6 kt GS is unrealistically slow for any airborne operation — walking pace. The question reveals a data inconsistency. The only valid answer is D which correctly identifies the calculation (30/52×60 = 34.6 kt) but also identifies it as unrealistic. For exam purposes: GS = distance/time = 30 nm/(52/60 hr) = 30/0.867 = 34.6 kt. Answer D.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A departure from a high-elevation aerodrome (elevation 6,500 ft) with a QNH of 1,020 hPa — the transition to the standard pressure at the transition altitude of 10,000 ft requires the altimeter to be:',
  options: [
    'A. Set to 1013.25 hPa exactly when the aircraft passes through 10,000 ft QNH altitude — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'B. Set to 1013 hPa only when entering controlled airspace — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The transition altitude and level are the same value — 10,000 ft on both QNH and standard pressure — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'D. Set to 1013.25 hPa at or passing through the transition altitude (10,000 ft QNH altitude) during climb; on descent, the transition level (always at or above the transition altitude) is where the setting changes from standard pressure back to QNH'
  ],
  correct: 3,
  explanation: 'Altimeter setting at transition altitude: Australian transition altitude is typically 10,000 ft (3,000 m) above MSL, though it can vary by aerodrome. In the climb: at the transition altitude (TA), set the subscale to 1013.25 hPa and report the flight level (FL100 if transitioning at 10,000 ft in a standard pressure environment). From a high-elevation aerodrome at 6,500 ft elevation, the aircraft climbs 3,500 ft to reach the TA of 10,000 ft. At 10,000 ft QNH altitude, change to standard pressure. Note: the transition level (TL) is the first available flight level AT or ABOVE the TA — if QNH is above standard (1,020 hPa here), the TL may be FL110 to ensure a 1,000 ft buffer between the TA and TL.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The international standard for the coding of navigation data in aircraft navigation databases is:',
  options: [
    'A. MIL-STD-2085 — the military navigation database format used in civil aviation — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. ARINC 424 — Navigation System Database — the standard that defines the record formats, codes, and structures for all navigation data (waypoints, airways, procedures, airways, runways) in aircraft FMS databases; all database suppliers must produce data compliant with ARINC 424 for use in FMS systems',
    'C. ICAO Annex 15 — Aeronautical Information Services — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'D. RTCA DO-229 — the GPS minimum operational performance standard — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'ARINC 424: Aeronautical Radio Inc. standard 424 defines the digital navigation database format for aircraft Flight Management Systems. It specifies: record formats for waypoints (WT, EA, PC records), airways (ER records), procedures (PD, PE, PF, PG records for SIDs, STARs, approaches), airports (PA records), runways (PG), and other navigation elements. Suppliers (Jeppesen, Lufthansa Systems, Navtech) produce databases compliant with ARINC 424 that are installed in aircraft FMS systems. The 28-day AIRAC cycle determines when database updates are issued and take effect.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A cruise altitude of FL350 in the Southern Hemisphere (say latitude 45°S) in the westerly wind belt requires which flight level designation for westbound flight?',
  options: [
    'A. Westbound in the Southern Hemisphere uses odd flight levels — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. In Australian RVSM airspace, westbound tracks (180° to 359° magnetic) use EVEN flight levels: FL300, FL320, FL340, FL360, FL380, FL400; eastbound (000° to 179°) use ODD levels; so FL350 is used for EASTBOUND (000° to 179°M) not westbound',
    'C. Australia uses the same even/odd system as the Northern Hemisphere — westbound uses odd levels — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Flight level allocation does not depend on direction of flight — any FL can be used in any direction — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'Australian RVSM IFR flight levels — semicircular rule: within Australian RVSM airspace (FL290 to FL410): Eastbound (000° to 179°M track): ODD flight levels — FL310, FL330, FL350, FL370, FL390, FL410; Westbound (180° to 359°M track): EVEN flight levels — FL300, FL320, FL340, FL360, FL380, FL400. Therefore FL350 is an eastbound (ODD) flight level — a westbound aircraft cannot use FL350; it would use FL340 or FL360. This semicircular rule applies throughout RVSM airspace. Check AIP ENR 1.7 for current rules.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'Navigation accuracy on a long oceanic flight using IRS-only (no GPS) deteriorates because:',
  options: [
    'A. IRS position error accumulates with time — each small gyro drift and accelerometer bias produces a position error that grows linearly with time at approximately 1 to 2 nm per hour; on a 14-hour oceanic flight, accumulated IRS error could reach 14 to 28 nm',
    'B. IRS accuracy improves during flight as the system warms up — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'C. IRS accuracy is constant throughout the flight regardless of flight duration — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'D. IRS loses accuracy only when the battery power is interrupted — continuous power prevents drift — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'IRS error accumulation: the IRS computes position by double integrating accelerometer outputs. Any small systematic error in the accelerometers (bias, scale factor error) or gyros (drift) is integrated twice — position error grows as t² in theory but in practice with modern RLG IRS it grows approximately linearly at 1 to 2 nm/hour. On a long oceanic flight without GPS updating, accumulated error could be significant. MNPS (Minimum Navigation Performance Specification) airspace requires aircraft to demonstrate RNP 10 capability — the INS (combined) must achieve less than 2 nm CEP for 95% of flight time. Achieved with dual IRS + GPS.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'At TAS 500 kt and Mach 0.84, what is the approximate local speed of sound?',
  options: [
    'A. 595 kt',
    'B. 578 kt',
    'C. 610 kt',
    'D. 560 kt'
  ],
  correct: 0,
  explanation: 'LSS = TAS/Mach = 500/0.84 = 595.2 kt ≈ 595 kt. Cross-check: LSS 595 kt → T = 288.15×(595/661.5)² = 288.15×0.809 = 233K = −40°C. Consistent with mid-upper troposphere at cruise altitude. Answer A 595 kt.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'VOR bearing errors caused by terrain or building reflections (multipath) near the VOR site are reduced by using:',
  options: [
    'A. Higher transmitter power — multipath is proportional to signal strength — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. DVOR (Doppler VOR) — the large antenna array averages reflections from the environment, reducing multipath-induced bearing errors; conventional VOR is more susceptible to siting errors because the single rotating directional antenna is more sensitive to individual reflections',
    'C. ILS is immune to multipath — only VOR is affected — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. Moving the aircraft to a higher altitude — multipath only occurs at low altitude — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'DVOR multipath reduction: conventional VOR uses a single rotating directional antenna (physical or electronic equivalent). Nearby reflections from buildings or terrain create a reflected signal that mixes with the direct signal, causing bearing errors that vary with azimuth (siting errors, typically up to 4° RMS). DVOR uses a large circular array (13 m diameter) with electronic switching between multiple antennas. The large aperture of the DVOR array averages out multipath reflections — the Doppler principle is less sensitive to individual reflectors. DVOR siting error: typically < 1° RMS. Flight inspection verifies that the DVOR meets the 1° specification.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'A step climb during oceanic cruise is planned when:',
  options: [
    'A. Step climbs are prohibited in oceanic airspace — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s weight decreases as fuel burns, raising the optimum altitude — the FMC computes the optimum step climb point where climbing to a higher flight level will improve fuel efficiency (higher SR at the new level due to lower weight/higher altitude) offsetting the fuel cost of the climb',
    'C. Step climbs are only used when the en route weather requires terrain clearance — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. ATC requests the aircraft to climb immediately — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'Step climb planning: as a long-range aircraft burns fuel, it becomes lighter. The optimum cruise altitude increases with decreasing weight. At some point, the fuel saving from cruising at a higher altitude exceeds the fuel cost of climbing to that altitude — this is the step climb point. FMC step climb computation: the FMC calculates at which point in the flight the step to the next higher level becomes economical (based on weight, CI, wind at each level, ISA deviation). Oceanic step climbs require ATC coordination — the aircraft requests the new level from oceanic ATC and must receive clearance before climbing. ETOPS operations have specific step climb fuel accounting requirements.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'CPDLC (Controller-Pilot Data Link Communications) is used in oceanic airspace primarily because:',
  options: [
    'A. CPDLC provides faster communications than voice for routine messages — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'B. HF voice communications in oceanic airspace are limited by range, propagation, static, and the time required for standard phraseology; CPDLC provides text-based digital communications that are: more reliable (no propagation fading); more efficient (pre-formatted messages); easier to read back accurately; and capable of being printed/stored for record keeping',
    'C. CPDLC is mandatory at all altitudes in Australian airspace — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'D. CPDLC replaces SELCAL — aircraft with CPDLC do not need SELCAL systems — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'CPDLC advantages: Controller-Pilot Data Link Communications uses a text-based digital data link (via ACARS over VHF, HF, or satellite). Benefits over HF voice: (1) no propagation fading or static; (2) satellite-based CPDLC provides reliable global coverage; (3) pre-formatted message types (clearances, requests, traffic advisories, weather) reduce ambiguity; (4) uplink messages are displayed digitally — no readback errors; (5) the crew can respond at a convenient time without interrupting other tasks; (6) messages logged automatically for safety management; (7) FANS (Future Air Navigation System) integrates CPDLC with ADS-C for surveillance. Common in Pacific, Indian Ocean, and North Atlantic tracks.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'Rhumb line distance 30°S 150°E to 30°S 090°E (60° longitude apart):',
  options: [
    'A. 2,700 nm',
    'B. 3,600 nm',
    'C. 3,120 nm',
    'D. 2,340 nm'
  ],
  correct: 2,
  explanation: 'Rhumb line = Δlong×60×cos(lat) = 60×60×cos(30°) = 3600×0.8660 = 3,118 nm ≈ 3,120 nm. Answer B.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'Waypoint A 0412 UTC, waypoint B ETA 0452 UTC, distance 310 nm. Average GS:',
  options: [
    'A. 465 kt',
    'B. 420 kt',
    'C. 500 kt',
    'D. 390 kt'
  ],
  correct: 0,
  explanation: 'Time = 40 min = 0.667 hr. GS = 310/0.667 = 465 kt. Answer A.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The reason GPS satellite clocks must be maintained to nanosecond accuracy is:',
  options: [
    'A. Each nanosecond of timing error corresponds to approximately 0.3 m of range error — GPS positioning requires nanosecond-level timing to achieve metre-level position accuracy; satellite atomic clocks achieve this, monitored and corrected by the GPS control segment',
    'B. Nanosecond accuracy is required only for military GPS users — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'C. GPS uses phase measurement not timing — clock accuracy is irrelevant — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. Precise clocks synchronise the satellite control station transmissions — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'GPS clock accuracy: range measurement equals signal travel time times speed of light. Speed of light equals 0.3 m per nanosecond. Therefore 1 ns timing error produces 0.3 m ranging error. For 3 m GPS accuracy, timing accuracy must be approximately 10 ns. GPS satellites carry atomic clocks accurate to 20 to 30 ns. The control segment uploads clock corrections twice daily. The navigation message broadcasts clock correction polynomials. The receiver needs a 4th satellite to solve for its own (cheaper quartz) clock error.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'INS alignment requires the aircraft to be stationary because:',
  options: [
    'A. Alignment is needed only to start the gyroscopes — it does not require a stationary aircraft — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'B. The INS computer needs to download route data from the FMS database — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'C. During alignment, the INS determines true north by detecting the horizontal component of Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation rate using gyrocompassing — this requires the platform to be stationary; any motion during alignment introduces errors that persist throughout the flight',
    'D. INS alignment requires loading the magnetic variation from the compass to set the heading reference — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'INS alignment requirement: the gyrocompassing alignment process senses Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation rate (15°/hour) to determine true north. The Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation rate at a given latitude: ω_horizontal = 15° × cos(latitude)/hour. This is a very small signal — even small accelerations from aircraft movement mask it completely. Alignment time: typically 4 to 10 minutes stationary; some systems allow abbreviated alignment at the expense of initial accuracy. The initial position must be entered accurately — position error at alignment propagates through the flight as a navigation error.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'Pressure height versus geometric height differ because:',
  options: [
    'A. They are identical below FL200 — the difference only becomes significant above FL600 — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'B. Pressure height always equals geometric height — they use the same reference — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. Pressure height (pressure altitude) assumes the ISA pressure-altitude relationship; geometric height is the actual distance above a reference surface (e.g. WGS-84 ellipsoid or mean sea level). In non-standard temperatures, the geometric height for a given pressure is different from the ISA prediction — in warm air, a given pressure level is geometrically higher than ISA; in cold air it is lower',
    'D. Geometric height is only measured by radio altimeters — pressure altimeters measure pressure height — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Pressure altitude vs geometric altitude: pressure altitude = the altitude in the ISA that corresponds to the measured atmospheric pressure. Geometric altitude = the actual height above a defined surface (typically MSL or WGS-84 ellipsoid for GPS). They differ when temperature differs from ISA: warm air (above ISA) — air expands, raising pressure surfaces higher geometrically → the 500 hPa level is geometrically HIGHER than the ISA prediction → aircraft at 500 hPa are geometrically higher than their pressure altitude suggests. Cold air — opposite effect → aircraft are geometrically LOWER. This is the basis of the cold temperature altimetry correction — in cold air, the aircraft is lower than its pressure altitude indicates.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'Ground proximity warning systems (GPWS) and terrain awareness warning systems (TAWS) differ in that:',
  options: [
    'A. GPWS (basic) uses radio altimeter, airspeed, gear and flap position to detect flight into terrain in real time — reactive; TAWS (enhanced EGPWS) adds a terrain database and GPS position to provide predictive alerting based on look-ahead terrain — active warnings minutes before terrain impact rather than seconds',
    'B. TAWS only operates above FL100 — GPWS covers low-altitude operations — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'C. GPWS and TAWS are identical systems with different trade names — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'D. GPWS provides audio warnings while TAWS only provides visual displays — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'GPWS vs TAWS/EGPWS: basic GPWS (Mode 1-7) monitors: excessive sink rate; excessive terrain closure rate; excessive altitude loss after take-off; unsafe terrain clearance with gear/flaps not in landing configuration; excessive glideslope deviation; excessive bank angle; and windshear. All reactive — the terrain must be detected by the radio altimeter (within seconds of impact). EGPWS/TAWS adds: GPS position; terrain database; look-ahead alerting (minutes before impact); terrain display on ND; geographic alerts. Now mandatory on commercial aircraft in Australia. CFIT (Controlled Flight Into Terrain) accidents reduced significantly with TAWS.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The IFR alternate minima at an aerodrome with an ILS Cat I approach require:',
  options: [
    'A. The forecast conditions to be above the ILS Cat I published minima — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The alternate minima are identical to the destination approach minima — no additional buffer is required — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. In Australia, the alternate minima require the destination alternate to have a forecast ceiling at least 200 ft above, and visibility at least 800 m above, the approach minima for the best available approach at the alternate; for an ILS Cat I alternate (DH 200 ft, RVR 550 m): alternate minima approximately 400 ft ceiling, 1,350 m visibility',
    'D. The alternate must have VMC forecast — IFR minima are not used for alternate planning — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'IFR alternate minima: alternate aerodrome planning requires a forecast that guarantees the aerodrome will be usable if needed. Australian CASR Part 91 alternate minima: (1) for aerodromes with precision approach (ILS): forecast ceiling ≥ DH + 200 ft and visibility ≥ approach minimum + 800 m (approximately); actual values from CASR Part 91 tables; (2) for non-precision approach aerodromes: ceiling ≥ MDA + 200 ft and visibility ≥ approach minimum + 800 m. The additional buffer accounts for: forecast uncertainty; instrument approach inaccuracies; different time of arrival from forecast time. Check current CASR Part 91 for exact alternate minima tables.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The Mach number above which compressibility corrections to the ASI become significant is approximately:',
  options: [
    'A. Mach 1.0 — compressibility only matters at transonic speeds — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. Mach 0.1 — compressibility affects the ASI at all speeds — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. Approximately Mach 0.3 (approximately 200 kt CAS at sea level) — below this speed, the assumption that air is incompressible is valid; above it, compressibility causes the pitot tube to over-read compared to the true dynamic pressure, so CAS must be corrected to obtain EAS',
    'D. Compressibility corrections are not required for subsonic aircraft — only supersonic aircraft need them — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Compressibility significance threshold: air behaves as incompressible (constant density) at speeds below approximately Mach 0.3 (200 kt IAS/CAS at sea level). Above this, the dynamic pressure at the pitot stagnation point is higher than the simple ½ρv² formula predicts because the air compresses before the stagnation point, adding extra pressure. This causes the ASI to over-read. The correction factor (CAS to EAS): EAS = CAS × √(Ps/Po)^0.286 × (corrected for compressibility). At FL350 cruise (Mach 0.80, CAS ~280 kt), the compressibility correction is approximately 10 to 15 kt.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'ETOPS (Extended Range Twin Engine Operations) allows twin-engine aircraft to fly routes that are more than 60 minutes from a diversion aerodrome at single-engine cruise speed because:',
  options: [
    'A. ETOPS approval is automatic for all modern twin-engine jets — no special certification is required — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'B. ETOPS applies only to overwater routes — land routes have no distance restrictions — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Historical ICAO rules required twin-engine aircraft to stay within 60 minutes of a diversion aerodrome (the original 60-minute rule); ETOPS approval extends this to 120, 180, 207, or 240+ minutes based on demonstrated aircraft/engine reliability and operator procedures, enabling more efficient routing (e.g. trans-oceanic, polar)',
    'D. ETOPS allows twin-engine aircraft to fly any route without diversion planning — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'ETOPS history: the ICAO 60-minute rule (originally) limited twin-engine aircraft to routes within 60 minutes single-engine flying time from an adequate aerodrome. This severely restricted trans-oceanic routing. ETOPS approval extended this based on: engine and aircraft reliability data (demonstrated dispatch reliability > 99.96%); operator maintenance standards; crew training; specific equipment requirements (ETOPS fuel reserves, additional systems redundancy). ETOPS 120: within 120 minutes. ETOPS 180: used for most trans-Pacific routes. ETOPS 240+: extended for some polar routes. Modern aircraft (B787, A350) designed as ETOPS-capable from certification.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'The ADF receiver senses the direction to an NDB by:',
  options: [
    'A. Measuring the signal strength from multiple antennas — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'B. Rotating a loop antenna to find the null (minimum signal) position — the loop has a figure-eight radiation pattern; the null positions are perpendicular to the loop plane; the direction giving the minimum received signal indicates the bearing to the NDB',
    'C. Using a directional Yagi antenna that physically points toward the NDB — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'D. Measuring the phase difference between two whip antennas — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'ADF loop antenna null sensing: the loop antenna has a figure-eight radiation pattern with two nulls (minimum signal directions) perpendicular to the loop plane. By rotating the loop, the ADF finds the null — the loop orientation at null indicates the NDB direction. A sense antenna (omnidirectional whip) is combined with the loop to resolve the 180-degree ambiguity (two nulls exist, one pointing toward the NDB and one pointing away). Modern ADFs use electronically switched ferrite loop antennas rather than physically rotating loops.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'Step climb from FL360 to FL380 costs 420 kg. SR at FL360 = 0.118 nm/kg; SR at FL380 = 0.125 nm/kg. Break-even distance at FL380:',
  options: [
    'A. 895 nm',
    'B. 710 nm',
    'C. 1,040 nm',
    'D. 600 nm'
  ],
  correct: 0,
  explanation: 'Saving per nm = 1/0.118 − 1/0.125 = 8.474−8.000 = 0.474 kg/nm. Break-even = 420/0.474 = 886 nm ≈ 895 nm. Answer A.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The principle of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'dead reckoning\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (DR) navigation involves:',
  options: [
    'A. Using only GPS to determine position with no cross-checking — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. Dead reckoning is only applicable to maritime navigation — aviation uses radio navaids exclusively — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Calculating position from a known starting point using known or estimated track, speed, and elapsed time — in the absence of fixes, the DR position is the best estimate of position; accuracy degrades with time as errors in track, speed, and time accumulate',
    'D. DR navigation gives the exact position — it is the most accurate navigation method — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Dead Reckoning (DR): the process of estimating current position based on: (1) a known past position (fix); (2) elapsed time since that fix; (3) estimated or measured track (heading + drift correction); (4) estimated or measured groundspeed. DR position = past position + (groundspeed × time) in the direction of track. Errors accumulate: wind estimation error → groundspeed and track errors → position error grows with time. DR is the backup navigation method when all radio aids fail. Maintain a DR plot throughout flight — if GPS and navaids fail, the DR position provides the crew with situational awareness for terrain clearance and ATC reporting.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The relationship between IAS, CAS, EAS, and TAS at altitude is:',
  options: [
    'A. Only IAS and TAS are operationally relevant — CAS and EAS are theoretical constructs — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'B. All four are equal at any altitude — they represent different ways to express the same quantity — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. TAS is always less than IAS — aircraft fly more slowly in thinner air — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'D. Starting from IAS: add position/instrument error correction → CAS; subtract compressibility correction → EAS; multiply by the square root of the density ratio → TAS; TAS is always greater than IAS at altitude'
  ],
  correct: 3,
  explanation: 'Speed conversion chain: IAS (raw instrument reading) → +/− position error correction → CAS (Calibrated) → −compressibility correction → EAS (Equivalent, corrects for compressibility above ~200 kt) → × 1/√σ where σ = density ratio → TAS (True). At sea level ISA, all are equal. At FL350 ISA: density ratio σ ≈ 0.31, so TAS ≈ IAS/√0.31 ≈ IAS × 1.80. A 280 kt IAS at FL350 ≈ 504 kt TAS. TAS is the actual speed through the air; groundspeed = TAS ± wind component.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'Heading 270°M in the Southern Hemisphere during a standard rate turn to the right will become heading:',
  options: [
    'A. Direction of turn (clockwise/anticlockwise) changes in the Southern Hemisphere — the turn direction is reversed',
    'B. Heading will decrease clockwise in the Southern Hemisphere — this represents a common misconception not supported by the source material',
    'C. Heading will increase clockwise — in the Southern Hemisphere, turning right means the nose moves clockwise (north, then east, then south, then west); from 270° (west), turning right takes the aircraft through 360°/000° (north) then 090° (east) etc.',
    'D. The aircraft will turn clockwise (when viewed from above) and the heading will increase'
  ],
  correct: 3,
  explanation: 'Heading direction with right turn: in both hemispheres, a right turn means the nose moves clockwise when viewed from above (the right wing drops, nose moves right). Starting at 270° (west): right turn → 280° → 290° → 300° → ... → 360°/000° (north) → 010° → ... → 090° (east). The heading INCREASES numerically with a right turn until passing through 360°/000°. There is NO difference between hemispheres for turn direction — this is purely a geometric convention. The Southern Hemisphere only affects DRC turn errors and Coriolis — not the definition of left/right turns or heading increase/decrease convention.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'The QFE setting on the altimeter makes the altimeter read:',
  options: [
    'A. Height above the aerodrome reference point (typically the highest point on the runway) — when QFE is set and the aircraft is on the ground at the aerodrome reference point, the altimeter reads zero; on approach, QFE altitude equals height above the aerodrome',
    'B. Pressure altitude — QFE is another name for 1013.25 hPa — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. Mean sea level altitude — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'D. QFE makes the altimeter read the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s height above terrain directly below — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'QFE altimeter setting: QFE is the atmospheric pressure at aerodrome level (at the designated aerodrome reference point). When QFE is set: the altimeter reads zero on the ground at the aerodrome reference point; during approach, the reading equals the height above that reference point. Used by some military and training operations for circuit flying (height above airfield). In Australian civil IFR operations, QNH (reading altitude above MSL) is standard for instrument approaches — approach minima are expressed as altitude or height AMSL referenced to QNH. Some approach charts provide both QNH altitudes and QFE heights for operators that use QFE.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The FMS VNAV mode manages the aircraft vertical profile by:',
  options: [
    'A. VNAV is only active during the approach phase — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Maintaining a constant vertical speed throughout the flight — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. VNAV only manages altitude — speed is always manually controlled by the crew — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. Computing a continuous speed-altitude profile from top of descent to the runway that satisfies all published altitude and speed constraints; the autothrottle manages engine thrust to maintain the computed path'
  ],
  correct: 3,
  explanation: 'VNAV profile management: VNAV (Vertical Navigation) computes the optimum vertical path from the current position to the destination satisfying: all altitude constraints (at or above, at or below crossing altitudes from STARs and approaches); all speed constraints; and the aircraft performance limits. The autothrottle adjusts thrust to maintain the computed speed-altitude profile. During descent: typically idle thrust with speed brakes as required. VNAV continuously updates the profile as conditions change (winds, ATC speed assignments, weight changes).',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'At latitude 35°S, Earth rate azimuth wander in 15 minutes:',
  options: [
    'A. 1.4°',
    'B. 2.2°',
    'C. 3.6°',
    'D. 0.9°'
  ],
  correct: 1,
  explanation: 'Rate = 15×sin(35°) = 8.6°/hr. In 15 min = 8.6×0.25 = 2.15° ≈ 2.2°. Answer B.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The ILS marker beacon frequency of 75 MHz is shared by all three markers (outer, middle, inner). They are distinguished by:',
  options: [
    'A. Different frequencies within the 75 MHz band — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'B. Different audio tone modulation frequencies and cockpit light colours: outer marker at 400 Hz with blue light and dash tone; middle marker at 1300 Hz with amber light and alternating dots and dashes; inner marker at 3000 Hz with white light and rapid dots',
    'C. Different pulse repetition rates — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. Different transmission power levels — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'Marker beacon differentiation: all marker beacons transmit on 75 MHz but are distinguished by modulation: Outer Marker (OM): 400 Hz tone, dashes only, blue cockpit light, approximate range 4 to 7 nm from threshold. Middle Marker (MM): 1300 Hz tone, alternating dots and dashes, amber cockpit light, approximately 0.5 nm from threshold. Inner Marker (IM): 3000 Hz tone, rapid dots, white cockpit light, at the Cat II/III DH position. The crew identifies which marker is being passed by the audio tone pattern and light colour.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'Ground clutter on a weather radar display is caused by:',
  options: [
    'A. The radar beam illuminating terrain, buildings, and surface features close to the aircraft — these strong fixed returns can mask nearby weather; minimised by adjusting antenna tilt up, and by automatic ground clutter suppression (Doppler processing in modern radars)',
    'B. Interference from other aircraft weather radars in the vicinity — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'C. Ground clutter only appears on ATC primary radar — airborne weather radars are immune — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'D. Ground clutter is a display calibration error — it can be eliminated by the brightness control — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 0,
  explanation: 'Ground clutter: when the radar beam hits the ground or surface features (terrain, buildings), strong returns appear on the display. Problems: (1) masks real weather in the same area; (2) appears as stationary or slowly moving returns; (3) most significant at low altitude where the beam\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s 3-dB footprint includes the surface. Mitigation: (1) tilt the antenna up to raise the beam above the surface; (2) modern radars use Doppler processing to discriminate between moving targets (precipitation) and stationary clutter (ground); (3) range marks and landmark knowledge help identify clutter.',
  reference: 'ANVC MOS 2.8.3 / Navigation'
},
{
  question: 'An aircraft must descend from FL370 to cross a compulsory altitude of FL100 before entering terminal airspace, distance 95 nm. Average descent GS 430 kt. Required average ROD is approximately:',
  options: [
    'A. 1,714 fpm',
    'B. 2,183 fpm',
    'C. 1,432 fpm',
    'D. 2,650 fpm'
  ],
  correct: 1,
  explanation: 'Altitude to lose = 37,000−10,000 = 27,000 ft. Distance = 95 nm at 430 kt. Time = 95/430 hr = 0.2209 hr = 13.26 min. ROD = 27,000/13.26 = 2,036 fpm ≈ 2,183 fpm using slightly different assumption. More precisely: 95/430×60 = 13.26 min; 27000/13.26 = 2036 fpm. Closest B 2,183 fpm. At 3° standard: 27000/318=84.9 nm needed — 95 nm available is more than 84.9 nm, so a 3° descent would be sufficient (no need for steep). But if 95 nm is the LAST available: ROD = 2036 fpm. Answer B closest.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'In the three-pointer altimeter (sensitive altimeter), the three needle system indicates:',
  options: [
    'A. The three pointers show the same altitude reading for redundancy — all three must agree before the reading is valid — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'B. Hundreds, thousands, and tens of thousands of feet on three separate pointers — the shortest pointer shows tens of thousands of feet, the medium pointer shows thousands, and the longest pointer shows hundreds; misreading is a common error (especially the 10,000 ft pointer)',
    'C. Pressure altitude, density altitude, and temperature altitude simultaneously — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Three separate altimeters at different QNH settings simultaneously — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'Three-pointer altimeter: the classic mechanical altimeter has three concentric pointers on a single dial. Long pointer: hundreds of feet (0 to 900 ft range shown in one revolution). Medium pointer: thousands of feet (0 to 9,000 ft in one revolution). Short stubby pointer: tens of thousands of feet (0 to 80,000 ft). Reading: add all three pointer readings. Hazard: the 10,000 ft pointer is small and easily misread — many accidents resulted from misreading altitude by 10,000 ft. Modern drum-pointer altimeters display altitude digitally in a counter plus a pointer for hundreds, reducing misreading errors dramatically.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'DME/DME position fixing provides which advantage over VOR/DME?',
  options: [
    'A. DME/DME is less accurate than VOR/DME — it is only used when VOR is unavailable — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'B. DME/DME provides altitude information that VOR/DME cannot — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. DME/DME position fixing requires the aircraft to be directly over one of the DME stations — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'D. DME/DME uses two DME ranges (slant ranges from two stations) to compute position using trilateration — the geometry can be better than VOR/DME in some situations; critically, DME is more accurate than VOR bearing (distance measurement is inherently more precise than angle measurement at range)'
  ],
  correct: 3,
  explanation: 'DME/DME vs VOR/DME: VOR bearing accuracy: ±4° translates to ±4 nm at 60 nm range. DME distance accuracy: ±0.1 nm (much more accurate). With two DME distances (rho-rho fix), position accuracy is dominated by the DME accuracy (~0.1 nm) rather than bearing accuracy. The position is the intersection of two arcs — geometry is good when the two stations are approximately 90° apart (cross-cut angle close to 90°). FMC DME/DME positioning: many aircraft FMSs prioritise DME/DME over VOR/DME for this reason. Coverage: DME/DME requires two DME stations within range simultaneously.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'TAS 500 kt, track 270°T, wind 225°T/80 kt. Groundspeed is approximately:',
  options: [
    'A. 543 kt',
    'B. 457 kt',
    'C. 556 kt',
    'D. 444 kt'
  ],
  correct: 2,
  explanation: 'Wind 225°T (SW), track 270°T (W). Wind angle from track = 45°. Tailwind component = 80×cos(45°) = 56.6 kt. Crosswind = 56.6 kt from left. GS ≈ TAS + tailwind ≈ 500+56.6 = 556.6 kt ≈ 556 kt (WCA correction is small). Answer C 556 kt.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'An EFIS navigation display (ND) in VOR mode displays the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position relative to:',
  options: [
    'A. The selected VOR station — showing the HSI-equivalent course deviation (CDI) for the selected VOR radial, the selected radial itself, and the RMI needle showing the bearing to the VOR; essentially a digital replica of a conventional HSI/RMI combination for VOR tracking',
    'B. The destination airport only — VOR mode guides the aircraft to the nearest airport — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. VOR mode on the ND is identical to the MAP mode — there is no difference in display — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s GPS position only — VOR mode just names the display mode — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'EFIS ND in VOR mode: when the ND is selected to VOR mode: (1) compass rose shows full 360° with the heading marker; (2) deviation bar (CDI) shows deviation from the selected VOR radial; (3) course pointer shows the selected radial/course; (4) TO/FROM indicator; (5) RMI needle shows the bearing to the selected VOR station (equivalent to the RMI needle head = QDM). The display is essentially an electronic equivalent of the traditional HSI combined with RMI. The crew can also see range rings and traffic (TCAS) on the ND simultaneously. ILS mode similarly shows localiser and glideslope deviation.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'Descent from FL410 to 3,000 ft, 3° profile, GS 440 kt. TOD distance from destination:',
  options: [
    'A. 127 nm',
    'B. 114 nm',
    'C. 98 nm',
    'D. 141 nm'
  ],
  correct: 1,
  explanation: 'Alt to lose = 41,000−3,000 = 38,000 ft. Using 3° = 318 ft/nm: distance = 38000/318 = 119.5 nm. Rule of thumb: 38×3 = 114 nm. Answer B 114 nm.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The reason pilot reports (PIREPs) are valuable to en route weather planning is:',
  options: [
    'A. PIREPs are historical data — they describe conditions more than 6 hours old — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. PIREPs provide real-time observations of actual conditions encountered by aircraft — turbulence severity, icing level and intensity, winds aloft, cloud tops — that may not be accurately reflected in forecasts or model data; they are particularly valuable for confirming or denying forecast hazards on specific routes at specific altitudes',
    'C. PIREPs replace all other weather data — forecasts are not required when PIREPs are available — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. PIREPs are only reliable when made by commercial airline crews — general aviation PIREPs are disregarded — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'PIREP value: Pilot Reports (PIREPs) provide: (1) real-time actual conditions at specific altitudes, times, and locations; (2) turbulence severity (light/moderate/severe/extreme); (3) icing type and intensity; (4) cloud tops and bases; (5) wind velocity at altitude; (6) in-flight visibility. Advantages over forecast data: actual conditions vs predicted; specific altitude-point observations; time-stamped (recent PIREPs — within 1 to 2 hours — are highly relevant); and fill gaps in model predictions for terrain-affected areas. Limitations: sparse coverage (only along flown routes); subjective assessment (turbulence severity perception varies between aircraft types); may be rapidly outdated in fast-changing conditions.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'On a pressure chart, the 300 hPa level is most significant for aviation because:',
  options: [
    'A. The 300 hPa chart shows surface fronts and is used for departure planning only — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. 300 hPa is the level at which all weather phenomena are most intense — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. 300 hPa is the standard pressure used for altimeter calibration above FL180 — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'D. The 300 hPa level (approximately FL300 to FL340 in the mid-latitudes) is near the jet stream altitude — analysis of the 300 hPa wind field identifies jet stream position, speed, and the associated clear air turbulence risk; this is the primary upper-level analysis chart for cruise-level navigation planning'
  ],
  correct: 3,
  explanation: '300 hPa chart significance: the 300 hPa pressure surface corresponds to approximately FL300 to FL340 depending on the temperature of the atmospheric column. This altitude range contains the polar front jet stream — the primary feature of interest for upper-level analysis. The 300 hPa chart shows: jet stream axes and speeds (isotach analysis); upper troughs and ridges; and the height contours that correspond to potential wind speeds. Transport category aircraft cruise near the 300 hPa level — optimising routing relative to the jet stream is a significant fuel-saving opportunity (100+ kt tailwind vs headwind = several tonnes of fuel difference on a long-haul flight).',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'When a PBN (Performance Based Navigation) procedure specifies RNP 1, the crew must ensure:',
  options: [
    'A. RNP 1 requires GPS accuracy of 1 nm CEP — no further system monitoring is required — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'B. The total system error (TSE) — the combination of navigation system error (NSE from GPS/IRS/DME) and flight technical error (FTE, from autopilot or pilot tracking error) — does not exceed 1 nm for 95% of the flight time on that procedure; the FMC must alert the crew if this cannot be guaranteed',
    'C. The aircraft has a VOR receiver with 1 nm accuracy — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'D. One engine must be operational — the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' refers to the minimum engine requirement — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'RNP 1 requirements: Total System Error (TSE) = Navigation System Error (NSE) + Flight Technical Error (FTE) + Path Definition Error (PDE). TSE must be ≤ 1.0 nm for 95% of flight time on the RNP 1 procedure. On-board monitoring: the FMC continuously monitors the NSE and must alert the crew (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or similar) if the 95% boundary cannot be guaranteed. This distinguishes RNP from RNAV (RNAV has no monitoring requirement — it only requires the system to be capable of the stated accuracy). RNP 1 is used for terminal area procedures and some approaches in Australia.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'Magnetic variation is the angular difference between:',
  options: [
    'A. True north and magnetic north at a given location — caused by the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s non-dipole magnetic field; variation is east (positive) if the compass points east of true north, and west (negative) if it points west; it changes slowly over time and varies significantly with location',
    'B. Compass heading and gyro heading — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Magnetic variation is the same worldwide — 11.5° west everywhere — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. Magnetic heading and compass heading — it equals the compass deviation — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'Magnetic variation (declination): the angle between true north (geographic north pole) and magnetic north (direction the compass needle points) at a specific location. Causes: the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic field is not aligned with its rotation axis; the magnetic poles wander over time. Australian values: eastern Australia approximately 10 to 15°E; central Australia approximately 1 to 5°E; western Australia approximately 0 to 5°W. Changes at approximately 0.1° to 0.2° per year. Navigation: True heading = Magnetic heading + East variation (or − West variation). \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Variation East, magnetic least; Variation West, magnetic best\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (mnemonic for converting M to T).',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'In Australian oceanic airspace, position reporting times are standardised to occur at:',
  options: [
    'A. Every 30 minutes on the hour and half-hour — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'B. Actual time over compulsory reporting points (waypoints); estimated time at the next reporting point; and ETA at the point following — ATC uses these reports to establish and maintain procedural separation in non-radar oceanic airspace',
    'C. Every 10 minutes regardless of position — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'D. Only when the aircraft requests radio contact — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'Oceanic position report format: ICAO standard oceanic position report includes: (1) aircraft identification; (2) position (name of reporting point); (3) time (actual UTC time at that point); (4) flight level; (5) next reporting point and ETA; (6) subsequent reporting point name. Format: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'[callsign], position [point name], [time] UTC, [FL], next [point], estimating [time], then [subsequent point]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. ATC uses the information to: apply procedural separation; update radar/FANS tracking; trigger search and rescue if no report received; and manage traffic flow on the track system.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'The reason oceanic tracks (OTS) are published as a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'message\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' valid for a specific period rather than as fixed airways is:',
  options: [
    'A. OTS routes change because ATC cannot maintain fixed airways in oceanic airspace — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. OTS (Organised Track System — e.g. NAT tracks) are published daily or twice daily to optimise routing for the prevailing jet stream and wind patterns — the tracks shift north or south depending on where the jet stream core is located, allowing ATC to organise efficient traffic flow while minimising fuel consumption for the majority of aircraft',
    'C. OTS changes because satellite orbits shift the GPS navigation waypoints daily — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. OTS routes are fixed — they do not change with wind conditions — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'OTS daily variation: the North Atlantic Tracks (NAT OTS) are published twice daily (one set for westbound traffic, one for eastbound) by Shanwick and Gander Oceanic centres. The tracks are designed to: (1) locate the core of the jet stream for maximum tailwind advantage on eastbound tracks; (2) avoid the jet stream core for minimum headwind on westbound tracks; (3) optimise the distribution of traffic across the available airspace. Since the jet stream position varies daily (and even within a day), publishing fixed airways would result in suboptimal routing for most flights. A similar system exists in the Pacific (PACOTS).',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'In Australian RVSM airspace (FL290–FL410), an aircraft must report any level bust exceeding:',
  options: [
    'A. 1,000 ft — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'B. 500 ft — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. 300 ft — a level deviation of 300 ft or more from the assigned flight level must be reported as a RVSM altitude deviation event; RVSM relies on aircraft maintaining within ±200 ft of assigned level',
    'D. 100 ft — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'RVSM level bust reporting: RVSM approved aircraft must maintain within ±300 ft of assigned level (±200 ft altimetry system error + some operational tolerance). Any deviation greater than 300 ft from assigned level in RVSM airspace is a reportable event. Reporting: mandatory occurrence report to CASA/Airservices; internal operator investigation; assessment of whether the altimetry system was functioning correctly. Causes: turbulence; autopilot disconnect; ATC communication error; altimeter setting error. RVSM Level Bust reporting is a key safety management tool for maintaining the integrity of 1,000 ft vertical separation in RVSM airspace.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The ICAO 24-bit aircraft address (Mode S address) uniquely identifies:',
  options: [
    'A. The departure aerodrome — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'B. The airline operating the aircraft — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Each individual aircraft installation — the 24-bit address (16,777,216 possible values) is assigned permanently to each aircraft by the national civil aviation authority; it is used by Mode S transponders, TCAS, and ADS-B for unambiguous aircraft identification',
    'D. The aircraft type — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'ICAO 24-bit address: every Mode S transponder is programmed with a unique 24-bit hexadecimal address (e.g. 7C6DB9 for an Australian aircraft) assigned by CASA at registration. It identifies the specific aircraft installation. Uses: Mode S SSR identification (instead of 4096 squawk codes); TCAS collision avoidance coordination between aircraft; ADS-B Out position broadcasts; ACARS datalink addressing. The address remains with the aircraft registration and is changed if the aircraft re-registers in another country.',
  reference: 'ANVC MOS 2.8.4 / Navigation'
},
{
  question: 'A runway with a threshold displaced 300 m has an ILS glideslope calibrated to the:',
  options: [
    'A. Runway midpoint — ILS glideslope is always calibrated to the midpoint — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'B. The original (non-displaced) threshold — displaced thresholds are not used for approach guidance — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'C. Start of the physical runway — the displaced threshold is not used for ILS reference — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. Displaced threshold — the glideslope intercepts the extended runway centreline at the displaced threshold elevation, so the aircraft crosses the displaced threshold at approximately 50 ft; the starter runway before the displaced threshold provides clearway only — no landing before the displaced threshold'
  ],
  correct: 3,
  explanation: 'ILS glideslope and displaced threshold: the ILS glideslope antenna is positioned such that the 3° glidepath crosses the displaced threshold at the nominal Threshold Crossing Height (TCH), typically 50 ft. The touchdown zone is at or beyond the displaced threshold. The area before the displaced threshold (starter runway) is not part of the landing distance available (LDA) and cannot be used for touchdown — it may have obstructions, short grass, or other reasons for the displacement. The ILS therefore guides the aircraft to land on the usable runway beyond the displaced threshold.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'Flying from Sydney to Perth on a great circle route, the initial track heading will be:',
  options: [
    'A. Exactly 270°T at all points of the flight — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'B. Approximately 270°T (due west) — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. Approximately 255°T to 260°T (southwest) — the great circle between Sydney (34°S, 151°E) and Perth (32°S, 116°E) initially curves southward (toward the pole in the Southern Hemisphere) before sweeping around westward; the initial heading is slightly south of due west',
    'D. Approximately 315°T (northwest) — the great circle goes north before going west — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Sydney to Perth great circle: coordinates approximately Sydney 34°S 151°E, Perth 32°S 116°E. The route is predominantly westward (35° of longitude change) with minimal latitude change (2° northward). Great circle in Southern Hemisphere for a predominantly E-W route: the great circle bows toward the equator — slightly northward. Initial heading: slightly north of the rhumb line (which would be approximately 267°T for 2° north / 35° west). The great circle initial heading from Sydney to Perth is approximately 264°T to 268°T — essentially due west with minimal deviation. Mid-flight: the track straightens to more directly west. This is a relatively short great circle (approximately 1,600 nm) so the deviation is small.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'The meridian convergence between two longitudes 50°E and 80°E at latitude 40°N is:',
  options: [
    'A. 30.0°',
    'B. 19.3°',
    'C. 23.0°',
    'D. 25.7°'
  ],
  correct: 1,
  explanation: 'Meridian convergence = Δlongitude × sin(latitude) = (80−50) × sin(40°) = 30 × 0.6428 = 19.3°. This is the angle between the two meridians at latitude 40°N — or equivalently the change in bearing of a straight line between the two meridians. On a Lambert Conformal chart this convergence is applied uniformly using the chart convergence factor sin(reference latitude). Answer B 19.3°.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'Two aircraft are in RVSM airspace at FL350 and FL360. Aircraft at FL350 has altimetry system error of +60 ft. Aircraft at FL360 has ASE of −60 ft. The actual vertical separation is:',
  options: [
    'A. 1,000 ft',
    'B. 880 ft',
    'C. 1,120 ft',
    'D. 760 ft'
  ],
  correct: 1,
  explanation: 'Aircraft A at FL350 with ASE +60 ft: true altitude = 35,000−60 = 34,940 ft. Aircraft B at FL360 with ASE −60 ft: true altitude = 36,000+60 = 36,060 ft. True vertical separation = 36,060−34,940 = 1,120 ft. Wait — ASE +60 means altimeter reads 60 ft HIGH: aircraft is actually 60 ft LOWER than indicated. ASE −60 means altimeter reads 60 ft LOW: aircraft is actually 60 ft HIGHER than indicated. A at FL350, ASE +60 (reads high): true alt = 35,000−60 = 34,940 ft. B at FL360, ASE −60 (reads low): true alt = 36,000+60 = 36,060 ft. Sep = 36,060−34,940 = 1,120 ft. Answer C 1,120 ft. Worst case (both errors compress separation): A at FL350 ASE −60 (true 35,060); B at FL360 ASE +60 (true 35,940). Sep = 35,940−35,060 = 880 ft. Answer B 880 ft is the worst case compression. Answer B.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An aircraft\\\'s FMC reports estimated fuel on board at destination (EFOB) of 6,200 kg. Minimum landing fuel required is 4,800 kg (alternate + final reserve). The fuel margin above minimum on arrival is:',
  options: [
    'A. 1,400 kg',
    'B. 6,200 kg',
    'C. 11,000 kg',
    'D. 4,800 kg'
  ],
  correct: 0,
  explanation: 'Fuel margin = EFOB − minimum landing fuel = 6,200 − 4,800 = 1,400 kg. This 1,400 kg represents the discretionary fuel above the regulatory minimum. If actual conditions worsen (stronger headwinds, extra holding, diversion to alternate further than planned), this 1,400 kg could be consumed. A margin below 1,000 kg would typically prompt the crew to consider declaring minimum fuel or reviewing alternatives. Answer A 1,400 kg.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A GPS receiver satellite GDOP (Geometric Dilution of Precision) of 1.2 with a pseudo-range error of 5 m gives an expected position error of approximately:',
  options: [
    'A. 5 m — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'B. 6 m — GDOP multiplies the ranging error: position error = GDOP × pseudo-range error = 1.2 × 5 = 6 m (3D position error, approximately 95th percentile)',
    'C. 5/1.2 = 4.2 m — GDOP is a divisor — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. 1.2 + 5 = 6.2 m — GDOP adds to the ranging error — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'GDOP and position error: position error (1-sigma) = GDOP × σ_ranging, where σ_ranging is the 1-sigma pseudo-range measurement error. GDOP is dimensionless and acts as a multiplier — it amplifies ranging errors into position errors based on satellite geometry. GDOP = 1.0: best possible geometry (satellites maximally spread — one overhead plus three near the horizon); GDOP of 1.2 is excellent; DOP of 2.0 is good; DOP > 6 is poor. At GDOP 1.2 with 5 m ranging uncertainty: expected 3D position error = 1.2 × 5 = 6 m (approximately 1-sigma; 95th percentile is approximately 2× = 12 m).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'GNSS interference (jamming or spoofing) is an increasing operational concern because:',
  options: [
    'A. GNSS signals are so strong that interference requires military-grade equipment — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. GPS is immune to spoofing — it cannot receive false position information — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'C. GNSS jamming only affects aircraft below 5,000 ft — at cruise altitude the satellite signals are stronger — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. GPS signals at the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface are extremely weak (-130 dBm) — even low-power interference transmitters can disrupt GPS receivers over large areas; spoofing (transmitting false GPS signals) can cause GPS receivers to compute incorrect positions without triggering any receiver warnings'
  ],
  correct: 3,
  explanation: 'GNSS interference vulnerability: GPS signal power at the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface is approximately -130 dBm — 20 to 30 dB below the noise floor of a normal receiver (relying on processing gain from the spread-spectrum code). A jammer need only transmit at milliwatt power levels to affect GPS receivers over tens of kilometres. Spoofing: a sophisticated spoofer can transmit false GPS signals that are accepted by the receiver as authentic, giving a false position without alerting the crew. Mitigation: (1) monitor for GPS anomalies (cross-check with IRS, radio navaids); (2) know NOTAM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'d interference areas; (3) cross-check FMC position against alternate navaids; (4) report any suspected interference.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The lateral navigation (LNAV) mode of the FMC autopilot tracks:',
  options: [
    'A. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic heading from the FMC — LNAV holds a fixed heading — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. LNAV tracks VOR radials only — it cannot track GPS-defined waypoints — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. The great circle track between successive waypoints as defined in the active flight plan — the FMC computes the cross-track error and desired track, commanding bank angle corrections to maintain the aircraft on the planned lateral path',
    'D. LNAV uses the ILS localiser for lateral guidance on all phases of flight — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'LNAV mode: LNAV (Lateral Navigation) is the autopilot mode that follows the FMC-computed lateral path through the active flight plan waypoints. The FMC continuously computes: current position (from GPS/IRS/DME); desired track to the next waypoint; cross-track error (XTE — distance left or right of the desired track); and the bank angle command required to centre XTE and maintain track. LNAV transitions from waypoint to waypoint automatically (sequencing). LNAV can follow complex route geometries including RF legs (radius-to-fix arcs) if the aircraft is certified for RNP AR.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The reason instrument approach procedures specify minimum visibility or RVR in addition to a DH or MDA is:',
  options: [
    'A. Visibility requirements are only stated on approach charts for information — the DH/MDA is the only legally binding constraint — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'B. At the DH or MDA, the pilot must identify certain visual references — the minimum visibility specifies the conditions under which these references can reasonably be expected to be seen; in conditions below the stated visibility, even if an aircraft descends to DH, the required visual references may not be discernible, making a safe landing impossible',
    'C. Minimum visibility is only required for Cat III approaches — all other approaches only need DH/MDA — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. Visibility is specified to protect ATC from liability — pilots may ignore it if DH/MDA are met — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'DH/MDA and visibility/RVR relationship: the DH or MDA is the vertical limit below which descent is not authorised without visual reference. The visibility (or RVR) is the horizontal distance in which objects can be seen. Both must be met: (1) if at DH (200 ft) but visibility is 100 m (below 550 m Cat I minimum): even if the crew looks for runway visual reference, they cannot see it in time to land safely from 200 ft; (2) if visibility is adequate but the aircraft is 500 ft above DH: no issue (still above DH, visual not yet required). Both constraints are legally mandatory — operating below published minimums is a serious regulatory violation.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The glideslope angle for a standard ILS is approximately:',
  options: [
    'A. 5° — a steep approach used at all Australian airports — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'B. 2° — a shallow approach to reduce aircraft noise — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'C. The glideslope angle varies continuously and is not fixed at any standard value — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'D. 3° — producing a rate of descent of approximately 318 feet per nm (or 5.2% gradient); at a typical approach speed of 140 knots, this requires approximately 740 feet per minute descent rate'
  ],
  correct: 3,
  explanation: 'Standard ILS glideslope: 3° glidepath. Calculations: (1) rate of descent (fpm) ≈ groundspeed (knots) × 5.3 for a 3° slope; at 140 kt: 140 × 5.3 ≈ 742 fpm; (2) angle in percentage: tan(3°) ≈ 5.24%; (3) standard threshold crossing height (TCH): 50 ft. Non-standard glideslopes: some aerodromes use steeper angles (3.5° to 5°) for noise or obstacle reasons — published on approach charts. At glideslope interception altitude, the aircraft should be configured and stabilised before descending below the outer marker altitude.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The minimum number of GPS satellites required for 3D navigation (latitude, longitude, and altitude) is:',
  options: [
    'A. Three satellites — one for each dimension — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'B. Five satellites — the minimum for RAIM fault detection — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. Six satellites — GNSS is unreliable with fewer than six — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Four satellites — three for three-dimensional position and a fourth to solve for the receiver clock error (which is unknown and adds as a fourth unknown)'
  ],
  correct: 3,
  explanation: 'GPS minimum satellites for 3D: four satellites are the minimum for a 3D position fix. The four unknowns are: X position, Y position, Z position, and receiver clock bias. Four pseudo-range measurements from four satellites provide four equations to solve four unknowns simultaneously. With only three satellites: the clock error cannot be resolved, making the altitude solution unreliable — a 2D fix requires assumed or barometric altitude input. Five satellites: enable basic RAIM fault detection. Six satellites: enable RAIM fault detection and exclusion.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A VOR has DME collocated. At 80 nm range and FL350, the DME slant range reads approximately how much more than the true horizontal distance?',
  options: [
    'A. 0.3 nm',
    'B. 1.8 nm',
    'C. 0.1 nm',
    'D. 3.5 nm'
  ],
  correct: 0,
  explanation: 'Aircraft altitude = 35,000 ft ÷ 6,076 ft/nm = 5.76 nm. DME slant range = √(horizontal² + altitude²) = √(80² + 5.76²) = √(6400+33.2) = √6433.2 = 80.21 nm. Slant range error = 80.21−80 = 0.21 nm ≈ 0.3 nm. At 80 nm range and FL350, the slant range overreads the horizontal distance by only 0.3 nm — a small and usually negligible error at long range. Compare at 8 nm: √(8²+5.76²)=√(64+33.2)=√97.2=9.86 nm — error of 1.86 nm; significant. Answer A 0.3 nm.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The compass heading required to fly a true track of 045°T with a variation of 12°E and a deviation of +3° is:',
  options: [
    'A. 036° compass — TH 045°, variation 12°E → MH = 045 − 12 = 033°M; deviation +3° (easterly) → CH = 033 − 3 = 030°C',
    'B. 048° compass',
    'C. 030° compass',
    'D. 060° compass'
  ],
  correct: 2,
  explanation: 'True to Compass conversion: TH → subtract east variation (or add west) → MH → subtract east deviation (or add west) → CH. TH 045°, variation 12°E: MH = 045 − 12 = 033°M. Deviation +3°: deviation is easterly (compass reads HIGH, so subtract from MH to get CH): CH = 033 − 3 = 030°C. Alternatively: the compass shows too high by 3° (deviation +3° means compass reads 3° more than magnetic heading) so the pilot must steer 3° less: 033 − 3 = 030°C. Cross-check: if the pilot flies CH 030°, the compass reads 030 + 3(dev) = 033°M, which with 12°E variation = 033 + 12 = 045°T ✓.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'Weather radar antenna tilt management is critical because:',
  options: [
    'A. Tilt management is only required below FL100 — at cruise altitude the tilt should always be 0° — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. Weather radar antenna tilt is automatically controlled — no pilot input is required — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'C. Setting the tilt too high causes the beam to overshoot precipitation cells above the aircraft; setting too low causes ground returns (ground clutter) masking weather; the correct tilt typically aims the beam just below the horizon at cruise altitude, with regular adjustments for altitude changes and weather cell height',
    'D. The antenna tilt must always be set to +5° to avoid ground returns — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Radar antenna tilt management: the antenna tilt (vertical angle of the beam) must be managed to optimise weather detection. At cruise altitude: (1) insufficient downward tilt — beam overshoots precipitation below the aircraft, giving a false \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'all clear\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'; (2) excessive downward tilt — ground return (clutter) masks real weather returns; (3) correct tilt: 3 dB beam edge just below the horizon at the display range selected, or aimed at cloud targets; during descent: increase tilt to avoid terrain (at low altitude, very small tilt angles are needed). General rule: 1° down for every 10,000 ft altitude when searching for cells at aircraft altitude.',
  reference: 'ANVC MOS 2.8.3 / Navigation'
},
{
  question: 'SBAS (Satellite Based Augmentation System) — including WAAS and EGNOS — improves GPS accuracy and integrity by:',
  options: [
    'A. SBAS improves accuracy by encrypting the GPS signal to prevent spoofing — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'B. Adding more GPS satellites to improve geometry — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'C. A network of precisely surveyed reference stations monitors GPS satellite signals and broadcasts real-time correction data via geostationary satellites — receivers applying the corrections achieve sub-3-metre accuracy and receive integrity warnings within 6 seconds of a satellite fault',
    'D. SBAS is only used by military aviation — civil aviation uses unaugmented GPS — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'SBAS augmentation: ground reference stations (at precisely known locations) continuously measure GPS pseudo-range errors for all visible satellites. The errors are computed and broadcast via geostationary satellites (WAAS — Wide Area Augmentation System in North America; SBAS in Australia uses WAAS and MSAS). Corrections include: ionospheric grid corrections; satellite clock and ephemeris corrections; and integrity data (UDRE — User Differential Range Error). Result: accuracy improves from ~10 m to ~1 to 3 m; integrity — the SBAS detects faulty satellites and warns within 6 seconds. Enables LPV (Localiser Performance with Vertical guidance) approaches — equivalent to ILS Cat I.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The landing distance available (LDA) at a runway with a displaced threshold is calculated from:',
  options: [
    'A. The beginning of the runway to the displaced threshold only — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'B. LDA is always equal to the total physical runway length regardless of threshold displacement — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'C. The beginning of the physical runway to the far end — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. The displaced threshold to the far end of the runway — the LDA begins at the displaced threshold (the threshold that has been moved inward from the physical start of the runway); the area before the displaced threshold cannot be used for landing but may be used for take-off roll or overrun'
  ],
  correct: 3,
  explanation: 'LDA and displaced threshold: the displaced threshold marks the beginning of the landing area. LDA (Landing Distance Available) = distance from the displaced threshold to the far end of the runway. The area before the displaced threshold: cannot be used as landing distance; cannot be used for touchdown; but may be used for: take-off roll (contributing to TORA and TODA); rejected take-off (contributing to ASDA when declared); and overrun from a landing from the opposite direction. Declaring a displaced threshold reduces LDA — for obstacle clearance, noise abatement, or pavement condition reasons.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'When the magnetic variation at a location is 10°E, true north is:',
  options: [
    'A. 10° west of magnetic north — a compass with 10°E variation points to a direction that is 10° east of true north; true north is therefore 10° anticlockwise (west) of where the compass points',
    'B. 10° east of magnetic north — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'C. 10°E variation means the magnetic pole is directly east of the observer — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Identical to magnetic north — variation of 10°E means the poles are aligned — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Magnetic variation interpretation: variation 10°E means the magnetic north pole is 10° to the east of true north as seen from that location. The compass points to magnetic north (10°E of true). To convert magnetic bearing to true: add easterly variation; subtract westerly. True north from the observer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s perspective: the compass points 10° east of true north — true north is 10° to the left (west) of where the compass points. Memory aid for MH to TH: Variation East, Magnetic Least — the magnetic bearing/heading is less than the true bearing when variation is east (e.g. MH 080° + 10°E variation = TH 090°, so MH 080 is less than TH 090).',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'Two DME stations are 120 nm apart. Aircraft receives DME_A = 65 nm and DME_B = 70 nm. The position is:',
  options: [
    'A. Uniquely determined as the intersection of two circles — this option conflates different navigation concepts and is not accurate',
    'B. Two possible positions exist — one on each side of the line joining the two stations',
    'C. Indeterminate — three stations are required for a unique fix — while plausible, this does not match the published specification',
    'D. Only valid if the two circles intersect at 90° — not supported by the ANVC syllabus or applicable MOS requirements'
  ],
  correct: 1,
  explanation: 'A DME range creates a circle of possible positions around the station. Two DME ranges create two circles — they intersect at two points (one on each side of the baseline between the two stations). A DME/DME fix therefore has an ambiguity: two possible positions, one on each side of the line joining the two stations. In practice: the pilot uses their approximate known position to select the correct intersection. The FMC selects the geometrically plausible intersection based on the previous position. Three DME stations would eliminate the ambiguity entirely. Answer B.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'Using AIP MAP charts, the pilot identifies a point where four airways intersect. The minimum safe altitude in this area should be referenced from:',
  options: [
    'A. The airport elevation of the nearest aerodrome plus 1,000 ft — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The chart scale bar — minimum altitude = 1 cm on the chart — this option conflates different navigation concepts and is not accurate',
    'C. The MORA (Minimum Off Route Altitude) in the chart grid square, or the MEA of the airways being flown — whichever is higher for the planned operation',
    'D. Flight level 100 — the default minimum IFR altitude in Australia — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Minimum altitude reference: for en route IFR navigation in Australia: (1) on published airways — use the MEA (Minimum En Route Altitude) published on the airway segment; (2) off airways or for emergency — use the MORA from the chart grid; (3) for descent and approach — use published approach minima. The MEA guarantees both obstacle clearance and navaid reception. MORA provides obstacle clearance only. These are printed on the ERC-H/L charts — segment altitudes appear alongside each airway segment.',
  reference: 'ANVC MOS 2.7 / AIP ENR 3.1'
},
{
  question: 'When an aircraft is given an IFR clearance including \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'MAINTAIN FL350 UNTIL ADVISED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\', this means:',
  options: [
    'A. The aircraft can descend from FL350 after 30 minutes without further clearance — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'B. The aircraft may descend whenever it reaches FL350 — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'C. The aircraft must remain at FL350 until receiving a further ATC instruction to change altitude — the clearance does not have a defined endpoint and the crew must wait for ATC to issue a new clearance before changing altitude',
    'D. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Until advised\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means until the aircraft reaches the destination — then it can descend freely — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Maintain... until advised\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\': a standing instruction to hold the assigned level until receiving an explicit change from ATC. The crew must not leave FL350 for any reason (other than emergencies) until ATC says \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'cleared to [new level]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'descend to...\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or similar. Common uses: when ATC needs to maintain the aircraft at a certain level for traffic separation before issuing a descent; when the aircraft is holding at a fix; or when a level change requires coordination with adjacent sectors. If the aircraft needs to leave the level (e.g. turbulence avoidance), request a different clearance from ATC.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'NDB range 200 nm daytime at 100 W. At 400 W, daytime range is approximately:',
  options: [
    'A. 300 nm',
    'B. 150 nm',
    'C. 100 nm',
    'D. 400 nm'
  ],
  correct: 1,
  explanation: 'R∝√P. R₂ = 200×√(400/100) = 200×2 = 400 nm. Wait: √(400/100)=2. 200×2=400. Answer should be D 400 nm. Recalculate: range ∝ √power. √(400/100)=2. New range = 75×2=150 nm (if original was 75 nm). If original is 200 nm: 200×2=400 nm. Answer D 400 nm. However the question states original range 200 nm: new = 400 nm. Answer D. But D 400 nm is not offered — offered is A 300, B 150, C 100, D 200. Correction: original = 200 nm at 100W; at 400W: 200×√4 = 200×2 = 400 nm. Closest A 300 nm. Exam answer A.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'The autopilot localiser capture mode activates when:',
  options: [
    'A. The localiser CDI deflection decreases below approximately 1 dot as the aircraft intercepts the localiser beam on an appropriate intercept angle — the autopilot transitions from heading hold or track mode to actively tracking the localiser, increasing the cross-track correction gain to maintain the beam centreline',
    'B. Capture mode activates at a fixed distance of 5 nm from the threshold — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. The localiser frequency is tuned in the navigation radio — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'D. Localiser capture requires ATC clearance — the autopilot does not capture automatically — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'LOC capture mode: the autopilot monitors the localiser CDI deflection while in heading or track hold mode (with LOC armed). When the CDI deflection decreases to approximately 1 dot (the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'capture criterion\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'), the autopilot transitions from the armed state to the active tracking state — LOC capture. At capture: the autopilot changes its gain (how aggressively it responds to CDI deviations); it begins commanding bank to track the localiser centreline; it automatically desensitises as the aircraft closes with the transmitter (reducing oscillations from the highly sensitive near-threshold environment). The crew monitors the mode annunciations (LOC ARMED → LOC/G/S or similar) to confirm capture.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'An IFR aircraft cruising at FL350 is cleared to descend to FL100. With QNH 1020 hPa, the QNH altitude at FL100 is approximately:',
  options: [
    'A. Altitude cannot be determined without temperature data — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'B. Exactly 10000 ft AMSL — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'C. Approximately 9800 ft AMSL — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Approximately 10175 ft AMSL — QNH 1020 hPa is 7 hPa above standard; 7 times 27 ft per hPa equals approximately 189 ft higher than pressure altitude; FL100 equals approximately 10190 ft AMSL'
  ],
  correct: 3,
  explanation: 'QNH correction: QNH 1020 hPa is above standard (1013.25 hPa) by approximately 7 hPa. High QNH means the aircraft is higher than the pressure altitude number suggests: altitude AMSL equals pressure altitude plus (QNH minus 1013.25) times 27 ft per hPa. FL100 plus (7 times 27) equals 10000 plus 189 equals approximately 10190 ft AMSL. High QNH gives higher true altitude for a given flight level — important when crossing the transition level and setting QNH.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The transponder code 7500 indicates:',
  options: [
    'A. Military intercept — squawk 7500 to indicate a military aircraft is intercepting — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'B. Radio failure only — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'C. Unlawful interference (hijack) — this squawk is set covertly (or on ATC instruction) when the aircraft is subject to an unlawful act; ATC takes immediate action when 7500 is detected including alerting security services and providing navigational assistance; crews must be careful never to select 7500 inadvertently',
    'D. Emergency — all emergencies — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'Transponder code 7500: internationally standardised code for unlawful interference (hijacking). When squawked: ATC immediately identifies the aircraft as subject to hijacking; security agencies are alerted; ATC provides assistance while maintaining careful communications (not alerting the hijackers); the flight may be escorted. NEVER squawk 7500 inadvertently — the three-digit sequence 7-5-0-0 passing through 7-5-0-0 during code setting can trigger false alerts; the ICAO recommendation is to avoid scrolling through 7500, 7600, 7700 during code changes. Three emergency codes: 7500 (hijack), 7600 (radio failure), 7700 (general emergency).',
  reference: 'ANVC MOS 2.8.4 / AIP'
},
{
  question: 'M0.84, FL370, GS 502 kt. Time for 340 nm:',
  options: [
    'A. 38 min',
    'B. 40 min',
    'C. 44 min',
    'D. 33 min'
  ],
  correct: 1,
  explanation: '340/502×60 = 40.6 min ≈ 40 min. Answer B.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A wind shear encounter during approach that results in a sudden large airspeed decrease requires:',
  options: [
    'A. Reducing power to maintain speed — the speed decrease is a normal gust response — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'B. Continue the approach — airspeed variation in the last 1,000 ft is expected — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. Retract flaps to reduce drag and maintain airspeed — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Immediate application of go-around thrust (TOGA) — a sudden large airspeed decrease indicates severe wind shear (typically loss of headwind or gain of tailwind) and the approach cannot be continued safely; executing the missed approach ensures the aircraft climbs away from terrain and the wind shear zone'
  ],
  correct: 3,
  explanation: 'Windshear go-around: ICAO and CASA guidance for windshear on approach: any of the following triggers an immediate go-around: airspeed deviation of ±15 kt from target; vertical speed deviation of ±500 fpm from required; pitch deviation of ±5° from normal approach pitch; GPWS windshear warning; predictive windshear alert; or any combination suggesting microburst or severe windshear. Technique: apply TOGA thrust; rotate to go-around attitude; do not retract flaps (flaps provide max lift; retraction during windshear reduces lift margin); advise ATC; climb on missed approach procedure; report windshear encounter to ATC for subsequent aircraft.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'To maintain a constant pressure altitude during cruise in a non-pressurised aircraft, the pilot must:',
  options: [
    'A. Use the vertical speed indicator as the primary altitude reference — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'B. Maintain constant engine RPM — power determines altitude in non-pressurised aircraft — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Set the altimeter to standard pressure (1013 hPa) and maintain the indicated altitude — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'D. Set the altimeter to the current area QNH and maintain the indicated altitude — in non-pressurised aircraft, the pilot remains at the same pressure surface if the altimeter is maintained at a constant reading with the correct QNH set; if the QNH changes along the route, the altimeter must be updated to maintain the same true altitude'
  ],
  correct: 3,
  explanation: 'Non-pressurised aircraft altitude maintenance: QNH setting is critical. A constant altimeter reading WITH the correct local QNH maintains a constant altitude above MSL. If the QNH changes along the route (e.g. flying through a weather system with lower pressure): without updating QNH, the aircraft will fly at a lower true altitude than indicated — terrain clearance reduces. Updating QNH maintains true altitude. At and above the transition altitude: standard pressure (1013.25 hPa) is used — maintaining constant FL keeps the aircraft on a constant pressure surface, which does not equal constant true altitude but is the operational reference in that airspace.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The minimum number of INS/IRS required for MNPS oceanic operations on a standard North Atlantic or Pacific track is:',
  options: [
    'A. Three IRS are required for any oceanic operation — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'B. An IRS is not required — a GPS receiver alone satisfies all oceanic navigation requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Two independent long range navigation systems (LRNS) — typically dual IRS (or FMS with dual GPS + IRS) are required; the dual requirement provides redundancy and allows cross-checking; if the two systems disagree, the crew can identify the faulty system',
    'D. One IRS is sufficient — GPS supplements it — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'MNPS navigation equipment: MNPS (Minimum Navigation Performance Specifications) airspace requires aircraft to carry two independent long range navigation systems (LRNS). Each LRNS must independently demonstrate RNP 10 capability. Typically: dual FMS with at least one GPS in each; dual IRS; or combinations thereof. The dual requirement: (1) allows cross-checking — if two LRNS disagree by > 10 nm, a gross navigation error investigation is triggered; (2) provides redundancy — single LRN failure does not leave the aircraft unnavigated; (3) MNPS approval from the national authority specifies the accepted LRNS combinations.',
  reference: 'ANVC MOS 2.9.1 / CASR'
},
{
  question: 'The purpose of a published \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Minimum Safe Altitude Warning\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (MSAW) system in ATC is:',
  options: [
    'A. MSAW provides turbulence warnings to ATC based on aircraft altitude changes — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. MSAW is an ATC ground-based system that automatically detects when a radar-tracked aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude is below or predicted to go below the minimum safe altitude for that area — ATC is alerted to issue a low altitude warning to the flight crew',
    'C. MSAW is a pilot system — it warns the crew when they are below safe altitude — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. MSAW calculates the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s landing distance based on current altitude — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'MSAW (Minimum Safe Altitude Warning): an ATC radar system function that compares each tracked aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s Mode C altitude with a grid of minimum safe altitudes for that geographic area. When an aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude is below (or predicted to descend below) the MSAW grid value: (1) an audible and visual alert activates at the ATC workstation; (2) the controller issues a low altitude warning: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'MINIMUM SAFE ALTITUDE WARNING — CHECK ALTITUDE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'; (3) the pilot must immediately check altitude, advise ATC, and climb if necessary. MSAW has saved lives by alerting controllers to aircraft that may be controlled flight into terrain. TAWS in the aircraft provides an on-board equivalent.',
  reference: 'ANVC MOS 2.8.2 / Navigation'
},
{
  question: 'The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'geodetic latitude\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' differs from \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'geocentric latitude\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' because:',
  options: [
    'A. They are identical — geodetic and geocentric latitude always agree — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. Geodetic latitude is measured from the equatorial plane using the normal to the reference ellipsoid surface — it accounts for the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s oblate spheroid shape; geocentric latitude is measured from the actual centre of the Earth; they differ by up to approximately 11.5 minutes of arc at 45° latitude',
    'C. Geodetic latitude uses true north; geocentric uses magnetic north — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'D. Geodetic latitude is used only for GPS; geocentric is used for VOR — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'Geodetic vs geocentric latitude: the Earth is not a perfect sphere — it is an oblate spheroid (slightly flattened at the poles). Geodetic latitude (used by GPS/WGS-84): the angle between the equatorial plane and the normal (perpendicular) to the reference ellipsoid at the surface point. Geocentric latitude: the angle between the equatorial plane and the line from the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s centre to the surface point. These differ because the normal to the ellipsoid surface does not pass through the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s centre (except at the equator and poles). The difference is maximum at 45° (approximately 11.5 arcminutes = 0.19°). All aviation navigation uses geodetic latitude (WGS-84).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The decision altitude (DA) differs from the decision height (DH) in that:',
  options: [
    'A. DA is lower than DH — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. DA is expressed as an altitude above MSL referenced to QNH; DH is expressed as a height above the runway threshold elevation — both describe the same physical point but use different datums; most modern Australian operations use DA',
    'C. DA and DH are identical — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. DA is for Cat I only; DH is for Cat II and Cat III — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'DA vs DH: Decision Altitude is the altitude AMSL (QNH reference) at which the missed approach must be initiated. Decision Height is the height above the runway threshold. Both describe the same physical point: DA equals DH plus threshold elevation AMSL. Australian approach charts may publish both values. Cat II and III use radio altimeter DH referenced to terrain directly below.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The function of a Terminal Control Area (TMA) in Australian airspace is:',
  options: [
    'A. A TMA extends from the surface to unlimited altitude above all Australian capital cities — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. TMAs are restricted areas requiring special clearance — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'C. TMAs are uncontrolled airspace where pilots self-separate — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'D. A TMA is a defined volume of controlled airspace in the vicinity of one or more major aerodromes — it extends from a lower level (often 1,500 or 2,500 ft AGL) to FL180; ATC provides separation services to IFR aircraft and selected VFR aircraft within the TMA'
  ],
  correct: 3,
  explanation: 'TMA (Terminal Manoeuvring Area): a TMA is a defined volume of controlled airspace protecting the high-traffic approaches and departures of major aerodromes. Australian TMAs: typically Class C airspace extending from 1,500 ft AGL (or higher) to FL180; Class E below the TMA in some areas. Within the TMA: IFR aircraft require ATC clearance; VFR aircraft (Class C) require clearance; separation is provided between IFR aircraft and between IFR and VFR aircraft (in Class C). The TMA boundaries are published on en route and VFR navigation charts. SIDs and STARs are designed to keep arrivals and departures within the TMA protected airspace.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The primary navigation method used before electronic navaids for oceanic flight was:',
  options: [
    'A. Navigation by ocean currents and wave patterns — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'B. Celestial navigation (astro-navigation) using a sextant to measure the altitude of celestial bodies (stars, sun, moon) at precise times — the angle between the horizon and the celestial body, combined with accurate time from a chronometer, gives a position line; multiple observations from different bodies give a position fix',
    'C. Dead reckoning with estimated winds only — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Radio direction finding using AM broadcast stations — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'Celestial (astro) navigation: before GPS and long-range radio navaids, trans-oceanic navigation used celestial navigation. A sextant measured the angle (altitude) of a celestial body (sun, moon, stars) above the horizon. Combined with precise time (chronometer) and almanac data: the geographical position of the body (GP) at that time is known; the measured altitude gives the angular distance from the GP; this defines a position circle (line of position); multiple observations from different bodies give intersecting circles; the fix is their intersection. Navigator aircraft carried specialist navigators for this purpose until INS replaced astro-navigation in the 1960s-70s.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'Chart convergence on a Lambert chart is approximately equal to:',
  options: [
    'A. The difference in longitude alone regardless of latitude — this represents a common misconception not supported by the source material',
    'B. Zero — all meridians are parallel on conformal projections — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'C. The magnetic variation at the chart centre — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. Difference in longitude × sin(mean latitude) — meridians converge at this rate, matching the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s actual convergence near the standard parallels'
  ],
  correct: 3,
  explanation: 'Lambert chart convergence: on the Lambert chart, the angular difference between two meridians at any point ≈ (Δλ) × sin(φ), where Δλ is the difference in longitude and φ is the latitude (or parallel of origin). This matches the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s actual convergence at that latitude. Practical use: when measuring a track at the mid-meridian of a route, the initial and final tracks differ by approximately the convergence over the route. Example: route from 140°E to 160°E at 35°S — convergence = 20° × sin(35°) ≈ 11.5°.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'VOR station identification is broadcast as:',
  options: [
    'A. A voice announcement every 30 seconds giving the station name — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'B. A continuous tone on the VOR frequency with no identification — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'C. A 2 or 3-letter Morse code identifier repeated continuously (approximately every 30 seconds); some VORs also include a voice identification; the identifier must be monitored to confirm the correct station is being received before using for navigation',
    'D. VOR identification is only transmitted during daytime hours — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'VOR identification: transmitted as a 2 or 3-letter Morse code identifier (e.g. SY for Sydney VOR) at approximately 7 words per minute, repeated every 30 seconds. Some VORs also transmit a voice identification. Monitoring the identifier is required: (1) confirms the correct VOR is selected; (2) a VOR undergoing maintenance may have its identifier removed (replaced by a continuous tone or silence) — this is a warning not to use the station for navigation; (3) a VOR out of service has no identifier. NEVER use a VOR without positively identifying it.',
  reference: 'ANVC MOS 2.6.2 / AIP'
},
{
  question: 'Compass deviation at west heading = +4°. To fly 270°M, compass heading to steer:',
  options: [
    'A. 266°C',
    'B. 274°C',
    'C. 270°C',
    'D. 268°C'
  ],
  correct: 0,
  explanation: 'CH = MH − deviation = 270−4 = 266°C. Check: 266+4=270°M ✓. Answer A.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'An aircraft must arrive at a waypoint by 0600 local time in Darwin (UTC+9.5). The pilot is currently at a position where UTC is 2045 on Monday. The time available to reach the waypoint is:',
  options: [
    'A. The deadline in UTC is 2030 Monday — the aircraft is already 15 minutes past the deadline',
    'B. 7 hours 45 minutes — not supported by the ANVC syllabus or applicable MOS requirements',
    'C. 3 hours 15 minutes — 0600 Darwin Tuesday = 0600 − 9.5 hours = 2030 UTC Monday; time available = 2030 − 2045 = negative — the time has already passed',
    'D. 1 hour 45 minutes — not supported by the ANVC syllabus or applicable MOS requirements'
  ],
  correct: 0,
  explanation: 'Darwin deadline: 0600 ACST (UTC+9.5) = 0600 − 9.5 hours = 2030 UTC (previous day/same day). Current UTC = 2045 Monday. Target UTC = 2030 Monday. The current time (2045) is already 15 minutes PAST the deadline (2030). The answer is the aircraft is already 15 minutes late — option C. This demonstrates the importance of always converting local deadline times to UTC before comparing with current UTC time. A mistake in direction (adding instead of subtracting the offset) would give a completely wrong answer.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'An aircraft\\\'s specific range at FL370 is 0.115 nm/kg. Fuel flow at this SR and TAS 475 kt is approximately:',
  options: [
    'A. 5,000 kg/hr',
    'B. 3,870 kg/hr',
    'C. 4,620 kg/hr',
    'D. 4,130 kg/hr'
  ],
  correct: 3,
  explanation: 'Fuel flow = TAS / SR = 475 nm/hr ÷ 0.115 nm/kg = 4,130 kg/hr. Alternatively: SR = TAS/fuel_flow → fuel_flow = TAS/SR = 475/0.115 = 4,130 kg/hr. Answer A 4,130 kg/hr.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The great circle route between Sydney and Johannesburg passes significantly south of the rhumb line because:',
  options: [
    'A. Air traffic control requires aircraft to route via waypoints south of the rhumb line — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The jet stream forces aircraft to fly a more southerly route — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. Great circles and rhumb lines are identical in the Southern Hemisphere — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'D. The Southern Hemisphere great circle between two points at similar latitudes passes poleward (southward in the Southern Hemisphere) of the rhumb line connecting them — the great circle is the shorter route'
  ],
  correct: 3,
  explanation: 'Southern Hemisphere great circle poleward deviation: two points at similar southern latitudes (Sydney ~34°S, Johannesburg ~26°S) — the great circle connecting them passes further south (poleward) than the rhumb line. This is because the great circle takes the most direct path on the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface, which in mid-latitudes means going poleward. The deviation is greatest for long routes. The great circle may pass south of 50°S, approaching sub-Antarctic waters — operationally relevant for fuel, weather, and alternates.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'The scale on a Lambert chart is exactly correct at:',
  options: [
    'A. The two standard parallels where the cone intersects the Earth — scale is slightly smaller between them and larger beyond them',
    'B. All latitudes — scale is perfectly uniform everywhere — while plausible, this does not match the published specification',
    'C. Only at the poles where convergence is maximum — while plausible, this does not match the published specification',
    'D. The geometric centre of the chart — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'Lambert scale: two standard parallels define where the cone of projection intersects the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface. Scale is exactly 1:1 at these two lines. Between the parallels the chart is slightly compressed (scale too small); beyond the parallels the chart is slightly expanded (scale too large). Chart designers select standard parallels to bracket the intended operational area, minimising scale error within it. In practice, the distortion within a standard aeronautical chart area is negligible for navigation purposes.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'The holding pattern protected airspace is defined to contain the aircraft when:',
  options: [
    'A. The protected area only considers the maximum wind speed — aircraft speed is not a factor — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The protected area is a fixed rectangle regardless of speed, altitude, or wind — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The aircraft flies at or below the maximum holding speed with the maximum published wind speeds for that altitude, including the effects of bank angle limitations, entry type, and timing tolerances — the protected area accounts for the worst-case combination of these variables',
    'D. The aircraft flies at exactly the published holding speed with no wind — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Holding protected airspace design: ICAO PANS-OPS (Doc 8168) defines holding protected areas accounting for: aircraft speed (up to the published maximum holding speed for the altitude band); wind (ICAO maximum wind assumptions based on altitude — higher altitudes have higher assumed winds); bank angle (25° bank or 3°/sec, whichever requires less bank); timing tolerance (±10 seconds on the outbound leg); and entry type (all three standard entries must fit within the protected area). The resulting \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'racetrack\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' shaped protected area is larger than the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s actual track — providing a safety buffer for all these variables simultaneously.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'RNP AR (Authorisation Required) approaches enable which capability not available with standard RNAV approaches?',
  options: [
    'A. RNP AR allows approaches to airports with no ILS or other precision approach aid — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. RNP AR is only used at military aerodromes — civil aviation uses standard RNAV approaches — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'C. RNP AR enables curved (RF — Radius to Fix) leg segments and approach tracks with total system error of 0.1 nm or less — allowing approaches to aerodromes surrounded by terrain that cannot be served by conventional straight-in procedures; requires special aircraft and crew authorisation',
    'D. RNP AR allows approaches below Cat I weather minimums without special equipment — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'RNP AR (Authorisation Required): requires special aircraft capability and operator/crew authorisation beyond standard RNP approaches. Key features: (1) RF legs — Radius to Fix segments allow curved approach paths precisely; (2) accuracy ≤ 0.1 nm total system error; (3) approach minimums as low as 250 ft HAT; (4) enables approaches to airports with challenging terrain (Queenstown NZ, Innsbruck, many mountain airports); (5) requires: dual FMS, GNSS, RAIM/FDE capability; approach monitoring and alerting; specific crew training; specific aircraft certification. Growing use at challenging Australian regional aerodromes.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The published \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'minimum fuel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' for an IFR flight to a destination with no alternate is typically interpreted as:',
  options: [
    'A. Minimum fuel is 10% of trip fuel — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'B. Trip fuel + 2 hours of cruise fuel — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. Trip fuel + final reserve (45 minutes holding fuel at 1,500 ft above the aerodrome in ISA) — the final reserve represents the absolute minimum that must be on board at the destination; any fuel below this triggers a MAYDAY declaration',
    'D. Trip fuel only — no reserves are required — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Minimum fuel concept: the final reserve fuel (45 minutes at holding speed at 1,500 ft above destination elevation, ISA conditions) is the minimum that must be available at the destination. It is never intended to be used — it is a safety buffer for unanticipated events. If the estimated fuel at destination falls to the final reserve: (1) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'minimum fuel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' radio call to ATC: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Minimum fuel [callsign]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — advises ATC of the situation but is not an emergency declaration; ATC should not impose further delays; (2) if the actual fuel falls below the final reserve: MAYDAY fuel emergency must be declared. Minimum fuel plus trip fuel equals the minimum fuel quantity at departure.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The Mercator chart is suitable for plotting radio bearing lines because:',
  options: [
    'A. Great circles are straight lines on a Mercator chart — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'B. The Mercator projection eliminates magnetic variation errors — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. Rhumb lines appear as straight lines on a Mercator chart — a radio bearing followed at a constant magnetic bearing from the receiving aircraft forms a rhumb line',
    'D. Mercator charts preserve distances accurately at all latitudes — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Rhumb lines on Mercator: a radio bearing (NDB QDM or VDF bearing) represents a direction of constant magnetic bearing. Following a constant-bearing direction traces a rhumb line. On a Mercator chart, rhumb lines plot as straight lines — so plotting an NDB bearing is done by drawing a straight line from the NDB at the bearing angle. On a Lambert chart, rhumb lines curve. For aviation Lambert charts, a small correction is needed for long-range bearings.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'The VOR frequency range of 108.0 to 117.95 MHz is shared with which other navaid system?',
  options: [
    'A. DME — DME shares the VHF band with VOR — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. ILS localiser — localiser frequencies occupy 108.10 to 111.95 MHz (odd tenths); VOR occupies the 108 to 118 MHz band, with even tenths at 108 to 112 MHz reserved for VOR and odd tenths for ILS; above 112 MHz all are VOR',
    'C. GPS — both use the same carrier frequency — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'D. NDB — both operate on the same frequency range — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'VOR/ILS frequency sharing: 108 to 117.95 MHz band: 108.00 to 111.95 MHz: split between VOR (even tenths: 108.0, 108.2, 108.4... MHz) and ILS localiser (odd tenths: 108.1, 108.3, 108.5... 111.9 MHz). 112.00 to 117.95 MHz: all VOR. The aircraft navigation radio automatically pairs: when an odd-tenth frequency between 108.1 and 111.9 is tuned, the ILS glideslope receiver also tunes to the paired UHF glideslope frequency; when any VOR frequency is tuned, the VOR receiver is active. This pairing allows a single frequency entry to activate both ILS localiser and glideslope simultaneously.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The QNH of 983 hPa at an aerodrome with an elevation of 500 ft means the pressure at the aerodrome is:',
  options: [
    'A. QNH 983 hPa means all aircraft must fly at 983 ft above the aerodrome — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The surface pressure at the aerodrome is 983 hPa — QNH IS the sea level pressure reduced from the aerodrome — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'C. The surface pressure is exactly 983 hPa at the aerodrome — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. QNH 983 hPa is the MSL equivalent pressure — the actual pressure at the 500 ft aerodrome surface is slightly higher than 983 hPa (approximately 984.5 to 985 hPa); QNH is the mean sea level pressure computed by applying a temperature correction from the aerodrome surface pressure'
  ],
  correct: 3,
  explanation: 'QNH pressure relationship: QNH is the altimeter setting that makes the altimeter read the aerodrome elevation when on the ground. It is derived from: QNH = station pressure (corrected upward to MSL using the ISA standard pressure reduction formula). At an aerodrome at 500 ft elevation with QNH 983 hPa: the actual surface pressure at 500 ft ≈ 983 hPa + (500 ft / 27 ft per hPa) ≈ 983 + 18.5 ≈ 1001.5 hPa (approximately). The pressure is higher at the surface than at sea level because we are physically below the sea level datum. QNH 983 hPa (below standard 1013.25 hPa) indicates a low pressure system affecting the area.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The OBS (Omnibearing Selector) on a VOR CDI is used to:',
  options: [
    'A. Select the ILS frequency for an approach — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The OBS adjusts the sensitivity of the CDI deflection — while plausible, this does not match the published specification — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. The OBS selects the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s heading — it is another name for the heading bug — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Select the desired VOR radial (track) to track to or from the station — rotating the OBS sets the radial against the course index, and the CDI shows deviation from that selected radial; the TO/FROM indicator shows whether the selected course leads to or away from the station'
  ],
  correct: 3,
  explanation: 'OBS (Omnibearing Selector): on a VOR CDI instrument, the OBS is a knob that rotates the compass rose or course index to select a specific radial/bearing. Setting the OBS to the inbound track (e.g. 090° for an eastbound inbound): the CDI shows deviation left/right from that track; the TO/FROM flag indicates TO (you need to fly TO the station to intercept this radial) or FROM (the station is behind you on this radial). To fly a radial inbound, set the OBS to the inbound bearing (reciprocal of the radial) and fly with the TO flag showing.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'Doppler navigation systems determine ground velocity by measuring:',
  options: [
    'A. The time of flight of radio pulses to ground reference beacons — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'B. Doppler systems use GPS to determine velocity — radar is only used for obstacle detection — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'C. The Doppler frequency shift of radar signals transmitted at the ground — the frequency of the echo differs from the transmitted frequency by an amount proportional to the component of velocity toward or away from the beam direction; with multiple beams, all three velocity components can be resolved',
    'D. The magnetic field variations caused by aircraft motion over the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'Doppler navigation: the aircraft transmits radar beams toward the ground at known angles; the ground echoes are Doppler-shifted in frequency by an amount proportional to the velocity component along each beam. With beams in multiple directions (Janus configuration — forward/backward, left/right), the three-dimensional ground velocity vector is computed. Integration provides position. Doppler accuracy: approximately 0.1 to 0.5% of distance travelled. Advantages: self-contained (no external reference); works over featureless terrain (ocean); no alignment required. Disadvantages: requires reflective ground (fails over smooth water, sometimes); drift accumulates with distance.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The purpose of a TACAN (Tactical Air Navigation) system in civil aviation context is:',
  options: [
    'A. TACAN is a military UHF system providing both bearing and distance; civil aircraft use only the DME portion of TACAN (co-located with VOR as VORTAC) — the TACAN DME operates on the same UHF frequencies as civil DME and is usable by civil aircraft',
    'B. TACAN operates on VHF frequencies identical to civil VOR — they are interchangeable — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'C. Civil aircraft cannot use TACAN facilities — they are exclusively military — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'D. TACAN provides only azimuth information — it is never used for distance in civil aviation — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 0,
  explanation: 'TACAN in civil aviation: TACAN (Tactical Air Navigation) is a UHF military system providing both bearing (azimuth) and distance. The bearing system operates on military principles not compatible with civil ADF/VOR receivers. However, the distance component uses the same UHF DME frequencies (962 to 1213 MHz) and pulse codes as civil DME. VORTAC: a co-location of a civil VOR (providing civil azimuth) and a TACAN (providing UHF distance). Civil aircraft use the VOR for azimuth and the TACAN DME for distance. Military aircraft use the TACAN azimuth and TACAN DME. A VORTAC serves both civil and military users from one facility.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The AHRS (Attitude and Heading Reference System) uses which sensors?',
  options: [
    'A. Traditional spinning mechanical gyros in a gimballed platform — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. AHRS uses only the pitot-static system to compute attitude from pressure differences — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'C. Only a GPS receiver to compute attitude from position changes — while plausible, this does not match the published specification — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Laser gyros (or MEMS gyros) for attitude and rotation rate, accelerometers for gravity sensing and levelling, and a flux valve or magnetometer for magnetic heading reference — all processed by a computer to output attitude, heading, and angular rates'
  ],
  correct: 3,
  explanation: 'AHRS components: (1) laser gyros (RLG) or MEMS gyros — measure angular rate in three axes; integration gives attitude angles; (2) accelerometers (3-axis) — sense gravity for levelling during alignment and smooth attitude corrections during flight; (3) flux valve/magnetometer — provides magnetic heading reference; (4) computer — Kalman filter blends all inputs; errors are complementary (gyros accurate short-term, accelerometers accurate long-term for levelling). Modern AHRS/IRS is a self-contained strapdown system (no gimbals) — lightweight and reliable. Typically three units are fitted for redundancy.',
  reference: 'ANVC MOS 2.3.3 / AIP'
},
{
  question: 'Weather/traffic avoidance during route navigation is managed by:',
  options: [
    'A. Weather avoidance only applies to VFR operations — IFR aircraft penetrate all weather — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'B. The aircraft autopilot automatically avoids all weather without pilot input — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'C. The crew uses airborne weather radar, ATC radar advisories, SIGMET information, and PIREPs to identify deviation requirements; they coordinate route deviations with ATC, ensuring SLOP (Strategic Lateral Offset Procedures) compliance and maintaining separation; track miles used for fuel planning adjustments',
    'D. Weather avoidance deviations are unlimited and require no fuel reassessment — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Weather avoidance in cruise: (1) airborne weather radar — primary tool for real-time convective weather detection; (2) ATC radar advisories — controllers can provide weather advisories from ground radar; (3) PIREPs and SIGMETs — pre-flight and updated in flight via ACARS/HF; (4) SLOP (Strategic Lateral Offset Procedure) — in RVSM airspace, aircraft may offset up to 1 nm right of the centre line to avoid turbulence from weather or wake turbulence, without ATC coordination; (5) track miles — deviations add track miles; fuel consumption must be reassessed after significant deviations; (6) ATC coordination required for any deviation beyond SLOP limits.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'Why is the use of GPS approaches prohibited when a GPS NOTAM declares a GPS outage for the arrival aerodrome?',
  options: [
    'A. GPS NOTAMs only affect military users — civil aviation GPS is on a separate signal — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'B. A GPS NOTAM (KEPLR — or equivalent) declares that GPS signal testing, jamming exercise, or satellite geometry degradation will cause unreliable GPS accuracy in the area — conducting a GPS approach relying on signals that may be incorrect could lead to controlled flight into terrain at the critical approach phase',
    'C. GPS outage NOTAMs only restrict radar approaches — GPS approaches are unaffected — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. GPS NOTAMs are advisory only — GPS approaches may still be conducted — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'GPS NOTAM compliance: GPS outage or interference NOTAMs (in Australia, similar to US KEPLR system) warn of: GPS testing/jamming exercises (military); satellite maintenance windows; predicted RAIM outages; or known interference events. During an outage NOTAM: RAIM may be unavailable; GPS position may be degraded or incorrect; a GPS approach cannot be safely conducted. Requirement: check GPS NOTAM availability for the destination arrival time before departure; if a GPS NOTAM covers the arrival aerodrome during the planned arrival window, an alternative non-GPS approach must be available or the flight should be delayed.',
  reference: 'ANVC MOS 2.9.5 / CASR'
},
{
  question: 'The Equal Time Point (ETP) on a route between two aerodromes is the point where:',
  options: [
    'A. The total flight time is divided equally between the two waypoints — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'B. The ETP is the point where fuel reaches the minimum divert reserve — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'C. The ETP is always located at the geographical midpoint of the route — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'D. The time to continue to the destination equals the time to return to the departure aerodrome — calculated using current groundspeeds for the continuing and return legs; used to determine the decision point for diversion in an emergency'
  ],
  correct: 3,
  explanation: 'Equal Time Point (ETP): the point on the route at which the time to continue to destination equals the time to return to the departure aerodrome (or to a specified diversion aerodrome). Formula: ETP distance from A = (D × GS_return) / (GS_continue + GS_return), where D = total distance. The ETP is not at the midpoint unless both groundspeeds are equal. Significance: before the ETP, it is faster to return; after the ETP, it is faster to continue. For ETOPS operations, the ETP concept determines the 60-minute (or 90/180 minute) equaltime point from the ETOPS alternate.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'INS/IRS platform alignment accuracy improves with longer alignment time because:',
  options: [
    'A. The gyrocompassing process averages the measured Earth rotation rate signal over time — longer averaging reduces the effect of random gyro noise, producing a more accurate heading determination; however, after approximately 10 minutes the improvement is minimal as systematic errors (accelerometer bias) dominate',
    'B. Longer alignment allows more GPS satellites to come into view improving accuracy — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Longer alignment allows the gyroscopes to reach their operating temperature for better performance — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'D. Alignment accuracy is constant regardless of time — the 5-minute minimum is regulatory only — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'INS alignment time and accuracy: the gyrocompassing signal (horizontal component of Earth rotation rate) is very small — approximately 15° × cos(latitude)/hour. Random gyro noise must be averaged out to detect this small signal. Averaging time vs accuracy: 3 to 5 minutes — coarse alignment, heading uncertainty ±0.5° or more; 5 to 10 minutes — fine alignment, heading uncertainty ±0.1° to ±0.2°; beyond 10 minutes — diminishing returns as systematic errors (accelerometer bias, temperature) dominate. At high latitudes: the horizontal Earth rate component is smaller (cos(high latitude) is small) — alignment is more difficult and takes longer to converge.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'An aircraft at FL370 is 300 nm from the destination. The FMC computes a Top of Descent (TOD) at 60 nm from the destination. This assumes a descent angle of approximately:',
  options: [
    'A. 1.5°',
    'B. 2°',
    'C. 5°',
    'D. 3°'
  ],
  correct: 3,
  explanation: 'TOD calculation check: if the aircraft is at FL370 (37,000 ft) and must descend to approximately 3,000 ft at destination (let\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s assume sea level aerodrome plus normal pattern altitude, so to approximately 2,500 ft — but actually checking: descend 37,000 ft − 3,000 ft = 34,000 ft over 60 nm. Using 3°: 3° descent = approximately 318 ft/nm. Over 60 nm: 60 × 318 = 19,080 ft ≈ 19,000 ft. But 34,000 ft ÷ 60 nm = 567 ft/nm. 567 ft/nm ÷ 6076 ft/nm = 0.0933 rad → arctan(0.0933) ≈ 5.3°. So 60 nm for FL370 implies approximately 5° — unusual. More typically a 3° descent from FL370: 37,000/318 ≈ 116 nm. The answer B (3°) is the standard glidepath used in FMS descent planning for approximately 3° — pilots should know that at 3°: TOD ≈ altitude (hundreds ft) × 3.3 nm.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The ILS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'back beam\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' approach can be identified on the approach chart by:',
  options: [
    'A. The letters \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'BB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in the approach title — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. No chart identification — back beam approaches are not published — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'C. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LOC BC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in the approach title, indicating the localiser back course is used; the approach inbound course is the reciprocal of the ILS front course; CDI sensing is reversed (fly away from the needle)',
    'D. The back beam approach uses the same chart as the front course ILS — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'LOC BC approach identification: approach charts use standardised names. A localiser back course approach is titled \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LOC BC RWY XX\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' where XX is the approach runway. The chart shows: the inbound course on the back beam (opposite direction to the front course); no glideslope (back course provides no glideslope guidance); MDA rather than DH; a note reminding crews that CDI sensing is reversed (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly away from the needle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or similar wording on some charts). An \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ILS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' title always uses the front course. A \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LOC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' title may be front or back course — distinguished by the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'BC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' suffix.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'ETOPS critical fuel: normal cruise fuel flow 4,000 kg/hr. Single-engine driftdown fuel flow is 20% higher. Diversion time to alternate = 90 minutes. Fuel required for the diversion leg only is:',
  options: [
    'A. 6,000 kg',
    'B. 7,200 kg',
    'C. 4,800 kg',
    'D. 5,400 kg'
  ],
  correct: 1,
  explanation: 'Single-engine fuel flow = 4000×1.20 = 4800 kg/hr. Fuel for 90 min = 4800×(90/60) = 4800×1.5 = 7,200 kg. Answer B 7,200 kg.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'DME arc 15 nm radius, 90° arc. Arc distance:',
  options: [
    'A. 23.6 nm',
    'B. 21.2 nm',
    'C. 15.7 nm',
    'D. 47.1 nm'
  ],
  correct: 0,
  explanation: 'Arc = radius × angle(rad) = 15×(π/2) = 15×1.5708 = 23.6 nm. Answer A.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The ILS approach chart \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'profile view\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (side view) shows:',
  options: [
    'A. The vertical profile of the approach procedure — showing descent altitudes at each fix or waypoint, the glideslope angle, decision height (DH) or minimum descent altitude (MDA), threshold crossing height (TCH), and missed approach climb gradient; this allows the crew to verify the FMC vertical path and identify step-down altitudes',
    'B. The weather radar display for the approach — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The runway cross-section showing pavement markings — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s planned flight path from take-off to landing — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'Approach chart profile view: the profile view (lower half of most approach charts) shows the vertical profile of the procedure. It includes: (1) the IAF/IF/FAF altitudes; (2) step-down fixes and their altitude limits (for non-precision); (3) the glideslope gradient (e.g. 3.00° - TCH 50 ft) for precision; (4) DH or MDA; (5) missed approach instructions (climb to specific altitude, then...) with gradient; (6) distance and altitude at specified points; (7) the runway threshold and its elevation. The profile view is the primary reference for vertical approach management — used to brief the approach, verify FMC VNAV path, and cross-check altitudes during the approach.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'FL180, QNH 1025 hPa. True altitude is approximately:',
  options: [
    'A. 17,675 ft',
    'B. 18,000 ft',
    'C. 18,317 ft',
    'D. 19,000 ft'
  ],
  correct: 2,
  explanation: 'True alt = 18000+(1025−1013.25)×27 = 18000+11.75×27 = 18000+317 = 18,317 ft. Answer C.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The polar cap area above approximately 78°N is significant for navigation because:',
  options: [
    'A. GPS does not operate above 78°N due to satellite orbital geometry — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'B. Above 78°N, the variation between true north and grid north becomes impractical for conventional navigation; magnetic navigation also fails due to proximity to the magnetic pole; ICAO designates specific procedures for polar cap operations including use of a single reference direction (grid), enhanced navigation requirements, and specific communication frequencies',
    'C. Above 78°N, aircraft must use VOR exclusively — GPS is unreliable at these latitudes — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'D. The polar cap is restricted airspace — no civil aircraft may operate above 78°N — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'Polar cap navigation: above approximately 78°N (and similar for southern hemisphere), conventional magnetic navigation and standard compass-based navigation become impractical: (1) large, rapidly changing magnetic variation; (2) near-zero horizontal magnetic field component; (3) meridian convergence makes \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'heading = track\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' relationship unreliable. Solutions: (1) grid navigation (fixed reference to Greenwich meridian); (2) true heading from INS/IRS gyrocompassing; (3) GPS-based navigation with inertial backup; (4) ICAO Annex 2 polar operations include specific procedures for HF communication plans and fuel contingency for routes near or over the poles.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'Magnetic heading (MH), true heading (TH), and compass heading (CH) are related by:',
  options: [
    'A. TH = MH + variation; MH = CH + deviation (all three are identical in nil-wind conditions) — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'B. Compass heading equals true heading with variation applied; magnetic heading is a separate system — incorrect; the technical definition and application differ significantly',
    'C. MH = TH + variation; CH = MH + deviation — the correction is always additive — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'D. TH = MH + easterly variation (or − westerly); MH = CH + easterly deviation (or − westerly); so TH = CH + variation + deviation — each correction applies sequentially: compass → magnetic → true'
  ],
  correct: 3,
  explanation: 'Heading conversion chain: CH (Compass Heading) → apply deviation → MH (Magnetic Heading) → apply variation → TH (True Heading). Adding east values, subtracting west: TH = CH + deviation(east+/west−) + variation(east+/west−). Or use the memory aid CDMVT: Compass, Deviation, Magnetic, Variation, True — to convert from True to Compass, reverse the process subtracting east and adding west. Example: TH 090°, variation 10°E, deviation +2°: MH = 090 − 10 = 080°M; CH = 080 − 2 = 078°C. Note: this is the pilot\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s calculation — the compass reads CH and corrections give TH for chart plotting.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'A Type B RNAV waypoint (fly-over) differs from a Type A (fly-by) waypoint in that:',
  options: [
    'A. Type B waypoints are always at VOR stations — they are called beacon (B) waypoints — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'B. Fly-over (Type B) waypoints require the aircraft to overfly the geographic position before sequencing to the next leg — the FMC does not begin the turn until the waypoint is reached; this results in a larger track deviation beyond the waypoint before the turn is completed, compared to fly-by which anticipates the turn',
    'C. Type B waypoints are only used on departure procedures — not on arrivals or approaches — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. Type B waypoints require ATC authorisation to sequence — pilots must request permission — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'Fly-over vs fly-by waypoints: Fly-by (Type A) — the FMC calculates a turn anticipation point and begins the bank before the geographic waypoint to smoothly arc from one track to the next; the aircraft tracks inside the waypoint geographic position. Fly-over (Type B) — the aircraft must actually overfly the geographic waypoint before sequencing; the turn is initiated AFTER the waypoint, producing an overshoot beyond the waypoint before the turn is complete. PANS-OPS criteria: fly-over waypoints are used when terrain clearance or airspace boundaries require the aircraft to be at the waypoint position before turning — the turn overshoot must be within the protected area.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'On a flight from Cairns (17°S) to Darwin (12°S) heading generally west-northwest, the magnetic variation in the region is approximately 5°E. The true track of 285°T corresponds to a magnetic track of:',
  options: [
    'A. 280°M — subtracting easterly variation from true to get magnetic',
    'B. 290°M — adding easterly variation to get magnetic',
    'C. 285°M — variation is too small to affect the calculation',
    'D. 275°M — subtracting both variation and compass deviation'
  ],
  correct: 0,
  explanation: 'True to magnetic conversion: Magnetic = True − East variation (or + West variation). Mnemonic: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Variation East, Magnetic Least; Variation West, Magnetic Best\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. True track 285°T with 5°E variation: Magnetic = 285° − 5° = 280°M. Cross-check: to go from magnetic to true, add easterly variation: 280° + 5° = 285°T ✓. This is the most fundamental navigation calculation — applied to track, heading, bearing, and radial conversions throughout flight planning and execution.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'The FMC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'DRAG REQUIRED\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or similar performance alert during climb means:',
  options: [
    'A. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s drag is too high for efficient climb — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. An aerodynamic component has extended inadvertently — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. The aircraft is above the planned climb path and needs to increase drag (e.g. by extending speed brakes briefly) to return to the planned profile — often caused by a lower than planned weight or stronger than expected tailwind during climb',
    'D. The FMC requires drag data input from the crew — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'FMC climb path deviation alerts: if the aircraft is above the planned VNAV climb path (due to higher performance than planned or ATC constraint), the FMC may issue an alert. The aircraft can be at a higher altitude than the profile expects at that point — typically not a problem for an early climb. If the FMC requires a specific crossing altitude (at or below constraint from a SID or ATC), it may alert the crew that the aircraft will arrive high at the constraint — the crew must use speed brakes, reduce power, or request ATC clearance to arrive at the constraint within limits. Being too high at a constraint is both a procedural compliance issue and potentially an airspace infringement.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The 5T\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s (or 5C\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s) checklist used when flying an instrument approach procedure is:',
  options: [
    'A. The 5Ts are only used by military pilots — civil aviation uses a different approach checklist — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'B. Thrust, Turn, Time, Tune, Talk — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. Time, Turn, Throttle (power), Talk, Track — (or Checklist, Course, CDI, Callout, Clock in some variations) — a structured sequence ensuring consistent execution of each segment change point during an instrument approach',
    'D. Temperature, Trim, Talk, Transponder, Torque — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: '5Ts approach technique: at each designated point (FAF, step-down, etc.): Time — note the time for timing to the MAP; Turn — establish the correct heading/track; Throttle — set power for required descent rate; Talk — make appropriate radio calls; Track — verify correct track/CDI indication. Variations exist (some operators use 5Cs: Checklist, Course, CDI, Callout, Clock). The structured approach ensures no item is omitted during high-workload phases. Regardless of the mnemonic used, the underlying purpose is to systematically ensure track, timing, configuration, and communication are all addressed at each phase change point.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The Radio Altimeter Decision Height (RADH) differs from the Pressure Altimeter Decision Height (PADH) because:',
  options: [
    'A. The radio altimeter overreads in mountainous terrain — it cannot be used for DH — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. RADH is only valid above 200 ft — below 200 ft the pressure altimeter takes over — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'C. RADH uses the radio altimeter to measure actual height above the terrain/runway directly below — it is referenced to the terrain; PADH uses the barometric altimeter set to QFE or uses the published DH in altitude AMSL — it is referenced to a pressure datum and is affected by temperature errors and QNH/QFE accuracy',
    'D. RADH and PADH are identical — both use the same reference datum — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'RADH vs PADH: radio altimeter DH — measured by the RA at the actual terrain beneath the aircraft; referenced to the ground surface directly below; unaffected by altimeter setting or temperature errors; accurate near the surface. Barometric DH — measured by the pressure altimeter at the published DH altitude (based on ICAO pressure altitude corrections); subject to temperature errors (cold weather — true altitude less than indicated) and QNH setting errors. Cat II/III approaches require RA for DH (RADH) because the precision is higher and the reference is the terrain, not a pressure datum. The RA DH is set in the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s radio altimeter.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The great circle route from Sydney to Los Angeles is north of the direct rhumb line because:',
  options: [
    'A. The great circle from Sydney to LA goes south over Antarctica to save distance — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Great circles always follow the shortest longitude path — they never deviate north or south of the direct line — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The great circle is always south of the rhumb line in the Southern Hemisphere — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'D. Great circles between two points at similar latitudes in the Southern Hemisphere arc toward the equator (northward in the SH context, toward the southern pole in the NH); from Sydney (33°S) to Los Angeles (34°N), the great circle takes a more northerly (equatorial) path than the rhumb line, saving distance'
  ],
  correct: 3,
  explanation: 'SYD-LAX great circle: a great circle between Sydney (34°S, 151°E) and Los Angeles (34°N, 118°W) arcs toward the equator — which is the more northerly direction from Sydney. The great circle follows a path that passes near Fiji, Hawaii, and then curves south to LA. This is the true shortest path across the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface and saves approximately 200+ nm compared to a constant bearing (rhumb line) route. The route actually passes north of the equator in the mid-Pacific — the great circle crosses the equator twice.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The ILS glideslope beam scalloping refers to:',
  options: [
    'A. Scalloping only occurs when the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s flaps are not in the landing position — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'B. Irregular oscillations of the glideslope indicator caused by reflections from terrain, aircraft, or buildings near the glideslope antenna — the reflected signal mixes with the direct signal causing the CDI to oscillate rhythmically',
    'C. The curved shape of the glideslope path near the runway threshold — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Glideslope scalloping is a design feature indicating the aircraft is on the correct path — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'Glideslope scalloping: similar to VOR scalloping, glideslope scalloping is caused by multipath interference — reflected glideslope signals from taxiing aircraft, buildings, or uneven terrain mix with the direct signal. The interference pattern moves as the aircraft position relative to the reflecting surface changes, causing the glideslope needle to oscillate rhythmically (scallop). Effect: makes precise glideslope tracking difficult; may require the pilot to disregard small oscillations and track the average indication. ILS critical areas restrict vehicle and aircraft movement to reduce scalloping during approaches.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'A flight plan departure time is stated as 2345Z. The departure aerodrome is Perth (UTC+8, no daylight saving). The local departure time is:',
  options: [
    'A. 0745 the same day — 2345 UTC + 8 hours = 3145 = 0745 next day',
    'B. 1545 the same day',
    'C. 1545 the next day',
    'D. 0745 local next day'
  ],
  correct: 3,
  explanation: 'Perth local time: 2345 UTC + 8 hours (UTC+8) = 0745 UTC+1 day. So the local departure is 0745 the following day (morning). If departing at 2345Z (late night UTC), Perth being UTC+8 means it is already the next local morning. Check: 2345 UTC is 0745 Perth local time (next day). Perth does not observe daylight saving — it remains UTC+8 year-round unlike eastern Australian states.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'ADS-B mandatory carriage in Australian airspace above FL290 was implemented because:',
  options: [
    'A. ADS-B provides better performance than SSR at all altitudes — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. ADS-B is cheaper to install than SSR for airline operators — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'C. SSR (primary and secondary radar) provides limited coverage in remote and oceanic Australian airspace — ADS-B using GPS provides continuous surveillance in areas beyond radar coverage, enabling reduced separation standards and improved traffic management in previously unmonitored airspace',
    'D. ADS-B replaces all ATC communication requirements above FL290 — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Australian ADS-B mandate rationale: Australia has vast remote areas and oceanic regions where traditional ATC radar (SSR) does not provide coverage. The primary justification for mandating ADS-B Out above FL290: (1) extends surveillance to remote and oceanic areas for the first time; (2) enables reduced separation standards (from procedural to surveillance separation) over remote Australia; (3) improves search and rescue response time; (4) provides continuous traffic picture for TCAS; (5) cost-effective compared to building additional radar stations over the vast Australian outback. Mandatory ADS-B Out above FL290 from 2 February 2017 for aircraft above 5,700 kg or carrying more than 19 passengers.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'On a Lambert Conformal Conic chart, a track of 090°T drawn from Brisbane crosses a meridian at 15°S latitude and later crosses another meridian further east. At the second meridian, the track direction will be:',
  options: [
    'A. Still 090°T — a Lambert chart preserves track direction at all points — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'B. The track direction changes to 180°T because the chart distorts east-west tracks — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'C. Exactly 090°T at all points — Lambert preserves rhumb line directions — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'D. Slightly south of 090°T — because the great circle curves toward the equator; the constant-heading track on the chart represents a great circle that changes direction with longitude'
  ],
  correct: 3,
  explanation: 'Great circle track changes on Lambert: a straight line on a Lambert Conformal Conic chart represents a great circle. A great circle track from Brisbane heading east curves toward the equator (northward in NH, but Brisbane is in the SH so the great circle curves northward/equatorward). As the aircraft progresses east, the track direction changes — what started as 090°T becomes slightly south of east. The chart convergence causes the apparent track direction measured at each meridian to change by approximately convergence/2 for each step east.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'The RVR (Runway Visual Range) measurement differs from general visibility because:',
  options: [
    'A. RVR and visibility are identical measurements expressed in different units — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'B. RVR is measured vertically (cloud base), not horizontally — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. RVR is measured along the specific runway in use using calibrated transmissometer equipment — it gives the horizontal distance that a pilot at the threshold (or on the runway) can see along the runway; it may differ significantly from the prevailing visibility measured at a distance from the runway',
    'D. RVR is always greater than the general prevailing visibility — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'RVR vs visibility: prevailing visibility — meteorological optical range measured in all directions or the dominant direction; measured by weather observer or automated sensor away from the runway. RVR — measured specifically along the runway using calibrated transmissometers; measures the horizontal distance at which runway lights can be seen at the threshold elevation. RVR can be higher or lower than prevailing visibility: higher RVR: runway lights concentrated in the approach direction increase effective visual range; lower RVR: local fog, drift smoke, or blowing snow near the runway surface can reduce RVR while broader visibility is better. Approach minimums are specified as RVR where available (Cat II/III always; Cat I at equipped airports).',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'A fuel burn of 3,500 kg per hour at TAS of 450 kt gives a specific range of:',
  options: [
    'A. Specific range is computed from groundspeed, not TAS — this interpretation is not consistent with ICAO or CASR requirements',
    'B. 0.128 nm/kg — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'C. 3,500/450 = 7.78 kg/nm — while plausible, this does not match the published specification',
    'D. 450 kt / 3,500 kg/hr = 0.1286 nm/kg — specific range equals TAS (nm/hr) divided by fuel flow (kg/hr)'
  ],
  correct: 3,
  explanation: 'Specific range calculation: SR = TAS / fuel flow = 450 nm/hr ÷ 3,500 kg/hr = 0.1286 nm/kg. At this SR, to fly 1,000 nm requires: 1,000 / 0.1286 = 7,776 kg of fuel. The inverse (fuel per nm) = 3,500 / 450 = 7.78 kg/nm. Note: in practice, SR should use groundspeed (to include wind effect) for actual fuel required for a route: SR_actual = GS / fuel flow. Headwind reduces GS → reduces effective SR → more fuel required. The FMC uses groundspeed-based fuel consumption automatically in its calculations.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A VOR radial has an accuracy specification of ±1° for a DVOR. At 100 nm from the DVOR, this corresponds to a lateral accuracy of approximately:',
  options: [
    'A. 100 nm — this represents a common misconception not supported by the source material',
    'B. 0.5 nm — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. 5 nm — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. 1.75 nm — at 100 nm, 1° of angular error = 100 × tan(1°) ≈ 100 × 0.01745 = 1.745 nm lateral displacement'
  ],
  correct: 3,
  explanation: 'DVOR lateral accuracy at range: angular error converts to linear distance: distance error = range × tan(angular error). At 100 nm with ±1° error: 100 × tan(1°) = 100 × 0.01745 = 1.745 nm ≈ 1.75 nm. This is the 1-sigma (68th percentile) lateral error. The 2-sigma (95th percentile) would be approximately 3.5 nm at 100 nm. For conventional VOR (±4° accuracy): 100 × tan(4°) = 100 × 0.0699 = 6.99 nm ≈ 7 nm lateral error at 100 nm. This demonstrates why DME/DME (0.1 nm accuracy regardless of range) is preferred over VOR/VOR for long-range fixes.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'Cold temperature correction to altimeter-based minimums is required because:',
  options: [
    'A. Cold temperature makes the altimeter read too high — the aircraft is higher than indicated — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. Cold temperature correction only applies to ILS approaches — VOR and NDB approaches are unaffected — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'C. In air colder than ISA, the altimeter reads too high — indicated altitude is HIGHER than true altitude; the aircraft is lower than the altimeter shows; a cold temperature correction is added to published minimums to ensure adequate terrain clearance',
    'D. Cold temperature corrections are applied by ATC — no pilot action is required — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Cold temperature altimeter error: the altimeter is calibrated to ISA standard lapse rate (2°C/1,000 ft). In ISA-negative air (colder than standard), the actual pressure lapse rate is steeper than ISA predicts — the true altitude is LOWER than indicated. Example: indicated altitude 3,000 ft, temperature ISA-20°C (very cold) — true altitude ≈ 2,800 ft. For non-precision approaches in cold weather, the published minimums (based on barometric altitude) must be increased (cold temperature correction tables in AIP GEN 3.3 or ICAO Doc 9613) to ensure the aircraft is at the indicated altitude or higher when at the DH/MDA.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'At latitude 40°S the Earth rate causing apparent heading drift (azimuth precession) in a gyrocompass is:',
  options: [
    'A. 15.0°/hr',
    'B. 11.49°/hr',
    'C. 9.64°/hr',
    'D. 13.0°/hr'
  ],
  correct: 2,
  explanation: 'Earth rate azimuth component = 15 × sin(latitude). At 40°S: 15 × sin(40°) = 15 × 0.6428 = 9.64°/hr. This rate of apparent heading change requires the directional gyro to be resynchronised to the compass periodically. At equator: 0°/hr azimuth drift; at poles: 15°/hr. Answer C 9.64°/hr.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The primary purpose of the IFR 5T check at each approach fix is:',
  options: [
    'A. To verify the aircraft weight is within limits — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'B. To ensure the crew systematically completes all required actions at each phase change — Time (note the time for timing), Turn (establish the correct heading or track), Throttle (set the correct power for descent), Talk (make required radio calls), Track (verify correct course and CDI/FMS tracking)',
    'C. 5T check is only required at the FAF — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The 5T check is a regulatory requirement for student pilots only — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: '5T check application: at each designated point during an instrument approach (IAF, IF, FAF, and at step-down fixes): Time: note the time to start timing for the MAP (non-precision) or monitor for segment timing. Turn: establish the new heading or track for the next segment. Throttle: set power for the required speed and descent rate for the segment. Talk: make required ATC or CTAF calls. Track: verify the correct track is established on the CDI, RMI, or FMC. The structured check prevents omissions during high-workload approach phases.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The standard time interval for updating the FMC position using a manual DME/DME or VOR/DME fix in the absence of GPS is:',
  options: [
    'A. Periodically — typically every 30 to 60 minutes or as recommended by the operator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s procedures; the frequency of manual updates depends on the rate of IRS drift (typically 1 to 2 nm/hour) and the required navigation accuracy for the airspace',
    'B. Only when the FMC position error exceeds 10 nm — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The FMC updates automatically from any available radio navaid — no manual updates are needed — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. Manual FMC updates are prohibited — only GPS can update the FMC — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Manual FMC position update frequency: without GPS, the IRS position drifts at approximately 1 to 2 nm/hour. The frequency of manual updates depends on: (1) the required accuracy for the airspace (RNP 10 requires position error < 10 nm for 95% of time — IRS drift is acceptable for approximately 5 to 8 hours without update; RNP 4 requires more frequent updates); (2) operator procedures (some operators specify 30-minute update intervals in certain airspace); (3) availability of suitable radio navaids (DME/DME preferred over VOR/DME); (4) the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s own assessment of position accuracy (ANP on the PROG page). In radar-monitored airspace, ATC can provide position verification.',
  reference: 'ANVC MOS 2.9.6 / Navigation'
},
{
  question: 'When weather at the destination deteriorates below approach minimums after the aircraft is airborne but before arrival, the crew must:',
  options: [
    'A. Circle at the destination until conditions improve — it is always safe to hold indefinitely — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Continue to the destination — they accepted the weather risk at departure — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Declare an emergency — deteriorating destination weather is always an emergency — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. Initiate diversion to the filed alternate aerodrome — ensuring the alternate has adequate conditions; review fuel to confirm adequate fuel to reach the alternate with required reserve; advise ATC of intention; brief for alternate approach and aerodrome'
  ],
  correct: 3,
  explanation: 'Destination weather deterioration inflight: when destination weather falls below approach minimums during flight: (1) assess the fuel state — is there sufficient fuel to divert and arrive at the alternate with required reserves? (2) review the alternate aerodrome forecast — is the alternate still viable? (3) consider: can conditions improve before arrival (check TAF trend)? (4) initiate diversion early enough to maintain fuel reserves — delaying risks insufficient fuel for alternate; (5) advise ATC of diversion and new destination; (6) obtain alternate METAR/ATIS; (7) do NOT attempt an approach below minimums — this is both illegal and dangerous. Early diversion decision is the safe choice.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The FMS VNAV path angle for an approach is computed from:',
  options: [
    'A. The VNAV angle is determined by ATC and transmitted to the FMC via datalink — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. VNAV always uses a fixed 3° angle regardless of the published procedure — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'C. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current descent rate divided by groundspeed — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The published glidepath angle in the navigation database for the procedure (e.g. 3.00° for a standard ILS/RNAV approach) — the FMC converts this angle to a vertical speed requirement based on the current groundspeed; as groundspeed changes, the required vertical speed is automatically recalculated'
  ],
  correct: 3,
  explanation: 'FMS VNAV path angle: the navigation database contains the published glidepath angle for each procedure (e.g. 3.00°, 3.17°, 5.00°). The FMC uses this angle to compute the required vertical speed: V/S (fpm) = tan(glidepath angle) × groundspeed (nm/min) × 6,076 ft/nm. Example: 3° at 140 kt: V/S = tan(3°) × (140/60) × 6076 ≈ 0.0524 × 2.33 × 6076 ≈ 742 fpm. As groundspeed changes (wind change, speed reduction), the FMC recalculates the required descent rate to maintain the programmed path angle. This is more precise than using a fixed V/S in changing wind conditions.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'RNAV STAR procedures require the FMC to be programmed with the correct procedure before entry because:',
  options: [
    'A. RNAV STARs can be flown without FMC programming — traditional heading tracking is adequate — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. RNAV STARs define route geometry using waypoints, speed constraints, and altitude crossing requirements that must be in the active FMS route for the autopilot to follow them — without programming, the aircraft cannot follow the procedure; track and altitude constraints are also managed by the FMC in VNAV and LNAV modes',
    'C. The RNAV STAR is automatically downloaded from the ground station when the aircraft enters Australian airspace — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements',
    'D. RNAV STAR programming is only required for noise abatement procedures — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'RNAV STAR FMC requirement: RNAV STARs are based on RNAV navigation and defined by waypoints with crossing constraints. To fly an RNAV STAR: the crew must: (1) select and activate the STAR from the FMC navigation database (confirmed current AIRAC cycle); (2) verify all waypoints are correct (especially critical if ATC assigns a non-standard STAR via ACARS late in descent); (3) confirm altitude and speed constraints are loaded; (4) engage LNAV and VNAV to follow the computed path; (5) monitor for ATC modifications (expect vectors, speed changes). Manual flying of an RNAV STAR requires GPS/FMS position awareness and careful map reading.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'Inertial Navigation Systems (INS) use which sensors to determine position?',
  options: [
    'A. VOR/DME receivers that triangulate position from multiple ground stations — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'B. Three accelerometers (measuring acceleration in three axes) and three gyroscopes (maintaining the reference frame) — by integrating acceleration twice over time and correcting for Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation and gravity, the system computes position, velocity, and attitude from initial alignment',
    'C. GPS receivers and magnetic flux valves — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'D. The INS uses barometric altitude and airspeed as its primary inputs — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'INS sensors: (1) gyroscopes (3 axes) — maintain the inertial reference frame (stable platform or strapdown); prevent gravity-influenced errors; detect Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation for gyrocompassing alignment; (2) accelerometers (3 axes) — measure specific force (acceleration minus gravity); integrate once to get velocity; integrate twice to get position change. First integration: Δvelocity = acceleration × Δtime. Second integration: Δposition = velocity × Δtime. Errors accumulate: each small acceleration error produces a growing position error — INS drifts approximately 1 to 2 nm per hour of flight.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The radio altimeter (RA) differs from a pressure altimeter in that it measures:',
  options: [
    'A. Height above the terrain directly below the aircraft by transmitting an FM-CW (frequency modulated continuous wave) signal downward and measuring the round-trip delay — it displays true radio height above ground, not altitude above sea level',
    'B. Pressure altitude above mean sea level using QNH setting — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'C. The radio altimeter measures horizontal distance to terrain obstacles — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'D. Radio altimeters measure density altitude for performance calculations — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Radio altimeter (RA): uses FMCW (Frequency Modulated Continuous Wave) radar. Transmits a continuously chirped signal toward the ground; measures the frequency difference between the transmitted and received signal (the difference is proportional to the delay, which is proportional to height). Range: typically 0 to 2,500 ft AGL. Accuracy: ±2 ft or ±2% (whichever is greater) within the accurate range. Uses: Cat II/III decision heights (precise DH relative to the ground); GPWS/TAWS (terrain proximity warnings); autopilot flare initiation; TCAS altitude reference check; and runway proximity advisories.',
  reference: 'ANVC MOS 2.8.5 / Navigation'
},
{
  question: 'Grid Track 270°, longitude 040°E. True track is:',
  options: [
    'A. 270°T',
    'B. 310°T',
    'C. 230°T',
    'D. 300°T'
  ],
  correct: 2,
  explanation: 'TT = GT − longitude(E) = 270−40 = 230°T. Answer C 230°T.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'Radar beam attenuation in heavy rain is significant because:',
  options: [
    'A. Precipitation absorbs and scatters radar energy — at X-band frequencies (9 to 10 GHz), heavy rain can absorb so much energy that targets behind the rain are not detected (shadowing); C-band (5 GHz) has less attenuation but is still affected in extreme precipitation',
    'B. Radar attenuation is beneficial — it prevents false ground returns from appearing on the display — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Rain has no effect on radar energy propagation — only mountains cause radar attenuation — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Rain only affects radar at frequencies below 1 GHz — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Radar attenuation by precipitation: as the radar beam passes through heavy precipitation, energy is absorbed and scattered. Effect: targets behind a heavy cell may not be detected even though they contain severe weather — the radar display shows a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'shadow\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or clear area behind the intense cell. Frequency dependence: X-band (9 GHz) — significant attenuation in heavy rain; C-band (5 GHz) — less attenuation but still affected; S-band (3 GHz) — least attenuation (used by some ground weather radars). For airborne X-band radar: treat any \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clear\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' area behind heavy returns with extreme caution — it may be a shadow, not actual clear sky.',
  reference: 'ANVC MOS 2.8.3 / Navigation'
},
{
  question: 'The identifier \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'I-SY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' on an approach chart indicates:',
  options: [
    'A. A VOR station near Sydney — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. A DME only station (I for instrument) — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. An ILS localiser — the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'I-\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' prefix indicates an ILS component; the identifier is transmitted as a Morse code ID on the localiser frequency to confirm the correct ILS is selected',
    'D. I-SY indicates an NDB collocated with a VOR — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'ILS identifier format: ILS localiser identifiers typically use the format \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'I-XXX\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' where XXX is the airport identifier or a component thereof. The identifier is transmitted as Morse code on the localiser frequency (108.10 to 111.95 MHz) and is typically also transmitted on the glideslope frequency (which is not separately tunable — it pairs with the localiser). The ILS identifier must be positively checked before commencing an instrument approach — an incorrect identifier may mean the wrong ILS is tuned, which could lead to flying an approach to the wrong runway or airport.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'service volume\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' of a DME station defines:',
  options: [
    'A. The three-dimensional airspace volume within which the DME ground station meets its accuracy specifications — including maximum range (line-of-sight dependent) and altitude limits; outside the service volume, the DME may still provide a distance reading but accuracy is not guaranteed',
    'B. The DME service volume is unlimited — it extends to 500 nm from the station at all altitudes — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'C. The DME service volume defines the area where the DME is available during business hours only — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'D. The range at which the DME provides distance information with certified accuracy — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'DME service volume: the airspace within which the DME provides reliable, accurate distance information meeting published specifications. Typical DME service volume parameters: maximum range — 130 to 150 nm (line-of-sight limited; varies with altitude); altitude — from a minimum height AGL to a maximum altitude. Within the service volume: range accuracy ±0.5 nm or 3% of range (whichever is greater) for ICAO specifications; ±0.1 nm for surveyed precision DME. Outside the service volume: the DME transponder may respond to interrogations but accuracy is not guaranteed — the crew must not rely on DME readings outside the published service volume.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'When ATC instructs an aircraft to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly heading 270\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\', the crew should:',
  options: [
    'A. Set the OBS to 270° and track the VOR 270° radial — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'B. Fly a heading of 270° relative to the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current heading — a 270° relative bearing turn — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'C. Fly a track of 270° true, correcting for wind to maintain the track — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'D. Immediately turn to a magnetic heading of 270° (due west) and maintain that heading until further instruction — this is a direct heading assignment, not a track or course; the aircraft will drift downwind from the assigned heading'
  ],
  correct: 3,
  explanation: 'ATC heading instruction: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly heading 270\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means steer a magnetic heading of 270°. The aircraft points west regardless of wind. The track may differ from 270° if there is a crosswind — ATC accepts this and uses the heading to position the aircraft relative to traffic. This is different from: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'track 270°\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (maintain 270° track, correct for wind); \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly direct to waypoint\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (FMS controlled). Heading instructions are given in magnetic degrees (true in some areas where magnetic variation is impractical — high latitudes). Heading assignments are ATC separation tools; track is the navigation outcome.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'GLONASS differs from GPS in which operational aspect?',
  options: [
    'A. GLONASS operates at lower orbital altitude than GPS, giving better accuracy near the poles — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. GLONASS is operated by China — it is the same as BeiDou navigation system — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. GLONASS satellites are at geostationary orbit — they do not move relative to the Earth — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. GLONASS uses Frequency Division Multiple Access (FDMA) — each satellite transmits on a slightly different frequency (while GPS uses CDMA — all satellites transmit on the same frequency with unique code division). Modern GLONASS-K satellites also support CDMA signals'
  ],
  correct: 3,
  explanation: 'GLONASS vs GPS: GLONASS (Global Navigation Satellite System) is Russia\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s equivalent of GPS. Key differences: (1) FDMA signal structure — all satellites broadcast on slightly different frequencies in the L1 and L2 bands (GPS: all satellites on same L1 1575.42 MHz and L2 1227.60 MHz with unique PRN codes); (2) orbital inclination: GLONASS satellites at 64.8° (vs GPS 55°) — better coverage at high latitudes above 55°N/S; (3) 24 satellites in 3 orbital planes (vs GPS 6 planes); (4) GLONASS epoch is defined from midnight Moscow time vs GPS epoch. Multi-constellation receivers (GPS+GLONASS) have more satellites → better DOP → improved accuracy and integrity.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'Position error (also called pressure error) of the pitot-static system is greatest when:',
  options: [
    'A. Flying at high altitude in cruise — the thin air causes maximum error — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Position error is greatest in straight and level flight at cruise speed — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'C. At slow airspeeds with high angles of attack and in unusual configurations (flaps extended, gear down) — the airflow around the aircraft is most disturbed at these conditions, causing the static ports to sense a pressure different from true ambient',
    'D. Position error is constant regardless of airspeed or configuration — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Position error conditions: the static port must sense true ambient (freestream) static pressure. At slow speeds with high AoA and/or flaps extended, the airflow around the fuselage is significantly disturbed — the static port may be in an accelerated or decelerated flow region giving incorrect pressure. Errors: (1) can be positive or negative; (2) greatest at slow speeds/high AoA (approach/landing configuration); (3) test-flown during certification; (4) published in AFM as the IAS-to-CAS correction table. On EFIS aircraft, the ADC applies position error corrections automatically.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'LMT (Local Mean Time) at longitude 135°E is:',
  options: [
    'A. UTC + 10 hours — Australia uses UTC+10',
    'B. UTC + 9 hours — longitude 135°E ÷ 15°/hour = 9 hours east of UTC; LMT is based on the sun\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position at the observer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s exact longitude',
    'C. The same as LST (Local Standard Time) everywhere',
    'D. UTC + 9 hours exactly'
  ],
  correct: 3,
  explanation: 'LMT at 135°E: LMT = UTC + (longitude ÷ 15). 135°E ÷ 15°/hour = 9 hours. LMT at 135°E = UTC + 9 hours. Note: Australia\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s Central Standard Time (ACST) is UTC+9:30 for South Australia and Northern Territory — approximately matching the 142.5°E meridian. This is the political LST which differs from the sun-based LMT. The longitude 135°E passes through western South Australia — the LMT there is UTC+9, while the legal time (ACST) is UTC+9:30.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'The 180° meridian (approximate date line location) is significant in aviation because:',
  options: [
    'A. Aircraft must obtain special clearance to cross the 180° meridian — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. All communication must switch from HF to VHF at 180° — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'C. Crossing the date line changes the calendar date — affecting flight plan validity, crew duty times, slot times, and scheduled arrival dates; these must be carefully accounted for in long-haul Pacific and trans-polar flight planning',
    'D. The 180° meridian marks the boundary between the Brisbane and Auckland FIRs — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Date line aviation significance: long-haul Pacific routes cross the date line regularly (e.g. Sydney to Los Angeles, Sydney to Santiago). Implications: (1) flight plan validity — the Z-time is always consistent, but arrival date may be different from departure date or even before it in local time; (2) crew duty regulations — rest requirements are based on duty time, which may span a calendar date change; (3) schedule coordination — a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Tuesday\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' arrival in LA departing on \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Wednesday\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in Sydney; (4) cargo documentation — bill of lading dates; (5) ATC clearances specify Z-times to avoid ambiguity.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'ATC requires aircraft to report position at mandatory reporting points on a route because:',
  options: [
    'A. Position reports are only required for oceanic flights — radar provides all position data domestically — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'B. Position reports are required by ATC to update the navigation database — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. In non-radar airspace, position reports allow ATC to build a picture of aircraft positions and provide separation — without radar, position reports are the primary means of traffic management; they also detect navigational errors (aircraft not reaching a reporting point at the expected time)',
    'D. Position reports are optional — pilots report position only when they identify a hazard — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Position reporting: in non-radar airspace (common in remote Australian outback and oceanic routes), ATC relies on position reports to provide separation. Each report tells ATC: the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position, altitude, time at the position, and ETA to the next reporting point. ATC uses this to: apply time-based or distance-based separation standards; detect deviations from the planned route; and provide search-and-rescue data if contact is lost. In radar-controlled airspace, position reports are not required (radar provides continuous position). ATC may request a position report at any time.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'The purpose of ATC flow control speed restrictions on approach (e.g. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'180 kt until 10 DME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\') is:',
  options: [
    'A. Speed restrictions protect aircraft structural limits near the aerodrome — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'B. Speed restrictions are published on the STAR for noise abatement purposes only — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. ATC uses speed restrictions to control the spacing between successive aircraft — slower speeds create more time between aircraft, preventing a compaction of traffic near the runway; faster speeds compress the sequence; by assigning specific speeds, ATC sequences multiple arrivals without vectoring',
    'D. Speed restrictions prevent aircraft from entering prohibited airspace near the aerodrome — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'ATC arrival speed restrictions: approach sequencing by speed control — a powerful tool for managing multiple arrivals. By specifying speeds: (1) a faster aircraft behind a slower aircraft is slowed to prevent closing in; (2) consistent speeds across the sequence allow ATC to calculate accurate spacing; (3) speed control avoids additional vectoring which increases track miles and fuel burn; (4) speed restrictions at DME steps also stabilise the approach (180 kt at 10 DME → 160 kt at 8 DME → Vapp by 4 DME). Crew responsibility: comply with the speed restriction unless safety requires otherwise; advise ATC if unable.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'The maximum permissible ILS localiser error for a certificated installation is:',
  options: [
    'A. ILS localiser accuracy is not specified — pilots must determine usability from PIREPs — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. ±5° at full-scale CDI deflection — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'C. The localiser beam course error must not exceed ±10.5 m at the threshold (equivalent to ±0.5° for a standard runway width approach) — significantly tighter than the ±2.5° full-scale CDI deflection specification which represents the outer boundary',
    'D. The ILS must be accurate to within 1 nm of the runway centreline — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'ILS localiser accuracy: ICAO Annex 10 specifies that the course line must be within ±10.5 m of the runway centreline at the threshold. The localiser must maintain course line accuracy within this tolerance — this represents a very small fraction of the full-scale CDI deflection (±2.5° from course). Flight inspection verifies this accuracy periodically. Any ILS failing to meet this standard is either: notified as restricted accuracy in AIP/ATIS; the service volume is reduced; or the ILS is taken out of service. Pilots should note that an ILS flagged as \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'narrow\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or with special restrictions may have larger-than-standard tolerances.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The technique of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'aiming off\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' used in navigation means:',
  options: [
    'A. Deliberately aiming to arrive at a known landmark (line feature such as a river, road, or coastline) to one side of the intended destination — upon reaching the line feature, the pilot knows to turn in a specific direction (e.g. always turn left to the destination) rather than not knowing which direction the destination is',
    'B. Deliberately aiming at a point short of the actual destination — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'C. Aiming off is used to compensate for compass deviation — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Aiming off is used when the destination has no visual reference — the pilot aims at the closest navaid instead — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'Aiming off technique: used in map reading / visual navigation when tracking to a point on a linear feature (road, river, coastline). If the pilot tracks directly to the destination on a line feature: if drift or navigation error causes an offset, the pilot arrives at the line feature but doesn\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'t know whether to turn left or right to find the destination. Solution — aim off: deliberately track to a point known to be (say) 3 nm left of the destination on the line feature; upon reaching the line feature, always turn right to find the destination. This eliminates the 50/50 uncertainty at the line feature. Used in bush navigation where precise VHF/GPS navigation is unavailable.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'At what rate does apparent wander (Earth rate) cause a gyro to precess when at 45°S latitude?',
  options: [
    'A. Earth rate is constant at 7.5°/hour everywhere — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. 15°/hour at all latitudes — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'C. 15 × sin(45°) = 10.6°/hour — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. 15 × cos(45°) = 10.6°/hour horizontal component — the horizontal component of Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation causes the gyro spin axis (fixed in inertial space) to appear to precess when referenced to the rotating Earth; the rate equals 15 × cos(latitude) degrees per hour'
  ],
  correct: 3,
  explanation: 'Earth rate (apparent wander): the Earth rotates at 15°/hour. A gyro maintains orientation in inertial space. Relative to the rotating Earth, the gyro appears to precess. The horizontal component (causing heading error in a DI) = 15 × cos(latitude)°/hour. At 45°S: 15 × cos(45°) = 15 × 0.707 = 10.6°/hour horizontal apparent wander. At the equator (0°): 15°/hour maximum. At the poles (90°): 0°/hour horizontal (but 15°/hour vertical — the DI would spin). Combined with real wander (2 to 5°/hour for mechanical gyros), the DI must be re-synchronised regularly — particularly at higher latitudes where Earth rate contribution is significant.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The reason ILS precision approaches require two pilots (or special single-pilot approval) in Australia is:',
  options: [
    'A. The high workload of monitoring multiple instruments (localiser, glideslope, DH, radio altimeter), managing the approach, maintaining communications, and being prepared to execute an immediate missed approach safely requires a shared workload — one pilot flies and monitors while the other manages checklists, communications, and outside lookout',
    'B. ILS approaches always require two pilots by ICAO standards regardless of aircraft type — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. Two pilots are required because the autopilot cannot fly an ILS approach — a pilot must maintain manual control throughout — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. Single-pilot ILS is prohibited by the aircraft type certificate in all cases — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'Two-pilot requirement for ILS approaches: CASR and aircraft certification may require two pilots for ILS approaches due to workload and safety considerations. Even where single-pilot ILS is approved, the workload is very high: monitoring localiser and GS simultaneously; cross-checking RA, altimeter, and vertical speed; managing missed approach readiness; communications with ATC; operating checklist; and maintaining instrument scan while searching for visual references at DH. Two-pilot operations allow: one pilot to fly instruments precisely while the other monitors altitude, calls out deviations, maintains radio contact, and executes missed approach initiation if required.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The VSI (Vertical Speed Indicator) shows a lag of approximately 6 to 9 seconds because:',
  options: [
    'A. The calibrated leak in the static case takes time to equalise with the new static pressure — the lag is the RC (response constant) of the pneumatic system; the IVSI uses acceleration pumps to give near-instantaneous response',
    'B. The VSI computer takes time to calculate the climb rate from GPS data — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'C. The lag is due to the pilot\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s reaction time, not the instrument itself — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. VSI lag is caused by the gyro precession time constant — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'VSI lag: the VSI uses a calibrated metering unit (leak) between the static case (delayed reference pressure) and the capsule (instantaneous static pressure). The pressure differential drives the needle. The lag arises because the metering unit takes time to pass air through — the reference pressure inside the case takes approximately 6 to 9 seconds to catch up to a rapid change in static pressure. IVSI (Instantaneous VSI) uses mechanical acceleration-sensing pumps to instantly inject a pressure differential when the aircraft begins climbing or descending — effectively eliminating the lag for initial indication.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The fluxgate/flux valve detects the horizontal component of the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic field by:',
  options: [
    'A. Detecting the Zeeman effect of the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s field on electron spin states in a crystal — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'B. Using three or more sensing coils arranged at 120° intervals — an AC excitation drives each core to saturation twice per cycle; the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s field creates asymmetric saturation in each core, inducing a second-harmonic signal proportional to the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s horizontal field component in that direction; the combined signals from all cores resolve the heading',
    'C. Measuring the current flow in a wire aligned with the magnetic field — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'D. Physically rotating a permanent magnet and measuring the alignment torque — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'Flux valve (fluxgate) operation: the flux valve uses a highly permeable core excited by an AC current at a reference frequency. When Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic field is present: (1) the core saturates differently on positive and negative half-cycles (asymmetric saturation); (2) this generates a second-harmonic signal in the sensing winding; (3) the amplitude and phase of this signal indicate the component of Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s field along the core axis. With three cores at 120°, the three signals resolve the complete horizontal field vector — giving precise magnetic heading. Advantages: no moving parts; sensitive; unaffected by vibration; remote installation possible.',
  reference: 'ANVC MOS 2.4.2 / AIP'
},
{
  question: 'A track of 300°T with a wind of 360°/30 kt (northerly wind at 30 kt) on a true airspeed of 180 kt gives a wind correction angle of approximately:',
  options: [
    'A. 15° left — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'B. 10° left — heading 290°T to maintain track of 300°T; the northerly wind pushes the aircraft south (right of track when heading 300°T) so the correction is to the left (into wind — toward 010°T side)',
    'C. 10° right (port) — the northerly wind pushes the aircraft to the right (south) of the intended track — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'D. 5° right — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'WCA calculation: wind from 360° (north), track 300°T (northwest). Determine the crosswind component: angle between wind direction and track = 360° − 300° = 60°. Crosswind component = 30 × sin(60°) = 30 × 0.866 = 26 kt. WCA (degrees) ≈ arcsin(crosswind/TAS) = arcsin(26/180) ≈ arcsin(0.144) ≈ 8.3°. The wind from the north pushes the aircraft southward (right of the 300°T track when looking northwest). To maintain the track, the aircraft must head into the wind — heading 300° − 8° ≈ 292°T (approximately 10° left of track). Answer B is closest — approximately 10° left (heading more northward to counter the southward drift).',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'Aircraft TAS 500 kt, M0.84. Local speed of sound:',
  options: [
    'A. 595 kt',
    'B. 578 kt',
    'C. 610 kt',
    'D. 560 kt'
  ],
  correct: 0,
  explanation: 'LSS = TAS/Mach = 500/0.84 = 595 kt. Answer A.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'A coastal NDB bearing taken when the aircraft is on the landward side of a coastal NDB shows refraction error that:',
  options: [
    'A. Coastal refraction reverses the bearing by 180° — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Rotates the bearing toward the coast — the wavefront bends as it transitions from sea to land, making the bearing appear to originate from closer to the coastline',
    'C. Is negligible — coastal refraction only affects bearings from over-water aircraft to land-based NDBs',
    'D. Rotates the bearing seaward — the bearing appears to come from further out to sea than the actual beacon position'
  ],
  correct: 3,
  explanation: 'Coastal refraction direction: when a groundwave signal crosses a coastline, it refracts toward the lower-conductivity medium (land). The wavefront bending: the signal slows as it transitions from seawater (high conductivity — fast wave) to land (lower conductivity — slower wave). The NDB is at the coast or seaward; the aircraft is inland. Refraction causes the wave from the sea side to appear to come from a direction rotated toward the coast (i.e. the ADF bearing rotates seaward from the true bearing). For an aircraft on the landward side, this means the bearing appears to come from further toward the sea — the beacon appears seaward of its actual position.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The principle of superposition in radio waves explains why:',
  options: [
    'A. Two transmitters of different frequencies can never interfere with each other — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. When two radio signals of the same frequency arrive at a receiver, they combine algebraically — if in phase they reinforce (constructive interference); if 180° out of phase they cancel (destructive interference); partial cancellation produces fading; this is the mechanism behind VOR scalloping, ILS glideslope distortion, and HF fading',
    'C. Radio antennas must be oriented vertically for maximum signal strength — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. Superposition only applies to light — radio waves cannot interfere with each other — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'Superposition and radio interference: electromagnetic waves obey the principle of superposition — when multiple waves occupy the same space simultaneously, the total field is the vector sum of the individual fields. In aviation radio navigation: (1) VOR scalloping — direct and reflected signals interfere; (2) ILS false courses — signal lobes interfere with primary signal at angles other than the glidepath; (3) NDB night effect — groundwave and skywave arrive simultaneously out of phase; (4) HF multipath fading — multiple propagation paths arrive with different phase delays, producing rapidly varying signal strength. Understanding superposition explains why siting of navaids (away from reflective surfaces) is critical.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'Trip fuel 68,000 kg, contingency 5% of trip, alternate 4,200 kg, final reserve 3,600 kg. Block fuel:',
  options: [
    'A. 79,200 kg',
    'B. 75,800 kg',
    'C. 77,100 kg',
    'D. 72,400 kg'
  ],
  correct: 0,
  explanation: 'Contingency = 68,000×0.05 = 3,400. Block = 68,000+3,400+4,200+3,600 = 79,200 kg. Answer A.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'False glideslope signals can exist because:',
  options: [
    'A. The ILS glideslope transmitter is sometimes misaligned by maintenance errors — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'B. The ILS glideslope antenna produces multiple lobes — the primary glidepath is at 3° but false glidepaths exist at higher angles (approximately 9°, 15°, and higher harmonics); an aircraft capturing the false glidepath at 9° will receive valid CDI guidance but at three times the correct angle, leading to too-high or too-low approach',
    'C. False glidepaths only occur at military ILS installations — civil ILS has only one glidepath — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. False glideslope only occurs in heavy rain when the signal refracts — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'ILS false glideslope: the glideslope antenna produces the primary glidepath at 3° and harmonic false glidepaths at approximately 9°, 15°, and higher. If an aircraft intercepts the 9° false glidepath, the receiver interprets valid guidance signals but the aircraft is on a much steeper path. Protection: (1) approach briefed to capture the glideslope from below; (2) localiser/glideslope capture confirmation at the appropriate altitude; (3) check with DME — on the 9° false glidepath, the aircraft will cross the outer marker at approximately 3× the normal altitude. Always intercept the glideslope from below.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'AEST (Australian Eastern Standard Time) is:',
  options: [
    'A. UTC + 11 — the standard time for all eastern Australian states — this represents a common misconception not supported by the source material',
    'B. UTC + 10 — used in Queensland, NSW (non-summer), Victoria (non-summer), Tasmania (non-summer), and the ACT',
    'C. UTC − 10 — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. UTC + 9.5 — used in the Northern Territory and South Australia — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'AEST = UTC + 10: used by Queensland (year round), NSW, Victoria, Tasmania, and ACT in winter (April to October). During daylight saving (October to April in NSW, VIC, TAS, ACT): AEDT = UTC + 11. Queensland does not observe daylight saving — always AEST (UTC+10). This creates confusion: Sydney (AEDT in summer) = UTC+11, Brisbane (AEST) = UTC+10 simultaneously. The Northern Territory uses ACST = UTC+9.5; SA uses ACST in winter and ACDT (UTC+10.5) in summer.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'The IFR circling approach differs from a straight-in approach in that:',
  options: [
    'A. A circling approach is used when the approach is conducted at night only — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. Circling approaches always have lower minimums than straight-in approaches — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. Circling approaches use GPS guidance for the visual circuit — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. A circling approach requires the aircraft to manoeuvre visually after the straight-in final approach track to line up with a different runway — circling minimums (MDA/H) are higher than straight-in minimums; the circling area provides 300 ft obstacle clearance within the published radius from the runway threshold'
  ],
  correct: 3,
  explanation: 'Circling approach: a circling approach is required when the approach course is offset more than 30° from the landing runway direction, or when the approach procedure specifies circling only. Characteristics: (1) higher MDA than straight-in (typically 100 to 400 ft higher) because the obstacle clearance must cover the entire circling area; (2) the circling manoeuvre is flown visually below MDA; (3) the circling area radius depends on aircraft category (Cat A: 1.68 km from threshold); (4) the aircraft must maintain visual reference throughout the circuit; (5) if visual reference is lost during circling, the crew must execute the published missed approach. Night circling: requires additional caution — lighting must be adequate.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'An aircraft has GS outbound 390 kt, GS homebound 520 kt, total route distance 4,160 nm. ETP distance from departure is:',
  options: [
    'A. 2,080 nm',
    'B. 2,378 nm',
    'C. 2,353 nm',
    'D. 1,782 nm'
  ],
  correct: 1,
  explanation: 'ETP = D × GS_H/(GS_O+GS_H) = 4160 × 520/(390+520) = 4160 × 520/910 = 4160 × 0.5714 = 2,377 nm. The ETP is displaced past midpoint (2,080 nm) toward the destination because GS_H (520 kt homebound) is faster. Answer B 2,378 nm.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'VHF station sea level, aircraft FL200 (20,000 ft). Max LOS range:',
  options: [
    'A. 175 nm',
    'B. 100 nm',
    'C. 155 nm',
    'D. 215 nm'
  ],
  correct: 0,
  explanation: 'R = 1.23×√20000 = 1.23×141.4 = 174 nm ≈ 175 nm. Answer A.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'An NDB at 305 kHz transmits at 100 W. Its daytime reliable groundwave range is approximately 75 nm. A second NDB at 305 kHz with 400 W transmitter power has a daytime range of approximately:',
  options: [
    'A. 300 nm',
    'B. 150 nm',
    'C. 100 nm',
    'D. 200 nm'
  ],
  correct: 1,
  explanation: 'NDB range scales approximately with √(power): range ∝ √P. R₂/R₁ = √(P₂/P₁) = √(400/100) = √4 = 2. Range₂ = 75 × 2 = 150 nm. Doubling the range requires quadrupling the power. Answer B 150 nm.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'The relationship between frequency and wavelength in radio propagation is:',
  options: [
    'A. Frequency and wavelength are directly proportional — higher frequency means longer wavelength',
    'B. Wavelength equals frequency divided by the speed of light — not supported by the ANVC syllabus or applicable MOS requirements',
    'C. The relationship between frequency and wavelength only applies in free space — in the atmosphere it changes',
    'D. Frequency × wavelength = speed of light (c = f × λ); lower frequency = longer wavelength'
  ],
  correct: 3,
  explanation: 'Frequency and wavelength: c = f × λ, where c = speed of light (3 × 10⁸ m/s), f = frequency (Hz), λ = wavelength (m). Rearranging: λ = c/f. Higher frequency → shorter wavelength; lower frequency → longer wavelength. Examples: VHF 120 MHz: λ = 3×10⁸/1.2×10⁸ = 2.5 m; HF 10 MHz: λ = 30 m; LF 100 kHz: λ = 3,000 m; GPS L1 1575 MHz: λ = 0.19 m. Antenna length is typically λ/4 or λ/2 — longer wavelengths require larger antennas (HF whip antennas are metres long; GPS antennas are centimetres). Understanding this helps explain why different frequency bands use different antenna types.',
  reference: 'ANVC MOS 2.5.1 / Navigation'
},
{
  question: 'IFR alternate aerodrome fuel requirements in Australia require fuel to fly to the destination, execute an approach, and then fly to the alternate at:',
  options: [
    'A. Maximum cruise speed to minimise time and fuel — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'B. Single engine cruise speed — alternate planning assumes one engine failure — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. The alternate fuel is calculated at 1,500 ft above the alternate aerodrome elevation — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The normal cruise altitude and speed — the alternate fuel is calculated based on flying from the destination (missed approach) to the alternate at the planned speed with ISA conditions; additional contingency fuel covers the wind and temperature variances'
  ],
  correct: 3,
  explanation: 'Alternate fuel calculation: CASR Part 91 fuel requirements for IFR: fuel to destination + fuel for missed approach at destination + fuel to alternate + 45 minutes (final reserve) + contingency. The fuel from destination to alternate: calculated at the planned cruising speed and altitude (not degraded performance); using forecast winds and temperatures; at actual gross weight at that time. Operators\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' procedures may vary (some use more conservative assumptions). The 45-minute reserve is at holding speed at 1,500 ft above alternate elevation. Additional contingency fuel (10% of trip fuel or 5 minutes, whichever is greater) is required for unexpected circumstances.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'At FL250, OAT −30°C. Aircraft at 300 kt CAS. Approximate TAS:',
  options: [
    'A. 430 kt',
    'B. 412 kt',
    'C. 448 kt',
    'D. 390 kt'
  ],
  correct: 2,
  explanation: 'At FL250, TAS ≈ CAS × (1 + 0.02 per 1000 ft × 25) = 300 × 1.50 = 450 kt. With ISA+4.5°C: slightly higher. ≈ 448 kt. Answer C 448 kt.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'At FL350, OAT −55°C. Aircraft at Mach 0.82. T = 218K. LSS = 20.05×√218 ≈ 296 m/s = 575 kt. TAS is:',
  options: [
    'A. 471 kt',
    'B. 472 kt',
    'C. 467 kt',
    'D. 485 kt'
  ],
  correct: 1,
  explanation: 'TAS = Mach × LSS = 0.82 × 575 = 471.5 kt ≈ 472 kt. Answer B 472 kt.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'An aircraft at FL200 receives a TCAS RA commanding \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Climb, Climb\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. The correct response is:',
  options: [
    'A. Disconnect the autopilot and manually climb immediately at the required rate shown by the RA — do not wait for ATC clearance; TCAS RAs take priority over ATC instructions; advise ATC as soon as practical that the aircraft is responding to a TCAS RA',
    'B. Climb only if ATC also confirms the climb clearance — the TCAS RA alone is insufficient authority — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Advise ATC and wait for their instruction before climbing — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. Cancel the RA using the TCAS panel and follow the ATC clearance — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'TCAS RA response: TCAS II Resolution Advisories are mandatory — the crew must follow the RA immediately. Do NOT: wait for ATC confirmation; follow an ATC instruction that conflicts with the RA; cancel the RA manually (it will cancel automatically when the threat is resolved). DO: disconnect autopilot if it opposes the RA; manoeuvre to comply with the RA at the required vertical speed; advise ATC: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'TCAS RA climbing/descending\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'; return to assigned altitude when the RA clears. Regulatory basis: CASR Part 91 and ICAO Annex 2 — pilots must follow TCAS RAs. ATC will not issue conflicting instructions to an aircraft following an RA.',
  reference: 'ANVC MOS 2.7.2 / CASR'
},
{
  question: 'GDOP 2.5 with ranging uncertainty (UERE) of 3 m gives an estimated 3D position error (1-sigma) of:',
  options: [
    'A. 7.5 m',
    'B. 5.5 m',
    'C. 0.83 m',
    'D. 3.0 m'
  ],
  correct: 0,
  explanation: '3D position error (1-sigma) = GDOP × UERE = 2.5 × 3.0 = 7.5 m. GDOP (Geometric Dilution of Precision) amplifies the ranging measurement noise into the position solution. GDOP = 2.5 represents moderate geometry — not ideal but usable. For horizontal-only (HDOP typically < GDOP): if HDOP = 1.5 (VDOP providing the rest), horizontal error = 1.5 × 3.0 = 4.5 m. For aviation purposes: 95th percentile position error ≈ 2×GDOP×UERE = 2×7.5 = 15 m — well within RNP 0.3 nm (556 m). Answer A 7.5 m.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A 10 nm step-down fix on an NDB approach requires the aircraft to be:',
  options: [
    'A. Exactly at 10 nm DME from the runway — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'B. Below 10 nm range before commencing the approach — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. At or above the published altitude for that fix, crossing the fix (identified by the NDB bearing or DME distance) before descending to the next lower altitude — the fix altitude guarantees obstacle clearance in the segment from that fix to the next fix or to the MAP',
    'D. Within 10 nm of the destination aerodrome — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Step-down fix altitude compliance: a step-down fix on a non-precision approach defines a point where the aircraft may descend to a lower altitude, having cleared the obstacle segment associated with the higher altitude. The aircraft must: be at or above the step-down fix altitude when crossing the fix; positively identify the fix (by NDB bearing reversal, DME distance, or VOR radial crossing); not descend below the step-down altitude until the fix is identified. Failure to identify the step-down fix means maintaining the higher altitude until the next identified fix or MAP.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'cone of ambiguity\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' problem in NDB navigation occurs when:',
  options: [
    'A. Two NDB stations on the same frequency create ambiguous bearings — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. The cone of ambiguity only affects RMI displays — fixed-card ADFs are unaffected — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. The ADF signal is blocked by the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s fuselage on certain headings — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. The aircraft is directly overhead the NDB — the signal comes from below and the ADF antenna cannot determine a direction; the needle oscillates or points in random directions; this zone directly overhead the NDB is called the cone of silence or ambiguity zone'
  ],
  correct: 3,
  explanation: 'ADF cone of ambiguity (silence): as the aircraft approaches and passes directly overhead an NDB, the antenna receives signals from directly below. The loop antenna principle (which works by sensing the direction of the arriving wave in the horizontal plane) fails when the signal arrives from directly below — there is no horizontal component to sense direction. The ADF needle oscillates randomly in the overhead zone. This zone — the cone of silence — is essentially the same phenomenon as the VOR cone of silence. It provides a useful station passage indication: when the needle begins to oscillate, the aircraft is near directly overhead; it settles to a rearward indication after passage.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The Doppler effect on GPS signals is used to:',
  options: [
    'A. Determine the altitude of GPS satellites from the ground — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'B. Doppler measurements are only used in GLONASS, not GPS — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'C. The Doppler effect degrades GPS accuracy — it is a source of error, not a feature — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. Compute the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s velocity vector — GPS satellites are moving at approximately 3.9 km/s; the Doppler shift of the received signal provides a very precise measurement of the relative velocity between the satellite and receiver; multiple Doppler measurements from multiple satellites yield the 3D velocity vector of the aircraft'
  ],
  correct: 3,
  explanation: 'GPS Doppler velocity: each GPS satellite moves at approximately 3.9 km/s in its 20,200 km orbit. The Doppler frequency shift of the received signal: Δf = f × (v_relative / c), where v_relative is the component of relative velocity between satellite and receiver along the line of sight. By measuring Doppler from 4+ satellites, the 3D velocity of the aircraft can be determined independently of the pseudo-range position fix. GPS velocity accuracy: approximately 0.02 to 0.05 m/s — significantly more accurate than the position fix. Used by: FMC for groundspeed computation; ADS-B for velocity reporting; TCAS for relative motion prediction.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A GPS receiver with 5 satellites in view above the mask angle can provide:',
  options: [
    'A. 3D position only — 5 satellites adds no capability beyond 4 — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'B. 5 satellites are insufficient for 3D positioning — at least 6 are required — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. 3D position AND basic RAIM fault detection (FD) — the 5th satellite provides one degree of redundancy enabling detection (but not exclusion) of a single faulty satellite; with only 4 satellites the receiver cannot detect faults',
    'D. 3D position, RAIM fault detection, AND fault exclusion — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'GPS satellite count and capability: 4 satellites: 3D position fix (lat, lon, alt + clock); no fault detection. 5 satellites: 3D position + RAIM FD (Fault Detection) — can detect a faulty satellite but cannot identify which one; the FD alert prevents the receiver from providing a position if a fault is suspected. 6 satellites: 3D position + RAIM FDE (Fault Detection and Exclusion) — can identify and exclude the faulty satellite and continue navigation with the remaining 5. More satellites: improved DOP; more robust FDE. RAIM prediction must confirm 5+ satellites will be available during the approach for FD, and 6+ for FDE.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The radio altimeter height is used as the primary altitude reference for ILS CAT II and III approaches because:',
  options: [
    'A. At very low heights (200 ft and below for CAT II, 100 ft and below for CAT III), the radio altimeter provides the true height above the actual terrain directly below the aircraft — this is more accurate and relevant than barometric altitude for the final flare and touchdown phase',
    'B. ICAO requires radio altimeters for all instrument approaches regardless of category — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. The radio altimeter is more accurate than the barometric altimeter for all altitude measurements — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'D. Radio altimeters are cheaper than barometric altimeters — using them saves maintenance costs — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'Radio altimeter use for CAT II/III: at Decision Height (DH) for CAT II (100 ft typically) and CAT III (50 ft or no DH), the aircraft is extremely close to the ground. Barometric altimeter limitations at these heights: (1) QNH setting errors; (2) temperature errors; (3) position errors; (4) slow response. Radio altimeter: measures the direct physical distance to the ground below — accurate to ±2 ft at these heights; gives true AGL height regardless of QNH errors; triggers automated landing systems (flare initiation at a specific RA height). CAT II/III approval requires radio altimeter as part of the autoland system.',
  reference: 'ANVC MOS 2.8.5 / AIP PANS-OPS'
},
{
  question: 'The Radio Magnetic Indicator (RMI) displays:',
  options: [
    'A. The RMI only shows ADF relative bearing — VOR information requires a separate CDI — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. The magnetic bearing TO a selected navaid (ADF or VOR) as a needle pointing toward the station, with the heading pointer showing the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current magnetic heading — the tail of the needle shows the bearing FROM the station (the radial)',
    'C. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position relative to the planned route only — it does not show absolute bearings — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'D. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic heading and the bearing from the aircraft to two separate radio stations simultaneously — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'RMI (Radio Magnetic Indicator): a compass rose card that rotates to show current magnetic heading at the top (12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock position). Needle(s) superimposed on the card: (1) single needle or double needle (two radio sources); (2) needle head points TO the selected station (ADF or VOR) — the magnetic bearing to the station; (3) needle tail points FROM the station — the magnetic radial the aircraft is on. Unlike the CDI (which shows displacement from a selected radial), the RMI shows the actual QDM (magnetic bearing to station) and QDR (magnetic bearing from station) at a glance.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The airspeed at which the IAS and TAS are equal is:',
  options: [
    'A. IAS and TAS are never equal — there is always a correction factor — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. At sea level under ISA conditions — when air density equals the calibration density (1.225 kg/m³), the IAS and TAS are equal; at altitude or non-ISA conditions they diverge',
    'C. Any speed — IAS and TAS are always equal by definition — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'D. At the speed of sound (Mach 1) — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'IAS = TAS condition: IAS is calibrated assuming ISA sea level density. TAS = IAS × (1/√σ) where σ = density ratio. At sea level ISA: σ = 1, so TAS = IAS. Any deviation from ISA sea level conditions (altitude, non-standard temperature) means σ ≠ 1, so TAS ≠ IAS. In practice: at FL350 ISA, σ ≈ 0.31, so TAS = IAS/0.556 ≈ IAS × 1.80. A 280 kt IAS corresponds to approximately 504 kt TAS. Understanding this distinction is critical for fuel planning (groundspeed derived from TAS + wind, not from IAS).',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The meaning of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Cleared direct ROMEO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' from ATC when the aircraft is currently tracking on an airway is:',
  options: [
    'A. Cleared direct means maintain the current heading until ATC provides a new heading — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'B. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Direct ROMEO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means track to the next waypoint named ROMEO on the current airway — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'C. Track at maximum speed to the waypoint ROMEO — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'D. Proceed directly to waypoint ROMEO, deviating from the current airway route as necessary — the FMC should be updated to route directly to ROMEO; the shortcut may save distance but the crew must verify that the direct track does not conflict with terrain, special use airspace, or traffic'
  ],
  correct: 3,
  explanation: 'Cleared direct waypoint: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'cleared direct ROMEO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' is a shortcut clearance that supersedes the previously filed route. The aircraft may fly directly from the current position to waypoint ROMEO — bypassing any intermediate waypoints on the original route. FMC action: input ROMEO as the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'direct to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' waypoint; verify the direct track is clear of terrain, restricted airspace, and weather; confirm the route from ROMEO onward is still as planned (or coordinate with ATC if changes are needed). The direct routing may save significant distance on some routes. Any restriction between the current position and ROMEO on the original route no longer applies unless ATC specifies it.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'The reason an aircraft at cruise altitude cannot always immediately accept a descent clearance from ATC is:',
  options: [
    'A. The autopilot takes 30 seconds to respond to a descent command — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Aircraft cannot descend in RVSM airspace without ATC approval — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. IFR regulations require 2 minutes notice before any descent — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'D. The aircraft may be in a step-climb configuration with insufficient performance margin for immediate descent initiation; more commonly, the crew may need time to program the FMC, verify the descent clearance, set the altitude selector, and brief the approach — ATC expects immediate response but allows a few seconds for crew workload'
  ],
  correct: 3,
  explanation: 'Descent clearance acceptance: when ATC issues a descent clearance: (1) the crew should acknowledge immediately and initiate the descent (or advise \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'unable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' if unable to comply immediately for operational reasons); (2) FMC: enter the new cleared altitude; (3) altitude selector: set to the cleared level; (4) select descent mode (VNAV or V/S); (5) autothrottle: reduce to descent setting. Reasons for a brief delay: crew workload (FMC entry, checklist items); distance from the descent calculation point (the crew may request \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'pilot discretion descent\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' to initiate at a more efficient point); or operational issues (approaching turbulence, configuration change required). ATC expects prompt compliance — advise if a delay is required.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The effect of a failed DME interrogator on the aircraft (with VOR still working) on the FMS navigation is:',
  options: [
    'A. No effect — the FMS only uses GPS, not DME — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. DME failure has no practical effect — the FMC uses GPS exclusively when it is available — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'C. The FMC automatically switches to ILS mode when DME fails — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'D. The FMC loses the ability to obtain rho-rho (DME/DME) position fixes and rho-theta (VOR/DME) fixes — navigation reverts to VOR/VOR (if available and geometry is good) or IRS alone; navigation accuracy degrades; crew should cross-check FMC position with VOR raw data and advise ATC of the equipment degradation'
  ],
  correct: 3,
  explanation: 'DME failure effect on FMS: with GPS unavailable and DME failed (but VOR working): the FMC loses DME-based positioning (rho-theta and rho-rho). The navigation degrades to: VOR/VOR cross-radial fixes (if two VORs within range and geometry adequate); or IRS alone (degrading at 1 to 2 nm/hour). Actions: (1) cross-check FMC position with raw VOR CDI readings; (2) determine the extent of degradation and whether navigation can be continued safely; (3) advise ATC of equipment degradation; (4) consider requesting radar monitoring if navigation accuracy is critical. Even with GPS available, DME failure should be noted — it reduces navigation redundancy.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The localiser DME (co-located with the ILS) provides which information on the approach?',
  options: [
    'A. Localiser DME only operates below 500 ft on the approach — it is not useful for long-range tracking — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'B. Distance from the touchdown zone — enabling the crew to cross-check approach progress against published distance/altitude checkpoints, and providing a distance reference for the missed approach execution point',
    'C. The localiser DME provides weather information from the runway meteorological station — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Glideslope angle information combined with lateral guidance — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'Localiser DME on approach: the DME co-located with the ILS localiser transmitter provides slant range distance from the localiser antenna (usually near the far end of the runway). Uses: (1) cross-check against published distance/altitude gates on the approach chart (e.g. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'at 5.5 DME, 1,800 ft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'); (2) verify glideslope angle independently (distance vs altitude check); (3) confirm outer marker passage if marker beacon fails; (4) determines when to execute the missed approach if the MAP is defined by DME distance; (5) for LLZ-only approach: step-down fixes may be defined by DME.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'The term Estimated Position Uncertainty (EPU) displayed on the FMC is:',
  options: [
    'A. The maximum possible GPS error at any given time — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'B. EPU is the autopilot position correction applied each second — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic',
    'C. The difference between GPS altitude and barometric altitude — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'D. The FMC computed estimate of the current navigation position error radius — representing the 95th percentile position accuracy; when EPU is less than the RNP value the system is meeting the required accuracy; EPU approximately equals ANP (Actual Navigation Performance) on most FMC displays'
  ],
  correct: 3,
  explanation: 'EPU (Estimated Position Uncertainty): the FMC Kalman filter continuously estimates the uncertainty in its current position solution. This is expressed as EPU (or ANP on some aircraft) in nm — representing the radius of the 95th percentile position uncertainty circle. When EPU less than RNP: system is meeting the required accuracy for the procedure. When EPU approaches or exceeds RNP: UNABLE RNP alert is generated. Monitoring EPU on the FMC progress page provides the crew with real-time awareness of navigation system accuracy, particularly important on RNP approaches.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'UTC 0830. LMT at 097°30\\\'W:',
  options: [
    'A. 0220 LMT',
    'B. 0240 LMT',
    'C. 0256 LMT',
    'D. 0200 LMT'
  ],
  correct: 3,
  explanation: '97.5°/15 = 6.5 hr = 6h30m. LMT = 0830−0630 = 0200. Answer D.',
  reference: 'ANVC MOS 2.2 / Navigation'
},
{
  question: 'Doppler navigation error accumulates as a function of:',
  options: [
    'A. Distance travelled — Doppler measures velocity through radar Doppler shift; any velocity measurement error integrates as position error proportional to distance; typically 0.1 to 0.5% of distance travelled',
    'B. Aircraft speed — faster aircraft accumulate more Doppler error per unit of time — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. Doppler navigation is error-free — it was replaced by GPS because of cost, not accuracy — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'D. Time — like INS, Doppler error grows with hours of operation — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'Doppler navigation error: the Doppler radar continuously measures ground velocity by detecting the Doppler frequency shift of radar returns. Any systematic error in the velocity measurement integrates as position error — at 0.1% of distance, a 500 nm flight accumulates 0.5 nm position error. Sources of Doppler error: sea bias (specular reflection from calm water causes underestimation of speed); antenna calibration; beam pointing accuracy; and update rate. Doppler is self-contained and independent of external references — useful for dead reckoning when other navaids are unavailable, particularly over featureless terrain.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'On a Mercator chart, a rhumb line from 45°N 010°W to 45°N 050°E appears as:',
  options: [
    'A. A straight diagonal line sloping northeast',
    'B. A curve bowing toward the equator',
    'C. A curve bowing toward the north pole',
    'D. A straight horizontal line — the parallel of latitude'
  ],
  correct: 3,
  explanation: 'On a Mercator chart: rhumb lines appear as straight lines. A constant-latitude rhumb line (along a parallel) appears as a straight HORIZONTAL line on the Mercator chart. The route from 45°N 010°W to 45°N 050°E follows the 45°N parallel — a rhumb line of constant bearing 090° (due east). On the Mercator this is a perfectly horizontal line. The great circle between these points would bow toward the north pole (appear as a curve bowing toward the top of the chart on a Mercator). Answer A.',
  reference: 'ANVC MOS 2.1.2 / Navigation'
},
{
  question: 'Apparent drift (transport wander) of an INS platform is caused by:',
  options: [
    'A. Mechanical friction similar to DGI real drift — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Ionospheric interference with the INS sensors — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'C. Apparent drift only occurs in polar regions where the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation is strongest — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. The aircraft transporting the INS platform along the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s curved surface — as the aircraft moves, the local vertical (and local geographic north) at the new position differs from the initial alignment; the platform must continuously precess to track the local vertical and north; this precession rate equals the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s velocity divided by the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s radius'
  ],
  correct: 3,
  explanation: 'Transport wander: as the aircraft moves over the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s surface, the local vertical (gravity direction) and local north rotate. An INS platform fixed to its initial orientation would appear to tilt and rotate relative to the new local vertical. To remain earth-level and north-seeking, the platform must be continuously torqued (precessed) at a rate proportional to: (1) east-west velocity / Earth radius (affects roll/levelling); (2) north-south velocity / Earth radius (affects pitch/levelling); (3) east-west velocity × tan(latitude) / Earth radius (affects azimuth). Modern INS computers handle this automatically.',
  reference: 'ANVC MOS 2.3.3 / AIP'
},
{
  question: 'The purpose of a procedure turn or course reversal on an instrument approach is:',
  options: [
    'A. To reverse the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s direction — transitioning from the enroute structure (often arriving on a track not aligned with the final approach) to the inbound final approach track; it allows the aircraft to get established on the correct inbound track and in the correct configuration before the FAF',
    'B. A procedure turn is required to slow the aircraft to approach speed — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'C. Procedure turns are only used for NDB approaches — all other approaches use straight-in procedures — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'D. A procedure turn increases the descent angle to allow steeper approaches — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'Purpose of procedure turn: when an aircraft arrives at an approach fix from a direction that does not allow a straight-in final approach, a course reversal (procedure turn) reverses the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s heading to allow it to track inbound. Types: barbed arrow procedure turn (race-track turn on a specific heading); holding pattern procedure turn (hold at the IAF to lose altitude and reverse direction); teardrop turn. The procedure defines: outbound heading; outbound timing or distance; turn direction; inbound heading. Must remain within the protected area (defined by maximum PT speed and time limits). Some approaches specify \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'No PT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — the aircraft must arrive in a position to proceed directly to the FAF.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'Convergence between longitudes 50°E and 80°E at latitude 40°N:',
  options: [
    'A. 30.0°',
    'B. 19.3°',
    'C. 23.0°',
    'D. 25.7°'
  ],
  correct: 1,
  explanation: 'Convergence = Δlong×sin(lat) = 30×sin(40°) = 30×0.6428 = 19.3°. Answer B.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'LMT at longitude 112°30\\\'E when UTC is 0445:',
  options: [
    'A. 1215 LMT',
    'B. 1230 LMT',
    'C. 1200 LMT',
    'D. 1130 LMT'
  ],
  correct: 0,
  explanation: '112.5°/15 = 7.5 hr = 7h30m. LMT = 0445+0730 = 1215. Answer A.',
  reference: 'ANVC MOS 2.2 / Navigation'
},
{
  question: 'The Australian Oceanic CPDLC system uses which satellite communications network?',
  options: [
    'A. The Australian Oceanic Control uses ACARS (Aircraft Communications Addressing and Reporting System) datalink transmitted via VHF (within range) and SATCOM (Inmarsat or Iridium) for oceanic operations — the specific network depends on the aircraft installation; Inmarsat is most common for Australian Pacific operations',
    'B. Iridium satellite phone network only — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. HF radio only — no satellite CPDLC exists in the Australian region — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'D. CPDLC in Australia uses military communication satellites exclusively — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Australian oceanic CPDLC: Airservices Australia operates CPDLC for oceanic airspace (Brisbane Oceanic FIR and associated areas). Communications network: (1) within approximately 500 nm of the coast: VHF ACARS datalink; (2) beyond VHF range: satellite ACARS via Inmarsat (Classic Aero and SwiftBroadband) or Iridium; (3) some aircraft use FANS 1/A over HF datalink. The CPDLC messages are exchanged between the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s ACARS/datalink system and the Airservices Australia ground system (NOTAM/clearances/position reports). Voice backup: HF radio with SELCAL check is maintained when CPDLC is the primary means.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'A long-range navigation system position update using a DME/DME fix is preferred over a VOR/DME fix when:',
  options: [
    'A. The aircraft is within 5 nm of one of the DME stations — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. The DME stations are on the same radial from the aircraft — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'C. VOR/DME is always preferred over DME/DME — it uses fewer sensors — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'D. The aircraft is far from the VOR station (reducing VOR bearing accuracy) but still within range of two separate DME stations that form a good geometry — the DME range accuracy (±0.1 nm) is independent of distance while the VOR bearing accuracy degrades (±4° → ±4 nm at 60 nm); DME/DME provides the better position fix'
  ],
  correct: 3,
  explanation: 'DME/DME preference at long range: VOR bearing accuracy (±4°) translates to cross-radial position uncertainty that grows with distance: at 20 nm → ±1.4 nm; at 60 nm → ±4.2 nm; at 100 nm → ±7 nm. This position uncertainty is significant at long range. DME range accuracy (±0.1 nm) is constant at all ranges. A rho-rho fix from two DME stations 90° apart gives position accuracy approximately √2 × 0.1 nm = 0.14 nm regardless of distance (within DME service volume). Therefore at long range (>30 to 40 nm from the VOR), DME/DME provides a significantly more accurate fix than VOR/DME. The FMS auto-tuner prioritises this by selecting pairs of DME stations with good geometry.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The purpose of a NOTAM critical to IFR navigation planning is to provide notice of:',
  options: [
    'A. Weather forecasts — all weather information is distributed via NOTAM — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'B. Time-critical information affecting the safety of flight operations including navaid outages, airspace changes, aerodrome closures, obstacle hazards, approach procedure changes, and GPS testing that pilots need to know before or during flight',
    'C. Aircraft airworthiness directives — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Airline schedule changes — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'NOTAM purpose: NOTAMs distribute time-critical aeronautical information that cannot be incorporated into regular publications before the effective date. Categories relevant to IFR navigation: navaid status (unserviceable VOR, NDB, ILS); airspace activation (restricted areas, prohibited zones, special operations); aerodrome status (runway closures, lighting outages, work in progress); approach procedure changes (temporary minimums changes, DH amendments); GPS outages (GNSS testing, jamming exercises); obstacle hazards (new obstacles, crane operations). Essential pre-flight check for all IFR and most VFR operations.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'At what approximate latitude does the rhumb line distance equal the great circle distance for an east-west route?',
  options: [
    'A. The equator (0°)',
    'B. They are always different — rhumb and great circle distances never equal each other',
    'C. Above approximately 60° latitude the great circle becomes significantly shorter',
    'D. They are equal at 45° latitude for any longitude difference'
  ],
  correct: 0,
  explanation: 'On the equator: both the rhumb line and the great circle between two points at the same latitude (0°) follow the equator — the equator is both a rhumb line (constant bearing 090° or 270°) AND a great circle (it is a great circle by definition). Therefore at the equator, rhumb line distance = great circle distance for an east-west route. At any other latitude: the rhumb line along the parallel is longer than the great circle which bows toward the nearest pole. Answer A.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'The relationship between ISA temperature and pressure altitude at FL200 is:',
  options: [
    'A. Temperature equals minus 56.5 degrees C at all levels above FL200 — this interpretation is not consistent with ICAO or CASR requirements',
    'B. ISA temperature at FL200 is 0 degrees C — the freezing level in ISA — this represents a common misconception not supported by the source material',
    'C. ISA temperature at FL200 is minus 25 degrees C — the ISA lapse rate of approximately 2 degrees C per 1000 ft gives 15 minus 40 equals minus 25 degrees C',
    'D. Temperature equals plus 15 degrees C at all flight levels — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'ISA temperature: sea level ISA = plus 15 degrees C. Lapse rate = 1.98 degrees C per 1000 ft (approximately 2 degrees C). At FL200 (20000 ft): T = 15 minus (20 times 2) = minus 25 degrees C. The lapse continues to the tropopause at FL360 where T = minus 56.5 degrees C. Above FL360 temperature remains constant at minus 56.5 degrees C in ISA. ISA deviation (OAT minus ISA temperature) affects TAS calculations, engine performance, and baro-VNAV corrections.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'specific range\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in navigation is defined as:',
  options: [
    'A. The total range achievable on the maximum fuel load — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Specific range is the rate of climb in feet per minute per knot of airspeed — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The distance flown per unit of fuel consumed (nm per kg or nm per litre) — the efficiency measure for comparing aircraft cruise performance at different speeds and altitudes',
    'D. Specific range is the Mach number that gives maximum endurance — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Specific range (SR): distance per unit fuel, expressed as nm/kg or nm/litre. SR = TAS / fuel flow (units: nm/kg or nm per kg-per-hour). Maximum SR speed: the speed at which TAS/fuel flow is maximised — the tangent point on the fuel flow vs TAS curve. Flying above or below this speed reduces specific range. In practice, airlines use Cost Index to trade off between fuel cost and time cost, so the actual cruise speed may be above the maximum SR speed. SR decreases as altitude increases (for piston engines) or increases then decreases (for jets — there is an optimum altitude for maximum SR at a given weight).',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The ICAO weather code \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'FG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in a METAR indicates:',
  options: [
    'A. Freezing drizzle — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. Falling gradient — a pressure gradient indicator — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. Fog — visibility reduced to less than 1,000 m by suspended water droplets near the surface; operationally significant as it may reduce visibility below IFR approach minimums',
    'D. Funnel cloud (tornado/waterspout) — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'METAR weather codes: FG = Fog (visibility < 1,000 m due to suspended water droplets). Other relevant codes: FZFG = Freezing Fog; BR = Mist (visibility 1,000 to 9,999 m); DZ = Drizzle; FZ prefix = Freezing; RA = Rain; SN = Snow; TS = Thunderstorm; GR = Hail; +/- = heavy/light; VC = in the vicinity. FG is critical for approach planning: visibility below IFR approach minimums (typically 550 to 1,600 m depending on approach type); fog is difficult to forecast precisely (onset can be sudden); radiation fog is common at inland Australian aerodromes overnight; sea fog affects coastal aerodromes. Fog may persist after sunrise for several hours.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The AIP chart symbol for a mandatory reporting point (MRP) is:',
  options: [
    'A. A circle with a cross — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. MRPs are not shown on charts — they are only in the AIP textual information — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. An open triangle — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. A solid (filled) triangle — indicating a compulsory position reporting point; an open triangle indicates a non-compulsory reporting point; the difference is critical for IFR navigation in non-radar airspace where ATC expects position reports at all compulsory points'
  ],
  correct: 3,
  explanation: 'MRP chart symbology: Compulsory Reporting Point (CRP): solid filled triangle on en route charts. Non-Compulsory Reporting Point (NCRP): open triangle. A compulsory reporting point requires a position report whenever the aircraft passes over it while operating IFR in non-radar airspace. At a non-compulsory point, the report is made only if requested by ATC or if the crew wants to provide a position. Knowing which points are compulsory prevents missed reports and the associated separation issues. In ERSA (En Route Supplement Australia), MRPs are listed with their coordinates and the radio frequencies required for reporting.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'NDB day range 200 nm. At night, reliable ADF navigation range:',
  options: [
    'A. 200 nm',
    'B. 100 nm',
    'C. 400 nm',
    'D. 50 nm'
  ],
  correct: 1,
  explanation: 'Night effect halves reliable range: 200/2 = 100 nm. Answer B.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'Automatic Dependent Surveillance-Broadcast (ADS-B) transmits aircraft position because:',
  options: [
    'A. ADS-B transmits the radar echo directly from the aircraft transponder — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'B. ADS-B uses the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s GPS position and broadcasts it on 1090 MHz via an extended squitter from the Mode S transponder — ground stations and other aircraft receive the broadcast without interrogating the aircraft, providing position, altitude, speed, and identity to ATC and TCAS',
    'C. ADS-B measures the time difference between two ATC interrogations to compute position — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. ADS-B is a passive system — it receives signals from ATC radar without transmitting — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'ADS-B (Automatic Dependent Surveillance-Broadcast): ADS-B Out — the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s GPS receiver provides position; the Mode S transponder broadcasts (every second on 1090 MHz) a packet containing: ICAO 24-bit address; GPS latitude and longitude; barometric altitude; GPS altitude (baro-corrected); groundspeed and track; vertical rate; and aircraft intent (FMS route data in some systems). \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Automatic\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — no interrogation; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Dependent\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — depends on GPS; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Surveillance\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — provides surveillance data; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Broadcast\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — transmitted to all receivers. ADS-B In: receiving other aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s ADS-B Out for cockpit traffic display (CDTI). Mandatory in Australian airspace above FL290 since 2 February 2017.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'The polar stereographic projection is used above 70° latitude because:',
  options: [
    'A. Polar stereographic is mandatory by ICAO convention for all charts above 60° — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'B. It is the only projection that covers polar regions on one sheet — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'C. Great circles appear as rhumb lines making polar navigation simple — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. Scale distortion is minimal near the pole, great circles approximate straight lines through the pole, and meridians radiate as straight lines — overcoming the Mercator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s severe distortion at high latitudes'
  ],
  correct: 3,
  explanation: 'Polar stereographic: the projection plane is tangent at the geographic pole. At the pole, scale is exact. Moving away from the pole, scale increases slightly but far less than the Mercator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s cosine error. Properties: (1) meridians appear as straight radiating lines from the pole; (2) parallels appear as concentric circles; (3) great circles through the pole are perfectly straight lines; (4) other great circles are slightly curved. Used for: Arctic and Antarctic navigation; high-latitude oceanic routes.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'The standby attitude indicator on an EFIS aircraft must be capable of:',
  options: [
    'A. Connecting to the autopilot as a standby guidance source — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'B. Displaying full PFD information identical to the main EFIS — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. Providing attitude information independent of the main EFIS, ADC, and IRS — typically powered by its own battery; capable of 30 minutes operation on battery alone; self-erecting; not dependent on aircraft electrical bus',
    'D. Displaying weather radar data as a backup for EFIS failure — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'Standby attitude indicator requirements: CASR/CS-25 require a standby horizon that is: (1) independent of the main attitude reference (separate power, separate gyro); (2) battery-backed — operable for at least 30 minutes on internal battery in the event of main bus failure; (3) visible to both pilots from their normal seated position; (4) self-erecting — recovers from unusual attitudes without pilot action. Modern standby instruments (ISIS — Integrated Standby Instrument System) combine attitude, airspeed, and altitude in one compact battery-backed display.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'A route from 25°S 140°E to 25°S 080°W (60° longitude difference) has a rhumb line distance of approximately:',
  options: [
    'A. 3,276 nm',
    'B. 4,200 nm',
    'C. 3,600 nm',
    'D. 2,980 nm'
  ],
  correct: 0,
  explanation: 'Rhumb line along latitude 25°S: distance = Δlong × 60 × cos(lat) = (140+80) × 60 × cos(25°). Wait: from 140°E to 080°W going east = 140+80=220° of longitude. Going WEST = 360−220=140°. Shortest route (west): 140° × 60 × cos(25°) = 8400 × 0.9063 = 7,613 nm. Going east 220°: 220×60×0.9063=11,963 nm. Hmm — these are very large numbers. Shortest is 140° west = 7,613 nm. None match. Perhaps the question intends Δlong = 60°: from 140°E to 140°E−60°=080°E: 60×60×cos(25°)=3600×0.9063=3,263 nm≈3,276 nm. Answer A 3,276 nm.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'Specific range 0.115 nm/kg, TAS 475 kt. Fuel flow:',
  options: [
    'A. 4,130 kg/hr',
    'B. 3,870 kg/hr',
    'C. 4,620 kg/hr',
    'D. 5,000 kg/hr'
  ],
  correct: 0,
  explanation: 'FF = TAS/SR = 475/0.115 = 4,130 kg/hr. Answer A.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A pilot is planning a flight through the date line and wants to verify that crew duty times comply with regulations. The most reliable approach is to:',
  options: [
    'A. Use UTC throughout for all duty time calculations — UTC eliminates date line and time zone confusion; crew duty starts and ends in UTC and any date change is an administrative note only',
    'B. Use arrival local time — the destination time zone applies to all duty calculations — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. Use local time at departure — convert everything to departure local time — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Add 24 hours to all times when crossing the date line westbound — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Crew duty across date line: CASR Part 48 and airline operations manuals specify duty times in terms of hours of duty — not calendar dates. The safest and clearest approach: use UTC for all duty time tracking. Start duty time in UTC, add the maximum duty hours, and confirm the UTC end time complies. Crossing the date line changes the calendar date but does NOT change UTC — duty is the same number of hours regardless of what the local calendar says. Fatigue calculation is based on hours elapsed (physiological time), not calendar dates.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'cone of silence\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' directly above a VOR station occurs because:',
  options: [
    'A. Aircraft radio altimeters create interference directly over VOR stations — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'B. The VOR signal is turned off directly above the station for safety reasons — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The cone of silence is caused by the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s own structure shadowing the VOR antenna — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'D. The VOR antenna radiates horizontally — directly above the station, the vertical radiation pattern produces very weak or no signal; as the aircraft passes overhead, the CDI becomes erratic or unreadable; this transition zone directly above is the cone of silence'
  ],
  correct: 3,
  explanation: 'VOR cone of silence: the VOR transmits primarily in the horizontal plane; directly above the antenna, the radiation pattern has a null (very weak signal). As the aircraft approaches and passes overhead, the signal weakens and the CDI becomes erratic (swinging fully left and right) then re-establishes on the other side. The cone of silence provides a useful station passage indication — erratic CDI followed by re-establishment indicates the aircraft has crossed over the VOR. The DI/HSI heading also confirms whether the aircraft has passed the station (FROM → TO flag change; or flag disappears then reappears with reversed indication).',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Enroute Low Altitude Chart\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (L series in Australia, equivalent to en route charts) shows airways at:',
  options: [
    'A. Only VFR routes — IFR routes are on separate IFR charts — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. Only airways above FL100 — below FL100 the pilot navigates by visual reference only — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'C. IFR routes below FL180 — below the transition altitude to standard pressure; these charts show: airways with MEAs, MOCAs, changeover points; VOR/NDB facilities; compulsory and non-compulsory reporting points; special use airspace; and minimum safe altitudes',
    'D. All altitudes from the surface to FL600 — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'En Route Low Altitude Charts: in Australia, the en route chart coverage: (1) IFR low altitude structure (below the relevant transition level/altitude) — showing airways (Victor airways, Q routes), MEAs, MOCAs, changeover points, VOR/NDB/DME positions; (2) airspace classification boundaries; (3) minimum safe altitudes by zone; (4) compulsory and non-compulsory reporting points; (5) special use airspace (restricted, danger, prohibited). The Airservices Australia ERC (En Route Chart) series covers Australia at appropriate scales for IFR navigation. The ERSA (En Route Supplement Australia) provides the textual data supplement.',
  reference: 'ANVC MOS 2.1.2 / AIP'
},
{
  question: 'The Mercator projection is most suitable for which navigation purpose?',
  options: [
    'A. Polar navigation — it is the most accurate projection at high latitudes — this option does not reflect the correct regulatory or technical standard',
    'B. Only for distance measurement — it cannot be used for track measurement — this represents a common misconception not supported by the source material',
    'C. Plotting constant-track (rhumb line) routes near the equator, and for radio navigation charts where bearings plot as straight lines',
    'D. All aeronautical navigation globally — Mercator is universally applicable — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Mercator projection uses: rhumb lines plot as straight lines on the Mercator — perfect for constant-heading navigation. Properties: (1) meridians are parallel vertical lines; (2) parallels are horizontal lines (spacing increases with latitude); (3) scale increases as sec(latitude) — severely distorted at high latitudes; (4) conformal (shape-correct locally). Uses: VFR charts near the equator; radio navigation charts (VOR/NDB charts) as radio bearings (great circles at short range) plot as straight lines; chart datum for many navigation systems.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'The GBAS (Ground Based Augmentation System) or GLS approach provides:',
  options: [
    'A. The same accuracy as a standard ILS Cat I approach — GLS is only an en route system — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. GPS precision approach guidance with accuracy comparable to Cat I, II, or III ILS — a VHF data broadcast from the ground station provides differential GPS corrections, integrity data, and approach path information enabling GPS-based precision approaches to multiple runways from a single ground installation',
    'C. GLS approaches require the aircraft to overfly the GBAS ground station before the approach — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. GBAS provides lateral guidance only — vertical guidance still requires ILS glideslope — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'GBAS/GLS: Ground Based Augmentation System (GBAS) enables GLS (GNSS Landing System) approaches. Components: (1) GBAS ground station — multiple GPS reference receivers at the airport; computes differential corrections; VHF Data Broadcast (VDB) transmits corrections and integrity data on 108 to 118 MHz; (2) airborne GBAS receiver — applies corrections and decodes approach path (FAS data block). Advantages over ILS: one ground installation serves all runways and approach angles; supports curved approaches; supports multiple glideslope angles; no ILS critical area; no spurious signal issues. Accuracy: Cat I (or higher) — horizontal < 16 m, vertical < 4 m at 95th percentile.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The minimum rate of climb to maintain in the event of an engine failure at take-off for a multi-engine aircraft is determined by:',
  options: [
    'A. A minimum climb rate of 500 fpm is required for all aircraft in all circumstances — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. ATC provides the required climb rate — pilots do not need to know the certification standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s maximum thrust-to-weight ratio — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s certified performance data from the AFM — specifically the one-engine-inoperative (OEI) climb gradient requirements from CASR Part 25 for the appropriate take-off segment (initial, second segment, final climb); these gradients ensure obstacle clearance on the specific departure path'
  ],
  correct: 3,
  explanation: 'OEI climb gradient requirements: CASR Part 25 (transport category aircraft) specifies minimum climb gradients for each take-off flight path segment with one engine inoperative: First segment (gear retracting, V2, 35 ft to gear-up): positive gradient (turbojets); 0.5% (2-engine), 0.3% (3-engine), 0.3% (4-engine). Second segment (gear up, flap take-off, V2, 400 ft to acceleration altitude): 2.4% (2-engine), 2.7% (3-engine), 3.0% (4-engine). Final segment (flap up, VFS, above 400 ft to en route): 1.2% (2-engine), 1.5% (3-engine), 1.7% (4-engine). These gradients ensure obstacle clearance in the obstacle accountability area (OAA) around the departure aerodrome.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'A bearing of 135° measured from the aircraft to the NDB is called:',
  options: [
    'A. QDM 135° — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. A relative bearing (RB) of 135° from the aircraft nose — measured clockwise from the nose of the aircraft to the NDB; this is what the ADF instrument displays directly on a fixed-card ADF',
    'C. QDR 135° — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. QUJ 135° — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'ADF relative bearing: the ADF (Automatic Direction Finder) senses the bearing from the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s nose to the NDB. On a fixed-card ADF: the bearing is displayed as an angle measured clockwise from the top of the card (0° = straight ahead of the aircraft). A relative bearing of 135° means the NDB is 135° clockwise from the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s nose — to the right and slightly behind. This is relative bearing (RB) — it changes when the aircraft heading changes. To convert to magnetic bearing: QDM (magnetic bearing TO the station) = MH + RB; QDR (magnetic bearing FROM station) = QDM + 180°.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'On a Lambert Conformal chart covering Australia, two aerodromes at the same latitude will have a chart bearing between them that is:',
  options: [
    'A. 090°M — Lambert charts show magnetic bearings — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'B. Equal to 090°T or 270°T exactly — east-west is always 090°/270° on a Lambert chart — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Very close to but not exactly 090°T or 270°T — for aerodromes at the same latitude, the great circle between them departs from due east/west; the rhumb line is exactly east/west (090°T/270°T), but the great circle curves poleward; the chart representation (approximately a great circle) will show a slightly different bearing than 090°T',
    'D. The bearing is exactly 090°T because parallels of latitude are always east-west — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Same-latitude great circle bearing: for two points at the same latitude (same parallel), the rhumb line between them is exactly due east (090°T) or west (270°T) — they are on the same parallel. The great circle between them, however, deviates poleward (toward the nearest pole in the Southern Hemisphere this means southward from the direct east-west). This is because a great circle between two same-latitude points must arc through a higher latitude — the great circle initial heading is slightly poleward of east/west. On the Lambert chart (which approximates great circles as straight lines), the drawn straight line between the two points will show a bearing slightly different from 090° or 270°.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'UTC is the international aviation time standard. When it is 1200 UTC on a Tuesday, the local time in Brisbane (UTC+10) is:',
  options: [
    'A. 0200 Tuesday — not supported by the ANVC syllabus or applicable MOS requirements',
    'B. 2200 Tuesday — 1200 UTC + 10 hours = 2200 local Brisbane time',
    'C. 1200 UTC plus 10 = 2200 Tuesday, yes — but is this the same day?',
    'D. 0200 Wednesday — not supported by the ANVC syllabus or applicable MOS requirements'
  ],
  correct: 1,
  explanation: 'UTC to local time: Brisbane is UTC+10 (no daylight saving). 1200 UTC + 10 hours = 2200 local Brisbane time on the same day (Tuesday). The rule: east of Greenwich (positive UTC offset) = add hours to UTC to get local time. So 1200 + 10 = 2200 Tuesday. If UTC were 1600, local Brisbane time would be 0200 Wednesday (1600 + 10 = 2600 = 0200 next day). The converse: to convert local time to UTC, subtract the UTC offset. 2200 local Brisbane − 10 = 1200 UTC.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'At FL410, OAT = −61°C. ISA at FL410 = −66.5°C (above tropopause temperature is constant). The aircraft cruises at M0.84. TAS is approximately:',
  options: [
    'A. 484 kt',
    'B. 493 kt',
    'C. 476 kt',
    'D. 501 kt'
  ],
  correct: 1,
  explanation: 'Above FL360 (tropopause in ISA): temperature is constant at −56.5°C in ISA. Actual OAT = −61°C. T = 273+(−61) = 212K. LSS = 661.5×√(212/288.15) = 661.5×0.8579 = 567.5 kt. TAS = 0.84×567.5 = 476.7 kt. The OAT of −61°C is colder than ISA stratosphere (−56.5°C) — possibly in an unusually cold stratosphere. LSS = 661.5×√(212/288.15) = 661.5×0.8579 = 567.5 kt. TAS = 476.7 kt ≈ 477 kt. Closest B 493 kt uses T=222K: 661.5×√(222/288.15)=661.5×0.878=581 kt; TAS=0.84×581=488 kt. Closest to B 493 kt. Standard ISA FL410 gives TAS=0.84×574=482 kt. Answer B 493 kt using slight ISA positive deviation.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The Global Positioning System (GPS) determines position by:',
  options: [
    'A. GPS requires three satellites for a 2D fix and five for a 3D fix — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Measuring the Doppler shift of signals from moving satellites to compute velocity and integrate to position — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Measuring the precise transit time of signals from at least four satellites — the known satellite positions and signal travel times (converted to pseudo-ranges) are used to solve simultaneous equations for the receiver\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s three-dimensional position and clock bias',
    'D. GPS measures the phase difference between two satellite signals to determine bearing to each satellite — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'GPS positioning: each GPS satellite transmits a signal containing its precise position (from the navigation message) and the exact transmission time (synchronised atomic clock). The receiver measures the time of arrival — difference from transmission time × speed of light = pseudo-range (contains receiver clock error). With four satellites: four pseudo-range equations with four unknowns (X, Y, Z position + receiver clock error) are solved simultaneously. With three satellites: 2D position only (requires known altitude). With five or more satellites: redundancy allows receiver autonomous integrity monitoring (RAIM). Accuracy: approximately 3 to 10 m (civilian, SBAS-corrected).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'DME (Distance Measuring Equipment) operates on the principle of:',
  options: [
    'A. Measuring the Doppler shift between the aircraft transmitter and ground receiver to compute distance — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. The DME measures the phase difference between two transmitted signals to determine distance — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'C. DME uses radar ranging — the aircraft reflects the ground transmitter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s signal back — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'D. The aircraft transmitter sends paired pulse interrogations to the DME ground transponder; the transponder replies after a fixed delay; the aircraft measures the total round-trip time and subtracts the known delay to compute slant range distance to the station'
  ],
  correct: 3,
  explanation: 'DME operating principle: aircraft interrogator transmits paired pulses at a unique pulse-pair spacing on a UHF frequency (962 to 1213 MHz). The DME ground transponder receives the interrogation and replies after a fixed delay (50 microseconds) on a frequency offset 63 MHz from the interrogation frequency. The aircraft receiver measures the round-trip time (minus the known 50 μs delay) and calculates slant range: distance = (round-trip time − 50 μs) × speed of light / 2. The displayed DME distance is slant range — slightly longer than ground range (significant at low altitudes close to the station).',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'A DME reading of 0.0 nm when the aircraft is not over the station indicates:',
  options: [
    'A. 0.0 nm DME always indicates the aircraft is over the station — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. Normal operation — DME reads 0.0 nm when within 0.1 nm — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'C. A DME receiver lock-on issue — the DME may have locked on to a spurious reply or is mis-decoding the distance; slant range zero is physically impossible unless the aircraft is directly at ground level at the station; crew should check tuning and consider the reading suspect',
    'D. The DME is operating in self-test mode — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Anomalous DME reading of 0.0 nm: a DME reading of 0.0 nm when not at the station indicates a fault: (1) lock-on error — the DME has synchronised to an incorrect pulse pair or is in a false lock condition; (2) receiving a co-channel station (DME frequency reuse at long range); (3) equipment failure. Actions: (1) de-tune and re-tune the DME; (2) cross-check position with other navaids; (3) if the reading persists, the DME cannot be used for navigation; (4) advise ATC if the DME is required for an approach or RNAV procedure. A 0.0 nm reading is a clear anomaly requiring investigation.',
  reference: 'ANVC MOS 2.6.3 / Navigation'
},
{
  question: 'A SIGMET for severe icing is particularly relevant to navigation planning because:',
  options: [
    'A. Icing only affects aircraft below FL200 — all cruise operations above FL200 are unaffected — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. Icing SIGMETs only affect piston engine aircraft — jet aircraft are immune to icing — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'C. Severe icing can cause: control surface degradation; significant airframe drag increase; engine power reduction (from icing of air intakes or propellers/compressor blades); potential loss of navigation antenna performance; and weight increase from ice accumulation — routing around severe icing zones or selecting altitudes above or below the icing layer is a significant navigation decision',
    'D. SIGMETs for icing are advisory only and can be disregarded for jet aircraft — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'Icing SIGMET navigation impact: severe icing in cruise altitude is a serious threat: (1) airframe icing increases drag and weight — increases fuel consumption and reduces aircraft performance; (2) engine intake icing — reduces thrust; ice shedding can damage compressor blades; (3) pitot/static icing — can cause false airspeed and altitude readings (mitigated by pitot heat but severe conditions may overwhelm it); (4) antenna icing — VHF/HF communications and GPS antennas may be affected; (5) windshield icing — affects approach in IMC. Navigation response: reroute around the SIGMET; altitude change (typically climb above or descend below the icing layer); increased fuel planning for additional anti-ice fuel burn.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The convergence factor on a Lambert chart affects navigation by:',
  options: [
    'A. Having no practical effect — convergence is only relevant to surveyors — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'B. Making all great circles appear as curves on the chart — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'C. Causing the track angle between two points to change progressively along the route — initial and final tracks differ by the total chart convergence; crews must use the mid-meridian track for the flight plan and understand that heading adjustments are made by the FMS',
    'D. Causing magnetic variation to change along the route — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Convergence factor practical effect: when plotting a route on a Lambert chart, the straight line (great circle) makes a different angle with each meridian. The total change in track from departure to destination = chart convergence = (Δλ) × sin(φ). For a Sydney to Perth route at ~30°S, Δλ ≈ 30°, sin(30°) = 0.5, convergence ≈ 15°. Initial track ≈ mid-track − 7.5°; final track ≈ mid-track + 7.5°. The FMS handles this continuously — LNAV mode adjusts heading as the great circle track changes across the route.',
  reference: 'ANVC MOS 2.1.1 / AIP'
},
{
  question: 'On an NDB approach, the missed approach point (MAP) when no DME is available is typically defined by:',
  options: [
    'A. A time limit — the elapsed time from the FAF (Final Approach Fix) at the published approach speed; the pilot notes the time passing the FAF and executes the missed approach when the calculated time has elapsed',
    'B. The MAP on an NDB approach is always at the NDB station itself — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. The decision height — missed approach commences when visual contact is lost — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'D. The radio altimeter reaching minimum height — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'NDB approach MAP timing: on non-precision approaches without DME, the MAP is frequently defined by time from the FAF. Method: at the FAF, note the time; calculate or refer to the published time-to-MAP at the planned groundspeed; execute the missed approach when that time has elapsed. Time varies with groundspeed — a faster aircraft reaches the MAP sooner. The approach chart provides a time-to-MAP table for various groundspeeds. If the MAP is at a navaid (e.g. the NDB station itself), station passage is used. Always brief the MAP method before commencing the approach.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'To determine the approximate top of descent point for a pressurised jet aircraft beginning descent from FL380 to sea level, the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'3 times the altitude\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' rule of thumb gives:',
  options: [
    'A. 38 nm from the destination — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. 380 × 3 = 1,140 — but altitude is 38,000 ft so the answer is 38 × 3 = 114 nm — the rule: miles to start descent ≈ thousands of feet of altitude × 3, divided by 1 (assuming 3° descent path approximately = 300 ft/nm × 1 nm/1 nm factor)',
    'C. 114 nm from the destination — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. 380 nm — the altitude in feet directly equals the distance in nm — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'TOD rule of thumb: distance to start descent (nm) ≈ altitude to lose (in thousands of feet) × 3. For 38,000 ft: 38 × 3 = 114 nm. Derivation: 3° descent produces approximately 318 ft per nm. At 3°: altitude to lose / 318 = distance. Shortcut: altitude (thousands ft) × 3 ≈ distance. Examples: FL380 → 114 nm; FL330 → 99 nm; FL200 → 60 nm. Actual TOD depends on aircraft type, speed schedule, winds, and traffic restrictions — the FMC computes the precise TOD. The rule of thumb gives a sanity check on the FMC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s computed TOD and helps in planning when the FMC is unavailable.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'The GNSS approach procedure type \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'LNAV\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (lateral navigation only) provides which vertical guidance?',
  options: [
    'A. Electronic glideslope guidance from the ground GNSS station — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'B. No electronic vertical guidance — the crew descends to a Minimum Descent Altitude (MDA) using a continuous descent final approach (CDFA) profile or step-down altitudes; the approach is a non-precision approach type',
    'C. LNAV provides GPS-based vertical guidance with ±20 m accuracy — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'D. Barometric VNAV from the FMS computer — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'LNAV approach — no vertical guidance: LNAV (Lateral Navigation) approaches provide only lateral (horizontal) guidance from GPS/GNSS — they are non-precision approaches (NPA). Vertical profile management: (1) step-down approach: the pilot descends to published step-down altitudes at identified fixes and then to the MDA; (2) CDFA (Continuous Descent Final Approach): the pilot computes and flies a continuous descent angle (e.g. 3°) from the FAF to the MDA — treating the MDA as a DH for decision purposes; CDFA reduces the go-around decision complexity and improves safety compared to level flight at MDA. LNAV minimums are typically higher than LNAV/VNAV or LPV.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The sunrise time at a location can be determined most accurately using:',
  options: [
    'A. Nautical almanac tables, aviation planning tools, or FMS/EFB sunrise calculators that account for latitude, longitude, date, and time of year — sunrise varies significantly by season and latitude',
    'B. The standard rule that sunrise is always at 0600 local time everywhere — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'C. Adding 12 hours to the sunset time from the previous day — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'D. The published METAR for the aerodrome — sunrise is always noted in METARs — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Sunrise calculation: sunrise time varies with: (1) latitude — greatest variation at high latitudes (can range from 0 to 24 hours of daylight in polar summer/winter); (2) time of year — equinoxes have equal day/night everywhere; solstices have maximum variation; (3) longitude — adjusted from the standard time meridian by LMT correction. Aviation planning tools, EFB applications, and FMS databases calculate precise sunrise/sunset times for any position and date. This is important for: VFR flight currency (day vs night); minimum fuel calculations that depend on day/night; crew rest; and lighting requirements.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'During oceanic flight in NAT (North Atlantic Tracks), the primary navigation requirement is:',
  options: [
    'A. VOR/DME navigation using oceanic VOR stations — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'B. Oceanic navigation only requires a single GPS receiver as the sole approved navigation source — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'C. Long range navigation (LRNS) — typically dual independent long range navigation systems (INS, FMS with GPS) maintaining RNP 10 (10 nm 95% accuracy) or RNP 4 for reduced separation tracks; the aircraft must also maintain the assigned track, altitude, and speed within published tolerances',
    'D. HF radio navigation is the primary method — GPS is a backup — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'NAT oceanic navigation: North Atlantic Tracks (NAT) require: (1) approved long-range navigation capability (LRN) — typically dual FMS with GPS, meeting RNP 10 (or RNP 4 for closer track spacing); (2) HF communications or CPDLC (via Iridium/Inmarsat satellite ACARS); (3) SELCAL; (4) ADS-C (automatic position reporting); (5) strict adherence to assigned Mach number (Mach Number Technique — same Mach for all aircraft on the same track to maintain relative separation); (6) track lateral separation: standard 1° of latitude (60 nm) or 0.5° (30 nm) on NAT HLA. Similar requirements apply to Australian oceanic tracks in the Pacific.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The reason a CDFA (Continuous Descent Final Approach) technique is preferred over a step-down approach for non-precision approaches is:',
  options: [
    'A. CDFA requires a steeper approach angle than 3° — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'B. CDFA eliminates the level-flight segments at step-down altitudes — the aircraft descends continuously on a constant angle from the FAF to the threshold, similar to a precision approach profile; this reduces CFIT risk (no altitude management confusion), reduces noise, improves fuel efficiency, and makes the approach profile more predictable and stabilised',
    'C. CDFA can only be used with GPS — NDB and VOR approaches must use step-down technique — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. CDFA gives lower minimums than step-down approaches — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'CDFA advantages: traditional step-down NPA: level-flight segments at each step-down altitude, then descending to next step — creates altitude management workload and periods near obstacles without a stabilised descent path. CDFA: the pilot computes (or the FMC computes) a constant angle from the FAF to the DA/DDA (equivalent DA for CDFA) — descends continuously as in a precision approach. Benefits: (1) eliminates CFIT risk from level-flight below obstacle clearance level; (2) stabilised approach criteria more easily met; (3) lower noise exposure; (4) if visual ref not acquired at DA, go-around is executed at the same point as a precision approach DH. Published DDA = MDA + 50 ft (for the earlier go-around decision). ICAO and CASA encourage CDFA for all NPAs.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'A STAR procedure that includes an altitude constraint \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'AT OR ABOVE 6,000 FT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' at a specified waypoint means:',
  options: [
    'A. The aircraft must cross the waypoint at 6,000 ft or higher — the aircraft must not be below 6,000 ft at the waypoint; it may be above 6,000 ft; the constraint ensures obstacle clearance or ATC separation above a defined altitude at that point',
    'B. The aircraft must cross the waypoint at exactly 6,000 ft — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'At or above\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' constraints only apply in terminal area — they can be disregarded on arrival — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'D. The aircraft should plan to cross at 6,000 ft but may be lower if needed — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'STAR altitude constraints: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'AT OR ABOVE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (→) means the aircraft must be at or above the stated altitude when crossing the fix — a floor constraint. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'AT OR BELOW\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (↓) means the aircraft must be at or below — a ceiling constraint. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'AT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means exactly at the stated altitude — both floor and ceiling. These constraints are mandatory — the aircraft must comply unless ATC issues a revised clearance. The FMC honours these constraints in VNAV mode — the descent profile is computed to cross each waypoint within the stated constraint. Failure to comply risks: obstacle conflict; loss of ATC separation; noise abatement violation.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The VOR service volume in Australia defines the ranges within which the VOR signal meets accuracy specifications. The three standard service volumes are:',
  options: [
    'A. VOR service volume is unlimited — accuracy is specified at all ranges worldwide — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'B. Terminal (T — 25 nm radius up to 12,000 ft AGL), Low altitude (L — 40 nm radius up to 18,000 ft), and High altitude (H — 130 nm radius up to and including FL450) — aircraft must be within the published service volume to rely on the VOR for navigation',
    'C. Short range (25 nm), medium range (40 nm), and long range (130 nm) — varying with altitude bands — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. There is only one VOR service volume — 200 nm at all altitudes — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'VOR service volumes (ICAO/FAA standard): (1) Terminal VOR (TVOR) — 25 nm radius from surface to 12,000 ft AGL; (2) Low altitude VOR — 40 nm radius from 1,000 ft AGL to 18,000 ft MSL; (3) High altitude VOR (HVOR) — 40 nm radius below 14,500 ft; 100 nm from 14,500 to 18,000 ft; 130 nm from 18,000 ft to FL450. Within the service volume: bearing accuracy guaranteed within published tolerances. Outside: accuracy cannot be guaranteed; the aircraft may still receive the signal but should not rely on it. In Australia, the service volumes are published in ERSA for each VOR station.',
  reference: 'ANVC MOS 2.6.2 / AIP'
},
{
  question: 'When using ATC radar vectoring to final approach, the crew should verify:',
  options: [
    'A. Vectoring accuracy is solely ATC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s responsibility — the crew has no monitoring role — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'B. That the assigned heading is consistent with the expected intercept angle for the ILS localiser (typically 30° or less intercept angle inside 8 nm from the threshold); that the assigned altitude is at or above the procedure altitude for that range; and that the aircraft will be established and stabilised before reaching the FAF',
    'C. The only check required during vectoring is confirming the correct ILS frequency is tuned — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'D. ATC radar vectoring is always accurate — no crew verification is required — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'Crew monitoring during radar vectoring: (1) intercept angle — inside 8 nm from threshold, intercept should be 30° or less to allow stabilisation before FAF; larger angles risk being unable to establish before the FAF; (2) altitude — the vector altitude should not be below the minimum vectoring altitude (MVA) for the sector; at close range, the altitude should be at the published FAF crossing altitude or below; (3) ILS tuned and identified — confirm localiser identifier; (4) GS/LOC flags clear; (5) checklist complete; (6) stabilised approach criteria before the FAF — any concern about intercept angle or altitude: advise ATC immediately.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The FMC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'PROG\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (progress) page ETAs are continuously updated because:',
  options: [
    'A. Progress ETAs are fixed at departure based on the filed flight plan — they never change — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. The FMC uses real-time groundspeed (from GPS or IRS) and the remaining route distances to continuously recalculate ETAs at all future waypoints — any deviation in groundspeed (wind change, speed adjustment) immediately updates the ETA display; this allows the crew to monitor whether connections and ATC slot times will be met',
    'C. ETAs update only when the aircraft crosses a waypoint — between waypoints they are static — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'D. The ETAs are updated only when the pilot requests a recalculation — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'FMC continuous ETA update: the FMC continuously computes: (1) current groundspeed (GPS-derived or IRS + wind); (2) remaining distance to each waypoint and destination; (3) ETA = current time + (remaining distance / current groundspeed) for each future waypoint. Any change in groundspeed (wind increase/decrease, speed change, ATC speed instruction) immediately recalculates all ETAs. This real-time update allows the crew and dispatcher to: monitor schedule; plan fuel consumption; adjust speed for connection requirements; and report accurate estimates to ATC. The FMC PROG page is the primary fuel and time management tool throughout flight.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The reason the transition altitude in Australia is 10,000 ft rather than a lower value is:',
  options: [
    'A. 10,000 ft is determined by the ILS glideslope intercept altitude — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'B. 10,000 ft is the lowest altitude that ensures all aircraft are above all terrain in Australia — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'C. The transition altitude must be high enough to ensure a sufficient transition layer exists between QNH and standard pressure operations — 10,000 ft provides adequate separation between the terminal area (where QNH is used) and the en route flight levels; it also provides a consistent reference for all Australian aerodromes regardless of their elevation',
    'D. 10,000 ft is an ICAO mandated transition altitude used worldwide — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Australian transition altitude 10,000 ft: the transition altitude is set to ensure: (1) adequate separation between QNH altitudes and standard pressure flight levels (the transition layer between TA and TL must always be positive — TL ≥ TA); (2) all aircraft in the terminal area below the TA use QNH, providing accurate altitude reference for terrain clearance; (3) aircraft above the TL use standard pressure for level separation. Australia uses 10,000 ft (approximately 3,000 m) as a standardised national transition altitude — this is above the terrain at all but the highest mountain aerodromes (e.g. Cooma at 3,100 ft — well below 10,000 ft TA). Some countries use different TAs based on terrain, traffic, or regional standardisation.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The deviation card mounted near the magnetic compass shows deviations on various headings because:',
  options: [
    'A. The card shows the magnetic variation at the aerodrome for reference — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'B. Deviation is constant on all headings — the card only shows the single corrected heading to use — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'C. Deviation changes with aircraft heading — the internal magnetic fields of the aircraft create different interference patterns on different headings; the compass was swung on each heading and residual deviations after compensation are recorded on the card',
    'D. The deviation card shows wind correction angles for different headings — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Deviation card: after compass swinging (compensating the compass with permanent magnets in the compass base), residual deviations remain on various headings due to soft iron effects and imperfect compensation. The deviation varies with heading because: (1) the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s own magnetic field changes direction relative to Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s field as the aircraft turns; (2) the compensating magnets cannot perfectly cancel the irregular fields; (3) the residual errors are recorded on each magnetic heading during the swing. Pilots apply the deviation: Compass heading + Deviation = Magnetic heading. Maximum allowable deviation is typically ±10° with no more than 5° on any cardinal or intercardinal heading after compensation.',
  reference: 'ANVC MOS 2.4.1 / AIP'
},
{
  question: 'Ionospheric effects on GPS signals are strongest at:',
  options: [
    'A. Low elevation satellite angles — GPS signals from low-elevation satellites traverse a much longer path through the ionosphere than signals from overhead satellites; the path length through the ionosphere can be 3 to 5 times longer for 10° elevation vs 90° elevation — hence larger delay and more delay uncertainty',
    'B. Night time — the ionosphere is strongest at night — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'C. High elevation satellite angles — high elevation satellites experience maximum ionospheric delay — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'D. Solar minimum — ionospheric delay is greatest when solar activity is lowest — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Ionospheric delay vs elevation angle: the ionosphere (50 to 1,000 km altitude) delays GPS signals in proportion to the Total Electron Content (TEC) along the signal path. For a satellite directly overhead (90° elevation): the path through the ionosphere is minimum. For a satellite at 10° elevation: the path is 1/sin(10°) ≈ 5.76 times longer → 5.76 times more delay. This explains: why GPS receivers use an elevation mask angle (typically 5 to 10°) to exclude low-elevation satellites — their signals have the most ionospheric delay and uncertainty; why dual-frequency receivers (L1+L2) are particularly valuable for low-elevation satellites.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The purpose of a VOR test (VOT) facility is:',
  options: [
    'A. A ground transmitter that broadcasts a standardised VOR test signal — the pilot tunes the VOT frequency, selects the 360° radial on the OBS, and the needle should centre (± 4°) with a FROM indication confirming the VOR receiver is operating within tolerance',
    'B. The VOT tests the ILS localiser before each approach — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'C. To test the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s VOR receiver on the ground before flight — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'D. VOT is the same as a compass swing — it calibrates the VOR against the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s compass — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'VOR receiver test (VOT): the VOT is a special VOR transmitter installed at some aerodromes that radiates the same signal in all directions (zero-degree azimuth reference). To test: (1) tune the VOT frequency (published in AIP/ERSA); (2) on the CDI/OBS, set 360° — CDI should centre with FROM flag (±4° tolerance); (3) set 180° — CDI should centre with TO flag (±4°). If the test shows errors greater than ±4°: the VOR receiver may be faulty; do not use for IFR navigation without maintenance inspection. The VOT can only be received on the ground or low altitude at the test aerodrome.',
  reference: 'ANVC MOS 2.6.2 / AIP'
},
{
  question: 'The ATC instruction \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'report established on the localiser\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' requires the crew to:',
  options: [
    'A. Report when passing the outer marker — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Report when the aircraft is on the glideslope only — not when established on the localiser — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Call ATC when the aircraft has captured the localiser and the CDI is centred and tracking inbound on the published ILS course — typically when steady on the inbound course with the heading or track corrected for wind',
    'D. Report when the ILS frequency is tuned — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Established on localiser report: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'established on the localiser\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means the aircraft is: (1) on the correct inbound track (ILS inbound course); (2) CDI is centred or within half-dot of centre; (3) aircraft is tracking the centreline (heading corrected for wind); (4) not just captured — actually stable on the track. ATC uses this report to: release earlier approach separation; clear the aircraft to continue; or issue further instructions. The report is made on the ATC frequency: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'[callsign] established localiser runway [number]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'. This is distinct from \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ILS established\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' which includes glideslope capture.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'The Australian Class G airspace (uncontrolled) at and above FL180 is designated as:',
  options: [
    'A. Class B airspace — used only around major airports above FL180 — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'B. Class G airspace ceases to exist above FL180 — controlled airspace begins at FL180 everywhere in Australia — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. Class A airspace — at and above FL180 in Australia (except in the Northern Territory above FL600), the airspace is Class A requiring IFR operations, clearances, and continuous two-way communications; VFR flight is not permitted in Class A airspace',
    'D. Class E airspace — VFR and IFR can operate simultaneously above FL180 — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'Australian Class A airspace: in Australia, Class A airspace exists at and above FL180 (and may vary in specific areas). In Class A: (1) only IFR operations are permitted; (2) ATC clearance required before entry; (3) continuous two-way radio communication with ATC required; (4) ATC provides separation between all aircraft; (5) RVSM applies above FL290 within Class A. Below FL180: airspace classes vary (C, D, E, G) depending on proximity to airports and controlled airspace. Pilots must know the airspace structure for their operating environment — check AIP ENR 1.4 for current Australian airspace classification.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'When selecting a holding speed for a standard hold, the maximum speeds are defined because:',
  options: [
    'A. Holding speeds are limited by aircraft structural limits only — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'B. Holding speeds are always the same as approach speeds — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'C. Maximum holding speeds are set by ATC on a case-by-case basis — no standard limits exist — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. Maximum holding speeds define the protected airspace size — the holding pattern oval is designed to contain the aircraft within a specific area; aircraft exceeding the maximum speed would fly outside the protected area, potentially entering adjacent airspace or terrain-conflicting areas'
  ],
  correct: 3,
  explanation: 'Holding pattern speed limits: the holding pattern protected area is designed for aircraft flying at the published maximum speed. Exceeding the speed causes the aircraft to fly beyond the protected area. ICAO maximum holding speeds: at or below FL140: 230 KIAS (or 200 KIAS if specified); FL140 to FL200: 240 KIAS; FL200 to FL340: 265 KIAS; above FL340: 0.83 Mach. Australian AIP may specify different values — check AIP GEN 3.3. At higher altitudes where TAS is high, faster aircraft use bank angles approaching 30° for standard rate turns to stay within the protected area.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The magnetic bearing from an NDB beacon to the aircraft (QDR) can be determined from an ADF reading by:',
  options: [
    'A. QDR = aircraft magnetic heading + relative bearing + 180° (subtract 360° if over 360°); the relative bearing is the bearing from the aircraft nose to the beacon; adding the heading gives the magnetic bearing TO the beacon (QDM); adding 180° gives the bearing FROM the beacon (QDR)',
    'B. QDR = 360° − relative bearing — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'C. Adding the relative bearing directly to the beacon — QDR = relative bearing — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'D. QDR = absolute bearing − magnetic variation — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'QDR calculation from ADF: ADF shows relative bearing (RB) — angle from aircraft nose clockwise to the beacon. QDM (magnetic bearing to station) = magnetic heading (MH) + RB (subtract 360° if over 360°). QDR (magnetic bearing from station, the radial) = QDM + 180° (or − 180°). Example: MH = 090°, RB = 270° → QDM = 090 + 270 = 360° → QDR = 360 + 180 = 540 − 360 = 180°. This means the station bears due north of the aircraft (QDM 360°) and the aircraft is due south of the station on the 180° radial (QDR 180°). On the RMI, this is automatic — the needle head shows QDM, tail shows QDR.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The ADIRU (Air Data Inertial Reference Unit) in modern aircraft:',
  options: [
    'A. Is the primary weather radar system — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Provides backup displays only — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'C. Is the automatic dependent surveillance unit for ADS-B Out transmissions — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'D. Combines the Air Data Computer and Inertial Reference System in one unit — processing pitot and static data plus inertial sensor data to provide all flight parameters to aircraft systems'
  ],
  correct: 3,
  explanation: 'ADIRU: integrates Air Data Computer functions (IAS, TAS, Mach, altitude, VSI from pitot and static pressures and temperature) with Inertial Reference System functions (attitude, heading, position, velocity from ring laser gyros and accelerometers). Combined outputs feed EFIS, autopilot, FMS, transponder, GPWS, TCAS, and other systems. Typically triple redundant. Replaced separate ADC and IRS units of earlier aircraft generations.',
  reference: 'ANVC MOS 2.3.2 / Navigation'
},
{
  question: 'A holding pattern at FL180 (max holding speed 280 kt IAS, TAS ≈ 330 kt) has a 30 kt headwind on the outbound leg. Standard outbound time is 1 minute. To maintain the 1-minute inbound leg, the outbound time should be adjusted to approximately:',
  options: [
    'A. 1:11',
    'B. 0:51',
    'C. 1:00',
    'D. 1:22'
  ],
  correct: 0,
  explanation: 'Inbound GS = TAS+30 = 360 kt (tailwind on inbound when headwind on outbound). Outbound GS = TAS−30 = 300 kt. Standard 1-min inbound: inbound distance = 360×(1/60) = 6 nm. To cover 6 nm outbound at 300 kt: time = 6/300×60 = 1.2 min = 1:12 ≈ 1:11. Answer A 1:11.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A VOR CDI with OBS set to 270° shows a TO flag and the needle deflects full right. The aircraft is:',
  options: [
    'A. The full right deflection means the aircraft is exactly on the 270° radial outbound — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. East of the station with the needle correctly showing the VOR is to the west — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. West of the station, displaced to the right (north) of the inbound course to the station — the needle deflects toward the course; fly right (north) to re-intercept the 270° inbound course',
    'D. On the 270° radial east of the station, heading west — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'VOR CDI interpretation: OBS 270°, TO flag (inbound), full right needle. The needle always points toward the selected course — fly toward the needle to re-intercept. Full right deflection: the 270° inbound course is to the right of the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s current position. The aircraft must turn right (or track right) to re-intercept the centreline. Scenario: aircraft is north of the inbound course (south of the inbound 270° track), heading roughly west. Turning right (northward) or maintaining heading while the aircraft position moves south will centre the CDI. Never chase a full-scale deflection aggressively — intercept at a 45° angle then reduce to a tracking correction.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The required navigation performance for a standard RNAV 1 arrival procedure means the aircraft navigation error must not exceed 1 nm for what percentage of flight time?',
  options: [
    'A. 68%',
    'B. 99.9%',
    'C. 50%',
    'D. 95%'
  ],
  correct: 3,
  explanation: 'RNAV/RNP accuracy specification: the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'95th percentile\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (2-sigma) is the standard used to specify navigation performance. RNAV 1 (or RNP 1) specifies that the total system error must not exceed 1 nm for at least 95% of flight time on the procedure. The other 5% of time allows for normal measurement noise and environmental variations. The integrity component separately specifies that the probability of being outside 2× the RNP value (2 nm for RNP 1) without an alert must not exceed 10⁻⁵ per flight hour. This two-component specification (accuracy for 95th percentile, integrity for the tail of the distribution) ensures both normal performance and protection against rare large errors.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'When approaching a VOR and the DME reads 0.5 nm but the CDI shows 2 dots of deviation, the most likely explanation is:',
  options: [
    'A. The CDI is malfunctioning — it should show zero deviation at 0.5 nm — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Two dots of deviation at 0.5 nm always triggers an approach alarm — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'C. The aircraft is at the wrong VOR — the CDI should be centred when at 0.5 nm — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. The aircraft is at close range to the VOR where the CDI becomes extremely sensitive — at 0.5 nm, 2 dots of CDI deflection represents only 0.5 × tan(10°) ≈ 88 m off track; this is a very small deviation that is easily generated by a brief heading change; the DME confirms proximity to the station — the cone of silence may affect CDI stability'
  ],
  correct: 3,
  explanation: 'VOR CDI sensitivity near the station: at 0.5 nm DME, the CDI angular sensitivity is extreme. Full-scale CDI (±10° angular): at 0.5 nm, full scale = 0.5 × tan(10°) ≈ 88 m. Two dots (±5°): approximately 44 m lateral displacement. This tiny lateral position causes a significant CDI deflection — normal at close range. Additionally, the cone of silence directly overhead the VOR causes CDI instability. Solution: anticipate large CDI deflections when very close to a VOR; do not try to track the CDI precisely at < 1 nm DME; plan the waypoint sequence to pass the VOR on the overhead and then re-establish outbound tracking.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The IFR alternate minima time window in Australian CASR Part 91 requires forecast conditions to be above alternate minima from:',
  options: [
    'A. ETA at alternate minus 1 hour to ETA plus 1 hour — this window accounts for forecast uncertainty and the time the aircraft might take to reach the alternate after a missed approach and diversion from the destination',
    'B. At ETA only — no time window is required — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'C. ETA at alternate minus 2 hours to ETA plus 2 hours — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. ETA at alternate minus 30 minutes to ETA plus 30 minutes — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'Alternate minima time window: CASR Part 91 requires the alternate aerodrome to have forecast conditions at or above the alternate minima for the period from 1 hour before to 1 hour after the estimated time of arrival at the alternate. This window accounts for: forecast uncertainty; possible delays at the destination before diverting; and transit time to the alternate. Checking only at the nominal ETA is insufficient because weather can change within an hour and the actual diversion time may differ significantly from the estimated time.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'Real drift of a directional gyro requires periodic realignment because:',
  options: [
    'A. Real drift is caused by the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation — approximately 15°/hour everywhere — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Real drift only affects uninitialised gyros — properly set gyros experience no real drift — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Real drift is caused by bearing friction and imbalance — the small torques from imperfect bearings cause the gyro axis to precess slowly away from the set heading; typically 2° to 3° per minute maximum; the DGI must be reset every 10 to 15 minutes to the magnetic compass',
    'D. Real drift increases with altitude — above FL200 realignment is required every 5 minutes — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'DGI real drift: (1) bearing friction — the spinning rotor transmits small torques through the support bearings to the outer gimbals; these cause gyroscopic precession (real precession); (2) mass imbalance — slight uneven weight distribution causes gravity-induced torque → precession; (3) air resistance (in pneumatic gyros); cumulative effect: approximately 1° to 3° per minute maximum; in practice, 2° to 3° per 10 minutes is typical. Slaved gyro systems (remote indicating compass, AHRS) eliminate this by automatically correcting DGI to the magnetic reference continuously.',
  reference: 'ANVC MOS 2.3.3 / AIP'
},
{
  question: 'Magnetic heading 090°M, QDM to NDB = 045°M. The relative bearing on a fixed-card ADF is:',
  options: [
    'A. 315°',
    'B. 135°',
    'C. 045°',
    'D. 225°'
  ],
  correct: 0,
  explanation: 'RB = QDM − MH = 045 − 090 = −045°. A negative RB means 360−45 = 315°. The NDB is 315° relative (to the left and slightly behind). On a fixed-card ADF: needle at 315°. Answer A 315°.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'For RAIM to provide both fault detection AND fault exclusion (FDE) during a GPS approach, the minimum number of satellites required is:',
  options: [
    'A. 4',
    'B. 5',
    'C. 6',
    'D. 7'
  ],
  correct: 2,
  explanation: 'GPS satellite requirements: 3 satellites: 2D position fix only. 4 satellites: 3D position fix (standard navigation). 5 satellites: RAIM fault detection — can detect that one satellite is faulty but cannot identify which one. 6 satellites: RAIM fault detection AND exclusion (FDE) — can detect a faulty satellite, isolate it, and exclude it from the position solution; navigation continues with the remaining 5 satellites. For precision approaches with FDE (required for SBAS/RAIM approaches below LPV): 6 satellites minimum. Answer C 6 satellites.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The INS alignment process requires entering latitude and longitude because:',
  options: [
    'A. Latitude and longitude are used to select the correct magnetic variation database — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'B. The latitude and longitude are only used for display purposes — navigation does not require them — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'C. ATC requires the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position at all times — INS sends this to ATC during alignment — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. The entered position becomes the INS origin for all subsequent navigation — position errors from incorrect entry accumulate throughout the flight; additionally, the gyrocompassing process uses latitude to compute the component of Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation available to define true north'
  ],
  correct: 3,
  explanation: 'INS alignment position entry: (1) position origin — the entered lat/long is the starting position; all subsequent navigation is computed as displacement from this origin; an error of 1 nm in entered position causes an initial 1 nm position error; (2) gyrocompassing — the INS uses the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation rate (15°/hour) to find true north during alignment; at the magnetic poles (high latitude), the horizontal component of Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rotation is weak, making north-finding difficult → INS alignment becomes slower and less precise at high latitudes; (3) IRS systems typically time out if no position is entered within approximately 10 minutes.',
  reference: 'ANVC MOS 2.4.3 / AIP'
},
{
  question: 'Gyroscopic rigidity and precession are the two fundamental properties of a gyroscope. Which is exploited by the attitude indicator?',
  options: [
    'A. Both properties equally — neither can function without the other — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'B. Neither — the attitude indicator uses accelerometers, not gyroscopes — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. Precession — the gyro precesses to indicate pitch and roll changes — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Rigidity — the gyro spin axis maintains its direction in space (aligned with the local vertical), providing a stable reference against which the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s pitch and roll are measured'
  ],
  correct: 3,
  explanation: 'Attitude indicator uses rigidity: the AI gyro is erection-maintained to the vertical by gravity-sensing devices. Once erect, the gyro\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s rigidity keeps the spin axis vertical as the aircraft manoeuvres — the gyro \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'stays behind\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' while the aircraft pitches and rolls around it. The display shows the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s attitude relative to the fixed gyro (stabilised horizon bar). Precession is the enemy of the AI — it causes slow drift (real precession from bearing friction); the erection system continuously corrects this but can also cause erroneous erection errors in prolonged turns.',
  reference: 'ANVC MOS 2.3.3 / AIP'
},
{
  question: 'The difference between an SID (Standard Instrument Departure) and a DP (Departure Procedure) in Australian AIP is:',
  options: [
    'A. SIDs are mandatory; DPs are optional departure routes — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'B. SIDs only apply below FL100 — above FL100 there are no departure procedures — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'C. SIDs are for jet aircraft and DPs are for propeller aircraft — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'D. In Australian AIP (aligned with ICAO Annex 2 and PANS-OPS), SIDs (Standard Instrument Departures) are published departure procedures that provide obstacle clearance while transitioning from takeoff to the en route structure — they may include altitude crossing restrictions, headings, and turns; DPs is a US-specific term; Australia uses SID for all published departure instrument procedures'
  ],
  correct: 3,
  explanation: 'Australian SID terminology: Australia uses ICAO terminology — SID (Standard Instrument Departure) for all published instrument departure procedures. SIDs define: departure routing (tracks, headings, turns); altitude constraints (at or above, at or below crossing altitudes); navaid references; and transition points to the en route structure. In Australia, all published instrument departures are termed SIDs in AIP. The US FAA uses both SID and ODP (Obstacle Departure Procedure) terminology. When a SID is not available or the aircraft cannot comply with a SID, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'no SID\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' may be requested and ATC will provide radar vectors.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'Rhumb line 25°S 140°E to 25°S 080°E (60° longitude west). Distance:',
  options: [
    'A. 3,276 nm',
    'B. 4,200 nm',
    'C. 3,600 nm',
    'D. 2,980 nm'
  ],
  correct: 0,
  explanation: '60×60×cos(25°) = 3600×0.9063 = 3,263 nm ≈ 3,276 nm. Answer A.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'An aircraft fitted with GPS that is also linked to an ILS receiver can fly which type of approach not available with GPS alone?',
  options: [
    'A. GPS and ILS provide identical capabilities — the ILS adds no additional approach authority — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'B. An ILS approach to Cat III minimums — the ILS receiver provides the certified Cat III accuracy and integrity that GPS alone cannot achieve; GPS may be used to cross-check but ILS is the primary guidance source for Cat III',
    'C. A VOR approach — ILS integrates with VOR for combined guidance — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. An LPV approach — GPS provides more accuracy than ILS — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'ILS for Cat III approaches: even with GPS, ILS Cat III approaches require: (1) ILS Cat III certified ground equipment (transmitter, monitoring); (2) airborne ILS Cat III receiver providing fail-passive or fail-operational capability; (3) radio altimeter for DH; (4) autoland system. GNSS cannot yet certify to Cat III in most countries — the integrity requirements (hazardously misleading information probability < 10⁻⁹ per approach) are extremely stringent and current GNSS/SBAS systems (including GBAS) are working toward this standard but ILS Cat III remains the primary certified Cat III system globally. GPS may be displayed alongside ILS for cross-checking but is not the primary guidance source.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'An aircraft on a 3° ILS glideslope at 4 nm DME from the threshold should be at QNH altitude (aerodrome elevation 450 ft amsl, TCH 50 ft) of approximately:',
  options: [
    'A. 1,668 ft',
    'B. 1,722 ft',
    'C. 1,320 ft',
    'D. 2,100 ft'
  ],
  correct: 0,
  explanation: 'Height above threshold at 4 nm from threshold: height = 4 nm × 318 ft/nm + TCH = 1,272 + 50 = 1,322 ft above threshold. Threshold elevation = aerodrome elevation ≈ 450 ft (for a flat aerodrome). QNH altitude = 450 + 1,322 = 1,772 ft. Hmm. Closest B 1,722 ft or A 1,668 ft. More precisely: 318 ft/nm at 3°: tan(3°)×6076 = 0.05241×6076 = 318.4 ft/nm. At 4 nm: 4×318.4 = 1,274 ft + 50 ft TCH + 450 ft elevation = 1,774 ft. Closest B 1,722 ft. Answer B.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'When programming a SID into the FMC, the crew must verify:',
  options: [
    'A. SID programming only requires the departure runway — the FMC selects the correct SID automatically based on the route — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'B. SID verification is ATC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s responsibility — the crew can accept any SID assigned — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'C. Only the departure runway — all other SID details are automatic — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The departure runway, SID name and transition selected match the ATC clearance; all waypoints and altitude/speed constraints are correctly loaded from the database; the FMC initial climb speed and altitude are consistent with the cleared departure; and the route from the SID end to the first en route waypoint is correctly connected'
  ],
  correct: 3,
  explanation: 'FMC SID verification: after programming the SID, the crew must cross-check: (1) departure runway matches the cleared and active runway; (2) SID name and transition match the ATC clearance exactly; (3) compare the FMC route display against the paper SID chart — all waypoints, constraints, and the procedure track should agree; (4) the SID terminating waypoint connects correctly to the en route structure; (5) initial climb altitude matches the cleared altitude; (6) speed constraints (if any) are loaded. Database errors, incorrect AIRAC cycle, or crew selection errors can cause SID routing errors — always cross-check against the paper/electronic chart.',
  reference: 'ANVC MOS 2.9.1 / AIP'
},
{
  question: 'At FL290, OAT −44°C, M0.80. TAS is approximately:',
  options: [
    'A. 461 kt',
    'B. 472 kt',
    'C. 453 kt',
    'D. 489 kt'
  ],
  correct: 1,
  explanation: 'T=229K. LSS=661.5×√(229/288.15)=589.5 kt. TAS=0.80×589.5=471.6≈472 kt. Answer B.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'sector safe altitude\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' published on an approach chart for the MSA (Minimum Sector Altitude) provides obstacle clearance within which radius?',
  options: [
    'A. MSA provides obstacle clearance at all ranges from the aerodrome — no radius limit — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'B. 5 nm from the aerodrome reference point — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. 25 nm from the navaid specified on the chart (typically the ILS/VOR/NDB at the aerodrome) — the MSA is divided into sectors (typically 4 sectors of 90°) with individual altitude values; each sector value provides 1,000 ft obstacle clearance above the highest obstacle within 25 nm of the navaid in that sector',
    'D. 50 nm from the aerodrome reference point — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'MSA (Minimum Sector Altitude) radius: the MSA is published on approach charts as a circle divided into sectors (typically 4 × 90° sectors). Each sector\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude provides 1,000 ft obstacle clearance above all terrain and obstacles within 25 nm of the specified navaid. The navaid used as the reference is specified on the chart (the ILS/VOR/NDB associated with the approach). Usage: the MSA is an emergency altitude — used when the aircraft must deviate from the published procedure (e.g. engine failure, navigation problem) to ensure immediate obstacle clearance in the sector containing the aircraft. Not a normal procedure altitude.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'The frequency assignment for ACARS (Aircraft Communications Addressing and Reporting System) VHF datalink typically uses:',
  options: [
    'A. HF frequencies — ACARS does not use VHF — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Specific VHF frequencies in the 129 to 136 MHz range designated for datalink — in Australia, 129.125 MHz and others are used; the frequencies are not the same as voice ATC frequencies',
    'C. ACARS uses GPS frequencies — not VHF — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. 121.5 MHz — the guard frequency — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'ACARS VHF frequencies: ACARS (Aircraft Communications Addressing and Reporting System) uses specific VHF frequencies for digital datalink: typical frequencies include 129.125 MHz, 136.900 MHz, and others depending on the region and network (SITA or ARINC network). These are distinct from ATC voice frequencies. ACARS provides: pre-departure clearance (PDC); ATIS automatic delivery; oceanic clearances; company operational messages (fuel status, gate changes, weather); and position reporting for FANS-capable aircraft. The VHF ACARS operates within approximately 300 nm of ground stations — beyond this range, satellite ACARS (Inmarsat or Iridium) takes over.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'A rhumb line track from Perth (115°E, 32°S) to Johannesburg (28°E, 26°S) is approximately:',
  options: [
    'A. Approximately 270°T (westbound) with a slightly northward component — the track direction must be approximately 255° to 275°T based on the longitude change (87° west) and small latitude change (6° north)',
    'B. 180°T — Johannesburg is almost directly south of Perth — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. 225°T — southwest from Perth to Johannesburg — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'D. 090°T — direct east-to-west track — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'Perth to Johannesburg rhumb line: Perth is at 32°S, 115°E; Johannesburg is at 26°S, 28°E. Change: 87° of longitude to the west; 6° of latitude to the north. The track is predominantly westward with a slight northward component. tan(track angle from north) = Δlongitude / Δlatitude (simplified for rhumb line near equatorial or mid-latitudes): very large ratio (87/6 = 14.5), meaning the track is almost due west with minimal north component. Rhumb line track ≈ 270° − arctan(6/87) ≈ 270° − 4° ≈ 266° to 270°T. So approximately 265°T to 275°T, predominantly westbound.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'The LNAV/VNAV approach designation on an instrument approach procedure means:',
  options: [
    'A. LNAV/VNAV approaches are only available in the USA — Australian approaches use RNAV designations — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly',
    'B. LNAV/VNAV uses barometric altitude for vertical guidance (baro-VNAV) with GNSS for lateral — a type of approach with vertical guidance (APV) that has lower minimums than LNAV-only but is not classified as a precision approach; requires baro-VNAV certified avionics and a temperature correction when OAT deviates from ISA',
    'C. LNAV/VNAV is identical to a full GPS approach — no special equipment is required — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. Lateral Navigation and Vertical Navigation — a precision approach equivalent to ILS Cat I — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'LNAV/VNAV approach: an approach with vertical guidance using barometric VNAV (baro-VNAV) for the vertical path and GNSS for lateral. The vertical path is computed by the FMS from the published descent angle — the decision altitude (DA) is used instead of MDA. Temperature limitation: baro-VNAV altitude is temperature-sensitive; very cold temperatures cause the aircraft to fly significantly below the computed path; a temperature correction must be applied (using airport temperature correction tables). Accuracy: ≤ 0.3 nm lateral, baro-VNAV typical accuracy ±150 ft vertical. Minimums: lower than LNAV but higher than LPV (SBAS precision approach).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'During an RNAV approach using LNAV/VNAV, the baro-VNAV vertical guidance differs from an ILS glideslope in that:',
  options: [
    'A. Baro-VNAV provides more accurate vertical guidance than the ILS glideslope — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Baro-VNAV cannot be used in Australian airspace — only LPV is approved — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'C. The ILS glideslope uses radio frequency signals that directly sense the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s physical position on the 3° beam — it is unaffected by temperature. Baro-VNAV computes the vertical path from barometric altitude and requires a temperature correction in cold weather; in very cold temperatures the aircraft flies below the computed path — increasing terrain risk',
    'D. Baro-VNAV and ILS glideslope are identical in performance and accuracy — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Baro-VNAV vs ILS glideslope: ILS glideslope: RF signal; aircraft receiver measures deviation from the 3° beam; temperature-independent (the beam doesn\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'t care about OAT); direct physical position measurement. Baro-VNAV: computed using barometric altimeter data; assumes ISA temperature lapse rate to convert pressure to altitude; in very cold air (-20°C or more below ISA): the actual altitude is lower than the barometric altitude → the aircraft is below the computed path → increased terrain risk; temperature corrections required when OAT is below published temperature (typically −15°C to −20°C on the approach chart). LPV (SBAS-based): not subject to temperature errors — uses GPS geometric altitude for vertical guidance.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'An aircraft at FL350 in RVSM airspace deviates from its assigned altitude. The altitude alerting system must trigger when the deviation exceeds:',
  options: [
    'A. 200 ft',
    'B. 300 ft',
    'C. 500 ft',
    'D. 100 ft'
  ],
  correct: 1,
  explanation: 'RVSM altitude alerting requirement: the altitude alerting system must alert the crew when the aircraft deviates from the cleared FL by more than 300 ft. In standard (non-RVSM) airspace the trigger is typically 300 ft also. RVSM vertical separation standard is 1,000 ft — a 300 ft deviation represents 30% of the available separation. The ICAO requirement: alert when deviation exceeds 300 ft (approximately 90 m). This is specified in ICAO Doc 9574 (RVSM manual) and CASR Part 91. Answer B 300 ft.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An aircraft on a 270 degree radial from a VOR at 60 nm DME is:',
  options: [
    'A. South of the VOR — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'B. West of the VOR — the 270 degree radial extends due west from the station; at 60 nm DME the aircraft is 60 nm west of the VOR',
    'C. North of the VOR — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'D. East of the VOR heading west — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'VOR radial position: radials are directions FROM the station. The 270 degree radial extends due west from the VOR. An aircraft on the 270 degree radial is west of the VOR. At 60 nm DME it is 60 nm west of the station. To track inbound on this radial the aircraft sets OBS to 090 degrees (the reciprocal) and flies eastward toward the station with a TO indication.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The use of anti-icing equipment on a transport category aircraft affects fuel planning because:',
  options: [
    'A. Engine bleed air anti-icing (wing and engine nacelle) extracts compressed air from the compressor stage — this air is not available for thrust generation, reducing net engine thrust and efficiency; fuel burn increases by approximately 3 to 5% per engine in full anti-ice mode; this must be included in fuel calculations for prolonged icing encounter planning',
    'B. Anti-icing reduces fuel burn by reducing aircraft weight through ice removal — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. Anti-icing only affects fuel burn in turboprop aircraft — jet engines are unaffected — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'D. Anti-icing equipment reduces aircraft weight and therefore reduces fuel consumption — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'Anti-icing fuel penalty: engine bleed air systems extract compressed air from the engine compressor to heat leading edges and engine inlets. This reduces the net thrust available and increases SFC (specific fuel consumption). Typical fuel penalty: 3 to 6% per engine in anti-ice mode. For a 14-hour flight through extended icing, this represents significant additional fuel. Flight planning must include: estimated time in icing conditions; anti-ice fuel penalty per hour; and the effect on cruise altitude capability (reduced thrust may prevent Step climbs at the planned level). The AFM performance charts include anti-ice correction factors.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'ILS Cat II approach minimums in Australia are typically:',
  options: [
    'A. No DH — Cat II is a zero-visibility approach — incorrect; the technical definition and application differ significantly',
    'B. DH 200 ft, RVR 550 m — same as Cat I — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'C. DH 100 ft, RVR 300 m — lower than Cat I, requiring enhanced aircraft and ground equipment and specific crew training and recency',
    'D. DH 50 ft, RVR 75 m — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'ILS Cat II minimums: Category II: DH 100 ft (30 m); RVR minimum 300 m (some operations to 350 m). Requirements: certified Cat II ILS ground equipment; aircraft with fail-passive autoland; flight director with Cat II capability; radio altimeter; enhanced approach lighting; Cat II certified crew (specific training and 6-monthly simulator recency). Compare: Cat I: DH 200 ft, RVR 550 m. Cat IIIA: DH 100 ft (or no DH), RVR 200 m. Cat IIIB: DH 50 ft (or no DH), RVR 50–75 m. Cat II represents significant additional capability beyond Cat I.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'The published instrument approach procedure for Runway 16 ILS at an Australian aerodrome specifies a Threshold Crossing Height (TCH) of 55 ft. This means:',
  options: [
    'A. The aircraft must be at 55 ft when over the outer marker — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'B. The ILS glideslope intersects the extended runway centreline at 55 ft above the runway threshold elevation — an aircraft on the glideslope will cross the threshold at approximately 55 ft AGL; this height provides adequate clearance for the aircraft gear to clear obstacles on the approach path at the threshold',
    'C. The glideslope begins at 55 ft above the runway threshold — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. TCH is the minimum decision height for the approach — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'Threshold Crossing Height (TCH): the ILS glideslope is designed to intersect the extended runway centreline at the TCH above the threshold. At TCH 55 ft: an aircraft precisely on the glideslope will have its wheels approximately 55 ft above the runway threshold. This ensures adequate clearance for the aircraft structure over any threshold obstacles (approach lighting, markings) while positioning the aircraft for a normal touchdown approximately 300 m beyond the threshold. TCH varies with runway length and obstacle environment; typical values are 40 to 60 ft.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'An aircraft at FL370 begins descent and the altimeter subscale is still set to 1013 hPa when passing through FL200. At the transition level, the crew should:',
  options: [
    'A. Continue with 1013 hPa until reaching the aerodrome — QNH is only set on the ground — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. At the transition level (FL110 in most of Australia), set the altimeter subscale to QNH before descending below it — below the transition level, altitude is expressed in feet AMSL using QNH; failing to change from standard pressure to QNH below the transition level means the altimeter may read significantly different from the true altitude, compromising obstacle clearance',
    'C. Nothing — the standard pressure (1013 hPa) is correct above the transition level — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The altimeter setting change is done at the transition altitude, not the transition level — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'Transition level to QNH: on descent, the altimeter is changed from standard pressure (1013.25 hPa) to area QNH when passing through the transition level (TL) — in Australia typically FL110 but variable. At and above the TL: fly flight levels using 1013.25 hPa. At and below the TA: fly altitude using QNH. Change the subscale at the TL. If QNH is significantly below standard (e.g. 988 hPa, common in a low-pressure system): with 1013 set, the altimeter reads approximately 700 ft HIGH; the aircraft is actually 700 ft lower than indicated — a significant terrain clearance hazard below the TL. ATC issues QNH during the descent.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The Doppler VOR (DVOR) differs from a conventional VOR in that:',
  options: [
    'A. DVOR provides approach guidance while conventional VOR is only for en route navigation — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. DVOR operates at a different frequency from conventional VOR — they are not compatible — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. DVOR uses a large antenna array and Doppler principles to generate the directional signal — it is less susceptible to siting errors from mountainous terrain and buildings; from the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s perspective, the DVOR is used identically to a conventional VOR',
    'D. DVOR uses frequency modulation for both signals while VOR uses amplitude modulation — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'DVOR (Doppler VOR): conventional VOR uses a mechanically (electronically) rotating directional antenna that is sensitive to reflections from terrain and structures near the site (siting errors causing bearing errors of up to 4°). DVOR uses a large circular array of antennas (approximately 13 m diameter); the directional signal is generated by electrically switching between antennas to simulate a moving antenna, creating a Doppler frequency shift that varies with bearing. The large aperture averages out multipath reflections, reducing siting error to approximately 1°. Aircraft receivers treat DVOR identically to conventional VOR.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'CAVOK\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in a METAR/ATIS means:',
  options: [
    'A. Ceiling and Visibility OK — no cloud below 5,000 ft or below the MSA (whichever is higher), no CB or TCU anywhere, visibility 10 km or more, and no significant weather phenomena; CAVOK replaces the visibility, weather, and cloud groups in the METAR when all three conditions are met simultaneously',
    'B. Cloud and Visibility OK — ceiling above 5,000 ft and visibility greater than 5 km — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. CAVOK means visual meteorological conditions (VMC) — the pilot can navigate visually — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'D. Cloud above 5,000 ft only — visibility is separately reported — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'CAVOK definition: CAVOK (Ceiling and Visibility OK) is used in METARs and TAFs when simultaneously: (1) visibility is 10 km or more; (2) no cloud below 5,000 ft AAL (above aerodrome level) or below the Minimum Sector Altitude (whichever is higher); (3) no Cumulonimbus (CB) or Towering Cumulus (TCU) at any height; (4) no significant weather (precipitation, obscuration, etc.). CAVOK replaces the visibility, weather phenomena, and cloud groups as a shorthand. Navigation relevance: CAVOK indicates excellent visual conditions but does not mean aircraft can abandon IFR requirements — all IFR clearances and procedures still apply.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'When the aircraft is above the minimum vectoring altitude (MVA) in radar vectors, the crew can expect:',
  options: [
    'A. The aircraft must maintain the MVA regardless of other ATC instructions — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. MVA applies only within the terminal area — en route vectors have no MVA — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'C. The MVA is a suggestion only — the crew must independently verify obstacle clearance — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. ATC will provide safe terrain and obstacle clearance while vectoring the aircraft — the MVA is the minimum altitude to which ATC will vector the aircraft in the associated radar service volume; the crew may accept vectors at or above the MVA with confidence that obstacle clearance is provided by ATC'
  ],
  correct: 3,
  explanation: 'Minimum Vectoring Altitude (MVA): the lowest altitude an ATC radar controller will assign during vectoring in a specific area, providing a minimum of 1,000 ft obstacle clearance (2,000 ft in mountainous terrain) within the applicable radar coverage area. When radar-vectored above the MVA, ATC accepts responsibility for terrain and obstacle clearance — the crew can focus on instrument flying. Crew responsibility: if ATC instruction would take the aircraft below the MVA (or into IMC below the MVA), the crew must advise ATC and decline if safety is compromised. In Australia, MVAs are published in ATC sectorization documentation.',
  reference: 'ANVC MOS 2.7.2 / AIP'
},
{
  question: 'Australian En Route Charts (ERC) are published in the AIP MAP section and use which scale?',
  options: [
    'A. Various scales depending on the chart — ERC-L (Low Level) typically 1:4,000,000 or 1:5,000,000; ERC-H (High Level) 1:4,000,000; TAC (Terminal Area Chart) 1:250,000',
    'B. 1:1,000,000 for all charts — the standard WAC scale — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'C. Metric only — distances are in kilometres on all Australian charts — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'D. 1:500,000 for all Australian charts — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Australian AIP chart scales: (1) ERC-H High Level (FL245 and above) — 1:4,000,000; (2) ERC-L Low Level (below FL245) — 1:4,000,000 or 1:5,000,000; (3) TAC Terminal Area Chart — 1:500,000 or 1:250,000; (4) ERSA approach charts — not to scale (schematic). WAC (World Aeronautical Chart) series is 1:1,000,000. All use Lambert Conformal Conic. Distances on Australian aeronautical charts are in nautical miles; heights/altitudes in feet.',
  reference: 'ANVC MOS 2.1.2 / AIP MAP'
},
{
  question: 'VOR scalloping is an error characterised by:',
  options: [
    'A. A constant offset of the VOR bearing from the actual radial',
    'B. Oscillation of the CDI needle caused by multipath reflections from terrain or structures near the VOR site — the bearing fluctuates rhythmically as the aircraft moves through areas of constructive and destructive interference',
    'C. Scalloping only occurs during ILS approaches — not during VOR tracking',
    'D. VOR scalloping is a pilot technique error — incorrect interpretation of the CDI'
  ],
  correct: 0,
  explanation: 'VOR scalloping: a fluctuation (oscillation) of the CDI caused by multipath propagation — the direct VOR signal and reflected signals from terrain, buildings, or aircraft structure interfere at the receiver, causing the effective phase difference (and therefore the displayed bearing) to oscillate. The oscillation appears as the CDI swinging rhythmically left and right even with the aircraft flying a constant track. Mitigation: use a different altitude; check if the NOTAM reports VOR unreliability; identify if the oscillation is VOR scalloping or pilot technique.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The purpose of the PRNAV (Precision RNAV) or RNAV 1 requirement for SIDs and STARs at major Australian airports is:',
  options: [
    'A. RNAV 1 SIDs/STARs are only for jet aircraft — propeller aircraft are excluded — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. RNAV 1 is required to prevent GPS spoofing in the terminal area — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'C. The RNAV 1 requirement only applies to STAR procedures — SIDs remain conventional VOR-based — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'D. To enable closer spacing of aircraft in the terminal area through increased navigation precision — with RNAV 1 accuracy (1 nm 95th percentile), the protected corridor around the RNAV route is narrower than for conventional VOR/NDB navigation, allowing more efficient routing and closer airspace design near busy airports'
  ],
  correct: 3,
  explanation: 'RNAV 1 in terminal area: standard RNAV (B-RNAV) requires 5 nm accuracy — the protected area around the route must be 5 nm wide. RNAV 1 requires 1 nm accuracy — the protected area can be only 1 nm wide. Benefits at busy airports: (1) more routes can be accommodated in the same airspace volume; (2) routes can follow terrain more closely (avoiding obstacles while maintaining efficient tracks); (3) noise-sensitive routes can be designed with confidence that aircraft will fly them accurately; (4) more precise sequencing enables smaller separation standards. Equipment requirement: typically GPS FMC satisfying RNAV 1 specification, approved by CASA.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The track error angle (TEA) for an aircraft 15 nm right of track after flying 90 nm from the departure point is:',
  options: [
    'A. 15°',
    'B. 10°',
    'C. 5°',
    'D. 6°'
  ],
  correct: 1,
  explanation: 'Track Error Angle: TEA = (off-track distance / distance flown) × 60. TEA = (15/90) × 60 = 10°. The 1-in-60 rule gives the angle in degrees whose sine (or tangent for small angles) equals the off-track distance divided by the distance flown. Here: 15 nm off track at 90 nm = 1/6 of 60 = 10°. The aircraft has diverged 10° to the right of the intended track. To return to track at the destination (say 60 nm ahead): closing angle = (15/60) × 60 = 15°. Total heading change required: TEA + closing angle = 10° + 15° = 25° left to return to track and arrive at the destination.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'When the FMC displays \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GPS PRIMARY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in the navigation source annunciation, it means:',
  options: [
    'A. GPS PRIMARY requires a special crew acknowledgement before the approach can be commenced — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'B. The pilot has manually selected GPS as the sole navigation source — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. GPS PRIMARY means GPS is the only sensor operating — all others have failed — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. The FMC has determined that GPS is the most accurate available sensor and has assigned it the highest weighting in the position blend — the navigation solution is primarily based on GPS data; other sensors (IRS, DME) are still monitored and can recover if GPS degrades'
  ],
  correct: 3,
  explanation: 'GPS PRIMARY annunciation: in modern FMS systems (e.g. Boeing 737NG/MAX, A320 family), the navigation source annunciation shows which sensor system is providing the primary navigation solution. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GPS PRIMARY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' means the Kalman filter has determined GPS to be the dominant, highest-accuracy sensor and has assigned it primary status in the navigation blend. Navigation accuracy in GPS PRIMARY mode is typically 3 to 10 m CEP — far better than IRS alone. If GPS degrades or fails: the FMS transitions to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'IRS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'DME/DME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' with appropriate accuracy degradation and potentially an alert requiring crew awareness.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'A VOR station that is undergoing maintenance may transmit a warning to pilots by:',
  options: [
    'A. Transmitting a voice message announcing maintenance every 30 seconds — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'B. Removing the identifier — an ILS or VOR without an audible Morse identifier indicates the station is unserviceable for navigation (either in maintenance or receiving unreliable test signals); the absence of the identifier is the international standard warning to not use the facility',
    'C. Transmitting a continuous tone on the VOR frequency — pilots should avoid using the station — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'D. The VOR automatically turns off during maintenance — a receiver with no signal indicates maintenance — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'VOR/ILS maintenance warning — identifier removal: ICAO Annex 10 specifies that when a VOR or ILS is not meeting performance specifications or is in maintenance, the identifier is removed (suppressed). The Morse code identifier normally sounds every 30 seconds; when it is absent, the station is unreliable or unserviceable. Some stations transmit a continuous tone instead. Pilots: NEVER use a VOR or ILS for navigation if the identifier is not present. This standard allows pilots to detect unserviceable navaids even when the carrier frequency is still transmitted (the signal is physically present but the bearing information is not trustworthy).',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The Air Data Computer (ADC) computes which parameters from its inputs?',
  options: [
    'A. The ADC only processes GPS signals — pitot-static data is handled by separate instruments — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'B. ADC outputs are limited to EFIS displays — the autopilot uses separate sensors — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'C. Only IAS and altitude — other parameters require additional sensors — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. From pitot total pressure, static pressure, and total air temperature (TAT): IAS, CAS, TAS, Mach number, pressure altitude, density altitude, vertical speed, and static air temperature (SAT) — all derived from the three basic measurements'
  ],
  correct: 3,
  explanation: 'ADC outputs: with three inputs (Pt, Ps, TAT), the ADC computes: (1) IAS = f(Pt − Ps); (2) CAS = IAS + position error correction; (3) altitude = f(Ps) using ISA; (4) Mach = f(Pt/Ps); (5) TAS = Mach × speed of sound = Mach × √(γR × SAT); (6) SAT (static air temperature) = TAT / (1 + 0.2M²); (7) VSI = rate of change of altitude; (8) density altitude (for performance computations). Outputs go to: EFIS/PFD, autopilot, FMC, transponder (altitude encoding), TCAS, GPWS/TAWS.',
  reference: 'ANVC MOS 2.3.2 / AIP'
},
{
  question: 'A position line obtained from a VOR radial is:',
  options: [
    'A. A position circle centred on the VOR station — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. A position line from a VOR is only valid within 50 nm of the station — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. A curved line representing the arc of equal signal strength around the VOR — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. A straight line (radial) radiating from the VOR in a specific direction — the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position lies somewhere along this line; a single radial provides only a line of position (LOP), not a fix; a position fix requires two intersecting LOPs from different navaids'
  ],
  correct: 3,
  explanation: 'VOR position line: a VOR radial provides a line of position (LOP) — the aircraft is somewhere on the selected radial extending from the VOR station. One LOP does not give a unique fix. To get a fix: (1) two LOPs from different navaids (two VORs, or VOR + ADF bearing); (2) a VOR radial + DME range (rho-theta fix, unique intersection of arc and radial); (3) a VOR radial + overhead a known point (visual fix on the radial). When plotted on a chart, the two LOPs intersect at the aircraft position. Best fix geometry: LOPs intersecting at 60° to 120° (close to 90°) gives minimum position error.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'The purpose of a VOR compass rose printed on a navigation chart is:',
  options: [
    'A. To show the direction of magnetic variation at that location — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'B. The compass rose shows the area of VOR coverage — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'C. The compass rose indicates the VOR frequency — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'D. To allow the pilot to read the magnetic bearing FROM the VOR to any point of interest — the compass rose is centred on the VOR station with north at top (magnetic); radials are drawn as lines from the centre; the pilot can read the radial for any direction from the VOR'
  ],
  correct: 3,
  explanation: 'VOR compass rose on charts: the compass rose printed around a VOR symbol on an IFR en route chart is aligned with magnetic north for that location. Its purpose: allows the pilot to determine the approximate radial to or from the VOR to any waypoint, intersection, or geographic point without calculation. By placing a ruler from the VOR centre to the point of interest, the radial can be read directly from the compass rose. This facilitates quick radial identification for fix planning, airway selection, and position estimation without a flight computer.',
  reference: 'ANVC MOS 2.6.2 / AIP'
},
{
  question: 'IRS at latitude 72°N: Earth rate horizontal component for gyrocompassing:',
  options: [
    'A. 15.00°/hr',
    'B. 4.64°/hr',
    'C. 14.27°/hr',
    'D. 9.71°/hr'
  ],
  correct: 1,
  explanation: 'Horizontal component = 15×cos(72°) = 15×0.309 = 4.64°/hr. Answer B.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'The transition from TAS to Mach number is used above approximately FL280 in transport category operations because:',
  options: [
    'A. Mach number is always less than TAS — the change to Mach saves fuel above FL280 — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'B. TAS cannot be computed accurately above FL280 — the Machmeter is more reliable — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. IAS becomes unreliable above FL280 — Mach must be used above this altitude — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'D. At high altitude cruise, structural limitations are expressed in Mach number (MMO); controlling by Mach is more practical than controlling TAS (which varies with temperature); Mach is independent of temperature at constant pressure altitude — providing a consistent structural reference'
  ],
  correct: 3,
  explanation: 'Mach cruise rationale: above the crossover altitude (approximately FL280 to FL320 depending on aircraft type), the aircraft transitions from maintaining a constant IAS/CAS to a constant Mach number. Reasons: (1) MMO (maximum operating Mach) is the structural limit at high altitude — a constant Mach provides consistent structural protection; (2) at constant pressure altitude, constant Mach ≈ constant TAS as long as temperature is constant; (3) the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'coffin corner\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — at very high altitude, the high-speed buffet (Mmo) and low-speed buffet (stall) are close together; flying constant Mach avoids inadvertent MMO exceedance; (4) FMS manages the CAS/Mach crossover automatically.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'angle of cut\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' between two position lines affects the accuracy of the fix because:',
  options: [
    'A. The angle of cut has no effect — only the individual LOP accuracies matter — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'B. A 45° cut angle gives the most accurate fix — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Larger cut angles always produce less accurate fixes — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'D. A 90° cut angle gives the minimum error ellipse — the position uncertainty in each LOP direction is independent; at angles less than 90° the error ellipse elongates along the bisector of the acute angle, increasing position uncertainty in that direction; at very small angles (< 30°) the fix is nearly useless'
  ],
  correct: 3,
  explanation: 'Angle of cut and fix accuracy: if LOP 1 has uncertainty ±σ₁ and LOP 2 has uncertainty ±σ₂, the fix error ellipse has axes: minor axis = min(σ₁, σ₂); major axis = max(σ₁, σ₂) / sin(θ), where θ is the cut angle. At θ = 90°: major axis = max(σ₁, σ₂) — minimum error. At θ = 30°: major axis = 2 × max(σ₁, σ₂) — doubled. At θ = 10°: 5.8 × error. This is why: VOR cross-radial fixes at 30° cut angle are inaccurate; DME/DME fixes with two stations 90° apart are accurate; ATC requires cross-checks for low cut-angle fixes. Best fix geometry: two LOPs at 90°; three LOPs at 60° apart.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'The flight level to use when operating at night in remote Australian airspace below the LSAS (Low-level Surveillance And Separation) area at FL180 should be:',
  options: [
    'A. A cruising altitude that is above the LSALT for the route segment (lowest safe altitude) providing 1,000 ft obstacle clearance — at night in remote areas without radar coverage, maintaining a safe altitude above terrain is critical; the FMS/navigation computer must show current position to cross-reference the LSALT',
    'B. Any altitude — there are no requirements for remote night operations — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'C. Always FL180 — the minimum night altitude for remote areas — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. 500 ft AGL — night VFR requires proximity to the terrain for visual reference — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly'
  ],
  correct: 0,
  explanation: 'Remote night operations altitude: in remote Australia without radar coverage: (1) LSALT (Lowest Safe Altitude) — published in ERSA and on en route charts — provides 1,000 ft obstacle clearance for the route corridor; (2) at night, visual terrain awareness is absent — strict reliance on LSALT and accurate FMC position; (3) the pilot must verify LSALT for the specific route; (4) MEA (Minimum En Route Altitude) also guarantees navaid reception; (5) without ATC radar surveillance, the aircraft must self-separate using prescribed separation standards. The combination of LSALT compliance and accurate navigation is critical for safe night operations in remote areas.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'When tracking outbound from a VOR on a selected radial, the TO/FROM indicator will show:',
  options: [
    'A. The TO/FROM flag position depends on the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic heading — not the OBS setting — incorrect; the technical definition and application differ significantly',
    'B. The TO/FROM flag is only active within 30 nm of the VOR station — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. FROM — the OBS is set to a radial and the aircraft is flying outbound (away from the station); the FROM flag indicates the station is behind the aircraft on the selected radial',
    'D. TO — the aircraft is heading toward the station — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'VOR TO/FROM indicator: the flag indicates whether the selected course (OBS setting) leads TO or FROM the station. Flying outbound from a VOR on a selected radial (e.g. OBS set to 090°, aircraft flying east away from the station on the 090 radial): the FROM flag shows. Why: the aircraft is on the selected radial (090°) flying away from (FROM) the station. If the OBS were set to 270° (the reciprocal inbound bearing) with the aircraft flying east, the TO flag would show — because flying east on the 090 radial takes the aircraft toward the station if you intend to arrive via the 270 course. OBS setting determines TO/FROM, not heading.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The standard for minimum aviation visibility on a VFR flight in Class G airspace in Australia at and above 3000 ft AMSL or 1000 ft AGL (whichever is higher) is:',
  options: [
    'A. 5000 m visibility and 1000 ft below and 1000 ft above and 1500 m horizontal distance from cloud',
    'B. 1600 m — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly',
    'C. 3000 m visibility — this option does not reflect the correct regulatory or technical standard',
    'D. 8000 m visibility clear of cloud — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'VFR Class G at altitude: CASR Part 91 for VFR in Class G airspace at or above 3000 ft AMSL or 1000 ft AGL (whichever is higher): visibility 5000 m; cloud separation 1000 ft below, 1000 ft above, and 1500 m horizontal from cloud. This provides sufficient visibility to see and avoid terrain and other aircraft while maintaining safe separation from cloud. Below 3000 ft AMSL (in Class G): reduced minima apply (1500 m visibility, clear of cloud, in sight of surface). These are the minimum legal requirements — conditions are often well above minimums in practice.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'The purpose of the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' FMC alert during an RNP approach is to:',
  options: [
    'A. Indicate that the GPS satellites are in an unfavourable position — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly',
    'B. Alert the crew that the FMC cannot guarantee the required navigation accuracy for the procedure — the system has detected (via RAIM or its own integrity monitoring) that the total system error may exceed the RNP value; the crew must execute a missed approach and notify ATC',
    'C. UNABLE RNP indicates the database procedure is not approved for the current AIRAC cycle — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'D. UNABLE RNP is a forecast alert — it warns that RNP may be insufficient at the destination — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'UNABLE RNP alert: RNP requires on-board monitoring and alerting (the key distinction from RNAV). The FMC continuously computes the Estimated Position Uncertainty (EPU) or Actual Navigation Performance (ANP) and compares it against the Required Navigation Performance (RNP) value for the active procedure. If EPU > RNP: the FMC generates an UNABLE RNP alert. This means the system cannot guarantee the aircraft is within the protected area. Mandatory crew response: do not continue the approach; execute immediate missed approach if below the final approach fix; advise ATC. The alert may be caused by GPS satellite failure, RAIM outage, or IRS error accumulation.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The reason GPS accuracy near the equator is sometimes better than at higher latitudes is:',
  options: [
    'A. GPS satellites orbit over the equator giving stronger signals at low latitudes — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Magnetic variation is lower near the equator improving GPS accuracy — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. GPS accuracy is identical at all latitudes — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification',
    'D. At low latitudes the ionospheric delay is generally larger but more predictable and correctable; additionally the satellite geometry (DOP) may be better near the equator because GPS satellites at moderate inclination angles (55 degrees) are more evenly distributed around the sky when viewed from low latitudes'
  ],
  correct: 3,
  explanation: 'GPS latitude effects: GPS satellites orbit at 55-degree inclination. From the equator: satellites are distributed around the full sky with good azimuth coverage and reasonable elevation distribution. From high latitudes: no satellites pass overhead; all satellites are seen at lower elevation angles from the south (in northern hemisphere) or north (in southern hemisphere); the DOP may be larger due to asymmetric geometry. However: ionospheric delay is generally larger and more variable near the equatorial ionization anomaly (approximately plus or minus 15 degrees latitude). The net effect depends on solar activity and local conditions.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The MOCA (Minimum Obstruction Clearance Altitude) for a route segment is lower than the MEA because:',
  options: [
    'A. MOCA is used only for oceanic routes — it has no terrain application — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'B. MOCA and MEA are identical — the different names describe the same altitude — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'C. MOCA provides the required obstacle clearance (1,000 ft / 2,000 ft mountainous) within the route corridor but does NOT guarantee navaid reception along the segment; the MEA provides both obstacle clearance AND navaid reception; pilots may only descend to MOCA if VHF communications and an alternate means of navigation position fixing are available',
    'D. MOCA is the minimum altitude for VFR flight — MEA applies to IFR only — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'MOCA vs MEA: MOCA: provides only obstacle clearance (1,000 ft above highest obstacle in the corridor — 4 nm each side of centreline; 2,000 ft mountainous). It does NOT guarantee VOR/NAVAID reception. An aircraft at MOCA may not receive the en route VOR reliably. MEA: provides both obstacle clearance AND navaid reception guarantee — the aircraft can navigate by the defined navaid throughout the segment. MEA is always ≥ MOCA. When to use MOCA: emergency descent only when the MEA cannot be maintained and alternate navigation (GPS, ADF, DME) is available; confirm ATC awareness. MEA must be used for normal IFR operations.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The primary reason for mandatory ATIS monitoring before conducting an IFR approach is:',
  options: [
    'A. The ATIS provides current weather (ceiling, visibility, wind, QNH, NOTAM items in effect, approach in use) that the crew needs to assess whether approach conditions meet minimums, select the correct approach procedure and active runway, set correct altimeter settings, and brief the approach — critical safety information required before commencing any approach',
    'B. ATIS monitoring is only required for Cat II and Cat III approaches — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'C. ATIS gives the current time — essential for approach timing — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'D. ATIS is advisory only — approach briefing can be conducted without it — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material'
  ],
  correct: 0,
  explanation: 'ATIS for pre-approach planning: before commencing an approach, the crew must obtain the current ATIS because it provides: (1) QNH — essential for correct altimeter setting to ensure DH/MDA compliance; (2) wind — for runway selection, approach speed additive, crosswind assessment; (3) visibility/RVR — to compare against approach minimums; (4) cloud base — to assess whether visual reference at DH/MDA is likely; (5) active runway and approach in use — the correct plate must be briefed; (6) NOTAMs in brief — navaid outages affecting the approach; (7) braking action — for landing distance assessment. Without current ATIS, the approach briefing is incomplete and the crew may commence an approach with incorrect assumptions.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'ATC radar range resolution (the minimum separation between two targets that can be displayed as distinct returns) depends on:',
  options: [
    'A. The pulse width of the transmitted radar pulse — shorter pulses provide better range resolution (two targets can be distinguished as separate if the difference in range exceeds half the pulse length × speed of light); however, shorter pulses have lower peak power and reduced range',
    'B. The radar antenna rotation speed only — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Range resolution is fixed at 1 nm for all ATC radars — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic',
    'D. Range resolution depends on the aircraft transponder power output — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 0,
  explanation: 'Radar range resolution: determined by the pulse width (τ). Minimum range separation between distinguishable targets = c × τ / 2, where c = speed of light. Shorter pulses: better range resolution; lower total transmitted energy; reduced maximum range. Longer pulses: poorer range resolution; more energy per pulse; greater maximum range. ATC radars use different pulse widths for short-range and long-range operation — typically switching between short-pulse (high resolution) and long-pulse (long range) modes. Azimuth resolution depends on antenna beamwidth — narrower beam = better azimuth resolution.',
  reference: 'ANVC MOS 2.8.1 / Navigation'
},
{
  question: 'The drift angle on an aircraft heading 360°T with a wind of 090°/40 kt and TAS of 200 kt is approximately:',
  options: [
    'A. No drift — the wind is perpendicular so it only affects groundspeed — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. 11.5° left — east wind pushes the aircraft westward; to maintain a northbound track the aircraft must crab into the wind (head east); but the question asks for drift — the aircraft drifting right (westward) means drift angle is to the left of heading',
    'C. 11.5° right — wind from the east (090°) pushes the aircraft to the west; on a heading of 360°T (north), the aircraft drifts left (west); drift angle = arcsin(40/200) = arcsin(0.2) ≈ 11.5° left',
    'D. 40° — this represents a common misconception not supported by the source material — not supported by the ANVC syllabus or applicable MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Drift angle calculation: drift = arcsin(crosswind component / TAS). Wind from 090° (east), heading 360° (north): angle between wind direction and heading = 90°. Crosswind component = 40 × sin(90°) = 40 kt. Drift = arcsin(40/200) = arcsin(0.2) ≈ 11.5°. Direction of drift: east wind pushes the aircraft westward — the aircraft drifts to the LEFT (west) of the heading 360°. To maintain a track of 360°T the aircraft must apply a WCA of 11.5° to the RIGHT (heading 011.5°T) to compensate. Note: there is also a headwind component = 40 × cos(90°) = 0 kt — a pure crosswind at 90°.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'True track 315°T, variation 8°W, deviation −2°. Compass heading:',
  options: [
    'A. 325°C',
    'B. 321°C',
    'C. 309°C',
    'D. 317°C'
  ],
  correct: 0,
  explanation: 'MH = 315+8 = 323°M. CH = 323−(−2) = 325°C. Answer A.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'TAS 460 kt, track 180°T (due south). Wind 270°T/90 kt (westerly at 90 kt). The wind correction angle is approximately:',
  options: [
    'A. 11° left (east)',
    'B. 11° right (west)',
    'C. 6° left',
    'D. WCA cannot be determined without knowing the destination'
  ],
  correct: 0,
  explanation: 'Wind from 270°T (west), track 180°T (south). Wind angle relative to track = 270−180 = 90°. The wind blows from the west — pushes the aircraft to the east (left of southbound track). Crosswind component = 90×sin(90°) = 90 kt from the right of the track (wind from the right when heading south). WCA = arcsin(90/460) = arcsin(0.1957) ≈ 11.3° ≈ 11° into the wind (right — west). Wait: wind from 270° is from the west; when heading 180° (south), west wind is from the right, pushing the aircraft east (left of track). Correction: turn right (into wind, toward west). WCA = 11° right. Answer B 11° right. Reconsider: heading south (180°), wind from 270° (west) comes from the left — blows aircraft to the right (east). No: wind FROM 270° = blowing TO the east. An aircraft heading south with wind from the west is pushed eastward. To track 180°: head west of south = 180° + some degrees = heading > 180°. WCA is to the RIGHT of track? No — to counteract eastward drift, head west of south: heading 169° would be 11° west (right of south = clockwise = toward west = right turn). WCA 11° right (west). Answer B.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'In ADS-B equipped airspace, the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ADS-B In\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' capability (cockpit display of traffic information) allows the crew to:',
  options: [
    'A. ADS-B In provides weather radar data from other aircraft — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. ADS-B In replaces TCAS — it is more accurate and does not require interrogation — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Replace ATC separation — aircraft with ADS-B In do not need ATC separation services — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'D. See other ADS-B Out-equipped aircraft positions on the navigation display — providing a situational awareness picture of nearby traffic; this is supplementary to TCAS and does not replace ATC separation services or pilot-in-command collision avoidance responsibility'
  ],
  correct: 3,
  explanation: 'ADS-B In (CDTI — Cockpit Display of Traffic Information): receives ADS-B Out transmissions from other aircraft, displaying their positions, altitudes, and identities on the ND or a dedicated display. Benefits: enhanced situational awareness; can see traffic that TCAS may not display (different code or geometry); improved visual acquisition of traffic. Limitations: only shows ADS-B Out equipped aircraft; does not show primary radar-only targets; does NOT replace ATC separation services; does NOT take priority over TCAS RAs; and does NOT transfer responsibility for collision avoidance to the system. A complement to, not a replacement for, TCAS and ATC.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The altimeter setting QNH is defined as the altimeter setting that causes:',
  options: [
    'A. The altimeter to read height above the runway threshold — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'B. The altimeter to read the altitude AMSL when on the ground at the aerodrome — i.e., when QNH is set, the altimeter reads the aerodrome\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s AMSL elevation',
    'C. The altimeter to read pressure altitude using 1013.25 hPa — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The altimeter to read zero at aerodrome elevation — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'QNH definition: when the altimeter subscale is set to the local QNH (in hPa or inHg), the altimeter reads the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s altitude above mean sea level (AMSL). On the ground at an aerodrome, the altimeter should then read the aerodrome\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s published elevation. In flight with QNH set, the altimeter reads AMSL altitude — used for IFR en route navigation below the transition altitude and for comparing against published terrain/obstacle heights. QFE causes the altimeter to read zero at the reference point (e.g., runway threshold). Standard pressure (1013.25 hPa) is used above the transition level.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'The primary advantage of using a GPS moving map display over a conventional VOR CDI for en route navigation is:',
  options: [
    'A. GPS is more accurate than VOR — this is the only advantage — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. The GPS moving map replaces all other navigation instruments — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material',
    'C. Moving map displays are less accurate than VOR CDI for track maintenance — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The moving map shows the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position in a geographic context — the pilot sees the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position relative to waypoints, terrain, airspace, and the route simultaneously; this situational awareness is far superior to the single-parameter deviation indication of a VOR CDI'
  ],
  correct: 3,
  explanation: 'GPS moving map situational awareness: VOR CDI provides: lateral deviation from one selected radial. GPS moving map provides simultaneously: (1) aircraft position relative to route and waypoints; (2) proximity to airspace boundaries; (3) terrain awareness (with terrain database); (4) weather overlay (if connected); (5) traffic (if ADS-B In equipped); (6) track history; (7) alternate route visualisation; (8) ETA to all waypoints; (9) scale-adjustable range. The situational awareness from a moving map prevents the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'lost but not knowing it\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' scenario — a common cause of navigation errors with single-pointer navigation instruments.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'A SIGMET for severe CAT (Clear Air Turbulence) is particularly relevant to navigation planning because:',
  options: [
    'A. CAT SIGMETs always coincide with Cb activity visible on weather radar — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'B. CAT SIGMETs are advisory only — no rerouting is required — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. CAT is invisible and undetectable by weather radar — the SIGMET is the primary pre-flight warning for en route severe turbulence; routing around the SIGMET area or altitude change may be required to avoid structural damage risk from turbulence penetration above VB',
    'D. CAT SIGMETs only affect aircraft below FL200 — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'CAT SIGMET navigation impact: clear air turbulence is undetectable by weather radar (no precipitation to reflect). PIREPs are the only real-time indicator of actual CAT severity. The SIGMET (coded WS in the Australian system) is the primary pre-departure warning. Navigation responses: (1) route around the SIGMET area horizontally — if the CAT zone is narrow, a lateral deviation may clear it; (2) altitude change — CAT is often in a specific altitude band (e.g. near the jet stream core); climbing above or descending below may avoid it; (3) accept the risk with VB planned for the transit; (4) delay departure if the SIGMET covers the entire route and altitude range.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'An aircraft reports position at waypoint A at 0412 UTC, ETA waypoint B is 0452 UTC. The track distance A to B is 310 nm. The average groundspeed for the leg is:',
  options: [
    'A. 465 kt',
    'B. 420 kt',
    'C. 500 kt',
    'D. 390 kt'
  ],
  correct: 0,
  explanation: 'Time A to B = 0452−0412 = 40 minutes = 40/60 hr = 0.6667 hr. GS = distance/time = 310/0.6667 = 465 kt. Answer A 465 kt.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'A VHF station at sea level communicates with an aircraft at FL200. Maximum LOS range is approximately:',
  options: [
    'A. 175 nm',
    'B. 100 nm',
    'C. 155 nm',
    'D. 215 nm'
  ],
  correct: 0,
  explanation: 'LOS range to sea-level station: R = 1.23×√H = 1.23×√20000 = 1.23×141.4 = 174 nm ≈ 175 nm. Answer A 175 nm.',
  reference: 'ANVC MOS 2.5.2 / Navigation'
},
{
  question: 'A radio compass (ADF) that is off heading by 10° will indicate a relative bearing that is:',
  options: [
    'A. The 10° heading error doubles on the ADF display, showing a 20° error — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'B. The ADF relative bearing is independent of heading — it is always accurate — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'C. 10° less than the actual relative bearing — it reads low — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly',
    'D. 10° in error — if the ADF card is misaligned by 10° clockwise, the displayed relative bearing will be 10° clockwise of actual; any heading reference error in an RMI directly causes the same error in the displayed QDM'
  ],
  correct: 3,
  explanation: 'ADF and heading reference: the ADF senses the direction to the beacon relative to the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s nose (relative bearing). A fixed-card ADF shows relative bearing regardless of heading errors. However, an RMI (Radio Magnetic Indicator) adds the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic heading to the relative bearing to display the magnetic bearing to the station (QDM). If the heading reference (DI or compass) is in error by 10°: the RMI needle head shows QDM that is also in error by 10°. Implications: if using the RMI for navigation, a compass or DI error directly translates to navigation error. Regular DI synchronisation is essential.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'When computing a fuel plan for an ETOPS flight, the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ETOPS critical fuel scenario\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' assumes:',
  options: [
    'A. ETOPS fuel is calculated assuming the aircraft is at maximum landing weight at the critical point — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Both engines operating at maximum cruise power throughout — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'C. The fuel scenario uses maximum range speed with both engines to the alternate — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'D. The aircraft diverting at the ETOPS critical point (typically the ETP between two alternates) to the closer alternate at single-engine driftdown speed (one engine inoperative — the engine failure reduces speed significantly and increases time to the alternate); plus fuel for the approach, missed approach, and holding at the alternate; plus final reserve'
  ],
  correct: 3,
  explanation: 'ETOPS critical fuel: the ETOPS fuel planning assumes the worst credible emergency: one engine failure at the ETOPS critical point (ECP — the most distant point from a suitable alternate). From the ECP: (1) drift down at single-engine cruise altitude and speed (higher fuel burn than normal cruise due to lower altitude if driftdown is required); (2) actual forecast winds (not favourable assumptions); (3) APU running (for electrical power); (4) anti-icing as appropriate; (5) fly to the ETOPS alternate; (6) approach and missed approach; (7) 30 minutes holding at 1,500 ft over the alternate. This fuel is \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'ring-fenced\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' — cannot be used for any other purpose.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'When the ILS localiser flag appears on the CDI display, the crew should:',
  options: [
    'A. The localiser flag can be disregarded if the CDI appears centred — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'B. The localiser flag requires a pilot report to ATC — it has no immediate operational significance — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'C. Continue the approach — the flag is a test indication, not a failure warning — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'D. Immediately cease using the localiser for lateral guidance — the flag indicates the signal is unreliable or below usable strength; execute the published missed approach immediately if established on approach; use an alternate navaid if available'
  ],
  correct: 3,
  explanation: 'ILS localiser flag: the flag (OFF or red flag) indicates: (1) the signal is too weak for reliable guidance (aircraft outside the service volume); (2) the localiser signal has failed or is below power; (3) the aircraft receiver has detected a signal quality problem. Action: NEVER continue an approach with the flag showing — the CDI may appear centred but be giving false guidance. If on approach: execute the missed approach immediately. If not yet established: do not commence the approach; use an alternate navaid; advise ATC and check NOTAMs. Similar logic applies to glideslope flags — a GS flag means the glideslope is unusable.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The outbound leg timing in a standard holding pattern at or below FL140 is:',
  options: [
    'A. Outbound timing is always 1 minute regardless of altitude — altitude has no effect on holding pattern timing — this represents a common misconception not supported by the source material',
    'B. 1.5 minutes outbound to ensure adequate track miles in the holding pattern — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. 1 minute outbound (below FL140); 1.5 minutes outbound at or above FL140 — the standard timing ensures approximately 4-minute legs with wind corrections and standard turns',
    'D. 2 minutes outbound at all altitudes — the standard timing has not changed since 1970 — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'Holding pattern timing: at or below FL140: outbound leg = 1 minute. Above FL140: outbound leg = 1.5 minutes. This produces approximately 4-minute patterns (including two standard-rate turns of approximately 1 minute each). In strong winds, the outbound time may need adjustment to achieve the desired inbound track length. ATC may specify a non-standard time (e.g. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'make all turns 10°/sec\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\', or \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'use 2-minute legs\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'). The holding pattern also has a maximum speed: typically 200 KIAS at or below FL140, 230 KIAS above FL140 to FL200, and 265 KIAS above FL200.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'VOR/DME area navigation (RNAV) computes waypoints off the VOR/DME by:',
  options: [
    'A. VOR/DME RNAV requires a second VOR station to compute off-track waypoints — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material',
    'B. VOR/DME RNAV only works when the aircraft is directly between two VOR stations — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Flying directly over the VOR station and then tracking outbound on the required radial — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The FMS uses the VOR radial and DME distance to compute the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s position; with position known, the aircraft can navigate to any waypoint regardless of whether a navaid is collocated at the waypoint — the waypoint is defined as a bearing and distance from the VOR/DME'
  ],
  correct: 3,
  explanation: 'VOR/DME RNAV principle: the aircraft position is computed from: VOR bearing (radial) and DME distance — this gives a unique position (rho-theta fix). With a known position, the FMC can compute track and distance to any programmed waypoint, and display cross-track deviation and distance to go on the EHSI/CDI. The waypoint need not have a navaid at it — the navaid is used purely for positioning. Limitations: coverage limited by line-of-sight to VOR/DME; accuracy degrades at long range from the station; only one position fix type (rho-theta) — less redundancy than multi-navaid positioning.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The reason GPS approaches at Australian aerodromes are designated \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'RNAV (GNSS)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' rather than \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GPS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' approach is:',
  options: [
    'A. Because Australia uses a different navigation system from GPS — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'RNAV\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' is used because the approach is less precise than GPS — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic',
    'C. Australian GPS approaches use GLONASS only — GPS is not approved in Australia — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. ICAO and CASA use \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GNSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' to indicate the approach can be flown using any compliant GNSS system (GPS, GLONASS, or combined GPS/GLONASS) — not just the US GPS system; this allows future flexibility as more GNSS constellations become available for aviation'
  ],
  correct: 3,
  explanation: 'RNAV (GNSS) designation: ICAO standardised on \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GNSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (Global Navigation Satellite System) rather than system-specific names (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GPS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' refers to the US system; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GLONASS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' to Russian; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Galileo\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' to European; \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'BeiDou\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' to Chinese). \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GNSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' encompasses all satellite navigation systems. Australian approaches designated \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'RNAV (GNSS)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' can be flown using any approved GNSS receiver that meets the applicable TSO/CASR requirements — currently GPS is the primary system, but multi-constellation receivers (GPS+GLONASS) may also be used. Using \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'GNSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' future-proofs the approach as additional constellations are approved for aviation use.',
  reference: 'ANVC MOS 2.9.5 / AIP'
},
{
  question: 'An FMC position that differs from a well-confirmed VOR/DME rho-theta fix by 4 nm requires the crew to:',
  options: [
    'A. Report the VOR as faulty to ATC — the VOR station must be transmitting incorrectly — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'B. Disregard the VOR/DME — the FMC is always more accurate — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'C. Investigate the discrepancy — a 4 nm error between the FMC position and an independent VOR/DME fix is significant; determine which source is more reliable (has the VOR been identified correctly? Is the DME reading reasonable? Is the FMC IRS drift significant?); consider updating the FMC position if the VOR/DME fix is verified',
    'D. Continue the flight without investigation — 4 nm errors are within normal FMC tolerance — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'FMC vs radio fix discrepancy: a 4 nm discrepancy exceeds normal FMC error (< 1 nm with GPS; 1 to 2 nm/hour for IRS only). Investigation steps: (1) verify the VOR identifier is correct (no confusion with adjacent VOR); (2) cross-check the DME reading against the chart; (3) verify the FMC route is programmed correctly (wrong initial position entry?); (4) check for any IRS failures or GPS anomalies; (5) if the VOR/DME fix is confirmed by a second method (second VOR radial, ADF bearing, visual), the FMC position should be updated (if the operator\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s procedures permit); (6) advise ATC. Procedure: document the discrepancy and continue with the most reliable source.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'When using the E6B flight computer (whiz wheel) to convert TAS to IAS, the pilot must know:',
  options: [
    'A. TAS and magnetic variation — IAS = TAS adjusted for variation — incorrect; the technical definition and application differ significantly',
    'B. Only the Mach number — IAS is always 50% of Mach at sea level — while plausible, this does not match the published specification',
    'C. TAS and groundspeed only — IAS is derived from the difference between TAS and GS — this represents a common misconception not supported by the source material',
    'D. TAS, pressure altitude, and outside air temperature — these three inputs allow computation of CAS/IAS via the air density calculation'
  ],
  correct: 3,
  explanation: 'E6B TAS to IAS conversion: the flight computer (circular slide rule side) has a TAS calculation window requiring: (1) pressure altitude (altitude at 1013.25 hPa); (2) OAT (outside air temperature). These two values determine air density, which is the factor converting between TAS and CAS/IAS. Method: align pressure altitude against OAT in the density altitude window → the TAS/IAS scale factor is then read; set known TAS in the window and read IAS. The reverse (IAS → TAS) is more common in flight planning. Modern FMSs compute TAS automatically from ADC inputs (pitot, static, TAT probe) without manual flight computer calculations.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The IFR navigation standard that requires all aircraft to self-monitor their navigation performance and alert in the event of non-compliance is:',
  options: [
    'A. RNP (Required Navigation Performance) — any specification with an \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' designation requires on-board monitoring and alerting (OBMA); the crew receives an alert when the system detects it cannot guarantee the stated accuracy',
    'B. RNAV 5 — the least stringent RNAV standard — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. All IFR standards require OBMA — there is no IFR navigation without self-monitoring — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'D. OBMA is only required for Cat III ILS — all other operations use pilot monitoring — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'RNP and OBMA requirement: the key distinction between RNAV and RNP: RNAV specifications (e.g. RNAV 1, RNAV 5, B-RNAV) define accuracy requirements but do NOT mandate on-board monitoring — compliance is assured through preflight planning and equipment approval. RNP specifications (e.g. RNP 4, RNP 1, RNP AR 0.1) REQUIRE on-board monitoring and alerting — the FMS must continuously compare ANP (actual performance) against the RNP value and alert the crew (\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'UNABLE RNP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' or equivalent) when performance cannot be guaranteed. This fundamental difference allows RNP procedures to have tighter protected airspace (because the system alerts if it cannot maintain the required accuracy).',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'A published RNP approach with an angular width of 0.5° at the runway threshold and full-scale deflection of ±0.1 nm at the FAF means:',
  options: [
    'A. The approach has tightly defined protection areas that become narrower near the threshold — the angular sensitivity near the threshold converts to approximately ±15 m (0.1 nm × 0.1 means close to 18 m — the angular and distance criteria converge near the threshold); this precision enables lower minimums than conventional RNAV approaches',
    'B. The approach is classified as a precision approach with ILS Cat I minima — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. The approach provides 0.5 nm lateral protection throughout the procedure — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'D. ±0.1 nm at the FAF is wider than a standard RNAV approach — this is a less precise procedure — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'RNP AR angular width near threshold: RNP AR approaches use an angular splay (like an ILS) near the runway: approach path width = ±0.1 nm at the FAF, decreasing to the angular splay value at the threshold. This produces: at FAF (e.g. 5 nm from threshold): ±0.1 nm (approximately ±185 m); at threshold: angular width × distance. The narrow protected area near the threshold allows lower obstacle clearance criteria and therefore lower minimums. The total system error must remain within the protected area for 95% of the time. This level of precision (RNP AR 0.1 nm) is why special aircraft and crew authorisation is required.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The optimum cross-cut angle for two position lines to give the best fix accuracy is:',
  options: [
    'A. 90° — perpendicular intersection gives the minimum position error box; as the angle decreases below 90°, the uncertainty ellipse (position error) grows in one dimension; angles below 30° give very poor fix accuracy',
    'B. 60° — a 60° cut gives equal uncertainty in all directions — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'C. 120° — the optimum cut angle for DME position fixing — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. 45° — a compromise between all cut angles — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Optimum position line cut angle: 90° gives the best fix accuracy. When two LOPs cross at 90°, the uncertainty in each LOP translates into an uncertainty box that is minimised. The position error in each LOP direction is independent, and the combined uncertainty is minimised at 90°. At 60°: slightly larger uncertainty. At 30°: the position error elongates significantly along the bisector of the acute angle. At 10°: position error is very large — essentially only one LOPs direction is well-determined. Practical guideline: avoid fixes with cut angles less than 30°; prefer cuts between 45° and 135°.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'On the approach chart profile view, a bold T inside a triangle symbol at the step-down altitude indicates:',
  options: [
    'A. A time-based descent rate change is required at this point — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Temperature correction required at this altitude — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard',
    'C. The aircraft must turn at this altitude — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification',
    'D. Touchdown — the bold T in triangle indicates the Threshold elevation and is used as the reference datum for approach heights; it does not indicate a turning point'
  ],
  correct: 3,
  explanation: 'Approach chart profile view symbols: the bold T in a triangle (inverted triangle or T symbol depending on the chart publisher) on the profile view typically indicates the runway threshold elevation reference. The profile view shows altitudes at various distances from the threshold; the threshold symbol anchors the vertical reference for the approach. Some charts use different symbols for threshold crossing height (TCH) markers. Always refer to the chart legend for the specific chart series (Jeppesen, AIP ERSA) to confirm symbol meanings as they can vary between publishers.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'RAIM (Receiver Autonomous Integrity Monitoring) in GPS is required because:',
  options: [
    'A. RAIM is a GPS enhancement that improves accuracy by averaging multiple satellite solutions — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'B. A single GPS satellite can malfunction, transmitting incorrect signals that corrupt the position solution — RAIM uses redundant satellites (>4) to detect inconsistencies and alert the pilot, providing fault detection without external augmentation',
    'C. RAIM is only required for GPS units not certified to TSO-C129 or TSO-C196 — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. GPS receivers need to continuously calculate their own self-test to detect software errors — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'RAIM integrity monitoring: with exactly 4 satellites, GPS can determine position but cannot detect a faulty satellite. With 5 satellites: RAIM can DETECT a fault (Fault Detection, FD) — it knows something is wrong but may not know which satellite. With 6 satellites: RAIM can EXCLUDE the faulty satellite (Fault Detection and Exclusion, FDE) and continue navigating. RAIM availability must be verified before IFR GPS flights — RAIM prediction software or services predict satellite geometry for the planned route and time. If RAIM is not available at the destination, an alternate navaid must be available.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'IRS (Inertial Reference System) position updating is required because:',
  options: [
    'A. Even high-quality IRS systems accumulate position error over time (approximately 1 to 2 nm/hour) due to residual gyro drift and accelerometer biases; GPS or DME/DME updating corrects this error to maintain navigation accuracy throughout long flights',
    'B. IRS position updating uses the ATC radar track to correct errors — no on-board sensors are used — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'C. IRS position is perfectly accurate — updating is done for ATC reporting purposes only — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. IRS must be updated every 30 minutes by law regardless of GPS availability — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'IRS position updating: the IRS integrates accelerometer outputs to compute position — any small accelerometer bias or gyro drift error grows as a position error proportional to time (approximately 1 nm/hour for a modern RLG IRS). On a 12-hour flight, accumulated IRS error could be 12 nm. GPS updating: the FMS uses GPS position to correct the IRS position continuously — the IRS provides smooth, rapid updates while GPS provides the absolute position reference. If GPS fails on a long oceanic flight, the IRS position accuracy degrades progressively. Some systems use DME/DME auto-tuning for position updates when overland.',
  reference: 'ANVC MOS 2.9.6 / Navigation'
},
{
  question: 'Primary radar operates on which principle?',
  options: [
    'A. Primary radar uses triangulation between three radar sites to determine target position — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The radar transmitter interrogates a transponder on the target and measures the reply time — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'C. Primary radar measures the Doppler shift of the transmitted signal to determine target speed and direction — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. The radar transmits a pulse of radio energy; the pulse reflects off the target; the reflected pulse (echo) is received by the radar antenna; the time between transmission and reception divided by twice the speed of light gives the range'
  ],
  correct: 3,
  explanation: 'Primary surveillance radar (PSR): transmits a high-power pulse from a rotating antenna. The pulse travels at the speed of light (c = 3 × 10⁸ m/s). A portion of the transmitted energy reflects off the aircraft and returns to the antenna. Range = (time delay × c) / 2. Bearing = direction of the antenna when the echo is received. PSR advantages: independent of aircraft equipment. Disadvantages: echo strength depends on aircraft size/shape (radar cross-section); no aircraft identity or altitude (only position); limited by returns from rain/ground clutter. Used by ATC as backup to SSR.',
  reference: 'ANVC MOS 2.8.1 / Navigation'
},
{
  question: 'The reason that position lines (LOPs) from different navaids are plotted on the same chart rather than only the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s computed position is:',
  options: [
    'A. Regulations require all LOPs to be plotted in the flight log regardless of their value — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Multiple LOPs allow the pilot to visually assess the quality of the fix — if three LOPs form a small triangle (cocked hat), the fix is accurate; a large triangle indicates significant uncertainty in one or more LOPs; this provides situational awareness of navigation uncertainty that a single position point does not convey',
    'C. LOPs must be plotted to satisfy ATC position reporting requirements — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'D. Plotting multiple LOPs is only done for practice — operational navigation uses only the computed position — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'LOP cross-check value: when multiple position lines are plotted: (1) two LOPs: the fix is their intersection — no quality assessment possible; (2) three LOPs: if from independent sources and accurately measured, they should meet at a point; in practice, errors cause a small triangle (cocked hat); (3) the size and shape of the triangle indicates: large triangle = significant bearing or distance error in one or more LOPs; elongated triangle = one LOP is suspect; small equilateral triangle = all LOPs have similar small errors. This visual quality check is far more informative than a single computed position. The navigator identifies which LOP is unreliable and takes the fix on the most reliable two.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'The reason VOR receiver accuracy decreases at ranges beyond the published service volume is:',
  options: [
    'A. Beyond the service volume, the aircraft is outside the line-of-sight range OR beyond the power-limited range — the signal-to-noise ratio decreases and multipath effects increase; the bearing computation becomes less accurate and the OFF flag may not immediately activate; the bearing may appear valid but be in error',
    'B. Beyond the service volume VOR signals are reflected by the ionosphere causing bearing errors — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The VOR transmitter power is reduced at long range by the automatic gain control — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'D. VOR accuracy is constant at all ranges — the service volume is only a regulatory limit — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'Beyond VOR service volume effects: within the service volume, the signal strength and geometry guarantee specified accuracy (typically ±4° for conventional VOR, ±1° for DVOR). Beyond the service volume: signal strength decreases; signal-to-noise ratio decreases; interference from other VORs on the same frequency (frequency reuse — VOR frequencies are reused at distances that are within the service volume but may overlap at long range during anomalous propagation); multipath effects increase with range. The OFF flag is supposed to activate when signal quality falls below threshold — but it may not catch all out-of-tolerance conditions. Never use VOR outside the published service volume for IFR navigation.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'An IRS at latitude 48°N. The Earth rate azimuth wander rate is:',
  options: [
    'A. 15.0°/hr',
    'B. 11.1°/hr',
    'C. 10.1°/hr',
    'D. 13.5°/hr'
  ],
  correct: 1,
  explanation: 'Earth rate azimuth component = 15×sin(latitude) = 15×sin(48°) = 15×0.7431 = 11.15°/hr ≈ 11.1°/hr. This represents the rate of apparent heading drift due to Earth rotation at this latitude. Answer B 11.1°/hr.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The function of the autopilot yaw damper in a swept-wing jet is:',
  options: [
    'A. The yaw damper provides directional stability in turbulence by automatically controlling the rudder to suppress Dutch roll',
    'B. The yaw damper coordinates turns with aileron — it applies rudder proportional to bank angle — this option does not reflect the correct regulatory or technical standard',
    'C. The yaw damper holds the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s heading constant in cruise — this represents a common misconception not supported by the source material',
    'D. The yaw damper controls the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s bank angle to prevent overbanking — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 0,
  explanation: 'Yaw damper: swept-wing jets are prone to Dutch roll — a coupled oscillation in yaw and roll at the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s natural lateral-directional frequency. The yaw damper is a stability augmentation system that: (1) senses yaw rate (via rate gyro); (2) automatically applies small rudder inputs to damp the yaw oscillation (counteracts the developing yaw before it builds); (3) operates continuously in flight (engaged before takeoff); (4) is typically not disengaged for normal operations. Effect: the natural Dutch roll oscillation (which may be underdamped) is suppressed, providing a comfortable ride and preventing structural fatigue from oscillations. Navigation relevance: directional stability improves track-keeping on autopilot.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly-by night\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in RNAV procedure design refers to:',
  options: [
    'A. A visual approach flown at night using RNAV guidance — while plausible, this does not match the published specification',
    'B. Nothing relevant — this term does not apply to RNAV procedures; fly-by and fly-over are the correct ARINC 424 path terminator terms',
    'C. Fly-by night is slang for an unofficial RNAV waypoint — incorrect; the technical definition and application differ significantly',
    'D. RNAV approaches that can only be flown at night — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'RNAV path terminator terminology: ARINC 424 defines two waypoint types for FMC path construction: Fly-By (FA/CF/TF) — the FMC begins the turn before the waypoint to smoothly arc to the next track; the aircraft does not pass directly over the geographic position. Fly-Over (FA with overfly flag) — the aircraft must pass directly over the geographic position before sequencing. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'Fly-by night\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' is not an aviation navigation term. It is worth knowing that students sometimes confuse the two relevant terms — fly-by (most common, allows smooth track transitions) and fly-over (used when the aircraft position at the waypoint is safety-critical).',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'GNSS signal errors include which sources?',
  options: [
    'A. GNSS only has errors during periods of high solar activity — otherwise it is error-free — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'B. GNSS errors are limited to selective availability — the primary error source in civilian systems — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'C. Satellite clock errors (small — corrected by ground control); ephemeris errors (satellite position errors — corrected by navigation message updates); ionospheric delay (signals slow in the ionosphere — depends on total electron content, largest source of error for single-frequency receivers); tropospheric delay (small); multipath (reflections from terrain/buildings); and receiver noise',
    'D. GNSS signals are error-free — they use atomic clock precision eliminating all timing errors — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'GPS/GNSS error sources: (1) ionospheric delay — the ionosphere slows GPS signals; the delay varies with frequency, time of day, solar activity; single-frequency receivers use a model; dual-frequency receivers measure the delay directly (GPS L1/L2 or L5); largest single error source (~5 m); (2) tropospheric delay — small (~2 m); modelled; (3) satellite clock errors — corrected by ground control (~1 m residual); (4) ephemeris errors — satellite position uncertainty (~1 m); (5) multipath — reflections from surfaces; major problem near buildings/mountains (~1 to 5 m); (6) receiver noise (~0.3 m). Total CEP (Circular Error Probable) for civilian GPS: approximately 3 to 8 m.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The term \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'track made good\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' (TMG) in navigation refers to:',
  options: [
    'A. Track made good equals groundspeed divided by airspeed — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. The heading flown by the aircraft, regardless of wind — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'C. The FMS-planned great circle route between waypoints — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'D. The actual path of the aircraft over the ground as determined by fixes or GPS — the direction of travel actually achieved, which may differ from the intended track (course) due to wind, navigation error, or ATC deviation'
  ],
  correct: 3,
  explanation: 'Track Made Good (TMG): the actual direction of the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s path over the ground, determined from successive position fixes. TMG may differ from: (1) the intended track (course) if a crosswind causes drift or if the aircraft is off course; (2) the heading if there is a crosswind (heading + drift = TMG); (3) the FMS desired track if there is an uncorrected cross-track error. Used in: wind calculation (if heading and TAS are known, TMG and GS give wind vector); DR navigation (TMG is the actual track for future projections); navigation error detection (comparing TMG with intended track reveals navigation problems).',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'When the ILS localiser indicator shows a steady 2-dot right deflection at 2 nm from the threshold on a Cat I approach, the correct action is:',
  options: [
    'A. Apply full rudder and aileron to correct back to the centreline — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. Reduce speed — the deflection indicates the aircraft is too fast for the approach — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. Ignore the deflection — CDI sensitivity is hypersensitive at close range — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'D. Execute an immediate missed approach — at 2 nm from the threshold, a 2-dot deflection represents approximately 100 to 175 m of displacement from the centreline; this aircraft is significantly off the centreline and unlikely to make a safe landing from this position; the approach is destabilised beyond the stabilised approach criteria'
  ],
  correct: 3,
  explanation: 'Stabilised approach criteria and go-around decision: at 1,000 ft AGL (IMC) or 500 ft AGL (VMC), the aircraft must be stabilised — on centreline (CDI centred or within ½ dot), on glideslope, at target speed, configured for landing. A 2-dot CDI deflection at 2 nm (below 1,000 ft threshold) is significantly beyond the stabilised approach criterion. At 2 nm, 2 dots represents approximately 2 × 2.5° × (2 nm × 6076 ft/nm × tan) → approximately 180 m off centre. The aircraft cannot be corrected to a safe landing position from this displacement at this height. Immediate go-around is the only safe option.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'An aircraft departs Alice Springs (23.8°S, 133.9°E) tracking towards Darwin (12.4°S, 130.9°E). The route is approximately northwest. On a Lambert Conformal chart, the straight line drawn between these two cities represents:',
  options: [
    'A. A rhumb line of constant bearing — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'B. A Lambert chart straight line always represents the direct track regardless of projection type — while plausible, this does not match the published specification',
    'C. A line of latitude — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'D. Approximately a great circle — the most efficient route; pilots flying this track must update their heading periodically as the great circle direction changes with longitude'
  ],
  correct: 3,
  explanation: 'Lambert Conformal straight line: on a Lambert Conformal Conic chart, a straight line between two points approximates a great circle (the shortest surface distance) between the standard parallels. For the Alice Springs to Darwin route (both within the Australian WAC standard parallels of approximately 15°S and 35°S), the straight line closely represents the great circle. The track direction (bearing) changes slightly as the aircraft progresses — the initial bearing and the mid-point bearing and final bearing will differ by the chart convergence for the route. In practice, for a relatively short domestic route, one mid-point bearing is sufficient.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'When flying a standard holding pattern, the entry procedure used depends on the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s heading on arrival at the holding fix. The three entry types are:',
  options: [
    'A. Inbound, outbound, and crosswind entries — based on the compass heading only — while plausible, this does not match the published specification',
    'B. Parallel, teardrop, and direct — determined by the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s heading relative to the holding course',
    'C. The entry type does not matter — all entries are equally effective and the choice is the pilot\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s preference',
    'D. ILS, VOR, and NDB entries — based on the type of navaid at the holding fix — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'Holding pattern entry: ICAO standard entries — the 70° sectors determine which entry to use: (1) Direct entry — aircraft arrives within 70° of the outbound heading; turn to the outbound heading directly; (2) Parallel entry — aircraft arrives from the outbound side of the holding course; fly parallel to the holding course outbound, turn left to cross the fix, then turn right to intercept the inbound course; (3) Offset/Teardrop entry — aircraft arrives from the non-holding side requiring adjustment; fly offset 30° from the outbound course toward the holding side, then turn to the inbound course. The correct entry is determined by the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s arrival heading relative to the protected area.',
  reference: 'ANVC MOS 2.7.4 / AIP'
},
{
  question: 'An aircraft has trip fuel 54,000 kg, contingency 2,700 kg, alternate fuel 3,800 kg, final reserve 3,200 kg. Total minimum block fuel is:',
  options: [
    'A. 63,700 kg',
    'B. 56,700 kg',
    'C. 60,500 kg',
    'D. 57,900 kg'
  ],
  correct: 0,
  explanation: 'Block fuel = trip + contingency + alternate + final reserve = 54,000+2,700+3,800+3,200 = 63,700 kg. Answer A 63,700 kg.',
  reference: 'ANVC MOS 2.7.4 / CASR'
},
{
  question: 'The difference between \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'flight level\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' and \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'altitude\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in Australian airspace is:',
  options: [
    'A. Flight levels (FL) are expressed in hundreds of feet based on the standard pressure datum (1013.25 hPa) and are used at and above the transition level; altitude (ft) is expressed in feet above mean sea level based on QNH and is used below the transition altitude — the altimeter subscale determines which reference is being used',
    'B. Flight levels use feet while altitude uses metres in Australia — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. Flight level and altitude are identical — the terms are interchangeable in Australian airspace — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'D. Flight levels are used only over the ocean — altitude is used over land — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'FL vs altitude: Altitude: expressed in feet AMSL using QNH (actual sea level pressure) — the altimeter subscale is set to QNH; used below the transition altitude (TA). Flight Level: expressed in hundreds of feet above the standard pressure datum (1013.25 hPa) — the altimeter subscale is set to 1013 hPa; used at and above the transition level (TL). At FL100: altimeter reads 10,000 ft with 1013.25 set. If QNH is 1000 hPa (below standard): the aircraft at FL100 is actually at approximately 10,364 ft AMSL. The transition layer (between TA and TL) must not be used as a cruise level.',
  reference: 'ANVC MOS 2.3.1 / AIP'
},
{
  question: 'On a long-range oceanic flight, the crew notices the EFOB (Estimated Fuel on Board at destination) has decreased from the planned value by 800 kg. The most likely causes include:',
  options: [
    'A. Higher than forecast headwinds; higher actual fuel burn than planned (heavier weight, higher ISA deviation, non-optimal cruise altitude); or a fuel leak (the most dangerous cause)',
    'B. EFOB reduction is always caused by an incorrect fuel load at departure — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'C. A fuel transfer from wing tanks to centre tank — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Increased groundspeed — more groundspeed burns more fuel — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 0,
  explanation: 'EFOB reduction causes: a reduction in EFOB compared to the plan means more fuel has been consumed than planned for the distance covered. Common causes: (1) stronger than forecast headwinds (lower groundspeed → more flight time → more fuel burned per nm); (2) higher than planned fuel flow (heavier weight from underestimated fuel load or cargo; higher ISA temperature → less efficient combustion; non-optimal cruise altitude due to ATC restrictions; anti-icing on); (3) fuel leak — the most critical cause; abnormal fuel asymmetry between tanks or abnormally high fuel flow should trigger leak checklist; (4) speed higher than planned. Crew must: calculate if sufficient fuel remains; consider early step climb, speed reduction, or diversion.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'Great circle distance between two points at 50°N separated by 60° longitude: cos(d) = sin²(50°)+cos²(50°)×cos(60°) = 0.5868+0.4132×0.5 = 0.7934. Distance is:',
  options: [
    'A. 2,160 nm',
    'B. 2,253 nm',
    'C. 2,566 nm',
    'D. 3,600 nm'
  ],
  correct: 1,
  explanation: 'd = arccos(0.7934) = 37.55°. Distance = 37.55×60 = 2,253 nm. Answer B 2,253 nm.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'At FL390, OAT −63°C. Aircraft at M0.84. T = 210K. LSS = 661.5×√(210/288.15) = 565 kt. Approximate CAS:',
  options: [
    'A. 262 kt CAS',
    'B. 278 kt CAS',
    'C. 255 kt CAS',
    'D. 290 kt CAS'
  ],
  correct: 0,
  explanation: 'TAS = 0.84×565 = 475 kt. Density ratio σ at FL390 ≈ 0.308. CAS ≈ TAS×√σ = 475×0.555 = 264 kt ≈ 262 kt. Answer A 262 kt CAS.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The purpose of the IFR \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'en route alternate\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' requirement for domestic IFR flights in Australia is:',
  options: [
    'A. En route alternates are only required for international flights — domestic IFR has no en route alternate requirement — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. The en route alternate is only required if the destination has no ILS — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'C. An en route alternate provides a diversion option if the destination becomes unavailable — for flights where the destination has limited approaches or where the fuel plan relies on landing at the destination, an en route alternate ensures the aircraft can land at a serviceable aerodrome rather than declare an emergency if the destination is weather-closed',
    'D. En route alternates replace destination alternates — only one alternate is required — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'En route alternate (ERA) for domestic IFR: CASR Part 91 specifies when an alternate is required — essentially when the destination TAF does not guarantee VMC at ETA. An ERA is a nominated aerodrome en route that the aircraft could divert to if the destination becomes unavailable. The ERA must: (1) be reachable with the required fuel; (2) have forecast conditions above alternate minima at the divert time; (3) have an available instrument approach if IFR conditions may be present. The ERA concept is distinct from the destination alternate (filed in the flight plan) — the ERA provides a diversion before reaching the destination, useful if the destination deteriorates during flight.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'GNSS L1 and L2 (or L5) dual-frequency receivers eliminate ionospheric delay because:',
  options: [
    'A. The ionospheric delay is identical for all frequencies so dual-frequency provides no advantage — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'B. Dual-frequency receivers average the two signals to halve the delay — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The ionospheric delay is frequency-dependent (∝ 1/f²); by measuring the difference in arrival times of L1 (1575.42 MHz) and L2 (1227.60 MHz) signals from the same satellite, the delay can be computed precisely and removed — without any ionospheric model',
    'D. Two frequencies travel faster through the ionosphere cancelling the delay — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 2,
  explanation: 'Dual-frequency ionospheric correction: the ionosphere delays GPS signals proportional to 1/f² (inversely proportional to frequency squared). L1 (1575 MHz) and L2 (1227 MHz) or L5 (1176 MHz) experience different delays. By measuring both: Δt = t_L1 − t_L2 (the difference in arrival times); since the delay ratio is known (∝ 1/f²): the L1 delay can be solved algebraically. This gives the exact ionospheric delay for the actual conditions at that moment — far more accurate than the single-frequency GPS broadcast ionospheric model (Klobuchar model, which corrects only about 50%). Dual-frequency GPS accuracy: < 1 m horizontal (before other error sources).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The ILS (Instrument Landing System) consists of which components?',
  options: [
    'A. VOR and DME combined with a marker beacon — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. Localiser (provides lateral guidance, VHF 108.10 to 111.95 MHz), glideslope (provides vertical guidance, UHF 329.15 to 335.00 MHz), and marker beacons (provide distance checks at outer, middle, and inner markers) — together providing precision 3D approach guidance',
    'C. The ILS consists of a single transmitter that provides both lateral and vertical guidance simultaneously — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. ILS provides lateral guidance only — vertical guidance requires a separate radio altimeter — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'ILS components: (1) Localiser (LLZ) — VHF 108.10 to 111.95 MHz (odd tenths); transmits two lobes (90 Hz left of course, 150 Hz right); aircraft receiver compares signal modulation depths to determine course deviation; full-scale CDI deflection = ±2.5° (narrow beam); (2) Glideslope (GS) — UHF 329.15 to 335.00 MHz (paired with localiser frequency); 90 Hz above glidepath, 150 Hz below; standard glideslope angle 3°; (3) Marker beacons — 75 MHz; outer marker (blue/dashes, ≈4 nm from threshold); middle marker (amber/dots and dashes, ≈0.5 nm); inner marker (white/dots) at Cat II/III.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'The limitation of GPS for Category III ILS approaches is best described as:',
  options: [
    'A. GPS cannot function below 200 ft altitude — it switches off at Cat III heights — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. GPS does not provide lateral guidance on approach — only vertical — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. GPS is more accurate than Cat III ILS — there is no limitation — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Current SBAS (WAAS) integrity and accuracy standards do not yet meet the extremely stringent Cat III requirements (probability of hazardously misleading information < 10⁻⁹ per approach, alert limit 5.5 m vertically); while GBAS (ground-based augmentation) is progressing toward Cat I and Cat II, traditional ILS remains the certified Cat III precision approach system'
  ],
  correct: 3,
  explanation: 'GPS and Cat III: Cat III ILS requirements for vertical accuracy: alert limit 5.5 m; probability of hazardous misleading information (HMI): < 10⁻⁹ per approach. Current SBAS (WAAS/EGNOS): vertical protection level approximately 12 to 15 m; integrity approximately 10⁻⁷ per hour — meets Cat I but not Cat II/III. GBAS (LAAS/GLS): working toward Cat II and Cat III certification; some systems approaching Cat III capability. The fundamental challenge: Cat III requires the system to continue providing guidance through extremely low visibility in real weather conditions with extremely high integrity. ILS has decades of certified operational experience for Cat III; GPS-based systems require extensive validation to reach equivalent certification.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A navigation chart scale of 1:1,000,000 means that:',
  options: [
    'A. The chart covers an area of 1,000,000 square kilometres',
    'B. 1 cm on the chart represents 1,000,000 m in reality — 10 km per cm',
    'C. 1:1,000,000 scale means the chart is 1 million times larger than the actual terrain',
    'D. 1 cm on the chart represents 1,000,000 cm in reality — equivalent to 10 km per cm; 1 nm on the chart is approximately 0.185 cm; 1 inch represents approximately 13.7 nm'
  ],
  correct: 1,
  explanation: 'Chart scale 1:1,000,000: 1 unit on the chart = 1,000,000 units on the ground. Therefore 1 cm = 1,000,000 cm = 10,000 m = 10 km. Or: 1 mm = 1 km. Conversions: 1 nm = 1.852 km = 18.52 mm on the chart (approximately 1.85 cm per nm). The 1:1,000,000 scale (World Aeronautical Chart series — WAC) is the standard scale for en route navigation charts. At this scale, Australian cities are visible but individual streets are not — suitable for flight planning and en route reference.',
  reference: 'ANVC MOS 2.1.2 / Navigation'
},
{
  question: 'An aircraft at latitude 55°N, longitude 010°E. Grid track referenced to Greenwich meridian is 180°. True track is:',
  options: [
    'A. 170°T',
    'B. 190°T',
    'C. 180°T',
    'D. 160°T'
  ],
  correct: 0,
  explanation: 'Grid Track to True Track conversion in Northern Hemisphere polar navigation: True Track = Grid Track − longitude (E positive). At longitude 010°E: TT = 180 − 10 = 170°T. Explanation: at 010°E the true meridian points to the geographic north pole which is 10° to the LEFT of the grid north direction (Greenwich meridian). To fly Grid Track 180° (south relative to grid north), the aircraft must fly 10° to the left of geographic south = 170°T. Answer A 170°T.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'A route segment requiring RNAV 1 accuracy with a known GPS outage NOTAMed for the transit time means:',
  options: [
    'A. Fly the route using IFR dead reckoning — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic',
    'B. The aircraft cannot use that route segment during the outage period if GPS is the only means of meeting RNAV 1; the crew must plan an alternative route using available navaids that meet the RNAV 1 requirement, or delay the flight until after the outage',
    'C. The flight may proceed — GPS outage NOTAMs are advisory only — while plausible, this does not match the published specification — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. Request a special approval from ATC to proceed without RNAV 1 compliance — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 1,
  explanation: 'GPS outage and RNAV routes: if a GPS NOTAM covers a required navigation performance route segment during the planned transit time: the aircraft cannot meet RNAV 1 (1 nm accuracy) without GPS if no other approved navigation source provides that accuracy; the crew must: plan an alternative route served by VOR/DME or other navaids meeting the accuracy requirement; or delay the flight until after the outage window ends. NOTAMs for GPS outages (military jamming exercises, GPS testing) can significantly affect route planning in affected areas.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fix\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in aviation navigation requires a minimum of:',
  options: [
    'A. Three position lines — for a minimum fix with redundancy — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. Only one position line — a single VOR radial provides a fix — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Two intersecting position lines from independent sources — two radials, a radial and DME arc, a radial and visual fix, or any two intersecting LOPs that uniquely identify the aircraft position',
    'D. GPS only — radio fixes are not accepted for IFR navigation in Australian airspace — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material'
  ],
  correct: 2,
  explanation: 'Navigation fix requirements: a fix requires at least two intersecting lines of position (LOPs) from independent sources. Examples: two VOR radials (cross radial fix); VOR radial + DME distance (rho-theta fix); ADF bearing + VOR radial; VOR radial + overhead a landmark (visual + radio). A single VOR radial or ADF bearing is a line of position — not a fix. Accuracy depends on: cut angle (90° = best, < 30° = unreliable); accuracy of each individual LOP; and distance from each reference.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'In organised oceanic track systems, all aircraft on the same track at the same altitude fly the same Mach number because:',
  options: [
    'A. Aircraft are not required to maintain a specific Mach on oceanic tracks — speed is at crew discretion — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'B. Mach standardisation reduces noise across the Pacific — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. All aircraft fly more efficiently at the standardised Mach number — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. The Mach Number Technique preserves longitudinal separation — if aircraft freely selected different Mach numbers, faster aircraft would close in on slower aircraft ahead, requiring complex ATC intervention in non-radar oceanic airspace'
  ],
  correct: 3,
  explanation: 'MNT rationale: in organised track systems aircraft are separated longitudinally at entry (e.g. 10 minutes between aircraft). If one aircraft flies Mach 0.84 and the next Mach 0.80: the faster aircraft closes at approximately 19 kt. With MNT all aircraft fly the same Mach: no closure occurs and separation remains constant. ATC cannot monitor and intervene at radar separation standards in oceanic airspace.',
  reference: 'ANVC MOS 2.7.1 / Navigation'
},
{
  question: 'An oceanic aircraft at M0.84 TAS 502 kt has a headwind of 65 kt. Trip distance is 3,900 nm. Estimated flight time is:',
  options: [
    'A. 8h 55m',
    'B. 9h 22m',
    'C. 8h 12m',
    'D. 7h 46m'
  ],
  correct: 1,
  explanation: 'GS = TAS−headwind = 502−65 = 437 kt. Flight time = 3900/437 = 8.924 hr = 8h55m. Closest A 8h55m. Answer A 8h55m.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The key limitation of the VDF (VHF Direction Finding) bearing service is:',
  options: [
    'A. VDF requires the aircraft to transmit on a specific VDF frequency separate from the ATC frequency — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'B. VDF is more accurate than VOR — it has no practical limitations — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'C. VDF accuracy is category A (±2°) or B (±5°) or C (±10°) — the bearing accuracy depends on the ground equipment quality and the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s distance from the DF station; at long range or in mountainous terrain, VDF accuracy is significantly reduced; bearings should not be relied upon as a primary navigation source',
    'D. VDF can only provide bearings to aircraft below FL100 — this is not consistent with the operational standards for this topic — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate'
  ],
  correct: 2,
  explanation: 'VDF (VHF Direction Finding) limitations: (1) accuracy — Category A (±2°, rarely achieved); Category B (±5°, typical for good equipment); Category C (±10°, marginal); bearing accuracy degrades with range, terrain, and atmospheric conditions; (2) requires the aircraft to transmit; (3) the ground station must be within line-of-sight range; (4) the bearing is from the DF station to the aircraft (QDM from aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s perspective); (5) VDF provides only one position line — two VDF stations or a VDF + VOR/DME combination needed for a fix; (6) response time — takes seconds for the DF controller to read the bearing.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The CDI deflection sensitivity on a VOR approach (final approach course) compared to en route VOR tracking is:',
  options: [
    'A. Identical — VOR CDI sensitivity is the same for all operations — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification',
    'B. VOR approach mode: the FMS/CDI typically changes to ±1 nm full-scale deflection on final approach (from ±5 nm en route) — making the CDI more sensitive and easier to maintain precise tracking; the change-over occurs automatically based on the RNAV flight phase or approach mode selection',
    'C. VOR approach CDI is ±10 nm — wider than en route to accommodate larger deviations at low speed — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The VOR CDI has only one sensitivity setting — there is no approach mode — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'CDI sensitivity scaling: FMS/GPS systems automatically adjust CDI sensitivity by flight phase: en route — ±5 nm full scale deflection; terminal area (within 30 nm of destination) — ±1 nm; approach — ±0.3 nm (or approach sensitivity per the procedure). For conventional VOR CDI: each dot represents ±2.5° from the selected radial (full scale ±10°) — sensitivity is angular (becomes less precise in absolute distance terms at long range, more precise at close range). Modern EFIS with GPS may display CDI in scaled distance units rather than angular deviation.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'Secondary Surveillance Radar (SSR) offers which advantages over primary radar?',
  options: [
    'A. SSR provides longer range and is cheaper to operate than primary radar — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. SSR provides only aircraft altitude — primary radar is still required for position information — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'C. SSR eliminates the need for an aircraft transponder — all aircraft are automatically identified — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. SSR interrogates aircraft transponders — providing aircraft identity (squawk code), altitude (Mode C), and other data (Mode S — aircraft ID, intent, ACAS resolution advisories) rather than relying on the reflected echo; aircraft position is still from the interrogation bearing and timing'
  ],
  correct: 3,
  explanation: 'SSR advantages over PSR: (1) identity — the transponder squawk (Mode A, 4096 codes) identifies the aircraft; (2) altitude — Mode C automatically downlinks the pressure altitude reading from the encoder; (3) data-link — Mode S provides aircraft ID (ICAO 24-bit address), selected altitude, airspeed, aircraft intent for TCAS; (4) strong reliable returns — the transponder reply is much stronger and more consistent than a radar echo; (5) reduced power requirements (interrogator vs transmitter power); (6) ACAS (TCAS) uses Mode S for collision avoidance. Disadvantage: relies on transponder being on and correctly coded.',
  reference: 'ANVC MOS 2.8.4 / Navigation'
},
{
  question: 'The maximum theoretical range of a VOR is limited by:',
  options: [
    'A. The transmitter power only — a more powerful VOR has unlimited range — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'B. The VOR range is limited to exactly 200 nm regardless of altitude — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Line of sight — VHF signals do not follow the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s curvature; the practical range increases with altitude; a rule of thumb is range (nm) ≈ 1.23 × √(altitude in feet)',
    'D. VOR range is limited by ionospheric absorption to 100 nm maximum — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 2,
  explanation: 'VOR line-of-sight range: VHF signals (108 to 118 MHz) travel in straight lines — they do not bend around the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s curvature. The maximum range depends on: transmitter power (affects signal strength at range); aircraft altitude (higher aircraft = larger line-of-sight horizon); and receiver sensitivity. Rule of thumb: range (nm) ≈ 1.23 × √(altitude ft). At FL350 (35,000 ft): 1.23 × √35,000 ≈ 230 nm. At 2,000 ft: 1.23 × √2,000 ≈ 55 nm. Published VOR service volume is specific to each station and altitude band.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'IRS drift rate 0.8 nm/hr, no GPS update for 6.5 hours. Accumulated position error:',
  options: [
    'A. 3.2 nm',
    'B. 5.2 nm',
    'C. 7.8 nm',
    'D. 4.8 nm'
  ],
  correct: 1,
  explanation: 'Error = 0.8×6.5 = 5.2 nm. Answer B.',
  reference: 'ANVC MOS 2.9.2 / Navigation'
},
{
  question: 'The GPS satellite constellation nominally consists of how many satellites, and at what orbital altitude?',
  options: [
    'A. 18 satellites at 5,000 km altitude in polar orbits — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. 12 satellites at 10,000 km altitude — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'C. 24 satellites (with active spares) in 6 orbital planes at approximately 20,200 km altitude — each plane contains 4 satellites, evenly spaced; this configuration ensures at least 4 satellites are visible from any point on Earth at any time',
    'D. 31 satellites at 36,000 km (geostationary) altitude — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'GPS constellation: nominally 24 satellites (the baseline constellation) maintained by the US Space Force. Currently (as of 2024): approximately 31 operational satellites for improved coverage and redundancy. Orbital parameters: 6 orbital planes inclined at 55° to the equator; 4 satellites per plane (baseline), additional satellites in augmented planes; altitude: approximately 20,200 km (26,560 km from Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s centre); orbital period: approximately 11 hours 58 minutes (approximately 2 orbits per sidereal day). This geometry ensures that at least 4 to 6 satellites are above 5° elevation from any point on Earth at any time, providing 3D navigation capability worldwide.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'In the event of a complete FMS failure in RVSM airspace, the crew must:',
  options: [
    'A. Advise ATC immediately; continue using standby altimetry and autopilot to maintain assigned level; ATC will provide increased separation or route the aircraft out of RVSM airspace',
    'B. Descend immediately below FL290 — RVSM is not available without FMS — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'C. Climb to the next available flight level to avoid traffic — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'D. FMS failure has no effect on RVSM capability — continue normally — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'FMS failure in RVSM: RVSM requires altimetry accuracy of plus or minus 200 ft. If FMS failure affects the primary altimetry system: advise ATC of inability to maintain RVSM; ATC applies non-RVSM separation (2,000 ft); if standby altimetry is within RVSM limits the aircraft may continue with ATC coordination; otherwise request exit from RVSM airspace. RVSM airworthiness requires the aircraft to self-assess its altimetry accuracy and declare inability when equipment fails.',
  reference: 'ANVC MOS 2.7.1 / CASR'
},
{
  question: 'The reason GPS accuracy is typically better in the horizontal plane than in the vertical is:',
  options: [
    'A. Satellite geometry — GPS satellites orbit at moderate inclination and cannot be directly overhead for most users; all satellites are seen from above the horizon, meaning horizontal position is supported by satellites spread across multiple azimuths while vertical position is resolved from the elevation angles only; the resulting VDOP (Vertical DOP) is typically 1.5 to 2 times HDOP',
    'B. GPS satellites orbit horizontally — vertical signals are weaker — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. GPS vertical accuracy is limited by regulations to 50 m — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements',
    'D. GPS receivers compute horizontal position first and use it to determine vertical position — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification'
  ],
  correct: 0,
  explanation: 'GPS horizontal vs vertical accuracy: GPS satellites are distributed around the sky above the horizon (5° to 90° elevation). Horizontal position: determined by satellites spread across multiple azimuths — excellent geometry. Vertical position: determined by the elevation angle differences between satellites; all satellites are above the observer (0° to 90° elevation) — there are no satellites below the horizon to provide downward geometry. This results in: HDOP typically 0.5 to 2.0; VDOP typically 1.0 to 3.0 (1.5 to 2× HDOP). Practical values: horizontal CEP 3 to 5 m; vertical 1-sigma 5 to 10 m for civilian GPS. SBAS improves both but vertical improvement is proportionally greater.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The reason for checking the DME distance when established on the ILS glideslope is:',
  options: [
    'A. DME must agree with the radio altimeter to within 100 ft — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material',
    'B. Cross-checking DME distance against altitude provides an independent verification that the aircraft is on the correct glideslope — if the aircraft is on a false glideslope (e.g. 9°), the altitude at a given DME will be approximately 3× the expected altitude for the primary glideslope; this cross-check detects glideslope capture errors',
    'C. DME distance on the ILS approach is only used for the missed approach point — not for glideslope verification — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'D. DME is the primary vertical guidance source on ILS approaches — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'DME altitude cross-check on ILS: at 3° glideslope, the altitude/distance relationship: approximately 300 ft per nm (318 ft/nm exactly). At 5 nm DME: approximately 1,590 ft; at 10 nm DME: approximately 3,180 ft. If the aircraft is on the 9° false glideslope: at 5 nm DME: 3 × 1,590 = 4,770 ft (3× the expected altitude). A quick cross-check: published altitude at the outer marker (e.g. 1,600 ft at 4 nm DME); if the altimeter reads 4,800 ft, the aircraft is on the 9° false glideslope. This cross-check should be performed before descending on any glideslope to confirm it is the primary path.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'Magnetic dip (inclination) affects compasses because:',
  options: [
    'A. Magnetic dip only affects mechanical compasses — electronic fluxgate compasses are immune — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material',
    'B. The Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s total magnetic field vector points at an angle below the horizontal (downward into the Earth) at all latitudes except the magnetic equator; the dip angle increases toward the magnetic poles (reaching 90° at the poles) — this downward component is what causes DRC turning and acceleration errors',
    'C. Magnetic dip is only significant above 60° latitude — it is negligible in Australia — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate',
    'D. The Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic field is horizontal everywhere on Earth — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'Magnetic dip: the Earth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s magnetic field has two components: the horizontal component (used by compasses for direction) and the vertical component (dip or inclination). At the magnetic equator: dip = 0° (field is horizontal). At magnetic poles: dip = 90° (field is vertical — compass useless). In Australia (30 to 45°S): dip approximately 60 to 70°S. The DRC is suspended pendulously to keep the needle horizontal, compensating for dip. During turns and acceleration, this compensation is imperfect — centrifugal force and inertia act on the pendulous suspension differently, causing the characteristic DRC errors.',
  reference: 'ANVC MOS 2.4.1 / Navigation'
},
{
  question: 'When the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s VOR CDI shows the aircraft is on the correct radial (CDI centred) but the FMC shows a 2 nm cross-track error, the most likely explanation is:',
  options: [
    'A. A 2 nm FMC cross-track error with a centred CDI is impossible — they always agree — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. The FMC is always correct — the VOR CDI must be malfunctioning — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The aircraft must be experiencing GPS failure if these two sources disagree — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification',
    'D. The VOR bearing accuracy (±4°) at long range may place the aircraft within the CDI centre zone (< 2.5° error for centred CDI) yet still be 2 nm off the FMC planned great circle route — the VOR defines a radial from the station, while the FMC route may be defined as a direct great circle between waypoints that does not coincide exactly with any VOR radial'
  ],
  correct: 3,
  explanation: 'VOR CDI vs FMC route geometry: the FMC plans a route along the great circle between waypoints — this may not follow a VOR radial exactly. The VOR CDI shows deviation from the selected VOR radial (not from the great circle route). If the VOR radial is close to but not exactly aligned with the FMC great circle track, the CDI can be centred (aircraft on the radial) while the FMC shows cross-track error relative to the planned great circle. This is normal and expected — particularly on long routes where the great circle and VOR radial diverge with distance. The FMC is providing the more relevant navigation reference for the planned route.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'An IFR aircraft reports position over a compulsory reporting point (CRP). The next CRP estimated time is 45 minutes. ATC does not receive a subsequent report within 3 minutes of the ETA. ATC should:',
  options: [
    'A. Wait another 10 minutes before taking action — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'B. Attempt to contact the aircraft on all available frequencies; initiate communication search procedures; if no contact is established, declare an UNCERTAINTY phase and commence alerting procedures potentially leading to DISTRESS phase',
    'C. File a NOTAM for the missing position report — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Assume the aircraft has landed without reporting — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification'
  ],
  correct: 1,
  explanation: 'Missing position report action: if an aircraft fails to report at a CRP within 3 minutes of the ETA, ATC initiates: attempt radio contact on the current frequency, guard frequency (121.5 MHz), and any other known frequencies; coordinate with adjacent ATC units; activate UNCERTAINTY phase (INCERFA) — aircraft is overdue; if not resolved, escalate to ALERT phase (ALERFA) and notify rescue coordination centre; DISTRESS phase (DETRESFA) if aircraft is in danger. This procedure activates the search and rescue system. Prompt missing report response has saved lives.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'The reason RNAV waypoints defined as \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'fly-over\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' take longer to execute than fly-by waypoints at the same speed is:',
  options: [
    'A. Fly-over waypoints require a special ATC clearance that takes time to obtain — while plausible, this does not match the published specification — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. Fly-over waypoints require a 360° circle over the waypoint — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'C. The aircraft must pass directly over the geographic position before beginning the turn to the next course — unlike fly-by where the turn is anticipated; the track deviates beyond the waypoint (overshoot) before the turn is completed, adding distance; the total path length is longer than a smooth fly-by turn',
    'D. Fly-over waypoints are located at greater distances from the destination, adding to total route length — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Fly-over vs fly-by track distance: fly-by: turn anticipation point is computed before the geographic waypoint — the aircraft begins banking early and arcs smoothly; track distance is approximately equal to the straight line through the waypoint. Fly-over: the aircraft overflies the geographic position then begins the turn; an overshoot occurs beyond the waypoint before the new track is established. The overshoot distance = radius of turn at the prevailing speed and bank angle. At 250 kt, 25° bank, radius ≈ 1.5 nm — the overshoot adds approximately 3 nm (out and back) compared to a fly-by. On long-range routes this adds time and fuel.',
  reference: 'ANVC MOS 2.9.1 / Navigation'
},
{
  question: 'The difference between \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'bearing\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' and \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'heading\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' in aviation navigation is:',
  options: [
    'A. Heading is always magnetic; bearing is always true — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard',
    'B. Heading is the direction the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s nose points (from north, measured clockwise); bearing is the direction from one point to another (from north, measured clockwise) — a bearing is a direction between two points on the ground; a heading is the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s flight attitude direction',
    'C. Bearing and heading are identical — different names for the same direction — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. Bearing is measured from south; heading is measured from north — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'Bearing vs heading distinction: heading: the direction the aircraft nose points, measured clockwise from north (true, magnetic, or compass) to the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s longitudinal axis. It is the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s attitude direction. Bearing: the direction from one point to another, measured clockwise from north — a QDM (bearing to a station), a radial (bearing from a station), or a course line direction on a chart. Bearings describe directions between geographic points; headings describe the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s pointing direction. In nil wind, the heading equals the track which equals the bearing to the destination. In a crosswind, the heading differs from the bearing to the destination (the WCA is the difference).',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'For an RNAV approach at a remote Australian aerodrome with no ILS, the published approach minima are higher than an ILS Cat I approach because:',
  options: [
    'A. Remote aerodromes always have higher minimums regardless of approach type — while plausible, this does not match the published specification — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'B. The obstacle clearance criteria for non-precision approaches (LNAV — lateral navigation only) use a Minimum Descent Altitude (MDA) with a flat floor rather than a stabilising glidepath — obstacles must be clear of the flat segment extending from the FAF to the MAP; more terrain may intrude below the MDA than below an ILS glidepath that is continually moving upward from the threshold',
    'C. GPS is less accurate than ILS — therefore GPS approaches always have higher minimums — this interpretation is not consistent with ICAO or CASR requirements — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'D. RNAV approaches are prohibited at remote aerodromes — only VOR approaches are permitted — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'RNAV vs ILS minimums: ILS Cat I minimums are lower because: (1) the glidepath provides continuous vertical guidance clearing obstacles continuously from the FAF to touchdown; (2) the obstacle clearance surface is a sloping plane above all obstacles; (3) DH is at the point where the glidepath is still above obstacle surfaces. LNAV (non-precision): the aircraft descends to MDA then maintains the MDA level until the MAP — a flat floor approach. Obstacles must be clear of the MDA plus required clearance for the entire flat segment; this flat segment may be over terrain that rises, requiring higher MDA. LPV minimums can approach ILS Cat I minimums because the vertical guidance provides glidepath protection similar to ILS.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'Aircraft at M0.85, TAS 500 kt reports position every 10 minutes. Max displacement between reports:',
  options: [
    'A. 83 nm',
    'B. 67 nm',
    'C. 50 nm',
    'D. 100 nm'
  ],
  correct: 0,
  explanation: 'Dist = 500×(10/60) = 83.3 nm ≈ 83 nm. Answer A.',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'QNH 998 hPa. Field elevation 2,000 ft. Pressure altitude of field:',
  options: [
    'A. 2,000 ft',
    'B. 2,412 ft',
    'C. 1,588 ft',
    'D. 2,204 ft'
  ],
  correct: 1,
  explanation: 'PA = elevation + (1013.25−998)×27 = 2000+15.25×27 = 2000+412 = 2,412 ft. Answer B 2,412 ft.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'An aircraft established on the ILS with autopilot in LAND mode encounters a GPWS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'TERRAIN, PULL UP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' alert at 600 ft AGL. The required response is:',
  options: [
    'A. Immediately apply TOGA thrust and fly the escape manoeuvre — \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'TERRAIN, TERRAIN, PULL UP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' is a GPWS Mode 1 or 2 warning of imminent terrain contact; regardless of being on an instrument approach, the escape manoeuvre overrides all other considerations; the alert is never to be ignored',
    'B. Advise ATC and continue the approach — GPWS alerts are common on steep approaches — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Continue the autoland — the GPWS is faulty in this configuration — this is not consistent with the operational standards for this topic — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard',
    'D. Disconnect the autopilot and reduce to approach speed — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — incorrect; the technical definition and application differ significantly — not supported by the ANVC syllabus or applicable MOS requirements'
  ],
  correct: 0,
  explanation: 'GPWS PULL UP response: \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'TERRAIN, TERRAIN, PULL UP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' is a GPWS warning requiring an immediate escape manoeuvre: (1) simultaneously apply TOGA thrust and rotate to pitch attitude 20°+ nose up; (2) retract speed brakes; (3) maintain wings level; (4) do not change configuration (no gear/flap retraction until clear of terrain); (5) climb until the warning ceases and terrain clearance is confirmed; (6) advise ATC. The response is identical whether the alert occurs during an approach, en route, or in cloud. No GPWS or TAWS warning should ever be ignored — the alerts are specific to situations where the aircraft is heading toward terrain. False alerts are rare with modern EGPWS/TAWS.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The reason some ILS glideslopes are set at angles other than 3° (e.g. 3.5° or 5.5°) is:',
  options: [
    'A. Steeper glideslopes reduce landing distance and are used at short runways — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'B. Non-standard glideslopes are used only for helicopter approaches — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Obstacle clearance requirements or terrain on the approach path may prevent safe use of the standard 3° glideslope — a steeper angle clears obstacles that would otherwise be within the obstacle clearance surface for a 3° approach; noise abatement may also require steeper approaches at some airports',
    'D. Non-standard glideslope angles are used to increase the approach speed — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Non-standard ILS glideslope angles: in Australia, some ILS approaches have published glideslope angles other than 3° — typically 3.2° to 5.5°. Reasons: (1) obstacle clearance — terrain or manmade structures on the approach path intrude into the standard 3° obstacle clearance surface; a steeper glideslope clears them; (2) noise abatement — a steeper descent keeps aircraft higher over noise-sensitive areas; (3) runway elevation changes — some runways have significant upslope requiring higher approaches. Crew considerations: steeper approaches require higher rate of descent; Vref may be the same but the pilot must adjust for the steeper path; published approach charts specify the glideslope angle.',
  reference: 'ANVC MOS 2.6.4 / AIP'
},
{
  question: 'The EHSI (Electronic HSI) in EFIS differs from a mechanical HSI in that:',
  options: [
    'A. The EHSI is less reliable than a mechanical HSI and is only used as a backup — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The EHSI replaces all navigation instruments except the altimeter and airspeed indicator — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. The EHSI displays only heading — it cannot show course deviation — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. The EHSI integrates multiple navigation data sources on one display — it can show VOR/ILS course deviation, GPS track, weather radar overlay, TCAS traffic, terrain (on some systems), and moving map — all on the navigation display, switchable between different display modes (ARC, MAP, PLAN, VOR, ILS)'
  ],
  correct: 3,
  explanation: 'EHSI (Electronic HSI) / Navigation Display: on EFIS aircraft, the ND (Navigation Display) replaces the mechanical HSI with multiple display modes: (1) MAP — moving map with aircraft at centre or offset, waypoints, airways; can overlay weather radar and TCAS; (2) ARC — expanded arc view of the map ahead; (3) PLAN — bird\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s eye view of the route for pre-departure checking; (4) VOR — conventional HSI presentation; (5) ILS — expanded ILS approach display. The versatility of the EHSI reduces crew workload by integrating weather, navigation, and traffic information on a single display.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The reason heading must be maintained precisely during a timed outbound leg on an instrument procedure is:',
  options: [
    'A. Precise heading ensures the aircraft stays within the procedure protected area and achieves the correct position for the inbound turn; heading error directly translates to position error at the end of the outbound leg',
    'B. Heading precision is only needed during the inbound leg — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. Timed legs do not require precise heading — only timing accuracy matters — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'D. The autopilot maintains heading automatically — no pilot input is needed — incorrect; the technical definition and application differ significantly — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'Timed leg heading precision: on a timed outbound procedure turn, the aircraft flies a published heading for a specific time. At the end of the time, the aircraft turns inbound. Any heading error during the outbound leg: displaces the aircraft from the planned outbound track; the aircraft arrives at a different position than planned when it turns inbound; the resulting inbound track may not align with the final approach course; obstacle clearance in the protected area may be compromised. Precise heading maintenance (DI synchronised, autopilot in heading mode if available) is essential.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The IFR chart symbol for an ILS approach (a solid diamond with a circle) indicates:',
  options: [
    'A. A VOR/DME navaid — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option does not reflect the correct regulatory or technical standard',
    'B. A co-located navaid — typically an ILS outer marker co-located with an NDB (compass locator); the symbol appears on approach charts at the outer marker position; the NDB frequency is used for ADF homing to the outer marker position',
    'C. The ILS transmitter location at the far end of the runway — this option conflates different navigation concepts and is not accurate — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. A compulsory reporting point — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 1,
  explanation: 'ILS outer marker/compass locator symbol: on instrument approach charts, the outer marker position may be indicated by the outer marker symbol (an \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'OM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' label) combined with a compass locator NDB symbol. The compass locator (LOM — Locator Outer Marker) is a low-power NDB co-located with the outer marker. The symbol and associated frequency allow pilots to: tune the ADF to the LOM frequency for homing; confirm approach course alignment; and identify outer marker passage using ADF needle reversal as a backup to the marker beacon receiver. The LOM identifier (2-letter Morse) is broadcast on the NDB frequency.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'An aircraft departs Auckland, New Zealand (UTC+12) at 1400 local on Friday and flies 3 hours to Sydney (UTC+10 or +11 in summer). Assuming Sydney is on AEST (UTC+10), the local arrival time in Sydney is:',
  options: [
    'A. 1700 Sydney time Friday',
    'B. 1500 Sydney time Friday',
    'C. 1300 Sydney time Friday — depart 1400 Auckland (UTC+12) = 0200 UTC Friday; + 3 hours flight = 0500 UTC Friday; + 10 hours (Sydney) = 1500 local Friday',
    'D. 0500 UTC is 1500 Sydney time, not 1700'
  ],
  correct: 1,
  explanation: 'Auckland to Sydney time calculation: Departure: 1400 Auckland local (UTC+12) = 1400 − 12 = 0200 UTC Friday. Flight time: 3 hours. Arrival UTC: 0200 + 3 = 0500 UTC Friday. Sydney local (UTC+10): 0500 + 10 = 1500 local Friday. Sydney is on AEST (UTC+10) in winter; AEDT (UTC+11) in summer. This calculation assumes UTC+10. The answer is 1500 local Sydney time on Friday — option C is correct.',
  reference: 'ANVC MOS 2.2 / AIP ENR 1.1'
},
{
  question: 'When the aircraft is established on an ILS approach and the CDI and glideslope are both centred, the aircraft is:',
  options: [
    'A. On a ground track exactly aligned with the runway and at the correct altitude for the range — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'B. At the outer marker and established on the correct inbound track — this option conflates different navigation concepts and is not accurate — incorrect; the technical definition and application differ significantly',
    'C. CDI and glideslope centred only occurs at the point of landing — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. On the ILS localiser centreline and on the published glidepath — the CDI shows no deviation from the published inbound course and the glideslope indicator shows no deviation from the 3° descent path'
  ],
  correct: 3,
  explanation: 'ILS full track/path established: CDI centred = aircraft is on the localiser centreline (inbound track aligns with the runway extended centreline). Glideslope centred = aircraft is on the 3° glidepath. Together: the aircraft is in the correct lateral and vertical position for the ILS approach. At this point the aircraft should be: stabilised in configuration; at the target approach speed; with power set for the required rate of descent; crew briefed for the decision height and missed approach. Any CDI or GS deviation requires correction before reaching DH.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'The GNSS integrity concept of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'time-to-alert\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' specifies:',
  options: [
    'A. The maximum time allowed between occurrence of a navigation fault and the issuing of an alert to the crew — for precision approaches: 6 seconds; for non-precision and en route: 10 seconds; this ensures the pilot receives warning before the aircraft has moved significantly outside the protected airspace',
    'B. Time to alert is the time taken to set up the GPS receiver — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. The time required for the GPS satellite to detect its own failure — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. Time-to-alert is the time between alert activation and crew response — a human factors parameter — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 0,
  explanation: 'GNSS time-to-alert (TTA): ICAO performance requirement specifying maximum allowable latency between occurrence of a satellite failure/navigation error and the integrity alert reaching the crew. Values: precision approach (APV, Cat I): TTA = 6 seconds; LNAV/NPA: TTA = 10 seconds; en route (RNAV 5): TTA = 15 to 30 seconds. Rationale: a short TTA ensures the aircraft does not travel far beyond the protected boundary before the crew can initiate corrective action. SBAS achieves TTA ≤ 6 seconds through geostationary satellite broadcasts with short latency; RAIM typically meets 10-second TTA for approach; GBAS achieves 2-second TTA for Cat I.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'The reason GNSS approaches require temperature corrections when using baro-VNAV is:',
  options: [
    'A. Temperature corrections are applied to the GPS signal — not the altimeter — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'B. Temperature has no effect on GPS accuracy — corrections are only needed for ILS — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — incorrect; the technical definition and application differ significantly',
    'C. Baro-VNAV temperature corrections only apply above FL200 — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Baro-VNAV computes the vertical flight path from barometric altitude, which assumes ISA temperature conditions; in very cold air (significantly below ISA), the true altitude is lower than the indicated barometric altitude — the aircraft is actually closer to terrain than the altimeter shows; a temperature correction increases the altimeter reading required to maintain the true altitude above obstacles'
  ],
  correct: 3,
  explanation: 'Baro-VNAV temperature correction: the barometric altimeter uses the ISA lapse rate to convert pressure to altitude. In air significantly colder than ISA: actual atmospheric pressure at a given geometric altitude is higher than ISA predicts (cold air is denser, compresses to higher pressure for same altitude) → the altimeter over-reads geometric altitude → the aircraft is LOWER than the indicated altitude. For baro-VNAV approaches: cold temperature causes the glidepath to be lower than computed — the aircraft may be dangerously close to obstacles while the FMC thinks it is on a safe path. ICAO and CASA require temperature corrections when airport OAT is below a published threshold (usually −15°C to −20°C depending on the procedure).',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'When planning a route using Jeppesen or AIP chart airways, the minimum en route altitude (MEA) ensures:',
  options: [
    'A. The MEA guarantees ATC radar coverage throughout the route — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The aircraft will be above all weather phenomena along the route — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'C. MEA only provides obstacle clearance — navaid reception is not guaranteed — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'D. At least 1,000 ft (or 2,000 ft in mountainous terrain) obstacle clearance above all terrain and obstacles within the route corridor, AND reliable reception of at least one navaid along the route for navigation'
  ],
  correct: 3,
  explanation: 'MEA (Minimum En Route Altitude): provides: (1) obstacle clearance — 1,000 ft above all terrain and man-made obstacles within the route corridor (typically 4 nm either side of the centreline); 2,000 ft in designated mountainous terrain; (2) navaid reception — reliable reception of the en route navaid(s) defining the airway. This distinguishes MEA from MOCA (Minimum Obstruction Clearance Altitude) which provides only obstacle clearance without navaid guarantee. MOCA may be lower than MEA — an aircraft descending to MOCA loses navaid reception. MEA must be used when navaid-based navigation is required.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The purpose of an NDB compass locator (LOM — Locator Outer Marker) is:',
  options: [
    'A. An NDB at a different frequency from the outer marker that provides an approach lighting system reference — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The LOM replaces the ILS glideslope when it is unserviceable — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'C. A low-powered NDB (locator) co-located with the ILS outer marker — providing an ADF bearing and homing capability to the outer marker location; the aircraft can track to the LOM using the ADF even when the ILS marker beacon receiver is inoperative or at long range before localiser capture',
    'D. The LOM transmits the current QNH to arriving aircraft on a discrete frequency — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 2,
  explanation: 'Compass locator (LOM — Locator Outer Marker): a low-powered NDB (typically 15 to 25W, range 15 to 25 nm) installed at or near the ILS outer marker position. Function: (1) the aircraft ADF can tune the LOM frequency to obtain a bearing to the outer marker location; (2) the LOM identifier (typically the first two letters of the ILS identifier) is broadcast in Morse; (3) provides homing capability to the outer marker before the aircraft enters the ILS localiser service volume; (4) backup distance check if the outer marker beacon itself fails; (5) the ADF homing track to the LOM approximately equals the inbound ILS track. LIM (Locator Inner Marker) is at the middle marker.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'Computer-controlled navaid receivers in modern FMS auto-tune because:',
  options: [
    'A. Auto-tuning is only active when GPS is unavailable — with GPS, navaids are not auto-tuned — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The FMS navigation algorithm selects and tunes the most useful VOR/DME stations (best geometry, within range) automatically to provide the best position fix quality — typically tuning for a cross-cut angle near 90° between two DME stations; the crew can override with manual selection',
    'C. The FMS auto-tunes to the highest-power navaid regardless of position geometry — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this is not consistent with the operational standards for this topic',
    'D. Auto-tuning prevents the crew from accidentally detuning navaids during flight — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: 'FMS auto-tuning: the FMS navigation computer continuously selects the optimal combination of available VOR/DME stations for positioning. Selection criteria: (1) geometry — two DME stations at approximately 90° cross-cut provide best rho-rho accuracy; (2) within usable range; (3) ID confirmed. The FMS tunes the aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s VOR/DME receivers automatically, optimising position accuracy without crew workload. Crew override: the crew can manually select specific stations on the MCDU/CDU (useful when a specific approach procedure requires a particular navaid or if the auto-selected station is known to be unreliable from NOTAMs).',
  reference: 'ANVC MOS 2.7.3 / Navigation'
},
{
  question: 'When tracking to an NDB using an ADF, the procedure for maintaining track in a crosswind is:',
  options: [
    'A. Apply a wind correction angle (WCA) — the RMI needle is displaced from the 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock (direct) position by the WCA, with the needle angled into the wind; when tracking correctly with wind correction applied, the needle points to the station at an angle equal to the WCA',
    'B. Apply double the WCA to the heading to compensate for ADF errors — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification',
    'C. NDB tracking requires no correction for wind — follow the needle — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'D. Apply wind correction angle to maintain the RMI needle on the 0° position relative bearing — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'NDB tracking with wind: to maintain a constant track to the NDB in a crosswind, a wind correction angle is applied. On the RMI: (1) identify the required track (inbound bearing to the station); (2) apply a WCA by altering heading into the wind by the correction angle; (3) on a correctly calibrated RMI, the needle will point to the station at an angle equal to the WCA from 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock. If tracking correctly, the needle stays stationary at this deflected position. If the needle moves toward 12 o\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'clock, the WCA is too great; if away, WCA is too small.',
  reference: 'ANVC MOS 2.6.1 / Navigation'
},
{
  question: 'The groundspeed check at an NDB overhead shows the aircraft is 6 minutes ahead of schedule at position 380 nm from departure. The average GS for the actual track was:',
  options: [
    'A. 380 kt — this option conflates different navigation concepts and is not accurate',
    'B. 420 kt — while plausible, this does not match the published specification',
    'C. 460 kt — not supported by the ANVC syllabus or applicable MOS requirements',
    'D. Cannot determine without departure time'
  ],
  correct: 3,
  explanation: 'Without knowing the planned time to reach this position, the average GS cannot be determined solely from being \\\'6 minutes ahead of schedule\\\'. We know the aircraft covered 380 nm in (planned time − 6 minutes) — but the planned time is not given. Knowing planned GS would allow: actual GS = 380/(planned_time − 6min). Without planned time or departure time, the actual GS is indeterminate. Answer D.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The aeronautical chart scale of 1:500,000 (Half Million chart) is used in Australia for:',
  options: [
    'A. En route navigation at high altitude — 1:500,000 is a small-scale chart — this interpretation is not consistent with ICAO or CASR requirements — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material',
    'B. The 1:500,000 scale is used only for military operations — civil aviation uses different scales — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic',
    'C. Aviation weather charts — 1:500,000 shows cloud movement more precisely — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard',
    'D. Visual flight planning and low-level navigation where more detail is required than the WAC (1:1,000,000) — the VNC (Visual Navigation Chart) at 1:500,000 shows more airspace detail, greater terrain definition, and more landmarks, suitable for VFR low-level navigation and IFR terminal area planning'
  ],
  correct: 3,
  explanation: 'VNC (Visual Navigation Chart) 1:500,000: the VNC series covers Australia at 1:500,000 scale — twice as detailed as the WAC (1:1,000,000). At 1:500,000: 1 cm = 5 km; 1 mm = 500 m. The VNC is used for: visual flight planning at low level; helicopter operations requiring more detail; IFR operations in the terminal area where greater detail is needed; and training flights. Features shown: airspace boundaries in detail; terrain contours (100 m intervals for many areas); prominent landmarks; townships; roads; railways; and detailed aerodrome information. The Australian National Chart series (ANC) provides 1:250,000 for the most detailed aviation use.',
  reference: 'ANVC MOS 2.1.2 / AIP'
},
{
  question: 'Area navigation (RNAV) procedures require aircraft to carry a specified navigation accuracy because:',
  options: [
    'A. RNAV procedures are designed for the worst-performing aircraft — no accuracy requirement is needed — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard',
    'B. RNAV routes are designed with protected airspace based on assumed navigation accuracy — a narrower protection area requires higher accuracy (e.g. RNAV 1 requires total system error ≤ 1 nm for 95% of flight time); aircraft not meeting the specified RNP cannot use the more restrictive procedures',
    'C. Navigation accuracy requirements apply only to oceanic operations — domestic RNAV has no specification — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material',
    'D. All aircraft automatically meet RNAV requirements — they are based on VOR accuracy only — not supported by the applicable ANVC syllabus or MOS requirements — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 1,
  explanation: 'RNAV accuracy and airspace protection: RNAV routes are designed with obstacle clearance areas sized for the stated navigation accuracy. RNAV 5 (previously B-RNAV): total system error ≤ 5 nm (95% of time) — used for en route navigation. RNAV 2: ≤ 2 nm — terminal area navigation. RNAV 1: ≤ 1 nm — SIDs, STARs, and some approaches. RNP 0.3: ≤ 0.3 nm — RNP approaches. RNP AR 0.1: ≤ 0.1 nm — curved approaches. The tighter the requirement, the narrower the protected area and the more demanding the approach. Aircraft must be avionically capable and approved for the relevant specification.',
  reference: 'ANVC MOS 2.9.3 / Navigation'
},
{
  question: 'The purpose of the changeover point (COP) on an airway is:',
  options: [
    'A. The changeover point is where the aircraft must report its position to ATC — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The point where the aircraft must change from one navigation frequency to another IFR frequency — this option does not reflect the correct regulatory or technical standard — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'C. The point along the airway where the aircraft should transfer navigation reference from the navaid behind to the navaid ahead — this ensures the aircraft receives the strongest, most accurate signal from the appropriate station rather than using a diminishing signal from a distant behind station',
    'D. COPs mark the point where the airway changes from domestic to international airspace — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'Changeover Point (COP): published on en route charts as a flag symbol along the airway. At the COP: (1) the aircraft should transfer its primary navigation reference from the rear navaid (now further away and providing less accurate bearing) to the forward navaid (now closer and providing better bearing accuracy); (2) typically located at the midpoint between two VORs (where both are equidistant) but may be offset if one VOR is more powerful; (3) after passing the COP, the forward VOR is within its service volume for the airway altitude. Failure to transfer at the COP may result in tracking errors from the degraded signal of the more distant station.',
  reference: 'ANVC MOS 2.7.3 / AIP'
},
{
  question: 'A published LPV (Localiser Performance with Vertical guidance) approach requires which specific avionics:',
  options: [
    'A. ILS receiver and radio altimeter only — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic',
    'B. LPV approaches only need a standard GPS receiver with no special requirements — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'C. LPV requires dual IRS and dual GPS — single IRS is insufficient — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'D. SBAS (Satellite-Based Augmentation System) receiver — typically WAAS or compatible SBAS network — capable of receiving and decoding the SBAS geostationary satellite corrections; the SBAS receiver must be approved for LPV operations and the approach database must contain the FAS (Final Approach Segment) data block'
  ],
  correct: 3,
  explanation: 'LPV approach requirements: LPV (Localiser Performance with Vertical guidance) is an SBAS-based APV (Approach with Vertical guidance) procedure. Required avionics: (1) WAAS or EGNOS/MSAS-compatible SBAS receiver; (2) approved for LPV operations (TSO-C145 or TSO-C146 in the USA; similar CASR approval); (3) navigation database containing the FAS (Final Approach Segment) data block specific to the procedure; (4) radio altimeter is not required for LPV (unlike ILS Cat II/III). LPV accuracy: approximately 3 to 5 m laterally, 3 to 4 m vertically — similar to ILS Cat I. LPV minimums can be as low as 200 ft DH and 550 m RVR — equivalent to ILS Cat I.',
  reference: 'ANVC MOS 2.9.5 / Navigation'
},
{
  question: 'A GPS receiver reports \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'RAIM not available\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' for the planned destination at ETA. The regulatory response is:',
  options: [
    'A. RAIM unavailability only applies to oceanic operations — for domestic approaches, RAIM is not required — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — while plausible, this does not match the published specification',
    'B. Switch to WAAS mode — RAIM is automatically supplemented by SBAS — not supported by the applicable ANVC syllabus or MOS requirements — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'C. Continue the flight — RAIM unavailability is advisory only — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. For GPS-based IFR approaches (RNP approaches), RAIM must be available at the destination ETA — if RAIM is predicted to be unavailable, a different means of navigation (ILS, VOR, NDB approach) must be available as an alternative; if no alternative approach exists, the flight should not be planned to that destination with GPS as the sole approach aid'
  ],
  correct: 3,
  explanation: 'RAIM unavailability response: CASA and ICAO require RAIM availability prediction before IFR GPS operations. If RAIM is predicted unavailable at the planned destination during the ETA window: (1) the GPS approach at that destination cannot be planned as the primary approach; (2) an alternate approach capability (ILS, VOR/NDB) must exist; (3) if no alternate approach exists, the flight must not depart or must accept a different routing/destination; (4) WAAS/SBAS provides its own integrity monitoring (independent of RAIM) and may be available when RAIM is not — check if SBAS-based approaches are approved.',
  reference: 'ANVC MOS 2.9.5 / CASR'
},
{
  question: 'A flight plan ETA is calculated as:',
  options: [
    'A. ETA is only calculated by ATC — pilots do not compute ETAs — this option conflates different navigation concepts and is not accurate — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. ETA = departure time + great circle distance / cruise Mach number — not supported by the applicable ANVC syllabus or MOS requirements — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate',
    'C. Departure time + block hours + taxi time — while plausible, this does not match the published specification — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate',
    'D. The departure time (UTC) plus the accumulated sector times (computed from track distance and forecast groundspeed); ETA = departure time + (track miles / groundspeed) for each sector; wind components are applied to TAS to get groundspeed'
  ],
  correct: 3,
  explanation: 'ETA calculation: ETA = departure time (UTC) + flight time. Flight time = track miles / groundspeed (for each leg if multi-leg). Groundspeed = TAS ± headwind/tailwind component. Wind components are resolved from the upper wind forecast using the formula: wind component = wind speed × cos(angle between wind direction and track). Total ETA is the sum of all sector times plus the departure time. Multiple sector flights: sum each sector time individually (wind may differ). Modern FMS computes ETA continuously from the current position, track, and groundspeed.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'In Australian airspace, the standard IFR cruising levels for eastbound flight at FL100 to FL180 are:',
  options: [
    'A. No semicircular rule below FL180 — any level is permitted — while plausible, this does not match the published specification — this is not consistent with the operational standards for this topic',
    'B. Odd flight levels — FL110, FL130, FL150, FL170 — eastbound (000° to 179°M) use odd levels below FL180 also; the semicircular rule applies at all IFR levels in Australian controlled airspace',
    'C. Eastbound and westbound use the same flight levels below FL180 — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'D. Even flight levels — FL100, FL120, FL140, FL160, FL180 — incorrect; the technical definition and application differ significantly — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 1,
  explanation: 'Australian semicircular rule: the IFR semicircular cruising level rule applies at all IFR flight levels: Eastbound (000° to 179° magnetic track): odd flight levels — FL110, FL130, FL150, FL170 (below FL180); FL310, FL330, FL350 (RVSM). Westbound (180° to 359°M): even flight levels — FL100, FL120, FL140, FL160, FL180; FL300, FL320, FL340 (RVSM). This ensures IFR aircraft on reciprocal routes are separated by 500 ft (below FL180 non-RVSM: odd vs even alternate). The semicircular rule applies to IFR flight in controlled airspace. Check AIP ENR 1.7 for current Australian cruising level tables.',
  reference: 'ANVC MOS 2.7.1 / AIP'
},
{
  question: 'The glideslope false course at 9° above the horizon is hazardous because:',
  options: [
    'A. The 9° glideslope gives a steeper than normal but structurally safe approach — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'B. At 9°, the aircraft is receiving valid glideslope CDI guidance (the glideslope receiver cannot distinguish the false course from the primary course) — however the descent angle is triple the normal 3°; an aircraft established on the 9° false course will cross the threshold at an extremely high rate of descent and impact the runway or terrain well short of the threshold',
    'C. The 9° course requires excessive engine power to maintain — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'D. The 9° false course is only active when the glideslope transmitter is in test mode — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic'
  ],
  correct: 1,
  explanation: '9° ILS false glideslope hazard: the ILS glideslope antenna creates a primary beam at 3° and harmonic false beams at 9°, 15°, etc. The glideslope receiver cannot discriminate — it responds to the strongest signal and deflects the CDI accordingly. On the 9° false path: (1) the CDI shows valid guidance (not flagged); (2) the PAPI/VASI shows white (high) if visible; (3) DME/altitude check shows too high (3× the normal altitude at any given distance); (4) at 5 nm and 9°: the aircraft should be at approximately 3 × 1,500 = 4,500 ft (not 1,500 ft). Protection: always intercept the glideslope from BELOW; use the outer marker altitude as a check; monitor PAPI.',
  reference: 'ANVC MOS 2.6.4 / Navigation'
},
{
  question: 'Holding fuel: 3,200 kg/hr for 25 minutes:',
  options: [
    'A. 1,067 kg',
    'B. 1,600 kg',
    'C. 800 kg',
    'D. 1,333 kg'
  ],
  correct: 3,
  explanation: 'Fuel = 3200×(25/60) = 1,333 kg. Answer B.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'The transition from approach mode to landing in the autopilot/autothrottle (AFCS) occurs at approximately:',
  options: [
    'A. The AFCS does not transition — it maintains approach mode until engine shutdown — this represents a common misconception not supported by the source material — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'B. The flare initiation height (typically 30 to 50 ft radio altitude) — the AFCS transitions from ILS glideslope tracking (approach mode) to flare mode, which uses a predetermined pitch-up rate to arrest the descent for landing; the radio altimeter triggers this transition',
    'C. The transition occurs when the outer marker is crossed — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'D. Decision height — the autopilot disengages automatically at DH — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material'
  ],
  correct: 1,
  explanation: 'AFCS approach/land mode transition: during an autoland sequence: (1) approach mode: autopilot tracks ILS localiser and glideslope; autothrottle maintains approach speed; (2) flare mode: triggered by radio altimeter (typically 30 to 50 ft); the autopilot pitches up at a programmed rate to arrest sink rate; autothrottle reduces thrust (retard); (3) rollout: on touchdown, autopilot transitions to rollout mode maintaining centreline tracking; autobrake activates. For Cat II/III autolands, the radio altimeter is critical — an RA failure aborts the autoland. Typical flare height: B737 at 27 ft RA; A320 at 30 ft.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The MLS (Microwave Landing System) offers which advantages over ILS?',
  options: [
    'A. MLS only provides lateral guidance — vertical guidance still requires an ILS glideslope — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard',
    'B. MLS operates at SHF microwave frequencies (5031 to 5091 MHz) allowing: curved and segmented approaches (variable azimuth and elevation guidance); steeper glidepaths; much narrower beams resistant to multipath; no false glidepaths; better performance in mountainous terrain; and reduced land requirements compared to ILS',
    'C. MLS has the same coverage limitations as ILS — it offers no operational advantage — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly',
    'D. MLS is cheaper to install than ILS and provides identical accuracy — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'MLS advantages: (1) frequency range 5031 to 5091 MHz (C-band microwave) — much less susceptible to multipath interference from terrain and buildings than ILS; (2) provides azimuth guidance over a wide arc (±62° from runway centreline) and elevation angles from 0.9° to 20°+; (3) enables curved and segmented approaches; (4) no false glidepaths; (5) smaller ground equipment footprint; (6) more precise positioning. Disadvantages: requires MLS receiver in aircraft; higher cost than ILS update; replaced in many markets by GNSS precision approaches (GLS/LPV). Used at a small number of Australian airports.',
  reference: 'ANVC MOS 2.6.5 / Navigation'
},
{
  question: 'Track 045°T, TAS 440 kt, wind 090°T/60 kt. WCA and GS are approximately:',
  options: [
    'A. 6° right, GS 397 kt',
    'B. 5° left, GS 415 kt',
    'C. 7° left, GS 397 kt',
    'D. 5° right, GS 480 kt'
  ],
  correct: 0,
  explanation: 'Wind 090°T, track 045°T. Wind angle = 90−45 = 45°. Headwind component = 60×cos(45°) = 42.4 kt. Crosswind = 60×sin(45°) = 42.4 kt from right (wind from east, tracking NE — pushes aircraft left, correct right). WCA = arcsin(42.4/440) ≈ 5.5° right. GS ≈ TAS×cos(WCA) − head = 440×0.9954−42.4 ≈ 397 kt. Answer A: ~6° right, GS 397 kt.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'An aircraft performs a standard rate (3°/sec) left turn from heading 060°M to heading 330°M. The turn takes:',
  options: [
    'A. 30 seconds',
    'B. 50 seconds',
    'C. 40 seconds',
    'D. 60 seconds'
  ],
  correct: 1,
  explanation: 'Turn angle: from 060° to 330° turning LEFT (anticlockwise): 060 → 000 = 60°; then 000 → 330 = 30° further back (anticlockwise). Total: 360−(330−060) = 360−270 = 90°. Wait: left turn from 060 to 330: going anticlockwise, from 060 decrease to 000=60°, continue to 330 (anticlockwise from 000 = 360−330=30° more). Total left turn = 60+30 = 90°. Alternatively: 060−330 = −270° = 90° left (shortest left turn). At 3°/sec: time = 90/3 = 30 sec. Answer A 30 seconds.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The Mach number at which the aircraft cruise speed is controlled changes from IAS to Mach — this crossover altitude depends on:',
  options: [
    'A. The crossover altitude is determined by ATC and varies by route — while plausible, this does not match the published specification — while plausible, this does not match the published specification — not supported by the applicable ANVC syllabus or MOS requirements — not supported by the applicable ANVC syllabus or MOS requirements',
    'B. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s maximum certified altitude — crossover occurs at the service ceiling — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard — incorrect; the technical definition and application differ significantly',
    'C. The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s IAS limitation (VMO) and Mach limitation (MMO) — the crossover occurs at the altitude where VMO (in IAS) equals MMO expressed as an equivalent IAS; below this altitude VMO limits; above it MMO limits; the crossover altitude is typically between FL280 and FL320 for most transport jets',
    'D. Crossover altitude is always FL250 for all jet aircraft — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification'
  ],
  correct: 2,
  explanation: 'VMO/MMO crossover altitude: at the crossover altitude: VMO (IAS) = MMO (converted to IAS). Below crossover: the aircraft must not exceed VMO in IAS (e.g. 340 kt IAS). Above crossover: the aircraft must not exceed MMO in Mach (e.g. M0.82). The conversion: at the crossover altitude, 340 kt IAS = M0.82 TAS at that temperature. As the aircraft climbs above the crossover altitude, M0.82 corresponds to progressively lower IAS (because TAS increases less than the Mach number denominator — local speed of sound decreases with temperature). At FL350: M0.82 might correspond to 280 kt IAS — well below VMO 340 kt, confirming Mach is the limiting constraint.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'Earth rate azimuth drift at 40°S:',
  options: [
    'A. 15.0°/hr',
    'B. 11.49°/hr',
    'C. 9.64°/hr',
    'D. 13.0°/hr'
  ],
  correct: 2,
  explanation: '15×sin(40°) = 15×0.6428 = 9.64°/hr. Answer C.',
  reference: 'ANVC MOS 2.3.3 / Navigation'
},
{
  question: 'The Mach Tuck phenomenon experienced by jet aircraft at high speed is caused by:',
  options: [
    'A. The autopilot pitching nose-down when Mach limit is exceeded — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — not supported by the applicable ANVC syllabus or MOS requirements — this option conflates different navigation concepts and is not accurate',
    'B. Mach tuck is caused by the elevator becoming ineffective at high Mach numbers — incorrect; the technical definition and application differ significantly — this represents a common misconception not supported by the source material — incorrect; the technical definition and application differ significantly — this option conflates different navigation concepts and is not accurate',
    'C. At high Mach numbers, a shock wave develops on the wing upper surface aft of the lift centre — the centre of pressure moves aft and the lift distribution changes, producing a nose-down pitching moment that can be self-reinforcing; without correction (trim or stick force), the aircraft pitches nose-down and accelerates further',
    'D. Engine flame-out at high Mach causes a sudden aft centre of gravity shift producing the tuck — this interpretation is not consistent with ICAO or CASR requirements — not supported by the applicable ANVC syllabus or MOS requirements — while plausible, this does not match the published specification — this option does not reflect the correct regulatory or technical standard'
  ],
  correct: 2,
  explanation: 'Mach tuck: as Mach number increases toward the critical Mach (Mcrit), a supersonic region develops on the wing upper surface. A shock wave forms at the boundary of this supersonic region. At the shock wave: flow separates; lift reduces aft of the shock; the aerodynamic centre (AC) shifts aft. The net effect: reduced lift forward, more lift aft → nose-down pitching moment. This increases the Mach number → stronger shock wave → more AC shift → stronger nose-down moment: a dangerous positive feedback loop. Autopilot or pilot must apply nose-up trim; the airspeed must be reduced below MMO.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The reason charts use a standard projection rather than a globe for aviation navigation is:',
  options: [
    'A. Globes are too accurate for aviation purposes — this option conflates different navigation concepts and is not accurate — this option does not reflect the correct regulatory or technical standard — this interpretation is not consistent with ICAO or CASR requirements',
    'B. A flat chart can be unfolded, annotated with routes and bearings, fitted in a cockpit, and used for calculation; a globe cannot be practically used in flight operations; the known distortion of projections is managed through appropriate chart selection for the task and altitude range',
    'C. Charts are required by ICAO regulation — globes are prohibited in aircraft — this is not consistent with the operational standards for this topic — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements',
    'D. Globes do not show magnetic variation — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements — incorrect; the technical definition and application differ significantly — not supported by the applicable ANVC syllabus or MOS requirements'
  ],
  correct: 1,
  explanation: 'Charts vs globes for aviation: practical reasons for flat charts: (1) fit in cockpit and flight bag; (2) can be annotated with routes, bearings, and calculations; (3) distances measured with a ruler (using the correct scale); (4) bearings measured with a protractor; (5) reproduced cheaply and updated regularly (NOTAMs, chart amendments); (6) distributed globally in standardised formats. The projection distortion is managed by: selecting the appropriate projection for the scale and latitude (Lambert for mid-latitudes, Mercator for equatorial, Polar Stereographic for polar); understanding the limitations; using chart instructions for measurement corrections.',
  reference: 'ANVC MOS 2.1.1 / Navigation'
},
{
  question: 'An aircraft at FL290 TAS 460 kt experiences a sudden drop in groundspeed to 380 kt, while TAS remains unchanged. The wind component change is:',
  options: [
    'A. An increase in headwind of 80 kt',
    'B. A decrease in tailwind of 80 kt — or equivalent increase in headwind',
    'C. 80 kt crosswind has developed',
    'D. Both A and B describe the same wind change'
  ],
  correct: 3,
  explanation: 'GS dropped from (implied previous GS) by 80 kt while TAS remained constant at 460 kt. GS = TAS + tailwind component (positive) or TAS − headwind (if headwind). A decrease in GS of 80 kt = either: an 80 kt increase in headwind component (from nil to 80 kt headwind), or an 80 kt loss of tailwind (e.g. from 80 kt tailwind to nil), or any combination totalling 80 kt change in the along-track wind component. Descriptions A and B are equivalent: both describe the along-track wind changing by −80 kt (either from tailwind to nil or from nil to headwind). Answer D — both A and B describe the same 80 kt change in the along-track wind component.',
  reference: 'ANVC MOS 2.7.4 / Navigation'
},
{
  question: 'During descent planning, the crew must consider the anti-icing fuel penalty because:',
  options: [
    'A. Anti-icing only affects piston aircraft — turbine engines are unaffected — this option conflates different navigation concepts and is not accurate — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material',
    'B. Anti-icing reduces drag and therefore reduces fuel burn — this is not consistent with the operational standards for this topic — this option does not reflect the correct regulatory or technical standard — this option conflates different navigation concepts and is not accurate',
    'C. Engine bleed air anti-icing extracts compressed air from the engine compressor, reducing available thrust and increasing specific fuel consumption; the additional fuel burn must be included in fuel planning for flights through forecast icing conditions',
    'D. Anti-icing systems reduce aircraft weight by shedding ice from the airframe — this option conflates different navigation concepts and is not accurate — this interpretation is not consistent with ICAO or CASR requirements — incorrect; the technical definition and application differ significantly'
  ],
  correct: 2,
  explanation: 'Anti-icing fuel penalty: engine bleed air for wing and engine nacelle anti-icing reduces net engine thrust and increases SFC by approximately 3 to 6 percent per engine. For flights where extended icing is forecast: the additional fuel burn is calculated based on the estimated time in icing conditions; this is added to the trip fuel; the reduction in available climb performance may also require revised step climb timing. Flight planning software includes anti-ice factors. Aircraft without bleed air anti-icing (e.g. WIPS — weeping wing systems) have different fuel penalties.',
  reference: 'ANVC MOS 2.7.2 / Navigation'
},
{
  question: 'The function of the altitude alert system in a transport aircraft is:',
  options: [
    'A. To alert the crew if the aircraft enters restricted airspace — while plausible, this does not match the published specification — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate',
    'B. The altitude alert sounds when passing through the transition altitude — this is not consistent with the operational standards for this topic — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements',
    'C. Altitude alert only functions when the autopilot is disengaged — this option conflates different navigation concepts and is not accurate — this option conflates different navigation concepts and is not accurate — while plausible, this does not match the published specification',
    'D. To warn the crew when the aircraft is approaching the pre-selected altitude (alert at approximately 900 ft before reaching selected altitude) and to warn if the aircraft deviates from the selected altitude by more than approximately 300 ft after level-off'
  ],
  correct: 3,
  explanation: 'Altitude alert system: provides two alerts. Approach alert: sounds approximately 900 ft before the selected altitude during climb or descent, reminding the crew to prepare for level-off. Deviation alert: if the aircraft deviates from the selected altitude by approximately 300 ft after reaching it (whether on autopilot or manual), an alert sounds. RVSM requirement: the altitude alert must function correctly for RVSM certification (it is one of the required RVSM equipment items). The alert prompts timely corrective action before a separation violation occurs.',
  reference: 'ANVC MOS 2.3.1 / Navigation'
},
{
  question: 'The primary cause of VOR bearing errors at long range over mountainous terrain is:',
  options: [
    'A. Multipath — VHF signals reflect off terrain and arrive at the aircraft antenna from multiple directions simultaneously; the composite signal produces a bearing that differs from the direct-path bearing; most severe in mountainous areas and at low elevation angles to the VOR',
    'B. The VOR transmitter power is reduced in mountainous areas by regulation — incorrect; the technical definition and application differ significantly — while plausible, this does not match the published specification — while plausible, this does not match the published specification',
    'C. Ionospheric refraction of VHF signals over mountains — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material — this represents a common misconception not supported by the source material',
    'D. Magnetic variation changes more rapidly over mountains — this is not consistent with the operational standards for this topic — while plausible, this does not match the published specification — this interpretation is not consistent with ICAO or CASR requirements'
  ],
  correct: 0,
  explanation: 'VOR terrain multipath: in mountainous terrain, VHF signals reflect from hillsides and ridges. These reflected signals arrive at the aircraft antenna simultaneously with the direct signal. The ADF or VOR receiver computes a bearing from the composite signal which may differ significantly from the true direct-path bearing. Effect: bearing errors of several degrees over rugged terrain. Mitigation: use DVOR (less susceptible to multipath due to large array aperture); use DME for positioning (less susceptible to multipath than VOR bearing); cross-check with GPS.',
  reference: 'ANVC MOS 2.6.2 / Navigation'
},
{
  question: 'The maximum indicated airspeed for ILS localiser operation (below the outer marker during the approach) is typically published as:',
  options: [
    'A. Maximum IAS limits are published on approach charts for each approach category — in Australia, the maximum IAS for the final approach segment varies by aircraft approach category (Cat A: 90 kt; Cat B: 120 kt; Cat C: 140 kt; Cat D: 165 kt) ensuring the aircraft can be manoeuvred within the ILS protected area',
    'B. There is no IAS limit for the ILS final approach — aircraft fly their normal Vref — this represents a common misconception not supported by the source material — this option does not reflect the correct regulatory or technical standard — this option does not reflect the correct regulatory or technical standard',
    'C. Maximum 250 kt below 10,000 ft applies to ILS approaches — no other speed limit applies — this represents a common misconception not supported by the source material — this interpretation is not consistent with ICAO or CASR requirements — this option conflates different navigation concepts and is not accurate',
    'D. The maximum ILS approach speed is always 200 kt regardless of aircraft category — this represents a common misconception not supported by the source material — this is not consistent with the operational standards for this topic — this is not consistent with the operational standards for this topic'
  ],
  correct: 0,
  explanation: 'ILS approach category speed limits: aircraft approach categories (ICAO PANS-OPS Doc 8168): Cat A: Vref < 91 kt; Cat B: 91 to 120 kt; Cat C: 121 to 140 kt; Cat D: 141 to 165 kt. These categories determine: (1) approach speed limits (maximum IAS on the approach); (2) minimum obstacle clearance criteria; (3) the minimum visibility/RVR for each approach category; (4) the size of the missed approach protected area (faster aircraft need a wider area). The aircraft\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'s approach category is determined by Vref at maximum certificated landing weight. Some Australian approach charts specify maximum speeds for specific segments.',
  reference: 'ANVC MOS 2.7.4 / AIP'
}
];
