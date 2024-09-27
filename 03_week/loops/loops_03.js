// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function avgSpeed() {
  let distance, time;

  while (distance != 0) {
    distance = +prompt('Enter a distance in kilometers in numbers');

    if (distance == 0) {
      console.log('distance 0 - game over');
      break;
    }

    time = +prompt('Enter the time in hours (in numbers)');

    let average = distance / time;
    alert('average is: ' + average);
    console.log('data: ', distance, time, average);
  }
}

avgSpeed();

// adding a + in front of a variable, changes the type from string to number
// in console log, you can use commas, in alert not, there you use +