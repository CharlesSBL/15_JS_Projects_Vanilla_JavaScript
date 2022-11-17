// get elem
var item__buttons = document.querySelectorAll('.item__buttons');
// add event
item__buttons.forEach(function (buttons) {
    buttons.addEventListener('click', function (ev) {
        // getting number of block
        var blockNumber = buttons.classList[1];
        var num = blockNumber.split('');
        // get elem
        var btnPlus = document.querySelector(".plus_".concat(num[num.length - 1]));
        var btnminus = document.querySelector(".minus_".concat(num[num.length - 1]));
        var body_text = document.querySelector(".i-body_".concat(num[num.length - 1]));
        // change
        btnPlus === null || btnPlus === void 0 ? void 0 : btnPlus.classList.toggle('item__plus_active');
        btnminus === null || btnminus === void 0 ? void 0 : btnminus.classList.toggle('item__minus_active');
        body_text === null || body_text === void 0 ? void 0 : body_text.classList.toggle('item__body_active');
    });
});
