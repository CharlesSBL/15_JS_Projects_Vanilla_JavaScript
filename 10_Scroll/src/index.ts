import './index.scss';
import { createElem, createMultElem, getElem } from './modules/createElem';


// <<<<<<<<<<<<<<<< Require Images >>>>>>>>>>>>>>>
import './assets/Background_img.jpg';
// const imageSrc = require('./assets/Background_img.jpg');

// ====================================================== Navbar close links
const burgerBtn: HTMLElement = getElem('.icon-burger');

burgerBtn.addEventListener('click', (ev) => {
    const navBar: HTMLElement = getElem('.nav-right');

    navBar.classList.toggle('nav-right_active')
});

// ======================================================= nav-bar fixed position 
window.addEventListener('scroll', (ev) => {
    const scrollTop: number = window.pageYOffset;

    const navBar = getElem('.nav-bar');
    const navHeight: number = navBar.getBoundingClientRect().height;

    if (scrollTop > navHeight) {
        navBar.classList.add('nav-bar_active');
    } else {
        navBar.classList.remove('nav-bar_active');
    };
});

// =================================================== arrow hidden
// manage arrow appearing 
const arrow = getElem('.arrow');

window.addEventListener('scroll', (ev) => {
    const navBar = getElem('.nav-bar');

    if (navBar.classList.contains('nav-bar_active')) {
        arrow.classList.add('arrow_active');
    } else {
        arrow.classList.remove('arrow_active');
    };
});
// add func to button
arrow.addEventListener('click', (ev) => {
    // window.pageYOffset = 0;
    window.scrollTo(0, 0);
});


// =================================================== scroll menu to
// change position of window after click menu btn
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {

        // ================================ 
        const navBar = getElem('.nav-bar');
        // wylacza w a tag skoki
        ev.preventDefault();
        // navigate to specific spot
        const id = (ev.currentTarget as HTMLElement).getAttribute('href').slice(1);
        const element = document.getElementById(id);

        // ================================ 
        // wysokosc calego navbaru
        const navHeight: number = navBar.getBoundingClientRect().height;
        // wysokosc bloku menu list
        const containerHeight = getElem('.nav-right').getBoundingClientRect().height;
        // checking if navbar is active 
        const fixedNav = navBar.classList.contains('nav-bar_active');
        // getting section position with navbar height  
        let position = element.offsetTop - navHeight;
        console.log(position);

        // ================================ 
        // if navbar are not active then 
        if (!fixedNav) {
            position = position - navHeight;
            console.log(position);
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        // ================================ 
        window.scrollTo({
            left: 0,
            top: position,
        });
        // close nav-bar after click
        getElem('.nav-right').classList.remove('nav-right_active');
    });
});


// =========================== Date
const date: HTMLElement = getElem('.date');
date.innerHTML = new Date().getFullYear().toString();


// ========================== logo button
const logo = getElem('.icon');
logo.addEventListener('click', (ev) => {
    window.scrollTo(0, 0);
});