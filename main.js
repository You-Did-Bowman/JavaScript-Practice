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

