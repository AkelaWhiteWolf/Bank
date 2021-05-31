'use strict';

const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let search = input.value;
    getBooks(search);
});

async function getBooks(search) {
    let request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:keyes`);
    if (request.ok) {
        let searchResults = await request.json();
        console.log(searchResults);
    } else {
        return new Error('Something went wrong');
    }
}