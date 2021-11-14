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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ \"./src/modules/modals.js\");\n/* harmony import */ var _modules_contextmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contextmenu.js */ \"./src/modules/contextmenu.js\");\n/* harmony import */ var _modules_banksControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/banksControl.js */ \"./src/modules/banksControl.js\");\n/* harmony import */ var _modules_goToCalendarOrBack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/goToCalendarOrBack.js */ \"./src/modules/goToCalendarOrBack.js\");\n/* harmony import */ var _modules_exchangeRatesCarousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/exchangeRatesCarousel.js */ \"./src/modules/exchangeRatesCarousel.js\");\n/* harmony import */ var _modules_exchangeRatesCalendar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/exchangeRatesCalendar.js */ \"./src/modules/exchangeRatesCalendar.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__.createModals)();\r\n(0,_modules_contextmenu_js__WEBPACK_IMPORTED_MODULE_1__.createContextMenu)();\r\n(0,_modules_banksControl_js__WEBPACK_IMPORTED_MODULE_2__.banksControl)();\r\n(0,_modules_goToCalendarOrBack_js__WEBPACK_IMPORTED_MODULE_3__.goToCalendarOrBack)();\r\n(0,_modules_exchangeRatesCarousel_js__WEBPACK_IMPORTED_MODULE_4__.exchangeRatesCarousel)();\r\n(0,_modules_exchangeRatesCalendar_js__WEBPACK_IMPORTED_MODULE_5__.exchangeRatesCalendar)();\n\n//# sourceURL=webpack://bank/./src/index.js?");

/***/ }),

/***/ "./src/modules/banksControl.js":
/*!*************************************!*\
  !*** ./src/modules/banksControl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"banksControl\": () => (/* binding */ banksControl)\n/* harmony export */ });\nlet banksControl = () => {\r\n    'use strict';\r\n\r\n    class Bank {\r\n        constructor(bank) {\r\n            this.bank = bank;\r\n            this.moneyCount = bank.querySelector('.bank__money-count');\r\n        }\r\n        putMoney(money) {\r\n            let newMoneyValue = Number(this.moneyCount.textContent);\r\n            newMoneyValue += Number(money);\r\n            this.moneyCount.textContent = `${newMoneyValue}`;\r\n        }\r\n        takeMoney(money) {\r\n            let newMoneyValue = Number(this.moneyCount.textContent);\r\n            if (newMoneyValue - money >= 0) {\r\n                newMoneyValue -= money;\r\n                this.moneyCount.textContent = `${newMoneyValue}`;\r\n            } else {\r\n                alert('Невозможно снять больше, чем есть на счету.');\r\n            }\r\n        }\r\n    }\r\n\r\n    const sectionBanks = document.querySelector('.section-banks');\r\n    sectionBanks.addEventListener('click', (event) => {\r\n        if (event.target.closest('.bank') && event.target.matches('.button-bank')) {\r\n            let btn = event.target;\r\n            let bank = event.target.closest('.bank');\r\n            let currentBank = new Bank(bank);\r\n            let money = prompt('Введите сумму.');\r\n            \r\n            if (btn.matches('.button-bank_green')) {\r\n                currentBank.putMoney(money);\r\n            } else {\r\n                currentBank.takeMoney(money);\r\n            }\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/banksControl.js?");

/***/ }),

/***/ "./src/modules/contextmenu.js":
/*!************************************!*\
  !*** ./src/modules/contextmenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContextMenu\": () => (/* binding */ createContextMenu)\n/* harmony export */ });\nlet createContextMenu = () => {\r\n    'use strict';\r\n    \r\n    const sectionBanks = document.querySelector('.section-banks');\r\n\r\n    let contextMenu = {\r\n        menu: document.querySelector('.contextmenu'),\r\n        get btnDeleteBank() {\r\n            return this.menu.querySelector('.contextmenu__delete');\r\n        },\r\n        show(left, top) {\r\n            this.menu.style.left = `${left}px`;\r\n            this.menu.style.top = `${top}px`;\r\n            this.menu.removeAttribute('data-invisible');\r\n            this.btnDeleteBank.addEventListener('click', this.deleteBank);\r\n            document.body.addEventListener('click', this.hideMenu, {once: true});\r\n        },\r\n        hideMenu() {\r\n            contextMenu.menu.setAttribute('data-invisible', '');\r\n        },\r\n        deleteBank() {\r\n            contextMenu.bank.remove();\r\n        }\r\n    };\r\n\r\n    sectionBanks.addEventListener('contextmenu', (event) => {\r\n        if (event.target.closest('.bank')) {\r\n            event.preventDefault();\r\n            contextMenu.show(event.clientX, event.clientY);\r\n            contextMenu.bank = event.target.closest('.bank');\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/contextmenu.js?");

/***/ }),

/***/ "./src/modules/exchangeRatesCalendar.js":
/*!**********************************************!*\
  !*** ./src/modules/exchangeRatesCalendar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exchangeRatesCalendar\": () => (/* binding */ exchangeRatesCalendar)\n/* harmony export */ });\n/* harmony import */ var _getCurrencies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrencies.js */ \"./src/modules/getCurrencies.js\");\n\r\nlet exchangeRatesCalendar = () => {\r\n    'use strict';\r\n\r\n\r\n    const input = document.querySelector('.choose-currency-container__input-currency');\r\n    const calendar = document.querySelector('#choose-currency-calendar');\r\n\r\n    const proposeCurrencies = {\r\n        offers: document.querySelector('.find-currency'),\r\n        get variant() {\r\n            let variant = document.createElement('div');\r\n            variant.classList.add('find-currency__elem');\r\n            return variant;\r\n        },\r\n\r\n        showForm() {\r\n            const coordsDoc = {\r\n                box: input.getBoundingClientRect(),\r\n                get top() {return this.box.top + scrollY},\r\n                get left() {this.box.left + scrollX}\r\n            };\r\n\r\n            this.offers.removeAttribute('data-invisible');\r\n            this.offers.style.top = `${coordsDoc.top + 40}px`;\r\n            this.offers.style.left = `${coordsDoc.left}px`;\r\n        },\r\n\r\n        deleteVariants() {\r\n            let variants = document.querySelectorAll('.find-currency__elem');\r\n            \r\n            if (variants.length !== 0) {\r\n                for (let variant of variants) {\r\n                    variant.remove();\r\n                }\r\n            }\r\n        },\r\n        \r\n        async addVariant(search) {\r\n            const currenciesAll = await (0,_getCurrencies_js__WEBPACK_IMPORTED_MODULE_0__.getCurrencies)();\r\n            const regexp = new RegExp(`${search}`, 'i');\r\n\r\n            for (let currency of currenciesAll) {\r\n                if ((regexp.test(currency.txt) || regexp.test(currency.cc)) && input.value) {\r\n                    let currentVariant = this.variant.cloneNode();\r\n                    currentVariant.innerText = `${currency.txt} ${currency.cc}`;\r\n                    this.offers.append(currentVariant);\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    const currency = {\r\n        currencyElem: document.querySelector('.currency-course'),\r\n        \r\n        showResult(currency, value) {\r\n            this.currencyElem.innerText = `${currency} ${value}`;\r\n        },\r\n\r\n        deleteOldResult() {\r\n            this.currencyElem.innerText = '';\r\n        }\r\n    };\r\n\r\n    const state = {\r\n        input: false,\r\n        calendar: false,\r\n\r\n        changeState(elem) {\r\n            if (this[elem]) {\r\n                this[elem] = false;\r\n            } else {\r\n                this[elem] = true;\r\n            }\r\n        },\r\n\r\n        checkState() {\r\n            if (this.input && this.calendar) {\r\n                return true;\r\n            }\r\n            return false;\r\n        }\r\n    }\r\n    \r\n    input.addEventListener('input', () => proposeCurrencies.showForm(), {once: true});\r\n    \r\n    input.addEventListener('input', () => {\r\n        proposeCurrencies.deleteVariants();\r\n        proposeCurrencies.addVariant(input.value);\r\n    });\r\n    \r\n    // function proposeCurrencies(search) {\r\n    //     const inputCurrency = document.querySelector('.choose-currency-container__input-currency');\r\n    //     const offers = document.querySelector('.find-currency');\r\n        \r\n    //     addVariant();\r\n    //     showForm();\r\n        \r\n    //     function showForm() {\r\n    //         const coordsDoc = {\r\n    //             box: inputCurrency.getBoundingClientRect(),\r\n    //             top: this.box.top + scrollY,\r\n    //             left: this.box.left + scrollX\r\n    //         };\r\n\r\n    //         offers.removeAttribute('data-invisible');\r\n    //         offers.style.top = `${coordsDoc.top + 40}px`;\r\n    //         offers.style.left = `${coordsDoc.left}px`;\r\n    //     }\r\n\r\n    //     async function addVariant() {\r\n    //         const currenciesAll = await getCurrencies();\r\n    //         const regexp = new RegExp(`${search}`, 'i');\r\n    //         for (let currency of currenciesAll) {\r\n    //             if (regexp.test(currency.txt) || regexp.test(currency.cc)) {\r\n    //                 let variant = document.createElement('div');\r\n    //                 variant.classList.add('find-currency__elem');\r\n    //                 variant.innerText = `${currency.txt} ${currency.cc}`;\r\n    //                 offers.append(variant);\r\n    //             }\r\n    //         }\r\n    //     }\r\n    // }\r\n\r\n    \r\n    // async function showCurrenciesBySearch(search) {\r\n    //     let desireCurrencies = [];\r\n    //     let regexp = new RegExp(`${search}`, 'i');\r\n    //     let currencies = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');\r\n    //     currencies = await currencies.json();\r\n        \r\n    //     // console.log(currencies);\r\n    // }\r\n\r\n    // showCurrenciesBySearch();\r\n    \r\n    // function convertDate(date = new Date()) {\r\n    //     let year = String(date.getFullYear());\r\n    //     let month = String(date.getMonth() + 1);\r\n    //     let day = String(date.getDate());\r\n\r\n    //     if (month.length < 2) {\r\n    //         month = `0${month}`;\r\n    //     }\r\n    //     if (day.length < 2) {\r\n    //         day = `0${day}`;\r\n    //     }\r\n\r\n    //     return `${year}${month}${day}`;\r\n    // }\r\n\r\n    // async function getExchange(currency, date = '') {\r\n    //     try {\r\n    //         let response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=${currency}&date=${date}&json`);\r\n    //         let json = await response.json();\r\n    //         return json;\r\n    //     } catch(error) {\r\n    //         console.error(error);\r\n    //     }\r\n    // }\r\n\r\n    // async function createCarousel() {\r\n    //     const currencyArr = document.querySelectorAll('.carousel-content__elem');\r\n    //     for (let elem of currencyArr) {\r\n    //         let rate = elem.querySelector('.rate');\r\n    //     }\r\n    // }\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/exchangeRatesCalendar.js?");

/***/ }),

/***/ "./src/modules/exchangeRatesCarousel.js":
/*!**********************************************!*\
  !*** ./src/modules/exchangeRatesCarousel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exchangeRatesCarousel\": () => (/* binding */ exchangeRatesCarousel)\n/* harmony export */ });\n/* harmony import */ var _getCurrencies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrencies.js */ \"./src/modules/getCurrencies.js\");\n\r\nlet exchangeRatesCarousel = async () => {\r\n    'use strict';\r\n\r\n\r\n    const currenciesAll = await (0,_getCurrencies_js__WEBPACK_IMPORTED_MODULE_0__.getCurrencies)();\r\n    const btnFlipLeft = document.querySelector('.btn-carousel[data-flip=\"left\"]');\r\n    const btnFlipRight = document.querySelector('.btn-carousel[data-flip=\"right\"]');\r\n    const reserveСurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CNY'];\r\n    let content = document.querySelector('.carousel-content');\r\n    let container = document.querySelector('.carousel-container');\r\n    let cards = [];\r\n    let count = 0;\r\n    let autoRotate = true;\r\n\r\n    class Card {\r\n        constructor(currency, rate) {\r\n            this.currency = currency;\r\n            this.rate = rate;\r\n        }\r\n        get domElement() {\r\n            let domElement = document.querySelector('.carousel-content__elem').cloneNode(true);\r\n            domElement.innerHTML = `${this.currency} <span class=\"rate\">${this.rate}</span>`;\r\n            domElement.removeAttribute('data-invisible');\r\n            return domElement;    \r\n        }\r\n        pushCard() {\r\n            content.append(this.domElement);\r\n        }\r\n    }\r\n    \r\n    for (let obj of currenciesAll) {\r\n        if (reserveСurrencies.includes(obj.cc)) {\r\n            cards.push(new Card(obj.cc, obj.rate));\r\n        }\r\n    }\r\n    \r\n    cards[0].pushCard();\r\n    content.firstElementChild.remove();\r\n\r\n    btnFlipLeft.addEventListener('click', () => rotateCarousel('left'));\r\n    btnFlipRight.addEventListener('click', () => rotateCarousel('right'));\r\n    container.addEventListener('pointerover', () => autoRotate = false);\r\n    container.addEventListener('pointerleave', () => autoRotate = true);\r\n\r\n    function rotateCarousel(side) {\r\n        if (side === 'left') {\r\n            count--;\r\n            if (count < 0) {\r\n                count = 5;\r\n            }\r\n            content.style.flexDirection = 'row-reverse';\r\n            cards[count].pushCard();\r\n            content.firstElementChild.style.marginRight = '-100%';\r\n        } else {\r\n            count++;\r\n            if (count > 5) {\r\n                count = 0;\r\n            }\r\n            content.style.flexDirection = 'row';\r\n            cards[count].pushCard();\r\n            content.firstElementChild.style.marginLeft = '-100%';    \r\n        }\r\n        setTimeout(() => {\r\n            content.firstElementChild.remove();\r\n        }, 500);\r\n    }\r\n\r\n    setInterval(() => {\r\n        if (autoRotate) {\r\n            rotateCarousel('right');\r\n        }\r\n    }, 3000);\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/exchangeRatesCarousel.js?");

/***/ }),

/***/ "./src/modules/getCurrencies.js":
/*!**************************************!*\
  !*** ./src/modules/getCurrencies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrencies\": () => (/* binding */ getCurrencies)\n/* harmony export */ });\nlet getCurrencies = async () => {\r\n    'use strict';\r\n\r\n    let currenciesAll = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');\r\n    currenciesAll = await currenciesAll.json();\r\n    \r\n    return currenciesAll;\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/getCurrencies.js?");

/***/ }),

/***/ "./src/modules/goToCalendarOrBack.js":
/*!*******************************************!*\
  !*** ./src/modules/goToCalendarOrBack.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goToCalendarOrBack\": () => (/* binding */ goToCalendarOrBack)\n/* harmony export */ });\nlet goToCalendarOrBack = () => {\r\n    'use strict';\r\n\r\n    const btnSwitchToCarousel = document.querySelector('#btn-switch-to-carousel');\r\n    const btnSwitchToCalendar = document.querySelector('#btn-switch-to-calendar');\r\n\r\n    btnSwitchToCarousel.addEventListener('click', (e) => {\r\n        changeRatesField('to-carousel', e.target);\r\n    });\r\n    btnSwitchToCalendar.addEventListener('click', (e) => {\r\n        changeRatesField('to-calendar', e.target);\r\n    });\r\n    \r\n    function changeRatesField(where, thisElem) {\r\n        if (!thisElem.hasAttribute('data-is-active')) {\r\n            return false;\r\n        }\r\n\r\n        const container = document.querySelector('.carousel-container');\r\n        const btnsSwitch = document.querySelectorAll('.btn-switch');\r\n\r\n        for (let e of btnsSwitch) {\r\n            e.setAttribute('data-is-active', '');\r\n        }\r\n        thisElem.removeAttribute('data-is-active');\r\n        \r\n        if (where === 'to-calendar') {\r\n            container.style.marginLeft = 'calc(-100% - 2rem)';\r\n        } else {\r\n            container.style.marginLeft = '';\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/goToCalendarOrBack.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createModals\": () => (/* binding */ createModals)\n/* harmony export */ });\nlet createModals = () => {\r\n    'use strict';\r\n    \r\n    const btnAddNewBank = document.querySelector('.new-bank');\r\n    class Modal {\r\n        constructor(modal) {\r\n            this.wrapper = modal.parentElement;\r\n            this.modal = modal;\r\n            this.btnCancel = modal.querySelector('.button-bank_red');\r\n            this.btnOk = modal.querySelector('.button-bank_green');\r\n\r\n            this.btnCancel.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                this.toggleModal();\r\n            });\r\n        }\r\n        toggleModal() {\r\n            this.wrapper.toggleAttribute('data-invisible');\r\n        }\r\n        showConsole() {\r\n            console.log(this.modal);\r\n        }\r\n    }\r\n\r\n    let modalNewBank = new Modal(document.querySelector('#modal-new-bank'));\r\n    modalNewBank.createNewBank = function() {\r\n        const newBankNameInput = this.modal.querySelector('#new-bank-name');\r\n        const newBankLogoInput = this.modal.querySelector('#new-bank-url');\r\n        const newBankMoneyInput = this.modal.querySelector('#new-bank-money');\r\n        let bank = document.querySelector('.bank').cloneNode(true);\r\n        let newBankNameElem = bank.querySelector('.bank__name');\r\n        let newBankLogoElem = bank.querySelector('.bank__logo');\r\n        let newBankMoneyElem = bank.querySelector('.bank__money-count');\r\n\r\n        newBankNameElem.textContent = `${newBankNameInput.value}`;\r\n        newBankLogoElem.setAttribute('src', `${newBankLogoInput.value}`);\r\n        newBankMoneyElem.textContent = `${newBankMoneyInput.value}`;\r\n\r\n        bank.removeAttribute('data-invisible');\r\n        btnAddNewBank.before(bank);\r\n        newBankNameInput.value = '';\r\n        newBankLogoInput.value = '';\r\n        newBankMoneyInput.value = '';\r\n        \r\n        this.toggleModal();\r\n    };\r\n    modalNewBank.btnOk.addEventListener('click', function(event) {\r\n        event.preventDefault();\r\n        modalNewBank.createNewBank();\r\n    });\r\n\r\n    btnAddNewBank.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        modalNewBank.toggleModal();\r\n    });\r\n};\n\n//# sourceURL=webpack://bank/./src/modules/modals.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;