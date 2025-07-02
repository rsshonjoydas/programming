# JavaScript Data Types

JavaScript is a dynamically typed language, meaning variables can hold values of any type without explicit declaration. Understanding data types is crucial for effective programming. Here's a comprehensive breakdown:

## **1. Primitive Data Types (Immutable)**

Primitives are simple, immutable values stored directly in memory.

- **`number`**:

  - Represents both integers and floating-point numbers.
  - Examples: `42`, `3.14`, `NaN` ("Not a Number"), `Infinity`.
  - Quirk: `NaN !== NaN` (use `Number.isNaN(value)` to check).

- **`string`**:

  - Textual data wrapped in `''`, `""`, or `` ` ` `` (backticks for template literals).
  - Examples: `'hello'`, `"world"`, `` `5 + 5 = ${5+5}` `` (interpolation).
  - Escape characters: `\n`, `\t`, `\\`, etc.

- **`boolean`**:

  - `true` or `false`.
  - **Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN` (evaluate to `false` in conditionals).
  - **Truthy values**: All other values (e.g., `"0"`, `[]`, `{}`).

- **`undefined`**:

  - A variable declared but not assigned.
  - Example: `let x; console.log(x); // undefined`.

- **`null`**:

  - Intentional absence of value. Must be explicitly assigned.
  - Example: `let x = null;`.
  - Quirk: `typeof null` returns `"object"` (historical bug).

- **`symbol`** (ES6+):

  - Unique, immutable identifiers. Often used for object properties.
  - Example: `const id = Symbol('id');`.

- **`bigint`** (ES2020+):
  - Represents integers larger than `2^53 - 1`. Append `n`.
  - Example: `12345678901234567890n`.

---

## **2. Objects (Mutable, Reference Types)**

Objects store collections of key-value pairs and are passed by reference.

- **`object`**:

  - Collections of properties. Created with `{}` or `new Object()`.
  - Example: `const person = { name: 'Alice', age: 30 };`.

- **`array`**:

  - Ordered lists. Created with `[]` or `new Array()`.
  - Example: `const nums = [1, 2, 3];`.
  - Check with `Array.isArray(nums)` (since `typeof nums` returns `"object"`).

- **`function`**:

  - Callable objects. Created with `function`, arrow syntax, or `new Function()`.
  - Example: `const add = (a, b) => a + b;`.
  - `typeof add` returns `"function"`, but functions are objects.

- **Other Built-in Objects**:
  - `Date`, `RegExp`, `Map`, `Set`, `Promise`, etc.

---

## **3. Key Concepts**

### **Type Coercion**

- **JavaScript automatically converts types in operations: [see more](../08-type-coercion/README.md)**

  ```javascript
  "5" + 1 = "51" (string concatenation)
  "5" - 1 = 4    (numeric subtraction)
  ```

- **Use `===` (strict equality) to avoid coercion:**

  ```javascript
  0 == false; // true
  0 === false; // false
  ```

### **Passing by Value vs. Reference**

- **Primitives** are copied by value:

  ```javascript
  let a = 5;
  let b = a; // b = 5 (independent of a)
  ```

- **Objects** are copied by reference:

  ```javascript
  let arr1 = [1, 2];
  let arr2 = arr1; // Both point to the same array.
  arr2.push(3); // arr1 becomes [1, 2, 3].
  ```

### **Checking Types**

- `typeof variable`: Returns type as string (e.g., `"number"`, `"string"`).
  - Quirk: `typeof null` → `"object"`; `typeof []` → `"object"`.
- `instanceof`: Checks if an object is an instance of a constructor.
  - Example: `[] instanceof Array` → `true`.
- `Object.prototype.toString.call(value)`:
  - Returns `[object Type]` (e.g., `[object Array]`).

---

## **4. Common Operations**

### **Type Conversion**

- Explicit conversion:

  ```javascript
  String(123); // "123"
  Number('42'); // 42
  Boolean(0); // false
  ```

- Parsing:

  ```javascript
  parseInt('10px'); // 10
  parseFloat('3.14'); // 3.14
  ```

### **Handling `NaN`**

- Check with `Number.isNaN(value)`:

  ```javascript
  Number.isNaN(NaN); // true
  Number.isNaN('text'); // false (unlike global isNaN())
  ```

### **Cloning Objects**

- Shallow clone:

  ```javascript
  const obj2 = { ...obj1 };
  const arr2 = [...arr1];
  ```

- Deep clone: `JSON.parse(JSON.stringify(obj))` (limited to JSON-safe data).

---

## **5. Best Practices**

1. Use `===` instead of `==` unless intentional coercion is needed.
2. Initialize variables to avoid `undefined`.
3. Prefer `Array.isArray()` for array checks.
4. Use template literals for complex strings.
5. Be cautious with `null` checks: `(x === null || x === undefined)`.

---

## **Summary Table**

| Type      | Example                    | `typeof`      | Mutable? |
| --------- | -------------------------- | ------------- | -------- |
| number    | `42`, `3.14`, `NaN`        | `"number"`    | No       |
| string    | `"hello"`, `` `hi` ``      | `"string"`    | No       |
| boolean   | `true`, `false`            | `"boolean"`   | No       |
| undefined | `let x;`                   | `"undefined"` | No       |
| null      | `let x = null;`            | `"object"`    | No       |
| symbol    | `Symbol('id')`             | `"symbol"`    | No       |
| bigint    | `123n`                     | `"bigint"`    | No       |
| object    | `{}`, `[]`, `function(){}` | `"object"`    | Yes      |
