// TODO  
// Handle rounding issues
// Add keyboard support
// Add hover over effect

let number1 = '';
let number2 = '';
let operator = '';
screenReset = false;
const displayValue = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalButton = document.querySelector('.equals'); 
const clearButton = document.querySelector('.clear'); 
const deleteButton = document.querySelector('.delete');
const calculationValue = document.querySelector('.calculation');
const negativeButton = document.querySelector('.negative');


// Listen for the numbers and modify the display numbers if pressed
numberButtons.forEach(button => button.addEventListener('click', function(){
    appendScreen(button.textContent);
}));

// Listen for the operation buttons (+, -, *, /) and get the specific operator
operatorButtons.forEach(button => button.addEventListener("click", function(){
    getOperator(button.textContent);
}))

// Listen for the equal button and perform the calculation on the two numbers
equalButton.addEventListener('click', function(){
    evaluate();
});

// Listen for the AC button and clear the entire screen and numbers
clearButton.addEventListener('click', function(){
    clearEverything();
})

// Listen for the delete button and delete the last char in the string
deleteButton.addEventListener('click', function(){
    deleteFxn();
})

negativeButton.addEventListener('click', function(){
    toNegative();
})

// Adds text to the display based on the number pressed
function appendScreen(number){
    // Makes it so you cannot add a leading 0
    if (displayValue.textContent == '0' || screenReset){
        clearDisplay();
    }
    
    if (number == "."){
        // Adds a leading zero if the first thing you press is "."
        if (displayValue.textContent == ''){
            displayValue.textContent += "0.";
            return;
        }
        // Prohibits multiple '.' in a number
        if (displayValue.textContent.includes('.')){
            return;
        }
    }
    // Only allow up to 13 digits
    if (displayValue.textContent.length < 13){
        displayValue.textContent += number;
    }
}

// Gets the operator based on the button pressed
function getOperator(input){
    operator = input;
    number1 = displayValue.textContent;
    calculationValue.textContent = `${number1} ${operator}`
    screenReset = true;
}

// Allows for new input without the leading 0
function clearDisplay(){
    const displayValue = document.querySelector('.screen');
    displayValue.textContent = '';
    screenReset = false;
}

// Totally clears number1, number2, the operator, and the screen
function clearEverything(){
    number1 = '';
    number2 = '';
    operator = '';
    screenReset = false;
    displayValue.textContent = '0';
    calculationValue.textContent = '0';
}

// Deletes only the last char of the string (gives a zero if you deleted the only digit)
function deleteFxn(){
    if (displayValue.textContent.length == 1){
        displayValue.textContent = 0;
    }
    else {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    }
}

// Adds a negative sign to the front if positive, or removes it if negative
function toNegative(){
    displayValue.textContent = `${-1 * parseInt(displayValue.textContent)}`;
}

// Takes the two numbers and performs the calculation based on the operator
function evaluate(){
    number2 = displayValue.textContent;
    if (operator != '' && number2 != ''){
        calculationValue.textContent += ` ${number2} =`
        displayValue.textContent = operate(number1, number2, operator);
        number1 = displayValue.textContent;
        number2 = '';
        operator = '';
        screenReset = true;
    }
}

// Mathematical operations
function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b){
    return a - b;
}

function multiply(a, b){
    return a * b;

}

function divide(a,b){
    if (b == 0){
        return "ERROR";
    }
    else{
        return a / b;
    }
}

// Checks the operator and performs the right mathematical operation
function operate(a, b, operator){
    if (operator == '+'){
        return add(a, b);
    }
    else if (operator == '-'){
        return subtract(a, b);
    }
    else if (operator == '×'){
        return multiply(a, b);
    }
    else if (operator = '÷'){
        return divide(a,b);
    }
    else if (operator = '+/-'){
        return negative(a);
    }
}

// Keyboard Support

window.addEventListener('keydown', function(e){
    keyInput(e);
});

function keyInput(e){
    if ((e.key >= 0 && e.key <= 9) || e.key == '.' ){
        appendScreen(e.key);
    }
    else {
        calcFunctionKey(e.keyCode);
    }
}

function calcFunctionKey(keyCode){
    // Enter key
    if (keyCode == 13){
        evaluate();
    }
    // Delete key
    else if (keyCode == 8){
        deleteFxn();
    }
    // Escape key
    else if (keyCode == 27){
        clearEverything();
    }
    // + key
    else if (keyCode== 187){
        getOperator('+');
    }
    // * key
    else if (keyCode == 56){
        getOperator('×');
    }
    // / key
    else if (keyCode == 191){
        getOperator('÷');
    }
    // - key
    else if (keyCode == 189){
        toNegative();
    }
}
