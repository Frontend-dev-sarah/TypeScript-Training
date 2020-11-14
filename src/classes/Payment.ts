import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter {
    constructor(
       readonly recipient: string,
       public details: string,
       private amount: number
    ) {}

    format() {
        return `From Payment: ${this.recipient} should pay ${this.details} of ${this.amount} of money`
    }
}