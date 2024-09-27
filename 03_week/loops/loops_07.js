/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

const prompt = require('prompt-sync')();

function numbers() {
  let largest = -Infinity;
  let smallest = Infinity;
  let sum = 0;
  let count = 10;

  for (let i = 0; i < count; i++) {
    let input = +prompt('Please enter a number');
    sum += input;

    if (input < smallest) {
      smallest = input;
    }

    if (input > largest) {
      largest = input;
    }
  }
  let average = sum / count;

  console.log(`The average of all the entered numbers is ${average} and the sum is ${sum}. ` + `The smallest number you entered is ${smallest} and the largest number is ${largest}.`);
}

numbers();