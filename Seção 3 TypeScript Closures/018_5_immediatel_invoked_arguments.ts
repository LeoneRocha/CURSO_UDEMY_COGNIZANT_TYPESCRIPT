// Function expression
var nomeCompleto : (first : string, last : string) => string;

nomeCompleto = function(first : string, last : string) {
	return first + " " + last;
}

console.log(nomeCompleto('Jordan', 'Hudgens'));

// Immediately invoked version
(function(first : string, last : string) {
	console.log(first + " " + last);	
})('Tiffany', 'Hudgens');