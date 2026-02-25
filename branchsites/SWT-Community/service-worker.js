

const CACHE_NAME = "my-site-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/question.html",
  "/css/style.css",
  "/js/firestore.js"
  "/js/app.js"
"/js/auth.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
