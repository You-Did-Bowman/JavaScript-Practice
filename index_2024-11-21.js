/* ---------------------- IT'S PIZZA TIME! ----------------------
Create a Pizza class accepting 1 param (pizzaId)
The class contains the following property:

productObj = [
            { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
            { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
            { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
        ]; 

getItem() Method - retrieves the filtered out object (based on product id), calls the method "print" while passing it the retrieved object 
print() Method - logs following message "you have selected pizza <product>. it contains <ingredients> and costs <price> euros"
balance() Method - logs following message "you paid <amount>. your change is <change>"       

Example usage
const pizza1 = new Pizza( 2 ); 2 represents product id
As soon as you create your instance you should receive this example message in the terminal 
"You have selected pizza marinara. 
 It contains tomato,oregano,garlic and costs 5.75 euros"

Once you execute the balance method you will receive the following message 
You paid 43 euros. Your change is 37.25

IMPORTANT!! the only method you should call on the instance is balance(). Nothing else.
pizza1.balance( 43 ); // 43 represents amount paid in.


HOW TO RUN (EXAMPLE)
const pizza1 = new Pizza( 2 );
pizza1.balance( 43 ); 

RESULT
You have selected pizza marinara. 
It contains tomato,oregano,garlic and costs 5.75 euros
You paid 43 euros. Your change is 37.25
*/
console.log("**** PIZZA TASK ****");

class Pizza {
  constructor(id) {
    this.productObj = [
      {
        id: 1,
        product: "margherita",
        ingredients: ["tomato", "mozzarella", "basilicum"],
        price: 7.5,
      },
      {
        id: 2,
        product: "marinara",
        ingredients: ["tomato", "oregano", "garlic"],
        price: 5.75,
      },
      {
        id: 3,
        product: "veggy",
        ingredients: ["eggplants", "peppers", "zucchini", "basilicum"],
        price: 9.99,
      },
    ];

    //After a lot of trial and error, I came up with the idea of simply creating another proberty with the pizza I was looking for, because then I can use it in the other methods. 
    this.pizza = this.getItem(id); 
    this.print(this.pizza);
  }

  getItem(id) {
    for (let i = 0; i < this.productObj.length; i++)
      if (this.productObj[i].id === id) {
        return this.productObj[i];
      }
  }
  print(selectedPizza){ // give pizza as param
    console.log(
`You have selected ${selectedPizza.product}
It contains ${selectedPizza.ingredients.join(", ")} and costs ${selectedPizza.price}€
    `);
  }
  balance(amount) {
    console.log(`You paid ${amount}€. Your change is ${amount - this.pizza.price}€`);
  }
  
}

const pizza1 = new Pizza( 2 );
pizza1.balance( 43 ); 

console.log();

/* ---------------------- ANIMAL AND DOG CLASSES ----------------------

Create a program that models a class hierarchy for animals. The base class Animal should define general properties and methods, while the derived class Dog should extend the base class and add specific properties and methods.

1. Class Animal:
    Properties:
        - name (Name of the animal, string)
        - age (Age of the animal, integer)
    Constructor:
        - Initializes name and age.
        - Calls a method greet that prints the name of the animal, e.g., "Hello, I am an animal named Luna!".
    Method description:
        - Prints a description of the animal, e.g.: "This animal is named Luna and is 5 years old.".

2. Class Dog (extends Animal):
    Additional Property:
        - breed (Breed of the dog, string)
    Constructor:
        - Calls the constructor of the base class Animal.
        - Additionally initializes the property breed.
        - Calls a method bark that prints: "Woof! I am a dog of the Labrador breed." (the breed name should be dynamic).
    Overrides the method description:
        - Prints a more detailed description, e.g.: "This dog is named Luna, is 5 years old, and belongs to the Labrador breed.".
*/
console.log("**** ANIMAL TASK ****");

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.greet()
  }

  greet() {
    console.log(`Hello, I am an animal named ${this.name}!`);
  }

  description() {
    console.log(`This animal is named ${this.name} an is ${this.age}!`);
  }
}

let pet = new Animal("Luna", 5);
pet.description();

console.log();

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;

        this.bark();
    }

    bark() {
        console.log(`Woof! I am a dog of the ${this.breed} breed.`);
    }

    description() {
        console.log(`This dog is named ${this.name}, is ${this.age} years old and belongs to the ${this.breed} breed.`);
    }
}

let dog = new Dog("Luna", 5, "Labrador");
dog.description();

console.log();

/* ---------------------- E-COMMERCE SYSTEM WITH CLASSES ----------------------

Create a system for managing products and orders in an e-commerce application. The system should include the following:
1. Class: Product
    Properties:
        name (Name of the product, string)
        price (Price of the product, number)
        stock (Number of items available, number)
    Constructor:
        Initializes name, price, and stock.
    Methods:
        isAvailable():
            Returns true if stock > 0, otherwise false.
        purchase(quantity):
            Reduces the stock by quantity if enough items are in stock.
            Throws an error if quantity > stock.

2. Class: Order
    Properties:
        products (An array of Product objects with quantities)
        status (Status of the order, e.g., "Pending", "Completed")
    Constructor:
        Initializes products as an empty array and status as "Pending".
    Methods:
        addProduct(product, quantity):
            Adds a product to the order if it's available. Calls the purchase method of Product.
        calculateTotal():
            Returns the total cost of the order based on the products and quantities.
        completeOrder():
            Changes the status to "Completed" if the order contains products.

3. Static Method in Order
    Add a static method getOrderSummary(order):
        Returns a string summarizing the products in the order, their quantities, and the total cost.
 */
console.log("**** E-COMMERCE TASK ****");

class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    isAvailable() {
        if (stock > 0) {
            return true;
        } else {
            return false;
        }
    }
    purchase(quantity) {
        if (quantity < stock) {
            return stock -= quantity;
        } else {
            console.log("404 Error!");
        }
    }
}

cl

