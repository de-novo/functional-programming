/**
 * Currying은 여러 개의 인자를 가진 함수를 호출 할 경우,
 * 파라미터의 수보다 적은 수의 파라미터를 인자로 받으면
 * 누락된 파라미터를 인저로 받는 기법
 */
//예시
const greet = (greeting: string, name: string) => {
    console.log(`${greeting}, ${name}`);
};

greet("hi", "novo");

// 위 함수를 커링함수로 만든다면 아래와 같다
// 하지만, 아래와 같이 사용한다면 활용도가 매우 낮다.
// 효율적인 커링함수는 다음 폴더에서 이어서 진행하겠다.
type GreetCurrying = {
    (greet: string, name: string): void;
    (greet: string): (name: string) => void;
};

function greetCurrying(greet: string, name: string): void;
function greetCurrying(greet: string): (name: string) => void;
function greetCurrying(greet: string, name?: string) {
    if (name !== undefined) {
        console.log(`${greet}, ${name}`);
    } else {
        return (name: string) => {
            console.log(`${greet}, ${name}`);
        };
    }
}

greetCurrying("hi", "novo_2");

const hiNovo = greetCurrying("hi");
hiNovo("novo_3");
