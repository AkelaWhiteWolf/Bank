'use strict';

const button = document.querySelector('button');
const input = document.querySelector('input');

class Book {
    constructor(searchText) {
        this.searchText = searchText;
    }

    async showBooks() {
        let request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchText}+inauthor:keyes`);
        if (request.ok) {
            let searchResults = await request.json();
            console.log(searchResults);
        } else {
            return new Error('Something went wrong');
        }    
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    let searchText = input.value;
    let result = new Book(searchText);
    result.showBooks();
});