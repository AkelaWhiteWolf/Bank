'use strict';
async function getBooks(search) {
    let request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:keyes`);
    if (request.ok) {
        let result = await request.json();
        console.log(result);
    } else {``
        return new Error('Something went wrong');
    }
}

getBooks('Цветы для элджернона');