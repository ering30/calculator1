var x;

function getInputValue1() {
    var firstNumber = document.getElementById("number1").value;
    return firstNumber;
}
function getInputValue2() {
var secondNumber = document.getElementById("number2").value;
return secondNumber;
}

function addButton(){
    var num1 = getInputValue1()
    var num2 = getInputValue2()
    x = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML= x;
}
function subtractButton(){
    var num1 = getInputValue1()
    var num2 = getInputValue2()
    x = Number(firstNumber) - Number(secondNumber);
    document.getElementById("result").innerHTML= x;
}
function multiplyButton(){
    var num1 = getInputValue1()
    var num2 = getInputValue2()
    x = Number(firstNumber) * Number(secondNumber);
    document.getElementById("result").innerHTML= x;
}
function divideButton(){
    var num1 = getInputValue1()
    var num2 = getInputValue2()
    x = Number(firstNumber) / Number(secondNumber);
    document.getElementById("result").innerHTML= x;
}