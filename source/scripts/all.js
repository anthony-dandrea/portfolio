$(document).ready(function(){
  $('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.mobile-nav ul').toggleClass('active');
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   console.log('foo');
//   var openNav = function(){
//     console.log('bar');
//     document.getElementById('menu').setAttribute('class','active');
//   };
//   document.getElementById('menu').onclick = openNav();
// });