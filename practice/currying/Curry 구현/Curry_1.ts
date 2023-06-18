/**
 * ex에서 간단한 예시를 경험해보았다
 *
 * 커리함수 타입 및 함수를 구현해 볼 것이다.
 *
 * Currying 타입 문제는 매우 어려운 편에 속하니 참고만하자.
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.md
 * https://github.com/type-challenges/type-challenges/tree/main/questions/00462-extreme-currying-2
 */

/**
 * 아래 커링은
 * 함수를 모두 분할한다.
 * (a,b,c)=>any 를
 * (a)=>(b)=>(c)=>any 하는 타입이다.
 */
// declare function Currying<
//     T extends (...arg: any[]) => any,
//     Args extends any[] = []
// >(fn: T, ...args: Args): Currying<T, Args>;
type Currying<
    Fn extends (...arg: any[]) => any,
    Args extends any[] = []
> = Fn extends () => any
    ? Fn
    : Args["length"] extends Parameters<Fn>["length"]
    ? ReturnType<Fn>
    : (
          arg: Parameters<Fn>[Args["length"]]
      ) => Currying<Fn, [...Args, Parameters<Fn>[Args["length"]]]>;

function Currying<Fn extends (...args: any[]) => any>(fn: Fn): Currying<Fn> {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (nextArg: any) {
            return curried(...args, nextArg);
        };
    } as Currying<Fn>;
}

const add = (a: number, b: number, c: number) => true;
const curriedAdd: Currying<typeof add> =
    (a: number) => (b: number) => (c: number) =>
        add(a, b, c);
const corried = Currying(add);

const curried1 = Currying((a: string, b: number, c: boolean) => true);

const curried2 = Currying(
    (
        a: string,
        b: number,
        c: boolean,
        d: boolean,
        e: boolean,
        f: string,
        g: boolean
    ) => true
);

const curried3 = Currying(() => true);

console.log(curried3());
