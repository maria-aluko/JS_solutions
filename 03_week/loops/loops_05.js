// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

const prompt = require('prompt-sync')();

function avgNums() {
  let userInput;
  let sumOfAll = 0; // if you leave out the 0, then the value will be undefined
  let counter = 0;

  while (userInput != 0) {
    userInput = +prompt('Please enter any number');
    if (userInput === 0) {
      break;
    }
    sumOfAll += userInput;
    counter++;
  }

  let average = sumOfAll / counter;

  if (counter > 0) {
    console.log(`The average of all the entered numbers is ${average}`);
  } else {
    console.log('You did not enter any numbers.')
  }
}

avgNums();


/*

function calcAvg() {
  let sum = 0;
  let count = 0;

  do {
    let input = prompt('Enter a number');

    if (input !== 0) {
      sum += input;
      count++;  // you can also do count += 1;
    }
  } while (input !== 0);

}
  */