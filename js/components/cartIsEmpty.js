export function cartIsEmpty() {
    const cartContainer = document.querySelector(".cart-container");
    const clearButton = document.querySelector(".clear");
    
    cartContainer.innerHTML = `<div class="empty-message">
                                <p>Your cart is empty</p>
                                </div>`;
    clearButton.style.display = "none";
}