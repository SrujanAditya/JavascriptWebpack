let books = [];

export async function fetchBooks() {
    await fetch(
        'https://my-json-server.typicode.com/HarikaAvadutha/JsonBooksData/db'
    ).then((response) => response.json())
        .then((data) => {
            books = data.books;
        });
    return books;
}

export function getBooksData(){
    return books;
}

