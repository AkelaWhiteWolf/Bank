export let createContextMenu = () => {
    const banks = document.getElementsByClassName('bank');

    let contextMenu = {
        menu: document.querySelector('.contextmenu'),
        get btnDeleteBank() {
            return this.menu.querySelector('.contextmenu__delete');
        },
        show(left, top) {
            this.menu.style.left = `${left}`;
            this.menu.style.top = `${top}`;
            this.toggle();
        },
        toggle() {
            this.menu.toggleAttribute('data-invisible');
        }
    };

    for (let bank of banks) {
        bank.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            contextMenu.show(event.clientX, event.clientY);
        });
    }
};