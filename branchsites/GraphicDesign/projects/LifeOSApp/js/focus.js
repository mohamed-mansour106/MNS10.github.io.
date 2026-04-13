// js/focus.js

let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startFocusSession() {
    if (isRunning) {
        clearInterval(timer);
        startBtn.textContent = "Resume";
        startBtn.style.background = "#3b82f6";
    } else {
        startBtn.textContent = "Pause";
        startBtn.style.background = "#ef4444";
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                alert("Focus Session Complete! Take a break.");
                resetTimer();
            }
        }, 1000);
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
    startBtn.textContent = "Start Session";
    isRunning = false;
}

// Attach event listener
if(startBtn) {
    startBtn.addEventListener('click', startFocusSession);
}
