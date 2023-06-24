import { _each } from "../each/each";
import { _keys } from "../keys/keys";

export const _findIndex = <T extends object | any[]>(
    list: T,
    predicate: (item: any) => boolean
): number => {
    const keys = _keys(list);
    let index: number = -1;
    _each(keys, (key: string, i) => {
        if (predicate(list[key as keyof T])) {
            index = i;
            return;
        }
    });
    return index;
};

console.log(_findIndex([1, 2, 3, 4], (item) => item === 3)); // 2
console.log(_findIndex([1, 2, 3, 4], (item) => item === 5)); // -1
console.log(_findIndex({ a: 1, b: 2, c: 3, d: 4 }, (item) => item === 3)); // 2
console.log(_findIndex({ a: 1, b: 2, c: 3, d: 4 }, (item) => item === 5)); // -1
console.log(_findIndex({ 0: 1, 1: 2, 2: 3, 3: 4 }, (item) => item === 3)); // 2
console.log(_findIndex({ 0: 1, 1: 2, 2: 3, 3: 4 }, (item) => item === 5)); // -1
