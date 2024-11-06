/* 
------------------------------ Objects: Task 4 ------------------------------
Given the object below, add a new property to it called fullName.
The property should combine the values from firstName and lastName, separated by a space.
const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

Expected output:
{
    firstName: "Jim",
    lastName: "Jameson",
    age: 37,
    fullName: "Jim Jameson"
};
*/
const person2 = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

person2["fullName"] = person2.firstName + " " + person2.lastName;

