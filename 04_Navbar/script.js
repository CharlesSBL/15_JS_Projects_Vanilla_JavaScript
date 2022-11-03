

// get elem
const header__burger_btn = document.querySelector('.header__burger-btn');
const burger__list = document.querySelector('.burger__list')
const header = document.querySelector('header');

// event
header__burger_btn.addEventListener('click', (event) => {
    burger__list.classList.toggle('active')
})

header.addEventListener('mouseover', (event) => {
    header.style.height = '100px';
})

header.addEventListener('mouseout', (event) => {
    header.style.height = '75px';
})
