import { productsUrl } from "../constants/api.js"
import { retrieveToken } from "../storage/token.js";
import displayMessage from "./displayMessage.js";

export async function updateProduct(name, price, description, image_url, featured) {

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    
    const url = productsUrl + id;

    const token = retrieveToken();

    const details = JSON.stringify({ 
        name: name, 
        price: price, 
        description: description, 
        image_url: image_url,
        featured: featured
    });

    const options = {
        method: "PUT",
        body: details,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const product = await response.json();

        if (product.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if (product.error) {
            displayMessage("error", product.message, ".message-container");
        }

        console.log(product);
        
    } catch (error) {
        console.log(error);
    }
}