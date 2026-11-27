const QUIZ_KEY = "quizState:" + location.pathname;
const HIGH_KEY = "highScore:" + location.pathname;
/* ===== Gas Rate Through Chokes Assessment (15 Questions) ===== */
const questions = [
  {
    "question": "Which four conditions does the Choke Nipple Gas Rate page list for accurate results?",
    "options": [
      "Wet gas, adjustable choke, subcritical flow and real gas",
      "Critical flow, dry gas, a positive choke bean (6 inch long) and ideal gas",
      "Water cut above 50%, oil flow and a long choke",
      "A closed choke, low pressure, cold gas and sour gas"
    ],
    "correctIndex": 1,
    "explanation": "The page lists: critical flow, dry gas, positive choke bean (6 inch long) and ideal gas."
  },
  {
    "question": "In the choke nipple calculation, how is the absolute pressure found?",
    "options": [
      "WHP in psig x 14.7",
      "WHP in psig - 14.7",
      "WHP in psig / 14.7",
      "WHP in psig + 14.7"
    ],
    "correctIndex": 3,
    "explanation": "P_abs = WHP + 14.7, and T_abs = WHT + 460."
  },
  {
    "question": "What coefficient does the choke nipple calculator use for a 32/64 inch choke?",
    "options": [
      "112.720",
      "26.510",
      "260.990",
      "61.210"
    ],
    "correctIndex": 0,
    "explanation": "The coefficient table gives 112.720 for 32/64 and 479.088 for 64/64."
  },
  {
    "question": "WHP = 1,000 psig, choke = 32/64, gas gravity 0.7 and WHT = 100 F. What is the choke nipple gas rate?",
    "options": [
      "About 578 MSCF/D",
      "About 57,770 MSCF/D",
      "About 5,777 MSCF/D",
      "About 112 MSCF/D"
    ],
    "correctIndex": 2,
    "explanation": "Q = 112.72 x 1,014.7 / sqrt(0.7 x 560) = 5,776.9, about 5,777 MSCF/D."
  },
  {
    "question": "What are the default gas gravity and wellhead temperature in the choke nipple calculator when the fields are empty?",
    "options": [
      "1.0 and 100 F",
      "0.6 and 32 F",
      "0.7 and 60 F",
      "0.8 and 120 F"
    ],
    "correctIndex": 2,
    "explanation": "The calculator uses 0.7 for gravity and 60 F for temperature if left blank."
  },
  {
    "question": "In the Dry Gas Flow through a Positive Choke calculator, at which point is the chart calibrated?",
    "options": [
      "3,750 psig with a 28/64 choke giving 15.5 MMscf/Day",
      "1,000 psig with a 64/64 choke",
      "5,000 psig with a 48/64 choke giving 20 MMscf/Day",
      "Atmospheric pressure"
    ],
    "correctIndex": 0,
    "explanation": "The page is based on a chart calibration at 3,750 psig with a 28/64 inch choke giving 15.5 MMscf/day."
  },
  {
    "question": "How does the Dry Gas Flow calculator scale the flow with choke size?",
    "options": [
      "By the choke size directly",
      "By the cube of the choke size",
      "It does not depend on choke size",
      "By the area, proportional to the square of the choke size ratio to 28"
    ],
    "correctIndex": 3,
    "explanation": "Flow is proportional to area (d^2), so the calculator scales by (size/28)^2."
  },
  {
    "question": "Upstream pressure is 3,000 psig and the choke is 32/64. What gas rate does the Dry Gas Flow calculator give?",
    "options": [
      "About 12.4 MMscf/Day",
      "About 16.2 MMscf/Day",
      "About 20.2 MMscf/Day",
      "About 1.6 MMscf/Day"
    ],
    "correctIndex": 1,
    "explanation": "Q = (15.5 / 3,750) x 3,000 x (32/28)^2 = 16.20 MMscf/Day."
  },
  {
    "question": "Which three constants are used in the Gas Rates by Choke Coefficient calculator?",
    "options": [
      "C = 605.4, Cd = 0.83 and Z = 0.9",
      "C = 26.616, Cd = 18 and Z = 1",
      "C = 435, Cd = 0.546 and Z = 0.5",
      "C = 0.11817, Cd = 460 and Z = 14.7"
    ],
    "correctIndex": 0,
    "explanation": "The calculator uses C = 605.4, Cd = 0.83 and Z = 0.9."
  },
  {
    "question": "What is the area of a 32/64 inch choke?",
    "options": [
      "0.5 sq in",
      "0.0491 sq in",
      "0.1963 sq in",
      "0.7854 sq in"
    ],
    "correctIndex": 2,
    "explanation": "The reference table on the page gives 0.1963 sq in for 32/64 (0.500 inch)."
  },
  {
    "question": "How does the Gas Rates by Choke Coefficient calculator get from mscf/d to mmscf/d?",
    "options": [
      "It multiplies by 1,000",
      "It divides by 1,000",
      "It divides by 14.7",
      "It multiplies by 0.9"
    ],
    "correctIndex": 1,
    "explanation": "mmscf/d = mscf/d / 1,000."
  },
  {
    "question": "In the Gas Flow Rate Estimation calculator, how is the choke coefficient C found?",
    "options": [
      "C = D x 64",
      "C = 605.4 x Cd",
      "C = 0.11817 x D^2",
      "C = (D/64)^2.0871 x 26.616 x 18"
    ],
    "correctIndex": 3,
    "explanation": "The page gives C = (D/64)^2.0871 x 26.616 x 18."
  },
  {
    "question": "In the Gas Flow Rate Estimation calculator, what is the absolute temperature in Rankine?",
    "options": [
      "F + 273.15",
      "F - 460",
      "F x 1.8",
      "F + 459.67"
    ],
    "correctIndex": 3,
    "explanation": "The page defines T as the absolute temperature, F + 459.67."
  },
  {
    "question": "The Quick Gas Rate Estimation uses a coefficient of 0.11817 times what?",
    "options": [
      "The choke size",
      "The choke size squared",
      "The wellhead pressure",
      "The gas gravity"
    ],
    "correctIndex": 1,
    "explanation": "The coefficient = 0.11817 x choke^2."
  },
  {
    "question": "Which unit does the Quick Gas Rate Estimation give its result in?",
    "options": [
      "MMscf/day",
      "bbl/d",
      "mscf/day",
      "psig"
    ],
    "correctIndex": 2,
    "explanation": "The page gives the estimated dry gas rate in mscf/day."
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
