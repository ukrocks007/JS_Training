let x = 121;
/**
 * if x is greater than 100
 * print 'x is greater than 100'
*/




let age = Math.round(Math.random() * 100);
console.log("Age =>", age);
/**
 * print appropriate stirng for age ranges
 * 0 - 12  => Underage
 * 13 - 19 => Teenage
 * 20 - 60 => Adult
 * 60+     => Senior Citizen
 */



/**
 * |╔═══════════════════════╗|
 * |║ age  price change     ║|
 * |╠═══════════════════════╣|
 * |║ >=5   10% depriciation║|
 * |║ >=10  15% depriciation║|
 * |║ >=25  40% depriciation║|
 * |║ >=30  50% depriciation║|
 * |╚═══════════════════════╝|
 * 
 * |╔════════════════════════════╗|
 * |║ kms  price change          ║|
 * |╠════════════════════════════╣|
 * |║ >=500000   10% depriciation║|
 * |║ >=1000000  20% depriciation║|
 * |║ >=2500000  30% depriciation║|
 * |║ >=3000000  40% depriciation║|
 * |║ >=5000000  50% depriciation║|
 * |╚════════════════════════════╝| 
 * 
 * @param {*} originalPrice Original Price of the vehicle
 * @param {*} age Age of the vehicle
 * @param {*} kms Kilometers the vehicle has driven
 */
function calculateResellPrice(originalPrice, age, kms) {

}

console.log(calculateResellPrice(900000, 5, 400000));
console.log(calculateResellPrice(1200000, 10, 900000));
console.log(calculateResellPrice(400000, 8, 2510000));
console.log(calculateResellPrice(2000000, 25, 3500000));
console.log(calculateResellPrice(1800000, 45, 600000));