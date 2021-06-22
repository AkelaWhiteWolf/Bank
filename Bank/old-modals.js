export let modals = () => {
    'use strict';
    
    const btnModalNewBank = document.querySelector('.new-bank');
    const modalNewBank = document.querySelector('#new-bank-modal-wrapper');
    const submitNewBank = modalNewBank.querySelector('#new-bank-submit');
    const btnCancel = document.querySelectorAll('.button-bank_red');

    btnModalNewBank.addEventListener('click', () => modalNewBank.removeAttribute('data-invisible'));    
    submitNewBank.addEventListener('click', (e) => {
        e.preventDefault();
        createNewBank();
    });
    for (let e of btnCancel) {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal(event.target);
        });
    }
    setTimeout(() => {
        let modalFeedback = document.querySelector('#feedback-modal-wrapper');
        modalFeedback.removeAttribute('data-invisible');
    }, 3000);

    function createNewBank() {

        const newBankNameInput = modalNewBank.querySelector('#new-bank-name').value;
        const newBankLogoInput = modalNewBank.querySelector('#new-bank-url').value;
        const newBankMoneyInput = modalNewBank.querySelector('#new-bank-money').value;    
        const bank = document.querySelector('.bank').cloneNode(true);
        let newBankNameElem = bank.querySelector('.bank__name');
        let newBankLogoElem = bank.querySelector('.bank__logo');
        let newBankMoneyElem = bank.querySelector('.bank__money-count');

        newBankNameElem.textContent = `${newBankNameInput}`;
        newBankLogoElem.setAttribute('src', `${newBankLogoInput}`);
        newBankMoneyElem.textContent = `${newBankMoneyInput}`;

        bank.removeAttribute('data-invisible');
        btnModalNewBank.before(bank);
        modalNewBank.setAttribute('data-invisible', '');
    }

    function closeModal(elem) {
        let wrapper = elem.closest('.modal-wrapper');
        wrapper.setAttribute('data-invisible', '');
    }

    async function submitFeedback() {
        let feedback = new FormData(document.querySelector('#feedback'));
        let dataTransfer = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: feedback
        });
        
        console.log(dataTransfer.status);
    }
};