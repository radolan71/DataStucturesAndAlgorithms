/**
 *  find the shortest combination of numbers that add up to a target sum
 *
 * @param {*} targetSum
 * @param {*} numbers
 */
function bestSum(targetSum, numbers) {
  //base cases
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortestCombination = null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers);
    if (result !== null) {
      const combination = [...result, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
}

function bestSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  //base cases
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortestCombination = null;
  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = bestSumMemo(remainder, numbers, memo);
    if (result !== null) {
      const combination = [...result, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(7, [2, 3])); // [3, 2, 2]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSumMemo(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
console.log(bestSumMemo(300, [7, 14])); // null
