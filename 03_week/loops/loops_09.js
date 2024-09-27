// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

function sumNums() {
  let num = 1;
  let sumAll = 0;

  while (num <= 100) {
    sumAll += num;
    num++;
  }

  console.log(`Total sum is ${sumAll}`);
}

sumNums();