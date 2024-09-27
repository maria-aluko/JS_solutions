"use strict"

// variables
const pancakeType = document.getElementById('type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const displayPrices = document.querySelectorAll('#totalPrice');
const radios = document.querySelectorAll('input[type="radio"]');
const seeOrderBtn = document.getElementById('seeOrderBtn');
let showOrder = document.getElementById('showOrder');
const customerName = document.getElementById('customerName').textContent;
const displayDiv = document.getElementById('displaySelected');
const displayDelivery = document.querySelectorAll('#delivery-container');

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

// Button section

function btnFunction() {
  const typeSelected = pancakeType.options[pancakeType.selectedIndex].textContent;
  const selectedArr = [];
  showOrder.style.display = 'block';
  showOrder.textContent = `Pancake type: ${typeSelected}`;
}

function btnFunction() {
  const typeSelected = pancakeType.options[pancakeType.selectedIndex].textContent;

  showOrder.style.display = 'block';
  showOrder.textContent = `Pancake type: ${typeSelected}`;
}

function displayCheckboxes() {
  const selectedArr = [];
  displayDiv.style.display = 'block';

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedArr.push(`${checkbox.id}`);
    };
  });

  if (selectedArr.length == 0) {
    displayDiv.textContent = 'You did not choose any extras.';
  } else {
    displayDiv.textContent = 'Your selected extras: ' + `${selectedArr.join(', ')}`;
  }
}

function displayDeliveryInfo() {
  displayDelivery.style.display = 'block';
}

// Event Listeners

pancakeType.addEventListener('change', calcPrice);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calcPrice);
});

radios.forEach((radio) => {
  radio.addEventListener('change', calcPrice);
});

seeOrderBtn.addEventListener('click', btnFunction);

seeOrderBtn.addEventListener('click', displayCheckboxes);
