let currentTotal = "";

function sec(number) {
    currentTotal += number;
    document.getElementById("total").innerHTML = currentTotal;
}

function toggleSign() {
    let value = parseFloat(currentTotal);
    value *= -1;
    currentTotal = value.toString();
    document.getElementById("total").innerHTML = currentTotal;
}

function percentage() {
    let value = parseFloat(currentTotal);
    value *= 0.01;
    currentTotal = value.toString();
    document.getElementById("total").innerHTML = currentTotal;
}

function addDecimal() {
    if (!currentTotal.includes(".")) {
        currentTotal += ".";
        document.getElementById("total").innerHTML = currentTotal;
    }
}

function resetTotal() {
    currentTotal = "";
    document.getElementById("total").innerHTML = currentTotal;
}

function deleteLastDigit() {
    currentTotal = currentTotal.slice(0, -1);
    document.getElementById("total").innerHTML = currentTotal;
}

function multiply() {
    currentTotal += "x";
    document.getElementById("total").innerHTML = currentTotal;
}

function divide() {
    currentTotal += "÷";
    document.getElementById("total").innerHTML = currentTotal;
}

function subtract() {
    currentTotal += "-";
    document.getElementById("total").innerHTML = currentTotal;
}

function add() {
    currentTotal += "+";
    document.getElementById("total").innerHTML = currentTotal;
}

function checkResult() {
    let result = currentTotal.replace(/x/g, "*").replace(/÷/g, "/");
    if (isNaN(eval(result))) {
        alert("Error");
        return false;
    }
    return true;
}

function calculateResult() {
    if (checkResult()) {
        let result = currentTotal.replace(/x/g, "*").replace(/÷/g, "/");
        currentTotal = eval(result).toString();
        document.getElementById("total").innerHTML = currentTotal;
    }
}
