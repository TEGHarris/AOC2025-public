import { readFileSync } from "fs";

const f = readFileSync("input7.txt", "utf8");
let splits = 0;
let manifold: any[] = f.split("\n");
manifold = manifold.map((e: string) => {
  return e.split("");
});

for (let i = 0; i < manifold[0].length; i++) {
  if (manifold[0][i] == "S") manifold[0][i] = "|";
}

for (let row = 1; row < manifold.length; row++) {
  // row starts from the second line because the first line is handled manually
  for (let col = 0; col < manifold[0].length; col++) {
    if (manifold[row - 1][col] == "|") {
      if (manifold[row][col] == ".") manifold[row][col] = "|";
      if (manifold[row][col] == "^") {
        splits++;
        manifold[row][col - 1] = "|";
        manifold[row][col + 1] = "|";
      }
    }
  }
}
console.log(splits);
