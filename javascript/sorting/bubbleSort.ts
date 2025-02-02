export default function bubbleSort<T>(
  arr: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a > b
): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j]!, arr[j + 1]!)) {
        // '!' is for when tsconfig: "noUncheckedIndexedAccess": true,
        [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
