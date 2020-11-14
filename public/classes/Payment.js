export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `From Payment: ${this.recipient} should pay ${this.details} of ${this.amount} of money`;
    }
}
