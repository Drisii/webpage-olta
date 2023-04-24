console.log("JavaScript file loaded!");

// Define the products array
const products = [
  {
    id: 1,
    name: "Pink T-Shirt",
    price: 10,
    image: "https://via.placeholder.com/150x150?text=Pink+T-Shirt",
  },
  {
    id: 2,
    name: "Pink Hoodie",
    price: 20,
    image: "https://via.placeholder.com/150x150?text=Pink+Hoodie",
  },
  {
    id: 3,
    name: "Pink Dress",
    price: 30,
    image: "https://via.placeholder.com/150x150?text=Pink+Dress",
  },
];

// Define the cart array
let cart = [];

// Add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

// Remove a product from the cart
function removeFromCart(productId) {
  const index = cart.findIndex((p) => p.id === productId);
  cart.splice(index, 1);
  updateCart();
}

// Update the cart HTML
function updateCart() {
  const cartItems = document.querySelector("#cart-items");
  const cartTotal = document.querySelector("#cart-total");
  let total = 0;
  let html = "";
  cart.forEach((product) => {
    html += `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <p>Price: $${product.price}</p>
          <button onclick="removeFromCart(${product.id})">Remove</button>
        </div>
      </div>
    `;
    total += product.price;
  });
  cartItems.innerHTML = html;
  cartTotal.innerHTML = `Total: $${total}`;
}

// Handle the checkout button
function checkout() {
  if (cart.length > 0) {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  } else {
    alert("Your cart is empty.");
  }
}

// Load the products HTML
const productsContainer = document.querySelector("#products");
let productsHtml = "";
products.forEach((product) => {
  productsHtml += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
});
productsContainer.innerHTML = productsHtml;

