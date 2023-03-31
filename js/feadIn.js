$(document).ready(function() {
  $(window).scroll(function() {
    $('.slide-up').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop() + $(window).height();
      if (elementPos < topOfWindow) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  });
});