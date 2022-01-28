export default function displayMessage(messageType, message, target) {
    const messageContainer = document.querySelector(target);

    messageContainer.innerHTML = `<div class="message ${messageType}"><p>${message}</p></div>`;
    }