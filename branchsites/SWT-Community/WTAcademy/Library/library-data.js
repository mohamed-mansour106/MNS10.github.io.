// library-data.js
const ACADEMY_MODULES = [
    {
      id: 'mod-01',
      code: 'MOD-01',
      title: '01 - Emergency Shut Down (ESD) System',
      category: 'Safety & ESD',
      status: 'Available Now',
      slideCount: 16,
      duration: '45 mins',
      summary: 'Fail-safe hydraulic actuators, 6000 psi / 30 psi pneumatic loops, Hi & Lo Pilots, ESD-BB panel gauges, and mandatory POM barrier rules.',
      keywords: ['esd', 'emergency shut down', 'ssv', 'surface safety valve', 'pom', 'hi-pilot', 'lo-pilot', '6000 psi', '30 psi', 'h2s', 'flowhead', 'actuator', 'v4', 'v5', 'v7', 'v8']
    },
    {
      id: 'mod-02',
      code: 'MOD-02',
      title: '02 - Surface Wellhead & Flowhead Operations',
      category: 'Surface Well Testing',
      status: 'Preview / Syllabus',
      slideCount: 22,
      duration: '60 mins',
      summary: 'Surface Test Tree (Flowhead) valve architecture: Master valve, Swab valve, Flow wing valve, Kill wing valve, and swivel assembly.',
      keywords: ['flowhead', 'surface test tree', 'master valve', 'swab valve', 'kill wing', 'wellhead', 'pressure rating'],
      syllabus: [
        'Flowhead anatomy: Master, Swab, Flow Wing (Hydraulic), and Kill Wing valves',
        'Working pressure ratings (5k, 10k, 15k psi) and H2S NACE MR0175 trim compliance',
        'Wireline & coiled tubing rig-up interface above the Swab Valve',
        'Pre-job pressure testing & grease injection maintenance protocols'
      ]
    },
    {
      id: 'mod-03',
      code: 'MOD-03',
      title: '03 - Choke Manifold & Sand Management',
      category: 'Flow Control',
      status: 'Preview / Syllabus',
      slideCount: 18,
      duration: '50 mins',
      summary: 'Critical vs. sub-critical flow regimes, fixed positive chokes vs. adjustable needle-and-seat chokes, and dual-pot sand filters.',
      keywords: ['choke manifold', 'bean', 'adjustable choke', 'sand filter', 'erosion probe', 'critical flow'],
      syllabus: [
        'Five-valve choke manifold routing for uninterrupted bean changes',
        'Calculating critical flow criteria (downstream P < 0.528 upstream P)',
        'Ultrasonic & intrusive erosion probe monitoring upstream of steam exchanger',
        'Dual sand trap / desander operation and solids blowdown safety'
      ]
    },
    {
      id: 'mod-04',
      code: 'MOD-04',
      title: '04 - Heat Exchangers & Indirect Heaters',
      category: 'Separation & Heating',
      status: 'Available Now',
      slideCount: 20,
      duration: '45 mins',
      summary: 'Water bath indirect heaters, steam exchangers, CMA flameout shutdown systems, thermostatic valves, steam traps, and hydrate prevention protocols.',
      keywords: ['heat exchanger', 'heater', 'steam exchanger', 'hydrates', 'cma', 'asv', 'steam trap', 'water bath', 'fire tube', 'temperature']
    },
    {
      id: 'mod-05',
      code: 'MOD-05',
      title: '05 - Three-Phase Test Separator & Metering',
      category: 'Separation & Heating',
      status: 'Preview / Syllabus',
      slideCount: 28,
      duration: '75 mins',
      summary: 'Gravity separation principles, weir plates, mist extractors, orifice gas metering (Daniel Senior), and Coriolis/turbine liquid meters.',
      keywords: ['separator', 'three phase', 'orifice plate', 'daniel', 'coriolis', 'retention time', 'weir'],
      syllabus: [
        'Primary inlet diverter, coalescing plates, and wire-mesh mist extractor',
        'Liquid retention time optimization and interface level controller tuning',
        'Gas flow measurement via Daniel Senior Orifice Fitting & Barton/DP transmitters',
        'Shrinkage factor & meter factor determination for oil and water legs'
      ]
    },
    {
      id: 'mod-06',
      code: 'MOD-06',
      title: '06 - Gauge & Surge Tanks, Meter Factor & Shrinkage',
      category: 'Surface Well Testing',
      status: 'Available Now',
      slideCount: 20,
      duration: '50 mins',
      summary: 'Atmospheric gauge tanks, pressurized vertical surge tanks, meter factor calibration (f), shrinkage factor calculation, and Combined Meter Factor (CMF).',
      keywords: ['gauge tank', 'surge tank', 'meter factor', 'shrinkage factor', 'cmf', 'bbls', 'sight-glass', 'h2s']
    },
    {
      id: 'mod-07',
      code: 'MOD-07',
      title: '07 - PVT Sampling & Field Fluid Analysis',
      category: 'Measurement & Sampling',
      status: 'Preview / Syllabus',
      slideCount: 20,
      duration: '55 mins',
      summary: 'Surface recombination sampling at the separator, dead-oil/gas bottles, BS&W centrifuge testing, H2S Drager tubes, and API gravity.',
      keywords: ['pvt', 'sampling', 'bsw', 'h2s', 'api gravity', 'gor', 'recombination'],
      syllabus: [
        'Isokinetic separator gas and liquid single-phase cylinder sampling',
        'Validating Gas-Oil Ratio (GOR) stability prior to PVT capture',
        'Field laboratory analysis: BS&W centrifuge, salinity titration, API hydrometer',
        'H2S and CO2 gas detection protocols and sample cylinder transport certification'
      ]
    },
    {
      id: 'mod-09',
      code: 'MOD-09',
      title: '09 - Data Acquisition & Well Testing Calculations',
      category: 'Measurement & Sampling',
      status: 'Preview / Syllabus',
      slideCount: 24,
      duration: '65 mins',
      summary: 'Real-time DAQ sensor calibration, AGA-3 gas rate equations, Horner buildup analysis, and Productivity Index (PI) reporting.',
      keywords: ['daq', 'data acquisition', 'aga-3', 'horner', 'buildup', 'drawdown', 'pi'],
      syllabus: [
        'Pressure, temperature, and differential pressure transmitter zero/span checks',
        'AGA-3 gas flowrate calculation and standard condition corrections (60°F, 14.696 psia)',
        'Drawdown and buildup flow period sequencing for transient pressure analysis',
        'Compiling the final Well Test Report and QA/QC data validation'
      ]
    },
    // library-data.js (Add Module 08)
    {
        id: 'mod-08',
        code: 'MOD-08',
        title: '08 - Surface Well Testing Valves & Operation',
        category: 'Surface Well Testing',
        status: 'Available Now',
        slideCount: 25,
        duration: '60 mins',
        summary: 'High, medium, and low pressure valves: Gate (WOM, McEvoy), Needle (Kerotest, Autoclave), Ball, Plug, Butterfly, Globe, Control, Check, and Relief valves.',
        keywords: ['valves', 'gate valve', 'needle valve', 'ball valve', 'plug valve', 'butterfly valve', 'globe valve', 'relief valve', 'wom', 'mcevoy', 'farris']
    },

    // library-data.js (Add Burners module)
    {
      id: 'mod-10',
      code: 'MOD-10',
      title: '10 - Surface Well Testing Burners & Atomization',
      category: 'Surface Well Testing',
      status: 'Available Now',
      slideCount: 10,
      duration: '75 mins',
      summary: 'Effluent atomization, propane pilot ignition, swivel joints, air/oil/water circuits, and Spitfire, Green Dragon, Mud Burner, and Evergreen (Sunflower) systems.',
      keywords: ['burners', 'atomization', 'spitfire', 'green dragon', 'sea dragon', 'mud burner', 'evergreen', 'sunflower', 'swivel joint', 'propane', 'brfi-bb']
    }


  ];
  
