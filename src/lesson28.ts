// Task 1
class Worker {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  work() {
    return `${this.name} is working`;
  }
}

class Developer extends Worker {
  programmingLanguage: string;
  constructor(name: string, programmingLanguage: string) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }
  work(): string {
    return `${super.work()} with ${this.programmingLanguage}`;
  }
}

const dev = new Developer("John", "TypeScript").work();
console.log(dev);

// Task 2
class Rectangle {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  protected getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public side: number;
  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
  public describe() {
    return `Square with side ${this.side} has area ${super.getArea()}`;
  }
}

const square = new Square(10);
console.log(square.describe());

// Task 3

class BankAccount {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    if (amount > this.balance) {
      throw new Error();
    }
    if (amount < 0) {
      throw new Error();
    }
  }
}

class SavingsAccount extends BankAccount {
  addInterest(rate: number): void {
    this.balance += this.balance * (rate / 100);
  }
  getBalance(): number {
    return this.balance;
  }
}
const savings = new SavingsAccount(1000);
savings.deposit(500);
savings.addInterest(5);
console.log(`Savings Account Balance: ${savings.getBalance()}`);
