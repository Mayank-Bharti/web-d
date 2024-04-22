// Retrieve wishlist data from local storage
let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

// Get the container to display wishlist items
const wishlistContainer = document.getElementById('wishlistContainer');
const totalPriceDisplay = document.getElementById('totalPrice');

// Function to remove item from wishlist
function removeFromWishlist(index) {
    wishlistData.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    renderWishlist();
}

// Function to render wishlist
function renderWishlist() {
    wishlistContainer.innerHTML = ''; // Clear existing content
    let totalPrice = 0; // Initialize total price

    // Check if there are items in the wishlist
    if (wishlistData.length === 0) {
        // If wishlist is empty, display a message
        wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    } else {
        // Iterate over each item in the wishlist
        wishlistData.forEach((product, index) => {
            // Create a div for each wishlist item
            const wishlistItem = document.createElement('div');
            wishlistItem.classList.add('wishlist-item');

            // Create elements to display product information
            const productName = document.createElement('h2');
            productName.textContent = product.Brand;

            const productImage = document.createElement('img');
            productImage.src = product.Image;
            productImage.alt = product.Brand;

            const productDescription = document.createElement('p');
            productDescription.textContent = product["Product Type"];

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: ₹${product.Price}`;

            totalPrice += parseFloat(product.Price); // Add product price to total price

            // Create delete button for the item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove from Wishlist';
            deleteButton.addEventListener('click', () => removeFromWishlist(index));

            // Append product information and delete button to the wishlist item
            wishlistItem.appendChild(productName);
            wishlistItem.appendChild(productImage);
            wishlistItem.appendChild(productDescription);
            wishlistItem.appendChild(productPrice);
            wishlistItem.appendChild(deleteButton);

            // Append the wishlist item to the wishlist container
            wishlistContainer.appendChild(wishlistItem);
        });
    }

    // Display total price
    totalPriceDisplay.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

// Call renderWishlist function to initially render wishlist items
renderWishlist();
