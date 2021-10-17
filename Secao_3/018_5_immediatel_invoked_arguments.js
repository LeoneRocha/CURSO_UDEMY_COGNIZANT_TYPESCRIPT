"use strict";
// Function expression
var nomeCompleto;
nomeCompleto = function (first, last) {
    return first + " " + last;
};
console.log(nomeCompleto('Jordan', 'Hudgens'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Tiffany', 'Hudgens');
