/* ***** OBJECT: CREATE, ACCESS, UPDATE *****

This exercise is meant to let you properly understand and practice basic operations we perform with objects, tipically:
- creating objects
- accessing, reading, their properties
- updating, modifying, the values of these properties

------------------------------ Task 1 ------------------------------

Given the object below, change the value of the read property from false to true. Then, output the whole object to the console.
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};
Expected output:
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}
*/
const book = {
  title: "A Smarter Way to Learn JavaScript",
  author: "Mark Myers",
  price: 19.95,
  read: false,
};

book.read = true;

console.log(book);

console.clear ();

