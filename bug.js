```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line handles the case where either a or b is 0
  }
  return a / b; //This is where the error can occur
}

console.log(myFunction(10, 2)); // Output: 5
console.log(myFunction(0, 2)); // Output: 0
console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(10, 'a')); // Output: NaN
```