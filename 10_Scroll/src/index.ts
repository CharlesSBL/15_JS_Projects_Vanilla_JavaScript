import './index.scss'
import { createElem, createMultElem, getElem } from './modules/createElem';


// <<<<<<<<<<<<<<<< Require Images >>>>>>>>>>>>>>>
import './assets/Background_img.jpg';
// const imageSrc = require('./assets/Background_img.jpg');

// ======================== Navbar button
const burgerBtn = getElem('.icon-burger');
burgerBtn.addEventListener('click', (ev) => {
    // console.log('clicked');
    const navBar = getElem('.nav-right');
    navBar.classList.toggle('nav-right_active')
    // .nav-right_active
});


// =========================== Date
// const date: HTMLElement = getElem('.date');
// date.innerHTML = new Date().getFullYear().toString();

// =========================== burger
// const burger = getElem('.header__burger');
// burger.addEventListener('click', () => {
//     const burger_list = getElem('.header__burger-list');
// 
//     burger_list.classList.toggle('header__burger-list_active');
// });

