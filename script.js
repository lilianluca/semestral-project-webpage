// navbar variables
const navbar = document.querySelector("#burger-btn");
const listContainer = document.querySelector("#list__container");
// go up button variables
const goUpBtn = document.querySelector("#go-up-btn");

/**
 * Open/Close burger menu
 */
navbar.addEventListener("click", () => {
  listContainer.classList.toggle("open-menu");
});

/**
 * Show/Hide goUpBtn
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    goUpBtn.classList.add("go-up__btn--visible");
  } else {
    goUpBtn.classList.remove("go-up__btn--visible");
  }
});
