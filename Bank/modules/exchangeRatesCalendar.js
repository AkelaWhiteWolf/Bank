export let exchangeRatesCalendar = async () => {
    'use strict';

    const btnSwitchToCarousel = document.querySelector('#btn-switch-to-carousel');
    const btnSwitchToCalendar = document.querySelector('#btn-switch-to-calendar');

    btnSwitchToCarousel.addEventListener('click', (e) => {
        changeRatesField('to-carousel', e.target);
    });
    btnSwitchToCalendar.addEventListener('click', (e) => {
        changeRatesField('to-calendar', e.target);
    });
    
    function changeRatesField(where, thisElem) {
        if (!thisElem.hasAttribute('data-is-active')) {
            return false;
        }

        const container = document.querySelector('.carousel-container');
        const btnsSwitch = document.querySelectorAll('.btn-switch');

        for (let e of btnsSwitch) {
            e.setAttribute('data-is-active', '');
        }
        thisElem.removeAttribute('data-is-active');
        
        if (where === 'to-calendar') {
            container.style.marginLeft = '-100%';
        } else {
            container.style.marginLeft = '';
        }
    }
    
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