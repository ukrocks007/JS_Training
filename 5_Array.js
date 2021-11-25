let arr = [1, 2, 3, 4];
let arr1 = [1, "2", true, [1, 2], { name: "Utkarsh" }];
const cars = new Array("Saab", "Volvo", "BMW");

console.log(arr1, '\n');

console.log("arr1.length =>", arr1.length);

console.log("cars[2] =>", cars[2]);

//Numbered Indices
cars[2] = 'Audi';
console.log("cars[2] =>", cars[2]);

//Push method: insert an element at the end of an arry
arr.push(0);
console.log("arr =>", arr);
arr.push(0);
//Pop method: removes an element from end of the array
arr.pop();
console.log("arr =>", arr);

//default sort method convert the elements to string and sorts it
console.log("arr.sort() =>", arr1.sort())
console.log(arr1);

//custom sort method
let persons = [{name: "jane", age: 20}, {name: "Yash", age: 27}, {name: "Raj", age: 10}];
persons.sort((a, b) => a.age > b.age ? 1 : -1);