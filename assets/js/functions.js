export const toggle_accordion = e => {
  const button = e.target;
  const accordion_content = button.nextElementSibling;

  button.classList.toggle('active');
  const isAccOpen = accordion_content.style.maxHeight;

  if (isAccOpen) {
    accordion_content.style.maxHeight = null;
    return;
  }

  accordion_content.style.maxHeight = `${accordion_content.scrollHeight}px`;
};