let number;
let operator;

function add(a,b) {};
function subtract(a,b) {};
function multiply(a,b) {};
function divide(a,b) {
    //check if divide by 0
};
//takes in two numbers and an operator
// occurs when the user press "="
function operate(num, operator, num2) {};

function clear(){
    //wipes all existing data
};
function makeCalculator(){
    const container = document.querySelector(".buttons");
    let gridSize = 4;
    for (let col = 0; col < gridSize+1; col++) {
      for (let row = 0; row < gridSize; row++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "button");
        newDiv.textContent= col;
        container.appendChild(newDiv);
        console.log("made");
      }
    }
};
makeCalculator();