let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let logo = document.querySelector('.header__logo');
let nav = document.querySelector('.header__nav')
let opened = false;

menu.onclick = menuHandler;

function menuHandler() {
    if(opened) {
        header.style.backgroundColor = 'transparent';
        header.style.height = '120px'
        nav.style.display = 'none';
        logo.src = "img/logo.svg"
        menu.src = 'img/navbar.svg'
        opened = false;
    } else {
        header.style.backgroundColor = '#010000';
        header.style.height = '100vh'
        nav.style.display = 'flex';
        logo.src = "img/logo_opened.svg"
        menu.src = "img/Group 1.svg";
        opened = true;
    }
    
}

function closeMenu() {
    header.style.backgroundColor = 'transparent';
    header.style.height = '120px'
    nav.style.display = 'none';
    logo.src = "img/logo.svg"
    menu.src = 'img/navbar.svg'
    opened = false;
}