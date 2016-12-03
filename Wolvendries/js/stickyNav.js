$(document).ready(function() {
var stickyNavTop = $('#container').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('nav').addClass('sticky');
    $("nav").css("animation-name" , "navigatie");
    $("nav").css("animation-duration" , "0.8s");
} else {
    $('nav').removeClass('sticky');
    $("nav").css("position" , "fixt");
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});