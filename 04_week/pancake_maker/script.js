"use strict"

// variables
const pancakeType = document.getElementById('type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const displayPrices = document.querySelectorAll('#totalPrice');
const radios = document.querySelectorAll('input[type="radio"]');
const seeOrderBtn = document.getElementById('seeOrderBtn');
const customer = document.getElementById('customerName');
const displayDiv = document.getElementById('displaySelected');
const orders = [];
const shakeMe = document.querySelector('.price-banner');

// Main section

function calcPrice() {
  const typeSelected = pancakeType.options[pancakeType.selectedIndex];
  let totalPrice = +typeSelected.value;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += +checkbox.value;
    }
  });

  radios.forEach((radio) => {
    if (radio.checked) {
      totalPrice += +radio.value;
    }
  });

  displayPrices.forEach((displayPrice) => {
    displayPrice.textContent = `$${totalPrice}`;
  });
}

class Order {
  constructor(typeSelected, selectedCheckboxes, customerName, selectedDelivery, totalPrice) {
    this.typeSelected = typeSelected;
    this.selectedCheckboxes = selectedCheckboxes;
    this.customerName = customerName;
    this.selectedDelivery = selectedDelivery
    this.totalPrice = totalPrice;
  }
}

function testDisplay() {
  const typeSelected = pancakeType.options[pancakeType.selectedIndex].textContent;
  const customerName = customer.value;
  const selectedCheckboxes = [];
  let selectedDelivery = '';
  let toppingsText;

  try {
    if (customerName === '') throw 'Please enter your name';
  } catch (error) {
    errorMessage.textContent = error;
    throw error;
  }

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCheckboxes.push(checkbox.parentElement.textContent);
      // add the cost per checkbox ? (+ ' - $' + checkbox.value);
    } if (selectedCheckboxes.length == 0) {
      toppingsText = 'You did not choose any extras.';
    } else {
      toppingsText = '';
    }
  });

  radios.forEach((radio) => {
    if (radio.checked) {
      selectedDelivery = radio.parentElement.textContent;
    }
  });

  const newOrder = new Order(typeSelected, selectedCheckboxes, customerName, selectedDelivery, totalPrice[0].textContent);
  orders.push(newOrder);

  displayDiv.style.display = 'block';
  displayDiv.innerHTML = `Hello ${customerName}, please see your order details below:<br />Selected pancake: ${typeSelected}<br />Chosen toppings: ${selectedCheckboxes.join(', ')}${toppingsText}<br />Delivery method: ${selectedDelivery}<br />Total Price: ${totalPrice[0].textContent
    } `;

  console.log(orders);
}

function makePriceShake() {
  shakeMe.classList.add('shake');
  setTimeout(() => {
    shakeMe.classList.remove('shake');
  }, 500);
}

// Event Listeners

pancakeType.addEventListener('change', calcPrice);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calcPrice);
});

radios.forEach((radio) => {
  radio.addEventListener('change', calcPrice);
});

seeOrderBtn.addEventListener('click', testDisplay);
// seeOrderBtn.addEventListener('click', displayCheckboxes);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', makePriceShake);
});