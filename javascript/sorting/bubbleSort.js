var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function bubbleSort(arr, comparator) {
    var _a;
    if (comparator === void 0) { comparator = function (a, b) { return a > b; }; }
    var sortedArr = __spreadArray([], arr, true);
    var swapped = false;
    for (var i = 0; i < sortedArr.length - 1; i++) {
        for (var j = 0; j < sortedArr.length - 1 - i; j++) {
            if (comparator(sortedArr[j], sortedArr[j + 1])) {
                _a = [sortedArr[j + 1], sortedArr[j]], sortedArr[j] = _a[0], sortedArr[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return sortedArr;
}
console.log(bubbleSort([4, 6, 3, 2, 6, 7, 4, 2]));
