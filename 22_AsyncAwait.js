//async function
const div = async (a, b) => {
    if (b != 0)
        return (a / b);
    else
        throw new Error("Can not divide by 0!");
}

// div(4, 2).then(console.log);
// div(4, 0).catch(console.log);

//Async keyword used for function init
const init = async () => {
    try {
        let ans = await div(4, 2);
        console.log(ans);
        ans = await div(4, 0);
        console.log(ans);
    } catch (ex) {
        console.log(ex);
    }
}

const finalise = async () => {
    await init();
    await div(4, 3);
}

finalise().then().catch();

init();

//You have to declare the function as async 
//if you want to use await inside that function