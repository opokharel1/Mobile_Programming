function calculate() {
    let totalMarks=
    Number(document.getElementById("maths").value) +
    Number(document.getElementById("science").value) +
    Number(document.getElementById("social").value) +
    Number(document.getElementById("english").value) +
    Number(document.getElementById("nepali").value) +
    Number(document.getElementById("computer").value);

    let totalText = document.getElementById("totalMarks");
    let resultText = document.getElementById("result");

    totalText.innerHTML = "Total Marks: " + totalMarks + "/600";

    if (totalMarks >= 550) {
        resultText.innerHTML = "PASS!!<br> Grade:A+";
        resultText.style.color = "green";
    } else if (totalMarks >= 500) {
        resultText.innerHTML = "PASS: A";
        resultText.style.color = "blue";
    } else if (totalMarks >= 450) {
        resultText.innerHTML = "PASS: B";
        resultText.style.color = "blue";
    } else if (totalMarks >= 400) {
        resultText.innerHTML = "PASS: C";
        resultText.style.color = "blue";
    } else if (totalMarks >= 350) {
        resultText.innerHTML = "PASS: D";
        resultText.style.color = "blue";
    } else {
        resultText.innerHTML = "FAIL: F";
        resultText.style.color = "red";
    }
}

// function add() {
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let result = num1 + num2;
//     document.getElementById("resultText").innerHTML = "Result: " + result;
// }

// function subtract() {
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let result = num1 - num2;
//     document.getElementById("resultText").innerHTML = "Result: " + result;
// }

// function multiply() {
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let result = num1 * num2;
//     document.getElementById("resultText").innerHTML = "Result: " + result;
// }

// function divide() {
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let result = num1 / num2;
//     document.getElementById("resultText").innerHTML = "Result: " + result;
// }


function calculate_nums(operator) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    document.getElementById("resultText").innerHTML = "Result: " + result;
}