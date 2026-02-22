(function () {
  "use strict";

  class SolverEngine {
    solve(rows) {
      if (!Array.isArray(rows) || rows.length < 8) {
        return { ok: false, message: "Insufficient data for solver." };
      }

      const clean = rows
        .filter((r) => Number.isFinite(r.time_min) && r.oil_rate_bopd > 1e-9)
        .map((r) => ({ t: r.time_min / 1440, q: r.oil_rate_bopd, p: r.pressure_psia }));

      if (clean.length < 8) {
        return { ok: false, message: "Need at least 8 valid production points." };
      }

      const t0 = clean[0].t;
      const norm = clean.map((d) => ({ t: Math.max(0, d.t - t0), q: d.q, p: d.p }));

      const fits = [
        this.fitExponential(norm),
        this.fitHarmonic(norm),
        this.fitHyperbolic(norm)
      ].filter((x) => x && x.ok);

      if (!fits.length) return { ok: false, message: "Could not fit decline model." };

      fits.sort((a, b) => a.rmse - b.rmse);
      const best = fits[0];

      const forecast = this.forecast(best, norm[norm.length - 1].t, 365);
      const eur = this.estimateEUR(best, norm[norm.length - 1].t);
      const pressureBuild = this.pressureBuildupTrend(clean);
      const reservoirPressure = this.solveReservoirPressure(clean);

      return {
        ok: true,
        model: best.type,
        qi: best.qi,
        di: best.di,
        b: best.b,
        rmse: best.rmse,
        r2: best.r2,
        sse: best.sse,
        fitSeries: norm.map((d) => ({ t: d.t, q: this.rate(best, d.t) })),
        forecast,
        eur,
        pressureBuild,
        solvedReservoirPressure: reservoirPressure,
        fits
      };
    }

    fitExponential(data) {
      const pts = data.filter((d) => d.q > 1e-12).map((d) => [d.t, Math.log(d.q)]);
      if (pts.length < 3) return null;
      const reg = this.linearRegression(pts);
      const qi = Math.exp(reg.intercept);
      const di = Math.max(1e-8, -reg.slope);
      return this.scoreFit(data, { ok: true, type: "Exponential", qi, di, b: 0 });
    }

    fitHarmonic(data) {
      const pts = data.filter((d) => d.q > 1e-12).map((d) => [d.t, 1 / d.q]);
      if (pts.length < 3) return null;
      const reg = this.linearRegression(pts);
      if (reg.intercept <= 1e-12) return null;
      const qi = 1 / reg.intercept;
      const di = Math.max(1e-8, reg.slope * qi);
      return this.scoreFit(data, { ok: true, type: "Harmonic", qi, di, b: 1 });
    }

    fitHyperbolic(data) {
      const bCandidates = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.1, 1.3, 1.5];
      let best = null;

      for (let i = 0; i < bCandidates.length; i++) {
        const b = bCandidates[i];
        const pts = data.filter((d) => d.q > 1e-12).map((d) => [d.t, Math.pow(d.q, -b)]);
        if (pts.length < 3) continue;
        const reg = this.linearRegression(pts);
        if (reg.intercept <= 1e-12) continue;

        const qi0 = Math.pow(reg.intercept, -1 / b);
        const di0 = Math.max(1e-8, reg.slope / (b * reg.intercept));

        const refined = this.refineParameters(data, qi0, di0, b);
        const fit = this.scoreFit(data, { ok: true, type: "Hyperbolic", qi: refined.qi, di: refined.di, b: b });
        if (!best || fit.rmse < best.rmse) best = fit;
      }

      return best;
    }

    refineParameters(data, qiSeed, diSeed, b) {
      let qi = Math.max(1e-6, qiSeed);
      let di = Math.max(1e-8, diSeed);
      let stepQ = qi * 0.08;
      let stepD = di * 0.12;
      let bestErr = this.sse(data, { qi, di, b, type: "Hyperbolic" });

      for (let iter = 0; iter < 32; iter++) {
        const candidates = [
          { qi: qi + stepQ, di: di },
          { qi: Math.max(1e-6, qi - stepQ), di: di },
          { qi: qi, di: di + stepD },
          { qi: qi, di: Math.max(1e-8, di - stepD) },
          { qi: qi + stepQ, di: di + stepD },
          { qi: Math.max(1e-6, qi - stepQ), di: Math.max(1e-8, di - stepD) }
        ];

        let improved = false;
        for (let c = 0; c < candidates.length; c++) {
          const err = this.sse(data, { qi: candidates[c].qi, di: candidates[c].di, b, type: "Hyperbolic" });
          if (err < bestErr) {
            bestErr = err;
            qi = candidates[c].qi;
            di = candidates[c].di;
            improved = true;
          }
        }

        if (!improved) {
          stepQ *= 0.55;
          stepD *= 0.55;
        }

        if (stepQ < 1e-6 && stepD < 1e-9) break;
      }

      return { qi, di };
    }

    scoreFit(data, fit) {
      const sse = this.sse(data, fit);
      const rmse = Math.sqrt(sse / Math.max(1, data.length));
      const avg = AppUtils.average(data.map((d) => d.q));
      let sst = 0;
      for (let i = 0; i < data.length; i++) {
        const d = data[i].q - avg;
        sst += d * d;
      }
      const r2 = sst > 0 ? Math.max(-10, 1 - sse / sst) : 0;
      fit.sse = sse;
      fit.rmse = rmse;
      fit.r2 = r2;
      return fit;
    }

    sse(data, fit) {
      let e = 0;
      for (let i = 0; i < data.length; i++) {
        const qh = this.rate(fit, data[i].t);
        const d = data[i].q - qh;
        e += d * d;
      }
      return e;
    }

    rate(fit, tDay) {
      const qi = Math.max(1e-12, fit.qi);
      const di = Math.max(1e-12, fit.di);
      if (fit.type === "Exponential") return qi * Math.exp(-di * tDay);
      if (fit.type === "Harmonic") return qi / (1 + di * tDay);
      const b = Math.max(1e-6, fit.b);
      const den = Math.max(1e-12, 1 + b * di * tDay);
      return qi / Math.pow(den, 1 / b);
    }

    forecast(fit, fromT, days) {
      const out = [];
      for (let i = 1; i <= days; i++) {
        const t = fromT + i;
        out.push({ day: i, t: t, q: this.rate(fit, t) });
      }
      return out;
    }

    estimateEUR(fit, tNow) {
      const qLimit = 1;
      const qNow = this.rate(fit, tNow);
      if (qNow <= qLimit) return 0;

      let np = 0;
      if (fit.type === "Exponential") {
        np = (fit.qi / fit.di) * (Math.exp(-fit.di * tNow) - qLimit / fit.qi);
      } else if (fit.type === "Harmonic") {
        const term = Math.log((1 + fit.di * 100000) / (1 + fit.di * tNow));
        np = (fit.qi / fit.di) * Math.max(0, term);
      } else {
        const b = fit.b;
        const a = Math.pow(1 + b * fit.di * tNow, (b - 1) / b);
        np = fit.qi / ((1 - b) * fit.di) * Math.max(0, 1 - a);
      }
      return Math.max(0, np);
    }

    pressureBuildupTrend(data) {
      if (data.length < 5) return "Insufficient";
      const k = Math.min(30, data.length);
      const tail = data.slice(data.length - k);
      const x = tail.map((d) => d.t);
      const y = tail.map((d) => d.p);
      const reg = this.linearRegression(x.map((v, i) => [v, y[i]]));
      if (reg.slope > 0.2) return "Buildup";
      if (reg.slope < -0.2) return "Drawdown";
      return "Stable";
    }

    solveReservoirPressure(data) {
      const pMax = Math.max.apply(null, data.map((d) => d.p));
      const qAvg = AppUtils.average(data.map((d) => d.q));
      let pr = pMax + 20;
      for (let i = 0; i < 30; i++) {
        const f = qAvg / Math.max(1e-6, pr - pMax) - 0.2;
        const df = -qAvg / Math.max(1e-6, (pr - pMax) * (pr - pMax));
        const step = f / Math.max(-1e-6, df);
        pr -= step;
        if (Math.abs(step) < 1e-6) break;
      }
      return Math.max(pMax + 1, pr);
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

  window.SolverEngine = SolverEngine;
})();
