import { describe, it, expect } from "vitest";
import bubbleSort from "../sorting/bubbleSort.js";

const sortingAlgorithms = [
  { name: "Bubble Sort", fn: bubbleSort },
  // { name: "Quick Sort", fn: quickSort },
  // { name: "Merge Sort", fn: mergeSort },
];

const defaultTestCases = [
  { name: "Sorts array", input: [3, 1, 4, 1, 5], expected: [1, 1, 3, 4, 5] },
  {
    name: "Sorts already sorted array",
    input: [1, 2, 3, 4, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    name: "Sorts reverse sorted array",
    input: [5, 4, 3, 2, 1],
    expected: [1, 2, 3, 4, 5],
  },
  { name: "Hanldes a single element", input: [42], expected: [42] },
  { name: "Handles an empty array", input: [], expected: [] },
  {
    name: "Works with duplicate elements",
    input: [4, 2, 4, 3, 2, 1],
    expected: [1, 2, 2, 3, 4, 4],
  },
  {
    name: "Works with negative numbers",
    input: [3, -1, 4, -2],
    expected: [-2, -1, 3, 4],
  },
  {
    name: "Works with all numbers being the same",
    input: [4, 4, 4, 4],
    expected: [4, 4, 4, 4],
  },
  {
    name: "Works with strings",
    input: ["dog", "cat", "duck", "pig", "fish"],
    expected: ["cat", "dog", "duck", "fish", "pig"],
  },
  {
    name: "Works with floating points",
    input: [3.2, 1.1, 4.4, 2.8],
    expected: [1.1, 2.8, 3.2, 4.4],
  },
];

const comparatorTestCases = [
  {
    name: "Works with floating points",
    input: [3, 1, 4, 1, 5],
    compareFn: (a, b) => a < b,
    expected: [5, 4, 3, 1, 1],
  },
  {
    name: "Sorts objects by numeric property in descending order",
    input: [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
    ],
    compareFn: (a, b) => a.age < b.age,
    expected: [
      { name: "Charlie", age: 35 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
  },
];

sortingAlgorithms.forEach(({ name, fn }) => {
  describe(`${name}`, () => {
    defaultTestCases.forEach(({ name, input, expected }) => {
      it(name, () => {
        expect(fn([...input])).toEqual(expected); // Spread to avoid mutation
      });
    });

    comparatorTestCases.forEach(({ name, input, compareFn, expected }) => {
      it(name, () => {
        expect(fn([...input], compareFn)).toEqual(expected);
      });
    });
  });
});
