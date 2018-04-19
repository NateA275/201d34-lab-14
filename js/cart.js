'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { // fix this to only delete things from tbody
  var cartTableBody = document.getElementsByTagName('tbody')[0];
  cartTableBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var cartTable = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (var product of Cart) {
    // TODO: Create a TR
    var trEL = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    

    var delTD = document.createElement('td');
    var delButton = document.createElement('button');
    delButton.textContent = 'X';
    delTD.appendChild(delButton);

    

    


    var quantity = document.createElement('td');
    var itemName = document.createElement('td');
    
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
    
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
