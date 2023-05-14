/* division = document.querySelector('#divide');
multiplication = document.querySelector('#multiply');
substraction = document.querySelector('#substract');
addition = document.querySelector('#add'); */
one = document.querySelector('#one');
two = document.querySelector('#two');
three = document.querySelector('#three');
four = document.querySelector('#four');
five = document.querySelector('#five');
six = document.querySelector('#six');
seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine');
zero = document.querySelector('#zero');
plus = document.querySelector('#plus');
minus = document.querySelector('#minus');
multiplication = document.querySelector('#multiplication');
division = document.querySelector('#division');
equal = document.querySelector('#equal');
clear = document.querySelector('#clear');
point = document.querySelector('#point');
displayer = document.querySelector('#display')

let display = '';
let number1;
let operator;
let number2;
function operate(operator, number1, number2){
    if(operator === '+'){
        return add(number1,number2);
    }
    else if(operator === '-'){
        return substract(number1,number2)
    }
    else if(operator === '*'){
        return multiply(number1,number2)
    }
    else if(operator === '/'){
        return divide(number1,number2)
    }
}
function displaying(display){
    displayer.textContent = display
}
function add(a,b){
    a = Number(a);
    b = Number(b);
    return a + b;
}
function substract(a,b){
    a = Number(a);
    b = Number(b);
    return (a - b);
}
function multiply(a,b){
    a = Number(a);
    b = Number(b);
    return (a * b);
}
function divide(a,b){
    a = Number(a);
    b = Number(b);
    return (a / b);
}
/* addition.addEventListener('click', () => add())
substraction.addEventListener('click', () => substract())
multiplication.addEventListener('click', () => multiply())
division.addEventListener('click', () => divide()) */
plus.addEventListener('click', () => {number1 = display; operator = '+'; display = ''; displaying(display)})
minus.addEventListener('click', () => {number1 = display; operator = '-'; display = ''; displaying(display)})
multiplication.addEventListener('click', () => {number1 = display; operator = '*'; display = ''; displaying(display)})
division.addEventListener('click', () => {number1 = display; operator = '/'; display = ''; displaying(display)})
one.addEventListener('click', () => {display = display + '1'; displaying(display)})
two.addEventListener('click', () => {display = display + '2'; displaying(display)})
three.addEventListener('click', () => {display = display + '3'; displaying(display)})
four.addEventListener('click', () => {display = display + '4'; displaying(display)})
five.addEventListener('click', () => {display = display + '5'; displaying(display)})
six.addEventListener('click', () => {display = display + '6'; displaying(display)})
seven.addEventListener('click', () => {display = display + '7'; displaying(display)})
eight.addEventListener('click', () => {display = display + '8'; displaying(display)})
nine.addEventListener('click', () => {display = display + '9'; displaying(display)})
zero.addEventListener('click', () => {display = display + '0'; displaying(display)})
equal.addEventListener('click', () => {number2 = display; display = operate(operator, number1, number2); displaying(display)})
clear.addEventListener('click', () => {display = display = ''; displaying(display)})
point.addEventListener('click',() => {display = display + '.'; displaying(display)})