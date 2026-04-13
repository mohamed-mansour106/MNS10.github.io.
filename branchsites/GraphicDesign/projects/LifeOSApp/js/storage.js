// js/storage.js

const Storage = {
    // Save any data with a specific key
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    // Get data by key, return empty array if not found
    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    },

    // Add a single day entry to the 'lifeData' array
    saveDay(dayObject) {
        const history = this.get('lifeData');
        history.push(dayObject);
        this.save('lifeData', history);
    },

    // Get the most recent entry
    getLatestStats() {
        const history = this.get('lifeData');
        return history.length > 0 ? history[history.length - 1] : null;
    }
};

// Exporting isn't needed if using standard script tags, 
// but it's good practice to keep it organized.
