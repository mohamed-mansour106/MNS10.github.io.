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

