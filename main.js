/* 
--------------------------- The Cat Object ---------------------------
Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.
Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
Next, write methods that increase and decrease those properties (there's an example in the slides). Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
Last, write a method that prints out the cat's status in each area.
Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.
*/
  
const cat = {
    tiredness: 3,
    hunger: 0,
    lonliness: 7,
    happiness: 10,
    pet: function(num){
        this.happiness += num;
        this.lonliness += Math.floor(num/2);
    },
    sleep: function(hours){
        this.tiredness -= Math.floor(hours/3);
        this.happiness += Math.floor(hours/4);
    },
    feed: function(amount){
        this.hunger += amount;
        this.happiness += Math.floor(amount/2);
    },
    status: function(){
       for (let elem in cat) {
        if (typeof cat[elem] !== "function") {
            console.log(`${elem}: ${cat[elem]}`);
        }
       }
    }
}

cat.status();

console.log(" ");

cat.pet(5);
cat.feed(10);
cat.sleep(6);

console.log(" ");

cat.status();