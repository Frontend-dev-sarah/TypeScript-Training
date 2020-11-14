import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice ('She', 'Human resources', 100);
docTwo = new Payment ('He', 'Policeman', 150);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
//console.log(docs)



interface IsPerson {
    name: string;
    age: number;
    canSpeak(speak: string): void;
    canSpend(spend: number): number;
}

const personOne = {
    name: 'sarah',
    age: 20,
    canSpeak(speak: 'My name is : ') {
        console.log(speak + name)
    },
    canSpend(spend: 2900) {
        console.log(`${name} can spend ${spend} euros per month`)
        return spend;
    }
}

//console.log(personOne);

const sayHello = (person: IsPerson) => {
    console.log('Hello, this is ' + person.name)
}
//sayHello(personOne);

