/* ------------------- REMOVING ELEMENTS -------------------
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/
console.log("*** REMOVING ELEMENTS ***");

let arr = ['Hello', 'Goodbye', 'Hello Again'];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log(newArr.push(arr[i]))
    }
}

console.log(newArr);

console.log();

/* ------------------- SORT ARRAY BY STRING LENGTH -------------------
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
console.log("*** SORT ARRAY ***");

let array = ["Beg", "Life", "I", "To"];

let sortedArr = array.sort((a,b) => a.length - b.length)

console.log(array.sort((a,b) => a.length - b.length));





