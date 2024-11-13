window.onload = function() {
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let selectedOperationPercent = null


outputElement = document.getElementById('result')
digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
        if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
            a += digit
        }
        outputElement.innerHTML= a;
    } else {
        if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
            b += digit
            outputElement.textContent += b
        }
    }
}

digitButtons.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        onDigitButtonClicked(digitValue)
    }
});

document.getElementById('btn_op_sign').onclick = function() {
    if (selectedOperation === null) {
        a *= -1
        outputElement.textContent = a
    } else {
        b *= -1
    }
}

document.getElementById('btn_op_mult').onclick = function() {
    if (a === '') return
    selectedOperation = 'x'
    outputElement.textContent += 'x'
}

document.getElementById('btn_op_plus').onclick = function() {
    if (a === '') return
    selectedOperation = '+'
    outputElement.textContent += '+'
}

document.getElementById('btn_op_minus').onclick = function() {
    if (a === '') return
    selectedOperation = '-'
    outputElement.textContent += '-'
}

document.getElementById('btn_op_div').onclick = function() {
    if (a === '') return
    selectedOperation = '/'
    outputElement.textContent += '/'
}

document.getElementById('btn_op_percent').onclick = function() {
    if (selectedOperationPercent !== '') return
    selectedOperationPercent = '%'
}

document.getElementById('btn_op_clear').onclick = function() {
    a = ''
    b = ''
    selectedOperation = null
    expressionResult = ''
    outputElement.innerHTML = 0
}

document.getElementById('btn_clear_one_sym').onclick = () => {
    if (outputElement.textContent.length !== 1 && a !== '' && b === '') {
        outputElement.textContent = outputElement.textContent.slice(0, -1)
        a = +(outputElement.textContent)
    } else if (outputElement.textContent.length !== 1 && b !== '') {
        outputElement.textContent = outputElement.textContent.slice(0, -1)
        b = +(outputElement.textContent)
    } else if (a !== '' && outputElement.textContent.length === 1) {
        a = ''
        outputElement.textContent = 0
    } else if (b !== '' && outputElement.textContent.length === 1) {
        b = ''
        outputElement.textContent = 0
    }
}

k = 0; k1 = 0

function changeColor() {
    if (k % 2 === 0) {
        document.getElementById('calc').style.background = "white"
        k += 1
    } else {
        document.getElementById('calc').style.background = 'grey'
        k += 1
    }
}
document.getElementById('change_theme').onclick = changeColor

function changeColorWindow() {
    if (k1 % 2 === 0) {
        document.getElementById('result').style.background = 'blue'
        k1 += 1
    } else {
        document.getElementById('result').style.background = 'black'
        k1 += 1
    }
}
document.getElementById('change_theme_window').onclick = changeColorWindow

document.getElementById('btn_coren').onclick = function() {
    if (a !== '') {
        expressionResult = Math.sqrt(+a).toString()
        outputElement.innerHTML = expressionResult
        a = expressionResult
    }
}

document.getElementById('btn_stepen').onclick = function() {
    if (a !== '') {
        expressionResult = (a ** 2).toString()
        outputElement.innerHTML = expressionResult
        a = expressionResult
    }
}

document.getElementById('btn_fact').onclick = function() {
    if (a !== '') {
        expressionResult = 1
        for (let i = 1; i <= a; i++) {
            expressionResult *= i
        }
        outputElement.innerHTML = expressionResult
        a = expressionResult
    }
}

document.getElementById('btn_000').onclick = function() {
    if (a !== '' && b === '') {
        a = +(a.toString() + '000')
        outputElement.innerHTML = a
    } else if (b !== '' && a !== '') {
        b = +(b.toString() + '000')
        outputElement.innerHTML = b
    } else if (a === '' && b === '' && expressionResult !== null) {
        expressionResult = +(expressionResult.toString() + '000')
        outputElement.innerHTML = expressionResult
    }
}


document.getElementById('btn_op_equal').onclick = function() {
    if (a === '' || b === '' || !selectedOperation)
        return

    /* if (selectedOperationPercent !== '') {
        switch (selectedOperation) {
            case 'x':
            expressionResult = (+a) / 100 * (+b) * (+a)
            break;
        
            case '+':
                expressionResult = (+a) / 100 * (+b) + (+a)
                break;

            case '-':
                expressionResult = (+a) / 100 * (+b) - (+a)
                break;
            
            case '/':
                expressionResult = (+a) / 100 * (+b) / (+a)
                break;
        } 
    } */

    else {
        switch(selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            
            case '+':
                expressionResult = (+a) + (+b)
                break;

            case '-':
                expressionResult = (+a) - (+b)
                break;
            
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
    
    }

    a = expressionResult.toString()
    b = ''
    selectedOperation = null

    outputElement.innerHTML = a
}
};
