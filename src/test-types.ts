let arr: string[];
//arr.push('apple'); //uncatch error, `arr` isn't declared/defined, just potentially a string array

//it should be like bebow, to initiallize with an empty array
let arr2: string[] = [];
arr2.push('apple', 'orange')

//union type
let uniontest:(string|number)[] = [];
uniontest.push('clothes', 22)
//console.log(uniontest)

let tel: string|number;
tel = 1443333;
tel = '122233';

//object
let people: {
    name: string,
    age: number,
    address: '',
    hasJob: boolean
}
people = { 
    name: 'sarah',
    age: 20,
    address: '',
    hasJob: false
}

//any 
let anytype: any = 10;
anytype = 'name'

let anyarr: any[];

//function
let wash: Function;
wash = () => {
    console.log(" I am a wash function without arg")
}
let wash2 = (p1: string, p2: string, p3?: string|number)=> {
//`p3` means the third arg is optional
// or p3: string|number = 10, to give a default value like `wash3 -> p3`
}
let wash3 = (p1: string, p2: string, p3: string|number = 10): void=> {//return`void`keyword is optional
    console.log(p3)
    }
//wash3("10", "20")

let wash4 = (a: number, b: number): number => {//return `number` isn't neccesary bcz `a+b` is number, we know it will return number
    return a + b;
}
let result = wash4(5, 0)
//console.log(`this is from wash4 function, return a number ====${result}`)

//type alias
type NumOrStr = number | string;
const useAlias = (arg1: NumOrStr) => {
    if (typeof (arg1 === 'string')) {
        return `this is from string ${arg1}`
    } else {
        return `this is from number ${arg1}`
    }
}
//console.log(useAlias("20"))

type ObjAlias = {name: string, id: NumOrStr}
let userObjAlias = (user: ObjAlias)=> { 
    console.log(`${user.name} is typing his ID === ${user.id}`)
}
//userObjAlias({name: "sarah", id: "23"})

//function signature 1-3
//1. return void
let voidTest: (a: number, b: number) => void;
voidTest = (void1: number, void2: number) => {
    console.log(`this is from voidTest === ${void1+void2}`)
}
//voidTest(100, 200);
//2. return string
let stringTest: (a: number, b: number, action: string) => number; //return number
stringTest = (num1: number, num2: number, action: string):number => {//keyword `:number` isn't neccesary
    if(action === 'add') {
        return num1 + num2;
    }else {
        return num1 - num2;
    }
}
let results = stringTest(1000, 2000, 'add');
//console.log(`return string test "add" is ==== ${results}`);
//3. return void with object 
let objPerson: (user: {name: string, age: string, married: boolean, income: number}) => void;
objPerson = (user1: {
    name: string,
    age: string,
    married: boolean,
    income: number
}) => {
    let status;
    if (user1.married === true) {
         status = 'married'
    } else {
         status = 'not married'
    }
    console.log(`${user1.name} is ${user1.age} years old, she is ${status}, his salary is ${user1.income}`)
}
// objPerson({
//     name: 'Oly',
//     age: '20',
//     married: true,
//     income: 2890
// })