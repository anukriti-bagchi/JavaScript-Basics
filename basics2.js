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

for (let k=0;k<=10;k++)
{
  console.log(k)
}