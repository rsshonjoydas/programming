# Stack and Heap

Let's clarify **Stack** and **Heap** in JavaScript memory management with a concise breakdown.

---

## 🧠 JavaScript Memory: Stack vs Heap

### 1. **Stack** – _Primitive storage & function calls_

**The stack is a linear data structure that stores:**

- **Primitive values** (numbers, strings, booleans, null, undefined, symbols, bigint)
- **Function calls** and their execution contexts
- **Local variables** and parameters

**Stack characteristics:**

- Fast allocation and deallocation
- Last-in-first-out (LIFO) access pattern
- Limited in size (can cause stack overflow errors)
- Automatically managed - variables are removed when they go out of scope

  ```javascript
  function example() {
    let x = 5; // stored on stack
    let name = 'John'; // stored on stack
    return x + 10;
  }
  ```

### 2. Heap – _Reference types & objects_

**The heap is where JavaScript stores:**

- **Objects** (including arrays, functions, dates, etc.)
- **Complex data structures**
- **Dynamically allocated memory**

**Heap characteristics:**

- Larger memory space available
- Slower allocation/deallocation than stack
- Non-linear memory layout
- Managed by garbage collection
- Variables on the stack hold references (pointers) to heap objects

  ```javascript
  function example() {
    let obj = { name: 'John', age: 25 }; // object stored in heap
    let arr = [1, 2, 3, 4, 5]; // array stored in heap
    // 'obj' and 'arr' variables (references) are on the stack
  }
  ```

### 📌 Key Distinction

- **Stack**: Fast, limited size, automatic cleanup, stores primitives and references
- **Heap**: Slower, larger capacity, garbage collected, stores objects and complex data

  | Feature    | Stack                   | Heap                       |
  | ---------- | ----------------------- | -------------------------- |
  | Structure  | LIFO                    | Free-form / dynamic        |
  | Speed      | Very fast               | Slower                     |
  | Data Types | Primitives, call frames | Objects, arrays, functions |
  | Lifetime   | Scoped to function      | Until dereferenced         |

---

### 📊 JavaScript Stack & Heap Execution Diagram

Let’s walk through a complete example with a **function call**, involving both **stack** and **heap**, and illustrate both in a **step-by-step diagram**.

---

#### 🧪 Code Example

```js
function createUser() {
  let name = 'Alice'; // primitive (stack)
  let user = { name: name }; // object (heap)
  return user;
}

let newUser = createUser(); // heap ref assigned to newUser
```

---

#### 🧠 Memory Diagram (Step-by-Step)

##### ✅ 1. **Global Stack Frame**

```text
Stack:
┌──────────────┐
│ newUser → 🢂 │  ← will point to heap (after return)
└──────────────┘

Heap:
(empty initially)
```

---

##### ✅ 2. **While createUser() is running**

```text
Stack:
┌────────────────────┐
│ createUser()       │
├────────────────────┤
│ name = "Alice"     │ ← primitive in stack
│ user → 🢂          │ ← ref to heap object
└────────────────────┘
┌────────────────────┐
│ global             │
├────────────────────┤
│ newUser = (waiting)│
└────────────────────┘

Heap:
┌────────────────────┐
│ { name: "Alice" }  │ ← user object
└────────────────────┘
```

---

##### ✅ 3. **After createUser() returns**

```text
Stack:
┌────────────────────┐
│ global             │
├────────────────────┤
│ newUser → 🢂       │ ← points to heap object
└────────────────────┘

Heap:
┌────────────────────┐
│ { name: "Alice" }  │ ← still alive
└────────────────────┘
```

> The stack frame of `createUser()` is gone, but the heap object remains because `newUser` holds a reference to it.

---

##### ⚠️ Key Notes

- Stack: function calls, primitive values.
- Heap: reference types (objects, arrays, functions).
- Heap memory persists if **referenced**, else garbage-collected.
