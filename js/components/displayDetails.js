import { addToCart } from "./addToCart.js";
import { getCart } from "../storage/getCart.js";
import { retrieveToken } from "../storage/token.js";

export function displayDetails(details) {
    const currentPage = document.querySelector(".current-page");
    const title = document.querySelector("title");
    const detailsContainer = document.querySelector(".details-container");
    
    const cartItem = getCart();

    const isProductAdded = cartItem.find(item => item.name === details.name);

    let buttonLabel = "";

    if (isProductAdded) {
        buttonLabel = `Remove from cart`;
    } else {
        buttonLabel = `Add to cart`;
    }

    currentPage.innerHTML = `${details.name}`;

    title.innerHTML = `HomeToYou - ${details.name}`;

    detailsContainer.innerHTML = `<img src="${details.image_url}" alt="${details.alt_text}">
                                    <section class="product-info">
                                        <h2>${details.name}</h2>
                                        <p>${details.description}</p>
                                        <p>Price: $ ${details.price}</p>
                                        <div class="button-group">
                                            <button class="btn add" 
                                                data-id="${details.id}" 
                                                data-name="${details.name}" 
                                                data-price="${details.price}" 
                                                data-image_url="${details.image_url}">
                                                ${buttonLabel}
                                            </button>
                                            <a href="edit.html?id=${details.id}">
                                                <button class="btn edit">Edit product</button>
                                            </a>
                                        </div>
                                    </section>`;

    addToCart();

    const token = retrieveToken();

    if (!token) {
        document.querySelector(".edit").style.display = "none";
    }

}