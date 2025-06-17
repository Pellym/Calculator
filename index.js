let newLine = true;
let value1;
let currentOperator;

const digitBtnPressed = (button) => {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    const currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
  }
};

const btnACPressed = () => {
  document.getElementById("inputBox").value = 0;
  newLine = true;
};

const operatorBtnPressed = (operator) => {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
};

const equalsBtnPressed = () => {
  const value2 = parseInt(document.getElementById("inputBox").value);
  let result;

  switch (currentOperator) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
  }
  document.getElementById("inputBox").value = result;
  value1 = 0;
  newLine = true;
};
const operatorBtnPressed = (operator) => {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
};

const equalsBtnPressed = () => {
  const value2 = parseInt(document.getElementById("inputBox").value);
  let result;

  switch (currentOperator) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
  }
  document.getElementById("inputBox").value = result;
  value1 = 0;
  newLine = true;
};
