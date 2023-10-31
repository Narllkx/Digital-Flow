$(window).on('load', function () {
  setTimeout(function () {
    $('.loader-box').fadeOut('fast');
  });
});

AOS.init();

new fullpage('#fullpage', {
  scrollingSpeed: 1200,
  scrollBar: false,
  anchors: [
    'firstPage',
    'secondPage',
    '3rdPage',
    '4thpage',
    '5thPage',
    'lastPage',
  ],
  menu: '#menu',
  slidesNavigation: true,
});

$('.nav-menu__opener, .nav-menu').click(function () {
  $('.nav-menu').toggleClass('active');
  $('.nav-menu__opener').toggleClass('active');
});
