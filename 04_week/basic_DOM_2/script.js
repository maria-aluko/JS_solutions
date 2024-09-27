/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const input = document.querySelector('#fruitInput');
const myButton = document.querySelector('#addFruitBtn');
const list = document.querySelector('#fruitList');

function buttonFunction() {
  const newList = document.createElement('li')
  newList.textContent = input.value;
  list.appendChild(newList);
  input.value = '';
}

myButton.addEventListener('click', buttonFunction)

// input doesn't use the textContent, but the 'value' !!
// input will be always a string