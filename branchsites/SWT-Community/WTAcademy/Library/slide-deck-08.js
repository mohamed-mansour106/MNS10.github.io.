// slide-deck-08.js
const VALVES_QUIZ_QUESTIONS = [
    {
      q: 'Why must Gate, Ball, and Plug valves never be used for throttling (partial opening)[span_2](start_span)[span_2](end_span)?',
      options: [
        'Restricted flow through them will erode the seals, gate, or seat, causing reliable sealing failure[span_3](start_span)[span_3](end_span).',
        'They will instantly explode under high pressure.',
        'They require an electric motor to throttle.',
        'They can only operate in vertical pipelines.'
      ],
      answer: 0,
      explanation: 'Slide 21 specifies that gate, ball, and plug valves must be fully open or fully closed because throttling causes erosion on seals, gates, or seats[span_4](start_span)[span_4](end_span).'
    },
    {
      q: 'What is a key operational difference between WOM and McEvoy Gate valves regarding sealing[span_5](start_span)[span_5](end_span)?',
      options: [
        'WOM uses metal/metal sealing, whereas McEvoy uses a grease sealing compound system[span_6](start_span)[span_6](end_span).',
        'McEvoy valves cannot handle pressures above 1,000 psi.',
        'WOM valves require continuous grease injection under pressure.',
        'McEvoy valves have no internal gate component.'
      ],
      answer: 0,
      explanation: 'Slide 4 notes that WOM valves utilize metal-to-metal sealing, while McEvoy valves rely on a grease sealing compound system[span_7](start_span)[span_7](end_span).'
    },
    {
      q: 'When using a Needle valve with an instrument (like a pressure gauge), how far should it typically be opened[span_8](start_span)[span_8](end_span)?',
      options: [
        'Only one or two turns — just enough to permit flow and allow correct gauge registration while allowing quick closure[span_9](start_span)[span_9](end_span).',
        'Always fully opened and then backed off two full turns.',
        'Fully opened at all times.',
        'Closed completely during normal operation.'
      ],
      answer: 0,
      explanation: 'Slide 24 states that needle valves should only be opened one or two turns to allow quick isolation of the gauge in case of sudden pressure spikes[span_10](start_span)[span_10](end_span).'
    },
    {
      q: 'What practice is commonly used when operating Gate valves to detect plugging or seating issues[span_11](start_span)[span_11](end_span)?',
      options: [
        'Counting the number of turns taken to open or close the valve[span_12](start_span)[span_12](end_span).',
        'Measuring the external temperature of the valve body.',
        'Weighing the handwheel before and after operation.',
        'Checking the electrical resistance across the flanges.'
      ],
      answer: 0,
      explanation: 'Slide 22 notes that counting the number of turns taken to open/close gate valves lets the operator notice if the valve is plugged or failing to seat correctly[span_13](start_span)[span_13](end_span).'
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
              Devices fitted to piping and equipment designed to control fluid flow, isolate pressure domains, and protect well test packages across high, medium, and low pressure ratings[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span).
            </p>
          </div>
  
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // HIGH PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">5,000 psi &amp; Above[span_16](start_span)[span_16](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">Gate valves (WOM, McEvoy) &amp; Needle valves (Kerotest, Autoclave) for flowheads &amp; manifolds[span_17](start_span)[span_17](end_span).</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // MEDIUM PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">~1,500 psi[span_18](start_span)[span_18](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">Ball valves (Mapegaz, Gachot) &amp; Plug valves (Texseal, Balon) for separators &amp; burners[span_19](start_span)[span_19](end_span).</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // LOW PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">~180 psi &amp; Utilities[span_20](start_span)[span_20](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">Butterfly valves (Weco) &amp; Globe valves for tanks, water lines, and pneumatic circuits[span_21](start_span)[span_21](end_span).</p>
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">DEFINITION[span_22](start_span)[span_22](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Fluid Flow Control Devices</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Valves or taps are devices fitted to piping or equipment and designed to control the flow of fluids[span_23](start_span)[span_23](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">NOMINAL DIAMETER[span_24](start_span)[span_24](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Internal Diameter (ID)</div>
              <p class="text-muted" style="font-size:0.78rem;">
                For example, a 3" gate, ball, or butterfly valve means a 3" Internal Diameter (ID) flow path[span_25](start_span)[span_25](end_span).
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
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">5,000 psi &amp; Above[span_26](start_span)[span_26](end_span)</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Flowhead, Choke Manifold, Sand-trap, Heaters[span_27](start_span)[span_27](end_span).<br/>
                <strong>Types:</strong> Gate (WOM, McEvoy) &amp; Needle (Kerotest, Autoclave)[span_28](start_span)[span_28](end_span).
              </p>
            </div>
            <div class="inner-box amber-border">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">MEDIUM PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">~1,500 psi[span_29](start_span)[span_29](end_span)</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Separators, Oil/Gas Manifolds, Pumps, Burners[span_30](start_span)[span_30](end_span).<br/>
                <strong>Types:</strong> Ball (Mapegaz, Gachot) &amp; Plug (Texseal, Balon)[span_31](start_span)[span_31](end_span).
              </p>
            </div>
            <div class="inner-box emerald-border">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">LOW PRESSURE</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">~180 psi[span_32](start_span)[span_32](end_span)</div>
              <p class="text-muted" style="font-size:0.76rem; line-height:1.5;">
                <strong>Locations:</strong> Tanks, Utility &amp; Air Lines[span_33](start_span)[span_33](end_span).<br/>
                <strong>Types:</strong> Butterfly (Weco) &amp; Globe valves[span_34](start_span)[span_34](end_span).
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">KEY CHARACTERISTICS[span_35](start_span)[span_35](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Used for shut off (on/off function)[span_36](start_span)[span_36](end_span)<br/>
                &bull; High pressure ratings: 5k, 10k, 15k, 20k psi[span_37](start_span)[span_37](end_span)<br/>
                &bull; Applications: Flowhead, Choke Manifold, Steam Exchanger, Sand Trap[span_38](start_span)[span_38](end_span)<br/>
                &bull; Standard sizes: $3\text{ }1/16^{\prime\prime}$ to $4\text{ }1/16^{\prime\prime}$[span_39](start_span)[span_39](end_span)
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SEALING METHODS[span_40](start_span)[span_40](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>WOM Valve:</strong> Metal-to-metal sealing[span_41](start_span)[span_41](end_span)<br/>
                &bull; <strong>McEvoy Valve:</strong> Grease sealing compound system[span_42](start_span)[span_42](end_span)<br/>
                &bull; Full smooth waterway with zero recesses to trap debris[span_43](start_span)[span_43](end_span)
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
              <strong class="text-amber">Upper Operator Assembly[span_44](start_span)[span_44](end_span):</strong><br/>
              &bull; Handwheel, Stem Adapter &amp; Thrust Bearings[span_45](start_span)[span_45](end_span)<br/>
              &bull; Packing Gland Seal &amp; Stem Packing[span_46](start_span)[span_46](end_span)<br/>
              &bull; Alemite grease fittings &amp; bearing cap[span_47](start_span)[span_47](end_span)
            </div>
            <div class="inner-box" style="background:var(--panel);">
              <strong class="text-emerald">Lower Body &amp; Trim[span_48](start_span)[span_48](end_span):</strong><br/>
              &bull; Bonnet studs, nuts, and gasket[span_49](start_span)[span_49](end_span)<br/>
              &bull; Bleeder plug for pressure relief[span_50](start_span)[span_50](end_span)<br/>
              &bull; Solid gate moving across metal seats[span_51](start_span)[span_51](end_span)[span_52](start_span)[span_52](end_span)
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
                The WOM gate valve features precision metal-to-metal seals between the gate and seat assemblies, backed by O-rings on the seal carrier and a storage-only grease fitting[span_53](start_span)[span_53](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                SEALING TYPE: Precision Metal-to-Metal Seal[span_54](start_span)[span_54](end_span)[span_55](start_span)[span_55](end_span)
              </div>
            </div>
            <div class="inner-box font-mono" style="font-size:0.75rem; display:flex; flex-direction:column; gap:0.35rem;">
              <div class="text-emerald" style="font-weight:700;">INTERNAL ELEMENTS[span_56](start_span)[span_56](end_span):</div>
              <div>&bull; Gate passing through dual seat assemblies[span_57](start_span)[span_57](end_span)</div>
              <div>&bull; Seal assembly with O-ring carrier[span_58](start_span)[span_58](end_span)</div>
              <div>&bull; Grease fitting designated for storage preservation only[span_59](start_span)[span_59](end_span)</div>
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">SEAT STACK ARCHITECTURE[span_60](start_span)[span_60](end_span)</div>
            &bull; Seat Seal &amp; Seat Backup Ring[span_61](start_span)[span_61](end_span)<br/>
            &bull; Seat Retainer Backup Ring[span_62](start_span)[span_62](end_span)<br/>
            &bull; Seat Retainer Top Seal &amp; Bottom Seal[span_63](start_span)[span_63](end_span)<br/>
            &bull; Ensures absolute bubble-tight containment across high-pressure well test loops[span_64](start_span)[span_64](end_span)[span_65](start_span)[span_65](end_span).
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SPECIAL SEALING COMPOUND[span_66](start_span)[span_66](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Sealing is accomplished using special sealing compound grease injected via dedicated grease fittings connected to internal grease pistons[span_67](start_span)[span_67](end_span).
              </p>
            </div>
            <div class="inner-box" style="font-size:0.78rem; line-height:1.6;">
              <strong class="text-emerald font-mono">PORTS &amp; BLEEDERS[span_68](start_span)[span_68](end_span):</strong><br/>
              &bull; Bleeder screw (trapped pressure relief)[span_69](start_span)[span_69](end_span)<br/>
              &bull; Bottom grease fitting for standard grease[span_70](start_span)[span_70](end_span)<br/>
              &bull; Grease piston &amp; lifting nut mechanism[span_71](start_span)[span_71](end_span)
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
                McEvoy valves feature internal grease reservoirs connected to the seats and gates, allowing grease injection under pressure for automatic self-sealing when the valve is closed[span_72](start_span)[span_72](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                ADVANTAGE: Self-greasing and sealing under pressure when closed[span_73](start_span)[span_73](end_span)
              </div>
            </div>
            <div class="inner-box font-mono" style="font-size:0.75rem;">
              <strong class="text-emerald">OPERATIONAL RULE[span_74](start_span)[span_74](end_span):</strong><br/>
              &bull; Possibility to inject grease under pressure[span_75](start_span)[span_75](end_span)<br/>
              &bull; Bottom grease fitting reserved for normal grease only[span_76](start_span)[span_76](end_span)
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS &amp; USAGE[span_77](start_span)[span_77](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Shut-off (on/off) + flow control (bleed off part of flow)[span_78](start_span)[span_78](end_span)<br/>
                &bull; High pressure: 5k, 10k, 15k, 20k psi[span_79](start_span)[span_79](end_span)<br/>
                &bull; Sizes: $1/4^{\prime\prime}$, $1/2^{\prime\prime}$, $3/4^{\prime\prime}$ (NPT fittings)[span_80](start_span)[span_80](end_span)<br/>
                &bull; Metal-to-metal sealing needle and face[span_81](start_span)[span_81](end_span)
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">MANUFACTURERS[span_82](start_span)[span_82](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>Kerotest:</strong> Up to 10k psi[span_83](start_span)[span_83](end_span)<br/>
                &bull; <strong>Autoclave Engineers:</strong> 10k, 15k, 20k psi[span_84](start_span)[span_84](end_span)<br/>
                &bull; Applications: Instrumentation on flowheads, manifolds, heaters, sand traps[span_85](start_span)[span_85](end_span)
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">OPERATING CHARACTERISTICS[span_86](start_span)[span_86](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Used for shut-off (on/off) via $1/4$ turn[span_87](start_span)[span_87](end_span)<br/>
                &bull; Medium pressure rating (~1,500 psi)[span_88](start_span)[span_88](end_span)<br/>
                &bull; Applications: Separators, burners, pumps, etc.[span_89](start_span)[span_89](end_span)<br/>
                &bull; Standard sizes: $1^{\prime\prime}$ to $4^{\prime\prime}$[span_90](start_span)[span_90](end_span)
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SEALING METHOD[span_91](start_span)[span_91](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; PTFE (Teflon) seal rings or seats[span_92](start_span)[span_92](end_span)<br/>
                &bull; Features stem packing, seal insert, spherical ball, and body seals[span_93](start_span)[span_93](end_span)
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">CONSTRUCTION &amp; SEALS[span_94](start_span)[span_94](end_span)</div>
            &bull; <strong>Sealing:</strong> White Teflon ring seal acting as ball seal[span_95](start_span)[span_95](end_span)<br/>
            &bull; Gland seat &amp; body seat O-rings[span_96](start_span)[span_96](end_span)<br/>
            &bull; Spherical ball with seal retaining ring inside the forged body[span_97](start_span)[span_97](end_span).
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">APPLICATION[span_98](start_span)[span_98](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Sampling &amp; Bleed-Off Points</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Medium pressure ball valve used extensively for fluid sampling and bleed-off points across the test package[span_99](start_span)[span_99](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SIZES &amp; SEALS[span_100](start_span)[span_100](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: White Teflon seal ring[span_101](start_span)[span_101](end_span)<br/>
                &bull; Standard sizes: $1/4^{\prime\prime}$, $1/2^{\prime\prime}$, $3/4^{\prime\prime}$, $1^{\prime\prime}$[span_102](start_span)[span_102](end_span)
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">DESIGN &amp; SEALS[span_103](start_span)[span_103](end_span)</div>
            &bull; Cylindrical plug design with top hexagonal nut and stem[span_104](start_span)[span_104](end_span)<br/>
            &bull; <strong>Sealing:</strong> Black Teflon seats and body O-rings (Texsteam/Texseal brand)[span_105](start_span)[span_105](end_span)<br/>
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PURPOSE &amp; APPLICATION[span_106](start_span)[span_106](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Low Pressure Tank Isolation</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Used for shut-off (on/off) in low-pressure atmospheric and surge tank piping[span_107](start_span)[span_107](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS[span_108](start_span)[span_108](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: Rubber elastomer seal ring[span_109](start_span)[span_109](end_span)<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$[span_110](start_span)[span_110](end_span)<br/>
                &bull; Features handle, locking mechanism, stem packing, and baffle[span_111](start_span)[span_111](end_span)
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">APPLICATION[span_112](start_span)[span_112](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Rig Water &amp; Air Lines</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Designed for control of flow and shut-off in low-pressure utility lines such as rig water and instrument air[span_113](start_span)[span_113](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS[span_114](start_span)[span_114](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Sealing: Metal-to-metal seat and disk[span_115](start_span)[span_115](end_span)<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$[span_116](start_span)[span_116](end_span)<br/>
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">FUNCTION &amp; PLACEMENT[span_117](start_span)[span_117](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Flow control + throttling action[span_118](start_span)[span_118](end_span)<br/>
                &bull; Medium pressure rating[span_119](start_span)[span_119](end_span)<br/>
                &bull; Applications: Separators, surge tanks (liquid level / gas pressure control)[span_120](start_span)[span_120](end_span)<br/>
                &bull; Sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$, $4^{\prime\prime}$[span_121](start_span)[span_121](end_span)
              </div>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">CONFIGURATIONS[span_122](start_span)[span_122](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>Normally Closed (NC):</strong> Spring pushes down; loading pressure lifts[span_123](start_span)[span_123](end_span)<br/>
                &bull; <strong>Normally Open (NO):</strong> Loading pressure pushes down; spring lifts[span_124](start_span)[span_124](end_span)<br/>
                &bull; Sealing: Metal-to-metal (not 100% bubble-tight)[span_125](start_span)[span_125](end_span)
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
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PURPOSE &amp; LOCATIONS[span_126](start_span)[span_126](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Prevent Backflow</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Allows flow in one direction only. Automatically ceases or closes if flow fails or backpressure occurs[span_127](start_span)[span_127](end_span). Installed at separator inlets and pump outlets[span_128](start_span)[span_128](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SPECIFICATIONS[span_129](start_span)[span_129](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Pressure ratings: High, Medium, and Low pressure[span_130](start_span)[span_130](end_span)<br/>
                &bull; Sealing: Metal-to-metal[span_131](start_span)[span_131](end_span)<br/>
                &bull; Standard sizes: $1^{\prime\prime}$, $2^{\prime\prime}$, $3^{\prime\prime}$, $4^{\prime\prime}$[span_132](start_span)[span_132](end_span)
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
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">SAFETY OVERPRESSURE PROTECTION[span_133](start_span)[span_133](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Spring-Loaded Set Point</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Spring loaded and set to open at a given pressure to protect systems from overpressure[span_134](start_span)[span_134](end_span). Installed on separators, flowlines, steam exchangers, and surge tanks[span_135](start_span)[span_135](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">CONSTRUCTION[span_136](start_span)[span_136](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Spindle (tension adjust) &amp; Bellows[span_137](start_span)[span_137](end_span)<br/>
                &bull; Valve disk &amp; outlet nozzle (atmospheric vent)[span_138](start_span)[span_138](end_span)<br/>
                &bull; Sealing: Metal-to-metal[span_139](start_span)[span_139](end_span)<br/>
                &bull; Sizes: $1^{\prime\prime}, 2^{\prime\prime}, 3^{\prime\prime}, 4^{\prime\prime}$[span_140](start_span)[span_140](end_span)
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">PILOTED RELIEF TECHNOLOGY[span_141](start_span)[span_141](end_span)</div>
            &bull; <strong>Type:</strong> Piloted safety relief valves featuring external control pilots[span_142](start_span)[span_142](end_span).<br/>
            &bull; High, Medium, and Low pressure service[span_143](start_span)[span_143](end_span).<br/>
            &bull; Installed on new Separators and Surge-tanks[span_144](start_span)[span_144](end_span).<br/>
            &bull; Metal-to-metal sealing with standard sizes of $3^{\prime\prime}$, $4^{\prime\prime}$, and $6^{\prime\prime}$[span_145](start_span)[span_145](end_span).
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
            <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITICAL OPERATING RULE[span_146](start_span)[span_146](end_span)</div>
            <div style="font-size:0.95Font; font-weight:700;">Must be Fully Open or Fully Closed</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              Gate, ball, and plug valves <strong>must not be used for throttling</strong> (partial opening). Restricted flow through them will erode the seals, gate, or seat, causing the valve to fail to seal correctly and reliably[span_147](start_span)[span_147](end_span).
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">BEST PRACTICE FIELD PROCEDURE[span_148](start_span)[span_148](end_span)</div>
            <div style="font-size:0.95rem; font-weight:700;">Count the Number of Turns</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              It is common practice to count the number of turns taken to open and close a gate valve. This allows the operator to instantly tell if the valve has become plugged with hydrates/debris or is failing to seat correctly[span_149](start_span)[span_149](end_span).
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">OPERATING RULE[span_150](start_span)[span_150](end_span)</div>
            <div style="font-size:0.95rem; font-weight:700;">Back Off $1/4$ Turn After Full Extension</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              It is best to close gate and globe valves by $1/4$ turn after they are fully opened (and vice-versa). Over-tightening upon closing may damage the disk and seat, leading to stem seizure or internal leakage[span_151](start_span)[span_151](end_span).
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
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">INSTRUMENT ISOLATION RULE[span_152](start_span)[span_152](end_span)</div>
            <div style="font-size:0.95rem; font-weight:700;">Open Only One or Two Turns</div>
            <p class="text-muted" style="font-size:0.82rem; line-height:1.6;">
              When used with an instrument, the needle valve should only be opened enough:
              <br/>&bull; To permit flow and allow the instrument to register correctly[span_153](start_span)[span_153](end_span).
              <br/>&bull; To allow quick closure of the valve and isolate the dial gauge in case of a sudden pressure spike exceeding gauge range[span_154](start_span)[span_154](end_span).
              <br/><em>One or two turns is usually sufficient[span_155](start_span)[span_155](end_span).</em>
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
  