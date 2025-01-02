## JavaScript Data Types

JavaScript has **eight primary data types**, categorized into **primitive types** and **non-primitive (reference) types**.

### **1. Primitive Data Types**

Primitive data types are immutable and directly represent values.

- **Number:** Represents numeric values, including integers and floating-point numbers. Special values include `Infinity`, `-Infinity`, and `NaN` (Not a Number).

  ```javascript
  let age = 25; // Integer
  let pi = 3.14; // Float
  let negative = -5; // Negative number
  ```

- **String:** Represents text or sequences of characters enclosed in single (`'`), double (`"`), or backticks (`` ` ``).

  ```javascript
  let name = 'Alice'; // String
  let greeting = `Hello, ${name}!`; // Template literal
  ```

- **Boolean:** Represents logical values: `true` or `false`.

  ```javascript
  let isActive = true; // Boolean
  ```

- **Undefined:** A variable that has been declared but not assigned a value. It represents the absence of a value.

  ```javascript
  let notAssigned; // Undefined
  ```

- **Null:** Represents the intentional absence of any object value. It’s often used to indicate that a variable should be empty.

  ```javascript
  let emptyValue = null; // Null
  ```

- **Symbol:** Introduced in ES6, `Symbol` represents a unique, immutable identifier often used as object keys to avoid property name collisions.

  ```javascript
  let sym = Symbol('unique'); // Symbol
  ```

- **BigInt:** Introduced in ES2020, `BigInt` is used for representing integers with arbitrary precision, allowing you to work with very large numbers beyond the safe limit of the `Number` type.

  ```javascript
  let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
  ```

### **2. Non-Primitive (Reference) Data Types**

Non-primitive data types are mutable and store references to values.

- **Object**: A collection of key-value pairs. Objects can hold any data type and are used to store collections of data or more complex entities.

  ```javascript
  let person = { name: 'John', age: 30 }; // Object
  ```

- **Array**: An ordered collection of elements (values), which can hold any data type, including other arrays.

  ```javascript
  let numbers = [1, 2, 3, 4]; // Array
  ```

- **Function**: Functions are objects that can be called or invoked to perform a task or compute a value.

  ```javascript
  function greet() {
    console.log('Hello, World!');
  }
  ```

- **Date**: Represents dates and times.

  ```javascript
  let now = new Date(); // Date object representing the current date and time
  ```

- **RegExp**: Represents regular expressions used for pattern matching within strings.

  ```javascript
  let pattern = /abc/; // RegExp
  ```

- **Map and Set**:

  - **Map**: A collection of key-value pairs where keys can be any data type.

    ```javascript
    let map = new Map();
    map.set('key', 'value');
    ```

  - **Set**: A collection of unique values.

    ```javascript
    let set = new Set([1, 2, 3]);
    ```

- **Error:** Represents runtime errors.

  ```javascript
  let error = new Error('Something went wrong');
  ```

### **Type Conversion**

JavaScript allows explicit and implicit type conversion (type coercion), where data types can be converted from one type to another using methods like `Number()`, `String()`, `Boolean()`, or by JavaScript's internal coercion.

```javascript
let str = '123';
let num = Number(str); // Converts string to number
```

### **Dynamic Typing**

A variable can change its type at runtime.

```javascript
let value = 42; // Number
value = 'Hello'; // Now it's a String
```

---

### **Type Checking**

Use `typeof` to determine a variable’s type.

```javascript
console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk in JavaScript)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (Array is an object)
console.log(typeof function () {}); // "function"
```

---

### **Type Coercion**

JavaScript automatically converts (coerces) data types in certain situations. Here’s how type coercion works and examples of conversions:

#### **Implicit Type Coercion**

- **String Coercion:**

  ```javascript
  let result = 'The answer is ' + 42; // "The answer is 42"
  let another = 42 + ''; // "42"
  ```

- **Number Coercion:**

  ```javascript
  let result = '5' - 2; // 3
  let another = '5' * 2; // 10
  ```

- **Boolean Coercion:**

  ```javascript
  console.log(Boolean(0)); // false
  console.log(Boolean('')); // false
  console.log(Boolean('Hello')); // true
  ```

#### **Explicit Type Conversion**

- **To Number:**

  ```javascript
  let num = Number('42'); // 42
  let float = parseFloat('3.14'); // 3.14
  let int = parseInt('10px'); // 10
  ```

- **To String:**

  ```javascript
  let str = String(42); // "42"
  let strUsingToString = (42).toString(); // "42"
  ```

- **To Boolean:**

  ```javascript
  let bool = Boolean(1); // true
  let falsy = Boolean(0); // false
  ```

---

### **Understanding `null` vs `undefined`**

Both `null` and `undefined` represent "nothing" or "no value," but they differ:

#### **Key Differences**

| **Aspect**  | **null**                          | **undefined**                        |
| ----------- | --------------------------------- | ------------------------------------ |
| **Meaning** | Intentional absence of a value.   | Variable declared but not assigned.  |
| **Type**    | `object` (quirk in JS)            | `undefined`                          |
| **Usage**   | Used explicitly to clear a value. | Default for uninitialized variables. |

#### **Examples**

```javascript
// Undefined
let a;
console.log(a); // undefined (variable declared but not assigned)

function test() {
  return; // No return value
}
console.log(test()); // undefined

// Null
let b = null;
console.log(b); // null (intentional no value)
```

#### **Testing Equality**

```javascript
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)
```

---

### Summary Table

| **Type**  | **Example**                      | **typeof Result** |
| --------- | -------------------------------- | ----------------- |
| Number    | `42`, `3.14`, `NaN`, `Infinity`  | `"number"`        |
| String    | `"Hello"`, `'World'`, `` `Hi` `` | `"string"`        |
| Boolean   | `true`, `false`                  | `"boolean"`       |
| Undefined | `undefined`                      | `"undefined"`     |
| Null      | `null`                           | `"object"`        |
| Symbol    | `Symbol('id')`                   | `"symbol"`        |
| BigInt    | `123n`                           | `"bigint"`        |
| Object    | `{}`, `[]`, `function() {}`      | `"object"`        |
