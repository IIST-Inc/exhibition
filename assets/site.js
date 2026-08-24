(function () {
  "use strict";

  const tabs = Array.from(document.querySelectorAll("[data-audience-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-audience-panel]"));

  function activateAudience(selectedTab, moveFocus) {
    const target = selectedTab.dataset.audienceTab;

    tabs.forEach(function (tab) {
      const active = tab === selectedTab;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach(function (panel) {
      const active = panel.dataset.audiencePanel === target;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });

    if (moveFocus) {
      selectedTab.focus();
    }
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activateAudience(tab, false);
    });

    tab.addEventListener("keydown", function (event) {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      activateAudience(tabs[nextIndex], true);
    });
  });

  document.querySelectorAll(".faq-list details").forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      const marker = detail.querySelector("summary span");
      if (marker) marker.textContent = detail.open ? "−" : "+";
    });
  });
})();
