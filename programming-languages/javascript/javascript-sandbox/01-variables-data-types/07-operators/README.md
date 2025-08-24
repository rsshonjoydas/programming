# Operators

Operators in JavaScript are symbols that perform operations on operands (values or variables). JavaScript has different types of operators, which are listed below:

---

## **[1. Arithmetic Operators](./01-arithmetic-operators.md)**

Used for mathematical calculations.

| Operator | Description                  | Example          | Output |
| -------- | ---------------------------- | ---------------- | ------ |
| `+`      | Addition (Unary plus)        | `5 + 2`          | `7`    |
| `-`      | Subtraction (Unary negation) | `5 - 2`          | `3`    |
| `*`      | Multiplication               | `5 * 2`          | `10`   |
| `/`      | Division                     | `5 / 2`          | `2.5`  |
| `%`      | Modulus (Remainder)          | `5 % 2`          | `1`    |
| `**`     | Exponentiation               | `5 ** 2`         | `25`   |
| `++`     | Increment                    | `let a = 5; a++` | `6`    |
| `--`     | Decrement                    | `let a = 5; a--` | `4`    |

---

## **[2. Assignment Operators](https://www.notion.so/Assignment-Operators-18a0e3d49815802ba30ce568d3eb7a58?pvs=21)**

Used to assign values to variables.

| Operator | Description         | Example   | Equivalent To |
| -------- | ------------------- | --------- | ------------- |
| `=`      | Assign              | `a = 10`  | `a = 10`      |
| `+=`     | Add and Assign      | `a += 5`  | `a = a + 5`   |
| `-=`     | Subtract and Assign | `a -= 5`  | `a = a - 5`   |
| `*=`     | Multiply and Assign | `a *= 5`  | `a = a * 5`   |
| `/=`     | Divide and Assign   | `a /= 5`  | `a = a / 5`   |
| `%=`     | Modulus and Assign  | `a %= 5`  | `a = a % 5`   |
| `**=`    | Exponent and Assign | `a **= 5` | `a = a ** 5`  |

---

## **[3. Comparison Operators](https://www.notion.so/Comparison-Operators-18b0e3d49815807dbfa0fed1b00dda02?pvs=21)**

Used to compare values.

| Operator | Description           | Example     | Output  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal to              | `5 == "5"`  | `true`  |
| `===`    | Strictly Equal        | `5 === "5"` | `false` |
| `!=`     | Not Equal             | `5 != 3`    | `true`  |
| `!==`    | Strictly Not Equal    | `5 !== "5"` | `true`  |
| `>`      | Greater than          | `5 > 2`     | `true`  |
| `<`      | Less than             | `5 < 2`     | `false` |
| `>=`     | Greater than or Equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or Equal    | `5 <= 2`    | `false` |

---

## **[4. Logical Operators](https://www.notion.so/Logical-Operators-18b0e3d49815802faf1ad80626c44e94?pvs=21)**

Used for logical operations.

| Operator | Description                            | Example         | Output  |
| -------- | -------------------------------------- | --------------- | ------- |
| `&&`     | Logical AND (both must be true)        | `true && false` | `false` |
| `\|`     | Logical OR (at least one must be true) | `true \| false` | `true`  |
| `!`      | Logical NOT (negates truth value)      | `!true`         | `false` |

---

## **[5. Bitwise Operators](https://www.notion.so/Bitwise-Operators-18b0e3d4981580d6af3af9c3982777ac?pvs=21)**

Used for bitwise operations.

| Operator | Description           | Example         | Output |
| -------- | --------------------- | --------------- | ------ |
| `&`      | AND                   | `5 & 1`         | `1`    |
| `\|`     | OR                    | `5        \| 1` | `5`    |
| `^`      | XOR                   | `5 ^ 1`         | `4`    |
| `~`      | NOT                   | `~5`            | `-6`   |
| `<<`     | Left Shift            | `5 << 1`        | `10`   |
| `>>`     | Right Shift           | `5 >> 1`        | `2`    |
| `>>>`    | Zero-Fill Right Shift | `5 >>> 1`       | `2`    |

---

## **[6. Ternary (Conditional) Operator](https://www.notion.so/Ternary-Conditional-Operator-18b0e3d498158069813fc40faa73d760?pvs=21)**

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. Short-hand for if-else condition.

| Operator | Description         | Example                                | Output  |
| -------- | ------------------- | -------------------------------------- | ------- |
| `? :`    | If-else in one line | `let result = (5 > 2) ? "Yes" : "No";` | `"Yes"` |

---

## **[7. Type Operators](https://www.notion.so/Type-Operators-18b0e3d498158071a81dd76c82bad55a?pvs=21)**

Used to check data type.

| Operator     | Description                                   | Example               | Output     |
| ------------ | --------------------------------------------- | --------------------- | ---------- |
| `typeof`     | Returns the type of a variable                | `typeof "Hello"`      | `"string"` |
| `instanceof` | Checks if an object is an instance of a class | `[] instanceof Array` | `true`     |

---

## **[8. Spread & Rest Operators](https://www.notion.so/Spread-Rest-Operators-18b0e3d4981580299db4e4c69295aafc?pvs=21)**

Used for expanding or collecting elements.

| Operator | Description               | Example                                                                    | Output |
| -------- | ------------------------- | -------------------------------------------------------------------------- | ------ |
| `...`    | Spread (Expands elements) | `Math.max(...[1,2,3])`                                                     | `3`    |
| `...`    | Rest (Collects elements)  | `function sum(...args) { return args.reduce((a,b) => a + b); } sum(1,2,3)` | `6`    |

---

## **[9. Nullish Coalescing Operator (`??`)](https://www.notion.so/Nullish-Coalescing-Operator-18b0e3d4981580bd886bc623317aaf1b?pvs=21)**

Returns the right-hand value if the left-hand value is `null` or `undefined`.

| Operator | Description        | Example             | Output      |
| -------- | ------------------ | ------------------- | ----------- |
| `??`     | Nullish Coalescing | `null ?? "default"` | `"default"` |

---

## **[10. Optional Chaining Operator (`?.`)](https://www.notion.so/Optional-Chaining-Operator-18b0e3d4981580558bf4d5644f0fc8d3?pvs=21)**

Prevents errors when accessing properties of `null` or `undefined`.

| Operator | Description          | Example      | Output                            |
| -------- | -------------------- | ------------ | --------------------------------- |
| `?.`     | Safe Property Access | `user?.name` | `undefined` (if `user` is `null`) |

---

## **[11. String Operators](https://www.notion.so/String-Operators-18b0e3d4981580d6b6eed807b4acd4af?pvs=21)**

JavaScript provides operators specifically for working with strings.

- **`+` (Concatenation):** Combines two strings.

  ```jsx
  let h = 'Hello, ';
  let i = 'World!';
  console.log(h + i); // Output: "Hello, World!"
  ```

- **`+=` (Concatenation assignment):** Adds the right-hand string to the left-hand string and assigns the result to the left-hand string.

  ```jsx
  h += i; // Equivalent to h = h + i
  console.log(h); // Output: "Hello, World!";
  ```
