"use strict";
var Invocador1 = /** @class */ (function () {
    function Invocador1(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invocador1;
}());
var googleInvoice = new Invocador1('Google', 'Mountain View', 'State');
var yahooInvoice = new Invocador1('Yahoo', 'SF', 'State');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
