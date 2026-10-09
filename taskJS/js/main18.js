class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (b === undefined) {
      this.result = this.result + a;
    } else {
      this.result = a + b;
    }
    return this.result;
  }

  subtract(a, b) {
    if (b === undefined) {
      this.result = this.result - a;
    } else {
      this.result = a - b;
    }
    return this.result;
  }
  multiply(a, b) {
    if (b === undefined) {
      this.result = this.result * a;
    } else {
      this.result = a * b;
    }
    return this.result;
  }
  divide(a, b) {
    if (b === undefined) {
      this.result = this.result / a;
    } else {
      this.result = a / b;
    }
    return this.result;
  }

  displayResult() {
    console.log(`Result: ${this.result}`);
  }
}
const calculator = new Calculator();
calculator.add(5, 3);
calculator.displayResult();
calculator.subtract(2);
calculator.displayResult();
calculator.multiply(3, 4);
calculator.displayResult();
calculator.divide(4, 2);
calculator.displayResult();
