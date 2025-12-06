const fs = require("fs");
const mergeRanges = require("merge-ranges");
const f = fs.readFileSync("input5.txt", "utf8");
let ranges: any[] = f.split("\n\n")[0].split("\n");
ranges = ranges.map((e: string) => {
  const a = e.split("-");
  return [Number(a[0]), Number(a[1])];
});
let combinedRanges = mergeRanges(ranges);
console.log(combinedRanges);
let total = 0;
for (let r of combinedRanges) {
  total += r[1] - r[0] + 1;
}
console.log(total);
