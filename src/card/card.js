import "./card.css";
import card from "./card.html";
import {parseStringToHtml} from "./../utils/DOMParser";
import {addBookToCart} from "./../services/cartService";
import {updateCartCount} from "../header/header";
import {displayCardDetails} from "../cardDetails/card_details";

export function generateCard(book) {
  const newCard = parseStringToHtml(card);
  const image = newCard.getElementById("image");
  image.src = book.img;
  const name = newCard.getElementById("name");
  name.textContent = book.name;
  newCard.getElementById("price").textContent = "Rs: " + book.price;
  addToCardButton(newCard, book);
  addEventListeners(image, name, book);
  return newCard.body.firstChild;
}

function addEventListeners(image, name, book) {
  image.addEventListener("click", () => {
    console.log("cardddd");
    displayCardDetails(book);
  });
  name.addEventListener("click", () => {
    displayCardDetails(book);
  });
}

function addToCardButton(newCard, book) {
  const addToCart = newCard.getElementById("add-to-cart");
  addToCart.textContent = "Add to cart";
  if (book.cartCount && book.cartCount > 0) {
    updateAddToCart(addToCart, "Added to cart");
    return;
  }
  if (book.quantity !== 0) {
    addToCart.addEventListener("click", () => {
      addBookToCart(book);
      updateCartCount();
      updateAddToCart(addToCart, "Added to cart");
    });
  } else {
    updateAddToCart(addToCart, "Out of Stock");
  }
}

function updateAddToCart(addToCart, label) {
  addToCart.innerHTML = label;
  addToCart.classList.add("disable");
}
