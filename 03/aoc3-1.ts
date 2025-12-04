const fs = require("fs");
const f = fs.readFileSync("input3.txt", "utf8");
// const f = fs.readFileSync("test.txt","utf8")
let banks = f.split("\n");
let maxJolts = [];
for (let bank of banks) {
  let maxJolt = 0;
  for (let firstIndex = 0; firstIndex < bank.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < bank.length;
      secondIndex++
    ) {
      let jolt = Number(bank[firstIndex] + bank[secondIndex]);
      if (jolt > maxJolt) {
        maxJolt = jolt;
      }
    }
  }
  maxJolts.push(maxJolt);
}

let total = maxJolts.reduce((acc: number, val: number) => {
  return acc + val;
}, 0);

console.log(total);
export {};
