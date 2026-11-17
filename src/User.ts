export default class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, I ${this.name}`;
  }
}
