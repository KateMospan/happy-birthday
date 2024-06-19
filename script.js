document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.querySelector(".confetti-container");

  function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiContainer.appendChild(confetti);

      setTimeout(() => {
          confetti.remove();
      }, 5000);
  }

  setInterval(createConfetti, 100);
});
