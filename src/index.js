import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";

// import 'fontawesomeCSS';
// import 'fontawesomeJS';
// import "bootstrap";

import "./index.css";
import {displayHeader, addEventListeners} from "./header/header.js";
import {displayFooter} from "./footer/footer";
import {displayMainContainer} from "./mainContainer/mainContainer";
import {displayCards} from "./cardContainer/cardContainer";
import {fetchBooks, getBooksData} from "./services/dataService";
import {initAutoSuggest} from "./autoComplete/autoComplete";

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
