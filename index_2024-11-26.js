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








