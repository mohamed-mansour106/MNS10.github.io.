/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
{
    question: "What is the primary purpose of a Portable High Pressure Strainer Package?",
    options: [
        "Increase gas production rate",
        "Heat the process stream",
        "Remove solids from produced hydrocarbons",
        "Separate oil and water"
    ],
    correctIndex: 2,
    explanation: "The strainer package is designed to remove sand, scale, rust, and other solids from oil and gas streams before they reach downstream equipment."
},
{
    question: "What is the maximum operating pressure rating of the portable strainer package described in this course?",
    options: [
        "5,000 psi",
        "10,000 psi",
        "15,000 psi",
        "20,000 psi"
    ],
    correctIndex: 2,
    explanation: "The package is designed for high-pressure service up to 15,000 psi, allowing installation directly downstream of high-pressure wellheads."
},
{
    question: "Why does the package contain two strainers?",
    options: [
        "To separate oil and gas",
        "To increase flow rate",
        "To allow duty and standby operation",
        "To reduce pressure"
    ],
    correctIndex: 2,
    explanation: "The dual-strainer arrangement allows one strainer to operate while the other remains on standby for maintenance or changeover."
},
{
    question: "What type of control system is installed on the package?",
    options: [
        "PLC automatic control",
        "SCADA control",
        "Remote monitoring system",
        "Manual operation only"
    ],
    correctIndex: 3,
    explanation: "The package operates manually and does not require external control or monitoring systems."
},
{
    question: "What instrument is used to monitor the condition of the strainers?",
    options: [
        "Flow meter",
        "Temperature transmitter",
        "Differential Pressure Indicator (PDI-200)",
        "Level gauge"
    ],
    correctIndex: 2,
    explanation: "PDI-200 monitors the pressure difference across the strainer and indicates blockage or solids accumulation."
},
{
    question: "What does a high differential pressure across a strainer usually indicate?",
    options: [
        "The screen is clean",
        "The process pressure is low",
        "The strainer is becoming blocked",
        "The well is dead"
    ],
    correctIndex: 2,
    explanation: "As solids accumulate in the strainer screen, flow resistance increases, causing differential pressure to rise."
},
{
    question: "Before startup, what must be confirmed regarding the strainer covers?",
    options: [
        "They are painted",
        "They are removed",
        "They are securely fitted",
        "They are heated"
    ],
    correctIndex: 2,
    explanation: "The covers must be securely fitted before introducing pressure into the system."
},
{
    question: "Why must the manifold be purged before introducing hydrocarbons?",
    options: [
        "To increase pressure",
        "To cool the system",
        "To remove air and prevent explosive mixtures",
        "To clean the gauges"
    ],
    correctIndex: 2,
    explanation: "Air mixed with hydrocarbons can create an explosive atmosphere, so purging is essential."
},
{
    question: "Which strainer is selected during startup?",
    options: [
        "The standby strainer",
        "Either S-200A or S-200B as the duty strainer",
        "Both simultaneously",
        "Neither strainer"
    ],
    correctIndex: 1,
    explanation: "One strainer is selected as the duty strainer while the other remains isolated on standby."
},
{
    question: "During startup, which isolation valves should generally be opened first?",
    options: [
        "Upstream valves",
        "Drain valves",
        "Downstream valves",
        "Vent valves"
    ],
    correctIndex: 2,
    explanation: "The procedure specifies gradually opening downstream isolation valves before upstream valves."
},
{
    question: "What is the purpose of a strainer changeover?",
    options: [
        "Increase temperature",
        "Switch flow to a clean standby strainer",
        "Reduce production",
        "Perform pressure testing"
    ],
    correctIndex: 1,
    explanation: "Changeover allows maintenance and cleaning while production continues through the standby unit."
},
{
    question: "What should be done before opening a blocked strainer for cleaning?",
    options: [
        "Increase pressure",
        "Inject chemicals",
        "Bleed off pressure safely",
        "Open all valves"
    ],
    correctIndex: 2,
    explanation: "The strainer must be isolated and depressurized before any maintenance activity."
},
{
    question: "What is the preferred purging medium for the package?",
    options: [
        "Air",
        "Nitrogen",
        "Oxygen",
        "Natural gas"
    ],
    correctIndex: 1,
    explanation: "Nitrogen is inert and does not support combustion, making it ideal for purging."
},
{
    question: "Approximately what pressure is used during nitrogen purging?",
    options: [
        "0.1 bar",
        "1 bar",
        "10 bar",
        "50 bar"
    ],
    correctIndex: 1,
    explanation: "The package is typically pressurized with nitrogen to approximately 1 bar during the purge procedure."
},
{
    question: "Why is a slight positive pressure maintained after nitrogen purging?",
    options: [
        "To increase production",
        "To prevent air re-entering the system",
        "To improve filtration",
        "To test valves"
    ],
    correctIndex: 1,
    explanation: "Positive pressure prevents atmospheric air from entering the package after purging."
},
{
    question: "What is a major limitation of water purging?",
    options: [
        "Water is explosive",
        "It requires a suitable vent point",
        "Water damages steel immediately",
        "It cannot remove air"
    ],
    correctIndex: 1,
    explanation: "Because the package lacks a dedicated high-point vent, water purging can be less effective than nitrogen purging."
},
{
    question: "Before inspection, strainer pots should be checked for the presence of which hazardous gas?",
    options: [
        "Helium",
        "Nitrogen",
        "Hydrogen Sulfide (H₂S)",
        "Argon"
    ],
    correctIndex: 2,
    explanation: "Personnel must verify that the vessel is free from H₂S and explosive gas mixtures before opening."
},
{
    question: "Why are hammer union seals and O-rings replaced during maintenance?",
    options: [
        "To increase temperature",
        "To improve appearance",
        "To maintain pressure integrity",
        "To increase flow rate"
    ],
    correctIndex: 2,
    explanation: "Seals and O-rings are critical pressure-containing components and must be replaced to prevent leaks."
},
{
    question: "What should be inspected inside the strainer vessel after removing the screen?",
    options: [
        "Paint color",
        "Corrosion, erosion, and flow damage",
        "Temperature readings",
        "Production rates"
    ],
    correctIndex: 1,
    explanation: "Internal inspection helps identify corrosion, erosion, and damage caused by solids and high-velocity flow."
},
{
    question: "What is the most important safety rule before opening any strainer vessel?",
    options: [
        "Increase line pressure",
        "Open all valves",
        "Ensure the vessel is isolated and depressurized",
        "Remove gauges first"
    ],
    correctIndex: 2,
    explanation: "Opening a pressurized vessel can result in serious injury or fatality. Isolation and depressurization are mandatory."
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
