const Backup = {
    async exportData() {
        const data = await Storage.exportAll();
        data.__vault_documents__ = await this.exportVaultDocuments();

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const date = new Date().toISOString().split('T')[0];
        const link = document.createElement('a');

        link.href = url;
        link.download = `LifeOS_Backup_${date}.json`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    },

    importData(event) {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = async loadEvent => {
            try {
                const importedData = JSON.parse(loadEvent.target.result);

                if (!confirm('This will overwrite all current data. Proceed?')) {
                    event.target.value = '';
                    return;
                }

                const vaultDocs = importedData.__vault_documents__ || [];
                delete importedData.__vault_documents__;

                await Storage.importAll(importedData, { overwrite: true });
                await this.importVaultDocuments(vaultDocs);

                alert('Import successful!');
                window.location.reload();
            } catch (error) {
                console.error('Import failed:', error);
                alert('Failed to import data. Invalid JSON file.');
            } finally {
                event.target.value = '';
            }
        };

        reader.readAsText(file);
    },

    openVaultDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('VaultDB', 1);

            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains('documents')) {
                    db.createObjectStore('documents', { keyPath: 'id' });
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    readVaultDocuments(db) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('documents', 'readonly');
            const store = transaction.objectStore('documents');
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async fileToDataUrl(file) {
        if (!file) return null;

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    },

    async exportVaultDocuments() {
        const db = await this.openVaultDatabase();
        const docs = await this.readVaultDocuments(db);

        return Promise.all(docs.map(async doc => ({
            ...doc,
            file: doc.file ? {
                name: doc.file.name || doc.name || 'document',
                type: doc.file.type || doc.type || 'application/octet-stream',
                lastModified: doc.file.lastModified || Date.now(),
                dataUrl: await this.fileToDataUrl(doc.file)
            } : null
        })));
    },

    dataUrlToFile(filePayload) {
        if (!filePayload?.dataUrl) return null;

        const [meta, base64] = filePayload.dataUrl.split(',');
        const mimeMatch = meta.match(/data:(.*?);base64/);
        const mimeType = mimeMatch ? mimeMatch[1] : (filePayload.type || 'application/octet-stream');
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);

        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }

        return new File([bytes], filePayload.name || 'document', {
            type: mimeType,
            lastModified: filePayload.lastModified || Date.now()
        });
    },

    async importVaultDocuments(documents) {
        const db = await this.openVaultDatabase();

        await new Promise((resolve, reject) => {
            const transaction = db.transaction('documents', 'readwrite');
            const store = transaction.objectStore('documents');

            store.clear();

            documents.forEach(doc => {
                store.put({
                    ...doc,
                    file: this.dataUrlToFile(doc.file)
                });
            });

            transaction.oncomplete = resolve;
            transaction.onerror = () => reject(transaction.error);
            transaction.onabort = () => reject(transaction.error);
        });
    }
};
