import { retrieveUser } from "../storage/user.js";

export function adminView() {

    const adminNav = document.querySelector(".admin-nav");
    const adminM = document.querySelector(".admin-mobile");
    const adminD = document.querySelector(".admin-desktop");

    const username = retrieveUser();

    if (username) {
        adminM.innerHTML = `Logged in as: ${username} <i class="fas fa-caret-down"></i>`;
        adminD.innerHTML = `Logged in as: ${username}`;
        adminNav.style.display = "block";
    } else {
        adminNav.style.display = "none";
        adminNav.innerHTML = "";
    }

}