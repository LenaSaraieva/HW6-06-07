var operation = prompt("Choose operation(add, sub, mult, div):");
var number1 = parseFloat(prompt("Please, enter the first number:"));
var number2 = parseFloat(prompt("Please, enter the second number:"));
var result;
if (operation === "add") {
    result = number1 + number2;
  } else if (operation === "sub") {
    result = number1 - number2;
  } else if (operation === "mult") {
    result = number1 * number2;
  } else if (operation === "div") {
    result = number1 / number2;
  }
  alert (number1 + "" + 'operation' + "" + number2 + "=" + result);