"use strict";
/**
 * 함수형 프로그래밍 연습  - reduce
 *
 * 함수형 프로그래밍에서 reduce는 배열을 순회하며 누적된 값을 계산할 때 사용한다.
 * reduce는 배열을 순회하며 누적된 값을 계산할 때 사용한다.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._reduce = void 0;
var each_1 = require("../each/each");
function _rest(list, num) {
    return list.slice(num || 1);
}
function _reduce(list, reducer, memo) {
    if (arguments.length === 2) {
        if (list[0]) {
            memo = list[0];
            list = _rest(list);
        }
    }
    (0, each_1._each)(list, function (value, i) {
        if (memo !== undefined) {
            memo = reducer(memo, value, i);
        }
    });
    return memo;
}
exports._reduce = _reduce;
var reducer2 = function (acc, cur) { return __spreadArray(__spreadArray([], acc, true), [cur], false); };
// const numberListToNumber2 = _reduce([], (acc, cur) => [...acc, cur]);
var numberListToNumber2 = _reduce([], reducer2, []);
console.log(numberListToNumber2);
// reduce 함수를 사용하여 number[]를 number로 변환하는 예제
var numberListToNumber = _reduce([1, 2, 3], function (acc, cur) { return acc + cur; }, 0);
var numberListToNumber3 = _reduce([1, 2, 3], function (acc, cur) { return acc + cur; }, 0);
var a = _reduce([1, 2, 3], function (acc, cur) { return acc + cur; });
console.log(a);
