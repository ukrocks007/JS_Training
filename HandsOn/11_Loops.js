/**
 * For Loop
 * Write a for loop to print following pattern
 * 
 *                  #####
 *                  ####
 *                  ###
 *                  ##
 *                  #
 */

for(let i = 5; i > 0; i--) {
    let str = "";
    for(let j = 0; j < i; j++)
    str += '#';
    console.log(str);
}

/**
 * For In Loop
 * Count the strings from following array.  
 */
let arr = ['1', 12, false, "world", {}, [1, 23, 3]];
let count=0;
for(let x in arr) {
    if(typeof arr[x] === 'string') {
        count++;
    }
}
console.log(`Total strings: ${count}`);

/**
 * While Loop
 * Use while loop to find x (0, 1, 2, 3, ...)
 * where ((x * 123) + 321) / 321 > 12345678
 */
let x = 0;
while((((x * 123) + 321) / 321) < 12345678) {
    x++;
}
console.log(`x => ${x}`);

/**
 * Do While Loop
 * Convert a decimal number to binary
 * Example: 8
 * |╔═══════════╦══════════╦═══════════╗|
 * |║ Operation ║ Division ║ Remainder ║|
 * |╠═══════════╬══════════╬═══════════╣|
 * |║ 8 / 2     ║        4 ║         0 ║|
 * |║ 4 / 2     ║        2 ║         0 ║|
 * |║ 2 / 2     ║        1 ║         0 ║|
 * |║ 1 / 2     ║        0 ║         1 ║|
 * |╚═══════════╩══════════╩═══════════╝|
 * 
 * Ans = 1000
 * 
 * |╔═══════════╦══════════╦═══════════╗|
 * |║ Operation ║ Division ║ Remainder ║|
 * |╠═══════════╬══════════╬═══════════╣|
 * |║ 7 / 2     ║        3 ║         1 ║|
 * |║ 3 / 2     ║        1 ║         1 ║|
 * |║ 1 / 2     ║        0 ║         1 ║|
 * |╚═══════════╩══════════╩═══════════╝|
 *
 * Ans = 111
 */
let num = 8, div, rem, binary=[];
do {
    div = Math.floor(num / 2);
    rem = num % 2;
    binary.push(rem);
    num = div;
} while (div != 0);
console.log(binary.reverse().join(''));