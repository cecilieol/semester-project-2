import { heroUrl, productsUrl } from "./constants/api.js";
import { displayHero } from "./components/displayHero.js";
import { filterFeatured } from "./components/filterFeatured.js";
import displayMessage from "./components/displayMessage.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";

async function fetchHero() {
    try {
        const response = await fetch(heroUrl);
        const heroBanner = await response.json();

        displayHero(heroBanner);

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".hero-container");
    }
}

fetchHero();

async function fetchFeatured() {
    try {
        const response = await fetch(productsUrl);
        const products = await response.json();

        filterFeatured(products);

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".featured-products");
    }
}

fetchFeatured();

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();