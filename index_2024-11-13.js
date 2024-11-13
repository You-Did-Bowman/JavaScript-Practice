/* --------------------------- TASK 1 ---------------------------

Calculate the product of all numbers in an array.

const numbers = [2, 3, 4];

Use the reduce() method to calculate the product of all numbers in the array.
*/

const numbers = [2, 3, 4];

const product = numbers.reduce((acc, el) => {
    return acc * el;
}, 1)

console.log(product); // 24


