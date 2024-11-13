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
