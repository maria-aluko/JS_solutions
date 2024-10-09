'use strict';

const carArray = [];
const carForm = document.querySelector('#carForm');
const searchForm = document.querySelector('#searchForm');

class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color, year, discountPrice) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = parseFloat(price);
    this.color = color;
    this.year = parseInt(year);
    this.discountPrice = discountPrice;
  }
}

function displayMessage(message, type = "success") {
  const messageDiv = document.getElementById('messageDiv');
  messageDiv.textContent = message;
  messageDiv.className = type;

  setTimeout(function () {
    messageDiv.textContent = '';
    messageDiv.className = '';
  }, 2000);
}

function addNewCar(e) {
  e.preventDefault();

  try {
    const licensePlate = document.getElementById('licensePlate').value.toUpperCase().trim();
    const maker = document.getElementById('maker').value.trim();
    const model = document.getElementById('model').value.trim();
    const currentOwner = document.getElementById('currentOwner').value.trim();
    const price = parseFloat(document.getElementById('price').value.trim());
    const color = document.getElementById('color').value.trim();
    const year = parseInt(document.getElementById('year').value.trim());
    let discountPrice = '';

    const discountRate = 0.85;
    const date = new Date();
    let yearToday = date.getFullYear();
    let refYear = yearToday - 10;
    if (year <= refYear) {
      discountPrice = price * discountRate;
    } else {
      discountPrice = 'No discount';
    }

    if (year === '') {
      throw new Error('Please enter a year');
    }
    if (isNaN(year)) {
      throw new Error('Please enter a valid number');
    }
    if (year < 1886) {
      throw new Error(`Year must be between 1886 and ${yearToday}`);
    }
    if (year > 2024) {
      throw new Error(`Year must be between 1886 and ${yearToday}`);
    }
    if (price <= 0) {
      throw new Error('Price must be a positive number');
    }

    const newCar = new Car(licensePlate, maker, model, currentOwner, price, color, year, discountPrice);
    carForm.reset();
    carArray.push(newCar);
    console.log(carArray);


    localStorage.setItem('carArray', JSON.stringify(carArray));
    createTable();
    displayMessage('Car added successfully!');

  } catch (error) {
    displayMessage(error.message, 'error');
  }
}

function loadFromLocalStorage() {
  const storedCarArray = localStorage.getItem('carArray');
  if (storedCarArray) {
    const parseCarArray = JSON.parse(storedCarArray);
    parseCarArray.forEach(carObject => {
      carArray.push(new Car(carObject.licensePlate, carObject.maker, carObject.model, carObject.currentOwner, carObject.price, carObject.color, carObject.year, carObject.discountPrice));
    });
    createTable();
  }
}


function createTable() {
  const table = document.querySelector('#carTable');
  table.innerHTML = table.rows[0].innerHTML;
  carArray.forEach((car, index) => {
    const row = table.insertRow(-1);
    const { licensePlate, maker, model, currentOwner, price, color, year, discountPrice } = car;
    const carInfo = [licensePlate, maker, model, currentOwner, price, color, year, discountPrice];

    carInfo.forEach(info => {
      const cell = row.insertCell(-1);
      cell.textContent = info;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', () => deleteCar(index));
    row.insertCell(-1).appendChild(deleteButton);
  });
};

function deleteCar(index) {
  carArray.splice(index, 1);
  localStorage.setItem('carArray', JSON.stringify(carArray));
  createTable();
  displayMessage('Car deleted successfully!');
}

function searchCar(e) {
  e.preventDefault();
  const textField = document.getElementById('searchResult');
  const searchField = document.getElementById('searchField').value.trim().toLowerCase();
  const result = carArray.filter(car => searchField.includes(car.licensePlate.toLowerCase()));

  if (result.length <= 0) {
    textField.textContent = 'No car found with this license plate. Please enter the license plate in the following format: ABC123. Try again?';
  }
  else {
    textField.innerHTML = `
      <p><strong>Make:</strong> ${result[0].maker}</p>
      <p><strong>Model:</strong> ${result[0].model}</p>
      <p><strong>Owner:</strong> ${result[0].currentOwner}</p>
      <p><strong>Year:</strong> ${result[0].year}</p>
      <p><strong>Color:</strong> ${result[0].color}</p>
      <p><strong>Original Price:</strong> $${result[0].price}</p>
      <p><strong>Discounted Price:</strong> $${result[0].discountPrice}</p>
    `;
  }
}

const backToTop = document.querySelector('#backTopBtn');
backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

carForm.addEventListener('submit', addNewCar);
searchForm.addEventListener('submit', searchCar);
window.addEventListener('load', loadFromLocalStorage);