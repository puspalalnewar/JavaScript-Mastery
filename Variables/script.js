/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

// In this first example, x, y, and z are undeclared variables.
// They are automatically declared when first used:

x = 5;
y = 6;
z = x + y;

console.log(z);

// It is considered good programming practice to always declare variables before use.

/*
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
*/


// Q. When to Use var, let, or const?
// Ans : 
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

let val;
console.log(val) // Output : undefined
// In JavaScript, when a variable is declared with let but not initialized, it is automatically assigned the value of undefined. This means the variable exists in memory and can be accessed, but it doesn't hold any meaningful value until explicitly assigned.

// const myConstant; 
// Throws SyntaxError: Missing initializer in const declaration
// The reason for this difference lies in the intended use cases of let and const. let is designed for variables that may change their value during the program's execution, while const is for values that should remain constant. Enforcing initialization for const ensures that these variables are always assigned a valid value and prevents accidental reassignment later in the code.
