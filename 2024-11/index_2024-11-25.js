/**  ----------------------- THE SWEETEST ICE CREAM -----------------------

Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
Flavors	        Sweetness Value
Plain	        0
Vanilla	        5
ChocolateChip	5
Strawberry	    10
Chocolate	    10

You'll be given instance properties in the order flavor, numSprinkles.

Examples
ice1 = IceCream("Chocolate", 13)         // value of 23
ice2 = IceCream("Vanilla", 0)           // value of 5
ice3 = IceCream("Strawberry", 7)        // value of 17
ice4 = IceCream("Plain", 18)             // value of 18
ice5 = IceCream("ChocolateChip", 3)      // value of 8

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
sweetestIcecream([ice3, ice1]) ➞ 23
sweetestIcecream([ice3, ice5]) ➞ 17 
*/
console.log("*** The sweetest Ice Cream ***");

/** create class with the given flavour and amount of sprinkles
    also add a property with an array of flavors and sweetness */
class IceCream  {
    constructor(flavour, sprinkles) {
        this.flavour = flavour;
        this.sprinkles = sprinkles;
        this.flavors = [
            {flavour: "Plain", sweetness: 0},
            {flavour: "Vanilla", sweetness: 5},
            {flavour: "ChocolateChip", sweetness: 5},
            {flavour: "Strawberry", sweetness: 10},
            {flavour: "Chocolate", sweetness: 10},
        ];
        
        this.sweetnessValue = this.sweetness();
    }
    /** create a function which returns the sweetness of the ice cream and call it immediatly when creating each ice cream and store it in a property */
    sweetness() {
        let selectedFlavour = this.flavors.find(el => el.flavour === this.flavour);
        return selectedFlavour.sweetness + this.sprinkles;
    }
}

/** create ice creams */
const ice1 = new IceCream("Chocolate", 13);
const ice2 = new IceCream("Vanilla", 0)  
const ice3 = new IceCream("Strawberry", 7)
const ice4 = new IceCream("Plain", 18)     
const ice5 = new IceCream("ChocolateChip", 3)


/** create function which sorts the ice creams after their sweetnessValue and returns the sweetes */
function sweetestIcecream(ices) {
    ices.sort((a, b) => b.sweetnessValue - a.sweetnessValue);
    return ices[0].sweetnessValue;
}

/** use function */
console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])) // 23
console.log(sweetestIcecream([ice3, ice1])) // 23
console.log(sweetestIcecream([ice3, ice5])) // 17
console.log(sweetestIcecream([ice4, ice5])) // 18

console.log();


/* ----------------------- Convenience Store -----------------------

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: 
changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false

Notes
- quarter: 25 cents / $0.25
- dime: 10 cents / $0.10
- nickel: 5 cents / $0.05
- penny: 1 cent / $0.01
*/

console.log("*** Convenience Store ***");

function changeEnough(array, price) {
    // create a variable which calculates the amount of money in my pocket
    let change= (array[0] * 0.25) + (array[1] * 0.1) + (array[2] * 0.05) + (array[3] * 0.01);
    // compare my change and the price of the things I want to buy
    if (change >= price) {
        console.log(true);
    } else {
        console.log(false);
    };
}

// call function to see if I have enough money in my pocket
changeEnough([2, 100, 0, 0], 14.11) 
console.log();
changeEnough([0, 0, 20, 5], 0.75) 
console.log();
changeEnough([30, 40, 20, 5], 12.55) 
console.log();
changeEnough([10, 0, 0, 50], 3.85) 
console.log();
changeEnough([1, 0, 5, 219], 19.99) 

console.log();

/** ----------------------- Maskify the string ----------------------
 * Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
 * Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
 * 
 * Examples
 * - maskify("4556364607935616") ➞ "############5616"
 * - maskify("64607935616") ➞ "#######5616"
 * - maskify("1") ➞ "1"
 * - maskify("") ➞ ""
 * 
 * Notes
 * - The maskify function must accept a string of any length.
 * - An empty string should return an empty string (fourth example above).
*/
console.log("*** Maskify the string ***");

function maskify(string) {
  /** Create an empty string where the masked string will bestored  */
  let newString = "";
  /** Search through the string to the fourth index from its end */
  for (let i = 0; i < string.length - 4; i++) {
    /** And replace each index with a "#" */
    newString += "#";
  }
  /** Log the newString with the last 4 indexes of the orginal string */
  console.log(newString + string.slice(string.length - 4));
}

maskify("4556364607935616")
console.log();
maskify("64607935616")
console.log();
maskify("1")
console.log();
maskify("")





