// Constants
const NUM_OF_ELEMENTS = 6;
const SHOW_MORE_TEXT = 'Zobrazit více';
const SHOW_LESS_TEXT = 'Zobrazit méně';

// Most visited variables
const showMoreBtn = document.querySelector('#most-visited-show-more__btn');
const mostVisitedList = document.querySelector('#most-visited__list');
const mostVisitedChildren = mostVisitedList.children;
const allElements = Array.from(mostVisitedChildren);
const firstNElements = Array.from(mostVisitedChildren).slice(
  0,
  NUM_OF_ELEMENTS
);
// States
let showMore = false;

// Replace all children of mostVisitedList with firstNElements
mostVisitedList.replaceChildren(...firstNElements);

export const toggleShowMore = () => {
  showMoreBtn.addEventListener('click', () => {
    if (showMore) {
      mostVisitedList.replaceChildren(...firstNElements);
      showMoreBtn.innerHTML = SHOW_MORE_TEXT;
    } else {
      mostVisitedList.replaceChildren(...allElements);
      showMoreBtn.innerHTML = SHOW_LESS_TEXT;
    }
    showMore = !showMore;
  });
};
