import { readFileSync } from "fs";
import { buffer } from "stream/consumers";

const f = readFileSync("input6.txt",'utf8')
// const f = readFileSync("test.txt", "utf8");
let total = 0;

let lines: any[] = f.split("\n");
lines = lines.map((e: string) => {
  return e.split("");
});

console.log(lines);

let operation = " ";
let bufferNums = [];
for (let col = lines[0].length - 1; col >= 0; col--) {
  let operation = lines[4][col];
  const nums = [lines[0][col], lines[1][col], lines[2][col], lines[3][col]];
  bufferNums.push(Number(nums[0] + nums[1]+ nums[2] + nums[3]))
  if (bufferNums[bufferNums.length-1] == 0) bufferNums = []
  if (operation != " "){
    if (operation == "+"){
        total += bufferNums.reduce((acc : number, val:number) =>{
            return acc + val
        },0)
    }
    else {
        total += bufferNums.reduce((acc : number, val: number) =>{
            return acc * val
        },1)
    }
    operation = " "
  }
}
 console.log(total)
