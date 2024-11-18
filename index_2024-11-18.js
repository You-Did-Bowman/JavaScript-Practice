// ----------------------- EDABIT.COM EXERICISES -----------------------

/* ----------------------- HOW MUCH IS TRUE? -----------------------

Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0

Notes
- Return 0 if given an empty array.
- All array items are of the type bool (true or false). 
*/
console.log("HOW MUCH IS TRUE?");

const countTrue = (arr) => {
    let count = 0;
    for (bool of arr) {
        if (bool === true) {
        count++;
        }
    }
    return count;
}

let howManyTrue = countTrue([true, false, false, true, false]);
console.log(howManyTrue); // 2

howManyTrue = countTrue([false, false, false, false]);
console.log(howManyTrue); // 0

howManyTrue = countTrue([]);
console.log(howManyTrue); // 0

console.log();


/* ----------------------- TILE TEAMWORK TACTICS -----------------------

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true
possibleBonus(1, 9) ➞ false
possibleBonus(5, 3) ➞ false

Notes
- You cannot move backward (which is why example #3 doesn't work).
- If you are already on the same tile, return false, as you would be advancing away.
- Expect only positive integer inputs. 
*/
console.log("TILE TEAMWORK TACTICS");

const possibleBonus = (num1, num2) => {
    if (num1 < num2 && (num2 - num1) < 6) {
        return true;
    } else {
        return false;
    }
}

let dieRoll = possibleBonus(3, 7);
console.log(dieRoll); // true

dieRoll = possibleBonus(1, 9);
console.log(dieRoll); // false

dieRoll = possibleBonus(5, 3);
console.log(dieRoll); // false

console.log();


/* --------------------------- WHICH GENERATION ARE YOU? ---------------------------------

Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
- If the number is negative, return the related ancestor.
- If positive, return the related descendant.
- You are generation 0. In the case of 0 (male or female), return "me!".

Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
*/
console.log("WHICH GENERATIONARE YOU?");


const generation = (num, char) => {
    const rescrs = {
        "-3": { "f": "great grandmother", "m": "great grandfather" },
        "-2": { "f": "grandmother", "m": "grandfather" },
        "-1": { "f": "mother", "m": "father" },
        "0": { "f": "me!", "m": "me!" },
        "1": { "f": "daugther", "m": "son" },
        "2": { "f": "granddaugther", "m": "grandson" },
        "3": { "f": "great granddaugther", "m": "great grandson" },
    };
    return rescrs[num][char];
};

let resultTask14 = generation(2, "f");
console.log(resultTask14); // granddaugther

resultTask14 = generation(-3, "m");
console.log(resultTask14); // great grandfather

resultTask14 = generation(1, "f") ;
console.log(resultTask14); // daugther


// -------------------------- TASK FROM SCHOOL -------------------
/* 
Add a nested callback to the following code.

The callback should print "take a break from <subject>"

function doHomework( subject, callback ) {
console.log(`Starting my ${subject} homework.`);
callback( subject );
}

// Create callback
function alertFinished( val ){
console.log(`Finished my ${val} homework`);
}

// Trigger main function and pass callback
doHomework('math', alertFinished);
*/

function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback(subject);
}

function alertFinished(val) {
    alertBreak(val);
  console.log(`Finished my ${val} homework`);
}

function alertBreak(val) {
    console.log(`Take a break from ${val}`); 
}

doHomework('math', alertFinished);