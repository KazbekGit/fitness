const tabs = document.querySelectorAll('.subscription__tabs-item');
const cards = document.querySelectorAll('.subscription__cards-price');

const toggleTabs = () => {
  tabs.forEach((currentTab) => {

    currentTab.addEventListener('click', () => {

      if (!currentTab.classList.contains('subscription__tabs-item--active')) {
        tabs.forEach((elem) => {
          elem.classList.remove('subscription__tabs-item--active');
        });

        currentTab.classList.add('subscription__tabs-item--active');

        let tabNumber = currentTab.getAttribute('data-number');
        let cardSelector = '.' + tabNumber;

        const currentCards = document.querySelectorAll(cardSelector);

        cards.forEach((card) => {
          card.classList.add('hide');
        });

        currentCards.forEach((card) => {
          card.classList.remove('hide');
        });
      }
    });
  });
};

export {toggleTabs};
