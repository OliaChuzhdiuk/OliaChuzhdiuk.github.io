// Task 1

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

const checkAge = (age) => (age > 18 ? true : confirm("Батьки дозволили?"));
// const checkAge = (age) => age > 18 || confirm("Батьки дозволили?");

// Task 2
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// function min(a, b) {
//   return a < b ? a : b;
// }

// Task 3
const num = Number(prompt("Write number?", ""));
const power = Number(prompt("Write power?", ""));

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

alert(pow(num, power));

// Task 4

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  () => {
    alert("Ви погодились.");
  },
  () => {
    alert("Ви скасували виконання.");
  },
);
