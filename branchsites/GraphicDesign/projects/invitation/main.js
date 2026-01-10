// Minimal, clear DOM flow for a static site
const envelopeWrapper = document.getElementById('envelope');
const envelope = envelopeWrapper && envelopeWrapper.querySelector('.envelope');
const countdown = document.getElementById('countdown');
const countdownNumber = countdown && countdown.querySelector('.countdown-number');
const envelopeScreen = document.getElementById('envelope-screen');
const invitationScreen = document.getElementById('invitation-screen');

function startCountdownAndOpen() {
  if (envelopeWrapper) envelopeWrapper.style.pointerEvents = 'none';
  const container = document.querySelector('.envelope-container');
  if (container) container.style.opacity = '0';

  setTimeout(() => {
    if (countdown) countdown.classList.remove('hidden');
    let count = 3;
    const timer = setInterval(() => {
      if (countdownNumber) countdownNumber.textContent = count;
      count--;
      if (count < 0) {
        clearInterval(timer);
        if (countdown) countdown.classList.add('hidden');
        if (envelope) envelope.classList.add('opening');
        setTimeout(() => {
          if (envelopeScreen) envelopeScreen.classList.remove('active');
          if (invitationScreen) invitationScreen.classList.add('active');
        }, 1000);
      }
    }, 1000);
  }, 400);
}

if (envelopeWrapper) {
  envelopeWrapper.addEventListener('click', startCountdownAndOpen);
}

// Simple RSVP handlers (if buttons present)
const confirmBtn = document.getElementById('confirmBtn');
const declineBtn = document.getElementById('declineBtn');
if (confirmBtn) confirmBtn.addEventListener('click', () => { confirmBtn.textContent = '¡Confirmado!'; });
if (declineBtn) declineBtn.addEventListener('click', () => { declineBtn.textContent = 'Registrado'; });
