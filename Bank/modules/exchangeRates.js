export let exchangeRates = () => {
    'use strict';

    function showDate() {
        // const formCalendar = document.querySelector('.form-calendar');
        const calendar = document.querySelector('#calendar');
        const btnCalendar = document.querySelector('#btn-calendar');

        btnCalendar.addEventListener('click', () => {
            console.log(calendar.value);
            calendar.value = '';
        });

    }
    showDate();

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

    async function getExchange(date, currency) {
        try {
            let response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=${currency}&date=${date}&json`);
            let json = await response.json();
            return json;
        } catch(error) {
            console.error(error);
        }
    }

    // getExchange(takeDate(), 'EUR');
};