// go up button variables
const goUpBtn = document.querySelector("#go-up-btn");

/**
 * Show/Hide goUpBtn
 */
export const showHideGoUpBtn = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      goUpBtn.classList.add("go-up__btn--visible");
    } else {
      goUpBtn.classList.remove("go-up__btn--visible");
    }
  });
};
