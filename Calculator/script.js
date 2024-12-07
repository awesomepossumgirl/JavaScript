let currentNumber = '';
let equation = [];
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    currentNumber += event.target.textContent;
    $result.value += event.target.textContent;
};

const onClickOperator = (op) => () => {
    if (currentNumber) {
        equation.push(currentNumber);
        equation.push(op);
        currentNumber = '';
        $result.value += ` ${op} `;
    } else {
        alert('숫자를 먼저 입력해라!');
    }
};

const calculateEquation = () => {
    if (currentNumber) {
        equation.push(currentNumber);
    }
    let result = parseFloat(equation[0]);
    for (let i = 1; i < equation.length; i += 2) {
        const operator = equation[i];
        const nextNumber = parseFloat(equation[i + 1]);
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case 'x':
                result *= nextNumber;
                break;
            case '/':
                result /= nextNumber;
                break;
            default:
                break;
        }
    }
    $result.value = result;
    currentNumber = result.toString();
    equation = [];
};

document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#num-0').addEventListener('click', onClickNumber);

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('x'));

document.querySelector('#calculate').addEventListener('click', calculateEquation);

document.querySelector('#clear').addEventListener('click', () => {
    currentNumber = '';
    equation = [];
    $result.value = '';
});

document.querySelector('#backspace').addEventListener('click', () => {
    if (currentNumber) {
        currentNumber = currentNumber.slice(0, -1);
        $result.value = $result.value.slice(0, -1);
    }
});