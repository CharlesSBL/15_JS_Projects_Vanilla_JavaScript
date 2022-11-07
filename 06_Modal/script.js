// get elem
var card__btn = document.querySelector('.card__btn');
var modalCard = document.querySelector('.modal-card');
var modalCard__btn = document.querySelector('.modal-card__btn');
var overlay = document.querySelector('.overlay');
// add events
card__btn === null || card__btn === void 0 ? void 0 : card__btn.addEventListener("click", function (event) {
    modalCard === null || modalCard === void 0 ? void 0 : modalCard.classList.toggle('modal-card_active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('overlay_active');
});
modalCard__btn === null || modalCard__btn === void 0 ? void 0 : modalCard__btn.addEventListener("click", function (event) {
    modalCard === null || modalCard === void 0 ? void 0 : modalCard.classList.toggle('modal-card_active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('overlay_active');
});
