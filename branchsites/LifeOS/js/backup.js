const Backup = {
    // 1. Export: Collects ALL localStorage data and downloads it
    exportData() {
        const data = {};
        // Loop through all keys (userDocs, journalEntries, userProjects, etc.)
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data[key] = JSON.parse(localStorage.getItem(key));
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const downloadAnchorNode = document.createElement('a');
        
        const date = new Date().toISOString().split('T')[0];
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `LifeOS_Backup_${date}.json`);
        
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    // 2. Import: Reads the JSON file and overwrites localStorage
    importData(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (confirm("This will overwrite your current data. Are you sure?")) {
                    // Clear current and set new
                    localStorage.clear();
                    for (const key in importedData) {
                        localStorage.setItem(key, JSON.stringify(importedData[key]));
                    }
                    alert("Import successful! The page will now reload.");
                    window.location.reload();
                }
            } catch (err) {
                alert("Error: Invalid JSON file.");
                console.error(err);
            }
        };
        reader.readAsText(file);
    }
};
add