function multiply() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").innerHTML = "Resultaat: " + result;
}

function divide() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").innerHTML = "Resultaat: " + result;
}

function add() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").innerHTML = "Resultaat: " + result;
}

function minus() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 - num2;
  document.getElementById("result").innerHTML = "Resultaat: " + result;
}