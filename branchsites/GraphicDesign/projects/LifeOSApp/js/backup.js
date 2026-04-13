const Backup = {
    exportData() {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const rawValue = localStorage.getItem(key);
            
            // Fix: Safely attempt to parse, otherwise keep as string
            try {
                data[key] = JSON.parse(rawValue);
            } catch (e) {
                data[key] = rawValue;
            }
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const downloadAnchorNode = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", `LifeOS_Backup_${date}.json`);
        
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        
        // Cleanup
        downloadAnchorNode.remove();
        URL.revokeObjectURL(url);
    },

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (confirm("This will overwrite all current data. Proceed?")) {
                    localStorage.clear();
                    for (const [key, value] of Object.entries(importedData)) {
                        // Ensure we store everything as a string
                        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
                        localStorage.setItem(key, stringValue);
                    }
                    alert("Import successful!");
                    window.location.reload();
                }
            } catch (err) {
                alert("Error: Invalid backup file.");
            }
        };
        reader.readAsText(file);
    }
};
