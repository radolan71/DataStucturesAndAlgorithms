function countConstruct(target, wordBank) {
  if (target === "") return 1;

  let total = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      total += countConstruct(target.slice(word.length), wordBank);
    }
  }
  return total;
}

function countConstructMemo(target, wordBank, memo = {}) {
  if (typeof memo[target] !== "undefined") return memo[target];
  if (target === "") return 1;

  let total = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      total += countConstructMemo(target.slice(word.length), wordBank, memo);
    }
  }
  memo[target] = total;
  return total;
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //0
