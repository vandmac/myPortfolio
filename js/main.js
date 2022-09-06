const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const hamburgerMenuCloseBtn = document.getElementById(
  'hamburger-menu-close-btn'
);
const mainContainer = document.querySelector('.main-container');
const mobileMenuSection = document.querySelector('.mobile-menu-section');

hamburgerMenuBtn.addEventListener('click', () => {
  mainContainer.classList.add('hamburger-menu-activated');
  hamburgerMenuBtn.style.display = 'none';
  mobileMenuSection.style.display = 'block';
});

hamburgerMenuCloseBtn.addEventListener('click', () => {
  mainContainer.classList.remove('hamburger-menu-activated');
  hamburgerMenuBtn.style.display = 'block';
  mobileMenuSection.style.display='none';
});

const myAudioPlayer = document.getElementById('my-audio-background');
myAudioPlayer.volume = 0.30;

// enable tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
