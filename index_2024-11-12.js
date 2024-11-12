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


