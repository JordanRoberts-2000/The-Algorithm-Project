import { describe, it, expect } from "vitest";
import bubbleSort from "./bubbleSort";

describe("Bubble Sort Optimization", () => {
  it("should break early when array is already sorted", () => {
    let comparisons = 0;
    const arr = [1, 2, 3, 4, 5];

    const comparator = (a: number, b: number) => {
      comparisons++;
      return a > b;
    };

    bubbleSort(arr, comparator);

    expect(comparisons).toBe(4);
  });
});
