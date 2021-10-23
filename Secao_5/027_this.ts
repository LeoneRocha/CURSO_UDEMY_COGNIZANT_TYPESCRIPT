class Invocador5 {
	total : number;

	constructor(total : number) {
		this.total = total;
	}

	printTotal() {
		console.log(this.total);
	}

	// printLater(time : number) {
	// 	setTimeout(function() {
	// 		console.log(this.total);
	// 	}, time);
	// }

	printLater(time : number) {
		setTimeout(() => {
			console.log(this.total);
		}, time);
	}
}

var myInvocador = new Invocador5(400);
myInvocador.printTotal();
myInvocador.printLater(1000);