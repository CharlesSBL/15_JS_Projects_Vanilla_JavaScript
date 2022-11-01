
// Gets elem ___________________________________

const buttonsBlock = document.querySelector('.item_3');

const btnMinus = document.querySelector('.btn_1');
const btnReset = document.querySelector('.btn_2');
const btnPlus = document.querySelector('.btn_3');

const itemNumber = document.querySelector('.item__number');

const body = document.body;

// create arr
const bodyColor = [255, 255, 255];



// Gets func ___________________________________

function t1(c1, c2, c3) {
    // rgb(255, 238, 0)
    body.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
};

function change(prop) {
    switch (prop) {
        case "minus":
            console.log(document.querySelector(".container").classList);
            console.log(bodyColor);
            // Its green???
            if (document.querySelector(".container").classList.contains('green')) {
                console.log('Its green!!!');
                document.querySelector(".container").classList.toggle('green');
                // break;
            };

            // Its RED?
            if (document.querySelector(".container").classList.contains('red')) {
                bodyColor[1] = bodyColor[1] - 40;
                bodyColor[2] = bodyColor[2] - 40;
                t1(...bodyColor);
                console.log(bodyColor);
                break;
            };

            // Its White?
            if (document.querySelector(".container").classList.contains('white')) {
                document.querySelector(".container").classList.toggle('red');
                break;
                // If not white
            } else {
                bodyColor[0] = bodyColor[0] + 50;
                bodyColor[1] = bodyColor[1] + 50;
                bodyColor[2] = bodyColor[2] + 50;
                t1(...bodyColor);
                console.log(bodyColor);

                if (bodyColor[0] >= 255 && bodyColor[1] >= 255 && bodyColor[2] >= 255) {
                    bodyColor[0] = 255;
                    bodyColor[1] = 255;
                    bodyColor[2] = 255;
                    t1(...bodyColor);
                    console.log(bodyColor);
                    // document.querySelector(".container").classList.toggle('white');
                    document.querySelector(".container").classList.toggle('red');
                    break;
                };
            };
            break;
        case "plus":
            console.log(document.querySelector(".container").classList);
            console.log(bodyColor);
            // Its red???
            if (document.querySelector(".container").classList.contains('red')) {
                console.log('Its green!!!');
                document.querySelector(".container").classList.toggle('red');
                // break;
            };

            // Its green?
            if (document.querySelector(".container").classList.contains('green')) {
                bodyColor[0] = bodyColor[0] - 40;
                bodyColor[2] = bodyColor[2] - 40;
                t1(...bodyColor);
                console.log(bodyColor);
                break;
            };

            // Its White?
            if (document.querySelector(".container").classList.contains('white')) {
                document.querySelector(".container").classList.toggle('green');
                break;
                // If not white
            } else {
                bodyColor[0] = bodyColor[0] + 50;
                bodyColor[1] = bodyColor[1] + 50;
                bodyColor[2] = bodyColor[2] + 50;
                t1(...bodyColor);
                console.log(bodyColor);

                if (bodyColor[0] >= 255 && bodyColor[1] >= 255 && bodyColor[2] >= 255) {
                    bodyColor[0] = 255;
                    bodyColor[1] = 255;
                    bodyColor[2] = 255;
                    t1(...bodyColor);
                    console.log(bodyColor);
                    // document.querySelector(".container").classList.toggle('white');
                    document.querySelector(".container").classList.toggle('green');
                    break;
                };
            };
            break;
        case "reset":

            // document.querySelector(".container").classList.add('white');
            document.querySelector(".container").classList.remove('green');
            document.querySelector(".container").classList.remove('red');

            bodyColor.forEach((color, index) => {
                bodyColor[index] = 255;
            });

            t1(255, 255, 255);

            break;
    };
};


// Gets event ___________________________________

buttonsBlock.addEventListener('click', (event) => {
    switch (event.target) {
        case event.target.closest(".btn_1"):
            itemNumber.innerHTML = Number.parseInt(itemNumber.innerHTML) - 1;
            change('minus');
            break;
        case event.target.closest(".btn_2"):
            itemNumber.innerHTML = 0;
            change('reset')
            break;
        case event.target.closest(".btn_3"):
            itemNumber.innerHTML = Number.parseInt(itemNumber.innerHTML) + 1;
            change('plus');
            break;
    };
});