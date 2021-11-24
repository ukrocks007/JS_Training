let x = 200;

if(x == 200) {
    console.log(`${x} is equal 200!`);
}

let number = Math.round(Math.random() * 10);
console.log("number =>", number);
let remainder = number % 2;

if(remainder == 1) {
    console.log(`${number} is odd`);
} else {
    console.log(number + " is odd");
}

let today = new Date();
console.log(today);
let hour = Number(today.getHours());
console.log("Hour =>", hour);

if (hour <= 12) {
    greeting = "Good Morning!";
} else if (hour <= 16) {
    greeting = "Good Afternoon!";
} else if (hour <= 20) {
    greeting = "Good Evening!";
} else {
    greeting = "Good Night!";
}

console.log(greeting);