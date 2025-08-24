// An expression in JavaScript is something that produces a value.
// An expression goes on the right side of our variable assignment.

// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5; // % is the modulo operator and it returns the remainder of division.

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent (raised to the power of)
x = 2 ** 3;

// We also have shorthand (syntactic sugar) to increment or decrement a value
// Increment
x = 1;
// x = x + 1; or x += 1
x++; // This will increment the value of x, and then return the previous value.

// Decrement
// x = x - 1;
x--; // This will increment the value of x, and then return the updated value.

// 2. Assignment Operators
// The assignment operator is a single equal sign, =, which doesn't check for equality.

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators
// The result of a comparison operator is a boolean value, true or false.

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equal to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
