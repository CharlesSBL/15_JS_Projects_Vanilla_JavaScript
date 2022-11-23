import './style.scss';

// ================================ Date
const date_1_days = document.querySelector('.date_1 .item__count');
const date_2_hours = document.querySelector('.date_2 .item__count');
const date_3_mins = document.querySelector('.date_3 .item__count');
const date_4_secs = document.querySelector('.date_4 .item__count');

function addZero(number: string) {
    if (number.length == 1) {
        return `0${number}`;
    } else {
        return number;
    };
};

function changeTime() {
    // adding original date
    const deadLine = new Date();
    console.log(deadLine.getTime());

    // add deadline date
    const deadLine2 = new Date(2023, 9);
    console.log(deadLine2.getTime());

    // getting time of end
    const deadLineFinall = deadLine2.getTime() - deadLine.getTime();
    const final = new Date(deadLineFinall);

    // assign date to elem
    date_1_days.innerHTML = addZero(final.getDate().toString());
    date_2_hours.innerHTML = addZero(final.getHours().toString());
    date_3_mins.innerHTML = addZero(final.getMinutes().toString());
    date_4_secs.innerHTML = addZero(final.getSeconds().toString());

    // rewrite wanted time
    const info__text = document.querySelector('.title__body-date');
    info__text.innerHTML = deadLine2.toString();
};

setInterval(() => {
    changeTime();
}, 1000);