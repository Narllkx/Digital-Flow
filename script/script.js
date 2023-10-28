$(window).on('load', function () {
  setTimeout(function () {
    $('.loader-box').fadeOut('fast');
  });
});

AOS.init();

new fullpage('#fullpage', {
  scrollingSpeed: 1000,
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

$('.nav-menu__opener').click(function () {
  $('.nav-menu').addClass('active');
  $('.nav-menu__opener').addClass('active');
});
$('.nav-menu__closer').click(function () {
  $('.nav-menu').removeClass('active');
  $('.nav-menu__opener').removeClass('active');
});
