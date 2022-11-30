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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createElem */ \"./src/modules/createElem.ts\");\n// ============================================================ Imports\n\n\n// ============================================================ Variables\n// ============================================================ Functions\nfunction removeElem(element) {\n    // deleting a class to delete an element position in a slider\n    element.classList.remove('image_3');\n    // Cloning elem to new variable\n    var newClone = element.cloneNode();\n    // Removing previous old elem \n    element.remove();\n    // Adding to new cloned elem new position\n    newClone.classList.add('image_1');\n    // Add new elem to slider\n    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.slider__shell').appendChild(newClone);\n}\n;\nfunction slideElem(firstElem, secodElem) {\n    // saving an element in variable and changing position of an elem in slider\n    firstElem.classList.remove('image_2');\n    firstElem.classList.add('image_3');\n    // saving a second element in variable and changing position of a second elem in slider\n    secodElem.classList.remove('image_1');\n    secodElem.classList.add('image_2');\n}\n;\nfunction newTest() {\n    // removing and adding new position to last elem\n    var elem3 = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_3');\n    removeElem(elem3);\n    // changing position of another elements \n    var elem2 = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_2');\n    var elem1 = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_1');\n    slideElem(elem2, elem1);\n}\n;\n// =============================================================== Next\n// =============================================================== Prev\nfunction removeElem2() {\n    var image_1 = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_1');\n    // deleting a class to delete an element position in a slider\n    image_1.classList.remove('image_1');\n    // Cloning elem to new variable\n    var newClone = image_1.cloneNode();\n    // Removing previous old elem \n    image_1.remove();\n    // Adding to new cloned elem new position\n    newClone.classList.add('image_3');\n    // Add new elem to slider\n    (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.slider__shell').appendChild(newClone);\n}\n;\nfunction slideElem2() {\n    var firstElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_2');\n    var secodElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.image_3');\n    // saving an element in variable and changing position of an elem in slider\n    firstElem.classList.remove('image_2');\n    firstElem.classList.add('image_1');\n    // saving a second element in variable and changing position of a second elem in slider\n    secodElem.classList.remove('image_3');\n    secodElem.classList.add('image_2');\n}\n;\nfunction newTest2() {\n    // removing and adding new position to last elem\n    removeElem2();\n    // changing position of another elements \n    slideElem2();\n}\n;\n// ============================================================ Events\nvar nextBtn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.btn-next');\nvar prevBtn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.btn-prev');\nnextBtn.addEventListener('click', function (ev) {\n    newTest();\n});\nprevBtn.addEventListener('click', function (ev) {\n    newTest2();\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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