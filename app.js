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
  selectedOperator = null;
  previousValue = answer;
  currentValue = "0";
  console.log(answer);
}

function keyClicked(click) {
  const input = click.target.textContent;
  if (currentValue == 0) currentValue = input;
  else currentValue += input;
}

function operatorClicked(operator) {
  if (selectedOperator) {
    handleOperation();
  }
  if (previousValue == "0") {
    previousValue = currentValue;
    currentValue = "0";
  }
  selectedOperator = operator;
}

const numberKeys = document.querySelectorAll(".key");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const point = document.querySelector(".point");
const process = document.querySelector(".process");

for (let key of numberKeys) {
  key.addEventListener("click", keyClicked);
}

add.addEventListener("click", () => operatorClicked("add"));
subtract.addEventListener("click", () => operatorClicked("subtract"));
multiply.addEventListener("click", () => operatorClicked("multiply"));
divide.addEventListener("click", () => operatorClicked("divide"));
process.addEventListener("click", () => handleOperation());
