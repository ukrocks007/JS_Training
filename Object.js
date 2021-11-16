let obj = {
    firstName: "Utkarsh",
    lastName: "Mehta",
    city: "Pune",
    company: "TechHut"
};

console.log("obj =>", obj);
//Named Indices
console.log("obj['city'] =>", obj['city']);

console.log("Object.keys(obj) =>", Object.keys(obj));
console.log("Object.values(obj) =>", Object.values(obj));
delete obj.company;
console.log("obj =>", obj);

//Nested objects
obj['social'] = {
    facebook: "https://fb.com/something",
    instagram: "some link"
}

console.log("obj =>", obj);

obj['data'] = [12, 34, 56, 78];
console.log("obj =>", obj);
console.log("obj.data =>", obj.data);

console.log("obj['data'][0] =>", obj['data'][0]);

obj['fullName'] = function () {
    return this.firstName + " " + this.firstName;
}

console.log("obj =>", obj);

console.log("obj.fullName() =>", obj.fullName());

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
    set lang(lang) {
        this.language = lang;
    }
};

console.log("person.lang =>", person.lang);

person.lang = "de";

console.log("person.lang =>", person.lang);

obj = { counter: 0 };

Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});

console.log("obj =>", obj);

// Play with the counter:
obj.add = 5;

console.log("obj.counter =>", obj.counter);

//Constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let pr = new Person("Jane", "Doe", "24", "Blue");

console.log("pr =>", pr);
