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

function verifySorted(array, compare = (a, b) => a < b) {
  if (array.length <= 1) {
    return true;
  }
  // console.log(array.slice(1));
  return compare(array[0], array[1]) && verifySorted(array.slice(1), compare);
}

let arr = [5, 8, 9, 12, -8, 31, 2];
// Sort Array elements in increasing order
arr = mergeSort(arr);
console.log(arr);
if (!verifySorted(arr)) throw new Error("not sorted");
// Sort Array elements in decreasing order
arr = mergeSort(arr, (a, b) => a > b);
console.log(arr);
if (!verifySorted(arr, (a, b) => a > b)) throw new Error("not sorted");

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
let compare = (a, b) => a.name < b.name;
arr = mergeSort(arr, compare);
console.log(arr);
if (!verifySorted(arr, compare)) throw new Error("not sorted");
// Sort Array elements in decreasing order of ages
compare = (a, b) => a.age < b.age;
arr = mergeSort(arr, compare);
console.log(arr);
if (!verifySorted(arr, compare)) throw new Error("not sorted");
