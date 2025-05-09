class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");
// const e = new Node("E");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

function List() {
  this.head = null;
  this.tail = null;
}

List.prototype.traverseList = function () {
  let current = this.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

List.prototype.getSize = function () {
  let current = this.head;
  let size = 0;
  while (current !== null) {
    size++;
    current = current.next;
  }
  return size;
};

List.prototype.add = function (newValue) {
  const newNode = new Node(newValue);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    if (this.head === this.tail) {
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
};

List.prototype.traverseListRecursive = function () {
  if (this.head === null) return;
  console.log(this.head.value);
  traverseListRecursive(this.head.next);
};

List.prototype.toString = function () {
  let current = this.head;
  let output = [];
  // console.log(current);
  while (current) {
    output.push(current.value);
    current = current.next;
  }
  output.push("null");
  console.log(output.join("->"));
};

List.prototype.nodeAtIndex = function (index) {
  let current = this.head;
  let position = 0;
  while (position <= index) {
    if (position === index) {
      return current;
    }
    current = current.next;
    position++;
  }
  return null;
};

List.prototype.reverseList = function () {
  if (this.head == this.tail) {
    return;
  }
  let current = this.head;
  let prev = null;
  let next = current.next;

  this.tail = current;
  while (current !== null) {
    current.next = prev;
    next = next.next;
    next.next = current;
    prev = current;
    current = next;
  }
  this.head = next;
};

// const list = new List();
// list.add("A");
// list.add("B");
// console.log(list.toString());
// list.add("C");
// console.log(list.toString());
// list.add("D");
// console.log(list.toString());
// list.reverseList();
// console.log(list.toString());

const searchList = (head, target) => {
  let current = head;
  while (current.next !== null) {
    if (current.value === target) {
      return current;
    }
    current = current.next;
  }
  return -1;
};

const insert = (head, newValue, index) => {
  const newNode = new Node(newValue);
  if (index == 0) {
    newNode.next = head;
    head = newNode;
  } else {
    let position = 0;
    let current = head.next;
    while (current !== null) {
      if (position == index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      position++;
    }
  }

  return head;
};

const remove = (head, value) => {
  if (value === head.value) {
    head = head.next;
  } else {
    let current = head.next;
    let previous = head;
    while (current !== null) {
      if (current.value === value) {
        previous.next = current.next;
        break;
      }
    }
  }

  return head;
};

// let head = a;
// console.log(searchList(head, "B"));
// console.log("---");
// head = insert(head, "BB", 2);
// console.log(traverseList(head));
// console.log("---");
// head = insert(head, "AA", 0);
// console.log(traverseList(head));
// console.log("---");
// head = insert(head, "CC", 5);
// console.log(traverseList(head));
export { List, Node };
