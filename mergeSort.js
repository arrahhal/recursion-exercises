/**
 * mergeSort uses the merge sort algorithm to sort the given array
 * @param {array} array unordered array
 * @returns ordered array
 */

function mergeSort(array) {
  if (array.length < 2) return array;

  const left = mergeSort(array.slice(0, array.length / 2));
  const right = mergeSort(array.slice(array.length / 2));
  return merge(left, right);
}

/**
 *  merge function merges tow arrays by comparing its elements and sort them
 * @param {array} leftArr the left side of the original array
 * @param {array} rightArr the right side of the original array
 * @returns sorted array
 */
function merge(leftArr, rightArr) {
  const ordered = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      ordered.push(leftArr.shift());
    } else {
      ordered.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    ordered.push(leftArr.shift());
  }

  while (rightArr.length) {
    ordered.push(rightArr.shift());
  }

  return ordered;
}

const array1 = [10, 5, 2, 7, 3, 6, 1, 9, 4, 8];
const array2 = [3, 2, 1];
const array3 = [1, 2, 3, 4, 5];
const array4 = [5, 4, 3, 2, 1];
const array5 = [1];
const array6 = [];

console.log(`mergeSort(${array1}):`, mergeSort(array1));
console.log(`mergeSort(${array2}):`, mergeSort(array2));
console.log(`mergeSort(${array3}):`, mergeSort(array3));
console.log(`mergeSort(${array4}):`, mergeSort(array4));
console.log(`mergeSort(${array5}):`, mergeSort(array5));
console.log(`mergeSort(${array6}):`, mergeSort(array6));
