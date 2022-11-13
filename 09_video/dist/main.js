/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.mp4 */ "./src/video.mp4");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
// ============================================ Get modules ===========================================


// import '../view/index.hbs';
// ============================================ Get elem ===========================================
var body = document.body;
// ============================================ FUNCTIONS ===========================================
// ======================================== Action ======================================== 
/*
const obj: {
    name: string,
    surname: string | undefined,
    age?: number
} = {
    name: 'vasa',
    surname: undefined,
    // age: 123,
};

const matrix: (number | string)[][][] = [
    [['age-1'], [8]],
    [['age-2'], [65]],
    [['age-3'], [12]],
];

let tumple: [string, number][];

tumple = [
    ['age', 123],
];
tumple.push(
    ['qwe', 123]
);
*/
// publiczny prywatny klucz
// private password = 5
// hash func = 10
// public password = key: 50 = password * hF
// proverka public: pubPassword * hF = 500 => zly klucz
// proverka private: privPassword * hF = 50 => dobry klucz
// test projekt, zrobic login z zapisaniem dannych i logowaniem
var User = /** @class */ (function () {
    function User(props) {
        this.info = props;
        this.hashUser = this.hashKeyGenerator(props.email);
        this.publicKey = this.publicKeyGenerator(props.password, this.hashUser);
        /*  this.info.name = props.name;
            this.info.age = props.age;
            this.info.email = props.email;
            this.info.password = props.password;*/
    }
    User.prototype.hashKeyGenerator = function (email) {
        var counter = Math.floor(Math.random() * ((Math.random() * 1000) * (email.length * email.length)));
        var hash = 2;
        for (var i = 0; i < counter; i++) {
            hash += Math.random() * 100;
        }
        ;
        return hash;
    };
    ;
    User.prototype.publicKeyGenerator = function (key, hash) {
        return key * hash;
    };
    ;
    ;
    User.prototype.getUser = function (keyPassword, keyUserName) {
        var testHashedKey = this.publicKeyGenerator(keyPassword, this.hashUser);
        if (testHashedKey === this.publicKey && keyUserName === this.info.name) {
            console.log('hashUser: ', this.hashUser);
            console.log('publicKey: ', this.publicKey);
            console.log('info: ', this.info);
        }
        else {
            console.log("User keys are wrong");
        }
        ;
    };
    ;
    User.prototype.publicMethod = function (keyPassword) {
        if (keyPassword === this.publicKey) {
            return ['some data'];
        }
        ;
    };
    ;
    return User;
}());
;
function userGenerator(count) {
    var genUsers = [];
    var arrOfNames = [
        'vasa', 'ola',
        'kola', 'andrey',
        'bob', 'john'
    ];
    var arrOfAges = [
        25, 11,
        98, 47,
        23, 12
    ];
    var arrOfEmails = [
        'vasa26@email.com',
        'obikobi@email.com',
        'boy@email.com'
    ];
    var arrOfPasswords = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ];
    for (var i = 0; i < count; i++) {
        genUsers.push(new User({
            name: arrOfNames[Math.floor(Math.random() * arrOfNames.length)],
            age: arrOfAges[Math.floor(Math.random() * arrOfAges.length)],
            email: arrOfEmails[Math.floor(Math.random() * arrOfEmails.length)],
            password: arrOfPasswords[Math.floor(Math.random() * arrOfPasswords.length)],
        }));
    }
    ;
    return genUsers;
}
;
var arr = userGenerator(500);
console.log(arr);
// arr[1].getUser(100, 'vasa');
function get1(obj, publicKey, name) {
    obj.getUser(publicKey, name);
}
;
get1(arr[1], 123, 'kot');
// const newUser01 = new User({
//     name: 'vasa',
//     age: 26,
//     email: 'vasa26@email.com',
//     password: 100
// });
// console.log(  );
// newUser01.getUser(100, 'vasa')
// const word: string = 'vasa';
// word.length;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixvQkFBb0I7Ozs7Ozs7Ozs7O0FDQTFEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNxQjtBQUNDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnBhY2tfVFNfU0NTU19UdXRvcmlhbC8uL3NyYy92aWRlby5tcDQiLCJ3ZWJwYWNrOi8vV2VicGFja19UU19TQ1NTX1R1dG9yaWFsLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiIsIndlYnBhY2s6Ly9XZWJwYWNrX1RTX1NDU1NfVHV0b3JpYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VicGFja19UU19TQ1NTX1R1dG9yaWFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWJwYWNrX1RTX1NDU1NfVHV0b3JpYWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9XZWJwYWNrX1RTX1NDU1NfVHV0b3JpYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWJwYWNrX1RTX1NDU1NfVHV0b3JpYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWJwYWNrX1RTX1NDU1NfVHV0b3JpYWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vV2VicGFja19UU19TQ1NTX1R1dG9yaWFsLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInZpZGVvL3ZpZGVvLm1wNFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEdldCBtb2R1bGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi92aWRlby5tcDQnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuLy8gaW1wb3J0ICcuLi92aWV3L2luZGV4Lmhicyc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBHZXQgZWxlbSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGVU5DVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBBY3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcbi8qXG5jb25zdCBvYmo6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc3VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGFnZT86IG51bWJlclxufSA9IHtcbiAgICBuYW1lOiAndmFzYScsXG4gICAgc3VybmFtZTogdW5kZWZpbmVkLFxuICAgIC8vIGFnZTogMTIzLFxufTtcblxuY29uc3QgbWF0cml4OiAobnVtYmVyIHwgc3RyaW5nKVtdW11bXSA9IFtcbiAgICBbWydhZ2UtMSddLCBbOF1dLFxuICAgIFtbJ2FnZS0yJ10sIFs2NV1dLFxuICAgIFtbJ2FnZS0zJ10sIFsxMl1dLFxuXTtcblxubGV0IHR1bXBsZTogW3N0cmluZywgbnVtYmVyXVtdO1xuXG50dW1wbGUgPSBbXG4gICAgWydhZ2UnLCAxMjNdLFxuXTtcbnR1bXBsZS5wdXNoKFxuICAgIFsncXdlJywgMTIzXVxuKTtcbiovXG4vLyBwdWJsaWN6bnkgcHJ5d2F0bnkga2x1Y3pcbi8vIHByaXZhdGUgcGFzc3dvcmQgPSA1XG4vLyBoYXNoIGZ1bmMgPSAxMFxuLy8gcHVibGljIHBhc3N3b3JkID0ga2V5OiA1MCA9IHBhc3N3b3JkICogaEZcbi8vIHByb3ZlcmthIHB1YmxpYzogcHViUGFzc3dvcmQgKiBoRiA9IDUwMCA9PiB6bHkga2x1Y3pcbi8vIHByb3ZlcmthIHByaXZhdGU6IHByaXZQYXNzd29yZCAqIGhGID0gNTAgPT4gZG9icnkga2x1Y3pcbi8vIHRlc3QgcHJvamVrdCwgenJvYmljIGxvZ2luIHogemFwaXNhbmllbSBkYW5ueWNoIGkgbG9nb3dhbmllbVxudmFyIFVzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlcihwcm9wcykge1xuICAgICAgICB0aGlzLmluZm8gPSBwcm9wcztcbiAgICAgICAgdGhpcy5oYXNoVXNlciA9IHRoaXMuaGFzaEtleUdlbmVyYXRvcihwcm9wcy5lbWFpbCk7XG4gICAgICAgIHRoaXMucHVibGljS2V5ID0gdGhpcy5wdWJsaWNLZXlHZW5lcmF0b3IocHJvcHMucGFzc3dvcmQsIHRoaXMuaGFzaFVzZXIpO1xuICAgICAgICAvKiAgdGhpcy5pbmZvLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICAgICAgdGhpcy5pbmZvLmFnZSA9IHByb3BzLmFnZTtcbiAgICAgICAgICAgIHRoaXMuaW5mby5lbWFpbCA9IHByb3BzLmVtYWlsO1xuICAgICAgICAgICAgdGhpcy5pbmZvLnBhc3N3b3JkID0gcHJvcHMucGFzc3dvcmQ7Ki9cbiAgICB9XG4gICAgVXNlci5wcm90b3R5cGUuaGFzaEtleUdlbmVyYXRvciA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB2YXIgY291bnRlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoTWF0aC5yYW5kb20oKSAqIDEwMDApICogKGVtYWlsLmxlbmd0aCAqIGVtYWlsLmxlbmd0aCkpKTtcbiAgICAgICAgdmFyIGhhc2ggPSAyO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ZXI7IGkrKykge1xuICAgICAgICAgICAgaGFzaCArPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfTtcbiAgICA7XG4gICAgVXNlci5wcm90b3R5cGUucHVibGljS2V5R2VuZXJhdG9yID0gZnVuY3Rpb24gKGtleSwgaGFzaCkge1xuICAgICAgICByZXR1cm4ga2V5ICogaGFzaDtcbiAgICB9O1xuICAgIDtcbiAgICA7XG4gICAgVXNlci5wcm90b3R5cGUuZ2V0VXNlciA9IGZ1bmN0aW9uIChrZXlQYXNzd29yZCwga2V5VXNlck5hbWUpIHtcbiAgICAgICAgdmFyIHRlc3RIYXNoZWRLZXkgPSB0aGlzLnB1YmxpY0tleUdlbmVyYXRvcihrZXlQYXNzd29yZCwgdGhpcy5oYXNoVXNlcik7XG4gICAgICAgIGlmICh0ZXN0SGFzaGVkS2V5ID09PSB0aGlzLnB1YmxpY0tleSAmJiBrZXlVc2VyTmFtZSA9PT0gdGhpcy5pbmZvLm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXNoVXNlcjogJywgdGhpcy5oYXNoVXNlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHVibGljS2V5OiAnLCB0aGlzLnB1YmxpY0tleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5mbzogJywgdGhpcy5pbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBrZXlzIGFyZSB3cm9uZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfTtcbiAgICA7XG4gICAgVXNlci5wcm90b3R5cGUucHVibGljTWV0aG9kID0gZnVuY3Rpb24gKGtleVBhc3N3b3JkKSB7XG4gICAgICAgIGlmIChrZXlQYXNzd29yZCA9PT0gdGhpcy5wdWJsaWNLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ3NvbWUgZGF0YSddO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICB9O1xuICAgIDtcbiAgICByZXR1cm4gVXNlcjtcbn0oKSk7XG47XG5mdW5jdGlvbiB1c2VyR2VuZXJhdG9yKGNvdW50KSB7XG4gICAgdmFyIGdlblVzZXJzID0gW107XG4gICAgdmFyIGFyck9mTmFtZXMgPSBbXG4gICAgICAgICd2YXNhJywgJ29sYScsXG4gICAgICAgICdrb2xhJywgJ2FuZHJleScsXG4gICAgICAgICdib2InLCAnam9obidcbiAgICBdO1xuICAgIHZhciBhcnJPZkFnZXMgPSBbXG4gICAgICAgIDI1LCAxMSxcbiAgICAgICAgOTgsIDQ3LFxuICAgICAgICAyMywgMTJcbiAgICBdO1xuICAgIHZhciBhcnJPZkVtYWlscyA9IFtcbiAgICAgICAgJ3Zhc2EyNkBlbWFpbC5jb20nLFxuICAgICAgICAnb2Jpa29iaUBlbWFpbC5jb20nLFxuICAgICAgICAnYm95QGVtYWlsLmNvbSdcbiAgICBdO1xuICAgIHZhciBhcnJPZlBhc3N3b3JkcyA9IFtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBnZW5Vc2Vycy5wdXNoKG5ldyBVc2VyKHtcbiAgICAgICAgICAgIG5hbWU6IGFyck9mTmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyT2ZOYW1lcy5sZW5ndGgpXSxcbiAgICAgICAgICAgIGFnZTogYXJyT2ZBZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyck9mQWdlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgIGVtYWlsOiBhcnJPZkVtYWlsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJPZkVtYWlscy5sZW5ndGgpXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhcnJPZlBhc3N3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJPZlBhc3N3b3Jkcy5sZW5ndGgpXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA7XG4gICAgcmV0dXJuIGdlblVzZXJzO1xufVxuO1xudmFyIGFyciA9IHVzZXJHZW5lcmF0b3IoNTAwKTtcbmNvbnNvbGUubG9nKGFycik7XG4vLyBhcnJbMV0uZ2V0VXNlcigxMDAsICd2YXNhJyk7XG5mdW5jdGlvbiBnZXQxKG9iaiwgcHVibGljS2V5LCBuYW1lKSB7XG4gICAgb2JqLmdldFVzZXIocHVibGljS2V5LCBuYW1lKTtcbn1cbjtcbmdldDEoYXJyWzFdLCAxMjMsICdrb3QnKTtcbi8vIGNvbnN0IG5ld1VzZXIwMSA9IG5ldyBVc2VyKHtcbi8vICAgICBuYW1lOiAndmFzYScsXG4vLyAgICAgYWdlOiAyNixcbi8vICAgICBlbWFpbDogJ3Zhc2EyNkBlbWFpbC5jb20nLFxuLy8gICAgIHBhc3N3b3JkOiAxMDBcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coICApO1xuLy8gbmV3VXNlcjAxLmdldFVzZXIoMTAwLCAndmFzYScpXG4vLyBjb25zdCB3b3JkOiBzdHJpbmcgPSAndmFzYSc7XG4vLyB3b3JkLmxlbmd0aDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==