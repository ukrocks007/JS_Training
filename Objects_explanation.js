/**
 * Object is a Key:value pair
 * Key: string
 * value: anything (number, string, array, obj, function, etc.)
 */

let obj = {};

console.log(typeof obj);

obj = {
    name: "Utkarsh",
    age: 27,
    social: ['FB', 'IG', 'TW'],
    address: {
        city: "Pune",
        pincode: 411037
    },
    ratePerHour: 33,
    getQuote: (hrs) => {return hrs * 33 * 70;},
    get city() {
        return this.address.city;
    },
    set city(ct) {
        this.address.city = ct;
    }
};

console.log(obj.city);
obj.city = "Mumbai";
console.log(obj.city);