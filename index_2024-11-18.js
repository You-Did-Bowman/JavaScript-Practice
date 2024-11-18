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
