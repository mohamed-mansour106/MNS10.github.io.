(function () {
  "use strict";

  class EventBus {
    constructor() {
      this.handlers = new Map();
    }

    on(event, handler) {
      if (!this.handlers.has(event)) this.handlers.set(event, []);
      this.handlers.get(event).push(handler);
    }

    emit(event, payload) {
      const list = this.handlers.get(event) || [];
      for (const fn of list) {
        try { fn(payload); } catch (err) { console.error(err); }
      }
    }
  }

  const Utils = {
    EventBus,

    num(v, fallback = 0) {
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    },

    optNum(v) {
      if (v === "" || v == null) return null;
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    },

    clamp(v, lo, hi) {
      return Math.max(lo, Math.min(hi, v));
    },

    round(v, d = 3) {
      if (!Number.isFinite(v)) return 0;
      const f = Math.pow(10, d);
      return Math.round(v * f) / f;
    },

    average(arr) {
      if (!arr.length) return 0;
      let s = 0;
      for (let i = 0; i < arr.length; i++) s += arr[i];
      return s / arr.length;
    },

    stdDev(arr, mean) {
      if (!arr.length) return 0;
      const m = mean != null ? mean : Utils.average(arr);
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        const d = arr[i] - m;
        sum += d * d;
      }
      return Math.sqrt(sum / arr.length);
    },

    quantile(sorted, q) {
      if (!sorted.length) return 0;
      const pos = (sorted.length - 1) * q;
      const base = Math.floor(pos);
      const frac = pos - base;
      const next = sorted[base + 1] != null ? sorted[base + 1] : sorted[base];
      return sorted[base] + frac * (next - sorted[base]);
    },

    movingAverage(values, windowSize) {
      const n = values.length;
      const w = Math.max(1, Math.floor(windowSize));
      if (w <= 1 || n <= 1) return values.slice();
      const out = new Array(n);
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += values[i];
        if (i >= w) sum -= values[i - w];
        out[i] = i < w - 1 ? values[i] : sum / w;
      }
      return out;
    },

    gaussian() {
      let u = 0;
      let v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    },

    toCSV(rows, columns) {
      const header = columns.join(",");
      const lines = rows.map((r) => columns.map((c) => Utils.csvCell(r[c])).join(","));
      return [header].concat(lines).join("\n");
    },

    csvCell(v) {
      const s = String(v == null ? "" : v);
      if (s.includes(",") || s.includes("\"") || s.includes("\n")) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    },

    downloadText(filename, content, mime) {
      const blob = new Blob([content], { type: mime || "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    },

    debounce(fn, waitMs) {
      let timer = null;
      return function () {
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), waitMs);
      };
    },

    downsampleStride(rows, maxPoints) {
      if (rows.length <= maxPoints) return rows;
      const stride = Math.ceil(rows.length / maxPoints);
      const out = [];
      for (let i = 0; i < rows.length; i += stride) out.push(rows[i]);
      return out;
    }
  };

  window.AppUtils = Utils;
})();
