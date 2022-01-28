export function displayProducts(products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        let product = products[i];

        productContainer.innerHTML += `<div class="col">
                                            <a href="details.html?id=${product.id}">
                                                <img src="${product.image_url}" alt="${product.name}" height="200px">
                                                <h4>${product.name}</h4>
                                                <hr>
                                                <h4>$ ${product.price}</h4>
                                            </a>
                                        </div>`;

    }

}