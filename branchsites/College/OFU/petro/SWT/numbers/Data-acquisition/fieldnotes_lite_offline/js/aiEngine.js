(function () {
  "use strict";

  class AIEngine {
    run(rows) {
      if (!Array.isArray(rows) || rows.length < 8) {
        return { ok: false, message: "Insufficient data for AI." };
      }

      const t = rows.map((r) => r.time_min / 1440);
      const oil = rows.map((r) => r.oil_rate_bopd);
      const pressure = rows.map((r) => r.pressure_psia);
      const gor = rows.map((r) => r.gor);

      const oilReg = this.linearRegression(t, oil);
      const pReg = this.linearRegression(t, pressure);
      const gorReg = this.linearRegression(t, gor);

      const avgOil = AppUtils.movingAverage(oil, Math.min(15, Math.max(3, Math.floor(rows.length / 20))));
      const lastT = t[t.length - 1];
      const f30 = this.forecast(lastT, 30, oilReg, pReg, gorReg);
      const f90 = this.forecast(lastT, 90, oilReg, pReg, gorReg);

      const pressureAlerts = this.detectPressureAnomaly(pressure);
      const outliers = this.detectOutliers(oil);
      const declineClass = this.classifyTrend(oil);
      const accel = this.declineAcceleration(oil);

      return {
        ok: true,
        oilReg,
        pressureReg: pReg,
        gorReg,
        movingAvgOil: avgOil,
        forecast30: f30,
        forecast90: f90,
        pressureAlerts,
        outliers,
        declineClass,
        declineAcceleration: accel,
        message: "AI analytics complete."
      };
    }

    forecast(startT, days, oilReg, pReg, gorReg) {
      const out = [];
      for (let i = 1; i <= days; i++) {
        const tx = startT + i;
        out.push({
          day: i,
          oil: Math.max(0, oilReg.intercept + oilReg.slope * tx),
          pressure: pReg.intercept + pReg.slope * tx,
          gor: Math.max(0, gorReg.intercept + gorReg.slope * tx)
        });
      }
      return out;
    }

    detectPressureAnomaly(values) {
      if (values.length < 10) return [];
      const mu = AppUtils.average(values);
      const sd = AppUtils.stdDev(values, mu);
      if (sd < 1e-9) return [];
      const idx = [];
      for (let i = 0; i < values.length; i++) {
        const z = Math.abs((values[i] - mu) / sd);
        if (z > 2.8) idx.push(i);
      }
      return idx;
    }

    detectOutliers(values) {
      if (values.length < 8) return [];
      const sorted = values.slice().sort((a, b) => a - b);
      const q1 = AppUtils.quantile(sorted, 0.25);
      const q3 = AppUtils.quantile(sorted, 0.75);
      const iqr = q3 - q1;
      const lo = q1 - 1.5 * iqr;
      const hi = q3 + 1.5 * iqr;
      const out = [];
      for (let i = 0; i < values.length; i++) {
        if (values[i] < lo || values[i] > hi) out.push(i);
      }
      return out;
    }

    classifyTrend(values) {
      if (values.length < 8) return "Unknown";
      const k = Math.min(50, values.length - 1);
      let neg = 0;
      let pos = 0;
      for (let i = values.length - k; i < values.length; i++) {
        const d = values[i] - values[i - 1];
        if (d < 0) neg++; else if (d > 0) pos++;
      }
      if (neg > pos * 3) return "Normal Decline";
      if (neg > pos) return "Declining";
      if (pos > neg) return "Rising";
      return "Stable";
    }

    declineAcceleration(values) {
      if (values.length < 12) return "Insufficient";
      const n = values.length;
      const mid = Math.floor(n * 0.65);
      const s1 = this.simpleSlope(values.slice(0, mid));
      const s2 = this.simpleSlope(values.slice(mid));
      if (s2 < s1 * 1.35) return "Accelerating";
      if (s2 > s1 * 0.85) return "Flattening";
      return "Steady";
    }

    simpleSlope(values) {
      const n = values.length;
      if (n < 3) return 0;
      const x = new Array(n);
      for (let i = 0; i < n; i++) x[i] = i;
      return this.linearRegression(x, values).slope;
    }

    linearRegression(x, y) {
      const n = Math.min(x.length, y.length);
      if (n === 0) return { slope: 0, intercept: 0 };
      let sx = 0; let sy = 0; let sxy = 0; let sxx = 0;
      for (let i = 0; i < n; i++) {
        sx += x[i]; sy += y[i]; sxy += x[i] * y[i]; sxx += x[i] * x[i];
      }
      const den = n * sxx - sx * sx;
      const slope = Math.abs(den) < 1e-12 ? 0 : (n * sxy - sx * sy) / den;
      const intercept = (sy - slope * sx) / n;
      return { slope, intercept };
    }
  }

  window.AIEngine = AIEngine;
})();
