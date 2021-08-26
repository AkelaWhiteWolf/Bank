import {createModals} from './modules/modals.js';
import {createContextMenu} from './modules/contextmenu.js';
import {banksControl} from './modules/banksControl.js';
import {goToCalendarOrBack} from './modules/goToCalendarOrBack.js';
import {exchangeRatesCarousel} from './modules/exchangeRatesCarousel.js';
import {exchangeRatesCalendar} from './modules/exchangeRatesCalendar.js';

createModals();
createContextMenu();
banksControl();
goToCalendarOrBack();
exchangeRatesCarousel();
exchangeRatesCalendar();