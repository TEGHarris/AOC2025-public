const fs = require("fs")
const f = fs.readFileSync("input2.txt","utf8")
let ranges = f.split(",")
ranges = ranges.map( (e : string)=>{
    return e.split("-")
})

const isInvalid = (n : number) : boolean => {
    const workingString = n.toString()
    for( let subLen = 1; subLen <= workingString.length/2; subLen++){
        if (workingString.length % subLen != 0) continue
        let sub = workingString.slice(0,subLen)
        let repeatedSub = sub.repeat(workingString.length / subLen)
        if (repeatedSub === workingString) return true
    }
    return false
}

let invalidIDs : number[] = [];

for (let range of ranges){
    let startNum = Number(range[0])
    let endNum = Number(range[1])
    for (let i = startNum; i <= endNum; i++){
        if (isInvalid(i)) invalidIDs.push(i)
    }
}
let total = invalidIDs.reduce((acc : number, val : number) => {
    return acc + val
},0)
console.log(total)