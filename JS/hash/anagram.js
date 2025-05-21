/**
 * Write a function, anagrams, that takes in two strings as arguments.
 * The function should return a boolean indicating whether or not the
 * strings are anagrams. Anagrams are strings that contain the same
 * characters, but in any order.
 */

const anagrams = (s1, s2) => {
  if (!s1.length && !s2.length) return true;
  if (s1.length !== s2.length) return false;

  let s1asarray = s1.split("");
  let matches = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1asarray.indexOf(s2[i]) >= 0) {
      matches++;
    }
  }

  return matches === s2.length;
};

const anagramsHash = (s1, s2) => {
  if (!s1.length && !s2.length) return true;
  if (s1.length !== s2.length) return false;

  let s1Hash = {};
  let s2Hash = {};
  let s1asarray = s1.split("");
  let s2asarray = s2.split("");

  s1asarray.forEach((element) => {
    if (element in s1Hash) {
      s1Hash[element]++;
    } else {
      s1Hash[element] = 1;
    }
  });

  s2asarray.forEach((element) => {
    if (element in s2Hash) {
      s2Hash[element]++;
    } else {
      s2Hash[element] = 1;
    }
  });

  for (const element in s1Hash) {
    if (!(element in s2Hash) || s1Hash[element] !== s2Hash[element]) {
      return false;
    }
  }

  return true;
};

const anagramsHashOptimized = (s1, s2) => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  anagrams,
};
console.log(anagramsHash("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
console.log(anagrams("taxi", "tax")); // -> false
console.log(anagrams("po", "popp")); // -> false
console.log(anagrams("po", "popp")); // -> false
