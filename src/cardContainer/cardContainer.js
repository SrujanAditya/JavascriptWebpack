import {generateCard} from "../card/card";
import {handleError} from "../pageNotFound/pageNotFound";

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
