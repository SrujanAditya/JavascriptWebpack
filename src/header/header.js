import './header.css';
import header from './header.html';
import { searchByName } from './../services/searchService';
import { displayAutoComplete } from './../autoComplete/autoComplete';

export function displayHeader() {
  let headerDiv = document.createElement('header');
  headerDiv.innerHTML = header;
  document.body.appendChild(headerDiv);
  document.getElementById('inputContainer').innerHTML = displayAutoComplete();
}

export function addEventListeners() {
  document.getElementById('searchButton').addEventListener("click", () => {
    searchByName(document.getElementById('input').value);
  });
  document.getElementById('input').addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      searchByName(document.getElementById('input').value);
    }
  });
}


