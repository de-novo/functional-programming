/**
 * Currying은 여러 개의 인자를 가진 함수를 호출 할 경우,
 * 파라미터의 수보다 적은 수의 파라미터를 인자로 받으면
 * 누락된 파라미터를 인저로 받는 기법
 */
//예시
var greet = function (greeting, name) {
    console.log("".concat(greeting, ", ").concat(name));
};
greet("hi", "novo");
function greetCurrying(greet, name) {
    if (name !== undefined) {
        console.log("".concat(greet, ", ").concat(name));
    }
    else {
        return function (name) {
            console.log("".concat(greet, ", ").concat(name));
        };
    }
}
greetCurrying("hi", "novo_2");
var hiNovo = greetCurrying("hi");
hiNovo("novo_3");
