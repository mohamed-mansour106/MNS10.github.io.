/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "What is the primary purpose of a Diverter Manifold?",
    options: [
      "To increase fluid pressure",
      "To separate oil from water",
      "To divert flow to different destinations",
      "To measure flow rate"
    ],
    correctIndex: 2,
    explanation: "A Diverter Manifold is designed to direct fluid flow from one inlet to different outlet paths."
  },

  {
    question: "How many ball valves are typically installed in a Diverter Manifold?",
    options: [
      "One",
      "Minimum of two",
      "Four",
      "Six"
    ],
    correctIndex: 1,
    explanation: "A standard Diverter Manifold consists of a minimum of two ball valves."
  },

  {
    question: "What shape is commonly formed by a Diverter Manifold?",
    options: [
      "L Shape",
      "Y Shape",
      "T Shape",
      "U Shape"
    ],
    correctIndex: 2,
    explanation: "A Diverter Manifold typically consists of one inlet and two outlets forming a T configuration."
  },

  {
    question: "Which Hammer Union type is commonly used on Diverter Manifolds?",
    options: [
      "Figure 100",
      "Figure 206",
      "Figure 602",
      "Figure 1502"
    ],
    correctIndex: 2,
    explanation: "Figure 602 Hammer Unions are commonly used on 3-inch and 4-inch Diverter Manifolds."
  },

  {
    question: "What is the typical Cold Working Pressure (CWP) range of a Diverter Manifold?",
    options: [
      "500-1000 psig",
      "1000-1500 psig",
      "2000-3000 psig",
      "5000-10000 psig"
    ],
    correctIndex: 2,
    explanation: "Most Diverter Manifolds used in SWT applications are rated between 2000 and 3000 psig."
  },

  {
    question: "What factor determines which flare boom should be selected?",
    options: [
      "Separator pressure",
      "Oil API gravity",
      "Wind direction",
      "Tank level"
    ],
    correctIndex: 2,
    explanation: "The selected flare boom depends primarily on prevailing wind direction."
  },

  {
    question: "Where can a Diverter Manifold be installed on a Test Separator?",
    options: [
      "Gas outlet only",
      "Oil outlet only",
      "Water outlet only",
      "Water, oil, and gas outlet lines"
    ],
    correctIndex: 3,
    explanation: "Diverter Manifolds may be used on water, oil, and gas outlet lines."
  },

  {
    question: "Why is a Diverter Manifold used during meter calibration?",
    options: [
      "To increase separator pressure",
      "To divert flow to surge or calibration tanks",
      "To remove sand from flow",
      "To reduce temperature"
    ],
    correctIndex: 1,
    explanation: "Flow is diverted to a calibration system for meter verification and testing."
  },

  {
    question: "Can a Diverter Manifold be installed between storage tanks?",
    options: [
      "No",
      "Only between gas tanks",
      "Only on offshore rigs",
      "Yes"
    ],
    correctIndex: 3,
    explanation: "It can be installed between oil tanks or water tanks to facilitate transfer operations."
  },

  {
    question: "Where is a Diverter Manifold permitted on a High Pressure Pump system?",
    options: [
      "Discharge side only",
      "Suction side only",
      "Both suction and discharge",
      "Neither side"
    ],
    correctIndex: 1,
    explanation: "A Diverter Manifold may be installed on the suction side of an HP Pump."
  },

  {
    question: "Why should a Diverter Manifold never be installed on the discharge side of an HP Pump?",
    options: [
      "It reduces flow rate",
      "It increases temperature",
      "High pressure may damage the manifold",
      "It causes cavitation"
    ],
    correctIndex: 2,
    explanation: "High discharge pressure may shear off or damage the manifold, creating serious safety hazards."
  },

  {
    question: "What does the term 'sheared off' mean?",
    options: [
      "Flow diverted",
      "Pressure reduced",
      "Broken away due to force",
      "Valve lubricated"
    ],
    correctIndex: 2,
    explanation: "Sheared off means physically broken or separated due to excessive force or pressure."
  },

  {
    question: "Before opening the well, what should be checked on the Diverter Manifold?",
    options: [
      "Tank level",
      "Valve free movement",
      "Pump speed",
      "Oil viscosity"
    ],
    correctIndex: 1,
    explanation: "Both ball valves should be cycled fully open and fully closed to verify proper operation."
  },

  {
    question: "When the valve indicator is aligned with the flow direction, the valve is:",
    options: [
      "Closed",
      "Partially open",
      "Open",
      "Locked"
    ],
    correctIndex: 2,
    explanation: "An indicator parallel to flow direction indicates an open ball valve."
  },

  {
    question: "When the valve indicator is perpendicular to the flow direction, the valve is:",
    options: [
      "Open",
      "Closed",
      "Partially open",
      "Damaged"
    ],
    correctIndex: 1,
    explanation: "A crossing indicator position means the ball valve is closed."
  },

  {
    question: "What is the purpose of the interlocking handle system?",
    options: [
      "Increase pressure",
      "Increase flow rate",
      "Ensure one valve remains open while the other is closed",
      "Reduce valve maintenance"
    ],
    correctIndex: 2,
    explanation: "The interlock prevents both valves from being closed simultaneously."
  },

  {
    question: "What problem does the interlocking system help prevent?",
    options: [
      "Corrosion",
      "Back pressure to the separator",
      "Wax formation",
      "Scale buildup"
    ],
    correctIndex: 1,
    explanation: "The system prevents dangerous back pressure and operator error."
  },

  {
    question: "Before diverting gas to a flare boom, what must be confirmed?",
    options: [
      "Separator level",
      "Tank temperature",
      "Pilot flame is burning",
      "Pump discharge pressure"
    ],
    correctIndex: 2,
    explanation: "The propane or diesel pilot flame must be active before directing gas to the burner."
  },

  {
    question: "In an emergency, which equipment should be used to shut in the well?",
    options: [
      "Diverter Manifold",
      "Storage Tank Valve",
      "Breather Valve",
      "Choke Manifold or ESD System"
    ],
    correctIndex: 3,
    explanation: "Well shut-in should be performed using proper well-control equipment."
  },

  {
    question: "Why should a pipe wrench or cheater bar never be used on Diverter Manifold hand wheels?",
    options: [
      "It reduces pressure",
      "It may damage valve components",
      "It causes corrosion",
      "It changes flow direction"
    ],
    correctIndex: 1,
    explanation: "Excessive force can damage the valve stem, hand wheel, seats, and sealing components."
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
