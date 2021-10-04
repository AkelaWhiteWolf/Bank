export let exchangeRatesCalendar = async () => {
    'use strict';

    const input = document.querySelector('.choose-currency-container__input-currency');
    const calendar = document.querySelector('#choose-currency-calendar');

    function proposeCurrencies(search) {
        const inputCurrency = document.querySelector('.choose-currency-container__input-currency');
        const offers = document.querySelector('.find-currency');
        
        function showForm() {
            const coordsDoc = {
                box: inputCurrency.getBoundingClientRect(),
                top: this.box.top + scrollY,
                left: this.box.left + scrollX
            };

            offers.removeAttribute('data-invisible');
            offers.style.top = `${coordsDoc.top + 40}px`;
            offers.style.left = `${coordsDoc.left}px`;
        }

        async function addVariant() {
            const variantsObj = await fetch();
        }
    }

    
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