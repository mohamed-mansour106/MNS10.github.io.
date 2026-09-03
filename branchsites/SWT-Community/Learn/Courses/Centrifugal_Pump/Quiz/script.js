/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "A Transfer Centrifugal Pump is configured in the field as a booster pump upstream of a High-Pressure injection pump. What is its primary hydraulic function in this setup?",
    options: [
      "To artificially increase fluid velocity to induce turbulent flow patterns inside the high-pressure manifold.",
      "To provide adequate Net Positive Suction Head (NPSH) and eliminate the risk of cavitation inside the HP pump.",
      "To completely separate dissolved gas phases from the oil stream before compression occurs.",
      "To elevate fluid pressure significantly past its specific bubble point inside the suction manifold."
    ],
    correctIndex: 1,
    explanation: "Booster pumps increase the pressure at the inlet of high-pressure pumps. This ensures the pressure stays well above the vapor pressure of the liquid, providing sufficient Net Positive Suction Head (NPSH) to prevent destructive cavitation."
  },
  {
    question: "During a tank circulation operation to mix H2S scavenger with sour crude, your objective is to safely lower the tank's H2S concentration. What is the standard target range expected before safe export or transport?",
    options: [
      "0.5 – 2.0 ppm",
      "15 – 30 ppm",
      "100 – 150 ppm",
      "500 – 800 ppm"
    ],
    correctIndex: 1,
    explanation: "Circulating sour crude and mixing it with H2S scavenger chemicals aims to sweeten the oil by reducing toxic Hydrogen Sulfide concentration down to safe storage and shipping specs, typically between 15 and 30 ppm."
  },
  {
    question: "You switch the electric transfer pump ON, but the discharge pressure gauge remains static at 0 psig and no fluid circulation is observed. What is the most likely cause and immediate field remedy?",
    options: [
      "The casing is experiencing an air lock; shut down immediately and vent trapped air through the sample point or vent valve.",
      "The impeller is rotating backward; keep running while the electrician swaps the phases under full load.",
      "The fluid density is too high; throttle the suction valve completely to restrict fluid entry and save the motor.",
      "The mechanical seal oil cup is empty; pack the stuffing box with grease while the shaft is spinning."
    ],
    correctIndex: 0,
    explanation: "Centrifugal pumps cannot pump air/gases due to low fluid density. If an air lock occurs, the pump will lose prime and show zero pressure. Running it dry will damage mechanical seals, so you must shut down immediately and vent the air."
  },
  {
    question: "When reviewing your setup's electrical safety and compliance in hazardous zones, which of the following mechanical or electrical components is recognized as a valid 'Energy Isolating Device' for LOTO?",
    options: [
      "The red emergency push-button selector switch on the local control panel.",
      "A closed pneumatic control valve controlled by an automated ESD loop.",
      "A manually operated electrical circuit breaker that physically breaks or blocks the power path.",
      "A green 'Stop' push button on the magnetic contactor housing."
    ],
    correctIndex: 2,
    explanation: "An Energy Isolating Device must physically prevent the transmission or release of energy. Push buttons, control switches, and interlocks do not provide safe physical isolation; a manual circuit breaker or blind flange does."
  },
  {
    question: "You are setting up a water treatment circulation loop to neutralize acidic produced water inside a storage tank. If the initial water pH is highly acidic (around 3 to 5), what is the targeted pH range you are trying to achieve after proper chemical mixing?",
    options: [
      "pH 1 to 2",
      "pH 5 to 6",
      "pH 7 to 8",
      "pH 12 to 14"
    ],
    correctIndex: 2,
    explanation: "The operational goal of acidic water treatment in well testing is to neutralize the fluid before disposal or further processing, bringing the pH up from an acidic 3–5 range to a neutral/slightly alkaline 7–8 range."
  },
  {
    question: "What distinguishes a Two-Stage Centrifugal Pump from a Single-Stage Centrifugal Pump when planning fluid transfer operations over long distances or high system resistance?",
    options: [
      "A two-stage pump contains two impellers arranged in series to deliver higher discharge pressure.",
      "A two-stage pump handles large solid drilling muds, while single-stage pumps only handle clean diesel.",
      "A two-stage pump uses a diesel engine drive and an electric motor simultaneously on the same shaft.",
      "A two-stage pump separates gas from oil in the first stage and pumps fluid in the second stage."
    ],
    correctIndex: 0,
    explanation: "Single-stage pumps use one impeller for lower pressure targets. Two-stage centrifugal pumps line up two impellers in series: the discharge of the first stage feeds the suction of the second, doubling the pressure head output."
  },
  {
    question: "A Transfer Centrifugal Pump is running under normal, stable operating conditions to transfer fluid from an atmospheric tank. What is the typical expected discharge pressure range for this class of equipment?",
    options: [
      "0 – 10 psig",
      "50 – 150 psig",
      "600 – 1200 psig",
      "3000 – 5000 psig"
    ],
    correctIndex: 1,
    explanation: "Transfer centrifugal pumps are designed to relocate fluids within a facility rather than inject them into high-pressure lines. Their typical operating discharge pressure ranges moderately between 50 to 150 psig (3.5 to 10 bar)."
  },
  {
    question: "The pump impeller must rotate in the exact direction indicated by the arrow on the casing. What is the direct consequence of running a centrifugal pump with an incorrect motor shaft rotation?",
    options: [
      "The discharge pressure will instantly double, rupturing the discharge hose.",
      "The mechanical seal will immediately begin pumping seal oil back into the suction line.",
      "Poor pump performance, highly reduced flow rates, low pressure head, and potential mechanical wear.",
      "The fluid will flow backward from the discharge line directly into the suction line."
    ],
    correctIndex: 2,
    explanation: "If a motor is wired backward, the impeller still throws fluid outward due to centrifugal force, but the blades run backwards. This severely drops pump efficiency, resulting in low flow, low pressure, and friction damage."
  },
  {
    question: "When performing pre-operational checks on a transfer pump handling sour production streams containing H2S or CO2, what material constraint must the equipment satisfy?",
    options: [
      "It must comply with NACE sour-service standards using corrosion-resistant alloys and specialized elastomers.",
      "It must utilize standard ASTM A36 structural carbon steel configurations with soft paper gaskets.",
      "It must be constructed out of high-plasticity PVC composite piping layouts to completely eliminate spark hazards.",
      "It only requires Zone II explosion-proof lubrication systems, ignoring internal fluid chemistry completely."
    ],
    correctIndex: 0,
    explanation: "Sour service environments containing H2S present a major risk for sulfide stress cracking (SSC) and hydrogen-induced cracking. Equipment must meet strict NACE standards, utilizing highly specific alloys and chemical-resistant elastomers."
  },
  {
    question: "What is the correct sequential procedure for transitioning a centrifugal pump from a stable bypass circulation loop to transferring fluid to its final destination (such as a loading truck or flare burner)?",
    options: [
      "Shut off the pump, close all valves completely, restart the pump, and quickly slap open the destination valve.",
      "Open the suction sample point, close the suction valve completely, and throttle the bypass line down.",
      "Keep the bypass valve wide open and restrict the main suction line valve until the discharge pressure surges to maximum.",
      "Open the discharge ball valve to the required destination gradually while simultaneously closing the bypass line valve."
    ],
    correctIndex: 3,
    explanation: "To smoothly transition flow without shocking the piping system or deadheading the pump, you must open the path to the new destination gradually while systematically blocking off the bypass circulation loop."
  }
];



/* ===== State ===== */
let state = {
  currentIndex: 0,
  answers: Array(questions.length).fill(null),
  timeLeft: 300, // 5 minutes
  shuffled: []
};

let timerInterval = null;
let soundEnabled = true;
let darkMode = false;
let finalScorePercent = 0;
let signedInUser = null;
let authChecked = false;
let isQuizFinished = false;

const EMAILJS_CONFIG = {
  publicKey: "coNpckhEjkeGVGXcG",
  serviceId: "service_os8z7kz",
  templateId: "template_rcc2ee3"
};

/* ===== Elements ===== */
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const currentIndexEl = document.getElementById("currentIndex");
const totalQuestionsEl = document.getElementById("totalQuestions");
const timerValue = document.getElementById("timerValue");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const analysisList = document.getElementById("analysisList");
const scoreValue = document.getElementById("scoreValue");
const highScore = document.getElementById("highScore");
const scoreRing = document.getElementById("scoreRing");
const circleProgress = document.getElementById("circleProgress");
const circleText = document.getElementById("circleText");
const toggleModeBtn = document.getElementById("toggleMode");
const toggleSoundBtn = document.getElementById("toggleSound");
const certNameInput = document.getElementById("certName");
const showCertBtn = document.getElementById("showCertBtn");
const certificateSection = document.getElementById("certificateSection");
const downloadCertBtn = document.getElementById("downloadCertBtn");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const certRecipient = document.getElementById("certRecipient");
const certScore = document.getElementById("certScore");
const certDate = document.getElementById("certDate");
const certId = document.getElementById("certId");
const certCourse = document.getElementById("certCourse");

const resumeModal = document.getElementById("resumeModal");
const continueBtn = document.getElementById("continueBtn");
const startOverBtn = document.getElementById("startOverBtn");
const restartBtn = document.getElementById("restartBtn");

/* ===== Sounds ===== */
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
const finishSound = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");

/* ===== Utilities ===== */
function playSound(audio) {
  if (!soundEnabled) return;
  audio.currentTime = 0;
  audio.play();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function saveProgress() {
  localStorage.setItem("quizState", JSON.stringify(state));
  localStorage.setItem("darkMode", darkMode ? "1" : "0");
  localStorage.setItem("soundEnabled", soundEnabled ? "1" : "0");
}

function loadProgress() {
  const saved = localStorage.getItem("quizState");
  if (saved) return JSON.parse(saved);
  return null;
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(state.timeLeft / 60)).padStart(2, "0");
  const seconds = String(state.timeLeft % 60).padStart(2, "0");
  timerValue.textContent = `${minutes}:${seconds}`;
}

function updateProgress() {
  const progress = ((state.currentIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  currentIndexEl.textContent = state.currentIndex + 1;
  totalQuestionsEl.textContent = questions.length;

  // Update animated circle
  const circumference = 2 * Math.PI * 52;
  circleProgress.style.strokeDasharray = circumference;
  circleProgress.style.strokeDashoffset = circumference - (progress / 100) * circumference;
  circleText.textContent = `${Math.round(progress)}%`;
}

function renderQuestion() {
  const q = state.shuffled[state.currentIndex];
  questionText.textContent = q.question;

  optionsList.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    if (state.answers[state.currentIndex] === index) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", () => {
      state.answers[state.currentIndex] = index;
      playSound(clickSound);
      renderQuestion();
      saveProgress();
    });
    optionsList.appendChild(btn);
  });

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.textContent = state.currentIndex === questions.length - 1 ? "Finish" : "Next";

  updateProgress();
  saveProgress();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    saveProgress();

    if (state.timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

/* ===== Result ===== */
function finishQuiz() {
  if (isQuizFinished) return;
  isQuizFinished = true;

  playSound(finishSound);
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  certificateSection.classList.add("hidden");
  localStorage.removeItem("quizState");

  let correct = 0;
  state.shuffled.forEach((q, i) => {
    if (state.answers[i] === q.correctIndex) correct++;
  });

  finalScorePercent = Math.round((correct / questions.length) * 100);
  scoreValue.textContent = `${finalScorePercent}%`;

  // High score
  const best = Math.max(finalScorePercent, Number(localStorage.getItem("highScore") || 0));
  localStorage.setItem("highScore", best);
  highScore.textContent = `${best}%`;

  // Animated score ring
  const circumference = 2 * Math.PI * 68;
  scoreRing.style.strokeDasharray = circumference;
  scoreRing.style.strokeDashoffset = circumference - (finalScorePercent / 100) * circumference;

  renderAnalysis();
  sendQuizResultEmail({
    userName: getSignedInUserName(),
    userEmail: (signedInUser?.email || "").trim(),
    scorePercent: finalScorePercent,
    scoreRaw: `${correct}/${questions.length}`,
    courseName: document.querySelector(".title")?.textContent || "Skill Exam"
  });
}

function renderAnalysis() {
  analysisList.innerHTML = "";

  state.shuffled.forEach((q, i) => {
    const userAnswerIndex = state.answers[i];
    const userAnswer = userAnswerIndex !== null ? q.options[userAnswerIndex] : "No Answer";
    const correctAnswer = q.options[q.correctIndex];

    const item = document.createElement("div");
    item.className = "analysis-item";
    item.innerHTML = `
      <div class="q">${i + 1}. ${q.question}</div>
      <div class="answer ${userAnswerIndex === q.correctIndex ? "correct" : "wrong"}">
        Your Answer: ${userAnswer}
      </div>
      <div class="answer correct">Correct Answer: ${correctAnswer}</div>
      <div class="explanation">${q.explanation}</div>
    `;
    analysisList.appendChild(item);
  });
}

/* ===== Theme & Sound ===== */
function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  toggleModeBtn.textContent = darkMode ? "Light Mode" : "Dark Mode";
}

function applySound() {
  toggleSoundBtn.textContent = soundEnabled ? "Sound: On" : "Sound: Off";
}

/* ===== Initialization ===== */
function initQuiz(savedState = null) {
  isQuizFinished = false;
  state.shuffled = shuffleArray(questions);

  if (savedState) {
    state = savedState;
  } else {
    state.currentIndex = 0;
    state.answers = Array(questions.length).fill(null);
    state.timeLeft = 300;
    state.shuffled = shuffleArray(questions);
  }

  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  certificateSection.classList.add("hidden");

  updateTimerDisplay();
  renderQuestion();
  startTimer();
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function showCertificate() {
  const name = getSignedInUserName();
  certRecipient.textContent = name;
  certScore.textContent = `${finalScorePercent}%`;
  certCourse.textContent = document.querySelector(".title")?.textContent || "Skill Exam";
  certDate.textContent = formatDate(new Date());
  certId.textContent = `QA-${Date.now().toString(36).toUpperCase()}`;

  resultSection.classList.add("hidden");
  certificateSection.classList.remove("hidden");
}

function getSignedInUserName() {
  const displayName = (signedInUser?.displayName || "").trim();
  if (displayName) return displayName;

  const typedName = (certNameInput.value || "").trim();
  if (typedName) return typedName;

  const email = (signedInUser?.email || "").trim();
  if (email.includes("@")) return email.split("@")[0];

  return "Student";
}

function buildLoginRedirectUrl() {
  const loginUrl = new URL("../../../../login.html", window.location.href);
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  loginUrl.searchParams.set("redirect", currentPath);
  return loginUrl.toString();
}

function startAfterAuth() {
  if (authChecked) return;
  authChecked = true;

  const saved = loadProgress();
  if (saved) {
    resumeModal.classList.remove("hidden");
  } else {
    initQuiz();
  }

  const best = localStorage.getItem("highScore") || 0;
  highScore.textContent = `${best}%`;
}

function sendQuizResultEmail({ userName, userEmail, scorePercent, scoreRaw, courseName }) {
  if (!window.emailjs || !emailjs.init || !emailjs.send) {
    console.warn("EmailJS is not loaded. Skipping result email.");
    return;
  }

  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  } catch (err) {
    console.error("EmailJS init failed:", err);
    return;
  }

  const templateParams = {
    name: userName,
    result: `${scoreRaw} (${scorePercent}%)`
  };

  emailjs
    .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
    .then(() => {
      console.log("Quiz result email sent.");
    })
    .catch((error) => {
      console.error("Failed to send quiz result email:", error);
    });
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensurePdfLibs() {
  if (!window.html2canvas) {
    await loadScriptOnce("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js");
  }
  if (!window.jspdf) {
    await loadScriptOnce("https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js");
  }
}

/* ===== Events ===== */
prevBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    playSound(clickSound);
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
    playSound(clickSound);
    renderQuestion();
  } else {
    finishQuiz();
  }
});

toggleModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme();
  saveProgress();
});

toggleSoundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  applySound();
  saveProgress();
});

continueBtn.addEventListener("click", () => {
  resumeModal.classList.add("hidden");
  initQuiz(loadProgress());
});

startOverBtn.addEventListener("click", () => {
  resumeModal.classList.add("hidden");
  localStorage.removeItem("quizState");
  initQuiz();
});

restartBtn.addEventListener("click", () => {
  initQuiz();
});

showCertBtn.addEventListener("click", () => {
  showCertificate();
});

downloadCertBtn.addEventListener("click", async () => {
  showCertificate();
  try {
    await ensurePdfLibs();
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);

    const { jsPDF } = window.jspdf;
    const certEl = document.getElementById("certificateCard");
    const canvas = await html2canvas(certEl, {
      scale: 2,
      backgroundColor: "#ffffff"
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgRatio = canvas.width / canvas.height;
    const pdfRatio = pdfWidth / pdfHeight;
    let renderWidth = pdfWidth;
    let renderHeight = pdfHeight;
    if (imgRatio > pdfRatio) {
      renderHeight = pdfWidth / imgRatio;
    } else {
      renderWidth = pdfHeight * imgRatio;
    }
    const x = (pdfWidth - renderWidth) / 2;
    const y = (pdfHeight - renderHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight);
    pdf.save("certificate.pdf");
  } catch (err) {
    alert("PDF download failed. Make sure you are online or open the app via a local server.");
  }
});

backToResultsBtn.addEventListener("click", () => {
  certificateSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
});

/* ===== Load ===== */
window.addEventListener("load", () => {
  darkMode = localStorage.getItem("darkMode") === "1";
  soundEnabled = localStorage.getItem("soundEnabled") !== "0";
  applyTheme();
  applySound();

  if (!window.firebase || !firebase.auth) {
    alert("Authentication is not available. Please check Firebase setup.");
    return;
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = buildLoginRedirectUrl();
      return;
    }

    signedInUser = user;
    certNameInput.value = getSignedInUserName();
    startAfterAuth();
  });
});
