/**
 * ex에서 간단한 예시를 경험해보았다
 *
 * 커리함수 타입 및 함수를 구현해 볼 것이다.
 *
 * Currying 타입 문제는 매우 어려운 편에 속하니 참고만하자.
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.md
 * https://github.com/type-challenges/type-challenges/tree/main/questions/00462-extreme-currying-2
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
// declare function Currying<
//     T extends (...arg: any[]) => any,
//     Args extends any[] = []
// >(fn: T, ...args: Args): Currying<T, Args>;
function Currying(fn) {
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length >= fn.length) {
            return fn.apply(void 0, args);
        }
        return function (nextArg) {
            return curried.apply(void 0, __spreadArray(__spreadArray([], args, false), [nextArg], false));
        };
    };
}
var add = function (a, b, c) { return true; };
var curriedAdd = function (a) { return function (b) { return function (c) {
    return add(a, b, c);
}; }; };
var corried = Currying(add);
var curried1 = Currying(function (a, b, c) { return true; });
var curried2 = Currying(function (a, b, c, d, e, f, g) { return true; });
var curried3 = Currying(function () { return true; });
console.log(curried3());
