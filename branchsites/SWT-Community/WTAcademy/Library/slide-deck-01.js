// slide-deck-01.js
const ESD_QUIZ_QUESTIONS = [
    {
      q: 'What is the maximum allowable time for the ESD system to close the wellhead flow valve in an emergency?',
      options: ['Less than 10 seconds', 'Less than 30 seconds', 'Less than 60 seconds', '2 minutes'],
      answer: 0,
      explanation: 'Slide 04 specifies that the ESD must close the well quickly in an emergency in less than 10 seconds.'
    },
    {
      q: 'Which of the following conditions makes an ESD system MANDATORY according to POM rules?',
      options: [
        'WHP > 5,000 psi, H2S present, Gas > 30 MMSCFD, or Oil > 8,000 BPD',
        'Only when WHP exceeds 15,000 psi',
        'Only during offshore night operations',
        'WHP > 2,000 psi for sweet crude oil'
      ],
      answer: 0,
      explanation: 'Slide 08 states ESD is mandatory when WHP > 5,000 psi, H2S is present, or flowrates exceed 30 MMSCFD (gas) or 8,000 BPD (oil).'
    },
    {
      q: 'Where is the Lo-Pilot located, and what hazard does it protect against?',
      options: [
        'Downstream of the choke manifold — protects against separator overpressure',
        'Upstream of the choke manifold — protects against a flowline rupture',
        'Inside the Surge Tank — monitors liquid level',
        'On the rig air compressor — monitors air vessel pressure'
      ],
      answer: 1,
      explanation: 'Slide 12 confirms the Lo-Pilot is installed upstream of the choke manifold to detect sudden pressure loss from a line rupture.'
    },
    {
      q: 'What are the normal operating hydraulic pressure and pneumatic pilot loop pressure on the ESD system?',
      options: [
        'Hydraulic: 1,500–3,000 psi (Max 6,000 psi) | Pilot Air Loop: ~30 psi',
        'Hydraulic: 500 psi | Pilot Air Loop: 150 psi',
        'Hydraulic: 10,000 psi | Pilot Air Loop: 5 psi',
        'Hydraulic: 30 psi | Pilot Air Loop: 3,000 psi'
      ],
      answer: 0,
      explanation: 'Slide 10 defines normal operating hydraulic pressure at 1,500–3,000 psi (6,000 psi max) and the pilot/station pneumatic loop at ~30 psi.'
    }
  ];
  
  const ESD_SLIDES = [
    {
      num: 1,
      title: 'Emergency Shut Down (ESD) System — Overview',
      tag: 'SLIDE 01 // COVER & PURPOSE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div class="inner-box amber-border" style="padding:1.5rem;">
            <div class="font-mono text-amber" style="font-size:0.75rem; margin-bottom:0.35rem;">WELL TESTING ACADEMY // MODULE 01</div>
            <h2 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">Emergency Shut Down (ESD) System</h2>
            <p class="text-muted" style="font-size:0.9rem;">
              The Emergency Shut Down (ESD) system is a fail-safe pneumatic-hydraulic control architecture installed on surface well testing spreads to rapidly close the wellhead flow valve and/or Surface Safety Valve (SSV) in less than <span class="font-mono text-emerald" style="font-weight:700;">10 seconds</span>.
            </p>
          </div>
  
          <div class="grid-3">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // FAIL-SAFE DESIGN</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Spring-Return Closure</div>
              <p class="text-muted" style="font-size:0.78rem;">Hydraulic pressure holds valves open; bleeding pressure via air pilot or remote station triggers automatic spring closure.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // DUAL SENSING</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Hi &amp; Lo Pressure Pilots</div>
              <p class="text-muted" style="font-size:0.78rem;">Continuous mechanical monitoring upstream and downstream of the choke manifold protects against overpressure and line rupture.</p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // REMOTE ACCESS</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Distributed ESD Stations</div>
              <p class="text-muted" style="font-size:0.78rem;">Manual panic stations positioned at the Separator, Safe Area, Rig Floor, and Labcabin allow immediate human intervention.</p>
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
          <div class="grid-3">
            ${[
              { idx: '01', name: 'Layout', desc: 'Overall surface well test spread interconnection of pneumatic & hydraulic lines.', target: 3 },
              { idx: '02', name: 'Hydraulic Actuator', desc: 'Force balance (F1/F2), spring-return fail-safe mechanics on Flowhead & SSV.', target: 4 },
              { idx: '03', name: 'POM Rule', desc: 'Mandatory wellhead barrier selection matrix by WHP, flowrate, and H2S content.', target: 6 },
              { idx: '04', name: 'Description & Circuit', desc: '6000 psi hydraulic loop, 150 psi supply, 30 psi pneumatic pilot circuit.', target: 8 },
              { idx: '05', name: 'Hi & Lo Pilots', desc: 'Upstream/downstream sensing locations and spring-piston operating principles.', target: 11 },
              { idx: '06', name: 'ESD-BB Panel & Refs', desc: 'Control console gauges (A0–A5), valves (V1–V8), and technical manuals.', target: 13 }
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
            { code: 'OBJ-01', title: 'Explain the Function of the ESD System', detail: 'Articulate how the ESD isolates wellhead effluent in under 10 seconds during process overpressure, line rupture, or surface emergencies.' },
            { code: 'OBJ-02', title: 'Locate All ESD Stations on a Well Test Spread', detail: 'Identify mandatory station placements (Separator & Safe Area) as well as recommended locations (Rig Floor & Labcabin).' },
            { code: 'OBJ-03', title: 'Understand the ESD Layout (Oil & Air Circuits)', detail: 'Trace the high-pressure hydraulic actuator circuit (up to 6,000 psi) and the low-pressure pneumatic control/pilot loop (~30 psi).' },
            { code: 'OBJ-04', title: 'List When an ESD System is Compulsory', detail: 'Apply POM rules: WHP > 5,000 psi, H2S presence, or high flowrates (Gas > 30 MMSCFD or Oil > 8,000 BPD).' },
            { code: 'OBJ-05', title: 'Verify Dynamic Circuit Behavior ("esd" Simulation)', detail: 'Diagnose normal operation vs. station trip, Hi-pilot trip, and Lo-pilot trip valve spool movements.' }
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
      title: 'Surface Well Test ESD Spread Layout',
      tag: 'SLIDE 04 // FIELD P&ID OVERVIEW',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem;">
            <div>
              <h3 style="font-size:1.2rem; font-weight:700;">Surface Well Test Spread &amp; ESD Integration</h3>
              <p class="text-muted" style="font-size:0.78rem;">Closes well quickly in an emergency (<span class="font-mono text-emerald">&lt; 10 seconds</span>) from a remote station or ESD console.</p>
            </div>
            <span class="badge badge-crimson">MAX CLOSURE: &lt; 10 SEC</span>
          </div>
  
          <div class="inner-box" style="overflow-x:auto;">
            <svg viewBox="0 0 860 360" style="width:100%; min-width:680px; height:auto; font-family:monospace;">
              <rect x="15" y="12" width="275" height="58" rx="8" fill="#111827" stroke="#1e293b" />
              <line x1="28" y1="30" x2="65" y2="30" stroke="#ef4444" stroke-width="3" />
              <text x="75" y="34" fill="#e2e8f0" font-size="11">Hydraulic Actuator Line (1500-3000 psi)</text>
              <line x1="28" y1="52" x2="65" y2="52" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4" />
              <text x="75" y="56" fill="#e2e8f0" font-size="11">Pneumatic Control / Pilot Loop (~30 psi)</text>
  
              <rect x="330" y="20" width="160" height="64" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
              <text x="410" y="46" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">ESD CONTROL</text>
              <text x="410" y="64" text-anchor="middle" fill="#f8fafc" font-size="11">CONSOLE (PANEL)</text>
  
              <text x="235" y="42" fill="#38bdf8" font-size="11">Rig Air Supply</text>
              <line x1="235" y1="52" x2="330" y2="52" stroke="#38bdf8" stroke-width="2.5" />
  
              <rect x="40" y="135" width="120" height="68" rx="10" fill="#111827" stroke="#3b82f6" stroke-width="2" />
              <text x="100" y="165" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">FLOWHEAD</text>
              <text x="100" y="183" text-anchor="middle" fill="#94a3b8" font-size="10">Hyd. Flow Valve</text>
  
              <rect x="40" y="245" width="120" height="62" rx="10" fill="#111827" stroke="#10b981" stroke-width="2" />
              <text x="100" y="272" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">SURFACE SAFETY</text>
              <text x="100" y="288" text-anchor="middle" fill="#ffffff" font-size="11">VALVE (SSV)</text>
  
              <path d="M 330 68 L 195 68 L 195 168 L 160 168" fill="none" stroke="#ef4444" stroke-width="2.5" />
              <path d="M 195 168 L 195 276 L 160 276" fill="none" stroke="#ef4444" stroke-width="2.5" />
  
              <path d="M 100 203 L 100 245" stroke="#f59e0b" stroke-width="4" />
              <path d="M 160 276 L 235 276" stroke="#f59e0b" stroke-width="4" />
  
              <rect x="235" y="245" width="135" height="62" rx="10" fill="#111827" stroke="#f59e0b" stroke-width="2" />
              <text x="302" y="272" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">FLOOR CHOKE</text>
              <text x="302" y="288" text-anchor="middle" fill="#f59e0b" font-size="11">MANIFOLD</text>
  
              <circle cx="212" cy="276" r="10" fill="#ef4444" />
              <text x="212" y="318" text-anchor="middle" fill="#fca5a5" font-size="10">Lo-Pilot</text>
              <text x="212" y="330" text-anchor="middle" fill="#94a3b8" font-size="9">0-10,000 psi</text>
  
              <line x1="370" y1="276" x2="455" y2="276" stroke="#f59e0b" stroke-width="4" />
              <circle cx="405" cy="276" r="10" fill="#ef4444" />
              <text x="405" y="318" text-anchor="middle" fill="#fca5a5" font-size="10">Hi-Pilot</text>
              <text x="405" y="330" text-anchor="middle" fill="#94a3b8" font-size="9">0-2,500 psi</text>
  
              <rect x="424" y="266" width="18" height="20" rx="3" fill="#a855f7" />
              <text x="442" y="254" text-anchor="middle" fill="#d8b4fe" font-size="9">Erosion Probe</text>
  
              <rect x="455" y="245" width="135" height="62" rx="10" fill="#111827" stroke="#64748b" stroke-width="2" />
              <text x="522" y="272" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">STEAM</text>
              <text x="522" y="288" text-anchor="middle" fill="#94a3b8" font-size="11">EXCHANGER</text>
  
              <rect x="455" y="140" width="135" height="62" rx="10" fill="#111827" stroke="#64748b" stroke-width="2" />
              <text x="522" y="175" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">SEPARATOR</text>
              <path d="M 522 245 L 522 202" stroke="#f59e0b" stroke-width="3.5" />
  
              <rect x="455" y="35" width="135" height="62" rx="10" fill="#111827" stroke="#64748b" stroke-width="2" />
              <text x="522" y="70" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">SURGE TANK</text>
              <path d="M 522 140 L 522 97" stroke="#f59e0b" stroke-width="3.5" />
  
              <path d="M 410 84 L 410 225 L 720 225 L 720 65" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5,4" />
              <line x1="212" y1="266" x2="212" y2="225" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3" />
              <line x1="405" y1="266" x2="405" y2="225" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3" />
  
              <g transform="translate(660, 38)">
                <rect width="165" height="44" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
                <circle cx="24" cy="22" r="10" fill="#ef4444" />
                <text x="44" y="20" fill="#ffffff" font-size="10" font-weight="bold">ESD STATION 1</text>
                <text x="44" y="33" fill="#fca5a5" font-size="9">Surge / Safe Area</text>
              </g>
              <g transform="translate(660, 145)">
                <rect width="165" height="44" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
                <circle cx="24" cy="22" r="10" fill="#ef4444" />
                <text x="44" y="20" fill="#ffffff" font-size="10" font-weight="bold">ESD STATION 2</text>
                <text x="44" y="33" fill="#fca5a5" font-size="9">Separator (Mandatory)</text>
              </g>
              <g transform="translate(660, 250)">
                <rect width="165" height="44" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
                <circle cx="24" cy="22" r="10" fill="#ef4444" />
                <text x="44" y="20" fill="#ffffff" font-size="10" font-weight="bold">ESD STATION 3</text>
                <text x="44" y="33" fill="#fca5a5" font-size="9">Rig Floor / Labcabin</text>
              </g>
            </svg>
          </div>
        </div>
      `
    },
    {
      num: 5,
      title: 'Hydraulic Actuator Mechanics (Fail-Safe)',
      tag: 'SLIDE 05 // ACTUATOR FORCE BALANCE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Hydraulic Actuator — Fail-Safe Spring-Return Principle</h3>
          <p class="text-muted" style="font-size:0.85rem;">
            Installed on the <strong class="text-amber">Flowhead flow valve</strong> and/or the <strong class="text-emerald">Surface Safety Valve (SSV)</strong>. Inherently fail-safe closed: mechanical spring force plus wellbore pressure closes the gate immediately when hydraulic pressure is bled off.
          </p>
  
          <div class="grid-2">
            <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge badge-crimson">STATE A: CLOSED POSITION</span>
                <span class="font-mono text-muted" style="font-size:0.72rem;">0 PSI HYDRAULIC</span>
              </div>
              <svg viewBox="0 0 320 210" style="width:100%; height:11rem; background:#111827; border-radius:0.5rem; border:1px solid #1e293b;">
                <rect x="115" y="15" width="90" height="75" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="2" />
                <path d="M 135 22 L 185 32 L 135 42 L 185 52 L 135 62 L 185 72" fill="none" stroke="#f59e0b" stroke-width="3" />
                <text x="215" y="45" fill="#f59e0b" font-size="11" font-family="monospace">F_spring</text>
                <text x="215" y="60" fill="#94a3b8" font-size="10" font-family="monospace">(Expanded)</text>
                <rect x="120" y="74" width="80" height="10" fill="#94a3b8" />
                <rect x="154" y="84" width="12" height="50" fill="#cbd5e1" />
                <rect x="135" y="130" width="50" height="45" rx="4" fill="#ef4444" />
                <text x="160" y="157" text-anchor="middle" fill="#fff" font-size="10" font-family="monospace" font-weight="bold">CLOSED</text>
                <rect x="30" y="138" width="105" height="28" fill="#334155" />
                <rect x="185" y="138" width="105" height="28" fill="#334155" />
                <text x="75" y="156" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">FLOW IN</text>
                <text x="240" y="156" text-anchor="middle" fill="#64748b" font-size="10" font-family="monospace">BLOCKED</text>
              </svg>
              <p class="text-muted" style="font-size:0.78rem;">
                <strong>No hydraulic pressure:</strong> Return springs push the piston and valve gate downward, isolating well flow completely.
              </p>
            </div>
  
            <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge badge-emerald">STATE B: OPEN POSITION</span>
                <span class="font-mono text-emerald" style="font-size:0.72rem;">1,500–3,000 PSI</span>
              </div>
              <svg viewBox="0 0 320 210" style="width:100%; height:11rem; background:#111827; border-radius:0.5rem; border:1px solid #1e293b;">
                <rect x="115" y="15" width="90" height="75" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2" />
                <path d="M 135 20 L 185 24 L 135 28 L 185 32 L 135 36 L 185 40" fill="none" stroke="#f59e0b" stroke-width="3" />
                <rect x="118" y="52" width="84" height="36" fill="#10b981" fill-opacity="0.35" />
                <rect x="120" y="42" width="80" height="10" fill="#e2e8f0" />
                <text x="215" y="72" fill="#10b981" font-size="10" font-family="monospace">Hyd. Oil</text>
                <text x="215" y="84" fill="#10b981" font-size="10" font-family="monospace">Pressure</text>
                <rect x="154" y="52" width="12" height="50" fill="#cbd5e1" />
                <rect x="135" y="100" width="50" height="34" rx="4" fill="#64748b" />
                <rect x="30" y="138" width="260" height="28" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" />
                <text x="160" y="156" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="bold">FLOW OPEN &rarr;&rarr;&rarr;</text>
              </svg>
              <p class="text-muted" style="font-size:0.78rem;">
                <strong>Hydraulic pressure applied:</strong> Oil from hand pump or ESD panel overcomes spring force (<span class="font-mono">F1 &gt; F2</span>), lifting the gate to align the bore.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 6,
      title: 'Surface Safety Valve (SSV)',
      tag: 'SLIDE 06 // BARRIER HARDWARE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Surface Safety Valve (SSV)</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <p class="text-muted" style="font-size:0.88rem;">
                The <strong>Surface Safety Valve (SSV)</strong> is a dedicated, skid-mounted fail-safe gate valve installed on the flowline immediately downstream of the Flowhead. It provides an independent, automated barrier controlled by the ESD panel.
              </p>
              <div class="inner-box" style="display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">ACTUATION TYPE</span>
                <span class="font-mono text-amber" style="font-weight:700;">Hydraulic Fail-Safe Spring-Return</span>
              </div>
              <div class="inner-box" style="display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">CONTROL INTERFACE</span>
                <span class="font-mono text-emerald" style="font-weight:700;">High-Pressure Hose to ESD Panel</span>
              </div>
              <div class="inner-box" style="display:flex; justify-content:space-between; font-size:0.78rem;">
                <span class="font-mono text-muted">POM DESIGNATION</span>
                <span class="font-mono text-sky" style="font-weight:700;">S3 (Master + Flow + SSV)</span>
              </div>
            </div>
  
            <div class="inner-box" style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
              <svg viewBox="0 0 220 220" style="width:12rem; height:12rem;">
                <rect x="25" y="180" width="170" height="14" rx="3" fill="#1d4ed8" />
                <rect x="40" y="25" width="12" height="155" fill="#2563eb" />
                <rect x="168" y="25" width="12" height="155" fill="#2563eb" />
                <rect x="40" y="25" width="140" height="10" fill="#3b82f6" />
                <rect x="82" y="42" width="56" height="68" rx="8" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5" />
                <text x="110" y="80" text-anchor="middle" fill="#fff" font-size="10" font-family="monospace" font-weight="bold">ACTUATOR</text>
                <rect x="88" y="110" width="44" height="65" rx="4" fill="#991b1b" />
                <rect x="35" y="132" width="150" height="22" fill="#b91c1c" />
                <rect x="32" y="122" width="12" height="42" rx="2" fill="#ef4444" />
                <rect x="176" y="122" width="12" height="42" rx="2" fill="#ef4444" />
              </svg>
              <div class="font-mono text-muted" style="font-size:0.72rem;">SKID-MOUNTED SSV ASSEMBLY</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 7,
      title: 'POM Rule — Wellhead Barrier Matrix',
      tag: 'SLIDE 07 // MANDATORY STANDARDS TABLE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem;">
            <div>
              <h3 style="font-size:1.2rem; font-weight:700;">POM Rule — When to Use ESD &amp; Safety Barriers</h3>
              <p class="text-muted" style="font-size:0.78rem;">Matrix by Flowrate / Shut-in Wellhead Pressure (psi) vs. Nature of Fluid.</p>
            </div>
            <button onclick="closeModuleModal(); scrollToCalculator();" class="btn badge-amber font-mono">
              Launch Interactive POM Calculator &rarr;
            </button>
          </div>
  
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Flowrate &amp;/or Shut-in WHP (psi)</th>
                  <th class="text-emerald">Oil (Sweet)</th>
                  <th class="text-sky">Gas (Sweet)</th>
                  <th class="text-amber">Oil + H2S</th>
                  <th class="text-crimson">Gas + H2S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight:700; color:#fff;">
                    High Flow Rate<br/>
                    <span class="text-amber" style="font-weight:400; font-size:0.68rem;">Gas &ge; 30 MMSCF/D<br/>Liquid &ge; 8,000 bpd</span>
                  </td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D1</td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D1</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS1 &bull; D2</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS1 &bull; D2</td>
                </tr>
                <tr>
                  <td>&lt; 3,000 psi</td>
                  <td>S2<br/><span class="text-muted">SS0 &bull; D1</span></td>
                  <td>S2<br/><span class="text-muted">SS0 &bull; D1</span></td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS0 &bull; D2</td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS0 &bull; D2</td>
                </tr>
                <tr>
                  <td>3,000 &lt; P &lt; 5,000 psi</td>
                  <td>S2<br/><span class="text-muted">SS0 &bull; D1</span></td>
                  <td>S2<br/><span class="text-muted">SS0 &bull; D1</span></td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D2</td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D2</td>
                </tr>
                <tr>
                  <td>5,000 &lt; P &lt; 10,000 psi</td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D1</td>
                  <td><strong class="text-amber">S2 + ESD</strong><br/>SS1 &bull; D1</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS1 &bull; D2</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS1 &bull; D2</td>
                </tr>
                <tr>
                  <td>10,000 &lt; P &lt; 15,000 psi</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS2 &bull; D2</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS2 &bull; D2</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS2 &bull; D2</td>
                  <td><strong class="text-crimson">S3 + ESD</strong><br/>SS2 &bull; D2</td>
                </tr>
                <tr>
                  <td class="text-crimson" style="font-weight:700;">&gt; 15,000 psi</td>
                  <td colspan="4" style="text-align:center; background:rgba(239,68,68,0.12); color:#fca5a5; font-weight:700;">
                    PRODUCTION STRING MANDATORY &mdash; S3 + ESD // SCSSV // D0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div class="inner-box font-mono" style="font-size:0.75rem; display:flex; flex-wrap:wrap; gap:1.25rem;">
            <span><strong class="text-amber">S2:</strong> Master valve + Flowline valve</span>
            <span><strong class="text-crimson">S3:</strong> Master valve + Flowline valve + SSV</span>
            <span><strong class="text-emerald">SCSSV:</strong> Surface Controlled Subsurface Safety Valve</span>
          </div>
        </div>
      `
    },
    {
      num: 8,
      title: 'When is an ESD Mandatory?',
      tag: 'SLIDE 08 // CRITICAL SAFETY TRIGGERS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">ESD Mandatory Operational Criteria</h3>
          <div class="grid-3">
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITERION 01 // PRESSURE</div>
              <div class="font-mono" style="font-size:1.35rem; font-weight:800; margin:0.35rem 0;">WHP &gt; 5,000 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">Any well with a shut-in wellhead pressure exceeding 5,000 psi requires an active ESD system regardless of fluid sweetness.</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITERION 02 // TOXICITY</div>
              <div class="font-mono" style="font-size:1.35rem; font-weight:800; margin:0.35rem 0;">H<sub>2</sub>S Present</div>
              <p class="text-muted" style="font-size:0.78rem;">Presence of sour gas or sour crude (H2S) mandates immediate ESD installation even at low wellhead pressures (&lt; 3,000 psi).</p>
            </div>
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">CRITERION 03 // EROSIONAL ENERGY</div>
              <div class="font-mono" style="font-size:1.1rem; font-weight:800; margin:0.35rem 0;">Gas &gt; 30 MMSCFD<br/>Oil &gt; 8,000 BPD</div>
              <p class="text-muted" style="font-size:0.78rem;">High-rate flow tests exceeding 30 MMSCFD of gas or 8,000 barrels per day of liquid require ESD protection.</p>
            </div>
          </div>
  
          <div class="inner-box emerald-border" style="background:rgba(16,185,129,0.1); display:flex; align-items:center; gap:0.75rem;">
            <span class="dot dot-emerald" style="flex-shrink:0;"></span>
            <p class="text-emerald" style="font-size:0.85rem; font-weight:600;">
              Standard Academy Policy: ESD is strongly recommended on ALL well test operations, even when below mandatory thresholds.
            </p>
          </div>
        </div>
      `
    },
    {
      num: 9,
      title: 'ESD Hydraulic & Pneumatic Schematic Layout',
      tag: 'SLIDE 09 // CIRCUIT ARCHITECTURE',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">ESD Panel &amp; Field Circuit Schematic</h3>
          <p class="text-muted" style="font-size:0.8rem;">
            The ESD bridges two distinct fluid domains via the <span class="text-amber font-mono">V4 Interface Valve</span>: high-pressure hydraulic oil (<span class="font-mono">0–6,000 psi</span>) and regulated pneumatic control air (<span class="font-mono">0–30 psi</span>).
          </p>
  
          <div class="inner-box" style="overflow-x:auto;">
            <svg viewBox="0 0 820 330" style="width:100%; min-width:660px; height:auto; font-family:monospace;">
              <rect x="20" y="15" width="430" height="125" rx="10" fill="#111827" stroke="#ef4444" stroke-width="1.5" />
              <text x="35" y="36" fill="#ef4444" font-size="11" font-weight="bold">HYDRAULIC CIRCUIT (0 - 6,000 PSI)</text>
  
              <rect x="40" y="55" width="90" height="44" rx="6" fill="#1e293b" stroke="#94a3b8" />
              <text x="85" y="75" text-anchor="middle" fill="#fff" font-size="10">Hydraulic</text>
              <text x="85" y="88" text-anchor="middle" fill="#94a3b8" font-size="10">Oil Tank</text>
  
              <rect x="160" y="55" width="95" height="44" rx="6" fill="#1e293b" stroke="#f59e0b" />
              <text x="207" y="75" text-anchor="middle" fill="#f59e0b" font-size="10">Manual / Air</text>
              <text x="207" y="88" text-anchor="middle" fill="#fff" font-size="10">Hyd. Pump</text>
  
              <rect x="295" y="55" width="125" height="44" rx="6" fill="#7f1d1d" stroke="#ef4444" />
              <text x="357" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">V4 INTERFACE</text>
              <text x="357" y="88" text-anchor="middle" fill="#fca5a5" font-size="10">VALVE</text>
  
              <line x1="130" y1="77" x2="160" y2="77" stroke="#ef4444" stroke-width="2.5" />
              <line x1="255" y1="77" x2="295" y2="77" stroke="#ef4444" stroke-width="2.5" />
              <line x1="420" y1="77" x2="545" y2="77" stroke="#ef4444" stroke-width="3" />
              <rect x="545" y="52" width="235" height="50" rx="8" fill="#111827" stroke="#ef4444" stroke-width="2" />
              <text x="662" y="75" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">TO HYDRAULIC SAFETY VALVES</text>
              <text x="662" y="90" text-anchor="middle" fill="#fca5a5" font-size="10">(Flowhead Valve &amp; SSV)</text>
  
              <rect x="20" y="160" width="760" height="150" rx="10" fill="#111827" stroke="#38bdf8" stroke-width="1.5" />
              <text x="35" y="182" fill="#38bdf8" font-size="11" font-weight="bold">PNEUMATIC CIRCUIT (SUPPLY: 0-150 PSI // PILOT &amp; ESD LOOP: 0-30 PSI)</text>
  
              <rect x="35" y="205" width="95" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" />
              <text x="82" y="224" text-anchor="middle" fill="#fff" font-size="10">Air Supply</text>
              <text x="82" y="237" text-anchor="middle" fill="#38bdf8" font-size="9">0-150 psi</text>
  
              <rect x="35" y="258" width="95" height="38" rx="6" fill="#1e293b" stroke="#64748b" />
              <text x="82" y="280" text-anchor="middle" fill="#cbd5e1" font-size="10">Air Vessel</text>
  
              <rect x="165" y="205" width="105" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
              <text x="217" y="224" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">V5 Reset Valve</text>
              <text x="217" y="237" text-anchor="middle" fill="#94a3b8" font-size="9">0-30 psi</text>
  
              <rect x="165" y="258" width="105" height="38" rx="6" fill="#1e293b" stroke="#f59e0b" />
              <text x="217" y="280" text-anchor="middle" fill="#f59e0b" font-size="10">V7 Bypass</text>
  
              <rect x="305" y="205" width="115" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" />
              <text x="362" y="224" text-anchor="middle" fill="#fff" font-size="10">Quick Exhaust</text>
              <text x="362" y="237" text-anchor="middle" fill="#94a3b8" font-size="9">Fast Bleed</text>
  
              <rect x="305" y="258" width="115" height="38" rx="6" fill="#1e293b" stroke="#38bdf8" />
              <text x="362" y="280" text-anchor="middle" fill="#fff" font-size="10">V9 Check Valve</text>
  
              <line x1="357" y1="205" x2="357" y2="99" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5,3" />
              <text x="366" y="152" fill="#38bdf8" font-size="10">30 psi Pilot Signal</text>
  
              <line x1="420" y1="226" x2="465" y2="226" stroke="#38bdf8" stroke-width="2.5" />
              <rect x="465" y="202" width="95" height="48" rx="6" fill="#7f1d1d" stroke="#ef4444" />
              <text x="512" y="224" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">ESD Stations</text>
              <text x="512" y="237" text-anchor="middle" fill="#fca5a5" font-size="9">~30 psi</text>
  
              <line x1="560" y1="226" x2="585" y2="226" stroke="#38bdf8" stroke-width="2.5" />
              <rect x="585" y="202" width="85" height="48" rx="6" fill="#1e293b" stroke="#f59e0b" />
              <text x="627" y="224" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">High Pilot</text>
              <text x="627" y="237" text-anchor="middle" fill="#94a3b8" font-size="9">Downstream</text>
  
              <line x1="670" y1="226" x2="690" y2="226" stroke="#38bdf8" stroke-width="2.5" />
              <rect x="690" y="202" width="80" height="48" rx="6" fill="#1e293b" stroke="#f59e0b" />
              <text x="730" y="224" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Low Pilot</text>
              <text x="730" y="237" text-anchor="middle" fill="#94a3b8" font-size="9">Upstream</text>
            </svg>
          </div>
        </div>
      `
    },
    {
      num: 10,
      title: 'ESD Panel & Hydraulic Valve Specifications',
      tag: 'SLIDE 10 // PRESSURE RATINGS & COMPONENTS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">ESD Panel &amp; Hydraulic Circuit Specifications</h3>
          <div class="grid-3">
            <div class="inner-box crimson-border">
              <div class="font-mono text-crimson" style="font-size:0.72rem;">HYDRAULIC MAX RATING</div>
              <div class="font-mono" style="font-size:1.35rem; font-weight:800; margin:0.25rem 0;">6,000 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">Maximum allowable hydraulic oil circuit pressure rating.</p>
            </div>
            <div class="inner-box emerald-border">
              <div class="font-mono text-emerald" style="font-size:0.72rem;">NORMAL OPERATING OIL</div>
              <div class="font-mono" style="font-size:1.35rem; font-weight:800; margin:0.25rem 0;">1,500–3,000 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">Standard working hydraulic pressure keeping Flowhead/SSV open.</p>
            </div>
            <div class="inner-box sky-border">
              <div class="font-mono text-sky" style="font-size:0.72rem;">PNEUMATIC PILOT LOOP</div>
              <div class="font-mono" style="font-size:1.35rem; font-weight:800; margin:0.25rem 0;">~30 psi</div>
              <p class="text-muted" style="font-size:0.78rem;">Regulated air pressure serving Hi/Lo pilots and remote ESD stations.</p>
            </div>
          </div>
  
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.75rem; font-weight:700; margin-bottom:0.75rem;">ESD CONTROL PANEL INTERNAL BILL OF MATERIALS</div>
            <div class="grid-3 font-mono" style="font-size:0.75rem;">
              <div class="inner-box" style="background:var(--panel);">01. Hydraulic Pump (Air/Manual)</div>
              <div class="inner-box" style="background:var(--panel);">02. Hydraulic Oil Reservoir Tank</div>
              <div class="inner-box" style="background:var(--panel);">03. Interface Valve (V4)</div>
              <div class="inner-box" style="background:var(--panel);">04. Velocity Check Valve (V9)</div>
              <div class="inner-box" style="background:var(--panel);">05. Air Spare Vessel (Older Models)</div>
              <div class="inner-box" style="background:var(--panel);">06. Quick Exhaust Valve</div>
              <div class="inner-box" style="background:var(--panel);">07. Reset Valve (V5)</div>
              <div class="inner-box" style="background:var(--panel);">08. Bypass Valve (V7)</div>
              <div class="inner-box" style="background:var(--panel);">09. Pilots Lo/Hi &amp; ESD Stations (~30 psi)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 11,
      title: 'ESD Remote Stations & Placement Rules',
      tag: 'SLIDE 11 // REMOTE TRIP STATIONS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">ESD Remote Stations — Locations &amp; Operation</h3>
          <div class="grid-2" style="align-items:center;">
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <div class="inner-box crimson-border">
                <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700; margin-bottom:0.4rem;">MANDATORY LOCATIONS</div>
                <div style="font-size:0.85rem;">&bull; At the Test Separator (Mandatory)</div>
                <div style="font-size:0.85rem;">&bull; At the designated Safe Area / Muster Point (Mandatory)</div>
              </div>
              <div class="inner-box">
                <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.4rem;">ADDITIONAL RECOMMENDED LOCATIONS</div>
                <div class="text-muted" style="font-size:0.85rem;">&bull; Rig Floor (Driller / Wellhead area)</div>
                <div class="text-muted" style="font-size:0.85rem;">&bull; Near the Data Acquisition / Labcabin</div>
              </div>
              <p class="text-muted" style="font-size:0.78rem;">
                <strong>Action when activated:</strong> Shifting the lever from <span class="text-emerald font-mono">IN SERVICE</span> to <span class="text-crimson font-mono">SHUT DOWN</span> vents the ~30 psi pneumatic loop to atmosphere, tripping the interface valve and bleeding hydraulic oil back to tank.
              </p>
            </div>
  
            <div class="station-plate">
              <div class="plate-header">
                EMERGENCY SHUT DOWN<br/>PANNEAU D'ARRET D'URGENCE
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
                <div id="station-in-service-tag" style="padding:0.5rem 0.75rem; border-radius:0.4rem; background:#047857; color:#fff; font-weight:700; font-size:0.72rem; text-align:center;">
                  IN SERVICE<br/>EN SERVICE
                </div>
                <button onclick="toggleStationDemo()" id="station-lever-btn" style="padding:0.65rem 1rem; border-radius:9999px; background:#dc2626; color:#fff; font-family:monospace; font-size:0.75rem; font-weight:700; border:2px solid #fff;">
                  TEST TRIP LEVER
                </button>
              </div>
              <div id="station-shutdown-tag" style="background:rgba(185,28,28,0.35); color:#450a0a; text-align:center; padding:0.5rem; border-radius:0.4rem; font-weight:800; font-size:0.72rem;">
                SHUT DOWN / ARRET D'URGENCE
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 12,
      title: 'Hi-Pilot & Lo-Pilot Functional Placement',
      tag: 'SLIDE 12 // OVERPRESSURE & RUPTURE PROTECTION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Hi-Pilot &amp; Lo-Pilot — Strategic Placement</h3>
          <div class="grid-2">
            <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge badge-amber">HI-PILOT (HIGH PRESSURE)</span>
                <span class="font-mono text-muted" style="font-size:0.72rem;">0–2,500 psi Range</span>
              </div>
              <div style="font-size:1rem; font-weight:700;">Location: Downstream of Choke Manifold</div>
              <p class="text-muted" style="font-size:0.8rem;">
                <strong>Purpose:</strong> Protects downstream low-pressure equipment (Steam Exchanger, Test Separator, Surge Tank) from overpressure in case of choke washout or downstream blockage.
              </p>
              <div class="inner-box font-mono text-amber" style="background:var(--panel); font-size:0.74rem;">
                TRIGGER: Flowline pressure increases above spring setpoint &rarr; Vents 30 psi air &rarr; Well closes.
              </div>
            </div>
  
            <div class="inner-box sky-border" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="badge badge-sky">LO-PILOT (LOW PRESSURE)</span>
                <span class="font-mono text-muted" style="font-size:0.72rem;">0–10,000 psi Range</span>
              </div>
              <div style="font-size:1rem; font-weight:700;">Location: Upstream of Choke Manifold</div>
              <p class="text-muted" style="font-size:0.8rem;">
                <strong>Purpose:</strong> Protects against a catastrophic upstream flowline rupture, washout, or parted connection between the Flowhead and Choke Manifold.
              </p>
              <div class="inner-box font-mono text-sky" style="background:var(--panel); font-size:0.74rem;">
                TRIGGER: Flowline pressure drops below spring setpoint &rarr; Vents 30 psi air &rarr; Well closes.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 13,
      title: 'Hi-Pilot & Lo-Pilot Mechanical Principle (SVG)',
      tag: 'SLIDE 13 // INTERNAL PISTON & SPRING MECHANICS',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">Hi-Pilot &amp; Lo-Pilot Internal Mechanical Principle</h3>
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div style="display:flex; justify-content:space-between;">
                <strong class="text-amber" style="font-size:0.9rem;">Hi-Pilot (Normal Operation)</strong>
                <span class="font-mono text-muted" style="font-size:0.7rem;">Trips on Overpressure</span>
              </div>
              <svg viewBox="0 0 340 160" style="width:100%; height:10rem; background:#111827; border-radius:0.5rem; border:1px solid #1e293b; font-family:monospace;">
                <rect x="65" y="45" width="210" height="65" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="2" />
                <rect x="15" y="65" width="50" height="25" fill="#f59e0b" fill-opacity="0.35" stroke="#f59e0b" />
                <text x="40" y="55" text-anchor="middle" fill="#fbbf24" font-size="9">Flowline P</text>
                <rect x="75" y="52" width="16" height="51" fill="#94a3b8" />
                <rect x="91" y="72" width="38" height="11" fill="#cbd5e1" />
                <polygon points="129,67 142,77.5 129,88" fill="#10b981" />
                <line x1="142" y1="45" x2="142" y2="20" stroke="#38bdf8" stroke-width="3" />
                <text x="142" y="14" text-anchor="middle" fill="#38bdf8" font-size="9">30 psi Air (Sealed)</text>
                <path d="M 148 62 L 162 92 L 176 62 L 190 92 L 204 62 L 218 92 L 232 62" fill="none" stroke="#f59e0b" stroke-width="2.5" />
                <rect x="235" y="70" width="55" height="15" fill="#64748b" />
                <text x="275" y="58" text-anchor="middle" fill="#94a3b8" font-size="9">Set Screw</text>
                <text x="170" y="132" text-anchor="middle" fill="#cbd5e1" font-size="10">P_flow &le; F_spring (Plug Closed)</text>
              </svg>
              <p class="text-muted" style="font-size:0.78rem;">
                Flowline pressure remains at or below the adjustable spring setpoint. If pressure rises above setpoint, the piston compresses the spring and unseats the plug, venting control air.
              </p>
            </div>
  
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.65rem;">
              <div style="display:flex; justify-content:space-between;">
                <strong class="text-sky" style="font-size:0.9rem;">Lo-Pilot (Normal Operation)</strong>
                <span class="font-mono text-muted" style="font-size:0.7rem;">Trips on Pressure Loss</span>
              </div>
              <svg viewBox="0 0 340 160" style="width:100%; height:10rem; background:#111827; border-radius:0.5rem; border:1px solid #1e293b; font-family:monospace;">
                <rect x="65" y="45" width="210" height="65" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="2" />
                <rect x="275" y="65" width="50" height="25" fill="#f59e0b" fill-opacity="0.35" stroke="#f59e0b" />
                <text x="300" y="55" text-anchor="middle" fill="#fbbf24" font-size="9">Flowline P</text>
                <rect x="45" y="70" width="35" height="15" fill="#64748b" />
                <path d="M 82 62 L 95 92 L 108 62 L 121 92 L 134 62 L 147 92" fill="none" stroke="#f59e0b" stroke-width="2.5" />
                <polygon points="168,67 155,77.5 168,88" fill="#10b981" />
                <rect x="168" y="72" width="55" height="11" fill="#cbd5e1" />
                <rect x="223" y="52" width="16" height="51" fill="#94a3b8" />
                <line x1="155" y1="45" x2="155" y2="20" stroke="#38bdf8" stroke-width="3" />
                <text x="155" y="14" text-anchor="middle" fill="#38bdf8" font-size="9">30 psi Air (Sealed)</text>
                <text x="170" y="132" text-anchor="middle" fill="#cbd5e1" font-size="10">P_flow &ge; F_spring (Plug Held Shut)</text>
              </svg>
              <p class="text-muted" style="font-size:0.78rem;">
                Normal flowline pressure overcomes the spring force to hold the plug sealed. If a line ruptures and pressure falls below setpoint, the spring pushes the plug open and vents control air.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 14,
      title: 'ESD-BB Control Panel & ELC Loop Instrumentation',
      tag: 'SLIDE 14 // PANEL GAUGES & VALVES (A0–A5 / V1–V8)',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem;">
            <h3 style="font-size:1.2rem; font-weight:700;">ESD-BB Control Panel Layout (Max Air Supply: 100 psi)</h3>
            <span class="badge badge-sky">AIR SUPPLY: 100 PSI MAX</span>
          </div>
  
          <div class="grid-2">
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="font-mono text-amber" style="font-size:0.75rem; font-weight:700; margin-bottom:0.25rem;">PANEL PRESSURE GAUGES (A0 – A5)</div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">A0</strong><span>Air Supply Pressure (100 psi max)</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">A1</strong><span>Air Vessel Pressure</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">A2</strong><span>Pressurization Circuit / Reset Valve</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">A3</strong><span>Hydraulic Pump Air Pressure</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">A4</strong><span>Interface Valve Air Pressure (~30 psi)</span></div>
              <div class="inner-box crimson-border font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-crimson">A5</strong><span>Hydraulic Pressure to Actuators</span></div>
            </div>
  
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.45rem;">
              <div class="font-mono text-emerald" style="font-size:0.75rem; font-weight:700; margin-bottom:0.25rem;">CONTROL VALVES &amp; REGULATORS</div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-emerald">V1 / V2 / V3</strong><span>Air Isolation Valves</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-emerald">AR2 / AR3</strong><span>Air Pressure Regulators</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-emerald">V5</strong><span>Reset Valve (Pressurizes Loop)</span></div>
              <div class="inner-box font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-amber">V7</strong><span>Bypass Valve (Startup/Testing)</span></div>
              <div class="inner-box crimson-border font-mono" style="background:var(--panel); padding:0.55rem 0.75rem; font-size:0.75rem; display:flex; justify-content:space-between;"><strong class="text-crimson">V8</strong><span>EMERGENCY SHUT DOWN PUSH</span></div>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 15,
      title: 'Technical References & Maintenance Documentation',
      tag: 'SLIDE 15 // FIELD DOCUMENTATION',
      render: () => `
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <h3 style="font-size:1.2rem; font-weight:700;">References &amp; Field Maintenance Resources</h3>
          <div class="grid-2">
            <div class="inner-box">
              <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-01 // INTERACTIVE TRAINING</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">Online Training Animation: "esd"</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Interactive spool-valve flow simulation illustrating normal pressurized state, remote ESD station trip, Hi-Pilot overpressure trip, and Lo-Pilot line-rupture trip.
              </p>
            </div>
            <div class="inner-box">
              <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.35rem;">REF-02 // TECHNICAL MANUALS</div>
              <div style="font-size:1rem; font-weight:700; margin-bottom:0.35rem;">Technical Data Sheet &amp; Maintenance Manual</div>
              <p class="text-muted" style="font-size:0.8rem;">
                Contains pressure test procedures, relief valve calibration specs, V4 interface valve seal replacement kits, and pre-job function test checklists.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      num: 16,
      title: 'Summary & Academy Knowledge Check Quiz',
      tag: 'SLIDE 16 // SELF-ASSESSMENT',
      render: () => renderQuizSlide()
    }
  ];
  