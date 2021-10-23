"use strict";
var names = ['Jordan', 'Tiffany', 'Kristine'];
var counter = 0;
(function () {
    for (let name in names) {
        counter++;
    }
})();
console.log(counter);
