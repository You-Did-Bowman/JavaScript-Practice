"use-strict"
/* ------------------------------ MOVIE RATINGS ANALYZER ------------------------------

You are tasked with creating a simple program that analyzes an array of movie ratings and performs various operations using array functions like map(), filter(), reduce(), and forEach().

1.Input:
- An array of objects, where each object represents a movie with the following structure:
const movies = [
  { title: "Inception", rating: 9.0, genre: "Sci-Fi" },
  { title: "The Godfather", rating: 9.2, genre: "Crime" },
  { title: "Titanic", rating: 7.8, genre: "Romance" },
  { title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { title: "Forrest Gump", rating: 8.8, genre: "Drama" }
];

2. Tasks:
- Filter: Create a new array with movies that have a rating greater than or equal to 9.0.
- Map: Generate an array of strings that contains only the titles of all movies.
- Reduce: Calculate the average rating of all movies.
- forEach: Print each movie's title along with its genre in a readable format (e.g., "Inception is a Sci-Fi movie.").

- Bonus:
- Find the highest-rated movie using a combination of array functions.
- Group movies by their genre into an object using reduce().

3. Expected Output:
- High-Rated Movies: [ { title: "Inception", rating: 9.0, genre: "Sci-Fi" }, ... ]
- Movie Titles: [ "Inception", "The Godfather", "Titanic", "The Dark Knight", "Forrest Gump" ]
- Average Rating: 8.76
- "Inception is a Sci-Fi movie."
- "The Godfather is a Crime movie."
...
- Highest-Rated Movie: { title: "The Godfather", rating: 9.2, genre: "Crime" }
- Movies by Genre: {
    Sci-Fi: [ { title: "Inception", rating: 9.0, genre: "Sci-Fi" } ],
    Crime: [ { title: "The Godfather", rating: 9.2, genre: "Crime" } ],
    ...
}
*/
const movies = [
  { title: "Inception", rating: 9.0, genre: "Sci-Fi" },
  { title: "The Godfather", rating: 9.2, genre: "Crime" },
  { title: "Titanic", rating: 7.8, genre: "Romance" },
  { title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { title: "Forrest Gump", rating: 8.8, genre: "Drama" },
];

let greatMovies = movies.filter((el) => el.rating >= 9.0);
console.log("High-Rated Movies: ", greatMovies);

console.log();

let titles = movies.map((el) => el.title);
console.log("Movie titles: ", titles);

const totalRating = movies.reduce((acc, el) => acc + el.rating, 0);
let averageRating = totalRating / movies.length;

console.log();

console.log("Average Rating: ", averageRating);

console.log();

movies.forEach((el) => console.log(`"${el.title}" is a ${el.genre} movie`));

console.log();

const highestMovie = movies.sort((a, b) => b.rating - a.rating)[0]
console.log("Highest Rated Movie: ", highestMovie);

console.log();

const sortAfterGenre = movies.reduce((acc, el) => {
    if(!acc[el.genre]) {
        acc[el.genre] = [];
    }
    acc[el.genre].push(el);
    return acc
},{})
console.log("Sorted by Genre: ", sortAfterGenre);

console.log();

console.clear();

/* ------------------------------ SUM OF POSITIVE NUMBER ------------------------------

Given an array of numbers, use reduce() to find the sum of all positive numbers.

const numbers = [3, -1, 4, -2, 5, -6, 7];

Expected Output: Sum of positive numbers: 19
*/
console.log("*** SUM OF POSITIVE NUMBER ***");

const numbers = [3, -1, 4, -2, 5, -6, 7];

const posNums = numbers
.filter((el) => el > 0)
.reduce((acc, el) => acc + el, 0)

console.log(posNums);

console.log();

/* ------------------------------ FLATTEN AN ARRAY ------------------------------

Use reduce() to flatten a 2D array into a 1D array.

const nestedArray = [[1, 2], [3, 4], [5, 6]];

Expected Output: [1, 2, 3, 4, 5, 6]
*/
console.log("*** FLATTEN AN ARRAY ***");

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattendArray = nestedArray.reduce((acc, el) => acc.concat(el), [])

console.log(flattendArray);


/* 

3. Count Occurrences

Task: Given an array of strings, use reduce() to count the occurrences of each string.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

Expected Output: { apple: 3, banana: 2, orange: 1 }
4. Find the Longest String

Task: Use reduce() to find the longest string in an array.

const strings = ["short", "medium", "extra-long-word", "tiny"];

Expected Output: "extra-long-word"
5. Group Objects by Property

Task: Use reduce() to group an array of objects by a specific property.

const animals = [
  { name: "dog", type: "mammal" },
  { name: "cat", type: "mammal" },
  { name: "parrot", type: "bird" },
  { name: "goldfish", type: "fish" }
];

Expected Output:

{
  mammal: [
    { name: "dog", type: "mammal" },
    { name: "cat", type: "mammal" }
  ],
  bird: [{ name: "parrot", type: "bird" }],
  fish: [{ name: "goldfish", type: "fish" }]
}

6. Maximum Value in an Array

Task: Use reduce() to find the maximum value in an array.

const values = [12, 7, 22, 3, 27, 19];

Expected Output: 27
7. Reverse a String

Task: Use reduce() to reverse a string.

const str = "reduce";

Expected Output: "ecuder"
8. Calculate Total Price

Task: Given a shopping cart (array of objects), use reduce() to calculate the total price.

const cart = [
  { item: "Laptop", price: 999, quantity: 1 },
  { item: "Phone", price: 499, quantity: 2 },
  { item: "Headphones", price: 149, quantity: 4 }
];

Expected Output: Total Price: 2594
9. Filter Using Reduce

Task: Use reduce() to create a new array containing only numbers greater than a certain threshold.

const numbers = [5, 12, 8, 21, 3, 7];
const threshold = 10;

Expected Output: [12, 21]
10. Fibonacci Sequence

Task: Use reduce() to generate the first n numbers of the Fibonacci sequence in an array.

const n = 7; // Number of Fibonacci numbers

Expected Output: [0, 1, 1, 2, 3, 5, 8]
*/
