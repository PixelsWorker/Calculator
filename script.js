let expression = '';

function appendToDisplay(value) {
  const lastChar = expression.slice(-1);
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
    return;
  }

  if (value === '.' && lastChar === '.') {
    return;
  }

  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    const result = new Function('return ' + expression)();
    
    if (isNaN(result)) {
      throw new Error('Invalid calculation');
    }

    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
