/* ***** BETTER TYPE OF *****

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

/* ***** OBJECT: CREATE, ACCESS, UPDATE *****

This exercise is meant to let you properly understand and practice basic operations we perform with objects, tipically:
creating objects
accessing, reading, their properties
updating, modifying, the values of these properties
Task 1
Given the object below, change the value of the read property from false to true. Then, output the whole object to the console.
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};
Expected output:
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}


*/