export let exchangeRatesCalendar = async () => {
    'use strict';

    async function showCurrenciesBySearch(search) {
        let desireCurrencies = [];
        let regexp = new RegExp(`${search}`, 'i');
        let currencies = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
        currencies = await currencies.json();
        // console.log(currencies);
    }

    showCurrenciesBySearch();
    
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