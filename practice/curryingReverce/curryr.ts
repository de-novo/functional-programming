/**
 * 역 커링 함수를 만들어보자.
 * 역커링은 사용하는 곳이 많은 함수이다.
 * 다른 순수함수를 만들때도 많이 사용한다
 *
 * 역커링의 결과는 다음과 같다.
 * (a: number, b: boolean, c: string) => true 을 역커링할경우
 * (arg: string) => (arg: boolean) => (arg: number) => true
 *
 * (a: number) => true 을 역커링할경우
 * (arg: number) => true
 */

//역커링 타입을 만들때 Pop, Peek 타입을 사용하겠다.
type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : never;
type Peek<T extends any[]> = T extends [...infer _, infer R] ? R : never;

// 역커링의 타입은 다음과 같다.
type ReverseCurrying<
    Fn extends (...args: any[]) => any,
    Args extends any[] = Parameters<Fn>
> = Args extends []
    ? ReturnType<Fn>
    : (arg: Peek<Args>) => ReverseCurrying<Fn, Pop<Args>>;

//우선 타입추론이 잘 되는지 확인해보자.
const a = (a: number) => true;
type Curryingr = ReverseCurrying<(a: number, b: boolean, c: string) => true>;
type Curryingr2 = ReverseCurrying<(a: number) => true>;
type Curryingr3 = ReverseCurrying<typeof a>;

//이제 역커링을 구현해보자.
export const _curryr = <T extends (...args: any[]) => any>(fn: T) => {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (nextArg: any) {
            return curried(...args, nextArg);
        };
    } as ReverseCurrying<T>;
};

// 역커링 함수를 사용하였을때 잘 동작하는지 확인해보자.
const _testReverseCurrying = _curryr(
    (a: number, b: boolean, c: string) => `${a} ${b} ${c}`
);

console.log(_testReverseCurrying("a")(true)(1));
export const _curryr2 = <T extends (...args: any[]) => any, K>(
    fn: T
): ((...args: any[]) => ReturnType<T>) | ((nextArg: K) => ReturnType<T>) => {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (nextArg: K) {
            return curried(...args, nextArg);
        };
    } as ((...args: any[]) => ReturnType<T>) | ((nextArg: K) => ReturnType<T>);
};
