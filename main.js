/* ***** BETTER TYPE OF *****

Create a function called betterTypeOf that accepts a single parameter called value and returns the type of that value.

For example:
betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
const person = {
    fullName: "Sandy Smith",
    age: 28
};
betterTypeOf(person); // "object"

Pay particular attention at the cases where the value is an array. 
*/

function betterTypeOf(value) {
  if (Array.isArray(value)) {
    console.log("array");
  } else {
    console.log(typeof value);
  }
}

betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'
const person = {
  fullName: "Sandy Smith",
  age: 28,
};
betterTypeOf(person); // "object"

/* ***** OBJECT: CREATE, ACCESS, UPDATE *****

This exercise is meant to let you properly understand and practice basic operations we perform with objects, tipically:
- creating objects
- accessing, reading, their properties
- updating, modifying, the values of these properties

------------------------------ Objects: Task 1 ------------------------------

Given the object below, change the value of the read property from false to true. Then, output the whole object to the console.
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};

Expected output:
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}
*/
const book = {
  title: "A Smarter Way to Learn JavaScript",
  author: "Mark Myers",
  price: 19.95,
  read: false,
};

book.read = true;

console.log(book);

/* 
------------------------------ Objects: Task 2 ------------------------------
Given the object below, increase the age property by 1. Then, output the whole object to the console.
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};

Expected output:
{
    firstName: "Martha",
    lastName: "Martin",
    age: 28
}; 
*/
const person1 = {
  firstName: "Martha",
  lastName: "Martin",
  age: 27,
};

person1.age++;
console.log(person1);

/* 
------------------------------ Objects: Task 3 ------------------------------
Given the object below, modify the value of the property discountedPrice so that it's half of the price property.
Then, output a message to the console as shown below.
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};
IMPORTANT: when modifying discountedPrice, make sure to use the property price to calculate the new value, rather than typing 22 directly.

Expected output:
SALE: the green Dolphin hat costs now only 11€ instead of 22€! 
*/
const product = {
  type: "hat",
  color: "green",
  brand: "Dolphin",
  price: 22,
  discountedPrice: 22,
};
product.discountedPrice = product.price / 2;

console.log(
  `SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.price} instead of ${product.discountedPrice}!`
);

/* 
------------------------------ Objects: Task 4 ------------------------------
Given the object below, add a new property to it called fullName.
The property should combine the values from firstName and lastName, separated by a space.
const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

Expected output:
{
    firstName: "Jim",
    lastName: "Jameson",
    age: 37,
    fullName: "Jim Jameson"
};
*/
const person2 = {
  firstName: "Jim",
  lastName: "Jameson",
  age: 37,
};

person2["fullName"] = person2.firstName + " " + person2.lastName;

/* 
------------------------------ Objects: Task 5 ------------------------------
Given the object below, modify the value of the property city so that the first letter is correctly capitalised.
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
IMPORTANT: try to use and modify the current value of city rather than manually typing London.

Expected output:
{
    firstName: "Sylvia",
    lastName: "Sun",
    city: "London"
};
*/
const person3 = {
  firstName: "Sylvia",
  lastName: "Sun",
  city: "london",
};
person3.city = person3.city[0].toUpperCase() + person3.city.slice(1);

console.clear();

/* 
------------------------------DEV.TO: REAL WORLD OBJECTS EXERCISES ------------------------------- 
***** Exercise 1: Creating Objects *****
*/

// Using Object Literals
const person4 = {
  name: "John",
  age: 30,
  profession: "Developer",
};

// Using Constructor Function
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}
const person5 = new Person("Jane", 25, "Designer");

// Using Object.create() Method
const person6 = Object.create(null);
person3.name = "Mike";
person3.age = 35;
person3.profession = "Engineer";

// ***** Exercise 2: Accessing Object Properties *****
console.log(person1.name); // Output: John
console.log(person2["age"]); // Output: 25

// ***** Exercise 3: Modifying Object Properties *****
person1.age = 32;
person2["profession"] = "Manager";

// ***** Exercise 4: Adding New Properties *****
person1.location = "New York";
person2["salary"] = 60000;

// ***** Exercise 5: Iterating Through Object Properties *****
  // Using for...in loop
  for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
  };
  
  // Using Object.keys() method
  Object.keys(person2).forEach(key => {
    console.log(`${key}: ${person2[key]}`);
  });
  
// ***** Exercise 6: Checking Property Existence *****
console.log("name" in person1); // Output: true
console.log(person3.hasOwnProperty("salary")); // Output: false
  
// ***** Exercise 7: Deleting Properties *****
delete person1.location;
delete person2.salary;
  
// ***** Exercise 8: Object Methods *****
person1.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};
person2.introduce = () => {
    console.log(`I'm ${person2.name}, a ${person2.age}-year-old ${person2.profession}.`);
};
  
// ***** Exercise 9: Object Composition *****
const address = {
    city: "San Francisco",
    country: "USA"
};
  
const personWithAddress = { ...person1, ...address };
console.log(personWithAddress);
  
// ***** Exercise 10: Object Serialization and Deserialization *****
const jsonPerson = JSON.stringify(person1);
console.log(jsonPerson);
  
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);

/* 
--------------------------- Discount: Task 1 ---------------------------
Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :
the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
    name: "headphones",
    price: 100,
    discount: 0
};
*/
let product1 = {
    name: "headphones",
    price: 200,
    discount: 0
};

if (product1.price > 100) {
    product1.discount = 10;
    product1.price -= (product1.discount * product1.price) / 100;
} else {
    product1.discount = 7;
    product1.price -= (product1.discount * product1.price) / 100;
}

console.log(product1.price);


/*
--------------------------- Discount: Task 2 ---------------------------
Use the given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). Check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.
let prod = {
    name: "headphones",
    price: 83.7,
    discount: "7%",
};
*/
let prod = {
    name: "headphones",
    price: 83.7,
    discount: "7%",
};

for (let item in prod) {
    if (item === "discount") {
        console.log(`Already discounted by ${product1.discount}`);
    };
}

if (prod.price > 100) {
    prod.discount = 10;
    prod.price -= Math.floor((prod.discount * prod.price) / 100);
} else {
    prod.discount = 7;
    prod.price -= Math.floor((prod.discount * prod.price) / 100);
}

console.log(prod);

