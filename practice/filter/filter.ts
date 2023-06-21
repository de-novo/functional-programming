import { _each } from "../each/each";

/**
 * 함수형 프로그래밍 연습 - filter
 * 함수형 프로그래밍에서 filter는 배열에서 특정 조건을 만족하는 값만 추출하는 함수이다.
 * filter는 배열을 순회하면서 특정 조건을 만족하는 값만 추출하여 새로운 배열을 만든다.
 * filter는 순수 함수로 구현해야 한다.
 * filter는 원본 배열을 변경하지 않고 새로운 배열을 생성한다.
 * filter는 원본 배열의 순서를 유지한다.
 * filter는 원본 배열의 값을 변경하지 않는다.
 */

export const _filter = <T>(
    list: T[],
    predicate: (value: T, i: number) => boolean
): T[] => {
    const newList: T[] = [];
    _each(list, (value, i) => {
        if (predicate(value, i)) {
            newList.push(value);
        }
    });
    return newList;
};

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumberList = _filter(numberList, (value) => value % 2 === 0);
console.log(evenNumberList);

interface IPerson {
    name: string;
    age: number;
}
const personList: IPerson[] = [
    { name: "novo", age: 27 },
    { name: "novo_2", age: 28 },
    { name: "novo_3", age: 29 },
];
const personListOver28 = _filter(personList, (value) => value.age > 28);

console.log(personListOver28);
