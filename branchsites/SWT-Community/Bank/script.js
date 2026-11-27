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
  },
  {
    question: "After changing the Bean size for the Choke, how many turns should you turn? the handwheel before opening.",
    options: ["0 Turns", "3 Turns", "6 Turns", "10 Turns"],
    correctIndex: 2,
    explanation: "This standard 6-turn rotation ensures the stem is properly unseated and positioned to allow clear fluid passage without binding or causing sudden pressure shocks against the orifice/seat components during startup."
  },
  {
    question: "When does the pressure Safety Low activate?.",
    options: ["Pressure rises above Set Point and closes SDV", "Pressure drops below Set Point and closes BDV only", "Pressure drops below Set Point and Closes BDV only", "Pressure drops below Set Point and closes SDV"],
    correctIndex: 3,
    explanation: "A Pressure Safety Low (PSL) sensor activates when system or line pressure drops below its predetermined set point, triggering the closure of the Shutdown Valve (SDV) to stop the flow and isolate the system."
  },
  {
    question: 'You have Fig 1502 line with 2" Class 600 flange, how much max working pressure ',
    options: ["15000 Psi", "10000 Psi", "2160 Psi", "1440 Psi"],
    correctIndex: 3,
    explanation: 'In high-pressure piping and well-testing systems, the maximum working pressure of a connection is always limited by its weakest rated component. ​Fig 1502 Hammer Union: Rated for 15,000 psi max working pressure.​2" Class 600 Flange (ANSI/ASME B16.5): Rated for 1,440 psi max working pressure at ambient temperature. ​Because the system is connected using a Class 600 flange, the entire lines maximum working pressure drops to the flanges limit.'
  },
  {
    question: 'Maximum Gas Supply Pressure for Ranarex',
    options: ["3 Psi", "6 Psi", "15 Psi", "30 Psi"],
    correctIndex: 2,
    explanation: 'According to the user manual and operating instructions for the AMETEK / Chandler Engineering Ranarex Gas Gravitometer, when connecting sample gas through the pressure regulator to the instrument, the regulator delivery pressure must be set to a maximum of 15 PSIG.'
  },
  {
    question: 'How much PSI does the SSV need to open?',
    options: ["6:30 Psi", "100:500 Psi", "1000:2000 Psi", "1500:3000 Psi"],
    correctIndex: 3,
    explanation: 'Surface Safety Valve (SSV) requires hydraulic control pressure in the 1500 to 3000 PSI range to actuate and fully open.'
  },
  {
    question: 'How much PSI does the Air Supply in the ESD Panel need to operate the Hydraulic Pump?',
    options: ["3:50 Psi", "80:120 Psi", "500:1000 Psi", "1500:3000 Psi"],
    correctIndex: 1,
    explanation: 'the air/gas supply driving the air-driven hydraulic pump in an Emergency Shutdown (ESD) control panel operates within a standard pneumatic range of 80 to 120 PSI.'
  },
  {
    question: 'What is the definition of Critical Flow?',
    options: ["Sonic at Choke, Flow affected", "Sonic at Flow & Choke, unaffected", "Sonic at Choke, Flow unaffected", "None of them"],
    correctIndex: 2,
    explanation: 'Critical flow (also known as choked flow) occurs when the fluid velocity reaches the speed of sound (sonic velocity) at the constriction or choke throat. Once this condition is reached, the mass flow rate becomes independent of downstream pressure fluctuations, meaning the flow rate is unaffected by changes downstream.'
  },
  {
    question: 'What is the name of the Screw located behind the DPU?',
    options: ["Zero Screw", "Vent Screw", "Pulsation Dampener", "Torque Tube Screw"],
    correctIndex: 2,
    explanation: 'In instrumentation and well-testing equipment (such as Barton Differential Pressure Units), the adjustable needle valve screw used to dampen pressure fluctuations and shock waves is integrated directly into the DPU housing.'
  },
  {
    question: 'What is the function of the Lo-Pilot?',
    options: ["To protect against high pressure in thr flowline", "To protect low Pressure Equipment", "To protect against a line rupture", "all of the above"],
    correctIndex: 2,
    explanation: 'In standard surface well-testing and ESD configurations, the Lo-Pilot is installed upstream of the choke manifold (between the Surface Safety Valve and the choke). Because of this specific positioning, a sudden drop in line pressure indicates a major leak or line rupture, causing the pilot to exhaust control pressure and safely close the SSV.'
  },
  {
    question: 'What is the pump located beside Chrismass Tree and used for Chemical Injecting?',
    options: ["Texsteam pump", "Diaphragm pump", "Submersible pump", "Centrifugal pump"],
    correctIndex: 0,
    explanation: 'Texsteam pump is a small pump located on well heat tower and is used to inject many types of chemical'
  },
  {
    question: 'What is the function of the Fusible Plug of the ESDV?',
    options: ["Opens on sensing high pressure to close ", "Opens on sensing low pressure to close ", "Freezes on low temperature to close the valve automatically", "Melts in case of fire to close the valve automatically"],
    correctIndex: 3,
    explanation: 'In an Emergency Shutdown (ESD) system, fusible plugs contain a low-melting-point alloy designed to melt when exposed to high heat from a fire. When the plug melts, it vents the control line pressure, causing the Emergency Shutdown Valve (ESDV) to close automatically and safely isolate the system.'
  },
  {
    question: 'Which of the following causes an incorrect reading for Gas Meter? (one answer is incorrect',
    options: ["The orifice plate size is incorrect or eroded", "Orifice ID smaller than Pipe ID", "Liquid Carry Over inside the gas line", "The Differential Pressure  is above  the range"],
    correctIndex: 1,
    explanation: 'this type of question is not direct so need to read it carefully, it is normal that the Orifice ID to b smaller than Pipe ID '
  },
  {
    question: 'What are the signs of Hydrate in the Choke? (one answer is incorrect',
    options: ["Temperature drops (Choke sharply at the choke", "Upstream Pressure increases", "Downstream Pressure increases", "Flow rate increase by itself"],
    correctIndex: 3,
    explanation: 'any increase in downstream or upstream causes hydrates also temperature drops suddenly looks sign of hydrates but increasing or decreasing of flow rate is not a sign of hydrate'
  },
  {
    question: 'What do you do in case of a leak? (one answer is incorrect',
    options: ["Reporting immediately", "Isolate the leak source if safely possible", "Checking the leak location with a lighter", "Wearing appropriate PPE"],
    correctIndex: 2,
    explanation: 'All correct except checking the leak location with a lighter'
  },
  {
    question: 'What is H2S 8-Hours limit',
    options: ["10 PPM", "20 PPM", "100 PPM", "200 PPM"],
    correctIndex: 0,
    explanation: '10 PPM for 8-hrs'
  },
  {
    question: 'How to use fire Extinguisher? (One answer is wrong) ',
    options: ["Pull safety pin", "Aim nozzle at base of fire", "Pointing Extinguisher at your Colleague", "Squeeze handle and sweep"],
    correctIndex: 2,
    explanation: 'Never pointing Extinguisher at your colleage'
  },
  {
    question: 'What to do during H2S Leak? (One answer is wrong) ',
    options: ["Go to low-lying area", "Go to assembly point", "Escape upwind / crosswind ", "Wear breathing apparatus if trained"],
    correctIndex: 2,
    explanation: 'H2S is heavier than Air so Do not Go to low-lying area'
  },
  {
    question: 'Fisher Level Trol is... ',
    options: ["Direct Acting", "Reverse Acting", "Not Acting ", "I don not know"],
    correctIndex: 1,
    explanation: 'Fisher Level Trol is reverse acting while Fisher Gas Trol is Direct acting'
  },
  {
    question: 'What is Flare KO Drum? ',
    options: ["Separate Gas from Liquid Before Flare to prevent pressure increase", "Separate Carbon after Flare to prevent pollution", "Mix Liquid With Gas before Flare to increase effiency", "Separate Liquid from Gas before Flare to prevent burning liquid"],
    correctIndex: 3,
    explanation: 'A Flare Knock-Out (KO) Drum is a vertical or horizontal separation vessel installed upstream of a flare stack. Its primary purpose is to remove any entrained liquid hydrocarbons and water droplets from the waste gas stream before it reaches the flare tip, preventing unburned liquids from being expelled or causing dangerous liquid "rain" and incomplete combustion.'
  },
  {
    question: 'What are the Properties of H2S gas? (One answer is wrong) ',
    options: ["Very toxic and lethal gas", "Safe to inhale in small anounts", "Has rotten egg smell", "heavier than air, accumulatrs in low area"],
    correctIndex: 1,
    explanation: 'H2S Properties'
  },
  {
    question: 'Gross = 1736 BPD , WC = 39.4% ',
    options: ["Net= 683.9 BPD & Water= 1052 BPD", "Net= 1696.6 BPD & Water= 39.4 BPD", "Net= 1052 BPD & Water= 684 BPD", "Net= 1052 BPD & Water= 39.4 BPD"],
    correctIndex: 2,
    explanation: 'Water= Gross X (WC/100) = 1736 X 0.394 = 683.98 BPD. Net Oil = Gross - Water = 1736 - 683.98 = 1052'
  },
  {
    question: 'Which is Fiscal Reference for Oil Rate',
    options: ["Separator Rate after shrinkage & BS&W", "MPFM rate with Meter Factor", "Choke rate via Gilbert correction", "Surge tank level uncorrected"],
    correctIndex: 0,
    explanation: 'Separator rate after shrinkage & BS&W is a fiscal refrence for standard condition ( Net Stock Tank Rate)'
  },
  {
    question: 'Unstable DPU pen, zigzag reading, which screw to adjust?',
    options: ["Open Zero Screw 1 turn", "Close Vent Screw", "Close Dampener then 1/2 open", "Replace Bellows", "It cannot be adjusted"],
    correctIndex: 2,
    explanation: 'The Pulsation Dampener Screw is used to absorb the big fluctuations happens when the well behavoiur chabges suddenly to protect the DPU and to et stable reading'
  },
  {
    question: 'During Wireline pulling plug, whic valves open on Surface Test Tree?',
    options: ["Swab Valve Closed + Master Valve Open + Lower Master Valve Open / Wing Open", "Swab Valve Open + Master Valve Closed + Lower Master Valve Open / Wing Closed", "Swab Valve Open + Master Valve Open + Lower Master Valve Open / Wing Closed", "Swab Valve Open + Master Valve Open + Lower Master Valve Closed / Wing Open"],
    correctIndex: 2,
    explanation: 'To Run in Hole or Pull Out of Hole should be Upper and lower master open and Swab open but for the wing it is not neccessary to keep it open or close '
  },
  {
    question: 'What type of fuel would you use on an indirect heater?',
    options: ["Condensate", "Crude Oil", "Diesel", "Demulsifier"],
    correctIndex: 2,
    explanation: 'Diesel is the fuel used on an inderect heater'
  },
  {
    question: 'Basic Sediment in BS&W is?',
    options: ["Free water produced with oil", "Solid impurities like sand & scale", "Dissolved gas in crude oil", "Chemical additive for treatment"],
    correctIndex: 2,
    explanation: 'Basic Sediment is Solid impurities like Sand & Scale'
  },
  {
    question: 'What does Z-factor represent?',
    options: ["Gas Compressibility factor to correct ideal gas Law", "Oil Viscosity factor to correct Liquid flow", "Surge tank volume factor to correct volume measurement", "Choke type factor to correct flow control"],
    correctIndex: 0,
    explanation: 'Z-Factor is Gas Compressibility factor to correct ideal gas Law'
  },
  {
    question: 'What is Joule-Thomson Effect after Choke?',
    options: ["Temperature drop due to oil viscosity increase", "Temperature drop due to sudden gas expansion", "Temperature rise due to sevre fluid friction ", "Temperature rise due to gas molecules compression"],
    correctIndex: 1,
    explanation: 'Joule-Thomson Effect is a Dynamic ThermoEffect occurs when Gas/Liquid Expands in area that has high pressure to area that has low pressure through Choke without exchanging the temperature with the arounded place. When the gas or the liquid pass through the choke the high pressure will be low pressure so the Gas molecules expands and becomes not near to each oters that means drops in temperature which makes Hydrates '
  },
  {
    question: 'When changing the Choke Bean, is the Best Practice to have another person to verify the size?',
    options: ["Rigt", "Wrong" ],
    correctIndex: 0,
    explanation: 'Double check is the golden rule for every thing'
  },
  {
    question: 'What is the primary function of the Data Header in an SWT layout?',
    options: ["Separating water from crude oil initially", "Providing access points and chemical injection","Burning excess ases safety in the air","Storing produced oil temporarily to measure its volume" ],
    correctIndex: 1,
    explanation: 'Data Header primary Function is to provide points for chemical injection, getting samples, and for getting checking pressure and temperature'
  },
  {
    question: 'What does Multi-Rate Test mean?',
    options: ["measure temperature at depths", "using multiple separators","testing multiple surface pumps","producing well at different flow rates" ],
    correctIndex: 3,
    explanation: ' Multi-Rate Test means to produce the well at different flow rates '
  },
  {
    question: 'Among the procedures that must be followed before changing the Choke Size?',
    options: ["maximum separator operating pressure", "Remove orifice plate","increase demulsifier injection rate","close separator gas outlet valve" ],
    correctIndex: 1,
    explanation: ' if you will change the choke size remove orifice plate '
  },
  {
    question: 'in case of Carry Under, isolate the Barton immediately to prevent oil from entering it.',
    options: ["Right", "Wrong"],
    correctIndex: 1,
    explanation: ' Not Carry down , it is Carry Over '
  },
  {
    question: 'A32/64" Choke Bean produces 1000 BPD, How much rate will be produced from 64/64" Choke Bean .',
    options: ["1000 BPD", "2000 BPD", "3000 BPD", "4000 BPD"],
    correctIndex: 3,
    explanation: ' The relation between the Flow rate & Choke Size is Q ∝ D^2 So Q_2  = (A_2/A_1 )^2  × Q_1 = (64/32)^2 × 1000 = 4 × 1000 = 4000 BPD  '
  },
  {
    question: 'What is the Function of the Vacuum Relief Valve? .',
    options: ["Let air to Equalize pressure", "Block air entry to keep pressure", "Control liquid flow, stop pump bubbles", "Stabilize pressure, Stop level Fluctuation"],
    correctIndex: 0,
    explanation: ' Vacuum Relief Valve Function is to let atmospheric air enter to equalize pressure to prevent any collapse '
  },
  {
    question: 'What is the 1" Meter Range? .',
    options: ["130:1300", "170:1700", "170:1300", "130:1700"],
    correctIndex: 2,
    explanation: ' 1" meter range is 170:1300 BPD, while 2" meter range is 1300:13000 BPD'
  },
  {
    question: 'What is the 2" Meter Range? .',
    options: ["1300:13000", "340:3400", "170:1300", "1300:17000"],
    correctIndex: 2,
    explanation: ' 1" meter range is 170:1300 BPD, while 2" meter range is 1300:13000 BPD'
  },
  {
    question: 'A28/64" Choke Bean produces 700 BPD, How much rate will be produced from 36/64" Choke Bean .',
    options: ["1000 BPD", "1157 BPD", "1400 BPD", "700 BPD"],
    correctIndex: 3,
    explanation: ' The relation between the Flow rate & Choke Size is Q ∝ D^2 So Q_2  = (A_2/A_1 )^2  × Q_1 = (36/28)^2 × 700 = 1.654 × 700 = 1157.8 BPD  '
  },
  {
    question: 'A 26/64" Choke Bean produces 720 BPD, How much rate will be produced from 38/64" Choke Bean .',
    options: ["1383 BPD", "1539 BPD", "1734 BPD", "1939 BPD"],
    correctIndex: 1,
    explanation: ' The relation between the Flow rate & Choke Size is Q ∝ D^2 So Q_2  = (A_2/A_1 )^2  × Q_1 = (38/26)^2 × 720 = 1538.9 BPD  '
  },
  {
    question: 'Oil = 1100 STBOPD,  GOR = 2500 SCF/STB. HOW MUCH GAS RATE .',
    options: ["2.75 MMSCFD", "2.41 MMSCFD", "5.27 MMSCFD", "7.52 MMSCFD"],
    correctIndex: 0,
    explanation: ' Gas Rate = (Oil Rate x GOR) / 10^6 = (1100 x 2500) / 10^6 = 2750000 / 10^6 = 2.75 MMSCFD'
  },
  {
    question: 'Gas = 4.5 MMSCFD,  GOR = 3000 SCF/STB. HOW MUCH Oil RATE .',
    options: ["1490 STBOPD", "1500 STBOPD", "1510 STBOPD", "1495 STBOPD"],
    correctIndex: 1,
    explanation: ' Oil Rate = (Gas Rate x 10^6) / GOR = (4.6 x 10^6) / 3000 = 1500 STBOPD'
  },
  {
    question: 'Gas = 1.7 MMSCFD,  Oil Rate = 850 STBPD. HOW MUCH GOR .',
    options: ["1980 SCF/STB", "1990 SCF/STB", "2000 SCF/STB", "2020 SCF/STB"],
    correctIndex: 2,
    explanation: ' GOR = (Gas Rate x 10^6) / Oil Rate = (1.7 x 10^6) / 850 = 2000 SCF/STB'
  },
  {
    question: 'A 28/64" Choke Bean produces 313.6 BPD & pressure = 400 psi, How much rate will be produced from 56/64" Choke Bean & pressure = 400 psi.',
    options: ["627.2 BPD", "940.8 BPD", "1254.4 BPD", "2508.8 BPD"],
    correctIndex: 1,
    explanation: ' The relation between the Flow rate & Choke Size is Q ∝ D^2 So Q_2  = (A_2/A_1 )^2  × Q_1 = (56/28)^2 × 313.6 = 1254.4 BPD  '
  },
  {
    question: ' On what type of heater would you find a PSV fitted ',
    options: ["Indirect heater", "Steam coil", "Direct heater", "Nothing"],
    correctIndex: 2,
    explanation: ' •	We install PSV on indirect heater but on direct heater there is no PSV '
  },
  {
    question: ' What does Drawdown mean? ',
    options: ["Difference Reservoir - Flowing WHP", "Difference Static - Flowing BHP", "Difference Reservoir - Flowing BHP", "Difference Initial - Current Pressure"],
    correctIndex: 2,
    explanation: ' Drawdown means Difference Reservoir - Flowing BHP  '
  },
  {
    question: ' Pr = 3800 psi, Pwf = 3000 psi, Pwh = 1200 psi How much Drawdown pressure? ',
    options: ["800 Psi", "1800 Psi", "2600 Psi", "3000 Psi"],
    correctIndex: 0,
    explanation: ' Drawdown = Pr - Pwf  '
  },
  {
    question: ' Oil Rate = 850 bbl/day, water = 150 bbl/day How much watercut (WC) ',
    options: ["15%", "15.5%", "17.5%", "17.6%"],
    correctIndex: 0,
    explanation: ' Water Cut (WC) = Water Rate / (Water rate + Oil Rate)  '
  },
  {
    question: ' THP = 1000 psi & CHP = 1000 psi ',
    options: ["Well normal", "Choke closed", "Separator Faulty", "Tubing Leak"],
    correctIndex: 3,
    explanation: ' THP = CHP means there is communication between the tubing and the annulus CHP   '
  },
  {
    question: ' You opened the choke a little, WHP decreased and oil rate increased ',
    options: ["Well will stop", "Totally normal, continue", "Not normal, shut-in immediately", "Declaration of a state emergency"],
    correctIndex: 1,
    explanation: ' It is normal   '
  },
  {
    question: ' Measured Gas Rate = 3,874,512 SCFD & Gas lift Injection = 1,468,937 SCFD. What is the True Produced Gas? ',
    options: ["2,405,575 SCFD", "5,343,449 SCFD", "2,415,575 SCFD", "1,468,937 SCFD"],
    correctIndex: 0,
    explanation: ' True Produced Gas = Measured Gas Rate - Gas Lift Injection = 3,874,512 - 1,468,937 = 2,405,575 SCFD  '
  },
  {
    question: ' Oil Specific Gravity = 0.8721 How much API Gravity? ',
    options: ["19.2 API", "25.0 API", "30.7 API", "41.5 API"],
    correctIndex: 2,
    explanation: ' API = (141.5 / SG) - 131.5 = 30.7 '
  },
  {
    question: ' Separator pressure 180 psi, Well Heead pressure = 900 psi ',
    options: ["Sub-Critical", "Critical", "Neither", "Well shut-in"],
    correctIndex: 1,
    explanation: ' Critical Flow means Ratio = downstream/upstream =< 0.5 or 0.55 , for that example the ratio is 180/900 = 0.2 < 0.5 so flow is critical (0.5 is the Sonic Velocity السرعة الحرجة) '
  },
  {
    question: ' Shut in well after test and monitored pressure increasing, What is name of this test? ',
    options: ["Drawdown test", "Production Test", "Multirate Test", "Buildup Test"],
    correctIndex: 3,
    explanation: ' Build up test is a monitoring the WHSIP building up after test '
  },
  {
    question: ' A Well water cut is 0%, and the BS&W is 10%, is this possible or impossible? ',
    options: ["Impossible", "Possible"],
    correctIndex: 3,
    explanation: ' Build up test is a monitoring the WHSIP building up after test '
  },
  {
    question: ' Total Liquid (Gross) = 1200 bbl/day, BS&W = 25% How much Net Oil Rate ? ',
    options: ["300 bbl", "900 bbl", "1200 bbl", "1500 bbl"],
    correctIndex: 1,
    explanation: ' Net Oil Rate = Gross - (Gross * 0.25 ) = Gross * 0.75 =  '
  },
  {
    question: ' What happens if the choke size is reduced from 32/64 to 16/64 ? ',
    options: ["Oil Rate increases and WHP increases", "Oil Rate decreases and WHP increases", "Oil Rate decreases and WHP Decreases", "Oil Rate increases and WHP decreases"],
    correctIndex: 1,
    explanation: ' Choke Size ∝ Flow Rate , while Choke Size ∝ (1/WHP)  '
  },
  {
    question: ' the WHP of the well was 1200 psi, then the choke was opened more, so WHP become 800 psi, and the oil rate increased, is this normal ',
    options: ["No the pressure should have increased ", "No the production should have decreased", "No, the WHP is constant and has nothing to do with", "Yes, this is normal pressure decreased and production increased"],
    correctIndex: 3,
    explanation: ' Choke Size ∝ Flow Rate , while Choke Size ∝ (1/WHP)  '
  },
  {
    question: ' What is the main danger of H2S ? ',
    options: [ " Harmless Gas ", " Toxic and lethal even at low concentration ", " Gas increases production ", " Gas cools equipment " ],
    correctIndex: 1,
    explanation: ' H2S is a Toxic Gas, a silent killer  '
  },
  {
    question: ' Why do we use Glycol ? ',
    options: [ " To cool Engine ", " To prevent hydrate formstion ", " To increase oil ", " To prevent foaming formation " ],
    correctIndex: 1,
    explanation: ' Glycol and Methanol are used to prevent hydration  '
  },
  {
    question: ' Compressor down, air failing, gas line ready, Carry Under occured, Can gas replace air, or  not possible because gas went to oil ? ',
    options: [ " Yes ", " No " ],
    correctIndex: 0,
    explanation: ' Yes we can use the gas line instead of the air because the Carry Under occured only affecting oil line  '
  },
  {
    question: ' Why is the Pad Eye painted in a different color every few monthes ? ',
    options: [ " To prevent it from Corrosion and rust ", " To indicate the inspection and in Certified period can be used for lifting  ", " Identify the Maximum lifting capacity  ", " To show the manufacturer of the equipment " ],
    correctIndex: 1,
    explanation: ' Color Coding for Pad Eye is after Inspection and Certified for lifting and it is colored every 3 months  (White, Orange, Green, Yellow)  '
  },
  {
    question: ' Wy do we use Wash Tank in process plants ? ',
    options: [ " Separate free Gas from oil by pressure ", " Equipment dust washing ", " Heat oil to prevent Hydrate formation  ", " Wash oil to dissolve salt and break Emulsion" ],
    correctIndex: 3,
    explanation: ' in plant wash oil to dissolve salt and break Emulsion  '
  },
  {
    question: ' What is the unit for Salt in Crude oil ? ',
    options: [ " PSI ", " PPM ", " PTB  ", " BBL " ],
    correctIndex: 2,
    explanation: ' the unit for Salt in Crude Oil is PTB = Pound per Thousand Barrels  '
  },
  {
    question: ' Air Supply is 120 Psi, but Fisher supply gauge is 0 psi, what is the first component to check ? ',
    options: [ " Comperrsor ", " Bourdon Tube ", " Regulator  ", " Actuator " ],
    correctIndex: 2,
    explanation: ' Air supply already 120 psi, so Compressor is working properly, Bourdon Tube is not the first thing to ckeck, Actuator is recieving the action from the fissher so it is not affectting the gauge output pressure, So the Regulator is the first thing to check becaue also that the air supply coming from the compressor with 120 psi and going to the regulator then the Gauge '
  },
  {
    question: ' What is the function of the Weir plate in Separator ? ',
    options: [ " Holds Oil, passes water to Oil outlet ", " Holds Water, passes Oil to oil outlet ", " Holds water, passes oil to water outlet  ", " Holds oil, passes water to water outlet " ],
    correctIndex: 1,
    explanation: ' Weir plate is a plate separate water compartment from oil compartment, it is holds water which be below oil by density of the liquid and passes oil which be above water to go to oil compartment '
  },
  {
    question: ' What does PTB stand for ? ',
    options: [ " Production Per Thousand Barrels ", " Pound Per Tank Barrel ", " Pressure per Thousand Barrel  ", " Pound per Thousand Barrel " ],
    correctIndex: 3,
    explanation: ' PTB measure the salinity of water in Crude oil Stands for Pound per Thousand Barrel '
  },
  {
    question: ' What is the difference between Carry Over and Carry Under ? ',
    options: [ " First is Water down, Second is Oil Up ", " First Liquid with Gas, Second is Gas with Liquid ", " Both are Gas down with Oil  ", " Both are Oil up with Gas " ],
    correctIndex: 1,
    explanation: ' Carry Over is when the liquid level is 0 and Gas start to pass through Oil line, While Carry Under is when Liquid Level is 100% and Oil starts to pass through Gas line  '
  },
  {
    question: ' What is before te PCV, if closed the controller will not sense and PCV stays as it is ? ',
    options: [ " Positioner air supply ", " Positioner Regulator ", " Straightrning vanes  ", " Sensing Root Valve " ],
    correctIndex: 3,
    explanation: ' Sensing Root Valve is the isloation Valve from Separator body (Sep.Press.) to PCV controller the Fisher '
  },
  {
    question: ' If you had to connect a gas supply, when do we use Gas instead of Air for Instruments ? ',
    options: [ " Dry Gas & Sour ", " Wet Gas & Sweet Gas ", " Dry Gas & Sweet Gas  ", " Wet Gas & Sour Gas " ],
    correctIndex: 2,
    explanation: ' Shoud be Dry Gas without any liquid in the Gas line, and Sour Gas has H2S, while Sweet Gas has no H2s '
  },
  {
    question: ' What is Wet Gas ? ',
    options: [ " Gas produces liquid in separator ", " Gas produces no liquid ", " Gas with High H2S  ", " Oil with dissolved Gas " ],
    correctIndex: 0,
    explanation: ' Wet Gas is Gas is wet with oil '
  },
  {
    question: ' What is Gas Condensate ? ',
    options: [ " Completely Dry Gas ", " Heavy Oil ", " Gas in Reservoir, Liquid at surface  ", " Liquid in reservoir, Gas at surface " ],
    correctIndex: 2,
    explanation: ' Gas Condensate is Gas in reservoir Liquid at surface '
  },
  {
    question: ' Why Dry Gas form no liquid at separator ? ',
    options: [ " Dew point below separator condition ", " Dew point above separator condition ", " Reservoir pressure is too high  ", " separator pressure is too low " ],
    correctIndex: 0,
    explanation: ' The Hydrocarbon Dew Point is the temperature and pressure which the first drop of liquid begins to condense from a gas '
  },
  {
    question: ' What happens at Dew Point ? ',
    options: [ " Gas becomes fully liquid ", " First drop of liquid condenses ", " liquid becomes fully gas ", " No chage happens " ],
    correctIndex: 1,
    explanation: ' The Hydrocarbon Dew Point is the temperature and pressure which the first drop of liquid begins to condense from a gas '
  },
  {
    question: ' What is the meaning of Buildup Period in well testing? ',
    options: [ " Rigging up and preparing surface test equipment ", " Gradually increasing gas rate to boost production ", " Separating water from oil inside the separator ", " Shut-in well to build pressure and monitor reservoir " ],
    correctIndex: 3,
    explanation: ' Buildup Period is shutting the well after flowing it for long time to let the WHSIP increasing  '
  },
  {
    question: ' How many gallons in a Barrel? ',
    options: [ " 159 Gallon ", " 42  Gallon ", " 163 Gallon ", " 40 Gallon " ],
    correctIndex: 1,
    explanation: ' Barrel = 42 Gallon  '
  },
  {
    question: ' What is the pitting Corrosion? ',
    options: [ " Corrosion as small pits in surface ", " Corrosion as lare pits in surface ", " Corrosion as lon lines in surfce ", " Corrosion as full lines in surface " ],
    correctIndex: 0,
    explanation: ' Pitting Corrosion is Corrosion as small pits in surface  '
  },
  {
    question: ' How to determine the best location for thickness checks ? ',
    options: [ " At elbows and Flanges where Flow direction changes ", " At Elbows and reducers where flow direction canges ", " At Elbows and Tees where flow direction changes ", " At Tees and bends where flow direction changes " ],
    correctIndex: 2,
    explanation: ' Corrosion affest the most point is ar Elbows and Tees not Flanges or reducers  '
  },
  {
    question: ' When transferring from a stock tank to another tank, what is the best pump choice ? ',
    options: [ " Screw Pump ", " Centrifugal Pump ", " Triplex Pump ", " Diaphragm Pump " ],
    correctIndex: 1,
    explanation: ' Centrifugal Pump is pumping with low pressure and high rate  '
  },
  {
    question: ' What is associated gas ? ',
    options: [ " Gas formed after oil separator ", " Gas injection into reservoir for pressure ", " Gas produced with water from reservoir  ", " Gas produced with oil from reservoir " ],
    correctIndex: 3,
    explanation: ' Gas and oil is produced from the well  '
  },
  {
    question: ' What valve must be installed between transfer pump and oil manifold to prevent back flow to Transfer pump ? ',
    options: [ " Ball Valve ", " Check Valve ", " Gate Valve  ", " Globe Valve " ],
    correctIndex: 1,
    explanation: ' Check Valve is only one way to prevent back flow   '
  },
  {
    question: ' What is the best valve to install on the Tank for use in Drain to drain water only gradually ? ',
    options: [ " Ball Valve ", " Check Valve ", " Gate Valve  ", " Globe Valve " ],
    correctIndex: 3,
    explanation: ' Globe Valve is opening gradually    '
  },
  {
    question: ' Net Oil = 2200 BOPD, Shrinkage = 0.75 what is STO (Stock Tank Oil) ? ',
    options: [ " 165 STOBPD ", " 1650 STOBPD ", " 2933 STOBPD  ", " 2200 STOBPD " ],
    correctIndex: 1,
    explanation: ' Stock Tank Oil = Net Oil x Shrinkage = 2200 x 0.75 = 1650 STOBPD   '
  },
  {
    question: ' Gross = 2400 BPD, WC = 25%, Net Oil + Water =? ',
    options: [ " Net 1800 BPD & Water 600 BPD ", " Net 600 BPD & Water 1800 BPD ", " Net 2375 BPD & Water 25 BPD  ", " Net 2400 BPD & Water 25 BPD " ],
    correctIndex: 0,
    explanation: ' Water = (WC/100) x Gross = 0.25 x 2400 =  600 BPD & Net oil = Gross - Water = 2400 - 600 = 1800 BPD '
  },
  {
    question: ' Where is the Gas Boot installed ? ',
    options: [ " Inlet Separator ", " Gas Outlet ", " Oil Outlet ", " Water Outlet " ],
    correctIndex: 2,
    explanation: ' The gas boot helps to: Remove entrained free gas from produced oil,  Prevent gas from entering the oil outlet line, Improve oil discharge stability, Reduce gas carry-under into the water outlet system. '
  },
  {
    question: ' Why is the Gas Boot installed on Oil Outlet ? ',
    options: [ " To separate remaining Gas from oil befpre Tank ", " To separate remaining oil from Gas before Tank ", " To separate remaining Gas from oil after tank ", " To separate free Gas from oil inside Tank " ],
    correctIndex: 0,
    explanation: ' The gas boot helps to: Remove entrained free gas from produced oil before tank,  Prevent gas from entering the oil outlet line, Improve oil discharge stability, Reduce gas carry-under into the water outlet system. '
  },
  {
    question: ' A sign next to equipment says do not stand more than 5 minutes what is the reason? Due to the presence of:…? ',
    options: [ " H2S ", " CO2 ", " NORM ", " HT " ],
    correctIndex: 2,
    explanation: ' NORM (Naturally Occurring Radioactive Material) can accumulate in oilfield equipment, such as separators, flowlines, and production vessels. Prolonged exposure to radiation may increase health risks. '
  },
  {
    question: ' Which definition is most accurate for Dry Gas ? ',
    options: [ " Stays gas from Reservoir to separator, Dew Point<Separator ", " Stays gas from Reservoir to separator, Dew Point < reservoir ", " Stays gas from Reservoir to separator, Dew Point = Separator ", " Stays gas from Reservoir to surface, Dew Point < Separator " ],
    correctIndex: 2,
    explanation: ' Dry Gas is Gas coming from reservoir to separator and its Dew Point Equal Separator pressure '
  },
  {
    question: ' Which is the most definition accurate for Sweet Gas ? ',
    options: [ " Has High H2s and high CO2 needs treatment ", " has low H2S and high Co2, needs tretment ", " has high H2S and low CO2, needs treatment ", " has low H2S and low CO2, no treatment needed " ],
    correctIndex: 3,
    explanation: ' Sour gas has high H2S & high CO2 while Sweet gas has low H2S & low CO2 '
  },
  {
    question: ' Why is NORM comsidered more dangerous than H2S kills in seconds ? ',
    options: [ " Because it causes immediately burning in the eyes and noses ", " Because it has no smell and no immediate symbtoms ", " Because it causs suffocation ", " Because it is explosive " ],
    correctIndex: 1,
    explanation: ' H2S is burning eyes & noses, has smell for short time, causes suffocation, and is explosive. while NORM is not explosive, not burning eyes and noses and has no smell and no immediate symbtoms '
  },
  {
    question: ' What is the difference between Dew Point and Bubble point ? ',
    options: [ " Dew point: liquid from Gas, Bubble point: gas from oil ", " Dew point: Gas from liquid, Bubble point: oil from gas  ", " Both for gas wells only ", " Both for oil wells only " ],
    correctIndex: 0,
    explanation: ' Dew Point is liquid from Gas while Bubble point is gas from liquid and Both for oil and gas wells  '
  },
  {
    question: ' What is the main benefit of using a Senior Orifice Fitting in SWT system ? ',
    options: [ " Prevent separator Emulsion ", " Boost Oil Transfer pump efficiency  ", " Automatic Choke size control ", " Change Orifice under flow without stopping production " ],
    correctIndex: 3,
    explanation: ' Senior Orifice Daniel Box has Upper & Lower compartments and fitting to get the possibility to change orifice under flow without stopping production '
  },
  {
    question: ' What happens in the metering line when an orifice Plate with a very small Bore is installed compared to the Gas flow rate ? ',
    options: [ " Drop Separator Pressure ", " Accumulate Surge BS&W  ", " Form Choke Hydrates ", " Over-range Delta P " ],
    correctIndex: 3,
    explanation: ' The differential pressure between upstream & downstream of the Daniel Box related inverse with the Orifice Plate Bore Size  '
  },
  {
      question: 'What does AOF stand for in petroleum engineering?',
      options: [
          "Absolute Open Flow",
          "Annular Oil Flow",
          "Available Oil Formation",
          "Average Operating Flow"
      ],
      correctIndex: 0,
      explanation: 'AOF (Absolute Open Flow) is the theoretical maximum flow rate a well could produce against zero bottom-hole flowing pressure.'
  },
  {
      question: 'Which abbreviation represents the pressure measured at the wellhead while the well is flowing?',
      options: [
          "SITHP",
          "FWHP",
          "SICP",
          "SBHP"
      ],
      correctIndex: 1,
      explanation: 'FWHP stands for Flowing Well Head Pressure, which is the pressure measured at the wellhead during production.'
  },
  {
      question: 'What does BS&W represent in surface well testing?',
      options: [
          "Basic Separator & Water",
          "Bottom Sediment & Waste",
          "Basic Sediment & Water",
          "Barrel Sediment & Water"
      ],
      correctIndex: 2,
      explanation: 'BS&W stands for Basic Sediment & Water and represents the sediment and water content in produced crude oil.'
  },
  {
      question: 'What does AGA stand for?',
      options: ["American Gas Association", "American Geological Association", "American General Authority", "American Gas Administration"],
      correctIndex: 0,
      explanation: 'AGA stands for American Gas Association, an organization involved in natural gas industry standards and practices.'
  },
  {
      question: 'What does AOF represent in well testing?',
      options: ["Average Oil Flow", "Absolute Open Flow", "Available Operating Flow", "Actual Oil Formation"],
      correctIndex: 1,
      explanation: 'AOF stands for Absolute Open Flow, representing the theoretical maximum well flow rate at zero bottom-hole flowing pressure.'
  },
  {
      question: 'What does Ann represent in oilfield terminology?',
      options: ["Annual Production", "Annular Pressure", "Annulus", "Annual Report"],
      correctIndex: 2,
      explanation: 'Ann stands for Annulus, the space between two concentric tubular strings or between a tubular and the wellbore.'
  },
  {
      question: 'What does ANSI stand for?',
      options: ["American National Safety Institute", "American Network Standards Institution", "American National System Inspection", "American National Standards Institute"],
      correctIndex: 3,
      explanation: 'ANSI stands for American National Standards Institute, which coordinates and oversees voluntary standards in the United States.'
  },
  {
      question: 'What does ASA stand for?',
      options: ["American Standards Association", "American Safety Association", "American System Authority", "American Society of Automation"],
      correctIndex: 0,
      explanation: 'ASA stands for American Standards Association, the former name of the organization that preceded ANSI.'
  },
  {
      question: 'What does API stand for in the oil and gas industry?',
      options: ["American Petroleum Inspection", "American Petroleum Institute", "Association of Petroleum Industries", "American Production Institute"],
      correctIndex: 1,
      explanation: 'API stands for American Petroleum Institute, which develops standards and recommended practices for the petroleum industry.'
  },
  {
      question: 'What does ASME stand for?',
      options: ["American Standard Mechanical Equipment", "Association of Safety Mechanical Engineers", "American Society of Mechanical Engineers", "American System of Manufacturing Engineering"],
      correctIndex: 2,
      explanation: 'ASME stands for American Society of Mechanical Engineers, which develops engineering codes and standards.'
  },
  {
      question: 'What does Bean refer to in well testing?',
      options: ["Bottom Hole Assembly", "Basic Equipment Arrangement", "Barrel Equivalent Number", "Choke Bean Size"],
      correctIndex: 3,
      explanation: 'Bean refers to the choke bean size, which determines the restriction through which well fluids flow.'
  },
  {
      question: 'What does BHA stand for?',
      options: ["Bottom Hole Assembly", "Bottom Head Arrangement", "Basic Hydraulic Assembly", "Bore Hole Analysis"],
      correctIndex: 0,
      explanation: 'BHA stands for Bottom Hole Assembly, the components assembled at the lower end of the drill string.'
  },
  {
      question: 'What does BHT stand for?',
      options: ["Bottom Head Temperature", "Bottom Hole Temperature", "Basic Heating Temperature", "Bore Hole Testing"],
      correctIndex: 1,
      explanation: 'BHT stands for Bottom Hole Temperature, the temperature measured or estimated at the bottom of a well.'
  },
  {
      question: 'What does BHP stand for?',
      options: ["Basic Hydraulic Pressure", "Bottom Head Pressure", "Bottom Hole Pressure", "Bore Hole Performance"],
      correctIndex: 2,
      explanation: 'BHP stands for Bottom Hole Pressure, the pressure measured or calculated at the bottom of a well.'
  },
  {
      question: 'What does BLPD stand for?',
      options: ["Barrel Liquid Per Depth", "Basic Liquid Production Daily", "Barrel Lift Per Day", "Barrel Liquid Per Day"],
      correctIndex: 3,
      explanation: 'BLPD means Barrels of Liquid Per Day, a production rate unit for total liquid production.'
  },
  {
      question: 'What does BFPD stand for?',
      options: ["Barrels of Fluid Per Day", "Barrels of Formation Per Depth", "Basic Flow Production Daily", "Barrels of Fuel Per Day"],
      correctIndex: 0,
      explanation: 'BFPD means Barrels of Fluid Per Day, representing the combined oil and water production rate.'
  },
  {
      question: 'What does Bg represent in reservoir engineering?',
      options: ["Gas Gravity", "Gas Formation Volume Factor", "Gas Flow Rate", "Gas Saturation"],
      correctIndex: 1,
      explanation: 'Bg is the gas formation volume factor, relating gas volume at reservoir conditions to its volume at standard conditions.'
  },
  {
      question: 'What does Bo represent?',
      options: ["Oil Saturation", "Oil Gravity", "Oil Formation Volume Factor", "Oil Flow Rate"],
      correctIndex: 2,
      explanation: 'Bo is the oil formation volume factor, relating oil volume at reservoir conditions to its stock tank volume.'
  },
  {
      question: 'What does BOP stand for?',
      options: ["Basic Operating Pressure", "Blow Out Pressure", "Bottom Oil Production", "Blowout Preventer"],
      correctIndex: 3,
      explanation: 'BOP stands for Blowout Preventer, a safety device used to control pressure and prevent uncontrolled well flow.'
  },
  {
      question: 'What does BOPD stand for?',
      options: ["Barrels of Oil Per Day", "Barrels of Output Per Depth", "Basic Oil Production Daily", "Barrels of Pressure Per Day"],
      correctIndex: 0,
      explanation: 'BOPD means Barrels of Oil Per Day, a unit used to express daily oil production.'
  },
  {
      question: 'What does BPD stand for?',
      options: ["Basic Pressure Difference", "Barrels Per Day", "Barrels Per Depth", "Bottom Production Data"],
      correctIndex: 1,
      explanation: 'BPD means Barrels Per Day, a common unit for liquid production rates.'
  },
  {
      question: 'What does BPV stand for?',
      options: ["Back Pressure Valve", "Bottom Pressure Vessel", "Basic Production Valve", "Backflow Prevention Vessel"],
      correctIndex: 0,
      explanation: 'BPV stands for Back Pressure Valve, a valve used to control or maintain pressure within a system.'
  },
  {
      question: 'What does BS&W stand for?',
      options: ["Basic Separator and Water", "Bottom Sediment and Waste", "Basic Sediment and Water", "Barrel Sediment and Water"],
      correctIndex: 2,
      explanation: 'BS&W stands for Basic Sediment and Water, representing the water and sediment content in crude oil.'
  },
  {
      question: 'What does BWPD stand for?',
      options: ["Barrels of Well Production Daily", "Basic Water Pressure Difference", "Barrels of Water Per Depth", "Barrels of Water Per Day"],
      correctIndex: 3,
      explanation: 'BWPD means Barrels of Water Per Day, the daily water production rate.'
  },
  {
      question: 'What does CGR stand for?',
      options: ["Condensate to Gas Ratio", "Crude Gas Rate", "Combined Gas Recovery", "Condensate Gravity Reading"],
      correctIndex: 0,
      explanation: 'CGR stands for Condensate to Gas Ratio, expressing the volume of produced condensate relative to gas production.'
  },
  {
      question: 'What does CHP stand for?',
      options: ["Choke Hydraulic Pressure", "Casing Head Pressure", "Casing Hydraulic Performance", "Closed Hole Pressure"],
      correctIndex: 1,
      explanation: 'CHP stands for Casing Head Pressure, the pressure measured at the casing head.'
  },
  {
      question: 'What does CITHP stand for?',
      options: ["Casing Internal Test Pressure", "Closed-In Tubing Hydraulic Pressure", "Closed-In Tubing Head Pressure", "Casing Inlet Tubing Head Pressure"],
      correctIndex: 2,
      explanation: 'CITHP means Closed-In Tubing Head Pressure, measured at the tubing head when the well is shut in.'
  },
  {
      question: 'What does CM stand for in surface well testing?',
      options: ["Casing Measurement", "Control Meter", "Combined Manifold", "Choke Manifold"],
      correctIndex: 3,
      explanation: 'CM stands for Choke Manifold, an assembly used to control and direct well flow through chokes and valves.'
  },
  {
      question: 'What does CMF stand for?',
      options: ["Combined Meter Factor", "Calculated Mass Flow", "Choke Measurement Frequency", "Combined Manifold Flow"],
      correctIndex: 0,
      explanation: 'CMF stands for Combined Meter Factor, a factor used in calculating corrected metered production.'
  },
  {
      question: 'What does CMSF stand for?',
      options: ["Combined Meter Safety Factor", "Combined Meter Shrinkage Factor", "Calculated Mass Shrinkage Flow", "Combined Measurement System Factor"],
      correctIndex: 1,
      explanation: 'CMSF stands for Combined Meter Shrinkage Factor, used when accounting for shrinkage in production calculations.'
  },
  {
      question: 'What does CO2 represent?',
      options: ["Carbon Monoxide", "Calcium Oxide", "Carbon Dioxide", "Cobalt Oxide"],
      correctIndex: 2,
      explanation: 'CO2 is Carbon Dioxide, a naturally occurring gas that can be present in produced fluids.'
  },
  {
      question: 'What does Csg stand for?',
      options: ["Control System", "Casing Gas", "Closed Section", "Casing"],
      correctIndex: 3,
      explanation: 'Csg is an abbreviation for Casing, the pipe installed in a wellbore to provide structural support.'
  },
  {
      question: 'What does CTU stand for?',
      options: ["Coiled Tubing Unit", "Control Testing Unit", "Casing Treatment Utility", "Continuous Testing Unit"],
      correctIndex: 0,
      explanation: 'CTU stands for Coiled Tubing Unit, equipment used to deploy continuous tubing into a well.'
  },
  {
      question: 'What does DHSV stand for?',
      options: ["Down Hole Surface Valve", "Downhole Safety Valve", "Dynamic Hydraulic Safety Valve", "Drilling Head Safety Valve"],
      correctIndex: 1,
      explanation: 'DHSV stands for Downhole Safety Valve, a safety device installed downhole to shut in the well.'
  },
  {
      question: 'What does DF stand for?',
      options: ["Drilling Fluid", "Differential Flow", "Derrick Floor", "Dynamic Formation"],
      correctIndex: 2,
      explanation: 'DF stands for Derrick Floor, the working floor area of a drilling rig.'
  },
  {
      question: 'What does DFL stand for?',
      options: ["Dynamic Flow Line", "Downhole Fluid Loss", "Differential Flow Level", "Dynamic Fluid Level"],
      correctIndex: 3,
      explanation: 'DFL stands for Dynamic Fluid Level, the fluid level in a well while it is producing or operating.'
  },
  {
      question: 'What does DPR stand for?',
      options: ["Daily Performance Report", "Daily Pressure Reading", "Drilling Production Rate", "Dynamic Pressure Record"],
      correctIndex: 0,
      explanation: 'DPR stands for Daily Performance Report, a report documenting daily operational and production performance.'
  },
  {
      question: 'What does DST stand for?',
      options: ["Downhole Safety Test", "Drill Stem Test", "Dynamic Surface Testing", "Drilling System Temperature"],
      correctIndex: 1,
      explanation: 'DST stands for Drill Stem Test, a formation testing method used to evaluate reservoir fluids and pressure.'
  },
  {
      question: 'What does DWT stand for?',
      options: ["Dynamic Weight Testing", "Drilling Well Temperature", "Dead Weight Tester", "Differential Water Test"],
      correctIndex: 2,
      explanation: 'DWT stands for Dead Weight Tester, a pressure calibration instrument that uses known weights and piston area.'
  },
  {
      question: 'What does ECD stand for?',
      options: ["Equivalent Choke Diameter", "Effective Circulating Data", "Estimated Column Density", "Equivalent Circulating Density"],
      correctIndex: 3,
      explanation: 'ECD stands for Equivalent Circulating Density, the effective mud density when accounting for annular pressure losses during circulation.'
  },
  {
      question: 'What does ESD stand for?',
      options: ["Emergency Shutdown", "Emergency Safety Device", "External Shut-in Detection", "Electronic System Design"],
      correctIndex: 0,
      explanation: 'ESD stands for Emergency Shutdown, a safety function that shuts down equipment or isolates flow during an emergency.'
  },
  {
      question: 'What does ESP stand for?',
      options: ["Emergency Safety Pressure", "Electrical Submersible Pump", "External Separator Pressure", "Electronic Surface Production"],
      correctIndex: 1,
      explanation: 'ESP stands for Electrical Submersible Pump, an artificial lift system using a downhole electric pump.'
  },
  {
      question: 'What does FBHT stand for?',
      options: ["Formation Bottom Hole Test", "Flowing Borehole Hydraulic Temperature", "Flowing Bottom Hole Temperature", "Formation Based Heating Time"],
      correctIndex: 2,
      explanation: 'FBHT stands for Flowing Bottom Hole Temperature, the temperature at the bottom of the well while flowing.'
  },
  {
      question: 'What does FBHP stand for?',
      options: ["Formation Bottom Hole Pressure", "Flowing Borehole Hydraulic Pressure", "Flowing Back Pressure", "Flowing Bottom Hole Pressure"],
      correctIndex: 3,
      explanation: 'FBHP stands for Flowing Bottom Hole Pressure, the pressure at the bottom of the well during production.'
  },
  {
      question: 'What does FCP stand for?',
      options: ["Flowing Casing Pressure", "Formation Control Pressure", "Flowing Choke Pressure", "Fluid Column Pressure"],
      correctIndex: 0,
      explanation: 'FCP stands for Flowing Casing Pressure, the casing pressure measured while the well is flowing.'
  },
  {
      question: 'What does FIT stand for?',
      options: ["Flow Integrity Test", "Formation Integrity Test", "Fluid Inspection Test", "Formation Injection Test"],
      correctIndex: 1,
      explanation: 'FIT stands for Formation Integrity Test, which checks the ability of the formation to withstand a specified pressure.'
  },
  {
      question: 'What does FLP stand for?',
      options: ["Formation Lift Pressure", "Flowing Liquid Pressure", "Flow Line Pressure", "Fluid Level Pressure"],
      correctIndex: 2,
      explanation: 'FLP stands for Flow Line Pressure, the pressure measured in the flowline.'
  },
  {
      question: 'What does Frac stand for?',
      options: ["Fluid Recovery Analysis", "Formation Rate Assessment", "Flow Restriction Assembly", "Hydraulic Fracturing"],
      correctIndex: 3,
      explanation: 'Frac is short for Hydraulic Fracturing, a stimulation technique that creates fractures in the formation to improve flow.'
  },
  {
      question: 'What does FTHP stand for?',
      options: ["Flowing Tubing Head Pressure", "Formation Tubing Hydraulic Pressure", "Flowing Test Head Pressure", "Fluid Temperature Holding Pressure"],
      correctIndex: 0,
      explanation: 'FTHP stands for Flowing Tubing Head Pressure, measured at the tubing head while the well is flowing.'
  },
  {
      question: 'What does FH stand for in surface well testing?',
      options: ["Flow Header", "Fired Heater", "Flow Hydrate", "Formation Heating"],
      correctIndex: 1,
      explanation: 'FH stands for Fired Heater, equipment used to heat produced fluids using a combustion heat source.'
  },
  {
      question: 'What does FTHT stand for?',
      options: ["Flow Test Hydraulic Temperature", "Formation Tubing Head Temperature", "Flowing Tubing Head Temperature", "Fluid Test Heating Time"],
      correctIndex: 2,
      explanation: 'FTHT stands for Flowing Tubing Head Temperature, the temperature measured at the tubing head while flowing.'
  },
  {
      question: 'What does FWHP stand for?',
      options: ["Flowing Well Hydraulic Pressure", "Formation Well Head Pressure", "Flowing Water Head Pressure", "Flowing Wellhead Pressure"],
      correctIndex: 3,
      explanation: 'FWHP stands for Flowing Wellhead Pressure, the pressure measured at the wellhead while the well is flowing.'
  },
  {
      question: 'What does FWV stand for?',
      options: ["Flowing Wing Valve", "Flowing Water Valve", "Formation Wing Vessel", "Flowline Water Vent"],
      correctIndex: 0,
      explanation: 'FWV stands for Flowing Wing Valve, the wing valve used to control the flowing production path.'
  },
  {
      question: 'What does GIIP stand for?',
      options: ["Gas Injection Into Production", "Gas Initially In Place", "Gas Inlet Inspection Point", "Gross Initial Injection Pressure"],
      correctIndex: 1,
      explanation: 'GIIP stands for Gas Initially In Place, the estimated original quantity of gas in a reservoir before production.'
  },
  {
      question: 'What does GLR stand for?',
      options: ["Gas Lift Recovery", "Gas Line Rate", "Gas Liquid Ratio", "Gas Level Reading"],
      correctIndex: 2,
      explanation: 'GLR stands for Gas Liquid Ratio, the ratio of produced gas volume to total produced liquid volume.'
  },
  {
      question: 'What does GL stand for?',
      options: ["Gas Lift", "Gas Level", "Ground Line", "Ground Level"],
      correctIndex: 3,
      explanation: 'GL stands for Ground Level, the elevation of the ground surface used as a reference point.'
  },
  {
      question: 'What does GOC stand for?',
      options: ["Gas Oil Contact", "Gas Operating Condition", "Gas Output Capacity", "Gravity Oil Calculation"],
      correctIndex: 0,
      explanation: 'GOC stands for Gas Oil Contact, the interface between the gas and oil zones in a reservoir.'
  },
  {
      question: 'What does GOR stand for?',
      options: ["Gas Output Rate", "Gas Oil Ratio", "Gas Operating Recovery", "Gross Oil Recovery"],
      correctIndex: 1,
      explanation: 'GOR stands for Gas Oil Ratio, the volume of produced gas divided by the volume of produced oil.'
  },
  {
      question: 'What does GVF stand for?',
      options: ["Gas Volume Factor", "Gas Velocity Flow", "Gas Volume Fraction", "Gas Viscosity Factor"],
      correctIndex: 2,
      explanation: 'GVF stands for Gas Volume Fraction, the proportion of gas in a multiphase fluid stream by volume.'
  },
  {
      question: 'What does GWC stand for?',
      options: ["Gas Well Condition", "Gas Water Content", "Ground Water Contact", "Gas Water Contact"],
      correctIndex: 3,
      explanation: 'GWC stands for Gas Water Contact, the interface between the gas and water zones in a reservoir.'
  },
  {
      question: 'What does H2S stand for?',
      options: ["Hydrogen Sulphide", "Hydraulic Sulphur System", "Heavy Hydrocarbon Sulphide", "Hydrogen Sulphate"],
      correctIndex: 0,
      explanation: 'H2S stands for Hydrogen Sulphide, a highly toxic and flammable gas that requires strict safety precautions.'
  },
  {
      question: 'What does HAZOP stand for?',
      options: ["Hazardous Zone Operation", "Hazard and Operability", "High Alert Zone Operating Procedure", "Hazard Assessment of Production"],
      correctIndex: 1,
      explanation: 'HAZOP stands for Hazard and Operability Study, a systematic method for identifying process hazards and operational problems.'
  },
  {
      question: 'What does HCR stand for?',
      options: ["High Capacity Regulator", "Hydraulic Control Rating", "High Closing Ratio Valve", "High Circulation Rate"],
      correctIndex: 2,
      explanation: 'HCR stands for High Closing Ratio Valve, commonly used in hydraulic safety and control systems.'
  },
  {
      question: 'What does HIPPS stand for?',
      options: ["High Injection Pressure Protection System", "Hydraulic Integrated Production Pressure System", "High Integrity Process Safety", "High Integrity Pressure Protection System"],
      correctIndex: 3,
      explanation: 'HIPPS stands for High Integrity Pressure Protection System, an instrumented safety system designed to prevent overpressure.'
  },
  {
      question: 'What does HPHT stand for?',
      options: ["High Pressure High Temperature", "High Production Hydraulic Testing", "High Pressure Heating Technology", "Hydraulic Pressure Holding Test"],
      correctIndex: 0,
      explanation: 'HPHT stands for High Pressure High Temperature, describing well conditions that require specialized equipment and procedures.'
  },
  {
      question: 'What does ID stand for?',
      options: ["Internal Depth", "Inner Diameter", "Inside Density", "Instrument Design"],
      correctIndex: 1,
      explanation: 'ID stands for Inner Diameter, the internal diameter of a pipe or tubular component.'
  },
  {
      question: 'What does InH2O represent?',
      options: ["Inlet Hydrogen Pressure", "Internal Height of Water", "Inches of Water", "Inches of Hydraulic Oil"],
      correctIndex: 2,
      explanation: 'InH2O means Inches of Water, a pressure unit commonly used for low differential pressures in gas measurement.'
  },
  {
      question: 'What does IPR stand for?',
      options: ["Internal Pressure Reading", "Injection Performance Rate", "Inflow Pressure Resistance", "Inflow Performance Relationship"],
      correctIndex: 3,
      explanation: 'IPR stands for Inflow Performance Relationship, describing the relationship between reservoir pressure and well production rate.'
  },
  {
      question: 'What does J represent in reservoir engineering?',
      options: ["Productivity Index", "Joule Pressure", "Gas Saturation", "Injection Factor"],
      correctIndex: 0,
      explanation: 'J represents the Productivity Index, which describes the ability of a well to produce fluids for a given pressure drawdown.'
  },
  {
      question: 'What does K represent in reservoir engineering?',
      options: ["Formation Pressure", "Permeability", "Oil Saturation", "Gas Compressibility"],
      correctIndex: 1,
      explanation: 'K represents Permeability, the ability of a porous rock to transmit fluids.'
  },
  {
      question: 'What does KB stand for?',
      options: ["Kelly Base", "Key Bore", "Kelly Bushing", "Known Bottom"],
      correctIndex: 2,
      explanation: 'KB stands for Kelly Bushing, a reference elevation used in drilling and well measurements.'
  },
  {
      question: 'What does KBPD stand for?',
      options: ["Kilobarrel Per Depth", "Known Barrels Per Day", "Kilobytes Per Day", "Thousand Barrels Per Day"],
      correctIndex: 3,
      explanation: 'KBPD means Thousand Barrels Per Day, a unit used to express large production rates.'
  },
  {
      question: 'What does kPa stand for?',
      options: ["Kilopascal", "Kilopressure Area", "Kinetic Pressure Analysis", "Known Pascal"],
      correctIndex: 0,
      explanation: 'kPa stands for Kilopascal, a pressure unit equal to 1,000 pascals.'
  },
  {
      question: 'What does kpsi represent?',
      options: ["Kilopascal Per Square Inch", "Thousand Pounds Per Square Inch", "Kilo Pressure System Indicator", "Thousand Kilopascals"],
      correctIndex: 1,
      explanation: 'kpsi means thousand pounds per square inch. One kpsi equals 1,000 psi.'
  },
  {
      question: 'What does Kr stand for?',
      options: ["Reservoir Permeability", "Relative Pressure", "Relative Permeability", "Rock Porosity"],
      correctIndex: 2,
      explanation: 'Kr represents Relative Permeability, describing the effective permeability of a fluid relative to the absolute permeability of the rock.'
  },
  {
      question: 'What does Kro represent?',
      options: ["Oil Recovery", "Oil Formation Factor", "Oil Flow Rate", "Relative Permeability to Oil"],
      correctIndex: 3,
      explanation: 'Kro represents Relative Permeability to Oil, indicating how easily oil flows through the porous rock in the presence of other fluids.'
  },
  {
      question: 'What does Krg represent?',
      options: ["Relative Permeability to Gas", "Gas Recovery Factor", "Gas Formation Volume Factor", "Gas Saturation"],
      correctIndex: 0,
      explanation: 'Krg represents Relative Permeability to Gas, describing the ability of gas to flow through the reservoir rock.'
  },
  {
      question: 'What does Krw represent?',
      options: ["Water Recovery Factor", "Relative Permeability to Water", "Water Formation Volume Factor", "Water Cut"],
      correctIndex: 1,
      explanation: 'Krw represents Relative Permeability to Water, describing the ability of water to flow through the reservoir rock.'
  },
  {
      question: 'What does KWV stand for?',
      options: ["Known Water Volume", "Kill Water Vessel", "Kill Wing Valve", "Key Well Valve"],
      correctIndex: 2,
      explanation: 'KWV stands for Kill Wing Valve, a valve on the wellhead used for well intervention and kill operations.'
  },
  {
      question: 'What does LCM stand for?',
      options: ["Liquid Control Manifold", "Low Circulation Measurement", "Lost Control Mechanism", "Lost Circulation Material"],
      correctIndex: 3,
      explanation: 'LCM stands for Lost Circulation Material, material added to drilling fluid to reduce or stop fluid losses into the formation.'
  },
  {
      question: 'What does LCV stand for?',
      options: ["Level Control Valve", "Liquid Check Valve", "Low Capacity Vessel", "Line Control Volume"],
      correctIndex: 0,
      explanation: 'LCV stands for Level Control Valve, a control valve used to regulate liquid level in equipment such as separators.'
  },
  {
      question: 'What does LMV stand for?',
      options: ["Liquid Master Valve", "Lower Master Valve", "Line Measurement Valve", "Low-pressure Main Valve"],
      correctIndex: 1,
      explanation: 'LMV stands for Lower Master Valve, the lower master valve in a wellhead valve arrangement.'
  },
  {
      question: 'What does LOTO stand for?',
      options: ["Line Operation and Testing Order", "Low Output Temperature Operation", "Lock Out Tag Out", "Liquid Output Transfer Operation"],
      correctIndex: 2,
      explanation: 'LOTO stands for Lock Out Tag Out, a safety procedure used to isolate hazardous energy before maintenance.'
  },
  {
      question: 'What does LFM stand for?',
      options: ["Liquid Flow Measurement", "Low Frequency Meter", "Line Flow Monitor", "Liquid Flow Meter"],
      correctIndex: 3,
      explanation: 'LFM stands for Liquid Flow Meter, an instrument used to measure liquid flow rate.'
  },
  {
      question: 'What does LOT stand for?',
      options: ["Leak Off Test", "Liquid Output Test", "Line Operating Temperature", "Loss of Tubing"],
      correctIndex: 0,
      explanation: 'LOT stands for Leak Off Test, used to determine the pressure at which the formation begins to accept fluid.'
  },
  {
      question: 'What does LVF stand for?',
      options: ["Liquid Volume Factor", "Level Volume Fraction", "Low Velocity Flow", "Liquid Vapor Fraction"],
      correctIndex: 1,
      explanation: 'LVF stands for Level Volume Fraction, describing the fraction of volume occupied by liquid at a particular level or measurement.'
  },
  {
      question: 'What does LWD stand for?',
      options: ["Logging Well Depth", "Low Weight Drilling", "Logging While Drilling", "Liquid While Drilling"],
      correctIndex: 2,
      explanation: 'LWD stands for Logging While Drilling, a method of acquiring formation measurements while drilling.'
  },
  {
      question: 'What does MBPD stand for?',
      options: ["Million Barrels Per Depth", "Meter Barrels Per Day", "Maximum Barrels Per Day", "Million Barrels Per Day"],
      correctIndex: 3,
      explanation: 'MBPD means Million Barrels Per Day, a unit for expressing very large liquid production rates.'
  },
  {
      question: 'What does MDT stand for?',
      options: ["Modular Formation Dynamic Tester", "Measurement Drilling Tool", "Maximum Downhole Temperature", "Multi-Directional Testing"],
      correctIndex: 0,
      explanation: 'MDT stands for Modular Formation Dynamics Tester, a wireline formation testing tool used to obtain pressure and fluid samples.'
  },
  {
      question: 'What does MF stand for in metering?',
      options: ["Mass Flow", "Meter Factor", "Measurement Frequency", "Maximum Flow"],
      correctIndex: 1,
      explanation: 'MF stands for Meter Factor, a correction factor used to adjust measured meter output to the actual volume.'
  },
  {
      question: 'What does MSCFD stand for?',
      options: ["Million Standard Cubic Feet Daily", "Meter Standard Cubic Flow Data", "Thousand Standard Cubic Feet per Day", "Maximum Standard Cubic Flow Density"],
      correctIndex: 2,
      explanation: 'MSCFD means Thousand Standard Cubic Feet per Day, a unit used for gas production rates.'
  },
  {
      question: 'What does MMSCFD stand for?',
      options: ["Metered Mass Standard Cubic Feet Daily", "Maximum Million Standard Cubic Flow Data", "Million Meter Standard Cubic Feet Daily", "Million Standard Cubic Feet per Day"],
      correctIndex: 3,
      explanation: 'MMSCFD means Million Standard Cubic Feet per Day, a unit for large gas production rates.'
  },
  {
      question: 'What does MPFM stand for?',
      options: ["Multi-Phase Flow Meter", "Maximum Pressure Flow Monitor", "Metered Production Fluid Measurement", "Multi-Pressure Formation Meter"],
      correctIndex: 0,
      explanation: 'MPFM stands for Multi-Phase Flow Meter, an instrument that measures oil, gas, and water flow rates without necessarily separating the phases.'
  },
  {
      question: 'What does MPI stand for in inspection?',
      options: ["Mechanical Pressure Inspection", "Magnetic Particle Inspection", "Maximum Performance Indicator", "Material Pressure Integrity"],
      correctIndex: 1,
      explanation: 'MPI stands for Magnetic Particle Inspection, a non-destructive testing method used to detect surface and near-surface defects in ferromagnetic materials.'
  },
  {
      question: 'What does MSL stand for?',
      options: ["Maximum Safety Level", "Mean Surface Location", "Mean Sea Level", "Measured Static Level"],
      correctIndex: 2,
      explanation: 'MSL stands for Mean Sea Level, a vertical reference datum used for elevation measurements.'
  },
  {
      question: 'What does MW stand for in drilling?',
      options: ["Mechanical Work", "Maximum Weight", "Mud Water", "Mud Weight"],
      correctIndex: 3,
      explanation: 'MW stands for Mud Weight, the density of drilling fluid, commonly expressed in ppg or kg/m³.'
  },
  {
      question: 'What does MWD stand for?',
      options: ["Measurement While Drilling", "Monitoring Well Depth", "Mechanical Weight Drilling", "Mud Weight Detection"],
      correctIndex: 0,
      explanation: 'MWD stands for Measurement While Drilling, a system that provides drilling and directional measurements while drilling.'
  },
  {
      question: 'What does MWV stand for?',
      options: ["Main Water Valve", "Master Wing Valve", "Mechanical Well Valve", "Maximum Working Volume"],
      correctIndex: 1,
      explanation: 'MWV stands for Master Wing Valve, a wellhead valve used to control flow through the wing outlet.'
  },
  {
      question: 'What does NACE stand for?',
      options: ["National Association of Chemical Engineers", "National Authority for Corrosion Evaluation", "National Association of Corrosion Engineers", "North American Chemical Equipment"],
      correctIndex: 2,
      explanation: 'NACE stands for National Association of Corrosion Engineers, historically associated with corrosion control standards and practices.'
  },
  {
      question: 'What does NaCl stand for?',
      options: ["Nitrogen Chloride", "Natural Calcium Liquid", "Sodium Carbonate", "Sodium Chloride"],
      correctIndex: 3,
      explanation: 'NaCl is Sodium Chloride, commonly known as salt, and is an important component of produced water and brines.'
  },
  {
      question: 'What does NPT stand for?',
      options: ["National Pipe Thread", "Nominal Pressure Test", "Non-Pressure Tubing", "National Production Tool"],
      correctIndex: 0,
      explanation: 'NPT stands for National Pipe Thread, a tapered thread standard used for pipe connections.'
  },
  {
      question: 'What does NWA stand for according to the supplied dictionary?',
      options: ["Natural Well Analysis", "Natural Work Area", "Normal Working Arrangement", "National Water Association"],
      correctIndex: 1,
      explanation: 'NWA is listed in the supplied dictionary as Natural Work Area.'
  },
  {
      question: 'What does OD stand for?',
      options: ["Operating Depth", "Oil Density", "Outer Diameter", "Open Discharge"],
      correctIndex: 2,
      explanation: 'OD stands for Outer Diameter, the external diameter of a pipe or tubular component.'
  },
  {
      question: 'What does OGR stand for?',
      options: ["Oil Gas Recovery", "Operating Gas Ratio", "Oil Gravity Reading", "Oil Gas Ratio"],
      correctIndex: 3,
      explanation: 'OGR stands for Oil Gas Ratio, expressing the ratio of oil volume to gas volume.'
  },
  {
      question: 'What does OGIP stand for?',
      options: ["Original Gas In Place", "Oil Gas Injection Pressure", "Original Gas Injection Point", "Operating Gas In Production"],
      correctIndex: 0,
      explanation: 'OGIP stands for Original Gas In Place, the original volume of gas contained in a reservoir before production.'
  },
  {
      question: 'What does OLR stand for?',
      options: ["Oil Recovery Level", "Oil Liquid Ratio", "Operating Liquid Rate", "Oil Lift Recovery"],
      correctIndex: 1,
      explanation: 'OLR stands for Oil Liquid Ratio, the ratio of oil production to total liquid production.'
  },
  {
      question: 'What does OLP stand for?',
      options: ["Oil Line Pressure", "Operating Lift Pressure", "Oil Lift Performance", "Oil Liquid Production"],
      correctIndex: 2,
      explanation: 'OLP stands for Oil Lift Performance, describing the performance relationship of an oil lift system.'
  },
  {
      question: 'What does OOIP stand for?',
      options: ["Oil Output In Production", "Original Oil Injection Pressure", "Operating Oil In Place", "Original Oil In Place"],
      correctIndex: 3,
      explanation: 'OOIP stands for Original Oil In Place, the original quantity of oil present in a reservoir before production.'
  },
  {
      question: 'What does OWC stand for?',
      options: ["Oil Water Contact", "Oil Well Condition", "Operating Water Cut", "Oil Water Content"],
      correctIndex: 0,
      explanation: 'OWC stands for Oil Water Contact, the interface between the oil and water zones in a reservoir.'
  },
  {
      question: 'What does P&ID stand for?',
      options: ["Production and Inspection Diagram", "Piping and Instrumentation Diagram", "Pressure and Injection Design", "Process and Installation Data"],
      correctIndex: 1,
      explanation: 'P&ID stands for Piping and Instrumentation Diagram, showing process equipment, piping, instruments, and control systems.'
  },
  {
      question: 'What does Pc represent in reservoir engineering?',
      options: ["Production Capacity", "Critical Pressure", "Capillary Pressure", "Casing Pressure"],
      correctIndex: 2,
      explanation: 'Pc represents Capillary Pressure, the pressure difference across the interface between two immiscible fluids in porous media.'
  },
  {
      question: 'What does PCP stand for?',
      options: ["Pressure Control Pump", "Production Circulation Pump", "Primary Casing Pressure", "Progressive Cavity Pump"],
      correctIndex: 3,
      explanation: 'PCP stands for Progressive Cavity Pump, an artificial lift pump commonly used for viscous fluids and sand production.'
  },
  {
      question: 'What does PCV stand for?',
      options: ["Pressure Control Valve", "Production Check Valve", "Pressure Circulation Vessel", "Primary Control Volume"],
      correctIndex: 0,
      explanation: 'PCV stands for Pressure Control Valve, a valve that regulates system pressure.'
  },
  {
      question: 'What does Pe represent?',
      options: ["Production Efficiency", "External Boundary Pressure", "Effective Permeability", "Entry Pressure"],
      correctIndex: 1,
      explanation: 'Pe represents External Boundary Pressure in the supplied reservoir engineering terminology.'
  },
  {
      question: 'What does Perf stand for?',
      options: ["Performance Factor", "Pressure Formation", "Perforation", "Permeability Factor"],
      correctIndex: 2,
      explanation: 'Perf is short for Perforation, an opening made through casing and cement to establish communication with the formation.'
  },
  {
      question: 'What does PI stand for?',
      options: ["Pressure Indicator", "Production Injection", "Permeability Index", "Productivity Index"],
      correctIndex: 3,
      explanation: 'PI stands for Productivity Index, a measure of well productivity based on production rate divided by pressure drawdown.'
  },
  {
      question: 'What does PII stand for?',
      options: ["Process Improvement Initiatives", "Pressure Injection Indicator", "Production Integrity Inspection", "Petroleum Industry Institute"],
      correctIndex: 0,
      explanation: 'PII stands for Process Improvement Initiatives, referring to activities designed to improve operational processes.'
  },
  {
      question: 'What does Pkr stand for?',
      options: ["Pressure Keeper", "Packer", "Production Key Rate", "Permeability Ratio"],
      correctIndex: 1,
      explanation: 'Pkr is an abbreviation for Packer, a downhole device used to isolate sections of the wellbore.'
  },
  {
      question: 'What does psi stand for?',
      options: ["Pressure System Indicator", "Pounds per Square Inch Gauge", "Pound per Square Inch", "Pressure Standard International"],
      correctIndex: 2,
      explanation: 'psi stands for Pound per Square Inch, a unit of pressure.'
  },
  {
      question: 'What does PSIA stand for?',
      options: ["Pressure Standard Internal Area", "Pounds per Square Inch Applied", "Pressure System Inch Absolute", "Pounds per Square Inch Absolute"],
      correctIndex: 3,
      explanation: 'PSIA stands for Pounds per Square Inch Absolute, pressure measured relative to a perfect vacuum.'
  },
  {
      question: 'What does PSIG stand for?',
      options: ["Pounds per Square Inch Gauge", "Pounds per Square Inch Gravity", "Pressure System Indicator Gauge", "Pounds per Square Inch General"],
      correctIndex: 0,
      explanation: 'PSIG stands for Pounds per Square Inch Gauge, pressure measured relative to atmospheric pressure.'
  },
  {
      question: 'What does PSL stand for?',
      options: ["Pressure Safety Limit", "Product Service Line", "Production System Level", "Pressure Setting Location"],
      correctIndex: 1,
      explanation: 'PSL stands for Product Service Line, a classification used in oilfield service and equipment product lines.'
  },
  {
      question: 'What does PSV stand for?',
      options: ["Pressure Setting Valve", "Production Safety Vessel", "Pressure Safety Valve", "Primary Shutoff Valve"],
      correctIndex: 2,
      explanation: 'PSV stands for Pressure Safety Valve, a protective device designed to relieve excess pressure.'
  },
  {
      question: 'What does POOH stand for?',
      options: ["Pressure Out of Hole", "Production Operation on Hold", "Pulling Oil Out of Hole", "Pull Out of Hole"],
      correctIndex: 3,
      explanation: 'POOH means Pull Out of Hole, the operation of removing the drill string or tubular equipment from the well.'
  },
  {
      question: 'What does PPE stand for?',
      options: ["Personal Protective Equipment", "Pressure Protection Equipment", "Petroleum Production Engineering", "Process Prevention Equipment"],
      correctIndex: 0,
      explanation: 'PPE stands for Personal Protective Equipment, such as helmets, gloves, safety glasses, and protective clothing.'
  },
  {
      question: 'What does PPM stand for?',
      options: ["Pressure Per Meter", "Parts Per Million", "Production Per Month", "Pounds Per Minute"],
      correctIndex: 1,
      explanation: 'PPM stands for Parts Per Million, a unit expressing the concentration of a substance.'
  },
  {
      question: 'What does PRV stand for?',
      options: ["Pressure Regulation Vessel", "Production Relief Valve", "Pressure Relief Valve", "Primary Return Valve"],
      correctIndex: 2,
      explanation: 'PRV stands for Pressure Relief Valve, a device that releases excess pressure to protect equipment.'
  },
  {
      question: 'What does Pr represent?',
      options: ["Production Rate", "Pressure Ratio", "Relative Permeability", "Reservoir Pressure"],
      correctIndex: 3,
      explanation: 'Pr represents Reservoir Pressure, the pressure of fluids within the reservoir.'
  },
  {
      question: 'What does PVT stand for?',
      options: ["Pressure Volume Temperature", "Production Valve Testing", "Pressure Velocity Time", "Petroleum Volume Transfer"],
      correctIndex: 0,
      explanation: 'PVT stands for Pressure Volume Temperature, describing the behavior and properties of reservoir fluids under different conditions.'
  },
  {
      question: 'What does Pwf stand for?',
      options: ["Pressure Well Formation", "Flowing Bottom Hole Pressure", "Production Water Factor", "Pressure While Flowing"],
      correctIndex: 1,
      explanation: 'Pwf represents Flowing Bottom Hole Pressure, the pressure at the bottom of a producing well.'
  },
  {
      question: 'What does Pwh represent?',
      options: ["Pressure While Holding", "Production Well Height", "Wellhead Pressure", "Pressure Water Head"],
      correctIndex: 2,
      explanation: 'Pwh represents Wellhead Pressure, the pressure measured at the wellhead. WHP is another common abbreviation.'
  },
  {
      question: 'Which abbreviation represents Gas Flow Rate?',
      options: ["Qo", "Qw", "Qf", "Qg"],
      correctIndex: 3,
      explanation: 'Qg represents Gas Flow Rate, while Qo represents oil flow rate and Qw represents water flow rate.'
  },
  {
      question: 'Which abbreviation represents Oil Flow Rate?',
      options: ["Qo", "Qg", "Qw", "Qp"],
      correctIndex: 0,
      explanation: 'Qo represents Oil Flow Rate, commonly expressed in barrels per day.'
  },
  {
      question: 'Which abbreviation represents Water Flow Rate?',
      options: ["Qg", "Qw", "Qo", "Qf"],
      correctIndex: 1,
      explanation: 'Qw represents Water Flow Rate, commonly expressed in barrels per day.'
  },
  {
      question: 'What does RC stand for?',
      options: ["Recovery Capacity", "Reservoir Condition Pressure", "Reservoir Condition", "Relative Concentration"],
      correctIndex: 2,
      explanation: 'RC stands for Reservoir Condition, referring to the pressure and temperature conditions of the reservoir.'
  },
  {
      question: 'What does RF stand for?',
      options: ["Reservoir Flow", "Relative Formation", "Recovery Formation", "Recovery Factor"],
      correctIndex: 3,
      explanation: 'RF stands for Recovery Factor, the fraction of original hydrocarbons in place that can be recovered.'
  },
  {
      question: 'What does RFT stand for?',
      options: ["Repeat Formation Tester", "Reservoir Flow Temperature", "Rotary Formation Test", "Relative Flow Testing"],
      correctIndex: 0,
      explanation: 'RFT stands for Repeat Formation Tester, a wireline tool used to measure formation pressure and obtain fluid samples.'
  },
  {
      question: 'What does RKB stand for?',
      options: ["Reservoir Kelly Base", "Rotary Kelly Bushing Elevation", "Rotary Key Bore", "Reference Kickoff Base"],
      correctIndex: 1,
      explanation: 'RKB stands for Rotary Kelly Bushing Elevation, a drilling reference elevation used in well measurements.'
  },
  {
      question: 'What does RIH stand for?',
      options: ["Reservoir Inspection Hole", "Rotary Injection Head", "Run In Hole", "Return Into Hydraulic"],
      correctIndex: 2,
      explanation: 'RIH means Run In Hole, the operation of lowering equipment into the well.'
  },
  {
      question: 'What does RT stand for in drilling?',
      options: ["Reservoir Temperature", "Return Time", "Rotating Tubing", "Rotary Table"],
      correctIndex: 3,
      explanation: 'RT stands for Rotary Table, equipment used to rotate the drill string on a drilling rig.'
  },
  {
      question: 'What does RTTS stand for?',
      options: ["Retrieve Test Treat Squeeze Packer", "Rotary Tubing Testing System", "Reservoir Temperature Testing Service", "Retrievable Tubing Safety System"],
      correctIndex: 0,
      explanation: 'RTTS stands for Retrieve Test Treat Squeeze Packer, a retrievable packer used for testing, treating, and squeeze operations.'
  },
  {
      question: 'What does SBHT stand for?',
      options: ["Static Borehole Hydraulic Temperature", "Static Bottom Hole Temperature", "Surface Bottom Hole Test", "Shut-in Borehole Temperature"],
      correctIndex: 1,
      explanation: 'SBHT stands for Static Bottom Hole Temperature, the bottom-hole temperature under static or shut-in conditions.'
  },
  {
      question: 'What does SBHP stand for?',
      options: ["Surface Bottom Hole Pressure", "Static Borehole Hydraulic Pressure", "Static Bottom Hole Pressure", "Shut-in Back Pressure"],
      correctIndex: 2,
      explanation: 'SBHP stands for Static Bottom Hole Pressure, the bottom-hole pressure under static or shut-in conditions.'
  },
  {
      question: 'What does SC stand for in production calculations?',
      options: ["Safety Condition", "Surface Casing", "Standard Capacity", "Separator Condition"],
      correctIndex: 3,
      explanation: 'SC stands for Separator Condition, referring to the pressure and temperature conditions inside the separator.'
  },
  {
      question: 'What does SCABA stand for?',
      options: ["Self-Contained Breathing Apparatus", "Safety Control Air Breathing Assembly", "Surface Controlled Air Breathing Apparatus", "Standard Compressed Air Breathing Arrangement"],
      correctIndex: 0,
      explanation: 'SCABA stands for Self-Contained Breathing Apparatus, respiratory protection equipment used in hazardous atmospheres.'
  },
  {
      question: 'What does SCF stand for?',
      options: ["Standard Cubic Flow", "Standard Cubic Feet", "Surface Condition Factor", "Standard Compression Factor"],
      correctIndex: 1,
      explanation: 'SCF stands for Standard Cubic Feet, a unit of gas volume measured at defined standard conditions.'
  },
  {
      question: 'What does SCSSV stand for?',
      options: ["Surface Controlled Safety System Valve", "Subsea Controlled Safety Shut Valve", "Surface Controlled Subsurface Safety Valve", "Standard Casing Safety Shutoff Valve"],
      correctIndex: 2,
      explanation: 'SCSSV stands for Surface Controlled Subsurface Safety Valve, a downhole safety valve operated from the surface.'
  },
  {
      question: 'What does Sg represent?',
      options: ["Gas Flow Rate", "Gas Gravity", "Gas Formation Factor", "Gas Saturation"],
      correctIndex: 3,
      explanation: 'Sg represents Gas Saturation, the fraction of pore space occupied by gas.'
  },
  {
      question: 'What does SG stand for?',
      options: ["Specific Gravity", "Standard Gas", "Surface Gradient", "Separator Gauge"],
      correctIndex: 0,
      explanation: 'SG stands for Specific Gravity, the ratio of a substance density to a reference density.'
  },
  {
      question: 'What does Sep. P stand for?',
      options: ["Separation Performance", "Separator Pressure", "Separator Production", "Separation Point"],
      correctIndex: 1,
      explanation: 'Sep. P stands for Separator Pressure, the operating pressure inside the separator.'
  },
  {
      question: 'What does Sep. T stand for?',
      options: ["Separator Testing", "Separation Time", "Separator Temperature", "Separator Thickness"],
      correctIndex: 2,
      explanation: 'Sep. T stands for Separator Temperature, the operating temperature inside the separator.'
  },
  {
      question: 'What does SFL stand for?',
      options: ["Surface Flow Line", "Static Formation Level", "Shut-in Fluid Loss", "Static Fluid Level"],
      correctIndex: 3,
      explanation: 'SFL stands for Static Fluid Level, the fluid level in a well under static conditions.'
  },
  {
      question: 'What does SIBHP stand for?',
      options: ["Shut-In Bottom Hole Pressure", "Static Inlet Back Pressure", "Surface Injection Bottom Hole Pressure", "Shut-in Borehole Hydraulic Pressure"],
      correctIndex: 0,
      explanation: 'SIBHP stands for Shut-In Bottom Hole Pressure, measured at the bottom of a well when it is shut in.'
  },
  {
      question: 'What does SITHP stand for?',
      options: ["Surface Injection Tubing Head Pressure", "Shut-In Tubing Head Pressure", "Static Inlet Tubing Hydraulic Pressure", "Shut-In Test Hydraulic Pressure"],
      correctIndex: 1,
      explanation: 'SITHP stands for Shut-In Tubing Head Pressure, the pressure measured at the tubing head when the well is shut in.'
  },
  {
      question: 'What does SICP stand for?',
      options: ["Surface Injection Control Pressure", "Static Internal Casing Pressure", "Shut-In Casing Pressure", "Safety Inlet Control Pressure"],
      correctIndex: 2,
      explanation: 'SICP stands for Shut-In Casing Pressure, the casing pressure measured while the well is shut in.'
  },
  {
      question: 'What does So represent?',
      options: ["Oil Flow Rate", "Oil Gravity", "Oil Formation Factor", "Oil Saturation"],
      correctIndex: 3,
      explanation: 'So represents Oil Saturation, the fraction of pore space occupied by oil.'
  },
  {
      question: 'What does Sor represent?',
      options: ["Residual Oil Saturation", "Relative Oil Saturation", "Reservoir Oil Rate", "Remaining Oil Recovery"],
      correctIndex: 0,
      explanation: 'Sor stands for Residual Oil Saturation, the oil saturation remaining after displacement by another fluid.'
  },
  {
      question: 'What does SOP stand for?',
      options: ["Safety Operating Pressure", "Standard Operating Procedures", "Surface Operation Plan", "System Operating Performance"],
      correctIndex: 1,
      explanation: 'SOP stands for Standard Operating Procedures, documented instructions for performing operations safely and consistently.'
  },
  {
      question: 'What does SRP stand for?',
      options: ["Surface Recovery Pump", "Subsurface Rotary Pump", "Sucker Rod Pump", "Standard Reservoir Pressure"],
      correctIndex: 2,
      explanation: 'SRP stands for Sucker Rod Pump, an artificial lift system that uses reciprocating sucker rods to operate a downhole pump.'
  },
  {
      question: 'What does SS stand for in offshore terminology?',
      options: ["Safety System", "Surface Separator", "Shut-in Status", "Sub Sea"],
      correctIndex: 3,
      explanation: 'SS stands for Sub Sea, referring to equipment or operations located below the sea surface.'
  },
  {
      question: 'What does SSSV stand for?',
      options: ["Sub-Surface Safety Valve", "Surface Safety Shutoff Valve", "Subsea System Safety Valve", "Standard Surface Shut Valve"],
      correctIndex: 0,
      explanation: 'SSSV stands for Sub-Surface Safety Valve, a safety valve installed below the surface in a well.'
  },
  {
      question: 'What does SSV stand for?',
      options: ["Subsurface Safety Valve", "Surface Safety Valve", "Shut-in Service Valve", "Standard Separator Valve"],
      correctIndex: 1,
      explanation: 'SSV stands for Surface Safety Valve, a surface-installed valve that automatically shuts down flow during unsafe conditions.'
  },
  {
      question: 'What does STB stand for?',
      options: ["Separator Test Barrel", "Standard Tubing Bore", "Stock Tank Barrel", "Surface Test Block"],
      correctIndex: 2,
      explanation: 'STB stands for Stock Tank Barrel, the oil volume measured at stock tank conditions.'
  },
  {
      question: 'What does STC stand for?',
      options: ["Surface Testing Condition", "Standard Temperature Calculation", "Separator Test Condition", "Stock Tank Condition"],
      correctIndex: 3,
      explanation: 'STC stands for Stock Tank Condition, the reference conditions used for measuring stock tank oil.'
  },
  {
      question: 'What does STOIIP stand for?',
      options: ["Stock Tank Oil Initially In Place", "Standard Tank Oil Injection Pressure", "Surface Tank Oil In Production", "Stock Tank Original Injection In Place"],
      correctIndex: 0,
      explanation: 'STOIIP stands for Stock Tank Oil Initially In Place, the original oil volume in the reservoir expressed at stock tank conditions.'
  },
  {
      question: 'What does STT stand for?',
      options: ["Standard Test Tubing", "Surface Test Tree", "Subsurface Tubing Tool", "Safety Testing Terminal"],
      correctIndex: 1,
      explanation: 'STT stands for Surface Test Tree, equipment installed on the wellhead to control and monitor well flow during testing.'
  },
  {
      question: 'What does Sw represent?',
      options: ["Water Flow Rate", "Water Cut", "Water Saturation", "Water Gravity"],
      correctIndex: 2,
      explanation: 'Sw represents Water Saturation, the fraction of pore space occupied by water.'
  },
  {
      question: 'What does Swi represent?',
      options: ["Water Injection Rate", "Water Initial Flow", "Water Saturation Index", "Initial Water Saturation"],
      correctIndex: 3,
      explanation: 'Swi stands for Initial Water Saturation, the water saturation present before hydrocarbon production.'
  },
  {
      question: 'What does SWT stand for?',
      options: ["Surface Well Testing", "Subsurface Water Treatment", "Standard Well Temperature", "Surface Water Transfer"],
      correctIndex: 0,
      explanation: 'SWT stands for Surface Well Testing, the process of measuring and evaluating produced fluids at the surface.'
  },
  {
      question: 'What does S&W stand for?',
      options: ["Safety and Wellhead", "Sediment and Water", "Separator and Water", "Surface and Waste"],
      correctIndex: 1,
      explanation: 'S&W stands for Sediment and Water, referring to the non-hydrocarbon material present in produced oil.'
  },
  {
      question: 'What does Tbg stand for?',
      options: ["Testing Background", "Tubing Gas", "Tubing", "Temperature Below Ground"],
      correctIndex: 2,
      explanation: 'Tbg is an abbreviation for Tubing, the pipe through which produced fluids are transported to the surface.'
  },
  {
      question: 'What does TCP stand for?',
      options: ["Tubing Control Pressure", "Test Casing Pressure", "Tubular Connection Point", "Tubing Conveyed Perforation"],
      correctIndex: 3,
      explanation: 'TCP stands for Tubing Conveyed Perforation, a perforating method in which the gun is conveyed into the well using tubing.'
  },
  {
      question: 'What does TD stand for?',
      options: ["Total Depth", "Tubing Diameter", "Temperature Difference", "Test Depth"],
      correctIndex: 0,
      explanation: 'TD stands for Total Depth, the final measured depth reached by the well.'
  },
  {
      question: 'What does THD stand for according to the supplied dictionary?',
      options: ["Tubing Head Pressure", "Tubing Head Density", "Total Hydraulic Depth", "Tubular Hydraulic Diameter"],
      correctIndex: 1,
      explanation: 'THD is listed in the supplied dictionary as Tubing Head Density.'
  },
  {
      question: 'What does THP stand for?',
      options: ["Total Hydraulic Pressure", "Tubing Hydraulic Performance", "Tubing Head Pressure", "Test Header Pressure"],
      correctIndex: 2,
      explanation: 'THP stands for Tubing Head Pressure, the pressure measured at the tubing head.'
  },
  {
      question: 'What does THSP stand for?',
      options: ["Tubing Hydraulic Safety Pressure", "Total Head Shut-in Pressure", "Tubing High Surface Pressure", "Tubing Head Shut-in Pressure"],
      correctIndex: 3,
      explanation: 'THSP stands for Tubing Head Shut-in Pressure, measured at the tubing head when the well is shut in.'
  },
  {
      question: 'What does TMU stand for?',
      options: ["Trailer Mounted Unit", "Tubing Measurement Unit", "Testing Manifold Utility", "Transport Mechanical Unit"],
      correctIndex: 0,
      explanation: 'TMU stands for Trailer Mounted Unit, equipment installed on a trailer for transport and field operations.'
  },
  {
      question: 'What does TPR stand for?',
      options: ["Tubing Pressure Reading", "Tubing Performance Relationship", "Total Production Rate", "Tubing Pressure Resistance"],
      correctIndex: 1,
      explanation: 'TPR stands for Tubing Performance Relationship, describing the pressure and flow relationship through the tubing.'
  },
  {
      question: 'What does TVD stand for?',
      options: ["Total Vertical Distance", "Tubing Vertical Depth", "True Vertical Depth", "Tested Vertical Distance"],
      correctIndex: 2,
      explanation: 'TVD stands for True Vertical Depth, the vertical distance from a reference point to a point in the well.'
  },
  {
      question: 'What does UBD stand for?',
      options: ["Upper Balanced Drilling", "Underbalanced Density", "Unified Borehole Design", "Underbalanced Drilling"],
      correctIndex: 3,
      explanation: 'UBD stands for Underbalanced Drilling, a drilling technique in which wellbore pressure is maintained below formation pressure.'
  },
  {
      question: 'What does UMV stand for?',
      options: ["Upper Master Valve", "Underwater Main Valve", "Upper Manifold Vent", "Universal Master Vessel"],
      correctIndex: 0,
      explanation: 'UMV stands for Upper Master Valve, the upper master valve in a wellhead valve arrangement.'
  },
  {
      question: 'What does VLP stand for?',
      options: ["Vertical Line Pressure", "Vertical Lift Performance", "Valve Lift Pressure", "Variable Liquid Production"],
      correctIndex: 1,
      explanation: 'VLP stands for Vertical Lift Performance, describing the pressure requirements for lifting fluids from the bottom of a well to the surface.'
  },
  {
      question: 'What does WC stand for?',
      options: ["Well Condition", "Water Contact", "Water Cut", "Water Capacity"],
      correctIndex: 2,
      explanation: 'WC stands for Water Cut, the percentage of water in the total produced liquid volume.'
  },
  {
      question: 'What does WGR stand for?',
      options: ["Well Gas Recovery", "Water Gas Recovery", "Water Gravity Ratio", "Water Gas Ratio"],
      correctIndex: 3,
      explanation: 'WGR stands for Water Gas Ratio, the volume of produced water relative to produced gas.'
  },
  {
      question: 'What does WHCT stand for?',
      options: ["Wellhead Choke Temperature", "Wellhead Control Testing", "Wellhead Casing Temperature", "Wing Head Control Temperature"],
      correctIndex: 0,
      explanation: 'WHCT stands for Wellhead Choke Temperature, the temperature measured at or around the wellhead choke.'
  },
  {
      question: 'What does WHCP stand for?',
      options: ["Wellhead Casing Pressure", "Wellhead Choke Pressure", "Wellhead Control Panel", "Wing Head Control Pressure"],
      correctIndex: 1,
      explanation: 'WHCP stands for Wellhead Choke Pressure, the pressure measured at the choke on the wellhead.'
  },
  {
      question: 'What does WHFT stand for?',
      options: ["Wellhead Flow Test", "Wellhead Formation Temperature", "Wellhead Flowing Temperature", "Wellhead Fluid Transfer"],
      correctIndex: 2,
      explanation: 'WHFT stands for Wellhead Flowing Temperature, the temperature measured at the wellhead while the well is flowing.'
  },
  {
      question: 'What does WHFP stand for?',
      options: ["Wellhead Formation Pressure", "Wellhead Flow Pressure", "Wellhead Fluid Performance", "Wellhead Flowing Pressure"],
      correctIndex: 3,
      explanation: 'WHFP stands for Wellhead Flowing Pressure, the pressure measured at the wellhead while the well is flowing.'
  },
  {
      question: 'What does WHT stand for?',
      options: ["Wellhead Temperature", "Wellhead Testing", "Water Holding Temperature", "Well Hydraulic Test"],
      correctIndex: 0,
      explanation: 'WHT stands for Wellhead Temperature, the temperature measured at the wellhead.'
  },
  {
      question: 'What does WHP stand for?',
      options: ["Well Hydraulic Performance", "Wellhead Pressure", "Well Holding Pressure", "Water Head Pressure"],
      correctIndex: 1,
      explanation: 'WHP stands for Wellhead Pressure, the pressure measured at the wellhead.'
  },
  {
      question: 'What does WLR stand for?',
      options: ["Well Liquid Recovery", "Water Lift Rate", "Water Liquid Ratio", "Well Level Reading"],
      correctIndex: 2,
      explanation: 'WLR stands for Water Liquid Ratio, the ratio of produced water volume to total produced liquid volume.'
  },
  {
      question: 'What does WHSIP stand for?',
      options: ["Wellhead High Surface Injection Pressure", "Wellhead Hydraulic Shut-in Pressure", "Wellhead Safety Inspection Point", "Wellhead Shut-In Pressure"],
      correctIndex: 3,
      explanation: 'WHSIP stands for Wellhead Shut-In Pressure, the pressure measured at the wellhead when the well is shut in.'
  },
  {
      question: 'What does WHSIT stand for?',
      options: ["Wellhead Shut-In Temperature", "Wellhead Surface Inspection Test", "Wellhead Safety Isolation Time", "Wellhead Static Injection Temperature"],
      correctIndex: 0,
      explanation: 'WHSIT stands for Wellhead Shut-In Temperature, the temperature measured at the wellhead under shut-in conditions.'
  },
  {
      question: 'What does WSV stand for?',
      options: ["Well Surface Vessel", "Wing Safety Valve", "Water Shutoff Valve", "Well Service Vent"],
      correctIndex: 1,
      explanation: 'WSV stands for Wing Safety Valve, a safety valve installed on the wing outlet of the wellhead.'
  },
  {
      question: 'What does WOC stand for?',
      options: ["Well Operating Condition", "Water Oil Content", "Water Oil Contact", "Well Output Capacity"],
      correctIndex: 2,
      explanation: 'WOC stands for Water Oil Contact, the interface between water and oil zones in a reservoir.'
  },
  {
      question: 'What does WOR stand for?',
      options: ["Well Operating Rate", "Water Output Recovery", "Water Oil Recovery", "Water Oil Ratio"],
      correctIndex: 3,
      explanation: 'WOR stands for Water Oil Ratio, the volume of produced water divided by the volume of produced oil.'
  },
  {
      question: 'What does WP stand for?',
      options: ["Working Pressure", "Well Performance", "Water Production", "Working Point"],
      correctIndex: 0,
      explanation: 'WP stands for Working Pressure, the pressure at which equipment is intended to operate.'
  },
  {
      question: 'What does XLOT stand for?',
      options: ["Extended Logging Operation Test", "Extended Leak Off Test", "External Line Operating Temperature", "Extra Low Operating Test"],
      correctIndex: 1,
      explanation: 'XLOT stands for Extended Leak Off Test, a formation pressure test used to obtain additional information about formation stress and fracture behavior.'
  },
  {
      question: 'What does XO stand for?',
      options: ["External Outlet", "Extra Opening", "CrossOver", "Expansion Outlet"],
      correctIndex: 2,
      explanation: 'XO stands for CrossOver, a connector used to join components with different connection types or sizes.'
  },
  {
      question: 'What does the Greek symbol φ represent in reservoir engineering?',
      options: ["Permeability", "Pressure", "Fluid Density", "Porosity"],
      correctIndex: 3,
      explanation: 'φ (phi) represents Porosity, the fraction of the total rock volume occupied by pore spaces.'
  },
  {
      question: 'What does the symbol ∅ represent in the supplied well testing dictionary?',
      options: ["Orifice Plate Size", "Porosity", "Pipe Pressure", "Flow Rate"],
      correctIndex: 0,
      explanation: '∅ represents Orifice Plate Size, referring to the diameter of the orifice opening.'
  },
  {
      question: 'Which pressure measurement is referenced to atmospheric pressure?',
      options: ["PSIA", "PSIG", "BHP", "SBHP"],
      correctIndex: 1,
      explanation: 'PSIG is gauge pressure, measured relative to atmospheric pressure. PSIA is absolute pressure, measured relative to a perfect vacuum.'
  },
  {
      question: 'Which pressure measurement is referenced to a perfect vacuum?',
      options: ["PSIG", "THP", "PSIA", "FLP"],
      correctIndex: 2,
      explanation: 'PSIA is absolute pressure, measured from a perfect vacuum. It includes atmospheric pressure.'
  },
  {
      question: 'Which abbreviation describes the percentage of water in the total produced liquid?',
      options: ["WOR", "WGR", "GLR", "WC"],
      correctIndex: 3,
      explanation: 'WC (Water Cut) is the percentage of water in the total produced liquid volume.'
  },
  {
      question: 'Which ratio compares produced gas volume with produced oil volume?',
      options: ["GOR", "WOR", "GLR", "CGR"],
      correctIndex: 0,
      explanation: 'GOR (Gas Oil Ratio) is the ratio of produced gas volume to produced oil volume.'
  },
  {
      question: 'Which ratio compares produced water volume with produced oil volume?',
      options: ["GLR", "WOR", "GOR", "CGR"],
      correctIndex: 1,
      explanation: 'WOR (Water Oil Ratio) is the volume of produced water divided by the volume of produced oil.'
  },
  {
      question: 'Which equipment measures oil, gas, and water flow without requiring conventional phase separation?',
      options: ["LFM", "DWT", "MPFM", "PCV"],
      correctIndex: 2,
      explanation: 'An MPFM (Multi-Phase Flow Meter) measures the flow rates of multiple phases in a flowing stream.'
  },
  {
      question: 'Which equipment is used to control liquid level in a separator?',
      options: ["PCV", "PSV", "FWV", "LCV"],
      correctIndex: 3,
      explanation: 'LCV (Level Control Valve) regulates liquid discharge to maintain the required separator liquid level.'
  },
  {
      question: 'Which device protects a pressurized system by releasing excess pressure?',
      options: ["PSV", "PCV", "LCV", "BPV"],
      correctIndex: 0,
      explanation: 'PSV (Pressure Safety Valve) protects equipment against overpressure by opening at a predetermined pressure.'
  },
  {
      question: 'Which device is used to calibrate pressure instruments using known weights?',
      options: ["MPFM", "Dead Weight Tester", "DWT Flow Meter", "RTTS Packer"],
      correctIndex: 1,
      explanation: 'A Dead Weight Tester uses calibrated masses and a known piston area to generate accurate reference pressure.'
  },
  {
      question: 'Which parameter describes the ability of reservoir rock to allow fluids to pass through it?',
      options: ["Porosity", "Saturation", "Permeability", "Specific Gravity"],
      correctIndex: 2,
      explanation: 'Permeability describes the ability of porous rock to transmit fluids, while porosity describes the amount of pore space.'
  },
  {
      question: 'Which parameter represents the fraction of rock volume occupied by pore spaces?',
      options: ["Relative Permeability", "Recovery Factor", "Oil Saturation", "Porosity"],
      correctIndex: 3,
      explanation: 'Porosity is the ratio of pore volume to total bulk rock volume.'
  },
  {
      question: 'What is the difference between FBHP and SBHP?',
      options: ["FBHP is measured during flow, while SBHP is measured under static or shut-in conditions.", "FBHP is casing pressure, while SBHP is separator pressure.", "FBHP is surface pressure, while SBHP is atmospheric pressure.", "There is no difference."],
      correctIndex: 0,
      explanation: 'FBHP is Flowing Bottom Hole Pressure during production. SBHP is Static Bottom Hole Pressure under static or shut-in conditions.'
  },
  {
      question: 'What is the difference between SITHP and FTHP?',
      options: ["Both represent separator pressure.", "SITHP is tubing head pressure when shut in, while FTHP is tubing head pressure while flowing.", "SITHP is casing pressure, while FTHP is bottom-hole pressure.", "Both represent flowing bottom-hole pressure."],
      correctIndex: 1,
      explanation: 'SITHP is measured at the tubing head under shut-in conditions, whereas FTHP is measured at the tubing head during flowing conditions.'
  },
  {
      question: 'Which two parameters are used to describe the pressure and temperature inside a separator?',
      options: ["WHP and WHT", "FBHP and FBHT", "Sep. P and Sep. T", "SITHP and SICP"],
      correctIndex: 2,
      explanation: 'Sep. P represents Separator Pressure and Sep. T represents Separator Temperature.'
  },
  {
      question: 'What is the main difference between ID and OD?',
      options: ["ID is pipe length, OD is pipe weight.", "ID is pipe thickness, OD is pipe pressure.", "ID is outside diameter, OD is inside diameter.", "ID is inner diameter, OD is outer diameter."],
      correctIndex: 3,
      explanation: 'ID measures the internal diameter of a pipe, while OD measures its external diameter.'
  },
  {
      question: 'Which abbreviation represents the original oil volume in a reservoir expressed at stock tank conditions?',
      options: ["STOIIP", "GIIP", "OGIP", "RF"],
      correctIndex: 0,
      explanation: 'STOIIP means Stock Tank Oil Initially In Place, representing original oil in place at stock tank conditions.'
  },
  {
      question: 'Which abbreviation represents the original gas volume in a reservoir before production?',
      options: ["GOR", "OGIP", "GLR", "GVF"],
      correctIndex: 1,
      explanation: 'OGIP means Original Gas In Place, the original quantity of gas contained in the reservoir.'
  },
  {
      question: 'Which abbreviation represents the operation of lowering equipment into a well?',
      options: ["POOH", "DST", "RIH", "LWD"],
      correctIndex: 2,
      explanation: 'RIH means Run In Hole, while POOH means Pull Out of Hole.'
  },
  {
      question: 'Which abbreviation represents the operation of removing equipment from a well?',
      options: ["RIH", "TCP", "DST", "POOH"],
      correctIndex: 3,
      explanation: 'POOH means Pull Out of Hole, the operation of retrieving equipment from the well.'
  },
  {
      question: 'Which device is installed downhole to shut in the well during an emergency?',
      options: ["DHSV", "PCV", "LCV", "MPFM"],
      correctIndex: 0,
      explanation: 'DHSV stands for Downhole Safety Valve, which provides a means of shutting in the well below the surface.'
  },
  {
      question: 'Which valve is installed on the surface wellhead to provide emergency flow isolation?',
      options: ["KWV", "SSV", "BPV", "LCV"],
      correctIndex: 1,
      explanation: 'SSV stands for Surface Safety Valve, a surface safety device that can shut down production.'
  },
  {
      question: 'Which abbreviation represents a safety valve controlled from the surface but installed downhole?',
      options: ["SSV", "WSV", "SCSSV", "FWV"],
      correctIndex: 2,
      explanation: 'SCSSV stands for Surface Controlled Subsurface Safety Valve. It is installed downhole and operated from the surface.'
  },
  {
      question: 'Which abbreviation represents the pressure measured at the casing head?',
      options: ["THP", "WHP", "FTHP", "CHP"],
      correctIndex: 3,
      explanation: 'CHP stands for Casing Head Pressure, measured at the casing head.'
  },
  {
      question: 'Which abbreviation represents pressure measured at the wellhead while the well is shut in?',
      options: ["WHSIP", "WHFP", "FWHP", "FLP"],
      correctIndex: 0,
      explanation: 'WHSIP represents Wellhead Shut-In Pressure, measured when the well is closed in.'
  },
  {
      question: 'Which abbreviation represents temperature measured at the wellhead while the well is shut in?',
      options: ["WHFT", "WHSIT", "WHCT", "FTHT"],
      correctIndex: 1,
      explanation: 'WHSIT represents Wellhead Shut-In Temperature, while WHFT represents Wellhead Flowing Temperature.'
  },
  {
      question: 'Which abbreviation represents the temperature at the tubing head during flowing conditions?',
      options: ["WHT", "WHCT", "FTHT", "FBHT"],
      correctIndex: 2,
      explanation: 'FTHT stands for Flowing Tubing Head Temperature.'
  },
  {
      question: 'Which abbreviation represents the temperature at the bottom of a well during flowing conditions?',
      options: ["SBHT", "WHT", "FTHT", "FBHT"],
      correctIndex: 3,
      explanation: 'FBHT stands for Flowing Bottom Hole Temperature, while SBHT represents Static Bottom Hole Temperature.'
  },
  {
      question: 'Which abbreviation represents the pressure at the bottom of a well under shut-in conditions?',
      options: ["SBHP", "FBHP", "FCP", "SICP"],
      correctIndex: 0,
      explanation: 'SBHP stands for Static Bottom Hole Pressure. FBHP is measured under flowing conditions.'
  },
  {
      question: 'Which abbreviation represents the pressure at the bottom of a well during flowing conditions?',
      options: ["SBHP", "FBHP", "SIBHP", "SITHP"],
      correctIndex: 1,
      explanation: 'FBHP stands for Flowing Bottom Hole Pressure.'
  },
  {
      question: 'Which test determines the pressure at which a formation starts accepting fluid?',
      options: ["DST", "FIT", "LOT", "MPI"],
      correctIndex: 2,
      explanation: 'LOT (Leak Off Test) determines the pressure at which fluid begins to leak into the formation.'
  },
  {
      question: 'Which test is used to assess formation integrity against a specified pressure?',
      options: ["XLOT", "DWT", "RFT", "FIT"],
      correctIndex: 3,
      explanation: 'FIT (Formation Integrity Test) checks whether the formation can withstand a specified pressure without failure.'
  },
  {
      question: 'Which test provides additional information about formation stress and fracture behavior?',
      options: ["XLOT", "FIT", "DWT", "DST"],
      correctIndex: 0,
      explanation: 'XLOT stands for Extended Leak Off Test and is used to obtain additional information about formation stress and fracture pressure.'
  },
  {
      question: 'Which abbreviation represents an instrument used to measure liquid flow?',
      options: ["DWT", "LFM", "PSV", "LCV"],
      correctIndex: 1,
      explanation: 'LFM stands for Liquid Flow Meter, an instrument used to measure liquid flow rate.'
  },
  {
      question: 'Which abbreviation represents the factor used to correct a meter reading?',
      options: ["CMSF", "CGR", "MF", "GVF"],
      correctIndex: 2,
      explanation: 'MF stands for Meter Factor, a correction factor applied to the indicated meter reading.'
  },
  {
      question: 'Which abbreviation represents the ratio of condensate volume to gas volume?',
      options: ["GOR", "WGR", "GLR", "CGR"],
      correctIndex: 3,
      explanation: 'CGR stands for Condensate to Gas Ratio, expressing condensate production relative to gas production.'
  },
  {
      question: 'Which parameter represents the fraction of pore space occupied by gas?',
      options: ["Sg", "So", "Sw", "Sor"],
      correctIndex: 0,
      explanation: 'Sg represents Gas Saturation. So represents Oil Saturation and Sw represents Water Saturation.'
  },
  {
      question: 'Which parameter represents the fraction of pore space occupied by water?',
      options: ["So", "Sw", "Sg", "Swi"],
      correctIndex: 1,
      explanation: 'Sw represents Water Saturation, while Swi represents Initial Water Saturation.'
  },
  {
      question: 'Which parameter represents the fraction of pore space occupied by oil?',
      options: ["Sg", "Sor", "So", "Sw"],
      correctIndex: 2,
      explanation: 'So represents Oil Saturation, the fraction of pore space occupied by oil.'
  },
  {
      question: 'Which parameter represents the oil remaining after displacement by another fluid?',
      options: ["Swi", "So", "Sg", "Sor"],
      correctIndex: 3,
      explanation: 'Sor represents Residual Oil Saturation, the oil that remains trapped in the pore spaces after displacement.'
  },
  {
      question: 'Which unit represents a gas flow rate of one million standard cubic feet per day?',
      options: ["MMSCFD", "MSCFD", "SCF", "MBPD"],
      correctIndex: 0,
      explanation: 'MMSCFD means Million Standard Cubic Feet per Day, a common unit for high gas production rates.'
  },
  {
      question: 'Which unit represents a gas flow rate of one thousand standard cubic feet per day?',
      options: ["MMSCFD", "MSCFD", "MBPD", "KBPD"],
      correctIndex: 1,
      explanation: 'MSCFD means Thousand Standard Cubic Feet per Day.'
  },
  {
      question: 'Which unit represents one thousand barrels per day?',
      options: ["MBPD", "BOPD", "KBPD", "BPD"],
      correctIndex: 2,
      explanation: 'KBPD represents Thousand Barrels Per Day.'
  },
  {
      question: 'Which unit represents one million barrels per day?',
      options: ["KBPD", "BPD", "BOPD", "MBPD"],
      correctIndex: 3,
      explanation: 'MBPD represents Million Barrels Per Day.'
  },
  {
      question: 'Which abbreviation represents a valve used to control the production flow through the wing outlet?',
      options: ["FWV", "LCV", "PCV", "PSV"],
      correctIndex: 0,
      explanation: 'FWV stands for Flowing Wing Valve, which controls the flowing production path at the wellhead.'
  },
  {
      question: 'Which abbreviation represents the upper master valve?',
      options: ["LMV", "UMV", "MWV", "KWV"],
      correctIndex: 1,
      explanation: 'UMV stands for Upper Master Valve, whereas LMV stands for Lower Master Valve.'
  },
  {
      question: 'Which abbreviation represents the lower master valve?',
      options: ["UMV", "MWV", "LMV", "WSV"],
      correctIndex: 2,
      explanation: 'LMV stands for Lower Master Valve, located below the upper master valve in the wellhead arrangement.'
  },
  {
      question: 'Which abbreviation represents the master wing valve?',
      options: ["FWV", "KWV", "WSV", "MWV"],
      correctIndex: 3,
      explanation: 'MWV stands for Master Wing Valve, a wellhead valve on the wing outlet.'
  },
  {
      question: 'Which abbreviation represents the kill wing valve?',
      options: ["KWV", "FWV", "MWV", "UMV"],
      correctIndex: 0,
      explanation: 'KWV stands for Kill Wing Valve, used for well intervention and kill operations.'
  },
  {
      question: 'Which abbreviation represents the wing safety valve?',
      options: ["SSSV", "WSV", "FWV", "DHSV"],
      correctIndex: 1,
      explanation: 'WSV stands for Wing Safety Valve, a safety valve installed on the wellhead wing outlet.'
  },
  {
      question: 'Which abbreviation represents the equipment used to prevent uncontrolled well flow during drilling?',
      options: ["PSV", "SSV", "BOP", "PCV"],
      correctIndex: 2,
      explanation: 'BOP stands for Blowout Preventer, a critical well-control device used to prevent uncontrolled flow.'
  },
  {
      question: 'Which abbreviation represents the pressure at the tubing head when the well is shut in?',
      options: ["FTHP", "THP", "FWHP", "SITHP"],
      correctIndex: 3,
      explanation: 'SITHP stands for Shut-In Tubing Head Pressure.'
  },
  {
      question: 'Which abbreviation represents the pressure at the casing head when the well is shut in?',
      options: ["SICP", "CHP", "FCP", "SITHP"],
      correctIndex: 0,
      explanation: 'SICP stands for Shut-In Casing Pressure.'
  },
  {
      question: 'Which abbreviation represents the wellhead pressure while flowing?',
      options: ["SITHP", "FWHP", "SBHP", "SICP"],
      correctIndex: 1,
      explanation: 'FWHP stands for Flowing Wellhead Pressure.'
  },
  {
      question: 'Which abbreviation represents the pressure in the flowline?',
      options: ["FCP", "CHP", "FLP", "FTHP"],
      correctIndex: 2,
      explanation: 'FLP stands for Flow Line Pressure, measured in the flowline carrying produced fluids.'
  },
  {
      question: 'Which abbreviation represents the pressure in the flowing casing?',
      options: ["SICP", "FTHP", "FWHP", "FCP"],
      correctIndex: 3,
      explanation: 'FCP stands for Flowing Casing Pressure, the casing pressure measured during flowing conditions.'
  },
  {
      question: 'Which abbreviation represents the pressure at the flowing tubing head?',
      options: ["FTHP", "SITHP", "SBHP", "CHP"],
      correctIndex: 0,
      explanation: 'FTHP stands for Flowing Tubing Head Pressure.'
  },
  {
      question: 'Which abbreviation represents the relationship between reservoir pressure and well production rate?',
      options: ["TPR", "IPR", "VLP", "GOR"],
      correctIndex: 1,
      explanation: 'IPR stands for Inflow Performance Relationship, which describes the inflow behavior from the reservoir into the well.'
  },
  {
      question: 'Which abbreviation represents the performance relationship of fluid flowing through the tubing?',
      options: ["IPR", "OLP", "TPR", "WOR"],
      correctIndex: 2,
      explanation: 'TPR stands for Tubing Performance Relationship, which describes pressure losses and flow behavior in the tubing.'
  },
  {
      question: 'Which abbreviation represents the performance of vertical fluid lifting?',
      options: ["IPR", "TPR", "OLP", "VLP"],
      correctIndex: 3,
      explanation: 'VLP stands for Vertical Lift Performance, describing the pressure required to lift fluids from the bottom of the well to the surface.'
  },
  {
      question: 'Which abbreviation represents the ratio of gas volume to total liquid volume?',
      options: ["GLR", "GOR", "WOR", "CGR"],
      correctIndex: 0,
      explanation: 'GLR stands for Gas Liquid Ratio, the volume of gas produced relative to the total liquid volume.'
  },
  {
      question: 'Which abbreviation represents the ratio of water volume to gas volume?',
      options: ["WOR", "WGR", "GOR", "GLR"],
      correctIndex: 1,
      explanation: 'WGR stands for Water Gas Ratio, comparing produced water volume with produced gas volume.'
  },
  {
      question: 'Which abbreviation represents the ratio of water volume to total liquid volume?',
      options: ["WOR", "WGR", "WLR", "WC"],
      correctIndex: 2,
      explanation: 'WLR stands for Water Liquid Ratio, comparing water production with total liquid production.'
  },
  {
      question: 'Which abbreviation represents the ratio of oil volume to total liquid volume?',
      options: ["GOR", "CGR", "WLR", "OLR"],
      correctIndex: 3,
      explanation: 'OLR stands for Oil Liquid Ratio, comparing oil production with total liquid production.'
  },
  {
      question: 'Which abbreviation represents the ratio of oil volume to gas volume?',
      options: ["OGR", "GOR", "GLR", "CGR"],
      correctIndex: 0,
      explanation: 'OGR stands for Oil Gas Ratio, comparing oil volume with gas volume. GOR is the inverse ratio.'
  },
  {
      question: 'Which abbreviation represents a test used to evaluate a formation through the drill string?',
      options: ["FIT", "DST", "LOT", "MPI"],
      correctIndex: 1,
      explanation: 'DST stands for Drill Stem Test, used to evaluate formation pressure, permeability, and fluid production potential.'
  },
  {
      question: 'Which abbreviation represents a tool used to measure formation pressure and obtain fluid samples through wireline?',
      options: ["DWT", "MDT", "RFT", "MPFM"],
      correctIndex: 2,
      explanation: 'RFT stands for Repeat Formation Tester, a wireline tool used to measure formation pressure and collect formation fluid samples.'
  },
  {
      question: 'Which abbreviation represents a modular formation testing tool?',
      options: ["RFT", "DST", "DWT", "MDT"],
      correctIndex: 3,
      explanation: 'MDT stands for Modular Formation Dynamics Tester, a modular wireline formation testing tool.'
  },
  {
      question: 'Which abbreviation represents the equipment used to test, treat, and squeeze a well through a retrievable packer?',
      options: ["RTTS", "TCP", "CTU", "BHA"],
      correctIndex: 0,
      explanation: 'RTTS stands for Retrieve Test Treat Squeeze Packer, used in well testing and treatment operations.'
  },
  {
      question: 'Which abbreviation represents a method of perforating using tubing to convey the guns?',
      options: ["RIH", "TCP", "DST", "LWD"],
      correctIndex: 1,
      explanation: 'TCP stands for Tubing Conveyed Perforation, where perforating guns are conveyed into the well on tubing.'
  },
  {
      question: 'Which abbreviation represents continuous tubing used for well intervention?',
      options: ["BHA", "TMU", "CTU", "STT"],
      correctIndex: 2,
      explanation: 'CTU stands for Coiled Tubing Unit, used to deploy coiled tubing into a well for intervention and other operations.'
  },
  {
      question: 'Which abbreviation represents the assembly located at the bottom of the drill string?',
      options: ["RT", "KB", "TD", "BHA"],
      correctIndex: 3,
      explanation: 'BHA stands for Bottom Hole Assembly, the collection of tools and components at the bottom of the drill string.'
  },
  {
      question: 'Which abbreviation represents logging measurements acquired while drilling?',
      options: ["LWD", "MWD", "RFT", "MDT"],
      correctIndex: 0,
      explanation: 'LWD stands for Logging While Drilling, while MWD stands for Measurement While Drilling.'
  },
  {
      question: 'Which abbreviation represents drilling measurements acquired during drilling operations?',
      options: ["LWD", "MWD", "MDT", "RFT"],
      correctIndex: 1,
      explanation: 'MWD stands for Measurement While Drilling, providing real-time drilling and directional measurements.'
  },
  {
      question: 'Which abbreviation represents the density of drilling mud?',
      options: ["ECD", "SG", "MW", "K"],
      correctIndex: 2,
      explanation: 'MW stands for Mud Weight, which is the density of drilling fluid.'
  },
  {
      question: 'Which parameter accounts for annular pressure losses when calculating equivalent circulating mud density?',
      options: ["MW", "SG", "BHT", "ECD"],
      correctIndex: 3,
      explanation: 'ECD stands for Equivalent Circulating Density, accounting for the effect of circulating pressure losses.'
  },
  {
      question: 'Which abbreviation represents the material added to drilling fluid to reduce losses into the formation?',
      options: ["LCM", "LOTO", "LOT", "NPT"],
      correctIndex: 0,
      explanation: 'LCM stands for Lost Circulation Material, used to reduce or stop drilling fluid losses.'
  },
  {
      question: 'Which abbreviation represents a procedure that isolates hazardous energy before maintenance?',
      options: ["HAZOP", "LOTO", "PPE", "ESD"],
      correctIndex: 1,
      explanation: 'LOTO stands for Lock Out Tag Out, used to prevent accidental energization or release of stored energy.'
  },
  {
      question: 'Which abbreviation represents a systematic study to identify process hazards and operability problems?',
      options: ["SOP", "LOTO", "HAZOP", "P&ID"],
      correctIndex: 2,
      explanation: 'HAZOP stands for Hazard and Operability Study, a structured process safety assessment.'
  },
  {
      question: 'Which abbreviation represents equipment worn to protect workers from workplace hazards?',
      options: ["ESD", "SCABA", "HIPPS", "PPE"],
      correctIndex: 3,
      explanation: 'PPE stands for Personal Protective Equipment, including helmets, gloves, safety glasses, and protective clothing.'
  },
  {
      question: 'Which equipment provides respiratory protection in an atmosphere that may contain H2S?',
      options: ["SCABA", "LCV", "MPFM", "DWT"],
      correctIndex: 0,
      explanation: 'SCABA stands for Self-Contained Breathing Apparatus, providing breathing air independent of the surrounding atmosphere.'
  },
  {
      question: 'Which gas is represented by H2S and requires special precautions because of its toxicity?',
      options: ["Carbon Dioxide", "Hydrogen Sulphide", "Carbon Monoxide", "Methane"],
      correctIndex: 1,
      explanation: 'H2S is Hydrogen Sulphide, a highly toxic gas that can cause rapid loss of consciousness and death at high concentrations.'
  },
  {
      question: 'Which chemical formula represents Carbon Dioxide?',
      options: ["H2S", "NaCl", "CO2", "O2"],
      correctIndex: 2,
      explanation: 'CO2 represents Carbon Dioxide, which may be present in produced gas and can contribute to corrosion in the presence of water.'
  },
  {
      question: 'Which chemical formula represents Sodium Chloride?',
      options: ["CO2", "H2S", "CaCO3", "NaCl"],
      correctIndex: 3,
      explanation: 'NaCl represents Sodium Chloride, commonly known as salt.'
  },
  {
      question: 'Which abbreviation represents the standard unit of pressure equal to 1,000 pascals?',
      options: ["kPa", "kpsi", "psi", "InH2O"],
      correctIndex: 0,
      explanation: 'kPa stands for Kilopascal. One kilopascal equals 1,000 pascals.'
  },
  {
      question: 'Which unit is commonly used to express low differential pressure in gas metering?',
      options: ["kpsi", "InH2O", "MBPD", "BPD"],
      correctIndex: 1,
      explanation: 'InH2O (Inches of Water) is commonly used for low differential pressure measurements, including orifice metering.'
  },
  {
      question: 'Which unit represents pressure in pounds per square inch?',
      options: ["kPa", "SCF", "psi", "BPD"],
      correctIndex: 2,
      explanation: 'psi stands for Pound per Square Inch, a common pressure measurement unit in the oilfield.'
  },
  {
      question: 'Which unit represents one thousand pounds per square inch?',
      options: ["psi", "kPa", "InH2O", "kpsi"],
      correctIndex: 3,
      explanation: 'kpsi represents thousand pounds per square inch. One kpsi equals 1,000 psi.'
  },
  {
      question: 'Which term describes the amount of gas present in a reservoir before production?',
      options: ["GIIP", "GOR", "GLR", "GVF"],
      correctIndex: 0,
      explanation: 'GIIP stands for Gas Initially In Place, the initial volume of gas in a reservoir.'
  },
  {
      question: 'Which term describes the original gas in place using the abbreviation OGIP?',
      options: ["Gas Oil Ratio", "Original Gas In Place", "Gas Initially In Place", "Gas Volume Fraction"],
      correctIndex: 1,
      explanation: 'OGIP means Original Gas In Place, representing the original quantity of gas contained in the reservoir.'
  },
  {
      question: 'Which term describes the original oil in place?',
      options: ["Oil Liquid Ratio", "Oil Gas Ratio", "OOIP", "OLP"],
      correctIndex: 2,
      explanation: 'OOIP stands for Original Oil In Place, the original oil quantity in a reservoir.'
  },
  {
      question: 'Which abbreviation represents stock tank oil initially in place?',
      options: ["OOIP", "OGIP", "STB", "STOIIP"],
      correctIndex: 3,
      explanation: 'STOIIP stands for Stock Tank Oil Initially In Place, the original oil quantity expressed at stock tank conditions.'
  },
  {
      question: 'Which abbreviation represents the fraction of hydrocarbons in place that is recovered?',
      options: ["RF", "PI", "IPR", "Pr"],
      correctIndex: 0,
      explanation: 'RF stands for Recovery Factor, the proportion of original hydrocarbons in place that has been or can be recovered.'
  },
  {
      question: 'Which abbreviation represents the pressure of fluids within the reservoir?',
      options: ["Pr", "Pwf", "FCP", "WHP"],
      correctIndex: 0,
      explanation: 'Pr represents Reservoir Pressure. Pwf represents Flowing Bottom Hole Pressure.'
  },
  {
      question: 'Which abbreviation represents the pressure at the bottom of the well during production?',
      options: ["Pr", "Pwf", "Pwh", "SITHP"],
      correctIndex: 1,
      explanation: 'Pwf represents Flowing Bottom Hole Pressure, while Pwh represents Wellhead Pressure.'
  },
  {
      question: 'Which abbreviation represents the wellhead pressure?',
      options: ["Pwf", "Pr", "Pwh", "Pc"],
      correctIndex: 2,
      explanation: 'Pwh represents Wellhead Pressure, also commonly written as WHP.'
  },
  {
      question: 'Which abbreviation represents capillary pressure?',
      options: ["Pe", "Pr", "Pc", "Pwf"],
      correctIndex: 2,
      explanation: 'Pc represents Capillary Pressure, the pressure difference between two immiscible fluids across a curved interface.'
  },
  {
      question: 'Which abbreviation represents external boundary pressure in the supplied dictionary?',
      options: ["Pc", "Pr", "Pwf", "Pe"],
      correctIndex: 3,
      explanation: 'Pe represents External Boundary Pressure in the supplied dictionary.'
  },
  {
      question: 'Which Greek symbol represents porosity?',
      options: ["φ", "∅", "π", "Δ"],
      correctIndex: 0,
      explanation: 'φ (phi) is the symbol commonly used for porosity in reservoir engineering.'
  },
  {
      question: 'Which symbol represents the orifice plate opening size in the supplied dictionary?',
      options: ["φ", "∅", "ΔP", "π"],
      correctIndex: 1,
      explanation: '∅ represents the orifice plate diameter or bore size in the supplied dictionary.'
  },
  {
      question: 'Which abbreviation represents the pressure relief device used to protect a system against overpressure?',
      options: ["PCV", "LCV", "PSV", "FWV"],
      correctIndex: 2,
      explanation: 'PSV stands for Pressure Safety Valve, a protective device designed to relieve excessive pressure.'
  },
  {
      question: 'Which abbreviation represents a valve used to regulate system pressure?',
      options: ["LCV", "FWV", "PSV", "PCV"],
      correctIndex: 3,
      explanation: 'PCV stands for Pressure Control Valve, which regulates pressure in a process system.'
  },
  {
      question: 'Which abbreviation represents the pipe used to transport produced fluids from the wellhead to surface equipment?',
      options: ["FLP", "Csg", "Tbg", "BHA"],
      correctIndex: 0,
      explanation: 'FLP represents Flow Line Pressure, while flowline is the pipe that transports fluids from the wellhead to surface equipment.'
  },
  {
      question: 'Which abbreviation represents the elevation reference at the rotary Kelly bushing?',
      options: ["GL", "RKB", "MSL", "TD"],
      correctIndex: 1,
      explanation: 'RKB stands for Rotary Kelly Bushing Elevation, an important reference datum in drilling.'
  },
  {
      question: 'Which abbreviation represents ground elevation?',
      options: ["MSL", "RKB", "GL", "TVD"],
      correctIndex: 2,
      explanation: 'GL stands for Ground Level, the elevation of the ground surface.'
  },
  {
      question: 'Which abbreviation represents mean sea level?',
      options: ["GL", "RKB", "TD", "MSL"],
      correctIndex: 3,
      explanation: 'MSL stands for Mean Sea Level, a common vertical reference datum.'
  },
  {
      question: 'Which abbreviation represents the vertical distance from a reference point to a point in the well?',
      options: ["TVD", "TD", "MD", "RKB"],
      correctIndex: 0,
      explanation: 'TVD stands for True Vertical Depth, which measures vertical distance rather than the length along the wellbore.'
  },
  {
      question: 'Which abbreviation represents the final depth reached by a well?',
      options: ["TVD", "TD", "MD", "KB"],
      correctIndex: 1,
      explanation: 'TD stands for Total Depth, the final measured depth of the well.'
  },
  {
      question: 'Which abbreviation represents the pipe used to convey produced fluids to the surface?',
      options: ["Csg", "BHA", "Tbg", "CTU"],
      correctIndex: 2,
      explanation: 'Tbg stands for Tubing, the production conduit installed inside the casing.'
  },
  {
      question: 'Which abbreviation represents the pipe installed in a wellbore to support the well structure?',
      options: ["Tbg", "CTU", "BHA", "Csg"],
      correctIndex: 3,
      explanation: 'Csg stands for Casing, the pipe installed in the wellbore to provide structural support and isolation.'
  },
  {
      question: 'Which abbreviation represents the diameter of a pipe measured from its external surface?',
      options: ["OD", "ID", "TVD", "TD"],
      correctIndex: 0,
      explanation: 'OD stands for Outer Diameter, the external measurement of a pipe.'
  },
  {
      question: 'Which abbreviation represents the diameter measured inside a pipe?',
      options: ["OD", "ID", "KB", "XO"],
      correctIndex: 1,
      explanation: 'ID stands for Inner Diameter, the internal measurement of a pipe.'
  },
  {
      question: 'Which abbreviation represents a connection used to join components with different sizes or thread types?',
      options: ["NPT", "BHA", "XO", "LCM"],
      correctIndex: 2,
      explanation: 'XO stands for CrossOver, a connection adapter used between components with different connection specifications.'
  },
  {
      question: 'Which abbreviation represents a tapered pipe thread standard?',
      options: ["ASME", "ANSI", "API", "NPT"],
      correctIndex: 3,
      explanation: 'NPT stands for National Pipe Thread, a standard tapered pipe thread.'
  },
  {
      question: 'Which organization develops standards for the petroleum industry?',
      options: ["API", "AGA", "ANSI", "ASME"],
      correctIndex: 0,
      explanation: 'API stands for American Petroleum Institute, an organization that develops petroleum industry standards and recommended practices.'
  },
  {
      question: 'Which organization develops standards for mechanical engineering?',
      options: ["API", "ASME", "AGA", "NACE"],
      correctIndex: 1,
      explanation: 'ASME stands for American Society of Mechanical Engineers, which publishes engineering codes and standards.'
  },
  {
      question: 'Which organization coordinates voluntary standards in the United States?',
      options: ["API", "AGA", "ANSI", "NACE"],
      correctIndex: 2,
      explanation: 'ANSI stands for American National Standards Institute, which coordinates voluntary consensus standards in the United States.'
  },
  {
      question: 'Which organization is associated with natural gas industry standards?',
      options: ["API", "ASME", "NACE", "AGA"],
      correctIndex: 3,
      explanation: 'AGA stands for American Gas Association, which supports standards and technical practices in the natural gas industry.'
  },
  {
      question: 'Which organization is associated with corrosion engineering?',
      options: ["NACE", "ANSI", "AGA", "ASME"],
      correctIndex: 0,
      explanation: 'NACE stands for National Association of Corrosion Engineers, historically associated with corrosion prevention and control.'
  },
  {
      question: 'Which abbreviation represents Magnetic Particle Inspection?',
      options: ["HAZOP", "MPI", "P&ID", "DWT"],
      correctIndex: 1,
      explanation: 'MPI is a non-destructive testing technique used to identify surface and near-surface discontinuities in ferromagnetic materials.'
  },
  {
      question: 'Which abbreviation represents a report documenting daily operational performance?',
      options: ["SOP", "P&ID", "DPR", "HAZOP"],
      correctIndex: 2,
      explanation: 'DPR stands for Daily Performance Report, used to document daily operational and production activities.'
  },
  {
      question: 'Which abbreviation represents standard procedures for carrying out an operation?',
      options: ["DPR", "HAZOP", "P&ID", "SOP"],
      correctIndex: 3,
      explanation: 'SOP stands for Standard Operating Procedures, providing instructions for safe and consistent operations.'
  },
  {
      question: 'Which abbreviation represents an emergency system that shuts down equipment or isolates a process?',
      options: ["ESD", "HIPPS", "HAZOP", "LOTO"],
      correctIndex: 0,
      explanation: 'ESD stands for Emergency Shutdown, a safety function that brings equipment or a process to a safe state.'
  },
  {
      question: 'Which system provides high-integrity protection against process overpressure?',
      options: ["ESD", "HIPPS", "PCV", "LCV"],
      correctIndex: 1,
      explanation: 'HIPPS stands for High Integrity Pressure Protection System, an instrumented safety system used to prevent overpressure.'
  },
  {
      question: 'Which abbreviation represents high-pressure and high-temperature well conditions?',
      options: ["ECD", "BHT", "HPHT", "HAZOP"],
      correctIndex: 2,
      explanation: 'HPHT stands for High Pressure High Temperature, describing challenging well conditions requiring specialized equipment.'
  },
  {
      question: 'Which abbreviation represents an electrical pump installed downhole for artificial lift?',
      options: ["PCP", "SRP", "CTU", "ESP"],
      correctIndex: 3,
      explanation: 'ESP stands for Electrical Submersible Pump, a downhole artificial lift system powered by an electric motor.'
  },
  {
      question: 'Which artificial lift system uses a rotating helical rotor and stator?',
      options: ["PCP", "ESP", "SRP", "BOP"],
      correctIndex: 0,
      explanation: 'PCP stands for Progressive Cavity Pump, which uses a rotor and stator to move fluid.'
  },
  {
      question: 'Which artificial lift system uses reciprocating sucker rods?',
      options: ["ESP", "SRP", "PCP", "MPFM"],
      correctIndex: 1,
      explanation: 'SRP stands for Sucker Rod Pump, which uses reciprocating rod movement to operate a downhole pump.'
  },
  {
      question: 'Which equipment is used to heat produced fluids using a combustion heat source?',
      options: ["Heat Exchanger", "Steam Exchanger", "Fired Heater", "MPFM"],
      correctIndex: 2,
      explanation: 'FH stands for Fired Heater, a heater that uses combustion to supply heat to the process.'
  },
  {
      question: 'Which abbreviation represents the total pressure and temperature conditions of a reservoir fluid study?',
      options: ["SC", "STC", "SG", "PVT"],
      correctIndex: 3,
      explanation: 'PVT stands for Pressure Volume Temperature, describing fluid properties under changing pressure and temperature conditions.'
  },
  {
      question: 'Which abbreviation represents the reference volume of gas measured at standard conditions?',
      options: ["SCF", "SC", "STB", "BPD"],
      correctIndex: 0,
      explanation: 'SCF stands for Standard Cubic Feet, a unit of gas volume at defined standard conditions.'
  },
  {
      question: 'Which abbreviation represents the oil volume measured at stock tank conditions?',
      options: ["SCF", "STB", "BPD", "MSCFD"],
      correctIndex: 1,
      explanation: 'STB stands for Stock Tank Barrel, representing oil volume measured at stock tank conditions.'
  },
  {
      question: 'Which abbreviation represents the conditions inside the separator?',
      options: ["STC", "RC", "SC", "MSL"],
      correctIndex: 2,
      explanation: 'SC stands for Separator Condition, referring to the separator pressure and temperature.'
  },
  {
      question: 'Which abbreviation represents the conditions at the stock tank?',
      options: ["SC", "RC", "HPHT", "STC"],
      correctIndex: 3,
      explanation: 'STC stands for Stock Tank Condition, the reference conditions for stock tank oil volume.'
  },
  {
      question: 'Which abbreviation represents the specific gravity of a gas?',
      options: ["SG", "Sg", "So", "Sw"],
      correctIndex: 0,
      explanation: 'SG stands for Specific Gravity. Sg, with a lowercase g, represents Gas Saturation in reservoir engineering.'
  },
  {
      question: 'Which abbreviation represents gas saturation rather than gas specific gravity?',
      options: ["SG", "Sg", "Krg", "Bg"],
      correctIndex: 1,
      explanation: 'Sg represents Gas Saturation, while SG represents Specific Gravity.'
  },
  {
      question: 'Which abbreviation represents relative permeability to gas?',
      options: ["Kro", "Krw", "Krg", "Kr"],
      correctIndex: 2,
      explanation: 'Krg represents Relative Permeability to Gas.'
  },
  {
      question: 'Which abbreviation represents relative permeability to oil?',
      options: ["Krg", "Krw", "Kr", "Kro"],
      correctIndex: 3,
      explanation: 'Kro represents Relative Permeability to Oil.'
  },
  {
      question: 'Which abbreviation represents relative permeability to water?',
      options: ["Krw", "Kro", "Krg", "Kr"],
      correctIndex: 0,
      explanation: 'Krw represents Relative Permeability to Water.'
  },
  {
      question: 'Which abbreviation represents the general relative permeability parameter?',
      options: ["K", "Kr", "Kro", "Krg"],
      correctIndex: 1,
      explanation: 'Kr represents Relative Permeability, while K represents absolute permeability.'
  },
  {
      question: 'Which abbreviation represents absolute permeability?',
      options: ["Kr", "Kro", "K", "Krw"],
      correctIndex: 2,
      explanation: 'K represents Permeability, commonly used for absolute permeability of the rock.'
  },
  {
      question: 'Which abbreviation represents a formation volume factor for oil?',
      options: ["Bg", "Bo", "Kro", "So"],
      correctIndex: 1,
      explanation: 'Bo represents Oil Formation Volume Factor, while Bg represents Gas Formation Volume Factor.'
  },
  {
      question: 'Which abbreviation represents a formation volume factor for gas?',
      options: ["Bo", "Bg", "GVF", "GLR"],
      correctIndex: 1,
      explanation: 'Bg represents Gas Formation Volume Factor, relating reservoir gas volume to standard gas volume.'
  },
  {
      question: 'Which abbreviation represents the percentage of gas in a multiphase stream by volume?',
      options: ["GOR", "GLR", "GVF", "CGR"],
      correctIndex: 2,
      explanation: 'GVF stands for Gas Volume Fraction, the fraction of the flowing mixture volume occupied by gas.'
  },
  {
      question: 'Which abbreviation represents the interface between gas and oil in a reservoir?',
      options: ["GWC", "OWC", "WOC", "GOC"],
      correctIndex: 3,
      explanation: 'GOC stands for Gas Oil Contact, the interface between gas and oil zones.'
  },
  {
      question: 'Which abbreviation represents the interface between gas and water?',
      options: ["GWC", "GOC", "OWC", "WOC"],
      correctIndex: 0,
      explanation: 'GWC stands for Gas Water Contact, the interface between gas and water zones.'
  },
  {
      question: 'Which abbreviation represents the interface between oil and water?',
      options: ["GOC", "OWC", "GWC", "WGR"],
      correctIndex: 1,
      explanation: 'OWC stands for Oil Water Contact, the interface between oil and water zones.'
  },
  {
      question: 'Which abbreviation represents water-oil contact using the reverse word order?',
      options: ["GWC", "GOC", "WOC", "OWC"],
      correctIndex: 2,
      explanation: 'WOC stands for Water Oil Contact, the interface between water and oil zones.'
  },
  {
      question: 'Which abbreviation represents the working pressure of equipment?',
      options: ["PSIA", "PSIG", "Pr", "WP"],
      correctIndex: 3,
      explanation: 'WP stands for Working Pressure, the pressure at which equipment is designed or intended to operate.'
  },
  {
      question: 'Which abbreviation represents the operating pressure at the separator?',
      options: ["Sep. P", "Sep. T", "FLP", "WHP"],
      correctIndex: 0,
      explanation: 'Sep. P stands for Separator Pressure, the pressure inside the separator.'
  },
  {
      question: 'Which abbreviation represents the operating temperature at the separator?',
      options: ["Sep. P", "Sep. T", "WHT", "BHT"],
      correctIndex: 1,
      explanation: 'Sep. T stands for Separator Temperature, the temperature inside the separator.'
  },
  {
      question: 'Which abbreviation represents the liquid level inside a separator?',
      options: ["LCM", "LVF", "DFL", "LCV"],
      correctIndex: 3,
      explanation: 'LCV is the Level Control Valve used to regulate liquid level. DFL represents Dynamic Fluid Level.'
  },
  {
      question: 'Which abbreviation represents the fluid level in a well while it is producing?',
      options: ["DFL", "SFL", "WLR", "GVF"],
      correctIndex: 0,
      explanation: 'DFL stands for Dynamic Fluid Level, the fluid level under operating or producing conditions.'
  },
  {
      question: 'Which abbreviation represents the fluid level in a well under static conditions?',
      options: ["DFL", "SFL", "FLP", "WHP"],
      correctIndex: 1,
      explanation: 'SFL stands for Static Fluid Level, the fluid level under static conditions.'
  },
  {
      question: 'Which abbreviation represents the valve used to maintain pressure in a system?',
      options: ["LCV", "FWV", "BPV", "WSV"],
      correctIndex: 2,
      explanation: 'BPV stands for Back Pressure Valve, used to maintain or control back pressure.'
  },
  {
      question: 'Which abbreviation represents the process of hydraulic fracturing?',
      options: ["FIT", "LOT", "DST", "Frac"],
      correctIndex: 3,
      explanation: 'Frac is short for Hydraulic Fracturing, a stimulation technique used to improve formation conductivity.'
  },
  {
      question: 'Which abbreviation represents the process of isolating a wellbore section using a downhole sealing device?',
      options: ["Pkr", "BHA", "XO", "CTU"],
      correctIndex: 0,
      explanation: 'Pkr stands for Packer, a downhole device used to isolate sections of the wellbore.'
  },
  {
      question: 'Which abbreviation represents a valve that controls pressure automatically?',
      options: ["PSV", "PCV", "SSV", "WSV"],
      correctIndex: 1,
      explanation: 'PCV stands for Pressure Control Valve, used to maintain a desired process pressure.'
  },
  {
      question: 'Which abbreviation represents the pipe connection thread standard?',
      options: ["ASME", "API", "NPT", "ANSI"],
      correctIndex: 2,
      explanation: 'NPT stands for National Pipe Thread, a tapered pipe thread standard.'
  },
  {
      question: 'Which abbreviation represents the inspection technique that uses magnetic fields and particles?',
      options: ["HAZOP", "DWT", "FIT", "MPI"],
      correctIndex: 3,
      explanation: 'MPI stands for Magnetic Particle Inspection, a non-destructive testing technique for ferromagnetic materials.'
  },
  {
      question: 'What is the benefit of Coalescer in treatment?',
      options: ["Coalesce small Oil droplets into smaller floating ones", "Break small Oil dropletsinto smaller floating ones", "Merge small Gas bubbles into larger separating ones", "Coalesce small water droplets into smaller dissolving ones"],
      correctIndex: 0,
      explanation: 'Coolecting small droplets of liquid to be larger ones to separate from the gas to sittling.'
  },
  {
      question: 'What happens if Demulsifier is too much?',
      options: ["Separation improves completely", "Accelerate Settling and lowers BS&W to zero", "Creates Foam preventing Water exit from Oil", "Creates reverse Emulsion and Separation fails"],
      correctIndex: 3,
      explanation: 'If we increase Demulsifier it will reverse and Emulsion and resparation fails.'
  },
  {
      question: 'Which definition is most accurate for Sour Gas?',
      options: ["Has low H2S, safe and no treatment needed", "Has high H2S, toxic and corrosive, needd treatment", "Has high CO2 only, no H2S", "Has no H2S and no CO2 at all"],
      correctIndex: 1,
      explanation: 'Sour Gas has high H2S and Sweet Gas has no H2S.'
  },
  {
      question: 'Is Stock Tank a safe choice to receive flow from separator because it has more safety systems than Surge Tank?',
      options: ["✔️Right", "❌Wrong"],
      correctIndex: 1,
      explanation: 'Surge Tank can be working pressure more than 100 Psi.'
  },
  {
      question: 'True GOR calculated at which conditions?',
      options: ["Diretly at wellhead ", "At standard conditions 14.7 Psi & 60F", "At Separtor conditions only", "At 0 Psi"],
      correctIndex: 1,
      explanation: 'API should calculated at standard conditions 14.7 Psi for pressure and 60 F for Temperature.'
  },
  {
      question: 'What is the First step when you suspect NORM inside the separator?',
      options: ["Isolate and depressurize the separator ", "Open the separator for cleaning", " Survey the Equipment for radiation ", " Flush the separator with water "],
      correctIndex: 2,
      explanation: 'Take the survey for the Equipment for Radiation.'
  },
  {
      question: 'Where does NORM mainly come from?',
      options: [" From formation water and scale ", " From diesel and water ", " From fresh water ", " From chemicals "],
      correctIndex: 0,
      explanation: ' NORM is Natural Occured Radial Matrial is coming from formation water and scale inside the rock of the reservoir .'
  },
  {
      question: ' Does NORM have a distinctive smell ?',
      options: [" Yes, Gasoline smell ", " Yes, Gas smell ", " Yes, rotten egg smell ", " No, it has no smell "],
      correctIndex: 3,
      explanation: ' NORM has no smell and not immediate affect on Health .'
  },
  {
      question: ' What is Burner Boom or Flare Line ?',
      options: [" Oil line to hot pit ", " Gas line to flare pit ", " Chemical line to sheet pit ", " Water line to cold pit "],
      correctIndex: 1,
      explanation: ' Burner Boom or Flare Pit is the line coming from  .'
  },
  {
      question: ' What does ESD mean in oil facilitate ?',
      options: [" Safety system for facility shutdown During emergencies ", " System to accelerate production operation ", " System to measue oil quality ", " Device for discarging produced water "],
      correctIndex: 0,
      explanation: ' Burner Boom or Flare Pit is the line coming from  .'
  },
  {
      question: ' What is the difference between WHP & THP ?',
      options: [" WHP is general, THP is for tubing ", " WHP is for tubing, THP is general ", " WHP is for casing, THP is for oil ", " WHP is for gas, THP is for water "],
      correctIndex: 0,
      explanation: ' Wellhead is general and THP is for tubing .'
  },
  {
      question: ' What does WHP mean ?',
      options: [" Well High Pressure ", " Working Head Pressure ", " WellHead Pressure ", " Water Head Pressure "],
      correctIndex: 0,
      explanation: ' Wellhead is general and THP is for tubing .'
  },
  {
      question: ' What does THP mean ?',
      options: [" Temperature Head Pressure ", " Tubing Head Pressure ", " Total Head Pressure ", " Tubing High Pressure "],
      correctIndex: 1,
      explanation: ' THP Tubing Head Pressure .'
  },
  {
      question: ' What does CHP mean ?',
      options: [" Casing Head Pressure ", " Control Head Pressure ", " Central Head Pressure ", " Casing High Pressure "],
      correctIndex: 1,
      explanation: ' CHP Casing Head Pressure .'
  },
  {
      question: ' What does FLP mean ?',
      options: [" Flowline Process Pressure ", " Flowline Power Pressure ", " Flowline Pump Pressure ", " Flowline Pressure "],
      correctIndex: 3,
      explanation: ' FLP Flowline Pressure .'
  },
  {
      question: ' What does SS mean ?',
      options: [" Small Store ", " Sub-Sea ", " Stainless-Steel ", " Safe Side "],
      correctIndex: 2,
      explanation: ' SS stands for Stainless Steel .'
  },
  {
      question: ' What is Stabilized Flow ?',
      options: [" Stable Flow with constant rate, pressure and temperature ", " Unstable flow with changing rate ", " Flow with gas only ", " Flow with water "],
      correctIndex: 0,
      explanation: ' Stabilized Flow is stable with constant rate, Temperature and Pressure  .'
  },
  {
      question: ' How many litersare in one barrel ?',
      options: [" 42 Liters ", " 40 Liters ", " 159 Liters ", " 149 Liters "],
      correctIndex: 2,
      explanation: ' Barrel = 159 Liters  .'
  },
  {
      question: ' What does PPE mean ?',
      options: [" Personal Protective Essentials ", " Personal Protective Equipment ", " Personal Protective Engin ", " Personal Protective Environment "],
      correctIndex: 1,
      explanation: ' PPE means Personal Protective Equipment  .'
  },
  {
      question: ' Where to place H2S Gas Detector ?',
      options: [" Low areas near potential leak sources ", " At highest flare point ", " Inside Surge Tank ", " In Control room only "],
      correctIndex: 0,
      explanation: ' H2S is heavier than air so Detector should be in low areas and near the potential leak source  .'
  },
  {
      question: ' What is LEL ?',
      options: [" Very Low Pressure ", " Type of Valve ", " Lower Explosive Limit of Gas ", " Water Level "],
      correctIndex: 2,
      explanation: ' LEL means Lower Explosive Limit  .'
  },
  {
      question: ' Why is continuous Drain required for Air Compressor ?',
      options: [" To increase outlet air pressure ", " To reduce oil consumption rate ", " To cool the compressor motor during operation ", " To prevent condensed moisture corrosion inside tank "],
      correctIndex: 3,
      explanation: ' if the water accumulated inside the tank of the Air Compressor, it will condensed moisure corrosion  .'
  },
  {
      question: ' What is the Hydrate Inhibitor other than Methanol ?',
      options: [" MEG - Mono Ethylene Glycol ", " MEA - Mono Ethanol Amine ", " DEA - Di Ethanol Amine ", " TEA - Tri Ethanol Amine "],
      correctIndex: 0,
      explanation: ' MEG and Methanol are used for Hydrate inhiitor  .'
  },
  {
      question: ' High Water content in gas reduces Hydrate formation Chance ?',
      options: [" ✔️Right ", " ❌Wrong "],
      correctIndex: 1,
      explanation: ' Hydration is formed when there is existence of water and it increased bby increasing water content in gas  .'
  },
  {
      question: ' Joule-Thomson may cause Hydrate formation just after Choke ?',
      options: [" ✔️Right ", " ❌Wrong "],
      correctIndex: 0,
      explanation: ' Joule-Thomson Law concerns about Choke and hydrations .'
  },
  {
      question: ' Static Electricity cannot cause ignition in fuel tanks ?',
      options: [" ✔️Right ", " ❌Wrong "],
      correctIndex: 1,
      explanation: ' Static Electricity cancause ignition  .'
  },
  {
      question: ' H2S can be detected by smell because its odor is strong and distinctive ?',
      options: [" ✔️Right ", " ❌Wrong "],
      correctIndex: 1,
      explanation: ' Because H2S with high concntrate will make te sense of ssmell gone  .'
  },
  {
      question: ' Earthing is Essential when unloading fuel trucks to discharge static charge ?',
      options: [" ✔️Right ", " ❌Wrong "],
      correctIndex: 0,
      explanation: ' Earthing is discharging the static Electricity  .'
  },
  
  /**************************** */

  {
    question: ' What does N2 stand for in oil and gas operations ?',
    options: [" Nitrogen ", " Natural Gas ", " Nitric Oxide ", " Neon "],
    correctIndex: 0,
    explanation: ' N2 is Nitrogen, commonly used for purging, well unloading, and inerting operations.'
  },
  {
    question: ' What is the main function of a Wellhead Choke (WHC) ?',
    options: [" Measure water cut ", " Control the flow rate ", " Separate oil and gas ", " Measure bottomhole pressure "],
    correctIndex: 1,
    explanation: ' A Wellhead Choke controls flow restriction and helps regulate the well production rate.'
  },
  {
    question: ' What is the main function of a Shutdown Valve (SDV) ?',
    options: [" Increase flow rate ", " Measure pressure ", " Automatically isolate process flow ", " Separate gas from liquid "],
    correctIndex: 2,
    explanation: ' An SDV is designed to isolate a process section when a shutdown condition occurs.'
  },
  {
    question: ' What is the main function of a Blowdown Valve (BDV) ?',
    options: [" Increase separator pressure ", " Release process pressure ", " Control liquid level ", " Measure gas flow rate "],
    correctIndex: 1,
    explanation: ' A BDV releases process fluids to a designated blowdown system to reduce equipment or pipeline pressure.'
  },
  {
    question: ' What is the main function of a Pressure Safety Valve (PSV) ?',
    options: [" Control normal operating pressure ", " Protect equipment against overpressure ", " Measure pressure drop ", " Control liquid level "],
    correctIndex: 1,
    explanation: ' A PSV opens at its set pressure to protect pressure-containing equipment against excessive pressure.'
  },
  {
    question: ' What is the main function of a Pressure Relief Valve (PRV) ?',
    options: [" Relieve excessive pressure ", " Control temperature ", " Measure flow rate ", " Stop liquid carryover "],
    correctIndex: 0,
    explanation: ' A PRV relieves excessive pressure to protect equipment and piping from overpressure.'
  },
  {
    question: ' What does PCV stand for ?',
    options: [" Pressure Control Valve ", " Process Check Valve ", " Pressure Closing Valve ", " Production Control Vessel "],
    correctIndex: 0,
    explanation: ' PCV stands for Pressure Control Valve, which regulates pressure around a required set point.'
  },
  {
    question: ' Which instrument is commonly used to control liquid level in a separator ?',
    options: [" PCV ", " LCV ", " TCV ", " FCV "],
    correctIndex: 1,
    explanation: ' LCV stands for Level Control Valve and regulates liquid flow to maintain the required vessel level.'
  },
  {
    question: ' What is the main function of a Temperature Control Valve (TCV) ?',
    options: [" Control pressure ", " Control liquid level ", " Regulate heating or cooling flow ", " Measure gas concentration "],
    correctIndex: 2,
    explanation: ' A TCV regulates the heating or cooling medium to maintain the required process temperature.'
  },
  {
    question: ' Which valve is used to regulate a process flow rate ?',
    options: [" FCV ", " PSV ", " BDV ", " SDV "],
    correctIndex: 0,
    explanation: ' FCV stands for Flow Control Valve and adjusts its opening to maintain the required flow rate.'
  },
  {
    question: ' What does MOV stand for ?',
    options: [" Manual Operating Valve ", " Motor Operated Valve ", " Main Outlet Valve ", " Maximum Operating Volume "],
    correctIndex: 1,
    explanation: ' An MOV uses an electric motor actuator to open or close the valve.'
  },
  {
    question: ' What does ROV stand for in the valve terminology used here ?',
    options: [" Remote Outlet Vessel ", " Remotely Operated Valve ", " Rotary Operating Valve ", " Pressure Relief Valve "],
    correctIndex: 1,
    explanation: ' ROV means Remotely Operated Valve. In subsea operations, ROV can also mean Remotely Operated Vehicle.'
  },
  {
    question: ' What is the main function of an Emergency Shutdown Valve (ESDV) ?',
    options: [" Control normal production rate ", " Automatically isolate flow during an emergency ", " Increase separator pressure ", " Measure temperature "],
    correctIndex: 1,
    explanation: ' An ESDV isolates hydrocarbon flow when an emergency shutdown signal is activated.'
  },
  {
    question: ' What does SSIV stand for ?',
    options: [" Surface Safety Isolation Valve ", " Subsea Isolation Valve ", " Subsurface Injection Valve ", " Safety Shutdown Instrument Valve "],
    correctIndex: 1,
    explanation: ' SSIV stands for Subsea Isolation Valve and is used to isolate subsea pipeline or production systems.'
  },
  {
    question: ' What is the correct full form of PLEM ?',
    options: [" Pipeline End Manifold ", " Production Line Equipment Module ", " Pressure Line Entry Manifold ", " Pipeline Emergency Module "],
    correctIndex: 0,
    explanation: ' PLEM means Pipeline End Manifold, a subsea structure that provides connections between pipelines and subsea equipment.'
  },
  {
    question: ' What does PLET stand for ?',
    options: [" Pipeline End Termination ", " Pressure Line Emergency Test ", " Production Equipment Line Terminal ", " Pipeline Entry Tool "],
    correctIndex: 0,
    explanation: ' PLET stands for Pipeline End Termination and provides a connection point at the end of a subsea pipeline.'
  },
  {
    question: ' What is the main function of an FPSO ?',
    options: [" Drill wells only ", " Produce, process, store, and offload hydrocarbons ", " Store drilling mud ", " Supply nitrogen to wells "],
    correctIndex: 1,
    explanation: ' An FPSO is a floating offshore facility used for production, processing, storage, and offloading.'
  },
  {
    question: ' What is the main difference between an FPSO and an FSO ?',
    options: [" FSO normally includes full production processing ", " FPSO has production and processing facilities, while FSO is mainly for storage and offloading ", " FSO is always a drilling rig ", " There is no difference "],
    correctIndex: 1,
    explanation: ' An FPSO processes production fluids as well as storing and offloading hydrocarbons. An FSO is primarily used for storage and offloading.'
  },
  {
    question: ' In an oil and gas processing facility, what does WHRU commonly stand for ?',
    options: [" Wellhead Hydraulic Recovery Unit ", " Waste Heat Recovery Unit ", " Water Handling Reservoir Unit ", " Wellhead Heating Regulation Unit "],
    correctIndex: 1,
    explanation: ' WHRU commonly means Waste Heat Recovery Unit, which recovers useful heat from hot exhaust gases or other waste-heat sources.'
  },
  {
    question: ' Which glycol is commonly used for natural gas dehydration ?',
    options: [" MEG ", " TEG ", " Methanol ", " Ethanol "],
    correctIndex: 1,
    explanation: ' TEG (Triethylene Glycol) is commonly used to absorb water vapor from natural gas in a dehydration contactor.'
  },
  {
    question: ' What is the main purpose of MEG injection in subsea flowlines ?',
    options: [" Increase oil viscosity ", " Prevent gas hydrate formation ", " Increase water cut ", " Remove sand particles "],
    correctIndex: 1,
    explanation: ' MEG (Monoethylene Glycol) inhibits gas hydrate formation by reducing the tendency of hydrates to form in the aqueous phase.'
  },
  {
    question: ' Which compounds are included in BTEX ?',
    options: [" Benzene, Toluene, Ethylbenzene, and Xylenes ", " Butane, Toluene, Ethane, and Xylene ", " Benzene, TEG, Ethanol, and Xylene ", " Butane, Toluene, Ethylbenzene, and Sulphur "],
    correctIndex: 0,
    explanation: ' BTEX is the group name for Benzene, Toluene, Ethylbenzene, and Xylenes.'
  },
  {
    question: ' What does LEL stand for ?',
    options: [" Lower Explosive Limit ", " Lowest Equipment Level ", " Liquid Expansion Limit ", " Lower Emission Level "],
    correctIndex: 0,
    explanation: ' LEL is the lowest concentration of a flammable gas or vapor in air that can ignite and propagate a flame.'
  },
  {
    question: ' What does UEL stand for ?',
    options: [" Upper Equipment Limit ", " Upper Explosive Limit ", " Ultimate Emission Level ", " Underpressure Exposure Limit "],
    correctIndex: 1,
    explanation: ' UEL is the highest concentration of a flammable gas or vapor in air that can ignite and propagate a flame.'
  },
  {
    question: ' A gas detector reading of 20% LEL means what ?',
    options: [" The atmosphere contains 20% oxygen ", " The gas concentration is 20% of its Lower Explosive Limit ", " The gas has reached its UEL ", " The atmosphere is completely safe "],
    correctIndex: 1,
    explanation: ' 20% LEL means the measured flammable gas concentration is one-fifth of the LEL value for the calibrated gas. It does not mean 20% gas by volume.'
  },
  {
    question: ' What does PPM stand for ?',
    options: [" Pressure Per Meter ", " Parts Per Million ", " Production Pressure Measurement ", " Percentage Per Meter "],
    correctIndex: 1,
    explanation: ' PPM means Parts Per Million and is a unit used to express very small concentrations.'
  },
  {
    question: ' Which statement about nitrogen (N2) is correct ?',
    options: [" It is highly flammable ", " It is commonly used as an inert gas ", " It is always toxic at every concentration ", " It supports combustion like oxygen "],
    correctIndex: 1,
    explanation: ' Nitrogen is commonly used as an inert gas, but it can displace oxygen and create an asphyxiation hazard.'
  },
  {
    question: ' Which valve is normally used to control the pressure of a process system during operation ?',
    options: [" PCV ", " BDV ", " ESDV ", " SSIV "],
    correctIndex: 0,
    explanation: ' A PCV modulates its opening to maintain a required pressure set point during normal operation.'
  },
  {
    question: ' Which valve is designed to release pressure from a process system during depressurization ?',
    options: [" FCV ", " BDV ", " LCV ", " MOV "],
    correctIndex: 1,
    explanation: ' A BDV opens to release process fluids to a designated blowdown system.'
  },
  {
    question: ' Which valve is specifically designed to protect equipment against excessive pressure ?',
    options: [" TCV ", " PSV ", " MOV ", " LCV "],
    correctIndex: 1,
    explanation: ' A PSV is a pressure-protection device that opens at its set pressure to prevent overpressure.'
  },
  {
    question: ' Which of the following is an example of a control valve rather than an automatic isolation valve ?',
    options: [" ESDV ", " SDV ", " FCV ", " SSIV "],
    correctIndex: 2,
    explanation: ' An FCV continuously modulates flow, while SDV and ESDV are generally used for isolation.'
  },
  {
    question: ' How many psi are equal to 1 Atmosphere ?',
    options: [" 14.5 psi ", " 14.73 psi ", " 15.5 psi ", " 10 psi "],
    correctIndex: 1,
    explanation: ' 1 standard Atmosphere is approximately equal to 14.73 psi.'
  },
  {
    question: ' How many psi are equal to 1 Bar ?',
    options: [" 14.73 psi ", " 10 psi ", " 14.5 psi ", " 15 psi "],
    correctIndex: 2,
    explanation: ' 1 Bar is approximately equal to 14.5 psi.'
  },
  {
    question: ' How many psi are equal to 1 MPa (Mega Pascal) ?',
    options: [" 100 psi ", " 145 psi ", " 14.5 psi ", " 1,000 psi "],
    correctIndex: 1,
    explanation: ' 1 MPa is approximately equal to 145 psi.'
  },
  {
    question: ' How many inches are equal to 1 foot ?',
    options: [" 10 inches ", " 12 inches ", " 14 inches ", " 16 inches "],
    correctIndex: 1,
    explanation: ' 1 foot is equal to 12 inches.'
  },
  {
    question: ' How many feet are equal to 1 meter ?',
    options: [" 2.28 feet ", " 3.28 feet ", " 4.28 feet ", " 5.28 feet "],
    correctIndex: 1,
    explanation: ' 1 meter is approximately equal to 3.28 feet.'
  },
  {
    question: ' How many US gallons are equal to 1 US Barrel ?',
    options: [" 40 US gallons ", " 42 US gallons ", " 45 US gallons ", " 50 US gallons "],
    correctIndex: 1,
    explanation: ' 1 US petroleum barrel is equal to 42 US gallons.'
  },
  {
    question: ' How many liters are equal to 1 oilfield Barrel (bbl) ?',
    options: [" 100 liters ", " 150 liters ", " 159 liters ", " 200 liters "],
    correctIndex: 2,
    explanation: ' 1 US petroleum barrel is approximately equal to 159 liters.'
  },
  {
    question: ' How many psi are approximately equal to 2 Bar ?',
    options: [" 14.5 psi ", " 29 psi ", " 43.5 psi ", " 58 psi "],
    correctIndex: 1,
    explanation: ' Since 1 Bar is approximately 14.5 psi, 2 Bar is approximately 29 psi.'
  },
  {
    question: ' How many psi are approximately equal to 3 Atmospheres ?',
    options: [" 14.73 psi ", " 29.46 psi ", " 44.19 psi ", " 58.92 psi "],
    correctIndex: 2,
    explanation: ' 1 Atmosphere is approximately 14.73 psi, so 3 Atmospheres equal 44.19 psi.'
  },
  {
    question: ' How many feet are approximately equal to 10 meters ?',
    options: [" 10.8 feet ", " 22.8 feet ", " 32.8 feet ", " 42.8 feet "],
    correctIndex: 2,
    explanation: ' 1 meter is approximately 3.28 feet, so 10 meters equal 32.8 feet.'
  },
  {
    question: ' How many inches are equal to 3 feet ?',
    options: [" 24 inches ", " 30 inches ", " 36 inches ", " 48 inches "],
    correctIndex: 2,
    explanation: ' 1 foot equals 12 inches, so 3 feet equal 36 inches.'
  },
  {
    question: ' How many liters are approximately equal to 2 US Barrels ?',
    options: [" 159 liters ", " 238.5 liters ", " 318 liters ", " 420 liters "],
    correctIndex: 2,
    explanation: ' 1 US Barrel is approximately 159 liters, so 2 barrels equal 318 liters.'
  },
  {
    question: ' A well produces 5 bbl of oil. Approximately how many liters is this ?',
    options: [" 795 liters ", " 159 liters ", " 500 liters ", " 1,000 liters "],
    correctIndex: 0,
    explanation: ' 5 × 159 = 795 liters.'
  },
  {
    question: ' A pressure gauge reads 100 psi. Approximately how many Bar is this ?',
    options: [" 3.45 Bar ", " 4.45 Bar ", " 5.45 Bar ", " 6.45 Bar "],
    correctIndex: 0,
    explanation: ' Bar = psi ÷ 14.5. Therefore, 100 ÷ 14.5 ≈ 6.90 Bar. Check the options: the correct answer should be approximately 6.90 Bar.'
  },
  {
    question: ' Which conversion is correct for 1 MPa ?',
    options: [" 1 MPa = 14.5 psi ", " 1 MPa = 145 psi ", " 1 MPa = 1,450 psi ", " 1 MPa = 10 psi "],
    correctIndex: 1,
    explanation: ' 1 MPa is approximately equal to 145 psi.'
  },
  {
    question: ' What is API Gravity ?',
    options: [" Measure of gas pressure ", " Measure of oil density compared to water ", " Measure of well depth ", " Measure of oil temperature "],
    correctIndex: 1,
    explanation: ' API is Oil Specific Gravity and it means measure oil density compared to water density.'
  },

  // --- COURSE QUIZ QUESTIONS (added Nov 27 from all course quizzes; unique and standalone) ---
  {
    question: "What API gravity does water (SG = 1.000) have?",
    options: ["1.0 API", "31.1 API", "100 API", "10.0 API"],
    correctIndex: 3,
    explanation: "141.5 / 1 - 131.5 = 10.0 API."
  },
  {
    question: "An oil has an SG of 0.85. What is its API gravity?",
    options: ["About 34.97 API", "About 0.85 API", "About 59.6 API", "About 12.4 API"],
    correctIndex: 0,
    explanation: "API = 141.5 / 0.85 - 131.5 = 34.97."
  },
  {
    question: "An oil of 35 API has an SG of 0.8498. What is its approximate density in kg/m3?",
    options: ["About 85 kg/m3", "About 8,490 kg/m3", "About 0.85 kg/m3", "About 849 kg/m3"],
    correctIndex: 3,
    explanation: "0.8498 x 999.016 = 849.0 kg/m3."
  },
  {
    question: "Which volume correction factor expression does the API Gravity Correction use?",
    options: ["T / 60", "1 - 0.5 x dT", "exp(-0.000413 x dT x (1 + 0.8 x 0.000413 x dT)), with dT = T - 60", "141.5 / (131.5 + dT)"],
    correctIndex: 2,
    explanation: "VCF = e^[-0.000413 dT (1 + 0.8 x 0.000413 dT)]."
  },
  {
    question: "An observed API of 43.2 at 100 F is corrected to 60 F with the VCF formula. About what API does it give?",
    options: ["About 43.2 API", "About 40.3 API", "About 50.0 API", "About 30.0 API"],
    correctIndex: 1,
    explanation: "dT = 40, so SG60 = 0.8236 and API60 = 141.5 / 0.8236 - 131.5 = 40.3."
  },
  {
    question: "In the Oil Gravity Temperature Correction, what temperature is used if the temperature field is empty?",
    options: ["0 F", "60 F", "100 F", "32 F"],
    correctIndex: 1,
    explanation: "The calculator uses 60 when the temperature is empty."
  },
  {
    question: "During high-rate oil transfer, the 'Breather Valve' (PV Valve) fails to open while emptying. What is the immediate physical risk to the tank structure?",
    options: ["Internal overpressure causing a roof rupture", "Thermal expansion of the remaining crude", "Structural implosion (vacuum collapse) due to atmospheric pressure", "Flame arrestor saturation"],
    correctIndex: 2,
    explanation: "When liquid is removed without air intake, internal pressure drops. External atmospheric pressure (14.7 psi) can easily crush a non-coded atmospheric tank."
  },
  {
    question: "What is the primary function of a Nitrogen (N2) 'Blanketing' system in a storage tank containing high-volatility condensate?",
    options: ["To increase the flow rate of the transfer pump", "To displace Oxygen and keep the vapor space below the Lower Explosive Limit (LEL)", "To cool the liquid temperature during summer operations", "To act as a chemical scavenger for H2S"],
    correctIndex: 1,
    explanation: "Nitrogen is inert. By displacing Oxygen, you remove one leg of the fire triangle, preventing internal combustion."
  },
  {
    question: "A tank is rated for 'Atmospheric' service. If the pressure gauge shows 18 psig, what is the status of the vessel?",
    options: ["Normal operating range for well testing", "Slightly high but safe for temporary use", "Critical Condition: The tank is exceeding its design limit and is at risk of catastrophic failure", "Ideal pressure for ensuring the flame arrestor works"],
    correctIndex: 2,
    explanation: "Atmospheric tanks are generally designed for very low pressures (usually <0.5 psi to 15 psi max depending on API code). 18 psig is dangerously high."
  },
  {
    question: "Why must the Vent Line always be directed to a Flare or Burner rather than vented locally at the tank site?",
    options: ["To prevent the accumulation of heavier-than-air hydrocarbon vapors at ground level", "To reduce the noise of the gas flow", "To save space on the well pad", "Because the gas is too cold for local venting"],
    correctIndex: 0,
    explanation: "Hydrocarbon vapors (like Propane/Butane) are heavier than air and can pool on the ground, creating a massive explosion risk if they find an ignition source."
  },
  {
    question: "If the Flame Arrestor element becomes fouled with wax or debris, what 'hidden' danger is created?",
    options: ["The tank will become too cold", "The vent line will effectively be blocked, leading to overpressure during filling", "The oil will become contaminated", "The transfer pump will lose suction"],
    correctIndex: 1,
    explanation: "A blocked flame arrestor acts like a closed valve. If you keep pumping fluid in, the gas cannot escape, leading to a tank rupture."
  },
  {
    question: "What is the standard 'Safety Buffer' (Max Fill Level) for an atmospheric tank to prevent liquid carryover?",
    options: ["95%", "50%", "80%", "100% (until the high-level alarm sounds)"],
    correctIndex: 2,
    explanation: "80% is the industry standard to allow for gas breakout and thermal expansion without pushing liquid into the vent lines."
  },
  {
    question: "During an H2S survey, the tank hatch area measures 50 ppm H2S. What is the immediate requirement before proceeding with manual gauging?",
    options: ["Hold your breath while opening the hatch", "Wear a filtered dust mask", "Use Supplied Air Respirator (SCBA) and follow H2S safety protocols", "Stand upwind and use a long stick"],
    correctIndex: 2,
    explanation: "50 ppm is above the Short Term Exposure Limit (STEL). SCBA or supplied air is mandatory for life safety."
  },
  {
    question: "You notice the tank walls 'throbbing' or vibrating during a high-rate flow-back. What is the most likely cause?",
    options: ["The pump is running too fast", "Slug flow causing rapid pressure/vacuum cycles (the tank is struggling to breathe)", "The oil is boiling", "Normal operation for this tank type"],
    correctIndex: 1,
    explanation: "Vibration or 'panting' indicates the venting system cannot handle the volume of gas/liquid displacement occurring."
  },
  {
    question: "How does the 'Static Electricity' risk change when using a plastic/non-conductive hose for oil transfer?",
    options: ["It decreases because plastic is an insulator", "It increases significantly as static charge builds up and cannot dissipate safely to ground", "It stays the same", "Static electricity is only a risk with gas, not liquid"],
    correctIndex: 1,
    explanation: "Non-conductive hoses prevent the dissipation of static. Bonding and grounding are essential to prevent sparks."
  },
  {
    question: "What is the specific purpose of the 'Vacuum Breaker' internal to a Breather Valve?",
    options: ["To let gas out to the flare", "To let atmospheric air in if the internal pressure drops below a set point", "To measure the level of the tank", "To filter the crude oil"],
    correctIndex: 1,
    explanation: "The vacuum breaker is the 'emergency lung' that pulls air in to prevent the tank from being crushed."
  },
  {
    question: "Which environmental factor can cause a 'Thermal Vacuum' in a tank even if no liquid is being pumped out?",
    options: ["Heavy rain or a sudden cold front cooling the tank vapor space rapidly", "Extremely high noon-day sun", "High humidity", "Low wind speeds"],
    correctIndex: 0,
    explanation: "Rapid cooling shrinks the vapor inside. If the breather valve is stuck, this shrinkage creates a vacuum that can collapse the tank."
  },
  {
    question: "When offloading to a tanker truck, why do we limit the truck fill to 95%?",
    options: ["To save weight for road regulations", "To allow room for the fluid to expand as it warms up during transport", "To prevent the truck from tipping over", "To keep the truck pump primed"],
    correctIndex: 1,
    explanation: "Liquid expansion due to temperature changes can rupture a sealed truck tank if there is no 'ullage' (air space)."
  },
  {
    question: "What does 'Flashback' mean in the context of a storage tank?",
    options: ["When the pump reverses direction", "When a flame from the flare travels back through the vent line into the tank vapor space", "When the operator forgets a step", "When the oil changes color"],
    correctIndex: 1,
    explanation: "Flashback is the movement of a flame front through a flammable mixture. This is what the Flame Arrestor is designed to stop."
  },
  {
    question: "In a 'Closed Loop' well test, what is the role of the atmospheric tank?",
    options: ["It is the primary separator", "It acts as the final stage of separation and surge volume before disposal/sale", "It is used to store high-pressure gas for the compressor", "It is not used in closed-loop systems"],
    correctIndex: 1,
    explanation: "The tank allows any remaining gas to break out of the liquid at atmospheric pressure before the liquid is moved off-site."
  },
  {
    question: "You find liquid oil dripping from the Flame Arrestor vent. What should you do?",
    options: ["Ignore it; it's normal condensation", "Immediately stop flow, as this indicates overfilling or 'carryover' into the safety system", "Tighten the bolts on the arrestor", "Increase the Nitrogen purge rate"],
    correctIndex: 1,
    explanation: "Liquid in the arrestor blocks gas flow and creates a fire hazard. It means the tank level was likely too high or the gas flow was too violent."
  },
  {
    question: "What is 'H2S Scavenging' in a storage tank?",
    options: ["Using a vacuum to pull gas out", "Adding chemicals to the liquid to neutralize Hydrogen Sulfide", "Cleaning the tank with water", "Testing for gas with a hand-held monitor"],
    correctIndex: 1,
    explanation: "Scavengers are chemical agents that react with H2S to turn it into a non-toxic liquid byproduct."
  },
  {
    question: "Which of these is a 'Golden Rule' for tank vent lines?",
    options: ["They must have as many bends as possible", "They must NEVER be equipped with a check valve or block valve that can stay closed", "They should be as small as possible to save money", "They should be painted red"],
    correctIndex: 1,
    explanation: "A vent line must remain open and unobstructed. A closed valve on a vent line is a 'bomb' waiting to happen."
  },
  {
    question: "Before performing a 'Nitrogen Purge', what must be verified regarding the tank hatches?",
    options: ["They must be wide open", "They must be secured/closed to allow the N2 to displace the oxygen toward the vent line", "They must be removed from the tank", "They must be painted white"],
    correctIndex: 1,
    explanation: "To purge effectively, the system must be closed so the Nitrogen can push the Oxygen out through the designated vent path."
  },
  {
    question: "What is 'Slug Flow' and how does it affect tank safety?",
    options: ["Very slow moving oil; no risk", "Large bursts of gas and liquid; causes sudden pressure spikes in the tank", "A type of chemical additive", "The sound the pump makes"],
    correctIndex: 1,
    explanation: "Slugs cause 'surges.' An atmospheric tank cannot handle sudden high-volume gas expansion easily."
  },
  {
    question: "If an operator must climb to the top of the tank, what is the most critical atmospheric hazard?",
    options: ["Lack of wind", "Oxygen deficiency or Toxic gas (H2S/HC) clouds near the vents", "The height of the ladder", "The temperature of the metal"],
    correctIndex: 1,
    explanation: "Vents release gases that can be toxic or can displace oxygen. Operators should always wear personal gas monitors when climbing tanks."
  },
  {
    question: "A well test shows 150 STB/d of water and 1,000 STB/d of total liquid. What is the BS&W?",
    options: ["85%", "15%", "6.7%", "150%"],
    correctIndex: 1,
    explanation: "BS&W = (150 / 1,000) x 100 = 15%."
  },
  {
    question: "What do BS&W and WC both represent?",
    options: ["The gas share of total production", "The oil share of total liquid", "The sand content of the gas", "The water share of the total liquid production"],
    correctIndex: 3,
    explanation: "The field note says BS&W and WC represent the water share of total liquid production."
  },
  {
    question: "Water rate is 150 STB/d and oil rate is 850 STB/d. What is the water cut as a fraction?",
    options: ["0.1765", "1.5000", "0.1500", "0.8500"],
    correctIndex: 2,
    explanation: "WC = 150 / (150 + 850) = 0.1500."
  },
  {
    question: "A gross liquid rate of 1,000 STB/d has a water cut of 25%. What is the water rate?",
    options: ["750 STB/d", "25 STB/d", "250 STB/d", "2,500 STB/d"],
    correctIndex: 2,
    explanation: "Q_W = 1,000 x (25 / 100) = 250 STB/d."
  },
  {
    question: "For the same well (gross 1,000 STB/d, WC 25%), what is the net oil rate?",
    options: ["750 STB/d", "250 STB/d", "1,250 STB/d", "975 STB/d"],
    correctIndex: 0,
    explanation: "Q_oil = Gross - Q_W = 1,000 - 250 = 750 STB/d."
  },
  {
    question: "What is the oil cut when WC is 25%?",
    options: ["25%", "75%", "125%", "0.75%"],
    correctIndex: 1,
    explanation: "Oil Cut (%) = 100 - WC = 75%."
  },
  {
    question: "Gross liquid rate is 1,500 STB/d and water rate is 300 STB/d. What is the net oil rate?",
    options: ["1,200 STB/d", "1,800 STB/d", "5 STB/d", "450,000 STB/d"],
    correctIndex: 0,
    explanation: "Net Oil Rate = Gross - Water Rate = 1,500 - 300 = 1,200 STB/d."
  },
  {
    question: "For the same well (gross 1,500 STB/d, water 300 STB/d), what is the water cut?",
    options: ["80%", "5%", "20%", "0.2%"],
    correctIndex: 2,
    explanation: "WC = (300 / 1,500) x 100 = 20%."
  },
  {
    question: "What is the LWC formula used in the Pen Reading to LWC converter?",
    options: ["(Pen Reading x Chart Range) / DPU Range", "(Pen Reading / Chart Range) x DPU Range", "Pen Reading + Chart Range + DPU Range", "Chart Range / DPU Range"],
    correctIndex: 1,
    explanation: "The course page gives LWC = (Pen Reading / Chart Range) x DPU Range."
  },
  {
    question: "Pen reading is 40, chart range is 100 and DPU range is 200. What is the LWC?",
    options: ["20", "500", "8,000", "80"],
    correctIndex: 3,
    explanation: "LWC = (40 / 100) x 200 = 80."
  },
  {
    question: "In the argentometric titration formula, what is the number 35,450?",
    options: ["The sample volume in ml", "The milliequivalent weight of chlorine x 1,000, to give mg/L", "The AgNO3 strength in normality", "A pressure correction in psi"],
    correctIndex: 1,
    explanation: "The course page notes that 35,450 is the milliequivalent weight of chlorine multiplied by 1,000 to convert to mg/L. The value 1.84 belongs to the refractometer conversion, where ppm chlorides = mgNaCl / 1.84."
  },
  {
    question: "Titration data: A = 10 ml, B = 0.2 ml, N = 0.0282 and D = 1 ml. What is the chloride concentration?",
    options: ["979.70 mg/L", "1,000 mg/L", "9,796.96 mg/L", "9.80 mg/L"],
    correctIndex: 2,
    explanation: "Cl = (10 - 0.2) x 0.0282 x 35,450 / 1 = 9,796.96 mg/L."
  },
  {
    question: "What is the main purpose of using a standard measurement system?",
    options: ["To eliminate all field calculations", "To provide an accepted reference for measuring quantities", "To increase fluid pressure", "To reduce equipment size"],
    correctIndex: 1,
    explanation: "A standard provides an exact, agreed-upon quantity for comparison to ensure consistent measurement results."
  },
  {
    question: "Which of the following is commonly used as an oilfield pressure unit?",
    options: ["psi", "kg/m³", "°C", "bbl"],
    correctIndex: 0,
    explanation: "Pounds per square inch (psi) is a standard unit for measuring pressure in oilfield operations."
  },
  {
    question: "What does accuracy describe in measurement?",
    options: ["How consistently measurements are repeated", "How close a measurement is to the true or accepted value", "How quickly the measurement is taken", "The size of the measuring instrument"],
    correctIndex: 1,
    explanation: "Accuracy refers to how close a given measurement is to the true or accepted target value."
  },
  {
    question: "What does precision describe in measurement?",
    options: ["How close a measurement is to the true value", "How consistently repeated measurements agree with each other", "The maximum pressure of the equipment", "The volume of the fluid"],
    correctIndex: 1,
    explanation: "Precision describes the reproducibility or how closely repeated measurements agree with one another."
  },
  {
    question: "Which equation is used to calculate the volume of a cylinder?",
    options: ["V = L × W × H", "V = πr²h", "V = πr²h / 3", "V = F / A"],
    correctIndex: 1,
    explanation: "The volume of a standard cylinder is calculated using the geometric formula V = πr²h."
  },
  {
    question: "Which equation is used to calculate the volume of a cuboid?",
    options: ["V = πr²h", "V = πd²h / 4", "V = L × W × H", "V = MW × 0.052 × TVD"],
    correctIndex: 2,
    explanation: "Cuboid volume is found by multiplying its Length, Width, and Height (V = L × W × H)."
  },
  {
    question: "If the diameter of a cylinder is known, which equation can be used to calculate its volume?",
    options: ["V = πd²h / 4", "V = πdh", "V = d² / h", "V = πd² / 4h"],
    correctIndex: 0,
    explanation: "When utilizing diameter instead of radius, the cylinder volume formula becomes V = πd²h / 4."
  },
  {
    question: "Which equation converts Celsius temperature to Fahrenheit?",
    options: ["°F = 32 + (9/5)°C", "°F = °C + 273", "°F = °C − 32", "°F = °C × 5/9"],
    correctIndex: 0,
    explanation: "Fahrenheit is calculated from Celsius using the relation °F = 32 + (9/5)°C (or °F = 1.8°C + 32)."
  },
  {
    question: "What is the temperature above which a substance can no longer be liquefied by increasing pressure?",
    options: ["Bubble point", "Dew point", "Critical temperature", "Flash point"],
    correctIndex: 2,
    explanation: "Critical temperature is the threshold above which a gas cannot be liquefied regardless of how much pressure is applied."
  },
  {
    question: "What does Specific Gravity represent?",
    options: ["The pressure of a fluid", "The ratio of the density of a substance to the density of a reference substance", "The temperature of crude oil", "The volume of a substance"],
    correctIndex: 1,
    explanation: "Specific gravity is a dimensionless ratio comparing a substance's density against a standard reference (like water)."
  },
  {
    question: "At what reference temperature is API Gravity used to classify crude oil in the BOC material?",
    options: ["32°F", "60°F", "100°F", "212°F"],
    correctIndex: 1,
    explanation: "API gravity standardizes crude oil weight classifications at a baseline reference temperature of 60°F."
  },
  {
    question: "What is the relationship between API Gravity and Specific Gravity?",
    options: ["API = 131.5 − 141.5/SG", "API = 141.5/SG − 131.5", "API = SG × 141.5", "API = SG + 131.5"],
    correctIndex: 1,
    explanation: "The standard API formula is derived as API = (141.5 / SG) − 131.5."
  },
  {
    question: "A fluid with a pH less than 7 is classified as:",
    options: ["Basic", "Neutral", "Acidic", "Compressible"],
    correctIndex: 2,
    explanation: "On the pH scale, values below 7 indicate acidic solutions, while values above 7 are basic."
  },
  {
    question: "What is pressure?",
    options: ["Mass per unit volume", "Force per unit area", "Volume per unit time", "Temperature per unit volume"],
    correctIndex: 1,
    explanation: "Pressure is physically defined as the amount of force exerted per unit area (P = F / A)."
  },
  {
    question: "Which equation is used to calculate absolute pressure from gauge pressure?",
    options: ["Pabs = Pgauge − Patm", "Pabs = Pgauge × Patm", "Pabs = Patm + Pgauge", "Pabs = Patm / Pgauge"],
    correctIndex: 2,
    explanation: "Absolute pressure accounts for total pressure by adding atmospheric pressure to gauge pressure."
  },
  {
    question: "Which depth should be used in the hydrostatic pressure equation?",
    options: ["MD", "TVD", "Horizontal displacement", "Pipe length only"],
    correctIndex: 1,
    explanation: "True Vertical Depth (TVD) must always be used for hydrostatic pressure calculations, not Measured Depth (MD)."
  },
  {
    question: "What is the hydrostatic pressure of a 9.2 ppg fluid at 8,200 ft TVD?",
    options: ["820 psi", "392.29 psi", "3,922.88 psi", "4,095 psi"],
    correctIndex: 2,
    explanation: "Calculated using HP = 0.052 × MW × TVD -> 0.052 × 9.2 × 8200 = 3,922.88 psi."
  },
  {
    question: "What is the pressure gradient of a 13.5 ppg fluid?",
    options: ["0.052 psi/ft", "0.351 psi/ft", "0.702 psi/ft", "13.5 psi/ft"],
    correctIndex: 2,
    explanation: "Pressure gradient is Mud Weight × 0.052. For 13.5 ppg, 13.5 × 0.052 = 0.702 psi/ft."
  },
  {
    question: "A Transfer Centrifugal Pump is configured in the field as a booster pump upstream of a High-Pressure injection pump. What is its primary hydraulic function in this setup?",
    options: ["To artificially increase fluid velocity to induce turbulent flow patterns inside the high-pressure manifold.", "To provide adequate Net Positive Suction Head (NPSH) and eliminate the risk of cavitation inside the HP pump.", "To completely separate dissolved gas phases from the oil stream before compression occurs.", "To elevate fluid pressure significantly past its specific bubble point inside the suction manifold."],
    correctIndex: 1,
    explanation: "Booster pumps increase the pressure at the inlet of high-pressure pumps. This ensures the pressure stays well above the vapor pressure of the liquid, providing sufficient Net Positive Suction Head (NPSH) to prevent destructive cavitation."
  },
  {
    question: "During a tank circulation operation to mix H2S scavenger with sour crude, your objective is to safely lower the tank's H2S concentration. What is the standard target range expected before safe export or transport?",
    options: ["0.5 – 2.0 ppm", "15 – 30 ppm", "100 – 150 ppm", "500 – 800 ppm"],
    correctIndex: 1,
    explanation: "Circulating sour crude and mixing it with H2S scavenger chemicals aims to sweeten the oil by reducing toxic Hydrogen Sulfide concentration down to safe storage and shipping specs, typically between 15 and 30 ppm."
  },
  {
    question: "You switch the electric transfer pump ON, but the discharge pressure gauge remains static at 0 psig and no fluid circulation is observed. What is the most likely cause and immediate field remedy?",
    options: ["The casing is experiencing an air lock; shut down immediately and vent trapped air through the sample point or vent valve.", "The impeller is rotating backward; keep running while the electrician swaps the phases under full load.", "The fluid density is too high; throttle the suction valve completely to restrict fluid entry and save the motor.", "The mechanical seal oil cup is empty; pack the stuffing box with grease while the shaft is spinning."],
    correctIndex: 0,
    explanation: "Centrifugal pumps cannot pump air/gases due to low fluid density. If an air lock occurs, the pump will lose prime and show zero pressure. Running it dry will damage mechanical seals, so you must shut down immediately and vent the air."
  },
  {
    question: "When reviewing your setup's electrical safety and compliance in hazardous zones, which of the following mechanical or electrical components is recognized as a valid 'Energy Isolating Device' for LOTO?",
    options: ["The red emergency push-button selector switch on the local control panel.", "A closed pneumatic control valve controlled by an automated ESD loop.", "A manually operated electrical circuit breaker that physically breaks or blocks the power path.", "A green 'Stop' push button on the magnetic contactor housing."],
    correctIndex: 2,
    explanation: "An Energy Isolating Device must physically prevent the transmission or release of energy. Push buttons, control switches, and interlocks do not provide safe physical isolation; a manual circuit breaker or blind flange does."
  },
  {
    question: "You are setting up a water treatment circulation loop to neutralize acidic produced water inside a storage tank. If the initial water pH is highly acidic (around 3 to 5), what is the targeted pH range you are trying to achieve after proper chemical mixing?",
    options: ["pH 1 to 2", "pH 5 to 6", "pH 7 to 8", "pH 12 to 14"],
    correctIndex: 2,
    explanation: "The operational goal of acidic water treatment in well testing is to neutralize the fluid before disposal or further processing, bringing the pH up from an acidic 3–5 range to a neutral/slightly alkaline 7–8 range."
  },
  {
    question: "What distinguishes a Two-Stage Centrifugal Pump from a Single-Stage Centrifugal Pump when planning fluid transfer operations over long distances or high system resistance?",
    options: ["A two-stage pump contains two impellers arranged in series to deliver higher discharge pressure.", "A two-stage pump handles large solid drilling muds, while single-stage pumps only handle clean diesel.", "A two-stage pump uses a diesel engine drive and an electric motor simultaneously on the same shaft.", "A two-stage pump separates gas from oil in the first stage and pumps fluid in the second stage."],
    correctIndex: 0,
    explanation: "Single-stage pumps use one impeller for lower pressure targets. Two-stage centrifugal pumps line up two impellers in series: the discharge of the first stage feeds the suction of the second, doubling the pressure head output."
  },
  {
    question: "A Transfer Centrifugal Pump is running under normal, stable operating conditions to transfer fluid from an atmospheric tank. What is the typical expected discharge pressure range for this class of equipment?",
    options: ["0 – 10 psig", "50 – 150 psig", "600 – 1200 psig", "3000 – 5000 psig"],
    correctIndex: 1,
    explanation: "Transfer centrifugal pumps are designed to relocate fluids within a facility rather than inject them into high-pressure lines. Their typical operating discharge pressure ranges moderately between 50 to 150 psig (3.5 to 10 bar)."
  },
  {
    question: "The pump impeller must rotate in the exact direction indicated by the arrow on the casing. What is the direct consequence of running a centrifugal pump with an incorrect motor shaft rotation?",
    options: ["The discharge pressure will instantly double, rupturing the discharge hose.", "The mechanical seal will immediately begin pumping seal oil back into the suction line.", "Poor pump performance, highly reduced flow rates, low pressure head, and potential mechanical wear.", "The fluid will flow backward from the discharge line directly into the suction line."],
    correctIndex: 2,
    explanation: "If a motor is wired backward, the impeller still throws fluid outward due to centrifugal force, but the blades run backwards. This severely drops pump efficiency, resulting in low flow, low pressure, and friction damage."
  },
  {
    question: "When performing pre-operational checks on a transfer pump handling sour production streams containing H2S or CO2, what material constraint must the equipment satisfy?",
    options: ["It must comply with NACE sour-service standards using corrosion-resistant alloys and specialized elastomers.", "It must utilize standard ASTM A36 structural carbon steel configurations with soft paper gaskets.", "It must be constructed out of high-plasticity PVC composite piping layouts to completely eliminate spark hazards.", "It only requires Zone II explosion-proof lubrication systems, ignoring internal fluid chemistry completely."],
    correctIndex: 0,
    explanation: "Sour service environments containing H2S present a major risk for sulfide stress cracking (SSC) and hydrogen-induced cracking. Equipment must meet strict NACE standards, utilizing highly specific alloys and chemical-resistant elastomers."
  },
  {
    question: "What is the correct sequential procedure for transitioning a centrifugal pump from a stable bypass circulation loop to transferring fluid to its final destination (such as a loading truck or flare burner)?",
    options: ["Shut off the pump, close all valves completely, restart the pump, and quickly slap open the destination valve.", "Open the suction sample point, close the suction valve completely, and throttle the bypass line down.", "Keep the bypass valve wide open and restrict the main suction line valve until the discharge pressure surges to maximum.", "Open the discharge ball valve to the required destination gradually while simultaneously closing the bypass line valve."],
    correctIndex: 3,
    explanation: "To smoothly transition flow without shocking the piping system or deadheading the pump, you must open the path to the new destination gradually while systematically blocking off the bypass circulation loop."
  },
  {
    question: "What does a dosage in ppm mean in the formula?",
    options: ["It is multiplied by 42", "It is divided by 1440", "It is added to the flowrate", "It is divided by 1,000,000 to give a fraction"],
    correctIndex: 3,
    explanation: "The first step turns ppm into a decimal fraction."
  },
  {
    question: "What is the simplified injection rate formula?",
    options: ["Rate = Q x ppm x 0.0001104", "Rate = Q / ppm", "Rate = Q x 42", "Rate = ppm x 1440"],
    correctIndex: 0,
    explanation: "42 x 3785.41 / (1,000,000 x 1440) is about 0.0001104."
  },
  {
    question: "1,000 bpd with 20 ppm. What is the rate in cc/min?",
    options: ["About 22", "About 0.22", "About 2.2", "About 220"],
    correctIndex: 2,
    explanation: "1,000 x 20 x 0.0001104 = 2.21."
  },
  {
    question: "What does antifoam do?",
    options: ["Breaks emulsions", "Stops scale", "Reduces foam in the separator and prevents carry-over", "Cools the gas"],
    correctIndex: 2,
    explanation: "This is the purpose listed on the course page."
  },
  {
    question: "What does a demulsifier do?",
    options: ["Breaks the oil-water emulsion", "Reduces foam", "Stops scale", "Raises the API"],
    correctIndex: 0,
    explanation: "It lets water separate quickly and cleanly from crude."
  },
  {
    question: "What does a scale inhibitor do?",
    options: ["Breaks emulsions", "Reduces foam", "Measures flow", "Prevents mineral scale in flowlines and surface equipment"],
    correctIndex: 3,
    explanation: "This is its purpose on the course page."
  },
  {
    question: "A 6 in liner, 12 in stroke and 95% efficiency give about how many bbl/stk?",
    options: ["About 0.997", "About 0.0097", "About 0.0997", "About 9.97"],
    correctIndex: 2,
    explanation: "0.000243 x 36 x 12 x 0.95 = 0.0997."
  },
  {
    question: "How do you get gallons per stroke?",
    options: ["Divide by 42", "Multiply bbl/stk by 42", "Multiply by 1440", "Multiply by SPM"],
    correctIndex: 1,
    explanation: "There are 42 gallons in a barrel."
  },
  {
    question: "How do you get the flow rate in BPM?",
    options: ["bbl/stk / SPM", "bbl/stk x 42", "1 / bbl/stk", "bbl/stk x SPM"],
    correctIndex: 3,
    explanation: "Output per stroke times strokes per minute."
  },
  {
    question: "What is the bottoms up time formula?",
    options: ["Flowrate x volume", "Volume x 1440", "Flowrate / 1440 / 60", "Tubing volume / flowrate in bpm"],
    correctIndex: 3,
    explanation: "T(min) = V / q(bpm)."
  },
  {
    question: "How do you convert bpd to bpm?",
    options: ["Divide by 24", "Divide by 1440", "Multiply by 1440", "Divide by 60"],
    correctIndex: 1,
    explanation: "There are 1,440 minutes in a day."
  },
  {
    question: "4,320 bpd and a 180 bbl tubing volume give a bottoms up time of?",
    options: ["30 min", "120 min", "60 min", "24 min"],
    correctIndex: 2,
    explanation: "4,320 / 1440 = 3 bpm, and 180 / 3 = 60."
  },
  {
    question: "In which unit is the required choke size given?",
    options: ["Inches only", "Millimetres", "psi", "1/64 inch"],
    correctIndex: 3,
    explanation: "The course page says the choke size is expressed in 1/64-inch units."
  },
  {
    question: "What area ratio results from changing a choke bean from 16/64 to 24/64?",
    options: ["2.25", "1.5", "3.0", "0.44"],
    correctIndex: 0,
    explanation: "The area ratio is (24 / 16)^2 = 2.25."
  },
  {
    question: "The initial flow is 600 STB/d and the bean goes from 16/64 to 24/64. What is the estimated new flow?",
    options: ["900 STB/d", "1,200 STB/d", "1,350 STB/d", "267 STB/d"],
    correctIndex: 2,
    explanation: "Q2 = 2.25 x 600 = 1,350 STB/d."
  },
  {
    question: "What does the bean flow scaling assume?",
    options: ["Gas flow at critical pressure ratio only", "A bean larger than 64/64", "No change in choke bean", "Comparable pressures upstream and downstream and steady liquid flow"],
    correctIndex: 3,
    explanation: "The field note says the simple area-ratio scaling assumes comparable upstream and downstream pressures and single-phase, steady liquid behavior."
  },
  {
    question: "In the choke calibration, which erosion status applies when the effective choke is more than 3.0/64 larger than nominal?",
    options: ["Intact: normal operations", "Washed Out: switch to the standby choke and inspect the bean", "Worn: monitor for sand", "Calibrated: no action"],
    correctIndex: 1,
    explanation: "The guide on the course page says a variance of more than 3.0/64 is Washed Out, with the action to switch to the standby choke and inspect the bean."
  },
  {
    question: "To prevent condensation in the fuel tank, what level should be maintained at the end of the day?",
    options: ["50%", "75%", "90%", "100%"],
    correctIndex: 2,
    explanation: "Maintaining a 90% fuel level minimizes the air space where moisture can condense into liquid water."
  },
  {
    question: "What safety device is mandatory for all air rubber hose connections to prevent injury?",
    options: ["Padlocks", "Whip checks / Safety clips", "Zip ties", "Check valves"],
    correctIndex: 1,
    explanation: "Whip checks prevent the hose from lashing out violently if a coupling fails under pressure."
  },
  {
    question: "On an Ingersoll Rand unit, which key position is used specifically for the grid heater?",
    options: ["Position 0", "Position 1", "Position 2", "Position 3"],
    correctIndex: 2,
    explanation: "Position 2 activates the grid heater for cold starts; Position 3 is for cranking the engine."
  },
  {
    question: "What is the required specific gravity (density) for the engine cooling system?",
    options: ["1.00 (62.4 PCF)", "1.07 (66.8 PCF)", "1.25 (78.0 PCF)", "0.90 (56.1 PCF)"],
    correctIndex: 1,
    explanation: "The manual specifies a specific gravity of 1.07 to ensure proper thermal regulation and corrosion protection."
  },
  {
    question: "How long should the engine warm up before pressing the service air switch to load?",
    options: ["1 minute", "2 minutes", "5 minutes", "10 minutes"],
    correctIndex: 2,
    explanation: "A 5-minute warm-up ensures oil circulation and stable temperatures before the unit is placed under load."
  },
  {
    question: "At what temperature threshold is the Atlas Copco unit ready to be loaded via the F1 button?",
    options: ["25°C (77°F)", "40°C (104°F)", "60°C (140°F)", "80°C (176°F)"],
    correctIndex: 1,
    explanation: "The control logic requires the coolant to reach 40°C (104°F) before allowing the compressor to load."
  },
  {
    question: "How long should the engine idle for cooling during a normal shutdown procedure?",
    options: ["1 minute", "2-3 minutes", "5-10 minutes", "15 minutes"],
    correctIndex: 2,
    explanation: "A 5-10 minute idle period allows the turbocharger and engine components to cool down gradually."
  },
  {
    question: "What must be manually operated if an Atlas Copco unit runs out of fuel?",
    options: ["The hand pump", "The service valve", "The battery switch", "The E-stop button"],
    correctIndex: 0,
    explanation: "The hand pump must be used to prime the fuel system and remove air until the system is under pressure."
  },
  {
    question: "What is the immediate result of pressing the red mushroom (Emergency Stop) button?",
    options: ["The engine idles", "The service valve closes", "All power (hardware/software) is terminated", "The battery disconnects"],
    correctIndex: 2,
    explanation: "The E-stop kills all power immediately to prevent injury or further mechanical damage."
  },
  {
    question: "To reset after an Emergency Stop, what must be done after unlocking the physical button?",
    options: ["Turn key to Position 3", "Press the Start button", "Press F1 to reset the software lock", "Refuel the engine"],
    correctIndex: 2,
    explanation: "Once the physical button is unlocked, the operator must press F1 on the panel to clear the software lock."
  },
  {
    question: "How many automatic cranking attempts will the Atlas Copco make before a 'START FAILURE' message?",
    options: ["1 attempt", "3 attempts", "5 attempts", "10 attempts"],
    correctIndex: 2,
    explanation: "The system is programmed to attempt starting 5 times before timing out and requiring a manual reset."
  },
  {
    question: "The regulating valve should be set to how many bar higher than the required working pressure?",
    options: ["0.5 bar", "1 bar", "2 bar (29 psi)", "5 bar"],
    correctIndex: 2,
    explanation: "A 2 bar buffer ensures the system can maintain the required pressure consistently under load."
  },
  {
    question: "Where should the compressor oil level be visually checked before operation?",
    options: ["Engine dipstick", "Radiator cap", "Sight glass on the separator tank", "Air discharge valve"],
    correctIndex: 2,
    explanation: "The compressor oil (different from engine oil) is monitored via the sight glass on the separator tank."
  },
  {
    question: "Why is it forbidden to operate the compressor with the enclosure doors open?",
    options: ["To prevent theft", "To keep it clean", "To prevent overheating and high noise exposure", "To save fuel"],
    correctIndex: 2,
    explanation: "Closed doors are critical for directing cooling airflow and protecting operators from high noise levels."
  },
  {
    question: "What is the first step in the Pre-Operational Checks & Safety sequence?",
    options: ["Turn key to Position 1", "Perform a 'walk-around' inspection", "Check the battery", "Press the F1 button"],
    correctIndex: 1,
    explanation: "A walk-around inspection identifies leaks, loose fittings, or safety hazards before the unit is energized."
  },
  {
    question: "Which message confirms the system is energized and ready after the initial power-on self-test?",
    options: ["UNCONTROLLED STOP", "READY TO START", "LOADING", "STOPPING"],
    correctIndex: 1,
    explanation: "'READY TO START' indicates the digital logic is clear and the engine can be cranked."
  },
  {
    question: "On an Ingersoll Rand unit, what should you do as soon as the engine starts?",
    options: ["Hold key in Position 3", "Release the key switch", "Turn key to Position 0", "Press the F1 button"],
    correctIndex: 1,
    explanation: "The key should be released so it returns to Position 1 to avoid damaging the starter motor."
  },
  {
    question: "What is the required status of the battery isolation switch for operation?",
    options: ["OFF", "ON", "Locked", "Removed"],
    correctIndex: 1,
    explanation: "The isolation switch must be turned to 'ON' to provide battery power to the control panel and starter."
  },
  {
    question: "What is the primary safety rule regarding the engine when refueling?",
    options: ["Keep it at full speed", "Keep it at idle", "It must be switched OFF", "Keep the doors open"],
    correctIndex: 2,
    explanation: "The engine must be completely OFF to prevent ignition of fuel vapors from heat or sparks."
  },
  {
    question: "If the Atlas Copco does not reach warm-up temperature within 5 minutes, what state does it enter?",
    options: ["Automatic loading", "Emergency stop", "Idle / NO LOADED status", "System restart"],
    correctIndex: 2,
    explanation: "The unit will default to an idle/no-load state to protect the engine if it fails to reach operating temperature."
  },
  {
    question: "During indirect fired heater operation, why must the shell be filled with water/glycol above the coil level before start-up?",
    options: ["To increase fuel efficiency", "To prevent coil overheating and failure", "To reduce separator pressure", "To increase gas flow rate"],
    correctIndex: 1,
    explanation: "The water/glycol bath is the heat transfer medium. Without proper level, the coil will overheat and can be permanently damaged due to direct burner heat exposure."
  },
  {
    question: "What is the main purpose of glycol in the heater shell?",
    options: ["Increase gas density", "Prevent freezing and improve heat transfer stability", "Increase burner flame temperature", "Reduce coil pressure drop"],
    correctIndex: 1,
    explanation: "Glycol is added to prevent freezing in cold environments and to stabilize heat transfer properties of the heating medium."
  },
  {
    question: "What is the primary risk if heater coil pressure exceeds design limits?",
    options: ["Improved separation efficiency", "Coil rupture and catastrophic release of hydrocarbons", "Increased burner efficiency", "Reduced temperature control accuracy"],
    correctIndex: 1,
    explanation: "Coils are high-pressure rated (5K–10K psi). Overpressure can lead to mechanical failure and dangerous hydrocarbon release."
  },
  {
    question: "Why is a bypass line used during heater operation?",
    options: ["To increase heating efficiency", "To protect the coil from pressure and allow flow diversion", "To increase gas production", "To reduce fuel consumption"],
    correctIndex: 1,
    explanation: "The bypass line allows fluid to avoid the heater during unstable conditions or startup, protecting the coil from sudden pressure/temperature changes."
  },
  {
    question: "What is the typical function of the burner in an indirect fired heater?",
    options: ["Directly heat the oil flow", "Heat the water/glycol bath", "Compress the gas stream", "Measure flow rate"],
    correctIndex: 1,
    explanation: "The burner heats the water/glycol bath, which then indirectly transfers heat to the process fluid through the coil."
  },
  {
    question: "What is the consequence of insufficient air in burner combustion?",
    options: ["High efficiency flame", "Orange flame and black smoke formation", "Increased gas flow stability", "Lower coil pressure"],
    correctIndex: 1,
    explanation: "Insufficient air leads to incomplete combustion, producing soot (black smoke) and unstable flame conditions."
  },
  {
    question: "What is the purpose of the ESD system in heater operation?",
    options: ["Increase heating rate", "Automatically shut down system during unsafe conditions", "Increase fuel pressure", "Improve gas quality"],
    correctIndex: 1,
    explanation: "ESD (Emergency Shutdown) protects equipment and personnel by stopping operation during abnormal or hazardous conditions."
  },
  {
    question: "Why is purging required before burner ignition?",
    options: ["To increase flame size", "To remove accumulated gas and prevent explosion risk", "To increase coil temperature", "To stabilize water level"],
    correctIndex: 1,
    explanation: "Purging removes any trapped combustible gases in the firebox, reducing explosion risk during ignition."
  },
  {
    question: "What is the main reason for maintaining water level above the coil?",
    options: ["To reduce pressure drop", "To ensure proper heat transfer and prevent coil damage", "To increase gas velocity", "To improve fuel injection"],
    correctIndex: 1,
    explanation: "Proper water level ensures full immersion of coils in heating medium, preventing overheating and maintaining efficiency."
  },
  {
    question: "What is the role of thermostat in heater operation?",
    options: ["Measure gas flow", "Control burner operation based on temperature setpoint", "Increase coil pressure", "Open bypass valve automatically"],
    correctIndex: 1,
    explanation: "The thermostat controls burner on/off cycles to maintain desired water bath temperature."
  },
  {
    question: "What happens if bypass valve is left closed during startup?",
    options: ["Improved heating efficiency", "Possible overpressure and thermal shock in coil", "Lower fuel consumption", "Increased separator efficiency"],
    correctIndex: 1,
    explanation: "Closing bypass during unstable conditions can trap expanding fluid causing overpressure and thermal stress."
  },
  {
    question: "What is the purpose of the chimney stack?",
    options: ["Increase burner pressure", "Safely vent combustion gases", "Increase oil temperature", "Reduce coil pressure"],
    correctIndex: 1,
    explanation: "The chimney safely releases combustion gases away from personnel and equipment."
  },
  {
    question: "What is the effect of excessive primary air in burner?",
    options: ["Stable flame", "Blasting and unstable flame", "Higher oil rate", "Lower pressure drop"],
    correctIndex: 1,
    explanation: "Too much air disrupts combustion stability, causing flame turbulence and inefficiency."
  },
  {
    question: "What is the purpose of pressure testing the coil?",
    options: ["Increase production rate", "Verify mechanical integrity under design pressure", "Reduce fuel consumption", "Increase gas quality"],
    correctIndex: 1,
    explanation: "Pressure testing ensures the coil can safely handle operational pressures without leaks or failure."
  },
  {
    question: "Why is diesel burner rotation direction important?",
    options: ["To control pressure drop", "To ensure proper air flow and combustion efficiency", "To increase oil API", "To reduce coil thickness"],
    correctIndex: 1,
    explanation: "Incorrect rotation affects air supply from blower, leading to poor combustion."
  },
  {
    question: "What is the consequence of overheating the water bath above design temperature?",
    options: ["Improved efficiency", "Boiling, pressure increase, and potential safety shutdown", "Lower gas flow", "Increased shrinkage factor"],
    correctIndex: 1,
    explanation: "Overheating can cause boiling, pressure spikes, and automatic shutdown via HTSD system."
  },
  {
    question: "Why must fuel gas pressure be regulated in stages?",
    options: ["To increase flame color", "To ensure stable and safe burner operation", "To reduce oil viscosity", "To increase coil diameter"],
    correctIndex: 1,
    explanation: "Multi-stage regulation ensures safe delivery pressure for pilot and main burner systems."
  },
  {
    question: "What is the main function of the firebox?",
    options: ["Directly heat oil stream", "Contain combustion and transfer heat indirectly", "Measure flow rate", "Increase gas pressure"],
    correctIndex: 1,
    explanation: "Firebox contains combustion gases and transfers heat to the water bath safely."
  },
  {
    question: "What is the result of poor fuel/air ratio adjustment?",
    options: ["Higher efficiency always", "Smoke, soot, or flame instability", "Lower pressure drop", "Higher API gravity"],
    correctIndex: 1,
    explanation: "Incorrect ratio leads to incomplete combustion and unstable burner operation."
  },
  {
    question: "What is the key safety requirement before switching flow into heater coil?",
    options: ["Increase burner pressure", "Ensure proper pressure testing, stable temperature, and correct valve alignment", "Close all valves", "Increase gas flow rate"],
    correctIndex: 1,
    explanation: "All safety checks and valve alignment must be verified before introducing process flow into the heater."
  },
  {
    question: "What is the primary purpose of a Diverter Manifold?",
    options: ["To increase fluid pressure", "To separate oil from water", "To divert flow to different destinations", "To measure flow rate"],
    correctIndex: 2,
    explanation: "A Diverter Manifold is designed to direct fluid flow from one inlet to different outlet paths."
  },
  {
    question: "How many ball valves are typically installed in a Diverter Manifold?",
    options: ["One", "Minimum of two", "Four", "Six"],
    correctIndex: 1,
    explanation: "A standard Diverter Manifold consists of a minimum of two ball valves."
  },
  {
    question: "What shape is commonly formed by a Diverter Manifold?",
    options: ["L Shape", "Y Shape", "T Shape", "U Shape"],
    correctIndex: 2,
    explanation: "A Diverter Manifold typically consists of one inlet and two outlets forming a T configuration."
  },
  {
    question: "Which Hammer Union type is commonly used on Diverter Manifolds?",
    options: ["Figure 100", "Figure 206", "Figure 602", "Figure 1502"],
    correctIndex: 2,
    explanation: "Figure 602 Hammer Unions are commonly used on 3-inch and 4-inch Diverter Manifolds."
  },
  {
    question: "What is the typical Cold Working Pressure (CWP) range of a Diverter Manifold?",
    options: ["500-1000 psig", "1000-1500 psig", "2000-3000 psig", "5000-10000 psig"],
    correctIndex: 2,
    explanation: "Most Diverter Manifolds used in SWT applications are rated between 2000 and 3000 psig."
  },
  {
    question: "What factor determines which flare boom should be selected?",
    options: ["Separator pressure", "Oil API gravity", "Wind direction", "Tank level"],
    correctIndex: 2,
    explanation: "The selected flare boom depends primarily on prevailing wind direction."
  },
  {
    question: "Where can a Diverter Manifold be installed on a Test Separator?",
    options: ["Gas outlet only", "Oil outlet only", "Water outlet only", "Water, oil, and gas outlet lines"],
    correctIndex: 3,
    explanation: "Diverter Manifolds may be used on water, oil, and gas outlet lines."
  },
  {
    question: "Why is a Diverter Manifold used during meter calibration?",
    options: ["To increase separator pressure", "To divert flow to surge or calibration tanks", "To remove sand from flow", "To reduce temperature"],
    correctIndex: 1,
    explanation: "Flow is diverted to a calibration system for meter verification and testing."
  },
  {
    question: "Can a Diverter Manifold be installed between storage tanks?",
    options: ["No", "Only between gas tanks", "Only on offshore rigs", "Yes"],
    correctIndex: 3,
    explanation: "It can be installed between oil tanks or water tanks to facilitate transfer operations."
  },
  {
    question: "Where is a Diverter Manifold permitted on a High Pressure Pump system?",
    options: ["Discharge side only", "Suction side only", "Both suction and discharge", "Neither side"],
    correctIndex: 1,
    explanation: "A Diverter Manifold may be installed on the suction side of an HP Pump."
  },
  {
    question: "Why should a Diverter Manifold never be installed on the discharge side of an HP Pump?",
    options: ["It reduces flow rate", "It increases temperature", "High pressure may damage the manifold", "It causes cavitation"],
    correctIndex: 2,
    explanation: "High discharge pressure may shear off or damage the manifold, creating serious safety hazards."
  },
  {
    question: "What does the term 'sheared off' mean?",
    options: ["Flow diverted", "Pressure reduced", "Broken away due to force", "Valve lubricated"],
    correctIndex: 2,
    explanation: "Sheared off means physically broken or separated due to excessive force or pressure."
  },
  {
    question: "Before opening the well, what should be checked on the Diverter Manifold?",
    options: ["Tank level", "Valve free movement", "Pump speed", "Oil viscosity"],
    correctIndex: 1,
    explanation: "Both ball valves should be cycled fully open and fully closed to verify proper operation."
  },
  {
    question: "When the valve indicator is aligned with the flow direction, the valve is:",
    options: ["Closed", "Partially open", "Open", "Locked"],
    correctIndex: 2,
    explanation: "An indicator parallel to flow direction indicates an open ball valve."
  },
  {
    question: "When the valve indicator is perpendicular to the flow direction, the valve is:",
    options: ["Open", "Closed", "Partially open", "Damaged"],
    correctIndex: 1,
    explanation: "A crossing indicator position means the ball valve is closed."
  },
  {
    question: "What is the purpose of the interlocking handle system?",
    options: ["Increase pressure", "Increase flow rate", "Ensure one valve remains open while the other is closed", "Reduce valve maintenance"],
    correctIndex: 2,
    explanation: "The interlock prevents both valves from being closed simultaneously."
  },
  {
    question: "What problem does the interlocking system help prevent?",
    options: ["Corrosion", "Back pressure to the separator", "Wax formation", "Scale buildup"],
    correctIndex: 1,
    explanation: "The system prevents dangerous back pressure and operator error."
  },
  {
    question: "Before diverting gas to a flare boom, what must be confirmed?",
    options: ["Separator level", "Tank temperature", "Pilot flame is burning", "Pump discharge pressure"],
    correctIndex: 2,
    explanation: "The propane or diesel pilot flame must be active before directing gas to the burner."
  },
  {
    question: "In an emergency, which equipment should be used to shut in the well?",
    options: ["Diverter Manifold", "Storage Tank Valve", "Breather Valve", "Choke Manifold or ESD System"],
    correctIndex: 3,
    explanation: "Well shut-in should be performed using proper well-control equipment."
  },
  {
    question: "Why should a pipe wrench or cheater bar never be used on Diverter Manifold hand wheels?",
    options: ["It reduces pressure", "It may damage valve components", "It causes corrosion", "It changes flow direction"],
    correctIndex: 1,
    explanation: "Excessive force can damage the valve stem, hand wheel, seats, and sealing components."
  },
  {
    question: "What is the primary function of the Emergency Shutdown (ESD) system?",
    options: ["To increase the flow rate during high demand", "To quickly close the well in emergencies like fire or pipe breaks", "To separate oil and gas more efficiently", "To provide electricity to the rig floor"],
    correctIndex: 1,
    explanation: "The ESD system is a safety barrier designed to isolate the well immediately during critical events to protect personnel and equipment."
  },
  {
    question: "Which of the following is NOT a component of the ESD control skid?",
    options: ["Hydraulic pump and oil tank", "Air reservoir", "Three hose reels", "Three-phase separator vessel"],
    correctIndex: 3,
    explanation: "The ESD skid contains the control components like pumps, tanks, and reels; the separator is a separate piece of process equipment."
  },
  {
    question: "The ESD system supports fail-safe hydraulic actuators with pressure requirements not exceeding:",
    options: ["1440 psi", "3000 psi", "6000 psi", "15000 psi"],
    correctIndex: 2,
    explanation: "The system is designed to handle single-action fail-safe hydraulic actuators up to a maximum of 6000 psi."
  },
  {
    question: "What specifically triggers the high-pressure pilot in an ESD system?",
    options: ["A decrease in ambient temperature", "Flowline pressure rising above a preset threshold", "A signal from the burner head", "Opening the choke manifold fixed bean"],
    correctIndex: 1,
    explanation: "The high-pressure pilot monitors the flowline; if pressure spikes (e.g., due to a plugged choke), it triggers a shutdown."
  },
  {
    question: "When a pilot or ESD station is triggered, what is the first physical action that occurs in the control logic?",
    options: ["The hydraulic pump starts running", "Air pressure is vented from the system", "The separator pressure increases", "The hydraulic oil tank is drained"],
    correctIndex: 1,
    explanation: "The system uses a 'fail-safe' air loop; venting the air pressure causes the interface valve to release hydraulic pressure and close the well."
  },
  {
    question: "What is the typical operating air pressure for high/low pilots and ESD push-button stations?",
    options: ["30 psi", "150 psi", "600 psi", "1440 psi"],
    correctIndex: 0,
    explanation: "While the air vessel stores higher pressure, the pilot loop and remote stations typically operate at 30 psi."
  },
  {
    question: "What is the role of the interface valve in the ESD panel?",
    options: ["To mix oil and gas before they reach the burner", "To control the release of hydraulic pressure from the actuator", "To measure the temperature of the air reservoir", "To act as a primary check valve for the flowline"],
    correctIndex: 1,
    explanation: "The interface valve is the link between the air control signal and the hydraulic power, releasing hydraulic pressure to close the valve when triggered."
  },
  {
    question: "Where is the Surface Safety Valve (SSV) usually located?",
    options: ["Downstream of the oil manifold", "Inside the hydraulic oil tank", "Upstream of the choke manifold", "At the very end of the flare boom"],
    correctIndex: 2,
    explanation: "The SSV is positioned upstream of the choke manifold to provide primary isolation of the well during an emergency shutdown."
  },
  {
    question: "What is the purpose of the air vessel (tank) located on the ESD panel?",
    options: ["To provide breathing air for the crew", "To store 150 psi air pressure for system operation", "To cool down the hydraulic oil", "To collect gas samples from the well"],
    correctIndex: 1,
    explanation: "The air vessel stores the compressed air (typically at 150 psi) required to maintain the control loop pressure."
  },
  {
    question: "Which component is used to quickly dump the air pressure to speed up the shutdown process?",
    options: ["Bypass valve", "Check valve", "Quick exhaust valve", "Hydraulic pump"],
    correctIndex: 2,
    explanation: "The quick exhaust valve allows air to vent rapidly from the lines, ensuring the shutdown happens as fast as possible."
  },
  {
    question: "What is the primary purpose of an Emergency Shutdown Valve (ESDV)?",
    options: ["Increase production rate", "Control sand production", "Provide emergency well flow isolation", "Measure well pressure"],
    correctIndex: 2,
    explanation: "The ESDV is designed as a safety device to isolate well flow during emergency conditions."
  },
  {
    question: "What type of valve is an ESDV?",
    options: ["Butterfly valve", "Hydraulic-operated gate valve", "Globe valve", "Check valve"],
    correctIndex: 1,
    explanation: "The ESDV is a hydraulic pressure-controlled gate valve."
  },
  {
    question: "What does 'Fail Close' mean for an ESDV?",
    options: ["The valve stays open when pressure is lost", "The valve automatically closes when hydraulic pressure is lost", "The valve locks in position", "The valve requires manual closure"],
    correctIndex: 1,
    explanation: "The spring-loaded actuator closes the valve automatically if hydraulic pressure is removed."
  },
  {
    question: "Where is the ESDV normally installed?",
    options: ["Downstream of flare burner", "Upstream of the choke manifold", "Inside separator vessel", "After storage tanks"],
    correctIndex: 1,
    explanation: "The ESDV is commonly located upstream of the choke manifold for emergency well isolation."
  },
  {
    question: "Which system normally controls the ESDV?",
    options: ["Chemical injection pump", "Control panel and pressure pilots", "Diesel engine governor", "Transfer pump"],
    correctIndex: 1,
    explanation: "The valve is normally controlled through an ESD control panel and Hi/Lo pressure pilots."
  },
  {
    question: "What is the recommended hydraulic operating pressure when opening the ESDV?",
    options: ["500-1000 psig", "1000-1500 psig", "1500-2000 psig", "5000-7000 psig"],
    correctIndex: 2,
    explanation: "Normal hydraulic pressure required to open the valve is between 1500 and 2000 psig."
  },
  {
    question: "Before opening the ESDV, the hydraulic oil reservoir should be approximately:",
    options: ["20% full", "40% full", "60% full", "80% full"],
    correctIndex: 3,
    explanation: "The reservoir should be about 80% full to ensure sufficient hydraulic oil for operation."
  },
  {
    question: "What air supply pressure is required for proper ESD panel operation?",
    options: ["20-40 psig", "50-60 psig", "80-100 psig", "150-200 psig"],
    correctIndex: 2,
    explanation: "The ESD control panel typically requires 80-100 psig air supply."
  },
  {
    question: "What should be monitored while opening the ESDV?",
    options: ["Tank level only", "Separator temperature only", "Valve stem movement and pressure gauge", "Flare burner flame color"],
    correctIndex: 2,
    explanation: "The operator should observe stem movement and hydraulic pressure to verify opening."
  },
  {
    question: "Why is a hydraulic quick release system recommended in gas wells?",
    options: ["To increase production", "To reduce fuel consumption", "To provide fast emergency shutdown", "To reduce separator pressure"],
    correctIndex: 2,
    explanation: "Quick release systems allow rapid valve closure within approximately 5-10 seconds."
  },
  {
    question: "What should the hydraulic pressure gauge read when the ESDV is fully closed?",
    options: ["500 psig", "1000 psig", "2000 psig", "0 psig"],
    correctIndex: 3,
    explanation: "A reading of 0 psig indicates hydraulic pressure has been released and the valve is closed."
  },
  {
    question: "How can the ESDV be manually closed?",
    options: ["Increase hydraulic pressure", "Turn SERVICE position to SHUT IN", "Open the choke manifold", "Close the separator outlet"],
    correctIndex: 1,
    explanation: "Changing the manifold indicator from SERVICE to SHUT IN releases hydraulic pressure."
  },
  {
    question: "What causes the ESDV to physically close after hydraulic pressure is released?",
    options: ["Gravity", "Gas pressure", "Internal spring force", "Flow pressure"],
    correctIndex: 2,
    explanation: "The spring-loaded actuator automatically forces the valve closed."
  },
  {
    question: "Which button initiates a total emergency shutdown?",
    options: ["Green Reset Button", "Start Button", "Yellow Alarm Button", "Red Emergency Shutdown Button"],
    correctIndex: 3,
    explanation: "Pressing the red ESD button initiates a complete emergency shutdown."
  },
  {
    question: "Why should pressure be equalized across the ESDV before reopening after a shutdown?",
    options: ["To increase production", "To reduce erosion and valve damage", "To reduce separator level", "To improve flare efficiency"],
    correctIndex: 1,
    explanation: "Pressure equalization protects the gate from erosion and excessive stress."
  },
  {
    question: "What should be closed before re-energizing the ESD system after an emergency shutdown?",
    options: ["Storage tank valve", "Chemical pump", "Choke manifold", "Flare ignitor"],
    correctIndex: 2,
    explanation: "Closing the choke manifold helps prevent hammer effect and pressure surges."
  },
  {
    question: "What standard are ESDV gate valves manufactured in compliance with?",
    options: ["ISO 9001", "API Standards", "ASTM D86", "NACE SP0502"],
    correctIndex: 1,
    explanation: "ESDV gate valves are manufactured according to API standards."
  },
  {
    question: "Which connection type may be used on ESDVs?",
    options: ["Victaulic only", "Camlock only", "Hammer Union or Greylock", "PVC threaded connection"],
    correctIndex: 2,
    explanation: "ESDVs are commonly supplied with Hammer Union or Greylock connections."
  },
  {
    question: "For which service are hydraulic-operated ESDVs certified?",
    options: ["Fresh water service only", "Steam service only", "Sour service (H₂S/CO₂)", "Food grade service"],
    correctIndex: 2,
    explanation: "The valves are certified for sour service applications containing H₂S and CO₂."
  },
  {
    question: "What is the full load current formula for a three phase motor?",
    options: ["kW x V x PF", "kW x 1000 / (sqrt(3) x V x PF)", "kW / V", "V x PF / kW"],
    correctIndex: 1,
    explanation: "It uses the line-to-line voltage and the power factor."
  },
  {
    question: "What is the approximate start up current?",
    options: ["About 2 x FLC", "About equal to FLC", "About 0.5 x FLC", "About 7 x the full load current"],
    correctIndex: 3,
    explanation: "The course page uses 7 as the start up multiple."
  },
  {
    question: "What does V mean in the 3 Phase formula?",
    options: ["Line-to-line voltage", "Volume", "Velocity", "Valve opening"],
    correctIndex: 0,
    explanation: "The symbols table defines V as line-to-line voltage."
  },
  {
    question: "How many hp is 100 kW (using 1 kW = 1.34 hp)?",
    options: ["About 75", "About 746", "About 134", "About 13"],
    correctIndex: 2,
    explanation: "The course page uses 1 kW = 1.34 hp."
  },
  {
    question: "What is 1 hp in kW?",
    options: ["0.7457", "1.34", "7.457", "0.0746"],
    correctIndex: 0,
    explanation: "The hp to kW conversion uses 0.7457."
  },
  {
    question: "What is the voltage drop formula for a cable?",
    options: ["K x L / I", "L x I / R", "K x R x 1000", "K x L x I x R / 1000"],
    correctIndex: 3,
    explanation: "R is in ohm per km and L in meters."
  },
  {
    question: "What is K for a 3-phase system?",
    options: ["2", "1.732", "1", "3"],
    correctIndex: 1,
    explanation: "K is 1.732 for 3-phase and 2 for 1-phase."
  },
  {
    question: "Which law is used to find the wire cable length between the king post and the boom tie point?",
    options: ["The law of sines", "The law of cosines", "Boyle law", "Ohm law"],
    correctIndex: 1,
    explanation: "c = sqrt(a^2 + b^2 - 2ab cos C)."
  },
  {
    question: "a = 40 ft, b = 30 ft and C = 90 degrees. What is c?",
    options: ["70 ft", "10 ft", "35 ft", "50 ft"],
    correctIndex: 3,
    explanation: "With cos 90 = 0, c = sqrt(1600 + 900) = 50."
  },
  {
    question: "What is the transducer scaling formula?",
    options: ["Vraw x Range", "Range / Vraw", "(Vmax - Vraw) x Range", "(Vraw - Vzero) x Range / (Vmax - Vzero)"],
    correctIndex: 3,
    explanation: "It is a linear scale from the zero value to the max value."
  },
  {
    question: "A 10,000 psi WHP channel reads 3 V with a 1 to 5 V signal. What is the reading?",
    options: ["3,000 psi", "5,000 psi", "7,500 psi", "2,500 psi"],
    correctIndex: 1,
    explanation: "(3 - 1) x 10,000 / 4 = 5,000."
  },
  {
    question: "What does WHT stand for in the channel guide?",
    options: ["Well head tension", "Water hold time", "Wellhead temperature", "Wire height tie"],
    correctIndex: 2,
    explanation: "WHT has a typical range of 0 to 400 F."
  },
  {
    question: "What is the primary function of an ESD (Emergency Shut Down) Panel?",
    options: ["Measure well production rates", "Control and shut down hydraulic safety valves during emergencies", "Separate oil, gas, and water", "Inject chemicals into the well"],
    correctIndex: 1,
    explanation: "The ESD Panel controls hydraulic safety valves and provides emergency shutdown capability to protect personnel, equipment, and the environment."
  },
  {
    question: "Which valve is a subsurface safety valve controlled by the ESD Panel?",
    options: ["MV", "WV", "SCSSSV", "ESDV"],
    correctIndex: 2,
    explanation: "SCSSSV stands for Surface Controlled Sub-Surface Safety Valve."
  },
  {
    question: "What supplies hydraulic control line pressure to the SCSSSV?",
    options: ["Electric motor pump", "Air driven diaphragm pump", "Centrifugal pump", "Gear pump"],
    correctIndex: 1,
    explanation: "The SCSSSV hydraulic pressure is supplied by an air driven diaphragm pump."
  },
  {
    question: "What is the working pressure of the SCSSSV diaphragm pump?",
    options: ["3,000 psi", "5,000 psi", "7,000 psi", "10,000 psi"],
    correctIndex: 3,
    explanation: "The air-driven diaphragm pump has a 10,000 psi working pressure."
  },
  {
    question: "At what pilot line pressure will the ESD Panel automatically trip?",
    options: ["20 psi", "30 psi", "40 psi", "80 psi"],
    correctIndex: 2,
    explanation: "The panel trips when pilot line pressure falls below 40 psi."
  },
  {
    question: "What happens when pilot pressure drops below 40 psi?",
    options: ["The pump speeds up", "Hydraulic pressure is dumped and safety valves close", "The separator shuts down", "The flare ignites automatically"],
    correctIndex: 1,
    explanation: "Loss of pilot pressure causes hydraulic pressure to dump and safety valves to close."
  },
  {
    question: "What is the purpose of the hydraulic relief valve?",
    options: ["Increase pump speed", "Reduce air consumption", "Limit hydraulic pressure to a safe value", "Open the SCSSSV"],
    correctIndex: 2,
    explanation: "The hydraulic relief valve protects the system by limiting hydraulic pressure."
  },
  {
    question: "A typical hydraulic relief valve setting is:",
    options: ["1,000 psi", "3,000 psi", "6,000 psi", "10,000 psi"],
    correctIndex: 2,
    explanation: "The hydraulic relief valve is commonly set at approximately 6,000 psi."
  },
  {
    question: "What is the purpose of the air relief valve installed before the air-driven pump?",
    options: ["Increase hydraulic pressure", "Prevent output pressure exceeding 7,000 psi", "Reduce pilot pressure", "Control flare temperature"],
    correctIndex: 1,
    explanation: "The air relief valve prevents excessive hydraulic output pressure."
  },
  {
    question: "Before opening hydraulic valves, the hydraulic regulator should initially be turned:",
    options: ["Clockwise", "Anticlockwise", "Halfway open", "Locked"],
    correctIndex: 1,
    explanation: "Turning the regulator anticlockwise prevents hydraulic oil from passing through initially."
  },
  {
    question: "Approximately what pressure is required to fully open hydraulic actuator valves?",
    options: ["500 psi", "1,500 psi", "3,000 psi", "10,000 psi"],
    correctIndex: 2,
    explanation: "Hydraulic actuator valves are normally opened at approximately 3,000 psi."
  },
  {
    question: "What indicates that a hydraulic actuator valve is fully open?",
    options: ["Pump stops cycling", "Pilot pressure reaches 80 psi", "Full stem movement is observed", "Reservoir level increases"],
    correctIndex: 2,
    explanation: "Complete stem travel confirms the valve is fully open."
  },
  {
    question: "What is the recommended pilot supply pressure range?",
    options: ["10–20 psi", "20–40 psi", "50–80 psi", "100–150 psi"],
    correctIndex: 2,
    explanation: "Pilot pressure should be maintained between 50 and 80 psi."
  },
  {
    question: "What is the purpose of the 'Push to Close - Pull to Reset' relay valve?",
    options: ["Control separator level", "Reset or shut down the ESD system", "Control flare ignition", "Regulate pump speed"],
    correctIndex: 1,
    explanation: "The relay valve is used to either shut down or reset the ESD system."
  },
  {
    question: "What must be achieved before releasing the relay valve lock pin?",
    options: ["Pilot pressure above 40 psi", "Hydraulic pressure above 10,000 psi", "Tank level above 50%", "Separator pressure below 10 psi"],
    correctIndex: 0,
    explanation: "Pilot pressure must exceed 40 psi before releasing the lock pin."
  },
  {
    question: "What is the quickest way to shut down all hydraulic safety valves?",
    options: ["Close the separator outlet", "Turn off the generator", "Push the RED Emergency Stop Button", "Close the flare valve"],
    correctIndex: 2,
    explanation: "Pressing the RED Emergency Stop Button initiates a complete shutdown."
  },
  {
    question: "How can a single hydraulic valve such as MV be closed without tripping the entire panel?",
    options: ["Press the emergency button", "Disconnect the pilot line", "Operate the manual ball valve", "Reduce separator pressure"],
    correctIndex: 2,
    explanation: "The manual ball valve can isolate and close a specific hydraulic valve."
  },
  {
    question: "What indicates that a hydraulic valve is fully closed?",
    options: ["Pilot pressure reaches 80 psi", "Pump stops", "The stem is fully extended outward", "The reservoir becomes full"],
    correctIndex: 2,
    explanation: "A fully extended stem indicates the valve is completely closed."
  },
  {
    question: "Before restarting the ESD system after a shutdown, what must be done?",
    options: ["Drain the oil reservoir", "Release the RED ESD button and reset ESD stations", "Replace the pilot line", "Close all valves"],
    correctIndex: 1,
    explanation: "The emergency button must be released and all ESD stations reset."
  },
  {
    question: "What is the function of Hi/Lo Pressure Pilots connected to the ESD loop?",
    options: ["Increase well production", "Control chemical injection", "Automatically initiate shutdown during abnormal pressures", "Measure tank volume"],
    correctIndex: 2,
    explanation: "Hi/Lo pressure pilots automatically trigger an ESD shutdown when unsafe process pressures occur."
  },
  {
    question: "What is the primary purpose of an Eruption Manifold?",
    options: ["To separate oil, gas, and water", "To control and direct flow from a dual-string well", "To measure flow rate", "To store well fluids"],
    correctIndex: 1,
    explanation: "The Eruption Manifold is used to control, monitor, and direct flow from dual-string wells (Long String and Short String)."
  },
  {
    question: "Which standard ensures suitability for H₂S and CO₂ service?",
    options: ["API 6A", "ASME VIII", "NACE MR-0175", "ISO 9001"],
    correctIndex: 2,
    explanation: "NACE MR-0175 specifies material requirements for sour service applications containing H₂S."
  },
  {
    question: "How many inlet connections are provided on the Eruption Manifold?",
    options: ["2", "3", "4", "6"],
    correctIndex: 2,
    explanation: "The manifold is equipped with four 2-inch Figure 1502 threaded inlet connections."
  },
  {
    question: "What is the size of the outlet connection?",
    options: ["2-inch Fig 1502", "3-inch Fig 1502 Wing", "4-inch Fig 1502", "6-inch Flange"],
    correctIndex: 1,
    explanation: "The outlet connection is a 3-inch Figure 1502 Wing connection."
  },
  {
    question: "One major benefit of the Eruption Manifold is:",
    options: ["Increasing separator pressure", "Eliminating the need for choke manifolds", "Switching between strings without disconnecting pipework", "Reducing reservoir pressure"],
    correctIndex: 2,
    explanation: "The manifold saves time by allowing operators to switch between strings without disconnecting lines."
  },
  {
    question: "Which valve is associated with the Long String (LS)?",
    options: ["Valve 1", "Valve 3", "Valve 5", "Valve 8"],
    correctIndex: 3,
    explanation: "Valve No. 8 is used for Long String operations."
  },
  {
    question: "Which valve is associated with the Short String (SS)?",
    options: ["Valve 1", "Valve 5", "Valve 6", "Valve 8"],
    correctIndex: 1,
    explanation: "Valve No. 5 is connected to the Short String."
  },
  {
    question: "Before flowing the Long String, which valves should be opened?",
    options: ["Valves 1 and 5", "Valves 2 and 8", "Valves 3 and 6", "Valves 4 and 8"],
    correctIndex: 1,
    explanation: "The Long String flow path is established by opening Valves 2 and 8."
  },
  {
    question: "Before flowing the Short String, which valves should be opened?",
    options: ["Valves 1 and 5", "Valves 2 and 8", "Valves 3 and 6", "Valves 4 and 8"],
    correctIndex: 0,
    explanation: "The Short String flow path requires opening Valves 1 and 5."
  },
  {
    question: "What should be recorded before opening the Choke Manifold for testing?",
    options: ["Fluid temperature", "Pump speed", "WHCIP", "Tank level"],
    correctIndex: 2,
    explanation: "WHCIP (Wellhead Closed-In Pressure) must be recorded before starting the test."
  },
  {
    question: "What does WHCIP stand for?",
    options: ["Wellhead Closed-In Pressure", "Working Hydraulic Control Injection Pressure", "Wellhead Choke Isolation Point", "Wellhead Control Injection Procedure"],
    correctIndex: 0,
    explanation: "WHCIP means Wellhead Closed-In Pressure."
  },
  {
    question: "When shutting in the Long String, what should be closed first?",
    options: ["Valve 8", "Valve 2", "Choke Manifold", "Valve 6"],
    correctIndex: 2,
    explanation: "The Choke Manifold must be closed before isolating the string."
  },
  {
    question: "Which valve is commonly used as the Pump/Kill line connection?",
    options: ["Valve 1", "Valve 3", "Valve 6", "Valve 8"],
    correctIndex: 2,
    explanation: "Valve No. 6 is used for pumping acid or kill fluids."
  },
  {
    question: "To pump acid into the Short String, which valves are opened?",
    options: ["1, 5, and 8", "5, 3, and 6", "2, 4, and 8", "1, 3, and 6"],
    correctIndex: 1,
    explanation: "Acid pumping to the Short String requires opening Valves 5, 3, and 6."
  },
  {
    question: "To pump acid into the Long String, which valves are opened?",
    options: ["5, 3, and 6", "1, 5, and 6", "8, 4, and 6", "2, 3, and 6"],
    correctIndex: 2,
    explanation: "Acid pumping to the Long String requires opening Valves 8, 4, and 6."
  },
  {
    question: "What is Bullheading?",
    options: ["Measuring pressure with a DWT", "Pumping fluid directly into the well against formation pressure", "Flowing both strings simultaneously", "Opening all manifold valves"],
    correctIndex: 1,
    explanation: "Bullheading is the process of pumping fluid into the well without allowing return flow to surface."
  },
  {
    question: "Which annulus pressures can be monitored using the Eruption Manifold?",
    options: ["Only A Annulus", "Only B Annulus", "A and B Annulus", "Separator Pressure Only"],
    correctIndex: 2,
    explanation: "The manifold allows monitoring of both Production-Casing (A) and Casing-Casing (B) annulus pressures."
  },
  {
    question: "Why should valves be opened gradually?",
    options: ["To increase production rate", "To reduce pressure shock and equipment damage", "To improve fluid separation", "To increase WHCIP"],
    correctIndex: 1,
    explanation: "Gradual valve operation prevents pressure surges and protects equipment."
  },
  {
    question: "Which statement is TRUE regarding Eruption Manifold operations?",
    options: ["Valve 8 is connected to the Short String", "Valve 5 is connected to the Long String", "Valve 6 is used as a Pump/Kill connection", "The Choke Manifold must remain open during shut-in operations"],
    correctIndex: 2,
    explanation: "Valve No. 6 is commonly used for acid pumping and well kill operations."
  },
  {
    question: "What is the primary cause of oil shrinkage during production?",
    options: ["Water evaporation from crude oil", "Gas liberation due to pressure reduction", "Increase in oil viscosity", "Thermal expansion of oil"],
    correctIndex: 1,
    explanation: "Oil shrinkage occurs when pressure decreases and dissolved gas comes out of solution, reducing the oil volume."
  },
  {
    question: "Why does dissolved gas separate from crude oil in a separator?",
    options: ["Because oil temperature decreases", "Because oil density increases", "Because separator pressure is lower than reservoir pressure", "Because water content increases"],
    correctIndex: 2,
    explanation: "Gas remains dissolved at high reservoir pressure. When pressure drops in the separator, gas flashes out of solution."
  },
  {
    question: "What does the Oil Formation Volume Factor (Bo) represent?",
    options: ["Gas production rate", "Reservoir pressure", "Relationship between reservoir and stock tank oil volume", "Oil viscosity correction"],
    correctIndex: 2,
    explanation: "Bo is used to convert reservoir oil volume into stock tank oil volume."
  },
  {
    question: "What does a high API gravity indicate?",
    options: ["Heavy oil", "High water cut", "Light crude oil", "Low gas content"],
    correctIndex: 2,
    explanation: "Higher API gravity means lighter crude oil, which often contains more dissolved gas."
  },
  {
    question: "Why is gas gravity corrected during shrinkage calculations?",
    options: ["To account for temperature effects", "To remove water contamination", "To increase separator efficiency", "To calculate API gravity"],
    correctIndex: 0,
    explanation: "Gas density changes with temperature, so gas gravity is corrected to standard conditions."
  },
  {
    question: "What is separator pressure?",
    options: ["Pressure inside the storage tank", "Pressure inside the reservoir", "Operating pressure where oil and gas are separated", "Pipeline design pressure"],
    correctIndex: 2,
    explanation: "Separator pressure is the pressure maintained inside the separator during fluid processing."
  },
  {
    question: "What happens when separator pressure decreases?",
    options: ["Less gas is released", "Oil volume increases", "More gas is liberated from the oil", "Bo decreases to zero"],
    correctIndex: 2,
    explanation: "Lower separator pressure causes more dissolved gas to flash out of the oil."
  },
  {
    question: "What effect does increasing separator temperature generally have?",
    options: ["Less gas liberation", "More gas liberation and more shrinkage", "No effect on oil volume", "Increased water production"],
    correctIndex: 1,
    explanation: "Higher temperatures encourage dissolved gas to leave the oil, increasing shrinkage."
  },
  {
    question: "Why is observed temperature included in the calculation?",
    options: ["To estimate water cut", "To calculate separator efficiency", "To correct gas gravity", "To determine API gravity"],
    correctIndex: 2,
    explanation: "Observed temperature is used to adjust gas gravity to standard reference conditions."
  },
  {
    question: "What is the purpose of the parameter F1?",
    options: ["Estimate reservoir permeability", "Relate separator pressure and corrected gas gravity", "Calculate water production", "Determine oil density"],
    correctIndex: 1,
    explanation: "F1 is an intermediate parameter derived from separator pressure and corrected gas gravity."
  },
  {
    question: "What does F2 primarily account for?",
    options: ["Gas compressibility", "Separator temperature", "Oil gravity correction", "Reservoir pressure depletion"],
    correctIndex: 2,
    explanation: "F2 adjusts the calculation based on oil API gravity."
  },
  {
    question: "What is Fvol used for?",
    options: ["Estimating the volume factor input to Bo calculation", "Calculating separator pressure", "Determining water cut", "Calculating gas flow rate"],
    correctIndex: 0,
    explanation: "Fvol combines pressure, temperature, and fluid properties into a volume-related parameter."
  },
  {
    question: "How is Shrinkage Factor calculated?",
    options: ["Bo × API", "Bo ÷ API", "1 ÷ Bo", "API ÷ Bo"],
    correctIndex: 2,
    explanation: "Shrinkage Factor is calculated as the inverse of the Oil Formation Volume Factor."
  },
  {
    question: "What does a shrinkage factor of 0.85 indicate?",
    options: ["Oil volume increases by 15%", "1 separator barrel becomes 0.85 stock tank barrels", "No gas is liberated", "Separator pressure is too low"],
    correctIndex: 1,
    explanation: "A shrinkage factor of 0.85 means 15% of the volume is lost due to gas liberation."
  },
  {
    question: "What does a shrinkage factor of 0.95 typically indicate?",
    options: ["Large gas liberation", "Extremely heavy oil", "Very little gas liberated", "Separator malfunction"],
    correctIndex: 2,
    explanation: "A value close to 1 means only a small amount of gas has come out of solution."
  },
  {
    question: "Where is shrinkage factor commonly used?",
    options: ["Drilling mud calculations", "Well testing and production reporting", "Cement design", "Pipeline pigging operations"],
    correctIndex: 1,
    explanation: "Shrinkage factor is widely used in well testing and oil production calculations."
  },
  {
    question: "Why is laboratory PVT analysis preferred over empirical correlations?",
    options: ["It is faster", "It requires fewer measurements", "It provides more accurate fluid properties", "It eliminates separator requirements"],
    correctIndex: 2,
    explanation: "PVT analysis directly measures fluid behavior under controlled laboratory conditions."
  },
  {
    question: "Can shrinkage factor normally be greater than 1?",
    options: ["Yes, always", "Only for water wells", "No, because oil volume decreases after gas liberation", "Only for heavy oils"],
    correctIndex: 2,
    explanation: "Shrinkage factors are typically less than 1 because separator oil volume is larger than stock tank oil volume."
  },
  {
    question: "What is Stock Tank Oil (STO)?",
    options: ["Oil inside the separator", "Oil remaining after gas separation at atmospheric conditions", "Reservoir oil before production", "Oil mixed with produced water"],
    correctIndex: 1,
    explanation: "Stock Tank Oil is stabilized oil after gas has been removed and atmospheric conditions are reached."
  },
  {
    question: "Why is shrinkage important for production reporting?",
    options: ["It estimates drilling costs", "It calculates separator efficiency only", "It converts measured separator volumes into actual saleable oil volumes", "It determines reservoir pressure"],
    correctIndex: 2,
    explanation: "Production reports are based on stock tank oil volumes, making shrinkage correction essential."
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Marking Language", "Home Tool Markup Language"],
    correctIndex: 0,
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "font-weight"],
    correctIndex: 2,
    explanation: "The correct property for text size is font-size."
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: ["getElementByClass", "querySelectorAll", "getElementById", "getElementsByName"],
    correctIndex: 2,
    explanation: "getElementById selects a single element by its ID."
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style System"],
    correctIndex: 1,
    explanation: "CSS means Cascading Style Sheets."
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correctIndex: 2,
    explanation: "The <script> tag is used to embed JavaScript."
  },
  {
    question: "Which array method adds an item to the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctIndex: 0,
    explanation: "push() adds an item to the end of the array."
  },
  {
    question: "What is the correct HTML5 doctype?",
    options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<!DOCTYPE HTML PUBLIC>", "<!DOCTYPE XHTML>"],
    correctIndex: 1,
    explanation: "<!DOCTYPE html> is the standard HTML5 doctype."
  },
  {
    question: "Which CSS layout is best for a 2D grid?",
    options: ["Flexbox", "Float", "Grid", "Position"],
    correctIndex: 2,
    explanation: "CSS Grid is designed for 2D layouts."
  },
  {
    question: "What does JSON stand for?",
    options: ["Java Script Object Notation", "Java Source Object Notation", "Java Standard Output Network", "Java Script Output Name"],
    correctIndex: 0,
    explanation: "JSON stands for JavaScript Object Notation."
  },
  {
    question: "Which event runs when a button is clicked?",
    options: ["mouseover", "onchange", "onclick", "onload"],
    correctIndex: 2,
    explanation: "The onclick event runs when a button is clicked."
  },
  {
    question: "A well flows 2 MMSCF/day of gas and 800 STB/day of oil. Using GOR = (Gas Rate x 10^6) / Oil Rate, what is the GOR?",
    options: ["1,600 scf/STB", "2,500 scf/STB", "400 scf/STB", "25,000 scf/STB"],
    correctIndex: 1,
    explanation: "GOR = (2 x 1,000,000) / 800 = 2,500 scf/STB."
  },
  {
    question: "An OGR calculation uses an oil rate of 40 STB/day and a gas rate of 2,000,000 scf/day. What is the OGR?",
    options: ["80 STB/MMSCF", "0.02 STB/MMSCF", "20 STB/MMSCF", "200 STB/MMSCF"],
    correctIndex: 2,
    explanation: "OGR = (40 x 1,000,000) / 2,000,000 = 20 STB/MMSCF."
  },
  {
    question: "A gas-condensate well produces 150 STB/d of condensate and 5 MMSCFD of gas. What is the CGR?",
    options: ["750 STB/MMSCF", "30 STB/MMSCF", "3 STB/MMSCF", "300 STB/MMSCF"],
    correctIndex: 1,
    explanation: "CGR = Condensate Rate (STB/d) / Gas Rate (MMSCFD) = 150 / 5 = 30 STB/MMSCF."
  },
  {
    question: "A CGR of 25 STB/MMSCF is converted to the Gas to Condensate Ratio (GCR). What is the GCR?",
    options: ["40,000 scf/STB", "25,000,000 scf/STB", "4,000 scf/STB", "0.000025 scf/STB"],
    correctIndex: 0,
    explanation: "GCR = 1,000,000 / CGR = 1,000,000 / 25 = 40,000 scf/STB."
  },
  {
    question: "In the Vasquez & Beggs correlation used by the calculators, which set of constants applies when the oil API is above 30?",
    options: ["C1 = 0.0178, C2 = 1.187, C3 = 23.931", "C1 = 0.0362, C2 = 1.0937, C3 = 25.724", "C1 = 1, C2 = 1, C3 = 1", "C1 = 0.00005912, C2 = 114.7, C3 = 460"],
    correctIndex: 0,
    explanation: "For API above 30 the calculators use C1 = 0.0178, C2 = 1.187 and C3 = 23.931. For API of 30 or less they use 0.0362, 1.0937 and 25.724."
  },
  {
    question: "Which ratio, in STB/MMSCF, describes the liquid yield of a gas-condensate reservoir?",
    options: ["CGR", "GOR", "OGR for a dry gas", "Rs"],
    correctIndex: 0,
    explanation: "The CGR is the condensate-to-gas ratio, expressed in STB/MMSCF."
  },
  {
    question: "In the choke nipple calculation, how is the absolute pressure found?",
    options: ["WHP in psig x 14.7", "WHP in psig - 14.7", "WHP in psig / 14.7", "WHP in psig + 14.7"],
    correctIndex: 3,
    explanation: "P_abs = WHP + 14.7, and T_abs = WHT + 460."
  },
  {
    question: "WHP = 1,000 psig, choke = 32/64, gas gravity 0.7 and WHT = 100 F. What is the choke nipple gas rate?",
    options: ["About 578 MSCF/D", "About 57,770 MSCF/D", "About 5,777 MSCF/D", "About 112 MSCF/D"],
    correctIndex: 2,
    explanation: "Q = 112.72 x 1,014.7 / sqrt(0.7 x 560) = 5,776.9, about 5,777 MSCF/D."
  },
  {
    question: "What is the area of a 32/64 inch choke?",
    options: ["0.5 sq in", "0.0491 sq in", "0.1963 sq in", "0.7854 sq in"],
    correctIndex: 2,
    explanation: "The reference table on the course page gives 0.1963 sq in for 32/64 (0.500 inch)."
  },
  {
    question: "The Quick Gas Rate Estimation uses a coefficient of 0.11817 times what?",
    options: ["The choke size", "The choke size squared", "The wellhead pressure", "The gas gravity"],
    correctIndex: 1,
    explanation: "The coefficient = 0.11817 x choke^2."
  },
  {
    question: "Which unit does the Quick Gas Rate Estimation give its result in?",
    options: ["MMscf/day", "bbl/d", "mscf/day", "psig"],
    correctIndex: 2,
    explanation: "The course page gives the estimated dry gas rate in mscf/day."
  },
  {
    question: "What is the equivalent twin choke size formula?",
    options: ["Deq = d1 + d2", "Deq = sqrt(d1^2 + d2^2)", "Deq = d1 x d2", "Deq = d1 / d2"],
    correctIndex: 1,
    explanation: "The areas add, so the diameters combine as a square root of the sum of squares."
  },
  {
    question: "Twin chokes of 16/64 and 24/64 give about what equivalent size?",
    options: ["About 40/64", "About 8/64", "About 20/64", "About 29/64"],
    correctIndex: 3,
    explanation: "sqrt(256 + 576) = 28.8."
  },
  {
    question: "What is the choke / pressure-based gas volume formula?",
    options: ["Q = P x (d64/64)^2 x 24", "Q = P / d64", "Q = d64 x 24", "Q = P x 64"],
    correctIndex: 0,
    explanation: "The course page uses pressure in psia, the choke in inches squared and 24."
  },
  {
    question: "1,000 psia and a 32/64 choke. What is Q by that method?",
    options: ["600", "2,400", "6,000", "12,000"],
    correctIndex: 2,
    explanation: "1,000 x 0.25 x 24 = 6,000."
  },
  {
    question: "What is the constant 2122 used for?",
    options: ["The shrinkage factor", "The twin choke", "The gas velocity and volume formulas", "The DPU chart"],
    correctIndex: 2,
    explanation: "It appears in V = 2122 x Bg x Q / d^2."
  },
  {
    question: "What does Bg mean in the gas velocity formula?",
    options: ["Gas formation volume factor", "Gas gravity", "Barrels of gas", "Back pressure gauge"],
    correctIndex: 0,
    explanation: "The symbols table lists Bg as the gas formation volume factor in ft3/scf."
  },
  {
    question: "What is API at 60 F from the SG at 60 F?",
    options: ["141.5 / SG - 131.5", "141.5 x SG", "SG / 131.5", "131.5 / SG"],
    correctIndex: 0,
    explanation: "This is the standard API conversion."
  },
  {
    question: "The actual DPU reading is 60, the chart range is 100 and the DPU range is 150. What is the chart reading?",
    options: ["90", "60", "40", "25"],
    correctIndex: 2,
    explanation: "60 x 100 / 150 = 40."
  },
  {
    question: "What is the main purpose of the H₂S Sweetening Unit?",
    options: ["Increase oil viscosity for storage", "Remove Hydrogen Sulfide (H₂S) from produced fluids", "Separate water from crude oil only", "Increase gas pressure in flow lines"],
    correctIndex: 1,
    explanation: "The unit is designed to reduce H₂S concentration in produced fluids to safe levels (0–20 ppm) using chemical injection."
  },
  {
    question: "What type of signal does the H₂S analyzer send to the PLC?",
    options: ["Digital ON/OFF signal", "Hydraulic pressure signal", "4–20 mA analog signal", "Wireless RF signal"],
    correctIndex: 2,
    explanation: "The H₂S probe transmits a 4–20 mA signal proportional to the H₂S concentration to the PLC system."
  },
  {
    question: "What happens when H₂S concentration increases in the process stream?",
    options: ["PLC stops the pump immediately", "Chemical injection is reduced", "PLC increases chemical injection rate", "System switches to manual mode"],
    correctIndex: 2,
    explanation: "The PLC automatically increases scavenger chemical dosing to reduce higher H₂S levels."
  },
  {
    question: "What is the role of the PLC in the sweetening system?",
    options: ["Manually operate valves only", "Monitor temperature only", "Control chemical injection based on H₂S signal", "Increase gas production rate"],
    correctIndex: 2,
    explanation: "The PLC receives sensor input and automatically controls the injection pump to maintain safe H₂S levels."
  },
  {
    question: "What is the function of EMO-XXXX chemical?",
    options: ["Increase gas flow rate", "Act as corrosion inhibitor only", "Scavenge and neutralize H₂S", "Separate oil and water phases"],
    correctIndex: 2,
    explanation: "EMO-XXXX is an organic scavenger chemical used to neutralize Hydrogen Sulfide in produced fluids."
  },
  {
    question: "Why is instrument air required for the system?",
    options: ["To cool down the PLC", "To operate pneumatic metering pump", "To increase H₂S detection accuracy", "To pressurize storage tanks"],
    correctIndex: 1,
    explanation: "Instrument air drives the pneumatic pump that injects chemical into the process line."
  },
  {
    question: "What is the safe H₂S concentration target after treatment?",
    options: ["50–100 ppm", "0–20 ppm", "200–300 ppm", "Above 500 ppm"],
    correctIndex: 1,
    explanation: "The system aims to reduce H₂S to an acceptable operational limit of 0–20 ppm."
  },
  {
    question: "What is the first step before operating the system?",
    options: ["Start chemical injection immediately", "Verify all P&ID connections", "Open all valves fully", "Increase air pressure to maximum"],
    correctIndex: 1,
    explanation: "All mechanical, electrical, and process connections must be verified according to P&ID before operation."
  },
  {
    question: "What happens if the PLC is switched OFF during operation?",
    options: ["System continues automatically", "Chemical injection continues at max rate", "Automatic control and injection stop", "H₂S analyzer increases sensitivity"],
    correctIndex: 2,
    explanation: "Turning off the PLC stops automatic control and halts injection operations."
  },
  {
    question: "What is the purpose of flushing the system with water during shutdown?",
    options: ["Increase chemical concentration", "Cool down the pump", "Remove residual chemicals and prevent corrosion", "Increase flow rate in lines"],
    correctIndex: 2,
    explanation: "Flushing removes leftover scavenger chemicals and prevents internal corrosion or blockage."
  },
  {
    question: "Why must the system be depressurized before disconnection?",
    options: ["To increase pump efficiency", "To avoid pressure buildup in storage tanks", "To prevent sudden release of hazardous pressure", "To improve chemical mixing"],
    correctIndex: 2,
    explanation: "Depressurization prevents uncontrolled release of pressure, protecting personnel and equipment."
  },
  {
    question: "What is the function of the H₂S probe?",
    options: ["Measure temperature of crude oil", "Detect H₂S concentration in the process stream", "Control pump speed directly", "Separate gas from liquid"],
    correctIndex: 1,
    explanation: "The probe continuously measures H₂S levels and sends a proportional signal to the PLC."
  },
  {
    question: "What is the correct PLC mode during normal operation?",
    options: ["Manual override mode", "Shutdown mode", "Auto mode", "Calibration mode only"],
    correctIndex: 2,
    explanation: "The system operates in AUTO mode for continuous and automatic chemical injection control."
  },
  {
    question: "What is the role of the pneumatic metering pump?",
    options: ["Measure H₂S concentration", "Inject scavenger chemical into process line", "Separate oil phases", "Cool down process stream"],
    correctIndex: 1,
    explanation: "The pump injects controlled amounts of scavenger chemical based on PLC signals."
  },
  {
    question: "What is the main risk if H₂S is not treated?",
    options: ["Increased oil density", "Corrosion and toxicity hazards", "Improved flow rate", "Reduced pump efficiency only"],
    correctIndex: 1,
    explanation: "Untreated H₂S causes severe corrosion and poses serious health risks to personnel."
  },
  {
    question: "What is the purpose of ESD integration in the system?",
    options: ["Increase chemical injection rate", "Provide emergency shutdown in hazardous situations", "Improve oil quality only", "Increase pump stroke frequency"],
    correctIndex: 1,
    explanation: "ESD ensures safe shutdown during emergency conditions to protect people and equipment."
  },
  {
    question: "What is required before system start-up?",
    options: ["Open discharge valves fully", "Fill chemical tank and verify connections", "Bypass PLC control", "Increase pressure beyond limits"],
    correctIndex: 1,
    explanation: "All system checks, chemical filling, and connection verification must be completed before start-up."
  },
  {
    question: "What happens when H₂S levels decrease?",
    options: ["Pump stops completely", "PLC increases injection", "PLC reduces chemical injection", "System switches to emergency mode"],
    correctIndex: 2,
    explanation: "The PLC reduces dosing to optimize chemical usage when H₂S levels are low."
  },
  {
    question: "Why is chemical injection point located upstream?",
    options: ["To reduce pump vibration", "To ensure better mixing time and efficiency", "To increase pressure drop", "To cool down the fluid"],
    correctIndex: 1,
    explanation: "Upstream injection allows better mixing and more effective H₂S scavenging."
  },
  {
    question: "What is the final objective of the sweetening process?",
    options: ["Increase gas production pressure", "Reduce H₂S to safe acceptable limits", "Remove all hydrocarbons from flow", "Increase chemical consumption"],
    correctIndex: 1,
    explanation: "The main goal is to reduce H₂S to safe levels while maintaining operational efficiency and safety."
  },
  {
    question: "What is the primary purpose of a Portable High Pressure Strainer Package?",
    options: ["Increase gas production rate", "Heat the process stream", "Remove solids from produced hydrocarbons", "Separate oil and water"],
    correctIndex: 2,
    explanation: "The strainer package is designed to remove sand, scale, rust, and other solids from oil and gas streams before they reach downstream equipment."
  },
  {
    question: "Why does the package contain two strainers?",
    options: ["To separate oil and gas", "To increase flow rate", "To allow duty and standby operation", "To reduce pressure"],
    correctIndex: 2,
    explanation: "The dual-strainer arrangement allows one strainer to operate while the other remains on standby for maintenance or changeover."
  },
  {
    question: "What type of control system is installed on the package?",
    options: ["PLC automatic control", "SCADA control", "Remote monitoring system", "Manual operation only"],
    correctIndex: 3,
    explanation: "The package operates manually and does not require external control or monitoring systems."
  },
  {
    question: "What instrument is used to monitor the condition of the strainers?",
    options: ["Flow meter", "Temperature transmitter", "Differential Pressure Indicator (PDI-200)", "Level gauge"],
    correctIndex: 2,
    explanation: "PDI-200 monitors the pressure difference across the strainer and indicates blockage or solids accumulation."
  },
  {
    question: "What does a high differential pressure across a strainer usually indicate?",
    options: ["The screen is clean", "The process pressure is low", "The strainer is becoming blocked", "The well is dead"],
    correctIndex: 2,
    explanation: "As solids accumulate in the strainer screen, flow resistance increases, causing differential pressure to rise."
  },
  {
    question: "Before startup, what must be confirmed regarding the strainer covers?",
    options: ["They are painted", "They are removed", "They are securely fitted", "They are heated"],
    correctIndex: 2,
    explanation: "The covers must be securely fitted before introducing pressure into the system."
  },
  {
    question: "Why must the manifold be purged before introducing hydrocarbons?",
    options: ["To increase pressure", "To cool the system", "To remove air and prevent explosive mixtures", "To clean the gauges"],
    correctIndex: 2,
    explanation: "Air mixed with hydrocarbons can create an explosive atmosphere, so purging is essential."
  },
  {
    question: "Which strainer is selected during startup?",
    options: ["The standby strainer", "Either S-200A or S-200B as the duty strainer", "Both simultaneously", "Neither strainer"],
    correctIndex: 1,
    explanation: "One strainer is selected as the duty strainer while the other remains isolated on standby."
  },
  {
    question: "During startup, which isolation valves should generally be opened first?",
    options: ["Upstream valves", "Drain valves", "Downstream valves", "Vent valves"],
    correctIndex: 2,
    explanation: "The procedure specifies gradually opening downstream isolation valves before upstream valves."
  },
  {
    question: "What is the purpose of a strainer changeover?",
    options: ["Increase temperature", "Switch flow to a clean standby strainer", "Reduce production", "Perform pressure testing"],
    correctIndex: 1,
    explanation: "Changeover allows maintenance and cleaning while production continues through the standby unit."
  },
  {
    question: "What should be done before opening a blocked strainer for cleaning?",
    options: ["Increase pressure", "Inject chemicals", "Bleed off pressure safely", "Open all valves"],
    correctIndex: 2,
    explanation: "The strainer must be isolated and depressurized before any maintenance activity."
  },
  {
    question: "What is the preferred purging medium for the package?",
    options: ["Air", "Nitrogen", "Oxygen", "Natural gas"],
    correctIndex: 1,
    explanation: "Nitrogen is inert and does not support combustion, making it ideal for purging."
  },
  {
    question: "Approximately what pressure is used during nitrogen purging?",
    options: ["0.1 bar", "1 bar", "10 bar", "50 bar"],
    correctIndex: 1,
    explanation: "The package is typically pressurized with nitrogen to approximately 1 bar during the purge procedure."
  },
  {
    question: "Why is a slight positive pressure maintained after nitrogen purging?",
    options: ["To increase production", "To prevent air re-entering the system", "To improve filtration", "To test valves"],
    correctIndex: 1,
    explanation: "Positive pressure prevents atmospheric air from entering the package after purging."
  },
  {
    question: "What is a major limitation of water purging?",
    options: ["Water is explosive", "It requires a suitable vent point", "Water damages steel immediately", "It cannot remove air"],
    correctIndex: 1,
    explanation: "Because the package lacks a dedicated high-point vent, water purging can be less effective than nitrogen purging."
  },
  {
    question: "Before inspection, strainer pots should be checked for the presence of which hazardous gas?",
    options: ["Helium", "Nitrogen", "Hydrogen Sulfide (H₂S)", "Argon"],
    correctIndex: 2,
    explanation: "Personnel must verify that the vessel is free from H₂S and explosive gas mixtures before opening."
  },
  {
    question: "Why are hammer union seals and O-rings replaced during maintenance?",
    options: ["To increase temperature", "To improve appearance", "To maintain pressure integrity", "To increase flow rate"],
    correctIndex: 2,
    explanation: "Seals and O-rings are critical pressure-containing components and must be replaced to prevent leaks."
  },
  {
    question: "What should be inspected inside the strainer vessel after removing the screen?",
    options: ["Paint color", "Corrosion, erosion, and flow damage", "Temperature readings", "Production rates"],
    correctIndex: 1,
    explanation: "Internal inspection helps identify corrosion, erosion, and damage caused by solids and high-velocity flow."
  },
  {
    question: "What is the most important safety rule before opening any strainer vessel?",
    options: ["Increase line pressure", "Open all valves", "Ensure the vessel is isolated and depressurized", "Remove gauges first"],
    correctIndex: 2,
    explanation: "Opening a pressurized vessel can result in serious injury or fatality. Isolation and depressurization are mandatory."
  },
  {
    question: "What is the meter factor (MF)?",
    options: ["The ratio of API to temperature", "The ratio of the actual volume to the meter indicated volume", "The pressure drop across the meter", "The meter size in inches"],
    correctIndex: 1,
    explanation: "MF = Prover Volume / Meter Indicated Volume."
  },
  {
    question: "The prover volume is 100 bbl and the meter indicated 99.5 bbl. What is MF?",
    options: ["About 0.995", "About 0.5", "About 199.5", "About 1.005"],
    correctIndex: 3,
    explanation: "100 / 99.5 = 1.00503."
  },
  {
    question: "How is the composite meter factor found?",
    options: ["CMF = MF + SF", "CMF = MF / API", "CMF = MF x SF", "CMF = SF - 1"],
    correctIndex: 2,
    explanation: "The course page says CMF = MF x SF, with SF = 1 - shrinkage."
  },
  {
    question: "MF = 1.005 and shrinkage is 4%. What is the CMF?",
    options: ["0.9648", "1.045", "0.96", "1.005"],
    correctIndex: 0,
    explanation: "SF = 0.96 and 1.005 x 0.96 = 0.9648."
  },
  {
    question: "In the Advanced Meter Factor Calibration, which correction does the tank volume use?",
    options: ["A pressure factor only", "The choke size", "The BS&W", "A temperature K factor based on API and the tank temperature"],
    correctIndex: 3,
    explanation: "K tank = 1 - [(0.066 x API + 2.75) x (T tank - 60) x 10^-4]."
  },
  {
    question: "How does the Advanced calibration get the correction factor Cf?",
    options: ["Cf = meter volume x tank volume", "Cf = tank volume / meter volume", "Cf = API / 60", "Cf = Mf x 42"],
    correctIndex: 1,
    explanation: "The code divides the temperature corrected tank increase by the temperature corrected meter increase."
  },
  {
    question: "What is the tank increase formula in the calibration?",
    options: ["(Final tank - Initial tank) x Tank factor", "Final tank + Initial tank", "Final meter x API", "Tank factor / 60"],
    correctIndex: 0,
    explanation: "The course page gives the tank factor in bbl/cm and the tank readings in cm."
  },
  {
    question: "A turbine meter has 100 pulses/gal. How many pulses per bbl is that?",
    options: ["100", "42", "4,200", "2,400"],
    correctIndex: 2,
    explanation: "Kbbl = Kgal x 42 = 4,200."
  },
  {
    question: "Gilbert at 500 psig, 24/64 choke and GOR 800 gives about how many bpd?",
    options: ["About 53 bpd", "About 5,270 bpd", "About 840 bpd", "About 527 bpd"],
    correctIndex: 3,
    explanation: "500 x 24^1.89 / [435 x 0.8^0.546] = about 527 bpd."
  },
  {
    question: "Oil rate is 1,000 STB/d and GOR is 500 scf/STB. How much associated gas is that?",
    options: ["5,000 MSCFD", "2 MSCFD", "50 MSCFD", "500 MSCFD"],
    correctIndex: 3,
    explanation: "1,000 x 500 / 1,000 = 500 MSCFD."
  },
  {
    question: "Should these equations be used as a metered oil rate?",
    options: ["Yes, they replace the separator", "Yes, they are fiscal values", "No, they are quick field estimates", "Only above 1,000 psig"],
    correctIndex: 2,
    explanation: "The pages call them estimates, so confirm with the metered rate."
  },
  {
    question: "A well makes 2,500 STBPD of oil at a GOR of 1,200 scf/STB. What is the gas rate in MMSCFD?",
    options: ["0.300 MMSCFD", "3.000 MMSCFD", "3,000 MMSCFD", "2.083 MMSCFD"],
    correctIndex: 1,
    explanation: "Gas rate = (2,500 x 1,200) / 10^6 = 3.000 MMSCFD."
  },
  {
    question: "The gas rate from GOR and oil rate is 3,000,000 SCFD. What is it in MSCFD?",
    options: ["3,000 MSCFD", "3 MSCFD", "300 MSCFD", "3,000,000 MSCFD"],
    correctIndex: 0,
    explanation: "MSCFD = MMSCFD x 1,000. 3 MMSCFD x 1,000 = 3,000 MSCFD."
  },
  {
    question: "A well makes 2 MMSCFD of gas at a GOR of 4,000 scf/STB. What is the oil rate?",
    options: ["8,000,000 STBPD", "50 STBPD", "500 STBPD", "5,000 STBPD"],
    correctIndex: 2,
    explanation: "Oil rate = (2 x 10^6) / 4,000 = 500 STBPD."
  },
  {
    question: "Which input must be greater than zero in the oil-rate-from-GOR calculators?",
    options: ["GOR, because it is the divisor", "Gas rate, because it is the divisor", "Oil rate, because it is an input", "Neither input is checked"],
    correctIndex: 0,
    explanation: "GOR is the divisor in Q_oil = Q_gas x 10^6 / GOR, so it must be greater than zero. The gas rate only has to be zero or greater."
  },
  {
    question: "The oil rate from GOR is 500 STBPD. About how many m3/d is this, using 1 STB = 0.158987 m3?",
    options: ["3,145 m3/d", "500 m3/d", "0.32 m3/d", "79.49 m3/d"],
    correctIndex: 3,
    explanation: "500 x 0.158987 = 79.49 m3/d."
  },
  {
    question: "Measured gas is 5 MMSCFD and lift gas is 1.5 MMSCFD. What is the true produced gas?",
    options: ["3.5 MMSCFD", "6.5 MMSCFD", "7.5 MMSCFD", "3.33 MMSCFD"],
    correctIndex: 0,
    explanation: "5 - 1.5 = 3.5 MMSCFD."
  },
  {
    question: "Measured gas is 5 MMSCFD and lift gas is 1.5 MMSCFD. What share of the measured gas is lift gas?",
    options: ["70%", "15%", "30%", "3.3%"],
    correctIndex: 2,
    explanation: "Lift Share = (1.5 / 5) x 100 = 30%."
  },
  {
    question: "True gas is 3,500,000 scfd and the oil rate is 700 STB/d. What is the true GOR?",
    options: ["500 scf/STB", "5,000 scf/STB", "2,450,000,000 scf/STB", "0.0002 scf/STB"],
    correctIndex: 1,
    explanation: "GOR true = 3,500,000 / 700 = 5,000 scf/STB."
  },
  {
    question: "Before subtracting lift gas from measured gas, what should you check?",
    options: ["Both are in different units", "Only the lift gas is corrected", "The oil rate is above 1,000 STB/d", "Both are at the same base conditions and in the same unit"],
    correctIndex: 3,
    explanation: "The field note says to normalize both rates to the same base conditions and units before subtracting."
  },
  {
    question: "Which inputs does the Khuff gas estimate use?",
    options: ["Oil rate, water cut and GOR", "Pipe diameter and wall thickness", "Wellhead pressure, wellhead temperature, choke size, gas S.G. and wet factor", "Meter factor and K-factor"],
    correctIndex: 2,
    explanation: "The course page lists wellhead pressure (psig), wellhead temperature (F), choke size (1/64 in), gas S.G. and a wet factor."
  },
  {
    question: "How is the combined flow factor C found?",
    options: ["By multiplying Fb, Fg, Ftf, Fpv, Fr, Y2, Ftb and Fpb", "By adding all the factors", "By dividing Fb by Fg", "It is always 1"],
    correctIndex: 0,
    explanation: "C is the product of the eight factors."
  },
  {
    question: "What do Ftb and Fpb default to?",
    options: ["0", "14.7", "1", "60"],
    correctIndex: 2,
    explanation: "The course page lists the temperature base and pressure base factors with a default of 1."
  },
  {
    question: "In what unit is the separator pressure Pf entered?",
    options: ["psig", "bar gauge", "psia", "kPa gauge"],
    correctIndex: 2,
    explanation: "The course page labels it Separator Pressure Pf (psia)."
  },
  {
    question: "Int.T = 1, Pf = 500 psia, HW = 100 and C = 1.2. What is Q gas?",
    options: ["6,000", "600", "60,000", "500"],
    correctIndex: 0,
    explanation: "1 x 1.2 x 500 x sqrt(100) = 6,000."
  },
  {
    question: "What is the beta ratio?",
    options: ["Pipe ID divided by orifice diameter", "Orifice diameter divided by pipe internal diameter", "Pressure ratio across the orifice", "Gas S.G. divided by API"],
    correctIndex: 1,
    explanation: "Beta = d / D."
  },
  {
    question: "An orifice of 2 in is in a 4 in pipe. What is beta?",
    options: ["0.5", "2", "0.25", "0.8"],
    correctIndex: 0,
    explanation: "2 / 4 = 0.5. The area ratio is 0.25."
  },
  {
    question: "What does C.A. stand for in the wall thickness formulas?",
    options: ["Casing area", "Choke angle", "Calibration adjustment", "Corrosion allowance"],
    correctIndex: 3,
    explanation: "C.A. is the corrosion allowance in inches."
  },
  {
    question: "What happens to the minimum wall when the pressure goes up?",
    options: ["It decreases", "It stays the same", "It increases", "It becomes zero"],
    correctIndex: 2,
    explanation: "Pressure is in the numerator, so a higher pressure needs a thicker wall."
  },
  {
    question: "A 4 in pipe has an OD of 4.500 in and a Sch 40 wall of 0.237 in. What is its ID?",
    options: ["4.263 in", "4.737 in", "3.826 in", "4.026 in"],
    correctIndex: 3,
    explanation: "4.500 - 2 x 0.237 = 4.026."
  },
  {
    question: "Which schedule has the thicker wall for the same NPS?",
    options: ["Schedule 40 (Standard)", "Schedule 80 (Extra Strong)", "They are the same", "Neither has a wall"],
    correctIndex: 1,
    explanation: "For a 4 in pipe, Sch 80 is 0.337 in and Sch 40 is 0.237 in."
  },
  {
    question: "Which plates is the ASME vessel tool valid for?",
    options: ["Any plastic", "Aluminium only", "SA 285 Grade C or ASTM 516 Grade 70", "Glass"],
    correctIndex: 2,
    explanation: "The course page says calculations are valid for these two plates."
  },
  {
    question: "What allowable stress does the ASME vessel tool use?",
    options: ["1,750 psi", "17,500 psi", "175,000 psi", "60 psi"],
    correctIndex: 1,
    explanation: "The constants are S = 17,500 psi, E = 1 and C.A. = 0.125 in."
  },
  {
    question: "What is the shell formula in the ASME vessel tool?",
    options: ["t = P x D / (2 S E - 0.2 P)", "t = S / P", "t = R / P", "t = P x R / (S x E - 0.6 x P) + C.A."],
    correctIndex: 3,
    explanation: "The second option is the head formula."
  },
  {
    question: "What is the head type in the tool?",
    options: ["Flat", "Hemispherical", "Conical", "2:1 elliptical"],
    correctIndex: 3,
    explanation: "The head formula is for a 2:1 elliptical head."
  },
  {
    question: "Which columns can you change in the ASME vessel tool?",
    options: ["S and E", "P (pressure) and R/D (radius or diameter)", "C.A. only", "Nothing"],
    correctIndex: 1,
    explanation: "The course page says to modify only the P and R/D columns."
  },
  {
    question: "What is the total strainer pressure drop?",
    options: ["Basket drop plus body drop", "Basket drop minus body drop", "Body drop only", "Velocity times SG"],
    correctIndex: 0,
    explanation: "dP total = dP basket + dP body."
  },
  {
    question: "What is the J factor?",
    options: ["A flow rate", "A pressure rating", "A mesh correction factor", "A gas gravity"],
    correctIndex: 2,
    explanation: "The course page lists J as the mesh correction factor, dimensionless."
  },
  {
    question: "What does Ktot represent?",
    options: ["Resistance coefficient (expansion plus contraction)", "Total flow", "Tank constant", "Meter factor"],
    correctIndex: 0,
    explanation: "The course page defines Ktot as expansion plus contraction resistance."
  },
  {
    question: "How does the body pressure drop change if the velocity doubles?",
    options: ["It doubles", "It halves", "It stays the same", "It becomes 4 times larger"],
    correctIndex: 3,
    explanation: "The formula uses V squared."
  },
  {
    question: "What is the constant 148.1 used for?",
    options: ["Converting GPM to bpd", "Converting velocity head to psi", "Converting inches to mm", "Water density in kg/m3"],
    correctIndex: 1,
    explanation: "The course page says it is the conversion constant for velocity head to psi."
  },
  {
    question: "What is the outlet velocity formula?",
    options: ["V2 = P1 x P2", "V2 = P1 / P2", "V2 = D x Q", "V2 = sqrt(2 x (P1 - P2))"],
    correctIndex: 3,
    explanation: "It uses the square root of 2 times the pressure difference."
  },
  {
    question: "Q = 5, D = 4 in and P1 = 1,000 psia. What is V1?",
    options: ["1 ft/s", "10 ft/s", "100 ft/s", "0.5 ft/s"],
    correctIndex: 1,
    explanation: "32,000 x 5 / (16 x 1,000) = 10."
  },
  {
    question: "A line has a working pressure of 1,000 psig. What is its hydrotest pressure with the standard factor?",
    options: ["1,000 psig", "2,500 psig", "150 psig", "1,500 psig"],
    correctIndex: 3,
    explanation: "1,000 x 1.5 = 1,500 psig."
  },
  {
    question: "What is P in the torque formulas?",
    options: ["The pressure", "The thread pitch, 1 / threads per inch", "The pipe size", "The pump rate"],
    correctIndex: 1,
    explanation: "P = 1 / N."
  },
  {
    question: "The torque result is divided by 12. Why?",
    options: ["To convert psi to bar", "To get the number of studs", "To apply the friction factor", "To convert in-lbf to ft-lbf"],
    correctIndex: 3,
    explanation: "The code divides the in-lbf total by 12 to give ft-lbf."
  },
  {
    question: "Which stud condition needs less torque for the same bolt stress?",
    options: ["Dry / zinc (f = 0.13)", "Both need the same", "Neither needs torque", "Lubricated (f = 0.07)"],
    correctIndex: 3,
    explanation: "A lower friction coefficient needs less torque."
  },
  {
    question: "What does the Full ANSI and API Flange Database look up for a rating and NPS?",
    options: ["The oil API", "Studs, stud diameter and length, ring gasket and spanner size", "The meter factor", "The choke size"],
    correctIndex: 1,
    explanation: "It lists number of studs, stud diameter, RTJ stud length, ring gasket and spanner."
  },
  {
    question: "500 lbf acts on 2 in2. What is the pressure?",
    options: ["1,000 psi", "2.5 psi", "25 psi", "250 psi"],
    correctIndex: 3,
    explanation: "500 / 2 = 250 psi."
  },
  {
    question: "How do you get the area of a circular piston from its diameter d?",
    options: ["A = pi/4 x d^2", "A = 2 x pi x d", "A = d / 4", "A = pi x d"],
    correctIndex: 0,
    explanation: "The field note gives A = pi/4 x d squared."
  },
  {
    question: "S.G. 0.85 and TVD 10,000 ft. What is the hydrostatic pressure?",
    options: ["About 3,683 psi", "About 4,333 psi", "About 368 psi", "About 8,500 psi"],
    correctIndex: 0,
    explanation: "0.85 x 0.4333 x 10,000 = 3,683 psi."
  },
  {
    question: "What does 0.4333 represent?",
    options: ["The Z-factor of gas", "The conversion from bar to psi", "The drawdown ratio", "The pressure gradient of water in psi/ft"],
    correctIndex: 3,
    explanation: "The course page defines it as the pressure gradient of water."
  },
  {
    question: "What is the exponential static BHP formula?",
    options: ["Pws = Pwh x e^(0.01875 x SG x D / (Z x T))", "Pws = Pwh + D", "Pws = Pwh / D", "Pws = 0.052 x D"],
    correctIndex: 0,
    explanation: "The barometric formula uses an exponent of 0.01875 SG D / (Z T)."
  },
  {
    question: "What is the simplified static BHP method?",
    options: ["Pws = Pwh x D", "Pws = 2 x Pwh", "Pws = Pwh + 0.25 x (Pwh/100) x (D/100)", "Pws = Pwh - D"],
    correctIndex: 2,
    explanation: "It is a field rule of thumb for when gas properties are unknown."
  },
  {
    question: "A 10 ppg mud at 10,000 ft gives what BHP?",
    options: ["520 psi", "52,000 psi", "1,000 psi", "5,200 psi"],
    correctIndex: 3,
    explanation: "10 x 0.052 x 10,000 = 5,200."
  },
  {
    question: "What is drawdown?",
    options: ["Wellhead pressure minus reservoir pressure", "Reservoir pressure minus bottomhole flowing pressure", "Bottomhole pressure plus wellhead pressure", "The pressure of the mud column"],
    correctIndex: 1,
    explanation: "Drawdown = Pr - Pwf."
  },
  {
    question: "Pr = 4,000 psi and Pwf = 3,200 psi. What is the drawdown?",
    options: ["7,200 psi", "3,200 psi", "800 psi", "80 psi"],
    correctIndex: 2,
    explanation: "4,000 - 3,200 = 800 psi."
  },
  {
    question: "What does the calculated length exclude?",
    options: ["The liquid", "The diameter", "The gas", "The heads of the vessel"],
    correctIndex: 3,
    explanation: "The note says it is based on the cylindrical volume, excluding heads."
  },
  {
    question: "Which equation is used for the gas capacity check?",
    options: ["Souders-Brown", "Gilbert", "Katz", "Darcy"],
    correctIndex: 0,
    explanation: "Vmax = K x sqrt((rhoL - rhog) / rhog)."
  },
  {
    question: "What does low gas velocity in the upper vessel help avoid?",
    options: ["Corrosion", "Foaming of water", "Carry-over of oil droplets", "Scale"],
    correctIndex: 2,
    explanation: "High gas speed would entrain oil droplets downstream."
  },
  {
    question: "How many ft3 are in a barrel in the vessel sizing code?",
    options: ["5.61458", "7.48052", "42", "0.158987"],
    correctIndex: 0,
    explanation: "The code converts barrels to ft3 using 5.61458."
  },
  {
    question: "In the sizing example, 5,000 bpd and 3 min need about how many barrels?",
    options: ["About 104 bbl", "About 1.04 bbl", "About 15,000 bbl", "About 10.4 bbl"],
    correctIndex: 3,
    explanation: "5,000 / 1440 x 3 = 10.42 bbl."
  },
  {
    question: "What is the retention time formula?",
    options: ["t = V x Q", "t = (V x Level%) / Q x 1440", "t = Q / V", "t = Level / 1440"],
    correctIndex: 1,
    explanation: "Q is in bpd, so multiplying by 1440 gives minutes."
  },
  {
    question: "A 100 bbl separator at 50% level takes 5,000 bpd. What is the retention time?",
    options: ["14.4 min (14:24)", "1.44 min", "144 min", "4 min"],
    correctIndex: 0,
    explanation: "50 / 5,000 x 1440 = 14.4 min."
  },
  {
    question: "What does a Low status (1.0 to 2.0 min) risk?",
    options: ["A perfect separation", "Liquid carry-over in the gas line", "Gas bubbles only", "Lower pipe pressure"],
    correctIndex: 1,
    explanation: "The guide says it risks liquid carry-over in the gas line."
  },
  {
    question: "How is the desander velocity found from the flow velocity?",
    options: ["It is half the flow velocity", "It equals the WHP", "It is the square root", "It is 3 times the flow velocity"],
    correctIndex: 3,
    explanation: "The code multiplies the flow velocity by 3."
  },
  {
    question: "WHP is 1,000 psia and the gas rate is 5 MMscf/day. What is the flow velocity?",
    options: ["1 ft/s", "10 ft/s", "100 ft/s", "0.1 ft/s"],
    correctIndex: 1,
    explanation: "32,000 x 5 / (16 x 1,000) = 10."
  },
  {
    question: "What is shrinkage in well testing?",
    options: ["The increase of water in the sample", "The loss of oil volume when dissolved gas leaves between separator and stock tank at 60 F", "The drop of choke size over time", "The pipe wall loss from corrosion"],
    correctIndex: 1,
    explanation: "Dissolved gas leaves the oil, so the stock tank volume is smaller than the separator volume."
  },
  {
    question: "In the Estimate of Shrinkage Factor model, how is the shrinkage calculated from Bo?",
    options: ["Shrinkage = Bo x 60", "Shrinkage = Bo - 1", "Shrinkage = Bo / 12", "Shrinkage = 1 / Bo"],
    correctIndex: 3,
    explanation: "The course page says Shrinkage = 1 / Bo."
  },
  {
    question: "Which formula gives Bo in the estimate model?",
    options: ["Bo = 0.9759 + 12e-5 x (Fvol)^1.2", "Bo = 141.5 / (API + 131.5)", "Bo = 1 - 0.00069 x T", "Bo = Psep / 1000"],
    correctIndex: 0,
    explanation: "Bo = 0.9759 + 12 x 10^-5 x Fvol^1.2."
  },
  {
    question: "In the estimate model, what is the first step before calculating Fvol?",
    options: ["Convert the pressure to kPa", "Subtract the water cut", "Adjust the observed gas gravity for temperature", "Round the API to a whole number"],
    correctIndex: 2,
    explanation: "The model first calculates the adjusted gas gravity with the 0.00069 - 0.0003725 x S.G. term."
  },
  {
    question: "What is the shrinkage factor from the Katz table at 100 psig and 40 API?",
    options: ["0.912", "0.866", "1.000", "0.976"],
    correctIndex: 3,
    explanation: "The table value at 100 psig and 40 API is 0.976."
  },
  {
    question: "In the Katz table, what happens to the shrinkage factor when the separator pressure goes up at the same API?",
    options: ["It gets lower, so there is more shrinkage", "It gets higher", "It stays at 1.000", "It becomes negative"],
    correctIndex: 0,
    explanation: "For 40 API it falls from 0.976 at 100 psig to 0.866 at 1000 psig."
  },
  {
    question: "1,000 BBL/D measured liquid, 10% BS&W and a shrinkage of 0.976. What is the net oil?",
    options: ["900 STB/D", "878.4 STB/D", "976 STB/D", "100 STB/D"],
    correctIndex: 1,
    explanation: "1,000 x 0.90 x 0.976 = 878.4."
  },
  {
    question: "Net oil is 850 bbl/d and shrinkage is 0.92. What is the STO?",
    options: ["850 bbl/d", "922 bbl/d", "58 bbl/d", "782 bbl/d"],
    correctIndex: 3,
    explanation: "850 x 0.92 = 782. The loss is 68."
  },
  {
    question: "How do you get gallons from barrels?",
    options: ["Divide by 42", "Multiply by 5.61458", "Multiply by 144", "Multiply by 42"],
    correctIndex: 3,
    explanation: "There are 42 gallons in a barrel."
  },
  {
    question: "A tank is 72 in high, 240 in long and 96 in wide. What is its volume?",
    options: ["About 171 bbl", "About 17 bbl", "About 1,710 bbl", "About 7,182 bbl"],
    correctIndex: 0,
    explanation: "72 x 240 x 96 / 9702 = 170.99 bbl."
  },
  {
    question: "How is fluid weight in tons calculated?",
    options: ["Gallons / ppg", "Barrels x 144", "Gallons x ppg / 2240", "ppg x 42"],
    correctIndex: 2,
    explanation: "The course page divides pounds by 2240 lb per long ton."
  },
  {
    question: "What is the deck loading formula?",
    options: ["Total weight x 2240 / ((L x W) / 144)", "Total weight / 2240", "L x W x 144", "Weight x ppg"],
    correctIndex: 0,
    explanation: "It is the weight in pounds divided by the area in ft2."
  },
  {
    question: "Why is 144 used in the deck load?",
    options: ["To convert bbl to gal", "To convert tons to lb", "It is the tank height", "To convert in2 to ft2"],
    correctIndex: 3,
    explanation: "There are 144 square inches in a square foot."
  },
  {
    question: "What does the Horizontal Cylindrical Tank part give?",
    options: ["Only the weight", "Total and partial fill volume", "The pump rate", "The gas rate"],
    correctIndex: 1,
    explanation: "It calculates the total volume and the fluid volume at a level."
  },
  {
    question: "What is the total volume formula for the horizontal tank?",
    options: ["pi x r^2 x L / 5.61458", "L x W x H / 9702", "pi x d x L", "r x L / 42"],
    correctIndex: 0,
    explanation: "With r and L in feet, the result in ft3 is divided by 5.61458 for barrels."
  },
  {
    question: "A horizontal tank is filled to half its diameter. What fraction of the volume is fluid?",
    options: ["25%", "75%", "50%", "100%"],
    correctIndex: 2,
    explanation: "At h = r the fill fraction is 0.5."
  },
  {
    question: "What is the Estimated Flow Returns formula for volume change?",
    options: ["dV = H x Vinit", "dV = (H(cm) - Vinit) x Ktank", "dV = Ktank / H", "dV = H + Ktank"],
    correctIndex: 1,
    explanation: "The course page prints dV = (Hcm - Vinit) x Ktank."
  },
  {
    question: "How is the tank rate in bpd calculated?",
    options: ["dV x dt", "dV / 1440", "dt / dV", "dV / dt(min) x 1440"],
    correctIndex: 3,
    explanation: "The minutes are converted to a day with 1440."
  },
  {
    question: "dV is 17.39 bbl over 60 minutes. What is the rate in bpd?",
    options: ["About 17 bpd", "About 417 bpd", "About 1,043 bpd", "About 4 bpd"],
    correctIndex: 1,
    explanation: "17.39 / 60 x 1440 = 417.4."
  },
  {
    question: "What is the primary function of a transfer pump in a well testing setup?",
    options: ["To separate gas from oil inside the surge tank", "To move fluid from the storage/gauge tank to the oil manifold", "To inject chemicals into the high-pressure flowline", "To increase the pressure of the gas for the flare"],
    correctIndex: 1,
    explanation: "Transfer pumps are used to move the processed oil from the tanks to the next stage, usually the oil manifold for disposal or transport."
  },
  {
    question: "Which of the following is a key characteristic of a Positive Displacement (PD) pump?",
    options: ["It uses high-speed impellers to create velocity", "It moves a fixed volume of liquid for every revolution or stroke", "It is only suitable for very low viscosity fluids like water", "It has a very simple design with almost no moving parts"],
    correctIndex: 1,
    explanation: "Positive displacement pumps trap a specific volume of fluid and move it through the system, making them very accurate for metering."
  },
  {
    question: "Why is 'dry running' considered catastrophic for positive displacement pumps?",
    options: ["Because the pump will start rotating in the opposite direction", "Due to close clearances or interference between parts like the rotor and stator", "Because it causes the oil to become too viscous", "Because it creates a vacuum that collapses the tank"],
    correctIndex: 1,
    explanation: "Because PD pumps often have very tight tolerances (close clearances), running them without fluid for lubrication/cooling can cause immediate mechanical failure."
  },
  {
    question: "What is the main advantage of a Centrifugal pump over a Positive Displacement pump?",
    options: ["It is much better at handling high-viscosity fluids", "It has a more complex design for higher accuracy", "It is simpler, has fewer moving parts, and is better for high flow rates", "It does not require a motor or engine to operate"],
    correctIndex: 2,
    explanation: "Centrifugal pumps are favored for their simplicity and ability to move large volumes of low-viscosity fluid with minimal maintenance."
  },
  {
    question: "How does a Diaphragm pump move fluid?",
    options: ["Using two meshed gears to trap fluid in teeth cavities", "Using a spinning impeller to create centrifugal force", "Using a reciprocating rubber or Teflon membrane and check valves", "Using a high-speed screw thread to push fluid forward"],
    correctIndex: 2,
    explanation: "A diaphragm (or membrane) pump uses the back-and-forth motion of a flexible diaphragm combined with non-return valves to move liquid."
  },
  {
    question: "Which pump type is specifically noted for being H2S-proof and capable of handling oil impurities?",
    options: ["Viking pump", "Sundyne pump", "Standard Gear pump", "Radial flow pump"],
    correctIndex: 1,
    explanation: "The Sundyne pump is a centrifugal type designed to handle H2S environments and fluids containing impurities."
  },
  {
    question: "In a Screw pump, why is the volumetric efficiency higher with viscous fluids?",
    options: ["Because the motor runs faster when the fluid is thick", "Because viscosity reduces the 'slippage' of fluid back to the suction side", "Because viscous fluids create less friction in the screw threads", "Because the screw expands when it touches thick oil"],
    correctIndex: 1,
    explanation: "High-viscosity fluids do not leak through the close clearances as easily, reducing 'slip' and maintaining high efficiency."
  },
  {
    question: "What is a major disadvantage of Diaphragm pumps mentioned in the text?",
    options: ["They are too expensive for well testing", "They produce high pulsations in the flow", "They require high-pressure steam to operate", "They cannot handle corrosive fluids"],
    correctIndex: 1,
    explanation: "Due to their reciprocating nature, diaphragm pumps create significant pulsations, which can lead to vibration in the piping."
  },
  {
    question: "How does a Gear pump move fluid to the discharge side?",
    options: ["By spinning the fluid so fast that it gains pressure", "By trapping fluid between the teeth of rotating gears", "By using a piston to push the fluid through a nozzle", "By heating the fluid until it expands toward the outlet"],
    correctIndex: 1,
    explanation: "In gear pumps, fluid is trapped in the cavities between the gear teeth and the pump casing, then carried to the discharge side."
  },
  {
    question: "Which of the following is a mandatory safety component for Positive Displacement pumps?",
    options: ["A cooling fan", "A pressure relief valve", "A sight glass", "A sand filter"],
    correctIndex: 1,
    explanation: "Because PD pumps will continue to push fluid regardless of downstream blockages, a pressure relief valve is essential to prevent pipe or pump bursts."
  },
  {
    question: "Which unit does the pressure converter use internally as its base?",
    options: ["bar", "psig", "kPa", "atm"],
    correctIndex: 1,
    explanation: "The converter divides the entered value by its factor to get psig, then multiplies by the factor of each other unit."
  },
  {
    question: "What is the pressure converter factor for kPa, per 1 psig?",
    options: ["0.0689476", "68.9476", "14.696", "6.89476"],
    correctIndex: 3,
    explanation: "The course page lists 6.89476 kPa per psig and 0.0689476 bar per psig."
  },
  {
    question: "About how many bar is 100 psig, with the converter's factor?",
    options: ["6.89 bar", "68.9 bar", "1,450 bar", "0.69 bar"],
    correctIndex: 0,
    explanation: "100 x 0.0689476 = 6.89 bar."
  },
  {
    question: "Which unit does the volume converter use as its base?",
    options: ["Barrels", "Cubic metres", "Litres", "US gallons"],
    correctIndex: 2,
    explanation: "The volume factors are units per litre."
  },
  {
    question: "How many litres is one barrel, using the converter's factor of 0.00628981 bbl per litre?",
    options: ["About 0.159 L", "About 42 L", "About 158.99 L", "About 1,590 L"],
    correctIndex: 2,
    explanation: "1 / 0.00628981 = 158.99 L."
  },
  {
    question: "A temperature of 100 F is entered. What is it in Celsius?",
    options: ["37.78 C", "68 C", "212 C", "55.56 C"],
    correctIndex: 0,
    explanation: "C = (100 - 32) x 5/9 = 37.78."
  },
  {
    question: "How does the temperature converter get Rankine from Celsius?",
    options: ["C x 9/5 + 32", "C + 273.15", "(C - 32) x 5/9", "(C + 273.15) x 9/5"],
    correctIndex: 3,
    explanation: "R = (C + 273.15) x 9/5."
  },
  {
    question: "What unit is the base of the length converter?",
    options: ["Metres", "Inches", "Feet", "Millimetres"],
    correctIndex: 1,
    explanation: "The length factors are inches per unit, so the base is inches."
  },
  {
    question: "What is the length converter factor for a foot?",
    options: ["12", "3", "0.0833", "36"],
    correctIndex: 0,
    explanation: "1 ft = 12 inches."
  },
  {
    question: "What does the rates converter use as its base?",
    options: ["gal/min", "m3/day", "bbl/day", "L/s"],
    correctIndex: 2,
    explanation: "The rates factors are bbl/day per unit."
  },
  {
    question: "Why is the factor for bbl/min 1,440 in the rates converter?",
    options: ["There are 1,440 gallons in a barrel", "There are 1,440 minutes in a day", "1 bbl equals 1,440 litres", "It is the API gravity constant"],
    correctIndex: 1,
    explanation: "1 bbl/min = 1,440 bbl/day."
  },
  {
    question: "What is the formula in the density converter that gives S.G. from API gravity?",
    options: ["S.G. = 141.5 x (API + 131.5)", "S.G. = API / 141.5", "S.G. = 131.5 / (API + 141.5)", "S.G. = 141.5 / (API + 131.5)"],
    correctIndex: 3,
    explanation: "The course page uses SG = 141.5 / (API + 131.5) and API = 141.5 / SG - 131.5."
  },
  {
    question: "What S.G. does an oil of 35 API have?",
    options: ["About 1.1765", "About 0.35", "About 0.0285", "About 0.8498"],
    correctIndex: 3,
    explanation: "141.5 / (35 + 131.5) = 0.8498."
  },
  {
    question: "How does the flow rate converter work internally?",
    options: ["It converts to barrels per day", "It converts the input to litres per second and then to each unit", "It converts to gallons per minute", "It converts to cubic feet per day"],
    correctIndex: 1,
    explanation: "The converter uses litres per second as its base."
  },
  {
    question: "A choke size of 32/64 is entered in the Choke Size Conversion. What is it in mm?",
    options: ["0.5 mm", "1.27 mm", "12.70 mm", "32 mm"],
    correctIndex: 2,
    explanation: "32 / 64 = 0.5 in, and 0.5 x 25.4 = 12.70 mm."
  },
  {
    question: "What is the primary Environmental reason for using burners during well testing?",
    options: ["To heat the rig for worker comfort", "To dispose of oil at the surface to prevent storage and pollution problems", "To provide light light for night time", "To increase the pressure of the reservoir"],
    correctIndex: 1,
    explanation: "Think about what happens to the oil produced during a test if there isn’t enough storage space on the rig."
  },
  {
    question: "A Green Dragon burner type is typically rated for what flow capacity?",
    options: [" 4,000 BOPD ", "9,000 BOPD", "15,000 BOPD", "7,000 BOPD"],
    correctIndex: 3,
    explanation: "The Spitfire handles the lowest capacity, while the Evergreen handles the highest. The Green Dragon sits in the middle."
  },
  {
    question: "Why are burners mounted on long booms (60–85 feet) rather than directly on the rig? ",
    options: ["To allow for easier cleaning.", "To ensure the oil stays liquid.", "To reduce heat radiation and keep the fire at a safe distance from the rig. ", "Because the burners are too heavy for the rig deck."],
    correctIndex: 2,
    explanation: "Fire produces intense heat; the further away it is, the safer the rig crew and structure are."
  },
  {
    question: "Which of the following is NOT a required system for a burner to function? ",
    options: ["Propane for pilot ignition. ", "Rig air (from general rig compressors). ", "Dedicated air compressors. ", " Water for heat radiation control. "],
    correctIndex: 1,
    explanation: "The summary notes explicitly warn that you should never use a certain type of air for these systems."
  },
  {
    question: "What is the purpose of the Water Curtain on a boom?",
    options: [" To wash the boom after use. ", " To extinguish the pilot light. ", " To control heat radiation and enhance combustion efficiency. ", "To provide drinking water to the personnel on the boom."],
    correctIndex: 2,
    explanation: "Combustion at high rates creates massive thermal energy; the water acts as a shield. "
  },
  {
    question: " Which boom structure is considered heavy-duty and features two gas flare lines?",
    options: ["U-shaped", "V-shaped ", "I-beam shaped", " L-shaped "],
    correctIndex: 1,
    explanation: "Look at the visual diagrams of the boom cross-sections in your notes; one is for single lines, the other is for dual."
  },
  {
    question: "Which system ignition for the burner flare?",
    options: ["Water pump", "Separator pressure", "Propane pilot system", "Choke manifold"],
    correctIndex: 2,
    explanation: "A small controlled flame is needed to ignite the oil."
  },
  {
    question: "What is the function of atomizers in burner systems?",
    options: ["Increase oil into fine droplets for better combusion", "cool the burner system", "Increase reservoir productivity", "Java Script Output Name"],
    correctIndex: 0,
    explanation: "JSON stands for JavaScript Object Notation."
  },
  {
    question: "What is the function of check valve in burner systems?",
    options: ["Increase oil flow", "Prevent backflow between air and oil lines", "Increase burner pressure", "Control reservoir pressure"],
    correctIndex: 1,
    explanation: "They are mainly used for safety."
  },
  {
    question: "What is the primary function of a choke manifold in well testing?",
    options: ["To separate oil, gas, and water into different streams", "To control flow rate and pressure to ensure stable conditions before processing", "To measure the total depth of the well during drilling", "To pump chemicals into the wellhead to prevent corrosion"],
    correctIndex: 1,
    explanation: "The choke manifold is used to regulate the pressure and flow of fluids from the wellhead to ensure stability before they reach surface equipment."
  },
  {
    question: "Where is the choke manifold typically located in a well testing setup?",
    options: ["Upstream of the flow head", "Inside the reservoir", "Downstream of the flow head", "At the end of the flare line"],
    correctIndex: 2,
    explanation: "In the flow path, the choke manifold is positioned immediately downstream of the flow head."
  },
  {
    question: "What does 'critical flow' imply in the context of a choke manifold?",
    options: ["The well is underperforming and requires maintenance", "Fluid flow has completely stopped due to a blockage", "Upstream pressure and flow are no longer affected by downstream pressure changes", "The pressure has exceeded the manifold's maximum rating"],
    correctIndex: 2,
    explanation: "Critical flow occurs when downstream pressure variations do not impact the upstream pressure or flow rate, which is vital for stable testing."
  },
  {
    question: "Which component is specifically used for inserting calibrated choke beans?",
    options: ["Adjustable choke", "Fixed choke box", "Thermowell", "Gate valve"],
    correctIndex: 1,
    explanation: "The fixed choke box is the part of the manifold designed to hold interchangeable, calibrated choke beans."
  },
  {
    question: "What is the main benefit of having an adjustable choke alongside a fixed one?",
    options: ["It provides on-the-fly flow control and flexibility", "It is cheaper to maintain than a fixed choke", "It filters out sand and debris automatically", "It increases the temperature of the fluid"],
    correctIndex: 0,
    explanation: "Adjustable chokes allow for immediate changes to flow and pressure, while fixed chokes offer more stable, long-term control."
  },
  {
    question: "What is the first step in the process of diverting flow from an adjustable choke to a fixed choke?",
    options: ["Bleed off all pressure immediately", "Open the upstream valve on the fixed side", "Stabilize the flow and prepare the fixed choke", "Close the flow head master valve"],
    correctIndex: 2,
    explanation: "Before switching, you must ensure the flow is stable and the fixed choke side is ready for service."
  },
  {
    question: "Which of the following is a safety feature provided by the choke manifold?",
    options: ["Prevents water/gas coning and sand production by limiting flow", "Automatically shuts in the well if oxygen is detected", "Increases the pressure to prevent the well from dying", "Separates toxic gases from the oil stream"],
    correctIndex: 0,
    explanation: "By controlling drawdown and pressure, the manifold helps prevent reservoir issues like coning and sand influx."
  },
  {
    question: "What are the common pressure ratings for choke manifolds mentioned in the summary?",
    options: ["1000, 2000, and 3000 psi", "5000, 10000, and 15000 psi", "2500, 7500, and 12500 psi", "20000, 25000, and 30000 psi"],
    correctIndex: 1,
    explanation: "Standard choke manifolds used in well testing are typically rated for 5K, 10K, or 15K psi."
  },
  {
    question: "What is the purpose of the thermowell in the manifold?",
    options: ["To house a pressure gauge", "To inject chemicals into the flow", "To measure fluid temperature", "To act as a secondary safety relief"],
    correctIndex: 2,
    explanation: "The thermowell is a specialized port used to measure the temperature of the fluid as it passes through the manifold."
  },
  {
    question: "Why is the downstream valve opened first when equalizing pressure in the manifold?",
    options: ["To ensure the flow goes to the separator faster", "To avoid sudden pressure surges and ensure a smoother balance", "To check if the fixed bean is the correct size", "To prevent the fluid from freezing the valves"],
    correctIndex: 1,
    explanation: "Opening the downstream valve first is a safety measure to balance pressure gradually across the system."
  },
  {
    question: "What is the primary purpose of an oil and gas manifold in surface well testing?",
    options: ["To increase the pressure of the fluid before it enters the separator", "To divert flow to different destinations like burners or tanks without stopping the well", "To separate the oil from the gas using gravity", "To measure the chemical concentration of H2S in the stream"],
    correctIndex: 1,
    explanation: "Manifolds act as routing hubs that allow operators to change the destination of the flow without interrupting the continuous operation of the well."
  },
  {
    question: "Why are two burners (port and starboard) used in offshore operations?",
    options: ["To allow for maintenance on one while the other is in use", "To burn oil and gas separately at the same time", "To allow continuous testing regardless of which way the wind is blowing", "To double the disposal capacity for high-flow wells"],
    correctIndex: 2,
    explanation: "Having burners on both sides of the rig ensures that flames and heat are always blown away from the platform by the wind."
  },
  {
    question: "Which destination is common for oil passing through the oil manifold?",
    options: ["The air compressor inlet", "The chemical injection pump", "Storage tanks or burners", "The wellhead flow head"],
    correctIndex: 2,
    explanation: "Oil is typically routed through the manifold to either storage tanks for measurement or burners for disposal."
  },
  {
    question: "How many ball valves are typically found on the oil manifold described?",
    options: ["Two 3-inch valves", "Four gate valves", "Five 2-inch valves", "Ten needle valves"],
    correctIndex: 2,
    explanation: "The oil manifold consists of five 2-inch ball valves to manage its various routing paths."
  },
  {
    question: "What is the structure of the gas manifold compared to the oil manifold?",
    options: ["It has five 2-inch valves and is trailer mounted", "It has two 3-inch ball valves and is skid mounted", "It uses only gate valves for higher pressure", "It is integrated directly into the separator vessel"],
    correctIndex: 1,
    explanation: "The gas manifold uses larger (3-inch) but fewer (2) valves and is skid mounted with a 1440 PSI rating."
  },
  {
    question: "What is the 'golden rule' for safety when switching flow between valves?",
    options: ["Close the active valve completely before opening the new one", "Open the new valve before closing the old one", "Close both valves and wait 5 minutes for pressure to settle", "Use a cheater bar to ensure the valves are turned as fast as possible"],
    correctIndex: 1,
    explanation: "Always opening a new valve before closing the old one ensures the fluid always has an exit path, preventing dangerous pressure buildup."
  },
  {
    question: "Why should you avoid using 'cheater bars' or extra tools to operate the valves?",
    options: ["They make the valve turn too slowly for the test", "They can damage the valve stem or cause mechanical failure", "They are too heavy for one person to carry safely", "They interfere with the pressure gauge readings"],
    correctIndex: 1,
    explanation: "Using tools other than the provided handles can apply excessive torque, leading to broken valve components and leaks."
  },
  {
    question: "What should be clearly labeled on every manifold valve?",
    options: ["The date the valve was manufactured", "The correct flow path (e.g., 'Separator to Starboard Burner')", "The name of the operator who last used it", "The price of the valve for insurance purposes"],
    correctIndex: 1,
    explanation: "Clear labeling of flow paths is a critical safety practice to prevent routing fluids to the wrong or unsafe destination."
  },
  {
    question: "Where does the gas manifold receive its flow from?",
    options: ["Directly from the wellhead", "From the oil manifold exit", "From the gas outlet of the separator", "From the storage tank vent lines"],
    correctIndex: 2,
    explanation: "The gas manifold is positioned to take gas that has already been separated from the liquids inside the separator."
  },
  {
    question: "What is the primary difference between a flow head and a Christmas tree?",
    options: ["The flow head is for permanent production, while the Christmas tree is temporary", "The flow head is a temporary device used during testing before completion", "The Christmas tree is used only for drilling, not production", "There is no difference; they are the exact same equipment"],
    correctIndex: 1,
    explanation: "A flow head is temporary surface equipment used during the well testing phase, whereas a Christmas tree is the permanent installation for the production life of the well."
  },
  {
    question: "Which valve is used to isolate the surface equipment from the downhole string?",
    options: ["Swab valve", "Kill line valve", "Master valve", "Flow line valve"],
    correctIndex: 2,
    explanation: "The master valve is the primary isolation valve that separates the surface equipment from the subsurface test string."
  },
  {
    question: "What is the main function of the Swab valve?",
    options: ["To allow the entry of high-pressure kill mud", "To divert oil to the burners", "To facilitate the insertion and retrieval of wireline or slickline tools", "To rotate the test string under high pressure"],
    correctIndex: 2,
    explanation: "The swab valve is located at the top of the flow head block and is opened to allow tools to pass into the wellbore."
  },
  {
    question: "Which valve on the flow head is typically connected to the Emergency Shutdown (ESD) system?",
    options: ["Master valve", "Swab valve", "Flow line (outlet wing) valve", "Kill line (inlet wing) valve"],
    correctIndex: 2,
    explanation: "The flow line valve is usually equipped with a hydraulic actuator linked to the ESD system to shut in the well automatically in case of an emergency."
  },
  {
    question: "What is the primary use of the Kill line (inlet wing) valve?",
    options: ["To bleed off gas to the atmosphere", "To pump stimulation fluids or heavy mud into the well", "To measure the temperature of the flowing fluid", "To support the weight of the elevators"],
    correctIndex: 1,
    explanation: "The kill line allows for 'killing' the well (controlling pressure) or pumping treatment fluids like acid into the wellbore."
  },
  {
    question: "What does the swivel component allow the operator to do?",
    options: ["Rotate the entire flow head block continuously while drilling", "Rotate the subsurface test string independently of the flow/kill lines", "Increase the pressure rating of the manifold", "Filter out sand before it reaches the master valve"],
    correctIndex: 1,
    explanation: "The swivel allows the test string to rotate without tangling or disconnecting the surface lines, which is especially important on floating rigs."
  },
  {
    question: "Regarding the swivel, which of the following is a critical operational constraint?",
    options: ["It must be rotated at high speeds at all times", "It should NOT be rotated under pressure", "It only works with water-based fluids", "It must be removed before using the master valve"],
    correctIndex: 1,
    explanation: "The swivel is designed for low-speed positioning and should not be rotated when the system is under pressure to prevent seal damage."
  },
  {
    question: "What is the purpose of using 'subs' above and below the flow head valves?",
    options: ["To increase the flow rate of the oil", "To act as a primary seal against high-pressure gas", "To protect threads and make handling with rig elevators easier", "To measure the salinity of the produced water"],
    correctIndex: 2,
    explanation: "Handling subs protect the flow head's internal threads and provide a safe area for the rig's elevators to latch onto."
  },
  {
    question: "In a flow head, the two 'wing' valves serve which two distinct purposes?",
    options: ["One for oil and one for gas", "One for high pressure and one for low pressure", "One for fluid exit (outlet) and one for fluid entry (inlet)", "One for manual operation and one for remote operation"],
    correctIndex: 2,
    explanation: "The flow line wing is the outlet for production, while the kill line wing is the inlet for pumping fluids into the well."
  },
  {
    question: "Why is the master valve considered a 'fail-safe' or critical component?",
    options: ["It is the only valve that can be replaced while the well is flowing", "It provides the ultimate surface barrier between the reservoir and the environment", "It automatically cleans the oil as it passes through", "It is the only valve that does not require maintenance"],
    correctIndex: 1,
    explanation: "As the lowest valve on the flow head, the master valve is the primary surface barrier used to isolate the entire well's pressure."
  },
  {
    question: "What is the main function of an atmospheric gauge tank?",
    options: ["To separate gas from oil at extremely high pressures", "To measure low oil flow rates or calibrate metering devices", "To heat the oil before it reaches the burners", "To provide high-pressure air to the ESD system"],
    correctIndex: 1,
    explanation: "Gauge tanks are non-pressurized vessels used to measure flow when it is too low to drive oil to the burners or when meter calibration is required."
  },
  {
    question: "Why is the use of gauge tanks strictly prohibited when H₂S is present?",
    options: ["Because H₂S causes the oil to expand too much", "Because gauge tanks vent gas directly to the atmosphere, posing a toxic hazard", "Because H₂S makes the oil too thick to be measured manually", "Because the flame arrestors do not work with H₂S gas"],
    correctIndex: 1,
    explanation: "Atmospheric tanks vent gas to the air. If H₂S is present, it would create a lethal environment for the crew around the tank."
  },
  {
    question: "How does a flame arrestor prevent explosions on a gauge tank?",
    options: ["By chemically neutralizing the gas in the tank", "By closing a mechanical shutter when it detects a spark", "By absorbing heat and lowering gas temperature below the autoignition point", "By injecting nitrogen into the vent line automatically"],
    correctIndex: 2,
    explanation: "Flame arrestors use a thermal mass to absorb heat from a flame, cooling the gas-air mixture so the flame cannot pass through the vent into the tank."
  },
  {
    question: "What is a primary operational difference between a surge tank and a gauge tank?",
    options: ["Surge tanks are pressurized and suitable for H₂S service", "Gauge tanks have dual compartments while surge tanks do not", "Surge tanks cannot be used for second-stage separation", "Gauge tanks are made of plastic while surge tanks are steel"],
    correctIndex: 0,
    explanation: "Unlike atmospheric gauge tanks, surge tanks are pressurized vessels that safely contain gas, making them safe for H₂S service."
  },
  {
    question: "Which component is found on a vertical surge tank to prevent gas from entering the liquid outlet?",
    options: ["Flame arrestor", "Vortex breaker", "Stiffening rings", "Grounding strap"],
    correctIndex: 1,
    explanation: "The vortex breaker is installed at the outlet to prevent the formation of a whirlpool that could pull gas into the liquid line."
  },
  {
    question: "What is the purpose of the 'dual compartments' found in many surge tanks?",
    options: ["To separate oil from water inside the tank", "To allow for continuous measurement and flow while emptying one side", "To store oil in one side and gas in the other", "To provide extra weight so the tank does not move"],
    correctIndex: 1,
    explanation: "Dual compartments allow one side to be filled while the other is being emptied, ensuring the well test can continue without interruption."
  },
  {
    question: "To calculate a meter factor using a tank, you compare the oil meter reading to:",
    options: ["The pressure drop across the choke", "The actual volume measured in the tank using levels and coefficients", "The weight of the tank when it is full", "The flow rate recorded by the gas orifice meter"],
    correctIndex: 1,
    explanation: "The 'true' volume is determined by the tank level change multiplied by its volume coefficient; this is then compared to the meter's reading."
  },
  {
    question: "What safety feature is required to prevent static electricity buildup on a gauge tank?",
    options: ["Pressure relief valve", "Grounding strap", "Pilot-operated valve", "Magnetic level system"],
    correctIndex: 1,
    explanation: "A grounding strap ensures that any static charge generated by fluid movement is safely discharged to the earth, preventing sparks."
  },
  {
    question: "What must be done before a technician enters a tank for repairs?",
    options: ["Fill the tank with water to cool it down", "Steam clean and degas the tank to ensure it is safe to breathe", "Turn off the ESD system to prevent accidental closure", "Increase the back pressure to check for leaks"],
    correctIndex: 1,
    explanation: "Entering a confined space requires the tank to be completely emptied, steam cleaned of oil residue, and degassed to prevent asphyxiation or explosion."
  },
  {
    question: "When would a surge tank act as a 'second-stage separator'?",
    options: ["Only when the primary separator fails", "When the pressure is lowered to allow more gas to break out of the oil", "When measuring water flow instead of oil flow", "When the well is first opened and flow is unstable"],
    correctIndex: 1,
    explanation: "By operating at a lower pressure than the primary separator, the surge tank allows additional dissolved gas to separate from the oil."
  },

];

console.log("Total Questions: " + questions.length);


/* ===== Signed-in Student ===== */
let signedInUser = null;
let signedInUserName = "Student";
let authReady = false;


/* ===== State ===== */
let state = {
  currentIndex: 0,
  answers: [],
  timeLeft: 600, // 30 minutes
  shuffled: []
};

let timerInterval = null;
let soundEnabled = true;
let darkMode = false;
let finalScorePercent = 0;
let isQuizFinished = false;

const EMAILJS_CONFIG = {
  publicKey: "DRPB-9Kz19QM5arDb",
  serviceId: "service_s491sl4",
  templateId: "template_8x7uyry"
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
  return signedInUserName;
}



async function startAfterAuth() {
  if (!signedInUser || !authReady) return;

  // Get the student's registered name
  let studentName = signedInUser.displayName || "";

  // Fallback: Get the name from Firestore
  if (!studentName && db) {
    try {
      const userDoc = await db.collection("users")
        .doc(signedInUser.uid)
        .get();

      if (userDoc.exists) {
        studentName = userDoc.data().name || "";
      }
    } catch (error) {
      console.error("Could not retrieve student name:", error);
    }
  }

  // Final fallback: Use email username
  signedInUserName =
    studentName.trim() ||
    signedInUser.email?.split("@")[0] ||
    "Student";

  // No manual name entry required
  if (certNameInput) {
    certNameInput.value = signedInUserName;
  }

  const saved = loadProgress();

  if (saved) {
    resumeModal.classList.remove("hidden");
  } else {
    initQuiz();
  }

  const studentDisplayName = document.getElementById("studentDisplayName");

  if (studentDisplayName) {
    studentDisplayName.textContent = signedInUserName;
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

  // Wait until Firebase identifies the student
  if (typeof auth === "undefined" || !auth) {
    alert("Authentication service unavailable. Please try again.");
    return;
  }

  auth.onAuthStateChanged(async (user) => {

    /********
    if (!user) {
      const redirect = window.location.pathname + window.location.search;

      window.location.href =
        "login.html?redirect=" + encodeURIComponent(redirect);

      return;
    }
    *****/
   
    if (!user) {
      const currentPage =
          window.location.pathname + window.location.search;
  
      const loginURL = new URL(
          "../login.html",
          
          window.location.href
      );
  
      loginURL.searchParams.set("redirect", currentPage);
  
      window.location.replace(loginURL.href);
      return;
  }

    if (authReady) return;

    signedInUser = user;
    authReady = true;

    await startAfterAuth();

  });

});

