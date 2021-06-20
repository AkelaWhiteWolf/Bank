export let modals = () => {
    'use strict';
    
    const btnCreateNewBank = document.querySelector('.new-bank');
    const modalCreateNewBank = document.querySelector('.modal-newbank-bcgd');
    const submitNewBank = modalCreateNewBank.querySelector('#new-bank-submit');

    btnCreateNewBank.addEventListener('click', showModalNewBank);
    submitNewBank.addEventListener('click', (e) => {
        e.preventDefault();
        createNewBank();
    });

    function showModalNewBank() {
        modalCreateNewBank.removeAttribute('data-invisible');
    }
    function createNewBank() {

        const newBankNameInput = modalCreateNewBank.querySelector('#new-bank-name').value;
        const newBankLogoInput = modalCreateNewBank.querySelector('#new-bank-url').value;
        const newBankMoneyInput = modalCreateNewBank.querySelector('#new-bank-money').value;    
        const bank = document.querySelector('.bank').cloneNode(true);
        let newBankNameElem = bank.querySelector('.bank__name');
        let newBankLogoElem = bank.querySelector('.bank__logo');
        let newBankMoneyElem = bank.querySelector('.bank__money-count');

        newBankNameElem.textContent = `${newBankNameInput}`;
        newBankLogoElem.setAttribute('src', `${newBankLogoInput}`);
        newBankMoneyElem.textContent = `${newBankMoneyInput}`;

        bank.removeAttribute('data-invisible');
        btnCreateNewBank.before(bank);
        modalCreateNewBank.setAttribute('data-invisible', '');
    }
};