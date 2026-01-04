
const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const humburgerMenu = document.querySelector('.humburger');

humburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    xmark.classList.toggle('active');
    bars.classList.toggle('active');
});