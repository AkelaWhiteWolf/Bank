export let exchangeRates = async () => {
    'use strict';

    const btnFlipLeft = document.querySelector('.btn-carousel[data-flip="left"]');
    const btnFlipRight = document.querySelector('.btn-carousel[data-flip="right"]');
    let content = document.querySelector('.carousel-content');
    let container = document.querySelector('.carousel-container');
    const reserveСurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CNY'];
    let cards = [];
    let count = 0;
    let autoRotate = true;
    let request = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');

    class Card {
        constructor(currency, rate) {
            this.currency = currency;
            this.rate = rate;
        }
        get domElement() {
            let domElement = document.querySelector('.carousel-content__elem').cloneNode(true);
            domElement.innerHTML = `${this.currency} <span class="rate">${this.rate}</span>`;
            domElement.removeAttribute('data-invisible');
            return domElement;    
        }
        pushCard() {
            content.append(this.domElement);
        }
    }
    
    try {
        request = await request.json();
    } catch (e) {
        console.error(e);
    }
    
    for (let obj of request) {
        for (let currency of reserveСurrencies) {
            if (obj.cc === currency) {
                cards.push(new Card(obj.cc, obj.rate));
            }
        }
    }
    
    cards[0].pushCard();
    content.firstElementChild.remove();

    btnFlipLeft.addEventListener('click', () => rotateCarousel('left'));
    btnFlipRight.addEventListener('click', () => rotateCarousel('right'));
    container.addEventListener('pointerover', () => autoRotate = false);
    container.addEventListener('pointerleave', () => autoRotate = true);

    function rotateCarousel(side) {
        if (side === 'left') {
            count--;
            if (count < 0) {
                count = 5;
            }
            content.style.flexDirection = 'row-reverse';
            cards[count].pushCard();
            content.firstElementChild.style.marginRight = '-100%';
        } else {
            count++;
            if (count > 5) {
                count = 0;
            }
            content.style.flexDirection = 'row';
            cards[count].pushCard();
            content.firstElementChild.style.marginLeft = '-100%';    
        }
        setTimeout(() => {
            content.firstElementChild.remove();
        }, 500);
    }

    setInterval(() => {
        if (autoRotate) {
            rotateCarousel('right');
        }
    }, 3000);


    
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