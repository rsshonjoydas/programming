# 🧠 JavaScript Type Conversion

JavaScript's type conversion system is dynamic and powerful, but often confusing. It includes both **implicit coercion** and **explicit casting**, each with subtle rules and behaviors that affect performance, readability, and reliability.

---

## 🔁 Implicit Type Conversion (Type Coercion)

JavaScript performs automatic type conversions in certain operations and expressions.

### 📝 Coercion to String

Occurs primarily with the `+` operator if either operand is a string:

```js
5 + '3'; // "53"
'Hello' + 42; // "Hello42"
true + ' story'; // "true story"
```

### 🔢 Coercion to Number

Any operation except `+` will typically convert operands to numbers:

```js
'5' - 3; // 2
'10' * '2'; // 20
'15' / 3; // 5
'42' * 1; // 42
```

Unary `+` operator forces number conversion:

```js
+'123'; // 123
+true; // 1
+null; // 0
+undefined; // NaN
```

### 🔁 Coercion to Boolean

Truthy/falsy evaluation in logical or conditional expressions:

```js
if ('hello') {
} // true (non-empty string)
if (0) {
} // false (0 is falsy)
!!5; // true
!!null; // false
```

### ⚖️ Loose vs Strict Equality

```js
'5' == 5; // true  (type coercion)
'5' === 5; // false (no coercion)
null == undefined; // true
0 == false; // true
'' == false; // true
```

Use `Object.is()` for edge cases:

```js
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
```

---

## 🧰 Explicit Type Conversion (Casting)

You manually convert types using built-in functions or operators.

### 🔄 To String

```js
String(123); // "123"
(123).toString(); // "123"
String(null); // "null"
true.toString(); // "true"
`${123}`; // "123" (template literals)
```

### 🔢 To Number

```js
Number('123'); // 123
parseInt('123px'); // 123
parseFloat('12.34'); // 12.34
Number(''); // 0
Number(null); // 0
Number(undefined); // NaN
```

Unary plus `+` is a shorthand:

```js
+'42'; // 42
+false; // 0
```

### 🔁 To Boolean

```js
Boolean(0); // false
Boolean(''); // false
Boolean('false'); // true
Boolean([]); // true
Boolean({}); // true
!!value; // preferred coercion idiom
```

---

## 🚨 Falsy Values in JS

Only these values are falsy:

- `false`
- `0`, `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy, including:

- `[]` (empty array)
- `{}` (empty object)
- `'0'` (non-empty string)

---

## 📦 Object Conversion Mechanics

Objects are first coerced using `valueOf()` and `toString()`.

```js
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return 'hello';
  },
};

obj + 1; // 43 → calls valueOf()
obj + ''; // "hello" → calls toString()
String(obj); // "hello"
```

### ⚙️ ToPrimitive Conversion Algorithm

JavaScript uses internal `[[ToPrimitive]](hint)` algorithm:

1. If hint is "number": try `valueOf()`, fallback to `toString()`
2. If hint is "string": try `toString()`, fallback to `valueOf()`

---

## 🧪 Gotchas and Quirks

```js
[] + []           // ""        (string concat)
[] + {}           // "[object Object]"
{} + []           // 0         (block + array)
[] == 0           // true      ([] → "" → 0)
[] == false       // true      ([] → "" → 0, false → 0)
[1] == "1"        // true
null == undefined // true
true + true       // 2
'2' + '2'         // "22"
'2' - '2'         // 0
```

---

## 📏 Type Conversion Table

| Value       | Number() | String()           | Boolean() |
| ----------- | -------- | ------------------ | --------- |
| `"123"`     | 123      | "123"              | true      |
| `""`        | 0        | ""                 | false     |
| `true`      | 1        | "true"             | true      |
| `false`     | 0        | "false"            | false     |
| `null`      | 0        | "null"             | false     |
| `undefined` | NaN      | "undefined"        | false     |
| `[1,2]`     | NaN      | "1,2"              | true      |
| `[]`        | 0        | ""                 | true      |
| `{}`        | NaN      | "\[object Object]" | true      |

---

## ✅ Best Practices

- Use `===` and `!==` instead of `==` and `!=`
- Prefer explicit conversion using `Number()`, `String()`, `Boolean()`
- Use `!!` for boolean casting
- Avoid comparing different types unless intentional
- Understand how JavaScript treats `[]`, `{}`, and functions in coercion

```js
if (value != null) { ... } // safe null/undefined check
const num = Number(input); // explicit cast
const isActive = !!flag;   // boolean coercion
```

Type conversion can be leveraged safely and powerfully when understood thoroughly. Use it intentionally—not accidentally.
