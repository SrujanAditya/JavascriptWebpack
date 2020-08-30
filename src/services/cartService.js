import {displayCart} from "../cartContainer/cartContainer";

const cartItems = [];

export function addBookToCart(book, count = 1) {
  book.cartCount += count;
  cartItems.push(book);
}

export function removeBookFromCart(book) {
  book.cartCount = 0;
  const bookIndex = cartItems.indexOf(book);
  cartItems.splice(bookIndex, 1);
  displayCart(cartItems);
}

export function calculateSubTotal() {
  let subTotal = 0;
  cartItems.forEach((item) => {
    subTotal += item.price * item.cartCount;
  });

  return subTotal.toFixed(2);
}

export function getCartItems() {
  return cartItems;
}
