const QUIZ_KEY = "quizState:" + location.pathname;
const HIGH_KEY = "highScore:" + location.pathname;
/* ===== Choke Sizing and Flow Assessment (15 Questions) ===== */
const questions = [
  {
    "question": "In which units must the Gilbert required-choke-size calculator receive the wellhead pressure, oil rate and GOR?",
    "options": [
      "psig, MMSCFD and STB/scf",
      "psia, bbl/d and scf/bbl",
      "kPa, m3/d and m3/m3",
      "bar, STB/d and psi"
    ],
    "correctIndex": 1,
    "explanation": "The page asks for pressure in psia, oil rate in bbl/day and GOR in scf/bbl."
  },
  {
    "question": "In which unit is the required choke size given?",
    "options": [
      "Inches only",
      "Millimetres",
      "psi",
      "1/64 inch"
    ],
    "correctIndex": 3,
    "explanation": "The page says the choke size is expressed in 1/64-inch units."
  },
  {
    "question": "With P = 1,100 psia, Q = 1,200 bbl/d and GOR = 787 scf/bbl, what is the required choke size from the Gilbert calculator?",
    "options": [
      "About 24.3/64 inch",
      "About 243/64 inch",
      "About 2.4/64 inch",
      "About 64/64 inch"
    ],
    "correctIndex": 0,
    "explanation": "C = [1,200 x 435 x 0.787^0.546 / 1,100]^(1/1.89) = 24.32 (1/64 inch)."
  },
  {
    "question": "How does the Required Choke Size calculator describe its result?",
    "options": [
      "An exact field measurement",
      "A guaranteed rate",
      "A theoretical estimate to verify against the original reference and operating range",
      "A result that needs no checking"
    ],
    "correctIndex": 2,
    "explanation": "The engineering notes say the result is a theoretical estimate and the original reference, units and operating range should be verified before field application."
  },
  {
    "question": "Which three oil correlations can be selected in the Choke Flow Rate Estimation calculator?",
    "options": [
      "Gilbert, Darcy and Horner",
      "Standing, Ros and Beggs",
      "Gilbert, Ros and Achong",
      "Achong, Vasquez and Gilbert"
    ],
    "correctIndex": 2,
    "explanation": "The Oil Correlation selector offers Gilbert (Standard), Ros and Achong."
  },
  {
    "question": "In the Gilbert oil rate equation of the calculator, which exponent is applied to the choke size C?",
    "options": [
      "1.89",
      "2.0",
      "1.88",
      "0.546"
    ],
    "correctIndex": 0,
    "explanation": "Gilbert uses C^1.89. Ros uses C^2.0 and Achong uses C^1.88."
  },
  {
    "question": "Which constants does the Ros correlation use in the calculator?",
    "options": [
      "435 and 0.546",
      "382.2 and 0.65",
      "605.4 and 0.83",
      "174.0 and a GOR exponent of 0.5"
    ],
    "correctIndex": 3,
    "explanation": "Ros: Q_o = P x C^2.0 / (174.0 x (GOR/1000)^0.5)."
  },
  {
    "question": "In the choke flow estimation calculator, how is the gas-rate temperature term built?",
    "options": [
      "Square root of T in C",
      "Square root of 0.6 x (T + 460), with T in F",
      "T squared",
      "T divided by 460"
    ],
    "correctIndex": 1,
    "explanation": "The gas rate formula divides by the square root of 0.6 x (T + 460), where T is the wellhead temperature in degrees F."
  },
  {
    "question": "What area ratio results from changing a choke bean from 16/64 to 24/64?",
    "options": [
      "2.25",
      "1.5",
      "3.0",
      "0.44"
    ],
    "correctIndex": 0,
    "explanation": "The area ratio is (24 / 16)^2 = 2.25."
  },
  {
    "question": "The initial flow is 600 STB/d and the bean goes from 16/64 to 24/64. What is the estimated new flow?",
    "options": [
      "900 STB/d",
      "1,200 STB/d",
      "1,350 STB/d",
      "267 STB/d"
    ],
    "correctIndex": 2,
    "explanation": "Q2 = 2.25 x 600 = 1,350 STB/d."
  },
  {
    "question": "Why does the bean scaling calculator square the ratio of bean sizes?",
    "options": [
      "Because flow is always doubled",
      "Choke area is proportional to the diameter squared",
      "Because the temperature changes",
      "Because GOR is squared"
    ],
    "correctIndex": 1,
    "explanation": "The field note says A = pi x d^2 / 4, so area scales with the diameter squared."
  },
  {
    "question": "What does the bean flow scaling assume?",
    "options": [
      "Gas flow at critical pressure ratio only",
      "A bean larger than 64/64",
      "No change in choke bean",
      "Comparable pressures upstream and downstream and steady liquid flow"
    ],
    "correctIndex": 3,
    "explanation": "The field note says the simple area-ratio scaling assumes comparable upstream and downstream pressures and single-phase, steady liquid behavior."
  },
  {
    "question": "Two chokes of 48/64 and 64/64 are open together. What combined choke size does the twin choke calculator give?",
    "options": [
      "112/64",
      "56/64",
      "40/64",
      "80/64"
    ],
    "correctIndex": 3,
    "explanation": "Combined = sqrt(48^2 + 64^2) = sqrt(6,400) = 80."
  },
  {
    "question": "In the choke calibration, which erosion status applies when the effective choke is more than 3.0/64 larger than nominal?",
    "options": [
      "Intact: normal operations",
      "Washed Out: switch to the standby choke and inspect the bean",
      "Worn: monitor for sand",
      "Calibrated: no action"
    ],
    "correctIndex": 1,
    "explanation": "The guide on the page says a variance of more than 3.0/64 is Washed Out, with the action to switch to the standby choke and inspect the bean."
  },
  {
    "question": "In the choke calibration calculator, how is the upstream pressure in psig converted?",
    "options": [
      "Subtract 14.7",
      "Multiply by 64",
      "Add 14.7 to get psia",
      "Divide by 460"
    ],
    "correctIndex": 2,
    "explanation": "The calculator uses P in psia = psig + 14.7. The temperature in R = F + 460."
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
  // Sends the result to the OFU Google Apps Script mailer (one email to the owner).
  try {
    fetch("https://script.google.com/macros/s/AKfycbyqeYWre8BPTqTcQskjXSfNjlL4hDOmIHBdy670HHUHnv1En1Mv3HebDNYV08OIoWicXA/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: userName,
        result: `${scoreRaw} (${scorePercent}%)`,
        course: courseName,
        time: new Date().toISOString()
      }),
      keepalive: true
    }).catch(() => {});
  } catch (err) {
    console.error("Result email failed:", err);
  }
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
