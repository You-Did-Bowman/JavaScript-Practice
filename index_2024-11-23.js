/*  ------------------ LIBRARY ------------------
1. Create a Book class with the following properties:
- title (string)
- author (string)
- isbn (unique identifier, string)
- isAvailable (boolean, default is true)

2. Create a Library class to manage the collection of books. It should have:
- A property to store the list of books.
- Methods:
    - addBook(book): Adds a new book to the library.
    - removeBook(isbn): Removes a book from the library using its isbn.
    - searchBookByTitle(title): Searches and returns books with matching titles.
    - borrowBook(isbn): Allows a user to borrow a book if it’s available.
    - returnBook(isbn): Marks a borrowed book as available.

3. Ensure proper validations:
- Prevent adding duplicate books by checking the isbn.
- Prevent borrowing unavailable books.
*/

class Book {
  constructor(title, author, isbn, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvaible = isAvailable;
  }
}
// create books
const book1 = new Book("A Tale of Two Cities", "Charles Dickens", 123456789);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 987654321);
const book3 = new Book("Harry Potter", "J.K. Rowling", 123654789);
const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 321456987);

class Library {
  constructor(books) {
    this.books = [];
  }

  addBook(book) {
    // check if a book has the same isbn -> returns true or false
    const bookExists = this.books.some((el) => el.isbn === book.isbn);

    // work with the information of bookExists
    if (!bookExists) {
      this.books.push(book);
    } else {
      console.log(`Book with ISBN ${book.isbn} already exists.`);
    }
  }

  removeBook(book) {
    this.books = this.books.filter((el) => el.isbn !== book.isbn);
    return this.books;
  }

  searchBookByTitle(title) {
    let searchedBook = this.books.find((el) => el.title === title.title);
    console.log(searchedBook);
    
  }

  borrowBook(book) {
    if (this.books.length > 0) {
      // searching for the book and save it inside a variable
      let borrow = this.books.find((el) => el.title === book.title);

      if (borrow) {
        if (borrow.isAvaible) {
          borrow.isAvaible = false;
          console.log(`"${book.title}" is available and you can borrow it.`);
        } else {
          console.log(`"${book.title}" is already borrowed.`);
        }
      } else {
        console.log(`"${book.title}" is not part of our library.`);
      }
    } else {
      console.log("There are no books");
    }
  }

  returnBook(book) {
    let returned = this.books.find((el) => el.title === book.title);
    if (returned) {
      if (!returned.isAvaible) {
        returned.isAvaible = true;
        console.log(`Thank you for bringing back "${book.title}".`);
      } else {
        console.log(
          `"${book.title}" this book does not belong to our library. Our book of "${book.title}" is already available.`
        );
      }
    }
  }
}

// Creat library and add books
const library1 = new Library();
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.addBook(book4);

console.log(library1);

console.log();


// remove book from library
library1.removeBook(book1);

console.log();


//search for book
library1.searchBookByTitle(book2);

console.log();


//borrow books
library1.borrowBook(book2);
library1.borrowBook(book2);
library1.borrowBook(book1);

console.log();


// return books
library1.returnBook(book2);
library1.returnBook(book2);
