function partition(arr, low, high, compare) {
  let pivotIndex = low + 1;
  for (let i = pivotIndex; i < high; i++) {
    if (compare(arr[i], arr[low])) {
      // Swap the number less than the pivot
      swap(arr, i, pivotIndex);
      pivotIndex += 1;
    }
  }
  // Place the pivot to its correct position
  swap(arr, pivotIndex - 1, low);
  // Return pivot's position
  return pivotIndex - 1;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * O(n log n) time best
 * O(n^2) time worst
 * @param {*} arr
 * @param {*} low
 * @param {*} high
 * @param {*} compare
 */
function quickSort(arr, low, high, compare = (l, r) => l < r) {
  if (high - low > 0) {
    // Partition the array
    let mid = partition(arr, low, high, compare);
    // Recursively sort the left half
    quickSort(arr, low, mid, compare);
    // Recursively sort the right half
    quickSort(arr, mid + 1, high, compare);
  }
}

/**
 * Less efficient space complexity quicksort
 *
 * @param {*} arr
 * @returns
 */
function quickSortNoSwap(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // console.log("left ", left, "right ", right);
  return [...quickSortNoSwap(left), pivot, ...quickSortNoSwap(right)];
}

//  You can test this using:
let arr = [5, 1, 10, 8, 9, 3, 2, 45, -6];
console.log(quickSortNoSwap(arr));

quickSort(arr, 0, arr.length, (l, r) => l < r);
console.log(arr);
