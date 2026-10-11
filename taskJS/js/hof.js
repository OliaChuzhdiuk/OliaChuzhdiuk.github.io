"use strict";
// Task 1
function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}
// sum() - це функція додавання.
function sum(n1, n2) {
  return n1 + n2;
}

// multiply() - це функція множення.

function multiply(n1, n2) {
  return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

// Task 2

let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(
    `name: ${name} | index: ${index} | array: ${JSON.stringify(array)}`,
  );
});

// Display the student information in the HTML page.

const studentsInfo = document.querySelector("#student-info");

student_names.map((name, index, array) => {
  studentsInfo.innerHTML += `
    <div class="student-info">
      <p>Name: ${name}</p>
      <p>Index: ${index}</p>
      <p>Array: ${JSON.stringify(array)}</p>
    </div>
  `;
});

// Task 3

let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];

students_information.map((student) => {
  console.log(
    `name: ${student.name} 
    | degree: ${student.degree}  
    | percent: ${((student.degree / 600) * 100).toFixed(1)}%`,
  );
});

// Display the student information in the HTML page.
const studentsContainer = document.querySelector("#students");

students_information.map((student) => {
  studentsContainer.innerHTML += `
    <div class="student">
      <p>Name: ${student.name}</p>
      <p>Degree: ${student.degree}</p>
      <p>Percent: ${((student.degree / 600) * 100).toFixed(1)}%</p>
    </div>
  `;
});
