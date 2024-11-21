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
    console.log(`
    You have selected ${selectedPizza.product}
    It contains ${selectedPizza.ingredients.join(", ")} and costs ${selectedPizza.price}€
    `);
  }
  balance(amount) {
    console.log(`You paid ${amount}€. Your change is ${amount - this.pizza.price}€`);
  }
  
}

const pizza1 = new Pizza( 2 );

pizza1.balance( 43 ); 


