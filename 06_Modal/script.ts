// get elem
const card__btn = document.querySelector('.card__btn');
const modalCard = document.querySelector('.modal-card');
const modalCard__btn = document.querySelector('.modal-card__btn');

const overlay = document.querySelector('.overlay');

// add events
card__btn?.addEventListener("click", (event) => {
    modalCard?.classList.toggle('modal-card_active');
    overlay?.classList.toggle('overlay_active');

});

modalCard__btn?.addEventListener("click", (event) => {
    modalCard?.classList.toggle('modal-card_active');
    overlay?.classList.toggle('overlay_active');

});

