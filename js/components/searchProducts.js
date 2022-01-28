import { displayProducts } from "./displayProducts.js";

export function searchProducts(products) {
    const search = document.querySelector("input");
    const button = document.querySelector(".btn");
    const productContainer = document.querySelector(".product-container");
    const results = document.querySelector(".search-results");

    function filterProducts() {

        const inputValue = search.value.trim().toLowerCase();

        const searchedProducts = products.filter(product => {
            if (product.name.toLowerCase().includes(inputValue) || product.description.toLowerCase().includes(inputValue)) {
                return true;
            }
        });

        displayProducts(searchedProducts);

        if (inputValue) {
            results.innerHTML = `<p>Showing ${searchedProducts.length} product(s) matching "${inputValue}"</p>`;
        } else {
            results.innerHTML = "";
        }

        if (searchedProducts.length === 0) {
            productContainer.innerHTML = `<p>No products matching "${inputValue}"</p>`;
            results.innerHTML = "";
        }
    }

    search.addEventListener("search", filterProducts);
    button.addEventListener("click", filterProducts);
}
