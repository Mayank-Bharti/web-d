// Function to add a product to the wishlist
function addToWishlist(productName) {
    const wishlist = document.getElementById('wishlist-btn');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    wishlist.appendChild(listItem);
  }
  
  // Event listeners for adding products to the wishlist
  document.addEventListener('DOMContentLoaded', function() {
    const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
  
    addToWishlistButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.dataset.productName;
        addToWishlist(productName);
      });
    });
  });
  