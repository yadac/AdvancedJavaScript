let animal = {
    kind: 'human'
};

// console.log(animal);

// let asim = {};
// asim.__proto__ = animal;

// first parameter is inherits
// second parameter is add as properties.
let asim = Object.create(animal, { food: { value: 'mango' } });

console.log(asim.kind);
// console.log(animal.isPrototypeOf(asim));