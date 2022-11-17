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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createElem */ \"./src/modules/createElem.ts\");\n/* harmony import */ var _assets_Background_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Background_img.jpg */ \"./src/assets/Background_img.jpg\");\n\n\n// <<<<<<<<<<<<<<<< Require Images >>>>>>>>>>>>>>>\n\n// const imageSrc = require('./assets/Background_img.jpg');\n// ======================== Navbar button\nvar burgerBtn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.icon-burger');\nburgerBtn.addEventListener('click', function (ev) {\n    // console.log('clicked');\n    var navBar = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_1__.getElem)('.nav-right');\n    navBar.classList.toggle('nav-right_active');\n    // .nav-right_active\n});\n// =========================== Date\n// const date: HTMLElement = getElem('.date');\n// date.innerHTML = new Date().getFullYear().toString();\n// =========================== burger\n// const burger = getElem('.header__burger');\n// burger.addEventListener('click', () => {\n//     const burger_list = getElem('.header__burger-list');\n// \n//     burger_list.classList.toggle('header__burger-list_active');\n// });\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/modules/createElem.ts":
/*!***********************************!*\
  !*** ./src/modules/createElem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem),\n/* harmony export */   \"createMultElem\": () => (/* binding */ createMultElem),\n/* harmony export */   \"getElem\": () => (/* binding */ getElem)\n/* harmony export */ });\nfunction createElem(prop) {\n    var newElem = document.createElement(prop.type);\n    if (prop.text) {\n        newElem.innerHTML = prop.text;\n    }\n    ;\n    if (prop.className) {\n        newElem.classList.add(prop.className);\n    }\n    ;\n    if (prop.idName) {\n        newElem.id = prop.idName;\n    }\n    ;\n    if (prop.handler && prop.eventType) {\n        newElem.addEventListener(prop.eventType, prop.handler);\n    }\n    ;\n    if (prop.arrElem) {\n        prop.arrElem.forEach(function (elem) {\n            newElem.appendChild(elem);\n        });\n    }\n    ;\n    if (prop.destination) {\n        prop.destination.appendChild(newElem);\n    }\n    ;\n    return newElem;\n}\n;\nfunction createMultElem(count, prop) {\n    var newArrElem = [];\n    for (var i = 0; i < count; i++) {\n        var newElem = createElem(prop);\n        newElem.classList.add(\"\".concat(prop.className, \"-\").concat(i + 1));\n        newArrElem[i] = newElem;\n    }\n    ;\n    return newArrElem;\n}\n;\nfunction getElem(elem) {\n    return document.querySelector(elem);\n}\n;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/createElem.ts?");

/***/ }),

/***/ "./src/assets/Background_img.jpg":
/*!***************************************!*\
  !*** ./src/assets/Background_img.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8bc019e794b6778f049.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/Background_img.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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