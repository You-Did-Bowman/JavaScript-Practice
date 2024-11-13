/* --------------------------- TASK 1 ---------------------------

Calculate the product of all numbers in an array.

const numbers = [2, 3, 4];

Use the reduce() method to calculate the product of all numbers in the array.
*/
console.log("****** TASK 1 ******");

const numbers = [2, 3, 4];

const product = numbers.reduce((acc, el) => {
    return acc * el;
}, 1)

console.log(product); // 24

console.log();


/* --------------------------- TASK 2 ---------------------------

Find the longest word in an array of words.

const words = ["apple", "banana", "cherry", "watermelon", "grape"];

Use the reduce() method to find the longest word in the array. The final result should be the longest word as a string.

*/
console.log("****** TASK 2 ******");

const words = ["apple", "banana", "cherry", "watermelon", "grape"];

const longestWord = words.reduce((acc, el) => {
    // compare the length of el with the length of acc -> if el is longer it will be the new acc
    if (el.length > acc.length) {
        acc = el;
    };
    // return the longest acc
    return acc
}, "");

console.log(longestWord); // watermelon

console.log();


/* --------------------------- TASK 3 ---------------------------

Count the occurrences of each letter in a string.
Given:

const phrase = "hello world";

Use the reduce() method to create an object that contains the count of each letter in the string. For example, for "hello world", the output should look like:

{
  h: 1,
  e: 1,
  l: 3,
  o: 2,
  w: 1,
  r: 1,
  d: 1
}
*/
console.log("****** TASK 3 ******");

const phrase = "hello world";
// delete the space and make every letter an element of the array
const phraseArr = phrase
  .replace(" ", "")
  .split("")
  .reduce((acc, el) => {
// if the letter (el) is in the object (acc) the count of the letter raises 
    if (acc[el]) {
        acc[el] += 1
// else the letter (el) get 1 as value
    } else {
        acc[el] = 1
    }
    return acc;
  }, {});



console.log(phraseArr);

