export function getCart() {
    const cartItems = localStorage.getItem("cart");

    if (cartItems) {
        return JSON.parse(cartItems);
    } else {
        return [];
    }

}