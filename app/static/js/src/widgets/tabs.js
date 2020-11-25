class Tabs {
  constructor(nodeElement) {
    this.$container = nodeElement;
    this.$tabsButtons = this.$container.querySelectorAll('.js-tabs');
    this.$tabsContent = this.$container.querySelectorAll('.js-tabs-content');

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.removeActiveTabs = this.removeActiveTabs.bind(this);
    this.removeActiveTabsContent = this.removeActiveTabsContent.bind(this);
    this.showTabContent = this.showTabContent.bind(this);
    this.init();
  }

  removeActiveTabs() {
    this.$tabsButtons.forEach((option) => {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
      }
    });
  };

  removeActiveTabsContent() {
    this.$tabsContent.forEach((option) => {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
      }
    });
  };

  showTabContent(tabToShow) {
    this.removeActiveTabsContent();
    for (let i = 0; i < this.$tabsContent.length; i++) {
      if (i === tabToShow) {
        if( !this.$tabsContent[i].classList.contains("active")){
          this.$tabsContent[i].classList.add('active');
        }
      }
    }
  }

  handleButtonClick(event) {
    event.preventDefault();
    const optionElement = event.target.closest(".js-tabs");
    if(!optionElement) return ;
      this.removeActiveTabs();
      optionElement.classList.add('active');

    for (let i = 0; i < this.$tabsButtons.length; i++) {
      if (this.$tabsButtons[i].classList.contains('active')) {
        this.showTabContent(i);
      }
    }
  }

  init() {
    this.$tabsButtons.forEach((option) => {
      option.addEventListener('click', this.handleButtonClick);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-tabs-container').forEach((item) => {
    new Tabs(item);
  });
});
