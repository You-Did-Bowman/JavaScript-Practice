/* -------------------------------- FIND THE SMALLEST INTEGER IN THE ARRAY --------------------------------
Given an array of integers your solution should find the smallest integer.

For example:
- Given [34, 15, 88, 2] your solution will return 2
- Given [34, -345, -1, 100] your solution will return -345
*/
console.log("*** FIND THE SMALLEST INT ***");

function findSmallestInt(arr) {
  let num = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (num >= arr[i]) {
      num = arr[i];
    }
  }
  return num;
}

console.log(findSmallestInt([78,56,232,12,8])); // 8
console.log(findSmallestInt([78,56,232,12,18])); // 12
console.log(findSmallestInt([78,56,232,412,228])); // 56

console.log();

/* ------------------------------- ONES AND ZEROS --------------------------------
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
*/
console.log("*** ONES AND ZEROS ***");

const binaryArrayToNumber = (arr) => {
  let result = 0;
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0) {
      let num = 2 ** count;
      result += num;
    }
    count++;
  }
  return result;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1 
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15

console.log();

/* ------------------------------- 5 WITHOUT NUMBERS!! --------------------------------
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/ 
*/
console.log("*** 5 WITHOUT NUMBERS ***");

function unusualFive() {
    return ["a", "b", "c", "d", "e"].length;
};

console.log(unusualFive()); // 5




