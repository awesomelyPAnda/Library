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

