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

