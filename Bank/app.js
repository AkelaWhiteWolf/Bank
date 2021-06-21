import {modals} from './modals.js';

modals();

document.querySelector('.main').addEventListener('click', (e) => {
    if (e.currentTarget.matches('.bank')) {
        console.log('Bank!');
    }
    console.log(e.currentTarget);
});