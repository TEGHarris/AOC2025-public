import { readFileSync } from "fs";

const f = readFileSync("input5.txt", "utf8");

class Range {
  start: number;
  end: number;
  constructor(a: number, b: number) {
    this.start = a;
    this.end = b;
  }
  inRange(n: number) {
    return n >= this.start && n <= this.end;
  }
}

let ranges: any[] = f.split("\n\n")[0].split("\n");

ranges = ranges.map((e: string) => {
  const a = e.split("-");
  return new Range(Number(a[0]), Number(a[1]));
});
let IDs: any[] = f.split("\n\n")[1].split("\n");
IDs = IDs.map((e: string) => {
  return Number(e);
});
let totalFresh = 0;
for (let i of IDs) {
  let fresh = false;
  for (let j of ranges) {
    if (j.inRange(i)) fresh = true;
  }
  if (fresh) totalFresh++;
}
console.log(totalFresh);
