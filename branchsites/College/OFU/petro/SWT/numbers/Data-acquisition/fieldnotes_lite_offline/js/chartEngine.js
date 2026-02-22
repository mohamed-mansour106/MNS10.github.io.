(function () {
  "use strict";

  class ChartEngine {
    constructor() {
      this.states = new Map();
    }

    attach(canvas) {
      const st = { zoom: null, cross: null, dragStart: null, dragCurrent: null, seriesCache: null };
      this.states.set(canvas, st);

      canvas.addEventListener("mousemove", (e) => {
        const p = this.getPos(canvas, e);
        st.cross = p;
        if (st.dragStart) st.dragCurrent = p;
        if (st.seriesCache) this.draw(canvas, st.seriesCache, st.options || {});
      });
      canvas.addEventListener("mouseleave", () => {
        st.cross = null;
        if (st.seriesCache) this.draw(canvas, st.seriesCache, st.options || {});
      });
      canvas.addEventListener("mousedown", (e) => {
        st.dragStart = this.getPos(canvas, e);
        st.dragCurrent = st.dragStart;
      });
      canvas.addEventListener("mouseup", (e) => {
        const end = this.getPos(canvas, e);
        if (st.dragStart && Math.abs(end.x - st.dragStart.x) > 8 && st.seriesCache) {
          const xr = this.selectX(st.seriesCache, canvas.width, st.dragStart.x, end.x);
          if (xr) st.zoom = xr;
        }
        st.dragStart = null;
        st.dragCurrent = null;
        if (st.seriesCache) this.draw(canvas, st.seriesCache, st.options || {});
      });
      canvas.addEventListener("dblclick", () => {
        st.zoom = null;
        if (st.seriesCache) this.draw(canvas, st.seriesCache, st.options || {});
      });
    }

    render(canvas, payload, options) {
      const st = this.states.get(canvas);
      if (!st) return;
      st.seriesCache = payload;
      st.options = options || {};
      this.draw(canvas, payload, st.options);
    }

    export(canvas, filename) {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    draw(canvas, payload, options) {
      const st = this.states.get(canvas);
      const ctx = canvas.getContext("2d");
      const W = canvas.width;
      const H = canvas.height;
      const pad = { l: 58, r: 58, t: 18, b: 34 };
      const plotW = W - pad.l - pad.r;
      const plotH = H - pad.t - pad.b;
      const logScale = !!options.logScale;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0f1627";
      ctx.fillRect(0, 0, W, H);

      if (!payload || !payload.series || !payload.series.length) {
        ctx.fillStyle = "#8fa2c6";
        ctx.fillText("No data", 8, 16);
        return;
      }

      let series = payload.series.map((s) => ({
        name: s.name,
        axis: s.axis || "left",
        color: s.color || "#7ad0cc",
        dashed: !!s.dashed,
        points: AppUtils.downsampleStride(s.points || [], 2200)
      }));

      const xAll = [];
      series.forEach((s) => s.points.forEach((p) => xAll.push(p.x)));
      if (!xAll.length) return;

      let xMin = Math.min.apply(null, xAll);
      let xMax = Math.max.apply(null, xAll);
      if (st.zoom) {
        xMin = st.zoom.x0;
        xMax = st.zoom.x1;
      }
      if (xMax - xMin < 1e-9) xMax = xMin + 1;

      const leftValues = [];
      const rightValues = [];
      series.forEach((s) => {
        for (let i = 0; i < s.points.length; i++) {
          const p = s.points[i];
          if (p.x < xMin || p.x > xMax) continue;
          if (!Number.isFinite(p.y)) continue;
          if (s.axis === "right") rightValues.push(p.y);
          else leftValues.push(p.y);
        }
      });
      if (!leftValues.length) leftValues.push(0, 1);
      if (!rightValues.length) rightValues.push(0, 1);

      const lRange = this.range(leftValues, logScale);
      const rRange = this.range(rightValues, logScale);
      const xToPx = (x) => pad.l + ((x - xMin) / (xMax - xMin)) * plotW;
      const yToPx = (y, axis) => {
        const range = axis === "right" ? rRange : lRange;
        const v = logScale ? Math.log10(Math.max(y, 1e-6)) : y;
        return H - pad.b - ((v - range.min) / (range.max - range.min || 1)) * plotH;
      };

      ctx.strokeStyle = "#273451";
      for (let i = 0; i <= 6; i++) {
        const y = pad.t + (i / 6) * plotH;
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(W - pad.r, y);
        ctx.stroke();
      }

      ctx.strokeStyle = "#4a5b82";
      ctx.strokeRect(pad.l, pad.t, plotW, plotH);

      for (let s = 0; s < series.length; s++) {
        const sr = series[s];
        ctx.strokeStyle = sr.color;
        ctx.lineWidth = 1.8;
        ctx.setLineDash(sr.dashed ? [6, 4] : []);
        ctx.beginPath();
        let started = false;
        for (let i = 0; i < sr.points.length; i++) {
          const p = sr.points[i];
          if (p.x < xMin || p.x > xMax || !Number.isFinite(p.y)) continue;
          const px = xToPx(p.x);
          const py = yToPx(p.y, sr.axis);
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);

      this.legend(ctx, series, W - pad.r - 180, pad.t + 12);
      this.axisTicks(ctx, xMin, xMax, pad.l, W - pad.r, H - pad.b, true);
      this.axisTicks(ctx, lRange.rawMin, lRange.rawMax, pad.t, H - pad.b, 6, false);
      this.axisTicks(ctx, rRange.rawMin, rRange.rawMax, pad.t, H - pad.b, W - pad.r + 6, false);

      ctx.fillStyle = "#a6b6d8";
      ctx.fillText(payload.title || "", 8, 14);

      if (st.cross) {
        const x = AppUtils.clamp(st.cross.x, pad.l, W - pad.r);
        const y = AppUtils.clamp(st.cross.y, pad.t, H - pad.b);
        ctx.strokeStyle = "rgba(100,220,210,0.35)";
        ctx.beginPath();
        ctx.moveTo(x, pad.t); ctx.lineTo(x, H - pad.b);
        ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y);
        ctx.stroke();

        const tx = xMin + ((x - pad.l) / plotW) * (xMax - xMin);
        const nearest = this.findNearest(series, tx);
        if (nearest) {
          const box = `${nearest.name}: x=${AppUtils.round(nearest.p.x, 3)} y=${AppUtils.round(nearest.p.y, 3)}`;
          ctx.fillStyle = "rgba(20,26,43,0.92)";
          ctx.fillRect(12, H - 26, Math.min(W - 20, box.length * 6.4), 18);
          ctx.strokeStyle = "#4e6aa3";
          ctx.strokeRect(12, H - 26, Math.min(W - 20, box.length * 6.4), 18);
          ctx.fillStyle = "#d3def6";
          ctx.fillText(box, 16, H - 13);
        }
      }

      if (st.dragStart && st.dragCurrent) {
        const x0 = st.dragStart.x;
        const x1 = st.dragCurrent.x;
        ctx.fillStyle = "rgba(79,130,230,0.25)";
        ctx.fillRect(Math.min(x0, x1), pad.t, Math.abs(x1 - x0), plotH);
      }
    }

    range(values, logScale) {
      const rawMin = Math.min.apply(null, values);
      const rawMax = Math.max.apply(null, values);
      let min = rawMin;
      let max = rawMax;
      if (logScale) {
        min = Math.log10(Math.max(1e-6, rawMin));
        max = Math.log10(Math.max(1e-6, rawMax));
      }
      if (max - min < 1e-9) max = min + 1;
      return { min, max, rawMin, rawMax };
    }

    axisTicks(ctx, min, max, p0, p1, fixed, horizontal) {
      ctx.fillStyle = "#91a3c8";
      ctx.font = "10px Consolas";
      for (let i = 0; i <= 5; i++) {
        const v = min + (i / 5) * (max - min);
        const txt = String(AppUtils.round(v, 2));
        if (horizontal) {
          const x = p0 + (i / 5) * (p1 - p0);
          ctx.fillText(txt, x - 10, fixed + 12);
        } else {
          const y = p1 - (i / 5) * (p1 - p0);
          ctx.fillText(txt, fixed, y + 4);
        }
      }
    }

    legend(ctx, series, x, y) {
      for (let i = 0; i < series.length; i++) {
        const s = series[i];
        const yy = y + i * 14;
        ctx.fillStyle = s.color;
        ctx.fillRect(x, yy - 8, 10, 10);
        ctx.fillStyle = "#bcc8e5";
        ctx.fillText(s.name, x + 14, yy);
      }
    }

    findNearest(series, x) {
      let best = null;
      let bestDist = Infinity;
      for (let s = 0; s < series.length; s++) {
        for (let i = 0; i < series[s].points.length; i++) {
          const p = series[s].points[i];
          const d = Math.abs(p.x - x);
          if (d < bestDist) {
            bestDist = d;
            best = { name: series[s].name, p: p };
          }
        }
      }
      return best;
    }

    selectX(payload, width, x0, x1) {
      const all = [];
      payload.series.forEach((s) => s.points.forEach((p) => all.push(p.x)));
      if (!all.length) return null;
      const min = Math.min.apply(null, all);
      const max = Math.max.apply(null, all);
      const left = 58;
      const right = 58;
      const toData = (px) => min + ((px - left) / (width - left - right)) * (max - min);
      const a = AppUtils.clamp(toData(Math.min(x0, x1)), min, max);
      const b = AppUtils.clamp(toData(Math.max(x0, x1)), min, max);
      if (Math.abs(b - a) < 1e-6) return null;
      return { x0: a, x1: b };
    }

    getPos(canvas, evt) {
      const r = canvas.getBoundingClientRect();
      return {
        x: ((evt.clientX - r.left) / r.width) * canvas.width,
        y: ((evt.clientY - r.top) / r.height) * canvas.height
      };
    }
  }

  window.ChartEngine = ChartEngine;
})();
