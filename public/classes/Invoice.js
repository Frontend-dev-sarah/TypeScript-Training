// it must have a `format` method that returns a `string`
export class Invoice {
    //another way to replace the above codes, the modifier`public``readonly``private`is obligatoire in this way
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `From Invoice: ${this.client} ownes ${this.amount}€ for ${this.details}`;
    }
}
;
export class InvoiceTest {
    constructor(c, d, a) {
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
        return `Test: ${this.client} ownes ${this.amount}€ for ${this.details}`;
    }
}
