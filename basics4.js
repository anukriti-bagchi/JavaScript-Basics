//block of code- below we are showing 2 ways of declaring the function 

function add(a,b){

    return a+b
}

let sum = add(2,8)
console.log(sum)

function multiply(c,d)
{
    return c*d
}

let product = multiply(2,3)
console.log(product)

function subtract(e,f)
{
    return e-f
}

let difference = subtract(10,7)
console.log(difference)

function divide(g,h)
{
    return g/h
}

let quotient = divide(10,2)
console.log(quotient)

//anonymous function = do not have names - they are more like function expressions 

let sumOfIntegers = function (c,d)
{
     return c+d
}
console.log(sumOfIntegers(4,8))

// breaking down the syntax into much simpler form
let sumOfNumbers= (c,d) => c+d
console.log(sumOfNumbers(1,9))

// herefor the fat py operator--> at run time, javascript will take care of converting this fat py => to the syntax mentioned from line 37 to 40 and also from line 3 to 9.and it will execute


let diffOfNumbers = (a,b)=> a-b
console.log(diffOfNumbers(9,3))