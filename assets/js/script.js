

const myLibrary = [];

function generateUUID(){
    return crypto.randomUUID()
}


class Book {
    constructor(title, author, pages, read) {
        this.uuid = generateUUID()
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
        this.logtitle = function() {
            console.log(this.title)
        }
        this.logauthor = function() {
            console.log(this.author)
        }
        this.logpages = function() {
            console.log(this.pages)
        }
    }
}


function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
     myLibrary.push(newBook);
}

addBookToLibrary(prompt("title"), prompt("author"), prompt("pages"));
addBookToLibrary("Dune", "Frank Herbert", 412);

console.log("All IDs:", myLibrary);


const firstBook = myLibrary[0];
firstBook.logtitle();
firstBook.logauthor();