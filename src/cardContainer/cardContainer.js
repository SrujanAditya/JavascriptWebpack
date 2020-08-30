import {generateCard} from "../card/card";
import customErrorHtml from "./customError.html";
import "./customError.css";

export function displayCards(books) {
  if (books.length > 0) {
    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";
    books.forEach((book) => {
      mainContainer.appendChild(generateCard(book));
    });
  } else {
    handleError();
  }
}

export function handleError() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = customErrorHtml;
}
