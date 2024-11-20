/* -------------------- Task 1: Car Simulator --------------------

Create a class Car with the following properties:
- brand (String)
- model (String)
- year (Number)
- speed (Number, default: 0)

Add methods:
- accelerate(amount): Increases the speed by the specified amount.
- brake(amount): Decreases the speed by the specified amount but cannot go below 0.
- info(): Returns the brand, model, year, and current speed as a string.

Test the class:
- Create a new Car object.
- Accelerate and brake the car a few times.
- Output the car's info. 
*/
console.log("**** TASK 1 ****");

class Car {
  constructor(brand, model, year, speed = 0) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }

  accelerate(amount) {
    return (this.speed += amount);
  }

  brake(amount) {
    this.speed -= amount;
    if (this.speed < 0) {
      return (this.speed = 0);
    }
    return this.speed;
  }

  info() {
    return `brand: ${this.brand}, model: ${this.model}, year: ${this.year}, speed: ${this.speed}`;
  }
}

let car1 = new Car("Toyota", "Yaris", 1999, 100);

console.log(car1.accelerate(10)); // 110
console.log(car1.brake(50)); // 60
console.log(car1.brake(70)); // 0
console.log(car1.info()); // brand: Toyota, model: Yaris, year 1999, speed: 0

console.log();

/* -------------------- Task 2: Library --------------------

Create a class Book with the following properties:
- title (String)
- author (String)
- pages (Number)
- read (Boolean)

Add a method:
- markAsRead(): Sets read to true.

Create a class Library that manages a collection of books:
- Properties:
    - books (Array of Book objects)
- Methods:
    - addBook(book): Adds a new book to the library.
    - listAllBooks(): Outputs the titles of all books.
    - listReadBooks(): Outputs only the titles of books that have been read.

Test the classes by adding multiple books, marking some as read, and displaying the list of books.
*/
console.log("**** TASK 2 ****");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  markAdRead() {
    return (this.read = true);
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  listAllBooks() {
    let title = [];
    for (let i = 0; i < this.books.length; i++) {
      title.push(this.books[i].title);
    }
    return title;
  }
  listReadBooks() {
    let title = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].read === true) {
        title.push(this.books[i].title);
      }
    }
    return title;
  }
}

let book1 = new Book("The Little Prnice", "Antoine de S.-E.", 150, false);
let book2 = new Book("A Tale of Two Cities", "Charles Dickens", 200, false);
let book3 = new Book("The Hobbit", "J. R. R.  Tolkien", 220, true);
let book4 = new Book("The Alchemist", "Paulo Coelho", 250, false);

book1.markAdRead();

let library1 = new Library();

library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.addBook(book4);

console.log(library1.listAllBooks());
console.log(library1.listReadBooks())
console.log(library1);
