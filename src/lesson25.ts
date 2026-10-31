// Task 1
const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName("John", "Doe");
console.log(result);
const result2 = concatName("John");
console.log(result2);

// Task 2

const concatTwoStrings = (a: string, b: string): string => {
  return [a, b].join(" ");
};

const resultConcat = concatTwoStrings("Hello", "World");
console.log(resultConcat);

// Task 3

const add = (a: number, b: number) => {
  return a + b;
  // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};

const resultAdd = add(5, 5);
console.log(resultAdd);

// Task 4
type User = {
  id: string;
  name: string;
};

const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => User,
) => {
  // Parameter 'makeChange' implicitly has an 'any' type.
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

const users: User[] = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) => {
  return { ...user, name: "Waqas" };
});
