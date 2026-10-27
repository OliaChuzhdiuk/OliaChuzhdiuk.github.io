// Task1
const example1: string = "Hello World!";
console.log(example1);
const example2: number = 42;
console.log(example2);
// Type 'number' is not assignable to type 'string'.
const example3: boolean = true;
console.log(example3);
// Type 'boolean' is not assignable to type 'string'.
const example4: symbol = Symbol();
console.log(example4);
// Type 'symbol' is not assignable to type 'string'.
const example5: bigint = 123n;
console.log(example5);
// Type 'bigint' is not assignable to type 'string'.

// Task2
const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};

const resultConcat = concatTwoStrings("Hello", "World");
console.log(resultConcat);

// Task3

const add = (a: number, b: number): number => {
  return a + b;
  // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};

const result = add(4, 5);
const result2 = add(10, 20);
console.log(result);
console.log(result2);
