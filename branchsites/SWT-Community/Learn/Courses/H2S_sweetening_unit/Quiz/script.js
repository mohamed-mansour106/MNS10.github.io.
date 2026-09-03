/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [

  {
    question: "What is the main purpose of the H₂S Sweetening Unit?",
    options: [
      "Increase oil viscosity for storage",
      "Remove Hydrogen Sulfide (H₂S) from produced fluids",
      "Separate water from crude oil only",
      "Increase gas pressure in flow lines"
    ],
    correctIndex: 1,
    explanation: "The unit is designed to reduce H₂S concentration in produced fluids to safe levels (0–20 ppm) using chemical injection."
  },

  {
    question: "What type of signal does the H₂S analyzer send to the PLC?",
    options: [
      "Digital ON/OFF signal",
      "Hydraulic pressure signal",
      "4–20 mA analog signal",
      "Wireless RF signal"
    ],
    correctIndex: 2,
    explanation: "The H₂S probe transmits a 4–20 mA signal proportional to the H₂S concentration to the PLC system."
  },

  {
    question: "What happens when H₂S concentration increases in the process stream?",
    options: [
      "PLC stops the pump immediately",
      "Chemical injection is reduced",
      "PLC increases chemical injection rate",
      "System switches to manual mode"
    ],
    correctIndex: 2,
    explanation: "The PLC automatically increases scavenger chemical dosing to reduce higher H₂S levels."
  },

  {
    question: "What is the role of the PLC in the sweetening system?",
    options: [
      "Manually operate valves only",
      "Monitor temperature only",
      "Control chemical injection based on H₂S signal",
      "Increase gas production rate"
    ],
    correctIndex: 2,
    explanation: "The PLC receives sensor input and automatically controls the injection pump to maintain safe H₂S levels."
  },

  {
    question: "What is the function of EMO-XXXX chemical?",
    options: [
      "Increase gas flow rate",
      "Act as corrosion inhibitor only",
      "Scavenge and neutralize H₂S",
      "Separate oil and water phases"
    ],
    correctIndex: 2,
    explanation: "EMO-XXXX is an organic scavenger chemical used to neutralize Hydrogen Sulfide in produced fluids."
  },

  {
    question: "Why is instrument air required for the system?",
    options: [
      "To cool down the PLC",
      "To operate pneumatic metering pump",
      "To increase H₂S detection accuracy",
      "To pressurize storage tanks"
    ],
    correctIndex: 1,
    explanation: "Instrument air drives the pneumatic pump that injects chemical into the process line."
  },

  {
    question: "What is the safe H₂S concentration target after treatment?",
    options: [
      "50–100 ppm",
      "0–20 ppm",
      "200–300 ppm",
      "Above 500 ppm"
    ],
    correctIndex: 1,
    explanation: "The system aims to reduce H₂S to an acceptable operational limit of 0–20 ppm."
  },

  {
    question: "What is the first step before operating the system?",
    options: [
      "Start chemical injection immediately",
      "Verify all P&ID connections",
      "Open all valves fully",
      "Increase air pressure to maximum"
    ],
    correctIndex: 1,
    explanation: "All mechanical, electrical, and process connections must be verified according to P&ID before operation."
  },

  {
    question: "What happens if the PLC is switched OFF during operation?",
    options: [
      "System continues automatically",
      "Chemical injection continues at max rate",
      "Automatic control and injection stop",
      "H₂S analyzer increases sensitivity"
    ],
    correctIndex: 2,
    explanation: "Turning off the PLC stops automatic control and halts injection operations."
  },

  {
    question: "What is the purpose of flushing the system with water during shutdown?",
    options: [
      "Increase chemical concentration",
      "Cool down the pump",
      "Remove residual chemicals and prevent corrosion",
      "Increase flow rate in lines"
    ],
    correctIndex: 2,
    explanation: "Flushing removes leftover scavenger chemicals and prevents internal corrosion or blockage."
  },

  {
    question: "Why must the system be depressurized before disconnection?",
    options: [
      "To increase pump efficiency",
      "To avoid pressure buildup in storage tanks",
      "To prevent sudden release of hazardous pressure",
      "To improve chemical mixing"
    ],
    correctIndex: 2,
    explanation: "Depressurization prevents uncontrolled release of pressure, protecting personnel and equipment."
  },

  {
    question: "What is the function of the H₂S probe?",
    options: [
      "Measure temperature of crude oil",
      "Detect H₂S concentration in the process stream",
      "Control pump speed directly",
      "Separate gas from liquid"
    ],
    correctIndex: 1,
    explanation: "The probe continuously measures H₂S levels and sends a proportional signal to the PLC."
  },

  {
    question: "What is the correct PLC mode during normal operation?",
    options: [
      "Manual override mode",
      "Shutdown mode",
      "Auto mode",
      "Calibration mode only"
    ],
    correctIndex: 2,
    explanation: "The system operates in AUTO mode for continuous and automatic chemical injection control."
  },

  {
    question: "What is the role of the pneumatic metering pump?",
    options: [
      "Measure H₂S concentration",
      "Inject scavenger chemical into process line",
      "Separate oil phases",
      "Cool down process stream"
    ],
    correctIndex: 1,
    explanation: "The pump injects controlled amounts of scavenger chemical based on PLC signals."
  },

  {
    question: "What is the main risk if H₂S is not treated?",
    options: [
      "Increased oil density",
      "Corrosion and toxicity hazards",
      "Improved flow rate",
      "Reduced pump efficiency only"
    ],
    correctIndex: 1,
    explanation: "Untreated H₂S causes severe corrosion and poses serious health risks to personnel."
  },

  {
    question: "What is the purpose of ESD integration in the system?",
    options: [
      "Increase chemical injection rate",
      "Provide emergency shutdown in hazardous situations",
      "Improve oil quality only",
      "Increase pump stroke frequency"
    ],
    correctIndex: 1,
    explanation: "ESD ensures safe shutdown during emergency conditions to protect people and equipment."
  },

  {
    question: "What is required before system start-up?",
    options: [
      "Open discharge valves fully",
      "Fill chemical tank and verify connections",
      "Bypass PLC control",
      "Increase pressure beyond limits"
    ],
    correctIndex: 1,
    explanation: "All system checks, chemical filling, and connection verification must be completed before start-up."
  },

  {
    question: "What happens when H₂S levels decrease?",
    options: [
      "Pump stops completely",
      "PLC increases injection",
      "PLC reduces chemical injection",
      "System switches to emergency mode"
    ],
    correctIndex: 2,
    explanation: "The PLC reduces dosing to optimize chemical usage when H₂S levels are low."
  },

  {
    question: "Why is chemical injection point located upstream?",
    options: [
      "To reduce pump vibration",
      "To ensure better mixing time and efficiency",
      "To increase pressure drop",
      "To cool down the fluid"
    ],
    correctIndex: 1,
    explanation: "Upstream injection allows better mixing and more effective H₂S scavenging."
  },

  {
    question: "What is the final objective of the sweetening process?",
    options: [
      "Increase gas production pressure",
      "Reduce H₂S to safe acceptable limits",
      "Remove all hydrocarbons from flow",
      "Increase chemical consumption"
    ],
    correctIndex: 1,
    explanation: "The main goal is to reduce H₂S to safe levels while maintaining operational efficiency and safety."
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
