import './header.css';
import header from './header.html';
import { searchByName } from './../services/searchService';
import { displayAutoComplete } from './../autoComplete/autoComplete';
import { displayCart } from '../cartContainer/cartContainer';
import { displayCards } from '../cardContainer/cardContainer';
import { getBooksData } from '../services/dataService';
import { getCartItems } from '../services/cartService';

export function displayHeader() {
  let headerDiv = document.createElement('header');
  headerDiv.innerHTML = header;
  document.body.appendChild(headerDiv);
  document.getElementById('inputContainer').innerHTML = displayAutoComplete();
}

export function addEventListeners() {
  document.getElementById('searchButton').addEventListener('click', () => {
    searchByName(document.getElementById('input').value);
  });
  document.getElementById('input').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      searchByName(document.getElementById('input').value);
    }
  });
  document.getElementById('cart-button').addEventListener('click', () => {
    displayCart(getCartItems());
    clearSearchField();
  });
  document.getElementById('shopbooks-click').addEventListener('click', () => {
    displayCards(getBooksData());
    clearSearchField();
  });
}

function clearSearchField() {
  document.getElementById('input').value = '';
}
