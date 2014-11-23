$(document).ready(function(){
  $('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.mobile-nav ul').toggleClass('active');
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