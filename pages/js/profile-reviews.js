document.querySelectorAll('.reviews-tab-item').forEach((tabItem, idx) => {
  tabItem.addEventListener('click', (e) => {
    // sets aria states on tab link
    document.querySelectorAll('.reviews-tab-item').forEach((el) => {
      if (el !== e.currentTarget) {
        el.setAttribute('aria-selected', false);
      } else {
        el.setAttribute('aria-selected', true);
      }
    });

    // sets aria states on tab panel
    document.querySelectorAll('.tab-panel').forEach((el) => {
      const currentTarget = document.querySelectorAll('.tab-panel')[idx];

      if (el !== currentTarget) {
        el.setAttribute('aria-hidden', true);
      } else {
        el.setAttribute('aria-hidden', false);
      }
    });
  });
});
