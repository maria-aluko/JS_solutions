// Make a programm which will take in a string as an argument and will reverse it.

function reversedString() {
  let input = prompt('Please enter any text');
  let reversed = '';

  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input.charAt(i);
  }
  console.log(reversed);
}
reversedString();


/*
function reverse() {
  let inputString = prompt('Please enter any text');
  console.log(`Your text reversed is ` + inputString.split('').reverse().join(''));
}
reverse();
*/


/*
function reversedString() {
  let input = prompt('Please enter any text');
  let reversed = '';

  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  console.log(reversed);
}
reversedString();
*/