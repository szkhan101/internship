// Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Cart Notification
let cartCount = 0;
const cartCountElem = document.getElementById("cartCount");
const addToCartBtn = document.getElementById("addToCartBtn");

if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
        cartCount++;
        cartCountElem.textContent = cartCount;
        // Add some animation when item is added to the cart
        cartCountElem.classList.add('bounce');
        setTimeout(() => {
            cartCountElem.classList.remove('bounce');
        }, 500);
    });
}

// Filter Functionality
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const products = document.querySelectorAll('.product');
const minPriceDisplay = document.getElementById('minPrice');
const maxPriceDisplay = document.getElementById('maxPrice');

// Update price range display
priceFilter.addEventListener('input', function () {
    maxPriceDisplay.textContent = priceFilter.value;
    filterProducts();
});

// Category filter event
categoryFilter.addEventListener('change', function () {
    filterProducts();
});

// Function to filter products based on category and price
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseInt(priceFilter.value);

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseInt(product.getAttribute('data-price'));

        // Check if product matches the selected filters
        const categoryMatch = selectedCategory === 'all' || productCategory === selectedCategory;
        const priceMatch = productPrice <= selectedPrice;

        // Display or hide product based on filter match
        if (categoryMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Initial call to show products based on default filter settings
filterProducts();
