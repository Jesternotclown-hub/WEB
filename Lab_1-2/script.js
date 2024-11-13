let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function toggleSign() {
    if (display.innerText !== '0') {
        display.innerText = display.innerText.startsWith('-')
            ? display.innerText.slice(1)
            : '-' + display.innerText;
    }
}

function addSymbol(symbol) {
    if (display.innerText === '0' && symbol !== '.') {
        display.innerText = symbol;
    } else {
        display.innerText += symbol;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('−', '-'));
    } catch {
        display.innerText = 'Ошибка';
    }
}
