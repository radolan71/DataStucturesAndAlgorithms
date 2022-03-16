// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
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
  ? document.write("Element is not present in array")
  : document.write("Element is present at index " + result);
