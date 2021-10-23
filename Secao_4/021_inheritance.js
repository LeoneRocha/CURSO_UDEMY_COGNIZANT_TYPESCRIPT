"use strict";
class Report {
    constructor(name) {
        this.name = name;
        this.companyProfile = name;
    }
}
class Invocador2 extends Report {
    constructor(name, total) {
        super(name);
        this.name = name;
        this.total = total;
    }
    printInvoice() {
        return this.name + ", " + this.total;
    }
}
class BillOfLading extends Report {
    constructor(name, city, state) {
        super(name);
        this.name = name;
        this.city = city;
        this.state = state;
    }
    printBol() {
        return this.name + ", " + this.city + ", " + this.state;
    }
}
var invoice = new Invocador2('Google', 200);
var bol = new BillOfLading('Google', 'Scottsdale', 'AZ');
console.log(invoice.printInvoice());
console.log(bol.printBol());
