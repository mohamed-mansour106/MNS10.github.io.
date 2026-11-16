/* =====================================================================
   OTIS HYDRAULIC CONTROL PANEL V4  -  WELL TESTING ACADEMY
   Interactive 3D training model (illustrative, not a verified schematic)

   FILE MAP  (search for the number, e.g. "[07]")
   [01] Config & constants          [09] Wellhead: choke, gauge, pilots
   [02] Scene, camera, lights       [10] Panel logic (power, pumps, circuits)
   [03] Registries & shared state   [11] Wellhead logic (valves, pilots, flow)
   [04] Materials & generic helpers [12] Reset / ESD / demo
   [05] Cabinet (panel)             [13] Buttons & display controls
   [06] Gas scrubber                [14] Click interaction
   [07] Hydraulic oil tank          [15] Animation loop
   [08] Wellhead & Christmas tree   [16] Resize & startup
===================================================================== */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


/* =====================================================================
   [01] CONFIG & CONSTANTS
   Tweak numbers here first.
===================================================================== */

const PILOT_HIGH_PSI = 2500;            // high pilot trips at / above this
const PILOT_LOW_PSI = 250;              // low pilot trips below this
const LINE_MAX_PSI = 3000;              // flowline gauge full scale
const LINE_PSI_PER_PERCENT = 30;        // 0-100 % choke -> 0-3000 psi*
const LOW_PILOT_STARTUP_DELAY = 6;      // seconds of flow before low pilot arms

const COLORS = {                        // hydraulic line colors
  hp: 0x009eff,
  mp: 0x00c982,
  lp: 0xffa12d,
  return: 0xb0bdca
};

const CIRCUITS = ['hp', 'mp', 'lp'];

const VIEWS = {
  home:     { pos: [8, 6.5, 12],   target: [0, 3.25, 0] },
  front:    { pos: [0, 4.2, 15],   target: [0, 3.5, 0] },
  rear:     { pos: [0, 4, -15],    target: [0, 3.2, -0.3] },
  wellhead: { pos: [17.5, 7, 15],  target: [10, 3.2, 0] }
};

const WELLHEAD_POSITION = [7.2, 0, 0];
const SCRUBBER_POSITION = [-5.5, 0.35, -0.5];
const TANK_POSITION = [-1.5, 0.7, -1.15];


/* =====================================================================
   [02] SCENE, CAMERA, RENDERER, LIGHTS, FLOOR
===================================================================== */

const canvas = document.querySelector('#scene');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a1724);

const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
camera.position.set(...VIEWS.home.pos);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(...VIEWS.home.target);
controls.minDistance = 6;
controls.maxDistance = 24;

scene.add(new THREE.HemisphereLight(0xdceeff, 0x334455, 2));

const key = new THREE.DirectionalLight(0xffffff, 2.4);
key.position.set(6, 11, 9);
key.castShadow = true;
scene.add(key);

const rim = new THREE.PointLight(0x00aaff, 30, 22);
rim.position.set(-6, 5, 4);
scene.add(rim);

/* Floor is semi-transparent so the downhole DHSV below ground stays visible */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshStandardMaterial({
    color: 0x101d29,
    roughness: .9,
    transparent: true,
    opacity: .35,
    depthWrite: false
  })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -.12;
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(30, 30, 0x29455d, 0x182b3b);
grid.position.y = -.105;
scene.add(grid);

function setView(view) {
  camera.position.set(...view.pos);
  controls.target.set(...view.target);
  controls.update();
}


/* =====================================================================
   [03] REGISTRIES & SHARED STATE
===================================================================== */

// Object groups
const cabinet = new THREE.Group();
scene.add(cabinet);

const gasScrubber = new THREE.Group();
cabinet.add(gasScrubber);
gasScrubber.position.set(...SCRUBBER_POSITION);   // floor, left of cabinet

const hydraulicTank = new THREE.Group();
cabinet.add(hydraulicTank);
hydraulicTank.position.set(...TANK_POSITION);

const wellhead = new THREE.Group();
scene.add(wellhead);
wellhead.position.set(...WELLHEAD_POSITION);

// Registries
const clickable = [];          // everything the raycaster can hit
const labels = [];             // every text sprite (toggle with HIDE LABELS)
const materials = [];          // materials affected by X-RAY
const gauges = [];             // cabinet gauges: { needle }
const selectors = [];          // cabinet selector knobs
const valves = [];             // cabinet valve blocks
const actuatorControls = [];   // push-pull buttons (modules 1-4)
const flowSystems = [];        // cabinet tubing curves
const particles = [];          // cabinet flow particles
const wellheadValves = [];     // gate valves + DHSV
const productionFlowParticles = [];

// View flags
let xray = false;
let labelsOn = true;
let flowOn = true;
let exploded = false;
let paused = false;
let demoTimer = null;

// Panel / hydraulic state
const state = {
  power: false,
  pumps: false,
  esd: false,
  hp: false,
  mp: false,
  lp: false,
  pressure: { hp: 0, mp: 0, lp: 0 },
  target:   { hp: 0, mp: 0, lp: 0 }
};

// Flowline / pilot state
const lineState = {
  choke: 50,
  pressure: 0,
  tripped: null,       // null | 'HIGH' | 'LOW'
  lowArmed: false,
  lowTimer: 0
};


/* =====================================================================
   [04] MATERIALS & GENERIC HELPERS
===================================================================== */

/* mat(): creates a material that X-RAY mode can make transparent */
const mat = (c, m = .35, r = .42) => {
  const x = new THREE.MeshStandardMaterial({ color: c, metalness: m, roughness: r });
  materials.push(x);
  return x;
};

// Cabinet materials
const red = mat(0x9d2029, .55, .34);
const darkRed = mat(0x55151d);
const steel = mat(0x718392, .82, .28);
const black = mat(0x111a22);
const panel = mat(0x1a2935, .5, .4);
const white = mat(0xe9ecec, .1, .45);
const openGreen = mat(0x00bd7d);       // shared "open" colour

const lineMats = {};
for (const k in COLORS) lineMats[k] = mat(COLORS[k], .4, .3);

/* ---------- UI helpers ---------- */

function info(t, d) {
  document.querySelector('#infoBox').innerHTML = `<strong>${t}</strong><br>${d}`;
}

function status(id, t, on) {
  const e = document.getElementById(id);
  e.textContent = t;
  e.className = 'status ' + (on ? 'on' : 'off');
}

/* ---------- 3D helpers (cabinet) ---------- */

function box(parent, x, y, z, w, h, d, material, name, description = name) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  o.userData = { name, description };
  parent.add(o);
  clickable.push(o);
  return o;
}

function cylinder(parent, x, y, z, r, h, material, name) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 32), material);
  o.position.set(x, y, z);
  o.rotation.x = Math.PI / 2;
  o.castShadow = true;
  o.userData = { name, description: name };
  parent.add(o);
  clickable.push(o);
  return o;
}

/* ---------- Text sprites ---------- */

function makeLabelSprite(text, { bg, fontPx, depthTest = true, srgb = false }) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 128;

  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 128);
  ctx.fillStyle = '#eaf4ff';
  ctx.font = `bold ${fontPx}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 64);

  const tex = new THREE.CanvasTexture(c);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;

  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest })
  );
  labels.push(sprite);
  return sprite;
}

/* Cabinet label (on cabinet group) */
function label(t, x, y, z, size = .15) {
  const s = makeLabelSprite(t, { bg: '#071523', fontPx: 42, depthTest: false, srgb: true });
  s.position.set(x, y, z);
  s.scale.set(size * 4, size, 1);
  cabinet.add(s);
}

/* Gas scrubber label */
function gasLabel(text, x, y, z) {
  const s = makeLabelSprite(text, { bg: '#102232', fontPx: 38 });
  s.position.set(x, y, z);
  s.scale.set(2.1, 0.52, 1);
  gasScrubber.add(s);
  return s;
}

/* Hydraulic tank label */
function tankText(text, x, y, z) {
  const s = makeLabelSprite(text, { bg: '#172b3b', fontPx: 40 });
  s.position.set(x, y, z);
  s.scale.set(2.2, 0.55, 1);
  hydraulicTank.add(s);
  return s;
}

/* Wellhead label */
function whLabel(text, x, y, z, scale = 0.75) {
  const s = makeLabelSprite(text, { bg: '#102333', fontPx: 40, depthTest: false });
  s.position.set(x, y, z);
  s.scale.set(1.8 * scale, 0.45 * scale, 1);
  wellhead.add(s);
  return s;
}

/* Small title texture used on gauge faces */
function gaugeTitleTexture(t) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 100;

  const q = c.getContext('2d');
  q.fillStyle = '#182735';
  q.fillRect(0, 0, 512, 100);
  q.fillStyle = 'white';
  q.font = 'bold 48px Arial';
  q.textAlign = 'center';
  q.fillText(t, 256, 67);

  return new THREE.CanvasTexture(c);
}


/* =====================================================================
   [05] CABINET (RED OTIS PANEL)
===================================================================== */

/* ---------- Shell ---------- */

box(cabinet, 0, 3.5, 0, 7.5, 7, .38, red,
  'Main red cabinet', 'Main enclosure; illustrative proportions.');

box(cabinet, 0, 7.05, .02, 7.65, .13, .55, steel, 'Top steel frame');
box(cabinet, 0, .02, .02, 7.65, .13, .55, steel, 'Bottom steel frame');
box(cabinet, 0, 3.5, -.25, 7.38, 6.85, .12, darkRed, 'Rear panel');

for (const x of [-3.55, 3.55]) {
  box(cabinet, x, 3.5, .28, .12, 6.85, .16, steel, 'Front vertical frame');
}

for (const x of [-3, -1.5, 0, 1.5, 3]) {
  box(cabinet, x, .0, .05, .18, .38, .45, black, 'Cabinet foot');
}

box(cabinet, 0, 5.95, .25, 7.05, 1.72, .13, black, 'Upper instrument fascia');
box(cabinet, 0, 4.05, .25, 7.05, 2, .13, black, 'Power unit fascia');
box(cabinet, 0, 1.55, .25, 7.05, 2.75, .13, panel, 'Hydraulic tubing mounting plate');

/* ---------- Gauge ---------- */

function gauge(x, y, z, title, description) {

  const g = new THREE.Group();
  g.position.set(x, y, z);
  cabinet.add(g);

  const h = new THREE.Mesh(new THREE.CylinderGeometry(.34, .34, .14, 48), steel);
  h.rotation.x = Math.PI / 2;
  g.add(h);

  const face = new THREE.Mesh(new THREE.CircleGeometry(.29, 48), white);
  face.position.z = .082;
  g.add(face);

  for (let i = 0; i <= 10; i++) {
    const a = -Math.PI * .75 + i / 10 * Math.PI * 1.5;
    const t = new THREE.Mesh(new THREE.BoxGeometry(.018, .055, .012), black);
    t.position.set(Math.sin(a) * .235, Math.cos(a) * .235, .095);
    t.rotation.z = -a;
    g.add(t);
  }

  const needle = new THREE.Mesh(new THREE.BoxGeometry(.018, .22, .025), mat(0xc91d26));
  needle.position.set(0, .045, .12);
  g.add(needle);

  const hub = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .035, 20), black);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = .14;
  g.add(hub);

  const tx = new THREE.Mesh(
    new THREE.PlaneGeometry(.55, .105),
    new THREE.MeshBasicMaterial({ map: gaugeTitleTexture(title), transparent: true })
  );
  tx.position.set(0, -.37, .13);
  g.add(tx);

  h.userData = { name: title, description };
  clickable.push(h);
  gauges.push({ needle });
}

/* ---------- Upper control modules (4 bays) ----------
   Gauges 0-7 are created here. Keep this block BEFORE the power unit
   gauges: updateReadings() relies on the gauge indices (see GAUGE_INDEX). */

for (let i = 0; i < 4; i++) {

  const x = -2.7 + i * 1.8;

  box(cabinet, x, 5.95, .36, 1.68, 1.55, .07, panel, `Control bay ${i + 1}`);
  label(`CONTROL ${i + 1}`, x, 6.72, .49, .105);

  gauge(x - .43, 6.13, .49, 'PRESSURE', `Upper bay ${i + 1} pressure gauge.`);
  gauge(x + .43, 6.13, .49, 'REMOTE', `Upper bay ${i + 1} remote gauge.`);

  /* PUSH-PULL ACTUATOR BUTTON: PULL OUT = OPEN, PUSH IN = CLOSED */

  const collar = cylinder(cabinet, x - .43, 5.48, .55, .145, .12, black,
    `Actuator control ${i + 1} collar`);

  const stem = cylinder(cabinet, x - .43, 5.48, .68, .055, .22, steel,
    `Actuator control ${i + 1} stem`);

  const knob = cylinder(cabinet, x - .43, 5.48, .80, .115, .13, red,
    `Actuator push-pull button ${i + 1}`);

  knob.userData.description =
    `Pull this button outward to open actuator valve ${i + 1}; push it inward to close it.`;

  actuatorControls.push({ id: i + 1, collar, stem, knob, open: false, baseZ: .80 });

  label('PULL / PUSH', x - .43, 5.12, .55, .075);

  /* Selector beside the push-pull button */

  const selectorKnob = cylinder(cabinet, x + .43, 5.48, .53, .14, .16, steel,
    `Selector ${i + 1}`);

  const handle = box(cabinet, x + .43, 5.48, .66, .31, .045, .045, black,
    `Selector handle ${i + 1}`);

  selectors.push({ knob: selectorKnob, handle, position: 0 });
}

label('OTIS HYDRAULIC CONTROL', 0, 7.28, .45, .18);

/* ---------- Power unit gauges (indices 8-13) ---------- */

[
  [-2.7, 'PANEL AIR'],
  [-1.65, 'CONTROL'],
  [-.55, 'HP'],
  [.55, 'LP'],
  [1.65, 'HP SUPPLY'],
  [2.7, 'MP']
].forEach(([x, t]) => {
  gauge(x, 4.55, .49, t, `Power unit ${t} gauge.`);
});

/* Gauge indices that follow live pressure (used by updateReadings) */
const GAUGE_INDEX = { hp: 10, lp: 11, mp: 13 };

label('HYDRAULIC POWER UNIT', 0, 3.23, .46, .13);

cylinder(cabinet, -2.7, 3.47, .52, .13, .18, steel, 'Panel reset control');

/* ---------- Hydraulic tubing ---------- */

function tube(points, key, name) {

  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));

  const mesh = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 100, .027, 10, false),
    lineMats[key]
  );

  mesh.userData = {
    name,
    description: `${name}: illustrative routing only, not a verified hydraulic schematic.`
  };

  cabinet.add(mesh);
  clickable.push(mesh);
  flowSystems.push({ curve, key });

  return curve;
}

tube([
  [-3.35, 2.8, .48], [-3.1, 2.8, .48], [-3.1, 1.05, .48], [-1.8, 1.05, .48],
  [-1.8, 2.35, .48], [0, 2.35, .48], [0, 1.5, .48], [2.7, 1.5, .48], [2.7, 2.7, .48]
], 'hp', 'HP hydraulic line');

tube([
  [-3.3, 2.1, .55], [-2.6, 2.1, .55], [-2.6, 1.42, .55], [-.8, 1.42, .55],
  [-.8, 2.65, .55], [1.8, 2.65, .55], [1.8, 1, .55], [3.2, 1, .55]
], 'mp', 'MP hydraulic line');

tube([
  [-3.2, .7, .62], [-2.8, .7, .62], [-2.8, 1.78, .62], [-1, 1.78, .62],
  [-1, .9, .62], [1.1, .9, .62], [1.1, 2.15, .62], [3.2, 2.15, .62]
], 'lp', 'LP hydraulic line');

tube([
  [-3.2, 3, .68], [-3.2, 3.15, .68], [3.2, 3.15, .68], [3.2, .8, .68]
], 'return', 'Return hydraulic line');

/* ---------- Valve blocks ---------- */

[
  [-2.2, 1], [-2.2, 1.62], [-2.2, 2.24],
  [-.8, 1], [.5, 1], [1.8, 1]
].forEach(([x, y], i) => {

  const group = new THREE.Group();
  group.position.set(x, y, .78);
  cabinet.add(group);

  const body = box(group, 0, 0, 0, .48, .3, .3, steel,
    `Valve ${i + 1} body`,
    `Illustrative hydraulic valve ${i + 1}. Click to toggle its visual state.`);

  cylinder(group, 0, .2, .02, .065, .3, black, `Valve ${i + 1} stem`);

  const handle = box(group, 0, .4, .08, .34, .075, .11, red, `Valve ${i + 1} handle`);

  valves.push({ body, handle, open: false, id: i + 1 });
});

/* ---------- Flow particles (cabinet tubing) ---------- */

for (const line of flowSystems) {
  for (let i = 0; i < 10; i++) {

    const p = new THREE.Mesh(
      new THREE.SphereGeometry(.045, 12, 12),
      new THREE.MeshBasicMaterial({ color: COLORS[line.key] })
    );

    cabinet.add(p);
    particles.push({ mesh: p, curve: line.curve, key: line.key, offset: i / 10 });
  }
}


/* =====================================================================
   [06] REAR GAS SCRUBBER (illustrative)
===================================================================== */

const scrubberBodyMat = new THREE.MeshStandardMaterial({ color: 0x9aa8b4, metalness: 0.8, roughness: 0.3 });
const scrubberHeadMat = new THREE.MeshStandardMaterial({ color: 0x526575, metalness: 0.85, roughness: 0.25 });
const gasPipeMat = new THREE.MeshStandardMaterial({ color: 0xd5b04c, metalness: 0.75, roughness: 0.3 });
const valveMat = new THREE.MeshStandardMaterial({ color: 0xb82d35, metalness: 0.55, roughness: 0.35 });
const gaugeMat = new THREE.MeshStandardMaterial({ color: 0xf4f4ec, metalness: 0.15, roughness: 0.35 });
const darkMat = new THREE.MeshStandardMaterial({ color: 0x202b35, metalness: 0.65, roughness: 0.4 });

function gasPart(parent, geometry, material, x, y, z, name) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { name, description: name + " - illustrative gas scrubber component." };
  parent.add(mesh);
  clickable.push(mesh);
  return mesh;
}

function gasPipe(points, name, radius = 0.075) {

  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], p[1], p[2])));

  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 50, radius, 12, false), gasPipeMat);
  mesh.userData = { name, description: name + " - illustrative gas piping." };

  gasScrubber.add(mesh);
  clickable.push(mesh);
  return mesh;
}

function gasFlange(x, y, z) {
  const f = gasPart(gasScrubber, new THREE.CylinderGeometry(0.16, 0.16, 0.1, 32),
    darkMat, x, y, z, "Gas Pipe Flange");
  f.rotation.z = Math.PI / 2;
  return f;
}

function gasValve(x, y, name) {

  const g = new THREE.Group();
  g.position.set(x, y, 0);
  gasScrubber.add(g);

  g.add(new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 16), scrubberHeadMat));

  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.045, 0.07), valveMat);
  handle.position.y = 0.22;
  g.add(handle);

  g.userData = { name, description: "Illustrative gas isolation valve." };
  clickable.push(g);

  return { group: g, handle, open: false };
}

/* ---------- Vessel ---------- */

gasPart(gasScrubber, new THREE.CylinderGeometry(0.62, 0.62, 2.7, 48),
  scrubberBodyMat, 0, 1.8, 0, "Gas Scrubber Vessel");

gasPart(gasScrubber, new THREE.SphereGeometry(0.62, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2),
  scrubberHeadMat, 0, 3.15, 0, "Scrubber Upper Head");

gasPart(gasScrubber, new THREE.SphereGeometry(0.62, 40, 20, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
  scrubberHeadMat, 0, 0.45, 0, "Scrubber Lower Head");

gasPart(gasScrubber, new THREE.CylinderGeometry(0.72, 0.72, 0.12, 48),
  darkMat, 0, 3.15, 0, "Top Flange");

gasPart(gasScrubber, new THREE.CylinderGeometry(0.72, 0.72, 0.12, 48),
  darkMat, 0, 0.45, 0, "Bottom Flange");

gasPart(gasScrubber, new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32),
  scrubberHeadMat, 0, 3.5, 0, "Top Cover");

/* Internals */
gasPart(gasScrubber, new THREE.CylinderGeometry(0.43, 0.43, 0.45, 32),
  new THREE.MeshStandardMaterial({ color: 0x46a9a5, transparent: true, opacity: 0.65, metalness: 0.2, roughness: 0.6 }),
  0, 2.45, 0, "Demister Element");

gasPart(gasScrubber, new THREE.CylinderGeometry(0.38, 0.38, 0.35, 32),
  new THREE.MeshStandardMaterial({ color: 0x8d9a5e, metalness: 0.2, roughness: 0.8 }),
  0, 1.45, 0, "Gas Filter Element");

/* ---------- Piping ---------- */

gasPipe([[-1.6, 1.2, 0], [-0.9, 1.2, 0], [-0.62, 1.2, 0]], "Gas Inlet Line");
gasPipe([[0.62, 2.5, 0], [1.1, 2.5, 0], [1.6, 2.5, 0]], "Clean Gas Outlet Line");
gasPipe([[0, 0.35, 0], [0, -0.15, 0], [0, -0.4, 0]], "Scrubber Drain Line", 0.06);
gasPipe([[1.6, 2.5, 0], [2.0, 2.5, 0], [2.0, 3.5, 0], [2.0, 4.3, 0]], "Gas Supply To Panel", 0.065);

gasFlange(-0.68, 1.2, 0);
gasFlange(0.68, 2.5, 0);

/* ---------- Pressure gauge ---------- */

const gasGauge = new THREE.Group();
gasGauge.position.set(0.25, 3.75, 0.25);
gasScrubber.add(gasGauge);

const gaugeBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 32), darkMat);
gaugeBase.rotation.x = Math.PI / 2;
gasGauge.add(gaugeBase);

const gasGaugeFace = new THREE.Mesh(new THREE.CircleGeometry(0.19, 32), gaugeMat);
gasGaugeFace.position.z = 0.07;
gasGauge.add(gasGaugeFace);

const gasNeedle = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.14, 0.02), valveMat);
gasNeedle.position.set(0, 0.025, 0.1);
gasGauge.add(gasNeedle);

gasGauge.userData = {
  name: "Scrubber Outlet Pressure Gauge",
  description: "Illustrative gauge for monitoring scrubber outlet pressure."
};
clickable.push(gasGauge);

/* ---------- Regulator ---------- */

const regulator = new THREE.Group();
regulator.position.set(1.55, 2.5, 0);
gasScrubber.add(regulator);

const regulatorBody = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.38, 32), scrubberHeadMat);
regulatorBody.rotation.z = Math.PI / 2;
regulator.add(regulatorBody);

const regulatorCap = new THREE.Mesh(new THREE.SphereGeometry(0.19, 24, 16), valveMat);
regulatorCap.position.y = 0.25;
regulator.add(regulatorCap);

regulator.userData = {
  name: "Gas Pressure Regulator",
  description: "Illustrative downstream gas pressure regulator."
};
clickable.push(regulator);

/* ---------- Isolation valves, sight glass, supports ---------- */

gasValve(-1.15, 1.2, "Gas Inlet Isolation Valve");
gasValve(1.15, 2.5, "Gas Outlet Isolation Valve");
gasValve(0, -0.15, "Scrubber Drain Valve");

gasPart(gasScrubber, new THREE.CylinderGeometry(0.055, 0.055, 0.8, 20),
  new THREE.MeshStandardMaterial({ color: 0x35c7d0, transparent: true, opacity: 0.7, metalness: 0.1, roughness: 0.15 }),
  0.63, 1.1, 0, "Liquid Level Sight Glass");

for (const x of [-0.42, 0.42]) {
  gasPart(gasScrubber, new THREE.BoxGeometry(0.16, 0.6, 0.85),
    darkMat, x, -0.05, 0, "Scrubber Support Leg");
}

/* ---------- Labels ---------- */

gasLabel("GAS SCRUBBER", 0, 4.15, 0);
gasLabel("INLET", -1.3, 0.9, 0.15);
gasLabel("OUTLET", 1.3, 2.85, 0.15);
gasLabel("DRAIN", 0, -0.55, 0.15);

function showRearView() {
  setView(VIEWS.rear);
  info("REAR GAS SCRUBBER", "Rear-mounted illustrative gas scrubber assembly.");
}


/* =====================================================================
   [07] REAR HYDRAULIC OIL RESERVOIR (illustrative)
===================================================================== */

const tankBodyMat = new THREE.MeshStandardMaterial({ color: 0x9d2029, metalness: 0.55, roughness: 0.38 });
const tankSteelMat = new THREE.MeshStandardMaterial({ color: 0x718392, metalness: 0.8, roughness: 0.28 });
const tankDarkMat = new THREE.MeshStandardMaterial({ color: 0x202a33, metalness: 0.65, roughness: 0.35 });
const tankGlassMat = new THREE.MeshStandardMaterial({ color: 0x38c6d0, transparent: true, opacity: 0.65, roughness: 0.12 });
const oilMat = new THREE.MeshStandardMaterial({ color: 0xd69b28, metalness: 0.15, roughness: 0.35 });
const tankRedMat = tankBodyMat;

function tankPart(parent, geometry, material, x, y, z, name) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { name, description: name + " - illustrative hydraulic reservoir component." };
  parent.add(mesh);
  clickable.push(mesh);
  return mesh;
}

function tankPipe(points, name, material = tankSteelMat, radius = 0.075) {

  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));

  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, radius, 12, false), material);
  mesh.userData = { name, description: name + " - illustrative hydraulic connection." };
  mesh.castShadow = true;

  hydraulicTank.add(mesh);
  clickable.push(mesh);
  return mesh;
}

/* ---------- Body ---------- */

const tankWidth = 2.7;
const tankHeight = 1.65;
const tankDepth = 1.25;

tankPart(hydraulicTank, new THREE.BoxGeometry(tankWidth, tankHeight, tankDepth),
  tankBodyMat, 0, 1.25, 0, "Hydraulic Oil Reservoir");

tankPart(hydraulicTank, new THREE.BoxGeometry(2.78, 0.12, 1.32),
  tankSteelMat, 0, 2.12, 0, "Hydraulic Tank Top Cover");

tankPart(hydraulicTank, new THREE.BoxGeometry(2.8, 0.12, 1.35),
  tankDarkMat, 0, 0.39, 0, "Hydraulic Tank Bottom Plate");

for (const x of [-1.2, 1.2]) {
  tankPart(hydraulicTank, new THREE.BoxGeometry(0.07, 1.5, 1.3),
    tankSteelMat, x, 1.25, 0, "Tank Reinforcement");
}

tankPart(hydraulicTank, new THREE.BoxGeometry(2.45, 0.65, 1.05),
  oilMat, 0, 0.95, 0, "Hydraulic Oil Level - Visual Representation");

/* ---------- Filler / breather ---------- */

tankPart(hydraulicTank, new THREE.CylinderGeometry(0.19, 0.19, 0.12, 32),
  tankDarkMat, -0.8, 2.24, 0, "Filler Breather Base");

tankPart(hydraulicTank, new THREE.CylinderGeometry(0.15, 0.18, 0.28, 32),
  tankSteelMat, -0.8, 2.43, 0, "Filler Breather");

tankPart(hydraulicTank, new THREE.CylinderGeometry(0.2, 0.2, 0.08, 32),
  tankDarkMat, -0.8, 2.60, 0, "Filler Cap");

for (let i = 0; i < 8; i++) {
  const angle = i / 8 * Math.PI * 2;
  tankPart(hydraulicTank, new THREE.SphereGeometry(0.018, 8, 8), tankDarkMat,
    -0.8 + Math.cos(angle) * 0.15, 2.44, Math.sin(angle) * 0.15, "Breather Opening");
}

/* ---------- Sight glass ---------- */

tankPart(hydraulicTank, new THREE.CylinderGeometry(0.075, 0.075, 0.9, 24),
  tankGlassMat, 1.38, 1.3, 0.48, "Hydraulic Oil Sight Glass");

for (const y of [1.75, 0.85]) {
  tankPart(hydraulicTank, new THREE.CylinderGeometry(0.1, 0.1, 0.12, 24),
    tankSteelMat, 1.38, y, 0.48, "Sight Glass Connection");
}

for (let i = 0; i < 5; i++) {
  tankPart(hydraulicTank, new THREE.BoxGeometry(0.16, 0.018, 0.025),
    tankDarkMat, 1.38, 0.95 + i * 0.17, 0.57, "Oil Level Marking");
}

/* ---------- Connections, drain, feet ---------- */

tankPipe([[-1.35, 0.75, 0], [-1.7, 0.75, 0], [-1.9, 0.75, 0], [-1.9, 0.45, 0], [-1.9, 0.3, 0]],
  "Hydraulic Pump Suction Line", tankSteelMat, 0.085);

tankPipe([[1.35, 1.8, 0], [1.7, 1.8, 0], [1.9, 1.8, 0], [1.9, 1.35, 0], [1.9, 1.1, 0]],
  "Hydraulic Oil Return Line", tankSteelMat, 0.075);

tankPipe([[0, 0.32, 0], [0, 0.05, 0], [0, -0.15, 0]],
  "Hydraulic Tank Drain Connection", tankSteelMat, 0.065);

tankPart(hydraulicTank, new THREE.BoxGeometry(0.35, 0.055, 0.07),
  tankRedMat, 0, -0.02, 0, "Hydraulic Tank Drain Valve Handle");

for (const x of [-1.05, 1.05]) {
  for (const z of [-0.4, 0.4]) {
    tankPart(hydraulicTank, new THREE.BoxGeometry(0.35, 0.22, 0.35),
      tankDarkMat, x, 0.2, z, "Hydraulic Tank Mounting Foot");
  }
}

/* ---------- Labels ---------- */

tankText("HYDRAULIC OIL TANK", 0, 2.95, 0.1);
tankText("OIL LEVEL", 1.1, 1.95, 0.55);

function showTankRearView() {

  const worldPosition = new THREE.Vector3();
  hydraulicTank.getWorldPosition(worldPosition);

  camera.position.set(worldPosition.x, worldPosition.y + 2.5, worldPosition.z - 9);
  controls.target.copy(worldPosition);
  controls.update();

  info(
    "HYDRAULIC OIL RESERVOIR",
    "Rear-mounted hydraulic oil tank with filler breather, oil sight glass, suction, return and drain connections."
  );
}


/* =====================================================================
   [08] WELLHEAD & CHRISTMAS TREE
   Red gate-valve wellhead (casing head, tubing head, master, flow cross,
   wing valves, swab) with handwheels.
   Panel modules 1, 2, 3 drive Master / Wing / DHSV.
===================================================================== */

/* ---------- Materials ---------- */

const whSteel = mat(0x8799a8, 0.85, 0.25);
const whDark = mat(0x263744, 0.75, 0.32);
const whRed = mat(0xc4262e, 0.55, 0.32);
const whGold = mat(0xd3a33d, 0.7, 0.28);
const whGrey = mat(0xb9c3cb, 0.65, 0.32);
const whChrome = mat(0xdbe3e8, 0.9, 0.18);
const whWheelMat = mat(0x1b2329, 0.6, 0.4);

/* Status lamps are emissive so they stay visible on the red bodies */
const whLampOff = new THREE.MeshStandardMaterial({
  color: 0x3a0a0c, emissive: 0xff1f2a, emissiveIntensity: 0.9
});
const whLampOn = new THREE.MeshStandardMaterial({
  color: 0x053b2b, emissive: 0x00e59b, emissiveIntensity: 0.9
});

/* ---------- Helpers ---------- */

function whPart(parent, geometry, material, x, y, z, name, description) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = {
    name,
    description: description || name + " - illustrative wellhead component."
  };
  parent.add(mesh);
  clickable.push(mesh);
  return mesh;
}

/* Cylinder along Y (default), X or Z */
function whCyl(parent, x, y, z, r, h, material, name, axis = 'y', desc) {
  const m = whPart(parent, new THREE.CylinderGeometry(r, r, h, 32), material, x, y, z, name, desc);
  if (axis === 'x') m.rotation.z = Math.PI / 2;
  if (axis === 'z') m.rotation.x = Math.PI / 2;
  return m;
}

function whPipe(points, name, radius = 0.12, material = whSteel) {

  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));

  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 70, radius, 12, false), material);
  mesh.userData = { name, description: name + " - illustrative wellhead piping." };
  mesh.castShadow = true;

  wellhead.add(mesh);
  clickable.push(mesh);
  return curve;
}

/* Ring of studs and nuts around a flange (decorative, not clickable) */
function studRing(parent, radius, y, count, h = 0.35, r = 0.05) {

  const studGeo = new THREE.CylinderGeometry(r, r, h, 8);
  const nutGeo = new THREE.CylinderGeometry(r * 1.8, r * 1.8, r * 1.5, 6);

  for (let i = 0; i < count; i++) {

    const a = i / count * Math.PI * 2;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;

    const stud = new THREE.Mesh(studGeo, whGold);
    stud.position.set(x, y, z);
    stud.castShadow = true;
    parent.add(stud);

    const nut = new THREE.Mesh(nutGeo, whSteel);
    nut.position.set(x, y + h / 2, z);
    parent.add(nut);
  }
}

/* ---------- Gate valve with rising stem + handwheel ----------
   axis: 'x' (horizontal bore) or 'y' (vertical bore)
   stem: 'up' (bonnet vertical) or 'front' (bonnet toward viewer) */

function makeGateValve(parent, cfg) {

  const {
    id = null, name, x, y, z = 0,
    axis = 'x', stem = 'up', scale = 1,
    moduleId = null, controlled = false
  } = cfg;

  const group = new THREE.Group();
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  parent.add(group);

  const desc = controlled
    ? name + ": hydraulically actuated in this model. Operate it from panel module " + moduleId + "."
    : name + ": manual handwheel gate valve. Click to open / close (visual only).";

  const L = 0.78, H = 0.66, D = 0.66;
  const dims = axis === 'x' ? [L, H, D] : [H, L, D];

  const body = whPart(group, new THREE.BoxGeometry(...dims), whRed, 0, 0, 0, name + " Body", desc);

  /* End flanges */
  for (const s of [-1, 1]) {
    if (axis === 'x') {
      whCyl(group, s * (L / 2 + 0.04), 0, 0, 0.44, 0.1, whDark, name + " Flange", 'x', desc);
    } else {
      whCyl(group, 0, s * (L / 2 + 0.04), 0, 0.44, 0.1, whDark, name + " Flange", 'y', desc);
    }
  }

  /* Bonnet and stem anchor */
  let ax = 0, ay = 0, az = 0;

  if (stem === 'up') {

    whCyl(group, 0, H / 2 + 0.28, 0, 0.22, 0.56, whGrey, name + " Bonnet", 'y', desc);
    whCyl(group, 0, H / 2 + 0.58, 0, 0.27, 0.1, whDark, name + " Bonnet Cap", 'y', desc);
    ay = H / 2 + 0.6;

  } else {

    whCyl(group, 0, 0, D / 2 + 0.3, 0.24, 0.6, whGrey, name + " Bonnet", 'z', desc);
    whCyl(group, 0, 0, D / 2 + 0.64, 0.28, 0.1, whDark, name + " Bonnet Cap", 'z', desc);
    ay = 0.12;
    az = D / 2 + 0.6;
  }

  /* Moving stem + handwheel */
  const stemGroup = new THREE.Group();
  stemGroup.position.set(ax, ay, az);
  group.add(stemGroup);

  whCyl(stemGroup, 0, 0.3, 0, 0.05, 0.6, whChrome, name + " Rising Stem", 'y', desc);

  const wheel = new THREE.Group();
  wheel.position.y = 0.62;
  stemGroup.add(wheel);

  const ring = whPart(wheel, new THREE.TorusGeometry(0.42, 0.04, 10, 40), whWheelMat,
    0, 0, 0, name + " Handwheel", desc);
  ring.rotation.x = Math.PI / 2;

  for (let i = 0; i < 3; i++) {
    const spoke = whPart(wheel, new THREE.BoxGeometry(0.84, 0.035, 0.05), whWheelMat,
      0, 0, 0, name + " Handwheel Spoke", desc);
    spoke.rotation.y = i * Math.PI / 3;
  }

  whCyl(wheel, 0, 0.03, 0, 0.09, 0.12, whDark, name + " Handwheel Hub", 'y', desc);

  /* Status lamp */
  const lamp = whPart(
    group,
    new THREE.SphereGeometry(0.08, 16, 12),
    whLampOff,
    axis === 'x' ? -0.22 : -0.28,
    axis === 'x' ? 0.0 : 0.2,
    D / 2 + 0.05,
    name + " Status Indicator",
    desc
  );

  const valve = {
    id, name, moduleId, controlled,
    group, body, stemGroup, wheel, lamp,
    open: false, target: 0, progress: 0,
    anchorY: ay, travel: 0.32
  };

  wellheadValves.push(valve);

  /* Manual valves toggle on click (see [14]) */
  if (!controlled) {
    group.traverse(o => {
      if (o.isMesh) o.userData.manualValve = valve;
    });
  }

  return valve;
}

/* ---------- DHSV (downhole safety valve) - schematic, below ground ---------- */

function makeDHSV(parent, x, y, z) {

  const group = new THREE.Group();
  group.position.set(x, y, z);
  parent.add(group);

  const desc = "DHSV: downhole safety valve (schematic). Operate it from panel module 3.";

  const body = whCyl(group, 0, 0, 0, 0.5, 0.95, whRed, "DHSV Body", 'y', desc);
  whCyl(group, 0, 0.52, 0, 0.58, 0.1, whDark, "DHSV Upper Flange", 'y', desc);
  whCyl(group, 0, -0.52, 0, 0.58, 0.1, whDark, "DHSV Lower Flange", 'y', desc);

  /* Hydraulic actuator housing beside the valve, with a moving indicator rod */
  whCyl(group, 0.72, 0, 0, 0.2, 0.8, whSteel, "DHSV Hydraulic Actuator", 'y', desc);
  whCyl(group, 0.5, 0, 0, 0.07, 0.3, whGold, "DHSV Hydraulic Port", 'x', desc);

  const stemGroup = new THREE.Group();
  stemGroup.position.set(0.72, 0, 0);
  group.add(stemGroup);

  whCyl(stemGroup, 0, 0.2, 0, 0.07, 0.6, whGold, "DHSV Moving Indicator Rod", 'y', desc);
  whCyl(stemGroup, 0, 0.52, 0, 0.12, 0.08, whDark, "DHSV Rod Cap", 'y', desc);

  const lamp = whPart(group, new THREE.SphereGeometry(0.09, 16, 12), whLampOff,
    0, 0.62, 0.5, "DHSV Status Indicator", desc);

  const valve = {
    id: 3, name: "DHSV", moduleId: 3, controlled: true,
    group, body, stemGroup, wheel: null, lamp,
    open: false, target: 0, progress: 0,
    anchorY: 0, travel: 0.3
  };

  wellheadValves.push(valve);
  return valve;
}

/* ---------- Lower assembly: base, casing head, tubing head ---------- */

whCyl(wellhead, 0, 0.11, 0, 1.15, 0.22, whDark, "Wellhead Base Plate");

whCyl(wellhead, 0, 0.32, 0, 1.0, 0.2, whRed, "Casing Head Lower Flange");
studRing(wellhead, 0.85, 0.32, 16, 0.34);

whCyl(wellhead, 0, 0.86, 0, 0.72, 0.9, whRed, "Casing Head Body");

whCyl(wellhead, 0, 1.32, 0, 1.05, 0.22, whRed, "Casing Head Upper Flange");
studRing(wellhead, 0.88, 1.32, 18, 0.36);

/* Tubing head spool (large bolted drum) */
whCyl(wellhead, 0, 1.55, 0, 1.12, 0.2, whRed, "Tubing Head Lower Collar");
studRing(wellhead, 0.95, 1.55, 20, 0.34);

whCyl(wellhead, 0, 1.85, 0, 0.82, 0.55, whRed, "Tubing Head Spool Body");

whCyl(wellhead, 0, 2.22, 0, 1.2, 0.28, whRed, "Tubing Head Upper Flange");
studRing(wellhead, 1.02, 2.22, 22, 0.42);

/* Neck and adapter flange */
whCyl(wellhead, 0, 2.58, 0, 0.55, 0.45, whRed, "Tubing Head Adapter Neck");
whCyl(wellhead, 0, 2.78, 0, 0.85, 0.18, whRed, "Adapter Flange");
studRing(wellhead, 0.7, 2.78, 12, 0.3);

/* Casing head side outlets with manual gate valves (left and right) */
for (const s of [-1, 1]) {

  whCyl(wellhead, s * 1.18, 0.86, 0, 0.17, 0.95, whSteel, "Casing Outlet Pipe", 'x');

  makeGateValve(wellhead, {
    name: s < 0 ? "CASING OUTLET VALVE (LEFT)" : "CASING OUTLET VALVE (RIGHT)",
    x: s * 1.9, y: 0.86, z: 0,
    axis: 'x', stem: 'up', scale: 0.6
  });

  whCyl(wellhead, s * 2.36, 0.86, 0, 0.17, 0.4, whSteel, "Casing Outlet Stub", 'x');
  whCyl(wellhead, s * 2.58, 0.86, 0, 0.27, 0.12, whDark, "Casing Outlet Flange", 'x');
}

/* ---------- Christmas tree ---------- */

/* Master valve (module 1) */
const masterValve = makeGateValve(wellhead, {
  id: 1, name: "MASTER VALVE",
  x: 0, y: 3.35, z: 0,
  axis: 'y', stem: 'front',
  moduleId: 1, controlled: true
});

/* Flow cross */
whPart(wellhead, new THREE.BoxGeometry(1.0, 0.9, 1.0), whRed, 0, 4.3, 0,
  "Flow Cross", "Flow cross: joins the vertical bore with the two wing branches.");

for (const s of [-1, 1]) {
  whCyl(wellhead, s * 1.0, 4.3, 0, 0.3, 1.0, whRed, "Flow Cross Arm", 'x');
}

/* Left (kill) wing valve - manual */
makeGateValve(wellhead, {
  name: "KILL WING VALVE",
  x: -1.85, y: 4.3, z: 0,
  axis: 'x', stem: 'up'
});

whCyl(wellhead, -2.42, 4.3, 0, 0.3, 0.3, whRed, "Kill Wing Stub", 'x');
whCyl(wellhead, -2.62, 4.3, 0, 0.42, 0.15, whDark, "Kill Wing Blind Flange", 'x');

/* Right (production) wing valve (module 2) */
const wingValve = makeGateValve(wellhead, {
  id: 2, name: "WING VALVE",
  x: 1.85, y: 4.3, z: 0,
  axis: 'x', stem: 'up',
  moduleId: 2, controlled: true
});

whCyl(wellhead, 2.5, 4.3, 0, 0.3, 0.5, whRed, "Production Wing Stub", 'x');

whPart(wellhead, new THREE.BoxGeometry(0.9, 1.0, 0.85), whRed, 3.2, 4.3, 0,
  "Wellhead Choke Body",
  "Adjustable wellhead choke. Set its opening with the slider in the CHOKE & PILOTS panel.");

whCyl(wellhead, 3.72, 4.3, 0, 0.46, 0.15, whDark, "Production Outlet Flange", 'x');

/* Upper spool + swab valve (manual) */
whCyl(wellhead, 0, 4.9, 0, 0.38, 0.3, whRed, "Upper Spool");
whCyl(wellhead, 0, 5.07, 0, 0.55, 0.1, whDark, "Swab Lower Flange");

makeGateValve(wellhead, {
  name: "SWAB VALVE",
  x: 0, y: 5.5, z: 0,
  axis: 'y', stem: 'front'
});

whCyl(wellhead, 0, 6.0, 0, 0.55, 0.1, whDark, "Tree Cap Flange");
whCyl(wellhead, 0, 6.12, 0, 0.4, 0.2, whRed, "Tree Cap");

/* ---------- Downhole tubing + DHSV (module 3) ---------- */

whPipe([[0, 0.3, 0], [0, -1.0, 0], [0, -2.4, 0]], "Downhole Production Tubing", 0.2, whSteel);

const dhsv = makeDHSV(wellhead, 0, -1.85, 0);

/* ---------- Wellhead labels ---------- */

whLabel("MASTER VALVE", -1.75, 3.35, 0.7);
whLabel("WING VALVE", 1.85, 5.35, 0.7);
whLabel("KILL WING", -1.85, 5.35, 0.7);
whLabel("SWAB VALVE", 0, 6.95, 0.7);
whLabel("PRODUCTION FLOWLINE", 6.4, 3.55, 0.7);
whLabel("TUBING HEAD", -2.0, 1.9, 0.9, 0.6);
whLabel("CASING HEAD", 2.4, 1.2, 0.9, 0.6);
whLabel("DHSV - DOWNHOLE", 1.5, -2.5, 0.5);
whLabel("INTERACTIVE WELLHEAD", 0, 7.6, 0.5, 0.9);

/* ---------- Hydraulic control lines (panel -> valves) ----------
   Drawn in world coordinates, so they are added to the scene. */

const controlLineMaterials = [
  mat(0x009eff, 0.45, 0.3),
  mat(0x00c982, 0.45, 0.3),
  mat(0xffa12d, 0.45, 0.3)
];

function controlLine(points, material, name) {

  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));

  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.035, 10, false), material);
  mesh.userData = { name, description: name + " - illustrative hydraulic control line." };

  scene.add(mesh);
  clickable.push(mesh);
  return curve;
}

controlLine([
  [-3.2, 5.0, -0.65], [3.8, 5.0, -0.65], [5.4, 4.2, -0.2], [7.0, 3.35, 0.45]
], controlLineMaterials[0], "Module 1 to Master Valve Control Line");

controlLine([
  [-1.5, 4.9, -0.75], [4.0, 4.7, -0.75], [6.0, 4.6, -0.4], [9.05, 4.3, 0.34]
], controlLineMaterials[1], "Module 2 to Wing Valve Control Line");

controlLine([
  [0.2, 4.8, -0.85], [4.4, 4.2, -0.85], [5.7, 2.0, -0.5], [7.0, -0.7, 0.45], [7.9, -1.75, 0.0]
], controlLineMaterials[2], "Module 3 to DHSV Control Line");

/* ---------- Production flow path (world coordinates) ----------
   Visible through the solid bodies (depthTest off) as a flow aid. */

const productionCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(7.2, -2.1, 0),
  new THREE.Vector3(7.2, -0.5, 0),
  new THREE.Vector3(7.2, 1.5, 0),
  new THREE.Vector3(7.2, 3.6, 0),
  new THREE.Vector3(7.2, 4.1, 0),
  new THREE.Vector3(7.45, 4.3, 0),
  new THREE.Vector3(8.4, 4.3, 0),
  new THREE.Vector3(9.8, 4.3, 0),
  new THREE.Vector3(11.0, 4.3, 0),
  new THREE.Vector3(12.6, 4.3, 0),
  new THREE.Vector3(14.2, 4.3, 0),
  new THREE.Vector3(14.9, 4.3, 0)
]);

const productionFlowMat = new THREE.MeshBasicMaterial({
  color: 0x00eaff, depthTest: false, transparent: true
});

for (let i = 0; i < 40; i++) {

  const particle = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), productionFlowMat);
  particle.visible = false;
  particle.renderOrder = 10;
  scene.add(particle);

  productionFlowParticles.push({ mesh: particle, offset: i / 40 });
}

/* Outlet arrow */
const outletArrow = whPart(wellhead, new THREE.ConeGeometry(0.16, 0.42, 20),
  mat(0x00eaff, 0.3, 0.2), 7.95, 4.3, 0, "Production Flow Direction Arrow");
outletArrow.rotation.z = -Math.PI / 2;


/* =====================================================================
   [09] WELLHEAD: FLOWLINE, CHOKE, LINE GAUGE, HIGH / LOW PILOTS
   Flowline pressure (downstream of the choke) rises as the choke is
   opened and falls as it is closed. High pilot trips at 2500 psi, low
   pilot at 250 psi. A trip closes the wing valve (SSV) and latches
   until reset.
===================================================================== */

/* ---------- Flowline (downstream of the choke block) ---------- */

whPipe([[3.8, 4.3, 0], [5.5, 4.3, 0], [7.8, 4.3, 0]], "Production Flowline", 0.2, whSteel);

whCyl(wellhead, 4.0, 4.3, 0, 0.32, 0.12, whDark, "Flowline Flange", 'x');
whCyl(wellhead, 7.8, 4.3, 0, 0.32, 0.12, whDark, "Flowline End Flange", 'x');

for (const sx of [4.8, 6.8]) {
  whPart(wellhead, new THREE.BoxGeometry(0.2, 4.0, 0.2), whDark, sx, 2.1, 0, "Flowline Support");
  whPart(wellhead, new THREE.BoxGeometry(0.8, 0.1, 0.8), whDark, sx, 0.05, 0, "Flowline Support Base");
}

/* ---------- Adjustable wellhead choke (on the flow block, x = 3.2) ---------- */

const chokeDesc = "Adjustable wellhead choke. Set its opening with the slider in the CHOKE & PILOTS panel. " +
  "More open = higher flowline pressure; more closed = lower flowline pressure.";

const chokeGroup = new THREE.Group();
chokeGroup.position.set(3.2, 4.8, 0);
wellhead.add(chokeGroup);

whCyl(chokeGroup, 0, 0.28, 0, 0.22, 0.56, whGrey, "Choke Bonnet", 'y', chokeDesc);
whCyl(chokeGroup, 0, 0.6, 0, 0.27, 0.1, whDark, "Choke Bonnet Cap", 'y', chokeDesc);

const chokeStemGroup = new THREE.Group();
chokeStemGroup.position.set(0, 0.62, 0);
chokeGroup.add(chokeStemGroup);

whCyl(chokeStemGroup, 0, 0.25, 0, 0.045, 0.5, whChrome, "Choke Adjusting Stem", 'y', chokeDesc);

const chokeWheel = new THREE.Group();
chokeWheel.position.y = 0.5;
chokeStemGroup.add(chokeWheel);

const chokeRing = whPart(chokeWheel, new THREE.TorusGeometry(0.3, 0.035, 10, 36), whWheelMat,
  0, 0, 0, "Choke Handwheel", chokeDesc);
chokeRing.rotation.x = Math.PI / 2;

for (let i = 0; i < 3; i++) {
  const spoke = whPart(chokeWheel, new THREE.BoxGeometry(0.6, 0.03, 0.045), whWheelMat,
    0, 0, 0, "Choke Handwheel Spoke", chokeDesc);
  spoke.rotation.y = i * Math.PI / 3;
}

whCyl(chokeWheel, 0, 0.03, 0, 0.08, 0.1, whDark, "Choke Handwheel Hub", 'y', chokeDesc);

/* Live choke opening label */
const chokeLabelCanvas = document.createElement('canvas');
chokeLabelCanvas.width = 512;
chokeLabelCanvas.height = 128;

const chokeLabelTex = new THREE.CanvasTexture(chokeLabelCanvas);

const chokeLabelSprite = new THREE.Sprite(
  new THREE.SpriteMaterial({ map: chokeLabelTex, transparent: true, depthTest: false })
);
chokeLabelSprite.position.set(3.2, 6.3, 0.4);
chokeLabelSprite.scale.set(1.2, 0.3, 1);
wellhead.add(chokeLabelSprite);
labels.push(chokeLabelSprite);

function drawChokeLabel() {

  const q = chokeLabelCanvas.getContext('2d');

  q.fillStyle = '#102333';
  q.fillRect(0, 0, 512, 128);

  q.fillStyle = '#00d5ff';
  q.font = 'bold 44px Arial';
  q.textAlign = 'center';
  q.textBaseline = 'middle';
  q.fillText('CHOKE ' + Math.round(lineState.choke) + '%', 256, 64);

  chokeLabelTex.needsUpdate = true;
}

/* ---------- Line pressure gauge (red zones at the pilot limits) ---------- */

function makeDialTexture() {

  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;

  const q = c.getContext('2d');

  q.fillStyle = '#f4f4ec';
  q.fillRect(0, 0, 256, 256);

  const A = f => -Math.PI * 0.75 + f * Math.PI * 1.5;
  const P = (f, r) => [128 + Math.sin(A(f)) * r, 128 - Math.cos(A(f)) * r];

  const zone = (f1, f2, col) => {
    q.strokeStyle = col;
    q.lineWidth = 16;
    q.beginPath();
    q.arc(128, 128, 104, A(f1) - Math.PI / 2, A(f2) - Math.PI / 2, false);
    q.stroke();
  };

  zone(0, PILOT_LOW_PSI / LINE_MAX_PSI, '#d6303a');
  zone(PILOT_LOW_PSI / LINE_MAX_PSI, PILOT_HIGH_PSI / LINE_MAX_PSI, '#1fae6b');
  zone(PILOT_HIGH_PSI / LINE_MAX_PSI, 1, '#d6303a');

  q.strokeStyle = '#111';
  q.fillStyle = '#111';
  q.font = 'bold 20px Arial';
  q.textAlign = 'center';
  q.textBaseline = 'middle';

  for (let i = 0; i <= 30; i++) {

    const f = i / 30;
    const major = i % 5 === 0;

    q.lineWidth = major ? 3 : 1.5;

    const [x1, y1] = P(f, major ? 82 : 88);
    const [x2, y2] = P(f, 95);

    q.beginPath();
    q.moveTo(x1, y1);
    q.lineTo(x2, y2);
    q.stroke();

    if (major) {
      const [tx, ty] = P(f, 64);
      q.fillText(String(i), tx, ty);
    }
  }

  q.font = 'bold 18px Arial';
  q.fillText('x100 PSI', 128, 172);
  q.fillText('LINE', 128, 196);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const lineGaugeDesc = "Flowline pressure gauge (0-3000 psi*, illustrative). Red zones mark the low (250) and high (2500) pilot limits.";

whCyl(wellhead, 4.6, 4.7, 0, 0.07, 0.45, whSteel, "Line Gauge Nipple", 'y', lineGaugeDesc);

const lineGaugeGroup = new THREE.Group();
lineGaugeGroup.position.set(4.6, 5.3, 0);
wellhead.add(lineGaugeGroup);

whCyl(lineGaugeGroup, 0, 0, 0, 0.34, 0.16, whSteel, "Line Pressure Gauge", 'z', lineGaugeDesc);

const lineGaugeFace = new THREE.Mesh(
  new THREE.CircleGeometry(0.3, 48),
  new THREE.MeshBasicMaterial({ map: makeDialTexture() })
);
lineGaugeFace.position.z = 0.085;
lineGaugeGroup.add(lineGaugeFace);

const lineNeedlePivot = new THREE.Group();
lineNeedlePivot.position.z = 0.11;
lineGaugeGroup.add(lineNeedlePivot);

const lineNeedle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.24, 0.02), mat(0xc91d26));
lineNeedle.position.y = 0.1;
lineNeedlePivot.add(lineNeedle);

const lineNeedleHub = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 16), whDark);
lineNeedleHub.rotation.x = Math.PI / 2;
lineNeedleHub.position.z = 0.125;
lineGaugeGroup.add(lineNeedleHub);

whLabel("LINE GAUGE", 4.6, 5.95, 0.3, 0.45);

/* ---------- High and low pilots ---------- */

const pilotLineMat = mat(0xe0a52d, 0.5, 0.35);

function makePilot(x, name, desc, bodyColor, labelText, lineZ, lineY) {

  whCyl(wellhead, x, 4.7, 0, 0.07, 0.45, whSteel, name + " Tee Nipple", 'y', desc);

  whPart(wellhead, new THREE.BoxGeometry(0.55, 0.55, 0.5), mat(bodyColor, 0.5, 0.35),
    x, 5.2, 0, name + " Body", desc);

  whCyl(wellhead, x, 5.55, 0, 0.16, 0.2, whGrey, name + " Adjusting Cap", 'y', desc);

  const lamp = whPart(wellhead, new THREE.SphereGeometry(0.07, 16, 12), whLampOn,
    x, 5.2, 0.3, name + " Status Lamp", desc);

  /* Pilot supply line to the wing valve actuator (SSV) */
  whPipe([
    [x, 5.62, 0],
    [x, lineY, lineZ],
    [1.85, lineY, lineZ],
    [1.85, 4.7, lineZ],
    [1.85, 4.4, lineZ * 0.55]
  ], name + " Supply Line", 0.03, pilotLineMat);

  whLabel(labelText, x, 6.05, 0.3, 0.5);

  return { lamp };
}

const highPilot = makePilot(
  5.8, "High Pilot",
  "HIGH PILOT: trips when flowline pressure reaches " + PILOT_HIGH_PSI + " psi*. It closes the wing valve (SSV) and latches until reset.",
  0xa31d24, "HIGH PILOT 2500", -0.45, 5.8
);

const lowPilot = makePilot(
  7.0, "Low Pilot",
  "LOW PILOT: trips when flowline pressure falls below " + PILOT_LOW_PSI + " psi* (armed after start-up). It closes the wing valve (SSV) and latches until reset.",
  0x1f5fa8, "LOW PILOT 250", -0.6, 5.65
);


/* =====================================================================
   [10] PANEL LOGIC  (power unit, pumps, circuits, readings)
===================================================================== */

/* ---------- Cabinet valve blocks ---------- */

function setValve(v, on) {
  v.open = on;
  v.handle.material = on ? openGreen : red;
  v.handle.rotation.z = on ? Math.PI / 4 : 0;
}

/* ---------- Push-pull actuator buttons (modules 1-4) ----------
   Opening is blocked by ESD, power off, pumps off, or (module 2) a
   tripped pilot. Modules 1-3 also drive the wellhead valves. */

function setActuatorControl(c, on) {

  if (on) {

    let blocked = null;

    if (state.esd) {
      blocked = ["EMERGENCY SHUTDOWN ACTIVE", "Reset the system before opening an actuator."];
    } else if (!state.power) {
      blocked = ["POWER UNIT OFF", "Start the power unit first, then the hydraulic pumps, before opening an actuator."];
    } else if (!state.pumps) {
      blocked = ["PUMPS NOT RUNNING", "Start the hydraulic pumps before opening an actuator."];
    } else if (c.id === 2 && lineState.tripped) {
      blocked = [
        (lineState.tripped === 'HIGH' ? "HIGH" : "LOW") + " PILOT TRIPPED",
        "Correct the choke setting and press RESET PILOTS before reopening the wing valve."
      ];
    }

    if (blocked) {
      info(blocked[0], blocked[1]);
      return;
    }
  }

  c.open = on;
  c.knob.position.z = c.baseZ + (on ? .20 : 0);
  c.stem.position.z = .68 + (on ? .10 : 0);
  c.knob.material = on ? openGreen : red;

  info(
    `ACTUATOR VALVE ${c.id}`,
    on ? 'PULLED OUT — actuator valve OPEN.' : 'PUSHED IN — actuator valve CLOSED.'
  );

  /* Drive the matching wellhead valve (module 1 = Master, 2 = Wing, 3 = DHSV) */
  const valve = wellheadValves.find(v => v.moduleId === c.id);

  if (valve) {

    setWellheadValve(valve, on);

    info(
      "MODULE " + c.id + " — " + valve.name,
      on
        ? valve.name + " OPEN. The stem has risen and the handwheel has turned."
        : valve.name + " CLOSED. The stem has lowered."
    );
  }

  updateWellheadStatus();
}

/* ---------- Dashboard UI ---------- */

function updateUI() {

  status('powerStatus', state.power ? 'RUNNING' : 'OFF', state.power);
  status('pumpStatus', state.pumps ? 'RUNNING' : 'OFF', state.pumps);

  for (const k of CIRCUITS) {
    status(k + 'Status', state[k] ? 'OPEN' : 'CLOSED', state[k]);
  }

  const active = state.hp || state.mp || state.lp;
  status('flowStatus', active ? 'ACTIVE' : 'STOPPED', active);

  document.querySelector('#powerBtn').textContent =
    state.power ? 'STOP POWER UNIT' : 'START POWER UNIT';

  document.querySelector('#pumpBtn').textContent =
    state.pumps ? 'STOP PUMPS' : 'START PUMPS';

  for (const k of CIRCUITS) {
    document.querySelector('#' + k + 'Btn').textContent =
      (state[k] ? 'CLOSE ' : 'OPEN ') + k.toUpperCase() + ' CIRCUIT';
  }

  const s = document.querySelector('#systemStatus');

  s.textContent =
    state.esd ? 'EMERGENCY STOP'
      : state.power ? 'POWER UNIT RUNNING'
        : 'SYSTEM READY';

  s.className = 'status ' + (state.esd ? 'off' : state.power ? 'on' : '');
}

/* ---------- Pressure meters + gauge needles ---------- */

function updateReadings() {

  for (const k of CIRCUITS) {

    const v = state.pressure[k];

    document.querySelector('#' + k + 'Meter').style.width = v + '%';
    document.querySelector('#' + k + 'Value').innerHTML = Math.round(v * 50) + ' <small>psi*</small>';
  }

  for (const k in GAUGE_INDEX) {
    gauges[GAUGE_INDEX[k]].needle.rotation.z =
      -Math.PI * .75 + state.pressure[k] / 100 * Math.PI * 1.5;
  }
}

/* ---------- Circuits ---------- */

function setCircuit(k, on) {

  if (state.esd) return;

  if (on && !state.power) {
    info('POWER UNIT OFF', 'Start the simulated power unit before opening a circuit.');
    return;
  }

  state[k] = on;
  state.target[k] = on ? 100 : 0;

  updateUI();
}


/* =====================================================================
   [11] WELLHEAD LOGIC  (valve animation, flow state, choke, pilots)
===================================================================== */

function setWellheadValve(valve, open) {
  valve.open = open;
  valve.target = open ? 1 : 0;
  valve.lamp.material = open ? whLampOn : whLampOff;
}

/* Rising stem + turning handwheel, animated every frame */
function animateWellheadValves() {

  wellheadValves.forEach(v => {

    v.progress += (v.target - v.progress) * 0.12;

    if (Math.abs(v.target - v.progress) < 0.001) v.progress = v.target;

    v.stemGroup.position.y = v.anchorY + v.progress * v.travel;

    if (v.wheel) v.wheel.rotation.y = v.progress * Math.PI * 6;
  });
}

/* Manual (non-panel) valves: click to toggle */
function toggleManualWellheadValve(v) {

  setWellheadValve(v, !v.open);

  info(
    v.name,
    "Manual handwheel " + (v.open ? "turned: valve OPEN." : "turned: valve CLOSED.") +
    " Visual only; it does not change the simulated flow."
  );
}

function isProductionFlowing() {
  return (
    state.power &&
    state.pumps &&
    !state.esd &&
    masterValve.open &&
    wingValve.open &&
    dhsv.open
  );
}

function updateWellheadStatus() {

  const flowing = isProductionFlowing();
  const el = document.getElementById("wellFlowValue");

  if (el) {
    el.textContent = flowing ? "FLOWING" : "STOPPED";
    el.style.color = flowing ? "#00e59b" : "#ff414d";
  }

  productionFlowParticles.forEach(p => {
    p.mesh.visible = flowing && flowOn;
  });
}

function resetWellhead() {
  wellheadValves.forEach(v => setWellheadValve(v, false));
  updateWellheadStatus();
}

/* ---------- Choke + pilots ---------- */

function setChoke(v) {

  lineState.choke = Math.max(0, Math.min(100, Math.round(v)));

  document.getElementById('chokeSlider').value = lineState.choke;
  document.getElementById('chokeValue').textContent = lineState.choke + '%';

  drawChokeLabel();
}

function updatePilotUI() {

  const hi = lineState.tripped === 'HIGH';
  const lo = lineState.tripped === 'LOW';

  status('highPilotStatus', hi ? 'TRIPPED' : 'NORMAL', !hi);
  status('lowPilotStatus', lo ? 'TRIPPED' : 'NORMAL', !lo);

  highPilot.lamp.material = hi ? whLampOff : whLampOn;
  lowPilot.lamp.material = lo ? whLampOff : whLampOn;

  document.getElementById('lineMetric').style.color = lineState.tripped ? '#ff414d' : '';
}

function tripPilot(kind) {

  lineState.tripped = kind;

  /* The pilot bleeds the SSV actuator: close the wing valve */
  const wingControl = actuatorControls.find(c => c.id === 2);

  if (wingControl && wingControl.open) {
    setActuatorControl(wingControl, false);
  }

  updatePilotUI();

  info(
    kind === 'HIGH' ? 'HIGH PILOT TRIPPED' : 'LOW PILOT TRIPPED',
    kind === 'HIGH'
      ? 'Flowline pressure reached ' + PILOT_HIGH_PSI + ' psi*. The wing valve (SSV) was closed. Close the choke, press RESET PILOTS, then reopen module 2.'
      : 'Flowline pressure fell below ' + PILOT_LOW_PSI + ' psi*. The wing valve (SSV) was closed. Open the choke, press RESET PILOTS, then reopen module 2.'
  );
}

function resetPilots() {

  const psiAtChoke = lineState.choke * LINE_PSI_PER_PERCENT;

  if (lineState.tripped === 'HIGH' && psiAtChoke >= PILOT_HIGH_PSI) {
    info(
      'CHOKE STILL TOO OPEN',
      'Close the choke below ' + Math.round(PILOT_HIGH_PSI / LINE_PSI_PER_PERCENT) + '% before resetting the high pilot.'
    );
    return;
  }

  if (lineState.tripped === 'LOW' && psiAtChoke < PILOT_LOW_PSI) {
    info(
      'CHOKE STILL TOO CLOSED',
      'Open the choke above ' + Math.round(PILOT_LOW_PSI / LINE_PSI_PER_PERCENT) + '% before resetting the low pilot.'
    );
    return;
  }

  lineState.tripped = null;
  updatePilotUI();

  info('PILOTS RESET', 'Pilots re-armed. You can reopen the wing valve from module 2.');
}

function resetLineInstruments() {

  lineState.tripped = null;
  lineState.pressure = 0;
  lineState.lowArmed = false;
  lineState.lowTimer = 0;

  setChoke(50);
  updatePilotUI();
}

/* ---------- Per-frame flowline simulation ---------- */

let lineLastTime = null;
let shownLinePsi = -1;
let chokeAnim = 50;

function updateLineInstruments(time) {

  const dt = lineLastTime === null ? 0 : Math.min(time - lineLastTime, 0.05);
  lineLastTime = time;

  const flowing = isProductionFlowing();
  const target = flowing ? lineState.choke * LINE_PSI_PER_PERCENT : 0;

  lineState.pressure += (target - lineState.pressure) * Math.min(1, dt * 1.6);

  if (target === 0 && lineState.pressure < 0.5) lineState.pressure = 0;

  /* Pilot logic */
  if (flowing) {

    lineState.lowTimer += dt;

    if (lineState.pressure >= PILOT_LOW_PSI || lineState.lowTimer >= LOW_PILOT_STARTUP_DELAY) {
      lineState.lowArmed = true;
    }

    if (!lineState.tripped) {
      if (lineState.pressure >= PILOT_HIGH_PSI) {
        tripPilot('HIGH');
      } else if (lineState.lowArmed && lineState.pressure < PILOT_LOW_PSI) {
        tripPilot('LOW');
      }
    }

  } else {

    lineState.lowArmed = false;
    lineState.lowTimer = 0;
  }

  /* Gauge needle (0 psi = lower left, full scale = lower right) */
  const f = Math.min(1, lineState.pressure / LINE_MAX_PSI);
  lineNeedlePivot.rotation.z = Math.PI * 0.75 - f * Math.PI * 1.5;

  /* Choke stem and handwheel follow the opening */
  chokeAnim += (lineState.choke - chokeAnim) * 0.15;
  chokeStemGroup.position.y = 0.62 + chokeAnim / 100 * 0.35;
  chokeWheel.rotation.y = chokeAnim / 100 * Math.PI * 6;

  /* Readouts */
  const psi = Math.round(lineState.pressure);

  if (psi !== shownLinePsi) {
    shownLinePsi = psi;
    document.getElementById('linePressureValue').textContent = psi + ' psi*';
    document.getElementById('lineMetric').innerHTML = psi + ' <small>psi*</small>';
  }
}

/* Wellhead flow particles + valve animation (called every frame) */
let lastFlowing = null;

function animateWellheadFlow(time) {

  animateWellheadValves();
  updateLineInstruments(time);

  const flowing = isProductionFlowing();

  /* Keep the dashboard text in sync (e.g. when power stops or ESD fires) */
  if (flowing !== lastFlowing) {
    lastFlowing = flowing;
    updateWellheadStatus();
  }

  productionFlowParticles.forEach(p => {

    p.mesh.visible = flowing && flowOn;

    if (flowing && flowOn) {
      const position = (time * 0.16 + p.offset) % 1;
      p.mesh.position.copy(productionCurve.getPointAt(position));
    }
  });
}


/* =====================================================================
   [12] RESET / EMERGENCY SHUTDOWN / DEMO
===================================================================== */

function reset() {

  clearInterval(demoTimer);
  demoTimer = null;

  state.power = false;
  state.pumps = false;
  state.esd = false;

  for (const k of CIRCUITS) {
    state[k] = false;
    state.target[k] = 0;
    state.pressure[k] = 0;
  }

  valves.forEach(v => setValve(v, false));
  actuatorControls.forEach(c => setActuatorControl(c, false));

  paused = false;
  document.querySelector('#pauseBtn').textContent = 'Ⅱ PAUSE';

  updateUI();
  updateReadings();

  info(
    'SYSTEM RESET',
    'All simulated circuits are closed and illustrative pressure readings have returned to zero.'
  );

  /* Wellhead side */
  resetWellhead();
  resetLineInstruments();
}

function emergencyShutdown() {

  state.esd = true;
  state.power = false;
  state.pumps = false;

  for (const k of CIRCUITS) {
    state[k] = false;
    state.target[k] = 0;
  }

  valves.forEach(v => setValve(v, false));
  actuatorControls.forEach(c => setActuatorControl(c, false));

  updateUI();

  info(
    'EMERGENCY SHUTDOWN',
    'Training model stopped its simulated power unit and closed simulated circuits. This is not actual OTIS ESD logic.'
  );

  resetWellhead();
}

function startDemo() {

  reset();

  state.power = true;
  state.pumps = true;
  updateUI();

  const steps = [
    ['hp', 'STEP 1 — HP CIRCUIT', 'Illustrative HP circuit opened.'],
    ['mp', 'STEP 2 — MP CIRCUIT', 'Illustrative MP circuit opened.'],
    ['lp', 'STEP 3 — LP CIRCUIT', 'Illustrative LP circuit opened.']
  ];

  let i = 0;

  demoTimer = setInterval(() => {

    if (paused) return;

    if (i < steps.length) {

      const [k, t, d] = steps[i++];
      setCircuit(k, true);
      info(t, d);

    } else {

      valves.forEach(v => setValve(v, true));

      clearInterval(demoTimer);
      demoTimer = null;

      info(
        'DEMONSTRATION COMPLETE',
        'All three illustrative circuits are active. Explore individual controls and components.'
      );
    }

  }, 2200);
}


/* =====================================================================
   [13] BUTTONS & DISPLAY CONTROLS
===================================================================== */

const $ = sel => document.querySelector(sel);

/* ---------- Power / pumps / circuits ---------- */

$('#powerBtn').onclick = () => {

  if (state.esd) return;

  state.power = !state.power;

  if (!state.power) {
    state.pumps = false;
    for (const k of CIRCUITS) {
      state[k] = false;
      state.target[k] = 0;
    }
  }

  updateUI();
};

$('#pumpBtn').onclick = () => {

  if (state.esd) return;

  if (!state.power) {
    info('POWER UNIT OFF', 'Start the simulated power unit before starting the hydraulic pumps.');
    return;
  }

  state.pumps = !state.pumps;
  updateUI();

  info(
    state.pumps ? 'PUMPS RUNNING' : 'PUMPS STOPPED',
    state.pumps
      ? 'Hydraulic pumps are running. Pressure can now build and actuators can be opened.'
      : 'Hydraulic pumps stopped. Pressure will bleed down; opening actuators is blocked.'
  );
};

for (const k of CIRCUITS) {
  $('#' + k + 'Btn').onclick = () => setCircuit(k, !state[k]);
}

/* ---------- Reset / ESD / demo / pause ---------- */

$('#resetBtn').onclick = reset;
$('#esdBtn').onclick = emergencyShutdown;
$('#demoBtn').onclick = startDemo;

$('#pauseBtn').onclick = () => {
  paused = !paused;
  $('#pauseBtn').textContent = paused ? '▶ RESUME' : 'Ⅱ PAUSE';
};

/* ---------- Choke + pilots ---------- */

document.getElementById('chokeSlider').addEventListener('input', e => {
  setChoke(Number(e.target.value));
});

document.getElementById('pilotResetBtn').onclick = resetPilots;

/* ---------- 3D display ---------- */

$('#labelsBtn').onclick = () => {

  labelsOn = !labelsOn;
  labels.forEach(o => { o.visible = labelsOn; });

  $('#labelsBtn').textContent = labelsOn ? 'HIDE LABELS' : 'SHOW LABELS';
};

$('#flowBtn').onclick = () => {
  flowOn = !flowOn;
  $('#flowBtn').textContent = flowOn ? 'HIDE FLOW' : 'SHOW FLOW';
};

$('#xrayBtn').onclick = () => {

  xray = !xray;

  materials.forEach(m => {
    m.transparent = xray;
    m.opacity = xray ? .3 : 1;
    m.depthWrite = !xray;
  });

  $('#xrayBtn').classList.toggle('active', xray);
  $('#viewMode').textContent = xray ? 'X-ray style view' : 'Normal view';
};

$('#explodeBtn').onclick = () => {

  exploded = !exploded;
  cabinet.position.z = exploded ? -.65 : 0;

  $('#explodeBtn').classList.toggle('active', exploded);

  info(
    'EXPLODED VIEW',
    exploded
      ? 'Cabinet assembly shifted for visibility; visual aid only.'
      : 'Cabinet returned to normal position.'
  );
};

/* ---------- Camera views ---------- */

$('#homeBtn').onclick = () => setView(VIEWS.home);
$('#frontBtn').onclick = () => setView(VIEWS.front);
$('#rearBtn').onclick = showRearView;
$('#tankViewBtn')?.addEventListener('click', showTankRearView);

/* Wellhead view button (added to the 3D DISPLAY grid) */
const wellheadViewButton = document.createElement("button");
wellheadViewButton.textContent = "WELLHEAD VIEW";
wellheadViewButton.className = "full";
$('#displayGrid').appendChild(wellheadViewButton);

wellheadViewButton.onclick = () => {

  setView(VIEWS.wellhead);

  info(
    "INTERACTIVE WELLHEAD",
    "Master Valve, Wing Valve and DHSV are driven by panel modules 1, 2 and 3. Other handwheel valves can be clicked to turn them."
  );
};


/* =====================================================================
   [14] CLICK INTERACTION  (raycasting)
===================================================================== */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let down = null;

canvas.addEventListener('pointerdown', e => {
  down = { x: e.clientX, y: e.clientY };
});

canvas.addEventListener('pointerup', e => {

  /* Ignore drags (orbiting) */
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;

  const r = canvas.getBoundingClientRect();

  pointer.set(
    (e.clientX - r.left) / r.width * 2 - 1,
    -((e.clientY - r.top) / r.height * 2 - 1)
  );

  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(clickable, true);
  if (!hits.length) return;

  /* Walk up to the nearest object that has a description */
  let o = hits[0].object;
  while (o && !o.userData.description) o = o.parent;
  if (!o) return;

  /* Manual wellhead handwheel valves */
  if (o.userData.manualValve) {
    toggleManualWellheadValve(o.userData.manualValve);
    return;
  }

  /* Push-pull actuator buttons */
  const actuator = actuatorControls.find(c => c.knob === o);

  if (actuator) {
    setActuatorControl(actuator, !actuator.open);
    return;
  }

  info(o.userData.name || 'Component', o.userData.description || 'Training component');

  /* Cabinet valve blocks */
  const v = valves.find(v => v.body === o || v.handle === o);

  if (v) {

    if (!v.open && (!state.power || !state.pumps)) {
      info(
        state.power ? 'PUMPS NOT RUNNING' : 'POWER UNIT OFF',
        state.power
          ? 'Start the hydraulic pumps before opening this valve.'
          : 'Start the power unit and then the hydraulic pumps before opening this valve.'
      );
      return;
    }

    setValve(v, !v.open);

    info(
      `VALVE ${v.id}`,
      `Illustrative visual state: ${v.open ? 'OPEN' : 'CLOSED'}. Not a verified operating instruction.`
    );

    return;
  }

  /* Selector knobs */
  const s = selectors.find(s => s.knob === o);

  if (s) {

    s.position = (s.position + 1) % 4;
    s.handle.rotation.z = s.position * Math.PI / 4;

    info(
      'SELECTOR CONTROL',
      `Illustrative selector position ${s.position + 1} of 4. Confirm actual function from OTIS documentation.`
    );
  }
});


/* =====================================================================
   [15] ANIMATION LOOP
===================================================================== */

const clock = new THREE.Clock();

function animate() {

  requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), .05);
  const t = clock.elapsedTime;

  if (!paused) {

    /* Cabinet pressures ease toward their targets */
    for (const k of CIRCUITS) {

      const target = (state.power && state.pumps) ? state.target[k] : 0;

      state.pressure[k] += (target - state.pressure[k]) * dt * 1.1;

      if (state.pressure[k] < .08) state.pressure[k] = 0;
    }

    updateReadings();

    /* Cabinet tubing flow particles */
    for (const p of particles) {

      const active = p.key === 'return'
        ? (state.hp || state.mp || state.lp)
        : state[p.key];

      p.mesh.visible = flowOn && active;

      if (active) {
        p.mesh.position.copy(p.curve.getPointAt((t * .13 + p.offset) % 1));
      }
    }
  }

  animateWellheadFlow(t);

  controls.update();
  renderer.render(scene, camera);
}


/* =====================================================================
   [16] RESIZE & STARTUP
===================================================================== */

function resize() {

  const w = canvas.clientWidth;
  const h = canvas.clientHeight;

  if (!w || !h) return;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
}

new ResizeObserver(resize).observe(canvas);

resize();
updateUI();
updateReadings();
resetWellhead();
resetLineInstruments();

info(
  'OTIS V4 TRAINING MODEL',
  'Select a gauge, selector, valve, tubing line or cabinet part. Use the controls to run the illustrative hydraulic simulation.'
);

animate();
