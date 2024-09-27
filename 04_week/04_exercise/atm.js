"use strict"

let balance = 1000;

function main() {
  /* let question = prompt('What would you like to do? If you want to check your balance, please type 1, if you want to deposit, please type 2, if you want to withdraw, please type 3'); */

  if (question == 1) {
    checkBalance();
  } else if (question == 2) {
    deposit();
  } else if (question == 3) {
    withdraw();
  } else {
    alert(`Please enter a correct option`);
  }
  main();
}
main();


function checkBalance() {
  alert(`Your balance is ${balance} euros`);
}

function deposit() {
  let depositAmount = +prompt('Please enter the amount you would like to deposit');
  if (depositAmount > 0) {
    balance += depositAmount;
    alert(`You have added ${depositAmount} to your balance`);
  } else {
    alert(`Please enter a valid number`);
  }
}

function withdraw() {
  let withdrawAmount = +prompt('Please enter the amount you would like to withdraw');
  if (withdrawAmount < 0) {
    alert(`Please enter a valid number`);
  } else if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    alert(`You have withdrawn ${withdrawAmount} from your balance`);
  } else {
    alert(`You do not have enough funds on your account`);
  }
}


/*


let question = prompt('What would you like to do? If you want to check your balance, please type 1, if you want to deposit, please type 2, if you want to withdraw, please type 3');

function main(question) {
  switch (customerInput) {
    case 1:
      return checkBalance();
      break;
    case 2:
      return deposit();
      break;
    case 3:
      return withdraw();
      break;
    default:
      return `You did not make a choice`;
  }
}
main();

*/