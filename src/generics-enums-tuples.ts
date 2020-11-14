//Generics

const addUID = (obj: object) => {
    let uid = Math.ceil(Math.random()*100);
    return {...obj, uid}
}

let docOne = addUID({name: "sarah", age: 22})
//console.log(docOne)
//console.log(docOne.name) // not work, docOne does not about name property, to fix it, use `addUID2`

const addUID2 = <T>(obj: T) => { //it captures the properties passed to the Type...
    let uid = Math.ceil(Math.random()*100);
    return {...obj, uid}
}


let docTwo = addUID2('Sar')// T is string, but return object {...obj, uid}, which is {'s', 'a', 'r'}, to fix it see addUID3
let docThree = addUID2({name: 'sarah', age: 33}) //T is object
console.log(docTwo)
console.log(docThree.age)


const addUID3 = <T extends object>(obj: T) => { //to specify the exact type of properties in the object, see addUID4
    let uid = Math.ceil(Math.random())*100;
    return {...obj, uid}
}
let docFour = addUID3({name: "S", age: 10});


const addUID4 = <T extends {name: string, age: number}>(obj: T) => {
    let uid = Math.ceil(Math.random())*100;
    return {...obj, uid}
}
let docFive = addUID4({name: 'flo', age: 11, weight: 200})
//console.log(docFive.weight);


//With interfaces


interface Person <T> {
    name: string;
    age: number;
    habit: T;
}

const person1: Person<string> = {
    name: 'Sarah',
    age: 22,
    habit: 'swim'
}

const person2: Person<string[]> = {
    name: 'flo',
    age: 11,
    habit: ['swim', 'eat']
}

const person3: Person<{name: string}> = {
    name: 'ssff',
    age: 2020,
    habit: {name: 'swim'}
}

//Enums
enum JobTitleType { ACCOUNTANT, MARKETER, ADMINISTRITOR }
interface Human {
    name: string;
    age: number;
    job: JobTitleType
}

const Lee: Human = {
    name: 'Lee',
    age: 59,
    job: JobTitleType.ACCOUNTANT //job accountant is 0
}
//console.log(Lee) 

//Tuple, seems like array, but...below is normal array
let arrayOne = ['one', 2, true]
arrayOne[0] = 4;

let tupleOne:[string, boolean, number];
tupleOne = ['two', true, 0];
tupleOne[0] = 'three';
