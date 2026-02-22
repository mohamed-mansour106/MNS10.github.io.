
(() => {
  "use strict";

  const DEFAULT_CONFIG = {
    sampleIntervalSec: 5,
    noiseLevel: 0.3,
    timeUnit: "minutes",
    smoothingFactor: 3,
    downsampleN: 1,
    unitSystem: "field",
    enableAiPrediction: true,
    enableSolverMode: true
  };

  const TABLE_COLUMNS = [
    { key: "time_min", label: "Time (min)", editable: true },
    { key: "pressure_psia", label: "Pressure (psia)", editable: true },
    { key: "oil_rate_bopd", label: "Oil (bopd)", editable: true },
    { key: "gas_rate_mscfd", label: "Gas (mscf/d)", editable: true },
    { key: "water_rate_bopd", label: "Water (bopd)", editable: true },
    { key: "temperature_f", label: "Temp (F)", editable: true },
    { key: "water_cut", label: "WC", editable: false },
    { key: "gor", label: "GOR", editable: false },
    { key: "delta_p", label: "DeltaP", editable: false },
    { key: "pi", label: "PI", editable: false }
  ];

  const appState = {
    project: createNewProject(),
    currentWellIndex: 0,
    timer: null,
    sortKey: "time_min",
    sortDir: "asc",
    page: 1,
    pageSize: 15,
    filter: {},
    visibleColumns: new Set(TABLE_COLUMNS.map((c) => c.key)),
    chartState: {},
    filteredExportRows: []
  };

  const el = mapElements();
  initialize();

  function mapElements() {
    return {
      tabs: document.querySelectorAll(".tab-btn"),
      tabPanels: document.querySelectorAll(".tab-panel"),
      menuButtons: document.querySelectorAll(".menu-btn"),
      configToggle: document.getElementById("configToggle"),
      configPanel: document.getElementById("configPanel"),
      cfgSampleInterval: document.getElementById("cfgSampleInterval"),
      cfgNoiseLevel: document.getElementById("cfgNoiseLevel"),
      cfgTimeUnit: document.getElementById("cfgTimeUnit"),
      cfgSmoothing: document.getElementById("cfgSmoothing"),
      cfgDownsample: document.getElementById("cfgDownsample"),
      cfgUnitSystem: document.getElementById("cfgUnitSystem"),
      cfgEnableAi: document.getElementById("cfgEnableAi"),
      cfgEnableSolver: document.getElementById("cfgEnableSolver"),
      btnNew: document.getElementById("btnNew"),
      btnOpenProject: document.getElementById("btnOpenProject"),
      btnSaveProject: document.getElementById("btnSaveProject"),
      btnDemo: document.getElementById("btnDemo"),
      btnStart: document.getElementById("btnStart"),
      btnStop: document.getElementById("btnStop"),
      btnManual: document.getElementById("btnManual"),
      btnExportCsv: document.getElementById("btnExportCsv"),
      btnAddWell: document.getElementById("btnAddWell"),
      btnRemoveWell: document.getElementById("btnRemoveWell"),
      wellSelector: document.getElementById("wellSelector"),
      gridContainer: document.getElementById("gridContainer"),
      pagination: document.getElementById("pagination"),
      columnToggles: document.getElementById("columnToggles"),
      csvInput: document.getElementById("csvInput"),
      projectInput: document.getElementById("projectInput"),
      btnLoadProject: document.getElementById("btnLoadProject"),
      btnResetProject: document.getElementById("btnResetProject"),
      btnApplyFilter: document.getElementById("btnApplyFilter"),
      btnResetFilter: document.getElementById("btnResetFilter"),
      fltTimeMin: document.getElementById("fltTimeMin"),
      fltTimeMax: document.getElementById("fltTimeMax"),
      fltPressureMin: document.getElementById("fltPressureMin"),
      fltPressureMax: document.getElementById("fltPressureMax"),
      fltOilMin: document.getElementById("fltOilMin"),
      fltOilMax: document.getElementById("fltOilMax"),
      projectNotes: document.getElementById("projectNotes"),
      liveStats: document.getElementById("liveStats"),
      summaryStats: document.getElementById("summaryStats"),
      activityLog: document.getElementById("activityLog"),
      statusUnit: document.getElementById("statusUnit"),
      statusMetric: document.getElementById("statusMetric"),
      statusState: document.getElementById("statusState"),
      optLogScale: document.getElementById("optLogScale"),
      optShowOverlay: document.getElementById("optShowOverlay"),
      chartSelector: document.getElementById("chartSelector"),
      btnExportChart: document.getElementById("btnExportChart"),
      pressureChart: document.getElementById("pressureChart"),
      rateChart: document.getElementById("rateChart"),
      gorChart: document.getElementById("gorChart"),
      declineChart: document.getElementById("declineChart"),
      forecastChart: document.getElementById("forecastChart"),
      manualDialog: document.getElementById("manualDialog"),
      mTime: document.getElementById("mTime"),
      mPressure: document.getElementById("mPressure"),
      mOil: document.getElementById("mOil"),
      mGas: document.getElementById("mGas"),
      mWater: document.getElementById("mWater"),
      mTemp: document.getElementById("mTemp"),
      btnManualAdd: document.getElementById("btnManualAdd")
    };
  }

  function initialize() {
    bindEvents();
    initializeColumnControls();
    initializeCharts();
    syncConfigToUi();
    refreshWellSelector();
    recomputeCurrentWell();
    renderAll();
    logActivity("Application initialized.");
  }

  function createNewProject() {
    return {
      config: { ...DEFAULT_CONFIG },
      wellData: [{ id: makeId(), name: "Well-1", data: [] }],
      computedData: {},
      solverResults: {},
      aiResults: {},
      notes: ""
    };
  }

  function makeId() {
    return `id_${Math.random().toString(36).slice(2, 10)}`;
  }

  function bindEvents() {
    el.tabs.forEach((button) => {
      button.addEventListener("click", () => switchTab(button.dataset.tab));
    });

    el.menuButtons.forEach((button) => {
      button.addEventListener("click", () => handleMenu(button.dataset.menu));
    });

    el.configToggle.addEventListener("click", toggleConfigPanel);

    [
      [el.cfgSampleInterval, "sampleIntervalSec"],
      [el.cfgNoiseLevel, "noiseLevel"],
      [el.cfgTimeUnit, "timeUnit"],
      [el.cfgSmoothing, "smoothingFactor"],
      [el.cfgDownsample, "downsampleN"],
      [el.cfgUnitSystem, "unitSystem"],
      [el.cfgEnableAi, "enableAiPrediction"],
      [el.cfgEnableSolver, "enableSolverMode"]
    ].forEach(([node, key]) => {
      node.addEventListener("change", () => {
        updateConfigFromUi();
        logActivity(`Config changed: ${key}`);
        recomputeCurrentWell();
        renderAll();
      });
    });

    el.btnNew.addEventListener("click", resetProject);
    el.btnOpenProject.addEventListener("click", () => switchTab("tabProject"));
    el.btnSaveProject.addEventListener("click", saveProjectJson);
    el.btnDemo.addEventListener("click", loadDemoData);
    el.btnStart.addEventListener("click", startAcquisition);
    el.btnStop.addEventListener("click", stopAcquisition);
    el.btnManual.addEventListener("click", openManualDialog);
    el.btnManualAdd.addEventListener("click", addManualMeasurement);
    el.btnExportCsv.addEventListener("click", exportFilteredCsv);

    el.btnAddWell.addEventListener("click", addWell);
    el.btnRemoveWell.addEventListener("click", removeWell);
    el.wellSelector.addEventListener("change", () => {
      appState.currentWellIndex = el.wellSelector.selectedIndex;
      recomputeCurrentWell();
      renderAll();
      logActivity(`Switched to ${currentWell().name}.`);
    });

    el.csvInput.addEventListener("change", importCsv);
    el.btnLoadProject.addEventListener("click", loadProjectJson);
    el.btnResetProject.addEventListener("click", resetProject);

    el.btnApplyFilter.addEventListener("click", () => {
      appState.filter = readFilterInputs();
      appState.filteredExportRows = getFilteredRows(getProcessedRows());
      logActivity(`Filter applied. ${appState.filteredExportRows.length} row(s) selected.`);
      renderGrid();
    });

    el.btnResetFilter.addEventListener("click", () => {
      clearFilterInputs();
      appState.filter = {};
      appState.filteredExportRows = getProcessedRows().slice();
      logActivity("Filter reset.");
      renderGrid();
    });

    el.projectNotes.addEventListener("input", () => {
      appState.project.notes = el.projectNotes.value;
    });

    el.optLogScale.addEventListener("change", renderCharts);
    el.optShowOverlay.addEventListener("change", renderCharts);
    el.btnExportChart.addEventListener("click", exportChartImage);
  }

  function toggleConfigPanel() {
    const hidden = el.configPanel.classList.toggle("hidden");
    el.configToggle.setAttribute("aria-expanded", String(!hidden));
  }

  function switchTab(tabId) {
    el.tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === tabId));
    el.tabPanels.forEach((p) => p.classList.toggle("active", p.id === tabId));
  }

  function handleMenu(name) {
    const map = {
      file: "tabProject",
      data: "tabData",
      measurement: "tabField",
      plot: "tabSummary",
      grid: "tabField",
      report: "tabSummary",
      help: "tabLog"
    };
    if (name === "help") {
      logActivity("Help: Use Demo or Start to generate data; Project tab to save/load JSON.");
    }
    switchTab(map[name] || "tabField");
  }

  function updateConfigFromUi() {
    const cfg = appState.project.config;
    cfg.sampleIntervalSec = clamp(number(el.cfgSampleInterval.value, 5), 1, 3600);
    cfg.noiseLevel = clamp(number(el.cfgNoiseLevel.value, 0.3), 0, 5);
    cfg.timeUnit = el.cfgTimeUnit.value;
    cfg.smoothingFactor = clamp(Math.round(number(el.cfgSmoothing.value, 3)), 1, 50);
    cfg.downsampleN = clamp(Math.round(number(el.cfgDownsample.value, 1)), 1, 100);
    cfg.unitSystem = el.cfgUnitSystem.value;
    cfg.enableAiPrediction = el.cfgEnableAi.checked;
    cfg.enableSolverMode = el.cfgEnableSolver.checked;

    el.statusUnit.textContent = cfg.unitSystem === "field" ? "Field" : "Metric";
    el.statusMetric.textContent = cfg.unitSystem === "field" ? "Metric" : "Field";
  }

  function syncConfigToUi() {
    const cfg = appState.project.config;
    el.cfgSampleInterval.value = String(cfg.sampleIntervalSec);
    el.cfgNoiseLevel.value = String(cfg.noiseLevel);
    el.cfgTimeUnit.value = cfg.timeUnit;
    el.cfgSmoothing.value = String(cfg.smoothingFactor);
    el.cfgDownsample.value = String(cfg.downsampleN);
    el.cfgUnitSystem.value = cfg.unitSystem;
    el.cfgEnableAi.checked = cfg.enableAiPrediction;
    el.cfgEnableSolver.checked = cfg.enableSolverMode;
    el.projectNotes.value = appState.project.notes || "";
    updateConfigFromUi();
  }

  function currentWell() {
    return appState.project.wellData[appState.currentWellIndex];
  }

  function refreshWellSelector() {
    el.wellSelector.innerHTML = "";
    appState.project.wellData.forEach((w, i) => {
      const opt = document.createElement("option");
      opt.textContent = `${w.name} (${w.data.length})`;
      opt.value = w.id;
      if (i === appState.currentWellIndex) {
        opt.selected = true;
      }
      el.wellSelector.appendChild(opt);
    });
  }

  function addWell() {
    const name = `Well-${appState.project.wellData.length + 1}`;
    appState.project.wellData.push({ id: makeId(), name, data: [] });
    appState.currentWellIndex = appState.project.wellData.length - 1;
    refreshWellSelector();
    recomputeCurrentWell();
    renderAll();
    logActivity(`Added ${name}.`);
  }

  function removeWell() {
    if (appState.project.wellData.length <= 1) {
      logActivity("At least one well is required.");
      return;
    }
    const removed = currentWell().name;
    appState.project.wellData.splice(appState.currentWellIndex, 1);
    appState.currentWellIndex = Math.max(0, appState.currentWellIndex - 1);
    refreshWellSelector();
    recomputeCurrentWell();
    renderAll();
    logActivity(`Removed ${removed}.`);
  }

  function startAcquisition() {
    if (appState.timer) {
      return;
    }
    updateConfigFromUi();
    const intervalMs = appState.project.config.sampleIntervalSec * 1000;
    appState.timer = setInterval(() => {
      const point = simulatePoint(currentWell().data, appState.project.config);
      currentWell().data.push(point);
      recomputeCurrentWell();
      renderAll();
    }, intervalMs);

    el.btnStart.disabled = true;
    el.btnStop.disabled = false;
    el.statusState.textContent = "Acquiring";
    logActivity("Acquisition started.");
  }

  function stopAcquisition() {
    if (!appState.timer) {
      return;
    }
    clearInterval(appState.timer);
    appState.timer = null;
    el.btnStart.disabled = false;
    el.btnStop.disabled = true;
    el.statusState.textContent = "Ready";
    logActivity("Acquisition stopped.");
  }

  function openManualDialog() {
    const rows = currentWell().data;
    const last = rows.length ? rows[rows.length - 1] : null;
    el.mTime.value = String(last ? round(last.time_min + 1, 2) : 0);
    el.mPressure.value = String(last ? round(last.pressure_psia, 2) : 3200);
    el.mOil.value = String(last ? round(last.oil_rate_bopd, 2) : 300);
    el.mGas.value = String(last ? round(last.gas_rate_mscfd, 2) : 140);
    el.mWater.value = String(last ? round(last.water_rate_bopd, 2) : 20);
    el.mTemp.value = String(last ? round(last.temperature_f, 2) : 185);
    el.manualDialog.showModal();
  }

  function addManualMeasurement(evt) {
    evt.preventDefault();
    const row = {
      time_min: number(el.mTime.value, 0),
      pressure_psia: number(el.mPressure.value, 3200),
      oil_rate_bopd: number(el.mOil.value, 300),
      gas_rate_mscfd: number(el.mGas.value, 140),
      water_rate_bopd: number(el.mWater.value, 20),
      temperature_f: number(el.mTemp.value, 185)
    };

    currentWell().data.push(row);
    currentWell().data.sort((a, b) => a.time_min - b.time_min);
    el.manualDialog.close();
    recomputeCurrentWell();
    renderAll();
    logActivity("Manual row added.");
  }

  function simulatePoint(dataRows, cfg) {
    const last = dataRows.length ? dataRows[dataRows.length - 1] : null;
    const dtMin = cfg.sampleIntervalSec / 60;
    const t = last ? last.time_min + dtMin : 0;

    const baseOil = Math.max(15, 420 * Math.exp(-0.0018 * t) + 10 * Math.sin(t / 55));
    const baseGas = Math.max(5, baseOil * 0.48 + 24 * Math.exp(-0.0022 * t));
    const baseWater = Math.max(0, 8 + 0.08 * t + 1.5 * Math.sin(t / 70));
    const basePressure = Math.max(700, 3650 - 0.9 * t - 0.06 * baseOil + 5 * Math.sin(t / 30));
    const baseTemp = 182 + 2 * Math.sin(t / 110);

    const n = cfg.noiseLevel;
    return {
      time_min: round(t, 4),
      pressure_psia: round(Math.max(100, basePressure + n * 45 * gaussian()), 3),
      oil_rate_bopd: round(Math.max(0, baseOil + n * 8 * gaussian()), 3),
      gas_rate_mscfd: round(Math.max(0, baseGas + n * 6 * gaussian()), 3),
      water_rate_bopd: round(Math.max(0, baseWater + n * 4 * gaussian()), 3),
      temperature_f: round(baseTemp + n * gaussian(), 3)
    };
  }
  function recomputeCurrentWell() {
    const well = currentWell();
    const cfg = appState.project.config;
    const computed = computeEngineering(well.data, cfg);

    appState.project.computedData[well.id] = computed;

    if (cfg.enableSolverMode) {
      appState.project.solverResults[well.id] = runSolver(computed, well.data, cfg);
    } else {
      appState.project.solverResults[well.id] = { enabled: false };
    }

    if (cfg.enableAiPrediction) {
      appState.project.aiResults[well.id] = runAiModule(computed, cfg);
    } else {
      appState.project.aiResults[well.id] = { enabled: false };
    }

    appState.filteredExportRows = getFilteredRows(getProcessedRows());
  }

  function computeEngineering(rawRows, cfg) {
    const sorted = rawRows
      .map((r) => ({
        time_min: number(r.time_min, 0),
        pressure_psia: number(r.pressure_psia, 0),
        oil_rate_bopd: number(r.oil_rate_bopd, 0),
        gas_rate_mscfd: number(r.gas_rate_mscfd, 0),
        water_rate_bopd: number(r.water_rate_bopd, 0),
        temperature_f: number(r.temperature_f, 0)
      }))
      .sort((a, b) => a.time_min - b.time_min);

    const pSm = movingAverage(sorted.map((x) => x.pressure_psia), cfg.smoothingFactor);
    const oSm = movingAverage(sorted.map((x) => x.oil_rate_bopd), cfg.smoothingFactor);
    const gSm = movingAverage(sorted.map((x) => x.gas_rate_mscfd), cfg.smoothingFactor);
    const wSm = movingAverage(sorted.map((x) => x.water_rate_bopd), cfg.smoothingFactor);

    const rows = [];
    const R = cfg.unitSystem === "field" ? 0.025 : 0.004;
    const tp = detectFlowingTime(sorted);

    const hornerPairs = [];

    for (let i = 0; i < sorted.length; i += cfg.downsampleN) {
      const r = sorted[i];
      const oil = oSm[i] || 0;
      const water = wSm[i] || 0;
      const gas = gSm[i] || 0;
      const pwf = pSm[i] || 0;
      const wc = waterCut(oil, water);
      const gor = gasOilRatio(gas, oil);
      const deltaP = pressureDrop(oil, R);

      const dt = r.time_min - tp;
      let hornerX = null;
      if (dt > 0.001 && tp > 0) {
        hornerX = Math.log10((tp + dt) / dt);
        hornerPairs.push([hornerX, pwf]);
      }

      rows.push({
        time_min: r.time_min,
        time_display: toDisplayTime(r.time_min, cfg.timeUnit),
        pressure_psia: pwf,
        oil_rate_bopd: oil,
        gas_rate_mscfd: gas,
        water_rate_bopd: water,
        temperature_f: sorted[i].temperature_f,
        water_cut: wc,
        gor,
        delta_p: deltaP,
        horner_x: hornerX,
        reservoir_pressure_est: 0,
        pi: 0,
        cum_oil_bbl: 0,
        cum_gas_mscf: 0,
        cum_water_bbl: 0
      });
    }

    const hornerFit = hornerPairs.length >= 3 ? linearRegression(hornerPairs.map((p) => [p[0], p[1]])) : null;
    const prFromHorner = hornerFit ? hornerFit.intercept : null;

    const maxP = rows.length ? Math.max(...rows.map((x) => x.pressure_psia)) : 0;
    const prFallback = maxP + 40;
    const pr = prFromHorner && Number.isFinite(prFromHorner) ? prFromHorner : prFallback;

    for (let i = 0; i < rows.length; i++) {
      const cur = rows[i];
      cur.reservoir_pressure_est = pr;
      cur.pi = productivityIndex(cur.oil_rate_bopd, pr, cur.pressure_psia);

      if (i === 0) {
        continue;
      }
      const prev = rows[i - 1];
      const dtDay = Math.max(0, (cur.time_min - prev.time_min) / 1440);
      const qoAvg = 0.5 * (cur.oil_rate_bopd + prev.oil_rate_bopd);
      const qgAvg = 0.5 * (cur.gas_rate_mscfd + prev.gas_rate_mscfd);
      const qwAvg = 0.5 * (cur.water_rate_bopd + prev.water_rate_bopd);
      cur.cum_oil_bbl = prev.cum_oil_bbl + qoAvg * dtDay;
      cur.cum_gas_mscf = prev.cum_gas_mscf + qgAvg * dtDay;
      cur.cum_water_bbl = prev.cum_water_bbl + qwAvg * dtDay;
    }

    return {
      rows,
      horner: {
        points: hornerPairs,
        slope: hornerFit ? hornerFit.slope : null,
        intercept: hornerFit ? hornerFit.intercept : null,
        r2: hornerFit ? hornerFit.r2 : null
      }
    };
  }

  function waterCut(oil, water) {
    const d = oil + water;
    return d > 0 ? water / d : 0;
  }

  function gasOilRatio(gas, oil) {
    return oil > 0 ? gas / oil : 0;
  }

  function pressureDrop(q, R) {
    return q * R;
  }

  function movingAverage(values, window) {
    const out = [];
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
      if (i >= window) {
        sum -= values[i - window];
      }
      if (i < window - 1) {
        out.push(values[i]);
      } else {
        out.push(sum / window);
      }
    }
    return out;
  }

  function productivityIndex(q, pr, pwf) {
    const denom = pr - pwf;
    if (denom <= 0.01) {
      return 0;
    }
    return q / denom;
  }

  function detectFlowingTime(rows) {
    if (!rows.length) {
      return 0;
    }
    let tp = rows[Math.floor(rows.length / 2)].time_min;
    for (let i = rows.length - 1; i >= 0; i--) {
      const q = rows[i].oil_rate_bopd + rows[i].gas_rate_mscfd + rows[i].water_rate_bopd;
      if (q > 0.5) {
        tp = rows[i].time_min;
        break;
      }
    }
    return tp;
  }

  function runSolver(computed) {
    const rows = computed.rows;
    if (rows.length < 5) {
      return { enabled: true, message: "Insufficient data for solver." };
    }

    const baseTime = rows[0].time_min / 1440;
    const data = rows
      .filter((r) => r.oil_rate_bopd > 0)
      .map((r) => ({ t: r.time_min / 1440 - baseTime, q: r.oil_rate_bopd }));

    if (data.length < 5) {
      return { enabled: true, message: "Need more valid oil-rate points." };
    }

    const expFit = fitArpsExponential(data);
    const harFit = fitArpsHarmonic(data);
    const hypFit = fitArpsHyperbolic(data);
    const fits = [expFit, harFit, hypFit].filter(Boolean);
    fits.sort((a, b) => b.r2 - a.r2);
    const best = fits[0];

    const futureDays = 180;
    const forecast = [];
    for (let i = 1; i <= futureDays; i++) {
      const t = (rows[rows.length - 1].time_min / 1440 - baseTime) + i;
      forecast.push({ t_day: t, q: arpsRate(best, t) });
    }

    const pTrendModel = linearRegression(rows.map((r) => [r.time_min / 1440, r.pressure_psia]));
    const pressureTrend = forecast.map((f, idx) => ({
      t_day: f.t_day,
      p: pTrendModel.intercept + pTrendModel.slope * (rows[rows.length - 1].time_min / 1440 + idx + 1)
    }));

    const fittedNow = data.map((d) => arpsRate(best, d.t));
    const anomalies = detectAnomalies(data.map((d, i) => d.q - fittedNow[i]), 2.5)
      .map((idx) => ({ index: idx, t_day: data[idx].t, actual: data[idx].q, predicted: fittedNow[idx] }));

    const lastRow = rows[rows.length - 1];

    return {
      enabled: true,
      bestFit: best,
      fits,
      forecast,
      pressureTrend,
      anomalies,
      cumulative: {
        oil_bbl: lastRow.cum_oil_bbl,
        water_bbl: lastRow.cum_water_bbl,
        gas_mscf: lastRow.cum_gas_mscf
      },
      message: "Solver completed."
    };
  }

  function fitArpsExponential(data) {
    const filtered = data.filter((d) => d.q > 0);
    const pairs = filtered.map((d) => [d.t, Math.log(d.q)]);
    const reg = linearRegression(pairs);
    return { type: "exponential", qi: Math.exp(reg.intercept), di: Math.max(0, -reg.slope), b: 0, r2: reg.r2 };
  }

  function fitArpsHarmonic(data) {
    const filtered = data.filter((d) => d.q > 0);
    const pairs = filtered.map((d) => [d.t, 1 / d.q]);
    const reg = linearRegression(pairs);
    const qi = reg.intercept > 0 ? 1 / reg.intercept : filtered[0].q;
    const di = qi > 0 ? reg.slope * qi : 0;
    return { type: "harmonic", qi, di: Math.max(0, di), b: 1, r2: reg.r2 };
  }

  function fitArpsHyperbolic(data) {
    let best = null;
    for (let b = 0.1; b <= 1.9; b += 0.1) {
      const pairs = data.filter((d) => d.q > 0).map((d) => [d.t, Math.pow(d.q, -b)]);
      const reg = linearRegression(pairs);
      if (reg.intercept <= 0) continue;
      const qi = Math.pow(reg.intercept, -1 / b);
      const di = reg.slope / (b * reg.intercept);
      const candidate = { type: "hyperbolic", qi, di: Math.max(0, di), b, r2: reg.r2 };
      if (!best || candidate.r2 > best.r2) best = candidate;
    }
    return best;
  }

  function arpsRate(fit, tDay) {
    if (!fit) return 0;
    if (fit.type === "exponential") return fit.qi * Math.exp(-fit.di * tDay);
    if (fit.type === "harmonic") return fit.qi / (1 + fit.di * tDay);
    const d = 1 + fit.b * fit.di * tDay;
    return fit.qi / Math.pow(Math.max(d, 1e-9), 1 / fit.b);
  }

  function runAiModule(computed) {
    const rows = computed.rows;
    if (rows.length < 6) {
      return { enabled: true, message: "Insufficient data for AI module." };
    }

    const t = rows.map((r) => r.time_min / 1440);
    const oil = rows.map((r) => r.oil_rate_bopd);
    const pressure = rows.map((r) => r.pressure_psia);
    const gor = rows.map((r) => r.gor);

    const oilReg = linearRegression(t.map((x, i) => [x, oil[i]]));
    const pReg = linearRegression(t.map((x, i) => [x, pressure[i]]));
    const gorReg = linearRegression(t.map((x, i) => [x, gor[i]]));

    const start = t[t.length - 1];
    const forecast30 = [];
    for (let i = 1; i <= 30; i++) {
      const tf = start + i;
      forecast30.push({
        day: i,
        oil: Math.max(0, oilReg.intercept + oilReg.slope * tf),
        pressure: pReg.intercept + pReg.slope * tf,
        gor: Math.max(0, gorReg.intercept + gorReg.slope * tf)
      });
    }

    return {
      enabled: true,
      oilModel: oilReg,
      pressureModel: pReg,
      gorModel: gorReg,
      forecast30,
      outliers: { oil: detectOutliersIqr(oil), pressure: detectOutliersIqr(pressure) },
      trend: { oilSlope: oilReg.slope, pressureSlope: pReg.slope, gorSlope: gorReg.slope },
      message: "AI forecast generated."
    };
  }

  function getProcessedRows() {
    const well = currentWell();
    const comp = appState.project.computedData[well.id];
    return comp && Array.isArray(comp.rows) ? comp.rows : [];
  }

  function getSolverResult() {
    return appState.project.solverResults[currentWell().id] || {};
  }

  function getAiResult() {
    return appState.project.aiResults[currentWell().id] || {};
  }

  function renderAll() {
    refreshWellSelector();
    renderGrid();
    renderLiveStats();
    renderSummary();
    renderActivityLog();
    renderCharts();
    el.btnExportCsv.disabled = getProcessedRows().length === 0;
  }
  function initializeColumnControls() {
    el.columnToggles.innerHTML = "";
    TABLE_COLUMNS.forEach((col) => {
      const label = document.createElement("label");
      label.className = "checkbox-row";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = true;
      cb.addEventListener("change", () => {
        if (cb.checked) appState.visibleColumns.add(col.key);
        else appState.visibleColumns.delete(col.key);
        renderGrid();
      });
      label.appendChild(cb);
      label.append(col.label);
      el.columnToggles.appendChild(label);
    });
  }

  function renderGrid() {
    const rows = getFilteredRows(getProcessedRows());
    appState.filteredExportRows = rows.slice();

    const visible = TABLE_COLUMNS.filter((c) => appState.visibleColumns.has(c.key));
    const sorted = rows.slice().sort((a, b) => compareRows(a, b, appState.sortKey, appState.sortDir));

    const totalPages = Math.max(1, Math.ceil(sorted.length / appState.pageSize));
    appState.page = clamp(appState.page, 1, totalPages);
    const start = (appState.page - 1) * appState.pageSize;
    const pageRows = sorted.slice(start, start + appState.pageSize);

    const html = [];
    html.push("<table><thead><tr>");
    for (const c of visible) {
      const dir = appState.sortKey === c.key ? (appState.sortDir === "asc" ? " ?" : " ?") : "";
      html.push(`<th data-sort="${c.key}">${c.label}${dir}</th>`);
    }
    html.push("</tr></thead><tbody>");

    pageRows.forEach((row, localIdx) => {
      html.push(`<tr data-row="${start + localIdx}">`);
      visible.forEach((col) => {
        const val = displayValue(col.key, row[col.key]);
        const editable = col.editable ? ` data-editable="1"` : "";
        html.push(`<td data-col="${col.key}"${editable}>${val}</td>`);
      });
      html.push("</tr>");
    });

    html.push("</tbody></table>");
    el.gridContainer.innerHTML = html.join("");

    el.gridContainer.querySelectorAll("th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.dataset.sort;
        if (appState.sortKey === key) appState.sortDir = appState.sortDir === "asc" ? "desc" : "asc";
        else {
          appState.sortKey = key;
          appState.sortDir = "asc";
        }
        renderGrid();
      });
    });

    el.gridContainer.querySelectorAll("td[data-editable]").forEach((td) => {
      td.addEventListener("dblclick", () => editCell(td, sorted));
    });

    renderPagination(totalPages, sorted.length);
  }

  function renderPagination(totalPages, totalRows) {
    el.pagination.innerHTML = "";
    const prev = document.createElement("button");
    prev.className = "tool-btn";
    prev.textContent = "Prev";
    prev.disabled = appState.page <= 1;
    prev.addEventListener("click", () => { appState.page -= 1; renderGrid(); });

    const next = document.createElement("button");
    next.className = "tool-btn";
    next.textContent = "Next";
    next.disabled = appState.page >= totalPages;
    next.addEventListener("click", () => { appState.page += 1; renderGrid(); });

    const label = document.createElement("span");
    label.textContent = `Page ${appState.page}/${totalPages} | Rows ${totalRows}`;

    el.pagination.appendChild(prev);
    el.pagination.appendChild(next);
    el.pagination.appendChild(label);
  }

  function editCell(td, sortedRows) {
    const tr = td.closest("tr");
    if (!tr) return;
    td.classList.add("editing-cell");

    const rowIndex = Number(tr.dataset.row);
    const col = td.dataset.col;
    const oldValue = td.textContent;

    const input = document.createElement("input");
    input.type = "number";
    input.value = oldValue;
    td.textContent = "";
    td.appendChild(input);
    input.focus();

    const commit = () => {
      const value = number(input.value, 0);
      const target = sortedRows[rowIndex];
      if (!target) {
        renderGrid();
        return;
      }
      const raw = findRawRowByTime(target.time_min);
      if (raw) {
        raw[col] = value;
        recomputeCurrentWell();
        renderAll();
        logActivity(`Cell updated: ${col}=${value}`);
      } else renderGrid();
    };

    input.addEventListener("blur", commit);
    input.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") commit();
      if (evt.key === "Escape") renderGrid();
    });
  }

  function findRawRowByTime(timeMin) {
    const rows = currentWell().data;
    let best = null;
    let bestDiff = Infinity;
    for (const r of rows) {
      const diff = Math.abs(number(r.time_min, 0) - number(timeMin, 0));
      if (diff < bestDiff) {
        bestDiff = diff;
        best = r;
      }
    }
    return best;
  }

  function displayValue(key, value) {
    if (value == null || !Number.isFinite(value)) return "";
    if (key === "water_cut") return round(value * 100, 3);
    return round(value, 3);
  }

  function renderLiveStats() {
    const rows = getProcessedRows();
    if (!rows.length) {
      el.liveStats.textContent = "No data.";
      return;
    }

    const last = rows[rows.length - 1];
    const avgOil = average(rows.map((r) => r.oil_rate_bopd));
    const avgGas = average(rows.map((r) => r.gas_rate_mscfd));
    const avgWater = average(rows.map((r) => r.water_rate_bopd));

    el.liveStats.textContent = [
      `Well: ${currentWell().name}`,
      `Records: ${rows.length}`,
      `Time: ${round(last.time_min, 2)} min`,
      `Pressure: ${round(last.pressure_psia, 2)} psia`,
      `Oil: ${round(last.oil_rate_bopd, 2)} bopd`,
      `Gas: ${round(last.gas_rate_mscfd, 2)} mscf/d`,
      `Water: ${round(last.water_rate_bopd, 2)} bopd`,
      `Water Cut: ${round(last.water_cut * 100, 2)} %`,
      `GOR: ${round(last.gor, 4)}`,
      `PI: ${round(last.pi, 4)}`,
      `Cum Oil: ${round(last.cum_oil_bbl, 2)} bbl`,
      `Avg Oil/Gas/Water: ${round(avgOil, 1)} / ${round(avgGas, 1)} / ${round(avgWater, 1)}`
    ].join("\n");
  }

  function renderSummary() {
    const solver = getSolverResult();
    const ai = getAiResult();

    const lines = [];
    lines.push("Solver Module");
    if (!solver.enabled) lines.push("Disabled.");
    else {
      lines.push(solver.message || "Ready.");
      if (solver.bestFit) lines.push(`Best Decline: ${solver.bestFit.type}`);
      if (solver.bestFit) lines.push(`qi=${round(solver.bestFit.qi, 3)}, Di=${round(solver.bestFit.di, 5)}, b=${round(solver.bestFit.b, 3)}, R2=${round(solver.bestFit.r2, 4)}`);
      if (solver.cumulative) lines.push(`Cumulative Oil/Water/Gas: ${round(solver.cumulative.oil_bbl, 2)} / ${round(solver.cumulative.water_bbl, 2)} / ${round(solver.cumulative.gas_mscf, 2)}`);
      lines.push(`Anomalies: ${(solver.anomalies || []).length}`);
    }

    lines.push("");
    lines.push("AI Module");
    if (!ai.enabled) lines.push("Disabled.");
    else {
      lines.push(ai.message || "Ready.");
      const f = ai.forecast30 || [];
      if (f.length) {
        const last = f[f.length - 1];
        lines.push(`30-day forecast Oil: ${round(last.oil, 2)} bopd`);
        lines.push(`30-day pressure prediction: ${round(last.pressure, 2)} psia`);
        lines.push(`30-day GOR trend prediction: ${round(last.gor, 4)}`);
      }
      lines.push(`Outliers Oil/Pressure: ${(ai.outliers?.oil || []).length}/${(ai.outliers?.pressure || []).length}`);
    }

    el.summaryStats.textContent = lines.join("\n");
  }

  function logActivity(text) {
    const stamp = new Date().toLocaleString();
    const log = `${stamp} | ${text}`;
    if (!appState.project.activityLog) appState.project.activityLog = [];
    appState.project.activityLog.push(log);
    if (appState.project.activityLog.length > 400) appState.project.activityLog = appState.project.activityLog.slice(-400);
    renderActivityLog();
  }

  function renderActivityLog() {
    const logs = appState.project.activityLog || [];
    el.activityLog.textContent = logs.slice(-250).join("\n");
    el.activityLog.scrollTop = el.activityLog.scrollHeight;
  }

  function initializeCharts() {
    [el.pressureChart, el.rateChart, el.gorChart, el.declineChart, el.forecastChart].forEach((canvas) => {
      appState.chartState[canvas.id] = { zoom: null, crosshair: null, dragStart: null, dragCurrent: null };

      canvas.addEventListener("mousemove", (evt) => {
        const pos = getCanvasPos(canvas, evt);
        const state = appState.chartState[canvas.id];
        state.crosshair = pos;
        if (state.dragStart) state.dragCurrent = pos;
        drawSingleChart(canvas.id);
      });

      canvas.addEventListener("mouseleave", () => {
        const state = appState.chartState[canvas.id];
        state.crosshair = null;
        if (!state.dragStart) drawSingleChart(canvas.id);
      });

      canvas.addEventListener("mousedown", (evt) => {
        const state = appState.chartState[canvas.id];
        state.dragStart = getCanvasPos(canvas, evt);
        state.dragCurrent = state.dragStart;
      });

      canvas.addEventListener("mouseup", (evt) => {
        const state = appState.chartState[canvas.id];
        const end = getCanvasPos(canvas, evt);
        if (state.dragStart && Math.abs(end.x - state.dragStart.x) > 8) {
          const chartMeta = buildChartData(canvas.id);
          const xRange = getXRangeFromSelection(chartMeta, canvas.width, state.dragStart.x, end.x);
          if (xRange) state.zoom = xRange;
        }
        state.dragStart = null;
        state.dragCurrent = null;
        drawSingleChart(canvas.id);
      });

      canvas.addEventListener("dblclick", () => {
        appState.chartState[canvas.id].zoom = null;
        drawSingleChart(canvas.id);
      });
    });
  }

  function renderCharts() {
    ["pressureChart", "rateChart", "gorChart", "declineChart", "forecastChart"].forEach(drawSingleChart);
  }
  function buildChartData(chartId) {
    const rows = getProcessedRows();
    const solver = getSolverResult();
    const ai = getAiResult();
    const showOverlay = el.optShowOverlay.checked;
    const x = rows.map((r) => r.time_min / 1440);

    if (chartId === "pressureChart") {
      return {
        title: "Pressure vs Time",
        xLabel: "Time (day)",
        leftLabel: "Pressure (psia)",
        rightLabel: "",
        series: [
          { name: "Pwf", axis: "left", color: "#0b5ca8", x, y: rows.map((r) => r.pressure_psia) },
          ...(showOverlay ? [{ name: "Pr Estimate", axis: "left", color: "#b87333", x, y: rows.map((r) => r.reservoir_pressure_est) }] : [])
        ]
      };
    }

    if (chartId === "rateChart") {
      return {
        title: "Rate vs Time",
        xLabel: "Time (day)",
        leftLabel: "Liquid Rate (bopd)",
        rightLabel: "Gas (mscf/d)",
        series: [
          { name: "Oil", axis: "left", color: "#188038", x, y: rows.map((r) => r.oil_rate_bopd) },
          { name: "Water", axis: "left", color: "#1d4ed8", x, y: rows.map((r) => r.water_rate_bopd) },
          { name: "Gas", axis: "right", color: "#7c3aed", x, y: rows.map((r) => r.gas_rate_mscfd) }
        ]
      };
    }

    if (chartId === "gorChart") {
      return {
        title: "GOR vs Time",
        xLabel: "Time (day)",
        leftLabel: "GOR",
        rightLabel: "Water Cut (%)",
        series: [
          { name: "GOR", axis: "left", color: "#b45309", x, y: rows.map((r) => r.gor) },
          { name: "WC", axis: "right", color: "#0891b2", x, y: rows.map((r) => r.water_cut * 100) },
          ...(showOverlay && ai.enabled && ai.forecast30 ? [{
            name: "GOR Trend", axis: "left", color: "#ef4444", dashed: true,
            x: ai.forecast30.map((_, i) => (x[x.length - 1] || 0) + (i + 1)), y: ai.forecast30.map((f) => f.gor)
          }] : [])
        ]
      };
    }

    if (chartId === "declineChart") {
      const histX = rows.map((r) => r.time_min / 1440);
      const histY = rows.map((r) => r.oil_rate_bopd);
      let fitSeries = [];
      if (solver.enabled && solver.bestFit) {
        const t0 = histX[0] || 0;
        fitSeries = [{ name: `Fit-${solver.bestFit.type}`, axis: "left", color: "#dc2626", dashed: true, x: histX, y: histX.map((t) => arpsRate(solver.bestFit, t - t0)) }];
      }
      return {
        title: "Decline Curve Fit",
        xLabel: "Time (day)",
        leftLabel: "Oil Rate (bopd)",
        rightLabel: "",
        series: [{ name: "Actual Oil", axis: "left", color: "#0f766e", x: histX, y: histY }, ...fitSeries]
      };
    }

    if (chartId === "forecastChart") {
      const histX = rows.map((r) => r.time_min / 1440);
      const histY = rows.map((r) => r.oil_rate_bopd);
      const series = [{ name: "History", axis: "left", color: "#0f766e", x: histX, y: histY }];
      if (solver.enabled && solver.forecast) {
        series.push({ name: "Solver Forecast", axis: "left", color: "#d97706", dashed: true, x: solver.forecast.map((f) => f.t_day + (histX[0] || 0)), y: solver.forecast.map((f) => f.q) });
      }
      if (ai.enabled && ai.forecast30) {
        series.push({ name: "AI 30d Oil", axis: "left", color: "#7c3aed", dashed: true, x: ai.forecast30.map((_, i) => (histX[histX.length - 1] || 0) + i + 1), y: ai.forecast30.map((f) => f.oil) });
      }
      return {
        title: "Forecast Curve",
        xLabel: "Time (day)",
        leftLabel: "Oil Rate (bopd)",
        rightLabel: "Pressure (psia)",
        series
      };
    }

    return { title: "", xLabel: "", leftLabel: "", rightLabel: "", series: [] };
  }

  function drawSingleChart(chartId) {
    const canvas = el[chartId];
    const ctx = canvas.getContext("2d");
    const data = buildChartData(chartId);
    drawChart(canvas, ctx, data, appState.chartState[chartId], el.optLogScale.checked);
  }

  function drawChart(canvas, ctx, meta, state, logScale) {
    const W = canvas.width;
    const H = canvas.height;
    const pad = { l: 60, r: 60, t: 24, b: 36 };
    ctx.clearRect(0, 0, W, H);

    if (!meta.series.length || !meta.series.some((s) => s.x.length)) {
      ctx.fillStyle = "#666";
      ctx.fillText("No data", 12, 20);
      return;
    }

    const xAll = meta.series.flatMap((s) => s.x);
    let xMin = Math.min(...xAll);
    let xMax = Math.max(...xAll);
    if (state.zoom) {
      xMin = state.zoom.xMin;
      xMax = state.zoom.xMax;
    }
    if (xMax - xMin < 1e-9) xMax = xMin + 1;

    const leftVals = [];
    const rightVals = [];
    meta.series.forEach((s) => {
      for (let i = 0; i < s.x.length; i++) {
        if (s.x[i] < xMin || s.x[i] > xMax) continue;
        const y = s.y[i];
        if (!Number.isFinite(y)) continue;
        if (s.axis === "right") rightVals.push(y); else leftVals.push(y);
      }
    });

    const leftRange = calcRange(leftVals, logScale);
    const rightRange = calcRange(rightVals.length ? rightVals : [0, 1], logScale && rightVals.length > 0);

    const xToPx = (x) => pad.l + ((x - xMin) / (xMax - xMin)) * (W - pad.l - pad.r);
    const yToPx = (y, axis) => {
      const range = axis === "right" ? rightRange : leftRange;
      const yv = logScale ? Math.log10(Math.max(y, 1e-6)) : y;
      return H - pad.b - ((yv - range.min) / (range.max - range.min || 1)) * (H - pad.t - pad.b);
    };

    ctx.strokeStyle = "#d6d6cb";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = pad.t + (i / 5) * (H - pad.t - pad.b);
      ctx.beginPath();
      ctx.moveTo(pad.l, y);
      ctx.lineTo(W - pad.r, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t);
    ctx.lineTo(pad.l, H - pad.b);
    ctx.lineTo(W - pad.r, H - pad.b);
    ctx.lineTo(W - pad.r, pad.t);
    ctx.stroke();

    meta.series.forEach((s) => {
      ctx.strokeStyle = s.color || "#000";
      ctx.lineWidth = 2;
      ctx.setLineDash(s.dashed ? [5, 3] : []);
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < s.x.length; i++) {
        const x = s.x[i];
        const y = s.y[i];
        if (x < xMin || x > xMax || !Number.isFinite(y)) continue;
        const px = xToPx(x);
        const py = yToPx(y, s.axis);
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else ctx.lineTo(px, py);
      }
      ctx.stroke();
    });
    ctx.setLineDash([]);

    ctx.fillStyle = "#222";
    ctx.font = "12px Tahoma";
    ctx.fillText(meta.title, 8, 14);
    ctx.fillText(meta.xLabel, W / 2 - 30, H - 8);
    ctx.fillText(meta.leftLabel, 5, 14);
    if (meta.rightLabel) ctx.fillText(meta.rightLabel, W - pad.r + 6, 14);

    drawAxisTicks(ctx, xMin, xMax, pad.l, W - pad.r, H - pad.b, true);
    drawAxisTicks(ctx, leftRange.minRaw, leftRange.maxRaw, pad.t, H - pad.b, pad.l - 6, false);
    if (meta.series.some((s) => s.axis === "right")) {
      drawAxisTicks(ctx, rightRange.minRaw, rightRange.maxRaw, pad.t, H - pad.b, W - pad.r + 4, false);
    }

    drawLegend(ctx, meta.series, W - pad.r - 170, pad.t + 6);

    if (state.crosshair) {
      const x = clamp(state.crosshair.x, pad.l, W - pad.r);
      const y = clamp(state.crosshair.y, pad.t, H - pad.b);
      ctx.strokeStyle = "rgba(30,30,30,0.45)";
      ctx.beginPath();
      ctx.moveTo(x, pad.t);
      ctx.lineTo(x, H - pad.b);
      ctx.moveTo(pad.l, y);
      ctx.lineTo(W - pad.r, y);
      ctx.stroke();
    }

    if (state.dragStart && state.dragCurrent) {
      const x0 = state.dragStart.x;
      const x1 = state.dragCurrent.x;
      ctx.fillStyle = "rgba(15,93,184,0.2)";
      ctx.fillRect(Math.min(x0, x1), pad.t, Math.abs(x1 - x0), H - pad.t - pad.b);
      ctx.strokeStyle = "rgba(15,93,184,0.6)";
      ctx.strokeRect(Math.min(x0, x1), pad.t, Math.abs(x1 - x0), H - pad.t - pad.b);
    }
  }

  function calcRange(values, useLog) {
    if (!values.length) return { min: 0, max: 1, minRaw: 0, maxRaw: 1 };
    const minRaw = Math.min(...values);
    const maxRaw = Math.max(...values);
    let min = minRaw;
    let max = maxRaw;
    if (useLog) {
      min = Math.log10(Math.max(minRaw, 1e-6));
      max = Math.log10(Math.max(maxRaw, 1e-6));
    }
    if (max - min < 1e-9) max = min + 1;
    return { min, max, minRaw, maxRaw };
  }

  function drawAxisTicks(ctx, min, max, p0, p1, fixed, horizontal) {
    ctx.fillStyle = "#333";
    ctx.font = "10px Tahoma";
    for (let i = 0; i <= 5; i++) {
      const v = min + (i / 5) * (max - min);
      const txt = round(v, 2);
      if (horizontal) {
        const x = p0 + (i / 5) * (p1 - p0);
        ctx.fillText(String(txt), x - 10, fixed + 12);
      } else {
        const y = p1 - (i / 5) * (p1 - p0);
        ctx.fillText(String(txt), fixed, y + 4);
      }
    }
  }

  function drawLegend(ctx, series, x, y) {
    series.forEach((s, i) => {
      const yy = y + i * 14;
      ctx.fillStyle = s.color;
      ctx.fillRect(x, yy - 8, 10, 10);
      ctx.fillStyle = "#222";
      ctx.fillText(s.name, x + 14, yy);
    });
  }

  function getCanvasPos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - rect.left) / rect.width) * canvas.width,
      y: ((evt.clientY - rect.top) / rect.height) * canvas.height
    };
  }

  function getXRangeFromSelection(meta, canvasWidth, x0, x1) {
    const xAll = meta.series.flatMap((s) => s.x);
    if (!xAll.length) return null;
    const minX = Math.min(...xAll);
    const maxX = Math.max(...xAll);
    const left = 60;
    const right = 60;
    const toData = (px) => minX + ((px - left) / (canvasWidth - left - right)) * (maxX - minX);
    const a = clamp(toData(Math.min(x0, x1)), minX, maxX);
    const b = clamp(toData(Math.max(x0, x1)), minX, maxX);
    if (Math.abs(b - a) < 1e-6) return null;
    return { xMin: a, xMax: b };
  }

  function exportChartImage() {
    const id = el.chartSelector.value;
    const canvas = el[id];
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `${id}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    logActivity(`Chart exported: ${id}.png`);
  }

  function importCsv(evt) {
    const file = evt.target.files && evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = parseCsv(String(reader.result || ""));
      if (!parsed.length) {
        logActivity("CSV import failed: no valid rows.");
        return;
      }
      const rows = currentWell().data;
      parsed.forEach((r) => rows.push(r));
      rows.sort((a, b) => a.time_min - b.time_min);
      recomputeCurrentWell();
      renderAll();
      logActivity(`Imported CSV with ${parsed.length} rows.`);
    };
    reader.readAsText(file);
  }

  function parseCsv(text) {
    const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length < 2) return [];
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(",").map((p) => p.trim());
      const rec = {};
      headers.forEach((h, idx) => { rec[h] = parts[idx]; });
      rows.push({
        time_min: number(rec.time_min ?? rec.time ?? rec.minutes, i - 1),
        pressure_psia: number(rec.pressure_psia ?? rec.pressure ?? rec.pwf, 0),
        oil_rate_bopd: number(rec.oil_rate_bopd ?? rec.oil_bopd ?? rec.oil, 0),
        gas_rate_mscfd: number(rec.gas_rate_mscfd ?? rec.gas_mscfd ?? rec.gas, 0),
        water_rate_bopd: number(rec.water_rate_bopd ?? rec.water_bopd ?? rec.water, 0),
        temperature_f: number(rec.temperature_f ?? rec.temp_f ?? rec.temperature, 0)
      });
    }
    return rows;
  }

  function exportFilteredCsv() {
    const rows = appState.filteredExportRows.length ? appState.filteredExportRows : getFilteredRows(getProcessedRows());
    if (!rows.length) {
      logActivity("No rows available for CSV export.");
      return;
    }
    const header = ["time_min", "pressure_psia", "oil_rate_bopd", "gas_rate_mscfd", "water_rate_bopd", "temperature_f", "water_cut", "gor", "delta_p", "pi", "reservoir_pressure_est"];
    const body = rows.map((r) => header.map((k) => csvEscape(round(r[k], 6))).join(","));
    downloadText([header.join(","), ...body].join("\n"), "filtered_export.csv", "text/csv");
    logActivity(`CSV exported (${rows.length} rows).`);
  }

  function readFilterInputs() {
    return {
      timeMin: maybeNumber(el.fltTimeMin.value),
      timeMax: maybeNumber(el.fltTimeMax.value),
      pressureMin: maybeNumber(el.fltPressureMin.value),
      pressureMax: maybeNumber(el.fltPressureMax.value),
      oilMin: maybeNumber(el.fltOilMin.value),
      oilMax: maybeNumber(el.fltOilMax.value)
    };
  }

  function clearFilterInputs() {
    [el.fltTimeMin, el.fltTimeMax, el.fltPressureMin, el.fltPressureMax, el.fltOilMin, el.fltOilMax].forEach((x) => { x.value = ""; });
  }

  function getFilteredRows(rows) {
    const f = appState.filter || {};
    return rows.filter((r) => {
      if (f.timeMin != null && r.time_min < f.timeMin) return false;
      if (f.timeMax != null && r.time_min > f.timeMax) return false;
      if (f.pressureMin != null && r.pressure_psia < f.pressureMin) return false;
      if (f.pressureMax != null && r.pressure_psia > f.pressureMax) return false;
      if (f.oilMin != null && r.oil_rate_bopd < f.oilMin) return false;
      if (f.oilMax != null && r.oil_rate_bopd > f.oilMax) return false;
      return true;
    });
  }
  function saveProjectJson() {
    appState.project.notes = el.projectNotes.value;
    downloadText(JSON.stringify(appState.project, null, 2), "field_project.json", "application/json");
    logActivity("Project saved as JSON.");
  }

  function loadProjectJson() {
    const file = el.projectInput.files && el.projectInput.files[0];
    if (!file) {
      logActivity("Select a project JSON first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(String(reader.result || "{}"));
        if (!obj || !obj.config || !Array.isArray(obj.wellData)) throw new Error("Invalid project schema");
        stopAcquisition();
        appState.project = obj;
        appState.currentWellIndex = 0;
        if (!appState.project.activityLog) appState.project.activityLog = [];
        syncConfigToUi();
        refreshWellSelector();
        recomputeCurrentWell();
        renderAll();
        logActivity("Project loaded.");
      } catch (err) {
        logActivity(`Project load failed: ${err.message}`);
      }
    };
    reader.readAsText(file);
  }

  function resetProject() {
    stopAcquisition();
    appState.project = createNewProject();
    appState.currentWellIndex = 0;
    appState.page = 1;
    appState.filter = {};
    clearFilterInputs();
    syncConfigToUi();
    refreshWellSelector();
    recomputeCurrentWell();
    renderAll();
    logActivity("Project reset.");
  }

  function loadDemoData() {
    stopAcquisition();
    const rows = [];
    for (let i = 0; i < 240; i++) {
      rows.push(simulatePoint(rows, appState.project.config));
    }
    currentWell().data = rows;
    recomputeCurrentWell();
    renderAll();
    logActivity("Demo dataset generated.");
  }

  function compareRows(a, b, key, dir) {
    const av = number(a[key], 0);
    const bv = number(b[key], 0);
    return dir === "asc" ? av - bv : bv - av;
  }

  function toDisplayTime(minutes, unit) {
    if (unit === "hours") return minutes / 60;
    if (unit === "days") return minutes / 1440;
    return minutes;
  }

  function linearRegression(pairs) {
    const n = pairs.length;
    if (!n) return { slope: 0, intercept: 0, r2: 0 };
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    for (const [x, y] of pairs) {
      sumX += x;
      sumY += y;
      sumXY += x * y;
      sumX2 += x * x;
    }
    const denom = n * sumX2 - sumX * sumX;
    const slope = Math.abs(denom) > 1e-12 ? (n * sumXY - sumX * sumY) / denom : 0;
    const intercept = (sumY - slope * sumX) / n;

    const yMean = sumY / n;
    let sse = 0;
    let sst = 0;
    for (const [x, y] of pairs) {
      const yp = intercept + slope * x;
      sse += (y - yp) * (y - yp);
      sst += (y - yMean) * (y - yMean);
    }
    const r2 = sst > 0 ? 1 - sse / sst : 0;
    return { slope, intercept, r2 };
  }

  function detectAnomalies(values, zThreshold) {
    if (!values.length) return [];
    const mu = average(values);
    const sigma = stddev(values, mu);
    if (sigma < 1e-9) return [];
    const idx = [];
    for (let i = 0; i < values.length; i++) {
      const z = Math.abs((values[i] - mu) / sigma);
      if (z > zThreshold) idx.push(i);
    }
    return idx;
  }

  function detectOutliersIqr(values) {
    if (values.length < 4) return [];
    const sorted = values.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
    const q1 = quantile(sorted.map((x) => x.v), 0.25);
    const q3 = quantile(sorted.map((x) => x.v), 0.75);
    const iqr = q3 - q1;
    const lo = q1 - 1.5 * iqr;
    const hi = q3 + 1.5 * iqr;
    return sorted.filter((x) => x.v < lo || x.v > hi).map((x) => x.i);
  }

  function quantile(arr, q) {
    const n = arr.length;
    if (!n) return 0;
    const pos = (n - 1) * q;
    const base = Math.floor(pos);
    const frac = pos - base;
    const next = arr[base + 1] !== undefined ? arr[base + 1] : arr[base];
    return arr[base] + frac * (next - arr[base]);
  }

  function average(arr) {
    if (!arr.length) return 0;
    return arr.reduce((acc, v) => acc + v, 0) / arr.length;
  }

  function stddev(arr, mean) {
    if (!arr.length) return 0;
    const m = mean != null ? mean : average(arr);
    const variance = arr.reduce((acc, v) => acc + (v - m) ** 2, 0) / arr.length;
    return Math.sqrt(variance);
  }

  function gaussian() {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  function number(v, fallback) {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function maybeNumber(v) {
    if (v === "" || v == null) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  function round(v, d) {
    if (!Number.isFinite(v)) return 0;
    const f = 10 ** d;
    return Math.round(v * f) / f;
  }

  function csvEscape(v) {
    const s = String(v);
    if (s.includes(",") || s.includes("\"") || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
    return s;
  }

  function downloadText(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
})();
