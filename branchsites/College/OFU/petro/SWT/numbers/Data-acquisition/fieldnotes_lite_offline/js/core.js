(function () {
  "use strict";

  class AppController {
    constructor() {
      this.bus = new AppUtils.EventBus();
      this.projectManager = new ProjectManager("fieldnotes_pro_autosave_v2");
      this.configEngine = new ConfigEngine();
      this.dataEngine = new DataEngine();
      this.solverEngine = new SolverEngine();
      this.aiEngine = new AIEngine();
      this.chartEngine = new ChartEngine();
      this.ui = this.mapUi();
      this.grid = new GridEngine(this.ui.gridContainer, this.ui.gridPager, this.ui.columnPanel, this.ui.gridFilter);
      this.timer = null;
      this.currentProcessed = null;
      this.currentSolver = null;
      this.currentAi = null;
      this.activeTab = "fieldTab";
      this.autosave = AppUtils.debounce(() => this.safe(() => this.projectManager.saveToLocalStorage()), 400);
      this._dbgEl = null;
    }

    on(node, eventName, handler, label) {
      if (!node) {
        const msg = `⚠ UI element missing: ${label || "unknown"}`;
        console.warn(msg);
        this._writeDebug(msg);
        return;
      }
      node.addEventListener(eventName, handler);
      const msg = `✓ Wired: ${label || eventName}`;
      console.log(msg);
      this._writeDebug(msg);
    }

    _createDebugPanel() {
      if (this._dbgEl) return;
      const d = document.createElement('div');
      d.id = 'app-debug-panel';
      d.style.position = 'fixed';
      d.style.right = '8px';
      d.style.bottom = '8px';
      d.style.width = '340px';
      d.style.maxHeight = '240px';
      d.style.overflow = 'auto';
      d.style.fontFamily = 'Segoe UI, Tahoma, sans-serif';
      d.style.fontSize = '12px';
      d.style.background = 'rgba(10,12,18,0.85)';
      d.style.color = '#cfe8ff';
      d.style.border = '1px solid #345';
      d.style.padding = '8px';
      d.style.zIndex = 99999;
      d.innerHTML = '<strong>Debug</strong><div id="app-debug-log"></div>';
      document.body.appendChild(d);
      this._dbgEl = document.getElementById('app-debug-log');
    }

    _writeDebug(msg) {
      try {
        if (!this._dbgEl) this._createDebugPanel();
        const line = document.createElement('div');
        line.textContent = msg;
        this._dbgEl.appendChild(line);
        while (this._dbgEl.childElementCount > 100) this._dbgEl.removeChild(this._dbgEl.firstChild);
      } catch (e) { console.warn('debug write failed', e); }
    }

    mapUi() {
      const byId = (id) => document.getElementById(id);
      const ui = {
        tabs: Array.from(document.querySelectorAll(".tab")),
        panels: Array.from(document.querySelectorAll(".tab-panel")),
        menuButtons: Array.from(document.querySelectorAll(".menubar button")),
        winMin: document.querySelector('.title-actions .win-control'),
        winMax: document.querySelectorAll('.title-actions .win-control')[1],
        winClose: document.querySelector('.title-actions .win-control.close'),
        btnNew: byId("btnNew"),
        btnOpen: byId("btnOpen"),
        btnSave: byId("btnSave"),
        btnImportCsv: byId("btnImportCsv"),
        btnExportCsv: byId("btnExportCsv"),
        btnExportChart: byId("btnExportChart"),
        btnSimSetup: byId("btnSimSetup"),
        btnStart: byId("btnStart"),
        btnStop: byId("btnStop"),
        btnManual: byId("btnManual"),
        btnSolve: byId("btnSolve"),
        btnForecast: byId("btnForecast"),
        btnDemo: byId("btnDemo"),
        btnAddWell: byId("btnAddWell"),
        btnRemoveWell: byId("btnRemoveWell"),
        wellSelector: byId("wellSelector"),
        cfgSampleInterval: byId("cfgSampleInterval"),
        cfgNoiseLevel: byId("cfgNoiseLevel"),
        cfgSmoothing: byId("cfgSmoothing"),
        cfgDownsample: byId("cfgDownsample"),
        cfgTimeUnit: byId("cfgTimeUnit"),
        cfgUnitSystem: byId("cfgUnitSystem"),
        cfgEnableAi: byId("cfgEnableAi"),
        cfgEnableSolver: byId("cfgEnableSolver"),
        cfgLogScale: byId("cfgLogScale"),
        cfgOverlayWells: byId("cfgOverlayWells"),
        quickStats: byId("quickStats"),
        gridContainer: byId("gridContainer"),
        gridPager: byId("gridPager"),
        gridFilter: byId("gridFilter"),
        gridPageSize: byId("gridPageSize"),
        btnToggleColumns: byId("btnToggleColumns"),
        columnPanel: byId("columnPanel"),
        mainChart: byId("mainChart"),
        hornerChart: byId("hornerChart"),
        diagnosticChart: byId("diagnosticChart"),
        declineChart: byId("declineChart"),
        forecastChart: byId("forecastChart"),
        productionSummary: byId("productionSummary"),
        solverSummary: byId("solverSummary"),
        aiSummary: byId("aiSummary"),
        aiPanelSummary: byId("aiPanelSummary"),
        activityLog: byId("activityLog"),
        errorLog: byId("errorLog"),
        projectNotes: byId("projectNotes"),
        projectFile: byId("projectFile"),
        csvFile: byId("csvFile"),
        btnLoadProject: byId("btnLoadProject"),
        btnResetProject: byId("btnResetProject"),
        btnApplySolver: byId("btnApplySolver"),
        btnResetSolver: byId("btnResetSolver"),
        expTimeMin: byId("expTimeMin"),
        expTimeMax: byId("expTimeMax"),
        expPressureMin: byId("expPressureMin"),
        expPressureMax: byId("expPressureMax"),
        expOilMin: byId("expOilMin"),
        expOilMax: byId("expOilMax"),
        statusMain: byId("statusMain"),
        statusUnit: byId("statusUnit"),
        statusPerf: byId("statusPerf"),
        simWizard: byId("simWizard"),
        wizardBody: byId("wizardBody"),
        btnWizardApply: byId("btnWizardApply"),
        btnWizardCancel: byId("btnWizardCancel")
      };
      console.log("✓ UI elements mapped:", Object.keys(ui).length, "items found");
      const missing = Object.keys(ui).filter(k => !ui[k]);
      if (missing.length > 0) console.warn("⚠ Missing UI elements:", missing);
      return ui;
    }

    init() {
      this.safe(() => {
        window.addEventListener("error", (e) => {
          this.pushError(`Runtime error: ${e.message}`);
        });
        window.addEventListener("unhandledrejection", (e) => {
          this.pushError(`Unhandled promise: ${e.reason}`);
        });

        // create on-screen debug panel so user can see wiring status without opening devtools
        try { this._createDebugPanel(); this._writeDebug('Debug panel initialized'); } catch (e) { console.warn('debug panel init failed'); }
        // log button clicks to debug panel
        document.body.addEventListener('click', (ev) => {
          try {
            const t = ev.target;
            if (!t) return;
            if (t.tagName === 'BUTTON' || t.closest && t.closest('button')) {
              const b = t.tagName === 'BUTTON' ? t : t.closest('button');
              const id = b.id || b.className || b.textContent.trim().slice(0, 24);
              this._writeDebug(`Click -> ${id}`);
            }
          } catch (e) { /* ignore */ }
        }, true);

        this.mountEvents();
        this.mountFallbackDelegates();
        this.chartEngine.attach(this.ui.mainChart);
        this.chartEngine.attach(this.ui.hornerChart);
        this.chartEngine.attach(this.ui.diagnosticChart);
        this.chartEngine.attach(this.ui.declineChart);
        this.chartEngine.attach(this.ui.forecastChart);

        this.grid.onEdit = (row, key, value) => this.onGridEdit(row, key, value);
        this.grid.onError = (msg) => this.pushError(msg);
        this.grid.setValidator((row, key) => this.validateEngineeringCell(row, key));

        const loaded = this.projectManager.loadFromLocalStorage();
        this.configEngine.ensure(this.projectManager.project);
        this.dataEngine.ensureProfiles(this.projectManager.project.config);
        this.configEngine.applyToUi(this.projectManager.project.config, this.ui);
        this.buildSimulationWizard();
        if (loaded) this.log("Auto-saved project restored.");

        this.refreshWellSelector();
        this.recomputeAll("Ready");
        this.renderAll();
        this.log("UI event bindings initialized.");
      });
    }

    mountFallbackDelegates() {
      document.addEventListener("click", (evt) => {
        const t = evt.target;
        if (!t || !t.id) return;
        this.ui.statusMain.textContent = `Click: ${t.id}`;
        const map = {
          btnNew: () => this.resetProject(),
          btnOpen: () => this.switchTab("projectTab"),
          btnSave: () => this.saveProject(),
          btnImportCsv: () => this.ui.csvFile && this.ui.csvFile.click(),
          btnExportCsv: () => this.exportCsvFiltered(),
          btnExportChart: () => this.exportActiveChart(),
          btnSimSetup: () => this.openSimulationWizard(),
          btnStart: () => this.startAcquisition(),
          btnStop: () => this.stopAcquisition(),
          btnManual: () => this.manualInput(),
          btnSolve: () => this.runSolverOnly(),
          btnForecast: () => this.runAiOnly(),
          btnDemo: () => this.loadDemo(),
          btnAddWell: () => {
            const w = this.projectManager.addWell();
            this.log(`Added ${w.name}.`);
            this.refreshWellSelector();
            this.recomputeAll("Ready");
            this.renderAll();
          },
          btnRemoveWell: () => {
            this.projectManager.removeActiveWell();
            this.log("Active well removed.");
            this.refreshWellSelector();
            this.recomputeAll("Ready");
            this.renderAll();
          },
          btnLoadProject: () => this.loadProjectFromFile(),
          btnResetProject: () => this.resetProject(),
          btnApplySolver: () => this.runSolverOnly(),
          btnResetSolver: () => {
            const id = this.projectManager.getActiveWell().id;
            delete this.projectManager.project.results[id];
            this.currentSolver = null;
            this.renderSolverPanel();
          },
          btnWizardApply: () => this.applySimulationWizard(),
          btnWizardCancel: () => this.ui.simWizard && this.ui.simWizard.close()
        };
        if (map[t.id]) {
          this.safe(() => map[t.id]());
        }
      }, true);
    }

    mountEvents() {
      console.log("🔧 Starting mountEvents...");
      this.ui.tabs.forEach((tab) => this.on(tab, "click", () => this.switchTab(tab.dataset.tab), `tab:${tab.dataset.tab}`));
      this.ui.menuButtons.forEach((b) => this.on(b, "click", () => this.onMenu(b.dataset.menu), `menu:${b.dataset.menu}`));

      // Window controls
      if (this.ui.winMin) this.ui.winMin.addEventListener("click", () => this.safe(() => this.toggleMinimize()));
      if (this.ui.winMax) this.ui.winMax.addEventListener("click", () => this.safe(() => this.toggleFullscreen()));
      if (this.ui.winClose) this.ui.winClose.addEventListener("click", () => this.safe(() => this.closeWindow()));

      const cfgInputs = [
        this.ui.cfgSampleInterval, this.ui.cfgNoiseLevel, this.ui.cfgSmoothing, this.ui.cfgDownsample,
        this.ui.cfgTimeUnit, this.ui.cfgUnitSystem, this.ui.cfgEnableAi, this.ui.cfgEnableSolver,
        this.ui.cfgLogScale, this.ui.cfgOverlayWells
      ];
      cfgInputs.forEach((el, idx) => this.on(el, "change", () => this.safe(() => {
        this.configEngine.updateFromUi(this.projectManager.project.config, this.ui);
        this.ui.statusUnit.textContent = this.projectManager.project.config.unitSystem === "field" ? "Field" : "Metric";
        this.recomputeAll("Ready");
        this.renderAll();
      }), `config:${idx}`));

      this.on(this.ui.btnNew, "click", () => this.safe(() => this.resetProject()), "btnNew");
      this.on(this.ui.btnOpen, "click", () => this.switchTab("projectTab"), "btnOpen");
      this.on(this.ui.btnSave, "click", () => this.safe(() => this.saveProject()), "btnSave");
      this.on(this.ui.btnImportCsv, "click", () => this.ui.csvFile && this.ui.csvFile.click(), "btnImportCsv");
      this.on(this.ui.btnExportCsv, "click", () => this.safe(() => this.exportCsvFiltered()), "btnExportCsv");
      this.on(this.ui.btnExportChart, "click", () => this.safe(() => this.exportActiveChart()), "btnExportChart");
      this.on(this.ui.btnSimSetup, "click", () => this.safe(() => this.openSimulationWizard()), "btnSimSetup");
      this.on(this.ui.btnStart, "click", () => this.safe(() => this.startAcquisition()), "btnStart");
      this.on(this.ui.btnStop, "click", () => this.safe(() => this.stopAcquisition()), "btnStop");
      this.on(this.ui.btnManual, "click", () => this.safe(() => this.manualInput()), "btnManual");
      this.on(this.ui.btnSolve, "click", () => this.safe(() => this.runSolverOnly()), "btnSolve");
      this.on(this.ui.btnForecast, "click", () => this.safe(() => this.runAiOnly()), "btnForecast");
      this.on(this.ui.btnDemo, "click", () => this.safe(() => this.loadDemo()), "btnDemo");

      this.on(this.ui.btnAddWell, "click", () => this.safe(() => {
        const w = this.projectManager.addWell();
        this.log(`Added ${w.name}.`);
        this.refreshWellSelector();
        this.recomputeAll("Ready");
        this.renderAll();
      }), "btnAddWell");
      this.on(this.ui.btnRemoveWell, "click", () => this.safe(() => {
        this.projectManager.removeActiveWell();
        this.log("Active well removed.");
        this.refreshWellSelector();
        this.recomputeAll("Ready");
        this.renderAll();
      }), "btnRemoveWell");
      this.on(this.ui.wellSelector, "change", () => this.safe(() => {
        this.projectManager.setActiveWell(this.ui.wellSelector.value);
        this.recomputeAll("Ready");
        this.renderAll();
      }), "wellSelector");

      this.on(this.ui.gridPageSize, "change", () => this.grid.setPageSize(this.ui.gridPageSize.value), "gridPageSize");
      this.on(this.ui.btnToggleColumns, "click", () => this.ui.columnPanel && this.ui.columnPanel.classList.toggle("hidden"), "btnToggleColumns");

      this.on(this.ui.csvFile, "change", (e) => this.safe(() => this.importCsv(e)), "csvFile");
      this.on(this.ui.btnLoadProject, "click", () => this.safe(() => this.loadProjectFromFile()), "btnLoadProject");
      this.on(this.ui.btnResetProject, "click", () => this.safe(() => this.resetProject()), "btnResetProject");
      this.on(this.ui.projectNotes, "input", () => {
        this.projectManager.project.notes = this.ui.projectNotes.value;
        this.autosave();
      }, "projectNotes");

      this.on(this.ui.btnApplySolver, "click", () => this.safe(() => this.runSolverOnly()), "btnApplySolver");
      this.on(this.ui.btnResetSolver, "click", () => this.safe(() => {
        const id = this.projectManager.getActiveWell().id;
        delete this.projectManager.project.results[id];
        this.currentSolver = null;
        this.renderSolverPanel();
      }), "btnResetSolver");

      this.on(this.ui.btnWizardApply, "click", (e) => this.safe(() => {
        e.preventDefault();
        this.applySimulationWizard();
      }), "btnWizardApply");
      this.on(this.ui.btnWizardCancel, "click", () => this.ui.simWizard && this.ui.simWizard.close(), "btnWizardCancel");
      this.on(this.ui.winMin, "click", () => this.toggleMinimize(), "winMin");
      this.on(this.ui.winMax, "click", () => this.toggleFullscreen(), "winMax");
      this.on(this.ui.winClose, "click", () => this.closeWindow(), "winClose");
      console.log("✓ All event handlers mounted");
    }

    toggleMinimize() {
      const root = document.querySelector('.desktop-window');
      if (!root) return;
      root.classList.toggle('minimized');
    }

    toggleFullscreen() {
      const root = document.querySelector('.desktop-window');
      if (!root) return;
      root.classList.toggle('fullscreen');
    }

    closeWindow() {
      if (confirm('Close application?')) {
        try { window.close(); } catch (e) { /* ignore */ }
        document.querySelector('.desktop-window').style.display = 'none';
      }
    }

    switchTab(id) {
      this.activeTab = id;
      this.ui.tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === id));
      this.ui.panels.forEach((p) => p.classList.toggle("active", p.id === id));
      this.renderCharts();
    }

    onMenu(name) {
      const map = {
        file: "projectTab",
        data: "fieldTab",
        measurement: "fieldTab",
        analysis: "summaryTab",
        plot: "declineTab",
        grid: "fieldTab",
        solver: "declineTab",
        ai: "aiTab",
        report: "summaryTab",
        help: "logTab"
      };
      this.switchTab(map[name] || "fieldTab");
      if (name === "help") this.log("Help: Use Start or Demo, then Solve/Forecast.");
    }

    recomputeAll(status) {
      const t0 = performance.now();
      const project = this.projectManager.project;
      const active = this.projectManager.getActiveWell();
      if (!active) throw new Error("No active well.");

      const cfg = this.configEngine.ensure(project);
      const result = this.dataEngine.processWell(active, cfg);
      this.currentProcessed = result;

      if (cfg.enableSolver) {
        this.currentSolver = this.solverEngine.solve(result.rows);
        project.results[active.id] = this.currentSolver;
      } else {
        this.currentSolver = { ok: false, message: "Solver disabled." };
      }

      if (cfg.enableAi) {
        this.currentAi = this.aiEngine.run(result.rows);
        project.aiResults[active.id] = this.currentAi;
      } else {
        this.currentAi = { ok: false, message: "AI disabled." };
      }

      const dt = performance.now() - t0;
      this.setStatus(status || "Ready", dt);
      this.autosave();
    }

    renderAll() {
      this.refreshWellSelector();
      this.renderGrid();
      this.renderStats();
      this.renderSummaryPanels();
      this.renderSolverPanel();
      this.renderAiPanel();
      this.renderLogs();
      this.renderCharts();
      this.ui.projectNotes.value = this.projectManager.project.notes || "";
    }

    renderGrid() {
      this.grid.setRows(this.currentProcessed ? this.currentProcessed.rows : []);
    }

    renderStats() {
      const s = this.currentProcessed && this.currentProcessed.summary;
      if (!s) {
        this.ui.quickStats.textContent = "No data.";
        this.ui.productionSummary.textContent = "No summary.";
        return;
      }

      this.ui.quickStats.textContent = [
        `Records: ${s.records}`,
        `Pavg: ${AppUtils.round(s.pAvg, 2)}`,
        `Pmin: ${AppUtils.round(s.pMin, 2)}`,
        `Pmax: ${AppUtils.round(s.pMax, 2)}`,
        `Qo avg: ${AppUtils.round(s.qoAvg, 2)}`,
        `GOR avg: ${AppUtils.round(s.gorAvg, 4)}`,
        `WC avg: ${AppUtils.round(100 * s.wcAvg, 2)}%`,
        `Cum Oil: ${AppUtils.round(s.cumulativeOil, 2)}`,
        `Cum Gas: ${AppUtils.round(s.cumulativeGas, 2)}`,
        `Pr est: ${AppUtils.round(s.reservoirPressure, 2)}`
      ].join("\n");

      this.ui.productionSummary.textContent = [
        "Production Summary",
        `Active Well: ${this.projectManager.getActiveWell().name}`,
        `Reservoir Pressure Estimate: ${AppUtils.round(s.reservoirPressure, 2)} psia`,
        `Cumulative Oil: ${AppUtils.round(s.cumulativeOil, 2)} bbl`,
        `Cumulative Water: ${AppUtils.round(s.cumulativeWater, 2)} bbl`,
        `Cumulative Gas: ${AppUtils.round(s.cumulativeGas, 2)} mscf`,
        "Material Balance model active.",
        "Rate transient diagnostics updated."
      ].join("\n");
    }

    renderSummaryPanels() {
      const ai = this.currentAi;
      if (!ai || !ai.ok) {
        this.ui.aiSummary.textContent = ai ? ai.message : "No AI output.";
        return;
      }
      const f30 = ai.forecast30[ai.forecast30.length - 1];
      const f90 = ai.forecast90[ai.forecast90.length - 1];
      this.ui.aiSummary.textContent = [
        ai.message,
        `30-day Oil: ${AppUtils.round(f30.oil, 2)}`,
        `90-day Oil: ${AppUtils.round(f90.oil, 2)}`,
        `30-day Pressure: ${AppUtils.round(f30.pressure, 2)}`,
        `90-day Pressure: ${AppUtils.round(f90.pressure, 2)}`,
        `Pressure anomalies: ${ai.pressureAlerts.length}`,
        `Outliers: ${ai.outliers.length}`,
        `Trend: ${ai.declineClass}`,
        `Decline Acceleration: ${ai.declineAcceleration}`
      ].join("\n");
    }

    renderSolverPanel() {
      const s = this.currentSolver;
      if (!s || !s.ok) {
        this.ui.solverSummary.textContent = s ? s.message : "Solver idle.";
        return;
      }

      this.ui.solverSummary.textContent = [
        `Decline Model: ${s.model}`,
        `R2: ${AppUtils.round(s.r2, 4)}`,
        `RMSE: ${AppUtils.round(s.rmse, 4)}`,
        `qi: ${AppUtils.round(s.qi, 4)}`,
        `Di: ${AppUtils.round(s.di, 6)}`,
        `b: ${AppUtils.round(s.b, 4)}`,
        `EUR: ${AppUtils.round(s.eur, 2)} bbl`,
        `Pressure Trend: ${s.pressureBuild}`,
        `Solved Pr: ${AppUtils.round(s.solvedReservoirPressure, 2)}`
      ].join("\n");
    }

    renderAiPanel() {
      const ai = this.currentAi;
      if (!ai || !ai.ok) {
        this.ui.aiPanelSummary.textContent = ai ? ai.message : "AI idle.";
        return;
      }
      const last90 = ai.forecast90[ai.forecast90.length - 1];
      this.ui.aiPanelSummary.textContent = [
        `90-Day Forecast: ${AppUtils.round(last90.oil, 2)} bbl/d`,
        `Trend: ${ai.declineClass}`,
        `GOR slope: ${AppUtils.round(ai.gorReg.slope, 6)}`,
        `Pressure projection: ${AppUtils.round(last90.pressure, 2)} psia`,
        `Pressure alerts: ${ai.pressureAlerts.length}`
      ].join("\n");
    }

    renderLogs() {
      this.ui.activityLog.textContent = this.projectManager.project.activity.slice(-300).join("\n");
      this.ui.errorLog.textContent = this.projectManager.project.errors.slice(-300).join("\n");
    }

    renderCharts() {
      const cfg = this.projectManager.project.config;
      const activeWell = this.projectManager.getActiveWell();
      const rows = (this.currentProcessed && this.currentProcessed.rows) ? this.currentProcessed.rows : [];
      const allWells = cfg.overlayWells ? this.projectManager.project.wells : [activeWell];

      const overlayPressureSeries = [];
      const overlayRateSeries = [];
      allWells.forEach((w, idx) => {
        const processed = w.id === activeWell.id ? this.currentProcessed : this.dataEngine.processWell(w, cfg);
        const colorP = ["#45c0ba", "#f3c96b", "#7bb2f7", "#d47ceb"][idx % 4];
        overlayPressureSeries.push({ name: `${w.name} P`, axis: "left", color: colorP, points: processed.rows.map((r) => ({ x: r.time_display, y: r.pressure_psia })) });
        overlayRateSeries.push({ name: `${w.name} Oil`, axis: "left", color: colorP, dashed: idx > 0, points: processed.rows.map((r) => ({ x: r.time_display, y: r.oil_rate_bopd })) });
      });

      if (this.activeTab === "fieldTab") this.chartEngine.render(this.ui.mainChart, {
        title: "Pressure and Rate vs Time",
        series: overlayPressureSeries.concat(overlayRateSeries.map((s) => ({
          name: s.name,
          axis: "right",
          color: s.color,
          dashed: true,
          points: s.points
        })))
      }, { logScale: cfg.logScale });

      if (this.activeTab === "summaryTab") this.chartEngine.render(this.ui.hornerChart, {
        title: "Horner Plot",
        series: [{ name: "Horner", axis: "left", color: "#7ad0cc", points: rows.filter((r) => r.horner_x != null).map((r) => ({ x: r.horner_x, y: r.pressure_psia })) }]
      }, { logScale: false });

      if (this.activeTab === "rtaTab") this.chartEngine.render(this.ui.diagnosticChart, {
        title: "Diagnostic Log-Log",
        series: [{ name: "RTA", axis: "left", color: "#f3c96b", points: rows.map((r) => ({ x: Math.max(1e-6, r.rta_t), y: Math.max(1e-6, r.rta_dqdt) })) }]
      }, { logScale: true });

      const declineSeries = [{ name: "Actual Oil", axis: "left", color: "#45c0ba", points: rows.map((r) => ({ x: r.time_min / 1440, y: r.oil_rate_bopd })) }];
      if (this.currentSolver && this.currentSolver.ok) {
        declineSeries.push({ name: "Decline Fit", axis: "left", color: "#f3c96b", dashed: true, points: this.currentSolver.fitSeries.map((p) => ({ x: p.t, y: p.q })) });
        declineSeries.push({ name: "Forecast", axis: "left", color: "#7bb2f7", dashed: true, points: this.currentSolver.forecast.map((p) => ({ x: p.t, y: p.q })) });
      }
      if (this.activeTab === "declineTab") this.chartEngine.render(this.ui.declineChart, { title: "Decline Curve", series: declineSeries }, { logScale: cfg.logScale });

      const aiSeries = [];
      if (this.currentAi && this.currentAi.ok) {
        aiSeries.push({ name: "AI 30d Oil", axis: "left", color: "#f3c96b", points: this.currentAi.forecast30.map((f) => ({ x: f.day, y: f.oil })) });
        aiSeries.push({ name: "AI 90d Oil", axis: "left", color: "#45c0ba", points: this.currentAi.forecast90.map((f) => ({ x: f.day, y: f.oil })) });
        aiSeries.push({ name: "AI Pressure", axis: "right", color: "#b08eff", points: this.currentAi.forecast90.map((f) => ({ x: f.day, y: f.pressure })) });
      }
      if (this.activeTab === "aiTab") this.chartEngine.render(this.ui.forecastChart, { title: "AI Forecast", series: aiSeries }, { logScale: false });
    }

    exportActiveChart() {
      const map = {
        fieldTab: this.ui.mainChart,
        summaryTab: this.ui.hornerChart,
        rtaTab: this.ui.diagnosticChart,
        declineTab: this.ui.declineChart,
        aiTab: this.ui.forecastChart
      };
      const canvas = map[this.activeTab] || this.ui.mainChart;
      this.chartEngine.export(canvas, `${this.activeTab}.png`);
      this.log(`Chart exported: ${this.activeTab}.png`);
    }

    onGridEdit(row, key, value) {
      const well = this.projectManager.getActiveWell();
      const idx = well.timeSeries.findIndex((r) => Math.abs(r.time_min - row.time_min) < 1e-9);
      if (idx < 0) return;
      if (!this.validateCell(key, value)) {
        this.pushError(`Validation failed for ${key}: ${value}`);
        return;
      }
      well.timeSeries[idx][key] = value;
      this.recomputeAll("Ready");
      this.renderAll();
    }

    validateCell(key, value) {
      if (!Number.isFinite(value)) return false;
      if (key === "time_min") return value >= 0;
      if (key.indexOf("pressure") >= 0) return value >= 0 && value < 20000;
      if (key.indexOf("rate") >= 0) return value >= 0 && value < 100000;
      return true;
    }

    startAcquisition() {
      if (this.timer) return;
      if (!this.projectManager.project.config.simulationConfigured) {
        this.projectManager.project.config.simulationConfigured = true;
        this.dataEngine.ensureProfiles(this.projectManager.project.config);
      }
      this.configEngine.updateFromUi(this.projectManager.project.config, this.ui);
      const interval = Math.max(200, this.projectManager.project.config.sampleIntervalSec * 1000);
      const tick = () => {
        this.safe(() => {
          const well = this.projectManager.getActiveWell();
          const point = this.dataEngine.simulateNextPoint(well, this.projectManager.project.config);
          well.timeSeries.push(point);
          this.recomputeAll("Acquiring");
          this.renderAll();
        });
      };
      tick();
      this.timer = setInterval(tick, interval);
      this.ui.btnStart.disabled = true;
      this.ui.btnStop.disabled = false;
      this.setStatus("Acquiring", 0);
      this.log(`Acquisition started (interval: ${this.projectManager.project.config.sampleIntervalSec}s).`);
    }

    stopAcquisition() {
      if (!this.timer) return;
      clearInterval(this.timer);
      this.timer = null;
      this.ui.btnStart.disabled = false;
      this.ui.btnStop.disabled = true;
      this.setStatus("Ready", 0);
      this.log("Acquisition stopped.");
    }

    manualInput() {
      const text = prompt("Enter: time_min,pressure,oil,gas,water,temp", "0,3200,520,160,200,166");
      if (!text) return;
      const p = text.split(",").map((x) => AppUtils.num(x.trim(), NaN));
      if (p.length < 6 || p.some((x) => !Number.isFinite(x))) throw new Error("Invalid manual input format.");
      const row = {
        time_min: p[0],
        wellhead_pressure_psia: p[1],
        pressure_psia: p[1],
        oil_rate_bopd: p[2],
        gas_rate_mscfd: p[3],
        water_rate: p[4],
        water_rate_bopd: p[4],
        wellhead_temp_f: p[5],
        temperature_f: p[5],
        choke_size: 24,
        sepline_pressure: Math.max(5, p[1] * 0.65),
        separator_pressure: Math.max(5, p[1] * 0.4),
        separator_temperature: Math.max(1, p[5] - 8),
        differential_pressure_dp: Math.max(0.1, p[3] / 20),
        orifice_plate_size: 2.5,
        shrinkage_factor: 0.92,
        api_gravity: 35,
        api_temperature: p[5]
      };
      this.projectManager.getActiveWell().timeSeries.push(row);
      this.projectManager.getActiveWell().timeSeries.sort((a, b) => a.time_min - b.time_min);
      this.recomputeAll("Ready");
      this.renderAll();
      this.log("Manual data row added.");
    }

    runSolverOnly() {
      this.setStatus("Solving", 0);
      const t0 = performance.now();
      this.currentSolver = this.solverEngine.solve(this.currentProcessed ? this.currentProcessed.rows : []);
      if (this.currentSolver.ok) this.log("Solver executed.");
      const dt = performance.now() - t0;
      this.setStatus("Ready", dt);
      this.renderSolverPanel();
      this.renderCharts();
      this.autosave();
    }

    runAiOnly() {
      this.setStatus("Forecasting", 0);
      const t0 = performance.now();
      this.currentAi = this.aiEngine.run(this.currentProcessed ? this.currentProcessed.rows : []);
      if (this.currentAi.ok) this.log("AI forecast executed.");
      const dt = performance.now() - t0;
      this.setStatus("Ready", dt);
      this.renderSummaryPanels();
      this.renderAiPanel();
      this.renderCharts();
      this.autosave();
    }

    loadDemo() {
      this.stopAcquisition();
      if (!this.projectManager.project.config.simulationConfigured) {
        this.projectManager.project.config.simulationConfigured = true;
        this.dataEngine.ensureProfiles(this.projectManager.project.config);
      }
      const well = this.projectManager.getActiveWell();
      well.timeSeries = [];
      for (let i = 0; i < 10000; i++) {
        well.timeSeries.push(this.dataEngine.simulateNextPoint(well, this.projectManager.project.config));
      }
      this.recomputeAll("Ready");
      this.renderAll();
      this.log("Demo data loaded (10,000 rows)." );
    }

    buildSimulationWizard() {
      this.ui.wizardBody.innerHTML = "";
      const defs = this.dataEngine.getSimulationFieldDefinitions();
      const cfg = this.projectManager.project.config;
      this.dataEngine.ensureProfiles(cfg);
      defs.forEach((d) => {
        const p = cfg.simulationProfiles[d.key] || this.dataEngine.defaultProfile(d);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${d.label}</td>
          <td><select data-k="${d.key}" data-f="mode"><option value="range"${p.mode === "range" ? " selected" : ""}>Range</option><option value="avgstd"${p.mode === "avgstd" ? " selected" : ""}>Avg/Std</option></select></td>
          <td><input data-k="${d.key}" data-f="min" type="number" value="${p.min}"></td>
          <td><input data-k="${d.key}" data-f="max" type="number" value="${p.max}"></td>
          <td><input data-k="${d.key}" data-f="avg" type="number" value="${p.avg}"></td>
          <td><input data-k="${d.key}" data-f="std" type="number" value="${p.std}"></td>
          <td><select data-k="${d.key}" data-f="trend"><option value="static"${p.trend === "static" ? " selected" : ""}>Static</option><option value="declining"${p.trend === "declining" ? " selected" : ""}>Declining</option><option value="increasing"${p.trend === "increasing" ? " selected" : ""}>Increasing</option><option value="random"${p.trend === "random" ? " selected" : ""}>Random</option><option value="step"${p.trend === "step" ? " selected" : ""}>Step</option></select></td>
          <td><input data-k="${d.key}" data-f="noise" type="number" step="0.01" value="${p.noise}"></td>
          <td><input data-k="${d.key}" data-f="correlation" type="number" step="0.01" value="${p.correlation}"></td>
        `;
        this.ui.wizardBody.appendChild(tr);
      });
    }

    openSimulationWizard(pendingAction) {
      this.pendingAction = pendingAction || null;
      this.buildSimulationWizard();
      this.ui.simWizard.showModal();
    }

    applySimulationWizard() {
      const cfg = this.projectManager.project.config;
      cfg.simulationProfiles = cfg.simulationProfiles || {};
      const inputs = this.ui.wizardBody.querySelectorAll("[data-k][data-f]");
      inputs.forEach((el) => {
        const k = el.dataset.k;
        const f = el.dataset.f;
        if (!cfg.simulationProfiles[k]) cfg.simulationProfiles[k] = {};
        cfg.simulationProfiles[k][f] = (el.tagName === "SELECT") ? el.value : AppUtils.num(el.value, 0);
      });
      cfg.simulationConfigured = true;
      this.ui.simWizard.close();
      this.log("Simulation setup applied.");
      this.autosave();
      if (this.pendingAction === "start") this.startAcquisition();
      if (this.pendingAction === "demo") this.loadDemo();
      this.pendingAction = null;
    }

    validateEngineeringCell(row, key) {
      const v = AppUtils.num(row[key], 0);
      if (key.includes("pressure") || key === "wellhead_pressure_psia") return v >= 0;
      if (key.includes("rate") || key.includes("cumulative")) return v >= 0;
      if (key === "water_cut") return v >= 0 && v <= 1;
      if (key === "ogr") return v >= 0;
      const oil = AppUtils.num(row.oil_rate_bopd, 0);
      const gas = AppUtils.num(row.gas_rate_mscfd, 0);
      if (key === "total_gor") {
        const expected = gas / Math.max(1e-6, oil);
        return Math.abs(v - expected) < Math.max(0.05, Math.abs(expected) * 0.2);
      }
      return true;
    }

    refreshWellSelector() {
      const activeId = this.projectManager.project.activeWell;
      this.ui.wellSelector.innerHTML = "";
      this.projectManager.project.wells.forEach((w) => {
        const opt = document.createElement("option");
        opt.value = w.id;
        opt.textContent = `${w.name} (${w.timeSeries.length})`;
        if (w.id === activeId) opt.selected = true;
        this.ui.wellSelector.appendChild(opt);
      });
    }

    parseCsv(text) {
      const lines = text.split(/\r?\n/).filter((l) => l.trim());
      if (lines.length < 2) return [];
      const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
      const keyMap = {
        time_min: ["time_min", "time", "minutes", "t"],
        pressure_psia: ["pressure_psia", "pressure", "pwf", "p", "wellhead_pressure_psia"],
        oil_rate_bopd: ["oil_rate_bopd", "oil", "oil_bopd", "qo"],
        gas_rate_mscfd: ["gas_rate_mscfd", "gas", "gas_mscfd", "qg"],
        water_rate_bopd: ["water_rate_bopd", "water", "water_bopd", "qw", "water_rate"],
        temperature_f: ["temperature_f", "temp_f", "temp", "temperature", "wellhead_temp_f"]
      };

      const idx = {};
      Object.keys(keyMap).forEach((k) => {
        idx[k] = headers.findIndex((h) => keyMap[k].includes(h));
      });

      const out = [];
      for (let i = 1; i < lines.length; i++) {
        const c = lines[i].split(",").map((x) => x.trim());
        const p = AppUtils.num(c[idx.pressure_psia], 0);
        const tF = AppUtils.num(c[idx.temperature_f], 0);
        out.push({
          time_min: AppUtils.num(c[idx.time_min], i - 1),
          pressure_psia: p,
          wellhead_pressure_psia: p,
          oil_rate_bopd: AppUtils.num(c[idx.oil_rate_bopd], 0),
          gas_rate_mscfd: AppUtils.num(c[idx.gas_rate_mscfd], 0),
          water_rate_bopd: AppUtils.num(c[idx.water_rate_bopd], 0),
          water_rate: AppUtils.num(c[idx.water_rate_bopd], 0),
          temperature_f: tF,
          wellhead_temp_f: tF
        });
      }
      return out;
    }

    importCsv(evt) {
      const file = evt.target.files && evt.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        this.safe(() => {
          const rows = this.parseCsv(String(reader.result || ""));
          const well = this.projectManager.getActiveWell();
          Array.prototype.push.apply(well.timeSeries, rows);
          well.timeSeries.sort((a, b) => a.time_min - b.time_min);
          this.recomputeAll("Ready");
          this.renderAll();
          this.log(`Imported CSV rows: ${rows.length}`);
        });
      };
      reader.readAsText(file);
    }

    exportCsvFiltered() {
      const rows = this.currentProcessed ? this.currentProcessed.rows : [];
      const f = {
        tMin: AppUtils.optNum(this.ui.expTimeMin.value),
        tMax: AppUtils.optNum(this.ui.expTimeMax.value),
        pMin: AppUtils.optNum(this.ui.expPressureMin.value),
        pMax: AppUtils.optNum(this.ui.expPressureMax.value),
        oMin: AppUtils.optNum(this.ui.expOilMin.value),
        oMax: AppUtils.optNum(this.ui.expOilMax.value)
      };
      const filtered = rows.filter((r) => {
        if (f.tMin != null && r.time_min < f.tMin) return false;
        if (f.tMax != null && r.time_min > f.tMax) return false;
        if (f.pMin != null && r.pressure_psia < f.pMin) return false;
        if (f.pMax != null && r.pressure_psia > f.pMax) return false;
        if (f.oMin != null && r.oil_rate_bopd < f.oMin) return false;
        if (f.oMax != null && r.oil_rate_bopd > f.oMax) return false;
        return true;
      });

      const cols = [
        "time_min", "pressure_psia", "oil_rate_bopd", "gas_rate_mscfd", "water_rate_bopd", "temperature_f",
        "water_cut", "gor", "delta_p", "pi", "cum_oil_bbl", "cum_gas_mscf", "cum_water_bbl"
      ];
      AppUtils.downloadText("filtered_export.csv", AppUtils.toCSV(filtered, cols), "text/csv");
      this.log(`Exported CSV rows: ${filtered.length}`);
    }

    saveProject() {
      this.projectManager.project.notes = this.ui.projectNotes.value;
      AppUtils.downloadText("project_fieldnotes_pro.json", this.projectManager.exportJSON(), "application/json");
      this.log("Project saved.");
      this.autosave();
    }

    loadProjectFromFile() {
      const f = this.ui.projectFile.files && this.ui.projectFile.files[0];
      if (!f) throw new Error("Select project file first.");
      const reader = new FileReader();
      reader.onload = () => {
        this.safe(() => {
          this.stopAcquisition();
          this.projectManager.importJSON(String(reader.result || "{}"));
          this.configEngine.ensure(this.projectManager.project);
          this.dataEngine.ensureProfiles(this.projectManager.project.config);
          this.configEngine.applyToUi(this.projectManager.project.config, this.ui);
          this.buildSimulationWizard();
          this.refreshWellSelector();
          this.recomputeAll("Ready");
          this.renderAll();
          this.log("Project loaded.");
        });
      };
      reader.readAsText(f);
    }

    resetProject() {
      this.stopAcquisition();
      this.projectManager.project = this.projectManager.createNewProject();
      this.configEngine.ensure(this.projectManager.project);
      this.dataEngine.ensureProfiles(this.projectManager.project.config);
      this.configEngine.applyToUi(this.projectManager.project.config, this.ui);
      this.buildSimulationWizard();
      this.recomputeAll("Ready");
      this.renderAll();
      this.log("Project reset.");
      this.autosave();
    }

    setStatus(text, perfMs) {
      this.ui.statusMain.textContent = text;
      this.ui.statusMain.classList.remove("ready", "solving", "error");
      if (text === "Ready") this.ui.statusMain.classList.add("ready");
      if (text === "Solving" || text === "Forecasting") this.ui.statusMain.classList.add("solving");
      this.ui.statusPerf.textContent = `${AppUtils.round(perfMs || 0, 2)} ms`;
    }

    log(msg) {
      const stamp = new Date().toLocaleString();
      this.projectManager.project.activity.push(`${stamp} | ${msg}`);
      if (this.projectManager.project.activity.length > 500) {
        this.projectManager.project.activity = this.projectManager.project.activity.slice(-500);
      }
      this.renderLogs();
    }

    pushError(msg) {
      const stamp = new Date().toLocaleString();
      this.projectManager.project.errors.push(`${stamp} | ${msg}`);
      if (this.projectManager.project.errors.length > 500) {
        this.projectManager.project.errors = this.projectManager.project.errors.slice(-500);
      }
      this.ui.statusMain.textContent = "Error";
      this.ui.statusMain.classList.add("error");
      this.renderLogs();
    }

    safe(fn) {
      try { fn(); }
      catch (err) { this.pushError(err && err.message ? err.message : String(err)); }
    }
  }

  window.addEventListener("DOMContentLoaded", function () {
    console.log("✓ DOMContentLoaded fired");
    // If ProjectManager script failed to load, provide a minimal fallback so UI can still initialize
    if (typeof window.ProjectManager === 'undefined') {
      console.warn('ProjectManager is not defined — injecting fallback stub to allow app to run');
      // Minimal fallback implementation
      window.ProjectManager = class {
        constructor() { this.project = this.createNewProject(); }
        createNewProject() { return { config: { unitSystem: 'field', sampleIntervalSec: 5, enableAi: false, enableSolver: false, overlayWells: false, logScale: false }, wells: [{ id: 'well_stub', name: 'WellA_1', timeSeries: [] }], activeWell: 'well_stub', results: {}, aiResults: {}, notes: '', activity: [], errors: [] }; }
        getActiveWell() { return this.project.wells.find(w => w.id === this.project.activeWell) || this.project.wells[0] || null; }
        addWell(name) { const w = { id: `well_${Math.random().toString(36).slice(2,8)}`, name: name || 'Well', timeSeries: [] }; this.project.wells.push(w); this.project.activeWell = w.id; return w; }
        removeActiveWell() { if (this.project.wells.length>1) this.project.wells.pop(); }
        setActiveWell(id) { if (this.project.wells.some(w=>w.id===id)) this.project.activeWell = id; }
        saveToLocalStorage() { try { localStorage.setItem('fieldnotes_stub', JSON.stringify(this.project)); } catch(e){} }
        loadFromLocalStorage() { return false; }
        exportJSON() { return JSON.stringify(this.project, null, 2); }
        importJSON(text) { try { const obj = JSON.parse(text); this.project = obj; } catch(e){} }
      };
      // show message on-screen too
      try { const el = document.querySelector('#statusMain'); if (el) el.textContent = 'ProjectManager fallback active'; } catch(e){}
    }

    try {
      const app = new AppController();
      window.AppControllerInstance = app;
      console.log("✓ AppController instantiated");
      app.init();
      console.log("✓ App initialized successfully");
    } catch (err) {
      console.error("❌ Initialization failed:", err);
      alert("App initialization failed. Check browser console for details:\n" + err.message);
    }
  });
})();
