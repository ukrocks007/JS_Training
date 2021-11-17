let text = '', i = 0;
while (i < 10) {
    text += "The number is " + i + '\n';
    i++;
}
console.log(text);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
i = 0;
text = "";

while (cars[i]) {
    text += cars[i] + ' ';
    i++;
}

console.log(text);