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
      acc[el] += 1;
      // else the letter (el) get 1 as value
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

console.log(phraseArr); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

console.log();


/* --------------------------- TASK 4 ---------------------------

Count the occurrences of each word in a sentence.

const sentence = "the quick brown fox jumps over the lazy dog the fox was quick";

Use the reduce() method to create an object that contains the count of each word in the sentence. The final result should look like this:

{
  the: 3,
  quick: 2,
  brown: 1,
  fox: 2,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1,
  was: 1
}
*/
console.log("****** TASK 4 ******");

const sentence = "the quick brown fox jumps over the lazy dog the fox was quick";

const countWords = sentence
// split(" ") changes every word inside the sentence to an element of an array
.split(" ")
// check if word is already a key inside the object (because acc is a empty object). If so we add +1 to it otherwise we create a key with the value of 1
.reduce((acc, word) => {
    if (acc[word]) {
        acc[word]++;
    } else {
        acc[word] = 1;
    }
    return acc;
}, {});

console.log(countWords); // { the: 3, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, was: 1 }

console.log();

/* --------------------------- TASK 5 ---------------------------

Group numbers by whether they are even or odd.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Use the reduce() method to create an object with two keys, "even" and "odd", where:
- The "even" key holds an array of all even numbers from the list.
- The "odd" key holds an array of all odd numbers from the list.

For example, your result should look like this:

{
  even: [2, 4, 6, 8, 10],
  odd: [1, 3, 5, 7, 9]
}
*/
console.log("****** TASK 4 ******");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenAndOdd = nums.reduce((acc, num) => {
// if num is even it pushes the num into the even-array
    if (num % 2 === 0) {
        acc.even.push(num);
// if num is odd it pushes the num into the odd-array
    } else {
        acc.odd.push(num);
    }
    return acc;
}, {even: [], odd: []})

console.log(evenAndOdd); // { even: [ 2, 4, 6, 8, 10 ], odd: [ 1, 3, 5, 7, 9 ] }

