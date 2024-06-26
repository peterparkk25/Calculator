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
  const operationArr = ["add", "subtract", "multiply", "divide", "equal"];
  const operationSignArr = ["+", "-", "*", "/", "="];
  for (let i = 0; i < 5; i++) {
    const operation = document.createElement("button");
    operation.classList.add(operationArr[i]);
    operation.textContent = `${operationSignArr[i]}`;
    container.appendChild(operation);
  }
}
createOperator();

const display = document.querySelector(".display");

const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");

const buttonOptions = [
  zeroBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  addBtn,
  subtractBtn,
  multiplyBtn,
  divideBtn,
];

buttonOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.textContent += btn.innerText;
  });
});

equalBtn.addEventListener("click", () => {
  if (display.textContent.includes("+")) {
    console.log(add(1, 3));
  } else if (display.textContent.includes("-")) {
    console.log(subtract(1, 3));
  } else if (display.textContent.includes("*")) {
    console.log(multiply(1, 3));
  } else if (display.textContent.includes("/")) {
    console.log(divide(1, 3));
  }
});
