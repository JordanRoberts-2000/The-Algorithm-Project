export default function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(leftArr: number[], rightArr: number[]) {
  const mergedArr = [];
  let i = 0,
    j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      mergedArr.push(leftArr[i++]);
    } else {
      mergedArr.push(rightArr[j++]);
    }
  }

  return mergedArr.concat(leftArr.slice(i), rightArr.slice(j));
}
