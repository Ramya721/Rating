// Global array to store items in the cart
let cartItems = [];

// Function to handle the "Add to Cart" button click
function addToCart(item) {
    // Disable the "Add to Cart" button
    item.querySelector('.add-to-cart-btn').disabled = true;

    // Get the item details from the parent element
    const name = item.querySelector('.item-name').textContent;
    const price = parseFloat(item.querySelector('.item-price').textContent);
    const rating = parseInt(item.querySelector('.item-rating').value);

    // Add item to the cart
    cartItems.push({ name, price, rating });

    // Update the cart count display
    updateCartCount();

    // Update the cart total
    updateCartTotal();

    // Disable the rating input after adding to cart
    item.querySelector('.item-rating').disabled = true;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Enable the "Add to Cart" button for the corresponding item
    const itemName = cartItems[index].name;
    const itemsInDOM = document.querySelectorAll('.item-name');
    itemsInDOM.forEach(item => {
        if (item.textContent === itemName) {
            const addToCartBtn = item.parentElement.querySelector('.add-to-cart-btn');
            addToCartBtn.disabled = false;
            item.parentElement.querySelector('.item-rating').disabled = false;
        }
    });

    // Remove the item from the cart array
    cartItems.splice(index, 1);

    // Update the cart count display
    updateCartCount();

    // Update the cart total
    updateCartTotal();
}

// Function to update the cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

// Function to update the cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    cartTotal.textContent = `$${total}`;
}

// Test function to add sample items to the cart (you can remove this in your actual implementation)
function addSampleItems() {
    addToCart(document.querySelector('.item1'));
    addToCart(document.querySelector('.item2'));
}

// Attach event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        addToCart(button.parentElement);
    });
});

// Attach event listener for "Remove from Cart" buttons
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
removeFromCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        removeFromCart(index);
    });
});
