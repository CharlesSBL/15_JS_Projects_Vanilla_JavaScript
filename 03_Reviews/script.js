// get elem
const item__img = document.querySelector('.item__img');
const card__name = document.querySelector('.card__name');
const card__job_position = document.querySelector('.card__job-position');
const card__text = document.querySelector('.card__text');
const arrowsBlock = document.querySelector('.item_4');
const card__button = document.querySelector('.card__button');

// variables
const arr = [
    {
        img: './img/photo_1.webp',
        name: 'Ola Onix',
        job: 'Senior',
        text: `debut hospitality correction performer flawed debut hospitality correction performer transition harmony expertise director rent flawed debut hospitality correction performer transition harmony expertise director rent flawed`,
    },
    {
        img: './img/photo_2.webp',
        name: 'Bill Anderson',
        job: 'trainee',
        text: `solo lover implicit galaxy athlete cute update oven calf interface solo lover implicit galaxy athlete cute update lover implicit galaxy athlete cute update oven calf interface`,
    },
    {
        img: './img/photo_3.webp',
        name: 'Emilia Ornis',
        job: 'middle',
        text: `deprive tire tape business visible deprive tire tape business orbit vacuum apathy sticky option visible deprive tire tape business orbit vacuum apathy sticky option visible`,
    },
];

let number = 0;

// fuc
function change(x) {
    item__img.src = arr[x].img;
    card__name.innerHTML = arr[x].name;
    card__job_position.innerHTML = arr[x].job;
    card__text.innerHTML = arr[x].text;
};


// events
arrowsBlock.addEventListener('click', (event) => {
    switch (event.target) {
        case event.target.closest(".left"):
            if(number < 0 || number >= arr.length){
                number = arr.length - 1;
            };
            change(number);
            number--;
            break;
        case event.target.closest(".right"):
            if(number < 0 || number >= arr.length){
                number = 0;
            };
            change(number);
            number++;
            break;
    };
});

card__button.addEventListener('click', (event) => {
    change(Math.floor(Math.random() * arr.length));
});