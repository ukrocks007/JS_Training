/**
 * Write a function which will convert a string to number
 * Returns:
 * {'number': <converted_number>}
 * {'message': 'Number is not valid!'}
 */
function convertNumber(str) {

    let output = { number: undefined, message: undefined };
    if (Number(str)) {
        output["number"] = Number(str);
    } else {
        output["message"] = 'Number is not valid!';
    }
    return output;
}

console.log(convertNumber("33"));

console.log(convertNumber("asda"));