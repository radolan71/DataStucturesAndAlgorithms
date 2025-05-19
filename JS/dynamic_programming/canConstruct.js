/**
 * check if we can construct a target string from the word bank
 * using the words in the word bank
 *
 * m = target.lenght n = wordBank.lenght
 *
 * time complexity is O(n^m * m) where n is the length of the word bank
 * and m is the length of the target string.
 * The space complexity is O(m^2)  high of the tree * the substrings created
 *
 *
 * @param {*} target
 * @param {*} wordBank
 */
function canConstruct(target, wordBank) {
  //base cases
  if (target === "") return true;
  if (wordBank.length === 0) return false;

  //identity prefixes
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
}

/**
 * space complexity is O(m^2)  high of the tree * the substrings created
 * time complexity is O(n*m^2) where n is the length of the word bank
 *
 *
 * @param {*} target
 * @param {*} wordBank
 * @param {*} memo
 * @returns
 */
function canConstructMemo(target, wordBank, memo = {}) {
  //base cases
  if (target in memo) return memo[target];
  if (target === "") return true;
  if (wordBank.length === 0) return false;

  //identity prefixes
  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      if (canConstructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); // false
