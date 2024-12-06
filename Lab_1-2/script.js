const MAX_LENGTH = 12; // Максимальное количество символов

function appendToOutput(value) {
    const output = document.getElementById('output');
    if (output.textContent.length < MAX_LENGTH) {
        output.textContent = output.textContent === '0' ? value : output.textContent + value;
    }
}

function clearOutput() {
    document.getElementById('output').textContent = '0';
}

function calculate() {
    const output = document.getElementById('output');
    try {
        output.textContent = eval(output.textContent) || '0'; // Используйте eval с осторожностью
    } catch {
        output.textContent = 'Ошибка';
    }
}

function square() {
    const output = document.getElementById('output');
    const result = Math.pow(eval(output.textContent), 2);
    output.textContent = result.toString();
}

function squareRoot() {
    const output = document.getElementById('output');
    const result = Math.sqrt(eval(output.textContent));
    output.textContent = result.toString();
}

function toggleTheme() {
    const calculator = document.querySelector('.calculator');
    if (calculator.style.backgroundColor === 'black') {
        calculator.style.backgroundColor = '#2A2A2A'; // Темный фон
    } else {
        calculator.style.backgroundColor = 'black'; // Смените фон на черный
    }
}
