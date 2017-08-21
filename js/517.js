"use strict";

var sayHello = function (last_name) {
    console.log("hello " + this + " " + last_name);
}.bind("Asim");
sayHello("Hussain");