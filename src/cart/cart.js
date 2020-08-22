import cart from './cart.html';

export function displayCart() {
  let cartDiv = document.createElement('div');
  cartDiv.innerHTML = cart;
  let main = document.getElementById('main');
  main.innerHTML = cartDiv;
}
