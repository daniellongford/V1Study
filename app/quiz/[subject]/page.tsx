'use client'
import { useState, useEffect, use } from 'react'
import { supabase } from '../../../lib/supabase'

const freeQuestions: Record<string, any[]> = {
  'Human Factors': [
    { question: 'What does the Swiss Cheese Model of accident causation describe?', options: ['A. A method for investigating food contamination on aircraft', 'B. Accidents occurring when holes in multiple defensive layers align allowing a hazard to cause an accident', 'C. That most accidents are caused by a single catastrophic failure', 'D. A Swiss aviation authority investigation methodology'], correct: 1, explanation: 'The Swiss Cheese Model depicts safety defences as cheese slices with holes. An accident occurs when holes in multiple layers temporarily align, allowing an accident trajectory to pass through all defences.', reference: 'CASA Human Factors Study Guide / Reason (1990)' },
    { question: 'What is the primary effect of hypoxia on a pilot?', options: ['A. Increased mental acuity and urgency', 'B. Impaired judgement, reduced reaction time, and euphoria often without awareness', 'C. Immediate loss of consciousness', 'D. Severe headache and nausea only'], correct: 1, explanation: 'Hypoxia impairs cognitive function, judgement, reaction time, and vision. Pilots often feel euphoric and unaware of their impairment, making it extremely dangerous.', reference: 'CASA Human Factors Study Guide / CAO 48.1' },
    { question: 'What is CRM (Crew Resource Management)?', options: ['A. A checklist for managing aircraft resources during abnormal operations', 'B. The effective use of all available resources to achieve safe efficient flight', 'C. A training programme exclusively for cabin crew', 'D. A regulatory requirement for maintenance crew coordination'], correct: 1, explanation: 'CRM is the effective use of all available resources including human resources, technical information, and equipment to achieve safe, efficient flight.', reference: 'CASA Human Factors Study Guide / AC 119-22' },
    { question: 'What is situational awareness in aviation?', options: ['A. Awareness of physical surroundings in the cockpit only', 'B. Accurate perception of the current state of your aircraft, environment, and flight, and projection of future states', 'C. Alertness achieved by consuming caffeine', 'D. Awareness of ATC instructions and weather only'], correct: 1, explanation: 'Situational awareness is the perception of environmental elements within a volume of time and space, comprehension of their meaning, and projection of their status in the near future.', reference: 'CASA Human Factors Study Guide / Endsley (1988)' },
    { question: 'What is automation bias in glass cockpit aircraft?', options: ['A. Systematic errors that develop in automated systems over time', 'B. Over-reliance on automated systems leading to reduced vigilance and failure to detect automation errors', 'C. Software algorithms causing incorrect altitude capture', 'D. Pilots preferring manual flight over automation'], correct: 1, explanation: 'Automation bias is the tendency to over-rely on automated systems, reducing active monitoring. Pilots may fail to detect automation errors or fail to intervene in a timely manner.', reference: 'CASA Human Factors Study Guide / ATSB research' },
    { question: 'Which best describes confirmation bias?', options: ['A. Seeking information that contradicts your assessment', 'B. Tendency to search for and interpret information confirming existing beliefs while discounting contradictory evidence', 'C. Confirming ATC clearances before execution', 'D. Bias toward action in emergencies'], correct: 1, explanation: 'Confirmation bias is the cognitive tendency to seek, interpret and recall information that confirms pre-existing beliefs. In aviation it can lead to pressing on into deteriorating weather.', reference: 'CASA Human Factors Study Guide' },
    { question: 'What is the sterile cockpit rule?', options: ['A. A rule requiring cockpit air filtration during ground operations', 'B. Prohibition of non-essential activities and conversation during critical phases of flight typically below 10000 ft', 'C. A rule requiring cockpit cleaning before every flight', 'D. A rule restricting cabin crew from entering the cockpit'], correct: 1, explanation: 'The sterile cockpit rule prohibits non-essential communications and activities during critical flight phases to reduce distraction and support crew concentration.', reference: 'CASR Part 91 / CASA AC 119 series' },
    { question: 'What is the time of useful consciousness at 40000 ft following rapid decompression?', options: ['A. 30 minutes', 'B. 15-20 minutes', 'C. Approximately 15-20 seconds', 'D. 3-5 minutes'], correct: 2, explanation: 'At 40000 ft following rapid decompression, TUC is approximately 15-20 seconds. Above 35000 ft crews must don oxygen masks immediately.', reference: 'CASA Human Factors Study Guide / CAO 20.4' },
    { question: 'What are the effects of fatigue on pilot performance?', options: ['A. Improved focus due to adrenaline', 'B. Degraded decision-making, increased reaction time, reduced vigilance, and impaired communication', 'C. Only physical effects, cognitive performance is unaffected', 'D. Fatigue only affects performance after 24 hours without sleep'], correct: 1, explanation: 'Fatigue degrades decision-making, reaction time, vigilance, communication, and memory. Pilots may not recognise their own impairment.', reference: 'CAO 48.1 / CASA Human Factors Study Guide' },
    { question: 'What does IMSAFE stand for in pre-flight self-assessment?', options: ['A. Instruments, Maps, Safety gear, Airworthiness, Fuel, Emergency procedures', 'B. Illness, Medication, Stress, Alcohol, Fatigue, Emotion', 'C. Inspection, Maintenance, Servicing, Avionics, Fuel, Equipment', 'D. Icing, Metars, SIGMETs, Airspace, Fuel, Emergency alternates'], correct: 1, explanation: 'IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion. A personal minimums checklist used before every flight.', reference: 'CASA Human Factors Study Guide' },
  ],
  'Aerodynamics': [
    { question: 'What is the angle of attack?', options: ['A. The angle between the aircraft and the horizon', 'B. The angle between the chord line of an aerofoil and the relative airflow', 'C. The pitch angle of the aircraft nose', 'D. The angle between the wing and the fuselage'], correct: 1, explanation: 'The angle of attack is the angle between the chord line of the aerofoil and the relative airflow. It is the primary determinant of lift generation.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What happens when an aircraft exceeds the critical angle of attack?', options: ['A. The aircraft accelerates rapidly', 'B. A stall occurs as airflow separates from the upper wing surface', 'C. The aircraft enters a spiral dive', 'D. Engine power increases automatically'], correct: 1, explanation: 'When the critical angle of attack is exceeded, airflow separates from the upper wing surface, causing a sudden loss of lift known as a stall.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What is induced drag?', options: ['A. Drag caused by the airframe structure', 'B. Drag created as a byproduct of lift generation', 'C. Drag caused by engine exhaust', 'D. Drag from extended landing gear'], correct: 1, explanation: 'Induced drag is created as a byproduct of lift generation. It is caused by the vortices that form at the wingtips due to pressure differences between upper and lower wing surfaces.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What is the effect of increasing airspeed on induced drag?', options: ['A. Induced drag increases with airspeed', 'B. Induced drag decreases with increasing airspeed', 'C. Induced drag remains constant regardless of airspeed', 'D. Induced drag doubles with every 10 knot increase'], correct: 1, explanation: 'Induced drag decreases as airspeed increases because at higher speeds less angle of attack is required to generate the same lift.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What is parasite drag?', options: ['A. Drag caused by lift generation', 'B. All drag not associated with lift production including form drag, skin friction, and interference drag', 'C. Drag caused by propeller rotation', 'D. Drag from fuel weight'], correct: 1, explanation: 'Parasite drag encompasses all drag not associated with lift production. It includes form drag, skin friction drag, and interference drag.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What is the best glide speed?', options: ['A. The speed that gives maximum range with power off', 'B. The speed at which the aircraft descends most steeply', 'C. The minimum speed before stall', 'D. The speed that gives maximum endurance'], correct: 0, explanation: 'Best glide speed gives the maximum lift-to-drag ratio and therefore the greatest glide range with power off.', reference: 'Aircraft Flight Manual / CASA Aerodynamics Study Guide' },
    { question: 'What is Vno?', options: ['A. Never exceed speed', 'B. Maximum structural cruising speed, must not be exceeded except in smooth air', 'C. Best rate of climb speed', 'D. Minimum control speed'], correct: 1, explanation: 'Vno is the maximum structural cruising speed (top of the green arc). The aircraft must not be flown above this speed except in smooth air and with caution.', reference: 'Aircraft Flight Manual / CASA Aerodynamics Study Guide' },
    { question: 'What is the purpose of winglets?', options: ['A. To increase the weight of the aircraft for stability', 'B. To reduce induced drag by limiting wingtip vortex formation', 'C. To increase parasite drag for approach', 'D. To improve roll rate at low speeds'], correct: 1, explanation: 'Winglets reduce induced drag by limiting the formation of wingtip vortices, effectively increasing the aspect ratio of the wing.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What is the load factor in a 60 degree banked level turn?', options: ['A. 1.0 G', 'B. 1.41 G', 'C. 2.0 G', 'D. 2.5 G'], correct: 2, explanation: 'In a 60 degree banked level turn the load factor is 2.0 G. Load factor = 1/cos(bank angle). Cos 60 = 0.5, therefore load factor = 1/0.5 = 2.0 G.', reference: 'CASA Aerodynamics Study Guide' },
    { question: 'What causes a Dutch roll?', options: ['A. Excessive rudder input at low speed', 'B. A coupled oscillation in roll and yaw common in swept wing aircraft with high dihedral effect', 'C. Aileron flutter at high speed', 'D. Propeller torque effect'], correct: 1, explanation: 'Dutch roll is a coupled oscillation in roll and yaw that occurs in aircraft with high dihedral effect and low directional stability.', reference: 'CASA Aerodynamics Study Guide' },
  ],
  'Meteorology': [
    { question: 'What cloud type is associated with severe turbulence, icing, and heavy precipitation?', options: ['A. Altostratus', 'B. Nimbostratus', 'C. Cumulonimbus', 'D. Altocumulus castellanus'], correct: 2, explanation: 'Cumulonimbus clouds are associated with extreme turbulence, severe icing, lightning, heavy rain, and hail.', reference: 'AIP MET 1.1 / CASA Meteorology Study Guide' },
    { question: 'In a METAR, what does FEW015 mean?', options: ['A. Few clouds at 15000 ft AMSL', 'B. 1-2 oktas of cloud at 1500 ft AAL', 'C. 3-4 oktas of cloud at 150 ft', 'D. Few showers with 15 km visibility'], correct: 1, explanation: 'FEW indicates 1-2 oktas of sky cover. The three digits represent cloud height in hundreds of feet above aerodrome level.', reference: 'AIP GEN 3.5 / BOM METAR Guide' },
    { question: 'What is the ISA standard lapse rate?', options: ['A. 3 degrees C per 1000 ft', 'B. Approximately 2 degrees C per 1000 ft', 'C. 1.5 degrees C per 1000 ft', 'D. 4 degrees C per 1000 ft'], correct: 1, explanation: 'The International Standard Atmosphere defines a lapse rate of approximately 2 degrees C per 1000 ft up to the tropopause.', reference: 'ICAO Doc 7488 / CASA Met Study Guide' },
    { question: 'What does TSRA mean in a METAR?', options: ['A. Thunderstorm with rain', 'B. Tropical storm with rain', 'C. Towering storm rain advisory', 'D. Thunderstorm in the vicinity with rain'], correct: 0, explanation: 'TSRA is a METAR present weather code meaning Thunderstorm with Rain.', reference: 'AIP GEN 3.5 / BOM METAR decoding guide' },
    { question: 'What does CAVOK mean in a METAR?', options: ['A. Visibility at least 10 km, no cloud below 5000 ft, no CB, no significant weather', 'B. Sky clear and unlimited visibility', 'C. Ceiling above 3000 ft and visibility above 5 km', 'D. No information available for cloud and visibility'], correct: 0, explanation: 'CAVOK is reported when visibility is 10 km or more, no cloud below 5000 ft or MSA, no CB at any level, and no significant weather.', reference: 'AIP GEN 3.5 / BOM METAR Guide' },
    { question: 'What is the dewpoint temperature?', options: ['A. Temperature at which precipitation forms', 'B. Temperature to which air must be cooled at constant pressure for saturation to occur', 'C. Temperature at the surface level of a cloud', 'D. Temperature differential between two air masses'], correct: 1, explanation: 'The dewpoint is the temperature to which a parcel of air must be cooled at constant pressure for it to become saturated.', reference: 'CASA Meteorology Study Guide' },
    { question: 'What causes a microburst?', options: ['A. Upward movement of warm moist air', 'B. A concentrated downdraft from a convective storm that spreads outward on hitting the surface', 'C. A sudden pressure drop from a frontal passage', 'D. Orographic lifting over mountains'], correct: 1, explanation: 'A microburst is a concentrated downdraft that strikes the surface and spreads outward, creating dangerous wind shear.', reference: 'CASA Met Study Guide' },
    { question: 'What is a temperature inversion?', options: ['A. Temperature decreasing with height causing poor performance', 'B. Temperature increasing with height which can trap fog and pollution', 'C. Temperature constant with height causing severe turbulence', 'D. Temperature equal to dewpoint causing immediate precipitation'], correct: 1, explanation: 'A temperature inversion occurs where temperature increases with altitude. Inversions trap haze, pollution and fog.', reference: 'CASA Meteorology Study Guide' },
    { question: 'What is the primary cause of clear air turbulence?', options: ['A. Thunderstorm outflow at high altitude', 'B. Wind shear associated with the jet stream and large temperature gradients', 'C. Orographic waves below 10000 ft', 'D. Thermal activity over sun-heated terrain'], correct: 1, explanation: 'CAT occurs most commonly near the jet stream where there are strong horizontal wind shear zones and large temperature gradients.', reference: 'CASA ATPL Meteorology Study Guide' },
    { question: 'Which form of icing is most dangerous to aircraft?', options: ['A. Rime ice - accumulates slowly and is hard to detect', 'B. Clear ice - dense, heavy, adheres strongly with minimal visual warning', 'C. Frost - reduces lift significantly', 'D. Mixed ice - immediately blocks the pitot tube'], correct: 1, explanation: 'Clear glaze ice forms when large supercooled droplets freeze slowly, creating smooth dense heavy accretion that is difficult to remove.', reference: 'CASA Meteorology Study Guide' },
  ],
  'Navigation': [
    { question: 'On a 1:500000 VNC, what does 2 cm on the chart represent on the ground?', options: ['A. 5 km', 'B. 10 km', 'C. 20 km', 'D. 50 km'], correct: 1, explanation: 'At 1:500000 scale, 1 cm = 5 km on the ground. Therefore 2 cm = 10 km.', reference: 'AIP ENR 4.2 / VNC legend' },
    { question: 'What is magnetic variation?', options: ['A. The error in the compass caused by the aircraft own magnetic fields', 'B. The angular difference between true north and magnetic north', 'C. The difference between compass heading and track', 'D. The change in magnetic field strength with altitude'], correct: 1, explanation: 'Magnetic variation is the angular difference between true north and magnetic north.', reference: 'AIP GEN 2.2' },
    { question: 'What is the 1-in-60 rule used for?', options: ['A. Calculating fuel reserves for 60 minutes', 'B. Estimating track error and heading correction', 'C. Determining obstacle clearance', 'D. Calculating rate of climb over 60 nm'], correct: 1, explanation: 'The 1-in-60 rule states that for every 60 nm travelled, 1 nm off track equals 1 degree of heading error.', reference: 'CASA CPL Navigation Study Guide' },
    { question: 'What is LSALT?', options: ['A. Altitude providing 1000 ft terrain clearance within 5 nm either side of track', 'B. Altitude providing 1000 ft clearance within 25 nm in mountainous terrain', 'C. Lowest Standard Assigned Level and Track', 'D. An altitude issued by ATC guaranteeing terrain separation'], correct: 0, explanation: 'LSALT provides a minimum of 1000 ft terrain and obstacle clearance within 5 nm either side of track.', reference: 'AIP ENR 1.1 / CASR Part 91' },
    { question: 'What is Decision Altitude on a precision approach?', options: ['A. Altitude at which the crew must decide to divert', 'B. Altitude at which the approach must be abandoned if visual reference is not established', 'C. Lowest altitude on a non-precision approach', 'D. Altitude at which autopilot must be disconnected'], correct: 1, explanation: 'DA is the altitude on a precision approach at which the crew must decide whether to continue or execute a missed approach.', reference: 'ICAO Doc 8168 / AIP ENR 1.5' },
    { question: 'What is the Transition Altitude in Australia?', options: ['A. The altitude at which crews switch from QNH to standard pressure 1013 hPa', 'B. The altitude at which ATC hands off to the next sector', 'C. The height above which terrain separation is guaranteed', 'D. The altitude at which GPWS activates'], correct: 0, explanation: 'The Transition Altitude is the altitude at or below which vertical position is controlled by QNH.', reference: 'AIP ENR 1.7' },
    { question: 'What is compass deviation?', options: ['A. The difference between true and magnetic north', 'B. Error in the compass caused by the aircraft own magnetic fields', 'C. Wobble of the compass card in turbulence', 'D. The angle between magnetic and grid north'], correct: 1, explanation: 'Compass deviation is the error caused by the aircraft own electrical equipment and ferrous metals.', reference: 'Navigation / CASA CPL Study Guide' },
    { question: 'What does climb via SID require?', options: ['A. Climb to cleared altitude using any route', 'B. Comply with all published lateral AND vertical constraints on the SID', 'C. Climb on runway heading until advised', 'D. Comply with lateral routing only'], correct: 1, explanation: 'Climb via SID requires compliance with all published lateral and vertical constraints on the SID.', reference: 'AIP ENR 1.1 / ICAO Doc 4444' },
    { question: 'On an ILS, what does a full-scale fly-up glideslope deflection indicate?', options: ['A. Aircraft is above the glideslope', 'B. Aircraft is below the glideslope', 'C. Aircraft is on glideslope but ILS is flagged', 'D. Aircraft is too close to the threshold'], correct: 1, explanation: 'A fly-up deflection indicates the aircraft is BELOW the glideslope and must climb.', reference: 'AIP ENR 1.5 / ICAO Doc 8168' },
    { question: 'What is the difference between a rhumb line and a great circle?', options: ['A. A rhumb line is the shortest distance, a great circle crosses meridians at the same angle', 'B. A great circle is the shortest distance on a sphere, a rhumb line crosses all meridians at the same angle', 'C. They are identical at latitudes below 60 degrees', 'D. A great circle is only used for polar navigation'], correct: 1, explanation: 'A great circle is the shortest distance between two points on a sphere. A rhumb line maintains a constant heading.', reference: 'CASA Navigation Study Guide' },
  ],
  'Aircraft General Knowledge': [
    { question: 'What does the pitot-static system provide?', options: ['A. Attitude information to the flight director', 'B. Airspeed, altitude, and vertical speed inputs to flight instruments', 'C. Pressurised air to the cabin at altitude', 'D. Engine intake total pressure for fuel control'], correct: 1, explanation: 'The pitot-static system supplies total pitot and static pressure to the ASI, altimeter, and VSI.', reference: 'CASA AGK Study Guide' },
    { question: 'What is pressure altitude?', options: ['A. Altitude shown when set to local QNH', 'B. Altitude indicated when the altimeter is set to 1013.25 hPa', 'C. Altitude corrected for temperature above MSL', 'D. Height above the aerodrome reference point'], correct: 1, explanation: 'Pressure altitude is the altitude indicated when the altimeter subscale is set to 1013.25 hPa standard pressure.', reference: 'CASA AGK / AIP ENR 1.7' },
    { question: 'What is the effect of high density altitude on aircraft performance?', options: ['A. Performance improves as reduced density means less drag', 'B. Performance deteriorates with reduced engine power, thrust, and aerodynamic lift', 'C. Performance is unaffected if the aircraft is turbocharged', 'D. Only jet performance is affected'], correct: 1, explanation: 'High density altitude means less dense air, reducing engine power, propeller efficiency, and aerodynamic lift.', reference: 'CASA AGK / Performance Study Guide' },
    { question: 'What is the purpose of static dischargers?', options: ['A. To provide a ground path for lightning', 'B. To dissipate static electricity reducing radio interference', 'C. To measure atmospheric electricity', 'D. To protect the fuel system from electrostatic ignition'], correct: 1, explanation: 'Static dischargers dissipate the electrostatic charge that builds on the airframe during flight.', reference: 'CASA AGK Study Guide' },
    { question: 'What is VMO/MMO?', options: ['A. Variable Maximum Output, the rated continuous power', 'B. Maximum Operating Speed/Mach number which must not be exceeded in normal operations', 'C. Speed at which maximum lift-to-drag ratio is achieved', 'D. Speed at which landing gear must be retracted'], correct: 1, explanation: 'VMO is the Maximum Operating indicated airspeed and MMO is the Maximum Operating Mach number.', reference: 'Aircraft Flight Manual / CASA AGK Study Guide' },
    { question: 'What does a cockpit voice recorder capture?', options: ['A. ATC communications only', 'B. Cockpit audio including crew conversation, radio calls, and audio warnings for accident investigation', 'C. Live crew communications for quality assurance', 'D. Checklists for crew use'], correct: 1, explanation: 'A CVR captures the last 2 hours minimum of cockpit audio including crew conversations and radio communications.', reference: 'CASR Part 91 / ICAO Annex 6' },
    { question: 'What is the purpose of ground spoilers on landing?', options: ['A. To provide aerodynamic braking by increasing drag only', 'B. To destroy lift immediately after touchdown, increasing weight on wheels for more effective braking', 'C. To assist roll control at low speeds on the runway', 'D. To prevent bouncing on landing'], correct: 1, explanation: 'Ground spoilers deploy on touchdown to destroy residual wing lift, transferring the aircraft full weight to the wheels.', reference: 'CASA AGK Study Guide / Aircraft Systems' },
    { question: 'What is the function of a hydraulic accumulator?', options: ['A. Filters hydraulic fluid contaminants', 'B. Stores hydraulic pressure to absorb surges and provide emergency power', 'C. Regulates system pressure to a constant level', 'D. Converts mechanical energy to hydraulic pressure'], correct: 1, explanation: 'A hydraulic accumulator stores pressurised fluid. It absorbs pressure surges and provides limited backup pressure.', reference: 'CASA AGK Study Guide / Aircraft Hydraulic Systems' },
    { question: 'What is compressor stall in a gas turbine engine?', options: ['A. Engine failing to start due to insufficient airflow', 'B. Disruption to smooth compressor airflow causing separation and possible flame extinction', 'C. Over-revving beyond rated RPM', 'D. Icing of compressor inlet guide vanes'], correct: 1, explanation: 'Compressor stall occurs when blade angle of attack exceeds the critical angle, causing airflow separation.', reference: 'CASA AGK Study Guide / Gas Turbine Engines' },
    { question: 'What does MEL stand for and what is its purpose?', options: ['A. Maximum Equipment List, heaviest items permitted', 'B. Minimum Equipment List, specifies equipment that may be inoperative for dispatch within safety limits', 'C. Mandatory Equipment List, must be operational at all times', 'D. Maintenance Entry Log, record of maintenance actions'], correct: 1, explanation: 'The Minimum Equipment List allows an operator to dispatch an aircraft with certain specified equipment inoperative.', reference: 'CASR Part 42 / AC 43-10' },
  ],
  'Flight Rules & Air Law': [
    { question: 'Under CASR Part 61, what is the minimum age for a CPL Aeroplane?', options: ['A. 17 years', 'B. 18 years', 'C. 19 years', 'D. 21 years'], correct: 1, explanation: 'CASR Part 61.415 specifies that an applicant for a CPL Aeroplane must be at least 18 years of age.', reference: 'CASR Part 61.415' },
    { question: 'When must a transponder be operated in Australia?', options: ['A. Only in Class C and D airspace', 'B. At all times when airborne unless ATC instructs otherwise', 'C. Only when operating IFR', 'D. Only above 10000 ft AMSL'], correct: 1, explanation: 'CASR Part 91.415 requires transponders to be operated at all times when airborne unless ATC specifically instructs otherwise.', reference: 'CASR Part 91.415' },
    { question: 'What is required to enter Class C airspace VFR?', options: ['A. No clearance needed if clear of cloud', 'B. ATC clearance and two-way radio communication', 'C. Only a radio call to advise of intentions', 'D. An IFR flight plan must be filed'], correct: 1, explanation: 'Class C airspace requires an ATC clearance and established two-way radio communication before entry.', reference: 'AIP ENR 1.4' },
    { question: 'Who is responsible for the safe conduct of a flight under CASR?', options: ['A. The operator only', 'B. The pilot in command', 'C. ATC when in controlled airspace', 'D. The chief pilot of the operator'], correct: 1, explanation: 'CASR Part 91.085 establishes that the pilot in command is responsible for the safe conduct of the flight.', reference: 'CASR Part 91.085' },
    { question: 'What is the minimum weather for VFR flight departing a non-controlled aerodrome by day?', options: ['A. 1500 m visibility and clear of cloud', 'B. 5000 m visibility and 1000 ft ceiling', 'C. 3000 m visibility and 500 ft ceiling', 'D. 8 km visibility and no restrictions'], correct: 0, explanation: 'For VFR flight outside controlled airspace below 3000 ft AMSL or 1000 ft AGL, the minimum is 1500 m visibility and clear of cloud.', reference: 'AIP ENR 1.2' },
    { question: 'What does night mean for logging night flight time under CASR?', options: ['A. 30 minutes after sunset to 30 minutes before sunrise', 'B. Between the end of evening civil twilight and the beginning of morning civil twilight', 'C. When the sun is more than 6 degrees below the horizon', 'D. One hour after sunset to one hour before sunrise'], correct: 1, explanation: 'Under CASR, night is defined as the period between the end of evening civil twilight and the beginning of morning civil twilight.', reference: 'AIP GEN 2.2 / CASR Dictionary' },
    { question: 'What is the legal significance of AFM limitations?', options: ['A. Advisory only, pilots may deviate at discretion', 'B. Legally binding, operating outside AFM limits is illegal', 'C. Mandatory for RPT but advisory for charter', 'D. Applies only to aircraft over 5700 kg MTOW'], correct: 1, explanation: 'The AFM is an approved document and its limitations are legally binding.', reference: 'CASR Part 21 / CASR Part 91' },
    { question: 'What ELT is required for Australian RPT operations under CAO 20.7.4?', options: ['A. A portable ELT stored in the cabin', 'B. A fixed ELT operating on 406 MHz', 'C. Any ELT approved under FAA regulations', 'D. An ELT on 121.5 MHz only'], correct: 1, explanation: 'CAO 20.7.4 requires RPT aircraft to be fitted with a fixed 406 MHz ELT registered with AMSA.', reference: 'CAO 20.7.4' },
    { question: 'Can a pilot exercise CPL privileges without a valid Class 1 medical?', options: ['A. Yes for 30 days', 'B. No, CPL privileges cannot be exercised without a valid medical', 'C. Yes if they notify CASA within 7 days', 'D. Yes for 90 days if they self-declare fitness'], correct: 1, explanation: 'A pilot must hold a current medical certificate appropriate to their licence to exercise its privileges.', reference: 'CASR Part 67 / CASR 61.045' },
    { question: 'What is the minimum total flight time for an ATPL Aeroplane under CASR?', options: ['A. 1000 hours', 'B. 1500 hours with specific requirements', 'C. 1200 hours', 'D. 2000 hours'], correct: 1, explanation: 'CASR Part 61.480 requires a minimum of 1500 hours total flight time for the ATPL Aeroplane.', reference: 'CASR Part 61.480' },
  ],
  'Operations, Performance and Planning': [
    { question: 'What is the minimum fuel reserve for a VFR day flight in a single-engine aeroplane?', options: ['A. 30 minutes at cruise power', 'B. 45 minutes at cruise power', 'C. 20 minutes at cruise power', 'D. 10% of total fuel uplifted'], correct: 1, explanation: 'Under CAO 20.9, single-engine aeroplanes on VFR day flights must carry at least 45 minutes reserve at cruise power.', reference: 'CASR Part 91 / CAO 20.9' },
    { question: 'What is Zero Fuel Weight?', options: ['A. Weight of the aircraft with no passengers', 'B. Maximum weight before any usable fuel is added', 'C. Weight when tanks are empty after flight', 'D. Aircraft empty weight only'], correct: 1, explanation: 'Zero Fuel Weight is the total weight loaded with crew, passengers, baggage, and cargo but with no usable fuel.', reference: 'AFM / CASA Performance Study Guide' },
    { question: 'What is MTOW?', options: ['A. Maximum Total Operating Weight including fuel at any point', 'B. Maximum Takeoff Weight, maximum certified weight at which the aircraft may begin the takeoff roll', 'C. Maximum Thrust Output Weight', 'D. Maximum Traffic Operating Weight'], correct: 1, explanation: 'MTOW is the maximum weight at which the aircraft is certified to begin the takeoff roll.', reference: 'CASR / AFM / CASA Performance Study Guide' },
    { question: 'What is the significance of moment in mass and balance?', options: ['A. The time at which CG shifts during flight', 'B. Product of a weight and its arm from the datum, used to calculate CG position', 'C. Angular momentum of the aircraft in a turn', 'D. Rate of change of aircraft weight as fuel burns'], correct: 1, explanation: 'Moment = weight x arm. Summing all moments and dividing by total weight gives CG position.', reference: 'CASA Performance and Mass and Balance Study Guide' },
    { question: 'What is the effect of a forward centre of gravity?', options: ['A. Increased stability but reduced control authority and increased trim drag', 'B. Decreased stability and lighter control forces', 'C. Improved fuel efficiency due to reduced induced drag', 'D. No effect, CG only affects weight and balance limits'], correct: 0, explanation: 'A forward CG increases longitudinal stability but requires more up-elevator trim, increasing trim drag.', reference: 'CASA Performance and Mass and Balance Study Guide' },
    { question: 'What is the standard contingency fuel for an IFR flight under CASR?', options: ['A. 5% of trip fuel or 5 minutes at cruise, whichever is greater', 'B. 10% of trip fuel', 'C. A fixed 30 minutes at holding speed', 'D. 2% of trip fuel per hour of flight'], correct: 0, explanation: 'Under CAO 20.9, contingency fuel is the greater of 5% of trip fuel or 5 minutes at cruise.', reference: 'CAO 20.9 / CASR Part 91' },
    { question: 'What is trip fuel for a VFR cross-country flight?', options: ['A. Total fuel on board at departure', 'B. Fuel from engine start at departure to landing at destination including taxi', 'C. Fuel from top of climb to top of descent only', 'D. Fuel from brake release to runway threshold'], correct: 1, explanation: 'Trip fuel is the total fuel from engine start to landing at destination, including taxi, takeoff, climb, cruise, descent, and approach.', reference: 'CASR Part 91 / CAO 20.9' },
    { question: 'An aircraft has MTOW 3500 kg, empty weight 2100 kg, and carries 400 kg of fuel. What is the maximum payload?', options: ['A. 1000 kg', 'B. 900 kg', 'C. 800 kg', 'D. 1400 kg'], correct: 0, explanation: 'Maximum payload = MTOW minus Empty weight minus Fuel = 3500 minus 2100 minus 400 = 1000 kg.', reference: 'Performance and mass and balance calculations' },
    { question: 'What is V1 in jet aircraft performance?', options: ['A. Speed at which the aircraft becomes airborne', 'B. Takeoff Decision Speed, above V1 the takeoff must continue, below it may be rejected', 'C. Speed at which flaps must be retracted', 'D. Speed at which the nose wheel lifts off'], correct: 1, explanation: 'V1 is the Takeoff Decision Speed. At or after V1, the takeoff must continue.', reference: 'CASR / AFM / CASA Performance Study Guide' },
    { question: 'What is the purpose of alternate fuel in an IFR fuel plan?', options: ['A. Extra fuel for ATC holding at destination', 'B. Fuel to fly from destination to the nominated alternate and conduct an approach', 'C. Reserve fuel for taxi and start-up', 'D. 10% contingency added to trip fuel'], correct: 1, explanation: 'Alternate fuel is required to fly from the destination to the nominated alternate and conduct an approach.', reference: 'CASR Part 91 / CAO 20.9' },
  ],
  'Flight Planning': [
    { question: 'What is the minimum fuel reserve for a VFR day flight in a single-engine aeroplane?', options: ['A. 30 minutes at cruise power', 'B. 45 minutes at cruise power', 'C. 20 minutes at cruise power', 'D. 10% of total fuel uplifted'], correct: 1, explanation: 'Under CAO 20.9, single-engine aeroplanes on VFR day flights must carry at least 45 minutes reserve at cruise power.', reference: 'CASR Part 91 / CAO 20.9' },
    { question: 'What is Zero Fuel Weight?', options: ['A. Weight of the aircraft with no passengers', 'B. Maximum weight before any usable fuel is added', 'C. Weight when tanks are empty after flight', 'D. Aircraft empty weight only'], correct: 1, explanation: 'Zero Fuel Weight is the total weight loaded with crew, passengers, baggage, and cargo but with no usable fuel.', reference: 'AFM / CASA Performance Study Guide' },
    { question: 'What is V1 in jet aircraft performance?', options: ['A. Speed at which the aircraft becomes airborne', 'B. Takeoff Decision Speed, above V1 the takeoff must continue', 'C. Speed at which flaps must be retracted', 'D. Speed at which the nose wheel lifts off'], correct: 1, explanation: 'V1 is the Takeoff Decision Speed. At or after V1, the takeoff must continue.', reference: 'CASR / AFM / CASA Performance Study Guide' },
    { question: 'What is the balanced field length concept?', options: ['A. A runway length balancing needs of arriving and departing aircraft', 'B. Runway length where accelerate-stop distance equals takeoff distance with one engine inoperative', 'C. A runway with equal headwind and crosswind components', 'D. Total runway length divided equally between TORA and clearway'], correct: 1, explanation: 'Balanced field length is achieved when V1 is selected so that ASDR equals TODR.', reference: 'CASA Performance Study Guide / AC 21-4' },
    { question: 'What is the WAT limit?', options: ['A. Weight, Altitude, Temperature, determines maximum permissible takeoff weight to meet climb performance requirements', 'B. Wind, Altitude, Temperature affecting cruise performance', 'C. Weight, Attitude, Trim used for CG calculations', 'D. Weight at Threshold, maximum landing weight'], correct: 0, explanation: 'The WAT limit defines the maximum takeoff weight to meet minimum climb gradients with one engine inoperative.', reference: 'CASR Part 121 / CASA Performance Study Guide' },
    { question: 'What is MTOW?', options: ['A. Maximum Total Operating Weight including fuel at any point', 'B. Maximum Takeoff Weight, maximum certified weight at which the aircraft may begin the takeoff roll', 'C. Maximum Thrust Output Weight', 'D. Maximum Traffic Operating Weight'], correct: 1, explanation: 'MTOW is the maximum weight at which the aircraft is certified to begin the takeoff roll.', reference: 'CASR / AFM / CASA Performance Study Guide' },
    { question: 'What is the standard contingency fuel for an IFR flight?', options: ['A. 5% of trip fuel or 5 minutes at cruise, whichever is greater', 'B. 10% of trip fuel', 'C. A fixed 30 minutes at holding speed', 'D. 2% of trip fuel per hour of flight'], correct: 0, explanation: 'Under CAO 20.9, contingency fuel is the greater of 5% of trip fuel or 5 minutes at cruise.', reference: 'CAO 20.9 / CASR Part 91' },
    { question: 'What is en-route alternate fuel?', options: ['A. Reserve fuel for unexpected ATC routing', 'B. Fuel to divert to a pre-selected en-route alternate at the most critical point in event of emergency', 'C. Extra contingency fuel above the minimum required', 'D. Fuel for an alternate selected only if destination goes below minima'], correct: 1, explanation: 'ERA fuel provides fuel to divert from the critical point to a pre-selected en-route alternate.', reference: 'CASR Part 121 / CASR ETOPS requirements' },
    { question: 'What is the net takeoff flight path?', options: ['A. Actual flight path with all engines operating', 'B. Gross flight path reduced by a safety margin used for obstacle clearance planning', 'C. Flight path assuming immediate engine failure at liftoff', 'D. Minimum climb gradient to clear obstacles within 5 nm'], correct: 1, explanation: 'The net takeoff flight path is the gross path degraded by a performance margin for obstacle clearance after OEI takeoff.', reference: 'CASR Part 121 / CASA Performance Study Guide' },
    { question: 'What is the effect of a forward centre of gravity on performance?', options: ['A. Increased stability but reduced control authority and increased trim drag', 'B. Decreased stability and lighter control forces', 'C. Improved fuel efficiency', 'D. No effect on handling'], correct: 0, explanation: 'A forward CG increases longitudinal stability but requires more up-elevator trim, increasing trim drag.', reference: 'CASA Performance and Mass and Balance Study Guide' },
  ],
  'PPL Theory': [
    { question: 'What is the minimum weather for VFR flight by day?', options: ['A. 1500 m visibility and clear of cloud', 'B. 5000 m visibility and 1000 ft ceiling', 'C. 3000 m visibility and 500 ft ceiling', 'D. 8 km visibility'], correct: 0, explanation: 'For VFR flight outside controlled airspace the minimum is 1500 m flight visibility and clear of cloud.', reference: 'AIP ENR 1.2' },
    { question: 'What is the purpose of the altimeter?', options: ['A. To measure airspeed', 'B. To measure vertical height above a pressure datum', 'C. To measure rate of climb', 'D. To measure outside air temperature'], correct: 1, explanation: 'The altimeter measures vertical height above a pressure datum, either QNH or QFE.', reference: 'CASA PPL Study Guide' },
    { question: 'What does QNH mean?', options: ['A. Height above the aerodrome', 'B. Altimeter setting that indicates altitude above mean sea level', 'C. Standard pressure setting of 1013 hPa', 'D. Height above the highest obstacle'], correct: 1, explanation: 'QNH is the altimeter pressure setting that causes the altimeter to read altitude above mean sea level.', reference: 'AIP GEN 2.2' },
    { question: 'What is a METAR?', options: ['A. A forecast of expected weather conditions', 'B. A routine aviation weather observation report', 'C. A warning of significant weather', 'D. A pilot report of actual conditions'], correct: 1, explanation: 'A METAR is a routine aviation weather observation report issued at regular intervals.', reference: 'AIP GEN 3.5' },
    { question: 'What is the purpose of a TAF?', options: ['A. To report current weather conditions', 'B. To provide a forecast of expected weather at an aerodrome', 'C. To warn pilots of significant weather en route', 'D. To provide upper wind information'], correct: 1, explanation: 'A TAF provides a forecast of expected weather conditions at a specific aerodrome.', reference: 'AIP GEN 3.5' },
    { question: 'What does VFR stand for?', options: ['A. Very Fast Route', 'B. Visual Flight Rules', 'C. Verified Flight Requirements', 'D. Vertical Flight Regulations'], correct: 1, explanation: 'VFR stands for Visual Flight Rules. Pilots operating VFR navigate primarily by visual reference to the ground.', reference: 'CASR Part 91 / AIP ENR 1.2' },
    { question: 'What is the function of the ASI?', options: ['A. To measure groundspeed', 'B. To measure the speed of the aircraft through the air mass', 'C. To measure true airspeed directly', 'D. To measure wind speed'], correct: 1, explanation: 'The Airspeed Indicator measures the difference between pitot total pressure and static pressure.', reference: 'CASA PPL Study Guide' },
    { question: 'What is a NOTAM?', options: ['A. A weather forecast for pilots', 'B. A notice containing information essential to flight operations', 'C. A mandatory training requirement', 'D. A navigation chart update'], correct: 1, explanation: 'A NOTAM is a notice containing information essential to flight operations.', reference: 'AIP GEN 3.1' },
    { question: 'What is the circuit direction at a non-controlled aerodrome unless otherwise specified?', options: ['A. Right hand', 'B. Left hand', 'C. Pilots choice', 'D. Depends on runway orientation'], correct: 1, explanation: 'At a non-controlled aerodrome the standard circuit direction is left hand.', reference: 'AIP ENR 1.1' },
    { question: 'What frequency is CTAF used on at non-controlled aerodromes?', options: ['A. 121.5 MHz', 'B. 126.7 MHz or the published CTAF frequency', 'C. 118.1 MHz', 'D. 123.45 MHz'], correct: 1, explanation: 'CTAF is used for position reporting at non-controlled aerodromes, typically 126.7 MHz.', reference: 'AIP ENR 1.1 / ERSA' },
  ],
  'Instrument Rating': [
    { question: 'What is Decision Altitude on a precision approach?', options: ['A. Altitude at which the crew must decide to divert to alternate', 'B. Altitude at which the approach must be abandoned if visual reference is not established', 'C. Lowest altitude on a non-precision approach', 'D. Altitude at which autopilot must be disconnected'], correct: 1, explanation: 'DA is the altitude on a precision approach at which the crew must decide whether to continue or execute a missed approach.', reference: 'ICAO Doc 8168 / AIP ENR 1.5' },
    { question: 'What is Minimum Descent Altitude on a non-precision approach?', options: ['A. The lowest altitude to which an aircraft may descend before establishing visual contact', 'B. The altitude at which the missed approach must be initiated', 'C. The altitude at which the approach lights become visible', 'D. The minimum safe altitude for the approach segment'], correct: 0, explanation: 'MDA is the lowest altitude to which an aircraft may descend on a non-precision approach without the required visual reference.', reference: 'ICAO Doc 8168 / AIP ENR 1.5' },
    { question: 'What does ILS stand for?', options: ['A. Instrument Landing Sequence', 'B. Instrument Landing System', 'C. Instrument Localiser System', 'D. Integrated Landing Standard'], correct: 1, explanation: 'ILS provides lateral guidance via the localiser and vertical guidance via the glideslope.', reference: 'AIP ENR 1.5 / ICAO Annex 10' },
    { question: 'What is the purpose of an alternate aerodrome on an IFR flight plan?', options: ['A. A diversion aerodrome if the destination becomes unavailable', 'B. A training aerodrome for practice approaches', 'C. A fuel stop en route', 'D. A departure alternate only'], correct: 0, explanation: 'An alternate aerodrome is nominated as a diversion option if the destination becomes unavailable.', reference: 'CASR Part 91 / CAO 20.9' },
    { question: 'What is a holding pattern?', options: ['A. A rectangular circuit at an aerodrome', 'B. A racetrack pattern flown over a fix to absorb delay or prepare for an approach', 'C. A waiting area for aircraft taxiing to the runway', 'D. A safety buffer zone around controlled airspace'], correct: 1, explanation: 'A holding pattern is a racetrack shaped flight path over a navigation fix used to absorb delay.', reference: 'ICAO Doc 8168 / AIP ENR 1.5' },
    { question: 'What is the standard holding pattern direction?', options: ['A. Left hand turns', 'B. Right hand turns', 'C. Pilot discretion', 'D. Depends on the aerodrome'], correct: 1, explanation: 'The standard holding pattern uses right hand turns unless a left hand pattern is specifically published.', reference: 'ICAO Doc 8168 / AIP ENR 1.5' },
    { question: 'What is an ATIS broadcast?', options: ['A. A live ATC weather update', 'B. A recorded continuous broadcast of current aerodrome information', 'C. A pilot report of actual conditions', 'D. An emergency frequency broadcast'], correct: 1, explanation: 'ATIS is a continuous recorded broadcast providing current aerodrome information.', reference: 'AIP ENR 1.1 / AIP AD 1.1' },
    { question: 'What does a full scale fly-up deflection of the ILS glideslope indicate?', options: ['A. Aircraft is above the glideslope', 'B. Aircraft is below the glideslope', 'C. ILS is unserviceable', 'D. Aircraft is too fast on approach'], correct: 1, explanation: 'A fly-up deflection indicates the aircraft is BELOW the glideslope and must climb.', reference: 'AIP ENR 1.5 / ICAO Doc 8168' },
    { question: 'What weather minimum is typically required to nominate an alternate aerodrome?', options: ['A. Destination forecast below 1500 ft ceiling and 8 km visibility', 'B. Destination forecast below circling minima or precision approach minima', 'C. Any IMC conditions at destination', 'D. Destination forecast below 3000 ft and 10 km'], correct: 1, explanation: 'An alternate is generally required when the destination weather is forecast below approach minima.', reference: 'CASR Part 91 / CAO 20.9 / AIP ENR 1.1' },
    { question: 'What is the IREX exam testing?', options: ['A. Basic flying skills for private pilots', 'B. Instrument flight rules, procedures, and meteorology for IFR operations in Australia', 'C. Radio communication procedures only', 'D. Aircraft systems knowledge'], correct: 1, explanation: 'The IREX tests knowledge of instrument flight rules, IFR procedures, and meteorology for IFR operations.', reference: 'CASA IREX Study Guide' },
  ],
}

function findQuestions(subject: string) {
  if (freeQuestions[subject]) return freeQuestions[subject]
  const lower = subject.toLowerCase().trim()
  for (const key of Object.keys(freeQuestions)) {
    if (key.toLowerCase().trim() === lower) return freeQuestions[key]
  }
  for (const key of Object.keys(freeQuestions)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) return freeQuestions[key]
  }
  return []
}

function getLicence(subject: string): string {
  if (subject === 'PPL Theory') return 'PPL'
  if (subject === 'Instrument Rating') return 'IREX'
  const atpl = ['Flight Planning']
  const cpl = ['Operations, Performance and Planning']
  if (atpl.includes(subject)) return 'ATPL'
  if (cpl.includes(subject)) return 'CPL'
  return 'CPL'
}

export default function QuizPage({ params }: { params: Promise<{ subject: string }> }) {
  const resolvedParams = use(params)
  const subject = decodeURIComponent(resolvedParams.subject || '')
  const [questions, setQuestions] = useState<any[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [scoreSaved, setScoreSaved] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  useEffect(() => {
    if (!subject) return
    const bank = findQuestions(subject)
    const shuffled = [...bank].sort(() => Math.random() - 0.5).slice(0, 10)
    setQuestions(shuffled)
  }, [subject])

  async function saveScore(s: number, total: number) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const pct = Math.round(s / total * 100)
      const { error } = await supabase.from('scores').insert({
        user_id: user.id,
        subject: subject,
        licence: getLicence(subject),
        score: s,
        total: total,
        percentage: pct
      })
      if (!error) setScoreSaved(true)
    } catch (e) {
      console.error('Score save error:', e)
    }
  }

  function selectAnswer(idx: number) {
    if (answered) return
    setAnswered(true)
    setSelectedAnswer(idx)
    if (idx === questions[currentIdx].correct) setScore(s => s + 1)
  }

  function nextQuestion() {
    const isLast = currentIdx >= questions.length - 1
    const newScore = score + (selectedAnswer === questions[currentIdx].correct ? 1 : 0)
    if (isLast) {
      setFinalScore(newScore)
      saveScore(newScore, questions.length)
      setFinished(true)
    } else {
      setCurrentIdx(i => i + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    }
  }

  function restart() {
    const bank = findQuestions(subject)
    setQuestions([...bank].sort(() => Math.random() - 0.5).slice(0, 10))
    setCurrentIdx(0)
    setScore(0)
    setFinalScore(0)
    setFinished(false)
    setAnswered(false)
    setSelectedAnswer(null)
    setScoreSaved(false)
  }

  if (!subject || questions.length === 0) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui,sans-serif', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ color: '#64748b', fontSize: '16px' }}>Loading questions...</p>
      <a href="/dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}>Back to dashboard</a>
    </main>
  )

  if (finished) {
    const pct = Math.round(finalScore / questions.length * 100)
    return (
      <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', maxWidth: '500px', width: '100%', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '8px' }}>{subject}</div>
          <div style={{ fontSize: '56px', fontWeight: '800', color: '#1e3a6e', fontFamily: 'monospace' }}>{pct}</div>
          <div style={{ fontSize: '16px', color: '#64748b', marginBottom: '8px' }}>percent</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: pct >= 70 ? '#16a34a' : '#dc2626', marginBottom: '0.5rem' }}>
            {pct >= 70 ? 'Pass — well done!' : 'Below 70% — keep studying'}
          </div>
          {scoreSaved && <div style={{ fontSize: '12px', color: '#10b981', marginBottom: '1.5rem' }}>Score saved to your progress</div>}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#16a34a' }}>{finalScore}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Correct</div>
            </div>
            <div style={{ background: '#fff1f2', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#dc2626' }}>{questions.length - finalScore}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Incorrect</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={restart} style={{ flex: 1, background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '11px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Try Again</button>
            <a href="/dashboard" style={{ flex: 1, background: '#f8fafc', color: '#0a1628', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '11px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>Dashboard</a>
          </div>
          <a href="/progress" style={{ display: 'block', marginTop: '12px', fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>View all progress →</a>
        </div>
      </main>
    )
  }

  const q = questions[currentIdx]
  const letters = ['A', 'B', 'C', 'D']

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>V1</span>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#0a1628' }}> Study</span>
        </div>
        <a href="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Back to dashboard</a>
      </nav>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ marginBottom: '6px', fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Question {currentIdx + 1} of {questions.length}</div>
        <div style={{ background: '#e2e8f0', borderRadius: '99px', height: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: '#2563eb', borderRadius: '99px', width: `${(currentIdx / questions.length) * 100}%`, transition: 'width 0.4s' }}></div>
        </div>
        <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#2563eb', marginBottom: '10px', fontFamily: 'monospace' }}>{subject}</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#0a1628', lineHeight: 1.55, marginBottom: '1.25rem' }}>{q.question}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {q.options.map((opt: string, i: number) => {
              let bg = 'white'
              let border = '1px solid #e2e8f0'
              let col = '#0a1628'
              if (answered) {
                if (i === q.correct) { bg = '#f0fdf4'; border = '1px solid #16a34a'; col = '#15803d' }
                else if (i === selectedAnswer) { bg = '#fff1f2'; border = '1px solid #dc2626'; col = '#b91c1c' }
                else { col = '#94a3b8' }
              }
              return (
                <button key={i} onClick={() => selectAnswer(i)} disabled={answered} style={{ background: bg, border, borderRadius: '8px', padding: '11px 14px', textAlign: 'left', cursor: answered ? 'default' : 'pointer', fontSize: '14px', color: col, display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', background: answered && i === q.correct ? '#dcfce7' : answered && i === selectedAnswer ? '#ffe4e6' : '#f1f5f9', borderRadius: '4px', padding: '1px 6px', minWidth: '22px', textAlign: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {answered && i === q.correct ? '✓' : answered && i === selectedAnswer ? '✗' : letters[i]}
                  </span>
                  <span>{opt.replace(/^[A-D]\.\s*/, '')}</span>
                </button>
              )
            })}
          </div>
        </div>
        {answered && (
          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1d4ed8', marginBottom: '8px' }}>Explanation</div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1e3a6e', marginBottom: '12px' }}>{q.explanation}</p>
            <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '10px' }}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#2563eb', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reference</div>
              <div style={{ fontSize: '12px', color: '#3b82f6', fontFamily: 'monospace' }}>{q.reference}</div>
            </div>
          </div>
        )}
        {answered && (
          <button onClick={nextQuestion} style={{ width: '100%', background: '#1e3a6e', color: 'white', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            {currentIdx < questions.length - 1 ? 'Next question →' : 'See results →'}
          </button>
        )}
      </div>
    </main>
  )
}
