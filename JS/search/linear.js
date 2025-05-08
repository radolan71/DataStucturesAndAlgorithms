/**
 * O(N) complexity
 *
 * @param {*} list
 * @param {*} target
 * @returns
 */
function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 10));
