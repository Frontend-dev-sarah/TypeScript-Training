import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ShowList } from './classes/ShowList.js';
const form = document.querySelector('.form');
const invpay = document.querySelector('#invpay');
const toform = document.querySelector('#tofrom');
const detail = document.querySelector('#detail');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
//const ul = document.querySelector('ul')!; this is also ok bcz only one `ul` in the form
const list = new ShowList(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (invpay.value === 'invoice') {
        docs = new Invoice(toform.value, detail.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toform.value, detail.value, amount.valueAsNumber);
    }
    list.render(docs, invpay.value, 'start');
});
