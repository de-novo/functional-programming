"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._findIndex = void 0;
var each_1 = require("../each/each");
var keys_1 = require("../keys/keys");
var _findIndex = function (list, predicate) {
    var keys = (0, keys_1._keys)(list);
    var index = -1;
    (0, each_1._each)(keys, function (key, i) {
        if (predicate(list[key])) {
            index = i;
            return;
        }
    });
    return index;
};
exports._findIndex = _findIndex;
console.log((0, exports._findIndex)([1, 2, 3, 4], function (item) { return item === 3; })); // 2
console.log((0, exports._findIndex)([1, 2, 3, 4], function (item) { return item === 5; })); // -1
console.log((0, exports._findIndex)({ a: 1, b: 2, c: 3, d: 4 }, function (item) { return item === 3; })); // 2
console.log((0, exports._findIndex)({ a: 1, b: 2, c: 3, d: 4 }, function (item) { return item === 5; })); // -1
console.log((0, exports._findIndex)({ 0: 1, 1: 2, 2: 3, 3: 4 }, function (item) { return item === 3; })); // 2
console.log((0, exports._findIndex)({ 0: 1, 1: 2, 2: 3, 3: 4 }, function (item) { return item === 5; })); // -1
