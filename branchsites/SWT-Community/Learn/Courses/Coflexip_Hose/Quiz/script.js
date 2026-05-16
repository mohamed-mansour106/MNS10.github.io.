/* ===== Professional Tank Safety Assessment (20 Questions) ===== */
const questions = [
  {
    question: "During high-rate oil transfer, the 'Breather Valve' (PV Valve) fails to open while emptying. What is the immediate physical risk to the tank structure?",
    options: [
      "Internal overpressure causing a roof rupture",
      "Thermal expansion of the remaining crude",
      "Structural implosion (vacuum collapse) due to atmospheric pressure",
      "Flame arrestor saturation"
    ],
    correctIndex: 2,
    explanation: "When liquid is removed without air intake, internal pressure drops. External atmospheric pressure (14.7 psi) can easily crush a non-coded atmospheric tank."
  },
  {
    question: "What is the primary function of a Nitrogen (N2) 'Blanketing' system in a storage tank containing high-volatility condensate?",
    options: [
      "To increase the flow rate of the transfer pump",
      "To displace Oxygen and keep the vapor space below the Lower Explosive Limit (LEL)",
      "To cool the liquid temperature during summer operations",
      "To act as a chemical scavenger for H2S"
    ],
    correctIndex: 1,
    explanation: "Nitrogen is inert. By displacing Oxygen, you remove one leg of the fire triangle, preventing internal combustion."
  },
  {
    question: "A tank is rated for 'Atmospheric' service. If the pressure gauge shows 18 psig, what is the status of the vessel?",
    options: [
      "Normal operating range for well testing",
      "Slightly high but safe for temporary use",
      "Critical Condition: The tank is exceeding its design limit and is at risk of catastrophic failure",
      "Ideal pressure for ensuring the flame arrestor works"
    ],
    correctIndex: 2,
    explanation: "Atmospheric tanks are generally designed for very low pressures (usually <0.5 psi to 15 psi max depending on API code). 18 psig is dangerously high."
  },
  {
    question: "Why must the Vent Line always be directed to a Flare or Burner rather than vented locally at the tank site?",
    options: [
      "To prevent the accumulation of heavier-than-air hydrocarbon vapors at ground level",
      "To reduce the noise of the gas flow",
      "To save space on the well pad",
      "Because the gas is too cold for local venting"
    ],
    correctIndex: 0,
    explanation: "Hydrocarbon vapors (like Propane/Butane) are heavier than air and can pool on the ground, creating a massive explosion risk if they find an ignition source."
  },
  {
    question: "If the Flame Arrestor element becomes fouled with wax or debris, what 'hidden' danger is created?",
    options: [
      "The tank will become too cold",
      "The vent line will effectively be blocked, leading to overpressure during filling",
      "The oil will become contaminated",
      "The transfer pump will lose suction"
    ],
    correctIndex: 1,
    explanation: "A blocked flame arrestor acts like a closed valve. If you keep pumping fluid in, the gas cannot escape, leading to a tank rupture."
  },
  {
    question: "What is the standard 'Safety Buffer' (Max Fill Level) for an atmospheric tank to prevent liquid carryover?",
    options: [
      "95%",
      "50%",
      "80%",
      "100% (until the high-level alarm sounds)"
    ],
    correctIndex: 2,
    explanation: "80% is the industry standard to allow for gas breakout and thermal expansion without pushing liquid into the vent lines."
  },
  {
    question: "During an H2S survey, the tank hatch area measures 50 ppm H2S. What is the immediate requirement before proceeding with manual gauging?",
    options: [
      "Hold your breath while opening the hatch",
      "Wear a filtered dust mask",
      "Use Supplied Air Respirator (SCBA) and follow H2S safety protocols",
      "Stand upwind and use a long stick"
    ],
    correctIndex: 2,
    explanation: "50 ppm is above the Short Term Exposure Limit (STEL). SCBA or supplied air is mandatory for life safety."
  },
  {
    question: "You notice the tank walls 'throbbing' or vibrating during a high-rate flow-back. What is the most likely cause?",
    options: [
      "The pump is running too fast",
      "Slug flow causing rapid pressure/vacuum cycles (the tank is struggling to breathe)",
      "The oil is boiling",
      "Normal operation for this tank type"
    ],
    correctIndex: 1,
    explanation: "Vibration or 'panting' indicates the venting system cannot handle the volume of gas/liquid displacement occurring."
  },
  {
    question: "How does the 'Static Electricity' risk change when using a plastic/non-conductive hose for oil transfer?",
    options: [
      "It decreases because plastic is an insulator",
      "It increases significantly as static charge builds up and cannot dissipate safely to ground",
      "It stays the same",
      "Static electricity is only a risk with gas, not liquid"
    ],
    correctIndex: 1,
    explanation: "Non-conductive hoses prevent the dissipation of static. Bonding and grounding are essential to prevent sparks."
  },
  {
    question: "What is the specific purpose of the 'Vacuum Breaker' internal to a Breather Valve?",
    options: [
      "To let gas out to the flare",
      "To let atmospheric air in if the internal pressure drops below a set point",
      "To measure the level of the tank",
      "To filter the crude oil"
    ],
    correctIndex: 1,
    explanation: "The vacuum breaker is the 'emergency lung' that pulls air in to prevent the tank from being crushed."
  },
  {
    question: "Which environmental factor can cause a 'Thermal Vacuum' in a tank even if no liquid is being pumped out?",
    options: [
      "Heavy rain or a sudden cold front cooling the tank vapor space rapidly",
      "Extremely high noon-day sun",
      "High humidity",
      "Low wind speeds"
    ],
    correctIndex: 0,
    explanation: "Rapid cooling shrinks the vapor inside. If the breather valve is stuck, this shrinkage creates a vacuum that can collapse the tank."
  },
  {
    question: "When offloading to a tanker truck, why do we limit the truck fill to 95%?",
    options: [
      "To save weight for road regulations",
      "To allow room for the fluid to expand as it warms up during transport",
      "To prevent the truck from tipping over",
      "To keep the truck pump primed"
    ],
    correctIndex: 1,
    explanation: "Liquid expansion due to temperature changes can rupture a sealed truck tank if there is no 'ullage' (air space)."
  },
  {
    question: "What does 'Flashback' mean in the context of a storage tank?",
    options: [
      "When the pump reverses direction",
      "When a flame from the flare travels back through the vent line into the tank vapor space",
      "When the operator forgets a step",
      "When the oil changes color"
    ],
    correctIndex: 1,
    explanation: "Flashback is the movement of a flame front through a flammable mixture. This is what the Flame Arrestor is designed to stop."
  },
  {
    question: "In a 'Closed Loop' well test, what is the role of the atmospheric tank?",
    options: [
      "It is the primary separator",
      "It acts as the final stage of separation and surge volume before disposal/sale",
      "It is used to store high-pressure gas for the compressor",
      "It is not used in closed-loop systems"
    ],
    correctIndex: 1,
    explanation: "The tank allows any remaining gas to break out of the liquid at atmospheric pressure before the liquid is moved off-site."
  },
  {
    question: "You find liquid oil dripping from the Flame Arrestor vent. What should you do?",
    options: [
      "Ignore it; it's normal condensation",
      "Immediately stop flow, as this indicates overfilling or 'carryover' into the safety system",
      "Tighten the bolts on the arrestor",
      "Increase the Nitrogen purge rate"
    ],
    correctIndex: 1,
    explanation: "Liquid in the arrestor blocks gas flow and creates a fire hazard. It means the tank level was likely too high or the gas flow was too violent."
  },
  {
    question: "What is 'H2S Scavenging' in a storage tank?",
    options: [
      "Using a vacuum to pull gas out",
      "Adding chemicals to the liquid to neutralize Hydrogen Sulfide",
      "Cleaning the tank with water",
      "Testing for gas with a hand-held monitor"
    ],
    correctIndex: 1,
    explanation: "Scavengers are chemical agents that react with H2S to turn it into a non-toxic liquid byproduct."
  },
  {
    question: "Which of these is a 'Golden Rule' for tank vent lines?",
    options: [
      "They must have as many bends as possible",
      "They must NEVER be equipped with a check valve or block valve that can stay closed",
      "They should be as small as possible to save money",
      "They should be painted red"
    ],
    correctIndex: 1,
    explanation: "A vent line must remain open and unobstructed. A closed valve on a vent line is a 'bomb' waiting to happen."
  },
  {
    question: "Before performing a 'Nitrogen Purge', what must be verified regarding the tank hatches?",
    options: [
      "They must be wide open",
      "They must be secured/closed to allow the N2 to displace the oxygen toward the vent line",
      "They must be removed from the tank",
      "They must be painted white"
    ],
    correctIndex: 1,
    explanation: "To purge effectively, the system must be closed so the Nitrogen can push the Oxygen out through the designated vent path."
  },
  {
    question: "What is 'Slug Flow' and how does it affect tank safety?",
    options: [
      "Very slow moving oil; no risk",
      "Large bursts of gas and liquid; causes sudden pressure spikes in the tank",
      "A type of chemical additive",
      "The sound the pump makes"
    ],
    correctIndex: 1,
    explanation: "Slugs cause 'surges.' An atmospheric tank cannot handle sudden high-volume gas expansion easily."
  },
  {
    question: "If an operator must climb to the top of the tank, what is the most critical atmospheric hazard?",
    options: [
      "Lack of wind",
      "Oxygen deficiency or Toxic gas (H2S/HC) clouds near the vents",
      "The height of the ladder",
      "The temperature of the metal"
    ],
    correctIndex: 1,
    explanation: "Vents release gases that can be toxic or can displace oxygen. Operators should always wear personal gas monitors when climbing tanks."
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
