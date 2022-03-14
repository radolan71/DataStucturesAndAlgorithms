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
//  You can test this using:
let arr = [5, 1, 10, 8, 9, 3, 2, 45, -6];
quickSort(arr, 0, arr.length, (l, r) => l < r);
console.log(arr);
