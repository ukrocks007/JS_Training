//Basic ForIn Loop with object
const person = { firstName: "Utkarsh", lastName: "Mehta", age: 27 };

let text = "";
for (let x in person) {
    text += `${x} => ${person[x]}\n`;
}

console.log(text);

//Basic ForIn Loop with array
const numbers = [45, 4, 9, 16, 25];

let txt = 0;
for (let x in numbers) {
    txt += numbers[x];
}
console.log(txt);

//ForEach loop over array with a function
// Signature => fn(value, index, array)
txt = 0;
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value;
}
console.log(txt);