const menuBar = document.getElementById('menu-bar');
const navLink = document.getElementById('nav-link');

menuBar.addEventListener('click', ()  => {
    navLink.classList.toggle('show-menu')
});
