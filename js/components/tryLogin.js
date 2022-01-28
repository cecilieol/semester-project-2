import { url } from "../constants/api.js";
import { saveToken } from "../storage/token.js"
import { rememberUser } from "../storage/user.js";
import displayMessage from "./displayMessage.js";

export async function tryLogin(email, password) {

    const loginUrl = url + "auth/local";

    const credentials = JSON.stringify({ 
        identifier: email, 
        password: password 
    });

    const options = {
        method: "POST",
        body: credentials,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(loginUrl, options);
        const login = await response.json();

        if (login.user) {
            saveToken(login.jwt);
	        rememberUser(login.user);

	        location.href = "/";

        } else {
            return displayMessage("warning", "Invalid e-mail or password", ".message-container");
        }
        
    } catch (error) {
        console.log(error);
    }
}