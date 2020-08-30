import "./card_details.css";
import cardDetails from "./card_details.html";
import {parseStringToHtml} from "./../utils/DOMParser";

export function displayCardDetails(book) {
  const newCardDetails = parseStringToHtml(cardDetails);

  const modal = newCardDetails.getElementById("myModal");
  addData(newCardDetails, book);

  modal.style.display = "block";

  const span = newCardDetails.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  document.body.appendChild(newCardDetails.body.firstChild);
}

function addData(newCardDetails, book) {
  newCardDetails.getElementById("modalImage").src = book.img;
  newCardDetails.getElementById("modalTitle").textContent += book.name;
  newCardDetails.getElementById("modalPrice").textContent +=
    "Rs: " + book.price;
  newCardDetails.getElementById("authors").textContent += book.authors;
  newCardDetails.getElementById("pageCount").textContent += book.pageCount;
  newCardDetails.getElementById("publishedDate").textContent +=
    book.publishedDate;
}
