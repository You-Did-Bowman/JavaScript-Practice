/* --------------------------- TASK 1 ---------------------------
There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers. */
console.log("****** TASK 1 ******");

const numbers = [
  25, 5, 36, 7, 4, 5, 45, 786, 41, 2, 586, 74, 47, 89, 35, 129, 43,
];

const putIntoArray = numbers.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;
  },
  { even: [], odd: [] }
);

console.log(putIntoArray);

const countEvenLength = putIntoArray.even.reduce((acc, num) => {
  return acc + num;
});

const countOddLength = putIntoArray.odd.reduce((acc, num) => {
  return acc + num;
});

if (countEvenLength > countOddLength) {
  console.log(`The even numbers win the war!
    Sum of even = ${countEvenLength}
    Sum of odd = ${countOddLength}
    difference = ${countEvenLength - countOddLength}`);
} else {
  console.log(`The odd numbers win the war!
    Sum of odd = ${countOddLength}
    Sum of even = ${countEvenLength}
    difference = ${countOddLength - countEvenLength}`);
}

console.log();

console.clear();

    

/* --------------------------- TASK 2 ----------------------------- 
Write a function that reverses all the words in a sentence that start with a particular letter.Example:

specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun" */
console.log("****** TASK 2 ******");

const sentence = "word searches are super fun"

const specialReverse = sentence
// split the sentence into an array with every word as an item
.split(" ")
// map through the array
.map((word) => {
    // make every letter - inside each word-item - into a letter-item
    let wordArr = word.split("");
    // search for "s" at the first index inside the word-items and reverse it
    if (wordArr[0] === "s") {
        wordArr.reverse()
    };
    // return the new array and join every letter-item inside the word-item
    return wordArr.join("")
})
// reduce the items of the sentence-array so we get a string. 
.reduce((acc, word) => {
    return acc + " " + word 
})

// BOOM - MAGIC! *o*
console.log(specialReverse);


/* --------------------------- TASK 3 ----------------------------
Take a look at the following code and describe in details (as much as you can) what the code is doing.
Answer the questions listed below.

const users = [
  {name: "Jake Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];

const groupedByCity = users.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]) {
    accumulator[currentValue.city] = [];
  }
  accumulator[currentValue.city].push(currentValue);
  return accumulator;
}, {})

console.log(groupedByCity);

A - why do we need this line of code?   if (!accumulator[currentValue.city])
    - We need this to check whether this key already exists. If it does not yet exist, one will be generated. For this reason, it is also the first step in the function. 

B - What if I replace "if (!accumulator[currentValue.city]) { " with  "if (!acc.hasOwnProperty(city))"?
    - I guess nothing ... both would work for this task. 

C - Which of the above is the safest approach? 
    - The second one is safer for this task because it search only for the key. The first one also searchs for the value of the key.

D - What is the value of the accumulator during the second iteration?  "accumulator[currentValue.city].push(currentValue)"
    - {
        NewYork: {name: "Jake Smith", age: 20, city: "New York"}
    }

E - What is happening here and why do we need that?  }, {}) 
    - We need the empty object to create a object in the first step. The very first step in this function is that we take an empty object and search for a key in it and add it if necessary. 
*/