function bubbleSort<T>(
  arr: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a > b
): T[] {
  let sortedArr = [...arr];
  let swapped: boolean = false;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (comparator(sortedArr[j], sortedArr[j + 1])) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return sortedArr;
}

console.log(bubbleSort([4, 6, 3, 2, 6, 7, 4, 2]));
