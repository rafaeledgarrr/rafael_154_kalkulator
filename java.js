function sec(number) {
    value = document.getElementById("total").innerHTML;
    value = value + number;
    document.getElementById("total").innerHTML = value;
}

function toggleSign() {
    value = document.getElementById("total").innerHTML;
    value = "-" + value;
    document.getElementById("total").innerHTML = value;
}

function percentage() {
    value = document.getElementById("total").innerHTML;
    value = value * 1 / 100;
    document.getElementById("total").innerHTML = value;
}

function addDecimal() {
    value = document.getElementById("total").innerHTML
    value = value + "."
    document.getElementById("total").innerHTML = value;
}

function resetTotal() {
    reset = document.getElementById("total").innerHTML
    reset = "";
    document.getElementById("total").innerHTML = reset;
}

function deleteLastDigit() {
    value = document.getElementById("total").innerHTML
    document.getElementById("total").innerHTML = value.substring(0, value.length - 1);
}

function multiply() {
    value = document.getElementById("total").innerHTML
    value = value + "x"
    document.getElementById("total").innerHTML = value;
}

function divide() {
    value = document.getElementById("total").innerHTML
    value = value + "/"
    document.getElementById("total").innerHTML = value;
}

function subtract() {
    value = document.getElementById("total").innerHTML
    value = value + "-"
    document.getElementById("total").innerHTML = value;
}

function add() {
    value = document.getElementById("total").innerHTML
    value = value + "+"
    document.getElementById("total").innerHTML = value;
}

function checkResult() {
    if (isNaN(eval(result)) !== false) {
        alert("Error")
    }
}

function calculateResult() {
    result = document.getElementById("total").innerHTML
    checkResult();
    document.getElementById("total").innerHTML = eval(result)
}
