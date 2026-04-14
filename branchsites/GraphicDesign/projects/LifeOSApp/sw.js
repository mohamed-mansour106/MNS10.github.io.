const CACHE_VERSION = "v1.0.8";
const STATIC_CACHE = `lifeos-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `lifeos-runtime-${CACHE_VERSION}`;

const CORE_ASSETS = [
  "./",
  "index.html",
  "css/style.css",
  "manifest.json",
  "assets/logo/favicon.ico",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-32.png",
  "assets/icons/icon-16.png",
  "assets/icons/apple-touch-icon.png",
  "js/pwa.js",
  "js/storage.js",
  "js/finance.js",
  "js/reports.js",
  "js/analysis.js",
  "js/backup.js",
  "js/vault.js",
  "js/planner.js",
  "js/goal.js",
  "js/personality.js",
  "js/habits.js",
  "js/Experience.js",
  "js/courses.js",
  "js/focus.js",
  "js/idea.js",
  "js/mindmap.js",
  "js/dashboard.js",
  "js/project.js",
  "js/study.js",
  "js/journals.js",
  "js/filemanager.js",
  "js/ai-tools.js",
  "js/timeTrack.js",
  "js/main.js",
  "js/chart.umd.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("index.html").then((cached) => cached || fetch(request))
    );
    return;
  }

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
