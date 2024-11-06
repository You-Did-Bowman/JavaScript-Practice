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
  