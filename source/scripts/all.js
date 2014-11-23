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
        var headerHeight = $('header').height();
        target = target.offset().top - headerHeight;
        $('html,body').animate({
          scrollTop: target
        }, 1000);
        $('.menu, .mobile-nav ul').removeClass('active');
        return false;
      }
    }
  });
});
