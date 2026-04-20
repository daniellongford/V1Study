import { Question } from '../types'

export const chufQuestions: Question[] = [

{
  question: 'What is the "sunk cost fallacy" in aviation decision-making?',
  options: ['A. A navigational error where a pilot continues on a route that has clearly gone wrong because of how far they have already flown', 'B. The irrational tendency to continue a failing course of action because of resources (time, money, fuel) already invested, even when the rational decision would be to stop', 'C. An approach decision where a pilot continues below minimums because of fuel already burned diverting from the primary destination', 'D. A maintenance decision error where repairs continue on an uneconomical aircraft because of prior investment'],
  correct: 1,
  explanation: 'The sunk cost fallacy causes pilots to continue a flight they should abandon because of time, money, or effort already spent. The correct logic is that past costs are irrelevant — only future costs and benefits should inform the current decision.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "cognitive load theory" suggest about learning new procedures in aviation?',
  options: ['A. Working memory capacity is limited — new procedures should be introduced incrementally, with simpler elements automatised before complex elements are added, preventing cognitive overload during learning', 'B. Visual materials should be avoided during training — audio instruction produces superior retention', 'C. Complex procedures should always be learned in a single extended training session for maximum retention', 'D. New procedures should always be learned without reference materials to build memory strength'],
  correct: 0,
  explanation: 'Cognitive load theory recognises that working memory can only process a limited amount of new information simultaneously. Effective procedure training introduces elements incrementally, allows simpler elements to become automatic before adding complexity, and uses worked examples to reduce extraneous cognitive load.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is situational awareness (SA) and at what three levels does it operate?',
  options: ['A. SA is physical scanning technique — Level 1 outside, Level 2 instruments, Level 3 charts', 'B. SA is the continuous mental model of what is happening — Level 1: perceiving, Level 2: understanding meaning, Level 3: projecting future states', 'C. SA is the memory system for flight procedures — Level 1 recall, Level 2 recognition, Level 3 application', 'D. SA is an ATC service — Level 1 basic radar, Level 2 ADSB, Level 3 TCAS integration'],
  correct: 1,
  explanation: 'Situational awareness operates at three levels: Level 1 (perception — what are the instruments showing?), Level 2 (comprehension — what does this mean for my flight?), and Level 3 (projection — where will this lead if nothing changes?). Decision-making builds on all three.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "controlled flight into terrain" (CFIT) mean and what human factors contribute to it?',
  options: ['A. A mid-air collision between two aircraft both under ATC control at the time of impact', 'B. A runway excursion caused by inadequate braking on a contaminated surface', 'C. A stall-spin accident where the aircraft is uncontrolled at the time of impact', 'D. An accident where an airworthy, controlled aircraft is flown into terrain without awareness — typically caused by spatial disorientation, loss of situational awareness, or visual illusions'],
  correct: 3,
  explanation: 'CFIT occurs when a fully controllable aircraft is inadvertently flown into the ground or water. Human factors causes include: spatial disorientation, loss of SA, visual illusions (especially at night or in IMC), confirmation bias, and plan continuation bias.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "mutual monitoring" in multi-crew operations?',
  options: ['A. Each crew member actively monitoring the other\'s actions, aircraft state, and decision-making — the primary mechanism by which multi-crew operations detect and correct errors before they propagate', 'B. Both pilots monitoring the same instrument simultaneously to verify accuracy', 'C. The captain monitoring the first officer\'s performance for competency assessment purposes', 'D. ATC monitoring both crew members\' radio calls for compliance with communication standards'],
  correct: 0,
  explanation: 'Mutual monitoring is the mechanism by which two-crew operations provide error-catching capability. Each crew member actively observes the other\'s actions and the aircraft state, ready to identify deviations. Without active mutual monitoring, the error-catching benefit of multi-crew operations is not realised.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'How does distraction affect the execution of checklists?',
  options: ['A. Modern challenge-response checklists are specifically designed to be distraction-proof', 'B. Distraction only affects long checklists of more than 15 items — short checklists are completed reliably despite interruption', 'C. Distraction typically causes pilots to lose their place in a checklist and believe they have completed it when they have not — a leading cause of gear-up landings and engine fires', 'D. Checklists are immune to distraction effects because they are read aloud, reinforcing memory'],
  correct: 2,
  explanation: 'Distraction is a leading cause of checklist omissions. When interrupted mid-checklist, pilots often resume from where they think they were — but this is frequently inaccurate. The correct technique is to restart from the beginning after any significant interruption.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the effect of sustained low-level stress on long-term health and pilot performance?',
  options: ['A. Low-level stress has no cumulative effect — only acute high-stress events affect performance or health', 'B. Sustained low-level stress impairs immune function, promotes cardiovascular disease, disrupts sleep, and progressively degrades performance through chronic fatigue and burnout', 'C. Sustained low-level stress builds resilience — pilots who operate under consistent stress develop better coping mechanisms', 'D. Low-level stress only affects performance when combined with shift work — isolated stress has no cumulative health effects'],
  correct: 1,
  explanation: 'Chronic, sustained stress has well-documented negative health effects: impaired immune function, increased cardiovascular disease risk, disrupted sleep quality, and progressive performance degradation. Aviation operations frequently involve sustained stress from scheduling, financial, and operational pressures.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is working memory and what limits its capacity?',
  options: ['A. The short-term, active memory system holding information currently being processed — limited to approximately 7 items and degrades rapidly without rehearsal', 'B. The memory system storing emotional associations with aviation experiences — relevant to anxiety management', 'C. The long-term memory store for overlearned procedures — its capacity is essentially unlimited', 'D. A computerised database of aircraft performance figures accessed via the FMS'],
  correct: 0,
  explanation: 'Working memory (short-term memory) is the active processing component of memory. It has a limited capacity (approximately 7±2 items) and degrades within seconds without rehearsal. In high-workload flight phases, important items can be displaced from working memory by new incoming information.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors significance of establishing "personal weather minimums"?',
  options: ['A. Personal minimums must be filed with CASA before each flight — they are a legal document', 'B. Personal minimums provide a safety buffer accounting for the pilot\'s specific currency, recency, and aircraft capability — reducing exposure to conditions near the regulatory minimum where risk is highest', 'C. Personal minimums only apply to pilots on restricted licences — CPL holders operate to regulatory minimums', 'D. Personal minimums above regulatory minimums are unnecessary — regulatory minimums are already conservative'],
  correct: 1,
  explanation: 'Regulatory minimums are floor values not accounting for individual currency or recency. Personal minimums add a safety buffer — a pilot recently returned from extended leave in marginal weather should set stricter personal limits.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary benefit of using standardised phraseology in radio communications?',
  options: ['A. It ensures junior pilots cannot make non-standard requests that could disrupt ATC flow', 'B. Standardised phraseology is primarily a legal requirement — its operational benefit is secondary', 'C. It reduces the likelihood of misunderstanding by using words with known, unambiguous meanings, reducing the cognitive load of interpretation', 'D. It allows ATC to process more aircraft simultaneously by reducing frequency occupancy time'],
  correct: 2,
  explanation: 'Standard phraseology has agreed, unambiguous meanings that reduce cognitive interpretation effort and decrease the chance of misunderstanding. Non-standard language increases the chance of confusion, particularly in high-workload or degraded-communication environments.',
  reference: 'ICAO Doc 4444 / AIP ENR 6.1'
},

{
  question: 'What does the concept of "skill-based, rule-based, and knowledge-based" (SRK) performance describe?',
  options: ['A. The three components of a CRM assessment — stick and rudder skills, regulatory knowledge, and decision-making', 'B. Three levels of cognitive processing: automatic sensorimotor responses (skill-based), application of stored rules (rule-based), and effortful analytical reasoning for novel situations (knowledge-based) — different error types occur at each level', 'C. A maintenance framework describing three levels of technical expertise required for different aircraft systems', 'D. The three tiers of CASA licensing — student, CPL, ATPL'],
  correct: 1,
  explanation: 'Rasmussen\'s SRK model describes three cognitive processing levels. Skill-based (automated) is prone to slips; rule-based (if-then rules) is prone to misapplication; knowledge-based (analytical) is prone to mistakes. Understanding the level of processing helps predict the type of error most likely.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary difference between "red-out" and "grey-out" during unusual attitude manoeuvres?',
  options: ['A. Grey-out affects peripheral vision first; red-out affects central vision first', 'B. Grey-out occurs during positive G when blood drains from the head; red-out occurs during negative G when blood is forced into the head, engorging retinal vessels', 'C. Red-out is a hypoxia symptom; grey-out is a hyperventilation symptom', 'D. Red-out occurs in daylight; grey-out occurs at night — the colour of the visual field depends on ambient lighting'],
  correct: 1,
  explanation: 'Grey-out occurs during positive G (blood draining from the head), causing progressive vision loss from the periphery inward. Red-out occurs during negative G (blood forced into the head, engorging retinal and conjunctival blood vessels), creating a red visual tint.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "DODAR" model used for in CRM decision-making?',
  options: ['A. A fuel calculation model — Distance, Output, Drag, Altitude, Range', 'B. A navigation fix verification method — Dead reckoning, Observation, DME, ADF, Radio', 'C. An emergency landing site assessment — Distance, Obstructions, Direction, Area, Resources', 'D. A structured decision model — Diagnose, Options, Decide, Assign tasks, Review — used for managing non-normal situations where time allows deliberate analysis'],
  correct: 3,
  explanation: 'DODAR is a structured CRM decision model: Diagnose the problem, identify Options, Decide on the best option, Assign tasks to execute the decision, and Review the outcome. It provides structure for abnormal situations where analysis time is available.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the correct response if carbon monoxide poisoning is suspected in flight?',
  options: ['A. Shut off the cabin heat, open fresh air vents, use supplemental oxygen if available, and land as soon as practicable for medical assessment', 'B. Increase cabin heat to maximum to burn off the CO', 'C. Open vents to increase airflow and continue the flight', 'D. Increase altitude to reduce the CO concentration in the cockpit'],
  correct: 0,
  explanation: 'Suspected CO poisoning requires: shut off the heat source (cabin heat draws from the exhaust), maximise fresh air, use supplemental oxygen if available, and land as soon as practicable. CO binds to haemoglobin 200 times more strongly than oxygen.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "cognitive tunnelling" and how does it differ from normal focused attention?',
  options: ['A. Focused attention is useful and controllable; cognitive tunnelling is involuntary and uncontrolled narrowing of attention driven by high stress or workload that excludes relevant safety information', 'B. Cognitive tunnelling improves performance by eliminating distracting information; focused attention degrades it', 'C. Cognitive tunnelling is physical narrowing of the visual field; focused attention is a mental state', 'D. They are identical — cognitive tunnelling is simply another term for focused attention'],
  correct: 0,
  explanation: 'Normal focused attention is deliberate and appropriate. Cognitive tunnelling is an involuntary, stress-driven narrowing that inadvertently excludes critical information. The pilot cannot "untunnel" by conscious effort as easily — recognising the state and using deliberate strategies (explicitly scanning outside the tunnel) is the management approach.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "resilience" mean for an aviation organisation, and how does an organisation demonstrate it?',
  options: ['A. The capacity to absorb disruptions and adapt to unexpected conditions while maintaining safe operations — demonstrated by: learning from near-misses, maintaining safety margins, proactive hazard identification, and adapting to novel situations', 'B. Resilience is an insurance concept — organisations demonstrate it by maintaining required liability coverage', 'C. Resilience is demonstrated by completing all operations without any safety incidents over a 12-month period', 'D. Organisational resilience means having a large reserve fleet to cover aircraft serviceability issues'],
  correct: 0,
  explanation: 'Organisational resilience is the capacity to succeed even when things go wrong — not just when everything goes to plan. Resilient organisations learn from incidents, maintain safety margins, identify novel hazards proactively, and adapt their procedures and training in response to experience.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the human factors argument for "stabilised approach criteria" being strictly defined before flight?',
  options: ['A. Criteria are defined by the aircraft\'s AFM for each aircraft type — no additional crew definition is required', 'B. Strictly defined criteria apply only to CAT II and III approaches — visual approaches are exempt', 'C. Strictly defined criteria are a CASR Part 91 regulatory requirement for commercial operations', 'D. Pre-defining specific stabilisation criteria and committing to a go-around if they are not met removes the decision from the high-pressure final approach environment, countering the powerful plan continuation bias at the critical decision point'],
  correct: 3,
  explanation: 'Pre-defining stabilised approach criteria and committing to a go-around if they are not met converts the in-flight approach continuation decision into a pre-planned commitment. This counters the very powerful plan continuation bias that operates during final approach.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the primary reason why "see-and-avoid" provides less collision protection than commonly assumed?',
  options: ['A. Pilots are too busy with instruments to spend adequate time scanning outside the cockpit', 'B. Windscreens create optical distortions that reduce the apparent speed of approaching aircraft', 'C. See-and-avoid is only ineffective in IMC — in VMC it provides adequate collision protection', 'D. Multiple physiological and psychological limitations — blind spots, task absorption, empty field myopia, inattentional blindness, and the stationary appearance of head-on aircraft — substantially reduce visual detection rates'],
  correct: 3,
  explanation: 'See-and-avoid effectiveness is limited by aircraft blind spots, task saturation reducing scan time, empty field myopia in haze, inattentional blindness, and the specific difficulty of detecting head-on aircraft (stationary in the visual field). Mid-air collision statistics confirm these limitations.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of the "NASA TLX" workload scale?',
  options: ['A. A navigation instrument calibration standard for glass cockpit aircraft', 'B. A fuel weight conversion tool used in pre-flight performance calculations', 'C. A multidimensional workload assessment tool measuring mental demand, physical demand, temporal demand, performance, effort, and frustration — used in research and CRM training to quantify and compare workload across flight phases', 'D. A transponder altitude reporting accuracy standard for RVSM operations'],
  correct: 2,
  explanation: 'The NASA Task Load Index (TLX) assesses workload across six dimensions. In aviation, it is used in research and training to identify high-workload flight phases, evaluate the workload impact of procedures changes, and raise awareness of workload contributors beyond just task complexity.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "closed-loop communication" prevent that open-loop communication cannot?',
  options: ['A. It prevents callsign confusion by requiring full callsigns on every transmission', 'B. It prevents radio frequency errors by requiring frequency confirmation before switching', 'C. It prevents frequency congestion by limiting the length of pilot transmissions', 'D. It prevents undetected communication errors — the readback and confirmation loop ensures misunderstandings are caught before being acted upon'],
  correct: 3,
  explanation: 'Open-loop communication (transmit only) allows errors to go undetected. Closed-loop communication (transmit → readback → confirmation) creates an error-correction cycle. Incorrect readbacks caught by controllers have prevented numerous accidents.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What does the term "SHELL model" describe in human factors?',
  options: ['A. A risk assessment tool used by CASA for flight examiner evaluations', 'B. A model of aircraft systems — Software, Hardware, Environment, Liveware, Liveware', 'C. A training model for instrument flight procedures', 'D. A model depicting the interfaces between the human operator and the aviation system components — Software, Hardware, Environment, Liveware (central) and Liveware (others)'],
  correct: 3,
  explanation: 'The SHELL model represents the human operator (central Liveware) and their interfaces with Software (procedures, regulations), Hardware (equipment, controls), Environment (physical conditions), and other Liveware (other people). Mismatches at these interfaces create vulnerabilities.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "anticipatory threat management" mean in a pre-flight threat assessment?',
  options: ['A. The advance booking of alternate aerodromes before a flight departs', 'B. Notifying ATC in advance of any expected airspace deviations due to weather', 'C. Filing NOTAM requests for restricted airspace penetration on the planned route', 'D. Identifying likely threats before the flight, developing contingency plans for each, and briefing the crew — converting potential surprises into anticipated scenarios with pre-planned responses'],
  correct: 3,
  explanation: 'Anticipatory threat management involves systematically identifying what could go wrong (weather deterioration, technical issues, ATC constraints) and preparing contingency plans before the flight. This converts threats from surprises into anticipated events that trigger planned responses.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the danger of flying in heavy rain in terms of visual illusions?',
  options: ['A. Rain reduces peripheral vision to zero, making lane keeping impossible without IFR equipment', 'B. Rain causes the windscreen to heat up, producing a mirage that makes the runway appear closer', 'C. Rain has no visual illusory effect — only forward visibility reduction is operationally relevant', 'D. Rain on the windscreen refracts light, making runway lights appear higher and farther away than they are, causing the pilot to fly a lower-than-normal approach'],
  correct: 3,
  explanation: 'Water on a windscreen refracts light upward, making runway lights appear to be at a steeper angle. The pilot perceives being above the glidepath and lowers the nose, flying below the safe approach path.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "shared mental model" mean in a CRM context?',
  options: ['A. A requirement for both pilots to receive the same simulator training scenarios', 'B. Two pilots simultaneously memorising the same emergency checklist', 'C. A common, synchronised understanding among crew members of the current situation, planned actions, roles, and anticipated contingencies — enabling coordinated action without explicit communication of every detail', 'D. The standardised mental model of the aircraft\'s systems shared among all type-rated pilots'],
  correct: 2,
  explanation: 'A shared mental model means all crew members have the same understanding of the situation, the plan, and each other\'s expected actions. When mental models diverge, coordination breaks down — crew members work at cross purposes. Briefings and communication maintain a shared model.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "mode confusion" in glass cockpit aircraft and why is it hazardous?',
  options: ['A. Confusion about which radio mode is appropriate for a given frequency range', 'B. A state where the pilot is unaware of or mistaken about which autopilot or FMS mode is active — leading to unexpected aircraft behaviour that the crew cannot understand or correct promptly', 'C. Confusion between day and night mode settings on the primary flight display', 'D. A misreading of the altimeter when switching between QNH and standard pressure settings'],
  correct: 1,
  explanation: 'Mode confusion occurs when the pilot has an incorrect mental model of the active automation mode. The aircraft responds to inputs in unexpected ways, creating confusion at a point when rapid, correct action is needed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is hypoxia and at what altitude does it typically begin to affect performance in an unacclimatised individual?',
  options: ['A. Overbreathing — typically begins above FL250 in pressurised aircraft', 'B. Nitrogen narcosis — typically below 30 ft of water', 'C. Insufficient oxygen reaching the brain — subtle cognitive effects begin from around 10,000 ft in unacclimatised individuals', 'D. Excess oxygen in the blood — typically above FL350'],
  correct: 2,
  explanation: 'Hypoxia is insufficient oxygen supply to the tissues, particularly the brain. In unacclimatised individuals, subtle cognitive impairment begins at around 10,000 ft, though most people do not notice symptoms until higher altitudes.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "cognitive dissonance" and how is it relevant to pilot decision-making?',
  options: ['A. B: The confusion caused by conflicting instrument readings in a partial panel situation', 'B. The mental discomfort from holding two conflicting beliefs — pilots may rationalise unsafe decisions to reduce this discomfort and justify continuing a questionable flight', 'C. The inability to reconcile visual and vestibular inputs during spatial disorientation', 'D. A neurological disorder that causes pilots to confuse left and right control inputs'],
  correct: 1,
  explanation: 'Cognitive dissonance occurs when a pilot holds conflicting cognitions ("I want to complete the flight" and "the weather is marginal"). To reduce the discomfort, the pilot may rationalise away the safety concern rather than change the plan.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "Swiss cheese model" of accident causation?',
  options: ['A. A regulatory model depicting the layered responsibilities of CASA, operators, and pilots', 'B. A model showing that accidents occur when holes in multiple defensive layers align — each layer has imperfections but the system is safe as long as the holes don\'t line up', 'C. A training model showing how expertise is built through progressive layers of skill acquisition', 'D. A model depicting that accidents are caused by a single catastrophic failure in an otherwise perfect system'],
  correct: 1,
  explanation: 'James Reason\'s Swiss cheese model shows that defence-in-depth has multiple layers, each with holes (failures). An accident occurs when the holes align, creating an unobstructed trajectory from hazard to loss. The model supports multi-layer defence strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is nitrogen narcosis and how is it relevant to aviation?',
  options: ['A. A breathing disorder caused by high-altitude hypoxia in aircraft not equipped with supplemental oxygen', 'B. A narcotic effect from dissolved nitrogen during diving — relevant to pilots who also dive because residual nitrogen can cause decompression sickness at altitude', 'C. Excess nitrogen in the blood from breathing compressed air at altitude — common in unpressurised aircraft above FL250', 'D. A toxic gas produced by jet engine combustion — relevant to crew on aircraft with engine leaks'],
  correct: 1,
  explanation: 'Nitrogen narcosis occurs in divers breathing compressed air at depth. Pilots who have recently dived must wait a sufficient period before flying (typically 12–24 hours depending on dive profile) to allow dissolved nitrogen to off-gas, preventing decompression sickness at altitude.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot crosses multiple time zones eastbound. Their body clock has not yet adjusted. What does this state describe?',
  options: ['A. Circadian dysrhythmia (jet lag), where the body clock is misaligned with the local day-night cycle', 'B. Hypoxia from reduced cabin pressure during the flight', 'C. Dehydration fatigue from in-flight fluid loss', 'D. Acute fatigue from the long-haul flight'],
  correct: 0,
  explanation: 'Circadian dysrhythmia (jet lag) occurs when the internal body clock is misaligned with the local time zone. Eastbound travel is generally harder to adapt to than westbound because it requires advancing the clock.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "automation bias" and how can it lead to unsafe outcomes?',
  options: ['A. The bias of accident investigators to attribute accidents to automation failure rather than human factors', 'B. The tendency to over-rely on automated system outputs and fail to monitor or question them — leading pilots to follow incorrect automated guidance without applying their own judgement', 'C. A tendency to prefer manual flight over automated flight — common in older pilots trained before glass cockpits', 'D. A CASA bias in favour of mandating automation on all commercial aircraft regardless of safety benefit'],
  correct: 1,
  explanation: 'Automation bias causes pilots to follow automated guidance uncritically. If the FMS gives an incorrect routing, or a flight director gives a false guidance cue, an automation-biased crew may follow it without applying independent judgement. Several accidents have been attributed to following incorrect FMS or automation outputs.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What are microsleeps and why are they particularly dangerous?',
  options: ['A. Brief involuntary sleep episodes of 1–30 seconds in which the pilot has no awareness — during a microsleep all control inputs cease and the pilot is unaware of what occurred during the episode', 'B. Short rest periods of less than 5 minutes — beneficial if taken before critical flight phases', 'C. Sleep episodes averaging 1–5 seconds that occur only in clinical narcolepsy and are not relevant to aviation', 'D. Periods of reduced alertness during the early morning hours that are easily countered by caffeine'],
  correct: 0,
  explanation: 'Microsleeps are the most dangerous sign of severe fatigue. The pilot has absolutely no awareness of these involuntary episodes — they cannot know one occurred. During even a 1-second microsleep, all conscious aircraft control ceases.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does automation complacency develop and what are its operational consequences?',
  options: ['A. When automation reliably performs tasks, the pilot stops actively monitoring the system — reducing vigilance and increasing the time to detect automation failures or errors', 'B. Automation complacency develops from over-managing automation by making unnecessary mode changes', 'C. Complacency is mandatory in operations above FL200 where human attention cannot be sustained', 'D. It develops from flying the same automated route repeatedly without variation'],
  correct: 0,
  explanation: 'Automation complacency develops because automation reliably manages tasks, reducing the felt need to monitor actively. When the automation fails or makes an error, the complacent pilot may not detect it promptly, allowing the error to develop into a serious situation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "spare cognitive capacity" and why is maintaining it important in flight?',
  options: ['A. Administrative buffer time between flight duties for pre-flight planning', 'B. Aircraft performance margin maintained by operating at reduced all-up weight', 'C. Unused fuel capacity — maintaining a reserve allows for weather diversions and holding', 'D. Unused cognitive processing capacity above the minimum needed for current tasks — allows the pilot to absorb unexpected demands without becoming saturated'],
  correct: 3,
  explanation: 'Spare cognitive capacity is the buffer between current cognitive demands and the pilot\'s maximum processing capacity. Maintaining spare capacity means that when an unexpected event occurs — a radio failure, traffic conflict, weather deviation — the pilot can absorb the additional demand without saturation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors significance of "role clarity" in multi-crew operations?',
  options: ['A. Role clarity only matters during emergencies — during normal operations roles are interchangeable', 'B. Role clarity is a regulatory requirement specifying minimum qualifications for PF and PM roles', 'C. Clear role definition reduces coordination efficiency — flexibility in role assignment produces better CRM outcomes', 'D. Clear definition of who is flying (PF) and who is monitoring (PM) prevents both pilots simultaneously manipulating controls, ensures monitoring tasks are completed, and reduces ambiguity during abnormal situations'],
  correct: 3,
  explanation: 'Role clarity in PF/PM operations prevents confusion about who is responsible for aircraft control, who is completing checklists, and who is communicating with ATC. Role ambiguity leads to tasks falling through the gap between crew members or both crew acting simultaneously on the same task.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the FOR-DEC model used for?',
  options: ['A. A fuel reserve calculation — Fuel On Reserve, Departure Estimate, Consumption', 'B. A weather briefing format — Forecast, Observation, Route, Destination, En route, Contingency', 'C. A crew resource management decision-making tool — Facts, Options, Risks/Benefits, Decision, Execution, Check', 'D. A flight authorisation checklist used by charter operators before duty commencement'],
  correct: 2,
  explanation: 'FOR-DEC is a structured decision-making model used in CRM: Facts (gather), Options (identify), Risks/Benefits (assess), Decision (select), Execution (implement), Check (evaluate outcome). It is particularly useful for non-normal situations.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "controlled flight into terrain" (CFIT) mean and what human factors contribute to it?',
  options: ['A. A mid-air collision between two aircraft both under ATC control', 'B. A stall-spin accident where the aircraft is uncontrolled at impact', 'C. A runway excursion caused by inadequate braking on a contaminated surface', 'D. An accident where an airworthy, controlled aircraft is inadvertently flown into terrain — typically caused by spatial disorientation, loss of situational awareness, visual illusions, or plan continuation bias'],
  correct: 3,
  explanation: 'CFIT occurs when a fully controllable aircraft is inadvertently flown into the ground. Human factors causes include: spatial disorientation, loss of SA (fixation, task saturation), visual illusions (especially at night or in IMC), and plan continuation bias.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does the vestibulo-ocular reflex (VOR) help pilots, and when does it create problems?',
  options: ['A. It is the reflex that controls blinking frequency — reduced blinking during instrument flying causes dry eyes', 'B. It is a navigation reflex that guides eye movement toward the runway during visual approaches', 'C. It stabilises vision during turbulence by moving the eyes to compensate for head movement — it creates problems when reading charts during steady cruise', 'D. It stabilises the visual image during head movements — it creates problems during sudden head movements in a prolonged turn, contributing to the Coriolis illusion'],
  correct: 3,
  explanation: 'The VOR stabilises the visual image on the retina during head movement by coordinating eye and head movements. During spatial disorientation, it contributes to illusory motion perception, especially with the Coriolis illusion.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the human factors concept of "psychological inertia" describe?',
  options: ['A. The physical momentum of a pilot\'s control inputs that makes reversing an action difficult', 'B. The time delay between recognising a hazard and initiating an appropriate response', 'C. The inability to change from one flight procedure to another without extensive cognitive effort', 'D. The tendency to maintain an existing course of action or belief rather than reassessing and changing in response to new information — a component of plan continuation bias'],
  correct: 3,
  explanation: 'Psychological inertia is the tendency to continue with the current plan or belief despite new contradicting information. It is related to confirmation bias and plan continuation bias — the psychological "cost" of changing course feels high even when rational analysis would favour changing.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "information overload" in aviation and how does it differ from task overload?',
  options: ['A. They are identical — both describe the same state of exceeding cognitive capacity', 'B. Information overload only occurs in glass cockpit aircraft with multiple display pages; task overload is relevant to all aircraft', 'C. Information overload is having too much incoming data to process effectively; task overload is having too many tasks to complete in the available time — both reduce performance but through different mechanisms', 'D. Information overload is physical — caused by too many instruments; task overload is cognitive — caused by complex tasks'],
  correct: 2,
  explanation: 'Information overload and task overload both degrade performance but differ in mechanism. Information overload floods the attentional bottleneck — more inputs than can be consciously processed. Task overload fills the working memory and action scheduling capacity — more tasks than can be managed in the time available.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the basis for flight crew age limitations in some regulatory frameworks?',
  options: ['A. Age limitations have no physiological basis — they exist purely for commercial reasons', 'B. Age limits apply only to cabin crew — flight crew certificates have no age-related restrictions in Australia', 'C. Physiological and cognitive changes associated with ageing — including slower information processing, reduced working memory capacity, and increased risk of cardiovascular events — justify monitoring and operational limitations in older flight crew', 'D. Younger pilots are statistically more reckless — age limits protect against immature decision-making'],
  correct: 2,
  explanation: 'Ageing affects cognitive processing speed, working memory, and reaction time, and increases the statistical risk of sudden cardiac incapacitation. These physiological changes justify more frequent medical monitoring (e.g. 6-month medicals over 40 for airline operations) rather than arbitrary exclusion.',
  reference: 'CASR Part 67'
},

{
  question: 'What does "overlearning" mean in pilot training and what is its benefit during emergencies?',
  options: ['A. Excessive practice that leads to boredom and reduced motivation — to be avoided in modern training', 'B. The tendency for experienced pilots to remember training more vividly than operational experience', 'C. Learning additional optional procedures beyond the required syllabus', 'D. Practising a procedure well beyond initial proficiency so it can be executed accurately under high stress and cognitive load without conscious attention'],
  correct: 3,
  explanation: 'Overlearning encodes procedures into long-term procedural memory at a level that resists degradation under stress. Emergency memory items that are overlearned can be executed accurately even when the pilot is highly aroused or under extreme time pressure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "change blindness" and why is it relevant to pre-flight inspections?',
  options: ['A. The inability to read moving map displays accurately at high ground speeds', 'B. A visual disability caused by rapid changes in ambient light levels during flight', 'C. The inability to detect changes in instrument readings when switching between autopilot and manual flight', 'D. The failure to notice gradual changes or changes that occur while attention is briefly interrupted — a developing fuel stain or hydraulic leak may not be noticed if the inspector\'s attention is momentarily diverted'],
  correct: 3,
  explanation: 'Change blindness is the failure to detect changes in a visual scene. Gradual changes or changes during attentional interruption are particularly prone to being missed. Pre-flight inspectors must be deliberate and systematic to overcome this tendency.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the Crew Resource Management (CRM) concept of a "shared mental model"?',
  options: ['A. A common, synchronised understanding among crew members of the current situation, planned actions, roles, and anticipated contingencies — enabling coordinated action without explicit communication of every detail', 'B. A requirement for both pilots to receive identical simulator training scenarios', 'C. Two pilots simultaneously memorising the same emergency checklist', 'D. The standardised mental model of aircraft systems shared among all type-rated pilots'],
  correct: 0,
  explanation: 'A shared mental model means all crew members have the same understanding of the situation, the plan, and each other\'s expected actions. When models diverge, coordination breaks down. Briefings and ongoing communication maintain the shared model.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the basis for "minimum rest periods" in aviation fatigue regulations?',
  options: ['A. Minimum rest is based on the time needed to travel from the crew hotel to the aircraft', 'B. Minimum rest periods apply only to the longest crew members\' previous duty — not to all crew', 'C. Minimum rest periods are physiologically based on providing adequate opportunity for sleep and biological recovery before the next duty — sleep opportunity within the rest period is the key metric', 'D. Minimum rest periods are arbitrary historical values with no physiological basis'],
  correct: 2,
  explanation: 'Minimum rest periods must provide adequate sleep opportunity (not just time away from the aircraft). Factors like sleep quality, commute time, and sleep environment affect whether the rest period actually allows full recovery. CAO 48.1 specifies minimum sleep opportunity within rest periods.',
  reference: 'CAO 48.1 Instrument 2019'
},

{
  question: 'What is hypoglycaemia and how does it affect pilot performance?',
  options: ['A. Low blood oxygen caused by high altitude — corrected by supplemental oxygen', 'B. Excess carbon dioxide in the blood causing dizziness during cruise flight', 'C. High blood sugar that causes lethargy — corrected by insulin injection', 'D. Low blood sugar that impairs cognitive function, causing poor concentration, irritability, and potentially altered consciousness'],
  correct: 3,
  explanation: 'Hypoglycaemia (low blood glucose) deprives the brain of its primary fuel, impairing cognition, concentration, and mood. Pilots should eat regular meals and avoid flying when hungry for extended periods.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situation-specific competence" and why does it matter for currency?',
  options: ['A. Physical competence in controlling the aircraft mechanically — maintained by medical certification', 'B. Proficiency in performing specific tasks in specific conditions — for example, night approaches at unfamiliar aerodromes — that degrades specifically when that combination of task and condition is not practised', 'C. The ability to operate a specific aircraft type — maintained by annual type proficiency checks', 'D. The regulatory competence level required for specific airspace classes — maintained by currency requirements'],
  correct: 1,
  explanation: 'Situation-specific competence recognises that currency is task-and-condition specific. A pilot current in day VMC approaches may not be current for night approaches at unfamiliar aerodromes — specific competence requires specific practice.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot has been flying night freight for 6 months on a rotating roster. Despite adequate sleep time, performance remains degraded. This best describes:',
  options: ['A. Complacency from repetitive route flying', 'B. Hypoglycaemia from poor diet during night operations', 'C. Acute fatigue from the previous night shift only', 'D. Chronic fatigue from cumulative sleep debt that is not fully reversed by short rest periods'],
  correct: 3,
  explanation: 'Chronic fatigue develops when sleep debt accumulates over weeks or months faster than it is recovered. Short rest periods between duties do not allow full recovery, and performance deficits persist.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "threat and error management" (TEM) in a flight operations context?',
  options: ['A. An ATC system for detecting aircraft deviations from cleared routes', 'B. A model describing how flight crews identify threats, avoid errors, and manage undesired aircraft states before they escalate to accidents', 'C. A maintenance concept for identifying and controlling corrosion threats to aircraft structure', 'D. The process of reporting threats and errors to ATSB after an incident'],
  correct: 1,
  explanation: 'TEM describes how crews manage flight safety by: identifying threats (external events requiring attention), avoiding errors (deviations from intention), and detecting and managing undesired aircraft states before they result in accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "group think" and how can it occur in a flight crew environment?',
  options: ['A. A positive team dynamic where all crew members converge on the best solution through discussion', 'B. A phenomenon where the desire for harmony overrides realistic appraisal of alternatives — crew members suppress doubts, avoid challenging the captain, and reach agreement without genuinely exploring all options', 'C. A regulatory concept requiring crew members to agree on all significant operational decisions', 'D. A training technique where student pilots practise collaborative decision-making with instructors'],
  correct: 1,
  explanation: 'Groupthink in aviation occurs when crews avoid challenging the captain\'s assessment to maintain harmony — no devil\'s advocate, no exploration of alternatives, rapid consensus. It is countered by explicitly soliciting alternative views before committing to a decision.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the minimum recommended scan frequency for maintaining situational awareness on traffic?',
  options: ['A. A complete scan should be completed every 10 minutes during cruise', 'B. Scanning frequency is only required when ATC issues a traffic advisory', 'C. Constant continuous scanning — no minimum cycle time is appropriate', 'D. One complete scan cycle outside every 30 seconds during cruise, with more frequent scanning in busy airspace'],
  correct: 3,
  explanation: 'During cruise, a complete scan should be completed approximately every 30 seconds. In busier airspace, near aerodromes, or when traffic has been reported, scanning frequency should increase. The goal is to maintain an ongoing mental picture of surrounding traffic.',
  reference: 'VFRG v8.3'
},

{
  question: 'What is the DECIDE model and how is it used in pilot decision-making?',
  options: ['A. A weather assessment tool — Depiction, Environment, Cloud, Instrument minima, Diversion, Evaluation', 'B. A fuel calculation memory aid — Distance, Endurance, Consumption, IFR reserves, Departure, Estimate', 'C. An emergency prioritisation model — Declare, Evacuate, Call, Isolate, Descend, Execute', 'D. A structured decision-making process — Detect a change, Estimate significance, Choose the safest outcome, Identify actions, Do the action, Evaluate the result'],
  correct: 3,
  explanation: 'The DECIDE model provides a systematic framework: Detect a change, Estimate its significance, Choose the safest course, Identify the action needed, Do the action, Evaluate the result. It helps pilots make structured decisions under pressure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situation assessment" and how does it relate to the three levels of situational awareness?',
  options: ['A. Situation assessment is an ATC function — pilots receive assessment outputs in the form of traffic advisories and weather reports', 'B. Situation assessment integrates all three levels of SA: perceiving the current state (Level 1), understanding its significance (Level 2), and projecting future states (Level 3) to form a complete picture for decision-making', 'C. Situation assessment is the post-flight debriefing of events — it occurs after the three levels of SA', 'D. Situation assessment is only relevant to Level 1 SA — it is the act of gathering raw instrument and sensory data'],
  correct: 1,
  explanation: 'Situation assessment requires all three levels of SA: perceiving elements (Level 1 — what are the instruments showing?), comprehending their meaning (Level 2 — what does this mean for the flight?), and projecting future states (Level 3 — where will this lead if nothing changes?). Decision-making builds on this assessment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "minimum safe altitude awareness" from a human factors perspective?',
  options: ['A. Maintaining a continuous, active mental model of the lowest safe altitude for the current location, so that any descent toward terrain or obstacles triggers an immediate alert — degraded by high workload, distraction, or poor SA', 'B. A cockpit display requirement that shows MSA continuously on the primary flight display', 'C. The automatic GPWS altitude below which all other operations cease and terrain avoidance becomes the sole priority', 'D. The regulatory requirement to fly at or above MSA at all times — no human factors element'],
  correct: 0,
  explanation: 'MSA awareness is a component of SA that requires the pilot to actively track their altitude relative to the minimum safe altitude for their position. Degraded by fixation, task saturation, or loss of positional awareness — CFIT accidents often involve degraded MSA awareness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "fixation" in an aviation human factors context?',
  options: ['A. The pilot\'s eyes fixing on a point outside for visual navigation reference', 'B. An unhealthy preoccupation with one instrument or task to the exclusion of others, causing loss of overall situational awareness', 'C. The process of landing at a specific aerodrome without fuel for an alternate', 'D. A state of mental focus that improves accuracy during precision instrument approaches'],
  correct: 1,
  explanation: 'Fixation occurs when a pilot focuses intensely on one instrument, problem, or task and loses awareness of everything else. A crew absorbed with a minor technical issue while the aircraft entered an unsafe state is a classic fixation accident pattern.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is complacency in aviation and what factors promote it?',
  options: ['A. A cognitive bias that causes pilots to overestimate hazards — corrected by increasing operational experience', 'B. A state of confidence and experience that reduces error rates — it is a desirable attribute in experienced pilots', 'C. A state of reduced vigilance and uncritical satisfaction that increases error rates — promoted by routine operations, automation, and a long history of uneventful flights', 'D. An excessive emotional response to routine tasks — promoted by high workload and novel situations'],
  correct: 2,
  explanation: 'Complacency is a false sense of security that reduces vigilance and increases error rates. It is promoted by routine (everything always goes fine), high automation (the system will catch any mistakes), and extensive experience without incident.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "fatigue countermeasure training" and what are its aims?',
  options: ['A. Education on the causes, effects, and management of fatigue — including sleep hygiene, nap strategies, circadian management, and recognising personal impairment', 'B. A type of flight simulator training that induces fatigue to test performance under degraded conditions', 'C. A regulatory course required annually for all pilots operating under CAO 48.1 FDP limits', 'D. Training in emergency procedures to be used when the pilot realises they are too fatigued to complete a flight'],
  correct: 0,
  explanation: 'Fatigue countermeasure training educates pilots and operators on: how fatigue develops and its performance effects, sleep hygiene and optimising rest periods, strategic napping, circadian rhythm management, and how to recognise and respond to personal impairment.',
  reference: 'CASA Fatigue Management'
},

{
  question: 'What does "positive transfer of training" describe and when can it be harmful?',
  options: ['A. Sharing skills between crew members during flight to maintain proficiency', 'B. The application of skills learned in one context to a new context — harmful when the new context requires a different response and the old habit interferes with learning the correct new procedure', 'C. Successful transfer of skills from training to operations — always desirable', 'D. The regulatory credit of simulator hours toward flight logbook requirements'],
  correct: 1,
  explanation: 'Positive transfer occurs when skills from one context apply correctly to another. Negative transfer occurs when the previous skill interferes with a new, different required response — for example, transitioning aircraft types where the same control has opposite effects.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "sleep inertia" and why is it relevant to planned naps in aviation?',
  options: ['A. The physical difficulty of sleeping in an aircraft seat — affects rest quality during controlled rest procedures', 'B. The tendency for the body to maintain its current sleep-wake state — relevant to shift workers transitioning between day and night duties', 'C. The period of impaired performance lasting 15–30 minutes immediately after waking from sleep — relevant to pilots who use planned naps, who must allow time for sleep inertia to clear before reassuming control', 'D. The body\'s resistance to adjusting sleep timing when transitioning between time zones'],
  correct: 2,
  explanation: 'Sleep inertia is the grogginess and cognitive impairment experienced for 15–30 minutes after waking. Pilots using controlled rest (planned nap) procedures must allow an adequate wake-up time before reassuming control. Napping too close to landing can leave a pilot impaired at the most critical phase.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot has a head cold and takes a decongestant before flight. What are the key risks?',
  options: ['A. The cold itself may cause ear and sinus barotrauma during altitude changes, and some decongestants cause drowsiness or cardiovascular effects that impair performance', 'B. No significant risks — decongestants are approved for use in flight by CASA', 'C. The only risk is rebound congestion — the decongestant itself has no cognitive effects', 'D. Decongestants are safe in flight as long as the dose is below the maximum daily recommendation'],
  correct: 0,
  explanation: 'A head cold impairs sinus and Eustachian tube equalisation during altitude changes, risking painful barotrauma. Many decongestants cause drowsiness, cardiovascular effects, or rebound congestion. Pilots should not fly with a cold significant enough to require medication.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the physiological mechanism that causes drowsiness after a large meal and why is this relevant to pilot scheduling?',
  options: ['A. Drowsiness after eating is caused by food-borne pathogens common in airline catering — relevant to crew food safety management', 'B. Post-meal drowsiness is caused by blood glucose spikes and subsequent insulin-driven drops — relevant when heavy meals are timed to coincide with high-demand flight phases', 'C. Post-meal drowsiness is a myth — food intake has no measurable effect on pilot alertness', 'D. Blood redistribution to the digestive system slightly reduces blood flow to the brain — relevant for flights scheduled within 2 hours of a large meal'],
  correct: 1,
  explanation: 'Post-meal drowsiness (postprandial somnolence) results from increased blood flow to the gut and neurochemical changes associated with digestion. A large meal shortly before a critical flight phase can increase drowsiness at the worst time. Lighter, more frequent meals are better for sustained cognitive performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot on a long cruise segment notices a strong desire to sleep. Which strategy is most appropriate?',
  options: ['A. Consume additional caffeine and increase cockpit temperature slightly to maintain arousal', 'B. Open the cockpit vents to the maximum to increase airflow and stimulate alertness', 'C. If it is a planned nap (two-crew), use a controlled rest procedure — if single pilot, divert and rest before fatigue impairs judgement', 'D. Keep conversation with ATC frequent to maintain arousal — fatigue does not impair performance at this stage'],
  correct: 2,
  explanation: 'In a two-crew operation, controlled rest (planned nap) procedures allow one pilot to rest while the other monitors. In a single-pilot operation, the appropriate response is to divert and rest — no inflight strategy reliably prevents further impairment from acute fatigue.',
  reference: 'CASA Fatigue Management / CAO 48.1'
},

{
  question: 'What is the significance of briefing contingencies before critical flight phases?',
  options: ['A. It allows the FO to take responsibility for emergency decisions, reducing the captain\'s load', 'B. Contingency briefings are only required for simulator training', 'C. Briefing contingencies satisfies the pre-flight planning obligation under CASR 91.275', 'D. Pre-briefing contingencies converts potential surprise events into anticipated scenarios, dramatically speeding recognition and response when the contingency occurs'],
  correct: 3,
  explanation: 'Briefing contingencies ("if we have an engine failure on take-off, we will...") converts a potentially surprising event into a pre-planned scenario. When the event occurs, the crew recognises it faster and transitions to the planned response sooner.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "controlled rest" (planned nap) and what safeguards must be in place to use it safely?',
  options: ['A. A mandatory break required after every 4 hours of flight under CAO 48.1 — no additional safeguards needed', 'B. A technique only available on fully automated aircraft that can maintain flight without pilot input', 'C. An unplanned fatigue response — always involves squawking 7700 and declaring an emergency', 'D. A planned in-flight rest for one crew member while the other monitors — requires minimum aircraft altitude, completed pre-descent checks, and an agreed wake-up call with a recovery time for sleep inertia before a critical phase'],
  correct: 3,
  explanation: 'Controlled rest requires: agreement before the rest period, completion of any pending tasks, minimum altitude above the terrain and obstacles, a reliable wake-up method, and adequate recovery time for sleep inertia before the crew member reassumes a role in a critical phase.',
  reference: 'CASA Fatigue Management'
},

{
  question: 'What is hyperventilation and how can a pilot differentiate it from hypoxia?',
  options: ['A. A breathing pattern caused exclusively by motion sickness, unrelated to oxygen levels', 'B. Overbreathing that increases blood oxygen to toxic levels above FL100', 'C. Overbreathing that washes out CO2, causing cerebral vasoconstriction — differentiated from hypoxia by deliberately slowing and deepening breathing; if symptoms improve, the cause was hyperventilation', 'D. Underbreathing — identical mechanism to altitude hypoxia; treated identically'],
  correct: 2,
  explanation: 'Hyperventilation reduces CO2 (hypocapnia), causing cerebral vasoconstriction that reduces oxygen delivery to the brain. Deliberately slowing and deepening breathing corrects hyperventilation but not hypoxia — this is the key differentiator.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situational aggression" in aviation decision-making?',
  options: ['A. An instrument flying technique involving abrupt control inputs to penetrate convective weather', 'B. Aggressive tactical navigation around weather cells permitted only for AOC holders', 'C. A positive assertiveness skill used when challenging a senior crew member\'s safety decision', 'D. A frustration-driven tendency to make more risk-tolerant decisions when faced with obstacles to the original plan — pressing on through deteriorating weather because diverting feels like "giving in"'],
  correct: 3,
  explanation: 'Situational aggression occurs when frustration at obstacles to the original plan generates an emotional drive to overcome them rather than rational assessment. It is a manifestation of the "macho" hazardous attitude.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is confirmation bias in pilot decision-making?',
  options: ['A. A tendency to seek, interpret, and remember information that confirms a pre-existing belief while discounting contradictory evidence', 'B. A bias toward making conservative decisions in all weather-related judgements', 'C. The practice of confirming ATC readbacks — operationally important to prevent errors', 'D. A tendency to seek additional checks and confirmations before making a decision — a sign of good airmanship'],
  correct: 0,
  explanation: 'Confirmation bias causes pilots to selectively notice information that supports what they already believe (e.g. "the weather will improve") and ignore or dismiss contradictory information. It is a major factor in CFIT and weather-related accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended technique for scanning for other aircraft?',
  options: ['A. A series of short stops of 1–3 seconds covering 10–15 degree segments, allowing the fovea to focus on each sector before moving to the next', 'B. Focusing on the area directly ahead, as most mid-air collisions occur in the 12 o\'clock position', 'C. Continuous smooth sweeping of the eyes across the horizon', 'D. Alternating glances out the window with instrument scans in a fixed 5-second cycle'],
  correct: 0,
  explanation: 'The eye cannot detect stationary objects during smooth movement — it must be stationary to focus. The recommended technique is a series of short stops (1–3 seconds) across 10–15 degree sectors so the fovea can detect any aircraft in each sector.',
  reference: 'VFRG v8.3 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of a high-quality crew debrief for long-term performance improvement?',
  options: ['A. Debriefs have no measurable effect on subsequent performance — learning occurs only through flight hours', 'B. Debriefs are only beneficial for student pilots — experienced crews do not benefit from structured discussion', 'C. Debriefs should only cover errors — discussing successes promotes complacency', 'D. High-quality, specific, blame-free debriefs analysing both what went well and what could improve are among the most effective tools for accelerating skill development'],
  correct: 3,
  explanation: 'High-quality debriefs make implicit learning explicit — analysing why something worked or didn\'t, connecting events to principles, and identifying specific improvements. Covering successes as well as failures builds on strengths and addresses weaknesses.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the time of useful consciousness (TUC) at FL250 in an unpressurised aircraft?',
  options: ['A. 30–45 seconds', 'B. 15–20 minutes', 'C. 30–60 minutes', 'D. 3–5 minutes'],
  correct: 1,
  explanation: 'At FL250, the TUC is approximately 3–5 minutes. At FL400 it reduces to 15–20 seconds. The TUC is the period after oxygen loss during which a pilot can take useful corrective action.',
  reference: 'Part 91 MOS 2020 s.26.16'
},

{
  question: 'What does "cognitive bandwidth" mean in the context of pilot performance and how is it managed?',
  options: ['A. The data processing rate of glass cockpit computers — increased bandwidth improves display update rates', 'B. The total available cognitive processing capacity — managed by distributing tasks across time, using automation appropriately, minimising non-essential information loads, and completing demanding tasks during lower-workload phases', 'C. The radio frequency bandwidth available for ATC communication in a specific airspace sector', 'D. The regulatory limit on concurrent ATC data-link and voice communications for single-pilot operations'],
  correct: 1,
  explanation: 'Cognitive bandwidth is the total available processing capacity. Management involves: completing demanding tasks during low-workload phases, using automation to offload routine processing, minimising unnecessary information inputs, and distributing tasks across time rather than allowing them to stack.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "adaptive expertise" in pilot training terms?',
  options: ['A. Expertise that goes beyond procedural proficiency to include the ability to generate novel solutions to non-standard, previously unpractised situations', 'B. The ability to adapt quickly from one aircraft type to another during a type rating transition', 'C. The capability of experienced pilots to continue flying effectively after a physical incapacitation', 'D. The adaptation of a generic training programme to the specific needs of an individual student'],
  correct: 0,
  explanation: 'Routine expertise means performing known procedures well. Adaptive expertise means applying knowledge creatively to genuinely novel situations — for example, an emergency for which no specific procedure exists. Building adaptive expertise requires exposure to varied scenarios and decision-making training beyond procedure drills.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "attentional capture" and why does it increase accident risk?',
  options: ['A. The ATC practice of capturing an aircraft\'s attention by switching its assigned frequency', 'B. The involuntary redirection of attention to a salient or unexpected stimulus — a warning light, unusual noise, or ATC call — that may draw attention away from a more critical but less salient ongoing hazard', 'C. The GPWS system that captures pilot attention before terrain impact', 'D. A positive phenomenon where experienced pilots focus efficiently on the most critical information'],
  correct: 1,
  explanation: 'Attentional capture means a highly salient stimulus (a warning light, unusual noise, or unexpected ATC call) hijacks attention from the current task. If the captured item is less critical than the ongoing task being interrupted, overall safety can decrease despite the pilot responding "correctly" to the salient stimulus.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "standard operating procedures" from a human factors perspective?',
  options: ['A. SOPs are legal documents for liability management — their safety function is secondary', 'B. SOPs reduce pilot workload by eliminating the need for individual judgement during all operations', 'C. SOPs encode best practice into predictable, repeatable procedures that reduce variability, support error detection through predictable action sequences, and free cognitive capacity for non-routine demands', 'D. SOPs exist primarily to standardise training — they are not intended to dictate actual operational behaviour'],
  correct: 2,
  explanation: 'SOPs encode experience and best practice into predictable sequences. Predictable actions are easier for a second crew member to monitor for errors. They reduce cognitive load during routine operations, freeing capacity for non-routine events.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is meant by "cognitive flexibility" in the context of expert pilot performance?',
  options: ['A. The capacity to maintain focus on one instrument while monitoring all others simultaneously', 'B. The ability to quickly memorise new emergency procedures when required', 'C. The physical flexibility required to operate controls in a confined cockpit environment', 'D. The ability to shift between different cognitive strategies as the situation demands — switching from automated habits to analytical problem-solving when a novel situation is encountered'],
  correct: 3,
  explanation: 'Cognitive flexibility allows pilots to shift between automated habitual processing (efficient for routine tasks) and deliberate analytical reasoning (necessary for novel situations). Expert pilots switch modes appropriately rather than continuing to apply the wrong processing mode.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'In the SHELL model, what does "Liveware-Liveware" (L-L) interface refer to?',
  options: ['A. The link between the flight crew and CASA regulations', 'B. The interface between the maintenance engineer and the aircraft systems they service', 'C. The interpersonal interface between crew members — communication, leadership, authority gradients, and CRM', 'D. The interface between the pilot and the aircraft\'s software (flight management systems)'],
  correct: 2,
  explanation: 'The L-L interface in the SHELL model refers to the interpersonal relationships between crew members — communication quality, authority gradients, conflict resolution, and team dynamics. Failures here include poor communication and CRM breakdowns.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors challenge of "night visual approaches" at unfamiliar aerodromes?',
  options: ['A. The challenge is primarily regulatory — CASA requires additional simulation training for night operations at unfamiliar aerodromes', 'B. The main challenge is aerodrome lighting system familiarisation — once the PAPI colours are identified, night approaches are operationally equivalent to day', 'C. Night approaches at unfamiliar aerodromes are identical to day approaches — only reduced visibility range is relevant', 'D. At night at unfamiliar aerodromes, ground references are absent, visual illusions are amplified, the black hole effect is more likely, and the pilot cannot verify their approach path against familiar ground features — significantly increasing the risk of controlled flight short'],
  correct: 3,
  explanation: 'Night approaches at unfamiliar aerodromes combine multiple human factors risks: absent ground references, potential black hole effect, unfamiliar terrain profile, and the inability to cross-check visual impression against familiar landmarks. PAPI/VASI becomes the essential glidepath reference.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "anchoring bias" in pilot weather assessment?',
  options: ['A. The tendency to fly anchor legs when holding — relevant to fuel planning only', 'B. The bias toward flying at the planned cruising altitude rather than adjusting for weather above or below', 'C. The tendency to over-rely on the first weather information received and insufficiently revise the mental weather picture as new, more current information becomes available', 'D. The tendency to base weather decisions on the departure point conditions observed visually rather than the forecast'],
  correct: 2,
  explanation: 'Anchoring bias causes pilots to anchor on early (possibly outdated) weather information and insufficiently revise their assessment when more current information conflicts with the anchor. A pre-flight briefing that showed "improving" conditions may anchor the pilot\'s assessment even when in-flight observations show otherwise.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "safety net" mean in aviation operations?',
  options: ['A. The safety reporting infrastructure that catches incidents after they occur', 'B. A last-resort protective layer that catches errors that have propagated through all other defensive layers — GPWS, TCAS, and ATC radar alerts are examples — not primary defences but backstops when other defences fail', 'C. The regulatory minimum standards below which no operation is permitted', 'D. The physical restraint nets required in cargo aircraft to prevent load shift'],
  correct: 1,
  explanation: 'Safety nets (GPWS, TCAS, ATC radar alerts) are not intended as primary defences — they are backstops that catch errors that have evaded all other defensive layers. Operating in a way that routinely depends on safety nets means all other defensive layers have already failed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human performance significance of a pilot\'s circadian phase at the time of a critical flight segment?',
  options: ['A. Circadian phase only affects flights over 8 hours — short-haul operations are unaffected', 'B. Circadian phase has no measurable effect if the pilot has had 7 hours of sleep in the preceding 24 hours', 'C. Even a fully rested pilot performs worse on cognitively demanding tasks during the circadian low than during their peak — phase affects performance independently of sleep adequacy', 'D. Circadian effects are eliminated by caffeine consumption before the critical segment'],
  correct: 2,
  explanation: 'Circadian phase affects performance independently of sleep. A pilot who slept adequately but is operating during their biological low (approximately 0200–0600) will have measurably impaired cognitive performance compared to the same pilot at their circadian peak.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "Swiss cheese model" of accident causation?',
  options: ['A. A training model that shows how expertise is built through progressive layers of skill acquisition', 'B. A model showing that accidents occur when holes (failures) in multiple defensive layers align — each layer has imperfections but the system is safe as long as the holes don\'t line up', 'C. A model depicting that accidents are caused by a single catastrophic failure in an otherwise perfect system', 'D. A regulatory model depicting the layered responsibilities of CASA, operators, and individual pilots'],
  correct: 1,
  explanation: 'James Reason\'s Swiss cheese model shows that defence-in-depth has multiple layers (training, procedures, equipment, regulations), each with holes (failures). An accident occurs when the holes align, creating an unobstructed trajectory from hazard to loss.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot takes an antihistamine for hay fever on the morning of a flight. What is the primary aviation concern?',
  options: ['A. The concern is purely the hay fever itself — the medication has no independent aviation-relevant effects', 'B. Antihistamines only affect cardiovascular function and are not relevant to cognitive performance', 'C. Antihistamines are safe for flight — they are available over the counter and approved for pilot use', 'D. Many antihistamines cause drowsiness, impaired reaction time, and reduced concentration — conditions that can make a pilot unfit to fly'],
  correct: 3,
  explanation: 'Many antihistamines (particularly first-generation H1 blockers) cause drowsiness, impaired psychomotor performance, and reduced concentration — all incompatible with safe flight. Even if hay fever symptoms are controlled, the medication may make the pilot unfit.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "automation bias" and how can it lead to unsafe outcomes?',
  options: ['A. The bias of accident investigators to attribute accidents to automation failure rather than human factors', 'B. A CASA bias in favour of mandating automation on all commercial aircraft', 'C. A tendency to prefer manual flight over automated flight — common in older pilots', 'D. The tendency to over-rely on automated system outputs and fail to monitor or question them — leading pilots to follow incorrect automated guidance without independent verification'],
  correct: 3,
  explanation: 'Automation bias causes pilots to follow automated guidance uncritically. If the FMS provides incorrect routing or a flight director gives a false cue, an automation-biased crew may follow it without applying independent judgement.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "availability heuristic" and how does it affect pilot risk assessment?',
  options: ['A. The tendency to use the first available aerodrome for diversion rather than the most suitable one', 'B. A cognitive shortcut that makes experienced pilots more accurate risk assessors than inexperienced ones', 'C. A tendency to assess risk based on how easily a similar event can be recalled from memory — overestimating risks of dramatic, memorable events and underestimating risks of statistically common but less vivid events', 'D. A bias where pilots select the most readily available weather forecast rather than the most accurate one'],
  correct: 2,
  explanation: 'The availability heuristic biases risk assessment toward risks that come easily to mind (spectacular accidents, recent events, vivid scenarios). Statistically common but less dramatic risks (fuel exhaustion, fatigue) may be systematically underestimated because they are less memorable.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors basis for using challenge-and-response checklists in preference to read-and-do checklists?',
  options: ['A. Challenge-and-response checklists are faster — they take half the time of read-and-do checklists', 'B. Challenge-and-response requires active confirmation by a second crew member, catching missed or incorrectly actioned items before moving to the next step', 'C. Challenge-and-response is a regulatory requirement under CASR Part 91 for all multi-engine operations', 'D. Read-and-do checklists do not require a second crew member — applicable in single-pilot operations'],
  correct: 1,
  explanation: 'Challenge-and-response requires the flying pilot to confirm the state of each item in response to the monitoring pilot\'s challenge. This cross-verification catches errors before they are locked in.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "error tolerance" in system design and how does it apply to aircraft?',
  options: ['A. The regulatory tolerance allowed for navigation errors in controlled airspace', 'B. A maintenance standard specifying allowable measurement tolerances for aircraft components', 'C. Design that limits the consequences of human error — through error detection, error containment, or making errors reversible — so that individual mistakes do not inevitably lead to accidents', 'D. The maximum number of errors a crew is allowed to make before an operation is classified as unsafe'],
  correct: 2,
  explanation: 'Error-tolerant systems are designed so that human errors are detected early, their consequences are contained, and they can often be reversed before causing harm. Aircraft design incorporates error tolerance through redundant systems, warnings, interlocks, and standardised cockpit layouts.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why are checklist procedures particularly important for tasks that are performed very frequently?',
  options: ['A. Highly frequent tasks become so automatised that they are prone to habitual execution without conscious verification — checklists force a deliberate check of the actual state rather than assumed state', 'B. Frequent tasks are performed most accurately without checklists — the checklist slows execution and increases error rates', 'C. Highly frequent tasks do not require checklists — they are performed correctly by habit', 'D. Checklists for frequent tasks are only required for multi-engine operations under CASR Part 91'],
  correct: 0,
  explanation: 'Highly automated, frequent tasks are performed by habit rather than conscious verification. A pilot who has lowered the gear 1,000 times may "see" the gear handle in the down position when it is actually up, because their brain fills in the expected state. Checklists force actual verification against an independent reference.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does self-confidence affect pilot decision-making and safety?',
  options: ['A. Higher self-confidence always improves decision-making by reducing hesitation and second-guessing', 'B. Appropriate self-confidence supports good decision-making, but overconfidence leads to underestimation of risk, dismissal of warnings, and reduced vigilance', 'C. Self-confidence has no measurable effect on decision-making — only technical knowledge matters', 'D. Low self-confidence is the more dangerous extreme — confident pilots make better decisions in all conditions'],
  correct: 1,
  explanation: 'Appropriate self-confidence supports decisive action. Overconfidence — believing one\'s skills and judgement exceed their actual reliability — is associated with risk underestimation, ignoring safety warnings, and resistance to checklists and procedures. It is a component of the "macho" hazardous attitude.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the SHELL model\'s Liveware-Environment (L-E) interface describe?',
  options: ['A. The connection between flight crew and the regulatory environment — CASA oversight and auditing', 'B. The interface between the aircraft\'s environmental control systems and the pilots who operate them', 'C. The interface between pilots and the natural weather environment during flight', 'D. The relationship between the pilot\'s physical and psychological needs and the physical environment in which they work — temperature, noise, lighting, vibration, and workspace design'],
  correct: 3,
  explanation: 'The L-E interface covers the physical workplace environment — temperature, noise, vibration, lighting, workspace dimensions. Cockpit noise above safe levels, extreme temperatures, and poor ergonomic design all create L-E interface failures that degrade human performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "high workload" specifically do to a pilot\'s ability to detect and respond to novel hazards?',
  options: ['A. High workload increases threat detection by increasing overall arousal and vigilance', 'B. High workload reduces available attentional resources for monitoring, making novel hazards outside the current task focus less likely to be detected — and reducing the cognitive capacity to evaluate and respond when they are detected', 'C. High workload only reduces detection of auditory hazards — visual hazard detection is maintained', 'D. High workload has no effect on hazard detection — trained pilots detect hazards equally well at all workload levels'],
  correct: 1,
  explanation: 'High workload depletes the attentional resources available for monitoring beyond the current task. Novel hazards outside the task focus are less likely to be perceived, and when perceived, there is less cognitive capacity available to evaluate and respond appropriately.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary purpose of a Safety Management System (SMS)?',
  options: ['A. A crew scheduling system ensuring flight and duty time limits are not exceeded', 'B. A government inspection system used by CASA to audit airline operations', 'C. A maintenance scheduling tool ensuring aircraft are serviced within approved intervals', 'D. A systematic, proactive approach to managing safety risks — identifying hazards, assessing risks, and implementing controls before accidents occur'],
  correct: 3,
  explanation: 'An SMS is a proactive, systematic approach to managing safety. Its four pillars are: safety policy, safety risk management, safety assurance, and safety promotion. The goal is to identify and mitigate hazards before they lead to incidents or accidents.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is Crew Resource Management (CRM) and what is its primary goal?',
  options: ['A. A maintenance procedure for managing crew seating and oxygen equipment on multi-crew aircraft', 'B. A certification course required for all CPL holders — its goal is to standardise radio communication procedures', 'C. A rostering system designed to minimise pilot fatigue through optimal crew pairing', 'D. The effective use of all available resources (people, information, equipment) to achieve safe and efficient flight operations'],
  correct: 3,
  explanation: 'CRM is the effective use of all available human and technical resources to achieve safe and efficient operations. Its primary goal is to reduce human error by optimising crew communication, decision-making, and workload management.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "change blindness" and why is it a hazard in pre-flight inspections?',
  options: ['A. The inability to read moving map displays accurately at high ground speeds', 'B. The failure to notice changes to a visual scene when attention is briefly interrupted or when the change occurs gradually — relevant to pre-flight inspection where slow leaks or damage may not be noticed', 'C. The inability to detect changes in instrument readings when switching between manual and automated flight', 'D. A visual disability caused by rapid changes in ambient light level during flight'],
  correct: 1,
  explanation: 'Change blindness is the failure to detect a change in a visual scene. It is particularly relevant when changes occur gradually or attention is briefly diverted. A slow fuel leak or developing hydraulic fluid stain may not be detected if the inspector\'s attention is interrupted during the walk-around.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is prospective memory and why is it particularly prone to failure in aviation?',
  options: ['A. A type of long-term memory that stores emergency procedures for instant recall under stress', 'B. The memory used to recall facts and figures during oral examinations', 'C. Memory for intended future actions ("I must check the fuel in 30 minutes") — prone to failure because it must compete with ongoing tasks for attention and can be forgotten when distracted', 'D. The memory used to remember recently learned procedures — most accurate in the first 30 minutes after training'],
  correct: 2,
  explanation: 'Prospective memory is the memory for intended future actions. It is particularly vulnerable to failure when the cue to perform the action is delayed, attention is diverted, or when workload increases. Aviation accidents have been caused by prospective memory failures.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the relationship between stress, fatigue, and decision-making in the aviation context?',
  options: ['A. Fatigue is the only factor that impairs decision-making — stress alone does not affect cognitive performance', 'B. Stress and fatigue independently impair decision-making — their effects add arithmetically when both are present', 'C. Decision-making is impaired only when both stress and fatigue are simultaneously present', 'D. Stress, fatigue, and decision-making interact in complex ways — stress amplifies fatigue effects, and decision-making under combined stress-fatigue is significantly worse than under either factor alone'],
  correct: 3,
  explanation: 'Stress and fatigue interact synergistically — their combined effect on decision-making is greater than their individual contributions. A fatigued pilot under time pressure and schedule stress is significantly more impaired than a fatigued pilot in a low-stress environment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "fit to fly" self-assessment obligation for a CPL holder before each flight?',
  options: ['A. Fitness to fly is determined solely by the validity of the medical certificate — no additional self-assessment is required', 'B. The pilot must complete a formal written IMSAFE checklist and retain it for 90 days', 'C. Self-assessment is only required for single-pilot operations — multi-crew aircraft have redundancy that makes individual self-assessment unnecessary', 'D. The pilot must honestly assess whether they are physically and mentally fit to exercise their privileges — if in doubt, they must not fly'],
  correct: 3,
  explanation: 'A valid medical certificate is necessary but not sufficient. The pilot must also conduct an honest pre-flight self-assessment and must not fly if any condition — illness, medication, stress, fatigue, or emotional state — may impair their performance.',
  reference: 'CASR 91.695 / Civil Aviation Act 1988'
},

{
  question: 'What does the concept of "minimum viable crew" describe in aviation fatigue management?',
  options: ['A. A crew roster configured with the minimum qualified crew to reduce costs', 'B. The minimum number of crew members legally required for a specific aircraft type', 'C. The minimum qualification level of crew required for an operation under an AOC', 'D. A state where crew fatigue is just barely sufficient for safe operation — operating at the minimum viable crew level leaves no margin for unexpected demands'],
  correct: 3,
  explanation: 'Operating at the margin of fitness for duty — just rested enough to function normally in normal operations — leaves no margin if unexpected demands arise. A demanding weather diversion at the end of a long duty day may exceed the capacity of a "just barely adequate" crew.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors significance of "non-punitive reporting systems" in aviation safety?',
  options: ['A. Non-punitive reporting only applies to maintenance events — flight crew errors require mandatory investigation', 'B. Non-punitive reporting systems reduce pilot accountability — they are a liability risk for operators', 'C. Non-punitive reporting systems (like REPCON) increase the flow of safety-critical information from frontline operators to safety managers — information that would be withheld under punitive systems, allowing proactive hazard identification and correction', 'D. Non-punitive systems provide no safety benefit — pilots report safety concerns regardless of consequences'],
  correct: 2,
  explanation: 'Non-punitive reporting creates an environment where frontline operators share safety information freely. This information — near-misses, systemic weaknesses, latent hazards — is essential for proactive safety management. It would never reach safety managers under a punitive system.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What does "defensive decision-making" mean in the context of avoiding plan continuation bias?',
  options: ['A. Deferring all non-safety decisions to the operator to avoid responsibility', 'B. Deliberately checking that the current situation still supports the original plan rather than assuming it does — actively seeking reasons why the plan might need to change rather than reasons why it can continue', 'C. Making conservative decisions that minimise exposure to all risk — always selecting the most cautious option', 'D. Making decisions that protect the pilot from personal liability rather than maximising safety'],
  correct: 1,
  explanation: 'Defensive decision-making combats plan continuation bias by actively seeking disconfirming evidence — asking "is there any reason I should change my plan?" rather than "is everything still OK?" This deliberate reversal of the default search strategy counteracts the tendency to confirm rather than challenge.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the antidote to the "anti-authority" hazardous attitude?',
  options: ['A. "Think first — what are the consequences of this action?"', 'B. "Do it properly — there is never a good reason to take shortcuts"', 'C. "Follow the rules — they are usually right for good reasons"', 'D. "It could happen to me — accidents do happen"'],
  correct: 2,
  explanation: 'The antidote to anti-authority ("don\'t tell me what to do") is "follow the rules — they are usually right." Rules and regulations exist because of painful lessons learned from past accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What physiological event occurs during a high-G manoeuvre that leads to grey-out and G-induced loss of consciousness (G-LOC)?',
  options: ['A. Negative pressure in the cockpit reduces inspired oxygen partial pressure, causing rapid hypoxia', 'B. Increased blood flow to the brain exceeds the vessels\' capacity, causing haemorrhaging', 'C. Positive G-force pushes blood away from the head toward the lower body, reducing cerebral blood pressure and eventually causing visual grey-out, then blackout, and finally unconsciousness', 'D. Rapid deceleration causes the inner ear fluid to press on the auditory nerve, causing temporary neurological disruption'],
  correct: 2,
  explanation: 'Positive G-force drains blood centrifugally away from the head. Initially this causes grey-out (loss of colour vision), then blackout (loss of vision with consciousness), and at higher G-loads, G-induced loss of consciousness (G-LOC). G-LOC is insidious — the pilot has no warning before losing consciousness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the sterile cockpit concept and what is its human factors rationale?',
  options: ['A. A cockpit with sealed windows to prevent bird strike — required for RPT operations below FL100', 'B. A requirement for cockpit voice recorders to be in operation at all times', 'C. A requirement for cockpit surfaces to be cleaned after each flight for infection control', 'D. A policy prohibiting non-essential conversation and activities during critical phases — typically below 10,000 ft — to reduce distraction during phases where error consequences are highest'],
  correct: 3,
  explanation: 'The sterile cockpit concept reduces distraction during critical flight phases when workload is high and the margin for error is smallest. Non-essential conversation, paperwork, and activities are prohibited to ensure full crew attention on the task.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "normalisation of deviance" in aviation?',
  options: ['A. A gradual process where small deviations from standards become accepted as normal, progressively eroding safety margins until a major failure occurs', 'B. A CASA regulatory process for accepting reduced safety standards during special operations', 'C. The psychological adjustment pilots make when transitioning from one aircraft type to another', 'D. The process of approving an abnormal procedure for routine use after flight testing'],
  correct: 0,
  explanation: 'Normalisation of deviance describes how organisations and individuals gradually accept deviations from standards as "normal" without incident, eroding safety margins. It was identified as a factor in the Space Shuttle Challenger disaster and has aviation parallels.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the aviation human factors literature identify as the primary lesson from the "Tenerife disaster" of 1977?',
  options: ['A. The dangers of operating in a non-native language — ICAO standardised phraseology changes followed', 'B. The inadequacy of airport infrastructure for handling diverted traffic at the time', 'C. The critical importance of CRM — specifically the dangers of an excessive authority gradient, poor communication, and failure to confirm ATC clearances before departure', 'D. The need for ground radar at all airports to prevent runway incursions in poor visibility'],
  correct: 2,
  explanation: 'The Tenerife disaster (583 fatalities) highlighted the catastrophic consequences of poor CRM: an excessively steep authority gradient that silenced valid concerns from the FO and flight engineer, ambiguous radio communications, and the captain\'s failure to confirm ATC clearance before beginning the take-off roll. It remains the deadliest aviation accident in history and a primary driver of CRM training development.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "pilot incapacitation" in a single-pilot aircraft and what should be in place to manage it?',
  options: ['A. Any condition preventing the pilot from performing their duties — single-pilot operations should have a responsible person aware of the flight plan and SARTIME as the primary safety net', 'B. Only cardiac arrest or unconsciousness qualifies as incapacitation — minor conditions are not relevant', 'C. A condition only relevant to multi-crew aircraft — single-pilot operations cannot plan for incapacitation', 'D. Any temporary condition preventing flight — managed by immediately declaring an emergency on 121.5'],
  correct: 0,
  explanation: 'In single-pilot operations, incapacitation (from any cause including subtle cognitive impairment) has no cockpit backup. A SARTIME filed with a responsible person provides the safety net — if the pilot becomes incapacitated and cannot land safely, the SARTIME triggers SAR action.',
  reference: 'CASR 91.225 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the term "out-of-the-loop" syndrome describe in automation-dependent cockpits?',
  options: ['A. A technical fault where the autopilot disconnects without the crew\'s knowledge', 'B. A state where passive monitoring of automation reduces the pilot\'s mental engagement with the flight to the point where they can no longer effectively intervene when automation fails or reaches its limits', 'C. A state of navigational uncertainty when operating beyond the range of ground-based navigation aids', 'D. A communication failure where ATC no longer has radar contact with the aircraft'],
  correct: 1,
  explanation: '"Out of the loop" describes the reduced mental model and engagement that develops when automation handles all tasks passively. When the automation fails or an unexpected event occurs, the out-of-the-loop pilot is poorly positioned to recognise the situation and respond correctly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the authority gradient and why can an excessively steep gradient be dangerous?',
  options: ['A. The hierarchy between the PIC and passengers — a steep gradient prevents passenger interference with flight operations', 'B. The difference in decision-making authority between operations and the flight crew — steep gradients protect PIC authority from commercial pressure', 'C. The gradient of vertical authority between ATC and the PIC — a steep gradient limits ATC authority to safety-critical interventions only', 'D. The perceived difference in authority between the captain and first officer — a very steep gradient discourages the FO from raising concerns, eliminating an important safety layer'],
  correct: 3,
  explanation: 'An excessively steep authority gradient means junior crew members are reluctant to challenge or correct the captain. This has been a causal factor in numerous accidents where the first officer had critical safety information but did not speak up.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the "confirmation loop" in the context of weather decision-making and how does it trap pilots?',
  options: ['A. The process where a pilot seeking reassurance that weather will be fine selectively notices improving indicators, ignores deteriorating ones, and uses each "positive" sign to confirm the decision to proceed', 'B. The regulatory requirement to obtain a second-source weather briefing for all IFR flights', 'C. A positive feedback loop where ATC weather information confirms the pilot\'s weather file', 'D. The readback loop between ATC and pilots confirming weather diversion requests'],
  correct: 0,
  explanation: 'The confirmation loop entraps pilots by causing them to seek and find evidence supporting the decision already made (proceed) while unconsciously filtering out contradicting evidence (weather is deteriorating). Each confirming sign increases commitment to a potentially unsafe decision.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "startle and surprise" training aim to achieve?',
  options: ['A. Training pilots to delay action after unexpected events to ensure a deliberate response', 'B. Reducing the startle reflex entirely through habituation training', 'C. Training pilots to anticipate and mentally pre-rehearse abnormal events so that the startle response is shortened and the path to appropriate action is faster', 'D. Teaching pilots to ignore unusual events until they can be confirmed by a second crew member'],
  correct: 2,
  explanation: 'Startle and surprise training aims to pre-expose pilots to unexpected abnormal events so that recognition is faster, the startle freeze phase is shortened, and trained recovery responses are more rapidly accessed. Pre-briefing threats also reduces startle by converting surprise into expectation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is barotrauma and when is it most likely to occur in aviation?',
  options: ['A. Noise-induced hearing loss from prolonged propeller noise — most common on piston aircraft', 'B. Oxygen toxicity in the inner ear caused by prolonged supplemental oxygen use above FL250', 'C. Pain or damage to air-filled body cavities (ears, sinuses) caused by the inability to equalise pressure during altitude changes — most common in descent', 'D. Pressure injury to the lungs during rapid emergency descent in an unpressurised aircraft'],
  correct: 2,
  explanation: 'Barotrauma occurs when air-filled cavities (middle ear, sinuses) cannot equalise pressure with the surrounding atmosphere during altitude changes. It is most common and painful during descent when pressure increases and blocked Eustachian tubes prevent equalisation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the leans illusion and what should the pilot do?',
  options: ['A. A visual illusion where the horizon appears to slope — corrected by closing eyes and trusting instruments', 'B. A vestibular illusion where the pilot feels banked when wings-level — corrected by trusting instruments despite the physical sensation', 'C. An auditory illusion produced by engine noise — no corrective action required', 'D. A proprioceptive illusion where the pilot feels acceleration during level flight — corrected by reducing power'],
  correct: 1,
  explanation: 'The leans occur when the vestibular system incorrectly signals a bank after an undetected roll. Even after levelling with instruments, the pilot still feels banked. The correct response is to trust the instruments and not act on the false sensation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "adaptive cognitive control" and how does an expert pilot demonstrate it?',
  options: ['A. The ability to adapt to different cockpit configurations through rapid type rating transitions', 'B. The ability to dynamically adjust cognitive strategies and workload allocation in response to changing situational demands — shifting between automated and deliberate processing, redistributing tasks, and adjusting information intake based on current demands', 'C. Adaptive cognitive control is a neurological term unrelated to aviation performance', 'D. The ability to switch between autopilot and manual flight modes without loss of situational awareness'],
  correct: 1,
  explanation: 'Adaptive cognitive control demonstrates expertise — the ability to recognise when the current cognitive strategy is insufficient and shift to a more appropriate one. An expert pilot recognises when a habitual response is not working and switches to deliberate analytical problem-solving.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What physiological effect does prolonged sitting in a cockpit have that pilots should be aware of?',
  options: ['A. Prolonged sitting improves performance by reducing physical fatigue from standing', 'B. Prolonged immobility promotes blood pooling in the legs, increasing DVT risk, and causes musculoskeletal discomfort that distracts from flight tasks', 'C. Prolonged sitting has no physiological effects — aviation seats are designed to eliminate posture-related hazards', 'D. Prolonged sitting only causes mild dehydration through reduced fluid intake — corrected by drinking water'],
  correct: 1,
  explanation: 'Prolonged immobility in flight promotes blood pooling in the lower extremities, increasing DVT risk — particularly on long-haul operations. Musculoskeletal discomfort also increases over time. Periodic movement and hydration reduce these risks.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'At what time of day is human performance typically at its lowest point due to circadian rhythm effects?',
  options: ['A. Between 1300 and 1500 local time (post-lunch dip)', 'B. Between 1800 and 2000 local time', 'C. Between 0200 and 0600 local time', 'D. Between 2200 and 2400 local time'],
  correct: 2,
  explanation: 'The circadian low point typically occurs between approximately 0200 and 0600, when core body temperature is at its lowest and alertness and cognitive performance are most impaired.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "minimum safe altitude awareness" mean from a human factors perspective?',
  options: ['A. A cockpit display requirement showing MSA continuously on the primary flight display', 'B. The automatic GPWS altitude below which terrain avoidance becomes the sole priority', 'C. Maintaining a continuous, active mental model of the lowest safe altitude for the current location — degraded by high workload, distraction, or poor situational awareness', 'D. The regulatory requirement to fly at or above MSA — no human factors element'],
  correct: 2,
  explanation: 'MSA awareness is a component of SA requiring the pilot to actively track their altitude relative to safe terrain clearance for their position. It degrades under fixation, task saturation, or loss of positional awareness — CFIT accidents often involve degraded MSA awareness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "workload management" and what techniques help during high-workload phases?',
  options: ['A. The practice of always flying manually to maintain currency and avoid automation dependency', 'B. Proactive distribution of tasks across time and crew — techniques include early completion of preparatory tasks, using automation, briefing expectations, and avoiding non-essential tasks during critical phases', 'C. The technique of assigning all non-flying tasks to the co-pilot and focusing exclusively on control', 'D. Workload management is a scheduling tool — pilots manage it by requesting shorter flights'],
  correct: 1,
  explanation: 'Workload management involves distributing tasks optimally to prevent saturation. Techniques include completing tasks early (ATIS, approach briefing), using automation appropriately, delegating in multi-crew, and establishing sterile cockpit periods during critical phases.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary cause of motion sickness in aviation?',
  options: ['A. Rapid changes in altitude causing pressure changes in the inner ear', 'B. Carbon monoxide exposure from engine exhaust in poorly ventilated cockpits', 'C. Dehydration combined with low cabin pressure', 'D. Conflict between visual inputs and vestibular/proprioceptive signals — the brain receives contradictory information about motion'],
  correct: 3,
  explanation: 'Motion sickness results from sensory conflict — the visual system, vestibular system, and proprioceptors send contradictory information about body motion. Looking at fixed external references and minimising head movements during turbulence helps.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "prospective memory failure" and what conditions increase its likelihood?',
  options: ['A. Forgetting recent events caused by hypoxia — prevented by maintaining cabin pressure below 10,000 ft equivalent', 'B. The inability to memorise emergency procedures — improved by repetition and overlearning during training', 'C. Forgetting to perform an intended future action — most likely when: the intention was set long before the action time, there are many competing tasks, the intended action has no strong contextual cue, or a distraction occurred between setting the intention and the action time', 'D. The failure to remember historical flight events — relevant to incident reporting accuracy'],
  correct: 2,
  explanation: 'Prospective memory failures (forgetting to do something intended) increase when: the delay between intention and action is long, many other tasks compete for attention, the contextual cue is weak (no timer, no visual reminder), or interruption breaks the connection between intention and action.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "cognitive tunnelling" describe and what typically triggers it?',
  options: ['A. The process of memorising checklist items by repetition until they become automatic', 'B. The inability to perceive aircraft attitude without external visual references', 'C. A visual restriction caused by high G-force during aerobatic manoeuvres', 'D. A narrowing of attention to a single focal concern triggered by high stress or workload — causing other relevant information to be missed'],
  correct: 3,
  explanation: 'Cognitive tunnelling is attentional narrowing under stress or high workload. The pilot focuses intensely on one element and loses awareness of other critical information. It is a primary contributor to CFIT and LOC-I accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors lesson from the "United Airlines 173" accident?',
  options: ['A. The crew became so absorbed with a landing gear indicator problem that they failed to monitor fuel state, running out of fuel on approach — the origin of crew coordination and CRM training in aviation', 'B. The need for improved ATC communication standards for gear-up landing warnings', 'C. The dangers of operating without GPWS equipment on commercial aircraft', 'D. The importance of regular maintenance on landing gear systems'],
  correct: 0,
  explanation: 'United 173 (Portland, 1978) crashed because the crew\'s fixation on a landing gear indicator light caused them to lose track of fuel state. All crew members knew of the problem but crew coordination was absent. This accident, along with others, directly motivated the development of CRM training in aviation.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is distraction in aviation safety terms and how can it lead to accidents?',
  options: ['A. A deliberate technique for managing workload by alternating focus between tasks rapidly', 'B. Radio calls from ATC — managed by having the FO handle all communications in multi-crew operations', 'C. Any conversation in the cockpit — prevented by enforcing sterile cockpit procedures at all times', 'D. Any interruption to a task that causes the pilot to lose their place in a procedure or miss critical information — can cause missed steps in checklists and loss of situational awareness'],
  correct: 3,
  explanation: 'Distraction interrupts a task being performed, causing loss of place in procedures or missed critical cues. Aviation accidents have resulted from distraction during checklists (missed items), approach briefings (missed information), and critical phases of flight.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary difference between "error management" and "error elimination" as safety strategies?',
  options: ['A. Error management is used in maintenance; error elimination is used in flight operations — both aim for zero errors', 'B. Error elimination attempts to prevent all errors from occurring; error management accepts that errors will occur and focuses on detecting them early and limiting their consequences — a more realistic and effective strategy for complex human systems', 'C. Both strategies are equivalent — the choice between them depends only on the specific operation being managed', 'D. Error elimination is the preferred CASA strategy; error management is an industry shortcut that compromises safety standards'],
  correct: 1,
  explanation: 'Error elimination aims to prevent errors but is only partially achievable in complex human systems. Error management accepts that errors will occur (a realistic position) and builds systems that: detect errors early, contain their consequences, and provide recovery opportunities. Most modern aviation safety systems use error management.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the difference between a "slip" and a "lapse" in human error taxonomy?',
  options: ['A. A slip is a physical execution error in an intended action — touching the wrong control; a lapse is a memory failure — forgetting a step in a procedure', 'B. Slips and lapses are identical — both describe the same type of unintentional error', 'C. Slips are minor errors; lapses are severe errors requiring a mandatory safety report', 'D. Slips are ground errors; lapses occur in flight — both are caused by the same mechanism'],
  correct: 0,
  explanation: 'In error taxonomy: a slip is executing an intended action incorrectly (pressing the wrong button); a lapse is forgetting a step or an intended action entirely (forgetting to extend flaps). Both are unintentional errors — unlike violations which are intentional.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "inattentional blindness" and how is it relevant to visual scanning?',
  options: ['A. A scanning technique where the pilot focuses on instruments rather than outside visual cues', 'B. The failure to perceive an unexpected stimulus even when looking directly at it, caused by intense focus on another task', 'C. The inability to see objects against a low-contrast background, such as white aircraft against cloud', 'D. Temporary blindness caused by sudden exposure to bright light after extended low-light adaptation'],
  correct: 1,
  explanation: 'Inattentional blindness occurs when the brain fails to process an unexpected stimulus because attention is focused elsewhere. A pilot concentrating intensely on a navigation problem may fail to perceive a conflicting aircraft, even though it is clearly visible.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "expectation error" in ATC communications and how can it lead to a runway incursion?',
  options: ['A. The pilot or controller hears what they expect to hear rather than what was said — a pilot expecting Runway 28 may hear "Runway 28" even if the controller said "Runway 18", leading to runway incursion', 'B. A systematic error caused by expectation of a specific runway due to wind that may not match the clearance', 'C. An error where the pilot expects a clearance they have requested and proceeds before receiving it', 'D. An error where ATC expects the pilot to read back a clearance but the pilot does not'],
  correct: 0,
  explanation: 'Expectation error occurs when prior expectation shapes auditory perception — the brain fills in what it expects to hear. Read-backs are the primary defence — an incorrect read-back that the controller catches and corrects prevents the expectation error from becoming a runway incursion.',
  reference: 'AIP ENR 6.1 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "cognitive offloading" in aviation and how do tools like checklists and written plans support it?',
  options: ['A. Delegating cognitive tasks to the co-pilot to reduce captain workload', 'B. Reducing mental workload by relying exclusively on experience rather than written procedures', 'C. Using automation to remove all cognitive demands from the pilot during cruise flight', 'D. Using external tools (checklists, charts, written plans, memory aids) to store and retrieve information that would otherwise overload working memory — freeing cognitive capacity for monitoring and decision-making'],
  correct: 3,
  explanation: 'Cognitive offloading uses external tools to reduce demands on limited working memory. Checklists offload the need to remember procedure sequences. Charts offload navigation calculations. Written plans offload decision criteria. This frees working memory for current task demands.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How many hours of sleep per night does most adult research suggest is needed to maintain optimal cognitive performance?',
  options: ['A. 6–7 hours', 'B. 9–11 hours', 'C. 7–9 hours', 'D. 5–6 hours'],
  correct: 2,
  explanation: 'Research consistently shows that most adults require 7–9 hours of sleep per 24-hour period to maintain optimal cognitive performance, reaction time, and decision-making ability.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot has been on call for 18 hours without sleep after a disrupted night. They feel wide awake and competent. What does human performance research indicate about this situation?',
  options: ['A. The pilot\'s on-call status, rather than the hours awake, is the primary determinant of fatigue — standby duty is less fatiguing than active duty', 'B. Performance is only mildly impaired — significant impairment only occurs after 24+ hours without sleep', 'C. If the pilot feels wide awake, their performance is not significantly impaired — subjective awareness is a reliable performance indicator', 'D. Performance is significantly impaired to a degree equivalent to moderate alcohol intoxication, even though the pilot subjectively feels competent — fatigue impairs the ability to accurately perceive fatigue'],
  correct: 3,
  explanation: 'After 17–18 hours of wakefulness, cognitive performance is equivalent to a BAC of approximately 0.05%. After 24 hours, it approaches 0.10%. Critically, the subjective sense of competence does not track the objective impairment — fatigued people consistently underestimate their impairment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot recognises they are fatigued before a flight. Which action best reflects sound fatigue risk management?',
  options: ['A. Consume caffeine and continue — stimulants reliably restore cognitive performance to normal levels', 'B. Reduce flight time by flying direct and at higher speed to minimise exposure', 'C. Proceed with the flight but delegate as many tasks as possible to the co-pilot', 'D. Declare themselves unfit and not commence the flight until adequately rested'],
  correct: 3,
  explanation: 'The only effective countermeasure for fatigue is sleep. A pilot who recognises they are fatigued should not commence the flight. Caffeine and other stimulants provide temporary alertness but do not restore cognitive performance.',
  reference: 'CASR 91.695 / CASA Fatigue Management'
},

{
  question: 'How does high ambient cockpit noise affect pilot performance?',
  options: ['A. Noise only affects performance during the first 30 minutes — pilots adapt fully after this', 'B. Noise has no effect on performance below 90 dB — current aircraft are all below this threshold', 'C. High noise impairs communication intelligibility, masks aural warnings, increases cognitive load, and contributes to cumulative hearing damage and fatigue', 'D. Noise improves alertness through arousal — cockpit noise is deliberately maintained above office levels'],
  correct: 2,
  explanation: 'Cockpit noise impairs voice communication intelligibility, can mask aural warnings, increases cognitive load, and contributes to fatigue. Long-term exposure causes hearing damage, particularly relevant for piston aircraft and helicopter pilots.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the relationship between experience and risk perception in pilots?',
  options: ['A. Very experienced pilots often underestimate risks because familiarity reduces perceived danger — the same flight that seems risky to a novice may seem routine to an expert', 'B. More experience always leads to more accurate risk perception', 'C. Experience and risk perception are unrelated — individual personality determines risk tolerance', 'D. Less experienced pilots consistently underestimate risk compared to more experienced pilots'],
  correct: 0,
  explanation: 'Experienced pilots may underestimate risk through familiarity. A situation that has never caused a problem (e.g. a particular weather condition, route, or manoeuvre) may be dismissed as safe because of a prior history without incident — even though the underlying risk remains.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "PACE" model used for in CRM communication?',
  options: ['A. A performance assessment model — Proficiency, Accuracy, Competence, Efficiency', 'B. A structured escalation model for asserting a safety concern — Probe, Alert, Challenge, Emergency', 'C. A weather assessment model — Precipitation, Atmosphere, Ceiling, Elevation', 'D. A checklist for ATIS information — Pressure, Altimeter, Cloud, Expectation'],
  correct: 1,
  explanation: 'The PACE model provides a structured escalation path: Probe (gather information), Alert (raise concern), Challenge (strongly assert concern), Emergency (take control if life is at risk). It gives junior crew a framework for escalating concerns without bypassing hierarchy prematurely.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the scanning technique recommended for detecting other aircraft?',
  options: ['A. A series of short stops of 1–3 seconds covering 10–15 degree segments — the eye must be stationary to focus, and moving eyes cannot detect stationary objects', 'B. Focusing on the area directly ahead as most mid-air collisions occur at 12 o\'clock', 'C. Alternating glances out the window with instrument scans in a fixed 5-second cycle', 'D. Continuous smooth sweeping of the eyes across the horizon'],
  correct: 0,
  explanation: 'The eye cannot detect stationary objects (like an aircraft on a converging course) while it is moving. Short fixations of 1–3 seconds across 10–15 degree sectors allow the fovea to focus on each sector before moving to the next.',
  reference: 'VFRG v8.3 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the difference between "task-oriented" and "relationship-oriented" leadership styles in a cockpit context?',
  options: ['A. Task-oriented leaders use command-and-control; relationship-oriented leaders use participative crew management', 'B. Task-oriented leaders focus on flight duties; relationship-oriented leaders focus on passenger service', 'C. Task-oriented leaders prioritise efficient task completion; relationship-oriented leaders prioritise crew communication and cohesion — effective captains flex between both depending on the phase and urgency of flight', 'D. There is no meaningful difference — both styles produce equivalent CRM outcomes'],
  correct: 2,
  explanation: 'Effective aviation leadership requires flexibility. During a normal cruise, relationship-oriented (participative, inclusive) leadership builds crew cohesion and communication. During a time-critical emergency, task-oriented (directive, decisive) leadership may be appropriate. Rigid use of either style exclusively degrades outcomes.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the concept of "safety margins" in aviation operations and why should they be preserved?',
  options: ['A. Safety margins are the fuel reserves above the regulatory minimum — preserving them means always carrying extra fuel', 'B. Safety margins only apply to aircraft performance — human performance margins are not separately managed', 'C. The buffer between current operating conditions and the boundary of safe operation — preserving safety margins means not depleting fuel reserves, maintaining weather buffers, and operating within personal limits rather than flying to the regulatory edge', 'D. Safety margins are purely regulatory — the regulations define exactly what margin is required'],
  correct: 2,
  explanation: 'Safety margins in all dimensions — fuel, weather minimums, fatigue, airspace — should be preserved rather than used to the limit. Regulatory minimums define the floor, not the target. Eroding multiple small margins simultaneously can leave a pilot or aircraft in an unrecoverable position.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary cause of motion sickness in aviation?',
  options: ['A. Rapid changes in altitude causing pressure changes in the inner ear', 'B. Carbon monoxide exposure from engine exhaust in poorly ventilated cockpits', 'C. Dehydration combined with low cabin pressure', 'D. Conflict between visual inputs and vestibular/proprioceptive signals — the brain receives contradictory information about motion'],
  correct: 3,
  explanation: 'Motion sickness results from sensory conflict — the visual system, vestibular system, and proprioceptors send contradictory information about body motion to the brain. Looking at fixed external references (the horizon) and minimising head movements helps.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended technique for maintaining manual flying skills in a highly automated cockpit?',
  options: ['A. Complete a manual instrument approach at least once per calendar month to maintain currency', 'B. Periodically fly manually — particularly on approaches in conditions that allow it — to prevent degradation of manual skills needed when automation fails in demanding conditions', 'C. Disconnect automation during all phases of flight except take-off and landing', 'D. Use hand-flying exclusively during simulator training and automation exclusively in the aircraft'],
  correct: 1,
  explanation: 'Manual flying skills degrade through disuse (skill fade). Pilots should periodically hand-fly the aircraft to maintain the skill needed if automation fails in demanding conditions. Regular manual approaches are particularly valuable.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "threat management" in the TEM framework mean operationally?',
  options: ['A. The management of security threats to the aircraft such as unlawful interference', 'B. The allocation of workload to manage multiple simultaneous threats in the cockpit', 'C. Proactively identifying events or conditions that could negatively impact flight safety, then taking action to eliminate or reduce them before they lead to errors or undesired aircraft states', 'D. The process of reporting threats to ATSB after an incident has occurred'],
  correct: 2,
  explanation: 'Threat management involves anticipating threats (weather, traffic, non-standard ATC routing, aircraft technical issues) before the flight, monitoring for developing threats in flight, and taking proactive action to reduce their impact before they create errors.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the most important characteristic of an effective post-incident debrief?',
  options: ['A. It is blame-free and specific — focusing on what happened and why (systems thinking), not who failed, and identifying concrete improvements without shame or punishment', 'B. It must be conducted by a CRM-certified instructor regardless of incident severity', 'C. It must be completed within 24 hours to maintain memory accuracy', 'D. It must result in disciplinary action for the crew member who made the error'],
  correct: 0,
  explanation: 'An effective debrief is blame-free (encouraging honest reflection), specific (focusing on concrete events and decisions rather than generalised criticism), and forward-looking (identifying specific improvements). Blame and shame shut down honest reflection and reduce learning.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the relationship between "situational awareness" and "good decision-making"?',
  options: ['A. High SA is the result of good decisions — making correct choices creates SA', 'B. They are independent — a pilot can make good decisions even with poor SA', 'C. SA is the input to decision-making — accurate, complete SA enables good decisions; degraded SA inevitably degrades decision quality even when decision processes are sound', 'D. Good decision-making is the cause of high situational awareness — decisions create SA'],
  correct: 2,
  explanation: 'SA is the precondition for good decision-making. A pilot who makes accurate, timely decisions based on incorrect SA (e.g. believing weather is improving when it is deteriorating) will make poor decisions despite a sound decision process. SA quality determines decision quality.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of the "Heinrich triangle" in aviation safety management?',
  options: ['A. A model showing that accident severity increases proportionally with aircraft weight', 'B. A regulatory model where minor violations receive warnings while major violations receive licence suspension', 'C. A training model showing the relative frequency of skill versus knowledge errors', 'D. A statistical model suggesting that for each major accident there are many serious incidents and thousands of unsafe acts — addressing near-misses and unsafe acts prevents major accidents'],
  correct: 3,
  explanation: 'The accident pyramid supports incident reporting programmes — reducing the base (unsafe acts and near-misses) reduces the apex (fatal accidents). Safety improvements at the base of the pyramid prevent accidents at the top.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the Coriolis illusion and when does it typically occur?',
  options: ['A. An illusion during straight-and-level flight where the pilot feels they are in a turn', 'B. An illusion caused by bright sunlight reflecting off clouds directly ahead', 'C. A false altitude perception caused by looking down at ground features through a window', 'D. A tumbling or rolling sensation produced when the head is moved during a prolonged turn, stimulating multiple semicircular canals simultaneously'],
  correct: 3,
  explanation: 'The Coriolis illusion occurs when the head is moved in a different plane during a sustained turn. This simultaneously stimulates semicircular canals that were not previously stimulated, producing a powerful tumbling sensation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the risk matrix used for in aviation safety?',
  options: ['A. A legal document required by CASA to authorise operations in specific risk environments', 'B. A performance assessment tool for crew members following abnormal events', 'C. A matrix for calculating the risk of runway exceedance based on crosswind components', 'D. A tool for evaluating identified hazards by combining likelihood of occurrence with severity of consequence to prioritise risk controls'],
  correct: 3,
  explanation: 'A risk matrix evaluates hazards by combining the likelihood that a harmful event will occur with the severity of its consequences. The resulting risk level determines priority for implementing controls and whether the risk is acceptable.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is "transfer of control" in multi-crew operations and why must it be explicit?',
  options: ['A. The legal transfer of flight responsibility at the beginning and end of each duty period', 'B. The ATC transfer of radar coverage from one sector to another during en-route cruise', 'C. The automatic transfer of autopilot authority from FO\'s FCP to captain\'s FCP during approach', 'D. The explicit verbal and physical exchange of aircraft control between pilots — must be unambiguous to prevent both pilots simultaneously manipulating controls or neither believing themselves to be in control'],
  correct: 3,
  explanation: 'Explicit transfer of control ("You have control" — "I have control" — "You have control") prevents confusion about who is flying. Implicit or assumed transfers have caused accidents where both pilots believed the other was flying.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the effect of excessive stress on a pilot\'s cognitive processing?',
  options: ['A. Stress has no effect on cognitive processing below the threshold of clinical anxiety disorder', 'B. The pilot switches to a slow, analytical decision-making mode that improves accuracy under pressure', 'C. Excessive stress improves decision-making by forcing focus on the single most important task', 'D. Attention narrows (cognitive tunnelling), recently learned procedures degrade, and the pilot reverts to older, more ingrained habits — explaining why drilled emergency procedures outperform improvised ones'],
  correct: 3,
  explanation: 'Excessive stress narrows attention, degrades access to recently learned procedures, and causes regression to older habits. This is why emergency procedures are drilled to the point of overlearning — stress degrades higher-order cognitive processes needed to improvise.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors implication of operating in a "foreign" aircraft (unfamiliar type)?',
  options: ['A. Operating an unfamiliar type is only relevant in emergency situations — normal operations are equally safe regardless of type familiarity', 'B. Unfamiliarity improves vigilance by ensuring the pilot does not rely on habit — it is safer to fly an unfamiliar type than a very familiar one', 'C. Unfamiliarity increases all forms of workload, reduces pattern recognition efficiency, promotes negative transfer errors, and may cause the pilot to rely on inappropriate procedures from their previous aircraft type', 'D. Pilots adapt immediately to unfamiliar types — type-specific training is only required to satisfy regulatory requirements'],
  correct: 2,
  explanation: 'Operating in an unfamiliar aircraft type increases cognitive workload, reduces the benefit of automated procedural memory, introduces negative transfer risks, and reduces situation awareness. This is why type conversion training and familiarisation requirements exist.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors basis for requiring "first officer qualification" flying hours before acting as PIC?',
  options: ['A. Hour requirements exist purely to protect the pilot employment market — no safety justification', 'B. Hour requirements ensure commercial viability by controlling the supply of qualified pilots', 'C. Hour requirements satisfy ICAO minimum standards only — Australia has no independent safety basis for them', 'D. Flight hours build the pattern recognition, decision-making experience, and situational awareness needed to manage novel situations as PIC — hours cannot be entirely replaced by simulator training because real operations expose pilots to environmental variability that simulators cannot fully replicate'],
  correct: 3,
  explanation: 'Flight experience builds the pattern library, situational awareness, and adaptive capacity that underpin safe PIC operations. While simulator training can develop specific skills efficiently, real-world operations expose pilots to environmental variability, psychological pressures, and novel situations that simulators cannot fully replicate.',
  reference: 'CASR Part 61'
},

{
  question: 'What is "flight discipline" and how does it differ from "rule compliance"?',
  options: ['A. Flight discipline and rule compliance are identical — both describe adherence to regulations', 'B. Flight discipline applies to military pilots — rule compliance applies to civil aviation', 'C. Flight discipline is enforced externally through CASA surveillance — rule compliance is self-enforced', 'D. Flight discipline is an internal commitment to safe practices that exceeds mere rule compliance — a disciplined pilot follows procedures and maintains standards even when no one is watching and even when it would be easy and consequence-free to skip steps'],
  correct: 3,
  explanation: 'Flight discipline is a professional commitment to safety that is internal, not externally enforced. A disciplined pilot does not skip pre-flight checks when tired, does not press weather because "no one will know," and does not use personal limits as starting points for negotiation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the SHELL model\'s Liveware-Software (L-S) interface describe?',
  options: ['A. The physical computer systems in the cockpit that process flight management data', 'B. The interface between the pilot and the aircraft\'s fly-by-wire control laws', 'C. The connection between pilots and the airline\'s computerised performance calculation software', 'D. The interface between the pilot and the procedures, rules, checklists, and regulations governing operations — confusing procedures or ambiguous rules create L-S interface failures'],
  correct: 3,
  explanation: 'The L-S interface covers the human operator\'s relationship with non-physical aspects of the system — procedures, regulations, checklists, training programmes. Ambiguous procedures, inconsistent documentation, or procedures that violate expectations create L-S interface vulnerabilities.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "mode confusion" in glass cockpit aircraft?',
  options: ['A. A state where the pilot is unaware of or mistaken about which autopilot or flight management mode is currently active, leading to unexpected aircraft behaviour', 'B. Confusion between day and night mode settings on the primary flight display', 'C. A misreading of the altimeter when switching between QNH and standard pressure settings', 'D. Confusion about which radio mode (VHF/HF) is appropriate for a given frequency'],
  correct: 0,
  explanation: 'Mode confusion occurs in complex aircraft when the pilot is unsure which automation mode is active. The aircraft may respond to inputs in unexpected ways if the crew has an incorrect mental model of the active mode.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What are otolith organs and what false sensation can they produce in aviation?',
  options: ['A. Stretch receptors in neck muscles that detect head position and feed into the vestibulo-ocular reflex', 'B. Organs in the utricle and saccule that detect linear acceleration and gravity — they can confuse forward acceleration with nose-up pitch', 'C. Pressure-sensitive cells in the sinuses that detect atmospheric pressure changes during altitude change', 'D. Organs in the cochlea that detect sound frequency — they can falsely perceive altitude changes as accelerations'],
  correct: 1,
  explanation: 'Otolith organs (utricle and saccule) detect linear accelerations including gravity. Forward acceleration during take-off is interpreted by otoliths as nose-up pitch (somatogravic illusion), potentially causing the pilot to push forward on controls.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "expectation error" in ATC communications and how can it cause accidents?',
  options: ['A. An error where the pilot or controller hears what they expect to hear rather than what was actually said, causing them to act on an incorrect version of the message', 'B. A systematic error caused by expectation of a specific runway due to wind conditions, which may not match the ATC clearance', 'C. An error where ATC expects the pilot to read back a clearance but the pilot does not', 'D. An error where the pilot expects a clearance they have requested but proceeds before it is received'],
  correct: 0,
  explanation: 'Expectation error occurs when prior expectation shapes auditory perception — the brain fills in or substitutes what it expects to hear. A pilot expecting Runway 28 may hear "Runway 28" even if the controller said "Runway 18." Read-backs are the primary defence against expectation errors.',
  reference: 'AIP ENR 6.1 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the effect of interruptions during a safety-critical task such as aircraft refuelling?',
  options: ['A. Interruptions improve performance by providing mental rest breaks during long refuelling operations', 'B. Trained personnel are immune to interruption effects — only untrained ground handlers are at risk', 'C. Interruptions disrupt prospective memory and working memory, increasing the probability of omitting safety steps — refuelling accidents (wrong fuel, cap left off) frequently involve prior interruption', 'D. Interruptions during refuelling only matter if they exceed 5 minutes in duration'],
  correct: 2,
  explanation: 'Interruptions during safety-critical tasks disrupt working memory and prospective memory, leading to errors of omission (forgetting steps). Many aviation ground accidents (wrong fuel type, fuel cap left open) have involved an interruption that caused the person to resume the task from an incorrect point.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "meta-cognition" in pilot performance and why is it important for self-assessment?',
  options: ['A. A CASA assessment tool for evaluating pilot cognitive performance during flight examinations', 'B. The ability to process more information simultaneously than trained pilots — associated with exceptional natural ability', 'C. Awareness of one\'s own cognitive processes, limitations, and current state — including the ability to recognise when one is fatigued, stressed, or operating beyond one\'s competence', 'D. A medical condition affecting cognitive performance — screened during Class 1 medical examinations'],
  correct: 2,
  explanation: 'Meta-cognition is thinking about one\'s own thinking — awareness of cognitive processes, current limitations, and state. Good meta-cognition allows pilots to recognise degraded performance, acknowledge uncertainty, and seek help or change behaviour appropriately.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors lesson from the "Air Florida 90" accident and why is it still taught?',
  options: ['A. The dangers of in-flight icing accumulation on turbofan aircraft during cruise at FL200', 'B. A junior crew member recognised the aircraft was not properly de-iced but failed to effectively challenge the captain — demonstrating the consequences of excessive authority gradient and the importance of CRM assertiveness', 'C. The need for runway friction measurement before every winter take-off', 'D. The importance of anti-icing fluid compatibility with specific aircraft wing designs'],
  correct: 1,
  explanation: 'Air Florida 90 (Washington DC, 1982) crashed after take-off with ice-contaminated wings. The first officer made three indirect attempts to communicate the problem but did not clearly challenge the captain. The accident drove development of CRM assertiveness training and the recognition that subtle hints are insufficient safety communication.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the "human factors triad" of person, task, and environment and how do they interact?',
  options: ['A. The three components of a pilot medical — physical, cognitive, and psychological assessment', 'B. The three interactive factors in human performance — the person (knowledge, skills, attitude, state), the task (demands, complexity, workload), and the environment (physical, social, organisational) — performance is affected by the match between all three', 'C. The three regulatory bodies — CASA, ATSB, and Airservices — and their jurisdictions', 'D. The three members required for two-crew operations — captain, first officer, and flight dispatcher'],
  correct: 1,
  explanation: 'Human performance emerges from the interaction of the person (capabilities, limitations, current state), the task (demands, complexity), and the environment (physical conditions, organisational pressures, team dynamics). Poor match between any of these increases error risk.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "going around" on an unstabilised approach represent from a human factors perspective?',
  options: ['A. A failure of airmanship — a well-trained pilot should always be able to salvage and complete an approach', 'B. A regulatory requirement triggered automatically by GPWS alerts on all commercial operations', 'C. A sound, disciplined safety decision — executing a go-around from an unstabilised approach demonstrates adherence to personal limits and resistance to plan continuation bias', 'D. An action only taken when visual contact with the runway is lost — not applicable to CAVOK approaches'],
  correct: 2,
  explanation: 'Executing a go-around from an unstabilised approach is a key safety decision. Accidents consistently show that continuing an unstabilised approach is a major accident cause. A go-around represents the pilot placing safety above schedule pressure and pride — a positive human factors outcome.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "error recovery" mean in the context of human factors and why is it as important as error prevention?',
  options: ['A. Detecting, diagnosing, and correcting an error before it produces an undesirable consequence — as important as prevention because no system fully prevents all errors; recovery is the last human defence before an accident', 'B. Error recovery only applies to maintenance errors — flight crew errors require error prevention only', 'C. The recovery of aircraft control after a technical error causes flight control malfunction', 'D. Error recovery is less important than error prevention — preventing errors eliminates the need for recovery'],
  correct: 0,
  explanation: 'Error recovery is the final human defence in the accident causation chain. Even with effective prevention, some errors will occur. Detecting and correcting errors before they propagate to serious consequences is what separates incidents from accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "hearback error" mean and how does it allow a flawed ATC clearance to stand?',
  options: ['A. A transmission error caused by simultaneous transmissions blocking each other', 'B. An error where ATC fails to detect an incorrect pilot readback — combined with the readback error, the flawed clearance is acted upon without correction', 'C. An error where the pilot fails to hear an ATC call due to cockpit noise', 'D. An error where the pilot reads back an incorrect clearance — ATC must always correct this'],
  correct: 1,
  explanation: 'A readback error occurs when the pilot reads back incorrectly. A hearback error occurs when ATC fails to detect the error — both are required for the flawed clearance to stand uncorrected. Regular monitoring of readbacks by controllers is the primary defence.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What is barotrauma and when is it most likely to occur in flight?',
  options: ['A. Oxygen toxicity in the inner ear from prolonged supplemental oxygen use above FL250', 'B. Pressure injury to the lungs during rapid emergency descent in an unpressurised aircraft', 'C. Noise-induced hearing loss from prolonged propeller noise — most common on piston aircraft', 'D. Pain or damage to air-filled body cavities (ears, sinuses) caused by inability to equalise pressure — most common during descent when pressure increases and blocked Eustachian tubes prevent equalisation'],
  correct: 3,
  explanation: 'Barotrauma occurs when air-filled body cavities cannot equalise pressure with the surrounding atmosphere. It is most common during descent when atmospheric pressure increases — blocked Eustachian tubes prevent middle ear equalisation, causing pain and potentially rupture.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why are trained emergency procedures executed from memory rather than reading a checklist for time-critical emergencies?',
  options: ['A. CASA regulations prohibit checklist use during actual emergencies — memory items are mandatory', 'B. Time-critical emergencies (engine fire on take-off, GPWS warning) require an immediate instinctive response because the time available is shorter than the time to read and execute a checklist — these memory items are then followed by the confirmation checklist', 'C. Memory items are only applicable to single-pilot operations — multi-crew aircraft always use checklists', 'D. Reading a checklist during an emergency creates significant distraction that outweighs any benefit'],
  correct: 1,
  explanation: 'Some emergencies (e.g. rejected take-off, engine fire) require immediate action in less time than it takes to locate and read a checklist. Memory items (immediate actions) are drilled to automaticity so they can be executed rapidly. The confirmation checklist follows once immediate actions are complete.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors argument for "sterile cockpit" procedures during taxi?',
  options: ['A. Taxi is not a critical phase of flight — sterile cockpit only applies below 10,000 ft in the air', 'B. Taxi operations require complex spatial navigation in a busy, dynamic environment — distraction or fixation during taxi increases the risk of runway incursion, ground collision, and getting lost on the aerodrome', 'C. CASA regulations require sterile cockpit procedures during all ground operations at Class C and D aerodromes', 'D. Sterile cockpit during taxi reduces wear on ATC frequencies — non-essential communications should be deferred'],
  correct: 1,
  explanation: 'Runway incursions during taxi frequently involve distraction, loss of positional awareness, or fixation on cockpit tasks. Sterile cockpit procedures during taxi (no non-essential conversation or tasks) ensure the crew\'s attention is on complex aerodrome navigation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the effect of mild hypoxia on colour vision?',
  options: ['A. Mild hypoxia eliminates colour vision entirely — the pilot sees only in greyscale', 'B. Mild hypoxia enhances colour sensitivity as the pupil dilates to admit more light', 'C. Mild hypoxia reduces colour discrimination, particularly for red — potentially reducing detection of red warning lights before other symptoms become apparent', 'D. Mild hypoxia has no effect on colour vision — only visual acuity is affected'],
  correct: 2,
  explanation: 'Cone photoreceptors responsible for colour vision are among the first cells affected by hypoxia. Red is the first colour affected, potentially reducing detection of red warning lights, fire indicators, and navigation lights before other symptoms are noticed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "spare capacity" and why is maintaining it important?',
  options: ['A. Unused fuel capacity — maintaining a reserve allows for weather diversions and holding', 'B. Unused cognitive capacity — maintaining a mental buffer above the minimum needed to handle current demands allows the pilot to absorb unexpected additional tasks without becoming saturated', 'C. Aircraft performance margin above the minimum required — maintained by operating at reduced all-up weight', 'D. Regulatory administrative capacity — spare capacity refers to the availability of CASA staff for licence processing'],
  correct: 1,
  explanation: 'Spare cognitive capacity is the buffer between current cognitive demands and the pilot\'s maximum processing capacity. Maintaining spare capacity means that when an unexpected event occurs — a radio failure, a traffic conflict, a weather deviation — the pilot can absorb the additional demand without becoming saturated.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "flight crew human factors training" aim to produce in pilots that technical training alone cannot?',
  options: ['A. Superior instrument reading accuracy through perceptual training programs', 'B. Memorisation of all emergency procedures by supplementing written checklists', 'C. Faster reaction times and improved manual dexterity through cognitive training exercises', 'D. Self-awareness of cognitive limitations and biases, and practical strategies for managing them — including recognising fatigue, stress, and bias in real-time and applying CRM techniques to maintain safe operations despite these limitations'],
  correct: 3,
  explanation: 'Human factors training aims to develop metacognitive awareness — pilots who know their cognitive limitations and biases, can recognise when they are operating under conditions that increase error risk, and have practical strategies for managing those risks. This self-awareness and management capacity cannot be developed through technical training alone.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors concern with glass cockpit aircraft and automation?',
  options: ['A. Automation makes aircraft significantly heavier, reducing range and performance margins', 'B. Automation increases pilot workload by requiring additional mode management inputs in every phase', 'C. Automation removes the PIC\'s legal authority by replacing human decisions with computer logic', 'D. Automation can degrade manual flying skills, create mode confusion, promote complacency, and produce automation surprise when systems behave unexpectedly'],
  correct: 3,
  explanation: 'While automation improves efficiency and reduces routine workload, it introduces new human factors risks: skill fade through disuse, mode confusion, automation complacency, and automation surprise. Managing these requires active strategies including regular manual flight.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors rationale for two-crew operations in complex or high-capacity aircraft?',
  options: ['A. Two crew provides cognitive redundancy for shared SA, error detection, and cross-checking — significantly reducing the probability that undetected errors propagate to accidents', 'B. Regulatory tradition — two-crew requirements predate human factors research and are maintained historically', 'C. A second crew member reduces the PIC\'s legal liability by sharing responsibility for decisions', 'D. Two crew is required purely to comply with insurance obligations'],
  correct: 0,
  explanation: 'Two-crew operations provide multiple safety benefits: two independent monitors, cross-checking that catches individual errors, shared workload, and a redundant decision-maker. Research shows single-pilot operations have higher accident rates per hour for equivalent tasks.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the effect of monotonous tasks on pilot error rates compared to complex tasks?',
  options: ['A. Monotonous tasks only cause errors when combined with fatigue — without fatigue, habituation reduces error rates', 'B. Error rates are determined by task complexity only — task familiarity has no independent effect', 'C. Monotonous tasks can have high error rates due to reduced vigilance, inattention, and habitual execution — errors of omission are more common in monotonous routines than in novel challenging situations', 'D. Monotonous tasks always have lower error rates because they require less cognitive capacity'],
  correct: 2,
  explanation: 'Monotonous, familiar tasks are performed with less conscious attention, reducing the probability of detecting errors in execution. They are prone to habitual action errors (performing the action differently from intended) and omissions (step forgotten because the habit template was executed in a shortcut form).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is spatial disorientation and what is the recommended response?',
  options: ['A. A conflict between vestibular/proprioceptive sensations and what the instruments show — corrected by trusting instruments and not responding to the false bodily sensation', 'B. A navigational error caused by flying without external visual references — corrected by descent below cloud', 'C. The inability to read maps accurately in reduced visibility — corrected by briefing the route before entry into IMC', 'D. Confusion between left and right rudder inputs — corrected by checking the turn coordinator'],
  correct: 0,
  explanation: 'Spatial disorientation is a conflict between sensory inputs and actual aircraft attitude. The pilot\'s bodily senses give incorrect information. The only safe response is to trust the instruments and maintain the attitude they show, regardless of physical sensation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "automation surprise" and how does it manifest in flight operations?',
  options: ['A. The surprise a crew feels when an automatic feature like TCAS activates for the first time in a real situation', 'B. A situation where the aircraft does something unexpected because the crew did not understand the current automation mode — leading to confusion and potential loss of control', 'C. A positive experience where automation detects a hazard faster than the crew could manually', 'D. A training scenario designed to expose pilots to unexpected automation behaviours in a simulator'],
  correct: 1,
  explanation: 'Automation surprise occurs when the aircraft behaves unexpectedly because the crew misunderstood the active automation mode. It can cause startle and confusion, and has been a factor in several accidents involving highly automated aircraft.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "psychological safety" mean in a crew environment and why is it essential for effective CRM?',
  options: ['A. The absence of psychological conditions such as anxiety that could impair flight performance', 'B. The mental health screening requirement for all new commercial pilots', 'C. The crew environment where counselling is available after critical incidents', 'D. A crew climate where members feel safe to speak up, raise concerns, report errors, and ask questions without fear of ridicule or punishment — without it, crew members withhold safety-critical information'],
  correct: 3,
  explanation: 'Psychological safety is the belief that one can speak up without negative consequences. Without it, crew members withhold concerns, avoid reporting errors, and defer to authority even when they have contradictory safety-critical information — undermining the entire purpose of multi-crew operations.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'Why should a pilot use eccentric viewing when trying to see dim objects at night?',
  options: ['A. Because the fovea is dominated by colour-sensitive cones, which function poorly in low light — looking slightly off-centre places the image on the rod-rich peripheral retina', 'B. Because cockpit windscreen distortion is least in the off-centre viewing area', 'C. Because the optic nerve creates a blind spot in the peripheral retina that interferes with central viewing', 'D. Because the fovea (central retina) contains the most rod photoreceptors and provides the best night vision'],
  correct: 0,
  explanation: 'The fovea (central retina) is dominated by cone photoreceptors that function well in bright light but poorly in low light. The peripheral retina has a higher density of rods (night vision receptors). Looking 10–15 degrees off-centre places the object on the rod-rich peripheral retina.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "target fixation" mean in a visual manoeuvring context?',
  options: ['A. An instrument scanning technique where specific gauges are checked in a fixed sequence', 'B. A navigation technique where the pilot tracks a visual waypoint throughout the approach', 'C. The unconscious tendency to steer toward a focused visual target, such as a hazard on the runway — the pilot may inadvertently fly into the object they are trying to avoid', 'D. The practice of visually fixing on the touchdown zone markers to ensure accurate round-out timing'],
  correct: 2,
  explanation: 'Target fixation occurs when intense visual focus on an object causes the pilot to unconsciously steer toward it. It has caused aircraft to strike obstacles a pilot was actively trying to avoid. Looking away from a hazard and focusing on the desired escape path is the correct response.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does a pilot\'s personal minimum differ from a regulatory minimum?',
  options: ['A. Regulatory minimums must always be more conservative — personal minimums are legally invalid', 'B. Personal minimums are self-imposed limits stricter than regulatory minimums, accounting for individual currency, recency, aircraft capability, and personal experience — they provide a buffer above the regulatory floor', 'C. Personal minimums are identical to regulatory minimums for pilots with more than 500 hours total time', 'D. Personal minimums apply only to VFR operations — IFR operations are governed entirely by published minima'],
  correct: 1,
  explanation: 'Personal minimums are stricter self-imposed limits that account for individual currency, recent experience, aircraft familiarity, and personal risk tolerance. A pilot who has not flown at night for 6 months should set their personal night minimums more conservatively than the regulatory floor.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "signal detection theory" to cockpit monitoring?',
  options: ['A. The theory underlying transponder signal strength calculations for radar contact range', 'B. A communications theory governing the detection range of VHF radio transmissions', 'C. A regulatory framework for specifying the minimum detectability of cockpit aural warnings', 'D. The trade-off between detecting real hazards (hits) and false alarms — very sensitive monitoring catches more real signals but generates more false alarms, both of which have costs to pilot performance'],
  correct: 3,
  explanation: 'Signal detection theory explains that monitoring involves a trade-off: high sensitivity catches more real signals but generates more false alarms (which cause distraction and desensitisation). Too many false alarms cause alarm fatigue — pilots stop responding to warnings. Design must balance sensitivity against specificity.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "response time" and how does it vary with fatigue, stress, and hypoxia?',
  options: ['A. Response time decreases with moderate fatigue through the stimulatory effect of adrenaline', 'B. Only hypoxia affects response time — fatigue and stress have not been demonstrated to increase response latency', 'C. Response time is fixed by individual biology — environmental factors have negligible effects', 'D. Response time increases with fatigue, excessive stress, and hypoxia — all slow cognitive processing and motor initiation, reducing available time for effective action'],
  correct: 3,
  explanation: 'Reaction time degrades significantly with fatigue, hypoxia, and excessive arousal. In time-critical situations — sudden GPWS warning, traffic alert, engine failure — increased response time reduces the window available for effective action.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended technique for maintaining manual flying skills in a highly automated cockpit?',
  options: ['A. Complete a manual instrument approach at least once per calendar month to maintain currency', 'B. Disconnect automation during all phases of flight except take-off and landing', 'C. Use hand-flying exclusively during simulator training and automation exclusively in the aircraft', 'D. Periodically fly manually — particularly on approaches and during segments where workload permits — to prevent degradation of manual skills'],
  correct: 3,
  explanation: 'Manual flying skills degrade through disuse (skill fade). Pilots should periodically hand-fly the aircraft — particularly on approaches in good conditions — to maintain the manual skill needed if automation fails in demanding conditions.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does the expectation of a routine flight affect pilot vigilance?',
  options: ['A. Routine expectations improve performance by reducing the cognitive load of having to consider all possible deviations', 'B. Expecting routine operations reduces vigilance — the pilot allocates less attention to monitoring because they anticipate nothing will deviate from normal, making them less likely to detect early signs of developing problems', 'C. Flight routine expectations are set by the operator and do not independently affect pilot vigilance', 'D. Expecting routine operations increases vigilance through prepared awareness of all potential deviations'],
  correct: 1,
  explanation: 'When a pilot expects a routine flight, they typically reduce monitoring effort — "there\'s nothing to watch for." This reduces the probability of detecting early signs of deviation from normal. A counter-strategy is to brief expected threats even on routine flights.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary purpose of the "FOR-DEC" model in CRM?',
  options: ['A. A performance assessment — Finesse, Output, Reliability, Discipline, Expertise, Competency', 'B. A structured CRM decision-making tool — Facts, Options, Risks and Benefits, Decision, Execution, Check', 'C. A weather briefing format — Forecast, Observation, Route, Destination, En route, Contingency', 'D. A fuel reserve calculation — Fuel On Reserve, Departure time, Estimated consumption, Contingency'],
  correct: 1,
  explanation: 'FOR-DEC is a structured decision model: gather the Facts, identify Options, assess Risks & Benefits of each option, make a Decision, Execute, and Check outcomes. It provides structure for complex non-normal situations where analysis time is available.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the "Swiss cheese" model\'s implication for accident prevention?',
  options: ['A. Making each defensive layer more robust (thicker cheese with fewer holes) and increasing the number of layers reduces the probability of hole alignment — no single layer can be made perfect, but the system can be made very safe', 'B. Accidents are inevitable because it is impossible to prevent all holes from aligning — human factors can only reduce but never eliminate accident risk', 'C. Accidents can only be prevented by eliminating all potential human errors — zero-tolerance for any deviation', 'D. The most effective intervention is to discipline the last person who allowed a hole to appear — this deters future breaches'],
  correct: 0,
  explanation: 'The Swiss cheese model shows that safety improvement comes from: making individual defences more robust (reducing hole size and frequency), adding additional defensive layers, and ensuring holes are promptly identified and repaired. No single perfect defence exists — defence in depth is the strategy.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is anxiety in an aviation context and how can it affect decision-making?',
  options: ['A. Anxiety is an apprehension about future events that increases arousal and can interfere with concentration and rational decision-making if excessive', 'B. Anxiety is identical to stress and the terms are interchangeable in human factors literature', 'C. Anxiety is a diagnostic term only applicable to pilots with anxiety disorders — healthy pilots do not experience it', 'D. Anxiety always improves vigilance and is therefore beneficial during night flight'],
  correct: 0,
  explanation: 'Anxiety is an apprehensive state focused on anticipated future events. It increases arousal which can be beneficial in small amounts, but excessive anxiety narrows attention, disrupts working memory, and impairs rational decision-making.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of "mental simulation" in pre-flight planning?',
  options: ['A. A technique used only by student pilots learning new procedures', 'B. The use of computerised flight planning software to simulate weather effects on the route', 'C. Using a simulator to practise the planned flight before executing it operationally', 'D. Mentally "flying" the planned route or approach before the flight — identifying potential hazards, workload peaks, and contingency decision points to improve preparedness'],
  correct: 3,
  explanation: 'Mental simulation (mental rehearsal) of the planned flight allows the pilot to identify potential threats, high-workload segments, and decision points before they occur — converting potential surprises into anticipated events.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "door-knob" effect in checklist execution?',
  options: ['A. A physical technique for preventing inadvertent actuation of cockpit controls', 'B. The last item on a checklist being most likely to be omitted because attention fades at the end of a sequence', 'C. The tendency for pilots to always recheck the same item repeatedly while skipping others', 'D. A checklist interruption effect where a pilot, upon returning to a checklist after distraction, believes they have completed an item that resembles a recently completed item, due to similarity between items'],
  correct: 3,
  explanation: 'When returning to an interrupted checklist, pilots are prone to confusing similar-looking items and believing they have completed a step they have not. Restarting from the beginning of a section after interruption mitigates this risk.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended action when a pilot notices another crew member making an error?',
  options: ['A. Remain silent to preserve the authority gradient — the captain\'s decisions should not be challenged by junior crew', 'B. Immediately take control of the aircraft without warning to prevent the error from being executed', 'C. Log the error for later discussion after the flight — challenging someone during the flight creates distraction', 'D. Assert the concern clearly using a structured communication technique, ensuring the information reaches the decision-maker — then escalate if the concern is not addressed'],
  correct: 3,
  explanation: 'CRM training teaches assertiveness — using structured techniques (e.g. "I notice... I\'m concerned about... I recommend...") to communicate concerns firmly. If the concern is not addressed, escalate: repeat, be more direct, and as a last resort take control if safety demands it.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "professional discipline" as a human factors concept and why is it particularly important in single-pilot operations?',
  options: ['A. The hierarchical structure between senior and junior pilots — relevant to multi-crew operations', 'B. The self-regulatory capacity to follow procedures and maintain standards even when external supervision is absent — especially critical in single-pilot operations where no second crew member provides a safety check', 'C. A regulatory enforcement mechanism applied by CASA through licence suspension', 'D. Professional discipline only applies to commercial operations — recreational pilots are exempt'],
  correct: 1,
  explanation: 'Professional discipline is the internal commitment to maintaining standards without external supervision. In single-pilot operations, the pilot\'s own standards are often the primary safety layer — there is no co-pilot, often no ATC, and no supervisor observing.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is cognitive dissonance and how is it relevant to pilot decision-making?',
  options: ['A. The inability to reconcile visual and vestibular inputs during spatial disorientation', 'B. The mental discomfort experienced when holding two conflicting beliefs — pilots may rationalise unsafe decisions to reduce this discomfort and justify continuing a questionable flight', 'C. The confusion caused by conflicting instrument readings in a partial panel situation', 'D. A neurological disorder that causes pilots to confuse left and right control inputs'],
  correct: 1,
  explanation: 'Cognitive dissonance occurs when a pilot holds conflicting cognitions (e.g. "I want to complete the flight" and "the weather is marginal"). To reduce discomfort, the pilot may rationalise away the safety concern ("the forecast said improving") rather than change the plan.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "normalisation of deviance" and how does it erode safety over time?',
  options: ['A. A gradual process where small deviations from standards become accepted as normal without incident, progressively eroding safety margins until a major failure occurs', 'B. The process of approving an abnormal procedure for routine use after flight testing', 'C. A CASA regulatory process for accepting reduced standards during special operations', 'D. The psychological adjustment pilots make when transitioning to a new aircraft type'],
  correct: 0,
  explanation: 'Normalisation of deviance describes how small, repeated deviations that never cause immediate harm become accepted as the new normal — eroding safety margins incrementally until the margin disappears and a serious accident occurs.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "plan continuation trap" and how can a crew recognise they are in it?',
  options: ['A. A state where increasing commitment to the original plan makes it psychologically costly to change course — recognised by: dismissing weather concerns, rationalising fuel state, ignoring alternate indicators, or feeling that changing plan would be "giving up"', 'B. Being committed to a flight plan that cannot be changed due to ATC clearance constraints', 'C. Being unable to plan an alternate route due to airspace restrictions', 'D. Being physically unable to return to the departure aerodrome due to fuel exhaustion'],
  correct: 0,
  explanation: 'The plan continuation trap is recognised by the internal experience of rationalising away safety concerns to justify continuing. The feeling that one "should" continue despite mounting evidence to change is a key warning sign that plan continuation bias is active.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "get-home-itis" and how does it differ from "get-there-itis"?',
  options: ['A. Get-home-itis is a more severe condition requiring counselling; get-there-itis is a normal operational phenomenon', 'B. They are identical — both terms describe the same plan continuation bias', 'C. Get-there-itis drives pilots toward a destination; get-home-itis drives pilots back toward home base — both involve allowing the desire to reach a goal to override safety-based decision-making', 'D. Get-home-itis applies to night operations; get-there-itis applies to day operations'],
  correct: 2,
  explanation: 'Both are variants of goal-directed pressure overriding safety decisions. Get-there-itis pushes toward a destination; get-home-itis pushes toward home base. Both can cause pilots to press on despite deteriorating weather, fuel constraints, or fatigue.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is assertiveness in a CRM context and when is it particularly important?',
  options: ['A. The willingness to express concerns, share information, and challenge incorrect actions — particularly important when a crew member sees a safety issue but hesitates due to hierarchy', 'B. The confidence to make decisions unilaterally without consulting other crew members', 'C. The ability to maintain a firm control input against aerodynamic forces during upset recovery', 'D. The ability to communicate loudly and clearly in noisy cockpit environments'],
  correct: 0,
  explanation: 'CRM assertiveness is the willingness to state safety concerns clearly and firmly, regardless of crew hierarchy. It is critical when a junior crew member has information that could prevent an accident but fears challenging the captain.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the "sunk cost fallacy" in aviation decision-making?',
  options: ['A. The irrational tendency to continue a failing course of action because of resources already invested, even when the rational decision would be to stop', 'B. A navigational error where the pilot continues on a wrong route because of how far they have already flown', 'C. A maintenance decision error where repairs continue on an uneconomical aircraft because of prior investment', 'D. Continuing below minimums because of fuel already burned diverting from the original destination'],
  correct: 0,
  explanation: 'The sunk cost fallacy causes pilots to continue a flight they should abandon because of time, money, or effort already spent. Past costs are irrelevant — only future costs and benefits should inform the current decision.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the safety value of voluntary incident reporting programs such as REPCON in Australia?',
  options: ['A. Voluntary reporting programs are useful only for maintenance organisations — flight crew events are captured by mandatory ATSB reporting', 'B. REPCON reports are shared with CASA for enforcement — anonymity is conditional on severity', 'C. REPCON is a legal obligation — voluntary reporting has no independent value beyond compliance', 'D. Voluntary, confidential reporting allows safety information about near-misses and latent hazards to reach safety managers — information that would never be reported under a punitive system'],
  correct: 3,
  explanation: 'Voluntary confidential reporting programs like REPCON capture safety information about near-misses, system weaknesses, and latent hazards. This information is used to identify systemic risks before they cause accidents — information that would be withheld if reporters feared punitive consequences.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What role does a "just culture" play in safety data quality?',
  options: ['A. Just culture has no effect on safety data quality — the quantity of reports is independent of the reporting environment', 'B. Just culture is relevant only to maintenance reporting — flight crew operations are covered by separate ATSB mandatory reporting obligations', 'C. A just culture significantly improves safety data quality by encouraging honest, complete reporting — fear of blame causes under-reporting, sanitised reports, and omission of safety-critical details', 'D. Just culture reduces safety data quality by accepting errors that would otherwise be disciplined out of the system'],
  correct: 2,
  explanation: 'Just culture increases reporting rates and report completeness. When reporters fear punishment, they under-report, omit incriminating details, or frame incidents to minimise perceived culpability. A just culture produces richer safety data that better reflects the actual system risk level.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the antidote to the "invulnerability" hazardous attitude?',
  options: ['A. "Follow the rules — they are usually right"', 'B. "Think first — not so fast"', 'C. "I\'m not helpless — I can make a difference"', 'D. "It could happen to me — accidents do happen"'],
  correct: 3,
  explanation: 'The antidote to invulnerability ("it won\'t happen to me") is "it could happen to me." This attitude is common in experienced pilots who have never had an incident and assume safety is guaranteed by their experience.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary purpose of a Crew Resource Management (CRM) briefing before a flight?',
  options: ['A. To divide the fuel and navigation calculations equally between crew members', 'B. To establish shared expectations, define roles, agree on decision criteria, and identify potential threats — creating a shared mental model before the flight', 'C. To satisfy regulatory requirements for crew coordination documentation', 'D. To allow the captain to assign specific tasks to the first officer for the entire flight duration'],
  correct: 1,
  explanation: 'The pre-flight CRM briefing establishes a shared mental model of what is expected, who does what, what the key threats are, and what decision criteria will be used. This shared model improves coordination and reduces the chance of surprise.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the aviation human factors concern with performing familiar tasks in an unfamiliar aircraft type?',
  options: ['A. Unfamiliarity only matters in emergencies — normal operations are equally safe regardless of type familiarity', 'B. Unfamiliarity improves vigilance by ensuring the pilot does not rely on habit', 'C. Unfamiliarity increases all forms of workload, reduces pattern recognition efficiency, and promotes negative transfer errors — higher error rates are expected during early type transition operations', 'D. Pilots adapt immediately to unfamiliar types — type-specific training satisfies regulatory requirements only'],
  correct: 2,
  explanation: 'Operating in an unfamiliar aircraft type increases cognitive workload, reduces automated procedural memory benefits, introduces negative transfer risks from the previous type, and reduces situational awareness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "workload variability" in aviation mean and why must pilots manage it proactively?',
  options: ['A. The difference in workload between easy and difficult aircraft types', 'B. The varying difficulty of different phases of a single flight as prescribed by CASR', 'C. The fluctuation in cognitive demand across different flight phases — proactive management (completing tasks in low-workload phases) prevents task stacking and saturation in critical high-workload phases', 'D. The variation in duty hours between crew members on a single flight'],
  correct: 2,
  explanation: 'Workload varies significantly across flight phases — low during cruise, high during approach and landing. Proactive management means completing tasks (ATIS, approach briefing, fuel checks) during low-workload phases so that high-workload phases are not further loaded.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "perceptual set" mean and how does it affect hazard recognition?',
  options: ['A. The set of instruments required for IFR flight — a minimum perceptual standard', 'B. A pre-existing expectation that shapes what a pilot perceives — a pilot with a strong perceptual set for "normal operations" may fail to perceive or correctly interpret hazard cues that are inconsistent with the expected scenario', 'C. The perceptual training completed during ab initio flying training', 'D. The perceptual limitations of the human visual system when scanning for traffic'],
  correct: 1,
  explanation: 'Perceptual set shapes what we attend to and how we interpret ambiguous information. A pilot expecting a routine flight may fail to perceive early hazard indicators as warnings — the incoming information is interpreted through the lens of the expected normal scenario.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "broken windows" theory as applied to aviation safety culture?',
  options: ['A. A theory stating that windscreen bird strikes are leading indicators of safety management failure', 'B. A legal principle where pre-existing safety deficiencies reduce operator liability in subsequent accidents', 'C. A maintenance concept where cosmetic aircraft damage indicates inadequate ground handling standards', 'D. Small violations and tolerated deviations create an environment where larger violations become normalised — signalling that safety standards are negotiable and setting the stage for more serious failures'],
  correct: 3,
  explanation: 'Applied to aviation, the broken windows theory suggests that tolerating minor deviations creates a cultural signal that standards are optional. This erosion progressively normalises more significant violations.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "transition altitude" in pilot human factors and workload management?',
  options: ['A. The transition altitude marks the boundary between CASA and ICAO jurisdiction — relevant only to international operations', 'B. At the transition altitude, pilot workload temporarily increases due to the altimeter setting change and associated cockpit coordination — this is a defined workload peak to be managed proactively', 'C. The transition altitude is only relevant to IFR flights — VFR operations have no transition altitude obligation', 'D. The transition altitude marks the end of visual flight — all pilots must be on instruments above it'],
  correct: 1,
  explanation: 'The transition altitude (climb) and transition level (descent) represent defined workload points where altimeter sub-scale changes are required, often combined with ATC communications and checklist items. Awareness of this workload peak allows proactive management.',
  reference: 'AIP ENR 4.1'
},

{
  question: 'What is the significance of the "dirty data" concept in flight deck automation?',
  options: ['A. Weather radar data that has been degraded by precipitation attenuation — pilots should increase radar tilt to overcome this effect', 'B. Physical contamination of avionics by cockpit dust and humidity — managed through maintenance cleaning cycles', 'C. Incorrect, corrupted, or anomalous data inputs that automation systems may process without alerting the crew, leading to subtle but significant navigation or guidance errors that go undetected if the crew relies on automation output without independent cross-checking', 'D. Corrupted data in ATIS broadcasts — relevant to instrument approach planning'],
  correct: 2,
  explanation: '"Dirty data" entering an FMS or automation system — through incorrect pilot entries, database errors, or sensor faults — may produce plausible-looking but incorrect outputs. Automation bias means crews may follow incorrect guidance without questioning it. Independent cross-checking against raw data is the defence.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "sleep inertia" and why is it relevant to planned naps in aviation?',
  options: ['A. The tendency for the body to maintain its current sleep-wake state — relevant to shift workers', 'B. The body\'s resistance to adjusting sleep timing when crossing time zones', 'C. The period of impaired performance lasting 15–30 minutes immediately after waking — pilots using planned naps must allow adequate wake-up time before reassuming control', 'D. The physical difficulty of sleeping in an aircraft seat — affects rest quality during controlled rest'],
  correct: 2,
  explanation: 'Sleep inertia is the grogginess and cognitive impairment experienced for 15–30 minutes after waking. Pilots using controlled rest procedures must allow an adequate recovery period before reassuming control — napping too close to landing leaves the pilot impaired at the most critical phase.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of "post-incident analysis" in individual pilot development?',
  options: ['A. Reflecting on near-misses, errors, and non-standard events allows the pilot to identify personal vulnerability patterns, knowledge gaps, and decision-making failures — accelerating learning and improving future performance', 'B. Analysis is the responsibility of ATSB — individual pilots should not conduct their own analysis', 'C. Post-incident analysis is only required for accidents involving injury or significant damage', 'D. Post-incident analysis is only relevant at the organisational level — individual pilots do not need to analyse their own incidents'],
  correct: 0,
  explanation: 'Post-incident self-analysis is among the most powerful individual learning tools. Examining what happened, why it happened, and what could be done differently identifies personal vulnerability patterns and closes knowledge or skill gaps before they contribute to an accident.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors significance of "crew pairing" policies in commercial operations?',
  options: ['A. Crew pairing has no safety relevance — any two type-rated pilots perform equally when paired', 'B. Crew pairing is primarily an industrial relations tool — its safety benefit is incidental', 'C. Crew pairing matters only for ultra-long-haul operations where rest management is complex', 'D. Pairing two pilots with complementary strengths, similar communication styles, and adequate combined experience promotes effective CRM and reduces the risk of authority gradient problems or experience gaps at critical moments'],
  correct: 3,
  explanation: 'Crew pairing affects CRM effectiveness, authority gradient dynamics, and the combined experience available at critical moments. Pairing two very inexperienced pilots, or a highly authoritative captain with a very junior FO, creates specific CRM risks that thoughtful pairing can mitigate.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the primary advantage of using a challenge-and-response checklist over a read-and-do checklist?',
  options: ['A. Challenge-and-response requires active confirmation by a second crew member, catching items that have been missed or incorrectly actioned before moving to the next item', 'B. Read-and-do checklists are superior because they don\'t require a second crew member — applicable in single-pilot operations', 'C. Challenge-and-response checklists do not require both crew members to know the normal configuration of each item', 'D. Challenge-and-response checklists are faster to complete — they take half the time of read-and-do checklists'],
  correct: 0,
  explanation: 'Challenge-and-response checklists require the flying pilot to verify the state of each item in response to the monitoring pilot\'s challenge. This cross-verification catches errors before they are locked in and adds a second check against omissions.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "premature closure" in pilot decision-making?',
  options: ['A. Settling on the first plausible explanation for a situation and stopping the diagnostic process without fully verifying it or considering alternatives', 'B. Landing before reaching the destination because of weather — a sound safety decision', 'C. Closing the aircraft door before all passengers are seated', 'D. Closing the flight plan before the aircraft has landed at the destination'],
  correct: 0,
  explanation: 'Premature closure occurs when a pilot settles on the first plausible explanation and stops investigating. For example, attributing an anomalous instrument reading to a known vibration source rather than verifying — missing a developing failure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "emotional regulation" mean for pilots in high-pressure situations?',
  options: ['A. The pharmacological suppression of emotional responses through prescribed medication', 'B. The ability to manage emotional arousal to maintain optimal performance — preventing emotional states from disrupting attention, decision-making, or crew communication when they would degrade performance', 'C. The CAO 48.1 requirement to self-assess emotional fitness before commencing duty', 'D. The regulatory framework governing when a pilot must report emotional distress to their operator'],
  correct: 1,
  explanation: 'Emotional regulation is the capacity to manage emotional arousal so it does not disrupt performance. Techniques include controlled breathing, cognitive reframing, and structured communication patterns that maintain effective crew interaction even when the pilot is emotionally aroused.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does trust between crew members affect CRM effectiveness?',
  options: ['A. Appropriate trust supports effective CRM — too little trust creates friction, but excessive trust reduces vigilance and reduces the willingness to challenge questionable actions', 'B. High trust always improves CRM by eliminating unnecessary cross-checking between crew members', 'C. Trust is irrelevant to CRM — professional pilots maintain objective standards regardless of personal relationships', 'D. Trust only matters in long-haul operations — short-sector operations do not require established crew trust'],
  correct: 0,
  explanation: 'Trust is foundational to CRM — crews who trust each other communicate more openly and coordinate more effectively. However, excessive trust can reduce critical monitoring ("he\'ll catch it") and reduce assertiveness ("he knows what he\'s doing"). Calibrated trust supports both cooperation and vigilance.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What effect does high ambient noise in a cockpit have on crew performance?',
  options: ['A. Noise only affects performance during the first 30 minutes of exposure — pilots adapt fully after this period', 'B. Noise has no effect on performance below 90 dB — current aircraft are all below this threshold', 'C. Noise improves alertness through arousal — aircraft cockpit noise levels are deliberately maintained above ambient office levels', 'D. High noise impairs communication, masks aural warnings, increases fatigue, and reduces cognitive processing capacity'],
  correct: 3,
  explanation: 'Cockpit noise impairs voice communication intelligibility, can mask aural warnings, increases cognitive load, and contributes to fatigue. Long-term exposure also causes hearing damage, particularly relevant for pilots of piston aircraft.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the IMSAFE checklist and how is it used?',
  options: ['A. An emergency procedure checklist — Isolate, Mayday, Squawk, Aviate, Fly, Escape', 'B. An ATC handoff checklist — Identify, Monitor, Squawk, Altitude, Frequency, Emergency', 'C. A personal fitness self-assessment before flight — Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion — each item prompts honest self-evaluation of a condition that could impair performance', 'D. A weight and balance reminder — Index, Mass, Stability, Arm, Fuel, Equipment'],
  correct: 2,
  explanation: 'IMSAFE is a personal fitness checklist: Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion. Each item prompts a self-assessment of a condition that could impair flight performance. If any item is answered "yes," the pilot should question their fitness to fly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the term "controlled rest" or "planned nap" require operationally to be safe?',
  options: ['A. C: ATC notification that the aircraft is in unmonitored cruise to allow additional separation', 'B. Both crew members agreeing to the plan, completion of pre-descent checks, minimum altitude above terrain, a reliable wake-up method, and adequate time to clear sleep inertia before a critical phase', 'C. CASA approval for each planned nap event before commencing duty', 'D. A mandatory SARTIME filed before the rest period commences'],
  correct: 1,
  explanation: 'Controlled rest requires: crew agreement and plan, completion of pending tasks, minimum terrain clearance altitude, reliable wake-up arrangements, and an adequate recovery period for sleep inertia (15–30 minutes) before reassuming responsibility for a critical phase.',
  reference: 'CASA Fatigue Management'
},

{
  question: 'What is "premature closure" in pilot decision-making?',
  options: ['A. Settling on the first plausible explanation for a situation and stopping the diagnostic process before fully verifying it or considering alternative explanations', 'B. Closing the aircraft door before all passengers are seated — a regulatory compliance issue', 'C. Landing before reaching the destination because of weather — a sound safety decision', 'D. Closing the flight plan before the aircraft has landed at the destination'],
  correct: 0,
  explanation: 'Premature closure occurs when a pilot settles on the first plausible explanation for an anomaly and stops investigating. For example, attributing an instrument vibration to turbulence rather than a bearing failure — stopping at the first explanation without verification.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of flight crew licensing medicals from a human factors perspective?',
  options: ['A. Flight crew medicals only assess cardiovascular fitness — cognitive screening is conducted separately by airlines', 'B. Medicals are purely administrative — their content has no direct relationship to flight safety', 'C. Medicals exist primarily to satisfy insurance requirements — safety benefit is secondary', 'D. Medical assessments identify physical and mental health conditions that could impair performance or cause sudden incapacitation, functioning as a preventive layer in the accident causation chain'],
  correct: 3,
  explanation: 'Medical certification screens for conditions that could cause sudden incapacitation (cardiac events, epilepsy) or progressive performance degradation (vision, medication effects, mental health). They are a proactive system defence against human reliability failures.',
  reference: 'CASR Part 67'
},

{
  question: 'What is the human factors significance of "personal minima" differing from regulatory minima?',
  options: ['A. Personal minima are legally invalid — only regulatory minima may be used for flight planning', 'B. Personal minima are identical to regulatory minima for pilots with more than 500 hours total time', 'C. Personal minima reduce commercial viability by creating unnecessarily conservative operations', 'D. Personal minima account for individual currency, recency, and specific conditions that regulatory minima cannot address — they provide a safety buffer tailored to the individual pilot\'s current state and experience level'],
  correct: 3,
  explanation: 'Regulatory minima are population-level floors not accounting for individual state. Personal minima are tailored safety buffers — a pilot recently returned from extended leave, operating in an unfamiliar area, or fatigued should apply stricter personal minima than the regulatory floor.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "startle effect" and how does it affect a pilot\'s initial response to an emergency?',
  options: ['A. The surprise a crew feels when automation transitions modes without annunciation', 'B. A training response where pilots memorise abnormal checklists to improve startle recovery time', 'C. A voluntary flinching response to sudden noise — can be trained away completely', 'D. An involuntary whole-body defensive reflex triggered by sudden unexpected stimuli — temporarily freezes normal cognitive processing, delaying a coordinated response by 1–2 seconds'],
  correct: 3,
  explanation: 'The startle response is an involuntary, hardwired reflex producing a brief cognitive freeze. During this 1–2 second window, coordinated complex actions are unavailable. It cannot be trained away but can be reduced through pre-exposure, briefing threats, and regular practise of abnormal procedures.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "situation awareness probes" in crew monitoring?',
  options: ['A. Radar queries sent to confirm traffic positions during visual approaches', 'B. Questions that one crew member asks to verify the other\'s current situational awareness — for example "what\'s our fuel state?" or "what\'s our next waypoint?" — catching SA degradation before it leads to error', 'C. Technical instruments used to measure the crew\'s physiological state during flight evaluations', 'D. ATC queries designed to assess crew situational awareness before issuing a clearance'],
  correct: 1,
  explanation: 'Situation awareness probes are questions one crew member asks to check the other\'s SA state without directly accusing them of poor SA. If the answer reveals degraded SA, the crew can re-establish a shared mental model before an error develops.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the purpose of a PAPI (Precision Approach Path Indicator) and what does an all-red indication mean?',
  options: ['A. PAPI provides visual glideslope guidance — all red means the aircraft is significantly below the glidepath', 'B. PAPI provides lateral guidance — all red means lined up to the right of centreline', 'C. PAPI is an obstruction warning system — all red means an obstacle is directly ahead on approach', 'D. PAPI provides runway length information — all red means insufficient runway remaining for landing'],
  correct: 0,
  explanation: 'PAPI provides visual glidepath guidance using two or four lights. All red (2 or 4 red lights) means the aircraft is dangerously below the glidepath. 2 red/2 white is on-path. All white means too high.',
  reference: 'AIP AD 1.1'
},

{
  question: 'How does a pilot\'s level of experience affect their workload perception?',
  options: ['A. As skills become automated, experienced pilots process routine tasks with less conscious effort, freeing mental capacity for monitoring, planning, and non-routine tasks', 'B. Experience and workload perception are unrelated — it depends only on the number of instruments in the aircraft', 'C. More experienced pilots have higher workload because they are assigned more complex flights', 'D. Less experienced pilots perceive lower workload because they do not recognise all the risks present'],
  correct: 0,
  explanation: 'With experience, frequently performed tasks become automated (procedural memory), requiring less conscious cognitive effort. This frees working memory for higher-level SA, planning, and managing deviations — explaining why experienced pilots appear to handle demanding situations more calmly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors argument for using checklists rather than relying on memory for normal procedures?',
  options: ['A. Memory is unreliable — pilots cannot be trusted to remember any procedure correctly without a checklist', 'B. Checklists are a regulatory requirement under CASR Part 91 for all normal operations', 'C. Memory is vulnerable to interference, distraction, stress, and fatigue — checklists provide an objective, stable reference that does not degrade under these conditions', 'D. Checklists are slower than memory-based procedures and are only used because regulations require them'],
  correct: 2,
  explanation: 'Memory is adaptive and prone to degradation under the conditions most likely during flight — distraction, fatigue, high workload, stress. A physical or electronic checklist provides an objective reference that does not change with the pilot\'s mental state.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the physiological effect of adrenaline during an aviation emergency and why does it affect performance?',
  options: ['A. Adrenaline produces a prolonged improvement in cognitive performance lasting several hours', 'B. Adrenaline produces short-term alertness but also narrows attention, can cause tremor, and may impair fine motor control and complex analytical thinking — explaining why drilled procedures outperform improvised responses', 'C. Adrenaline has no cognitive effects — its action is purely cardiovascular', 'D. Adrenaline immediately impairs all cognitive performance and must be countered by deep breathing'],
  correct: 1,
  explanation: 'The adrenaline response mobilises energy but also narrows attention, increases heart rate, and can impair fine motor control and complex analytical thinking. Drilled emergency procedures execute reliably because they were encoded before the adrenaline state, not improvised during it.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors concept of "honest assessment" and why is it challenging?',
  options: ['A. The requirement for pilots to honestly document flight times in their logbooks', 'B. The regulatory requirement to complete maintenance releases truthfully and without omission', 'C. A CASA audit process assessing whether operator safety reports accurately reflect operations', 'D. The ability to accurately assess one\'s own fitness, performance, and limitations — challenging because fatigue, stress, and strong motivation impair the very cognitive functions needed for accurate self-assessment'],
  correct: 3,
  explanation: 'Honest self-assessment is challenging because the conditions that make it most necessary (fatigue, stress, high motivation) also impair the cognitive accuracy of self-assessment. Fatigued pilots consistently underestimate their own fatigue. Using objective criteria (IMSAFE) rather than subjective feelings helps.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is stress and how does moderate stress typically affect pilot performance?',
  options: ['A. Stress always impairs performance and should be completely eliminated through medication if necessary', 'B. Stress improves decision-making by forcing the pilot to focus on one task exclusively', 'C. Stress has no measurable effect on cognitive performance below the threshold of acute stress', 'D. Moderate stress improves performance by increasing arousal to an optimal level — this is the basis of the Yerkes-Dodson law'],
  correct: 3,
  explanation: 'The Yerkes-Dodson law describes an inverted-U relationship between arousal and performance. Moderate stress increases arousal toward an optimal level, improving performance. Both under-arousal (boredom) and over-arousal (extreme stress) degrade performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is situational awareness (SA) in aviation?',
  options: ['A. The ongoing mental model of what is happening now, what will happen next, and what it means for the safety of the flight', 'B. The physical act of scanning the instruments and outside environment at regular intervals', 'C. The ability to recall all emergency checklists from memory under pressure', 'D. The ability to fly an aircraft by visual reference only — SA is the VFR equivalent of instrument proficiency'],
  correct: 0,
  explanation: 'Situational awareness is the continuous perception of what is happening in the environment, understanding its meaning, and projecting what will happen next. It operates at three levels: perception, comprehension, and projection.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the effect of nicotine on pilot performance?',
  options: ['A. Nicotine is only relevant to pilots at altitudes above FL200 where its cardiovascular effects are potentiated', 'B. Nicotine withdrawal during flight causes no performance degradation in regular smokers', 'C. Nicotine has no measurable effect on cognitive performance or flight safety', 'D. Nicotine temporarily increases alertness but also increases blood carboxyhaemoglobin levels and reduces the body\'s ability to use oxygen — potentially worsening the effects of altitude hypoxia in smokers'],
  correct: 3,
  explanation: 'Smoking increases carboxyhaemoglobin (CO binding to haemoglobin), effectively reducing the oxygen-carrying capacity of the blood. Smokers are functionally operating at a higher effective altitude than non-smokers, and their tolerance to hypoxia is reduced.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a "go/no-go" decision and when should it be made?',
  options: ['A. The decision about whether to commence or continue a flight in the face of risks or uncertainty — ideally made as early as possible when planning is complete and information is freshest, with pre-determined criteria established before pressures arise', 'B. The decision between two routing options — made in flight based on real-time weather assessment', 'C. A decision about whether to use the autopilot or hand-fly a given approach segment', 'D. A maintenance decision about whether an aircraft defect allows the flight to proceed under MEL provisions'],
  correct: 0,
  explanation: 'A go/no-go decision should ideally be made during pre-flight planning using pre-determined criteria, before schedule pressure mounts. Making this decision in advance — with clear criteria — removes the temptation to rationalise a marginal situation at the last moment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "halo effect" in crew evaluation and how can it bias assessment?',
  options: ['A. A lighting artefact during night-vision evaluations that reduces assessor accuracy', 'B. The tendency for experienced crews to receive less rigorous assessments than training captains', 'C. The tendency for a positive impression in one area to inflate assessments in unrelated areas — for example, excellent radio work leading to overrated systems knowledge', 'D. An improvement in student performance caused by increased instructor confidence'],
  correct: 2,
  explanation: 'The halo effect is a cognitive bias where a strong impression in one area influences judgement of unrelated areas. In crew evaluation, it can cause an assessor to rate a pilot higher across all competencies because of one outstanding skill.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "resilience engineering" in aviation safety and how does it differ from traditional barrier-based safety management?',
  options: ['A. A structural engineering approach to making aircraft more resistant to metal fatigue', 'B. A safety approach building organisational capacity to adapt and succeed in unexpected situations — complementing traditional approaches that focus only on preventing known failure modes', 'C. An engineering technique for building redundancy into flight-critical systems', 'D. A CASA regulatory programme requiring operators to demonstrate resilience testing under emergency conditions'],
  correct: 1,
  explanation: 'Traditional safety management prevents known failures. Resilience engineering develops the capacity to handle what was not anticipated — anticipation, monitoring, response, and learning capabilities that allow the system to succeed in truly novel conditions.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the DECIDE model represent in pilot decision-making?',
  options: ['A. A weather assessment tool — Depiction, Environment, Cloud, Instrument minima, Diversion, Evaluation', 'B. A memory aid for fuel calculations — Distance, Endurance, Consumption, IFR reserves, Departure time, Estimate', 'C. An emergency prioritisation model — Declare, Evacuate, Call, Isolate, Descend, Execute', 'D. A structured decision-making process — Detect, Estimate, Choose, Identify, Do, Evaluate'],
  correct: 3,
  explanation: 'The DECIDE model is a systematic decision-making framework: Detect a change, Estimate its significance, Choose the safest outcome, Identify actions, Do the action, Evaluate the result. It helps pilots make structured decisions under pressure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "controlled attention" mean for pilot monitoring?',
  options: ['A. The deliberate direction of limited attentional resources to the most critical information sources — requires active management because attention is limited and is otherwise attracted by the most salient (not necessarily most important) stimulus', 'B. A physical eye movement training technique used in ab initio pilot training', 'C. The CASR requirement for pilots to monitor instruments at specified intervals', 'D. ATC controlling the attention and heading of an aircraft through radar vectors'],
  correct: 0,
  explanation: 'Attention is limited and can be captured by salient but non-critical stimuli. Controlled attention is deliberately directing it to the most important sources — particularly when high workload or stress is attracting attention to specific areas at the expense of others.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What physiological event causes G-induced loss of consciousness (G-LOC)?',
  options: ['A. Increased blood flow to the brain exceeds vessel capacity, causing haemorrhaging', 'B. Positive G-force pushes blood away from the head toward the lower body, reducing cerebral blood pressure — first causing greyout (visual loss), then blackout, then unconsciousness', 'C. Negative pressure in the cockpit reduces inspired oxygen partial pressure causing rapid hypoxia', 'D. Rapid deceleration presses inner ear fluid against the auditory nerve causing temporary neurological disruption'],
  correct: 1,
  explanation: 'Positive G drains blood centrifugally away from the head. This first reduces colour vision (greyout), then all vision (blackout), and at higher G-loads causes full unconsciousness. G-LOC is insidious — there is no warning before loss of consciousness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What distinguishes an "active failure" from a "latent condition" in accident causation?',
  options: ['A. Active failures are errors with immediate safety effects (e.g. a wrong control input); latent conditions are pre-existing system weaknesses that lie dormant until triggered', 'B. Active failures involve the flight crew; latent conditions involve maintenance and management only', 'C. Active failures are intentional acts; latent conditions are unintentional — both require equal regulatory response', 'D. Active failures occur in flight; latent conditions occur on the ground before departure'],
  correct: 0,
  explanation: 'Active failures are errors or violations that have immediate adverse effects (the unsafe act itself). Latent conditions are pre-existing weaknesses in the system — poor procedures, inadequate training, fatigue schedules — that increase the probability of active failures.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "non-technical skills" (NTS) in aviation and why are they assessed?',
  options: ['A. NTS is an acronym for non-transponder standard — relevant to aircraft in uncontrolled airspace', 'B. NTS are cognitive and social resource management skills — SA, decision-making, CRM, workload management — assessed alongside technical skills because most accidents involve NTS failures', 'C. Non-technical skills are assessed only in initial training — type ratings focus exclusively on technical proficiency', 'D. NTS refers to administrative competencies such as flight planning and documentation'],
  correct: 1,
  explanation: 'Non-technical skills include SA, decision-making, CRM, leadership, and workload management. Research shows the majority of accidents involve NTS failures alongside or preceding technical failures. Modern flight evaluation explicitly assesses both.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the difference between a slip, a lapse, and a mistake in human error taxonomy?',
  options: ['A. All three terms describe the same type of cognitive error — the distinction is only academic', 'B. Slips are physical execution errors in an intended action; lapses are memory failures (forgetting a step); mistakes are planning errors where the wrong procedure is selected', 'C. Slips are minor errors; lapses are moderate errors; mistakes are severe errors requiring a safety report', 'D. Slips are ground errors; lapses occur in flight; mistakes occur during training exercises'],
  correct: 1,
  explanation: 'In the Reason/Norman taxonomy: a slip is a correctly intended action executed wrongly (turning the wrong knob); a lapse is forgetting a step in a sequence; a mistake is an incorrect plan even if executed correctly (using the wrong checklist for the situation).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does physical exercise immediately before a flight affect pilot performance?',
  options: ['A. Exhausting physical exercise can induce fatigue and muscle weakness that impairs stick-and-rudder skill and decision-making during flight', 'B. Vigorous exercise always improves alertness and should be encouraged before flight', 'C. Light exercise is beneficial but any exercise lasting more than 10 minutes is prohibited before flight', 'D. Moderate exercise has no effect — only exhausting exercise is relevant'],
  correct: 0,
  explanation: 'Exhausting physical exercise immediately before flight can cause acute fatigue that impairs performance. Moderate exercise is generally beneficial, but pilots should avoid exhausting activity in the hours before a demanding flight.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "authority gradient" problem specifically related to in fatal accident investigations?',
  options: ['A. Accidents caused by ATC issuing instructions that exceeded their legal authority', 'B. Accidents where ATC authority over the flight was not clearly established before departure', 'C. Accidents where a junior crew member had critical safety information but did not effectively communicate it due to deference toward the captain — the information existed but did not reach the decision-maker', 'D. Accidents caused by a captain taking unilateral action without consulting the first officer'],
  correct: 2,
  explanation: 'Steep authority gradient accidents involve junior crew members who had safety-critical information (observed wrong checklist, saw the terrain, noticed the weather) but failed to communicate it effectively due to hierarchy. The captain\'s decision was made without access to information the FO had.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the safety significance of standardised cockpit voice recorder (CVR) and flight data recorder (FDR) requirements?',
  options: ['A. Recording requirements exist to satisfy ICAO obligations — domestically their data is rarely useful', 'B. CVR and FDR protect crew members legally by proving they followed procedures — their primary benefit is liability protection', 'C. CVR and FDR recordings are required for operator commercial insurance — their safety benefit is indirect', 'D. CVR and FDR provide objective data on crew actions, aircraft state, and communications during the lead-up to accidents — enabling accurate post-accident reconstruction that drives system improvements and prevents recurrence'],
  correct: 3,
  explanation: 'CVR and FDR data provides objective, factual reconstruction of accident sequences, enabling identification of causal and contributing factors. This information drives systemic improvements — in training, procedures, aircraft design, and regulations — that prevent similar accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "empty field myopia" phenomenon and when does it occur?',
  options: ['A. A visual illusion where flat terrain appears mountainous due to heat shimmer', 'B. The tendency for the eyes to relax to a resting focus of approximately 1–2 metres in conditions of poor visibility or featureless visual environments — preventing detection of distant targets', 'C. The inability to read charts clearly in low cockpit lighting conditions', 'D. Short-sightedness that develops from long-term instrument flying without a visual break'],
  correct: 1,
  explanation: 'In haze, night conditions, or featureless environments, the eyes relax to a resting focal distance of approximately 1–2 metres rather than infinity. This makes it impossible to see distant aircraft or terrain without a conscious effort to change focus.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "hearback error" and how does it differ from "readback error"?',
  options: ['A. Hearback error occurs during ATC transmission; readback error occurs during pilot transmission — both are caused by radio interference', 'B. They are identical terms — both describe miscommunication between ATC and the pilot', 'C. Hearback errors occur in multi-crew operations; readback errors occur in single-pilot operations', 'D. A readback error is when the pilot reads back an incorrect clearance; a hearback error is when ATC fails to detect the incorrect readback — both allow a flawed clearance to stand uncorrected'],
  correct: 3,
  explanation: 'Readback errors occur when the pilot reads back incorrectly. Hearback errors occur when ATC fails to detect the incorrect readback and allows it to stand. Both are necessary for a communication failure — one error alone can be caught if the other half of the loop functions correctly.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What effect does emotional arousal (anger, frustration, elation) have on pilot decision-making?',
  options: ['A. Emotional arousal below the level of clinical anxiety disorder has no measurable effect on flight performance', 'B. Emotional state only affects performance when the emotion is directly related to the flight task', 'C. Positive emotions always improve performance — elation increases motivation and reduces errors', 'D. Strong emotional arousal in either direction can impair objective decision-making by narrowing attention, distorting risk assessment, and reducing analytical processing'],
  correct: 3,
  explanation: 'Strong emotions — whether negative (anger, fear) or positive (elation, overconfidence) — impair objective decision-making. Emotional arousal narrows attention, distorts risk perception, and activates System 1 (fast, intuitive) processing at the expense of analytical reasoning.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the Yerkes-Dodson law and how does it apply to pilot performance?',
  options: ['A. A relationship where performance increases with arousal up to an optimal point, then decreases — both under-arousal and over-arousal impair performance', 'B. A principle stating that simple tasks are always performed better than complex tasks under stress', 'C. A law stating that more experience always leads to better performance regardless of arousal level', 'D. A law describing how fatigue accumulates linearly with hours of duty time'],
  correct: 0,
  explanation: 'The Yerkes-Dodson law describes an inverted-U relationship between arousal and performance. Maximum performance occurs at moderate arousal. Both extremes (understimulation/boredom and excessive stress) degrade performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "skill fade" describe and how is it managed for rarely-used emergency procedures?',
  options: ['A. Progressive degradation of skills not regularly practised — managed through recurrent training, currency requirements, and deliberate practice of at-risk skills', 'B. Skill fade only applies to emergency procedures — routine procedures are maintained by operational use', 'C. The fading of theoretical knowledge between initial training and first operational flight — corrected through line indoctrination', 'D. Physical deterioration of fine motor control in pilots over 50 — managed through annual medicals'],
  correct: 0,
  explanation: 'Skill fade affects all skills not regularly practised — manual flying in automated cockpits, infrequently used emergency procedures, rarely encountered aircraft configurations. Recurrent training and currency requirements are the primary management strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Which physiological sign is most reliably associated with severe fatigue?',
  options: ['A. Elevated heart rate and blood pressure', 'B. Microsleeps — brief involuntary sleep episodes of 1–30 seconds duration', 'C. Increased appetite and food cravings', 'D. Increased motivation to complete tasks quickly'],
  correct: 1,
  explanation: 'Microsleeps are the most dangerous physiological sign of severe fatigue. The pilot has no awareness of these involuntary sleep episodes, which can last 1–30 seconds. During a microsleep, control inputs cease.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does a pilot\'s self-confidence level affect safety when it becomes overconfidence?',
  options: ['A. Higher self-confidence always improves decision-making by reducing hesitation', 'B. Low self-confidence is the more dangerous extreme — confident pilots make better decisions in all conditions', 'C. Overconfidence leads to underestimation of risk, dismissal of warnings, reduced vigilance, and is a core component of the "macho" hazardous attitude', 'D. Self-confidence has no measurable effect on decision-making — only technical knowledge matters'],
  correct: 2,
  explanation: 'Appropriate self-confidence supports decisive action. Overconfidence — believing one\'s skills exceed their actual reliability — is associated with risk underestimation, ignoring safety warnings, and resistance to procedures. It is among the most dangerous hazardous attitudes.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "pre-traumatic stress" in aviation and why is it a human factors concern?',
  options: ['A. A medical condition requiring DAME assessment before return to flying after a traumatic incident', 'B. Stress caused by completing traumatic training scenarios in the simulator', 'C. Stress experienced before a known demanding flight that impairs performance before the event begins', 'D. Anticipatory anxiety about expected aviation demands — including scheduled difficult operations, check flights, or instrument currency renewals — that pre-degrades performance through pre-flight stress arousal'],
  correct: 2,
  explanation: 'Anticipatory stress about known upcoming demands (a check flight, a weather-challenging route, a difficult charter) can generate significant pre-flight stress that degrades performance before the event begins. Preparation, mental rehearsal, and normalising the challenge reduce anticipatory stress.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors significance of "surprise" in the context of emergency management?',
  options: ['A. Surprise has no measurable effect on emergency response — trained pilots respond identically to surprising and expected emergencies', 'B. Surprise slows emergency response by 30 seconds on average — sufficient to make all time-critical emergencies unmanageable', 'C. An unexpected emergency triggers a surprise response (recognition + assessment delay after startle), slowing the transition to effective action — briefing potential emergencies converts them from surprises to anticipated events', 'D. Surprise is only relevant to student pilots — experienced pilots are immune to surprise effects'],
  correct: 2,
  explanation: 'Surprise adds a recognition-and-assessment phase after the startle response before action begins. Pre-briefing potential emergencies eliminates this delay by establishing "if X, then Y" patterns that trigger immediately on recognition, without the surprise-induced delay.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the relationship between emotional state and risk tolerance in pilots?',
  options: ['A. Emotional state only influences risk tolerance in pilots with fewer than 200 hours experience', 'B. Both highly positive (elated, excited) and highly negative (angry, depressed) emotional states can shift risk tolerance — positive emotions may increase risk-taking while negative emotions may cause excessive caution or impulsivity', 'C. Pilots in a positive emotional state always have the same risk tolerance as when they are emotionally neutral', 'D. Risk tolerance is fixed by individual personality and cannot be altered by emotional state'],
  correct: 1,
  explanation: 'Research shows that emotional states shift risk tolerance. A pilot in an excited, elated state may underestimate risk and take more chances. A pilot in an anxious, angry, or depressed state may make poor decisions through impulsivity or excessive caution. Neither extreme supports optimal risk assessment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "startle effect" and how does it affect pilot response to abnormal events?',
  options: ['A. A training response where pilots memorise abnormal checklists to improve startle recovery time', 'B. The visual startle from unexpected weather encountered in cruise — corrected by increased scanning frequency', 'C. The surprise crew members feel when automation transitions modes without an auditory annunciation', 'D. An involuntary psychophysiological response to sudden unexpected events that temporarily freezes normal cognitive processing, delaying a coordinated response by 1–2 seconds'],
  correct: 3,
  explanation: 'The startle effect is an involuntary physiological response (freeze, heightened arousal) to sudden unexpected stimuli. It temporarily disrupts cognitive processing before surprise (recognition) and action follow. In time-critical emergencies, even 1–2 seconds of delayed response is significant.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What causes night myopia and how does it affect a pilot\'s visual performance?',
  options: ['A. A slight shift toward near-focus and reduced acuity in low-light conditions — targets at distance may appear slightly blurred even in pilots with normal daytime vision', 'B. Complete colour blindness that develops after 20 minutes in complete darkness', 'C. The inability to detect red and green aircraft navigation lights at normal detection distances', 'D. A progressive reduction in peripheral vision caused by long-term night flying without rest'],
  correct: 0,
  explanation: 'In low-light conditions, the eye\'s optical system shifts slightly toward near-focus (night myopia), reducing distance acuity. Pilots with otherwise normal vision may have reduced distance visual acuity at night, affecting traffic detection.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the Coriolis illusion and what causes it?',
  options: ['A. An illusion during straight-and-level flight where the pilot feels they are in a turn', 'B. A tumbling or rolling sensation produced when the head is moved during a prolonged turn — simultaneously stimulating multiple semicircular canals that were not previously stimulated', 'C. An illusion caused by bright sunlight reflecting off clouds directly ahead', 'D. A false altitude perception caused by looking down at ground features through a window'],
  correct: 1,
  explanation: 'The Coriolis illusion occurs when the head is moved in a different plane during a sustained turn. This stimulates semicircular canals that were not previously active, producing a powerful and disorienting tumbling sensation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the aviation human factors term "startle" describe physiologically?',
  options: ['A. An involuntary, hardwired whole-body defensive reflex triggered by sudden unexpected stimuli — includes startle freeze, motor startle, and cognitive freeze lasting 1–2 seconds', 'B. A voluntary flinching response to a sudden loud noise — can be trained away completely', 'C. The sudden onset of acute stress that causes a pilot to hyperventilate', 'D. A reflex blink and head movement away from a sudden bright light'],
  correct: 0,
  explanation: 'The startle response is an involuntary, phylogenetically primitive reflex triggered by sudden unexpected stimuli. It produces a brief freeze phase followed by arousal. During this 1–2 second window, coordinated complex actions are unavailable. It cannot be trained away but can be managed through pre-exposure and briefing.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does medication use affect a pilot\'s fitness to fly?',
  options: ['A. Any medication, including over-the-counter drugs, that causes drowsiness, impairs cognition, or has other side effects may make a pilot unfit to fly', 'B. Medications taken more than 8 hours before flight are cleared from the system and pose no risk', 'C. Medications only affect fitness when flying above 10,000 ft due to altitude potentiation', 'D. Only prescription medications require consideration — over-the-counter medications have no aviation-relevant effects'],
  correct: 0,
  explanation: 'Any medication — prescription or OTC — that causes drowsiness, impaired cognition, blurred vision, or other relevant side effects can make a pilot unfit for flight. The underlying condition requiring the medication must also be assessed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "plan continuation bias" (get-there-itis) and what is the recommended countermeasure?',
  options: ['A. The tendency to complete the original plan despite developing evidence that it should change — countered by pre-defining decision points and criteria before flight, and explicitly checking in with the current situation regularly', 'B. A cognitive preference for straight-line routing over procedurally correct routing', 'C. A tendency to plan flights conservatively to include maximum fuel and alternate options', 'D. A bias toward always following the filed flight plan even when ATC offers a shortcut'],
  correct: 0,
  explanation: 'Plan continuation bias is countered by: pre-defining go/no-go criteria before flight with clear thresholds, establishing personal weather and fuel limits, checking in at defined decision points, and being willing to acknowledge when the plan needs to change.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "active listening" mean in a CRM context and why does it matter?',
  options: ['A. Listening with full attention, verifying understanding through feedback, and asking clarifying questions — ensuring that what the sender intended is what the receiver understood', 'B. Always having radio communication equipment active and monitoring all frequencies simultaneously', 'C. Monitoring ATIS and ATC simultaneously without response delays', 'D. Listening to the crew debrief recording after each flight to identify communication errors'],
  correct: 0,
  explanation: 'Active listening involves full attention, verification of understanding, and feedback. In a crew context, it ensures that instructions and information are fully understood, not just heard — reducing the chance of acting on a misunderstood message.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "vigilance management" and what strategies support it during long cruise segments?',
  options: ['A. Actively maintaining alertness during monotonous monitoring tasks — strategies include: structured scan patterns, regular verbal callouts, self-imposed task variation, monitoring challenges between crew members, and regular cross-checks against expected states', 'B. The management of flight crew fatigue through mandatory rest during cruise — relevant only to augmented crew operations', 'C. The ATC service that maintains vigilance over aircraft — managed by sector controller handoffs', 'D. The regulatory framework governing transponder use during night operations'],
  correct: 0,
  explanation: 'Vigilance management during monotonous cruise flight requires active strategies because attention naturally wanders. Structured scans, regular cross-checks, deliberate verbalisations, and crew-based challenges all counteract the natural vigilance decrement that occurs during sustained monotonous monitoring.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "defensive communication" in a CRM context and why is it harmful?',
  options: ['A. A style of communication that protects the pilot\'s legal rights when communicating with ATC', 'B. Only withholding information to protect career advancement is considered defensive communication', 'C. Communication that prioritises protecting one\'s ego, avoiding blame, or maintaining face over sharing accurate safety information — harmful because it withholds or distorts safety-critical information', 'D. Defensive communication is positive — it protects important information by only sharing it with the PIC'],
  correct: 2,
  explanation: 'Defensive communication occurs when a crew member modifies, omits, or delays safety-critical information to avoid embarrassment, blame, or conflict. It directly degrades the quality of shared situational awareness and can allow an error to progress unchallenged.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the most effective personal strategy for managing fatigue risk over a multi-day trip?',
  options: ['A. Prioritising sleep during every available rest opportunity, maintaining consistent sleep schedules, minimising alcohol and caffeine use especially before sleep, and monitoring personal fatigue state throughout', 'B. Reducing flight time per day as the trip progresses to compensate for accumulating fatigue', 'C. Consuming caffeine before each duty period to maintain consistent alertness throughout the trip', 'D. Sleeping maximally on the first night of the trip to build a sleep reserve for subsequent nights'],
  correct: 0,
  explanation: 'Managing fatigue over a multi-day trip requires: maximising sleep during every rest opportunity (not just the minimum required), maintaining consistent sleep-wake schedules, avoiding alcohol before sleep (it degrades sleep quality), avoiding late caffeine (it disrupts sleep onset), and actively monitoring one\'s own fatigue state.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of the "Heinrich triangle" (or accident pyramid) in aviation safety?',
  options: ['A. A regulatory model where minor violations result in warnings while major violations result in licence suspension', 'B. A training model showing the relative frequency of skill-based versus knowledge-based errors', 'C. A statistical model suggesting that for every major accident there are multiple serious incidents, many minor incidents, and thousands of unsafe acts — implying that addressing minor incidents and near-misses prevents major accidents', 'D. A model showing that accident severity increases proportionally with aircraft weight'],
  correct: 2,
  explanation: 'The Heinrich/accident pyramid suggests a proportional relationship between accidents, incidents, and unsafe acts. The implication for safety management is that reducing the base (unsafe acts and near-misses) reduces the apex (fatal accidents). This supports the value of incident reporting systems.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is "workload prediction" and how does it support effective pre-flight planning?',
  options: ['A. Mentally mapping the flight to identify phases where workload will be high, allowing tasks to be redistributed, automation to be planned, and contingencies to be briefed in lower-workload phases', 'B. A software system that calculates flight crew workload based on route complexity and weather', 'C. A regulatory tool used by CASA to predict pilot error rates for specific aircraft types', 'D. A maintenance concept predicting future servicing needs based on current component workload'],
  correct: 0,
  explanation: 'Workload prediction during pre-flight planning identifies workload peaks (complex departure, busy arrival) and allows mitigation — completing pre-approach tasks early, briefing contingencies during cruise, planning automation use during high-demand phases.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "automation complacency" and how does it develop?',
  options: ['A. A tendency to over-manage automation by making unnecessary mode changes during normal operations', 'B. An over-reliance on autopilot during take-off and landing — prevented by mandatory manual approaches', 'C. A reduction in vigilance and manual skill that develops when automation reliably performs tasks, causing the pilot to stop actively monitoring the automated system', 'D. Complacency caused by flying the same automated route repeatedly without variation'],
  correct: 2,
  explanation: 'Automation complacency develops when automation reliably manages a task, reducing the pilot\'s felt need to monitor it actively. When the automation fails or makes an error, the complacent pilot may not detect it promptly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is spatial disorientation in aviation?',
  options: ['A. A conflict between what the vestibular system and proprioceptors report and what the instruments show', 'B. A condition where the pilot confuses left and right rudder inputs', 'C. A navigational error caused by flying without external visual references', 'D. The inability to read maps accurately during flight in reduced visibility'],
  correct: 0,
  explanation: 'Spatial disorientation occurs when there is a conflict between sensory inputs (vestibular, visual, proprioceptive) and actual aircraft attitude. The pilot\'s bodily senses give incorrect information, and without instrument reference, controlled flight into terrain can result.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "capacity overload" and how does it differ from "capacity underload"?',
  options: ['A. Capacity overload occurs when demands exceed the pilot\'s processing ability, causing errors; capacity underload occurs when demands are so low that attention wanders and vigilance decreases — both degrade performance', 'B. Capacity overload only occurs in multi-crew operations; capacity underload only occurs in single-pilot operations', 'C. Capacity overload and underload are identical — both describe a mismatch between task demands and pilot capacity', 'D. Capacity overload is the maximum flight hours; capacity underload is below the minimum — both are regulated by CAO 48.1'],
  correct: 0,
  explanation: 'Both extremes degrade performance. Overload causes errors of omission and commission as the pilot rushes or misses tasks. Underload (boredom, monotony) reduces vigilance and detection ability. Optimal performance occurs at moderate, variable workload levels.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors rationale for requiring two-crew operations in aircraft above a certain size or complexity?',
  options: ['A. Two crew is required purely to comply with insurance obligations — the safety benefit is secondary', 'B. Regulatory tradition — two-crew requirements predate human factors research and are maintained for historical reasons', 'C. A second crew member reduces the PIC\'s legal liability by sharing responsibility for safety decisions', 'D. Two crew provides redundancy for cognitive tasks (shared SA, error detection, cross-checking) and physical tasks, significantly reducing the probability that undetected errors propagate to accidents'],
  correct: 3,
  explanation: 'Two-crew operations provide multiple safety benefits: two independent monitors for the flight, cross-checking that catches individual errors, shared workload, and a redundant decision-maker if one pilot becomes incapacitated. Research shows single-pilot operations have higher accident rates per hour than two-crew operations for equivalent tasks.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot successfully completes a weather diversion and lands safely, despite poor pre-flight decision-making. What human factors concept does this illustrate?',
  options: ['A. Confirmation bias — the safe outcome confirms the pilot\'s belief that the decision was correct', 'B. Outcome bias — judging the quality of a decision by its outcome rather than the quality of the reasoning that led to it, leading to potentially dangerous overconfidence in flawed decision processes', 'C. Resilience — the pilot\'s ability to recover from a poor decision demonstrates adaptive expertise', 'D. The Swiss cheese model — all defences worked correctly and caught the poor decision'],
  correct: 1,
  explanation: 'Outcome bias causes people to judge a decision as good or bad based on its outcome rather than the quality of the decision-making process. A poorly reasoned decision that happens to turn out safely leads to overconfidence in that decision process, increasing the chance the same poor process will be used again — eventually leading to a bad outcome.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "bounded rationality" and how does it affect aviation decision-making?',
  options: ['A. A positive attribute where pilots limit their decision scope to the most relevant factors', 'B. The physical boundary of airspace within which pilot decisions are made', 'C. The regulatory limits on pilot decision-making authority — bounded by regulations and operator policies', 'D. The cognitive reality that human decision-making is limited by finite information, time, and cognitive capacity — pilots make "good enough" decisions rather than optimal ones, using shortcuts that are efficient but occasionally fail'],
  correct: 3,
  explanation: 'Bounded rationality recognises that pilots cannot process all available information or evaluate all options. They use cognitive shortcuts (heuristics) that work well in familiar situations but can fail in novel ones. Understanding this helps pilots recognise when heuristic shortcuts may be insufficient.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is Crew Resource Management (CRM) and what is its primary goal?',
  options: ['A. A maintenance procedure for managing crew seating and oxygen equipment on multi-crew aircraft', 'B. The effective use of all available resources — people, information, equipment — to achieve safe and efficient flight operations while minimising human error', 'C. A certification course required for all CPL holders to standardise radio communication procedures', 'D. A rostering system minimising pilot fatigue through optimal crew pairing'],
  correct: 1,
  explanation: 'CRM is the effective use of all available human and technical resources to achieve safe and efficient operations. Its primary goal is to reduce human error by optimising crew communication, decision-making, workload management, and situational awareness.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the sterile cockpit concept?',
  options: ['A. A procedure requiring cockpit voice recorders to be in operation at all times during flight', 'B. A cockpit with sealed windows to prevent bird strike — required for all RPT operations below FL100', 'C. A requirement for all cockpit surfaces to be cleaned after each flight for infection control purposes', 'D. A policy prohibiting non-essential conversation and activities during critical phases of flight (typically below 10,000 ft or set altitude) to reduce distraction'],
  correct: 3,
  explanation: 'The sterile cockpit concept prohibits non-essential conversation, paperwork, and activities during critical flight phases — typically below 10,000 ft or during approach and landing. It is designed to reduce distraction and allow the crew to focus on the most critical tasks.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the leans illusion and how should a pilot respond to it?',
  options: ['A. A vestibular illusion where the pilot feels the aircraft is banked when it is wings-level — corrected by trusting instruments despite the physical sensation', 'B. An auditory illusion produced by engine noise — no corrective action required', 'C. A visual illusion where the horizon appears to slope — corrected by closing eyes and trusting instruments', 'D. A proprioceptive illusion where the pilot feels acceleration during level flight — corrected by reducing power'],
  correct: 0,
  explanation: 'The leans occur when the vestibular system incorrectly signals a bank after an undetected roll. Even after levelling with instruments, the pilot feels banked. The correct response is to trust the instruments and not respond to the false sensation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the human factors concept of "skill fade" describe and how is it managed?',
  options: ['A. The progressive degradation of skills that are not regularly practised — managed through recurrent training, currency requirements, and deliberate practice of skills at risk of decay', 'B. The physical deterioration of fine motor control in pilots over 50 years of age — managed through annual medical examination', 'C. The fading of theoretical knowledge between initial training and first operational flight — corrected through line indoctrination', 'D. Skill fade only applies to emergency procedures — routine procedures are maintained by operational use'],
  correct: 0,
  explanation: 'Skill fade affects all skills not regularly practised: manual flying skills in highly automated cockpits, infrequently used emergency procedures, rarely encountered aircraft configurations. Currency requirements, recurrent training, and deliberate practice of at-risk skills are the primary management strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the "SHELL model" describe in aviation human factors?',
  options: ['A. A training model for instrument flight procedures', 'B. A risk assessment tool used by CASA for flight examiner evaluations', 'C. The interfaces between the human operator and aviation system components — Software, Hardware, Environment, Liveware (central), and Liveware (others)', 'D. A model of aircraft systems only — Software, Hardware, Electronics, Liveware, Links'],
  correct: 2,
  explanation: 'The SHELL model represents the human operator (central Liveware) and their interfaces with Software (procedures, regulations), Hardware (equipment, controls), Environment (physical conditions), and other Liveware (other people). Mismatches at these interfaces create vulnerabilities.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How can a pilot differentiate between hyperventilation and hypoxia in flight?',
  options: ['A. They are indistinguishable — both require immediate descent', 'B. Hypoxia causes tingling in the extremities; hyperventilation does not', 'C. By deliberately slowing and deepening breathing — this will resolve hyperventilation but not hypoxia', 'D. By checking the altimeter — hypoxia only occurs above 10,000 ft'],
  correct: 2,
  explanation: 'If a pilot deliberately slows and deepens their breathing and symptoms improve, the cause was hyperventilation (excess CO2 washout). If symptoms persist, hypoxia is more likely and descent or oxygen use is required.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does increasing experience typically change a pilot\'s decision-making under routine conditions?',
  options: ['A. Experienced pilots always use formal decision-making models more consistently than novices', 'B. Experience has no measurable effect on decision-making process — only task difficulty matters', 'C. Experienced pilots tend to use pattern recognition and intuition (recognition-primed decision making) rather than analytical models — faster but potentially prone to different errors', 'D. Experienced pilots make fewer decisions by delegating more to automation and co-pilots'],
  correct: 2,
  explanation: 'Experienced pilots typically use recognition-primed decision-making (RPD) — matching situations to past experience and acting on recognised patterns. This is faster than analytical models but can fail in novel situations that don\'t match experience.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "emotional contagion" in a cockpit and how can it affect performance?',
  options: ['A. An infection spreading between crew members through shared oxygen in a pressurised cockpit', 'B. A regulatory term for contagious diseases that require crew members to report illness before duty', 'C. The phenomenon where one crew member\'s emotional state tends to influence the other\'s — an anxious or angry captain can generate anxiety in the FO, degrading both crew members\' performance', 'D. A positive effect where experienced pilots\' calm confidence transfers to junior crew members through observation'],
  correct: 2,
  explanation: 'Emotional contagion occurs when one person\'s emotional state influences another\'s — through tone of voice, facial expression, and body language. A captain who is visibly anxious, angry, or frustrated can spread that emotional state to the FO, degrading both crew members\' performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "door-frame error" in runway operations and what causes it?',
  options: ['A. An error caused by wind shadowing around aircraft doors creating a blind spot during runway scanning', 'B. A physical error where a pilot inadvertently selects the wrong parking brake handle during runway operations', 'C. A mental model error where a pilot mistakes a taxiway intersection for the intended runway entry point because the visual appearance matches their expectation — a form of expectation error', 'D. A runway incursion caused by misreading a door-frame-shaped taxiway sign as a runway entry clearance'],
  correct: 2,
  explanation: 'This type of error (expectation-driven misidentification of aerodrome features) occurs when the pilot\'s expectation about where the runway entry point is overrides accurate perception of aerodrome markings, leading to entering the wrong runway or taxiway.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a "safety culture" and what are its key characteristics in a well-functioning aviation organisation?',
  options: ['A. A shared set of values, beliefs, and behaviours where safety is genuinely prioritised — characterised by informed, reporting, just, flexible, and learning cultures', 'B. The safety training programme delivered to all new employees during their induction period', 'C. The safety equipment carried on aircraft as required by minimum equipment lists', 'D. A legally mandated set of safety procedures that operators must document for CASA approval'],
  correct: 0,
  explanation: 'A positive safety culture is characterised by: being informed (using safety data), reporting (encouraging open reporting), being just (distinguishing errors from violations), being flexible (adapting to novel hazards), and learning (acting on safety information). This was developed by James Reason\'s model.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the semi-circular canal\'s role in producing spatial disorientation?',
  options: ['A. It detects rotational accelerations and decelerations — it only responds to changes in rotation rate, not constant rotation, leading to false perceptions of level flight during steady turns', 'B. It detects linear acceleration and deceleration along the aircraft\'s longitudinal axis', 'C. It detects gravity and provides the primary source of attitude information during IMC', 'D. It monitors blood pressure and triggers the vestibulo-ocular reflex to stabilise vision'],
  correct: 0,
  explanation: 'Semi-circular canals detect angular acceleration. During a steady coordinated turn, fluid in the canals eventually stops moving relative to the canal walls, so the sensation of turning ceases. When the turn stops, the pilot feels a turn in the opposite direction.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the minimum surface-to-flight interval recommended after scuba diving to a depth requiring a decompression stop?',
  options: ['A. 1 hour after a single no-decompression dive', 'B. 4 hours after any dive below 10 m', 'C. 12 hours after a no-decompression dive, and 24 hours or more after a dive requiring decompression stops', 'D. 48 hours regardless of dive profile'],
  correct: 2,
  explanation: 'CASA recommends at least 12 hours after a single no-decompression dive and at least 24 hours after dives requiring decompression stops before flying. Insufficient surface intervals risk decompression sickness at altitude.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended strategy for managing schedule pressure from an operator?',
  options: ['A. Accept all operator schedules — regulatory compliance ensures the schedule is safe by definition', 'B. Establish clear personal and organisational standards before the flight that define when the flight will not proceed — and communicate these expectations to the operator in advance', 'C. Defer safety judgements to the operator\'s operations department — they have better weather information than the pilot', 'D. Only raise schedule concerns after the flight in a post-flight safety report'],
  correct: 1,
  explanation: 'Pre-establishing and communicating personal and organisational go/no-go criteria reduces the power of schedule pressure at the moment of decision. The decision is already made — it was made in advance, without the pressure of an immediate deadline.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "risk appetite" in aviation safety management and how does it differ between individuals and organisations?',
  options: ['A. The physical appetite a pilot develops for risk as experience accumulates — always increases with experience', 'B. The fuel reserve beyond the regulatory minimum — a higher reserve indicates a higher risk appetite', 'C. A CASA-defined standard for acceptable risk in commercial aviation operations', 'D. The amount of risk an individual or organisation is willing to accept in pursuit of its objectives — varies based on culture, experience, commercial pressure, and risk perception'],
  correct: 3,
  explanation: 'Risk appetite is the level of risk an entity is willing to accept in pursuit of its objectives. It varies between individuals (personality, experience, risk perception) and organisations (commercial pressure, safety culture, regulatory environment). Misalignment between individual and organisational risk appetite creates hazards.',
  reference: 'CASA Safety Management System'
},

{
  question: 'How does caffeine affect fatigue and why is it limited as a countermeasure?',
  options: ['A. Caffeine permanently resets the circadian rhythm to the local time zone', 'B. Caffeine eliminates the need for sleep by replacing adenosine in the brain', 'C. Caffeine temporarily blocks adenosine receptors providing alertness, but does not address underlying sleep debt — when the effect wears off alertness drops sharply and it can disrupt subsequent sleep quality', 'D. Caffeine has no measurable effect on pilot alertness at normal doses'],
  correct: 2,
  explanation: 'Caffeine provides temporary alertness by blocking adenosine receptors but does not address sleep debt. When the effect wears off (4–6 hours), alertness drops. It can also impair the quality of subsequent sleep, potentially worsening next-cycle fatigue.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is night myopia and how does it affect a pilot\'s ability to detect traffic?',
  options: ['A. Complete colour blindness developing after 20 minutes in complete darkness', 'B. A slight shift toward near-focus in low-light conditions — targets at distance appear slightly blurred even in pilots with normal daytime vision, reducing traffic detection range at night', 'C. The inability to detect red and green navigation lights at normal detection distances', 'D. Progressive reduction in peripheral vision caused by long-term night flying'],
  correct: 1,
  explanation: 'In low-light conditions, the eye shifts slightly toward near-focus (night myopia), reducing distance acuity. Pilots with otherwise normal vision may have reduced distance visual acuity at night, affecting both traffic detection and terrain awareness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situation-based training" and why is it more effective than isolated skill drills?',
  options: ['A. Training exclusively on accident scenarios from official investigation reports', 'B. Training on an active aerodrome providing realistic environmental conditions', 'C. Training assessed only through written examination rather than practical evaluation', 'D. Training using realistic, complex scenarios requiring integrated technical and non-technical skill application — building the integrated skills required for real-world operations rather than isolated individual skills'],
  correct: 3,
  explanation: 'Situation-based training presents realistic scenarios requiring simultaneous application of technical skills, SA, decision-making, and CRM. This integration is what real-world operations demand — isolated skill drills do not develop the capacity to apply multiple skills simultaneously.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the "broken windows" theory as applied to aviation safety culture?',
  options: ['A. A maintenance concept where cosmetic damage to aircraft interiors indicates inadequate ground handling standards', 'B. A theory stating that windscreen bird strikes are leading indicators of overall safety management failure', 'C. A principle that small violations and tolerated deviations create an environment where larger violations become normalised — organisations that tolerate minor rule-bending signal that safety standards are negotiable', 'D. A legal principle where pre-existing safety deficiencies reduce an operator\'s liability in subsequent accidents'],
  correct: 2,
  explanation: 'Applied to aviation, the broken windows theory suggests that tolerated minor deviations (consistently slightly exceeding speed limits, skipping low-risk checklist items) create a cultural signal that standards are optional. This erosion sets the stage for larger violations and eventually accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "group think" and how can it occur in a crew environment?',
  options: ['A. A regulatory concept requiring crew members to agree on all significant operational decisions', 'B. A phenomenon where the desire for group harmony overrides realistic appraisal of alternatives — crew members suppress doubts, avoid challenging the leader\'s position, and reach unanimity without genuinely exploring all options', 'C. A positive team dynamic where all crew members converge on the best solution through discussion', 'D. A training technique where student pilots practise collaborative decision-making with their instructor'],
  correct: 1,
  explanation: 'Groupthink in aviation occurs when crews avoid challenging the captain\'s assessment to maintain harmony. Warning signs include no devil\'s advocate, no explicit consideration of alternatives, and rapid consensus. Countered by explicitly soliciting challenges and considering alternatives before committing.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'A crew completes the before-landing checklist but is then distracted by an ATC frequency change. They forget to extend the landing gear. What type of error is this?',
  options: ['A. A violation — they intentionally skipped the gear check', 'B. A slip — they operated the wrong control due to a physical execution error', 'C. A mistake — they selected the wrong procedure for the flight phase', 'D. A lapse — a memory failure caused the omission of a step that was intended'],
  correct: 3,
  explanation: 'This is a lapse — a memory failure where the intended action (gear extension) was forgotten due to a distraction after the checklist was interrupted. Lapses are most common for routine, highly automated actions performed in distracting environments.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does a human factors investigation approach (as opposed to a blame-focused approach) seek to identify after an accident?',
  options: ['A. The insurance liability chain from the accident back through the maintenance organisation', 'B. The chain of events, system conditions, organisational factors, and latent conditions that combined to allow the accident — with the goal of systemic prevention rather than individual punishment', 'C. The crew member whose action or inaction was most directly responsible for the accident', 'D. The technical failure that was the root cause of the accident — once identified, human factors analysis is complete'],
  correct: 1,
  explanation: 'Human factors investigation seeks to understand the full accident causation chain — including latent organisational and systemic conditions that created the environment in which an active failure could cause an accident. Blame-focused approaches miss systemic factors and leave the system vulnerable to recurrence.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "point of no return" concept and how does it relate to decision-making?',
  options: ['A. The fuel point at which an aircraft can no longer return to its departure aerodrome — purely a fuel planning calculation', 'B. The threshold on final approach below which a go-around is not possible due to landing configuration', 'C. The last altitude from which a pilot can safely execute a forced landing — calculated from the current height and glide performance', 'D. A point in a situation beyond which a particular course of action becomes impossible or impractical — pre-defining this point in planning allows the pilot to make time-pressured decisions rationally without being influenced by sunk cost or plan continuation bias'],
  correct: 3,
  explanation: 'Pre-defining the point of no return (e.g. "if I haven\'t seen the runway by X, I will go around") converts a time-pressured, stress-affected in-flight decision into a previously considered, rational decision. This is particularly valuable for approach continuation decisions and weather diversions.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is self-reporting of fatigue difficult for pilots?',
  options: ['A. Fatigue impairs the same cognitive functions needed to accurately assess fatigue — subjective estimates of fatigue are consistently less severe than objective performance measures indicate', 'B. Pilots are legally prevented from reporting fatigue due to contractual obligations with operators', 'C. Reporting fatigue triggers mandatory medical examination that may result in licence suspension', 'D. Pilots accurately self-report fatigue but often cannot access a supervisor to communicate it before a flight'],
  correct: 0,
  explanation: 'Fatigue impairs the self-awareness needed to accurately assess one\'s own fatigue level. Studies consistently show that subjective fatigue ratings lag behind objective performance degradation — fatigued pilots underestimate how impaired they are.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors concern with highly automated modern aircraft?',
  options: ['A. Automation removes the PIC\'s legal authority over the aircraft by replacing human decision-making with computer logic', 'B. Automation increases pilot workload by requiring additional mode management inputs during every phase of flight', 'C. Automation makes aircraft significantly heavier, reducing range and performance margins', 'D. Automation can degrade manual flying skills, create mode confusion, promote complacency through reduced engagement, and produce automation surprise when systems behave unexpectedly'],
  correct: 3,
  explanation: 'While automation improves efficiency and reduces routine workload, it introduces new human factors risks: skill fade through disuse, mode confusion, automation complacency (reduced monitoring), and automation surprise (unexpected system behaviour). Managing these requires active strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What physiological effect does adrenaline have on pilot performance during an emergency?',
  options: ['A. Adrenaline has no cognitive effects — its action is purely cardiovascular and irrelevant to flight performance', 'B. Adrenaline immediately impairs all aspects of cognitive performance and should be countered by deep breathing', 'C. Adrenaline produces a short-term increase in alertness and physical performance but also narrows attention, can cause tremor, and may impair fine motor control and complex cognitive tasks', 'D. Adrenaline produces a prolonged improvement in cognitive performance lasting several hours after the emergency'],
  correct: 2,
  explanation: 'The adrenaline response mobilises energy for fight-or-flight but also narrows attention, increases heart rate, can cause tremor, and may impair fine motor control and complex analytical thinking. This is why trained, drilled emergency procedures outperform improvised responses during high-adrenaline emergencies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "cognitive reserve" and why is maintaining it important during flight?',
  options: ['A. Stored aeronautical knowledge drawn upon when procedures are unclear', 'B. Mental processing capacity available beyond what is required for the current task — provides the buffer needed to handle unexpected additional demands without becoming overloaded', 'C. The time available for decision-making between receiving an ATC clearance and executing it', 'D. Reserve fuel calculated to ensure adequate cognitive performance on extended flights'],
  correct: 1,
  explanation: 'Cognitive reserve is the available mental capacity above the minimum required for current tasks. Maintaining it means that unexpected events — extra ATC calls, weather changes, technical anomalies — can be absorbed without entering task saturation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the "sterile cockpit rule" specifically prohibit during critical phases of flight?',
  options: ['A. The use of autopilot below 1,000 ft AAL on approach', 'B. Non-essential communications, activities, and discussions not directly related to aircraft operation — including personal conversations, non-essential PA announcements, and non-critical paperwork', 'C. The use of personal electronic devices below 10,000 ft', 'D. ATC communication during the final approach segment'],
  correct: 1,
  explanation: 'The sterile cockpit rule prohibits non-essential activities during critical phases (typically below 10,000 ft or defined altitudes). Essential activities are those necessary for safe operation — normal checklists, ATC communications, and abnormal procedures are all permitted.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors basis for using checklist items in a challenge-and-response format rather than reading silently?',
  options: ['A. Challenge-and-response is faster because it eliminates the need to read each item carefully', 'B. Verbalising checklist items engages both auditory and verbal processing channels, provides a secondary check via the other crew member, and ensures the item is confirmed rather than merely seen', 'C. Silent reading is more thorough — verbalising checklist items increases the chance of distraction from ATC calls', 'D. Challenge-and-response is a regulatory requirement under CASR Part 91 for all multi-engine operations'],
  correct: 1,
  explanation: 'Vocalising checklist items adds auditory confirmation, engages the verbal processing channel (reducing the chance of merely seeing without consciously processing), and provides a cross-check from the second crew member who must confirm each item\'s state.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What does the PAPI indicate when the pilot sees all four lights as white?',
  options: ['A. The aircraft is on the correct glidepath', 'B. The runway is clear for landing', 'C. The aircraft is significantly above the glidepath', 'D. The aircraft is dangerously below the glidepath'],
  correct: 2,
  explanation: 'PAPI: all white = significantly high; 3 white/1 red = slightly high; 2 white/2 red = on path; 1 white/3 red = slightly low; all red = dangerously low. All white means the aircraft needs to descend to capture the correct glidepath.',
  reference: 'AIP AD 1.1'
},

{
  question: 'What is the most important single action a pilot can take if they recognise they are experiencing spatial disorientation?',
  options: ['A. Declare an emergency immediately and request radar vectors', 'B. Close eyes momentarily to reset the visual system, then re-establish orientation', 'C. Trust the flight instruments completely and fly the aircraft by reference to instruments only, regardless of what the vestibular system is indicating', 'D. Reduce speed immediately to provide more time to recover orientation'],
  correct: 2,
  explanation: 'The single most important action when experiencing spatial disorientation is to trust the instruments and fly the aircraft by reference to them. Any attempt to correct based on vestibular sensations will worsen the situation. This is also why strong instrument flying currency is essential.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "incapacitation" in a multi-crew context and what are its implications?',
  options: ['A. A condition that only arises from acute hypoxia or cardiac arrest — always immediately obvious', 'B. Any condition that prevents a crew member from performing their normal duties — can be subtle and difficult to detect; the other crew member must recognise it and assume control', 'C. Any condition that prevents the PIC from operating the controls — the FO must take over immediately', 'D. A legal term for licence suspension following a CASA medical audit'],
  correct: 1,
  explanation: 'Incapacitation can be obvious (loss of consciousness) or subtle (cognitive impairment, confusion, reduced responsiveness). Subtle incapacitation is more dangerous because the other crew member may not immediately recognise it. Regular cross-checks and challenge-response interactions help detection.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "regulatory compliance monitoring" in the context of operator safety management?',
  options: ['A. The process by which CASA monitors operator compliance with CASR through annual audits', 'B. A crew member\'s personal obligation to monitor their own compliance with CASR during each flight', 'C. The system by which aircraft weight and balance records are reviewed against actual fuel figures after each flight', 'D. An internal operator function that continuously monitors actual operations against regulations and procedures — identifying deviations before CASA does and using them to improve training and procedures'],
  correct: 3,
  explanation: 'Proactive regulatory compliance monitoring by operators uses safety assurance activities (line observations, audits, safety reports) to identify gaps between actual performance and regulatory requirements — allowing correction before incidents occur and demonstrating safety due diligence.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is meant by "effective communication" in a CRM context and what are its key elements?',
  options: ['A. Communication that achieves shared understanding between sender and receiver — requiring clarity, confirmation of receipt, verification of understanding, and feedback that allows errors to be caught and corrected', 'B. Effective communication is purely technical — using correct phraseology is the only relevant element', 'C. Effective communication means using the loudest and clearest voice possible on radio frequencies', 'D. Effective communication requires both crew members to have identical communication styles'],
  correct: 0,
  explanation: 'Effective CRM communication achieves shared understanding, not just transmission. It requires: clear message construction, confirmed receipt (acknowledgement), verified understanding (readback/paraphrase), and feedback that allows the sender to detect and correct misunderstandings.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the concept of "FORDEC" in emergency or abnormal situation management?',
  options: ['A. A fuel reserve calculation tool — Fuel On Reserve, Departure time, Estimated fuel, Consumption', 'B. An acronym for the five-step emergency communication procedure used before declaring MAYDAY', 'C. A maintenance documentation standard for recording abnormal events discovered during pre-flight inspection', 'D. A structured CRM decision model — Facts, Options, Risks & Benefits, Decision, Execution, Check — providing a framework for systematic abnormal situation assessment'],
  correct: 3,
  explanation: 'FORDEC is a CRM decision-making tool: gather the Facts, identify Options, assess Risks & Benefits of each option, make a Decision, Execute, and Check outcomes. It provides structure for complex abnormal situations where multiple options exist and analysis time allows.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the human factors significance of maintaining a "flight log" or "pilot logbook"?',
  options: ['A. Logbooks are required only for recency calculations — their value beyond this is minimal', 'B. The logbook is only a regulatory document — it has no independent human factors significance', 'C. Logbooks only matter during licence renewals — their value is administrative rather than operational', 'D. A flight logbook provides an objective record of experience and currency that supports accurate self-assessment, facilitates regulatory compliance verification, and creates a learning record that a pilot can use to identify patterns in their performance over time'],
  correct: 3,
  explanation: 'Beyond regulatory compliance, a flight logbook provides a factual record that supports accurate self-assessment of currency and recency. Reviewing logbooks can identify experience gaps, areas of underrepresentation, and currency that is lapsing — supporting proactive professional development.',
  reference: 'CASR 61.015'
},

{
  question: 'What does the aviation accident taxonomy term "improper procedure" refer to?',
  options: ['A. Executing a known procedure incorrectly — either due to error in execution or selection of the wrong procedure for the situation', 'B. Using a procedure from an outdated revision of the aircraft flight manual', 'C. Flying an approach procedure that is not published in the current Jeppesen or Airservices approach plates', 'D. Communicating with ATC using non-standard phraseology'],
  correct: 0,
  explanation: '"Improper procedure" describes a situation where a known procedure is executed incorrectly or the wrong procedure is selected. Unlike a violation, this is not necessarily intentional — it may result from error, confusion, or degraded performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "outcome bias" and why is it dangerous for pilot learning?',
  options: ['A. Judging the quality of a decision by its outcome rather than the reasoning behind it — a poor decision that turns out safely leads to overconfidence in that flawed decision process', 'B. Bias toward outcomes that minimise fuel consumption over those that minimise flight time', 'C. A tendency to judge accident investigations by their outcome rather than their methodology', 'D. A tendency to prefer outcomes that are physically achievable over theoretically optimal ones'],
  correct: 0,
  explanation: 'Outcome bias causes pilots to evaluate a decision as good because it worked out — not because the reasoning was sound. A poorly-reasoned decision that happened to turn out safely may be repeated, eventually leading to a bad outcome.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "loss of control in-flight" (LOC-I) and why is it the leading cause of fatal aviation accidents?',
  options: ['A. Aircraft entering flight envelope boundaries — stall, overspeed, unusual attitudes — that exceed the crew\'s ability to recover, often combined with spatial disorientation, startle, or inappropriate control inputs', 'B. A regulatory term for accidents caused by mechanical failure of primary flight controls', 'C. Any situation where the autopilot disconnects unexpectedly during cruise flight', 'D. A specific type of CFIT where the aircraft impacts terrain after entering a steep bank at low altitude'],
  correct: 0,
  explanation: 'LOC-I is the number one cause of fatal aviation accidents globally. It results from the aircraft exceeding the normal flight envelope in conditions where the crew cannot effect recovery — often due to spatial disorientation, startle response, or inappropriate control inputs.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of "assertiveness" in CRM and when is it particularly important?',
  options: ['A. The ability to communicate loudly and clearly in noisy cockpit environments', 'B. The ability to maintain firm control inputs against aerodynamic forces during upset recovery', 'C. The confidence to make decisions unilaterally without consulting other crew members', 'D. The willingness to express concerns and challenge incorrect actions — particularly important when a junior crew member has safety information the captain has not considered'],
  correct: 3,
  explanation: 'CRM assertiveness is the willingness to state safety concerns clearly and firmly regardless of crew hierarchy. It is critical when a junior crew member has information that could prevent an accident but hesitates due to deference.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is a "just culture" and how does it improve safety data quality?',
  options: ['A. A culture where all errors are excused — there are no consequences for any safety breach', 'B. Only senior management are held accountable — frontline errors are always considered blameless', 'C. A culture distinguishing honest errors (treated without punishment) from reckless violations — encouraging open reporting and producing richer, more complete safety data', 'D. A culture where all safety violations result in equal punishment regardless of intent'],
  correct: 2,
  explanation: 'A just culture increases reporting rates and completeness. When reporters fear punishment, they under-report or sanitise incident details. Just culture produces safety data that accurately reflects actual system risk, enabling effective preventive action.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What does research into "expertise" in pilots suggest about the relationship between experience and error rates?',
  options: ['A. Experience reduces errors only up to 500 hours — beyond this point, experience has diminishing returns', 'B. While experts perform routine tasks more efficiently, they can be more susceptible to certain errors — particularly slips and habitual action errors — because routine tasks are executed with less conscious monitoring', 'C. Error rates decrease linearly and continuously with increasing flight hours — more experience always means fewer errors', 'D. Experts make no errors — all aviation accidents involving experienced pilots result from exceptional circumstances beyond normal expertise'],
  correct: 1,
  explanation: 'Expertise improves performance on familiar tasks through automation but can increase vulnerability to certain error types — particularly slips and habitual actions on highly routine tasks performed without conscious monitoring. Experience also introduces hazardous attitudes like invulnerability and complacency.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the circadian rhythm and why is it relevant to pilot performance?',
  options: ['A. A variable cycle that resets instantly to any new time zone after 2 nights of local sleep', 'B. A 12-hour cycle governing hunger and satiety in pilots on shift work', 'C. A 90-minute sleep cycle determining dream frequency and memory consolidation', 'D. An approximately 24-hour biological cycle regulating alertness, temperature, and hormones — pilots operating during their circadian low (0200–0600) have measurably impaired performance regardless of prior sleep adequacy'],
  correct: 3,
  explanation: 'The circadian rhythm is an approximately 24-hour internal clock. Pilots operating during the circadian low point (approximately 0200–0600) have significantly impaired cognitive performance — an effect independent of how much sleep they got.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "crew mental model" and why is it more than the sum of individual SA?',
  options: ['A. The crew mental model equals individual SA — there is no additional benefit from two pilots comparing assessments', 'B. The crew mental model is the shared understanding constructed when both pilots communicate and integrate their individual SA — it is often more accurate and complete than either pilot\'s individual model because each may have perceived different elements', 'C. The crew mental model is the captain\'s mental model only — FO SA is a backup', 'D. The crew mental model is the average of both pilots\' individual SA assessments'],
  correct: 1,
  explanation: 'The shared crew mental model emerges from communication and integration of both crew members\' individual perceptions. Because each pilot may attend to different information sources, the integrated shared model may be more accurate and complete than either individual model. This is a key CRM benefit.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What does the concept of "sterile instrument scan" mean and when should it be applied?',
  options: ['A. A maintenance check requiring all cockpit instruments to be sterilised and calibrated on a scheduled basis', 'B. A regulatory requirement to maintain instrument currency using only instrument references once every 90 days', 'C. An instrument scan technique used exclusively for initial pilot training before external references are introduced', 'D. A disciplined, structured scan of all flight instruments prioritising the most critical parameters — applied when external visual references are unreliable or unavailable, ensuring no critical instrument is neglected'],
  correct: 3,
  explanation: 'A sterile instrument scan is a structured, prioritised scan of all critical flight instruments used when external visual references are unavailable or unreliable. It ensures all critical instruments receive regular attention and prevents fixation on a single instrument or neglect of others.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "transfer of control" in multi-crew operations and why must it be explicit?',
  options: ['A. The explicit verbal and physical exchange of aircraft control between PF and PM — must be unambiguous to prevent both pilots simultaneously manipulating controls or neither pilot believing themselves to be in control', 'B. The legal transfer of flight responsibility between crew members at the beginning and end of each duty period', 'C. The ATC transfer of radar coverage from one sector to another during en-route cruise', 'D. The automatic transfer of autopilot authority from the first officer\'s FCP to the captain\'s FCP during approach'],
  correct: 0,
  explanation: 'Explicit transfer of control ("You have control" — "I have control" — "You have control") prevents confusion about who is flying the aircraft. Implicit or assumed transfers have caused accidents where both pilots believed the other was flying, or where both were simultaneously providing contradictory inputs.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the human factors significance of "sterile cockpit violations" during approach and landing?',
  options: ['A. Sterile cockpit rules apply only to RPT operations — charter and private operations are exempt', 'B. Sterile cockpit violations are minor regulatory infractions with minimal safety significance', 'C. Non-essential conversation and activities during the approach and landing phase contribute to distraction, missed callouts, delayed responses to abnormal indications, and reduced SA — directly increasing accident risk', 'D. Violations only matter if they exceed 5 minutes in duration — brief interruptions have no measurable effect'],
  correct: 2,
  explanation: 'Sterile cockpit violations during approach and landing have been identified in accident investigations as contributing to missed callouts, delayed response to warnings, and reduced SA during the phase of flight where error consequences are most severe.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the ultimate goal of human factors training in aviation and how is it best assessed?',
  options: ['A. The ultimate goal is genuine behaviour change in the cockpit — applying SA, decision-making, and CRM skills in real operations — best assessed by observation of actual flight operations and honest self-evaluation rather than written tests alone', 'B. The ultimate goal is passing the human factors written examination — best assessed by written tests', 'C. The ultimate goal is memorising the five hazardous attitudes and IMSAFE checklist', 'D. The ultimate goal is regulatory compliance with CRM training hours requirements'],
  correct: 0,
  explanation: 'Human factors training is only valuable if it changes actual behaviour in the cockpit. The goal is not knowledge retention (passing tests) but genuine application of skills in real situations. Line-oriented flight training (LOFT), line checks, and honest personal reflection are more valid assessments than written examinations alone.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the human factors basis for "briefing the unexpected" before critical flight phases?',
  options: ['A. A technique used only in initial training — experienced crews rely on experience instead', 'B. Only required for flights involving passengers — cargo operations do not need threat briefings', 'C. Pre-briefing what to do if something unexpected occurs during a critical phase converts potential surprises into anticipated events — significantly reducing the startle response and speeding effective action when the event occurs', 'D. A regulatory requirement for all charter operations under CASR Part 135'],
  correct: 2,
  explanation: 'Briefing the unexpected before critical phases — "if we have an engine failure before V1..." — converts potential surprises into anticipated events. When the event occurs, it triggers a prepared response rather than a startle-surprise-analysis sequence, dramatically shortening the time to effective action.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the aviation significance of the "James Reason model" of accident causation?',
  options: ['A. It defined the current ATC phraseology standards in the AIP', 'B. It established the blood alcohol limits for aviation crew members in Australian regulation', 'C. It describes how accidents result from the combination of unsafe acts (active failures) and latent conditions — leading to the defence-in-depth approach and just culture principles that underpin modern aviation safety management', 'D. It created the current CASA medical certification standards for flight crew'],
  correct: 2,
  explanation: 'James Reason\'s work on human error and organisational accidents (Swiss cheese model, active failures vs latent conditions, just culture) fundamentally shaped modern aviation safety management — SMS frameworks, just culture policies, and multi-layer defence strategies all derive from his models.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of a thorough crew briefing before a non-normal procedure?',
  options: ['A. Briefings are a regulatory requirement under CASR Part 91 — their content is less important than their completion', 'B. Briefings are useful only for training flights — operational crews should handle non-normal events without preparation to maintain realistic situational responses', 'C. Crew briefings are only required when the crew has not previously flown together', 'D. A thorough briefing converts an unexpected event (which triggers startle) into an anticipated event (which triggers a trained response), significantly improving the speed and quality of the crew\'s response'],
  correct: 3,
  explanation: 'When a crew has briefed a potential non-normal event ("if we lose an engine on take-off, here\'s what we\'ll do"), that event transitions from a surprise (startle trigger) to an anticipated scenario (trained response trigger). This dramatically shortens the time from event to effective response.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "alarm fatigue" and how does it affect safety?',
  options: ['A. The reduction in alertness caused by monitoring alarm systems for extended periods without activation', 'B. A state where frequent nuisance or irrelevant alarms cause pilots to reduce responsiveness to all alarms — increasing the risk that a genuine alarm will be ignored or delayed', 'C. A condition where pilots become fatigued from the cockpit heat generated by alarm system electronics', 'D. Physical fatigue caused by responding to a large number of ATC calls on a busy frequency'],
  correct: 1,
  explanation: 'Alarm fatigue develops when frequent false or nuisance alarms cause desensitisation. Pilots who have repeatedly cancelled false alarms may delay or fail to respond to a genuine alarm. Aircraft and system design should minimise nuisance alerts.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "task saturation" describe and what are its consequences?',
  options: ['A. A state where demands exceed the pilot\'s processing capacity — resulting in task shedding, errors of omission, and reduced situational awareness — most dangerous during approach and landing in degraded conditions', 'B. The physical fatigue from controlling an aircraft manually for extended periods', 'C. A state where a pilot has too little to do — causing boredom and reduced vigilance', 'D. A state of optimal cognitive loading where the pilot is fully engaged and performance peaks'],
  correct: 0,
  explanation: 'Task saturation occurs when workload exceeds cognitive capacity. The pilot sheds lower-priority tasks, makes omission errors, and loses situational awareness. Approximately 50% of fatal accidents occur during approach and landing — a phase combining high workload with minimal margin for error.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "mental workload" and how does it relate to physical workload in aviation?',
  options: ['A. Physical workload always exceeds mental workload in aviation — physical endurance is the primary limitation', 'B. Mental workload is only relevant above FL180 — below that altitude physical workload dominates', 'C. Mental workload is the cognitive demand of processing information, making decisions, and managing tasks — it can be high even when physical workload (control forces, body position) is low, such as during a high-traffic instrument approach', 'D. Mental and physical workload are identical concepts — total workload is simply their sum'],
  correct: 2,
  explanation: 'Mental workload can be independently very high while physical workload is low — for example, an ILS approach in IMC with ATC frequency changes requires intense cognitive effort while physical control forces may be minimal. High mental workload without high physical workload is easy to underestimate.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary cause of runway incursions from a human factors perspective?',
  options: ['A. Failures in perception, attention, or communication — pilots misread signs, miss ATC instructions, or lose positional awareness on complex aerodrome layouts', 'B. Aircraft performance characteristics that prevent rapid stopping', 'C. Poor weather reducing visibility below RVR minimums during taxi', 'D. Mechanical failures in surface movement guidance systems'],
  correct: 0,
  explanation: 'Most runway incursions result from human error: misreading signs or markings, incorrect readback or hearback of ATC instructions, losing positional awareness on complex aerodrome surfaces, and distraction during taxi.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the somatogravic illusion and when is it most dangerous?',
  options: ['A. A false horizon illusion caused by cloud layers — most common at night over water', 'B. An illusion during deceleration where the pilot feels nose-low and pitches up — most common on approach', 'C. A spinning sensation caused by prolonged turns — most common during instrument approaches', 'D. An illusion during rapid acceleration where the pilot perceives nose-up pitch and may push forward on controls — most dangerous during night or IMC take-off'],
  correct: 3,
  explanation: 'During rapid acceleration (take-off), otolith organs interpret forward acceleration as nose-up pitch. In night or IMC conditions the pilot may push forward on controls to correct the false pitch-up sensation, creating a nose-low attitude shortly after take-off.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the aviation human factors concept of "graceful degradation" describe?',
  options: ['A. The regulatory process for reducing certification standards for aging aircraft types', 'B. The physical deformation of aircraft components under stress — acceptable within certified limits', 'C. The elegant acceptance of operational failure by experienced pilots who recognise their limits', 'D. A system property where performance degrades gradually and predictably as conditions worsen — providing warning and time for corrective action rather than sudden catastrophic failure'],
  correct: 3,
  explanation: 'Graceful degradation describes a system that warns and degrades progressively rather than failing suddenly without warning. In human performance terms, graduated warning signs of fatigue, stress, or approaching limits provide opportunities for corrective action before total failure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does obesity affect a pilot\'s risk profile from a human factors perspective?',
  options: ['A. Obesity affects only physical endurance — cognitive performance is not related to body weight', 'B. Obesity is associated with obstructive sleep apnoea, cardiovascular disease risk, and daytime sleepiness — all of which can impair performance or cause sudden incapacitation', 'C. Obesity has no effect on in-flight risk — only aerobic fitness matters for aviation operations', 'D. Obesity only affects cockpit comfort during long flights and has no physiological safety implication'],
  correct: 1,
  explanation: 'Obesity is associated with OSA (which impairs sleep quality), increased cardiovascular disease risk, and excessive daytime sleepiness. These increase the risk of in-flight incapacitation or significant performance impairment.',
  reference: 'CASR Part 67 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "incapacitation" in a multi-crew context mean and why is subtle incapacitation particularly dangerous?',
  options: ['A. Any condition preventing a crew member from performing normal duties — subtle incapacitation (cognitive impairment, confusion) is dangerous because the other crew member may not immediately recognise it', 'B. A legal term for licence suspension following a CASA medical audit', 'C. Any condition preventing PIC from operating controls — always immediately obvious like unconsciousness', 'D. A condition arising only from acute hypoxia or cardiac arrest — never subtle'],
  correct: 0,
  explanation: 'Incapacitation can be obvious (loss of consciousness) or subtle (cognitive impairment, confusion, reduced responsiveness). Subtle incapacitation is more dangerous because it may not be immediately recognised. Regular cross-checks help detect it.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "population stereotypes" refer to in cockpit design?',
  options: ['A. Design standards that account for the physical dimensions of the average pilot population', 'B. Statistical data about the types of errors most commonly made by different pilot populations', 'C. Widely shared, culturally or biologically ingrained expectations about how controls work — e.g. turning a knob clockwise increases a value, moving a lever forward increases thrust — violating these expectations increases error rates', 'D. The demographic profiles of pilots for whom cockpit ergonomics are optimised'],
  correct: 2,
  explanation: 'Population stereotypes are near-universal expectations about control direction and function. Cockpit designs that violate these stereotypes (e.g. a throttle that reduces power when pushed forward) require conscious override of the stereotypic response, increasing error rates particularly under stress.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the difference between "skill-based" and "knowledge-based" cognitive processing and what types of errors are associated with each?',
  options: ['A. Skill-based and knowledge-based processing use the same cognitive mechanisms — the distinction is only theoretical', 'B. Skill-based processing applies to CPL holders; knowledge-based to ATPL holders — determined by licence type', 'C. Skill-based processing is automated and efficient for familiar tasks — prone to slips and habit errors. Knowledge-based processing is deliberate and effortful for novel situations — prone to mistakes from incorrect mental models', 'D. Skill-based processing is physical (controlling the aircraft); knowledge-based is mental (navigation) — both have equal error rates'],
  correct: 2,
  explanation: 'Skill-based processing is fast and automatic for familiar tasks but prone to slips (wrong action executed) and habit errors (old habit runs in new context). Knowledge-based processing is slow and deliberate for novel situations but prone to mistakes when the mental model of the situation is incorrect.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What effect does shift work have on sleep quality compared to regular daytime employment?',
  options: ['A. Night shift workers accumulate more total sleep hours due to reduced social obligations during the day', 'B. Shift work has no effect on sleep quality provided workers receive the same number of total hours', 'C. Shift work, particularly night work and rotating rosters, chronically degrades sleep quality and duration because sleep occurs at a circadian phase when the body is scheduled for wakefulness', 'D. Early morning starts are less disruptive to sleep quality than late finishes at equivalent total duty times'],
  correct: 2,
  explanation: 'Shift workers, particularly those working nights or on rotating rosters, typically sleep 1–4 hours less per 24-hour period than day workers. Daytime sleep is shorter and less restorative because it fights the circadian drive for wakefulness, resulting in cumulative sleep debt.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is the approach and landing phase disproportionately represented in aviation accidents?',
  options: ['A. Aircraft mechanical failures are more common during the approach due to reduced thrust settings', 'B. Most weather-related accidents occur during the approach because weather is assessed before departure and not re-evaluated during cruise', 'C. ATC workload peaks during arrivals, increasing the chance of communication errors between ATC and the crew', 'D. The approach combines maximum workload, minimum altitude margin, reduced energy, and the highest consequence for error — all human performance risks converge in the shortest phase of flight'],
  correct: 3,
  explanation: 'The approach and landing phase concentrates multiple risk factors: high workload, low altitude, energy management requirements, visual illusion exposure, and possible IMC transition. Approximately 50% of fatal accidents occur in this phase despite it representing only 5% of flight time.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot feels a strong sensation of banking to the right but instruments show wings level. What should the pilot do?',
  options: ['A. Trust the body sensation and bank left to correct the perceived bank', 'B. Declare an emergency and request radar vectors to an aerodrome', 'C. Trust the instruments and maintain the wings-level attitude shown, despite the physical sensation', 'D. Close eyes to eliminate visual confusion and rely purely on vestibular sensation'],
  correct: 2,
  explanation: 'When instruments contradict sensory inputs, the instruments must be trusted. The vestibular system is unreliable in the absence of external visual references. Acting on false sensations is a leading cause of fatal accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors argument for why "error-free" flying is not a realistic or useful safety target?',
  options: ['A. It is a realistic target — professional pilots who train sufficiently can achieve near-zero error rates', 'B. Error-free flying is the regulatory standard for commercial operations — deviating from this standard is a violation', 'C. Error-free flying is achievable with modern automation — human error is eliminated when autopilot is engaged', 'D. Humans are error-prone by nature — aiming for error-free performance sets an impossible target that produces blame cultures and reduced reporting when errors inevitably occur; effective safety comes from error management, not error elimination'],
  correct: 3,
  explanation: 'Expecting error-free performance sets an impossible standard that creates blame when inevitable errors occur, reduces error reporting (because admitting an error means admitting failure), and misses the systemic factors that created the error environment. Error management — detecting, catching, and correcting errors — is a more realistic and effective safety strategy.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is dehydration and how does it affect pilot cognitive performance?',
  options: ['A. Dehydration only affects physical strength — cognitive performance is unaffected until severe dehydration', 'B. Even mild dehydration (1–2% of body weight) causes measurable decrements in concentration, reaction time, and decision-making — the low-humidity aviation environment promotes dehydration', 'C. Dehydration improves alertness by activating the body\'s stress response', 'D. Dehydration has no measurable effect on cognition at the levels experienced during normal flight'],
  correct: 1,
  explanation: 'Even mild dehydration (1–2% body weight) significantly impairs cognitive performance, concentration, and reaction time. The low-humidity, pressurised aviation environment promotes dehydration through respiratory moisture loss, making proactive fluid intake important.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How long does full dark adaptation take after bright light exposure?',
  options: ['A. 20–30 minutes — rhodopsin regeneration in rod photoreceptors takes this long after bright light bleaching', 'B. 1–2 minutes — the same time as the pupils take to dilate fully', 'C. 45–60 minutes — dark adaptation is only relevant for extended night flights', 'D. 5–10 minutes — the rhodopsin cycle regenerates rapidly'],
  correct: 0,
  explanation: 'Full dark adaptation takes approximately 20–30 minutes. Rhodopsin (visual purple) in the rod photoreceptors is bleached by bright light and takes up to 30 minutes to fully regenerate. Even brief bright light exposure (e.g. another aircraft\'s landing light) significantly degrades night adaptation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "vigilance decrement" and when is it most pronounced?',
  options: ['A. The reduction in instrument scanning frequency that occurs during approach preparation', 'B. The reduction in alertness during the circadian peak of performance — corrected by increasing workload', 'C. The decrease in visual acuity that occurs after prolonged exposure to cockpit instrument lighting', 'D. The progressive decline in ability to detect rare, critical signals during sustained monotonous monitoring — most pronounced after approximately 30–45 minutes of sustained monitoring'],
  correct: 3,
  explanation: 'Vigilance decrement is the progressive decline in signal detection performance during sustained monotonous monitoring tasks. Pilots on long cruise legs become less likely to detect subtle instrument anomalies, traffic, or weather changes after 30–45 minutes of monotonous monitoring.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the graveyard spiral and what causes it?',
  options: ['A. A high-speed spiral dive caused exclusively by wake turbulence encounter', 'B. A stall-spin sequence caused by abrupt control inputs at low speed near the ground', 'C. An undetected coordinated turn that progressively steepens, leading to a nose-low diving turn that can overstress the aircraft', 'D. A nose-low spiral caused by trim changes — corrected by forward pressure on the controls'],
  correct: 2,
  explanation: 'In the graveyard spiral, a coordinated banked turn is not sensed by the vestibular system. The pilot perceives descent but not bank, and pulls back on controls, tightening the spiral and increasing speed. It is a leading cause of IMC accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "situation assessment" require at the three levels of situational awareness?',
  options: ['A. Situation assessment is an ATC function — pilots receive assessment outputs as traffic advisories', 'B. Situation assessment is only relevant to Level 1 SA — gathering raw instrument data', 'C. Integrating all three SA levels: perceiving current state (Level 1), understanding its significance (Level 2), and projecting future states (Level 3) to form a complete picture supporting good decisions', 'D. Situation assessment is the post-flight debriefing of events — it occurs after all three levels of SA'],
  correct: 2,
  explanation: 'Situation assessment requires all three SA levels: perceiving elements (Level 1 — what are the instruments showing?), comprehending their meaning (Level 2 — what does this mean for my flight?), and projecting future states (Level 3 — where will this lead if nothing changes?).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the physiological basis of the "second wind" phenomenon and why should pilots be cautious about it?',
  options: ['A. A genuine recovery from fatigue caused by a natural sleep-pressure release during extended wakefulness', 'B. A paradoxical improvement in mood and apparent alertness that can occur during severe fatigue — driven by stress hormones, it creates a false sense of recovery that masks continuing performance degradation', 'C. A physiological reflex where the body temporarily increases adrenaline output at regular intervals during sustained wakefulness', 'D. A phenomenon specific to pilots over 50 where afternoon alertness exceeds morning alertness'],
  correct: 1,
  explanation: 'The "second wind" is a stress-hormone-driven apparent improvement in mood and alertness during severe fatigue. It creates a false sense of recovery while actual performance degradation continues or worsens. It is particularly deceptive for pilots assessing their own fitness to fly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a "near miss" or "serious incident" in aviation safety terms and why are they valuable?',
  options: ['A. An occurrence in which an accident nearly happened — valuable because they reveal system vulnerabilities with lower cost than an actual accident', 'B. An incident involving only minor damage — it has minimal safety value as no injury occurred', 'C. A term used exclusively by ATSB for mandatory reporting purposes — not operationally relevant', 'D. An incident involving near-midair collision only — other hazardous events are classified differently'],
  correct: 0,
  explanation: 'Near misses are situations where an accident nearly occurred. They are valuable safety indicators — the same factors that cause near misses cause accidents. Reporting and analysing them allows systemic corrections before a fatal outcome.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the significance of the "dirty dozen" in aviation maintenance human factors?',
  options: ['A. A list of 12 aircraft types that historically have the highest maintenance error rates', 'B. A CASA maintenance audit checklist with 12 mandatory inspection items', 'C. A LAME training syllabus covering 12 core competencies for aircraft maintenance', 'D. Twelve common preconditions for maintenance errors including lack of communication, distraction, lack of knowledge, pressure, and fatigue'],
  correct: 3,
  explanation: 'The "dirty dozen" identifies 12 common preconditions for maintenance errors: lack of communication, complacency, lack of knowledge, distraction, lack of teamwork, fatigue, lack of resources, pressure, lack of assertiveness, stress, lack of awareness, and norms (normalised deviance).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "cognitive flexibility" allow an expert pilot to do that less experienced pilots cannot do as effectively?',
  options: ['A. Memorise new emergency procedures more quickly when required', 'B. Execute physical control inputs more accurately through well-developed proprioceptive feedback', 'C. Maintain focus on one instrument while monitoring all others simultaneously', 'D. Shift between automated habitual processing for routine tasks and deliberate analytical reasoning for novel situations — applying the appropriate cognitive mode for each situation'],
  correct: 3,
  explanation: 'Cognitive flexibility allows appropriate switching between skill-based automation (efficient for routine) and knowledge-based analytical reasoning (necessary for novel situations). Less experienced pilots may apply the wrong mode — attempting to analyse simple automated tasks or applying habit to genuinely novel situations.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does task interference (dual-tasking) affect pilot performance during high-workload phases?',
  options: ['A. Task interference is irrelevant in modern glass cockpit aircraft because automation manages most secondary tasks', 'B. Attempting to perform two cognitively demanding tasks simultaneously reduces performance on both — particularly when both tasks compete for the same cognitive resource', 'C. Performing two cognitively demanding tasks simultaneously improves performance by increasing arousal', 'D. Well-practised pilots can perform two cognitive tasks simultaneously with no performance penalty'],
  correct: 1,
  explanation: 'Dual-tasking degrades performance on both tasks when they compete for limited cognitive resources. Tasks using the same sensory modality (two auditory tasks) are particularly prone to interference. Managing task prioritisation is critical during high-workload phases.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situation-based training" in human factors and CRM education?',
  options: ['A. Training assessed only through written examination rather than practical evaluation', 'B. Training that presents realistic, complex scenarios requiring integrated technical and non-technical skill application — as opposed to training individual skills in isolation, this builds the integrated skills required for real-world operations', 'C. Training that focuses exclusively on accident scenarios from official investigation reports', 'D. Training that takes place on an active aerodrome — providing realistic environmental conditions'],
  correct: 1,
  explanation: 'Situation-based training presents realistic scenarios requiring simultaneous application of technical skills, SA, decision-making, and CRM. This builds the integrated, contextual skills needed for real-world operations, unlike isolated skill drills that do not require integration.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the effect of high cockpit temperature on pilot performance?',
  options: ['A. High cockpit temperature has no measurable effect on cognitive performance — only physical work is affected', 'B. Heat improves performance by increasing core body temperature toward the optimal range', 'C. High temperature increases adrenaline production, temporarily improving decision-making speed', 'D. Moderate heat reduces alertness and concentrationl; combined with dehydration, performance can degrade significantly'],
  correct: 3,
  explanation: 'Elevated cockpit temperature reduces alertness and concentration, promotes drowsiness, and — combined with dehydration — significantly degrades performance. Simple tasks are least affected; complex tasks requiring sustained attention are most affected.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the runway slope illusion and how does it affect glidepath perception?',
  options: ['A. A steeply upsloping runway makes the approach appear too low, causing overshooting', 'B. A downsloping runway makes the approach appear too high, causing the pilot to fly lower — risking undershooting', 'C. An upsloping runway makes the normal approach angle appear too high, causing the pilot to lower the nose and fly below the safe glidepath', 'D. A sloping runway has no effect on perceived approach angle — only PAPI provides accurate guidance'],
  correct: 2,
  explanation: 'An upsloping runway makes the normal approach angle appear too high, causing the pilot to unconsciously lower the nose and fly below the safe glidepath. A downsloping runway creates the opposite illusion.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does high ambient workload affect short-term memory capacity?',
  options: ['A. Short-term memory capacity is fixed by biology and cannot be affected by workload conditions', 'B. High workload has no effect on short-term memory capacity below the threshold of clinical stress', 'C. High workload expands short-term memory capacity through adrenaline-driven heightened alertness', 'D. High workload competes for the same limited cognitive resources as short-term memory, effectively reducing the number of items that can be actively maintained — leading to forgetting of earlier items'],
  correct: 3,
  explanation: 'Working memory and attentional resources draw on a common limited cognitive pool. High workload consumes much of this capacity, reducing the items that can be actively maintained in working memory. This is why ATC clearances are read back — the readback encodes the clearance before it can be displaced by new incoming information.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a "safety culture" and what are its key characteristics in a well-functioning aviation organisation?',
  options: ['A. The safety training delivered to all new employees during induction', 'B. A legally mandated set of safety procedures requiring CASA documentation approval', 'C. A shared set of values and behaviours where safety is genuinely prioritised — characterised by informed, reporting, just, flexible, and learning organisational cultures', 'D. The safety equipment carried on aircraft as required by minimum equipment lists'],
  correct: 2,
  explanation: 'A positive safety culture (Reason\'s model) is characterised by: being informed (using safety data), reporting (open reporting encouraged), being just (distinguishing errors from violations), being flexible (adapting to novel hazards), and learning (acting on safety information).',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the "out-of-the-loop" syndrome in highly automated cockpits?',
  options: ['A. A communication failure where ATC no longer has radar contact with the aircraft', 'B. Reduced mental engagement from passive automation monitoring, leaving the pilot poorly positioned to intervene effectively when automation fails or reaches its limits', 'C. A state of navigational uncertainty when operating beyond the range of ground-based navaids', 'D. A technical fault where the autopilot disconnects without the crew\'s knowledge'],
  correct: 1,
  explanation: '"Out of the loop" describes the reduced mental model and engagement that develops when automation handles all tasks passively. When the automation fails or an unexpected event occurs, the out-of-loop pilot is poorly positioned to recognise the situation and respond correctly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "implicit hazard perception" compared to "explicit hazard perception" in pilot judgement?',
  options: ['A. Explicit perception is conscious awareness of a specific hazard; implicit perception is a general unease that "something is not right" — both are valid SA signals that should be acted upon', 'B. Implicit perception is conscious deliberate scanning; explicit perception is automatic detection without conscious effort', 'C. Implicit perception is relevant to maintenance; explicit perception applies to flight operations only', 'D. They are identical concepts — the distinction is only academic'],
  correct: 0,
  explanation: 'Explicit hazard perception is consciously identifying a specific hazard. Implicit perception — a vague sense that something is wrong before being able to articulate what — is a valid early warning signal. Dismissing this sense without investigation has preceded many accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a violation in human error terms and how does it differ from an error?',
  options: ['A. A violation and an error are identical — both result in the same outcome regardless of intent', 'B. Violations apply only to regulatory breaches; errors apply only to procedural deviations', 'C. A violation is an intentional deviation from a rule or procedure (even if well-intentioned); an error is an unintentional deviation', 'D. A violation only occurs when the pilot is aware of the regulation they are breaching; an error occurs unknowingly'],
  correct: 2,
  explanation: 'A violation is an intentional act — the pilot chooses to deviate from a rule or procedure. This distinguishes it from an error, which is unintentional. Violations may be routine (cutting corners), exceptional (unique situation), or optimising (efficiency-driven).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "decision fatigue" and how does it affect pilots on long duty days?',
  options: ['A. The inability to make any decision after a critical decision fails — pilots shut down cognitively after a significant in-flight event', 'B. A progressive degradation in the quality of decisions made after a long series of decisions — later decisions in a duty day tend to be more impulsive, risk-tolerant, or default to inaction', 'C. A cognitive condition specific to highly complex aircraft types — not applicable to light aircraft operations', 'D. A reduction in physical energy that makes it harder to move flight controls accurately during long duties'],
  correct: 1,
  explanation: 'Decision fatigue is the degradation in decision quality that results from sustained decision-making across a long duty period. Later decisions tend toward default options, risk acceptance, or indecision. This is why demanding decisions late in a duty day (e.g. a weather diversion at the end of a long charter day) are particularly hazardous.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the SHELL model\'s Liveware-Hardware (L-H) interface describe?',
  options: ['A. The interface between the maintenance engineer and the aircraft documentation system', 'B. The interface between the pilot and the physical aircraft — controls, displays, seat design, and instrument layout — mismatches here cause equipment-related errors', 'C. The interface between the pilot and air traffic control computers', 'D. The connection between flight crew and the airline\'s computerised rostering system'],
  correct: 1,
  explanation: 'The L-H interface in the SHELL model covers the physical relationship between the human operator and the equipment they use — controls, displays, ergonomics, and cockpit layout. Poorly designed controls that violate population stereotypes or natural mapping create L-H interface failures.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "fixation" in an aviation human factors context?',
  options: ['A. The pilot\'s eyes fixing on a point outside for visual navigation', 'B. The process of landing an aircraft at a specific aerodrome without fuel for an alternate', 'C. A state of mental focus that improves accuracy during precision instrument approaches', 'D. An unhealthy preoccupation with one instrument or task to the exclusion of others, leading to loss of overall situational awareness'],
  correct: 3,
  explanation: 'Fixation occurs when a pilot focuses intently on one instrument, problem, or task and loses awareness of everything else. It is a common factor in accidents where the crew was absorbed with a minor technical issue while the aircraft entered an unsafe state.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "inattentional blindness" and why is it relevant to traffic scanning?',
  options: ['A. Temporary blindness from sudden bright light exposure after extended low-light adaptation', 'B. A scanning technique where the pilot focuses on instruments rather than outside visual cues', 'C. The inability to see objects against a low-contrast background such as white aircraft against cloud', 'D. The failure to perceive an unexpected stimulus even when looking directly at it — caused by intense focus on another task, a pilot absorbed by a navigation problem may not see a conflicting aircraft'],
  correct: 3,
  explanation: 'Inattentional blindness occurs when the brain fails to process an unexpected stimulus because attention is focused elsewhere. Even a clearly visible conflicting aircraft may not be perceived by a pilot intensely focused on another task.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is hypoxia, and what makes it particularly dangerous for pilots?',
  options: ['A. Excess oxygen — typically occurring above FL350; pilots feel extremely alert before losing consciousness', 'B. Overbreathing — begins above FL250 in pressurised aircraft and causes tingling and dizziness', 'C. Insufficient oxygen to the brain — impairs the very cognitive functions needed to recognise its own symptoms, creating a false sense of wellbeing while performance is severely degraded', 'D. Nitrogen narcosis — a narcotic effect from diving that affects pilots who fly too soon after scuba diving'],
  correct: 2,
  explanation: 'Hypoxia is insufficient oxygen supply to the brain. Its most dangerous characteristic is that it impairs the brain\'s ability to recognise impairment — pilots often feel euphoric and confident while severely cognitively degraded.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "PACE" model used for in CRM assertiveness training?',
  options: ['A. A structured escalation model for asserting a safety concern — Probe, Alert, Challenge, Emergency', 'B. A weather assessment — Precipitation, Atmosphere, Ceiling, Elevation', 'C. A fuel calculation checklist — Planned, Actual, Contingency, Emergency', 'D. A performance assessment — Proficiency, Accuracy, Competence, Efficiency'],
  correct: 0,
  explanation: 'The PACE model provides a structured escalation path: Probe (gather information), Alert (raise concern), Challenge (strongly assert concern), Emergency (take control if life is at risk). It gives junior crew a framework for escalating concerns without bypassing hierarchy prematurely.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the physiological effect of sustained vibration on pilot performance?',
  options: ['A. Sustained vibration improves alertness through stimulation — relevant to helicopter operations', 'B. Vibration has no measurable effect on performance below the threshold that is structurally damaging to the aircraft', 'C. Sustained vibration causes fatigue, impairs instrument reading accuracy, increases muscle tension, and over time may cause musculoskeletal injury — particularly relevant in helicopter and piston propeller aircraft', 'D. Vibration only affects performance when it exceeds 10 Hz — low-frequency vibration in large aircraft has no human performance impact'],
  correct: 2,
  explanation: 'Sustained vibration — common in piston aircraft and helicopters — causes physical fatigue, impairs fine motor control and instrument reading accuracy, and increases overall workload. Long-term exposure causes musculoskeletal disorders. It is a significant occupational health concern for rotary-wing pilots.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "psychological safety" in a crew environment describe?',
  options: ['A. The mental health screening requirement for all new commercial pilots', 'B. The crew environment in which CRM counselling is available after critical incidents', 'C. The absence of psychological conditions such as anxiety that could impair flight performance', 'D. A crew climate in which team members feel safe to speak up, raise concerns, report errors, and ask for help without fear of ridicule or punishment — essential for effective CRM and safety reporting'],
  correct: 3,
  explanation: 'Psychological safety is the belief that one can speak up without fear of negative consequences. It is foundational to effective CRM — without it, crew members withhold safety information, avoid reporting errors, and defer to authority even when they have critical contrary information.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is a non-technical skill (NTS) and why are NTS assessed alongside technical skills in flight evaluations?',
  options: ['A. NTS is an acronym for non-transponder standard — relevant to aircraft operating in uncontrolled airspace', 'B. NTS are cognitive, social, and personal resource management skills (situation awareness, decision-making, CRM, workload management, leadership) — assessed alongside technical skills because they are as important as technical proficiency in accident prevention', 'C. NTS refers to administrative competencies such as flight planning and documentation — assessed separately from flying', 'D. Non-technical skills are assessed only in initial training — type ratings focus exclusively on technical proficiency'],
  correct: 1,
  explanation: 'Non-technical skills include SA, decision-making, CRM, leadership, and workload management. Research shows that the majority of accidents involve NTS failures alongside or preceding technical failures. Modern flight evaluation explicitly assesses both.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "cognitive miserliness" and how does it relate to aviation decision-making?',
  options: ['A. The tendency to use the least cognitively demanding strategy available — usually fast, intuitive heuristics — rather than effortful analytical thinking, even when the situation warrants careful analysis', 'B. A condition where pilots minimise paperwork to save administrative time', 'C. A regulatory concept where pilots minimise deviation from cleared routes to save fuel', 'D. The reluctance to share SA information with the co-pilot to preserve authority'],
  correct: 0,
  explanation: 'Cognitive miserliness describes the human tendency to minimise cognitive effort — defaulting to fast, automatic, heuristic thinking rather than slow, effortful, analytical thinking. In aviation, this is appropriate for routine tasks but can be dangerous for novel or complex decisions that warrant deliberate analysis.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is the period immediately after take-off particularly prone to somatogravic illusion?',
  options: ['A. Because the cockpit heating is at maximum during climb-out, promoting early fatigue and cognitive impairment', 'B. Because the aircraft transitions from ground effect to free air, creating a sudden pitch change that confuses the vestibular system', 'C. Because rapid acceleration during the take-off roll and initial climb strongly stimulates the otolith organs, creating a false nose-up sensation that may cause the pilot to push forward on the controls', 'D. Because engine noise peaks during climb-out, masking aural warnings and distracting the pilot from attitude monitoring'],
  correct: 2,
  explanation: 'During take-off acceleration, the forward acceleration is interpreted by the otolith organs as a nose-up pitch. If the pilot is not on instruments or has lost their external horizon reference (night, low cloud), this may cause an instinctive forward push on the controls, creating a dangerous nose-low attitude shortly after take-off.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "gate" concept in threat and error management?',
  options: ['A. A runway holding point — relevant to runway incursion prevention', 'B. A defined decision point at which a specific safety criterion must be met or a safety action (such as going around) will be taken — pre-defining the gate removes the decision from the high-pressure environment', 'C. The physical gate at a terminal building — relevant to boarding procedures only', 'D. ATC-assigned departure gates for instrument departures'],
  correct: 1,
  explanation: 'In TEM, a "gate" is a pre-defined decision point — for example, "if the aircraft is not stabilised by 1,000 ft AAL, we will go around." Pre-defining gates converts in-flight decisions into pre-planned commitments, countering plan continuation bias at critical moments.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "task shedding" and when does it typically occur?',
  options: ['A. A deliberate workload management technique where tasks are completed sequentially rather than in parallel', 'B. The process of transferring radio communications to a co-pilot during approach to reduce PIC workload', 'C. The planned delegation of tasks to automation before a high-workload phase of flight', 'D. The unplanned dropping of lower-priority tasks as workload exceeds capacity — the pilot focuses on what appears most urgent and unconsciously stops attending to other tasks'],
  correct: 3,
  explanation: 'Task shedding occurs unintentionally when cognitive capacity is overwhelmed. The pilot focuses on the perceived priority task (controlling the aircraft, answering ATC) and stops monitoring other items (fuel, weather, time). Important tasks shed during saturation often remain unsensed until a serious secondary problem develops.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is a head-on approaching aircraft the most difficult to detect visually?',
  options: ['A. Its position in the visual field appears as a stationary dot with no apparent movement — the human visual system detects movement, making a stationary target much harder to see', 'B. It approaches from the sun\'s direction and is masked by glare', 'C. It is in the pilot\'s blind spot directly ahead due to windscreen framing', 'D. It is difficult because both aircraft are at the same altitude sharing the same visual horizon'],
  correct: 0,
  explanation: 'A head-on aircraft subtends the same angular position in the visual field and appears as a stationary dot growing slowly in size. The human visual system is most sensitive to movement — a stationary target is hard to detect. It can grow from invisible to collision-sized in seconds.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the flicker vertigo effect and what causes it?',
  options: ['A. A disorienting or convulsive response triggered by light flickering at certain frequencies, typically caused by a rotating propeller or helicopter rotor in sunlight', 'B. A form of motion sickness triggered by turbulence in cloud', 'C. Visual blur caused by prolonged focus on close instruments in a poorly lit cockpit', 'D. Dizziness caused by rapid altitude changes in unpressurised aircraft'],
  correct: 0,
  explanation: 'Flicker vertigo (photic driving) can be triggered when light flickers at 4–20 Hz, such as sunlight strobing through a propeller or rotor. It can cause nausea, disorientation, or in rare cases seizures in susceptible individuals.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors explanation for why "rushed" approaches are more likely to be unstabilised?',
  options: ['A. Time pressure and workload during a rushed approach promote task shedding, reduce monitoring quality, and leave less time for configuration and speed management — all contributing to unstabilised conditions', 'B. Rushing approaches causes engine anomalies that change the aircraft\'s performance characteristics', 'C. Rushed approaches are only unstabilised due to wind changes — not human factors causes', 'D. Rushed approaches increase fuel consumption, causing fuel imbalance that destabilises the aircraft'],
  correct: 0,
  explanation: 'Rushed approaches combine high workload with inadequate time — a recipe for task shedding, reduced monitoring, and inadequate configuration/speed management. The resulting instability creates an approach from which continuation is high-risk.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of "mental simulation" in pre-flight planning?',
  options: ['A. Mentally "flying" the planned route or approach before the flight — identifying potential hazards, workload peaks, and contingency decision points to improve preparedness', 'B. The use of computerised flight planning software to simulate weather effects on the planned route', 'C. A training technique used only by student pilots learning new procedures', 'D. Using a simulator to practise the planned flight before executing it operationally'],
  correct: 0,
  explanation: 'Mental simulation (mental rehearsal) of the planned flight allows the pilot to identify potential threats, high-workload segments, and decision points before they occur. This pre-briefing converts potential surprises into anticipated events, improving response quality.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "8-hour bottle to throttle" rule and does it guarantee fitness to fly?',
  options: ['A. A rule requiring 8 hours between consuming alcohol and commencing any aviation-related duty including briefings', 'B. A rule requiring at least 8 hours between the last alcoholic drink and commencing flight — it is a minimum requirement, not a guarantee of fitness', 'C. An industry standard only — there is no regulatory minimum time between alcohol and flight in Australia', 'D. A mandatory 8-hour rest period after landing — it has no relation to alcohol consumption'],
  correct: 1,
  explanation: 'The 8-hour rule (CASR 91.695) is a minimum — it does not guarantee the pilot is fit to fly. Alcohol metabolism varies by individual, body weight, and amount consumed. A pilot may still be impaired after 8 hours.',
  reference: 'Civil Aviation Act 1988 s.30DB / CASR 91.695'
},

{
  question: 'What is the human factors significance of maintaining "professional boundaries" in cockpit communications?',
  options: ['A. Professional boundaries are regulatory limits on the duration of crew conversations during flight', 'B. Maintaining professional focus on flight-related communication during critical phases while permitting relationship-building communication during low-workload phases optimises both CRM effectiveness and crew cohesion', 'C. Professional boundaries limit the range of topics crew members may raise with each other', 'D. Professional boundaries refer to legal liability limits — pilots should not discuss sensitive operational matters on CVR'],
  correct: 1,
  explanation: 'Professional boundaries in the cockpit mean staying on-task during high-workload and critical phases (sterile cockpit) while allowing normal human interaction during low-demand cruise phases. This balance optimises task performance and crew cohesion.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the significance of establishing a "go/no-go decision" before flight rather than at the runway?',
  options: ['A. Pre-flight go/no-go decisions are a regulatory requirement under CASR 91.275', 'B. Pre-flight go/no-go only applies to IFR operations — VFR pilots make real-time decisions', 'C. Pre-flight decisions have no advantage over real-time decisions — conditions change up to the point of departure', 'D. Making the decision in advance with pre-determined criteria removes the decision from a time-pressured, high-stakes context — reducing the influence of plan continuation bias and schedule pressure at the moment of departure'],
  correct: 3,
  explanation: 'Pre-flight go/no-go decisions made against clearly defined criteria remove the decision from the high-pressure, schedule-driven environment of the runway threshold. Pre-determined limits reduce the influence of sunk costs, schedule pressure, and plan continuation bias.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "prospective memory failure" and what conditions increase its likelihood?',
  options: ['A. The inability to memorise emergency procedures — improved by repetition', 'B. Forgetting an intended future action — most likely when the delay before the action is long, there are many competing tasks, or a distraction occurs between setting and executing the intention', 'C. The failure to remember historical flight events — relevant to incident reporting accuracy', 'D. Forgetting caused by hypoxia — prevented by maintaining cabin pressure below 10,000 ft'],
  correct: 1,
  explanation: 'Prospective memory failures (forgetting to do something intended) increase when: the delay is long, many tasks compete for attention, the contextual cue is weak, or interruption breaks the connection between intention and action.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "risk homeostasis" theory and how might it apply to safety equipment improvements?',
  options: ['A. A regulatory framework maintaining a constant acceptable risk level across all operations', 'B. A theory suggesting individuals adjust risk-taking to maintain a constant perceived risk level — safety improvements may lead to more risk-taking that partially offsets the gain', 'C. The physiological equilibrium maintained by the body during stress — relevant to stress inoculation training', 'D. A maintenance concept where aircraft systems are replaced when risk exceeds fleet average'],
  correct: 1,
  explanation: 'Risk homeostasis theory proposes that people have a target acceptable risk level and adjust behaviour to maintain it. If safety equipment improves survivability, pilots may unconsciously take more risk elsewhere, partially offsetting the safety improvement.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "decision fatigue" and how does it affect pilots on long duty days?',
  options: ['A. A reduction in physical energy making it harder to move flight controls accurately during long duties', 'B. The inability to make any decision after a critical decision fails — pilots shut down cognitively after significant in-flight events', 'C. Progressive degradation in decision quality after many decisions — later decisions tend to be more impulsive, risk-tolerant, or default to inaction', 'D. Decision fatigue is specific to highly complex aircraft — not applicable to light aircraft operations'],
  correct: 2,
  explanation: 'Decision fatigue degrades decision quality across a long duty period. Later decisions in a duty day tend toward default options, risk acceptance, or indecision. Demanding decisions late in a duty day are therefore particularly hazardous.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the acronym "IMSAFE" stand for and how is it used?',
  options: ['A. A pre-flight personal fitness checklist — Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion', 'B. An emergency procedure checklist — Isolate, Mayday, Squawk, Aviate, Fly, Escape', 'C. It is an ATC handoff checklist — Identify, Monitor, Squawk, Altitude, Frequency, Emergency', 'D. A weight and balance reminder — Index, Mass, Stability, Arm, Fuel, Equipment'],
  correct: 0,
  explanation: 'IMSAFE is a personal fitness checklist pilots use before flight: Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion. Each item prompts self-assessment of a condition that could impair performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "closed-loop communication" prevent that open-loop communication does not?',
  options: ['A. It prevents frequency congestion by limiting the length of pilot transmissions', 'B. It prevents callsign confusion by requiring full callsigns on every transmission', 'C. It prevents undetected communication errors — the readback (and confirmation) loop ensures misunderstandings are caught before being acted upon', 'D. It prevents radio frequency errors by requiring confirmation of the frequency before switching'],
  correct: 2,
  explanation: 'Open-loop communication (transmit only, no feedback) allows errors to go undetected. Closed-loop communication (transmit → readback → confirmation) creates an error-correction cycle. In aviation, missed readbacks or incorrect readbacks caught by controllers have prevented numerous accidents.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What is the "Swiss cheese" model\'s primary implication for accident prevention strategy?',
  options: ['A. Accidents can only be prevented by eliminating all human errors — zero tolerance for any deviation', 'B. The most effective intervention is disciplining the last person who allowed a hole to appear', 'C. Making each defensive layer more robust and adding additional layers reduces hole alignment probability — no single layer can be perfect, but the system can be made very safe', 'D. Accidents are inevitable because holes cannot be prevented from aligning — risk can only be reduced not eliminated'],
  correct: 2,
  explanation: 'The Swiss cheese model shows that safety improvement comes from: reducing hole size in individual defences, adding defensive layers, and promptly repairing identified holes. No single perfect defence exists — defence in depth is the strategy.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the narrow runway width illusion?',
  options: ['A. A narrow runway has no illusory effect — only runway slope affects approach perception', 'B. A narrow runway makes the approach appear lower than actual, causing the pilot to fly higher and risk an overshoot', 'C. A narrow runway causes the pilot to line up with the runway edge rather than the centreline', 'D. A narrow runway appears more distant than a wider runway of the same length, making the approach appear too high and causing the pilot to fly lower'],
  correct: 3,
  explanation: 'A narrow runway appears smaller than expected, which the brain interprets as being farther away — making the approach angle appear too high. The pilot unconsciously lowers the nose and flies below the safe glidepath.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What effect does alcohol have on sleep quality and why does this matter for pilots?',
  options: ['A. Alcohol has no effect on sleep architecture at moderate doses', 'B. Alcohol may help sleep onset but suppresses REM sleep and causes fragmented sleep in the second half of the night — resulting in less restorative sleep and increased next-day fatigue', 'C. Alcohol both helps sleep onset and improves overall sleep quality', 'D. Alcohol delays sleep onset and has no effect on REM sleep'],
  correct: 1,
  explanation: 'Alcohol suppresses REM sleep and causes sleep fragmentation in the later sleep cycles. The result is less restorative sleep and increased fatigue the following day — relevant to pilots who drink in the evening before an early morning departure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is fatigue and how does it compare to alcohol intoxication in terms of performance impairment?',
  options: ['A. Fatigue and alcohol produce completely different impairments — they cannot be meaningfully compared', 'B. After 17–18 hours of wakefulness, performance is equivalent to a BAC of approximately 0.05% — after 24 hours, equivalent to approximately 0.10%', 'C. Fatigue impairs only physical coordination — cognitive performance is unaffected until sleep deprivation exceeds 24 hours', 'D. Fatigue has no measurable effect on decision-making at the levels experienced in normal aviation operations'],
  correct: 1,
  explanation: 'Research shows that sleep deprivation produces performance impairment quantitatively equivalent to alcohol intoxication. After 17–18 hours awake, performance equals 0.05% BAC. After 24 hours, approximately 0.10%. Critically, self-assessment accuracy also degrades.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What effect does increasing workload have on communication between crew members?',
  options: ['A. Workload has no effect on communication — only fatigue and stress affect communication quality', 'B. Increasing workload improves communication by creating urgency and focus', 'C. Communication quality typically degrades under high workload — messages become shorter, ambiguous, or are missed entirely', 'D. Increasing workload forces crew members to use formal phraseology exclusively, improving clarity'],
  correct: 2,
  explanation: 'Under high workload, communication tends to become truncated, less clear, and less frequently cross-checked. Critical information may be delivered too rapidly, assumed without confirmation, or missed. This degrades shared situational awareness.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the function of "challenge-verify" in approach briefings?',
  options: ['A. A challenge-verify call requires the flying pilot to confirm each approach action before the monitoring pilot initiates the next challenge', 'B. A structured technique in approach briefings where key items (minimums, missed approach, threats) are stated and then independently verified against published plates by both crew members — catching potential errors before the approach', 'C. A challenge-verify call is made to ATC before conducting an instrument approach to verify the pilot has current information', 'D. Challenge-verify is a regulatory requirement for CAT III approaches only'],
  correct: 1,
  explanation: 'Challenge-verify in approach briefings requires both crew members to confirm critical parameters (DH/MDA, missed approach point, speeds) independently rather than one pilot telling the other — providing a cross-check that catches briefing errors before they are executed.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the most important human factors principle for preventing controlled flight into terrain (CFIT)?',
  options: ['A. Ensuring GPWS equipment is serviceable before every flight involving instrument approaches', 'B. Maintaining a constant minimum altitude throughout all phases of flight', 'C. Maintaining continuous situational awareness of aircraft position relative to terrain — through active SA maintenance, cross-checking of position against minimum safe altitudes, and not allowing fixation or task saturation to degrade terrain awareness', 'D. Restricting all IFR approaches to published straight-in procedures only'],
  correct: 2,
  explanation: 'CFIT prevention is fundamentally about maintaining terrain-related situational awareness — knowing where you are, knowing the minimum safe altitude, and not allowing workload, fixation, or complacency to degrade that awareness. Technical defences (GPWS, TAWS) are last-resort backups, not primary defences.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What are the key physiological effects of sustained vibration on pilot performance?',
  options: ['A. Vibration affects performance only when it exceeds the structural vibration limits of the airframe', 'B. Vibration has no measurable effect below 10 Hz — low-frequency vibration has no human performance impact', 'C. Sustained vibration causes fatigue, impairs instrument reading accuracy, increases muscle tension, and over time causes musculoskeletal injury — particularly relevant in helicopter and piston propeller aircraft', 'D. Sustained vibration improves alertness through stimulation — beneficial in helicopter operations'],
  correct: 2,
  explanation: 'Sustained vibration common in piston aircraft and helicopters causes physical fatigue, impairs fine motor control and instrument reading accuracy, and contributes to musculoskeletal disorders. It is a significant occupational health concern.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "halo effect" in crew evaluation and how can it bias assessment?',
  options: ['A. A lighting artefact during night-vision evaluations that reduces assessor accuracy', 'B. The tendency for experienced crews to receive less rigorous assessments than training captains', 'C. The tendency for a positive impression in one area (e.g. excellent radio work) to inflate assessments in unrelated areas (e.g. systems knowledge) — leading to inaccurate overall crew evaluation', 'D. An improvement in student performance caused by increased instructor confidence in their ability'],
  correct: 2,
  explanation: 'The halo effect is a cognitive bias where a strong positive impression in one area influences judgement of unrelated areas. In crew evaluation, it can cause an assessor to rate a pilot higher across all competencies because of one outstanding skill.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "confirmation bias" mean and how does it affect in-flight decision-making?',
  options: ['A. The tendency to seek, interpret, and remember information confirming a pre-existing belief while discounting contradictory evidence — for example, noticing weather clearing signs while ignoring deterioration signs', 'B. The practice of confirming ATC readbacks — operationally important to prevent errors', 'C. A bias toward making conservative decisions in all weather-related judgements', 'D. A tendency to seek additional checks before making a decision — a sign of good airmanship'],
  correct: 0,
  explanation: 'Confirmation bias causes pilots to selectively notice information supporting what they already believe and dismiss contradictory information. It is a major factor in CFIT and weather-related accidents where pilots pressed on despite clearly available warning signs.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot has been awake for 20 hours and is experiencing difficulty concentrating. Which phase of fatigue best describes this state?',
  options: ['A. Circadian fatigue caused by flying against the body clock', 'B. Chronic fatigue from accumulated sleep debt over weeks', 'C. Motivational fatigue from repetitive low-interest tasks', 'D. Acute fatigue from a single extended duty period'],
  correct: 3,
  explanation: 'Acute fatigue results from a single period of sustained wakefulness or physical exertion. After 20 hours awake, impairment is comparable to a blood alcohol level above the legal driving limit.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation safety value of "voluntary" incident reporting programs such as REPCON?',
  options: ['A. Voluntary reporting programs are useful only for maintenance organisations — flight crew events are already captured by ATSB mandatory reporting', 'B. Voluntary reporting (without fear of enforcement action) allows safety information about near-misses, system weaknesses, and latent hazards to reach safety managers — information that would never be reported under a punitive system', 'C. REPCON is a legal obligation — voluntary reporting has no independent value beyond regulatory compliance', 'D. REPCON reports are shared with CASA for enforcement purposes — the anonymity is conditional'],
  correct: 1,
  explanation: 'Voluntary, confidential reporting programs like REPCON capture safety information about near-misses, system weaknesses, and latent hazards that would never be reported if reporters feared punitive consequences. This information is used to identify systemic risks before they cause accidents.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is "crew cohesion" and how does it affect CRM performance?',
  options: ['A. The physical proximity of crew members in a small cockpit — relevant to aircraft certification only', 'B. The requirement for all crew members to be from the same airline base — prevents cultural communication barriers', 'C. The degree of mutual trust, communication, and shared commitment within a crew — high cohesion generally improves CRM and safety, but excessively cohesive crews may avoid challenging each other, reducing the safety benefit of having two crew members', 'D. A training concept requiring crew members to spend 10 hours together in a simulator before an operational pairing'],
  correct: 2,
  explanation: 'High crew cohesion improves communication and coordination. However, excessive cohesion (groupthink) can reduce the willingness of crew members to challenge decisions. The optimal crew has both strong cohesion and high assertiveness.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What does "threat and error management" (TEM) describe in a flight operations context?',
  options: ['A. An ATC system for detecting aircraft deviations from cleared routes', 'B. The process of reporting threats and errors to ATSB after an incident', 'C. A maintenance concept for identifying and controlling corrosion threats to aircraft structure', 'D. A model describing how flight crews identify threats, avoid errors, and manage undesired aircraft states before they escalate to accidents'],
  correct: 3,
  explanation: 'TEM describes how crews manage flight safety by: identifying threats (external events requiring attention), avoiding errors (deviations from intention), and detecting and managing undesired aircraft states (outcomes of unmanaged threats or errors).',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors significance of making a "deliberate deviation" from normal procedures?',
  options: ['A. Deliberate deviations in emergencies are authorised under CASR 91.175 — the pilot must report if requested', 'B. Deliberate deviations are always violations — they require infringement reporting to CASA regardless of outcome', 'C. Deliberate deviations are preferable to following procedures because they show pilot initiative', 'D. Deliberate deviations from normal procedures in non-emergency situations represent a violation — intentional, not error — and normalise deviance when they recur without negative outcomes'],
  correct: 0,
  explanation: 'In emergencies, deliberate deviation from rules is authorised by CASR 91.175 and the pilot must report if requested. In non-emergency situations, deliberate deviations are violations — they are intentional rule breaches, not errors, and their normalisation is a safety risk.',
  reference: 'CASR 91.175 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "coffin corner" in aviation human factors terms?',
  options: ['A. A narrow altitude band at high altitude where the stall speed and critical Mach number converge, leaving very little speed margin', 'B. The period between 0200 and 0400 local time when circadian rhythm effects are at their worst', 'C. A metaphorical term for the combination of fatigue and stress that exceeds a pilot\'s capacity to manage them safely', 'D. The most dangerous phase of flight for spatial disorientation — the turn from base to final approach'],
  correct: 0,
  explanation: 'Coffin corner is primarily an aerodynamic term for the altitude where stall speed and critical Mach number nearly converge. In human factors, it is sometimes used metaphorically for situations where margins are extremely narrow and any deviation can be catastrophic.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "latent failure" and give an aviation example?',
  options: ['A. An autopilot failure only apparent when the pilot attempts to disengage it on approach', 'B. A pre-existing system weakness hidden until it combines with other factors to cause an accident — for example, a training gap that remains harmless until an unusual configuration is actually encountered', 'C. A slow fuel leak that is latent until sufficient fuel is lost to affect endurance calculations', 'D. A failure not yet detected by maintenance — latent until the aircraft is opened for inspection'],
  correct: 1,
  explanation: 'Latent failures are pre-existing weaknesses — poor training design, ambiguous procedures, inadequate equipment — that are harmless in isolation but dangerous when combined with an active failure or triggering event.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is an "error-inducing environment" and how can a pilot identify one?',
  options: ['A. A cockpit with poor lighting and noise levels above regulatory limits', 'B. Any flight below the transition altitude in high-density traffic areas', 'C. Any environment outside standard procedures — identified by non-normal checklists', 'D. A set of conditions increasing error probability — high workload, time pressure, ambiguous information, fatigue — identified through pre-flight threat assessment and in-flight monitoring'],
  correct: 3,
  explanation: 'Error-inducing environments combine multiple workload, cognitive, and environmental factors that increase error probability. Recognising one allows the pilot to proactively implement countermeasures: slow down, cross-check more, use checklists explicitly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "empty field myopia" and when does it occur?',
  options: ['A. The inability to read charts clearly in low cockpit lighting conditions', 'B. Visual blur caused by prolonged focus on close instruments in poorly lit cockpits', 'C. The tendency for eyes to relax to a resting focus of approximately 1–2 metres in featureless or poor-visibility environments — preventing detection of distant aircraft or terrain', 'D. Short-sightedness developing from long-term instrument flying without visual breaks'],
  correct: 2,
  explanation: 'In haze, night conditions, or featureless environments, the eyes relax to a resting focal distance rather than infinity. This makes it impossible to see distant aircraft or terrain without consciously refocusing — a significant traffic detection limitation.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does caffeine affect fatigue?',
  options: ['A. It eliminates the need for sleep by replacing adenosine in the brain', 'B. It permanently resets the circadian rhythm to the local time zone', 'C. It temporarily increases alertness by blocking adenosine receptors, but does not address the underlying sleep debt', 'D. It has no measurable effect on pilot alertness at normal doses'],
  correct: 2,
  explanation: 'Caffeine temporarily blocks adenosine receptors, providing a feeling of alertness. However, it does not address sleep debt, and when the effect wears off (typically 4–6 hours), alertness drops sharply. It can also disrupt subsequent sleep quality.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of the "dirty dozen" preconditions for maintenance errors?',
  options: ['A. A CASA maintenance audit checklist with 12 mandatory inspection items', 'B. A list of 12 aircraft types with the highest historical maintenance error rates', 'C. Twelve common preconditions for maintenance errors — including lack of communication, distraction, lack of knowledge, pressure, and fatigue — which help identify systemic risks before accidents occur', 'D. A LAME training syllabus covering 12 core maintenance competencies'],
  correct: 2,
  explanation: 'The dirty dozen identifies 12 common preconditions for maintenance errors. Recognising these preconditions in the workplace allows organisations to implement controls before errors occur, rather than reacting after accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "authority gradient" problem in aviation and how is it manifested in accidents?',
  options: ['A. Accidents where a junior crew member had critical safety information but did not effectively communicate it due to deference — the captain\'s decision was made without information the FO possessed', 'B. Accidents caused by ATC issuing instructions exceeding their legal authority', 'C. Accidents where ATC authority over the flight was not clearly established before departure', 'D. Accidents caused by a captain taking unilateral action without consulting the first officer'],
  correct: 0,
  explanation: 'Steep authority gradient accidents involve junior crew members who had safety-critical information (saw incorrect checklist, noticed the terrain, identified the weather risk) but failed to communicate it effectively. The captain\'s decision was made without information that could have prevented the accident.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the primary difference between "error management" and "error elimination" as safety strategies?',
  options: ['A. Error elimination attempts to prevent all errors; error management accepts errors will occur and focuses on early detection and consequence limitation — more realistic for complex human systems', 'B. Error management is used in maintenance; error elimination in flight operations — both aim for zero errors', 'C. Both strategies are equivalent — the choice depends only on the specific operation', 'D. Error elimination is CASA\'s preferred strategy; error management is an industry shortcut'],
  correct: 0,
  explanation: 'Error elimination is only partially achievable in complex human systems. Error management accepts that errors will occur and builds systems that detect them early, contain their consequences, and provide recovery opportunities — the basis of modern aviation safety system design.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended technique for recovering from a state of high stress or arousal in flight?',
  options: ['A. Slow diaphragmatic breathing activates the parasympathetic nervous system, reducing heart rate and cortisol — combined with vocalising the situation and prioritising tasks, it helps return arousal toward the optimal range', 'B. Declare an emergency to reduce ATC workload demands on the crew', 'C. Increase automation to maximum to reduce workload immediately', 'D. Consume available caffeine to manage the stress state pharmacologically'],
  correct: 0,
  explanation: 'Slow, deliberate diaphragmatic breathing activates the parasympathetic response (counteracting fight-or-flight). Combined with vocalising the situation and restructuring tasks into manageable priorities, it helps a pilot regain composure and effective cognitive function.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'When stress levels become excessive, what typically happens to a pilot\'s cognitive processing?',
  options: ['A. The pilot switches to a slow, analytical decision-making mode that improves accuracy', 'B. The pilot\'s attention narrows (tunnel vision), recent learning degrades, and the pilot reverts to older, more ingrained habits', 'C. The pilot becomes overly cautious and refuses to make any decisions', 'D. The pilot\'s attention broadens to take in all available information simultaneously'],
  correct: 1,
  explanation: 'Under excessive stress, attention narrows (cognitive tunnelling), recently learned procedures are forgotten, and the pilot reverts to older habits. This is why emergency checklists and drilled procedures are critical — stress degrades access to higher-order cognitive processes.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'A pilot is offered a medical certificate after treatment for a significant condition. What is the human factors responsibility they carry?',
  options: ['A. The pilot remains responsible for ongoing self-assessment and must not exercise licence privileges if they know or believe their condition has changed in a way that affects their fitness, regardless of certificate validity', 'B. Self-monitoring obligations apply only during the initial 12-month probation period after treatment', 'C. Once a valid medical certificate is issued, the pilot\'s self-monitoring obligations cease — the certificate is unconditional', 'D. The pilot should continue flying as long as no symptoms are present — certificates are based on objective measures only'],
  correct: 0,
  explanation: 'A medical certificate represents a point-in-time assessment. The pilot\'s ongoing self-monitoring responsibility means not exercising privileges when they know or reasonably believe their fitness has changed — regardless of whether the certificate is currently valid.',
  reference: 'CASR Part 67 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is complacency in aviation and what factors promote it?',
  options: ['A. A state of reduced vigilance promoted by high workload and novel situations requiring intense focus', 'B. A positive cognitive state that allows pilots to focus on the most important task only', 'C. A state of reduced vigilance and uncritical satisfaction that increases error rates — promoted by routine operations, automation reliance, and a long history of uneventful flights', 'D. A state of confidence built through experience — desirable in senior pilots'],
  correct: 2,
  explanation: 'Complacency is a false sense of security that reduces vigilance and increases error rates. It is promoted by routine ("everything always goes fine"), high automation ("the system will catch mistakes"), and extensive incident-free experience.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the autokinetic illusion and when can it mislead a pilot?',
  options: ['A. The apparent movement of a stationary light source when stared at in a dark environment — a pilot may follow a star or distant ground light believing it is a moving aircraft', 'B. Visual distortion caused by looking through a rain-covered windscreen at night', 'C. A false perception of aircraft motion caused by vibration transmitted through the seat', 'D. A false perception of speed caused by low-level flight over a featureless surface'],
  correct: 0,
  explanation: 'The autokinetic effect causes a stationary light to appear to move when stared at in a dark environment. A pilot may mistake a star or ground light for a moving aircraft and attempt to follow it, leading to controlled flight into terrain.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the human factors basis for requiring "crew rest facilities" that allow actual sleep, not just rest periods?',
  options: ['A. Sleep (not just rest) is the only physiological countermeasure for fatigue — quiet, dark, comfortable sleep facilities that allow actual sleep onset and continuance are essential for genuine fatigue recovery during augmented operations', 'B. Crew rest facilities are a regulatory formality with no measured safety benefit', 'C. The requirement is purely commercial — crew rest facilities improve crew comfort and reduce turnover', 'D. Crew rest facilities are only required for flights over oceans — domestic operations do not require them'],
  correct: 0,
  explanation: 'The only genuine countermeasure for fatigue is sleep. Rest without sleep does not reverse sleep debt or restore cognitive performance. Crew rest facilities that genuinely enable sleep (dark, quiet, comfortable, vibration-isolated, temperature-appropriate) are essential for fatigue recovery during augmented operations.',
  reference: 'CASA Fatigue Management / CAO 48.1'
},

{
  question: 'What is the most effective strategy for managing the risk of spatial disorientation?',
  options: ['A. Rely on vestibular sensations to cross-check instrument readings when the two conflict', 'B. Avoid any flight in conditions where spatial disorientation could occur', 'C. Establish and maintain good instrument flying skills, trust instruments over bodily sensations, and avoid flight in IMC without appropriate ratings and currency', 'D. Use anti-vertigo medication before any flight in marginal VMC'],
  correct: 2,
  explanation: 'The most effective strategy is to develop reliable instrument flying skills, practise regularly to maintain currency, and strictly trust instruments over vestibular sensations when they conflict. Awareness of illusions is a precursor but not a substitute for instrument skill.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What effect does dehydration have on pilot performance?',
  options: ['A. Dehydration only affects physical strength — cognitive performance is unaffected', 'B. Dehydration has no measurable effect on cognition at the levels experienced during normal flight', 'C. Even mild dehydration (1–2% of body weight) causes measurable decrements in concentration, reaction time, and decision-making', 'D. Dehydration improves alertness by activating the body\'s stress response'],
  correct: 2,
  explanation: 'Even mild dehydration (1–2% body weight loss) significantly impairs cognitive performance, concentration, and reaction time. The aviation environment promotes dehydration through low humidity, physical activity, and sometimes inadequate fluid intake.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "task saturation" and what are its consequences for pilot performance?',
  options: ['A. A state where the demands on a pilot exceed their processing capacity — resulting in task shedding, errors of omission, and reduced situational awareness', 'B. A state of optimal cognitive loading where the pilot is fully engaged and performance is at its peak', 'C. A state where a pilot has too little to do — it causes boredom and reduced vigilance', 'D. The physical fatigue of controlling an aircraft manually for extended periods'],
  correct: 0,
  explanation: 'Task saturation occurs when workload exceeds cognitive capacity. The pilot sheds lower-priority tasks, makes errors of omission (forgetting steps), and loses situational awareness. It is most dangerous during approach and landing in degraded conditions.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the most likely type of human error when an experienced pilot performs a routine checklist?',
  options: ['A. A violation — experienced pilots are more likely than novices to intentionally skip checklist items', 'B. A skill-based slip or lapse — the pilot makes an execution error or forgets a step in a highly automated procedure', 'C. A knowledge-based mistake — the pilot does not know the correct configuration for the aircraft', 'D. A rule-based error — the pilot applies the wrong checklist for the phase of flight'],
  correct: 1,
  explanation: 'Routine checklists become skill-based behaviour for experienced pilots — performed automatically with little conscious attention. This makes them prone to slips (wrong item actioned) and lapses (item forgotten), particularly when distraction interrupts the sequence.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "risk homeostasis" in aviation safety?',
  options: ['A. A regulatory framework that maintains a constant level of acceptable risk across all aviation operations', 'B. A maintenance concept where aircraft systems are replaced when their risk profile exceeds the fleet average', 'C. The physiological equilibrium maintained by the body during stress — relevant to stress inoculation training', 'D. A theory suggesting that individuals adjust their risk-taking behaviour to maintain a constant perceived level of risk — improvements in safety equipment may lead to more risk-taking behaviour that offsets the safety gain'],
  correct: 3,
  explanation: 'Risk homeostasis theory (Wilde) proposes that people have a target level of acceptable risk and adjust behaviour to maintain it. If an aircraft system improves safety, pilots may unconsciously take more risk elsewhere, partially or fully offsetting the improvement.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is physiological stress and how does it differ from psychological stress in aviation?',
  options: ['A. Physiological stress is measured objectively by cortisol levels; psychological stress cannot be measured and is therefore clinically irrelevant', 'B. They are the same — stress is stress regardless of its source, and both are managed identically', 'C. Physiological stress arises from physical conditions (hypoxia, fatigue, heat, noise); psychological stress arises from cognitive or emotional demands — both activate the same stress response system but may require different management strategies', 'D. Physiological stress only occurs at altitude; psychological stress only occurs on the ground during pre-flight planning'],
  correct: 2,
  explanation: 'Both types activate the autonomic stress response (heart rate, cortisol, attention narrowing) but arise from different sources. Managing physiological stress requires addressing physical factors (oxygen, rest, temperature). Managing psychological stress requires addressing cognitive demands, expectations, and coping strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "victim-blaming" approach to accident investigation and why has modern aviation safety moved away from it?',
  options: ['A. Blaming individual pilots for errors misses the systemic and organisational factors that created the conditions for error — it fails to prevent recurrence because the same system vulnerabilities remain', 'B. Victim-blaming is used only in criminal investigations — civil aviation accidents use systemic analysis', 'C. Blaming pilots is appropriate when the accident involved a clear procedural violation', 'D. Modern aviation has not moved away from it — pilot blame is central to ATSB investigations'],
  correct: 0,
  explanation: 'Focusing blame on individuals after accidents misses the systemic, organisational, and latent conditions that created the vulnerability to error. Modern safety management identifies and addresses these systemic factors to prevent recurrence — not just punish the last person in the error chain.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What are the five hazardous attitudes identified in aviation human factors research?',
  options: ['A. Complacency, Fixation, Tunnel vision, Invulnerability, Resignation', 'B. Anti-authority, Impulsivity, Invulnerability, Macho, Resignation', 'C. Overconfidence, Risk-taking, Fatalism, Aggression, Denial', 'D. Boredom, Stress, Anxiety, Overwork, Underwork'],
  correct: 1,
  explanation: 'The five hazardous attitudes are: Anti-authority ("don\'t tell me"), Impulsivity ("do something — now"), Invulnerability ("it won\'t happen to me"), Macho ("I can do it"), and Resignation ("what\'s the use"). Each has an antidote.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the correct CRM response when the pilot flying is about to select an incorrect navigation mode?',
  options: ['A. Wait for the result of the mode selection before raising the concern — it may not cause a problem', 'B. Immediately take control of the aircraft to prevent the error from being executed', 'C. Calmly and clearly state the concern — "I think that\'s the wrong mode — confirm you want LNAV?" — giving the PF the opportunity to self-correct without confrontation', 'D. Allow the error to proceed and document it in the post-flight report — intervening may create distraction'],
  correct: 2,
  explanation: 'CRM teaches assertive but constructive challenge — stating the concern and allowing the PF to self-correct. This preserves the PF\'s role while providing the cross-check that multi-crew operations are designed to deliver. Taking over prematurely or ignoring the error are both inappropriate responses.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the aviation significance of the "normative vs descriptive" distinction in decision-making research?',
  options: ['A. Normative decisions are made by captains; descriptive decisions are made by first officers', 'B. Normative decision-making describes how decisions should be made (rational, optimal); descriptive decision-making describes how pilots actually make decisions (heuristic, satisficing) — the gap between the two identifies training priorities', 'C. Normative decisions are the norm (most common); descriptive decisions describe them mathematically', 'D. Normative decisions follow regulations; descriptive decisions account for operational realities'],
  correct: 1,
  explanation: 'Normative models describe ideal rational decision-making (maximising expected utility). Descriptive models (like RPD, bounded rationality) describe how pilots actually decide under real-world time and information constraints. Understanding the gap helps design training and procedures that work with rather than against actual cognitive tendencies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "Yerkes-Dodson law" and how does it apply to pilot performance under stress?',
  options: ['A. Performance increases with arousal up to an optimal point then decreases — both under-arousal and over-arousal degrade performance, with moderate stress being optimal', 'B. A law describing how fatigue accumulates linearly with hours of duty time', 'C. A principle stating simple tasks are always performed better than complex tasks under stress', 'D. A law stating more experience always leads to better performance regardless of arousal level'],
  correct: 0,
  explanation: 'The Yerkes-Dodson law describes an inverted-U relationship between arousal and performance. Maximum performance occurs at moderate arousal. Both extremes — understimulation (boredom) and excessive stress — degrade performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does research into "human error" consistently show about the causes of aviation accidents?',
  options: ['A. Human error accounts for approximately 20% of accidents — mechanical failure accounts for the majority', 'B. Most accidents are caused by reckless behaviour or intentional violations by flight crew', 'C. Human factors — error, poor decision-making, or organisational failures — contribute to approximately 70–80% of aviation accidents, often in combination with other factors', 'D. Most accidents are caused primarily by mechanical failures that exceed crew management capability'],
  correct: 2,
  explanation: 'Research consistently shows that human factors contribute to approximately 70–80% of aviation accidents. This does not mean pilots are reckless — it means the human performance characteristics of the flight crew and the broader organisational system are the dominant causal factor.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "task shedding" and what are its consequences?',
  options: ['A. The planned delegation of tasks to automation before a high-workload phase', 'B. The process of transferring radio communications to a co-pilot during approach', 'C. The unplanned dropping of lower-priority tasks as workload exceeds capacity — the pilot focuses on what appears most urgent and unconsciously stops attending to other tasks, which may then develop into secondary problems', 'D. A deliberate workload management technique where tasks are completed sequentially rather than in parallel'],
  correct: 2,
  explanation: 'Task shedding is unintentional. When cognitive capacity is overwhelmed, the pilot focuses on the perceived priority task and stops monitoring other items — fuel, weather, time — potentially allowing important secondary problems to develop unnoticed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "automation surprise" in modern aircraft operations?',
  options: ['A. A situation where the aircraft does something unexpected because the crew did not understand the current automation mode, leading to confusion and potential loss of control', 'B. A training scenario designed to expose pilots to unexpected automation behaviours in a simulator', 'C. The surprise a crew feels when an automatic feature like TCAS activates for the first time in a real situation', 'D. A positive experience where automation detects a hazard faster than the crew could manually'],
  correct: 0,
  explanation: 'Automation surprise occurs when the aircraft behaves unexpectedly because the crew misunderstood or lost track of the active automation mode. It can cause startle and confusion, and has been a factor in several accidents involving highly automated aircraft.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is a head-on approaching aircraft most difficult to detect visually?',
  options: ['A. It is difficult to detect because both aircraft are at the same altitude and therefore share the same visual horizon', 'B. Its position in the visual field is fixed — it appears as a stationary dot with no apparent movement, making it hard to distinguish from background clutter', 'C. It approaches from the sun\'s direction and is masked by glare', 'D. It is always in the pilot\'s blind spot directly ahead due to windscreen framing'],
  correct: 1,
  explanation: 'A head-on aircraft subtends the same angular position in the visual field and appears as a stationary dot. The human visual system is most sensitive to movement, making a stationary target much harder to detect. It can grow from invisible to collision-sized in seconds.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is meant by the "communication loop" in aviation communications?',
  options: ['A. The physical routing of cockpit audio through the intercom system', 'B. A closed feedback cycle where the sender transmits, the receiver acknowledges, and the sender confirms — ensuring the message was received and understood correctly', 'C. A training exercise where crew members practise emergency communications repetitively', 'D. The VHF radio frequency loop that connects all aircraft in a sector'],
  correct: 1,
  explanation: 'The communication loop (sender → message → receiver → acknowledgement → confirmation) ensures messages are received and understood. In aviation, readbacks close the loop and allow the sender to detect and correct misunderstandings before they cause an error.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What effect does alcohol have on sleep quality?',
  options: ['A. Alcohol has no effect on sleep architecture at moderate doses', 'B. Alcohol delays sleep onset and has no effect on REM sleep', 'C. Alcohol improves sleep onset but reduces REM sleep quality and total restorative sleep', 'D. Alcohol both helps you fall asleep and improves overall sleep quality'],
  correct: 2,
  explanation: 'Alcohol may help sleep onset but it suppresses REM sleep and causes fragmented sleep in the second half of the night. The result is less restorative sleep and increased next-day fatigue.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the autokinetic illusion and when is it most likely to mislead a pilot?',
  options: ['A. Visual distortion caused by looking through a rain-covered windscreen at night', 'B. The apparent movement of a stationary light source when stared at for several seconds in a dark environment — can cause a pilot to follow a star or distant light believing it is another aircraft', 'C. A false perception of aircraft motion caused by vibration transmitted through the seat', 'D. A false perception of speed caused by low-level flight over a featureless surface'],
  correct: 1,
  explanation: 'The autokinetic effect causes a stationary point of light to appear to move when stared at in a dark environment. A pilot may mistake a star or ground light for a moving aircraft and attempt to follow it, leading to controlled flight into terrain.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Which of the following best describes the body\'s circadian rhythm?',
  options: ['A. A 90-minute sleep cycle that determines dream frequency', 'B. A variable cycle that resets instantly to any new time zone', 'C. An approximately 24-hour biological cycle regulating alertness, temperature, and hormone levels', 'D. A 12-hour cycle governing hunger and satiety'],
  correct: 2,
  explanation: 'The circadian rhythm is an approximately 24-hour internal biological clock that regulates alertness, core body temperature, hormone secretion, and other physiological functions. It does not reset instantly.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What are the five hazardous attitudes in aviation and what is their significance?',
  options: ['A. Complacency, Fixation, Tunnel vision, Invulnerability, and Resignation', 'B. Overconfidence, Risk-taking, Fatalism, Aggression, and Denial', 'C. Anti-authority, Impulsivity, Invulnerability, Macho, and Resignation — each predisposes a pilot to a specific type of unsafe decision-making', 'D. Boredom, Stress, Anxiety, Overwork, and Underwork'],
  correct: 2,
  explanation: 'The five hazardous attitudes are: Anti-authority ("don\'t tell me"), Impulsivity ("do something now"), Invulnerability ("it won\'t happen to me"), Macho ("I can do it"), and Resignation ("what\'s the use"). Each has an antidote that counters the unsafe thinking pattern.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What physiological change occurs during controlled breathing exercises and how does this help during stressful situations?',
  options: ['A. Controlled breathing increases oxygen saturation to above-normal levels, temporarily improving cognitive performance', 'B. Slow, deep breathing activates the parasympathetic nervous system, reducing heart rate and cortisol, lowering the stress arousal level toward the optimal performance range', 'C. Controlled breathing prevents hyperventilation by increasing CO2 levels — primarily useful at altitude in unpressurised aircraft', 'D. Breathing exercises have no measurable physiological effect — their benefit is entirely placebo'],
  correct: 1,
  explanation: 'Slow diaphragmatic breathing activates the parasympathetic nervous system (rest-and-digest), counteracting the sympathetic stress response (fight-or-flight). This lowers heart rate, reduces cortisol, and helps return arousal toward the optimal performance level.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the principal danger of taking sleeping tablets the night before an early morning flight?',
  options: ['A. Residual sedation from many sleeping tablets can persist into the following morning, impairing reaction time and cognition during the flight', 'B. The danger is exclusively cardiovascular — sleeping tablets reduce resting heart rate below aviation-safe levels', 'C. Sleeping tablets cause paradoxical insomnia that prevents adequate sleep before early departures', 'D. Sleeping tablets are only dangerous if combined with alcohol — taken alone they have no next-day effect'],
  correct: 0,
  explanation: 'Many sleep medications have half-lives extending well into the following day. Residual sedation impairs reaction time, coordination, and cognitive function — producing a medication-impaired pilot who feels rested but is not performing normally.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "active monitoring" mean in an automated cockpit and why is it important?',
  options: ['A. Using the autopilot in active mode rather than passive mode', 'B. Having both crew members simultaneously manipulating the flight management system', 'C. Monitoring ATC communications actively rather than waiting for a callsign', 'D. Deliberately comparing what the automation is doing against what it should be doing, rather than passively watching screens — the antidote to automation complacency'],
  correct: 3,
  explanation: 'Active monitoring means deliberately cross-checking automation outputs against expected values — "is the aircraft doing what I expect?" rather than passively watching screens. It is the primary defence against automation complacency and mode confusion.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "recognition-primed decision making" (RPD) describe?',
  options: ['A. A decision method used only by highly trained emergency response pilots', 'B. How experienced pilots rapidly match situations to past experience and act on recognised patterns — faster than analytical models but potentially vulnerable to novel situations that don\'t fit experience', 'C. A memory technique for recalling emergency procedures under stress', 'D. A formal decision-making model requiring explicit evaluation of all options before selecting one'],
  correct: 1,
  explanation: 'RPD describes how experts make rapid decisions by matching the current situation to a stored pattern from experience and executing the associated response. It is efficient for familiar situations but can fail in genuinely novel situations that don\'t match any stored pattern.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is a Safety Management System (SMS) and what is its primary purpose?',
  options: ['A. A systematic, proactive approach to managing safety risks — identifying hazards, assessing risks, and implementing controls before accidents occur', 'B. A crew scheduling system that ensures flight and duty time limits are not exceeded', 'C. A maintenance scheduling tool that ensures aircraft are serviced within approved intervals', 'D. A government inspection system used by CASA to audit airline operations'],
  correct: 0,
  explanation: 'An SMS is a proactive, systematic approach to managing safety. Its four pillars are: safety policy, safety risk management, safety assurance, and safety promotion. The goal is to identify and mitigate hazards before they lead to incidents or accidents.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What distinguishes an active failure from a latent condition in accident causation?',
  options: ['A. Active failures are intentional acts; latent conditions are unintentional — both require equal regulatory response', 'B. Active failures occur in flight; latent conditions occur on the ground before departure', 'C. Active failures involve flight crew; latent conditions involve maintenance and management only', 'D. Active failures are errors with immediate safety effects (e.g. a wrong control input); latent conditions are pre-existing system weaknesses that lie dormant until triggered by an active failure'],
  correct: 3,
  explanation: 'Active failures have immediate adverse effects — the unsafe act itself. Latent conditions are pre-existing system weaknesses — poor procedures, inadequate training, fatigue schedules — that increase the probability of active failures and their consequences.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is sleep apnoea and why is it a significant concern for pilots?',
  options: ['A. A condition where breathing is repeatedly interrupted during sleep, causing fragmented sleep and excessive daytime sleepiness — pilots with undiagnosed OSA may be significantly impaired without knowing it', 'B. A rare neurological disorder preventing deep sleep — relevant only to pilots over 65', 'C. Sleep apnoea is reliably identified by annual DAME examinations and poses no undetected risk', 'D. A form of sleep paralysis triggered by rotating shift work — only relevant to night freight pilots'],
  correct: 0,
  explanation: 'Obstructive sleep apnoea (OSA) causes repeated nocturnal breathing interruptions, fragmenting sleep and producing excessive daytime sleepiness. Many pilots with OSA are undiagnosed. The resulting impairment — microsleeps, cognitive slowing — is directly hazardous during flight.',
  reference: 'CASR Part 67 / CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "shared responsibility" for safety in multi-crew operations?',
  options: ['A. In multi-crew operations, the PIC has sole responsibility — shared responsibility is not a recognised concept in aviation law', 'B. Each crew member has an independent professional obligation to maintain SA and raise safety concerns — the PIC has final authority but other crew members are not absolved of responsibility by deference', 'C. Shared responsibility only applies to cabin crew safety tasks — flight deck responsibility belongs to the PIC alone', 'D. Shared responsibility means both pilots are equally liable for any safety breach that occurs during the flight'],
  correct: 1,
  explanation: 'In multi-crew operations, all crew members share a professional responsibility for safety. The PIC has final authority but other crew members cannot simply defer to the captain when they have safety-critical information. This independent responsibility is the basis of CRM assertiveness.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the relationship between task difficulty and the likelihood of error?',
  options: ['A. Task difficulty and error rate are inversely proportional — more complex tasks generate fewer errors because they receive more attention', 'B. Errors are equally likely regardless of task difficulty — only individual capability determines error rates', 'C. Error likelihood increases with task difficulty up to a point, then decreases as the task becomes so demanding that the pilot slows down and becomes more careful', 'D. Very simple, routine tasks can paradoxically have high error rates due to reduced attention and reliance on habit — errors on novel, difficult tasks are rarer because the pilot is more vigilant'],
  correct: 3,
  explanation: 'Highly routine, simple tasks (locking gear handles, setting transponders, checklist items performed automatically hundreds of times) are paradoxically prone to lapses because they are performed on autopilot with little conscious attention. Novel, difficult tasks receive higher conscious attention and generate different but not necessarily more errors.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the somatogravic illusion and when is it most likely to occur?',
  options: ['A. An illusion during deceleration where the pilot feels nose-low and pitches up — most common on approach', 'B. An illusion during rapid acceleration where the pilot perceives nose-up pitch and pushes forward on controls — most dangerous during night or IMC take-off', 'C. A spinning sensation caused by prolonged turns — most common during instrument approaches', 'D. A false horizon illusion caused by cloud layers — most common at night over water'],
  correct: 1,
  explanation: 'During rapid acceleration (e.g. take-off), the otolith organs interpret forward acceleration as a nose-up pitch. The pilot may push forward on controls to correct the false pitch-up sensation, causing an unintended nose-down attitude shortly after take-off.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "sleep debt" and can it be fully repaid?',
  options: ['A. Sleep debt has no measurable cumulative effect — each night\'s sleep is independent', 'B. Sleep debt accumulates but is fully repaid after a single night of adequate sleep', 'C. Sleep debt is the cumulative deficit from inadequate sleep — while partial recovery occurs with extended sleep, some cognitive effects may persist for days after accumulation, and chronic debt is not easily cleared in a single sleep period', 'D. Sleep debt only accumulates over 5+ consecutive nights of reduced sleep — shorter periods have no cumulative effect'],
  correct: 2,
  explanation: 'Sleep debt accumulates when sleep is consistently insufficient. While some recovery occurs with extended sleep, research shows that the cognitive deficits from chronic sleep debt persist longer than subjective alertness suggests — a pilot may feel recovered while still being measurably impaired.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary purpose of a pre-flight briefing between crew members?',
  options: ['A. To calculate take-off performance data collaboratively using paper charts', 'B. To satisfy regulatory requirements for flight crew acknowledgement of duty times and fuel load', 'C. To share mental models, clarify roles and responsibilities, brief expected threats, and agree on decision criteria before the flight', 'D. To provide the FO with an opportunity to review the captain\'s qualifications'],
  correct: 2,
  explanation: 'A pre-flight crew briefing establishes a shared mental model, clarifies task allocation, identifies expected threats and contingencies, and agrees on decision criteria (e.g. go-around triggers). It reduces the chance of surprise and improves coordination.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "perceptual narrowing" in aviation and when does it typically occur?',
  options: ['A. The progressive restriction of attention to fewer and fewer information sources as workload or stress increases — resulting in critical information outside the narrowed focus being missed', 'B. The reduction in night vision range that develops in pilots who fly primarily during daylight hours', 'C. The gradual restriction of hearing range caused by prolonged exposure to cockpit noise', 'D. The reduction in peripheral visual field that occurs during instrument flying without external visual reference'],
  correct: 0,
  explanation: 'Perceptual narrowing (a form of cognitive tunnelling) progressively restricts the number of information sources a pilot monitors as stress or workload increases. Critical gauges, aural warnings, or ATC calls outside the narrowed attentional focus are not perceived.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the aviation concept of "resilience" mean in the context of human factors?',
  options: ['A. The physical toughness required to withstand the physical demands of long-haul flight operations', 'B. The structural strength of the airframe to withstand turbulence-induced loads', 'C. The regulatory framework allowing operators to adapt safety procedures to their specific operational context', 'D. The ability of individuals and systems to anticipate, absorb, and recover from unexpected events while maintaining acceptable performance — going beyond compliance with standard procedures'],
  correct: 3,
  explanation: 'Resilience in human factors describes the capacity to absorb and recover from disruption. Resilient pilots adapt effectively when the situation deviates from the plan — they have strategies for anticipating variability, managing surprises, and learning from close calls.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the graveyard spiral and what spatial disorientation mechanism causes it?',
  options: ['A. A high-speed spiral dive caused exclusively by wake turbulence encounter', 'B. A nose-low spiral caused by trim changes — corrected by forward pressure on controls', 'C. A stall-spin sequence caused by abrupt control inputs at low speed near the ground', 'D. An undetected coordinated turn that progressively steepens — the pilot perceives descent but not bank, pulls back, tightening the spiral and increasing speed until structural limits are exceeded'],
  correct: 3,
  explanation: 'In the graveyard spiral, a coordinated banked turn is undetected by the vestibular system. The pilot perceives descent but not bank and pulls back on controls, tightening the spiral. Speed increases until the aircraft overstresses or impacts terrain.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "authority gradient" between ATC and the pilot and what are its safety implications?',
  options: ['A. ATC provides clearances that must be complied with, but the PIC retains final authority for safety — unhealthy pilot deference to ATC can prevent appropriate deviation when safety requires it', 'B. ATC has final authority over all aircraft operations — pilot non-compliance is always a safety violation', 'C. The authority gradient is defined by altitude — ATC authority increases above the transition altitude', 'D. The PIC has final authority which means ATC instructions are optional and may be disregarded based on preference'],
  correct: 0,
  explanation: 'While ATC clearances must be complied with, the PIC retains final authority for the safety of the flight. A pilot who deviates from a clearance for safety reasons must notify ATC. Blind compliance with ATC instructions despite clear safety concerns is inappropriate.',
  reference: 'CASR 91.165 / CASR 91.155'
},

{
  question: 'What is the relevance of "individual differences in fatigue susceptibility" to aviation operations?',
  options: ['A. Individuals vary significantly in how quickly and severely they are affected by sleep deprivation, shift work, and time zone changes — this means the same schedule may be safe for one pilot and significantly impairing for another', 'B. Individual differences are irrelevant to professional aviation — all pilots are trained to the same standard', 'C. Fatigue susceptibility differences only manifest at extreme duty lengths — below 12 hours all pilots respond identically', 'D. Individual differences only apply to pilots over 60 — younger pilots have equivalent fatigue susceptibility'],
  correct: 0,
  explanation: 'Significant individual variation exists in fatigue susceptibility — genetics, age, gender, and health status all influence how quickly and severely fatigue develops. Regulations set population-level limits; individual pilots should manage their own fatigue recognising their personal susceptibility.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "plan continuation bias" (get-there-itis) and why is it hazardous?',
  options: ['A. A cognitive preference for straight-line routing over procedurally correct routing', 'B. A bias toward completing the original plan despite developing evidence that the plan should be changed — driven by schedule pressure, expectation, and investment in the original goal', 'C. A tendency to plan flights conservatively to include maximum fuel and alternate options', 'D. A bias toward always following the filed flight plan even when ATC offers a shortcut'],
  correct: 1,
  explanation: 'Plan continuation bias (get-there-itis) is the tendency to press on with the original plan despite accumulating evidence (weather, fuel, fatigue) that the plan should change. It is driven by time pressure, goal commitment, and the effort already invested.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "call-sign confusion" and what conditions promote it?',
  options: ['A. A training scenario where student pilots practise with modified callsigns to prevent bad habits on ATC frequencies', 'B. The practice of using company-specific callsigns rather than registration-based callsigns on international routes', 'C. The misidentification of an ATC transmission as being intended for your aircraft when it was intended for another — promoted by similar callsigns, similar voices, and high traffic frequency', 'D. Confusion between the aircraft registration and the ATC callsign assigned for the flight'],
  correct: 2,
  explanation: 'Callsign confusion is most common when: two aircraft on frequency have similar callsigns, the controller\'s transmission is unclear, workload is high, or the crew has strong expectations. A pilot who acts on a clearance intended for another aircraft risks a serious deviation.',
  reference: 'AIP ENR 6.1'
},

{
  question: 'What is hyperventilation and how does it produce symptoms similar to hypoxia?',
  options: ['A. Underbreathing that reduces blood oxygen — identical mechanism to altitude hypoxia', 'B. Overbreathing that reduces CO2 in the blood, causing vasoconstriction and reduced oxygen delivery to the brain', 'C. A breathing pattern caused exclusively by motion sickness, unrelated to oxygen levels', 'D. Overbreathing that increases blood oxygen to toxic levels above FL100'],
  correct: 1,
  explanation: 'Hyperventilation (overbreathing) reduces CO2 in the blood (hypocapnia), causing cerebral vasoconstriction which reduces oxygen delivery to the brain. This produces tingling, dizziness, and cognitive impairment similar to hypoxia.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "channelised attention" and how does it differ from tunnelling?',
  options: ['A. Channelised attention occurs only during emergencies; tunnelling only occurs during routine operations', 'B. Channelised attention is beneficial; tunnelling is only relevant in multi-crew operations', 'C. Channelised attention is deliberate focused attention on one task; tunnelling is unintentional attention narrowing under stress — both can lead to missed information but channelised attention is a normal part of skill acquisition', 'D. Channelised attention and cognitive tunnelling are identical — both describe attentional narrowing under stress'],
  correct: 2,
  explanation: 'Channelised attention is deliberate, controlled focus on a specific task — normal and often necessary. Tunnelling (cognitive narrowing) is an uncontrolled, stress-driven narrowing of attention that inadvertently excludes critical information. Both can lead to missed cues.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of "pre-flight nutrition" in managing pilot performance?',
  options: ['A. Adequate pre-flight nutrition stabilises blood glucose levels, providing the brain\'s primary fuel — skipping meals before flight risks hypoglycaemia-related cognitive impairment during the duty period', 'B. Only long-haul pilots need to consider pre-flight nutrition — short-haul operations are unaffected', 'C. Pilots should avoid eating before flights to prevent motion sickness', 'D. Pre-flight nutrition has no measurable effect on cognitive performance during short flights'],
  correct: 0,
  explanation: 'Blood glucose provides the brain\'s primary energy source. Inadequate pre-flight nutrition risks declining blood glucose during flight, impairing concentration, judgement, and working memory. Regular balanced meals before duty are an important fatigue countermeasure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the black hole approach illusion and why is it dangerous?',
  options: ['A. An illusion caused by rain on the windscreen that distorts runway lighting and makes it appear closer than it is', 'B. A visual illusion caused by a sloping runway that makes a normal approach appear too high', 'C. An illusion at night over featureless terrain or water where the absence of ground lighting causes the pilot to perceive a higher approach angle than actual, leading to undershooting', 'D. A perception of tunnel vision caused by hypoxia on final approach at high-altitude aerodromes'],
  correct: 2,
  explanation: 'The black hole approach occurs at night over dark, featureless terrain. Without ground references, the pilot perceives a higher glideslope than actual and unconsciously descends below the safe approach path, risking controlled flight into terrain short of the runway.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "individual differences" in pilot performance?',
  options: ['A. Pilots vary significantly in cognitive style, stress tolerance, fatigue susceptibility, risk appetite, and situational awareness — these differences affect performance and should inform selection, training, and operational assignment', 'B. Individual differences are only relevant when evaluating pilots from different cultural backgrounds', 'C. Individual differences only apply to student pilots — professional pilots achieve equivalent performance standards by the end of their training', 'D. Individual differences are irrelevant to professional operations — standardised training eliminates meaningful performance differences'],
  correct: 0,
  explanation: 'Significant and stable individual differences exist in cognitive style, stress resilience, fatigue susceptibility, risk tolerance, and SA. Recognising these differences informs pilot selection, training design, operational assignment, and personal fatigue and stress management strategies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "expectation bias" in the context of weather assessment?',
  options: ['A. A positive bias where experienced pilots accurately predict weather deterioration before forecasters issue updates', 'B. The tendency to always expect worse weather than is actually forecast', 'C. A bias toward trusting ATC weather reports over ATIS observations', 'D. The tendency to interpret ambiguous weather information as supporting the weather conditions one expects or hopes for — leading pilots to proceed despite marginal conditions'],
  correct: 3,
  explanation: 'Expectation bias causes pilots to interpret ambiguous weather data in line with what they expect. A pilot expecting clear weather may interpret a cloud layer as scattered rather than broken, justifying continuation of a flight that should be diverted.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "overlearning" in pilot training and what is its benefit during emergency situations?',
  options: ['A. Excessive practice that leads to boredom and reduced motivation — to be avoided in modern training programmes', 'B. The tendency for experienced pilots to remember training more vividly than actual operational experience', 'C. Practising a procedure well beyond the point of initial proficiency so that it can be executed accurately under high stress, time pressure, and cognitive load without conscious attention', 'D. Learning additional optional procedures beyond the required training syllabus'],
  correct: 2,
  explanation: 'Overlearning encodes procedures into long-term procedural memory at a level that resists degradation under stress. Emergency memory items that are overlearned can be executed accurately even when the pilot is highly aroused, partially incapacitated, or operating under extreme time pressure.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors significance of "experience-based mental models"?',
  options: ['A. Mental models are internal representations of how aircraft systems work — relevant only to systems knowledge testing', 'B. Mental models are physical scale models used in training aircraft type — their accuracy is assessed during type ratings', 'C. Mental models are only relevant during initial training — experienced pilots no longer rely on them', 'D. Experienced pilots build rich mental models of aircraft, environments, and situations from past experience — these models enable rapid pattern recognition and prediction but can generate systematic errors when a new situation does not match the model'],
  correct: 3,
  explanation: 'Experience-based mental models enable rapid, efficient processing of familiar situations. They also create vulnerability — when a novel situation is encountered that superficially resembles a familiar one, the experienced pilot\'s mental model may generate an incorrect automatic response.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "natural mapping" in cockpit design and why does it matter?',
  options: ['A. The practice of mapping the aircraft\'s planned route on a paper chart before departure as a navigation backup', 'B. The placement of navigation equipment on the side of the cockpit closest to the pilot who primarily uses it', 'C. The positioning of the compass in the pilot\'s natural forward-looking sight line', 'D. Designing controls so their spatial arrangement or movement direction corresponds naturally to the movement or effect they produce — reducing the chance of confusion under stress or workload'],
  correct: 3,
  explanation: 'Natural mapping means control layout and movement corresponds intuitively to function — e.g. the left engine throttle on the left, pushing a control forward increases power. Poor mapping (e.g. a switch that moves up to select the down position) violates expectation and increases error under stress.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the correct response if carbon monoxide poisoning is suspected in flight?',
  options: ['A. Increase cabin heat to the maximum setting to burn off the CO', 'B. Increase altitude to reduce the concentration of CO in the cockpit', 'C. Open vents to increase airflow through the cockpit and continue the flight', 'D. Shut off the cabin heat, maximise fresh air, use supplemental oxygen if available, and land as soon as practicable'],
  correct: 3,
  explanation: 'Suspected CO poisoning requires immediate action: shut off the heat source (cabin heat often draws from the exhaust), open fresh air vents, use supplemental oxygen if available, and land as soon as practicable for medical assessment.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'How does the presence of passengers affect a solo pilot\'s decision-making?',
  options: ['A. Passenger expectations, expressed or implied, can create social pressure that biases pilots toward continuing a flight when safety considerations would indicate diverting or landing short — a form of social pressure on plan continuation', 'B. Passengers have no effect on decision-making — professional pilots maintain the same standards regardless of who is aboard', 'C. Passengers generally improve pilot performance through increased vigilance and the desire to impress', 'D. Passengers only affect decision-making in non-commercial operations — commercial pilots are trained to ignore passenger preferences'],
  correct: 0,
  explanation: 'Passenger presence creates social pressure — explicit ("we need to be there by 5pm") or implicit ("they\'re counting on me"). This pressure biases pilots toward plan continuation even when diversion or delay is the safer choice.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What makes hypoxia particularly dangerous for pilots?',
  options: ['A. It impairs the very cognitive functions needed to recognise its own symptoms, creating a false sense of wellbeing', 'B. It causes immediate loss of consciousness with no warning symptoms', 'C. It produces obvious blue discolouration of the fingernails that alerts the crew', 'D. It causes extreme pain which is distracting but not incapacitating'],
  correct: 0,
  explanation: 'The most dangerous aspect of hypoxia is that it impairs the brain\'s ability to recognise impairment. Pilots often feel euphoric and confident while their performance is severely degraded — they may not realise they are hypoxic.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the recommended response to discovering a significant error after it has been made in flight?',
  options: ['A. Complete the flight and file a voluntary safety report on landing to ensure anonymity', 'B. Immediately inform ATC to alert all other traffic of the potential impact of the error', 'C. Acknowledge the error openly, assess its consequences, take corrective action, monitor the outcome, and share the information with the crew without blame to improve collective SA', 'D. Conceal the error from the crew to maintain confidence in the flight — disclose only if it cannot be corrected'],
  correct: 2,
  explanation: 'Good CRM requires open, blame-free error communication within the crew. Acknowledging errors promptly allows the crew to understand the current state (SA), take corrective action, and learn without blame. Concealing errors from the other crew member degrades shared SA and can lead to compounding errors.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the human factors significance of "cultural differences" in international crew operations?',
  options: ['A. Cultural background shapes communication style, authority gradient attitudes, face-saving behaviours, and assertiveness norms — a crew from a high power-distance culture may have more difficulty challenging a captain\'s decision than a crew from a low power-distance culture', 'B. Cultural differences are only relevant in the first few flights with a new crew member', 'C. Cultural differences only affect language communication — technical competence is unaffected', 'D. Cultural differences have no measurable effect on CRM — all pilots are trained to ICAO standards'],
  correct: 0,
  explanation: 'Cultural differences can significantly affect CRM effectiveness. High power-distance cultures (where authority is not questioned) may create steep authority gradients. Different cultures have different norms for directness, face-saving, and assertiveness that affect how safety concerns are communicated.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is "proactive safety management" and how does it differ from reactive safety management?',
  options: ['A. Proactive safety is regulatory compliance monitoring; reactive is post-accident investigation', 'B. Proactive safety requires additional staffing for constant monitoring; reactive requires only auditors after incidents', 'C. Proactive safety identifies and mitigates hazards before accidents occur using data from incidents, near-misses, and audits; reactive safety responds to accidents after they occur — proactive is more effective and cost-efficient', 'D. They are equivalent — both are required by CASA SMS regulations for all AOC holders'],
  correct: 2,
  explanation: 'Proactive safety management uses incident reports, near-miss analysis, operational audits, and leading indicators to identify and correct hazards before they cause accidents. Reactive management only acts after something goes wrong — addressing one specific failure without necessarily identifying broader systemic vulnerabilities.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the human factors significance of "role reversal" drills in CRM training?',
  options: ['A. Captains complete FO tasks and FOs complete captain tasks to build overall knowledge', 'B. Experiencing the other crew member\'s role builds understanding of their workload, perspective, and information access — improving the quality of support and monitoring provided, and building empathy that improves CRM communication', 'C. Pilots switch seats to practise operating from the other side of the cockpit', 'D. Role reversal is a simulator instructor technique for assessing individual pilot proficiency'],
  correct: 1,
  explanation: 'Role reversal drills, where crew members experience each other\'s roles, build understanding of the other\'s workload, attentional focus, and information access. This understanding improves the support each crew member provides and enhances the quality of monitoring and communication.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the effect of mild hypoxia on colour vision?',
  options: ['A. Mild hypoxia reduces colour discrimination, particularly for the colour red, reducing the legibility of red warning lights and indicators', 'B. Mild hypoxia has no effect on colour vision — only visual acuity is affected', 'C. Mild hypoxia enhances colour sensitivity as the pupil dilates to let in more light', 'D. Mild hypoxia eliminates colour vision entirely — the pilot sees only in greyscale'],
  correct: 0,
  explanation: 'Cone photoreceptors (responsible for colour vision) are among the first cells affected by hypoxia. Red is the first colour affected, potentially reducing the detection of red warning lights, fire indicators, and navigation lights before other symptoms are noticed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the correct response to a visual illusion on approach?',
  options: ['A. Increase approach speed to ensure the aircraft can climb away from any obstacles below the glidepath', 'B. Cross-check with an independent reference such as PAPI, VASI, or the published glideslope — do not fly solely on visual impression', 'C. Close eyes momentarily to reset visual perception, then continue the approach', 'D. Trust the visual impression and adjust the approach to match the perceived glidepath'],
  correct: 1,
  explanation: 'Visual illusions on approach are common and dangerous. The correct response is to cross-check with PAPI, VASI, or instrument glideslope. Never fly an approach based on visual impression alone without corroboration.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "latent failure" and give an aviation example?',
  options: ['A. An autopilot failure that only becomes apparent when the pilot attempts to disengage it during an approach', 'B. A pre-existing system weakness that is hidden until it combines with other factors to cause an accident — for example, a procedural gap in training for an unusual configuration that remains safe until an unusual configuration is actually encountered', 'C. A slow fuel leak that is latent until sufficient fuel is lost to affect endurance calculations', 'D. A failure that has not yet been detected by maintenance — latent until the aircraft is opened for scheduled inspection'],
  correct: 1,
  explanation: 'Latent failures are pre-existing weaknesses in the system — poor training design, ambiguous procedures, inadequate equipment — that are harmless in isolation but dangerous when combined with an active failure or triggering event. Many accident reports identify multiple latent conditions that aligned to allow the active failure to propagate.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors challenge of "night VFR" operations for low-time pilots?',
  options: ['A. Night VFR requires additional instruments that low-time pilots may not have trained on', 'B. Low-time pilots have more difficulty with radio communications at night due to reduced frequency usage', 'C. Night operations are categorically prohibited for pilots under 200 hours total time', 'D. Night VFR removes the primary cue (external visual horizon and ground references) that low-time pilots rely on for attitude awareness, increasing spatial disorientation risk and approach illusion susceptibility'],
  correct: 3,
  explanation: 'Low-time pilots rely heavily on external visual references for attitude awareness. At night, these references are reduced or absent. This increases the risk of spatial disorientation and susceptibility to approach illusions such as the black hole effect.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "cognitive tunnelling" describe and what typically triggers it?',
  options: ['A. A visual restriction caused by high G-force during aerobatic manoeuvres', 'B. The inability to perceive aircraft attitude without external visual references', 'C. A narrowing of attention to a single focal concern, usually triggered by high stress or workload, causing other relevant information to be missed', 'D. The process of memorising checklist items by repetition until they become automatic'],
  correct: 2,
  explanation: 'Cognitive tunnelling is attentional narrowing under stress or high workload. The pilot focuses intensely on one element — a warning light, ATC instruction, or navigation problem — and loses awareness of other critical information such as airspeed or altitude.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "population stereotypes" in cockpit design?',
  options: ['A. Statistical data about the types of errors most commonly made by different pilot groups', 'B. Demographic profiles of pilots for whom cockpit ergonomics are optimised', 'C. Widely shared expectations about how controls work — violating them (e.g. a throttle that reduces power when pushed forward) increases error rates especially under stress', 'D. Design standards accounting for the physical dimensions of the average pilot population'],
  correct: 2,
  explanation: 'Population stereotypes are near-universal expectations about control direction and function. Cockpit designs that violate these stereotypes require conscious override of the instinctive response, dramatically increasing error rates under stress.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the role of flight crew licensing medicals from a human factors perspective?',
  options: ['A. Medicals are purely administrative — their content has no direct relationship to flight safety', 'B. Medical assessments identify physical and mental health conditions that could impair a pilot\'s performance or cause sudden incapacitation, functioning as a preventive layer in the accident causation chain', 'C. Medicals exist primarily to satisfy insurance requirements — the safety benefit is secondary to financial considerations', 'D. Flight crew medicals only assess cardiovascular fitness — cognitive and psychological screening is conducted separately by airlines'],
  correct: 1,
  explanation: 'Medical certification screens for conditions that could cause sudden incapacitation (cardiac events, epilepsy) or progressive performance degradation (uncorrected vision, medication side effects, mental health conditions). They are a proactive system defence against a human reliability failure.',
  reference: 'CASR Part 67'
},

{
  question: 'How does perceived time pressure affect pilot risk-taking?',
  options: ['A. Experienced pilots are immune to time pressure effects — only low-time pilots exhibit increased risk-taking under schedule pressure', 'B. Time pressure always reduces risk-taking by forcing pilots to take the quickest, most conservative option', 'C. Time pressure tends to increase risk-taking by narrowing attention, compressing the decision-making process, and causing pilots to accept lower safety margins to meet a schedule', 'D. Time pressure has no measurable effect on risk-taking unless it is explicitly stated by the operator'],
  correct: 2,
  explanation: 'Time pressure narrows attention, reduces the thoroughness of risk assessment, and drives pilots toward familiar (but not necessarily appropriate) responses. Commercial schedule pressure is a well-documented factor in aviation accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the human factors concept of "satisficing" describe in pilot decision-making?',
  options: ['A. Being satisfied with a sufficient outcome rather than continuing to search for the optimal solution — choosing a "good enough" option when time or information limits prevent finding the perfect answer', 'B. The process of satisfying all regulatory requirements before proceeding with a flight', 'C. The tendency to over-satisfy safety requirements to build excessively conservative safety margins', 'D. A deliberate technique for optimising fuel burn on long-range operations'],
  correct: 0,
  explanation: 'Satisficing (Simon, 1956) is the practice of choosing a sufficiently good option rather than exhaustively searching for the optimal one. In aviation, pilots under time pressure satisfice — choosing an acceptable option quickly rather than spending time finding the best one. It is rational under real-world constraints.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the concept of "calibration" mean in relation to a pilot\'s self-assessment?',
  options: ['A. The alignment of the autopilot\'s flight director bars with the ILS beam', 'B. How accurately a pilot\'s confidence in their ability matches their actual ability — overconfidence is poorly calibrated upward; excessive self-doubt is poorly calibrated downward', 'C. The regulatory process for certifying simulator accuracy before it can be used for licensed training', 'D. The physical calibration of cockpit instruments as required by the maintenance schedule'],
  correct: 1,
  explanation: 'Good calibration means a pilot\'s confidence in their abilities accurately reflects their actual performance. Overconfident (poorly calibrated upward) pilots underestimate risk and overlook skill gaps. Well-calibrated pilots seek feedback, maintain accurate self-awareness, and respond appropriately to their performance.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the runway slope illusion and how does it affect approach angle perception?',
  options: ['A. A steeply upsloping runway makes the approach appear too low, causing the pilot to fly too high and overshoot', 'B. A downsloping runway makes the approach appear too high, causing the pilot to fly a lower approach and risk undershooting', 'C. A sloping runway has no effect on perceived approach angle — only PAPI provides accurate guidance', 'D. An upsloping runway makes the approach appear too high, causing the pilot to fly a lower approach and risk undershooting'],
  correct: 3,
  explanation: 'An upsloping runway makes the normal approach angle appear too high, causing the pilot to unconsciously lower the nose and fly below the safe glidepath. A downsloping runway creates the opposite illusion.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "negative transfer" of training and give an aviation example?',
  options: ['A. The interference of a previously learned skill with a new, contradictory skill — for example, transitioning from an aircraft where flaps increase with handle forward to one where they decrease, initially causing control confusion', 'B. The loss of skills during a period of non-currency — no specific aviation example applies', 'C. The failure to apply simulator training to real-world conditions — caused by simulator fidelity limitations', 'D. The transfer of bad habits from an instructor to a student — prevented by CASA instructor certification requirements'],
  correct: 0,
  explanation: 'Negative transfer is a training concern in type transitions where the new aircraft requires responses different from those learned on the previous type. The old, automated response competes with the new required response, increasing error rates during early transition flights.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is workload management and what techniques can pilots use to reduce workload during critical phases?',
  options: ['A. Workload management is a scheduling tool — pilots manage it by requesting shorter flights from their operator', 'B. The proactive distribution of tasks across time and crew members — techniques include early task completion, using automation, briefing expectations, and avoiding non-essential tasks during critical phases', 'C. The practice of always flying manually to maintain currency and avoid automation dependency', 'D. A technique where the pilot assigns all non-flying tasks to the co-pilot and focuses exclusively on aircraft control'],
  correct: 1,
  explanation: 'Workload management involves distributing tasks optimally to prevent saturation. Techniques include completing tasks early (ATIS, approach briefing), using automation, delegating tasks in multi-crew, and establishing sterile cockpit periods during critical phases.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the primary human factors reason that aviation accidents often involve experienced, otherwise competent pilots?',
  options: ['A. Experienced pilots are required to fly in worse weather by their operators due to their certification level', 'B. Experience creates specific vulnerabilities — familiarity reduces vigilance, success history builds overconfidence, pattern recognition can misfire in truly novel situations, and hazardous attitudes like invulnerability develop over time', 'C. Experienced pilots fly more difficult routes and aircraft types — increased exposure accounts for all the difference', 'D. Medical conditions are more common in experienced pilots due to their older average age'],
  correct: 1,
  explanation: 'Experience creates benefits and vulnerabilities. Familiarity reduces vigilance. Past success without incident builds overconfidence and invulnerability. Pattern recognition that has always worked can misfire in novel situations. Experience does not immunise against human factors failures — it changes their character.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "availability heuristic" and how does it affect pilot risk assessment?',
  options: ['A. The tendency to use the first available aerodrome for diversion rather than the most suitable one', 'B. A tendency to select the most readily available weather forecast rather than the most accurate one', 'C. Assessing risk based on how easily a similar event can be recalled from memory — overestimating dramatic, memorable risks and underestimating statistically common but less vivid risks', 'D. A bias where experienced pilots are more accurate risk assessors than inexperienced ones'],
  correct: 2,
  explanation: 'The availability heuristic biases risk assessment toward risks that come easily to mind. Statistically common but less dramatic risks (fuel exhaustion, fatigue) may be systematically underestimated because they are less memorable than spectacular accidents.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation human factors significance of establishing "go-around triggers" before an approach?',
  options: ['A. Pre-defining specific conditions that will trigger a go-around (e.g. not stabilised by 1,000 ft AAL, no visual contact at DA) removes the decision from the high-pressure moment, countering plan continuation bias', 'B. Go-around triggers are the same as published missed approach points — no additional crew briefing is needed', 'C. Go-around triggers must be filed with ATC before commencing an instrument approach', 'D. Go-around triggers are only required for CAT II/III approaches — CAT I and visual approaches do not require pre-defined triggers'],
  correct: 0,
  explanation: 'Pre-defined go-around triggers make the go-around decision in advance under low pressure. When the defined condition is met, the decision is already made — the crew executes the go-around without the psychological cost of making a last-minute decision to abandon the approach.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What does the aviation safety concept of "defence in depth" mean for a pilot preparing for a flight?',
  options: ['A. Carry sufficient fuel for two additional alternates beyond the regulatory minimum', 'B. Brief all potential contingencies individually to ensure each is covered by a specific procedure', 'C. Fly at high altitude to provide maximum obstacle clearance', 'D. Use multiple independent checks — cross-checking charts against GPWS, verifying weather through multiple sources, using fuel calculations and gauge readings — so no single failure propagates to an accident'],
  correct: 3,
  explanation: 'Defence in depth means multiple independent safeguards so a single failure cannot cause an accident. A pilot using multiple independent navigation checks, multiple weather sources, and independent fuel calculations has multiple opportunities to catch any single error.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the most common precursor to loss of situational awareness in the flight deck?',
  options: ['A. Instrument failure leading to conflicting information', 'B. Poor inter-cockpit communication in multi-crew operations', 'C. Inadequate pre-flight planning that leaves gaps in route knowledge', 'D. High workload causing the pilot to focus on one task while other critical information is missed'],
  correct: 3,
  explanation: 'High workload is the most common precursor to loss of SA. When workload exceeds capacity, the pilot focuses on the most pressing task and loses awareness of other aspects of the flight — fuel, weather, position, traffic.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "natural mapping" in cockpit design mean and why does it reduce errors?',
  options: ['A. The placement of navigation equipment on the side closest to the pilot who primarily uses it', 'B. Designing controls so their spatial arrangement or movement corresponds naturally to the movement or effect they produce — reducing confusion under stress or workload', 'C. The practice of mapping the planned route on paper as a navigation backup', 'D. Positioning the compass in the pilot\'s natural forward-looking sight line'],
  correct: 1,
  explanation: 'Natural mapping means control layout corresponds intuitively to function — left engine throttle on the left, pushing forward increases power. Poor mapping violates expectation and increases errors under stress when the automatic response dominates.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "defensive flying" and why is it recommended for single-pilot operations?',
  options: ['A. Flying defensively means always filing an IFR flight plan even for VFR operations to ensure radar tracking', 'B. A proactive, systematic approach to flight operations that anticipates hazards, maintains high situational awareness, preserves options, and always has a plan B — compensating for the absence of a second crew member\'s monitoring', 'C. A confrontational approach to ATC communications that protects the pilot\'s legal rights', 'D. The practice of remaining in Class G airspace to avoid the additional workload of ATC communications'],
  correct: 1,
  explanation: 'Single-pilot operations lack the error-checking, SA support, and workload sharing of two-crew operations. Defensive flying compensates by: anticipating hazards, maintaining SA proactively, using structured decision-making, preserving options at all times, and briefing contingencies.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "attentional bottleneck" and why does it create risk during high-information phases?',
  options: ['A. The limitation that only one conscious cognitive task can be fully processed at a time — when multiple inputs compete, some are delayed or lost, increasing the chance of missed warnings or incomplete task completion', 'B. A physical bottle shape design used for cockpit oxygen system flow regulation', 'C. A regulatory concept limiting the number of ATC communications within a specified airspace area', 'D. A navigation technique used when approaches converge at the same fix'],
  correct: 0,
  explanation: 'The attentional bottleneck describes the fundamental cognitive limitation that conscious processing is serial, not parallel. During high-information phases (approach in IMC with multiple ATC calls), some inputs will be processed with delay or not at all.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Why is it important for a pilot to communicate uncertainty to their crew or ATC?',
  options: ['A. Communicating uncertainty allows the crew or controller to prioritise verification before it becomes a committed error', 'B. Uncertainty communications must be limited to the formal MAYDAY declaration procedure', 'C. Uncertainty only needs to be communicated to ATC if the pilot is unsure of their position', 'D. Communicating uncertainty is unprofessional — pilots should only transmit information they are confident about'],
  correct: 0,
  explanation: 'Communicating uncertainty ("I\'m not confident about that clearance") allows the crew to redirect attention to verify the uncertain element before it becomes a committed error. It is a critical CRM behaviour.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is the black hole approach illusion and why does it cause accidents?',
  options: ['A. A perception of tunnel vision caused by hypoxia on final approach at high-altitude aerodromes', 'B. A visual illusion caused by a sloping runway making a normal approach appear too high', 'C. An illusion caused by rain on the windscreen distorting runway lighting', 'D. A visual illusion at night where the absence of ground lighting causes the pilot to perceive a higher approach angle than actual, leading to undershooting the runway'],
  correct: 3,
  explanation: 'The black hole approach occurs at night over dark, featureless terrain. Without ground references the pilot perceives a higher glideslope than actual and unconsciously descends below the safe approach path — risking controlled flight into terrain short of the runway.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'Carbon monoxide poisoning from a leaking exhaust can produce symptoms easily confused with:',
  options: ['A. Dehydration — both cause thirst and reduced concentration', 'B. Hypoxia — both cause headache, dizziness, and cognitive impairment without obvious warning', 'C. Hypoglycaemia — both cause hunger and irritability', 'D. Hyperventilation — both cause tingling and lightheadedness'],
  correct: 1,
  explanation: 'Carbon monoxide (CO) poisoning produces symptoms nearly identical to hypoxia — headache, dizziness, cognitive impairment, and altered consciousness. CO binds to haemoglobin 200 times more strongly than oxygen, reducing oxygen delivery. A pulse oximeter will show normal saturation even with CO poisoning.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does the term "loss of control in-flight" (LOC-I) refer to?',
  options: ['A. Any situation where the autopilot disconnects unexpectedly during cruise flight', 'B. A regulatory term for accidents caused by mechanical failure of primary flight controls', 'C. The leading cause of fatal aviation accidents worldwide — aircraft entering flight envelope boundaries (stall, overspeed, unusual attitudes) that exceed the crew\'s ability to recover', 'D. A specific type of CFIT where the aircraft impacts terrain after entering a steep bank at low altitude'],
  correct: 2,
  explanation: 'LOC-I is the number one cause of fatal aviation accidents globally. It results from the aircraft exceeding the normal flight envelope — through stall, unusual attitude, or aerodynamic loss of control — in conditions where the crew cannot effect recovery, often due to spatial disorientation, startle, or inappropriate control inputs.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "distributed SA" mean in a multi-crew context?',
  options: ['A. SA data distributed between ground controllers and the flight crew via datalink', 'B. SA equally distributed between both crew members — each must monitor all items with equal attention', 'C. SA concentrated at one end of the aircraft — PF has flight SA, PM has procedural SA', 'D. The division of SA tasks between crew members — each pilot actively monitors different aspects of the flight, and communication integrates their individual perceptions into a shared model'],
  correct: 3,
  explanation: 'In multi-crew operations, SA is naturally distributed — the flying pilot focuses on aircraft control; the monitoring pilot attends to broader factors. Communication integrates these distributed perceptions into a shared crew mental model. Loss of communication breaks this integration.',
  reference: 'CASA CRM Training Standards'
},

{
  question: 'What is a just culture in aviation safety management?',
  options: ['A. A culture where only senior crew members can report safety concerns to management', 'B. A culture that distinguishes between honest errors (treated without punishment) and reckless behaviour or violations (which are not tolerated) — encouraging open reporting of safety information', 'C. A legal principle requiring courts to treat all aviation accidents as civil matters rather than criminal cases', 'D. A culture where all safety violations result in equal punishment regardless of intent'],
  correct: 1,
  explanation: 'A just culture distinguishes between blameless errors (which should be reported freely without fear of punishment) and reckless behaviour or intentional violations (which are not tolerated). It creates an environment where safety information flows freely.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is "expectation bias" and how does it affect weather decision-making?',
  options: ['A. A positive bias where experienced pilots accurately predict weather deterioration before forecasters', 'B. A bias toward trusting ATC weather reports over ATIS observations', 'C. A tendency to always expect worse weather than is actually forecast', 'D. The tendency to interpret ambiguous weather information as confirming what the pilot expects to see — leading pilots to continue despite marginal conditions because the weather "looks like it should improve"'],
  correct: 3,
  explanation: 'Expectation bias causes pilots to interpret ambiguous weather data in line with what they expect. A pilot expecting clear weather may interpret a cloud layer as scattered rather than broken, justifying continuation of a flight that should be diverted.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the significance of "human reliability analysis" (HRA) in aviation safety assessment?',
  options: ['A. A maintenance assessment method identifying components most likely to fail under human misuse', 'B. A method for quantifying the probability of human error on specific tasks, used in safety cases to demonstrate that human performance risks are within acceptable bounds', 'C. A statistical analysis of pilot error rates used by CASA for licence renewal decisions', 'D. A test battery used by DAME to assess pilot cognitive reliability during medical renewals'],
  correct: 1,
  explanation: 'HRA quantifies human error probabilities for specific tasks under specific conditions. It is used in safety cases and safety risk assessments to demonstrate that human performance risks are at an acceptable level when combined with other system safeguards.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is the effect of red cockpit lighting on night vision?',
  options: ['A. Red light minimally affects rhodopsin (the rod photopigment), preserving dark adaptation while providing sufficient illumination to read instruments', 'B. Red light destroys night-adapted rhodopsin faster than white light, requiring full re-adaptation after cockpit lighting use', 'C. Red light improves colour discrimination of cockpit instruments at night compared to white light', 'D. Red light has the same effect on night vision as white light — the colour is irrelevant'],
  correct: 0,
  explanation: 'Rod photoreceptors (responsible for night vision) are insensitive to red wavelengths. Red lighting allows pilots to read instruments and charts with minimal disruption to their dark adaptation, preserving the ability to see outside at night.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the concept of "error chains" and how can they be broken?',
  options: ['A. Error chains are only relevant to maintenance — flight crew errors are always isolated events', 'B. A chain of errors is inevitable — once the first error occurs, the accident chain cannot be stopped', 'C. A sequence of errors and unsafe conditions that collectively lead to an accident — any broken link stops the chain, and breaking the chain early (before consequences become severe) prevents the accident', 'D. Error chains only develop over multiple flights — within a single flight no chain can develop'],
  correct: 2,
  explanation: 'Most accidents involve a chain of errors — no single cause. Breaking any link in the chain prevents the accident. Early recognition and correction of the first error is most effective. CRM skills, checklists, and monitoring all provide opportunities to detect and break error chains.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "continuation bias" and what should a pilot do to counter it?',
  options: ['A. A bias toward publishing all fuel figures conservatively — countered by realistic fuel planning', 'B. A preference for maintaining current altitude rather than climbing or descending — countered by following ATC instructions promptly', 'C. A tendency to continue the original plan despite evidence that it should change — countered by pre-defining decision points and criteria before flight', 'D. A bias toward continuing toward the nearest aerodrome in any emergency — countered by evaluating all options'],
  correct: 2,
  explanation: 'Continuation bias (get-there-itis) is countered by: pre-defining go/no-go criteria before flight, establishing personal limits, checking in with the current situation at regular intervals, and being willing to acknowledge when the plan needs to change.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "situation awareness decay" and when is it most likely?',
  options: ['A. The gradual forgetting of pre-flight briefing information as flight duration increases', 'B. The reduction in instrument scanning frequency that naturally occurs during long cruise segments', 'C. The progressive degradation of an accurate mental model of the flight as circumstances change faster than the pilot updates their understanding — most likely during rapidly evolving situations and after periods of automation reliance or distraction', 'D. A cognitive effect specific to night flying where the absence of visual references degrades SA regardless of instrument accuracy'],
  correct: 2,
  explanation: 'SA decay occurs when the pilot\'s mental model of the flight falls behind the actual state of affairs — most likely during rapidly changing conditions (weather, traffic, ATC), after distraction, or during periods of passive automation monitoring where active engagement has lapsed.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "self-incrimination avoidance" and what safety barrier does it create?',
  options: ['A. A REPCON regulatory protection preventing CASA from using voluntary reports as enforcement evidence', 'B. A positive characteristic where employees self-identify improvement opportunities without pressure', 'C. A legal protection for pilots who refuse to testify against themselves in safety investigations', 'D. A culture where employees hide safety problems to avoid blame — preventing safety information from reaching those who could address systemic issues'],
  correct: 3,
  explanation: 'Fear of incrimination leads to under-reporting, sanitised reporting, and concealment of safety information. This prevents systemic hazards from being identified and corrected — just culture frameworks specifically address this.',
  reference: 'CASA Safety Management System'
},

{
  question: 'What is "vigilance decrement" and when is it most pronounced in aviation?',
  options: ['A. A decrease in visual acuity after prolonged cockpit instrument lighting exposure', 'B. The progressive decline in ability to detect rare signals during sustained monotonous monitoring — most pronounced after approximately 30–45 minutes of continuous monitoring', 'C. A reduction in alertness during the circadian peak — corrected by increasing task workload', 'D. A reduction in instrument scanning frequency during approach preparation — managed by checklists'],
  correct: 1,
  explanation: 'Vigilance decrement is the progressive decline in signal detection performance during sustained monotonous monitoring. Pilots on long cruise legs become less likely to detect instrument anomalies, weather changes, or developing traffic conflicts after extended monotonous monitoring.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "mode awareness" and why is it critical in glass cockpit aircraft?',
  options: ['A. The pilot\'s accurate knowledge of which automation modes are currently active and what each mode will cause the aircraft to do — critical because mode errors cause unexpected aircraft behaviour', 'B. The pilot\'s understanding of weather radar mode settings during convective weather navigation', 'C. Awareness of the aircraft\'s attitude and flight mode during unusual attitude recovery', 'D. Awareness of the aircraft\'s current VOR or ILS mode during an instrument approach'],
  correct: 0,
  explanation: 'Mode awareness is knowing which autopilot/FMS modes are active and their implications. Glass cockpit aircraft have many modes; a pilot who loses track of the active mode may give inputs that produce unexpected, potentially dangerous, aircraft responses.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "adaptive capacity" in a pilot mean and how is it developed?',
  options: ['A. Physical adaptation to the seat and controls of a new aircraft type', 'B. The regulatory adaptation period allowed after a licence endorsement is added', 'C. The ability to effectively manage novel situations that fall outside standard procedures — developed through varied training scenarios, deliberate exposure to non-standard situations, and reflective learning from experience', 'D. Adaptation to night flying that develops over the first 50 hours of night operations'],
  correct: 2,
  explanation: 'Adaptive capacity goes beyond procedural compliance. It is the capacity to generate effective responses to genuinely novel situations. It is developed through exposure to varied scenarios (not just standard drills), reflective debriefing, and building broad domain knowledge.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "positive transfer of training" describe and when can it be harmful?',
  options: ['A. The sharing of skills between crew members during a flight to maintain proficiency', 'B. The regulatory transfer of simulator training hours into flight logbook credit', 'C. Successful transfer of skills from training to operational flight — this is always desirable', 'D. The application of skills learned in one context to a new, similar context — harmful when the new context requires a different response and the old habit interferes with learning the correct new response'],
  correct: 3,
  explanation: 'Positive transfer occurs when skills from one context apply correctly to another. Negative transfer occurs when the previous skill interferes with learning a new, different response — for example, a pilot transitioning from a conventional aircraft where raising a lever opens a valve to one where raising the same lever closes it.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the aviation significance of "self-regulation" in professional pilots?',
  options: ['A. The internal capacity to monitor one\'s own performance, recognise degradation, and take appropriate corrective action — fundamental to safe single-pilot operations and professional conduct generally', 'B. The legal self-certification of fitness to fly provided by a valid medical certificate', 'C. The CASA-authorised deregistration of pilots from the medical system', 'D. The ability to regulate transponder modes without ATC instruction in uncontrolled airspace'],
  correct: 0,
  explanation: 'Self-regulation in professional pilots includes: monitoring one\'s own performance, recognising fatigue and impairment, maintaining standards without external supervision, reporting concerns, and acting on self-assessment when performance is degraded.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What does "redundancy" in aviation system design achieve from a human factors perspective?',
  options: ['A. Redundancy increases weight, which is always negative — it is only justified when safety requirements make it unavoidable', 'B. Redundancy provides additional defensive layers that catch or absorb individual component or human failures before they propagate to accidents — a hardware equivalent of the Swiss cheese model', 'C. Redundancy only applies to flight-critical systems — human factors benefit is limited to mechanical reliability', 'D. Redundancy simplifies decision-making by always providing an automatic backup that requires no pilot action'],
  correct: 1,
  explanation: 'Redundancy in design (dual hydraulic systems, two crew members, backup displays) provides additional opportunities to detect and correct failures before they cascade to accidents. It is the hardware equivalent of having multiple defensive layers — if one fails, others remain.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the function of a standard operating procedure (SOP) from a human factors perspective?',
  options: ['A. SOPs are legal documents that define minimum regulatory compliance — their primary function is liability management', 'B. SOPs encode best practice into predictable, repeatable procedures that reduce variability, support error detection through predictable action sequences, and reduce the cognitive load of routine operations — freeing capacity for non-routine demands', 'C. SOPs exist primarily to standardise training — they are not intended to dictate actual operational behaviour', 'D. SOPs reduce pilot workload by eliminating the need for individual judgement during normal operations'],
  correct: 1,
  explanation: 'SOPs encode experience and best practice into predictable sequences. Predictable actions are easier for a second crew member to monitor for errors. They reduce the cognitive load of routine operations, freeing mental capacity for non-routine events. Deviation from SOP is a significant safety indicator.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "habitual action error" in aviation and give a typical example?',
  options: ['A. Habitual actions are only hazardous in training — operational pilots have correct habits through experience', 'B. Habitual action errors are positive — they allow experts to complete routine tasks efficiently', 'C. When an automated action is triggered in the wrong context — for example, reaching for a control at a habitual time when the procedure on a new aircraft type differs from the previous type', 'D. Habitual action errors only occur with physical controls — display-based operations are immune'],
  correct: 2,
  explanation: 'Habitual actions are procedures so well-practised that they run automatically. In a new aircraft type where the correct action differs from the habitual one, the old habit may execute instead — particularly under stress when automatic responses dominate.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is "goal gradient effect" and how does it affect pilot decision-making near the destination?',
  options: ['A. The improvement in navigation accuracy as the destination GNSS beacon grows stronger', 'B. The regulatory requirement to increase position report frequency within 100 NM of the destination', 'C. The tendency to increase motivation and accept more risk as a goal (destination) approaches — a pilot 30 NM from the destination may accept weather or fuel risks they would not accept at the departure aerodrome', 'D. The gradual reduction in approach speed as the aircraft nears the threshold'],
  correct: 2,
  explanation: 'The goal gradient effect causes motivation to increase and risk tolerance to rise as a goal approaches. A pilot near the destination may press through marginal conditions they would refuse to depart into — being "almost there" amplifies plan continuation bias.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

{
  question: 'What is the "eight-hour bottle to throttle" rule and does it guarantee fitness to fly?',
  options: ['A. An industry standard only — there is no regulatory minimum time between alcohol and flight in Australia', 'B. A rule requiring 8 hours between consuming alcohol and any aviation-related duty including briefings', 'C. A minimum 8 hours between the last alcoholic drink and flight — a minimum requirement, not a guarantee of fitness to fly since alcohol metabolism varies significantly between individuals', 'D. A mandatory 8-hour rest period after landing — unrelated to alcohol consumption'],
  correct: 2,
  explanation: 'The 8-hour rule is a minimum — it does not guarantee the pilot is fit to fly. Alcohol metabolism varies by individual, body weight, and quantity consumed. A pilot may remain legally impaired even after 8 hours. The regulatory limit is also 0.02 g/210 L breath.',
  reference: 'Civil Aviation Act 1988 s.30DB / CASR 91.695'
},

{
  question: 'What is "regulatory capture" in the context of aviation safety oversight?',
  options: ['A. The legal process by which operators are required to comply with new CASA regulations', 'B. The process by which CASA apprehends pilots who violate flight rules', 'C. The seizure of an aircraft by authorities following a serious safety incident', 'D. A phenomenon where a regulatory body begins to act in the interests of the industry it regulates rather than the public it was established to protect — weakening safety oversight effectiveness'],
  correct: 3,
  explanation: 'Regulatory capture occurs when a regulatory body develops close relationships with the regulated industry and begins prioritising industry interests over public safety. In aviation, this can lead to insufficient safety oversight and enforcement.',
  reference: 'CASA Human Factors for Aviation — Basic Handbook'
},

]
