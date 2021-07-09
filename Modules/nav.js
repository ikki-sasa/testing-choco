// nav sidebar
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

// open the nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});

// close the nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});

export default navBtn;
