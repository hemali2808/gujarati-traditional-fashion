/* =========================================
   PRODUCT FILTER
========================================= */

function filterProducts(category, clickedButton) {

    // Badha products select karo
    const products = document.querySelectorAll(".product-card");

    // Badha filter buttons select karo
    const buttons = document.querySelectorAll(".filter-btn");


    // Badha buttons mathi active remove karo
    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Je button click karyo tene active karo
    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    // Badha products check karo
    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        // ALL hoy athva category match thay
        if (
            category === "all" ||
            productCategory === category
        ) {

            // Product batavo
            product.style.display = "";


        } else {

            // Product hide karo
            product.style.display = "none";

        }

    });

}



/* =========================================
   CART
========================================= */

let cartCount = 0;


function addToCart(productName, price) {

    cartCount++;

    const cartCounter =
        document.getElementById("cart-count");


    if (cartCounter) {

        cartCounter.textContent = cartCount;

    }


    alert(
        productName +
        " has been added to your cart!"
    );

}



/* =========================================
   WISHLIST
========================================= */

function addWishlist(productName) {

    alert(
        productName +
        " has been added to your wishlist!"
    );

}


function openWishlist() {

    alert(
        "Your wishlist will be available soon."
    );

}



/* =========================================
   CART BUTTON
========================================= */

function openCart() {

    alert(
        "Your cart will be available soon."
    );

}



/* =========================================
   SEARCH
========================================= */

function searchProduct() {

    alert(
        "Search feature will be available soon."
    );

}



/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    event.target.reset();

}
