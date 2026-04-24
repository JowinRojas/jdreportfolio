// src/utils/smoothScroll.js
export const smoothScroll = (e, id, offset = 80) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  }
};