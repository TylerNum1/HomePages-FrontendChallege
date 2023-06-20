const nav = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navbar li');
const navIcon = document.querySelector('.icon-menu');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');

navIcon.addEventListener('click', () => {
  overlay.classList.add('active');
  nav.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});