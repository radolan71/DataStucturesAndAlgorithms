/**
 * Uses a queue
 * @param {*} graph
 */
const breadthFirst = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const neightbor of graph[current]) {
      queue.push(neightbor);
    }
  }
};

const breadthFirstRecursive = (graph, source) => {
  console.log(source);
  for (const neightbor of graph[source]) {
    breadthFirstRecursive(graph, neightbor);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
breadthFirst(graph, "a");
// breadthFirstRecursive(graph, "a");
