let expression = '';

// Function to append value to the display
function appendToDisplay(value) {
  // Prevent multiple operators in a row
  const lastChar = expression.slice(-1);
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
    return;
  }

  // Prevent multiple decimals in the same number
  if (value === '.' && lastChar === '.') {
    return;
  }

  expression += value;
  document.getElementById('display').value = expression;
}

// Function to clear the display
function clearDisplay() {
  expression = '';
  document.getElementById('display').value = expression;
}

// Function to calculate the expression securely
function calculate() {
  try {
    // Evaluate the expression by replacing division and multiplication symbols with safe ones
    const result = new Function('return ' + expression)();
    
    // If result is not a number, show 'Error'
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
