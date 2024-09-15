// Get Cart elements
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Ensure DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Initial setup of cart functionality
function ready() {
    // Attach event listeners for removing items from the cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Change quantity functionality
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart functionality
    var addCartButtons = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }

    // Buy button functionality
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

// Buy button functionality
function buyButtonClicked() {
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// Remove item from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Change quantity in cart
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add item to cart and remove the previous item
function addToCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg = shopProduct.getElementsByClassName("product-img")[0].src;
    clearCart(); // Clear previous items before adding new item
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Function to clear the cart before adding a new product
function clearCart() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
}

// Function to add product to the cart
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    // Create the HTML structure for the cart item
    var cartBoxContent = `
        <img src="${productImg}" alt="${title}" class="cart-img" width="100" height="100">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    document.getElementsByClassName("cart-content")[0].append(cartShopBox);

    // Add event listeners for the new cart item
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}

// Update the total price in the cart
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    // Display total price with two decimal places
    document.getElementsByClassName("total-price")[0].innerText = "$" + total.toFixed(2);
}
