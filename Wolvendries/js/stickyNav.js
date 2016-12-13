$(document).ready(function() {
var stickyNavTop = $('#banner a').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('nav').addClass('sticky');
} else {
    $('nav').removeClass('sticky');
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});