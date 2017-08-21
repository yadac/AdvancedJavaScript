"use strict";

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function () {
        // this refer to the arguments of "person".
        return first_name + ' ' + last_name;
    }
};

var dude = new Person("asim", "hussain");
Person.prototype.full_name_reverse = function () {
    // this refer to the property of "dude".
    return this.last_name + ' ' + this.first_name;
}

// this is change to "dude" property value.
dude.first_name = "yosuke";
// this is change to "person" property value.
Person.last_name = "adachi";

console.log(Person.last_name);
console.log(dude.full_name());
console.log(dude.full_name_reverse());