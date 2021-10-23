class Invocador1 {
	companyProfile : string;

	constructor(public name : string, public city : string, public state : string) {
		this.companyProfile = name + ", " + city + ", " + state;
	}
}

var googleInvoice = new Invocador1('Google', 'Mountain View', 'State');
var yahooInvoice = new Invocador1('Yahoo', 'SF', 'State');


console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);