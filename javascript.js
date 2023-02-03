// TODO  
// Handle rounding issues
// Add keyboard support

let number1 = '';
let number2 = '';
let operator = '';
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
    appendScreen(button);
}));

// Listen for the operation buttons (+, -, *, /) and get the specific operator
operatorButtons.forEach(button => button.addEventListener("click", function(){
    getOperator(button);
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
function appendScreen(button){
    // Makes it so you cannot add a leading 0
    if (displayValue.textContent == '0'){
        clearDisplay();
    }
    else if (displayValue.textContent == number1){
        clearDisplay();
    }
    displayValue.textContent += button.textContent;
}

// Gets the operator based on the button pressed
function getOperator(button){
    // Need to add evaluate statement here for condition where operator is pressed and number1 and number2 exist
    operator = button.textContent;
    number1 = displayValue.textContent;
    calculationValue.textContent = `${number1} ${operator}`;
}

// Allows for new input without the leading 0
function clearDisplay(){
    const displayValue = document.querySelector('.screen');
    displayValue.textContent = '';
}

// Totally clears number1, number2, the operator, and the screen
function clearEverything(){
    number1 = '';
    number2 = '';
    operator = '';
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
    }
}

// Mathematical operations
function add(a, b){
    return parseInt(a) + parseInt(b);
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