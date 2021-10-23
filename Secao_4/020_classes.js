"use strict";
class Invocador1 {
    constructor(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
}
var googleInvoice = new Invocador1('Google', 'Mountain View', 'State');
var yahooInvoice = new Invocador1('Yahoo', 'SF', 'State');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
