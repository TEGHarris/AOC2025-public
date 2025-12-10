import { error } from "console";
import { readFileSync } from "fs";

const f = readFileSync("input8.txt", "utf8");

let coords: any[] = f.split("\n");

class JBox {
  x: number;
  y: number;
  z: number;
  nearestJbox: JBox | null;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.nearestJbox = null;
  }
}

coords = coords.map((e: string) => {
  let x = e.split(",");
  return [Number(x[0]), Number(x[1]), Number(x[2])];
});

const Jboxes = coords.map((e: number[]) => {
  return new JBox(e[0], e[1], e[2]);
});

// let unconnectedJBoxes = Jboxes; // should be passed by refrence

const DistanceBetween2Points = (j1: JBox, j2: JBox) => {
  return Math.sqrt(
    Math.pow(j1.x - j2.x, 2) +
      Math.pow(j1.y - j2.y, 2) +
      Math.pow(j1.z - j2.z, 2)
  );
};

const findNextShortestPair = (J: JBox[]) => {
  let shortestDistance = Infinity;
  let shortestJ1;
  let shortestJ2;
  for (let j1 of J) {
    for (let j2 of J) {
      if (JSON.stringify(j1) === JSON.stringify(j2)) continue;
      else if (DistanceBetween2Points(j1, j2) <= shortestDistance) {
        shortestDistance = DistanceBetween2Points(j1, j2);
        shortestJ1 = j1;
        shortestJ2 = j2;
      }
    }
  }
  if (typeof shortestJ1 == "undefined" || typeof shortestJ2 == "undefined")
    throw new Error();
  return [shortestJ1, shortestJ2];
};

const endCondition = (Jboxes : JBox[]) => {
  for (let i of Jboxes) {
    if (i.nearestJbox === null) return false;
  }
  return true;
};
let counter = 0
while (!endCondition(Jboxes)) {
  let shortest = findNextShortestPair(Jboxes);
  Jboxes[Jboxes.indexOf(shortest[0])].nearestJbox = shortest[1];
  Jboxes[Jboxes.indexOf(shortest[1])].nearestJbox = shortest[0];
  counter++
  if (counter % 100 == 0)console.log(counter)
}

console.log(Jboxes);
