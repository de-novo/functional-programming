import { _curryr } from "../curryingReverce/curryr";

type Get<T, K extends keyof T> = (obj: T, key: K) => T[K];

function get<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}
const _get = <T, K extends keyof T = keyof T>(key: K) =>
    _curryr<Get<T, K>>(get)(key);
type A = { id?: string; name: string; age: number };
type B = Get<A, "id">;

const obj = { id: "1" };
const st = _get<{ id: string }>("id")(obj);

let arr = [4, 5, 6];
const st2 = _get<number[]>(1)(arr);
console.log(get(obj, "id")); // 2
console.log(get(arr, 1)); // 5
namespace a {
    type Get<T, K extends keyof T> = (obj: T, key: K) => T[K];

    function get<T, K extends keyof T>(object: T, key: K): T[K] {
        return object[key];
    }
    const _get = <T, K extends keyof T = keyof T>(key: K) =>
        _curryr<Get<T, K>>(get)(key);
    type A = { id?: string; name: string; age: number };
    type B = Get<A, "id">;

    const obj = { id: "1" };
    const st = _get<{ id: string }>("id")(obj);

    let arr = [4, 5, 6];
    // function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    //     return obj[key];
    // }

    // const getTest3 = get({ id: "1", name: "2s", age: 25 }, "age");
}

type b = <T>(obj: T) => T;

const b = <T>(obj: T) => obj;

const s = b<{ id: string }>;
