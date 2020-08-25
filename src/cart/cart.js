import './cart.css';
import cart from './cart.html';
import { parseStringToHtml } from './../utils/DOMParser';
import { removeBookFromCart, calculateSubTotal } from '../services/cartService';

export function generateCart(book) {
  const newCart = parseStringToHtml(cart);
  newCart.getElementById('image').src = book.img;
  newCart.getElementById('book-name').textContent = book.name;
  const quantity = newCart.getElementById('quantity');
  quantity.textContent = book.cartCount;
  const price = newCart.getElementById('price');
  price.textContent = 'Rs: ' + book.price * book.cartCount;
  addEventListeners(newCart, book, quantity, price);
  return newCart.body.firstChild;
}

function addEventListeners(newCart, book, quantity, price) {
  newCart.getElementById('plus-button').addEventListener('click', () => {
    if (book.cartCount < book.quantity) {
      updateCartItem(book, quantity, price);
    }
  });
  newCart.getElementById('minus-button').addEventListener('click', () => {
    if (book.cartCount !== 1) {
      updateCartItem(book, quantity, price, -1);
    }
  });
  newCart.getElementById('delete-button').addEventListener('click', () => {
    removeBookFromCart(book);
    displayTotals();
  });
}

function updateCartItem(book, quantity, price, cartCount = 1) {
  book.cartCount += cartCount;
  quantity.textContent = book.cartCount;
  price.textContent = 'Rs: ' + book.price * book.cartCount;
  displayTotals();
}

export function displayTotals() {
  const subTotal = calculateSubTotal();
  document.getElementById('subtotal').innerHTML = subTotal;
  document.getElementById('total').innerHTML = `${(+subTotal + 50).toFixed(2)}`;
}
