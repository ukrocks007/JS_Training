/**
 * JSON is nothing but a data representation in terms of key-value pairs.
 * { Key: Value }
 */

//JSON in string format
let strJSONData = '{"name": "John", "age": 50}';
//parsing JSON to object
let parsed = JSON.parse(strJSONData);
console.log(typeof parsed);
console.log(parsed);

//Converting object back to JSON string
let str = JSON.stringify(parsed);
console.log(str);

/**
 * JSON format is used to send and receive data to and fro between 
 * frontend and backend
 */

/**
 * So JSON.parse & JSON.stringify methods are useful to play with JSON
 */