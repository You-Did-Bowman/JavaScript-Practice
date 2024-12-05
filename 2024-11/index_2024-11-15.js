/* Ex: Count Occurrences of Each Word in an Array
You have an array of words. Write a function to count the occurrences of each word in the array and return an object where the keys are words and the values are their counts.

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

// Expected output: { apple: 2, banana: 3, orange: 1 }
Your Task:
Use reduce to generate an object where each key is a word, and the value is the count of that word.
 */

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const amountFruits = words.reduce((acc, fruit) => {
    if (!acc[fruit]) {
        acc[fruit] = 0;
    }
    acc[fruit]++
    return acc;
}, {})

console.log(amountFruits);
