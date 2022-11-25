




// =================================== Getting ===================================
import './style.scss';
import { createElem, createMultElem, getElem } from './modules/createElem';
import { createStyle } from './modules/createStyle';

// Getting submit button
const submit__btn = getElem('.card__submit-btn');

/* 
createStyle({
    selectorName: 'body',
    propertyObj: {
        'display': 'flex',
        'background-color': 'red',
        'align-items': 'center',
        'justify-content': 'center'
    },
});
*/


// ************************** local storage ******************************

function getLocalStorage() {
    // return array(list) of saved items in local storage
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
};

// add to local storage array with new items in array
function addToLocalStorage(id: string, value: string) {
    // save new list item 
    const grocery = { id, value };
    // get list of items
    const items = getLocalStorage();
    // add there new list item
    items.push(grocery);
    // push new list to local storage
    localStorage.setItem("list", JSON.stringify(items));
};


// =================================== Functions ===================================
// generate new id for new elem
function idGen(elem: HTMLElement, valu: string) {
    // Creating new data ID
    const newId = new Date().getTime().toString();

    // creating new type of attribute
    const newAttr = document.createAttribute("data-id");

    // saving in new attribute new value(id) 
    newAttr.value = newId;

    // setting new attribute to new created list-item
    elem.setAttributeNode(newAttr);

    // add to array in "local storage", a "new list item"
    addToLocalStorage(newId, valu);

    return newId;
};
// gen new item with saving and return option
function genNewItem(place: HTMLElement, valu: string): HTMLElement {
    const newElem = createElem({
        type: 'article',
        className: 'card__grocery-item',
        destination: place,
        arrElem: [
            createElem({
                type: 'p',
                className: 'grocery-item__title',
                text: `${valu}`,
            }),
            createElem({
                type: 'div',
                className: 'grocery-item__btn-container',
                arrElem: [
                    createElem({
                        type: 'button',
                        className: 'grocery-item__edit-btn',
                        text: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                </svg>`,
                        arrElem: [],
                    }),
                    createElem({
                        type: 'button',
                        className: 'grocery-item__delete-btn',
                        text: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>`,
                        arrElem: [],
                    }),
                ],
            }),
        ],
    });

    return newElem;
};
// func to create list item
function listItem(val: string) {
    // getting item list container
    const card__grocery_list = getElem('.card__grocery-list');

    // saving index of item
    const allItem = document.querySelectorAll('.card__grocery-item');
    const itemIndex = allItem.length;

    // creating new elem
    const newElem = genNewItem(card__grocery_list, val);

    // generate new id for new elem
    const newId = idGen(newElem, val);

    // getting rewrite button from new elem
    const rewriteBtn = newElem.querySelector('.grocery-item__edit-btn') as HTMLButtonElement;

    // getting delete button from new elem
    const delBtn = newElem.querySelector('.grocery-item__delete-btn') as HTMLButtonElement;

    // adding event to del-btn witch delete its own elem
    delBtn.addEventListener('click', (ev) => {
        newElem.remove();

        const elemArr = document.querySelectorAll('.card__grocery-item');
        if (elemArr.length == 0) {
            getElem('.card__clear-btn').classList.remove('card__clear-btn-active');
        };

        // =================================== alert animation
        const alertElem = getElem('.card__alert');
        alertElem.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        alertElem.innerHTML = 'Item removed';

        setTimeout(() => {
            alertElem.classList.add('card__alert-active');
            setTimeout(() => {
                alertElem.classList.remove('card__alert-active');
            }, 1000);
        }, 0);

        // =========================== Getting old arr from local storage
        const list: any[] = getLocalStorage();

        // saving new arr without removed list item
        const filteredList = list.filter(function (obj, index, arr) {
            if (index != itemIndex) {
                return obj;
            };
        });

        // clear old local storage
        localStorage.clear()

        // adding to local storage new one
        localStorage.setItem("list", JSON.stringify(filteredList));
    });

    // getting title
    const title = newElem.querySelector('.grocery-item__title');

    // new event to use submit btn
    function eventRewriteItem(ev: Event) {
        // stopping refresh site 
        ev.preventDefault();

        // getting text input
        const input__grocery = document.querySelector('.card__grocery') as HTMLInputElement;

        // saving text input
        const valueNew: string = input__grocery.value;

        title.innerHTML = valueNew;

        // reset the text input field
        input__grocery.value = '';

        // removing this func from event in btn
        submit__btn.removeEventListener('click', eventRewriteItem);

        // adding old event again
        submit__btn.addEventListener('click', eventCreateItem);

        // alert animation
        const alertElem = getElem('.card__alert');
        alertElem.style.backgroundColor = 'rgba( 0, 0, 255, 0.5)';
        alertElem.innerHTML = 'Item rewrite';

        setTimeout(() => {
            alertElem.classList.add('card__alert-active');
            setTimeout(() => {
                alertElem.classList.remove('card__alert-active');
            }, 1000);
        }, 0);

        // =========================== Getting old arr from local storage
        // rewrite in "local storage" "arr obj" witch contain selected "list item"
        const list: any[] = getLocalStorage();

        // saving new arr without removed list item
        const filteredList = list.map(function (obj, index, arr) {
            if (index == itemIndex) {
                return {
                    id: newId,
                    value: valueNew,
                }
            };
            return obj;
        });

        // clear old local storage
        localStorage.clear()

        // adding to local storage new one
        localStorage.setItem("list", JSON.stringify(filteredList));
    };

    // adding event to rewrite-btn witch rewrite its own elem
    rewriteBtn.addEventListener('click', (ev) => {
        // removing old event from btn 
        submit__btn.removeEventListener('click', eventCreateItem);

        // adding new event and after changing remove him with adding old event
        submit__btn.addEventListener('click', eventRewriteItem);
    });
};
// event to create new "list item" 
function eventCreateItem(ev: Event) {
    // stopping refresh site 
    ev.preventDefault();

    // getting text input
    const input__grocery = document.querySelector('.card__grocery') as HTMLInputElement;

    // saving text input
    const value: string = input__grocery.value;

    // create list item 
    listItem(value);

    // alert animation
    const alertElem = getElem('.card__alert');

    setTimeout(() => {
        alertElem.classList.add('card__alert-active');
        alertElem.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
        alertElem.innerHTML = 'Item added';

        setTimeout(() => {
            alertElem.classList.remove('card__alert-active');
        }, 1000);
    }, 0);

    // reset the text input field
    input__grocery.value = '';

    // getting clear btn
    const card__clear_btn = getElem('.card__clear-btn');

    // adding selector to him
    card__clear_btn.classList.add('card__clear-btn-active');
};

// ==============================================
// When window will be restart, items from local storage will be recreated 
const list: any[] = getLocalStorage();
if (list.length > 0) {
    // clear local storage to add new one
    localStorage.clear();
    // add clear btn
    getElem('.card__clear-btn').classList.add('card__clear-btn-active');
    // create new items from local storage
    list.forEach((key) => {
        listItem(key.value);
    });
};



// =================================== Event Listeners ===================================

// add event listener to btn and the text input
// for adding new item list 
submit__btn.addEventListener('click', eventCreateItem);

// removing all items event
getElem('.card__clear-btn').addEventListener('click', () => {
    localStorage.clear();
    const elemArr = document.querySelectorAll('.card__grocery-item');

    elemArr.forEach(key => {
        key.remove();
    });

    getElem('.card__clear-btn').classList.remove('card__clear-btn-active');

    // =================================== alert animation
    const alertElem = getElem('.card__alert');
    alertElem.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    alertElem.innerHTML = 'Item removed';

    setTimeout(() => {
        alertElem.classList.add('card__alert-active');
        setTimeout(() => {
            alertElem.classList.remove('card__alert-active');
        }, 1000);
    }, 0);
});

