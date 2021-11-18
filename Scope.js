/**
 * Global Scope
 * carName is global and can be accessed even from within a block.
 */

var carName = "BMW";

function print() { console.log(carName); }
print();
console.log(carName);

/**
 * Function Scope
 * Variables defined inside functions can not be accessed
 * from outside code.
 */

function printMaxSpeed() {
    var speed = 200;
    console.log(speed);
}
//console.log(speed); // Throws an error (undefined)

/**
 * Block Scope
 * Variables defined inside a block
 * can not accessed from outside
 */

{
    let x = 10;
}
console.log(x);