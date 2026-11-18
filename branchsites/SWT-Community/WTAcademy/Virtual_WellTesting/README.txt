VIRTUAL LIBRARY V5 — REALISTIC BOOKS & CUSTOM COVERS
=====================================================

WHAT'S NEW
- More convincing 3D book profile with a visible ivory page block and page edges.
- Upload a separate JPG, PNG, or WebP cover for each catalog book.
- Uploaded covers are applied to the actual 3D front cover.
- Covers are stored in IndexedDB on this device and remain available offline.
- Search and category filters remain available.
- Existing third-person character, shelves, pickup animation and reading preview are retained.

INSTALLATION
1. Extract the ZIP.
2. Create a folder named "libs" beside index.html.
3. Put the official Three.js ES module file named "three.module.js" inside libs/.
   Expected path: libs/three.module.js
4. Start a local server in this folder, for example:
      python -m http.server 8000
5. Open http://localhost:8000

OFFLINE NOTES
- No external network requests are made by this project.
- Three.js is not bundled in this ZIP; it must be supplied locally.
- Uploaded covers are saved in this browser/device using IndexedDB.
- Clearing this site's browser data may erase saved covers. Keep backups of original cover images.
- Maximum cover image size: 8 MB per upload.

CURRENT SCOPE
- The catalog currently contains 24 sample books. You can assign a different cover to every one.
- The cover uploader changes the cover artwork; it does not yet import full PDF/EPUB books or automatically extract their cover pages.
