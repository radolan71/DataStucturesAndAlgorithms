//recursive solution
/**
 *  canSum function determines if it is possible to generate the targetSum
 * by summing up numbers from the given array. It uses recursion to explore
 * all possible combinations of numbers.
 *
 * The time complexity is O(n^m) where n is the length of the numbers
 * array and m is the targetSum. The space complexity is O(m) for the
 *
 *
 * @param {*} targetSum
 * @param {*} numbers
 * @returns
 */
function canSum(targetSum, numbers) {
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
}

//optimized solution
/**
 * canSumMemo function is an optimized version of the canSum function
 * that uses memoization to store previously computed results. This
 * reduces the time complexity significantly by avoiding redundant
 * calculations. The memo object is used to cache results for specific
 * target sums.
 *
 * The time complexity is O(n * m) where n is the targetSum and m is the
 * length of the numbers array. The space complexity is O(n) for the
 *
 * @param {*} targetSum
 * @param {*} numbers
 * @param {*} memo
 * @returns
 */
function canSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

function canSumTab(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (const n of numbers) {
        if (typeof table[i + n] !== "undefined") {
          table[i + n] = true;
        }
      }
    }
  }

  return table[targetSum];
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false

console.log(canSumMemo(7, [2, 3])); // true
console.log(canSumMemo(7, [5, 3, 4, 7])); // true
console.log(canSumMemo(7, [2, 4])); // false
console.log(canSumMemo(300, [7, 14])); // false

console.log(canSumTab(7, [2, 3])); // true
console.log(canSumTab(7, [5, 3, 4, 7])); // true
console.log(canSumTab(7, [2, 4])); // false
console.log(canSumTab(300, [7, 14])); // false
