function tabs(tabsSelector, tabsContentSelector, tabsParentsSelector, activeClass) {
    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentsSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(index = 0) {
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide');
        tabs[index].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;