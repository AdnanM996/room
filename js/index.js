//Navigaton
let nav = document.querySelector('.nav');
let menu = document.querySelector('.menu');
let menuLineTop = document.querySelector('.menu__line--top');
let menuLineMid = document.querySelector('.menu__line--mid');
let menuLineBottom = document.querySelector('.menu__line--bottom');

menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')) {
        document.body.style.overflowY = 'hidden';
        menuLineTop.classList.add('menu__line--top--open');
        menuLineMid.classList.add('menu__line--mid--open');
        menuLineBottom.classList.add('menu__line--bottom--open');
    } else {
        document.body.style.overflowY = 'visible';
        menuLineTop.classList.remove('menu__line--top--open');
        menuLineMid.classList.remove('menu__line--mid--open');
        menuLineBottom.classList.remove('menu__line--bottom--open');
    }
})