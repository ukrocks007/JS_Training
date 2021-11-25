//Declaration
var x = 3, y = 6;

//Addition
console.log("(x + y) =>", (x + y));

//Subtraction
console.log("(x - y) =>", (x - y));

//Multiplication
console.log("(x * y) =>", (x * y));

//Division
console.log("(x / y) =>", (x / y));
console.log("(y / x) =>", (y / x));
console.log("(x / 0) =>", (x / 0));

//Assignement
x = 3, y = 2;

//Exponentiation
console.log("(x ** y) =>", (x ** y));

//Modulus
console.log("(x % y) =>", (x % y));

//Increment
x++;
console.log("(x++) =>", (x));

//Decrement
x--;
console.log("(x--) =>", (x));

// Operation and assignment ( a OP= b => a = a OP b)
// a+=b => a = a + b
x = 4, y = 3;
x += y;
console.log("(x += y) =>", x)
x = 2, y = 3;
x -= y;
console.log("(x -= y) =>", x)
x = 2, y = 3;
x *= y;
console.log("(x *= y) =>", x)
x = 2, y = 3;
x /= y;
console.log("(x /= y) =>", x)
x = 2, y = 3;
x %= y;
console.log("(x %= y) =>", x)
x = 2, y = 3;
x **= y;
console.log("(x **= y) =>", x)

// ==	equal to (value)
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

console.log("x == y =>", x == y);
console.log("x === y =>", x === y);
console.log("x != y =>", x != y);
console.log("x !== y =>", x !== y);
console.log("x > y =>", x > y);
console.log("x < y =>", x < y);
console.log("x >= y =>", x >= y);
console.log("x <= y =>", x <= y);
console.log("x > y ? y : x =>", x > y ? y : x);

console.log("x > y && y < 20", x > y && y < 20); // Both the expressions should be true
console.log("x > y || y < 20", x > y || y < 20); // Any one of the expression should be true
console.log("!(x > 10)", !(x > 10)); // Flips the output (T=>F, F=>T)

// <condition> ? <return when true> : (<condition2> ? <return when true> : <return when false>)