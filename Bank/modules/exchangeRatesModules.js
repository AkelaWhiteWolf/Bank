export let exchangeRatesModules = () => {
    'use strict';

    const btnFlipLeft = document.querySelector('.btn-carousel[data-flip="left"]');
    const btnFlipRight = document.querySelector('.btn-carousel[data-flip="right"]');
    const content = document.querySelector('.carousel-content');
    let carouselElements = document.querySelectorAll('.carousel-content__elem');

    function loopCarousel() {
        let newCarousel = [];

        for (let e of carouselElements) {
            let newElem = e.cloneNode(true);
            newCarousel.push(newElem);
        }
        console.log(newCarousel);
        
        for (let i = newCarousel.length - 1; i > 0; i--) {
            content.prepend(newCarousel[i]);
        }
        // if (side === 'left') {
        //     for (let e of newCarousel) {
        //         content.prepend(e);
        //     }
        // } else {
        //     for (let e of newCarousel) {
        //         content.append(e);
        //     }
        // }
        
    }

    loopCarousel();

    // btnFlipLeft.addEventListener('click', () => flipCarousel('left'));
    // btnFlipRight.addEventListener('click', () => flipCarousel('right'));

    function flipCarousel(route) {
        let carouselFirstElem = carouselElements[0];
        let currentMargin = carouselFirstElem.style.marginLeft;

        if (!currentMargin || currentMargin === '0%') {
            currentMargin = 0;
        } else {
            currentMargin = currentMargin.slice(0, currentMargin.length - 1);
        }
        
        if (route === 'left') {
            if (currentMargin == 0) {
                content.style.flexDirection = 'row-reverse';
                console.log(carouselFirstElem.style.marginLeft);
                carouselFirstElem.style.marginRight = `${Number(currentMargin) - 100}%`;
            } else {
                carouselFirstElem.style.marginLeft = `${Number(currentMargin) + 100}%`;
            }
        } else {
            if (currentMargin == -500) {
                carouselFirstElem.style.marginLeft = '';
                console.log(carouselFirstElem.style.marginLeft);
            }
            carouselFirstElem.style.marginLeft = `${currentMargin - 100}%`;
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