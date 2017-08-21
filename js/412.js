// "use strict";

// function sayHello(name) {
//     let text = 'hello ' + name;
//     return function () {
//         console.log(text);
//     }
// }
// var sayAsim = sayHello("Asim");
// sayAsim();

// var foo = [];
// for (var i = 0; i < 10; i++) {
//     // IIFE(Immediatery Invoked Function Expression)
//     // it still alive as closure, so it is be able to see from outer scope.
//     (function (y) {
//         foo[y] = () => { return y };
//     })(i);
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());
