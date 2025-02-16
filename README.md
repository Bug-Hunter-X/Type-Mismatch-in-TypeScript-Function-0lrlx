# Type Mismatch in TypeScript Function

This repository demonstrates a common type mismatch error in TypeScript and its solution.

## Bug
The `add` function is defined to accept two numbers and return their sum. However, the code calls `add` with a string as the second argument, resulting in a type error.

## Solution
The solution involves ensuring that the second argument passed to the `add` function is a number. This can be achieved through type checking or explicit type conversion.