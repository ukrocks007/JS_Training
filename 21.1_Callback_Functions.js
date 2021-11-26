// Function to print data
const prettyPrint = (data) => {
    console.table(data);
}

/**
 * 
 * @param {*} rows Number of data rows
 * @param {*} headers Array with keys for data
 * @param {*} data Array of Array containing data
 * @param {*} print callback function to print data
 */
const createData = (rows, headers, data, print) => {
    let final = []
    for (let i = 0; i < rows; i++) {
        let row = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = data[i][j];
        }
        final.push(row);
    }
    print(final);
}

createData(2, ['name', 'age'], [["Utkarsh", 27], ["Yash", 24]], prettyPrint);