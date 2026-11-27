/* OFU MCQ pop-up. Reads mcq.json (next to this file). Shows one multiple-choice
   question for 24 hours after "publishedAt", with a close (X) button.
   A closed or answered question is remembered per visitor (localStorage).
   Fails silently: if anything is missing or wrong, the page is untouched. */
(function () {
  "use strict";
  try {
    var scriptEl = document.currentScript;
    var base = new URL("./", scriptEl ? scriptEl.src : location.href).href;
    var bust = Math.floor(Date.now() / 300000); // refresh at most every 5 min

    fetch(base + "mcq.json?v=" + bust, { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (q) { if (q) start(q); })
      .catch(function () {});
  } catch (e) {}

  function start(q) {
    try {
      if (!q || q.active === false) return;
      var id = String(q.id || "");
      var opts = q.options;
      if (!id || typeof q.question !== "string" || !Array.isArray(opts) || opts.length < 2 || opts.length > 6) return;
      var ans = Number(q.answer);
      if (!(ans >= 0 && ans < opts.length) || ans % 1 !== 0) return;
      var pub = Date.parse(q.publishedAt);
      if (isNaN(pub)) return;
      var hours = Number(q.hours) > 0 ? Number(q.hours) : 24;
      var expires = pub + hours * 3600 * 1000;
      var now = Date.now();
      if (now < pub - 60000 || now >= expires) return;

      var key = "ofu_mcq_done_" + id;
      try { if (localStorage.getItem(key)) return; } catch (e) {}
      function remember() { try { localStorage.setItem(key, "1"); } catch (e) {} }

      setTimeout(function () { build(q, opts, ans, expires, remember); }, 1200);
    } catch (e) {}
  }

  // Anonymous answer count. One document per visitor per question (create only).
  // Stores: question id, chosen option number, right/wrong, random visitor id, server time. No names, no emails.
  var API_KEY = "AIzaSyC7IVEEzzmV1n-BmQlyqf16DGZbFE4rl5Y";
  function visitorId() {
    var v = "";
    try { v = localStorage.getItem("ofu_vid") || ""; } catch (e) {}
    if (!/^[a-z0-9]{12}$/.test(v)) {
      v = "";
      var abc = "abcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 12; i++) v += abc.charAt(Math.floor(Math.random() * abc.length));
      try { localStorage.setItem("ofu_vid", v); } catch (e) {}
    }
    return v;
  }
  function record(qid, choice, correct) {
    try {
      var vid = visitorId();
      var name = "projects/swt-community/databases/(default)/documents/mcqAnswers/" + qid + "_" + vid;
      fetch("https://firestore.googleapis.com/v1/projects/swt-community/databases/(default)/documents:commit?key=" + API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ writes: [{
          update: { name: name, fields: {
            qid: { stringValue: qid },
            choice: { integerValue: String(choice) },
            correct: { booleanValue: !!correct },
            vid: { stringValue: vid }
          } },
          updateTransforms: [{ fieldPath: "ts", setToServerValue: "REQUEST_TIME" }]
        }] })
      }).catch(function () {});
    } catch (e) {}
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function build(q, opts, ans, expires, remember) {
    var css = document.createElement("style");
    css.textContent =
      ".ofu-mcq-wrap{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;display:flex;justify-content:center;padding:12px;pointer-events:none;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif}" +
      ".ofu-mcq{pointer-events:auto;position:relative;width:100%;max-width:460px;max-height:80vh;overflow:auto;background:#fff;color:#14213d;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.35);padding:18px 16px 14px;box-sizing:border-box;border-top:4px solid #e85d04}" +
      ".ofu-mcq-x{position:absolute;top:6px;right:6px;width:44px;height:44px;border:0;background:transparent;font-size:28px;line-height:1;color:#555;cursor:pointer;border-radius:50%}" +
      ".ofu-mcq-x:focus-visible,.ofu-mcq-opt:focus-visible{outline:3px solid #e85d04;outline-offset:2px}" +
      ".ofu-mcq-tag{font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#e85d04;margin:0 44px 6px 0}" +
      ".ofu-mcq-q{font-size:17px;font-weight:700;line-height:1.4;margin:0 36px 12px 0}" +
      ".ofu-mcq-opt{display:block;width:100%;text-align:start;margin:0 0 8px;padding:12px 14px;min-height:44px;font:inherit;font-size:15px;color:#14213d;background:#f3f5f9;border:2px solid #dfe4ee;border-radius:10px;cursor:pointer}" +
      ".ofu-mcq-opt:hover:not([disabled]){border-color:#e85d04}" +
      ".ofu-mcq-opt[disabled]{cursor:default}" +
      ".ofu-mcq-opt.ok{background:#e6f6ec;border-color:#2e9e5b}" +
      ".ofu-mcq-opt.bad{background:#fdeaea;border-color:#d64545}" +
      ".ofu-mcq-res{margin:6px 0 2px;font-size:14px;line-height:1.45}" +
      ".ofu-mcq-res b{display:block;margin-bottom:2px}" +
      ".ofu-mcq-foot{margin-top:8px;font-size:12px;color:#6b7280}" +
      ".ofu-mcq-vb{display:block;width:100%;margin:0 0 12px;padding:10px 14px;min-height:44px;font:inherit;font-size:14px;font-weight:600;color:#e85d04;background:#fff4ec;border:2px solid #f5c9a8;border-radius:10px;cursor:pointer;text-align:center}" +
      ".ofu-mcq-vid{display:block;width:100%;max-height:34vh;margin:0 0 12px;border-radius:10px;background:#000}";
    document.head.appendChild(css);

    var wrap = el("div", "ofu-mcq-wrap");
    var box = el("div", "ofu-mcq");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Quick question");
    var x = el("button", "ofu-mcq-x", "\u00d7");
    x.type = "button";
    x.setAttribute("aria-label", "Close");
    box.appendChild(x);
    box.appendChild(el("p", "ofu-mcq-tag", "Quick question"));
    var qq = el("p", "ofu-mcq-q", q.question);
    qq.setAttribute("dir", "auto");
    box.appendChild(qq);

    // Optional hint video (concept only, never the answer). Loads only after a tap.
    var vurl = typeof q.video === "string" && /^https:\/\/[^\s"'<>]+$/.test(q.video) ? q.video : "";
    if (vurl) {
      var vb = el("button", "ofu-mcq-vb", "\u25b6 Watch the short hint video");
      vb.type = "button";
      vb.addEventListener("click", function () {
        var v = document.createElement("video");
        v.className = "ofu-mcq-vid";
        v.controls = true;
        v.playsInline = true;
        v.setAttribute("playsinline", "");
        v.preload = "auto";
        v.src = vurl;
        if (vb.parentNode) vb.parentNode.replaceChild(v, vb);
        try { var p = v.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
      });
      box.appendChild(vb);
    }

    var btns = [];
    var res = el("div", "ofu-mcq-res");
    res.setAttribute("aria-live", "polite");
    opts.forEach(function (t, i) {
      var b = el("button", "ofu-mcq-opt", String(t));
      b.type = "button";
      b.setAttribute("dir", "auto");
      b.addEventListener("click", function () {
        btns.forEach(function (o, j) {
          o.disabled = true;
          if (j === ans) o.classList.add("ok");
          else if (j === i) o.classList.add("bad");
        });
        res.textContent = "";
        res.appendChild(el("b", "", i === ans ? "Correct!" : "Not quite. The correct answer is highlighted."));
        if (q.explanation) {
          var ex = el("span", "", String(q.explanation));
          ex.setAttribute("dir", "auto");
          res.appendChild(ex);
        }
        remember();
        record(String(q.id), i, i === ans);
      });
      btns.push(b);
      box.appendChild(b);
    });
    box.appendChild(res);
    var left = Math.max(1, Math.ceil((expires - Date.now()) / 3600000));
    box.appendChild(el("div", "ofu-mcq-foot", "Disappears in about " + left + (left === 1 ? " hour" : " hours") + ". Answers are counted anonymously."));
    wrap.appendChild(box);

    function close() {
      remember();
      document.removeEventListener("keydown", onKey);
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    x.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(wrap);
  }
})();
