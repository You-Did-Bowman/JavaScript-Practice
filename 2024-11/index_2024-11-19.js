// ------------------- Task: Create a Fighting Game Using CLASSES -------------------
/*  
You are working on a fighting game. You need to implement a class to represent player characters and allow them to attack each other.
Create a Character class with the following properties:
- name (string): The name of the character.
- health (number): The remaining health of the character.
- attackSkill (string): The type of skill used to attack (e.g., "punch", "kick", "flying kick").
- attackDamage (number): The amount of damage the attack skill inflicts.

Add a method called attack to the Character class. This method should:
- Take another Character object as a parameter (the character being attacked).
- Decrease the health of the attacked character by the attacking character's attackDamage.
- Print a message to the console in the format:
- "attackerName attacked defenderName with attackSkill, inflicting attackDamage damage. defenderName's health is now newHealth."

Bonus: 
- Add a heal method that restores a certain amount of health to a character.
- Modify the attackDamage to be randomized within a range (e.g., between 10 and 30).
Create two instances of the Character class to represent the player characters. Then, demonstrate attacking by calling the attack method on one character and passing the other character as a parameter. 
*/

class Chars{
    constructor(name, health, attackSkill, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackSkill = attackSkill;
        this.attackDamage = attackDamage;
    }

    attack(charName){
        let damage = Math.floor(Math.random() * this.attackDamage + 10)
        // randomize damage = chose a random number between char max damage and its min damage
        charName.health -= damage;
        return `${this.name} attacked ${charName.name} with ${this.attackSkill}, inflicting ${damage} damage. ${charName.name} s health is now ${charName.health} HP.`
    }

    heal() {
        this.health += 10;
        return `${this.name} drinks a potion. It gained 10 HP. Its health is now ${this.health} HP.`
    }
}

let vaporeon = new Chars("Vaporeon", 100, "Water Gun", 20);
let charizard = new Chars("Charizard", 100, "Fire Fang", 20);

console.log(vaporeon.attack(charizard));
console.log();
console.log(charizard.attack(vaporeon));
console.log();
console.log(vaporeon.heal());
console.log();
console.log(charizard.heal());

