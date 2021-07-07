import { toggle_accordion } from './functions.js';

document.addEventListener("DOMContentLoaded", () => {
  const all_buttons = document.querySelectorAll(".accordion__item__title");
  for (const button of all_buttons) button.addEventListener('click', toggle_accordion);
});