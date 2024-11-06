/* 
---------------------------- TASK 1 ----------------------------
** BETTER TYPE OF **

Create a function called betterTypeOf that accepts a single parameter called value and returns the type of that value.

For example:
betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
const person = {
    fullName: "Sandy Smith",
    age: 28
};
betterTypeOf(person); // "object"

Pay particular attention at the cases where the value is an array. 
*/

function betterTypeOf(value) {
    if (Array.isArray(value)){
        console.log("array");
        
    } else {
        console.log(typeof value);
    }
};

betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
const person = {
    fullName: "Sandy Smith",
    age: 28
};
betterTypeOf(person); // "object"