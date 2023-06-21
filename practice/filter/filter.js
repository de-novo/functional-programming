"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._filter = void 0;
var each_1 = require("../each/each");
var _filter = function (list, predicate) {
    var newList = [];
    (0, each_1._each)(list, function (value) {
        if (predicate(value)) {
            newList.push(value);
        }
    });
    return newList;
};
exports._filter = _filter;
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumberList = (0, exports._filter)(numberList, function (value) { return value % 2 === 0; });
console.log(evenNumberList);
var personList = [
    { name: "novo", age: 27 },
    { name: "novo_2", age: 28 },
    { name: "novo_3", age: 29 },
];
var personListOver28 = (0, exports._filter)(personList, function (value) { return value.age > 28; });
console.log(personListOver28);
