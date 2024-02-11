const resultScreen = document.getElementById("result_screen");
let currentOperation = "";
let previousOperand = "";
let currentOperand = "";
let operation = null;

function updateDisplay() {
  resultScreen.innerText = currentOperand;
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return; // Prevent multiple dots
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(selectedOperation) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = selectedOperation;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

function reset() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}

document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerText === "DEL") {
      deleteNumber();
    } else if (button.innerText === "RESET") {
      reset();
    } else if (button.innerText === "=") {
      compute();
      updateDisplay();
    } else if (["+", "-", "x", "/"].includes(button.innerText)) {
      chooseOperation(button.innerText);
    } else {
      appendNumber(button.innerText);
    }
  });
});

const switcher = document.getElementById("rangeInput");

function changeTheme() {
  const body = document.documentElement;
  const value = switcher.value;
  console.log(value);
  if (value === "1") {
    body.removeAttribute("data-theme");
  } else if (value === "2") {
    body.setAttribute("data-theme", "light");
  } else if (value === "3") {
    body.setAttribute("data-theme", "special");
  }
}

switcher.addEventListener("input", changeTheme);
