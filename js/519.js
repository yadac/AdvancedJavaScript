"use strict";

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
};

Person.prototype.full_name = function () {
    return this.first_name + ' ' + this.last_name;
}

function Professional(honorific, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.honorific = honorific;
}

Professional.prototype.Professional_name = function () {
    return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
}

Professional.prototype = Object.create(Person.prototype);

var prof = new Professional("Dr.", "yosuke", "adachi");
console.log(prof.Professional_name());
console.log(prof.full_name());
