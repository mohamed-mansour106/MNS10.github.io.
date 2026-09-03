/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "What is the primary purpose of an Eruption Manifold?",
    options: [
      "To separate oil, gas, and water",
      "To control and direct flow from a dual-string well",
      "To measure flow rate",
      "To store well fluids"
    ],
    correctIndex: 1,
    explanation: "The Eruption Manifold is used to control, monitor, and direct flow from dual-string wells (Long String and Short String)."
  },
  {
    question: "What is the working pressure rating of the Eruption Manifold described in this course?",
    options: [
      "5,000 psi",
      "7,500 psi",
      "10,000 psi",
      "15,000 psi"
    ],
    correctIndex: 2,
    explanation: "The Eruption Manifold has a Cold Working Pressure (CWP) of 10,000 psi."
  },
  {
    question: "Which standard ensures suitability for H₂S and CO₂ service?",
    options: [
      "API 6A",
      "ASME VIII",
      "NACE MR-0175",
      "ISO 9001"
    ],
    correctIndex: 2,
    explanation: "NACE MR-0175 specifies material requirements for sour service applications containing H₂S."
  },
  {
    question: "How many inlet connections are provided on the Eruption Manifold?",
    options: [
      "2",
      "3",
      "4",
      "6"
    ],
    correctIndex: 2,
    explanation: "The manifold is equipped with four 2-inch Figure 1502 threaded inlet connections."
  },
  {
    question: "What is the size of the outlet connection?",
    options: [
      "2-inch Fig 1502",
      "3-inch Fig 1502 Wing",
      "4-inch Fig 1502",
      "6-inch Flange"
    ],
    correctIndex: 1,
    explanation: "The outlet connection is a 3-inch Figure 1502 Wing connection."
  },
  {
    question: "One major benefit of the Eruption Manifold is:",
    options: [
      "Increasing separator pressure",
      "Eliminating the need for choke manifolds",
      "Switching between strings without disconnecting pipework",
      "Reducing reservoir pressure"
    ],
    correctIndex: 2,
    explanation: "The manifold saves time by allowing operators to switch between strings without disconnecting lines."
  },
  {
    question: "Which valve is associated with the Long String (LS)?",
    options: [
      "Valve 1",
      "Valve 3",
      "Valve 5",
      "Valve 8"
    ],
    correctIndex: 3,
    explanation: "Valve No. 8 is used for Long String operations."
  },
  {
    question: "Which valve is associated with the Short String (SS)?",
    options: [
      "Valve 1",
      "Valve 5",
      "Valve 6",
      "Valve 8"
    ],
    correctIndex: 1,
    explanation: "Valve No. 5 is connected to the Short String."
  },
  {
    question: "Before flowing the Long String, which valves should be opened?",
    options: [
      "Valves 1 and 5",
      "Valves 2 and 8",
      "Valves 3 and 6",
      "Valves 4 and 8"
    ],
    correctIndex: 1,
    explanation: "The Long String flow path is established by opening Valves 2 and 8."
  },
  {
    question: "Before flowing the Short String, which valves should be opened?",
    options: [
      "Valves 1 and 5",
      "Valves 2 and 8",
      "Valves 3 and 6",
      "Valves 4 and 8"
    ],
    correctIndex: 0,
    explanation: "The Short String flow path requires opening Valves 1 and 5."
  },
  {
    question: "What should be recorded before opening the Choke Manifold for testing?",
    options: [
      "Fluid temperature",
      "Pump speed",
      "WHCIP",
      "Tank level"
    ],
    correctIndex: 2,
    explanation: "WHCIP (Wellhead Closed-In Pressure) must be recorded before starting the test."
  },
  {
    question: "What does WHCIP stand for?",
    options: [
      "Wellhead Closed-In Pressure",
      "Working Hydraulic Control Injection Pressure",
      "Wellhead Choke Isolation Point",
      "Wellhead Control Injection Procedure"
    ],
    correctIndex: 0,
    explanation: "WHCIP means Wellhead Closed-In Pressure."
  },
  {
    question: "When shutting in the Long String, what should be closed first?",
    options: [
      "Valve 8",
      "Valve 2",
      "Choke Manifold",
      "Valve 6"
    ],
    correctIndex: 2,
    explanation: "The Choke Manifold must be closed before isolating the string."
  },
  {
    question: "Which valve is commonly used as the Pump/Kill line connection?",
    options: [
      "Valve 1",
      "Valve 3",
      "Valve 6",
      "Valve 8"
    ],
    correctIndex: 2,
    explanation: "Valve No. 6 is used for pumping acid or kill fluids."
  },
  {
    question: "To pump acid into the Short String, which valves are opened?",
    options: [
      "1, 5, and 8",
      "5, 3, and 6",
      "2, 4, and 8",
      "1, 3, and 6"
    ],
    correctIndex: 1,
    explanation: "Acid pumping to the Short String requires opening Valves 5, 3, and 6."
  },
  {
    question: "To pump acid into the Long String, which valves are opened?",
    options: [
      "5, 3, and 6",
      "1, 5, and 6",
      "8, 4, and 6",
      "2, 3, and 6"
    ],
    correctIndex: 2,
    explanation: "Acid pumping to the Long String requires opening Valves 8, 4, and 6."
  },
  {
    question: "What is Bullheading?",
    options: [
      "Measuring pressure with a DWT",
      "Pumping fluid directly into the well against formation pressure",
      "Flowing both strings simultaneously",
      "Opening all manifold valves"
    ],
    correctIndex: 1,
    explanation: "Bullheading is the process of pumping fluid into the well without allowing return flow to surface."
  },
  {
    question: "Which annulus pressures can be monitored using the Eruption Manifold?",
    options: [
      "Only A Annulus",
      "Only B Annulus",
      "A and B Annulus",
      "Separator Pressure Only"
    ],
    correctIndex: 2,
    explanation: "The manifold allows monitoring of both Production-Casing (A) and Casing-Casing (B) annulus pressures."
  },
  {
    question: "Why should valves be opened gradually?",
    options: [
      "To increase production rate",
      "To reduce pressure shock and equipment damage",
      "To improve fluid separation",
      "To increase WHCIP"
    ],
    correctIndex: 1,
    explanation: "Gradual valve operation prevents pressure surges and protects equipment."
  },
  {
    question: "Which statement is TRUE regarding Eruption Manifold operations?",
    options: [
      "Valve 8 is connected to the Short String",
      "Valve 5 is connected to the Long String",
      "Valve 6 is used as a Pump/Kill connection",
      "The Choke Manifold must remain open during shut-in operations"
    ],
    correctIndex: 2,
    explanation: "Valve No. 6 is commonly used for acid pumping and well kill operations."
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
