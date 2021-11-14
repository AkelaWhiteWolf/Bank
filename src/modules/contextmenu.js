export let createContextMenu = () => {
    'use strict';
    
    const sectionBanks = document.querySelector('.section-banks');

    let contextMenu = {
        menu: document.querySelector('.contextmenu'),
        get btnDeleteBank() {
            return this.menu.querySelector('.contextmenu__delete');
        },
        show(left, top) {
            this.menu.style.left = `${left}px`;
            this.menu.style.top = `${top}px`;
            this.menu.removeAttribute('data-invisible');
            this.btnDeleteBank.addEventListener('click', this.deleteBank);
            document.body.addEventListener('click', this.hideMenu, {once: true});
        },
        hideMenu() {
            contextMenu.menu.setAttribute('data-invisible', '');
        },
        deleteBank() {
            contextMenu.bank.remove();
        }
    };

    sectionBanks.addEventListener('contextmenu', (event) => {
        if (event.target.closest('.bank')) {
            event.preventDefault();
            contextMenu.show(event.clientX, event.clientY);
            contextMenu.bank = event.target.closest('.bank');
        }
    });
};