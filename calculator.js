function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let numOne = 0;
let numTwo = 0;
let operator;

function operate() {
  //this function will take 2 numbers, call the operation based on
  //the eventListener click of the different operation
  //each button will have an eventListener for (+, -, *, /)
  console.log(".");
}

// const operations = [addBtn, subtractBtn, multiplyBtn, divideBtn];
// operations.forEach((operation) => {
//   operation.addEventListener("click", () => {
//     let operationChoice = operation.innerText;
//     console.log(operationChoice);
//   });
// });

const container = document.querySelector(".container");
function createNumber() {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    const number = document.createElement("button");
    number.classList.add(numArr[i]);
    number.textContent = `${i}`;
    container.appendChild(number);
  }
}
createNumber();

function createOperator() {
  const operationArr = ["add", "subtract", "multiply", "divide"];
  const operationSignArr = ["+", "-", "*", "/"];
  for (let i = 0; i < 4; i++) {
    const operation = document.createElement("button");
    operation.classList.add(operationArr[i]);
    operation.textContent = `${operationSignArr[i]}`;
    container.appendChild(operation);
  }
}
createOperator();

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const operationBtns = [addBtn, subtractBtn, multiplyBtn, divideBtn];

const display = document.querySelector(".display");

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.textContent += btn.innerText;
  });
});
