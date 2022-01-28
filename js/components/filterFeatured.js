import { displayProducts } from "./displayProducts.js";

export function filterFeatured(products) {
    const featuredHeading = document.querySelector(".featured-heading");

    featuredHeading.innerHTML = `<h2>Featured products</h2>`;

    const filteredProducts = products.filter(product => product.featured);

    displayProducts(filteredProducts);
};