/* ===== Quiz Data ===== */
const questions =  [
  // --- MODULE 1: CHOKE MANIFOLD (11 Questions) ---
  {
    question: "What is the main function of a choke manifold in well testing?",
    options: ["To separate phases", "To control flow rate and pressure", "To house the burner", "To store oil"],
    correctIndex: 1,
    explanation: "It regulates flow and pressure before fluid enters surface processing equipment."
  },
  {
    question: "Where is the choke manifold located?",
    options: ["Upstream of flowhead", "Downstream of flowhead", "Inside the separator", "On the flare boom"],
    correctIndex: 1,
    explanation: "It is positioned downstream of the flowhead to manage fluids coming from the well."
  },
  {
    question: "What characterizes 'critical flow'?",
    options: ["Fluid stops moving", "Downstream pressure doesn't affect upstream rate", "Sand production starts", "Pressure reaches 15000 psi"],
    correctIndex: 1,
    explanation: "Critical flow isolates the well's performance from surface fluctuations."
  },
  {
    question: "Which component holds calibrated choke beans?",
    options: ["Adjustable choke", "Fixed choke box", "Swivel", "Gate valve"],
    correctIndex: 1,
    explanation: "The fixed choke box is used specifically for inserting pre-sized beans."
  },
  {
    question: "Why use both fixed and adjustable chokes?",
    options: ["For redundancy only", "For maximum control and flexibility", "To increase temperature", "To filter sand"],
    correctIndex: 1,
    explanation: "Adjustable chokes allow on-the-fly changes; fixed chokes provide long-term stability."
  },
  {
    question: "In pressure equalization, which valve is opened first?",
    options: ["Upstream", "Downstream", "Master", "Swab"],
    correctIndex: 1,
    explanation: "Opening the downstream valve first prevents sudden pressure surges."
  },
  {
    question: "Which is a common pressure rating for choke manifolds?",
    options: ["2000 psi", "10000 psi", "25000 psi", "500 psi"],
    correctIndex: 1,
    explanation: "Standard ratings are 5k, 10k, and 15k psi."
  },
  {
    question: "What is the role of the thermowell?",
    options: ["Measure pressure", "Measure temperature", "Inject chemicals", "Bleed air"],
    correctIndex: 1,
    explanation: "Thermowells house sensors to monitor fluid temperature."
  },
  {
    question: "How many gate valves are typically in a choke manifold?",
    options: ["Two", "Four", "Six", "Eight"],
    correctIndex: 1,
    explanation: "A standard setup typically includes four gate valves for routing."
  },
  {
    question: "What does the manifold limit to protect the reservoir?",
    options: ["Fluid temperature", "Sand and water/gas coning", "Pipe vibration", "H2S concentration"],
    correctIndex: 1,
    explanation: "By limiting flow, it prevents damage to the reservoir structure."
  },
  {
    question: "When diverting to a fixed choke, what is the final step?",
    options: ["Open the adjustable side", "Bleed pressure off the inactive side", "Increase pump speed", "Switch the master valve"],
    correctIndex: 1,
    explanation: "The inactive side must be isolated and bled for safety."
  },

  // --- MODULE 2: OIL & GAS MANIFOLDS (11 Questions) ---
  {
    question: "What is the primary purpose of an oil manifold?",
    options: ["Measure density", "Divert oil to various destinations", "Compress gas", "Heat the oil"],
    correctIndex: 1,
    explanation: "It routes oil to burners, tanks, or lines without stopping flow."
  },
  {
    question: "Why use two burners (port/starboard)?",
    options: ["Increase flow", "Wind direction safety", "Backup in case of fire", "Separate oil/gas"],
    correctIndex: 1,
    explanation: "Offshore rigs switch burners based on wind to blow heat away from the rig."
  },
  {
    question: "How many valves are on a standard oil manifold?",
    options: ["Two", "Three", "Five", "Seven"],
    correctIndex: 2,
    explanation: "An oil manifold typically uses five 2-inch ball valves."
  },
  {
    question: "What is the pressure rating of the skid-mounted manifolds?",
    options: ["5000 psi", "1440 psi", "10000 psi", "300 psi"],
    correctIndex: 1,
    explanation: "These are generally rated for 1440 psi."
  },
  {
    question: "The gas manifold diverts gas from where?",
    options: ["Wellhead", "Separator", "Storage tank", "Choke"],
    correctIndex: 1,
    explanation: "It takes the separated gas from the separator's outlet."
  },
  {
    question: "What is the size of the gas manifold valves?",
    options: ["1-inch", "2-inch", "3-inch", "4-inch"],
    correctIndex: 2,
    explanation: "Gas manifolds usually utilize 3-inch ball valves."
  },
  {
    question: "The 'Golden Rule' of manifold operation is:",
    options: ["Close then open", "Open then close", "Close both at once", "Never use valves"],
    correctIndex: 1,
    explanation: "Open the new valve before closing the old one to avoid pressure spikes."
  },
  {
    question: "Why are valve handles provided on the skid?",
    options: ["For decoration", "To avoid using 'cheaters'", "To increase torque", "To measure flow"],
    correctIndex: 1,
    explanation: "Using only provided handles prevents valve stem damage."
  },
  {
    question: "What prevents operational errors on the manifold?",
    options: ["Automatic sensors", "Valve labels", "High pressure", "Flashlights"],
    correctIndex: 1,
    explanation: "Labels like 'Separator to Tank' ensure correct routing."
  },
  {
    question: "Oil from the manifold can be sent to:",
    options: ["Burners", "Storage tanks", "Flow lines", "All of the above"],
    correctIndex: 3,
    explanation: "The manifold is designed to route oil to all these destinations."
  },
  {
    question: "What type of valves are primarily used in these manifolds?",
    options: ["Gate", "Needle", "Ball", "Check"],
    correctIndex: 2,
    explanation: "Ball valves are standard for these skid-mounted routing manifolds."
  },

  // --- MODULE 3: ESD SYSTEM (12 Questions) ---
  {
    question: "What does ESD stand for?",
    options: ["External Signal Device", "Emergency Shutdown", "Extra Safety Design", "Engine Starting Device"],
    correctIndex: 1,
    explanation: "ESD is the safety system used to close the well in emergencies."
  },
  {
    question: "What power source does the ESD control skid use?",
    options: ["Electric only", "Hydraulic and Air", "Steam", "Manual only"],
    correctIndex: 1,
    explanation: "The ESD uses hydraulic pressure for actuators and air for the control loop."
  },
  {
    question: "Maximum hydraulic pressure for the ESD actuator is:",
    options: ["1000 psi", "3000 psi", "6000 psi", "10000 psi"],
    correctIndex: 2,
    explanation: "The system supports actuators up to 6000 psi."
  },
  {
    question: "The high-pressure pilot triggers when:",
    options: ["Pressure drops", "Pressure exceeds threshold", "Fire is detected", "Air tank is empty"],
    correctIndex: 1,
    explanation: "It monitors for overpressure events in the flowline."
  },
  {
    question: "What is the 'fail-safe' action of the ESD system?",
    options: ["Vents air pressure", "Increases pump speed", "Opens all valves", "Sends an email"],
    correctIndex: 0,
    explanation: "Venting air triggers the interface valve to release hydraulic pressure and close the well."
  },
  {
    question: "Standard air loop pressure for pilots/stations is:",
    options: ["5 psi", "30 psi", "150 psi", "1000 psi"],
    correctIndex: 1,
    explanation: "The control loop typically operates at 30 psi."
  },
  {
    question: "Where is the SSV located?",
    options: ["After separator", "Upstream of choke", "Inside the tank", "On the burner"],
    correctIndex: 1,
    explanation: "The Surface Safety Valve is upstream of the choke manifold."
  },
  {
    question: "The ESD panel's air vessel stores air at:",
    options: ["30 psi", "150 psi", "6000 psi", "100 psi"],
    correctIndex: 1,
    explanation: "The main air reservoir stores compressed air at 150 psi."
  },
  {
    question: "Which valve speeds up the shutdown by dumping air?",
    options: ["Bypass valve", "Check valve", "Quick exhaust valve", "Reset valve"],
    correctIndex: 2,
    explanation: "Quick exhaust valves allow for rapid air venting."
  },
  {
    question: "What component connects the air signal to hydraulic pressure?",
    options: ["Hydraulic tank", "Interface valve", "Pressure gauge", "Hose reel"],
    correctIndex: 1,
    explanation: "The interface valve manages hydraulic release based on the air signal."
  },
  {
    question: "ESD push-button stations are usually located:",
    options: ["Only on the manifold", "At strategic points around the rig", "Inside the wellbore", "On the flare boom"],
    correctIndex: 1,
    explanation: "Stations are placed where personnel can reach them easily in danger."
  },
  {
    question: "What is the purpose of the reset valve?",
    options: ["To start the fire", "To restore the air loop after a trip", "To drain the oil tank", "To change the pressure rating"],
    correctIndex: 1,
    explanation: "The reset valve is used to re-pressurize the control loop after a shutdown."
  },

  // --- MODULE 4: FLOWHEAD (11 Questions) ---
  {
    question: "Is a flowhead temporary or permanent?",
    options: ["Temporary", "Permanent", "Semi-permanent", "Used only in drilling"],
    correctIndex: 0,
    explanation: "Flowheads are temporary surface shut-off devices for well testing."
  },
  {
    question: "Which valve is the primary barrier for the wellbore?",
    options: ["Swab valve", "Master valve", "Kill valve", "Wing valve"],
    correctIndex: 1,
    explanation: "The master valve is the main isolation point for the downhole string."
  },
  {
    question: "Which valve allows tool entry (wireline)?",
    options: ["Master", "Flow line", "Swab", "Kill"],
    correctIndex: 2,
    explanation: "The swab valve at the top allows vertical entry for tools."
  },
  {
    question: "The outlet wing valve is also known as:",
    options: ["Master valve", "Flow line valve", "Swab valve", "Kill valve"],
    correctIndex: 1,
    explanation: "The flow line valve is the exit for production fluids."
  },
  {
    question: "The kill line valve is used for:",
    options: ["Flowing oil", "Pumping mud/stimulation fluids", "Measuring gas", "Venting pressure"],
    correctIndex: 1,
    explanation: "The inlet wing (kill line) is for pumping fluids into the well."
  },
  {
    question: "What allows the test string to rotate?",
    options: ["Master valve", "Swivel", "Wing valve", "Actuator"],
    correctIndex: 1,
    explanation: "The swivel allows independent rotation of the string."
  },
  {
    question: "Should you rotate the swivel under pressure?",
    options: ["Yes, always", "Only at high speeds", "No", "Only during H2S tests"],
    correctIndex: 2,
    explanation: "Rotating under pressure can damage the swivel seals."
  },
  {
    question: "The flow line valve is typically connected to:",
    options: ["A hand pump", "The ESD system", "The burner only", "A water tank"],
    correctIndex: 1,
    explanation: "It is usually hydraulically actuated and linked to the ESD."
  },
  {
    question: "What protects the threads of the flowhead?",
    options: ["Grease", "Handling subs", "Plastic caps", "Paint"],
    correctIndex: 1,
    explanation: "Subs protect the main block threads and aid in handling."
  },
  {
    question: "Where is the swab valve located?",
    options: ["Below the master valve", "Above the master valve", "On the kill line", "Inside the swivel"],
    correctIndex: 1,
    explanation: "It sits at the top of the main block for tool access."
  },
  {
    question: "What supports the test string weight at the surface?",
    options: ["Separator", "Flowhead", "Tanks", "Burners"],
    correctIndex: 1,
    explanation: "The flowhead supports the weight of the downhole test string."
  },

  // --- MODULE 5: TEST SEPARATOR (12 Questions) ---
  {
    question: "How many phases does a test separator separate?",
    options: ["One", "Two", "Three", "Four"],
    correctIndex: 2,
    explanation: "It separates gas, oil, and water (3 phases)."
  },
  {
    question: "Which component removes oil mist from gas?",
    options: ["Inlet deflector", "Weir", "Mist extractor", "Vortex breaker"],
    correctIndex: 2,
    explanation: "The mist extractor filters out liquid droplets from the gas stream."
  },
  {
    question: "Separation is based on differences in:",
    options: ["Color", "Density", "Temperature", "Odor"],
    correctIndex: 1,
    explanation: "Gravity separation relies on the different weights/densities of the phases."
  },
  {
    question: "What prevents gas from exiting the liquid line?",
    options: ["Inlet deflector", "Vortex breaker", "Foam breaker", "Weir"],
    correctIndex: 1,
    explanation: "Vortex breakers stop whirlpools that would pull gas into the liquid outlet."
  },
  {
    question: "Where does the oil overflow into its compartment?",
    options: ["Through the mist extractor", "Over the weir", "Under the deflector", "Through the vortex breaker"],
    correctIndex: 1,
    explanation: "Oil spills over the weir into the measurement section."
  },
  {
    question: "How is high-flow oil typically metered?",
    options: ["Positive Displacement", "Vortex meter", "Bucket method", "Tape measure"],
    correctIndex: 1,
    explanation: "Vortex meters are used for higher oil flow rates."
  },
  {
    question: "What handles gas measurement?",
    options: ["PD meter", "Daniel Orifice meter", "Vortex meter", "Shrinkage tester"],
    correctIndex: 1,
    explanation: "Orifice meters are the standard for gas flow measurement."
  },
  {
    question: "What estimates volume loss from gas release?",
    options: ["Shrinkage tester", "Density meter", "Thermowell", "Borden tube"],
    correctIndex: 0,
    explanation: "The shrinkage tester measures how much oil 'shrinks' as gas escapes."
  },
  {
    question: "What is used to protect recorders from H2S?",
    options: ["Steam", "Hydraulic oil/diesel in scrubbers", "Sand", "Plastic bags"],
    correctIndex: 1,
    explanation: "Oil or diesel scrubbers filter out corrosive H2S."
  },
  {
    question: "What breaks up oil droplets to help them separate?",
    options: ["Mist extractor", "Coalescing plates", "Vortex breaker", "Inlet deflector"],
    correctIndex: 1,
    explanation: "Coalescing plates help small droplets group into larger ones."
  },
  {
    question: "PRVs on separators are usually:",
    options: ["Manually operated", "Pilot operated", "Never used", "Made of rubber"],
    correctIndex: 1,
    explanation: "Pilot-operated pressure relief valves ensure precise overpressure protection."
  },
  {
    question: "What controls liquid levels in the separator?",
    options: ["Manual handwheels", "Level controllers and valves", "The weir only", "Gas pressure"],
    correctIndex: 1,
    explanation: "Automatic controllers use floats and valves to maintain levels."
  },

  // --- MODULE 6: TANKS (11 Questions) ---
  {
    question: "Is a gauge tank pressurized?",
    options: ["Yes", "No", "Only during tests", "Always at 150 psi"],
    correctIndex: 1,
    explanation: "Gauge tanks are atmospheric (non-pressurized)."
  },
  {
    question: "What is a main use for gauge tanks?",
    options: ["High-pressure storage", "Calibrating meters at low flow", "Separating gas", "Cooling oil"],
    correctIndex: 1,
    explanation: "They are used for calibration and measuring low flow rates."
  },
  {
    question: "Can gauge tanks be used with H2S?",
    options: ["Yes", "No", "Only with masks", "Only offshore"],
    correctIndex: 1,
    explanation: "No, they vent directly to the atmosphere, making H2S lethal."
  },
  {
    question: "What prevents fire from entering the tank vent?",
    options: ["Water seal", "Flame arrestor", "Gate valve", "Gas scrubber"],
    correctIndex: 1,
    explanation: "Flame arrestors stop flame propagation by absorbing heat."
  },
  {
    question: "Surge tanks are suitable for H2S because they are:",
    options: ["Bigger", "Pressurized", "Made of gold", "Always offshore"],
    correctIndex: 1,
    explanation: "Pressurized containment prevents toxic gas from venting into the work area."
  },
  {
    question: "Dual compartments in surge tanks allow for:",
    options: ["Separating oil and water", "Continuous flow/measurement", "Storage of tools", "Mixing chemicals"],
    correctIndex: 1,
    explanation: "One fills while the other empties, keeping the test running."
  },
  {
    question: "What prevents static charge buildup?",
    options: ["Grounding strap", "Flame arrestor", "Vortex breaker", "PRV"],
    correctIndex: 0,
    explanation: "Grounding straps safely discharge static electricity."
  },
  {
    question: "A surge tank can act as a:",
    options: ["Primary separator", "Second-stage separator", "Flare boom", "Choke manifold"],
    correctIndex: 1,
    explanation: "By lowering pressure, more gas breaks out, acting as a second stage."
  },
  {
    question: "Before repairing a tank, you must:",
    options: ["Paint it", "Steam clean and degas it", "Fill it with oil", "Open the flare"],
    correctIndex: 1,
    explanation: "Cleaning and degassing are mandatory for safe entry."
  },
  {
    question: "Meter factor is calculated by comparing meter volume to:",
    options: ["Choke size", "Actual tank volume", "Gas flow", "Well pressure"],
    correctIndex: 1,
    explanation: "Comparing the meter to the physical tank level provides the correction factor."
  },
  {
    question: "Vertical surge tanks often have:",
    options: ["Flame arrestors", "High/Low level alarms", "Wooden lids", "Open vents"],
    correctIndex: 1,
    explanation: "Alarms help prevent overfilling or running dry."
  },

  // --- MODULE 7: TRANSFER PUMPS (12 Questions) ---
  {
    question: "What is the primary role of a transfer pump?",
    options: ["Circulate mud", "Move fluid from tanks to manifold", "Inject acid", "Lift oil from the reservoir"],
    correctIndex: 1,
    explanation: "They transfer processed oil from storage to disposal/lines."
  },
  {
    question: "How do PD pumps move liquid?",
    options: ["High-speed impellers", "Fixed volume per revolution", "Heating the fluid", "Gravity"],
    correctIndex: 1,
    explanation: "Positive Displacement pumps trap and move fixed quantities."
  },
  {
    question: "Which pump is best for high viscosity?",
    options: ["Centrifugal", "Positive Displacement", "Water pump", "Fan"],
    correctIndex: 1,
    explanation: "PD pumps (like screw or gear) handle thick fluids efficiently."
  },
  {
    question: "Centrifugal pumps use what for movement?",
    options: ["Pistons", "Spinning impeller", "Diaphragms", "Screws"],
    correctIndex: 1,
    explanation: "An impeller creates centrifugal force to move the fluid."
  },
  {
    question: "Which pump requires a PRV for safety?",
    options: ["Centrifugal", "Positive Displacement", "Hand pump", "None"],
    correctIndex: 1,
    explanation: "PD pumps can burst pipes if downstream is blocked; a PRV is essential."
  },
  {
    question: "A Mono pump is what type?",
    options: ["Centrifugal", "Screw (PD)", "Gear", "Diaphragm"],
    correctIndex: 1,
    explanation: "Mono pumps are screw-type PD pumps."
  },
  {
    question: "What is a disadvantage of Diaphragm pumps?",
    options: ["Too heavy", "High pulsations", "Cannot handle H2S", "Too fast"],
    correctIndex: 1,
    explanation: "The reciprocating motion causes flow and pressure pulsations."
  },
  {
    question: "Sundyne pumps are typically:",
    options: ["Gear pumps", "Centrifugal pumps", "Manual pumps", "Steam pumps"],
    correctIndex: 1,
    explanation: "Sundyne pumps are high-speed centrifugal pumps."
  },
  {
    question: "Which pump can easily handle oil impurities and H2S?",
    options: ["Viking", "Sundyne", "Standard water pump", "Plastic pump"],
    correctIndex: 1,
    explanation: "Sundyne pumps are often built for H2S and harsh service."
  },
  {
    question: "In a gear pump, fluid is trapped where?",
    options: ["Inside the motor", "Between the gear teeth", "In the diaphragm", "In the impeller eye"],
    correctIndex: 1,
    explanation: "Fluid travels in the cavities between the rotating teeth."
  },
  {
    question: "Why is driver sizing critical for centrifugal pumps?",
    options: ["They are very heavy", "Power increases with flow rate", "They have too many gears", "They use diesel only"],
    correctIndex: 1,
    explanation: "The motor must handle the power demand at maximum flow."
  },
  {
    question: "Which pump is known for 'low shear' action?",
    options: ["Centrifugal", "Positive Displacement", "Jet pump", "Air blower"],
    correctIndex: 1,
    explanation: "PD pumps move fluid gently, which is better for sensitive emulsions."
  },
  {
    question: "What is the primary function of a choke manifold?",
    options: ["Separating oil and gas", "Controlling flow and reducing pressure", "Measuring liquid density", "Storing produced fluids"],
    correctIndex: 1,
    explanation: "The choke manifold is used to regulate the flow rate and drop the pressure from the wellhead before it enters process equipment."
  },
  {
    question: "Which type of choke allows for precise, manual flow adjustments?",
    options: ["Fixed choke", "Positive choke", "Adjustable choke", "Orifice plate"],
    correctIndex: 2,
    explanation: "Adjustable chokes use a needle and seat mechanism to allow real-time changes to the flow area."
  },
  {
    question: "In a 'Critical Flow' condition, the flow rate depends only on:",
    options: ["Downstream pressure", "Upstream pressure", "Fluid temperature", "Pipe diameter"],
    correctIndex: 1,
    explanation: "Once critical flow (sonic velocity) is reached, downstream pressure fluctuations do not affect the upstream flow rate."
  },
  {
    question: "A 'Choke Bean' is used in which component?",
    options: ["Adjustable choke", "Fixed choke box", "Separator inlet", "SSV"],
    correctIndex: 1,
    explanation: "Choke beans are calibrated inserts used in fixed chokes to maintain a constant flow rate."
  },
  {
    question: "What is the standard unit for choke size in the oilfield?",
    options: ["Millimeters", "1/64ths of an inch", "Centimeters", "Decimals of a foot"],
    correctIndex: 1,
    explanation: "Choke sizes are almost universally measured in 64ths of an inch (e.g., a 32 choke is 32/64 or 1/2 inch)."
  },

  // --- MODULE 2: ESD SYSTEM ---
  {
    question: "What is the main purpose of the Emergency Shutdown (ESD) system?",
    options: ["To increase production", "To provide a fail-safe way to close the well", "To monitor sand production", "To restart the separator"],
    correctIndex: 1,
    explanation: "The ESD system is a safety barrier designed to isolate the well quickly in case of an emergency."
  },
  {
    question: "The Surface Safety Valve (SSV) is typically closed by:",
    options: ["Air pressure", "Manual handwheel", "Hydraulic spring return", "Electric motor"],
    correctIndex: 2,
    explanation: "SSVs are 'fail-safe' closed; hydraulic pressure opens them, and a heavy internal spring closes them when pressure is vented."
  },
  {
    question: "A Hi-Pilot on an ESD system triggers when:",
    options: ["Pressure drops below 50 psi", "The air loop is disconnected", "Pressure exceeds a pre-set limit", "The separator level is low"],
    correctIndex: 2,
    explanation: "The Hi-Pilot monitors for overpressure to prevent equipment damage downstream."
  },
  {
    question: "Which component is known as the 'brain' of the ESD system?",
    options: ["The SSV", "The ESD Control Panel", "The Choke Manifold", "The Air Compressor"],
    correctIndex: 1,
    explanation: "The control panel manages the logic, air loops, and hydraulic output to the valves."
  },
  {
    question: "What is the typical air loop pressure in a standard ESD system?",
    options: ["10 psi", "30 psi", "150 psi", "1000 psi"],
    correctIndex: 1,
    explanation: "A 30 psi air loop is the standard signal pressure for most pneumatic ESD stations."
  },

  // --- MODULE 3: TEST SEPARATOR ---
  {
    question: "What are the three phases separated in a standard test separator?",
    options: ["Oil, Gas, Sand", "Gas, Oil, Water", "Water, Sand, Condensate", "Oil, Gas, Chemicals"],
    correctIndex: 1,
    explanation: "Standard separators use gravity and internal baffles to split the stream into gas, oil, and water."
  },
  {
    question: "The 'Inlet Deflector' in a separator is used for:",
    options: ["Measuring gas", "Initial momentum change and separation", "Breaking foam", "Preventing vortexing"],
    correctIndex: 1,
    explanation: "The deflector causes a sudden change in direction and speed, helping liquids drop out of the gas stream immediately."
  },
  {
    question: "What does the Mist Extractor (Demister Pad) do?",
    options: ["Separates oil from water", "Captures small liquid droplets from the gas", "Measures water cut", "Filters sand"],
    correctIndex: 1,
    explanation: "Located at the gas outlet, it prevents liquid carry-over by coalescing fine mist into larger drops."
  },
  {
    question: "Which device is used to measure gas flow rate on a separator?",
    options: ["Vortex meter", "Daniel Orifice Meter", "Positive Displacement meter", "Magnetic meter"],
    correctIndex: 1,
    explanation: "Orifice meters are the industry standard for measuring gas by creating a pressure differential across a plate."
  },
  {
    question: "What is 'Liquid Carry-over'?",
    options: ["Oil entering the water line", "Gas entering the oil line", "Liquid entering the gas line", "Water entering the oil line"],
    correctIndex: 2,
    explanation: "Carry-over occurs when the separator is overloaded or the demister fails, sending liquid out with the gas."
  },

  // --- MODULE 4: HEAT EXCHANGERS (STEAM) ---
  {
    question: "Why is a heat exchanger used in well testing?",
    options: ["To cool the oil for storage", "To prevent hydrate formation and ease separation", "To increase gas pressure", "To filter sand"],
    correctIndex: 1,
    explanation: "Heating the well stream prevents hydrates (ice-like plugs) and reduces oil viscosity for better separation."
  },
  {
    question: "In a shell-and-tube exchanger, where does the well fluid usually flow?",
    options: ["In the shell", "In the tubes", "In the steam trap", "Outside the skid"],
    correctIndex: 1,
    explanation: "High-pressure well fluids are typically routed through the tubes for safety and pressure containment."
  },
  {
    question: "A 'Steam Trap' is used to:",
    options: ["Store steam", "Increase steam pressure", "Remove condensate (water) from steam lines", "Inject chemicals"],
    correctIndex: 2,
    explanation: "The steam trap ensures that only dry steam stays in the exchanger while draining away water."
  },
  {
    question: "Hydrates are most likely to form at:",
    options: ["High temperature and high pressure", "Low temperature and high pressure", "High temperature and low pressure", "Low temperature and low pressure"],
    correctIndex: 1,
    explanation: "Cold temperatures and high pressures are the 'danger zone' for hydrate formation."
  },

  // --- MODULE 5: SURGE & GAUGE TANKS ---
  {
    question: "A Gauge Tank is considered what type of vessel?",
    options: ["High pressure", "Atmospheric", "Vacuum", "Cryogenic"],
    correctIndex: 1,
    explanation: "Gauge tanks vent to the atmosphere and are not designed to hold pressure."
  },
  {
    question: "Why are Surge Tanks preferred over Gauge Tanks for H2S service?",
    options: ["They are larger", "They are pressurized and prevent gas venting", "They are cheaper", "They have wheels"],
    correctIndex: 1,
    explanation: "Surge tanks can maintain a back-pressure, keeping toxic H2S gas contained and routed to the flare."
  },
  {
    question: "The 'Shrinkage Factor' accounts for:",
    options: ["Oil lost to leaks", "Oil volume reduction when gas is released", "Tank metal contraction", "Meter errors"],
    correctIndex: 1,
    explanation: "Shrinkage is the volume loss that occurs when oil moves from separator pressure to atmospheric pressure."
  },
  {
    question: "What is the purpose of a Flame Arrestor on a tank vent?",
    options: ["To keep the tank warm", "To prevent a flame from traveling back into the tank", "To measure gas flow", "To filter smoke"],
    correctIndex: 1,
    explanation: "It acts as a safety barrier that allows gas to vent but stops fire from entering the vessel."
  },

  // --- MODULE 6: TRANSFER PUMPS ---
  {
    question: "Which pump type is best for handling high-viscosity oil?",
    options: ["Centrifugal", "Positive Displacement (e.g., Screw Pump)", "Jet pump", "Fan pump"],
    correctIndex: 1,
    explanation: "PD pumps move a fixed volume per stroke/revolution, making them much better for thick fluids."
  },
  {
    question: "What happens if you close a valve downstream of a running PD pump?",
    options: ["The pump speeds up", "The pressure rises until something bursts or the PRV opens", "The fluid circulates inside the pump", "Nothing happens"],
    correctIndex: 1,
    explanation: "PD pumps will continue to push fluid regardless of pressure, requiring a Pressure Relief Valve (PRV) for safety."
  },
  {
    question: "A Centrifugal pump uses what to move fluid?",
    options: ["A piston", "An impeller", "A screw", "A diaphragm"],
    correctIndex: 1,
    explanation: "The spinning impeller uses centrifugal force to add kinetic energy to the fluid."
  },

  // --- MODULE 7: WELLHEAD & FLOWHEAD ---
  {
    question: "The 'Swab Valve' on a flowhead is used for:",
    options: ["Diverting flow to the flare", "Allowing vertical entry for wireline tools", "Killing the well", "Measuring pressure"],
    correctIndex: 1,
    explanation: "The swab valve is the top-most valve that provides a straight path down into the wellbore."
  },
  {
    question: "Which valve is the primary safety barrier on the flowhead?",
    options: ["Wing valve", "Master valve", "Kill valve", "Swab valve"],
    correctIndex: 1,
    explanation: "The master valve is the main isolation valve for the entire well stream."
  },
  {
    question: "What is the function of the Flowhead Swivel?",
    options: ["To measure flow", "To allow the test string to rotate without moving the surface lines", "To separate oil", "To inject chemicals"],
    correctIndex: 1,
    explanation: "The swivel allows the pipe below it to turn while the surface hoses stay stationary."
  },

  // --- MODULE 8: DATA ACQUISITION & SAMPLING ---
  {
    question: "What does 'BS&W' stand for?",
    options: ["Basic System and Water", "Basic Sediment and Water", "Bottom Sand and Waste", "Brine, Salt, and Water"],
    correctIndex: 1,
    explanation: "BS&W is the measurement of impurities (sediment and water) found in the produced oil."
  },
  {
    question: "A 'Dead Weight Tester' is used to:",
    options: ["Calibrate pressure gauges", "Measure the weight of the pipe", "Calculate oil density", "Test the crane"],
    correctIndex: 0,
    explanation: "It is a high-precision instrument used to verify the accuracy of pressure gauges."
  },
  {
    question: "Which instrument measures the density of gas?",
    options: ["Hydrometer", "Densitometer", "Centrifuge", "Viscometer"],
    correctIndex: 1,
    explanation: "Densitometers provide real-time measurements of fluid or gas density."
  },
  {
    question: "Why are 'Bottom-Hole Samples' taken?",
    options: ["To check for sand", "To get reservoir fluid at original pressure and temperature", "To clean the well", "To measure the depth"],
    correctIndex: 1,
    explanation: "Reservoir fluid changes when it reaches the surface; bottom-hole samples represent the fluid in its native state."
  },

  // --- MODULE 9: PIPING & CONNECTIONS ---
  {
    question: "What does 'Fig 1502' refer to?",
    options: ["A valve model", "A common hammer union type rated for 15,000 psi", "The weight of a pipe", "A separator size"],
    correctIndex: 1,
    explanation: "Fig 1502 is the most common high-pressure hammer union used in well testing."
  },
  {
    question: "Why should you never mix hammer union components from different figures?",
    options: ["They won't fit at all", "They might fit but will fail under pressure", "It's bad luck", "They are different colors"],
    correctIndex: 1,
    explanation: "Some figures look similar but have different pressure ratings and slight thread differences, leading to fatal accidents."
  },

  // --- MODULE 10: SAND MANAGEMENT ---
  {
    question: "Where is a Sand Filter typically located?",
    options: ["Downstream of the separator", "Upstream of the choke manifold", "At the flare", "Inside the tank"],
    correctIndex: 1,
    explanation: "Sand filters are placed upstream of the choke to protect it and the downstream equipment from erosion."
  },
  {
    question: "What is the danger of sand production?",
    options: ["It makes the oil dirty", "It causes rapid erosion of valves and pipes", "It increases gas flow", "It cools the well"],
    correctIndex: 1,
    explanation: "High-velocity sand acts like a sandblaster, potentially cutting through steel pipes in minutes."
  },
  // --- MODULE: CHOKE MANIFOLD ---
  {
    question: "What is the primary purpose of a 'Buffer Tank' or 'Header' in some manifold designs?",
    options: ["To separate gas", "To stabilize flow before it enters the separator", "To store oil for 24 hours", "To heat the fluid"],
    correctIndex: 1,
    explanation: "It helps dampen pressure pulses and provides a more uniform flow into downstream equipment."
  },
  {
    question: "Which component is most susceptible to 'washout' (erosion) during high-rate sand production?",
    options: ["Upstream gate valve", "The choke needle or bean", "The thermowell", "The skid frame"],
    correctIndex: 1,
    explanation: "High velocity and turbulence at the choke point make the needle and bean prime targets for sand erosion."
  },

  // --- MODULE: SEPARATOR ---
  {
    question: "What is the function of a 'Vortex Breaker' at the liquid outlet?",
    options: ["To increase flow speed", "To prevent gas from being pulled into the liquid stream", "To filter out sand", "To measure oil density"],
    correctIndex: 1,
    explanation: "It prevents a whirlpool effect that would allow gas to escape through the oil or water lines."
  },
  {
    question: "What does the 'Retention Time' in a separator refer to?",
    options: ["The time it takes to rig up", "How long fluid stays in the vessel to allow separation", "The time between two flow tests", "The duration of a flare"],
    correctIndex: 1,
    explanation: "Gravity separation requires time; retention time is the average period liquid remains in the vessel."
  },

  // --- MODULE: WELL TOWER (FLOWHEAD) & X-MAS TREE ---
  {
    question: "What is the main difference between a Flowhead and a standard Christmas Tree?",
    options: ["Colors", "Flowheads are for temporary testing; X-Mas trees are for permanent production", "Price only", "Weight"],
    correctIndex: 1,
    explanation: "The Flowhead is a specialized tool for well testing, often including a swivel and handling subs for the test string."
  },
  {
    question: "Which valve on the Flowhead is usually the first to be closed in a non-emergency shutdown?",
    options: ["Master Valve", "Swab Valve", "Wing Valve (Flow line)", "Kill Valve"],
    correctIndex: 2,
    explanation: "The wing valve is typically used for routine flow control, keeping the master valve as a pristine secondary barrier."
  },

  // --- MODULE: ESD & PANELS ---
  {
    question: "What is the function of the 'Fusible Plugs' in an ESD system?",
    options: ["To protect against high pressure", "To trigger a shutdown in case of fire", "To measure temperature", "To connect hoses"],
    correctIndex: 1,
    explanation: "Fusible plugs melt at specific temperatures (e.g., 212°F), venting the air loop and closing the SSV in a fire."
  },
  {
    question: "In an ESD panel, what does the 'Manual Override' or 'Bypass' allow?",
    options: ["Increasing flow rate", "Keeping the well open during maintenance/testing of the air loop", "Skipping the separator", "Resetting the timer"],
    correctIndex: 1,
    explanation: "Bypassing allows operators to work on the control loop without accidentally tripping the well."
  },

  // --- MODULE: PUMPS (TRIPLEX & CENTRIFUGAL) ---
  {
    question: "What is the defining characteristic of a Triplex Pump?",
    options: ["It has three impellers", "It has three plungers or pistons", "It can only pump water", "It is always electric"],
    correctIndex: 1,
    explanation: "Triplex pumps use three plungers to provide a relatively smooth high-pressure discharge."
  },
  {
    question: "Why must a Centrifugal pump be 'primed' before starting?",
    options: ["To heat the motor", "To remove air and ensure the impeller is submerged in fluid", "To check for leaks", "To calibrate the flow meter"],
    correctIndex: 1,
    explanation: "Centrifugal pumps cannot move air effectively; the casing must be full of liquid to create the necessary centrifugal force."
  },

  // --- MODULE: FLOW TEST & UNLOADING ---
  {
    question: "What is the primary goal of a 'Cleanup' flow?",
    options: ["To paint the equipment", "To remove completion fluids, solids, and debris from the wellbore", "To test the flare boom", "To fill the tanks"],
    correctIndex: 1,
    explanation: "Cleanup ensures that the fluids being measured during the actual test are representative of the reservoir."
  },
  {
    question: "A 'Kick-off' operation is performed to:",
    options: ["End the test", "Start the flow in a well that cannot flow naturally due to hydrostatic head", "Kill the well", "Change the choke"],
    correctIndex: 1,
    explanation: "If the fluid column is too heavy, techniques like Nitrogen lifting are used to 'kick-off' the flow."
  },

  // --- MODULE: COFLEXIP & PIPING ---
  {
    question: "What is a 'Coflexip' hose primarily used for?",
    options: ["Measuring oil", "High-pressure, flexible connection between the flowhead and fixed piping", "Storing gas", "Filtering sand"],
    correctIndex: 1,
    explanation: "Coflexip hoses are steel-reinforced flexible lines designed for high-pressure well fluids."
  },
  {
    question: "Which hammer union 'Figure' is typically blue and rated for 6,000 psi?",
    options: ["Fig 1502", "Fig 602", "Fig 1002", "Fig 200"],
    correctIndex: 1,
    explanation: "Fig 602 is standard for medium-pressure (6,000 psi) water or oil service."
  },
  {
    question: "A 'Target Elbow' is used in piping to:",
    options: ["Make the pipe look better", "Provide a lead-filled 'buffer' to resist erosion at turns", "Increase pressure", "Reduce weight"],
    correctIndex: 1,
    explanation: "Target elbows have a blind tee filled with lead or fluid to absorb the impact of abrasive particles like sand."
  },

  // --- MODULE: TANKS & MEASUREMENT ---
  {
    question: "What is 'Tank Strapping'?",
    options: ["Tying the tank to the rig", "The process of calibrating a tank to create a volume table", "Cleaning the tank", "Measuring the tank's weight"],
    correctIndex: 1,
    explanation: "Strapping involves taking physical measurements of the tank to calculate exactly how much volume corresponds to each inch of height."
  },
  {
    question: "Why is a 'U-tube' or 'Liquid Seal' used in atmospheric tank vents?",
    options: ["To increase pressure", "To prevent air from entering and to manage small gas vapors", "To store chemicals", "To trap sand"],
    correctIndex: 1,
    explanation: "It acts as a low-pressure barrier to keep the tank environment controlled."
  }
];

console.log("Total Questions: " + questions.length);


/* ===== State ===== */
let state = {
  currentIndex: 0,
  answers: [],
  timeLeft: 600, // 10 minutes
  shuffled: []
};

let timerInterval = null;
let soundEnabled = true;
let darkMode = false;
let finalScorePercent = 0;
let signedInUser = null;
let authChecked = false;
let isQuizFinished = false;

const EMAILJS_CONFIG = {
  publicKey: "di944TOUgjjctowQk",
  serviceId: "service_txzx4kc",
  templateId: "template_miqixp9"
};

/* ===== Elements ===== */
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const currentIndexEl = document.getElementById("currentIndex");
const totalQuestionsEl = document.getElementById("totalQuestions");
const timerValue = document.getElementById("timerValue");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const analysisList = document.getElementById("analysisList");
const scoreValue = document.getElementById("scoreValue");
const highScore = document.getElementById("highScore");
const scoreRing = document.getElementById("scoreRing");
const circleProgress = document.getElementById("circleProgress");
const circleText = document.getElementById("circleText");
const toggleModeBtn = document.getElementById("toggleMode");
const toggleSoundBtn = document.getElementById("toggleSound");
const certNameInput = document.getElementById("certName");
const showCertBtn = document.getElementById("showCertBtn");
const certificateSection = document.getElementById("certificateSection");
const downloadCertBtn = document.getElementById("downloadCertBtn");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const certRecipient = document.getElementById("certRecipient");
const certScore = document.getElementById("certScore");
const certDate = document.getElementById("certDate");
const certId = document.getElementById("certId");
const certCourse = document.getElementById("certCourse");

const resumeModal = document.getElementById("resumeModal");
const continueBtn = document.getElementById("continueBtn");
const startOverBtn = document.getElementById("startOverBtn");
const restartBtn = document.getElementById("restartBtn");

/* ===== Sounds ===== */
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
const finishSound = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");

/* ===== Utilities ===== */
function playSound(audio) {
  if (!soundEnabled) return;
  audio.currentTime = 0;
  audio.play();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function saveProgress() {
  const toSave = { ...state, questionsVersion: questions.length };
  localStorage.setItem("quizState", JSON.stringify(toSave));
  localStorage.setItem("darkMode", darkMode ? "1" : "0");
  localStorage.setItem("soundEnabled", soundEnabled ? "1" : "0");
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem("quizState"));
  if (!saved) return null;

  if (saved.questionsVersion !== questions.length) {
    localStorage.removeItem("quizState");
    return null;
  }

  return saved;
}

/* ===== Timer ===== */
function updateTimerDisplay() {
  const minutes = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
  const seconds = String(state.timeLeft % 60).padStart(2, "0");
  timerValue.textContent = `${minutes}:${seconds}`;
}



function updateProgress() {
  const total = state.shuffled.length; 
  const progress = ((state.currentIndex + 1) / total) * 100;
  
  progressFill.style.width = `${progress}%`;
  currentIndexEl.textContent = state.currentIndex + 1;
  totalQuestionsEl.textContent = total; // هيظهر 10

  // تحديث الدائرة
  const circumference = 2 * Math.PI * 52;
  circleProgress.style.strokeDasharray = circumference;
  circleProgress.style.strokeDashoffset = circumference - (progress / 100) * circumference;
  circleText.textContent = `${Math.round(progress)}%`;
}

function renderQuestion() {
  const q = state.shuffled[state.currentIndex];
  questionText.textContent = q.question;

  optionsList.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    if (state.answers[state.currentIndex] === index) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", () => {
      state.answers[state.currentIndex] = index;
      playSound(clickSound);
      renderQuestion();
      saveProgress();
    });
    optionsList.appendChild(btn);
  });

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.textContent = state.currentIndex === state.shuffled.length - 1 ? "Finish" : "Next";

  updateProgress();
  saveProgress();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    saveProgress();

    if (state.timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

/* ===== Result ===== */
function finishQuiz() {
  if (isQuizFinished) return;
  isQuizFinished = true;

  playSound(finishSound);
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  certificateSection.classList.add("hidden");
  localStorage.removeItem("quizState");

  let correct = 0;
  const total = state.shuffled.length; // اللي هو 10

  state.shuffled.forEach((q, i) => {
    if (state.answers[i] === q.correctIndex) correct++;
  });

  finalScorePercent = Math.round((correct / total) * 100);
  
  scoreValue.textContent = `${finalScorePercent}%`;

  // High score
  const best = Math.max(finalScorePercent, Number(localStorage.getItem("highScore") || 0));
  localStorage.setItem("highScore", best);
  highScore.textContent = `${best}%`;

  // Animated score ring
  const circumference = 2 * Math.PI * 68;
  scoreRing.style.strokeDasharray = circumference;
  scoreRing.style.strokeDashoffset = circumference - (finalScorePercent / 100) * circumference;

  renderAnalysis();
  sendQuizResultEmail({
    userName: getSignedInUserName(),
    userEmail: (signedInUser?.email || "").trim(),
    scorePercent: finalScorePercent,
    scoreRaw: `${correct}/${state.shuffled.length}`,
    courseName: document.querySelector(".title")?.textContent || "Skill Exam"
  });
}

function renderAnalysis() {
  analysisList.innerHTML = "";

  state.shuffled.forEach((q, i) => {
    const userAnswerIndex = state.answers[i];
    const userAnswer = userAnswerIndex !== null ? q.options[userAnswerIndex] : "No Answer";
    const correctAnswer = q.options[q.correctIndex];

    const item = document.createElement("div");
    item.className = "analysis-item";
    item.innerHTML = `
      <div class="q">${i + 1}. ${q.question}</div>
      <div class="answer ${userAnswerIndex === q.correctIndex ? "correct" : "wrong"}">
        Your Answer: ${userAnswer}
      </div>
      <div class="answer correct">Correct Answer: ${correctAnswer}</div>
      <div class="explanation">${q.explanation}</div>
    `;
    analysisList.appendChild(item);
  });
}

/* ===== Theme & Sound ===== */
function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  toggleModeBtn.textContent = darkMode ? "Light Mode" : "Dark Mode";
}

function applySound() {
  toggleSoundBtn.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
}

/* ===== Initialization ===== */
function initQuiz(savedState = null) {
  isQuizFinished = false;

  if (savedState) {
    state = savedState;
  } else {
    // 1. شقلب كل الأسئلة الـ 200
    const allShuffled = shuffleArray(questions); 
    
    // 2. خد أول 10 أسئلة فقط للمحاولة دي
    const selectedTen = allShuffled.slice(0, 10);

    state.currentIndex = 0;
    state.answers = Array(selectedTen.length).fill(null);
    state.shuffled = selectedTen; // هنا خزننا الـ 10 بس في الـ state
    state.timeLeft = 600; // ممكن تقلل الوقت لـ 10 دقائق مثلاً (600 ثانية)
  }

  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  certificateSection.classList.add("hidden");

  updateTimerDisplay();
  renderQuestion();
  startTimer();
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function showCertificate() {
  const name = getSignedInUserName();
  certRecipient.textContent = name;
  certScore.textContent = `${finalScorePercent}%`;
  certCourse.textContent = document.querySelector(".title")?.textContent || "Skill Exam";
  certDate.textContent = formatDate(new Date());
  certId.textContent = `QA-${Date.now().toString(36).toUpperCase()}`;

  resultSection.classList.add("hidden");
  certificateSection.classList.remove("hidden");
}

function getSignedInUserName() {
  const displayName = (signedInUser?.displayName || "").trim();
  if (displayName) return displayName;

  const typedName = (certNameInput.value || "").trim();
  if (typedName) return typedName;

  const email = (signedInUser?.email || "").trim();
  if (email.includes("@")) return email.split("@")[0];

  return "Student";
}

function buildLoginRedirectUrl() {
  const loginUrl = new URL("../../../../login.html", window.location.href);
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  loginUrl.searchParams.set("redirect", currentPath);
  return loginUrl.toString();
}

function startAfterAuth() {
  if (authChecked) return;
  authChecked = true;

  const saved = loadProgress();
  if (saved) {
    resumeModal.classList.remove("hidden");
  } else {
    initQuiz();
  }

  const best = localStorage.getItem("highScore") || 0;
  highScore.textContent = `${best}%`;
}

function sendQuizResultEmail({ userName, userEmail, scorePercent, scoreRaw, courseName }) {
  if (!window.emailjs || !emailjs.init || !emailjs.send) {
    console.warn("EmailJS is not loaded. Skipping result email.");
    return;
  }

  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  } catch (err) {
    console.error("EmailJS init failed:", err);
    return;
  }

  const templateParams = {
    name: userName,
    result: `${scoreRaw} (${scorePercent}%)`
  };

  emailjs
    .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
    .then(() => {
      console.log("Quiz result email sent.");
    })
    .catch((error) => {
      console.error("Failed to send quiz result email:", error);
    });
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensurePdfLibs() {
  if (!window.html2canvas) {
    await loadScriptOnce("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js");
  }
  if (!window.jspdf) {
    await loadScriptOnce("https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js");
  }
}

/* ===== Events ===== */
prevBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    playSound(clickSound);
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentIndex < state.shuffled.length - 1) {
    state.currentIndex++;
    playSound(clickSound);
    renderQuestion();
  } else {
    finishQuiz();
  }
});

toggleModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme();
  saveProgress();
});

toggleSoundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  applySound();
  saveProgress();
});

continueBtn.addEventListener("click", () => {
  resumeModal.classList.add("hidden");
  initQuiz(loadProgress());
});

startOverBtn.addEventListener("click", () => {
  resumeModal.classList.add("hidden");
  localStorage.removeItem("quizState");
  initQuiz();
});

restartBtn.addEventListener("click", () => {
  initQuiz();
});

showCertBtn.addEventListener("click", () => {
  showCertificate();
});

downloadCertBtn.addEventListener("click", async () => {
  showCertificate();
  try {
    await ensurePdfLibs();
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);

    const { jsPDF } = window.jspdf;
    const certEl = document.getElementById("certificateCard");
    const canvas = await html2canvas(certEl, {
      scale: 2,
      backgroundColor: "#ffffff"
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgRatio = canvas.width / canvas.height;
    const pdfRatio = pdfWidth / pdfHeight;
    let renderWidth = pdfWidth;
    let renderHeight = pdfHeight;
    if (imgRatio > pdfRatio) {
      renderHeight = pdfWidth / imgRatio;
    } else {
      renderWidth = pdfHeight * imgRatio;
    }
    const x = (pdfWidth - renderWidth) / 2;
    const y = (pdfHeight - renderHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight);
    pdf.save("certificate.pdf");
  } catch (err) {
    alert("PDF download failed. Make sure you are online or open the app via a local server.");
  }
});

backToResultsBtn.addEventListener("click", () => {
  certificateSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
});

/* ===== Load ===== */
window.addEventListener("load", () => {
  darkMode = localStorage.getItem("darkMode") === "1";
  soundEnabled = localStorage.getItem("soundEnabled") !== "0";
  applyTheme();
  applySound();

  if (!window.firebase || !firebase.auth) {
    alert("Authentication is not available. Please check Firebase setup.");
    return;
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = buildLoginRedirectUrl();
      return;
    }

    signedInUser = user;
    certNameInput.value = getSignedInUserName();
    startAfterAuth();
  });
});
