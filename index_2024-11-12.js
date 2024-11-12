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