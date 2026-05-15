class Book {
    constructor(title, author, pages, read) {
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
    }
}

book = new Book("the hobbit", "Teddy", "56")


book.logtitle()
book.logauthor()