// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.


function numbers() {
  let largest = -Infinity;
  let smallest = Infinity;

  let input = +prompt('How many numbers do you wish to write?');
  let count = input;

  for (let i = 0; i < input; i++) {
    let number = +prompt('Please enter a number');

    if (number < smallest) {
      smallest = number;
    }

    if (number > largest) {
      largest = number;
    }
  }

  console.log(`The smallest number you entered is ${smallest} and the largest number is ${largest}.`);
}

numbers();