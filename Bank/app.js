(() => {
    
    'use strict';

    const btnPutMoney = document.querySelector('#btn-plus');
    const btnTakeMoney = document.querySelector('#btn-minus');
    const btnChangeBank = document.querySelector('#btn-change-bank');
    let bankTypeOutput = document.querySelector('#out-bank');
    let moneyOutput = document.querySelector('#out-result');
    let currentBank = 'mono';
    let moneyMono = 0;
    let moneyPrivat = 0;

    btnPutMoney.addEventListener('click', () => putMoney(currentBank));
    btnTakeMoney.addEventListener('click', () => takeMoney(currentBank));
    btnChangeBank.addEventListener('click', changeBank);

    function putMoney(bank) {
        let userInput = Number(prompt('Сколько денег вы хотите положить?'));
        if (bank === 'mono') {
            moneyMono += userInput;
            moneyOutput.innerText = `Ваши средства: ${moneyMono} грн`;
        } else {
            moneyPrivat += userInput;
            moneyOutput.innerText = `Ваши средства: ${moneyPrivat} грн`;
        }
    }

    function takeMoney(bank) {
        let userInput = prompt('Сколько денег вы хотите снять?');
        if (bank === 'mono') {
            if (moneyMono - userInput < 0) return alert('Нельзя снять больше, чем есть.');
            
            moneyMono -= userInput;
            moneyOutput.innerText = `Ваши средства: ${moneyMono} грн`;
        } else {
            if (moneyPrivat - userInput < 0) return alert('Нельзя снять больше, чем есть.');
            
            moneyPrivat -= userInput;
            moneyOutput.innerText = `Ваши средства: ${moneyPrivat} грн`;
        }
    }

    function changeBank() {
        if (currentBank === 'mono') {
            currentBank = 'privat';
            bankTypeOutput.innerText = 'Ваш банк: "Приват-Банк"';
            moneyOutput.innerText = `Ваши средства: ${moneyPrivat} грн`;
        } else {
            currentBank = 'mono';
            bankTypeOutput.innerText = 'Ваш банк: "Монобанк"';
            moneyOutput.innerText = `Ваши средства: ${moneyMono} грн`;
        }
    }

})();