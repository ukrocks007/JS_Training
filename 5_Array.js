let arr = [1, 2, 3, 4];
let arr1 = [1, "2", true, [1, 2], { name: "Utkarsh" }];
const cars = new Array("Saab", "Volvo", "BMW");

console.log(arr1, '\n');

console.log("arr1.length =>", arr1.length);

console.log("cars[2] =>", cars[2]);

//Numbered Indices
cars[2] = 'Audi';
console.log("cars[2] =>", cars[2]);

arr.push(0);
console.log("arr =>", arr);

console.log("arr.sort() =>", arr.sort())
console.log(arr);