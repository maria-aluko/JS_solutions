// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

const prompt = require('prompt-sync')();

function avgNums() {
  let input;
  let sumOfAll = 0;
  let counter = 0;
  let yesOrNo;

  while (yesOrNo = true) {
    input = +prompt('Please enter a single number');
    sumOfAll += input;
    counter++;
    yesOrNo = confirm('Do you want to continue giving numbers?');
    if (yesOrNo != true) {
      let average = sumOfAll / counter;
      console.log(`The average of all the entered numbers is ${average}`); // put the average after the while loop!!
      break;

    }
  }
}
avgNums();


/*
function avgOfAll() {
  let userInput;
  let counter = 0;
  let sumOfAll = 0;
  let userAgain;

  while (userAgain != false) {
    userInput = +prompt('Please enter a single number');
    sumOfAll += parseInt(userInput);
    counter++;
    userAgain = confirm('Do you want to continue giving numbers?');

    if (userAgain = false) {
      console.log(`The average of all the entered numbers is ${sumOfAll / counter}`);
    }
  }
}
  */