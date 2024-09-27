'use strict';

const carForm = document.getElementById('carForm');
const searchForm = document.getElementById('searchForm');

const carArray = [];

class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color, year, discountPrice) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = price;
    this.color = color;
    this.year = year;
    this.discountPrice = discountPrice;
  }
}

// make the input type as number, so there is less conditions to check

function addNewCar(e) {
  e.preventDefault();

  const licensePlate = document.getElementById('licensePlate').value;
  const maker = document.getElementById('maker').value;
  const model = document.getElementById('model').value;
  const currentOwner = document.getElementById('currentOwner').value;
  const price = document.getElementById('price').value;
  const color = document.getElementById('color').value;
  const year = document.getElementById('year').value;

  const discountRate = 0.85;
  const date = new Date();
  let yearToday = date.getFullYear();
  let refYear = yearToday - 10;
  let discountPrice;
  console.log(yearToday);
  if (year <= refYear) {
    discountPrice = price * discountRate;
  } else {
    discountPrice = 'N/A';
  }

  errorHandle();

  const newCar = new Car(licensePlate, maker, model, currentOwner, price, color, year, discountPrice);

  carArray.push(newCar);
  createTable();
}

function errorHandle() {
  const errorMessage = document.getElementById('displayError');
  let year = document.getElementById('year').value;
  let price = document.getElementById('price').value;
  let maker = document.getElementById('maker').value;
  let currentOwner = document.getElementById('currentOwner').value;
  let color = document.getElementById('color').value;
  errorMessage.textContent = '';
  console.log(typeof maker);
  try {
    //conditions with if
    if (year.trim() == '') throw 'Please enter a year';
    if (isNaN(year)) throw 'Please enter a valid number';
    year = Number(year);
    if (year < 1886) throw 'Please enter a correct year';
    if (year > 2024) throw 'A car can not be made in the future';
    if (price < 0) throw 'Price must be a positive number';
    if (typeof maker === 'number') throw 'Car make can not be a number';
    if (typeof currentOwner === 'number') throw 'Car owner can not be a number';
    if (typeof color === 'number') throw 'Car color can not be a number';
  }
  catch (error) {
    errorMessage.textContent = error;
    throw error; // this is added so that the code won't continue until errors are cleared
  }
}


function createTable() {
  const table = document.querySelector('#carTable');
  table.innerHTML = table.rows[0].innerHTML;
  carArray.forEach(car => {
    const row = table.insertRow(-1);

    Object.values(car).forEach(text => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    })
  })
}

function searchCar(e) {
  e.preventDefault();
  const textField = document.getElementById('searchResult');
  const priceField = document.getElementById('priceDisplay');
  const searchField = document.getElementById('searchField');
  const searchValue = searchField.value.toLowerCase().toString();
  const result = carArray.filter(e => searchValue.includes(e.licensePlate));
  priceField.textContent = '';

  if (result.length <= 0) {
    textField.textContent = 'No car found with this license plate. Please enter the license plate in the following format: ABC123. Try again?';
  }
  else {
    textField.textContent = `License number ${searchValue} is ${result[0].maker} ${result[0].model} and it belongs to ${result[0].currentOwner}. The car price is ${result[0].price}.`
    if (result[0].year < 2014) {
      priceField.textContent = `The discounted price is ${result[0].discountPrice}`;
    } else {
      priceField.textContent = '';
    }
  }
}

carForm.addEventListener('submit', addNewCar);
searchForm.addEventListener('submit', searchCar);


/* localStorage.setItem('cars', JSON.stringify(cars))

let cars = JSON.parse(localStorage.getItem('cars'));

if (cars == undefined) {
  cars = [];
}

later you can remove it

localStorage.removeItem('cars');
cars = [];

*/