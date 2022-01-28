import { updateProduct } from "./components/updateProduct.js"
import { deleteProduct } from "./components/deleteProduct.js";
import { productsUrl } from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";
import { retrieveToken } from "./storage/token.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsUrl = productsUrl + id;

const editForm = document.querySelector("#edit-form");
const name = document.querySelector("#product-name");
const price = document.querySelector("#product-price");
const description = document.querySelector("#product-desc");
const image = document.querySelector("#product-url");
const featured = document.getElementsByName("featured");
const featuredTrue = document.getElementById("true");
const featuredFalse = document.getElementById("false");
const message = document.querySelector(".message-container");

if (!id) {
    document.location.href = "/";
}

async function fetchInputs() {
    try {
        const response = await fetch(detailsUrl);
        const details = await response.json();

        const previousPage = document.querySelector(".previous-page");
        const currentPage = document.querySelector(".current-page");

        previousPage.innerHTML = `<a href="details.html?id=${details.id}">${details.name}</a>`;
        currentPage.innerHTML = `Edit ${details.name}`;

        name.value = details.name;
        price.value = details.price;
        description.value = details.description;
        image.value = details.image_url;
        featured.value = details.featured;
        
        if (featured.value) {
            featuredTrue.checked = true;
        } else {
            featuredFalse.checked = true;
        }

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".message-container");
    }
}; 

fetchInputs();

function submitEdit(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameInput = name.value.trim();
    const priceInput = parseFloat(price.value);
    const descriptionInput = description.value.trim();
    const imageInput = image.value.trim();

    if (!nameInput) {
        name.style.borderColor = "red";
    } else {
        name.style.borderColor = "#ced4da";
    }

    if (!priceInput || isNaN(priceInput)) {
        price.style.borderColor = "red";
    } else {
        price.style.borderColor = "#ced4da";
    }

    if (!descriptionInput) {
        description.style.borderColor = "red";
    } else {
        description.style.borderColor = "#ced4da";
    }

    if (!imageInput) {
        image.style.borderColor = "red";
    } else {
        image.style.borderColor = "#ced4da";
    }

    if (!nameInput|| !priceInput || isNaN(priceInput) || !descriptionInput || !imageInput) {
        return displayMessage("warning", "Failed to submit changes: Missing/Invalid input", ".message-container");
    }

    if (featuredTrue.checked) {
        featured.value = true;
    }

    if (featuredFalse.checked) {
        featured.value = false;
    }

    updateProduct(nameInput, priceInput, descriptionInput, imageInput, featured.value);

}

editForm.addEventListener("submit", submitEdit);

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", deleteProduct);

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();

const token = retrieveToken();

if (!token) {
    location.href = "/";
}