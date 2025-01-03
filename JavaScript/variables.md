### JavaScript Variables

A variable is a container for storing data values. Variables are fundamental in JavaScript as they hold information that can be used and manipulated throughout your code. JavaScript variables can hold different data types, such as numbers, strings, objects, or more.

### **Rules for Variable Names in JavaScript**

Variable names must follow specific rules and conventions to ensure the code runs correctly and is easy to read. Here are the key rules and guidelines for naming variables in JavaScript:

1. **Allowed Characters**:
   - Variable names can include letters (`a-z`, `A-Z`), digits (`0-9`), underscores (`_`), and dollar signs (`$`).
   - Example: `myVariable`, `_temp`, `$price`
2. **Cannot Start with a Digit**:
   - Variable names must start with a letter, underscore, or dollar sign, not a digit.
   - Valid: `variable1`, `_var`, `$price`
   - Invalid: `1variable` (starts with a digit)
3. **Case Sensitivity**:

   - JavaScript is case-sensitive, meaning `variable`, `Variable`, and `VARIABLE` are considered different variables.
   - Example:

     ```js
     let x = 10;
     let X = 20;
     console.log(x); // Output: 10
     console.log(X); // Output: 20
     ```

4. **No Spaces Allowed**:
   - Spaces are not allowed in variable names; use camelCase or underscores (`_`) to separate words.
   - Valid: `myVariable`, `my_variable`
   - Invalid: `my variable` (contains space)
5. **Cannot Use JavaScript Reserved Keywords**:

   - Variable names cannot be JavaScript reserved keywords such as `if`, `else`, `while`, `for`, `var`, `let`, `const`, `function`, etc.
   - Example:

     ```js
     // Invalid: let let = 5;  // SyntaxError: Unexpected token 'let'
     ```

6. **Avoid Special Characters**:
   - Variable names cannot contain special characters like `@`, `#`, `%`, `&`, etc.
   - Valid: `var_1`, `$price`
   - Invalid: `var$1!` (contains `!`)
