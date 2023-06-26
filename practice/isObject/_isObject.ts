export const _isObject = (value: any): boolean => {
    return value !== null && typeof value === "object";
};




// console.log(_isObject({})); // true
// console.log(_isObject([])); // true
// console.log(_isObject(null)); // false
// console.log(_isObject(undefined)); // false
// console.log(_isObject(1)); // false
// console.log(_isObject("1"));     // false
// console.log(_isObject(true));    // false
// console.log(_isObject(false));   // false
