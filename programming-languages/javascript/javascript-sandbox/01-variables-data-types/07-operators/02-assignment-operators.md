# Assignment Operators

**Assignment operators in JavaScript assign values to `variables`**

---

## **1. Basic Assignment (`=`)**

Assigns the right-hand value to the left-hand variable.

```jsx
let a = 10; // a is now 10
```

---

## **2. Compound Assignment Operators**

These combine arithmetic operations with assignment.

| Operator | Example    | Equivalent To | Description                |
| -------- | ---------- | ------------- | -------------------------- |
| `+=`     | `a += 5;`  | `a = a + 5;`  | Adds and assigns           |
| `-=`     | `a -= 5;`  | `a = a - 5;`  | Subtracts and assigns      |
| `*=`     | `a *= 5;`  | `a = a * 5;`  | Multiplies and assigns     |
| `/=`     | `a /= 5;`  | `a = a / 5;`  | Divides and assigns        |
| `%=`     | `a %= 5;`  | `a = a % 5;`  | Modulus and assigns        |
| `**=`    | `a **= 2;` | `a = a ** 2;` | Exponentiation and assigns |

---

**Detailed Explanation with Examples:**

1. **Addition Assignment (`+=`)**

   ```jsx
   let a = 10;
   a += 5; // Equivalent to a = a + 5;
   console.log(a); // Output: 15
   ```

2. **Subtraction Assignment (`-=`)**

   ```jsx
   let a = 10;
   a -= 5; // Equivalent to a = a - 5;
   console.log(a); // Output: 5
   ```

3. **Multiplication Assignment (`*=`)**

   ```jsx
   let a = 10;
   a *= 5; // Equivalent to a = a * 5;
   console.log(a); // Output: 50
   ```

4. **Division Assignment (`/=`)**

   ```jsx
   let a = 10;
   a /= 2; // Equivalent to a = a / 2;
   console.log(a); // Output: 5
   ```

5. **Modulus Assignment (`%=`)**

   ```jsx
   let a = 10;
   a %= 3; // Equivalent to a = a % 3;
   console.log(a); // Output: 1
   ```

6. **Exponentiation Assignment (`**=`)\*\*

   ```jsx
   let a = 2;
   a **= 3; // Equivalent to a = a ** 3;
   console.log(a); // Output: 8
   ```

---

## **3. Bitwise Assignment Operators**

These apply bitwise operations before assigning.

| Operator | Example                 | Equivalent To         | Description                      |
| -------- | ----------------------- | --------------------- | -------------------------------- |
| `&=`     | `a &= 5;`               | `a = a & 5;`          | Bitwise AND and assigns          |
| `\| =`   | `a             \| = 5;` | `a = a         \| 5;` | Bitwise OR and assigns           |
| `^=`     | `a ^= 5;`               | `a = a ^ 5;`          | Bitwise XOR and assigns          |
| `<<=`    | `a <<= 2;`              | `a = a << 2;`         | Left shift and assigns           |
| `>>=`    | `a >>= 2;`              | `a = a >> 2;`         | Right shift and assigns          |
| `>>>=`   | `a >>>= 2;`             | `a = a >>> 2;`        | Unsigned right shift and assigns |

---

**Detailed Explanation with Examples:**

1. **Bitwise AND Assignment (`&=`)**

   ```jsx
   let x = 5; // 5 in binary:  0101
   x &= 3; // 3 in binary:  0011
   console.log(x); // Output: 1 (0001)
   ```

2. **Bitwise OR Assignment (`|=`)**

   ```jsx
   let x = 5; // 5 in binary:  0101
   x |= 3; // 3 in binary:  0011
   console.log(x); // Output: 7 (0111)
   ```

3. **Bitwise XOR Assignment (`^=`)**

   ```jsx
   let x = 5; // 5 in binary:  0101
   x ^= 3; // 3 in binary:  0011
   console.log(x); // Output: 6 (0110)
   ```

4. **Left Shift Assignment (`<<=`)**

   ```jsx
   let x = 5; // 5 in binary:  0101
   x <<= 2; // Shift left by 2 (adds two 0s to the right)
   console.log(x); // Output: 20 (10100)
   ```

5. **Right Shift Assignment (`>>=`)**

   ```jsx
   let x = 20; // 20 in binary: 10100
   x >>= 2; // Shift right by 2 (removes two rightmost bits)
   console.log(x); // Output: 5 (0101)
   ```

6. **Unsigned Right Shift Assignment (`>>>=`)**

   ```jsx
   let x = -20;
   x >>>= 2;
   console.log(x); // Output: 1073741819 (depends on system, treats negative as unsigned)
   ```

---

## **4. Logical Assignment Operators (ES2021+)**

These combine logical operations with assignment.

| Operator | Example      | Equivalent To                                 | Description                              |
| -------- | ------------ | --------------------------------------------- | ---------------------------------------- |
| `&&=`    | `a &&= b;`   | `if (a) a = b;`                               | Assigns if `a` is truthy                 |
| `\|\| =` | `a\|\| = b;` | `if (!a) a = b;`                              | Assigns only if `a` is falsy             |
| `??=`    | `a ??= b;`   | `if (a === null  \|\| a === undefined) a = b` | Assigns only if `a` is null or undefined |

---

**Detailed Explanation with Examples:**

1. **Logical AND Assignment (`&&=`) - _(ES2021+)_**
   Assigns the right-hand value **only if** the left-hand value is **truthy**.

   ```jsx
   let a = 10;
   a &&= 5; // Equivalent to a = a && 5;
   console.log(a); // Output: 5
   ```

2. **Logical OR Assignment (`||=`) - _(ES2021+)_**
   Assigns the right-hand value **only if** the left-hand value is **falsy** (`false`, `0`, `''`, `null`, `undefined`, `NaN`).

   ```jsx
   let a = null;
   a ||= 10; // a becomes 10 (because null is falsy)

   let b = 5;
   b ||= 20; // b remains 5 (because 5 is truthy)
   ```

3. **Nullish Coalescing Assignment (`??=`) - _(ES2021+)_**
   Assigns the right-hand value **only if** the left-hand value is **null** or **undefined**.

   ```jsx
   let p = null;
   p ??= 30; // p becomes 30 (because it's null)

   let q = 0;
   q ??= 40; // q remains 0 (because 0 is not null/undefined)
   ```

---
