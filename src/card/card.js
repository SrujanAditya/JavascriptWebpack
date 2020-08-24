import './card.css';
import card from './card.html';
import { DOMStringParser } from './../utils/DOMParser';
import { addBookToCart } from './../services/cartService';

export function generateCard(book) {
  let newCard = DOMStringParser(card);
  newCard.getElementById('image').src = book.img;
  newCard.getElementById('name').textContent = book.name;
  newCard.getElementById('price').textContent = 'Rs: ' + book.price;
  addToCardButton(newCard, book);
  return newCard.body.firstChild;
}

function addToCardButton(newCard, book) {
  let addToCart = newCard.getElementById('add-to-cart');
  addToCart.textContent = 'Add to cart';
  if (book.cartCount && book.cartCount > 0) {
    updateAddToCart(addToCart, 'Added to cart');
    return;
  }
  if (book.quantity !== 0) {
    addToCart.addEventListener('click', () => {
      addBookToCart(book);
      updateAddToCart(addToCart, 'Added to cart');
    });
  } else {
    updateAddToCart(addToCart, 'Out of Stock');
  }
}

function updateAddToCart(addToCart, label) {
  addToCart.innerHTML = label;
  addToCart.classList.add('disable');
}
