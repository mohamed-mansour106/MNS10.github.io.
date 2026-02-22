(function () {
  "use strict";

  class DataEngine {
    constructor() {
      this.fieldDefs = [
        { key: "choke_size", label: "Choke Size", min: 8, max: 64 },
        { key: "wellhead_pressure_psia", label: "Wellhead Pressure (psia)", min: 500, max: 5000 },
        { key: "wellhead_temp_f", label: "Wellhead Temperature (F)", min: 40, max: 260 },
        { key: "sepline_pressure", label: "Sepline Pressure", min: 50, max: 2000 },
        { key: "separator_pressure", label: "Separator Pressure", min: 20, max: 1500 },
        { key: "separator_temperature", label: "Separator Temperature", min: 40, max: 200 },
        { key: "differential_pressure_dp", label: "Differential Pressure (DP)", min: 0.1, max: 800 },
        { key: "orifice_plate_size", label: "Orifice Plate Size", min: 0.5, max: 8 },
        { key: "gas_rate_mscfd", label: "Gas Rate (mscf/d)", min: 10, max: 5000 },
        { key: "gas_rate_60f", label: "Gas Rate @60F", min: 10, max: 5000 },
        { key: "gas_cumulative", label: "Gas Cumulative", min: 0, max: 1e7 },
        { key: "total_gas_rate", label: "Total Gas Rate", min: 10, max: 10000 },
        { key: "total_gas_cumulative", label: "Total Gas Cumulative", min: 0, max: 2e7 },
        { key: "oil_rate_bopd", label: "Oil Rate (bopd)", min: 5, max: 5000 },
        { key: "oil_rate_60f", label: "Oil Rate @60F", min: 5, max: 5000 },
        { key: "combined_oil_rate_interval", label: "Combined Oil Rate Interval", min: 5, max: 5000 },
        { key: "api_gravity", label: "API Gravity", min: 8, max: 60 },
        { key: "api_temperature", label: "API Temperature", min: 40, max: 220 },
        { key: "api_60f", label: "API @60F", min: 8, max: 60 },
        { key: "shrinkage_factor", label: "Shrinkage Factor", min: 0.6, max: 1.2 },
        { key: "water_rate", label: "Water Rate", min: 0, max: 5000 },
        { key: "water_cut", label: "Water Cut", min: 0, max: 1 },
        { key: "gor1", label: "GOR1", min: 0, max: 20000 },
        { key: "gor2", label: "GOR2", min: 0, max: 20000 },
        { key: "total_gor", label: "Total GOR", min: 0, max: 20000 },
        { key: "ogr", label: "OGR", min: 0, max: 10 }
      ];
    }

    getSimulationFieldDefinitions() {
      return this.fieldDefs.slice();
    }

    defaultProfile(def) {
      return {
        mode: "range",
        min: def.min,
        max: def.max,
        avg: (def.min + def.max) / 2,
        std: Math.max(1e-6, (def.max - def.min) / 8),
        trend: "static",
        noise: 0.2,
        correlation: 0.5
      };
    }

    ensureProfiles(config) {
      if (!config.simulationProfiles) config.simulationProfiles = {};
      this.fieldDefs.forEach((def) => {
        if (!config.simulationProfiles[def.key]) config.simulationProfiles[def.key] = this.defaultProfile(def);
      });
    }

    simulateNextPoint(well, config) {
      this.ensureProfiles(config);
      const idx = well.timeSeries.length;
      const last = idx ? well.timeSeries[idx - 1] : null;
      const tMin = last ? last.time_min + config.sampleIntervalSec / 60 : 0;

      const g = (k) => this.generateField(config.simulationProfiles[k], idx);

      const choke = Math.max(1e-6, g("choke_size"));
      const orifice = Math.max(0.1, g("orifice_plate_size"));

      let oil = Math.max(0.1, g("oil_rate_bopd"));
      let gas = Math.max(0.1, g("gas_rate_mscfd"));
      let water = Math.max(0, g("water_rate"));

      const chokeFactor = 0.6 + 0.4 * (choke / 64);
      const gasCorr = config.simulationProfiles.gas_rate_mscfd.correlation;
      gas = Math.max(0.1, gas * (1 + gasCorr * (chokeFactor - 0.5)));

      const baseWellheadP = Math.max(50, g("wellhead_pressure_psia"));
      const declineP = Math.max(20, baseWellheadP - 0.08 * idx - 0.02 * oil);

      const wellheadTemp = Math.max(1, g("wellhead_temp_f"));
      const sepP = Math.max(10, Math.min(declineP - 5, g("separator_pressure")));
      const sepT = Math.max(1, g("separator_temperature"));
      const seplineP = Math.max(10, Math.min(declineP - 2, g("sepline_pressure")));

      const dpBase = g("differential_pressure_dp");
      const dpFromOrifice = Math.max(0, 0.008 * gas / (orifice * orifice));
      const dp = Math.max(0, dpBase * 0.5 + dpFromOrifice * 0.5);

      const shrink = AppUtils.clamp(g("shrinkage_factor"), 0.4, 1.5);
      const oil60 = oil * shrink;
      const gas60 = gas * ((wellheadTemp + 460) / 520);

      const api = Math.max(1, g("api_gravity"));
      const apiTemp = g("api_temperature");
      const api60 = api + 0.001 * (apiTemp - 60);

      const waterCut = water / Math.max(1e-6, oil + water);
      const gor = gas / Math.max(1e-6, oil);
      const ogr = oil / Math.max(1e-6, gas);

      const point = {
        time_min: AppUtils.round(tMin, 5),
        choke_size: AppUtils.round(choke, 5),
        wellhead_pressure_psia: AppUtils.round(declineP, 5),
        wellhead_temp_f: AppUtils.round(wellheadTemp, 5),
        sepline_pressure: AppUtils.round(seplineP, 5),
        separator_pressure: AppUtils.round(sepP, 5),
        separator_temperature: AppUtils.round(sepT, 5),
        differential_pressure_dp: AppUtils.round(dp, 5),
        orifice_plate_size: AppUtils.round(orifice, 5),

        gas_rate_mscfd: AppUtils.round(gas, 5),
        gas_rate_60f: AppUtils.round(gas60, 5),
        gas_cumulative: last ? last.gas_cumulative : 0,
        total_gas_rate: AppUtils.round(gas, 5),
        total_gas_cumulative: last ? last.total_gas_cumulative : 0,

        oil_rate_bopd: AppUtils.round(oil, 5),
        oil_rate_60f: AppUtils.round(oil60, 5),
        combined_oil_rate_interval: AppUtils.round(oil, 5),
        api_gravity: AppUtils.round(api, 5),
        api_temperature: AppUtils.round(apiTemp, 5),
        api_60f: AppUtils.round(api60, 5),
        shrinkage_factor: AppUtils.round(shrink, 5),

        water_rate: AppUtils.round(water, 5),
        water_cut: AppUtils.round(waterCut, 8),

        gor1: AppUtils.round(gor, 8),
        gor2: AppUtils.round(gor, 8),
        total_gor: AppUtils.round(gor, 8),
        ogr: AppUtils.round(ogr, 8)
      };

      if (last) {
        const dtDay = Math.max(0, (point.time_min - last.time_min) / 1440);
        point.gas_cumulative = last.gas_cumulative + 0.5 * (point.gas_rate_mscfd + last.gas_rate_mscfd) * dtDay;
        point.total_gas_cumulative = last.total_gas_cumulative + 0.5 * (point.total_gas_rate + last.total_gas_rate) * dtDay;
      }

      return point;
    }

    generateField(profile, i) {
      const p = profile || { mode: "range", min: 0, max: 1, avg: 0.5, std: 0.1, trend: "static", noise: 0.2 };
      let base;
      if (p.mode === "avgstd") base = AppUtils.num(p.avg, 0) + AppUtils.num(p.std, 1) * AppUtils.gaussian();
      else {
        const mn = AppUtils.num(p.min, 0);
        const mx = AppUtils.num(p.max, mn + 1);
        base = mn + Math.random() * (mx - mn);
      }

      const trend = p.trend || "static";
      if (trend === "declining") base *= Math.max(0.01, 1 - 0.0015 * i);
      else if (trend === "increasing") base *= (1 + 0.0015 * i);
      else if (trend === "step") {
        const step = i > 120 ? 1.25 : 1;
        base *= step;
      } else if (trend === "random") {
        base += AppUtils.num(p.std, Math.max(1, Math.abs(base * 0.1))) * AppUtils.gaussian();
      }

      const noiseSigma = Math.max(0, AppUtils.num(p.noise, 0.2));
      base += noiseSigma * Math.max(1, Math.abs(base)) * 0.04 * AppUtils.gaussian();

      if (p.mode === "range") {
        const mn = AppUtils.num(p.min, -Infinity);
        const mx = AppUtils.num(p.max, Infinity);
        base = AppUtils.clamp(base, mn, mx);
      }

      return base;
    }

    processWell(well, config) {
      const raw = well.timeSeries || [];
      if (!raw.length) return this.emptyResult();
      const rows = raw.slice().sort((a, b) => a.time_min - b.time_min);

      for (let i = 0; i < rows.length; i++) {
        const r = rows[i];
        r.pressure_psia = r.wellhead_pressure_psia;
        r.gas_rate_mscfd = AppUtils.num(r.gas_rate_mscfd, 0);
        r.water_rate_bopd = AppUtils.num(r.water_rate, 0);
      }

      const p = AppUtils.movingAverage(rows.map((r) => AppUtils.num(r.wellhead_pressure_psia, 0)), config.smoothing);
      const qo = AppUtils.movingAverage(rows.map((r) => AppUtils.num(r.oil_rate_bopd, 0)), config.smoothing);
      const qg = AppUtils.movingAverage(rows.map((r) => AppUtils.num(r.gas_rate_mscfd, 0)), config.smoothing);
      const qw = AppUtils.movingAverage(rows.map((r) => AppUtils.num(r.water_rate, 0)), config.smoothing);

      const out = [];
      const step = Math.max(1, config.downsample);
      let cumOil = 0;
      let cumGas = 0;
      let cumWater = 0;

      for (let i = 0; i < rows.length; i += step) {
        const src = Object.assign({}, rows[i]);
        src.wellhead_pressure_psia = p[i];
        src.oil_rate_bopd = qo[i];
        src.gas_rate_mscfd = qg[i];
        src.water_rate = qw[i];
        src.water_rate_bopd = qw[i];

        src.water_cut = src.water_rate / Math.max(1e-6, src.oil_rate_bopd + src.water_rate);
        src.gor1 = src.gas_rate_mscfd / Math.max(1e-6, src.oil_rate_bopd);
        src.gor2 = src.gor1;
        src.total_gor = src.gor1;
        src.ogr = src.oil_rate_bopd / Math.max(1e-6, src.gas_rate_mscfd);
        src.oil_rate_60f = src.oil_rate_bopd * AppUtils.num(src.shrinkage_factor, 1);
        src.gas_rate_60f = src.gas_rate_mscfd * ((AppUtils.num(src.wellhead_temp_f, 60) + 460) / 520);
        src.api_60f = AppUtils.num(src.api_gravity, 0) + 0.001 * (AppUtils.num(src.api_temperature, 60) - 60);
        src.differential_pressure_dp = 0.5 * AppUtils.num(src.differential_pressure_dp, 0) + 0.5 * (0.008 * src.gas_rate_mscfd / Math.max(0.2, src.orifice_plate_size * src.orifice_plate_size));

        src.delta_p = src.oil_rate_bopd * (config.unitSystem === "field" ? config.pressureDropR : 0.0042);
        src.time_display = config.timeUnit === "hr" ? src.time_min / 60 : (config.timeUnit === "day" ? src.time_min / 1440 : src.time_min);

        if (out.length) {
          const prev = out[out.length - 1];
          const dtDay = Math.max(0, (src.time_min - prev.time_min) / 1440);
          cumOil += 0.5 * (src.oil_rate_bopd + prev.oil_rate_bopd) * dtDay;
          cumGas += 0.5 * (src.gas_rate_mscfd + prev.gas_rate_mscfd) * dtDay;
          cumWater += 0.5 * (src.water_rate + prev.water_rate) * dtDay;
        }

        src.cum_oil_bbl = cumOil;
        src.cum_gas_mscf = cumGas;
        src.cum_water_bbl = cumWater;
        src.gas_cumulative = cumGas;
        src.total_gas_cumulative = cumGas;

        out.push(src);
      }

      const pr = this.estimateReservoirPressure(out, config.initialReservoirPressure);
      this.applyDerived(out, pr, config);
      this.applyRta(out);

      return this.packSummary(out, pr);
    }

    emptyResult() {
      return { rows: [], summary: null, horner: { points: [] }, diagnostic: [] };
    }

    estimateReservoirPressure(rows, fallbackPr) {
      const pts = [];
      const tp = rows.length ? rows[Math.max(0, rows.length - 2)].time_min : 0;
      for (let i = 0; i < rows.length; i++) {
        const dt = rows[i].time_min - tp;
        if (dt <= 1e-6 || tp <= 1e-6) continue;
        const x = Math.log10((tp + dt) / dt);
        rows[i].horner_x = x;
        pts.push([x, rows[i].wellhead_pressure_psia]);
      }
      if (pts.length < 3) return Math.max(fallbackPr, Math.max.apply(null, rows.map((r) => r.wellhead_pressure_psia)) + 40);
      const reg = this.linearRegression(pts);
      return Number.isFinite(reg.intercept) ? reg.intercept : fallbackPr;
    }

    applyDerived(rows, pr, config) {
      const ctv = Math.max(1, config.materialBalanceCtV);
      const bo = Math.max(0.1, config.bo);
      for (let i = 0; i < rows.length; i++) {
        const r = rows[i];
        r.reservoir_pressure_est = pr;
        r.pi = r.oil_rate_bopd / Math.max(1e-6, pr - r.wellhead_pressure_psia);
        r.material_balance_pr = pr - (r.cum_oil_bbl * bo / ctv) * pr;
        r.pressure_psia = r.wellhead_pressure_psia;
      }
    }

    applyRta(rows) {
      if (rows.length < 2) return;
      rows[0].rta_t = Math.max(1e-6, rows[0].time_min / 1440);
      rows[0].rta_dqdt = 1e-6;
      for (let i = 1; i < rows.length; i++) {
        const t0 = Math.max(1e-6, rows[i - 1].time_min / 1440);
        const t1 = Math.max(1e-6, rows[i].time_min / 1440);
        const q0 = Math.max(1e-6, rows[i - 1].oil_rate_bopd);
        const q1 = Math.max(1e-6, rows[i].oil_rate_bopd);
        rows[i].rta_t = t1;
        rows[i].rta_dqdt = Math.abs((Math.log(q1) - Math.log(q0)) / Math.max(1e-6, Math.log(t1) - Math.log(t0)));
      }
    }

    packSummary(rows, pr) {
      const s = {
        records: rows.length,
        pAvg: AppUtils.average(rows.map((r) => r.wellhead_pressure_psia)),
        pMin: Math.min.apply(null, rows.map((r) => r.wellhead_pressure_psia)),
        pMax: Math.max.apply(null, rows.map((r) => r.wellhead_pressure_psia)),
        qoAvg: AppUtils.average(rows.map((r) => r.oil_rate_bopd)),
        gorAvg: AppUtils.average(rows.map((r) => r.total_gor)),
        wcAvg: AppUtils.average(rows.map((r) => r.water_cut)),
        cumulativeOil: rows[rows.length - 1].cum_oil_bbl,
        cumulativeGas: rows[rows.length - 1].cum_gas_mscf,
        cumulativeWater: rows[rows.length - 1].cum_water_bbl,
        reservoirPressure: pr
      };
      return {
        rows,
        summary: s,
        horner: { points: rows.filter((r) => r.horner_x != null).map((r) => [r.horner_x, r.wellhead_pressure_psia]) },
        diagnostic: rows.map((r) => [Math.max(1e-6, r.rta_t), Math.max(1e-6, r.rta_dqdt)])
      };
    }

    linearRegression(points) {
      const n = points.length;
      let sx = 0; let sy = 0; let sxx = 0; let sxy = 0;
      for (let i = 0; i < n; i++) {
        const x = points[i][0];
        const y = points[i][1];
        sx += x; sy += y; sxx += x * x; sxy += x * y;
      }
      const den = n * sxx - sx * sx;
      const slope = Math.abs(den) < 1e-12 ? 0 : (n * sxy - sx * sy) / den;
      const intercept = (sy - slope * sx) / n;
      return { slope, intercept };
    }
  }

  window.DataEngine = DataEngine;
})();
