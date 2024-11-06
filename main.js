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
- creating objects
- accessing, reading, their properties
- updating, modifying, the values of these properties

------------------------------ Objects: Task 1 ------------------------------

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
const book = {
  title: "A Smarter Way to Learn JavaScript",
  author: "Mark Myers",
  price: 19.95,
  read: false,
};

book.read = true;

console.log(book);

console.clear ();

/* 
------------------------------ Objects: Task 2 ------------------------------
Given the object below, increase the age property by 1. Then, output the whole object to the console.
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};
Expected output:
{
    firstName: "Martha",
    lastName: "Martin",
    age: 28
}; 
*/
const person1 = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};

person1.age++;
console.log(person1);

/* 
------------------------------ Objects: Task 3 ------------------------------
Given the object below, modify the value of the property discountedPrice so that it's half of the price property.
Then, output a message to the console as shown below.
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};
IMPORTANT: when modifying discountedPrice, make sure to use the property price to calculate the new value, rather than typing 22 directly.
Expected output:
SALE: the green Dolphin hat costs now only 11€ instead of 22€! 
*/
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};
product.discountedPrice = product.price / 2;

console.log(`SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.price} instead of ${product.discountedPrice}!`);


