// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Shonjoy',
};
person.name = 'Joy';
person.email = 'shonjoy@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

// We use the let keyword for variables which hold values that can be changed.
// The const keyword is for values that can not be changed.

const christmas_2024 = '12.25.2024';
console.log(christmas_2024);

// If you tried to reassign the constant, then when you run it,
// JavaScript would throw an error saying 'TypeError: Assignment to constant variable.'
// christmas_2024 = '12.26.2024';

// May sometimes see constants named with the snake_case naming convention
// depending on the naming convention of your development team.

// Also may see variables named with snake_case with the letters capitalized.
const COLOR_GREEN = 'green';

// Regardless of the naming convention, it's best to use descriptive names for your variables.
