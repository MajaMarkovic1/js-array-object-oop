var object = {
    'name' : 'John',
    'age' : 30
}

var array = [
    {'name' : 'Marko', 'age' : 40},
    {'name' : 'Petar', 'age' : 20}
]

// ES5

function Person (firstName, lastName, gender){
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender

    

}

Person.prototype._count = 1; // static variable

Person.prototype._counting = function(){  // static method
    Person.count++
    return 'Static method has been called'
}

console.log(Person.prototype._count)
console.log(Person.prototype._counting())
console.log(Person.prototype._count)



Person.prototype.getFullName = function(){       // defining method for class Person in es5
    return this.firstName + ' ' + this.lastName
}



function Student(studentId, firstName, lastName, gender){  // inheritance from Person
    this.studentId = studentId
    // this._super.call(this, firstName, lastName, gender)
    Person.call(this, firstName, lastName, gender)
}

Student.prototype = Object.create(Person.prototype) // Student inherits from a new object which inherits from Person 
Student.prototype.constructor = Student // setting constructor back to Student
// Student.prototype._super = Person // setting parent


var person1 = new Person('John', 'Smith', 'male')
var student1 = new Student(1, 'Maja', 'Markovic', 'female')


// console.log(person1.gender)
// console.log(person1.getFullName())
// console.log(student1)
// console.log(student1.getFullName())

//console.log(object)
//console.log(array)






// ES6


class Person1{

    constructor(firstName, lastName, gender){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    static getCount(){
        return Person1.count
    }
    
    static counting(){
        this.count++
        return 'Countinggg'
    }


}

class Student1 extends Person1 {

    constructor(firstName, lastName, gender, studentId){
        super(firstName, lastName, gender)
        this.studentId = student1
    }
}

Person1.count = 0

console.log(Person1.getCount())
console.log(Person1.counting())
console.log(Person1.getCount())
console.log(Person1.counting())
console.log(Person1.getCount())



let person2 = new Person1('Petar', 'Petrovic', 'male')
let student2 = new Student1('Susan', 'Sarandon', 'female', 2)

console.log(person2.firstName)
console.log(person2.getFullName())
console.log(student2.lastName)
console.log(student2.getFullName())





// Promise


let x = 1

let promise = new Promise((resolve, reject) => {
    if (x === 0){
        let phone = {
            brand: 'Samsung',
            color: 'black'
        }
        resolve(phone)
    } else {
        reject(new Error('sorry, no phone'))
    }
})

promise.then((message) => {
    console.log('you got ' + message.brand)
})
.catch((err) => {
    console.log(err)
})

