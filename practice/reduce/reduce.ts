/**
 * 함수형 프로그래밍 연습  - reduce
 *
 * 함수형 프로그래밍에서 reduce는 배열을 순회하며 누적된 값을 계산할 때 사용한다.
 * reduce는 배열을 순회하며 누적된 값을 계산할 때 사용한다.
 */

import { _each } from "../each/each";

function _rest<T>(list: T[], num?: number): T[] {
    return list.slice(num || 1);
}

type Reducer<T, U = T> = (memo: U, value: T, index: number) => U;

export function _reduce<T, U = T>(list: T[], reducer: Reducer<T, U>): U;
export function _reduce<T, U>(list: T[], reducer: Reducer<T, U>, memo: U): U;
export function _reduce<T, U = T>(
    list: T[],
    reducer: Reducer<T, U>,
    memo?: U
): U | undefined {
    if (arguments.length === 2) {
        if (list[0]) {
            memo = list[0] as any as U | undefined;
            list = _rest(list);
        }
    }

    _each(list, (value, i) => {
        if (memo !== undefined) {
            memo = reducer(memo, value, i);
        }
    });

    return memo as U;
}

const reducer2 = (acc: number[], cur: number) => [...acc, cur];

// const numberListToNumber2 = _reduce([], (acc, cur) => [...acc, cur]); // never

const numberListToNumber2 = _reduce([], reducer2, []);
const numberListToNumber = _reduce([1, 2, 3], (acc, cur) => acc + cur, 0);

const numberListToNumber3 = _reduce([1, 2, 3], (acc, cur) => acc + cur, 0);

const a = _reduce([1, 2, 3], (acc, cur) => acc + cur);
