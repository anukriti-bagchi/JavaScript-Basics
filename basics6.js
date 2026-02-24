// object is a collection of properties 

let person = {
    firstName: 'Anukriti',
    lastName : 'Bagchi',
    age : 27,
   fullName: function () {
  console.log(this.firstName + " " + this.lastName);
}

}

person.fullName();
console.log(person.firstName)
//another way of writing the above line 
// console.log(person[lastName]) ---> this will throw an error  "lastName is not defined", because we have to tell that the last name is in strings
//rewriting the above line correctly since lastname is a string 
console.log(person['lastName'])

console.log(person.lastName= 'Dan')
console.log(person.gender ='female')
// console.log(person)

delete person.gender
console.log('gender' in person) // to check if a property is there in object

for (let key in person)
{
  console.log(person[key])
}
//this for loop is to iterate through every property in our 'person' object 