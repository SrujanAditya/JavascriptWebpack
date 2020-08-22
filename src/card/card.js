import './card.css';
import card from './card.html';
import { DOMStringParser } from './../utils/DOMParser';

export function generateCard(book) {
  let newCard = DOMStringParser(card);
  newCard.getElementById("image").src = book.img;
  newCard.getElementById("name").textContent = book.name;
  newCard.getElementById("price").textContent = 'Rs: ' + book.price;
  addToCardButton(newCard, book);
  return newCard.body.firstChild;
}

function addToCardButton(newCard, book) {
  let addToCart = newCard.getElementById("add-to-cart");
  addToCart.textContent = 'Add to cart';
  if (book.quantity !== 0) {
    addToCart.addEventListener('click', () => {
      addToCart.innerHTML = 'Added to cart';
      addToCart.classList.add('disable');
    });
  }
  else {
    addToCart.innerHTML = 'Out of stock';
    addToCart.classList.add('disable');
  }
}
