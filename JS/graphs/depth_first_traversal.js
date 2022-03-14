/**
 * Uses a stack
 * @param {*} graph
 */
const depthFirst = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (const neightbor of graph[current]) {
      stack.push(neightbor);
    }
  }
};

const depthFirstRecursive = (graph, source) => {
  console.log(source);
  for (const neightbor of graph[source]) {
    depthFirstRecursive(graph, neightbor);
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
depthFirst(graph, "a");
depthFirstRecursive(graph, "a");
