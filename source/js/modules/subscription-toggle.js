const tabs = document.querySelectorAll('.subscription__tabs-item');

const toggleTabs = () => {
  tabs.forEach((currentTab) => {
    currentTab.addEventListener('click', () => {
      let tabNumber = currentTab.getAttribute('data-number');
      let cardSelector = '.' + tabNumber;

      const cards = document.querySelectorAll(cardSelector);

      cards.forEach((card) => {

      });
    });
  });
};

export {toggleTabs};
