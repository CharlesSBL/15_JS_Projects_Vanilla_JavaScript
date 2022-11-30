
// ============================================================ Imports

import './style.scss';
import { createElem, createMultElem, getElem } from './modules/createElem';
import { createStyle } from './modules/createStyle';

// ============================================================ Variables

// ============================================================ Functions

function removeElem(element: HTMLElement) {
    // deleting a class to delete an element position in a slider
    element.classList.remove('image_3');
    // Cloning elem to new variable
    const newClone = element.cloneNode() as HTMLElement;
    // Removing previous old elem 
    element.remove();
    // Adding to new cloned elem new position
    newClone.classList.add('image_1')
    // Add new elem to slider
    getElem('.slider__shell').appendChild(newClone);
};

function slideElem(firstElem: HTMLElement, secodElem: HTMLElement) {
    // saving an element in variable and changing position of an elem in slider
    firstElem.classList.remove('image_2');
    firstElem.classList.add('image_3');
    // saving a second element in variable and changing position of a second elem in slider
    secodElem.classList.remove('image_1');
    secodElem.classList.add('image_2');
};

function newTest() {
    // removing and adding new position to last elem
    const elem3 = getElem('.image_3');
    removeElem(elem3);
    // changing position of another elements 
    const elem2 = getElem('.image_2');
    const elem1 = getElem('.image_1');
    slideElem(elem2, elem1);
};

// =============================================================== Next
// =============================================================== Prev
function removeElem2() {
    const image_1 = getElem('.image_1');
    // deleting a class to delete an element position in a slider
    image_1.classList.remove('image_1');
    // Cloning elem to new variable
    const newClone = image_1.cloneNode() as HTMLElement;
    // Removing previous old elem 
    image_1.remove();
    // Adding to new cloned elem new position
    newClone.classList.add('image_3')
    // Add new elem to slider
    getElem('.slider__shell').appendChild(newClone);
};

function slideElem2() {
    const firstElem = getElem('.image_2');
    const secodElem = getElem('.image_3');

    // saving an element in variable and changing position of an elem in slider
    firstElem.classList.remove('image_2');
    firstElem.classList.add('image_1');
    // saving a second element in variable and changing position of a second elem in slider
    secodElem.classList.remove('image_3');
    secodElem.classList.add('image_2');
};

function newTest2() {
    // removing and adding new position to last elem
    removeElem2();
    // changing position of another elements 
    slideElem2();
};

// ============================================================ Events

const nextBtn = getElem('.btn-next');
const prevBtn = getElem('.btn-prev');

nextBtn.addEventListener('click', (ev) => {
    newTest();
});

prevBtn.addEventListener('click', (ev) => {
    newTest2();
});
