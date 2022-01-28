import { getCart } from "./storage/getCart.js";
import { clearCart } from "./storage/clearCart.js";
import { cartIsEmpty } from "./components/cartIsEmpty.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";

const cartItems = getCart();

const cartContainer = document.querySelector(".cart-content");
const totalPrice = document.querySelector(".total");
const clearButton = document.querySelector(".clear");

if (cartItems.length === 0) {
    cartIsEmpty();
}

for (let i = 0; i < cartItems.length; i++) {

    let cartItem = cartItems[i];

    cartContainer.innerHTML += `<div class="cart-item">
                                    <a href="details.html?id=${cartItem.id}">
                                        <img src="${cartItem.image_url}" alt="${cartItem.name}" height="100px">
                                        <section class="cart-info">
                                        <h3>${cartItem.name}</h3>
                                    </a>
                                        <h4>$ ${cartItem.price}</h4>
                                        </section>
                                </div>`;
    
    calculateTotal();
}

function calculateTotal () {
    
    const total = cartItems.reduce((sum, value) => {
        return sum += parseFloat(value.price);
    }, 0);
    
    totalPrice.innerHTML = `<h3>Total price:</h3>
                            <h3>$ ${total}</h3>`;
}

clearButton.addEventListener("click", clearCart);

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();