# Comments

JavaScript comments are essential for explaining code, improving readability, and generating documentation. Here's a comprehensive breakdown:

## **Types of Comments**

1. **Single-line Comments**:

   - Syntax: `// Comment text`
   - Example:

     ```javascript
     // Calculate total price
     let total = price * quantity;
     ```

   - Use for short explanations or notes on a single line.

2. **Multi-line (Block) Comments**:

   - Syntax:

     ```javascript
     /*
     This is a multi-line comment.
     It spans multiple lines.
     */
     ```

   - Example:

     ```javascript
     /*
     Validates user input and returns sanitized data.
     Throws an error if validation fails.
     */
     function validateInput(input) { ... }
     ```

   - **Cannot be nested** (e.g., `/* /* inner */ */` will cause an error).

3. **Documentation (JSDoc) Comments**:

   - Syntax: `/** ... */` with tags like `@param`, `@returns`, `@example`.
   - Example:

     ```javascript
     /**
      * Calculates the area of a circle.
      * @param {number} radius - The circle's radius.
      * @returns {number} The area.
      */
     function getArea(radius) {
       return Math.PI * radius ** 2;
     }
     ```

   - Used to generate API documentation via tools like [JSDoc](https://jsdoc.app/) or TypeDoc.

---

## **Best Practices**

1. **Explain "Why," Not "What"**:

   - Avoid redundancy:

     ```javascript
     // Bad: "Increments i by 1"
     i++;
     ```

   - Good:

     ```javascript
     // Avoid off-by-one error by aligning with 1-based indexing
     i++;
     ```

2. **Keep Comments Updated**:
   Outdated comments mislead readers. Update them when code changes.

3. **Avoid Commented-Out Code**:
   Delete unused code instead of commenting it. Use version control (e.g., Git) for history.

4. **Use JSDoc for Public APIs**:
   Document parameters, return values, and examples for functions/methods.

---

## **Common Pitfalls**

- **Over-Commenting**: Clutters code. Trust readable variable/function names.
- **Under-Commenting**: Leaves complex logic unexplained.
- **Nesting Block Comments**: Causes syntax errors (e.g., `/* /* nested */ */`).

---

## **Use Cases**

| Use Case                    | Recommended Comment Type |
| --------------------------- | ------------------------ |
| Disabling one line of code  | `//`                     |
| Explaining a function block | `/* */` or `/** */`      |
| Documentation for tools     | `/** */` (JSDoc)         |

## **Tools & Integration**

- **Linters**: Tools like ESLint enforce rules (e.g., `// TODO:` flags).
- **IDEs**: Highlight `TODO`/`FIXME` comments for task tracking.
- **Documentation Generators**: Convert JSDoc comments into HTML/PDF docs.

## **Miscellaneous Notes**

- **Legacy HTML Comments**: `<!-- -->` is **not** JS syntax but was used in ancient scripts to hide code from old browsers. Avoid in modern JS.
- **Regular Expressions**: Comments in regex (e.g., `//`) are part of the pattern, not JS comments.
- **No Nesting**: Block comments cannot be nested in JavaScript.
