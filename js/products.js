import { productsUrl } from "./constants/api.js";
import { displayProducts } from "./components/displayProducts.js";
import { searchProducts } from "./components/searchProducts.js";
import displayMessage from "./components/displayMessage.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";

async function fetchProducts() {
    try {
        const response = await fetch(productsUrl);
        const products = await response.json();

        displayProducts(products);
        searchProducts(products);

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

fetchProducts();

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();