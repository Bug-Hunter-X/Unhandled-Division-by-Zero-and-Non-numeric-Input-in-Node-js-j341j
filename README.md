# Unhandled Division by Zero and Non-numeric Input in Node.js

This repository demonstrates a common, yet easily overlooked, error in JavaScript:  unhandled division by zero and non-numeric inputs.

The `bug.js` file contains a function that performs division.  It includes a check for cases where either input is zero, but fails to explicitly check for non-numeric input. This can lead to unexpected `NaN` results or crashes.

The solution, in `bugSolution.js`, demonstrates how to improve the error handling to be more robust and prevent unexpected behavior.