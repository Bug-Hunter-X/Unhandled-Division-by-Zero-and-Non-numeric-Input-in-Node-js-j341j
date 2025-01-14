```javascript
function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers'; // Handle non-numeric inputs
  }
  if (b === 0) {
    return 'Error: Division by zero'; //Explicitly handle division by zero
  }
  return a / b;
}

console.log(myFunction(10, 2)); // Output: 5
console.log(myFunction(0, 2)); // Output: 0
console.log(myFunction(10, 0)); // Output: Error: Division by zero
console.log(myFunction(10, 'a')); // Output: Error: Inputs must be numbers
```