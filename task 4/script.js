const cart = [];
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        cart.push({ item, price });
        alert(`${item} added to the cart!`);
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
