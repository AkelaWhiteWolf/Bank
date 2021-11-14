import {getCurrencies} from './getCurrencies.js';
export let exchangeRatesCalendar = () => {
    'use strict';


    const input = document.querySelector('.choose-currency-container__input-currency');
    const calendar = document.querySelector('#choose-currency-calendar');

    const proposeCurrencies = {
        offers: document.querySelector('.find-currency'),
        get variant() {
            let variant = document.createElement('div');
            variant.classList.add('find-currency__elem');
            return variant;
        },

        showForm() {
            const coordsDoc = {
                box: input.getBoundingClientRect(),
                get top() {return this.box.top + scrollY},
                get left() {this.box.left + scrollX}
            };

            this.offers.removeAttribute('data-invisible');
            this.offers.style.top = `${coordsDoc.top + 40}px`;
            this.offers.style.left = `${coordsDoc.left}px`;
        },

        deleteVariants() {
            let variants = document.querySelectorAll('.find-currency__elem');
            
            if (variants.length !== 0) {
                for (let variant of variants) {
                    variant.remove();
                }
            }
        },
        
        async addVariant(search) {
            const currenciesAll = await getCurrencies();
            const regexp = new RegExp(`${search}`, 'i');

            for (let currency of currenciesAll) {
                if ((regexp.test(currency.txt) || regexp.test(currency.cc)) && input.value) {
                    let currentVariant = this.variant.cloneNode();
                    currentVariant.innerText = `${currency.txt} ${currency.cc}`;
                    this.offers.append(currentVariant);
                }
            }
        }
    };

    const currency = {
        currencyElem: document.querySelector('.currency-course'),
        
        showResult(currency, value) {
            this.currencyElem.innerText = `${currency} ${value}`;
        },

        deleteOldResult() {
            this.currencyElem.innerText = '';
        }
    };

    const state = {
        input: false,
        calendar: false,

        changeState(elem) {
            if (this[elem]) {
                this[elem] = false;
            } else {
                this[elem] = true;
            }
        },

        checkState() {
            if (this.input && this.calendar) {
                return true;
            }
            return false;
        }
    }
    
    input.addEventListener('input', () => proposeCurrencies.showForm(), {once: true});
    
    input.addEventListener('input', () => {
        proposeCurrencies.deleteVariants();
        proposeCurrencies.addVariant(input.value);
    });
    
    // function proposeCurrencies(search) {
    //     const inputCurrency = document.querySelector('.choose-currency-container__input-currency');
    //     const offers = document.querySelector('.find-currency');
        
    //     addVariant();
    //     showForm();
        
    //     function showForm() {
    //         const coordsDoc = {
    //             box: inputCurrency.getBoundingClientRect(),
    //             top: this.box.top + scrollY,
    //             left: this.box.left + scrollX
    //         };

    //         offers.removeAttribute('data-invisible');
    //         offers.style.top = `${coordsDoc.top + 40}px`;
    //         offers.style.left = `${coordsDoc.left}px`;
    //     }

    //     async function addVariant() {
    //         const currenciesAll = await getCurrencies();
    //         const regexp = new RegExp(`${search}`, 'i');
    //         for (let currency of currenciesAll) {
    //             if (regexp.test(currency.txt) || regexp.test(currency.cc)) {
    //                 let variant = document.createElement('div');
    //                 variant.classList.add('find-currency__elem');
    //                 variant.innerText = `${currency.txt} ${currency.cc}`;
    //                 offers.append(variant);
    //             }
    //         }
    //     }
    // }

    
    // async function showCurrenciesBySearch(search) {
    //     let desireCurrencies = [];
    //     let regexp = new RegExp(`${search}`, 'i');
    //     let currencies = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
    //     currencies = await currencies.json();
        
    //     // console.log(currencies);
    // }

    // showCurrenciesBySearch();
    
    // function convertDate(date = new Date()) {
    //     let year = String(date.getFullYear());
    //     let month = String(date.getMonth() + 1);
    //     let day = String(date.getDate());

    //     if (month.length < 2) {
    //         month = `0${month}`;
    //     }
    //     if (day.length < 2) {
    //         day = `0${day}`;
    //     }

    //     return `${year}${month}${day}`;
    // }

    // async function getExchange(currency, date = '') {
    //     try {
    //         let response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=${currency}&date=${date}&json`);
    //         let json = await response.json();
    //         return json;
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

    // async function createCarousel() {
    //     const currencyArr = document.querySelectorAll('.carousel-content__elem');
    //     for (let elem of currencyArr) {
    //         let rate = elem.querySelector('.rate');
    //     }
    // }
};