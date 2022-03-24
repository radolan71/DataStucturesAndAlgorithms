class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//D -> S -> LIFO
//B -> Q -> FIFO

const depthFirstValues = (root) => {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

const depthFirstValuesRecursive = (root) => {
  if (!root) return [];
  const leftValues = depthFirstValuesRecursive(root.left);
  const rightValues = depthFirstValuesRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a));
console.log(depthFirstValuesRecursive(a));
