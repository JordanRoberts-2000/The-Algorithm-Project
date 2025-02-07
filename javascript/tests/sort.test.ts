import { describe, it, expect } from "vitest";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import quickSort from "../sorting/quickSort";
import mergeSort from "../sorting/mergeSort";
import insertionSort from "../sorting/insertionSort";

const sortingAlgorithms = [
  { name: "Bubble Sort", fn: bubbleSort },
  { name: "Selection Sort", fn: selectionSort },
  { name: "Quick Sort", fn: quickSort },
  { name: "Merge Sort", fn: mergeSort },
  { name: "Insertion Sort", fn: insertionSort },
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
];

sortingAlgorithms.forEach(({ name, fn }) => {
  describe(`${name}`, () => {
    defaultTestCases.forEach(({ name, input, expected }) => {
      it(name, () => {
        expect(fn([...input])).toEqual(expected); // Spread to avoid mutation
      });
    });
  });
});
