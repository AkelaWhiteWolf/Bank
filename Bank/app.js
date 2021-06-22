import {createModals} from './modules/modals.js';
import {createContextMenu} from './modules/contextmenu.js';

createModals();
createContextMenu();

// document.querySelector('.main').addEventListener('click', (e) => {
//     if (e.currentTarget.matches('.bank')) {
//         console.log('Bank!');
//     }
//     console.log(e.currentTarget);
// });