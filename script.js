const navbar = document.querySelector("#burger-btn");
const listContainer = document.querySelector("#list__container");

let showNavbarState = true;

navbar.addEventListener("click", () => {
  if (showNavbarState) {
    listContainer.classList.remove("close-menu");
    listContainer.classList.add("open-menu");
    showNavbarState = false;
  } else {
    listContainer.classList.remove("open-menu");
    listContainer.classList.add("close-menu");
    showNavbarState = true;
  }
});
