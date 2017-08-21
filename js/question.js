"use strict";
// =========== question 1

// function Device(kind) {
//     this.kind = kind;
//     console.log(this.kind);
// }

// // cons pattern
// var product1 = new Device("music player");

// // func
// var product2 = Device("mp3 player");

// // call
// var product3 = Device.call("music player", "radio");

// =========== question 2

// function Device(kind) {
//     this.kind = kind;
//     this.printKind = function () {
//         console.log(this.kind);
//     }
// }

// var product = new Device("music player");
// product.printKind();

// =========== question 3
// function Device(kind) {
//     this.kind = kind;
//     this.printKind = function () {
//         console.log(kind);
//     }
// }

// var product = new Device("music player");
// product.kind = "radio";
// product.printKind();

// =========== question 4
// function Device(kind) {
//     this.kind = kind;
// }

// Device.prototype.printKind = function () {
//     console.log(this.kind);
// }

// var product = new Device("music player");
// product.printKind();

// =========== question 5
// we want AppleProduct to inherit from Device.
// Whats the best method of setting the kind property?

// function Device(kind) {
//     this.kind = kind;
//     var func = function () {
//         console.log(this.kind);
//     }
// }

// Device.prototype.printKind = function () {
//     console.log(this.kind);
// }

// function AppleProduct(name, kind) {
//     this.name = name;
//     Device.call(this, kind); // just define kind
// }

// var apple = new AppleProduct("ipod", "mp3 player");
// AppleProduct.prototype = Object.create(Device.prototype);
// apple.printKind();

// var Device = {
//     kind: "music player",
// };

// // 2nd parameter must be object-literal format.
// var AppleProduct = Object.create(Device, {
//     name: { value: "ipod" }
// });

// var purchase = Object.create(AppleProduct);
// console.log(purchase.name);

function Device() {
    let self = this;
    console.log(self);  // using new keyword, this points self
    console.log(window);
    this.kind = "music player";
    this.price = undefined;
    this.type = 1222;
}

// var dev = Object.preventExtensions(new Device());
var dev = Object.seal(new Device());
console.log(dev.kind);
console.log(dev.type);
// delete dev.type; // delete enable
dev.kind = "radio";
// dev.name = "ipod";
// dev.name = "walk-man";
console.log(dev.kind);
console.log(dev.name);
console.log(dev.price);
console.dir(dev);

// Object.create(xxx.prototype)の見直し　.prototypeいらないんじゃない？
// →いらない

// function xxx なら new でインスタンス化する。
// newのreturn に対してseal, preventExtensionsを実行する（必要なら）
// sealは値の変更のみ許可、preventExtensionsはプロパティ追加以外は許可する

// なので

// prototypesは変更なし
// createの部分をnewに変更する
