// app.js
let state = {
    selectedCategory: 'All Modules',
    searchQuery: '',
    onlyBookmarked: false,
    bookmarks: SafeStorage.get('wta_bookmarks', ['mod-01']),
    completedSlides: SafeStorage.get('wta_completed_slides', []),
    activeModalModuleId: null,
    activeSlideIndex: 0,
    quizAnswers: {},
    quizSubmitted: false,
    stationDemoTripped: false
  };
  
  function saveState() {
    SafeStorage.set('wta_bookmarks', state.bookmarks);
    SafeStorage.set('wta_completed_slides', state.completedSlides);
    updateProgressUI();
  }
  
  function renderCategoryPills() {
    const container = document.getElementById('category-pills');
    container.innerHTML = CATEGORIES.map(cat => {
      const isActive = state.selectedCategory === cat;
      return `
        <button onclick="selectCategory('${cat}')" class="btn font-mono ${isActive ? 'btn-active-pill' : ''}">
          ${cat}
        </button>
      `;
    }).join('');
  }
  
  function selectCategory(cat) {
    state.selectedCategory = cat;
    renderCategoryPills();
    renderModulesGrid();
  }
  
  function toggleBookmarkFilter() {
    state.onlyBookmarked = !state.onlyBookmarked;
    const btn = document.getElementById('bookmark-filter-btn');
    if (state.onlyBookmarked) {
      btn.classList.add('badge-amber');
    } else {
      btn.classList.remove('badge-amber');
    }
    renderModulesGrid();
  }
  
  function clearSearch() {
    state.searchQuery = '';
    state.selectedCategory = 'All Modules';
    state.onlyBookmarked = false;
    document.getElementById('library-search').value = '';
    document.getElementById('clear-search-btn').classList.add('hidden');
    document.getElementById('bookmark-filter-btn').classList.remove('badge-amber');
    renderCategoryPills();
    renderModulesGrid();
  }
  
  function toggleBookmark(modId, event) {
    if (event) event.stopPropagation();
    const idx = state.bookmarks.indexOf(modId);
    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
      showToast('Removed module from bookmarks');
    } else {
      state.bookmarks.push(modId);
      showToast('Module bookmarked to your study list');
    }
    saveState();
    renderModulesGrid();
    updateModalBookmarkIcon();
  }
  
  function renderModulesGrid() {
    const grid = document.getElementById('modules-grid');
    const emptyState = document.getElementById('empty-search-state');
    const counter = document.getElementById('results-counter');
    const q = state.searchQuery.trim().toLowerCase();
  
    const filtered = ACADEMY_MODULES.filter(mod => {
      const matchesCat = state.selectedCategory === 'All Modules' || mod.category === state.selectedCategory;
      const matchesBookmark = !state.onlyBookmarked || state.bookmarks.includes(mod.id);
      const matchesQuery =
        !q ||
        mod.title.toLowerCase().includes(q) ||
        mod.summary.toLowerCase().includes(q) ||
        mod.category.toLowerCase().includes(q) ||
        mod.keywords.some(k => k.includes(q));
      return matchesCat && matchesBookmark && matchesQuery;
    });
  
    counter.textContent = `Showing ${filtered.length} of ${ACADEMY_MODULES.length} modules`;
  
    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }
  
    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(mod => {
      const isAvailable = mod.status === 'Available Now';
      const isBookmarked = state.bookmarks.includes(mod.id);
      
      // Dynamically calculate progress based on active module slide count
      // Inside renderModulesGrid():
        let totalModSlides = ESD_SLIDES.length;
        if (mod.id === 'mod-04') totalModSlides = HEAT_EXCHANGER_SLIDES.length;
        if (mod.id === 'mod-06') totalModSlides = TANKS_SLIDES.length;
        if (mod.id === 'mod-08') totalModSlides = VALVES_SLIDES.length;
        if (mod.id === 'mod-10') totalModSlides = BURNERS_SLIDES.length;


  
      const modProgress = isAvailable
        ? Math.round((state.completedSlides.length / totalModSlides) * 100)
        : 0;
  
      return `
        <article onclick="openModuleModal('${mod.id}', 0)" class="module-card ${isAvailable ? 'featured-card' : ''}">
          <div>
            <div class="card-top-row">
              <span class="badge ${isAvailable ? 'badge-emerald' : ''}">
                ${mod.status.toUpperCase()}
              </span>
  
              <button onclick="toggleBookmark('${mod.id}', event)" style="padding:0.4rem; border-radius:0.5rem;" class="${isBookmarked ? 'text-amber' : 'text-muted'}" title="Bookmark Module">
                <svg width="16" height="16" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </button>
            </div>
  
            <div class="font-mono text-amber" style="font-size:0.68rem; margin-bottom:0.25rem;">
              ${mod.category.toUpperCase()} // ${mod.slideCount} SLIDES
            </div>
            <h3 style="font-size:1rem; font-weight:700; color:#fff; margin-bottom:0.5rem;">
              ${mod.title}
            </h3>
            <p class="text-muted" style="font-size:0.8rem;">
              ${mod.summary}
            </p>
          </div>
  
          <div class="card-footer-row font-mono">
            <div class="text-muted">
              ${isAvailable ? `Progress: <strong class="text-emerald">${modProgress}%</strong>` : `Est. ${mod.duration}`}
            </div>
            <span class="${isAvailable ? 'text-amber' : ''}" style="font-weight:700;">
              ${isAvailable ? 'Launch Study Deck' : 'View Syllabus'} &rarr;
            </span>
          </div>
        </article>
      `;
    }).join('');
  }
  
  function updateProgressUI() {
    const completedCount = state.completedSlides.length;
    const totalSlides = ESD_SLIDES.length;
    const pct = Math.round((completedCount / totalSlides) * 100);
  
    document.getElementById('header-progress-text').textContent = `${pct}% Complete`;
    document.getElementById('header-progress-bar').style.width = `${pct}%`;
    document.getElementById('mod01-progress-badge').textContent = `${completedCount} / ${totalSlides} SLIDES COMPLETED`;
    document.getElementById('bookmark-count').textContent = state.bookmarks.length;
  }
  
  function getActiveSlidesArray() {
    if (state.activeModalModuleId === 'mod-04') return HEAT_EXCHANGER_SLIDES;
    if (state.activeModalModuleId === 'mod-06') return TANKS_SLIDES;
    if (state.activeModalModuleId === 'mod-08') return VALVES_SLIDES;
    if (state.activeModalModuleId === 'mod-10') return BURNERS_SLIDES;
    return ESD_SLIDES;
  }
  
  
  function openModuleModal(modId, slideIdx = 0) {
    state.activeModalModuleId = modId;
    state.activeSlideIndex = slideIdx;
  
    const mod = ACADEMY_MODULES.find(m => m.id === modId);
    if (!mod) return;
  
    document.getElementById('modal-module-badge').textContent = mod.code;
    document.getElementById('modal-module-title').textContent = mod.title;
    updateModalBookmarkIcon();
  
    const sidebar = document.getElementById('modal-slide-sidebar');
    const footer = document.getElementById('modal-slide-footer');
  
    // Check if module has an active slide deck (Mod-01, Mod-04, or Mod-06)
    // Inside renderModulesGrid():
    let totalModSlides = ESD_SLIDES.length;
    if (mod.id === 'mod-04') totalModSlides = HEAT_EXCHANGER_SLIDES.length;
    if (mod.id === 'mod-06') totalModSlides = TANKS_SLIDES.length;
    if (mod.id === 'mod-08') totalModSlides = VALVES_SLIDES.length;
    if (mod.id === 'mod-10') totalModSlides = BURNERS_SLIDES.length;

    // Inside openModuleModal():
    if (
      modId === 'mod-01' ||
      modId === 'mod-04' ||
      modId === 'mod-06' ||
      modId === 'mod-08' ||
      modId === 'mod-10'
    ) {
      sidebar.classList.remove('hidden');
      footer.classList.remove('hidden');
      renderSlideIndex();
      renderActiveSlide();
    } else {
      sidebar.classList.add('hidden');
      footer.classList.add('hidden');
      renderSyllabusView(mod);
    }
      
  
    document.getElementById('module-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  
  function closeModuleModal() {
    document.getElementById('module-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    state.activeModalModuleId = null;
    renderModulesGrid();
  }
  
  function toggleCurrentModalBookmark() {
    if (state.activeModalModuleId) {
      toggleBookmark(state.activeModalModuleId);
    }
  }
  
  function updateModalBookmarkIcon() {
    const icon = document.getElementById('modal-bookmark-icon');
    const isBookmarked = state.bookmarks.includes(state.activeModalModuleId);
    if (isBookmarked) {
      icon.setAttribute('fill', '#f59e0b');
      icon.classList.add('text-amber');
    } else {
      icon.setAttribute('fill', 'none');
      icon.classList.remove('text-amber');
    }
  }
  
  function renderSlideIndex() {
    const slides = getActiveSlidesArray();
    const list = document.getElementById('slide-index-list');
    const idxLabel = document.getElementById('sidebar-index-label');
    if (idxLabel) idxLabel.textContent = `SLIDE INDEX (${slides.length})`;
    document.getElementById('sidebar-completion-count').textContent = `${state.completedSlides.length}/${slides.length} Done`;
  
    list.innerHTML = slides.map((s, idx) => {
      const isCurrent = idx === state.activeSlideIndex;
      const isDone = state.completedSlides.includes(s.num);
      return `
        <button onclick="goToSlide(${idx})" class="slide-nav-item ${isCurrent ? 'active' : ''}">
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            <span class="font-mono ${isCurrent ? 'text-amber' : ''}" style="margin-right:0.35rem;">${String(s.num).padStart(2, '0')}.</span>
            ${s.title}
          </span>
          <span class="font-mono ${isDone ? 'text-emerald' : ''}" style="flex-shrink:0;">
            ${isDone ? '&#10003;' : '&bull;'}
          </span>
        </button>
      `;
    }).join('');
  }
  
  function goToSlide(idx) {
    const slides = getActiveSlidesArray();
    if (idx < 0 || idx >= slides.length) return;
    state.activeSlideIndex = idx;
    renderSlideIndex();
    renderActiveSlide();
  }
  
  function changeSlide(delta) {
    goToSlide(state.activeSlideIndex + delta);
  }
  
  function renderActiveSlide() {
    const slides = getActiveSlidesArray();
    const slide = slides[state.activeSlideIndex];
    const container = document.getElementById('modal-content-scroll');
  
    container.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem; padding-bottom:0.75rem; margin-bottom:1.25rem; border-bottom:1px solid var(--borderline);">
        <span class="font-mono text-amber" style="font-size:0.75rem; font-weight:700;">${slide.tag}</span>
        <span class="font-mono text-muted" style="font-size:0.72rem;">SLIDE ${String(slide.num).padStart(2, '0')} OF ${slides.length}</span>
      </div>
      <div>${slide.render()}</div>
    `;
  
    document.getElementById('slide-counter-pill').textContent = `Slide ${String(slide.num).padStart(2, '0')} / ${slides.length}`;
    document.getElementById('prev-slide-btn').disabled = state.activeSlideIndex === 0;
    document.getElementById('next-slide-btn').disabled = state.activeSlideIndex === slides.length - 1;
  
    const isDone = state.completedSlides.includes(slide.num);
    const completeIcon = document.getElementById('mark-complete-icon');
    const completeLabel = document.getElementById('mark-complete-label');
  
    if (isDone) {
      completeIcon.innerHTML = '&#9745;';
      completeLabel.textContent = 'Completed (Click to Undo)';
    } else {
      completeIcon.innerHTML = '&#9744;';
      completeLabel.textContent = 'Mark Slide Completed';
    }
  
    container.scrollTop = 0;
  }
  
  function toggleCurrentSlideComplete() {
    const slides = getActiveSlidesArray();
    const slide = slides[state.activeSlideIndex];
    const idx = state.completedSlides.indexOf(slide.num);
    if (idx > -1) {
      state.completedSlides.splice(idx, 1);
    } else {
      state.completedSlides.push(slide.num);
      showToast(`Slide ${String(slide.num).padStart(2, '0')} marked as completed`);
    }
    saveState();
    renderSlideIndex();
    renderActiveSlide();
  }
  
  function renderSyllabusView(mod) {
    const container = document.getElementById('modal-content-scroll');
    container.innerHTML = `
      <div style="max-width:760px; margin:0 auto; display:flex; flex-direction:column; gap:1.25rem;">
        <div class="inner-box" style="padding:1.5rem;">
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.5rem; margin-bottom:0.65rem;">
            <span class="badge badge-amber">${mod.status.toUpperCase()}</span>
            <span class="font-mono text-muted" style="font-size:0.75rem;">${mod.category} // ${mod.slideCount} SLIDES // ${mod.duration}</span>
          </div>
          <h2 style="font-size:1.45rem; font-weight:800; color:#fff; margin-bottom:0.45rem;">${mod.title}</h2>
          <p class="text-muted" style="font-size:0.88rem;">${mod.summary}</p>
        </div>
  
        <div style="display:flex; flex-direction:column; gap:0.65rem;">
          <h4 class="font-mono text-amber" style="font-size:0.75rem; font-weight:700;">MODULE SYLLABUS &amp; ENGINEERING LEARNING UNITS</h4>
          ${(mod.syllabus || []).map((topic, i) => `
            <div class="inner-box" style="display:flex; align-items:center; gap:0.85rem;">
              <span class="badge text-amber" style="flex-shrink:0;">0${i + 1}</span>
              <span style="font-size:0.88rem;">${topic}</span>
            </div>
          `).join('')}
        </div>
  
        <div class="inner-box emerald-border" style="background:rgba(16,185,129,0.1); display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem;">
          <div>
            <div class="text-emerald" style="font-size:0.9rem; font-weight:700;">Full Interactive Slide Decks Available</div>
            <p class="text-muted" style="font-size:0.78rem; margin-top:0.2rem;">Module 01 (ESD), Module 04 (Heat Exchangers), and Module 06 (Tanks) are fully unlocked.</p>
          </div>
          <button onclick="openModuleModal('mod-01', 0)" class="btn btn-primary" style="padding:0.65rem 1rem; font-size:0.8rem;">
            Open Module 01 Deck &rarr;
          </button>
        </div>
      </div>
    `;
  }
  
  function toggleStationDemo() {
    state.stationDemoTripped = !state.stationDemoTripped;
    const inServiceTag = document.getElementById('station-in-service-tag');
    const shutdownTag = document.getElementById('station-shutdown-tag');
    const btn = document.getElementById('station-lever-btn');
  
    if (state.stationDemoTripped) {
      inServiceTag.style.background = 'rgba(4,120,87,0.25)';
      inServiceTag.style.color = '#064e3b';
      shutdownTag.style.background = '#dc2626';
      shutdownTag.style.color = '#ffffff';
      btn.textContent = 'RESET STATION';
      showToast('ESD STATION TRIPPED! 30 psi air vented -> Well closed in < 10s');
    } else {
      inServiceTag.style.background = '#047857';
      inServiceTag.style.color = '#ffffff';
      shutdownTag.style.background = 'rgba(185,28,28,0.35)';
      shutdownTag.style.color = '#450a0a';
      btn.textContent = 'TEST TRIP LEVER';
      showToast('ESD Station returned to IN SERVICE position');
    }
  }
  
  function renderQuizSlide() {
    let score = 0;
    if (state.quizSubmitted) {
      ESD_QUIZ_QUESTIONS.forEach((item, i) => {
        if (state.quizAnswers[i] === item.answer) score++;
      });
    }
  
    return `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:700;">ESD System Certification Knowledge Check</h3>
            <p class="text-muted" style="font-size:0.78rem;">Answer all 4 questions based on the 16-slide ESD technical deck.</p>
          </div>
          ${
            state.quizSubmitted
              ? `<div class="badge badge-emerald" style="padding:0.5rem 0.85rem; font-size:0.78rem;">
                  SCORE: ${score} / ${ESD_QUIZ_QUESTIONS.length} (${Math.round((score / ESD_QUIZ_QUESTIONS.length) * 100)}%)
                 </div>`
              : ''
          }
        </div>
  
        ${ESD_QUIZ_QUESTIONS.map((item, qIdx) => {
          const selected = state.quizAnswers[qIdx];
          return `
            <div class="inner-box" style="display:flex; flex-direction:column; gap:0.75rem;">
              <div style="font-weight:600; font-size:0.88rem;">
                <span class="font-mono text-amber" style="margin-right:0.35rem;">Q${qIdx + 1}.</span> ${item.q}
              </div>
              <div class="grid-2" style="gap:0.5rem;">
                ${item.options.map((opt, oIdx) => {
                  let styleStr = 'background:var(--panel); border-color:var(--borderline); color:#cbd5e1; text-align:left; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.78rem;';
                  if (state.quizSubmitted) {
                    if (oIdx === item.answer) {
                      styleStr += 'background:rgba(16,185,129,0.2); border-color:#10b981; color:#a7f3d0; font-weight:700;';
                    } else if (selected === oIdx && oIdx !== item.answer) {
                      styleStr += 'background:rgba(239,68,68,0.2); border-color:#ef4444; color:#fecaca;';
                    }
                  } else if (selected === oIdx) {
                    styleStr += 'background:rgba(245,158,11,0.2); border-color:#f59e0b; color:#fde68a; font-weight:700;';
                  }
  
                  return `
                    <button onclick="selectQuizOption(${qIdx}, ${oIdx})" style="${styleStr}">
                      <span class="font-mono" style="margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                  `;
                }).join('')}
              </div>
              ${
                state.quizSubmitted
                  ? `<div class="inner-box" style="background:var(--panel); font-size:0.75rem; color:#cbd5e1;">
                      <strong class="text-emerald font-mono">EXPLANATION:</strong> ${item.explanation}
                     </div>`
                  : ''
              }
            </div>
          `;
        }).join('')}
  
        <div style="display:flex; gap:0.65rem;">
          <button onclick="submitQuiz()" class="btn btn-primary" style="padding:0.65rem 1.15rem; font-size:0.8rem;">
            Submit &amp; Grade Assessment
          </button>
          <button onclick="resetQuiz()" class="btn font-mono">Reset Quiz</button>
        </div>
      </div>
    `;
  }
  
  function selectQuizOption(qIdx, oIdx) {
    if (state.quizSubmitted) return;
    state.quizAnswers[qIdx] = oIdx;
    renderActiveSlide();
  }
  
  function submitQuiz() {
    if (Object.keys(state.quizAnswers).length < ESD_QUIZ_QUESTIONS.length) {
      showToast('Please answer all 4 questions before submitting.');
      return;
    }
    state.quizSubmitted = true;
    if (!state.completedSlides.includes(16)) {
      state.completedSlides.push(16);
      saveState();
      renderSlideIndex();
    }
    renderActiveSlide();
    showToast('Knowledge Check graded! Slide 16 marked complete.');
  }
  
  function resetQuiz() {
    state.quizAnswers = {};
    state.quizSubmitted = false;
    renderActiveSlide();
  }
  
  function syncWhpSlider(val) {
    document.getElementById('calc-whp').value = val;
    evaluatePOMRule();
  }
  
  function resetCalculator() {
    document.getElementById('calc-fluid').value = 'oil';
    document.getElementById('calc-whp').value = 4200;
    document.getElementById('calc-whp-slider').value = 4200;
    document.getElementById('calc-gas').value = 12;
    document.getElementById('calc-oil').value = 3500;
    evaluatePOMRule();
    showToast('POM Calculator parameters reset');
  }
  
  function evaluatePOMRule() {
    const fluid = document.getElementById('calc-fluid').value;
    const whp = Math.max(0, Number(document.getElementById('calc-whp').value) || 0);
    const gasRate = Math.max(0, Number(document.getElementById('calc-gas').value) || 0);
    const oilRate = Math.max(0, Number(document.getElementById('calc-oil').value) || 0);
  
    document.getElementById('calc-whp-slider').value = Math.min(18000, whp);
    document.getElementById('calc-whp-badge').textContent = `${whp.toLocaleString()} psi`;
  
    const isH2S = fluid === 'oil_h2s' || fluid === 'gas_h2s';
    const isHighFlow = gasRate >= 30 || oilRate >= 8000;
  
    let surfaceCode = 'S2';
    let subsurfaceCode = 'SS0';
    let containmentCode = isH2S ? 'D2' : 'D1';
    let esdMandatory = false;
    let regimeTitle = '';
    let equipDesc = '';
    let triggers = [];
  
    if (whp > 5000) triggers.push('WHP > 5,000 psi');
    if (isH2S) triggers.push('H2S Present');
    if (gasRate >= 30) triggers.push(`Gas ${gasRate} >= 30 MMSCF/D`);
    if (oilRate >= 8000) triggers.push(`Oil ${oilRate.toLocaleString()} >= 8,000 BPD`);
  
    if (whp > 15000) {
      esdMandatory = true;
      surfaceCode = 'S3 + ESD';
      subsurfaceCode = 'SCSSV';
      containmentCode = 'D0';
      regimeTitle = 'Regime: Extreme HPHT (> 15,000 psi)';
      equipDesc = 'Production string mandatory. Requires Master + Flowline + Surface Safety Valve (S3 + ESD) plus Surface Controlled Subsurface Safety Valve (SCSSV).';
    } else if (whp > 10000) {
      esdMandatory = true;
      surfaceCode = 'S3 + ESD';
      subsurfaceCode = 'SS2';
      containmentCode = 'D2';
      regimeTitle = 'Regime: 10,000 < WHP <= 15,000 psi';
      equipDesc = 'Requires S3 + ESD (Master + Flowline + dedicated skid-mounted SSV), SS2 subsurface barrier, and D2 containment.';
    } else if (isHighFlow) {
      esdMandatory = true;
      surfaceCode = isH2S ? 'S3 + ESD' : 'S2 + ESD';
      subsurfaceCode = 'SS1';
      containmentCode = isH2S ? 'D2' : 'D1';
      regimeTitle = 'Regime: High Flow Rate Operation';
      equipDesc = isH2S
        ? 'High flowrate with H2S mandates S3 + ESD (including dedicated SSV), SS1 subsurface barrier, and D2 containment.'
        : 'High flowrate (Gas >= 30 MMSCFD or Liquid >= 8,000 bpd) mandates S2 + ESD (Master + hydraulic Flowline valve) and SS1.';
    } else if (whp > 5000) {
      esdMandatory = true;
      surfaceCode = isH2S ? 'S3 + ESD' : 'S2 + ESD';
      subsurfaceCode = 'SS1';
      containmentCode = isH2S ? 'D2' : 'D1';
      regimeTitle = 'Regime: 5,000 < WHP <= 10,000 psi';
      equipDesc = isH2S
        ? 'WHP > 5,000 psi with H2S mandates S3 + ESD (Master + Flowline + SSV), SS1, and D2 containment.'
        : 'WHP > 5,000 psi mandates S2 + ESD (Master + hydraulic Flowline valve) and SS1 subsurface protection.';
    } else if (whp >= 3000) {
      esdMandatory = isH2S;
      surfaceCode = isH2S ? 'S2 + ESD' : 'S2';
      subsurfaceCode = isH2S ? 'SS1' : 'SS0';
      containmentCode = isH2S ? 'D2' : 'D1';
      regimeTitle = 'Regime: 3,000 <= WHP <= 5,000 psi';
      equipDesc = isH2S
        ? 'H2S presence makes ESD mandatory (S2 + ESD) with SS1 and D2 containment.'
        : 'Standard sweet service requires S2 (Master + Flowline valve). ESD is strongly recommended per Academy safety standards.';
    } else {
      esdMandatory = isH2S;
      surfaceCode = isH2S ? 'S2 + ESD' : 'S2';
      subsurfaceCode = 'SS0';
      containmentCode = isH2S ? 'D2' : 'D1';
      regimeTitle = 'Regime: WHP < 3,000 psi';
      equipDesc = isH2S
        ? 'Even below 3,000 psi, H2S presence mandates S2 + ESD and D2 containment.'
        : 'Low-pressure sweet service requires S2 (Master + Flowline valve). ESD is recommended on all well test operations.';
    }
  
    const pill = document.getElementById('calc-esd-status-pill');
    if (esdMandatory) {
      pill.textContent = 'ESD MANDATORY';
      pill.className = 'badge badge-pill badge-crimson';
    } else {
      pill.textContent = 'ESD RECOMMENDED';
      pill.className = 'badge badge-pill badge-amber';
    }
  
    document.getElementById('calc-surface-code').textContent = surfaceCode;
    document.getElementById('calc-subsurface-code').textContent = subsurfaceCode;
    document.getElementById('calc-containment-code').textContent = containmentCode;
    document.getElementById('calc-regime-title').textContent = regimeTitle;
    document.getElementById('calc-equipment-desc').textContent = equipDesc;
  
    const triggerBox = document.getElementById('calc-trigger-reasons');
    if (triggers.length > 0) {
      triggerBox.innerHTML = triggers
        .map(t => `<span class="badge badge-crimson">TRIGGER: ${t}</span>`)
        .join('');
    } else {
      triggerBox.innerHTML = `<span class="badge badge-emerald">NO MANDATORY TRIGGER EXCEEDED (BEST PRACTICE APPLIES)</span>`;
    }
  }
  
  function scrollToCalculator() {
    document.getElementById('pom-calculator-section').scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById('library-search').addEventListener('input', e => {
    state.searchQuery = e.target.value;
    const clearBtn = document.getElementById('clear-search-btn');
    if (state.searchQuery.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    renderModulesGrid();
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (state.activeModalModuleId) {
        closeModuleModal();
      } else if (state.searchQuery) {
        clearSearch();
      }
    } else if (
        state.activeModalModuleId === 'mod-01' ||
        state.activeModalModuleId === 'mod-04' ||
        state.activeModalModuleId === 'mod-06' ||
        state.activeModalModuleId === 'mod-08' ||
        state.activeModalModuleId === 'mod-10'
      ) {
        if (e.key === 'ArrowRight') changeSlide(1);
        if (e.key === 'ArrowLeft') changeSlide(-1);
      }
      
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    renderCategoryPills();
    renderModulesGrid();
    updateProgressUI();
    evaluatePOMRule();
  });
  
