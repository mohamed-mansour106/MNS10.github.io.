const QUIZ_KEY = "quizState:" + location.pathname;
const HIGH_KEY = "highScore:" + location.pathname;
/* ===== Gas Oil Ratio Assessment (15 Questions) ===== */
const questions = [
  {
    "question": "A well flows 2 MMSCF/day of gas and 800 STB/day of oil. Using GOR = (Gas Rate x 10^6) / Oil Rate, what is the GOR?",
    "options": [
      "1,600 scf/STB",
      "2,500 scf/STB",
      "400 scf/STB",
      "25,000 scf/STB"
    ],
    "correctIndex": 1,
    "explanation": "GOR = (2 x 1,000,000) / 800 = 2,500 scf/STB."
  },
  {
    "question": "In the GOR calculator, which input must be greater than zero?",
    "options": [
      "Gas Rate",
      "Oil Rate",
      "Both rates must be greater than zero",
      "Neither input is checked"
    ],
    "correctIndex": 1,
    "explanation": "The oil rate is the divisor in the GOR formula, so it must be greater than zero. The gas rate only has to be non-negative."
  },
  {
    "question": "In the OGR calculator, in which units are the oil rate and the gas rate entered?",
    "options": [
      "Oil in STB/day, gas in scf/day",
      "Oil in scf/day, gas in STB/day",
      "Both in MMSCF/day",
      "Both in STB/day"
    ],
    "correctIndex": 0,
    "explanation": "The OGR calculator takes the oil rate in STB/day and the gas rate in scf/day, and gives the result in STB/MMSCF."
  },
  {
    "question": "An OGR calculation uses an oil rate of 40 STB/day and a gas rate of 2,000,000 scf/day. What is the OGR?",
    "options": [
      "80 STB/MMSCF",
      "0.02 STB/MMSCF",
      "20 STB/MMSCF",
      "200 STB/MMSCF"
    ],
    "correctIndex": 2,
    "explanation": "OGR = (40 x 1,000,000) / 2,000,000 = 20 STB/MMSCF."
  },
  {
    "question": "What is the OGR calculator described as being used for?",
    "options": [
      "Monitoring production of a volatile oil reservoir",
      "Sizing a separator",
      "Calibrating a turbine meter",
      "Checking flange bolt torque"
    ],
    "correctIndex": 0,
    "explanation": "The OGR calculator page describes it as a tool for volatile oil reservoir production monitoring."
  },
  {
    "question": "A gas-condensate well produces 150 STB/d of condensate and 5 MMSCFD of gas. What is the CGR?",
    "options": [
      "750 STB/MMSCF",
      "30 STB/MMSCF",
      "3 STB/MMSCF",
      "300 STB/MMSCF"
    ],
    "correctIndex": 1,
    "explanation": "CGR = Condensate Rate (STB/d) / Gas Rate (MMSCFD) = 150 / 5 = 30 STB/MMSCF."
  },
  {
    "question": "A CGR of 25 STB/MMSCF is converted to the Gas to Condensate Ratio (GCR). What is the GCR?",
    "options": [
      "40,000 scf/STB",
      "25,000,000 scf/STB",
      "4,000 scf/STB",
      "0.000025 scf/STB"
    ],
    "correctIndex": 0,
    "explanation": "GCR = 1,000,000 / CGR = 1,000,000 / 25 = 40,000 scf/STB."
  },
  {
    "question": "The gas rate for a CGR calculation is 3,000,000 SCFD. What should you do in the CGR calculator?",
    "options": [
      "Switch the unit selector to SCFD, so it converts to 3 MMSCFD",
      "Enter 3,000,000 with the unit left on MMSCFD",
      "Multiply the gas rate by 10^6 first",
      "Divide the condensate rate by 10^6 first"
    ],
    "correctIndex": 0,
    "explanation": "When the gas rate is in SCFD, the unit selector is switched to SCFD. The calculator converts it with MMSCFD = SCFD / 10^6, which gives 3 MMSCFD here."
  },
  {
    "question": "Which two correlations does the Solution GOR (Rs) calculator use?",
    "options": [
      "Standing (1947) and Vasquez & Beggs",
      "Gilbert and Ros",
      "Beggs and Brill",
      "Darcy and Horner"
    ],
    "correctIndex": 0,
    "explanation": "The Solution GOR page estimates gas solubility with the Standing (1947) and Vasquez & Beggs correlations."
  },
  {
    "question": "The Solution GOR calculator asks for the separator pressure in psig. What does it do with this value before using the correlations?",
    "options": [
      "Adds 14.7 to get psia",
      "Subtracts 14.7 to get kPa",
      "Multiplies it by 10^6",
      "Uses it as entered, with no change"
    ],
    "correctIndex": 0,
    "explanation": "The calculator adds 14.7 to the psig value to get psia before it applies the correlations."
  },
  {
    "question": "In the Vasquez & Beggs correlation used by the calculators, which set of constants applies when the oil API is above 30?",
    "options": [
      "C1 = 0.0178, C2 = 1.187, C3 = 23.931",
      "C1 = 0.0362, C2 = 1.0937, C3 = 25.724",
      "C1 = 1, C2 = 1, C3 = 1",
      "C1 = 0.00005912, C2 = 114.7, C3 = 460"
    ],
    "correctIndex": 0,
    "explanation": "For API above 30 the calculators use C1 = 0.0178, C2 = 1.187 and C3 = 23.931. For API of 30 or less they use 0.0362, 1.0937 and 25.724."
  },
  {
    "question": "Which correlation does the Bubble Point for Oil calculator use?",
    "options": [
      "Standing (1947)",
      "Vasquez-Beggs",
      "Gilbert",
      "Horner"
    ],
    "correctIndex": 1,
    "explanation": "The Bubble Point page uses the Vasquez-Beggs correlation."
  },
  {
    "question": "Before it estimates the bubble point, the Bubble Point calculator corrects the gas gravity. Which values does the correction use?",
    "options": [
      "Separator temperature and separator pressure, with 114.7 as the reference pressure",
      "Reservoir temperature only",
      "Water cut and shrinkage",
      "Choke size and flowing pressure"
    ],
    "correctIndex": 0,
    "explanation": "The corrected gas gravity uses the oil API, the separator temperature and the log of separator pressure over 114.7."
  },
  {
    "question": "In which pressure unit does the Bubble Point calculator give the bubble point pressure?",
    "options": [
      "psia (also shown in kPa)",
      "psig only",
      "bar only",
      "scf/bbl"
    ],
    "correctIndex": 0,
    "explanation": "The calculator gives the bubble point pressure in psia and also shows it in kPa."
  },
  {
    "question": "Which ratio, in STB/MMSCF, describes the liquid yield of a gas-condensate reservoir?",
    "options": [
      "CGR",
      "GOR",
      "OGR for a dry gas",
      "Rs"
    ],
    "correctIndex": 0,
    "explanation": "The CGR is the condensate-to-gas ratio, expressed in STB/MMSCF."
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
  if (isQuizFinished) return;
  localStorage.setItem(QUIZ_KEY, JSON.stringify(state));
  localStorage.setItem("darkMode", darkMode ? "1" : "0");
  localStorage.setItem("soundEnabled", soundEnabled ? "1" : "0");
}

function loadProgress() {
  const saved = localStorage.getItem(QUIZ_KEY);
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
  if (timerInterval) clearInterval(timerInterval);

  playSound(finishSound);
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  certificateSection.classList.add("hidden");
  localStorage.removeItem(QUIZ_KEY);

  let correct = 0;
  state.shuffled.forEach((q, i) => {
    if (state.answers[i] === q.correctIndex) correct++;
  });

  finalScorePercent = Math.round((correct / questions.length) * 100);
  scoreValue.textContent = `${finalScorePercent}%`;

  // High score
  const best = Math.max(finalScorePercent, Number(localStorage.getItem(HIGH_KEY) || 0));
  localStorage.setItem(HIGH_KEY, best);
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

  const best = localStorage.getItem(HIGH_KEY) || 0;
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
  localStorage.removeItem(QUIZ_KEY);
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
