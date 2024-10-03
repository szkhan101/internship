document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price}`;
        cartItems.appendChild(li);
        total += parseFloat(item.price);
    });

    totalPrice.textContent = total;

    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        localStorage.clear();
        window.location.href = 'index.html';
    });
});
