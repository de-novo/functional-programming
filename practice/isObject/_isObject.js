"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._isObject = void 0;
var _isObject = function (value) {
    return value !== null && typeof value === "object";
};
exports._isObject = _isObject;
console.log((0, exports._isObject)({}));
console.log((0, exports._isObject)([]));
console.log((0, exports._isObject)(null));
console.log((0, exports._isObject)(undefined));
console.log((0, exports._isObject)(1));
console.log((0, exports._isObject)("1"));
console.log((0, exports._isObject)(true));
console.log((0, exports._isObject)(false));
