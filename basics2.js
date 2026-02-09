const flag = true

if (!flag) {
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

//flag value is still true with const, but the if expression is false because of the ! operator. So the else block will be executed and the output will be "condition not satisfied".
//the expression we are converting into false but the variable value will still be true.

let i =0
while (i>10) 
{
i++
console.log(i)
}

do
{
i++
}while(i>10);    
console.log(i)

// 2 and 5
// from 1 to 10, give me the common multiples of 2 and 5 
/*console.log('*******************')
let n =0
for (let k=1; k<=200; k++)
{
    if (k%3 == 0 && k%7 == 0)
    {
     n++
     console.log(k)
     if (n==5)
     break
        
    }
 
}

let required = true
while(required)
{
    console.log(required)
    required = false
}*/



 let n = 0

 for (let j = 2; j<=100; j++)
 {
    let isPrime = true;

    for (let k=2; k < j; k++) //check all smaller numbers
    {
        if (j%k == 0) //if j is divisible by any smaller number, it's not prime
        {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(j)
        n++;        
        if (n === 3) 
        break;
    }
 }


