function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return NaN; // Or handle the error in a different way 
  }
}
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, '20')); // Output: Invalid input: Both arguments must be numbers.
NaN