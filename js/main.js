const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const hamburgerMenuCloseBtn = document.getElementById(
  'hamburger-menu-close-btn'
);
const mainContainer = document.querySelector('.main-container');

hamburgerMenuBtn.addEventListener('click', () =>
  mainContainer.classList.add('hamburger-menu-activated')
);
hamburgerMenuCloseBtn.addEventListener('click', () =>
  mainContainer.classList.remove('hamburger-menu-activated')
);

const myAudioPlayer = document.getElementById('my-audio-background');
myAudioPlayer.volume = 0.02;
