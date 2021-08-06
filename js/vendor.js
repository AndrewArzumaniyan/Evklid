window.addEventListener('DOMContentLoaded', function () {
  let tabName = document.querySelectorAll('.work__item');
  let tabContent = document.querySelectorAll('.work__row');

  tabName.forEach(function (tabBtn) {
    tabBtn.addEventListener('click', function (event) {
      //remove and add a class 'active' on tab element
      let currentTab = tabBtn;

      tabName.forEach(function (item) {
        item.classList.remove('active');
      });

      currentTab.classList.add('active');
      //========================================================================================================================================================
      //create a tabs
      const tab = event.currentTarget.dataset.tab;

      tabContent.forEach(function (content) {
        content.classList.remove('active');
      });

      document.querySelector(`[data-target="${tab}"]`).classList.add('active');
      //========================================================================================================================================================

    });
  });
});
