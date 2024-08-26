// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

let userName = "";

userName ? ("Hello, ${userName}!") : ("Hello!");


let userInput = "";

let randomNumber = Math.floor(math.random() * 8);

console.log(randomNumber);

function compGame() {
  if (userInput.includes("sleep")) {
    return "No, but let's pretend I said yes";
  } else if (userInput.includes("money")) {
    return "Absolutely, but only in an alternate universe";
  } else if (userInput.includes("developer")) {
    return ("Yes, but only if you share the snacks");
  } else if (userInput.includes("yesterday")) {
    return (""); // add text here
  } else if (userInput.includes("lunch")) {
    return ("I wouldn't bet on it, but I'm notoriously unlucky");
  } else if (userInput.includes("holiday")) {
    return ("Not in a million years... or maybe tomorrow");
  } else if (userInput.includes("tomorrow")) {
    return ("Better not tell you now, it might ruin the surprise");
  } else if (userInput.includes("coding")) {
    return ("Pay €1.99 for 5 more answers");
  } else {
    return ("Ask again after I've had my coffee");
  }
}