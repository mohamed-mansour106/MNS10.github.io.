/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "What is the primary cause of oil shrinkage during production?",
    options: [
      "Water evaporation from crude oil",
      "Gas liberation due to pressure reduction",
      "Increase in oil viscosity",
      "Thermal expansion of oil"
    ],
    correctIndex: 1,
    explanation: "Oil shrinkage occurs when pressure decreases and dissolved gas comes out of solution, reducing the oil volume."
  },
  {
    question: "Why does dissolved gas separate from crude oil in a separator?",
    options: [
      "Because oil temperature decreases",
      "Because oil density increases",
      "Because separator pressure is lower than reservoir pressure",
      "Because water content increases"
    ],
    correctIndex: 2,
    explanation: "Gas remains dissolved at high reservoir pressure. When pressure drops in the separator, gas flashes out of solution."
  },
  {
    question: "What does the Oil Formation Volume Factor (Bo) represent?",
    options: [
      "Gas production rate",
      "Reservoir pressure",
      "Relationship between reservoir and stock tank oil volume",
      "Oil viscosity correction"
    ],
    correctIndex: 2,
    explanation: "Bo is used to convert reservoir oil volume into stock tank oil volume."
  },
  {
    question: "What does a high API gravity indicate?",
    options: [
      "Heavy oil",
      "High water cut",
      "Light crude oil",
      "Low gas content"
    ],
    correctIndex: 2,
    explanation: "Higher API gravity means lighter crude oil, which often contains more dissolved gas."
  },
  {
    question: "Why is gas gravity corrected during shrinkage calculations?",
    options: [
      "To account for temperature effects",
      "To remove water contamination",
      "To increase separator efficiency",
      "To calculate API gravity"
    ],
    correctIndex: 0,
    explanation: "Gas density changes with temperature, so gas gravity is corrected to standard conditions."
  },
  {
    question: "What is separator pressure?",
    options: [
      "Pressure inside the storage tank",
      "Pressure inside the reservoir",
      "Operating pressure where oil and gas are separated",
      "Pipeline design pressure"
    ],
    correctIndex: 2,
    explanation: "Separator pressure is the pressure maintained inside the separator during fluid processing."
  },
  {
    question: "What happens when separator pressure decreases?",
    options: [
      "Less gas is released",
      "Oil volume increases",
      "More gas is liberated from the oil",
      "Bo decreases to zero"
    ],
    correctIndex: 2,
    explanation: "Lower separator pressure causes more dissolved gas to flash out of the oil."
  },
  {
    question: "What effect does increasing separator temperature generally have?",
    options: [
      "Less gas liberation",
      "More gas liberation and more shrinkage",
      "No effect on oil volume",
      "Increased water production"
    ],
    correctIndex: 1,
    explanation: "Higher temperatures encourage dissolved gas to leave the oil, increasing shrinkage."
  },
  {
    question: "Why is observed temperature included in the calculation?",
    options: [
      "To estimate water cut",
      "To calculate separator efficiency",
      "To correct gas gravity",
      "To determine API gravity"
    ],
    correctIndex: 2,
    explanation: "Observed temperature is used to adjust gas gravity to standard reference conditions."
  },
  {
    question: "What is the purpose of the parameter F1?",
    options: [
      "Estimate reservoir permeability",
      "Relate separator pressure and corrected gas gravity",
      "Calculate water production",
      "Determine oil density"
    ],
    correctIndex: 1,
    explanation: "F1 is an intermediate parameter derived from separator pressure and corrected gas gravity."
  },
  {
    question: "What does F2 primarily account for?",
    options: [
      "Gas compressibility",
      "Separator temperature",
      "Oil gravity correction",
      "Reservoir pressure depletion"
    ],
    correctIndex: 2,
    explanation: "F2 adjusts the calculation based on oil API gravity."
  },
  {
    question: "What is Fvol used for?",
    options: [
      "Estimating the volume factor input to Bo calculation",
      "Calculating separator pressure",
      "Determining water cut",
      "Calculating gas flow rate"
    ],
    correctIndex: 0,
    explanation: "Fvol combines pressure, temperature, and fluid properties into a volume-related parameter."
  },
  {
    question: "How is Shrinkage Factor calculated?",
    options: [
      "Bo × API",
      "Bo ÷ API",
      "1 ÷ Bo",
      "API ÷ Bo"
    ],
    correctIndex: 2,
    explanation: "Shrinkage Factor is calculated as the inverse of the Oil Formation Volume Factor."
  },
  {
    question: "What does a shrinkage factor of 0.85 indicate?",
    options: [
      "Oil volume increases by 15%",
      "1 separator barrel becomes 0.85 stock tank barrels",
      "No gas is liberated",
      "Separator pressure is too low"
    ],
    correctIndex: 1,
    explanation: "A shrinkage factor of 0.85 means 15% of the volume is lost due to gas liberation."
  },
  {
    question: "What does a shrinkage factor of 0.95 typically indicate?",
    options: [
      "Large gas liberation",
      "Extremely heavy oil",
      "Very little gas liberated",
      "Separator malfunction"
    ],
    correctIndex: 2,
    explanation: "A value close to 1 means only a small amount of gas has come out of solution."
  },
  {
    question: "Where is shrinkage factor commonly used?",
    options: [
      "Drilling mud calculations",
      "Well testing and production reporting",
      "Cement design",
      "Pipeline pigging operations"
    ],
    correctIndex: 1,
    explanation: "Shrinkage factor is widely used in well testing and oil production calculations."
  },
  {
    question: "Why is laboratory PVT analysis preferred over empirical correlations?",
    options: [
      "It is faster",
      "It requires fewer measurements",
      "It provides more accurate fluid properties",
      "It eliminates separator requirements"
    ],
    correctIndex: 2,
    explanation: "PVT analysis directly measures fluid behavior under controlled laboratory conditions."
  },
  {
    question: "Can shrinkage factor normally be greater than 1?",
    options: [
      "Yes, always",
      "Only for water wells",
      "No, because oil volume decreases after gas liberation",
      "Only for heavy oils"
    ],
    correctIndex: 2,
    explanation: "Shrinkage factors are typically less than 1 because separator oil volume is larger than stock tank oil volume."
  },
  {
    question: "What is Stock Tank Oil (STO)?",
    options: [
      "Oil inside the separator",
      "Oil remaining after gas separation at atmospheric conditions",
      "Reservoir oil before production",
      "Oil mixed with produced water"
    ],
    correctIndex: 1,
    explanation: "Stock Tank Oil is stabilized oil after gas has been removed and atmospheric conditions are reached."
  },
  {
    question: "Why is shrinkage important for production reporting?",
    options: [
      "It estimates drilling costs",
      "It calculates separator efficiency only",
      "It converts measured separator volumes into actual saleable oil volumes",
      "It determines reservoir pressure"
    ],
    correctIndex: 2,
    explanation: "Production reports are based on stock tank oil volumes, making shrinkage correction essential."
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
