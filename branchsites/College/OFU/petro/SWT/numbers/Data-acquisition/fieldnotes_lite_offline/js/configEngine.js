(function () {
  "use strict";

  class ConfigEngine {
    constructor() {
      this.defaults = {
        sampleIntervalSec: 5,
        noiseLevel: 0.3,
        smoothing: 3,
        downsample: 1,
        timeUnit: "min",
        unitSystem: "field",
        enableAi: true,
        enableSolver: true,
        logScale: false,
        overlayWells: true,
        pressureDropR: 0.025,
        initialReservoirPressure: 3300,
        materialBalanceCtV: 80000,
        bo: 1.2,
        simulationConfigured: true,
        simulationProfiles: {}
      };
    }

    ensure(project) {
      project.config = Object.assign({}, this.defaults, project.config || {});
      this.validate(project.config);
      return project.config;
    }

    updateFromUi(config, el) {
      config.sampleIntervalSec = AppUtils.clamp(AppUtils.num(el.cfgSampleInterval.value, 5), 1, 3600);
      config.noiseLevel = AppUtils.clamp(AppUtils.num(el.cfgNoiseLevel.value, 0.3), 0, 5);
      config.smoothing = AppUtils.clamp(Math.round(AppUtils.num(el.cfgSmoothing.value, 3)), 1, 50);
      config.downsample = AppUtils.clamp(Math.round(AppUtils.num(el.cfgDownsample.value, 1)), 1, 200);
      config.timeUnit = el.cfgTimeUnit.value;
      config.unitSystem = el.cfgUnitSystem.value;
      config.enableAi = el.cfgEnableAi.checked;
      config.enableSolver = el.cfgEnableSolver.checked;
      config.logScale = el.cfgLogScale.checked;
      config.overlayWells = el.cfgOverlayWells.checked;
      this.validate(config);
      return config;
    }

    applyToUi(config, el) {
      el.cfgSampleInterval.value = config.sampleIntervalSec;
      el.cfgNoiseLevel.value = config.noiseLevel;
      el.cfgSmoothing.value = config.smoothing;
      el.cfgDownsample.value = config.downsample;
      el.cfgTimeUnit.value = config.timeUnit;
      el.cfgUnitSystem.value = config.unitSystem;
      el.cfgEnableAi.checked = !!config.enableAi;
      el.cfgEnableSolver.checked = !!config.enableSolver;
      el.cfgLogScale.checked = !!config.logScale;
      el.cfgOverlayWells.checked = !!config.overlayWells;
    }

    validate(config) {
      if (!Number.isFinite(config.sampleIntervalSec) || config.sampleIntervalSec <= 0) throw new Error("Invalid sample interval.");
      if (!Number.isFinite(config.noiseLevel) || config.noiseLevel < 0) throw new Error("Invalid noise level.");
      if (!["min", "hr", "day"].includes(config.timeUnit)) throw new Error("Invalid time unit.");
      if (!["field", "metric"].includes(config.unitSystem)) throw new Error("Invalid unit system.");
    }
  }

  window.ConfigEngine = ConfigEngine;
})();
