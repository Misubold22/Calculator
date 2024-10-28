const message = document.querySelector('.displayCurrent');

// Basic arithmetic functions
function add(a, b) {
  return a + b;
}
function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function percentage(a, b)
{
  // Multiply num by per divided by 100 to find the percentage.
  return (a / 100) * b;
}

const power = function (a, b) {
  return Math.pow(a, b);
};
// Perform operation based on operator
function operate(firstNumber, secondNumber) {
  if (operator === '+') return add(firstNumber, secondNumber);
  if (operator === '-') return subtract(firstNumber, secondNumber);
  if (operator === 'x') return multiply(firstNumber, secondNumber);
  if (operator === '÷') return divide(firstNumber, secondNumber);
  if (operator === '%') return percentage(firstNumber, secondNumber);
  if (operator === '^') return power(firstNumber, secondNumber);
  
  return "Error: Invalid operator";
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;
let currentValue = "";
let currentOperator = "";

const btn = document.querySelectorAll("button");

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    // Handle numeric and decimal input
    if (!isNaN(button.id) || button.id === ".") {
      currentValue += button.id;
      message.textContent = `${currentValue}`;
    }

    // Handle operator input and store first number
    if (isNaN(button.id) && button.id !== "=" && button.id !== ".") {
      operator = button.id;
      firstNumber = currentValue;
      currentValue = "";
      message.textContent = `${firstNumber}${operator}`;
    }

    // Handle input for second number
    if (operator && firstNumber && (!isNaN(button.id) || button.id === ".")) {
      secondNumber = currentValue;
      message.textContent = `${firstNumber}${operator}${secondNumber}`;
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);
      result = operate(firstNumber, secondNumber);
    }
  
    // Allow operator change after second number is entered
    if (isNaN(button.id) && button.id !== "=" && button.id !== "." && firstNumber && secondNumber) {
      currentOperator = button.id;
    }

    // Display result if a second operation is performed
    if (currentOperator && firstNumber && secondNumber && operator) {
      message.textContent = `${result}`;
      currentValue = result; // Store result for further operations
      firstNumber = "";
      secondNumber = "";
      operator = "";
      currentOperator = "";
    }

    // Handle "=" to display final result
    if (button.id === "=") {
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);
      result = operate(firstNumber, secondNumber);
      console.log("Result: " + result); // Log final result
      message.textContent = `${result}`;
      currentValue = result;
      firstNumber = "";
      secondNumber = "";
      operator = "";
    }
    if (button.id === "C") {
      currentValue = ""; 
      firstNumber = "";
      secondNumber = "";
      operator = "";
      currentOperator = "";
      result ="";
      message.textContent = `0`;
    }
  
  });
});
