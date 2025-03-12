// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart button event listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h3').textContent,
            price: parseFloat(button.parentElement.querySelector('p').textContent.replace('Price: $', ''))
        };
        addToCart(product);
    });
});

// Initialize cart count
updateCartCount();

// Cart page functionality
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            total += item.price;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            `;
        });
        
        totalPrice.textContent = total.toFixed(2);
    }
}

// Display cart items when on cart page
if (window.location.pathname.endsWith('cart.html')) {
    displayCartItems();
}