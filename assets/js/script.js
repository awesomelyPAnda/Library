/* intalizing book render enviroment and library array */
const container = document.querySelector(".book-container")
const myLibrary = [];
/* id generation functiom */
function generateUUID(){
    return crypto.randomUUID()
}
/* button text animation function */
function animateText(element, newText) {
  element.style.transition = "opacity 0.2s ease";
  element.style.opacity = 0;
  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = 1;
  }, 200); // wait for fade out, then change text and fade back in
}

/* book storage variable */
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

/* renders book on the ui after added to class */
function renderBook(book) {
    
    console.log(book)
    /* creating the elements */
    const card = document.createElement("div")
    const title = document.createElement("p")
    const origin = document.createElement("p")
    const pages = document.createElement("p")
    const tasted = document.createElement("button")
    const tastedtext = document.createElement("span")
    const deletebtn = document.createElement("button")

    /*checking value of checkmark */
    if(book.read === true){
        tasted.classList.add("checked", "btn", "tasted")
        tastedtext.textContent = "tasted"
    }
    else{
        tasted.classList.add("not-checked", "btn", "tasted")
        tastedtext.textContent = "not tasted"
    }
    deletebtn.addEventListener("click", () => {
        const index = myLibrary.findIndex(b => b.uuid === book.uuid);
        myLibrary.splice(index, 1);
        card.remove();
    });
    
    /* adding classes for css styling */
    tastedtext.classList.add("tasted-text")
    title.classList.add("card-title")
    origin.classList.add("card-origin")
    pages.classList.add("card-pages")
    deletebtn.classList.add("btn", "delete-btn")
    /* Changing text content */
    title.textContent = book.title
    origin.textContent = `origin country: ${book.origin}`
    pages.textContent = `${book.pages} stalks`
    deletebtn.textContent = "remove bamboo"
    /* appending elements */
    tasted.appendChild(tastedtext)
    card.appendChild(title)
    card.appendChild(origin)
    card.appendChild(pages)
    card.appendChild(tasted)
    card.appendChild(deletebtn)
    card.classList.add("card")
    container.appendChild(card)
    /* event listener for buttons */
     tasted.addEventListener("click", (event) => {
        if (tasted.classList.contains("checked")) {
            tasted.classList.add("not-checked")
            tasted.classList.remove("checked")
            animateText(tastedtext, "not tasted")
        }
        else {
            tasted.classList.add("checked")
            tasted.classList.remove("not-checked")
            animateText(tastedtext, "tasted")
        }
    })
    tasted.addEventListener("mouseover", (event) => {
        tasted.classList.add("hov")
    })
    tasted.addEventListener("mouseleave", (event) => {
        tasted.classList.remove("hov")
    })
    deletebtn.addEventListener("mouseleave", (event) => {
        deletebtn.classList.remove("hov")
    })
    deletebtn.addEventListener("mouseover", (event) => {
        deletebtn.classList.add("hov")
    })
    
    
}

/* resets the adding form after every open */
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("origin").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

/* adds book to library */
function addBookToLibrary(title, origin, pages, read) {
    /* checks if book exists in library */
  const exists = myLibrary.some(book => book.title === title &&  book.origin === origin);
  if (exists) {
    alert("Error: Book already in library");
    return;
  }
  /* adds book */
  const newBook = new Book(title, origin, pages, read);
  myLibrary.push(newBook);
  renderBook(newBook)
}

/* styling for add button */

const button = document.querySelector(".new-btn")




  button.addEventListener("mouseover", (event) => {
        button.classList.add("hover")
        button.classList.remove("non")
  })



  button.addEventListener("mouseleave", (event) => {
        button.classList.add("non")
        button.classList.remove("hover")
  })


const popover = document.getElementById("form");
const overlay = document.getElementById("overlay")


let check = 0

button.addEventListener('click', () => {
    if (check == 0) {
  popover.classList.add('show');
  popover.classList.remove('hide');
  overlay.classList.add('show');
  overlay.classList.remove('hide');
  check = 1;
} else {
  popover.classList.remove('show');
  popover.classList.add('hide');
  overlay.classList.remove('show');
  overlay.classList.add('hide');
  check = 0;
}
  
});

document.addEventListener('click', (e) => {
  if (!popover.contains(e.target) && !button.contains(e.target)) {
    popover.classList.remove('show');
    popover.classList.add('hide');
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    check = 0;
  }
});



/* submit button event listners */


const submit = document.getElementById("submit")

submit.addEventListener('click', (e) => {
    const stuff = {
        title: document.getElementById("title").value,
        origin: document.getElementById("origin").value,
        number: document.getElementById("pages").value,
        checkbox: document.getElementById("read").checked
    }
    if (!stuff.title || !stuff.origin || !stuff.number) {
  alert("Please fill in all fields");
  return;
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

