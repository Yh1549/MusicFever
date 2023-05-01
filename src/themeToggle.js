export function themeToggle(value) {
  let toggleEl = document.querySelector("html");
  if (!value) {
    toggleEl.setAttribute("data-theme", "autumn");
  } else {
    toggleEl.setAttribute("data-theme", "coffee");
  }
}
