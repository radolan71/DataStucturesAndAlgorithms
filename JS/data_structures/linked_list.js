class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const traverseList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const traverseListRecursive = (head) => {
  if (head === null) return;
  console.log(head.value);
  traverseListRecursive(head.next);
};

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

traverseList(a);
traverseListRecursive(a);
traverseList(reverseList(a));
