"use strict";

var asim = {
    checkThis: function () {
        console.log(this);
        var checkOther = function () {
            console.log(this);
        }.bind(this);
        // inner function call as asim objects.
        checkOther();
    }
}
asim.checkThis();

// function a(b, c, d) {
//     console.log(this);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// // a.call('hello', 2, 3, 4);

// // 1st = base parameter (=this), other parameter = array
// a.apply(1, [2, 3, 4,]);

// function sum() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// var things = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // var res = sum(things);
// // var res = sum.call(null, 1, 2, 3, );
// var res = sum.apply(null, things);
// console.log(res);

// var asim = {
//     'age': 40,
// }

// // when create object, bind parameter as this.
// var a = function () {
//     console.log(this.age);
// }// .bind(asim);

// // bind directly after declare.
// a = a.bind(asim);

// a();


