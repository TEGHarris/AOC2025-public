import { readFileSync } from "fs";
const f = readFileSync("input3.txt", "utf8");
// const f = fs.readFileSync("test.txt","utf8")
let banks = f.split("\n");
let maxJolts: number[] = [];
for (let bank of banks) {
  let maxJolt = 0;
  let digitsToRemove = 88;
  let result: number[] = [];
  for (let digit of bank) {
    while (
      digitsToRemove > 0 &&
      result.length > 0 &&
      result[result.length - 1] < Number(digit)
    ) {
      result.pop();
      digitsToRemove--;
    }
    result.push(Number(digit));
  }
  maxJolts.push(Number(result.slice(0, 12).join("")));
}

let total = maxJolts.reduce((acc: number, val: number) => {
  return acc + val;
}, 0);

console.log(total);
export {};
