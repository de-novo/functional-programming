import { _each } from "../each/each";

export const _filter = <T>(
    list: T[],
    predicate: (value: T) => boolean
): T[] => {
    const newList: T[] = [];
    _each(list, (value) => {
        if (predicate(value)) {
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
