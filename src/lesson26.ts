export class CanvasNode {
  //   readonly x: number = 0;
  //   readonly y: number = 0;
  //   readonly x: number;
  //   readonly y: number;
  //   x = 0;
  //   y = 0;

  #x: number;
  #y: number;

  //   constructor(position?: { x: number; y: number }) {
  //     this.x = position?.x ?? 0;
  //     this.y = position?.y ?? 0;
  //   }

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  //   get position(): { x: number; y: number } {
  //     return { x: this.x, y: this.y };
  //   }

  get position(): { x: number; y: number } {
    return { x: this.#x, y: this.#y };
  }

  set position(position: { x: number; y: number }) {
    this.#x = position.x;
    this.#y = position.y;
  }

  //   move(x: number, y: number): void {
  //     this.x = x;
  //     this.y = y;
  //   }

  move(x: number, y: number): void {
    this.#x = x;
    this.#y = y;
  }
}
//Task 1
const canvasNode = new CanvasNode();
// console.log(canvasNode.x);
// console.log(canvasNode.y);
console.log(canvasNode.position.x);
console.log(canvasNode.position.y);
//Task2
canvasNode.move(10, 20);
// console.log(canvasNode.x);
// console.log(canvasNode.y);
console.log(canvasNode.position.x);
console.log(canvasNode.position.y);
//Task3
// console.log(canvasNode.position.x);
// console.log(canvasNode.position.y);

//Task4
canvasNode.position = { x: 30, y: 40 };
console.log(canvasNode.position.x);
console.log(canvasNode.position.y);
