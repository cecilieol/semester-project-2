import { productsUrl } from "../constants/api.js"
import { retrieveToken } from "../storage/token.js";
import displayMessage from "./displayMessage.js";

export async function addNewProduct(name, price, description, image_url, featured) {

    const token = retrieveToken();

    const details = JSON.stringify({ 
        name: name, 
        price: price, 
        description: description, 
        image_url: image_url,
        featured: featured
    });

    const options = {
        method: "POST",
        body: details,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(productsUrl, options);
        const product = await response.json();

        if (product.created_at) {
            displayMessage("success", "Product was successfully created", ".message-container");
        }

        if (product.error) {
            displayMessage("error", product.message, ".message-container");
        }

        console.log(product);
        
    } catch (error) {
        console.log(error);
    }
}