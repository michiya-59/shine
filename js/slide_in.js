$(function() {
  const slideInText = document.querySelectorAll('.slide_in_text');
  
  const isElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const handleScroll = () => {
    slideInText.forEach(el => {
      if (isElementInViewport(el)) {
        el.classList.add('active');
      }
    });
  }

  const handleLoad = () => {
    handleScroll();
    window.removeEventListener('load', handleLoad);
  }
  
  window.addEventListener('load', handleLoad);
});
