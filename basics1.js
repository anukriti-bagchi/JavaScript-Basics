console.log("Hello World! \nAnukriti is back to coding!");

let a=4;
console.log(typeof (a));

let b=238.9
console.log(typeof(b))

let c= "Anukriti Bagchi"
console.log(typeof(c))

let required = true;
console.log(typeof(required))

//when we tried let c= a+b, it will give an error because we cannot redeclare a variable with let keyword but we can do it with var keyword. So we have to use var keyword to declare c.
c= a+b
console.log(c)
//reassigning is allowed with let keyword but not redeclaring. So we can reassign c with a new value but we cannot redeclare it with let keyword.
//var c = a+b, is also allowed.
console.log(!required)