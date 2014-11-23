$(document).ready(function(){
  $('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.mobile-nav ul').toggleClass('active');
  });

  var headerHeight = $('header').height();
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.menu, .mobile-nav ul').removeClass('active');
        target = target.offset().top - headerHeight;
        $('html,body').animate({
          scrollTop: target
        }, 1000);
        return false;
      }
    }
  });
});
