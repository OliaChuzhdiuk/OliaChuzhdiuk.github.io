// Task 1
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArr = wrapInArray(42);
console.log(numArr);
const strArr = wrapInArray("hello");
console.log(strArr);

// Task 2

interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

getLength([1, 2, 3]);
getLength("TypeScript");
// getLength(123);

// Task 3
function first<T>(coll: Array<T>): T | null {
  return coll[0] ?? null;
}

first([]);
first([3, 2]);
first(["code-basics", "hexlet"]);

// Task 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Олена" };
getProperty(user, "name");
// getProperty(user, "age");
