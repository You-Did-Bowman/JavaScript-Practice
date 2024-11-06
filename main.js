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

console.log(`SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.price} instead of ${product.discountedPrice}!`);


