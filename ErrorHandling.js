// Try - Catch
try {
    b+= 5
} catch (e) {
    console.log("Inside Catch Block", e);
}

// Try - Catch with Throw
try {
    var a = 0;
    if(a < 5) {
        throw new Error("a must be larger than 5");
    }
} catch(e) {
    console.log("Inside Catch Block", e);
}

// Try - Catch - Finally
var score = 1;
try {
    if(score > 2) {
        c++;
    }
} catch(e) {
    console.log("Inside Catch Block", e);
} finally {
    console.log("Inside Finally Block");
    score = 3;
}