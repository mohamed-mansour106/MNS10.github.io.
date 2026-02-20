// FieldNotes Lite — No libs
(function(){
  // ---------- State ----------
  let rows = [];          // raw rows {time_min, pressure_psia, oil_bopd, gas_mscfd, water_bopd, temp_F}
  let processed = [];     // computed & filtered
  let timer = null;
  let lastTimeMin = 0;
  const alarmLog = [];

  // ---------- Elements ----------
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  tabs.forEach(btn=>btn.addEventListener('click', ()=>switchTab(btn.dataset.tab, btn)));

  const fileInput = document.getElementById('fileInput');
  const btnLoadDemo = document.getElementById('btnLoadDemo');
  const btnExportCSV = document.getElementById('btnExportCSV');

  const statsEl = document.getElementById('stats');
  const fractionsEl = document.getElementById('fractions');
  const tableWrap = document.getElementById('tableWrap');

  const timeUnit = document.getElementById('timeUnit');
  const smoothEl = document.getElementById('smooth');
  const downNEl = document.getElementById('downN');

  const btnStart = document.getElementById('btnStart');
  const btnStop = document.getElementById('btnStop');
  const btnManual = document.getElementById('btnManual');
  const btnClear = document.getElementById('btnClear');

  const thrPHigh = document.getElementById('thrPHigh');
  const thrPLow  = document.getElementById('thrPLow');
  const thrQoHigh= document.getElementById('thrQoHigh');
  const btnAlarmTest = document.getElementById('btnAlarmTest');
  const alarmLogEl = document.getElementById('alarmLog');

  const btnSave = document.getElementById('btnSave');
  const projFile = document.getElementById('projFile');
  const btnLoad = document.getElementById('btnLoad');
  const notesEl = document.getElementById('notes');

  const modal = document.getElementById('modal');
  const btnModalAdd = document.getElementById('btnModalAdd');
  const btnModalClose = document.getElementById('btnModalClose');
  const m_time = document.getElementById('m_time');
  const m_p = document.getElementById('m_p');
  const m_qo = document.getElementById('m_qo');
  const m_qg = document.getElementById('m_qg');
  const m_qw = document.getElementById('m_qw');
  const m_T = document.getElementById('m_T');

  const cPressure = document.getElementById('cPressure');
  const cRates = document.getElementById('cRates');
  const cRatios = document.getElementById('cRatios');
  const cHorner = document.getElementById('cHorner');

  const simInterval = document.getElementById('simInterval');
  const simNoise = document.getElementById('simNoise');

  // ---------- Tabs ----------
  function switchTab(id, btn){
    tabs.forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    panels.forEach(p=>p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    renderAll();
  }

  // ---------- CSV Helpers ----------
  function parseCSV(text){
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map(s=>s.trim().toLowerCase());
    const out = [];
    for(let i=1;i<lines.length;i++){
      if(!lines[i].trim()) continue;
      const cols = lines[i].split(',').map(s=>s.trim());
      const r = {};
      headers.forEach((h,idx)=>{
        const v = cols[idx];
        r[h] = (v===''||v===undefined) ? null : (isFinite(v) ? Number(v) : v);
      });
      out.push(normalizeRow(r));
    }
    return out;
  }

  function normalizeRow(r){
    const mul = 1; // assume time_min provided
    return {
      time_min: pickNum(r, ['time_min','time','t_min'], 0)*mul,
      pressure_psia: pickNum(r, ['pressure_psia','p','press'], null),
      oil_bopd: pickNum(r, ['oil_bopd','q_o','oil_rate'], 0),
      gas_mscfd: pickNum(r, ['gas_mscfd','q_g','gas_rate'], 0),
      water_bopd: pickNum(r, ['water_bopd','q_w','water_rate'], 0),
      temp_F: pickNum(r, ['temp_f','temp','temperature'], null)
    };
  }

  function pickNum(obj, keys, defv){
    for(const k of keys){
      if(obj[k]!==undefined && obj[k]!==null && isFinite(obj[k])) return Number(obj[k]);
    }
    return defv;
  }

  function toCSV(arr){
    if(!arr.length) return '';
    const head = Object.keys(arr[0]).join(',');
    const lines = arr.map(r => Object.values(r).map(v => (v==null?'':String(v))).join(','));
    return [head, ...lines].join('\n');
  }

  // ---------- Processing ----------
  function movingAvg(a, w){
    if(w<=1) return a.slice();
    const out=[], n=a.length; let sum=0;
    for(let i=0;i<n;i++){
      sum += a[i];
      if(i>=w) sum -= a[i-w];
      out.push(i>=w-1 ? sum/w : a[i]);
    }
    return out;
  }

  function downsampleIdx(n, step){
    if(step<=1) return Array.from({length:n}, (_,i)=>i);
    const idx=[]; for(let i=0;i<n;i+=step) idx.push(i); return idx;
  }

  function computeProcessed(){
    const t = rows.map(r=>r.time_min||0);
    const p = rows.map(r=>r.pressure_psia||0);
    const qo= rows.map(r=>r.oil_bopd||0);
    const qg= rows.map(r=>r.gas_mscfd||0);
    const qw= rows.map(r=>r.water_bopd||0);
    const T = rows.map(r=>r.temp_F||null);

    const w = Number(smoothEl.value||1);
    const tSm = movingAvg(t,1);
    const pSm = movingAvg(p,w);
    const qoSm= movingAvg(qo,w);
    const qgSm= movingAvg(qg,w);
    const qwSm= movingAvg(qw,w);

    const ds = Number(downNEl.value||1);
    const idx = downsampleIdx(tSm.length, ds);

    const unit = timeUnit.value;
    const out = [];
    for(const i of idx){
      const timeDisp = unit==='hr' ? (tSm[i]/60) : tSm[i];
      const gor = (qoSm[i]>0) ? (qgSm[i]*1000)/qoSm[i] : 0;
      const wc = (qoSm[i]+qwSm[i])>0 ? (qwSm[i]/(qoSm[i]+qwSm[i]))*100 : 0;
      out.push({
        t_display: timeDisp,
        pressure_psia: pSm[i],
        oil_bopd: qoSm[i],
        gas_mscfd: qgSm[i],
        water_bopd: qwSm[i],
        gor_scf_per_stb: gor,
        watercut_pct: wc,
        temp_F: T[i] ?? ''
      });
    }

    // cumulatives via trapezoid (time in hours internally)
    let cumO=0,cumW=0,cumG=0;
    for(let i=1;i<out.length;i++){
      const dt = out[i].t_display - out[i-1].t_display;
      const dt_hr = (unit==='hr') ? dt : dt/60;
      const qoAvg = 0.5*(out[i].oil_bopd + out[i-1].oil_bopd);
      const qwAvg = 0.5*(out[i].water_bopd + out[i-1].water_bopd);
      const qgAvg = 0.5*(out[i].gas_mscfd + out[i-1].gas_mscfd);
      cumO += qoAvg * dt_hr / 24.0;
      cumW += qwAvg * dt_hr / 24.0;
      cumG += qgAvg * dt_hr / 24.0;
      out[i].cum_oil_stb = cumO;
      out[i].cum_water_bbl = cumW;
      out[i].cum_gas_mscf = cumG;
    }
    if(out.length){
      out[0].cum_oil_stb = 0; out[0].cum_water_bbl = 0; out[0].cum_gas_mscf = 0;
    }
    processed = out;
  }

  // ---------- Stats & Table ----------
  function fmt(v){ return (v==null||isNaN(v)) ? '—' : Number(v).toFixed(2); }
  function avg(arr){ return arr.reduce((a,b)=>a+b,0)/Math.max(arr.length,1); }

  function renderStats(){
    if(!processed.length){ statsEl.textContent = '—'; fractionsEl.textContent='—'; return; }
    const last = processed[processed.length-1];
    const P = processed.map(r=>r.pressure_psia||0);
    const Qo= processed.map(r=>r.oil_bopd||0);
    const Qw= processed.map(r=>r.water_bopd||0);
    const Qg= processed.map(r=>r.gas_mscfd||0);
    const GOR= processed.map(r=>r.gor_scf_per_stb||0);
    const WC= processed.map(r=>r.watercut_pct||0);

    statsEl.textContent =
`السجلات: ${processed.length}
Pmax: ${fmt(Math.max(...P))} psia
Pmin: ${fmt(Math.min(...P))} psia
Oil avg: ${fmt(avg(Qo))} bopd
Water avg: ${fmt(avg(Qw))} bopd
Gas avg: ${fmt(avg(Qg))} MSCFD
GOR avg: ${fmt(avg(GOR))} scf/stb
Oil Cum: ${fmt(last.cum_oil_stb||0)} stb
Water Cum: ${fmt(last.cum_water_bbl||0)} bbl
Gas Cum: ${fmt(last.cum_gas_mscf||0)} MSCF`;

    fractionsEl.textContent = `Water Cut avg: ${fmt(avg(WC))} %`;
  }

  function renderTable(){
    const recent = rows.slice(-100);
    const head = ['time_min','pressure_psia','oil_bopd','gas_mscfd','water_bopd','temp_F'];
    const html = [`<table><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>`,
      ...recent.map(r=>`<tr>${head.map(h=>`<td>${r[h] ?? ''}</td>`).join('')}</tr>`),
      `</tbody></table>`
    ].join('');
    tableWrap.innerHTML = html;
  }

  // ---------- Charts (Canvas) ----------
  function plotLine(canvas, xs, ys, labelX, labelY, dashed=false, stroke='#0f766e'){
    const ctx = canvas.getContext('2d');
    const W=canvas.width, H=canvas.height;
    const padL=60, padR=20, padT=20, padB=40;
    const plotW=W-padL-padR, plotH=H-padT-padB;
    ctx.clearRect(0,0,W,H);

    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const x2px = x => padL + ((x-minX)/(maxX-minX||1))*plotW;
    const y2px = y => H-padB - ((y-minY)/(maxY-minY||1))*plotH;

    // axes
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(padL,padT); ctx.lineTo(padL,H-padB); ctx.lineTo(W-padR,H-padB); ctx.stroke();

    // grid/ticks
    ctx.fillStyle = '#475569'; ctx.font = '12px system-ui';
    for(let i=0;i<=5;i++){
      const tx = minX + i*(maxX-minX)/5; const px = x2px(tx);
      ctx.fillText(String(Number(tx).toFixed(2)), px-10, H-padB+16);
      ctx.strokeStyle='#e2e8f0'; ctx.beginPath(); ctx.moveTo(px,padT); ctx.lineTo(px,H-padB); ctx.stroke();
    }
    for(let i=0;i<=5;i++){
      const ty = minY + i*(maxY-minY)/5; const py = y2px(ty);
      ctx.fillText(String(Number(ty).toFixed(2)), 6, py+4);
      ctx.strokeStyle='#e2e8f0'; ctx.beginPath(); ctx.moveTo(padL,py); ctx.lineTo(W-padR,py); ctx.stroke();
    }

    // line
    if(dashed){ ctx.setLineDash([6,4]); } else { ctx.setLineDash([]); }
    ctx.strokeStyle=stroke; ctx.lineWidth=2;
    ctx.beginPath();
    for(let i=0;i<xs.length;i++){
      const x=x2px(xs[i]), y=y2px(ys[i]);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.stroke();

    // labels
    ctx.fillStyle='#0f172a'; ctx.font='14px system-ui';
    ctx.fillText(labelX, W/2-20, H-8);
    ctx.save(); ctx.translate(14, H/2); ctx.rotate(-Math.PI/2); ctx.fillText(labelY, 0, 0); ctx.restore();
  }

  function renderCharts(){
    if(!processed.length){
      [cPressure,cRates,cRatios,cHorner].forEach(c=>c.getContext('2d').clearRect(0,0,c.width,c.height));
      return;
    }
    const t = processed.map(r=>r.t_display);
    plotLine(cPressure, t, processed.map(r=>r.pressure_psia||0), 'الزمن', 'الضغط (psia)');
    plotLine(cRates, t, processed.map(r=>r.oil_bopd||0), 'الزمن', 'المعدلات (bpd)');
    plotLine(cRates, t, processed.map(r=>r.water_bopd||0), 'الزمن', 'المعدلات (bpd)', true, '#1e293b');
    plotLine(cRatios, t, processed.map(r=>r.gor_scf_per_stb||0), 'الزمن', 'GOR / WC');
    plotLine(cRatios, t, processed.map(r=>r.watercut_pct||0), 'الزمن', 'GOR / WC', true, '#1e293b');

    // Horner: detect last flowing point (any rate >0)
    const flowIdx = (()=>{
      for(let i=rows.length-1;i>=0;i--){
        if((rows[i].oil_bopd||0)>0 || (rows[i].gas_mscfd||0)>0 || (rows[i].water_bopd||0)>0) return i;
      }
      return -1;
    })();
    const tp_min = (flowIdx>=0) ? rows[flowIdx].time_min : (rows.length? rows[rows.length-1].time_min/2 : 0);
    const hornerX=[], hornerY=[];
    for(const r of rows){
      const dt = r.time_min - tp_min;
      if(dt<=0) continue;
      hornerX.push(Math.log10((tp_min+dt)/dt));
      hornerY.push(r.pressure_psia||0);
    }
    if(hornerX.length>3){
      plotLine(cHorner, hornerX, hornerY, 'log((tₚ+Δt)/Δt)', 'p (psia)');
    } else {
      const ctx = cHorner.getContext('2d');
      ctx.clearRect(0,0,cHorner.width,cHorner.height);
      ctx.font='14px system-ui';
      ctx.fillText('بيانات غير كافية لرسم Horner.', 20, 30);
    }
  }

  // ---------- Alarms ----------
  function pushAlarm(msg){
    const stamp = new Date().toLocaleString();
    alarmLog.push(`${stamp} — ${msg}`);
    alarmLogEl.textContent = alarmLog.slice(-200).join('\n');
  }

  function checkAlarms(r){
    if(r.pressure_psia!=null){
      if(r.pressure_psia > Number(thrPHigh.value)) pushAlarm(`إنذار: ضغط عالي ${r.pressure_psia} psia`);
      if(r.pressure_psia < Number(thrPLow.value))  pushAlarm(`إنذار: ضغط منخفض ${r.pressure_psia} psia`);
    }
    if(r.oil_bopd > Number(thrQoHigh.value)) pushAlarm(`إنذار: معدل نفط عالي ${r.oil_bopd} bopd`);
  }

  // ---------- Acquisition (Simulation) ----------
  function randn(){ // simple gaussian-ish
    return (Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()-3);
  }

  function simStep(){
    // baseline trends
    lastTimeMin += Number(simInterval.value||1)/60.0; // seconds -> minutes
    const baseP = 3200 - 5*(lastTimeMin/10);
    const baseQo = 320 + 0.5*(lastTimeMin/10);
    const baseQg = 160 + 0.25*(lastTimeMin/10);
    const baseQw = 20 + 0.1*(lastTimeMin/10);
    const noise = Number(simNoise.value||0.3);

    const r = {
      time_min: Number((lastTimeMin).toFixed(3)),
      pressure_psia: Math.max(500, baseP + noise*50*randn()),
      oil_bopd: Math.max(0, baseQo + noise*5*randn()),
      gas_mscfd: Math.max(0, baseQg + noise*3*randn()),
      water_bopd: Math.max(0, baseQw + noise*2*randn()),
      temp_F: 175 + noise*randn()
    };
    rows.push(r);
    checkAlarms(r);
    computeProcessed();
    renderAll();
  }

  // ---------- Render all ----------
  function renderAll(){
    renderStats();
    renderTable();
    renderCharts();
    btnExportCSV.disabled = processed.length===0;
  }

  // ---------- Events ----------
  fileInput.addEventListener('change', e=>{
    const f = e.target.files?.[0]; if(!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const parsed = parseCSV(String(ev.target.result||''));
      rows = rows.concat(parsed);
      if(rows.length) lastTimeMin = rows[rows.length-1].time_min||0;
      computeProcessed(); renderAll();
    };
    reader.readAsText(f);
  });

  btnLoadDemo.addEventListener('click', ()=>{
    const csv = `time_min,pressure_psia,oil_bopd,gas_mscfd,water_bopd,temp_F
0,3200,300,150,20,180
10,3180,305,152,22,179
20,3160,310,156,24,179
30,3130,320,160,25,178
40,3090,330,168,28,177
50,3050,340,175,30,177
60,3000,350,180,33,176
70,2980,0,0,0,176
80,3060,0,0,0,175
90,3110,0,0,0,175
100,3140,0,0,0,174
110,3160,0,0,0,174`;
    rows = parseCSV(csv);
    lastTimeMin = rows[rows.length-1].time_min||0;
    computeProcessed(); renderAll();
  });

  btnExportCSV.addEventListener('click', ()=>{
    // export processed
    const csv = toCSV(processed);
    const blob = new Blob([csv], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'fieldnotes_lite_processed.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  });

  // Acquisition controls
  btnStart.addEventListener('click', ()=>{
    if(timer) return;
    timer = setInterval(simStep, Math.max(200, Number(simInterval.value||1)*1000));
    btnStart.disabled = true; btnStop.disabled = false;
  });
  btnStop.addEventListener('click', ()=>{
    clearInterval(timer); timer=null;
    btnStart.disabled = false; btnStop.disabled = true;
  });
  btnManual.addEventListener('click', ()=>{ modal.classList.remove('hidden'); });
  btnClear.addEventListener('click', ()=>{
    rows = []; processed = []; lastTimeMin=0;
    renderAll();
  });

  btnModalAdd.addEventListener('click', ()=>{
    const r = {
      time_min: Number(m_time.value||0),
      pressure_psia: Number(m_p.value||0),
      oil_bopd: Number(m_qo.value||0),
      gas_mscfd: Number(m_qg.value||0),
      water_bopd: Number(m_qw.value||0),
      temp_F: Number(m_T.value||0),
    };
    rows.push(r);
    if(r.time_min>lastTimeMin) lastTimeMin=r.time_min;
    computeProcessed(); renderAll();
    modal.classList.add('hidden');
  });
  btnModalClose.addEventListener('click', ()=> modal.classList.add('hidden'));

  // Alarms
  btnAlarmTest.addEventListener('click', ()=>{
    pushAlarm('اختبار إنذار');
  });

  // Project save/load
  btnSave.addEventListener('click', ()=>{
    const proj = { rows, notes: notesEl.value };
    const blob = new Blob([JSON.stringify(proj,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href=url; a.download='fieldnotes_lite_project.json';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  });
  btnLoad.addEventListener('click', ()=>{
    const f = projFile.files?.[0]; if(!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try{
        const proj = JSON.parse(String(ev.target.result||'{}'));
        rows = Array.isArray(proj.rows) ? proj.rows : [];
        notesEl.value = proj.notes || '';
        if(rows.length) lastTimeMin = rows[rows.length-1].time_min||0;
        computeProcessed(); renderAll();
      }catch(e){ alert('ملف مشروع غير صالح'); }
    };
    reader.readAsText(f);
  });

  // initial
  renderAll();
})();