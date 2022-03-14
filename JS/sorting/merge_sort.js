function mergeSort(arr, compare = (a, b) => a < b) {
  function merge(left, right) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    // Try merging till we reach end of either one of the arrays.
    while (i < left.length && j < right.length) {
      if (compare(left[i], right[j])) {
        mergedArr.push(left[i]);
        i++;
      } else {
        mergedArr.push(right[j]);
        j++;
      }
    }
    // If left was 1, 2, 3, 5 and right was 4, 6, 7, 9
    // the for loop above would stop once it reaches the end of
    // The left array leaving 3 elements in the right array
    // In order to add the remaining elements from either array,
    // We need to add elements from i to end in left and j to end
    // in the right array to the merged array.
    return mergedArr.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSortInner(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSortInner(left), mergeSortInner(right));
  }
  // Call inner mergesort to sort and return the array for us.
  return mergeSortInner(arr);
}

let arr = [5, 8, 9, 12, -8, 31, 2];
// Sort Array elements in increasing order
arr = mergeSort(arr);
console.log(arr);
// Sort Array elements in decreasing order
arr = mergeSort(arr, (a, b) => a > b);
console.log(arr);
arr = [
  {
    name: "Harry",
    age: 20,
  },
  {
    name: "Jacob",
    age: 25,
  },
  {
    name: "Mary",
    age: 12,
  },
];
// Sort Array elements in increasing order alphabetically by names
arr = mergeSort(arr, (a, b) => a.name < b.name);
console.log(arr);
// Sort Array elements in decreasing order of ages
arr = mergeSort(arr, (a, b) => a.age < b.age);
console.log(arr);
