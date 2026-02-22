(function () {
  "use strict";

  class GridEngine {
    constructor(container, pager, columnPanel, filterInput) {
      this.container = container;
      this.pager = pager;
      this.columnPanel = columnPanel;
      this.filterInput = filterInput;
      this.rows = [];
      this.page = 1;
      this.pageSize = 50;
      this.sortKey = "time_min";
      this.sortDir = "asc";
      this.columns = [];
      this.visible = new Set();
      this.onEdit = null;
      this.onError = null;
      this.validator = null;

      this.filterInput.addEventListener("input", () => {
        this.page = 1;
        this.render();
      });
    }

    setValidator(fn) {
      this.validator = fn;
    }

    inferColumns(rows) {
      if (!rows.length) return;
      const preferred = [
        "time_min", "choke_size", "wellhead_pressure_psia", "wellhead_temp_f", "sepline_pressure", "separator_pressure", "separator_temperature",
        "differential_pressure_dp", "orifice_plate_size", "gas_rate_mscfd", "gas_rate_60f", "gas_cumulative", "total_gas_rate", "total_gas_cumulative",
        "oil_rate_bopd", "oil_rate_60f", "combined_oil_rate_interval", "api_gravity", "api_temperature", "api_60f", "shrinkage_factor",
        "water_rate", "water_cut", "gor1", "gor2", "total_gor", "ogr", "pi", "cum_oil_bbl", "cum_gas_mscf", "cum_water_bbl"
      ];
      const all = Object.keys(rows[0]);
      const ordered = preferred.filter((k) => all.includes(k)).concat(all.filter((k) => !preferred.includes(k)));
      this.columns = ordered.map((k) => ({ key: k, label: this.formatLabel(k), editable: !this.isDerived(k) }));
      if (!this.visible.size) this.columns.forEach((c) => this.visible.add(c.key));
      this.buildColumnPanel();
    }

    isDerived(k) {
      const derived = new Set(["water_cut", "gor1", "gor2", "total_gor", "ogr", "pi", "cum_oil_bbl", "cum_gas_mscf", "cum_water_bbl", "gas_cumulative", "total_gas_cumulative", "oil_rate_60f", "gas_rate_60f", "api_60f"]);
      return derived.has(k);
    }

    formatLabel(k) {
      return k.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
    }

    buildColumnPanel() {
      this.columnPanel.innerHTML = "";
      this.columns.forEach((c) => {
        const label = document.createElement("label");
        label.className = "row-check";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = this.visible.has(c.key);
        cb.addEventListener("change", () => {
          if (cb.checked) this.visible.add(c.key); else this.visible.delete(c.key);
          this.render();
        });
        label.appendChild(cb);
        label.append(` ${c.label}`);
        this.columnPanel.appendChild(label);
      });
    }

    setRows(rows) {
      this.rows = Array.isArray(rows) ? rows : [];
      this.inferColumns(this.rows);
      this.page = 1;
      this.render();
    }

    setPageSize(size) {
      this.pageSize = Math.max(5, Number(size) || 50);
      this.page = 1;
      this.render();
    }

    getVisibleColumns() {
      return this.columns.filter((c) => this.visible.has(c.key));
    }

    getFilteredSortedRows() {
      const text = (this.filterInput.value || "").trim().toLowerCase();
      let list = this.rows;
      if (text) {
        list = this.rows.filter((r) => {
          for (const c of this.columns) {
            if (!this.visible.has(c.key)) continue;
            const v = String(r[c.key] == null ? "" : r[c.key]).toLowerCase();
            if (v.includes(text)) return true;
          }
          return false;
        });
      }
      const dir = this.sortDir === "asc" ? 1 : -1;
      list = list.slice().sort((a, b) => (AppUtils.num(a[this.sortKey], 0) - AppUtils.num(b[this.sortKey], 0)) * dir);
      return list;
    }

    render() {
      const cols = this.getVisibleColumns();
      const rows = this.getFilteredSortedRows();
      const totalPages = Math.max(1, Math.ceil(rows.length / this.pageSize));
      this.page = AppUtils.clamp(this.page, 1, totalPages);
      const start = (this.page - 1) * this.pageSize;
      const pageRows = rows.slice(start, start + this.pageSize);

      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const hr = document.createElement("tr");
      cols.forEach((c) => {
        const th = document.createElement("th");
        th.textContent = c.label + (this.sortKey === c.key ? (this.sortDir === "asc" ? " ?" : " ?") : "");
        th.addEventListener("click", () => {
          if (this.sortKey === c.key) this.sortDir = this.sortDir === "asc" ? "desc" : "asc";
          else { this.sortKey = c.key; this.sortDir = "asc"; }
          this.render();
        });
        hr.appendChild(th);
      });
      thead.appendChild(hr);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      pageRows.forEach((row, localIndex) => {
        const tr = document.createElement("tr");
        cols.forEach((c) => {
          const td = document.createElement("td");
          td.textContent = String(AppUtils.round(AppUtils.num(row[c.key], 0), 5));
          if (this.validator && !this.validator(row, c.key)) td.classList.add("invalid-cell");
          if (c.editable) td.addEventListener("dblclick", () => this.editCell(td, c.key, rows[start + localIndex]));
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      this.container.innerHTML = "";
      this.container.appendChild(table);

      this.pager.innerHTML = "";
      const prev = document.createElement("button");
      prev.textContent = "Prev";
      prev.disabled = this.page <= 1;
      prev.addEventListener("click", () => { this.page -= 1; this.render(); });
      const next = document.createElement("button");
      next.textContent = "Next";
      next.disabled = this.page >= totalPages;
      next.addEventListener("click", () => { this.page += 1; this.render(); });
      const info = document.createElement("span");
      info.textContent = `Page ${this.page}/${totalPages} | Rows ${rows.length}`;
      this.pager.appendChild(prev);
      this.pager.appendChild(next);
      this.pager.appendChild(info);
    }

    editCell(td, key, row) {
      const input = document.createElement("input");
      input.type = "number";
      input.value = String(row[key]);
      input.className = "cell-edit";
      td.innerHTML = "";
      td.appendChild(input);
      input.focus();

      const commit = () => {
        const v = AppUtils.num(input.value, NaN);
        if (!Number.isFinite(v)) {
          if (this.onError) this.onError(`Invalid input for ${key}.`);
          this.render();
          return;
        }
        if (this.onEdit) this.onEdit(row, key, v);
        this.render();
      };

      input.addEventListener("blur", commit);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") commit();
        if (e.key === "Escape") this.render();
      });
    }
  }

  window.GridEngine = GridEngine;
})();
