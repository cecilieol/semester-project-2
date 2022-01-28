export function saveCart(cartItems) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}