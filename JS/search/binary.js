/**
 * JavaScript program to implement recursive Binary Search
 *
 * Works with sorted arrays only
 *
 * A recursive binary search function. It returns
 * location of x in given array arr[l..r] is present,
 * otherwise -1
 *
 * Time Complexity	O(log n)
 * Space Complexity	O(1)
 *
 * @param {*} array
 * @param {*} left
 * @param {*} right
 * @param {*} searchTerm
 * @returns
 */

function binarySearch(array, left, right, searchTerm) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    // If the element is present at the middle
    // itself
    if (array[mid] == searchTerm) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (array[mid] > searchTerm)
      return binarySearch(array, left, mid - 1, searchTerm);

    // Else the element can only be present
    // in right subarray
    return binarySearch(array, mid + 1, right, searchTerm);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n - 1, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);

function binarySearchIterative(orderedList, target) {
  let start = 0;
  let end = orderedList.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((end + start) / 2);
    let currentNumber = orderedList[midpoint];
    if (currentNumber === target) {
      return midpoint;
    } else if (currentNumber < target) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }
  return -1;
}
console.log(binarySearchIterative([1, 2, 3, 4, 5], 1));
console.log(binarySearchIterative([1, 2, 3, 4, 5], 5));
console.log(binarySearchIterative([1, 2, 3, 4, 5], 3));
console.log(binarySearchIterative([1, 2, 3, 4, 5], 63));

function binarySearchRec(orderedList, target) {
  if (orderedList.length < 1) {
    return -1;
  }

  let midpoint = Math.floor(orderedList.length / 2);
  if (orderedList[midpoint] === target) {
    return midpoint;
  } else if (orderedList[midpoint] < target) {
    return binarySearchRec(
      orderedList.slice(midpoint + 1, orderedList.length),
      target
    );
  } else {
    return binarySearchRec(orderedList.slice(0, midpoint), target);
  }
}
console.log(binarySearchRec([1, 2, 3, 4, 5], 1));
console.log(binarySearchRec([1, 2, 3, 4, 5], 5));
console.log(binarySearchRec([1, 2, 3, 4, 5], 3));
console.log(binarySearchRec([1, 2, 3, 4, 5], 63));
