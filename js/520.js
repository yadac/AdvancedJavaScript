"use strict";

var Person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// prototype pattern == right solution of OOP in JavaScript.
var Professional = Object.create(Person, {
    init: {
        value: function (honorific, firstName, lastName) {
            this.honorific = honorific;
            this.firstName = firstName;
            this.lastName = lastName;
            return this;
        }
    },
    professional_name: {
        value: function () {
            return this.honorific + " " + this.firstName + " " + this.lastName;
        }
    }
});

function ProfessionalFactory(honorific, firstName, lastName) {
    var human = Object.create(Professional);
    human.honorific = honorific;
    human.firstName = firstName;
    human.lastName = lastName;
    // human.init(honorific, firstName, lastName);
    Object.seal(human);
    return human;
}

// * use factory pattern
// its familiar to other language come from.
var asim = new ProfessionalFactory("mr.", "asim", "hussain")

// * directly create object
// this is more easily than factory pattern (using "new").
// var asim = Object.create(Professional);
// asim.init("mr.", "asim", "hussain");

// confirm
console.log(asim.fullName());
console.log(asim.professional_name());