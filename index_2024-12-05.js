/* ------------------- REMOVING ELEMENTS -------------------
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/
console.log("*** REMOVING ELEMENTS ***");

const removeEl = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(removeEl(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEl([['Goodbye'], {'Great': 'Job'}]));

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

const sortByLength = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));

console.log();

/* ------------------- PLURAL -------------------
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as "5 minutes", "14 apples", or "1 sun".

"You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something)."

All values will be positive integers or floats, or zero.
*/
console.log("*** PLURAL ***");

const plural = (n) => n !== 1 ? true : false;

console.log(plural(0));
console.log(plural(1));
console.log(plural(Infinity));

console.log();

/* ------------------- WHAT'S THE REAL FLOOR? -------------------
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.
*/
console.log("*** THE REAL FLOOR ***");

function getRealFloor(n) {
    if (n <= 12 && n > 0) {
      n--;  
      return n;
  } else if ( n >= 13) {
      n -= 2;
    return n
  } else {
    return n;
  }
  }

console.log(getRealFloor(1));
console.log(getRealFloor(15));
console.log(getRealFloor(12));



