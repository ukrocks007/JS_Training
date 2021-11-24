//Creating a class
class Person {
    //constructor gets called when an class is initialied
    constructor(firstName, lastName, age) {
        console.log("Inside constructor");
        //this points to the object being created
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

//Creating an object of a class
var john = new Person("John", "Doe", "29");
console.log(john, '\n');

//Class with a method
class student {
    constructor(marks) {
        this.marks = marks;
    }
    getGrades() {
        if (this.marks < 40) {
            return "Failed!"
        } else if (this.marks >= 40 && this.marks <= 60) {
            return "Second Class!";
        } else if (this.marks >= 61 && this.marks <= 70) {
            return "First Class!";
        } else {
            return "First Class with Distinction!";
        }
    }
}

var jane = new student(65);
console.log(jane, jane.getGrades());

//Inherit Person class to Teacher

class Teacher extends Person {
    constructor(firstName, lastName, age, subjects, marks) {
        //Calling constructor of person class
        super(firstName, lastName, age);
        this._subjects = subjects;
        this.marks = marks;
    }
    getFullname() {
        return `${this.firstName} ${this.lastname}`;
    }
    //Getter
    get subjects() {
        return this._subjects;
    }
    //Setter
    set subjects(x) {
        this._subjects = x;
    }
}

var teacher1 = new Teacher("Jane", "Doe", 25, ["Math", "Science"], [70, 80]);
console.log(teacher1);

//Using Getter & Setter
console.log(teacher1.subjects);
teacher1.subjects = ["Geography", "English"];
console.log(teacher1.subjects);

//Static methods
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello(x) {
        return "Hello " + x.name;
    }
}
let myCar = new Car("Ford");
console.log(Car.hello({ name: "Jane" }));