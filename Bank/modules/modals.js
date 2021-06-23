export let createModals = () => {
    'use strict';
    
    const btnAddNewBank = document.querySelector('.new-bank');
    class Modal {
        constructor(modal) {
            this.wrapper = modal.parentElement;
            this.modal = modal;
            this.btnCancel = modal.querySelector('.button-bank_red');
            this.btnOk = modal.querySelector('.button-bank_green');

            this.btnCancel.addEventListener('click', (event) => {
                event.preventDefault();
                this.toggleModal();
            });
        }
        toggleModal() {
            this.wrapper.toggleAttribute('data-invisible');
        }
        showConsole() {
            console.log(this.modal);
        }
    }

    let modalNewBank = new Modal(document.querySelector('#modal-new-bank'));
    modalNewBank.createNewBank = function() {
        const newBankNameInput = this.modal.querySelector('#new-bank-name');
        const newBankLogoInput = this.modal.querySelector('#new-bank-url');
        const newBankMoneyInput = this.modal.querySelector('#new-bank-money');
        let bank = document.querySelector('.bank').cloneNode(true);
        let newBankNameElem = bank.querySelector('.bank__name');
        let newBankLogoElem = bank.querySelector('.bank__logo');
        let newBankMoneyElem = bank.querySelector('.bank__money-count');

        newBankNameElem.textContent = `${newBankNameInput.value}`;
        newBankLogoElem.setAttribute('src', `${newBankLogoInput.value}`);
        newBankMoneyElem.textContent = `${newBankMoneyInput.value}`;

        bank.removeAttribute('data-invisible');
        btnAddNewBank.before(bank);
        newBankNameInput.value = '';
        newBankLogoInput.value = '';
        newBankMoneyInput.value = '';
        
        this.toggleModal();
    };
    modalNewBank.btnOk.addEventListener('click', function(event) {
        event.preventDefault();
        modalNewBank.createNewBank();
    });

    btnAddNewBank.addEventListener('click', (event) => {
        event.preventDefault();
        modalNewBank.toggleModal();
    });
};