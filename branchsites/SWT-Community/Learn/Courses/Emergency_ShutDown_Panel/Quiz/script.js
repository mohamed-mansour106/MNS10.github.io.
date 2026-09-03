/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "What is the primary function of an ESD (Emergency Shut Down) Panel?",
    options: [
      "Measure well production rates",
      "Control and shut down hydraulic safety valves during emergencies",
      "Separate oil, gas, and water",
      "Inject chemicals into the well"
    ],
    correctIndex: 1,
    explanation: "The ESD Panel controls hydraulic safety valves and provides emergency shutdown capability to protect personnel, equipment, and the environment."
  },
  {
    question: "Which valve is a subsurface safety valve controlled by the ESD Panel?",
    options: [
      "MV",
      "WV",
      "SCSSSV",
      "ESDV"
    ],
    correctIndex: 2,
    explanation: "SCSSSV stands for Surface Controlled Sub-Surface Safety Valve."
  },
  {
    question: "What supplies hydraulic control line pressure to the SCSSSV?",
    options: [
      "Electric motor pump",
      "Air driven diaphragm pump",
      "Centrifugal pump",
      "Gear pump"
    ],
    correctIndex: 1,
    explanation: "The SCSSSV hydraulic pressure is supplied by an air driven diaphragm pump."
  },
  {
    question: "What is the working pressure of the SCSSSV diaphragm pump?",
    options: [
      "3,000 psi",
      "5,000 psi",
      "7,000 psi",
      "10,000 psi"
    ],
    correctIndex: 3,
    explanation: "The air-driven diaphragm pump has a 10,000 psi working pressure."
  },
  {
    question: "At what pilot line pressure will the ESD Panel automatically trip?",
    options: [
      "20 psi",
      "30 psi",
      "40 psi",
      "80 psi"
    ],
    correctIndex: 2,
    explanation: "The panel trips when pilot line pressure falls below 40 psi."
  },
  {
    question: "What happens when pilot pressure drops below 40 psi?",
    options: [
      "The pump speeds up",
      "Hydraulic pressure is dumped and safety valves close",
      "The separator shuts down",
      "The flare ignites automatically"
    ],
    correctIndex: 1,
    explanation: "Loss of pilot pressure causes hydraulic pressure to dump and safety valves to close."
  },
  {
    question: "What is the purpose of the hydraulic relief valve?",
    options: [
      "Increase pump speed",
      "Reduce air consumption",
      "Limit hydraulic pressure to a safe value",
      "Open the SCSSSV"
    ],
    correctIndex: 2,
    explanation: "The hydraulic relief valve protects the system by limiting hydraulic pressure."
  },
  {
    question: "A typical hydraulic relief valve setting is:",
    options: [
      "1,000 psi",
      "3,000 psi",
      "6,000 psi",
      "10,000 psi"
    ],
    correctIndex: 2,
    explanation: "The hydraulic relief valve is commonly set at approximately 6,000 psi."
  },
  {
    question: "What is the purpose of the air relief valve installed before the air-driven pump?",
    options: [
      "Increase hydraulic pressure",
      "Prevent output pressure exceeding 7,000 psi",
      "Reduce pilot pressure",
      "Control flare temperature"
    ],
    correctIndex: 1,
    explanation: "The air relief valve prevents excessive hydraulic output pressure."
  },
  {
    question: "Before opening hydraulic valves, the hydraulic regulator should initially be turned:",
    options: [
      "Clockwise",
      "Anticlockwise",
      "Halfway open",
      "Locked"
    ],
    correctIndex: 1,
    explanation: "Turning the regulator anticlockwise prevents hydraulic oil from passing through initially."
  },
  {
    question: "Approximately what pressure is required to fully open hydraulic actuator valves?",
    options: [
      "500 psi",
      "1,500 psi",
      "3,000 psi",
      "10,000 psi"
    ],
    correctIndex: 2,
    explanation: "Hydraulic actuator valves are normally opened at approximately 3,000 psi."
  },
  {
    question: "What indicates that a hydraulic actuator valve is fully open?",
    options: [
      "Pump stops cycling",
      "Pilot pressure reaches 80 psi",
      "Full stem movement is observed",
      "Reservoir level increases"
    ],
    correctIndex: 2,
    explanation: "Complete stem travel confirms the valve is fully open."
  },
  {
    question: "What is the recommended pilot supply pressure range?",
    options: [
      "10–20 psi",
      "20–40 psi",
      "50–80 psi",
      "100–150 psi"
    ],
    correctIndex: 2,
    explanation: "Pilot pressure should be maintained between 50 and 80 psi."
  },
  {
    question: "What is the purpose of the 'Push to Close - Pull to Reset' relay valve?",
    options: [
      "Control separator level",
      "Reset or shut down the ESD system",
      "Control flare ignition",
      "Regulate pump speed"
    ],
    correctIndex: 1,
    explanation: "The relay valve is used to either shut down or reset the ESD system."
  },
  {
    question: "What must be achieved before releasing the relay valve lock pin?",
    options: [
      "Pilot pressure above 40 psi",
      "Hydraulic pressure above 10,000 psi",
      "Tank level above 50%",
      "Separator pressure below 10 psi"
    ],
    correctIndex: 0,
    explanation: "Pilot pressure must exceed 40 psi before releasing the lock pin."
  },
  {
    question: "What is the quickest way to shut down all hydraulic safety valves?",
    options: [
      "Close the separator outlet",
      "Turn off the generator",
      "Push the RED Emergency Stop Button",
      "Close the flare valve"
    ],
    correctIndex: 2,
    explanation: "Pressing the RED Emergency Stop Button initiates a complete shutdown."
  },
  {
    question: "How can a single hydraulic valve such as MV be closed without tripping the entire panel?",
    options: [
      "Press the emergency button",
      "Disconnect the pilot line",
      "Operate the manual ball valve",
      "Reduce separator pressure"
    ],
    correctIndex: 2,
    explanation: "The manual ball valve can isolate and close a specific hydraulic valve."
  },
  {
    question: "What indicates that a hydraulic valve is fully closed?",
    options: [
      "Pilot pressure reaches 80 psi",
      "Pump stops",
      "The stem is fully extended outward",
      "The reservoir becomes full"
    ],
    correctIndex: 2,
    explanation: "A fully extended stem indicates the valve is completely closed."
  },
  {
    question: "Before restarting the ESD system after a shutdown, what must be done?",
    options: [
      "Drain the oil reservoir",
      "Release the RED ESD button and reset ESD stations",
      "Replace the pilot line",
      "Close all valves"
    ],
    correctIndex: 1,
    explanation: "The emergency button must be released and all ESD stations reset."
  },
  {
    question: "What is the function of Hi/Lo Pressure Pilots connected to the ESD loop?",
    options: [
      "Increase well production",
      "Control chemical injection",
      "Automatically initiate shutdown during abnormal pressures",
      "Measure tank volume"
    ],
    correctIndex: 2,
    explanation: "Hi/Lo pressure pilots automatically trigger an ESD shutdown when unsafe process pressures occur."
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
