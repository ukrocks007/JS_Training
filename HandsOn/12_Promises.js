/**
 * Rewrite as arrow function
 * 
 * @param {*} data Array of numbers
 * @returns sum of array i times
 */
function analyseData(data) {
    let sum = 0;
    for (let i = 0; i < data.length * i; i++) {
        sum += data[i % data.length];
    }
    return sum;
}

/**
 * 
 * @param {*} id Id of the row
 * @returns Promise
 */
const findById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve([{ name: "Utkarsh", id: id }]);
            }, 5000);
        } catch (ex) {
            reject(ex);
        }
    })
}

//Call the findById function and print the data

/**
 * Write a function which returns a promise
 * Wait for 3 seconds to start finding the num in numbers
 * When num is less then zero reject the call
 * Take 2 arguments 
 * @param numbers Array of number
 * @param num Number to find from array
 */

const find = (numbers, num) => {
    return new Promise((myResolve, myReject) => {

        setTimeout(() => {
            let found = numbers.indexOf(num);
            if (found === -1) {
                myReject();
            } else {
                myResolve(found);
            }
        }, 3000);

    });
}

find([1, 2, 3, 4, 5, 6], 4).then((index) => {
    console.log('Found 4 at ' + index + ' index');
}).catch(() => {
    console.log('Did not found!');
});

console.log("Console.log statement after promise call");