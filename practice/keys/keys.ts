import { _isObject } from "../isObject/_isObject";

export const _keys = <T extends object | any[]>(value: T): string[] => {
    if (!_isObject(value)) {
        return [];
    }
    return Object.keys(value);
};

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
