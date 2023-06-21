"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("../each/each");
/**
 * 함수형 프로그래밍 연습 - map
 * 함수형 프로그래밍에서의 map함수는
 * 컬렉션의 각 원소를 변형하여 새로운 컬렉션을 만드는 함수이다.
 */
var _map = function (list, mapper) {
    var newList = [];
    (0, each_1._each)(list, function (value) {
        newList.push(mapper(value));
    });
    return newList;
};
// map 함수를 사용하여 number[]를 string[]으로 변환하는 예제
var numberListToStingList = _map([1, 2, 3], function (value) {
    return value.toString();
});
console.log(numberListToStingList);
// map 함수를 사용하여 number[]를 number[]로 변환하는 예제
var numberListToNumberList = _map([1, 2, 3], function (value) {
    return value + 1;
});
// map 함수를 사용하여 IPerson[]를 string[]으로 변환하는 예제
// 이름 추철
var personListToNameList = _map(
    [
        { name: "novo", age: 27 },
        { name: "novo_2", age: 28 },
        { name: "novo_3", age: 29 },
    ],
    function (value) {
        return value.name;
    }
);
console.log(personListToNameList);
