// .then success <= resolve
// .catch error  <= reject

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

// Calls the function and console.log the output
asyncFunc().then((data) => {
    console.log(data)
}).catch((ex) => console.log(ex));

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
        if (b != 0)
            resolve(a / b);
        else
            reject("Can not divide by 0!");
    })
}

div(4, 2).then(console.log).catch(console.log);
div(4, 0).catch(console.log).then(console.log);

// setTimeout(() => { }, 5000);

const saveToDB = (data) => {
    return new Promise((resolve, reject) => {
        try {
            //connectw with db

            //save data

            //return data
            resolve(data);
        } catch (ex) {
            reject(ex);
        }
    });
}
const handleData = (d) => { console.log(d); }, handleError = (d) => { console.log(d); };
saveToDB("I am learning promises.").then(data => {
    handleData(data);
}).catch(ex => {
    handleError(ex);
});

let saveToDBPromise = saveToDB("data");
saveToDBPromise.then(data => { handleData(data); });
saveToDBPromise.catch(ex => { handleError(ex); });

//pending
//resolved => Fullfilled
//rejected