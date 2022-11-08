// get elem
const item__buttons = document.querySelectorAll('.item__buttons');

// add event
item__buttons.forEach(buttons => {
    buttons.addEventListener('click', (ev) => {
        // getting number of block
        const blockNumber = buttons.classList[1];
        const num = blockNumber.split('')

        // get elem
        const btnPlus = document.querySelector(`.plus_${num[num.length - 1]}`)
        const btnminus = document.querySelector(`.minus_${num[num.length - 1]}`)
        const body_text = document.querySelector(`.i-body_${num[num.length - 1]}`)

        // change
        btnPlus?.classList.toggle('item__plus_active');
        btnminus?.classList.toggle('item__minus_active');
        body_text?.classList.toggle('item__body_active');
    })
})