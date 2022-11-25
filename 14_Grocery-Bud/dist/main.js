/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createElem */ \"./src/modules/createElem.ts\");\n// =================================== Getting ===================================\n\n\n// Getting submit button\nvar submit__btn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__submit-btn');\n/*\ncreateStyle({\n    selectorName: 'body',\n    propertyObj: {\n        'display': 'flex',\n        'background-color': 'red',\n        'align-items': 'center',\n        'justify-content': 'center'\n    },\n});\n*/\nvar arr = ['qwe'];\nvar arr2 = [{ 'qwe': 123 }, '123'];\n// ************************** local storage ******************************\nfunction getLocalStorage() {\n    // return array(list) of saved items in local storage\n    return localStorage.getItem(\"list\")\n        ? JSON.parse(localStorage.getItem(\"list\"))\n        : [];\n}\n;\n// add to local storage array with new items in array\nfunction addToLocalStorage(id, value) {\n    // save new list item \n    var grocery = { id: id, value: value };\n    // get list of items\n    var items = getLocalStorage();\n    // add there new list item\n    items.push(grocery);\n    // push new list to local storage\n    localStorage.setItem(\"list\", JSON.stringify(items));\n}\n;\n// =================================== Functions ===================================\n// generate new id for new elem\nfunction idGen(elem, valu) {\n    // Creating new data ID\n    var newId = new Date().getTime().toString();\n    // creating new type of attribute\n    var newAttr = document.createAttribute(\"data-id\");\n    // saving in new attribute new value(id) \n    newAttr.value = newId;\n    // setting new attribute to new created list-item\n    elem.setAttributeNode(newAttr);\n    // add to array in \"local storage\", a \"new list item\"\n    addToLocalStorage(newId, valu);\n    return newId;\n}\n;\n// gen new item with saving and return option\nfunction genNewItem(place, valu) {\n    var newElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.createElem)({\n        type: 'article',\n        className: 'card__grocery-item',\n        destination: place,\n        arrElem: [\n            (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.createElem)({\n                type: 'p',\n                className: 'grocery-item__title',\n                text: \"\".concat(valu),\n            }),\n            (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.createElem)({\n                type: 'div',\n                className: 'grocery-item__btn-container',\n                arrElem: [\n                    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.createElem)({\n                        type: 'button',\n                        className: 'grocery-item__edit-btn',\n                        text: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 512 512\\\">\\n                                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\\n                                <path\\n                                d=\\\"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z\\\" />\\n                                </svg>\",\n                        arrElem: [],\n                    }),\n                    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.createElem)({\n                        type: 'button',\n                        className: 'grocery-item__delete-btn',\n                        text: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\">\\n                                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\\n                                <path\\n                                d=\\\"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z\\\" />\\n                                </svg>\",\n                        arrElem: [],\n                    }),\n                ],\n            }),\n        ],\n    });\n    return newElem;\n}\n;\n// func to create list item\nfunction listItem(val) {\n    // getting item list container\n    var card__grocery_list = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__grocery-list');\n    // saving index of item\n    var allItem = document.querySelectorAll('.card__grocery-item');\n    var itemIndex = allItem.length;\n    // creating new elem\n    var newElem = genNewItem(card__grocery_list, val);\n    // generate new id for new elem\n    var newId = idGen(newElem, val);\n    // getting rewrite button from new elem\n    var rewriteBtn = newElem.querySelector('.grocery-item__edit-btn');\n    // getting delete button from new elem\n    var delBtn = newElem.querySelector('.grocery-item__delete-btn');\n    // adding event to del-btn witch delete its own elem\n    delBtn.addEventListener('click', function (ev) {\n        newElem.remove();\n        var elemArr = document.querySelectorAll('.card__grocery-item');\n        if (elemArr.length == 0) {\n            (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__clear-btn').classList.remove('card__clear-btn-active');\n        }\n        ;\n        // =================================== alert animation\n        var alertElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__alert');\n        alertElem.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';\n        alertElem.innerHTML = 'Item removed';\n        setTimeout(function () {\n            alertElem.classList.add('card__alert-active');\n            setTimeout(function () {\n                alertElem.classList.remove('card__alert-active');\n            }, 1000);\n        }, 0);\n        // =========================== Getting old arr from local storage\n        var list = getLocalStorage();\n        // saving new arr without removed list item\n        var filteredList = list.filter(function (obj, index, arr) {\n            if (index != itemIndex) {\n                return obj;\n            }\n            ;\n        });\n        // clear old local storage\n        localStorage.clear();\n        // adding to local storage new one\n        localStorage.setItem(\"list\", JSON.stringify(filteredList));\n    });\n    // getting title\n    var title = newElem.querySelector('.grocery-item__title');\n    // new event to use submit btn\n    function eventRewriteItem(ev) {\n        // stopping refresh site \n        ev.preventDefault();\n        // getting text input\n        var input__grocery = document.querySelector('.card__grocery');\n        // saving text input\n        var valueNew = input__grocery.value;\n        title.innerHTML = valueNew;\n        // reset the text input field\n        input__grocery.value = '';\n        // removing this func from event in btn\n        submit__btn.removeEventListener('click', eventRewriteItem);\n        // adding old event again\n        submit__btn.addEventListener('click', eventCreateItem);\n        // alert animation\n        var alertElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__alert');\n        alertElem.style.backgroundColor = 'rgba( 0, 0, 255, 0.5)';\n        alertElem.innerHTML = 'Item rewrite';\n        setTimeout(function () {\n            alertElem.classList.add('card__alert-active');\n            setTimeout(function () {\n                alertElem.classList.remove('card__alert-active');\n            }, 1000);\n        }, 0);\n    }\n    ;\n    // adding event to rewrite-btn witch rewrite its own elem\n    rewriteBtn.addEventListener('click', function (ev) {\n        // removing old event from btn \n        submit__btn.removeEventListener('click', eventCreateItem);\n        // adding new event and after changing remove him with adding old event\n        submit__btn.addEventListener('click', eventRewriteItem);\n    });\n}\n;\n// event to create new \"list item\" \nfunction eventCreateItem(ev) {\n    // stopping refresh site \n    ev.preventDefault();\n    // getting text input\n    var input__grocery = document.querySelector('.card__grocery');\n    // saving text input\n    var value = input__grocery.value;\n    // create list item \n    listItem(value);\n    // alert animation\n    var alertElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__alert');\n    setTimeout(function () {\n        alertElem.classList.add('card__alert-active');\n        alertElem.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';\n        alertElem.innerHTML = 'Item added';\n        setTimeout(function () {\n            alertElem.classList.remove('card__alert-active');\n        }, 1000);\n    }, 0);\n    // reset the text input field\n    input__grocery.value = '';\n    // getting clear btn\n    var card__clear_btn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__clear-btn');\n    // adding selector to him\n    card__clear_btn.classList.add('card__clear-btn-active');\n}\n;\n// ==============================================\n// When window will be restart, items from local storage will be recreated \nvar list = getLocalStorage();\nif (list.length > 0) {\n    // clear local storage to add new one\n    localStorage.clear();\n    // add clear btn\n    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__clear-btn').classList.add('card__clear-btn-active');\n    // create new items from local storage\n    list.forEach(function (key) {\n        listItem(key.value);\n    });\n}\n;\n// =================================== Event Listeners ===================================\n// add event listener to btn and the text input\n// for adding new item list \nsubmit__btn.addEventListener('click', eventCreateItem);\n// removing all items event\n(0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__clear-btn').addEventListener('click', function () {\n    localStorage.clear();\n    var elemArr = document.querySelectorAll('.card__grocery-item');\n    elemArr.forEach(function (key) {\n        key.remove();\n    });\n    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.card__clear-btn').classList.remove('card__clear-btn-active');\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/modules/createElem.ts":
/*!***********************************!*\
  !*** ./src/modules/createElem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem),\n/* harmony export */   \"createMultElem\": () => (/* binding */ createMultElem),\n/* harmony export */   \"getElem\": () => (/* binding */ getElem)\n/* harmony export */ });\nfunction createElem(prop) {\n    var newElem = document.createElement(prop.type);\n    if (prop.text) {\n        newElem.innerHTML = prop.text;\n    }\n    ;\n    if (prop.className) {\n        newElem.classList.add(prop.className);\n    }\n    ;\n    if (prop.idName) {\n        newElem.id = prop.idName;\n    }\n    ;\n    if (prop.handler && prop.eventType) {\n        newElem.addEventListener(prop.eventType, prop.handler);\n    }\n    ;\n    if (prop.arrElem) {\n        prop.arrElem.forEach(function (elem) {\n            newElem.appendChild(elem);\n        });\n    }\n    ;\n    if (prop.destination) {\n        prop.destination.appendChild(newElem);\n    }\n    ;\n    return newElem;\n}\n;\nfunction createMultElem(count, prop) {\n    var newArrElem = [];\n    for (var i = 0; i < count; i++) {\n        var newElem = createElem(prop);\n        newElem.classList.add(\"\".concat(prop.className, \"-\").concat(i + 1));\n        newArrElem[i] = newElem;\n    }\n    ;\n    return newArrElem;\n}\n;\nfunction getElem(elem) {\n    return document.querySelector(elem);\n}\n;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/createElem.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;