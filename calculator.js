let intialvalue = 0;
let lastOperation = ""
let previousValue;
let userInput;

// Taking input from user
function userInputvalue() {
    userInput = parseFloat(document.getElementById("result").value)
    return userInput
}

// Arithmatic Operations
function add() {
    previousValue = intialvalue   //  previous value is taking intial values place before the operation is applied
    intialvalue = intialvalue + userInputvalue()
    lastOperation = "+"
    resultText()
    reset()
}
function sub() {
    previousValue = intialvalue
    intialvalue = intialvalue - userInputvalue()
    lastOperation = "-"
    resultText()
    reset()
}
function mul() {
    previousValue = intialvalue
    intialvalue = intialvalue * userInputvalue()
    lastOperation = "*"
    resultText()
    reset()
}
function div() {
    previousValue = intialvalue
    intialvalue = (intialvalue / userInputvalue()).toFixed(4)  // we used toFixed to set the decimal places value
    lastOperation = "/"
    resultText()
    reset()
}

// We r clearing the box for understanding
function reset() {
    document.getElementById("result").value = ""
} 

// Displaying
function resultText() {
    document.getElementById("main3-3-3").innerHTML = previousValue + lastOperation + userInput + "=" + intialvalue 
} // here previous value is value before the arithmatic operation is performed and intial value is the value after the operatin is performed 

