let cartItems = [];

export function addBookToCart(book, count = 1) {
    book.cartCount = count;
    book.quantity -=book.cartCount;
    cartItems.push(book);
}

export function getCartItems() {
    return cartItems;
}