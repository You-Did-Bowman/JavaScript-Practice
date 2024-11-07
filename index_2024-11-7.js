/* -------------------------- Task 1 --------------------------
Given an array of products called cart and a product object hatProduct.

Create a function called addProduct that takes the cart array and the hat product in input.
The function should add the new product at the end of the array and return the updated cart.
Make sure that the original cart is not modified. So, after calling the function, cart still has only 2 products and the function returns a new array with 3 products. */

// NOTE: Hier wird der Array ergänzt bzw. verändert, daher reicht eine shallow copy - die objects werden nicht verändert -> nach der Ergänzung des "hat" bleibt "cart" unangetastet

const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

const newCart = [...cart]

const addProduct = (product) => {
    newCart.push(product);
    return newCart;
};
let addNewProduct = addProduct(hatProduct);

console.log(addNewProduct); 
/* OUTPUT:
 [
  { type: 't-shirt', price: 19, color: 'green' }, 
  { type: 'jeans', price: 27, color: 'blue' }, 
  { type: 'hat', price: 15, color: 'pink' }
] 
*/

console.log(cart);
/* 
OUTPUT:
[
  { type: 't-shirt', price: 19, color: 'green' }, 
  { type: 'jeans', price: 27, color: 'blue' }
] 
*/

/* -------------------------- Task 2 --------------------------
Given an array tasks containing a series of objects.

Create a function called finishTask that:
- takes in input an array of tasks
- removes the last item from the array
- returns the updated array

The original task array must not be modified. */

const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const newTasks = [...tasks]; // this inside the function

const finishTask = (array) => {
    newTasks.pop(); // comment here 
    return newTasks
};
let newTaksList = finishTask(tasks);

console.log(newTaksList); 
/* 
OUTPUT;
[
  { task: 'clean apartment', priority: 5 }, 
  { task: 'learn objects', priority: 2 }
] */
console.log(tasks);

/* 
OUTPUT:
[
  { task: 'clean apartment', priority: 5 }, 
  { task: 'learn objects', priority: 2 }, 
  { task: 'practice JavaScript', priority: 1 }
] */


/* -------------------------- Task 3 --------------------------
Given an object person.

Create a function called addFullName that takes in input an object and adds a new property to it called fullName.
The function returns the modified version of the object. The property should combine together firstName and lastName.
The original person object must not be changed. */

const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const newPerson = { ...person }; // this should be in the function

const addFullName = (obj) => {
    newPerson["fullName"] = obj.firstName + " " + obj.lastName;
    return newPerson;
}

let updatedPerson = addFullName(person);
console.log(updatedPerson); // {firstName: 'James', lastName: 'Ensor', age: 13, fullName: 'James Ensor'} 
console.log(person);// { firstName: 'James', lastName: 'Ensor', age: 13 }

/* -------------------------- Task 4 --------------------------
Given the array of product objects.

Create a function called applyDiscount that takes in input an array of product objects and a discount value.
The function should apply the discount to all the products in the array.
The function then returns the array with the discounted prices.
-> the original array should not be modified.

Formula to calculate a discount:
discountedPrice = price - (price * discount / 100);

20% discount of 100€:
100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


15% discount of 70€:
70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5 */

//NOTE: Hier mag ich die objects in dem array verändern. Daher muss ich eine deep copy erstellen, damit "products" unangetastet bleibt. 
// structuredClone(value) erstellt eine deep copy mit allem was in dem array ist :3

const products = [
  {
    type: "t-shirt",
    price: 190,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
];

const applyDiscount = (arr) => {
  const newProducts = structuredClone(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > 100) {
      newProducts[i]["discount"] = 20;
      newProducts[i]["discountedPrice"] =
        newProducts[i].price -
        (newProducts[i].price * newProducts[i].discount) / 100;
    } else {
      newProducts[i]["discount"] = 15;
      newProducts[i]["discountedPrice"] =
        newProducts[i].price -
        (newProducts[i].price * newProducts[i].discount) / 100;
    }
  }
  return newProducts;
};

let discountedProducts = applyDiscount(products);
console.log(discountedProducts);
/* 
OUTPUT:
[
  {
    type: 't-shirt',
    price: 190,
    color: 'green',
    discount: 20,
    discountedPrice: 152
  },
  {
    type: 'jeans',
    price: 27,
    color: 'blue',
    discount: 15,
    discountedPrice: 22.95
  },
  {
    type: 'shirt',
    price: 32,
    color: 'white',
    discount: 15,
    discountedPrice: 27.2
  }
]
*/

console.log(products);
/* 
OUTPUT:
[
  { type: 't-shirt', price: 190, color: 'green' },
  { type: 'jeans', price: 27, color: 'blue' },
  { type: 'shirt', price: 32, color: 'white' }
]
*/

// ------------------------- CODEX TASKS -------------------------
/* 
We are running a swag raffle in the Codédex community and need to return 10 of the same number by picking random numbers between 0 - 99. 🏆

Define a count variable at 0 and a targetNumber that is randomly set between 0 and 99.

Run a while loop until count is equal to 10. Inside the loop, set a drawNumber variable to a random number between 0 and 99.

    If drawNumber is equal to targetNumber, increment the count by 1 and log "Match".
    Otherwise, do not increment the count and log "No Match".

Outside the loop, log a message indicating the targetNumber was drawn 10 times:
*/
let count = 0;
let targetNumber = Math.floor(Math.random() * 100)

while (count != 10) {
  let drawNumber = Math.floor(Math.random() * 100);
  if (drawNumber === targetNumber) {
    count++;
    console.log("Match");
  }
  console.log("No Match");
}

console.log(`The number ${targetNumber} was found 10 times`);


/* ------------------------------ ODD CUBES ------------------------------
When you multiply any number three times, you're cubing it (e.g., 3³ = 3 x 3 x 3 = 27).

Define a limit variable with a number value like 5. Then, define a total with an initial value of 0.

Use a for loop to iterate from 1 to the limit and do the following each time:
- Only calculate the cubed value for odd numbers.
- Update the total variable each time.

Note: Make sure to include the limit in case it is also an odd number.

Finally, log the total to the console.

For example, if limit is 5, the total should be 153:
13+33+53
=1+27+125
=153 */

let limit = 5;
let total = 0;

for (let i = 1; i <= limit; i++) {
  if (i % 2 != 0) {
    total += i ** 3;
  }
}

console.log(total);

/* 
------------------------------ DICE DOUBLE ------------------------------
If you roll two dice, the chance that both of them come up with the same value is slightly less than 17%. 🎲 🎲

Let's simulate this with loops!

Start with two variables, die1 and die2, each set with a random value between 1 and 6.

Let's track the dice rolls by initializing a numberOfRolls at 0.

Now, let's use a while loop that runs as long as our die1 is not equal to die2. When they're not equal, increment numberOfRolls and reset the die1 and die2 to a new random number between 1 and 6.

When you roll double values, the loop should stop and the output should look like this:

Roll 1: 2
Roll 2: 5
Roll 1: 1
Roll 2: 1
Number of rolls: 1

Note: Make sure to use console.log() to match the output shown above.
*/
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let numberOfRolls = 0;

while (die1 !== die2) {
  console.log(`Roll 1: ${die1}`);
  console.log(`Roll 2: ${die2}`);
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  numberOfRolls++;
}

console.log(`Roll 1: ${die1}`);
console.log(`Roll 2: ${die2}`);
console.log(`Number of rolls: ${numberOfRolls}`);

/* 
------------------------------ FIBONACCI SEQUENCE ------------------------------
There's strength in numbers, but there's also beauty in them!

The Fibonacci sequence is a special list of numbers where each one is the sum of the two previous numbers (after 0 and 1):
0,1,1,2,3,5,8,13,21,34

Examples of the sequence are found in nature, including tree branches and pine cone scales. 🌲

Use a for loop to log the first 10 Fibonacci numbers.

The first two numbers, 0 and 1, can be saved to firstFib and secondFib variables and logged directly to the console. Use a loop to generate a nextFib variable for the next Fibonacci number.

Note: Inside the loop, make sure to properly reassign firstFib and secondFib after generating the next number.
  */
let firstFib = 0;
let secondFib = 1;
console.log(firstFib);
console.log(secondFib);

for (let i = 1; i < 9; i++) {
  let nextFib = firstFib + secondFib;
  firstFib = secondFib;
  secondFib = nextFib;
  console.log(nextFib);
}

console.clear();

/* 
------------------------------ NITE OWL ------------------------------
People tend to be either an early bird or a night owl. There are several factors that go into this, such as genetics, age, lifestyle, and more.

Let's use conditionals to see which one you are!

Start by creating a wakeUp variable and set it equal to the time you wake up, between 0 and 23.

Test for early bird vs. night owl with an if/else statement:
- wakeUp is < 8, log "Early bird gets the worm! 🌅"
- Otherwise, log "But who wants the worm? 🌃"
*/

let wakeUp = 7;

if (wakeUp < 8) {
  console.log("Early bird gets the worm! 🌅");
} else {
  console.log("But who wants the worm? 🌃");
}