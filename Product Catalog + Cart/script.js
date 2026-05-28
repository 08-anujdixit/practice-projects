//api for data fetch
const apiURL = "https://dummyjson.com/products/search?q=";

//button and input to take user search value
let searchInput = document.getElementById("searchInput");
const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");

//filter by price variable
let priceFilter = document.getElementById("priceFilter");

//to display product selecting html
let productGrid = document.getElementById("productGrid");
let allProducts = []; //array to push all elements

//to display cart selecting cart elements
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCart");

let cart = []; //array to push elements in cart
const cartBtn = document.getElementById("cartButton");
let cartCount = document.getElementById("cartCount");
let cartItems = document.getElementById("cartItems");

//loads cart item , update cart countm and render items in cart
loadCart();
updateCartCount();
renderCartItems(cart);

/* Functions start here*/

//For submit button click
form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchProducts();
});

//for live search input with time delay
searchInput.addEventListener("input", debounce(fetchProducts, 500));

//Time delay for live search function
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
 }

 // Fetch products from API

async function fetchProducts() {

  let query = searchInput.value.trim();
   
  //Validation for empty input
  if (query === "") {
    productGrid.innerHTML = `<h2 style = "font-size: 1.4em">Please enter something to search</h2>`;
    return;
  }

  let response = await fetch(`${apiURL}${query}`);
  let data = await response.json();

  //For no object found
  if (data.products.length === 0) {
    productGrid.innerHTML = `<h2>No products found</h2>`;
    return;
  }


  allProducts = data.products; //array stores all the products from data
  displayProducts(allProducts) // shows fetched products from all products
  applyFilters(); //apply filter
}


//apply filter function based on price
function applyFilters() {
  let priceValue = priceFilter.value; //select what value is in price 

  //matches value if false no ressult
  let filtered = allProducts.filter((product) => {

    let priceMatch = false;

    if (priceValue === "all") {
      priceMatch = true;
    } else if (priceValue === "low") {
      priceMatch = product.price < 1000;
    } else if (priceValue === "mid") {
      priceMatch = product.price >= 1000 && product.price <= 5000;
    } else if (priceValue === "high") {
      priceMatch = product.price > 5000;
    }

    return priceMatch; //return items with same value
  });

  //displays products
  displayProducts(filtered);
}
//Event listener for filter change
priceFilter.addEventListener("change", applyFilters);

//THis function renders UI product card with map
function displayProducts(products) {
  productGrid.innerHTML = products
    .map((product) => {
      return `
        <div class="productCard">

          <img src="${product.thumbnail}" alt="${product.title}" />
          <div class="cardContent">
            <p>${product.title}</p>
            <p>${product.category}</p>
            <p>⭐ ${product.rating}</p>
            <p>$ ${product.price}</p>
            <button class="addCartBtn" data-id ="${product.id}">
                Add To Cart</button>
          </div>
        </div>
        `;
    })
    .join("");
  addCartFunctionality(); 
}

//For each card , sets Add to cart button  
function addCartFunctionality() {
  let cartButtons = document.querySelectorAll(".addCartBtn");

  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.dataset.id;
      let foundProduct = allProducts.find((product) => {
        return product.id == productID;
      });

      let existingItem = cart.find((item) => {
        return item.id == productID;
      });
      //Updates quantity, qunantity count and saves 
      if (existingItem) {
        existingItem.quantity++;
        updateCartCount();
        saveCart();
      } else {
        cart.push({
          ...foundProduct,
          quantity: 1,
        });
        updateCartCount();
        saveCart();
      }
    });
  });

}
//Function to display Cart pop up
cartBtn.addEventListener("click", function () {
  cartOverlay.classList.add("show");
  renderCartItems(cart);
});

// Function to close cart
closeCartBtn.addEventListener("click", function () {
  cartOverlay.classList.remove("show");
});

//This function actually render the cart items and also shows empty state 
function renderCartItems(cart) {
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <h2>Your cart is empty</h2>
        `;

    return;
  }
  //Returns Cart item element for each product
  cartItems.innerHTML = cart
    .map((items) => {
      return `
                <div class="cartItem">
                <img src="${items.thumbnail}" alt="Product">

                <div class="cartInfo">
                    <h4>${items.title}</h4>
                    <p class="price">${items.price}</p>

                    <div class="quantity">
                        <button class="decreaseBtn" data-id="${items.id}">-</button>
                        <span>${items.quantity}</span>
                        <button class="increaseBtn" data-id="${items.id}">+</button>
                    </div>

                    <button class="removeBtn" data-id="${items.id}" >Remove</button>
                </div>
            </div>
        `;
    })
    .join("");
    //Calculates total amount 
  let totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  // Shows total amount
  cartItems.innerHTML += `
    <div class="totalSection">
        <h3>Total: $ ${totalPrice.toFixed(2)}</h3>
    </div>
  `;

  addQuantityFunctionality();
  addRemoveFunctionality();
}


//To increase and decrease product count
function addQuantityFunctionality() {
  let increaseButtons = document.querySelectorAll(".increaseBtn");

  let decreaseButtons = document.querySelectorAll(".decreaseBtn");

  //Increase function that increase item count by ID
  increaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.dataset.id;

      let cartItem = cart.find((item) => {
        return item.id == productID;
      });

      cartItem.quantity++;
      updateCartCount();
      saveCart();
      renderCartItems(cart);
    });
  });

  //Decrease function that decrease by item id
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.dataset.id;

      let cartItem = cart.find((item) => {
        return item.id == productID;
      });

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        cart = cart.filter((item) => {
          return item.id != productID;
        });
      }
      updateCartCount();
      saveCart();
      renderCartItems(cart);
    });
  });
}

// Function for remove item, clears product with same ID and rerender cart
function addRemoveFunctionality() {
  let removeButtons = document.querySelectorAll(".removeBtn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let productID = button.dataset.id;

      cart = cart.filter((item) => {
        return item.id != productID; //return all the element that does not match product id
      });
      updateCartCount();
      saveCart();
      renderCartItems(cart);
    });
  });
}

//Function to maintain cart count
function updateCartCount() {

  let totalCount = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  cartCount.textContent = totalCount;

  if (totalCount === 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "";
  }
}

// SAVE CART
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// LOAD CART
function loadCart() {
  let storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}
