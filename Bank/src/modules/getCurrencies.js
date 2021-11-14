export let getCurrencies = async () => {
    'use strict';

    let currenciesAll = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
    currenciesAll = await currenciesAll.json();
    
    return currenciesAll;
};