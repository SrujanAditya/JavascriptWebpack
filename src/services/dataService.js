import {handleError} from "./../pageNotFound/pageNotFound";

let books = [];
const bookNames = [];

export async function fetchBooks() {
  await fetch(
      "https://my-json-server.typicode.com/HarikaAvadutha/JsonBooksData/db",
  )
      .then((response) => response.json())
      .then((data) => {
        books = data.books;
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  generateBookNames();
}

function generateBookNames() {
  books.forEach((element) => {
    bookNames.push(element.name);
  });
}

export function getBooksData() {
  return books;
}

export function getBookTitleNames() {
  return bookNames;
}
