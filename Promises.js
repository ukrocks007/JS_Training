//Resolve
// This function waits for 3 seconds and returns "Hello World!"
const asyncFunc = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Hello World!");
            }, 3000)
        } catch (ex) {
            reject(ex);
        }
    })
}

//Calls the function and console.log the output
asyncFunc().then(console.log);

//Reject
const asyncFuncReject = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hello World Error!");
        }, 3000)
    })
}

//Calls the function and console.log the error
asyncFuncReject().catch(console.log);

//With resolve and reject both
const div = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b > 0)
            resolve(a / b);
        else
            reject("Can not divide by 0!");
    })
}

div(4, 2).then(console.log);
div(4, 0).catch(console.log);