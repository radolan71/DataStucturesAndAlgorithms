/**
 * The gridTraveler function calculates the number of unique ways to travel
 * from the top-left corner of a grid to the bottom-right corner, given
 * the dimensions of the grid (m x n).
 * It uses memoization to optimize the recursive calls and avoid redundant
 * calculations.
 *
 * Withouth memoization, the time complexity is O(2^(m+n)), which is exponential.
 * and the space complexity is O(m+n) for the recursion stack.
 *
 * With memoization, the time complexity is reduced to O(m*n), and the space
 * complexity is O(m*n) for the memo object.
 * https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2319s
 * @param {*} m
 * @param {*} n
 * @param {*} memo
 * @returns
 */
const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

const gridTravelerTab = (m, n) => {
  const table = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const element = table[i][j];
      if (j + 1 < n) table[i][j + 1] += element;
      if (i + 1 < m) table[i + 1][j] += element;
    }
  }

  return table[m][n];
};

console.log(gridTravelerTab(1, 1)); // -> 1
console.log(gridTravelerTab(2, 3)); // -> 3
console.log(gridTravelerTab(3, 2)); // -> 3
console.log(gridTravelerTab(3, 3)); // -> 6
console.log(gridTravelerTab(18, 18)); // -> 2333606220
