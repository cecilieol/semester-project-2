import displayMessage from "./components/displayMessage.js";
import { adminView } from "./components/adminView.js";
import { addNewProduct } from "./components/addNewProduct.js";
import { logout } from "./storage/logout.js";
import { retrieveToken } from "./storage/token.js";

const addForm = document.querySelector("#add-form");
const name = document.querySelector("#product-name");
const price = document.querySelector("#product-price");
const description = document.querySelector("#product-desc");
const image = document.querySelector("#product-url");
const radioGroup = document.querySelector(".featured-group");
const featured = document.getElementsByName("featured");
const featuredTrue = document.getElementById("true");
const featuredFalse = document.getElementById("false");
const message = document.querySelector(".message-container");

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameInput = name.value.trim();
    const priceInput = parseFloat(price.value);
    const descriptionInput = description.value.trim();
    const imageInput = image.value.trim();

    const trueChecked = featuredTrue.checked;
    const falseChecked = featuredFalse.checked;

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

    if (!trueChecked && !falseChecked) {
        radioGroup.style.borderColor = "red";
    } else {
        radioGroup.style.borderColor = "white";
    }

    if (!nameInput|| !priceInput || isNaN(priceInput) || !descriptionInput || !imageInput || (!trueChecked && !falseChecked)) {
        return displayMessage("warning", "Failed to add new product: Missing/Invalid input", ".message-container");
    }

    if (trueChecked) {
        featured.value = true;
    }

    if (falseChecked) {
        featured.value = false;
    }

    addNewProduct(nameInput, priceInput, descriptionInput, imageInput, featured.value);
}

addForm.addEventListener("submit", submitForm);

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();

const token = retrieveToken();

if (!token) {
    location.href = "/";
}