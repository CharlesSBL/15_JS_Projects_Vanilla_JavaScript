/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createElem.ts":
/*!***********************************!*\
  !*** ./src/modules/createElem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElem": () => (/* binding */ createElem),
/* harmony export */   "createMultElem": () => (/* binding */ createMultElem),
/* harmony export */   "getElem": () => (/* binding */ getElem)
/* harmony export */ });
function createElem(prop) {
  const newElem = document.createElement(prop.type);
  if (prop.text) {
    newElem.innerHTML = prop.text;
  }
  ;
  if (prop.className) {
    newElem.classList.add(prop.className);
  }
  ;
  if (prop.idName) {
    newElem.id = prop.idName;
  }
  ;
  if (prop.handler && prop.eventType) {
    newElem.addEventListener(prop.eventType, prop.handler);
  }
  ;
  if (prop.arrElem) {
    prop.arrElem.forEach(elem => {
      newElem.appendChild(elem);
    });
  }
  ;
  if (prop.destination) {
    prop.destination.appendChild(newElem);
  }
  ;
  return newElem;
}
;
function createMultElem(count, prop) {
  const newArrElem = [];
  for (let i = 0; i < count; i++) {
    const newElem = createElem(prop);
    newElem.classList.add(`${prop.className}-${i + 1}`);
    newArrElem[i] = newElem;
  }
  ;
  return newArrElem;
}
;
function getElem(elem) {
  return document.querySelector(elem);
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes animationUp {\n  0% {\n    opacity: 0;\n    transform: translate(0px, -100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0, 0px);\n  }\n}\n@keyframes animationUp2 {\n  0% {\n    opacity: 0;\n    transform: translate(0px, -50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0, 0px);\n  }\n}\n:root {\n  --color-1: black;\n  --color-2: white;\n  --color-3: rgb(0, 157, 255);\n  --color-4: rgb(255, 230, 0);\n  --transition-1: 0.3s ease;\n  --transition-2: 1s ease;\n  --anim-1: animationUp 1s;\n  --anim-2: animationUp2 2s;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-1);\n  color: var(--color-2);\n}\nbody header {\n  position: relative;\n  height: 100vh;\n}\nbody header .video-container {\n  position: absolute;\n  z-index: -10;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\nbody header h1 {\n  position: absolute;\n  z-index: -8;\n  top: 50%;\n  left: 50%;\n  font-size: 8rem;\n  max-height: 150px;\n  max-width: 800px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin-top: -75px;\n  margin-left: -400px;\n  animation: animationUp 1s;\n}\nbody header nav {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--color-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\nbody header nav .icon svg {\n  fill: var(--color-2);\n}\nbody header nav ul {\n  width: 100%;\n  max-width: 600px;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nbody header nav ul li {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 40px;\n  transition: var(--transition-1);\n}\nbody header nav ul li:hover {\n  background-color: var(--color-2);\n  color: var(--color-1);\n  cursor: pointer;\n}\nbody header nav ul li:active {\n  opacity: 0.8;\n}\nbody header .arrow {\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  height: 50px;\n  width: 50px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: -25px;\n  animation: var(--anim-2) infinite;\n}\nbody header .arrow svg {\n  fill: var(--color-2);\n}\nbody header .arrow:hover {\n  cursor: pointer;\n}\nbody header button {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  background-color: var(--color-1);\n  color: var(--color-2);\n  border: none;\n  width: 200px;\n  height: 50px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  align-items: center;\n  font-size: 1.5rem;\n  text-align: center;\n  justify-content: center;\n  border-radius: 15px;\n  overflow: hidden;\n  margin: 25px;\n  border: 1px solid var(--color-2);\n}\nbody header button .switch {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--color-3);\n  width: 100px;\n  height: 50px;\n  border-radius: 10px;\n  transition: 0.5s ease;\n  transform: translate(0px);\n}\nbody header button .active {\n  transform: translate(100px);\n}\nbody header button:hover {\n  cursor: pointer;\n}\nbody header:after {\n  content: \"\";\n  z-index: -9;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: var(--color-1);\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 800px) {\n  body header h1 {\n    top: 50%;\n    left: 50%;\n    font-size: 5rem;\n    width: 500px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -250px;\n  }\n  body header button {\n    top: 0;\n    left: 50%;\n    margin: 0;\n    margin-left: -100px;\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 530px) {\n  body header h1 {\n    top: 50%;\n    left: 50%;\n    font-size: 2.5rem;\n    width: 250px;\n    height: 50px;\n    margin-left: -125px;\n    margin-top: -25px;\n  }\n  body header button {\n    top: 0;\n    left: 50%;\n    margin: 0;\n    margin-left: -100px;\n    margin-top: 200px;\n  }\n  body header nav {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  body header nav ul li {\n    display: none;\n  }\n  body header nav .icon {\n    display: block;\n    display: none;\n    margin: 25px;\n    display: block;\n    height: 50px;\n    width: 50px;\n  }\n  body header nav .icon svg {\n    fill: var(--color-2);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI;IACI,UAAA;IACA,iCAAA;EACN;EAEE;IACI,UAAA;IACA,4BAAA;EAAN;AACF;AAIA;EACI;IACI,UAAA;IACA,gCAAA;EAFN;EAKE;IACI,UAAA;IACA,4BAAA;EAHN;AACF;AAOA;EACI,gBAAA;EACA,gBAAA;EACA,2BAAA;EACA,2BAAA;EAEA,yBAAA;EACA,uBAAA;EAEA,wBAAA;EACA,yBAAA;AAPJ;;AAUA;EACI,uBAAA;AAPJ;;AAUA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAPJ;;AAUA;EACI,gCAAA;EACA,qBAAA;AAPJ;AASI;EACI,kBAAA;EACA,aAAA;AAPR;AASQ;EACI,kBAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AAPZ;AAUQ;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;AARZ;AAWQ;EACI,eAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AATZ;AAmBgB;EACI,oBAAA;AAjBpB;AAqBY;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAnBhB;AAqBgB;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,+BAAA;AAnBpB;AAqBoB;EACI,gCAAA;EACA,qBAAA;EACA,eAAA;AAnBxB;AAsBoB;EACI,YAAA;AApBxB;AA0BQ;EACI,UAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iCAAA;AAxBZ;AA0BY;EACI,oBAAA;AAxBhB;AA2BY;EACI,eAAA;AAzBhB;AA6BQ;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,gCAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,qCAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,gCAAA;AA3BZ;AA+BY;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,gCAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;AA7BhB;AAgCY;EACI,2BAAA;AA9BhB;AAiCY;EACI,eAAA;AA/BhB;AAmCQ;EACI,WAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,gCAAA;EACA,YAAA;AAjCZ;;AAsCA;EAGY;IACI,QAAA;IACA,SAAA;IACA,eAAA;IACA,YAAA;IACA,aAAA;IACA,iBAAA;IACA,mBAAA;EArCd;EAwCU;IACI,MAAA;IACA,SAAA;IACA,SAAA;IACA,mBAAA;IACA,iBAAA;EAtCd;AACF;AA4CA;EAGY;IACI,QAAA;IACA,SAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;EA5Cd;EA+CU;IACI,MAAA;IACA,SAAA;IACA,SAAA;IACA,mBAAA;IACA,iBAAA;EA7Cd;EAgDU;IACI,kCAAA;EA9Cd;EAkDkB;IACI,aAAA;EAhDtB;EAoDc;IACI,cAAA;IACA,aAAA;IACA,YAAA;IACA,cAAA;IACA,YAAA;IACA,WAAA;EAlDlB;EAoDkB;IACI,oBAAA;EAlDtB;AACF","sourcesContent":["@keyframes animationUp {\n    0% {\n        opacity: 0;\n        transform: translate(0px, -100px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0px);\n\n    }\n}\n\n@keyframes animationUp2 {\n    0% {\n        opacity: 0;\n        transform: translate(0px, -50px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0, 0px);\n\n    }\n}\n\n:root {\n    --color-1: black;\n    --color-2: white;\n    --color-3: rgb(0, 157, 255);\n    --color-4: rgb(255, 230, 0);\n\n    --transition-1: 0.3s ease;\n    --transition-2: 1s ease;\n\n    --anim-1: animationUp 1s;\n    --anim-2: animationUp2 2s;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: var(--color-1);\n    color: var(--color-2);\n\n    header {\n        position: relative;\n        height: 100vh;\n\n        .video-container {\n            position: absolute;\n            z-index: -10;\n            top: 0;\n            left: 0;\n            object-fit: cover;\n            height: 100%;\n            width: 100%;\n        }\n\n        h1 {\n            position: absolute;\n            z-index: -8;\n            top: 50%;\n            left: 50%;\n            font-size: 8rem;\n            max-height: 150px;\n            max-width: 800px;\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            margin-top: -75px;\n            margin-left: -400px;\n            animation: animationUp 1s;\n        }\n\n        nav {\n            position: fixed;\n            z-index: 1;\n            top: 0;\n            left: 0;\n            width: 100%;\n            background-color: var(--color-1);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 1.5rem;\n\n\n            .icon {\n                // display: none;\n                // margin: 25px;\n                // display: block;\n                // height: 50px;\n                // width: 50px;\n\n                svg {\n                    fill: var(--color-2);\n                }\n            }\n\n            ul {\n                width: 100%;\n                max-width: 600px;\n                list-style: none;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n\n                li {\n                    width: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    text-align: center;\n                    height: 40px;\n                    transition: var(--transition-1);\n\n                    &:hover {\n                        background-color: var(--color-2);\n                        color: var(--color-1);\n                        cursor: pointer;\n                    }\n\n                    &:active {\n                        opacity: 0.8;\n                    }\n                }\n            }\n        }\n\n        .arrow {\n            z-index: 2;\n            position: absolute;\n            bottom: 0;\n            left: 50%;\n            height: 50px;\n            width: 50px;\n            padding: 10px;\n            text-align: center;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-left: -25px;\n            animation: var(--anim-2) infinite;\n\n            svg {\n                fill: var(--color-2);\n            }\n\n            &:hover {\n                cursor: pointer;\n            }\n        }\n\n        button {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            z-index: 2;\n            background-color: var(--color-1);\n            color: var(--color-2);\n            border: none;\n            width: 200px;\n            height: 50px;\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            grid-template-rows: 1fr;\n            align-items: center;\n            font-size: 1.5rem;\n            text-align: center;\n            justify-content: center;\n            border-radius: 15px;\n            overflow: hidden;\n            margin: 25px;\n            border: 1px solid var(--color-2);\n\n            span {}\n\n            .switch {\n                position: absolute;\n                top: 0;\n                left: 0;\n                background-color: var(--color-3);\n                width: 100px;\n                height: 50px;\n                border-radius: 10px;\n                transition: 0.5s ease;\n                transform: translate(0px);\n            }\n\n            .active {\n                transform: translate(100px);\n            }\n\n            &:hover {\n                cursor: pointer;\n            }\n        }\n\n        &:after {\n            content: '';\n            z-index: -9;\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            background-color: var(--color-1);\n            opacity: 0.5;\n        }\n    }\n}\n\n@media screen and (max-width: 800px) {\n    body {\n        header {\n            h1 {\n                top: 50%;\n                left: 50%;\n                font-size: 5rem;\n                width: 500px;\n                height: 100px;\n                margin-top: -50px;\n                margin-left: -250px;\n            }\n\n            button {\n                top: 0;\n                left: 50%;\n                margin: 0;\n                margin-left: -100px;\n                margin-top: 100px;\n            }\n        }\n\n    }\n}\n\n@media screen and (max-width: 530px) {\n    body {\n        header {\n            h1 {\n                top: 50%;\n                left: 50%;\n                font-size: 2.5rem;\n                width: 250px;\n                height: 50px;\n                margin-left: -125px;\n                margin-top: -25px;\n            }\n\n            button {\n                top: 0;\n                left: 50%;\n                margin: 0;\n                margin-left: -100px;\n                margin-top: 200px;\n            }\n\n            nav {\n                background-color: rgba(0, 0, 0, 0);\n\n                ul {\n\n                    li {\n                        display: none;\n                    }\n                }\n\n                .icon {\n                    display: block;\n                    display: none;\n                    margin: 25px;\n                    display: block;\n                    height: 50px;\n                    width: 50px;\n\n                    svg {\n                        fill: var(--color-2);\n                    }\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/video.mp4":
/*!***********************!*\
  !*** ./src/video.mp4 ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "video/video.mp4");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _video_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.mp4 */ "./src/video.mp4");
/* harmony import */ var _modules_createElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createElem */ "./src/modules/createElem.ts");




// createElem()
// createMultElem()
// getElem()

const btn = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_2__.getElem)('button');
btn.addEventListener('click', ev => {
  const switchElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_2__.getElem)('.switch');
  const videElem = (0,_modules_createElem__WEBPACK_IMPORTED_MODULE_2__.getElem)('.video-container');
  switchElem.classList.toggle('active');
  if (switchElem.classList.contains('active')) {
    videElem.pause();
  } else {
    videElem.play();
  }
  ;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8wOV92aWRlby8uL3NyYy9tb2R1bGVzL2NyZWF0ZUVsZW0udHMiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8wOV92aWRlby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8wOV92aWRlby8uL3NyYy92aWRlby5tcDQiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovLzA5X3ZpZGVvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzA5X3ZpZGVvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8wOV92aWRlby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8wOV92aWRlby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8wOV92aWRlby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzA5X3ZpZGVvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzA5X3ZpZGVvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMDlfdmlkZW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wOV92aWRlby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzA5X3ZpZGVvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzA5X3ZpZGVvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8wOV92aWRlby8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtKFxuICAgIHByb3A6IHtcbiAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICAgICAgICBpZE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICAgICAgZXZlbnRUeXBlPzogc3RyaW5nLFxuICAgICAgICBoYW5kbGVyPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcbiAgICAgICAgZGVzdGluYXRpb24/OiBIVE1MRWxlbWVudCxcbiAgICAgICAgYXJyRWxlbT86IEhUTUxFbGVtZW50W10sXG4gICAgfVxuKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHByb3AudHlwZSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAocHJvcC50ZXh0KSB7XG4gICAgICAgIG5ld0VsZW0uaW5uZXJIVE1MID0gcHJvcC50ZXh0O1xuICAgIH07XG5cbiAgICBpZiAocHJvcC5jbGFzc05hbWUpIHtcbiAgICAgICAgbmV3RWxlbS5jbGFzc0xpc3QuYWRkKHByb3AuY2xhc3NOYW1lKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3AuaWROYW1lKSB7XG4gICAgICAgIG5ld0VsZW0uaWQgPSBwcm9wLmlkTmFtZTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3AuaGFuZGxlciAmJiBwcm9wLmV2ZW50VHlwZSkge1xuICAgICAgICBuZXdFbGVtLmFkZEV2ZW50TGlzdGVuZXIocHJvcC5ldmVudFR5cGUsIHByb3AuaGFuZGxlcik7XG4gICAgfTtcblxuICAgIGlmIChwcm9wLmFyckVsZW0pIHtcbiAgICAgICAgcHJvcC5hcnJFbGVtLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBuZXdFbGVtLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3AuZGVzdGluYXRpb24pIHtcbiAgICAgICAgcHJvcC5kZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChuZXdFbGVtKVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3RWxlbTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0RWxlbShcbiAgICBjb3VudDogbnVtYmVyLFxuICAgIHByb3A6IHtcbiAgICAgICAgdHlwZTogc3RyaW5nLFxuICAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICAgICAgICBpZE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICAgICAgZXZlbnRUeXBlPzogc3RyaW5nLFxuICAgICAgICBoYW5kbGVyPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcbiAgICAgICAgZGVzdGluYXRpb24/OiBIVE1MRWxlbWVudCxcbiAgICAgICAgYXJyRWxlbT86IEhUTUxFbGVtZW50W10sXG4gICAgfSxcbik6IEhUTUxFbGVtZW50W10ge1xuICAgIGNvbnN0IG5ld0FyckVsZW06IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBjcmVhdGVFbGVtKHByb3ApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIG5ld0VsZW0uY2xhc3NMaXN0LmFkZChgJHtwcm9wLmNsYXNzTmFtZX0tJHtpICsgMX1gKTtcblxuICAgICAgICBuZXdBcnJFbGVtW2ldID0gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ld0FyckVsZW07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbShlbGVtOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkhO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgYW5pbWF0aW9uVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRpb25VcDIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xcbiAgfVxcbn1cXG46cm9vdCB7XFxuICAtLWNvbG9yLTE6IGJsYWNrO1xcbiAgLS1jb2xvci0yOiB3aGl0ZTtcXG4gIC0tY29sb3ItMzogcmdiKDAsIDE1NywgMjU1KTtcXG4gIC0tY29sb3ItNDogcmdiKDI1NSwgMjMwLCAwKTtcXG4gIC0tdHJhbnNpdGlvbi0xOiAwLjNzIGVhc2U7XFxuICAtLXRyYW5zaXRpb24tMjogMXMgZWFzZTtcXG4gIC0tYW5pbS0xOiBhbmltYXRpb25VcCAxcztcXG4gIC0tYW5pbS0yOiBhbmltYXRpb25VcDIgMnM7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcbmJvZHkgaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbmJvZHkgaGVhZGVyIC52aWRlby1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTEwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmJvZHkgaGVhZGVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC04O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC03NXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcXG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uVXAgMXM7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmJvZHkgaGVhZGVyIG5hdiAuaWNvbiBzdmcge1xcbiAgZmlsbDogdmFyKC0tY29sb3ItMik7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiB1bCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmJvZHkgaGVhZGVyIG5hdiB1bCBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5ib2R5IGhlYWRlciBuYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgaGVhZGVyIG5hdiB1bCBsaTphY3RpdmUge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5ib2R5IGhlYWRlciAuYXJyb3cge1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogLTI1cHg7XFxuICBhbmltYXRpb246IHZhcigtLWFuaW0tMikgaW5maW5pdGU7XFxufVxcbmJvZHkgaGVhZGVyIC5hcnJvdyBzdmcge1xcbiAgZmlsbDogdmFyKC0tY29sb3ItMik7XFxufVxcbmJvZHkgaGVhZGVyIC5hcnJvdzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgaGVhZGVyIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG59XFxuYm9keSBoZWFkZXIgYnV0dG9uIC5zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XFxufVxcbmJvZHkgaGVhZGVyIGJ1dHRvbiAuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4KTtcXG59XFxuYm9keSBoZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSBoZWFkZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB6LWluZGV4OiAtOTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSBoZWFkZXIgaDEge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICB9XFxuICBib2R5IGhlYWRlciBidXR0b24ge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcXG4gIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcXG4gIH1cXG4gIGJvZHkgaGVhZGVyIGJ1dHRvbiB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgfVxcbiAgYm9keSBoZWFkZXIgbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIH1cXG4gIGJvZHkgaGVhZGVyIG5hdiB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBib2R5IGhlYWRlciBuYXYgLmljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG4gIGJvZHkgaGVhZGVyIG5hdiAuaWNvbiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1jb2xvci0yKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6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ZDtFQXdDVTtJQUNJLE1BQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUF0Q2Q7QUFDRjtBQTRDQTtFQUdZO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQTVDZDtFQStDVTtJQUNJLE1BQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUE3Q2Q7RUFnRFU7SUFDSSxrQ0FBQTtFQTlDZDtFQWtEa0I7SUFDSSxhQUFBO0VBaER0QjtFQW9EYztJQUNJLGNBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQWxEbEI7RUFvRGtCO0lBQ0ksb0JBQUE7RUFsRHRCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBhbmltYXRpb25VcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcXG5cXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvblVwMiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MHB4KTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xcblxcbiAgICB9XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci0xOiBibGFjaztcXG4gICAgLS1jb2xvci0yOiB3aGl0ZTtcXG4gICAgLS1jb2xvci0zOiByZ2IoMCwgMTU3LCAyNTUpO1xcbiAgICAtLWNvbG9yLTQ6IHJnYigyNTUsIDIzMCwgMCk7XFxuXFxuICAgIC0tdHJhbnNpdGlvbi0xOiAwLjNzIGVhc2U7XFxuICAgIC0tdHJhbnNpdGlvbi0yOiAxcyBlYXNlO1xcblxcbiAgICAtLWFuaW0tMTogYW5pbWF0aW9uVXAgMXM7XFxuICAgIC0tYW5pbS0yOiBhbmltYXRpb25VcDIgMnM7XFxufVxcblxcbmh0bWwge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICAgICAgLnZpZGVvLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IC0xMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IC04O1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03NXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb25VcCAxcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIG5hdiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcblxcbiAgICAgICAgICAgIC5pY29uIHtcXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAyNXB4O1xcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWNvbG9yLTIpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFycm93IHtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdmFyKC0tYW5pbS0yKSBpbmZpbml0ZTtcXG5cXG4gICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci0yKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIG1hcmdpbjogMjVweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG5cXG4gICAgICAgICAgICBzcGFuIHt9XFxuXFxuICAgICAgICAgICAgLnN3aXRjaCB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICB6LWluZGV4OiAtOTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgaDEge1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgaDEge1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbmF2IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG5cXG4gICAgICAgICAgICAgICAgdWwge1xcblxcbiAgICAgICAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmljb24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItMik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW8vdmlkZW8ubXA0XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL3ZpZGVvLm1wNCc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsZW0sIGNyZWF0ZU11bHRFbGVtLCBnZXRFbGVtIH0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZUVsZW0nO1xuXG4vLyBjcmVhdGVFbGVtKClcbi8vIGNyZWF0ZU11bHRFbGVtKClcbi8vIGdldEVsZW0oKVxuXG5jb25zdCBidG46IEhUTUxFbGVtZW50ID0gZ2V0RWxlbSgnYnV0dG9uJyk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIGNvbnN0IHN3aXRjaEVsZW06IEhUTUxFbGVtZW50ID0gZ2V0RWxlbSgnLnN3aXRjaCcpO1xuICAgIGNvbnN0IHZpZGVFbGVtID0gZ2V0RWxlbSgnLnZpZGVvLWNvbnRhaW5lcicpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBzd2l0Y2hFbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGlmIChzd2l0Y2hFbGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgdmlkZUVsZW0ucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlRWxlbS5wbGF5KClcbiAgICB9O1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbSIsInByb3AiLCJuZXdFbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInRleHQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZE5hbWUiLCJpZCIsImhhbmRsZXIiLCJldmVudFR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYXJyRWxlbSIsImZvckVhY2giLCJlbGVtIiwiYXBwZW5kQ2hpbGQiLCJkZXN0aW5hdGlvbiIsImNyZWF0ZU11bHRFbGVtIiwiY291bnQiLCJuZXdBcnJFbGVtIiwiaSIsImdldEVsZW0iLCJxdWVyeVNlbGVjdG9yIiwiYnRuIiwiZXYiLCJzd2l0Y2hFbGVtIiwidmlkZUVsZW0iLCJ0b2dnbGUiLCJjb250YWlucyIsInBhdXNlIiwicGxheSJdLCJzb3VyY2VSb290IjoiIn0=