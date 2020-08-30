import "./cartContainer.css";
import cartContainerTemp from "./cartContainer.html";
import {generateCart, displayTotals} from "../cart/cart";

export function displayCart(cartItems) {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = cartContainerTemp;
  const cartContainer = document.getElementById("cartContainer");
  displayTotalIfCartItemsPresent(cartItems);

  cartItems.forEach((item) => {
    cartContainer.appendChild(generateCart(item));
  });
  displayTotals();
}

function displayTotalIfCartItemsPresent(cartItems) {
  if (!cartItems.length) {
    document.getElementById("checkout-details").classList.add("hide");
  }
}
