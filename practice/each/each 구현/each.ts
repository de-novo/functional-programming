/**
 * each는  컬렉션의 각 요소에 대해 주어진 함수를 적용하는 함수입니다.
 */

//ArrayLike는 length 속성과 인덱스를 통해 요소에 접근할 수 있는 객체를 말합니다.
//ArrayLike는 Array와 비슷하지만 Array는 아닌 객체를 말합니다.
//ArrayLike는 Array.from을 통해 배열로 변환할 수 있습니다.
//ArrayLike는 NodeList, HTMLCollection, arguments 등이 있습니다.
//ArrayLike는 Array.isArray로 검사할 수 없습니다.
//따라서 아래와 같이 ArrayLike인지 검사하는 함수를 따로 만들어 사용합니다.
function isArrayLike(obj: any) {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.length === "number" &&
        typeof obj[obj.length - 1] !== "undefined"
    );
}

const _each = <T>(list: T[], iter: (arg: T) => any): T[] | T => {
    if (Array.isArray(list) || isArrayLike(list)) {
        for (let i = 0; i < list.length; i++) {
            iter(list[i] as T);
        }
    }
    return list;
};

_each([1, { a: 1 }, 3], console.log);
