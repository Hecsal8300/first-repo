// Simple Calculator using JavaScript only

// Ask the user for numbers and an operator
let num1 = Number(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = Number(prompt("Enter the second number:"));

let result;

// Decide which operation to perform
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  console.log("Invalid operator");
}

// Show the result
console.log("Result:", result);