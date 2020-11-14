import { InvoiceTest } from './classes/Invoice.js'

// const anchor = document.querySelector('a')!;
// //console.log(anchor?.href);
// const anchor2 = document.querySelector('a')!;
// console.log(anchor.href);



const invoiceOne = new InvoiceTest('Sarah', 'develops something front-end', 290);
const invoiceTwo = new InvoiceTest('Flo', 'develops something back-end', 320);
// invoiceOne.details = 'hello' //it's not allowed, bcz `detail` is `readonly`

let invoiceString: string[] = []//only string of array is allowed
invoiceString.push('red', 'blue')

let invoiceObject: InvoiceTest[] = []//only Invoice class object of array is allowed
invoiceObject.push(invoiceOne, invoiceTwo);
invoiceObject.forEach((inv)=> console.log(inv.client, inv.details+'.', inv.format()))



const form = document.querySelector('.form') as HTMLFormElement;

const invpay = document.querySelector('#invpay') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#detail') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    //console.log(invpay.value);
    //console.log(tofrom.value);
    //console.log(amount.valueAsNumber)
  
})

