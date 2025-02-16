function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: both arguments are numbers

const num2 = parseFloat('2'); // Type conversion
const result2 = add(1, num2); // Correct after conversion

//Using type assertion (less safe):
const result3 = add(1, <number> '2'); 