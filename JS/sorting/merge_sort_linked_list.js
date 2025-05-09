const { List } = require("../data_structures/linked_list");

const getMiddle = (list) => {
  const midIndex = Math.floor(list.getSize() / 2);
  return list.nodeAtIndex(midIndex - 1);
};

const merge = (left, right) => {
  //If either list is empty, return the other — because merging with an empty list is trivial.
  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }

  let mergedHead = null;
  //keep a pointer to the tail (mergedTail) so we can append new nodes as we go.
  let mergedTail = null;

  //Initialize the head of the merged list:
  //smaller head node of the two lists to be the start
  if (left.value < right.value) {
    mergedHead = left;
    left = left.next;
  } else {
    mergedHead = right;
    right = right.next;
  }
  mergedTail = mergedHead;

  // walk through both lists, always adding the smaller current node to the result list and moving forward.
  while (left !== null && right !== null) {
    if (left.value < right.value) {
      mergedTail.next = left;
      left = left.next;
    } else {
      mergedTail.next = right;
      right = right.next;
    }
    mergedTail = mergedTail.next;
  }

  // Append remaining nodes: Since it’s already sorted, we just attach it at the end.
  if (left !== null) {
    mergedTail.next = left;
  } else {
    mergedTail.next = right;
  }
  return mergedHead;
};

const mergeSort = (list) => {
  if (list.head === null || list.head.next === null) {
    return list.head;
  }

  let mid = getMiddle(list);
  // Split the list into two halves
  let rightList = new List();
  rightList.head = mid.next;
  mid.next = null;
  let right = mergeSort(rightList);
  let left = mergeSort(list);

  return merge(left, right);
};

const list = new List();
list.add(5);
list.add(1);
list.add(10);
list.add(8);
list.add(9);
list.add(3);

console.log(list.toString());

const sortedList = new List();
sortedList.head = mergeSort(list);
console.log("After sorting: ", sortedList.toString());
