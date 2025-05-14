// Celebration confetti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

// Generate confetti repeatedly
setInterval(createConfetti, 200);
