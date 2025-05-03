# JavaScript Variables

Here's a comprehensive overview of JavaScript variables, covering declaration, scoping, hoisting, and best practices:

---

## **1. Variable Declaration Keywords**

JavaScript has three ways to declare variables:

- **`var`**: Legacy keyword (function-scoped).
- **`let`**: Modern block-scoped variable (reassignable).
- **`const`**: Modern block-scoped constant (cannot be reassigned).

```javascript
var name = 'John'; // Traditional (function-scoped)
let age = 25; // Block-scoped, reassign-able variable (ES6)
const PI = 3.14159; // Constant (block-scoped, immutable reference)
```

---

## **2. Variable Scope**

- **Global Scope**: Accessible everywhere (avoid unless necessary).
- **Function Scope**: Variables declared with `var` inside a function.
- **Block Scope**: Variables declared with `let`/`const` inside `{}` (e.g., loops, conditionals).

```javascript
if (true) {
  var a = 10; // Function/global scoped
  let b = 20; // Block-scoped
}
console.log(a); // 10
console.log(b); // ReferenceError
```

---

## **3. Naming Conventions**

- Use camelCase (e.g., `myVariable`).
- Start with `$`, `_`, or letters (no numbers).
- Avoid reserved keywords (e.g., `class`, `function`).
- Must start with a letter, underscore (\_), or dollar sign ($)
- Are case-sensitive (`name` ≠ `Name`)

---

## **4. Hoisting**

- **`var`**: Hoisted and initialized to `undefined`.
- **`let`/`const`**: Hoisted but not initialized (Temporal Dead Zone (TDZ)).

```javascript
console.log(x); // undefined (var)
var x = 5;
console.log(y); // ReferenceError (TDZ)
let y = 10;
```

---

## **5. Reassignment & Redeclaration**

- **`var`**: Allows redeclaration (error-prone).
- **`let`**: No redeclaration in the same scope.
- **`const`**: No reassignment or redeclaration (but object properties can change).

```javascript
var z = 1;
var z = 2; // Allowed (bad practice)

let a = 1;
let a = 2; // SyntaxError

const obj = { name: 'Alice' };
obj.name = 'Bob'; // Allowed
obj = {}; // TypeError (reassignment)
```

---

## **6. Initialization**

- **`var`**: Defaults to `undefined`.
- **`let`**: Defaults to `undefined` (but throws in TDZ).
- **`const`**: Must be initialized on declaration.

```javascript
let a; // undefined
const b; // SyntaxError
```

---

## **7. Best Practices**

1. **Prefer `const`** for values that don’t change.
2. Use **`let`** for variables needing reassignment.
3. **Avoid `var`** in modern code.
4. Declare variables **as close to usage** as possible.
5. Enable **strict mode** (`"use strict"`) to prevent undeclared variables.

```javascript
'use strict';
undeclaredVar = 10; // Throws ReferenceError
```

---

## **8. Data Types**

JavaScript variables can hold various data types:

```javascript
let name = 'Alice'; // String
let age = 30; // Number
let isActive = true; // Boolean
let user = null; // Null
let profile; // Undefined
let id = Symbol('id'); // Symbol (ES6)
let person = {}; // Object
let numbers = [1, 2, 3]; // Array (object subtype)
let now = new Date(); // Date (object subtype)
let greeting = function () {
  // Function
  console.log('Hello');
};
let bigNumber = 123456789012345678901234567890n; // BigInt (ES2020)
```

---

## **9. Common Operations**

```javascript
// Assignment
let x = 10;

// Reassignment (only for var and let)
x = 20;

// Multiple declarations
let a = 1,
  b = 2,
  c = 3;

// Increment/decrement
x++; // x = x + 1
x--; // x = x - 1

// Compound assignment
x += 5; // x = x + 5
x *= 2; // x = x * 2

// Destructuring assignment (ES6)
const [first, second] = [1, 2];
const { name, age } = { name: 'Alice', age: 30 };
```

---

## **10. Type Conversion**

```javascript
// String to Number
let num = Number("42");    // 42
let num2 = parseInt("42"); // 42
let num3 = +"42";          // 42

// Number to String
let str = String(42);      // "42"
let str2 = 42 + "";        // "42"
let str3 = 42.toString();  // "42"

// Type checking
typeof variable === "string";  // Check type
```

---

## **11. Common Issues**

- **Accidental Globals**: Assigning to undeclared variables (fixed with strict mode).
- **Scope Confusion**: Using `var` in loops (e.g., closures capturing the same variable).
- **TDZ Errors**: Accessing `let`/`const` before declaration.
- **Type Changes**: Variables can hold any data type (dynamic typing).

```javascript
// Loop issue with var (all closures reference same `i`)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i)); // Logs 3, 3, 3
}
// Fix with let (block-scoped)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j)); // Logs 0, 1, 2
}
```

---

## **12. Temporal Dead Zone**

Variables declared with `let` and `const` exist in a "Temporal Dead Zone" from the start of the block until the declaration is executed:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

---

## **Summary Table**

| Feature           | `var`             | `let`               | `const`             |
| ----------------- | ----------------- | ------------------- | ------------------- |
| **Scope**         | Function          | Block               | Block               |
| **Hoisting**      | Yes (initialized) | Yes (uninitialized) | Yes (uninitialized) |
| **Reassignment**  | Allowed           | Allowed             | Disallowed          |
| **Redeclaration** | Allowed           | Disallowed          | Disallowed          |
| **Initial Value** | Optional          | Optional            | Required            |

---

By understanding these concepts, you’ll avoid common pitfalls and write cleaner, more predictable JavaScript code. Always prefer `const` and `let` over `var` in modern projects!
