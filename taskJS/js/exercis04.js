// Task 1

const user = {
  name: "Іван",
  surname: "Смит",
};

user.name = "Петро";
console.log(user);

delete user.name;
console.log(user);

// Task 2

let schedule = {};
let schedule2 = {
  "8:30": "Вставай",
};

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}
console.log(isEmpty(schedule));
console.log(isEmpty(schedule2));
// alert(isEmpty(schedule));
// alert(isEmpty(schedule2));

// Task 3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(salaries) {
  const sum = Object.values(salaries).reduce((accumulator, currentValue) => {
    return (accumulator += currentValue);
  }, 0);

  return sum;
}

console.log(sumSalaries(salaries));

// Task 4

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
