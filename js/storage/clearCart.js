import { cartIsEmpty } from "../components/cartIsEmpty.js";

export function clearCart() {

    if (confirm("Are your sure you want to clear your cart?")) {
        localStorage.removeItem("cart");
        cartIsEmpty();
    }
}