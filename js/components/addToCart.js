import { getCart } from "../storage/getCart.js";
import { saveCart } from "../storage/saveCart.js";

export function addToCart() {
    const cartButton = document.querySelector(".add");

    cartButton.onclick = function toggleCart(event) {

        const id = this.dataset.id;
        const name = this.dataset.name;
        const price = this.dataset.price;
        const image_url = this.dataset.image_url;

        const currentCart = getCart();

        const alreadyAdded = currentCart.find(item => item.id === id);

        if (!alreadyAdded) {
            const product = { 
                id: id,
                name: name, 
                price: price, 
                image_url: image_url
            };

            currentCart.push(product);

            saveCart(currentCart);

            this.innerHTML = `Add to cart`;
            this.innerHTML = `Remove from cart`;

        } else {
            const updatedCart = currentCart.filter(item => item.id !== id);
            
            saveCart(updatedCart);

            this.innerHTML = `Remove from cart`;
            this.innerHTML = `Add to cart`;
        }
    }
}

