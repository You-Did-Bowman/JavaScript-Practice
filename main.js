/* 
------------------------- Shopping list -------------------------
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:
groceries
( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
 */
const groceries = (arr) => {
let string = arr[0].item;
for (let i = 1; i < arr.length; i++) {
    string +=  " and " + arr[i].item;
    if (i == arr.length) {
        string += arr[i].item; 
    }
}
return string;
}

let list = groceries([{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]);
console.log(list);

list = groceries( [{item: 'Bread'}, {item: 'Butter'}] );
console.log(list);

list = groceries( [{item: 'Cheese Balls'}] );
console.log(list);


