//Experiment and try different approaches to solve these problems.

/* ----------------------- Task 1 -----------------------

Use forEach to log the name and age of each person to the console.
*/

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 28 }
];  
console.log("****** TASK 1 ******");


//Normal function ------------
console.log("Normal function:");

people.forEach(function(el) {
    console.log(el.name, el.age);
})

console.log();


//Arrow function ------------
console.log("Arrow function:");

people.forEach((el) => {
    console.log(el.name, el.age);
})

console.log();


// Pass existing function ------------
console.log("Pass existing function:");

const showNameAge = (el) => {
    console.log(el.name, el.age);
};
people.forEach(showNameAge);

console.log();


/* ----------------------- Task 2 -----------------------

Use forEach to log only the even numbers to the console
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("****** TASK 2 ******");

//Normal function ------------
console.log("Normal function:");

numbers.forEach(function(el) {
    if (el % 2 === 0) {
        return console.log(el);
    }
});

console.log();


//Arrow function ------------
console.log("Arrow function:");

numbers.forEach((el) => {
    if (el % 2 === 0) {
        return console.log(el);
    }
});

console.log();


// Pass existing function ------------
console.log("Pass existing function:");

const findEven = (el) => {
    if (el % 2 === 0) {
        return console.log(el);
    }
};
numbers.forEach(findEven);

console.log();


/* ----------------------- Task 3 -----------------------

Use forEach to capitalize the first letter of each word and log the result
*/
const words = ['hello', 'world', 'javascript'];
console.log("****** TASK 3 ******");

//Normal function ------------
console.log("Normal function:");

words.forEach(function(el) {
    console.log(el[0].toUpperCase() + el.slice(1));
})

console.log();


//Arrow function ------------
console.log("Arrow function:");

words.forEach((el) => {
    console.log(el[0].toUpperCase() + el.slice(1));
})

console.log();


// Pass existing function ------------
console.log("Pass existing function:");

const capitalizeWords = (el) => {
    console.log(el[0].toUpperCase() + el.slice(1));
}
words.forEach(capitalizeWords);

console.log();


/* ----------------------- Task 4 -----------------------

Use forEach to log the names of only the students.
*/
const people1 = [
{ name: 'Alice', age: 25, isStudent: true },
{ name: 'Bob', age: 30, isStudent: false },
{ name: 'Charlie', age: 28, isStudent: true }
];
console.log("****** TASK 4 ******");

//Normal function ------------
console.log("Normal function:");

people1.forEach(function(el) {
    if (el.isStudent === true) {
        console.log(el.name);
    };
});

console.log();


//Arrow function ------------
console.log("Arrow function:");

people1.forEach((el) => {
    if (el.isStudent === true) {
        console.log(el.name)
    };
});

console.log();

// Pass existing function ------------
console.log("Pass existing function:");

const showName = (el) => {
    if (el.isStudent === true) {
        console.log(el.name)
    };
};
people1.forEach(showName);

console.log();


/* ----------------------- Task 5 -----------------------
Use forEach and the multiply function to log the product of each number with 10.
*/
function multiply(a, b) { 
  return a * b; 
} 
const nums = [2, 3, 4, 5];
console.log("****** TASK 5 ******");

//Normal function ------------
console.log("Normal function:");

nums.forEach(function(el) {
    console.log(multiply(el, 10))
})

console.log();


//Arrow function ------------
console.log("Arrow function:");

nums.forEach((el) => console.log(multiply(el, 10)));


// To call multiply() for Each element inside the array it has to be triggert everytime the forEach() gets a new el. Therefore the multiply() is inside the forEach() function. You cannot pass multiply() as an existing function in the forEach() (like nums.forEach(multiply(el, 10))), because then it is only executed once - without getting the elements. 
