/* const age = 17

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
} */

let score = 82;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}

/* If the score is equal to or greater than 90, then the grade will be A, else if the score is equal to or greater than 80 but less than 90, then the grade will be B. Else any other score will produce the grade F. */

condition ? expressionIfTure : expressionIfFalse

let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Outputs: "Adult"

age >= 18 // that's the condition (boolean)

switch (expression) {
  case value1:
    // Code to execute
    break;
  case value2:
    // Code to execute
    break;
  default:
  // Code to execute if no match
}

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('Invalid day');
}