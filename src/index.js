import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { displayHeader, addEventListeners } from './header/header.js';
import { displayFooter } from './footer/footer';
import { displayMainContainer } from './mainContainer/mainContainer';
import { displayCards } from './cardContainer/cardContainer';
import { fetchBooks, getBooksData } from './services/dataService';
import { initAutoSuggest } from './autoComplete/autoComplete';

(async function init() {
  setupHTMLBody();
  await fetchBooks();
  displayCards(getBooksData());
  addEventListeners();
  initAutoSuggest();
})();

function setupHTMLBody() {
  displayHeader();
  displayMainContainer();
  displayFooter();
}
