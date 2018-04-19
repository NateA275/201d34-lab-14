/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = Product.allProducts[i].name;
    optionElement.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  //Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

  // clear form
  event.target.reset();

}

//Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  //suss out the item picked from the select list
  var selectElement = document.getElementById('items');
  var chosenItem = selectElement.value;
  console.log(chosenItem);

  //get the quantity
  selectElement = document.getElementById('quantity');
  var quantity = Number(selectElement.value);

  //using those, create a new Cart item instance
  for(var i = 0; i < Product.allProducts.length; i++) {
    if(Product.allProducts[i].name === chosenItem) {
      new Cart(Product.allProducts[i], quantity);
      break;
    }
  }
}

//Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(Product.allProductsInCart));
}

//Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCountElement = document.getElementById('itemCount');
  var numItems = 0; //Contains total number of items in cart
  itemCountElement.innerHTML = ''; //Clear inner text

  for(var i = 0; i < Product.allProductsInCart.length; i++) {
    numItems += Product.allProductsInCart[i].quantity;
  }

  itemCountElement.textContent = numItems;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
