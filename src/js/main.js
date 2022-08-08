const menuBar = document.getElementById('menu-bar');
const navLink = document.getElementById('nav-link');
const menuBtn = document.getElementById('menu-btn');

menuBar.addEventListener('click', ()  => {
    navLink.classList.toggle('show-menu')
    menuBtn.classList.toggle('show-menu')
});
