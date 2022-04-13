let num1 = ''
let num2 = ''
let operator
let display = 0
let res = 0


function getNumber(numberClicked) {
    if (numberClicked ==='.'){
        numberClicked = ','
    }
    if (num1 == res) {
        num1 = ''
    }
    if (num1 === ','){
        num1 = '0,'
    }
    if (num1.includes(',') && numberClicked ===','){
        num1 = `${num1}`
    }
    else{
        num1 = `${num1}` + `${numberClicked}`
    }
    document.getElementById('display').value = num1

}




function getOperation(operatorClicked) {
    if (operator === undefined) {
        operator = operatorClicked
        document.getElementById('display').value = num1.replace('.',',') + operator
        num2 = num1
        num1 = ''
    }
    else {
        operator = operatorClicked
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1) + operator;
    }
}

function equal() {
    if (num1 != '') {
        num1 = parseFloat(num1.replace(',','.'))
        num2 = parseFloat(num2.replace(',','.'))
        switch (operator) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num2 - num1;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 / num1;
                break;

            default:
                break;
        }
        num1 = `${res}`
        operator = undefined
        document.getElementById('display').value = num1.replace('.',',')
    }
}


function reset() {
    num1 = num2 = '';
    operator = undefined
    document.getElementById('display').value = 0
}

function deleteNumber() {
    num1 = num1.slice(0, -1);
    document.getElementById('display').value = num1.replace('.',',')
}

