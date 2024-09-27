const myId = document.getElementById('myId');
const mySecondId = document.querySelector('#myId'); //in queryselector, you use the id # or class .

const myClass = document.getElementsByClassName('myClass');
const mySecondClass = document.querySelectorAll('.myClass');
const myClassSecond = document.querySelector('.myClass');

const myParagraph = document.getElementsByTagName('p');

const button = document.querySelector('#myButton');

const header = document.querySelector('h1');
console.log(header.textContent);

const list = document.querySelector('ul');
let newElement = document.createElement('li')


function myFunction() {
  console.log('This is from HTML');
  header.textContent = 'what did i do?';
  button.style.color = 'green';
  header.style.backgroundColor = 'yellow';
}

function mySecondFunction() {
  console.log('This is from the EventListener');
  header.textContent = 'I fixed it';
  button.textContent = 'Fix it';
  button.style.color = 'red';
  header.style.fontSize = '50px';
  list.appendChild(newElement);
}

function headerFunction() {
  header.textContent = 'what did i do?';
}

button.addEventListener('click', mySecondFunction)






console.log(myId);
console.log(mySecondId);

console.log(myClass);
console.log(mySecondClass);
console.log(myClassSecond);

console.log(myParagraph);



