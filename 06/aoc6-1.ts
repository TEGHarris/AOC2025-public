import { readFileSync } from "fs";

const f = readFileSync("input6.txt",'utf8')

let lines : any[] = f.split("\n")
lines = lines.map( (e:string) =>{
    return e.split(" ")
})
// lines still has double spaces which mst be removed
lines = lines.map( (line : string[]) =>{
    return line.filter( (c : string) =>{
        return (c !== "")
    })
})
console.log(lines)
let total = 0
for (let col = 0; col < lines[0].length ; col++){
    const operation = lines[4][col]
    const nums = [Number(lines[0][col]),Number(lines[1][col]),Number(lines[2][col]),Number(lines[3][col])]
    if (operation == "+") total += (nums[0] + nums[1] + nums[2] + nums[3])
    else {total += (nums[0] * nums[1] * nums[2] * nums[3])}
}
console.log(total)