const fs = require("fs");

const f = fs.readFileSync("input1.txt", "utf8");

class Instruction {
  direction: string;
  value: number;
  constructor(d: string, v: number) {
    this.direction = d;
    this.value = v;
  }
}

let instructions = f.split("\n");
instructions = instructions.map((e: string) => {
  return new Instruction(e[0], Number(e.slice(1)));
});
const wrapAround = (n: number) => ((n % 100) + 100) % 100;
let position = 50;
let total0s = 0;

// R = going upwards , l = going downwards
for (let i of instructions) {
  if (i.direction == "R") {
    for (let j = 0; j < i.value; j++) {
      position = wrapAround(position+1);
      if (position === 0) total0s++
    }
  } else {
    for (let j = 0; j < i.value; j++) {
      position = wrapAround(position-1);
      if (position === 0) total0s++
    }
  }
  }
console.log(total0s);
