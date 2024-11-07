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

// this should be in the function

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

