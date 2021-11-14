export let goToCalendarOrBack = () => {
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
            container.style.marginLeft = 'calc(-100% - 2rem)';
        } else {
            container.style.marginLeft = '';
        }
    }
};