(function () {
  "use strict";
  console.log('loading projectManager.js');

  class Well {
    constructor(name) {
      this.id = `well_${Math.random().toString(36).slice(2, 10)}`;
      this.name = name;
      this.timeSeries = [];
    }
  }

  class Project {
    constructor() {
      this.config = {};
      this.wells = [];
      this.activeWell = null;
      this.results = {};
      this.aiResults = {};
      this.notes = "";
      this.activity = [];
      this.errors = [];
    }
  }

  class ProjectManager {
    constructor(storageKey) {
      this.storageKey = storageKey || "fieldnotes_pro_project";
      this.project = this.createNewProject();
    }

    createNewProject() {
      const p = new Project();
      const well = new Well("WellA_1");
      p.wells.push(well);
      p.activeWell = well.id;
      return p;
    }

    getActiveWell() {
      return this.project.wells.find((w) => w.id === this.project.activeWell) || null;
    }

    addWell(name) {
      const w = new Well(name || `Well_${this.project.wells.length + 1}`);
      this.project.wells.push(w);
      this.project.activeWell = w.id;
      return w;
    }

    removeActiveWell() {
      if (this.project.wells.length <= 1) throw new Error("At least one well must remain.");
      const idx = this.project.wells.findIndex((w) => w.id === this.project.activeWell);
      if (idx < 0) return;
      const removed = this.project.wells[idx];
      this.project.wells.splice(idx, 1);
      this.project.activeWell = this.project.wells[Math.max(0, idx - 1)].id;
      delete this.project.results[removed.id];
      delete this.project.aiResults[removed.id];
    }

    setActiveWell(id) {
      if (!this.project.wells.some((w) => w.id === id)) throw new Error("Well not found.");
      this.project.activeWell = id;
    }

    saveToLocalStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.project));
    }

    loadFromLocalStorage() {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return false;
      this.loadFromObject(JSON.parse(raw));
      return true;
    }

    loadFromObject(obj) {
      if (!obj || !Array.isArray(obj.wells)) throw new Error("Invalid project schema.");
      const p = new Project();
      p.config = obj.config || {};
      p.results = obj.results || {};
      p.aiResults = obj.aiResults || {};
      p.notes = obj.notes || "";
      p.activity = Array.isArray(obj.activity) ? obj.activity : [];
      p.errors = Array.isArray(obj.errors) ? obj.errors : [];
      p.wells = obj.wells.map((w, i) => {
        const well = new Well(w.name || `Well_${i + 1}`);
        well.id = w.id || well.id;
        well.timeSeries = Array.isArray(w.timeSeries) ? w.timeSeries : [];
        return well;
      });
      p.activeWell = obj.activeWell && p.wells.some((w) => w.id === obj.activeWell)
        ? obj.activeWell
        : (p.wells[0] ? p.wells[0].id : null);
      this.project = p;
      if (!this.project.wells.length) {
        const nw = new Well("WellA_1");
        this.project.wells.push(nw);
        this.project.activeWell = nw.id;
      }
    }

    exportJSON() {
      return JSON.stringify(this.project, null, 2);
    }

    importJSON(text) {
      const obj = JSON.parse(text);
      this.loadFromObject(obj);
    }
  }

  console.log('projectManager.js initialized - ProjectManager exported');
  window.Project = Project;
  window.ProjectManager = ProjectManager;
})();
