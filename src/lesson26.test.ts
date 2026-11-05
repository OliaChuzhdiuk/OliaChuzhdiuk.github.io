import { describe, it, expect } from "vitest";
import { CanvasNode } from "./lesson26.js";

describe("CanvasNode", () => {
  it("Should store some basic properties", () => {
    const canvasNode = new CanvasNode();

    // expect(canvasNode.x).toEqual(0);
    // expect(canvasNode.y).toEqual(0);

    expect(canvasNode.position).toEqual({ x: 0, y: 0 });

    canvasNode.move(10, 20);

    // expect(canvasNode.x).toEqual(10);
    // expect(canvasNode.y).toEqual(20);

    expect(canvasNode.position).toEqual({ x: 10, y: 20 });
  });
  it("Should be able to receive an initial position", () => {
    const canvasNode = new CanvasNode({
      x: 10,
      y: 20,
    });

    expect(canvasNode.position).toEqual({ x: 10, y: 20 });
  });
});
