/* ===== Quiz Data ===== */
const questions =  [
  // --- MODULE 1: CHOKE MANIFOLD (11 Questions) ---
  {
    question: "What is the main function of a choke manifold in well testing?",
    options: ["To separate phases", "To control flow rate and pressure", "To house the burner", "To store oil"],
    correctIndex: 1,
    explanation: "It regulates flow and pressure before fluid enters surface processing equipment."
  },
  {
    question: "Where is the choke manifold located?",
    options: ["Upstream of flowhead", "Downstream of flowhead", "Inside the separator", "On the flare boom"],
    correctIndex: 1,
    explanation: "It is positioned downstream of the flowhead to manage fluids coming from the well."
  },
  {
    question: "What characterizes 'critical flow'?",
    options: ["Fluid stops moving", "Downstream pressure doesn't affect upstream rate", "Sand production starts", "Pressure reaches 15000 psi"],
    correctIndex: 1,
    explanation: "Critical flow isolates the well's performance from surface fluctuations."
  },
  {
    question: "Which component holds calibrated choke beans?",
    options: ["Adjustable choke", "Fixed choke box", "Swivel", "Gate valve"],
    correctIndex: 1,
    explanation: "The fixed choke box is used specifically for inserting pre-sized beans."
  },
  {
    question: "Why use both fixed and adjustable chokes?",
    options: ["For redundancy only", "For maximum control and flexibility", "To increase temperature", "To filter sand"],
    correctIndex: 1,
    explanation: "Adjustable chokes allow on-the-fly changes; fixed chokes provide long-term stability."
  },
  {
    question: "In pressure equalization, which valve is opened first?",
    options: ["Upstream", "Downstream", "Master", "Swab"],
    correctIndex: 1,
    explanation: "Opening the downstream valve first prevents sudden pressure surges."
  },
  {
    question: "Which is a common pressure rating for choke manifolds?",
    options: ["2000 psi", "10000 psi", "25000 psi", "500 psi"],
    correctIndex: 1,
    explanation: "Standard ratings are 5k, 10k, and 15k psi."
  },
  {
    question: "What is the role of the thermowell?",
    options: ["Measure pressure", "Measure temperature", "Inject chemicals", "Bleed air"],
    correctIndex: 1,
    explanation: "Thermowells house sensors to monitor fluid temperature."
  },
  {
    question: "How many gate valves are typically in a choke manifold?",
    options: ["Two", "Four", "Six", "Eight"],
    correctIndex: 1,
    explanation: "A standard setup typically includes four gate valves for routing."
  },
  {
    question: "What does the manifold limit to protect the reservoir?",
    options: ["Fluid temperature", "Sand and water/gas coning", "Pipe vibration", "H2S concentration"],
    correctIndex: 1,
    explanation: "By limiting flow, it prevents damage to the reservoir structure."
  },
  {
    question: "When diverting to a fixed choke, what is the final step?",
    options: ["Open the adjustable side", "Bleed pressure off the inactive side", "Increase pump speed", "Switch the master valve"],
    correctIndex: 1,
    explanation: "The inactive side must be isolated and bled for safety."
  },

  // --- MODULE 2: OIL & GAS MANIFOLDS (11 Questions) ---
  {
    question: "What is the primary purpose of an oil manifold?",
    options: ["Measure density", "Divert oil to various destinations", "Compress gas", "Heat the oil"],
    correctIndex: 1,
    explanation: "It routes oil to burners, tanks, or lines without stopping flow."
  },
  {
    question: "Why use two burners (port/starboard)?",
    options: ["Increase flow", "Wind direction safety", "Backup in case of fire", "Separate oil/gas"],
    correctIndex: 1,
    explanation: "Offshore rigs switch burners based on wind to blow heat away from the rig."
  },
  {
    question: "How many valves are on a standard oil manifold?",
    options: ["Two", "Three", "Five", "Seven"],
    correctIndex: 2,
    explanation: "An oil manifold typically uses five 2-inch ball valves."
  },
  {
    question: "What is the pressure rating of the skid-mounted manifolds?",
    options: ["5000 psi", "1440 psi", "10000 psi", "300 psi"],
    correctIndex: 1,
    explanation: "These are generally rated for 1440 psi."
  },
  {
    question: "The gas manifold diverts gas from where?",
    options: ["Wellhead", "Separator", "Storage tank", "Choke"],
    correctIndex: 1,
    explanation: "It takes the separated gas from the separator's outlet."
  },
  {
    question: "What is the size of the gas manifold valves?",
    options: ["1-inch", "2-inch", "3-inch", "4-inch"],
    correctIndex: 2,
    explanation: "Gas manifolds usually utilize 3-inch ball valves."
  },
  {
    question: "The 'Golden Rule' of manifold operation is:",
    options: ["Close then open", "Open then close", "Close both at once", "Never use valves"],
    correctIndex: 1,
    explanation: "Open the new valve before closing the old one to avoid pressure spikes."
  },
  {
    question: "Why are valve handles provided on the skid?",
    options: ["For decoration", "To avoid using 'cheaters'", "To increase torque", "To measure flow"],
    correctIndex: 1,
    explanation: "Using only provided handles prevents valve stem damage."
  },
  {
    question: "What prevents operational errors on the manifold?",
    options: ["Automatic sensors", "Valve labels", "High pressure", "Flashlights"],
    correctIndex: 1,
    explanation: "Labels like 'Separator to Tank' ensure correct routing."
  },
  {
    question: "Oil from the manifold can be sent to:",
    options: ["Burners", "Storage tanks", "Flow lines", "All of the above"],
    correctIndex: 3,
    explanation: "The manifold is designed to route oil to all these destinations."
  },
  {
    question: "What type of valves are primarily used in these manifolds?",
    options: ["Gate", "Needle", "Ball", "Check"],
    correctIndex: 2,
    explanation: "Ball valves are standard for these skid-mounted routing manifolds."
  },

  // --- MODULE 3: ESD SYSTEM (12 Questions) ---
  {
    question: "What does ESD stand for?",
    options: ["External Signal Device", "Emergency Shutdown", "Extra Safety Design", "Engine Starting Device"],
    correctIndex: 1,
    explanation: "ESD is the safety system used to close the well in emergencies."
  },
  {
    question: "What power source does the ESD control skid use?",
    options: ["Electric only", "Hydraulic and Air", "Steam", "Manual only"],
    correctIndex: 1,
    explanation: "The ESD uses hydraulic pressure for actuators and air for the control loop."
  },
  {
    question: "Maximum hydraulic pressure for the ESD actuator is:",
    options: ["1000 psi", "3000 psi", "6000 psi", "10000 psi"],
    correctIndex: 2,
    explanation: "The system supports actuators up to 6000 psi."
  },
  {
    question: "The high-pressure pilot triggers when:",
    options: ["Pressure drops", "Pressure exceeds threshold", "Fire is detected", "Air tank is empty"],
    correctIndex: 1,
    explanation: "It monitors for overpressure events in the flowline."
  },
  {
    question: "What is the 'fail-safe' action of the ESD system?",
    options: ["Vents air pressure", "Increases pump speed", "Opens all valves", "Sends an email"],
    correctIndex: 0,
    explanation: "Venting air triggers the interface valve to release hydraulic pressure and close the well."
  },
  {
    question: "Standard air loop pressure for pilots/stations is:",
    options: ["5 psi", "30 psi", "150 psi", "1000 psi"],
    correctIndex: 1,
    explanation: "The control loop typically operates at 30 psi."
  },
  {
    question: "Where is the SSV located?",
    options: ["After separator", "Upstream of choke", "Inside the tank", "On the burner"],
    correctIndex: 1,
    explanation: "The Surface Safety Valve is upstream of the choke manifold."
  },
  {
    question: "The ESD panel's air vessel stores air at:",
    options: ["30 psi", "150 psi", "6000 psi", "100 psi"],
    correctIndex: 1,
    explanation: "The main air reservoir stores compressed air at 150 psi."
  },
  {
    question: "Which valve speeds up the shutdown by dumping air?",
    options: ["Bypass valve", "Check valve", "Quick exhaust valve", "Reset valve"],
    correctIndex: 2,
    explanation: "Quick exhaust valves allow for rapid air venting."
  },
  {
    question: "What component connects the air signal to hydraulic pressure?",
    options: ["Hydraulic tank", "Interface valve", "Pressure gauge", "Hose reel"],
    correctIndex: 1,
    explanation: "The interface valve manages hydraulic release based on the air signal."
  },
  {
    question: "ESD push-button stations are usually located:",
    options: ["Only on the manifold", "At strategic points around the rig", "Inside the wellbore", "On the flare boom"],
    correctIndex: 1,
    explanation: "Stations are placed where personnel can reach them easily in danger."
  },
  {
    question: "What is the purpose of the reset valve?",
    options: ["To start the fire", "To restore the air loop after a trip", "To drain the oil tank", "To change the pressure rating"],
    correctIndex: 1,
    explanation: "The reset valve is used to re-pressurize the control loop after a shutdown."
  },

  // --- MODULE 4: FLOWHEAD (11 Questions) ---
  {
    question: "Is a flowhead temporary or permanent?",
    options: ["Temporary", "Permanent", "Semi-permanent", "Used only in drilling"],
    correctIndex: 0,
    explanation: "Flowheads are temporary surface shut-off devices for well testing."
  },
  {
    question: "Which valve is the primary barrier for the wellbore?",
    options: ["Swab valve", "Master valve", "Kill valve", "Wing valve"],
    correctIndex: 1,
    explanation: "The master valve is the main isolation point for the downhole string."
  },
  {
    question: "Which valve allows tool entry (wireline)?",
    options: ["Master", "Flow line", "Swab", "Kill"],
    correctIndex: 2,
    explanation: "The swab valve at the top allows vertical entry for tools."
  },
  {
    question: "The outlet wing valve is also known as:",
    options: ["Master valve", "Flow line valve", "Swab valve", "Kill valve"],
    correctIndex: 1,
    explanation: "The flow line valve is the exit for production fluids."
  },
  {
    question: "The kill line valve is used for:",
    options: ["Flowing oil", "Pumping mud/stimulation fluids", "Measuring gas", "Venting pressure"],
    correctIndex: 1,
    explanation: "The inlet wing (kill line) is for pumping fluids into the well."
  },
  {
    question: "What allows the test string to rotate?",
    options: ["Master valve", "Swivel", "Wing valve", "Actuator"],
    correctIndex: 1,
    explanation: "The swivel allows independent rotation of the string."
  },
  {
    question: "Should you rotate the swivel under pressure?",
    options: ["Yes, always", "Only at high speeds", "No", "Only during H2S tests"],
    correctIndex: 2,
    explanation: "Rotating under pressure can damage the swivel seals."
  },
  {
    question: "The flow line valve is typically connected to:",
    options: ["A hand pump", "The ESD system", "The burner only", "A water tank"],
    correctIndex: 1,
    explanation: "It is usually hydraulically actuated and linked to the ESD."
  },
  {
    question: "What protects the threads of the flowhead?",
    options: ["Grease", "Handling subs", "Plastic caps", "Paint"],
    correctIndex: 1,
    explanation: "Subs protect the main block threads and aid in handling."
  },
  {
    question: "Where is the swab valve located?",
    options: ["Below the master valve", "Above the master valve", "On the kill line", "Inside the swivel"],
    correctIndex: 1,
    explanation: "It sits at the top of the main block for tool access."
  },
  {
    question: "What supports the test string weight at the surface?",
    options: ["Separator", "Flowhead", "Tanks", "Burners"],
    correctIndex: 1,
    explanation: "The flowhead supports the weight of the downhole test string."
  },

  // --- MODULE 5: TEST SEPARATOR (12 Questions) ---
  {
    question: "How many phases does a test separator separate?",
    options: ["One", "Two", "Three", "Four"],
    correctIndex: 2,
    explanation: "It separates gas, oil, and water (3 phases)."
  },
  {
    question: "Which component removes oil mist from gas?",
    options: ["Inlet deflector", "Weir", "Mist extractor", "Vortex breaker"],
    correctIndex: 2,
    explanation: "The mist extractor filters out liquid droplets from the gas stream."
  },
  {
    question: "Separation is based on differences in:",
    options: ["Color", "Density", "Temperature", "Odor"],
    correctIndex: 1,
    explanation: "Gravity separation relies on the different weights/densities of the phases."
  },
  {
    question: "What prevents gas from exiting the liquid line?",
    options: ["Inlet deflector", "Vortex breaker", "Foam breaker", "Weir"],
    correctIndex: 1,
    explanation: "Vortex breakers stop whirlpools that would pull gas into the liquid outlet."
  },
  {
    question: "Where does the oil overflow into its compartment?",
    options: ["Through the mist extractor", "Over the weir", "Under the deflector", "Through the vortex breaker"],
    correctIndex: 1,
    explanation: "Oil spills over the weir into the measurement section."
  },
  {
    question: "How is high-flow oil typically metered?",
    options: ["Positive Displacement", "Vortex meter", "Bucket method", "Tape measure"],
    correctIndex: 1,
    explanation: "Vortex meters are used for higher oil flow rates."
  },
  {
    question: "What handles gas measurement?",
    options: ["PD meter", "Daniel Orifice meter", "Vortex meter", "Shrinkage tester"],
    correctIndex: 1,
    explanation: "Orifice meters are the standard for gas flow measurement."
  },
  {
    question: "What estimates volume loss from gas release?",
    options: ["Shrinkage tester", "Density meter", "Thermowell", "Borden tube"],
    correctIndex: 0,
    explanation: "The shrinkage tester measures how much oil 'shrinks' as gas escapes."
  },
  {
    question: "What is used to protect recorders from H2S?",
    options: ["Steam", "Hydraulic oil/diesel in scrubbers", "Sand", "Plastic bags"],
    correctIndex: 1,
    explanation: "Oil or diesel scrubbers filter out corrosive H2S."
  },
  {
    question: "What breaks up oil droplets to help them separate?",
    options: ["Mist extractor", "Coalescing plates", "Vortex breaker", "Inlet deflector"],
    correctIndex: 1,
    explanation: "Coalescing plates help small droplets group into larger ones."
  },
  {
    question: "PRVs on separators are usually:",
    options: ["Manually operated", "Pilot operated", "Never used", "Made of rubber"],
    correctIndex: 1,
    explanation: "Pilot-operated pressure relief valves ensure precise overpressure protection."
  },
  {
    question: "What controls liquid levels in the separator?",
    options: ["Manual handwheels", "Level controllers and valves", "The weir only", "Gas pressure"],
    correctIndex: 1,
    explanation: "Automatic controllers use floats and valves to maintain levels."
  },

  // --- MODULE 6: TANKS (11 Questions) ---
  {
    question: "Is a gauge tank pressurized?",
    options: ["Yes", "No", "Only during tests", "Always at 150 psi"],
    correctIndex: 1,
    explanation: "Gauge tanks are atmospheric (non-pressurized)."
  },
  {
    question: "What is a main use for gauge tanks?",
    options: ["High-pressure storage", "Calibrating meters at low flow", "Separating gas", "Cooling oil"],
    correctIndex: 1,
    explanation: "They are used for calibration and measuring low flow rates."
  },
  {
    question: "Can gauge tanks be used with H2S?",
    options: ["Yes", "No", "Only with masks", "Only offshore"],
    correctIndex: 1,
    explanation: "No, they vent directly to the atmosphere, making H2S lethal."
  },
  {
    question: "What prevents fire from entering the tank vent?",
    options: ["Water seal", "Flame arrestor", "Gate valve", "Gas scrubber"],
    correctIndex: 1,
    explanation: "Flame arrestors stop flame propagation by absorbing heat."
  },
  {
    question: "Surge tanks are suitable for H2S because they are:",
    options: ["Bigger", "Pressurized", "Made of gold", "Always offshore"],
    correctIndex: 1,
    explanation: "Pressurized containment prevents toxic gas from venting into the work area."
  },
  {
    question: "Dual compartments in surge tanks allow for:",
    options: ["Separating oil and water", "Continuous flow/measurement", "Storage of tools", "Mixing chemicals"],
    correctIndex: 1,
    explanation: "One fills while the other empties, keeping the test running."
  },
  {
    question: "What prevents static charge buildup?",
    options: ["Grounding strap", "Flame arrestor", "Vortex breaker", "PRV"],
    correctIndex: 0,
    explanation: "Grounding straps safely discharge static electricity."
  },
  {
    question: "A surge tank can act as a:",
    options: ["Primary separator", "Second-stage separator", "Flare boom", "Choke manifold"],
    correctIndex: 1,
    explanation: "By lowering pressure, more gas breaks out, acting as a second stage."
  },
  {
    question: "Before repairing a tank, you must:",
    options: ["Paint it", "Steam clean and degas it", "Fill it with oil", "Open the flare"],
    correctIndex: 1,
    explanation: "Cleaning and degassing are mandatory for safe entry."
  },
  {
    question: "Meter factor is calculated by comparing meter volume to:",
    options: ["Choke size", "Actual tank volume", "Gas flow", "Well pressure"],
    correctIndex: 1,
    explanation: "Comparing the meter to the physical tank level provides the correction factor."
  },
  {
    question: "Vertical surge tanks often have:",
    options: ["Flame arrestors", "High/Low level alarms", "Wooden lids", "Open vents"],
    correctIndex: 1,
    explanation: "Alarms help prevent overfilling or running dry."
  },

  // --- MODULE 7: TRANSFER PUMPS (12 Questions) ---
  {
    question: "What is the primary role of a transfer pump?",
    options: ["Circulate mud", "Move fluid from tanks to manifold", "Inject acid", "Lift oil from the reservoir"],
    correctIndex: 1,
    explanation: "They transfer processed oil from storage to disposal/lines."
  },
  {
    question: "How do PD pumps move liquid?",
    options: ["High-speed impellers", "Fixed volume per revolution", "Heating the fluid", "Gravity"],
    correctIndex: 1,
    explanation: "Positive Displacement pumps trap and move fixed quantities."
  },
  {
    question: "Which pump is best for high viscosity?",
    options: ["Centrifugal", "Positive Displacement", "Water pump", "Fan"],
    correctIndex: 1,
    explanation: "PD pumps (like screw or gear) handle thick fluids efficiently."
  },
  {
    question: "Centrifugal pumps use what for movement?",
    options: ["Pistons", "Spinning impeller", "Diaphragms", "Screws"],
    correctIndex: 1,
    explanation: "An impeller creates centrifugal force to move the fluid."
  },
  {
    question: "Which pump requires a PRV for safety?",
    options: ["Centrifugal", "Positive Displacement", "Hand pump", "None"],
    correctIndex: 1,
    explanation: "PD pumps can burst pipes if downstream is blocked; a PRV is essential."
  },
  {
    question: "A Mono pump is what type?",
    options: ["Centrifugal", "Screw (PD)", "Gear", "Diaphragm"],
    correctIndex: 1,
    explanation: "Mono pumps are screw-type PD pumps."
  },
  {
    question: "What is a disadvantage of Diaphragm pumps?",
    options: ["Too heavy", "High pulsations", "Cannot handle H2S", "Too fast"],
    correctIndex: 1,
    explanation: "The reciprocating motion causes flow and pressure pulsations."
  },
  {
    question: "Sundyne pumps are typically:",
    options: ["Gear pumps", "Centrifugal pumps", "Manual pumps", "Steam pumps"],
    correctIndex: 1,
    explanation: "Sundyne pumps are high-speed centrifugal pumps."
  },
  {
    question: "Which pump can easily handle oil impurities and H2S?",
    options: ["Viking", "Sundyne", "Standard water pump", "Plastic pump"],
    correctIndex: 1,
    explanation: "Sundyne pumps are often built for H2S and harsh service."
  },
  {
    question: "In a gear pump, fluid is trapped where?",
    options: ["Inside the motor", "Between the gear teeth", "In the diaphragm", "In the impeller eye"],
    correctIndex: 1,
    explanation: "Fluid travels in the cavities between the rotating teeth."
  },
  {
    question: "Why is driver sizing critical for centrifugal pumps?",
    options: ["They are very heavy", "Power increases with flow rate", "They have too many gears", "They use diesel only"],
    correctIndex: 1,
    explanation: "The motor must handle the power demand at maximum flow."
  },
  {
    question: "Which pump is known for 'low shear' action?",
    options: ["Centrifugal", "Positive Displacement", "Jet pump", "Air blower"],
    correctIndex: 1,
    explanation: "PD pumps move fluid gently, which is better for sensitive emulsions."
  }
];

console.log("Total Questions: " + questions.length);


/* ===== State ===== */
let state = {
  currentIndex: 0,
  answers: Array(questions.length).fill(null),
  timeLeft: 2400, // 30 minutes
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
  templateId: "template_miqixp9"
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
