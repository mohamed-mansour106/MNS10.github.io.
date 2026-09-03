/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "What is the primary purpose of an Emergency Shutdown Valve (ESDV)?",
    options: [
      "Increase production rate",
      "Control sand production",
      "Provide emergency well flow isolation",
      "Measure well pressure"
    ],
    correctIndex: 2,
    explanation: "The ESDV is designed as a safety device to isolate well flow during emergency conditions."
  },
  {
    question: "What type of valve is an ESDV?",
    options: [
      "Butterfly valve",
      "Hydraulic-operated gate valve",
      "Globe valve",
      "Check valve"
    ],
    correctIndex: 1,
    explanation: "The ESDV is a hydraulic pressure-controlled gate valve."
  },
  {
    question: "What does 'Fail Close' mean for an ESDV?",
    options: [
      "The valve stays open when pressure is lost",
      "The valve automatically closes when hydraulic pressure is lost",
      "The valve locks in position",
      "The valve requires manual closure"
    ],
    correctIndex: 1,
    explanation: "The spring-loaded actuator closes the valve automatically if hydraulic pressure is removed."
  },
  {
    question: "Where is the ESDV normally installed?",
    options: [
      "Downstream of flare burner",
      "Upstream of the choke manifold",
      "Inside separator vessel",
      "After storage tanks"
    ],
    correctIndex: 1,
    explanation: "The ESDV is commonly located upstream of the choke manifold for emergency well isolation."
  },
  {
    question: "Which system normally controls the ESDV?",
    options: [
      "Chemical injection pump",
      "Control panel and pressure pilots",
      "Diesel engine governor",
      "Transfer pump"
    ],
    correctIndex: 1,
    explanation: "The valve is normally controlled through an ESD control panel and Hi/Lo pressure pilots."
  },
  {
    question: "What is the recommended hydraulic operating pressure when opening the ESDV?",
    options: [
      "500-1000 psig",
      "1000-1500 psig",
      "1500-2000 psig",
      "5000-7000 psig"
    ],
    correctIndex: 2,
    explanation: "Normal hydraulic pressure required to open the valve is between 1500 and 2000 psig."
  },
  {
    question: "Before opening the ESDV, the hydraulic oil reservoir should be approximately:",
    options: [
      "20% full",
      "40% full",
      "60% full",
      "80% full"
    ],
    correctIndex: 3,
    explanation: "The reservoir should be about 80% full to ensure sufficient hydraulic oil for operation."
  },
  {
    question: "What air supply pressure is required for proper ESD panel operation?",
    options: [
      "20-40 psig",
      "50-60 psig",
      "80-100 psig",
      "150-200 psig"
    ],
    correctIndex: 2,
    explanation: "The ESD control panel typically requires 80-100 psig air supply."
  },
  {
    question: "What should be monitored while opening the ESDV?",
    options: [
      "Tank level only",
      "Separator temperature only",
      "Valve stem movement and pressure gauge",
      "Flare burner flame color"
    ],
    correctIndex: 2,
    explanation: "The operator should observe stem movement and hydraulic pressure to verify opening."
  },
  {
    question: "Why is a hydraulic quick release system recommended in gas wells?",
    options: [
      "To increase production",
      "To reduce fuel consumption",
      "To provide fast emergency shutdown",
      "To reduce separator pressure"
    ],
    correctIndex: 2,
    explanation: "Quick release systems allow rapid valve closure within approximately 5-10 seconds."
  },
  {
    question: "What should the hydraulic pressure gauge read when the ESDV is fully closed?",
    options: [
      "500 psig",
      "1000 psig",
      "2000 psig",
      "0 psig"
    ],
    correctIndex: 3,
    explanation: "A reading of 0 psig indicates hydraulic pressure has been released and the valve is closed."
  },
  {
    question: "How can the ESDV be manually closed?",
    options: [
      "Increase hydraulic pressure",
      "Turn SERVICE position to SHUT IN",
      "Open the choke manifold",
      "Close the separator outlet"
    ],
    correctIndex: 1,
    explanation: "Changing the manifold indicator from SERVICE to SHUT IN releases hydraulic pressure."
  },
  {
    question: "What causes the ESDV to physically close after hydraulic pressure is released?",
    options: [
      "Gravity",
      "Gas pressure",
      "Internal spring force",
      "Flow pressure"
    ],
    correctIndex: 2,
    explanation: "The spring-loaded actuator automatically forces the valve closed."
  },
  {
    question: "Which button initiates a total emergency shutdown?",
    options: [
      "Green Reset Button",
      "Start Button",
      "Yellow Alarm Button",
      "Red Emergency Shutdown Button"
    ],
    correctIndex: 3,
    explanation: "Pressing the red ESD button initiates a complete emergency shutdown."
  },
  {
    question: "Why should pressure be equalized across the ESDV before reopening after a shutdown?",
    options: [
      "To increase production",
      "To reduce erosion and valve damage",
      "To reduce separator level",
      "To improve flare efficiency"
    ],
    correctIndex: 1,
    explanation: "Pressure equalization protects the gate from erosion and excessive stress."
  },
  {
    question: "What should be closed before re-energizing the ESD system after an emergency shutdown?",
    options: [
      "Storage tank valve",
      "Chemical pump",
      "Choke manifold",
      "Flare ignitor"
    ],
    correctIndex: 2,
    explanation: "Closing the choke manifold helps prevent hammer effect and pressure surges."
  },
  {
    question: "What standard are ESDV gate valves manufactured in compliance with?",
    options: [
      "ISO 9001",
      "API Standards",
      "ASTM D86",
      "NACE SP0502"
    ],
    correctIndex: 1,
    explanation: "ESDV gate valves are manufactured according to API standards."
  },
  {
    question: "Which connection type may be used on ESDVs?",
    options: [
      "Victaulic only",
      "Camlock only",
      "Hammer Union or Greylock",
      "PVC threaded connection"
    ],
    correctIndex: 2,
    explanation: "ESDVs are commonly supplied with Hammer Union or Greylock connections."
  },
  {
    question: "For which service are hydraulic-operated ESDVs certified?",
    options: [
      "Fresh water service only",
      "Steam service only",
      "Sour service (H₂S/CO₂)",
      "Food grade service"
    ],
    correctIndex: 2,
    explanation: "The valves are certified for sour service applications containing H₂S and CO₂."
  },
  {
    question: "What is the maximum recommended hydraulic operating pressure mentioned in the course?",
    options: [
      "500 psig",
      "1000 psig",
      "2000-3000 psig",
      "10000 psig"
    ],
    correctIndex: 2,
    explanation: "Operators should consider hydraulic oil expansion and avoid exceeding 2000-3000 psig."
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
