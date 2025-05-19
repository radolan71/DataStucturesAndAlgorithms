// Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank" array. Each element of the 2D array should represent one combination that constructs the 'target'.
// You may reuse elements of 'wordBank' as many times as needed.

function allConstruct(target, wordBank) {
  if (target === "") return [[]];

  const result = [];
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      let ways = allConstruct(target.slice(word.length), wordBank);
      let targetWays = ways.map((w) => [word, ...w]);
      result.push(...targetWays);
    }
  }

  return result;
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //0
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
