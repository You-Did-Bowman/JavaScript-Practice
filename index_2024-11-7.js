/* -------------------------- Task 1 --------------------------
Given an array of products called cart and a product object hatProduct.

Create a function called addProduct that takes the cart array and the hat product in input.
The function should add the new product at the end of the array and return the updated cart.
Make sure that the original cart is not modified. So, after calling the function, cart still has only 2 products and the function returns a new array with 3 products. */

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
 console.log(addNewProduct); // [{ type: 't-shirt', price: 19, color: 'green' }, { type: 'jeans', price: 27, color: 'blue' }, { type: 'hat', price: 15, color: 'pink' }]
 console.log(cart); //[{ type: 't-shirt', price: 19, color: 'green' }, { type: 'jeans', price: 27, color: 'blue' }]
 


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

const newTasks = [...tasks];

const finishTask = (array) => {
    newTasks.pop();
    return newTasks
};
let newTaksList = finishTask(tasks);
console.log(newTaksList); //[{ task: 'clean apartment', priority: 5 }, { task: 'learn objects', priority: 2 }]
console.log(tasks); // [{ task: 'clean apartment', priority: 5 }, { task: 'learn objects', priority: 2 }, { task: 'practice JavaScript', priority: 1 }]


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

const newPerson = { ...person };

const addFullName = (obj) => {
    newPerson["fullName"] = obj.firstName + " " + obj.lastName;
    return newPerson;
}

let updatedPerson = addFullName(person);
console.log(updatedPerson); // {firstName: 'James', lastName: 'Ensor', age: 13, fullName: 'James Ensor'}
console.log(person); // { firstName: 'James', lastName: 'Ensor', age: 13 }

console.clear();

/* -------------------------- Task 4 --------------------------
Given the array of product objects:
const products = [
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
{
type: "shirt",
price: 32,
color: "white",
},
...
];

Create a function called applyDiscount that takes in input an array of product objects and a discount value.
The function should apply the discount to all the products in the array.
The function then returns the array with the discounted prices.
: the original array should not be modified.
Formula to calculate a discount:
discountedPrice = price - (price * discount / 100);

20% discount of 100€:
100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


15% discount of 70€:
70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5 */