import { readFileSync } from "fs";

const f = readFileSync("input9.txt", "utf8");
// const f = readFileSync("test.txt", "utf8");

class Coordinate{
    x : number;
    y : number;
    constructor(x : number,y: number){
        this.x = x
        this.y = y
    }
}

let coords : string[] | Coordinate[] = f.split("\n")
coords = coords.map((e : string) => {
    let arr = e.split(",")
    return new Coordinate(Number(arr[0]),Number(arr[1]))
})


const areaBetweenTwoPoints = (c1 : Coordinate, c2 : Coordinate) : number => {
    const deltaX = Math.abs(c1.x-c2.x)+1
    const deltaY = Math.abs(c1.y-c2.y) +1
    return (deltaX * deltaY)
}

let largestArea = 0
for (let i = 0; i < coords.length; i++){
    for(let j = i; j < coords.length; j++){
        let c1 = coords[i]
        let c2 = coords[j]
        let area = areaBetweenTwoPoints(c1,c2)
        console.log(`The area between ${c1.x},${c1.y} and ${c2.x},${c2.y} is ${area}`)
        if (area >= largestArea) largestArea = area

    }
}
console.log(largestArea)