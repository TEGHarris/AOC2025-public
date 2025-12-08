import { readFileSync } from "fs";

const f = readFileSync("input7.txt", "utf8");
let manifold: string[][] = f
  .trim()
  .split("\n")
  .map((e: string) => e.split(""));

const width = manifold[0].length;
const height = manifold.length;
const FinalRow = height - 1;

let startCol = manifold[0].indexOf("S");
if (startCol === -1) {
  for (let i = 0; i < width; i++) if (manifold[0][i] === "S") startCol = i;
}
if (startCol === -1) throw new Error();


const pathCounts: bigint[][] = Array.from({ length: height }, () =>
  Array(width).fill(0n)
);

pathCounts[1][startCol] = 1n;

for (let row = 1; row < height; row++) {
  for (let col = 0; col < width; col++) {
    const count = pathCounts[row][col];
    if (count === 0n) continue;

    if (row + 1 < height) {
      const cellBelow = manifold[row + 1][col];
      
      if (cellBelow === ".") {
        pathCounts[row + 1][col] += count;
      } else if (cellBelow === "^") {
        const leftCol = col - 1;
        const rightCol = col + 1;
        
        if (leftCol >= 0 && leftCol < width) {
          pathCounts[row + 1][leftCol] += count;
        }
        if (rightCol >= 0 && rightCol < width) {
          pathCounts[row + 1][rightCol] += count;
        }
      }
    }
  }
}

let timelines = 0n;
for (let col = 0; col < width; col++) {
  timelines += pathCounts[FinalRow][col];
}

console.log(timelines.toString());
