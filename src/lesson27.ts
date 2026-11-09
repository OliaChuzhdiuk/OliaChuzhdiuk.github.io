//Task 1
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  readonly createdAt: Date | string;
}

const myUser: User = {
  id: 1,
  name: "Olha",
  email: "olha@gmail.com",
  phoneNumber: "+380991234567",
  createdAt: new Date(),
};

console.log(myUser);
// myUser.id = 2;
// myUser.createdAt = new Date();

//Task 2
interface StringFilterFn {
  (array: string[], criterion: string): string[];
}

const filterLength: StringFilterFn = (array, criterion) => {
  const length = Number(criterion);

  return array.filter((str) => str.length > length);
};

const fruits = [
  "apple",
  "banana",
  "kiwi",
  "orange",
  "watermelon",
  "grape",
  "pineapple",
  "pear",
  "strawberry",
  "mango",
  "blueberry",
  "lemon",
  "cherry",
  "peach",
  "apricot",
];
console.log(filterLength(fruits, "4"));
console.log(filterLength(fruits, "6"));
console.log(filterLength(fruits, "8"));
