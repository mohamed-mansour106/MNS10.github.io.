/* OFU positions and XP engine. Does nothing unless ofu-progression.json has "enabled": true.
   Data driven: positions, XP rules and the course-to-position map all live in ofu-progression.json.
   A course that is not listed in "courses" is open to everyone (position 1) and earns the normal XP rules. */
(function (root) {
  "use strict";
  var CFG = null;

  function positionForXp(cfg, xp) {
    var p = cfg.positions[0];
    for (var i = 0; i < cfg.positions.length; i++) if (xp >= cfg.positions[i].xp) p = cfg.positions[i];
    return p;
  }
  function courseRequiredPosition(cfg, slug) {
    var c = cfg.courses && cfg.courses[slug];
    return (c && c.position) || cfg.rules.defaultCoursePosition || 1;
  }
  /* A user position is the HIGHER of: what the admin granted, and nothing else.
     XP alone never promotes; it only shows progress toward the next position. */
  function isLocked(cfg, slug, userPosition) {
    return courseRequiredPosition(cfg, slug) > (userPosition || cfg.rules.existingUsersStartAt || 1);
  }
  function nextPosition(cfg, userPosition) {
    return cfg.positions.filter(function (p) { return p.id === (userPosition || 1) + 1; })[0] || null;
  }
  /* Pure rule evaluation. state = {xp, done:{key:true}, daily:{"YYYY-MM-DD": {kind:n}}}. Returns {award, key} or {award:0}. */
  function evaluate(cfg, state, ev, today) {
    var r = cfg.xpRules, none = { award: 0 };
    if (ev.type === "courseQuiz") {
      if (cfg.rules.lockedCoursesGiveXp === false && ev.locked) return none;
      var out = 0, keys = [];
      if (ev.percent >= r.courseQuizPass.minPercent && !state.done["pass:" + ev.slug]) { out += r.courseQuizPass.xp; keys.push("pass:" + ev.slug); }
      if (ev.percent >= r.courseQuizTop.minPercent && !state.done["top:" + ev.slug]) { out += r.courseQuizTop.xp; keys.push("top:" + ev.slug); }
      return { award: out, keys: keys };
    }
    if (ev.type === "dailyQuestion") {
      var k = "dq:" + ev.id; if (state.done[k]) return none;
      return { award: r.dailyQuestion.xp, keys: [k] };
    }
    if (ev.type === "bankCorrect") {
      var d = (state.daily && state.daily[today]) || {}, used = d.bank || 0, max = r.bankCorrectAnswer.maxPerDay;
      var a = Math.max(0, Math.min(r.bankCorrectAnswer.xp, max - used));
      return { award: a, daily: { bank: a } };
    }
    if (ev.type === "communityAnswer") {
      var d2 = (state.daily && state.daily[today]) || {}, n = d2.cans || 0;
      if (n >= r.communityHelpfulAnswer.maxPerDay) return none;
      return { award: r.communityHelpfulAnswer.xp, daily: { cans: 1 } };
    }
    if (ev.type === "communityQuestion") return { award: r.communityQuestion.xp };
    if (ev.type === "streak7") { var s = "streak7:" + ev.week; if (state.done[s]) return none; return { award: r.streak7.xp, keys: [s] }; }
    if (ev.type === "profile") { if (state.done.profile) return none; return { award: r.completeProfile.xp, keys: ["profile"] }; }
    return none;
  }
  function apply(cfg, state, ev, today) {
    var res = evaluate(cfg, state, ev, today);
    if (!res.award) return { state: state, award: 0 };
    var s = JSON.parse(JSON.stringify(state));
    s.xp = (s.xp || 0) + res.award; s.done = s.done || {}; s.daily = s.daily || {};
    (res.keys || []).forEach(function (k) { s.done[k] = true; });
    if (res.daily) { s.daily[today] = s.daily[today] || {}; Object.keys(res.daily).forEach(function (k) { s.daily[today][k] = (s.daily[today][k] || 0) + res.daily[k]; }); }
    return { state: s, award: res.award };
  }

  var api = {
    positionForXp: positionForXp, courseRequiredPosition: courseRequiredPosition, isLocked: isLocked,
    nextPosition: nextPosition, evaluate: evaluate, apply: apply,
    /* Load the config. Resolves {enabled:false} and touches nothing when the flag is off. */
    load: function (url) {
      return fetch(url, { cache: "no-store" }).then(function (r) { return r.json(); })
        .then(function (c) { CFG = c; return c; })
        .catch(function () { CFG = { enabled: false }; return CFG; });
    },
    enabled: function () { return !!(CFG && CFG.enabled); },
    config: function () { return CFG; }
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.OFUXP = api;
})(typeof window !== "undefined" ? window : this);
