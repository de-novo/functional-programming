import { _each } from "../each/each";

/**
 * 함수형 프로그래밍 연습 - map
 * 함수형 프로그래밍에서의 map함수는
 * 컬렉션의 각 원소를 변형하여 새로운 컬렉션을 만드는 함수이다.
 */

export const _map = <T, R>(
    list: T[],
    mapper: (value: T, i: number) => R
): R[] => {
    const newList: R[] = [];
    _each(list, (value, i) => {
        newList.push(mapper(value, i));
    });
    return newList;
};

// map 함수를 사용하여 number[]를 string[]으로 변환하는 예제
const numberListToStingList = _map([1, 2, 3], (value) => value.toString());

console.log(numberListToStingList);

// map 함수를 사용하여 number[]를 number[]로 변환하는 예제
const numberListToNumberList = _map([1, 2, 3], (value) => value + 1);

interface IPerson {
    name: string;
    age: number;
}

// map 함수를 사용하여 IPerson[]를 string[]으로 변환하는 예제
// 이름 추철
const personListToNameList = _map(
    [
        { name: "novo", age: 27 },
        { name: "novo_2", age: 28 },
        { name: "novo_3", age: 29 },
    ],
    (value) => value.name
);
console.log(personListToNameList);
