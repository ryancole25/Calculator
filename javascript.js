function add(a, b){
    return a + b;
}

function subtract(a,b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return "YOU KNOW YOU CANT DO THAT";
    }
    else{
        return a / b;
    }
}

function operate(a, b, operator){
    if (operator == '+'){
        return add(a, b);
    }
    else if (operator == '-'){
        return subtract(a, b);
    }
    else if (operator == 'x'){
        return multiply(a, b);
    }
    else if (operator = '/'){
        return divide(a,b);
    }
}

