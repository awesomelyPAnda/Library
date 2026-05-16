
const container = document.querySelector(".book-container")
const myLibrary = [];

function generateUUID(){
    return crypto.randomUUID()
}


class Book {
    constructor(title, origin, pages, read) {
        this.uuid = generateUUID()
        this.title = title;
        this.origin = origin;
        this.pages = pages;
        this.read = read;
        this.logtitle = function() {
            console.log(this.title)
        }
        this.logorigin = function() {
            console.log(this.origin)
        }
        this.logpages = function() {
            console.log(this.pages)
        }
        this.loguuid = function() {
            console.log(this.uuid)
        }
        this.logread = function() {
            console.log(this.read)
        }
    }
}
function renderBook(book) {
    console.log(book)
    const card = document.createElement("div")
    const title = document.createElement("p")
    const origin = document.createElement("p")
    const pages = document.createElement("p")
    title.classList.add("card-title")
    origin.classList.add("card-origin")
    pages.classList.add("card-pages")
    title.textContent = book.title
    origin.textContent = `origin country: ${book.origin}`
    pages.textContent = `${book.pages} stalks`
    card.appendChild(title)
    card.appendChild(origin)
    card.appendChild(pages)
    card.classList.add("card")
    container.appendChild(card)
    
    
}
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("origin").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}


function addBookToLibrary(title, origin, pages, read) {
  const exists = myLibrary.some(book => book.title === title &&  book.origin === origin);
  if (exists) {
    alert("Error: Book already in library");
    return;
  }
  const newBook = new Book(title, origin, pages, read);
  myLibrary.push(newBook);
  renderBook(newBook)
}








const submit = document.getElementById("submit")

submit.addEventListener('click', (e) => {
    const stuff = {
        title: document.getElementById("title").value,
        origin: document.getElementById("origin").value,
        number: document.getElementById("pages").value,
        checkbox: document.getElementById("read").checked
    }
    addBookToLibrary(stuff.title, stuff.origin, stuff.number, stuff.checkbox)
    popover.classList.remove('show');
    popover.classList.add('hide');
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    check = 0;
    resetForm()
});


addBookToLibrary("hello", "test", "56", false)
addBookToLibrary("reallylongstringoftext", "kindashort?", 1000, true)

