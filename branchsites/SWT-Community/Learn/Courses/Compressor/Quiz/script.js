/* ===== Quiz Data ===== */
const questions = [
  {
    question: "To prevent condensation in the fuel tank, what level should be maintained at the end of the day?",
    options: ["50%", "75%", "90%", "100%"],
    correctIndex: 2,
    explanation: "Maintaining a 90% fuel level minimizes the air space where moisture can condense into liquid water."
  },
  {
    question: "What safety device is mandatory for all air rubber hose connections to prevent injury?",
    options: ["Padlocks", "Whip checks / Safety clips", "Zip ties", "Check valves"],
    correctIndex: 1,
    explanation: "Whip checks prevent the hose from lashing out violently if a coupling fails under pressure."
  },
  {
    question: "On an Ingersoll Rand unit, which key position is used specifically for the grid heater?",
    options: ["Position 0", "Position 1", "Position 2", "Position 3"],
    correctIndex: 2,
    explanation: "Position 2 activates the grid heater for cold starts; Position 3 is for cranking the engine."
  },
  {
    question: "What is the required specific gravity (density) for the engine cooling system?",
    options: ["1.00 (62.4 PCF)", "1.07 (66.8 PCF)", "1.25 (78.0 PCF)", "0.90 (56.1 PCF)"],
    correctIndex: 1,
    explanation: "The manual specifies a specific gravity of 1.07 to ensure proper thermal regulation and corrosion protection."
  },
  {
    question: "How long should the engine warm up before pressing the service air switch to load?",
    options: ["1 minute", "2 minutes", "5 minutes", "10 minutes"],
    correctIndex: 2,
    explanation: "A 5-minute warm-up ensures oil circulation and stable temperatures before the unit is placed under load."
  },
  {
    question: "At what temperature threshold is the Atlas Copco unit ready to be loaded via the F1 button?",
    options: ["25°C (77°F)", "40°C (104°F)", "60°C (140°F)", "80°C (176°F)"],
    correctIndex: 1,
    explanation: "The control logic requires the coolant to reach 40°C (104°F) before allowing the compressor to load."
  },
  {
    question: "How long should the engine idle for cooling during a normal shutdown procedure?",
    options: ["1 minute", "2-3 minutes", "5-10 minutes", "15 minutes"],
    correctIndex: 2,
    explanation: "A 5-10 minute idle period allows the turbocharger and engine components to cool down gradually."
  },
  {
    question: "What must be manually operated if an Atlas Copco unit runs out of fuel?",
    options: ["The hand pump", "The service valve", "The battery switch", "The E-stop button"],
    correctIndex: 0,
    explanation: "The hand pump must be used to prime the fuel system and remove air until the system is under pressure."
  },
  {
    question: "What is the immediate result of pressing the red mushroom (Emergency Stop) button?",
    options: ["The engine idles", "The service valve closes", "All power (hardware/software) is terminated", "The battery disconnects"],
    correctIndex: 2,
    explanation: "The E-stop kills all power immediately to prevent injury or further mechanical damage."
  },
  {
    question: "To reset after an Emergency Stop, what must be done after unlocking the physical button?",
    options: ["Turn key to Position 3", "Press the Start button", "Press F1 to reset the software lock", "Refuel the engine"],
    correctIndex: 2,
    explanation: "Once the physical button is unlocked, the operator must press F1 on the panel to clear the software lock."
  },
  {
    question: "How many automatic cranking attempts will the Atlas Copco make before a 'START FAILURE' message?",
    options: ["1 attempt", "3 attempts", "5 attempts", "10 attempts"],
    correctIndex: 2,
    explanation: "The system is programmed to attempt starting 5 times before timing out and requiring a manual reset."
  },
  {
    question: "The regulating valve should be set to how many bar higher than the required working pressure?",
    options: ["0.5 bar", "1 bar", "2 bar (29 psi)", "5 bar"],
    correctIndex: 2,
    explanation: "A 2 bar buffer ensures the system can maintain the required pressure consistently under load."
  },
  {
    question: "Where should the compressor oil level be visually checked before operation?",
    options: ["Engine dipstick", "Radiator cap", "Sight glass on the separator tank", "Air discharge valve"],
    correctIndex: 2,
    explanation: "The compressor oil (different from engine oil) is monitored via the sight glass on the separator tank."
  },
  {
    question: "Why is it forbidden to operate the compressor with the enclosure doors open?",
    options: ["To prevent theft", "To keep it clean", "To prevent overheating and high noise exposure", "To save fuel"],
    correctIndex: 2,
    explanation: "Closed doors are critical for directing cooling airflow and protecting operators from high noise levels."
  },
  {
    question: "What is the first step in the Pre-Operational Checks & Safety sequence?",
    options: ["Turn key to Position 1", "Perform a 'walk-around' inspection", "Check the battery", "Press the F1 button"],
    correctIndex: 1,
    explanation: "A walk-around inspection identifies leaks, loose fittings, or safety hazards before the unit is energized."
  },
  {
    question: "Which message confirms the system is energized and ready after the initial power-on self-test?",
    options: ["UNCONTROLLED STOP", "READY TO START", "LOADING", "STOPPING"],
    correctIndex: 1,
    explanation: "'READY TO START' indicates the digital logic is clear and the engine can be cranked."
  },
  {
    question: "On an Ingersoll Rand unit, what should you do as soon as the engine starts?",
    options: ["Hold key in Position 3", "Release the key switch", "Turn key to Position 0", "Press the F1 button"],
    correctIndex: 1,
    explanation: "The key should be released so it returns to Position 1 to avoid damaging the starter motor."
  },
  {
    question: "What is the required status of the battery isolation switch for operation?",
    options: ["OFF", "ON", "Locked", "Removed"],
    correctIndex: 1,
    explanation: "The isolation switch must be turned to 'ON' to provide battery power to the control panel and starter."
  },
  {
    question: "What is the primary safety rule regarding the engine when refueling?",
    options: ["Keep it at full speed", "Keep it at idle", "It must be switched OFF", "Keep the doors open"],
    correctIndex: 2,
    explanation: "The engine must be completely OFF to prevent ignition of fuel vapors from heat or sparks."
  },
  {
    question: "If the Atlas Copco does not reach warm-up temperature within 5 minutes, what state does it enter?",
    options: ["Automatic loading", "Emergency stop", "Idle / NO LOADED status", "System restart"],
    correctIndex: 2,
    explanation: "The unit will default to an idle/no-load state to protect the engine if it fails to reach operating temperature."
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
  publicKey: "di944TOUgjjctowQk",
  serviceId: "service_txzx4kc",
  templateId: "template_rctd0z8"
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
