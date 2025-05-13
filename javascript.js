let number1 = ``;
let number2 = ``;
let operator = ``;
let operatorPresent = false;
let operatorList = "+-/x";
let numList = ".0123456789";

function add(a, b) {
  return (parseFloat(a) + parseFloat(b)).toString();
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) return "DIVIDE BY 0 ERR";
  else return a / b;
}
function operate(num, num2, operator) {
  if (num == "" || num2 == "" || operator == "") return "ERR";
  switch (operator) {
    case "+":
      clear();
      return add(num, num2);
    case "-":
      clear();
      return subtract(num, num2);
    case "x":
      clear();
      return multiply(num, num2);
    case "/":
      clear();
      return divide(num, num2);
  }
}

function clear() {
  number1 = ``;
  number2 = ``;
  operator = ``;
  operatorPresent = false;
}
function display(str = null) {
  const display = document.querySelector(".display");
  if (str != null || str == "") display.textContent = str;
  else display.textContent = `${number1} ${operator} ${number2}`;
}
function makeCalculator() {
  setButtons();
}
function setButtons() {
  console.log("buttons set");
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "darkorange";
    });
    button.addEventListener("click", () => {
      button.style.backgroundColor = "#CC5500";
      onclick(button.textContent);
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "orange";
    });
  });
}
function onclick(string) {
  if (string == "") return;
  if (string == "A/C") {
    clear();
    display(0);
    return;
  }
  if (operatorList.includes(string)) {
    // an operator was pressed
    if (!operatorPresent) {
      // if there's no operator
      operator = string;
      operatorPresent = true;
    } else if (number2 == ``) {
      //if there's no number2
      clear();
      display("ERR");
    } else {
      // if it has everything
      number1 = operate(number1, number2, operator);
      operator = string;
      operatorPresent = true;
      display(number1);
    }
  }
  if (numList.includes(string)) {
    // a number or decimal was pressed
    if (operatorPresent) {
      number2 += string;
      display(number2);
    } else {
      number1 += string;
      display(number1);
    }
  }
  if (string == "=") {
    display(operate(number1, number2, operator));
    clear();
  }
}
makeCalculator();
