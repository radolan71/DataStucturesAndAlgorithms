//https://www.hackerrank.com/challenges/ctci-ransom-note/problem

"use strict";
// import assert from "assert";
const assert = require("assert");
const fs = require("fs");
const { performance } = require("perf_hooks");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  // Write your code here
  let isProssible = true;
  const sortedMagazine = magazine.sort();
  const notePieces = note.split(" ");
  for (let index = 0; index < notePieces.length; index++) {
    const notePiece = notePieces[index];

    //TODO implement binary search
    if (sortedMagazine.indexOf(notePiece) < 0) {
      isProssible = false;
      break;
    }
  }
  return isProssible;
}

const tests = [
  {
    name: "1",
    magazine: ["give", "me", "one", "grand", "today", "night"],
    note: "give one grand today",
    result: true,
  },
  {
    name: "2",
    magazine: ["two", "times", "three", "is", "not", "four", "two"],
    note: "two times two is four",
    result: true,
  },
  {
    name: "3",
    magazine: ["give", "got", "a", "lovely", "bunch", "of", "coconuts"],
    note: "give got some coconuts",
    result: false,
  },
  {
    name: "4",
    magazine: "./words.txt",
    note: "memorize secretive wakeful chief cook",
    result: true,
  },
];

tests.forEach(({ name, magazine, note, result }) => {
  if (magazine.indexOf(".txt") > 0) {
    const contents = fs.readFileSync(__dirname + "/words.txt"); //, function (err, data) {
    magazine = contents.toString().replace(/\r\n/g, "\n").split("\n");
  }

  console.log("***");
  console.log("magazine:", magazine);
  console.log("note:", note);
  console.log();
  console.log("\x1b[4m\x1b[36m%s\x1b[0m", `Executing ${name}`);
  console.log();
  const start = performance.now();
  const actual = checkMagazine(magazine, note);
  assert.equal(result, checkMagazine(magazine, note));
  const time = performance.now() - start;
  const acceptableTime = time < 200;
  const passedTest = actual === result && acceptableTime;

  console.log(
    "Execution duration: ",
    `${acceptableTime ? "\x1b[1m\x1b[32m" : "\x1b[1m\x1b[31m"}${time} \x1b[0m`,
    "ms"
  );
  console.log("Expected: ", result, "got", actual);
  console.log(
    `${passedTest ? "\x1b[1m\x1b[32m%s\x1b[0m" : "\x1b[1m\x1b[31m%s\x1b[0m"}`,
    `Test ${passedTest ? "succeeded" : "failed"}`
  );
  console.log();
});

// function main() {
//   const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

//   const m = parseInt(firstMultipleInput[0], 10);

//   const n = parseInt(firstMultipleInput[1], 10);

//   const magazine = readLine().replace(/\s+$/g, "").split(" ");

//   const note = readLine().replace(/\s+$/g, "").split(" ");

//   checkMagazine(magazine, note);
// }
