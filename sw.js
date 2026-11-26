/* OFU service worker: offline support + push notifications.
   Scope: the whole MNS10.github.io. site. */
const VERSION = "ofu-v1";
const BASE = self.registration.scope;
const PRECACHE = [
  BASE + "branchsites/College/OFU.html",
  BASE + "branchsites/SWT-Community/css/style.css",
  BASE + "branchsites/SWT-Community/WTAcademy/AcademyStyle.css",
  BASE + "branchsites/College/OFU1.css",
  BASE + "branchsites/College/img/logo/MMM.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) =>
      // one missing file must not break the install
      Promise.all(PRECACHE.map((u) => cache.add(u).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch Firebase, fonts, analytics

  // Pages: network first so updates show up, cached copy when offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() =>
        caches.match(req).then((hit) => hit || caches.match(BASE + "branchsites/College/OFU.html"))
      )
    );
    return;
  }

  // Everything else on this site: cached copy first, refreshed in the background.
  event.respondWith(
    caches.match(req).then((hit) => {
      const fresh = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || fresh;
    })
  );
});

// Push notifications (sent through Firebase Cloud Messaging).
self.addEventListener("push", (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (e) { payload = {}; }
  const d = Object.assign({}, payload.data || {}, payload.notification || {});
  const title = d.title || "OilField University";
  const options = {
    body: d.body || "",
    icon: BASE + "branchsites/College/img/logo/MMM.png",
    badge: BASE + "branchsites/College/img/logo/MMM.png",
    data: { url: d.url || (BASE + "branchsites/College/OFU.html") }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL(event.notification.data.url, BASE).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url === target && "focus" in c) return c.focus();
      }
      return self.clients.openWindow(target);
    })
  );
});
