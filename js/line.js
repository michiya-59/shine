function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function highlightOnScroll() {
  const highlights = document.querySelectorAll('.highlight');

  highlights.forEach((highlight) => {
    if (isInViewport(highlight)) {
      highlight.classList.add('visible');
    } else {
      highlight.classList.remove('visible');
    }
  });
}

window.addEventListener('load', () => {
  document.addEventListener('scroll', highlightOnScroll);
});