let cart = [];
const cartList = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
const cartCount = document.getElementById('cart-count');

// Function to add items to the cart
function addToCart(productName, productPrice) {
  const product = { name: productName, price: parseFloat(productPrice) };
  cart.push(product);
  updateCartDisplay();
  updateCartCount();
}

// Function to update the cart display
function updateCartDisplay() {
  cartList.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                    <button class="remove" onclick="removeFromCart('${item.name}')">Remove</button>`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove items from the cart
function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
  updateCartDisplay();
  updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Add event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    addToCart(name, price);
  });
});
