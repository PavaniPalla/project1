// Get the noodles element
const noodles = document.querySelector('.noodles');

// Function to toggle animation
let animationRunning = true; // Initial state

function toggleAnimation() {
  if (animationRunning) {
    noodles.style.animationPlayState = 'paused';
    animationRunning = false;
  } else {
    noodles.style.animationPlayState = 'running';
    animationRunning = true;
  }
}

// Event listener for the button
const toggleButton = document.getElementById('toggleAnimation');
toggleButton.addEventListener('click', toggleAnimation);