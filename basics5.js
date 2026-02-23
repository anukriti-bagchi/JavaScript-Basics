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
let diffDate = nextDate- date //this will not throw an error, Because in JavaScript, subtracting two Date objects is allowed. Each Date is coerced to its numeric value (milliseconds since Jan 1, 1970), so nextDate - date returns the difference in milliseconds, not an error. If you log it, you’ll see a number.
console.log(diffDate)
//but there is a way to subtract two strings by converting them into number parseInt()
let diff = parseInt(nextDate) - parseInt(date)
diff.toString()