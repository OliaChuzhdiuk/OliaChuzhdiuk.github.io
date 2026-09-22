// Task 1
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

let y = 0;
do {
  console.log(fruits[y]);
  y++;
} while (y < fruits.length);

// Task 2

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let n = 0; n < Numbs.length; n++) {
  if (Numbs[n] % 2 === 0) {
    console.log(Numbs[n]);
  }
}

// Task 3

const names = ["Batman"];

names.push("Joker");
names.unshift("Bane");
if (!names.includes("Alfred")) {
  names.push("Alfred");
}
if (names.includes("Batman")) {
  const index = names.indexOf("Batman");
  names.splice(index, 1);
}

console.log(names);

// Task 4

function sumInput() {
  const numbers = [];
  while (true) {
    const input = prompt("Введіть число", "");
    if (input === null || input.trim() === "" || isNaN(input)) {
      break;
    }
    const number = Number(input);
    numbers.push(number);
  }
  console.log(numbers);
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sumInput());

// Task 5

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles.splice(1, 1, "Classics");
console.log(styles);
const firstElement = styles.shift();
console.log(firstElement);
styles.unshift("Rap", "Reggae");
console.log(styles);
