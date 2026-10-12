(() => {
  const root = document.querySelector("[data-research-tabs]");
  if (!root) return;

  const tablist = root.querySelector(".research-tabs");
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll("a"));
  const panels = tabs.map((tab) => document.getElementById(tab.hash.slice(1)));
  if (!tabs.length || panels.some((panel) => !panel || !root.contains(panel))) return;

  const narrowScreen = window.matchMedia("(max-width: 575px)");
  const setOrientation = () => {
    tablist.setAttribute("aria-orientation", narrowScreen.matches ? "vertical" : "horizontal");
  };

  tablist.setAttribute("role", "tablist");
  setOrientation();
  narrowScreen.addEventListener("change", setOrientation);

  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panels[index].id);
    panels[index].setAttribute("role", "tabpanel");
    panels[index].setAttribute("aria-labelledby", tab.id);
    panels[index].tabIndex = 0;
  });

  const activateTab = (index, { focus = false, updateHash = false } = {}) => {
    const focusWouldBeHidden = panels.some((panel, panelIndex) => panelIndex !== index && panel.contains(document.activeElement));

    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].hidden = !selected;
    });

    if (updateHash && window.location.hash !== tabs[index].hash) {
      window.history.pushState(window.history.state, "", tabs[index].hash);
    }
    if (focus || focusWouldBeHidden) tabs[index].focus();
  };

  const indexFromHash = () => {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return -1;
    }
    const target = document.getElementById(id);
    return panels.findIndex((panel) => panel === target || panel.contains(target));
  };

  const syncFromHash = () => {
    const index = indexFromHash();
    if (index !== -1 || !window.location.hash) activateTab(index === -1 ? 0 : index);
    return index;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activateTab(index, { updateHash: true });
    });

    tab.addEventListener("keydown", (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const previousKey = narrowScreen.matches ? "ArrowUp" : "ArrowLeft";
      const nextKey = narrowScreen.matches ? "ArrowDown" : "ArrowRight";
      let nextIndex;

      if (event.key === previousKey) nextIndex = (index + tabs.length - 1) % tabs.length;
      else if (event.key === nextKey) nextIndex = (index + 1) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else if (event.key === " ") nextIndex = index;
      else return;

      event.preventDefault();
      activateTab(nextIndex, { focus: true, updateHash: true });
    });
  });

  // Without JavaScript, the links remain ordinary anchors and all directions stay visible.
  root.classList.add("is-tabbed");
  const initialIndex = indexFromHash();
  activateTab(initialIndex === -1 ? 0 : initialIndex);
  if (initialIndex !== -1) {
    window.requestAnimationFrame(() => tablist.scrollIntoView({ block: "start" }));
  }

  window.addEventListener("popstate", syncFromHash);
  window.addEventListener("hashchange", () => {
    if (syncFromHash() !== -1) tablist.scrollIntoView({ block: "start" });
  });
})();
