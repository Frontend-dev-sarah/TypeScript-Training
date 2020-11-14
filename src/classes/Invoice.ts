import { HasFormatter } from '../interfaces/HasFormatter.js' //an example class `Invoice2` is given below for `interface`
// it must have a `format` method that returns a `string`
 export class Invoice implements HasFormatter {

    //another way to replace the above codes, the modifier`public``readonly``private`is obligatoire in this way
    
     constructor(
     public client: string, 
     readonly details: string,
     private amount: number
     ) {}
   

     format(){ 
         return `From Invoice: ${this.client} ownes ${this.amount}€ for ${this.details}`
        } 
 };




export class InvoiceTest {
    client: string; //it is public by default, equal to `public client`
    readonly details: string; //can't change its values, but only read inside or outside of `class`
    private amount: number //`amount` is not accesible outside of `class`, but can be accessed via `format()` method

    constructor (c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //another way to replace the above codes, the modifier`public``readonly``private`is obligatoire in this way
    /**
     * constructor(
     * public client: string, 
     * readonly details: string,
     * private amount: number
     * ) {}
     */

    format() {
        return `Test: ${this.client} ownes ${this.amount}€ for ${this.details}`
    }

}