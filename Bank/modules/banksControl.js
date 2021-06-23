export let banksControl = () => {
    'use strict';

    class Bank {
        constructor(bank) {
            this.bank = bank;
            this.moneyCount = bank.querySelector('.bank__money-count');
        }
        putMoney(money) {
            let newMoneyValue = Number(this.moneyCount.textContent);
            newMoneyValue += Number(money);
            this.moneyCount.textContent = `${newMoneyValue}`;
        }
        takeMoney(money) {
            let newMoneyValue = Number(this.moneyCount.textContent);
            if (newMoneyValue - money >= 0) {
                newMoneyValue -= money;
                this.moneyCount.textContent = `${newMoneyValue}`;
            } else {
                alert('Невозможно снять больше, чем есть на счету.');
            }
        }
    }

    const sectionBanks = document.querySelector('.section-banks');
    sectionBanks.addEventListener('click', (event) => {
        if (event.target.closest('.bank') && event.target.matches('.button-bank')) {
            let btn = event.target;
            let bank = event.target.closest('.bank');
            let currentBank = new Bank(bank);
            let money = prompt('Введите сумму.');
            
            if (btn.matches('.button-bank_green')) {
                currentBank.putMoney(money);
            } else {
                currentBank.takeMoney(money);
            }
        }
    });
};