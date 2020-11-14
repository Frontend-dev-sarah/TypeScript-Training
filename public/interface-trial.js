import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('She', 'Human resources', 100);
docTwo = new Payment('He', 'Policeman', 150);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const personOne = {
    name: 'sarah',
    age: 20,
    canSpeak(speak) {
        console.log(speak + name);
    },
    canSpend(spend) {
        console.log(`${name} can spend ${spend} euros per month`);
        return spend;
    }
};
//console.log(personOne);
const sayHello = (person) => {
    console.log('Hello, this is ' + person.name);
};
//sayHello(personOne);
