/*  ----------------------- THE SWEETEST ICE CREAM -----------------------

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

// create class with the given flavour and amount of sprinkles
// also add a property with an array of flavors and sweetness
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
    // create a function which returns the sweetness of the ice cream and call it immediatly when creating each ice cream and store it in a property
    sweetness() {
        let selectedFlavour = this.flavors.find(el => el.flavour === this.flavour);
        return selectedFlavour.sweetness + this.sprinkles;
    }
}

//create ice creams
const ice1 = new IceCream("Chocolate", 13);
const ice2 = new IceCream("Vanilla", 0)  
const ice3 = new IceCream("Strawberry", 7)
const ice4 = new IceCream("Plain", 18)     
const ice5 = new IceCream("ChocolateChip", 3)


// create function which sorts the ice creams after their sweetnessValue and returns the sweetes
function sweetestIcecream(ices) {
    ices.sort((a, b) => b.sweetnessValue - a.sweetnessValue);
    return ices[0].sweetnessValue;
}

// use function
console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])) // 23
console.log(sweetestIcecream([ice3, ice1])) // 23
console.log(sweetestIcecream([ice3, ice5])) // 17
console.log(sweetestIcecream([ice4, ice5])) // 18




