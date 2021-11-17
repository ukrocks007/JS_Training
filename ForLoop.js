//Basic For Loop
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += i;
}
console.log("sum =>", sum);

//Multiple initializations
let text = "";
let cars = ['Honda', 'Audi', 'BMW'];
for (let i = 0, len = cars.length; i < len; i++) {
    text += "\n" + cars[i];
}
console.log(text, "\n");

//No declarations
let i = 2;
let len = cars.length;
text = "";
for (; i < len; i++) {
    text += cars[i];
}
console.log(text, '\n');

//No statement for increment
i = 0;
len = cars.length;
text = "";
for (; i < len;) {
    text += cars[i] + " ";
    i++;
}
console.log(text);