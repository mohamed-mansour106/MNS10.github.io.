// safe-storage.js
const SafeStorage = {
    mem: {},
    get(key, fallback) {
      try {
        const val = window.localStorage.getItem(key);
        return val !== null ? JSON.parse(val) : fallback;
      } catch (e) {
        return this.mem[key] !== undefined ? this.mem[key] : fallback;
      }
    },
    set(key, val) {
      this.mem[key] = val;
      try {
        window.localStorage.setItem(key, JSON.stringify(val));
      } catch (e) {}
    }
  };
  
  const CATEGORIES = [
    'All Modules',
    'Safety & ESD',
    'Surface Well Testing',
    'Flow Control',
    'Separation & Heating',
    'Measurement & Sampling'
  ];
  
  function showToast(msg) {
    const banner = document.getElementById('toast-banner');
    document.getElementById('toast-message').textContent = msg;
    banner.classList.remove('hidden');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => banner.classList.add('hidden'), 2800);
  }
  