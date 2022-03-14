const fib = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(0)); // -> 0
console.log(fib(1)); // -> 1
console.log(fib(5)); // -> 5
console.log(fib(35)); // -> 9227465
console.log(fib(46)); // -> 1836311903
