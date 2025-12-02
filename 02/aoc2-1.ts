const fs = require("fs");
const f = fs.readFileSync("input2.txt", "utf8");
let ranges = f.split(",");
ranges = ranges.map((e: string) => {
  return e.split("-");
});

const isInvalid = (n: number): boolean => {
  let workingString = n.toString();
  let firstHalf = workingString.slice(0, workingString.length / 2);
  let secondHalf = workingString.slice(
    workingString.length / 2,
    workingString.length
  );
  return firstHalf === secondHalf;
};

let invalidIDs: number[] = [];

for (let range of ranges) {
  let startNum = Number(range[0]);
  let endNum = Number(range[1]);
  for (let i = startNum; i <= endNum; i++) {
    if (isInvalid(i)) invalidIDs.push(i);
  }
}
let total = invalidIDs.reduce((acc: number, val: number) => {
  return acc + val;
}, 0);
console.log(total);
export {};
