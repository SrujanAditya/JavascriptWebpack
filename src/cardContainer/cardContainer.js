import { generateCard } from '../card/card';

export function displayCards(books) {
  let mainContainer = document.getElementById('main');
  mainContainer.innerHTML = '';
  books.forEach((book) => {
    mainContainer.appendChild(generateCard(book));
  });
}
