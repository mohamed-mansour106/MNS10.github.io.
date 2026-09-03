/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [

  {
    question: "During indirect fired heater operation, why must the shell be filled with water/glycol above the coil level before start-up?",
    options: [
      "To increase fuel efficiency",
      "To prevent coil overheating and failure",
      "To reduce separator pressure",
      "To increase gas flow rate"
    ],
    correctIndex: 1,
    explanation: "The water/glycol bath is the heat transfer medium. Without proper level, the coil will overheat and can be permanently damaged due to direct burner heat exposure."
  },

  {
    question: "What is the main purpose of glycol in the heater shell?",
    options: [
      "Increase gas density",
      "Prevent freezing and improve heat transfer stability",
      "Increase burner flame temperature",
      "Reduce coil pressure drop"
    ],
    correctIndex: 1,
    explanation: "Glycol is added to prevent freezing in cold environments and to stabilize heat transfer properties of the heating medium."
  },

  {
    question: "What is the primary risk if heater coil pressure exceeds design limits?",
    options: [
      "Improved separation efficiency",
      "Coil rupture and catastrophic release of hydrocarbons",
      "Increased burner efficiency",
      "Reduced temperature control accuracy"
    ],
    correctIndex: 1,
    explanation: "Coils are high-pressure rated (5K–10K psi). Overpressure can lead to mechanical failure and dangerous hydrocarbon release."
  },

  {
    question: "Why is a bypass line used during heater operation?",
    options: [
      "To increase heating efficiency",
      "To protect the coil from pressure and allow flow diversion",
      "To increase gas production",
      "To reduce fuel consumption"
    ],
    correctIndex: 1,
    explanation: "The bypass line allows fluid to avoid the heater during unstable conditions or startup, protecting the coil from sudden pressure/temperature changes."
  },

  {
    question: "What is the typical function of the burner in an indirect fired heater?",
    options: [
      "Directly heat the oil flow",
      "Heat the water/glycol bath",
      "Compress the gas stream",
      "Measure flow rate"
    ],
    correctIndex: 1,
    explanation: "The burner heats the water/glycol bath, which then indirectly transfers heat to the process fluid through the coil."
  },

  {
    question: "What is the consequence of insufficient air in burner combustion?",
    options: [
      "High efficiency flame",
      "Orange flame and black smoke formation",
      "Increased gas flow stability",
      "Lower coil pressure"
    ],
    correctIndex: 1,
    explanation: "Insufficient air leads to incomplete combustion, producing soot (black smoke) and unstable flame conditions."
  },

  {
    question: "What is the purpose of the ESD system in heater operation?",
    options: [
      "Increase heating rate",
      "Automatically shut down system during unsafe conditions",
      "Increase fuel pressure",
      "Improve gas quality"
    ],
    correctIndex: 1,
    explanation: "ESD (Emergency Shutdown) protects equipment and personnel by stopping operation during abnormal or hazardous conditions."
  },

  {
    question: "Why is purging required before burner ignition?",
    options: [
      "To increase flame size",
      "To remove accumulated gas and prevent explosion risk",
      "To increase coil temperature",
      "To stabilize water level"
    ],
    correctIndex: 1,
    explanation: "Purging removes any trapped combustible gases in the firebox, reducing explosion risk during ignition."
  },

  {
    question: "What is the main reason for maintaining water level above the coil?",
    options: [
      "To reduce pressure drop",
      "To ensure proper heat transfer and prevent coil damage",
      "To increase gas velocity",
      "To improve fuel injection"
    ],
    correctIndex: 1,
    explanation: "Proper water level ensures full immersion of coils in heating medium, preventing overheating and maintaining efficiency."
  },

  {
    question: "What is the role of thermostat in heater operation?",
    options: [
      "Measure gas flow",
      "Control burner operation based on temperature setpoint",
      "Increase coil pressure",
      "Open bypass valve automatically"
    ],
    correctIndex: 1,
    explanation: "The thermostat controls burner on/off cycles to maintain desired water bath temperature."
  },

  {
    question: "What happens if bypass valve is left closed during startup?",
    options: [
      "Improved heating efficiency",
      "Possible overpressure and thermal shock in coil",
      "Lower fuel consumption",
      "Increased separator efficiency"
    ],
    correctIndex: 1,
    explanation: "Closing bypass during unstable conditions can trap expanding fluid causing overpressure and thermal stress."
  },

  {
    question: "What is the purpose of the chimney stack?",
    options: [
      "Increase burner pressure",
      "Safely vent combustion gases",
      "Increase oil temperature",
      "Reduce coil pressure"
    ],
    correctIndex: 1,
    explanation: "The chimney safely releases combustion gases away from personnel and equipment."
  },

  {
    question: "What is the effect of excessive primary air in burner?",
    options: [
      "Stable flame",
      "Blasting and unstable flame",
      "Higher oil rate",
      "Lower pressure drop"
    ],
    correctIndex: 1,
    explanation: "Too much air disrupts combustion stability, causing flame turbulence and inefficiency."
  },

  {
    question: "What is the purpose of pressure testing the coil?",
    options: [
      "Increase production rate",
      "Verify mechanical integrity under design pressure",
      "Reduce fuel consumption",
      "Increase gas quality"
    ],
    correctIndex: 1,
    explanation: "Pressure testing ensures the coil can safely handle operational pressures without leaks or failure."
  },

  {
    question: "Why is diesel burner rotation direction important?",
    options: [
      "To control pressure drop",
      "To ensure proper air flow and combustion efficiency",
      "To increase oil API",
      "To reduce coil thickness"
    ],
    correctIndex: 1,
    explanation: "Incorrect rotation affects air supply from blower, leading to poor combustion."
  },

  {
    question: "What is the consequence of overheating the water bath above design temperature?",
    options: [
      "Improved efficiency",
      "Boiling, pressure increase, and potential safety shutdown",
      "Lower gas flow",
      "Increased shrinkage factor"
    ],
    correctIndex: 1,
    explanation: "Overheating can cause boiling, pressure spikes, and automatic shutdown via HTSD system."
  },

  {
    question: "Why must fuel gas pressure be regulated in stages?",
    options: [
      "To increase flame color",
      "To ensure stable and safe burner operation",
      "To reduce oil viscosity",
      "To increase coil diameter"
    ],
    correctIndex: 1,
    explanation: "Multi-stage regulation ensures safe delivery pressure for pilot and main burner systems."
  },

  {
    question: "What is the main function of the firebox?",
    options: [
      "Directly heat oil stream",
      "Contain combustion and transfer heat indirectly",
      "Measure flow rate",
      "Increase gas pressure"
    ],
    correctIndex: 1,
    explanation: "Firebox contains combustion gases and transfers heat to the water bath safely."
  },

  {
    question: "What is the result of poor fuel/air ratio adjustment?",
    options: [
      "Higher efficiency always",
      "Smoke, soot, or flame instability",
      "Lower pressure drop",
      "Higher API gravity"
    ],
    correctIndex: 1,
    explanation: "Incorrect ratio leads to incomplete combustion and unstable burner operation."
  },

  {
    question: "What is the key safety requirement before switching flow into heater coil?",
    options: [
      "Increase burner pressure",
      "Ensure proper pressure testing, stable temperature, and correct valve alignment",
      "Close all valves",
      "Increase gas flow rate"
    ],
    correctIndex: 1,
    explanation: "All safety checks and valve alignment must be verified before introducing process flow into the heater."
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
