//strings
let day = 'monday '
console.log(day.length) //7
let subDay = day.slice(0,3)
console.log(subDay)
console.log(day[4])
let splitDay = day.split("d")
console.log(splitDay[0].length)//since wednessday has 2 e's and 2 d's , .split is not ideal here, instead we do slice mentioned in line 10, 11
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)
let part1= day.slice(0,3)
let part2= day.slice(3,6)
console.log(part1, part2)

let date = '23'
let nextDate = '27'
let diffDate = nextDate- date //this will throw an error, we cannot subtract strings
// console.log(diffDate)
