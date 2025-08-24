# Arithmetic Operators

Arithmetic operators in JavaScript are used to perform mathematical calculations on numbers.

---

## **List of Arithmetic Operators**

| Operator | Description         | Example          | Output |
| -------- | ------------------- | ---------------- | ------ |
| `+`      | Addition            | `5 + 2`          | `7`    |
| `-`      | Subtraction         | `5 - 2`          | `3`    |
| `*`      | Multiplication      | `5 * 2`          | `10`   |
| `/`      | Division            | `5 / 2`          | `2.5`  |
| `%`      | Modulus (Remainder) | `5 % 2`          | `1`    |
| `**`     | Exponentiation      | `5 ** 2`         | `25`   |
| `++`     | Increment           | `let a = 5; a++` | `6`    |
| `--`     | Decrement           | `let a = 5; a--` | `4`    |

---

## **Examples of Arithmetic Operators**

### **1. Addition (`+`)**

```jsx
let sum = 10 + 5;
console.log(sum); // Output: 15
```

### **2. Subtraction (`-`)**

```jsx
let difference = 10 - 5;
console.log(difference); // Output: 5
```

### **3. Multiplication (`*`)**

```jsx
let product = 10 * 5;
console.log(product); // Output: 50
```

### **4. Division (`/`)**

```jsx
let quotient = 10 / 2;
console.log(quotient); // Output: 5
```

### **5. Modulus (`%`)**

```jsx
let remainder = 10 % 3;
console.log(remainder); // Output: 1
```

### **6. Exponentiation (`*`)**

```jsx
let power = 2 ** 3;
console.log(power); // Output: 8
```

### **7. Increment (`++`)**

```jsx
let a = 5;
a++; // Increments by 1
console.log(a); // Output: 6
```

### **8. Decrement (`-`)**

```jsx
let b = 5;
b--; // Decrements by 1
console.log(b); // Output: 4
```

---

## **Pre-Increment vs Post-Increment**

### **Post-Increment (`a++`)**

```jsx
let x = 5;
let y = x++;
console.log(x); // Output: 6
console.log(y); // Output: 5 (value before increment)
```

### **Pre-Increment (`++a`)**

```jsx
let x = 5;
let y = ++x;
console.log(x); // Output: 6
console.log(y); // Output: 6 (value after increment)
```

---

## **Pre-Decrement vs Post-Decrement**

### **Post-Decrement (`a--`)**

```jsx
let x = 5;
let y = x--;
console.log(x); // Output: 4
console.log(y); // Output: 5 (value before decrement)
```

### **Pre-Decrement (`-a`)**

```jsx
let x = 5;
let y = --x;
console.log(x); // Output: 4
console.log(y); // Output: 4 (value after decrement)
```

---

## **Conclusion**

- **Addition (`+`)**: Adds numbers.
- **Subtraction (`-`)**: Subtracts numbers.
- **Multiplication (`*`)**: Multiplies numbers.
- **Division (`/`)**: Divides numbers.
- **Modulus (`%`)**: Returns the remainder.
- **Exponentiation (`*`)**: Raises a number to a power.
- **Increment (`++`)**: Increases a number by 1.
- **Decrement (`-`)**: Decreases a number by 1.
