var marks = [20,40,35,12,37,100]
subMarks = marks.slice(1, 4)
console.log(subMarks)
console.log(marks[2])
marks[3]= 14
console.log(marks)
console.log (marks.length)
marks.push(65)
console.log(marks)
marks.pop(65)
marks.unshift(2)
console.log(marks.indexOf(37))
console.log(marks.indexOf(40))
// if i want to check if a digit 120 is present in the array or not, i can use indexOf, if it returns -1, it means it's not present
console.log(marks.includes(135))
//for loop to iterate over this array, if you want to print all the elements in this array.
for (let i = 0; i < marks.length; i++){
    
    console.log(marks[i])
}
// to print the sum of the array elements
var sum = 0
for (let i = 0; i< marks.length; i++){
    
    sum= sum + marks[i] //20+60+95+104+147+247
}
console.log(sum)
//the same sum logic that we have used above with for loop, can be used using reduce () as well
let total = marks.reduce((sum,mark)=> sum+mark, 0)
console.log(total)
// create a new array with even numbers of scores array [12,14,16]
var scores = [12,13,14,16]
var evenScores = []

for (let i=0; i<scores.length;i++)
{
    if (scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//the same above logic doe with filter method 
let newFilterEvenScores = scores.filter(score=>score%2 == 0)
console.log(newFilterEvenScores)  

// create a new array with even numbers of scores and multiply each value with 3  and sum them use this array from last output->array [12,14,16]
//map
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum, val)=>sum+val,0)
console.log(totalVal)

//chaining 
