"use strict";

// scope chain


function goo() {
    var myvar = 1;
    function foo() {
        console.log(myvar);
    }
    foo();
}
goo();