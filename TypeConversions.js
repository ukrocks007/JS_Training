Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN

let y = "5";      // y is a string
let x = + y;      // x is a number

let yy = "John";   // y is a string
let xy = + yy;      // x is a number (NaN)

String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

d = new Date();
Number(d)          // returns 1404568027739

d = new Date();
d.getTime()        // returns 1404568027739

String(Date())
Date().toString()

Number(false)     // returns 0
Number(true)      // returns 1

String(false)      // returns "false"
String(true)       // returns "true"

false.toString()   // returns "false"
true.toString()    // returns "true"

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2