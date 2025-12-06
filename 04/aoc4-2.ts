import { read, readFileSync } from "fs";
const f = readFileSync("input4.txt", "utf8");
let grid: any[] = f.split("\n");
grid = grid.map((e: string) => {
  return e.split("");
});

const numRows = grid.length;
const numCols = grid[0]?.length || 0;

const inBounds = (r: number, c: number): boolean => {
  return r >= 0 && r < numRows && c >= 0 && c < numCols;
};

const isAt = (r: number, c: number): boolean => {
  return inBounds(r, c) && grid[r][c] === "@";
};

const checkLocation = (row: number, col: number): boolean => {
  if (!inBounds(row, col)) return false;
  let count = 0;

  if (isAt(row - 1, col - 1)) count++;
  if (isAt(row - 1, col)) count++;
  if (isAt(row - 1, col + 1)) count++;

  if (isAt(row, col - 1)) count++;
  if (isAt(row, col + 1)) count++;

  if (isAt(row + 1, col - 1)) count++;
  if (isAt(row + 1, col)) count++;
  if (isAt(row + 1, col + 1)) count++;

  if (count >= 4) return false;
  return true;
};

let validLocations = 0;
const removeRolls = () => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "@") {
        if (checkLocation(row, col)) {
          grid[row][col] = ".";
          validLocations++;
          console.log(`Valid roll at ${row}, ${col}`);
        }
      }
    }
  }
};
let originalGrid: string[][] = [];
do {
  originalGrid = grid.map((r: string[]) => r.slice());
  removeRolls();
} while (JSON.stringify(originalGrid) !== JSON.stringify(grid));
console.log(validLocations);
