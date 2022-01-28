import { productsUrl } from "../constants/api.js";
import { retrieveToken } from "../storage/token.js";
import displayMessage from "./displayMessage.js";

export async function deleteProduct() {

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    if (confirm("Are you sure you want to delete this product?")) {
        const url = productsUrl + id;

        const token = retrieveToken();

        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await fetch(url, options);
            const product = await response.json();

            location.href = "/";

            console.log(product);
        } catch (error) {
            console.log(error);
        }
    } 
};