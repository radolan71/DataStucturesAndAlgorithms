const fib = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const fibTab = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fibTab(0)); // -> 0
console.log(fibTab(1)); // -> 1
console.log(fibTab(5)); // -> 5
console.log(fibTab(35)); // -> 9227465
console.log(fibTab(46)); // -> 1836311903
