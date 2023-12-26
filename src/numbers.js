export default (() => {

    let currentInput = "0";
    let firstOperand = "";
    let operator = "";
    let secondOperand = "";

    function updateDisplay() {
        document.getElementById("left-side-memory").innerText = firstOperand;
        document.getElementById("operator-memory").innerText = operator;
        document.getElementById("right-side-memory").innerText = secondOperand;
        document.getElementById("second-operand").innerText = currentInput;
    }

    function appendNumber(number) {
        if (currentInput === "0") {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    function appendOperator(op) {
        if (operator !== "") {
            calculateResult();
        }
        firstOperand = currentInput;
        operator = op;
        currentInput = "0";
        updateDisplay();
    }

    function appendDecimal() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay();
        }
    }

    function toggleSign() {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }

    function deleteLastCharacter() {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === "") {
            currentInput = "0";
        }
        updateDisplay();
    }

    function clearEntry() {
        currentInput = "0";
        updateDisplay();
    }

    function clearAll() {
        currentInput = "0";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        updateDisplay();
    }

    function calculateResult() {
        if (operator !== "") {
            secondOperand = currentInput;
            switch (operator) {
                case "+":
                    currentInput = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
                    break;
                case "-":
                    currentInput = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
                    break;
                case "*":
                    currentInput = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
                    break;
                case "/":
                    if (parseFloat(secondOperand) !== 0) {
                        currentInput = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
                    } else {
                        currentInput = "Error";
                    }
                    break;
                default:
                    break;
            }
            firstOperand = "";
            operator = "";
            secondOperand = "";
            updateDisplay();
        }
    }
    

})();
    
