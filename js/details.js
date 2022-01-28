import { productsUrl } from "./constants/api.js";
import { displayDetails } from "./components/displayDetails.js";
import displayMessage from "./components/displayMessage.js";
import { adminView } from "./components/adminView.js";
import { logout } from "./storage/logout.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsUrl = productsUrl + id;

async function fetchDetails () {
    try {
        const response = await fetch(detailsUrl);
        const details = await response.json();

        displayDetails(details);

    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".details-container");
    }
}

fetchDetails();

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", logout);

adminView();