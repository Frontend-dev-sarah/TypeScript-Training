"use strict";
//Generics
const addUID = (obj) => {
    let uid = Math.ceil(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "sarah", age: 22 });
//console.log(docOne)
//console.log(docOne.name) // not work, docOne does not about name property, to fix it, use `addUID2`
const addUID2 = (obj) => {
    let uid = Math.ceil(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUID2('Sar'); // T is string, but return object {...obj, uid}, which is {'s', 'a', 'r'}, to fix it see addUID3
let docThree = addUID2({ name: 'sarah', age: 33 }); //T is object
console.log(docTwo);
console.log(docThree.age);
const addUID3 = (obj) => {
    let uid = Math.ceil(Math.random()) * 100;
    return Object.assign(Object.assign({}, obj), { uid });
};
let docFour = addUID3({ name: "S", age: 10 });
const addUID4 = (obj) => {
    let uid = Math.ceil(Math.random()) * 100;
    return Object.assign(Object.assign({}, obj), { uid });
};
let docFive = addUID4({ name: 'flo', age: 11, weight: 200 });
const person1 = {
    name: 'Sarah',
    age: 22,
    habit: 'swim'
};
const person2 = {
    name: 'flo',
    age: 11,
    habit: ['swim', 'eat']
};
const person3 = {
    name: 'ssff',
    age: 2020,
    habit: { name: 'swim' }
};
//Enums
var JobTitleType;
(function (JobTitleType) {
    JobTitleType[JobTitleType["ACCOUNTANT"] = 0] = "ACCOUNTANT";
    JobTitleType[JobTitleType["MARKETER"] = 1] = "MARKETER";
    JobTitleType[JobTitleType["ADMINISTRITOR"] = 2] = "ADMINISTRITOR";
})(JobTitleType || (JobTitleType = {}));
const Lee = {
    name: 'Lee',
    age: 59,
    job: JobTitleType.ACCOUNTANT
};
console.log(Lee);
