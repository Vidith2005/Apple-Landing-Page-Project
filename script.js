// JavaScript to handle the photo changes and bullet points
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

// Function to change the slide
function changeSlide() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    indicators[i].classList.remove('active');
  }

  // Show the current slide and update the active indicator
  slides[currentIndex].style.display = 'block';
  indicators[currentIndex].classList.add('active');

  // Move to the next slide, loop back to the first if needed
  currentIndex = (currentIndex + 1) % slides.length;
}

// Start the slideshow and change every 5 seconds
setInterval(changeSlide, 5000);

// Set the initial slide and start the loop
changeSlide();
