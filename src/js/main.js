const navToggle = document.getElementById('nav-toggle'),
navMenu = document.getElementById('nav-menu'),
navClose = document.getElementById('nav-close');

// menuBar.addEventListener('click', ()  => {
//     navLink.classList.add('show-menu')
//     menuBtn.classList.add('show-menu')
//     closeBar.classList.remove('show-menu')
// });

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
