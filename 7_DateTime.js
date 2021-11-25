const d = new Date();
console.log("d =>", d.toLocaleString());

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log("d1 =>", d1.toLocaleString());
const d2 = new Date(2018, 11, 24, 10, 33, 30);
console.log("d2 =>", d2.toLocaleString());
const d3 = new Date(2018, 11, 24, 10, 33);
console.log("d3 =>", d3.toLocaleString());
const d4 = new Date(2018, 11, 24, 10);
console.log("d4 =>", d4.toLocaleString());
const d5 = new Date(2018, 11, 24);
console.log("d5 =>", d5.toLocaleString());
const d6 = new Date(2018, 11);
console.log("d6 =>", d6.toLocaleString());

// new Date(date string)
const d7 = new Date("October 13, 2014 11:13:00");
console.log("d7 =>", d7.toLocaleString());
// new Date(milliseconds) => Timestamp
const d8 = new Date(100000000000);
console.log("d8 =>", d8.toLocaleString());

// ISO Date
console.log("d1.toISOString() =>", d1.toISOString());

console.log("d1.toUTCString() =>", d1.toUTCString());

//Get Methods
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());
console.log("d1.getDate()", d1.getDate());
console.log("d1.getHours()", d1.getHours());
console.log("d1.getMinutes()", d1.getMinutes());
console.log("d1.getSeconds()", d1.getSeconds());
console.log("d1.getMilliseconds()", d1.getMilliseconds());
console.log("d1.getTime()", d1.getTime());
console.log("d1.getDay()", d1.getDay());

//Set Methods
d1.setDate(d1.getDate() + 50);
console.log("d1.setDate(d1.getDate() + 50) =>", d1.toISOString());
d1.setFullYear(2000);
console.log("d1.setFullYear(2000) =>", d1.toISOString());
d1.setHours(d1.getHours() + 1);
console.log("d1.setHours(1) =>", d1.toISOString());
d1.setMilliseconds(d1.getMilliseconds() + 1);
console.log("d1.setMilliseconds(1) =>", d1.toISOString());
d1.setMinutes(d1.getMinutes() + 1);
console.log("d1.setMinutes(1) =>", d1.toISOString());
d1.setMonth(d1.getMonth() + 12);
console.log("d1.setMonth(1) =>", d1.toISOString());
d1.setSeconds(d1.getSeconds() + 1);
console.log("d1.setSeconds(1) =>", d1.toISOString());
d1.setTime(100000000000);
console.log("d1.setTime(100000000000) =>", d1.toISOString());