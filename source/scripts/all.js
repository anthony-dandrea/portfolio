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
        var headerWidth = $('header').height();
        console.log(headerWidth);
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.menu, .mobile-nav ul').removeClass('active');
        return false;
      }
    }
  });
});
