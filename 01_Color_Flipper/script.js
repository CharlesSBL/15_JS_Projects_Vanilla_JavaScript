
// Get elem _____________________________________
const btn = document.querySelector('button');
const span__color = document.querySelector('.span__color');


// create array _____________________________________
const arrNum = '0123456789'.split('');
const arr2 = arrNum.concat('abcdef'.toUpperCase().split(''))


// func _____________________________________
function randomNum() {
    return Math.floor(Math.random() * arr2.length);
};

function randomHex() {
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += arr2[randomNum()];
    };
    return hex;
};


// event _____________________________________
btn.addEventListener('click', () => {
    const hex = randomHex()
    document.body.style.backgroundColor = hex;
    span__color.innerHTML = `${hex}`
});