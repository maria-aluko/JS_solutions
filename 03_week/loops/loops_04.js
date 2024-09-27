// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

const prompt = require('prompt-sync')();

function evenNums() {
  let counter = 0;
  let totalNums = 20;

  for (let i = 1; i <= totalNums; i++) {
    let userInput = +prompt('Enter a number'); // also works with Number(prompt('lalala'));
    if (userInput % 2 === 0) {
      counter++;
    }
  }
  /* console.log(`You wrote ${counter} even numbers`); */
  alert('You wrote ' + counter + ' even numbers');
}

evenNums();
