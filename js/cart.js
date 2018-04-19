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
  var cartTableBody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (var item of Cart) {
    var i = 0;
    // Create a TR
    var trEL = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    console.log(item.item.name);
    console.log(item.quantity);
    var tdEL;
    // delete button
    tdEL = document.createElement('td');
    var delButton = document.createElement('button');
    delButton.textContent = 'Delete this item';
    delButton.cartIndex = i;
    delButton.addEventListener('click', removeItemFromCart);
    tdEL.appendChild(delButton);
    trEL.appendChild(tdEL);

    // quantity
    tdEL = document.createElement('td');
    tdEL.textContent = item.quantity;
    trEL.appendChild(tdEL);

    // item name
    tdEL = document.createElement('td');
    tdEL.textContent = item.item.name;
    trEL.appendChild(tdEL);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    cartTableBody.appendChild(trEL);
  }
  i++;
}

function removeItemFromCart(event) {
  event.stopPropagation();
  console.log(event.target.cartIndex);
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  var i = event.target.cartIndex;
  Cart.splice(i,1);
  // TODO: Save the cart back to local storage
  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(Cart));
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
