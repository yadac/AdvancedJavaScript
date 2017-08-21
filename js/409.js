"use strict";

var a = 100;
function foo() {
    console.log(a);
    var a = 1; // hoisting (means declare top of the function such var a;)
    console.log(a);
}
foo();
