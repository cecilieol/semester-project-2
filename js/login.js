import displayMessage from "./components/displayMessage.js";
import { tryLogin } from "./components/tryLogin.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";
import { retrieveToken } from "./storage/token.js";

const token = retrieveToken();
const loginForm = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const logoutBtn = document.querySelector(".logout");
const logoutBtn2 = document.querySelector(".logout-btn")

if (token) {
    loginForm.style.display = "none";
    displayMessage("success", "You are already logged in", ".message-container");
} else {
    logoutBtn2.style.display = "none";
}

function submitForm(event) {
    event.preventDefault();

    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();

    if (!emailInput) {
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "#ced4da";
    }

    if (!passwordInput) {
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "#ced4da";
    }

    if (!emailInput || !passwordInput) {
        return displayMessage("warning", "Invalid login: Missing input", ".message-container");
    }

    tryLogin(emailInput, passwordInput);
}

loginForm.addEventListener("submit", submitForm);

logoutBtn.addEventListener("click", logout);
logoutBtn2.addEventListener("click", logout);

adminView();