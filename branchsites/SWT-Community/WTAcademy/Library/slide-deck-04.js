// slide-deck-04.js
const HEAT_EXCHANGER_QUIZ_QUESTIONS = [
    {
      q: 'What are the principal functions of a heat exchanger / indirect heater in well testing?',
      options: [
        'Hydrates prevention, viscosity reduction, foam/emulsion breaking, and increased burning efficiency',
        'Only to increase wellhead pressure above 15,000 psi',
        'To filter out sand and solids from the wellbore',
        'To compress natural gas for pipeline export'
      ],
      answer: 0,
      explanation: 'Slide 04 lists the 5 principal functions: hydrates prevention, viscosity reduction, foam reduction, emulsion breaking, and increased burning efficiency.'
    },
    {
      q: 'What is the maximum effluent temperature and working pressure specifications for standard indirect heaters?',
      options: [
        'Max effluent temperature: 200°F (Manifold inlet: 250°F); available in 3k psi and 5k psi WP',
        'Max effluent temperature: 500°F; available in 15k psi WP',
        'Max effluent temperature: 100°F; available in 1k psi WP only',
        'Max effluent temperature: 372°F; 235 psi vessel'
      ],
      answer: 0,
      explanation: 'Slide 10 specifies 3k psi (heliportable) and 5k psi WP options, with a maximum effluent temperature of 200°F.'
    },
    {
      q: 'What is the function of the CMA (CMA Flameout Shut Down System) on the indirect heater?',
      options: [
        'Monitors pilot flame via mercury bulb and automatically trips the ASV (Automatic Shutdown Valve) if flameout occurs',
        'Regulates steam condensate return to the generator',
        'Measures gas flowrate using an orifice plate',
        'Controls the hydraulic pump pressure on the ESD panel'
      ],
      answer: 0,
      explanation: 'Slide 07 illustrates the CMA safety system closing the ASV if the pilot flame goes out.'
    },
    {
      q: 'Which critical safety precaution must be observed when operating and storing heaters and steam exchangers?',
      options: [
        'Never transport when full of water/condensate, verify outlet/choke are open before starting to prevent thermal expansion coil bursting, and flush/inhibit after the job',
        'Keep burner running continuously during transport',
        'Use gate valves as chokes to regulate flow',
        'Touch the vessel bare-handed to check operating temperature'
      ],
      answer: 0,
      explanation: 'Slides 17 and 18 emphasize checking that outlet valves/chokes are open (to prevent thermal expansion bursts), never transporting full vessels, and flushing/inhibiting after jobs.'
    }
  ];
  
  const HEAT_EXCHANGER_SLIDES = [
    {
      num: 1,
      title: 'Heat-Exchangers & Indirect Heaters — Overview',
      tag: 'SLIDE 01 // COVER & PURPOSE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div class="inner-box amber-border" style="padding:1.5rem;">
            <div class="font-mono text-amber" style="font-size:0.75rem; margin-bottom:0.35rem;">WELL TESTING ACADEMY // MODULE 04</div>
            <h2 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">Heat-Exchangers &amp; Indirect Heaters</h2>
            <p class="text-muted" style="font-size:0.9rem;">
              Surface well testing thermal equipment used to prevent hydrate formation, reduce heavy crude viscosity, break emulsions, and ensure stable downstream separation.
            </p>
          </div>
  
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // HYDRATE PREVENTION</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Thermal Energy Input</div>
              <p class="text-muted" style="font-size:0.78rem;">Counters Joule-Thomson cooling across high-differential chokes.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // INDIRECT HEATING</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Water Bath &amp; Steam Coils</div>
              <p class="text-muted" style="font-size:0.78rem;">Safely heats wellbore effluent via fire tube water baths or steam exchangers.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // SAFETY SYSTEMS</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">CMA &amp; Relief Valves</div>
              <p class="text-muted" style="font-size:0.78rem;">Equipped with flameout automatic shutdown valves and pressure relief protection.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 2,
      title: 'Contents & Module Structure',
      tag: 'SLIDE 02 // SYLLABUS MAP',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Module Contents &amp; Engineering Architecture</h3>
          <div class="grid-2">
            ${[
              { idx: '01', name: 'Heat-Exchanger Functions', desc: 'Hydrates prevention, viscosity reduction, foam/emulsion breaking, burning efficiency.', target: 3 },
              { idx: '02', name: 'Indirect Heater Description', desc: 'Fire tube, water bath, diesel burner, CMA control box, and thermostatic valve.', target: 4 },
              { idx: '03', name: 'Heater Operation & Start-Up', desc: 'Step-by-step safety lighting procedure, diesel burner start, and shutdown.', target: 8 },
              { idx: '04', name: 'Heater Selection', desc: 'Onshore/offshore ratings, 3k/5k WP, heating capacity, and utility requirements.', target: 9 },
              { idx: '05', name: 'Steam-Exchanger Description', desc: 'Steam inlet, condensate outlet, choke box, 235 psi vessel, and 372°F steam.', target: 11 },
              { idx: '06', name: 'Steam Trap & Safety', desc: 'Trap operating states, safety relief valves, thermal expansion, and maintenance.', target: 13 }
            ].map(item => `
              <button onclick="goToSlide(${item.target})" class="inner-box" style="text-align:left; display:flex; flex-direction:column; gap:0.4rem;">
                <div style="display:flex; justify-content:space-between; width:100%;">
                  <span class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SECTION ${item.idx}</span>
                  <span class="font-mono text-muted" style="font-size:0.7rem;">Slide ${String(item.target + 1).padStart(2, '0')} &rarr;</span>
                </div>
                <div style="font-size:0.95rem; font-weight:700; color:#fff;">${item.name}</div>
                <p class="text-muted" style="font-size:0.78rem; font-weight:400;">${item.desc}</p>
              </button>
            `).join('')}
          </div>
        </div>
      `
    },
    {
      num: 3,
      title: 'Lecture Objectives',
      tag: 'SLIDE 03 // LEARNING OUTCOMES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          <div class="inner-box">
            <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.2rem;">Lecture Objectives</h3>
            <p class="font-mono text-muted" style="font-size:0.72rem;">BY THE END OF THIS LECTURE, FIELD PERSONNEL MUST BE ABLE TO:</p>
          </div>
          ${[
            { code: 'OBJ-01', title: 'Explain the Functions of Heat-Exchangers', detail: 'Articulate how indirect heaters and steam exchangers prevent hydrates and reduce oil viscosity.' },
            { code: 'OBJ-02', title: 'Describe Principles of Operation', detail: 'Understand water bath indirect heating, CMA flameout control, and steam trap cycling.' },
            { code: 'OBJ-03', title: 'Select Equipment Properly', detail: 'Evaluate working pressure ratings (3k, 5k, 10k, 15k psi WP), heating capacities, and utility supplies.' },
            { code: 'OBJ-04', title: 'List All Safety Aspects', detail: 'Master pressure relief settings, thermal expansion coil precautions, and post-job flushing protocols.' }
          ].map(obj => `
            <div class="inner-box" style="display:flex; align-items:flex-start; gap:0.85rem;">
              <span class="badge badge-emerald" style="flex-shrink:0; margin-top:0.15rem;">${obj.code}</span>
              <div>
                <div style="font-weight:700; font-size:0.9rem; color:#fff;">${obj.title}</div>
                <p class="text-muted" style="font-size:0.78rem; margin-top:0.2rem;">${obj.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `
    },
    {
      num: 4,
      title: 'Principal Functions of Heat-Exchangers',
      tag: 'SLIDE 04 // CORE THERMAL BENEFITS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Principal Functions in Surface Well Testing</h3>
          <div class="grid-3">
            <div class="inner-box amber-border">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">FUNCTION 01</div>
              <div style="font-weight:700; font-size:1rem; margin:0.35rem 0;">Hydrates Prevention</div>
              <p class="text-muted" style="font-size:0.78rem;">Heats wellbore fluids to counteract temperature drops caused by pressure reduction across the choke manifold.</p>
            </div>
            <div class="inner-box emerald-border">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">FUNCTION 02</div>
              <div style="font-weight:700; font-size:1rem; margin:0.35rem 0;">Viscosity Reduction</div>
              <p class="text-muted" style="font-size:0.78rem;">Lowers heavy crude viscosity to improve fluid flow and separation efficiency in the test separator.</p>
            </div>
            <div class="inner-box sky-border">
              <div class="font-mono text-sky" style="font-size:0.72rem; font-weight:700;">FUNCTION 03 // OTHERS</div>
              <div style="font-weight:700; font-size:1rem; margin:0.35rem 0;">Emulsions &amp; Burning</div>
              <p class="text-muted" style="font-size:0.78rem;">Reduces foam, assists emulsion breaking, and increases overall flare burner efficiency.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 5,
      title: 'Indirect Heater Description & Components',
      tag: 'SLIDE 05 // HEATER HARDWARE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Indirect Heater Hardware &amp; Internal Layout</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.75rem; font-weight:700;">MAJOR ASSEMBLY COMPONENTS</div>
              <div class="inner-box font-mono" style="background:var(--panel); font-size:0.75rem;">&bull; Water Bath Vessel &amp; Fire Tube Liner</div>
              <div class="inner-box font-mono" style="background:var(--panel); font-size:0.75rem;">&bull; Diesel Burner &amp; Mixing Chamber</div>
              <div class="inner-box font-mono" style="background:var(--panel); font-size:0.75rem;">&bull; Stack / Chimney &amp; Spark Arrestor</div>
              <div class="inner-box font-mono" style="background:var(--panel); font-size:0.75rem;">&bull; Compressed Air &amp; Propane Lines</div>
              <div class="inner-box font-mono" style="background:var(--panel); font-size:0.75rem;">&bull; Flame Arrestor &amp; Adjustable Flap</div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; justify-content:center; gap:0.75rem;">
              <div class="font-mono text-emerald" style="font-size:0.75rem; font-weight:700;">PROCESS CONNECTIONS</div>
              <div class="inner-box" style="background:var(--panel); display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">IN &amp; OUT CONNECTIONS</span>
                <span class="font-mono text-amber" style="font-weight:700;">3" Weco-Union</span>
              </div>
              <p class="text-muted" style="font-size:0.78rem;">
                Well effluent passes through coils immersed in a heated water bath, preventing direct flame contact with hydrocarbon lines.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 6,
      title: 'Heater P&ID Schematic & Circuit Layout',
      tag: 'SLIDE 06 // SYSTEM P&ID',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Indirect Heater Control Schematic &amp; Flow Path</h3>
          <p class="text-muted" style="font-size:0.8rem;">
            Shows the integration of propane pilot supply, diesel burner loop, thermostatic water bath control valve, and effluent coil choke box.
          </p>
          <div class="inner-box" style="background:#111827; padding:1rem; text-align:center;">
            <div class="font-mono text-amber" style="font-size:0.85rem; font-weight:bold; margin-bottom:0.5rem;">HEATER SCHEMATIC SUMMARY</div>
            <div class="font-mono text-muted" style="font-size:0.75rem; line-height:1.6;">
              Propane (35 psi) &rarr; CMA Control Box &rarr; Pilot Light (5 psi)<br/>
              Diesel Burner + Air Supply &rarr; Fire Tube Heating &rarr; Water Bath Thermostatic Valve<br/>
              Effluent In &rarr; Choke Box &rarr; Coils (Water Bath) &rarr; Effluent Out (Bypass equipped)
            </div>
          </div>
        </div>
      `
    },
    {
      num: 7,
      title: 'CMA Flameout Shut Down System',
      tag: 'SLIDE 07 // SAFETY SHUTDOWN ARCHITECTURE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">CMA Flameout Shut Down System &amp; ASV</h3>
          <div class="grid-2">
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">PILOT FLAME SENSING</div>
              <div style="font-size:0.95rem; font-weight:700;">Mercury Bulb &amp; Capillary Tube</div>
              <p class="text-muted" style="font-size:0.78rem;">
                The pilot flame heats the mercury bulb, generating pressure to hold the 3-way valve open and keep the Automatic Shutdown Valve (ASV) open.
              </p>
            </div>
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">AUTOMATIC TRIP ACTION</div>
              <div style="font-size:0.95rem; font-weight:700;">ASV Fuel Cut-Off</div>
              <p class="text-muted" style="font-size:0.78rem;">
                If the pilot flame extinguishes, mercury cools, pressure drops, the return spring shifts the 3-way valve, and the ASV instantly shuts off diesel supply to the burner.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 8,
      title: 'Water Bath Temperature Control (Thermostatic Valve)',
      tag: 'SLIDE 08 // THERMOSTATIC VALVE PRINCIPLE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Water Bath Thermostatic Valve Mechanism</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                Maintains stable water bath temperature by modulating fuel gas/diesel flow to the burner via an expansible fluid thermal bulb and capillary tube.
              </p>
              <div class="inner-box" style="display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">SENSING ELEMENT</span>
                <span class="font-mono text-amber" style="font-weight:700;">Temperature Bulb &amp; Capillary Tube</span>
              </div>
              <div class="inner-box" style="display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">ACTUATION</span>
                <span class="font-mono text-emerald" style="font-weight:700;">Expansible Fluid Chamber &amp; Stem</span>
              </div>
            </div>
            <div class="inner-box" style="font-family:monospace; font-size:0.75rem; display:flex; flex-direction:column; gap:0.35rem;">
              <div class="text-amber" style="font-weight:700;">KEY COMPONENTS:</div>
              <div>&bull; Temperature bulb in water bath</div>
              <div>&bull; Capillary tube &amp; expansible fluid chamber</div>
              <div>&bull; Valve control stem &amp; adjusting screw</div>
              <div>&bull; Return spring &amp; regulating index</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 9,
      title: 'Heater Operation: Start-Up & Shut-Down Safety Procedure',
      tag: 'SLIDE 09 // OPERATING PROCEDURES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Indirect Heater Operating Procedures</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">A) PILOT LIGHT START-UP</div>
              <div style="font-size:0.78rem; line-height:1.5;">
                1. Flush fire tube thoroughly<br/>
                2. Open propane supply (35 psi)<br/>
                3. Turn CMA knob to manual (ASV open)<br/>
                4. Open propane to pilot (5 psi)<br/>
                5. Light pilot via spark plug<br/>
                6. Wait for knob to click to automatic<br/>
                7. Close propane to pilot<br/>
                8. Wait (&le; 30 sec) for ASV to stay closed<br/>
                9. Flush fire tube
              </div>
            </div>
            <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">B) DIESEL BURNER &amp; C) SHUT-DOWN</div>
              <div style="font-size:0.78rem; line-height:1.5;">
                <strong>Diesel Burner Start:</strong><br/>
                Repeat 1-6 &rarr; Apply 1 bar air &rarr; Open diesel valve &rarr; Start diesel pump &rarr; Increase to 4 bar air &rarr; Check smokeless chimney &rarr; Adjust.<br/>
                <strong>Shut-Down Procedure:</strong><br/>
                13. Stop diesel pump &amp; close valve<br/>
                14. Close propane &amp; air supply valves<br/>
                15. Wait for ASV to close<br/>
                16. Flush fire tube
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 10,
      title: 'Heater Selection Criteria & Utility Requirements',
      tag: 'SLIDE 10 // SELECTION SPECS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Indirect Heater Selection &amp; Utilities</h3>
          <div class="grid-2">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.4rem;">SELECTION CRITERIA</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Safety regulations (Onshore / Offshore)<br/>
                &bull; Working Pressures: 3k psi (heliportable) &amp; 5k psi WP<br/>
                &bull; Heating Capacity: 2.0 MMBtu/hr (3k WP) vs 0.6 MMBtu/hr (5k WP)<br/>
                &bull; Max Effluent Temp: 200°F (Manifold inlet: 250°F)<br/>
                &bull; H2S service compliance &amp; available footprint
              </div>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700; margin-bottom:0.4rem;">REQUIRED UTILITIES</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Compressed air supply for burner &amp; sweep<br/>
                &bull; Electricity supply for pilot light ignition<br/>
                &bull; Diesel supply &amp; pump for burner<br/>
                &bull; Propane gas supply for pilot light<br/>
                &bull; Water &amp; corrosion inhibitors for vessel
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 11,
      title: 'Steam-Exchanger Description & Specifications',
      tag: 'SLIDE 11 // STEAM EXCHANGER SPECS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Steam-Exchanger Description &amp; Ratings</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                Uses saturated steam from a steam generator to heat well effluent flowing through internal coils. Highly efficient for high-pressure operations.
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                MAX EFFLUENT TEMP: 250°F
              </div>
              <div class="inner-box font-mono text-sky" style="font-size:0.78rem;">
                MAX STEAM TEMP: 372°F
              </div>
              <div class="inner-box font-mono text-emerald" style="font-size:0.78rem;">
                MAX VESSEL PRESSURE: 235 psi
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.78rem;">
              <div class="font-mono text-amber" style="font-weight:700;">KEY COMPONENTS:</div>
              <div>&bull; Effluent Inlet &amp; Outlet (3" Weco-Union)</div>
              <div>&bull; Choke box &amp; manual valves</div>
              <div>&bull; Steam inlet &amp; automatic control valve (ACV)</div>
              <div>&bull; Steam trap &amp; condensate outlet</div>
              <div>&bull; Safety relief valve &amp; thermometric well</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 12,
      title: 'Steam-Exchanger Operation (Temperature Control)',
      tag: 'SLIDE 12 // STEAM ACV CONTROL LOOP',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Steam-Exchanger Temperature Regulation</h3>
          <p class="text-muted" style="font-size:0.8rem;">
            The controller monitors effluent outlet temperature via a temperature bulb and modulates the automatic control valve (ACV) on the steam inlet line.
          </p>
          <div class="inner-box" style="background:#111827; padding:1rem; text-align:center;">
            <div class="font-mono text-sky" style="font-size:0.85rem; font-weight:bold; margin-bottom:0.5rem;">REGULATION LOOP FLOW</div>
            <div class="font-mono text-muted" style="font-size:0.75rem; line-height:1.6;">
              Air Supply &rarr; Pressure Regulator &rarr; Controller<br/>
              Effluent Temperature Bulb &rarr; Controller &rarr; Automatic Control Valve (ACV)<br/>
              Steam Inlet Modulated &rarr; Effluent Coils &rarr; Steam Trap Condensate Return
            </div>
          </div>
        </div>
      `
    },
    {
      num: 13,
      title: 'Steam Trap Operation (5 Operating States)',
      tag: 'SLIDE 13 // STEAM TRAP CYCLING',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Steam Trap Operating States</h3>
          <div class="grid-3">
            <div class="inner-box" style="font-size:0.78rem;">
              <strong class="text-amber">1. Start:</strong><br/>Trap open, clearing initial condensate.
            </div>
            <div class="inner-box" style="font-size:0.78rem;">
              <strong class="text-amber">2. Circulation:</strong><br/>Steam bubbles present, trap open.
            </div>
            <div class="inner-box" style="font-size:0.78rem;">
              <strong class="text-emerald">3. No Circulation:</strong><br/>100% steam, trap closed.
            </div>
            <div class="inner-box" style="font-size:0.78rem;">
              <strong class="text-emerald">4. Circulation:</strong><br/>Still steam, trap closed.
            </div>
            <div class="inner-box" style="font-size:0.78rem;">
              <strong class="text-sky">5. Circulation:</strong><br/>Water only, trap open to return condensate.
            </div>
          </div>
        </div>
      `
    },
    {
      num: 14,
      title: 'Steam-Exchanger Selection & Specifications',
      tag: 'SLIDE 14 // STEAM EXCHANGER SELECTION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Steam-Exchanger Selection Criteria</h3>
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.5rem;">KEY SELECTION PARAMETERS</div>
            <div class="grid-2" style="font-size:0.8rem; line-height:1.6;">
              <div>
                &bull; Safety regulations (Onshore / Offshore)<br/>
                &bull; Working Pressures: 5k, 10k, 15k psi WP<br/>
                &bull; Heating Capacity: 4.3 MMBtu/hr
              </div>
              <div>
                &bull; Max Effluent Temperature: 250°F<br/>
                &bull; Steam Supply availability<br/>
                &bull; H2S service &amp; 3" Weco-Union connections
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 15,
      title: 'Steam-Exchanger Safety Relief Valves',
      tag: 'SLIDE 15 // RELIEF VALVE PROTECTION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Steam-Exchanger Safety Relief Valves</h3>
          <div class="grid-2">
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">VESSEL RATING &amp; RELIEF SIZING</div>
              <div style="font-size:0.95rem; font-weight:700;">Vessel Working Pressure: 235 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">
                &bull; <strong>10k &amp; 15k psi WP units:</strong> Equipped with two 6" safety relief valves set to 100% vessel WP.<br/>
                &bull; <strong>5k psi WP units:</strong> Equipped with one 1½" safety relief valve set to 100% vessel WP.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; justify-content:center; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">VALVE DESIGN FEATURES</div>
              <div style="font-size:0.78rem; line-height:1.5;">
                &bull; Balanced bellows design ("Balan" seal bellow)<br/>
                &bull; Atmospheric pressure balancing<br/>
                &bull; Adjustable pressure screw
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 16,
      title: 'Critical Safety Rules: Transport & Thermal Expansion',
      tag: 'SLIDE 16 // CRITICAL SAFETY (PART 1)',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Heater &amp; Steam-Exchanger Safety — Part 1</h3>
          <div class="grid-3">
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">RULE 01 // TRANSPORT</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">Never Transport Full</div>
              <p class="text-muted" style="font-size:0.78rem;">Do not transport heater when full of water, or steam-exchanger when full of condensate. Frames cannot support this extra weight.</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">RULE 02 // PRE-START CHECK</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">Verify Valves Open</div>
              <p class="text-muted" style="font-size:0.78rem;">Before starting, verify that outlet valves and chokes are fully open.</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">RULE 03 // THERMAL EXPANSION</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">Coil Bursting Risk</div>
              <p class="text-muted" style="font-size:0.78rem;">If coils are filled with liquid and valves closed, thermal expansion can generate enough pressure to burst the coils.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 17,
      title: 'Critical Safety Rules: Operations & Maintenance',
      tag: 'SLIDE 17 // CRITICAL SAFETY (PART 2)',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Heater &amp; Steam-Exchanger Safety — Part 2</h3>
          <div class="grid-2">
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">OPERATIONAL WARNINGS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Never touch the vessel with bare hands when working.<br/>
                &bull; Never flow well through coils if a choke is not installed (sand/fluids erode choke box threads).<br/>
                &bull; Do not use adjustable choke to stop flow; you can break the stem tip.<br/>
                &bull; Do not use inlet/outlet gate valves as chokes.
              </div>
            </div>
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">POST-JOB MAINTENANCE</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; After job completion, flush the coils thoroughly with soft water.<br/>
                &bull; Fill coils with corrosion inhibitor before storage.<br/>
                &bull; Inspect all Weco-unions, safety relief valves, and CMA control systems.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 18,
      title: 'Technical References & Documentation',
      tag: 'SLIDE 18 // REFERENCES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">References &amp; Field Documentation</h3>
          <div class="grid-2">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-01 // FIELD OPERATIONS</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">FOH for SWT (Run, Chapter 2)</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Field Operations Handbook guidelines for indirect heater and steam-exchanger rig-up, operation, and safety testing.
              </p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-02 // TECHNICAL DATA</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">InTouch &amp; ST Training Manuals</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Technical data sheets, maintenance manuals, CMA troubleshooting guides, and Surface Training course materials.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 19,
      title: 'Summary & Key Takeaways',
      tag: 'SLIDE 19 // MODULE SUMMARY',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Module Summary &amp; Best Practices</h3>
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem;">THERMAL CONTROL</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">Hydrate Defense</div>
              <p class="text-muted" style="font-size:0.78rem;">Always ensure adequate heating capacity is online before opening chokes to prevent severe hydrate blockage.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem;">SAFETY INTERLOCKS</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">CMA &amp; Reliefs</div>
              <p class="text-muted" style="font-size:0.78rem;">Verify CMA flameout shutdown and safety relief valve settings prior to well opening.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem;">PRESERVATION</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">Flush &amp; Inhibit</div>
              <p class="text-muted" style="font-size:0.78rem;">Thoroughly flush with soft water and inhibit coils post-job to prevent internal corrosion and pitting.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 20,
      title: 'Knowledge Check Quiz',
      tag: 'SLIDE 20 // SELF-ASSESSMENT',
      render: () => renderHeatExchangerQuizSlide()
    }
  ];
  
  // Quiz state & rendering helper for Module 04
  let heQuizAnswers = {};
  let heQuizSubmitted = false;
  
  function renderHeatExchangerQuizSlide() {
    let score = 0;
    if (heQuizSubmitted) {
      HEAT_EXCHANGER_QUIZ_QUESTIONS.forEach((item, i) => {
        if (heQuizAnswers[i] === item.answer) score++;
      });
    }
  
    return `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:700;">Heat Exchangers &amp; Heaters Knowledge Check</h3>
            <p class="text-muted" style="font-size:0.78rem;">Answer all 4 questions based on the 20-slide Heat Exchangers technical deck.</p>
          </div>
          ${
            heQuizSubmitted
              ? `<div class="badge badge-emerald" style="padding:0.5rem 0.85rem; font-size:0.78rem;">
                  SCORE: ${score} / ${HEAT_EXCHANGER_QUIZ_QUESTIONS.length} (${Math.round((score / HEAT_EXCHANGER_QUIZ_QUESTIONS.length) * 100)}%)
                 </div>`
              : ''
          }
        </div>
  
        ${HEAT_EXCHANGER_QUIZ_QUESTIONS.map((item, qIdx) => {
          const selected = heQuizAnswers[qIdx];
          return `
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="font-weight:600; font-size:0.88rem;">
                <span class="font-mono text-amber" style="margin-right:0.35rem;">Q${qIdx + 1}.</span> ${item.q}
              </div>
              <div class="grid-2" style="gap:0.5rem;">
                ${item.options.map((opt, oIdx) => {
                  let styleStr = 'background:var(--panel); border-color:var(--borderline); color:#cbd5e1; text-align:left; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.78rem;';
                  if (heQuizSubmitted) {
                    if (oIdx === item.answer) {
                      styleStr += 'background:rgba(16,185,129,0.2); border-color:#10b981; color:#a7f3d0; font-weight:700;';
                    } else if (selected === oIdx && oIdx !== item.answer) {
                      styleStr += 'background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fecaca;';
                    }
                  } else if (selected === oIdx) {
                    styleStr += 'background:rgba(245,158,11,0.2); border-color:#f59e0b; color:#fde68a; font-weight:700;';
                  }
  
                  return `
                    <button onclick="selectHEQuizOption(${qIdx}, ${oIdx})" style="${styleStr}">
                      <span class="font-mono" style="margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                  `;
                }).join('')}
              </div>
              ${
                heQuizSubmitted
                  ? `<div class="inner-box" style="background:var(--panel); font-size:0.75rem; color:#cbd5e1;">
                      <strong class="text-emerald font-mono">EXPLANATION:</strong> ${item.explanation}
                     </div>`
                  : ''
              }
            </div>
          `;
        }).join('')}
  
        <div style="display:flex; gap:0.65rem;">
          <button onclick="submitHEQuiz()" class="btn btn-primary" style="padding:0.65rem 1.15rem; font-size:0.8rem;">
            Submit &amp; Grade Assessment
          </button>
          <button onclick="resetHEQuiz()" class="btn font-mono">Reset Quiz</button>
        </div>
      </div>
    `;
  }
  
  function selectHEQuizOption(qIdx, oIdx) {
    if (heQuizSubmitted) return;
    heQuizAnswers[qIdx] = oIdx;
    renderActiveSlide();
  }
  
  function submitHEQuiz() {
    if (Object.keys(heQuizAnswers).length < HEAT_EXCHANGER_QUIZ_QUESTIONS.length) {
      showToast('Please answer all 4 questions before submitting.');
      return;
    }
    heQuizSubmitted = true;
    if (!state.completedSlides.includes(20)) {
      state.completedSlides.push(20);
      saveState();
      renderSlideIndex();
    }
    renderActiveSlide();
    showToast('Knowledge Check graded! Slide 20 marked complete.');
  }
  
  function resetHEQuiz() {
    heQuizAnswers = {};
    heQuizSubmitted = false;
    renderActiveSlide();
  }
  