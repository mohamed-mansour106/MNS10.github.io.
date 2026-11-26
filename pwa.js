/* OFU app install + notifications. Safe to include on any page. */
(function () {
  "use strict";
  // Public Web Push key from Firebase console (Project settings > Cloud Messaging > Web Push certificates).
  // Public key, not a secret. Notifications button stays hidden until this is filled in.
  var VAPID_KEY = "";

  var scriptEl = document.currentScript;
  var base = new URL("./", scriptEl ? scriptEl.src : location.href).href; // site root, where pwa.js lives
  var swUrl = base + "sw.js";

  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register(swUrl, { scope: base }).catch(function () {});
    });
  }

  var box = null;
  function ensureBox() {
    if (box) return box;
    box = document.createElement("div");
    box.id = "ofuPwaBox";
    box.setAttribute("style", "position:fixed;right:12px;bottom:12px;z-index:9999;display:flex;flex-direction:column;gap:8px;align-items:flex-end;font-family:inherit");
    document.body.appendChild(box);
    return box;
  }
  function addBtn(id, text, onclick) {
    if (document.getElementById(id)) return;
    var b = document.createElement("button");
    b.id = id;
    b.type = "button";
    b.textContent = text;
    b.setAttribute("style", "background:#2563eb;color:#fff;border:0;border-radius:999px;padding:10px 16px;font-size:14px;box-shadow:0 4px 14px rgba(0,0,0,.35);cursor:pointer");
    b.addEventListener("click", onclick);
    ensureBox().appendChild(b);
  }
  function removeBtn(id) {
    var b = document.getElementById(id);
    if (b) b.remove();
  }

  // ---- Install ----
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    removeBtn("ofuIosBtn");
    if (!standalone) addBtn("ofuInstallBtn", "Install the OFU app", function () {
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.finally(function () { deferred = null; removeBtn("ofuInstallBtn"); });
    });
  });
  window.addEventListener("appinstalled", function () { removeBtn("ofuInstallBtn"); removeBtn("ofuIosBtn"); });

  document.addEventListener("DOMContentLoaded", function () {
    if (isIOS && !standalone && !deferred) {
      addBtn("ofuIosBtn", "Install the OFU app", function () {
        alert("To install on iPhone: open this page in Safari, tap the Share button, then \"Add to Home Screen\". Notifications work after you open OFU from the Home Screen icon.");
      });
    }
    setupPush();
  });

  // ---- Notifications ----
  function setupPush() {
    if (!VAPID_KEY) return;
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) return;
    if (isIOS && !standalone) return; // iPhone only allows push for installed Home Screen apps
    if (Notification.permission === "denied") return;
    if (localStorage.getItem("ofu_push") === "1" && Notification.permission === "granted") return;
    addBtn("ofuPushBtn", "Get notifications", subscribe);
  }

  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  function subscribe() {
    if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length) {
      alert("Notifications are not available on this page. Open the OFU home page and try again.");
      return;
    }
    Notification.requestPermission().then(function (perm) {
      if (perm !== "granted") return;
      return navigator.serviceWorker.ready
        .then(function (reg) {
          return (firebase.messaging ? Promise.resolve() : loadScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js"))
            .then(function () {
              return firebase.messaging().getToken({ vapidKey: VAPID_KEY, serviceWorkerRegistration: reg });
            });
        })
        .then(function (token) {
          if (!token) throw new Error("no token");
          return firebase.firestore().collection("pushTokens").doc(token).set({
            token: token,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            ua: navigator.userAgent.slice(0, 200)
          });
        })
        .then(function () {
          localStorage.setItem("ofu_push", "1");
          removeBtn("ofuPushBtn");
          alert("Done. You will get OFU notifications.");
        });
    }).catch(function () {
      alert("Could not turn on notifications. Please try again later.");
    });
  }
})();
