// console.log(this);

this.asim = 1;

// console.log(this.asim);
// console.log(window.asim);
// console.log(asim);

// function checkThis() {
//     console.log(this);
// }

// checkThis();

var asim = {
    checkThis: function () {
        // declare alies "self", "vm"(viewmodel), "that"
        var self = this;
        // this refer asim object.
        console.log(self);
        function checkOther() {
            self.moo = 1;
            // this refer global object.
            console.log(self);
        }
        checkOther();
        console.log(self.moo);
    }
}
asim.checkThis();

// var func = asim.checkThis;
// caller = window
// func();