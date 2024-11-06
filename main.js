/* 
------------------------------ Objects: Task 5 ------------------------------
Given the object below, modify the value of the property city so that the first letter is correctly capitalised.
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
IMPORTANT: try to use and modify the current value of city rather than manually typing London.

Expected output:
{
    firstName: "Sylvia",
    lastName: "Sun",
    city: "London"
};
*/
const person3 = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
person3.city = person3.city[0].toUpperCase() + person3.city.slice(1);
