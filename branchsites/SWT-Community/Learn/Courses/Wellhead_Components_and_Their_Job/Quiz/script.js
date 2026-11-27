const QUIZ_KEY = "quizState:" + location.pathname;
const HIGH_KEY = "highScore:" + location.pathname;
/* ===== Wellhead Components and Their Job Assessment (15 Questions) ===== */
const questions = [
  {
    "question": "What is a wellhead?",
    "options": [
      "A pump",
      "The equipment at the top of the well that supports strings and contains pressure",
      "A tank",
      "A burner"
    ],
    "correctIndex": 1,
    "explanation": "It is the foundation and the door of the well."
  },
  {
    "question": "Which of these is NOT a job of the wellhead?",
    "options": [
      "Supporting casing weight",
      "Containing pressure",
      "Giving access to the well",
      "Heating the well fluid"
    ],
    "correctIndex": 3,
    "explanation": "Heaters are separate equipment."
  },
  {
    "question": "What does the base plate do?",
    "options": [
      "Spreads the load to the ground or structure",
      "Measures flow",
      "Burns gas",
      "Pumps oil"
    ],
    "correctIndex": 0,
    "explanation": "It sits at the bottom."
  },
  {
    "question": "What does the casing head spool do?",
    "options": [
      "Measures gas",
      "Burns oil",
      "Holds and seals a casing string",
      "Filters sand"
    ],
    "correctIndex": 2,
    "explanation": "There can be more than one."
  },
  {
    "question": "What does the tubing head spool hold?",
    "options": [
      "The burner",
      "The separator",
      "The tubing hanger",
      "The heater"
    ],
    "correctIndex": 2,
    "explanation": "It also seals the tubing."
  },
  {
    "question": "What is the Christmas tree?",
    "options": [
      "The valves on top of the tubing head that control the flow",
      "A decoration",
      "A tank",
      "A pump"
    ],
    "correctIndex": 0,
    "explanation": "It is also called the production tree."
  },
  {
    "question": "What is a hanger?",
    "options": [
      "A type of valve",
      "A burner",
      "A gauge",
      "A part that holds the weight of a string"
    ],
    "correctIndex": 3,
    "explanation": "It sits in the spool."
  },
  {
    "question": "What does a packoff or seal do?",
    "options": [
      "Measures flow",
      "Closes the space between a string and the spool",
      "Heats fluid",
      "Makes noise"
    ],
    "correctIndex": 1,
    "explanation": "It stops pressure from passing to another space."
  },
  {
    "question": "What is the annulus?",
    "options": [
      "The space between two strings",
      "The inside of the tubing",
      "A valve",
      "The tree top"
    ],
    "correctIndex": 0,
    "explanation": "Its pressure is a health signal."
  },
  {
    "question": "Why read annulus pressure?",
    "options": [
      "To change the color",
      "It is not useful",
      "Changes can show a problem in the well",
      "To measure the wind"
    ],
    "correctIndex": 2,
    "explanation": "Report changes."
  },
  {
    "question": "What is a test port used for?",
    "options": [
      "Burning gas",
      "Pressure testing seals and flanges",
      "Filling a tank",
      "Heating oil"
    ],
    "correctIndex": 1,
    "explanation": "Done after installation."
  },
  {
    "question": "What are the master valves?",
    "options": [
      "The burner valves",
      "The tank valves",
      "The heater valves",
      "The main barrier valves on the tree"
    ],
    "correctIndex": 3,
    "explanation": "Operated only as the procedure says."
  },
  {
    "question": "Where does the wing valve send the flow?",
    "options": [
      "To the sky",
      "To the casing",
      "To the cement",
      "To the flow line"
    ],
    "correctIndex": 3,
    "explanation": "It is on the side of the tree."
  },
  {
    "question": "What must the test equipment rating match?",
    "options": [
      "The lowest pressure",
      "At least the highest expected pressure",
      "The weather",
      "Nothing"
    ],
    "correctIndex": 1,
    "explanation": "The wellhead rating comes first."
  },
  {
    "question": "What do you do before opening the well after connecting the test equipment?",
    "options": [
      "Open at once",
      "Paint the tree",
      "Pressure test the connection",
      "Remove the gauges"
    ],
    "correctIndex": 2,
    "explanation": "Prove the connection first."
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
