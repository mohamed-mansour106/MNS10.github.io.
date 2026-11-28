// slide-deck-08.js
const VALVES_QUIZ_QUESTIONS = [
    {
      q: 'Why must Gate, Ball, and Plug valves never be used for throttling (partial opening)?',
      options: [
        'Restricted flow through them will erode the seals, gate, or seat, causing reliable sealing failure.',
        'They will instantly explode under high pressure.',
        'They require an electric motor to throttle.',
        'They can only operate in vertical pipelines.'
      ],
      answer: 0,
      explanation: 'Slide 21 specifies that gate, ball, and plug valves must be fully open or fully closed because throttling causes erosion on seals, gates, or seats.'
    },
    {
      q: 'What is a key operational difference between WOM and McEvoy Gate valves regarding sealing?',
      options: [
        'WOM uses metal/metal sealing, whereas McEvoy uses a grease sealing compound system.',
        'McEvoy valves cannot handle pressures above 1,000 psi.',
        'WOM valves require continuous grease injection under pressure.',
        'McEvoy valves have no internal gate component.'
      ],
      answer: 0,
      explanation: 'Slide 4 notes that WOM valves utilize metal-to-metal sealing, while McEvoy valves rely on a grease sealing compound system.'
    },
    {
      q: 'When using a Needle valve with an instrument (like a pressure gauge), how far should it typically be opened?',
      options: [
        'Only one or two turns — just enough to permit flow and allow correct gauge registration while allowing quick closure.',
        'Always fully opened and then backed off two full turns.',
        'Fully opened at all times.',
        'Closed completely during normal operation.'
      ],
      answer: 0,
      explanation: 'Slide 24 states that needle valves should only be opened one or two turns to allow quick isolation of the gauge in case of sudden pressure spikes.'
    },
    {
      q: 'What practice is commonly used when operating Gate valves to detect plugging or seating issues?',
      options: [
        'Counting the number of turns taken to open or close the valve.',
        'Measuring the external temperature of the valve body.',
        'Weighing the handwheel before and after operation.',
        'Checking the electrical resistance across the flanges.'
      ],
      answer: 0,
      explanation: 'Slide 22 notes that counting the number of turns taken to open/close gate valves lets the operator notice if the valve is plugged or failing to seat correctly.'
    }
  ];
  
  const VALVES_SLIDES = [
    {
      num: 1,
      title: 'Surface Testing Valves — Overview',
      tag: 'SLIDE 01 // COVER & PURPOSE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div class="inner-box amber-border" style="padding:1.5rem;">
            <div class="font-mono text-amber" style="font-size:0.75rem; margin-bottom:0.35rem;">WELL TESTING ACADEMY // MODULE 08</div>
            <h2 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">Surface Testing Valves</h2>
            <p class="text-muted" style="font-size:0.9rem;">
              Devices fitted to piping and equipment designed to control fluid flow, isolate pressure domains, and protect well test packages across high, medium, and low pressure ratings.
            </p>
          </div>
  
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // HIGH PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">5,000 psi &amp; Above</div>
              <p class="text-muted" style="font-size:0.78rem;">Gate valves (WOM, McEvoy) &amp; Needle valves (Kerotest, Autoclave) for flowheads &amp; manifolds.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // MEDIUM PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">~1,500 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">Ball valves (Mapegaz, Gachot) &amp; Plug valves (Texseal, Balon) for separators &amp; burners.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // LOW PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">~180 psi &amp; Utilities</div>
              <p class="text-muted" style="font-size:0.78rem;">Butterfly valves (Weco) &amp; Globe valves for tanks, water lines, and pneumatic circuits.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 2,
      title: 'Valve Definition & Sizing',
      tag: 'SLIDE 02 // BASICS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Valve Definition &amp; Nominal Sizing</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">DEFINITION</div>
              <div style="font-size:0.95rem; font-weight:700;">Fluid Flow Control Devices</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Valves or taps are devices fitted to piping or equipment and designed to control the flow of fluids.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">NOMINAL DIAMETER</div>
              <div style="font-size:0.95rem; font-weight:700;">Internal Diameter (ID)</div>
              <p class="text-muted" style="font-size:0.78rem;">
                For example, a 3" gate, ball, or butterfly valve means a 3" Internal Diameter (ID) flow path.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 3,
      title: 'Valve Pressure Classifications Matrix',
      tag: 'SLIDE 03 // PRESSURE MATRIX',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Valve Matrix by Pressure &amp; Application</h3>
          <div class="grid-3">
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">HIGH PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">5,000 psi &amp; Above</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Flowhead, Choke Manifold, Sand-trap, Heaters.<br/>
                <strong>Types:</strong> Gate (WOM, McEvoy) &amp; Needle (Kerotest, Autoclave).
              </p>
            </div>
            <div class="inner-box amber-border">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">MEDIUM PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">~1,500 psi</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Separators, Oil/Gas Manifolds, Pumps, Burners.<br/>
                <strong>Types:</strong> Ball (Mapegaz, Gachot) &amp; Plug (Texseal, Balon).
              </p>
            </div>
            <div class="inner-box emerald-border">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">LOW PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">~180 psi</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Tanks, Utility &amp; Air Lines.<br/>
                <strong>Types:</strong> Butterfly (Weco) &amp; Globe valves.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 4,
      title: 'Gate Valves — Overview & WOM Features',
      tag: 'SLIDE 04 // GATE VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gate Valves: On/Off Shut-Off &amp; Specifications</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">KEY CHARACTERISTICS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Used for shut off (on/off function)<br/>
                &bull; High pressure ratings: 5k, 10k, 15k, 20k psi<br/>
                &bull; Applications: Flowhead, Choke Manifold, Steam Exchanger, Sand Trap<br/>
                &bull; Standard sizes: $3\text{ }1/16^{\prime\prime}$ to $4\text{ }1/16^{\prime\prime}$
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SEALING METHODS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>WOM Valve:</strong> Metal-to-metal sealing<br/>
                &bull; <strong>McEvoy Valve:</strong> Grease sealing compound system<br/>
                &bull; Full smooth waterway with zero recesses to trap debris
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 5,
      title: 'Gate Valve Assembly (WOM P&ID)',
      tag: 'SLIDE 05 // WOM GATE VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">WOM Gate Valve Internal P&amp;ID &amp; Components</h3>
          <div class="grid-2" style="font-size:0.78rem; gap:0.65rem;">
            <div class="inner-box" style="background:var(--panel);">
              <strong class="text-amber">Upper Operator Assembly:</strong><br/>
              &bull; Handwheel, Stem Adapter &amp; Thrust Bearings<br/>
              &bull; Packing Gland Seal &amp; Stem Packing<br/>
              &bull; Alemite grease fittings &amp; bearing cap
            </div>
            <div class="inner-box" style="background:var(--panel);">
              <strong class="text-emerald">Lower Body &amp; Trim:</strong><br/>
              &bull; Bonnet studs, nuts, and gasket<br/>
              &bull; Bleeder plug for pressure relief<br/>
              &bull; Solid gate moving across metal seats
            </div>
          </div>
        </div>
      `
    },
    {
      num: 6,
      title: 'WOM Gate Valve Sealing Details',
      tag: 'SLIDE 06 // WOM SEALING',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">WOM Metal-to-Metal Seal Architecture</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                The WOM gate valve features precision metal-to-metal seals between the gate and seat assemblies, backed by O-rings on the seal carrier and a storage-only grease fitting.
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                SEALING TYPE: Precision Metal-to-Metal Seal
              </div>
            </div>
            <div class="inner-box font-mono" style="font-size:0.75rem; display:flex; flex-direction:column; gap:0.35rem;">
              <div class="text-emerald" style="font-weight:700;">INTERNAL ELEMENTS:</div>
              <div>&bull; Gate passing through dual seat assemblies</div>
              <div>&bull; Seal assembly with O-ring carrier</div>
              <div>&bull; Grease fitting designated for storage preservation only</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 7,
      title: 'WOM Seat Retainer Assembly',
      tag: 'SLIDE 07 // WOM SEAT RETAINER',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">WOM Seat Retainer &amp; Backup Ring Configuration</h3>
          <div class="inner-box" style="font-size:0.8rem; line-height:1.6;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">SEAT STACK ARCHITECTURE</div>
            &bull; Seat Seal &amp; Seat Backup Ring<br/>
            &bull; Seat Retainer Backup Ring<br/>
            &bull; Seat Retainer Top Seal &amp; Bottom Seal<br/>
            &bull; Ensures absolute bubble-tight containment across high-pressure well test loops.
          </div>
        </div>
      `
    },
    {
      num: 8,
      title: 'McEvoy Gate Valve & Grease Sealing',
      tag: 'SLIDE 08 // MCEVOY GATE VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">McEvoy Gate Valve Grease Sealing System</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SPECIAL SEALING COMPOUND</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Sealing is accomplished using special sealing compound grease injected via dedicated grease fittings connected to internal grease pistons.
              </p>
            </div>
            <div class="inner-box" style="font-size:0.78rem; line-height:1.6;">
              <strong class="text-emerald font-mono">PORTS &amp; BLEEDERS:</strong><br/>
              &bull; Bleeder screw (trapped pressure relief)<br/>
              &bull; Bottom grease fitting for standard grease<br/>
              &bull; Grease piston &amp; lifting nut mechanism
            </div>
          </div>
        </div>
      `
    },
    {
      num: 9,
      title: 'McEvoy Self-Greasing Mechanism',
      tag: 'SLIDE 09 // MCEVOY OPERATION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">McEvoy Self-Greasing &amp; Sealing Under Pressure</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                McEvoy valves feature internal grease reservoirs connected to the seats and gates, allowing grease injection under pressure for automatic self-sealing when the valve is closed.
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                ADVANTAGE: Self-greasing and sealing under pressure when closed
              </div>
            </div>
            <div class="inner-box font-mono" style="font-size:0.75rem;">
              <strong class="text-emerald">OPERATIONAL RULE:</strong><br/>
              &bull; Possibility to inject grease under pressure<br/>
              &bull; Bottom grease fitting reserved for normal grease only
            </div>
          </div>
        </div>
      `
    },
    {
      num: 10,
      title: 'Needle Valves — Design & Instrumentation',
      tag: 'SLIDE 10 // NEEDLE VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Needle Valves for Shut-Off &amp; Bleed-Off</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS &amp; USAGE</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Shut-off (on/off) + flow control (bleed off part of flow)<br/>
                &bull; High pressure: 5k, 10k, 15k, 20k psi<br/>
                &bull; Sizes: $1/4^{\prime\prime}$, $1/2^{\prime\prime}$, $3/4^{\prime\prime}$ (NPT fittings)<br/>
                &bull; Metal-to-metal sealing needle and face
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">MANUFACTURERS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>Kerotest:</strong> Up to 10k psi<br/>
                &bull; <strong>Autoclave Engineers:</strong> 10k, 15k, 20k psi<br/>
                &bull; Applications: Instrumentation on flowheads, manifolds, heaters, sand traps
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 11,
      title: 'Ball & Plug Valves — Medium Pressure Overview',
      tag: 'SLIDE 11 // BALL & PLUG VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Ball and Plug Valves: Quarter-Turn Operation</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">OPERATING CHARACTERISTICS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Used for shut-off (on/off) via $1/4$ turn<br/>
                &bull; Medium pressure rating (~1,500 psi)<br/>
                &bull; Applications: Separators, burners, pumps, etc.<br/>
                &bull; Standard sizes: $1^{\prime\prime}$ to $4^{\prime\prime}$
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SEALING METHOD</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; PTFE (Teflon) seal rings or seats<br/>
                &bull; Features stem packing, seal insert, spherical ball, and body seals
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 12,
      title: 'Mapegaz Ball Valve (Spherical)',
      tag: 'SLIDE 12 // MAPEGAZ BALL VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Mapegaz Spherical Ball Valve</h3>
          <div class="inner-box" style="font-size:0.8rem; line-height:1.6;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">CONSTRUCTION &amp; SEALS</div>
            &bull; <strong>Sealing:</strong> White Teflon ring seal acting as ball seal<br/>
            &bull; Gland seat &amp; body seat O-rings<br/>
            &bull; Spherical ball with seal retaining ring inside the forged body.
          </div>
        </div>
      `
    },
    {
      num: 13,
      title: 'Gachot Ball Valve (Sampling)',
      tag: 'SLIDE 13 // GACHOT BALL VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gachot Spherical Ball Valve for Sampling</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">APPLICATION</div>
              <div style="font-size:0.85rem; font-weight:700;">Sampling &amp; Bleed-Off Points</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Medium pressure ball valve used extensively for fluid sampling and bleed-off points across the test package.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SIZES &amp; SEALS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: White Teflon seal ring<br/>
                &bull; Standard sizes: $1/4^{\prime\prime}$, $1/2^{\prime\prime}$, $3/4^{\prime\prime}$, $1^{\prime\prime}$
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 14,
      title: 'Texseal Plug Valve (Cylindrical)',
      tag: 'SLIDE 14 // TEXSEAL PLUG VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Texseal Cylindrical Plug Valve</h3>
          <div class="inner-box" style="font-size:0.8rem; line-height:1.6;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">DESIGN &amp; SEALS</div>
            &bull; Cylindrical plug design with top hexagonal nut and stem<br/>
            &bull; <strong>Sealing:</strong> Black Teflon seats and body O-rings (Texsteam/Texseal brand)<br/>
            &bull; Rugged quarter-turn shut-off valve for medium pressure lines.
          </div>
        </div>
      `
    },
    {
      num: 15,
      title: 'Weco Butterfly Valve (Low Pressure)',
      tag: 'SLIDE 15 // BUTTERFLY VALVE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Weco Butterfly Valve for Tank Service</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PURPOSE &amp; APPLICATION</div>
              <div style="font-size:0.85rem; font-weight:700;">Low Pressure Tank Isolation</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Used for shut-off (on/off) in low-pressure atmospheric and surge tank piping.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: Rubber elastomer seal ring<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$<br/>
                &bull; Features handle, locking mechanism, stem packing, and baffle
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 16,
      title: 'Globe Valves (Water & Air Lines)',
      tag: 'SLIDE 16 // GLOBE VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Globe Valves for Flow Control &amp; Shut-Off</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">APPLICATION</div>
              <div style="font-size:0.85rem; font-weight:700;">Rig Water &amp; Air Lines</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Designed for control of flow and shut-off in low-pressure utility lines such as rig water and instrument air.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: Metal-to-metal seat and disk<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$<br/>
                &bull; Multi-turn handwheel for precise throttling
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 17,
      title: 'Automatic Control Valves (Fisher)',
      tag: 'SLIDE 17 // CONTROL VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Fisher Pneumatic Diaphragm Control Valves</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">FUNCTION &amp; PLACEMENT</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Flow control + throttling action<br/>
                &bull; Medium pressure rating<br/>
                &bull; Applications: Separators, surge tanks (liquid level / gas pressure control)<br/>
                &bull; Sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$, $4^{\prime\prime}$
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">CONFIGURATIONS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>Normally Closed (NC):</strong> Spring pushes down; loading pressure lifts<br/>
                &bull; <strong>Normally Open (NO):</strong> Loading pressure pushes down; spring lifts<br/>
                &bull; Sealing: Metal-to-metal (not 100% bubble-tight)
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 18,
      title: 'Check Valves (One-Way Flow)',
      tag: 'SLIDE 18 // CHECK VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Swing Check Valves for Unidirectional Flow</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PURPOSE &amp; LOCATIONS</div>
              <div style="font-size:0.85rem; font-weight:700;">Prevent Backflow</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Allows flow in one direction only. Automatically ceases or closes if flow fails or backpressure occurs. Installed at separator inlets and pump outlets.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Pressure ratings: High, Medium, and Low pressure<br/>
                &bull; Sealing: Metal-to-metal<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$, $4^{\prime\prime}$
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 19,
      title: 'Relief Valves (Farris Spring-Loaded)',
      tag: 'SLIDE 19 // FARRIS RELIEF VALVES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Farris Spring-Loaded Safety Relief Valves</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">SAFETY OVERPRESSURE PROTECTION</div>
              <div style="font-size:0.85rem; font-weight:700;">Spring-Loaded Set Point</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Spring loaded and set to open at a given pressure to protect systems from overpressure. Installed on separators, flowlines, steam exchangers, and surge tanks.
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">CONSTRUCTION</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Spindle (tension adjust) &amp; Bellows<br/>
                &bull; Valve disk &amp; outlet nozzle (atmospheric vent)<br/>
                &bull; Sealing: Metal-to-metal<br/>
                &bull; Sizes: $1^{\prime\prime}, 2^{\prime\prime}, 3^{\prime\prime}, 4^{\prime\prime}$
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 20,
      title: 'Piloted Relief Valves (Anderson Greenwood)',
      tag: 'SLIDE 20 // ANDERSON GREENWOOD',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Anderson Greenwood Piloted Safety Relief Valves</h3>
          <div class="inner-box" style="font-size:0.8rem; line-height:1.6;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">PILOTED RELIEF TECHNOLOGY</div>
            &bull; <strong>Type:</strong> Piloted safety relief valves featuring external control pilots.<br/>
            &bull; High, Medium, and Low pressure service.<br/>
            &bull; Installed on new Separators and Surge-tanks.<br/>
            &bull; Metal-to-metal sealing with standard sizes of $3^{\prime\prime}$, $4^{\prime\prime}$, and $6^{\prime\prime}$.
          </div>
        </div>
      `
    },
    {
      num: 21,
      title: 'Valve Safety Rule 01: No Throttling',
      tag: 'SLIDE 21 // SAFETY: NO THROTTLING',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Safety Rule: Gate, Ball &amp; Plug Valve Throttling Prohibition</h3>
          <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.65rem;">
            <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITICAL OPERATING RULE</div>
            <div style="font-size:0.95Font; font-weight:700;">Must be Fully Open or Fully Closed</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              Gate, ball, and plug valves <strong>must not be used for throttling</strong> (partial opening). Restricted flow through them will erode the seals, gate, or seat, causing the valve to fail to seal correctly and reliably.
            </p>
          </div>
        </div>
      `
    },
    {
      num: 22,
      title: 'Valve Safety Rule 02: Counting Turns',
      tag: 'SLIDE 22 // SAFETY: COUNTING TURNS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gate Valve Operation: Counting Turns</h3>
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.65rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">BEST PRACTICE FIELD PROCEDURE</div>
            <div style="font-size:0.95rem; font-weight:700;">Count the Number of Turns</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              It is common practice to count the number of turns taken to open and close a gate valve. This allows the operator to instantly tell if the valve has become plugged with hydrates/debris or is failing to seat correctly.
            </p>
          </div>
        </div>
      `
    },
    {
      num: 23,
      title: 'Valve Safety Rule 03: Backing Off Handwheels',
      tag: 'SLIDE 23 // SAFETY: BACKING OFF',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gate &amp; Globe Valve Back-Off Rule</h3>
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.65rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">OPERATING RULE</div>
            <div style="font-size:0.95rem; font-weight:700;">Back Off $1/4$ Turn After Full Extension</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              It is best to close gate and globe valves by $1/4$ turn after they are fully opened (and vice-versa). Over-tightening upon closing may damage the disk and seat, leading to stem seizure or internal leakage.
            </p>
          </div>
        </div>
      `
    },
    {
      num: 24,
      title: 'Needle Valve Safety & Isolation',
      tag: 'SLIDE 24 // NEEDLE VALVE SAFETY',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Needle Valve Positioning for Instruments</h3>
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.65rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">INSTRUMENT ISOLATION RULE</div>
            <div style="font-size:0.95rem; font-weight:700;">Open Only One or Two Turns</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              When used with an instrument, the needle valve should only be opened enough:
              <br/>&bull; To permit flow and allow the instrument to register correctly.
              <br/>&bull; To allow quick closure of the valve and isolate the dial gauge in case of a sudden pressure spike exceeding gauge range.
              <br/><em>One or two turns is usually sufficient.</em>
            </p>
          </div>
        </div>
      `
    },
    {
      num: 25,
      title: 'Knowledge Check Quiz',
      tag: 'SLIDE 25 // SELF-ASSESSMENT',
      render: () => renderValvesQuizSlide()
    }
  ];
  
  // Quiz state & rendering helper for Module 08
  let valvesQuizAnswers = {};
  let valvesQuizSubmitted = false;
  
  function renderValvesQuizSlide() {
    let score = 0;
    if (valvesQuizSubmitted) {
      VALVES_QUIZ_QUESTIONS.forEach((item, i) => {
        if (valvesQuizAnswers[i] === item.answer) score++;
      });
    }
  
    return `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:700;">Surface Testing Valves Knowledge Check</h3>
            <p class="text-muted" style="font-size:0.78rem;">Answer all 4 questions based on the 25-slide Valves technical deck.</p>
          </div>
          ${
            valvesQuizSubmitted
              ? `<div class="badge badge-emerald" style="padding:0.5rem 0.85rem; font-size:0.78rem;">
                  SCORE: ${score} / ${VALVES_QUIZ_QUESTIONS.length} (${Math.round((score / VALVES_QUIZ_QUESTIONS.length) * 100)}%)
                 </div>`
              : ''
          }
        </div>
  
        ${VALVES_QUIZ_QUESTIONS.map((item, qIdx) => {
          const selected = valvesQuizAnswers[qIdx];
          return `
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="font-weight:600; font-size:0.88rem;">
                <span class="font-mono text-amber" style="margin-right:0.35rem;">Q${qIdx + 1}.</span> ${item.q}
              </div>
              <div class="grid-2" style="gap:0.5rem;">
                ${item.options.map((opt, oIdx) => {
                  let styleStr = 'background:var(--panel); border-color:var(--borderline); color:#cbd5e1; text-align:left; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.78rem;';
                  if (valvesQuizSubmitted) {
                    if (oIdx === item.answer) {
                      styleStr += 'background:rgba(16,185,129,0.2); border-color:#10b981; color:#a7f3d0; font-weight:700;';
                    } else if (selected === oIdx && oIdx !== item.answer) {
                      styleStr += 'background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fecaca;';
                    }
                  } else if (selected === oIdx) {
                    styleStr += 'background:rgba(245,158,11,0.2); border-color:#f59e0b; color:#fde68a; font-weight:700;';
                  }
  
                  return `
                    <button onclick="selectValvesQuizOption(${qIdx}, ${oIdx})" style="${styleStr}">
                      <span class="font-mono" style="margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                  `;
                }).join('')}
              </div>
              ${
                valvesQuizSubmitted
                  ? `<div class="inner-box" style="background:var(--panel); font-size:0.75rem; color:#cbd5e1;">
                      <strong class="text-emerald font-mono">EXPLANATION:</strong> ${item.explanation}
                     </div>`
                  : ''
              }
            </div>
          `;
        }).join('')}
  
        <div style="display:flex; gap:0.65rem;">
          <button onclick="submitValvesQuiz()" class="btn btn-primary" style="padding:0.65rem 1.15rem; font-size:0.8rem;">
            Submit &amp; Grade Assessment
          </button>
          <button onclick="resetValvesQuiz()" class="btn font-mono">Reset Quiz</button>
        </div>
      </div>
    `;
  }
  
  function selectValvesQuizOption(qIdx, oIdx) {
    if (valvesQuizSubmitted) return;
    valvesQuizAnswers[qIdx] = oIdx;
    renderActiveSlide();
  }
  
  function submitValvesQuiz() {
    if (Object.keys(valvesQuizAnswers).length < VALVES_QUIZ_QUESTIONS.length) {
      showToast('Please answer all 4 questions before submitting.');
      return;
    }
    valvesQuizSubmitted = true;
    if (!state.completedSlides.includes(25)) {
      state.completedSlides.push(25);
      saveState();
      renderSlideIndex();
    }
    renderActiveSlide();
    showToast('Knowledge Check graded! Slide 25 marked complete.');
  }
  
  function resetValvesQuiz() {
    valvesQuizAnswers = {};
    valvesQuizSubmitted = false;
    renderActiveSlide();
  }
  