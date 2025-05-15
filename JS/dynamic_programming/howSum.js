/**
 *  How Sum is a dynamic programming problem that finds a combination of numbers
 * from a given array that adds up to a target sum. It returns an array of the
 * numbers that sum up to the target. If no combination is found, it returns null.
 * The function uses a bottom-up approach to build a table that stores the
 * combinations for each possible sum from 0 to the target sum.
 *
 *
 * @param {*} targetSum
 * @param {*} numbers
 * @returns
 */
function howSum(targetSum, numbers) {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        const newSum = i + num;
        if (newSum <= targetSum) {
          table[newSum] = [...table[i], num];
        }
      }
    }
  }

  return table[targetSum];
}

//with memoization
// Space complexity is O(m^2) for the memo object.
// Time complexity is O(n * m^2) where n is the length of the numbers
// array and m is the targetSum.
function howSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = howSumMemo(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

/**
 * Recusive solution for howSum
 * Time complexity is O(n^m * m ) where n is the length of the numbers
 * array and m is the targetSum. The space complexity is O(m) for the
 * recursion stack.
 * Space complexity is O(m) for the memo object.
 *
 * @param {*} targetSum
 * @param {*} numbers
 * @returns
 */
function howSumRecursive(targetSum, numbers) {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = howSumRecursive(remainder, numbers);
    if (result !== null) {
      return [...result, num];
    }
  }
  return null;
}

console.log(howSum(7, [2, 3])); // [2, 2, 3]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null

console.log(howSumRecursive(7, [2, 3])); // [2, 2, 3]
console.log(howSumRecursive(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSumRecursive(7, [2, 4])); // null
console.log(howSumRecursive(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumRecursive(300, [7, 14])); // null
