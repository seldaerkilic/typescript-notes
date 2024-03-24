"use strict";
// Basic Types
let id = 5;
let company = 'Zelda Corp';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'k'];
// Tuple -- order matters
let person = [1, 'jo', false];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Naomi'],
    [3, 'Kaan']
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: 'Jane'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes - for objects. Properties of obj can be set as publick and can be accessed everywhere which is default. They can be set as private and can be accessed within the class. They can be set as protected and accessed either within class or in extended class within.
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
// console.log(brad.register())
// Subclasses - Employee is extended from Person
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register())
// Generics - instead of any, assign type with T and te function will assign a specific type within <> when it is called.
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'Jane', 'Kaan']);
