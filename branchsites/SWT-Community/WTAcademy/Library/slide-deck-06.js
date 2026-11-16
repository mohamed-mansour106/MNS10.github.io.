// slide-deck-06.js
const TANKS_QUIZ_QUESTIONS = [
    {
      q: 'What is a key safety limitation of atmospheric Gauge Tanks regarding sour service[span_0](start_span)[span_0](end_span)?',
      options: [
        'They cannot be used when H2S is present because gas is released to the atmosphere[span_1](start_span)[span_1](end_span).',
        'They require a minimum working pressure of 150 psi.',
        'They can only store water and never crude oil.',
        'They require continuous electric heating.'
      ],
      answer: 0,
      explanation: 'Slide 09 explicitly states that gauge tanks cannot be used when H2S is present because gas is vented directly to the atmosphere[span_2](start_span)[span_2](end_span).'
    },
    {
      q: 'What does the Meter Factor ($f$) correct for[span_3](start_span)[span_3](end_span)?',
      options: [
        'Mechanical error of the separator liquid meter, determined using water or diesel[span_4](start_span)[span_4](end_span).',
        'The volume change between separator conditions and atmospheric conditions.',
        'The temperature expansion of pipeline steel.',
        'The H2S concentration in the gas phase.'
      ],
      answer: 0,
      explanation: 'Slide 16 defines the Meter Factor ($f$) as the correction factor for mechanical error of the separator liquid meter[span_5](start_span)[span_5](end_span).'
    },
    {
      q: 'What is the Shrinkage Factor ($1 - \text{shr}$)[span_6](start_span)[span_6](end_span)?',
      options: [
        'The oil volume change between separator conditions and atmospheric conditions (pressure & temperature)[span_7](start_span)[span_7](end_span).',
        'The physical evaporation rate of water in the tank sight-glass.',
        'The ratio of gas burned at the flare boom.',
        'The pressure drop across the choke manifold.'
      ],
      answer: 0,
      explanation: 'Slide 17 defines the shrinkage factor as the oil volume change between separator conditions and atmospheric conditions[span_8](start_span)[span_8](end_span).'
    },
    {
      q: 'When should a Pressurized Surge Tank be selected instead of an atmospheric Gauge Tank[span_9](start_span)[span_9](end_span)?',
      options: [
        'Compulsory whenever H2S is present, or when operating under pressure[span_10](start_span)[span_10](end_span)[span_11](start_span)[span_11](end_span).',
        'Only when testing water wells.',
        'When flowrates exceed 100,000 bpd.',
        'Only during onshore summer operations.'
      ],
      answer: 0,
      explanation: 'Slide 15 highlights that surge tanks are compulsory whenever H2S is present because they are pressurized and route gas safely through a closed line[span_12](start_span)[span_12](end_span)[span_13](start_span)[span_13](end_span).'
    }
  ];
  
  const TANKS_SLIDES = [
    {
      num: 1,
      title: 'Gauge & Surge Tanks — Overview',
      tag: 'SLIDE 01 // COVER & PURPOSE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div class="inner-box amber-border" style="padding:1.5rem;">
            <div class="font-mono text-amber" style="font-size:0.75rem; margin-bottom:0.35rem;">WELL TESTING ACADEMY // MODULE 06</div>
            <h2 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">Gauge &amp; Surge Tanks</h2>
            <p class="text-muted" style="font-size:0.9rem;">
              Surface well testing storage and metering vessels used for low-pressure liquid storage, meter calibration ($f$), shrinkage factor measurement, and second-stage degassing.
            </p>
          </div>
  
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // GAUGE TANKS</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Atmospheric Compartments</div>
              <p class="text-muted" style="font-size:0.78rem;">Non-pressurized 2-compartment vessels with flame arrestors and sight glasses[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span).</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // SURGE TANKS</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Pressurized Vessels</div>
              <p class="text-muted" style="font-size:0.78rem;">Pressurized vertical vessels (50 to 150 psi WP) compulsory for H2S service[span_16](start_span)[span_16](end_span)[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span).</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // METERING &amp; CMF</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Calibration Factors</div>
              <p class="text-muted" style="font-size:0.78rem;">Determining Meter Factor ($f$), Shrinkage Factor, and Combined Meter Factor (CMF)[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span)[span_21](start_span)[span_21](end_span).</p>
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
              { idx: '01', name: 'Gauge & Surge Tank Functions', desc: 'Low pressure storage, large samples, low flow metering, shrinkage, meter factor ($f$)[span_22](start_span)[span_22](end_span).', target: 3 },
              { idx: '02', name: 'Gauge Tank Description & Specs', desc: 'Non-pressurized, 2 compartments, sight glasses, flame arrestors, 3" 602 Weco unions[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).', target: 4 },
              { idx: '03', name: 'Gauge Tank Safety & Transport', desc: 'Flame arrestors, thief hatch safety seams, grounding straps, empty transport[span_25](start_span)[span_25](end_span)[span_26](start_span)[span_26](end_span).', target: 8 },
              { idx: '04', name: 'Surge Tank Description & P&ID', desc: 'Pressurized vessel, 2nd-stage separator, automatic PCV, high-level alarm, safety relief valves[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).', target: 10 },
              { idx: '05', name: 'Surge Tank Selection & Safety', desc: '50 psi & 150 psi WP models, H2S compulsory use, separate gas line with flame arrestor[span_29](start_span)[span_29](end_span)[span_30](start_span)[span_30](end_span).', target: 13 },
              { idx: '06', name: 'Meter Factor, Shrinkage & CMF', desc: 'Mathematical definitions and step-by-step field procedures for $f$, Shrinkage, and CMF[span_31](start_span)[span_31](end_span)[span_32](start_span)[span_32](end_span)[span_33](start_span)[span_33](end_span).', target: 15 }
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
            <p class="font-mono text-muted" style="font-size:0.72rem;">BY THE END OF THIS LECTURE, FIELD PERSONNEL MUST BE ABLE TO[span_34](start_span)[span_34](end_span):</p>
          </div>
          ${[
            { code: 'OBJ-01', title: 'Explain Tank Functions', detail: 'Understand liquid storage, low flow metering, shrinkage measurement, and meter calibration[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span).' },
            { code: 'OBJ-02', title: 'Describe Principles of Operation', detail: 'Compare atmospheric gauge tank compartment cycling with pressurized surge tank separation[span_37](start_span)[span_37](end_span)[span_38](start_span)[span_38](end_span)[span_39](start_span)[span_39](end_span).' },
            { code: 'OBJ-03', title: 'Select Tanks Properly', detail: 'Evaluate compartment capacities, working pressures (50/150 psi WP), and H2S service rules[span_40](start_span)[span_40](end_span)[span_41](start_span)[span_41](end_span)[span_42](start_span)[span_42](end_span).' },
            { code: 'OBJ-04', title: 'Calculate $f$, Shrinkage & CMF', detail: 'Master the formulas and field procedures for Meter Factor ($f$), Shrinkage Factor, and Combined Meter Factor[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span)[span_45](start_span)[span_45](end_span)[span_46](start_span)[span_46](end_span).' }
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
      title: 'Principal Functions of Gauge & Surge Tanks',
      tag: 'SLIDE 04 // CORE FUNCTIONS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Principal Functions of Gauge &amp; Surge Tanks</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">STORAGE &amp; METERING[span_47](start_span)[span_47](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Storing liquids when separator pressure is low[span_48](start_span)[span_48](end_span)<br/>
                &bull; Storing liquids when large sample volumes are required[span_49](start_span)[span_49](end_span)<br/>
                &bull; Metering liquids accurately when flowrates are very low[span_50](start_span)[span_50](end_span)
              </div>
            </div>
            <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">CALIBRATION &amp; SEPARATION[span_51](start_span)[span_51](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Measuring the Shrinkage Factor ($1 - \text{shr}$)[span_52](start_span)[span_52](end_span)<br/>
                &bull; Calibrating separator liquid meter factor ($f$): $\frac{\text{Tank Reading}}{\text{Meter Reading}}$[span_53](start_span)[span_53](end_span)[span_54](start_span)[span_54](end_span)<br/>
                &bull; Acting as a second-stage separator (Surge tank only)[span_55](start_span)[span_55](end_span)[span_56](start_span)[span_56](end_span)
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 5,
      title: 'Gauge Tank Description & Architecture',
      tag: 'SLIDE 05 // GAUGE TANK HARDWARE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Technical Description</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                An atmospheric, non-pressurized vessel engineered with dual compartments allowing continuous operation (emptying one compartment via transfer pump while filling the other)[span_57](start_span)[span_57](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                VESSEL TYPE: Non-pressurized Atmospheric Vessel[span_58](start_span)[span_58](end_span)
              </div>
              <div class="inner-box font-mono text-emerald" style="font-size:0.78rem;">
                COMPARTMENTS: Dual Compartments (Simultaneous Fill / Empty)[span_59](start_span)[span_59](end_span)
              </div>
            </div>
            <div class="inner-box" style="font-family:monospace; font-size:0.75rem; display:flex; flex-direction:column; gap:0.35rem;">
              <div class="text-amber" style="font-weight:700;">MEASUREMENT &amp; PIPING[span_60](start_span)[span_60](end_span):</div>
              <div>&bull; Sight-glass level tubes for physical volume change calculation[span_61](start_span)[span_61](end_span)</div>
              <div>&bull; 4 butterfly valves with locking mechanism[span_62](start_span)[span_62](end_span)[span_63](start_span)[span_63](end_span)</div>
              <div>&bull; 3" oil inlet &amp; outlet (Fig 602 Weco-union connections)[span_64](start_span)[span_64](end_span)</div>
              <div>&bull; Gas vent lines with flame arrestors[span_65](start_span)[span_65](end_span)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 6,
      title: 'Gauge Tank P&ID & Component Layout',
      tag: 'SLIDE 06 // GAUGE TANK SCHEMATIC',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Internal &amp; External Component P&amp;ID</h3>
          <p class="text-muted" style="font-size:0.8rem;">
            Details gauging ports, safety seams (thief hatches), flame arrestors, grounding straps, and butterfly valve routing[span_66](start_span)[span_66](end_span).
          </p>
          <div class="inner-box" style="background:#111827; padding:1rem; text-align:center;">
            <div class="font-mono text-amber" style="font-size:0.85rem; font-weight:bold; margin-bottom:0.5rem;">GAUGE TANK COMPONENT SUMMARY[span_67](start_span)[span_67](end_span)</div>
            <div class="font-mono text-muted" style="font-size:0.75rem; line-height:1.6;">
              Gauging Ports &amp; Sight Glasses &rarr; Liquid Level Monitoring[span_68](start_span)[span_68](end_span)<br/>
              Flame Arrestors &amp; Gas Vent Lines &rarr; Safe Atmospheric Venting[span_69](start_span)[span_69](end_span)<br/>
              Safety Seams &amp; Inspection Hatches &rarr; Overpressure Relief &amp; Access[span_70](start_span)[span_70](end_span)<br/>
              Grounding Strap &rarr; Static Electricity Discharge[span_71](start_span)[span_71](end_span)
            </div>
          </div>
        </div>
      `
    },
    {
      num: 7,
      title: 'Gauge Tank Detail: Valves & Sight Glasses',
      tag: 'SLIDE 07 // VALVES & SIGHT GLASSES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Butterfly Valves &amp; Sight-Glasses</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">BUTTERFLY VALVE MECHANICS[span_72](start_span)[span_72](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Locking Mechanism &amp; Stem Packing</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Equipped with valve position indicators, locking mechanisms, stem packing, sealing faces, and internal baffles to regulate 3" oil inlet and outlet flows[span_73](start_span)[span_73](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">SIGHT GLASS &amp; VENTS[span_74](start_span)[span_74](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Flame Arrestor Steel Wool Packs</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Gas vent lines feature flame arrestors packed with steel wool to prevent flashbacks into the dual compartment gauge tank[span_75](start_span)[span_75](end_span).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 8,
      title: 'Gauge Tank Selection Criteria',
      tag: 'SLIDE 08 // GAUGE TANK SELECTION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Selection &amp; Specifications</h3>
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.5rem;">KEY SELECTION PARAMETERS[span_76](start_span)[span_76](end_span)</div>
            <div class="grid-2" style="font-size:0.8rem; line-height:1.6;">
              <div>
                &bull; Safety regulations (Onshore / Offshore)[span_77](start_span)[span_77](end_span)<br/>
                &bull; Atmospheric operating pressure[span_78](start_span)[span_78](end_span)<br/>
                &bull; Compartment sizes: $2 \times 50\text{ bbls}$ and $2 \times 100\text{ bbls}$[span_79](start_span)[span_79](end_span)
              </div>
              <div>
                &bull; Available footprint &amp; space[span_80](start_span)[span_80](end_span)<br/>
                &bull; Connections: 3" Fig 602 Weco-unions[span_81](start_span)[span_81](end_span)<br/>
                &bull; Extension plastic hoses required for gas vent lines[span_82](start_span)[span_82](end_span)
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 9,
      title: 'Gauge Tank Safety & Environmental Rules',
      tag: 'SLIDE 09 // GAUGE TANK SAFETY',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Safety Precautions</h3>
          <div class="grid-2">
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITICAL SAFETY FEATURES[span_83](start_span)[span_83](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; Flame arrestors on each vent line[span_84](start_span)[span_84](end_span)<br/>
                &bull; Thief hatch (safety seams) to relieve accidental overpressure[span_85](start_span)[span_85](end_span)<br/>
                &bull; Grounding straps to prevent static charge buildup[span_86](start_span)[span_86](end_span)
              </div>
            </div>
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">H2S RESTRICTION[span_87](start_span)[span_87](end_span)</div>
              <div style="font-size:0.8rem; line-height:1.6;">
                &bull; <strong>Strict Prohibition:</strong> Cannot be used when H2S is present because gas is vented directly to the atmosphere[span_88](start_span)[span_88](end_span).
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 10,
      title: 'Gauge Tank Transport & Maintenance',
      tag: 'SLIDE 10 // TRANSPORT & MAINTENANCE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Gauge Tank Transport &amp; Maintenance Safety</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">TRANSPORT RULE[span_89](start_span)[span_89](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Transport Only When Empty</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Tanks must be completely empty during transport, utilizing proper anchor shoes and lifting eyes (rigging orientation matters)[span_90](start_span)[span_90](end_span).
              </p>
            </div>
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">MAINTENANCE PROTOCOL[span_91](start_span)[span_91](end_span)</div>
              <div style="font-size:0.85rem; font-weight:700;">Steam Cleaning &amp; Degassing</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Prior to conducting any internal maintenance or entering the tank, it must be thoroughly steam cleaned and fully degassed[span_92](start_span)[span_92](end_span).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 11,
      title: 'Surge Tank Description & Architecture',
      tag: 'SLIDE 11 // SURGE TANK OVERVIEW',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surge Tank Description &amp; Operating Principle</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PRESSURIZED VESSEL[span_93](start_span)[span_93](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Second-Stage Separation</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Unlike gauge tanks, surge tanks are pressurized vessels operating as a second-stage separator with 1 or 2 compartments[span_94](start_span)[span_94](end_span).
              </p>
            </div>
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">LEVEL &amp; VOLUME[span_95](start_span)[span_95](end_span)</div>
              <div style="font-size:0.95rem; font-weight:700;">Sight-Glass Calibration</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Sight-glass levels are used to calculate volume changes based on physical tank dimensions while maintaining internal pressure control[span_96](start_span)[span_96](end_span).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 12,
      title: 'Surge Tank P&ID & Component Layout',
      tag: 'SLIDE 12 // SURGE TANK P&ID',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surge Tank P&amp;ID &amp; Hardware Connections</h3>
          <div class="grid-2" style="font-size:0.78rem; gap:0.65rem;">
            <div class="inner-box" style="background:var(--panel);">
              <strong class="text-amber">Top &amp; Upper Assembly[span_97](start_span)[span_97](end_span):</strong><br/>
              &bull; Gas outlet with flame arrestor[span_98](start_span)[span_98](end_span)<br/>
              &bull; Dual safety relief valves[span_99](start_span)[span_99](end_span)<br/>
              &bull; Dual sight-glasses &amp; high-level alarm horn[span_100](start_span)[span_100](end_span)
            </div>
            <div class="inner-box" style="background:var(--panel);">
              <strong class="text-emerald">Lower &amp; Piping Assembly[span_101](start_span)[span_101](end_span):</strong><br/>
              &bull; Oil inlet 3" 602 Female &amp; outlet 3" 602 Male[span_102](start_span)[span_102](end_span)<br/>
              &bull; Automatic Pressure Control Valve (PCV)[span_103](start_span)[span_103](end_span)<br/>
              &bull; Gas outlet (4" 602 Male) &amp; grounding strap[span_104](start_span)[span_104](end_span)
            </div>
          </div>
        </div>
      `
    },
    {
      num: 13,
      title: 'Surge Tank PCV & Safety Ball Valve Operation',
      tag: 'SLIDE 13 // SURGE TANK PCV & SIGHT GLASS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surge Tank Automatic PCV &amp; Sight-Glass Valves</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                Maintains vessel operating pressure via an automatic Pressure Control Valve (PCV) on the gas outlet (normally open)[span_105](start_span)[span_105](end_span). Sight-glasses are equipped with safety ball valves to prevent blowouts[span_106](start_span)[span_106](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                PCV STATUS: Normally Open Gas Outlet Control[span_107](start_span)[span_107](end_span)
              </div>
            </div>
            <div class="inner-box font-mono" style="font-size:0.75rem; display:flex; flex-direction:column; gap:0.35rem;">
              <div class="text-emerald" style="font-weight:700;">DIAPHRAGM &amp; SPRING[span_108](start_span)[span_108](end_span):</div>
              <div>&bull; Diaphragm sensing surge tank pressure[span_109](start_span)[span_109](end_span)</div>
              <div>&bull; Spring lifts &amp; spring adjuster[span_110](start_span)[span_110](end_span)</div>
              <div>&bull; Valve plug &amp; valve seat regulating gas[span_111](start_span)[span_111](end_span)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 14,
      title: 'Surge Tank Selection Criteria',
      tag: 'SLIDE 14 // SURGE TANK SELECTION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surge Tank Selection &amp; Specifications</h3>
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.5rem;">KEY SELECTION PARAMETERS[span_112](start_span)[span_112](end_span)</div>
            <div class="grid-2" style="font-size:0.8rem; line-height:1.6;">
              <div>
                &bull; H2S presence (compulsory)[span_113](start_span)[span_113](end_span)<br/>
                &bull; Onshore / offshore safety regulations[span_114](start_span)[span_114](end_span)<br/>
                &bull; Models &amp; Ratings: $1 \times 80\text{ bbls}$ @ 50 psi WP vs $2 \times 50\text{ bbls}$ @ 150 psi WP[span_115](start_span)[span_115](end_span)
              </div>
              <div>
                &bull; Oil Inlet &amp; Outlet: 3" 602 Weco-union[span_116](start_span)[span_116](end_span)<br/>
                &bull; Gas Outlet / Vent Line: 4" 602 Weco-union[span_117](start_span)[span_117](end_span)<br/>
                &bull; Extra gas manifold for gas outlet[span_118](start_span)[span_118](end_span)
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 15,
      title: 'Surge Tank Safety Systems',
      tag: 'SLIDE 15 // SURGE TANK SAFETY',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surge Tank Safety Systems &amp; Interlocks</h3>
          <div class="grid-3">
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">01 // H2S COMPULSORY</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">H2S Containment</div>
              <p class="text-muted" style="font-size:0.78rem;">Mandatory whenever H2S is present in well effluent[span_119](start_span)[span_119](end_span).</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">02 // PRESSURE &amp; ALARMS</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">PCV &amp; Dual Reliefs</div>
              <p class="text-muted" style="font-size:0.78rem;">Equipped with automatic PCV, high/low level alarms, and two safety relief valves[span_120](start_span)[span_120](end_span).</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">03 // FLARE ROUTING</div>
              <div style="font-weight:700; font-size:0.9rem; margin:0.35rem 0;">Flame Arrestor Line</div>
              <p class="text-muted" style="font-size:0.78rem;">Separate gas line with flame arrestor routing gas safely to the burner boom[span_121](start_span)[span_121](end_span).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 16,
      title: 'Meter Factor ($f$) Calibration Procedure',
      tag: 'SLIDE 16 // METER FACTOR ($f$)',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Separator Liquid Meter Factor ($f$) Calibration</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">DEFINITION &amp; PURPOSE[span_122](start_span)[span_122](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Done before the flow test (shop or wellsite) at several flowrates using water or diesel to correct mechanical error in the separator liquid meter[span_123](start_span)[span_123](end_span).
              </p>
              <div class="inner-box font-mono text-emerald" style="text-align:center; font-size:0.85rem; font-weight:bold;">
                $f = \frac{\text{Tank (True) Reading}}{\text{Meter Reading}}$[span_124](start_span)[span_124](end_span)
              </div>
            </div>
            <div class="inner-box" style="font-size:0.78rem; line-height:1.6;">
              <strong class="text-amber font-mono">FIELD PROCEDURE[span_125](start_span)[span_125](end_span):</strong><br/>
              1. Read initial level of water in tank[span_126](start_span)[span_126](end_span).<br/>
              2. Divert water to tank &amp; take oil line meter reading simultaneously[span_127](start_span)[span_127](end_span).<br/>
              3. Stop pumping water after exactly 10 bbls pass through meter[span_128](start_span)[span_128](end_span).<br/>
              4. Record final water level in tank[span_129](start_span)[span_129](end_span).
            </div>
          </div>
        </div>
      `
    },
    {
      num: 17,
      title: 'Shrinkage Factor ($1 - \\text{shr}$) Definition',
      tag: 'SLIDE 17 // SHRINKAGE FACTOR',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Shrinkage Factor ($1 - \text{shr}$) Measurement</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                Measures oil volume change between separator conditions and atmospheric conditions (pressure &amp; temperature) due to liberated gas (also referred to as $\text{GOR}_2$)[span_130](start_span)[span_130](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="font-size:0.78rem;">
                STANDARD CONDITIONS: 14.73 psia @ 60°F (Temperature correction $K$ applied)[span_131](start_span)[span_131](end_span)
              </div>
            </div>
            <div class="inner-box" style="font-size:0.78rem; line-height:1.6;">
              <strong class="text-emerald font-mono">KEY NOTE[span_132](start_span)[span_132](end_span):</strong><br/>
              When taking the final tank reading, tank temperature is recorded to apply temperature corrections ($K$) so flowrates are reported at standard conditions[span_133](start_span)[span_133](end_span).
            </div>
          </div>
        </div>
      `
    },
    {
      num: 18,
      title: 'Combined Meter Factor (CMF) Calculation',
      tag: 'SLIDE 18 // COMBINED METER FACTOR',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Combined Meter Factor (CMF) Procedure</h3>
          <div class="grid-2">
            <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">DEFINITION &amp; FORMULA[span_134](start_span)[span_134](end_span)</div>
              <p class="text-muted" style="font-size:0.78rem;">
                Combines Meter Factor with Shrinkage Factor, measured on-site during separator flow testing[span_135](start_span)[span_135](end_span).
              </p>
              <div class="inner-box font-mono text-amber" style="text-align:center; font-size:0.85rem; font-weight:bold;">
                $\text{CMF} = \frac{\text{Tank (True) Reading}}{\text{Meter Reading}}$[span_136](start_span)[span_136](end_span)
              </div>
            </div>
            <div class="inner-box" style="font-size:0.78rem; line-height:1.6;">
              <strong class="text-amber font-mono">FIELD PROCEDURE[span_137](start_span)[span_137](end_span):</strong><br/>
              1. Read initial oil level in tank[span_138](start_span)[span_138](end_span).<br/>
              2. Divert oil flow to tank &amp; take meter reading[span_139](start_span)[span_139](end_span).<br/>
              3. Divert flow back to burners after 10 bbls pass[span_140](start_span)[span_140](end_span).<br/>
              4. <strong>Crucial:</strong> Wait until all gas escapes (at least 30 mins) before taking final oil level &amp; temperature[span_141](start_span)[span_141](end_span).
            </div>
          </div>
        </div>
      `
    },
    {
      num: 19,
      title: 'References & Technical Documentation',
      tag: 'SLIDE 19 // REFERENCES',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">References &amp; Field Animations</h3>
          <div class="grid-2">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-01 // DOCUMENTATION[span_142](start_span)[span_142](end_span)</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">InTouch &amp; ST Training Manuals[span_143](start_span)[span_143](end_span)</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Online training, technical data sheets, and maintenance manuals for gauge and surge tanks[span_144](start_span)[span_144](end_span).
              </p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-02 // ANIMATIONS[span_145](start_span)[span_145](end_span)</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">PEPTEC Shockwave Simulations[span_146](start_span)[span_146](end_span)</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Interactive animations covering vertical surge tank erection, meter factor calibration with water, and tank correction readings[span_147](start_span)[span_147](end_span).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 20,
      title: 'Knowledge Check Quiz',
      tag: 'SLIDE 20 // SELF-ASSESSMENT',
      render: () => renderTanksQuizSlide()
    }
  ];
  
  // Quiz state & rendering helper for Module 06
  let tanksQuizAnswers = {};
  let tanksQuizSubmitted = false;
  
  function renderTanksQuizSlide() {
    let score = 0;
    if (tanksQuizSubmitted) {
      TANKS_QUIZ_QUESTIONS.forEach((item, i) => {
        if (tanksQuizAnswers[i] === item.answer) score++;
      });
    }
  
    return `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:700;">Tanks &amp; Meter Calibration Knowledge Check</h3>
            <p class="text-muted" style="font-size:0.78rem;">Answer all 4 questions based on the 20-slide Tanks technical deck.</p>
          </div>
          ${
            tanksQuizSubmitted
              ? `<div class="badge badge-emerald" style="padding:0.5rem 0.85rem; font-size:0.78rem;">
                  SCORE: ${score} / ${TANKS_QUIZ_QUESTIONS.length} (${Math.round((score / TANKS_QUIZ_QUESTIONS.length) * 100)}%)
                 </div>`
              : ''
          }
        </div>
  
        ${TANKS_QUIZ_QUESTIONS.map((item, qIdx) => {
          const selected = tanksQuizAnswers[qIdx];
          return `
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="font-weight:600; font-size:0.88rem;">
                <span class="font-mono text-amber" style="margin-right:0.35rem;">Q${qIdx + 1}.</span> ${item.q}
              </div>
              <div class="grid-2" style="gap:0.5rem;">
                ${item.options.map((opt, oIdx) => {
                  let styleStr = 'background:var(--panel); border-color:var(--borderline); color:#cbd5e1; text-align:left; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.78rem;';
                  if (tanksQuizSubmitted) {
                    if (oIdx === item.answer) {
                      styleStr += 'background:rgba(16,185,129,0.2); border-color:#10b981; color:#a7f3d0; font-weight:700;';
                    } else if (selected === oIdx && oIdx !== item.answer) {
                      styleStr += 'background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fecaca;';
                    }
                  } else if (selected === oIdx) {
                    styleStr += 'background:rgba(245,158,11,0.2); border-color:#f59e0b; color:#fde68a; font-weight:700;';
                  }
  
                  return `
                    <button onclick="selectTanksQuizOption(${qIdx}, ${oIdx})" style="${styleStr}">
                      <span class="font-mono" style="margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                  `;
                }).join('')}
              </div>
              ${
                tanksQuizSubmitted
                  ? `<div class="inner-box" style="background:var(--panel); font-size:0.75rem; color:#cbd5e1;">
                      <strong class="text-emerald font-mono">EXPLANATION:</strong> ${item.explanation}
                     </div>`
                  : ''
              }
            </div>
          `;
        }).join('')}
  
        <div style="display:flex; gap:0.65rem;">
          <button onclick="submitTanksQuiz()" class="btn btn-primary" style="padding:0.65rem 1.15rem; font-size:0.8rem;">
            Submit &amp; Grade Assessment
          </button>
          <button onclick="resetTanksQuiz()" class="btn font-mono">Reset Quiz</button>
        </div>
      </div>
    `;
  }
  
  function selectTanksQuizOption(qIdx, oIdx) {
    if (tanksQuizSubmitted) return;
    tanksQuizAnswers[qIdx] = oIdx;
    renderActiveSlide();
  }
  
  function submitTanksQuiz() {
    if (Object.keys(tanksQuizAnswers).length < TANKS_QUIZ_QUESTIONS.length) {
      showToast('Please answer all 4 questions before submitting.');
      return;
    }
    tanksQuizSubmitted = true;
    if (!state.completedSlides.includes(20)) {
      state.completedSlides.push(20);
      saveState();
      renderSlideIndex();
    }
    renderActiveSlide();
    showToast('Knowledge Check graded! Slide 20 marked complete.');
  }
  
  function resetTanksQuiz() {
    tanksQuizAnswers = {};
    tanksQuizSubmitted = false;
    renderActiveSlide();
  }
  