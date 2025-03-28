// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result of the expression
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression); // Using eval to evaluate the expression (e.g., "2+2")
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error'; // Show error if the expression is invalid
    }
}
