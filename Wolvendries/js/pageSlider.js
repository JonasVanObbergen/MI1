$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function colorize(element) {
  $('li').removeClass('active');
  $(element).addClass('active');
}

// should be refactored as not DRY
$(window).scroll(function() {
  var windowHeight = window.innerHeight;
  if (window.pageYOffset > windowHeight * 30.50) {
    colorize('.second');
  }

  if (window.pageYOffset < windowHeight) {
    colorize('.first');
  }

  if (window.pageYOffset > windowHeight * 20.50) {
    colorize('.third');
  }

  if (window.pageYOffset > windowHeight * 10.94) {
    colorize('.fourth');
  }

})