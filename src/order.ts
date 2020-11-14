import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ShowList } from './classes/ShowList.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.form') as HTMLFormElement;
const invpay = document.querySelector('#invpay') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#detail') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
//const ul = document.querySelector('ul')!; this is also ok bcz only one `ul` in the form
const list = new ShowList(ul);


form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    let docs: HasFormatter;
    if(invpay.value === 'invoice') {
        docs = new Invoice (toform.value, detail.value, amount.valueAsNumber)
    }else {
        docs = new Payment(toform.value, detail.value, amount.valueAsNumber)
    }
    
     list.render(docs, invpay.value, 'start')

})

// to replace the above `docs` in the form event to be a tuple
let values:[string, string, number];
values = [toform.value, detail.value, amount.valueAsNumber];
form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    if(invpay.value === 'invoice') {
       let docs = new Invoice(...values)
    } else {
        let docs = new Payment(...values)
    }
})
