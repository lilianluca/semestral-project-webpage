// navbar variables
const navbar = document.querySelector("#burger-btn");
const listContainer = document.querySelector("#list__container");

/**
 * Open/Close burger menu
 */
export const toggleBurgerMenu = () => {
  navbar.addEventListener("click", () => {
    listContainer.classList.toggle("open-menu");
  });
};
