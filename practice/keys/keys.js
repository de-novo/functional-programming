"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._keys = void 0;
var _isObject_1 = require("../isObject/_isObject");
var _keys = function (value) {
    if (!(0, _isObject_1._isObject)(value)) {
        return [];
    }
    return Object.keys(value);
};
exports._keys = _keys;
// console.log(_keys({})); // []
// console.log(_keys([])); // []
// console.log(_keys(null)); // []
// console.log(_keys(undefined)); // []
// console.log(_keys(1)); // []
// console.log(_keys("1"));     // []
// console.log(_keys(true));    // []
// console.log(_keys(false));   // []
// console.log(_keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
// console.log(_keys([1, 2, 3])); // [ '0', '1', '2' ]
// console.log(_keys({ 0: 1, 1: 2, 2: 3 })); // [ '0', '1', '2' ]
