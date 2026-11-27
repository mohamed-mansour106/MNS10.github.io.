const QUIZ_KEY = "quizState:" + location.pathname;
const HIGH_KEY = "highScore:" + location.pathname;
/* ===== Oil and Gas Rates from GOR Assessment (15 Questions) ===== */
const questions = [
  {
    "question": "A well makes 2,500 STBPD of oil at a GOR of 1,200 scf/STB. What is the gas rate in MMSCFD?",
    "options": [
      "0.300 MMSCFD",
      "3.000 MMSCFD",
      "3,000 MMSCFD",
      "2.083 MMSCFD"
    ],
    "correctIndex": 1,
    "explanation": "Gas rate = (2,500 x 1,200) / 10^6 = 3.000 MMSCFD."
  },
  {
    "question": "In the gas-rate calculator, which units must the oil rate and GOR be entered in?",
    "options": [
      "Oil in MMSCFD and GOR in STB/scf",
      "Oil in m3/d and GOR in psi",
      "Both in scf/day",
      "Oil in STBPD (STB/d) and GOR in scf/STB"
    ],
    "correctIndex": 3,
    "explanation": "The page asks for the oil rate in STBPD (STB/d) and the gas-oil ratio in scf/STB."
  },
  {
    "question": "The gas rate from GOR and oil rate is 3,000,000 SCFD. What is it in MSCFD?",
    "options": [
      "3,000 MSCFD",
      "3 MSCFD",
      "300 MSCFD",
      "3,000,000 MSCFD"
    ],
    "correctIndex": 0,
    "explanation": "MSCFD = MMSCFD x 1,000. 3 MMSCFD x 1,000 = 3,000 MSCFD."
  },
  {
    "question": "Why does the gas-rate calculator divide oil rate x GOR by 10^6?",
    "options": [
      "To convert STB into barrels",
      "To correct for temperature",
      "To convert SCFD directly into MMSCFD",
      "To convert psig into psia"
    ],
    "correctIndex": 2,
    "explanation": "The field note on the page says dividing by 10^6 converts SCFD directly into MMSCFD."
  },
  {
    "question": "A well makes 2 MMSCFD of gas at a GOR of 4,000 scf/STB. What is the oil rate?",
    "options": [
      "8,000,000 STBPD",
      "50 STBPD",
      "500 STBPD",
      "5,000 STBPD"
    ],
    "correctIndex": 2,
    "explanation": "Oil rate = (2 x 10^6) / 4,000 = 500 STBPD."
  },
  {
    "question": "Which input must be greater than zero in the oil-rate-from-GOR calculators?",
    "options": [
      "GOR, because it is the divisor",
      "Gas rate, because it is the divisor",
      "Oil rate, because it is an input",
      "Neither input is checked"
    ],
    "correctIndex": 0,
    "explanation": "GOR is the divisor in Q_oil = Q_gas x 10^6 / GOR, so it must be greater than zero. The gas rate only has to be zero or greater."
  },
  {
    "question": "The oil rate from GOR is 500 STBPD. About how many m3/d is this, using 1 STB = 0.158987 m3?",
    "options": [
      "3,145 m3/d",
      "500 m3/d",
      "0.32 m3/d",
      "79.49 m3/d"
    ],
    "correctIndex": 3,
    "explanation": "500 x 0.158987 = 79.49 m3/d."
  },
  {
    "question": "In the true produced gas calculator, how is the true produced gas found?",
    "options": [
      "Measured gas plus injected lift gas",
      "Measured gas minus injected lift gas",
      "Measured gas divided by lift gas",
      "Lift gas divided by oil rate"
    ],
    "correctIndex": 1,
    "explanation": "True Produced Gas = Measured - Lift Gas."
  },
  {
    "question": "Measured gas is 5 MMSCFD and lift gas is 1.5 MMSCFD. What is the true produced gas?",
    "options": [
      "3.5 MMSCFD",
      "6.5 MMSCFD",
      "7.5 MMSCFD",
      "3.33 MMSCFD"
    ],
    "correctIndex": 0,
    "explanation": "5 - 1.5 = 3.5 MMSCFD."
  },
  {
    "question": "Measured gas is 5 MMSCFD and lift gas is 1.5 MMSCFD. What share of the measured gas is lift gas?",
    "options": [
      "70%",
      "15%",
      "30%",
      "3.3%"
    ],
    "correctIndex": 2,
    "explanation": "Lift Share = (1.5 / 5) x 100 = 30%."
  },
  {
    "question": "True gas is 3,500,000 scfd and the oil rate is 700 STB/d. What is the true GOR?",
    "options": [
      "500 scf/STB",
      "5,000 scf/STB",
      "2,450,000,000 scf/STB",
      "0.0002 scf/STB"
    ],
    "correctIndex": 1,
    "explanation": "GOR true = 3,500,000 / 700 = 5,000 scf/STB."
  },
  {
    "question": "What does the true produced gas calculator do if the lift gas rate is larger than the measured gas rate?",
    "options": [
      "It shows a negative gas rate",
      "It swaps the two numbers",
      "It sets the lift gas to zero",
      "It shows an error that lift cannot exceed measured gas"
    ],
    "correctIndex": 3,
    "explanation": "The calculator rejects the entry with the message that gas injection lift rate cannot exceed the measured gas rate. The field note suggests checking the lift meter calibration or transient well unloading."
  },
  {
    "question": "Before subtracting lift gas from measured gas, what should you check?",
    "options": [
      "Both are in different units",
      "Only the lift gas is corrected",
      "The oil rate is above 1,000 STB/d",
      "Both are at the same base conditions and in the same unit"
    ],
    "correctIndex": 3,
    "explanation": "The field note says to normalize both rates to the same base conditions and units before subtracting."
  },
  {
    "question": "What is the unit of the result in the Gas Estimate for Aramco Khuff Wells calculator?",
    "options": [
      "bbl/d",
      "MMscf/day",
      "psig",
      "scf/STB"
    ],
    "correctIndex": 1,
    "explanation": "The page gives the estimated flow rate in MMscf/day."
  },
  {
    "question": "Which inputs does the Khuff gas estimate use?",
    "options": [
      "Oil rate, water cut and GOR",
      "Pipe diameter and wall thickness",
      "Wellhead pressure, wellhead temperature, choke size, gas S.G. and wet factor",
      "Meter factor and K-factor"
    ],
    "correctIndex": 2,
    "explanation": "The page lists wellhead pressure (psig), wellhead temperature (F), choke size (1/64 in), gas S.G. and a wet factor."
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
