"use strict";

// Task 1
const message1 = "Hello";
const message2 = "JavaScript!";
alert(message1 + " " + message2);

// Task 2
alert(
  "The sum of X and Y is: " +
    (Number(prompt("Number X?", "")) + Number(prompt("number Y?", ""))),
);

// Task 3
const number = Number(prompt("Write number?", ""));

if (number > 3) {
  alert("The number is too long");
} else if (number < 3) {
  alert("The number is short");
} else {
  alert("Congratulations, You did it!");
}

// Task 4

const day = prompt("What day is today?", "").toLowerCase();

if (day === "monday" || day === "понеділок") {
  alert("Start of the work week");
} else if (day === "friday" || day === "п'ятниця") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

// switch (day) {
//   case "monday":
//   case "понеділок":
//     alert("Start of the work week");
//     break;

//   case "friday":
//   case "п'ятниця":
//     alert("End of the work week!");
//     break;

//   default:
//     alert("A regular day");
// }

// Task 5

const score = Number(prompt("Write your score?", ""));

let grade;

if (score < 50) {
  grade = "F";
} else if (score < 70) {
  grade = "D";
} else if (score < 80) {
  grade = "C";
} else if (score < 90) {
  grade = "B";
} else {
  grade = "A";
}

alert(`You have ${grade}`);
// console.log(`You have ${grade}`);
