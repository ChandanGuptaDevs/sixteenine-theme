document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.shopify-payment-button__button--unbranded');
    buyButtons.forEach(button => {
        button.textContent = 'BUY NOW';
    });
});