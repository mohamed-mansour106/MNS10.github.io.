// slide-deck-10.js
const BURNERS_QUIZ_QUESTIONS = [
  {
    q: 'Why must you never use rig air supply for burner air circuits?',
    options: [
      'Always use dedicated compressors (and fit check valves) rather than rig air supply.',
      'Rig air cannot flow through swivel joints.',
      'Rig air automatically extinguishes propane pilot lights.',
      'Rig air is only allowed when burning water.'
    ],
    answer: 0,
    explanation: 'The burner air supply guidance specifies never using rig air supply and always using dedicated compressors with proper check valves on the air line and compressor outlet.'
  },
  {
    q: 'Why is a check valve mounted on the oil line upstream of the atomizers?',
    options: [
      'To prevent air from passing from the atomizer into the oil line (such as during startup when air is sent before oil).',
      'To increase the propane pressure at the ignition panel.',
      'To cool the water ring spray cone.',
      'To replace the need for an oil filter.'
    ],
    answer: 0,
    explanation: 'During startup, air is routed to the atomizers before oil is introduced, so an upstream oil-line check valve stops air from backing into the oil circuit.'
  },
  {
    q: 'What is a key operational feature of the Evergreen ("Sunflower") burner?',
    options: [
      '1 head with 12 nozzles, H2S service capability, up to 30% water cut, and a 180-degree rotating mounting for maintenance access.',
      '3 separate heads with 1 top oil-mix and 2 bottom diesel nozzles only.',
      'No air supply required because combustion is purely gravity-fed.',
      'It is obsolete and only rated for 1,000 bopd maximum.'
    ],
    answer: 0,
    explanation: 'The Evergreen (Sunflower) burner features 1 head with 12 nozzles, H2S service capability, up to 30% water cut tolerance, and a 180-degree rotating mount for easier maintenance.'
  },
  {
    q: 'What must be checked before starting maintenance on the Evergreen oil line?',
    options: [
      'Verify there is no pressure trapped between the oil check valve and the piston (oil line purge).',
      'Remove the water curtain before closing the boom valves.',
      'Increase air pressure to 300 psi.',
      'Disconnect the propane line only after igniting the pilots.'
    ],
    answer: 0,
    explanation: 'Before starting maintenance, confirm no pressure is trapped between the oil check valve and the piston.'
  }
];

const BURNERS_SLIDES = [
  {
    num: 1,
    title: 'Burners — Overview & Purpose',
    tag: 'SLIDE 01 // COVER & PURPOSE',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div class="inner-box amber-border" style="padding:1.5rem;">
          <div class="font-mono text-amber" style="font-size:0.75rem; margin-bottom:0.35rem;">WELL TESTING ACADEMY // MODULE 10</div>
          <h2 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:0.5rem;">Surface Testing Burners</h2>
          <p class="text-muted" style="font-size:0.9rem;">
            Dispose of well test oil cleanly at the surface, avoid oil storage and pollution issues, and limit heat radiation on the rig using water screens and long booms.
          </p>
        </div>

        <div class="grid-3">
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.72rem; margin-bottom:0.3rem;">01 // PRINCIPLE</div>
            <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Effluent Atomization</div>
            <p class="text-muted" style="font-size:0.78rem;">Breaks well effluent into fine droplets for efficient combustion; number of heads sets max oil rate.</p>
          </div>
          <div class="inner-box">
            <div class="font-mono text-emerald" style="font-size:0.72rem; margin-bottom:0.3rem;">02 // UTILITIES</div>
            <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Propane, Power, Air &amp; Water</div>
            <p class="text-muted" style="font-size:0.78rem;">Propane for pilots, electrical power for ignition/lodge boxes, dedicated air compressors (not rig air), and water for heat shielding.</p>
          </div>
          <div class="inner-box">
            <div class="font-mono text-sky" style="font-size:0.72rem; margin-bottom:0.3rem;">03 // BURNER MODELS</div>
            <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.3rem;">Spitfire to Evergreen</div>
            <p class="text-muted" style="font-size:0.78rem;">Covers Spitfire, Sea Dragon (obsolete), Green Dragon, Mud Burner, and Evergreen ("Sunflower").</p>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 2,
    title: 'Lecture Contents & Objectives',
    tag: 'SLIDES 02–03 // SYLLABUS & GOALS',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Lecture Contents &amp; Learning Objectives</h3>
        <div class="grid-2">
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">LECTURE CONTENTS</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Lecture Objectives<br/>
              &bull; Applications<br/>
              &bull; Operations<br/>
              &bull; Specifications
            </div>
          </div>
          <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">BY THE END OF THIS LECTURE</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Understand atomization systems, flow circuits, and pilot ignition systems<br/>
              &bull; Describe the various burner types<br/>
              &bull; Identify key technical characteristics
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 3,
    title: 'Purpose of Burners & Operating Principle',
    tag: 'SLIDES 04–05 // PURPOSE & PRINCIPLE',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Purpose &amp; Operating Principle</h3>
        <div class="grid-2">
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">PURPOSE OF BURNERS</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Dispose of oil at surface during a well test<br/>
              &bull; Avoid oil storage and pollution problems<br/>
              &bull; Limit heat radiation on rigs using water screens<br/>
              &bull; Mounted on long booms to maintain a safe distance from the rig
            </div>
          </div>
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">PRINCIPLE &amp; REQUIREMENTS</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Atomization breaks effluent into fine droplets<br/>
              &bull; Needs propane for pilots &amp; electricity for lodge/spark ignition<br/>
              &bull; Uses dedicated compressors (never rig air) &amp; water for heat protection<br/>
              &bull; Number of combustion heads determines max oil flowrate
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 4,
    title: 'Green Dragon Style Burners & Features',
    tag: 'SLIDES 06–07 // GREEN DRAGON ARCHITECTURE',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Green Dragon "Style" Burners &amp; Main Features</h3>
        <div class="grid-2">
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">STRUCTURAL &amp; FLOW FEATURES</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Hearth to guide air<br/>
              &bull; Water ring for improved combustion &amp; cooling<br/>
              &bull; Ball valves on air &amp; oil lines to select active heads<br/>
              &bull; Rotation system &amp; swivel joint
            </div>
          </div>
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">IGNITION &amp; NON-RETURN PROTECTION</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Pilot light positioned below the atomizer<br/>
              &bull; Dedicated air and oil check valves<br/>
              &bull; Frame supporting multi-head combustion assemblies
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 5,
    title: 'Oil Atomization & Gas Pilot Light',
    tag: 'SLIDES 08–09 // ATOMIZATION & IGNITION',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Oil Atomizer &amp; Gas Pilot Light</h3>
        <div class="grid-2">
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">OIL ATOMIZER (SEA / GREEN DRAGON)</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Air and oil mix/combine before ignition via swirl, oil nozzle, and air nozzle<br/>
              &bull; Example nozzle sizing: 11 mm oil nozzle &amp; 22 mm air nozzle<br/>
              &bull; Follow datasheets and FOH guidelines for clean burning
            </div>
          </div>
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">GAS PILOT LIGHT</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Located below the atomizer<br/>
              &bull; Small propane burner (injector + diffuser) with spark plug<br/>
              &bull; Ignited via high voltage from remote control / lodge box
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 6,
    title: 'Swivel Joint & Air / Oil / Water Circuits',
    tag: 'SLIDES 10–13 // SWIVEL & CIRCUITS',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Swivel Joint &amp; Fluid Circuits</h3>
        <div class="grid-2" style="font-size:0.78rem; gap:0.65rem;">
          <div class="inner-box" style="background:var(--panel);">
            <strong class="text-amber">Swivel Joint (2" Air, 3" Oil, 3" Water):</strong><br/>
            &bull; Acts as a pivot supporting the burner assembly<br/>
            &bull; Allows positioning up to 75° on either side of horizontal axis<br/>
            &bull; Uses wing union connections
          </div>
          <div class="inner-box" style="background:var(--panel);">
            <strong class="text-emerald">Air &amp; Oil Circuits + Check Valves:</strong><br/>
            &bull; Never use rig air; always use dedicated compressors + check valves<br/>
            &bull; Air check valve prevents oil/effluent backflow into air line/compressor<br/>
            &bull; Oil check valve prevents air backflow into oil line during startup
          </div>
        </div>
        <div class="inner-box" style="font-size:0.78rem;">
          <strong class="text-sky">Water Circuit (3" Water):</strong> The water ring uses a nozzle cone to produce a water spray/droplet screen for heat radiation protection and combustion support.
        </div>
      </div>
    `
  },
  {
    num: 7,
    title: 'Spitfire, Green Dragon & Mud Burner',
    tag: 'SLIDES 14–16 // MULTI-HEAD MODELS',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Spitfire, Green Dragon &amp; Mud Burner</h3>
        <div class="grid-3">
          <div class="inner-box">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">SPITFIRE (LIGHT)</div>
            <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">General Service</div>
            <p class="text-muted" style="font-size:0.76rem;">1 head; light burner rated for 4,000 bopd at 300 psi (recap max: 6,000 @ 465 psi).</p>
          </div>
          <div class="inner-box emerald-border">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">GREEN DRAGON</div>
            <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">General or H2S</div>
            <p class="text-muted" style="font-size:0.76rem;">7,000 bopd @ 300 psi (3 heads) or 9,000 bopd @ 300 psi (4 heads); pneumatic actuators on oil/air valves.</p>
          </div>
          <div class="inner-box amber-border">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">3-HEADED MUD BURNER</div>
            <div style="font-weight:700; font-size:0.9rem; margin:0.3rem 0;">General or H2S</div>
            <p class="text-muted" style="font-size:0.76rem;">1 top oil-mix head + 2 bottom diesel heads; 5,000 bpd capacity with drip pan.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 8,
    title: 'Evergreen ("Sunflower") Burner & Operating Domain',
    tag: 'SLIDES 17–22 // EVERGREEN SPECS & ENVELOPE',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Evergreen ("Sunflower") Burner</h3>
        <div class="grid-2">
          <div class="inner-box emerald-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-emerald" style="font-size:0.72rem; font-weight:700;">KEY CHARACTERISTICS</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; 1 head with 12 nozzles; H2S service capable<br/>
              &bull; Up to 15,000 bopd at 240 psi with High Flowrate Kit (HRK)<br/>
              &bull; Handles up to 30% water cut and eliminates liquid fall-out<br/>
              &bull; 180° rotating mount for maintenance access; 3" oil inside 8" air line with oil filter
            </div>
          </div>
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">KITS &amp; AIR COMPRESSORS</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Spreader kits: Low Flow (LRK), Standard (SRK), High Flow (HRK)<br/>
              &bull; Operating zones: Clean burning vs. light/dark smoke vs. too much air (fall-out)<br/>
              &bull; High air demand: large compressors (1,250 scfm) &amp; small compressors (800 scfm)
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 9,
    title: 'Evergreen Ignition, Flare Clearance & Maintenance',
    tag: 'SLIDES 23–27 // BRFI-BB & HIGHLIGHTS',
    render: () => `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <h3 style="font-size:1.2rem; font-weight:700;">Ignition Panel (BRFI-BB) &amp; Field Highlights</h3>
        <div class="grid-2">
          <div class="inner-box amber-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700;">IGNITION PANEL (BRFI-BB)</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Located at end of boom; regulates propane to pilot light<br/>
              &bull; Mixes propane and air and uses spark plug to create a "fireball"<br/>
              &bull; Spark plug is located at the panel, not at the burner head
            </div>
          </div>
          <div class="inner-box crimson-border" style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="font-mono text-crimson" style="font-size:0.72rem; font-weight:700;">FLARE &amp; PURGE / FLUSH RULES</div>
            <div style="font-size:0.8rem; line-height:1.6;">
              &bull; Extend flare ~3 m from original length to avoid Evergreen damage during gas flaring<br/>
              &bull; Oil line purge: verify no trapped pressure between oil check valve and piston before maintenance<br/>
              &bull; Flush air line with fresh water before starting job to prevent nozzle plugging
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    num: 10,
    title: 'Burners Recap & Knowledge Check Quiz',
    tag: 'SLIDES 28–34 // RECAP & ASSESSMENT',
    render: () => renderBurnersQuizSlide()
  }
];

let burnersQuizAnswers = {};
let burnersQuizSubmitted = false;

function renderBurnersQuizSlide() {
  let score = 0;
  if (burnersQuizSubmitted) {
    BURNERS_QUIZ_QUESTIONS.forEach((item, i) => {
      if (burnersQuizAnswers[i] === item.answer) score++;
    });
  }

  return `
    <div style="display:flex; flex-direction:column; gap:1rem;">
      <div class="inner-box" style="font-size:0.78rem; line-height:1.55;">
        <div class="font-mono text-amber" style="font-size:0.72rem; font-weight:700; margin-bottom:0.35rem;">BURNERS RECAP SNAPSHOT</div>
        <strong>Spitfire (1 head):</strong> max 6,000 bopd @ 465 psi &bull; <strong>Sea Dragon (obsolete):</strong> max 12,000 bopd @ 465 psi &bull; <strong>Green Dragon (3–4 heads):</strong> max 8,500 bopd @ 465 psi &bull; <strong>Mud Burner (3 heads):</strong> top 5,000 bpd @ 600 psi, bottom 1,500/head @ 150 psi &bull; <strong>Evergreen (12 nozzles):</strong> HRK 15,000 bopd @ 240 psi, SRK 9,000 @ 95 psi, LRK 3,800 @ 30 psi.
      </div>

      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
        <div>
          <h3 style="font-size:1.2rem; font-weight:700;">Surface Testing Burners Knowledge Check</h3>
          <p class="text-muted" style="font-size:0.78rem;">Answer all 4 questions based on the Burners technical deck.</p>
        </div>
        ${
          burnersQuizSubmitted
            ? `<div class="badge badge-emerald" style="padding:0.5rem 0.85rem; font-size:0.78rem;">
                SCORE: ${score} / ${BURNERS_QUIZ_QUESTIONS.length} (${Math.round((score / BURNERS_QUIZ_QUESTIONS.length) * 100)}%)
               </div>`
            : ''
        }
      </div>

      ${BURNERS_QUIZ_QUESTIONS.map((item, qIdx) => {
        const selected = burnersQuizAnswers[qIdx];
        return `
          <div class="inner-box" style="display:flex; flex-direction:column; gap:0.75rem;">
            <div style="font-weight:600; font-size:0.88rem;">
              <span class="font-mono text-amber" style="margin-right:0.35rem;">Q${qIdx + 1}.</span> ${item.q}
            </div>
            <div class="grid-2" style="gap:0.5rem;">
              ${item.options.map((opt, oIdx) => {
                let styleStr = 'background:var(--panel); border-color:var(--borderline); color:#cbd5e1; text-align:left; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.78rem;';
                if (burnersQuizSubmitted) {
                  if (oIdx === item.answer) {
                    styleStr += 'background:rgba(16,185,129,0.2); border-color:#10b981; color:#a7f3d0; font-weight:700;';
                  } else if (selected === oIdx && oIdx !== item.answer) {
                    styleStr += 'background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fecaca;';
                  }
                } else if (selected === oIdx) {
                  styleStr += 'background:rgba(245,158,11,0.2); border-color:#f59e0b; color:#fde68a; font-weight:700;';
                }

                return `
                  <button onclick="selectBurnersQuizOption(${qIdx}, ${oIdx})" style="${styleStr}">
                    <span class="font-mono" style="margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                  </button>
                `;
              }).join('')}
            </div>
            ${
              burnersQuizSubmitted
                ? `<div class="inner-box" style="background:var(--panel); font-size:0.75rem; color:#cbd5e1;">
                    <strong class="text-emerald font-mono">EXPLANATION:</strong> ${item.explanation}
                   </div>`
                : ''
            }
          </div>
        `;
      }).join('')}

      <div style="display:flex; gap:0.65rem;">
        <button onclick="submitBurnersQuiz()" class="btn btn-primary" style="padding:0.65rem 1.15rem; font-size:0.8rem;">
          Submit &amp; Grade Assessment
        </button>
        <button onclick="resetBurnersQuiz()" class="btn font-mono">Reset Quiz</button>
      </div>
    </div>
  `;
}

function selectBurnersQuizOption(qIdx, oIdx) {
  if (burnersQuizSubmitted) return;
  burnersQuizAnswers[qIdx] = oIdx;
  renderActiveSlide();
}

function submitBurnersQuiz() {
  if (Object.keys(burnersQuizAnswers).length < BURNERS_QUIZ_QUESTIONS.length) {
    showToast('Please answer all 4 questions before submitting.');
    return;
  }
  burnersQuizSubmitted = true;
  if (!state.completedSlides.includes(10)) {
    state.completedSlides.push(10);
    saveState();
    renderSlideIndex();
  }
  renderActiveSlide();
  showToast('Knowledge Check graded! Slide 10 marked complete.');
}

function resetBurnersQuiz() {
  burnersQuizAnswers = {};
  burnersQuizSubmitted = false;
  renderActiveSlide();
}
