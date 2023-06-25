import { _curryr } from "../curryingReverce/curryr";
function get<T, K extends keyof T>(object: T, key: K): T[K] | undefined {
    return object[key];
}

const obj = { id: "1" };
// 사용 예
// let obj = { a: 1, b: 2, c: 3 };
let arr = [4, 5, 6];
console.log(get(obj, "id")); // 2
console.log(get(arr, 1)); // 5
namespace a {
    interface A {
        id: string;
        name: string;
        age: number;
        a?: string;
    }

    type Get<T, K> = (obj: T, key: K) => K extends keyof T ? T[K] : undefined;
    const getCurryr = _curryr(get<A, keyof A>);
    const getTest1 = getCurryr("id");
    const getTest2 = getCurryr("name");
    const getTest3 = getCurryr("age");
    const getTest4 = getCurryr("a");

    // function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    //     return obj[key];
    // }

    // const getTest3 = get({ id: "1", name: "2s", age: 25 }, "age");
}

type b = <T>(obj: T) => T;

const b = <T>(obj: T) => obj;

const s = b<{ id: string }>;
