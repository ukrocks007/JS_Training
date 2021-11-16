let str = "Hello World!";

console.log(str);
console.log("str.length =>", str.length);

console.log("str.slice(6) =>", str.slice(6));
console.log("str.slice(6, 2) =>", str.slice(6, 11));

console.log("str.substring(6) =>", str.substring(6));
console.log("str.substring(6, 11) =>", str.substring(6, 11));

console.log("str.substr(6) =>", str.substr(6));
console.log("str.substr(6, 5) =>", str.substr(6, 5));

console.log("str.replace('World', 'Everyone') =>", str.replace('World', 'Everyone'));

console.log("str.toUpperCase() =>", str.toUpperCase());
console.log("str.toLowerCase() =>", str.toLowerCase());

console.log("'Hello '.concat('World', '!') =>", 'Hello '.concat('World', '!'));

console.log('"   0   c   1   ".trim() =>', "   0   c   1   ".trim())
console.log('"5".padStart(4) =>', "5".padStart(4, 0))
console.log('"5".padEnd(4) =>', "5".padEnd(4, 0))