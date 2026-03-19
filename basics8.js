//Inheritance is the main pillar o-in object oriented programming 
//one class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of other is known as subclass(derived class, child class
//the class whose properties are inherited is known as superclass)

const Person = require("./basics7.js")
class Pet extends Person
//successfully inheriting a person which is a parent class to its child

{

    get location()
    {
        return "BlueCross"
    }
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName, lastName)
    }
}
let pet = new Pet ("sam","san")
pet.fullName()
console.log(pet.location)
