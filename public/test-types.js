"use strict";
let arr;
//arr.push('apple'); //uncatch error, `arr` isn't declared/defined, just potentially a string array
//it should be like bebow, to initiallize with an empty array
let arr2 = [];
arr2.push('apple', 'orange');
//union type
let uniontest = [];
uniontest.push('clothes', 22);
//console.log(uniontest)
let tel;
tel = 1443333;
tel = '122233';
//object
let people;
people = {
    name: 'sarah',
    age: 20,
    address: '',
    hasJob: false
};
//any 
let anytype = 10;
anytype = 'name';
let anyarr;
//function
let wash;
wash = () => {
    console.log(" I am a wash function without arg");
};
let wash2 = (p1, p2, p3) => {
    //`p3` means the third arg is optional
    // or p3: string|number = 10, to give a default value like `wash3 -> p3`
};
let wash3 = (p1, p2, p3 = 10) => {
    console.log(p3);
};
//wash3("10", "20")
let wash4 = (a, b) => {
    return a + b;
};
let result = wash4(5, 0);
const useAlias = (arg1) => {
    if (typeof (arg1 === 'string')) {
        return `this is from string ${arg1}`;
    }
    else {
        return `this is from number ${arg1}`;
    }
};
let userObjAlias = (user) => {
    console.log(`${user.name} is typing his ID === ${user.id}`);
};
//userObjAlias({name: "sarah", id: "23"})
//function signature 1-3
//1. return void
let voidTest;
voidTest = (void1, void2) => {
    console.log(`this is from voidTest === ${void1 + void2}`);
};
//voidTest(100, 200);
//2. return string
let stringTest; //return number
stringTest = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let results = stringTest(1000, 2000, 'add');
//console.log(`return string test "add" is ==== ${results}`);
//3. return void with object 
let objPerson;
objPerson = (user1) => {
    let status;
    if (user1.married === true) {
        status = 'married';
    }
    else {
        status = 'not married';
    }
    console.log(`${user1.name} is ${user1.age} years old, she is ${status}, his salary is ${user1.income}`);
};
// objPerson({
//     name: 'Oly',
//     age: '20',
//     married: true,
//     income: 2890
// })
