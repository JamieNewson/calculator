// Variable to be sent to calculator display
// Current value entered
// Operator key to split values
// Store current operator, only allow relevent operators (multiple followed by -)

let currentValue = "0";
let previousValue = "0";
let selectedOperator = null;
let answer = 0;

function handleOperation() {
  let num1 = Number(previousValue);
  let num2 = Number(currentValue);
  switch (selectedOperator) {
    case "add": {
      answer = num1 + num2;
      break;
    }
    case "subtract": {
      answer = num1 - num2;
      break;
    }
    case "multiply": {
      answer = num1 * num2;
      break;
    }
    case "divide": {
      answer = num1 / num2;
      break;
    }
  }
  updateDisplay();
  selectedOperator = null;
  previousValue = answer;
  currentValue = "0";
}

function keyClicked(click) {
  const input = click.target.textContent;
  if (currentValue == 0) currentValue = input;
  else if (input == "." && !currentValue.includes(".")) currentValue += input;
  else currentValue += input;
  updateDisplay();
}

function operatorClicked(operator) {
  if (selectedOperator && currentValue != 0) {
    handleOperation();
  }
  if (previousValue == "0") {
    previousValue = currentValue;
    currentValue = "0";
  }
  selectedOperator = operator;
  updateDisplay();
}

function handleDelete() {
  if (selectedOperator && currentValue == 0) {
    selectedOperator = null;
    currentValue = previousValue;
    previousValue = 0;
  } else if (currentValue.length > 1)
    currentValue = currentValue.slice(0, currentValue.length - 1);
  else currentValue = "0";
  updateDisplay();
}

function handleClear() {
  currentValue = "0";
  previousValue = "0";
  selectedOperator = null;
  answer = 0;
  updateDisplay();
}

function updateDisplay() {
  let operatorText = "";
  switch (selectedOperator) {
    case "add":
      operatorText = "+";
      break;
    case "subtract":
      operatorText = "-";
      break;
    case "multiply":
      operatorText = "x";
      break;
    case "divide":
      operatorText = "/";
      break;
  }
  if (previousValue == 0) {
    operation.textContent = currentValue;
  } else if (currentValue == 0) {
    operation.textContent = `${previousValue} ${operatorText}`;
  } else {
    operation.textContent = `${previousValue} ${operatorText} ${currentValue}`;
  }
  result.textContent = answer;
}

const numberKeys = document.querySelectorAll(".key");

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const point = document.querySelector(".point");
const process = document.querySelector(".process");
const clear = document.querySelector(".clear");
const _delete = document.querySelector(".delete");

const operation = document.querySelector(".operation");
const result = document.querySelector(".result");

for (let key of numberKeys) {
  key.addEventListener("click", keyClicked);
}

add.addEventListener("click", () => operatorClicked("add"));
subtract.addEventListener("click", () => operatorClicked("subtract"));
multiply.addEventListener("click", () => operatorClicked("multiply"));
divide.addEventListener("click", () => operatorClicked("divide"));
point.addEventListener("click", keyClicked);
process.addEventListener("click", handleOperation);
_delete.addEventListener("click", handleDelete);
clear.addEventListener("click", handleClear);
