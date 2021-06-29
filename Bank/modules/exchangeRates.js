export let exchangeRates = () => {
    'use strict';

    function takeDate(date = new Date()) {
        let year = String(date.getFullYear());
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());

        if (month.length < 2) {
            month = `0${month}`;
        }
        if (day.length < 2) {
            day = `0${day}`;
        }

        return `${year}${month}${day}`;
    }

    async function getExchange(date, currency = '') {
        let response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=${currency}&date=${date}&json`);
        console.log(response.status);
        let json = await response.json();
        console.log(json);

        // try {
        // } catch(error) {
        //     console.error(error);
        // }
    }

    getExchange(takeDate(), 'EUR');
};