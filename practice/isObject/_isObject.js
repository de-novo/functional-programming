"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._isObject = void 0;
var _isObject = function (value) {
    return value !== null && typeof value === "object";
};
exports._isObject = _isObject;
// console.log(_isObject({})); // true
// console.log(_isObject([])); // true
// console.log(_isObject(null)); // false
// console.log(_isObject(undefined)); // false
// console.log(_isObject(1)); // false
// console.log(_isObject("1"));     // false
// console.log(_isObject(true));    // false
// console.log(_isObject(false));   // false
