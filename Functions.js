/**
 * Functions has parameters (0 to n).
 * Functions can return result of any types.
 * We can invoke a function by calling it using ()
 */

//Function declaration
function sum(a, b) {
    return (a + b);
}
let res = sum(3, 3);
console.log(res);

//Function assignment to a const
const addition = (a, b) => {
    return (a + b);
}
console.log(addition(4, 6));

//the variables declared in the function code block is not accessible outside

const test = () => {
    var info = "testing..."
}

console.log(info);