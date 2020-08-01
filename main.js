document.addEventListener("DOMContentLoaded", () => {

  // Get all buttons
  const allButtons = document.querySelectorAll(".accordion__item__title");

  /** FUNCTIONS */
  const toggleAccordion = e => {

    // Get clicked button and title element of accordion
    const button = e.target;
    const accordionContent = button.nextElementSibling;

    // Toggle active class to change + -
    button.classList.toggle("active");

    const isAccOpen = accordionContent.style.maxHeight;

    if (isAccOpen) {
      // Then close it
      accordionContent.style.maxHeight = null;
    } else {
      // Then open it
      // Need to set scrollheight, 100% wont work, need to check height of content!
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    }

  };

  // Transform from Nodelist, give it click event and ROLL!
  Array.from(allButtons).map(button => button.addEventListener("click", toggleAccordion));
})