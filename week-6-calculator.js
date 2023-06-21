
function addition (num3, num4) {
    var num3= 100;
    var num4=10;
    return num3+num4;

}

addition(); //Returns: 110



function subtraction (num3, num4) {
var num3= 100;
var num4=10;
return num3-num4;
}

subtraction(); //Returns: 90



function multiplication (num3, num4) {
var num3= 100;
var num4=10;
return num3*num4;
}

multiplication(); //Returns: 1000


function division (num3, num4) {
var num3= 100;
var num4=10;
return num3/num4;
}

division(); //Returns: 10




// Core learning 2: Calculator (One function)

function calculator (num1, num2) {

var addition=num1+num2;
var subtraction=num1-num2;
var multiplication=num1*num2;
var division=num1/num2;
console.log("Addition: " + addition + ". Subtraction: " + subtraction + ". Multiplication: " + multiplication + ". Division: " + division +".");
}

calculator(20, 5); // Returns: Addition: 25. Subtraction: 15. Multiplication: 100. Division: 4.



// Portfolio Task 2: Calculator (more operations with prompts and alerts)

var operation=prompt("Choose from: addition, subtraction, multiplication, division, exponentiation, Sin, Cos, Tan. Type in one.");

if (operation=="addition" || operation=="subtraction" || operation=="multiplication" || operation=="division" || operation=="exponentiation") {

var num1=prompt("Enter your first number");
var num2=prompt("Enter your second number");

switch (operation) {
case "addition":
    alert(num1+num2);
    break;
case "subtraction":
    alert(num1-num2);
    break;
case "multiplication":
    alert(num1*num2);
    break;
case "division":
    alert(num1/num2);
    break;
case "exponentiation":
    alert(num1**num2);
    break;

}
} else if (operation=="Sin" || operation=="Cos" || operation=="Tan") {
var x=prompt("Enter your number");

switch (operation) {
    case "Sin":
        alert(Math.sin(x));
        break;
    case "Cos":
        alert(Math.cos(x));
        break;
    case "Tan":
        alert(Math.tan(x));
}
} else {
alert("Error")
}
